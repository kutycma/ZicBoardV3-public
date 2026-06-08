function sy(s,l){for(var o=0;o<l.length;o++){const d=l[o];if(typeof d!="string"&&!Array.isArray(d)){for(const u in d)if(u!=="default"&&!(u in s)){const m=Object.getOwnPropertyDescriptor(d,u);m&&Object.defineProperty(s,u,m.get?m:{enumerable:!0,get:()=>d[u]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function o(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(u){if(u.ep)return;u.ep=!0;const m=o(u);fetch(u.href,m)}})();function oy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var od={exports:{}},ls={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function ry(){if(Kf)return ls;Kf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(d,u,m){var h=null;if(m!==void 0&&(h=""+m),u.key!==void 0&&(h=""+u.key),"key"in u){m={};for(var C in u)C!=="key"&&(m[C]=u[C])}else m=u;return u=m.ref,{$$typeof:s,type:d,key:h,ref:u!==void 0?u:null,props:m}}return ls.Fragment=l,ls.jsx=o,ls.jsxs=o,ls}var Ff;function cy(){return Ff||(Ff=1,od.exports=ry()),od.exports}var t=cy(),rd={exports:{}},Le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function dy(){if(Vf)return Le;Vf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),h=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),S=Symbol.iterator;function B(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,A={};function Q(N,M,ee){this.props=N,this.context=M,this.refs=A,this.updater=ee||I}Q.prototype.isReactComponent={},Q.prototype.setState=function(N,M){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,M,"setState")},Q.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function R(){}R.prototype=Q.prototype;function L(N,M,ee){this.props=N,this.context=M,this.refs=A,this.updater=ee||I}var ae=L.prototype=new R;ae.constructor=L,$(ae,Q.prototype),ae.isPureReactComponent=!0;var P=Array.isArray;function se(){}var D={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function ne(N,M,ee){var me=ee.ref;return{$$typeof:s,type:N,key:M,ref:me!==void 0?me:null,props:ee}}function be(N,M){return ne(N.type,M,N.props)}function _(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function H(N){var M={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ee){return M[ee]})}var re=/\/+/g;function Y(N,M){return typeof N=="object"&&N!==null&&N.key!=null?H(""+N.key):M.toString(36)}function de(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(se,se):(N.status="pending",N.then(function(M){N.status==="pending"&&(N.status="fulfilled",N.value=M)},function(M){N.status==="pending"&&(N.status="rejected",N.reason=M)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,M,ee,me,Se){var Me=typeof N;(Me==="undefined"||Me==="boolean")&&(N=null);var Ue=!1;if(N===null)Ue=!0;else switch(Me){case"bigint":case"string":case"number":Ue=!0;break;case"object":switch(N.$$typeof){case s:case l:Ue=!0;break;case j:return Ue=N._init,z(Ue(N._payload),M,ee,me,Se)}}if(Ue)return Se=Se(N),Ue=me===""?"."+Y(N,0):me,P(Se)?(ee="",Ue!=null&&(ee=Ue.replace(re,"$&/")+"/"),z(Se,M,ee,"",function(et){return et})):Se!=null&&(_(Se)&&(Se=be(Se,ee+(Se.key==null||N&&N.key===Se.key?"":(""+Se.key).replace(re,"$&/")+"/")+Ue)),M.push(Se)),1;Ue=0;var Je=me===""?".":me+":";if(P(N))for(var Re=0;Re<N.length;Re++)me=N[Re],Me=Je+Y(me,Re),Ue+=z(me,M,ee,Me,Se);else if(Re=B(N),typeof Re=="function")for(N=Re.call(N),Re=0;!(me=N.next()).done;)me=me.value,Me=Je+Y(me,Re++),Ue+=z(me,M,ee,Me,Se);else if(Me==="object"){if(typeof N.then=="function")return z(de(N),M,ee,me,Se);throw M=String(N),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return Ue}function V(N,M,ee){if(N==null)return N;var me=[],Se=0;return z(N,me,"","",function(Me){return M.call(ee,Me,Se++)}),me}function T(N){if(N._status===-1){var M=N._result;M=M(),M.then(function(ee){(N._status===0||N._status===-1)&&(N._status=1,N._result=ee)},function(ee){(N._status===0||N._status===-1)&&(N._status=2,N._result=ee)}),N._status===-1&&(N._status=0,N._result=M)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},k={map:V,forEach:function(N,M,ee){V(N,function(){M.apply(this,arguments)},ee)},count:function(N){var M=0;return V(N,function(){M++}),M},toArray:function(N){return V(N,function(M){return M})||[]},only:function(N){if(!_(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return Le.Activity=w,Le.Children=k,Le.Component=Q,Le.Fragment=o,Le.Profiler=u,Le.PureComponent=L,Le.StrictMode=d,Le.Suspense=y,Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,Le.__COMPILER_RUNTIME={__proto__:null,c:function(N){return D.H.useMemoCache(N)}},Le.cache=function(N){return function(){return N.apply(null,arguments)}},Le.cacheSignal=function(){return null},Le.cloneElement=function(N,M,ee){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var me=$({},N.props),Se=N.key;if(M!=null)for(Me in M.key!==void 0&&(Se=""+M.key),M)!G.call(M,Me)||Me==="key"||Me==="__self"||Me==="__source"||Me==="ref"&&M.ref===void 0||(me[Me]=M[Me]);var Me=arguments.length-2;if(Me===1)me.children=ee;else if(1<Me){for(var Ue=Array(Me),Je=0;Je<Me;Je++)Ue[Je]=arguments[Je+2];me.children=Ue}return ne(N.type,Se,me)},Le.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:m,_context:N},N},Le.createElement=function(N,M,ee){var me,Se={},Me=null;if(M!=null)for(me in M.key!==void 0&&(Me=""+M.key),M)G.call(M,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(Se[me]=M[me]);var Ue=arguments.length-2;if(Ue===1)Se.children=ee;else if(1<Ue){for(var Je=Array(Ue),Re=0;Re<Ue;Re++)Je[Re]=arguments[Re+2];Se.children=Je}if(N&&N.defaultProps)for(me in Ue=N.defaultProps,Ue)Se[me]===void 0&&(Se[me]=Ue[me]);return ne(N,Me,Se)},Le.createRef=function(){return{current:null}},Le.forwardRef=function(N){return{$$typeof:C,render:N}},Le.isValidElement=_,Le.lazy=function(N){return{$$typeof:j,_payload:{_status:-1,_result:N},_init:T}},Le.memo=function(N,M){return{$$typeof:g,type:N,compare:M===void 0?null:M}},Le.startTransition=function(N){var M=D.T,ee={};D.T=ee;try{var me=N(),Se=D.S;Se!==null&&Se(ee,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(se,pe)}catch(Me){pe(Me)}finally{M!==null&&ee.types!==null&&(M.types=ee.types),D.T=M}},Le.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},Le.use=function(N){return D.H.use(N)},Le.useActionState=function(N,M,ee){return D.H.useActionState(N,M,ee)},Le.useCallback=function(N,M){return D.H.useCallback(N,M)},Le.useContext=function(N){return D.H.useContext(N)},Le.useDebugValue=function(){},Le.useDeferredValue=function(N,M){return D.H.useDeferredValue(N,M)},Le.useEffect=function(N,M){return D.H.useEffect(N,M)},Le.useEffectEvent=function(N){return D.H.useEffectEvent(N)},Le.useId=function(){return D.H.useId()},Le.useImperativeHandle=function(N,M,ee){return D.H.useImperativeHandle(N,M,ee)},Le.useInsertionEffect=function(N,M){return D.H.useInsertionEffect(N,M)},Le.useLayoutEffect=function(N,M){return D.H.useLayoutEffect(N,M)},Le.useMemo=function(N,M){return D.H.useMemo(N,M)},Le.useOptimistic=function(N,M){return D.H.useOptimistic(N,M)},Le.useReducer=function(N,M,ee){return D.H.useReducer(N,M,ee)},Le.useRef=function(N){return D.H.useRef(N)},Le.useState=function(N){return D.H.useState(N)},Le.useSyncExternalStore=function(N,M,ee){return D.H.useSyncExternalStore(N,M,ee)},Le.useTransition=function(){return D.H.useTransition()},Le.version="19.2.6",Le}var Jf;function Qd(){return Jf||(Jf=1,rd.exports=dy()),rd.exports}var f=Qd();const uy=oy(f),py=sy({__proto__:null,default:uy},[f]);var cd={exports:{}},ss={},dd={exports:{}},ud={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf;function my(){return Pf||(Pf=1,(function(s){function l(z,V){var T=z.length;z.push(V);e:for(;0<T;){var pe=T-1>>>1,k=z[pe];if(0<u(k,V))z[pe]=V,z[T]=k,T=pe;else break e}}function o(z){return z.length===0?null:z[0]}function d(z){if(z.length===0)return null;var V=z[0],T=z.pop();if(T!==V){z[0]=T;e:for(var pe=0,k=z.length,N=k>>>1;pe<N;){var M=2*(pe+1)-1,ee=z[M],me=M+1,Se=z[me];if(0>u(ee,T))me<k&&0>u(Se,ee)?(z[pe]=Se,z[me]=T,pe=me):(z[pe]=ee,z[M]=T,pe=M);else if(me<k&&0>u(Se,T))z[pe]=Se,z[me]=T,pe=me;else break e}}return V}function u(z,V){var T=z.sortIndex-V.sortIndex;return T!==0?T:z.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var h=Date,C=h.now();s.unstable_now=function(){return h.now()-C}}var y=[],g=[],j=1,w=null,S=3,B=!1,I=!1,$=!1,A=!1,Q=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function ae(z){for(var V=o(g);V!==null;){if(V.callback===null)d(g);else if(V.startTime<=z)d(g),V.sortIndex=V.expirationTime,l(y,V);else break;V=o(g)}}function P(z){if($=!1,ae(z),!I)if(o(y)!==null)I=!0,se||(se=!0,H());else{var V=o(g);V!==null&&de(P,V.startTime-z)}}var se=!1,D=-1,G=5,ne=-1;function be(){return A?!0:!(s.unstable_now()-ne<G)}function _(){if(A=!1,se){var z=s.unstable_now();ne=z;var V=!0;try{e:{I=!1,$&&($=!1,R(D),D=-1),B=!0;var T=S;try{t:{for(ae(z),w=o(y);w!==null&&!(w.expirationTime>z&&be());){var pe=w.callback;if(typeof pe=="function"){w.callback=null,S=w.priorityLevel;var k=pe(w.expirationTime<=z);if(z=s.unstable_now(),typeof k=="function"){w.callback=k,ae(z),V=!0;break t}w===o(y)&&d(y),ae(z)}else d(y);w=o(y)}if(w!==null)V=!0;else{var N=o(g);N!==null&&de(P,N.startTime-z),V=!1}}break e}finally{w=null,S=T,B=!1}V=void 0}}finally{V?H():se=!1}}}var H;if(typeof L=="function")H=function(){L(_)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,Y=re.port2;re.port1.onmessage=_,H=function(){Y.postMessage(null)}}else H=function(){Q(_,0)};function de(z,V){D=Q(function(){z(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(z){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var T=S;S=V;try{return z()}finally{S=T}},s.unstable_requestPaint=function(){A=!0},s.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var T=S;S=z;try{return V()}finally{S=T}},s.unstable_scheduleCallback=function(z,V,T){var pe=s.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?pe+T:pe):T=pe,z){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=T+k,z={id:j++,callback:V,priorityLevel:z,startTime:T,expirationTime:k,sortIndex:-1},T>pe?(z.sortIndex=T,l(g,z),o(y)===null&&z===o(g)&&($?(R(D),D=-1):$=!0,de(P,T-pe))):(z.sortIndex=k,l(y,z),I||B||(I=!0,se||(se=!0,H()))),z},s.unstable_shouldYield=be,s.unstable_wrapCallback=function(z){var V=S;return function(){var T=S;S=V;try{return z.apply(this,arguments)}finally{S=T}}}})(ud)),ud}var Wf;function fy(){return Wf||(Wf=1,dd.exports=my()),dd.exports}var pd={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If;function hy(){if(If)return rn;If=1;var s=Qd();function l(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)g+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(y,g,j){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:w==null?null:""+w,children:y,containerInfo:g,implementation:j}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,rn.createPortal=function(y,g){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(l(299));return m(y,g,null,j)},rn.flushSync=function(y){var g=h.T,j=d.p;try{if(h.T=null,d.p=2,y)return y()}finally{h.T=g,d.p=j,d.d.f()}},rn.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,d.d.C(y,g))},rn.prefetchDNS=function(y){typeof y=="string"&&d.d.D(y)},rn.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var j=g.as,w=C(j,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,B=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;j==="style"?d.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:S,fetchPriority:B}):j==="script"&&d.d.X(y,{crossOrigin:w,integrity:S,fetchPriority:B,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},rn.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var j=C(g.as,g.crossOrigin);d.d.M(y,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&d.d.M(y)},rn.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var j=g.as,w=C(j,g.crossOrigin);d.d.L(y,j,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},rn.preloadModule=function(y,g){if(typeof y=="string")if(g){var j=C(g.as,g.crossOrigin);d.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else d.d.m(y)},rn.requestFormReset=function(y){d.d.r(y)},rn.unstable_batchedUpdates=function(y,g){return y(g)},rn.useFormState=function(y,g,j){return h.H.useFormState(y,g,j)},rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},rn.version="19.2.6",rn}var eh;function rx(){if(eh)return pd.exports;eh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),pd.exports=hy(),pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th;function xy(){if(th)return ss;th=1;var s=fy(),l=Qd(),o=rx();function d(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function C(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(d(188))}function g(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(d(188));return n!==e?null:e}for(var a=e,i=n;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(i=r.return,i!==null){a=i;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return y(r),e;if(c===i)return y(r),n;c=c.sibling}throw Error(d(188))}if(a.return!==i.return)a=r,i=c;else{for(var p=!1,x=r.child;x;){if(x===a){p=!0,a=r,i=c;break}if(x===i){p=!0,i=r,a=c;break}x=x.sibling}if(!p){for(x=c.child;x;){if(x===a){p=!0,a=c,i=r;break}if(x===i){p=!0,i=c,a=r;break}x=x.sibling}if(!p)throw Error(d(189))}}if(a.alternate!==i)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:n}function j(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=j(e),n!==null)return n;e=e.sibling}return null}var w=Object.assign,S=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),L=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),_=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function Y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case Q:return"Profiler";case A:return"StrictMode";case P:return"Suspense";case se:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case L:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case ae:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return n=e.displayName||null,n!==null?n:Y(e.type)||"Memo";case G:n=e._payload,e=e._init;try{return Y(e(n))}catch{}}return null}var de=Array.isArray,z=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T={pending:!1,data:null,method:null,action:null},pe=[],k=-1;function N(e){return{current:e}}function M(e){0>k||(e.current=pe[k],pe[k]=null,k--)}function ee(e,n){k++,pe[k]=e.current,e.current=n}var me=N(null),Se=N(null),Me=N(null),Ue=N(null);function Je(e,n){switch(ee(Me,n),ee(Se,e),ee(me,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?xf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=xf(n),e=bf(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(me),ee(me,e)}function Re(){M(me),M(Se),M(Me)}function et(e){e.memoizedState!==null&&ee(Ue,e);var n=me.current,a=bf(n,e.type);n!==a&&(ee(Se,e),ee(me,a))}function ft(e){Se.current===e&&(M(me),M(Se)),Ue.current===e&&(M(Ue),ts._currentValue=T)}var Qt,Vt;function xt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",Vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+Vt}var Xt=!1;function ot(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var ce=function(){throw Error()};if(Object.defineProperty(ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ce,[])}catch(J){var K=J}Reflect.construct(e,[],ce)}else{try{ce.call()}catch(J){K=J}e.call(ce.prototype)}}else{try{throw Error()}catch(J){K=J}(ce=e())&&typeof ce.catch=="function"&&ce.catch(function(){})}}catch(J){if(J&&K&&typeof J.stack=="string")return[J.stack,K.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),p=c[0],x=c[1];if(p&&x){var E=p.split(`
`),Z=x.split(`
`);for(r=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;r<Z.length&&!Z[r].includes("DetermineComponentFrameRoot");)r++;if(i===E.length||r===Z.length)for(i=E.length-1,r=Z.length-1;1<=i&&0<=r&&E[i]!==Z[r];)r--;for(;1<=i&&0<=r;i--,r--)if(E[i]!==Z[r]){if(i!==1||r!==1)do if(i--,r--,0>r||E[i]!==Z[r]){var te=`
`+E[i].replace(" at new "," at ");return e.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",e.displayName)),te}while(1<=i&&0<=r);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xt(a):""}function Jt(e,n){switch(e.tag){case 26:case 27:case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return e.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return xt("Activity");default:return""}}function bt(e){try{var n="",a=null;do n+=Jt(e,a),a=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Nt=Object.prototype.hasOwnProperty,je=s.unstable_scheduleCallback,Mt=s.unstable_cancelCallback,De=s.unstable_shouldYield,fn=s.unstable_requestPaint,rt=s.unstable_now,on=s.unstable_getCurrentPriorityLevel,Dn=s.unstable_ImmediatePriority,hn=s.unstable_UserBlockingPriority,F=s.unstable_NormalPriority,ze=s.unstable_LowPriority,we=s.unstable_IdlePriority,ye=s.log,Xe=s.unstable_setDisableYieldValue,He=null,qe=null;function Ze(e){if(typeof ye=="function"&&Xe(e),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(He,e)}catch{}}var nt=Math.clz32?Math.clz32:In,dn=Math.log,Ct=Math.LN2;function In(e){return e>>>=0,e===0?32:31-(dn(e)/Ct|0)|0}var Lt=256,un=262144,Zn=4194304;function pn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function U(e,n,a){var i=e.pendingLanes;if(i===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var x=i&134217727;return x!==0?(i=x&~c,i!==0?r=pn(i):(p&=x,p!==0?r=pn(p):a||(a=x&~e,a!==0&&(r=pn(a))))):(x=i&~c,x!==0?r=pn(x):p!==0?r=pn(p):a||(a=i&~e,a!==0&&(r=pn(a)))),r===0?0:n!==0&&n!==r&&(n&c)===0&&(c=r&-r,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:r}function ie(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function W(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ce(){var e=Zn;return Zn<<=1,(Zn&62914560)===0&&(Zn=4194304),e}function Ye(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function $e(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function b(e,n,a,i,r,c){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var x=e.entanglements,E=e.expirationTimes,Z=e.hiddenUpdates;for(a=p&~a;0<a;){var te=31-nt(a),ce=1<<te;x[te]=0,E[te]=-1;var K=Z[te];if(K!==null)for(Z[te]=null,te=0;te<K.length;te++){var J=K[te];J!==null&&(J.lane&=-536870913)}a&=~ce}i!==0&&oe(e,i,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~n))}function oe(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-nt(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function ue(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var i=31-nt(a),r=1<<i;r&n|e[i]&n&&(e[i]|=n),a&=~r}}function _e(e,n){var a=n&-n;return a=(a&42)!==0?1:gt(a),(a&(e.suspendedLanes|n))!==0?0:a}function gt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function On(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oa(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Bf(e.type))}function wt(e,n){var a=V.p;try{return V.p=e,n()}finally{V.p=a}}var Kn=Math.random().toString(36).slice(2),At="__reactFiber$"+Kn,St="__reactProps$"+Kn,Da="__reactContainer$"+Kn,v="__reactEvents$"+Kn,fe="__reactListeners$"+Kn,he="__reactHandles$"+Kn,Ee="__reactResources$"+Kn,tt="__reactMarker$"+Kn;function xn(e){delete e[At],delete e[St],delete e[v],delete e[fe],delete e[he]}function qt(e){var n=e[At];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Da]||a[At]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Nf(e);e!==null;){if(a=e[At])return a;e=Nf(e)}return n}e=a,a=e.parentNode}return null}function ea(e){if(e=e[At]||e[Da]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ra(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(d(33))}function Oa(e){var n=e[Ee];return n||(n=e[Ee]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pt(e){e[tt]=!0}var au=new Set,iu={};function fi(e,n){Oi(e,n),Oi(e+"Capture",n)}function Oi(e,n){for(iu[e]=n,e=0;e<n.length;e++)au.add(n[e])}var Px=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lu={},su={};function Wx(e){return Nt.call(su,e)?!0:Nt.call(lu,e)?!1:Px.test(e)?su[e]=!0:(lu[e]=!0,!1)}function ys(e,n,a){if(Wx(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function vs(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ca(e,n,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+i)}}function Un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ix(e,n,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,c=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function er(e){if(!e._valueTracker){var n=ou(e)?"checked":"value";e._valueTracker=Ix(e,n,""+e[n])}}function ru(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),i="";return e&&(i=ou(e)?e.checked?"true":"false":e.value),e=i,e!==a?(n.setValue(e),!0):!1}function js(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var eb=/[\n"\\]/g;function Rn(e){return e.replace(eb,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function tr(e,n,a,i,r,c,p,x){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Un(n)):e.value!==""+Un(n)&&(e.value=""+Un(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?nr(e,p,Un(n)):a!=null?nr(e,p,Un(a)):i!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Un(x):e.removeAttribute("name")}function cu(e,n,a,i,r,c,p,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){er(e);return}a=a!=null?""+Un(a):"",n=n!=null?""+Un(n):a,x||n===e.value||(e.value=n),e.defaultValue=n}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=x?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),er(e)}function nr(e,n,a){n==="number"&&js(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ui(e,n,a,i){if(e=e.options,n){n={};for(var r=0;r<a.length;r++)n["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=n.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Un(a),n=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function du(e,n,a){if(n!=null&&(n=""+Un(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Un(a):""}function uu(e,n,a,i){if(n==null){if(i!=null){if(a!=null)throw Error(d(92));if(de(i)){if(1<i.length)throw Error(d(93));i=i[0]}a=i}a==null&&(a=""),n=a}a=Un(n),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),er(e)}function Ri(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var tb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pu(e,n,a){var i=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,a):typeof a!="number"||a===0||tb.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function mu(e,n,a){if(n!=null&&typeof n!="object")throw Error(d(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in n)i=n[r],n.hasOwnProperty(r)&&a[r]!==i&&pu(e,r,i)}else for(var c in n)n.hasOwnProperty(c)&&pu(e,c,n[c])}function ar(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ab=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ws(e){return ab.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function da(){}var ir=null;function lr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,Li=null;function fu(e){var n=ea(e);if(n&&(e=n.stateNode)){var a=e[St]||null;e:switch(e=n.stateNode,n.type){case"input":if(tr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var i=a[n];if(i!==e&&i.form===e.form){var r=i[St]||null;if(!r)throw Error(d(90));tr(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<a.length;n++)i=a[n],i.form===e.form&&ru(i)}break e;case"textarea":du(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ui(e,!!a.multiple,n,!1)}}}var sr=!1;function hu(e,n,a){if(sr)return e(n,a);sr=!0;try{var i=e(n);return i}finally{if(sr=!1,(Hi!==null||Li!==null)&&(co(),Hi&&(n=Hi,e=Li,Li=Hi=null,fu(n),e)))for(n=0;n<e.length;n++)fu(e[n])}}function gl(e,n){var a=e.stateNode;if(a===null)return null;var i=a[St]||null;if(i===null)return null;a=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),or=!1;if(ua)try{var yl={};Object.defineProperty(yl,"passive",{get:function(){or=!0}}),window.addEventListener("test",yl,yl),window.removeEventListener("test",yl,yl)}catch{or=!1}var Ua=null,rr=null,_s=null;function xu(){if(_s)return _s;var e,n=rr,a=n.length,i,r="value"in Ua?Ua.value:Ua.textContent,c=r.length;for(e=0;e<a&&n[e]===r[e];e++);var p=a-e;for(i=1;i<=p&&n[a-i]===r[c-i];i++);return _s=r.slice(e,1<i?1-i:void 0)}function Ns(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ss(){return!0}function bu(){return!1}function bn(e){function n(a,i,r,c,p){this._reactName=a,this._targetInst=r,this.type=i,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(a=e[x],this[x]=a?a(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ss:bu,this.isPropagationStopped=bu,this}return w(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),n}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ks=bn(hi),vl=w({},hi,{view:0,detail:0}),ib=bn(vl),cr,dr,jl,Cs=w({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jl&&(jl&&e.type==="mousemove"?(cr=e.screenX-jl.screenX,dr=e.screenY-jl.screenY):dr=cr=0,jl=e),cr)},movementY:function(e){return"movementY"in e?e.movementY:dr}}),gu=bn(Cs),lb=w({},Cs,{dataTransfer:0}),sb=bn(lb),ob=w({},vl,{relatedTarget:0}),ur=bn(ob),rb=w({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),cb=bn(rb),db=w({},hi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ub=bn(db),pb=w({},hi,{data:0}),yu=bn(pb),mb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hb[e])?!!n[e]:!1}function pr(){return xb}var bb=w({},vl,{key:function(e){if(e.key){var n=mb[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ns(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pr,charCode:function(e){return e.type==="keypress"?Ns(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ns(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gb=bn(bb),yb=w({},Cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vu=bn(yb),vb=w({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pr}),jb=bn(vb),wb=w({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),_b=bn(wb),Nb=w({},Cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sb=bn(Nb),kb=w({},hi,{newState:0,oldState:0}),Cb=bn(kb),zb=[9,13,27,32],mr=ua&&"CompositionEvent"in window,wl=null;ua&&"documentMode"in document&&(wl=document.documentMode);var Tb=ua&&"TextEvent"in window&&!wl,ju=ua&&(!mr||wl&&8<wl&&11>=wl),wu=" ",_u=!1;function Nu(e,n){switch(e){case"keyup":return zb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qi=!1;function Eb(e,n){switch(e){case"compositionend":return Su(n);case"keypress":return n.which!==32?null:(_u=!0,wu);case"textInput":return e=n.data,e===wu&&_u?null:e;default:return null}}function Mb(e,n){if(qi)return e==="compositionend"||!mr&&Nu(e,n)?(e=xu(),_s=rr=Ua=null,qi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ju&&n.locale!=="ko"?null:n.data;default:return null}}var Ab={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ab[e.type]:n==="textarea"}function Cu(e,n,a,i){Hi?Li?Li.push(i):Li=[i]:Hi=i,n=bo(n,"onChange"),0<n.length&&(a=new ks("onChange","change",null,a,i),e.push({event:a,listeners:n}))}var _l=null,Nl=null;function Db(e){df(e,0)}function zs(e){var n=ra(e);if(ru(n))return e}function zu(e,n){if(e==="change")return n}var Tu=!1;if(ua){var fr;if(ua){var hr="oninput"in document;if(!hr){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),hr=typeof Eu.oninput=="function"}fr=hr}else fr=!1;Tu=fr&&(!document.documentMode||9<document.documentMode)}function Mu(){_l&&(_l.detachEvent("onpropertychange",Au),Nl=_l=null)}function Au(e){if(e.propertyName==="value"&&zs(Nl)){var n=[];Cu(n,Nl,e,lr(e)),hu(Db,n)}}function Ob(e,n,a){e==="focusin"?(Mu(),_l=n,Nl=a,_l.attachEvent("onpropertychange",Au)):e==="focusout"&&Mu()}function Ub(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zs(Nl)}function Rb(e,n){if(e==="click")return zs(n)}function Hb(e,n){if(e==="input"||e==="change")return zs(n)}function Lb(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _n=typeof Object.is=="function"?Object.is:Lb;function Sl(e,n){if(_n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),i=Object.keys(n);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var r=a[i];if(!Nt.call(n,r)||!_n(e[r],n[r]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,n){var a=Du(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=n&&i>=n)return{node:a,offset:n-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Du(a)}}function Uu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Uu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ru(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=js(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=js(e.document)}return n}function xr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var qb=ua&&"documentMode"in document&&11>=document.documentMode,Bi=null,br=null,kl=null,gr=!1;function Hu(e,n,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gr||Bi==null||Bi!==js(i)||(i=Bi,"selectionStart"in i&&xr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),kl&&Sl(kl,i)||(kl=i,i=bo(br,"onSelect"),0<i.length&&(n=new ks("onSelect","select",null,n,a),e.push({event:n,listeners:i}),n.target=Bi)))}function xi(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Gi={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionrun:xi("Transition","TransitionRun"),transitionstart:xi("Transition","TransitionStart"),transitioncancel:xi("Transition","TransitionCancel"),transitionend:xi("Transition","TransitionEnd")},yr={},Lu={};ua&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function bi(e){if(yr[e])return yr[e];if(!Gi[e])return e;var n=Gi[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Lu)return yr[e]=n[a];return e}var qu=bi("animationend"),Bu=bi("animationiteration"),Gu=bi("animationstart"),Bb=bi("transitionrun"),Gb=bi("transitionstart"),Yb=bi("transitioncancel"),Yu=bi("transitionend"),$u=new Map,vr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vr.push("scrollEnd");function Fn(e,n){$u.set(e,n),fi(n,[e])}var Ts=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Hn=[],Yi=0,jr=0;function Es(){for(var e=Yi,n=jr=Yi=0;n<e;){var a=Hn[n];Hn[n++]=null;var i=Hn[n];Hn[n++]=null;var r=Hn[n];Hn[n++]=null;var c=Hn[n];if(Hn[n++]=null,i!==null&&r!==null){var p=i.pending;p===null?r.next=r:(r.next=p.next,p.next=r),i.pending=r}c!==0&&Qu(a,r,c)}}function Ms(e,n,a,i){Hn[Yi++]=e,Hn[Yi++]=n,Hn[Yi++]=a,Hn[Yi++]=i,jr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function wr(e,n,a,i){return Ms(e,n,a,i),As(e)}function gi(e,n){return Ms(e,null,null,n),As(e)}function Qu(e,n,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var r=!1,c=e.return;c!==null;)c.childLanes|=a,i=c.alternate,i!==null&&(i.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&n!==null&&(r=31-nt(a),e=c.hiddenUpdates,i=e[r],i===null?e[r]=[n]:i.push(n),n.lane=a|536870912),c):null}function As(e){if(50<Fl)throw Fl=0,Mc=null,Error(d(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var $i={};function $b(e,n,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,n,a,i){return new $b(e,n,a,i)}function _r(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pa(e,n){var a=e.alternate;return a===null?(a=Nn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xu(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ds(e,n,a,i,r,c){var p=0;if(i=e,typeof e=="function")_r(e)&&(p=1);else if(typeof e=="string")p=Fg(e,a,me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Nn(31,a,n,r),e.elementType=ne,e.lanes=c,e;case $:return yi(a.children,r,c,n);case A:p=8,r|=24;break;case Q:return e=Nn(12,a,n,r|2),e.elementType=Q,e.lanes=c,e;case P:return e=Nn(13,a,n,r),e.elementType=P,e.lanes=c,e;case se:return e=Nn(19,a,n,r),e.elementType=se,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:p=10;break e;case R:p=9;break e;case ae:p=11;break e;case D:p=14;break e;case G:p=16,i=null;break e}p=29,a=Error(d(130,e===null?"null":typeof e,"")),i=null}return n=Nn(p,a,n,r),n.elementType=e,n.type=i,n.lanes=c,n}function yi(e,n,a,i){return e=Nn(7,e,i,n),e.lanes=a,e}function Nr(e,n,a){return e=Nn(6,e,null,n),e.lanes=a,e}function Zu(e){var n=Nn(18,null,null,0);return n.stateNode=e,n}function Sr(e,n,a){return n=Nn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ku=new WeakMap;function Ln(e,n){if(typeof e=="object"&&e!==null){var a=Ku.get(e);return a!==void 0?a:(n={value:e,source:n,stack:bt(n)},Ku.set(e,n),n)}return{value:e,source:n,stack:bt(n)}}var Qi=[],Xi=0,Os=null,Cl=0,qn=[],Bn=0,Ra=null,ta=1,na="";function ma(e,n){Qi[Xi++]=Cl,Qi[Xi++]=Os,Os=e,Cl=n}function Fu(e,n,a){qn[Bn++]=ta,qn[Bn++]=na,qn[Bn++]=Ra,Ra=e;var i=ta;e=na;var r=32-nt(i)-1;i&=~(1<<r),a+=1;var c=32-nt(n)+r;if(30<c){var p=r-r%5;c=(i&(1<<p)-1).toString(32),i>>=p,r-=p,ta=1<<32-nt(n)+r|a<<r|i,na=c+e}else ta=1<<c|a<<r|i,na=e}function kr(e){e.return!==null&&(ma(e,1),Fu(e,1,0))}function Cr(e){for(;e===Os;)Os=Qi[--Xi],Qi[Xi]=null,Cl=Qi[--Xi],Qi[Xi]=null;for(;e===Ra;)Ra=qn[--Bn],qn[Bn]=null,na=qn[--Bn],qn[Bn]=null,ta=qn[--Bn],qn[Bn]=null}function Vu(e,n){qn[Bn++]=ta,qn[Bn++]=na,qn[Bn++]=Ra,ta=n.id,na=n.overflow,Ra=e}var tn=null,yt=null,Ie=!1,Ha=null,Gn=!1,zr=Error(d(519));function La(e){var n=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zl(Ln(n,e)),zr}function Ju(e){var n=e.stateNode,a=e.type,i=e.memoizedProps;switch(n[At]=e,n[St]=i,a){case"dialog":Fe("cancel",n),Fe("close",n);break;case"iframe":case"object":case"embed":Fe("load",n);break;case"video":case"audio":for(a=0;a<Jl.length;a++)Fe(Jl[a],n);break;case"source":Fe("error",n);break;case"img":case"image":case"link":Fe("error",n),Fe("load",n);break;case"details":Fe("toggle",n);break;case"input":Fe("invalid",n),cu(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Fe("invalid",n);break;case"textarea":Fe("invalid",n),uu(n,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||i.suppressHydrationWarning===!0||ff(n.textContent,a)?(i.popover!=null&&(Fe("beforetoggle",n),Fe("toggle",n)),i.onScroll!=null&&Fe("scroll",n),i.onScrollEnd!=null&&Fe("scrollend",n),i.onClick!=null&&(n.onclick=da),n=!0):n=!1,n||La(e,!0)}function Pu(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 31:case 13:Gn=!1;return;case 27:case 3:Gn=!0;return;default:tn=tn.return}}function Zi(e){if(e!==tn)return!1;if(!Ie)return Pu(e),Ie=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zc(e.type,e.memoizedProps)),a=!a),a&&yt&&La(e),Pu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));yt=_f(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));yt=_f(e)}else n===27?(n=yt,Wa(e.type)?(e=Pc,Pc=null,yt=e):yt=n):yt=tn?$n(e.stateNode.nextSibling):null;return!0}function vi(){yt=tn=null,Ie=!1}function Tr(){var e=Ha;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Ha=null),e}function zl(e){Ha===null?Ha=[e]:Ha.push(e)}var Er=N(null),ji=null,fa=null;function qa(e,n,a){ee(Er,n._currentValue),n._currentValue=a}function ha(e){e._currentValue=Er.current,M(Er)}function Mr(e,n,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===a)break;e=e.return}}function Ar(e,n,a,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var x=c;c=r;for(var E=0;E<n.length;E++)if(x.context===n[E]){c.lanes|=a,x=c.alternate,x!==null&&(x.lanes|=a),Mr(c.return,a,e),i||(p=null);break e}c=x.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(d(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),Mr(p,a,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function Ki(e,n,a,i){e=null;for(var r=n,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(d(387));if(p=p.memoizedProps,p!==null){var x=r.type;_n(r.pendingProps.value,p.value)||(e!==null?e.push(x):e=[x])}}else if(r===Ue.current){if(p=r.alternate,p===null)throw Error(d(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ts):e=[ts])}r=r.return}e!==null&&Ar(n,e,a,i),n.flags|=262144}function Us(e){for(e=e.firstContext;e!==null;){if(!_n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wi(e){ji=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return Wu(ji,e)}function Rs(e,n){return ji===null&&wi(e),Wu(e,n)}function Wu(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(d(308));fa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else fa=fa.next=n;return a}var Qb=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Xb=s.unstable_scheduleCallback,Zb=s.unstable_NormalPriority,Bt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dr(){return{controller:new Qb,data:new Map,refCount:0}}function Tl(e){e.refCount--,e.refCount===0&&Xb(Zb,function(){e.controller.abort()})}var El=null,Or=0,Fi=0,Vi=null;function Kb(e,n){if(El===null){var a=El=[];Or=0,Fi=Hc(),Vi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Or++,n.then(Iu,Iu),n}function Iu(){if(--Or===0&&El!==null){Vi!==null&&(Vi.status="fulfilled");var e=El;El=null,Fi=0,Vi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Fb(e,n){var a=[],i={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var r=0;r<a.length;r++)(0,a[r])(n)},function(r){for(i.status="rejected",i.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),i}var ep=z.S;z.S=function(e,n){Hm=rt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Kb(e,n),ep!==null&&ep(e,n)};var _i=N(null);function Ur(){var e=_i.current;return e!==null?e:ht.pooledCache}function Hs(e,n){n===null?ee(_i,_i.current):ee(_i,n.pool)}function tp(){var e=Ur();return e===null?null:{parent:Bt._currentValue,pool:e}}var Ji=Error(d(460)),Rr=Error(d(474)),Ls=Error(d(542)),qs={then:function(){}};function np(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ap(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(da,da),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,lp(e),e;default:if(typeof n.status=="string")n.then(da,da);else{if(e=ht,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=i}},function(i){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,lp(e),e}throw Si=n,Ji}}function Ni(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Si=a,Ji):a}}var Si=null;function ip(){if(Si===null)throw Error(d(459));var e=Si;return Si=null,e}function lp(e){if(e===Ji||e===Ls)throw Error(d(483))}var Pi=null,Ml=0;function Bs(e){var n=Ml;return Ml+=1,Pi===null&&(Pi=[]),ap(Pi,e,n)}function Al(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Gs(e,n){throw n.$$typeof===S?Error(d(525)):(e=Object.prototype.toString.call(n),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function sp(e){function n(q,O){if(e){var X=q.deletions;X===null?(q.deletions=[O],q.flags|=16):X.push(O)}}function a(q,O){if(!e)return null;for(;O!==null;)n(q,O),O=O.sibling;return null}function i(q){for(var O=new Map;q!==null;)q.key!==null?O.set(q.key,q):O.set(q.index,q),q=q.sibling;return O}function r(q,O){return q=pa(q,O),q.index=0,q.sibling=null,q}function c(q,O,X){return q.index=X,e?(X=q.alternate,X!==null?(X=X.index,X<O?(q.flags|=67108866,O):X):(q.flags|=67108866,O)):(q.flags|=1048576,O)}function p(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function x(q,O,X,le){return O===null||O.tag!==6?(O=Nr(X,q.mode,le),O.return=q,O):(O=r(O,X),O.return=q,O)}function E(q,O,X,le){var Ae=X.type;return Ae===$?te(q,O,X.props.children,le,X.key):O!==null&&(O.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===G&&Ni(Ae)===O.type)?(O=r(O,X.props),Al(O,X),O.return=q,O):(O=Ds(X.type,X.key,X.props,null,q.mode,le),Al(O,X),O.return=q,O)}function Z(q,O,X,le){return O===null||O.tag!==4||O.stateNode.containerInfo!==X.containerInfo||O.stateNode.implementation!==X.implementation?(O=Sr(X,q.mode,le),O.return=q,O):(O=r(O,X.children||[]),O.return=q,O)}function te(q,O,X,le,Ae){return O===null||O.tag!==7?(O=yi(X,q.mode,le,Ae),O.return=q,O):(O=r(O,X),O.return=q,O)}function ce(q,O,X){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Nr(""+O,q.mode,X),O.return=q,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case B:return X=Ds(O.type,O.key,O.props,null,q.mode,X),Al(X,O),X.return=q,X;case I:return O=Sr(O,q.mode,X),O.return=q,O;case G:return O=Ni(O),ce(q,O,X)}if(de(O)||H(O))return O=yi(O,q.mode,X,null),O.return=q,O;if(typeof O.then=="function")return ce(q,Bs(O),X);if(O.$$typeof===L)return ce(q,Rs(q,O),X);Gs(q,O)}return null}function K(q,O,X,le){var Ae=O!==null?O.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return Ae!==null?null:x(q,O,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case B:return X.key===Ae?E(q,O,X,le):null;case I:return X.key===Ae?Z(q,O,X,le):null;case G:return X=Ni(X),K(q,O,X,le)}if(de(X)||H(X))return Ae!==null?null:te(q,O,X,le,null);if(typeof X.then=="function")return K(q,O,Bs(X),le);if(X.$$typeof===L)return K(q,O,Rs(q,X),le);Gs(q,X)}return null}function J(q,O,X,le,Ae){if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return q=q.get(X)||null,x(O,q,""+le,Ae);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case B:return q=q.get(le.key===null?X:le.key)||null,E(O,q,le,Ae);case I:return q=q.get(le.key===null?X:le.key)||null,Z(O,q,le,Ae);case G:return le=Ni(le),J(q,O,X,le,Ae)}if(de(le)||H(le))return q=q.get(X)||null,te(O,q,le,Ae,null);if(typeof le.then=="function")return J(q,O,X,Bs(le),Ae);if(le.$$typeof===L)return J(q,O,X,Rs(O,le),Ae);Gs(O,le)}return null}function ke(q,O,X,le){for(var Ae=null,at=null,Te=O,Ge=O=0,We=null;Te!==null&&Ge<X.length;Ge++){Te.index>Ge?(We=Te,Te=null):We=Te.sibling;var it=K(q,Te,X[Ge],le);if(it===null){Te===null&&(Te=We);break}e&&Te&&it.alternate===null&&n(q,Te),O=c(it,O,Ge),at===null?Ae=it:at.sibling=it,at=it,Te=We}if(Ge===X.length)return a(q,Te),Ie&&ma(q,Ge),Ae;if(Te===null){for(;Ge<X.length;Ge++)Te=ce(q,X[Ge],le),Te!==null&&(O=c(Te,O,Ge),at===null?Ae=Te:at.sibling=Te,at=Te);return Ie&&ma(q,Ge),Ae}for(Te=i(Te);Ge<X.length;Ge++)We=J(Te,q,Ge,X[Ge],le),We!==null&&(e&&We.alternate!==null&&Te.delete(We.key===null?Ge:We.key),O=c(We,O,Ge),at===null?Ae=We:at.sibling=We,at=We);return e&&Te.forEach(function(ai){return n(q,ai)}),Ie&&ma(q,Ge),Ae}function Oe(q,O,X,le){if(X==null)throw Error(d(151));for(var Ae=null,at=null,Te=O,Ge=O=0,We=null,it=X.next();Te!==null&&!it.done;Ge++,it=X.next()){Te.index>Ge?(We=Te,Te=null):We=Te.sibling;var ai=K(q,Te,it.value,le);if(ai===null){Te===null&&(Te=We);break}e&&Te&&ai.alternate===null&&n(q,Te),O=c(ai,O,Ge),at===null?Ae=ai:at.sibling=ai,at=ai,Te=We}if(it.done)return a(q,Te),Ie&&ma(q,Ge),Ae;if(Te===null){for(;!it.done;Ge++,it=X.next())it=ce(q,it.value,le),it!==null&&(O=c(it,O,Ge),at===null?Ae=it:at.sibling=it,at=it);return Ie&&ma(q,Ge),Ae}for(Te=i(Te);!it.done;Ge++,it=X.next())it=J(Te,q,Ge,it.value,le),it!==null&&(e&&it.alternate!==null&&Te.delete(it.key===null?Ge:it.key),O=c(it,O,Ge),at===null?Ae=it:at.sibling=it,at=it);return e&&Te.forEach(function(ly){return n(q,ly)}),Ie&&ma(q,Ge),Ae}function mt(q,O,X,le){if(typeof X=="object"&&X!==null&&X.type===$&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case B:e:{for(var Ae=X.key;O!==null;){if(O.key===Ae){if(Ae=X.type,Ae===$){if(O.tag===7){a(q,O.sibling),le=r(O,X.props.children),le.return=q,q=le;break e}}else if(O.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===G&&Ni(Ae)===O.type){a(q,O.sibling),le=r(O,X.props),Al(le,X),le.return=q,q=le;break e}a(q,O);break}else n(q,O);O=O.sibling}X.type===$?(le=yi(X.props.children,q.mode,le,X.key),le.return=q,q=le):(le=Ds(X.type,X.key,X.props,null,q.mode,le),Al(le,X),le.return=q,q=le)}return p(q);case I:e:{for(Ae=X.key;O!==null;){if(O.key===Ae)if(O.tag===4&&O.stateNode.containerInfo===X.containerInfo&&O.stateNode.implementation===X.implementation){a(q,O.sibling),le=r(O,X.children||[]),le.return=q,q=le;break e}else{a(q,O);break}else n(q,O);O=O.sibling}le=Sr(X,q.mode,le),le.return=q,q=le}return p(q);case G:return X=Ni(X),mt(q,O,X,le)}if(de(X))return ke(q,O,X,le);if(H(X)){if(Ae=H(X),typeof Ae!="function")throw Error(d(150));return X=Ae.call(X),Oe(q,O,X,le)}if(typeof X.then=="function")return mt(q,O,Bs(X),le);if(X.$$typeof===L)return mt(q,O,Rs(q,X),le);Gs(q,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,O!==null&&O.tag===6?(a(q,O.sibling),le=r(O,X),le.return=q,q=le):(a(q,O),le=Nr(X,q.mode,le),le.return=q,q=le),p(q)):a(q,O)}return function(q,O,X,le){try{Ml=0;var Ae=mt(q,O,X,le);return Pi=null,Ae}catch(Te){if(Te===Ji||Te===Ls)throw Te;var at=Nn(29,Te,null,q.mode);return at.lanes=le,at.return=q,at}finally{}}}var ki=sp(!0),op=sp(!1),Ba=!1;function Hr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lr(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,n,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(st&2)!==0){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,n=As(e),Qu(e,null,a),n}return Ms(e,i,n,a),As(e)}function Dl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,ue(e,a)}}function qr(e,n){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?r=c=n:c=c.next=n}else r=c=n;a={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Br=!1;function Ol(){if(Br){var e=Vi;if(e!==null)throw e}}function Ul(e,n,a,i){Br=!1;var r=e.updateQueue;Ba=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,x=r.shared.pending;if(x!==null){r.shared.pending=null;var E=x,Z=E.next;E.next=null,p===null?c=Z:p.next=Z,p=E;var te=e.alternate;te!==null&&(te=te.updateQueue,x=te.lastBaseUpdate,x!==p&&(x===null?te.firstBaseUpdate=Z:x.next=Z,te.lastBaseUpdate=E))}if(c!==null){var ce=r.baseState;p=0,te=Z=E=null,x=c;do{var K=x.lane&-536870913,J=K!==x.lane;if(J?(Pe&K)===K:(i&K)===K){K!==0&&K===Fi&&(Br=!0),te!==null&&(te=te.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var ke=e,Oe=x;K=n;var mt=a;switch(Oe.tag){case 1:if(ke=Oe.payload,typeof ke=="function"){ce=ke.call(mt,ce,K);break e}ce=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Oe.payload,K=typeof ke=="function"?ke.call(mt,ce,K):ke,K==null)break e;ce=w({},ce,K);break e;case 2:Ba=!0}}K=x.callback,K!==null&&(e.flags|=64,J&&(e.flags|=8192),J=r.callbacks,J===null?r.callbacks=[K]:J.push(K))}else J={lane:K,tag:x.tag,payload:x.payload,callback:x.callback,next:null},te===null?(Z=te=J,E=ce):te=te.next=J,p|=K;if(x=x.next,x===null){if(x=r.shared.pending,x===null)break;J=x,x=J.next,J.next=null,r.lastBaseUpdate=J,r.shared.pending=null}}while(!0);te===null&&(E=ce),r.baseState=E,r.firstBaseUpdate=Z,r.lastBaseUpdate=te,c===null&&(r.shared.lanes=0),Ka|=p,e.lanes=p,e.memoizedState=ce}}function rp(e,n){if(typeof e!="function")throw Error(d(191,e));e.call(n)}function cp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)rp(a[e],n)}var Wi=N(null),Ys=N(0);function dp(e,n){e=Na,ee(Ys,e),ee(Wi,n),Na=e|n.baseLanes}function Gr(){ee(Ys,Na),ee(Wi,Wi.current)}function Yr(){Na=Ys.current,M(Wi),M(Ys)}var Sn=N(null),Yn=null;function $a(e){var n=e.alternate;ee(Dt,Dt.current&1),ee(Sn,e),Yn===null&&(n===null||Wi.current!==null||n.memoizedState!==null)&&(Yn=e)}function $r(e){ee(Dt,Dt.current),ee(Sn,e),Yn===null&&(Yn=e)}function up(e){e.tag===22?(ee(Dt,Dt.current),ee(Sn,e),Yn===null&&(Yn=e)):Qa()}function Qa(){ee(Dt,Dt.current),ee(Sn,Sn.current)}function kn(e){M(Sn),Yn===e&&(Yn=null),M(Dt)}var Dt=N(0);function $s(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vc(a)||Jc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,Be=null,ut=null,Gt=null,Qs=!1,Ii=!1,Ci=!1,Xs=0,Rl=0,el=null,Vb=0;function zt(){throw Error(d(321))}function Qr(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!_n(e[a],n[a]))return!1;return!0}function Xr(e,n,a,i,r,c){return xa=c,Be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Fp:sc,Ci=!1,c=a(i,r),Ci=!1,Ii&&(c=mp(n,a,i,r)),pp(e),c}function pp(e){z.H=ql;var n=ut!==null&&ut.next!==null;if(xa=0,Gt=ut=Be=null,Qs=!1,Rl=0,el=null,n)throw Error(d(300));e===null||Yt||(e=e.dependencies,e!==null&&Us(e)&&(Yt=!0))}function mp(e,n,a,i){Be=e;var r=0;do{if(Ii&&(el=null),Rl=0,Ii=!1,25<=r)throw Error(d(301));if(r+=1,Gt=ut=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}z.H=Vp,c=n(a,i)}while(Ii);return c}function Jb(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?Hl(n):n,e=e.useState()[0],(ut!==null?ut.memoizedState:null)!==e&&(Be.flags|=1024),n}function Zr(){var e=Xs!==0;return Xs=0,e}function Kr(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fr(e){if(Qs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Qs=!1}xa=0,Gt=ut=Be=null,Ii=!1,Rl=Xs=0,el=null}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Be.memoizedState=Gt=e:Gt=Gt.next=e,Gt}function Ot(){if(ut===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=ut.next;var n=Gt===null?Be.memoizedState:Gt.next;if(n!==null)Gt=n,ut=e;else{if(e===null)throw Be.alternate===null?Error(d(467)):Error(d(310));ut=e,e={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},Gt===null?Be.memoizedState=Gt=e:Gt=Gt.next=e}return Gt}function Zs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hl(e){var n=Rl;return Rl+=1,el===null&&(el=[]),e=ap(el,e,n),n=Be,(Gt===null?n.memoizedState:Gt.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Fp:sc),e}function Ks(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Hl(e);if(e.$$typeof===L)return nn(e)}throw Error(d(438,String(e)))}function Vr(e){var n=null,a=Be.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var i=Be.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Zs(),Be.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),i=0;i<e;i++)a[i]=be;return n.index++,a}function ba(e,n){return typeof n=="function"?n(e):n}function Fs(e){var n=Ot();return Jr(n,ut,e)}function Jr(e,n,a){var i=e.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=a;var r=e.baseQueue,c=i.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}n.baseQueue=r=c,i.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{n=r.next;var x=p=null,E=null,Z=n,te=!1;do{var ce=Z.lane&-536870913;if(ce!==Z.lane?(Pe&ce)===ce:(xa&ce)===ce){var K=Z.revertLane;if(K===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),ce===Fi&&(te=!0);else if((xa&K)===K){Z=Z.next,K===Fi&&(te=!0);continue}else ce={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},E===null?(x=E=ce,p=c):E=E.next=ce,Be.lanes|=K,Ka|=K;ce=Z.action,Ci&&a(c,ce),c=Z.hasEagerState?Z.eagerState:a(c,ce)}else K={lane:ce,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},E===null?(x=E=K,p=c):E=E.next=K,Be.lanes|=ce,Ka|=ce;Z=Z.next}while(Z!==null&&Z!==n);if(E===null?p=c:E.next=x,!_n(c,e.memoizedState)&&(Yt=!0,te&&(a=Vi,a!==null)))throw a;e.memoizedState=c,e.baseState=p,e.baseQueue=E,i.lastRenderedState=c}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Pr(e){var n=Ot(),a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var i=a.dispatch,r=a.pending,c=n.memoizedState;if(r!==null){a.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);_n(c,n.memoizedState)||(Yt=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,i]}function fp(e,n,a){var i=Be,r=Ot(),c=Ie;if(c){if(a===void 0)throw Error(d(407));a=a()}else a=n();var p=!_n((ut||r).memoizedState,a);if(p&&(r.memoizedState=a,Yt=!0),r=r.queue,ec(bp.bind(null,i,r,e),[e]),r.getSnapshot!==n||p||Gt!==null&&Gt.memoizedState.tag&1){if(i.flags|=2048,tl(9,{destroy:void 0},xp.bind(null,i,r,a,n),null),ht===null)throw Error(d(349));c||(xa&127)!==0||hp(i,n,a)}return a}function hp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Be.updateQueue,n===null?(n=Zs(),Be.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function xp(e,n,a,i){n.value=a,n.getSnapshot=i,gp(n)&&yp(e)}function bp(e,n,a){return a(function(){gp(n)&&yp(e)})}function gp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!_n(e,a)}catch{return!0}}function yp(e){var n=gi(e,2);n!==null&&wn(n,e,2)}function Wr(e){var n=mn();if(typeof e=="function"){var a=e;if(e=a(),Ci){Ze(!0);try{a()}finally{Ze(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},n}function vp(e,n,a,i){return e.baseState=a,Jr(e,ut,typeof i=="function"?i:ba)}function Pb(e,n,a,i,r){if(Ps(e))throw Error(d(485));if(e=n.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};z.T!==null?a(!0):c.isTransition=!1,i(c),a=n.pending,a===null?(c.next=n.pending=c,jp(n,c)):(c.next=a.next,n.pending=a.next=c)}}function jp(e,n){var a=n.action,i=n.payload,r=e.state;if(n.isTransition){var c=z.T,p={};z.T=p;try{var x=a(r,i),E=z.S;E!==null&&E(p,x),wp(e,n,x)}catch(Z){Ir(e,n,Z)}finally{c!==null&&p.types!==null&&(c.types=p.types),z.T=c}}else try{c=a(r,i),wp(e,n,c)}catch(Z){Ir(e,n,Z)}}function wp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){_p(e,n,i)},function(i){return Ir(e,n,i)}):_p(e,n,a)}function _p(e,n,a){n.status="fulfilled",n.value=a,Np(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,jp(e,a)))}function Ir(e,n,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=a,Np(n),n=n.next;while(n!==i)}e.action=null}function Np(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Sp(e,n){return n}function kp(e,n){if(Ie){var a=ht.formState;if(a!==null){e:{var i=Be;if(Ie){if(yt){t:{for(var r=yt,c=Gn;r.nodeType!==8;){if(!c){r=null;break t}if(r=$n(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){yt=$n(r.nextSibling),i=r.data==="F!";break e}}La(i)}i=!1}i&&(n=a[0])}}return a=mn(),a.memoizedState=a.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sp,lastRenderedState:n},a.queue=i,a=Xp.bind(null,Be,i),i.dispatch=a,i=Wr(!1),c=lc.bind(null,Be,!1,i.queue),i=mn(),r={state:n,dispatch:null,action:e,pending:null},i.queue=r,a=Pb.bind(null,Be,r,c,a),r.dispatch=a,i.memoizedState=e,[n,a,!1]}function Cp(e){var n=Ot();return zp(n,ut,e)}function zp(e,n,a){if(n=Jr(e,n,Sp)[0],e=Fs(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=Hl(n)}catch(p){throw p===Ji?Ls:p}else i=n;n=Ot();var r=n.queue,c=r.dispatch;return a!==n.memoizedState&&(Be.flags|=2048,tl(9,{destroy:void 0},Wb.bind(null,r,a),null)),[i,c,e]}function Wb(e,n){e.action=n}function Tp(e){var n=Ot(),a=ut;if(a!==null)return zp(n,a,e);Ot(),n=n.memoizedState,a=Ot();var i=a.queue.dispatch;return a.memoizedState=e,[n,i,!1]}function tl(e,n,a,i){return e={tag:e,create:a,deps:i,inst:n,next:null},n=Be.updateQueue,n===null&&(n=Zs(),Be.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,n.lastEffect=e),e}function Ep(){return Ot().memoizedState}function Vs(e,n,a,i){var r=mn();Be.flags|=e,r.memoizedState=tl(1|n,{destroy:void 0},a,i===void 0?null:i)}function Js(e,n,a,i){var r=Ot();i=i===void 0?null:i;var c=r.memoizedState.inst;ut!==null&&i!==null&&Qr(i,ut.memoizedState.deps)?r.memoizedState=tl(n,c,a,i):(Be.flags|=e,r.memoizedState=tl(1|n,c,a,i))}function Mp(e,n){Vs(8390656,8,e,n)}function ec(e,n){Js(2048,8,e,n)}function Ib(e){Be.flags|=4;var n=Be.updateQueue;if(n===null)n=Zs(),Be.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Ap(e){var n=Ot().memoizedState;return Ib({ref:n,nextImpl:e}),function(){if((st&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}function Dp(e,n){return Js(4,2,e,n)}function Op(e,n){return Js(4,4,e,n)}function Up(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rp(e,n,a){a=a!=null?a.concat([e]):null,Js(4,4,Up.bind(null,n,e),a)}function tc(){}function Hp(e,n){var a=Ot();n=n===void 0?null:n;var i=a.memoizedState;return n!==null&&Qr(n,i[1])?i[0]:(a.memoizedState=[e,n],e)}function Lp(e,n){var a=Ot();n=n===void 0?null:n;var i=a.memoizedState;if(n!==null&&Qr(n,i[1]))return i[0];if(i=e(),Ci){Ze(!0);try{e()}finally{Ze(!1)}}return a.memoizedState=[i,n],i}function nc(e,n,a){return a===void 0||(xa&1073741824)!==0&&(Pe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=qm(),Be.lanes|=e,Ka|=e,a)}function qp(e,n,a,i){return _n(a,n)?a:Wi.current!==null?(e=nc(e,a,i),_n(e,n)||(Yt=!0),e):(xa&42)===0||(xa&1073741824)!==0&&(Pe&261930)===0?(Yt=!0,e.memoizedState=a):(e=qm(),Be.lanes|=e,Ka|=e,n)}function Bp(e,n,a,i,r){var c=V.p;V.p=c!==0&&8>c?c:8;var p=z.T,x={};z.T=x,lc(e,!1,n,a);try{var E=r(),Z=z.S;if(Z!==null&&Z(x,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var te=Fb(E,i);Ll(e,n,te,Tn(e))}else Ll(e,n,i,Tn(e))}catch(ce){Ll(e,n,{then:function(){},status:"rejected",reason:ce},Tn())}finally{V.p=c,p!==null&&x.types!==null&&(p.types=x.types),z.T=p}}function eg(){}function ac(e,n,a,i){if(e.tag!==5)throw Error(d(476));var r=Gp(e).queue;Bp(e,r,n,T,a===null?eg:function(){return Yp(e),a(i)})}function Gp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:T,baseState:T,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:T},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Yp(e){var n=Gp(e);n.next===null&&(n=e.alternate.memoizedState),Ll(e,n.next.queue,{},Tn())}function ic(){return nn(ts)}function $p(){return Ot().memoizedState}function Qp(){return Ot().memoizedState}function tg(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Tn();e=Ga(a);var i=Ya(n,e,a);i!==null&&(wn(i,n,a),Dl(i,n,a)),n={cache:Dr()},e.payload=n;return}n=n.return}}function ng(e,n,a){var i=Tn();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Zp(n,a):(a=wr(e,n,a,i),a!==null&&(wn(a,e,i),Kp(a,n,i)))}function Xp(e,n,a){var i=Tn();Ll(e,n,a,i)}function Ll(e,n,a,i){var r={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Zp(n,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,x=c(p,a);if(r.hasEagerState=!0,r.eagerState=x,_n(x,p))return Ms(e,n,r,0),ht===null&&Es(),!1}catch{}finally{}if(a=wr(e,n,r,i),a!==null)return wn(a,e,i),Kp(a,n,i),!0}return!1}function lc(e,n,a,i){if(i={lane:2,revertLane:Hc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(n)throw Error(d(479))}else n=wr(e,a,i,2),n!==null&&wn(n,e,2)}function Ps(e){var n=e.alternate;return e===Be||n!==null&&n===Be}function Zp(e,n){Ii=Qs=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Kp(e,n,a){if((a&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,ue(e,a)}}var ql={readContext:nn,use:Ks,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useLayoutEffect:zt,useInsertionEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useSyncExternalStore:zt,useId:zt,useHostTransitionStatus:zt,useFormState:zt,useActionState:zt,useOptimistic:zt,useMemoCache:zt,useCacheRefresh:zt};ql.useEffectEvent=zt;var Fp={readContext:nn,use:Ks,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:Mp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Vs(4194308,4,Up.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Vs(4194308,4,e,n)},useInsertionEffect:function(e,n){Vs(4,2,e,n)},useMemo:function(e,n){var a=mn();n=n===void 0?null:n;var i=e();if(Ci){Ze(!0);try{e()}finally{Ze(!1)}}return a.memoizedState=[i,n],i},useReducer:function(e,n,a){var i=mn();if(a!==void 0){var r=a(n);if(Ci){Ze(!0);try{a(n)}finally{Ze(!1)}}}else r=n;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=ng.bind(null,Be,e),[i.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:function(e){e=Wr(e);var n=e.queue,a=Xp.bind(null,Be,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:tc,useDeferredValue:function(e,n){var a=mn();return nc(a,e,n)},useTransition:function(){var e=Wr(!1);return e=Bp.bind(null,Be,e.queue,!0,!1),mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var i=Be,r=mn();if(Ie){if(a===void 0)throw Error(d(407));a=a()}else{if(a=n(),ht===null)throw Error(d(349));(Pe&127)!==0||hp(i,n,a)}r.memoizedState=a;var c={value:a,getSnapshot:n};return r.queue=c,Mp(bp.bind(null,i,c,e),[e]),i.flags|=2048,tl(9,{destroy:void 0},xp.bind(null,i,c,a,n),null),a},useId:function(){var e=mn(),n=ht.identifierPrefix;if(Ie){var a=na,i=ta;a=(i&~(1<<32-nt(i)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Xs++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Vb++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ic,useFormState:kp,useActionState:kp,useOptimistic:function(e){var n=mn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=lc.bind(null,Be,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vr,useCacheRefresh:function(){return mn().memoizedState=tg.bind(null,Be)},useEffectEvent:function(e){var n=mn(),a={impl:e};return n.memoizedState=a,function(){if((st&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},sc={readContext:nn,use:Ks,useCallback:Hp,useContext:nn,useEffect:ec,useImperativeHandle:Rp,useInsertionEffect:Dp,useLayoutEffect:Op,useMemo:Lp,useReducer:Fs,useRef:Ep,useState:function(){return Fs(ba)},useDebugValue:tc,useDeferredValue:function(e,n){var a=Ot();return qp(a,ut.memoizedState,e,n)},useTransition:function(){var e=Fs(ba)[0],n=Ot().memoizedState;return[typeof e=="boolean"?e:Hl(e),n]},useSyncExternalStore:fp,useId:$p,useHostTransitionStatus:ic,useFormState:Cp,useActionState:Cp,useOptimistic:function(e,n){var a=Ot();return vp(a,ut,e,n)},useMemoCache:Vr,useCacheRefresh:Qp};sc.useEffectEvent=Ap;var Vp={readContext:nn,use:Ks,useCallback:Hp,useContext:nn,useEffect:ec,useImperativeHandle:Rp,useInsertionEffect:Dp,useLayoutEffect:Op,useMemo:Lp,useReducer:Pr,useRef:Ep,useState:function(){return Pr(ba)},useDebugValue:tc,useDeferredValue:function(e,n){var a=Ot();return ut===null?nc(a,e,n):qp(a,ut.memoizedState,e,n)},useTransition:function(){var e=Pr(ba)[0],n=Ot().memoizedState;return[typeof e=="boolean"?e:Hl(e),n]},useSyncExternalStore:fp,useId:$p,useHostTransitionStatus:ic,useFormState:Tp,useActionState:Tp,useOptimistic:function(e,n){var a=Ot();return ut!==null?vp(a,ut,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vr,useCacheRefresh:Qp};Vp.useEffectEvent=Ap;function oc(e,n,a,i){n=e.memoizedState,a=a(i,n),a=a==null?n:w({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rc={enqueueSetState:function(e,n,a){e=e._reactInternals;var i=Tn(),r=Ga(i);r.payload=n,a!=null&&(r.callback=a),n=Ya(e,r,i),n!==null&&(wn(n,e,i),Dl(n,e,i))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var i=Tn(),r=Ga(i);r.tag=1,r.payload=n,a!=null&&(r.callback=a),n=Ya(e,r,i),n!==null&&(wn(n,e,i),Dl(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Tn(),i=Ga(a);i.tag=2,n!=null&&(i.callback=n),n=Ya(e,i,a),n!==null&&(wn(n,e,a),Dl(n,e,a))}};function Jp(e,n,a,i,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,p):n.prototype&&n.prototype.isPureReactComponent?!Sl(a,i)||!Sl(r,c):!0}function Pp(e,n,a,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,i),n.state!==e&&rc.enqueueReplaceState(n,n.state,null)}function zi(e,n){var a=n;if("ref"in n){a={};for(var i in n)i!=="ref"&&(a[i]=n[i])}if(e=e.defaultProps){a===n&&(a=w({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function Wp(e){Ts(e)}function Ip(e){console.error(e)}function em(e){Ts(e)}function Ws(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function tm(e,n,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function cc(e,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Ws(e,n)},a}function nm(e){return e=Ga(e),e.tag=3,e}function am(e,n,a,i){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=i.value;e.payload=function(){return r(c)},e.callback=function(){tm(n,a,i)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){tm(n,a,i),typeof r!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var x=i.stack;this.componentDidCatch(i.value,{componentStack:x!==null?x:""})})}function ag(e,n,a,i,r){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=a.alternate,n!==null&&Ki(n,a,r,!0),a=Sn.current,a!==null){switch(a.tag){case 31:case 13:return Yn===null?uo():a.alternate===null&&Tt===0&&(Tt=3),a.flags&=-257,a.flags|=65536,a.lanes=r,i===qs?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([i]):n.add(i),Oc(e,i,r)),!1;case 22:return a.flags|=65536,i===qs?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([i]):a.add(i)),Oc(e,i,r)),!1}throw Error(d(435,a.tag))}return Oc(e,i,r),uo(),!1}if(Ie)return n=Sn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,i!==zr&&(e=Error(d(422),{cause:i}),zl(Ln(e,a)))):(i!==zr&&(n=Error(d(423),{cause:i}),zl(Ln(n,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Ln(i,a),r=cc(e.stateNode,i,r),qr(e,r),Tt!==4&&(Tt=2)),!1;var c=Error(d(520),{cause:i});if(c=Ln(c,a),Kl===null?Kl=[c]:Kl.push(c),Tt!==4&&(Tt=2),n===null)return!0;i=Ln(i,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=cc(a.stateNode,i,e),qr(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Fa===null||!Fa.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=nm(r),am(r,e,a,i),qr(a,r),!1}a=a.return}while(a!==null);return!1}var dc=Error(d(461)),Yt=!1;function an(e,n,a,i){n.child=e===null?op(n,null,a,i):ki(n,e.child,a,i)}function im(e,n,a,i,r){a=a.render;var c=n.ref;if("ref"in i){var p={};for(var x in i)x!=="ref"&&(p[x]=i[x])}else p=i;return wi(n),i=Xr(e,n,a,p,c,r),x=Zr(),e!==null&&!Yt?(Kr(e,n,r),ga(e,n,r)):(Ie&&x&&kr(n),n.flags|=1,an(e,n,i,r),n.child)}function lm(e,n,a,i,r){if(e===null){var c=a.type;return typeof c=="function"&&!_r(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,sm(e,n,c,i,r)):(e=Ds(a.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!gc(e,r)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:Sl,a(p,i)&&e.ref===n.ref)return ga(e,n,r)}return n.flags|=1,e=pa(c,i),e.ref=n.ref,e.return=n,n.child=e}function sm(e,n,a,i,r){if(e!==null){var c=e.memoizedProps;if(Sl(c,i)&&e.ref===n.ref)if(Yt=!1,n.pendingProps=i=c,gc(e,r))(e.flags&131072)!==0&&(Yt=!0);else return n.lanes=e.lanes,ga(e,n,r)}return uc(e,n,a,i,r)}function om(e,n,a,i){var r=i.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(i=n.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~c}else i=0,n.child=null;return rm(e,n,c,a,i)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Hs(n,c!==null?c.cachePool:null),c!==null?dp(n,c):Gr(),up(n);else return i=n.lanes=536870912,rm(e,n,c!==null?c.baseLanes|a:a,a,i)}else c!==null?(Hs(n,c.cachePool),dp(n,c),Qa(),n.memoizedState=null):(e!==null&&Hs(n,null),Gr(),Qa());return an(e,n,r,a),n.child}function Bl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function rm(e,n,a,i,r){var c=Ur();return c=c===null?null:{parent:Bt._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Hs(n,null),Gr(),up(n),e!==null&&Ki(e,n,i,!0),n.childLanes=r,null}function Is(e,n){return n=to({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function cm(e,n,a){return ki(n,e.child,null,a),e=Is(n,n.pendingProps),e.flags|=2,kn(n),n.memoizedState=null,e}function ig(e,n,a){var i=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ie){if(i.mode==="hidden")return e=Is(n,i),n.lanes=536870912,Bl(null,e);if($r(n),(e=yt)?(e=wf(e,Gn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=Zu(e),a.return=n,n.child=a,tn=n,yt=null)):e=null,e===null)throw La(n);return n.lanes=536870912,null}return Is(n,i)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if($r(n),r)if(n.flags&256)n.flags&=-257,n=cm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(d(558));else if(Yt||Ki(e,n,a,!1),r=(a&e.childLanes)!==0,Yt||r){if(i=ht,i!==null&&(p=_e(i,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,gi(e,p),wn(i,e,p),dc;uo(),n=cm(e,n,a)}else e=c.treeContext,yt=$n(p.nextSibling),tn=n,Ie=!0,Ha=null,Gn=!1,e!==null&&Vu(n,e),n=Is(n,i),n.flags|=4096;return n}return e=pa(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function eo(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function uc(e,n,a,i,r){return wi(n),a=Xr(e,n,a,i,void 0,r),i=Zr(),e!==null&&!Yt?(Kr(e,n,r),ga(e,n,r)):(Ie&&i&&kr(n),n.flags|=1,an(e,n,a,r),n.child)}function dm(e,n,a,i,r,c){return wi(n),n.updateQueue=null,a=mp(n,i,a,r),pp(e),i=Zr(),e!==null&&!Yt?(Kr(e,n,c),ga(e,n,c)):(Ie&&i&&kr(n),n.flags|=1,an(e,n,a,c),n.child)}function um(e,n,a,i,r){if(wi(n),n.stateNode===null){var c=$i,p=a.contextType;typeof p=="object"&&p!==null&&(c=nn(p)),c=new a(i,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=rc,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=i,c.state=n.memoizedState,c.refs={},Hr(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?nn(p):$i,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(oc(n,a,p,i),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&rc.enqueueReplaceState(c,c.state,null),Ul(n,i,c,r),Ol(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){c=n.stateNode;var x=n.memoizedProps,E=zi(a,x);c.props=E;var Z=c.context,te=a.contextType;p=$i,typeof te=="object"&&te!==null&&(p=nn(te));var ce=a.getDerivedStateFromProps;te=typeof ce=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=n.pendingProps!==x,te||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||Z!==p)&&Pp(n,c,i,p),Ba=!1;var K=n.memoizedState;c.state=K,Ul(n,i,c,r),Ol(),Z=n.memoizedState,x||K!==Z||Ba?(typeof ce=="function"&&(oc(n,a,ce,i),Z=n.memoizedState),(E=Ba||Jp(n,a,E,i,K,Z,p))?(te||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=Z),c.props=i,c.state=Z,c.context=p,i=E):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{c=n.stateNode,Lr(e,n),p=n.memoizedProps,te=zi(a,p),c.props=te,ce=n.pendingProps,K=c.context,Z=a.contextType,E=$i,typeof Z=="object"&&Z!==null&&(E=nn(Z)),x=a.getDerivedStateFromProps,(Z=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==ce||K!==E)&&Pp(n,c,i,E),Ba=!1,K=n.memoizedState,c.state=K,Ul(n,i,c,r),Ol();var J=n.memoizedState;p!==ce||K!==J||Ba||e!==null&&e.dependencies!==null&&Us(e.dependencies)?(typeof x=="function"&&(oc(n,a,x,i),J=n.memoizedState),(te=Ba||Jp(n,a,te,i,K,J,E)||e!==null&&e.dependencies!==null&&Us(e.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,J,E),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,J,E)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=J),c.props=i,c.state=J,c.context=E,i=te):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),i=!1)}return c=i,eo(e,n),i=(n.flags&128)!==0,c||i?(c=n.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&i?(n.child=ki(n,e.child,null,r),n.child=ki(n,null,a,r)):an(e,n,a,r),n.memoizedState=c.state,e=n.child):e=ga(e,n,r),e}function pm(e,n,a,i){return vi(),n.flags|=256,an(e,n,a,i),n.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(e){return{baseLanes:e,cachePool:tp()}}function fc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=zn),e}function mm(e,n,a){var i=n.pendingProps,r=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Dt.current&2)!==0),p&&(r=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ie){if(r?$a(n):Qa(),(e=yt)?(e=wf(e,Gn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=Zu(e),a.return=n,n.child=a,tn=n,yt=null)):e=null,e===null)throw La(n);return Jc(e)?n.lanes=32:n.lanes=536870912,null}var x=i.children;return i=i.fallback,r?(Qa(),r=n.mode,x=to({mode:"hidden",children:x},r),i=yi(i,r,a,null),x.return=n,i.return=n,x.sibling=i,n.child=x,i=n.child,i.memoizedState=mc(a),i.childLanes=fc(e,p,a),n.memoizedState=pc,Bl(null,i)):($a(n),hc(n,x))}var E=e.memoizedState;if(E!==null&&(x=E.dehydrated,x!==null)){if(c)n.flags&256?($a(n),n.flags&=-257,n=xc(e,n,a)):n.memoizedState!==null?(Qa(),n.child=e.child,n.flags|=128,n=null):(Qa(),x=i.fallback,r=n.mode,i=to({mode:"visible",children:i.children},r),x=yi(x,r,a,null),x.flags|=2,i.return=n,x.return=n,i.sibling=x,n.child=i,ki(n,e.child,null,a),i=n.child,i.memoizedState=mc(a),i.childLanes=fc(e,p,a),n.memoizedState=pc,n=Bl(null,i));else if($a(n),Jc(x)){if(p=x.nextSibling&&x.nextSibling.dataset,p)var Z=p.dgst;p=Z,i=Error(d(419)),i.stack="",i.digest=p,zl({value:i,source:null,stack:null}),n=xc(e,n,a)}else if(Yt||Ki(e,n,a,!1),p=(a&e.childLanes)!==0,Yt||p){if(p=ht,p!==null&&(i=_e(p,a),i!==0&&i!==E.retryLane))throw E.retryLane=i,gi(e,i),wn(p,e,i),dc;Vc(x)||uo(),n=xc(e,n,a)}else Vc(x)?(n.flags|=192,n.child=e.child,n=null):(e=E.treeContext,yt=$n(x.nextSibling),tn=n,Ie=!0,Ha=null,Gn=!1,e!==null&&Vu(n,e),n=hc(n,i.children),n.flags|=4096);return n}return r?(Qa(),x=i.fallback,r=n.mode,E=e.child,Z=E.sibling,i=pa(E,{mode:"hidden",children:i.children}),i.subtreeFlags=E.subtreeFlags&65011712,Z!==null?x=pa(Z,x):(x=yi(x,r,a,null),x.flags|=2),x.return=n,i.return=n,i.sibling=x,n.child=i,Bl(null,i),i=n.child,x=e.child.memoizedState,x===null?x=mc(a):(r=x.cachePool,r!==null?(E=Bt._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=tp(),x={baseLanes:x.baseLanes|a,cachePool:r}),i.memoizedState=x,i.childLanes=fc(e,p,a),n.memoizedState=pc,Bl(e.child,i)):($a(n),a=e.child,e=a.sibling,a=pa(a,{mode:"visible",children:i.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function hc(e,n){return n=to({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function to(e,n){return e=Nn(22,e,null,n),e.lanes=0,e}function xc(e,n,a){return ki(n,e.child,null,a),e=hc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fm(e,n,a){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Mr(e.return,n,a)}function bc(e,n,a,i,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:r,treeForkCount:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=a,p.tailMode=r,p.treeForkCount=c)}function hm(e,n,a){var i=n.pendingProps,r=i.revealOrder,c=i.tail;i=i.children;var p=Dt.current,x=(p&2)!==0;if(x?(p=p&1|2,n.flags|=128):p&=1,ee(Dt,p),an(e,n,i,a),i=Ie?Cl:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fm(e,a,n);else if(e.tag===19)fm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=n.child,r=null;a!==null;)e=a.alternate,e!==null&&$s(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=n.child,n.child=null):(r=a.sibling,a.sibling=null),bc(n,!1,r,a,c,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&$s(e)===null){n.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}bc(n,!0,a,null,c,i);break;case"together":bc(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function ga(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ki(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(d(153));if(n.child!==null){for(e=n.child,a=pa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=pa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function gc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Us(e)))}function lg(e,n,a){switch(n.tag){case 3:Je(n,n.stateNode.containerInfo),qa(n,Bt,e.memoizedState.cache),vi();break;case 27:case 5:et(n);break;case 4:Je(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$r(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?($a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?mm(e,n,a):($a(n),e=ga(e,n,a),e!==null?e.sibling:null);$a(n);break;case 19:var r=(e.flags&128)!==0;if(i=(a&n.childLanes)!==0,i||(Ki(e,n,a,!1),i=(a&n.childLanes)!==0),r){if(i)return hm(e,n,a);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ee(Dt,Dt.current),i)break;return null;case 22:return n.lanes=0,om(e,n,a,n.pendingProps);case 24:qa(n,Bt,e.memoizedState.cache)}return ga(e,n,a)}function xm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Yt=!0;else{if(!gc(e,a)&&(n.flags&128)===0)return Yt=!1,lg(e,n,a);Yt=(e.flags&131072)!==0}else Yt=!1,Ie&&(n.flags&1048576)!==0&&Fu(n,Cl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=Ni(n.elementType),n.type=e,typeof e=="function")_r(e)?(i=zi(e,i),n.tag=1,n=um(null,n,e,i,a)):(n.tag=0,n=uc(null,n,e,i,a));else{if(e!=null){var r=e.$$typeof;if(r===ae){n.tag=11,n=im(null,n,e,i,a);break e}else if(r===D){n.tag=14,n=lm(null,n,e,i,a);break e}}throw n=Y(e)||e,Error(d(306,n,""))}}return n;case 0:return uc(e,n,n.type,n.pendingProps,a);case 1:return i=n.type,r=zi(i,n.pendingProps),um(e,n,i,r,a);case 3:e:{if(Je(n,n.stateNode.containerInfo),e===null)throw Error(d(387));i=n.pendingProps;var c=n.memoizedState;r=c.element,Lr(e,n),Ul(n,i,null,a);var p=n.memoizedState;if(i=p.cache,qa(n,Bt,i),i!==c.cache&&Ar(n,[Bt],a,!0),Ol(),i=p.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=pm(e,n,i,a);break e}else if(i!==r){r=Ln(Error(d(424)),n),zl(r),n=pm(e,n,i,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(yt=$n(e.firstChild),tn=n,Ie=!0,Ha=null,Gn=!0,a=op(n,null,i,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vi(),i===r){n=ga(e,n,a);break e}an(e,n,i,a)}n=n.child}return n;case 26:return eo(e,n),e===null?(a=zf(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ie||(a=n.type,e=n.pendingProps,i=go(Me.current).createElement(a),i[At]=n,i[St]=e,ln(i,a,e),Pt(i),n.stateNode=i):n.memoizedState=zf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return et(n),e===null&&Ie&&(i=n.stateNode=Sf(n.type,n.pendingProps,Me.current),tn=n,Gn=!0,r=yt,Wa(n.type)?(Pc=r,yt=$n(i.firstChild)):yt=r),an(e,n,n.pendingProps.children,a),eo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ie&&((r=i=yt)&&(i=Ug(i,n.type,n.pendingProps,Gn),i!==null?(n.stateNode=i,tn=n,yt=$n(i.firstChild),Gn=!1,r=!0):r=!1),r||La(n)),et(n),r=n.type,c=n.pendingProps,p=e!==null?e.memoizedProps:null,i=c.children,Zc(r,c)?i=null:p!==null&&Zc(r,p)&&(n.flags|=32),n.memoizedState!==null&&(r=Xr(e,n,Jb,null,null,a),ts._currentValue=r),eo(e,n),an(e,n,i,a),n.child;case 6:return e===null&&Ie&&((e=a=yt)&&(a=Rg(a,n.pendingProps,Gn),a!==null?(n.stateNode=a,tn=n,yt=null,e=!0):e=!1),e||La(n)),null;case 13:return mm(e,n,a);case 4:return Je(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=ki(n,null,i,a):an(e,n,i,a),n.child;case 11:return im(e,n,n.type,n.pendingProps,a);case 7:return an(e,n,n.pendingProps,a),n.child;case 8:return an(e,n,n.pendingProps.children,a),n.child;case 12:return an(e,n,n.pendingProps.children,a),n.child;case 10:return i=n.pendingProps,qa(n,n.type,i.value),an(e,n,i.children,a),n.child;case 9:return r=n.type._context,i=n.pendingProps.children,wi(n),r=nn(r),i=i(r),n.flags|=1,an(e,n,i,a),n.child;case 14:return lm(e,n,n.type,n.pendingProps,a);case 15:return sm(e,n,n.type,n.pendingProps,a);case 19:return hm(e,n,a);case 31:return ig(e,n,a);case 22:return om(e,n,a,n.pendingProps);case 24:return wi(n),i=nn(Bt),e===null?(r=Ur(),r===null&&(r=ht,c=Dr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),n.memoizedState={parent:i,cache:r},Hr(n),qa(n,Bt,r)):((e.lanes&a)!==0&&(Lr(e,n),Ul(n,null,null,a),Ol()),r=e.memoizedState,c=n.memoizedState,r.parent!==i?(r={parent:i,cache:i},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),qa(n,Bt,i)):(i=c.cache,qa(n,Bt,i),i!==r.cache&&Ar(n,[Bt],a,!0))),an(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function ya(e){e.flags|=4}function yc(e,n,a,i,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if($m())e.flags|=8192;else throw Si=qs,Rr}else e.flags&=-16777217}function bm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Df(n))if($m())e.flags|=8192;else throw Si=qs,Rr}function no(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ce():536870912,e.lanes|=n,ll|=n)}function Gl(e,n){if(!Ie)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function vt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(n)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=a,n}function sg(e,n,a){var i=n.pendingProps;switch(Cr(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(n),null;case 1:return vt(n),null;case 3:return a=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),ha(Bt),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zi(n)?ya(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tr())),vt(n),null;case 26:var r=n.type,c=n.memoizedState;return e===null?(ya(n),c!==null?(vt(n),bm(n,c)):(vt(n),yc(n,r,null,i,a))):c?c!==e.memoizedState?(ya(n),vt(n),bm(n,c)):(vt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&ya(n),vt(n),yc(n,r,e,i,a)),null;case 27:if(ft(n),a=Me.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&ya(n);else{if(!i){if(n.stateNode===null)throw Error(d(166));return vt(n),null}e=me.current,Zi(n)?Ju(n):(e=Sf(r,i,a),n.stateNode=e,ya(n))}return vt(n),null;case 5:if(ft(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&ya(n);else{if(!i){if(n.stateNode===null)throw Error(d(166));return vt(n),null}if(c=me.current,Zi(n))Ju(n);else{var p=go(Me.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?p.createElement(r,{is:i.is}):p.createElement(r)}}c[At]=n,c[St]=i;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=c;e:switch(ln(c,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ya(n)}}return vt(n),yc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&ya(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(d(166));if(e=Me.current,Zi(n)){if(e=n.stateNode,a=n.memoizedProps,i=null,r=tn,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[At]=n,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||ff(e.nodeValue,a)),e||La(n,!0)}else e=go(e).createTextNode(i),e[At]=n,n.stateNode=e}return vt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(i=Zi(n),a!==null){if(e===null){if(!i)throw Error(d(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[At]=n}else vi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vt(n),e=!1}else a=Tr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(kn(n),n):(kn(n),null);if((n.flags&128)!==0)throw Error(d(558))}return vt(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Zi(n),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[At]=n}else vi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vt(n),r=!1}else r=Tr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(kn(n),n):(kn(n),null)}return kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=n.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),no(n,n.updateQueue),vt(n),null);case 4:return Re(),e===null&&Gc(n.stateNode.containerInfo),vt(n),null;case 10:return ha(n.type),vt(n),null;case 19:if(M(Dt),i=n.memoizedState,i===null)return vt(n),null;if(r=(n.flags&128)!==0,c=i.rendering,c===null)if(r)Gl(i,!1);else{if(Tt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=$s(e),c!==null){for(n.flags|=128,Gl(i,!1),e=c.updateQueue,n.updateQueue=e,no(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Xu(a,e),a=a.sibling;return ee(Dt,Dt.current&1|2),Ie&&ma(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&rt()>oo&&(n.flags|=128,r=!0,Gl(i,!1),n.lanes=4194304)}else{if(!r)if(e=$s(c),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,no(n,e),Gl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!Ie)return vt(n),null}else 2*rt()-i.renderingStartTime>oo&&a!==536870912&&(n.flags|=128,r=!0,Gl(i,!1),n.lanes=4194304);i.isBackwards?(c.sibling=n.child,n.child=c):(e=i.last,e!==null?e.sibling=c:n.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=rt(),e.sibling=null,a=Dt.current,ee(Dt,r?a&1|2:a&1),Ie&&ma(n,i.treeForkCount),e):(vt(n),null);case 22:case 23:return kn(n),Yr(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(a&536870912)!==0&&(n.flags&128)===0&&(vt(n),n.subtreeFlags&6&&(n.flags|=8192)):vt(n),a=n.updateQueue,a!==null&&no(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048),e!==null&&M(_i),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ha(Bt),vt(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function og(e,n){switch(Cr(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ha(Bt),Re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 31:if(n.memoizedState!==null){if(kn(n),n.alternate===null)throw Error(d(340));vi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(d(340));vi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return M(Dt),null;case 4:return Re(),null;case 10:return ha(n.type),null;case 22:case 23:return kn(n),Yr(),e!==null&&M(_i),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ha(Bt),null;case 25:return null;default:return null}}function gm(e,n){switch(Cr(n),n.tag){case 3:ha(Bt),Re();break;case 26:case 27:case 5:ft(n);break;case 4:Re();break;case 31:n.memoizedState!==null&&kn(n);break;case 13:kn(n);break;case 19:M(Dt);break;case 10:ha(n.type);break;case 22:case 23:kn(n),Yr(),e!==null&&M(_i);break;case 24:ha(Bt)}}function Yl(e,n){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){i=void 0;var c=a.create,p=a.inst;i=c(),p.destroy=i}a=a.next}while(a!==r)}}catch(x){dt(n,n.return,x)}}function Xa(e,n,a){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var c=r.next;i=c;do{if((i.tag&e)===e){var p=i.inst,x=p.destroy;if(x!==void 0){p.destroy=void 0,r=n;var E=a,Z=x;try{Z()}catch(te){dt(r,E,te)}}}i=i.next}while(i!==c)}}catch(te){dt(n,n.return,te)}}function ym(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{cp(n,a)}catch(i){dt(e,e.return,i)}}}function vm(e,n,a){a.props=zi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){dt(e,n,i)}}function $l(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(r){dt(e,n,r)}}function aa(e,n){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(r){dt(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){dt(e,n,r)}else a.current=null}function jm(e){var n=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(r){dt(e,e.return,r)}}function vc(e,n,a){try{var i=e.stateNode;Tg(i,e.type,a,n),i[St]=n}catch(r){dt(e,e.return,r)}}function wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wc(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=da));else if(i!==4&&(i===27&&Wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(wc(e,n,a),e=e.sibling;e!==null;)wc(e,n,a),e=e.sibling}function ao(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(i!==4&&(i===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ao(e,n,a),e=e.sibling;e!==null;)ao(e,n,a),e=e.sibling}function _m(e){var n=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);ln(n,i,a),n[At]=e,n[St]=a}catch(c){dt(e,e.return,c)}}var va=!1,$t=!1,_c=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function rg(e,n){if(e=e.containerInfo,Qc=So,e=Ru(e),xr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var r=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var p=0,x=-1,E=-1,Z=0,te=0,ce=e,K=null;t:for(;;){for(var J;ce!==a||r!==0&&ce.nodeType!==3||(x=p+r),ce!==c||i!==0&&ce.nodeType!==3||(E=p+i),ce.nodeType===3&&(p+=ce.nodeValue.length),(J=ce.firstChild)!==null;)K=ce,ce=J;for(;;){if(ce===e)break t;if(K===a&&++Z===r&&(x=p),K===c&&++te===i&&(E=p),(J=ce.nextSibling)!==null)break;ce=K,K=ce.parentNode}ce=J}a=x===-1||E===-1?null:{start:x,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xc={focusedElem:e,selectionRange:a},So=!1,Wt=n;Wt!==null;)if(n=Wt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Wt=e;else for(;Wt!==null;){switch(n=Wt,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,r=c.memoizedProps,c=c.memoizedState,i=a.stateNode;try{var ke=zi(a.type,r);e=i.getSnapshotBeforeUpdate(ke,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(Oe){dt(a,a.return,Oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Fc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=n.sibling,e!==null){e.return=n.return,Wt=e;break}Wt=n.return}}function Sm(e,n,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:wa(e,a),i&4&&Yl(5,a);break;case 1:if(wa(e,a),i&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){dt(a,a.return,p)}else{var r=zi(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){dt(a,a.return,p)}}i&64&&ym(a),i&512&&$l(a,a.return);break;case 3:if(wa(e,a),i&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{cp(e,n)}catch(p){dt(a,a.return,p)}}break;case 27:n===null&&i&4&&_m(a);case 26:case 5:wa(e,a),n===null&&i&4&&jm(a),i&512&&$l(a,a.return);break;case 12:wa(e,a);break;case 31:wa(e,a),i&4&&zm(e,a);break;case 13:wa(e,a),i&4&&Tm(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=bg.bind(null,a),Hg(e,a))));break;case 22:if(i=a.memoizedState!==null||va,!i){n=n!==null&&n.memoizedState!==null||$t,r=va;var c=$t;va=i,($t=n)&&!c?_a(e,a,(a.subtreeFlags&8772)!==0):wa(e,a),va=r,$t=c}break;case 30:break;default:wa(e,a)}}function km(e){var n=e.alternate;n!==null&&(e.alternate=null,km(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&xn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _t=null,gn=!1;function ja(e,n,a){for(a=a.child;a!==null;)Cm(e,n,a),a=a.sibling}function Cm(e,n,a){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(He,a)}catch{}switch(a.tag){case 26:$t||aa(a,n),ja(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$t||aa(a,n);var i=_t,r=gn;Wa(a.type)&&(_t=a.stateNode,gn=!1),ja(e,n,a),Wl(a.stateNode),_t=i,gn=r;break;case 5:$t||aa(a,n);case 6:if(i=_t,r=gn,_t=null,ja(e,n,a),_t=i,gn=r,_t!==null)if(gn)try{(_t.nodeType===9?_t.body:_t.nodeName==="HTML"?_t.ownerDocument.body:_t).removeChild(a.stateNode)}catch(c){dt(a,n,c)}else try{_t.removeChild(a.stateNode)}catch(c){dt(a,n,c)}break;case 18:_t!==null&&(gn?(e=_t,vf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ml(e)):vf(_t,a.stateNode));break;case 4:i=_t,r=gn,_t=a.stateNode.containerInfo,gn=!0,ja(e,n,a),_t=i,gn=r;break;case 0:case 11:case 14:case 15:Xa(2,a,n),$t||Xa(4,a,n),ja(e,n,a);break;case 1:$t||(aa(a,n),i=a.stateNode,typeof i.componentWillUnmount=="function"&&vm(a,n,i)),ja(e,n,a);break;case 21:ja(e,n,a);break;case 22:$t=(i=$t)||a.memoizedState!==null,ja(e,n,a),$t=i;break;default:ja(e,n,a)}}function zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ml(e)}catch(a){dt(n,n.return,a)}}}function Tm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(a){dt(n,n.return,a)}}function cg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Nm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Nm),n;default:throw Error(d(435,e.tag))}}function io(e,n){var a=cg(e);n.forEach(function(i){if(!a.has(i)){a.add(i);var r=gg.bind(null,e,i);i.then(r,r)}})}function yn(e,n){var a=n.deletions;if(a!==null)for(var i=0;i<a.length;i++){var r=a[i],c=e,p=n,x=p;e:for(;x!==null;){switch(x.tag){case 27:if(Wa(x.type)){_t=x.stateNode,gn=!1;break e}break;case 5:_t=x.stateNode,gn=!1;break e;case 3:case 4:_t=x.stateNode.containerInfo,gn=!0;break e}x=x.return}if(_t===null)throw Error(d(160));Cm(c,p,r),_t=null,gn=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Em(n,e),n=n.sibling}var Vn=null;function Em(e,n){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yn(n,e),vn(e),i&4&&(Xa(3,e,e.return),Yl(3,e),Xa(5,e,e.return));break;case 1:yn(n,e),vn(e),i&512&&($t||a===null||aa(a,a.return)),i&64&&va&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var r=Vn;if(yn(n,e),vn(e),i&512&&($t||a===null||aa(a,a.return)),i&4){var c=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":c=r.getElementsByTagName("title")[0],(!c||c[tt]||c[At]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(i),r.head.insertBefore(c,r.querySelector("head > title"))),ln(c,i,a),c[At]=e,Pt(c),i=c;break e;case"link":var p=Mf("link","href",r).get(i+(a.href||""));if(p){for(var x=0;x<p.length;x++)if(c=p[x],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(x,1);break t}}c=r.createElement(i),ln(c,i,a),r.head.appendChild(c);break;case"meta":if(p=Mf("meta","content",r).get(i+(a.content||""))){for(x=0;x<p.length;x++)if(c=p[x],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(x,1);break t}}c=r.createElement(i),ln(c,i,a),r.head.appendChild(c);break;default:throw Error(d(468,i))}c[At]=e,Pt(c),i=c}e.stateNode=i}else Af(r,e.type,e.stateNode);else e.stateNode=Ef(r,i,e.memoizedProps);else c!==i?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,i===null?Af(r,e.type,e.stateNode):Ef(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&vc(e,e.memoizedProps,a.memoizedProps)}break;case 27:yn(n,e),vn(e),i&512&&($t||a===null||aa(a,a.return)),a!==null&&i&4&&vc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(yn(n,e),vn(e),i&512&&($t||a===null||aa(a,a.return)),e.flags&32){r=e.stateNode;try{Ri(r,"")}catch(ke){dt(e,e.return,ke)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,vc(e,r,a!==null?a.memoizedProps:r)),i&1024&&(_c=!0);break;case 6:if(yn(n,e),vn(e),i&4){if(e.stateNode===null)throw Error(d(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(ke){dt(e,e.return,ke)}}break;case 3:if(jo=null,r=Vn,Vn=yo(n.containerInfo),yn(n,e),Vn=r,vn(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{ml(n.containerInfo)}catch(ke){dt(e,e.return,ke)}_c&&(_c=!1,Mm(e));break;case 4:i=Vn,Vn=yo(e.stateNode.containerInfo),yn(n,e),vn(e),Vn=i;break;case 12:yn(n,e),vn(e);break;case 31:yn(n,e),vn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,io(e,i)));break;case 13:yn(n,e),vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(so=rt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,io(e,i)));break;case 22:r=e.memoizedState!==null;var E=a!==null&&a.memoizedState!==null,Z=va,te=$t;if(va=Z||r,$t=te||E,yn(n,e),$t=te,va=Z,vn(e),i&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(a===null||E||va||$t||Ti(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){E=a=n;try{if(c=E.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{x=E.stateNode;var ce=E.memoizedProps.style,K=ce!=null&&ce.hasOwnProperty("display")?ce.display:null;x.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(ke){dt(E,E.return,ke)}}}else if(n.tag===6){if(a===null){E=n;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(ke){dt(E,E.return,ke)}}}else if(n.tag===18){if(a===null){E=n;try{var J=E.stateNode;r?jf(J,!0):jf(E.stateNode,!1)}catch(ke){dt(E,E.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,io(e,a))));break;case 19:yn(n,e),vn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,io(e,i)));break;case 30:break;case 21:break;default:yn(n,e),vn(e)}}function vn(e){var n=e.flags;if(n&2){try{for(var a,i=e.return;i!==null;){if(wm(i)){a=i;break}i=i.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var r=a.stateNode,c=jc(e);ao(e,c,r);break;case 5:var p=a.stateNode;a.flags&32&&(Ri(p,""),a.flags&=-33);var x=jc(e);ao(e,x,p);break;case 3:case 4:var E=a.stateNode.containerInfo,Z=jc(e);wc(e,Z,E);break;default:throw Error(d(161))}}catch(te){dt(e,e.return,te)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Mm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Mm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function wa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Sm(e,n.alternate,n),n=n.sibling}function Ti(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Ti(n);break;case 1:aa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&vm(n,n.return,a),Ti(n);break;case 27:Wl(n.stateNode);case 26:case 5:aa(n,n.return),Ti(n);break;case 22:n.memoizedState===null&&Ti(n);break;case 30:Ti(n);break;default:Ti(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,r=e,c=n,p=c.flags;switch(c.tag){case 0:case 11:case 15:_a(r,c,a),Yl(4,c);break;case 1:if(_a(r,c,a),i=c,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Z){dt(i,i.return,Z)}if(i=c,r=i.updateQueue,r!==null){var x=i.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)rp(E[r],x)}catch(Z){dt(i,i.return,Z)}}a&&p&64&&ym(c),$l(c,c.return);break;case 27:_m(c);case 26:case 5:_a(r,c,a),a&&i===null&&p&4&&jm(c),$l(c,c.return);break;case 12:_a(r,c,a);break;case 31:_a(r,c,a),a&&p&4&&zm(r,c);break;case 13:_a(r,c,a),a&&p&4&&Tm(r,c);break;case 22:c.memoizedState===null&&_a(r,c,a),$l(c,c.return);break;case 30:break;default:_a(r,c,a)}n=n.sibling}}function Nc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Tl(a))}function Sc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Tl(e))}function Jn(e,n,a,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Am(e,n,a,i),n=n.sibling}function Am(e,n,a,i){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Jn(e,n,a,i),r&2048&&Yl(9,n);break;case 1:Jn(e,n,a,i);break;case 3:Jn(e,n,a,i),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Tl(e)));break;case 12:if(r&2048){Jn(e,n,a,i),e=n.stateNode;try{var c=n.memoizedProps,p=c.id,x=c.onPostCommit;typeof x=="function"&&x(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){dt(n,n.return,E)}}else Jn(e,n,a,i);break;case 31:Jn(e,n,a,i);break;case 13:Jn(e,n,a,i);break;case 23:break;case 22:c=n.stateNode,p=n.alternate,n.memoizedState!==null?c._visibility&2?Jn(e,n,a,i):Ql(e,n):c._visibility&2?Jn(e,n,a,i):(c._visibility|=2,nl(e,n,a,i,(n.subtreeFlags&10256)!==0||!1)),r&2048&&Nc(p,n);break;case 24:Jn(e,n,a,i),r&2048&&Sc(n.alternate,n);break;default:Jn(e,n,a,i)}}function nl(e,n,a,i,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,p=n,x=a,E=i,Z=p.flags;switch(p.tag){case 0:case 11:case 15:nl(c,p,x,E,r),Yl(8,p);break;case 23:break;case 22:var te=p.stateNode;p.memoizedState!==null?te._visibility&2?nl(c,p,x,E,r):Ql(c,p):(te._visibility|=2,nl(c,p,x,E,r)),r&&Z&2048&&Nc(p.alternate,p);break;case 24:nl(c,p,x,E,r),r&&Z&2048&&Sc(p.alternate,p);break;default:nl(c,p,x,E,r)}n=n.sibling}}function Ql(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,i=n,r=i.flags;switch(i.tag){case 22:Ql(a,i),r&2048&&Nc(i.alternate,i);break;case 24:Ql(a,i),r&2048&&Sc(i.alternate,i);break;default:Ql(a,i)}n=n.sibling}}var Xl=8192;function al(e,n,a){if(e.subtreeFlags&Xl)for(e=e.child;e!==null;)Dm(e,n,a),e=e.sibling}function Dm(e,n,a){switch(e.tag){case 26:al(e,n,a),e.flags&Xl&&e.memoizedState!==null&&Vg(a,Vn,e.memoizedState,e.memoizedProps);break;case 5:al(e,n,a);break;case 3:case 4:var i=Vn;Vn=yo(e.stateNode.containerInfo),al(e,n,a),Vn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Xl,Xl=16777216,al(e,n,a),Xl=i):al(e,n,a));break;default:al(e,n,a)}}function Om(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];Wt=i,Rm(i,e)}Om(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Um(e),e=e.sibling}function Um(e){switch(e.tag){case 0:case 11:case 15:Zl(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:Zl(e);break;case 12:Zl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,lo(e)):Zl(e);break;default:Zl(e)}}function lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];Wt=i,Rm(i,e)}Om(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),lo(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,lo(n));break;default:lo(n)}e=e.sibling}}function Rm(e,n){for(;Wt!==null;){var a=Wt;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Tl(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Wt=i;else e:for(a=e;Wt!==null;){i=Wt;var r=i.sibling,c=i.return;if(km(i),i===a){Wt=null;break e}if(r!==null){r.return=c,Wt=r;break e}Wt=c}}}var dg={getCacheForType:function(e){var n=nn(Bt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return nn(Bt).controller.signal}},ug=typeof WeakMap=="function"?WeakMap:Map,st=0,ht=null,Ke=null,Pe=0,ct=0,Cn=null,Za=!1,il=!1,kc=!1,Na=0,Tt=0,Ka=0,Ei=0,Cc=0,zn=0,ll=0,Kl=null,jn=null,zc=!1,so=0,Hm=0,oo=1/0,ro=null,Fa=null,Zt=0,Va=null,sl=null,Sa=0,Tc=0,Ec=null,Lm=null,Fl=0,Mc=null;function Tn(){return(st&2)!==0&&Pe!==0?Pe&-Pe:z.T!==null?Hc():oa()}function qm(){if(zn===0)if((Pe&536870912)===0||Ie){var e=un;un<<=1,(un&3932160)===0&&(un=262144),zn=e}else zn=536870912;return e=Sn.current,e!==null&&(e.flags|=32),zn}function wn(e,n,a){(e===ht&&(ct===2||ct===9)||e.cancelPendingCommit!==null)&&(ol(e,0),Ja(e,Pe,zn,!1)),$e(e,a),((st&2)===0||e!==ht)&&(e===ht&&((st&2)===0&&(Ei|=a),Tt===4&&Ja(e,Pe,zn,!1)),ia(e))}function Bm(e,n,a){if((st&6)!==0)throw Error(d(327));var i=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ie(e,n),r=i?fg(e,n):Dc(e,n,!0),c=i;do{if(r===0){il&&!i&&Ja(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!pg(a)){r=Dc(e,n,!1),c=!1;continue}if(r===2){if(c=n,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var x=e;r=Kl;var E=x.current.memoizedState.isDehydrated;if(E&&(ol(x,p).flags|=256),p=Dc(x,p,!1),p!==2){if(kc&&!E){x.errorRecoveryDisabledLanes|=c,Ei|=c,r=4;break e}c=jn,jn=r,c!==null&&(jn===null?jn=c:jn.push.apply(jn,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){ol(e,0),Ja(e,n,0,!0);break}e:{switch(i=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:Ja(i,n,zn,!Za);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(r=so+300-rt(),10<r)){if(Ja(i,n,zn,!Za),U(i,0,!0)!==0)break e;Sa=n,i.timeoutHandle=gf(Gm.bind(null,i,a,jn,ro,zc,n,zn,Ei,ll,Za,c,"Throttled",-0,0),r);break e}Gm(i,a,jn,ro,zc,n,zn,Ei,ll,Za,c,null,-0,0)}}break}while(!0);ia(e)}function Gm(e,n,a,i,r,c,p,x,E,Z,te,ce,K,J){if(e.timeoutHandle=-1,ce=n.subtreeFlags,ce&8192||(ce&16785408)===16785408){ce={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},Dm(n,c,ce);var ke=(c&62914560)===c?so-rt():(c&4194048)===c?Hm-rt():0;if(ke=Jg(ce,ke),ke!==null){Sa=c,e.cancelPendingCommit=ke(Vm.bind(null,e,n,c,a,i,r,p,x,E,te,ce,null,K,J)),Ja(e,c,p,!Z);return}}Vm(e,n,c,a,i,r,p,x,E)}function pg(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var r=a[i],c=r.getSnapshot;r=r.value;try{if(!_n(c(),r))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(e,n,a,i){n&=~Cc,n&=~Ei,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var r=n;0<r;){var c=31-nt(r),p=1<<c;i[c]=-1,r&=~p}a!==0&&oe(e,a,n)}function co(){return(st&6)===0?(Vl(0),!1):!0}function Ac(){if(Ke!==null){if(ct===0)var e=Ke.return;else e=Ke,fa=ji=null,Fr(e),Pi=null,Ml=0,e=Ke;for(;e!==null;)gm(e.alternate,e),e=e.return;Ke=null}}function ol(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ag(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sa=0,Ac(),ht=e,Ke=a=pa(e.current,null),Pe=n,ct=0,Cn=null,Za=!1,il=ie(e,n),kc=!1,ll=zn=Cc=Ei=Ka=Tt=0,jn=Kl=null,zc=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var r=31-nt(i),c=1<<r;n|=e[r],i&=~c}return Na=n,Es(),a}function Ym(e,n){Be=null,z.H=ql,n===Ji||n===Ls?(n=ip(),ct=3):n===Rr?(n=ip(),ct=4):ct=n===dc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Cn=n,Ke===null&&(Tt=1,Ws(e,Ln(n,e.current)))}function $m(){var e=Sn.current;return e===null?!0:(Pe&4194048)===Pe?Yn===null:(Pe&62914560)===Pe||(Pe&536870912)!==0?e===Yn:!1}function Qm(){var e=z.H;return z.H=ql,e===null?ql:e}function Xm(){var e=z.A;return z.A=dg,e}function uo(){Tt=4,Za||(Pe&4194048)!==Pe&&Sn.current!==null||(il=!0),(Ka&134217727)===0&&(Ei&134217727)===0||ht===null||Ja(ht,Pe,zn,!1)}function Dc(e,n,a){var i=st;st|=2;var r=Qm(),c=Xm();(ht!==e||Pe!==n)&&(ro=null,ol(e,n)),n=!1;var p=Tt;e:do try{if(ct!==0&&Ke!==null){var x=Ke,E=Cn;switch(ct){case 8:Ac(),p=6;break e;case 3:case 2:case 9:case 6:Sn.current===null&&(n=!0);var Z=ct;if(ct=0,Cn=null,rl(e,x,E,Z),a&&il){p=0;break e}break;default:Z=ct,ct=0,Cn=null,rl(e,x,E,Z)}}mg(),p=Tt;break}catch(te){Ym(e,te)}while(!0);return n&&e.shellSuspendCounter++,fa=ji=null,st=i,z.H=r,z.A=c,Ke===null&&(ht=null,Pe=0,Es()),p}function mg(){for(;Ke!==null;)Zm(Ke)}function fg(e,n){var a=st;st|=2;var i=Qm(),r=Xm();ht!==e||Pe!==n?(ro=null,oo=rt()+500,ol(e,n)):il=ie(e,n);e:do try{if(ct!==0&&Ke!==null){n=Ke;var c=Cn;t:switch(ct){case 1:ct=0,Cn=null,rl(e,n,c,1);break;case 2:case 9:if(np(c)){ct=0,Cn=null,Km(n);break}n=function(){ct!==2&&ct!==9||ht!==e||(ct=7),ia(e)},c.then(n,n);break e;case 3:ct=7;break e;case 4:ct=5;break e;case 7:np(c)?(ct=0,Cn=null,Km(n)):(ct=0,Cn=null,rl(e,n,c,7));break;case 5:var p=null;switch(Ke.tag){case 26:p=Ke.memoizedState;case 5:case 27:var x=Ke;if(p?Df(p):x.stateNode.complete){ct=0,Cn=null;var E=x.sibling;if(E!==null)Ke=E;else{var Z=x.return;Z!==null?(Ke=Z,po(Z)):Ke=null}break t}}ct=0,Cn=null,rl(e,n,c,5);break;case 6:ct=0,Cn=null,rl(e,n,c,6);break;case 8:Ac(),Tt=6;break e;default:throw Error(d(462))}}hg();break}catch(te){Ym(e,te)}while(!0);return fa=ji=null,z.H=i,z.A=r,st=a,Ke!==null?0:(ht=null,Pe=0,Es(),Tt)}function hg(){for(;Ke!==null&&!De();)Zm(Ke)}function Zm(e){var n=xm(e.alternate,e,Na);e.memoizedProps=e.pendingProps,n===null?po(e):Ke=n}function Km(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=dm(a,n,n.pendingProps,n.type,void 0,Pe);break;case 11:n=dm(a,n,n.pendingProps,n.type.render,n.ref,Pe);break;case 5:Fr(n);default:gm(a,n),n=Ke=Xu(n,Na),n=xm(a,n,Na)}e.memoizedProps=e.pendingProps,n===null?po(e):Ke=n}function rl(e,n,a,i){fa=ji=null,Fr(n),Pi=null,Ml=0;var r=n.return;try{if(ag(e,r,n,a,Pe)){Tt=1,Ws(e,Ln(a,e.current)),Ke=null;return}}catch(c){if(r!==null)throw Ke=r,c;Tt=1,Ws(e,Ln(a,e.current)),Ke=null;return}n.flags&32768?(Ie||i===1?e=!0:il||(Pe&536870912)!==0?e=!1:(Za=e=!0,(i===2||i===9||i===3||i===6)&&(i=Sn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Fm(n,e)):po(n)}function po(e){var n=e;do{if((n.flags&32768)!==0){Fm(n,Za);return}e=n.return;var a=sg(n.alternate,n,Na);if(a!==null){Ke=a;return}if(n=n.sibling,n!==null){Ke=n;return}Ke=n=e}while(n!==null);Tt===0&&(Tt=5)}function Fm(e,n){do{var a=og(e.alternate,e);if(a!==null){a.flags&=32767,Ke=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ke=e;return}Ke=e=a}while(e!==null);Tt=6,Ke=null}function Vm(e,n,a,i,r,c,p,x,E){e.cancelPendingCommit=null;do mo();while(Zt!==0);if((st&6)!==0)throw Error(d(327));if(n!==null){if(n===e.current)throw Error(d(177));if(c=n.lanes|n.childLanes,c|=jr,b(e,a,c,p,x,E),e===ht&&(Ke=ht=null,Pe=0),sl=n,Va=e,Sa=a,Tc=c,Ec=r,Lm=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yg(F,function(){return ef(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=z.T,z.T=null,r=V.p,V.p=2,p=st,st|=4;try{rg(e,n,a)}finally{st=p,V.p=r,z.T=i}}Zt=1,Jm(),Pm(),Wm()}}function Jm(){if(Zt===1){Zt=0;var e=Va,n=sl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var i=V.p;V.p=2;var r=st;st|=4;try{Em(n,e);var c=Xc,p=Ru(e.containerInfo),x=c.focusedElem,E=c.selectionRange;if(p!==x&&x&&x.ownerDocument&&Uu(x.ownerDocument.documentElement,x)){if(E!==null&&xr(x)){var Z=E.start,te=E.end;if(te===void 0&&(te=Z),"selectionStart"in x)x.selectionStart=Z,x.selectionEnd=Math.min(te,x.value.length);else{var ce=x.ownerDocument||document,K=ce&&ce.defaultView||window;if(K.getSelection){var J=K.getSelection(),ke=x.textContent.length,Oe=Math.min(E.start,ke),mt=E.end===void 0?Oe:Math.min(E.end,ke);!J.extend&&Oe>mt&&(p=mt,mt=Oe,Oe=p);var q=Ou(x,Oe),O=Ou(x,mt);if(q&&O&&(J.rangeCount!==1||J.anchorNode!==q.node||J.anchorOffset!==q.offset||J.focusNode!==O.node||J.focusOffset!==O.offset)){var X=ce.createRange();X.setStart(q.node,q.offset),J.removeAllRanges(),Oe>mt?(J.addRange(X),J.extend(O.node,O.offset)):(X.setEnd(O.node,O.offset),J.addRange(X))}}}}for(ce=[],J=x;J=J.parentNode;)J.nodeType===1&&ce.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<ce.length;x++){var le=ce[x];le.element.scrollLeft=le.left,le.element.scrollTop=le.top}}So=!!Qc,Xc=Qc=null}finally{st=r,V.p=i,z.T=a}}e.current=n,Zt=2}}function Pm(){if(Zt===2){Zt=0;var e=Va,n=sl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var i=V.p;V.p=2;var r=st;st|=4;try{Sm(e,n.alternate,n)}finally{st=r,V.p=i,z.T=a}}Zt=3}}function Wm(){if(Zt===4||Zt===3){Zt=0,fn();var e=Va,n=sl,a=Sa,i=Lm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Zt=5:(Zt=0,sl=Va=null,Im(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Fa=null),On(a),n=n.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(He,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=z.T,r=V.p,V.p=2,z.T=null;try{for(var c=e.onRecoverableError,p=0;p<i.length;p++){var x=i[p];c(x.value,{componentStack:x.stack})}}finally{z.T=n,V.p=r}}(Sa&3)!==0&&mo(),ia(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===Mc?Fl++:(Fl=0,Mc=e):Fl=0,Vl(0)}}function Im(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Tl(n)))}function mo(){return Jm(),Pm(),Wm(),ef()}function ef(){if(Zt!==5)return!1;var e=Va,n=Tc;Tc=0;var a=On(Sa),i=z.T,r=V.p;try{V.p=32>a?32:a,z.T=null,a=Ec,Ec=null;var c=Va,p=Sa;if(Zt=0,sl=Va=null,Sa=0,(st&6)!==0)throw Error(d(331));var x=st;if(st|=4,Um(c.current),Am(c,c.current,p,a),st=x,Vl(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(He,c)}catch{}return!0}finally{V.p=r,z.T=i,Im(e,n)}}function tf(e,n,a){n=Ln(a,n),n=cc(e.stateNode,n,2),e=Ya(e,n,2),e!==null&&($e(e,2),ia(e))}function dt(e,n,a){if(e.tag===3)tf(e,e,a);else for(;n!==null;){if(n.tag===3){tf(n,e,a);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fa===null||!Fa.has(i))){e=Ln(a,e),a=nm(2),i=Ya(n,a,2),i!==null&&(am(a,i,n,e),$e(i,2),ia(i));break}}n=n.return}}function Oc(e,n,a){var i=e.pingCache;if(i===null){i=e.pingCache=new ug;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(a)||(kc=!0,r.add(a),e=xg.bind(null,e,n,a),n.then(e,e))}function xg(e,n,a){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ht===e&&(Pe&a)===a&&(Tt===4||Tt===3&&(Pe&62914560)===Pe&&300>rt()-so?(st&2)===0&&ol(e,0):Cc|=a,ll===Pe&&(ll=0)),ia(e)}function nf(e,n){n===0&&(n=Ce()),e=gi(e,n),e!==null&&($e(e,n),ia(e))}function bg(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),nf(e,a)}function gg(e,n){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(n),nf(e,a)}function yg(e,n){return je(e,n)}var fo=null,cl=null,Uc=!1,ho=!1,Rc=!1,Pa=0;function ia(e){e!==cl&&e.next===null&&(cl===null?fo=cl=e:cl=cl.next=e),ho=!0,Uc||(Uc=!0,jg())}function Vl(e,n){if(!Rc&&ho){Rc=!0;do for(var a=!1,i=fo;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var c=0;else{var p=i.suspendedLanes,x=i.pingedLanes;c=(1<<31-nt(42|e)+1)-1,c&=r&~(p&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,of(i,c))}else c=Pe,c=U(i,i===ht?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||ie(i,c)||(a=!0,of(i,c));i=i.next}while(a);Rc=!1}}function vg(){af()}function af(){ho=Uc=!1;var e=0;Pa!==0&&Mg()&&(e=Pa);for(var n=rt(),a=null,i=fo;i!==null;){var r=i.next,c=lf(i,n);c===0?(i.next=null,a===null?fo=r:a.next=r,r===null&&(cl=a)):(a=i,(e!==0||(c&3)!==0)&&(ho=!0)),i=r}Zt!==0&&Zt!==5||Vl(e),Pa!==0&&(Pa=0)}function lf(e,n){for(var a=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-nt(c),x=1<<p,E=r[p];E===-1?((x&a)===0||(x&i)!==0)&&(r[p]=W(x,n)):E<=n&&(e.expiredLanes|=x),c&=~x}if(n=ht,a=Pe,a=U(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===n&&(ct===2||ct===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Mt(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ie(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(i!==null&&Mt(i),On(a)){case 2:case 8:a=hn;break;case 32:a=F;break;case 268435456:a=we;break;default:a=F}return i=sf.bind(null,e),a=je(a,i),e.callbackPriority=n,e.callbackNode=a,n}return i!==null&&i!==null&&Mt(i),e.callbackPriority=2,e.callbackNode=null,2}function sf(e,n){if(Zt!==0&&Zt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(mo()&&e.callbackNode!==a)return null;var i=Pe;return i=U(e,e===ht?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Bm(e,i,n),lf(e,rt()),e.callbackNode!=null&&e.callbackNode===a?sf.bind(null,e):null)}function of(e,n){if(mo())return null;Bm(e,n,!0)}function jg(){Dg(function(){(st&6)!==0?je(Dn,vg):af()})}function Hc(){if(Pa===0){var e=Fi;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Pa=e}return Pa}function rf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ws(""+e)}function cf(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function wg(e,n,a,i,r){if(n==="submit"&&a&&a.stateNode===r){var c=rf((r[St]||null).action),p=i.submitter;p&&(n=(n=p[St]||null)?rf(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var x=new ks("action","action",null,i,r);e.push({event:x,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Pa!==0){var E=p?cf(r,p):new FormData(r);ac(a,{pending:!0,data:E,method:r.method,action:c},null,E)}}else typeof c=="function"&&(x.preventDefault(),E=p?cf(r,p):new FormData(r),ac(a,{pending:!0,data:E,method:r.method,action:c},c,E))},currentTarget:r}]})}}for(var Lc=0;Lc<vr.length;Lc++){var qc=vr[Lc],_g=qc.toLowerCase(),Ng=qc[0].toUpperCase()+qc.slice(1);Fn(_g,"on"+Ng)}Fn(qu,"onAnimationEnd"),Fn(Bu,"onAnimationIteration"),Fn(Gu,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(Bb,"onTransitionRun"),Fn(Gb,"onTransitionStart"),Fn(Yb,"onTransitionCancel"),Fn(Yu,"onTransitionEnd"),Oi("onMouseEnter",["mouseout","mouseover"]),Oi("onMouseLeave",["mouseout","mouseover"]),Oi("onPointerEnter",["pointerout","pointerover"]),Oi("onPointerLeave",["pointerout","pointerover"]),fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jl));function df(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],r=i.event;i=i.listeners;e:{var c=void 0;if(n)for(var p=i.length-1;0<=p;p--){var x=i[p],E=x.instance,Z=x.currentTarget;if(x=x.listener,E!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=Z;try{c(r)}catch(te){Ts(te)}r.currentTarget=null,c=E}else for(p=0;p<i.length;p++){if(x=i[p],E=x.instance,Z=x.currentTarget,x=x.listener,E!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=Z;try{c(r)}catch(te){Ts(te)}r.currentTarget=null,c=E}}}}function Fe(e,n){var a=n[v];a===void 0&&(a=n[v]=new Set);var i=e+"__bubble";a.has(i)||(uf(n,e,2,!1),a.add(i))}function Bc(e,n,a){var i=0;n&&(i|=4),uf(a,e,i,n)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Gc(e){if(!e[xo]){e[xo]=!0,au.forEach(function(a){a!=="selectionchange"&&(Sg.has(a)||Bc(a,!1,e),Bc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xo]||(n[xo]=!0,Bc("selectionchange",!1,n))}}function uf(e,n,a,i){switch(Bf(n)){case 2:var r=Ig;break;case 8:r=ey;break;default:r=nd}a=r.bind(null,n,a,e),r=void 0,!or||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,a,{capture:!0,passive:r}):e.addEventListener(n,a,!0):r!==void 0?e.addEventListener(n,a,{passive:r}):e.addEventListener(n,a,!1)}function Yc(e,n,a,i,r){var c=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var x=i.stateNode.containerInfo;if(x===r)break;if(p===4)for(p=i.return;p!==null;){var E=p.tag;if((E===3||E===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;x!==null;){if(p=qt(x),p===null)return;if(E=p.tag,E===5||E===6||E===26||E===27){i=c=p;continue e}x=x.parentNode}}i=i.return}hu(function(){var Z=c,te=lr(a),ce=[];e:{var K=$u.get(e);if(K!==void 0){var J=ks,ke=e;switch(e){case"keypress":if(Ns(a)===0)break e;case"keydown":case"keyup":J=gb;break;case"focusin":ke="focus",J=ur;break;case"focusout":ke="blur",J=ur;break;case"beforeblur":case"afterblur":J=ur;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=sb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=jb;break;case qu:case Bu:case Gu:J=cb;break;case Yu:J=_b;break;case"scroll":case"scrollend":J=ib;break;case"wheel":J=Sb;break;case"copy":case"cut":case"paste":J=ub;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=vu;break;case"toggle":case"beforetoggle":J=Cb}var Oe=(n&4)!==0,mt=!Oe&&(e==="scroll"||e==="scrollend"),q=Oe?K!==null?K+"Capture":null:K;Oe=[];for(var O=Z,X;O!==null;){var le=O;if(X=le.stateNode,le=le.tag,le!==5&&le!==26&&le!==27||X===null||q===null||(le=gl(O,q),le!=null&&Oe.push(Pl(O,le,X))),mt)break;O=O.return}0<Oe.length&&(K=new J(K,ke,null,a,te),ce.push({event:K,listeners:Oe}))}}if((n&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",K&&a!==ir&&(ke=a.relatedTarget||a.fromElement)&&(qt(ke)||ke[Da]))break e;if((J||K)&&(K=te.window===te?te:(K=te.ownerDocument)?K.defaultView||K.parentWindow:window,J?(ke=a.relatedTarget||a.toElement,J=Z,ke=ke?qt(ke):null,ke!==null&&(mt=m(ke),Oe=ke.tag,ke!==mt||Oe!==5&&Oe!==27&&Oe!==6)&&(ke=null)):(J=null,ke=Z),J!==ke)){if(Oe=gu,le="onMouseLeave",q="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(Oe=vu,le="onPointerLeave",q="onPointerEnter",O="pointer"),mt=J==null?K:ra(J),X=ke==null?K:ra(ke),K=new Oe(le,O+"leave",J,a,te),K.target=mt,K.relatedTarget=X,le=null,qt(te)===Z&&(Oe=new Oe(q,O+"enter",ke,a,te),Oe.target=X,Oe.relatedTarget=mt,le=Oe),mt=le,J&&ke)t:{for(Oe=kg,q=J,O=ke,X=0,le=q;le;le=Oe(le))X++;le=0;for(var Ae=O;Ae;Ae=Oe(Ae))le++;for(;0<X-le;)q=Oe(q),X--;for(;0<le-X;)O=Oe(O),le--;for(;X--;){if(q===O||O!==null&&q===O.alternate){Oe=q;break t}q=Oe(q),O=Oe(O)}Oe=null}else Oe=null;J!==null&&pf(ce,K,J,Oe,!1),ke!==null&&mt!==null&&pf(ce,mt,ke,Oe,!0)}}e:{if(K=Z?ra(Z):window,J=K.nodeName&&K.nodeName.toLowerCase(),J==="select"||J==="input"&&K.type==="file")var at=zu;else if(ku(K))if(Tu)at=Hb;else{at=Ub;var Te=Ob}else J=K.nodeName,!J||J.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?Z&&ar(Z.elementType)&&(at=zu):at=Rb;if(at&&(at=at(e,Z))){Cu(ce,at,a,te);break e}Te&&Te(e,K,Z),e==="focusout"&&Z&&K.type==="number"&&Z.memoizedProps.value!=null&&nr(K,"number",K.value)}switch(Te=Z?ra(Z):window,e){case"focusin":(ku(Te)||Te.contentEditable==="true")&&(Bi=Te,br=Z,kl=null);break;case"focusout":kl=br=Bi=null;break;case"mousedown":gr=!0;break;case"contextmenu":case"mouseup":case"dragend":gr=!1,Hu(ce,a,te);break;case"selectionchange":if(qb)break;case"keydown":case"keyup":Hu(ce,a,te)}var Ge;if(mr)e:{switch(e){case"compositionstart":var We="onCompositionStart";break e;case"compositionend":We="onCompositionEnd";break e;case"compositionupdate":We="onCompositionUpdate";break e}We=void 0}else qi?Nu(e,a)&&(We="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(We="onCompositionStart");We&&(ju&&a.locale!=="ko"&&(qi||We!=="onCompositionStart"?We==="onCompositionEnd"&&qi&&(Ge=xu()):(Ua=te,rr="value"in Ua?Ua.value:Ua.textContent,qi=!0)),Te=bo(Z,We),0<Te.length&&(We=new yu(We,e,null,a,te),ce.push({event:We,listeners:Te}),Ge?We.data=Ge:(Ge=Su(a),Ge!==null&&(We.data=Ge)))),(Ge=Tb?Eb(e,a):Mb(e,a))&&(We=bo(Z,"onBeforeInput"),0<We.length&&(Te=new yu("onBeforeInput","beforeinput",null,a,te),ce.push({event:Te,listeners:We}),Te.data=Ge)),wg(ce,e,Z,a,te)}df(ce,n)})}function Pl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function bo(e,n){for(var a=n+"Capture",i=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=gl(e,a),r!=null&&i.unshift(Pl(e,r,c)),r=gl(e,n),r!=null&&i.push(Pl(e,r,c))),e.tag===3)return i;e=e.return}return[]}function kg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pf(e,n,a,i,r){for(var c=n._reactName,p=[];a!==null&&a!==i;){var x=a,E=x.alternate,Z=x.stateNode;if(x=x.tag,E!==null&&E===i)break;x!==5&&x!==26&&x!==27||Z===null||(E=Z,r?(Z=gl(a,c),Z!=null&&p.unshift(Pl(a,Z,E))):r||(Z=gl(a,c),Z!=null&&p.push(Pl(a,Z,E)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var Cg=/\r\n?/g,zg=/\u0000|\uFFFD/g;function mf(e){return(typeof e=="string"?e:""+e).replace(Cg,`
`).replace(zg,"")}function ff(e,n){return n=mf(n),mf(e)===n}function pt(e,n,a,i,r,c){switch(a){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||Ri(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&Ri(e,""+i);break;case"className":vs(e,"class",i);break;case"tabIndex":vs(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":vs(e,a,i);break;case"style":mu(e,i,c);break;case"data":if(n!=="object"){vs(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=ws(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&pt(e,n,"name",r.name,r,null),pt(e,n,"formEncType",r.formEncType,r,null),pt(e,n,"formMethod",r.formMethod,r,null),pt(e,n,"formTarget",r.formTarget,r,null)):(pt(e,n,"encType",r.encType,r,null),pt(e,n,"method",r.method,r,null),pt(e,n,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=ws(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=da);break;case"onScroll":i!=null&&Fe("scroll",e);break;case"onScrollEnd":i!=null&&Fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=ws(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":Fe("beforetoggle",e),Fe("toggle",e),ys(e,"popover",i);break;case"xlinkActuate":ca(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ca(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ca(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ca(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ca(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ca(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ca(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ca(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ca(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ys(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=nb.get(a)||a,ys(e,a,i))}}function $c(e,n,a,i,r,c){switch(a){case"style":mu(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Ri(e,i):(typeof i=="number"||typeof i=="bigint")&&Ri(e,""+i);break;case"onScroll":i!=null&&Fe("scroll",e);break;case"onScrollEnd":i!=null&&Fe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!iu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),n=a.slice(2,r?a.length-7:void 0),c=e[St]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,r),typeof i=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,i,r);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):ys(e,a,i)}}}function ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",e),Fe("load",e);var i=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:pt(e,n,c,p,a,null)}}r&&pt(e,n,"srcSet",a.srcSet,a,null),i&&pt(e,n,"src",a.src,a,null);return;case"input":Fe("invalid",e);var x=c=p=r=null,E=null,Z=null;for(i in a)if(a.hasOwnProperty(i)){var te=a[i];if(te!=null)switch(i){case"name":r=te;break;case"type":p=te;break;case"checked":E=te;break;case"defaultChecked":Z=te;break;case"value":c=te;break;case"defaultValue":x=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(d(137,n));break;default:pt(e,n,i,te,a,null)}}cu(e,c,x,E,Z,p,r,!1);return;case"select":Fe("invalid",e),i=p=c=null;for(r in a)if(a.hasOwnProperty(r)&&(x=a[r],x!=null))switch(r){case"value":c=x;break;case"defaultValue":p=x;break;case"multiple":i=x;default:pt(e,n,r,x,a,null)}n=c,a=p,e.multiple=!!i,n!=null?Ui(e,!!i,n,!1):a!=null&&Ui(e,!!i,a,!0);return;case"textarea":Fe("invalid",e),c=r=i=null;for(p in a)if(a.hasOwnProperty(p)&&(x=a[p],x!=null))switch(p){case"value":i=x;break;case"defaultValue":r=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(91));break;default:pt(e,n,p,x,a,null)}uu(e,i,r,c);return;case"option":for(E in a)if(a.hasOwnProperty(E)&&(i=a[E],i!=null))switch(E){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:pt(e,n,E,i,a,null)}return;case"dialog":Fe("beforetoggle",e),Fe("toggle",e),Fe("cancel",e),Fe("close",e);break;case"iframe":case"object":Fe("load",e);break;case"video":case"audio":for(i=0;i<Jl.length;i++)Fe(Jl[i],e);break;case"image":Fe("error",e),Fe("load",e);break;case"details":Fe("toggle",e);break;case"embed":case"source":case"link":Fe("error",e),Fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(i=a[Z],i!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:pt(e,n,Z,i,a,null)}return;default:if(ar(n)){for(te in a)a.hasOwnProperty(te)&&(i=a[te],i!==void 0&&$c(e,n,te,i,a,void 0));return}}for(x in a)a.hasOwnProperty(x)&&(i=a[x],i!=null&&pt(e,n,x,i,a,null))}function Tg(e,n,a,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,x=null,E=null,Z=null,te=null;for(J in a){var ce=a[J];if(a.hasOwnProperty(J)&&ce!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":E=ce;default:i.hasOwnProperty(J)||pt(e,n,J,null,i,ce)}}for(var K in i){var J=i[K];if(ce=a[K],i.hasOwnProperty(K)&&(J!=null||ce!=null))switch(K){case"type":c=J;break;case"name":r=J;break;case"checked":Z=J;break;case"defaultChecked":te=J;break;case"value":p=J;break;case"defaultValue":x=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(d(137,n));break;default:J!==ce&&pt(e,n,K,J,i,ce)}}tr(e,p,x,E,Z,te,c,r);return;case"select":J=p=x=K=null;for(c in a)if(E=a[c],a.hasOwnProperty(c)&&E!=null)switch(c){case"value":break;case"multiple":J=E;default:i.hasOwnProperty(c)||pt(e,n,c,null,i,E)}for(r in i)if(c=i[r],E=a[r],i.hasOwnProperty(r)&&(c!=null||E!=null))switch(r){case"value":K=c;break;case"defaultValue":x=c;break;case"multiple":p=c;default:c!==E&&pt(e,n,r,c,i,E)}n=x,a=p,i=J,K!=null?Ui(e,!!a,K,!1):!!i!=!!a&&(n!=null?Ui(e,!!a,n,!0):Ui(e,!!a,a?[]:"",!1));return;case"textarea":J=K=null;for(x in a)if(r=a[x],a.hasOwnProperty(x)&&r!=null&&!i.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:pt(e,n,x,null,i,r)}for(p in i)if(r=i[p],c=a[p],i.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":K=r;break;case"defaultValue":J=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&pt(e,n,p,r,i,c)}du(e,K,J);return;case"option":for(var ke in a)if(K=a[ke],a.hasOwnProperty(ke)&&K!=null&&!i.hasOwnProperty(ke))switch(ke){case"selected":e.selected=!1;break;default:pt(e,n,ke,null,i,K)}for(E in i)if(K=i[E],J=a[E],i.hasOwnProperty(E)&&K!==J&&(K!=null||J!=null))switch(E){case"selected":e.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:pt(e,n,E,K,i,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Oe in a)K=a[Oe],a.hasOwnProperty(Oe)&&K!=null&&!i.hasOwnProperty(Oe)&&pt(e,n,Oe,null,i,K);for(Z in i)if(K=i[Z],J=a[Z],i.hasOwnProperty(Z)&&K!==J&&(K!=null||J!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(d(137,n));break;default:pt(e,n,Z,K,i,J)}return;default:if(ar(n)){for(var mt in a)K=a[mt],a.hasOwnProperty(mt)&&K!==void 0&&!i.hasOwnProperty(mt)&&$c(e,n,mt,void 0,i,K);for(te in i)K=i[te],J=a[te],!i.hasOwnProperty(te)||K===J||K===void 0&&J===void 0||$c(e,n,te,K,i,J);return}}for(var q in a)K=a[q],a.hasOwnProperty(q)&&K!=null&&!i.hasOwnProperty(q)&&pt(e,n,q,null,i,K);for(ce in i)K=i[ce],J=a[ce],!i.hasOwnProperty(ce)||K===J||K==null&&J==null||pt(e,n,ce,K,i,J)}function hf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Eg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var r=a[i],c=r.transferSize,p=r.initiatorType,x=r.duration;if(c&&x&&hf(p)){for(p=0,x=r.responseEnd,i+=1;i<a.length;i++){var E=a[i],Z=E.startTime;if(Z>x)break;var te=E.transferSize,ce=E.initiatorType;te&&hf(ce)&&(E=E.responseEnd,p+=te*(E<x?1:(x-Z)/(E-Z)))}if(--i,n+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qc=null,Xc=null;function go(e){return e.nodeType===9?e:e.ownerDocument}function xf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bf(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Zc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kc=null;function Mg(){var e=window.event;return e&&e.type==="popstate"?e===Kc?!1:(Kc=e,!0):(Kc=null,!1)}var gf=typeof setTimeout=="function"?setTimeout:void 0,Ag=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,Dg=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(e){return yf.resolve(null).then(e).catch(Og)}:gf;function Og(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function vf(e,n){var a=n,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(r),ml(n);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Wl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Wl(a);for(var c=a.firstChild;c;){var p=c.nextSibling,x=c.nodeName;c[tt]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&Wl(e.ownerDocument.body);a=r}while(a);ml(n)}function jf(e,n){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Fc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Fc(a),xn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ug(e,n,a,i){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[tt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=$n(e.nextSibling),e===null)break}return null}function Rg(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=$n(e.nextSibling),e===null))return null;return e}function wf(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=$n(e.nextSibling),e===null))return null;return e}function Vc(e){return e.data==="$?"||e.data==="$~"}function Jc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Hg(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var i=function(){n(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function $n(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Pc=null;function _f(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return $n(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Nf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Sf(e,n,a){switch(n=go(a),e){case"html":if(e=n.documentElement,!e)throw Error(d(452));return e;case"head":if(e=n.head,!e)throw Error(d(453));return e;case"body":if(e=n.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Wl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);xn(e)}var Qn=new Map,kf=new Set;function yo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ka=V.d;V.d={f:Lg,r:qg,D:Bg,C:Gg,L:Yg,m:$g,X:Xg,S:Qg,M:Zg};function Lg(){var e=ka.f(),n=co();return e||n}function qg(e){var n=ea(e);n!==null&&n.tag===5&&n.type==="form"?Yp(n):ka.r(e)}var dl=typeof document>"u"?null:document;function Cf(e,n,a){var i=dl;if(i&&typeof n=="string"&&n){var r=Rn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),kf.has(r)||(kf.add(r),e={rel:e,crossOrigin:a,href:n},i.querySelector(r)===null&&(n=i.createElement("link"),ln(n,"link",e),Pt(n),i.head.appendChild(n)))}}function Bg(e){ka.D(e),Cf("dns-prefetch",e,null)}function Gg(e,n){ka.C(e,n),Cf("preconnect",e,n)}function Yg(e,n,a){ka.L(e,n,a);var i=dl;if(i&&e&&n){var r='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Rn(a.imageSizes)+'"]')):r+='[href="'+Rn(e)+'"]';var c=r;switch(n){case"style":c=ul(e);break;case"script":c=pl(e)}Qn.has(c)||(e=w({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Qn.set(c,e),i.querySelector(r)!==null||n==="style"&&i.querySelector(Il(c))||n==="script"&&i.querySelector(es(c))||(n=i.createElement("link"),ln(n,"link",e),Pt(n),i.head.appendChild(n)))}}function $g(e,n){ka.m(e,n);var a=dl;if(a&&e){var i=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+Rn(i)+'"][href="'+Rn(e)+'"]',c=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=pl(e)}if(!Qn.has(c)&&(e=w({rel:"modulepreload",href:e},n),Qn.set(c,e),a.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(es(c)))return}i=a.createElement("link"),ln(i,"link",e),Pt(i),a.head.appendChild(i)}}}function Qg(e,n,a){ka.S(e,n,a);var i=dl;if(i&&e){var r=Oa(i).hoistableStyles,c=ul(e);n=n||"default";var p=r.get(c);if(!p){var x={loading:0,preload:null};if(p=i.querySelector(Il(c)))x.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Qn.get(c))&&Wc(e,a);var E=p=i.createElement("link");Pt(E),ln(E,"link",e),E._p=new Promise(function(Z,te){E.onload=Z,E.onerror=te}),E.addEventListener("load",function(){x.loading|=1}),E.addEventListener("error",function(){x.loading|=2}),x.loading|=4,vo(p,n,i)}p={type:"stylesheet",instance:p,count:1,state:x},r.set(c,p)}}}function Xg(e,n){ka.X(e,n);var a=dl;if(a&&e){var i=Oa(a).hoistableScripts,r=pl(e),c=i.get(r);c||(c=a.querySelector(es(r)),c||(e=w({src:e,async:!0},n),(n=Qn.get(r))&&Ic(e,n),c=a.createElement("script"),Pt(c),ln(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function Zg(e,n){ka.M(e,n);var a=dl;if(a&&e){var i=Oa(a).hoistableScripts,r=pl(e),c=i.get(r);c||(c=a.querySelector(es(r)),c||(e=w({src:e,async:!0,type:"module"},n),(n=Qn.get(r))&&Ic(e,n),c=a.createElement("script"),Pt(c),ln(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function zf(e,n,a,i){var r=(r=Me.current)?yo(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ul(a.href),a=Oa(r).hoistableStyles,i=a.get(n),i||(i={type:"style",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ul(a.href);var c=Oa(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(Il(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Qn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qn.set(e,a),c||Kg(r,e,a,p.state))),n&&i===null)throw Error(d(528,""));return p}if(n&&i!==null)throw Error(d(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=pl(a),a=Oa(r).hoistableScripts,i=a.get(n),i||(i={type:"script",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ul(e){return'href="'+Rn(e)+'"'}function Il(e){return'link[rel="stylesheet"]['+e+"]"}function Tf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Kg(e,n,a,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),ln(n,"link",a),Pt(n),e.head.appendChild(n))}function pl(e){return'[src="'+Rn(e)+'"]'}function es(e){return"script[async]"+e}function Ef(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(i)return n.instance=i,Pt(i),i;var r=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Pt(i),ln(i,"style",r),vo(i,a.precedence,e),n.instance=i;case"stylesheet":r=ul(a.href);var c=e.querySelector(Il(r));if(c)return n.state.loading|=4,n.instance=c,Pt(c),c;i=Tf(a),(r=Qn.get(r))&&Wc(i,r),c=(e.ownerDocument||e).createElement("link"),Pt(c);var p=c;return p._p=new Promise(function(x,E){p.onload=x,p.onerror=E}),ln(c,"link",i),n.state.loading|=4,vo(c,a.precedence,e),n.instance=c;case"script":return c=pl(a.src),(r=e.querySelector(es(c)))?(n.instance=r,Pt(r),r):(i=a,(r=Qn.get(c))&&(i=w({},a),Ic(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),Pt(r),ln(r,"link",i),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,vo(i,a.precedence,e));return n.instance}function vo(e,n,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,c=r,p=0;p<i.length;p++){var x=i[p];if(x.dataset.precedence===n)c=x;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Wc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ic(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jo=null;function Mf(e,n,a){if(jo===null){var i=new Map,r=jo=new Map;r.set(a,i)}else r=jo,i=r.get(a),i||(i=new Map,r.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var c=a[r];if(!(c[tt]||c[At]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=e+p;var x=i.get(p);x?x.push(c):i.set(p,[c])}}return i}function Af(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Fg(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Df(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Vg(e,n,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=ul(i.href),c=n.querySelector(Il(r));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=wo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,Pt(c);return}c=n.ownerDocument||n,i=Tf(i),(r=Qn.get(r))&&Wc(i,r),c=c.createElement("link"),Pt(c);var p=c;p._p=new Promise(function(x,E){p.onload=x,p.onerror=E}),ln(c,"link",i),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ed=0;function Jg(e,n){return e.stylesheets&&e.count===0&&No(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&No(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&ed===0&&(ed=62500*Eg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&No(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>ed?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function wo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)No(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _o=null;function No(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_o=new Map,n.forEach(Pg,e),_o=null,wo.call(e))}function Pg(e,n){if(!(n.state.loading&4)){var a=_o.get(e);if(a)var i=a.get(null);else{a=new Map,_o.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),i=p)}i&&a.set(null,i)}r=n.instance,p=r.getAttribute("data-precedence"),c=a.get(p)||i,c===i&&a.set(null,r),a.set(p,r),this.count++,i=wo.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var ts={$$typeof:L,Provider:null,Consumer:null,_currentValue:T,_currentValue2:T,_threadCount:0};function Wg(e,n,a,i,r,c,p,x,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Of(e,n,a,i,r,c,p,x,E,Z,te,ce){return e=new Wg(e,n,a,p,E,Z,te,ce,x),n=1,c===!0&&(n|=24),c=Nn(3,null,null,n),e.current=c,c.stateNode=e,n=Dr(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:i,isDehydrated:a,cache:n},Hr(c),e}function Uf(e){return e?(e=$i,e):$i}function Rf(e,n,a,i,r,c){r=Uf(r),i.context===null?i.context=r:i.pendingContext=r,i=Ga(n),i.payload={element:a},c=c===void 0?null:c,c!==null&&(i.callback=c),a=Ya(e,i,n),a!==null&&(wn(a,e,n),Dl(a,e,n))}function Hf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function td(e,n){Hf(e,n),(e=e.alternate)&&Hf(e,n)}function Lf(e){if(e.tag===13||e.tag===31){var n=gi(e,67108864);n!==null&&wn(n,e,67108864),td(e,67108864)}}function qf(e){if(e.tag===13||e.tag===31){var n=Tn();n=gt(n);var a=gi(e,n);a!==null&&wn(a,e,n),td(e,n)}}var So=!0;function Ig(e,n,a,i){var r=z.T;z.T=null;var c=V.p;try{V.p=2,nd(e,n,a,i)}finally{V.p=c,z.T=r}}function ey(e,n,a,i){var r=z.T;z.T=null;var c=V.p;try{V.p=8,nd(e,n,a,i)}finally{V.p=c,z.T=r}}function nd(e,n,a,i){if(So){var r=ad(i);if(r===null)Yc(e,n,i,ko,a),Gf(e,i);else if(ny(r,e,n,a,i))i.stopPropagation();else if(Gf(e,i),n&4&&-1<ty.indexOf(e)){for(;r!==null;){var c=ea(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=pn(c.pendingLanes);if(p!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;p;){var E=1<<31-nt(p);x.entanglements[1]|=E,p&=~E}ia(c),(st&6)===0&&(oo=rt()+500,Vl(0))}}break;case 31:case 13:x=gi(c,2),x!==null&&wn(x,c,2),co(),td(c,2)}if(c=ad(i),c===null&&Yc(e,n,i,ko,a),c===r)break;r=c}r!==null&&i.stopPropagation()}else Yc(e,n,i,null,a)}}function ad(e){return e=lr(e),id(e)}var ko=null;function id(e){if(ko=null,e=qt(e),e!==null){var n=m(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=C(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ko=e,null}function Bf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(on()){case Dn:return 2;case hn:return 8;case F:case ze:return 32;case we:return 268435456;default:return 32}default:return 32}}var ld=!1,Ia=null,ei=null,ti=null,ns=new Map,as=new Map,ni=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gf(e,n){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":ns.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(n.pointerId)}}function is(e,n,a,i,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:i,nativeEvent:c,targetContainers:[r]},n!==null&&(n=ea(n),n!==null&&Lf(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function ny(e,n,a,i,r){switch(n){case"focusin":return Ia=is(Ia,e,n,a,i,r),!0;case"dragenter":return ei=is(ei,e,n,a,i,r),!0;case"mouseover":return ti=is(ti,e,n,a,i,r),!0;case"pointerover":var c=r.pointerId;return ns.set(c,is(ns.get(c)||null,e,n,a,i,r)),!0;case"gotpointercapture":return c=r.pointerId,as.set(c,is(as.get(c)||null,e,n,a,i,r)),!0}return!1}function Yf(e){var n=qt(e.target);if(n!==null){var a=m(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,wt(e.priority,function(){qf(a)});return}}else if(n===31){if(n=C(a),n!==null){e.blockedOn=n,wt(e.priority,function(){qf(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ad(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);ir=i,a.target.dispatchEvent(i),ir=null}else return n=ea(a),n!==null&&Lf(n),e.blockedOn=a,!1;n.shift()}return!0}function $f(e,n,a){Co(e)&&a.delete(n)}function ay(){ld=!1,Ia!==null&&Co(Ia)&&(Ia=null),ei!==null&&Co(ei)&&(ei=null),ti!==null&&Co(ti)&&(ti=null),ns.forEach($f),as.forEach($f)}function zo(e,n){e.blockedOn===n&&(e.blockedOn=null,ld||(ld=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ay)))}var To=null;function Qf(e){To!==e&&(To=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){To===e&&(To=null);for(var n=0;n<e.length;n+=3){var a=e[n],i=e[n+1],r=e[n+2];if(typeof i!="function"){if(id(i||a)===null)continue;break}var c=ea(a);c!==null&&(e.splice(n,3),n-=3,ac(c,{pending:!0,data:r,method:a.method,action:i},i,r))}}))}function ml(e){function n(E){return zo(E,e)}Ia!==null&&zo(Ia,e),ei!==null&&zo(ei,e),ti!==null&&zo(ti,e),ns.forEach(n),as.forEach(n);for(var a=0;a<ni.length;a++){var i=ni[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ni.length&&(a=ni[0],a.blockedOn===null);)Yf(a),a.blockedOn===null&&ni.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var r=a[i],c=a[i+1],p=r[St]||null;if(typeof c=="function")p||Qf(a);else if(p){var x=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[St]||null)x=p.formAction;else if(id(r)!==null)continue}else x=p.action;typeof x=="function"?a[i+1]=x:(a.splice(i,3),i-=3),Qf(a)}}}function Xf(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function sd(e){this._internalRoot=e}Eo.prototype.render=sd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(d(409));var a=n.current,i=Tn();Rf(a,i,e,n,null,null)},Eo.prototype.unmount=sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Rf(e.current,2,null,e,null,null),co(),n[Da]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var n=oa();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ni.length&&n!==0&&n<ni[a].priority;a++);ni.splice(a,0,e),a===0&&Yf(e)}};var Zf=l.version;if(Zf!=="19.2.6")throw Error(d(527,Zf,"19.2.6"));V.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=g(n),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var iy={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{He=Mo.inject(iy),qe=Mo}catch{}}return ss.createRoot=function(e,n){if(!u(e))throw Error(d(299));var a=!1,i="",r=Wp,c=Ip,p=em;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Of(e,1,!1,null,null,a,i,null,r,c,p,Xf),e[Da]=n.current,Gc(e),new sd(n)},ss.hydrateRoot=function(e,n,a){if(!u(e))throw Error(d(299));var i=!1,r="",c=Wp,p=Ip,x=em,E=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.formState!==void 0&&(E=a.formState)),n=Of(e,1,!0,n,a??null,i,r,E,c,p,x,Xf),n.context=Uf(null),a=n.current,i=Tn(),i=gt(i),r=Ga(i),r.callback=null,Ya(a,r,i),a=i,n.current.lanes=a,$e(n,a),ia(n),e[Da]=n.current,Gc(e),new Eo(n)},ss.version="19.2.6",ss}var nh;function by(){if(nh)return cd.exports;nh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),cd.exports=xy(),cd.exports}var gy=by(),cx=rx();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},ms.apply(this,arguments)}var ri;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(ri||(ri={}));const ah="popstate";function yy(s){s===void 0&&(s={});function l(u,m){let{pathname:h="/",search:C="",hash:y=""}=Di(u.location.hash.substr(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Ed("",{pathname:h,search:C,hash:y},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function o(u,m){let h=u.document.querySelector("base"),C="";if(h&&h.getAttribute("href")){let y=u.location.href,g=y.indexOf("#");C=g===-1?y:y.slice(0,g)}return C+"#"+(typeof m=="string"?m:$o(m))}function d(u,m){Po(u.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(m)+")")}return jy(l,o,d,s)}function Ut(s,l){if(s===!1||s===null||typeof s>"u")throw new Error(l)}function Po(s,l){if(!s){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function vy(){return Math.random().toString(36).substr(2,8)}function ih(s,l){return{usr:s.state,key:s.key,idx:l}}function Ed(s,l,o,d){return o===void 0&&(o=null),ms({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof l=="string"?Di(l):l,{state:o,key:l&&l.key||d||vy()})}function $o(s){let{pathname:l="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(l+=d.charAt(0)==="#"?d:"#"+d),l}function Di(s){let l={};if(s){let o=s.indexOf("#");o>=0&&(l.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(l.search=s.substr(d),s=s.substr(0,d)),s&&(l.pathname=s)}return l}function jy(s,l,o,d){d===void 0&&(d={});let{window:u=document.defaultView,v5Compat:m=!1}=d,h=u.history,C=ri.Pop,y=null,g=j();g==null&&(g=0,h.replaceState(ms({},h.state,{idx:g}),""));function j(){return(h.state||{idx:null}).idx}function w(){C=ri.Pop;let A=j(),Q=A==null?null:A-g;g=A,y&&y({action:C,location:$.location,delta:Q})}function S(A,Q){C=ri.Push;let R=Ed($.location,A,Q);o&&o(R,A),g=j()+1;let L=ih(R,g),ae=$.createHref(R);try{h.pushState(L,"",ae)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;u.location.assign(ae)}m&&y&&y({action:C,location:$.location,delta:1})}function B(A,Q){C=ri.Replace;let R=Ed($.location,A,Q);o&&o(R,A),g=j();let L=ih(R,g),ae=$.createHref(R);h.replaceState(L,"",ae),m&&y&&y({action:C,location:$.location,delta:0})}function I(A){let Q=u.location.origin!=="null"?u.location.origin:u.location.href,R=typeof A=="string"?A:$o(A);return R=R.replace(/ $/,"%20"),Ut(Q,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,Q)}let $={get action(){return C},get location(){return s(u,h)},listen(A){if(y)throw new Error("A history only accepts one active listener");return u.addEventListener(ah,w),y=A,()=>{u.removeEventListener(ah,w),y=null}},createHref(A){return l(u,A)},createURL:I,encodeLocation(A){let Q=I(A);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:S,replace:B,go(A){return h.go(A)}};return $}var lh;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(lh||(lh={}));function wy(s,l,o){return o===void 0&&(o="/"),_y(s,l,o)}function _y(s,l,o,d){let u=typeof l=="string"?Di(l):l,m=Xd(u.pathname||"/",o);if(m==null)return null;let h=dx(s);Ny(h);let C=null;for(let y=0;C==null&&y<h.length;++y){let g=Ry(m);C=Dy(h[y],g)}return C}function dx(s,l,o,d){l===void 0&&(l=[]),o===void 0&&(o=[]),d===void 0&&(d="");let u=(m,h,C)=>{let y={relativePath:C===void 0?m.path||"":C,caseSensitive:m.caseSensitive===!0,childrenIndex:h,route:m};y.relativePath.startsWith("/")&&(Ut(y.relativePath.startsWith(d),'Absolute route path "'+y.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),y.relativePath=y.relativePath.slice(d.length));let g=ci([d,y.relativePath]),j=o.concat(y);m.children&&m.children.length>0&&(Ut(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),dx(m.children,l,j,g)),!(m.path==null&&!m.index)&&l.push({path:g,score:My(g,m.index),routesMeta:j})};return s.forEach((m,h)=>{var C;if(m.path===""||!((C=m.path)!=null&&C.includes("?")))u(m,h);else for(let y of ux(m.path))u(m,h,y)}),l}function ux(s){let l=s.split("/");if(l.length===0)return[];let[o,...d]=l,u=o.endsWith("?"),m=o.replace(/\?$/,"");if(d.length===0)return u?[m,""]:[m];let h=ux(d.join("/")),C=[];return C.push(...h.map(y=>y===""?m:[m,y].join("/"))),u&&C.push(...h),C.map(y=>s.startsWith("/")&&y===""?"/":y)}function Ny(s){s.sort((l,o)=>l.score!==o.score?o.score-l.score:Ay(l.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const Sy=/^:[\w-]+$/,ky=3,Cy=2,zy=1,Ty=10,Ey=-2,sh=s=>s==="*";function My(s,l){let o=s.split("/"),d=o.length;return o.some(sh)&&(d+=Ey),l&&(d+=Cy),o.filter(u=>!sh(u)).reduce((u,m)=>u+(Sy.test(m)?ky:m===""?zy:Ty),d)}function Ay(s,l){return s.length===l.length&&s.slice(0,-1).every((d,u)=>d===l[u])?s[s.length-1]-l[l.length-1]:0}function Dy(s,l,o){let{routesMeta:d}=s,u={},m="/",h=[];for(let C=0;C<d.length;++C){let y=d[C],g=C===d.length-1,j=m==="/"?l:l.slice(m.length)||"/",w=Oy({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},j),S=y.route;if(!w)return null;Object.assign(u,w.params),h.push({params:u,pathname:ci([m,w.pathname]),pathnameBase:Gy(ci([m,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(m=ci([m,w.pathnameBase]))}return h}function Oy(s,l){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=Uy(s.path,s.caseSensitive,s.end),u=l.match(o);if(!u)return null;let m=u[0],h=m.replace(/(.)\/+$/,"$1"),C=u.slice(1);return{params:d.reduce((g,j,w)=>{let{paramName:S,isOptional:B}=j;if(S==="*"){let $=C[w]||"";h=m.slice(0,m.length-$.length).replace(/(.)\/+$/,"$1")}const I=C[w];return B&&!I?g[S]=void 0:g[S]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:h,pattern:s}}function Uy(s,l,o){l===void 0&&(l=!1),o===void 0&&(o=!0),Po(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],u="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,C,y)=>(d.push({paramName:C,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),u+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":s!==""&&s!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,l?void 0:"i"),d]}function Ry(s){try{return s.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Po(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),s}}function Xd(s,l){if(l==="/")return s;if(!s.toLowerCase().startsWith(l.toLowerCase()))return null;let o=l.endsWith("/")?l.length-1:l.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const Hy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ly=s=>Hy.test(s);function qy(s,l){l===void 0&&(l="/");let{pathname:o,search:d="",hash:u=""}=typeof s=="string"?Di(s):s,m;if(o)if(Ly(o))m=o;else{if(o.includes("//")){let h=o;o=o.replace(/\/\/+/g,"/"),Po(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+o))}o.startsWith("/")?m=oh(o.substring(1),"/"):m=oh(o,l)}else m=l;return{pathname:m,search:Yy(d),hash:$y(u)}}function oh(s,l){let o=l.replace(/\/+$/,"").split("/");return s.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function md(s,l,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function By(s){return s.filter((l,o)=>o===0||l.route.path&&l.route.path.length>0)}function Zd(s,l){let o=By(s);return l?o.map((d,u)=>u===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function Kd(s,l,o,d){d===void 0&&(d=!1);let u;typeof s=="string"?u=Di(s):(u=ms({},s),Ut(!u.pathname||!u.pathname.includes("?"),md("?","pathname","search",u)),Ut(!u.pathname||!u.pathname.includes("#"),md("#","pathname","hash",u)),Ut(!u.search||!u.search.includes("#"),md("#","search","hash",u)));let m=s===""||u.pathname==="",h=m?"/":u.pathname,C;if(h==null)C=o;else{let w=l.length-1;if(!d&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),w-=1;u.pathname=S.join("/")}C=w>=0?l[w]:"/"}let y=qy(u,C),g=h&&h!=="/"&&h.endsWith("/"),j=(m||h===".")&&o.endsWith("/");return!y.pathname.endsWith("/")&&(g||j)&&(y.pathname+="/"),y}const ci=s=>s.join("/").replace(/\/\/+/g,"/"),Gy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Yy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,$y=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Qy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const px=["post","put","patch","delete"];new Set(px);const Xy=["get",...px];new Set(Xy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},fs.apply(this,arguments)}const Fd=f.createContext(null),Zy=f.createContext(null),ui=f.createContext(null),Wo=f.createContext(null),pi=f.createContext({outlet:null,matches:[],isDataRoute:!1}),mx=f.createContext(null);function Ky(s,l){let{relative:o}=l===void 0?{}:l;xl()||Ut(!1);let{basename:d,navigator:u}=f.useContext(ui),{hash:m,pathname:h,search:C}=hx(s,{relative:o}),y=h;return d!=="/"&&(y=h==="/"?d:ci([d,h])),u.createHref({pathname:y,search:C,hash:m})}function xl(){return f.useContext(Wo)!=null}function sa(){return xl()||Ut(!1),f.useContext(Wo).location}function fx(s){f.useContext(ui).static||f.useLayoutEffect(s)}function Vd(){let{isDataRoute:s}=f.useContext(pi);return s?sv():Fy()}function Fy(){xl()||Ut(!1);let s=f.useContext(Fd),{basename:l,future:o,navigator:d}=f.useContext(ui),{matches:u}=f.useContext(pi),{pathname:m}=sa(),h=JSON.stringify(Zd(u,o.v7_relativeSplatPath)),C=f.useRef(!1);return fx(()=>{C.current=!0}),f.useCallback(function(g,j){if(j===void 0&&(j={}),!C.current)return;if(typeof g=="number"){d.go(g);return}let w=Kd(g,JSON.parse(h),m,j.relative==="path");s==null&&l!=="/"&&(w.pathname=w.pathname==="/"?l:ci([l,w.pathname])),(j.replace?d.replace:d.push)(w,j.state,j)},[l,d,h,m,s])}function hx(s,l){let{relative:o}=l===void 0?{}:l,{future:d}=f.useContext(ui),{matches:u}=f.useContext(pi),{pathname:m}=sa(),h=JSON.stringify(Zd(u,d.v7_relativeSplatPath));return f.useMemo(()=>Kd(s,JSON.parse(h),m,o==="path"),[s,h,m,o])}function Vy(s,l){return Jy(s,l)}function Jy(s,l,o,d){xl()||Ut(!1);let{navigator:u}=f.useContext(ui),{matches:m}=f.useContext(pi),h=m[m.length-1],C=h?h.params:{};h&&h.pathname;let y=h?h.pathnameBase:"/";h&&h.route;let g=sa(),j;if(l){var w;let A=typeof l=="string"?Di(l):l;y==="/"||(w=A.pathname)!=null&&w.startsWith(y)||Ut(!1),j=A}else j=g;let S=j.pathname||"/",B=S;if(y!=="/"){let A=y.replace(/^\//,"").split("/");B="/"+S.replace(/^\//,"").split("/").slice(A.length).join("/")}let I=wy(s,{pathname:B}),$=tv(I&&I.map(A=>Object.assign({},A,{params:Object.assign({},C,A.params),pathname:ci([y,u.encodeLocation?u.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?y:ci([y,u.encodeLocation?u.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),m,o,d);return l&&$?f.createElement(Wo.Provider,{value:{location:fs({pathname:"/",search:"",hash:"",state:null,key:"default"},j),navigationType:ri.Pop}},$):$}function Py(){let s=lv(),l=Qy(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},l),o?f.createElement("pre",{style:u},o):null,null)}const Wy=f.createElement(Py,null);class Iy extends f.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){console.error("React Router caught the following error during render",l,o)}render(){return this.state.error!==void 0?f.createElement(pi.Provider,{value:this.props.routeContext},f.createElement(mx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ev(s){let{routeContext:l,match:o,children:d}=s,u=f.useContext(Fd);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),f.createElement(pi.Provider,{value:l},d)}function tv(s,l,o,d){var u;if(l===void 0&&(l=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var m;if(!o)return null;if(o.errors)s=o.matches;else if((m=d)!=null&&m.v7_partialHydration&&l.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let h=s,C=(u=o)==null?void 0:u.errors;if(C!=null){let j=h.findIndex(w=>w.route.id&&(C==null?void 0:C[w.route.id])!==void 0);j>=0||Ut(!1),h=h.slice(0,Math.min(h.length,j+1))}let y=!1,g=-1;if(o&&d&&d.v7_partialHydration)for(let j=0;j<h.length;j++){let w=h[j];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(g=j),w.route.id){let{loaderData:S,errors:B}=o,I=w.route.loader&&S[w.route.id]===void 0&&(!B||B[w.route.id]===void 0);if(w.route.lazy||I){y=!0,g>=0?h=h.slice(0,g+1):h=[h[0]];break}}}return h.reduceRight((j,w,S)=>{let B,I=!1,$=null,A=null;o&&(B=C&&w.route.id?C[w.route.id]:void 0,$=w.route.errorElement||Wy,y&&(g<0&&S===0?(ov("route-fallback"),I=!0,A=null):g===S&&(I=!0,A=w.route.hydrateFallbackElement||null)));let Q=l.concat(h.slice(0,S+1)),R=()=>{let L;return B?L=$:I?L=A:w.route.Component?L=f.createElement(w.route.Component,null):w.route.element?L=w.route.element:L=j,f.createElement(ev,{match:w,routeContext:{outlet:j,matches:Q,isDataRoute:o!=null},children:L})};return o&&(w.route.ErrorBoundary||w.route.errorElement||S===0)?f.createElement(Iy,{location:o.location,revalidation:o.revalidation,component:$,error:B,children:R(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):R()},null)}var xx=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(xx||{}),bx=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(bx||{});function nv(s){let l=f.useContext(Fd);return l||Ut(!1),l}function av(s){let l=f.useContext(Zy);return l||Ut(!1),l}function iv(s){let l=f.useContext(pi);return l||Ut(!1),l}function gx(s){let l=iv(),o=l.matches[l.matches.length-1];return o.route.id||Ut(!1),o.route.id}function lv(){var s;let l=f.useContext(mx),o=av(),d=gx();return l!==void 0?l:(s=o.errors)==null?void 0:s[d]}function sv(){let{router:s}=nv(xx.UseNavigateStable),l=gx(bx.UseNavigateStable),o=f.useRef(!1);return fx(()=>{o.current=!0}),f.useCallback(function(u,m){m===void 0&&(m={}),o.current&&(typeof u=="number"?s.navigate(u):s.navigate(u,fs({fromRouteId:l},m)))},[s,l])}const rh={};function ov(s,l,o){rh[s]||(rh[s]=!0)}function rv(s,l){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function ch(s){let{to:l,replace:o,state:d,relative:u}=s;xl()||Ut(!1);let{future:m,static:h}=f.useContext(ui),{matches:C}=f.useContext(pi),{pathname:y}=sa(),g=Vd(),j=Kd(l,Zd(C,m.v7_relativeSplatPath),y,u==="path"),w=JSON.stringify(j);return f.useEffect(()=>g(JSON.parse(w),{replace:o,state:d,relative:u}),[g,w,u,o,d]),null}function kt(s){Ut(!1)}function cv(s){let{basename:l="/",children:o=null,location:d,navigationType:u=ri.Pop,navigator:m,static:h=!1,future:C}=s;xl()&&Ut(!1);let y=l.replace(/^\/*/,"/"),g=f.useMemo(()=>({basename:y,navigator:m,static:h,future:fs({v7_relativeSplatPath:!1},C)}),[y,C,m,h]);typeof d=="string"&&(d=Di(d));let{pathname:j="/",search:w="",hash:S="",state:B=null,key:I="default"}=d,$=f.useMemo(()=>{let A=Xd(j,y);return A==null?null:{location:{pathname:A,search:w,hash:S,state:B,key:I},navigationType:u}},[y,j,w,S,B,I,u]);return $==null?null:f.createElement(ui.Provider,{value:g},f.createElement(Wo.Provider,{children:o,value:$}))}function dv(s){let{children:l,location:o}=s;return Vy(Md(l),o)}new Promise(()=>{});function Md(s,l){l===void 0&&(l=[]);let o=[];return f.Children.forEach(s,(d,u)=>{if(!f.isValidElement(d))return;let m=[...l,u];if(d.type===f.Fragment){o.push.apply(o,Md(d.props.children,m));return}d.type!==kt&&Ut(!1),!d.props.index||!d.props.children||Ut(!1);let h={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(h.children=Md(d.props.children,m)),o.push(h)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ad(){return Ad=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},Ad.apply(this,arguments)}function uv(s,l){if(s==null)return{};var o={},d=Object.keys(s),u,m;for(m=0;m<d.length;m++)u=d[m],!(l.indexOf(u)>=0)&&(o[u]=s[u]);return o}function pv(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function mv(s,l){return s.button===0&&(!l||l==="_self")&&!pv(s)}const fv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],hv="6";try{window.__reactRouterVersion=hv}catch{}const xv="startTransition",dh=py[xv];function bv(s){let{basename:l,children:o,future:d,window:u}=s,m=f.useRef();m.current==null&&(m.current=yy({window:u,v5Compat:!0}));let h=m.current,[C,y]=f.useState({action:h.action,location:h.location}),{v7_startTransition:g}=d||{},j=f.useCallback(w=>{g&&dh?dh(()=>y(w)):y(w)},[y,g]);return f.useLayoutEffect(()=>h.listen(j),[h,j]),f.useEffect(()=>rv(d),[d]),f.createElement(cv,{basename:l,children:o,location:C.location,navigationType:C.action,navigator:h,future:d})}const gv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vv=f.forwardRef(function(l,o){let{onClick:d,relative:u,reloadDocument:m,replace:h,state:C,target:y,to:g,preventScrollReset:j,viewTransition:w}=l,S=uv(l,fv),{basename:B}=f.useContext(ui),I,$=!1;if(typeof g=="string"&&yv.test(g)&&(I=g,gv))try{let L=new URL(window.location.href),ae=g.startsWith("//")?new URL(L.protocol+g):new URL(g),P=Xd(ae.pathname,B);ae.origin===L.origin&&P!=null?g=P+ae.search+ae.hash:$=!0}catch{}let A=Ky(g,{relative:u}),Q=jv(g,{replace:h,state:C,target:y,preventScrollReset:j,relative:u,viewTransition:w});function R(L){d&&d(L),L.defaultPrevented||Q(L)}return f.createElement("a",Ad({},S,{href:I||A,onClick:$||m?d:R,ref:o,target:y}))});var uh;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(uh||(uh={}));var ph;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(ph||(ph={}));function jv(s,l){let{target:o,replace:d,state:u,preventScrollReset:m,relative:h,viewTransition:C}=l===void 0?{}:l,y=Vd(),g=sa(),j=hx(s,{relative:h});return f.useCallback(w=>{if(mv(w,o)){w.preventDefault();let S=d!==void 0?d:$o(g)===$o(j);y(s,{replace:S,state:u,preventScrollReset:m,relative:h,viewTransition:C})}},[g,y,j,d,u,o,s,m,h,C])}function Rt(){const s=Vd();return f.useMemo(()=>({push:l=>s(l),replace:l=>s(l,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function wv(){return sa().pathname}function _v({href:s,...l}){return t.jsx(vv,{to:s,...l})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yx=(...s)=>s.filter((l,o,d)=>!!l&&l.trim()!==""&&d.indexOf(l)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=f.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:u="",children:m,iconNode:h,...C},y)=>f.createElement("svg",{ref:y,...Sv,width:l,height:l,stroke:s,strokeWidth:d?Number(o)*24/Number(l):o,className:yx("lucide",u),...C},[...h.map(([g,j])=>f.createElement(g,j)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=(s,l)=>{const o=f.forwardRef(({className:d,...u},m)=>f.createElement(kv,{ref:m,iconNode:l,className:yx(`lucide-${Nv(s)}`,d),...u}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ve("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=ve("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ve("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=ve("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=ve("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ve("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ve("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=ve("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
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
 */const Aa=ve("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ve("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=ve("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=ve("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=ve("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ve("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=ve("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ve("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ve("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ve("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ve("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=ve("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ve("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=ve("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=ve("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=ve("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=ve("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
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
 */const bh=ve("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=ve("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=ve("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=ve("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=ve("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=ve("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=ve("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=ve("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=ve("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ve("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=ve("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=ve("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=ve("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=ve("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=ve("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=ve("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
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
 */const Jv=ve("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=ve("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=ve("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=ve("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=ve("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=ve("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=ve("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=ve("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=ve("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=ve("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=ve("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=ve("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=ve("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=ve("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=ve("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=ve("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=ve("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=ve("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=ve("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=ve("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=ve("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=ve("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=ve("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=ve("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=ve("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=ve("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=ve("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=ve("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=ve("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=ve("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),u0="/api/v3";var ox;const ge=typeof window<"u"&&((ox=window.settings)==null?void 0:ox.secure_path)||"ZicFree123",Yo="authorization";function p0(s){if(typeof window>"u"||typeof document>"u")return null;const l=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let u=o[d];for(;u.charAt(0)===" ";)u=u.substring(1,u.length);if(u.indexOf(l)===0)try{const m=u.substring(l.length,u.length),h=decodeURIComponent(m),C=JSON.parse(h);return C&&typeof C=="object"&&"value"in C?C.value:h}catch{try{return decodeURIComponent(u.substring(l.length,u.length))}catch{return u.substring(l.length,u.length)}}}return null}function m0(s,l,o=36500){if(typeof window>"u"||typeof document>"u")return;const u=JSON.stringify({site:"ZicNet",value:l}),m=window.location.protocol==="https:",h=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",C=new Date;C.setTime(C.getTime()+o*24*60*60*1e3);const y=`expires=${C.toUTCString()}`,g=h?"":`domain=${window.location.hostname};`;let j=`${s}=${encodeURIComponent(u)}; ${y}; ${g} path=/`;m&&(j+="; secure"),j+="; SameSite=Lax",document.cookie=j;try{window.localStorage.setItem(`cookie_${s}`,u)}catch{}}function f0(s){if(typeof window>"u"||typeof document>"u")return;const l=window.location.hostname,o=["",l,l.startsWith(".")?l:`.${l}`],d=["/","/dashboard","/user","/admin"];o.forEach(u=>{d.forEach(m=>{const h=u?` domain=${u};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${h} path=${m};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function Sx(){if(typeof window>"u")return null;let s=window.localStorage.getItem(Yo);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(Yo,s)}catch{}if(!s&&(s=p0("auth_data"),s))try{window.localStorage.setItem(Yo,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function h0(s,l){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${u0}${o}`,window.location.origin);return Object.entries(l??{}).forEach(([u,m])=>{m!==void 0&&d.searchParams.set(u,String(m))}),d.toString()}function Ht(){return!!Sx()}function x0(s){typeof window>"u"||(window.localStorage.setItem(Yo,s),window.localStorage.setItem("auth_data",s),m0("auth_data",s,36500))}function kx(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(u=>{window.localStorage.removeItem(u)}),["token","auth_data","authorization","vuex","user","auth"].forEach(u=>{window.sessionStorage.removeItem(u)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(u=>{o.forEach(m=>{document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${m};`}),document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,f0(u)})}async function xe(s,l={}){const o={},d=l.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),l.auth!==!1){const y=Sx();y&&(o.authorization=y)}const u=await fetch(h0(s,l.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(l.body??{}),cache:"no-store"}),h=(u.headers.get("content-type")||"").includes("application/json"),C=h?await u.json():await u.text();if(!u.ok){const y=typeof C=="object"&&C&&"message"in C?String(C.message):`Request failed with status ${u.status}`,g=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(y);throw(u.status===401||u.status===403&&!g)&&l.auth!==!1&&(kx(),window.location.hash="/login"),new Error(y)}if(!h&&typeof C=="string"&&(C.trim().startsWith("<!DOCTYPE html")||C.trim().startsWith("<html")||C.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return C}async function b0(s,l){return xe("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:l}})}async function g0(){const s=`/${ge}/stat`,[l,o,d,u,m,h]=await Promise.all([xe(`${s}/getOverride`),xe(`${s}/getOrder`),xe(`${s}/getServerTodayRank`),xe(`${s}/getServerLastRank`),xe(`${s}/getUserTodayRank`),xe(`${s}/getUserLastRank`)]);return{override:l.data,order:o.data,serverToday:d.data,serverYesterday:u.data,userToday:m.data,userYesterday:h.data}}async function Cx(){return(await xe(`/${ge}/config/fetch`)).data}async function zx(s){return xe(`/${ge}/config/save`,{method:"POST",body:s})}async function y0(){return(await xe(`/${ge}/config/getEmailTemplate`)).data}async function v0(){return(await xe(`/${ge}/plan/fetch`)).data.map(l=>({id:l.id,name:l.name}))}async function j0(){return xe(`/${ge}/config/testSendMail`,{method:"POST",body:{}})}async function w0(s){return xe(`/${ge}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function _0(){return(await xe(`/${ge}/payment/fetch`)).data}async function N0(){return(await xe(`/${ge}/payment/getPaymentMethods`)).data}async function jh(s,l){return(await xe(`/${ge}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:l}})).data}async function S0(s){return xe(`/${ge}/payment/save`,{method:"POST",body:s})}async function k0(s){return xe(`/${ge}/payment/show`,{method:"POST",body:{id:s}})}async function C0(s){return xe(`/${ge}/payment/drop`,{method:"POST",body:{id:s}})}async function z0(s){return xe(`/${ge}/payment/sort`,{method:"POST",body:{ids:s}})}async function T0(){return(await xe(`/${ge}/theme/getThemes`)).data}async function E0(s){return(await xe(`/${ge}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function M0(s,l){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(l))));return xe(`/${ge}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function bs(){return(await xe(`/${ge}/server/group/fetch`)).data}async function Tx(s){return xe(`/${ge}/server/group/save`,{method:"POST",body:s})}async function A0(s){return xe(`/${ge}/server/group/drop`,{method:"POST",body:{id:s}})}const Ex=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function Mx(){return(await xe(`/${ge}/server/route/fetch`)).data}async function D0(s){return xe(`/${ge}/server/route/save`,{method:"POST",body:s})}async function O0(s){return xe(`/${ge}/server/route/drop`,{method:"POST",body:{id:s}})}async function mi(){return(await xe(`/${ge}/plan/fetch`)).data}async function U0(s){return xe(`/${ge}/plan/save`,{method:"POST",body:s})}async function R0(s){return xe(`/${ge}/plan/drop`,{method:"POST",body:{id:s}})}async function fd(s,l){return xe(`/${ge}/plan/update`,{method:"POST",body:{id:s,...l}})}async function wh(s){return xe(`/${ge}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function H0(s={}){const l=new URLSearchParams;return l.set("current",String(s.current??1)),l.set("pageSize",String(s.pageSize??15)),s.is_commission&&l.set("is_commission","1"),s.filter&&s.filter.forEach((d,u)=>{l.set(`filter[${u}][key]`,d.key),l.set(`filter[${u}][condition]`,d.condition),l.set(`filter[${u}][value]`,d.value)}),await xe(`/${ge}/order/fetch?${l.toString()}`)}async function L0(s){return xe(`/${ge}/order/paid`,{method:"POST",body:{trade_no:s}})}async function q0(s){return xe(`/${ge}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function Wd(s){return xe(`/${ge}/order/assign`,{method:"POST",body:s})}async function B0(s,l){return xe(`/${ge}/order/update`,{method:"POST",body:{trade_no:s,commission_status:l}})}async function G0(s){return xe(`/${ge}/order/detail`,{method:"POST",body:{id:s}})}async function Ax(s=1,l=15){return xe(`/${ge}/coupon/fetch?current=${s}&pageSize=${l}`)}async function Y0(s){return xe(`/${ge}/coupon/generate`,{method:"POST",body:s})}async function $0(s){return xe(`/${ge}/coupon/drop`,{method:"POST",body:{id:s}})}async function Q0(s){return xe(`/${ge}/coupon/show`,{method:"POST",body:{id:s}})}async function X0(s=1,l=15){return xe(`/${ge}/giftcard/fetch?current=${s}&pageSize=${l}`)}async function Z0(s){return xe(`/${ge}/giftcard/generate`,{method:"POST",body:s})}async function K0(s){return xe(`/${ge}/giftcard/drop`,{method:"POST",body:{id:s}})}async function Ld(s=1,l=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),o&&o.forEach((u,m)=>{d.set(`filter[${m}][key]`,u.key),d.set(`filter[${m}][condition]`,u.condition),d.set(`filter[${m}][value]`,u.value)}),xe(`/${ge}/user/fetch?${d.toString()}`)}async function F0(s){return xe(`/${ge}/user/update`,{method:"POST",body:s})}async function Dx(s){return xe(`/${ge}/user/getUserInfoById`,{params:{id:s}})}async function V0(s){return xe(`/${ge}/user/delUser`,{method:"POST",body:{id:s}})}async function J0(s){return xe(`/${ge}/user/generate`,{method:"POST",body:s})}async function P0(s){return xe(`/${ge}/user/resetSecret`,{method:"POST",body:{id:s}})}async function W0(s=1,l=15,o,d=!1){const u=new URLSearchParams;return u.set("current",String(s)),u.set("pageSize",String(l)),d&&u.set("include_subscribe_url","1"),o==null||o.forEach((m,h)=>{u.set(`filter[${h}][key]`,m.key),u.set(`filter[${h}][condition]`,m.condition),u.set(`filter[${h}][value]`,m.value)}),xe(`/${ge}/subscription/fetch?${u.toString()}`)}async function I0(s){return xe(`/${ge}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function e1(s){return xe(`/${ge}/subscription/update`,{method:"POST",body:s})}async function t1(s){return xe(`/${ge}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function Ox(s=1,l=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),o==null||o.forEach((u,m)=>{d.set(`filter[${m}][key]`,u.key),d.set(`filter[${m}][condition]`,u.condition),d.set(`filter[${m}][value]`,u.value)}),xe(`/${ge}/device/fetch?${d.toString()}`)}async function Ux(s){return xe(`/${ge}/device/drop`,{method:"POST",body:{id:s}})}async function Rx(s){return xe(`/${ge}/device/ban`,{method:"POST",body:{id:s}})}async function n1(s){return xe(`/${ge}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function a1(s,l=1,o=10){return xe(`/${ge}/stat/getStatUser`,{params:{user_id:s,current:l,pageSize:o}})}async function i1(){return(await xe(`/${ge}/notice/fetch`)).data}async function l1(s){return xe(`/${ge}/notice/save`,{method:"POST",body:s})}async function s1(s){return xe(`/${ge}/notice/drop`,{method:"POST",body:{id:s}})}async function o1(s){return xe(`/${ge}/notice/show`,{method:"POST",body:{id:s}})}async function r1(){return(await xe(`/${ge}/ticket/fetch`)).data}async function _h(s){return(await xe(`/${ge}/ticket/fetch`,{params:{id:s}})).data}async function c1(s,l){return xe(`/${ge}/ticket/reply`,{method:"POST",body:{id:s,message:l}})}async function d1(s){return xe(`/${ge}/ticket/close`,{method:"POST",body:{id:s}})}async function u1(){return(await xe(`/${ge}/knowledge/fetch`)).data}async function p1(s){return(await xe(`/${ge}/knowledge/fetch`,{params:{id:s}})).data}async function m1(s){return xe(`/${ge}/knowledge/save`,{method:"POST",body:s})}async function f1(s){return xe(`/${ge}/knowledge/drop`,{method:"POST",body:{id:s}})}async function h1(s){return xe(`/${ge}/knowledge/show`,{method:"POST",body:{id:s}})}async function x1(){return(await xe(`/${ge}/webcon/fetch`)).data}async function b1(s){return xe(`/${ge}/webcon/save`,{method:"POST",body:s})}async function g1(s){return xe(`/${ge}/webcon/drop`,{method:"POST",body:{id:s}})}async function y1(s){return xe(`/${ge}/webcon/show`,{method:"POST",body:{id:s}})}async function v1(){return xe(`/${ge}/system/getSystemStatus`)}async function j1(){return(await xe(`/${ge}/system/getCoreLicenseStatus`)).data}async function w1(){return(await xe(`/${ge}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function _1(){return xe(`/${ge}/system/getQueueStats`)}async function N1(){return xe(`/${ge}/system/getQueueWorkload`)}async function S1(){return xe(`/${ge}/system/getSystemLog`)}async function Nh(){return xe(`/${ge}/server/manage/getNodes`)}async function k1(s,l){return xe(`/${ge}/server/${s}/save`,{method:"POST",body:l})}async function C1(s,l){return xe(`/${ge}/server/${s}/drop`,{method:"POST",body:{id:l}})}async function z1(s,l,o){return xe(`/${ge}/server/${s}/update`,{method:"POST",body:{id:l,show:o}})}async function T1(s,l){return xe(`/${ge}/server/${s}/copy`,{method:"POST",body:{id:l}})}async function E1(s){return xe(`/${ge}/server/manage/sort`,{method:"POST",body:s})}const Id=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],Hx="admin-locale",qd="vi-VN",M1="/assets/adminzic",Lx=f.createContext(null);function A1(){if(typeof window>"u")return qd;const s=localStorage.getItem(Hx);return s&&Id.some(l=>l.code===s)?s:qd}function D1(s,l){return l?Object.entries(l).reduce((o,[d,u])=>o.replaceAll(`{${d}}`,String(u)),s):s}function O1(s){return new Promise((l,o)=>{var h;if(typeof window>"u"){l({});return}const d=(h=window.AdminNextI18n)==null?void 0:h[s];if(d){l(d);return}const u=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(u){u.addEventListener("load",()=>{var C;l(((C=window.AdminNextI18n)==null?void 0:C[s])??{})}),u.addEventListener("error",o);return}const m=document.createElement("script");m.src=`${M1}/i18n/${s}.js`,m.async=!0,m.dataset.adminNextLocale=s,m.onload=()=>{var C;return l(((C=window.AdminNextI18n)==null?void 0:C[s])??{})},m.onerror=o,document.head.appendChild(m)})}function U1({children:s}){const[l,o]=f.useState(qd),[d,u]=f.useState({}),[m,h]=f.useState(!0);f.useEffect(()=>{o(A1())},[]);const C=f.useCallback(j=>{o(j),typeof window<"u"&&localStorage.setItem(Hx,j)},[]);f.useEffect(()=>{let j=!0;return h(!0),O1(l).then(w=>{j&&u(w)}).finally(()=>{j&&h(!1)}),()=>{j=!1}},[l]);const y=f.useCallback((j,w)=>D1(d[j]??j,w),[d]),g=f.useMemo(()=>({locale:l,loading:m,setLocale:C,t:y}),[l,m,C,y]);return t.jsx(Lx.Provider,{value:g,children:s})}function Qe(){const s=f.useContext(Lx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function R1(){const s=Rt(),{t:l,locale:o,setLocale:d}=Qe(),[u,m]=f.useState(""),[h,C]=f.useState(""),[y,g]=f.useState(""),[j,w]=f.useState(!1),[S,B]=f.useState(!1),I=f.useRef(null);f.useEffect(()=>{function A(Q){I.current&&!I.current.contains(Q.target)&&B(!1)}return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]),f.useEffect(()=>{Ht()&&s.replace("/dashboard")},[s]);async function $(A){var Q,R,L,ae;A.preventDefault(),g(""),w(!0);try{const P=await b0(u,h),se=((Q=P.data)==null?void 0:Q.auth_data)??((R=P.data)==null?void 0:R.token),D=((L=P.data)==null?void 0:L.is_admin)===1||((ae=P.data)==null?void 0:ae.is_admin)===!0;if(!se||!D)throw new Error(l("login.adminRequired"));x0(se),s.replace("/dashboard")}catch(P){g(P instanceof Error?P.message:l("login.failed"))}finally{w(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:l("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:l("login.eyebrow")}),t.jsx("h1",{children:l("login.heading")}),t.jsx("span",{children:l("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":l("login.formLabel"),children:[t.jsxs("div",{ref:I,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.language"),onClick:()=>B(A=>!A),children:t.jsx(gs,{size:17})}),S?t.jsx("div",{className:"locale-menu",children:Id.map(A=>t.jsxs("button",{className:`locale-option ${o===A.code?"active":""}`,type:"button",onClick:()=>{d(A.code),B(!1)},children:[t.jsx("span",{className:"locale-flag",children:A.flag}),t.jsx("span",{children:A.label})]},A.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(e0,{size:18}),t.jsx("span",{children:l("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:l("login.title")}),t.jsx("p",{children:l("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:$,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(jx,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:A=>m(A.target.value),placeholder:l("login.emailPlaceholder"),required:!0,type:"text",value:u})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Xv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:A=>C(A.target.value),placeholder:l("login.passwordPlaceholder"),required:!0,type:"password",value:h})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,t.jsx("button",{className:"primary-button",disabled:j,type:"submit",children:l(j?"login.signingIn":"login.submit")})]})]})]})}function En(s){const l=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(l)}function la(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function H1(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const L1=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:qv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:a0},{href:"/config/payment",label:"nav.paymentConfig",icon:Ov},{href:"/config/theme",label:"nav.themeConfig",icon:o0}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:Pd},{href:"/server/group",label:"nav.groupManagement",icon:c0},{href:"/server/route",label:"nav.routeManagement",icon:n0}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:gh},{href:"/order",label:"nav.orders",icon:Qv},{href:"/coupon",label:"nav.coupons",icon:Bv},{href:"/giftcard",label:"nav.giftcards",icon:l0}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:Nx},{href:"/subscription",label:"nav.subscriptions",icon:gh},{href:"/device",label:"nav.devices",icon:i0},{href:"/webcon",label:"nav.webcon",icon:gs},{href:"/notice",label:"nav.notices",icon:cs},{href:"/ticket",label:"nav.tickets",icon:$v},{href:"/knowledge",label:"nav.knowledge",icon:Tv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:Ev}]}];function q1(){const[s,l]=f.useState("light");f.useEffect(()=>{const m=localStorage.getItem("admin-theme")??"light";l(m),document.documentElement.setAttribute("data-theme",m)},[]);const o=f.useCallback(u=>{l(u),localStorage.setItem("admin-theme",u),document.documentElement.setAttribute("data-theme",u)},[]),d=f.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function qx(s){return s?new Date(s*1e3):null}function B1(s,l){const o=qx(l);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function G1(s){const l=qx(s);return l?Math.ceil((l.getTime()-Date.now())/864e5):null}function Ft({children:s,title:l,subtitle:o}){const[d,u]=f.useState(!1),m=Rt(),h=wv(),{t:C,locale:y,setLocale:g}=Qe(),{theme:j,toggle:w}=q1(),[S,B]=f.useState(!1),I=f.useRef(null),[$,A]=f.useState(null),[Q,R]=f.useState(!1),L=f.useCallback(async(_=!1)=>{if(Ht()){R(_);try{A(_?await w1():await j1())}catch(H){A({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:C("license.unavailable"),error:H instanceof Error?H.message:C("license.unavailable")})}finally{R(!1)}}},[C]);f.useEffect(()=>{function _(H){I.current&&!I.current.contains(H.target)&&B(!1)}return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[]),f.useEffect(()=>{L(!1);const _=window.setInterval(()=>{L(!1)},6e4);return()=>window.clearInterval(_)},[L]);function ae(){kx(),m.replace("/login")}const P=($==null?void 0:$.license_expires_at)??($==null?void 0:$.expires_at),se=B1(y,P),D=typeof($==null?void 0:$.days_until_expiry)=="number"?$.days_until_expiry:G1(P),G=typeof D=="number"?D<=0?C("license.expiresToday"):C("license.daysLeft",{days:D}):null,ne=!!$&&$.available&&!$.requires_renewal,be=ne&&!!($!=null&&$.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>u(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:C("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:L1.map(_=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:C(_.label)}),_.items.map(H=>{const re=H.icon,Y=h===H.href;return t.jsxs(_v,{className:`nav-item ${Y?"active":""}`,href:H.href,onClick:()=>u(!1),children:[t.jsx(re,{size:17}),t.jsx("span",{children:C(H.label)})]},H.href)})]},_.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":C(d?"common.closeMenu":"common.openMenu"),onClick:()=>u(_=>!_),children:d?t.jsx(lt,{size:19}):t.jsx(Kv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:l}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[ne?t.jsxs("button",{className:`license-chip ${be?"warning":""}`,type:"button",disabled:Q,title:C("license.refresh"),onClick:()=>void L(!0),children:[t.jsx(hh,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:C("license.validUntil")}),t.jsx("strong",{children:se??C("license.unknownExpiry")})]}),G?t.jsx("small",{children:G}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:I,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":C("common.language"),onClick:()=>B(_=>!_),children:t.jsx(gs,{size:17})}),S?t.jsx("div",{className:"locale-menu",children:Id.map(_=>t.jsxs("button",{className:`locale-option ${y===_.code?"active":""}`,type:"button",onClick:()=>{g(_.code),B(!1)},children:[t.jsx("span",{className:"locale-flag",children:_.flag}),t.jsx("span",{children:_.label})]},_.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":j==="dark"?"Switch to light mode":"Switch to dark mode",onClick:w,children:j==="dark"?t.jsx(s0,{size:17}):t.jsx(Fv,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:ae,children:[t.jsx(Zv,{size:16}),t.jsx("span",{children:C("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[$!=null&&$.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(Rd,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:C("license.renewTitle")}),t.jsx("p",{children:C("license.renewBody")}),t.jsxs("small",{children:[C("license.currentStatus"),": ",$.status,$.error?` - ${$.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void L(!0),children:[t.jsx(Et,{size:16}),C(Q?"license.refreshing":"license.refresh")]})]}):null,be?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(hh,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:C("license.expiryWarningTitle")}),t.jsx("p",{children:C("license.expiryWarningBody",{date:se??C("license.unknownExpiry"),days:D??""})}),t.jsxs("small",{children:[C("license.currentStatus"),": ",$.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void L(!0),children:[t.jsx(Et,{size:16}),C(Q?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const Sh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function Bx(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function ds(s){return Number(s??0)}function kh(s){return ds(s)/100}function Ch(s){return`${la(Math.round(s))} VND`}function Gx(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function Y1(s){const l=new Date;return l.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const u=new Date(l);return u.setDate(l.getDate()-(s-d-1)),Gx(u)})}function zh(s,l){const o=s.get(l);if(o)return o;const d=Bx(l);return s.set(l,d),d}function $1(s){const l=s.toLowerCase();return l==="register_count"||l.includes("đăng")||l.includes("register")?"registrations":l==="order_count"?"orderCount":l==="paid_count"||l.includes("giao dịch thu")?"paidCount":l==="paid_total"||l.includes("tiền thu")?"paidAmount":l==="commission_count"||l.includes("giao dịch hoa hồng")?"commissionCount":l==="commission_total"||l.includes("tiền hoa hồng")?"commissionAmount":null}function Do({label:s,value:l,helper:o,tone:d="default",onClick:u}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:u,style:u?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:l})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(zv,{size:19})}),o?t.jsx("small",{children:o}):null]})}function jt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(Et,{size:18}),t.jsx("span",{children:s})]})}function Q1(s,l){const o=new Map,d=new Map;if(s.forEach(u=>{const m=zh(o,u.date),h=$1(u.type);if(h){m[h]=Number(u.value||0);return}const C=d.get(u.date)??0,y=Sh[C%Sh.length];m[y]=Number(u.value||0),d.set(u.date,C+1)}),l){const u=zh(o,Gx(new Date));u.registrations=ds(l.day_register_total),l.day_order_total!==void 0&&(u.orderCount=ds(l.day_order_total)),l.day_paid_order_total!==void 0&&(u.paidCount=ds(l.day_paid_order_total)),u.paidAmount=kh(l.day_paid_income??l.day_income),l.day_commission_payout!==void 0&&(u.commissionAmount=kh(l.day_commission_payout)),l.day_commission_count!==void 0&&(u.commissionCount=ds(l.day_commission_count))}return o.size===0?[]:Y1(31).map(u=>o.get(u)??Bx(u))}function X1({records:s,override:l}){const{t:o}=Qe(),[d,u]=f.useState("paidAmount"),[m,h]=f.useState(null),[C,y]=f.useState(0),[g,j]=f.useState(0),w=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#2f8f83",format:Ch},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#2563eb",format:la},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#7c3aed",format:la},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#c2410c",format:Ch},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#be123c",format:la},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#0891b2",format:la}],S=w.find(G=>G.key===d)??w[0],B=Q1(s,l),I=G=>Number(G[S.key]||0),$=Math.max(...B.map(I),1),A=720,Q=220,R=28,L=B.length>1?(A-R*2)/(B.length-1):0,ae=G=>Q-R-G/$*(Q-R*2),P=B.map((G,ne)=>`${R+ne*L},${ae(I(G))}`).join(" "),se=Math.max(Math.ceil(B.length/6),1),D=`dashboardTrendFill-${S.key}`;return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:B.length})})]}),t.jsx("div",{className:"chart-metric-tabs",role:"tablist","aria-label":o("dashboard.chartMetrics"),children:w.map(G=>t.jsx("button",{type:"button",className:d===G.key?"active":"",onClick:()=>{u(G.key),h(null)},children:G.label},G.key))}),B.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):null,t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${A} ${Q}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:D,x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:S.color,stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:S.color,stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map(G=>t.jsx("line",{className:"chart-grid",x1:R,x2:A-R,y1:R+G*(Q-R*2),y2:R+G*(Q-R*2)},G)),B.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",style:{fill:`url(#${D})`},points:`${R},${Q-R} ${P} ${A-R},${Q-R}`}),t.jsx("polyline",{className:"chart-line",points:P,style:{stroke:S.color}}),B.map((G,ne)=>{const be=R+ne*L,_=ae(I(G));return t.jsxs("g",{children:[t.jsx("circle",{cx:be,cy:_,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{h(G),y(be),j(_)},onMouseLeave:()=>{h(null)}}),t.jsx("circle",{cx:be,cy:_,r:(m==null?void 0:m.date)===G.date?6:4,fill:S.color,stroke:"var(--surface)",strokeWidth:(m==null?void 0:m.date)===G.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},G.date)})]}):null]}),m?t.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${C/A*100}%`,top:`${g/Q*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",m.date]}),t.jsxs("div",{className:"tooltip-value",children:[S.label,": ",S.format(I(m))]})]}):null]}),t.jsx("div",{className:"chart-axis",children:B.filter((G,ne)=>ne===0||ne===B.length-1||ne%se===0).map(G=>t.jsx("span",{children:G.date},G.date))}),B.length>0?t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:S.summaryLabel}),t.jsx("strong",{children:S.format($)})]}):null]})}function Oo({title:s,subtitle:l,records:o,labelKey:d}){const{t:u}=Qe(),m=Math.max(...o.map(h=>Number(h.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:l})]})}),t.jsx("div",{className:"rank-list",children:o.length===0?t.jsx("div",{className:"empty-state",children:u("dashboard.noTraffic")}):o.slice(0,8).map((h,C)=>{const y=d==="server_name"?h.server_name||u("dashboard.unnamedNode"):h.email||u("dashboard.unknownUser"),g=Number(h.total||0)/m*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:C+1}),t.jsx("strong",{children:y}),t.jsxs("small",{children:[H1(h.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(g,3)}%`}})})]},`${y}-${C}`)})})]})}function hd({label:s,current:l,previous:o}){const{t:d}=Qe();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof l=="number"?la(l):l}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?la(o):o]})]})}function Z1(){var g,j,w,S,B,I,$,A,Q,R,L,ae;const s=Rt(),{t:l}=Qe(),[o,d]=f.useState(null),[u,m]=f.useState(""),[h,C]=f.useState(!0),y=f.useCallback(async()=>{C(!0),m("");try{d(await g0())}catch(P){m(P instanceof Error?P.message:l("dashboard.loadFailed"))}finally{C(!1)}},[l]);return f.useEffect(()=>{if(!Ht()){s.replace("/login");return}y()},[y,s]),t.jsxs(Ft,{title:l("dashboard.title"),subtitle:l("dashboard.subtitle"),children:[u?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:u}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:y,children:[t.jsx(Et,{size:16}),l("common.retry")]})]}):null,h&&!o?t.jsx(jt,{label:l("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((g=o.override)==null?void 0:g.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:l("dashboard.pendingTickets",{count:(j=o.override)==null?void 0:j.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:l("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("dashboard.today")}),t.jsx("p",{children:l("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:y,disabled:h,children:[t.jsx(Et,{size:16}),l(h?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(Do,{label:l("dashboard.onlineUsers"),value:la(((w=o.override)==null?void 0:w.online_user)??0),helper:l("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(Do,{label:l("dashboard.todayIncome"),value:`${En(((S=o.override)==null?void 0:S.day_paid_income)??((B=o.override)==null?void 0:B.day_income)??0)} VND`,helper:l("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(Do,{label:l("dashboard.todayRegistrations"),value:la(((I=o.override)==null?void 0:I.day_register_total)??0),helper:l("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(Do,{label:l("dashboard.pendingCommission"),value:la((($=o.override)==null?void 0:$.commission_pending_total)??0),helper:l("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(hd,{label:l("dashboard.monthIncome"),current:`${En(((A=o.override)==null?void 0:A.month_income)??0)} VND`,previous:`${En(((Q=o.override)==null?void 0:Q.last_month_income)??0)} VND`}),t.jsx(hd,{label:l("dashboard.monthCommission"),current:`${En(((R=o.override)==null?void 0:R.commission_month_payout)??0)} VND`,previous:`${En(((L=o.override)==null?void 0:L.commission_last_month_payout)??0)} VND`}),t.jsx(hd,{label:l("dashboard.monthRegistrations"),current:((ae=o.override)==null?void 0:ae.month_register_total)??0,previous:"-"})]}),t.jsx(X1,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(Oo,{title:l("dashboard.serverRankToday"),subtitle:l("dashboard.trafficGb"),records:o.serverToday,labelKey:"server_name"}),t.jsx(Oo,{title:l("dashboard.serverRankYesterday"),subtitle:l("dashboard.trafficGb"),records:o.serverYesterday,labelKey:"server_name"}),t.jsx(Oo,{title:l("dashboard.userRankToday"),subtitle:l("dashboard.trafficGb"),records:o.userToday,labelKey:"email"}),t.jsx(Oo,{title:l("dashboard.userRankYesterday"),subtitle:l("dashboard.trafficGb"),records:o.userYesterday,labelKey:"email"})]})]}):null]})}const K1=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function Th(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function F1(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function xd(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function V1(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function J1(s){return[{label:s("config.happPing.proxyHead"),value:"proxy-head"},{label:s("config.happPing.proxy"),value:"proxy"},{label:s("config.happPing.tcp"),value:"tcp"},{label:s("config.happPing.icmp"),value:"icmp"}]}function P1(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function It(s){return s===!0||s===1||s==="1"}function W1(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function bd(s){return s.split(",").map(l=>l.trim()).filter(Boolean)}function I1(s){return s.split(/\r\n|\r|\n/).map(l=>l.trim()).filter(Boolean).join(`
`)}function ej({field:s,value:l,onChange:o}){const{t:d}=Qe(),u=s.toInput?s.toInput(l):W1(l);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${It(l)?"on":""}`,type:"button",onClick:()=>o(It(l)?0:1),"aria-pressed":It(l),children:[t.jsx("span",{}),It(l)?Th(d)[0].label:Th(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:u,onChange:m=>o(m.target.value),children:(s.options??[]).map(m=>t.jsx("option",{value:m.value,children:m.label},String(m.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:m=>o(s.fromInput?s.fromInput(m.target.value):m.target.value),placeholder:s.placeholder,rows:4,value:u}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:m=>o(s.fromInput?s.fromInput(m.target.value):m.target.value),placeholder:s.placeholder,type:s.type,value:u}):null]})]})}function tj({plans:s,emailTemplates:l,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(u=>({label:u.name,value:u.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:u=>Number(u.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:u=>It(u.email_whitelist_enable),fromInput:bd},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:u=>It(u.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:u=>It(u.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>It(u.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>It(u.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>It(u.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>It(u.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:o("config.subscribe.happProfileTitle"),description:o("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:o("config.subscribe.happHideSettings"),description:o("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:o("config.subscribe.happAnnounce"),description:o("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:o("config.subscribe.happProviderId"),description:o("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:o("config.subscribe.happColorProfile"),description:o("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:o("config.subscribe.happPingType"),description:o("config.subscribe.happPingTypeHelp"),type:"select",options:J1(o)},{key:"happ_check_url",label:o("config.subscribe.happCheckUrl"),description:o("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:u=>String(u.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:F1(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:xd(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:xd(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:xd(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:V1(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:u=>Number(u.show_subscribe_method||0)===2},{key:"subscribe_url_ua_enable",label:o("config.subscribe.uaAllow"),description:o("config.subscribe.uaAllowHelp"),type:"switch"},{key:"subscribe_url_allowed_ua",label:o("config.subscribe.uaAllowList"),description:o("config.subscribe.uaAllowListHelp"),type:"textarea",placeholder:`MosVPN
MosVPN Android
MosVPN iOS`,visible:u=>It(u.subscribe_url_ua_enable),fromInput:I1}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:bd}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:P1(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:bd},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:u=>It(u.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:u=>It(u.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:u=>It(u.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:o("config.server.zicnodeAutoTls"),description:o("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:o("config.server.zicnodeAutoTlsProvider"),description:o("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:u=>It(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:o("config.server.zicnodeAutoTlsDnsEnv"),description:o("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:u=>It(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:o("config.server.zicnodeAutoTlsSelfFallback"),description:o("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:u=>It(u.zicnode_auto_tls_enable)}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:l.map(u=>({label:u,value:u}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function nj(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState("site"),[u,m]=f.useState(null),[h,C]=f.useState([]),[y,g]=f.useState([]),[j,w]=f.useState(!0),[S,B]=f.useState(null),[I,$]=f.useState(""),A=f.useCallback(async()=>{w(!0),$("");try{const[G,ne,be]=await Promise.all([Cx(),v0(),y0()]);m(G),C(ne),g(be)}catch(G){$(G instanceof Error?G.message:l("config.loadFailed"))}finally{w(!1)}},[l]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}A()},[A,s]),f.useEffect(()=>{const G=document.querySelector(".config-tabs button.active");G&&G.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const Q=f.useMemo(()=>tj({plans:h,emailTemplates:y,t:l}),[h,y,l]),R=Q.find(G=>G.key===o)??Q[0],L=(u==null?void 0:u[R.key])??{};function ae(G,ne,be){m(_=>_&&{..._,[G]:{..._[G],[ne]:be}})}async function P(){var G;if(u){B(R.key),$("");try{await zx(u[R.key]),(G=window.showToast)==null||G.call(window,l("config.saveSuccess"),"success")}catch(ne){$(ne instanceof Error?ne.message:l("config.saveFailed"))}finally{B(null)}}}async function se(){var G;B("mail"),$("");try{await j0(),(G=window.showToast)==null||G.call(window,l("config.email.testSuccess"),"success")}catch(ne){$(ne instanceof Error?ne.message:l("config.email.testFailed"))}finally{B(null)}}async function D(){var ne;const G=String((u==null?void 0:u.telegram.telegram_bot_token)??"");B("webhook"),$("");try{await w0(G),(ne=window.showToast)==null||ne.call(window,l("config.telegram.webhookSuccess"),"success")}catch(be){$(be instanceof Error?be.message:l("config.telegram.webhookFailed"))}finally{B(null)}}return t.jsxs(Ft,{title:l("config.title"),subtitle:l("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("config.systemConfig")}),t.jsx("p",{children:l("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:A,disabled:j,children:[t.jsx(Et,{size:16}),l(j?"common.refreshing":"common.refresh")]})]}),I?t.jsx("div",{className:"form-error",children:I}):null,j&&!u?t.jsx(jt,{label:l("config.loading")}):null,u?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":l("config.tabsLabel"),children:K1.map(G=>{const ne=Q.find(be=>be.key===G);return ne?t.jsxs("button",{className:o===G?"active":"",type:"button",onClick:()=>d(G),children:[t.jsx("span",{children:ne.label}),t.jsx("small",{children:ne.hint})]},G):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:R.label}),t.jsx("p",{children:R.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:S===R.key,type:"button",onClick:P,children:[t.jsx(An,{size:16}),S===R.key?l("config.saving"):l("config.saveTab")]})]}),R.warning?t.jsx("div",{className:"config-warning",children:R.warning}):null,t.jsx("div",{className:"config-fields",children:R.fields.map(G=>G.visible&&!G.visible(L)?null:t.jsx(ej,{field:G,value:L[G.key],onChange:ne=>ae(R.key,G.key,ne)},G.key))}),R.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:S==="mail",onClick:se,children:[t.jsx(jx,{size:16}),l(S==="mail"?"config.email.testing":"config.email.test")]})}):null,R.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:S==="webhook",onClick:D,children:[t.jsx(r0,{size:16}),l(S==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(wx,{size:14}),l("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function di(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const l=document.createElement("textarea");l.value=s,l.setAttribute("readonly",""),l.style.position="fixed",l.style.left="-9999px",l.style.top="0",document.body.appendChild(l),l.select(),l.setSelectionRange(0,l.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(l)}}function gd(s){return s===!0||s===1||s==="1"}function aj(s,l=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??l,config:{...(s==null?void 0:s.config)??{}}}}function ij(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function lj(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState([]),[h,C]=f.useState(null),[y,g]=f.useState({}),[j,w]=f.useState(!0),[S,B]=f.useState(!1),[I,$]=f.useState(!1),[A,Q]=f.useState(""),[R,L]=f.useState(""),[ae,P]=f.useState({}),se=f.useCallback(async()=>{w(!0),Q("");try{const[Y,de]=await Promise.all([_0(),N0()]);d(Y),m(de),P({})}catch(Y){Q(Y instanceof Error?Y.message:l("payment.loadFailed"))}finally{w(!1)}},[l]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}se()},[se,s]);async function D(Y){const de=(Y==null?void 0:Y.payment)??u[0]??"",z=aj(Y,de);if(C(z),g({}),Q(""),L(""),!!de){B(!0);try{g(await jh(de,Y==null?void 0:Y.id))}catch(V){Q(V instanceof Error?V.message:l("payment.formLoadFailed"))}finally{B(!1)}}}async function G(Y){if(h){C({...h,payment:Y,config:{}}),B(!0),Q("");try{g(await jh(Y,h.id))}catch(de){Q(de instanceof Error?de.message:l("payment.formLoadFailed"))}finally{B(!1)}}}async function ne(Y){var de,z;if(Y.preventDefault(),!!h){$(!0),Q(""),L("");try{await S0(ij(h)),C(null),(de=window.showToast)==null||de.call(window,l("payment.saveSuccess"),"success"),await se()}catch(V){(z=window.showToast)==null||z.call(window,V instanceof Error?V.message:l("payment.saveFailed"),"error")}finally{$(!1)}}}async function be(Y){var de;Q(""),L("");try{await k0(Y),await se()}catch(z){(de=window.showToast)==null||de.call(window,z instanceof Error?z.message:l("payment.toggleFailed"),"error")}}async function _(Y){var de;(de=window.showConfirm)==null||de.call(window,{message:l("payment.deleteConfirm"),onConfirm:async()=>{var z,V;Q(""),L("");try{await C0(Y),(z=window.showToast)==null||z.call(window,l("payment.deleteSuccess"),"success"),await se()}catch(T){(V=window.showToast)==null||V.call(window,T instanceof Error?T.message:l("payment.deleteFailed"),"error")}}})}async function H(Y,de){var pe;const z=Y+de;if(z<0||z>=o.length)return;const V=[...o],T=V[Y];V.splice(Y,1),V.splice(z,0,T),d(V);try{await z0(V.map(k=>k.id)),await se()}catch(k){(pe=window.showToast)==null||pe.call(window,k instanceof Error?k.message:l("payment.sortFailed"),"error"),await se()}}async function re(Y){var z;const de=await di(Y);(z=window.showToast)==null||z.call(window,l(de?"payment.copied":"common.copyFailed"),de?"success":"error")}return t.jsxs(Ft,{title:l("payment.title"),subtitle:l("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("payment.methods")}),t.jsx("p",{children:l("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:se,disabled:j,children:[t.jsx(Et,{size:16}),t.jsx("span",{children:l(j?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void D(),children:[t.jsx(Mn,{size:16}),t.jsx("span",{children:l("payment.add")})]})]})]}),A?t.jsx("div",{className:"form-error",children:A}):null,R?t.jsx("div",{className:"form-success",children:R}):null,j&&o.length===0?t.jsx(jt,{label:l("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("payment.id")}),t.jsx("th",{children:l("payment.enabled")}),t.jsx("th",{children:l("payment.displayName")}),t.jsx("th",{children:l("payment.interface")}),t.jsx("th",{children:l("payment.notifyUrl")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((Y,de)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:Y.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void H(de,-1),disabled:de===0,"aria-label":l("payment.moveUp"),children:t.jsx(fh,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void H(de,1),disabled:de===o.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(mh,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${gd(Y.enable)?"active":""}`,type:"button",onClick:()=>void be(Y.id),"aria-label":gd(Y.enable)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:Y.name}),Y.icon?t.jsx("small",{children:Y.icon}):null]}),t.jsx("td",{children:Y.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void re(Y.notify_url),children:[t.jsx("span",{children:Y.notify_url}),t.jsx(hs,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void D(Y),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void _(Y.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},Y.id)),!j&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map((Y,de)=>{const z=gd(Y.enable),V=Y.handling_fee_percent!==null&&Y.handling_fee_percent!==""?`${Y.handling_fee_percent}%`:"",T=Y.handling_fee_fixed!==null?`${En(Y.handling_fee_fixed)} VND`:"",pe=[V,T].filter(Boolean).join(" + ")||"No fees",k=ae[Y.id],N=Y.icon&&!k;return t.jsxs("div",{className:`payment-mobile-card ${z?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",Y.id]}),t.jsx("span",{className:"gateway-tag",children:Y.payment})]}),t.jsx("button",{className:`admin-switch ${z?"active":""}`,type:"button",onClick:()=>void be(Y.id),"aria-label":l(z?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[N?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:Y.icon,alt:Y.name,onError:()=>{P(M=>({...M,[Y.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:Y.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:Y.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:pe})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:l("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void re(Y.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:Y.notify_url}),t.jsx(hs,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void H(de,-1),disabled:de===0,"aria-label":l("payment.moveUp"),children:t.jsx(fh,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void H(de,1),disabled:de===o.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(mh,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void D(Y),children:[t.jsx(Kt,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void _(Y.id),children:[t.jsx(en,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]})]},Y.id)}),!j&&o.length===0?t.jsx("div",{className:"empty-state",children:l("payment.empty")}):null]}),h?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:h.id?l("payment.edit"):l("payment.add")}),t.jsx("p",{children:l("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>C(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ne,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:Y=>C({...h,name:Y.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:h.icon,onChange:Y=>C({...h,icon:Y.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:h.notify_domain,onChange:Y=>C({...h,notify_domain:Y.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:h.handling_fee_percent,onChange:Y=>C({...h,handling_fee_percent:Y.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:h.handling_fee_fixed,onChange:Y=>C({...h,handling_fee_fixed:Y.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.interface")}),t.jsx("select",{className:"config-input",value:h.payment,onChange:Y=>void G(Y.target.value),children:u.map(Y=>t.jsx("option",{value:Y,children:Y},Y))})]}),S?t.jsx(jt,{label:l("payment.formLoading")}):null,S?null:Object.entries(y).map(([Y,de])=>t.jsxs("label",{children:[t.jsx("span",{children:de.label}),t.jsx("input",{className:"config-input",placeholder:de.description,value:String(h.config[Y]??de.value??""),onChange:z=>C({...h,config:{...h.config,[Y]:z.target.value}})})]},Y)),h.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>C(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(An,{size:16}),l(I?"payment.saving":"common.save")]})]})]})]})}):null]})}function sj(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function oj(s,l){return l[s.field_name]??s.default_value??""}function rj(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState(null),[u,m]=f.useState(null),[h,C]=f.useState(!0),[y,g]=f.useState(!1),[j,w]=f.useState(!1),[S,B]=f.useState(null),[I,$]=f.useState(""),[A,Q]=f.useState(""),R=f.useCallback(async()=>{C(!0),$("");try{d(await T0())}catch(D){$(D instanceof Error?D.message:l("theme.loadFailed"))}finally{C(!1)}},[l]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}R()},[R,s]);async function L(D,G){m(null),g(!0),$(""),Q("");try{const ne=await E0(D);m({key:D,theme:G,values:ne})}catch(ne){$(ne instanceof Error?ne.message:l("theme.configLoadFailed"))}finally{g(!1)}}async function ae(D){B(D),$(""),Q("");try{await zx({frontend_theme:D}),Q(l("theme.activateSuccess")),await R()}catch(G){$(G instanceof Error?G.message:l("theme.activateFailed"))}finally{B(null)}}async function P(D){if(D.preventDefault(),!!u){w(!0),$(""),Q("");try{await M0(u.key,u.values),m(null),Q(l("theme.saveSuccess")),await R()}catch(G){$(G instanceof Error?G.message:l("theme.saveFailed"))}finally{w(!1)}}}function se(D,G){m(ne=>ne&&{...ne,values:{...ne.values,[D]:G}})}return t.jsxs(Ft,{title:l("theme.title"),subtitle:l("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.available")}),t.jsx("p",{children:l("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:R,disabled:h,children:[t.jsx(Et,{size:16}),l(h?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:l("theme.warning")}),I?t.jsx("div",{className:"form-error",children:I}):null,A?t.jsx("div",{className:"form-success",children:A}):null,h&&!o?t.jsx(jt,{label:l("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([D,G])=>{const ne=o.active===D;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${sj(G)})`},children:ne?t.jsxs("span",{className:"theme-active",children:[t.jsx(vx,{size:15}),l("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:G.name||D}),t.jsx("p",{children:G.description||l("theme.noDescription")})]}),t.jsxs("small",{children:[l("theme.version"),": ",G.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void L(D,G),children:[t.jsx(Iv,{size:15}),l("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ne||S===D,type:"button",onClick:()=>void ae(D),children:[t.jsx(Vv,{size:15}),l(ne?"theme.current":S===D?"theme.activating":"theme.activate")]})]})]},D)})}):null,y?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(jt,{label:l("theme.configLoading")})})}):null,u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.configure",{name:u.theme.name||u.key})}),t.jsx("p",{children:u.theme.description||l("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:P,children:[(u.theme.configs??[]).map(D=>{const G=oj(D,u.values);return t.jsxs("label",{children:[t.jsx("span",{children:D.label}),D.description?t.jsx("p",{className:"field-description",children:D.description}):null,D.field_type==="select"?t.jsx("select",{className:"config-input",value:G,onChange:ne=>se(D.field_name,ne.target.value),children:Object.entries(D.select_options??{}).map(([ne,be])=>t.jsx("option",{value:ne,children:be},ne))}):null,D.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:D.placeholder,rows:5,value:G,onChange:ne=>se(D.field_name,ne.target.value)}):null,D.field_type!=="select"&&D.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:D.placeholder,value:G,onChange:ne=>se(D.field_name,ne.target.value)}):null]},D.field_name)}),(u.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:l("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(An,{size:16}),l(j?"theme.saving":"common.save")]})]})]})]})}):null]})}const Bd=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],cj=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],dj=["tcp","ws","grpc","http","httpupgrade","xhttp"],Yx=["tcp","ws","grpc"],$x=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],uj=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],Eh=["anytls","hysteria2","trojan","tuic"],pj=["tcp","ws","grpc","httpupgrade","xhttp"],mj=["chrome","firefox","safari","ios","android","edge","360","qq"],fj=["vmess","vless","trojan","hysteria","tuic","anytls"],hj=["trojan","hysteria","tuic","anytls"],Qx=["ForceIP","ForceIPv4","ForceIPv6","ForceIPv4v6","ForceIPv6v4"],Zo={enable:!1,mode:"auto",fail_policy:"direct",mtu:1280,domain_strategy:"ForceIPv4v6",endpoint:"engage.cloudflareclient.com:2408",addresses:["172.16.0.2/32","2606:4700:110:8765::2/128"],reserved:[]},Ko=[10,20,50,100],Xx="admin_server_manage_page_size";function Zx(s){return Ko.includes(s)}function xj(){if(typeof window>"u")return Ko[0];try{const s=Number(window.localStorage.getItem(Xx));if(Zx(s))return s}catch{}return Ko[0]}const eu=typeof window<"u"?window.location.origin:"",bj="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function gj(s,l,o=""){return s[l]??o}function Ve(s,l,o=""){return String(gj(s,l,o))}function yj(s,l){const o=s[l];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function bl(s){if(s&&typeof s=="object"&&!Array.isArray(s))return s;if(typeof s!="string"||!s.trim())return{};try{const l=JSON.parse(s);return l&&typeof l=="object"&&!Array.isArray(l)?l:{}}catch{return{}}}function vj(s){return typeof s=="string"?s.trim()!=="":Array.isArray(s)?s.length>0:s&&typeof s=="object"?Object.keys(s).length>0:!1}function jj(s){return s==="vmess"?"networkSettings":"network_settings"}function wj(s,l){const o=s==="vmess",d=s==="vless"||Pn(s),u={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(l){case"tcp":return d?{acceptProxyProtocol:!1,...u}:u;case"ws":return d?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return o?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function Pn(s){return s==="v2node"||s==="zicnode"}function _j(s){return hj.includes(s)}function Nj(s){return Pn(s)||fj.includes(s)}function Mh(s){return s==="vmess"?"tlsSettings":"tls_settings"}function Sj(s){const l=String((s==null?void 0:s._type)??"");return _j(l)?1:Number((s==null?void 0:s.tls)??0)}function Gd(s){return!!s&&s!=="shadowsocks"}function kj(s){return s==="vless"||s==="vmess"}function Yd(s){return s==="vless"||s==="anytls"}function Cj(s){return["vless","vmess","trojan","shadowsocks"].includes(s)}function Ah(s){return s==="shadowsocks"?["tcp","http"]:s==="trojan"?Yx:s==="vless"||s==="vmess"?pj:[]}function zj(s){var l;return Pn(s)?"ZicNode":((l=Bd.find(o=>o.value===s))==null?void 0:l.label)??s}function Fo(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function tu(s){return s===!0||s===1||s==="1"||s==="true"}function Dh(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s:""}function Kx(s){return Array.isArray(s)?s.map(l=>String(l).trim()).filter(Boolean):typeof s=="string"?s.split(",").map(l=>l.trim()).filter(Boolean):[]}function Tj(s){return Kx(s).map(l=>Number(l)).filter(l=>Number.isInteger(l)&&l>=0&&l<=255)}function Vo(s){const l={...Zo,...bl(s)};if(!tu(l.enable))return{enable:!1};const d={enable:!0,mode:["auto","manual"].includes(String(l.mode))?l.mode:"auto",fail_policy:["direct","block"].includes(String(l.fail_policy))?l.fail_policy:"direct",mtu:Number(l.mtu)>0?Number(l.mtu):1280,domain_strategy:Qx.includes(String(l.domain_strategy))?l.domain_strategy:"ForceIPv4v6"};["private_key","peer_public_key","endpoint"].forEach(h=>{const C=Fo(l[h]);C&&(d[h]=C)});const u=Kx(l.addresses);u.length&&(d.addresses=u);const m=Tj(l.reserved);return m.length&&(d.reserved=m),d}const Ej=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],Mj=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert"];function za(s,l){const o=bl(s);if(l===0)return{};const d={...o};return delete d.allow_insecure,delete d.allowInsecure,l===1?Ej.forEach(u=>delete d[u]):l===2&&Mj.forEach(u=>delete d[u]),Object.keys(d).forEach(u=>{const m=d[u];(m===""||m===null||m===void 0)&&delete d[u]}),d}function Oh(s,l=eu){return Fo(s).replace(/\/+$/,"")||l}function Uh(s){return`'${s.replace(/'/g,"'\\''")}'`}function Aj(s,l){const o=l.apiHost||eu,d=l.apiKey||"TOKEN_MOI";return`wget -N ${bj} && \\
bash install.sh --api-host ${Uh(o)} --node-id ${s} --api-key ${Uh(d)}`}function Rh(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function Hh(s,l){if(l){const d=JSON.parse(JSON.stringify(l));return d.group_id=Rh(d.group_id),d.route_id=Rh(d.route_id),Pn(s)&&(d.warp_settings={...Zo,...bl(d.warp_settings)}),{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:"1",show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...o,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...o,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:"",warp_settings:{...Zo}};default:return o}}function Fx({initialValue:s,onCancel:l,onSave:o}){const{t:d}=Qe(),[u,m]=f.useState(()=>JSON.stringify(s??{},null,2)),[h,C]=f.useState(""),y=j=>{if(j.preventDefault(),!u.trim()){o({});return}try{const w=JSON.parse(u);if(typeof w!="object"||w===null)throw new Error("Must be a JSON object {} or array []");o(w)}catch(w){C(w instanceof Error?w.message:"Invalid JSON")}},g=j=>{if(m(j),!j.trim()){C("");return}try{const w=JSON.parse(j);if(typeof w!="object"||w===null)throw new Error("Must be a JSON object {} or array []");C("")}catch(w){C(w instanceof Error?w.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:y,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),h&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",h]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:h?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:u,onChange:j=>g(j.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:l,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!h,children:d("common.confirm")})]})]})}function Ne({label:s,required:l,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,l&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:u=>{u.preventDefault(),d()},children:o})]})}function Dj({value:s,onChange:l,label:o}){const{t:d}=Qe(),[u,m]=f.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Ne,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((h,C)=>t.jsxs("span",{className:"tag",onClick:()=>l(s.filter((y,g)=>g!==C)),style:{cursor:"pointer"},children:[h," ×"]},C)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:u,placeholder:d("node.tagPlaceholder"),onChange:h=>m(h.target.value),onKeyDown:h=>{h.key==="Enter"&&u.trim()&&(h.preventDefault(),l([...s,u.trim()]),m(""))}})]})]})}function Lh({options:s,value:l,onChange:o,label:d,actionText:u,onAction:m}){const{t:h}=Qe(),[C,y]=f.useState(""),g=s.filter(w=>l.includes(w.id)),j=s.filter(w=>w.name.toLowerCase().includes(C.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Ne,{label:d,actionText:u,onAction:m}),g.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:g.map(w=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(l.filter(S=>S!==w.id)),children:[w.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},w.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${h("common.search")}...`,value:C,onChange:w=>y(w.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[j.map(w=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:l.includes(w.id),onChange:S=>o(S.target.checked?[...l,w.id]:l.filter(B=>B!==w.id))}),t.jsx("span",{children:w.name})]},w.id)),j.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?h("node.noGroupsAvailable"):h("node.noResultsFound")})]})]})}function Wn({label:s,checked:l,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:l,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:l?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:l?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function Oj({initialValue:s,isSnakeCase:l,tlsMode:o,nodeType:d,onCancel:u,onSave:m}){const{t:h}=Qe(),C=l?"server_name":"serverName",y=l?"allow_insecure":"allowInsecure",g=Pn(d),j=Nj(d),w=o===1&&j,[S,B]=f.useState(String((s==null?void 0:s[C])??"")),[I,$]=f.useState(String((s==null?void 0:s.dest)??"")),[A,Q]=f.useState(String((s==null?void 0:s.server_port)??"443")),[R,L]=f.useState(String((s==null?void 0:s.xver)??"0")),[ae,P]=f.useState(String((s==null?void 0:s.private_key)??"")),[se,D]=f.useState(String((s==null?void 0:s.public_key)??"")),[G,ne]=f.useState(String((s==null?void 0:s.short_id)??"")),[be,_]=f.useState(String((s==null?void 0:s.fingerprint)??"chrome")),[H,re]=f.useState(String((s==null?void 0:s.pinnedPeerCertSha256)??(s==null?void 0:s.pinned_peer_cert_sha256)??"")),[Y,de]=f.useState(String((s==null?void 0:s.verifyPeerCertByName)??(s==null?void 0:s.verify_peer_cert_by_name)??"")),z=String((s==null?void 0:s.cert_mode)??"").trim(),[V,T]=f.useState(z||"auto"),[pe,k]=f.useState(String((s==null?void 0:s.provider)??"")),[N,M]=f.useState(String((s==null?void 0:s.dns_env)??"")),[ee,me]=f.useState(String((s==null?void 0:s.cert_file)??"")),[Se,Me]=f.useState(String((s==null?void 0:s.key_file)??"")),[Ue,Je]=f.useState(()=>{const je=s==null?void 0:s.reject_unknown_sni;return je===1||je===!0||String(je)==="1"||String(je)==="true"}),[Re,et]=f.useState(String((s==null?void 0:s.ech)??"")),[ft,Qt]=f.useState(String((s==null?void 0:s.ech_server_name)??"")),[Vt,xt]=f.useState(String((s==null?void 0:s.ech_key)??"")),[Xt,ot]=f.useState(String((s==null?void 0:s.ech_config)??"")),[Jt,bt]=f.useState(()=>{const je=s==null?void 0:s[y];return je===1||je===!0||String(je)==="1"||String(je)==="true"}),Nt=je=>{if(je.preventDefault(),g&&o===0){m({});return}const Mt=g?za(s,o):bl(s),De=g?{...Mt,[C]:S,fingerprint:be}:{...s??{},[C]:S,fingerprint:be},fn=H.trim(),rt=Y.trim();if(fn?De.pinnedPeerCertSha256=fn:delete De.pinnedPeerCertSha256,delete De.pinned_peer_cert_sha256,rt?De.verifyPeerCertByName=rt:delete De.verifyPeerCertByName,delete De.verify_peer_cert_by_name,g?(delete De.allow_insecure,delete De.allowInsecure):De[y]=l?Jt?1:0:Jt,o===2&&(De.dest=I,De.server_port=A,De.xver=Number(R)||0,De.private_key=ae,De.public_key=se,De.short_id=G,De.ech=Re,De.ech_server_name=ft,De.ech_key=Vt,De.ech_config=Xt),w){De.cert_mode=V;const on=s==null?void 0:s.auto_cert;on&&typeof on=="object"&&(De.auto_cert=on),V==="none"?(delete De.provider,delete De.dns_env,delete De.cert_file,delete De.key_file):(pe.trim()?De.provider=pe:delete De.provider,N.trim()?De.dns_env=N:delete De.dns_env,ee.trim()?De.cert_file=ee:delete De.cert_file,Se.trim()?De.key_file=Se:delete De.key_file),De.reject_unknown_sni=Ue?"1":"0"}m(g?za(De,o):De)};return t.jsxs("form",{onSubmit:Nt,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:h("node.sni")}),t.jsx("input",{className:"config-input",value:S,onChange:je=>B(je.target.value),placeholder:h(o===2?"node.realitySniHelp":"node.serverNameHelp")})]}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.dest")}),t.jsx("input",{className:"config-input",value:I,onChange:je=>$(je.target.value),placeholder:h("node.destHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.servicePort")}),t.jsx("input",{className:"config-input",value:A,onChange:je=>Q(je.target.value),placeholder:"443"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.proxyProtocol")}),t.jsxs("select",{className:"config-input",value:R,onChange:je=>L(je.target.value),children:[t.jsx("option",{value:"0",children:"0"}),t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.privateKey")}),t.jsx("input",{className:"config-input",value:ae,onChange:je=>P(je.target.value),placeholder:h("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.publicKey")}),t.jsx("input",{className:"config-input",value:se,onChange:je=>D(je.target.value),placeholder:h("node.autoGenHelp")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.shortId")}),t.jsx("input",{className:"config-input",value:G,onChange:je=>ne(je.target.value),placeholder:h("node.autoGenHelp")})]})]}):null,t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.fingerprint")}),t.jsx("select",{className:"config-input",value:be,onChange:je=>_(je.target.value),children:mj.map(je=>t.jsx("option",{value:je,children:je},je))})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.pinnedPeerCertSha256")}),t.jsx("input",{className:"config-input",value:H,onChange:je=>re(je.target.value),placeholder:"AA:BB:CC..."})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.verifyPeerCertByName")}),t.jsx("input",{className:"config-input",value:Y,onChange:je=>de(je.target.value),placeholder:"example.com"})]})]}),w?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.certMode")}),t.jsxs("select",{className:"config-input",value:V,onChange:je=>T(je.target.value),children:[t.jsx("option",{value:"auto",children:h("node.certModeAuto")}),t.jsx("option",{value:"self",children:h("node.certModeSelf")}),t.jsx("option",{value:"http",children:h("node.certModeHttp")}),t.jsx("option",{value:"dns",children:h("node.certModeDns")}),t.jsx("option",{value:"file",children:h("node.certModeFile")}),t.jsx("option",{value:"none",children:h("node.certModeNone")})]})]}),V==="dns"||V==="auto"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.dnsProvider")}),t.jsx("input",{className:"config-input",value:pe,onChange:je=>k(je.target.value),placeholder:"cloudflare"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.dnsEnv")}),t.jsx("input",{className:"config-input",value:N,onChange:je=>M(je.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,V!=="none"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.certFile")}),t.jsx("input",{className:"config-input",value:ee,onChange:je=>me(je.target.value),placeholder:h("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.keyFile")}),t.jsx("input",{className:"config-input",value:Se,onChange:je=>Me(je.target.value),placeholder:h("node.autoGenHelp")})]})]}):null,t.jsx(Wn,{label:h("node.rejectUnknownSni"),checked:Ue,onChange:Je})]}):null,g?null:t.jsx(Wn,{label:h("node.allowInsecure"),checked:Jt,onChange:bt}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.ech")}),t.jsxs("select",{className:"config-input",value:Re,onChange:je=>et(je.target.value),children:[t.jsx("option",{value:"",children:h("node.echNone")}),t.jsx("option",{value:"cloudflare",children:"Cloudflare"}),t.jsx("option",{value:"custom",children:h("node.echCustom")})]})]}),Re==="cloudflare"?t.jsx("div",{className:"config-warning",children:h("node.echCloudflareHelp")}):null,Re==="custom"?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.echServerName")}),t.jsx("input",{className:"config-input",value:ft,onChange:je=>Qt(je.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.echKey")}),t.jsx("input",{className:"config-input",value:Vt,onChange:je=>xt(je.target.value),placeholder:h("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:h("node.echConfig")}),t.jsx("input",{className:"config-input",value:Xt,onChange:je=>ot(je.target.value),placeholder:h("node.autoGenHelp")})]})]}):null]}):null,t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:u,children:h("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:h("common.confirm")})]})]})}function Uj({draft:s,set:l,groups:o,routes:d,nodes:u,onOpenJson:m,onAddGroup:h,onOpenTransportConfig:C}){const{t:y}=Qe(),g=String(s._type),j=Pn(g),w=Ve(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:y("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:y("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ve(s,"name"),onChange:S=>l("name",S.target.value),placeholder:y("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:y("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",inputMode:"decimal",required:!0,value:Ve(s,"rate","1"),onChange:S=>l("rate",S.target.value)})]})]}),t.jsx(Dj,{value:s.tags??[],onChange:S=>l("tags",S),label:y("node.tags")}),t.jsx(Lh,{options:o.map(S=>({id:S.id,name:S.name})),value:s.group_id??[],onChange:S=>l("group_id",S),label:y("node.permissionGroups"),actionText:y("node.addGroup"),onAction:h}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:y("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ve(s,"host"),onChange:S=>l("host",S.target.value),placeholder:y("node.addressPlaceholder")})]}),j?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:y("node.listenIp")}),t.jsx("input",{className:"config-input",value:Ve(s,"listen_ip"),onChange:S=>l("listen_ip",S.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(g)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:y("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?y("node.editConfig"):void 0,onAction:()=>{const S=Mh(g);m(y("node.connectionSecurityConfig"),S)}}),t.jsxs("select",{className:"config-input",value:Ve(s,"tls","0"),onChange:S=>{const B=Number(S.target.value);l("tls",B);const I=Mh(g);B!==0&&!s[I]&&l(I,{})},children:[t.jsx("option",{value:"0",children:y("node.none")}),t.jsx("option",{value:"1",children:y("node.useTls")}),g!=="vmess"&&t.jsx("option",{value:"2",children:y("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(g)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:y("node.sni"),actionText:y("node.editConfig"),onAction:()=>m(y("node.connectionSecurityConfig"),"tls_settings")}),t.jsx("input",{className:"config-input",value:Ve(s,"server_name"),onChange:S=>l("server_name",S.target.value),placeholder:y("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:y("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ve(s,"port"),onChange:S=>l("port",S.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:y("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ve(s,"server_port"),onChange:S=>l("server_port",S.target.value),placeholder:"443"})]})]}),j?t.jsx($j,{draft:s,set:l,onOpenJson:m,onOpenTransportConfig:C,onOpenSecurityConfig:()=>m(y("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(g)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:y("node.transportProtocol"),required:!0,actionText:y("node.editConfig"),onAction:C}),t.jsxs("select",{className:"config-input",value:w,onChange:S=>{l("network",S.target.value);const B=g==="vmess"?"networkSettings":"network_settings";s[B]||l(B,{})},children:[g==="vmess"&&cj.map(S=>t.jsx("option",{value:S,children:S},S)),g==="trojan"&&Yx.map(S=>t.jsx("option",{value:S,children:S},S)),g==="vless"&&dj.map(S=>t.jsx("option",{value:S,children:S},S))]})]}):null,g==="trojan"&&t.jsx(Hj,{draft:s,set:l}),g==="shadowsocks"&&t.jsx(Lj,{draft:s,set:l,onOpenJson:m}),g==="hysteria"&&t.jsx(qj,{draft:s,set:l}),g==="tuic"&&t.jsx(Bj,{draft:s,set:l}),g==="vless"&&t.jsx(Gj,{draft:s,set:l,onOpenJson:m}),g==="anytls"&&t.jsx(Yj,{draft:s,set:l,onOpenJson:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:y("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:S=>l("parent_id",S.target.value?Number(S.target.value):null),children:[t.jsx("option",{value:"",children:y("node.none")}),u.filter(S=>S.id!==s.id&&!S.parent_id).map(S=>t.jsx("option",{value:S.id,children:S.name},S.id))]})]}),t.jsx(Lh,{options:d.map(S=>({id:S.id,name:S.remarks})),value:s.route_id??[],onChange:S=>l("route_id",S),label:y("node.routingGroups")})]})]})}function Rj({draft:s,set:l,onCancel:o,onSave:d}){const u=String(s._type),m=String(s.network??"tcp"),h=jj(u),C=s[h],y=vj(C)?bl(C):wj(u,m);return t.jsx(Fx,{initialValue:y,onCancel:o,onSave:g=>{l(h,g),d()}})}function Hj({draft:s,set:l}){const{t:o}=Qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(Wn,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>l("allow_insecure",d?1:0)})]})}function Lj({draft:s,set:l,onOpenJson:o}){const{t:d}=Qe(),u=yj(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Ve(s,"cipher","aes-128-gcm"),onChange:m=>l("cipher",m.target.value),children:$x.map(m=>t.jsx("option",{value:m,children:m},m))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Ve(s,"obfs"),onChange:m=>l("obfs",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(u.host??""),onChange:m=>l("obfs_settings",{...u,host:m.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(u.path??""),onChange:m=>l("obfs_settings",{...u,path:m.target.value}),placeholder:"/"})]})]})]})}function qj({draft:s,set:l}){const{t:o}=Qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Ve(s,"version","2"),onChange:d=>l("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ve(s,"up_mbps","0"),onChange:d=>l("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ve(s,"down_mbps","0"),onChange:d=>l("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Ve(s,"obfs"),onChange:d=>l("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ve(s,"obfs_password"),onChange:d=>l("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(Wn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)})]})}function Bj({draft:s,set:l}){const{t:o}=Qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ve(s,"udp_relay_mode","native"),onChange:d=>l("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ve(s,"congestion_control","bbr"),onChange:d=>l("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(Wn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)}),t.jsx(Wn,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>l("disable_sni",d?1:0)}),t.jsx(Wn,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>l("zero_rtt_handshake",d?1:0)})]})}function Gj({draft:s,set:l,onOpenJson:o}){const{t:d}=Qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Ve(s,"flow"),onChange:u=>l("flow",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:d("node.encryption"),actionText:Ve(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ve(s,"encryption"),onChange:u=>l("encryption",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function Yj({draft:s,set:l,onOpenJson:o}){const{t:d}=Qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(Wn,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:u=>l("insecure",u?1:0)})]})}function $j({draft:s,set:l,onOpenJson:o,onOpenTransportConfig:d,onOpenSecurityConfig:u}){const{t:m}=Qe(),h=Ve(s,"protocol"),C=Ah(h),y={...Zo,...bl(s.warp_settings)},g=tu(y.enable),j=(S,B)=>{l("warp_settings",Vo({...y,[S]:B}))},w=S=>{if(l("protocol",S),!S){l("tls",0),l("network","tcp");return}Eh.includes(S)?(l("tls",1),s.tls_settings||l("tls_settings",{})):S==="shadowsocks"?l("tls",0):S==="vmess"&&Number(s.tls??0)===2&&l("tls",1);const B=Ah(S);(B.length===0||!B.includes(Ve(s,"network","tcp")))&&l("network","tcp"),S!=="vless"&&(l("flow",""),l("encryption",""),l("encryption_settings",{})),S!=="hysteria2"&&(l("obfs",null),l("obfs_password",""),l("up_mbps",0),l("down_mbps",0)),S!=="anytls"&&l("padding_scheme","")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.zicnodeConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.nodeProtocol"),required:!0}),t.jsxs("select",{className:"config-input",value:h,onChange:S=>w(S.target.value),children:[t.jsx("option",{value:"",children:m("node.selectNodeProtocol")}),uj.map(S=>t.jsx("option",{value:S,children:S},S))]})]}),h?t.jsxs(t.Fragment,{children:[Gd(h)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:m("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?m("node.editConfig"):void 0,onAction:u}),t.jsxs("select",{className:"config-input",value:Ve(s,"tls",Eh.includes(h)?"1":"0"),onChange:S=>{const B=Number(S.target.value);l("tls",B),B!==0&&!s.tls_settings&&l("tls_settings",{})},children:[kj(h)?t.jsx("option",{value:"0",children:m("node.none")}):null,t.jsx("option",{value:"1",children:m("node.useTls")}),Yd(h)?t.jsx("option",{value:"2",children:m("node.reality")}):null]})]}):null,Cj(h)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:m("node.transportProtocol"),required:!0,actionText:m("node.editConfig"),onAction:d}),t.jsx("select",{className:"config-input",value:C.includes(Ve(s,"network","tcp"))?Ve(s,"network","tcp"):"tcp",onChange:S=>{l("network",S.target.value),s.network_settings||l("network_settings",{})},children:C.map(S=>t.jsx("option",{value:S,children:S},S))})]}):null]}):null,t.jsx("div",{className:"form-section-title",children:m("node.warpOutbound")}),t.jsx(Wn,{label:m("node.warpEnable"),checked:g,onChange:S=>l("warp_settings",Vo({...y,enable:S}))}),g?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpMode")}),t.jsxs("select",{className:"config-input",value:String(y.mode??"auto"),onChange:S=>j("mode",S.target.value),children:[t.jsx("option",{value:"auto",children:m("node.warpModeAuto")}),t.jsx("option",{value:"manual",children:m("node.warpModeManual")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpFailPolicy")}),t.jsxs("select",{className:"config-input",value:String(y.fail_policy??"direct"),onChange:S=>j("fail_policy",S.target.value),children:[t.jsx("option",{value:"direct",children:m("node.warpFailDirect")}),t.jsx("option",{value:"block",children:m("node.warpFailBlock")})]})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpMtu")}),t.jsx("input",{className:"config-input",type:"number",min:"576",value:String(y.mtu??1280),onChange:S=>j("mtu",Number(S.target.value))})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpDomainStrategy")}),t.jsx("select",{className:"config-input",value:String(y.domain_strategy??"ForceIPv4v6"),onChange:S=>j("domain_strategy",S.target.value),children:Qx.map(S=>t.jsx("option",{value:S,children:S},S))})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:m("node.warpPrivateKey")}),t.jsx("input",{className:"config-input",value:String(y.private_key??""),onChange:S=>j("private_key",S.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpPeerPublicKey")}),t.jsx("input",{className:"config-input",value:String(y.peer_public_key??""),onChange:S=>j("peer_public_key",S.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpEndpoint")}),t.jsx("input",{className:"config-input",value:String(y.endpoint??"engage.cloudflareclient.com:2408"),onChange:S=>j("endpoint",S.target.value)})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpAddresses")}),t.jsx("input",{className:"config-input",value:Dh(y.addresses),onChange:S=>j("addresses",S.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpReserved")}),t.jsx("input",{className:"config-input",value:Dh(y.reserved),onChange:S=>j("reserved",S.target.value)})]})]})]}):null,h==="vless"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.encryption"),actionText:Ve(s,"encryption")?m("node.editConfig"):void 0,onAction:()=>o(m("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ve(s,"encryption"),onChange:S=>l("encryption",S.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.flow")}),t.jsxs("select",{className:"config-input",value:Ve(s,"flow"),onChange:S=>l("flow",S.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),h==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:m("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Ve(s,"cipher","aes-128-gcm"),onChange:S=>l("cipher",S.target.value),children:$x.map(S=>t.jsx("option",{value:S,children:S},S))})]}),h==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.hysteriaConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ve(s,"up_mbps","0"),onChange:S=>l("up_mbps",Number(S.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ve(s,"down_mbps","0"),onChange:S=>l("down_mbps",Number(S.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.obfsMethod")}),t.jsxs("select",{className:"config-input",value:Ve(s,"obfs"),onChange:S=>l("obfs",S.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"salamander",children:"salamander"})]})]}),Ve(s,"obfs")==="salamander"?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ve(s,"obfs_password"),onChange:S=>l("obfs_password",S.target.value),placeholder:m("node.autoGenHelp")})]}):null]})]}),h==="tuic"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.tuicConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ve(s,"udp_relay_mode","native"),onChange:S=>l("udp_relay_mode",S.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ve(s,"congestion_control","bbr"),onChange:S=>l("congestion_control",S.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(Wn,{label:m("node.disableSni"),checked:s.disable_sni===1,onChange:S=>l("disable_sni",S?1:0)}),t.jsx(Wn,{label:m("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:S=>l("zero_rtt_handshake",S?1:0)})]}),h==="anytls"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:m("node.paddingScheme"),actionText:m("node.editConfig"),onAction:()=>o(m("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const qh={vmess:t0,vless:d0,trojan:Od,shadowsocks:Jd,hysteria:Pv,tuic:Dv,anytls:gs,v2node:xh,zicnode:xh},Qj={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},Xj={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function ii(s){return Qj[s]??Xj}function Zj({draft:s,config:l,onCopy:o,t:d}){const u=Number(s.id??0),m=u>0?Aj(u,l):"",h=!l.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),u>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:m}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(m),children:[t.jsx(hs,{size:15}),d("node.copyInstallCommand")]}),h?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function Kj(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState([]),[h,C]=f.useState([]),[y,g]=f.useState(null),[j,w]=f.useState(null),[S,B]=f.useState(!0),[I,$]=f.useState(!1),[A,Q]=f.useState(""),[R,L]=f.useState(""),[ae,P]=f.useState(1),[se,D]=f.useState(()=>xj()),[G,ne]=f.useState(!1),[be,_]=f.useState({}),[H,re]=f.useState({apiHost:eu,apiKey:""}),[Y,de]=f.useState(!1),[z,V]=f.useState(""),[T,pe]=f.useState(null),[k,N]=f.useState(null),[M,ee]=f.useState(null),me=(U,ie)=>{U.dataTransfer.effectAllowed="move",N(ie)},Se=(U,ie)=>{if(U.preventDefault(),k===null||k===ie)return;const W=[...o],Ce=W[k];W.splice(k,1),W.splice(ie,0,Ce),N(ie),d(W)},Me=()=>{N(null)},Ue=(U,ie)=>{G&&ee(ie)},Je=U=>{if(!G||M===null)return;U.cancelable&&U.preventDefault();const ie=U.touches[0],W=document.elementFromPoint(ie.clientX,ie.clientY);if(!W)return;const Ce=W.closest(".mobile-node-card");if(!Ce)return;const Ye=Ce.getAttribute("data-index");if(Ye===null)return;const $e=Number(Ye);if($e!==M&&$e>=0&&$e<o.length){const b=[...o],oe=b[M];b.splice(M,1),b.splice($e,0,oe),ee($e),d(b)}},Re=()=>{ee(null)};f.useEffect(()=>{P(1)},[z,se]),f.useEffect(()=>{try{window.localStorage.setItem(Xx,String(se))}catch{}},[se]);const et=o.filter(U=>{const ie=z.toLowerCase().trim();return ie?U.name.toLowerCase().includes(ie)||U.host.toLowerCase().includes(ie)||String(U.id).includes(ie)||U.type.toLowerCase().includes(ie):!0}),ft=Math.ceil(et.length/se),Qt=et.slice((ae-1)*se,ae*se);function Vt(U,ie){return ie<=7?Array.from({length:ie},(W,Ce)=>Ce+1):U<=4?[1,2,3,4,5,"...",ie]:U>=ie-3?[1,"...",ie-4,ie-3,ie-2,ie-1,ie]:[1,"...",U-1,U,U+1,"...",ie]}const xt=Vt(ae,ft),Xt=async()=>{var U,ie;$(!0),Q(""),L("");try{const W={};o.forEach((Ce,Ye)=>{W[Ce.type]||(W[Ce.type]={}),W[Ce.type][String(Ce.id)]=Ye+1}),await E1(W),(U=window.showToast)==null||U.call(window,l("node.saveSortSuccess"),"success"),ne(!1),await ye()}catch(W){Q(W instanceof Error?W.message:l("node.saveSortFailed")),(ie=window.showToast)==null||ie.call(window,W instanceof Error?W.message:l("node.saveSortFailed"),"error")}finally{$(!1)}},ot=async()=>{ne(!1),await we()},Jt=()=>et.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ae===1,onClick:()=>P(U=>Math.max(U-1,1)),children:"<"}),xt.map((U,ie)=>U==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${ie}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${ae===U?"active":""}`,onClick:()=>P(Number(U)),children:U},`page-${U}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ae===ft||ft===0,onClick:()=>P(U=>Math.min(U+1,ft)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsx("select",{className:"pagination-size-select",value:se,onChange:U=>{const ie=Number(U.target.value);Zx(ie)&&D(ie)},children:Ko.map(U=>t.jsxs("option",{value:U,children:[U," / ",l("common.perPage")]},U))})})]}),[bt,Nt]=f.useState(null),[je,Mt]=f.useState(!1),[De,fn]=f.useState(""),[rt,on]=f.useState(!1),[Dn,hn]=f.useState(!1);async function F(U){var W,Ce;U.preventDefault();const ie=De.trim();if(!(!ie||!y)){on(!0),Q(""),L("");try{await Tx({name:ie});const Ye=await bs();m(Ye);const $e=Ye.filter(b=>b.name===ie).sort((b,oe)=>oe.id-b.id)[0];if($e){const b=y.group_id??[];b.includes($e.id)||un("group_id",[...b,$e.id])}fn(""),Mt(!1),(W=window.showToast)==null||W.call(window,l("node.groupCreateSuccess"),"success")}catch(Ye){Q(Ye instanceof Error?Ye.message:l("node.groupCreateFailed")),(Ce=window.showToast)==null||Ce.call(window,Ye instanceof Error?Ye.message:l("node.groupCreateFailed"),"error")}finally{on(!1)}}}const ze=(U,ie)=>{if(!y)return;let W=y[ie];if(typeof W=="string"&&W.trim())try{W=JSON.parse(W)}catch{}["tlsSettings","tls_settings"].includes(ie)&&Pn(String(y._type))&&(W=za(W,Number(y.tls??0))),Nt({title:U,key:ie,value:W&&typeof W=="object"?W:{}})},we=f.useCallback(async()=>{var U,ie,W,Ce,Ye;B(!0),Q("");try{const[$e,b,oe,ue]=await Promise.all([Nh(),bs(),Mx(),Cx()]);d($e.data),m(b),C(oe);const _e=Oh((U=ue.site)==null?void 0:U.app_url);re({apiHost:Oh((ie=ue.server)==null?void 0:ie.server_api_url,_e),apiKey:Fo((W=ue.server)==null?void 0:W.server_token)}),de(tu(((Ce=ue.subscribe)==null?void 0:Ce.device_hwid_available)??((Ye=ue.subscribe)==null?void 0:Ye.device_hwid_enable)))}catch($e){Q($e instanceof Error?$e.message:l("knowledge.loadFailed"))}finally{B(!1)}},[]),ye=f.useCallback(async()=>{try{const U=await Nh();d(U.data)}catch(U){console.error("Refresh nodes failed",U)}},[]);async function Xe(U){var W;const ie=await di(U);(W=window.showToast)==null||W.call(window,l(ie?"node.installCopied":"common.copyFailed"),ie?"success":"error")}f.useEffect(()=>{if(!Ht()){s.replace("/login");return}we()},[we,s]);function He(U){g(Hh(U)),w(null),Q(""),L("")}function qe(U){g(Hh(U.type,U)),Q(""),L("")}function Ze(U){!Y||Number(U.online??0)<=0||s.push(`/device?node_type=${encodeURIComponent(U.type)}&node_id=${encodeURIComponent(String(U.id))}`)}function nt(U,ie){const W=Number(U.online??0),Ce=Y&&W>0,Ye=`${ie==="mobile"?"mobile-badge-pill":"online-badge"}${Ce?" online-badge-link":""}`,$e=ie==="mobile"?12:13,b={...ie==="mobile"?{marginRight:4}:{},color:W>0?"#10b981":"var(--muted)",opacity:W>0?1:.6},oe=t.jsxs(t.Fragment,{children:[t.jsx(Nx,{size:$e,style:b}),W]});return Ce?t.jsx("button",{className:Ye,type:"button",title:l("node.viewOnlineDevices"),onClick:()=>Ze(U),children:oe}):t.jsx("span",{className:Ye,children:oe})}async function dn(U){var $e,b,oe;if(U.preventDefault(),!y)return;$(!0),Q(""),L("");const ie=String(y._type),W={...y};if(Pn(ie)&&!Fo(W.protocol)){Q(l("node.protocolRequired")),($e=window.showToast)==null||$e.call(window,l("node.protocolRequired"),"error"),$(!1);return}for(const ue of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete W[ue];if(W.padding_scheme!==void 0&&W.padding_scheme!==null&&typeof W.padding_scheme!="string"&&(W.padding_scheme=JSON.stringify(W.padding_scheme)),W.padding_scheme)try{const ue=JSON.parse(String(W.padding_scheme));if(typeof ue!="object"||ue===null)throw new Error("Invalid JSON array or object")}catch(ue){Q("Invalid Padding Scheme configuration: "+(ue instanceof Error?ue.message:"JSON error")),$(!1);return}const Ce=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const ue of Ce)(W[ue]===""||W[ue]===null||W[ue]===void 0)&&delete W[ue];if(Pn(ie)){const ue=String(W.protocol??""),_e=Number(W.tls??0);W.warp_settings=Vo(W.warp_settings),Gd(ue)?!Yd(ue)&&_e===2?(W.tls=1,W.tls_settings=za(W.tls_settings,1)):W.tls_settings=za(W.tls_settings,_e):(W.tls=0,W.tls_settings={})}const Ye=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings","warp_settings"];for(const ue of Ye){const _e=W[ue];(_e==null||typeof _e=="object"&&Object.keys(_e).length===0)&&delete W[ue]}W.port!==void 0&&(W.port=Number(W.port)),W.server_port!==void 0&&(W.server_port=Number(W.server_port)),W.tls!==void 0&&(W.tls=Number(W.tls)),W.rate!==void 0&&(W.rate=Number(W.rate));try{await k1(ie,W),g(null),(b=window.showToast)==null||b.call(window,l("node.saveSuccess"),"success"),await ye()}catch(ue){Q(ue instanceof Error?ue.message:l("node.saveFailed")),(oe=window.showToast)==null||oe.call(window,ue instanceof Error?ue.message:l("node.saveFailed"),"error")}finally{$(!1)}}async function Ct(U){const ie=[...o];d(W=>W.map(Ce=>Ce.id===U.id&&Ce.type===U.type?{...Ce,show:U.show?0:1}:Ce));try{await z1(U.type,U.id,U.show?0:1),await ye()}catch(W){d(ie),Q(W instanceof Error?W.message:l("node.updateFailed"))}}async function In(U){var ie,W;try{await T1(U.type,U.id),(ie=window.showToast)==null||ie.call(window,l("node.copySuccess"),"success"),await ye()}catch(Ce){Q(Ce instanceof Error?Ce.message:l("node.copyFailed")),(W=window.showToast)==null||W.call(window,Ce instanceof Error?Ce.message:l("node.copyFailed"),"error")}}async function Lt(U){var ie;(ie=window.showConfirm)==null||ie.call(window,{message:l("node.deleteConfirm",{name:U.name}),onConfirm:async()=>{var Ce,Ye;const W=[...o];d($e=>$e.filter(b=>!(b.id===U.id&&b.type===U.type))),Q("");try{await C1(U.type,U.id),(Ce=window.showToast)==null||Ce.call(window,l("node.deleteSuccess"),"success"),await ye()}catch($e){d(W),Q($e instanceof Error?$e.message:l("node.deleteFailed")),(Ye=window.showToast)==null||Ye.call(window,$e instanceof Error?$e.message:l("node.deleteFailed"),"error")}}})}const un=(U,ie)=>g(W=>{if(!W)return null;const Ce={...W,[U]:ie};if(!Pn(String(Ce._type)))return Ce;if(U==="tls_settings"&&(Ce.tls_settings=za(ie,Number(Ce.tls??0))),U==="tls"&&(Ce.tls_settings=za(Ce.tls_settings,Number(ie))),U==="warp_settings"&&(Ce.warp_settings=Vo(ie)),U==="protocol"){const Ye=String(ie);Gd(Ye)?!Yd(Ye)&&Number(Ce.tls??0)===2?(Ce.tls=1,Ce.tls_settings=za(Ce.tls_settings,1)):Ce.tls_settings=za(Ce.tls_settings,Number(Ce.tls??0)):(Ce.tls=0,Ce.tls_settings={})}return Ce}),Zn=y?String(y._type):"",pn=zj(Zn);return t.jsxs(Ft,{title:l("node.title"),subtitle:l("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>w(j?null:"show"),title:l("node.createNode"),children:t.jsx(Mn,{size:18})}),j!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>w(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),Bd.map(U=>{const ie=ii(U.value),W=qh[U.value]||Qo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{He(U.value),w(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:ie==null?void 0:ie.bg,backgroundColor:ie==null?void 0:ie.rowBg},children:t.jsx(W,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(ie==null?void 0:ie.bg)??"var(--surface-soft)",color:(ie==null?void 0:ie.text)??"#ffffff"},children:U.label})]},U.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:z,onChange:U=>V(U.target.value),placeholder:`${l("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${G?"success-btn":""}`,type:"button",onClick:G?Xt:()=>ne(!0),disabled:I,children:l(G?I?"node.saving":"node.saveOrder":"node.editSortOrder")}),G&&t.jsx("button",{className:"ghost-button",type:"button",onClick:ot,children:l("common.cancel")})]})]}),A?t.jsx("div",{className:"form-error",children:A}):null,R?t.jsx("div",{className:"form-success",children:R}):null,S&&o.length===0?t.jsx(jt,{label:l("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[l("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",l("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",l("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",l("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:l("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:l("node.address")}),t.jsx("th",{className:"mobile-hide",children:l("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:l("node.colRate")}),t.jsx("th",{children:l("node.colGroups")}),t.jsx("th",{children:l(G?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[Qt.map(U=>{const ie=o.findIndex(W=>W.id===U.id&&W.type===U.type);return t.jsxs("tr",{draggable:G,onDragStart:W=>me(W,ie),onDragOver:W=>Se(W,ie),onDragEnd:Me,className:k===ie?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:ii(U.type).bg,color:ii(U.type).text,border:`1px solid ${ii(U.type).border}`},children:U.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void Ct(U),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${U.available_status??0}`,title:U.available_status===2?l("node.statusNormal"):U.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("strong",{children:U.name})]})}),t.jsx("td",{children:nt(U,"desktop")}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:U.host})}),t.jsx("td",{className:"mobile-hide",children:String(U.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[U.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const W=U.group_id??[],Ce=be[`${U.type}-${U.id}`],Ye=W.map(oe=>{const ue=u.find(_e=>Number(_e.id)===Number(oe));return t.jsx("span",{className:"tag",children:(ue==null?void 0:ue.name)??`#${oe}`},oe)});if(W.length<=3||Ce)return t.jsxs(t.Fragment,{children:[Ye,W.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>_(oe=>({...oe,[`${U.type}-${U.id}`]:!1})),children:l("node.collapse")})]});const $e=Ye.slice(0,3),b=W.length-3;return t.jsxs(t.Fragment,{children:[$e,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>_(oe=>({...oe,[`${U.type}-${U.id}`]:!0})),children:["+",b,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:l("node.allPermissionGroups",{count:W.length})}),Ye]})]})]})})()})}),t.jsx("td",{children:G?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(us,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(T==null?void 0:T.id)===U.id&&(T==null?void 0:T.type)===U.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>pe((T==null?void 0:T.id)===U.id&&(T==null?void 0:T.type)===U.type?null:{id:U.id,type:U.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(T==null?void 0:T.id)===U.id&&(T==null?void 0:T.type)===U.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>pe(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{qe(U),pe(null)},children:[t.jsx(Kt,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{In(U),pe(null)},children:[t.jsx(hs,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Lt(U),pe(null)},children:[t.jsx(en,{size:14})," ",l("common.delete")]})]})]})]})})]},`${U.type}-${U.id}`)}),!S&&et.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")})})}):null]})]})}),Jt()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>w(j?null:"show"),title:l("node.createNode"),children:t.jsx(Mn,{size:20})}),j!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>w(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),Bd.map(U=>{const ie=ii(U.value),W=qh[U.value]||Qo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{He(U.value),w(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:ie==null?void 0:ie.bg,backgroundColor:ie==null?void 0:ie.rowBg},children:t.jsx(W,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(ie==null?void 0:ie.bg)??"var(--surface-soft)",color:(ie==null?void 0:ie.text)??"#ffffff"},children:U.label})]},U.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:z,onChange:U=>V(U.target.value),placeholder:`${l("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${G?"active":""}`,type:"button",onClick:()=>ne(!G),title:l("node.editSortOrder"),children:t.jsx(us,{size:20})})]}),G&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:l("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:ot,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void Xt(),disabled:I,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l(I?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[Qt.map(U=>{const ie=o.findIndex(W=>W.id===U.id&&W.type===U.type);return t.jsxs("div",{className:`mobile-node-card ${k===ie||M===ie?"dragging":""}`,draggable:G,onDragStart:W=>me(W,ie),onDragOver:W=>Se(W,ie),onDragEnd:Me,onTouchStart:W=>Ue(W,ie),onTouchMove:Je,onTouchEnd:Re,"data-index":ie,style:G?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${U.available_status??0}`,title:U.available_status===2?l("node.statusNormal"):U.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:U.name})]}),t.jsx("div",{className:"card-header-right",children:G?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(us,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${U.show===1?"active":""}`,onClick:()=>void Ct(U),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(T==null?void 0:T.id)===U.id&&(T==null?void 0:T.type)===U.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>pe((T==null?void 0:T.id)===U.id&&(T==null?void 0:T.type)===U.type?null:{id:U.id,type:U.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(T==null?void 0:T.id)===U.id&&(T==null?void 0:T.type)===U.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>pe(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{qe(U),pe(null)},children:[t.jsx(Kt,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{In(U),pe(null)},children:[t.jsx(hs,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Lt(U),pe(null)},children:[t.jsx(en,{size:14})," ",l("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[U.host,":",U.port||U.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:ii(U.type).bg,color:ii(U.type).text,border:`1px solid ${ii(U.type).border}`},children:U.id}),nt(U,"mobile"),t.jsxs("span",{className:"mobile-badge-pill",children:[U.rate," x"]})]})]},`${U.type}-${U.id}`)}),!S&&et.length===0&&t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")}),Jt()]}),y!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:y.id?l("node.editNodeTitle",{type:pn}):l("node.createNodeTitle",{type:pn})}),t.jsx("p",{children:l("node.configureFieldsSubtitle",{type:pn})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:dn,children:[t.jsx(Uj,{draft:y,set:un,groups:u,routes:h,nodes:o,onOpenJson:ze,onAddGroup:()=>Mt(!0),onOpenTransportConfig:()=>hn(!0)}),Pn(Zn)?t.jsx(Zj,{draft:y,config:H,onCopy:U=>void Xe(U),t:l}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(An,{size:16}),l(I?"node.saving":"common.save")]})]})]})]})}),bt!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:bt.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(bt.key)?l("node.connectionSecurityEditorSubtitle"):l("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Nt(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(bt.key)?t.jsx(Oj,{initialValue:bt.value,isSnakeCase:bt.key==="tls_settings",tlsMode:Sj(y),nodeType:String((y==null?void 0:y._type)??""),onCancel:()=>Nt(null),onSave:U=>{un(bt.key,U),Nt(null)}}):t.jsx(Fx,{initialValue:bt.value,onCancel:()=>Nt(null),onSave:U=>{un(bt.key,U),Nt(null)}})})]})}),je&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.addNewGroupTitle")}),t.jsx("p",{children:l("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Mt(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{onSubmit:F,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:l("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:De,onChange:U=>fn(U.target.value),placeholder:l("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Mt(!1),disabled:rt,children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:rt||!De.trim(),children:l(rt?"node.saving":"common.confirm")})]})]})]})}),Dn&&y!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.transportConfigTitle",{network:String(y.network??"tcp").toUpperCase()})}),t.jsx("p",{children:l("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>hn(!1),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(Rj,{draft:y,set:un,onCancel:()=>hn(!1),onSave:()=>hn(!1)})})]})})]})}function Fj(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,C]=f.useState(!0),[y,g]=f.useState(!1),[j,w]=f.useState(""),S=f.useCallback(async()=>{C(!0),w("");try{d(await bs())}catch(A){w(A instanceof Error?A.message:l("serverGroup.loadFailed"))}finally{C(!1)}},[l]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}S()},[S,s]);function B(A){m({id:A==null?void 0:A.id,name:(A==null?void 0:A.name)??""}),w("")}async function I(A){var Q;if(A.preventDefault(),!!u){g(!0),w("");try{await Tx(u),m(null),(Q=window.showToast)==null||Q.call(window,l("serverGroup.saveSuccess"),"success"),await S()}catch(R){w(R instanceof Error?R.message:l("serverGroup.saveFailed"))}finally{g(!1)}}}async function $(A){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:l("serverGroup.deleteConfirm"),onConfirm:async()=>{var R,L;w("");try{await A0(A),(R=window.showToast)==null||R.call(window,l("serverGroup.deleteSuccess"),"success"),await S()}catch(ae){w(ae instanceof Error?ae.message:l("serverGroup.deleteFailed")),(L=window.showToast)==null||L.call(window,ae instanceof Error?ae.message:l("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(Ft,{title:l("serverGroup.title"),subtitle:l("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverGroup.heading")}),t.jsx("p",{children:l("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:S,disabled:h,children:[t.jsx(Et,{size:16}),l(h?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>B(),children:[t.jsx(Mn,{size:16}),l("serverGroup.add")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,h&&o.length===0?t.jsx(jt,{label:l("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverGroup.id")}),t.jsx("th",{children:l("serverGroup.name")}),t.jsx("th",{children:l("serverGroup.userCount")}),t.jsx("th",{children:l("serverGroup.serverCount")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:A.id}),t.jsx("td",{children:t.jsx("strong",{children:A.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Xo,{size:14}),A.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Qo,{size:14}),A.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>B(A),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void $(A.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},A.id)),!h&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:l("serverGroup.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?l("serverGroup.edit"):l("serverGroup.add")}),t.jsx("p",{children:l("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:I,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:u.name,onChange:A=>m({...u,name:A.target.value}),placeholder:l("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(An,{size:16}),l(y?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function Vj(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function Jj(s){var l;return((l=Ex.find(o=>o.value===s))==null?void 0:l.label)??s}function Pj(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,C]=f.useState(!0),[y,g]=f.useState(!1),[j,w]=f.useState(""),S=f.useCallback(async()=>{C(!0),w("");try{d(await Mx())}catch(A){w(A instanceof Error?A.message:l("serverRoute.loadFailed"))}finally{C(!1)}},[l]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}S()},[S,s]);function B(A){m(Vj(A)),w("")}async function I(A){var R;if(A.preventDefault(),!u)return;g(!0),w("");const Q=u.action==="default_out"?[]:u.match.split(`
`).map(L=>L.trim()).filter(Boolean);try{await D0({id:u.id,remarks:u.remarks,match:Q,action:u.action,action_value:u.action_value||null}),m(null),(R=window.showToast)==null||R.call(window,l("serverRoute.saveSuccess"),"success"),await S()}catch(L){w(L instanceof Error?L.message:l("serverRoute.saveFailed"))}finally{g(!1)}}async function $(A){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:l("serverRoute.deleteConfirm"),onConfirm:async()=>{var R,L;w("");try{await O0(A),(R=window.showToast)==null||R.call(window,l("serverRoute.deleteSuccess"),"success"),await S()}catch(ae){w(ae instanceof Error?ae.message:l("serverRoute.deleteFailed")),(L=window.showToast)==null||L.call(window,ae instanceof Error?ae.message:l("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(Ft,{title:l("serverRoute.title"),subtitle:l("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverRoute.heading")}),t.jsx("p",{children:l("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:S,disabled:h,children:[t.jsx(Et,{size:16}),l(h?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>B(),children:[t.jsx(Mn,{size:16}),l("serverRoute.add")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,h&&o.length===0?t.jsx(jt,{label:l("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverRoute.id")}),t.jsx("th",{children:l("serverRoute.remarks")}),t.jsx("th",{children:l("serverRoute.matchValues")}),t.jsx("th",{children:l("serverRoute.action")}),t.jsx("th",{children:l("serverRoute.actionValue")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:A.id}),t.jsx("td",{children:t.jsx("strong",{children:A.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(A.match)?A.match:[]).slice(0,3).map((Q,R)=>t.jsx("span",{className:"tag",children:Q},R)),Array.isArray(A.match)&&A.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",A.match.length-3]}):null,!Array.isArray(A.match)||A.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:Jj(A.action)})}),t.jsx("td",{children:A.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>B(A),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void $(A.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},A.id)),!h&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("serverRoute.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?l("serverRoute.edit"):l("serverRoute.add")}),t.jsx("p",{children:l("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:I,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:u.remarks,onChange:A=>m({...u,remarks:A.target.value}),placeholder:l("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.action")}),t.jsx("select",{className:"config-input",value:u.action,onChange:A=>m({...u,action:A.target.value}),children:Ex.map(A=>t.jsx("option",{value:A.value,children:A.label},A.value))})]}),u.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:u.match,onChange:A=>m({...u,match:A.target.value}),placeholder:l("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:u.action_value,onChange:A=>m({...u,action_value:A.target.value}),placeholder:l("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(An,{size:16}),l(y?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function Wj(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",allow_subscribe_url:(s==null?void 0:s.allow_subscribe_url)===0?"0":"1",force_update:!1}}function Ij(s){const l=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:l(s.month_price),quarter_price:l(s.quarter_price),half_year_price:l(s.half_year_price),year_price:l(s.year_price),two_year_price:l(s.two_year_price),three_year_price:l(s.three_year_price),onetime_price:l(s.onetime_price),reset_price:l(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),allow_subscribe_url:s.allow_subscribe_url==="0"?0:1,force_update:s.force_update}}function cn(s){return s==null?"—":En(s)}function ew(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function tw(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState([]),[h,C]=f.useState(null),[y,g]=f.useState(!0),[j,w]=f.useState(!1),[S,B]=f.useState(""),[I,$]=f.useState(""),[A,Q]=f.useState(null),[R,L]=f.useState(null),ae=(k,N)=>{k.dataTransfer.effectAllowed="move",Q(N)},P=(k,N)=>{if(k.preventDefault(),A===null||A===N)return;const M=[...o],ee=M[A];M.splice(A,1),M.splice(N,0,ee),Q(N),d(M)},se=async()=>{Q(null);try{await wh(o.map(k=>k.id)),await be()}catch(k){B(k instanceof Error?k.message:l("plan.sortFailed")),await be()}},D=(k,N)=>{L(N)},G=k=>{if(R===null)return;const N=k.touches[0],M=document.elementFromPoint(N.clientX,N.clientY);if(!M)return;const ee=M.closest("tr, [data-index]");if(!ee)return;const me=ee.getAttribute("data-index");if(me===null)return;const Se=Number(me);if(Se!==R&&Se>=0&&Se<o.length){const Me=[...o],Ue=Me[R];Me.splice(R,1),Me.splice(Se,0,Ue),L(Se),d(Me)}},ne=async()=>{if(R!==null){L(null);try{await wh(o.map(k=>k.id)),await be()}catch(k){B(k instanceof Error?k.message:l("plan.sortFailed")),await be()}}},be=f.useCallback(async()=>{g(!0),B("");try{const[k,N]=await Promise.all([mi(),bs()]);d(k),m(N)}catch(k){B(k instanceof Error?k.message:l("plan.loadFailed"))}finally{g(!1)}},[l]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}be()},[be,s]);function _(k){C(Wj(k)),B(""),$("")}async function H(k){var N,M;if(k.preventDefault(),!!h){w(!0),B(""),$("");try{await U0(Ij(h)),C(null),(N=window.showToast)==null||N.call(window,l("plan.saveSuccess"),"success"),await be()}catch(ee){(M=window.showToast)==null||M.call(window,ee instanceof Error?ee.message:l("plan.saveFailed"),"error")}finally{w(!1)}}}async function re(k,N){var M;try{await fd(k,{show:N?0:1}),await be()}catch(ee){(M=window.showToast)==null||M.call(window,ee instanceof Error?ee.message:l("plan.toggleFailed"),"error")}}async function Y(k,N){var M;try{await fd(k,{renew:N?0:1}),await be()}catch(ee){(M=window.showToast)==null||M.call(window,ee instanceof Error?ee.message:l("plan.toggleFailed"),"error")}}async function de(k,N){var M;try{await fd(k,{allow_subscribe_url:N?0:1}),await be()}catch(ee){(M=window.showToast)==null||M.call(window,ee instanceof Error?ee.message:l("plan.toggleFailed"),"error")}}async function z(k){var N;(N=window.showConfirm)==null||N.call(window,{message:l("plan.deleteConfirm"),onConfirm:async()=>{var M,ee;B(""),$("");try{await R0(k),(M=window.showToast)==null||M.call(window,l("plan.deleteSuccess"),"success"),await be()}catch(me){(ee=window.showToast)==null||ee.call(window,me instanceof Error?me.message:l("plan.deleteFailed"),"error")}}})}function V(k){var N;return((N=u.find(M=>M.id===k))==null?void 0:N.name)??`#${k}`}function T(k){return Number(k.allow_subscribe_url??1)===1}function pe(k,N){C(M=>M&&{...M,[k]:N})}return t.jsxs(Ft,{title:l("plan.title"),subtitle:l("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("plan.heading")}),t.jsx("p",{children:l("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:be,disabled:y,children:[t.jsx(Et,{size:16}),l(y?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>_(),children:[t.jsx(Mn,{size:16}),l("plan.add")]})]})]}),S?t.jsx("div",{className:"form-error",children:S}):null,I?t.jsx("div",{className:"form-success",children:I}):null,y&&o.length===0?t.jsx(jt,{label:l("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:l("plan.show")}),t.jsx("th",{children:l("plan.renew")}),t.jsx("th",{children:l("plan.allowSubscribeUrl")}),t.jsx("th",{children:l("plan.name")}),t.jsx("th",{children:l("plan.users")}),t.jsx("th",{children:l("plan.group")}),t.jsx("th",{children:l("plan.pricing")}),t.jsx("th",{children:l("plan.traffic")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((k,N)=>t.jsxs("tr",{draggable:!0,onDragStart:M=>ae(M,N),onDragOver:M=>P(M,N),onDragEnd:se,onTouchStart:M=>D(M,N),onTouchMove:G,onTouchEnd:ne,"data-index":N,className:A===N||R===N?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:l("plan.sort"),children:t.jsx(us,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:k.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${k.show?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),re(k.id,k.show)},title:k.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${k.renew?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),Y(k.id,k.renew)},title:k.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${T(k)?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),de(k.id,T(k)?1:0)},title:T(k)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:k.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Xo,{size:14}),k.count??0]})}),t.jsx("td",{children:V(k.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[k.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:cn(k.month_price)})]}),k.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:cn(k.quarter_price)})]}),k.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:cn(k.half_year_price)})]}),k.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:cn(k.year_price)})]}),k.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:cn(k.two_year_price)})]}),k.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:cn(k.three_year_price)})]}),k.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:cn(k.onetime_price)})]}),k.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:cn(k.reset_price)})]})]})}),t.jsxs("td",{children:[k.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:M=>{M.stopPropagation(),_(k)},children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:M=>{M.stopPropagation(),z(k.id)},children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},k.id)),!y&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:l("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((k,N)=>t.jsxs("div",{className:`mobile-node-card ${A===N||R===N?"dragging":""}`,draggable:!0,onDragStart:M=>ae(M,N),onDragOver:M=>P(M,N),onDragEnd:se,onTouchStart:M=>D(M,N),onTouchMove:G,onTouchEnd:ne,"data-index":N,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:l("plan.sort"),children:t.jsx(us,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:k.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:k.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:M=>{M.stopPropagation(),_(k)},children:[t.jsx(Kt,{size:12}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:M=>{M.stopPropagation(),z(k.id)},children:[t.jsx(en,{size:12}),l("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.show")}),t.jsx("button",{className:`admin-switch ${k.show?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),re(k.id,k.show)},title:k.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.renew")}),t.jsx("button",{className:`admin-switch ${k.renew?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),Y(k.id,k.renew)},title:k.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.allowSubscribeUrl")}),t.jsx("button",{className:`admin-switch ${T(k)?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),de(k.id,T(k)?1:0)},title:T(k)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(Xo,{size:12,style:{marginRight:4}}),k.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:V(k.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[k.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[k.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:cn(k.month_price)})]}),k.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:cn(k.quarter_price)})]}),k.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:cn(k.half_year_price)})]}),k.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:cn(k.year_price)})]}),k.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:cn(k.two_year_price)})]}),k.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:cn(k.three_year_price)})]}),k.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:cn(k.onetime_price)})]}),k.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:cn(k.reset_price)})]})]})]},k.id)),!y&&o.length===0?t.jsx("div",{className:"empty-state",children:l("plan.empty")}):null]}),h?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:h.id?l("plan.edit"):l("plan.add")}),t.jsx("p",{children:l("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>C(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:H,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:k=>pe("name",k.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:h.content,onChange:k=>pe("content",k.target.value),placeholder:l("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:h.group_id,onChange:k=>pe("group_id",k.target.value),children:[t.jsx("option",{value:"",children:l("plan.selectGroup")}),u.map(k=>t.jsx("option",{value:k.id,children:k.name},k.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:h.transfer_enable,onChange:k=>pe("transfer_enable",k.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:h.device_limit,onChange:k=>pe("device_limit",k.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:h.speed_limit,onChange:k=>pe("speed_limit",k.target.value),placeholder:l("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:h.capacity_limit,onChange:k=>pe("capacity_limit",k.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:h.reset_traffic_method,onChange:k=>pe("reset_traffic_method",k.target.value),children:ew(l).map(k=>t.jsx("option",{value:k.value,children:k.label},k.value))})]})]}),t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:h.allow_subscribe_url==="1",onChange:k=>pe("allow_subscribe_url",k.target.checked?"1":"0")}),t.jsx("span",{children:l("plan.allowSubscribeUrl")})]}),t.jsx("h3",{className:"form-section-title",children:l("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.month_price,onChange:k=>pe("month_price",k.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.quarter_price,onChange:k=>pe("quarter_price",k.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.half_year_price,onChange:k=>pe("half_year_price",k.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.year_price,onChange:k=>pe("year_price",k.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.two_year_price,onChange:k=>pe("two_year_price",k.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.three_year_price,onChange:k=>pe("three_year_price",k.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.onetime_price,onChange:k=>pe("onetime_price",k.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.reset_price,onChange:k=>pe("reset_price",k.target.value),placeholder:"—"})]})]}),h.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:h.force_update,onChange:k=>pe("force_update",String(k.target.checked))}),t.jsx("span",{children:l("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>C(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(An,{size:16}),l(j?"plan.saving":"common.save")]})]})]})]})}):null]})}const yd="模糊",Bh={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Gh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Yh(s){const l=new Date(s*1e3),o=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),u=String(l.getDate()).padStart(2,"0"),m=String(l.getHours()).padStart(2,"0"),h=String(l.getMinutes()).padStart(2,"0");return`${o}/${d}/${u} ${m}:${h}`}function $h(s){const l=new Date(s*1e3),o=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),u=String(l.getDate()).padStart(2,"0"),m=String(l.getHours()).padStart(2,"0"),h=String(l.getMinutes()).padStart(2,"0"),C=String(l.getSeconds()).padStart(2,"0");return`${o}-${d}-${u} ${m}:${h}:${C}`}function Qh(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Xn(s){return`${En(Number(s??0))} ₫`}const Vx="adminzic_user_cache";function nw(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(Vx);return s?JSON.parse(s):{}}catch{return{}}}function aw(s){if(!(typeof window>"u"))try{sessionStorage.setItem(Vx,JSON.stringify(s))}catch{}}const fl=(s,l)=>`${s}:${l}`;function iw(){var fn,rt,on,Dn,hn;const s=Rt(),l=sa(),{t:o}=Qe(),d=f.useCallback(F=>{switch(F){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${F}`,cls:""}}},[o]),u=f.useCallback(F=>{const ze=`order.period.${F}`,we=o(ze);return we===ze?Gh[F]??F:we},[o]),[m,h]=f.useState([]),[C,y]=f.useState([]),[g,j]=f.useState({}),[w,S]=f.useState(0),[B,I]=f.useState(1),[$]=f.useState(15),[A,Q]=f.useState(""),[R,L]=f.useState("trade_no"),[ae,P]=f.useState(!0),[se,D]=f.useState(null),[G,ne]=f.useState(!1),[be,_]=f.useState(""),[H,re]=f.useState(""),[Y,de]=f.useState(null),[z,V]=f.useState(null),[T,pe]=f.useState(!1),[k,N]=f.useState(null),[M,ee]=f.useState(!1),[me,Se]=f.useState(()=>nw()),Me=f.useCallback((F,ze)=>{const we=fl(ze,F);V(null),de(ye=>ye===we?null:we)},[]),Ue=f.useCallback((F,ze)=>{const we=fl(ze,F);de(null),V(ye=>ye===we?null:we)},[]),Je=f.useCallback(F=>{const ze=Number(F.coupon_id??0);return ze?g[ze]??`#${ze}`:null},[g]);f.useEffect(()=>{if(!Y&&!z)return;const F=()=>{de(null),V(null)},ze=ye=>{const Xe=ye.target;Xe!=null&&Xe.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||F()},we=ye=>{ye.key==="Escape"&&F()};return document.addEventListener("pointerdown",ze),document.addEventListener("keydown",we),()=>{document.removeEventListener("pointerdown",ze),document.removeEventListener("keydown",we)}},[Y,z]),f.useEffect(()=>{const F=new Set;if(m.forEach(we=>{we.user_id&&!me[we.user_id]&&F.add(we.user_id),we.invite_user_id&&!me[we.invite_user_id]&&F.add(we.invite_user_id)}),k&&(k.user_id&&!me[k.user_id]&&F.add(k.user_id),k.invite_user_id&&!me[k.invite_user_id]&&F.add(k.invite_user_id)),F.size===0)return;const ze=Array.from(F);Promise.allSettled(ze.map(async we=>{try{const ye=await Dx(we);if(ye&&ye.data)return{id:we,email:ye.data.email,invite_user:ye.data.invite_user}}catch(ye){console.error(`Failed to fetch user ${we}:`,ye)}return null})).then(we=>{const ye={};we.forEach(Xe=>{var He;if(Xe.status==="fulfilled"&&Xe.value){const qe=Xe.value;ye[qe.id]={email:qe.email,invite_user_email:((He=qe.invite_user)==null?void 0:He.email)||null},qe.invite_user&&(ye[qe.invite_user.id]={email:qe.invite_user.email})}}),Object.keys(ye).length>0&&Se(Xe=>{const He={...Xe,...ye};return aw(He),He})})},[m,k,me]);const Re={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},et=f.useCallback(async(F=1,ze,we)=>{var ye,Xe;P(!0),_("");try{let He;if(ze)if(we==="email"){const nt=(ye=(await Ld(1,1,[{key:"email",condition:yd,value:ze}])).data)==null?void 0:ye[0];if(!nt){h([]),S(0),P(!1);return}He=[{key:"user_id",condition:"=",value:String(nt.id)}]}else if(we==="invite_user_email"){const nt=(Xe=(await Ld(1,1,[{key:"email",condition:yd,value:ze}])).data)==null?void 0:Xe[0];if(!nt){h([]),S(0),P(!1);return}He=[{key:"invite_user_id",condition:"=",value:String(nt.id)}]}else He=[{key:we||"trade_no",condition:we==="trade_no"||we==="user_id"||we==="invite_user_id"||we==="plan_id"||we==="status"?"=":yd,value:ze}];const qe=await H0({current:F,pageSize:$,filter:He});h(qe.data),S(qe.total)}catch(He){_(He instanceof Error?He.message:o("order.loadFailed"))}finally{P(!1)}},[$,o]),ft=f.useCallback(F=>{const ze=String(F);L("user_id"),Q(ze),pe(!0),I(1),et(1,ze,"user_id")},[et]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}const F=new URLSearchParams(l.search),ze=F.get("filter_email"),we=F.get("invite_user_email"),ye=F.get("user_id")||F.get("filter_user_id");let Xe="",He="trade_no";ye?(Xe=ye,He="user_id",L("user_id"),Q(ye),pe(!0)):ze?(Xe=ze,He="email",L("email"),Q(ze),pe(!0)):we&&(Xe=we,He="invite_user_email",L("invite_user_email"),Q(we),pe(!0)),et(1,Xe,He),mi().then(y).catch(()=>{}),Ax(1,1e3).then(qe=>{const Ze={};qe.data.forEach(nt=>{Ze[nt.id]=nt.code}),j(Ze)}).catch(()=>{})},[et,s,l.search]);function Qt(){I(1),et(1,A,R)}function Vt(){Q(""),I(1),et(1)}function xt(F){I(F),et(F,A,R)}async function Xt(F){var ze,we;de(null),V(null),_(""),re("");try{await L0(F),(ze=window.showToast)==null||ze.call(window,o("order.paidSuccess"),"success"),await et(B,A,R)}catch(ye){(we=window.showToast)==null||we.call(window,ye instanceof Error?ye.message:o("order.paidFailed"),"error")}}async function ot(F){var ze,we;de(null),V(null),_(""),re("");try{await q0(F),(ze=window.showToast)==null||ze.call(window,o("order.cancelSuccess"),"success"),await et(B,A,R)}catch(ye){(we=window.showToast)==null||we.call(window,ye instanceof Error?ye.message:o("order.cancelFailed"),"error")}}async function Jt(F,ze){var we,ye;de(null),V(null),_(""),re("");try{await B0(F,ze),(we=window.showToast)==null||we.call(window,o("order.commissionSuccess"),"success"),await et(B,A,R)}catch(Xe){(ye=window.showToast)==null||ye.call(window,Xe instanceof Error?Xe.message:o("order.commissionFailed"),"error")}}async function bt(F){N(F),ee(!0);try{const ze=await G0(F.id);ze&&ze.data&&N(ze.data)}catch(ze){console.error("Failed to fetch order detail:",ze)}finally{ee(!1)}}function Nt(){var F;D({email:"",plan_id:(F=C[0])!=null&&F.id?String(C[0].id):"",period:"month_price",total_amount:"0"}),_(""),re("")}async function je(F){var ze,we;if(F.preventDefault(),!!se){ne(!0),_(""),re("");try{await Wd({email:se.email,plan_id:Number(se.plan_id),period:se.period,total_amount:Number(se.total_amount)*100}),D(null),(ze=window.showToast)==null||ze.call(window,o("order.assignSuccess"),"success"),await et(B,A,R)}catch(ye){(we=window.showToast)==null||we.call(window,ye instanceof Error?ye.message:o("order.assignFailed"),"error")}finally{ne(!1)}}}const Mt=Math.ceil(w/$),De=k?Je(k):null;return t.jsxs(Ft,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${T?"active":""}`,type:"button",onClick:()=>pe(!T),children:[t.jsx(xs,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Nt,children:[t.jsx(Mn,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void et(B,A,R),disabled:ae,children:[t.jsx(Et,{size:16}),o(ae?"common.refreshing":"common.refresh")]})]}),T&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:R,onChange:F=>L(F.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Io,{size:16}),t.jsx("input",{className:"config-input search-input",value:A,onChange:F=>Q(F.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:F=>F.key==="Enter"&&Qt()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Qt,children:[t.jsx(xs,{size:16}),o("order.filter")]}),A?t.jsxs("button",{className:"ghost-button",type:"button",onClick:Vt,children:[t.jsx(lt,{size:16}),o("order.clearFilter")]}):null]}),be?t.jsx("div",{className:"form-error",children:be}):null,H?t.jsx("div",{className:"form-success",children:H}):null,ae&&m.length===0?t.jsx(jt,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${ae?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[m.map(F=>{var qe;const ze=d(F.status),we=F.invite_user_id!==null,ye=Re[F.commission_status]??{label:`#${F.commission_status}`,dotClass:"pending"},Xe=Je(F),He=(qe=me[F.user_id])==null?void 0:qe.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>bt(F),title:o("order.detailsTitle"),children:Qh(F.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",F.id]}),t.jsx("span",{className:"order-type-pill",children:Bh[F.type]??`#${F.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[He?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>ft(F.user_id),title:o("order.filterByUser"),children:He}):t.jsxs("span",{className:"order-subline",children:["ID: ",F.user_id]}),t.jsx("strong",{className:"order-plan-name",children:F.plan_name??`Plan #${F.plan_id}`}),t.jsx("span",{className:"period-capsule",children:u(F.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Xn(F.total_amount)}),Xe?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",Xe]}):null,Number(F.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Xn(F.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ze.cls.replace("status-","")}`}),t.jsx("span",{children:ze.label}),F.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ze=>{Ze.stopPropagation(),Me(F.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(Ea,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),Y===fl("desktop",F.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ze=>Ze.stopPropagation(),onClick:Ze=>Ze.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{de(null),Xt(F.trade_no)},children:[t.jsx(Ao,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{de(null),ot(F.trade_no)},children:[t.jsx(Ai,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[we?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Xn(F.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ye.dotClass}`}),t.jsx("span",{children:ye.label}),F.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ze=>{Ze.stopPropagation(),Ue(F.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(Ea,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),z===fl("desktop",F.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ze=>Ze.stopPropagation(),onClick:Ze=>Ze.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{V(null),Jt(F.trade_no,1)},children:[t.jsx(Ao,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{V(null),Jt(F.trade_no,3)},children:[t.jsx(Ai,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Yh(F.created_at)})})]},F.trade_no)}),!ae&&m.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),Mt>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:B<=1,onClick:()=>xt(B-1),children:t.jsx(Ma,{size:16})}),t.jsxs("span",{className:"page-info",children:[B," / ",Mt]}),t.jsx("button",{className:"mini-button",disabled:B>=Mt,onClick:()=>xt(B+1),children:t.jsx(Aa,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[m.map(F=>{var dn;const ze=d(F.status),we=F.invite_user_id!==null,ye=Re[F.invite_user_id!==null?F.commission_status:0]??{label:`#${F.commission_status}`,dotClass:"pending"},Xe=(dn=me[F.user_id])==null?void 0:dn.email,He=Je(F),qe=fl("mobile",F.trade_no),Ze=fl("mobile",F.trade_no),nt=Y===qe||z===Ze;return t.jsxs("div",{className:`mobile-order-card${nt?" is-menu-open":""}`,children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>bt(F),children:Qh(F.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",F.id]})]}),t.jsx("div",{className:"mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ze.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:ze.label}),F.status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Ct=>{Ct.stopPropagation(),Me(F.trade_no,"mobile")},"aria-expanded":Y===qe,children:[o("order.markAs"),t.jsx(Ea,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),Y===qe&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Ct=>Ct.stopPropagation(),onClick:Ct=>Ct.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{de(null),Xt(F.trade_no)},children:[t.jsx(Ao,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{de(null),ot(F.trade_no)},children:[t.jsx(Ai,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:Xe?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>ft(F.user_id),children:Xe}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",F.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:Bh[F.type]??`#${F.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:F.plan_name??`Plan #${F.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:u(F.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Xn(F.total_amount)})]}),He?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:He})})]}):null,Number(F.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Xn(F.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:we?t.jsx("strong",{children:Xn(F.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),we&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsx("div",{className:"value mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ye.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:ye.label}),F.commission_status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Ct=>{Ct.stopPropagation(),Ue(F.trade_no,"mobile")},"aria-expanded":z===Ze,children:[o("order.markAs"),t.jsx(Ea,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),z===Ze&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Ct=>Ct.stopPropagation(),onClick:Ct=>Ct.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{V(null),Jt(F.trade_no,1)},children:[t.jsx(Ao,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{V(null),Jt(F.trade_no,3)},children:[t.jsx(Ai,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Yh(F.created_at)})]})]})]},F.trade_no)}),!ae&&m.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,Mt>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:B<=1,onClick:()=>xt(B-1),children:t.jsx(Ma,{size:16})}),t.jsxs("span",{className:"page-info",children:[B," / ",Mt]}),t.jsx("button",{className:"mini-button",disabled:B>=Mt,onClick:()=>xt(B+1),children:t.jsx(Aa,{size:16})})]}):null]})]}),k?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:M?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(jt,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(fn=me[k.user_id])!=null&&fn.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{N(null),ft(k.user_id)},title:"Filter by this user",children:me[k.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",k.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:k.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:u(k.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(k.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:k.plan_name??`Plan #${k.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:k.callback_no||"-"})]}),De?t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:De})]}):null]}),k.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(rt=me[k.invite_user_id])!=null&&rt.email||(on=me[k.user_id])!=null&&on.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const F=String(k.invite_user_id);L("invite_user_id"),Q(F),pe(!0),N(null),et(1,F,"invite_user_id")},title:"Filter by this inviter",children:((Dn=me[k.invite_user_id])==null?void 0:Dn.email)||((hn=me[k.user_id])==null?void 0:hn.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",k.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Xn(k.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(Re[k.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(Re[k.commission_status]??{label:`#${k.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Xn(k.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Xn(k.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Xn(k.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Xn(k.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Xn(k.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:$h(k.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:$h(k.updated_at)})]})]})]})})]})}):null,se?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>D(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:je,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:se.email,onChange:F=>D({...se,email:F.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:se.plan_id,onChange:F=>D({...se,plan_id:F.target.value}),children:C.map(F=>t.jsx("option",{value:F.id,children:F.name},F.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:se.period,onChange:F=>D({...se,period:F.target.value}),children:Object.entries(Gh).map(([F,ze])=>t.jsx("option",{value:F,children:ze},F))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:se.total_amount,onChange:F=>D({...se,total_amount:F.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>D(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[t.jsx(An,{size:16}),o(G?"order.assigning":"order.assign")]})]})]})]})}):null]})}function Uo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Ro(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function vd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function lw(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(0),[h,C]=f.useState(1),[y,g]=f.useState([]),[j,w]=f.useState(null),[S,B]=f.useState(!0),[I,$]=f.useState(!1),[A,Q]=f.useState(""),[R,L]=f.useState(""),[ae,P]=f.useState("");f.useEffect(()=>{j||P("")},[j]);const se=f.useCallback(async(_=1)=>{B(!0),Q("");try{const H=await Ax(_,15);d(H.data),m(H.total)}catch(H){Q(H instanceof Error?H.message:l("coupon.loadFailed"))}finally{B(!1)}},[]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}se(1),mi().then(g).catch(()=>{})},[se,s]);async function D(_){var H,re;if(_.preventDefault(),!!j){$(!0),Q(""),L("");try{const Y=j.type==="1"?Math.round(Number(j.value)*100):Number(j.value);await Y0({id:j.id,name:j.name,type:Number(j.type),value:Y,code:j.code||void 0,started_at:Math.floor(new Date(j.started_at).getTime()/1e3),ended_at:Math.floor(new Date(j.ended_at).getTime()/1e3),limit_use:j.limit_use?Number(j.limit_use):null,limit_use_with_user:j.limit_use_with_user?Number(j.limit_use_with_user):null,limit_plan_ids:j.limit_plan_ids.length?j.limit_plan_ids:null,limit_period:j.limit_period.length?j.limit_period:null,generate_count:j.generate_count?Number(j.generate_count):void 0}),w(null),(H=window.showToast)==null||H.call(window,l("coupon.saveSuccess"),"success"),await se(h)}catch(Y){(re=window.showToast)==null||re.call(window,Y instanceof Error?Y.message:l("coupon.saveFailed"),"error")}finally{$(!1)}}}async function G(_){var H;try{await Q0(_),await se(h)}catch(re){(H=window.showToast)==null||H.call(window,re instanceof Error?re.message:l("coupon.toggleFailed"),"error")}}async function ne(_){var H;(H=window.showConfirm)==null||H.call(window,{message:l("coupon.deleteConfirm"),onConfirm:async()=>{var re,Y;try{await $0(_),(re=window.showToast)==null||re.call(window,l("coupon.deleteSuccess"),"success"),await se(h)}catch(de){(Y=window.showToast)==null||Y.call(window,de instanceof Error?de.message:l("coupon.deleteFailed"),"error")}}})}const be=Math.ceil(u/15);return t.jsxs(Ft,{title:l("coupon.title"),subtitle:l("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("coupon.heading")}),t.jsxs("p",{children:[u," ",l("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void se(h),disabled:S,children:[t.jsx(Et,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(vd()),children:[t.jsx(Mn,{size:16}),l("coupon.add")]})]})]}),A?t.jsx("div",{className:"form-error",children:A}):null,R?t.jsx("div",{className:"form-success",children:R}):null,S&&o.length===0?t.jsx(jt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("coupon.name")}),t.jsx("th",{children:l("coupon.code")}),t.jsx("th",{children:l("coupon.type")}),t.jsx("th",{children:l("coupon.value")}),t.jsx("th",{children:l("coupon.usageLimit")}),t.jsx("th",{children:l("coupon.limitPlans")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("coupon.limitPeriods")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(_=>{var de,z;const H=(de=_.limit_plan_ids)==null?void 0:de.map(V=>{var T;return((T=y.find(pe=>pe.id===V))==null?void 0:T.name)||`#${V}`}).join(", "),re=Ro(l),Y=(z=_.limit_period)==null?void 0:z.map(V=>re[V]||V).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:_.id}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:_.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:_.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:_.type===1?En(_.value):`${_.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[l("coupon.maxUses"),": ",_.limit_use??"∞"]}),_.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[l("coupon.maxUses")," ",_.limit_use_with_user,"/",l("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[H?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[l("coupon.plans"),": ",H]})}):null,Y?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[l("coupon.cycles"),": ",Y]})}):null,!H&&!Y?t.jsx("span",{className:"tag muted-tag",children:l("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void G(_.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[Uo(_.started_at)," — ",Uo(_.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>w(vd(_)),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(_.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},_.id)}),!S&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:l("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(_=>{var H,re,Y,de;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",_.id]}),t.jsx("span",{className:`tag type-tag ${_.type===1?"fixed-type":"percent-type"}`,children:_.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:_.name,children:_.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:l("coupon.clickToCopy"),onClick:()=>{di(_.code).then(z=>{var V;(V=window.showToast)==null||V.call(window,z?`${l("coupon.copiedCode")}: ${_.code}`:l("common.copyFailed"),z?"success":"error")})},children:[t.jsx("code",{className:"mono",children:_.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(H=_.limit_plan_ids)!=null&&H.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:_.limit_plan_ids.map(z=>{const V=y.find(T=>T.id===z);return t.jsx("span",{className:"res-pill plan-pill",children:V?V.name:`#${z}`},z)})})]}):null,(re=_.limit_period)!=null&&re.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:_.limit_period.map(z=>t.jsx("span",{className:"res-pill cycle-pill",children:Ro(l)[z]||z},z))})]}):null,!((Y=_.limit_plan_ids)!=null&&Y.length)&&!((de=_.limit_period)!=null&&de.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Uo(_.started_at)," — ",Uo(_.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:l("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void G(_.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:_.type===1?En(_.value).replace(/\s?₫/,""):`${_.value}`}),t.jsx("span",{className:"ticket-value-unit",children:_.type===1?"₫":l("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:_.limit_use??"∞"}),_.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[l("coupon.maxUses")," ",_.limit_use_with_user,"/",l("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>w(vd(_)),"aria-label":l("common.edit"),children:t.jsx(Kt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(_.id),"aria-label":l("common.delete"),children:t.jsx(en,{size:15})})]})]})]},_.id)}),!S&&o.length===0?t.jsx("div",{className:"empty-state",children:l("coupon.empty")}):null]}),be>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:h<=1,onClick:()=>{C(h-1),se(h-1)},children:t.jsx(Ma,{size:16})}),t.jsxs("span",{className:"page-info",children:[h," / ",be]}),t.jsx("button",{className:"mini-button",disabled:h>=be,onClick:()=>{C(h+1),se(h+1)},children:t.jsx(Aa,{size:16})})]}):null,j?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:j.id?l("coupon.edit"):l("coupon.add")}),t.jsx("p",{children:l("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:D,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:j.name,onChange:_=>w({...j,name:_.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.type")}),t.jsxs("select",{className:"config-input",value:j.type,onChange:_=>w({...j,type:_.target.value}),children:[t.jsx("option",{value:"1",children:l("coupon.type.fixed")}),t.jsx("option",{value:"2",children:l("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:j.value,onChange:_=>w({...j,value:_.target.value})})]})]}),j.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[l("coupon.code")," (",l("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:j.code,onChange:_=>w({...j,code:_.target.value}),placeholder:l("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.started_at,onChange:_=>w({...j,started_at:_.target.value}),onClick:_=>{var H,re;return(re=(H=_.currentTarget).showPicker)==null?void 0:re.call(H)},onFocus:_=>{var H,re;return(re=(H=_.currentTarget).showPicker)==null?void 0:re.call(H)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.ended_at,onChange:_=>w({...j,ended_at:_.target.value}),onClick:_=>{var H,re;return(re=(H=_.currentTarget).showPicker)==null?void 0:re.call(H)},onFocus:_=>{var H,re;return(re=(H=_.currentTarget).showPicker)==null?void 0:re.call(H)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use,onChange:_=>w({...j,limit_use:_.target.value}),placeholder:l("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use_with_user,onChange:_=>w({...j,limit_use_with_user:_.target.value}),placeholder:l("coupon.unlimited")})]})]}),j.id?null:t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.generate_count,onChange:_=>w({...j,generate_count:_.target.value}),placeholder:l("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPlans")}),j.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:j.limit_plan_ids.map(_=>{const H=y.find(re=>re.id===_);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const re=j.limit_plan_ids.filter(Y=>Y!==_);w({...j,limit_plan_ids:re})},children:[H?H.name:`#${_}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},_)})}),y.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("coupon.searchPlans"),value:ae,onChange:_=>P(_.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[y.filter(_=>_.name.toLowerCase().includes(ae.toLowerCase())).map(_=>{const H=j.limit_plan_ids.includes(_.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:H,onChange:re=>{const Y=re.target.checked?[...j.limit_plan_ids,_.id]:j.limit_plan_ids.filter(de=>de!==_.id);w({...j,limit_plan_ids:Y})}}),t.jsx("span",{children:_.name})]},_.id)}),y.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPeriods")}),j.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:j.limit_period.map(_=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const H=j.limit_period.filter(re=>re!==_);w({...j,limit_period:H})},children:[Ro(l)[_]||_," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},_))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(Ro(l)).map(([_,H])=>{const re=j.limit_period.includes(_);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:re,onChange:Y=>{const de=Y.target.checked?[...j.limit_period,_]:j.limit_period.filter(z=>z!==_);w({...j,limit_period:de})}}),t.jsx("span",{children:H})]},_)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>w(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(An,{size:16}),l(I?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Ho(s){return new Date(s*1e3).toLocaleString("vi-VN")}function sw(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function jd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function ow(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(0),[h,C]=f.useState(1),[y,g]=f.useState([]),[j,w]=f.useState(null),[S,B]=f.useState(!0),[I,$]=f.useState(!1),[A,Q]=f.useState(""),[R,L]=f.useState(""),[ae,P]=f.useState("");f.useEffect(()=>{j||P("")},[j]);const se=sw(l),D=f.useCallback(async(_=1)=>{B(!0),Q("");try{const H=await X0(_,15);d(H.data),m(H.total)}catch(H){Q(H instanceof Error?H.message:l("giftcard.loadFailed"))}finally{B(!1)}},[l]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}D(1),mi().then(g).catch(()=>{})},[D,s]);async function G(_){var H,re;if(_.preventDefault(),!!j){$(!0),Q(""),L("");try{const Y=j.type==="1"?Math.round(Number(j.value)*100):Number(j.value);await Z0({id:j.id,name:j.name,type:Number(j.type),value:Y,code:j.code||void 0,started_at:Math.floor(new Date(j.started_at).getTime()/1e3),ended_at:Math.floor(new Date(j.ended_at).getTime()/1e3),limit_use:j.limit_use?Number(j.limit_use):null,plan_id:j.plan_id?Number(j.plan_id):null,generate_count:j.generate_count?Number(j.generate_count):void 0}),w(null),(H=window.showToast)==null||H.call(window,l("giftcard.saveSuccess"),"success"),await D(h)}catch(Y){(re=window.showToast)==null||re.call(window,Y instanceof Error?Y.message:l("giftcard.saveFailed"),"error")}finally{$(!1)}}}async function ne(_){var H;(H=window.showConfirm)==null||H.call(window,{message:l("giftcard.deleteConfirm"),onConfirm:async()=>{var re,Y;try{await K0(_),(re=window.showToast)==null||re.call(window,l("giftcard.deleteSuccess"),"success"),await D(h)}catch(de){(Y=window.showToast)==null||Y.call(window,de instanceof Error?de.message:l("giftcard.deleteFailed"),"error")}}})}const be=Math.ceil(u/15);return t.jsxs(Ft,{title:l("giftcard.title"),subtitle:l("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("giftcard.heading")}),t.jsxs("p",{children:[u," ",l("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void D(h),disabled:S,children:[t.jsx(Et,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(jd()),children:[t.jsx(Mn,{size:16}),l("giftcard.add")]})]})]}),A?t.jsx("div",{className:"form-error",children:A}):null,R?t.jsx("div",{className:"form-success",children:R}):null,S&&o.length===0?t.jsx(jt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("giftcard.thId")}),t.jsx("th",{children:l("giftcard.thName")}),t.jsx("th",{children:l("giftcard.thCode")}),t.jsx("th",{children:l("giftcard.thType")}),t.jsx("th",{children:l("giftcard.thValue")}),t.jsx("th",{children:l("giftcard.thBoundPlan")}),t.jsx("th",{children:l("giftcard.thUses")}),t.jsx("th",{children:l("giftcard.thPeriod")}),t.jsx("th",{children:l("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(_=>{var H;return t.jsxs("tr",{children:[t.jsx("td",{children:_.id}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:_.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:se[_.type]??_.type})}),t.jsx("td",{children:t.jsx("strong",{children:_.type===1?En(_.value):_.value})}),t.jsx("td",{children:_.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((H=y.find(re=>re.id===_.plan_id))==null?void 0:H.name)||`#${_.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:l("giftcard.planNone")})}),t.jsx("td",{children:_.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Ho(_.started_at)," — ",Ho(_.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>w(jd(_)),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(_.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},_.id)}),!S&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(_=>{var H;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",_.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:se[_.type]??_.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:_.name,children:_.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:l("giftcard.clickToCopy"),onClick:()=>{di(_.code).then(re=>{var Y;(Y=window.showToast)==null||Y.call(window,re?l("giftcard.copiedCode").replace("{code}",_.code):l("common.copyFailed"),re?"success":"error")})},children:[t.jsx("code",{className:"mono",children:_.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:_.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((H=y.find(re=>re.id===_.plan_id))==null?void 0:H.name)||`#${_.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Ho(_.started_at)," — ",Ho(_.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:_.type===1?En(_.value).replace(/\s?₫/,""):`${_.value}`}),t.jsx("span",{className:"ticket-value-unit",children:_.type===1?"₫":se[_.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:_.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>w(jd(_)),"aria-label":l("common.edit"),children:t.jsx(Kt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(_.id),"aria-label":l("common.delete"),children:t.jsx(en,{size:15})})]})]})]},_.id)}),!S&&o.length===0?t.jsx("div",{className:"empty-state",children:l("giftcard.empty")}):null]}),be>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:h<=1,onClick:()=>{C(h-1),D(h-1)},children:t.jsx(Ma,{size:16})}),t.jsxs("span",{className:"page-info",children:[h," / ",be]}),t.jsx("button",{className:"mini-button",disabled:h>=be,onClick:()=>{C(h+1),D(h+1)},children:t.jsx(Aa,{size:16})})]}):null,j?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:j.id?l("giftcard.edit"):l("giftcard.create")}),t.jsx("p",{children:l("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:G,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:j.name,onChange:_=>w({...j,name:_.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:j.type,onChange:_=>w({...j,type:_.target.value}),children:Object.entries(se).map(([_,H])=>t.jsx("option",{value:_,children:H},_))})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:j.value,onChange:_=>w({...j,value:_.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.started_at,onChange:_=>w({...j,started_at:_.target.value}),onClick:_=>{var H,re;return(re=(H=_.currentTarget).showPicker)==null?void 0:re.call(H)},onFocus:_=>{var H,re;return(re=(H=_.currentTarget).showPicker)==null?void 0:re.call(H)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.ended_at,onChange:_=>w({...j,ended_at:_.target.value}),onClick:_=>{var H,re;return(re=(H=_.currentTarget).showPicker)==null?void 0:re.call(H)},onFocus:_=>{var H,re;return(re=(H=_.currentTarget).showPicker)==null?void 0:re.call(H)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use,onChange:_=>w({...j,limit_use:_.target.value}),placeholder:l("giftcard.placeholderUnlimited")})]}),j.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.generate_count,onChange:_=>w({...j,generate_count:_.target.value}),placeholder:l("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("giftcard.bindPlan")}),j.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const _=y.find(H=>String(H.id)===j.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{w({...j,plan_id:""})},children:[_?_.name:`#${j.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),y.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("giftcard.searchPlans"),value:ae,onChange:_=>P(_.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!j.plan_id,onChange:()=>{w({...j,plan_id:""})}}),t.jsx("span",{children:l("giftcard.noneAllPlans")})]}),y.filter(_=>_.name.toLowerCase().includes(ae.toLowerCase())).map(_=>{const H=String(_.id)===j.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:H,onChange:re=>{re.target.checked&&w({...j,plan_id:String(_.id)})}}),t.jsx("span",{children:_.name})]},_.id)}),y.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>w(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(An,{size:16}),l(I?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const os="Tương đối",Ca="=";function Lo(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function rw(s){if(!s)return"";const l=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${o(l.getMonth()+1)}-${o(l.getDate())}`}function Xh(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function wd(s){return+(s/1073741824).toFixed(2)}function _d(s){return Math.round(s*1073741824)}function qo(s){return(s/1073741824).toFixed(2)}function cw(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function hl(s){if(s===0)return"0.00 MB";const l=s/1073741824;return l<.1?`${(s/1048576).toFixed(2)} MB`:`${l.toFixed(2)} GB`}const $d=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Jx="user_visible_columns";function dw(){if(typeof window<"u")try{const s=localStorage.getItem(Jx);if(s)return new Set(JSON.parse(s))}catch{}return new Set($d.filter(s=>s.defaultVisible).map(s=>s.key))}const Jo=[{value:"email",label:"Email",condition:os,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:Ca,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:Ca,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:Ca,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:Ca,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:os,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:Ca,placeholder:"12345"},{value:"uuid",label:"UUID",condition:os,placeholder:"UUID"},{value:"token",label:"Token",condition:os,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:os,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:Ca,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:Ca,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:Ca,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:Ca,placeholder:"1780366403"}],uw=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function sn(s,l){switch(s){case"id":return l("user.colId");case"email":return l("user.colEmail");case"status":return l("user.colStatus");case"plan":return l("user.colPlan");case"group":return l("user.colGroup");case"used":return l("user.colUsed");case"traffic":return l("user.colTraffic");case"devices":return l("user.colDevices");case"expires":return l("user.colExpires");case"balance":return l("user.colBalance");case"commission":return l("user.colCommission");case"joined":return l("user.colJoined");case"actions":return l("user.colActions");default:return""}}function pw(s,l){var u;const o=((u=Jo.find(m=>m.value===s))==null?void 0:u.label)??s,d=m=>{const h=l(m);return h===m?o:h};switch(s){case"email":return l("user.filterEmail");case"id":return l("user.filterId");case"plan_id":return l("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return l("user.filterInviterEmail");case"invite_user_id":return l("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return l("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function Nd(s){return Jo.find(l=>l.value===s)??Jo[0]}function mw(s,l){switch(s){case"month_price":return l("order.period.month_price");case"quarter_price":return l("order.period.quarter_price");case"half_year_price":return l("order.period.half_year_price");case"year_price":return l("order.period.year_price");case"two_year_price":return l("order.period.two_year_price");case"three_year_price":return l("order.period.three_year_price");case"onetime_price":return l("order.period.onetime_price");case"reset_price":return l("order.period.reset_price");default:return""}}function fw(){const s=Rt(),l=sa(),{t:o}=Qe(),[d,u]=f.useState([]),[m,h]=f.useState([]),[C,y]=f.useState([]),[g,j]=f.useState(0),[w,S]=f.useState(1),[B,I]=f.useState(""),[$,A]=f.useState("email"),[Q,R]=f.useState(!0),[L,ae]=f.useState(""),[P,se]=f.useState(dw),[D,G]=f.useState(!1),ne=f.useRef(null),[be,_]=f.useState(null),[H,re]=f.useState(null),[Y,de]=f.useState(null),[z,V]=f.useState({}),[T,pe]=f.useState(!1),[k,N]=f.useState(!1),[M,ee]=f.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[me,Se]=f.useState(!1),[Me,Ue]=f.useState(null),[Je,Re]=f.useState({plan_id:"",period:"month_price",total_amount:""}),[et,ft]=f.useState(!1),[Qt,Vt]=f.useState(null),[xt,Xt]=f.useState(null),[ot,Jt]=f.useState([]),[bt,Nt]=f.useState(0),[je,Mt]=f.useState(1),[De]=f.useState(10),[fn,rt]=f.useState(!1),[on,Dn]=f.useState("");f.useEffect(()=>{function v(fe){const he=fe.target instanceof Element?fe.target:null;be!==null&&(!he||!he.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(_(null),re(null)),D&&ne.current&&!ne.current.contains(fe.target)&&G(!1)}return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[be,D]),f.useEffect(()=>{if(be===null)return;const v=()=>{_(null),re(null)};return window.addEventListener("resize",v),window.addEventListener("scroll",v,!0),()=>{window.removeEventListener("resize",v),window.removeEventListener("scroll",v,!0)}},[be]);function hn(v,fe){if(be===v){_(null),re(null);return}const he=fe.getBoundingClientRect(),Ee=220,tt=392,xn=6,qt=8,ea=Math.max(qt,Math.min(window.innerWidth-Ee-qt,he.right-Ee)),Oa=he.bottom+xn+tt<=window.innerHeight-qt?he.bottom+xn:Math.max(qt,he.top-tt-xn);re({top:Oa,left:ea}),_(v)}function F(){_(null),re(null)}function ze(v,fe=!1,he=""){const Ee=tt=>{F(),tt()};return t.jsxs("div",{className:`action-dropdown-menu ${fe?"action-dropdown-menu-fixed":""} ${he}`.trim(),style:fe&&H?{top:H.top,left:H.left}:void 0,onMouseDown:tt=>tt.stopPropagation(),children:[t.jsxs("button",{type:"button",onClick:()=>Ee(()=>oa(v)),children:[t.jsx(Kt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>gt(v)),children:[t.jsx(_x,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>void ie(v)),children:[t.jsx(Ta,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>Ye(v)),children:[t.jsx(Ud,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>W(v)),children:[t.jsx(Jd,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>$e(v)),children:[t.jsx(Lv,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>b(v)),children:[t.jsx(Dd,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>oe(v)),children:[t.jsx(Xo,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>_e(v)),children:[t.jsx(bh,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Ee(()=>Ce(v)),children:[t.jsx(en,{size:14}),o("user.actionDelete")]})]})}function we(v){se(fe=>{const he=new Set(fe);he.has(v)?he.delete(v):he.add(v);try{localStorage.setItem(Jx,JSON.stringify([...he]))}catch{}return he})}const ye=v=>P.has(v),Xe=$d.filter(v=>P.has(v.key)).length,He=f.useCallback(async(v=1,fe,he)=>{R(!0),ae("");try{const Ee=fe==null?void 0:fe.trim(),tt=Nd(he||"email"),xn=Ee?[{key:tt.value,condition:tt.condition,value:Ee}]:void 0,qt=await Ld(v,15,xn);u(qt.data),j(qt.total)}catch(Ee){ae(Ee instanceof Error?Ee.message:o("user.loadFailed"))}finally{R(!1)}},[]),qe=f.useCallback(async()=>{try{const[v,fe]=await Promise.all([mi(),bs()]);h(v),y(fe)}catch{}},[]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}const v=new URLSearchParams(l.search),he=[["email",v.get("email")||v.get("filter_email")],["id",v.get("id")||v.get("user_id")||v.get("filter_user_id")],["plan_id",v.get("plan_id")],["invite_user_id",v.get("invite_user_id")],["invite_by_email",v.get("invite_by_email")],["uuid",v.get("uuid")],["token",v.get("token")],["remarks",v.get("remarks")]].find(([,Ee])=>Ee==null?void 0:Ee.trim());if(he){const[Ee,tt]=he,xn=Nd(Ee),qt=(tt==null?void 0:tt.trim())??"";A(xn.value),I(qt),S(1),He(1,qt,xn.value)}else He(1);qe()},[He,qe,s,l.search]);function Ze(){S(1),He(1,B,$)}function nt(){I(""),S(1),He(1)}function dn(v){S(v),He(v,B,$)}function Ct(v){if(v.plan_name)return v.plan_name;if(!v.plan_id)return"—";const fe=m.find(he=>he.id===v.plan_id);return fe?fe.name:`#${v.plan_id}`}function In(v){if(!v.group_id)return"—";const fe=C.find(he=>he.id===v.group_id);return fe?fe.name:`#${v.group_id}`}function Lt(v,fe){const he=o(v);return he===v?fe:he}function un(v){const fe=Number(v.device_limit??0);return fe>0?`${Number(v.device_bound_count??0)} / ${fe}`:Lt("user.unlimited","Unlimited")}function Zn(v){const fe=Number(v.device_bound_count??0),he=Number(v.device_pending_count??0),Ee=Number(v.device_banned_count??0),tt=Number(v.device_online_count??0),xn=Number(v.alive_ip??0),qt=Number(v.device_limit??0),ea=qt>0?`${fe} / ${qt}`:`${fe} / ${Lt("user.unlimited","Unlimited")}`,ra=[`${Lt("user.deviceBound","Bound")}: ${ea}`,`${Lt("user.devicePending","Pending")}: ${he}`,`${Lt("user.deviceBanned","Banned")}: ${Ee}`,`${Lt("user.deviceOnline","Online devices")}: ${tt}`,`${Lt("user.deviceOnlineIp","Online IP")}: ${xn}`];return v.ips&&ra.push(v.ips),ra.join(`
`)}function pn(v){s.push(`/device?user_id=${encodeURIComponent(String(v.id))}`)}function U(v,fe="left"){const he=`${Lt("user.deviceOnlineShort","Online")}: ${Number(v.device_online_count??0)} | ${Lt("user.deviceIpShort","IP")}: ${Number(v.alive_ip??0)}`;return t.jsxs("button",{className:`device-cell-button ${fe==="right"?"align-right":""}`,type:"button",title:Zn(v),onClick:()=>pn(v),children:[t.jsx("span",{className:"device-cell-primary",children:un(v)}),t.jsx("span",{className:"device-cell-secondary",children:he})]})}async function ie(v){var Ee,tt;const fe=v.subscribe_url;if(!fe){(Ee=window.showToast)==null||Ee.call(window,o("user.toastNoSubscribeUrl"),"error");return}const he=await di(fe);(tt=window.showToast)==null||tt.call(window,o(he?"user.toastUrlCopied":"common.copyFailed"),he?"success":"error"),_(null)}function W(v){var fe;_(null),(fe=window.showConfirm)==null||fe.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var he,Ee;try{await P0(v.id),(he=window.showToast)==null||he.call(window,o("user.toastSecretResetSuccess"),"success"),await He(w,B,$)}catch(tt){(Ee=window.showToast)==null||Ee.call(window,tt instanceof Error?tt.message:o("user.toastSecretResetFailed"),"error")}}})}function Ce(v){var fe;_(null),(fe=window.showConfirm)==null||fe.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var he,Ee;try{await V0(v.id),(he=window.showToast)==null||he.call(window,o("user.toastDeletedSuccess"),"success"),await He(w,B,$)}catch(tt){(Ee=window.showToast)==null||Ee.call(window,tt instanceof Error?tt.message:o("user.toastDeletedFailed"),"error")}}})}function Ye(v){var he;_(null);const fe=v.subscribe_url;if(!fe){(he=window.showToast)==null||he.call(window,o("user.toastNoSubscribeUrl"),"error");return}Vt({url:fe,userId:v.id})}function $e(v){_(null),s.push(`/order?user_id=${v.id}`)}function b(v){_(null),s.push(`/subscription?user_id=${v.id}`)}function oe(v){_(null),A("invite_user_id"),I(String(v.id)),He(1,String(v.id),"invite_user_id")}async function ue(v,fe){rt(!0),Dn("");try{const he=await a1(v,fe,De);Jt(he.data||[]),Nt(he.total||0),Mt(fe)}catch(he){Dn(he instanceof Error?he.message:o("user.historyLoading"))}finally{rt(!1)}}function _e(v){_(null),Xt(v),ue(v.id,1)}function gt(v){_(null),Ue(v.email),Re({plan_id:"",period:"month_price",total_amount:""})}async function On(v){var fe,he;if(v.preventDefault(),!!Me){ft(!0);try{await Wd({email:Me,plan_id:Number(Je.plan_id),period:Je.period,total_amount:(Number(Je.total_amount)||0)*100}),(fe=window.showToast)==null||fe.call(window,o("user.toastAssignSuccess"),"success"),Ue(null)}catch(Ee){(he=window.showToast)==null||he.call(window,Ee instanceof Error?Ee.message:o("user.toastAssignFailed"),"error")}finally{ft(!1)}}}function oa(v){_(null),de(v),V({id:v.id,email:v.email,invite_user_email:"",password:"",balance:v.balance,commission_balance:v.commission_balance,u:wd(v.u),d:wd(v.d),transfer_enable:wd(v.transfer_enable),device_limit:v.device_limit,expired_at:rw(v.expired_at),plan_id:v.plan_id,banned:v.banned,commission_type:v.commission_type??0,commission_rate:v.commission_rate??"",discount:v.discount??"",speed_limit:v.speed_limit,is_admin:v.is_admin,is_staff:v.is_staff,remarks:v.remarks??""})}function wt(v,fe){V(he=>({...he,[v]:fe}))}async function Kn(v){var fe,he;if(v.preventDefault(),!!Y){pe(!0);try{const Ee={id:Y.id,email:z.email,plan_id:z.plan_id||null,expired_at:Xh(String(z.expired_at??"")),transfer_enable:_d(Number(z.transfer_enable??0)),speed_limit:z.speed_limit||null,device_limit:z.device_limit||null,u:_d(Number(z.u??0)),d:_d(Number(z.d??0)),balance:Number(z.balance??0),commission_balance:Number(z.commission_balance??0),commission_rate:z.commission_rate!==""&&z.commission_rate!==null?Number(z.commission_rate):null,commission_type:Number(z.commission_type??0),discount:z.discount!==""&&z.discount!==null?Number(z.discount):null,remarks:z.remarks||null,is_admin:Number(z.is_admin??0),is_staff:Number(z.is_staff??0),banned:Number(z.banned??0)};z.invite_user_email&&(Ee.invite_user_email=z.invite_user_email),z.password&&(Ee.password=z.password),await F0(Ee),(fe=window.showToast)==null||fe.call(window,o("user.toastSaveSuccess"),"success"),de(null),await He(w,B,$)}catch(Ee){(he=window.showToast)==null||he.call(window,Ee instanceof Error?Ee.message:o("user.toastSaveFailed"),"error")}finally{pe(!1)}}}async function At(v){var fe,he;v.preventDefault(),Se(!0);try{await J0({email_prefix:M.email_prefix,email_suffix:M.email_suffix,password:M.password||void 0,plan_id:M.plan_id?Number(M.plan_id):void 0,expired_at:Xh(M.expired_at)}),(fe=window.showToast)==null||fe.call(window,o("user.toastCreateSuccess"),"success"),N(!1),ee({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await He(w,B,$)}catch(Ee){(he=window.showToast)==null||he.call(window,Ee instanceof Error?Ee.message:o("user.toastCreateFailed"),"error")}finally{Se(!1)}}const St=Math.ceil(g/15),Da=Nd($);return t.jsxs(Ft,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[g," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:ne,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>G(!D),children:[t.jsx(Av,{size:16}),o("user.columns")]}),D?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:Xe})})}),$d.map(v=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:P.has(v.key),onChange:()=>we(v.key)}),t.jsx("span",{children:sn(v.key,o)})]},v.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void He(w,B,$),disabled:Q,children:[t.jsx(Et,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>N(!0),children:[t.jsx(Mn,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:$,onChange:v=>A(v.target.value),children:Jo.map(v=>t.jsx("option",{value:v.value,children:pw(v.value,o)},v.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Io,{size:16}),t.jsx("input",{className:"config-input search-input",value:B,onChange:v=>I(v.target.value),placeholder:Da.placeholder,onKeyDown:v=>v.key==="Enter"&&Ze()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ze,children:[t.jsx(xs,{size:16}),o("user.filter")]}),B?t.jsxs("button",{className:"ghost-button",type:"button",onClick:nt,children:[t.jsx(lt,{size:16}),o("user.clearFilter")]}):null]}),L?t.jsx("div",{className:"form-error",children:L}):null,Q&&d.length===0?t.jsx(jt,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${Q?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(v=>{const fe=qo(v.u+v.d),he=qo(v.transfer_enable),Ee=parseFloat(fe);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",v.id]}),t.jsx("span",{className:"user-email",title:v.email,children:v.email})]}),v.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Ct(v)," / ",v.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):In(v)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Ee>0?Ee>parseFloat(he)*.9?"high":"ok":""}`,children:[fe," GB"]})," / ",he," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:sn("devices",o)}),t.jsx("span",{className:"info-val",children:U(v,"right")})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:sn("expires",o)}),t.jsx("span",{className:"info-val",children:v.expired_at?t.jsx("span",{className:`expiry-date ${v.expired_at<Date.now()/1e3?"expired":""}`,children:Lo(v.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(v.balance/100).toFixed(2)," ₫ / ",(v.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:sn("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:Lo(v.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${be===v.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>_(be===v.id?null:v.id),children:[o("user.colActions")," ",t.jsx(Ea,{size:14})]}),be===v.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>_(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:tt=>tt.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:v.email}),t.jsxs("small",{children:["#",v.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:t.jsx(lt,{size:16})})]}),ze(v,!1,"mobile-action-menu")]})}):null]})})]},v.id)}),!Q&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[ye("id")&&t.jsx("th",{children:sn("id",o)}),ye("email")&&t.jsx("th",{children:sn("email",o)}),ye("status")&&t.jsx("th",{children:sn("status",o)}),ye("plan")&&t.jsx("th",{children:sn("plan",o)}),ye("group")&&t.jsx("th",{children:sn("group",o)}),ye("used")&&t.jsx("th",{children:sn("used",o)}),ye("traffic")&&t.jsx("th",{children:sn("traffic",o)}),ye("devices")&&t.jsx("th",{children:sn("devices",o)}),ye("expires")&&t.jsx("th",{children:sn("expires",o)}),ye("balance")&&t.jsx("th",{children:sn("balance",o)}),ye("commission")&&t.jsx("th",{children:sn("commission",o)}),ye("joined")&&t.jsx("th",{children:sn("joined",o)}),ye("actions")&&t.jsx("th",{className:"user-actions-col",children:sn("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(v=>{const fe=qo(v.u+v.d),he=qo(v.transfer_enable),Ee=parseFloat(fe);return t.jsxs("tr",{children:[ye("id")&&t.jsx("td",{children:v.id}),ye("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:v.email})}),ye("status")&&t.jsx("td",{children:v.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),ye("plan")&&t.jsx("td",{children:Ct(v)}),ye("group")&&t.jsx("td",{children:v.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):In(v)}),ye("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Ee>0?Ee>parseFloat(he)*.9?"high":"ok":""}`,children:fe})}),ye("traffic")&&t.jsx("td",{children:he}),ye("devices")&&t.jsx("td",{children:U(v)}),ye("expires")&&t.jsx("td",{children:v.expired_at?t.jsx("span",{className:`expiry-date ${v.expired_at<Date.now()/1e3?"expired":""}`,children:Lo(v.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),ye("balance")&&t.jsx("td",{children:(v.balance/100).toFixed(2)}),ye("commission")&&t.jsx("td",{children:(v.commission_balance/100).toFixed(2)}),ye("joined")&&t.jsx("td",{children:t.jsx("small",{children:Lo(v.created_at)})}),ye("actions")&&t.jsx("td",{className:"user-actions-col",children:t.jsxs("div",{className:`action-dropdown-wrap ${be===v.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:tt=>hn(v.id,tt.currentTarget),children:[o("user.colActions")," ",t.jsx(Ea,{size:14})]}),be===v.id&&H?cx.createPortal(ze(v,!0),document.body):null]})})]},v.id)}),!Q&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:Xe,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),St>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:w<=1,onClick:()=>dn(w-1),children:t.jsx(Ma,{size:16})}),Array.from({length:Math.min(5,St)},(v,fe)=>{let he;return St<=5||w<=3?he=fe+1:w>=St-2?he=St-4+fe:he=w-2+fe,t.jsx("button",{className:`mini-button ${he===w?"active-page":""}`,onClick:()=>dn(he),children:he},he)}),St>5?t.jsxs("span",{className:"page-info",children:["… ",St]}):null,t.jsx("button",{className:"mini-button",disabled:w>=St,onClick:()=>dn(w+1),children:t.jsx(Aa,{size:16})})]})}):null]}),Y?t.jsx("div",{className:"modal-backdrop",onClick:()=>de(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>de(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:Kn,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(z.email??""),onChange:v=>wt("email",v.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(z.invite_user_email??""),onChange:v=>wt("invite_user_email",v.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(z.password??""),onChange:v=>wt("password",v.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(z.balance??0)/100).toFixed(2)),onChange:v=>wt("balance",Math.round(Number(v.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(z.commission_balance??0)/100).toFixed(2)),onChange:v=>wt("commission_balance",Math.round(Number(v.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(z.u??0),onChange:v=>wt("u",v.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(z.d??0),onChange:v=>wt("d",v.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(z.transfer_enable??0),onChange:v=>wt("transfer_enable",v.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(z.device_limit??""),onChange:v=>wt("device_limit",v.target.value?Number(v.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(z.expired_at??""),onChange:v=>wt("expired_at",v.target.value),onClick:v=>{var fe,he;return(he=(fe=v.currentTarget).showPicker)==null?void 0:he.call(fe)},onFocus:v=>{var fe,he;return(he=(fe=v.currentTarget).showPicker)==null?void 0:he.call(fe)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(z.plan_id??""),onChange:v=>wt("plan_id",v.target.value?Number(v.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),m.map(v=>t.jsx("option",{value:v.id,children:v.name},v.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(z.banned??0),onChange:v=>wt("banned",Number(v.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(z.commission_type??0),onChange:v=>wt("commission_type",Number(v.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(z.commission_rate??""),onChange:v=>wt("commission_rate",v.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(z.discount??""),onChange:v=>wt("discount",v.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(z.speed_limit??""),onChange:v=>wt("speed_limit",v.target.value?Number(v.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${z.is_admin?"active":""}`,onClick:()=>wt("is_admin",z.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${z.is_staff?"active":""}`,onClick:()=>wt("is_staff",z.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(z.remarks??""),onChange:v=>wt("remarks",v.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>de(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:T,children:o(T?"common.processing":"common.save")})]})]})]})}):null,k?t.jsx("div",{className:"modal-backdrop",onClick:()=>N(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:At,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:M.email_prefix,onChange:v=>ee({...M,email_prefix:v.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:M.email_suffix,onChange:v=>ee({...M,email_suffix:v.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:M.password,onChange:v=>ee({...M,password:v.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:M.plan_id,onChange:v=>ee({...M,plan_id:v.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),m.map(v=>t.jsx("option",{value:v.id,children:v.name},v.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:M.expired_at,onChange:v=>ee({...M,expired_at:v.target.value}),onClick:v=>{var fe,he;return(he=(fe=v.currentTarget).showPicker)==null?void 0:he.call(fe)},onFocus:v=>{var fe,he;return(he=(fe=v.currentTarget).showPicker)==null?void 0:he.call(fe)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>N(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:me,children:o(me?"user.creating":"user.createUser")})]})]})]})}):null,Me?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ue(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ue(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:On,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:Me})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:Je.plan_id,onChange:v=>Re({...Je,plan_id:v.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),m.map(v=>t.jsx("option",{value:v.id,children:v.name},v.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:Je.period,onChange:v=>Re({...Je,period:v.target.value}),children:uw.map(v=>t.jsx("option",{value:v.value,children:mw(v.value,o)},v.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Je.total_amount,onChange:v=>Re({...Je,total_amount:v.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Ue(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:et,children:o(et?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),Qt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Vt(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Vt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Qt.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:Qt.userId})})]})]})}):null,xt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Xt(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:xt.email,id:xt.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Xt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[on?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:on}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:bt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:hl(ot.reduce((v,fe)=>v+fe.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:hl(ot.reduce((v,fe)=>v+fe.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:hl(ot.reduce((v,fe)=>v+fe.u+fe.d,0))})]})]}),fn?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(jt,{label:o("user.historyLoading")})}):ot.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(bh,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:ot.map(v=>{const fe=hl(v.u),he=hl(v.d),Ee=hl(v.u+v.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:cw(v.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(v.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:fe}),t.jsx("td",{style:{color:"var(--muted)"},children:he}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Ee})]},v.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min((je-1)*De+1,bt),end:Math.min(je*De,bt),total:bt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:je<=1,onClick:()=>ue(xt.id,je-1),children:[t.jsx(Ma,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:je*De>=bt,onClick:()=>ue(xt.id,je+1),children:[o("user.historyNext"),t.jsx(Aa,{size:16})]})]})]})]})]})]})}):null]})}function hw(s,l=8,o=4){return s.length<=l+o+3?s:`${s.slice(0,l)}...${s.slice(-o)}`}function ps({value:s,onCopy:l,className:o="",copyClassName:d="",prefixLength:u=8,suffixLength:m=4}){const{t:h}=Qe(),[C,y]=f.useState(!1),g=C?s:hw(s,u,m);return t.jsxs("span",{className:`masked-uuid ${o}`.trim(),children:[t.jsxs("button",{className:`copy-value masked-uuid-copy ${d}`.trim(),type:"button",title:h("uuid.copy"),onClick:()=>void l(),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono masked-uuid-text",title:C?s:g,children:g})]}),t.jsx("button",{className:"masked-uuid-toggle",type:"button",title:h(C?"uuid.hide":"uuid.showFull"),"aria-label":h(C?"uuid.hide":"uuid.showFull"),onClick:()=>y(j=>!j),children:C?t.jsx(Rv,{size:14}):t.jsx(Hv,{size:14})})]})}const Zh=15,Kh=20,xw=["email","id","user_id","plan_id","status"],bw=["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"];function li(s,l){return s?new Date(s*1e3).toLocaleString():l}function gw(s){if(!s)return"";const l=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${o(l.getMonth()+1)}-${o(l.getDate())}`}function yw(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function Mi(s){return+(s/1073741824).toFixed(2)}function Sd(s){return Math.round((Number(s)||0)*1073741824)}function vw(s){return s==="email"?"like":"="}function jw(s,l){switch(s){case"email":return l("subscription.filterEmail");case"id":return l("subscription.filterId");case"user_id":return l("subscription.filterUserId");case"plan_id":return l("subscription.filterPlanId");case"status":return l("subscription.filterStatus");default:return s}}function ww(s,l){const o=l(`order.period.${s}`);return o===`order.period.${s}`?s:o}function Fh(s,l){return l(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Vh(s,l){switch(s){case"bound":return l("subscription.slotStatusBound");case"banned":return l("subscription.slotStatusBanned");default:return l("subscription.slotStatusPending")}}function Jh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Ph(s){return String(s.hwid??"").trim()!==""}function _w(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function Nw(){const s=Rt(),l=sa(),{t:o}=Qe(),[d,u]=f.useState([]),[m,h]=f.useState([]),[C,y]=f.useState(0),[g,j]=f.useState(1),[w,S]=f.useState("email"),[B,I]=f.useState(""),[$,A]=f.useState(!0),[Q,R]=f.useState(""),[L,ae]=f.useState(null),[P,se]=f.useState({}),[D,G]=f.useState(null),[ne,be]=f.useState(null),[_,H]=f.useState([]),[re,Y]=f.useState(0),[de,z]=f.useState(1),[V,T]=f.useState(!1),[pe,k]=f.useState(""),[N,M]=f.useState(null),[ee,me]=f.useState(null),[Se,Me]=f.useState({period:"month_price",total_amount:""}),[Ue,Je]=f.useState(!1),[Re,et]=f.useState(null),[ft,Qt]=f.useState(null),[Vt,xt]=f.useState(null);function Xt(b){const oe=b==null?void 0:b.trim();oe&&s.push(`/user?email=${encodeURIComponent(oe)}`)}const ot=f.useCallback(async(b=1,oe="",ue="email")=>{A(!0),R("");try{const _e=oe.trim()?[{key:ue,condition:vw(ue),value:oe.trim()}]:void 0,gt=await W0(b,Zh,_e);u(gt.data),y(gt.total),j(b)}catch(_e){R(_e instanceof Error?_e.message:o("subscription.loadFailed"))}finally{A(!1)}},[o]),Jt=f.useCallback(async(b,oe=1)=>{T(!0),k("");try{const ue=await Ox(oe,Kh,[{key:"subscription_id",condition:"=",value:String(b.id)}]);H(ue.data),Y(ue.total),z(oe)}catch(ue){k(ue instanceof Error?ue.message:o("subscription.slotsLoadFailed"))}finally{T(!1)}},[o]),bt=f.useCallback(async()=>{var b;try{h(await mi())}catch(oe){(b=window.showToast)==null||b.call(window,oe instanceof Error?oe.message:o("subscription.plansLoadFailed"),"error")}},[o]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}bt();const b=new URLSearchParams(l.search),ue=[["user_id",b.get("user_id")],["id",b.get("id")],["plan_id",b.get("plan_id")],["email",b.get("email")],["status",b.get("status")]].find(([,_e])=>_e&&_e.trim());if(ue){const[_e,gt]=ue,On=gt??"";S(_e),I(On),ot(1,On,_e);return}ot()},[ot,bt,l.search,s]),f.useEffect(()=>{function b(oe){const ue=oe.target instanceof Element?oe.target:null;Re!==null&&(!ue||!ue.closest(".subscription-action-wrap, .subscription-mobile-action-sheet, .subscription-action-menu-fixed"))&&Nt()}return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[Re]),f.useEffect(()=>{if(Re===null)return;const b=()=>Nt();return window.addEventListener("resize",b),window.addEventListener("scroll",b,!0),()=>{window.removeEventListener("resize",b),window.removeEventListener("scroll",b,!0)}},[Re]);function Nt(){et(null),Qt(null)}function je(b,oe){if(Re===b&&ft){Nt();return}const ue=oe.getBoundingClientRect(),_e=230,gt=292,On=6,oa=8,wt=Math.max(oa,Math.min(window.innerWidth-_e-oa,ue.right-_e)),At=ue.bottom+On+gt<=window.innerHeight-oa?ue.bottom+On:Math.max(oa,ue.top-gt-On);Qt({top:At,left:wt}),et(b)}function Mt(b){Qt(null),et(oe=>oe===b?null:b)}function De(b){b.preventDefault(),ot(1,B,w)}function fn(){if(I(""),l.search){s.replace("/subscription");return}ot(1,"",w)}function rt(b){if(!b)return o("subscription.noPlan");const oe=m.find(ue=>Number(ue.id)===Number(b));return oe?`#${oe.id} - ${oe.name}`:`#${b}`}function on(b){ae(b),se({plan_id:b.plan_id?String(b.plan_id):"",transfer_enable:String(Mi(b.transfer_enable)),u:String(Mi(b.u)),d:String(Mi(b.d)),device_limit:b.device_limit===null?"":String(b.device_limit),speed_limit:b.speed_limit===null?"":String(b.speed_limit),expired_at:gw(b.expired_at),status:b.status,auto_renewal:String(b.auto_renewal||0),name_sni:b.name_sni??"",network_settings:b.network_settings??"",remarks:b.remarks??""})}async function Dn(b){var oe,ue;if(b.preventDefault(),!!L){G(L.id);try{await e1({id:L.id,plan_id:P.plan_id===""?null:Number(P.plan_id),transfer_enable:Sd(P.transfer_enable),u:Sd(P.u),d:Sd(P.d),device_limit:P.device_limit===""?null:Number(P.device_limit),speed_limit:P.speed_limit===""?null:Number(P.speed_limit),expired_at:yw(P.expired_at),status:P.status,auto_renewal:Number(P.auto_renewal),name_sni:P.name_sni||null,network_settings:P.network_settings||null,remarks:P.remarks}),ae(null),(oe=window.showToast)==null||oe.call(window,o("subscription.updateSuccess"),"success"),await ot(g,B,w)}catch(_e){(ue=window.showToast)==null||ue.call(window,_e instanceof Error?_e.message:o("subscription.saveFailed"),"error")}finally{G(null)}}}function hn(b){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:o("subscription.resetConfirm",{id:b.id}),onConfirm:async()=>{var ue,_e;G(b.id);try{await t1(b.id),(ue=window.showToast)==null||ue.call(window,o("subscription.resetSuccess"),"success"),await ot(g,B,w)}catch(gt){(_e=window.showToast)==null||_e.call(window,gt instanceof Error?gt.message:o("subscription.resetFailed"),"error")}finally{G(null)}}})}function F(b){var oe,ue;if(!b.user_email){(oe=window.showToast)==null||oe.call(window,o("subscription.renewMissingEmail"),"error");return}if(!b.plan_id){(ue=window.showToast)==null||ue.call(window,o("subscription.renewMissingPlan"),"error");return}me(b),Me({period:"month_price",total_amount:""})}async function ze(b){var oe,ue;if(b.preventDefault(),!(!(ee!=null&&ee.user_email)||!ee.plan_id)){Je(!0);try{await Wd({email:ee.user_email,plan_id:ee.plan_id,period:Se.period,total_amount:Math.round((Number(Se.total_amount)||0)*100),subscription_id:ee.id}),(oe=window.showToast)==null||oe.call(window,o("subscription.renewSuccess"),"success"),me(null)}catch(_e){(ue=window.showToast)==null||ue.call(window,_e instanceof Error?_e.message:o("subscription.renewFailed"),"error")}finally{Je(!1)}}}async function we(b){var ue;if(!b)return;const oe=await di(b);(ue=window.showToast)==null||ue.call(window,o(oe?"subscription.copySuccess":"common.copyFailed"),oe?"success":"error")}function ye(b,oe){u(ue=>ue.map(_e=>_e.id===b?{..._e,subscribe_url:oe}:_e)),be(ue=>ue&&ue.id===b?{...ue,subscribe_url:oe}:ue)}async function Xe(b){if(b.subscribe_url)return b.subscribe_url;const ue=(await I0(b.id)).data||null;return ue&&ye(b.id,ue),ue}async function He(b){var oe;if(!b.subscribe_url){M(b.id);try{await Xe(b)}catch(ue){(oe=window.showToast)==null||oe.call(window,ue instanceof Error?ue.message:o("common.copyFailed"),"error")}finally{M(null)}}}async function qe(b){var oe,ue;M(b.id);try{const _e=await Xe(b);if(!_e){(oe=window.showToast)==null||oe.call(window,o("common.copyFailed"),"error");return}await we(_e)}catch(_e){(ue=window.showToast)==null||ue.call(window,_e instanceof Error?_e.message:o("common.copyFailed"),"error")}finally{M(null)}}async function Ze(b){var oe,ue;M(b.id);try{const _e=await Xe(b);if(!_e){(oe=window.showToast)==null||oe.call(window,o("common.copyFailed"),"error");return}xt({url:_e,subscriptionId:b.id})}catch(_e){(ue=window.showToast)==null||ue.call(window,_e instanceof Error?_e.message:o("common.copyFailed"),"error")}finally{M(null)}}function nt(b){be(b),H([]),Y(0),z(1),Jt(b,1),He(b)}function dn(b=de){return ne?Jt(ne,b):Promise.resolve()}function Ct(b){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var ue,_e;G(b.id);try{await Ux(b.id),(ue=window.showToast)==null||ue.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([dn(),ot(g,B,w)])}catch(gt){(_e=window.showToast)==null||_e.call(window,gt instanceof Error?gt.message:o("subscription.unbindFailed"),"error")}finally{G(null)}}})}function In(b){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var ue,_e;G(b.id);try{await Rx(b.id),(ue=window.showToast)==null||ue.call(window,o("subscription.banSuccess"),"success"),await Promise.all([dn(),ot(g,B,w)])}catch(gt){(_e=window.showToast)==null||_e.call(window,gt instanceof Error?gt.message:o("subscription.banFailed"),"error")}finally{G(null)}}})}function Lt(b){const oe=b.device_limit&&b.device_limit>0?String(b.device_limit):o("subscription.unlimited");return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:b.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:oe})]}),b.device_limit&&b.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(b.device_count/b.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>nt(b),children:[t.jsx(Dd,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]})]})}function un(b){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[Mi(b.total_used)," / ",Mi(b.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${_w(b)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:Mi(b.u),download:Mi(b.d)})})]})}function Zn(b){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsx(ps,{value:b.uuid,onCopy:()=>we(b.uuid),copyClassName:"subscription-link"}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function pn(b){return t.jsxs("div",{className:"subscription-link-stack",children:[Zn(b),b.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:b.subscribe_url,onClick:()=>void qe(b),disabled:N===b.id,children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:b.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void qe(b),disabled:N===b.id,children:[t.jsx(Ta,{size:14}),t.jsx("span",{children:N===b.id?o("subscription.subscribeUrlLoading"):o("subscription.copySubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function U(b){return t.jsxs("section",{className:"subscription-identity-summary",children:[t.jsxs("div",{className:"subscription-identity-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:o("subscription.identityTitle")}),t.jsx("small",{children:o("subscription.identityHelp")})]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:N===b.id,onClick:()=>void Ze(b),children:[t.jsx(Ud,{size:14}),N===b.id?o("subscription.subscribeUrlLoading"):o("subscription.getQr")]})]}),pn(b)]})}function ie(b,oe=!1,ue=""){const _e=gt=>{Nt(),gt()};return t.jsxs("div",{className:`action-dropdown-menu subscription-action-menu ${oe?"subscription-action-menu-fixed":""} ${ue}`.trim(),style:oe&&ft?{top:ft.top,left:ft.left}:void 0,onMouseDown:gt=>gt.stopPropagation(),children:[t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>_e(()=>on(b)),children:[t.jsx(Kt,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>_e(()=>F(b)),children:[t.jsx(_x,{size:14}),o("subscription.renew")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>_e(()=>nt(b)),children:[t.jsx(Dd,{size:14}),o("subscription.manageUuids")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:N===b.id,onClick:()=>_e(()=>void qe(b)),children:[t.jsx(Ta,{size:14}),N===b.id?o("subscription.subscribeUrlLoading"):o("subscription.copySubscribeUrl")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:N===b.id,onClick:()=>_e(()=>void Ze(b)),children:[t.jsx(Ud,{size:14}),o("subscription.getQr")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:D===b.id,onClick:()=>_e(()=>hn(b)),children:[t.jsx(Jd,{size:14}),o("subscription.resetSecret")]})]})}function W(b,oe="desktop"){return oe==="mobile"?t.jsx("div",{className:"subscription-mobile-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Re===b.id&&!ft?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:()=>Mt(b.id),children:[o("subscription.action")," ",t.jsx(Ea,{size:14})]}),Re===b.id&&!ft?t.jsx("div",{className:"subscription-mobile-action-sheet-backdrop",onClick:Nt,children:t.jsxs("div",{className:"subscription-mobile-action-sheet",onClick:ue=>ue.stopPropagation(),children:[t.jsxs("div",{className:"subscription-mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:b.user_email??o("subscription.userId",{id:b.user_id})}),t.jsxs("small",{children:["#",b.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:Nt,children:t.jsx(lt,{size:16})})]}),ie(b,!1,"subscription-mobile-action-menu")]})}):null]})}):t.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Re===b.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:ue=>je(b.id,ue.currentTarget),children:[o("subscription.action")," ",t.jsx(Ea,{size:14})]}),Re===b.id&&ft?cx.createPortal(ie(b,!0),document.body):null]})}const Ce=Math.ceil(C/Zh),Ye=Math.ceil(re/Kh),$e=Ce>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:g<=1||$,onClick:()=>void ot(g-1,B,w),children:[t.jsx(Ma,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:g,total:Ce})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:g>=Ce||$,onClick:()=>void ot(g+1,B,w),children:[o("common.next"),t.jsx(Aa,{size:14})]})]}):null;return t.jsxs(Ft,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:C})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:$,onClick:()=>void ot(g,B,w),children:[t.jsx(Et,{size:16}),o($?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:De,children:[t.jsx("select",{className:"config-input filter-select",value:w,onChange:b=>S(b.target.value),children:xw.map(b=>t.jsx("option",{value:b,children:jw(b,o)},b))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Io,{size:16}),t.jsx("input",{className:"config-input",value:B,onChange:b=>I(b.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(xs,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:fn,children:o("common.clearFilter")})]}),Q?t.jsx("div",{className:"form-error",children:Q}):null,$&&d.length===0?t.jsx(jt,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(b=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",b.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:b.plan_name??"-"}),b.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>Xt(b.user_email),title:o("subscription.viewUser"),children:b.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:b.user_id}),b.plan_id?` - ${o("subscription.planId",{id:b.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${b.status}`,children:Fh(b.status,o)})}),t.jsx("td",{children:un(b)}),t.jsx("td",{children:Lt(b)}),t.jsx("td",{children:li(b.expired_at,o("subscription.never"))}),t.jsx("td",{children:li(b.updated_at,o("subscription.never"))}),t.jsx("td",{children:W(b)})]},b.id)),!$&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(b=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",b.id]}),t.jsx("strong",{className:"subscription-plan-name",children:b.plan_name??"-"}),b.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>Xt(b.user_email),title:o("subscription.viewUser"),children:b.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${b.status}`,children:Fh(b.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),un(b)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),Lt(b)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:li(b.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:li(b.updated_at,o("subscription.never"))})]})]}),W(b,"mobile")]},b.id)),!$&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),$e,ne?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>be(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:ne.id})}),t.jsx("p",{children:ne.user_email??o("subscription.userId",{id:ne.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>be(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[pe?t.jsx("div",{className:"form-error",children:pe}):null,V&&_.length===0?t.jsx(jt,{label:o("subscription.slotsLoading")}):null,U(ne),t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[_.map(b=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(ps,{value:b.uuid,onCopy:()=>we(b.uuid),copyClassName:"subscription-link"})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${Jh(b.status)}`,children:Vh(b.status,o)})}),t.jsx("td",{children:b.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:b.hwid,onClick:()=>we(b.hwid),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:b.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:b.user_agent??"",children:b.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:b.last_ip??"-"}),t.jsx("small",{children:b.first_ip?o("subscription.firstIp",{ip:b.first_ip}):"-"})]}),t.jsx("td",{children:li(b.first_seen_at,"-")}),t.jsx("td",{children:li(b.last_seen_at,"-")}),t.jsx("td",{children:Ph(b)?t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:D===b.id,onClick:()=>Ct(b),children:[t.jsx(Hd,{size:14}),o("subscription.unbind")]}),b.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:D===b.id,onClick:()=>In(b),children:[t.jsx(Ai,{size:14}),o("subscription.ban")]}):null]}):t.jsx("span",{children:"-"})})]},b.id)),!V&&_.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[_.map(b=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${Jh(b.status)}`,children:Vh(b.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsx(ps,{value:b.uuid,onCopy:()=>we(b.uuid),copyClassName:"subscription-link"})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),b.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:b.hwid,onClick:()=>we(b.hwid),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:b.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:b.last_ip??"-"}),t.jsx("small",{children:b.first_ip?o("subscription.firstIp",{ip:b.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:b.user_agent??"",children:b.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:li(b.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:li(b.last_seen_at,"-")})]})]}),Ph(b)?t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:D===b.id,onClick:()=>Ct(b),children:[t.jsx(Hd,{size:14}),o("subscription.unbind")]}),b.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:D===b.id,onClick:()=>In(b),children:[t.jsx(Ai,{size:14}),o("subscription.ban")]}):null]}):null]},b.id)),!V&&_.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),Ye>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:de<=1||V,onClick:()=>void dn(de-1),children:[t.jsx(Ma,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:de,total:Ye})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:de>=Ye||V,onClick:()=>void dn(de+1),children:[o("common.next"),t.jsx(Aa,{size:14})]})]}):null]})]})}):null,Vt?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>xt(null),children:t.jsxs("section",{className:"modal-panel subscription-qr-modal",role:"dialog","aria-modal":"true",onMouseDown:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.qrTitle")}),t.jsx("p",{children:o("subscription.qrSubtitle",{id:Vt.subscriptionId})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>xt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Vt.url)}`,alt:o("subscription.getQr"),width:200,height:200}),t.jsx("div",{className:"subscription-qr-url",children:Vt.url})]})]})}):null,L?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>ae(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:L.id})}),t.jsx("p",{children:L.user_email??o("subscription.userId",{id:L.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>ae(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Dn,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.plan"),t.jsxs("select",{className:"config-input",value:P.plan_id,onChange:b=>se(oe=>({...oe,plan_id:b.target.value})),children:[t.jsx("option",{value:"",children:o("subscription.noPlan")}),m.map(b=>t.jsxs("option",{value:b.id,children:["#",b.id," - ",b.name]},b.id))]})]}),t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.transfer_enable,onChange:b=>se(oe=>({...oe,transfer_enable:b.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.u,onChange:b=>se(oe=>({...oe,u:b.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.d,onChange:b=>se(oe=>({...oe,d:b.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:P.device_limit,onChange:b=>se(oe=>({...oe,device_limit:b.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:P.speed_limit,onChange:b=>se(oe=>({...oe,speed_limit:b.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:P.expired_at,onChange:b=>se(oe=>({...oe,expired_at:b.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:P.status,onChange:b=>se(oe=>({...oe,status:b.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:P.auto_renewal,onChange:b=>se(oe=>({...oe,auto_renewal:b.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]}),t.jsxs("label",{children:[o("subscription.sniName"),t.jsx("input",{className:"config-input",value:P.name_sni,onChange:b=>se(oe=>({...oe,name_sni:b.target.value})),placeholder:o("subscription.sniNamePlaceholder")})]}),t.jsxs("label",{children:[o("subscription.sniValue"),t.jsx("input",{className:"config-input",value:P.network_settings,onChange:b=>se(oe=>({...oe,network_settings:b.target.value})),placeholder:o("subscription.sniValuePlaceholder")})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:P.remarks,onChange:b=>se(oe=>({...oe,remarks:b.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ae(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:D===L.id,children:D===L.id?o("common.processing"):o("common.save")})]})]})]})}):null,ee?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>me(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.renewTitle")}),t.jsx("p",{children:o("subscription.renewSubtitle",{id:ee.id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>me(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ze,children:[t.jsxs("div",{className:"subscription-renew-summary",children:[t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("common.email")}),t.jsx("strong",{title:ee.user_email??"",children:ee.user_email??"-"})]}),t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("subscription.renewSubscriptionId")}),t.jsxs("strong",{children:["#",ee.id]})]}),t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("subscription.renewPlan")}),t.jsx("strong",{title:rt(ee.plan_id),children:rt(ee.plan_id)})]})]}),t.jsxs("label",{children:[o("subscription.renewPeriod"),t.jsx("select",{className:"config-input",value:Se.period,onChange:b=>Me(oe=>({...oe,period:b.target.value})),children:bw.map(b=>t.jsx("option",{value:b,children:ww(b,o)},b))})]}),t.jsxs("label",{children:[o("subscription.renewTotalAmount"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Se.total_amount,onChange:b=>Me(oe=>({...oe,total_amount:b.target.value})),placeholder:"0"})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>me(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Ue,children:o(Ue?"common.processing":"common.save")})]})]})]})}):null]})}const Wh=15,Sw=["email","user_id","node","hwid","user_agent","last_ip"];function rs(s){return s?new Date(s*1e3).toLocaleString():"-"}function si(s){const l=Math.max(0,Number(s??0));if(l===0)return"0 B";const o=["B","KB","MB","GB","TB"];let d=l,u=0;for(;d>=1024&&u<o.length-1;)d/=1024,u+=1;return`${d>=10||u===0?d.toFixed(0):d.toFixed(2)} ${o[u]}`}function kw(s){return["user_id","subscription_id","node","node_type","node_id"].includes(s)?"=":"like"}function Cw(s,l){switch(s){case"email":return l("device.filterEmail");case"user_id":return l("device.filterUserId");case"hwid":return l("device.filterHwid");case"node":return l("device.filterNode");case"node_id":return l("device.filterNodeId");case"node_type":return l("device.filterNodeType");case"user_agent":return l("device.filterUserAgent");case"last_ip":return l("device.filterIp");default:return""}}function Ih(s,l){switch(s){case"bound":return l("device.statusBound");case"banned":return l("device.statusBanned");default:return l("device.statusPending")}}function Bo(s){return(s.online_ips??[]).join(", ")||"-"}function Go(s){return(s.online_nodes??[]).map(l=>`${l.node_type}#${l.node_id}`).join(", ")||"-"}function zw(s){return String(s.hwid??"").trim()!==""}function Tw(s){var m,h,C;const l=new URLSearchParams(s),o=(m=l.get("node_type"))==null?void 0:m.trim(),d=(h=l.get("node_id"))==null?void 0:h.trim();if(o&&d)return{field:"node",value:`${o}:${d}`};if(d)return{field:"node",value:d};const u=["node","hwid","user_agent","last_ip","email","user_id"];for(const y of u){const g=(C=l.get(y))==null?void 0:C.trim();if(g)return{field:y,value:g}}return null}function Ew(){const s=Rt(),l=sa(),{t:o}=Qe(),[d,u]=f.useState([]),[m,h]=f.useState(0),[C,y]=f.useState(1),[g,j]=f.useState("email"),[w,S]=f.useState(""),[B,I]=f.useState(!0),[$,A]=f.useState(""),[Q,R]=f.useState(null),[L,ae]=f.useState(null),[P,se]=f.useState(null),D=f.useCallback(async(T=1,pe="",k="email")=>{I(!0),A("");try{const N=pe.trim()?[{key:k,condition:kw(k),value:pe.trim()}]:void 0,M=await Ox(T,Wh,N);u(M.data),h(M.total),y(T)}catch(N){A(N instanceof Error?N.message:o("device.loadFailed"))}finally{I(!1)}},[o]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}const T=Tw(l.search);if(T){j(T.field),S(T.value),D(1,T.value,T.field);return}D()},[D,s,l.search]),f.useEffect(()=>{if(P===null)return;function T(k){const N=k.target;N!=null&&N.closest(".device-action-wrap")||se(null)}function pe(k){k.key==="Escape"&&se(null)}return document.addEventListener("pointerdown",T),document.addEventListener("keydown",pe),()=>{document.removeEventListener("pointerdown",T),document.removeEventListener("keydown",pe)}},[P]);function G(T){T.preventDefault(),D(1,w,g)}function ne(){if(S(""),l.search){s.replace("/device");return}D(1,"",g)}async function be(T){var k;if(!T.hwid)return;const pe=await di(T.hwid);(k=window.showToast)==null||k.call(window,o(pe?"device.copySuccess":"common.copyFailed"),pe?"success":"error")}async function _(T){var k;const pe=await di(T.uuid);(k=window.showToast)==null||k.call(window,o(pe?"device.copyUuidSuccess":"common.copyFailed"),pe?"success":"error")}function H(T){var pe;(pe=window.showConfirm)==null||pe.call(window,{message:o("device.unbindConfirm"),onConfirm:async()=>{var k,N;R(T.id);try{await Ux(T.id),(k=window.showToast)==null||k.call(window,o("device.unbindSuccess"),"success"),await D(C,w,g)}catch(M){(N=window.showToast)==null||N.call(window,M instanceof Error?M.message:o("device.unbindFailed"),"error")}finally{R(null)}}})}function re(T){var pe;(pe=window.showConfirm)==null||pe.call(window,{message:o("device.banConfirm"),onConfirm:async()=>{var k,N;R(T.id);try{await Rx(T.id),(k=window.showToast)==null||k.call(window,o("device.banSuccess"),"success"),await D(C,w,g)}catch(M){(N=window.showToast)==null||N.call(window,M instanceof Error?M.message:o("device.banFailed"),"error")}finally{R(null)}}})}function Y(T){var pe;(pe=window.showConfirm)==null||pe.call(window,{message:o("device.resetConfirm",{user:T.user_email??`#${T.user_id}`}),onConfirm:async()=>{var k,N;ae(T.user_id);try{await n1(T.user_id),(k=window.showToast)==null||k.call(window,o("device.resetSuccess"),"success"),await D(C,w,g)}catch(M){(N=window.showToast)==null||N.call(window,M instanceof Error?M.message:o("device.resetFailed"),"error")}finally{ae(null)}}})}function de(T){se(null),T()}function z(T,pe){const k=pe==="mobile"?-T.id:T.id,N=P===k,M=zw(T);return t.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${N?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>se(N?null:k),children:[o("device.action")," ",t.jsx(Ea,{size:14})]}),N?t.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[M?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:Q===T.id,onClick:()=>de(()=>H(T)),children:[t.jsx(Hd,{size:14}),o("device.unbind")]}),T.status==="bound"?t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:Q===T.id,onClick:()=>de(()=>re(T)),children:[t.jsx(Ai,{size:14}),o("device.ban")]}):null]}):null,t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:L===T.user_id,onClick:()=>de(()=>Y(T)),children:[t.jsx(Wv,{size:14}),o("device.resetUser")]})]}):null]})}const V=Math.ceil(m/Wh);return t.jsxs(Ft,{title:o("device.title"),subtitle:o("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("device.heading")}),t.jsx("p",{children:o("device.total",{count:m})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:B,onClick:()=>void D(C,w,g),children:[t.jsx(Et,{size:16}),o(B?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:G,children:[t.jsx("select",{className:"config-input filter-select",value:g,onChange:T=>j(T.target.value),children:Sw.map(T=>t.jsx("option",{value:T,children:Cw(T,o)},T))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Io,{size:16}),t.jsx("input",{className:"config-input",value:w,onChange:T=>S(T.target.value),placeholder:o(g==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(xs,{size:16}),o("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ne,children:o("device.clear")})]}),$?t.jsx("div",{className:"form-error",children:$}):null,B&&d.length===0?t.jsx(jt,{label:o("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[d.map(T=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:T.user_email??"-"}),t.jsxs("small",{children:["ID: ",T.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[T.plan_name??"-",T.user_plan_id?` #${T.user_plan_id}`:""]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:Ih(T.status,o)}),t.jsxs("span",{className:`online-badge ${T.is_online?"online":"offline"}`,children:[T.is_online?t.jsx(vh,{size:14}):t.jsx(yh,{size:14}),T.is_online?o("device.online"):o("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-info",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.uuid")}),t.jsx(ps,{value:T.uuid,onCopy:()=>_(T),copyClassName:"mobile-device-copy"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.hwid")}),T.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:T.hwid,onClick:()=>be(T),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:T.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.client")}),t.jsx("small",{title:T.user_agent??"",children:T.user_agent??"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.ip")}),t.jsxs("span",{className:"mono",title:`${T.last_ip??"-"} / ${T.first_ip??"-"}`,children:[T.last_ip??"-",T.first_ip?` (${T.first_ip})`:""]})]})]}),t.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[t.jsx("span",{children:o("device.traffic")}),t.jsxs("small",{title:`${o("device.upload")}: ${si(T.device_upload)} / ${o("device.download")}: ${si(T.device_download)}`,children:[si(T.device_used_traffic)," / ",o("device.upload"),": ",si(T.device_upload)," / ",o("device.download"),": ",si(T.device_download)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.connection")}),t.jsxs("small",{title:`${Bo(T)} / ${Go(T)}`,children:[o("device.onlineIps"),": ",Bo(T)," / ",o("device.onlineNodes"),": ",Go(T)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.time")}),t.jsxs("small",{children:[o("device.firstSeen"),": ",rs(T.first_seen_at)," / ",o("device.lastSeen"),": ",rs(T.last_seen_at)]})]})]}),t.jsx("div",{className:"mobile-device-actions",children:z(T,"mobile")})]},T.id)),!B&&d.length===0?t.jsx("div",{className:"empty-state",children:o("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("device.user")}),t.jsx("th",{children:o("device.status")}),t.jsx("th",{children:o("device.traffic")}),t.jsx("th",{children:o("device.connection")}),t.jsx("th",{children:o("device.deviceInfo")}),t.jsx("th",{children:o("device.time")}),t.jsx("th",{children:o("device.action")})]})}),t.jsxs("tbody",{children:[d.map(T=>t.jsxs("tr",{children:[t.jsxs("td",{className:"device-user-cell",children:[t.jsx("strong",{children:T.user_email??"-"}),t.jsxs("small",{children:["ID: ",T.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[T.plan_name??"-",T.user_plan_id?` #${T.user_plan_id}`:""]})]}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:Ih(T.status,o)})}),t.jsx("td",{className:"device-traffic-cell",children:t.jsxs("div",{className:"device-traffic-stack",children:[t.jsx("strong",{children:si(T.device_used_traffic)}),t.jsxs("small",{children:[o("device.upload"),": ",si(T.device_upload)]}),t.jsxs("small",{children:[o("device.download"),": ",si(T.device_download)]})]})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${T.is_online?"online":"offline"}`,children:[T.is_online?t.jsx(vh,{size:14}):t.jsx(yh,{size:14}),T.is_online?o("device.online"):o("device.offline")]}),t.jsxs("small",{title:Bo(T),children:[o("device.onlineIps"),": ",Bo(T)]}),t.jsxs("small",{title:Go(T),children:[o("device.onlineNodes"),": ",Go(T)]}),t.jsxs("small",{children:[o("device.lastOnline"),": ",rs(T.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-info-cell",children:t.jsxs("div",{className:"device-info-stack",children:[t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.uuid")}),t.jsx(ps,{value:T.uuid,onCopy:()=>_(T),copyClassName:"device-info-copy"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.hwid")}),T.hwid?t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:T.hwid,onClick:()=>be(T),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:T.hwid})]}):t.jsx("span",{className:"device-info-value",children:"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.client")}),t.jsx("small",{className:"device-info-value",title:T.user_agent??"",children:T.user_agent??"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.ip")}),t.jsxs("div",{className:"device-info-value",children:[t.jsx("strong",{className:"mono",children:T.last_ip??"-"}),t.jsx("small",{children:T.first_ip?`${o("device.firstIp")}: ${T.first_ip}`:"-"})]})]})]})}),t.jsx("td",{className:"device-time-cell",children:t.jsxs("div",{className:"device-time-stack",children:[t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.firstSeen")}),t.jsx("span",{children:rs(T.first_seen_at)})]}),t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.lastSeen")}),t.jsx("span",{children:rs(T.last_seen_at)})]})]})}),t.jsx("td",{className:"device-action-cell",children:z(T,"desktop")})]},T.id)),!B&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("device.empty")})})}):null]})]})}),V>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:C<=1||B,onClick:()=>void D(C-1,w,g),children:[t.jsx(Ma,{size:14}),o("device.previous")]}),t.jsx("span",{className:"page-info",children:o("device.page",{page:C,total:V})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:C>=V||B,onClick:()=>void D(C+1,w,g),children:[o("device.next"),t.jsx(Aa,{size:14})]})]}):null]})]})}const Mw={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function nu(s){if(Array.isArray(s))return s.map(l=>Number(l)).filter(l=>Number.isFinite(l)&&l>0);if(typeof s=="string")try{return nu(JSON.parse(s))}catch{return s.split(",").map(l=>Number(l.trim())).filter(l=>Number.isFinite(l)&&l>0)}return[]}function ex(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:nu(s.plan_id)}:{...Mw}}function kd(s){const l=s.trim();if(!l)return"";try{return new URL(l.includes("://")?l:`https://${l}`).host.toLowerCase()}catch{return l.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function Aw(s){const l=Number(s);if(!l)return"-";const o=new Date(l*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function Dw(s){return Number(s)===1}function tx(s,l,o){if(!s.length)return o("webcon.allPlans");const d=new Map(l.map(u=>[Number(u.id),u.name]));return s.map(u=>d.get(u)??`#${u}`).join(", ")}function oi(s,l=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,l?t.jsx("small",{children:"*"}):null]})}function Ow(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState([]),[h,C]=f.useState(null),[y,g]=f.useState(!0),[j,w]=f.useState(!1),[S,B]=f.useState(null),[I,$]=f.useState(""),A=f.useCallback(async()=>{g(!0),$("");try{const[D,G]=await Promise.all([x1(),mi()]);d(D),m(G)}catch(D){$(D instanceof Error?D.message:l("webcon.toastLoadFailed"))}finally{g(!1)}},[l]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}A()},[A,s]);const Q=f.useMemo(()=>u.map(D=>({id:Number(D.id),name:D.name})),[u]);function R(D,G){C(ne=>ne&&{...ne,[D]:G})}function L(D,G){C(ne=>{if(!ne)return ne;const be=G?Array.from(new Set([...ne.plan_ids,D])):ne.plan_ids.filter(_=>_!==D);return{...ne,plan_ids:be}})}async function ae(D){var ne,be;if(D.preventDefault(),!h)return;const G=kd(h.domain);w(!0),$("");try{await b1({id:h.id,email:h.email.trim(),domain:G,title:h.title.trim(),description:h.description.trim()||null,logo:h.logo.trim()||null,background_url:h.background_url.trim()||null,custom_html:h.custom_html||null,plan_ids:h.plan_ids,plan_id:h.plan_ids}),C(null),(ne=window.showToast)==null||ne.call(window,l("webcon.toastSaveSuccess"),"success"),await A()}catch(_){const H=_ instanceof Error?_.message:l("webcon.toastSaveFailed");$(H),(be=window.showToast)==null||be.call(window,H,"error")}finally{w(!1)}}async function P(D){var G,ne;B(D.id);try{await y1(D.id),(G=window.showToast)==null||G.call(window,l("webcon.toastToggleSuccess"),"success"),await A()}catch(be){const _=be instanceof Error?be.message:l("webcon.toastToggleFailed");$(_),(ne=window.showToast)==null||ne.call(window,_,"error")}finally{B(null)}}function se(D){var G;(G=window.showConfirm)==null||G.call(window,{message:l("webcon.deleteConfirm"),onConfirm:async()=>{var ne,be;B(D.id),$("");try{await g1(D.id),(ne=window.showToast)==null||ne.call(window,l("webcon.toastDeleteSuccess"),"success"),await A()}catch(_){const H=_ instanceof Error?_.message:l("webcon.toastDeleteFailed");$(H),(be=window.showToast)==null||be.call(window,H,"error")}finally{B(null)}}})}return t.jsxs(Ft,{title:l("webcon.title"),subtitle:l("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("webcon.heading")}),t.jsx("p",{children:l("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:y,onClick:()=>void A(),children:[t.jsx(Et,{size:16}),l(y?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>C(ex()),children:[t.jsx(Mn,{size:16}),l("webcon.add")]})]})]}),I?t.jsx("div",{className:"form-error",children:I}):null,y&&o.length===0?t.jsx(jt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("webcon.colId")}),t.jsx("th",{children:l("webcon.colStatus")}),t.jsx("th",{children:l("webcon.colStaffOwner")}),t.jsx("th",{children:l("webcon.colDomain")}),t.jsx("th",{children:l("webcon.colLanding")}),t.jsx("th",{children:l("webcon.colPlans")}),t.jsx("th",{children:l("webcon.colCreated")}),t.jsx("th",{children:l("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(D=>{var ne;const G=nu(D.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",D.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${Dw(D.status)?"active":""}`,type:"button",disabled:S===D.id,onClick:()=>void P(D),"aria-label":l("webcon.toggleStatusLabel"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:D.email??"-"}),t.jsx("small",{children:Number(D.staff)===1?l("webcon.staffEnabled"):l("webcon.staffDisabled")})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:D.domain}),t.jsx("small",{children:l("webcon.adminPath",{path:`/${String(((ne=window.settings)==null?void 0:ne.secure_path)??"admin")}/webcon`})})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:D.title||"-"}),t.jsx("small",{children:D.description||l("webcon.noDescription")}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(Gv,{size:13}),D.logo?l("webcon.logo"):l("webcon.noLogo")]}),t.jsxs("span",{children:[t.jsx(gs,{size:13}),D.background_url?l("webcon.background"):l("webcon.noBackground")]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:tx(G,Q,l)}),t.jsx("small",{children:G.length?l("webcon.selectedCount",{count:G.length}):l("webcon.unrestricted")})]})}),t.jsx("td",{children:Aw(D.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>C(ex(D)),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:S===D.id,onClick:()=>se(D),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},D.id)}),!y&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("webcon.noWebcon")})})}):null]})]})})}),h?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>C(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:D=>D.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:h.id?l("webcon.editTitle"):l("webcon.newTitle")}),t.jsx("p",{children:h.domain||l("webcon.modalSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.closeMenu"),onClick:()=>C(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:ae,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.staffOwnerEmail"),!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:h.email,onChange:D=>R("email",D.target.value),placeholder:l("webcon.staffEmailPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.domain"),!0),t.jsx("input",{className:"config-input",required:!0,value:h.domain,onChange:D=>R("domain",D.target.value),onBlur:D=>R("domain",kd(D.target.value)),placeholder:l("webcon.domainPlaceholder")}),t.jsx("span",{className:"webcon-help",children:l("webcon.domainHelp")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.landingTitle"),!0),t.jsx("input",{className:"config-input",required:!0,value:h.title,onChange:D=>R("title",D.target.value),placeholder:l("webcon.landingTitlePlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.description")),t.jsx("input",{className:"config-input",value:h.description,onChange:D=>R("description",D.target.value),placeholder:l("webcon.descriptionPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.logoUrl")),t.jsx("input",{className:"config-input",type:"url",value:h.logo,onChange:D=>R("logo",D.target.value),placeholder:l("webcon.logoPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.backgroundUrl")),t.jsx("input",{className:"config-input",type:"url",value:h.background_url,onChange:D=>R("background_url",D.target.value),placeholder:l("webcon.backgroundPlaceholder")})]}),t.jsxs("div",{className:"webcon-field full",children:[oi(l("webcon.allowedPlans")),t.jsxs("div",{className:"webcon-plan-picker",children:[Q.map(D=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:h.plan_ids.includes(D.id),onChange:G=>L(D.id,G.target.checked)}),t.jsx("span",{children:D.name})]},D.id)),Q.length===0?t.jsx("span",{className:"webcon-help",children:l("webcon.noPlansLoaded")}):null]}),t.jsx("span",{className:"webcon-help",children:l("webcon.allowedPlansHelp")})]}),t.jsxs("label",{className:"webcon-field full",children:[oi(l("webcon.customHtml")),t.jsx("textarea",{className:"config-input",rows:5,value:h.custom_html,onChange:D=>R("custom_html",D.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:h.logo?t.jsx("img",{src:h.logo,alt:""}):t.jsx(Jv,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:h.title||l("webcon.previewTitle")}),t.jsx("span",{children:kd(h.domain)||l("webcon.domainPlaceholder")}),t.jsxs("span",{children:[t.jsx(Pd,{size:12})," ",tx(h.plan_ids,Q,l)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>C(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(An,{size:16}),l(j?"webcon.saving":"common.save")]})]})]})]})}):null]})}function nx(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Cd(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function Uw(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,C]=f.useState(!0),[y,g]=f.useState(!1),[j,w]=f.useState(""),[S,B]=f.useState(""),I=f.useCallback(async()=>{C(!0),w("");try{d(await i1())}catch(R){w(R instanceof Error?R.message:l("notice.loadFailed"))}finally{C(!1)}},[l]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}I()},[I,s]);async function $(R){var L,ae;if(R.preventDefault(),!!u){g(!0),w(""),B("");try{const P=u.tags?u.tags.split(",").map(se=>se.trim()).filter(Boolean):[];await l1({id:u.id,title:u.title,content:u.content,img_url:u.img_url||null,tags:P.length?P:null}),m(null),(L=window.showToast)==null||L.call(window,l("notice.saveSuccess"),"success"),await I()}catch(P){(ae=window.showToast)==null||ae.call(window,P instanceof Error?P.message:l("notice.saveFailed"),"error")}finally{g(!1)}}}async function A(R){var L;try{await o1(R),await I()}catch(ae){(L=window.showToast)==null||L.call(window,ae instanceof Error?ae.message:l("notice.toggleFailed"),"error")}}async function Q(R){var L;(L=window.showConfirm)==null||L.call(window,{message:l("notice.deleteConfirm"),onConfirm:async()=>{var ae,P;try{await s1(R),(ae=window.showToast)==null||ae.call(window,l("notice.deleteSuccess"),"success"),await I()}catch(se){(P=window.showToast)==null||P.call(window,se instanceof Error?se.message:l("notice.deleteFailed"),"error")}}})}return t.jsxs(Ft,{title:l("notice.title"),subtitle:l("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("notice.heading")}),t.jsxs("p",{children:[o.length," ",l("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:h,children:[t.jsx(Et,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>m(Cd()),children:[t.jsx(Mn,{size:16}),l("notice.addNotice")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,S?t.jsx("div",{className:"form-success",children:S}):null,h&&o.length===0?t.jsx(jt,{label:l("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("notice.titleField")}),t.jsx("th",{children:l("notice.show")}),t.jsx("th",{children:l("notice.tags")}),t.jsx("th",{children:l("notice.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(R=>{var L;return t.jsxs("tr",{children:[t.jsx("td",{children:R.id}),t.jsx("td",{children:t.jsx("strong",{children:R.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${R.show?"active":""}`,type:"button",onClick:()=>void A(R.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((L=R.tags)==null?void 0:L.map((ae,P)=>t.jsx("span",{className:"tag",children:ae},P)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:nx(R.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>m(Cd(R)),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Q(R.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},R.id)}),!h&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(R=>t.jsxs("div",{className:`notice-mobile-card ${R.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",R.id]})}),t.jsx("button",{className:`admin-switch ${R.show?"active":""}`,type:"button",onClick:()=>void A(R.id),"aria-label":R.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:R.title}),t.jsx("div",{className:"notice-tags",children:R.tags&&R.tags.length>0?R.tags.map((L,ae)=>t.jsx("span",{className:"tag-badge",children:L},ae)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[l("notice.created"),": ",nx(R.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>m(Cd(R)),children:[t.jsx(Kt,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void Q(R.id),children:[t.jsx(en,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},R.id)),!h&&o.length===0?t.jsx("div",{className:"empty-state",children:l("notice.noNotices")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?l("notice.editNotice"):l("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:$,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:R=>m({...u,title:R.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:u.content,onChange:R=>m({...u,content:R.target.value}),placeholder:l("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:u.img_url,onChange:R=>m({...u,img_url:R.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.tags")}),t.jsx("input",{className:"config-input",value:u.tags,onChange:R=>m({...u,tags:R.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(An,{size:16}),l(y?"notice.saving":"common.save")]})]})]})]})}):null]})}function zd(s){return new Date(s*1e3).toLocaleString("vi-VN")}const ax=(s,l)=>({0:{label:l("ticket.statusOpen"),cls:"enabled"},1:{label:l("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},Td=(s,l)=>({0:l("ticket.levelLow"),1:l("ticket.levelMedium"),2:l("ticket.levelHigh")})[s]||String(s);function Rw(){var _;const s=Rt(),{t:l}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,C]=f.useState(!1),[y,g]=f.useState(null),[j,w]=f.useState(""),[S,B]=f.useState(!0),[I,$]=f.useState(!1),[A,Q]=f.useState(""),R=f.useRef(null),[L,ae]=f.useState([]),[P,se]=f.useState(null),D=f.useCallback(async()=>{B(!0),Q("");try{d(await r1())}catch(H){Q(H instanceof Error?H.message:"Load failed")}finally{B(!1)}},[]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}D(),mi().then(H=>{H&&ae(H)}).catch(()=>{})},[D,s]),f.useEffect(()=>{var H;(H=R.current)==null||H.scrollIntoView({behavior:"smooth"})},[u]);async function G(H){var re;g(H),w(""),m(null),se(null),C(!0);try{const Y=await _h(H);if(m(Y),Y&&Y.user_id)try{const de=await Dx(Y.user_id);de&&de.data&&se(de.data)}catch(de){console.error("Failed to load user info:",de)}}catch{(re=window.showToast)==null||re.call(window,"Failed to load message thread","error")}finally{C(!1)}}async function ne(H){var re,Y;if(H.preventDefault(),!(!y||!j.trim())){$(!0),Q("");try{await c1(y,j),w(""),(re=window.showToast)==null||re.call(window,"Reply sent!","success");try{const de=await _h(y);m(de)}catch{}await D()}catch(de){(Y=window.showToast)==null||Y.call(window,de instanceof Error?de.message:"Reply failed","error")}finally{$(!1)}}}async function be(H){var re;(re=window.showConfirm)==null||re.call(window,{message:"Close this ticket?",onConfirm:async()=>{var Y,de;Q("");try{await d1(H),(Y=window.showToast)==null||Y.call(window,"Ticket closed!","success"),y===H&&(g(null),m(null)),await D()}catch(z){Q(z instanceof Error?z.message:"Close failed"),(de=window.showToast)==null||de.call(window,z instanceof Error?z.message:"Close failed","error")}}})}return t.jsxs(Ft,{title:l("ticket.title"),subtitle:l("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:D,disabled:S,children:[t.jsx(Et,{size:16}),l("common.refresh")]})})]}),A?t.jsx("div",{className:"form-error",children:A}):null,S&&o.length===0?t.jsx(jt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("ticket.id")}),t.jsx("th",{children:l("ticket.subject")}),t.jsx("th",{children:l("ticket.user")}),t.jsx("th",{children:l("ticket.level")}),t.jsx("th",{children:l("ticket.status")}),t.jsx("th",{children:l("ticket.replyStatus")}),t.jsx("th",{children:l("ticket.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(H=>{const re=ax(H.status,l);return t.jsxs("tr",{children:[t.jsx("td",{children:H.id}),t.jsx("td",{children:t.jsx("strong",{children:H.subject})}),t.jsxs("td",{children:["#",H.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:Td(H.level,l)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${re.cls}`,children:re.label})}),t.jsx("td",{children:H.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:zd(H.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:H.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void G(H.id),children:[t.jsx(cs,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void be(H.id),children:[t.jsx(Od,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void G(H.id),children:[t.jsx(cs,{size:14}),l("ticket.viewHistory")]})})})]},H.id)}),!S&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(H=>{const re=ax(H.status,l);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:H.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Td(H.level,l)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.id"),": ",t.jsxs("strong",{children:["#",H.id]})]}),t.jsx("span",{className:`status-pill ${re.cls}`,children:re.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.user"),": ",t.jsxs("strong",{children:["#",H.user_id]})]}),t.jsx("span",{children:H.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[l("ticket.created"),": ",t.jsx("small",{children:zd(H.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:H.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void G(H.id),children:[t.jsx(cs,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void be(H.id),children:[t.jsx(Od,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void G(H.id),children:[t.jsx(cs,{size:14}),l("ticket.viewHistory")]})})]},H.id)}),!S&&o.length===0?t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")}):null]}),y!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u?`${l("ticket.ticketDetail")}: ${u.subject}`:`${l("ticket.ticketDetail")} #${y}`}),t.jsxs("p",{children:[l("ticket.user"),": #",u==null?void 0:u.user_id," | ",l("ticket.level"),": ",u!=null?Td(u.level,l):l("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{g(null),m(null)},children:t.jsx(lt,{size:18})})]}),P&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("common.email")}),t.jsx("span",{className:"details-value",title:P.email,children:P.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((_=L.find(H=>H.id===P.plan_id))==null?void 0:_.name)||l("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[En(P.balance)," ",l("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:P.expired_at?new Date(P.expired_at*1e3).toLocaleDateString("vi-VN"):l("ticket.never")})]})]}),h?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(jt,{label:l("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[u!=null&&u.message&&u.message.length>0?u.message.map(H=>{const re=H.is_me;return t.jsxs("div",{className:`chat-message ${re?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:H.message}),t.jsxs("div",{className:"chat-meta",children:[re?l("ticket.staff"):`${l("ticket.user")} #${H.user_id}`," • ",zd(H.created_at)]})]},H.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:l("ticket.noLogs")}),t.jsx("div",{ref:R})]}),(u==null?void 0:u.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ne,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:l("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:j,onChange:H=>w(H.target.value),placeholder:l("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I||!j.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(wx,{size:14}),I?"":l("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:l("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function ix(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const lx={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function sx(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function Hw(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,C]=f.useState(!0),[y,g]=f.useState(!1),[j,w]=f.useState(""),[S,B]=f.useState(""),I=f.useCallback(async()=>{C(!0),w("");try{d(await u1())}catch(L){w(L instanceof Error?L.message:l("knowledge.loadFailed"))}finally{C(!1)}},[l]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}I()},[I,s]);async function $(L){var ae;try{const P=await p1(L.id);m(sx(P))}catch(P){(ae=window.showToast)==null||ae.call(window,P instanceof Error?P.message:l("knowledge.detailFailed"),"error")}}async function A(L){var ae,P;if(L.preventDefault(),!!u){g(!0),w(""),B("");try{await m1({id:u.id,category:u.category,title:u.title,body:u.body,language:u.language||null,sort:u.sort?Number(u.sort):null}),m(null),(ae=window.showToast)==null||ae.call(window,l("knowledge.saveSuccess"),"success"),await I()}catch(se){(P=window.showToast)==null||P.call(window,se instanceof Error?se.message:l("knowledge.saveFailed"),"error")}finally{g(!1)}}}async function Q(L){var ae;try{await h1(L),await I()}catch(P){(ae=window.showToast)==null||ae.call(window,P instanceof Error?P.message:l("knowledge.toggleFailed"),"error")}}async function R(L){var ae;(ae=window.showConfirm)==null||ae.call(window,{message:l("knowledge.deleteConfirm"),onConfirm:async()=>{var P,se;try{await f1(L),(P=window.showToast)==null||P.call(window,l("knowledge.deleteSuccess"),"success"),await I()}catch(D){(se=window.showToast)==null||se.call(window,D instanceof Error?D.message:l("knowledge.deleteFailed"),"error")}}})}return t.jsxs(Ft,{title:l("knowledge.title"),subtitle:l("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",l("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:h,children:[t.jsx(Et,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>m(sx()),children:[t.jsx(Mn,{size:16}),l("knowledge.addArticle")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,S?t.jsx("div",{className:"form-success",children:S}):null,h&&o.length===0?t.jsx(jt,{label:l("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("knowledge.category")}),t.jsx("th",{children:l("knowledge.titleField")}),t.jsx("th",{children:l("knowledge.language")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("knowledge.sort")}),t.jsx("th",{children:l("knowledge.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(L=>t.jsxs("tr",{children:[t.jsx("td",{children:L.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:L.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:L.title})}),t.jsx("td",{children:L.language&&lx[L.language]||L.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${L.show?"active":""}`,type:"button",onClick:()=>void Q(L.id),"aria-label":l("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:L.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:ix(L.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void $(L),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void R(L.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},L.id)),!h&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(L=>t.jsxs("div",{className:`knowledge-mobile-card ${L.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",L.id]}),L.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",L.sort]})]}),t.jsx("button",{className:`admin-switch ${L.show?"active":""}`,type:"button",onClick:()=>void Q(L.id),"aria-label":L.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:L.title}),t.jsxs("div",{className:"card-meta",children:[L.category&&t.jsx("span",{className:"category-badge",children:L.category}),L.language&&t.jsx("span",{className:"lang-badge",children:lx[L.language]||L.language})]}),t.jsxs("p",{className:"created-time",children:[l("knowledge.created"),": ",ix(L.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void $(L),children:[t.jsx(Kt,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void R(L.id),children:[t.jsx(en,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},L.id)),!h&&o.length===0?t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?l("knowledge.editArticle"):l("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:A,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:u.category,onChange:L=>m({...u,category:L.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:L=>m({...u,title:L.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:u.body,onChange:L=>m({...u,body:L.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:u.language,onChange:L=>m({...u,language:L.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:l("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:l("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:l("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:l("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:l("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:l("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:l("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:u.sort,onChange:L=>m({...u,sort:L.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(An,{size:16}),l(y?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function Lw(){const s=Rt(),{t:l}=Qe(),[o,d]=f.useState(null),[u,m]=f.useState(null),[h,C]=f.useState(null),[y,g]=f.useState(""),[j,w]=f.useState(!0),[S,B]=f.useState(""),I=f.useCallback(async()=>{w(!0),B("");try{const[A,Q,R,L]=await Promise.all([v1().catch(()=>({data:{}})),_1().catch(()=>({data:{}})),N1().catch(()=>({data:[]})),S1().catch(()=>({data:""}))]);d(A.data),m(Q.data),C(R.data),g(typeof L.data=="string"?L.data:"")}catch(A){B(A instanceof Error?A.message:l("queue.toastLoadFailed"))}finally{w(!1)}},[l]);f.useEffect(()=>{if(!Ht()){s.replace("/login");return}I()},[I,s]);function $(A,Q,R){return A?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[R," ",Q]}),t.jsx("div",{className:"queue-grid",children:Object.entries(A).map(([L,ae])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:L}),t.jsx("strong",{children:typeof ae=="object"?JSON.stringify(ae):String(ae??"—")})]},L))})]}):null}return t.jsxs(Ft,{title:l("queue.title"),subtitle:l("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("queue.heading")}),t.jsx("p",{children:l("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:j,children:[t.jsx(Et,{size:16}),l("common.refresh")]})})]}),S?t.jsx("div",{className:"form-error",children:S}):null,j?t.jsx(jt,{label:l("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[$(o,l("queue.systemStatus"),t.jsx(Qo,{size:18})),$(u,l("queue.queueStats"),t.jsx(Pd,{size:18})),h&&h.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(Cv,{size:18})," ",l("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(h,null,2)})]}):null,y?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(Uv,{size:18})," ",l("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:y})]}):null]})]})}const qw=f.createContext(null);function Bw({children:s}){const[l,o]=f.useState([]),[d,u]=f.useState(null),m=f.useCallback((g,j="success")=>{const w=Math.random().toString(36).substring(2,9);o(S=>[...S,{id:w,message:g,type:j}]),setTimeout(()=>{o(S=>S.filter(B=>B.id!==w))},5e3)},[]),h=f.useCallback(g=>{u(g)},[]);f.useEffect(()=>{typeof window<"u"&&(window.showToast=m,window.showConfirm=h)},[m,h]);const C=async()=>{if(d){try{await d.onConfirm()}catch(g){console.error("Error in onConfirm:",g)}u(null)}},y=()=>{d&&(d.onCancel&&d.onCancel(),u(null))};return t.jsxs(qw.Provider,{value:{showToast:m,showConfirm:h},children:[s,t.jsx("div",{className:"toast-container",children:l.map(g=>{let j=Yv;return g.type==="success"&&(j=vx),g.type==="error"&&(j=Mv),g.type==="warning"&&(j=Rd),t.jsxs("div",{className:`toast-card toast-${g.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(j,{size:18})}),t.jsx("div",{className:"toast-message",children:g.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(w=>w.filter(S=>S.id!==g.id)),children:t.jsx(lt,{size:14})})]},g.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:y,children:t.jsxs("div",{className:"confirm-card",onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(Rd,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:y,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:C,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Gw({children:s}){return t.jsx(U1,{children:t.jsx(Bw,{children:s})})}function Yw(){return t.jsx(Gw,{children:t.jsxs(dv,{children:[t.jsx(kt,{path:"/login",element:t.jsx(R1,{})}),t.jsx(kt,{path:"/dashboard",element:t.jsx(Z1,{})}),t.jsx(kt,{path:"/config/system",element:t.jsx(nj,{})}),t.jsx(kt,{path:"/config/payment",element:t.jsx(lj,{})}),t.jsx(kt,{path:"/config/theme",element:t.jsx(rj,{})}),t.jsx(kt,{path:"/server/manage",element:t.jsx(Kj,{})}),t.jsx(kt,{path:"/server/group",element:t.jsx(Fj,{})}),t.jsx(kt,{path:"/server/route",element:t.jsx(Pj,{})}),t.jsx(kt,{path:"/plan",element:t.jsx(tw,{})}),t.jsx(kt,{path:"/order",element:t.jsx(iw,{})}),t.jsx(kt,{path:"/coupon",element:t.jsx(lw,{})}),t.jsx(kt,{path:"/giftcard",element:t.jsx(ow,{})}),t.jsx(kt,{path:"/user",element:t.jsx(fw,{})}),t.jsx(kt,{path:"/subscription",element:t.jsx(Nw,{})}),t.jsx(kt,{path:"/device",element:t.jsx(Ew,{})}),t.jsx(kt,{path:"/webcon",element:t.jsx(Ow,{})}),t.jsx(kt,{path:"/notice",element:t.jsx(Uw,{})}),t.jsx(kt,{path:"/ticket",element:t.jsx(Rw,{})}),t.jsx(kt,{path:"/knowledge",element:t.jsx(Hw,{})}),t.jsx(kt,{path:"/queue",element:t.jsx(Lw,{})}),t.jsx(kt,{path:"/",element:t.jsx(ch,{to:"/dashboard",replace:!0})}),t.jsx(kt,{path:"*",element:t.jsx(ch,{to:"/dashboard",replace:!0})})]})})}gy.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsx(bv,{children:t.jsx(Yw,{})})}));
