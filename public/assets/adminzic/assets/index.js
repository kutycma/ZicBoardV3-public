function Yb(o,s){for(var r=0;r<s.length;r++){const u=s[r];if(typeof u!="string"&&!Array.isArray(u)){for(const m in u)if(m!=="default"&&!(m in o)){const g=Object.getOwnPropertyDescriptor(u,m);g&&Object.defineProperty(o,m,g.get?g:{enumerable:!0,get:()=>u[m]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const g of m)if(g.type==="childList")for(const h of g.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function r(m){const g={};return m.integrity&&(g.integrity=m.integrity),m.referrerPolicy&&(g.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?g.credentials="include":m.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function u(m){if(m.ep)return;m.ep=!0;const g=r(m);fetch(m.href,g)}})();function $b(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ic={exports:{}},Ii={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function Vb(){if(Uf)return Ii;Uf=1;var o=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function r(u,m,g){var h=null;if(g!==void 0&&(h=""+g),m.key!==void 0&&(h=""+m.key),"key"in m){g={};for(var v in m)v!=="key"&&(g[v]=m[v])}else g=m;return m=g.ref,{$$typeof:o,type:u,key:h,ref:m!==void 0?m:null,props:g}}return Ii.Fragment=s,Ii.jsx=r,Ii.jsxs=r,Ii}var Rf;function Qb(){return Rf||(Rf=1,Ic.exports=Vb()),Ic.exports}var a=Qb(),ed={exports:{}},Ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function Xb(){if(Hf)return Ue;Hf=1;var o=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),B=Symbol.iterator;function X(k){return k===null||typeof k!="object"?null:(k=B&&k[B]||k["@@iterator"],typeof k=="function"?k:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,z={};function G(k,Z,ue){this.props=k,this.context=Z,this.refs=z,this.updater=ue||te}G.prototype.isReactComponent={},G.prototype.setState=function(k,Z){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Z,"setState")},G.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function U(){}U.prototype=G.prototype;function O(k,Z,ue){this.props=k,this.context=Z,this.refs=z,this.updater=ue||te}var ee=O.prototype=new U;ee.constructor=O,K(ee,G.prototype),ee.isPureReactComponent=!0;var se=Array.isArray;function ce(){}var E={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function le(k,Z,ue){var pe=ue.ref;return{$$typeof:o,type:k,key:Z,ref:pe!==void 0?pe:null,props:ue}}function he(k,Z){return le(k.type,Z,k.props)}function N(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function R(k){var Z={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ue){return Z[ue]})}var ae=/\/+/g;function M(k,Z){return typeof k=="object"&&k!==null&&k.key!=null?R(""+k.key):Z.toString(36)}function re(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(ce,ce):(k.status="pending",k.then(function(Z){k.status==="pending"&&(k.status="fulfilled",k.value=Z)},function(Z){k.status==="pending"&&(k.status="rejected",k.reason=Z)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function A(k,Z,ue,pe,Se){var ke=typeof k;(ke==="undefined"||ke==="boolean")&&(k=null);var Re=!1;if(k===null)Re=!0;else switch(ke){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(k.$$typeof){case o:case s:Re=!0;break;case y:return Re=k._init,A(Re(k._payload),Z,ue,pe,Se)}}if(Re)return Se=Se(k),Re=pe===""?"."+M(k,0):pe,se(Se)?(ue="",Re!=null&&(ue=Re.replace(ae,"$&/")+"/"),A(Se,Z,ue,"",function(Pe){return Pe})):Se!=null&&(N(Se)&&(Se=he(Se,ue+(Se.key==null||k&&k.key===Se.key?"":(""+Se.key).replace(ae,"$&/")+"/")+Re)),Z.push(Se)),1;Re=0;var mt=pe===""?".":pe+":";if(se(k))for(var Ge=0;Ge<k.length;Ge++)pe=k[Ge],ke=mt+M(pe,Ge),Re+=A(pe,Z,ue,ke,Se);else if(Ge=X(k),typeof Ge=="function")for(k=Ge.call(k),Ge=0;!(pe=k.next()).done;)pe=pe.value,ke=mt+M(pe,Ge++),Re+=A(pe,Z,ue,ke,Se);else if(ke==="object"){if(typeof k.then=="function")return A(re(k),Z,ue,pe,Se);throw Z=String(k),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Re}function F(k,Z,ue){if(k==null)return k;var pe=[],Se=0;return A(k,pe,"","",function(ke){return Z.call(ue,ke,Se++)}),pe}function x(k){if(k._status===-1){var Z=k._result;Z=Z(),Z.then(function(ue){(k._status===0||k._status===-1)&&(k._status=1,k._result=ue)},function(ue){(k._status===0||k._status===-1)&&(k._status=2,k._result=ue)}),k._status===-1&&(k._status=0,k._result=Z)}if(k._status===1)return k._result.default;throw k._result}var P=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},H={map:F,forEach:function(k,Z,ue){F(k,function(){Z.apply(this,arguments)},ue)},count:function(k){var Z=0;return F(k,function(){Z++}),Z},toArray:function(k){return F(k,function(Z){return Z})||[]},only:function(k){if(!N(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return Ue.Activity=j,Ue.Children=H,Ue.Component=G,Ue.Fragment=r,Ue.Profiler=m,Ue.PureComponent=O,Ue.StrictMode=u,Ue.Suspense=S,Ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,Ue.__COMPILER_RUNTIME={__proto__:null,c:function(k){return E.H.useMemoCache(k)}},Ue.cache=function(k){return function(){return k.apply(null,arguments)}},Ue.cacheSignal=function(){return null},Ue.cloneElement=function(k,Z,ue){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var pe=K({},k.props),Se=k.key;if(Z!=null)for(ke in Z.key!==void 0&&(Se=""+Z.key),Z)!$.call(Z,ke)||ke==="key"||ke==="__self"||ke==="__source"||ke==="ref"&&Z.ref===void 0||(pe[ke]=Z[ke]);var ke=arguments.length-2;if(ke===1)pe.children=ue;else if(1<ke){for(var Re=Array(ke),mt=0;mt<ke;mt++)Re[mt]=arguments[mt+2];pe.children=Re}return le(k.type,Se,pe)},Ue.createContext=function(k){return k={$$typeof:h,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:g,_context:k},k},Ue.createElement=function(k,Z,ue){var pe,Se={},ke=null;if(Z!=null)for(pe in Z.key!==void 0&&(ke=""+Z.key),Z)$.call(Z,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(Se[pe]=Z[pe]);var Re=arguments.length-2;if(Re===1)Se.children=ue;else if(1<Re){for(var mt=Array(Re),Ge=0;Ge<Re;Ge++)mt[Ge]=arguments[Ge+2];Se.children=mt}if(k&&k.defaultProps)for(pe in Re=k.defaultProps,Re)Se[pe]===void 0&&(Se[pe]=Re[pe]);return le(k,ke,Se)},Ue.createRef=function(){return{current:null}},Ue.forwardRef=function(k){return{$$typeof:v,render:k}},Ue.isValidElement=N,Ue.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:x}},Ue.memo=function(k,Z){return{$$typeof:w,type:k,compare:Z===void 0?null:Z}},Ue.startTransition=function(k){var Z=E.T,ue={};E.T=ue;try{var pe=k(),Se=E.S;Se!==null&&Se(ue,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(ce,P)}catch(ke){P(ke)}finally{Z!==null&&ue.types!==null&&(Z.types=ue.types),E.T=Z}},Ue.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},Ue.use=function(k){return E.H.use(k)},Ue.useActionState=function(k,Z,ue){return E.H.useActionState(k,Z,ue)},Ue.useCallback=function(k,Z){return E.H.useCallback(k,Z)},Ue.useContext=function(k){return E.H.useContext(k)},Ue.useDebugValue=function(){},Ue.useDeferredValue=function(k,Z){return E.H.useDeferredValue(k,Z)},Ue.useEffect=function(k,Z){return E.H.useEffect(k,Z)},Ue.useEffectEvent=function(k){return E.H.useEffectEvent(k)},Ue.useId=function(){return E.H.useId()},Ue.useImperativeHandle=function(k,Z,ue){return E.H.useImperativeHandle(k,Z,ue)},Ue.useInsertionEffect=function(k,Z){return E.H.useInsertionEffect(k,Z)},Ue.useLayoutEffect=function(k,Z){return E.H.useLayoutEffect(k,Z)},Ue.useMemo=function(k,Z){return E.H.useMemo(k,Z)},Ue.useOptimistic=function(k,Z){return E.H.useOptimistic(k,Z)},Ue.useReducer=function(k,Z,ue){return E.H.useReducer(k,Z,ue)},Ue.useRef=function(k){return E.H.useRef(k)},Ue.useState=function(k){return E.H.useState(k)},Ue.useSyncExternalStore=function(k,Z,ue){return E.H.useSyncExternalStore(k,Z,ue)},Ue.useTransition=function(){return E.H.useTransition()},Ue.version="19.2.6",Ue}var Lf;function Od(){return Lf||(Lf=1,ed.exports=Xb()),ed.exports}var f=Od();const Zb=$b(f),Kb=Yb({__proto__:null,default:Zb},[f]);var td={exports:{}},es={},ad={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function Jb(){return qf||(qf=1,(function(o){function s(A,F){var x=A.length;A.push(F);e:for(;0<x;){var P=x-1>>>1,H=A[P];if(0<m(H,F))A[P]=F,A[x]=H,x=P;else break e}}function r(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var F=A[0],x=A.pop();if(x!==F){A[0]=x;e:for(var P=0,H=A.length,k=H>>>1;P<k;){var Z=2*(P+1)-1,ue=A[Z],pe=Z+1,Se=A[pe];if(0>m(ue,x))pe<H&&0>m(Se,ue)?(A[P]=Se,A[pe]=x,P=pe):(A[P]=ue,A[Z]=x,P=Z);else if(pe<H&&0>m(Se,x))A[P]=Se,A[pe]=x,P=pe;else break e}}return F}function m(A,F){var x=A.sortIndex-F.sortIndex;return x!==0?x:A.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;o.unstable_now=function(){return g.now()}}else{var h=Date,v=h.now();o.unstable_now=function(){return h.now()-v}}var S=[],w=[],y=1,j=null,B=3,X=!1,te=!1,K=!1,z=!1,G=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function ee(A){for(var F=r(w);F!==null;){if(F.callback===null)u(w);else if(F.startTime<=A)u(w),F.sortIndex=F.expirationTime,s(S,F);else break;F=r(w)}}function se(A){if(K=!1,ee(A),!te)if(r(S)!==null)te=!0,ce||(ce=!0,R());else{var F=r(w);F!==null&&re(se,F.startTime-A)}}var ce=!1,E=-1,$=5,le=-1;function he(){return z?!0:!(o.unstable_now()-le<$)}function N(){if(z=!1,ce){var A=o.unstable_now();le=A;var F=!0;try{e:{te=!1,K&&(K=!1,U(E),E=-1),X=!0;var x=B;try{t:{for(ee(A),j=r(S);j!==null&&!(j.expirationTime>A&&he());){var P=j.callback;if(typeof P=="function"){j.callback=null,B=j.priorityLevel;var H=P(j.expirationTime<=A);if(A=o.unstable_now(),typeof H=="function"){j.callback=H,ee(A),F=!0;break t}j===r(S)&&u(S),ee(A)}else u(S);j=r(S)}if(j!==null)F=!0;else{var k=r(w);k!==null&&re(se,k.startTime-A),F=!1}}break e}finally{j=null,B=x,X=!1}F=void 0}}finally{F?R():ce=!1}}}var R;if(typeof O=="function")R=function(){O(N)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,M=ae.port2;ae.port1.onmessage=N,R=function(){M.postMessage(null)}}else R=function(){G(N,0)};function re(A,F){E=G(function(){A(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(A){A.callback=null},o.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<A?Math.floor(1e3/A):5},o.unstable_getCurrentPriorityLevel=function(){return B},o.unstable_next=function(A){switch(B){case 1:case 2:case 3:var F=3;break;default:F=B}var x=B;B=F;try{return A()}finally{B=x}},o.unstable_requestPaint=function(){z=!0},o.unstable_runWithPriority=function(A,F){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var x=B;B=A;try{return F()}finally{B=x}},o.unstable_scheduleCallback=function(A,F,x){var P=o.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?P+x:P):x=P,A){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=x+H,A={id:y++,callback:F,priorityLevel:A,startTime:x,expirationTime:H,sortIndex:-1},x>P?(A.sortIndex=x,s(w,A),r(S)===null&&A===r(w)&&(K?(U(E),E=-1):K=!0,re(se,x-P))):(A.sortIndex=H,s(S,A),te||X||(te=!0,ce||(ce=!0,R()))),A},o.unstable_shouldYield=he,o.unstable_wrapCallback=function(A){var F=B;return function(){var x=B;B=F;try{return A.apply(this,arguments)}finally{B=x}}}})(nd)),nd}var Bf;function Fb(){return Bf||(Bf=1,ad.exports=Jb()),ad.exports}var ld={exports:{}},Pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf;function Wb(){if(Gf)return Pt;Gf=1;var o=Od();function s(S){var w="https://react.dev/errors/"+S;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)w+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+S+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var u={d:{f:r,r:function(){throw Error(s(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},m=Symbol.for("react.portal");function g(S,w,y){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:j==null?null:""+j,children:S,containerInfo:w,implementation:y}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(S,w){if(S==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Pt.createPortal=function(S,w){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(s(299));return g(S,w,null,y)},Pt.flushSync=function(S){var w=h.T,y=u.p;try{if(h.T=null,u.p=2,S)return S()}finally{h.T=w,u.p=y,u.d.f()}},Pt.preconnect=function(S,w){typeof S=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,u.d.C(S,w))},Pt.prefetchDNS=function(S){typeof S=="string"&&u.d.D(S)},Pt.preinit=function(S,w){if(typeof S=="string"&&w&&typeof w.as=="string"){var y=w.as,j=v(y,w.crossOrigin),B=typeof w.integrity=="string"?w.integrity:void 0,X=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;y==="style"?u.d.S(S,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:j,integrity:B,fetchPriority:X}):y==="script"&&u.d.X(S,{crossOrigin:j,integrity:B,fetchPriority:X,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},Pt.preinitModule=function(S,w){if(typeof S=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var y=v(w.as,w.crossOrigin);u.d.M(S,{crossOrigin:y,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&u.d.M(S)},Pt.preload=function(S,w){if(typeof S=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var y=w.as,j=v(y,w.crossOrigin);u.d.L(S,y,{crossOrigin:j,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},Pt.preloadModule=function(S,w){if(typeof S=="string")if(w){var y=v(w.as,w.crossOrigin);u.d.m(S,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:y,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else u.d.m(S)},Pt.requestFormReset=function(S){u.d.r(S)},Pt.unstable_batchedUpdates=function(S,w){return S(w)},Pt.useFormState=function(S,w,y){return h.H.useFormState(S,w,y)},Pt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Pt.version="19.2.6",Pt}var Yf;function Zh(){if(Yf)return ld.exports;Yf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),ld.exports=Wb(),ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function Pb(){if($f)return es;$f=1;var o=Fb(),s=Od(),r=Zh();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)n+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var n=e,l=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(l=n.return),e=n.return;while(e)}return n.tag===3?l:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function S(e){if(g(e)!==e)throw Error(u(188))}function w(e){var n=e.alternate;if(!n){if(n=g(e),n===null)throw Error(u(188));return n!==e?null:e}for(var l=e,i=n;;){var c=l.return;if(c===null)break;var d=c.alternate;if(d===null){if(i=c.return,i!==null){l=i;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===l)return S(c),e;if(d===i)return S(c),n;d=d.sibling}throw Error(u(188))}if(l.return!==i.return)l=c,i=d;else{for(var p=!1,b=c.child;b;){if(b===l){p=!0,l=c,i=d;break}if(b===i){p=!0,i=c,l=d;break}b=b.sibling}if(!p){for(b=d.child;b;){if(b===l){p=!0,l=d,i=c;break}if(b===i){p=!0,i=d,l=c;break}b=b.sibling}if(!p)throw Error(u(189))}}if(l.alternate!==i)throw Error(u(190))}if(l.tag!==3)throw Error(u(188));return l.stateNode.current===l?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var j=Object.assign,B=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),te=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),O=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),le=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Symbol.for("react.client.reference");function M(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case G:return"Profiler";case z:return"StrictMode";case se:return"Suspense";case ce:return"SuspenseList";case le:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case te:return"Portal";case O:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case ee:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case E:return n=e.displayName||null,n!==null?n:M(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return M(e(n))}catch{}}return null}var re=Array.isArray,A=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x={pending:!1,data:null,method:null,action:null},P=[],H=-1;function k(e){return{current:e}}function Z(e){0>H||(e.current=P[H],P[H]=null,H--)}function ue(e,n){H++,P[H]=e.current,e.current=n}var pe=k(null),Se=k(null),ke=k(null),Re=k(null);function mt(e,n){switch(ue(ke,n),ue(Se,e),ue(pe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?nf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=nf(n),e=lf(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(pe),ue(pe,e)}function Ge(){Z(pe),Z(Se),Z(ke)}function Pe(e){e.memoizedState!==null&&ue(Re,e);var n=pe.current,l=lf(n,e.type);n!==l&&(ue(Se,e),ue(pe,l))}function Lt(e){Se.current===e&&(Z(pe),Z(Se)),Re.current===e&&(Z(Re),Ji._currentValue=x)}var Mt,ua;function yt(e){if(Mt===void 0)try{throw Error()}catch(l){var n=l.stack.trim().match(/\n( *(at )?)/);Mt=n&&n[1]||"",ua=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+e+ua}var aa=!1;function Yt(e,n){if(!e||aa)return"";aa=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(W){var J=W}Reflect.construct(e,[],ie)}else{try{ie.call()}catch(W){J=W}e.call(ie.prototype)}}else{try{throw Error()}catch(W){J=W}(ie=e())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(W){if(W&&J&&typeof W.stack=="string")return[W.stack,J.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=i.DetermineComponentFrameRoot(),p=d[0],b=d[1];if(p&&b){var C=p.split(`
`),Q=b.split(`
`);for(c=i=0;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(i===C.length||c===Q.length)for(i=C.length-1,c=Q.length-1;1<=i&&0<=c&&C[i]!==Q[c];)c--;for(;1<=i&&0<=c;i--,c--)if(C[i]!==Q[c]){if(i!==1||c!==1)do if(i--,c--,0>c||C[i]!==Q[c]){var I=`
`+C[i].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=i&&0<=c);break}}}finally{aa=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?yt(l):""}function pa(e,n){switch(e.tag){case 26:case 27:case 5:return yt(e.type);case 16:return yt("Lazy");case 13:return e.child!==n&&n!==null?yt("Suspense Fallback"):yt("Suspense");case 19:return yt("SuspenseList");case 0:case 15:return Yt(e.type,!1);case 11:return Yt(e.type.render,!1);case 1:return Yt(e.type,!0);case 31:return yt("Activity");default:return""}}function ft(e){try{var n="",l=null;do n+=pa(e,l),l=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Qt=Object.prototype.hasOwnProperty,Wt=o.unstable_scheduleCallback,St=o.unstable_cancelCallback,ma=o.unstable_shouldYield,T=o.unstable_requestPaint,ye=o.unstable_now,qe=o.unstable_getCurrentPriorityLevel,ve=o.unstable_ImmediatePriority,ot=o.unstable_UserBlockingPriority,Y=o.unstable_NormalPriority,Ne=o.unstable_LowPriority,we=o.unstable_IdlePriority,ze=o.log,Fe=o.unstable_setDisableYieldValue,Qe=null,Ye=null;function He(e){if(typeof ze=="function"&&Fe(e),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(Qe,e)}catch{}}var rt=Math.clz32?Math.clz32:Pn,wl=Math.log,Wn=Math.LN2;function Pn(e){return e>>>=0,e===0?32:31-(wl(e)/Wn|0)|0}var Ya=256,fa=262144,$a=4194304;function ea(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function L(e,n,l){var i=e.pendingLanes;if(i===0)return 0;var c=0,d=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~d,i!==0?c=ea(i):(p&=b,p!==0?c=ea(p):l||(l=b&~e,l!==0&&(c=ea(l))))):(b=i&~d,b!==0?c=ea(b):p!==0?c=ea(p):l||(l=i&~e,l!==0&&(c=ea(l)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,l=n&-n,d>=l||d===32&&(l&4194048)!==0)?n:c}function de(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=$a;return $a<<=1,($a&62914560)===0&&($a=4194304),e}function Te(e){for(var n=[],l=0;31>l;l++)n.push(e);return n}function We(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,n,l,i,c,d){var p=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var b=e.entanglements,C=e.expirationTimes,Q=e.hiddenUpdates;for(l=p&~l;0<l;){var I=31-rt(l),ie=1<<I;b[I]=0,C[I]=-1;var J=Q[I];if(J!==null)for(Q[I]=null,I=0;I<J.length;I++){var W=J[I];W!==null&&(W.lane&=-536870913)}l&=~ie}i!==0&&Me(e,i,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(p&~n))}function Me(e,n,l){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-rt(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|l&261930}function ha(e,n){var l=e.entangledLanes|=n;for(e=e.entanglements;l;){var i=31-rt(l),c=1<<i;c&n|e[i]&n&&(e[i]|=n),l&=~c}}function _(e,n){var l=n&-n;return l=(l&42)!==0?1:xe(l),(l&(e.suspendedLanes|n))!==0?0:l}function xe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ge(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ae(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:zf(e.type))}function Dt(e,n){var l=F.p;try{return F.p=e,n()}finally{F.p=l}}var xa=Math.random().toString(36).slice(2),vt="__reactFiber$"+xa,na="__reactProps$"+xa,Nl="__reactContainer$"+xa,Vo="__reactEvents$"+xa,Mx="__reactListeners$"+xa,Dx="__reactHandles$"+xa,Vd="__reactResources$"+xa,di="__reactMarker$"+xa;function Qo(e){delete e[vt],delete e[na],delete e[Vo],delete e[Mx],delete e[Dx]}function _l(e){var n=e[vt];if(n)return n;for(var l=e.parentNode;l;){if(n=l[Nl]||l[vt]){if(l=n.alternate,n.child!==null||l!==null&&l.child!==null)for(e=pf(e);e!==null;){if(l=e[vt])return l;e=pf(e)}return n}e=l,l=e.parentNode}return null}function Sl(e){if(e=e[vt]||e[Nl]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ui(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function kl(e){var n=e[Vd];return n||(n=e[Vd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $t(e){e[di]=!0}var Qd=new Set,Xd={};function In(e,n){Cl(e,n),Cl(e+"Capture",n)}function Cl(e,n){for(Xd[e]=n,e=0;e<n.length;e++)Qd.add(n[e])}var Ox=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zd={},Kd={};function Ax(e){return Qt.call(Kd,e)?!0:Qt.call(Zd,e)?!1:Ox.test(e)?Kd[e]=!0:(Zd[e]=!0,!1)}function ms(e,n,l){if(Ax(n))if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+l)}}function fs(e,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+l)}}function Fa(e,n,l,i){if(i===null)e.removeAttribute(l);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(n,l,""+i)}}function za(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ux(e,n,l){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,d=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(p){l=""+p,d.call(this,p)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(p){l=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xo(e){if(!e._valueTracker){var n=Jd(e)?"checked":"value";e._valueTracker=Ux(e,n,""+e[n])}}function Fd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var l=n.getValue(),i="";return e&&(i=Jd(e)?e.checked?"true":"false":e.value),e=i,e!==l?(n.setValue(e),!0):!1}function hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rx=/[\n"\\]/g;function Ta(e){return e.replace(Rx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zo(e,n,l,i,c,d,p,b){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+za(n)):e.value!==""+za(n)&&(e.value=""+za(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?Ko(e,p,za(n)):l!=null?Ko(e,p,za(l)):i!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+za(b):e.removeAttribute("name")}function Wd(e,n,l,i,c,d,p,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||l!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Xo(e);return}l=l!=null?""+za(l):"",n=n!=null?""+za(n):l,b||n===e.value||(e.value=n),e.defaultValue=n}i=i??c,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Xo(e)}function Ko(e,n,l){n==="number"&&hs(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function zl(e,n,l,i){if(e=e.options,n){n={};for(var c=0;c<l.length;c++)n["$"+l[c]]=!0;for(l=0;l<e.length;l++)c=n.hasOwnProperty("$"+e[l].value),e[l].selected!==c&&(e[l].selected=c),c&&i&&(e[l].defaultSelected=!0)}else{for(l=""+za(l),n=null,c=0;c<e.length;c++){if(e[c].value===l){e[c].selected=!0,i&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Pd(e,n,l){if(n!=null&&(n=""+za(n),n!==e.value&&(e.value=n),l==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=l!=null?""+za(l):""}function Id(e,n,l,i){if(n==null){if(i!=null){if(l!=null)throw Error(u(92));if(re(i)){if(1<i.length)throw Error(u(93));i=i[0]}l=i}l==null&&(l=""),n=l}l=za(n),e.defaultValue=l,i=e.textContent,i===l&&i!==""&&i!==null&&(e.value=i),Xo(e)}function Tl(e,n){if(n){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=n;return}}e.textContent=n}var Hx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function eu(e,n,l){var i=n.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,l):typeof l!="number"||l===0||Hx.has(n)?n==="float"?e.cssFloat=l:e[n]=(""+l).trim():e[n]=l+"px"}function tu(e,n,l){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,l!=null){for(var i in l)!l.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var c in n)i=n[c],n.hasOwnProperty(c)&&l[c]!==i&&eu(e,c,i)}else for(var d in n)n.hasOwnProperty(d)&&eu(e,d,n[d])}function Jo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xs(e){return qx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wa(){}var Fo=null;function Wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var El=null,Ml=null;function au(e){var n=Sl(e);if(n&&(e=n.stateNode)){var l=e[na]||null;e:switch(e=n.stateNode,n.type){case"input":if(Zo(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),n=l.name,l.type==="radio"&&n!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ta(""+n)+'"][type="radio"]'),n=0;n<l.length;n++){var i=l[n];if(i!==e&&i.form===e.form){var c=i[na]||null;if(!c)throw Error(u(90));Zo(i,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<l.length;n++)i=l[n],i.form===e.form&&Fd(i)}break e;case"textarea":Pd(e,l.value,l.defaultValue);break e;case"select":n=l.value,n!=null&&zl(e,!!l.multiple,n,!1)}}}var Po=!1;function nu(e,n,l){if(Po)return e(n,l);Po=!0;try{var i=e(n);return i}finally{if(Po=!1,(El!==null||Ml!==null)&&(no(),El&&(n=El,e=Ml,Ml=El=null,au(n),e)))for(n=0;n<e.length;n++)au(e[n])}}function pi(e,n){var l=e.stateNode;if(l===null)return null;var i=l[na]||null;if(i===null)return null;l=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(u(231,n,typeof l));return l}var Pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=!1;if(Pa)try{var mi={};Object.defineProperty(mi,"passive",{get:function(){Io=!0}}),window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{Io=!1}var yn=null,er=null,gs=null;function lu(){if(gs)return gs;var e,n=er,l=n.length,i,c="value"in yn?yn.value:yn.textContent,d=c.length;for(e=0;e<l&&n[e]===c[e];e++);var p=l-e;for(i=1;i<=p&&n[l-i]===c[d-i];i++);return gs=c.slice(e,1<i?1-i:void 0)}function bs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ys(){return!0}function iu(){return!1}function la(e){function n(l,i,c,d,p){this._reactName=l,this._targetInst=c,this.type=i,this.nativeEvent=d,this.target=p,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(l=e[b],this[b]=l?l(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ys:iu,this.isPropagationStopped=iu,this}return j(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ys)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ys)},persist:function(){},isPersistent:ys}),n}var el={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vs=la(el),fi=j({},el,{view:0,detail:0}),Bx=la(fi),tr,ar,hi,js=j({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hi&&(hi&&e.type==="mousemove"?(tr=e.screenX-hi.screenX,ar=e.screenY-hi.screenY):ar=tr=0,hi=e),tr)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),su=la(js),Gx=j({},js,{dataTransfer:0}),Yx=la(Gx),$x=j({},fi,{relatedTarget:0}),nr=la($x),Vx=j({},el,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=la(Vx),Xx=j({},el,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zx=la(Xx),Kx=j({},el,{data:0}),ou=la(Kx),Jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Px(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wx[e])?!!n[e]:!1}function lr(){return Px}var Ix=j({},fi,{key:function(e){if(e.key){var n=Jx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=bs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lr,charCode:function(e){return e.type==="keypress"?bs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),eg=la(Ix),tg=j({},js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=la(tg),ag=j({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lr}),ng=la(ag),lg=j({},el,{propertyName:0,elapsedTime:0,pseudoElement:0}),ig=la(lg),sg=j({},js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),og=la(sg),rg=j({},el,{newState:0,oldState:0}),cg=la(rg),dg=[9,13,27,32],ir=Pa&&"CompositionEvent"in window,xi=null;Pa&&"documentMode"in document&&(xi=document.documentMode);var ug=Pa&&"TextEvent"in window&&!xi,cu=Pa&&(!ir||xi&&8<xi&&11>=xi),du=" ",uu=!1;function pu(e,n){switch(e){case"keyup":return dg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dl=!1;function pg(e,n){switch(e){case"compositionend":return mu(n);case"keypress":return n.which!==32?null:(uu=!0,du);case"textInput":return e=n.data,e===du&&uu?null:e;default:return null}}function mg(e,n){if(Dl)return e==="compositionend"||!ir&&pu(e,n)?(e=lu(),gs=er=yn=null,Dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cu&&n.locale!=="ko"?null:n.data;default:return null}}var fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!fg[e.type]:n==="textarea"}function hu(e,n,l,i){El?Ml?Ml.push(i):Ml=[i]:El=i,n=uo(n,"onChange"),0<n.length&&(l=new vs("onChange","change",null,l,i),e.push({event:l,listeners:n}))}var gi=null,bi=null;function hg(e){Wm(e,0)}function ws(e){var n=ui(e);if(Fd(n))return e}function xu(e,n){if(e==="change")return n}var gu=!1;if(Pa){var sr;if(Pa){var or="oninput"in document;if(!or){var bu=document.createElement("div");bu.setAttribute("oninput","return;"),or=typeof bu.oninput=="function"}sr=or}else sr=!1;gu=sr&&(!document.documentMode||9<document.documentMode)}function yu(){gi&&(gi.detachEvent("onpropertychange",vu),bi=gi=null)}function vu(e){if(e.propertyName==="value"&&ws(bi)){var n=[];hu(n,bi,e,Wo(e)),nu(hg,n)}}function xg(e,n,l){e==="focusin"?(yu(),gi=n,bi=l,gi.attachEvent("onpropertychange",vu)):e==="focusout"&&yu()}function gg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ws(bi)}function bg(e,n){if(e==="click")return ws(n)}function yg(e,n){if(e==="input"||e==="change")return ws(n)}function vg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ga=typeof Object.is=="function"?Object.is:vg;function yi(e,n){if(ga(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var l=Object.keys(e),i=Object.keys(n);if(l.length!==i.length)return!1;for(i=0;i<l.length;i++){var c=l[i];if(!Qt.call(n,c)||!ga(e[c],n[c]))return!1}return!0}function ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wu(e,n){var l=ju(e);e=0;for(var i;l;){if(l.nodeType===3){if(i=e+l.textContent.length,e<=n&&i>=n)return{node:l,offset:n-e};e=i}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ju(l)}}function Nu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Nu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _u(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=hs(e.document);n instanceof e.HTMLIFrameElement;){try{var l=typeof n.contentWindow.location.href=="string"}catch{l=!1}if(l)e=n.contentWindow;else break;n=hs(e.document)}return n}function rr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var jg=Pa&&"documentMode"in document&&11>=document.documentMode,Ol=null,cr=null,vi=null,dr=!1;function Su(e,n,l){var i=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;dr||Ol==null||Ol!==hs(i)||(i=Ol,"selectionStart"in i&&rr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vi&&yi(vi,i)||(vi=i,i=uo(cr,"onSelect"),0<i.length&&(n=new vs("onSelect","select",null,n,l),e.push({event:n,listeners:i}),n.target=Ol)))}function tl(e,n){var l={};return l[e.toLowerCase()]=n.toLowerCase(),l["Webkit"+e]="webkit"+n,l["Moz"+e]="moz"+n,l}var Al={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionrun:tl("Transition","TransitionRun"),transitionstart:tl("Transition","TransitionStart"),transitioncancel:tl("Transition","TransitionCancel"),transitionend:tl("Transition","TransitionEnd")},ur={},ku={};Pa&&(ku=document.createElement("div").style,"AnimationEvent"in window||(delete Al.animationend.animation,delete Al.animationiteration.animation,delete Al.animationstart.animation),"TransitionEvent"in window||delete Al.transitionend.transition);function al(e){if(ur[e])return ur[e];if(!Al[e])return e;var n=Al[e],l;for(l in n)if(n.hasOwnProperty(l)&&l in ku)return ur[e]=n[l];return e}var Cu=al("animationend"),zu=al("animationiteration"),Tu=al("animationstart"),wg=al("transitionrun"),Ng=al("transitionstart"),_g=al("transitioncancel"),Eu=al("transitionend"),Mu=new Map,pr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pr.push("scrollEnd");function qa(e,n){Mu.set(e,n),In(n,[e])}var Ns=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ea=[],Ul=0,mr=0;function _s(){for(var e=Ul,n=mr=Ul=0;n<e;){var l=Ea[n];Ea[n++]=null;var i=Ea[n];Ea[n++]=null;var c=Ea[n];Ea[n++]=null;var d=Ea[n];if(Ea[n++]=null,i!==null&&c!==null){var p=i.pending;p===null?c.next=c:(c.next=p.next,p.next=c),i.pending=c}d!==0&&Du(l,c,d)}}function Ss(e,n,l,i){Ea[Ul++]=e,Ea[Ul++]=n,Ea[Ul++]=l,Ea[Ul++]=i,mr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function fr(e,n,l,i){return Ss(e,n,l,i),ks(e)}function nl(e,n){return Ss(e,null,null,n),ks(e)}function Du(e,n,l){e.lanes|=l;var i=e.alternate;i!==null&&(i.lanes|=l);for(var c=!1,d=e.return;d!==null;)d.childLanes|=l,i=d.alternate,i!==null&&(i.childLanes|=l),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-rt(l),e=d.hiddenUpdates,i=e[c],i===null?e[c]=[n]:i.push(n),n.lane=l|536870912),d):null}function ks(e){if(50<Yi)throw Yi=0,Nc=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Rl={};function Sg(e,n,l,i){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ba(e,n,l,i){return new Sg(e,n,l,i)}function hr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ia(e,n){var l=e.alternate;return l===null?(l=ba(e.tag,n,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=n,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,n=e.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Ou(e,n){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,n=l.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Cs(e,n,l,i,c,d){var p=0;if(i=e,typeof e=="function")hr(e)&&(p=1);else if(typeof e=="string")p=Eb(e,l,pe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case le:return e=ba(31,l,n,c),e.elementType=le,e.lanes=d,e;case K:return ll(l.children,c,d,n);case z:p=8,c|=24;break;case G:return e=ba(12,l,n,c|2),e.elementType=G,e.lanes=d,e;case se:return e=ba(13,l,n,c),e.elementType=se,e.lanes=d,e;case ce:return e=ba(19,l,n,c),e.elementType=ce,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:p=10;break e;case U:p=9;break e;case ee:p=11;break e;case E:p=14;break e;case $:p=16,i=null;break e}p=29,l=Error(u(130,e===null?"null":typeof e,"")),i=null}return n=ba(p,l,n,c),n.elementType=e,n.type=i,n.lanes=d,n}function ll(e,n,l,i){return e=ba(7,e,i,n),e.lanes=l,e}function xr(e,n,l){return e=ba(6,e,null,n),e.lanes=l,e}function Au(e){var n=ba(18,null,null,0);return n.stateNode=e,n}function gr(e,n,l){return n=ba(4,e.children!==null?e.children:[],e.key,n),n.lanes=l,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Uu=new WeakMap;function Ma(e,n){if(typeof e=="object"&&e!==null){var l=Uu.get(e);return l!==void 0?l:(n={value:e,source:n,stack:ft(n)},Uu.set(e,n),n)}return{value:e,source:n,stack:ft(n)}}var Hl=[],Ll=0,zs=null,ji=0,Da=[],Oa=0,vn=null,Va=1,Qa="";function en(e,n){Hl[Ll++]=ji,Hl[Ll++]=zs,zs=e,ji=n}function Ru(e,n,l){Da[Oa++]=Va,Da[Oa++]=Qa,Da[Oa++]=vn,vn=e;var i=Va;e=Qa;var c=32-rt(i)-1;i&=~(1<<c),l+=1;var d=32-rt(n)+c;if(30<d){var p=c-c%5;d=(i&(1<<p)-1).toString(32),i>>=p,c-=p,Va=1<<32-rt(n)+c|l<<c|i,Qa=d+e}else Va=1<<d|l<<c|i,Qa=e}function br(e){e.return!==null&&(en(e,1),Ru(e,1,0))}function yr(e){for(;e===zs;)zs=Hl[--Ll],Hl[Ll]=null,ji=Hl[--Ll],Hl[Ll]=null;for(;e===vn;)vn=Da[--Oa],Da[Oa]=null,Qa=Da[--Oa],Da[Oa]=null,Va=Da[--Oa],Da[Oa]=null}function Hu(e,n){Da[Oa++]=Va,Da[Oa++]=Qa,Da[Oa++]=vn,Va=n.id,Qa=n.overflow,vn=e}var Xt=null,ht=null,Je=!1,jn=null,Aa=!1,vr=Error(u(519));function wn(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wi(Ma(n,e)),vr}function Lu(e){var n=e.stateNode,l=e.type,i=e.memoizedProps;switch(n[vt]=e,n[na]=i,l){case"dialog":Ve("cancel",n),Ve("close",n);break;case"iframe":case"object":case"embed":Ve("load",n);break;case"video":case"audio":for(l=0;l<Vi.length;l++)Ve(Vi[l],n);break;case"source":Ve("error",n);break;case"img":case"image":case"link":Ve("error",n),Ve("load",n);break;case"details":Ve("toggle",n);break;case"input":Ve("invalid",n),Wd(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ve("invalid",n);break;case"textarea":Ve("invalid",n),Id(n,i.value,i.defaultValue,i.children)}l=i.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||n.textContent===""+l||i.suppressHydrationWarning===!0||tf(n.textContent,l)?(i.popover!=null&&(Ve("beforetoggle",n),Ve("toggle",n)),i.onScroll!=null&&Ve("scroll",n),i.onScrollEnd!=null&&Ve("scrollend",n),i.onClick!=null&&(n.onclick=Wa),n=!0):n=!1,n||wn(e,!0)}function qu(e){for(Xt=e.return;Xt;)switch(Xt.tag){case 5:case 31:case 13:Aa=!1;return;case 27:case 3:Aa=!0;return;default:Xt=Xt.return}}function ql(e){if(e!==Xt)return!1;if(!Je)return qu(e),Je=!0,!1;var n=e.tag,l;if((l=n!==3&&n!==27)&&((l=n===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Lc(e.type,e.memoizedProps)),l=!l),l&&ht&&wn(e),qu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ht=uf(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ht=uf(e)}else n===27?(n=ht,Rn(e.type)?(e=$c,$c=null,ht=e):ht=n):ht=Xt?Ra(e.stateNode.nextSibling):null;return!0}function il(){ht=Xt=null,Je=!1}function jr(){var e=jn;return e!==null&&(ra===null?ra=e:ra.push.apply(ra,e),jn=null),e}function wi(e){jn===null?jn=[e]:jn.push(e)}var wr=k(null),sl=null,tn=null;function Nn(e,n,l){ue(wr,n._currentValue),n._currentValue=l}function an(e){e._currentValue=wr.current,Z(wr)}function Nr(e,n,l){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===l)break;e=e.return}}function _r(e,n,l,i){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var p=c.child;d=d.firstContext;e:for(;d!==null;){var b=d;d=c;for(var C=0;C<n.length;C++)if(b.context===n[C]){d.lanes|=l,b=d.alternate,b!==null&&(b.lanes|=l),Nr(d.return,l,e),i||(p=null);break e}d=b.next}}else if(c.tag===18){if(p=c.return,p===null)throw Error(u(341));p.lanes|=l,d=p.alternate,d!==null&&(d.lanes|=l),Nr(p,l,e),p=null}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===e){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}}function Bl(e,n,l,i){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var p=c.alternate;if(p===null)throw Error(u(387));if(p=p.memoizedProps,p!==null){var b=c.type;ga(c.pendingProps.value,p.value)||(e!==null?e.push(b):e=[b])}}else if(c===Re.current){if(p=c.alternate,p===null)throw Error(u(387));p.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ji):e=[Ji])}c=c.return}e!==null&&_r(n,e,l,i),n.flags|=262144}function Ts(e){for(e=e.firstContext;e!==null;){if(!ga(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ol(e){sl=e,tn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zt(e){return Bu(sl,e)}function Es(e,n){return sl===null&&ol(e),Bu(e,n)}function Bu(e,n){var l=n._currentValue;if(n={context:n,memoizedValue:l,next:null},tn===null){if(e===null)throw Error(u(308));tn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else tn=tn.next=n;return l}var kg=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(l,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(l){return l()})}},Cg=o.unstable_scheduleCallback,zg=o.unstable_NormalPriority,Ot={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sr(){return{controller:new kg,data:new Map,refCount:0}}function Ni(e){e.refCount--,e.refCount===0&&Cg(zg,function(){e.controller.abort()})}var _i=null,kr=0,Gl=0,Yl=null;function Tg(e,n){if(_i===null){var l=_i=[];kr=0,Gl=Tc(),Yl={status:"pending",value:void 0,then:function(i){l.push(i)}}}return kr++,n.then(Gu,Gu),n}function Gu(){if(--kr===0&&_i!==null){Yl!==null&&(Yl.status="fulfilled");var e=_i;_i=null,Gl=0,Yl=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Eg(e,n){var l=[],i={status:"pending",value:null,reason:null,then:function(c){l.push(c)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var c=0;c<l.length;c++)(0,l[c])(n)},function(c){for(i.status="rejected",i.reason=c,c=0;c<l.length;c++)(0,l[c])(void 0)}),i}var Yu=A.S;A.S=function(e,n){Sm=ye(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Tg(e,n),Yu!==null&&Yu(e,n)};var rl=k(null);function Cr(){var e=rl.current;return e!==null?e:pt.pooledCache}function Ms(e,n){n===null?ue(rl,rl.current):ue(rl,n.pool)}function $u(){var e=Cr();return e===null?null:{parent:Ot._currentValue,pool:e}}var $l=Error(u(460)),zr=Error(u(474)),Ds=Error(u(542)),Os={then:function(){}};function Vu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qu(e,n,l){switch(l=e[l],l===void 0?e.push(n):l!==n&&(n.then(Wa,Wa),n=l),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zu(e),e;default:if(typeof n.status=="string")n.then(Wa,Wa);else{if(e=pt,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=i}},function(i){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zu(e),e}throw dl=n,$l}}function cl(e){try{var n=e._init;return n(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(dl=l,$l):l}}var dl=null;function Xu(){if(dl===null)throw Error(u(459));var e=dl;return dl=null,e}function Zu(e){if(e===$l||e===Ds)throw Error(u(483))}var Vl=null,Si=0;function As(e){var n=Si;return Si+=1,Vl===null&&(Vl=[]),Qu(Vl,e,n)}function ki(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Us(e,n){throw n.$$typeof===B?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ku(e){function n(q,D){if(e){var V=q.deletions;V===null?(q.deletions=[D],q.flags|=16):V.push(D)}}function l(q,D){if(!e)return null;for(;D!==null;)n(q,D),D=D.sibling;return null}function i(q){for(var D=new Map;q!==null;)q.key!==null?D.set(q.key,q):D.set(q.index,q),q=q.sibling;return D}function c(q,D){return q=Ia(q,D),q.index=0,q.sibling=null,q}function d(q,D,V){return q.index=V,e?(V=q.alternate,V!==null?(V=V.index,V<D?(q.flags|=67108866,D):V):(q.flags|=67108866,D)):(q.flags|=1048576,D)}function p(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function b(q,D,V,ne){return D===null||D.tag!==6?(D=xr(V,q.mode,ne),D.return=q,D):(D=c(D,V),D.return=q,D)}function C(q,D,V,ne){var Ce=V.type;return Ce===K?I(q,D,V.props.children,ne,V.key):D!==null&&(D.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===$&&cl(Ce)===D.type)?(D=c(D,V.props),ki(D,V),D.return=q,D):(D=Cs(V.type,V.key,V.props,null,q.mode,ne),ki(D,V),D.return=q,D)}function Q(q,D,V,ne){return D===null||D.tag!==4||D.stateNode.containerInfo!==V.containerInfo||D.stateNode.implementation!==V.implementation?(D=gr(V,q.mode,ne),D.return=q,D):(D=c(D,V.children||[]),D.return=q,D)}function I(q,D,V,ne,Ce){return D===null||D.tag!==7?(D=ll(V,q.mode,ne,Ce),D.return=q,D):(D=c(D,V),D.return=q,D)}function ie(q,D,V){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=xr(""+D,q.mode,V),D.return=q,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case X:return V=Cs(D.type,D.key,D.props,null,q.mode,V),ki(V,D),V.return=q,V;case te:return D=gr(D,q.mode,V),D.return=q,D;case $:return D=cl(D),ie(q,D,V)}if(re(D)||R(D))return D=ll(D,q.mode,V,null),D.return=q,D;if(typeof D.then=="function")return ie(q,As(D),V);if(D.$$typeof===O)return ie(q,Es(q,D),V);Us(q,D)}return null}function J(q,D,V,ne){var Ce=D!==null?D.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return Ce!==null?null:b(q,D,""+V,ne);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case X:return V.key===Ce?C(q,D,V,ne):null;case te:return V.key===Ce?Q(q,D,V,ne):null;case $:return V=cl(V),J(q,D,V,ne)}if(re(V)||R(V))return Ce!==null?null:I(q,D,V,ne,null);if(typeof V.then=="function")return J(q,D,As(V),ne);if(V.$$typeof===O)return J(q,D,Es(q,V),ne);Us(q,V)}return null}function W(q,D,V,ne,Ce){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return q=q.get(V)||null,b(D,q,""+ne,Ce);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case X:return q=q.get(ne.key===null?V:ne.key)||null,C(D,q,ne,Ce);case te:return q=q.get(ne.key===null?V:ne.key)||null,Q(D,q,ne,Ce);case $:return ne=cl(ne),W(q,D,V,ne,Ce)}if(re(ne)||R(ne))return q=q.get(V)||null,I(D,q,ne,Ce,null);if(typeof ne.then=="function")return W(q,D,V,As(ne),Ce);if(ne.$$typeof===O)return W(q,D,V,Es(D,ne),Ce);Us(D,ne)}return null}function je(q,D,V,ne){for(var Ce=null,Ie=null,_e=D,Be=D=0,Ze=null;_e!==null&&Be<V.length;Be++){_e.index>Be?(Ze=_e,_e=null):Ze=_e.sibling;var et=J(q,_e,V[Be],ne);if(et===null){_e===null&&(_e=Ze);break}e&&_e&&et.alternate===null&&n(q,_e),D=d(et,D,Be),Ie===null?Ce=et:Ie.sibling=et,Ie=et,_e=Ze}if(Be===V.length)return l(q,_e),Je&&en(q,Be),Ce;if(_e===null){for(;Be<V.length;Be++)_e=ie(q,V[Be],ne),_e!==null&&(D=d(_e,D,Be),Ie===null?Ce=_e:Ie.sibling=_e,Ie=_e);return Je&&en(q,Be),Ce}for(_e=i(_e);Be<V.length;Be++)Ze=W(_e,q,Be,V[Be],ne),Ze!==null&&(e&&Ze.alternate!==null&&_e.delete(Ze.key===null?Be:Ze.key),D=d(Ze,D,Be),Ie===null?Ce=Ze:Ie.sibling=Ze,Ie=Ze);return e&&_e.forEach(function(Gn){return n(q,Gn)}),Je&&en(q,Be),Ce}function Ee(q,D,V,ne){if(V==null)throw Error(u(151));for(var Ce=null,Ie=null,_e=D,Be=D=0,Ze=null,et=V.next();_e!==null&&!et.done;Be++,et=V.next()){_e.index>Be?(Ze=_e,_e=null):Ze=_e.sibling;var Gn=J(q,_e,et.value,ne);if(Gn===null){_e===null&&(_e=Ze);break}e&&_e&&Gn.alternate===null&&n(q,_e),D=d(Gn,D,Be),Ie===null?Ce=Gn:Ie.sibling=Gn,Ie=Gn,_e=Ze}if(et.done)return l(q,_e),Je&&en(q,Be),Ce;if(_e===null){for(;!et.done;Be++,et=V.next())et=ie(q,et.value,ne),et!==null&&(D=d(et,D,Be),Ie===null?Ce=et:Ie.sibling=et,Ie=et);return Je&&en(q,Be),Ce}for(_e=i(_e);!et.done;Be++,et=V.next())et=W(_e,q,Be,et.value,ne),et!==null&&(e&&et.alternate!==null&&_e.delete(et.key===null?Be:et.key),D=d(et,D,Be),Ie===null?Ce=et:Ie.sibling=et,Ie=et);return e&&_e.forEach(function(Gb){return n(q,Gb)}),Je&&en(q,Be),Ce}function ut(q,D,V,ne){if(typeof V=="object"&&V!==null&&V.type===K&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case X:e:{for(var Ce=V.key;D!==null;){if(D.key===Ce){if(Ce=V.type,Ce===K){if(D.tag===7){l(q,D.sibling),ne=c(D,V.props.children),ne.return=q,q=ne;break e}}else if(D.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===$&&cl(Ce)===D.type){l(q,D.sibling),ne=c(D,V.props),ki(ne,V),ne.return=q,q=ne;break e}l(q,D);break}else n(q,D);D=D.sibling}V.type===K?(ne=ll(V.props.children,q.mode,ne,V.key),ne.return=q,q=ne):(ne=Cs(V.type,V.key,V.props,null,q.mode,ne),ki(ne,V),ne.return=q,q=ne)}return p(q);case te:e:{for(Ce=V.key;D!==null;){if(D.key===Ce)if(D.tag===4&&D.stateNode.containerInfo===V.containerInfo&&D.stateNode.implementation===V.implementation){l(q,D.sibling),ne=c(D,V.children||[]),ne.return=q,q=ne;break e}else{l(q,D);break}else n(q,D);D=D.sibling}ne=gr(V,q.mode,ne),ne.return=q,q=ne}return p(q);case $:return V=cl(V),ut(q,D,V,ne)}if(re(V))return je(q,D,V,ne);if(R(V)){if(Ce=R(V),typeof Ce!="function")throw Error(u(150));return V=Ce.call(V),Ee(q,D,V,ne)}if(typeof V.then=="function")return ut(q,D,As(V),ne);if(V.$$typeof===O)return ut(q,D,Es(q,V),ne);Us(q,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,D!==null&&D.tag===6?(l(q,D.sibling),ne=c(D,V),ne.return=q,q=ne):(l(q,D),ne=xr(V,q.mode,ne),ne.return=q,q=ne),p(q)):l(q,D)}return function(q,D,V,ne){try{Si=0;var Ce=ut(q,D,V,ne);return Vl=null,Ce}catch(_e){if(_e===$l||_e===Ds)throw _e;var Ie=ba(29,_e,null,q.mode);return Ie.lanes=ne,Ie.return=q,Ie}finally{}}}var ul=Ku(!0),Ju=Ku(!1),_n=!1;function Tr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Er(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function kn(e,n,l){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(at&2)!==0){var c=i.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),i.pending=n,n=ks(e),Du(e,null,l),n}return Ss(e,i,n,l),ks(e)}function Ci(e,n,l){if(n=n.updateQueue,n!==null&&(n=n.shared,(l&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,l|=i,n.lanes=l,ha(e,l)}}function Mr(e,n){var l=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,l===i)){var c=null,d=null;if(l=l.firstBaseUpdate,l!==null){do{var p={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};d===null?c=d=p:d=d.next=p,l=l.next}while(l!==null);d===null?c=d=n:d=d.next=n}else c=d=n;l={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:i.shared,callbacks:i.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=n:e.next=n,l.lastBaseUpdate=n}var Dr=!1;function zi(){if(Dr){var e=Yl;if(e!==null)throw e}}function Ti(e,n,l,i){Dr=!1;var c=e.updateQueue;_n=!1;var d=c.firstBaseUpdate,p=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var C=b,Q=C.next;C.next=null,p===null?d=Q:p.next=Q,p=C;var I=e.alternate;I!==null&&(I=I.updateQueue,b=I.lastBaseUpdate,b!==p&&(b===null?I.firstBaseUpdate=Q:b.next=Q,I.lastBaseUpdate=C))}if(d!==null){var ie=c.baseState;p=0,I=Q=C=null,b=d;do{var J=b.lane&-536870913,W=J!==b.lane;if(W?(Xe&J)===J:(i&J)===J){J!==0&&J===Gl&&(Dr=!0),I!==null&&(I=I.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var je=e,Ee=b;J=n;var ut=l;switch(Ee.tag){case 1:if(je=Ee.payload,typeof je=="function"){ie=je.call(ut,ie,J);break e}ie=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ee.payload,J=typeof je=="function"?je.call(ut,ie,J):je,J==null)break e;ie=j({},ie,J);break e;case 2:_n=!0}}J=b.callback,J!==null&&(e.flags|=64,W&&(e.flags|=8192),W=c.callbacks,W===null?c.callbacks=[J]:W.push(J))}else W={lane:J,tag:b.tag,payload:b.payload,callback:b.callback,next:null},I===null?(Q=I=W,C=ie):I=I.next=W,p|=J;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;W=b,b=W.next,W.next=null,c.lastBaseUpdate=W,c.shared.pending=null}}while(!0);I===null&&(C=ie),c.baseState=C,c.firstBaseUpdate=Q,c.lastBaseUpdate=I,d===null&&(c.shared.lanes=0),Mn|=p,e.lanes=p,e.memoizedState=ie}}function Fu(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function Wu(e,n){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Fu(l[e],n)}var Ql=k(null),Rs=k(0);function Pu(e,n){e=pn,ue(Rs,e),ue(Ql,n),pn=e|n.baseLanes}function Or(){ue(Rs,pn),ue(Ql,Ql.current)}function Ar(){pn=Rs.current,Z(Ql),Z(Rs)}var ya=k(null),Ua=null;function Cn(e){var n=e.alternate;ue(kt,kt.current&1),ue(ya,e),Ua===null&&(n===null||Ql.current!==null||n.memoizedState!==null)&&(Ua=e)}function Ur(e){ue(kt,kt.current),ue(ya,e),Ua===null&&(Ua=e)}function Iu(e){e.tag===22?(ue(kt,kt.current),ue(ya,e),Ua===null&&(Ua=e)):zn()}function zn(){ue(kt,kt.current),ue(ya,ya.current)}function va(e){Z(ya),Ua===e&&(Ua=null),Z(kt)}var kt=k(0);function Hs(e){for(var n=e;n!==null;){if(n.tag===13){var l=n.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Gc(l)||Yc(l)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var nn=0,Le=null,ct=null,At=null,Ls=!1,Xl=!1,pl=!1,qs=0,Ei=0,Zl=null,Mg=0;function wt(){throw Error(u(321))}function Rr(e,n){if(n===null)return!1;for(var l=0;l<n.length&&l<e.length;l++)if(!ga(e[l],n[l]))return!1;return!0}function Hr(e,n,l,i,c,d){return nn=d,Le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,A.H=e===null||e.memoizedState===null?Rp:Pr,pl=!1,d=l(i,c),pl=!1,Xl&&(d=tp(n,l,i,c)),ep(e),d}function ep(e){A.H=Oi;var n=ct!==null&&ct.next!==null;if(nn=0,At=ct=Le=null,Ls=!1,Ei=0,Zl=null,n)throw Error(u(300));e===null||Ut||(e=e.dependencies,e!==null&&Ts(e)&&(Ut=!0))}function tp(e,n,l,i){Le=e;var c=0;do{if(Xl&&(Zl=null),Ei=0,Xl=!1,25<=c)throw Error(u(301));if(c+=1,At=ct=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}A.H=Hp,d=n(l,i)}while(Xl);return d}function Dg(){var e=A.H,n=e.useState()[0];return n=typeof n.then=="function"?Mi(n):n,e=e.useState()[0],(ct!==null?ct.memoizedState:null)!==e&&(Le.flags|=1024),n}function Lr(){var e=qs!==0;return qs=0,e}function qr(e,n,l){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l}function Br(e){if(Ls){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ls=!1}nn=0,At=ct=Le=null,Xl=!1,Ei=qs=0,Zl=null}function ta(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?Le.memoizedState=At=e:At=At.next=e,At}function Ct(){if(ct===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var n=At===null?Le.memoizedState:At.next;if(n!==null)At=n,ct=e;else{if(e===null)throw Le.alternate===null?Error(u(467)):Error(u(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},At===null?Le.memoizedState=At=e:At=At.next=e}return At}function Bs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mi(e){var n=Ei;return Ei+=1,Zl===null&&(Zl=[]),e=Qu(Zl,e,n),n=Le,(At===null?n.memoizedState:At.next)===null&&(n=n.alternate,A.H=n===null||n.memoizedState===null?Rp:Pr),e}function Gs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mi(e);if(e.$$typeof===O)return Zt(e)}throw Error(u(438,String(e)))}function Gr(e){var n=null,l=Le.updateQueue;if(l!==null&&(n=l.memoCache),n==null){var i=Le.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),l===null&&(l=Bs(),Le.updateQueue=l),l.memoCache=n,l=n.data[n.index],l===void 0)for(l=n.data[n.index]=Array(e),i=0;i<e;i++)l[i]=he;return n.index++,l}function ln(e,n){return typeof n=="function"?n(e):n}function Ys(e){var n=Ct();return Yr(n,ct,e)}function Yr(e,n,l){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=l;var c=e.baseQueue,d=i.pending;if(d!==null){if(c!==null){var p=c.next;c.next=d.next,d.next=p}n.baseQueue=c=d,i.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var b=p=null,C=null,Q=n,I=!1;do{var ie=Q.lane&-536870913;if(ie!==Q.lane?(Xe&ie)===ie:(nn&ie)===ie){var J=Q.revertLane;if(J===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ie===Gl&&(I=!0);else if((nn&J)===J){Q=Q.next,J===Gl&&(I=!0);continue}else ie={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},C===null?(b=C=ie,p=d):C=C.next=ie,Le.lanes|=J,Mn|=J;ie=Q.action,pl&&l(d,ie),d=Q.hasEagerState?Q.eagerState:l(d,ie)}else J={lane:ie,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},C===null?(b=C=J,p=d):C=C.next=J,Le.lanes|=ie,Mn|=ie;Q=Q.next}while(Q!==null&&Q!==n);if(C===null?p=d:C.next=b,!ga(d,e.memoizedState)&&(Ut=!0,I&&(l=Yl,l!==null)))throw l;e.memoizedState=d,e.baseState=p,e.baseQueue=C,i.lastRenderedState=d}return c===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function $r(e){var n=Ct(),l=n.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=e;var i=l.dispatch,c=l.pending,d=n.memoizedState;if(c!==null){l.pending=null;var p=c=c.next;do d=e(d,p.action),p=p.next;while(p!==c);ga(d,n.memoizedState)||(Ut=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),l.lastRenderedState=d}return[d,i]}function ap(e,n,l){var i=Le,c=Ct(),d=Je;if(d){if(l===void 0)throw Error(u(407));l=l()}else l=n();var p=!ga((ct||c).memoizedState,l);if(p&&(c.memoizedState=l,Ut=!0),c=c.queue,Xr(ip.bind(null,i,c,e),[e]),c.getSnapshot!==n||p||At!==null&&At.memoizedState.tag&1){if(i.flags|=2048,Kl(9,{destroy:void 0},lp.bind(null,i,c,l,n),null),pt===null)throw Error(u(349));d||(nn&127)!==0||np(i,n,l)}return l}function np(e,n,l){e.flags|=16384,e={getSnapshot:n,value:l},n=Le.updateQueue,n===null?(n=Bs(),Le.updateQueue=n,n.stores=[e]):(l=n.stores,l===null?n.stores=[e]:l.push(e))}function lp(e,n,l,i){n.value=l,n.getSnapshot=i,sp(n)&&op(e)}function ip(e,n,l){return l(function(){sp(n)&&op(e)})}function sp(e){var n=e.getSnapshot;e=e.value;try{var l=n();return!ga(e,l)}catch{return!0}}function op(e){var n=nl(e,2);n!==null&&ca(n,e,2)}function Vr(e){var n=ta();if(typeof e=="function"){var l=e;if(e=l(),pl){He(!0);try{l()}finally{He(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:e},n}function rp(e,n,l,i){return e.baseState=l,Yr(e,ct,typeof i=="function"?i:ln)}function Og(e,n,l,i,c){if(Qs(e))throw Error(u(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){d.listeners.push(p)}};A.T!==null?l(!0):d.isTransition=!1,i(d),l=n.pending,l===null?(d.next=n.pending=d,cp(n,d)):(d.next=l.next,n.pending=l.next=d)}}function cp(e,n){var l=n.action,i=n.payload,c=e.state;if(n.isTransition){var d=A.T,p={};A.T=p;try{var b=l(c,i),C=A.S;C!==null&&C(p,b),dp(e,n,b)}catch(Q){Qr(e,n,Q)}finally{d!==null&&p.types!==null&&(d.types=p.types),A.T=d}}else try{d=l(c,i),dp(e,n,d)}catch(Q){Qr(e,n,Q)}}function dp(e,n,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(i){up(e,n,i)},function(i){return Qr(e,n,i)}):up(e,n,l)}function up(e,n,l){n.status="fulfilled",n.value=l,pp(n),e.state=l,n=e.pending,n!==null&&(l=n.next,l===n?e.pending=null:(l=l.next,n.next=l,cp(e,l)))}function Qr(e,n,l){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=l,pp(n),n=n.next;while(n!==i)}e.action=null}function pp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function mp(e,n){return n}function fp(e,n){if(Je){var l=pt.formState;if(l!==null){e:{var i=Le;if(Je){if(ht){t:{for(var c=ht,d=Aa;c.nodeType!==8;){if(!d){c=null;break t}if(c=Ra(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){ht=Ra(c.nextSibling),i=c.data==="F!";break e}}wn(i)}i=!1}i&&(n=l[0])}}return l=ta(),l.memoizedState=l.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mp,lastRenderedState:n},l.queue=i,l=Op.bind(null,Le,i),i.dispatch=l,i=Vr(!1),d=Wr.bind(null,Le,!1,i.queue),i=ta(),c={state:n,dispatch:null,action:e,pending:null},i.queue=c,l=Og.bind(null,Le,c,d,l),c.dispatch=l,i.memoizedState=e,[n,l,!1]}function hp(e){var n=Ct();return xp(n,ct,e)}function xp(e,n,l){if(n=Yr(e,n,mp)[0],e=Ys(ln)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=Mi(n)}catch(p){throw p===$l?Ds:p}else i=n;n=Ct();var c=n.queue,d=c.dispatch;return l!==n.memoizedState&&(Le.flags|=2048,Kl(9,{destroy:void 0},Ag.bind(null,c,l),null)),[i,d,e]}function Ag(e,n){e.action=n}function gp(e){var n=Ct(),l=ct;if(l!==null)return xp(n,l,e);Ct(),n=n.memoizedState,l=Ct();var i=l.queue.dispatch;return l.memoizedState=e,[n,i,!1]}function Kl(e,n,l,i){return e={tag:e,create:l,deps:i,inst:n,next:null},n=Le.updateQueue,n===null&&(n=Bs(),Le.updateQueue=n),l=n.lastEffect,l===null?n.lastEffect=e.next=e:(i=l.next,l.next=e,e.next=i,n.lastEffect=e),e}function bp(){return Ct().memoizedState}function $s(e,n,l,i){var c=ta();Le.flags|=e,c.memoizedState=Kl(1|n,{destroy:void 0},l,i===void 0?null:i)}function Vs(e,n,l,i){var c=Ct();i=i===void 0?null:i;var d=c.memoizedState.inst;ct!==null&&i!==null&&Rr(i,ct.memoizedState.deps)?c.memoizedState=Kl(n,d,l,i):(Le.flags|=e,c.memoizedState=Kl(1|n,d,l,i))}function yp(e,n){$s(8390656,8,e,n)}function Xr(e,n){Vs(2048,8,e,n)}function Ug(e){Le.flags|=4;var n=Le.updateQueue;if(n===null)n=Bs(),Le.updateQueue=n,n.events=[e];else{var l=n.events;l===null?n.events=[e]:l.push(e)}}function vp(e){var n=Ct().memoizedState;return Ug({ref:n,nextImpl:e}),function(){if((at&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function jp(e,n){return Vs(4,2,e,n)}function wp(e,n){return Vs(4,4,e,n)}function Np(e,n){if(typeof n=="function"){e=e();var l=n(e);return function(){typeof l=="function"?l():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function _p(e,n,l){l=l!=null?l.concat([e]):null,Vs(4,4,Np.bind(null,n,e),l)}function Zr(){}function Sp(e,n){var l=Ct();n=n===void 0?null:n;var i=l.memoizedState;return n!==null&&Rr(n,i[1])?i[0]:(l.memoizedState=[e,n],e)}function kp(e,n){var l=Ct();n=n===void 0?null:n;var i=l.memoizedState;if(n!==null&&Rr(n,i[1]))return i[0];if(i=e(),pl){He(!0);try{e()}finally{He(!1)}}return l.memoizedState=[i,n],i}function Kr(e,n,l){return l===void 0||(nn&1073741824)!==0&&(Xe&261930)===0?e.memoizedState=n:(e.memoizedState=l,e=Cm(),Le.lanes|=e,Mn|=e,l)}function Cp(e,n,l,i){return ga(l,n)?l:Ql.current!==null?(e=Kr(e,l,i),ga(e,n)||(Ut=!0),e):(nn&42)===0||(nn&1073741824)!==0&&(Xe&261930)===0?(Ut=!0,e.memoizedState=l):(e=Cm(),Le.lanes|=e,Mn|=e,n)}function zp(e,n,l,i,c){var d=F.p;F.p=d!==0&&8>d?d:8;var p=A.T,b={};A.T=b,Wr(e,!1,n,l);try{var C=c(),Q=A.S;if(Q!==null&&Q(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var I=Eg(C,i);Di(e,n,I,Na(e))}else Di(e,n,i,Na(e))}catch(ie){Di(e,n,{then:function(){},status:"rejected",reason:ie},Na())}finally{F.p=d,p!==null&&b.types!==null&&(p.types=b.types),A.T=p}}function Rg(){}function Jr(e,n,l,i){if(e.tag!==5)throw Error(u(476));var c=Tp(e).queue;zp(e,c,n,x,l===null?Rg:function(){return Ep(e),l(i)})}function Tp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:x,baseState:x,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:x},next:null};var l={};return n.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:l},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ep(e){var n=Tp(e);n.next===null&&(n=e.alternate.memoizedState),Di(e,n.next.queue,{},Na())}function Fr(){return Zt(Ji)}function Mp(){return Ct().memoizedState}function Dp(){return Ct().memoizedState}function Hg(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var l=Na();e=Sn(l);var i=kn(n,e,l);i!==null&&(ca(i,n,l),Ci(i,n,l)),n={cache:Sr()},e.payload=n;return}n=n.return}}function Lg(e,n,l){var i=Na();l={lane:i,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Qs(e)?Ap(n,l):(l=fr(e,n,l,i),l!==null&&(ca(l,e,i),Up(l,n,i)))}function Op(e,n,l){var i=Na();Di(e,n,l,i)}function Di(e,n,l,i){var c={lane:i,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Qs(e))Ap(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var p=n.lastRenderedState,b=d(p,l);if(c.hasEagerState=!0,c.eagerState=b,ga(b,p))return Ss(e,n,c,0),pt===null&&_s(),!1}catch{}finally{}if(l=fr(e,n,c,i),l!==null)return ca(l,e,i),Up(l,n,i),!0}return!1}function Wr(e,n,l,i){if(i={lane:2,revertLane:Tc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Qs(e)){if(n)throw Error(u(479))}else n=fr(e,l,i,2),n!==null&&ca(n,e,2)}function Qs(e){var n=e.alternate;return e===Le||n!==null&&n===Le}function Ap(e,n){Xl=Ls=!0;var l=e.pending;l===null?n.next=n:(n.next=l.next,l.next=n),e.pending=n}function Up(e,n,l){if((l&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,l|=i,n.lanes=l,ha(e,l)}}var Oi={readContext:Zt,use:Gs,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt};Oi.useEffectEvent=wt;var Rp={readContext:Zt,use:Gs,useCallback:function(e,n){return ta().memoizedState=[e,n===void 0?null:n],e},useContext:Zt,useEffect:yp,useImperativeHandle:function(e,n,l){l=l!=null?l.concat([e]):null,$s(4194308,4,Np.bind(null,n,e),l)},useLayoutEffect:function(e,n){return $s(4194308,4,e,n)},useInsertionEffect:function(e,n){$s(4,2,e,n)},useMemo:function(e,n){var l=ta();n=n===void 0?null:n;var i=e();if(pl){He(!0);try{e()}finally{He(!1)}}return l.memoizedState=[i,n],i},useReducer:function(e,n,l){var i=ta();if(l!==void 0){var c=l(n);if(pl){He(!0);try{l(n)}finally{He(!1)}}}else c=n;return i.memoizedState=i.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},i.queue=e,e=e.dispatch=Lg.bind(null,Le,e),[i.memoizedState,e]},useRef:function(e){var n=ta();return e={current:e},n.memoizedState=e},useState:function(e){e=Vr(e);var n=e.queue,l=Op.bind(null,Le,n);return n.dispatch=l,[e.memoizedState,l]},useDebugValue:Zr,useDeferredValue:function(e,n){var l=ta();return Kr(l,e,n)},useTransition:function(){var e=Vr(!1);return e=zp.bind(null,Le,e.queue,!0,!1),ta().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,l){var i=Le,c=ta();if(Je){if(l===void 0)throw Error(u(407));l=l()}else{if(l=n(),pt===null)throw Error(u(349));(Xe&127)!==0||np(i,n,l)}c.memoizedState=l;var d={value:l,getSnapshot:n};return c.queue=d,yp(ip.bind(null,i,d,e),[e]),i.flags|=2048,Kl(9,{destroy:void 0},lp.bind(null,i,d,l,n),null),l},useId:function(){var e=ta(),n=pt.identifierPrefix;if(Je){var l=Qa,i=Va;l=(i&~(1<<32-rt(i)-1)).toString(32)+l,n="_"+n+"R_"+l,l=qs++,0<l&&(n+="H"+l.toString(32)),n+="_"}else l=Mg++,n="_"+n+"r_"+l.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Fr,useFormState:fp,useActionState:fp,useOptimistic:function(e){var n=ta();n.memoizedState=n.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=l,n=Wr.bind(null,Le,!0,l),l.dispatch=n,[e,n]},useMemoCache:Gr,useCacheRefresh:function(){return ta().memoizedState=Hg.bind(null,Le)},useEffectEvent:function(e){var n=ta(),l={impl:e};return n.memoizedState=l,function(){if((at&2)!==0)throw Error(u(440));return l.impl.apply(void 0,arguments)}}},Pr={readContext:Zt,use:Gs,useCallback:Sp,useContext:Zt,useEffect:Xr,useImperativeHandle:_p,useInsertionEffect:jp,useLayoutEffect:wp,useMemo:kp,useReducer:Ys,useRef:bp,useState:function(){return Ys(ln)},useDebugValue:Zr,useDeferredValue:function(e,n){var l=Ct();return Cp(l,ct.memoizedState,e,n)},useTransition:function(){var e=Ys(ln)[0],n=Ct().memoizedState;return[typeof e=="boolean"?e:Mi(e),n]},useSyncExternalStore:ap,useId:Mp,useHostTransitionStatus:Fr,useFormState:hp,useActionState:hp,useOptimistic:function(e,n){var l=Ct();return rp(l,ct,e,n)},useMemoCache:Gr,useCacheRefresh:Dp};Pr.useEffectEvent=vp;var Hp={readContext:Zt,use:Gs,useCallback:Sp,useContext:Zt,useEffect:Xr,useImperativeHandle:_p,useInsertionEffect:jp,useLayoutEffect:wp,useMemo:kp,useReducer:$r,useRef:bp,useState:function(){return $r(ln)},useDebugValue:Zr,useDeferredValue:function(e,n){var l=Ct();return ct===null?Kr(l,e,n):Cp(l,ct.memoizedState,e,n)},useTransition:function(){var e=$r(ln)[0],n=Ct().memoizedState;return[typeof e=="boolean"?e:Mi(e),n]},useSyncExternalStore:ap,useId:Mp,useHostTransitionStatus:Fr,useFormState:gp,useActionState:gp,useOptimistic:function(e,n){var l=Ct();return ct!==null?rp(l,ct,e,n):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Gr,useCacheRefresh:Dp};Hp.useEffectEvent=vp;function Ir(e,n,l,i){n=e.memoizedState,l=l(i,n),l=l==null?n:j({},n,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var ec={enqueueSetState:function(e,n,l){e=e._reactInternals;var i=Na(),c=Sn(i);c.payload=n,l!=null&&(c.callback=l),n=kn(e,c,i),n!==null&&(ca(n,e,i),Ci(n,e,i))},enqueueReplaceState:function(e,n,l){e=e._reactInternals;var i=Na(),c=Sn(i);c.tag=1,c.payload=n,l!=null&&(c.callback=l),n=kn(e,c,i),n!==null&&(ca(n,e,i),Ci(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var l=Na(),i=Sn(l);i.tag=2,n!=null&&(i.callback=n),n=kn(e,i,l),n!==null&&(ca(n,e,l),Ci(n,e,l))}};function Lp(e,n,l,i,c,d,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,d,p):n.prototype&&n.prototype.isPureReactComponent?!yi(l,i)||!yi(c,d):!0}function qp(e,n,l,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(l,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(l,i),n.state!==e&&ec.enqueueReplaceState(n,n.state,null)}function ml(e,n){var l=n;if("ref"in n){l={};for(var i in n)i!=="ref"&&(l[i]=n[i])}if(e=e.defaultProps){l===n&&(l=j({},l));for(var c in e)l[c]===void 0&&(l[c]=e[c])}return l}function Bp(e){Ns(e)}function Gp(e){console.error(e)}function Yp(e){Ns(e)}function Xs(e,n){try{var l=e.onUncaughtError;l(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function $p(e,n,l){try{var i=e.onCaughtError;i(l.value,{componentStack:l.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function tc(e,n,l){return l=Sn(l),l.tag=3,l.payload={element:null},l.callback=function(){Xs(e,n)},l}function Vp(e){return e=Sn(e),e.tag=3,e}function Qp(e,n,l,i){var c=l.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;e.payload=function(){return c(d)},e.callback=function(){$p(n,l,i)}}var p=l.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){$p(n,l,i),typeof c!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function qg(e,n,l,i,c){if(l.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=l.alternate,n!==null&&Bl(n,l,c,!0),l=ya.current,l!==null){switch(l.tag){case 31:case 13:return Ua===null?lo():l.alternate===null&&Nt===0&&(Nt=3),l.flags&=-257,l.flags|=65536,l.lanes=c,i===Os?l.flags|=16384:(n=l.updateQueue,n===null?l.updateQueue=new Set([i]):n.add(i),kc(e,i,c)),!1;case 22:return l.flags|=65536,i===Os?l.flags|=16384:(n=l.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},l.updateQueue=n):(l=n.retryQueue,l===null?n.retryQueue=new Set([i]):l.add(i)),kc(e,i,c)),!1}throw Error(u(435,l.tag))}return kc(e,i,c),lo(),!1}if(Je)return n=ya.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,i!==vr&&(e=Error(u(422),{cause:i}),wi(Ma(e,l)))):(i!==vr&&(n=Error(u(423),{cause:i}),wi(Ma(n,l))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,i=Ma(i,l),c=tc(e.stateNode,i,c),Mr(e,c),Nt!==4&&(Nt=2)),!1;var d=Error(u(520),{cause:i});if(d=Ma(d,l),Gi===null?Gi=[d]:Gi.push(d),Nt!==4&&(Nt=2),n===null)return!0;i=Ma(i,l),l=n;do{switch(l.tag){case 3:return l.flags|=65536,e=c&-c,l.lanes|=e,e=tc(l.stateNode,i,e),Mr(l,e),!1;case 1:if(n=l.type,d=l.stateNode,(l.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Dn===null||!Dn.has(d))))return l.flags|=65536,c&=-c,l.lanes|=c,c=Vp(c),Qp(c,e,l,i),Mr(l,c),!1}l=l.return}while(l!==null);return!1}var ac=Error(u(461)),Ut=!1;function Kt(e,n,l,i){n.child=e===null?Ju(n,null,l,i):ul(n,e.child,l,i)}function Xp(e,n,l,i,c){l=l.render;var d=n.ref;if("ref"in i){var p={};for(var b in i)b!=="ref"&&(p[b]=i[b])}else p=i;return ol(n),i=Hr(e,n,l,p,d,c),b=Lr(),e!==null&&!Ut?(qr(e,n,c),sn(e,n,c)):(Je&&b&&br(n),n.flags|=1,Kt(e,n,i,c),n.child)}function Zp(e,n,l,i,c){if(e===null){var d=l.type;return typeof d=="function"&&!hr(d)&&d.defaultProps===void 0&&l.compare===null?(n.tag=15,n.type=d,Kp(e,n,d,i,c)):(e=Cs(l.type,null,i,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!dc(e,c)){var p=d.memoizedProps;if(l=l.compare,l=l!==null?l:yi,l(p,i)&&e.ref===n.ref)return sn(e,n,c)}return n.flags|=1,e=Ia(d,i),e.ref=n.ref,e.return=n,n.child=e}function Kp(e,n,l,i,c){if(e!==null){var d=e.memoizedProps;if(yi(d,i)&&e.ref===n.ref)if(Ut=!1,n.pendingProps=i=d,dc(e,c))(e.flags&131072)!==0&&(Ut=!0);else return n.lanes=e.lanes,sn(e,n,c)}return nc(e,n,l,i,c)}function Jp(e,n,l,i){var c=i.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|l:l,e!==null){for(i=n.child=e.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;i=c&~d}else i=0,n.child=null;return Fp(e,n,d,l,i)}if((l&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ms(n,d!==null?d.cachePool:null),d!==null?Pu(n,d):Or(),Iu(n);else return i=n.lanes=536870912,Fp(e,n,d!==null?d.baseLanes|l:l,l,i)}else d!==null?(Ms(n,d.cachePool),Pu(n,d),zn(),n.memoizedState=null):(e!==null&&Ms(n,null),Or(),zn());return Kt(e,n,c,l),n.child}function Ai(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fp(e,n,l,i,c){var d=Cr();return d=d===null?null:{parent:Ot._currentValue,pool:d},n.memoizedState={baseLanes:l,cachePool:d},e!==null&&Ms(n,null),Or(),Iu(n),e!==null&&Bl(e,n,i,!0),n.childLanes=c,null}function Zs(e,n){return n=Js({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Wp(e,n,l){return ul(n,e.child,null,l),e=Zs(n,n.pendingProps),e.flags|=2,va(n),n.memoizedState=null,e}function Bg(e,n,l){var i=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Je){if(i.mode==="hidden")return e=Zs(n,i),n.lanes=536870912,Ai(null,e);if(Ur(n),(e=ht)?(e=df(e,Aa),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:vn!==null?{id:Va,overflow:Qa}:null,retryLane:536870912,hydrationErrors:null},l=Au(e),l.return=n,n.child=l,Xt=n,ht=null)):e=null,e===null)throw wn(n);return n.lanes=536870912,null}return Zs(n,i)}var d=e.memoizedState;if(d!==null){var p=d.dehydrated;if(Ur(n),c)if(n.flags&256)n.flags&=-257,n=Wp(e,n,l);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(Ut||Bl(e,n,l,!1),c=(l&e.childLanes)!==0,Ut||c){if(i=pt,i!==null&&(p=_(i,l),p!==0&&p!==d.retryLane))throw d.retryLane=p,nl(e,p),ca(i,e,p),ac;lo(),n=Wp(e,n,l)}else e=d.treeContext,ht=Ra(p.nextSibling),Xt=n,Je=!0,jn=null,Aa=!1,e!==null&&Hu(n,e),n=Zs(n,i),n.flags|=4096;return n}return e=Ia(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ks(e,n){var l=n.ref;if(l===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(u(284));(e===null||e.ref!==l)&&(n.flags|=4194816)}}function nc(e,n,l,i,c){return ol(n),l=Hr(e,n,l,i,void 0,c),i=Lr(),e!==null&&!Ut?(qr(e,n,c),sn(e,n,c)):(Je&&i&&br(n),n.flags|=1,Kt(e,n,l,c),n.child)}function Pp(e,n,l,i,c,d){return ol(n),n.updateQueue=null,l=tp(n,i,l,c),ep(e),i=Lr(),e!==null&&!Ut?(qr(e,n,d),sn(e,n,d)):(Je&&i&&br(n),n.flags|=1,Kt(e,n,l,d),n.child)}function Ip(e,n,l,i,c){if(ol(n),n.stateNode===null){var d=Rl,p=l.contextType;typeof p=="object"&&p!==null&&(d=Zt(p)),d=new l(i,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ec,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=i,d.state=n.memoizedState,d.refs={},Tr(n),p=l.contextType,d.context=typeof p=="object"&&p!==null?Zt(p):Rl,d.state=n.memoizedState,p=l.getDerivedStateFromProps,typeof p=="function"&&(Ir(n,l,p,i),d.state=n.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(p=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),p!==d.state&&ec.enqueueReplaceState(d,d.state,null),Ti(n,i,d,c),zi(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){d=n.stateNode;var b=n.memoizedProps,C=ml(l,b);d.props=C;var Q=d.context,I=l.contextType;p=Rl,typeof I=="object"&&I!==null&&(p=Zt(I));var ie=l.getDerivedStateFromProps;I=typeof ie=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,I||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||Q!==p)&&qp(n,d,i,p),_n=!1;var J=n.memoizedState;d.state=J,Ti(n,i,d,c),zi(),Q=n.memoizedState,b||J!==Q||_n?(typeof ie=="function"&&(Ir(n,l,ie,i),Q=n.memoizedState),(C=_n||Lp(n,l,C,i,J,Q,p))?(I||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=Q),d.props=i,d.state=Q,d.context=p,i=C):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{d=n.stateNode,Er(e,n),p=n.memoizedProps,I=ml(l,p),d.props=I,ie=n.pendingProps,J=d.context,Q=l.contextType,C=Rl,typeof Q=="object"&&Q!==null&&(C=Zt(Q)),b=l.getDerivedStateFromProps,(Q=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==ie||J!==C)&&qp(n,d,i,C),_n=!1,J=n.memoizedState,d.state=J,Ti(n,i,d,c),zi();var W=n.memoizedState;p!==ie||J!==W||_n||e!==null&&e.dependencies!==null&&Ts(e.dependencies)?(typeof b=="function"&&(Ir(n,l,b,i),W=n.memoizedState),(I=_n||Lp(n,l,I,i,J,W,C)||e!==null&&e.dependencies!==null&&Ts(e.dependencies))?(Q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,W,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,W,C)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&J===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&J===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=W),d.props=i,d.state=W,d.context=C,i=I):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&J===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&J===e.memoizedState||(n.flags|=1024),i=!1)}return d=i,Ks(e,n),i=(n.flags&128)!==0,d||i?(d=n.stateNode,l=i&&typeof l.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&i?(n.child=ul(n,e.child,null,c),n.child=ul(n,null,l,c)):Kt(e,n,l,c),n.memoizedState=d.state,e=n.child):e=sn(e,n,c),e}function em(e,n,l,i){return il(),n.flags|=256,Kt(e,n,l,i),n.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ic(e){return{baseLanes:e,cachePool:$u()}}function sc(e,n,l){return e=e!==null?e.childLanes&~l:0,n&&(e|=wa),e}function tm(e,n,l){var i=n.pendingProps,c=!1,d=(n.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(kt.current&2)!==0),p&&(c=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(Je){if(c?Cn(n):zn(),(e=ht)?(e=df(e,Aa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:vn!==null?{id:Va,overflow:Qa}:null,retryLane:536870912,hydrationErrors:null},l=Au(e),l.return=n,n.child=l,Xt=n,ht=null)):e=null,e===null)throw wn(n);return Yc(e)?n.lanes=32:n.lanes=536870912,null}var b=i.children;return i=i.fallback,c?(zn(),c=n.mode,b=Js({mode:"hidden",children:b},c),i=ll(i,c,l,null),b.return=n,i.return=n,b.sibling=i,n.child=b,i=n.child,i.memoizedState=ic(l),i.childLanes=sc(e,p,l),n.memoizedState=lc,Ai(null,i)):(Cn(n),oc(n,b))}var C=e.memoizedState;if(C!==null&&(b=C.dehydrated,b!==null)){if(d)n.flags&256?(Cn(n),n.flags&=-257,n=rc(e,n,l)):n.memoizedState!==null?(zn(),n.child=e.child,n.flags|=128,n=null):(zn(),b=i.fallback,c=n.mode,i=Js({mode:"visible",children:i.children},c),b=ll(b,c,l,null),b.flags|=2,i.return=n,b.return=n,i.sibling=b,n.child=i,ul(n,e.child,null,l),i=n.child,i.memoizedState=ic(l),i.childLanes=sc(e,p,l),n.memoizedState=lc,n=Ai(null,i));else if(Cn(n),Yc(b)){if(p=b.nextSibling&&b.nextSibling.dataset,p)var Q=p.dgst;p=Q,i=Error(u(419)),i.stack="",i.digest=p,wi({value:i,source:null,stack:null}),n=rc(e,n,l)}else if(Ut||Bl(e,n,l,!1),p=(l&e.childLanes)!==0,Ut||p){if(p=pt,p!==null&&(i=_(p,l),i!==0&&i!==C.retryLane))throw C.retryLane=i,nl(e,i),ca(p,e,i),ac;Gc(b)||lo(),n=rc(e,n,l)}else Gc(b)?(n.flags|=192,n.child=e.child,n=null):(e=C.treeContext,ht=Ra(b.nextSibling),Xt=n,Je=!0,jn=null,Aa=!1,e!==null&&Hu(n,e),n=oc(n,i.children),n.flags|=4096);return n}return c?(zn(),b=i.fallback,c=n.mode,C=e.child,Q=C.sibling,i=Ia(C,{mode:"hidden",children:i.children}),i.subtreeFlags=C.subtreeFlags&65011712,Q!==null?b=Ia(Q,b):(b=ll(b,c,l,null),b.flags|=2),b.return=n,i.return=n,i.sibling=b,n.child=i,Ai(null,i),i=n.child,b=e.child.memoizedState,b===null?b=ic(l):(c=b.cachePool,c!==null?(C=Ot._currentValue,c=c.parent!==C?{parent:C,pool:C}:c):c=$u(),b={baseLanes:b.baseLanes|l,cachePool:c}),i.memoizedState=b,i.childLanes=sc(e,p,l),n.memoizedState=lc,Ai(e.child,i)):(Cn(n),l=e.child,e=l.sibling,l=Ia(l,{mode:"visible",children:i.children}),l.return=n,l.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=l,n.memoizedState=null,l)}function oc(e,n){return n=Js({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Js(e,n){return e=ba(22,e,null,n),e.lanes=0,e}function rc(e,n,l){return ul(n,e.child,null,l),e=oc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function am(e,n,l){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Nr(e.return,n,l)}function cc(e,n,l,i,c,d){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:l,tailMode:c,treeForkCount:d}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=l,p.tailMode=c,p.treeForkCount=d)}function nm(e,n,l){var i=n.pendingProps,c=i.revealOrder,d=i.tail;i=i.children;var p=kt.current,b=(p&2)!==0;if(b?(p=p&1|2,n.flags|=128):p&=1,ue(kt,p),Kt(e,n,i,l),i=Je?ji:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&am(e,l,n);else if(e.tag===19)am(e,l,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(l=n.child,c=null;l!==null;)e=l.alternate,e!==null&&Hs(e)===null&&(c=l),l=l.sibling;l=c,l===null?(c=n.child,n.child=null):(c=l.sibling,l.sibling=null),cc(n,!1,c,l,d,i);break;case"backwards":case"unstable_legacy-backwards":for(l=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Hs(e)===null){n.child=c;break}e=c.sibling,c.sibling=l,l=c,c=e}cc(n,!0,l,null,d,i);break;case"together":cc(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function sn(e,n,l){if(e!==null&&(n.dependencies=e.dependencies),Mn|=n.lanes,(l&n.childLanes)===0)if(e!==null){if(Bl(e,n,l,!1),(l&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,l=Ia(e,e.pendingProps),n.child=l,l.return=n;e.sibling!==null;)e=e.sibling,l=l.sibling=Ia(e,e.pendingProps),l.return=n;l.sibling=null}return n.child}function dc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ts(e)))}function Gg(e,n,l){switch(n.tag){case 3:mt(n,n.stateNode.containerInfo),Nn(n,Ot,e.memoizedState.cache),il();break;case 27:case 5:Pe(n);break;case 4:mt(n,n.stateNode.containerInfo);break;case 10:Nn(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ur(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Cn(n),n.flags|=128,null):(l&n.child.childLanes)!==0?tm(e,n,l):(Cn(n),e=sn(e,n,l),e!==null?e.sibling:null);Cn(n);break;case 19:var c=(e.flags&128)!==0;if(i=(l&n.childLanes)!==0,i||(Bl(e,n,l,!1),i=(l&n.childLanes)!==0),c){if(i)return nm(e,n,l);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ue(kt,kt.current),i)break;return null;case 22:return n.lanes=0,Jp(e,n,l,n.pendingProps);case 24:Nn(n,Ot,e.memoizedState.cache)}return sn(e,n,l)}function lm(e,n,l){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ut=!0;else{if(!dc(e,l)&&(n.flags&128)===0)return Ut=!1,Gg(e,n,l);Ut=(e.flags&131072)!==0}else Ut=!1,Je&&(n.flags&1048576)!==0&&Ru(n,ji,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=cl(n.elementType),n.type=e,typeof e=="function")hr(e)?(i=ml(e,i),n.tag=1,n=Ip(null,n,e,i,l)):(n.tag=0,n=nc(null,n,e,i,l));else{if(e!=null){var c=e.$$typeof;if(c===ee){n.tag=11,n=Xp(null,n,e,i,l);break e}else if(c===E){n.tag=14,n=Zp(null,n,e,i,l);break e}}throw n=M(e)||e,Error(u(306,n,""))}}return n;case 0:return nc(e,n,n.type,n.pendingProps,l);case 1:return i=n.type,c=ml(i,n.pendingProps),Ip(e,n,i,c,l);case 3:e:{if(mt(n,n.stateNode.containerInfo),e===null)throw Error(u(387));i=n.pendingProps;var d=n.memoizedState;c=d.element,Er(e,n),Ti(n,i,null,l);var p=n.memoizedState;if(i=p.cache,Nn(n,Ot,i),i!==d.cache&&_r(n,[Ot],l,!0),zi(),i=p.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=em(e,n,i,l);break e}else if(i!==c){c=Ma(Error(u(424)),n),wi(c),n=em(e,n,i,l);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ht=Ra(e.firstChild),Xt=n,Je=!0,jn=null,Aa=!0,l=Ju(n,null,i,l),n.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(il(),i===c){n=sn(e,n,l);break e}Kt(e,n,i,l)}n=n.child}return n;case 26:return Ks(e,n),e===null?(l=xf(n.type,null,n.pendingProps,null))?n.memoizedState=l:Je||(l=n.type,e=n.pendingProps,i=po(ke.current).createElement(l),i[vt]=n,i[na]=e,Jt(i,l,e),$t(i),n.stateNode=i):n.memoizedState=xf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pe(n),e===null&&Je&&(i=n.stateNode=mf(n.type,n.pendingProps,ke.current),Xt=n,Aa=!0,c=ht,Rn(n.type)?($c=c,ht=Ra(i.firstChild)):ht=c),Kt(e,n,n.pendingProps.children,l),Ks(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Je&&((c=i=ht)&&(i=gb(i,n.type,n.pendingProps,Aa),i!==null?(n.stateNode=i,Xt=n,ht=Ra(i.firstChild),Aa=!1,c=!0):c=!1),c||wn(n)),Pe(n),c=n.type,d=n.pendingProps,p=e!==null?e.memoizedProps:null,i=d.children,Lc(c,d)?i=null:p!==null&&Lc(c,p)&&(n.flags|=32),n.memoizedState!==null&&(c=Hr(e,n,Dg,null,null,l),Ji._currentValue=c),Ks(e,n),Kt(e,n,i,l),n.child;case 6:return e===null&&Je&&((e=l=ht)&&(l=bb(l,n.pendingProps,Aa),l!==null?(n.stateNode=l,Xt=n,ht=null,e=!0):e=!1),e||wn(n)),null;case 13:return tm(e,n,l);case 4:return mt(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=ul(n,null,i,l):Kt(e,n,i,l),n.child;case 11:return Xp(e,n,n.type,n.pendingProps,l);case 7:return Kt(e,n,n.pendingProps,l),n.child;case 8:return Kt(e,n,n.pendingProps.children,l),n.child;case 12:return Kt(e,n,n.pendingProps.children,l),n.child;case 10:return i=n.pendingProps,Nn(n,n.type,i.value),Kt(e,n,i.children,l),n.child;case 9:return c=n.type._context,i=n.pendingProps.children,ol(n),c=Zt(c),i=i(c),n.flags|=1,Kt(e,n,i,l),n.child;case 14:return Zp(e,n,n.type,n.pendingProps,l);case 15:return Kp(e,n,n.type,n.pendingProps,l);case 19:return nm(e,n,l);case 31:return Bg(e,n,l);case 22:return Jp(e,n,l,n.pendingProps);case 24:return ol(n),i=Zt(Ot),e===null?(c=Cr(),c===null&&(c=pt,d=Sr(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=l),c=d),n.memoizedState={parent:i,cache:c},Tr(n),Nn(n,Ot,c)):((e.lanes&l)!==0&&(Er(e,n),Ti(n,null,null,l),zi()),c=e.memoizedState,d=n.memoizedState,c.parent!==i?(c={parent:i,cache:i},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Nn(n,Ot,i)):(i=d.cache,Nn(n,Ot,i),i!==c.cache&&_r(n,[Ot],l,!0))),Kt(e,n,n.pendingProps.children,l),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function on(e){e.flags|=4}function uc(e,n,l,i,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Mm())e.flags|=8192;else throw dl=Os,zr}else e.flags&=-16777217}function im(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jf(n))if(Mm())e.flags|=8192;else throw dl=Os,zr}function Fs(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oe():536870912,e.lanes|=n,Pl|=n)}function Ui(e,n){if(!Je)switch(e.tailMode){case"hidden":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var i=null;l!==null;)l.alternate!==null&&(i=l),l=l.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function xt(e){var n=e.alternate!==null&&e.alternate.child===e.child,l=0,i=0;if(n)for(var c=e.child;c!==null;)l|=c.lanes|c.childLanes,i|=c.subtreeFlags&65011712,i|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)l|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=i,e.childLanes=l,n}function Yg(e,n,l){var i=n.pendingProps;switch(yr(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(n),null;case 1:return xt(n),null;case 3:return l=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),an(Ot),Ge(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ql(n)?on(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jr())),xt(n),null;case 26:var c=n.type,d=n.memoizedState;return e===null?(on(n),d!==null?(xt(n),im(n,d)):(xt(n),uc(n,c,null,i,l))):d?d!==e.memoizedState?(on(n),xt(n),im(n,d)):(xt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&on(n),xt(n),uc(n,c,e,i,l)),null;case 27:if(Lt(n),l=ke.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&on(n);else{if(!i){if(n.stateNode===null)throw Error(u(166));return xt(n),null}e=pe.current,ql(n)?Lu(n):(e=mf(c,i,l),n.stateNode=e,on(n))}return xt(n),null;case 5:if(Lt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&on(n);else{if(!i){if(n.stateNode===null)throw Error(u(166));return xt(n),null}if(d=pe.current,ql(n))Lu(n);else{var p=po(ke.current);switch(d){case 1:d=p.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=p.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=p.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=p.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=p.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?d.multiple=!0:i.size&&(d.size=i.size);break;default:d=typeof i.is=="string"?p.createElement(c,{is:i.is}):p.createElement(c)}}d[vt]=n,d[na]=i;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)d.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=d;e:switch(Jt(d,c,i),c){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&on(n)}}return xt(n),uc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,l),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&on(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(u(166));if(e=ke.current,ql(n)){if(e=n.stateNode,l=n.memoizedProps,i=null,c=Xt,c!==null)switch(c.tag){case 27:case 5:i=c.memoizedProps}e[vt]=n,e=!!(e.nodeValue===l||i!==null&&i.suppressHydrationWarning===!0||tf(e.nodeValue,l)),e||wn(n,!0)}else e=po(e).createTextNode(i),e[vt]=n,n.stateNode=e}return xt(n),null;case 31:if(l=n.memoizedState,e===null||e.memoizedState!==null){if(i=ql(n),l!==null){if(e===null){if(!i)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[vt]=n}else il(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;xt(n),e=!1}else l=jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return n.flags&256?(va(n),n):(va(n),null);if((n.flags&128)!==0)throw Error(u(558))}return xt(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ql(n),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(u(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(u(317));c[vt]=n}else il(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;xt(n),c=!1}else c=jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(va(n),n):(va(n),null)}return va(n),(n.flags&128)!==0?(n.lanes=l,n):(l=i!==null,e=e!==null&&e.memoizedState!==null,l&&(i=n.child,c=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(c=i.alternate.memoizedState.cachePool.pool),d=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(d=i.memoizedState.cachePool.pool),d!==c&&(i.flags|=2048)),l!==e&&l&&(n.child.flags|=8192),Fs(n,n.updateQueue),xt(n),null);case 4:return Ge(),e===null&&Oc(n.stateNode.containerInfo),xt(n),null;case 10:return an(n.type),xt(n),null;case 19:if(Z(kt),i=n.memoizedState,i===null)return xt(n),null;if(c=(n.flags&128)!==0,d=i.rendering,d===null)if(c)Ui(i,!1);else{if(Nt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Hs(e),d!==null){for(n.flags|=128,Ui(i,!1),e=d.updateQueue,n.updateQueue=e,Fs(n,e),n.subtreeFlags=0,e=l,l=n.child;l!==null;)Ou(l,e),l=l.sibling;return ue(kt,kt.current&1|2),Je&&en(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&ye()>to&&(n.flags|=128,c=!0,Ui(i,!1),n.lanes=4194304)}else{if(!c)if(e=Hs(d),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Fs(n,e),Ui(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!Je)return xt(n),null}else 2*ye()-i.renderingStartTime>to&&l!==536870912&&(n.flags|=128,c=!0,Ui(i,!1),n.lanes=4194304);i.isBackwards?(d.sibling=n.child,n.child=d):(e=i.last,e!==null?e.sibling=d:n.child=d,i.last=d)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ye(),e.sibling=null,l=kt.current,ue(kt,c?l&1|2:l&1),Je&&en(n,i.treeForkCount),e):(xt(n),null);case 22:case 23:return va(n),Ar(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(l&536870912)!==0&&(n.flags&128)===0&&(xt(n),n.subtreeFlags&6&&(n.flags|=8192)):xt(n),l=n.updateQueue,l!==null&&Fs(n,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048),e!==null&&Z(rl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),an(Ot),xt(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function $g(e,n){switch(yr(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return an(Ot),Ge(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Lt(n),null;case 31:if(n.memoizedState!==null){if(va(n),n.alternate===null)throw Error(u(340));il()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(va(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));il()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(kt),null;case 4:return Ge(),null;case 10:return an(n.type),null;case 22:case 23:return va(n),Ar(),e!==null&&Z(rl),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return an(Ot),null;case 25:return null;default:return null}}function sm(e,n){switch(yr(n),n.tag){case 3:an(Ot),Ge();break;case 26:case 27:case 5:Lt(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&va(n);break;case 13:va(n);break;case 19:Z(kt);break;case 10:an(n.type);break;case 22:case 23:va(n),Ar(),e!==null&&Z(rl);break;case 24:an(Ot)}}function Ri(e,n){try{var l=n.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var c=i.next;l=c;do{if((l.tag&e)===e){i=void 0;var d=l.create,p=l.inst;i=d(),p.destroy=i}l=l.next}while(l!==c)}}catch(b){it(n,n.return,b)}}function Tn(e,n,l){try{var i=n.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var d=c.next;i=d;do{if((i.tag&e)===e){var p=i.inst,b=p.destroy;if(b!==void 0){p.destroy=void 0,c=n;var C=l,Q=b;try{Q()}catch(I){it(c,C,I)}}}i=i.next}while(i!==d)}}catch(I){it(n,n.return,I)}}function om(e){var n=e.updateQueue;if(n!==null){var l=e.stateNode;try{Wu(n,l)}catch(i){it(e,e.return,i)}}}function rm(e,n,l){l.props=ml(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(i){it(e,n,i)}}function Hi(e,n){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof l=="function"?e.refCleanup=l(i):l.current=i}}catch(c){it(e,n,c)}}function Xa(e,n){var l=e.ref,i=e.refCleanup;if(l!==null)if(typeof i=="function")try{i()}catch(c){it(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(c){it(e,n,c)}else l.current=null}function cm(e){var n=e.type,l=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":l.autoFocus&&i.focus();break e;case"img":l.src?i.src=l.src:l.srcSet&&(i.srcset=l.srcSet)}}catch(c){it(e,e.return,c)}}function pc(e,n,l){try{var i=e.stateNode;ub(i,e.type,l,n),i[na]=n}catch(c){it(e,e.return,c)}}function dm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Rn(e.type)||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Rn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fc(e,n,l){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,n):(n=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,n.appendChild(e),l=l._reactRootContainer,l!=null||n.onclick!==null||(n.onclick=Wa));else if(i!==4&&(i===27&&Rn(e.type)&&(l=e.stateNode,n=null),e=e.child,e!==null))for(fc(e,n,l),e=e.sibling;e!==null;)fc(e,n,l),e=e.sibling}function Ws(e,n,l){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?l.insertBefore(e,n):l.appendChild(e);else if(i!==4&&(i===27&&Rn(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Ws(e,n,l),e=e.sibling;e!==null;)Ws(e,n,l),e=e.sibling}function um(e){var n=e.stateNode,l=e.memoizedProps;try{for(var i=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Jt(n,i,l),n[vt]=e,n[na]=l}catch(d){it(e,e.return,d)}}var rn=!1,Rt=!1,hc=!1,pm=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function Vg(e,n){if(e=e.containerInfo,Rc=yo,e=_u(e),rr(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var i=l.getSelection&&l.getSelection();if(i&&i.rangeCount!==0){l=i.anchorNode;var c=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{l.nodeType,d.nodeType}catch{l=null;break e}var p=0,b=-1,C=-1,Q=0,I=0,ie=e,J=null;t:for(;;){for(var W;ie!==l||c!==0&&ie.nodeType!==3||(b=p+c),ie!==d||i!==0&&ie.nodeType!==3||(C=p+i),ie.nodeType===3&&(p+=ie.nodeValue.length),(W=ie.firstChild)!==null;)J=ie,ie=W;for(;;){if(ie===e)break t;if(J===l&&++Q===c&&(b=p),J===d&&++I===i&&(C=p),(W=ie.nextSibling)!==null)break;ie=J,J=ie.parentNode}ie=W}l=b===-1||C===-1?null:{start:b,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(Hc={focusedElem:e,selectionRange:l},yo=!1,Vt=n;Vt!==null;)if(n=Vt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Vt=e;else for(;Vt!==null;){switch(n=Vt,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)c=e[l],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,l=n,c=d.memoizedProps,d=d.memoizedState,i=l.stateNode;try{var je=ml(l.type,c);e=i.getSnapshotBeforeUpdate(je,d),i.__reactInternalSnapshotBeforeUpdate=e}catch(Ee){it(l,l.return,Ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,l=e.nodeType,l===9)Bc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,Vt=e;break}Vt=n.return}}function mm(e,n,l){var i=l.flags;switch(l.tag){case 0:case 11:case 15:dn(e,l),i&4&&Ri(5,l);break;case 1:if(dn(e,l),i&4)if(e=l.stateNode,n===null)try{e.componentDidMount()}catch(p){it(l,l.return,p)}else{var c=ml(l.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){it(l,l.return,p)}}i&64&&om(l),i&512&&Hi(l,l.return);break;case 3:if(dn(e,l),i&64&&(e=l.updateQueue,e!==null)){if(n=null,l.child!==null)switch(l.child.tag){case 27:case 5:n=l.child.stateNode;break;case 1:n=l.child.stateNode}try{Wu(e,n)}catch(p){it(l,l.return,p)}}break;case 27:n===null&&i&4&&um(l);case 26:case 5:dn(e,l),n===null&&i&4&&cm(l),i&512&&Hi(l,l.return);break;case 12:dn(e,l);break;case 31:dn(e,l),i&4&&xm(e,l);break;case 13:dn(e,l),i&4&&gm(e,l),i&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Ig.bind(null,l),yb(e,l))));break;case 22:if(i=l.memoizedState!==null||rn,!i){n=n!==null&&n.memoizedState!==null||Rt,c=rn;var d=Rt;rn=i,(Rt=n)&&!d?un(e,l,(l.subtreeFlags&8772)!==0):dn(e,l),rn=c,Rt=d}break;case 30:break;default:dn(e,l)}}function fm(e){var n=e.alternate;n!==null&&(e.alternate=null,fm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var bt=null,ia=!1;function cn(e,n,l){for(l=l.child;l!==null;)hm(e,n,l),l=l.sibling}function hm(e,n,l){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Qe,l)}catch{}switch(l.tag){case 26:Rt||Xa(l,n),cn(e,n,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Rt||Xa(l,n);var i=bt,c=ia;Rn(l.type)&&(bt=l.stateNode,ia=!1),cn(e,n,l),Xi(l.stateNode),bt=i,ia=c;break;case 5:Rt||Xa(l,n);case 6:if(i=bt,c=ia,bt=null,cn(e,n,l),bt=i,ia=c,bt!==null)if(ia)try{(bt.nodeType===9?bt.body:bt.nodeName==="HTML"?bt.ownerDocument.body:bt).removeChild(l.stateNode)}catch(d){it(l,n,d)}else try{bt.removeChild(l.stateNode)}catch(d){it(l,n,d)}break;case 18:bt!==null&&(ia?(e=bt,rf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),si(e)):rf(bt,l.stateNode));break;case 4:i=bt,c=ia,bt=l.stateNode.containerInfo,ia=!0,cn(e,n,l),bt=i,ia=c;break;case 0:case 11:case 14:case 15:Tn(2,l,n),Rt||Tn(4,l,n),cn(e,n,l);break;case 1:Rt||(Xa(l,n),i=l.stateNode,typeof i.componentWillUnmount=="function"&&rm(l,n,i)),cn(e,n,l);break;case 21:cn(e,n,l);break;case 22:Rt=(i=Rt)||l.memoizedState!==null,cn(e,n,l),Rt=i;break;default:cn(e,n,l)}}function xm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{si(e)}catch(l){it(n,n.return,l)}}}function gm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{si(e)}catch(l){it(n,n.return,l)}}function Qg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pm),n;default:throw Error(u(435,e.tag))}}function Ps(e,n){var l=Qg(e);n.forEach(function(i){if(!l.has(i)){l.add(i);var c=eb.bind(null,e,i);i.then(c,c)}})}function sa(e,n){var l=n.deletions;if(l!==null)for(var i=0;i<l.length;i++){var c=l[i],d=e,p=n,b=p;e:for(;b!==null;){switch(b.tag){case 27:if(Rn(b.type)){bt=b.stateNode,ia=!1;break e}break;case 5:bt=b.stateNode,ia=!1;break e;case 3:case 4:bt=b.stateNode.containerInfo,ia=!0;break e}b=b.return}if(bt===null)throw Error(u(160));hm(d,p,c),bt=null,ia=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)bm(n,e),n=n.sibling}var Ba=null;function bm(e,n){var l=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:sa(n,e),oa(e),i&4&&(Tn(3,e,e.return),Ri(3,e),Tn(5,e,e.return));break;case 1:sa(n,e),oa(e),i&512&&(Rt||l===null||Xa(l,l.return)),i&64&&rn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?i:l.concat(i))));break;case 26:var c=Ba;if(sa(n,e),oa(e),i&512&&(Rt||l===null||Xa(l,l.return)),i&4){var d=l!==null?l.memoizedState:null;if(i=e.memoizedState,l===null)if(i===null)if(e.stateNode===null){e:{i=e.type,l=e.memoizedProps,c=c.ownerDocument||c;t:switch(i){case"title":d=c.getElementsByTagName("title")[0],(!d||d[di]||d[vt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(i),c.head.insertBefore(d,c.querySelector("head > title"))),Jt(d,i,l),d[vt]=e,$t(d),i=d;break e;case"link":var p=yf("link","href",c).get(i+(l.href||""));if(p){for(var b=0;b<p.length;b++)if(d=p[b],d.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&d.getAttribute("rel")===(l.rel==null?null:l.rel)&&d.getAttribute("title")===(l.title==null?null:l.title)&&d.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){p.splice(b,1);break t}}d=c.createElement(i),Jt(d,i,l),c.head.appendChild(d);break;case"meta":if(p=yf("meta","content",c).get(i+(l.content||""))){for(b=0;b<p.length;b++)if(d=p[b],d.getAttribute("content")===(l.content==null?null:""+l.content)&&d.getAttribute("name")===(l.name==null?null:l.name)&&d.getAttribute("property")===(l.property==null?null:l.property)&&d.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&d.getAttribute("charset")===(l.charSet==null?null:l.charSet)){p.splice(b,1);break t}}d=c.createElement(i),Jt(d,i,l),c.head.appendChild(d);break;default:throw Error(u(468,i))}d[vt]=e,$t(d),i=d}e.stateNode=i}else vf(c,e.type,e.stateNode);else e.stateNode=bf(c,i,e.memoizedProps);else d!==i?(d===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):d.count--,i===null?vf(c,e.type,e.stateNode):bf(c,i,e.memoizedProps)):i===null&&e.stateNode!==null&&pc(e,e.memoizedProps,l.memoizedProps)}break;case 27:sa(n,e),oa(e),i&512&&(Rt||l===null||Xa(l,l.return)),l!==null&&i&4&&pc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(sa(n,e),oa(e),i&512&&(Rt||l===null||Xa(l,l.return)),e.flags&32){c=e.stateNode;try{Tl(c,"")}catch(je){it(e,e.return,je)}}i&4&&e.stateNode!=null&&(c=e.memoizedProps,pc(e,c,l!==null?l.memoizedProps:c)),i&1024&&(hc=!0);break;case 6:if(sa(n,e),oa(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,l=e.stateNode;try{l.nodeValue=i}catch(je){it(e,e.return,je)}}break;case 3:if(ho=null,c=Ba,Ba=mo(n.containerInfo),sa(n,e),Ba=c,oa(e),i&4&&l!==null&&l.memoizedState.isDehydrated)try{si(n.containerInfo)}catch(je){it(e,e.return,je)}hc&&(hc=!1,ym(e));break;case 4:i=Ba,Ba=mo(e.stateNode.containerInfo),sa(n,e),oa(e),Ba=i;break;case 12:sa(n,e),oa(e);break;case 31:sa(n,e),oa(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ps(e,i)));break;case 13:sa(n,e),oa(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(eo=ye()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ps(e,i)));break;case 22:c=e.memoizedState!==null;var C=l!==null&&l.memoizedState!==null,Q=rn,I=Rt;if(rn=Q||c,Rt=I||C,sa(n,e),Rt=I,rn=Q,oa(e),i&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(l===null||C||rn||Rt||fl(e)),l=null,n=e;;){if(n.tag===5||n.tag===26){if(l===null){C=l=n;try{if(d=C.stateNode,c)p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{b=C.stateNode;var ie=C.memoizedProps.style,J=ie!=null&&ie.hasOwnProperty("display")?ie.display:null;b.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(je){it(C,C.return,je)}}}else if(n.tag===6){if(l===null){C=n;try{C.stateNode.nodeValue=c?"":C.memoizedProps}catch(je){it(C,C.return,je)}}}else if(n.tag===18){if(l===null){C=n;try{var W=C.stateNode;c?cf(W,!0):cf(C.stateNode,!1)}catch(je){it(C,C.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;l===n&&(l=null),n=n.return}l===n&&(l=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(l=i.retryQueue,l!==null&&(i.retryQueue=null,Ps(e,l))));break;case 19:sa(n,e),oa(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ps(e,i)));break;case 30:break;case 21:break;default:sa(n,e),oa(e)}}function oa(e){var n=e.flags;if(n&2){try{for(var l,i=e.return;i!==null;){if(dm(i)){l=i;break}i=i.return}if(l==null)throw Error(u(160));switch(l.tag){case 27:var c=l.stateNode,d=mc(e);Ws(e,d,c);break;case 5:var p=l.stateNode;l.flags&32&&(Tl(p,""),l.flags&=-33);var b=mc(e);Ws(e,b,p);break;case 3:case 4:var C=l.stateNode.containerInfo,Q=mc(e);fc(e,Q,C);break;default:throw Error(u(161))}}catch(I){it(e,e.return,I)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ym(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function dn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mm(e,n.alternate,n),n=n.sibling}function fl(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Tn(4,n,n.return),fl(n);break;case 1:Xa(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&rm(n,n.return,l),fl(n);break;case 27:Xi(n.stateNode);case 26:case 5:Xa(n,n.return),fl(n);break;case 22:n.memoizedState===null&&fl(n);break;case 30:fl(n);break;default:fl(n)}e=e.sibling}}function un(e,n,l){for(l=l&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,c=e,d=n,p=d.flags;switch(d.tag){case 0:case 11:case 15:un(c,d,l),Ri(4,d);break;case 1:if(un(c,d,l),i=d,c=i.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){it(i,i.return,Q)}if(i=d,c=i.updateQueue,c!==null){var b=i.stateNode;try{var C=c.shared.hiddenCallbacks;if(C!==null)for(c.shared.hiddenCallbacks=null,c=0;c<C.length;c++)Fu(C[c],b)}catch(Q){it(i,i.return,Q)}}l&&p&64&&om(d),Hi(d,d.return);break;case 27:um(d);case 26:case 5:un(c,d,l),l&&i===null&&p&4&&cm(d),Hi(d,d.return);break;case 12:un(c,d,l);break;case 31:un(c,d,l),l&&p&4&&xm(c,d);break;case 13:un(c,d,l),l&&p&4&&gm(c,d);break;case 22:d.memoizedState===null&&un(c,d,l),Hi(d,d.return);break;case 30:break;default:un(c,d,l)}n=n.sibling}}function xc(e,n){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Ni(l))}function gc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ni(e))}function Ga(e,n,l,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)vm(e,n,l,i),n=n.sibling}function vm(e,n,l,i){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ga(e,n,l,i),c&2048&&Ri(9,n);break;case 1:Ga(e,n,l,i);break;case 3:Ga(e,n,l,i),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ni(e)));break;case 12:if(c&2048){Ga(e,n,l,i),e=n.stateNode;try{var d=n.memoizedProps,p=d.id,b=d.onPostCommit;typeof b=="function"&&b(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){it(n,n.return,C)}}else Ga(e,n,l,i);break;case 31:Ga(e,n,l,i);break;case 13:Ga(e,n,l,i);break;case 23:break;case 22:d=n.stateNode,p=n.alternate,n.memoizedState!==null?d._visibility&2?Ga(e,n,l,i):Li(e,n):d._visibility&2?Ga(e,n,l,i):(d._visibility|=2,Jl(e,n,l,i,(n.subtreeFlags&10256)!==0||!1)),c&2048&&xc(p,n);break;case 24:Ga(e,n,l,i),c&2048&&gc(n.alternate,n);break;default:Ga(e,n,l,i)}}function Jl(e,n,l,i,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,p=n,b=l,C=i,Q=p.flags;switch(p.tag){case 0:case 11:case 15:Jl(d,p,b,C,c),Ri(8,p);break;case 23:break;case 22:var I=p.stateNode;p.memoizedState!==null?I._visibility&2?Jl(d,p,b,C,c):Li(d,p):(I._visibility|=2,Jl(d,p,b,C,c)),c&&Q&2048&&xc(p.alternate,p);break;case 24:Jl(d,p,b,C,c),c&&Q&2048&&gc(p.alternate,p);break;default:Jl(d,p,b,C,c)}n=n.sibling}}function Li(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var l=e,i=n,c=i.flags;switch(i.tag){case 22:Li(l,i),c&2048&&xc(i.alternate,i);break;case 24:Li(l,i),c&2048&&gc(i.alternate,i);break;default:Li(l,i)}n=n.sibling}}var qi=8192;function Fl(e,n,l){if(e.subtreeFlags&qi)for(e=e.child;e!==null;)jm(e,n,l),e=e.sibling}function jm(e,n,l){switch(e.tag){case 26:Fl(e,n,l),e.flags&qi&&e.memoizedState!==null&&Mb(l,Ba,e.memoizedState,e.memoizedProps);break;case 5:Fl(e,n,l);break;case 3:case 4:var i=Ba;Ba=mo(e.stateNode.containerInfo),Fl(e,n,l),Ba=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=qi,qi=16777216,Fl(e,n,l),qi=i):Fl(e,n,l));break;default:Fl(e,n,l)}}function wm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Bi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var l=0;l<n.length;l++){var i=n[l];Vt=i,_m(i,e)}wm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nm(e),e=e.sibling}function Nm(e){switch(e.tag){case 0:case 11:case 15:Bi(e),e.flags&2048&&Tn(9,e,e.return);break;case 3:Bi(e);break;case 12:Bi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Is(e)):Bi(e);break;default:Bi(e)}}function Is(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var l=0;l<n.length;l++){var i=n[l];Vt=i,_m(i,e)}wm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Tn(8,n,n.return),Is(n);break;case 22:l=n.stateNode,l._visibility&2&&(l._visibility&=-3,Is(n));break;default:Is(n)}e=e.sibling}}function _m(e,n){for(;Vt!==null;){var l=Vt;switch(l.tag){case 0:case 11:case 15:Tn(8,l,n);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var i=l.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ni(l.memoizedState.cache)}if(i=l.child,i!==null)i.return=l,Vt=i;else e:for(l=e;Vt!==null;){i=Vt;var c=i.sibling,d=i.return;if(fm(i),i===l){Vt=null;break e}if(c!==null){c.return=d,Vt=c;break e}Vt=d}}}var Xg={getCacheForType:function(e){var n=Zt(Ot),l=n.data.get(e);return l===void 0&&(l=e(),n.data.set(e,l)),l},cacheSignal:function(){return Zt(Ot).controller.signal}},Zg=typeof WeakMap=="function"?WeakMap:Map,at=0,pt=null,$e=null,Xe=0,lt=0,ja=null,En=!1,Wl=!1,bc=!1,pn=0,Nt=0,Mn=0,hl=0,yc=0,wa=0,Pl=0,Gi=null,ra=null,vc=!1,eo=0,Sm=0,to=1/0,ao=null,Dn=null,qt=0,On=null,Il=null,mn=0,jc=0,wc=null,km=null,Yi=0,Nc=null;function Na(){return(at&2)!==0&&Xe!==0?Xe&-Xe:A.T!==null?Tc():Ae()}function Cm(){if(wa===0)if((Xe&536870912)===0||Je){var e=fa;fa<<=1,(fa&3932160)===0&&(fa=262144),wa=e}else wa=536870912;return e=ya.current,e!==null&&(e.flags|=32),wa}function ca(e,n,l){(e===pt&&(lt===2||lt===9)||e.cancelPendingCommit!==null)&&(ei(e,0),An(e,Xe,wa,!1)),We(e,l),((at&2)===0||e!==pt)&&(e===pt&&((at&2)===0&&(hl|=l),Nt===4&&An(e,Xe,wa,!1)),Za(e))}function zm(e,n,l){if((at&6)!==0)throw Error(u(327));var i=!l&&(n&127)===0&&(n&e.expiredLanes)===0||de(e,n),c=i?Fg(e,n):Sc(e,n,!0),d=i;do{if(c===0){Wl&&!i&&An(e,n,0,!1);break}else{if(l=e.current.alternate,d&&!Kg(l)){c=Sc(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var b=e;c=Gi;var C=b.current.memoizedState.isDehydrated;if(C&&(ei(b,p).flags|=256),p=Sc(b,p,!1),p!==2){if(bc&&!C){b.errorRecoveryDisabledLanes|=d,hl|=d,c=4;break e}d=ra,ra=c,d!==null&&(ra===null?ra=d:ra.push.apply(ra,d))}c=p}if(d=!1,c!==2)continue}}if(c===1){ei(e,0),An(e,n,0,!0);break}e:{switch(i=e,d=c,d){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:An(i,n,wa,!En);break e;case 2:ra=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(c=eo+300-ye(),10<c)){if(An(i,n,wa,!En),L(i,0,!0)!==0)break e;mn=n,i.timeoutHandle=sf(Tm.bind(null,i,l,ra,ao,vc,n,wa,hl,Pl,En,d,"Throttled",-0,0),c);break e}Tm(i,l,ra,ao,vc,n,wa,hl,Pl,En,d,null,-0,0)}}break}while(!0);Za(e)}function Tm(e,n,l,i,c,d,p,b,C,Q,I,ie,J,W){if(e.timeoutHandle=-1,ie=n.subtreeFlags,ie&8192||(ie&16785408)===16785408){ie={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wa},jm(n,d,ie);var je=(d&62914560)===d?eo-ye():(d&4194048)===d?Sm-ye():0;if(je=Db(ie,je),je!==null){mn=d,e.cancelPendingCommit=je(Hm.bind(null,e,n,d,l,i,c,p,b,C,I,ie,null,J,W)),An(e,d,p,!Q);return}}Hm(e,n,d,l,i,c,p,b,C)}function Kg(e){for(var n=e;;){var l=n.tag;if((l===0||l===11||l===15)&&n.flags&16384&&(l=n.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var i=0;i<l.length;i++){var c=l[i],d=c.getSnapshot;c=c.value;try{if(!ga(d(),c))return!1}catch{return!1}}if(l=n.child,n.subtreeFlags&16384&&l!==null)l.return=n,n=l;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function An(e,n,l,i){n&=~yc,n&=~hl,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var c=n;0<c;){var d=31-rt(c),p=1<<d;i[d]=-1,c&=~p}l!==0&&Me(e,l,n)}function no(){return(at&6)===0?($i(0),!1):!0}function _c(){if($e!==null){if(lt===0)var e=$e.return;else e=$e,tn=sl=null,Br(e),Vl=null,Si=0,e=$e;for(;e!==null;)sm(e.alternate,e),e=e.return;$e=null}}function ei(e,n){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,fb(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),mn=0,_c(),pt=e,$e=l=Ia(e.current,null),Xe=n,lt=0,ja=null,En=!1,Wl=de(e,n),bc=!1,Pl=wa=yc=hl=Mn=Nt=0,ra=Gi=null,vc=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var c=31-rt(i),d=1<<c;n|=e[c],i&=~d}return pn=n,_s(),l}function Em(e,n){Le=null,A.H=Oi,n===$l||n===Ds?(n=Xu(),lt=3):n===zr?(n=Xu(),lt=4):lt=n===ac?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ja=n,$e===null&&(Nt=1,Xs(e,Ma(n,e.current)))}function Mm(){var e=ya.current;return e===null?!0:(Xe&4194048)===Xe?Ua===null:(Xe&62914560)===Xe||(Xe&536870912)!==0?e===Ua:!1}function Dm(){var e=A.H;return A.H=Oi,e===null?Oi:e}function Om(){var e=A.A;return A.A=Xg,e}function lo(){Nt=4,En||(Xe&4194048)!==Xe&&ya.current!==null||(Wl=!0),(Mn&134217727)===0&&(hl&134217727)===0||pt===null||An(pt,Xe,wa,!1)}function Sc(e,n,l){var i=at;at|=2;var c=Dm(),d=Om();(pt!==e||Xe!==n)&&(ao=null,ei(e,n)),n=!1;var p=Nt;e:do try{if(lt!==0&&$e!==null){var b=$e,C=ja;switch(lt){case 8:_c(),p=6;break e;case 3:case 2:case 9:case 6:ya.current===null&&(n=!0);var Q=lt;if(lt=0,ja=null,ti(e,b,C,Q),l&&Wl){p=0;break e}break;default:Q=lt,lt=0,ja=null,ti(e,b,C,Q)}}Jg(),p=Nt;break}catch(I){Em(e,I)}while(!0);return n&&e.shellSuspendCounter++,tn=sl=null,at=i,A.H=c,A.A=d,$e===null&&(pt=null,Xe=0,_s()),p}function Jg(){for(;$e!==null;)Am($e)}function Fg(e,n){var l=at;at|=2;var i=Dm(),c=Om();pt!==e||Xe!==n?(ao=null,to=ye()+500,ei(e,n)):Wl=de(e,n);e:do try{if(lt!==0&&$e!==null){n=$e;var d=ja;t:switch(lt){case 1:lt=0,ja=null,ti(e,n,d,1);break;case 2:case 9:if(Vu(d)){lt=0,ja=null,Um(n);break}n=function(){lt!==2&&lt!==9||pt!==e||(lt=7),Za(e)},d.then(n,n);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:Vu(d)?(lt=0,ja=null,Um(n)):(lt=0,ja=null,ti(e,n,d,7));break;case 5:var p=null;switch($e.tag){case 26:p=$e.memoizedState;case 5:case 27:var b=$e;if(p?jf(p):b.stateNode.complete){lt=0,ja=null;var C=b.sibling;if(C!==null)$e=C;else{var Q=b.return;Q!==null?($e=Q,io(Q)):$e=null}break t}}lt=0,ja=null,ti(e,n,d,5);break;case 6:lt=0,ja=null,ti(e,n,d,6);break;case 8:_c(),Nt=6;break e;default:throw Error(u(462))}}Wg();break}catch(I){Em(e,I)}while(!0);return tn=sl=null,A.H=i,A.A=c,at=l,$e!==null?0:(pt=null,Xe=0,_s(),Nt)}function Wg(){for(;$e!==null&&!ma();)Am($e)}function Am(e){var n=lm(e.alternate,e,pn);e.memoizedProps=e.pendingProps,n===null?io(e):$e=n}function Um(e){var n=e,l=n.alternate;switch(n.tag){case 15:case 0:n=Pp(l,n,n.pendingProps,n.type,void 0,Xe);break;case 11:n=Pp(l,n,n.pendingProps,n.type.render,n.ref,Xe);break;case 5:Br(n);default:sm(l,n),n=$e=Ou(n,pn),n=lm(l,n,pn)}e.memoizedProps=e.pendingProps,n===null?io(e):$e=n}function ti(e,n,l,i){tn=sl=null,Br(n),Vl=null,Si=0;var c=n.return;try{if(qg(e,c,n,l,Xe)){Nt=1,Xs(e,Ma(l,e.current)),$e=null;return}}catch(d){if(c!==null)throw $e=c,d;Nt=1,Xs(e,Ma(l,e.current)),$e=null;return}n.flags&32768?(Je||i===1?e=!0:Wl||(Xe&536870912)!==0?e=!1:(En=e=!0,(i===2||i===9||i===3||i===6)&&(i=ya.current,i!==null&&i.tag===13&&(i.flags|=16384))),Rm(n,e)):io(n)}function io(e){var n=e;do{if((n.flags&32768)!==0){Rm(n,En);return}e=n.return;var l=Yg(n.alternate,n,pn);if(l!==null){$e=l;return}if(n=n.sibling,n!==null){$e=n;return}$e=n=e}while(n!==null);Nt===0&&(Nt=5)}function Rm(e,n){do{var l=$g(e.alternate,e);if(l!==null){l.flags&=32767,$e=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!n&&(e=e.sibling,e!==null)){$e=e;return}$e=e=l}while(e!==null);Nt=6,$e=null}function Hm(e,n,l,i,c,d,p,b,C){e.cancelPendingCommit=null;do so();while(qt!==0);if((at&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(d=n.lanes|n.childLanes,d|=mr,nt(e,l,d,p,b,C),e===pt&&($e=pt=null,Xe=0),Il=n,On=e,mn=l,jc=d,wc=c,km=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tb(Y,function(){return Ym(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=A.T,A.T=null,c=F.p,F.p=2,p=at,at|=4;try{Vg(e,n,l)}finally{at=p,F.p=c,A.T=i}}qt=1,Lm(),qm(),Bm()}}function Lm(){if(qt===1){qt=0;var e=On,n=Il,l=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||l){l=A.T,A.T=null;var i=F.p;F.p=2;var c=at;at|=4;try{bm(n,e);var d=Hc,p=_u(e.containerInfo),b=d.focusedElem,C=d.selectionRange;if(p!==b&&b&&b.ownerDocument&&Nu(b.ownerDocument.documentElement,b)){if(C!==null&&rr(b)){var Q=C.start,I=C.end;if(I===void 0&&(I=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(I,b.value.length);else{var ie=b.ownerDocument||document,J=ie&&ie.defaultView||window;if(J.getSelection){var W=J.getSelection(),je=b.textContent.length,Ee=Math.min(C.start,je),ut=C.end===void 0?Ee:Math.min(C.end,je);!W.extend&&Ee>ut&&(p=ut,ut=Ee,Ee=p);var q=wu(b,Ee),D=wu(b,ut);if(q&&D&&(W.rangeCount!==1||W.anchorNode!==q.node||W.anchorOffset!==q.offset||W.focusNode!==D.node||W.focusOffset!==D.offset)){var V=ie.createRange();V.setStart(q.node,q.offset),W.removeAllRanges(),Ee>ut?(W.addRange(V),W.extend(D.node,D.offset)):(V.setEnd(D.node,D.offset),W.addRange(V))}}}}for(ie=[],W=b;W=W.parentNode;)W.nodeType===1&&ie.push({element:W,left:W.scrollLeft,top:W.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ie.length;b++){var ne=ie[b];ne.element.scrollLeft=ne.left,ne.element.scrollTop=ne.top}}yo=!!Rc,Hc=Rc=null}finally{at=c,F.p=i,A.T=l}}e.current=n,qt=2}}function qm(){if(qt===2){qt=0;var e=On,n=Il,l=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||l){l=A.T,A.T=null;var i=F.p;F.p=2;var c=at;at|=4;try{mm(e,n.alternate,n)}finally{at=c,F.p=i,A.T=l}}qt=3}}function Bm(){if(qt===4||qt===3){qt=0,T();var e=On,n=Il,l=mn,i=km;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?qt=5:(qt=0,Il=On=null,Gm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Dn=null),ge(l),n=n.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=A.T,c=F.p,F.p=2,A.T=null;try{for(var d=e.onRecoverableError,p=0;p<i.length;p++){var b=i[p];d(b.value,{componentStack:b.stack})}}finally{A.T=n,F.p=c}}(mn&3)!==0&&so(),Za(e),c=e.pendingLanes,(l&261930)!==0&&(c&42)!==0?e===Nc?Yi++:(Yi=0,Nc=e):Yi=0,$i(0)}}function Gm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ni(n)))}function so(){return Lm(),qm(),Bm(),Ym()}function Ym(){if(qt!==5)return!1;var e=On,n=jc;jc=0;var l=ge(mn),i=A.T,c=F.p;try{F.p=32>l?32:l,A.T=null,l=wc,wc=null;var d=On,p=mn;if(qt=0,Il=On=null,mn=0,(at&6)!==0)throw Error(u(331));var b=at;if(at|=4,Nm(d.current),vm(d,d.current,p,l),at=b,$i(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Qe,d)}catch{}return!0}finally{F.p=c,A.T=i,Gm(e,n)}}function $m(e,n,l){n=Ma(l,n),n=tc(e.stateNode,n,2),e=kn(e,n,2),e!==null&&(We(e,2),Za(e))}function it(e,n,l){if(e.tag===3)$m(e,e,l);else for(;n!==null;){if(n.tag===3){$m(n,e,l);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Dn===null||!Dn.has(i))){e=Ma(l,e),l=Vp(2),i=kn(n,l,2),i!==null&&(Qp(l,i,n,e),We(i,2),Za(i));break}}n=n.return}}function kc(e,n,l){var i=e.pingCache;if(i===null){i=e.pingCache=new Zg;var c=new Set;i.set(n,c)}else c=i.get(n),c===void 0&&(c=new Set,i.set(n,c));c.has(l)||(bc=!0,c.add(l),e=Pg.bind(null,e,n,l),n.then(e,e))}function Pg(e,n,l){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,pt===e&&(Xe&l)===l&&(Nt===4||Nt===3&&(Xe&62914560)===Xe&&300>ye()-eo?(at&2)===0&&ei(e,0):yc|=l,Pl===Xe&&(Pl=0)),Za(e)}function Vm(e,n){n===0&&(n=Oe()),e=nl(e,n),e!==null&&(We(e,n),Za(e))}function Ig(e){var n=e.memoizedState,l=0;n!==null&&(l=n.retryLane),Vm(e,l)}function eb(e,n){var l=0;switch(e.tag){case 31:case 13:var i=e.stateNode,c=e.memoizedState;c!==null&&(l=c.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(n),Vm(e,l)}function tb(e,n){return Wt(e,n)}var oo=null,ai=null,Cc=!1,ro=!1,zc=!1,Un=0;function Za(e){e!==ai&&e.next===null&&(ai===null?oo=ai=e:ai=ai.next=e),ro=!0,Cc||(Cc=!0,nb())}function $i(e,n){if(!zc&&ro){zc=!0;do for(var l=!1,i=oo;i!==null;){if(e!==0){var c=i.pendingLanes;if(c===0)var d=0;else{var p=i.suspendedLanes,b=i.pingedLanes;d=(1<<31-rt(42|e)+1)-1,d&=c&~(p&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(l=!0,Km(i,d))}else d=Xe,d=L(i,i===pt?d:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(d&3)===0||de(i,d)||(l=!0,Km(i,d));i=i.next}while(l);zc=!1}}function ab(){Qm()}function Qm(){ro=Cc=!1;var e=0;Un!==0&&mb()&&(e=Un);for(var n=ye(),l=null,i=oo;i!==null;){var c=i.next,d=Xm(i,n);d===0?(i.next=null,l===null?oo=c:l.next=c,c===null&&(ai=l)):(l=i,(e!==0||(d&3)!==0)&&(ro=!0)),i=c}qt!==0&&qt!==5||$i(e),Un!==0&&(Un=0)}function Xm(e,n){for(var l=e.suspendedLanes,i=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var p=31-rt(d),b=1<<p,C=c[p];C===-1?((b&l)===0||(b&i)!==0)&&(c[p]=oe(b,n)):C<=n&&(e.expiredLanes|=b),d&=~b}if(n=pt,l=Xe,l=L(e,e===n?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,l===0||e===n&&(lt===2||lt===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&St(i),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||de(e,l)){if(n=l&-l,n===e.callbackPriority)return n;switch(i!==null&&St(i),ge(l)){case 2:case 8:l=ot;break;case 32:l=Y;break;case 268435456:l=we;break;default:l=Y}return i=Zm.bind(null,e),l=Wt(l,i),e.callbackPriority=n,e.callbackNode=l,n}return i!==null&&i!==null&&St(i),e.callbackPriority=2,e.callbackNode=null,2}function Zm(e,n){if(qt!==0&&qt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(so()&&e.callbackNode!==l)return null;var i=Xe;return i=L(e,e===pt?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(zm(e,i,n),Xm(e,ye()),e.callbackNode!=null&&e.callbackNode===l?Zm.bind(null,e):null)}function Km(e,n){if(so())return null;zm(e,n,!0)}function nb(){hb(function(){(at&6)!==0?Wt(ve,ab):Qm()})}function Tc(){if(Un===0){var e=Gl;e===0&&(e=Ya,Ya<<=1,(Ya&261888)===0&&(Ya=256)),Un=e}return Un}function Jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xs(""+e)}function Fm(e,n){var l=n.ownerDocument.createElement("input");return l.name=n.name,l.value=n.value,e.id&&l.setAttribute("form",e.id),n.parentNode.insertBefore(l,n),e=new FormData(e),l.parentNode.removeChild(l),e}function lb(e,n,l,i,c){if(n==="submit"&&l&&l.stateNode===c){var d=Jm((c[na]||null).action),p=i.submitter;p&&(n=(n=p[na]||null)?Jm(n.formAction):p.getAttribute("formAction"),n!==null&&(d=n,p=null));var b=new vs("action","action",null,i,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Un!==0){var C=p?Fm(c,p):new FormData(c);Jr(l,{pending:!0,data:C,method:c.method,action:d},null,C)}}else typeof d=="function"&&(b.preventDefault(),C=p?Fm(c,p):new FormData(c),Jr(l,{pending:!0,data:C,method:c.method,action:d},d,C))},currentTarget:c}]})}}for(var Ec=0;Ec<pr.length;Ec++){var Mc=pr[Ec],ib=Mc.toLowerCase(),sb=Mc[0].toUpperCase()+Mc.slice(1);qa(ib,"on"+sb)}qa(Cu,"onAnimationEnd"),qa(zu,"onAnimationIteration"),qa(Tu,"onAnimationStart"),qa("dblclick","onDoubleClick"),qa("focusin","onFocus"),qa("focusout","onBlur"),qa(wg,"onTransitionRun"),qa(Ng,"onTransitionStart"),qa(_g,"onTransitionCancel"),qa(Eu,"onTransitionEnd"),Cl("onMouseEnter",["mouseout","mouseover"]),Cl("onMouseLeave",["mouseout","mouseover"]),Cl("onPointerEnter",["pointerout","pointerover"]),Cl("onPointerLeave",["pointerout","pointerover"]),In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),In("onBeforeInput",["compositionend","keypress","textInput","paste"]),In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ob=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vi));function Wm(e,n){n=(n&4)!==0;for(var l=0;l<e.length;l++){var i=e[l],c=i.event;i=i.listeners;e:{var d=void 0;if(n)for(var p=i.length-1;0<=p;p--){var b=i[p],C=b.instance,Q=b.currentTarget;if(b=b.listener,C!==d&&c.isPropagationStopped())break e;d=b,c.currentTarget=Q;try{d(c)}catch(I){Ns(I)}c.currentTarget=null,d=C}else for(p=0;p<i.length;p++){if(b=i[p],C=b.instance,Q=b.currentTarget,b=b.listener,C!==d&&c.isPropagationStopped())break e;d=b,c.currentTarget=Q;try{d(c)}catch(I){Ns(I)}c.currentTarget=null,d=C}}}}function Ve(e,n){var l=n[Vo];l===void 0&&(l=n[Vo]=new Set);var i=e+"__bubble";l.has(i)||(Pm(n,e,2,!1),l.add(i))}function Dc(e,n,l){var i=0;n&&(i|=4),Pm(l,e,i,n)}var co="_reactListening"+Math.random().toString(36).slice(2);function Oc(e){if(!e[co]){e[co]=!0,Qd.forEach(function(l){l!=="selectionchange"&&(ob.has(l)||Dc(l,!1,e),Dc(l,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[co]||(n[co]=!0,Dc("selectionchange",!1,n))}}function Pm(e,n,l,i){switch(zf(n)){case 2:var c=Ub;break;case 8:c=Rb;break;default:c=Kc}l=c.bind(null,n,l,e),c=void 0,!Io||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),i?c!==void 0?e.addEventListener(n,l,{capture:!0,passive:c}):e.addEventListener(n,l,!0):c!==void 0?e.addEventListener(n,l,{passive:c}):e.addEventListener(n,l,!1)}function Ac(e,n,l,i,c){var d=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var b=i.stateNode.containerInfo;if(b===c)break;if(p===4)for(p=i.return;p!==null;){var C=p.tag;if((C===3||C===4)&&p.stateNode.containerInfo===c)return;p=p.return}for(;b!==null;){if(p=_l(b),p===null)return;if(C=p.tag,C===5||C===6||C===26||C===27){i=d=p;continue e}b=b.parentNode}}i=i.return}nu(function(){var Q=d,I=Wo(l),ie=[];e:{var J=Mu.get(e);if(J!==void 0){var W=vs,je=e;switch(e){case"keypress":if(bs(l)===0)break e;case"keydown":case"keyup":W=eg;break;case"focusin":je="focus",W=nr;break;case"focusout":je="blur",W=nr;break;case"beforeblur":case"afterblur":W=nr;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=ng;break;case Cu:case zu:case Tu:W=Qx;break;case Eu:W=ig;break;case"scroll":case"scrollend":W=Bx;break;case"wheel":W=og;break;case"copy":case"cut":case"paste":W=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=ru;break;case"toggle":case"beforetoggle":W=cg}var Ee=(n&4)!==0,ut=!Ee&&(e==="scroll"||e==="scrollend"),q=Ee?J!==null?J+"Capture":null:J;Ee=[];for(var D=Q,V;D!==null;){var ne=D;if(V=ne.stateNode,ne=ne.tag,ne!==5&&ne!==26&&ne!==27||V===null||q===null||(ne=pi(D,q),ne!=null&&Ee.push(Qi(D,ne,V))),ut)break;D=D.return}0<Ee.length&&(J=new W(J,je,null,l,I),ie.push({event:J,listeners:Ee}))}}if((n&7)===0){e:{if(J=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",J&&l!==Fo&&(je=l.relatedTarget||l.fromElement)&&(_l(je)||je[Nl]))break e;if((W||J)&&(J=I.window===I?I:(J=I.ownerDocument)?J.defaultView||J.parentWindow:window,W?(je=l.relatedTarget||l.toElement,W=Q,je=je?_l(je):null,je!==null&&(ut=g(je),Ee=je.tag,je!==ut||Ee!==5&&Ee!==27&&Ee!==6)&&(je=null)):(W=null,je=Q),W!==je)){if(Ee=su,ne="onMouseLeave",q="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(Ee=ru,ne="onPointerLeave",q="onPointerEnter",D="pointer"),ut=W==null?J:ui(W),V=je==null?J:ui(je),J=new Ee(ne,D+"leave",W,l,I),J.target=ut,J.relatedTarget=V,ne=null,_l(I)===Q&&(Ee=new Ee(q,D+"enter",je,l,I),Ee.target=V,Ee.relatedTarget=ut,ne=Ee),ut=ne,W&&je)t:{for(Ee=rb,q=W,D=je,V=0,ne=q;ne;ne=Ee(ne))V++;ne=0;for(var Ce=D;Ce;Ce=Ee(Ce))ne++;for(;0<V-ne;)q=Ee(q),V--;for(;0<ne-V;)D=Ee(D),ne--;for(;V--;){if(q===D||D!==null&&q===D.alternate){Ee=q;break t}q=Ee(q),D=Ee(D)}Ee=null}else Ee=null;W!==null&&Im(ie,J,W,Ee,!1),je!==null&&ut!==null&&Im(ie,ut,je,Ee,!0)}}e:{if(J=Q?ui(Q):window,W=J.nodeName&&J.nodeName.toLowerCase(),W==="select"||W==="input"&&J.type==="file")var Ie=xu;else if(fu(J))if(gu)Ie=yg;else{Ie=gg;var _e=xg}else W=J.nodeName,!W||W.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?Q&&Jo(Q.elementType)&&(Ie=xu):Ie=bg;if(Ie&&(Ie=Ie(e,Q))){hu(ie,Ie,l,I);break e}_e&&_e(e,J,Q),e==="focusout"&&Q&&J.type==="number"&&Q.memoizedProps.value!=null&&Ko(J,"number",J.value)}switch(_e=Q?ui(Q):window,e){case"focusin":(fu(_e)||_e.contentEditable==="true")&&(Ol=_e,cr=Q,vi=null);break;case"focusout":vi=cr=Ol=null;break;case"mousedown":dr=!0;break;case"contextmenu":case"mouseup":case"dragend":dr=!1,Su(ie,l,I);break;case"selectionchange":if(jg)break;case"keydown":case"keyup":Su(ie,l,I)}var Be;if(ir)e:{switch(e){case"compositionstart":var Ze="onCompositionStart";break e;case"compositionend":Ze="onCompositionEnd";break e;case"compositionupdate":Ze="onCompositionUpdate";break e}Ze=void 0}else Dl?pu(e,l)&&(Ze="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(Ze="onCompositionStart");Ze&&(cu&&l.locale!=="ko"&&(Dl||Ze!=="onCompositionStart"?Ze==="onCompositionEnd"&&Dl&&(Be=lu()):(yn=I,er="value"in yn?yn.value:yn.textContent,Dl=!0)),_e=uo(Q,Ze),0<_e.length&&(Ze=new ou(Ze,e,null,l,I),ie.push({event:Ze,listeners:_e}),Be?Ze.data=Be:(Be=mu(l),Be!==null&&(Ze.data=Be)))),(Be=ug?pg(e,l):mg(e,l))&&(Ze=uo(Q,"onBeforeInput"),0<Ze.length&&(_e=new ou("onBeforeInput","beforeinput",null,l,I),ie.push({event:_e,listeners:Ze}),_e.data=Be)),lb(ie,e,Q,l,I)}Wm(ie,n)})}function Qi(e,n,l){return{instance:e,listener:n,currentTarget:l}}function uo(e,n){for(var l=n+"Capture",i=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=pi(e,l),c!=null&&i.unshift(Qi(e,c,d)),c=pi(e,n),c!=null&&i.push(Qi(e,c,d))),e.tag===3)return i;e=e.return}return[]}function rb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Im(e,n,l,i,c){for(var d=n._reactName,p=[];l!==null&&l!==i;){var b=l,C=b.alternate,Q=b.stateNode;if(b=b.tag,C!==null&&C===i)break;b!==5&&b!==26&&b!==27||Q===null||(C=Q,c?(Q=pi(l,d),Q!=null&&p.unshift(Qi(l,Q,C))):c||(Q=pi(l,d),Q!=null&&p.push(Qi(l,Q,C)))),l=l.return}p.length!==0&&e.push({event:n,listeners:p})}var cb=/\r\n?/g,db=/\u0000|\uFFFD/g;function ef(e){return(typeof e=="string"?e:""+e).replace(cb,`
`).replace(db,"")}function tf(e,n){return n=ef(n),ef(e)===n}function dt(e,n,l,i,c,d){switch(l){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||Tl(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&Tl(e,""+i);break;case"className":fs(e,"class",i);break;case"tabIndex":fs(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":fs(e,l,i);break;case"style":tu(e,i,d);break;case"data":if(n!=="object"){fs(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||l!=="href")){e.removeAttribute(l);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(l);break}i=xs(""+i),e.setAttribute(l,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(l==="formAction"?(n!=="input"&&dt(e,n,"name",c.name,c,null),dt(e,n,"formEncType",c.formEncType,c,null),dt(e,n,"formMethod",c.formMethod,c,null),dt(e,n,"formTarget",c.formTarget,c,null)):(dt(e,n,"encType",c.encType,c,null),dt(e,n,"method",c.method,c,null),dt(e,n,"target",c.target,c,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(l);break}i=xs(""+i),e.setAttribute(l,i);break;case"onClick":i!=null&&(e.onclick=Wa);break;case"onScroll":i!=null&&Ve("scroll",e);break;case"onScrollEnd":i!=null&&Ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(l=i.__html,l!=null){if(c.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}l=xs(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(l,""+i):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":i===!0?e.setAttribute(l,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(l,i):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(l,i):e.removeAttribute(l);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(l):e.setAttribute(l,i);break;case"popover":Ve("beforetoggle",e),Ve("toggle",e),ms(e,"popover",i);break;case"xlinkActuate":Fa(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Fa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Fa(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Fa(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Fa(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Fa(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ms(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Lx.get(l)||l,ms(e,l,i))}}function Uc(e,n,l,i,c,d){switch(l){case"style":tu(e,i,d);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(l=i.__html,l!=null){if(c.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"children":typeof i=="string"?Tl(e,i):(typeof i=="number"||typeof i=="bigint")&&Tl(e,""+i);break;case"onScroll":i!=null&&Ve("scroll",e);break;case"onScrollEnd":i!=null&&Ve("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Wa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xd.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(c=l.endsWith("Capture"),n=l.slice(2,c?l.length-7:void 0),d=e[na]||null,d=d!=null?d[l]:null,typeof d=="function"&&e.removeEventListener(n,d,c),typeof i=="function")){typeof d!="function"&&d!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(n,i,c);break e}l in e?e[l]=i:i===!0?e.setAttribute(l,""):ms(e,l,i)}}}function Jt(e,n,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",e),Ve("load",e);var i=!1,c=!1,d;for(d in l)if(l.hasOwnProperty(d)){var p=l[d];if(p!=null)switch(d){case"src":i=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:dt(e,n,d,p,l,null)}}c&&dt(e,n,"srcSet",l.srcSet,l,null),i&&dt(e,n,"src",l.src,l,null);return;case"input":Ve("invalid",e);var b=d=p=c=null,C=null,Q=null;for(i in l)if(l.hasOwnProperty(i)){var I=l[i];if(I!=null)switch(i){case"name":c=I;break;case"type":p=I;break;case"checked":C=I;break;case"defaultChecked":Q=I;break;case"value":d=I;break;case"defaultValue":b=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(u(137,n));break;default:dt(e,n,i,I,l,null)}}Wd(e,d,b,C,Q,p,c,!1);return;case"select":Ve("invalid",e),i=p=d=null;for(c in l)if(l.hasOwnProperty(c)&&(b=l[c],b!=null))switch(c){case"value":d=b;break;case"defaultValue":p=b;break;case"multiple":i=b;default:dt(e,n,c,b,l,null)}n=d,l=p,e.multiple=!!i,n!=null?zl(e,!!i,n,!1):l!=null&&zl(e,!!i,l,!0);return;case"textarea":Ve("invalid",e),d=c=i=null;for(p in l)if(l.hasOwnProperty(p)&&(b=l[p],b!=null))switch(p){case"value":i=b;break;case"defaultValue":c=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(u(91));break;default:dt(e,n,p,b,l,null)}Id(e,i,c,d);return;case"option":for(C in l)if(l.hasOwnProperty(C)&&(i=l[C],i!=null))switch(C){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:dt(e,n,C,i,l,null)}return;case"dialog":Ve("beforetoggle",e),Ve("toggle",e),Ve("cancel",e),Ve("close",e);break;case"iframe":case"object":Ve("load",e);break;case"video":case"audio":for(i=0;i<Vi.length;i++)Ve(Vi[i],e);break;case"image":Ve("error",e),Ve("load",e);break;case"details":Ve("toggle",e);break;case"embed":case"source":case"link":Ve("error",e),Ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in l)if(l.hasOwnProperty(Q)&&(i=l[Q],i!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:dt(e,n,Q,i,l,null)}return;default:if(Jo(n)){for(I in l)l.hasOwnProperty(I)&&(i=l[I],i!==void 0&&Uc(e,n,I,i,l,void 0));return}}for(b in l)l.hasOwnProperty(b)&&(i=l[b],i!=null&&dt(e,n,b,i,l,null))}function ub(e,n,l,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,p=null,b=null,C=null,Q=null,I=null;for(W in l){var ie=l[W];if(l.hasOwnProperty(W)&&ie!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":C=ie;default:i.hasOwnProperty(W)||dt(e,n,W,null,i,ie)}}for(var J in i){var W=i[J];if(ie=l[J],i.hasOwnProperty(J)&&(W!=null||ie!=null))switch(J){case"type":d=W;break;case"name":c=W;break;case"checked":Q=W;break;case"defaultChecked":I=W;break;case"value":p=W;break;case"defaultValue":b=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(u(137,n));break;default:W!==ie&&dt(e,n,J,W,i,ie)}}Zo(e,p,b,C,Q,I,d,c);return;case"select":W=p=b=J=null;for(d in l)if(C=l[d],l.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":W=C;default:i.hasOwnProperty(d)||dt(e,n,d,null,i,C)}for(c in i)if(d=i[c],C=l[c],i.hasOwnProperty(c)&&(d!=null||C!=null))switch(c){case"value":J=d;break;case"defaultValue":b=d;break;case"multiple":p=d;default:d!==C&&dt(e,n,c,d,i,C)}n=b,l=p,i=W,J!=null?zl(e,!!l,J,!1):!!i!=!!l&&(n!=null?zl(e,!!l,n,!0):zl(e,!!l,l?[]:"",!1));return;case"textarea":W=J=null;for(b in l)if(c=l[b],l.hasOwnProperty(b)&&c!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:dt(e,n,b,null,i,c)}for(p in i)if(c=i[p],d=l[p],i.hasOwnProperty(p)&&(c!=null||d!=null))switch(p){case"value":J=c;break;case"defaultValue":W=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:c!==d&&dt(e,n,p,c,i,d)}Pd(e,J,W);return;case"option":for(var je in l)if(J=l[je],l.hasOwnProperty(je)&&J!=null&&!i.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:dt(e,n,je,null,i,J)}for(C in i)if(J=i[C],W=l[C],i.hasOwnProperty(C)&&J!==W&&(J!=null||W!=null))switch(C){case"selected":e.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:dt(e,n,C,J,i,W)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in l)J=l[Ee],l.hasOwnProperty(Ee)&&J!=null&&!i.hasOwnProperty(Ee)&&dt(e,n,Ee,null,i,J);for(Q in i)if(J=i[Q],W=l[Q],i.hasOwnProperty(Q)&&J!==W&&(J!=null||W!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(u(137,n));break;default:dt(e,n,Q,J,i,W)}return;default:if(Jo(n)){for(var ut in l)J=l[ut],l.hasOwnProperty(ut)&&J!==void 0&&!i.hasOwnProperty(ut)&&Uc(e,n,ut,void 0,i,J);for(I in i)J=i[I],W=l[I],!i.hasOwnProperty(I)||J===W||J===void 0&&W===void 0||Uc(e,n,I,J,i,W);return}}for(var q in l)J=l[q],l.hasOwnProperty(q)&&J!=null&&!i.hasOwnProperty(q)&&dt(e,n,q,null,i,J);for(ie in i)J=i[ie],W=l[ie],!i.hasOwnProperty(ie)||J===W||J==null&&W==null||dt(e,n,ie,J,i,W)}function af(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,l=performance.getEntriesByType("resource"),i=0;i<l.length;i++){var c=l[i],d=c.transferSize,p=c.initiatorType,b=c.duration;if(d&&b&&af(p)){for(p=0,b=c.responseEnd,i+=1;i<l.length;i++){var C=l[i],Q=C.startTime;if(Q>b)break;var I=C.transferSize,ie=C.initiatorType;I&&af(ie)&&(C=C.responseEnd,p+=I*(C<b?1:(b-Q)/(C-Q)))}if(--i,n+=8*(d+p)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rc=null,Hc=null;function po(e){return e.nodeType===9?e:e.ownerDocument}function nf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lf(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Lc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qc=null;function mb(){var e=window.event;return e&&e.type==="popstate"?e===qc?!1:(qc=e,!0):(qc=null,!1)}var sf=typeof setTimeout=="function"?setTimeout:void 0,fb=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,hb=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(e){return of.resolve(null).then(e).catch(xb)}:sf;function xb(e){setTimeout(function(){throw e})}function Rn(e){return e==="head"}function rf(e,n){var l=n,i=0;do{var c=l.nextSibling;if(e.removeChild(l),c&&c.nodeType===8)if(l=c.data,l==="/$"||l==="/&"){if(i===0){e.removeChild(c),si(n);return}i--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")i++;else if(l==="html")Xi(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Xi(l);for(var d=l.firstChild;d;){var p=d.nextSibling,b=d.nodeName;d[di]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||l.removeChild(d),d=p}}else l==="body"&&Xi(e.ownerDocument.body);l=c}while(l);si(n)}function cf(e,n){var l=e;e=0;do{var i=l.nextSibling;if(l.nodeType===1?n?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(n?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=i}while(l)}function Bc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var l=n;switch(n=n.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Bc(l),Qo(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function gb(e,n,l,i){for(;e.nodeType===1;){var c=l;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[di])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ra(e.nextSibling),e===null)break}return null}function bb(e,n,l){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Ra(e.nextSibling),e===null))return null;return e}function df(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ra(e.nextSibling),e===null))return null;return e}function Gc(e){return e.data==="$?"||e.data==="$~"}function Yc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yb(e,n){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||l.readyState!=="loading")n();else{var i=function(){n(),l.removeEventListener("DOMContentLoaded",i)};l.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ra(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var $c=null;function uf(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(n===0)return Ra(e.nextSibling);n--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||n++}e=e.nextSibling}return null}function pf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(n===0)return e;n--}else l!=="/$"&&l!=="/&"||n++}e=e.previousSibling}return null}function mf(e,n,l){switch(n=po(l),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Xi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qo(e)}var Ha=new Map,ff=new Set;function mo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fn=F.d;F.d={f:vb,r:jb,D:wb,C:Nb,L:_b,m:Sb,X:Cb,S:kb,M:zb};function vb(){var e=fn.f(),n=no();return e||n}function jb(e){var n=Sl(e);n!==null&&n.tag===5&&n.type==="form"?Ep(n):fn.r(e)}var ni=typeof document>"u"?null:document;function hf(e,n,l){var i=ni;if(i&&typeof n=="string"&&n){var c=Ta(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof l=="string"&&(c+='[crossorigin="'+l+'"]'),ff.has(c)||(ff.add(c),e={rel:e,crossOrigin:l,href:n},i.querySelector(c)===null&&(n=i.createElement("link"),Jt(n,"link",e),$t(n),i.head.appendChild(n)))}}function wb(e){fn.D(e),hf("dns-prefetch",e,null)}function Nb(e,n){fn.C(e,n),hf("preconnect",e,n)}function _b(e,n,l){fn.L(e,n,l);var i=ni;if(i&&e&&n){var c='link[rel="preload"][as="'+Ta(n)+'"]';n==="image"&&l&&l.imageSrcSet?(c+='[imagesrcset="'+Ta(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(c+='[imagesizes="'+Ta(l.imageSizes)+'"]')):c+='[href="'+Ta(e)+'"]';var d=c;switch(n){case"style":d=li(e);break;case"script":d=ii(e)}Ha.has(d)||(e=j({rel:"preload",href:n==="image"&&l&&l.imageSrcSet?void 0:e,as:n},l),Ha.set(d,e),i.querySelector(c)!==null||n==="style"&&i.querySelector(Zi(d))||n==="script"&&i.querySelector(Ki(d))||(n=i.createElement("link"),Jt(n,"link",e),$t(n),i.head.appendChild(n)))}}function Sb(e,n){fn.m(e,n);var l=ni;if(l&&e){var i=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ta(i)+'"][href="'+Ta(e)+'"]',d=c;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ii(e)}if(!Ha.has(d)&&(e=j({rel:"modulepreload",href:e},n),Ha.set(d,e),l.querySelector(c)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Ki(d)))return}i=l.createElement("link"),Jt(i,"link",e),$t(i),l.head.appendChild(i)}}}function kb(e,n,l){fn.S(e,n,l);var i=ni;if(i&&e){var c=kl(i).hoistableStyles,d=li(e);n=n||"default";var p=c.get(d);if(!p){var b={loading:0,preload:null};if(p=i.querySelector(Zi(d)))b.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":n},l),(l=Ha.get(d))&&Vc(e,l);var C=p=i.createElement("link");$t(C),Jt(C,"link",e),C._p=new Promise(function(Q,I){C.onload=Q,C.onerror=I}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,fo(p,n,i)}p={type:"stylesheet",instance:p,count:1,state:b},c.set(d,p)}}}function Cb(e,n){fn.X(e,n);var l=ni;if(l&&e){var i=kl(l).hoistableScripts,c=ii(e),d=i.get(c);d||(d=l.querySelector(Ki(c)),d||(e=j({src:e,async:!0},n),(n=Ha.get(c))&&Qc(e,n),d=l.createElement("script"),$t(d),Jt(d,"link",e),l.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(c,d))}}function zb(e,n){fn.M(e,n);var l=ni;if(l&&e){var i=kl(l).hoistableScripts,c=ii(e),d=i.get(c);d||(d=l.querySelector(Ki(c)),d||(e=j({src:e,async:!0,type:"module"},n),(n=Ha.get(c))&&Qc(e,n),d=l.createElement("script"),$t(d),Jt(d,"link",e),l.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(c,d))}}function xf(e,n,l,i){var c=(c=ke.current)?mo(c):null;if(!c)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(n=li(l.href),l=kl(c).hoistableStyles,i=l.get(n),i||(i={type:"style",instance:null,count:0,state:null},l.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=li(l.href);var d=kl(c).hoistableStyles,p=d.get(e);if(p||(c=c.ownerDocument||c,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,p),(d=c.querySelector(Zi(e)))&&!d._p&&(p.instance=d,p.state.loading=5),Ha.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ha.set(e,l),d||Tb(c,e,l,p.state))),n&&i===null)throw Error(u(528,""));return p}if(n&&i!==null)throw Error(u(529,""));return null;case"script":return n=l.async,l=l.src,typeof l=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ii(l),l=kl(c).hoistableScripts,i=l.get(n),i||(i={type:"script",instance:null,count:0,state:null},l.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function li(e){return'href="'+Ta(e)+'"'}function Zi(e){return'link[rel="stylesheet"]['+e+"]"}function gf(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Tb(e,n,l,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),Jt(n,"link",l),$t(n),e.head.appendChild(n))}function ii(e){return'[src="'+Ta(e)+'"]'}function Ki(e){return"script[async]"+e}function bf(e,n,l){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+Ta(l.href)+'"]');if(i)return n.instance=i,$t(i),i;var c=j({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),$t(i),Jt(i,"style",c),fo(i,l.precedence,e),n.instance=i;case"stylesheet":c=li(l.href);var d=e.querySelector(Zi(c));if(d)return n.state.loading|=4,n.instance=d,$t(d),d;i=gf(l),(c=Ha.get(c))&&Vc(i,c),d=(e.ownerDocument||e).createElement("link"),$t(d);var p=d;return p._p=new Promise(function(b,C){p.onload=b,p.onerror=C}),Jt(d,"link",i),n.state.loading|=4,fo(d,l.precedence,e),n.instance=d;case"script":return d=ii(l.src),(c=e.querySelector(Ki(d)))?(n.instance=c,$t(c),c):(i=l,(c=Ha.get(d))&&(i=j({},l),Qc(i,c)),e=e.ownerDocument||e,c=e.createElement("script"),$t(c),Jt(c,"link",i),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,fo(i,l.precedence,e));return n.instance}function fo(e,n,l){for(var i=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=i.length?i[i.length-1]:null,d=c,p=0;p<i.length;p++){var b=i[p];if(b.dataset.precedence===n)d=b;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=l.nodeType===9?l.head:l,n.insertBefore(e,n.firstChild))}function Vc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ho=null;function yf(e,n,l){if(ho===null){var i=new Map,c=ho=new Map;c.set(l,i)}else c=ho,i=c.get(l),i||(i=new Map,c.set(l,i));if(i.has(e))return i;for(i.set(e,null),l=l.getElementsByTagName(e),c=0;c<l.length;c++){var d=l[c];if(!(d[di]||d[vt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var p=d.getAttribute(n)||"";p=e+p;var b=i.get(p);b?b.push(d):i.set(p,[d])}}return i}function vf(e,n,l){e=e.ownerDocument||e,e.head.insertBefore(l,n==="title"?e.querySelector("head > title"):null)}function Eb(e,n,l){if(l===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function jf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Mb(e,n,l,i){if(l.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var c=li(i.href),d=n.querySelector(Zi(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=xo.bind(e),n.then(e,e)),l.state.loading|=4,l.instance=d,$t(d);return}d=n.ownerDocument||n,i=gf(i),(c=Ha.get(c))&&Vc(i,c),d=d.createElement("link"),$t(d);var p=d;p._p=new Promise(function(b,C){p.onload=b,p.onerror=C}),Jt(d,"link",i),l.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,n),(n=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=xo.bind(e),n.addEventListener("load",l),n.addEventListener("error",l))}}var Xc=0;function Db(e,n){return e.stylesheets&&e.count===0&&bo(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var i=setTimeout(function(){if(e.stylesheets&&bo(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Xc===0&&(Xc=62500*pb());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bo(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Xc?50:800)+n);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(c)}}:null}function xo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var go=null;function bo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,go=new Map,n.forEach(Ob,e),go=null,xo.call(e))}function Ob(e,n){if(!(n.state.loading&4)){var l=go.get(e);if(l)var i=l.get(null);else{l=new Map,go.set(e,l);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var p=c[d];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(l.set(p.dataset.precedence,p),i=p)}i&&l.set(null,i)}c=n.instance,p=c.getAttribute("data-precedence"),d=l.get(p)||i,d===i&&l.set(null,c),l.set(p,c),this.count++,i=xo.bind(this),c.addEventListener("load",i),c.addEventListener("error",i),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ji={$$typeof:O,Provider:null,Consumer:null,_currentValue:x,_currentValue2:x,_threadCount:0};function Ab(e,n,l,i,c,d,p,b,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=i,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function wf(e,n,l,i,c,d,p,b,C,Q,I,ie){return e=new Ab(e,n,l,p,C,Q,I,ie,b),n=1,d===!0&&(n|=24),d=ba(3,null,null,n),e.current=d,d.stateNode=e,n=Sr(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:i,isDehydrated:l,cache:n},Tr(d),e}function Nf(e){return e?(e=Rl,e):Rl}function _f(e,n,l,i,c,d){c=Nf(c),i.context===null?i.context=c:i.pendingContext=c,i=Sn(n),i.payload={element:l},d=d===void 0?null:d,d!==null&&(i.callback=d),l=kn(e,i,n),l!==null&&(ca(l,e,n),Ci(l,e,n))}function Sf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<n?l:n}}function Zc(e,n){Sf(e,n),(e=e.alternate)&&Sf(e,n)}function kf(e){if(e.tag===13||e.tag===31){var n=nl(e,67108864);n!==null&&ca(n,e,67108864),Zc(e,67108864)}}function Cf(e){if(e.tag===13||e.tag===31){var n=Na();n=xe(n);var l=nl(e,n);l!==null&&ca(l,e,n),Zc(e,n)}}var yo=!0;function Ub(e,n,l,i){var c=A.T;A.T=null;var d=F.p;try{F.p=2,Kc(e,n,l,i)}finally{F.p=d,A.T=c}}function Rb(e,n,l,i){var c=A.T;A.T=null;var d=F.p;try{F.p=8,Kc(e,n,l,i)}finally{F.p=d,A.T=c}}function Kc(e,n,l,i){if(yo){var c=Jc(i);if(c===null)Ac(e,n,i,vo,l),Tf(e,i);else if(Lb(c,e,n,l,i))i.stopPropagation();else if(Tf(e,i),n&4&&-1<Hb.indexOf(e)){for(;c!==null;){var d=Sl(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var p=ea(d.pendingLanes);if(p!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;p;){var C=1<<31-rt(p);b.entanglements[1]|=C,p&=~C}Za(d),(at&6)===0&&(to=ye()+500,$i(0))}}break;case 31:case 13:b=nl(d,2),b!==null&&ca(b,d,2),no(),Zc(d,2)}if(d=Jc(i),d===null&&Ac(e,n,i,vo,l),d===c)break;c=d}c!==null&&i.stopPropagation()}else Ac(e,n,i,null,l)}}function Jc(e){return e=Wo(e),Fc(e)}var vo=null;function Fc(e){if(vo=null,e=_l(e),e!==null){var n=g(e);if(n===null)e=null;else{var l=n.tag;if(l===13){if(e=h(n),e!==null)return e;e=null}else if(l===31){if(e=v(n),e!==null)return e;e=null}else if(l===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return vo=e,null}function zf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qe()){case ve:return 2;case ot:return 8;case Y:case Ne:return 32;case we:return 268435456;default:return 32}default:return 32}}var Wc=!1,Hn=null,Ln=null,qn=null,Fi=new Map,Wi=new Map,Bn=[],Hb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tf(e,n){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Fi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(n.pointerId)}}function Pi(e,n,l,i,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:l,eventSystemFlags:i,nativeEvent:d,targetContainers:[c]},n!==null&&(n=Sl(n),n!==null&&kf(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Lb(e,n,l,i,c){switch(n){case"focusin":return Hn=Pi(Hn,e,n,l,i,c),!0;case"dragenter":return Ln=Pi(Ln,e,n,l,i,c),!0;case"mouseover":return qn=Pi(qn,e,n,l,i,c),!0;case"pointerover":var d=c.pointerId;return Fi.set(d,Pi(Fi.get(d)||null,e,n,l,i,c)),!0;case"gotpointercapture":return d=c.pointerId,Wi.set(d,Pi(Wi.get(d)||null,e,n,l,i,c)),!0}return!1}function Ef(e){var n=_l(e.target);if(n!==null){var l=g(n);if(l!==null){if(n=l.tag,n===13){if(n=h(l),n!==null){e.blockedOn=n,Dt(e.priority,function(){Cf(l)});return}}else if(n===31){if(n=v(l),n!==null){e.blockedOn=n,Dt(e.priority,function(){Cf(l)});return}}else if(n===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var l=Jc(e.nativeEvent);if(l===null){l=e.nativeEvent;var i=new l.constructor(l.type,l);Fo=i,l.target.dispatchEvent(i),Fo=null}else return n=Sl(l),n!==null&&kf(n),e.blockedOn=l,!1;n.shift()}return!0}function Mf(e,n,l){jo(e)&&l.delete(n)}function qb(){Wc=!1,Hn!==null&&jo(Hn)&&(Hn=null),Ln!==null&&jo(Ln)&&(Ln=null),qn!==null&&jo(qn)&&(qn=null),Fi.forEach(Mf),Wi.forEach(Mf)}function wo(e,n){e.blockedOn===n&&(e.blockedOn=null,Wc||(Wc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,qb)))}var No=null;function Df(e){No!==e&&(No=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){No===e&&(No=null);for(var n=0;n<e.length;n+=3){var l=e[n],i=e[n+1],c=e[n+2];if(typeof i!="function"){if(Fc(i||l)===null)continue;break}var d=Sl(l);d!==null&&(e.splice(n,3),n-=3,Jr(d,{pending:!0,data:c,method:l.method,action:i},i,c))}}))}function si(e){function n(C){return wo(C,e)}Hn!==null&&wo(Hn,e),Ln!==null&&wo(Ln,e),qn!==null&&wo(qn,e),Fi.forEach(n),Wi.forEach(n);for(var l=0;l<Bn.length;l++){var i=Bn[l];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Bn.length&&(l=Bn[0],l.blockedOn===null);)Ef(l),l.blockedOn===null&&Bn.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(i=0;i<l.length;i+=3){var c=l[i],d=l[i+1],p=c[na]||null;if(typeof d=="function")p||Df(l);else if(p){var b=null;if(d&&d.hasAttribute("formAction")){if(c=d,p=d[na]||null)b=p.formAction;else if(Fc(c)!==null)continue}else b=p.action;typeof b=="function"?l[i+1]=b:(l.splice(i,3),i-=3),Df(l)}}}function Of(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(p){return c=p})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),i||setTimeout(l,20)}function l(){if(!i&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(l,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Pc(e){this._internalRoot=e}_o.prototype.render=Pc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var l=n.current,i=Na();_f(l,i,e,n,null,null)},_o.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_f(e.current,2,null,e,null,null),no(),n[Nl]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ae();e={blockedOn:null,target:e,priority:n};for(var l=0;l<Bn.length&&n!==0&&n<Bn[l].priority;l++);Bn.splice(l,0,e),l===0&&Ef(e)}};var Af=s.version;if(Af!=="19.2.6")throw Error(u(527,Af,"19.2.6"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=w(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Bb={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Qe=So.inject(Bb),Ye=So}catch{}}return es.createRoot=function(e,n){if(!m(e))throw Error(u(299));var l=!1,i="",c=Bp,d=Gp,p=Yp;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=wf(e,1,!1,null,null,l,i,null,c,d,p,Of),e[Nl]=n.current,Oc(e),new Pc(n)},es.hydrateRoot=function(e,n,l){if(!m(e))throw Error(u(299));var i=!1,c="",d=Bp,p=Gp,b=Yp,C=null;return l!=null&&(l.unstable_strictMode===!0&&(i=!0),l.identifierPrefix!==void 0&&(c=l.identifierPrefix),l.onUncaughtError!==void 0&&(d=l.onUncaughtError),l.onCaughtError!==void 0&&(p=l.onCaughtError),l.onRecoverableError!==void 0&&(b=l.onRecoverableError),l.formState!==void 0&&(C=l.formState)),n=wf(e,1,!0,n,l??null,i,c,C,d,p,b,Of),n.context=Nf(null),l=n.current,i=Na(),i=xe(i),c=Sn(i),c.callback=null,kn(l,c,i),l=i,n.current.lanes=l,We(n,l),Za(n),e[Nl]=n.current,Oc(e),new _o(n)},es.version="19.2.6",es}var Vf;function Ib(){if(Vf)return td.exports;Vf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),td.exports=Pb(),td.exports}var ey=Ib();Zh();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(o[u]=r[u])}return o},ss.apply(this,arguments)}var Xn;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(Xn||(Xn={}));const Qf="popstate";function ty(o){o===void 0&&(o={});function s(m,g){let{pathname:h="/",search:v="",hash:S=""}=vl(m.location.hash.substr(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),wd("",{pathname:h,search:v,hash:S},g.state&&g.state.usr||null,g.state&&g.state.key||"default")}function r(m,g){let h=m.document.querySelector("base"),v="";if(h&&h.getAttribute("href")){let S=m.location.href,w=S.indexOf("#");v=w===-1?S:S.slice(0,w)}return v+"#"+(typeof g=="string"?g:Ho(g))}function u(m,g){Go(m.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(g)+")")}return ny(s,r,u,o)}function zt(o,s){if(o===!1||o===null||typeof o>"u")throw new Error(s)}function Go(o,s){if(!o){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function ay(){return Math.random().toString(36).substr(2,8)}function Xf(o,s){return{usr:o.state,key:o.key,idx:s}}function wd(o,s,r,u){return r===void 0&&(r=null),ss({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof s=="string"?vl(s):s,{state:r,key:s&&s.key||u||ay()})}function Ho(o){let{pathname:s="/",search:r="",hash:u=""}=o;return r&&r!=="?"&&(s+=r.charAt(0)==="?"?r:"?"+r),u&&u!=="#"&&(s+=u.charAt(0)==="#"?u:"#"+u),s}function vl(o){let s={};if(o){let r=o.indexOf("#");r>=0&&(s.hash=o.substr(r),o=o.substr(0,r));let u=o.indexOf("?");u>=0&&(s.search=o.substr(u),o=o.substr(0,u)),o&&(s.pathname=o)}return s}function ny(o,s,r,u){u===void 0&&(u={});let{window:m=document.defaultView,v5Compat:g=!1}=u,h=m.history,v=Xn.Pop,S=null,w=y();w==null&&(w=0,h.replaceState(ss({},h.state,{idx:w}),""));function y(){return(h.state||{idx:null}).idx}function j(){v=Xn.Pop;let z=y(),G=z==null?null:z-w;w=z,S&&S({action:v,location:K.location,delta:G})}function B(z,G){v=Xn.Push;let U=wd(K.location,z,G);r&&r(U,z),w=y()+1;let O=Xf(U,w),ee=K.createHref(U);try{h.pushState(O,"",ee)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;m.location.assign(ee)}g&&S&&S({action:v,location:K.location,delta:1})}function X(z,G){v=Xn.Replace;let U=wd(K.location,z,G);r&&r(U,z),w=y();let O=Xf(U,w),ee=K.createHref(U);h.replaceState(O,"",ee),g&&S&&S({action:v,location:K.location,delta:0})}function te(z){let G=m.location.origin!=="null"?m.location.origin:m.location.href,U=typeof z=="string"?z:Ho(z);return U=U.replace(/ $/,"%20"),zt(G,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,G)}let K={get action(){return v},get location(){return o(m,h)},listen(z){if(S)throw new Error("A history only accepts one active listener");return m.addEventListener(Qf,j),S=z,()=>{m.removeEventListener(Qf,j),S=null}},createHref(z){return s(m,z)},createURL:te,encodeLocation(z){let G=te(z);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:B,replace:X,go(z){return h.go(z)}};return K}var Zf;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Zf||(Zf={}));function ly(o,s,r){return r===void 0&&(r="/"),iy(o,s,r)}function iy(o,s,r,u){let m=typeof s=="string"?vl(s):s,g=Ad(m.pathname||"/",r);if(g==null)return null;let h=Kh(o);sy(h);let v=null;for(let S=0;v==null&&S<h.length;++S){let w=by(g);v=hy(h[S],w)}return v}function Kh(o,s,r,u){s===void 0&&(s=[]),r===void 0&&(r=[]),u===void 0&&(u="");let m=(g,h,v)=>{let S={relativePath:v===void 0?g.path||"":v,caseSensitive:g.caseSensitive===!0,childrenIndex:h,route:g};S.relativePath.startsWith("/")&&(zt(S.relativePath.startsWith(u),'Absolute route path "'+S.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),S.relativePath=S.relativePath.slice(u.length));let w=Zn([u,S.relativePath]),y=r.concat(S);g.children&&g.children.length>0&&(zt(g.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+w+'".')),Kh(g.children,s,y,w)),!(g.path==null&&!g.index)&&s.push({path:w,score:my(w,g.index),routesMeta:y})};return o.forEach((g,h)=>{var v;if(g.path===""||!((v=g.path)!=null&&v.includes("?")))m(g,h);else for(let S of Jh(g.path))m(g,h,S)}),s}function Jh(o){let s=o.split("/");if(s.length===0)return[];let[r,...u]=s,m=r.endsWith("?"),g=r.replace(/\?$/,"");if(u.length===0)return m?[g,""]:[g];let h=Jh(u.join("/")),v=[];return v.push(...h.map(S=>S===""?g:[g,S].join("/"))),m&&v.push(...h),v.map(S=>o.startsWith("/")&&S===""?"/":S)}function sy(o){o.sort((s,r)=>s.score!==r.score?r.score-s.score:fy(s.routesMeta.map(u=>u.childrenIndex),r.routesMeta.map(u=>u.childrenIndex)))}const oy=/^:[\w-]+$/,ry=3,cy=2,dy=1,uy=10,py=-2,Kf=o=>o==="*";function my(o,s){let r=o.split("/"),u=r.length;return r.some(Kf)&&(u+=py),s&&(u+=cy),r.filter(m=>!Kf(m)).reduce((m,g)=>m+(oy.test(g)?ry:g===""?dy:uy),u)}function fy(o,s){return o.length===s.length&&o.slice(0,-1).every((u,m)=>u===s[m])?o[o.length-1]-s[s.length-1]:0}function hy(o,s,r){let{routesMeta:u}=o,m={},g="/",h=[];for(let v=0;v<u.length;++v){let S=u[v],w=v===u.length-1,y=g==="/"?s:s.slice(g.length)||"/",j=xy({path:S.relativePath,caseSensitive:S.caseSensitive,end:w},y),B=S.route;if(!j)return null;Object.assign(m,j.params),h.push({params:m,pathname:Zn([g,j.pathname]),pathnameBase:Ny(Zn([g,j.pathnameBase])),route:B}),j.pathnameBase!=="/"&&(g=Zn([g,j.pathnameBase]))}return h}function xy(o,s){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[r,u]=gy(o.path,o.caseSensitive,o.end),m=s.match(r);if(!m)return null;let g=m[0],h=g.replace(/(.)\/+$/,"$1"),v=m.slice(1);return{params:u.reduce((w,y,j)=>{let{paramName:B,isOptional:X}=y;if(B==="*"){let K=v[j]||"";h=g.slice(0,g.length-K.length).replace(/(.)\/+$/,"$1")}const te=v[j];return X&&!te?w[B]=void 0:w[B]=(te||"").replace(/%2F/g,"/"),w},{}),pathname:g,pathnameBase:h,pattern:o}}function gy(o,s,r){s===void 0&&(s=!1),r===void 0&&(r=!0),Go(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let u=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,v,S)=>(u.push({paramName:v,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(u.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,s?void 0:"i"),u]}function by(o){try{return o.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Go(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),o}}function Ad(o,s){if(s==="/")return o;if(!o.toLowerCase().startsWith(s.toLowerCase()))return null;let r=s.endsWith("/")?s.length-1:s.length,u=o.charAt(r);return u&&u!=="/"?null:o.slice(r)||"/"}const yy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vy=o=>yy.test(o);function jy(o,s){s===void 0&&(s="/");let{pathname:r,search:u="",hash:m=""}=typeof o=="string"?vl(o):o,g;if(r)if(vy(r))g=r;else{if(r.includes("//")){let h=r;r=r.replace(/\/\/+/g,"/"),Go(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+r))}r.startsWith("/")?g=Jf(r.substring(1),"/"):g=Jf(r,s)}else g=s;return{pathname:g,search:_y(u),hash:Sy(m)}}function Jf(o,s){let r=s.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?r.length>1&&r.pop():m!=="."&&r.push(m)}),r.length>1?r.join("/"):"/"}function id(o,s,r,u){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wy(o){return o.filter((s,r)=>r===0||s.route.path&&s.route.path.length>0)}function Ud(o,s){let r=wy(o);return s?r.map((u,m)=>m===r.length-1?u.pathname:u.pathnameBase):r.map(u=>u.pathnameBase)}function Rd(o,s,r,u){u===void 0&&(u=!1);let m;typeof o=="string"?m=vl(o):(m=ss({},o),zt(!m.pathname||!m.pathname.includes("?"),id("?","pathname","search",m)),zt(!m.pathname||!m.pathname.includes("#"),id("#","pathname","hash",m)),zt(!m.search||!m.search.includes("#"),id("#","search","hash",m)));let g=o===""||m.pathname==="",h=g?"/":m.pathname,v;if(h==null)v=r;else{let j=s.length-1;if(!u&&h.startsWith("..")){let B=h.split("/");for(;B[0]==="..";)B.shift(),j-=1;m.pathname=B.join("/")}v=j>=0?s[j]:"/"}let S=jy(m,v),w=h&&h!=="/"&&h.endsWith("/"),y=(g||h===".")&&r.endsWith("/");return!S.pathname.endsWith("/")&&(w||y)&&(S.pathname+="/"),S}const Zn=o=>o.join("/").replace(/\/\/+/g,"/"),Ny=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),_y=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Sy=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function ky(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const Fh=["post","put","patch","delete"];new Set(Fh);const Cy=["get",...Fh];new Set(Cy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(o[u]=r[u])}return o},os.apply(this,arguments)}const Hd=f.createContext(null),zy=f.createContext(null),Jn=f.createContext(null),Yo=f.createContext(null),Fn=f.createContext({outlet:null,matches:[],isDataRoute:!1}),Wh=f.createContext(null);function Ty(o,s){let{relative:r}=s===void 0?{}:s;ci()||zt(!1);let{basename:u,navigator:m}=f.useContext(Jn),{hash:g,pathname:h,search:v}=Ih(o,{relative:r}),S=h;return u!=="/"&&(S=h==="/"?u:Zn([u,h])),m.createHref({pathname:S,search:v,hash:g})}function ci(){return f.useContext(Yo)!=null}function Ja(){return ci()||zt(!1),f.useContext(Yo).location}function Ph(o){f.useContext(Jn).static||f.useLayoutEffect(o)}function Ld(){let{isDataRoute:o}=f.useContext(Fn);return o?Yy():Ey()}function Ey(){ci()||zt(!1);let o=f.useContext(Hd),{basename:s,future:r,navigator:u}=f.useContext(Jn),{matches:m}=f.useContext(Fn),{pathname:g}=Ja(),h=JSON.stringify(Ud(m,r.v7_relativeSplatPath)),v=f.useRef(!1);return Ph(()=>{v.current=!0}),f.useCallback(function(w,y){if(y===void 0&&(y={}),!v.current)return;if(typeof w=="number"){u.go(w);return}let j=Rd(w,JSON.parse(h),g,y.relative==="path");o==null&&s!=="/"&&(j.pathname=j.pathname==="/"?s:Zn([s,j.pathname])),(y.replace?u.replace:u.push)(j,y.state,y)},[s,u,h,g,o])}function Ih(o,s){let{relative:r}=s===void 0?{}:s,{future:u}=f.useContext(Jn),{matches:m}=f.useContext(Fn),{pathname:g}=Ja(),h=JSON.stringify(Ud(m,u.v7_relativeSplatPath));return f.useMemo(()=>Rd(o,JSON.parse(h),g,r==="path"),[o,h,g,r])}function My(o,s){return Dy(o,s)}function Dy(o,s,r,u){ci()||zt(!1);let{navigator:m}=f.useContext(Jn),{matches:g}=f.useContext(Fn),h=g[g.length-1],v=h?h.params:{};h&&h.pathname;let S=h?h.pathnameBase:"/";h&&h.route;let w=Ja(),y;if(s){var j;let z=typeof s=="string"?vl(s):s;S==="/"||(j=z.pathname)!=null&&j.startsWith(S)||zt(!1),y=z}else y=w;let B=y.pathname||"/",X=B;if(S!=="/"){let z=S.replace(/^\//,"").split("/");X="/"+B.replace(/^\//,"").split("/").slice(z.length).join("/")}let te=ly(o,{pathname:X}),K=Hy(te&&te.map(z=>Object.assign({},z,{params:Object.assign({},v,z.params),pathname:Zn([S,m.encodeLocation?m.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?S:Zn([S,m.encodeLocation?m.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),g,r,u);return s&&K?f.createElement(Yo.Provider,{value:{location:os({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Xn.Pop}},K):K}function Oy(){let o=Gy(),s=ky(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),r=o instanceof Error?o.stack:null,m={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},s),r?f.createElement("pre",{style:m},r):null,null)}const Ay=f.createElement(Oy,null);class Uy extends f.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,r){return r.location!==s.location||r.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:r.error,location:r.location,revalidation:s.revalidation||r.revalidation}}componentDidCatch(s,r){console.error("React Router caught the following error during render",s,r)}render(){return this.state.error!==void 0?f.createElement(Fn.Provider,{value:this.props.routeContext},f.createElement(Wh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ry(o){let{routeContext:s,match:r,children:u}=o,m=f.useContext(Hd);return m&&m.static&&m.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=r.route.id),f.createElement(Fn.Provider,{value:s},u)}function Hy(o,s,r,u){var m;if(s===void 0&&(s=[]),r===void 0&&(r=null),u===void 0&&(u=null),o==null){var g;if(!r)return null;if(r.errors)o=r.matches;else if((g=u)!=null&&g.v7_partialHydration&&s.length===0&&!r.initialized&&r.matches.length>0)o=r.matches;else return null}let h=o,v=(m=r)==null?void 0:m.errors;if(v!=null){let y=h.findIndex(j=>j.route.id&&(v==null?void 0:v[j.route.id])!==void 0);y>=0||zt(!1),h=h.slice(0,Math.min(h.length,y+1))}let S=!1,w=-1;if(r&&u&&u.v7_partialHydration)for(let y=0;y<h.length;y++){let j=h[y];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(w=y),j.route.id){let{loaderData:B,errors:X}=r,te=j.route.loader&&B[j.route.id]===void 0&&(!X||X[j.route.id]===void 0);if(j.route.lazy||te){S=!0,w>=0?h=h.slice(0,w+1):h=[h[0]];break}}}return h.reduceRight((y,j,B)=>{let X,te=!1,K=null,z=null;r&&(X=v&&j.route.id?v[j.route.id]:void 0,K=j.route.errorElement||Ay,S&&(w<0&&B===0?($y("route-fallback"),te=!0,z=null):w===B&&(te=!0,z=j.route.hydrateFallbackElement||null)));let G=s.concat(h.slice(0,B+1)),U=()=>{let O;return X?O=K:te?O=z:j.route.Component?O=f.createElement(j.route.Component,null):j.route.element?O=j.route.element:O=y,f.createElement(Ry,{match:j,routeContext:{outlet:y,matches:G,isDataRoute:r!=null},children:O})};return r&&(j.route.ErrorBoundary||j.route.errorElement||B===0)?f.createElement(Uy,{location:r.location,revalidation:r.revalidation,component:K,error:X,children:U(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):U()},null)}var ex=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(ex||{}),tx=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(tx||{});function Ly(o){let s=f.useContext(Hd);return s||zt(!1),s}function qy(o){let s=f.useContext(zy);return s||zt(!1),s}function By(o){let s=f.useContext(Fn);return s||zt(!1),s}function ax(o){let s=By(),r=s.matches[s.matches.length-1];return r.route.id||zt(!1),r.route.id}function Gy(){var o;let s=f.useContext(Wh),r=qy(),u=ax();return s!==void 0?s:(o=r.errors)==null?void 0:o[u]}function Yy(){let{router:o}=Ly(ex.UseNavigateStable),s=ax(tx.UseNavigateStable),r=f.useRef(!1);return Ph(()=>{r.current=!0}),f.useCallback(function(m,g){g===void 0&&(g={}),r.current&&(typeof m=="number"?o.navigate(m):o.navigate(m,os({fromRouteId:s},g)))},[o,s])}const Ff={};function $y(o,s,r){Ff[o]||(Ff[o]=!0)}function Vy(o,s){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function Wf(o){let{to:s,replace:r,state:u,relative:m}=o;ci()||zt(!1);let{future:g,static:h}=f.useContext(Jn),{matches:v}=f.useContext(Fn),{pathname:S}=Ja(),w=Ld(),y=Rd(s,Ud(v,g.v7_relativeSplatPath),S,m==="path"),j=JSON.stringify(y);return f.useEffect(()=>w(JSON.parse(j),{replace:r,state:u,relative:m}),[w,j,m,r,u]),null}function jt(o){zt(!1)}function Qy(o){let{basename:s="/",children:r=null,location:u,navigationType:m=Xn.Pop,navigator:g,static:h=!1,future:v}=o;ci()&&zt(!1);let S=s.replace(/^\/*/,"/"),w=f.useMemo(()=>({basename:S,navigator:g,static:h,future:os({v7_relativeSplatPath:!1},v)}),[S,v,g,h]);typeof u=="string"&&(u=vl(u));let{pathname:y="/",search:j="",hash:B="",state:X=null,key:te="default"}=u,K=f.useMemo(()=>{let z=Ad(y,S);return z==null?null:{location:{pathname:z,search:j,hash:B,state:X,key:te},navigationType:m}},[S,y,j,B,X,te,m]);return K==null?null:f.createElement(Jn.Provider,{value:w},f.createElement(Yo.Provider,{children:r,value:K}))}function Xy(o){let{children:s,location:r}=o;return My(Nd(s),r)}new Promise(()=>{});function Nd(o,s){s===void 0&&(s=[]);let r=[];return f.Children.forEach(o,(u,m)=>{if(!f.isValidElement(u))return;let g=[...s,m];if(u.type===f.Fragment){r.push.apply(r,Nd(u.props.children,g));return}u.type!==jt&&zt(!1),!u.props.index||!u.props.children||zt(!1);let h={id:u.props.id||g.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=Nd(u.props.children,g)),r.push(h)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _d(){return _d=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(o[u]=r[u])}return o},_d.apply(this,arguments)}function Zy(o,s){if(o==null)return{};var r={},u=Object.keys(o),m,g;for(g=0;g<u.length;g++)m=u[g],!(s.indexOf(m)>=0)&&(r[m]=o[m]);return r}function Ky(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Jy(o,s){return o.button===0&&(!s||s==="_self")&&!Ky(o)}const Fy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Wy="6";try{window.__reactRouterVersion=Wy}catch{}const Py="startTransition",Pf=Kb[Py];function Iy(o){let{basename:s,children:r,future:u,window:m}=o,g=f.useRef();g.current==null&&(g.current=ty({window:m,v5Compat:!0}));let h=g.current,[v,S]=f.useState({action:h.action,location:h.location}),{v7_startTransition:w}=u||{},y=f.useCallback(j=>{w&&Pf?Pf(()=>S(j)):S(j)},[S,w]);return f.useLayoutEffect(()=>h.listen(y),[h,y]),f.useEffect(()=>Vy(u),[u]),f.createElement(Qy,{basename:s,children:r,location:v.location,navigationType:v.action,navigator:h,future:u})}const ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,av=f.forwardRef(function(s,r){let{onClick:u,relative:m,reloadDocument:g,replace:h,state:v,target:S,to:w,preventScrollReset:y,viewTransition:j}=s,B=Zy(s,Fy),{basename:X}=f.useContext(Jn),te,K=!1;if(typeof w=="string"&&tv.test(w)&&(te=w,ev))try{let O=new URL(window.location.href),ee=w.startsWith("//")?new URL(O.protocol+w):new URL(w),se=Ad(ee.pathname,X);ee.origin===O.origin&&se!=null?w=se+ee.search+ee.hash:K=!0}catch{}let z=Ty(w,{relative:m}),G=nv(w,{replace:h,state:v,target:S,preventScrollReset:y,relative:m,viewTransition:j});function U(O){u&&u(O),O.defaultPrevented||G(O)}return f.createElement("a",_d({},B,{href:te||z,onClick:K||g?u:U,ref:r,target:S}))});var If;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(If||(If={}));var eh;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(eh||(eh={}));function nv(o,s){let{target:r,replace:u,state:m,preventScrollReset:g,relative:h,viewTransition:v}=s===void 0?{}:s,S=Ld(),w=Ja(),y=Ih(o,{relative:h});return f.useCallback(j=>{if(Jy(j,r)){j.preventDefault();let B=u!==void 0?u:Ho(w)===Ho(y);S(o,{replace:B,state:m,preventScrollReset:g,relative:h,viewTransition:v})}},[w,S,y,u,m,r,o,g,h,v])}function Tt(){const o=Ld();return f.useMemo(()=>({push:s=>o(s),replace:s=>o(s,{replace:!0}),back:()=>o(-1),prefetch:()=>{}}),[o])}function lv(){return Ja().pathname}function iv({href:o,...s}){return a.jsx(av,{to:o,...s})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nx=(...o)=>o.filter((s,r,u)=>!!s&&s.trim()!==""&&u.indexOf(s)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ov={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=f.forwardRef(({color:o="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:u,className:m="",children:g,iconNode:h,...v},S)=>f.createElement("svg",{ref:S,...ov,width:s,height:s,stroke:o,strokeWidth:u?Number(r)*24/Number(s):r,className:nx("lucide",m),...v},[...h.map(([w,y])=>f.createElement(w,y)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=(o,s)=>{const r=f.forwardRef(({className:u,...m},g)=>f.createElement(rv,{ref:g,iconNode:s,className:nx(`lucide-${sv(o)}`,u),...m}));return r.displayName=`${o}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=be("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=be("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=be("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=be("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=be("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=be("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=be("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=be("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=be("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=be("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=be("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=be("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=be("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=be("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=be("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=be("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=be("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=be("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=be("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=be("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=be("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=be("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=be("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=be("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=be("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=be("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=be("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=be("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=be("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=be("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=be("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=be("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=be("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=be("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=be("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=be("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=be("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=be("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=be("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=be("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=be("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=be("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=be("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=be("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=be("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=be("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=be("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=be("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=be("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=be("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=be("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=be("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=be("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=be("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=be("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=be("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=be("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=be("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=be("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=be("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=be("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=be("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=be("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=be("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=be("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=be("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=be("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=be("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=be("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=be("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=be("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=be("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=be("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=be("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=be("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Vv="/api/v3";var Xh;const fe=typeof window<"u"&&((Xh=window.settings)==null?void 0:Xh.secure_path)||"ZicFree123",Ro="authorization";function Qv(o){if(typeof window>"u"||typeof document>"u")return null;const s=o+"=",r=document.cookie.split(";");for(let u=0;u<r.length;u++){let m=r[u];for(;m.charAt(0)===" ";)m=m.substring(1,m.length);if(m.indexOf(s)===0)try{const g=m.substring(s.length,m.length),h=decodeURIComponent(g),v=JSON.parse(h);return v&&typeof v=="object"&&"value"in v?v.value:h}catch{try{return decodeURIComponent(m.substring(s.length,m.length))}catch{return m.substring(s.length,m.length)}}}return null}function Xv(o,s,r=36500){if(typeof window>"u"||typeof document>"u")return;const m=JSON.stringify({site:"ZicNet",value:s}),g=window.location.protocol==="https:",h=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",v=new Date;v.setTime(v.getTime()+r*24*60*60*1e3);const S=`expires=${v.toUTCString()}`,w=h?"":`domain=${window.location.hostname};`;let y=`${o}=${encodeURIComponent(m)}; ${S}; ${w} path=/`;g&&(y+="; secure"),y+="; SameSite=Lax",document.cookie=y;try{window.localStorage.setItem(`cookie_${o}`,m)}catch{}}function Zv(o){if(typeof window>"u"||typeof document>"u")return;const s=window.location.hostname,r=["",s,s.startsWith(".")?s:`.${s}`],u=["/","/dashboard","/user","/admin"];r.forEach(m=>{u.forEach(g=>{const h=m?` domain=${m};`:"";document.cookie=`${o}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${h} path=${g};`})});try{window.localStorage.removeItem(`cookie_${o}`),window.localStorage.removeItem(`cookie_${o}_failure`)}catch{}}function rx(){if(typeof window>"u")return null;let o=window.localStorage.getItem(Ro);if(!o&&(o=window.localStorage.getItem("auth_data"),o))try{window.localStorage.setItem(Ro,o)}catch{}if(!o&&(o=Qv("auth_data"),o))try{window.localStorage.setItem(Ro,o),window.localStorage.setItem("auth_data",o)}catch{}return o}function Kv(o,s){const r=o.startsWith("/")?o:`/${o}`,u=new URL(`${Vv}${r}`,window.location.origin);return Object.entries(s??{}).forEach(([m,g])=>{g!==void 0&&u.searchParams.set(m,String(g))}),u.toString()}function Et(){return!!rx()}function Jv(o){typeof window>"u"||(window.localStorage.setItem(Ro,o),window.localStorage.setItem("auth_data",o),Xv("auth_data",o,36500))}function cx(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(m=>{window.localStorage.removeItem(m)}),["token","auth_data","authorization","vuex","user","auth"].forEach(m=>{window.sessionStorage.removeItem(m)});const r=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(m=>{r.forEach(g=>{document.cookie=`${m}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${g};`}),document.cookie=`${m}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Zv(m)})}async function me(o,s={}){const r={},u=s.method??"GET";if(u!=="GET"&&(r["content-type"]="application/json"),s.auth!==!1){const S=rx();S&&(r.authorization=S)}const m=await fetch(Kv(o,s.params),{method:u,headers:r,body:u==="GET"?void 0:JSON.stringify(s.body??{}),cache:"no-store"}),h=(m.headers.get("content-type")||"").includes("application/json"),v=h?await m.json():await m.text();if(!m.ok){const S=typeof v=="object"&&v&&"message"in v?String(v.message):`Request failed with status ${m.status}`,w=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(S);throw(m.status===401||m.status===403&&!w)&&s.auth!==!1&&(cx(),window.location.hash="/login"),new Error(S)}if(!h&&typeof v=="string"&&(v.trim().startsWith("<!DOCTYPE html")||v.trim().startsWith("<html")||v.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return v}async function Fv(o,s){return me("/passport/auth/login",{method:"POST",auth:!1,body:{email:o,password:s}})}async function Wv(){const o=`/${fe}/stat`,[s,r,u,m,g,h]=await Promise.all([me(`${o}/getOverride`),me(`${o}/getOrder`),me(`${o}/getServerTodayRank`),me(`${o}/getServerLastRank`),me(`${o}/getUserTodayRank`),me(`${o}/getUserLastRank`)]);return{override:s.data,order:r.data,serverToday:u.data,serverYesterday:m.data,userToday:g.data,userYesterday:h.data}}async function dx(){return(await me(`/${fe}/config/fetch`)).data}async function ux(o){return me(`/${fe}/config/save`,{method:"POST",body:o})}async function Pv(){return(await me(`/${fe}/config/getEmailTemplate`)).data}async function Iv(){return(await me(`/${fe}/plan/fetch`)).data.map(s=>({id:s.id,name:s.name}))}async function e1(){return me(`/${fe}/config/testSendMail`,{method:"POST",body:{}})}async function t1(o){return me(`/${fe}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:o}})}async function a1(){return(await me(`/${fe}/payment/fetch`)).data}async function n1(){return(await me(`/${fe}/payment/getPaymentMethods`)).data}async function uh(o,s){return(await me(`/${fe}/payment/getPaymentForm`,{method:"POST",body:{payment:o,id:s}})).data}async function l1(o){return me(`/${fe}/payment/save`,{method:"POST",body:o})}async function i1(o){return me(`/${fe}/payment/show`,{method:"POST",body:{id:o}})}async function s1(o){return me(`/${fe}/payment/drop`,{method:"POST",body:{id:o}})}async function o1(o){return me(`/${fe}/payment/sort`,{method:"POST",body:{ids:o}})}async function r1(){return(await me(`/${fe}/theme/getThemes`)).data}async function c1(o){return(await me(`/${fe}/theme/getThemeConfig`,{method:"POST",body:{name:o}})).data}async function d1(o,s){const r=window.btoa(unescape(encodeURIComponent(JSON.stringify(s))));return me(`/${fe}/theme/saveThemeConfig`,{method:"POST",body:{name:o,config:r}})}async function us(){return(await me(`/${fe}/server/group/fetch`)).data}async function px(o){return me(`/${fe}/server/group/save`,{method:"POST",body:o})}async function u1(o){return me(`/${fe}/server/group/drop`,{method:"POST",body:{id:o}})}const mx=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function fx(){return(await me(`/${fe}/server/route/fetch`)).data}async function p1(o){return me(`/${fe}/server/route/save`,{method:"POST",body:o})}async function m1(o){return me(`/${fe}/server/route/drop`,{method:"POST",body:{id:o}})}async function jl(){return(await me(`/${fe}/plan/fetch`)).data}async function f1(o){return me(`/${fe}/plan/save`,{method:"POST",body:o})}async function h1(o){return me(`/${fe}/plan/drop`,{method:"POST",body:{id:o}})}async function ph(o,s){return me(`/${fe}/plan/update`,{method:"POST",body:{id:o,...s}})}async function mh(o){return me(`/${fe}/plan/sort`,{method:"POST",body:{plan_ids:o}})}async function x1(o={}){const s=new URLSearchParams;return s.set("current",String(o.current??1)),s.set("pageSize",String(o.pageSize??15)),o.is_commission&&s.set("is_commission","1"),o.filter&&o.filter.forEach((u,m)=>{s.set(`filter[${m}][key]`,u.key),s.set(`filter[${m}][condition]`,u.condition),s.set(`filter[${m}][value]`,u.value)}),await me(`/${fe}/order/fetch?${s.toString()}`)}async function g1(o){return me(`/${fe}/order/paid`,{method:"POST",body:{trade_no:o}})}async function b1(o){return me(`/${fe}/order/cancel`,{method:"POST",body:{trade_no:o}})}async function hx(o){return me(`/${fe}/order/assign`,{method:"POST",body:o})}async function y1(o,s){return me(`/${fe}/order/update`,{method:"POST",body:{trade_no:o,commission_status:s}})}async function v1(o){return me(`/${fe}/order/detail`,{method:"POST",body:{id:o}})}async function xx(o=1,s=15){return me(`/${fe}/coupon/fetch?current=${o}&pageSize=${s}`)}async function j1(o){return me(`/${fe}/coupon/generate`,{method:"POST",body:o})}async function w1(o){return me(`/${fe}/coupon/drop`,{method:"POST",body:{id:o}})}async function N1(o){return me(`/${fe}/coupon/show`,{method:"POST",body:{id:o}})}async function _1(o=1,s=15){return me(`/${fe}/giftcard/fetch?current=${o}&pageSize=${s}`)}async function S1(o){return me(`/${fe}/giftcard/generate`,{method:"POST",body:o})}async function k1(o){return me(`/${fe}/giftcard/drop`,{method:"POST",body:{id:o}})}async function Td(o=1,s=15,r){const u=new URLSearchParams;return u.set("current",String(o)),u.set("pageSize",String(s)),r&&r.forEach((m,g)=>{u.set(`filter[${g}][key]`,m.key),u.set(`filter[${g}][condition]`,m.condition),u.set(`filter[${g}][value]`,m.value)}),me(`/${fe}/user/fetch?${u.toString()}`)}async function C1(o){return me(`/${fe}/user/update`,{method:"POST",body:o})}async function gx(o){return me(`/${fe}/user/getUserInfoById`,{params:{id:o}})}async function z1(o){return me(`/${fe}/user/delUser`,{method:"POST",body:{id:o}})}async function T1(o){return me(`/${fe}/user/generate`,{method:"POST",body:o})}async function E1(o){return me(`/${fe}/user/resetSecret`,{method:"POST",body:{id:o}})}async function M1(o=1,s=15,r,u=!1){const m=new URLSearchParams;return m.set("current",String(o)),m.set("pageSize",String(s)),u&&m.set("include_subscribe_url","1"),r==null||r.forEach((g,h)=>{m.set(`filter[${h}][key]`,g.key),m.set(`filter[${h}][condition]`,g.condition),m.set(`filter[${h}][value]`,g.value)}),me(`/${fe}/subscription/fetch?${m.toString()}`)}async function D1(o){return me(`/${fe}/subscription/subscribeUrl`,{method:"POST",body:{id:o}})}async function O1(o){return me(`/${fe}/subscription/update`,{method:"POST",body:o})}async function A1(o){return me(`/${fe}/subscription/resetSecret`,{method:"POST",body:{id:o}})}async function bx(o=1,s=15,r){const u=new URLSearchParams;return u.set("current",String(o)),u.set("pageSize",String(s)),r==null||r.forEach((m,g)=>{u.set(`filter[${g}][key]`,m.key),u.set(`filter[${g}][condition]`,m.condition),u.set(`filter[${g}][value]`,m.value)}),me(`/${fe}/device/fetch?${u.toString()}`)}async function yx(o){return me(`/${fe}/device/drop`,{method:"POST",body:{id:o}})}async function vx(o){return me(`/${fe}/device/ban`,{method:"POST",body:{id:o}})}async function U1(o){return me(`/${fe}/device/resetUser`,{method:"POST",body:{user_id:o}})}async function R1(o,s=1,r=10){return me(`/${fe}/stat/getStatUser`,{params:{user_id:o,current:s,pageSize:r}})}async function H1(){return(await me(`/${fe}/notice/fetch`)).data}async function L1(o){return me(`/${fe}/notice/save`,{method:"POST",body:o})}async function q1(o){return me(`/${fe}/notice/drop`,{method:"POST",body:{id:o}})}async function B1(o){return me(`/${fe}/notice/show`,{method:"POST",body:{id:o}})}async function G1(){return(await me(`/${fe}/ticket/fetch`)).data}async function fh(o){return(await me(`/${fe}/ticket/fetch`,{params:{id:o}})).data}async function Y1(o,s){return me(`/${fe}/ticket/reply`,{method:"POST",body:{id:o,message:s}})}async function $1(o){return me(`/${fe}/ticket/close`,{method:"POST",body:{id:o}})}async function V1(){return(await me(`/${fe}/knowledge/fetch`)).data}async function Q1(o){return(await me(`/${fe}/knowledge/fetch`,{params:{id:o}})).data}async function X1(o){return me(`/${fe}/knowledge/save`,{method:"POST",body:o})}async function Z1(o){return me(`/${fe}/knowledge/drop`,{method:"POST",body:{id:o}})}async function K1(o){return me(`/${fe}/knowledge/show`,{method:"POST",body:{id:o}})}async function J1(){return(await me(`/${fe}/webcon/fetch`)).data}async function F1(o){return me(`/${fe}/webcon/save`,{method:"POST",body:o})}async function W1(o){return me(`/${fe}/webcon/drop`,{method:"POST",body:{id:o}})}async function P1(o){return me(`/${fe}/webcon/show`,{method:"POST",body:{id:o}})}async function I1(){return me(`/${fe}/system/getSystemStatus`)}async function e0(){return(await me(`/${fe}/system/getCoreLicenseStatus`)).data}async function t0(){return(await me(`/${fe}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function a0(){return me(`/${fe}/system/getQueueStats`)}async function n0(){return me(`/${fe}/system/getQueueWorkload`)}async function l0(){return me(`/${fe}/system/getSystemLog`)}async function hh(){return me(`/${fe}/server/manage/getNodes`)}async function i0(o,s){return me(`/${fe}/server/${o}/save`,{method:"POST",body:s})}async function s0(o,s){return me(`/${fe}/server/${o}/drop`,{method:"POST",body:{id:s}})}async function o0(o,s,r){return me(`/${fe}/server/${o}/update`,{method:"POST",body:{id:s,show:r}})}async function r0(o,s){return me(`/${fe}/server/${o}/copy`,{method:"POST",body:{id:s}})}async function c0(o){return me(`/${fe}/server/manage/sort`,{method:"POST",body:o})}const Bd=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],jx="admin-locale",Ed="vi-VN",d0="/assets/adminzic",wx=f.createContext(null);function u0(){if(typeof window>"u")return Ed;const o=localStorage.getItem(jx);return o&&Bd.some(s=>s.code===o)?o:Ed}function p0(o,s){return s?Object.entries(s).reduce((r,[u,m])=>r.replaceAll(`{${u}}`,String(m)),o):o}function m0(o){return new Promise((s,r)=>{var h;if(typeof window>"u"){s({});return}const u=(h=window.AdminNextI18n)==null?void 0:h[o];if(u){s(u);return}const m=document.querySelector(`script[data-admin-next-locale="${o}"]`);if(m){m.addEventListener("load",()=>{var v;s(((v=window.AdminNextI18n)==null?void 0:v[o])??{})}),m.addEventListener("error",r);return}const g=document.createElement("script");g.src=`${d0}/i18n/${o}.js`,g.async=!0,g.dataset.adminNextLocale=o,g.onload=()=>{var v;return s(((v=window.AdminNextI18n)==null?void 0:v[o])??{})},g.onerror=r,document.head.appendChild(g)})}function f0({children:o}){const[s,r]=f.useState(Ed),[u,m]=f.useState({}),[g,h]=f.useState(!0);f.useEffect(()=>{r(u0())},[]);const v=f.useCallback(y=>{r(y),typeof window<"u"&&localStorage.setItem(jx,y)},[]);f.useEffect(()=>{let y=!0;return h(!0),m0(s).then(j=>{y&&m(j)}).finally(()=>{y&&h(!1)}),()=>{y=!1}},[s]);const S=f.useCallback((y,j)=>p0(u[y]??y,j),[u]),w=f.useMemo(()=>({locale:s,loading:g,setLocale:v,t:S}),[s,g,v,S]);return a.jsx(wx.Provider,{value:w,children:o})}function Ke(){const o=f.useContext(wx);if(!o)throw new Error("useI18n must be used inside I18nProvider");return o}function h0(){const o=Tt(),{t:s,locale:r,setLocale:u}=Ke(),[m,g]=f.useState(""),[h,v]=f.useState(""),[S,w]=f.useState(""),[y,j]=f.useState(!1),[B,X]=f.useState(!1),te=f.useRef(null);f.useEffect(()=>{function z(G){te.current&&!te.current.contains(G.target)&&X(!1)}return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[]),f.useEffect(()=>{Et()&&o.replace("/dashboard")},[o]);async function K(z){var G,U,O,ee;z.preventDefault(),w(""),j(!0);try{const se=await Fv(m,h),ce=((G=se.data)==null?void 0:G.auth_data)??((U=se.data)==null?void 0:U.token),E=((O=se.data)==null?void 0:O.is_admin)===1||((ee=se.data)==null?void 0:ee.is_admin)===!0;if(!ce||!E)throw new Error(s("login.adminRequired"));Jv(ce),o.replace("/dashboard")}catch(se){w(se instanceof Error?se.message:s("login.failed"))}finally{j(!1)}}return a.jsxs("main",{className:"login-page",children:[a.jsxs("section",{className:"login-visual",children:[a.jsxs("div",{className:"login-brand",children:[a.jsx("span",{className:"brand-mark",children:"Z"}),a.jsx("span",{children:s("app.title")})]}),a.jsxs("div",{className:"login-copy",children:[a.jsx("p",{children:s("login.eyebrow")}),a.jsx("h1",{children:s("login.heading")}),a.jsx("span",{children:s("login.supporting")})]})]}),a.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":s("login.formLabel"),children:[a.jsxs("div",{ref:te,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[a.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.language"),onClick:()=>X(z=>!z),children:a.jsx(ps,{size:17})}),B?a.jsx("div",{className:"locale-menu",children:Bd.map(z=>a.jsxs("button",{className:`locale-option ${r===z.code?"active":""}`,type:"button",onClick:()=>{u(z.code),X(!1)},children:[a.jsx("span",{className:"locale-flag",children:z.flag}),a.jsx("span",{children:z.label})]},z.code))}):null]}),a.jsxs("div",{className:"security-badge",children:[a.jsx(Ov,{size:18}),a.jsx("span",{children:s("login.secureArea")})]}),a.jsxs("div",{className:"login-card-heading",children:[a.jsx("h2",{children:s("login.title")}),a.jsx("p",{children:s("login.subtitle")})]}),a.jsxs("form",{className:"auth-form",onSubmit:K,children:[a.jsxs("label",{children:[a.jsx("span",{children:s("common.email")}),a.jsxs("div",{className:"input-shell",children:[a.jsx(ix,{size:17}),a.jsx("input",{autoComplete:"email",inputMode:"email",onChange:z=>g(z.target.value),placeholder:s("login.emailPlaceholder"),required:!0,type:"email",value:m})]})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("common.password")}),a.jsxs("div",{className:"input-shell",children:[a.jsx(_v,{size:17}),a.jsx("input",{autoComplete:"current-password",onChange:z=>v(z.target.value),placeholder:s("login.passwordPlaceholder"),required:!0,type:"password",value:h})]})]}),S?a.jsx("div",{className:"form-error",children:S}):null,a.jsx("button",{className:"primary-button",disabled:y,type:"submit",children:s(y?"login.signingIn":"login.submit")})]})]})]})}function Sa(o){const s=Number(o??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(s)}function Ka(o){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(o??0))}function x0(o){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(o??0))}const g0=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:bv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Rv},{href:"/config/payment",label:"nav.paymentConfig",icon:xv},{href:"/config/theme",label:"nav.themeConfig",icon:Bv}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:qd},{href:"/server/group",label:"nav.groupManagement",icon:Yv},{href:"/server/route",label:"nav.routeManagement",icon:Uv}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:oh},{href:"/order",label:"nav.orders",icon:Nv},{href:"/coupon",label:"nav.coupons",icon:yv},{href:"/giftcard",label:"nav.giftcards",icon:Lv}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:ox},{href:"/subscription",label:"nav.subscriptions",icon:oh},{href:"/device",label:"nav.devices",icon:Hv},{href:"/webcon",label:"nav.webcon",icon:ps},{href:"/notice",label:"nav.notices",icon:ns},{href:"/ticket",label:"nav.tickets",icon:wv},{href:"/knowledge",label:"nav.knowledge",icon:uv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:pv}]}];function b0(){const[o,s]=f.useState("light");f.useEffect(()=>{const g=localStorage.getItem("admin-theme")??"light";s(g),document.documentElement.setAttribute("data-theme",g)},[]);const r=f.useCallback(m=>{s(m),localStorage.setItem("admin-theme",m),document.documentElement.setAttribute("data-theme",m)},[]),u=f.useCallback(()=>{r(o==="light"?"dark":"light")},[o,r]);return{theme:o,toggle:u}}function Nx(o){return o?new Date(o*1e3):null}function y0(o,s){const r=Nx(s);if(!r)return null;try{return new Intl.DateTimeFormat(o,{year:"numeric",month:"2-digit",day:"2-digit"}).format(r)}catch{return r.toLocaleDateString()}}function v0(o){const s=Nx(o);return s?Math.ceil((s.getTime()-Date.now())/864e5):null}function Gt({children:o,title:s,subtitle:r}){const[u,m]=f.useState(!1),g=Tt(),h=lv(),{t:v,locale:S,setLocale:w}=Ke(),{theme:y,toggle:j}=b0(),[B,X]=f.useState(!1),te=f.useRef(null),[K,z]=f.useState(null),[G,U]=f.useState(!1),O=f.useCallback(async(N=!1)=>{if(Et()){U(N);try{z(N?await t0():await e0())}catch(R){z({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:v("license.unavailable"),error:R instanceof Error?R.message:v("license.unavailable")})}finally{U(!1)}}},[v]);f.useEffect(()=>{function N(R){te.current&&!te.current.contains(R.target)&&X(!1)}return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[]),f.useEffect(()=>{O(!1);const N=window.setInterval(()=>{O(!1)},6e4);return()=>window.clearInterval(N)},[O]);function ee(){cx(),g.replace("/login")}const se=(K==null?void 0:K.license_expires_at)??(K==null?void 0:K.expires_at),ce=y0(S,se),E=typeof(K==null?void 0:K.days_until_expiry)=="number"?K.days_until_expiry:v0(se),$=typeof E=="number"?E<=0?v("license.expiresToday"):v("license.daysLeft",{days:E}):null,le=!!K&&K.available&&!K.requires_renewal,he=le&&!!(K!=null&&K.renewal_warning);return a.jsxs("div",{className:"admin-shell",children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),u&&a.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>m(!1)}),a.jsxs("aside",{className:`sidebar ${u?"sidebar-open":""}`,children:[a.jsxs("div",{className:"brand",children:[a.jsx("span",{className:"brand-mark",children:"Z"}),a.jsx("span",{children:v("app.title")})]}),a.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:g0.map(N=>a.jsxs("div",{className:"nav-group",children:[a.jsx("div",{className:"nav-heading",children:v(N.label)}),N.items.map(R=>{const ae=R.icon,M=h===R.href;return a.jsxs(iv,{className:`nav-item ${M?"active":""}`,href:R.href,onClick:()=>m(!1),children:[a.jsx(ae,{size:17}),a.jsx("span",{children:v(R.label)})]},R.href)})]},N.label))})]}),a.jsxs("div",{className:"shell-main",children:[a.jsxs("header",{className:"topbar",children:[a.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":v(u?"common.closeMenu":"common.openMenu"),onClick:()=>m(N=>!N),children:u?a.jsx(st,{size:19}):a.jsx(kv,{size:19})}),a.jsxs("div",{className:"topbar-title",children:[a.jsx("h1",{children:s}),r?a.jsx("p",{children:r}):null]}),a.jsxs("div",{className:"topbar-actions",children:[le?a.jsxs("button",{className:`license-chip ${he?"warning":""}`,type:"button",disabled:G,title:v("license.refresh"),onClick:()=>void O(!0),children:[a.jsx(nh,{size:16}),a.jsxs("span",{className:"license-chip-copy",children:[a.jsx("span",{children:v("license.validUntil")}),a.jsx("strong",{children:ce??v("license.unknownExpiry")})]}),$?a.jsx("small",{children:$}):null]}):null,a.jsxs("div",{className:"locale-dropdown",ref:te,children:[a.jsx("button",{className:"icon-button",type:"button","aria-label":v("common.language"),onClick:()=>X(N=>!N),children:a.jsx(ps,{size:17})}),B?a.jsx("div",{className:"locale-menu",children:Bd.map(N=>a.jsxs("button",{className:`locale-option ${S===N.code?"active":""}`,type:"button",onClick:()=>{w(N.code),X(!1)},children:[a.jsx("span",{className:"locale-flag",children:N.flag}),a.jsx("span",{children:N.label})]},N.code))}):null]}),a.jsx("button",{className:"icon-button",type:"button","aria-label":y==="dark"?"Switch to light mode":"Switch to dark mode",onClick:j,children:y==="dark"?a.jsx(qv,{size:17}):a.jsx(Cv,{size:17})}),a.jsxs("button",{className:"ghost-button",type:"button",onClick:ee,children:[a.jsx(Sv,{size:16}),a.jsx("span",{children:v("common.logout")})]})]})]}),a.jsxs("main",{className:"content",children:[K!=null&&K.requires_renewal?a.jsxs("section",{className:"license-banner",children:[a.jsxs("div",{className:"license-banner-main",children:[a.jsx(Cd,{size:20}),a.jsxs("div",{children:[a.jsx("strong",{children:v("license.renewTitle")}),a.jsx("p",{children:v("license.renewBody")}),a.jsxs("small",{children:[v("license.currentStatus"),": ",K.status,K.error?` - ${K.error}`:""]})]})]}),a.jsxs("button",{className:"ghost-button",type:"button",disabled:G,onClick:()=>void O(!0),children:[a.jsx(_t,{size:16}),v(G?"license.refreshing":"license.refresh")]})]}):null,he?a.jsxs("section",{className:"license-banner license-banner-warning",children:[a.jsxs("div",{className:"license-banner-main",children:[a.jsx(nh,{size:20}),a.jsxs("div",{children:[a.jsx("strong",{children:v("license.expiryWarningTitle")}),a.jsx("p",{children:v("license.expiryWarningBody",{date:ce??v("license.unknownExpiry"),days:E??""})}),a.jsxs("small",{children:[v("license.currentStatus"),": ",K.status]})]})]}),a.jsxs("button",{className:"ghost-button",type:"button",disabled:G,onClick:()=>void O(!0),children:[a.jsx(_t,{size:16}),v(G?"license.refreshing":"license.refresh")]})]}):null,o]})]})]})}const xh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function _x(o){return{date:o,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function ls(o){return Number(o??0)}function gh(o){return ls(o)/100}function bh(o){return`${Ka(Math.round(o))} VND`}function Sx(o){return`${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`}function j0(o){const s=new Date;return s.setHours(0,0,0,0),Array.from({length:o},(r,u)=>{const m=new Date(s);return m.setDate(s.getDate()-(o-u-1)),Sx(m)})}function yh(o,s){const r=o.get(s);if(r)return r;const u=_x(s);return o.set(s,u),u}function w0(o){const s=o.toLowerCase();return s==="register_count"||s.includes("đăng")||s.includes("register")?"registrations":s==="order_count"?"orderCount":s==="paid_count"||s.includes("giao dịch thu")?"paidCount":s==="paid_total"||s.includes("tiền thu")?"paidAmount":s==="commission_count"||s.includes("giao dịch hoa hồng")?"commissionCount":s==="commission_total"||s.includes("tiền hoa hồng")?"commissionAmount":null}function Co({label:o,value:s,helper:r,tone:u="default",onClick:m}){return a.jsxs("article",{className:`stat-card tone-${u}`,onClick:m,style:m?{cursor:"pointer"}:void 0,children:[a.jsxs("div",{children:[a.jsx("p",{children:o}),a.jsx("strong",{children:s})]}),a.jsx("span",{className:"stat-icon",children:a.jsx(dv,{size:19})}),r?a.jsx("small",{children:r}):null]})}function gt({label:o}){return a.jsxs("div",{className:"loading-state",children:[a.jsx(_t,{size:18}),a.jsx("span",{children:o})]})}function N0(o,s){const r=new Map,u=new Map;if(o.forEach(m=>{const g=yh(r,m.date),h=w0(m.type);if(h){g[h]=Number(m.value||0);return}const v=u.get(m.date)??0,S=xh[v%xh.length];g[S]=Number(m.value||0),u.set(m.date,v+1)}),s){const m=yh(r,Sx(new Date));m.registrations=ls(s.day_register_total),s.day_order_total!==void 0&&(m.orderCount=ls(s.day_order_total)),s.day_paid_order_total!==void 0&&(m.paidCount=ls(s.day_paid_order_total)),m.paidAmount=gh(s.day_paid_income??s.day_income),s.day_commission_payout!==void 0&&(m.commissionAmount=gh(s.day_commission_payout)),s.day_commission_count!==void 0&&(m.commissionCount=ls(s.day_commission_count))}return r.size===0?[]:j0(31).map(m=>r.get(m)??_x(m))}function _0({records:o,override:s}){const{t:r}=Ke(),[u,m]=f.useState("paidAmount"),[g,h]=f.useState(null),[v,S]=f.useState(0),[w,y]=f.useState(0),j=[{key:"paidAmount",label:r("dashboard.chartRevenue"),summaryLabel:r("dashboard.peakRevenue"),color:"#2f8f83",format:bh},{key:"orderCount",label:r("dashboard.chartOrderCount"),summaryLabel:r("dashboard.peakOrderCount"),color:"#2563eb",format:Ka},{key:"paidCount",label:r("dashboard.chartPaidCount"),summaryLabel:r("dashboard.peakPaidCount"),color:"#7c3aed",format:Ka},{key:"commissionAmount",label:r("dashboard.chartCommission"),summaryLabel:r("dashboard.peakCommission"),color:"#c2410c",format:bh},{key:"commissionCount",label:r("dashboard.chartCommissionCount"),summaryLabel:r("dashboard.peakCommissionCount"),color:"#be123c",format:Ka},{key:"registrations",label:r("dashboard.chartRegistrations"),summaryLabel:r("dashboard.peakRegistrations"),color:"#0891b2",format:Ka}],B=j.find($=>$.key===u)??j[0],X=N0(o,s),te=$=>Number($[B.key]||0),K=Math.max(...X.map(te),1),z=720,G=220,U=28,O=X.length>1?(z-U*2)/(X.length-1):0,ee=$=>G-U-$/K*(G-U*2),se=X.map(($,le)=>`${U+le*O},${ee(te($))}`).join(" "),ce=Math.max(Math.ceil(X.length/6),1),E=`dashboardTrendFill-${B.key}`;return a.jsxs("section",{className:"panel chart-panel",children:[a.jsxs("div",{className:"panel-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:r("dashboard.revenueTrend")}),a.jsx("p",{children:r("dashboard.revenueTrendHelp")})]}),a.jsx("span",{children:r("dashboard.lastDays",{count:X.length})})]}),a.jsx("div",{className:"chart-metric-tabs",role:"tablist","aria-label":r("dashboard.chartMetrics"),children:j.map($=>a.jsx("button",{type:"button",className:u===$.key?"active":"",onClick:()=>{m($.key),h(null)},children:$.label},$.key))}),X.length===0?a.jsx("div",{className:"empty-state",children:r("dashboard.noChartData")}):null,a.jsxs("div",{style:{position:"relative",width:"100%"},children:[a.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${z} ${G}`,role:"img",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:E,x1:"0",x2:"0",y1:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:B.color,stopOpacity:"0.24"}),a.jsx("stop",{offset:"100%",stopColor:B.color,stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map($=>a.jsx("line",{className:"chart-grid",x1:U,x2:z-U,y1:U+$*(G-U*2),y2:U+$*(G-U*2)},$)),X.length>0?a.jsxs(a.Fragment,{children:[a.jsx("polygon",{className:"chart-area",style:{fill:`url(#${E})`},points:`${U},${G-U} ${se} ${z-U},${G-U}`}),a.jsx("polyline",{className:"chart-line",points:se,style:{stroke:B.color}}),X.map(($,le)=>{const he=U+le*O,N=ee(te($));return a.jsxs("g",{children:[a.jsx("circle",{cx:he,cy:N,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{h($),S(he),y(N)},onMouseLeave:()=>{h(null)}}),a.jsx("circle",{cx:he,cy:N,r:(g==null?void 0:g.date)===$.date?6:4,fill:B.color,stroke:"var(--surface)",strokeWidth:(g==null?void 0:g.date)===$.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},$.date)})]}):null]}),g?a.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${v/z*100}%`,top:`${w/G*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[a.jsxs("div",{className:"tooltip-date",children:[r("dashboard.date"),": ",g.date]}),a.jsxs("div",{className:"tooltip-value",children:[B.label,": ",B.format(te(g))]})]}):null]}),a.jsx("div",{className:"chart-axis",children:X.filter(($,le)=>le===0||le===X.length-1||le%ce===0).map($=>a.jsx("span",{children:$.date},$.date))}),X.length>0?a.jsxs("div",{className:"chart-summary",children:[a.jsx("span",{children:B.summaryLabel}),a.jsx("strong",{children:B.format(K)})]}):null]})}function zo({title:o,subtitle:s,records:r,labelKey:u}){const{t:m}=Ke(),g=Math.max(...r.map(h=>Number(h.total||0)),1);return a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-heading",children:a.jsxs("div",{children:[a.jsx("h2",{children:o}),a.jsx("p",{children:s})]})}),a.jsx("div",{className:"rank-list",children:r.length===0?a.jsx("div",{className:"empty-state",children:m("dashboard.noTraffic")}):r.slice(0,8).map((h,v)=>{const S=u==="server_name"?h.server_name||m("dashboard.unnamedNode"):h.email||m("dashboard.unknownUser"),w=Number(h.total||0)/g*100;return a.jsxs("div",{className:"rank-row",children:[a.jsxs("div",{className:"rank-meta",children:[a.jsx("span",{children:v+1}),a.jsx("strong",{children:S}),a.jsxs("small",{children:[x0(h.total)," GB"]})]}),a.jsx("div",{className:"rank-bar",children:a.jsx("span",{style:{width:`${Math.max(w,3)}%`}})})]},`${S}-${v}`)})})]})}function od({label:o,current:s,previous:r}){const{t:u}=Ke();return a.jsxs("div",{className:"metric-pair",children:[a.jsx("span",{children:o}),a.jsx("strong",{children:typeof s=="number"?Ka(s):s}),a.jsxs("small",{children:[u("dashboard.previous"),": ",typeof r=="number"?Ka(r):r]})]})}function S0(){var w,y,j,B,X,te,K,z,G,U,O,ee;const o=Tt(),{t:s}=Ke(),[r,u]=f.useState(null),[m,g]=f.useState(""),[h,v]=f.useState(!0),S=f.useCallback(async()=>{v(!0),g("");try{u(await Wv())}catch(se){g(se instanceof Error?se.message:s("dashboard.loadFailed"))}finally{v(!1)}},[s]);return f.useEffect(()=>{if(!Et()){o.replace("/login");return}S()},[S,o]),a.jsxs(Gt,{title:s("dashboard.title"),subtitle:s("dashboard.subtitle"),children:[m?a.jsxs("div",{className:"alert-error",children:[a.jsx("span",{children:m}),a.jsxs("button",{className:"ghost-button",type:"button",onClick:S,children:[a.jsx(_t,{size:16}),s("common.retry")]})]}):null,h&&!r?a.jsx(gt,{label:s("dashboard.loading")}):null,r?a.jsxs(a.Fragment,{children:[((w=r.override)==null?void 0:w.ticket_pending_total)>0?a.jsxs("div",{className:"ticket-alert",children:[a.jsx("span",{children:s("dashboard.pendingTickets",{count:(y=r.override)==null?void 0:y.ticket_pending_total})}),a.jsx("strong",{onClick:()=>o.push("/ticket"),children:s("dashboard.handleNow")})]}):null,a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("dashboard.today")}),a.jsx("p",{children:s("dashboard.todayHelp")})]}),a.jsxs("button",{className:"ghost-button",type:"button",onClick:S,disabled:h,children:[a.jsx(_t,{size:16}),s(h?"common.refreshing":"common.refresh")]})]}),a.jsxs("section",{className:"stat-grid",children:[a.jsx(Co,{label:s("dashboard.onlineUsers"),value:Ka(((j=r.override)==null?void 0:j.online_user)??0),helper:s("dashboard.lastTenMinutes"),tone:"green",onClick:()=>o.push("/user")}),a.jsx(Co,{label:s("dashboard.todayIncome"),value:`${Sa(((B=r.override)==null?void 0:B.day_paid_income)??((X=r.override)==null?void 0:X.day_income)??0)} VND`,helper:s("dashboard.settledOrders"),tone:"orange",onClick:()=>o.push("/order")}),a.jsx(Co,{label:s("dashboard.todayRegistrations"),value:Ka(((te=r.override)==null?void 0:te.day_register_total)??0),helper:s("dashboard.newAccounts"),onClick:()=>o.push("/user")}),a.jsx(Co,{label:s("dashboard.pendingCommission"),value:Ka(((K=r.override)==null?void 0:K.commission_pending_total)??0),helper:s("dashboard.awaitingReview"),tone:"rose",onClick:()=>o.push("/order")})]}),a.jsxs("section",{className:"overview-grid",children:[a.jsx(od,{label:s("dashboard.monthIncome"),current:`${Sa(((z=r.override)==null?void 0:z.month_income)??0)} VND`,previous:`${Sa(((G=r.override)==null?void 0:G.last_month_income)??0)} VND`}),a.jsx(od,{label:s("dashboard.monthCommission"),current:`${Sa(((U=r.override)==null?void 0:U.commission_month_payout)??0)} VND`,previous:`${Sa(((O=r.override)==null?void 0:O.commission_last_month_payout)??0)} VND`}),a.jsx(od,{label:s("dashboard.monthRegistrations"),current:((ee=r.override)==null?void 0:ee.month_register_total)??0,previous:"-"})]}),a.jsx(_0,{records:r.order,override:r.override}),a.jsxs("section",{className:"rank-grid",children:[a.jsx(zo,{title:s("dashboard.serverRankToday"),subtitle:s("dashboard.trafficGb"),records:r.serverToday,labelKey:"server_name"}),a.jsx(zo,{title:s("dashboard.serverRankYesterday"),subtitle:s("dashboard.trafficGb"),records:r.serverYesterday,labelKey:"server_name"}),a.jsx(zo,{title:s("dashboard.userRankToday"),subtitle:s("dashboard.trafficGb"),records:r.userToday,labelKey:"email"}),a.jsx(zo,{title:s("dashboard.userRankYesterday"),subtitle:s("dashboard.trafficGb"),records:r.userYesterday,labelKey:"email"})]})]}):null]})}const k0=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function vh(o){return[{label:o("config.option.enabledLabel"),value:1},{label:o("config.option.disabledLabel"),value:0}]}function C0(o){return[{label:o("config.resetTraffic.monthly"),value:0},{label:o("config.resetTraffic.byPurchase"),value:1},{label:o("config.resetTraffic.never"),value:2},{label:o("config.resetTraffic.yearly"),value:3},{label:o("config.resetTraffic.yearlyByPurchase"),value:4}]}function rd(o){return[{label:o("config.event.none"),value:0},{label:o("config.event.resetTraffic"),value:1}]}function z0(o){return[{label:o("config.link.permanent"),value:0},{label:o("config.link.oneTime"),value:1},{label:o("config.link.timeLimited"),value:2}]}function T0(o){return[{label:o("config.ticket.openAll"),value:0},{label:o("config.ticket.paidOnly"),value:1},{label:o("config.ticket.disableTickets"),value:2}]}function da(o){return o===!0||o===1||o==="1"}function E0(o){return Array.isArray(o)?o.join(", "):o==null?"":String(o)}function cd(o){return o.split(",").map(s=>s.trim()).filter(Boolean)}function M0({field:o,value:s,onChange:r}){const{t:u}=Ke(),m=o.toInput?o.toInput(s):E0(s);return a.jsxs("div",{className:"config-row",children:[a.jsxs("div",{className:"config-row-copy",children:[a.jsx("h3",{children:o.label}),o.description?a.jsx("p",{children:o.description}):null]}),a.jsxs("div",{className:"config-row-control",children:[o.type==="switch"?a.jsxs("button",{className:`switch-control ${da(s)?"on":""}`,type:"button",onClick:()=>r(da(s)?0:1),"aria-pressed":da(s),children:[a.jsx("span",{}),da(s)?vh(u)[0].label:vh(u)[1].label]}):null,o.type==="select"?a.jsx("select",{className:"config-input",value:m,onChange:g=>r(g.target.value),children:(o.options??[]).map(g=>a.jsx("option",{value:g.value,children:g.label},String(g.value)))}):null,o.type==="textarea"?a.jsx("textarea",{className:"config-input",onChange:g=>r(o.fromInput?o.fromInput(g.target.value):g.target.value),placeholder:o.placeholder,rows:4,value:m}):null,o.type==="text"||o.type==="number"?a.jsx("input",{className:"config-input",onChange:g=>r(o.fromInput?o.fromInput(g.target.value):g.target.value),placeholder:o.placeholder,type:o.type,value:m}):null]})]})}function D0({plans:o,emailTemplates:s,t:r}){const u=[{label:r("config.option.disabled"),value:0},...o.map(m=>({label:m.name,value:m.id}))];return[{key:"site",label:r("config.tabs.site"),hint:r("config.tabs.siteHint"),fields:[{key:"app_name",label:r("config.site.appName"),description:r("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:r("config.site.appDescription"),description:r("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:r("config.site.appUrl"),description:r("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:r("config.site.forceHttps"),description:r("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:r("config.site.logo"),description:r("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:r("config.site.subscribeUrl"),description:r("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:r("config.site.subscribePath"),description:r("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:r("config.site.tosUrl"),description:r("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:r("config.site.stopRegister"),description:r("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:r("config.site.trialPlan"),description:r("config.site.trialPlanHelp"),type:"select",options:u},{key:"try_out_hour",label:r("config.site.trialHours"),type:"number",visible:m=>Number(m.try_out_plan_id||0)!==0},{key:"currency",label:r("config.site.currency"),description:r("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:r("config.site.currencySymbol"),description:r("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:r("config.tabs.safe"),hint:r("config.tabs.safeHint"),fields:[{key:"email_verify",label:r("config.safe.emailVerify"),description:r("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:r("config.safe.gmailAlias"),description:r("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:r("config.safe.safeMode"),description:r("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:r("config.safe.securePath"),description:r("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:r("config.safe.staffPath"),description:r("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:r("config.safe.emailWhitelist"),description:r("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:r("config.safe.emailWhitelistSuffix"),description:r("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:m=>da(m.email_whitelist_enable),fromInput:cd},{key:"recaptcha_enable",label:r("config.safe.recaptcha"),description:r("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:r("config.safe.recaptchaKey"),type:"text",visible:m=>da(m.recaptcha_enable)},{key:"recaptcha_site_key",label:r("config.safe.recaptchaSiteKey"),type:"text",visible:m=>da(m.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:r("config.safe.ipRegisterLimit"),description:r("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:r("config.safe.limitCount"),type:"number",visible:m=>da(m.register_limit_by_ip_enable)},{key:"register_limit_expire",label:r("config.safe.limitMinutes"),type:"number",visible:m=>da(m.register_limit_by_ip_enable)},{key:"password_limit_enable",label:r("config.safe.passwordLimit"),description:r("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:r("config.safe.limitCount"),type:"number",visible:m=>da(m.password_limit_enable)},{key:"password_limit_expire",label:r("config.safe.limitMinutes"),type:"number",visible:m=>da(m.password_limit_enable)}]},{key:"subscribe",label:r("config.tabs.subscribe"),hint:r("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:r("config.subscribe.multipleSubscription"),description:r("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:r("config.subscribe.planChange"),description:r("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:r("config.subscribe.deviceHwid"),description:r("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:r("config.subscribe.happEncrypt"),description:r("config.subscribe.happEncryptHelp"),type:"switch"},{key:"change_sni_enable",label:r("config.subscribe.changeSni"),description:r("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:r("config.subscribe.giftcardNotice"),description:r("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:r("config.subscribe.resetTraffic"),description:r("config.subscribe.resetTrafficHelp"),type:"select",options:C0(r)},{key:"surplus_enable",label:r("config.subscribe.surplus"),description:r("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:r("config.subscribe.allowNewPeriod"),description:r("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:r("config.subscribe.newOrderEvent"),type:"select",options:rd(r)},{key:"renew_order_event_id",label:r("config.subscribe.renewOrderEvent"),type:"select",options:rd(r)},{key:"change_order_event_id",label:r("config.subscribe.changeOrderEvent"),type:"select",options:rd(r)},{key:"show_info_to_server_enable",label:r("config.subscribe.showInfo"),description:r("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:r("config.subscribe.linkMode"),description:r("config.subscribe.linkModeHelp"),type:"select",options:z0(r)},{key:"show_subscribe_expire",label:r("config.subscribe.linkExpire"),type:"number",visible:m=>Number(m.show_subscribe_method||0)===2}]},{key:"deposit",label:r("config.tabs.deposit"),hint:r("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:r("config.deposit.bonus"),description:r("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:cd}]},{key:"ticket",label:r("config.tabs.ticket"),hint:r("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:r("config.ticket.status"),description:r("config.ticket.statusHelp"),type:"select",options:T0(r)}]},{key:"invite",label:r("config.tabs.invite"),hint:r("config.tabs.inviteHint"),fields:[{key:"invite_force",label:r("config.invite.force"),description:r("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:r("config.invite.commission"),description:r("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:r("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:r("config.invite.neverExpire"),description:r("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:r("config.invite.firstTime"),description:r("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:r("config.invite.autoCheck"),description:r("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:r("config.invite.withdrawLimit"),description:r("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:r("config.invite.withdrawMethods"),description:r("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:cd},{key:"withdraw_close_enable",label:r("config.invite.withdrawClose"),description:r("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:r("config.invite.distribution"),description:r("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:r("config.invite.level1"),type:"number",visible:m=>da(m.commission_distribution_enable)},{key:"commission_distribution_l2",label:r("config.invite.level2"),type:"number",visible:m=>da(m.commission_distribution_enable)},{key:"commission_distribution_l3",label:r("config.invite.level3"),type:"number",visible:m=>da(m.commission_distribution_enable)}]},{key:"server",label:r("config.tabs.server"),hint:r("config.tabs.serverHint"),fields:[{key:"server_api_url",label:r("config.server.apiUrl"),description:r("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:r("config.server.token"),description:r("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:r("config.server.pullInterval"),description:r("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:r("config.server.pushInterval"),description:r("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:r("config.server.nodeTrafficThreshold"),description:r("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:r("config.server.deviceTrafficThreshold"),description:r("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:r("config.server.deviceLimitMode"),description:r("config.server.deviceLimitModeHelp"),type:"switch"}]},{key:"email",label:r("config.tabs.email"),hint:r("config.tabs.emailHint"),warning:r("config.email.warning"),fields:[{key:"email_host",label:r("config.email.host"),type:"text"},{key:"email_port",label:r("config.email.port"),type:"text"},{key:"email_encryption",label:r("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:r("config.email.username"),type:"text"},{key:"email_password",label:r("config.email.password"),type:"text"},{key:"email_from_address",label:r("config.email.fromAddress"),type:"text"},{key:"email_template",label:r("config.email.template"),type:"select",options:s.map(m=>({label:m,value:m}))}]},{key:"telegram",label:r("config.tabs.telegram"),hint:r("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:r("config.telegram.token"),description:r("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:r("config.telegram.enable"),description:r("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:r("config.telegram.group"),description:r("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:r("config.telegram.appleShareApi"),description:r("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:r("config.tabs.app"),hint:r("config.tabs.appHint"),warning:r("config.app.warning"),fields:[{key:"windows_version",label:r("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:r("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:r("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:r("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:r("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:r("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function O0(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState("site"),[m,g]=f.useState(null),[h,v]=f.useState([]),[S,w]=f.useState([]),[y,j]=f.useState(!0),[B,X]=f.useState(null),[te,K]=f.useState(""),z=f.useCallback(async()=>{j(!0),K("");try{const[$,le,he]=await Promise.all([dx(),Iv(),Pv()]);g($),v(le),w(he)}catch($){K($ instanceof Error?$.message:s("config.loadFailed"))}finally{j(!1)}},[s]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}z()},[z,o]),f.useEffect(()=>{const $=document.querySelector(".config-tabs button.active");$&&$.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[r]);const G=f.useMemo(()=>D0({plans:h,emailTemplates:S,t:s}),[h,S,s]),U=G.find($=>$.key===r)??G[0],O=(m==null?void 0:m[U.key])??{};function ee($,le,he){g(N=>N&&{...N,[$]:{...N[$],[le]:he}})}async function se(){var $;if(m){X(U.key),K("");try{await ux(m[U.key]),($=window.showToast)==null||$.call(window,s("config.saveSuccess"),"success")}catch(le){K(le instanceof Error?le.message:s("config.saveFailed"))}finally{X(null)}}}async function ce(){var $;X("mail"),K("");try{await e1(),($=window.showToast)==null||$.call(window,s("config.email.testSuccess"),"success")}catch(le){K(le instanceof Error?le.message:s("config.email.testFailed"))}finally{X(null)}}async function E(){var le;const $=String((m==null?void 0:m.telegram.telegram_bot_token)??"");X("webhook"),K("");try{await t1($),(le=window.showToast)==null||le.call(window,s("config.telegram.webhookSuccess"),"success")}catch(he){K(he instanceof Error?he.message:s("config.telegram.webhookFailed"))}finally{X(null)}}return a.jsxs(Gt,{title:s("config.title"),subtitle:s("config.subtitle"),children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("config.systemConfig")}),a.jsx("p",{children:s("config.systemConfigHelp")})]}),a.jsxs("button",{className:"ghost-button",type:"button",onClick:z,disabled:y,children:[a.jsx(_t,{size:16}),s(y?"common.refreshing":"common.refresh")]})]}),te?a.jsx("div",{className:"form-error",children:te}):null,y&&!m?a.jsx(gt,{label:s("config.loading")}):null,m?a.jsxs("section",{className:"config-layout",children:[a.jsx("aside",{className:"config-tabs","aria-label":s("config.tabsLabel"),children:k0.map($=>{const le=G.find(he=>he.key===$);return le?a.jsxs("button",{className:r===$?"active":"",type:"button",onClick:()=>u($),children:[a.jsx("span",{children:le.label}),a.jsx("small",{children:le.hint})]},$):null})}),a.jsxs("div",{className:"config-panel panel",children:[a.jsxs("div",{className:"config-panel-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:U.label}),a.jsx("p",{children:U.hint})]}),a.jsxs("button",{className:"primary-button save-button",disabled:B===U.key,type:"button",onClick:se,children:[a.jsx(Ca,{size:16}),B===U.key?s("config.saving"):s("config.saveTab")]})]}),U.warning?a.jsx("div",{className:"config-warning",children:U.warning}):null,a.jsx("div",{className:"config-fields",children:U.fields.map($=>$.visible&&!$.visible(O)?null:a.jsx(M0,{field:$,value:O[$.key],onChange:le=>ee(U.key,$.key,le)},$.key))}),U.key==="email"?a.jsx("div",{className:"config-actions",children:a.jsxs("button",{className:"ghost-button",type:"button",disabled:B==="mail",onClick:ce,children:[a.jsx(ix,{size:16}),s(B==="mail"?"config.email.testing":"config.email.test")]})}):null,U.key==="telegram"?a.jsxs("div",{className:"config-actions",children:[a.jsxs("button",{className:"ghost-button",type:"button",disabled:B==="webhook",onClick:E,children:[a.jsx(Gv,{size:16}),s(B==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),a.jsxs("span",{children:[a.jsx(sx,{size:14}),s("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function Kn(o){var r;if(typeof window>"u"||typeof document>"u")return!1;if((r=navigator.clipboard)!=null&&r.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(o),!0}catch{}const s=document.createElement("textarea");s.value=o,s.setAttribute("readonly",""),s.style.position="fixed",s.style.left="-9999px",s.style.top="0",document.body.appendChild(s),s.select(),s.setSelectionRange(0,s.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(s)}}function dd(o){return o===!0||o===1||o==="1"}function A0(o,s=""){return{id:o==null?void 0:o.id,name:(o==null?void 0:o.name)??"",icon:(o==null?void 0:o.icon)??"",notify_domain:(o==null?void 0:o.notify_domain)??"",handling_fee_fixed:(o==null?void 0:o.handling_fee_fixed)===null||(o==null?void 0:o.handling_fee_fixed)===void 0?"":String(Number(o.handling_fee_fixed)/100),handling_fee_percent:(o==null?void 0:o.handling_fee_percent)===null||(o==null?void 0:o.handling_fee_percent)===void 0?"":String(o.handling_fee_percent),payment:(o==null?void 0:o.payment)??s,config:{...(o==null?void 0:o.config)??{}}}}function U0(o){return{id:o.id,name:o.name,icon:o.icon||null,notify_domain:o.notify_domain||null,handling_fee_fixed:o.handling_fee_fixed===""?null:Math.round(Number(o.handling_fee_fixed)*100),handling_fee_percent:o.handling_fee_percent===""?null:o.handling_fee_percent,payment:o.payment,config:o.config}}function R0(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState([]),[m,g]=f.useState([]),[h,v]=f.useState(null),[S,w]=f.useState({}),[y,j]=f.useState(!0),[B,X]=f.useState(!1),[te,K]=f.useState(!1),[z,G]=f.useState(""),[U,O]=f.useState(""),[ee,se]=f.useState({}),ce=f.useCallback(async()=>{j(!0),G("");try{const[M,re]=await Promise.all([a1(),n1()]);u(M),g(re),se({})}catch(M){G(M instanceof Error?M.message:s("payment.loadFailed"))}finally{j(!1)}},[s]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}ce()},[ce,o]);async function E(M){const re=(M==null?void 0:M.payment)??m[0]??"",A=A0(M,re);if(v(A),w({}),G(""),O(""),!!re){X(!0);try{w(await uh(re,M==null?void 0:M.id))}catch(F){G(F instanceof Error?F.message:s("payment.formLoadFailed"))}finally{X(!1)}}}async function $(M){if(h){v({...h,payment:M,config:{}}),X(!0),G("");try{w(await uh(M,h.id))}catch(re){G(re instanceof Error?re.message:s("payment.formLoadFailed"))}finally{X(!1)}}}async function le(M){var re,A;if(M.preventDefault(),!!h){K(!0),G(""),O("");try{await l1(U0(h)),v(null),(re=window.showToast)==null||re.call(window,s("payment.saveSuccess"),"success"),await ce()}catch(F){(A=window.showToast)==null||A.call(window,F instanceof Error?F.message:s("payment.saveFailed"),"error")}finally{K(!1)}}}async function he(M){var re;G(""),O("");try{await i1(M),await ce()}catch(A){(re=window.showToast)==null||re.call(window,A instanceof Error?A.message:s("payment.toggleFailed"),"error")}}async function N(M){var re;(re=window.showConfirm)==null||re.call(window,{message:s("payment.deleteConfirm"),onConfirm:async()=>{var A,F;G(""),O("");try{await s1(M),(A=window.showToast)==null||A.call(window,s("payment.deleteSuccess"),"success"),await ce()}catch(x){(F=window.showToast)==null||F.call(window,x instanceof Error?x.message:s("payment.deleteFailed"),"error")}}})}async function R(M,re){var P;const A=M+re;if(A<0||A>=r.length)return;const F=[...r],x=F[M];F.splice(M,1),F.splice(A,0,x),u(F);try{await o1(F.map(H=>H.id)),await ce()}catch(H){(P=window.showToast)==null||P.call(window,H instanceof Error?H.message:s("payment.sortFailed"),"error"),await ce()}}async function ae(M){var A;const re=await Kn(M);(A=window.showToast)==null||A.call(window,s(re?"payment.copied":"common.copyFailed"),re?"success":"error")}return a.jsxs(Gt,{title:s("payment.title"),subtitle:s("payment.subtitle"),children:[a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("payment.methods")}),a.jsx("p",{children:s("payment.methodsHelp")})]}),a.jsxs("div",{className:"button-row",children:[a.jsxs("button",{className:"ghost-button",type:"button",onClick:ce,disabled:y,children:[a.jsx(_t,{size:16}),a.jsx("span",{children:s(y?"common.refreshing":"common.refresh")})]}),a.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void E(),children:[a.jsx(ka,{size:16}),a.jsx("span",{children:s("payment.add")})]})]})]}),z?a.jsx("div",{className:"form-error",children:z}):null,U?a.jsx("div",{className:"form-success",children:U}):null,y&&r.length===0?a.jsx(gt,{label:s("payment.loading")}):null,a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),a.jsx("section",{className:"panel table-panel hide-on-mobile",children:a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:s("payment.id")}),a.jsx("th",{children:s("payment.enabled")}),a.jsx("th",{children:s("payment.displayName")}),a.jsx("th",{children:s("payment.interface")}),a.jsx("th",{children:s("payment.notifyUrl")}),a.jsx("th",{children:s("common.actions")})]})}),a.jsxs("tbody",{children:[r.map((M,re)=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsxs("div",{className:"sort-cell",children:[a.jsx("span",{children:M.id}),a.jsx("button",{className:"mini-button",type:"button",onClick:()=>void R(re,-1),disabled:re===0,"aria-label":s("payment.moveUp"),children:a.jsx(ah,{size:13})}),a.jsx("button",{className:"mini-button",type:"button",onClick:()=>void R(re,1),disabled:re===r.length-1,"aria-label":s("payment.moveDown"),children:a.jsx(th,{size:13})})]})}),a.jsx("td",{children:a.jsx("button",{className:`admin-switch ${dd(M.enable)?"active":""}`,type:"button",onClick:()=>void he(M.id),"aria-label":dd(M.enable)?s("common.enabled"):s("common.disabled"),children:a.jsx("span",{className:"admin-switch-thumb"})})}),a.jsxs("td",{children:[a.jsx("strong",{children:M.name}),M.icon?a.jsx("small",{children:M.icon}):null]}),a.jsx("td",{children:M.payment}),a.jsx("td",{children:a.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void ae(M.notify_url),children:[a.jsx("span",{children:M.notify_url}),a.jsx(rs,{size:14})]})}),a.jsx("td",{children:a.jsxs("div",{className:"row-actions",children:[a.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void E(M),children:[a.jsx(Ht,{size:14}),s("common.edit")]}),a.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void N(M.id),children:[a.jsx(Bt,{size:14}),s("common.delete")]})]})})]},M.id)),!y&&r.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,children:a.jsx("div",{className:"empty-state",children:s("payment.empty")})})}):null]})]})})}),a.jsxs("div",{className:"mobile-payment-list",children:[r.map((M,re)=>{const A=dd(M.enable),F=M.handling_fee_percent!==null&&M.handling_fee_percent!==""?`${M.handling_fee_percent}%`:"",x=M.handling_fee_fixed!==null?`${Sa(M.handling_fee_fixed)} VND`:"",P=[F,x].filter(Boolean).join(" + ")||"No fees",H=ee[M.id],k=M.icon&&!H;return a.jsxs("div",{className:`payment-mobile-card ${A?"enabled":"disabled"}`,children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("div",{className:"header-left",children:[a.jsxs("span",{className:"id-tag",children:["#",M.id]}),a.jsx("span",{className:"gateway-tag",children:M.payment})]}),a.jsx("button",{className:`admin-switch ${A?"active":""}`,type:"button",onClick:()=>void he(M.id),"aria-label":s(A?"common.enabled":"common.disabled"),children:a.jsx("span",{className:"admin-switch-thumb"})})]}),a.jsxs("div",{className:"card-body",children:[a.jsxs("div",{className:"payment-info",children:[k?a.jsx("div",{className:"payment-avatar img-avatar",children:a.jsx("img",{src:M.icon,alt:M.name,onError:()=>{se(Z=>({...Z,[M.id]:!0}))}})}):a.jsx("div",{className:"payment-avatar text-avatar",children:M.name.slice(0,2).toUpperCase()}),a.jsxs("div",{className:"payment-details",children:[a.jsx("h3",{children:M.name}),a.jsxs("p",{className:"fee-info",children:[a.jsx("span",{className:"fee-label",children:"Fee:"})," ",a.jsx("span",{className:"fee-badge",children:P})]})]})]}),a.jsxs("div",{className:"notify-url-section",children:[a.jsx("span",{className:"section-label",children:s("payment.notifyUrl")}),a.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void ae(M.notify_url),title:"Click to copy",children:[a.jsx("span",{className:"url-text",children:M.notify_url}),a.jsx(rs,{size:12,className:"copy-icon"})]})]})]}),a.jsxs("div",{className:"card-footer",children:[a.jsxs("div",{className:"sorting-controls",children:[a.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void R(re,-1),disabled:re===0,"aria-label":s("payment.moveUp"),children:a.jsx(ah,{size:14})}),a.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void R(re,1),disabled:re===r.length-1,"aria-label":s("payment.moveDown"),children:a.jsx(th,{size:14})})]}),a.jsxs("div",{className:"action-buttons",children:[a.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void E(M),children:[a.jsx(Ht,{size:13}),a.jsx("span",{children:s("common.edit")})]}),a.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void N(M.id),children:[a.jsx(Bt,{size:13}),a.jsx("span",{children:s("common.delete")})]})]})]})]},M.id)}),!y&&r.length===0?a.jsx("div",{className:"empty-state",children:s("payment.empty")}):null]}),h?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[a.jsx("div",{className:"drawer-handle hide-on-desktop"}),a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:h.id?s("payment.edit"):s("payment.add")}),a.jsx("p",{children:s("payment.modalHelp")})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>v(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:le,children:[a.jsxs("label",{children:[a.jsx("span",{children:s("payment.displayName")}),a.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:M=>v({...h,name:M.target.value})})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("payment.iconUrl")}),a.jsx("input",{className:"config-input",value:h.icon,onChange:M=>v({...h,icon:M.target.value}),placeholder:"https://example.com/icon.svg"})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("payment.notifyDomain")}),a.jsx("input",{className:"config-input",value:h.notify_domain,onChange:M=>v({...h,notify_domain:M.target.value}),placeholder:"https://pay.example.com"})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("payment.percentFee")}),a.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:h.handling_fee_percent,onChange:M=>v({...h,handling_fee_percent:M.target.value})})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("payment.fixedFee")}),a.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:h.handling_fee_fixed,onChange:M=>v({...h,handling_fee_fixed:M.target.value})})]})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("payment.interface")}),a.jsx("select",{className:"config-input",value:h.payment,onChange:M=>void $(M.target.value),children:m.map(M=>a.jsx("option",{value:M,children:M},M))})]}),B?a.jsx(gt,{label:s("payment.formLoading")}):null,B?null:Object.entries(S).map(([M,re])=>a.jsxs("label",{children:[a.jsx("span",{children:re.label}),a.jsx("input",{className:"config-input",placeholder:re.description,value:String(h.config[M]??re.value??""),onChange:A=>v({...h,config:{...h.config,[M]:A.target.value}})})]},M)),h.payment==="MGate"?a.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>v(null),children:s("common.cancel")}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:te,children:[a.jsx(Ca,{size:16}),s(te?"payment.saving":"common.save")]})]})]})]})}):null]})}function H0(o){return o.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function L0(o,s){return s[o.field_name]??o.default_value??""}function q0(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState(null),[m,g]=f.useState(null),[h,v]=f.useState(!0),[S,w]=f.useState(!1),[y,j]=f.useState(!1),[B,X]=f.useState(null),[te,K]=f.useState(""),[z,G]=f.useState(""),U=f.useCallback(async()=>{v(!0),K("");try{u(await r1())}catch(E){K(E instanceof Error?E.message:s("theme.loadFailed"))}finally{v(!1)}},[s]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}U()},[U,o]);async function O(E,$){g(null),w(!0),K(""),G("");try{const le=await c1(E);g({key:E,theme:$,values:le})}catch(le){K(le instanceof Error?le.message:s("theme.configLoadFailed"))}finally{w(!1)}}async function ee(E){X(E),K(""),G("");try{await ux({frontend_theme:E}),G(s("theme.activateSuccess")),await U()}catch($){K($ instanceof Error?$.message:s("theme.activateFailed"))}finally{X(null)}}async function se(E){if(E.preventDefault(),!!m){j(!0),K(""),G("");try{await d1(m.key,m.values),g(null),G(s("theme.saveSuccess")),await U()}catch($){K($ instanceof Error?$.message:s("theme.saveFailed"))}finally{j(!1)}}}function ce(E,$){g(le=>le&&{...le,values:{...le.values,[E]:$}})}return a.jsxs(Gt,{title:s("theme.title"),subtitle:s("theme.subtitle"),children:[a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("theme.available")}),a.jsx("p",{children:s("theme.availableHelp")})]}),a.jsxs("button",{className:"ghost-button",type:"button",onClick:U,disabled:h,children:[a.jsx(_t,{size:16}),s(h?"common.refreshing":"common.refresh")]})]}),a.jsx("div",{className:"config-warning",children:s("theme.warning")}),te?a.jsx("div",{className:"form-error",children:te}):null,z?a.jsx("div",{className:"form-success",children:z}):null,h&&!r?a.jsx(gt,{label:s("theme.loading")}):null,r?a.jsx("section",{className:"theme-grid",children:Object.entries(r.themes).map(([E,$])=>{const le=r.active===E;return a.jsxs("article",{className:"theme-card",children:[a.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${H0($)})`},children:le?a.jsxs("span",{className:"theme-active",children:[a.jsx(lx,{size:15}),s("theme.current")]}):null}),a.jsxs("div",{className:"theme-body",children:[a.jsxs("div",{children:[a.jsx("h3",{children:$.name||E}),a.jsx("p",{children:$.description||s("theme.noDescription")})]}),a.jsxs("small",{children:[s("theme.version"),": ",$.version||"-"]})]}),a.jsxs("div",{className:"theme-actions",children:[a.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void O(E,$),children:[a.jsx(Dv,{size:15}),s("theme.settings")]}),a.jsxs("button",{className:"primary-button",disabled:le||B===E,type:"button",onClick:()=>void ee(E),children:[a.jsx(zv,{size:15}),s(le?"theme.current":B===E?"theme.activating":"theme.activate")]})]})]},E)})}):null,S?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:a.jsx(gt,{label:s("theme.configLoading")})})}):null,m?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("theme.configure",{name:m.theme.name||m.key})}),a.jsx("p",{children:m.theme.description||s("theme.noDescription")})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:se,children:[(m.theme.configs??[]).map(E=>{const $=L0(E,m.values);return a.jsxs("label",{children:[a.jsx("span",{children:E.label}),E.description?a.jsx("p",{className:"field-description",children:E.description}):null,E.field_type==="select"?a.jsx("select",{className:"config-input",value:$,onChange:le=>ce(E.field_name,le.target.value),children:Object.entries(E.select_options??{}).map(([le,he])=>a.jsx("option",{value:le,children:he},le))}):null,E.field_type==="textarea"?a.jsx("textarea",{className:"config-input",placeholder:E.placeholder,rows:5,value:$,onChange:le=>ce(E.field_name,le.target.value)}):null,E.field_type!=="select"&&E.field_type!=="textarea"?a.jsx("input",{className:"config-input",placeholder:E.placeholder,value:$,onChange:le=>ce(E.field_name,le.target.value)}):null]},E.field_name)}),(m.theme.configs??[]).length===0?a.jsx("div",{className:"empty-state",children:s("theme.noConfig")}):null,a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:s("common.cancel")}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[a.jsx(Ca,{size:16}),s(y?"theme.saving":"common.save")]})]})]})]})}):null]})}const Md=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],B0=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],G0=["tcp","ws","grpc","http","httpupgrade","xhttp"],Y0=["tcp","ws","grpc","http","httpupgrade","xhttp"],$0=["tcp","ws","grpc"],kx=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],V0=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],Gd=typeof window<"u"?window.location.origin:"",Q0="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function X0(o,s,r=""){return o[s]??r}function tt(o,s,r=""){return String(X0(o,s,r))}function Yd(o,s){const r=o[s];return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}function Z0(o){if(o&&typeof o=="object"&&!Array.isArray(o))return o;if(typeof o!="string"||!o.trim())return{};try{const s=JSON.parse(o);return s&&typeof s=="object"&&!Array.isArray(s)?s:{}}catch{return{}}}function K0(o){return typeof o=="string"?o.trim()!=="":Array.isArray(o)?o.length>0:o&&typeof o=="object"?Object.keys(o).length>0:!1}function J0(o){return o==="vmess"?"networkSettings":"network_settings"}function F0(o,s){const r=o==="vmess",u=o==="vless"||yl(o),m={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(s){case"tcp":return u?{acceptProxyProtocol:!1,...m}:m;case"ws":return u?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return r?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function yl(o){return o==="v2node"||o==="zicnode"}function W0(o){var s;return yl(o)?"ZicNode":((s=Md.find(r=>r.value===o))==null?void 0:s.label)??o}function Cx(o){return Array.isArray(o)?o.join(","):typeof o=="string"?o.trim():o==null?"":String(o).trim()}function P0(o){return o===!0||o===1||o==="1"||o==="true"}function I0(o){return Cx(o).replace(/\/+$/,"")||Gd}function jh(o){return`'${o.replace(/'/g,"'\\''")}'`}function ej(o,s){const r=s.apiHost||Gd,u=s.apiKey||"TOKEN_MOI";return`wget -N ${Q0} && \\
bash install.sh --api-host ${jh(r)} --node-id ${o} --api-key ${jh(u)}`}function wh(o){return(Array.isArray(o)?o:typeof o=="string"?o.split(",").map(r=>r.trim()):[]).map(r=>Number(r)).filter(r=>Number.isFinite(r))}function Nh(o,s){if(s){const u=JSON.parse(JSON.stringify(s));return u.group_id=wh(u.group_id),u.route_id=wh(u.route_id),{_type:o,...u}}const r={_type:o,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(o){case"vmess":return{...r,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...r,network:"tcp",network_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...r,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...r,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",insecure:0};case"tuic":return{...r,server_name:"",insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...r,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...r,server_name:"",insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...r,protocol:"vless",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:""};default:return r}}function zx({initialValue:o,onCancel:s,onSave:r}){const{t:u}=Ke(),[m,g]=f.useState(()=>JSON.stringify(o??{},null,2)),[h,v]=f.useState(""),S=y=>{if(y.preventDefault(),!m.trim()){r({});return}try{const j=JSON.parse(m);if(typeof j!="object"||j===null)throw new Error("Must be a JSON object {} or array []");r(j)}catch(j){v(j instanceof Error?j.message:"Invalid JSON")}},w=y=>{if(g(y),!y.trim()){v("");return}try{const j=JSON.parse(y);if(typeof j!="object"||j===null)throw new Error("Must be a JSON object {} or array []");v("")}catch(j){v(j instanceof Error?j.message:"Invalid JSON")}};return a.jsxs("form",{onSubmit:S,style:{display:"flex",flexDirection:"column",gap:12},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[a.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:u("node.jsonContent")}),h&&a.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",h]})]}),a.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:h?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:m,onChange:y=>w(y.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),a.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:s,children:u("common.cancel")}),a.jsx("button",{className:"primary-button",type:"submit",disabled:!!h,children:u("common.confirm")})]})]})}function De({label:o,required:s,actionText:r,onAction:u}){return a.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[a.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[o,s&&a.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),r&&u&&a.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:m=>{m.preventDefault(),u()},children:r})]})}function tj({value:o,onChange:s,label:r}){const{t:u}=Ke(),[m,g]=f.useState("");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[a.jsx(De,{label:r}),a.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[o.map((h,v)=>a.jsxs("span",{className:"tag",onClick:()=>s(o.filter((S,w)=>w!==v)),style:{cursor:"pointer"},children:[h," ×"]},v)),a.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:m,placeholder:u("node.tagPlaceholder"),onChange:h=>g(h.target.value),onKeyDown:h=>{h.key==="Enter"&&m.trim()&&(h.preventDefault(),s([...o,m.trim()]),g(""))}})]})]})}function _h({options:o,value:s,onChange:r,label:u,actionText:m,onAction:g}){const{t:h}=Ke(),[v,S]=f.useState(""),w=o.filter(j=>s.includes(j.id)),y=o.filter(j=>j.name.toLowerCase().includes(v.toLowerCase()));return a.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[a.jsx(De,{label:u,actionText:m,onAction:g}),w.length>0&&a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:w.map(j=>a.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>r(s.filter(B=>B!==j.id)),children:[j.name," ",a.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},j.id))}),o.length>5&&a.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${h("common.search")}...`,value:v,onChange:j=>S(j.target.value)}),a.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[y.map(j=>a.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[a.jsx("input",{type:"checkbox",checked:s.includes(j.id),onChange:B=>r(B.target.checked?[...s,j.id]:s.filter(X=>X!==j.id))}),a.jsx("span",{children:j.name})]},j.id)),y.length===0&&a.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:o.length===0?h("node.noGroupsAvailable"):h("node.noResultsFound")})]})]})}function xn({label:o,checked:s,onChange:r}){return a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[a.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:o}),a.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[a.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:s,onChange:u=>r(u.target.checked)}),a.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:s?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:a.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:s?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function aj({initialValue:o,isSnakeCase:s,onCancel:r,onSave:u}){const{t:m}=Ke(),g=s?"server_name":"serverName",h=s?"allow_insecure":"allowInsecure",[v,S]=f.useState(String((o==null?void 0:o[g])??"")),[w,y]=f.useState(()=>{const B=o==null?void 0:o[h];return B===1||B===!0||String(B)==="1"||String(B)==="true"}),j=B=>{B.preventDefault(),u({[g]:v,[h]:s?w?1:0:w})};return a.jsxs("form",{onSubmit:j,style:{display:"flex",flexDirection:"column",gap:16},children:[a.jsxs("label",{style:{display:"grid",gap:6},children:[a.jsx("span",{style:{fontSize:13,fontWeight:800},children:m("node.serverName")}),a.jsx("input",{className:"config-input",value:v,onChange:B=>S(B.target.value),placeholder:m("node.serverNameHelp")})]}),a.jsx(xn,{label:m("node.allowInsecure"),checked:w,onChange:y}),a.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:r,children:m("common.cancel")}),a.jsx("button",{className:"primary-button",type:"submit",children:m("common.confirm")})]})]})}function nj({draft:o,set:s,groups:r,routes:u,nodes:m,onOpenJson:g,onAddGroup:h,onOpenTransportConfig:v}){const S=String(o._type),w=tt(o,"network","tcp");return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"form-section-title",children:t("node.basicSettings")}),a.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:t("node.name"),required:!0}),a.jsx("input",{className:"config-input",required:!0,value:tt(o,"name"),onChange:y=>s("name",y.target.value),placeholder:t("node.namePlaceholder")})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:t("node.rate"),required:!0}),a.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:tt(o,"rate","1"),onChange:y=>s("rate",Number(y.target.value))})]})]}),a.jsx(tj,{value:o.tags??[],onChange:y=>s("tags",y),label:t("node.tags")}),a.jsx(_h,{options:r.map(y=>({id:y.id,name:y.name})),value:o.group_id??[],onChange:y=>s("group_id",y),label:t("node.permissionGroups"),actionText:t("node.addGroup"),onAction:h}),a.jsxs("div",{className:"form-split",style:{marginTop:8},children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:t("node.address"),required:!0}),a.jsx("input",{className:"config-input",required:!0,value:tt(o,"host"),onChange:y=>s("host",y.target.value),placeholder:t("node.addressPlaceholder")})]}),["vmess","vless"].includes(S)||yl(S)?a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:t("node.tls"),actionText:Number(o.tls)===2?void 0:t("node.editConfig"),onAction:()=>{const y=S==="vmess"?"tlsSettings":"tls_settings";g(t("node.tls"),y)}}),a.jsxs("select",{className:"config-input",value:tt(o,"tls","0"),onChange:y=>{const j=Number(y.target.value);s("tls",j);const B=S==="vmess"?"tlsSettings":"tls_settings";j===1&&!o[B]&&s(B,{})},children:[a.jsx("option",{value:"0",children:t("node.none")}),a.jsx("option",{value:"1",children:t("node.useTls")}),S!=="vmess"&&a.jsx("option",{value:"2",children:t("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(S)?a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:t("node.sni")}),a.jsx("input",{className:"config-input",value:tt(o,"server_name"),onChange:y=>s("server_name",y.target.value),placeholder:t("node.sniHelp")})]}):null]}),a.jsxs("div",{className:"form-split",style:{marginTop:8},children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:t("node.connectionPort"),required:!0}),a.jsx("input",{className:"config-input",required:!0,value:tt(o,"port"),onChange:y=>s("port",y.target.value),placeholder:"443"})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:t("node.servicePort"),required:!0}),a.jsx("input",{className:"config-input",required:!0,value:tt(o,"server_port"),onChange:y=>s("server_port",y.target.value),placeholder:"443"})]})]}),["vmess","trojan","vless"].includes(S)||yl(S)?a.jsxs("label",{style:{display:"block",marginTop:8},children:[a.jsx(De,{label:t("node.transportProtocol"),required:!0,actionText:t("node.editConfig"),onAction:v}),a.jsxs("select",{className:"config-input",value:w,onChange:y=>{s("network",y.target.value);const j=S==="vmess"?"networkSettings":"network_settings";o[j]||s(j,{})},children:[S==="vmess"&&B0.map(y=>a.jsx("option",{value:y,children:y},y)),S==="trojan"&&$0.map(y=>a.jsx("option",{value:y,children:y},y)),S==="vless"&&G0.map(y=>a.jsx("option",{value:y,children:y},y)),yl(S)&&Y0.map(y=>a.jsx("option",{value:y,children:y},y))]})]}):null,S==="trojan"&&a.jsx(ij,{draft:o,set:s}),S==="shadowsocks"&&a.jsx(sj,{draft:o,set:s,onOpenJson:g}),S==="hysteria"&&a.jsx(oj,{draft:o,set:s}),S==="tuic"&&a.jsx(rj,{draft:o,set:s}),S==="vless"&&a.jsx(cj,{draft:o,set:s,onOpenJson:g}),S==="anytls"&&a.jsx(dj,{draft:o,set:s,onOpenJson:g}),yl(S)&&a.jsx(uj,{draft:o,set:s,onOpenJson:g}),a.jsxs("div",{className:"form-split",style:{marginTop:8},children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:t("node.parentNode")}),a.jsxs("select",{className:"config-input",value:o.parent_id?String(o.parent_id):"",onChange:y=>s("parent_id",y.target.value?Number(y.target.value):null),children:[a.jsx("option",{value:"",children:t("node.none")}),m.filter(y=>y.id!==o.id&&!y.parent_id).map(y=>a.jsx("option",{value:y.id,children:y.name},y.id))]})]}),a.jsx(_h,{options:u.map(y=>({id:y.id,name:y.remarks})),value:o.route_id??[],onChange:y=>s("route_id",y),label:t("node.routingGroups")})]})]})}function lj({draft:o,set:s,onCancel:r,onSave:u}){const m=String(o._type),g=String(o.network??"tcp"),h=J0(m),v=o[h],S=K0(v)?Z0(v):F0(m,g);return a.jsx(zx,{initialValue:S,onCancel:r,onSave:w=>{s(h,w),u()}})}function ij({draft:o,set:s}){const{t:r}=Ke();return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"form-section-title",children:r("node.trojanConfig")}),a.jsx(xn,{label:r("node.allowInsecure"),checked:o.allow_insecure===1,onChange:u=>s("allow_insecure",u?1:0)})]})}function sj({draft:o,set:s,onOpenJson:r}){const{t:u}=Ke(),m=Yd(o,"obfs_settings");return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"form-section-title",children:u("node.shadowsocksConfig")}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.encryptionMethod"),required:!0}),a.jsx("select",{className:"config-input",value:tt(o,"cipher","aes-128-gcm"),onChange:g=>s("cipher",g.target.value),children:kx.map(g=>a.jsx("option",{value:g,children:g},g))})]}),a.jsxs("label",{style:{display:"block",marginTop:8},children:[a.jsx(De,{label:u("node.obfs"),actionText:o.obfs==="http"?u("node.editConfig"):void 0,onAction:()=>r(u("node.obfs"),"obfs_settings")}),a.jsxs("select",{className:"config-input",value:tt(o,"obfs"),onChange:g=>s("obfs",g.target.value||null),children:[a.jsx("option",{value:"",children:u("node.none")}),a.jsx("option",{value:"http",children:"HTTP"})]})]}),o.obfs==="http"&&a.jsxs("div",{className:"form-split",style:{marginTop:8},children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.obfsHost")}),a.jsx("input",{className:"config-input",value:String(m.host??""),onChange:g=>s("obfs_settings",{...m,host:g.target.value}),placeholder:"www.example.com"})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.obfsPath")}),a.jsx("input",{className:"config-input",value:String(m.path??""),onChange:g=>s("obfs_settings",{...m,path:g.target.value}),placeholder:"/"})]})]})]})}function oj({draft:o,set:s}){const{t:r}=Ke();return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"form-section-title",children:r("node.hysteriaConfig")}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:r("node.version"),required:!0}),a.jsxs("select",{className:"config-input",value:tt(o,"version","2"),onChange:u=>s("version",Number(u.target.value)),children:[a.jsx("option",{value:"1",children:"Hysteria 1"}),a.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),a.jsxs("div",{className:"form-split",style:{marginTop:8},children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:r("node.upMbps")}),a.jsx("input",{className:"config-input",type:"number",value:tt(o,"up_mbps","0"),onChange:u=>s("up_mbps",Number(u.target.value)),placeholder:r("node.upMbpsHelp")})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:r("node.downMbps")}),a.jsx("input",{className:"config-input",type:"number",value:tt(o,"down_mbps","0"),onChange:u=>s("down_mbps",Number(u.target.value)),placeholder:r("node.downMbpsHelp")})]})]}),a.jsxs("div",{className:"form-split",style:{marginTop:8},children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:r("node.obfsMethod")}),a.jsx("input",{className:"config-input",value:tt(o,"obfs"),onChange:u=>s("obfs",u.target.value||null),placeholder:r("node.obfsMethodHelp")})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:r("node.obfsPassword")}),a.jsx("input",{className:"config-input",value:tt(o,"obfs_password"),onChange:u=>s("obfs_password",u.target.value),placeholder:r("node.autoGenHelp")})]})]}),a.jsx(xn,{label:r("node.allowInsecure"),checked:o.insecure===1,onChange:u=>s("insecure",u?1:0)})]})}function rj({draft:o,set:s}){const{t:r}=Ke();return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"form-section-title",children:r("node.tuicConfig")}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:r("node.udpRelayMode")}),a.jsxs("select",{className:"config-input",value:tt(o,"udp_relay_mode","native"),onChange:u=>s("udp_relay_mode",u.target.value),children:[a.jsx("option",{value:"native",children:"native"}),a.jsx("option",{value:"quic",children:"quic"})]})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:r("node.congestionControl")}),a.jsxs("select",{className:"config-input",value:tt(o,"congestion_control","bbr"),onChange:u=>s("congestion_control",u.target.value),children:[a.jsx("option",{value:"bbr",children:"bbr"}),a.jsx("option",{value:"cubic",children:"cubic"}),a.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),a.jsx(xn,{label:r("node.allowInsecure"),checked:o.insecure===1,onChange:u=>s("insecure",u?1:0)}),a.jsx(xn,{label:r("node.disableSni"),checked:o.disable_sni===1,onChange:u=>s("disable_sni",u?1:0)}),a.jsx(xn,{label:r("node.enable0rtt"),checked:o.zero_rtt_handshake===1,onChange:u=>s("zero_rtt_handshake",u?1:0)})]})}function cj({draft:o,set:s,onOpenJson:r}){const{t:u}=Ke(),m=Number(o.tls??0),g=Yd(o,"tls_settings");return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"form-section-title",children:u("node.vlessConfig")}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.flow")}),a.jsxs("select",{className:"config-input",value:tt(o,"flow"),onChange:h=>s("flow",h.target.value||null),children:[a.jsx("option",{value:"",children:u("node.none")}),a.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.encryption"),actionText:tt(o,"encryption")?u("node.editConfig"):void 0,onAction:()=>r(u("node.encryption"),"encryption_settings")}),a.jsxs("select",{className:"config-input",value:tt(o,"encryption"),onChange:h=>s("encryption",h.target.value||null),children:[a.jsx("option",{value:"",children:u("node.none")}),a.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]}),m===2&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"form-section-title",children:u("node.realityConfig")}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.sni")}),a.jsx("input",{className:"config-input",value:String(g.server_name??""),onChange:h=>s("tls_settings",{...g,server_name:h.target.value})})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.servicePort")}),a.jsx("input",{className:"config-input",value:String(g.server_port??"443"),onChange:h=>s("tls_settings",{...g,server_port:h.target.value})})]})]}),a.jsxs("label",{style:{display:"block",marginTop:8},children:[a.jsx(De,{label:u("node.publicKey")}),a.jsx("input",{className:"config-input",value:String(g.public_key??""),onChange:h=>s("tls_settings",{...g,public_key:h.target.value}),placeholder:u("node.autoGenHelp")})]}),a.jsxs("label",{style:{display:"block",marginTop:8},children:[a.jsx(De,{label:u("node.privateKey")}),a.jsx("input",{className:"config-input",value:String(g.private_key??""),onChange:h=>s("tls_settings",{...g,private_key:h.target.value}),placeholder:u("node.autoGenHelp")})]}),a.jsxs("label",{style:{display:"block",marginTop:8},children:[a.jsx(De,{label:u("node.shortId")}),a.jsx("input",{className:"config-input",value:String(g.short_id??""),onChange:h=>s("tls_settings",{...g,short_id:h.target.value}),placeholder:u("node.autoGenHelp")})]})]})]})}function dj({draft:o,set:s,onOpenJson:r}){const{t:u}=Ke();return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"form-section-title",children:u("node.anytlsConfig")}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.paddingScheme"),actionText:u("node.editConfig"),onAction:()=>r(u("node.paddingScheme"),"padding_scheme")}),a.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof o.padding_scheme=="string"?o.padding_scheme:o.padding_scheme?JSON.stringify(o.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),a.jsx(xn,{label:u("node.allowInsecure"),checked:o.insecure===1,onChange:m=>s("insecure",m?1:0)})]})}function uj({draft:o,set:s,onOpenJson:r}){const{t:u}=Ke(),m=tt(o,"protocol","vless"),g=Number(o.tls??0),h=Yd(o,"tls_settings");return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"form-section-title",children:u("node.zicnodeConfig")}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.nodeProtocol"),required:!0}),a.jsx("select",{className:"config-input",value:m,onChange:v=>s("protocol",v.target.value),children:V0.map(v=>a.jsx("option",{value:v,children:v},v))})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.listenIp")}),a.jsx("input",{className:"config-input",value:tt(o,"listen_ip"),onChange:v=>s("listen_ip",v.target.value),placeholder:"0.0.0.0"})]})]}),a.jsxs("div",{className:"form-split",style:{marginTop:8},children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.flow")}),a.jsxs("select",{className:"config-input",value:tt(o,"flow"),onChange:v=>s("flow",v.target.value||null),children:[a.jsx("option",{value:"",children:u("node.none")}),a.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.encryption"),actionText:tt(o,"encryption")?u("node.editConfig"):void 0,onAction:()=>r(u("node.encryption"),"encryption_settings")}),a.jsxs("select",{className:"config-input",value:tt(o,"encryption"),onChange:v=>s("encryption",v.target.value||null),children:[a.jsx("option",{value:"",children:u("node.none")}),a.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]}),g===2&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"form-section-title",children:u("node.realityConfig")}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.sni")}),a.jsx("input",{className:"config-input",value:String(h.server_name??""),onChange:v=>s("tls_settings",{...h,server_name:v.target.value})})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.servicePort")}),a.jsx("input",{className:"config-input",value:String(h.server_port??"443"),onChange:v=>s("tls_settings",{...h,server_port:v.target.value})})]})]}),a.jsxs("label",{style:{display:"block",marginTop:8},children:[a.jsx(De,{label:u("node.publicKey")}),a.jsx("input",{className:"config-input",value:String(h.public_key??""),onChange:v=>s("tls_settings",{...h,public_key:v.target.value}),placeholder:u("node.autoGenHelp")})]}),a.jsxs("label",{style:{display:"block",marginTop:8},children:[a.jsx(De,{label:u("node.privateKey")}),a.jsx("input",{className:"config-input",value:String(h.private_key??""),onChange:v=>s("tls_settings",{...h,private_key:v.target.value}),placeholder:u("node.autoGenHelp")})]}),a.jsxs("label",{style:{display:"block",marginTop:8},children:[a.jsx(De,{label:u("node.shortId")}),a.jsx("input",{className:"config-input",value:String(h.short_id??""),onChange:v=>s("tls_settings",{...h,short_id:v.target.value}),placeholder:u("node.autoGenHelp")})]})]}),m==="shadowsocks"&&a.jsxs("label",{style:{display:"block",marginTop:8},children:[a.jsx(De,{label:u("node.encryptionMethod")}),a.jsx("select",{className:"config-input",value:tt(o,"cipher","aes-128-gcm"),onChange:v=>s("cipher",v.target.value),children:kx.map(v=>a.jsx("option",{value:v,children:v},v))})]}),m==="hysteria2"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"form-split",style:{marginTop:8},children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.upMbps")}),a.jsx("input",{className:"config-input",type:"number",value:tt(o,"up_mbps","0"),onChange:v=>s("up_mbps",Number(v.target.value)),placeholder:"0 = BBR"})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.downMbps")}),a.jsx("input",{className:"config-input",type:"number",value:tt(o,"down_mbps","0"),onChange:v=>s("down_mbps",Number(v.target.value)),placeholder:"0 = BBR"})]})]}),a.jsxs("div",{className:"form-split",style:{marginTop:8},children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.obfsMethod")}),a.jsx("input",{className:"config-input",value:tt(o,"obfs"),onChange:v=>s("obfs",v.target.value||null)})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.obfsPassword")}),a.jsx("input",{className:"config-input",value:tt(o,"obfs_password"),onChange:v=>s("obfs_password",v.target.value)})]})]})]}),m==="tuic"&&a.jsxs("div",{className:"form-split",style:{marginTop:8},children:[a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.udpRelayMode")}),a.jsxs("select",{className:"config-input",value:tt(o,"udp_relay_mode","native"),onChange:v=>s("udp_relay_mode",v.target.value),children:[a.jsx("option",{value:"native",children:"native"}),a.jsx("option",{value:"quic",children:"quic"})]})]}),a.jsxs("label",{style:{display:"block"},children:[a.jsx(De,{label:u("node.congestionControl")}),a.jsxs("select",{className:"config-input",value:tt(o,"congestion_control","bbr"),onChange:v=>s("congestion_control",v.target.value),children:[a.jsx("option",{value:"bbr",children:"bbr"}),a.jsx("option",{value:"cubic",children:"cubic"}),a.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),m==="anytls"&&a.jsxs("label",{style:{display:"block",marginTop:8},children:[a.jsx(De,{label:u("node.paddingScheme"),actionText:u("node.editConfig"),onAction:()=>r(u("node.paddingScheme"),"padding_scheme")}),a.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof o.padding_scheme=="string"?o.padding_scheme:o.padding_scheme?JSON.stringify(o.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),a.jsx(xn,{label:u("node.disableSni"),checked:o.disable_sni===1,onChange:v=>s("disable_sni",v?1:0)}),a.jsx(xn,{label:u("node.enable0rtt"),checked:o.zero_rtt_handshake===1,onChange:v=>s("zero_rtt_handshake",v?1:0)})]})}const Sh={vmess:Av,vless:$v,trojan:kd,shadowsocks:Lo,hysteria:Ev,tuic:hv,anytls:ps,v2node:ih,zicnode:ih},pj={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},mj={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function Yn(o){return pj[o]??mj}function fj({draft:o,config:s,onCopy:r,t:u}){const m=Number(o.id??0),g=m>0?ej(m,s):"",h=!s.apiKey;return a.jsxs("div",{className:"node-install-panel",children:[a.jsxs("div",{className:"node-install-head",children:[a.jsx("strong",{children:u("node.quickInstallTitle")}),a.jsx("span",{children:u("node.quickInstallHelp")})]}),m>0?a.jsxs(a.Fragment,{children:[a.jsx("pre",{className:"node-install-command",children:g}),a.jsxs("div",{className:"node-install-actions",children:[a.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>r(g),children:[a.jsx(rs,{size:15}),u("node.copyInstallCommand")]}),h?a.jsx("span",{className:"node-install-warning",children:u("node.installMissingConfig")}):null]})]}):a.jsx("div",{className:"node-install-warning",children:u("node.installSaveFirst")})]})}function hj(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState([]),[m,g]=f.useState([]),[h,v]=f.useState([]),[S,w]=f.useState(null),[y,j]=f.useState(null),[B,X]=f.useState(!0),[te,K]=f.useState(!1),[z,G]=f.useState(""),[U,O]=f.useState(""),[ee,se]=f.useState(1),[ce,E]=f.useState(10),[$,le]=f.useState(!1),[he,N]=f.useState({}),[R,ae]=f.useState({apiHost:Gd,apiKey:""}),[M,re]=f.useState(!1),[A,F]=f.useState(""),[x,P]=f.useState(null),[H,k]=f.useState(null),[Z,ue]=f.useState(null),pe=(L,de)=>{L.dataTransfer.effectAllowed="move",k(de)},Se=(L,de)=>{if(L.preventDefault(),H===null||H===de)return;const oe=[...r],Oe=oe[H];oe.splice(H,1),oe.splice(de,0,Oe),k(de),u(oe)},ke=()=>{k(null)},Re=(L,de)=>{$&&ue(de)},mt=L=>{if(!$||Z===null)return;L.cancelable&&L.preventDefault();const de=L.touches[0],oe=document.elementFromPoint(de.clientX,de.clientY);if(!oe)return;const Oe=oe.closest(".mobile-node-card");if(!Oe)return;const Te=Oe.getAttribute("data-index");if(Te===null)return;const We=Number(Te);if(We!==Z&&We>=0&&We<r.length){const nt=[...r],Me=nt[Z];nt.splice(Z,1),nt.splice(We,0,Me),ue(We),u(nt)}},Ge=()=>{ue(null)};f.useEffect(()=>{se(1)},[A,ce]);const Pe=r.filter(L=>{const de=A.toLowerCase().trim();return de?L.name.toLowerCase().includes(de)||L.host.toLowerCase().includes(de)||String(L.id).includes(de)||L.type.toLowerCase().includes(de):!0}),Lt=Math.ceil(Pe.length/ce),Mt=Pe.slice((ee-1)*ce,ee*ce);function ua(L,de){return de<=7?Array.from({length:de},(oe,Oe)=>Oe+1):L<=4?[1,2,3,4,5,"...",de]:L>=de-3?[1,"...",de-4,de-3,de-2,de-1,de]:[1,"...",L-1,L,L+1,"...",de]}const yt=ua(ee,Lt),aa=async()=>{var L,de;K(!0),G(""),O("");try{const oe={};r.forEach((Oe,Te)=>{oe[Oe.type]||(oe[Oe.type]={}),oe[Oe.type][String(Oe.id)]=Te+1}),await c0(oe),(L=window.showToast)==null||L.call(window,s("node.saveSortSuccess"),"success"),le(!1),await ze()}catch(oe){G(oe instanceof Error?oe.message:s("node.saveSortFailed")),(de=window.showToast)==null||de.call(window,oe instanceof Error?oe.message:s("node.saveSortFailed"),"error")}finally{K(!1)}},Yt=async()=>{le(!1),await we()},pa=()=>Pe.length===0?null:a.jsxs("div",{className:"node-pagination",children:[a.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ee===1,onClick:()=>se(L=>Math.max(L-1,1)),children:"<"}),yt.map((L,de)=>L==="..."?a.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${de}`):a.jsx("button",{type:"button",className:`pagination-btn num-btn ${ee===L?"active":""}`,onClick:()=>se(Number(L)),children:L},`page-${L}`)),a.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ee===Lt||Lt===0,onClick:()=>se(L=>Math.min(L+1,Lt)),children:">"}),a.jsx("div",{className:"pagination-size-select-wrapper",children:a.jsxs("select",{className:"pagination-size-select",value:ce,onChange:L=>E(Number(L.target.value)),children:[a.jsxs("option",{value:10,children:["10 / ",s("common.perPage")]}),a.jsxs("option",{value:20,children:["20 / ",s("common.perPage")]}),a.jsxs("option",{value:50,children:["50 / ",s("common.perPage")]}),a.jsxs("option",{value:100,children:["100 / ",s("common.perPage")]})]})})]}),[ft,Qt]=f.useState(null),[Wt,St]=f.useState(!1),[ma,T]=f.useState(""),[ye,qe]=f.useState(!1),[ve,ot]=f.useState(!1);async function Y(L){var oe,Oe;L.preventDefault();const de=ma.trim();if(!(!de||!S)){qe(!0),G(""),O("");try{await px({name:de});const Te=await us();g(Te);const We=Te.filter(nt=>nt.name===de).sort((nt,Me)=>Me.id-nt.id)[0];if(We){const nt=S.group_id??[];nt.includes(We.id)||fa("group_id",[...nt,We.id])}T(""),St(!1),(oe=window.showToast)==null||oe.call(window,s("node.groupCreateSuccess"),"success")}catch(Te){G(Te instanceof Error?Te.message:s("node.groupCreateFailed")),(Oe=window.showToast)==null||Oe.call(window,Te instanceof Error?Te.message:s("node.groupCreateFailed"),"error")}finally{qe(!1)}}}const Ne=(L,de)=>{if(!S)return;let oe=S[de];if(typeof oe=="string"&&oe.trim())try{oe=JSON.parse(oe)}catch{}Qt({title:L,key:de,value:oe&&typeof oe=="object"?oe:{}})},we=f.useCallback(async()=>{var L,de,oe;X(!0),G("");try{const[Oe,Te,We,nt]=await Promise.all([hh(),us(),fx(),dx()]);u(Oe.data),g(Te),v(We),ae({apiHost:I0((L=nt.site)==null?void 0:L.app_url),apiKey:Cx((de=nt.server)==null?void 0:de.server_token)}),re(P0((oe=nt.subscribe)==null?void 0:oe.device_hwid_enable))}catch(Oe){G(Oe instanceof Error?Oe.message:s("knowledge.loadFailed"))}finally{X(!1)}},[]),ze=f.useCallback(async()=>{try{const L=await hh();u(L.data)}catch(L){console.error("Refresh nodes failed",L)}},[]);async function Fe(L){var oe;const de=await Kn(L);(oe=window.showToast)==null||oe.call(window,s(de?"node.installCopied":"common.copyFailed"),de?"success":"error")}f.useEffect(()=>{if(!Et()){o.replace("/login");return}we()},[we,o]);function Qe(L){w(Nh(L)),j(null),G(""),O("")}function Ye(L){w(Nh(L.type,L)),G(""),O("")}function He(L){!M||Number(L.online??0)<=0||o.push(`/device?node_type=${encodeURIComponent(L.type)}&node_id=${encodeURIComponent(String(L.id))}`)}function rt(L,de){const oe=Number(L.online??0),Oe=M&&oe>0,Te=`${de==="mobile"?"mobile-badge-pill":"online-badge"}${Oe?" online-badge-link":""}`,We=de==="mobile"?12:13,nt={...de==="mobile"?{marginRight:4}:{},color:oe>0?"#10b981":"var(--muted)",opacity:oe>0?1:.6},Me=a.jsxs(a.Fragment,{children:[a.jsx(ox,{size:We,style:nt}),oe]});return Oe?a.jsx("button",{className:Te,type:"button",title:s("node.viewOnlineDevices"),onClick:()=>He(L),children:Me}):a.jsx("span",{className:Te,children:Me})}async function wl(L){var We,nt;if(L.preventDefault(),!S)return;K(!0),G(""),O("");const de=String(S._type),oe={...S};for(const Me of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete oe[Me];if(oe.padding_scheme!==void 0&&oe.padding_scheme!==null&&typeof oe.padding_scheme!="string"&&(oe.padding_scheme=JSON.stringify(oe.padding_scheme)),oe.padding_scheme)try{const Me=JSON.parse(String(oe.padding_scheme));if(typeof Me!="object"||Me===null)throw new Error("Invalid JSON array or object")}catch(Me){G("Invalid Padding Scheme configuration: "+(Me instanceof Error?Me.message:"JSON error")),K(!1);return}const Oe=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const Me of Oe)(oe[Me]===""||oe[Me]===null||oe[Me]===void 0)&&delete oe[Me];const Te=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings"];for(const Me of Te){const ha=oe[Me];(ha==null||typeof ha=="object"&&Object.keys(ha).length===0)&&delete oe[Me]}oe.port!==void 0&&(oe.port=Number(oe.port)),oe.server_port!==void 0&&(oe.server_port=Number(oe.server_port)),oe.tls!==void 0&&(oe.tls=Number(oe.tls)),oe.rate!==void 0&&(oe.rate=Number(oe.rate));try{await i0(de,oe),w(null),(We=window.showToast)==null||We.call(window,s("node.saveSuccess"),"success"),await ze()}catch(Me){G(Me instanceof Error?Me.message:s("node.saveFailed")),(nt=window.showToast)==null||nt.call(window,Me instanceof Error?Me.message:s("node.saveFailed"),"error")}finally{K(!1)}}async function Wn(L){const de=[...r];u(oe=>oe.map(Oe=>Oe.id===L.id&&Oe.type===L.type?{...Oe,show:L.show?0:1}:Oe));try{await o0(L.type,L.id,L.show?0:1),await ze()}catch(oe){u(de),G(oe instanceof Error?oe.message:s("node.updateFailed"))}}async function Pn(L){var de,oe;try{await r0(L.type,L.id),(de=window.showToast)==null||de.call(window,s("node.copySuccess"),"success"),await ze()}catch(Oe){G(Oe instanceof Error?Oe.message:s("node.copyFailed")),(oe=window.showToast)==null||oe.call(window,Oe instanceof Error?Oe.message:s("node.copyFailed"),"error")}}async function Ya(L){var de;(de=window.showConfirm)==null||de.call(window,{message:s("node.deleteConfirm",{name:L.name}),onConfirm:async()=>{var Oe,Te;const oe=[...r];u(We=>We.filter(nt=>!(nt.id===L.id&&nt.type===L.type))),G("");try{await s0(L.type,L.id),(Oe=window.showToast)==null||Oe.call(window,s("node.deleteSuccess"),"success"),await ze()}catch(We){u(oe),G(We instanceof Error?We.message:s("node.deleteFailed")),(Te=window.showToast)==null||Te.call(window,We instanceof Error?We.message:s("node.deleteFailed"),"error")}}})}const fa=(L,de)=>w(oe=>oe?{...oe,[L]:de}:null),$a=S?String(S._type):"",ea=W0($a);return a.jsxs(Gt,{title:s("node.title"),subtitle:s("node.subtitle"),children:[a.jsxs("div",{className:"node-toolbar-desktop",children:[a.jsxs("div",{className:"left-toolbar-group",children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>j(y?null:"show"),title:s("node.createNode"),children:a.jsx(ka,{size:18})}),y!==null&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),a.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[a.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[a.jsx("div",{className:"mobile-sheet-handle"}),a.jsx("h3",{className:"mobile-sheet-title",children:s("node.selectProtocolTitle")}),a.jsx("p",{className:"mobile-sheet-subtitle",children:s("node.selectProtocolSubtitle")})]}),Md.map(L=>{const de=Yn(L.value),oe=Sh[L.value]||qo;return a.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Qe(L.value),j(null)},children:[a.jsx("div",{className:"protocol-icon-wrapper",style:{color:de==null?void 0:de.bg,backgroundColor:de==null?void 0:de.rowBg},children:a.jsx(oe,{size:20})}),a.jsx("span",{className:"protocol-badge",style:{backgroundColor:(de==null?void 0:de.bg)??"var(--surface-soft)",color:(de==null?void 0:de.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),a.jsx("div",{className:"desktop-search-wrap",children:a.jsx("input",{type:"text",className:"desktop-search-input",value:A,onChange:L=>F(L.target.value),placeholder:`${s("common.search")}...`})})]}),a.jsxs("div",{className:"right-toolbar-group",children:[a.jsx("button",{className:`primary-button ${$?"success-btn":""}`,type:"button",onClick:$?aa:()=>le(!0),disabled:te,children:s($?te?"node.saving":"node.saveOrder":"node.editSortOrder")}),$&&a.jsx("button",{className:"ghost-button",type:"button",onClick:Yt,children:s("common.cancel")})]})]}),z?a.jsx("div",{className:"form-error",children:z}):null,U?a.jsx("div",{className:"form-success",children:U}):null,B&&r.length===0?a.jsx(gt,{label:s("common.loading")}):null,a.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:s("common.id")}),a.jsx("th",{children:s("node.colShow")}),a.jsx("th",{children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[s("node.colName"),a.jsxs("span",{className:"status-help-trigger",children:["?",a.jsxs("span",{className:"status-help-tooltip",children:[a.jsxs("span",{className:"tooltip-item",children:[a.jsx("span",{className:"tooltip-dot red"})," ",s("node.statusInactive")]}),a.jsxs("span",{className:"tooltip-item",children:[a.jsx("span",{className:"tooltip-dot orange"})," ",s("node.statusError")]}),a.jsxs("span",{className:"tooltip-item",children:[a.jsx("span",{className:"tooltip-dot blue"})," ",s("node.statusNormal")]})]})]})]})}),a.jsx("th",{children:s("node.colOnline")}),a.jsx("th",{className:"mobile-hide",children:s("node.address")}),a.jsx("th",{className:"mobile-hide",children:s("node.colPort")}),a.jsx("th",{className:"mobile-hide",children:s("node.colRate")}),a.jsx("th",{children:s("node.colGroups")}),a.jsx("th",{children:s($?"node.colSort":"common.actions")})]})}),a.jsxs("tbody",{children:[Mt.map(L=>{const de=r.findIndex(oe=>oe.id===L.id&&oe.type===L.type);return a.jsxs("tr",{draggable:$,onDragStart:oe=>pe(oe,de),onDragOver:oe=>Se(oe,de),onDragEnd:ke,className:H===de?"dragging":"",children:[a.jsx("td",{children:a.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Yn(L.type).bg,color:Yn(L.type).text,border:`1px solid ${Yn(L.type).border}`},children:L.id})}),a.jsx("td",{children:a.jsx("button",{className:`admin-switch ${L.show?"active":""}`,type:"button",onClick:()=>void Wn(L),children:a.jsx("span",{className:"admin-switch-thumb"})})}),a.jsx("td",{children:a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?s("node.statusNormal"):L.available_status===1?s("node.statusError"):s("node.statusInactive")}),a.jsx("strong",{children:L.name})]})}),a.jsx("td",{children:rt(L,"desktop")}),a.jsx("td",{className:"mobile-hide",children:a.jsx("span",{className:"mono",children:L.host})}),a.jsx("td",{className:"mobile-hide",children:String(L.server_port)}),a.jsxs("td",{className:"mobile-hide",children:[L.rate,"x"]}),a.jsx("td",{children:a.jsx("div",{className:"match-tags",children:(()=>{const oe=L.group_id??[],Oe=he[`${L.type}-${L.id}`],Te=oe.map(Me=>{const ha=m.find(_=>Number(_.id)===Number(Me));return a.jsx("span",{className:"tag",children:(ha==null?void 0:ha.name)??`#${Me}`},Me)});if(oe.length<=3||Oe)return a.jsxs(a.Fragment,{children:[Te,oe.length>3&&a.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>N(Me=>({...Me,[`${L.type}-${L.id}`]:!1})),children:s("node.collapse")})]});const We=Te.slice(0,3),nt=oe.length-3;return a.jsxs(a.Fragment,{children:[We,a.jsxs("div",{className:"group-tooltip-container",children:[a.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>N(Me=>({...Me,[`${L.type}-${L.id}`]:!0})),children:["+",nt,"..."]}),a.jsxs("div",{className:"group-tooltip",children:[a.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:s("node.allPermissionGroups",{count:oe.length})}),Te]})]})]})})()})}),a.jsx("td",{children:$?a.jsx("div",{className:"drag-handle",title:s("node.dragDropHelp"),children:a.jsx(is,{size:18})}):a.jsxs("div",{className:`action-dropdown-wrap ${(x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[a.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>P((x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type?null:{id:L.id,type:L.type}),children:[s("common.actions")," ",a.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"action-dropdown-overlay",onClick:()=>P(null)}),a.jsxs("div",{className:"action-dropdown-menu",children:[a.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ye(L),P(null)},children:[a.jsx(Ht,{size:14})," ",s("common.edit")]}),a.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Pn(L),P(null)},children:[a.jsx(rs,{size:14})," ",s("common.copy")]}),a.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Ya(L),P(null)},children:[a.jsx(Bt,{size:14})," ",s("common.delete")]})]})]})]})})]},`${L.type}-${L.id}`)}),!B&&Pe.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:9,children:a.jsx("div",{className:"empty-state",children:s("node.noNodesFound")})})}):null]})]})}),pa()]}),a.jsxs("div",{className:"mobile-node-toolbar",children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>j(y?null:"show"),title:s("node.createNode"),children:a.jsx(ka,{size:20})}),y!==null&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),a.jsxs("div",{className:"dropdown-menu",children:[a.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[a.jsx("div",{className:"mobile-sheet-handle"}),a.jsx("h3",{className:"mobile-sheet-title",children:s("node.selectProtocolTitle")}),a.jsx("p",{className:"mobile-sheet-subtitle",children:s("node.selectProtocolSubtitle")})]}),Md.map(L=>{const de=Yn(L.value),oe=Sh[L.value]||qo;return a.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Qe(L.value),j(null)},children:[a.jsx("div",{className:"protocol-icon-wrapper",style:{color:de==null?void 0:de.bg,backgroundColor:de==null?void 0:de.rowBg},children:a.jsx(oe,{size:20})}),a.jsx("span",{className:"protocol-badge",style:{backgroundColor:(de==null?void 0:de.bg)??"var(--surface-soft)",color:(de==null?void 0:de.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),a.jsx("div",{className:"mobile-search-wrap",children:a.jsx("input",{type:"text",className:"mobile-search-input",value:A,onChange:L=>F(L.target.value),placeholder:`${s("common.search")}...`})}),a.jsx("button",{className:`mobile-sort-btn ${$?"active":""}`,type:"button",onClick:()=>le(!$),title:s("node.editSortOrder"),children:a.jsx(is,{size:20})})]}),$&&a.jsxs("div",{className:"mobile-sorting-bar",children:[a.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:s("node.dragDropHelp")}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:Yt,style:{minHeight:30,padding:"0 10px",fontSize:12},children:s("common.cancel")}),a.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void aa(),disabled:te,style:{minHeight:30,padding:"0 10px",fontSize:12},children:s(te?"node.saving":"common.save")})]})]}),a.jsxs("div",{className:"mobile-node-list",children:[Mt.map(L=>{const de=r.findIndex(oe=>oe.id===L.id&&oe.type===L.type);return a.jsxs("div",{className:`mobile-node-card ${H===de||Z===de?"dragging":""}`,draggable:$,onDragStart:oe=>pe(oe,de),onDragOver:oe=>Se(oe,de),onDragEnd:ke,onTouchStart:oe=>Re(oe,de),onTouchMove:mt,onTouchEnd:Ge,"data-index":de,style:$?{touchAction:"none"}:void 0,children:[a.jsxs("div",{className:"card-header-row",children:[a.jsxs("div",{className:"card-header-left",children:[a.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?s("node.statusNormal"):L.available_status===1?s("node.statusError"):s("node.statusInactive")}),a.jsx("span",{className:"mobile-node-name",children:L.name})]}),a.jsx("div",{className:"card-header-right",children:$?a.jsx("div",{className:"drag-handle",title:s("node.dragDropHelp"),children:a.jsx(is,{size:18})}):a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",className:`admin-switch ${L.show===1?"active":""}`,onClick:()=>void Wn(L),children:a.jsx("span",{className:"admin-switch-thumb"})}),a.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),a.jsxs("div",{className:`action-dropdown-wrap ${(x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[a.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>P((x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type?null:{id:L.id,type:L.type}),children:[s("common.actions")," ",a.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"action-dropdown-overlay",onClick:()=>P(null)}),a.jsxs("div",{className:"action-dropdown-menu",children:[a.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ye(L),P(null)},children:[a.jsx(Ht,{size:14})," ",s("common.edit")]}),a.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Pn(L),P(null)},children:[a.jsx(rs,{size:14})," ",s("common.copy")]}),a.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Ya(L),P(null)},children:[a.jsx(Bt,{size:14})," ",s("common.delete")]})]})]})]})]})})]}),a.jsx("div",{className:"card-middle-row",children:a.jsxs("span",{className:"mobile-node-address",children:[L.host,":",L.port||L.server_port]})}),a.jsxs("div",{className:"card-bottom-row",children:[a.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Yn(L.type).bg,color:Yn(L.type).text,border:`1px solid ${Yn(L.type).border}`},children:L.id}),rt(L,"mobile"),a.jsxs("span",{className:"mobile-badge-pill",children:[L.rate," x"]})]})]},`${L.type}-${L.id}`)}),!B&&Pe.length===0&&a.jsx("div",{className:"empty-state",children:s("node.noNodesFound")}),pa()]}),S!==null&&a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:S.id?s("node.editNodeTitle",{type:ea}):s("node.createNodeTitle",{type:ea})}),a.jsx("p",{children:s("node.configureFieldsSubtitle",{type:ea})})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:wl,children:[a.jsx(nj,{draft:S,set:fa,groups:m,routes:h,nodes:r,onOpenJson:Ne,onAddGroup:()=>St(!0),onOpenTransportConfig:()=>ot(!0)}),yl($a)?a.jsx(fj,{draft:S,config:R,onCopy:L=>void Fe(L),t:s}):null,a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>w(null),children:s("common.cancel")}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:te,children:[a.jsx(Ca,{size:16}),s(te?"node.saving":"common.save")]})]})]})]})}),ft!==null&&a.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:a.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:600,width:"95%",zIndex:160},children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:ft.title}),a.jsx("p",{children:["tlsSettings","tls_settings"].includes(ft.key)?s("node.tlsEditorSubtitle"):s("node.jsonEditorSubtitle")})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>Qt(null),children:a.jsx(st,{size:18})})]}),a.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(ft.key)?a.jsx(aj,{initialValue:ft.value,isSnakeCase:ft.key==="tls_settings",onCancel:()=>Qt(null),onSave:L=>{fa(ft.key,L),Qt(null)}}):a.jsx(zx,{initialValue:ft.value,onCancel:()=>Qt(null),onSave:L=>{fa(ft.key,L),Qt(null)}})})]})}),Wt&&a.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:a.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("node.addNewGroupTitle")}),a.jsx("p",{children:s("node.addNewGroupSubtitle")})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>St(!1),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{onSubmit:Y,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[a.jsxs("label",{style:{display:"grid",gap:6},children:[a.jsx("span",{style:{fontSize:13,fontWeight:800},children:s("node.groupName")}),a.jsx("input",{className:"config-input",required:!0,value:ma,onChange:L=>T(L.target.value),placeholder:s("node.groupName"),autoFocus:!0})]}),a.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>St(!1),disabled:ye,children:s("common.cancel")}),a.jsx("button",{className:"primary-button",type:"submit",disabled:ye||!ma.trim(),children:s(ye?"node.saving":"common.confirm")})]})]})]})}),ve&&S!==null&&a.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:a.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("node.transportConfigTitle",{network:String(S.network??"tcp").toUpperCase()})}),a.jsx("p",{children:s("node.transportConfigSubtitle")})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>ot(!1),children:a.jsx(st,{size:18})})]}),a.jsx("div",{style:{padding:"18px"},children:a.jsx(lj,{draft:S,set:fa,onCancel:()=>ot(!1),onSave:()=>ot(!1)})})]})})]})}function xj(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState([]),[m,g]=f.useState(null),[h,v]=f.useState(!0),[S,w]=f.useState(!1),[y,j]=f.useState(""),B=f.useCallback(async()=>{v(!0),j("");try{u(await us())}catch(z){j(z instanceof Error?z.message:s("serverGroup.loadFailed"))}finally{v(!1)}},[s]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}B()},[B,o]);function X(z){g({id:z==null?void 0:z.id,name:(z==null?void 0:z.name)??""}),j("")}async function te(z){var G;if(z.preventDefault(),!!m){w(!0),j("");try{await px(m),g(null),(G=window.showToast)==null||G.call(window,s("serverGroup.saveSuccess"),"success"),await B()}catch(U){j(U instanceof Error?U.message:s("serverGroup.saveFailed"))}finally{w(!1)}}}async function K(z){var G;(G=window.showConfirm)==null||G.call(window,{message:s("serverGroup.deleteConfirm"),onConfirm:async()=>{var U,O;j("");try{await u1(z),(U=window.showToast)==null||U.call(window,s("serverGroup.deleteSuccess"),"success"),await B()}catch(ee){j(ee instanceof Error?ee.message:s("serverGroup.deleteFailed")),(O=window.showToast)==null||O.call(window,ee instanceof Error?ee.message:s("serverGroup.deleteFailed"),"error")}}})}return a.jsxs(Gt,{title:s("serverGroup.title"),subtitle:s("serverGroup.subtitle"),children:[a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("serverGroup.heading")}),a.jsx("p",{children:s("serverGroup.headingHelp")})]}),a.jsxs("div",{className:"button-row",children:[a.jsxs("button",{className:"ghost-button",type:"button",onClick:B,disabled:h,children:[a.jsx(_t,{size:16}),s(h?"common.refreshing":"common.refresh")]}),a.jsxs("button",{className:"primary-button",type:"button",onClick:()=>X(),children:[a.jsx(ka,{size:16}),s("serverGroup.add")]})]})]}),y?a.jsx("div",{className:"form-error",children:y}):null,h&&r.length===0?a.jsx(gt,{label:s("serverGroup.loading")}):null,a.jsx("section",{className:"panel table-panel",children:a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:s("serverGroup.id")}),a.jsx("th",{children:s("serverGroup.name")}),a.jsx("th",{children:s("serverGroup.userCount")}),a.jsx("th",{children:s("serverGroup.serverCount")}),a.jsx("th",{children:s("common.actions")})]})}),a.jsxs("tbody",{children:[r.map(z=>a.jsxs("tr",{children:[a.jsx("td",{children:z.id}),a.jsx("td",{children:a.jsx("strong",{children:z.name})}),a.jsx("td",{children:a.jsxs("span",{className:"inline-badge",children:[a.jsx(ds,{size:14}),z.user_count??0]})}),a.jsx("td",{children:a.jsxs("span",{className:"inline-badge",children:[a.jsx(qo,{size:14}),z.server_count??0]})}),a.jsx("td",{children:a.jsxs("div",{className:"row-actions",children:[a.jsxs("button",{className:"mini-button",type:"button",onClick:()=>X(z),children:[a.jsx(Ht,{size:14}),s("common.edit")]}),a.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void K(z.id),children:[a.jsx(Bt,{size:14}),s("common.delete")]})]})})]},z.id)),!h&&r.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:5,children:a.jsx("div",{className:"empty-state",children:s("serverGroup.empty")})})}):null]})]})})}),m?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:m.id?s("serverGroup.edit"):s("serverGroup.add")}),a.jsx("p",{children:s("serverGroup.modalHelp")})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:te,children:[a.jsxs("label",{children:[a.jsx("span",{children:s("serverGroup.name")}),a.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:z=>g({...m,name:z.target.value}),placeholder:s("serverGroup.namePlaceholder")})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:s("common.cancel")}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:S,children:[a.jsx(Ca,{size:16}),s(S?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function gj(o){return{id:o==null?void 0:o.id,remarks:(o==null?void 0:o.remarks)??"",match:Array.isArray(o==null?void 0:o.match)?o.match.join(`
`):"",action:(o==null?void 0:o.action)??"block",action_value:(o==null?void 0:o.action_value)??""}}function bj(o){var s;return((s=mx.find(r=>r.value===o))==null?void 0:s.label)??o}function yj(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState([]),[m,g]=f.useState(null),[h,v]=f.useState(!0),[S,w]=f.useState(!1),[y,j]=f.useState(""),B=f.useCallback(async()=>{v(!0),j("");try{u(await fx())}catch(z){j(z instanceof Error?z.message:s("serverRoute.loadFailed"))}finally{v(!1)}},[s]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}B()},[B,o]);function X(z){g(gj(z)),j("")}async function te(z){var U;if(z.preventDefault(),!m)return;w(!0),j("");const G=m.action==="default_out"?[]:m.match.split(`
`).map(O=>O.trim()).filter(Boolean);try{await p1({id:m.id,remarks:m.remarks,match:G,action:m.action,action_value:m.action_value||null}),g(null),(U=window.showToast)==null||U.call(window,s("serverRoute.saveSuccess"),"success"),await B()}catch(O){j(O instanceof Error?O.message:s("serverRoute.saveFailed"))}finally{w(!1)}}async function K(z){var G;(G=window.showConfirm)==null||G.call(window,{message:s("serverRoute.deleteConfirm"),onConfirm:async()=>{var U,O;j("");try{await m1(z),(U=window.showToast)==null||U.call(window,s("serverRoute.deleteSuccess"),"success"),await B()}catch(ee){j(ee instanceof Error?ee.message:s("serverRoute.deleteFailed")),(O=window.showToast)==null||O.call(window,ee instanceof Error?ee.message:s("serverRoute.deleteFailed"),"error")}}})}return a.jsxs(Gt,{title:s("serverRoute.title"),subtitle:s("serverRoute.subtitle"),children:[a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("serverRoute.heading")}),a.jsx("p",{children:s("serverRoute.headingHelp")})]}),a.jsxs("div",{className:"button-row",children:[a.jsxs("button",{className:"ghost-button",type:"button",onClick:B,disabled:h,children:[a.jsx(_t,{size:16}),s(h?"common.refreshing":"common.refresh")]}),a.jsxs("button",{className:"primary-button",type:"button",onClick:()=>X(),children:[a.jsx(ka,{size:16}),s("serverRoute.add")]})]})]}),y?a.jsx("div",{className:"form-error",children:y}):null,h&&r.length===0?a.jsx(gt,{label:s("serverRoute.loading")}):null,a.jsx("section",{className:"panel table-panel",children:a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:s("serverRoute.id")}),a.jsx("th",{children:s("serverRoute.remarks")}),a.jsx("th",{children:s("serverRoute.matchValues")}),a.jsx("th",{children:s("serverRoute.action")}),a.jsx("th",{children:s("serverRoute.actionValue")}),a.jsx("th",{children:s("common.actions")})]})}),a.jsxs("tbody",{children:[r.map(z=>a.jsxs("tr",{children:[a.jsx("td",{children:z.id}),a.jsx("td",{children:a.jsx("strong",{children:z.remarks})}),a.jsx("td",{children:a.jsxs("div",{className:"match-tags",children:[(Array.isArray(z.match)?z.match:[]).slice(0,3).map((G,U)=>a.jsx("span",{className:"tag",children:G},U)),Array.isArray(z.match)&&z.match.length>3?a.jsxs("span",{className:"tag muted-tag",children:["+",z.match.length-3]}):null,!Array.isArray(z.match)||z.match.length===0?a.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),a.jsx("td",{children:a.jsx("span",{className:"status-pill enabled",children:bj(z.action)})}),a.jsx("td",{children:z.action_value||"—"}),a.jsx("td",{children:a.jsxs("div",{className:"row-actions",children:[a.jsxs("button",{className:"mini-button",type:"button",onClick:()=>X(z),children:[a.jsx(Ht,{size:14}),s("common.edit")]}),a.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void K(z.id),children:[a.jsx(Bt,{size:14}),s("common.delete")]})]})})]},z.id)),!h&&r.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,children:a.jsx("div",{className:"empty-state",children:s("serverRoute.empty")})})}):null]})]})})}),m?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:m.id?s("serverRoute.edit"):s("serverRoute.add")}),a.jsx("p",{children:s("serverRoute.modalHelp")})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:te,children:[a.jsxs("label",{children:[a.jsx("span",{children:s("serverRoute.remarks")}),a.jsx("input",{className:"config-input",required:!0,value:m.remarks,onChange:z=>g({...m,remarks:z.target.value}),placeholder:s("serverRoute.remarksPlaceholder")})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("serverRoute.action")}),a.jsx("select",{className:"config-input",value:m.action,onChange:z=>g({...m,action:z.target.value}),children:mx.map(z=>a.jsx("option",{value:z.value,children:z.label},z.value))})]}),m.action!=="default_out"?a.jsxs("label",{children:[a.jsx("span",{children:s("serverRoute.matchValues")}),a.jsx("textarea",{className:"config-input",rows:6,value:m.match,onChange:z=>g({...m,match:z.target.value}),placeholder:s("serverRoute.matchPlaceholder")})]}):null,a.jsxs("label",{children:[a.jsx("span",{children:s("serverRoute.actionValue")}),a.jsx("input",{className:"config-input",value:m.action_value,onChange:z=>g({...m,action_value:z.target.value}),placeholder:s("serverRoute.actionValuePlaceholder")})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:s("common.cancel")}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:S,children:[a.jsx(Ca,{size:16}),s(S?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function vj(o){return{id:o==null?void 0:o.id,name:(o==null?void 0:o.name)??"",content:(o==null?void 0:o.content)??"",group_id:String((o==null?void 0:o.group_id)??""),transfer_enable:o?String(o.transfer_enable):"",device_limit:(o==null?void 0:o.device_limit)!=null?String(o.device_limit):"",speed_limit:(o==null?void 0:o.speed_limit)!=null?String(o.speed_limit):"",month_price:(o==null?void 0:o.month_price)!=null?String(o.month_price/100):"",quarter_price:(o==null?void 0:o.quarter_price)!=null?String(o.quarter_price/100):"",half_year_price:(o==null?void 0:o.half_year_price)!=null?String(o.half_year_price/100):"",year_price:(o==null?void 0:o.year_price)!=null?String(o.year_price/100):"",two_year_price:(o==null?void 0:o.two_year_price)!=null?String(o.two_year_price/100):"",three_year_price:(o==null?void 0:o.three_year_price)!=null?String(o.three_year_price/100):"",onetime_price:(o==null?void 0:o.onetime_price)!=null?String(o.onetime_price/100):"",reset_price:(o==null?void 0:o.reset_price)!=null?String(o.reset_price/100):"",reset_traffic_method:(o==null?void 0:o.reset_traffic_method)!=null?String(o.reset_traffic_method):"0",capacity_limit:(o==null?void 0:o.capacity_limit)!=null?String(o.capacity_limit):"",force_update:!1}}function jj(o){const s=u=>u===""?null:Math.round(Number(u)*100),r=u=>u===""?null:Number(u);return{id:o.id,name:o.name,content:o.content||null,group_id:Number(o.group_id),transfer_enable:Number(o.transfer_enable),device_limit:r(o.device_limit),speed_limit:r(o.speed_limit),month_price:s(o.month_price),quarter_price:s(o.quarter_price),half_year_price:s(o.half_year_price),year_price:s(o.year_price),two_year_price:s(o.two_year_price),three_year_price:s(o.three_year_price),onetime_price:s(o.onetime_price),reset_price:s(o.reset_price),reset_traffic_method:r(o.reset_traffic_method),capacity_limit:r(o.capacity_limit),force_update:o.force_update}}function It(o){return o==null?"—":Sa(o)}function wj(o){return[{value:"0",label:o("config.resetTraffic.monthly")},{value:"1",label:o("config.resetTraffic.byPurchase")},{value:"2",label:o("config.resetTraffic.never")},{value:"3",label:o("config.resetTraffic.yearly")},{value:"4",label:o("config.resetTraffic.yearlyByPurchase")}]}function Nj(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState([]),[m,g]=f.useState([]),[h,v]=f.useState(null),[S,w]=f.useState(!0),[y,j]=f.useState(!1),[B,X]=f.useState(""),[te,K]=f.useState(""),[z,G]=f.useState(null),[U,O]=f.useState(null),ee=(x,P)=>{x.dataTransfer.effectAllowed="move",G(P)},se=(x,P)=>{if(x.preventDefault(),z===null||z===P)return;const H=[...r],k=H[z];H.splice(z,1),H.splice(P,0,k),G(P),u(H)},ce=async()=>{G(null);try{await mh(r.map(x=>x.id)),await he()}catch(x){X(x instanceof Error?x.message:s("plan.sortFailed")),await he()}},E=(x,P)=>{O(P)},$=x=>{if(U===null)return;const P=x.touches[0],H=document.elementFromPoint(P.clientX,P.clientY);if(!H)return;const k=H.closest("tr, [data-index]");if(!k)return;const Z=k.getAttribute("data-index");if(Z===null)return;const ue=Number(Z);if(ue!==U&&ue>=0&&ue<r.length){const pe=[...r],Se=pe[U];pe.splice(U,1),pe.splice(ue,0,Se),O(ue),u(pe)}},le=async()=>{if(U!==null){O(null);try{await mh(r.map(x=>x.id)),await he()}catch(x){X(x instanceof Error?x.message:s("plan.sortFailed")),await he()}}},he=f.useCallback(async()=>{w(!0),X("");try{const[x,P]=await Promise.all([jl(),us()]);u(x),g(P)}catch(x){X(x instanceof Error?x.message:s("plan.loadFailed"))}finally{w(!1)}},[s]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}he()},[he,o]);function N(x){v(vj(x)),X(""),K("")}async function R(x){var P,H;if(x.preventDefault(),!!h){j(!0),X(""),K("");try{await f1(jj(h)),v(null),(P=window.showToast)==null||P.call(window,s("plan.saveSuccess"),"success"),await he()}catch(k){(H=window.showToast)==null||H.call(window,k instanceof Error?k.message:s("plan.saveFailed"),"error")}finally{j(!1)}}}async function ae(x,P){var H;try{await ph(x,{show:P?0:1}),await he()}catch(k){(H=window.showToast)==null||H.call(window,k instanceof Error?k.message:s("plan.toggleFailed"),"error")}}async function M(x,P){var H;try{await ph(x,{renew:P?0:1}),await he()}catch(k){(H=window.showToast)==null||H.call(window,k instanceof Error?k.message:s("plan.toggleFailed"),"error")}}async function re(x){var P;(P=window.showConfirm)==null||P.call(window,{message:s("plan.deleteConfirm"),onConfirm:async()=>{var H,k;X(""),K("");try{await h1(x),(H=window.showToast)==null||H.call(window,s("plan.deleteSuccess"),"success"),await he()}catch(Z){(k=window.showToast)==null||k.call(window,Z instanceof Error?Z.message:s("plan.deleteFailed"),"error")}}})}function A(x){var P;return((P=m.find(H=>H.id===x))==null?void 0:P.name)??`#${x}`}function F(x,P){v(H=>H&&{...H,[x]:P})}return a.jsxs(Gt,{title:s("plan.title"),subtitle:s("plan.subtitle"),children:[a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("plan.heading")}),a.jsx("p",{children:s("plan.headingHelp")})]}),a.jsxs("div",{className:"button-row",children:[a.jsxs("button",{className:"ghost-button",type:"button",onClick:he,disabled:S,children:[a.jsx(_t,{size:16}),s(S?"common.refreshing":"common.refresh")]}),a.jsxs("button",{className:"primary-button",type:"button",onClick:()=>N(),children:[a.jsx(ka,{size:16}),s("plan.add")]})]})]}),B?a.jsx("div",{className:"form-error",children:B}):null,te?a.jsx("div",{className:"form-success",children:te}):null,S&&r.length===0?a.jsx(gt,{label:s("plan.loading")}):null,a.jsx("section",{className:"panel table-panel hide-on-mobile",children:a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:s("plan.sort")}),a.jsx("th",{children:"ID"}),a.jsx("th",{children:s("plan.show")}),a.jsx("th",{children:s("plan.renew")}),a.jsx("th",{children:s("plan.name")}),a.jsx("th",{children:s("plan.users")}),a.jsx("th",{children:s("plan.group")}),a.jsx("th",{children:s("plan.pricing")}),a.jsx("th",{children:s("plan.traffic")}),a.jsx("th",{children:s("common.actions")})]})}),a.jsxs("tbody",{children:[r.map((x,P)=>a.jsxs("tr",{draggable:!0,onDragStart:H=>ee(H,P),onDragOver:H=>se(H,P),onDragEnd:ce,onTouchStart:H=>E(H,P),onTouchMove:$,onTouchEnd:le,"data-index":P,className:z===P||U===P?"dragging":"",style:{transition:"all 0.2s"},children:[a.jsx("td",{children:a.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:a.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:s("plan.sort"),children:a.jsx(is,{size:16})})})}),a.jsx("td",{children:a.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:x.id})}),a.jsx("td",{children:a.jsx("button",{className:`admin-switch ${x.show?"active":""}`,type:"button",onClick:H=>{H.stopPropagation(),ae(x.id,x.show)},title:x.show?s("common.enabled"):s("common.disabled"),children:a.jsx("span",{className:"admin-switch-thumb"})})}),a.jsx("td",{children:a.jsx("button",{className:`admin-switch ${x.renew?"active":""}`,type:"button",onClick:H=>{H.stopPropagation(),M(x.id,x.renew)},title:x.renew?s("common.enabled"):s("common.disabled"),children:a.jsx("span",{className:"admin-switch-thumb"})})}),a.jsx("td",{children:a.jsx("strong",{children:x.name})}),a.jsx("td",{children:a.jsxs("span",{className:"inline-badge",children:[a.jsx(ds,{size:14}),x.count??0]})}),a.jsx("td",{children:A(x.group_id)}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[x.month_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),a.jsx("strong",{style:{color:"var(--accent)"},children:It(x.month_price)})]}),x.quarter_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),a.jsx("strong",{style:{color:"#10b981"},children:It(x.quarter_price)})]}),x.half_year_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),a.jsx("strong",{style:{color:"#f59e0b"},children:It(x.half_year_price)})]}),x.year_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),a.jsx("strong",{style:{color:"#6366f1"},children:It(x.year_price)})]}),x.two_year_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),a.jsx("strong",{style:{color:"#8b5cf6"},children:It(x.two_year_price)})]}),x.three_year_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),a.jsx("strong",{style:{color:"#ec4899"},children:It(x.three_year_price)})]}),x.onetime_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),a.jsx("strong",{style:{color:"#6b7280"},children:It(x.onetime_price)})]}),x.reset_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:s("plan.resetTrafficShort")}),a.jsx("strong",{style:{color:"#ef4444"},children:It(x.reset_price)})]})]})}),a.jsxs("td",{children:[x.transfer_enable," GB"]}),a.jsx("td",{children:a.jsxs("div",{className:"row-actions",children:[a.jsxs("button",{className:"mini-button",type:"button",onClick:H=>{H.stopPropagation(),N(x)},children:[a.jsx(Ht,{size:14}),s("common.edit")]}),a.jsxs("button",{className:"mini-button danger",type:"button",onClick:H=>{H.stopPropagation(),re(x.id)},children:[a.jsx(Bt,{size:14}),s("common.delete")]})]})})]},x.id)),!S&&r.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:10,children:a.jsx("div",{className:"empty-state",children:s("plan.empty")})})}):null]})]})})}),a.jsxs("div",{className:"mobile-node-list",children:[r.map((x,P)=>a.jsxs("div",{className:`mobile-node-card ${z===P||U===P?"dragging":""}`,draggable:!0,onDragStart:H=>ee(H,P),onDragOver:H=>se(H,P),onDragEnd:ce,onTouchStart:H=>E(H,P),onTouchMove:$,onTouchEnd:le,"data-index":P,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[a.jsxs("div",{className:"card-header-row",children:[a.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[a.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:s("plan.sort"),children:a.jsx(is,{size:16})}),a.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:x.id}),a.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:x.name})]}),a.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[a.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:H=>{H.stopPropagation(),N(x)},children:[a.jsx(Ht,{size:12}),s("common.edit")]}),a.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:H=>{H.stopPropagation(),re(x.id)},children:[a.jsx(Bt,{size:12}),s("common.delete")]})]})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:s("plan.show")}),a.jsx("button",{className:`admin-switch ${x.show?"active":""}`,type:"button",onClick:H=>{H.stopPropagation(),ae(x.id,x.show)},title:x.show?s("common.enabled"):s("common.disabled"),children:a.jsx("span",{className:"admin-switch-thumb"})})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:s("plan.renew")}),a.jsx("button",{className:`admin-switch ${x.renew?"active":""}`,type:"button",onClick:H=>{H.stopPropagation(),M(x.id,x.renew)},title:x.renew?s("common.enabled"):s("common.disabled"),children:a.jsx("span",{className:"admin-switch-thumb"})})]})]}),a.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[a.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[a.jsx(ds,{size:12,style:{marginRight:4}}),x.count??0]}),a.jsx("span",{className:"mobile-badge-pill",children:A(x.group_id)}),a.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[x.transfer_enable," GB"]})]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[x.month_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),a.jsx("strong",{style:{color:"var(--accent)"},children:It(x.month_price)})]}),x.quarter_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),a.jsx("strong",{style:{color:"#10b981"},children:It(x.quarter_price)})]}),x.half_year_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),a.jsx("strong",{style:{color:"#f59e0b"},children:It(x.half_year_price)})]}),x.year_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),a.jsx("strong",{style:{color:"#6366f1"},children:It(x.year_price)})]}),x.two_year_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),a.jsx("strong",{style:{color:"#8b5cf6"},children:It(x.two_year_price)})]}),x.three_year_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),a.jsx("strong",{style:{color:"#ec4899"},children:It(x.three_year_price)})]}),x.onetime_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),a.jsx("strong",{style:{color:"#6b7280"},children:It(x.onetime_price)})]}),x.reset_price!=null&&a.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[a.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:s("plan.resetTrafficShort")}),a.jsx("strong",{style:{color:"#ef4444"},children:It(x.reset_price)})]})]})]},x.id)),!S&&r.length===0?a.jsx("div",{className:"empty-state",children:s("plan.empty")}):null]}),h?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:h.id?s("plan.edit"):s("plan.add")}),a.jsx("p",{children:s("plan.modalHelp")})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>v(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:R,children:[a.jsxs("label",{children:[a.jsx("span",{children:s("plan.name")}),a.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:x=>F("name",x.target.value)})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("plan.content")}),a.jsx("textarea",{className:"config-input",rows:3,value:h.content,onChange:x=>F("content",x.target.value),placeholder:s("plan.contentPlaceholder")})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("plan.group")}),a.jsxs("select",{className:"config-input",required:!0,value:h.group_id,onChange:x=>F("group_id",x.target.value),children:[a.jsx("option",{value:"",children:s("plan.selectGroup")}),m.map(x=>a.jsx("option",{value:x.id,children:x.name},x.id))]})]}),a.jsxs("label",{children:[a.jsxs("span",{children:[s("plan.transferEnable")," (GB)"]}),a.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:h.transfer_enable,onChange:x=>F("transfer_enable",x.target.value)})]})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("plan.deviceLimit")}),a.jsx("input",{className:"config-input",type:"number",min:"0",value:h.device_limit,onChange:x=>F("device_limit",x.target.value),placeholder:s("plan.unlimited")})]}),a.jsxs("label",{children:[a.jsxs("span",{children:[s("plan.speedLimit")," (Mbps)"]}),a.jsx("input",{className:"config-input",type:"number",min:"0",value:h.speed_limit,onChange:x=>F("speed_limit",x.target.value),placeholder:s("plan.unlimited")})]})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("plan.capacityLimit")}),a.jsx("input",{className:"config-input",type:"number",min:"0",value:h.capacity_limit,onChange:x=>F("capacity_limit",x.target.value),placeholder:s("plan.unlimited")})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("plan.resetTrafficMethod")}),a.jsx("select",{className:"config-input",value:h.reset_traffic_method,onChange:x=>F("reset_traffic_method",x.target.value),children:wj(s).map(x=>a.jsx("option",{value:x.value,children:x.label},x.value))})]})]}),a.jsx("h3",{className:"form-section-title",children:s("plan.pricing")}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("plan.monthPrice")}),a.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.month_price,onChange:x=>F("month_price",x.target.value),placeholder:"—"})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("plan.quarterPrice")}),a.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.quarter_price,onChange:x=>F("quarter_price",x.target.value),placeholder:"—"})]})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("plan.halfYearPrice")}),a.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.half_year_price,onChange:x=>F("half_year_price",x.target.value),placeholder:"—"})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("plan.yearPrice")}),a.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.year_price,onChange:x=>F("year_price",x.target.value),placeholder:"—"})]})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("plan.twoYearPrice")}),a.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.two_year_price,onChange:x=>F("two_year_price",x.target.value),placeholder:"—"})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("plan.threeYearPrice")}),a.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.three_year_price,onChange:x=>F("three_year_price",x.target.value),placeholder:"—"})]})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("plan.onetimePrice")}),a.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.onetime_price,onChange:x=>F("onetime_price",x.target.value),placeholder:"—"})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("plan.resetPrice")}),a.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.reset_price,onChange:x=>F("reset_price",x.target.value),placeholder:"—"})]})]}),h.id?a.jsxs("label",{className:"checkbox-row",children:[a.jsx("input",{type:"checkbox",checked:h.force_update,onChange:x=>F("force_update",String(x.target.checked))}),a.jsx("span",{children:s("plan.forceUpdate")})]}):null,a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>v(null),children:s("common.cancel")}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[a.jsx(Ca,{size:16}),s(y?"plan.saving":"common.save")]})]})]})]})}):null]})}const ud="模糊",kh={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Ch={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function zh(o){const s=new Date(o*1e3),r=s.getFullYear(),u=String(s.getMonth()+1).padStart(2,"0"),m=String(s.getDate()).padStart(2,"0"),g=String(s.getHours()).padStart(2,"0"),h=String(s.getMinutes()).padStart(2,"0");return`${r}/${u}/${m} ${g}:${h}`}function Th(o){const s=new Date(o*1e3),r=s.getFullYear(),u=String(s.getMonth()+1).padStart(2,"0"),m=String(s.getDate()).padStart(2,"0"),g=String(s.getHours()).padStart(2,"0"),h=String(s.getMinutes()).padStart(2,"0"),v=String(s.getSeconds()).padStart(2,"0");return`${r}-${u}-${m} ${g}:${h}:${v}`}function Eh(o){return o.length<=10?o:`${o.slice(0,3)}...${o.slice(-3)}`}function La(o){return`${Sa(Number(o??0))} ₫`}const Tx="adminzic_user_cache";function _j(){if(typeof window>"u")return{};try{const o=sessionStorage.getItem(Tx);return o?JSON.parse(o):{}}catch{return{}}}function Sj(o){if(!(typeof window>"u"))try{sessionStorage.setItem(Tx,JSON.stringify(o))}catch{}}const oi=(o,s)=>`${o}:${s}`;function kj(){var T,ye,qe,ve,ot;const o=Tt(),s=Ja(),{t:r}=Ke(),u=f.useCallback(Y=>{switch(Y){case 0:return{label:r("order.statusPending"),cls:"status-pending"};case 1:return{label:r("order.statusProcessing"),cls:"status-processing"};case 2:return{label:r("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:r("order.statusCompleted"),cls:"status-completed"};case 4:return{label:r("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${Y}`,cls:""}}},[r]),m=f.useCallback(Y=>{const Ne=`order.period.${Y}`,we=r(Ne);return we===Ne?Ch[Y]??Y:we},[r]),[g,h]=f.useState([]),[v,S]=f.useState([]),[w,y]=f.useState({}),[j,B]=f.useState(0),[X,te]=f.useState(1),[K]=f.useState(15),[z,G]=f.useState(""),[U,O]=f.useState("trade_no"),[ee,se]=f.useState(!0),[ce,E]=f.useState(null),[$,le]=f.useState(!1),[he,N]=f.useState(""),[R,ae]=f.useState(""),[M,re]=f.useState(null),[A,F]=f.useState(null),[x,P]=f.useState(!1),[H,k]=f.useState(null),[Z,ue]=f.useState(!1),[pe,Se]=f.useState(()=>_j()),ke=f.useCallback((Y,Ne)=>{const we=oi(Ne,Y);F(null),re(ze=>ze===we?null:we)},[]),Re=f.useCallback((Y,Ne)=>{const we=oi(Ne,Y);re(null),F(ze=>ze===we?null:we)},[]),mt=f.useCallback(Y=>{const Ne=Number(Y.coupon_id??0);return Ne?w[Ne]??`#${Ne}`:null},[w]);f.useEffect(()=>{if(!M&&!A)return;const Y=()=>{re(null),F(null)},Ne=ze=>{const Fe=ze.target;Fe!=null&&Fe.closest(".order-dropdown-trigger, .order-dropdown-menu")||Y()},we=ze=>{ze.key==="Escape"&&Y()};return document.addEventListener("pointerdown",Ne),document.addEventListener("keydown",we),()=>{document.removeEventListener("pointerdown",Ne),document.removeEventListener("keydown",we)}},[M,A]),f.useEffect(()=>{const Y=new Set;if(g.forEach(we=>{we.user_id&&!pe[we.user_id]&&Y.add(we.user_id),we.invite_user_id&&!pe[we.invite_user_id]&&Y.add(we.invite_user_id)}),H&&(H.user_id&&!pe[H.user_id]&&Y.add(H.user_id),H.invite_user_id&&!pe[H.invite_user_id]&&Y.add(H.invite_user_id)),Y.size===0)return;const Ne=Array.from(Y);Promise.allSettled(Ne.map(async we=>{try{const ze=await gx(we);if(ze&&ze.data)return{id:we,email:ze.data.email,invite_user:ze.data.invite_user}}catch(ze){console.error(`Failed to fetch user ${we}:`,ze)}return null})).then(we=>{const ze={};we.forEach(Fe=>{var Qe;if(Fe.status==="fulfilled"&&Fe.value){const Ye=Fe.value;ze[Ye.id]={email:Ye.email,invite_user_email:((Qe=Ye.invite_user)==null?void 0:Qe.email)||null},Ye.invite_user&&(ze[Ye.invite_user.id]={email:Ye.invite_user.email})}}),Object.keys(ze).length>0&&Se(Fe=>{const Qe={...Fe,...ze};return Sj(Qe),Qe})})},[g,H,pe]);const Ge={0:{label:r("order.commissionPending"),dotClass:"pending"},1:{label:r("order.commissionApproved"),dotClass:"processing"},2:{label:r("order.commissionPaid"),dotClass:"completed"},3:{label:r("order.commissionCancelled"),dotClass:"cancelled"}},Pe=f.useCallback(async(Y=1,Ne,we)=>{var ze,Fe;se(!0),N("");try{let Qe;if(Ne)if(we==="email"){const rt=(ze=(await Td(1,1,[{key:"email",condition:ud,value:Ne}])).data)==null?void 0:ze[0];if(!rt){h([]),B(0),se(!1);return}Qe=[{key:"user_id",condition:"=",value:String(rt.id)}]}else if(we==="invite_user_email"){const rt=(Fe=(await Td(1,1,[{key:"email",condition:ud,value:Ne}])).data)==null?void 0:Fe[0];if(!rt){h([]),B(0),se(!1);return}Qe=[{key:"invite_user_id",condition:"=",value:String(rt.id)}]}else Qe=[{key:we||"trade_no",condition:we==="trade_no"||we==="user_id"||we==="invite_user_id"||we==="plan_id"||we==="status"?"=":ud,value:Ne}];const Ye=await x1({current:Y,pageSize:K,filter:Qe});h(Ye.data),B(Ye.total)}catch(Qe){N(Qe instanceof Error?Qe.message:r("order.loadFailed"))}finally{se(!1)}},[K,r]),Lt=f.useCallback(Y=>{const Ne=String(Y);O("user_id"),G(Ne),P(!0),te(1),Pe(1,Ne,"user_id")},[Pe]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}const Y=new URLSearchParams(s.search),Ne=Y.get("filter_email"),we=Y.get("invite_user_email"),ze=Y.get("user_id")||Y.get("filter_user_id");let Fe="",Qe="trade_no";ze?(Fe=ze,Qe="user_id",O("user_id"),G(ze),P(!0)):Ne?(Fe=Ne,Qe="email",O("email"),G(Ne),P(!0)):we&&(Fe=we,Qe="invite_user_email",O("invite_user_email"),G(we),P(!0)),Pe(1,Fe,Qe),jl().then(S).catch(()=>{}),xx(1,1e3).then(Ye=>{const He={};Ye.data.forEach(rt=>{He[rt.id]=rt.code}),y(He)}).catch(()=>{})},[Pe,o,s.search]);function Mt(){te(1),Pe(1,z,U)}function ua(){G(""),te(1),Pe(1)}function yt(Y){te(Y),Pe(Y,z,U)}async function aa(Y){var Ne,we;re(null),F(null),N(""),ae("");try{await g1(Y),(Ne=window.showToast)==null||Ne.call(window,r("order.paidSuccess"),"success"),await Pe(X,z,U)}catch(ze){(we=window.showToast)==null||we.call(window,ze instanceof Error?ze.message:r("order.paidFailed"),"error")}}async function Yt(Y){var Ne,we;re(null),F(null),N(""),ae("");try{await b1(Y),(Ne=window.showToast)==null||Ne.call(window,r("order.cancelSuccess"),"success"),await Pe(X,z,U)}catch(ze){(we=window.showToast)==null||we.call(window,ze instanceof Error?ze.message:r("order.cancelFailed"),"error")}}async function pa(Y,Ne){var we,ze;re(null),F(null),N(""),ae("");try{await y1(Y,Ne),(we=window.showToast)==null||we.call(window,r("order.commissionSuccess"),"success"),await Pe(X,z,U)}catch(Fe){(ze=window.showToast)==null||ze.call(window,Fe instanceof Error?Fe.message:r("order.commissionFailed"),"error")}}async function ft(Y){k(Y),ue(!0);try{const Ne=await v1(Y.id);Ne&&Ne.data&&k(Ne.data)}catch(Ne){console.error("Failed to fetch order detail:",Ne)}finally{ue(!1)}}function Qt(){var Y;E({email:"",plan_id:(Y=v[0])!=null&&Y.id?String(v[0].id):"",period:"month_price",total_amount:"0"}),N(""),ae("")}async function Wt(Y){var Ne,we;if(Y.preventDefault(),!!ce){le(!0),N(""),ae("");try{await hx({email:ce.email,plan_id:Number(ce.plan_id),period:ce.period,total_amount:Number(ce.total_amount)*100}),E(null),(Ne=window.showToast)==null||Ne.call(window,r("order.assignSuccess"),"success"),await Pe(X,z,U)}catch(ze){(we=window.showToast)==null||we.call(window,ze instanceof Error?ze.message:r("order.assignFailed"),"error")}finally{le(!1)}}}const St=Math.ceil(j/K),ma=H?mt(H):null;return a.jsxs(Gt,{title:r("order.title"),subtitle:r("order.subtitle"),children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[a.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[a.jsxs("button",{className:`ghost-button ${x?"active":""}`,type:"button",onClick:()=>P(!x),children:[a.jsx(cs,{size:16}),r("order.filter")]}),a.jsxs("button",{className:"ghost-button",type:"button",onClick:Qt,children:[a.jsx(ka,{size:16}),r("order.assign")]})]}),a.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Pe(X,z,U),disabled:ee,children:[a.jsx(_t,{size:16}),r(ee?"common.refreshing":"common.refresh")]})]}),x&&a.jsxs("div",{className:"filter-bar",children:[a.jsxs("select",{className:"config-input filter-select",value:U,onChange:Y=>O(Y.target.value),children:[a.jsx("option",{value:"trade_no",children:r("order.tradeNo")}),a.jsx("option",{value:"email",children:r("order.email")}),a.jsx("option",{value:"status",children:r("order.status")}),a.jsx("option",{value:"plan_id",children:r("order.filterPlanId")}),a.jsx("option",{value:"user_id",children:r("order.filterUserId")}),a.jsx("option",{value:"invite_user_id",children:r("order.filterInviterUserId")}),a.jsx("option",{value:"invite_user_email",children:r("order.inviterEmail")})]}),a.jsxs("div",{className:"search-input-wrap",children:[a.jsx($o,{size:16}),a.jsx("input",{className:"config-input search-input",value:z,onChange:Y=>G(Y.target.value),placeholder:r("order.searchPlaceholder"),onKeyDown:Y=>Y.key==="Enter"&&Mt()})]}),a.jsxs("button",{className:"ghost-button",type:"button",onClick:Mt,children:[a.jsx(cs,{size:16}),r("order.filter")]}),z?a.jsxs("button",{className:"ghost-button",type:"button",onClick:ua,children:[a.jsx(st,{size:16}),r("order.clearFilter")]}):null]}),he?a.jsx("div",{className:"form-error",children:he}):null,R?a.jsx("div",{className:"form-success",children:R}):null,ee&&g.length===0?a.jsx(gt,{label:r("order.loading")}):null,a.jsxs("div",{className:`content-loading-container ${ee?"is-loading":""}`,children:[a.jsx("div",{className:"page-loading-bar"}),a.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table order-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:r("order.colOrder")}),a.jsx("th",{children:r("order.colCustomerPlan")}),a.jsx("th",{children:r("order.colPayment")}),a.jsx("th",{children:r("order.orderStatus")}),a.jsx("th",{children:r("order.colCommission")}),a.jsx("th",{children:r("order.created")})]})}),a.jsxs("tbody",{children:[g.map(Y=>{var Ye;const Ne=u(Y.status),we=Y.invite_user_id!==null,ze=Ge[Y.commission_status]??{label:`#${Y.commission_status}`,dotClass:"pending"},Fe=mt(Y),Qe=(Ye=pe[Y.user_id])==null?void 0:Ye.email;return a.jsxs("tr",{children:[a.jsx("td",{children:a.jsxs("div",{className:"order-cell-stack",children:[a.jsx("span",{className:"trade-no-link",onClick:()=>ft(Y),title:r("order.detailsTitle"),children:Eh(Y.trade_no)}),a.jsxs("span",{className:"order-subline",children:["#",Y.id]}),a.jsx("span",{className:"order-type-pill",children:kh[Y.type]??`#${Y.type}`})]})}),a.jsx("td",{children:a.jsxs("div",{className:"order-user-plan",children:[Qe?a.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Lt(Y.user_id),title:r("order.filterByUser"),children:Qe}):a.jsxs("span",{className:"order-subline",children:["ID: ",Y.user_id]}),a.jsx("strong",{className:"order-plan-name",children:Y.plan_name??`Plan #${Y.plan_id}`}),a.jsx("span",{className:"period-capsule",children:m(Y.period)})]})}),a.jsx("td",{children:a.jsxs("div",{className:"order-money-stack",children:[a.jsx("strong",{className:"order-money-main",children:La(Y.total_amount)}),Fe?a.jsxs("span",{className:"order-coupon-badge",children:[r("order.coupon"),": ",Fe]}):null,Number(Y.discount_amount??0)>0?a.jsxs("span",{className:"order-subline",children:[r("order.discountLabel"),": ",La(Y.discount_amount)]}):null]})}),a.jsxs("td",{style:{position:"relative"},children:[a.jsxs("div",{className:"status-indicator",children:[a.jsx("span",{className:`status-dot ${Ne.cls.replace("status-","")}`}),a.jsx("span",{children:Ne.label}),Y.status===0&&a.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:He=>{He.stopPropagation(),ke(Y.trade_no,"desktop")},children:[r("order.markAs")," ",a.jsx(bl,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),M===oi("desktop",Y.trade_no)&&a.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:He=>He.stopPropagation(),onClick:He=>He.stopPropagation(),children:[a.jsxs("div",{className:"dropdown-item",onClick:()=>{re(null),aa(Y.trade_no)},children:[a.jsx(ko,{size:14,style:{color:"#10b981"}}),r("order.statusCompleted")]}),a.jsxs("div",{className:"dropdown-item",onClick:()=>{re(null),Yt(Y.trade_no)},children:[a.jsx(gl,{size:14,style:{color:"#ef4444"}}),r("order.statusCancelled")]})]})]}),a.jsxs("td",{style:{position:"relative"},children:[we?a.jsxs("div",{className:"order-commission-cell",children:[a.jsx("strong",{children:La(Y.commission_balance)}),a.jsxs("div",{className:"status-indicator",children:[a.jsx("span",{className:`status-dot ${ze.dotClass}`}),a.jsx("span",{children:ze.label}),Y.commission_status===0&&a.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:He=>{He.stopPropagation(),Re(Y.trade_no,"desktop")},children:[r("order.markAs")," ",a.jsx(bl,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):a.jsx("span",{className:"tag muted-tag",children:"—"}),A===oi("desktop",Y.trade_no)&&a.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:He=>He.stopPropagation(),onClick:He=>He.stopPropagation(),children:[a.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),pa(Y.trade_no,1)},children:[a.jsx(ko,{size:14,style:{color:"#10b981"}}),r("order.commissionApproved")]}),a.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),pa(Y.trade_no,3)},children:[a.jsx(gl,{size:14,style:{color:"#ef4444"}}),r("order.commissionCancelled")]})]})]}),a.jsx("td",{children:a.jsx("span",{className:"order-time",children:zh(Y.created_at)})})]},Y.trade_no)}),!ee&&g.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,children:a.jsx("div",{className:"empty-state",children:r("order.empty")})})}):null]})]})}),St>1?a.jsxs("div",{className:"pagination",children:[a.jsx("button",{className:"mini-button",disabled:X<=1,onClick:()=>yt(X-1),children:a.jsx(gn,{size:16})}),a.jsxs("span",{className:"page-info",children:[X," / ",St]}),a.jsx("button",{className:"mini-button",disabled:X>=St,onClick:()=>yt(X+1),children:a.jsx(bn,{size:16})})]}):null]}),a.jsxs("div",{className:"mobile-order-list",children:[g.map(Y=>{var Ye;const Ne=u(Y.status),we=Y.invite_user_id!==null,ze=Ge[Y.invite_user_id!==null?Y.commission_status:0]??{label:`#${Y.commission_status}`,dotClass:"pending"},Fe=(Ye=pe[Y.user_id])==null?void 0:Ye.email,Qe=mt(Y);return a.jsxs("div",{className:"mobile-order-card",children:[a.jsxs("div",{className:"mobile-card-header",children:[a.jsxs("div",{className:"mobile-card-header-left",children:[a.jsx("span",{className:"trade-no-link",onClick:()=>ft(Y),children:Eh(Y.trade_no)}),a.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",Y.id]})]}),a.jsxs("div",{className:"mobile-order-action-wrap",children:[a.jsxs("div",{className:"status-indicator",children:[a.jsx("span",{className:`status-dot ${Ne.cls.replace("status-","")}`}),a.jsx("span",{style:{fontSize:"12px"},children:Ne.label}),Y.status===0&&a.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:He=>{He.stopPropagation(),ke(Y.trade_no,"mobile")},children:a.jsx(bl,{size:12,style:{display:"inline",strokeWidth:3}})})]}),M===oi("mobile",Y.trade_no)&&a.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:He=>He.stopPropagation(),onClick:He=>He.stopPropagation(),children:[a.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{re(null),aa(Y.trade_no)},children:[a.jsx(ko,{size:14,style:{color:"#10b981"}}),r("order.statusCompleted")]}),a.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{re(null),Yt(Y.trade_no)},children:[a.jsx(gl,{size:14,style:{color:"#ef4444"}}),r("order.statusCancelled")]})]})]})]}),a.jsxs("div",{className:"mobile-card-body",children:[a.jsxs("div",{className:"mobile-card-body-row",children:[a.jsx("span",{className:"label",children:r("order.email")}),a.jsx("span",{className:"value",children:Fe?a.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Lt(Y.user_id),children:Fe}):a.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",Y.user_id]})})]}),a.jsxs("div",{className:"mobile-card-body-row",children:[a.jsx("span",{className:"label",children:r("order.type")}),a.jsx("span",{className:"value",children:kh[Y.type]??`#${Y.type}`})]}),a.jsxs("div",{className:"mobile-card-body-row",children:[a.jsx("span",{className:"label",children:r("order.subscriptionPlan")}),a.jsx("span",{className:"value",style:{fontWeight:600},children:Y.plan_name??`Plan #${Y.plan_id}`})]}),a.jsxs("div",{className:"mobile-card-body-row",children:[a.jsx("span",{className:"label",children:r("order.period")}),a.jsx("span",{className:"value",children:a.jsx("span",{className:"period-capsule",style:{margin:0},children:m(Y.period)})})]}),a.jsxs("div",{className:"mobile-card-body-row",children:[a.jsx("span",{className:"label",children:r("order.amount")}),a.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:La(Y.total_amount)})]}),Qe?a.jsxs("div",{className:"mobile-card-body-row",children:[a.jsx("span",{className:"label",children:r("order.coupon")}),a.jsx("span",{className:"value",children:a.jsx("span",{className:"order-coupon-badge",children:Qe})})]}):null,Number(Y.discount_amount??0)>0?a.jsxs("div",{className:"mobile-card-body-row",children:[a.jsx("span",{className:"label",children:r("order.discountLabel")}),a.jsx("span",{className:"value",children:La(Y.discount_amount)})]}):null,a.jsxs("div",{className:"mobile-card-body-row",children:[a.jsx("span",{className:"label",children:r("order.commissionAmount")}),a.jsx("span",{className:"value",children:we?a.jsx("strong",{children:La(Y.commission_balance)}):a.jsx("span",{className:"tag muted-tag",children:"—"})})]}),we&&a.jsxs("div",{className:"mobile-card-body-row",children:[a.jsx("span",{className:"label",children:r("order.commissionStatus")}),a.jsxs("div",{className:"value mobile-order-action-wrap",children:[a.jsxs("div",{className:"status-indicator",children:[a.jsx("span",{className:`status-dot ${ze.dotClass}`}),a.jsx("span",{style:{fontSize:"12px"},children:ze.label}),Y.commission_status===0&&a.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:He=>{He.stopPropagation(),Re(Y.trade_no,"mobile")},children:a.jsx(bl,{size:12,style:{display:"inline",strokeWidth:3}})})]}),A===oi("mobile",Y.trade_no)&&a.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:He=>He.stopPropagation(),onClick:He=>He.stopPropagation(),children:[a.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{F(null),pa(Y.trade_no,1)},children:[a.jsx(ko,{size:14,style:{color:"#10b981"}}),r("order.commissionApproved")]}),a.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{F(null),pa(Y.trade_no,3)},children:[a.jsx(gl,{size:14,style:{color:"#ef4444"}}),r("order.commissionCancelled")]})]})]})]}),a.jsxs("div",{className:"mobile-card-body-row",children:[a.jsx("span",{className:"label",children:r("order.created")}),a.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:zh(Y.created_at)})]})]})]},Y.trade_no)}),!ee&&g.length===0?a.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:r("order.empty")}):null,St>1?a.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[a.jsx("button",{className:"mini-button",disabled:X<=1,onClick:()=>yt(X-1),children:a.jsx(gn,{size:16})}),a.jsxs("span",{className:"page-info",children:[X," / ",St]}),a.jsx("button",{className:"mini-button",disabled:X>=St,onClick:()=>yt(X+1),children:a.jsx(bn,{size:16})})]}):null]})]}),H?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[a.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:r("order.detailsTitle")}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>k(null),children:a.jsx(st,{size:18})})]}),a.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:Z?a.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:a.jsx(gt,{label:r("order.loadingDetails")})}):a.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("common.email")}),(T=pe[H.user_id])!=null&&T.email?a.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{k(null),Lt(H.user_id)},title:"Filter by this user",children:pe[H.user_id].email}):a.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",H.user_id]})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.tradeNoLabel")}),a.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:H.trade_no})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.periodLabel")}),a.jsx("span",{children:m(H.period)})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.orderStatus")}),a.jsx("span",{children:u(H.status).label})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.planLabel")}),a.jsx("span",{children:H.plan_name??`Plan #${H.plan_id}`})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.callbackLabel")}),a.jsx("span",{children:H.callback_no||"-"})]}),ma?a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.coupon")}),a.jsx("span",{children:ma})]}):null]}),H.invite_user_id&&a.jsxs(a.Fragment,{children:[a.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:r("order.referralDetails")}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.inviterEmail")}),(ye=pe[H.invite_user_id])!=null&&ye.email||(qe=pe[H.user_id])!=null&&qe.invite_user_email?a.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const Y=String(H.invite_user_id);O("invite_user_id"),G(Y),P(!0),k(null),Pe(1,Y,"invite_user_id")},title:"Filter by this inviter",children:((ve=pe[H.invite_user_id])==null?void 0:ve.email)||((ot=pe[H.user_id])==null?void 0:ot.invite_user_email)}):a.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",H.invite_user_id]})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.commissionAmount")}),a.jsx("strong",{children:La(H.commission_balance)})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.commissionStatus")}),a.jsxs("div",{className:"status-indicator",children:[a.jsx("span",{className:`status-dot ${(Ge[H.commission_status]??{dotClass:"pending"}).dotClass}`}),a.jsx("span",{children:(Ge[H.commission_status]??{label:`#${H.commission_status}`}).label})]})]})]})]}),a.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.amount")}),a.jsx("span",{children:La(H.total_amount)})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.balanceLabel")}),a.jsx("span",{children:La(H.balance_amount)})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.discountLabel")}),a.jsx("span",{children:La(H.discount_amount)})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.refundLabel")}),a.jsx("span",{children:La(H.refund_amount)})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.surplusLabel")}),a.jsx("span",{children:La(H.surplus_amount)})]})]}),a.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.createdLabel")}),a.jsx("span",{children:Th(H.created_at)})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"var(--muted)"},children:r("order.updatedLabel")}),a.jsx("span",{children:Th(H.updated_at)})]})]})]})})]})}):null,ce?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:r("order.assign")}),a.jsx("p",{children:r("order.assignHelp")})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>E(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:Wt,children:[a.jsxs("label",{children:[a.jsx("span",{children:r("order.email")}),a.jsx("input",{className:"config-input",required:!0,type:"email",value:ce.email,onChange:Y=>E({...ce,email:Y.target.value}),placeholder:"user@example.com"})]}),a.jsxs("label",{children:[a.jsx("span",{children:r("order.plan")}),a.jsx("select",{className:"config-input",required:!0,value:ce.plan_id,onChange:Y=>E({...ce,plan_id:Y.target.value}),children:v.map(Y=>a.jsx("option",{value:Y.id,children:Y.name},Y.id))})]}),a.jsxs("label",{children:[a.jsx("span",{children:r("order.period")}),a.jsx("select",{className:"config-input",value:ce.period,onChange:Y=>E({...ce,period:Y.target.value}),children:Object.entries(Ch).map(([Y,Ne])=>a.jsx("option",{value:Y,children:Ne},Y))})]}),a.jsxs("label",{children:[a.jsxs("span",{children:[r("order.totalAmount")," (cents)"]}),a.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:ce.total_amount,onChange:Y=>E({...ce,total_amount:Y.target.value})})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>E(null),children:r("common.cancel")}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:$,children:[a.jsx(Ca,{size:16}),r($?"order.assigning":"order.assign")]})]})]})]})}):null]})}function To(o){return new Date(o*1e3).toLocaleString("vi-VN")}function Eo(o){return{month_price:o("period.month"),quarter_price:o("period.quarter"),half_year_price:o("period.halfYear"),year_price:o("period.year"),two_year_price:o("period.twoYear"),three_year_price:o("period.threeYear"),onetime_price:o("period.onetime"),reset_price:o("period.resetTraffic")}}function pd(o){return{id:o==null?void 0:o.id,name:(o==null?void 0:o.name)??"",type:String((o==null?void 0:o.type)??1),value:o?String(o.type===1?o.value/100:o.value):"",code:(o==null?void 0:o.code)??"",started_at:o?new Date(o.started_at*1e3).toISOString().slice(0,16):"",ended_at:o?new Date(o.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(o==null?void 0:o.limit_use)!=null?String(o.limit_use):"",limit_use_with_user:(o==null?void 0:o.limit_use_with_user)!=null?String(o.limit_use_with_user):"",limit_plan_ids:(o==null?void 0:o.limit_plan_ids)??[],limit_period:(o==null?void 0:o.limit_period)??[],generate_count:""}}function Cj(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState([]),[m,g]=f.useState(0),[h,v]=f.useState(1),[S,w]=f.useState([]),[y,j]=f.useState(null),[B,X]=f.useState(!0),[te,K]=f.useState(!1),[z,G]=f.useState(""),[U,O]=f.useState(""),[ee,se]=f.useState("");f.useEffect(()=>{y||se("")},[y]);const ce=f.useCallback(async(N=1)=>{X(!0),G("");try{const R=await xx(N,15);u(R.data),g(R.total)}catch(R){G(R instanceof Error?R.message:s("coupon.loadFailed"))}finally{X(!1)}},[]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}ce(1),jl().then(w).catch(()=>{})},[ce,o]);async function E(N){var R,ae;if(N.preventDefault(),!!y){K(!0),G(""),O("");try{const M=y.type==="1"?Math.round(Number(y.value)*100):Number(y.value);await j1({id:y.id,name:y.name,type:Number(y.type),value:M,code:y.code||void 0,started_at:Math.floor(new Date(y.started_at).getTime()/1e3),ended_at:Math.floor(new Date(y.ended_at).getTime()/1e3),limit_use:y.limit_use?Number(y.limit_use):null,limit_use_with_user:y.limit_use_with_user?Number(y.limit_use_with_user):null,limit_plan_ids:y.limit_plan_ids.length?y.limit_plan_ids:null,limit_period:y.limit_period.length?y.limit_period:null,generate_count:y.generate_count?Number(y.generate_count):void 0}),j(null),(R=window.showToast)==null||R.call(window,s("coupon.saveSuccess"),"success"),await ce(h)}catch(M){(ae=window.showToast)==null||ae.call(window,M instanceof Error?M.message:s("coupon.saveFailed"),"error")}finally{K(!1)}}}async function $(N){var R;try{await N1(N),await ce(h)}catch(ae){(R=window.showToast)==null||R.call(window,ae instanceof Error?ae.message:s("coupon.toggleFailed"),"error")}}async function le(N){var R;(R=window.showConfirm)==null||R.call(window,{message:s("coupon.deleteConfirm"),onConfirm:async()=>{var ae,M;try{await w1(N),(ae=window.showToast)==null||ae.call(window,s("coupon.deleteSuccess"),"success"),await ce(h)}catch(re){(M=window.showToast)==null||M.call(window,re instanceof Error?re.message:s("coupon.deleteFailed"),"error")}}})}const he=Math.ceil(m/15);return a.jsxs(Gt,{title:s("coupon.title"),subtitle:s("coupon.subtitle"),children:[a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("coupon.heading")}),a.jsxs("p",{children:[m," ",s("coupon.totalCoupons")]})]}),a.jsxs("div",{className:"button-row",children:[a.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void ce(h),disabled:B,children:[a.jsx(_t,{size:16}),s("common.refresh")]}),a.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(pd()),children:[a.jsx(ka,{size:16}),s("coupon.add")]})]})]}),z?a.jsx("div",{className:"form-error",children:z}):null,U?a.jsx("div",{className:"form-success",children:U}):null,B&&r.length===0?a.jsx(gt,{label:s("common.loading")}):null,a.jsx("section",{className:"panel table-panel hide-on-mobile",children:a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:s("common.id")}),a.jsx("th",{children:s("coupon.name")}),a.jsx("th",{children:s("coupon.code")}),a.jsx("th",{children:s("coupon.type")}),a.jsx("th",{children:s("coupon.value")}),a.jsx("th",{children:s("coupon.usageLimit")}),a.jsx("th",{children:s("coupon.limitPlans")}),a.jsx("th",{children:s("knowledge.show")}),a.jsx("th",{children:s("coupon.limitPeriods")}),a.jsx("th",{children:s("common.actions")})]})}),a.jsxs("tbody",{children:[r.map(N=>{var re,A;const R=(re=N.limit_plan_ids)==null?void 0:re.map(F=>{var x;return((x=S.find(P=>P.id===F))==null?void 0:x.name)||`#${F}`}).join(", "),ae=Eo(s),M=(A=N.limit_period)==null?void 0:A.map(F=>ae[F]||F).join(", ");return a.jsxs("tr",{children:[a.jsx("td",{children:N.id}),a.jsx("td",{children:a.jsx("strong",{children:N.name})}),a.jsx("td",{children:a.jsx("span",{className:"mono",children:N.code})}),a.jsx("td",{children:a.jsx("span",{className:"tag",children:N.type===1?s("coupon.type.fixed"):s("coupon.type.percent")})}),a.jsx("td",{children:a.jsx("strong",{children:N.type===1?Sa(N.value):`${N.value}%`})}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[a.jsxs("span",{children:[s("coupon.maxUses"),": ",N.limit_use??"∞"]}),N.limit_use_with_user!=null&&a.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[s("coupon.maxUses")," ",N.limit_use_with_user,"/",s("coupon.perUser")]})]})}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[R?a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:a.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[s("coupon.plans"),": ",R]})}):null,M?a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:a.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[s("coupon.cycles"),": ",M]})}):null,!R&&!M?a.jsx("span",{className:"tag muted-tag",children:s("coupon.noneAllPlans")}):null]})}),a.jsx("td",{children:a.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:()=>void $(N.id),"aria-label":s("coupon.toggleShow"),children:a.jsx("span",{className:"admin-switch-thumb"})})}),a.jsx("td",{children:a.jsxs("small",{children:[To(N.started_at)," — ",To(N.ended_at)]})}),a.jsx("td",{children:a.jsxs("div",{className:"row-actions",children:[a.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(pd(N)),children:[a.jsx(Ht,{size:14}),s("common.edit")]}),a.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void le(N.id),children:[a.jsx(Bt,{size:14}),s("common.delete")]})]})})]},N.id)}),!B&&r.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:10,children:a.jsx("div",{className:"empty-state",children:s("coupon.empty")})})}):null]})]})})}),a.jsxs("div",{className:"mobile-coupon-list",children:[r.map(N=>{var R,ae,M,re;return a.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[a.jsxs("div",{className:"ticket-main",children:[a.jsxs("div",{className:"ticket-badge-row",children:[a.jsxs("span",{className:"ticket-id-tag",children:["ID: ",N.id]}),a.jsx("span",{className:`tag type-tag ${N.type===1?"fixed-type":"percent-type"}`,children:N.type===1?s("coupon.type.fixed"):s("coupon.type.percent")})]}),a.jsx("div",{className:"ticket-title-row",children:a.jsx("h3",{className:"ticket-name",title:N.name,children:N.name})}),a.jsxs("div",{className:"ticket-code-row",children:[a.jsx("span",{className:"ticket-label",children:s("coupon.code")}),a.jsxs("div",{className:"copyable-code-pill",title:s("coupon.clickToCopy"),onClick:()=>{Kn(N.code).then(A=>{var F;(F=window.showToast)==null||F.call(window,A?`${s("coupon.copiedCode")}: ${N.code}`:s("common.copyFailed"),A?"success":"error")})},children:[a.jsx("code",{className:"mono",children:N.code}),a.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),a.jsxs("div",{className:"ticket-restrictions",children:[(R=N.limit_plan_ids)!=null&&R.length?a.jsxs("div",{className:"restriction-pills",children:[a.jsx("span",{className:"res-icon",children:"📦"}),a.jsx("div",{className:"pill-list",children:N.limit_plan_ids.map(A=>{const F=S.find(x=>x.id===A);return a.jsx("span",{className:"res-pill plan-pill",children:F?F.name:`#${A}`},A)})})]}):null,(ae=N.limit_period)!=null&&ae.length?a.jsxs("div",{className:"restriction-pills",children:[a.jsx("span",{className:"res-icon",children:"⏱️"}),a.jsx("div",{className:"pill-list",children:N.limit_period.map(A=>a.jsx("span",{className:"res-pill cycle-pill",children:Eo(s)[A]||A},A))})]}):null,!((M=N.limit_plan_ids)!=null&&M.length)&&!((re=N.limit_period)!=null&&re.length)?a.jsxs("span",{className:"all-plans-badge",children:["🔓 ",s("coupon.appliesToAll")]}):null]}),a.jsxs("div",{className:"ticket-dates",children:[a.jsx("span",{className:"date-icon",children:"📅"}),a.jsxs("span",{children:[To(N.started_at)," — ",To(N.ended_at)]})]}),a.jsxs("div",{className:"ticket-switch-row",children:[a.jsx("span",{className:"switch-label",children:s("coupon.showOnClient")}),a.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:()=>void $(N.id),"aria-label":s("coupon.toggleShow"),children:a.jsx("span",{className:"admin-switch-thumb"})})]})]}),a.jsxs("div",{className:"ticket-divider",children:[a.jsx("div",{className:"ticket-notch notch-top"}),a.jsx("div",{className:"ticket-notch notch-bottom"})]}),a.jsxs("div",{className:"ticket-side",children:[a.jsxs("div",{className:"ticket-value-wrap",children:[a.jsx("span",{className:"ticket-value",children:N.type===1?Sa(N.value).replace(/\s?₫/,""):`${N.value}`}),a.jsx("span",{className:"ticket-value-unit",children:N.type===1?"₫":s("coupon.percentOff")})]}),a.jsxs("div",{className:"ticket-usage-wrap",children:[a.jsx("span",{className:"usage-label",children:s("coupon.maxUses")}),a.jsx("span",{className:"usage-val",children:N.limit_use??"∞"}),N.limit_use_with_user!=null?a.jsxs("span",{className:"usage-per-user",children:[s("coupon.maxUses")," ",N.limit_use_with_user,"/",s("coupon.perUser")]}):null]}),a.jsxs("div",{className:"ticket-actions",children:[a.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(pd(N)),"aria-label":s("common.edit"),children:a.jsx(Ht,{size:15})}),a.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void le(N.id),"aria-label":s("common.delete"),children:a.jsx(Bt,{size:15})})]})]})]},N.id)}),!B&&r.length===0?a.jsx("div",{className:"empty-state",children:s("coupon.empty")}):null]}),he>1?a.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[a.jsx("button",{className:"mini-button",disabled:h<=1,onClick:()=>{v(h-1),ce(h-1)},children:a.jsx(gn,{size:16})}),a.jsxs("span",{className:"page-info",children:[h," / ",he]}),a.jsx("button",{className:"mini-button",disabled:h>=he,onClick:()=>{v(h+1),ce(h+1)},children:a.jsx(bn,{size:16})})]}):null,y?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:y.id?s("coupon.edit"):s("coupon.add")}),a.jsx("p",{children:s("coupon.modalHelp")})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:E,children:[a.jsxs("label",{children:[a.jsx("span",{children:s("coupon.name")}),a.jsx("input",{className:"config-input",required:!0,value:y.name,onChange:N=>j({...y,name:N.target.value})})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("coupon.type")}),a.jsxs("select",{className:"config-input",value:y.type,onChange:N=>j({...y,type:N.target.value}),children:[a.jsx("option",{value:"1",children:s("coupon.type.fixed")}),a.jsx("option",{value:"2",children:s("coupon.type.percent")})]})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("coupon.value")}),a.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:y.value,onChange:N=>j({...y,value:N.target.value})})]})]}),y.id?null:a.jsxs("label",{children:[a.jsxs("span",{children:[s("coupon.code")," (",s("coupon.autoIfEmpty"),")"]}),a.jsx("input",{className:"config-input",value:y.code,onChange:N=>j({...y,code:N.target.value}),placeholder:s("coupon.autoGenerate")})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("coupon.startTime")}),a.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.started_at,onChange:N=>j({...y,started_at:N.target.value}),onClick:N=>{var R,ae;return(ae=(R=N.currentTarget).showPicker)==null?void 0:ae.call(R)},onFocus:N=>{var R,ae;return(ae=(R=N.currentTarget).showPicker)==null?void 0:ae.call(R)}})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("coupon.endTime")}),a.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.ended_at,onChange:N=>j({...y,ended_at:N.target.value}),onClick:N=>{var R,ae;return(ae=(R=N.currentTarget).showPicker)==null?void 0:ae.call(R)},onFocus:N=>{var R,ae;return(ae=(R=N.currentTarget).showPicker)==null?void 0:ae.call(R)}})]})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("coupon.usageLimit")}),a.jsx("input",{className:"config-input",type:"number",min:"0",value:y.limit_use,onChange:N=>j({...y,limit_use:N.target.value}),placeholder:s("coupon.unlimited")})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("coupon.userLimit")}),a.jsx("input",{className:"config-input",type:"number",min:"0",value:y.limit_use_with_user,onChange:N=>j({...y,limit_use_with_user:N.target.value}),placeholder:s("coupon.unlimited")})]})]}),y.id?null:a.jsxs("label",{children:[a.jsx("span",{children:s("coupon.generateCount")}),a.jsx("input",{className:"config-input",type:"number",min:"0",value:y.generate_count,onChange:N=>j({...y,generate_count:N.target.value}),placeholder:s("coupon.single")})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[a.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:s("coupon.restrictedPlans")}),y.limit_plan_ids.length>0&&a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:y.limit_plan_ids.map(N=>{const R=S.find(ae=>ae.id===N);return a.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const ae=y.limit_plan_ids.filter(M=>M!==N);j({...y,limit_plan_ids:ae})},children:[R?R.name:`#${N}`," ",a.jsx("span",{style:{opacity:.6},children:"×"})]},N)})}),S.length>5&&a.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:s("coupon.searchPlans"),value:ee,onChange:N=>se(N.target.value)}),a.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[S.filter(N=>N.name.toLowerCase().includes(ee.toLowerCase())).map(N=>{const R=y.limit_plan_ids.includes(N.id);return a.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[a.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:R,onChange:ae=>{const M=ae.target.checked?[...y.limit_plan_ids,N.id]:y.limit_plan_ids.filter(re=>re!==N.id);j({...y,limit_plan_ids:M})}}),a.jsx("span",{children:N.name})]},N.id)}),S.length===0&&a.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:s("coupon.noPlans")})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[a.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:s("coupon.restrictedPeriods")}),y.limit_period.length>0&&a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:y.limit_period.map(N=>a.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const R=y.limit_period.filter(ae=>ae!==N);j({...y,limit_period:R})},children:[Eo(s)[N]||N," ",a.jsx("span",{style:{opacity:.6},children:"×"})]},N))}),a.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(Eo(s)).map(([N,R])=>{const ae=y.limit_period.includes(N);return a.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[a.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:ae,onChange:M=>{const re=M.target.checked?[...y.limit_period,N]:y.limit_period.filter(A=>A!==N);j({...y,limit_period:re})}}),a.jsx("span",{children:R})]},N)})})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:s("common.cancel")}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:te,children:[a.jsx(Ca,{size:16}),s(te?"coupon.saving":"common.save")]})]})]})]})}):null,a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Mo(o){return new Date(o*1e3).toLocaleString("vi-VN")}function zj(o){return{1:o("giftcard.typeAmount"),2:o("giftcard.typeDuration"),3:o("giftcard.typeTraffic"),4:o("giftcard.typeReset"),5:o("giftcard.typePlan")}}function md(o){return{id:o==null?void 0:o.id,name:(o==null?void 0:o.name)??"",type:String((o==null?void 0:o.type)??1),value:o?String(o.type===1?o.value/100:o.value):"",code:(o==null?void 0:o.code)??"",started_at:o?new Date(o.started_at*1e3).toISOString().slice(0,16):"",ended_at:o?new Date(o.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(o==null?void 0:o.limit_use)!=null?String(o.limit_use):"",plan_id:(o==null?void 0:o.plan_id)!=null?String(o.plan_id):"",generate_count:""}}function Tj(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState([]),[m,g]=f.useState(0),[h,v]=f.useState(1),[S,w]=f.useState([]),[y,j]=f.useState(null),[B,X]=f.useState(!0),[te,K]=f.useState(!1),[z,G]=f.useState(""),[U,O]=f.useState(""),[ee,se]=f.useState("");f.useEffect(()=>{y||se("")},[y]);const ce=zj(s),E=f.useCallback(async(N=1)=>{X(!0),G("");try{const R=await _1(N,15);u(R.data),g(R.total)}catch(R){G(R instanceof Error?R.message:s("giftcard.loadFailed"))}finally{X(!1)}},[s]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}E(1),jl().then(w).catch(()=>{})},[E,o]);async function $(N){var R,ae;if(N.preventDefault(),!!y){K(!0),G(""),O("");try{const M=y.type==="1"?Math.round(Number(y.value)*100):Number(y.value);await S1({id:y.id,name:y.name,type:Number(y.type),value:M,code:y.code||void 0,started_at:Math.floor(new Date(y.started_at).getTime()/1e3),ended_at:Math.floor(new Date(y.ended_at).getTime()/1e3),limit_use:y.limit_use?Number(y.limit_use):null,plan_id:y.plan_id?Number(y.plan_id):null,generate_count:y.generate_count?Number(y.generate_count):void 0}),j(null),(R=window.showToast)==null||R.call(window,s("giftcard.saveSuccess"),"success"),await E(h)}catch(M){(ae=window.showToast)==null||ae.call(window,M instanceof Error?M.message:s("giftcard.saveFailed"),"error")}finally{K(!1)}}}async function le(N){var R;(R=window.showConfirm)==null||R.call(window,{message:s("giftcard.deleteConfirm"),onConfirm:async()=>{var ae,M;try{await k1(N),(ae=window.showToast)==null||ae.call(window,s("giftcard.deleteSuccess"),"success"),await E(h)}catch(re){(M=window.showToast)==null||M.call(window,re instanceof Error?re.message:s("giftcard.deleteFailed"),"error")}}})}const he=Math.ceil(m/15);return a.jsxs(Gt,{title:s("giftcard.title"),subtitle:s("giftcard.subtitle"),children:[a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("giftcard.heading")}),a.jsxs("p",{children:[m," ",s("giftcard.totalCards")]})]}),a.jsxs("div",{className:"button-row",children:[a.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void E(h),disabled:B,children:[a.jsx(_t,{size:16}),s("common.refresh")]}),a.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(md()),children:[a.jsx(ka,{size:16}),s("giftcard.add")]})]})]}),z?a.jsx("div",{className:"form-error",children:z}):null,U?a.jsx("div",{className:"form-success",children:U}):null,B&&r.length===0?a.jsx(gt,{label:s("common.loading")}):null,a.jsx("section",{className:"panel table-panel hide-on-mobile",children:a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:s("giftcard.thId")}),a.jsx("th",{children:s("giftcard.thName")}),a.jsx("th",{children:s("giftcard.thCode")}),a.jsx("th",{children:s("giftcard.thType")}),a.jsx("th",{children:s("giftcard.thValue")}),a.jsx("th",{children:s("giftcard.thBoundPlan")}),a.jsx("th",{children:s("giftcard.thUses")}),a.jsx("th",{children:s("giftcard.thPeriod")}),a.jsx("th",{children:s("giftcard.thActions")})]})}),a.jsxs("tbody",{children:[r.map(N=>{var R;return a.jsxs("tr",{children:[a.jsx("td",{children:N.id}),a.jsx("td",{children:a.jsx("strong",{children:N.name})}),a.jsx("td",{children:a.jsx("span",{className:"mono",children:N.code})}),a.jsx("td",{children:a.jsx("span",{className:"tag",children:ce[N.type]??N.type})}),a.jsx("td",{children:a.jsx("strong",{children:N.type===1?Sa(N.value):N.value})}),a.jsx("td",{children:N.plan_id?a.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((R=S.find(ae=>ae.id===N.plan_id))==null?void 0:R.name)||`#${N.plan_id}`}):a.jsx("span",{className:"tag muted-tag",children:s("giftcard.planNone")})}),a.jsx("td",{children:N.limit_use??"∞"}),a.jsx("td",{children:a.jsxs("small",{children:[Mo(N.started_at)," — ",Mo(N.ended_at)]})}),a.jsx("td",{children:a.jsxs("div",{className:"row-actions",children:[a.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(md(N)),children:[a.jsx(Ht,{size:14}),s("common.edit")]}),a.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void le(N.id),children:[a.jsx(Bt,{size:14}),s("common.delete")]})]})})]},N.id)}),!B&&r.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:9,children:a.jsx("div",{className:"empty-state",children:s("giftcard.empty")})})}):null]})]})})}),a.jsxs("div",{className:"mobile-giftcard-list",children:[r.map(N=>{var R;return a.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[a.jsxs("div",{className:"ticket-main",children:[a.jsxs("div",{className:"ticket-badge-row",children:[a.jsxs("span",{className:"ticket-id-tag",children:["ID: ",N.id]}),a.jsx("span",{className:"tag type-tag fixed-type",children:ce[N.type]??N.type})]}),a.jsx("div",{className:"ticket-title-row",children:a.jsx("h3",{className:"ticket-name",title:N.name,children:N.name})}),a.jsxs("div",{className:"ticket-code-row",children:[a.jsx("span",{className:"ticket-label",children:s("giftcard.mobileCode")}),a.jsxs("div",{className:"copyable-code-pill",title:s("giftcard.clickToCopy"),onClick:()=>{Kn(N.code).then(ae=>{var M;(M=window.showToast)==null||M.call(window,ae?s("giftcard.copiedCode").replace("{code}",N.code):s("common.copyFailed"),ae?"success":"error")})},children:[a.jsx("code",{className:"mono",children:N.code}),a.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),a.jsx("div",{className:"ticket-restrictions",children:N.plan_id?a.jsxs("div",{className:"restriction-pills",children:[a.jsx("span",{className:"res-icon",children:"📦"}),a.jsx("div",{className:"pill-list",children:a.jsx("span",{className:"res-pill plan-pill",children:((R=S.find(ae=>ae.id===N.plan_id))==null?void 0:R.name)||`#${N.plan_id}`})})]}):a.jsxs("span",{className:"all-plans-badge",children:["🔓 ",s("giftcard.appliesToAll")]})}),a.jsxs("div",{className:"ticket-dates",children:[a.jsx("span",{className:"date-icon",children:"📅"}),a.jsxs("span",{children:[Mo(N.started_at)," — ",Mo(N.ended_at)]})]})]}),a.jsxs("div",{className:"ticket-divider",children:[a.jsx("div",{className:"ticket-notch notch-top"}),a.jsx("div",{className:"ticket-notch notch-bottom"})]}),a.jsxs("div",{className:"ticket-side",children:[a.jsxs("div",{className:"ticket-value-wrap",children:[a.jsx("span",{className:"ticket-value",children:N.type===1?Sa(N.value).replace(/\s?₫/,""):`${N.value}`}),a.jsx("span",{className:"ticket-value-unit",children:N.type===1?"₫":ce[N.type]??""})]}),a.jsxs("div",{className:"ticket-usage-wrap",children:[a.jsx("span",{className:"usage-label",children:s("giftcard.maxUses")}),a.jsx("span",{className:"usage-val",children:N.limit_use??"∞"})]}),a.jsxs("div",{className:"ticket-actions",children:[a.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(md(N)),"aria-label":s("common.edit"),children:a.jsx(Ht,{size:15})}),a.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void le(N.id),"aria-label":s("common.delete"),children:a.jsx(Bt,{size:15})})]})]})]},N.id)}),!B&&r.length===0?a.jsx("div",{className:"empty-state",children:s("giftcard.empty")}):null]}),he>1?a.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[a.jsx("button",{className:"mini-button",disabled:h<=1,onClick:()=>{v(h-1),E(h-1)},children:a.jsx(gn,{size:16})}),a.jsxs("span",{className:"page-info",children:[h," / ",he]}),a.jsx("button",{className:"mini-button",disabled:h>=he,onClick:()=>{v(h+1),E(h+1)},children:a.jsx(bn,{size:16})})]}):null,y?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:y.id?s("giftcard.edit"):s("giftcard.create")}),a.jsx("p",{children:s("giftcard.modalHelp")})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:$,children:[a.jsxs("label",{children:[a.jsx("span",{children:s("giftcard.name")}),a.jsx("input",{className:"config-input",required:!0,value:y.name,onChange:N=>j({...y,name:N.target.value})})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("giftcard.labelType")}),a.jsx("select",{className:"config-input",value:y.type,onChange:N=>j({...y,type:N.target.value}),children:Object.entries(ce).map(([N,R])=>a.jsx("option",{value:N,children:R},N))})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("giftcard.value")}),a.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:y.value,onChange:N=>j({...y,value:N.target.value})})]})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("giftcard.labelStart")}),a.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.started_at,onChange:N=>j({...y,started_at:N.target.value}),onClick:N=>{var R,ae;return(ae=(R=N.currentTarget).showPicker)==null?void 0:ae.call(R)},onFocus:N=>{var R,ae;return(ae=(R=N.currentTarget).showPicker)==null?void 0:ae.call(R)}})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("giftcard.labelEnd")}),a.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.ended_at,onChange:N=>j({...y,ended_at:N.target.value}),onClick:N=>{var R,ae;return(ae=(R=N.currentTarget).showPicker)==null?void 0:ae.call(R)},onFocus:N=>{var R,ae;return(ae=(R=N.currentTarget).showPicker)==null?void 0:ae.call(R)}})]})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("giftcard.labelMaxUses")}),a.jsx("input",{className:"config-input",type:"number",min:"0",value:y.limit_use,onChange:N=>j({...y,limit_use:N.target.value}),placeholder:s("giftcard.placeholderUnlimited")})]}),y.id?a.jsx("div",{}):a.jsxs("label",{children:[a.jsx("span",{children:s("giftcard.labelBatchCount")}),a.jsx("input",{className:"config-input",type:"number",min:"0",value:y.generate_count,onChange:N=>j({...y,generate_count:N.target.value}),placeholder:s("giftcard.placeholderSingle")})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[a.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:s("giftcard.bindPlan")}),y.plan_id&&a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const N=S.find(R=>String(R.id)===y.plan_id);return a.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{j({...y,plan_id:""})},children:[N?N.name:`#${y.plan_id}`," ",a.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),S.length>5&&a.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:s("giftcard.searchPlans"),value:ee,onChange:N=>se(N.target.value)}),a.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[a.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[a.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!y.plan_id,onChange:()=>{j({...y,plan_id:""})}}),a.jsx("span",{children:s("giftcard.noneAllPlans")})]}),S.filter(N=>N.name.toLowerCase().includes(ee.toLowerCase())).map(N=>{const R=String(N.id)===y.plan_id;return a.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[a.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:R,onChange:ae=>{ae.target.checked&&j({...y,plan_id:String(N.id)})}}),a.jsx("span",{children:N.name})]},N.id)}),S.length===0&&a.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:s("giftcard.noPlans")})]})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:s("common.cancel")}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:te,children:[a.jsx(Ca,{size:16}),s(te?"giftcard.saving":"common.save")]})]})]})]})}):null,a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const ts="Tương đối",hn="=";function Do(o){return o?new Date(o*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Ej(o){if(!o)return"";const s=new Date(o*1e3),r=u=>String(u).padStart(2,"0");return`${s.getFullYear()}-${r(s.getMonth()+1)}-${r(s.getDate())}`}function Mh(o){return o?Math.floor(new Date(o).getTime()/1e3):null}function fd(o){return+(o/1073741824).toFixed(2)}function hd(o){return Math.round(o*1073741824)}function Oo(o){return(o/1073741824).toFixed(2)}function Mj(o){return o?new Date(o*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function ri(o){if(o===0)return"0.00 MB";const s=o/1073741824;return s<.1?`${(o/1048576).toFixed(2)} MB`:`${s.toFixed(2)} GB`}const Dd=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Ex="user_visible_columns";function Dj(){if(typeof window<"u")try{const o=localStorage.getItem(Ex);if(o)return new Set(JSON.parse(o))}catch{}return new Set(Dd.filter(o=>o.defaultVisible).map(o=>o.key))}const Bo=[{value:"email",label:"Email",condition:ts,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:hn,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:hn,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:hn,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:hn,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:ts,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:hn,placeholder:"12345"},{value:"uuid",label:"UUID",condition:ts,placeholder:"UUID"},{value:"token",label:"Token",condition:ts,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:ts,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:hn,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:hn,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:hn,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:hn,placeholder:"1780366403"}],Oj=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Ft(o,s){switch(o){case"id":return s("user.colId");case"email":return s("user.colEmail");case"status":return s("user.colStatus");case"plan":return s("user.colPlan");case"group":return s("user.colGroup");case"used":return s("user.colUsed");case"traffic":return s("user.colTraffic");case"devices":return s("user.colDevices");case"expires":return s("user.colExpires");case"balance":return s("user.colBalance");case"commission":return s("user.colCommission");case"joined":return s("user.colJoined");case"actions":return s("user.colActions");default:return""}}function Aj(o,s){var m;const r=((m=Bo.find(g=>g.value===o))==null?void 0:m.label)??o,u=g=>{const h=s(g);return h===g?r:h};switch(o){case"email":return s("user.filterEmail");case"id":return s("user.filterId");case"plan_id":return s("user.filterPlanId");case"banned":return u("user.filterBanned");case"is_admin":return u("user.filterAdmin");case"invite_by_email":return s("user.filterInviterEmail");case"invite_user_id":return s("user.filterInviterUserId");case"uuid":return u("user.filterUuid");case"token":return u("user.filterToken");case"remarks":return s("user.filterRemarks");case"transfer_enable":return u("user.filterTransferEnable");case"d":return u("user.filterDownloadUsed");case"device_limit":return u("user.filterDeviceLimit");case"expired_at":return u("user.filterExpiredAt");default:return r}}function xd(o){return Bo.find(s=>s.value===o)??Bo[0]}function Uj(o,s){switch(o){case"month_price":return s("order.period.month_price");case"quarter_price":return s("order.period.quarter_price");case"half_year_price":return s("order.period.half_year_price");case"year_price":return s("order.period.year_price");case"two_year_price":return s("order.period.two_year_price");case"three_year_price":return s("order.period.three_year_price");case"onetime_price":return s("order.period.onetime_price");case"reset_price":return s("order.period.reset_price");default:return""}}function Rj(){const o=Tt(),s=Ja(),{t:r}=Ke(),[u,m]=f.useState([]),[g,h]=f.useState([]),[v,S]=f.useState([]),[w,y]=f.useState(0),[j,B]=f.useState(1),[X,te]=f.useState(""),[K,z]=f.useState("email"),[G,U]=f.useState(!0),[O,ee]=f.useState(""),[se,ce]=f.useState(Dj),[E,$]=f.useState(!1),le=f.useRef(null),[he,N]=f.useState(null),[R,ae]=f.useState(null),[M,re]=f.useState({}),[A,F]=f.useState(!1),[x,P]=f.useState(!1),[H,k]=f.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[Z,ue]=f.useState(!1),[pe,Se]=f.useState(null),[ke,Re]=f.useState({plan_id:"",period:"month_price",total_amount:""}),[mt,Ge]=f.useState(!1),[Pe,Lt]=f.useState(null),[Mt,ua]=f.useState(null),[yt,aa]=f.useState([]),[Yt,pa]=f.useState(0),[ft,Qt]=f.useState(1),[Wt]=f.useState(10),[St,ma]=f.useState(!1),[T,ye]=f.useState("");f.useEffect(()=>{function _(xe){const ge=xe.target instanceof Element?xe.target:null;he!==null&&(!ge||!ge.closest(".action-dropdown-wrap, .mobile-action-sheet"))&&N(null),E&&le.current&&!le.current.contains(xe.target)&&$(!1)}return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[he,E]);function qe(_){ce(xe=>{const ge=new Set(xe);ge.has(_)?ge.delete(_):ge.add(_);try{localStorage.setItem(Ex,JSON.stringify([...ge]))}catch{}return ge})}const ve=_=>se.has(_),ot=Dd.filter(_=>se.has(_.key)).length,Y=f.useCallback(async(_=1,xe,ge)=>{U(!0),ee("");try{const Ae=xe==null?void 0:xe.trim(),Dt=xd(ge||"email"),xa=Ae?[{key:Dt.value,condition:Dt.condition,value:Ae}]:void 0,vt=await Td(_,15,xa);m(vt.data),y(vt.total)}catch(Ae){ee(Ae instanceof Error?Ae.message:r("user.loadFailed"))}finally{U(!1)}},[]),Ne=f.useCallback(async()=>{try{const[_,xe]=await Promise.all([jl(),us()]);h(_),S(xe)}catch{}},[]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}const _=new URLSearchParams(s.search),ge=[["email",_.get("email")||_.get("filter_email")],["id",_.get("id")||_.get("user_id")||_.get("filter_user_id")],["plan_id",_.get("plan_id")],["invite_user_id",_.get("invite_user_id")],["invite_by_email",_.get("invite_by_email")],["uuid",_.get("uuid")],["token",_.get("token")],["remarks",_.get("remarks")]].find(([,Ae])=>Ae==null?void 0:Ae.trim());if(ge){const[Ae,Dt]=ge,xa=xd(Ae),vt=(Dt==null?void 0:Dt.trim())??"";z(xa.value),te(vt),B(1),Y(1,vt,xa.value)}else Y(1);Ne()},[Y,Ne,o,s.search]);function we(){B(1),Y(1,X,K)}function ze(){te(""),B(1),Y(1)}function Fe(_){B(_),Y(_,X,K)}function Qe(_){if(_.plan_name)return _.plan_name;if(!_.plan_id)return"—";const xe=g.find(ge=>ge.id===_.plan_id);return xe?xe.name:`#${_.plan_id}`}function Ye(_){if(!_.group_id)return"—";const xe=v.find(ge=>ge.id===_.group_id);return xe?xe.name:`#${_.group_id}`}function He(_){return`${_.alive_ip??0} / ${_.device_limit??"∞"}`}async function rt(_){var Ae,Dt;const xe=_.subscribe_url;if(!xe){(Ae=window.showToast)==null||Ae.call(window,r("user.toastNoSubscribeUrl"),"error");return}const ge=await Kn(xe);(Dt=window.showToast)==null||Dt.call(window,r(ge?"user.toastUrlCopied":"common.copyFailed"),ge?"success":"error"),N(null)}function wl(_){var xe;N(null),(xe=window.showConfirm)==null||xe.call(window,{message:r("user.confirmResetSecret"),onConfirm:async()=>{var ge,Ae;try{await E1(_.id),(ge=window.showToast)==null||ge.call(window,r("user.toastSecretResetSuccess"),"success"),await Y(j,X,K)}catch(Dt){(Ae=window.showToast)==null||Ae.call(window,Dt instanceof Error?Dt.message:r("user.toastSecretResetFailed"),"error")}}})}function Wn(_){var xe;N(null),(xe=window.showConfirm)==null||xe.call(window,{message:r("user.confirmDelete"),onConfirm:async()=>{var ge,Ae;try{await z1(_.id),(ge=window.showToast)==null||ge.call(window,r("user.toastDeletedSuccess"),"success"),await Y(j,X,K)}catch(Dt){(Ae=window.showToast)==null||Ae.call(window,Dt instanceof Error?Dt.message:r("user.toastDeletedFailed"),"error")}}})}function Pn(_){var ge;N(null);const xe=_.subscribe_url;if(!xe){(ge=window.showToast)==null||ge.call(window,r("user.toastNoSubscribeUrl"),"error");return}Lt({url:xe,userId:_.id})}function Ya(_){N(null),o.push(`/order?user_id=${_.id}`)}function fa(_){N(null),o.push(`/subscription?user_id=${_.id}`)}function $a(_){N(null),z("invite_user_id"),te(String(_.id)),Y(1,String(_.id),"invite_user_id")}async function ea(_,xe){ma(!0),ye("");try{const ge=await R1(_,xe,Wt);aa(ge.data||[]),pa(ge.total||0),Qt(xe)}catch(ge){ye(ge instanceof Error?ge.message:r("user.historyLoading"))}finally{ma(!1)}}function L(_){N(null),ua(_),ea(_.id,1)}function de(_){N(null),Se(_.email),Re({plan_id:"",period:"month_price",total_amount:""})}async function oe(_){var xe,ge;if(_.preventDefault(),!!pe){Ge(!0);try{await hx({email:pe,plan_id:Number(ke.plan_id),period:ke.period,total_amount:(Number(ke.total_amount)||0)*100}),(xe=window.showToast)==null||xe.call(window,r("user.toastAssignSuccess"),"success"),Se(null)}catch(Ae){(ge=window.showToast)==null||ge.call(window,Ae instanceof Error?Ae.message:r("user.toastAssignFailed"),"error")}finally{Ge(!1)}}}function Oe(_){N(null),ae(_),re({id:_.id,email:_.email,invite_user_email:"",password:"",balance:_.balance,commission_balance:_.commission_balance,u:fd(_.u),d:fd(_.d),transfer_enable:fd(_.transfer_enable),device_limit:_.device_limit,network_settings:_.network_settings??"",expired_at:Ej(_.expired_at),plan_id:_.plan_id,banned:_.banned,commission_type:_.commission_type??0,commission_rate:_.commission_rate??"",discount:_.discount??"",speed_limit:_.speed_limit,is_admin:_.is_admin,is_staff:_.is_staff,remarks:_.remarks??""})}function Te(_,xe){re(ge=>({...ge,[_]:xe}))}async function We(_){var xe,ge;if(_.preventDefault(),!!R){F(!0);try{const Ae={id:R.id,email:M.email,plan_id:M.plan_id||null,expired_at:Mh(String(M.expired_at??"")),transfer_enable:hd(Number(M.transfer_enable??0)),speed_limit:M.speed_limit||null,device_limit:M.device_limit||null,u:hd(Number(M.u??0)),d:hd(Number(M.d??0)),balance:Number(M.balance??0),commission_balance:Number(M.commission_balance??0),commission_rate:M.commission_rate!==""&&M.commission_rate!==null?Number(M.commission_rate):null,commission_type:Number(M.commission_type??0),discount:M.discount!==""&&M.discount!==null?Number(M.discount):null,network_settings:M.network_settings||null,remarks:M.remarks||null,is_admin:Number(M.is_admin??0),is_staff:Number(M.is_staff??0),banned:Number(M.banned??0)};M.invite_user_email&&(Ae.invite_user_email=M.invite_user_email),M.password&&(Ae.password=M.password),await C1(Ae),(xe=window.showToast)==null||xe.call(window,r("user.toastSaveSuccess"),"success"),ae(null),await Y(j,X,K)}catch(Ae){(ge=window.showToast)==null||ge.call(window,Ae instanceof Error?Ae.message:r("user.toastSaveFailed"),"error")}finally{F(!1)}}}async function nt(_){var xe,ge;_.preventDefault(),ue(!0);try{await T1({email_prefix:H.email_prefix,email_suffix:H.email_suffix,password:H.password||void 0,plan_id:H.plan_id?Number(H.plan_id):void 0,expired_at:Mh(H.expired_at)}),(xe=window.showToast)==null||xe.call(window,r("user.toastCreateSuccess"),"success"),P(!1),k({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await Y(j,X,K)}catch(Ae){(ge=window.showToast)==null||ge.call(window,Ae instanceof Error?Ae.message:r("user.toastCreateFailed"),"error")}finally{ue(!1)}}const Me=Math.ceil(w/15),ha=xd(K);return a.jsxs(Gt,{title:r("user.title"),subtitle:r("user.subtitle"),children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:r("user.heading")}),a.jsxs("p",{children:[w," ",r("user.totalUsers")]})]}),a.jsxs("div",{className:"button-row",children:[a.jsxs("div",{className:"col-picker-wrap",ref:le,children:[a.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>$(!E),children:[a.jsx(fv,{size:16}),r("user.columns")]}),E?a.jsxs("div",{className:"col-picker-dropdown",children:[a.jsx("div",{className:"col-picker-header",children:a.jsx("span",{children:r("user.visibleColumns",{count:ot})})}),Dd.map(_=>a.jsxs("label",{className:"col-picker-item",children:[a.jsx("input",{type:"checkbox",checked:se.has(_.key),onChange:()=>qe(_.key)}),a.jsx("span",{children:Ft(_.key,r)})]},_.key))]}):null]}),a.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Y(j,X,K),disabled:G,children:[a.jsx(_t,{size:16}),r("common.refresh")]}),a.jsxs("button",{className:"primary-button",type:"button",onClick:()=>P(!0),children:[a.jsx(ka,{size:16}),r("user.createUser")]})]})]}),a.jsxs("div",{className:"filter-bar",children:[a.jsx("select",{className:"config-input filter-select",value:K,onChange:_=>z(_.target.value),children:Bo.map(_=>a.jsx("option",{value:_.value,children:Aj(_.value,r)},_.value))}),a.jsxs("div",{className:"search-input-wrap",children:[a.jsx($o,{size:16}),a.jsx("input",{className:"config-input search-input",value:X,onChange:_=>te(_.target.value),placeholder:ha.placeholder,onKeyDown:_=>_.key==="Enter"&&we()})]}),a.jsxs("button",{className:"ghost-button",type:"button",onClick:we,children:[a.jsx(cs,{size:16}),r("user.filter")]}),X?a.jsxs("button",{className:"ghost-button",type:"button",onClick:ze,children:[a.jsx(st,{size:16}),r("user.clearFilter")]}):null]}),O?a.jsx("div",{className:"form-error",children:O}):null,G&&u.length===0?a.jsx(gt,{label:r("user.loading")}):null,a.jsxs("div",{className:`content-loading-container ${G?"is-loading":""}`,children:[a.jsx("div",{className:"page-loading-bar"}),a.jsxs("div",{className:"mobile-user-list",children:[u.map(_=>{const xe=Oo(_.u+_.d),ge=Oo(_.transfer_enable),Ae=parseFloat(xe);return a.jsxs("div",{className:"mobile-user-card",children:[a.jsxs("div",{className:"mobile-user-card-header",children:[a.jsxs("div",{className:"user-id-email",children:[a.jsxs("span",{className:"user-id",children:["#",_.id]}),a.jsx("span",{className:"user-email",title:_.email,children:_.email})]}),_.banned?a.jsx("span",{className:"status-tag banned",children:r("user.cardBanned")}):a.jsx("span",{className:"status-tag normal",children:r("user.cardActive")})]}),a.jsxs("div",{className:"mobile-user-card-body",children:[a.jsxs("div",{className:"info-row",children:[a.jsx("span",{className:"info-label",children:r("user.planGroupLabel")}),a.jsxs("span",{className:"info-val",children:[Qe(_)," / ",_.is_admin?a.jsx("span",{style:{fontWeight:600},children:r("user.adminLabel")}):Ye(_)]})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{className:"info-label",children:r("user.trafficUsedLimitLabel")}),a.jsxs("span",{className:"info-val",children:[a.jsxs("span",{className:`traffic-used ${Ae>0?Ae>parseFloat(ge)*.9?"high":"ok":""}`,children:[xe," GB"]})," / ",ge," GB"]})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{className:"info-label",children:Ft("devices",r)}),a.jsx("span",{className:"info-val",children:He(_)})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{className:"info-label",children:Ft("expires",r)}),a.jsx("span",{className:"info-val",children:_.expired_at?a.jsx("span",{className:`expiry-date ${_.expired_at<Date.now()/1e3?"expired":""}`,children:Do(_.expired_at)}):a.jsx("span",{className:"expiry-none",children:"—"})})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{className:"info-label",children:r("user.balanceCommLabel")}),a.jsxs("span",{className:"info-val",children:[(_.balance/100).toFixed(2)," ₫ / ",(_.commission_balance/100).toFixed(2)," ₫"]})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("span",{className:"info-label",children:Ft("joined",r)}),a.jsx("span",{className:"info-val",children:a.jsx("small",{children:Do(_.created_at)})})]})]}),a.jsx("div",{className:"mobile-user-card-actions",children:a.jsxs("div",{className:`action-dropdown-wrap ${he===_.id?"active":""}`,children:[a.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>N(he===_.id?null:_.id),children:[r("user.colActions")," ",a.jsx(bl,{size:14})]}),he===_.id?a.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>N(null),children:a.jsxs("div",{className:"mobile-action-sheet",onClick:Dt=>Dt.stopPropagation(),children:[a.jsxs("div",{className:"mobile-action-sheet-head",children:[a.jsxs("div",{children:[a.jsx("strong",{children:_.email}),a.jsxs("small",{children:["#",_.id]})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(null),children:a.jsx(st,{size:16})})]}),a.jsxs("div",{className:"action-dropdown-menu mobile-action-menu",children:[a.jsxs("button",{type:"button",onClick:()=>Oe(_),children:[a.jsx(Ht,{size:14}),r("user.actionEdit")]}),a.jsxs("button",{type:"button",onClick:()=>de(_),children:[a.jsx(rh,{size:14}),r("user.actionAssignOrder")]}),a.jsxs("button",{type:"button",onClick:()=>void rt(_),children:[a.jsx(_a,{size:14}),r("user.actionCopyUrl")]}),a.jsxs("button",{type:"button",onClick:()=>Pn(_),children:[a.jsx(sh,{size:14}),r("user.actionGetQr")]}),a.jsxs("button",{type:"button",onClick:()=>wl(_),children:[a.jsx(Lo,{size:14}),r("user.actionResetSecret")]}),a.jsxs("button",{type:"button",onClick:()=>Ya(_),children:[a.jsx(lh,{size:14}),r("user.actionOrders")]}),a.jsxs("button",{type:"button",onClick:()=>fa(_),children:[a.jsx(Sd,{size:14}),r("user.actionSubscriptions")]}),a.jsxs("button",{type:"button",onClick:()=>$a(_),children:[a.jsx(ds,{size:14}),r("user.actionInvitedUsers")]}),a.jsxs("button",{type:"button",onClick:()=>L(_),children:[a.jsx(sd,{size:14}),r("user.actionDataHistory")]}),a.jsx("div",{className:"menu-divider"}),a.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Wn(_),children:[a.jsx(Bt,{size:14}),r("user.actionDelete")]})]})]})}):null]})})]},_.id)}),!G&&u.length===0?a.jsx("div",{className:"empty-state",children:r("user.noUsers")}):null]}),a.jsx("section",{className:"panel table-panel hide-on-mobile",children:a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table user-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[ve("id")&&a.jsx("th",{children:Ft("id",r)}),ve("email")&&a.jsx("th",{children:Ft("email",r)}),ve("status")&&a.jsx("th",{children:Ft("status",r)}),ve("plan")&&a.jsx("th",{children:Ft("plan",r)}),ve("group")&&a.jsx("th",{children:Ft("group",r)}),ve("used")&&a.jsx("th",{children:Ft("used",r)}),ve("traffic")&&a.jsx("th",{children:Ft("traffic",r)}),ve("devices")&&a.jsx("th",{children:Ft("devices",r)}),ve("expires")&&a.jsx("th",{children:Ft("expires",r)}),ve("balance")&&a.jsx("th",{children:Ft("balance",r)}),ve("commission")&&a.jsx("th",{children:Ft("commission",r)}),ve("joined")&&a.jsx("th",{children:Ft("joined",r)}),ve("actions")&&a.jsx("th",{children:Ft("actions",r)})]})}),a.jsxs("tbody",{children:[u.map(_=>{const xe=Oo(_.u+_.d),ge=Oo(_.transfer_enable),Ae=parseFloat(xe);return a.jsxs("tr",{children:[ve("id")&&a.jsx("td",{children:_.id}),ve("email")&&a.jsx("td",{children:a.jsx("span",{className:"email-link",children:_.email})}),ve("status")&&a.jsx("td",{children:_.banned?a.jsx("span",{className:"status-tag banned",children:r("user.cardBanned")}):a.jsx("span",{className:"status-tag normal",children:r("user.cardActive")})}),ve("plan")&&a.jsx("td",{children:Qe(_)}),ve("group")&&a.jsx("td",{children:_.is_admin?a.jsx("span",{style:{fontWeight:600},children:r("user.adminLabel")}):Ye(_)}),ve("used")&&a.jsx("td",{children:a.jsx("span",{className:`traffic-used ${Ae>0?Ae>parseFloat(ge)*.9?"high":"ok":""}`,children:xe})}),ve("traffic")&&a.jsx("td",{children:ge}),ve("devices")&&a.jsx("td",{children:He(_)}),ve("expires")&&a.jsx("td",{children:_.expired_at?a.jsx("span",{className:`expiry-date ${_.expired_at<Date.now()/1e3?"expired":""}`,children:Do(_.expired_at)}):a.jsx("span",{className:"expiry-none",children:"—"})}),ve("balance")&&a.jsx("td",{children:(_.balance/100).toFixed(2)}),ve("commission")&&a.jsx("td",{children:(_.commission_balance/100).toFixed(2)}),ve("joined")&&a.jsx("td",{children:a.jsx("small",{children:Do(_.created_at)})}),ve("actions")&&a.jsx("td",{children:a.jsxs("div",{className:`action-dropdown-wrap ${he===_.id?"active":""}`,children:[a.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>N(he===_.id?null:_.id),children:[r("user.colActions")," ",a.jsx(bl,{size:14})]}),he===_.id?a.jsxs("div",{className:"action-dropdown-menu",children:[a.jsxs("button",{type:"button",onClick:()=>Oe(_),children:[a.jsx(Ht,{size:14}),r("user.actionEdit")]}),a.jsxs("button",{type:"button",onClick:()=>de(_),children:[a.jsx(rh,{size:14}),r("user.actionAssignOrder")]}),a.jsxs("button",{type:"button",onClick:()=>void rt(_),children:[a.jsx(_a,{size:14}),r("user.actionCopyUrl")]}),a.jsxs("button",{type:"button",onClick:()=>Pn(_),children:[a.jsx(sh,{size:14}),r("user.actionGetQr")]}),a.jsxs("button",{type:"button",onClick:()=>wl(_),children:[a.jsx(Lo,{size:14}),r("user.actionResetSecret")]}),a.jsxs("button",{type:"button",onClick:()=>Ya(_),children:[a.jsx(lh,{size:14}),r("user.actionOrders")]}),a.jsxs("button",{type:"button",onClick:()=>fa(_),children:[a.jsx(Sd,{size:14}),r("user.actionSubscriptions")]}),a.jsxs("button",{type:"button",onClick:()=>$a(_),children:[a.jsx(ds,{size:14}),r("user.actionInvitedUsers")]}),a.jsxs("button",{type:"button",onClick:()=>L(_),children:[a.jsx(sd,{size:14}),r("user.actionDataHistory")]}),a.jsx("div",{className:"menu-divider"}),a.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Wn(_),children:[a.jsx(Bt,{size:14}),r("user.actionDelete")]})]}):null]})})]},_.id)}),!G&&u.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:ot,children:a.jsx("div",{className:"empty-state",children:r("user.noUsers")})})}):null]})]})})}),Me>1?a.jsx("div",{className:"pagination-wrap",children:a.jsxs("div",{className:"pagination",children:[a.jsx("button",{className:"mini-button",disabled:j<=1,onClick:()=>Fe(j-1),children:a.jsx(gn,{size:16})}),Array.from({length:Math.min(5,Me)},(_,xe)=>{let ge;return Me<=5||j<=3?ge=xe+1:j>=Me-2?ge=Me-4+xe:ge=j-2+xe,a.jsx("button",{className:`mini-button ${ge===j?"active-page":""}`,onClick:()=>Fe(ge),children:ge},ge)}),Me>5?a.jsxs("span",{className:"page-info",children:["… ",Me]}):null,a.jsx("button",{className:"mini-button",disabled:j>=Me,onClick:()=>Fe(j+1),children:a.jsx(bn,{size:16})})]})}):null]}),R?a.jsx("div",{className:"modal-backdrop",onClick:()=>ae(null),children:a.jsxs("section",{className:"modal-panel edit-user-modal",onClick:_=>_.stopPropagation(),children:[a.jsxs("div",{className:"modal-heading",children:[a.jsx("h2",{children:r("user.editUser")}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>ae(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-body-scroll",onSubmit:We,children:[a.jsxs("label",{className:"field-label",children:[r("user.email"),a.jsx("input",{className:"config-input",type:"email",required:!0,value:String(M.email??""),onChange:_=>Te("email",_.target.value)})]}),a.jsxs("label",{className:"field-label",children:[r("user.inviterEmailLabel"),a.jsx("input",{className:"config-input",type:"email",value:String(M.invite_user_email??""),onChange:_=>Te("invite_user_email",_.target.value),placeholder:r("user.inviterEmailLabel")})]}),a.jsxs("label",{className:"field-label",children:[r("user.password"),a.jsx("input",{className:"config-input",type:"password",value:String(M.password??""),onChange:_=>Te("password",_.target.value),placeholder:r("user.passwordPlaceholder"),minLength:8})]}),a.jsxs("div",{className:"form-row-2",children:[a.jsxs("label",{className:"field-label",children:[r("user.balance"),a.jsxs("div",{className:"input-with-suffix",children:[a.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(M.balance??0)/100).toFixed(2)),onChange:_=>Te("balance",Math.round(Number(_.target.value)*100))}),a.jsx("span",{className:"input-suffix",children:"₫"})]})]}),a.jsxs("label",{className:"field-label",children:[r("user.commissionBalance"),a.jsxs("div",{className:"input-with-suffix",children:[a.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(M.commission_balance??0)/100).toFixed(2)),onChange:_=>Te("commission_balance",Math.round(Number(_.target.value)*100))}),a.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),a.jsxs("div",{className:"form-row-2",children:[a.jsxs("label",{className:"field-label",children:[r("user.uploadLabel"),a.jsxs("div",{className:"input-with-suffix",children:[a.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(M.u??0),onChange:_=>Te("u",_.target.value)}),a.jsx("span",{className:"input-suffix",children:"GB"})]})]}),a.jsxs("label",{className:"field-label",children:[r("user.downloadLabel"),a.jsxs("div",{className:"input-with-suffix",children:[a.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(M.d??0),onChange:_=>Te("d",_.target.value)}),a.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),a.jsxs("label",{className:"field-label",children:[r("user.transferEnable"),a.jsxs("div",{className:"input-with-suffix",children:[a.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(M.transfer_enable??0),onChange:_=>Te("transfer_enable",_.target.value)}),a.jsx("span",{className:"input-suffix",children:"GB"})]})]}),a.jsxs("label",{className:"field-label",children:[r("user.deviceLimit"),a.jsx("input",{className:"config-input",type:"number",min:"0",value:String(M.device_limit??""),onChange:_=>Te("device_limit",_.target.value?Number(_.target.value):null),placeholder:r("user.deviceLimitPlaceholder")})]}),a.jsxs("label",{className:"field-label",children:[r("user.sniUserLabel"),a.jsx("input",{className:"config-input",value:String(M.network_settings??""),onChange:_=>Te("network_settings",_.target.value),placeholder:r("user.sniUserPlaceholder")})]}),a.jsxs("label",{className:"field-label",children:[r("user.expiredAt"),a.jsx("input",{className:"config-input",type:"date",value:String(M.expired_at??""),onChange:_=>Te("expired_at",_.target.value),onClick:_=>{var xe,ge;return(ge=(xe=_.currentTarget).showPicker)==null?void 0:ge.call(xe)},onFocus:_=>{var xe,ge;return(ge=(xe=_.currentTarget).showPicker)==null?void 0:ge.call(xe)}})]}),a.jsxs("label",{className:"field-label",children:[r("user.plan"),a.jsxs("select",{className:"config-input",value:String(M.plan_id??""),onChange:_=>Te("plan_id",_.target.value?Number(_.target.value):null),children:[a.jsx("option",{value:"",children:r("user.planNone")}),g.map(_=>a.jsx("option",{value:_.id,children:_.name},_.id))]})]}),a.jsxs("label",{className:"field-label",children:[r("user.accountStatusLabel"),a.jsxs("select",{className:"config-input",value:String(M.banned??0),onChange:_=>Te("banned",Number(_.target.value)),children:[a.jsx("option",{value:"0",children:r("user.cardActive")}),a.jsx("option",{value:"1",children:r("user.cardBanned")})]})]}),a.jsxs("label",{className:"field-label",children:[r("user.commissionTypeLabel"),a.jsxs("select",{className:"config-input",value:String(M.commission_type??0),onChange:_=>Te("commission_type",Number(_.target.value)),children:[a.jsx("option",{value:"0",children:r("user.commissionTypeSystem")}),a.jsx("option",{value:"1",children:r("user.commissionTypeFixed")}),a.jsx("option",{value:"2",children:r("user.commissionTypePercent")})]})]}),a.jsxs("label",{className:"field-label",children:[r("user.commissionRate"),a.jsxs("div",{className:"input-with-suffix",children:[a.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(M.commission_rate??""),onChange:_=>Te("commission_rate",_.target.value),placeholder:r("user.commissionRatePlaceholder")}),a.jsx("span",{className:"input-suffix",children:"%"})]})]}),a.jsxs("label",{className:"field-label",children:[r("user.discount"),a.jsxs("div",{className:"input-with-suffix",children:[a.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(M.discount??""),onChange:_=>Te("discount",_.target.value),placeholder:r("user.exclusiveDiscountPlaceholder")}),a.jsx("span",{className:"input-suffix",children:"%"})]})]}),a.jsxs("label",{className:"field-label",children:[r("user.speedLimit"),a.jsxs("div",{className:"input-with-suffix",children:[a.jsx("input",{className:"config-input",type:"number",min:"0",value:String(M.speed_limit??""),onChange:_=>Te("speed_limit",_.target.value?Number(_.target.value):null),placeholder:r("user.speedLimitPlaceholder")}),a.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),a.jsxs("div",{className:"toggle-field",children:[a.jsx("span",{className:"field-label-text",children:r("user.adminLabel")}),a.jsx("button",{type:"button",className:`admin-switch ${M.is_admin?"active":""}`,onClick:()=>Te("is_admin",M.is_admin?0:1),children:a.jsx("span",{className:"admin-switch-thumb"})})]}),a.jsxs("div",{className:"toggle-field",children:[a.jsx("span",{className:"field-label-text",children:r("user.staffLabel")}),a.jsx("button",{type:"button",className:`admin-switch ${M.is_staff?"active":""}`,onClick:()=>Te("is_staff",M.is_staff?0:1),children:a.jsx("span",{className:"admin-switch-thumb"})})]}),a.jsxs("label",{className:"field-label",children:[r("user.remarks"),a.jsx("textarea",{className:"config-input",rows:3,value:String(M.remarks??""),onChange:_=>Te("remarks",_.target.value),placeholder:r("user.remarksPlaceholder")})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ae(null),children:r("common.cancel")}),a.jsx("button",{className:"primary-button",type:"submit",disabled:A,children:r(A?"common.processing":"common.save")})]})]})]})}):null,x?a.jsx("div",{className:"modal-backdrop",onClick:()=>P(!1),children:a.jsxs("section",{className:"modal-panel compact-modal",onClick:_=>_.stopPropagation(),children:[a.jsxs("div",{className:"modal-heading",children:[a.jsx("h2",{children:r("user.createUser")}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>P(!1),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:nt,children:[a.jsxs("label",{className:"field-label",children:[r("user.email"),a.jsxs("div",{className:"email-compose",children:[a.jsx("input",{className:"config-input",required:!0,value:H.email_prefix,onChange:_=>k({...H,email_prefix:_.target.value}),placeholder:r("user.emailPrefix")}),a.jsx("span",{className:"email-at",children:"@"}),a.jsx("input",{className:"config-input",required:!0,value:H.email_suffix,onChange:_=>k({...H,email_suffix:_.target.value}),placeholder:r("user.emailSuffix")})]})]}),a.jsxs("label",{className:"field-label",children:[r("user.password"),a.jsx("input",{className:"config-input",type:"password",value:H.password,onChange:_=>k({...H,password:_.target.value}),placeholder:r("user.createPasswordPlaceholder"),minLength:8})]}),a.jsxs("label",{className:"field-label",children:[r("user.plan"),a.jsxs("select",{className:"config-input",value:H.plan_id,onChange:_=>k({...H,plan_id:_.target.value}),children:[a.jsx("option",{value:"",children:r("user.planNone")}),g.map(_=>a.jsx("option",{value:_.id,children:_.name},_.id))]})]}),a.jsxs("label",{className:"field-label",children:[r("user.expiredAt"),a.jsx("input",{className:"config-input",type:"date",value:H.expired_at,onChange:_=>k({...H,expired_at:_.target.value}),onClick:_=>{var xe,ge;return(ge=(xe=_.currentTarget).showPicker)==null?void 0:ge.call(xe)},onFocus:_=>{var xe,ge;return(ge=(xe=_.currentTarget).showPicker)==null?void 0:ge.call(xe)}})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>P(!1),children:r("common.cancel")}),a.jsx("button",{className:"primary-button",type:"submit",disabled:Z,children:r(Z?"user.creating":"user.createUser")})]})]})]})}):null,pe?a.jsx("div",{className:"modal-backdrop",onClick:()=>Se(null),children:a.jsxs("section",{className:"modal-panel compact-modal",onClick:_=>_.stopPropagation(),children:[a.jsxs("div",{className:"modal-heading",children:[a.jsx("h2",{children:r("user.assignOrderTitle")}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>Se(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:oe,children:[a.jsxs("label",{className:"field-label",children:[r("user.email"),a.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:pe})]}),a.jsxs("label",{className:"field-label",children:[r("user.plan"),a.jsxs("select",{className:"config-input",required:!0,value:ke.plan_id,onChange:_=>Re({...ke,plan_id:_.target.value}),children:[a.jsx("option",{value:"",children:r("user.assignPlanSelect")}),g.map(_=>a.jsx("option",{value:_.id,children:_.name},_.id))]})]}),a.jsxs("label",{className:"field-label",children:[r("user.assignPeriodLabel"),a.jsx("select",{className:"config-input",value:ke.period,onChange:_=>Re({...ke,period:_.target.value}),children:Oj.map(_=>a.jsx("option",{value:_.value,children:Uj(_.value,r)},_.value))})]}),a.jsxs("label",{className:"field-label",children:[r("user.assignTotalAmountLabel"),a.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:ke.total_amount,onChange:_=>Re({...ke,total_amount:_.target.value}),placeholder:"0"})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Se(null),children:r("common.cancel")}),a.jsx("button",{className:"primary-button",type:"submit",disabled:mt,children:r(mt?"common.processing":"common.save")})]})]})]})}):null,a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),Pe?a.jsx("div",{className:"modal-backdrop",onClick:()=>Lt(null),children:a.jsxs("section",{className:"modal-panel qr-modal",onClick:_=>_.stopPropagation(),children:[a.jsxs("div",{className:"modal-heading",children:[a.jsx("h2",{children:r("user.qrCodeTitle")}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>Lt(null),children:a.jsx(st,{size:18})})]}),a.jsxs("div",{className:"qr-body",children:[a.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Pe.url)}`,alt:r("user.actionGetQr"),width:200,height:200}),a.jsx("div",{className:"qr-url",children:r("user.qrCodeUserId",{userId:Pe.userId})})]})]})}):null,Mt?a.jsx("div",{className:"modal-backdrop",onClick:()=>ua(null),children:a.jsxs("section",{className:"modal-panel history-modal",onClick:_=>_.stopPropagation(),children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:r("user.dataHistoryTitle")}),a.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:r("user.dataHistorySub",{email:Mt.email,id:Mt.id})})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>ua(null),children:a.jsx(st,{size:18})})]}),a.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[T?a.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:T}):null,a.jsxs("div",{className:"history-summary-grid",children:[a.jsxs("div",{className:"summary-card",children:[a.jsx("div",{className:"summary-card-title",children:r("user.historyLogCount")}),a.jsx("div",{className:"summary-card-value",children:r("user.historyTotalDays",{count:Yt})})]}),a.jsxs("div",{className:"summary-card",children:[a.jsx("div",{className:"summary-card-title",children:r("user.historyTotalUpload")}),a.jsx("div",{className:"summary-card-value highlight",children:ri(yt.reduce((_,xe)=>_+xe.u,0))})]}),a.jsxs("div",{className:"summary-card",children:[a.jsx("div",{className:"summary-card-title",children:r("user.historyTotalDownload")}),a.jsx("div",{className:"summary-card-value highlight",children:ri(yt.reduce((_,xe)=>_+xe.d,0))})]}),a.jsxs("div",{className:"summary-card",children:[a.jsx("div",{className:"summary-card-title",children:r("user.historyCombinedUsage")}),a.jsx("div",{className:"summary-card-value highlight",children:ri(yt.reduce((_,xe)=>_+xe.u+xe.d,0))})]})]}),St?a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:a.jsx(gt,{label:r("user.historyLoading")})}):yt.length===0?a.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[a.jsx(sd,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),a.jsx("p",{style:{fontWeight:500},children:r("user.historyNoHistory")}),a.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:r("user.historyNoHistoryHelp")})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:a.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:r("user.historyColDate")}),a.jsx("th",{children:r("user.historyColRate")}),a.jsx("th",{children:r("user.historyColUpload")}),a.jsx("th",{children:r("user.historyColDownload")}),a.jsx("th",{children:r("user.historyColTotal")})]})}),a.jsx("tbody",{children:yt.map(_=>{const xe=ri(_.u),ge=ri(_.d),Ae=ri(_.u+_.d);return a.jsxs("tr",{children:[a.jsx("td",{style:{fontWeight:500},children:Mj(_.record_at)}),a.jsx("td",{children:a.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(_.server_rate).toFixed(1),"x"]})}),a.jsx("td",{style:{color:"var(--muted)"},children:xe}),a.jsx("td",{style:{color:"var(--muted)"},children:ge}),a.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Ae})]},_.id)})})]})}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[a.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:r("user.historyShowingLogs",{start:Math.min((ft-1)*Wt+1,Yt),end:Math.min(ft*Wt,Yt),total:Yt})}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsxs("button",{className:"ghost-button",type:"button",disabled:ft<=1,onClick:()=>ea(Mt.id,ft-1),children:[a.jsx(gn,{size:16}),r("user.historyPrev")]}),a.jsxs("button",{className:"ghost-button",type:"button",disabled:ft*Wt>=Yt,onClick:()=>ea(Mt.id,ft+1),children:[r("user.historyNext"),a.jsx(bn,{size:16})]})]})]})]})]})]})}):null]})}const Dh=15,Oh=20,Hj=["email","id","user_id","plan_id","status"];function $n(o,s){return o?new Date(o*1e3).toLocaleString():s}function Lj(o){if(!o)return"";const s=new Date(o*1e3),r=u=>String(u).padStart(2,"0");return`${s.getFullYear()}-${r(s.getMonth()+1)}-${r(s.getDate())}`}function qj(o){return o?Math.floor(new Date(o).getTime()/1e3):null}function xl(o){return+(o/1073741824).toFixed(2)}function gd(o){return Math.round((Number(o)||0)*1073741824)}function Bj(o){return o==="email"?"like":"="}function Gj(o,s){switch(o){case"email":return s("subscription.filterEmail");case"id":return s("subscription.filterId");case"user_id":return s("subscription.filterUserId");case"plan_id":return s("subscription.filterPlanId");case"status":return s("subscription.filterStatus");default:return o}}function Ah(o,s){return s(o==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Uh(o,s){switch(o){case"bound":return s("subscription.slotStatusBound");case"banned":return s("subscription.slotStatusBanned");default:return s("subscription.slotStatusPending")}}function Rh(o){switch(o){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Yj(o){return o.transfer_enable?Math.min(100,Math.round(o.total_used/o.transfer_enable*100)):0}function $j(){const o=Tt(),s=Ja(),{t:r}=Ke(),[u,m]=f.useState([]),[g,h]=f.useState(0),[v,S]=f.useState(1),[w,y]=f.useState("email"),[j,B]=f.useState(""),[X,te]=f.useState(!0),[K,z]=f.useState(""),[G,U]=f.useState(null),[O,ee]=f.useState({}),[se,ce]=f.useState(null),[E,$]=f.useState(null),[le,he]=f.useState([]),[N,R]=f.useState(0),[ae,M]=f.useState(1),[re,A]=f.useState(!1),[F,x]=f.useState(""),[P,H]=f.useState(null);function k(T){const ye=T==null?void 0:T.trim();ye&&o.push(`/user?email=${encodeURIComponent(ye)}`)}const Z=f.useCallback(async(T=1,ye="",qe="email")=>{te(!0),z("");try{const ve=ye.trim()?[{key:qe,condition:Bj(qe),value:ye.trim()}]:void 0,ot=await M1(T,Dh,ve);m(ot.data),h(ot.total),S(T)}catch(ve){z(ve instanceof Error?ve.message:r("subscription.loadFailed"))}finally{te(!1)}},[r]),ue=f.useCallback(async(T,ye=1)=>{A(!0),x("");try{const qe=await bx(ye,Oh,[{key:"subscription_id",condition:"=",value:String(T.id)}]);he(qe.data),R(qe.total),M(ye)}catch(qe){x(qe instanceof Error?qe.message:r("subscription.slotsLoadFailed"))}finally{A(!1)}},[r]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}const T=new URLSearchParams(s.search),qe=[["user_id",T.get("user_id")],["id",T.get("id")],["plan_id",T.get("plan_id")],["email",T.get("email")],["status",T.get("status")]].find(([,ve])=>ve&&ve.trim());if(qe){const[ve,ot]=qe,Y=ot??"";y(ve),B(Y),Z(1,Y,ve);return}Z()},[Z,s.search,o]);function pe(T){T.preventDefault(),Z(1,j,w)}function Se(){if(B(""),s.search){o.replace("/subscription");return}Z(1,"",w)}function ke(T){U(T),ee({transfer_enable:String(xl(T.transfer_enable)),u:String(xl(T.u)),d:String(xl(T.d)),device_limit:T.device_limit===null?"":String(T.device_limit),speed_limit:T.speed_limit===null?"":String(T.speed_limit),expired_at:Lj(T.expired_at),status:T.status,auto_renewal:String(T.auto_renewal||0),remarks:T.remarks??""})}async function Re(T){var ye,qe;if(T.preventDefault(),!!G){ce(G.id);try{await O1({id:G.id,transfer_enable:gd(O.transfer_enable),u:gd(O.u),d:gd(O.d),device_limit:O.device_limit===""?null:Number(O.device_limit),speed_limit:O.speed_limit===""?null:Number(O.speed_limit),expired_at:qj(O.expired_at),status:O.status,auto_renewal:Number(O.auto_renewal),remarks:O.remarks}),U(null),(ye=window.showToast)==null||ye.call(window,r("subscription.updateSuccess"),"success"),await Z(v,j,w)}catch(ve){(qe=window.showToast)==null||qe.call(window,ve instanceof Error?ve.message:r("subscription.saveFailed"),"error")}finally{ce(null)}}}function mt(T){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:r("subscription.resetConfirm",{id:T.id}),onConfirm:async()=>{var qe,ve;ce(T.id);try{await A1(T.id),(qe=window.showToast)==null||qe.call(window,r("subscription.resetSuccess"),"success"),await Z(v,j,w)}catch(ot){(ve=window.showToast)==null||ve.call(window,ot instanceof Error?ot.message:r("subscription.resetFailed"),"error")}finally{ce(null)}}})}async function Ge(T){var qe;if(!T)return;const ye=await Kn(T);(qe=window.showToast)==null||qe.call(window,r(ye?"subscription.copySuccess":"common.copyFailed"),ye?"success":"error")}async function Pe(T){var ye,qe;H(T.id);try{let ve=T.subscribe_url||null;if(ve||(ve=(await D1(T.id)).data,ve&&m(Y=>Y.map(Ne=>Ne.id===T.id?{...Ne,subscribe_url:ve}:Ne))),!ve){(ye=window.showToast)==null||ye.call(window,r("common.copyFailed"),"error");return}await Ge(ve)}catch(ve){(qe=window.showToast)==null||qe.call(window,ve instanceof Error?ve.message:r("common.copyFailed"),"error")}finally{H(null)}}function Lt(T){$(T),he([]),R(0),M(1),ue(T,1)}function Mt(T=ae){return E?ue(E,T):Promise.resolve()}function ua(T){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:r("subscription.unbindConfirm"),onConfirm:async()=>{var qe,ve;ce(T.id);try{await yx(T.id),(qe=window.showToast)==null||qe.call(window,r("subscription.unbindSuccess"),"success"),await Promise.all([Mt(),Z(v,j,w)])}catch(ot){(ve=window.showToast)==null||ve.call(window,ot instanceof Error?ot.message:r("subscription.unbindFailed"),"error")}finally{ce(null)}}})}function yt(T){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:r("subscription.banConfirm"),onConfirm:async()=>{var qe,ve;ce(T.id);try{await vx(T.id),(qe=window.showToast)==null||qe.call(window,r("subscription.banSuccess"),"success"),await Promise.all([Mt(),Z(v,j,w)])}catch(ot){(ve=window.showToast)==null||ve.call(window,ot instanceof Error?ot.message:r("subscription.banFailed"),"error")}finally{ce(null)}}})}function aa(T){const ye=T.device_limit&&T.device_limit>0?String(T.device_limit):r("subscription.unlimited"),qe=!!(T.device_count||T.device_limit&&T.device_limit>0);return a.jsxs("div",{className:"subscription-slot-cell",children:[a.jsxs("div",{className:"subscription-slot-count",children:[a.jsx("span",{children:T.device_count}),a.jsx("span",{children:"/"}),a.jsx("span",{children:ye})]}),T.device_limit&&T.device_limit>0?a.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:a.jsx("span",{style:{width:`${Math.min(100,Math.round(T.device_count/T.device_limit*100))}%`}})}):a.jsx("small",{children:r("subscription.noDeviceLimit")}),qe?a.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Lt(T),children:[a.jsx(Sd,{size:14}),a.jsx("span",{children:r("subscription.manageUuids")})]}):null]})}function Yt(T){return a.jsxs("div",{className:"subscription-traffic",children:[a.jsxs("strong",{children:[xl(T.total_used)," / ",xl(T.transfer_enable)," GB"]}),a.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:a.jsx("span",{style:{width:`${Yj(T)}%`}})}),a.jsx("small",{children:r("subscription.uploadDownload",{upload:xl(T.u),download:xl(T.d)})})]})}function pa(T){return a.jsxs("div",{className:"subscription-copy-item",children:[a.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.uuid,onClick:()=>Ge(T.uuid),children:[a.jsx(_a,{size:14}),a.jsx("span",{className:"mono",children:T.uuid})]}),a.jsx("small",{children:r("subscription.primaryUuid")})]})}function ft(T){return a.jsxs("div",{className:"subscription-link-stack",children:[pa(T),T.subscribe_url?a.jsxs("div",{className:"subscription-copy-item",children:[a.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.subscribe_url,onClick:()=>void Pe(T),disabled:P===T.id,children:[a.jsx(_a,{size:14}),a.jsx("span",{className:"mono",children:T.subscribe_url})]}),a.jsx("small",{children:r("subscription.colSubscribeUrl")})]}):a.jsxs("div",{className:"subscription-copy-item",children:[a.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void Pe(T),disabled:P===T.id,children:[a.jsx(_a,{size:14}),a.jsx("span",{children:P===T.id?r("common.processing"):r("subscription.colSubscribeUrl")})]}),a.jsx("small",{children:r("subscription.colSubscribeUrl")})]})]})}function Qt(T){return a.jsxs("div",{className:"row-actions subscription-actions",children:[a.jsxs("button",{className:"mini-button",type:"button",onClick:()=>ke(T),children:[a.jsx(Ht,{size:14}),r("subscription.edit")]}),a.jsxs("button",{className:"mini-button",type:"button",disabled:se===T.id,onClick:()=>mt(T),children:[a.jsx(Lo,{size:14}),r("subscription.resetSecret")]})]})}const Wt=Math.ceil(g/Dh),St=Math.ceil(N/Oh),ma=Wt>1?a.jsxs("div",{className:"pagination",children:[a.jsxs("button",{className:"mini-button",type:"button",disabled:v<=1||X,onClick:()=>void Z(v-1,j,w),children:[a.jsx(gn,{size:14}),r("common.prev")]}),a.jsx("span",{className:"page-info",children:r("subscription.page",{page:v,total:Wt})}),a.jsxs("button",{className:"mini-button",type:"button",disabled:v>=Wt||X,onClick:()=>void Z(v+1,j,w),children:[r("common.next"),a.jsx(bn,{size:14})]})]}):null;return a.jsxs(Gt,{title:r("subscription.title"),subtitle:r("subscription.subtitle"),children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:r("subscription.heading")}),a.jsx("p",{children:r("subscription.total",{count:g})})]}),a.jsxs("button",{className:"ghost-button",type:"button",disabled:X,onClick:()=>void Z(v,j,w),children:[a.jsx(_t,{size:16}),r(X?"common.refreshing":"common.refresh")]})]}),a.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:pe,children:[a.jsx("select",{className:"config-input filter-select",value:w,onChange:T=>y(T.target.value),children:Hj.map(T=>a.jsx("option",{value:T,children:Gj(T,r)},T))}),a.jsxs("label",{className:"search-input-wrap",children:[a.jsx($o,{size:16}),a.jsx("input",{className:"config-input",value:j,onChange:T=>B(T.target.value),placeholder:r("subscription.searchPlaceholder")})]}),a.jsxs("button",{className:"ghost-button",type:"submit",children:[a.jsx(cs,{size:16}),r("common.filter")]}),a.jsx("button",{className:"ghost-button",type:"button",onClick:Se,children:r("common.clearFilter")})]}),K?a.jsx("div",{className:"form-error",children:K}):null,X&&u.length===0?a.jsx(gt,{label:r("subscription.loading")}):null,a.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table subscription-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsxs("th",{children:[r("subscription.colUser")," / ",r("subscription.colPlan")]}),a.jsx("th",{children:r("subscription.colStatus")}),a.jsx("th",{children:r("subscription.colTraffic")}),a.jsx("th",{children:r("subscription.colDevices")}),a.jsx("th",{children:r("subscription.colExpires")}),a.jsxs("th",{children:[r("subscription.colPrimaryUuid")," / ",r("subscription.colSubscribeUrl")]}),a.jsx("th",{children:r("subscription.colUpdated")}),a.jsx("th",{children:r("common.actions")})]})}),a.jsxs("tbody",{children:[u.map(T=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsxs("div",{className:"subscription-package",children:[a.jsxs("span",{className:"subscription-package-id",children:["#",T.id]}),a.jsxs("div",{className:"subscription-package-main",children:[a.jsx("span",{className:"subscription-plan-name",children:T.plan_name??"-"}),T.user_email?a.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>k(T.user_email),title:r("subscription.viewUser"),children:T.user_email}):a.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),a.jsxs("small",{children:[r("subscription.userId",{id:T.user_id}),T.plan_id?` - ${r("subscription.planId",{id:T.plan_id})}`:""]})]})]})}),a.jsx("td",{children:a.jsx("span",{className:`status-pill subscription-status subscription-status-${T.status}`,children:Ah(T.status,r)})}),a.jsx("td",{children:Yt(T)}),a.jsx("td",{children:aa(T)}),a.jsx("td",{children:$n(T.expired_at,r("subscription.never"))}),a.jsx("td",{children:ft(T)}),a.jsx("td",{children:$n(T.updated_at,r("subscription.never"))}),a.jsx("td",{children:Qt(T)})]},T.id)),!X&&u.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:8,children:a.jsx("div",{className:"empty-state",children:r("subscription.empty")})})}):null]})]})})}),a.jsxs("div",{className:"subscription-mobile-list",children:[u.map(T=>a.jsxs("article",{className:"subscription-card",children:[a.jsxs("div",{className:"subscription-card-head",children:[a.jsxs("div",{className:"subscription-card-title",children:[a.jsxs("span",{className:"subscription-card-id",children:["#",T.id]}),a.jsx("strong",{className:"subscription-plan-name",children:T.plan_name??"-"}),T.user_email?a.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>k(T.user_email),title:r("subscription.viewUser"),children:T.user_email}):a.jsx("small",{children:r("subscription.unknownUser")})]}),a.jsx("span",{className:`status-pill subscription-status subscription-status-${T.status}`,children:Ah(T.status,r)})]}),a.jsxs("div",{className:"subscription-card-grid",children:[a.jsxs("div",{className:"subscription-card-metric",children:[a.jsx("span",{className:"subscription-card-label",children:r("subscription.colTraffic")}),Yt(T)]}),a.jsxs("div",{className:"subscription-card-metric",children:[a.jsx("span",{className:"subscription-card-label",children:r("subscription.colDevices")}),aa(T)]}),a.jsxs("div",{className:"subscription-card-metric",children:[a.jsx("span",{className:"subscription-card-label",children:r("subscription.colExpires")}),a.jsx("strong",{children:$n(T.expired_at,r("subscription.never"))})]}),a.jsxs("div",{className:"subscription-card-metric",children:[a.jsx("span",{className:"subscription-card-label",children:r("subscription.colUpdated")}),a.jsx("strong",{children:$n(T.updated_at,r("subscription.never"))})]})]}),a.jsx("div",{className:"subscription-card-link-block",children:ft(T)}),Qt(T)]},T.id)),!X&&u.length===0?a.jsx("div",{className:"empty-state",children:r("subscription.empty")}):null]}),ma,E?a.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>$(null),children:a.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:T=>T.stopPropagation(),children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:r("subscription.slotsTitle",{id:E.id})}),a.jsx("p",{children:E.user_email??r("subscription.userId",{id:E.user_id})})]}),a.jsx("button",{className:"icon-button",type:"button","aria-label":r("common.closeMenu"),onClick:()=>$(null),children:a.jsx(st,{size:18})})]}),a.jsxs("div",{className:"subscription-slots-body",children:[F?a.jsx("div",{className:"form-error",children:F}):null,re&&le.length===0?a.jsx(gt,{label:r("subscription.slotsLoading")}):null,a.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:a.jsxs("table",{className:"admin-table subscription-slot-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:r("subscription.slotUuid")}),a.jsx("th",{children:r("subscription.slotStatus")}),a.jsx("th",{children:r("subscription.slotHwid")}),a.jsx("th",{children:r("subscription.slotClient")}),a.jsx("th",{children:r("subscription.slotIp")}),a.jsx("th",{children:r("subscription.slotFirstSeen")}),a.jsx("th",{children:r("subscription.slotLastSeen")}),a.jsx("th",{children:r("common.actions")})]})}),a.jsxs("tbody",{children:[le.map(T=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.uuid,onClick:()=>Ge(T.uuid),children:[a.jsx(_a,{size:14}),a.jsx("span",{className:"mono",children:T.uuid})]})}),a.jsx("td",{children:a.jsx("span",{className:`status-pill subscription-status ${Rh(T.status)}`,children:Uh(T.status,r)})}),a.jsx("td",{children:T.hwid?a.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.hwid,onClick:()=>Ge(T.hwid),children:[a.jsx(_a,{size:14}),a.jsx("span",{className:"mono",children:T.hwid})]}):"-"}),a.jsx("td",{children:a.jsx("small",{title:T.user_agent??"",children:T.user_agent??"-"})}),a.jsxs("td",{children:[a.jsx("strong",{className:"mono",children:T.last_ip??"-"}),a.jsx("small",{children:T.first_ip?r("subscription.firstIp",{ip:T.first_ip}):"-"})]}),a.jsx("td",{children:$n(T.first_seen_at,"-")}),a.jsx("td",{children:$n(T.last_seen_at,"-")}),a.jsx("td",{children:a.jsxs("div",{className:"row-actions subscription-slot-actions",children:[a.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===T.id,onClick:()=>ua(T),children:[a.jsx(zd,{size:14}),r("subscription.unbind")]}),T.status==="bound"?a.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===T.id,onClick:()=>yt(T),children:[a.jsx(gl,{size:14}),r("subscription.ban")]}):null]})})]},T.id)),!re&&le.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:8,children:a.jsx("div",{className:"empty-state",children:r("subscription.slotsEmpty")})})}):null]})]})}),a.jsxs("div",{className:"subscription-slot-mobile-list",children:[le.map(T=>a.jsxs("article",{className:"subscription-slot-card",children:[a.jsxs("div",{className:"subscription-slot-card-head",children:[a.jsx("strong",{children:r("subscription.slotUuid")}),a.jsx("span",{className:`status-pill subscription-status ${Rh(T.status)}`,children:Uh(T.status,r)})]}),a.jsx("div",{className:"subscription-copy-item",children:a.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.uuid,onClick:()=>Ge(T.uuid),children:[a.jsx(_a,{size:14}),a.jsx("span",{className:"mono",children:T.uuid})]})}),a.jsxs("div",{className:"subscription-slot-card-grid",children:[a.jsxs("div",{className:"subscription-slot-card-row",children:[a.jsx("span",{children:r("subscription.slotHwid")}),T.hwid?a.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.hwid,onClick:()=>Ge(T.hwid),children:[a.jsx(_a,{size:14}),a.jsx("span",{className:"mono",children:T.hwid})]}):a.jsx("span",{children:"-"})]}),a.jsxs("div",{className:"subscription-slot-card-row",children:[a.jsx("span",{children:r("subscription.slotIp")}),a.jsx("span",{className:"mono",children:T.last_ip??"-"}),a.jsx("small",{children:T.first_ip?r("subscription.firstIp",{ip:T.first_ip}):"-"})]}),a.jsxs("div",{className:"subscription-slot-card-row",children:[a.jsx("span",{children:r("subscription.slotClient")}),a.jsx("small",{title:T.user_agent??"",children:T.user_agent??"-"})]}),a.jsxs("div",{className:"subscription-slot-card-row",children:[a.jsx("span",{children:r("subscription.slotFirstSeen")}),a.jsx("span",{children:$n(T.first_seen_at,"-")})]}),a.jsxs("div",{className:"subscription-slot-card-row",children:[a.jsx("span",{children:r("subscription.slotLastSeen")}),a.jsx("span",{children:$n(T.last_seen_at,"-")})]})]}),a.jsxs("div",{className:"row-actions subscription-slot-actions",children:[a.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===T.id,onClick:()=>ua(T),children:[a.jsx(zd,{size:14}),r("subscription.unbind")]}),T.status==="bound"?a.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===T.id,onClick:()=>yt(T),children:[a.jsx(gl,{size:14}),r("subscription.ban")]}):null]})]},T.id)),!re&&le.length===0?a.jsx("div",{className:"empty-state",children:r("subscription.slotsEmpty")}):null]}),St>1?a.jsxs("div",{className:"pagination",children:[a.jsxs("button",{className:"mini-button",type:"button",disabled:ae<=1||re,onClick:()=>void Mt(ae-1),children:[a.jsx(gn,{size:14}),r("common.prev")]}),a.jsx("span",{className:"page-info",children:r("subscription.page",{page:ae,total:St})}),a.jsxs("button",{className:"mini-button",type:"button",disabled:ae>=St||re,onClick:()=>void Mt(ae+1),children:[r("common.next"),a.jsx(bn,{size:14})]})]}):null]})]})}):null,G?a.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>U(null),children:a.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:T=>T.stopPropagation(),children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:r("subscription.editTitle",{id:G.id})}),a.jsx("p",{children:G.user_email??r("subscription.userId",{id:G.user_id})})]}),a.jsx("button",{className:"icon-button",type:"button","aria-label":r("common.closeMenu"),onClick:()=>U(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:Re,children:[a.jsxs("div",{className:"subscription-modal-grid",children:[a.jsxs("label",{children:[r("subscription.trafficLimitGb"),a.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:O.transfer_enable,onChange:T=>ee(ye=>({...ye,transfer_enable:T.target.value}))})]}),a.jsxs("label",{children:[r("subscription.uploadUsedGb"),a.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:O.u,onChange:T=>ee(ye=>({...ye,u:T.target.value}))})]}),a.jsxs("label",{children:[r("subscription.downloadUsedGb"),a.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:O.d,onChange:T=>ee(ye=>({...ye,d:T.target.value}))})]}),a.jsxs("label",{children:[r("subscription.deviceLimit"),a.jsx("input",{className:"config-input",type:"number",min:"0",value:O.device_limit,onChange:T=>ee(ye=>({...ye,device_limit:T.target.value}))})]}),a.jsxs("label",{children:[r("subscription.speedLimit"),a.jsx("input",{className:"config-input",type:"number",min:"0",value:O.speed_limit,onChange:T=>ee(ye=>({...ye,speed_limit:T.target.value}))})]}),a.jsxs("label",{children:[r("subscription.expires"),a.jsx("input",{className:"config-input",type:"date",value:O.expired_at,onChange:T=>ee(ye=>({...ye,expired_at:T.target.value}))})]}),a.jsxs("label",{children:[r("subscription.status"),a.jsxs("select",{className:"config-input",value:O.status,onChange:T=>ee(ye=>({...ye,status:T.target.value})),children:[a.jsx("option",{value:"active",children:r("subscription.statusActive")}),a.jsx("option",{value:"disabled",children:r("subscription.statusDisabled")})]})]}),a.jsxs("label",{children:[r("subscription.autoRenewal"),a.jsxs("select",{className:"config-input",value:O.auto_renewal,onChange:T=>ee(ye=>({...ye,auto_renewal:T.target.value})),children:[a.jsx("option",{value:"0",children:r("subscription.autoRenewalOff")}),a.jsx("option",{value:"1",children:r("subscription.autoRenewalOn")})]})]})]}),a.jsxs("label",{children:[r("subscription.remarks"),a.jsx("textarea",{className:"config-input",rows:3,value:O.remarks,onChange:T=>ee(ye=>({...ye,remarks:T.target.value}))})]}),a.jsxs("div",{className:"button-row modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>U(null),children:r("common.cancel")}),a.jsx("button",{className:"primary-button",type:"submit",disabled:se===G.id,children:se===G.id?r("common.processing"):r("common.save")})]})]})]})}):null]})}const Hh=15,Vj=["email","user_id","node","hwid","user_agent","last_ip"];function as(o){return o?new Date(o*1e3).toLocaleString():"-"}function Vn(o){const s=Math.max(0,Number(o??0));if(s===0)return"0 B";const r=["B","KB","MB","GB","TB"];let u=s,m=0;for(;u>=1024&&m<r.length-1;)u/=1024,m+=1;return`${u>=10||m===0?u.toFixed(0):u.toFixed(2)} ${r[m]}`}function Qj(o){return["user_id","subscription_id","node","node_type","node_id"].includes(o)?"=":"like"}function Xj(o,s){switch(o){case"email":return s("device.filterEmail");case"user_id":return s("device.filterUserId");case"hwid":return s("device.filterHwid");case"node":return s("device.filterNode");case"node_id":return s("device.filterNodeId");case"node_type":return s("device.filterNodeType");case"user_agent":return s("device.filterUserAgent");case"last_ip":return s("device.filterIp");default:return""}}function Lh(o,s){switch(o){case"bound":return s("device.statusBound");case"banned":return s("device.statusBanned");default:return s("device.statusPending")}}function Ao(o){return(o.online_ips??[]).join(", ")||"-"}function Uo(o){return(o.online_nodes??[]).map(s=>`${s.node_type}#${s.node_id}`).join(", ")||"-"}function Zj(o){var g,h,v;const s=new URLSearchParams(o),r=(g=s.get("node_type"))==null?void 0:g.trim(),u=(h=s.get("node_id"))==null?void 0:h.trim();if(r&&u)return{field:"node",value:`${r}:${u}`};if(u)return{field:"node",value:u};const m=["node","hwid","user_agent","last_ip","email","user_id"];for(const S of m){const w=(v=s.get(S))==null?void 0:v.trim();if(w)return{field:S,value:w}}return null}function Kj(){const o=Tt(),s=Ja(),{t:r}=Ke(),[u,m]=f.useState([]),[g,h]=f.useState(0),[v,S]=f.useState(1),[w,y]=f.useState("email"),[j,B]=f.useState(""),[X,te]=f.useState(!0),[K,z]=f.useState(""),[G,U]=f.useState(null),[O,ee]=f.useState(null),[se,ce]=f.useState(null),E=f.useCallback(async(x=1,P="",H="email")=>{te(!0),z("");try{const k=P.trim()?[{key:H,condition:Qj(H),value:P.trim()}]:void 0,Z=await bx(x,Hh,k);m(Z.data),h(Z.total),S(x)}catch(k){z(k instanceof Error?k.message:r("device.loadFailed"))}finally{te(!1)}},[r]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}const x=Zj(s.search);if(x){y(x.field),B(x.value),E(1,x.value,x.field);return}E()},[E,o,s.search]),f.useEffect(()=>{if(se===null)return;function x(H){const k=H.target;k!=null&&k.closest(".device-action-wrap")||ce(null)}function P(H){H.key==="Escape"&&ce(null)}return document.addEventListener("pointerdown",x),document.addEventListener("keydown",P),()=>{document.removeEventListener("pointerdown",x),document.removeEventListener("keydown",P)}},[se]);function $(x){x.preventDefault(),E(1,j,w)}function le(){if(B(""),s.search){o.replace("/device");return}E(1,"",w)}async function he(x){var H;if(!x.hwid)return;const P=await Kn(x.hwid);(H=window.showToast)==null||H.call(window,r(P?"device.copySuccess":"common.copyFailed"),P?"success":"error")}async function N(x){var H;const P=await Kn(x.uuid);(H=window.showToast)==null||H.call(window,r(P?"device.copyUuidSuccess":"common.copyFailed"),P?"success":"error")}function R(x){var P;(P=window.showConfirm)==null||P.call(window,{message:r("device.unbindConfirm"),onConfirm:async()=>{var H,k;U(x.id);try{await yx(x.id),(H=window.showToast)==null||H.call(window,r("device.unbindSuccess"),"success"),await E(v,j,w)}catch(Z){(k=window.showToast)==null||k.call(window,Z instanceof Error?Z.message:r("device.unbindFailed"),"error")}finally{U(null)}}})}function ae(x){var P;(P=window.showConfirm)==null||P.call(window,{message:r("device.banConfirm"),onConfirm:async()=>{var H,k;U(x.id);try{await vx(x.id),(H=window.showToast)==null||H.call(window,r("device.banSuccess"),"success"),await E(v,j,w)}catch(Z){(k=window.showToast)==null||k.call(window,Z instanceof Error?Z.message:r("device.banFailed"),"error")}finally{U(null)}}})}function M(x){var P;(P=window.showConfirm)==null||P.call(window,{message:r("device.resetConfirm",{user:x.user_email??`#${x.user_id}`}),onConfirm:async()=>{var H,k;ee(x.user_id);try{await U1(x.user_id),(H=window.showToast)==null||H.call(window,r("device.resetSuccess"),"success"),await E(v,j,w)}catch(Z){(k=window.showToast)==null||k.call(window,Z instanceof Error?Z.message:r("device.resetFailed"),"error")}finally{ee(null)}}})}function re(x){ce(null),x()}function A(x,P){const H=P==="mobile"?-x.id:x.id,k=se===H;return a.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${k?"active":""}`,children:[a.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>ce(k?null:H),children:[r("device.action")," ",a.jsx(bl,{size:14})]}),k?a.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[a.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:G===x.id,onClick:()=>re(()=>R(x)),children:[a.jsx(zd,{size:14}),r("device.unbind")]}),x.status==="bound"?a.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:G===x.id,onClick:()=>re(()=>ae(x)),children:[a.jsx(gl,{size:14}),r("device.ban")]}):null,a.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:O===x.user_id,onClick:()=>re(()=>M(x)),children:[a.jsx(Mv,{size:14}),r("device.resetUser")]})]}):null]})}const F=Math.ceil(g/Hh);return a.jsxs(Gt,{title:r("device.title"),subtitle:r("device.subtitle"),children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:r("device.heading")}),a.jsx("p",{children:r("device.total",{count:g})})]}),a.jsx("div",{className:"button-row",children:a.jsxs("button",{className:"ghost-button",type:"button",disabled:X,onClick:()=>void E(v,j,w),children:[a.jsx(_t,{size:16}),r(X?"common.refreshing":"common.refresh")]})})]}),a.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:$,children:[a.jsx("select",{className:"config-input filter-select",value:w,onChange:x=>y(x.target.value),children:Vj.map(x=>a.jsx("option",{value:x,children:Xj(x,r)},x))}),a.jsxs("label",{className:"search-input-wrap",children:[a.jsx($o,{size:16}),a.jsx("input",{className:"config-input",value:j,onChange:x=>B(x.target.value),placeholder:r(w==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),a.jsxs("button",{className:"ghost-button",type:"submit",children:[a.jsx(cs,{size:16}),r("device.filter")]}),a.jsx("button",{className:"ghost-button",type:"button",onClick:le,children:r("device.clear")})]}),K?a.jsx("div",{className:"form-error",children:K}):null,X&&u.length===0?a.jsx(gt,{label:r("device.loading")}):null,a.jsxs("div",{className:"mobile-device-list",children:[u.map(x=>a.jsxs("article",{className:"mobile-device-card",children:[a.jsxs("div",{className:"mobile-device-card-head",children:[a.jsxs("div",{className:"mobile-device-user",children:[a.jsx("strong",{children:x.user_email??"-"}),a.jsxs("small",{children:["ID: ",x.user_id]}),a.jsxs("small",{className:"device-plan-line",children:[x.plan_name??"-",x.user_plan_id?` #${x.user_plan_id}`:""]})]}),a.jsxs("div",{className:"mobile-device-status",children:[a.jsx("span",{className:"inline-badge",children:Lh(x.status,r)}),a.jsxs("span",{className:`online-badge ${x.is_online?"online":"offline"}`,children:[x.is_online?a.jsx(dh,{size:14}):a.jsx(ch,{size:14}),x.is_online?r("device.online"):r("device.offline")]})]})]}),a.jsxs("div",{className:"mobile-device-grid",children:[a.jsxs("div",{className:"mobile-device-info",children:[a.jsxs("div",{className:"mobile-device-row",children:[a.jsx("span",{children:r("device.uuid")}),a.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:x.uuid,onClick:()=>N(x),children:[a.jsx(_a,{size:14}),a.jsx("span",{className:"mono",children:x.uuid})]})]}),a.jsxs("div",{className:"mobile-device-row",children:[a.jsx("span",{children:r("device.hwid")}),x.hwid?a.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:x.hwid,onClick:()=>he(x),children:[a.jsx(_a,{size:14}),a.jsx("span",{className:"mono",children:x.hwid})]}):a.jsx("span",{children:"-"})]}),a.jsxs("div",{className:"mobile-device-row",children:[a.jsx("span",{children:r("device.client")}),a.jsx("small",{title:x.user_agent??"",children:x.user_agent??"-"})]}),a.jsxs("div",{className:"mobile-device-row",children:[a.jsx("span",{children:r("device.ip")}),a.jsxs("span",{className:"mono",title:`${x.last_ip??"-"} / ${x.first_ip??"-"}`,children:[x.last_ip??"-",x.first_ip?` (${x.first_ip})`:""]})]})]}),a.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[a.jsx("span",{children:r("device.traffic")}),a.jsxs("small",{title:`${r("device.upload")}: ${Vn(x.device_upload)} / ${r("device.download")}: ${Vn(x.device_download)}`,children:[Vn(x.device_used_traffic)," / ",r("device.upload"),": ",Vn(x.device_upload)," / ",r("device.download"),": ",Vn(x.device_download)]})]}),a.jsxs("div",{className:"mobile-device-row",children:[a.jsx("span",{children:r("device.connection")}),a.jsxs("small",{title:`${Ao(x)} / ${Uo(x)}`,children:[r("device.onlineIps"),": ",Ao(x)," / ",r("device.onlineNodes"),": ",Uo(x)]})]}),a.jsxs("div",{className:"mobile-device-row",children:[a.jsx("span",{children:r("device.time")}),a.jsxs("small",{children:[r("device.firstSeen"),": ",as(x.first_seen_at)," / ",r("device.lastSeen"),": ",as(x.last_seen_at)]})]})]}),a.jsx("div",{className:"mobile-device-actions",children:A(x,"mobile")})]},x.id)),!X&&u.length===0?a.jsx("div",{className:"empty-state",children:r("device.empty")}):null]}),a.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table device-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:r("device.user")}),a.jsx("th",{children:r("device.status")}),a.jsx("th",{children:r("device.traffic")}),a.jsx("th",{children:r("device.connection")}),a.jsx("th",{children:r("device.deviceInfo")}),a.jsx("th",{children:r("device.time")}),a.jsx("th",{children:r("device.action")})]})}),a.jsxs("tbody",{children:[u.map(x=>a.jsxs("tr",{children:[a.jsxs("td",{className:"device-user-cell",children:[a.jsx("strong",{children:x.user_email??"-"}),a.jsxs("small",{children:["ID: ",x.user_id]}),a.jsxs("small",{className:"device-plan-line",children:[x.plan_name??"-",x.user_plan_id?` #${x.user_plan_id}`:""]})]}),a.jsx("td",{children:a.jsx("span",{className:"inline-badge",children:Lh(x.status,r)})}),a.jsx("td",{className:"device-traffic-cell",children:a.jsxs("div",{className:"device-traffic-stack",children:[a.jsx("strong",{children:Vn(x.device_used_traffic)}),a.jsxs("small",{children:[r("device.upload"),": ",Vn(x.device_upload)]}),a.jsxs("small",{children:[r("device.download"),": ",Vn(x.device_download)]})]})}),a.jsxs("td",{className:"device-connection",children:[a.jsxs("span",{className:`online-badge ${x.is_online?"online":"offline"}`,children:[x.is_online?a.jsx(dh,{size:14}):a.jsx(ch,{size:14}),x.is_online?r("device.online"):r("device.offline")]}),a.jsxs("small",{title:Ao(x),children:[r("device.onlineIps"),": ",Ao(x)]}),a.jsxs("small",{title:Uo(x),children:[r("device.onlineNodes"),": ",Uo(x)]}),a.jsxs("small",{children:[r("device.lastOnline"),": ",as(x.online_last_seen_at??null)]})]}),a.jsx("td",{className:"device-info-cell",children:a.jsxs("div",{className:"device-info-stack",children:[a.jsxs("div",{className:"device-info-line",children:[a.jsx("span",{className:"device-info-label",children:r("device.uuid")}),a.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:x.uuid,onClick:()=>N(x),children:[a.jsx(_a,{size:14}),a.jsx("span",{className:"mono",children:x.uuid})]})]}),a.jsxs("div",{className:"device-info-line",children:[a.jsx("span",{className:"device-info-label",children:r("device.hwid")}),x.hwid?a.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:x.hwid,onClick:()=>he(x),children:[a.jsx(_a,{size:14}),a.jsx("span",{className:"mono",children:x.hwid})]}):a.jsx("span",{className:"device-info-value",children:"-"})]}),a.jsxs("div",{className:"device-info-line",children:[a.jsx("span",{className:"device-info-label",children:r("device.client")}),a.jsx("small",{className:"device-info-value",title:x.user_agent??"",children:x.user_agent??"-"})]}),a.jsxs("div",{className:"device-info-line",children:[a.jsx("span",{className:"device-info-label",children:r("device.ip")}),a.jsxs("div",{className:"device-info-value",children:[a.jsx("strong",{className:"mono",children:x.last_ip??"-"}),a.jsx("small",{children:x.first_ip?`${r("device.firstIp")}: ${x.first_ip}`:"-"})]})]})]})}),a.jsx("td",{className:"device-time-cell",children:a.jsxs("div",{className:"device-time-stack",children:[a.jsxs("div",{className:"device-time-line",children:[a.jsx("small",{children:r("device.firstSeen")}),a.jsx("span",{children:as(x.first_seen_at)})]}),a.jsxs("div",{className:"device-time-line",children:[a.jsx("small",{children:r("device.lastSeen")}),a.jsx("span",{children:as(x.last_seen_at)})]})]})}),a.jsx("td",{className:"device-action-cell",children:A(x,"desktop")})]},x.id)),!X&&u.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:7,children:a.jsx("div",{className:"empty-state",children:r("device.empty")})})}):null]})]})}),F>1?a.jsxs("div",{className:"pagination",children:[a.jsxs("button",{className:"mini-button",type:"button",disabled:v<=1||X,onClick:()=>void E(v-1,j,w),children:[a.jsx(gn,{size:14}),r("device.previous")]}),a.jsx("span",{className:"page-info",children:r("device.page",{page:v,total:F})}),a.jsxs("button",{className:"mini-button",type:"button",disabled:v>=F||X,onClick:()=>void E(v+1,j,w),children:[r("device.next"),a.jsx(bn,{size:14})]})]}):null]})]})}const Jj={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function $d(o){if(Array.isArray(o))return o.map(s=>Number(s)).filter(s=>Number.isFinite(s)&&s>0);if(typeof o=="string")try{return $d(JSON.parse(o))}catch{return o.split(",").map(s=>Number(s.trim())).filter(s=>Number.isFinite(s)&&s>0)}return[]}function qh(o){return o?{id:o.id,email:o.email??"",domain:o.domain??"",title:o.title??"",description:o.description??"",logo:o.logo??"",background_url:o.background_url??"",custom_html:o.custom_html??"",plan_ids:$d(o.plan_id)}:{...Jj}}function bd(o){const s=o.trim();if(!s)return"";try{return new URL(s.includes("://")?s:`https://${s}`).host.toLowerCase()}catch{return s.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function Fj(o){const s=Number(o);if(!s)return"-";const r=new Date(s*1e3);return Number.isNaN(r.getTime())?"-":r.toLocaleString()}function Wj(o){return Number(o)===1}function Bh(o,s){if(!o.length)return"All plans";const r=new Map(s.map(u=>[Number(u.id),u.name]));return o.map(u=>r.get(u)??`#${u}`).join(", ")}function Qn(o,s=!1){return a.jsxs("span",{className:"webcon-field-label",children:[o,s?a.jsx("small",{children:"*"}):null]})}function Pj(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState([]),[m,g]=f.useState([]),[h,v]=f.useState(null),[S,w]=f.useState(!0),[y,j]=f.useState(!1),[B,X]=f.useState(null),[te,K]=f.useState(""),z=f.useCallback(async()=>{w(!0),K("");try{const[E,$]=await Promise.all([J1(),jl()]);u(E),g($)}catch(E){K(E instanceof Error?E.message:s("webcon.toastLoadFailed"))}finally{w(!1)}},[s]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}z()},[z,o]);const G=f.useMemo(()=>m.map(E=>({id:Number(E.id),name:E.name})),[m]);function U(E,$){v(le=>le&&{...le,[E]:$})}function O(E,$){v(le=>{if(!le)return le;const he=$?Array.from(new Set([...le.plan_ids,E])):le.plan_ids.filter(N=>N!==E);return{...le,plan_ids:he}})}async function ee(E){var le,he;if(E.preventDefault(),!h)return;const $=bd(h.domain);j(!0),K("");try{await F1({id:h.id,email:h.email.trim(),domain:$,title:h.title.trim(),description:h.description.trim()||null,logo:h.logo.trim()||null,background_url:h.background_url.trim()||null,custom_html:h.custom_html||null,plan_ids:h.plan_ids,plan_id:h.plan_ids}),v(null),(le=window.showToast)==null||le.call(window,s("webcon.toastSaveSuccess"),"success"),await z()}catch(N){const R=N instanceof Error?N.message:s("webcon.toastSaveFailed");K(R),(he=window.showToast)==null||he.call(window,R,"error")}finally{j(!1)}}async function se(E){var $,le;X(E.id);try{await P1(E.id),($=window.showToast)==null||$.call(window,s("webcon.toastToggleSuccess"),"success"),await z()}catch(he){const N=he instanceof Error?he.message:s("webcon.toastToggleFailed");K(N),(le=window.showToast)==null||le.call(window,N,"error")}finally{X(null)}}function ce(E){var $;($=window.showConfirm)==null||$.call(window,{message:s("webcon.deleteConfirm"),onConfirm:async()=>{var le,he;X(E.id),K("");try{await W1(E.id),(le=window.showToast)==null||le.call(window,s("webcon.toastDeleteSuccess"),"success"),await z()}catch(N){const R=N instanceof Error?N.message:s("webcon.toastDeleteFailed");K(R),(he=window.showToast)==null||he.call(window,R,"error")}finally{X(null)}}})}return a.jsxs(Gt,{title:s("webcon.title"),subtitle:s("webcon.subtitle"),children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),a.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("webcon.heading")}),a.jsx("p",{children:s("webcon.sitesCount",{count:r.length})})]}),a.jsxs("div",{className:"button-row",children:[a.jsxs("button",{className:"ghost-button",type:"button",disabled:S,onClick:()=>void z(),children:[a.jsx(_t,{size:16}),s(S?"common.refreshing":"common.refresh")]}),a.jsxs("button",{className:"primary-button",type:"button",onClick:()=>v(qh()),children:[a.jsx(ka,{size:16}),s("webcon.add")]})]})]}),te?a.jsx("div",{className:"form-error",children:te}):null,S&&r.length===0?a.jsx(gt,{label:s("common.loading")}):null,a.jsx("section",{className:"panel table-panel",children:a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table webcon-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:s("webcon.colId")}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Staff owner"}),a.jsx("th",{children:s("webcon.colDomain")}),a.jsx("th",{children:"Landing"}),a.jsx("th",{children:"Plans"}),a.jsx("th",{children:"Created"}),a.jsx("th",{children:s("webcon.colActions")})]})}),a.jsxs("tbody",{children:[r.map(E=>{var le;const $=$d(E.plan_id);return a.jsxs("tr",{children:[a.jsxs("td",{children:["#",E.id]}),a.jsx("td",{children:a.jsx("button",{className:`admin-switch ${Wj(E.status)?"active":""}`,type:"button",disabled:B===E.id,onClick:()=>void se(E),"aria-label":"Toggle webcon status",children:a.jsx("span",{className:"admin-switch-thumb"})})}),a.jsx("td",{children:a.jsxs("div",{className:"webcon-owner",children:[a.jsx("strong",{children:E.email??"-"}),a.jsx("small",{children:Number(E.staff)===1?"is_staff enabled":"user is not marked staff"})]})}),a.jsx("td",{children:a.jsxs("div",{className:"webcon-domain",children:[a.jsx("strong",{className:"mono",children:E.domain}),a.jsxs("small",{children:["/",String(((le=window.settings)==null?void 0:le.secure_path)??"admin"),"/webcon"]})]})}),a.jsx("td",{children:a.jsxs("div",{className:"webcon-title",children:[a.jsx("strong",{children:E.title||"-"}),a.jsx("small",{children:E.description||"No description"}),a.jsxs("span",{className:"webcon-branding",children:[a.jsxs("span",{children:[a.jsx(vv,{size:13}),E.logo?"Logo":"No logo"]}),a.jsxs("span",{children:[a.jsx(ps,{size:13}),E.background_url?"Background":"No background"]})]})]})}),a.jsx("td",{children:a.jsxs("div",{className:"webcon-plan-list",children:[a.jsx("strong",{children:Bh($,G)}),a.jsx("small",{children:$.length?`${$.length} selected`:"not restricted"})]})}),a.jsx("td",{children:Fj(E.created_at)}),a.jsx("td",{children:a.jsxs("div",{className:"row-actions webcon-actions",children:[a.jsxs("button",{className:"mini-button",type:"button",onClick:()=>v(qh(E)),children:[a.jsx(Ht,{size:14}),s("common.edit")]}),a.jsxs("button",{className:"mini-button danger",type:"button",disabled:B===E.id,onClick:()=>ce(E),children:[a.jsx(Bt,{size:14}),s("common.delete")]})]})})]},E.id)}),!S&&r.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:8,children:a.jsx("div",{className:"empty-state",children:s("webcon.noWebcon")})})}):null]})]})})}),h?a.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>v(null),children:a.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:E=>E.stopPropagation(),children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:h.id?s("webcon.editTitle"):s("webcon.newTitle")}),a.jsx("p",{children:h.domain||"Create a staff landing domain"})]}),a.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>v(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"webcon-form",onSubmit:ee,children:[a.jsxs("div",{className:"webcon-field-grid",children:[a.jsxs("label",{className:"webcon-field",children:[Qn("Staff owner email",!0),a.jsx("input",{className:"config-input",required:!0,type:"email",value:h.email,onChange:E=>U("email",E.target.value),placeholder:"staff@example.com"})]}),a.jsxs("label",{className:"webcon-field",children:[Qn("Domain",!0),a.jsx("input",{className:"config-input",required:!0,value:h.domain,onChange:E=>U("domain",E.target.value),onBlur:E=>U("domain",bd(E.target.value)),placeholder:"webcon.example.com"}),a.jsx("span",{className:"webcon-help",children:"Store only the host. Do not include path/query."})]}),a.jsxs("label",{className:"webcon-field",children:[Qn("Landing title",!0),a.jsx("input",{className:"config-input",required:!0,value:h.title,onChange:E=>U("title",E.target.value),placeholder:"ZicBoard Partner"})]}),a.jsxs("label",{className:"webcon-field",children:[Qn("Description"),a.jsx("input",{className:"config-input",value:h.description,onChange:E=>U("description",E.target.value),placeholder:"Short landing page description"})]}),a.jsxs("label",{className:"webcon-field",children:[Qn("Logo URL"),a.jsx("input",{className:"config-input",type:"url",value:h.logo,onChange:E=>U("logo",E.target.value),placeholder:"https://example.com/logo.png"})]}),a.jsxs("label",{className:"webcon-field",children:[Qn("Background URL"),a.jsx("input",{className:"config-input",type:"url",value:h.background_url,onChange:E=>U("background_url",E.target.value),placeholder:"https://example.com/background.jpg"})]}),a.jsxs("div",{className:"webcon-field full",children:[Qn("Allowed plans"),a.jsxs("div",{className:"webcon-plan-picker",children:[G.map(E=>a.jsxs("label",{className:"webcon-plan-option",children:[a.jsx("input",{type:"checkbox",checked:h.plan_ids.includes(E.id),onChange:$=>O(E.id,$.target.checked)}),a.jsx("span",{children:E.name})]},E.id)),G.length===0?a.jsx("span",{className:"webcon-help",children:"No plans loaded."}):null]}),a.jsx("span",{className:"webcon-help",children:"Leave empty to allow all visible plans for this webcon domain."})]}),a.jsxs("label",{className:"webcon-field full",children:[Qn("Custom HTML"),a.jsx("textarea",{className:"config-input",rows:5,value:h.custom_html,onChange:E=>U("custom_html",E.target.value),placeholder:"<footer>...</footer>"})]})]}),a.jsxs("div",{className:"webcon-preview",children:[a.jsx("span",{className:"webcon-preview-logo",children:h.logo?a.jsx("img",{src:h.logo,alt:""}):a.jsx(Tv,{size:18})}),a.jsxs("div",{children:[a.jsx("strong",{children:h.title||"Landing title"}),a.jsx("span",{children:bd(h.domain)||"webcon.example.com"}),a.jsxs("span",{children:[a.jsx(qd,{size:12})," ",Bh(h.plan_ids,G)]})]})]}),a.jsxs("div",{className:"button-row modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>v(null),children:s("common.cancel")}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[a.jsx(Ca,{size:16}),s(y?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Gh(o){return new Date(o*1e3).toLocaleString("vi-VN")}function yd(o){return{id:o==null?void 0:o.id,title:(o==null?void 0:o.title)??"",content:(o==null?void 0:o.content)??"",img_url:(o==null?void 0:o.img_url)??"",tags:o!=null&&o.tags?o.tags.join(", "):""}}function Ij(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState([]),[m,g]=f.useState(null),[h,v]=f.useState(!0),[S,w]=f.useState(!1),[y,j]=f.useState(""),[B,X]=f.useState(""),te=f.useCallback(async()=>{v(!0),j("");try{u(await H1())}catch(U){j(U instanceof Error?U.message:s("notice.loadFailed"))}finally{v(!1)}},[s]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}te()},[te,o]);async function K(U){var O,ee;if(U.preventDefault(),!!m){w(!0),j(""),X("");try{const se=m.tags?m.tags.split(",").map(ce=>ce.trim()).filter(Boolean):[];await L1({id:m.id,title:m.title,content:m.content,img_url:m.img_url||null,tags:se.length?se:null}),g(null),(O=window.showToast)==null||O.call(window,s("notice.saveSuccess"),"success"),await te()}catch(se){(ee=window.showToast)==null||ee.call(window,se instanceof Error?se.message:s("notice.saveFailed"),"error")}finally{w(!1)}}}async function z(U){var O;try{await B1(U),await te()}catch(ee){(O=window.showToast)==null||O.call(window,ee instanceof Error?ee.message:s("notice.toggleFailed"),"error")}}async function G(U){var O;(O=window.showConfirm)==null||O.call(window,{message:s("notice.deleteConfirm"),onConfirm:async()=>{var ee,se;try{await q1(U),(ee=window.showToast)==null||ee.call(window,s("notice.deleteSuccess"),"success"),await te()}catch(ce){(se=window.showToast)==null||se.call(window,ce instanceof Error?ce.message:s("notice.deleteFailed"),"error")}}})}return a.jsxs(Gt,{title:s("notice.title"),subtitle:s("notice.subtitle"),children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("notice.heading")}),a.jsxs("p",{children:[r.length," ",s("notice.notices")]})]}),a.jsxs("div",{className:"button-row",children:[a.jsxs("button",{className:"ghost-button",type:"button",onClick:te,disabled:h,children:[a.jsx(_t,{size:16}),s("common.refresh")]}),a.jsxs("button",{className:"primary-button",type:"button",onClick:()=>g(yd()),children:[a.jsx(ka,{size:16}),s("notice.addNotice")]})]})]}),y?a.jsx("div",{className:"form-error",children:y}):null,B?a.jsx("div",{className:"form-success",children:B}):null,h&&r.length===0?a.jsx(gt,{label:s("notice.loading")}):null,a.jsx("section",{className:"panel table-panel hide-on-mobile",children:a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:s("common.id")}),a.jsx("th",{children:s("notice.titleField")}),a.jsx("th",{children:s("notice.show")}),a.jsx("th",{children:s("notice.tags")}),a.jsx("th",{children:s("notice.created")}),a.jsx("th",{children:s("common.actions")})]})}),a.jsxs("tbody",{children:[r.map(U=>{var O;return a.jsxs("tr",{children:[a.jsx("td",{children:U.id}),a.jsx("td",{children:a.jsx("strong",{children:U.title})}),a.jsx("td",{children:a.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void z(U.id),"aria-label":"Toggle Show",children:a.jsx("span",{className:"admin-switch-thumb"})})}),a.jsx("td",{children:a.jsx("div",{className:"match-tags",children:((O=U.tags)==null?void 0:O.map((ee,se)=>a.jsx("span",{className:"tag",children:ee},se)))??a.jsx("span",{className:"tag muted-tag",children:"—"})})}),a.jsx("td",{children:a.jsx("small",{children:Gh(U.created_at)})}),a.jsx("td",{children:a.jsxs("div",{className:"row-actions",children:[a.jsxs("button",{className:"mini-button",type:"button",onClick:()=>g(yd(U)),children:[a.jsx(Ht,{size:14}),s("common.edit")]}),a.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void G(U.id),children:[a.jsx(Bt,{size:14}),s("common.delete")]})]})})]},U.id)}),!h&&r.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,children:a.jsx("div",{className:"empty-state",children:s("notice.noNotices")})})}):null]})]})})}),a.jsxs("div",{className:"mobile-notice-list",children:[r.map(U=>a.jsxs("div",{className:`notice-mobile-card ${U.show?"show-active":""}`,children:[a.jsxs("div",{className:"card-header",children:[a.jsx("div",{className:"header-left",children:a.jsxs("span",{className:"id-tag",children:["#",U.id]})}),a.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void z(U.id),"aria-label":U.show?s("common.enabled"):s("common.disabled"),children:a.jsx("span",{className:"admin-switch-thumb"})})]}),a.jsxs("div",{className:"card-body",children:[a.jsx("h3",{className:"card-title",children:U.title}),a.jsx("div",{className:"notice-tags",children:U.tags&&U.tags.length>0?U.tags.map((O,ee)=>a.jsx("span",{className:"tag-badge",children:O},ee)):a.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),a.jsxs("p",{className:"created-time",children:[s("notice.created"),": ",Gh(U.created_at)]})]}),a.jsxs("div",{className:"card-footer",children:[a.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>g(yd(U)),children:[a.jsx(Ht,{size:13}),a.jsx("span",{children:s("common.edit")})]}),a.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void G(U.id),children:[a.jsx(Bt,{size:13}),a.jsx("span",{children:s("common.delete")})]})]})]},U.id)),!h&&r.length===0?a.jsx("div",{className:"empty-state",children:s("notice.noNotices")}):null]}),m?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"modal-heading",children:[a.jsx("div",{children:a.jsx("h2",{children:m.id?s("notice.editNotice"):s("notice.newNotice")})}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:K,children:[a.jsxs("label",{children:[a.jsx("span",{children:s("notice.titleField")}),a.jsx("input",{className:"config-input",required:!0,value:m.title,onChange:U=>g({...m,title:U.target.value})})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("notice.content")}),a.jsx("textarea",{className:"config-input",rows:10,required:!0,value:m.content,onChange:U=>g({...m,content:U.target.value}),placeholder:s("notice.contentPlaceholder")})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("notice.imageUrl")}),a.jsx("input",{className:"config-input",value:m.img_url,onChange:U=>g({...m,img_url:U.target.value}),placeholder:"https://..."})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("notice.tags")}),a.jsx("input",{className:"config-input",value:m.tags,onChange:U=>g({...m,tags:U.target.value}),placeholder:"tag1, tag2"})]})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:s("common.cancel")}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:S,children:[a.jsx(Ca,{size:16}),s(S?"notice.saving":"common.save")]})]})]})]})}):null]})}function vd(o){return new Date(o*1e3).toLocaleString("vi-VN")}const Yh=(o,s)=>({0:{label:s("ticket.statusOpen"),cls:"enabled"},1:{label:s("ticket.statusClosed"),cls:""}})[o]||{label:`#${o}`,cls:""},jd=(o,s)=>({0:s("ticket.levelLow"),1:s("ticket.levelMedium"),2:s("ticket.levelHigh")})[o]||String(o);function ew(){var N;const o=Tt(),{t:s}=Ke(),[r,u]=f.useState([]),[m,g]=f.useState(null),[h,v]=f.useState(!1),[S,w]=f.useState(null),[y,j]=f.useState(""),[B,X]=f.useState(!0),[te,K]=f.useState(!1),[z,G]=f.useState(""),U=f.useRef(null),[O,ee]=f.useState([]),[se,ce]=f.useState(null),E=f.useCallback(async()=>{X(!0),G("");try{u(await G1())}catch(R){G(R instanceof Error?R.message:"Load failed")}finally{X(!1)}},[]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}E(),jl().then(R=>{R&&ee(R)}).catch(()=>{})},[E,o]),f.useEffect(()=>{var R;(R=U.current)==null||R.scrollIntoView({behavior:"smooth"})},[m]);async function $(R){var ae;w(R),j(""),g(null),ce(null),v(!0);try{const M=await fh(R);if(g(M),M&&M.user_id)try{const re=await gx(M.user_id);re&&re.data&&ce(re.data)}catch(re){console.error("Failed to load user info:",re)}}catch{(ae=window.showToast)==null||ae.call(window,"Failed to load message thread","error")}finally{v(!1)}}async function le(R){var ae,M;if(R.preventDefault(),!(!S||!y.trim())){K(!0),G("");try{await Y1(S,y),j(""),(ae=window.showToast)==null||ae.call(window,"Reply sent!","success");try{const re=await fh(S);g(re)}catch{}await E()}catch(re){(M=window.showToast)==null||M.call(window,re instanceof Error?re.message:"Reply failed","error")}finally{K(!1)}}}async function he(R){var ae;(ae=window.showConfirm)==null||ae.call(window,{message:"Close this ticket?",onConfirm:async()=>{var M,re;G("");try{await $1(R),(M=window.showToast)==null||M.call(window,"Ticket closed!","success"),S===R&&(w(null),g(null)),await E()}catch(A){G(A instanceof Error?A.message:"Close failed"),(re=window.showToast)==null||re.call(window,A instanceof Error?A.message:"Close failed","error")}}})}return a.jsxs(Gt,{title:s("ticket.title"),subtitle:s("ticket.subtitle"),children:[a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("ticket.heading")}),a.jsxs("p",{children:[r.length," tickets"]})]}),a.jsx("div",{className:"button-row",children:a.jsxs("button",{className:"ghost-button",type:"button",onClick:E,disabled:B,children:[a.jsx(_t,{size:16}),s("common.refresh")]})})]}),z?a.jsx("div",{className:"form-error",children:z}):null,B&&r.length===0?a.jsx(gt,{label:s("common.loading")}):null,a.jsx("section",{className:"panel table-panel hide-on-mobile",children:a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:s("ticket.id")}),a.jsx("th",{children:s("ticket.subject")}),a.jsx("th",{children:s("ticket.user")}),a.jsx("th",{children:s("ticket.level")}),a.jsx("th",{children:s("ticket.status")}),a.jsx("th",{children:s("ticket.replyStatus")}),a.jsx("th",{children:s("ticket.created")}),a.jsx("th",{children:s("common.actions")})]})}),a.jsxs("tbody",{children:[r.map(R=>{const ae=Yh(R.status,s);return a.jsxs("tr",{children:[a.jsx("td",{children:R.id}),a.jsx("td",{children:a.jsx("strong",{children:R.subject})}),a.jsxs("td",{children:["#",R.user_id]}),a.jsx("td",{children:a.jsx("span",{className:"tag",children:jd(R.level,s)})}),a.jsx("td",{children:a.jsx("span",{className:`status-pill ${ae.cls}`,children:ae.label})}),a.jsx("td",{children:R.reply_status?a.jsx("span",{className:"status-pill enabled",children:s("ticket.replied")}):a.jsx("span",{className:"status-pill status-pending",children:s("ticket.waiting")})}),a.jsx("td",{children:a.jsx("small",{children:vd(R.created_at)})}),a.jsx("td",{children:a.jsx("div",{className:"row-actions",children:R.status===0?a.jsxs(a.Fragment,{children:[a.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void $(R.id),children:[a.jsx(ns,{size:14}),s("ticket.replyAction")]}),a.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void he(R.id),children:[a.jsx(kd,{size:14}),s("ticket.closeAction")]})]}):a.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void $(R.id),children:[a.jsx(ns,{size:14}),s("ticket.viewHistory")]})})})]},R.id)}),!B&&r.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:8,children:a.jsx("div",{className:"empty-state",children:s("ticket.noTickets")})})}):null]})]})})}),a.jsxs("div",{className:"mobile-ticket-list",children:[r.map(R=>{const ae=Yh(R.status,s);return a.jsxs("div",{className:"mobile-ticket-card",children:[a.jsxs("div",{className:"mobile-card-header",children:[a.jsx("span",{className:"mobile-card-title",children:R.subject}),a.jsx("span",{className:"tag",style:{fontSize:"11px"},children:jd(R.level,s)})]}),a.jsxs("div",{className:"mobile-card-body",children:[a.jsxs("div",{className:"mobile-card-body-row",children:[a.jsxs("span",{children:[s("ticket.id"),": ",a.jsxs("strong",{children:["#",R.id]})]}),a.jsx("span",{className:`status-pill ${ae.cls}`,children:ae.label})]}),a.jsxs("div",{className:"mobile-card-body-row",children:[a.jsxs("span",{children:[s("ticket.user"),": ",a.jsxs("strong",{children:["#",R.user_id]})]}),a.jsx("span",{children:R.reply_status?a.jsx("span",{className:"status-pill enabled",children:s("ticket.replied")}):a.jsx("span",{className:"status-pill status-pending",children:s("ticket.waiting")})})]}),a.jsx("div",{className:"mobile-card-body-row",children:a.jsxs("span",{children:[s("ticket.created"),": ",a.jsx("small",{children:vd(R.created_at)})]})})]}),a.jsx("div",{className:"mobile-card-actions",children:R.status===0?a.jsxs(a.Fragment,{children:[a.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void $(R.id),children:[a.jsx(ns,{size:14}),s("ticket.replyAction")]}),a.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void he(R.id),children:[a.jsx(kd,{size:14}),s("ticket.closeAction")]})]}):a.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void $(R.id),children:[a.jsx(ns,{size:14}),s("ticket.viewHistory")]})})]},R.id)}),!B&&r.length===0?a.jsx("div",{className:"empty-state",children:s("ticket.noTickets")}):null]}),S!==null?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"modal-heading",children:[a.jsxs("div",{children:[a.jsx("h2",{children:m?`${s("ticket.ticketDetail")}: ${m.subject}`:`${s("ticket.ticketDetail")} #${S}`}),a.jsxs("p",{children:[s("ticket.user"),": #",m==null?void 0:m.user_id," | ",s("ticket.level"),": ",m!=null?jd(m.level,s):s("common.loading")]})]}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>{w(null),g(null)},children:a.jsx(st,{size:18})})]}),se&&a.jsxs("div",{className:"user-details-bar",children:[a.jsxs("div",{className:"user-details-item",children:[a.jsx("span",{className:"details-label",children:s("common.email")}),a.jsx("span",{className:"details-value",title:se.email,children:se.email})]}),a.jsxs("div",{className:"user-details-item",children:[a.jsx("span",{className:"details-label",children:s("ticket.servicePackage")}),a.jsx("span",{className:"details-value",children:((N=O.find(R=>R.id===se.plan_id))==null?void 0:N.name)||s("ticket.freePlan")})]}),a.jsxs("div",{className:"user-details-item",children:[a.jsx("span",{className:"details-label",children:s("ticket.accountBalance")}),a.jsxs("span",{className:"details-value",children:[Sa(se.balance)," ",s("ticket.currencyUnit")]})]}),a.jsxs("div",{className:"user-details-item",children:[a.jsx("span",{className:"details-label",children:s("ticket.expirationDate")}),a.jsx("span",{className:"details-value",children:se.expired_at?new Date(se.expired_at*1e3).toLocaleDateString("vi-VN"):s("ticket.never")})]})]}),h?a.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(gt,{label:s("ticket.loadingLogs")})}):a.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[a.jsxs("div",{className:"chat-container",children:[m!=null&&m.message&&m.message.length>0?m.message.map(R=>{const ae=R.is_me;return a.jsxs("div",{className:`chat-message ${ae?"me":"other"}`,children:[a.jsx("div",{className:"chat-bubble",children:R.message}),a.jsxs("div",{className:"chat-meta",children:[ae?s("ticket.staff"):`${s("ticket.user")} #${R.user_id}`," • ",vd(R.created_at)]})]},R.id)}):a.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:s("ticket.noLogs")}),a.jsx("div",{ref:U})]}),(m==null?void 0:m.status)===0?a.jsx("form",{className:"modal-form",onSubmit:le,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:a.jsxs("label",{style:{margin:0},children:[a.jsx("span",{children:s("ticket.sendReply")}),a.jsxs("div",{style:{position:"relative"},children:[a.jsx("textarea",{className:"config-input",rows:4,required:!0,value:y,onChange:R=>j(R.target.value),placeholder:s("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:te||!y.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[a.jsx(sx,{size:14}),te?"":s("ticket.send")]})]})]})}):a.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:s("ticket.closedNotice")})]})]})}):null,a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function $h(o){return o?new Date(o*1e3).toLocaleString("vi-VN"):"—"}const Vh={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function Qh(o){return{id:o==null?void 0:o.id,category:(o==null?void 0:o.category)??"",title:(o==null?void 0:o.title)??"",body:(o==null?void 0:o.body)??"",language:(o==null?void 0:o.language)??"",sort:(o==null?void 0:o.sort)!=null?String(o.sort):""}}function tw(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState([]),[m,g]=f.useState(null),[h,v]=f.useState(!0),[S,w]=f.useState(!1),[y,j]=f.useState(""),[B,X]=f.useState(""),te=f.useCallback(async()=>{v(!0),j("");try{u(await V1())}catch(O){j(O instanceof Error?O.message:s("knowledge.loadFailed"))}finally{v(!1)}},[s]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}te()},[te,o]);async function K(O){var ee;try{const se=await Q1(O.id);g(Qh(se))}catch(se){(ee=window.showToast)==null||ee.call(window,se instanceof Error?se.message:s("knowledge.detailFailed"),"error")}}async function z(O){var ee,se;if(O.preventDefault(),!!m){w(!0),j(""),X("");try{await X1({id:m.id,category:m.category,title:m.title,body:m.body,language:m.language||null,sort:m.sort?Number(m.sort):null}),g(null),(ee=window.showToast)==null||ee.call(window,s("knowledge.saveSuccess"),"success"),await te()}catch(ce){(se=window.showToast)==null||se.call(window,ce instanceof Error?ce.message:s("knowledge.saveFailed"),"error")}finally{w(!1)}}}async function G(O){var ee;try{await K1(O),await te()}catch(se){(ee=window.showToast)==null||ee.call(window,se instanceof Error?se.message:s("knowledge.toggleFailed"),"error")}}async function U(O){var ee;(ee=window.showConfirm)==null||ee.call(window,{message:s("knowledge.deleteConfirm"),onConfirm:async()=>{var se,ce;try{await Z1(O),(se=window.showToast)==null||se.call(window,s("knowledge.deleteSuccess"),"success"),await te()}catch(E){(ce=window.showToast)==null||ce.call(window,E instanceof Error?E.message:s("knowledge.deleteFailed"),"error")}}})}return a.jsxs(Gt,{title:s("knowledge.title"),subtitle:s("knowledge.subtitle"),children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("knowledge.heading")}),a.jsxs("p",{children:[r.length," ",s("knowledge.articles")]})]}),a.jsxs("div",{className:"button-row",children:[a.jsxs("button",{className:"ghost-button",type:"button",onClick:te,disabled:h,children:[a.jsx(_t,{size:16}),s("common.refresh")]}),a.jsxs("button",{className:"primary-button",type:"button",onClick:()=>g(Qh()),children:[a.jsx(ka,{size:16}),s("knowledge.addArticle")]})]})]}),y?a.jsx("div",{className:"form-error",children:y}):null,B?a.jsx("div",{className:"form-success",children:B}):null,h&&r.length===0?a.jsx(gt,{label:s("knowledge.loading")}):null,a.jsx("section",{className:"panel table-panel hide-on-mobile",children:a.jsx("div",{className:"admin-table-wrap",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:s("common.id")}),a.jsx("th",{children:s("knowledge.category")}),a.jsx("th",{children:s("knowledge.titleField")}),a.jsx("th",{children:s("knowledge.language")}),a.jsx("th",{children:s("knowledge.show")}),a.jsx("th",{children:s("knowledge.sort")}),a.jsx("th",{children:s("knowledge.created")}),a.jsx("th",{children:s("common.actions")})]})}),a.jsxs("tbody",{children:[r.map(O=>a.jsxs("tr",{children:[a.jsx("td",{children:O.id}),a.jsx("td",{children:a.jsx("span",{className:"tag",children:O.category||"—"})}),a.jsx("td",{children:a.jsx("strong",{children:O.title})}),a.jsx("td",{children:O.language&&Vh[O.language]||O.language||"—"}),a.jsx("td",{children:a.jsx("button",{className:`admin-switch ${O.show?"active":""}`,type:"button",onClick:()=>void G(O.id),"aria-label":s("knowledge.toggleShow"),children:a.jsx("span",{className:"admin-switch-thumb"})})}),a.jsx("td",{children:O.sort??"—"}),a.jsx("td",{children:a.jsx("small",{children:$h(O.created_at)})}),a.jsx("td",{children:a.jsxs("div",{className:"row-actions",children:[a.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void K(O),children:[a.jsx(Ht,{size:14}),s("common.edit")]}),a.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void U(O.id),children:[a.jsx(Bt,{size:14}),s("common.delete")]})]})})]},O.id)),!h&&r.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:8,children:a.jsx("div",{className:"empty-state",children:s("knowledge.noArticles")})})}):null]})]})})}),a.jsxs("div",{className:"mobile-knowledge-list",children:[r.map(O=>a.jsxs("div",{className:`knowledge-mobile-card ${O.show?"show-active":""}`,children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("div",{className:"header-left",children:[a.jsxs("span",{className:"id-tag",children:["#",O.id]}),O.sort!=null&&a.jsxs("span",{className:"sort-tag",children:["Order: ",O.sort]})]}),a.jsx("button",{className:`admin-switch ${O.show?"active":""}`,type:"button",onClick:()=>void G(O.id),"aria-label":O.show?s("common.enabled"):s("common.disabled"),children:a.jsx("span",{className:"admin-switch-thumb"})})]}),a.jsxs("div",{className:"card-body",children:[a.jsx("h3",{className:"card-title",children:O.title}),a.jsxs("div",{className:"card-meta",children:[O.category&&a.jsx("span",{className:"category-badge",children:O.category}),O.language&&a.jsx("span",{className:"lang-badge",children:Vh[O.language]||O.language})]}),a.jsxs("p",{className:"created-time",children:[s("knowledge.created"),": ",$h(O.created_at)]})]}),a.jsxs("div",{className:"card-footer",children:[a.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void K(O),children:[a.jsx(Ht,{size:13}),a.jsx("span",{children:s("common.edit")})]}),a.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void U(O.id),children:[a.jsx(Bt,{size:13}),a.jsx("span",{children:s("common.delete")})]})]})]},O.id)),!h&&r.length===0?a.jsx("div",{className:"empty-state",children:s("knowledge.noArticles")}):null]}),m?a.jsx("div",{className:"modal-backdrop",role:"presentation",children:a.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"modal-heading",children:[a.jsx("div",{children:a.jsx("h2",{children:m.id?s("knowledge.editArticle"):s("knowledge.newArticle")})}),a.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:a.jsx(st,{size:18})})]}),a.jsxs("form",{className:"modal-form",onSubmit:z,children:[a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("knowledge.category")}),a.jsx("input",{className:"config-input",required:!0,value:m.category,onChange:O=>g({...m,category:O.target.value})})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("knowledge.titleField")}),a.jsx("input",{className:"config-input",required:!0,value:m.title,onChange:O=>g({...m,title:O.target.value})})]})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("knowledge.body")}),a.jsx("textarea",{className:"config-input",rows:12,required:!0,value:m.body,onChange:O=>g({...m,body:O.target.value})})]}),a.jsxs("div",{className:"form-split",children:[a.jsxs("label",{children:[a.jsx("span",{children:s("knowledge.language")}),a.jsxs("select",{className:"config-input",required:!0,value:m.language,onChange:O=>g({...m,language:O.target.value}),children:[a.jsx("option",{value:"",disabled:!0,hidden:!0,children:s("knowledge.selectLanguage")}),a.jsx("option",{value:"en-US",children:s("knowledge.lang.en")}),a.jsx("option",{value:"ja-JP",children:s("knowledge.lang.ja")}),a.jsx("option",{value:"ko-KR",children:s("knowledge.lang.ko")}),a.jsx("option",{value:"vi-VN",children:s("knowledge.lang.vi")}),a.jsx("option",{value:"zh-CN",children:s("knowledge.lang.zhCN")}),a.jsx("option",{value:"zh-TW",children:s("knowledge.lang.zhTW")})]})]}),a.jsxs("label",{children:[a.jsx("span",{children:s("knowledge.sort")}),a.jsx("input",{className:"config-input",type:"number",min:"0",value:m.sort,onChange:O=>g({...m,sort:O.target.value})})]})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:s("common.cancel")}),a.jsxs("button",{className:"primary-button",type:"submit",disabled:S,children:[a.jsx(Ca,{size:16}),s(S?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function aw(){const o=Tt(),{t:s}=Ke(),[r,u]=f.useState(null),[m,g]=f.useState(null),[h,v]=f.useState(null),[S,w]=f.useState(""),[y,j]=f.useState(!0),[B,X]=f.useState(""),te=f.useCallback(async()=>{j(!0),X("");try{const[z,G,U,O]=await Promise.all([I1().catch(()=>({data:{}})),a0().catch(()=>({data:{}})),n0().catch(()=>({data:[]})),l0().catch(()=>({data:""}))]);u(z.data),g(G.data),v(U.data),w(typeof O.data=="string"?O.data:"")}catch(z){X(z instanceof Error?z.message:s("queue.toastLoadFailed"))}finally{j(!1)}},[s]);f.useEffect(()=>{if(!Et()){o.replace("/login");return}te()},[te,o]);function K(z,G,U){return z?a.jsxs("section",{className:"panel",style:{padding:18},children:[a.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[U," ",G]}),a.jsx("div",{className:"queue-grid",children:Object.entries(z).map(([O,ee])=>a.jsxs("div",{className:"queue-item",children:[a.jsx("small",{children:O}),a.jsx("strong",{children:typeof ee=="object"?JSON.stringify(ee):String(ee??"—")})]},O))})]}):null}return a.jsxs(Gt,{title:s("queue.title"),subtitle:s("queue.subtitle"),children:[a.jsxs("div",{className:"toolbar-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s("queue.heading")}),a.jsx("p",{children:s("queue.statusDescription")})]}),a.jsx("div",{className:"button-row",children:a.jsxs("button",{className:"ghost-button",type:"button",onClick:te,disabled:y,children:[a.jsx(_t,{size:16}),s("common.refresh")]})})]}),B?a.jsx("div",{className:"form-error",children:B}):null,y?a.jsx(gt,{label:s("queue.loading")}):null,a.jsxs("div",{style:{display:"grid",gap:16},children:[K(r,s("queue.systemStatus"),a.jsx(qo,{size:18})),K(m,s("queue.queueStats"),a.jsx(qd,{size:18})),h&&h.length>0?a.jsxs("section",{className:"panel",style:{padding:18},children:[a.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[a.jsx(cv,{size:18})," ",s("queue.workload")]}),a.jsx("pre",{className:"log-viewer",children:JSON.stringify(h,null,2)})]}):null,S?a.jsxs("section",{className:"panel",style:{padding:18},children:[a.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[a.jsx(gv,{size:18})," ",s("queue.systemLog")]}),a.jsx("pre",{className:"log-viewer",children:S})]}):null]})]})}const nw=f.createContext(null);function lw({children:o}){const[s,r]=f.useState([]),[u,m]=f.useState(null),g=f.useCallback((w,y="success")=>{const j=Math.random().toString(36).substring(2,9);r(B=>[...B,{id:j,message:w,type:y}]),setTimeout(()=>{r(B=>B.filter(X=>X.id!==j))},5e3)},[]),h=f.useCallback(w=>{m(w)},[]);f.useEffect(()=>{typeof window<"u"&&(window.showToast=g,window.showConfirm=h)},[g,h]);const v=async()=>{if(u){try{await u.onConfirm()}catch(w){console.error("Error in onConfirm:",w)}m(null)}},S=()=>{u&&(u.onCancel&&u.onCancel(),m(null))};return a.jsxs(nw.Provider,{value:{showToast:g,showConfirm:h},children:[o,a.jsx("div",{className:"toast-container",children:s.map(w=>{let y=jv;return w.type==="success"&&(y=lx),w.type==="error"&&(y=mv),w.type==="warning"&&(y=Cd),a.jsxs("div",{className:`toast-card toast-${w.type}`,children:[a.jsx("div",{className:"toast-icon",children:a.jsx(y,{size:18})}),a.jsx("div",{className:"toast-message",children:w.message}),a.jsx("button",{className:"toast-close",onClick:()=>r(j=>j.filter(B=>B.id!==w.id)),children:a.jsx(st,{size:14})})]},w.id)})}),u&&a.jsx("div",{className:"confirm-backdrop",onClick:S,children:a.jsxs("div",{className:"confirm-card",onClick:w=>w.stopPropagation(),children:[a.jsxs("div",{className:"confirm-header",children:[a.jsx("div",{className:"confirm-icon",children:a.jsx(Cd,{size:22})}),a.jsx("h3",{className:"confirm-title",children:u.title||"Confirmation"})]}),a.jsx("p",{className:"confirm-message",children:u.message}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"confirm-btn-cancel",onClick:S,children:u.cancelText||"Cancel"}),a.jsx("button",{className:"confirm-btn-ok",onClick:v,children:u.confirmText||"Confirm"})]})]})}),a.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function iw({children:o}){return a.jsx(f0,{children:a.jsx(lw,{children:o})})}function sw(){return a.jsx(iw,{children:a.jsxs(Xy,{children:[a.jsx(jt,{path:"/login",element:a.jsx(h0,{})}),a.jsx(jt,{path:"/dashboard",element:a.jsx(S0,{})}),a.jsx(jt,{path:"/config/system",element:a.jsx(O0,{})}),a.jsx(jt,{path:"/config/payment",element:a.jsx(R0,{})}),a.jsx(jt,{path:"/config/theme",element:a.jsx(q0,{})}),a.jsx(jt,{path:"/server/manage",element:a.jsx(hj,{})}),a.jsx(jt,{path:"/server/group",element:a.jsx(xj,{})}),a.jsx(jt,{path:"/server/route",element:a.jsx(yj,{})}),a.jsx(jt,{path:"/plan",element:a.jsx(Nj,{})}),a.jsx(jt,{path:"/order",element:a.jsx(kj,{})}),a.jsx(jt,{path:"/coupon",element:a.jsx(Cj,{})}),a.jsx(jt,{path:"/giftcard",element:a.jsx(Tj,{})}),a.jsx(jt,{path:"/user",element:a.jsx(Rj,{})}),a.jsx(jt,{path:"/subscription",element:a.jsx($j,{})}),a.jsx(jt,{path:"/device",element:a.jsx(Kj,{})}),a.jsx(jt,{path:"/webcon",element:a.jsx(Pj,{})}),a.jsx(jt,{path:"/notice",element:a.jsx(Ij,{})}),a.jsx(jt,{path:"/ticket",element:a.jsx(ew,{})}),a.jsx(jt,{path:"/knowledge",element:a.jsx(tw,{})}),a.jsx(jt,{path:"/queue",element:a.jsx(aw,{})}),a.jsx(jt,{path:"/",element:a.jsx(Wf,{to:"/dashboard",replace:!0})}),a.jsx(jt,{path:"*",element:a.jsx(Wf,{to:"/dashboard",replace:!0})})]})})}ey.createRoot(document.getElementById("root")).render(a.jsx(f.StrictMode,{children:a.jsx(Iy,{children:a.jsx(sw,{})})}));
