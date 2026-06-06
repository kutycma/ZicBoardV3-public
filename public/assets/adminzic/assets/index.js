function Zg(s,i){for(var o=0;o<i.length;o++){const d=i[o];if(typeof d!="string"&&!Array.isArray(d)){for(const u in d)if(u!=="default"&&!(u in s)){const f=Object.getOwnPropertyDescriptor(d,u);f&&Object.defineProperty(s,u,f.get?f:{enumerable:!0,get:()=>d[u]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function Kg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var nd={exports:{}},as={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function Fg(){if(Bf)return as;Bf=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(d,u,f){var m=null;if(f!==void 0&&(m=""+f),u.key!==void 0&&(m=""+u.key),"key"in u){f={};for(var S in u)S!=="key"&&(f[S]=u[S])}else f=u;return u=f.ref,{$$typeof:s,type:d,key:m,ref:u!==void 0?u:null,props:f}}return as.Fragment=i,as.jsx=o,as.jsxs=o,as}var Gf;function Jg(){return Gf||(Gf=1,nd.exports=Fg()),nd.exports}var t=Jg(),ad={exports:{}},He={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Vg(){if(Yf)return He;Yf=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),E=Symbol.iterator;function Y(_){return _===null||typeof _!="object"?null:(_=E&&_[E]||_["@@iterator"],typeof _=="function"?_:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,M={};function B(_,T,ie){this.props=_,this.context=T,this.refs=M,this.updater=ie||P}B.prototype.isReactComponent={},B.prototype.setState=function(_,T){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,T,"setState")},B.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function R(){}R.prototype=B.prototype;function U(_,T,ie){this.props=_,this.context=T,this.refs=M,this.updater=ie||P}var I=U.prototype=new R;I.constructor=U,Z(I,B.prototype),I.isPureReactComponent=!0;var se=Array.isArray;function ce(){}var A={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function ne(_,T,ie){var pe=ie.ref;return{$$typeof:s,type:_,key:T,ref:pe!==void 0?pe:null,props:ie}}function he(_,T){return ne(_.type,T,_.props)}function w(_){return typeof _=="object"&&_!==null&&_.$$typeof===s}function H(_){var T={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(ie){return T[ie]})}var te=/\/+/g;function G(_,T){return typeof _=="object"&&_!==null&&_.key!=null?H(""+_.key):T.toString(36)}function oe(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(ce,ce):(_.status="pending",_.then(function(T){_.status==="pending"&&(_.status="fulfilled",_.value=T)},function(T){_.status==="pending"&&(_.status="rejected",_.reason=T)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function k(_,T,ie,pe,Ne){var ze=typeof _;(ze==="undefined"||ze==="boolean")&&(_=null);var Ae=!1;if(_===null)Ae=!0;else switch(ze){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(_.$$typeof){case s:case i:Ae=!0;break;case v:return Ae=_._init,k(Ae(_._payload),T,ie,pe,Ne)}}if(Ae)return Ne=Ne(_),Ae=pe===""?"."+G(_,0):pe,se(Ne)?(ie="",Ae!=null&&(ie=Ae.replace(te,"$&/")+"/"),k(Ne,T,ie,"",function(et){return et})):Ne!=null&&(w(Ne)&&(Ne=he(Ne,ie+(Ne.key==null||_&&_.key===Ne.key?"":(""+Ne.key).replace(te,"$&/")+"/")+Ae)),T.push(Ne)),1;Ae=0;var Je=pe===""?".":pe+":";if(se(_))for(var Re=0;Re<_.length;Re++)pe=_[Re],ze=Je+G(pe,Re),Ae+=k(pe,T,ie,ze,Ne);else if(Re=Y(_),typeof Re=="function")for(_=Re.call(_),Re=0;!(pe=_.next()).done;)pe=pe.value,ze=Je+G(pe,Re++),Ae+=k(pe,T,ie,ze,Ne);else if(ze==="object"){if(typeof _.then=="function")return k(oe(_),T,ie,pe,Ne);throw T=String(_),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function V(_,T,ie){if(_==null)return _;var pe=[],Ne=0;return k(_,pe,"","",function(ze){return T.call(ie,ze,Ne++)}),pe}function C(_){if(_._status===-1){var T=_._result;T=T(),T.then(function(ie){(_._status===0||_._status===-1)&&(_._status=1,_._result=ie)},function(ie){(_._status===0||_._status===-1)&&(_._status=2,_._result=ie)}),_._status===-1&&(_._status=0,_._result=T)}if(_._status===1)return _._result.default;throw _._result}var de=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)},N={map:V,forEach:function(_,T,ie){V(_,function(){T.apply(this,arguments)},ie)},count:function(_){var T=0;return V(_,function(){T++}),T},toArray:function(_){return V(_,function(T){return T})||[]},only:function(_){if(!w(_))throw Error("React.Children.only expected to receive a single React element child.");return _}};return He.Activity=j,He.Children=N,He.Component=B,He.Fragment=o,He.Profiler=u,He.PureComponent=U,He.StrictMode=d,He.Suspense=y,He.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,He.__COMPILER_RUNTIME={__proto__:null,c:function(_){return A.H.useMemoCache(_)}},He.cache=function(_){return function(){return _.apply(null,arguments)}},He.cacheSignal=function(){return null},He.cloneElement=function(_,T,ie){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var pe=Z({},_.props),Ne=_.key;if(T!=null)for(ze in T.key!==void 0&&(Ne=""+T.key),T)!$.call(T,ze)||ze==="key"||ze==="__self"||ze==="__source"||ze==="ref"&&T.ref===void 0||(pe[ze]=T[ze]);var ze=arguments.length-2;if(ze===1)pe.children=ie;else if(1<ze){for(var Ae=Array(ze),Je=0;Je<ze;Je++)Ae[Je]=arguments[Je+2];pe.children=Ae}return ne(_.type,Ne,pe)},He.createContext=function(_){return _={$$typeof:m,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:f,_context:_},_},He.createElement=function(_,T,ie){var pe,Ne={},ze=null;if(T!=null)for(pe in T.key!==void 0&&(ze=""+T.key),T)$.call(T,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(Ne[pe]=T[pe]);var Ae=arguments.length-2;if(Ae===1)Ne.children=ie;else if(1<Ae){for(var Je=Array(Ae),Re=0;Re<Ae;Re++)Je[Re]=arguments[Re+2];Ne.children=Je}if(_&&_.defaultProps)for(pe in Ae=_.defaultProps,Ae)Ne[pe]===void 0&&(Ne[pe]=Ae[pe]);return ne(_,ze,Ne)},He.createRef=function(){return{current:null}},He.forwardRef=function(_){return{$$typeof:S,render:_}},He.isValidElement=w,He.lazy=function(_){return{$$typeof:v,_payload:{_status:-1,_result:_},_init:C}},He.memo=function(_,T){return{$$typeof:x,type:_,compare:T===void 0?null:T}},He.startTransition=function(_){var T=A.T,ie={};A.T=ie;try{var pe=_(),Ne=A.S;Ne!==null&&Ne(ie,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(ce,de)}catch(ze){de(ze)}finally{T!==null&&ie.types!==null&&(T.types=ie.types),A.T=T}},He.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},He.use=function(_){return A.H.use(_)},He.useActionState=function(_,T,ie){return A.H.useActionState(_,T,ie)},He.useCallback=function(_,T){return A.H.useCallback(_,T)},He.useContext=function(_){return A.H.useContext(_)},He.useDebugValue=function(){},He.useDeferredValue=function(_,T){return A.H.useDeferredValue(_,T)},He.useEffect=function(_,T){return A.H.useEffect(_,T)},He.useEffectEvent=function(_){return A.H.useEffectEvent(_)},He.useId=function(){return A.H.useId()},He.useImperativeHandle=function(_,T,ie){return A.H.useImperativeHandle(_,T,ie)},He.useInsertionEffect=function(_,T){return A.H.useInsertionEffect(_,T)},He.useLayoutEffect=function(_,T){return A.H.useLayoutEffect(_,T)},He.useMemo=function(_,T){return A.H.useMemo(_,T)},He.useOptimistic=function(_,T){return A.H.useOptimistic(_,T)},He.useReducer=function(_,T,ie){return A.H.useReducer(_,T,ie)},He.useRef=function(_){return A.H.useRef(_)},He.useState=function(_){return A.H.useState(_)},He.useSyncExternalStore=function(_,T,ie){return A.H.useSyncExternalStore(_,T,ie)},He.useTransition=function(){return A.H.useTransition()},He.version="19.2.6",He}var $f;function Ld(){return $f||($f=1,ad.exports=Vg()),ad.exports}var h=Ld();const Pg=Kg(h),Wg=Zg({__proto__:null,default:Pg},[h]);var ld={exports:{}},ls={},id={exports:{}},sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function Ig(){return Qf||(Qf=1,(function(s){function i(k,V){var C=k.length;k.push(V);e:for(;0<C;){var de=C-1>>>1,N=k[de];if(0<u(N,V))k[de]=V,k[C]=N,C=de;else break e}}function o(k){return k.length===0?null:k[0]}function d(k){if(k.length===0)return null;var V=k[0],C=k.pop();if(C!==V){k[0]=C;e:for(var de=0,N=k.length,_=N>>>1;de<_;){var T=2*(de+1)-1,ie=k[T],pe=T+1,Ne=k[pe];if(0>u(ie,C))pe<N&&0>u(Ne,ie)?(k[de]=Ne,k[pe]=C,de=pe):(k[de]=ie,k[T]=C,de=T);else if(pe<N&&0>u(Ne,C))k[de]=Ne,k[pe]=C,de=pe;else break e}}return V}function u(k,V){var C=k.sortIndex-V.sortIndex;return C!==0?C:k.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;s.unstable_now=function(){return f.now()}}else{var m=Date,S=m.now();s.unstable_now=function(){return m.now()-S}}var y=[],x=[],v=1,j=null,E=3,Y=!1,P=!1,Z=!1,M=!1,B=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function I(k){for(var V=o(x);V!==null;){if(V.callback===null)d(x);else if(V.startTime<=k)d(x),V.sortIndex=V.expirationTime,i(y,V);else break;V=o(x)}}function se(k){if(Z=!1,I(k),!P)if(o(y)!==null)P=!0,ce||(ce=!0,H());else{var V=o(x);V!==null&&oe(se,V.startTime-k)}}var ce=!1,A=-1,$=5,ne=-1;function he(){return M?!0:!(s.unstable_now()-ne<$)}function w(){if(M=!1,ce){var k=s.unstable_now();ne=k;var V=!0;try{e:{P=!1,Z&&(Z=!1,R(A),A=-1),Y=!0;var C=E;try{t:{for(I(k),j=o(y);j!==null&&!(j.expirationTime>k&&he());){var de=j.callback;if(typeof de=="function"){j.callback=null,E=j.priorityLevel;var N=de(j.expirationTime<=k);if(k=s.unstable_now(),typeof N=="function"){j.callback=N,I(k),V=!0;break t}j===o(y)&&d(y),I(k)}else d(y);j=o(y)}if(j!==null)V=!0;else{var _=o(x);_!==null&&oe(se,_.startTime-k),V=!1}}break e}finally{j=null,E=C,Y=!1}V=void 0}}finally{V?H():ce=!1}}}var H;if(typeof U=="function")H=function(){U(w)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,G=te.port2;te.port1.onmessage=w,H=function(){G.postMessage(null)}}else H=function(){B(w,0)};function oe(k,V){A=B(function(){k(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return E},s.unstable_next=function(k){switch(E){case 1:case 2:case 3:var V=3;break;default:V=E}var C=E;E=V;try{return k()}finally{E=C}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(k,V){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var C=E;E=k;try{return V()}finally{E=C}},s.unstable_scheduleCallback=function(k,V,C){var de=s.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?de+C:de):C=de,k){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=C+N,k={id:v++,callback:V,priorityLevel:k,startTime:C,expirationTime:N,sortIndex:-1},C>de?(k.sortIndex=C,i(x,k),o(y)===null&&k===o(x)&&(Z?(R(A),A=-1):Z=!0,oe(se,C-de))):(k.sortIndex=N,i(y,k),P||Y||(P=!0,ce||(ce=!0,H()))),k},s.unstable_shouldYield=he,s.unstable_wrapCallback=function(k){var V=E;return function(){var C=E;E=V;try{return k.apply(this,arguments)}finally{E=C}}}})(sd)),sd}var Xf;function ey(){return Xf||(Xf=1,id.exports=Ig()),id.exports}var od={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf;function ty(){if(Zf)return cn;Zf=1;var s=Ld();function i(y){var x="https://react.dev/errors/"+y;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)x+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(y,x,v){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:j==null?null:""+j,children:y,containerInfo:x,implementation:v}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(y,x){if(y==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,cn.createPortal=function(y,x){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(i(299));return f(y,x,null,v)},cn.flushSync=function(y){var x=m.T,v=d.p;try{if(m.T=null,d.p=2,y)return y()}finally{m.T=x,d.p=v,d.d.f()}},cn.preconnect=function(y,x){typeof y=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,d.d.C(y,x))},cn.prefetchDNS=function(y){typeof y=="string"&&d.d.D(y)},cn.preinit=function(y,x){if(typeof y=="string"&&x&&typeof x.as=="string"){var v=x.as,j=S(v,x.crossOrigin),E=typeof x.integrity=="string"?x.integrity:void 0,Y=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;v==="style"?d.d.S(y,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:j,integrity:E,fetchPriority:Y}):v==="script"&&d.d.X(y,{crossOrigin:j,integrity:E,fetchPriority:Y,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},cn.preinitModule=function(y,x){if(typeof y=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var v=S(x.as,x.crossOrigin);d.d.M(y,{crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&d.d.M(y)},cn.preload=function(y,x){if(typeof y=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var v=x.as,j=S(v,x.crossOrigin);d.d.L(y,v,{crossOrigin:j,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},cn.preloadModule=function(y,x){if(typeof y=="string")if(x){var v=S(x.as,x.crossOrigin);d.d.m(y,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else d.d.m(y)},cn.requestFormReset=function(y){d.d.r(y)},cn.unstable_batchedUpdates=function(y,x){return y(x)},cn.useFormState=function(y,x,v){return m.H.useFormState(y,x,v)},cn.useFormStatus=function(){return m.H.useHostTransitionStatus()},cn.version="19.2.6",cn}var Kf;function Wh(){if(Kf)return od.exports;Kf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),od.exports=ty(),od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff;function ny(){if(Ff)return ls;Ff=1;var s=ey(),i=Ld(),o=Wh();function d(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function S(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(d(188))}function x(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(d(188));return n!==e?null:e}for(var a=e,l=n;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){a=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return y(r),e;if(c===l)return y(r),n;c=c.sibling}throw Error(d(188))}if(a.return!==l.return)a=r,l=c;else{for(var p=!1,b=r.child;b;){if(b===a){p=!0,a=r,l=c;break}if(b===l){p=!0,l=r,a=c;break}b=b.sibling}if(!p){for(b=c.child;b;){if(b===a){p=!0,a=c,l=r;break}if(b===l){p=!0,l=c,a=r;break}b=b.sibling}if(!p)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var j=Object.assign,E=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),U=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),w=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function G(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case B:return"Profiler";case M:return"StrictMode";case se:return"Suspense";case ce:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case U:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case I:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case A:return n=e.displayName||null,n!==null?n:G(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return G(e(n))}catch{}}return null}var oe=Array.isArray,k=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C={pending:!1,data:null,method:null,action:null},de=[],N=-1;function _(e){return{current:e}}function T(e){0>N||(e.current=de[N],de[N]=null,N--)}function ie(e,n){N++,de[N]=e.current,e.current=n}var pe=_(null),Ne=_(null),ze=_(null),Ae=_(null);function Je(e,n){switch(ie(ze,n),ie(Ne,e),ie(pe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?cf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=cf(n),e=df(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(pe),ie(pe,e)}function Re(){T(pe),T(Ne),T(ze)}function et(e){e.memoizedState!==null&&ie(Ae,e);var n=pe.current,a=df(n,e.type);n!==a&&(ie(Ne,e),ie(pe,a))}function Et(e){Ne.current===e&&(T(pe),T(Ne)),Ae.current===e&&(T(Ae),Ii._currentValue=C)}var Rt,rn;function gt(e){if(Rt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Rt=n&&n[1]||"",rn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+e+rn}var $t=!1;function Ht(e,n){if(!e||$t)return"";$t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(J){var F=J}Reflect.construct(e,[],le)}else{try{le.call()}catch(J){F=J}e.call(le.prototype)}}else{try{throw Error()}catch(J){F=J}(le=e())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(J){if(J&&F&&typeof J.stack=="string")return[J.stack,F.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),p=c[0],b=c[1];if(p&&b){var z=p.split(`
`),X=b.split(`
`);for(r=l=0;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;for(;r<X.length&&!X[r].includes("DetermineComponentFrameRoot");)r++;if(l===z.length||r===X.length)for(l=z.length-1,r=X.length-1;1<=l&&0<=r&&z[l]!==X[r];)r--;for(;1<=l&&0<=r;l--,r--)if(z[l]!==X[r]){if(l!==1||r!==1)do if(l--,r--,0>r||z[l]!==X[r]){var W=`
`+z[l].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),W}while(1<=l&&0<=r);break}}}finally{$t=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?gt(a):""}function It(e,n){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return Ht(e.type,!1);case 11:return Ht(e.type.render,!1);case 1:return Ht(e.type,!0);case 31:return gt("Activity");default:return""}}function bt(e){try{var n="",a=null;do n+=It(e,a),a=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Qt=Object.prototype.hasOwnProperty,ve=s.unstable_scheduleCallback,_t=s.unstable_cancelCallback,Me=s.unstable_shouldYield,D=s.unstable_requestPaint,ye=s.unstable_now,Oe=s.unstable_getCurrentPriorityLevel,Le=s.unstable_ImmediatePriority,mt=s.unstable_UserBlockingPriority,K=s.unstable_NormalPriority,we=s.unstable_LowPriority,_e=s.unstable_IdlePriority,be=s.log,tt=s.unstable_setDisableYieldValue,Ue=null,Ge=null;function Pe(e){if(typeof be=="function"&&tt(e),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(Ue,e)}catch{}}var st=Math.clz32?Math.clz32:rl,Zn=Math.log,Xt=Math.LN2;function rl(e){return e>>>=0,e===0?32:31-(Zn(e)/Xt|0)|0}var en=256,Mn=262144,aa=4194304;function vn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function L(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~c,l!==0?r=vn(l):(p&=b,p!==0?r=vn(p):a||(a=b&~e,a!==0&&(r=vn(a))))):(b=l&~c,b!==0?r=vn(b):p!==0?r=vn(p):a||(a=l&~e,a!==0&&(r=vn(a)))),r===0?0:n!==0&&n!==r&&(n&c)===0&&(c=r&-r,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:r}function re(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ee(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ce(){var e=aa;return aa<<=1,(aa&62914560)===0&&(aa=4194304),e}function Ye(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function nt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ft(e,n,a,l,r,c){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,z=e.expirationTimes,X=e.hiddenUpdates;for(a=p&~a;0<a;){var W=31-st(a),le=1<<W;b[W]=0,z[W]=-1;var F=X[W];if(F!==null)for(X[W]=null,W=0;W<F.length;W++){var J=F[W];J!==null&&(J.lane&=-536870913)}a&=~le}l!==0&&ht(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~n))}function ht(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-st(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function We(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-st(a),r=1<<l;r&n|e[l]&n&&(e[l]|=n),a&=~r}}function pn(e,n){var a=n&-n;return a=(a&42)!==0?1:fi(a),(a&(e.suspendedLanes|n))!==0?0:a}function fi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bs(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Af(e.type))}function Nt(e,n){var a=V.p;try{return V.p=e,n()}finally{V.p=a}}var Kn=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Kn,St="__reactProps$"+Kn,Ca="__reactContainer$"+Kn,g="__reactEvents$"+Kn,ue="__reactListeners$"+Kn,me="__reactHandles$"+Kn,ke="__reactResources$"+Kn,Ie="__reactMarker$"+Kn;function mn(e){delete e[Zt],delete e[St],delete e[g],delete e[ue],delete e[me]}function Lt(e){var n=e[Zt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ca]||a[Zt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=bf(e);e!==null;){if(a=e[Zt])return a;e=bf(e)}return n}e=a,a=e.parentNode}return null}function Fn(e){if(e=e[Zt]||e[Ca]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function la(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(d(33))}function za(e){var n=e[ke];return n||(n=e[ke]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Vt(e){e[Ie]=!0}var Vd=new Set,Pd={};function cl(e,n){Ml(e,n),Ml(e+"Capture",n)}function Ml(e,n){for(Pd[e]=n,e=0;e<n.length;e++)Vd.add(n[e])}var Hx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wd={},Id={};function Lx(e){return Qt.call(Id,e)?!0:Qt.call(Wd,e)?!1:Hx.test(e)?Id[e]=!0:(Wd[e]=!0,!1)}function gs(e,n,a){if(Lx(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ys(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ia(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}function Dn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qx(e,n,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,c=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Jo(e){if(!e._valueTracker){var n=eu(e)?"checked":"value";e._valueTracker=qx(e,n,""+e[n])}}function tu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=eu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bx=/[\n"\\]/g;function An(e){return e.replace(Bx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Vo(e,n,a,l,r,c,p,b){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Dn(n)):e.value!==""+Dn(n)&&(e.value=""+Dn(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?Po(e,p,Dn(n)):a!=null?Po(e,p,Dn(a)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Dn(b):e.removeAttribute("name")}function nu(e,n,a,l,r,c,p,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Jo(e);return}a=a!=null?""+Dn(a):"",n=n!=null?""+Dn(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Jo(e)}function Po(e,n,a){n==="number"&&vs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Dl(e,n,a,l){if(e=e.options,n){n={};for(var r=0;r<a.length;r++)n["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=n.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Dn(a),n=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function au(e,n,a){if(n!=null&&(n=""+Dn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Dn(a):""}function lu(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(d(92));if(oe(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=Dn(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Jo(e)}function Al(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Gx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function iu(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||Gx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function su(e,n,a){if(n!=null&&typeof n!="object")throw Error(d(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&a[r]!==l&&iu(e,r,l)}else for(var c in n)n.hasOwnProperty(c)&&iu(e,c,n[c])}function Wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$x=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function js(e){return $x.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var Io=null;function er(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ol=null,Ul=null;function ou(e){var n=Fn(e);if(n&&(e=n.stateNode)){var a=e[St]||null;e:switch(e=n.stateNode,n.type){case"input":if(Vo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+An(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var r=l[St]||null;if(!r)throw Error(d(90));Vo(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&tu(l)}break e;case"textarea":au(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Dl(e,!!a.multiple,n,!1)}}}var tr=!1;function ru(e,n,a){if(tr)return e(n,a);tr=!0;try{var l=e(n);return l}finally{if(tr=!1,(Ol!==null||Ul!==null)&&(ro(),Ol&&(n=Ol,e=Ul,Ul=Ol=null,ou(n),e)))for(n=0;n<e.length;n++)ou(e[n])}}function xi(e,n){var a=e.stateNode;if(a===null)return null;var l=a[St]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,n,typeof a));return a}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nr=!1;if(oa)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){nr=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{nr=!1}var Ta=null,ar=null,ws=null;function cu(){if(ws)return ws;var e,n=ar,a=n.length,l,r="value"in Ta?Ta.value:Ta.textContent,c=r.length;for(e=0;e<a&&n[e]===r[e];e++);var p=a-e;for(l=1;l<=p&&n[a-l]===r[c-l];l++);return ws=r.slice(e,1<l?1-l:void 0)}function _s(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ns(){return!0}function du(){return!1}function fn(e){function n(a,l,r,c,p){this._reactName=a,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ns:du,this.isPropagationStopped=du,this}return j(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),n}var dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=fn(dl),gi=j({},dl,{view:0,detail:0}),Qx=fn(gi),lr,ir,yi,ks=j({},gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yi&&(yi&&e.type==="mousemove"?(lr=e.screenX-yi.screenX,ir=e.screenY-yi.screenY):ir=lr=0,yi=e),lr)},movementY:function(e){return"movementY"in e?e.movementY:ir}}),uu=fn(ks),Xx=j({},ks,{dataTransfer:0}),Zx=fn(Xx),Kx=j({},gi,{relatedTarget:0}),sr=fn(Kx),Fx=j({},dl,{animationName:0,elapsedTime:0,pseudoElement:0}),Jx=fn(Fx),Vx=j({},dl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Px=fn(Vx),Wx=j({},dl,{data:0}),pu=fn(Wx),Ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tb[e])?!!n[e]:!1}function or(){return nb}var ab=j({},gi,{key:function(e){if(e.key){var n=Ix[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(e){return e.type==="keypress"?_s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lb=fn(ab),ib=j({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mu=fn(ib),sb=j({},gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or}),ob=fn(sb),rb=j({},dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),cb=fn(rb),db=j({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ub=fn(db),pb=j({},dl,{newState:0,oldState:0}),mb=fn(pb),fb=[9,13,27,32],rr=oa&&"CompositionEvent"in window,vi=null;oa&&"documentMode"in document&&(vi=document.documentMode);var hb=oa&&"TextEvent"in window&&!vi,fu=oa&&(!rr||vi&&8<vi&&11>=vi),hu=" ",xu=!1;function bu(e,n){switch(e){case"keyup":return fb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rl=!1;function xb(e,n){switch(e){case"compositionend":return gu(n);case"keypress":return n.which!==32?null:(xu=!0,hu);case"textInput":return e=n.data,e===hu&&xu?null:e;default:return null}}function bb(e,n){if(Rl)return e==="compositionend"||!rr&&bu(e,n)?(e=cu(),ws=ar=Ta=null,Rl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fu&&n.locale!=="ko"?null:n.data;default:return null}}var gb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gb[e.type]:n==="textarea"}function vu(e,n,a,l){Ol?Ul?Ul.push(l):Ul=[l]:Ol=l,n=xo(n,"onChange"),0<n.length&&(a=new Ss("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var ji=null,wi=null;function yb(e){nf(e,0)}function Cs(e){var n=la(e);if(tu(n))return e}function ju(e,n){if(e==="change")return n}var wu=!1;if(oa){var cr;if(oa){var dr="oninput"in document;if(!dr){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),dr=typeof _u.oninput=="function"}cr=dr}else cr=!1;wu=cr&&(!document.documentMode||9<document.documentMode)}function Nu(){ji&&(ji.detachEvent("onpropertychange",Su),wi=ji=null)}function Su(e){if(e.propertyName==="value"&&Cs(wi)){var n=[];vu(n,wi,e,er(e)),ru(yb,n)}}function vb(e,n,a){e==="focusin"?(Nu(),ji=n,wi=a,ji.attachEvent("onpropertychange",Su)):e==="focusout"&&Nu()}function jb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cs(wi)}function wb(e,n){if(e==="click")return Cs(n)}function _b(e,n){if(e==="input"||e==="change")return Cs(n)}function Nb(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:Nb;function _i(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var r=a[l];if(!Qt.call(n,r)||!jn(e[r],n[r]))return!1}return!0}function ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cu(e,n){var a=ku(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ku(a)}}function zu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vs(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vs(e.document)}return n}function ur(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Sb=oa&&"documentMode"in document&&11>=document.documentMode,Hl=null,pr=null,Ni=null,mr=!1;function Eu(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mr||Hl==null||Hl!==vs(l)||(l=Hl,"selectionStart"in l&&ur(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ni&&_i(Ni,l)||(Ni=l,l=xo(pr,"onSelect"),0<l.length&&(n=new Ss("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=Hl)))}function ul(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ll={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionrun:ul("Transition","TransitionRun"),transitionstart:ul("Transition","TransitionStart"),transitioncancel:ul("Transition","TransitionCancel"),transitionend:ul("Transition","TransitionEnd")},fr={},Mu={};oa&&(Mu=document.createElement("div").style,"AnimationEvent"in window||(delete Ll.animationend.animation,delete Ll.animationiteration.animation,delete Ll.animationstart.animation),"TransitionEvent"in window||delete Ll.transitionend.transition);function pl(e){if(fr[e])return fr[e];if(!Ll[e])return e;var n=Ll[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Mu)return fr[e]=n[a];return e}var Du=pl("animationend"),Au=pl("animationiteration"),Ou=pl("animationstart"),kb=pl("transitionrun"),Cb=pl("transitionstart"),zb=pl("transitioncancel"),Uu=pl("transitionend"),Ru=new Map,hr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hr.push("scrollEnd");function $n(e,n){Ru.set(e,n),cl(n,[e])}var zs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},On=[],ql=0,xr=0;function Ts(){for(var e=ql,n=xr=ql=0;n<e;){var a=On[n];On[n++]=null;var l=On[n];On[n++]=null;var r=On[n];On[n++]=null;var c=On[n];if(On[n++]=null,l!==null&&r!==null){var p=l.pending;p===null?r.next=r:(r.next=p.next,p.next=r),l.pending=r}c!==0&&Hu(a,r,c)}}function Es(e,n,a,l){On[ql++]=e,On[ql++]=n,On[ql++]=a,On[ql++]=l,xr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function br(e,n,a,l){return Es(e,n,a,l),Ms(e)}function ml(e,n){return Es(e,null,null,n),Ms(e)}function Hu(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var r=!1,c=e.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&n!==null&&(r=31-st(a),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=a|536870912),c):null}function Ms(e){if(50<Zi)throw Zi=0,kc=null,Error(d(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Bl={};function Tb(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,n,a,l){return new Tb(e,n,a,l)}function gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,n){var a=e.alternate;return a===null?(a=wn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lu(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ds(e,n,a,l,r,c){var p=0;if(l=e,typeof e=="function")gr(e)&&(p=1);else if(typeof e=="string")p=Og(e,a,pe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=wn(31,a,n,r),e.elementType=ne,e.lanes=c,e;case Z:return fl(a.children,r,c,n);case M:p=8,r|=24;break;case B:return e=wn(12,a,n,r|2),e.elementType=B,e.lanes=c,e;case se:return e=wn(13,a,n,r),e.elementType=se,e.lanes=c,e;case ce:return e=wn(19,a,n,r),e.elementType=ce,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:p=10;break e;case R:p=9;break e;case I:p=11;break e;case A:p=14;break e;case $:p=16,l=null;break e}p=29,a=Error(d(130,e===null?"null":typeof e,"")),l=null}return n=wn(p,a,n,r),n.elementType=e,n.type=l,n.lanes=c,n}function fl(e,n,a,l){return e=wn(7,e,l,n),e.lanes=a,e}function yr(e,n,a){return e=wn(6,e,null,n),e.lanes=a,e}function qu(e){var n=wn(18,null,null,0);return n.stateNode=e,n}function vr(e,n,a){return n=wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Bu=new WeakMap;function Un(e,n){if(typeof e=="object"&&e!==null){var a=Bu.get(e);return a!==void 0?a:(n={value:e,source:n,stack:bt(n)},Bu.set(e,n),n)}return{value:e,source:n,stack:bt(n)}}var Gl=[],Yl=0,As=null,Si=0,Rn=[],Hn=0,Ea=null,Jn=1,Vn="";function ca(e,n){Gl[Yl++]=Si,Gl[Yl++]=As,As=e,Si=n}function Gu(e,n,a){Rn[Hn++]=Jn,Rn[Hn++]=Vn,Rn[Hn++]=Ea,Ea=e;var l=Jn;e=Vn;var r=32-st(l)-1;l&=~(1<<r),a+=1;var c=32-st(n)+r;if(30<c){var p=r-r%5;c=(l&(1<<p)-1).toString(32),l>>=p,r-=p,Jn=1<<32-st(n)+r|a<<r|l,Vn=c+e}else Jn=1<<c|a<<r|l,Vn=e}function jr(e){e.return!==null&&(ca(e,1),Gu(e,1,0))}function wr(e){for(;e===As;)As=Gl[--Yl],Gl[Yl]=null,Si=Gl[--Yl],Gl[Yl]=null;for(;e===Ea;)Ea=Rn[--Hn],Rn[Hn]=null,Vn=Rn[--Hn],Rn[Hn]=null,Jn=Rn[--Hn],Rn[Hn]=null}function Yu(e,n){Rn[Hn++]=Jn,Rn[Hn++]=Vn,Rn[Hn++]=Ea,Jn=n.id,Vn=n.overflow,Ea=e}var tn=null,yt=null,Ve=!1,Ma=null,Ln=!1,_r=Error(d(519));function Da(e){var n=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ki(Un(n,e)),_r}function $u(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[Zt]=e,n[St]=l,a){case"dialog":Xe("cancel",n),Xe("close",n);break;case"iframe":case"object":case"embed":Xe("load",n);break;case"video":case"audio":for(a=0;a<Fi.length;a++)Xe(Fi[a],n);break;case"source":Xe("error",n);break;case"img":case"image":case"link":Xe("error",n),Xe("load",n);break;case"details":Xe("toggle",n);break;case"input":Xe("invalid",n),nu(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Xe("invalid",n);break;case"textarea":Xe("invalid",n),lu(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||of(n.textContent,a)?(l.popover!=null&&(Xe("beforetoggle",n),Xe("toggle",n)),l.onScroll!=null&&Xe("scroll",n),l.onScrollEnd!=null&&Xe("scrollend",n),l.onClick!=null&&(n.onclick=sa),n=!0):n=!1,n||Da(e,!0)}function Qu(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 31:case 13:Ln=!1;return;case 27:case 3:Ln=!0;return;default:tn=tn.return}}function $l(e){if(e!==tn)return!1;if(!Ve)return Qu(e),Ve=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gc(e.type,e.memoizedProps)),a=!a),a&&yt&&Da(e),Qu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));yt=xf(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));yt=xf(e)}else n===27?(n=yt,Za(e.type)?(e=Zc,Zc=null,yt=e):yt=n):yt=tn?Bn(e.stateNode.nextSibling):null;return!0}function hl(){yt=tn=null,Ve=!1}function Nr(){var e=Ma;return e!==null&&(gn===null?gn=e:gn.push.apply(gn,e),Ma=null),e}function ki(e){Ma===null?Ma=[e]:Ma.push(e)}var Sr=_(null),xl=null,da=null;function Aa(e,n,a){ie(Sr,n._currentValue),n._currentValue=a}function ua(e){e._currentValue=Sr.current,T(Sr)}function kr(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function Cr(e,n,a,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=r;for(var z=0;z<n.length;z++)if(b.context===n[z]){c.lanes|=a,b=c.alternate,b!==null&&(b.lanes|=a),kr(c.return,a,e),l||(p=null);break e}c=b.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(d(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),kr(p,a,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function Ql(e,n,a,l){e=null;for(var r=n,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(d(387));if(p=p.memoizedProps,p!==null){var b=r.type;jn(r.pendingProps.value,p.value)||(e!==null?e.push(b):e=[b])}}else if(r===Ae.current){if(p=r.alternate,p===null)throw Error(d(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ii):e=[Ii])}r=r.return}e!==null&&Cr(n,e,a,l),n.flags|=262144}function Os(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bl(e){xl=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return Xu(xl,e)}function Us(e,n){return xl===null&&bl(e),Xu(e,n)}function Xu(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},da===null){if(e===null)throw Error(d(308));da=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else da=da.next=n;return a}var Eb=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Mb=s.unstable_scheduleCallback,Db=s.unstable_NormalPriority,qt={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zr(){return{controller:new Eb,data:new Map,refCount:0}}function Ci(e){e.refCount--,e.refCount===0&&Mb(Db,function(){e.controller.abort()})}var zi=null,Tr=0,Xl=0,Zl=null;function Ab(e,n){if(zi===null){var a=zi=[];Tr=0,Xl=Dc(),Zl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Tr++,n.then(Zu,Zu),n}function Zu(){if(--Tr===0&&zi!==null){Zl!==null&&(Zl.status="fulfilled");var e=zi;zi=null,Xl=0,Zl=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ob(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<a.length;r++)(0,a[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),l}var Ku=k.S;k.S=function(e,n){Em=ye(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ab(e,n),Ku!==null&&Ku(e,n)};var gl=_(null);function Er(){var e=gl.current;return e!==null?e:xt.pooledCache}function Rs(e,n){n===null?ie(gl,gl.current):ie(gl,n.pool)}function Fu(){var e=Er();return e===null?null:{parent:qt._currentValue,pool:e}}var Kl=Error(d(460)),Mr=Error(d(474)),Hs=Error(d(542)),Ls={then:function(){}};function Ju(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vu(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(sa,sa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Wu(e),e;default:if(typeof n.status=="string")n.then(sa,sa);else{if(e=xt,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Wu(e),e}throw vl=n,Kl}}function yl(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vl=a,Kl):a}}var vl=null;function Pu(){if(vl===null)throw Error(d(459));var e=vl;return vl=null,e}function Wu(e){if(e===Kl||e===Hs)throw Error(d(483))}var Fl=null,Ti=0;function qs(e){var n=Ti;return Ti+=1,Fl===null&&(Fl=[]),Vu(Fl,e,n)}function Ei(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Bs(e,n){throw n.$$typeof===E?Error(d(525)):(e=Object.prototype.toString.call(n),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Iu(e){function n(q,O){if(e){var Q=q.deletions;Q===null?(q.deletions=[O],q.flags|=16):Q.push(O)}}function a(q,O){if(!e)return null;for(;O!==null;)n(q,O),O=O.sibling;return null}function l(q){for(var O=new Map;q!==null;)q.key!==null?O.set(q.key,q):O.set(q.index,q),q=q.sibling;return O}function r(q,O){return q=ra(q,O),q.index=0,q.sibling=null,q}function c(q,O,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<O?(q.flags|=67108866,O):Q):(q.flags|=67108866,O)):(q.flags|=1048576,O)}function p(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function b(q,O,Q,ae){return O===null||O.tag!==6?(O=yr(Q,q.mode,ae),O.return=q,O):(O=r(O,Q),O.return=q,O)}function z(q,O,Q,ae){var Ee=Q.type;return Ee===Z?W(q,O,Q.props.children,ae,Q.key):O!==null&&(O.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===$&&yl(Ee)===O.type)?(O=r(O,Q.props),Ei(O,Q),O.return=q,O):(O=Ds(Q.type,Q.key,Q.props,null,q.mode,ae),Ei(O,Q),O.return=q,O)}function X(q,O,Q,ae){return O===null||O.tag!==4||O.stateNode.containerInfo!==Q.containerInfo||O.stateNode.implementation!==Q.implementation?(O=vr(Q,q.mode,ae),O.return=q,O):(O=r(O,Q.children||[]),O.return=q,O)}function W(q,O,Q,ae,Ee){return O===null||O.tag!==7?(O=fl(Q,q.mode,ae,Ee),O.return=q,O):(O=r(O,Q),O.return=q,O)}function le(q,O,Q){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=yr(""+O,q.mode,Q),O.return=q,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Y:return Q=Ds(O.type,O.key,O.props,null,q.mode,Q),Ei(Q,O),Q.return=q,Q;case P:return O=vr(O,q.mode,Q),O.return=q,O;case $:return O=yl(O),le(q,O,Q)}if(oe(O)||H(O))return O=fl(O,q.mode,Q,null),O.return=q,O;if(typeof O.then=="function")return le(q,qs(O),Q);if(O.$$typeof===U)return le(q,Us(q,O),Q);Bs(q,O)}return null}function F(q,O,Q,ae){var Ee=O!==null?O.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ee!==null?null:b(q,O,""+Q,ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Y:return Q.key===Ee?z(q,O,Q,ae):null;case P:return Q.key===Ee?X(q,O,Q,ae):null;case $:return Q=yl(Q),F(q,O,Q,ae)}if(oe(Q)||H(Q))return Ee!==null?null:W(q,O,Q,ae,null);if(typeof Q.then=="function")return F(q,O,qs(Q),ae);if(Q.$$typeof===U)return F(q,O,Us(q,Q),ae);Bs(q,Q)}return null}function J(q,O,Q,ae,Ee){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return q=q.get(Q)||null,b(O,q,""+ae,Ee);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case Y:return q=q.get(ae.key===null?Q:ae.key)||null,z(O,q,ae,Ee);case P:return q=q.get(ae.key===null?Q:ae.key)||null,X(O,q,ae,Ee);case $:return ae=yl(ae),J(q,O,Q,ae,Ee)}if(oe(ae)||H(ae))return q=q.get(Q)||null,W(O,q,ae,Ee,null);if(typeof ae.then=="function")return J(q,O,Q,qs(ae),Ee);if(ae.$$typeof===U)return J(q,O,Q,Us(O,ae),Ee);Bs(O,ae)}return null}function je(q,O,Q,ae){for(var Ee=null,at=null,Se=O,Be=O=0,Fe=null;Se!==null&&Be<Q.length;Be++){Se.index>Be?(Fe=Se,Se=null):Fe=Se.sibling;var lt=F(q,Se,Q[Be],ae);if(lt===null){Se===null&&(Se=Fe);break}e&&Se&&lt.alternate===null&&n(q,Se),O=c(lt,O,Be),at===null?Ee=lt:at.sibling=lt,at=lt,Se=Fe}if(Be===Q.length)return a(q,Se),Ve&&ca(q,Be),Ee;if(Se===null){for(;Be<Q.length;Be++)Se=le(q,Q[Be],ae),Se!==null&&(O=c(Se,O,Be),at===null?Ee=Se:at.sibling=Se,at=Se);return Ve&&ca(q,Be),Ee}for(Se=l(Se);Be<Q.length;Be++)Fe=J(Se,q,Be,Q[Be],ae),Fe!==null&&(e&&Fe.alternate!==null&&Se.delete(Fe.key===null?Be:Fe.key),O=c(Fe,O,Be),at===null?Ee=Fe:at.sibling=Fe,at=Fe);return e&&Se.forEach(function(Pa){return n(q,Pa)}),Ve&&ca(q,Be),Ee}function De(q,O,Q,ae){if(Q==null)throw Error(d(151));for(var Ee=null,at=null,Se=O,Be=O=0,Fe=null,lt=Q.next();Se!==null&&!lt.done;Be++,lt=Q.next()){Se.index>Be?(Fe=Se,Se=null):Fe=Se.sibling;var Pa=F(q,Se,lt.value,ae);if(Pa===null){Se===null&&(Se=Fe);break}e&&Se&&Pa.alternate===null&&n(q,Se),O=c(Pa,O,Be),at===null?Ee=Pa:at.sibling=Pa,at=Pa,Se=Fe}if(lt.done)return a(q,Se),Ve&&ca(q,Be),Ee;if(Se===null){for(;!lt.done;Be++,lt=Q.next())lt=le(q,lt.value,ae),lt!==null&&(O=c(lt,O,Be),at===null?Ee=lt:at.sibling=lt,at=lt);return Ve&&ca(q,Be),Ee}for(Se=l(Se);!lt.done;Be++,lt=Q.next())lt=J(Se,q,Be,lt.value,ae),lt!==null&&(e&&lt.alternate!==null&&Se.delete(lt.key===null?Be:lt.key),O=c(lt,O,Be),at===null?Ee=lt:at.sibling=lt,at=lt);return e&&Se.forEach(function(Xg){return n(q,Xg)}),Ve&&ca(q,Be),Ee}function pt(q,O,Q,ae){if(typeof Q=="object"&&Q!==null&&Q.type===Z&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Y:e:{for(var Ee=Q.key;O!==null;){if(O.key===Ee){if(Ee=Q.type,Ee===Z){if(O.tag===7){a(q,O.sibling),ae=r(O,Q.props.children),ae.return=q,q=ae;break e}}else if(O.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===$&&yl(Ee)===O.type){a(q,O.sibling),ae=r(O,Q.props),Ei(ae,Q),ae.return=q,q=ae;break e}a(q,O);break}else n(q,O);O=O.sibling}Q.type===Z?(ae=fl(Q.props.children,q.mode,ae,Q.key),ae.return=q,q=ae):(ae=Ds(Q.type,Q.key,Q.props,null,q.mode,ae),Ei(ae,Q),ae.return=q,q=ae)}return p(q);case P:e:{for(Ee=Q.key;O!==null;){if(O.key===Ee)if(O.tag===4&&O.stateNode.containerInfo===Q.containerInfo&&O.stateNode.implementation===Q.implementation){a(q,O.sibling),ae=r(O,Q.children||[]),ae.return=q,q=ae;break e}else{a(q,O);break}else n(q,O);O=O.sibling}ae=vr(Q,q.mode,ae),ae.return=q,q=ae}return p(q);case $:return Q=yl(Q),pt(q,O,Q,ae)}if(oe(Q))return je(q,O,Q,ae);if(H(Q)){if(Ee=H(Q),typeof Ee!="function")throw Error(d(150));return Q=Ee.call(Q),De(q,O,Q,ae)}if(typeof Q.then=="function")return pt(q,O,qs(Q),ae);if(Q.$$typeof===U)return pt(q,O,Us(q,Q),ae);Bs(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,O!==null&&O.tag===6?(a(q,O.sibling),ae=r(O,Q),ae.return=q,q=ae):(a(q,O),ae=yr(Q,q.mode,ae),ae.return=q,q=ae),p(q)):a(q,O)}return function(q,O,Q,ae){try{Ti=0;var Ee=pt(q,O,Q,ae);return Fl=null,Ee}catch(Se){if(Se===Kl||Se===Hs)throw Se;var at=wn(29,Se,null,q.mode);return at.lanes=ae,at.return=q,at}finally{}}}var jl=Iu(!0),ep=Iu(!1),Oa=!1;function Dr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ar(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ra(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(it&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=Ms(e),Hu(e,null,a),n}return Es(e,l,n,a),Ms(e)}function Mi(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,We(e,a)}}function Or(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?r=c=n:c=c.next=n}else r=c=n;a={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ur=!1;function Di(){if(Ur){var e=Zl;if(e!==null)throw e}}function Ai(e,n,a,l){Ur=!1;var r=e.updateQueue;Oa=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var z=b,X=z.next;z.next=null,p===null?c=X:p.next=X,p=z;var W=e.alternate;W!==null&&(W=W.updateQueue,b=W.lastBaseUpdate,b!==p&&(b===null?W.firstBaseUpdate=X:b.next=X,W.lastBaseUpdate=z))}if(c!==null){var le=r.baseState;p=0,W=X=z=null,b=c;do{var F=b.lane&-536870913,J=F!==b.lane;if(J?(Ke&F)===F:(l&F)===F){F!==0&&F===Xl&&(Ur=!0),W!==null&&(W=W.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var je=e,De=b;F=n;var pt=a;switch(De.tag){case 1:if(je=De.payload,typeof je=="function"){le=je.call(pt,le,F);break e}le=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=De.payload,F=typeof je=="function"?je.call(pt,le,F):je,F==null)break e;le=j({},le,F);break e;case 2:Oa=!0}}F=b.callback,F!==null&&(e.flags|=64,J&&(e.flags|=8192),J=r.callbacks,J===null?r.callbacks=[F]:J.push(F))}else J={lane:F,tag:b.tag,payload:b.payload,callback:b.callback,next:null},W===null?(X=W=J,z=le):W=W.next=J,p|=F;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;J=b,b=J.next,J.next=null,r.lastBaseUpdate=J,r.shared.pending=null}}while(!0);W===null&&(z=le),r.baseState=z,r.firstBaseUpdate=X,r.lastBaseUpdate=W,c===null&&(r.shared.lanes=0),Ga|=p,e.lanes=p,e.memoizedState=le}}function tp(e,n){if(typeof e!="function")throw Error(d(191,e));e.call(n)}function np(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)tp(a[e],n)}var Jl=_(null),Gs=_(0);function ap(e,n){e=va,ie(Gs,e),ie(Jl,n),va=e|n.baseLanes}function Rr(){ie(Gs,va),ie(Jl,Jl.current)}function Hr(){va=Gs.current,T(Jl),T(Gs)}var _n=_(null),qn=null;function Ha(e){var n=e.alternate;ie(Mt,Mt.current&1),ie(_n,e),qn===null&&(n===null||Jl.current!==null||n.memoizedState!==null)&&(qn=e)}function Lr(e){ie(Mt,Mt.current),ie(_n,e),qn===null&&(qn=e)}function lp(e){e.tag===22?(ie(Mt,Mt.current),ie(_n,e),qn===null&&(qn=e)):La()}function La(){ie(Mt,Mt.current),ie(_n,_n.current)}function Nn(e){T(_n),qn===e&&(qn=null),T(Mt)}var Mt=_(0);function Ys(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qc(a)||Xc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pa=0,qe=null,dt=null,Bt=null,$s=!1,Vl=!1,wl=!1,Qs=0,Oi=0,Pl=null,Ub=0;function Ct(){throw Error(d(321))}function qr(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function Br(e,n,a,l,r,c){return pa=c,qe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,k.H=e===null||e.memoizedState===null?Gp:tc,wl=!1,c=a(l,r),wl=!1,Vl&&(c=sp(n,a,l,r)),ip(e),c}function ip(e){k.H=Hi;var n=dt!==null&&dt.next!==null;if(pa=0,Bt=dt=qe=null,$s=!1,Oi=0,Pl=null,n)throw Error(d(300));e===null||Gt||(e=e.dependencies,e!==null&&Os(e)&&(Gt=!0))}function sp(e,n,a,l){qe=e;var r=0;do{if(Vl&&(Pl=null),Oi=0,Vl=!1,25<=r)throw Error(d(301));if(r+=1,Bt=dt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}k.H=Yp,c=n(a,l)}while(Vl);return c}function Rb(){var e=k.H,n=e.useState()[0];return n=typeof n.then=="function"?Ui(n):n,e=e.useState()[0],(dt!==null?dt.memoizedState:null)!==e&&(qe.flags|=1024),n}function Gr(){var e=Qs!==0;return Qs=0,e}function Yr(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function $r(e){if($s){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}$s=!1}pa=0,Bt=dt=qe=null,Vl=!1,Oi=Qs=0,Pl=null}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?qe.memoizedState=Bt=e:Bt=Bt.next=e,Bt}function Dt(){if(dt===null){var e=qe.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var n=Bt===null?qe.memoizedState:Bt.next;if(n!==null)Bt=n,dt=e;else{if(e===null)throw qe.alternate===null?Error(d(467)):Error(d(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Bt===null?qe.memoizedState=Bt=e:Bt=Bt.next=e}return Bt}function Xs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ui(e){var n=Oi;return Oi+=1,Pl===null&&(Pl=[]),e=Vu(Pl,e,n),n=qe,(Bt===null?n.memoizedState:Bt.next)===null&&(n=n.alternate,k.H=n===null||n.memoizedState===null?Gp:tc),e}function Zs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ui(e);if(e.$$typeof===U)return nn(e)}throw Error(d(438,String(e)))}function Qr(e){var n=null,a=qe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=qe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Xs(),qe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=he;return n.index++,a}function ma(e,n){return typeof n=="function"?n(e):n}function Ks(e){var n=Dt();return Xr(n,dt,e)}function Xr(e,n,a){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}n.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{n=r.next;var b=p=null,z=null,X=n,W=!1;do{var le=X.lane&-536870913;if(le!==X.lane?(Ke&le)===le:(pa&le)===le){var F=X.revertLane;if(F===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),le===Xl&&(W=!0);else if((pa&F)===F){X=X.next,F===Xl&&(W=!0);continue}else le={lane:0,revertLane:X.revertLane,gesture:null,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},z===null?(b=z=le,p=c):z=z.next=le,qe.lanes|=F,Ga|=F;le=X.action,wl&&a(c,le),c=X.hasEagerState?X.eagerState:a(c,le)}else F={lane:le,revertLane:X.revertLane,gesture:X.gesture,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},z===null?(b=z=F,p=c):z=z.next=F,qe.lanes|=le,Ga|=le;X=X.next}while(X!==null&&X!==n);if(z===null?p=c:z.next=b,!jn(c,e.memoizedState)&&(Gt=!0,W&&(a=Zl,a!==null)))throw a;e.memoizedState=c,e.baseState=p,e.baseQueue=z,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Zr(e){var n=Dt(),a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var l=a.dispatch,r=a.pending,c=n.memoizedState;if(r!==null){a.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);jn(c,n.memoizedState)||(Gt=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,l]}function op(e,n,a){var l=qe,r=Dt(),c=Ve;if(c){if(a===void 0)throw Error(d(407));a=a()}else a=n();var p=!jn((dt||r).memoizedState,a);if(p&&(r.memoizedState=a,Gt=!0),r=r.queue,Jr(dp.bind(null,l,r,e),[e]),r.getSnapshot!==n||p||Bt!==null&&Bt.memoizedState.tag&1){if(l.flags|=2048,Wl(9,{destroy:void 0},cp.bind(null,l,r,a,n),null),xt===null)throw Error(d(349));c||(pa&127)!==0||rp(l,n,a)}return a}function rp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=qe.updateQueue,n===null?(n=Xs(),qe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function cp(e,n,a,l){n.value=a,n.getSnapshot=l,up(n)&&pp(e)}function dp(e,n,a){return a(function(){up(n)&&pp(e)})}function up(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function pp(e){var n=ml(e,2);n!==null&&yn(n,e,2)}function Kr(e){var n=un();if(typeof e=="function"){var a=e;if(e=a(),wl){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},n}function mp(e,n,a,l){return e.baseState=a,Xr(e,dt,typeof l=="function"?l:ma)}function Hb(e,n,a,l,r){if(Vs(e))throw Error(d(485));if(e=n.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};k.T!==null?a(!0):c.isTransition=!1,l(c),a=n.pending,a===null?(c.next=n.pending=c,fp(n,c)):(c.next=a.next,n.pending=a.next=c)}}function fp(e,n){var a=n.action,l=n.payload,r=e.state;if(n.isTransition){var c=k.T,p={};k.T=p;try{var b=a(r,l),z=k.S;z!==null&&z(p,b),hp(e,n,b)}catch(X){Fr(e,n,X)}finally{c!==null&&p.types!==null&&(c.types=p.types),k.T=c}}else try{c=a(r,l),hp(e,n,c)}catch(X){Fr(e,n,X)}}function hp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){xp(e,n,l)},function(l){return Fr(e,n,l)}):xp(e,n,a)}function xp(e,n,a){n.status="fulfilled",n.value=a,bp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,fp(e,a)))}function Fr(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,bp(n),n=n.next;while(n!==l)}e.action=null}function bp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function gp(e,n){return n}function yp(e,n){if(Ve){var a=xt.formState;if(a!==null){e:{var l=qe;if(Ve){if(yt){t:{for(var r=yt,c=Ln;r.nodeType!==8;){if(!c){r=null;break t}if(r=Bn(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){yt=Bn(r.nextSibling),l=r.data==="F!";break e}}Da(l)}l=!1}l&&(n=a[0])}}return a=un(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gp,lastRenderedState:n},a.queue=l,a=Lp.bind(null,qe,l),l.dispatch=a,l=Kr(!1),c=ec.bind(null,qe,!1,l.queue),l=un(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,a=Hb.bind(null,qe,r,c,a),r.dispatch=a,l.memoizedState=e,[n,a,!1]}function vp(e){var n=Dt();return jp(n,dt,e)}function jp(e,n,a){if(n=Xr(e,n,gp)[0],e=Ks(ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ui(n)}catch(p){throw p===Kl?Hs:p}else l=n;n=Dt();var r=n.queue,c=r.dispatch;return a!==n.memoizedState&&(qe.flags|=2048,Wl(9,{destroy:void 0},Lb.bind(null,r,a),null)),[l,c,e]}function Lb(e,n){e.action=n}function wp(e){var n=Dt(),a=dt;if(a!==null)return jp(n,a,e);Dt(),n=n.memoizedState,a=Dt();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function Wl(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=qe.updateQueue,n===null&&(n=Xs(),qe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function _p(){return Dt().memoizedState}function Fs(e,n,a,l){var r=un();qe.flags|=e,r.memoizedState=Wl(1|n,{destroy:void 0},a,l===void 0?null:l)}function Js(e,n,a,l){var r=Dt();l=l===void 0?null:l;var c=r.memoizedState.inst;dt!==null&&l!==null&&qr(l,dt.memoizedState.deps)?r.memoizedState=Wl(n,c,a,l):(qe.flags|=e,r.memoizedState=Wl(1|n,c,a,l))}function Np(e,n){Fs(8390656,8,e,n)}function Jr(e,n){Js(2048,8,e,n)}function qb(e){qe.flags|=4;var n=qe.updateQueue;if(n===null)n=Xs(),qe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Sp(e){var n=Dt().memoizedState;return qb({ref:n,nextImpl:e}),function(){if((it&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}function kp(e,n){return Js(4,2,e,n)}function Cp(e,n){return Js(4,4,e,n)}function zp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tp(e,n,a){a=a!=null?a.concat([e]):null,Js(4,4,zp.bind(null,n,e),a)}function Vr(){}function Ep(e,n){var a=Dt();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&qr(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function Mp(e,n){var a=Dt();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&qr(n,l[1]))return l[0];if(l=e(),wl){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[l,n],l}function Pr(e,n,a){return a===void 0||(pa&1073741824)!==0&&(Ke&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Dm(),qe.lanes|=e,Ga|=e,a)}function Dp(e,n,a,l){return jn(a,n)?a:Jl.current!==null?(e=Pr(e,a,l),jn(e,n)||(Gt=!0),e):(pa&42)===0||(pa&1073741824)!==0&&(Ke&261930)===0?(Gt=!0,e.memoizedState=a):(e=Dm(),qe.lanes|=e,Ga|=e,n)}function Ap(e,n,a,l,r){var c=V.p;V.p=c!==0&&8>c?c:8;var p=k.T,b={};k.T=b,ec(e,!1,n,a);try{var z=r(),X=k.S;if(X!==null&&X(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var W=Ob(z,l);Ri(e,n,W,Cn(e))}else Ri(e,n,l,Cn(e))}catch(le){Ri(e,n,{then:function(){},status:"rejected",reason:le},Cn())}finally{V.p=c,p!==null&&b.types!==null&&(p.types=b.types),k.T=p}}function Bb(){}function Wr(e,n,a,l){if(e.tag!==5)throw Error(d(476));var r=Op(e).queue;Ap(e,r,n,C,a===null?Bb:function(){return Up(e),a(l)})}function Op(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:C,baseState:C,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:C},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Up(e){var n=Op(e);n.next===null&&(n=e.alternate.memoizedState),Ri(e,n.next.queue,{},Cn())}function Ir(){return nn(Ii)}function Rp(){return Dt().memoizedState}function Hp(){return Dt().memoizedState}function Gb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Cn();e=Ua(a);var l=Ra(n,e,a);l!==null&&(yn(l,n,a),Mi(l,n,a)),n={cache:zr()},e.payload=n;return}n=n.return}}function Yb(e,n,a){var l=Cn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vs(e)?qp(n,a):(a=br(e,n,a,l),a!==null&&(yn(a,e,l),Bp(a,n,l)))}function Lp(e,n,a){var l=Cn();Ri(e,n,a,l)}function Ri(e,n,a,l){var r={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vs(e))qp(n,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,b=c(p,a);if(r.hasEagerState=!0,r.eagerState=b,jn(b,p))return Es(e,n,r,0),xt===null&&Ts(),!1}catch{}finally{}if(a=br(e,n,r,l),a!==null)return yn(a,e,l),Bp(a,n,l),!0}return!1}function ec(e,n,a,l){if(l={lane:2,revertLane:Dc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Vs(e)){if(n)throw Error(d(479))}else n=br(e,a,l,2),n!==null&&yn(n,e,2)}function Vs(e){var n=e.alternate;return e===qe||n!==null&&n===qe}function qp(e,n){Vl=$s=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Bp(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,We(e,a)}}var Hi={readContext:nn,use:Zs,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct};Hi.useEffectEvent=Ct;var Gp={readContext:nn,use:Zs,useCallback:function(e,n){return un().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:Np,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Fs(4194308,4,zp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Fs(4194308,4,e,n)},useInsertionEffect:function(e,n){Fs(4,2,e,n)},useMemo:function(e,n){var a=un();n=n===void 0?null:n;var l=e();if(wl){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=un();if(a!==void 0){var r=a(n);if(wl){Pe(!0);try{a(n)}finally{Pe(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=Yb.bind(null,qe,e),[l.memoizedState,e]},useRef:function(e){var n=un();return e={current:e},n.memoizedState=e},useState:function(e){e=Kr(e);var n=e.queue,a=Lp.bind(null,qe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Vr,useDeferredValue:function(e,n){var a=un();return Pr(a,e,n)},useTransition:function(){var e=Kr(!1);return e=Ap.bind(null,qe,e.queue,!0,!1),un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=qe,r=un();if(Ve){if(a===void 0)throw Error(d(407));a=a()}else{if(a=n(),xt===null)throw Error(d(349));(Ke&127)!==0||rp(l,n,a)}r.memoizedState=a;var c={value:a,getSnapshot:n};return r.queue=c,Np(dp.bind(null,l,c,e),[e]),l.flags|=2048,Wl(9,{destroy:void 0},cp.bind(null,l,c,a,n),null),a},useId:function(){var e=un(),n=xt.identifierPrefix;if(Ve){var a=Vn,l=Jn;a=(l&~(1<<32-st(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Qs++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ub++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ir,useFormState:yp,useActionState:yp,useOptimistic:function(e){var n=un();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ec.bind(null,qe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Qr,useCacheRefresh:function(){return un().memoizedState=Gb.bind(null,qe)},useEffectEvent:function(e){var n=un(),a={impl:e};return n.memoizedState=a,function(){if((it&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},tc={readContext:nn,use:Zs,useCallback:Ep,useContext:nn,useEffect:Jr,useImperativeHandle:Tp,useInsertionEffect:kp,useLayoutEffect:Cp,useMemo:Mp,useReducer:Ks,useRef:_p,useState:function(){return Ks(ma)},useDebugValue:Vr,useDeferredValue:function(e,n){var a=Dt();return Dp(a,dt.memoizedState,e,n)},useTransition:function(){var e=Ks(ma)[0],n=Dt().memoizedState;return[typeof e=="boolean"?e:Ui(e),n]},useSyncExternalStore:op,useId:Rp,useHostTransitionStatus:Ir,useFormState:vp,useActionState:vp,useOptimistic:function(e,n){var a=Dt();return mp(a,dt,e,n)},useMemoCache:Qr,useCacheRefresh:Hp};tc.useEffectEvent=Sp;var Yp={readContext:nn,use:Zs,useCallback:Ep,useContext:nn,useEffect:Jr,useImperativeHandle:Tp,useInsertionEffect:kp,useLayoutEffect:Cp,useMemo:Mp,useReducer:Zr,useRef:_p,useState:function(){return Zr(ma)},useDebugValue:Vr,useDeferredValue:function(e,n){var a=Dt();return dt===null?Pr(a,e,n):Dp(a,dt.memoizedState,e,n)},useTransition:function(){var e=Zr(ma)[0],n=Dt().memoizedState;return[typeof e=="boolean"?e:Ui(e),n]},useSyncExternalStore:op,useId:Rp,useHostTransitionStatus:Ir,useFormState:wp,useActionState:wp,useOptimistic:function(e,n){var a=Dt();return dt!==null?mp(a,dt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qr,useCacheRefresh:Hp};Yp.useEffectEvent=Sp;function nc(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:j({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ac={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=Cn(),r=Ua(l);r.payload=n,a!=null&&(r.callback=a),n=Ra(e,r,l),n!==null&&(yn(n,e,l),Mi(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=Cn(),r=Ua(l);r.tag=1,r.payload=n,a!=null&&(r.callback=a),n=Ra(e,r,l),n!==null&&(yn(n,e,l),Mi(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Cn(),l=Ua(a);l.tag=2,n!=null&&(l.callback=n),n=Ra(e,l,a),n!==null&&(yn(n,e,a),Mi(n,e,a))}};function $p(e,n,a,l,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,p):n.prototype&&n.prototype.isPureReactComponent?!_i(a,l)||!_i(r,c):!0}function Qp(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&ac.enqueueReplaceState(n,n.state,null)}function _l(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=j({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function Xp(e){zs(e)}function Zp(e){console.error(e)}function Kp(e){zs(e)}function Ps(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Fp(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function lc(e,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Ps(e,n)},a}function Jp(e){return e=Ua(e),e.tag=3,e}function Vp(e,n,a,l){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){Fp(n,a,l)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Fp(n,a,l),typeof r!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function $b(e,n,a,l,r){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Ql(n,a,r,!0),a=_n.current,a!==null){switch(a.tag){case 31:case 13:return qn===null?co():a.alternate===null&&zt===0&&(zt=3),a.flags&=-257,a.flags|=65536,a.lanes=r,l===Ls?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Tc(e,l,r)),!1;case 22:return a.flags|=65536,l===Ls?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Tc(e,l,r)),!1}throw Error(d(435,a.tag))}return Tc(e,l,r),co(),!1}if(Ve)return n=_n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==_r&&(e=Error(d(422),{cause:l}),ki(Un(e,a)))):(l!==_r&&(n=Error(d(423),{cause:l}),ki(Un(n,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Un(l,a),r=lc(e.stateNode,l,r),Or(e,r),zt!==4&&(zt=2)),!1;var c=Error(d(520),{cause:l});if(c=Un(c,a),Xi===null?Xi=[c]:Xi.push(c),zt!==4&&(zt=2),n===null)return!0;l=Un(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=lc(a.stateNode,l,e),Or(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ya===null||!Ya.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=Jp(r),Vp(r,e,a,l),Or(a,r),!1}a=a.return}while(a!==null);return!1}var ic=Error(d(461)),Gt=!1;function an(e,n,a,l){n.child=e===null?ep(n,null,a,l):jl(n,e.child,a,l)}function Pp(e,n,a,l,r){a=a.render;var c=n.ref;if("ref"in l){var p={};for(var b in l)b!=="ref"&&(p[b]=l[b])}else p=l;return bl(n),l=Br(e,n,a,p,c,r),b=Gr(),e!==null&&!Gt?(Yr(e,n,r),fa(e,n,r)):(Ve&&b&&jr(n),n.flags|=1,an(e,n,l,r),n.child)}function Wp(e,n,a,l,r){if(e===null){var c=a.type;return typeof c=="function"&&!gr(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Ip(e,n,c,l,r)):(e=Ds(a.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!mc(e,r)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:_i,a(p,l)&&e.ref===n.ref)return fa(e,n,r)}return n.flags|=1,e=ra(c,l),e.ref=n.ref,e.return=n,n.child=e}function Ip(e,n,a,l,r){if(e!==null){var c=e.memoizedProps;if(_i(c,l)&&e.ref===n.ref)if(Gt=!1,n.pendingProps=l=c,mc(e,r))(e.flags&131072)!==0&&(Gt=!0);else return n.lanes=e.lanes,fa(e,n,r)}return sc(e,n,a,l,r)}function em(e,n,a,l){var r=l.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~c}else l=0,n.child=null;return tm(e,n,c,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rs(n,c!==null?c.cachePool:null),c!==null?ap(n,c):Rr(),lp(n);else return l=n.lanes=536870912,tm(e,n,c!==null?c.baseLanes|a:a,a,l)}else c!==null?(Rs(n,c.cachePool),ap(n,c),La(),n.memoizedState=null):(e!==null&&Rs(n,null),Rr(),La());return an(e,n,r,a),n.child}function Li(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function tm(e,n,a,l,r){var c=Er();return c=c===null?null:{parent:qt._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Rs(n,null),Rr(),lp(n),e!==null&&Ql(e,n,l,!0),n.childLanes=r,null}function Ws(e,n){return n=eo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function nm(e,n,a){return jl(n,e.child,null,a),e=Ws(n,n.pendingProps),e.flags|=2,Nn(n),n.memoizedState=null,e}function Qb(e,n,a){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ve){if(l.mode==="hidden")return e=Ws(n,l),n.lanes=536870912,Li(null,e);if(Lr(n),(e=yt)?(e=hf(e,Ln),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Jn,overflow:Vn}:null,retryLane:536870912,hydrationErrors:null},a=qu(e),a.return=n,n.child=a,tn=n,yt=null)):e=null,e===null)throw Da(n);return n.lanes=536870912,null}return Ws(n,l)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Lr(n),r)if(n.flags&256)n.flags&=-257,n=nm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(d(558));else if(Gt||Ql(e,n,a,!1),r=(a&e.childLanes)!==0,Gt||r){if(l=xt,l!==null&&(p=pn(l,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,ml(e,p),yn(l,e,p),ic;co(),n=nm(e,n,a)}else e=c.treeContext,yt=Bn(p.nextSibling),tn=n,Ve=!0,Ma=null,Ln=!1,e!==null&&Yu(n,e),n=Ws(n,l),n.flags|=4096;return n}return e=ra(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Is(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sc(e,n,a,l,r){return bl(n),a=Br(e,n,a,l,void 0,r),l=Gr(),e!==null&&!Gt?(Yr(e,n,r),fa(e,n,r)):(Ve&&l&&jr(n),n.flags|=1,an(e,n,a,r),n.child)}function am(e,n,a,l,r,c){return bl(n),n.updateQueue=null,a=sp(n,l,a,r),ip(e),l=Gr(),e!==null&&!Gt?(Yr(e,n,c),fa(e,n,c)):(Ve&&l&&jr(n),n.flags|=1,an(e,n,a,c),n.child)}function lm(e,n,a,l,r){if(bl(n),n.stateNode===null){var c=Bl,p=a.contextType;typeof p=="object"&&p!==null&&(c=nn(p)),c=new a(l,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ac,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=l,c.state=n.memoizedState,c.refs={},Dr(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?nn(p):Bl,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(nc(n,a,p,l),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&ac.enqueueReplaceState(c,c.state,null),Ai(n,l,c,r),Di(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){c=n.stateNode;var b=n.memoizedProps,z=_l(a,b);c.props=z;var X=c.context,W=a.contextType;p=Bl,typeof W=="object"&&W!==null&&(p=nn(W));var le=a.getDerivedStateFromProps;W=typeof le=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,W||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||X!==p)&&Qp(n,c,l,p),Oa=!1;var F=n.memoizedState;c.state=F,Ai(n,l,c,r),Di(),X=n.memoizedState,b||F!==X||Oa?(typeof le=="function"&&(nc(n,a,le,l),X=n.memoizedState),(z=Oa||$p(n,a,z,l,F,X,p))?(W||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=X),c.props=l,c.state=X,c.context=p,l=z):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{c=n.stateNode,Ar(e,n),p=n.memoizedProps,W=_l(a,p),c.props=W,le=n.pendingProps,F=c.context,X=a.contextType,z=Bl,typeof X=="object"&&X!==null&&(z=nn(X)),b=a.getDerivedStateFromProps,(X=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==le||F!==z)&&Qp(n,c,l,z),Oa=!1,F=n.memoizedState,c.state=F,Ai(n,l,c,r),Di();var J=n.memoizedState;p!==le||F!==J||Oa||e!==null&&e.dependencies!==null&&Os(e.dependencies)?(typeof b=="function"&&(nc(n,a,b,l),J=n.memoizedState),(W=Oa||$p(n,a,W,l,F,J,z)||e!==null&&e.dependencies!==null&&Os(e.dependencies))?(X||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,J,z),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,J,z)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=J),c.props=l,c.state=J,c.context=z,l=W):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(n.flags|=1024),l=!1)}return c=l,Is(e,n),l=(n.flags&128)!==0,c||l?(c=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&l?(n.child=jl(n,e.child,null,r),n.child=jl(n,null,a,r)):an(e,n,a,r),n.memoizedState=c.state,e=n.child):e=fa(e,n,r),e}function im(e,n,a,l){return hl(),n.flags|=256,an(e,n,a,l),n.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:Fu()}}function cc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=kn),e}function sm(e,n,a){var l=n.pendingProps,r=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Mt.current&2)!==0),p&&(r=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ve){if(r?Ha(n):La(),(e=yt)?(e=hf(e,Ln),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Jn,overflow:Vn}:null,retryLane:536870912,hydrationErrors:null},a=qu(e),a.return=n,n.child=a,tn=n,yt=null)):e=null,e===null)throw Da(n);return Xc(e)?n.lanes=32:n.lanes=536870912,null}var b=l.children;return l=l.fallback,r?(La(),r=n.mode,b=eo({mode:"hidden",children:b},r),l=fl(l,r,a,null),b.return=n,l.return=n,b.sibling=l,n.child=b,l=n.child,l.memoizedState=rc(a),l.childLanes=cc(e,p,a),n.memoizedState=oc,Li(null,l)):(Ha(n),dc(n,b))}var z=e.memoizedState;if(z!==null&&(b=z.dehydrated,b!==null)){if(c)n.flags&256?(Ha(n),n.flags&=-257,n=uc(e,n,a)):n.memoizedState!==null?(La(),n.child=e.child,n.flags|=128,n=null):(La(),b=l.fallback,r=n.mode,l=eo({mode:"visible",children:l.children},r),b=fl(b,r,a,null),b.flags|=2,l.return=n,b.return=n,l.sibling=b,n.child=l,jl(n,e.child,null,a),l=n.child,l.memoizedState=rc(a),l.childLanes=cc(e,p,a),n.memoizedState=oc,n=Li(null,l));else if(Ha(n),Xc(b)){if(p=b.nextSibling&&b.nextSibling.dataset,p)var X=p.dgst;p=X,l=Error(d(419)),l.stack="",l.digest=p,ki({value:l,source:null,stack:null}),n=uc(e,n,a)}else if(Gt||Ql(e,n,a,!1),p=(a&e.childLanes)!==0,Gt||p){if(p=xt,p!==null&&(l=pn(p,a),l!==0&&l!==z.retryLane))throw z.retryLane=l,ml(e,l),yn(p,e,l),ic;Qc(b)||co(),n=uc(e,n,a)}else Qc(b)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,yt=Bn(b.nextSibling),tn=n,Ve=!0,Ma=null,Ln=!1,e!==null&&Yu(n,e),n=dc(n,l.children),n.flags|=4096);return n}return r?(La(),b=l.fallback,r=n.mode,z=e.child,X=z.sibling,l=ra(z,{mode:"hidden",children:l.children}),l.subtreeFlags=z.subtreeFlags&65011712,X!==null?b=ra(X,b):(b=fl(b,r,a,null),b.flags|=2),b.return=n,l.return=n,l.sibling=b,n.child=l,Li(null,l),l=n.child,b=e.child.memoizedState,b===null?b=rc(a):(r=b.cachePool,r!==null?(z=qt._currentValue,r=r.parent!==z?{parent:z,pool:z}:r):r=Fu(),b={baseLanes:b.baseLanes|a,cachePool:r}),l.memoizedState=b,l.childLanes=cc(e,p,a),n.memoizedState=oc,Li(e.child,l)):(Ha(n),a=e.child,e=a.sibling,a=ra(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function dc(e,n){return n=eo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function eo(e,n){return e=wn(22,e,null,n),e.lanes=0,e}function uc(e,n,a){return jl(n,e.child,null,a),e=dc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function om(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),kr(e.return,n,a)}function pc(e,n,a,l,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:r,treeForkCount:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=r,p.treeForkCount=c)}function rm(e,n,a){var l=n.pendingProps,r=l.revealOrder,c=l.tail;l=l.children;var p=Mt.current,b=(p&2)!==0;if(b?(p=p&1|2,n.flags|=128):p&=1,ie(Mt,p),an(e,n,l,a),l=Ve?Si:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&om(e,a,n);else if(e.tag===19)om(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=n.child,r=null;a!==null;)e=a.alternate,e!==null&&Ys(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=n.child,n.child=null):(r=a.sibling,a.sibling=null),pc(n,!1,r,a,c,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Ys(e)===null){n.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}pc(n,!0,a,null,c,l);break;case"together":pc(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function fa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ql(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(d(153));if(n.child!==null){for(e=n.child,a=ra(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ra(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function mc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Os(e)))}function Xb(e,n,a){switch(n.tag){case 3:Je(n,n.stateNode.containerInfo),Aa(n,qt,e.memoizedState.cache),hl();break;case 27:case 5:et(n);break;case 4:Je(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lr(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?sm(e,n,a):(Ha(n),e=fa(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var r=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Ql(e,n,a,!1),l=(a&n.childLanes)!==0),r){if(l)return rm(e,n,a);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ie(Mt,Mt.current),l)break;return null;case 22:return n.lanes=0,em(e,n,a,n.pendingProps);case 24:Aa(n,qt,e.memoizedState.cache)}return fa(e,n,a)}function cm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Gt=!0;else{if(!mc(e,a)&&(n.flags&128)===0)return Gt=!1,Xb(e,n,a);Gt=(e.flags&131072)!==0}else Gt=!1,Ve&&(n.flags&1048576)!==0&&Gu(n,Si,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=yl(n.elementType),n.type=e,typeof e=="function")gr(e)?(l=_l(e,l),n.tag=1,n=lm(null,n,e,l,a)):(n.tag=0,n=sc(null,n,e,l,a));else{if(e!=null){var r=e.$$typeof;if(r===I){n.tag=11,n=Pp(null,n,e,l,a);break e}else if(r===A){n.tag=14,n=Wp(null,n,e,l,a);break e}}throw n=G(e)||e,Error(d(306,n,""))}}return n;case 0:return sc(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,r=_l(l,n.pendingProps),lm(e,n,l,r,a);case 3:e:{if(Je(n,n.stateNode.containerInfo),e===null)throw Error(d(387));l=n.pendingProps;var c=n.memoizedState;r=c.element,Ar(e,n),Ai(n,l,null,a);var p=n.memoizedState;if(l=p.cache,Aa(n,qt,l),l!==c.cache&&Cr(n,[qt],a,!0),Di(),l=p.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=im(e,n,l,a);break e}else if(l!==r){r=Un(Error(d(424)),n),ki(r),n=im(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(yt=Bn(e.firstChild),tn=n,Ve=!0,Ma=null,Ln=!0,a=ep(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(hl(),l===r){n=fa(e,n,a);break e}an(e,n,l,a)}n=n.child}return n;case 26:return Is(e,n),e===null?(a=jf(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ve||(a=n.type,e=n.pendingProps,l=bo(ze.current).createElement(a),l[Zt]=n,l[St]=e,ln(l,a,e),Vt(l),n.stateNode=l):n.memoizedState=jf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return et(n),e===null&&Ve&&(l=n.stateNode=gf(n.type,n.pendingProps,ze.current),tn=n,Ln=!0,r=yt,Za(n.type)?(Zc=r,yt=Bn(l.firstChild)):yt=r),an(e,n,n.pendingProps.children,a),Is(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ve&&((r=l=yt)&&(l=jg(l,n.type,n.pendingProps,Ln),l!==null?(n.stateNode=l,tn=n,yt=Bn(l.firstChild),Ln=!1,r=!0):r=!1),r||Da(n)),et(n),r=n.type,c=n.pendingProps,p=e!==null?e.memoizedProps:null,l=c.children,Gc(r,c)?l=null:p!==null&&Gc(r,p)&&(n.flags|=32),n.memoizedState!==null&&(r=Br(e,n,Rb,null,null,a),Ii._currentValue=r),Is(e,n),an(e,n,l,a),n.child;case 6:return e===null&&Ve&&((e=a=yt)&&(a=wg(a,n.pendingProps,Ln),a!==null?(n.stateNode=a,tn=n,yt=null,e=!0):e=!1),e||Da(n)),null;case 13:return sm(e,n,a);case 4:return Je(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=jl(n,null,l,a):an(e,n,l,a),n.child;case 11:return Pp(e,n,n.type,n.pendingProps,a);case 7:return an(e,n,n.pendingProps,a),n.child;case 8:return an(e,n,n.pendingProps.children,a),n.child;case 12:return an(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Aa(n,n.type,l.value),an(e,n,l.children,a),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,bl(n),r=nn(r),l=l(r),n.flags|=1,an(e,n,l,a),n.child;case 14:return Wp(e,n,n.type,n.pendingProps,a);case 15:return Ip(e,n,n.type,n.pendingProps,a);case 19:return rm(e,n,a);case 31:return Qb(e,n,a);case 22:return em(e,n,a,n.pendingProps);case 24:return bl(n),l=nn(qt),e===null?(r=Er(),r===null&&(r=xt,c=zr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),n.memoizedState={parent:l,cache:r},Dr(n),Aa(n,qt,r)):((e.lanes&a)!==0&&(Ar(e,n),Ai(n,null,null,a),Di()),r=e.memoizedState,c=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),Aa(n,qt,l)):(l=c.cache,Aa(n,qt,l),l!==r.cache&&Cr(n,[qt],a,!0))),an(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function ha(e){e.flags|=4}function fc(e,n,a,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Rm())e.flags|=8192;else throw vl=Ls,Mr}else e.flags&=-16777217}function dm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kf(n))if(Rm())e.flags|=8192;else throw vl=Ls,Mr}function to(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ce():536870912,e.lanes|=n,ni|=n)}function qi(e,n){if(!Ve)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function vt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function Zb(e,n,a){var l=n.pendingProps;switch(wr(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(n),null;case 1:return vt(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),ua(qt),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($l(n)?ha(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Nr())),vt(n),null;case 26:var r=n.type,c=n.memoizedState;return e===null?(ha(n),c!==null?(vt(n),dm(n,c)):(vt(n),fc(n,r,null,l,a))):c?c!==e.memoizedState?(ha(n),vt(n),dm(n,c)):(vt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&ha(n),vt(n),fc(n,r,e,l,a)),null;case 27:if(Et(n),a=ze.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ha(n);else{if(!l){if(n.stateNode===null)throw Error(d(166));return vt(n),null}e=pe.current,$l(n)?$u(n):(e=gf(r,l,a),n.stateNode=e,ha(n))}return vt(n),null;case 5:if(Et(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ha(n);else{if(!l){if(n.stateNode===null)throw Error(d(166));return vt(n),null}if(c=pe.current,$l(n))$u(n);else{var p=bo(ze.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?p.createElement("select",{is:l.is}):p.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?p.createElement(r,{is:l.is}):p.createElement(r)}}c[Zt]=n,c[St]=l;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=c;e:switch(ln(c,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ha(n)}}return vt(n),fc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&ha(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(d(166));if(e=ze.current,$l(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,r=tn,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[Zt]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||of(e.nodeValue,a)),e||Da(n,!0)}else e=bo(e).createTextNode(l),e[Zt]=n,n.stateNode=e}return vt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(l=$l(n),a!==null){if(e===null){if(!l)throw Error(d(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Zt]=n}else hl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vt(n),e=!1}else a=Nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Nn(n),n):(Nn(n),null);if((n.flags&128)!==0)throw Error(d(558))}return vt(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=$l(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[Zt]=n}else hl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vt(n),r=!1}else r=Nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(Nn(n),n):(Nn(n),null)}return Nn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),to(n,n.updateQueue),vt(n),null);case 4:return Re(),e===null&&Rc(n.stateNode.containerInfo),vt(n),null;case 10:return ua(n.type),vt(n),null;case 19:if(T(Mt),l=n.memoizedState,l===null)return vt(n),null;if(r=(n.flags&128)!==0,c=l.rendering,c===null)if(r)qi(l,!1);else{if(zt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=Ys(e),c!==null){for(n.flags|=128,qi(l,!1),e=c.updateQueue,n.updateQueue=e,to(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Lu(a,e),a=a.sibling;return ie(Mt,Mt.current&1|2),Ve&&ca(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&ye()>so&&(n.flags|=128,r=!0,qi(l,!1),n.lanes=4194304)}else{if(!r)if(e=Ys(c),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,to(n,e),qi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Ve)return vt(n),null}else 2*ye()-l.renderingStartTime>so&&a!==536870912&&(n.flags|=128,r=!0,qi(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(e=l.last,e!==null?e.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ye(),e.sibling=null,a=Mt.current,ie(Mt,r?a&1|2:a&1),Ve&&ca(n,l.treeForkCount),e):(vt(n),null);case 22:case 23:return Nn(n),Hr(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(vt(n),n.subtreeFlags&6&&(n.flags|=8192)):vt(n),a=n.updateQueue,a!==null&&to(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&T(gl),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ua(qt),vt(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function Kb(e,n){switch(wr(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ua(qt),Re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Et(n),null;case 31:if(n.memoizedState!==null){if(Nn(n),n.alternate===null)throw Error(d(340));hl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Nn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(d(340));hl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return T(Mt),null;case 4:return Re(),null;case 10:return ua(n.type),null;case 22:case 23:return Nn(n),Hr(),e!==null&&T(gl),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ua(qt),null;case 25:return null;default:return null}}function um(e,n){switch(wr(n),n.tag){case 3:ua(qt),Re();break;case 26:case 27:case 5:Et(n);break;case 4:Re();break;case 31:n.memoizedState!==null&&Nn(n);break;case 13:Nn(n);break;case 19:T(Mt);break;case 10:ua(n.type);break;case 22:case 23:Nn(n),Hr(),e!==null&&T(gl);break;case 24:ua(qt)}}function Bi(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){l=void 0;var c=a.create,p=a.inst;l=c(),p.destroy=l}a=a.next}while(a!==r)}}catch(b){rt(n,n.return,b)}}function qa(e,n,a){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var p=l.inst,b=p.destroy;if(b!==void 0){p.destroy=void 0,r=n;var z=a,X=b;try{X()}catch(W){rt(r,z,W)}}}l=l.next}while(l!==c)}}catch(W){rt(n,n.return,W)}}function pm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{np(n,a)}catch(l){rt(e,e.return,l)}}}function mm(e,n,a){a.props=_l(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){rt(e,n,l)}}function Gi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(r){rt(e,n,r)}}function Pn(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(r){rt(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){rt(e,n,r)}else a.current=null}function fm(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(r){rt(e,e.return,r)}}function hc(e,n,a){try{var l=e.stateNode;hg(l,e.type,a,n),l[St]=n}catch(r){rt(e,e.return,r)}}function hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bc(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=sa));else if(l!==4&&(l===27&&Za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(bc(e,n,a),e=e.sibling;e!==null;)bc(e,n,a),e=e.sibling}function no(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(no(e,n,a),e=e.sibling;e!==null;)no(e,n,a),e=e.sibling}function xm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);ln(n,l,a),n[Zt]=e,n[St]=a}catch(c){rt(e,e.return,c)}}var xa=!1,Yt=!1,gc=!1,bm=typeof WeakSet=="function"?WeakSet:Set,Pt=null;function Fb(e,n){if(e=e.containerInfo,qc=No,e=Tu(e),ur(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var p=0,b=-1,z=-1,X=0,W=0,le=e,F=null;t:for(;;){for(var J;le!==a||r!==0&&le.nodeType!==3||(b=p+r),le!==c||l!==0&&le.nodeType!==3||(z=p+l),le.nodeType===3&&(p+=le.nodeValue.length),(J=le.firstChild)!==null;)F=le,le=J;for(;;){if(le===e)break t;if(F===a&&++X===r&&(b=p),F===c&&++W===l&&(z=p),(J=le.nextSibling)!==null)break;le=F,F=le.parentNode}le=J}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:e,selectionRange:a},No=!1,Pt=n;Pt!==null;)if(n=Pt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Pt=e;else for(;Pt!==null;){switch(n=Pt,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,r=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var je=_l(a.type,r);e=l.getSnapshotBeforeUpdate(je,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(De){rt(a,a.return,De)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)$c(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=n.sibling,e!==null){e.return=n.return,Pt=e;break}Pt=n.return}}function gm(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),l&4&&Bi(5,a);break;case 1:if(ga(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){rt(a,a.return,p)}else{var r=_l(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){rt(a,a.return,p)}}l&64&&pm(a),l&512&&Gi(a,a.return);break;case 3:if(ga(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{np(e,n)}catch(p){rt(a,a.return,p)}}break;case 27:n===null&&l&4&&xm(a);case 26:case 5:ga(e,a),n===null&&l&4&&fm(a),l&512&&Gi(a,a.return);break;case 12:ga(e,a);break;case 31:ga(e,a),l&4&&jm(e,a);break;case 13:ga(e,a),l&4&&wm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ag.bind(null,a),_g(e,a))));break;case 22:if(l=a.memoizedState!==null||xa,!l){n=n!==null&&n.memoizedState!==null||Yt,r=xa;var c=Yt;xa=l,(Yt=n)&&!c?ya(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),xa=r,Yt=c}break;case 30:break;default:ga(e,a)}}function ym(e){var n=e.alternate;n!==null&&(e.alternate=null,ym(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&mn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var wt=null,hn=!1;function ba(e,n,a){for(a=a.child;a!==null;)vm(e,n,a),a=a.sibling}function vm(e,n,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Ue,a)}catch{}switch(a.tag){case 26:Yt||Pn(a,n),ba(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Yt||Pn(a,n);var l=wt,r=hn;Za(a.type)&&(wt=a.stateNode,hn=!1),ba(e,n,a),Vi(a.stateNode),wt=l,hn=r;break;case 5:Yt||Pn(a,n);case 6:if(l=wt,r=hn,wt=null,ba(e,n,a),wt=l,hn=r,wt!==null)if(hn)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(a.stateNode)}catch(c){rt(a,n,c)}else try{wt.removeChild(a.stateNode)}catch(c){rt(a,n,c)}break;case 18:wt!==null&&(hn?(e=wt,mf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),di(e)):mf(wt,a.stateNode));break;case 4:l=wt,r=hn,wt=a.stateNode.containerInfo,hn=!0,ba(e,n,a),wt=l,hn=r;break;case 0:case 11:case 14:case 15:qa(2,a,n),Yt||qa(4,a,n),ba(e,n,a);break;case 1:Yt||(Pn(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&mm(a,n,l)),ba(e,n,a);break;case 21:ba(e,n,a);break;case 22:Yt=(l=Yt)||a.memoizedState!==null,ba(e,n,a),Yt=l;break;default:ba(e,n,a)}}function jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{di(e)}catch(a){rt(n,n.return,a)}}}function wm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{di(e)}catch(a){rt(n,n.return,a)}}function Jb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new bm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new bm),n;default:throw Error(d(435,e.tag))}}function ao(e,n){var a=Jb(e);n.forEach(function(l){if(!a.has(l)){a.add(l);var r=lg.bind(null,e,l);l.then(r,r)}})}function xn(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var r=a[l],c=e,p=n,b=p;e:for(;b!==null;){switch(b.tag){case 27:if(Za(b.type)){wt=b.stateNode,hn=!1;break e}break;case 5:wt=b.stateNode,hn=!1;break e;case 3:case 4:wt=b.stateNode.containerInfo,hn=!0;break e}b=b.return}if(wt===null)throw Error(d(160));vm(c,p,r),wt=null,hn=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)_m(n,e),n=n.sibling}var Qn=null;function _m(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xn(n,e),bn(e),l&4&&(qa(3,e,e.return),Bi(3,e),qa(5,e,e.return));break;case 1:xn(n,e),bn(e),l&512&&(Yt||a===null||Pn(a,a.return)),l&64&&xa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var r=Qn;if(xn(n,e),bn(e),l&512&&(Yt||a===null||Pn(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[Ie]||c[Zt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),ln(c,l,a),c[Zt]=e,Vt(c),l=c;break e;case"link":var p=Nf("link","href",r).get(l+(a.href||""));if(p){for(var b=0;b<p.length;b++)if(c=p[b],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(b,1);break t}}c=r.createElement(l),ln(c,l,a),r.head.appendChild(c);break;case"meta":if(p=Nf("meta","content",r).get(l+(a.content||""))){for(b=0;b<p.length;b++)if(c=p[b],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(b,1);break t}}c=r.createElement(l),ln(c,l,a),r.head.appendChild(c);break;default:throw Error(d(468,l))}c[Zt]=e,Vt(c),l=c}e.stateNode=l}else Sf(r,e.type,e.stateNode);else e.stateNode=_f(r,l,e.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?Sf(r,e.type,e.stateNode):_f(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&hc(e,e.memoizedProps,a.memoizedProps)}break;case 27:xn(n,e),bn(e),l&512&&(Yt||a===null||Pn(a,a.return)),a!==null&&l&4&&hc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(xn(n,e),bn(e),l&512&&(Yt||a===null||Pn(a,a.return)),e.flags&32){r=e.stateNode;try{Al(r,"")}catch(je){rt(e,e.return,je)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,hc(e,r,a!==null?a.memoizedProps:r)),l&1024&&(gc=!0);break;case 6:if(xn(n,e),bn(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(je){rt(e,e.return,je)}}break;case 3:if(vo=null,r=Qn,Qn=go(n.containerInfo),xn(n,e),Qn=r,bn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{di(n.containerInfo)}catch(je){rt(e,e.return,je)}gc&&(gc=!1,Nm(e));break;case 4:l=Qn,Qn=go(e.stateNode.containerInfo),xn(n,e),bn(e),Qn=l;break;case 12:xn(n,e),bn(e);break;case 31:xn(n,e),bn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ao(e,l)));break;case 13:xn(n,e),bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(io=ye()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ao(e,l)));break;case 22:r=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,X=xa,W=Yt;if(xa=X||r,Yt=W||z,xn(n,e),Yt=W,xa=X,bn(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(a===null||z||xa||Yt||Nl(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(c=z.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{b=z.stateNode;var le=z.memoizedProps.style,F=le!=null&&le.hasOwnProperty("display")?le.display:null;b.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(je){rt(z,z.return,je)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=r?"":z.memoizedProps}catch(je){rt(z,z.return,je)}}}else if(n.tag===18){if(a===null){z=n;try{var J=z.stateNode;r?ff(J,!0):ff(z.stateNode,!1)}catch(je){rt(z,z.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,ao(e,a))));break;case 19:xn(n,e),bn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ao(e,l)));break;case 30:break;case 21:break;default:xn(n,e),bn(e)}}function bn(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(hm(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var r=a.stateNode,c=xc(e);no(e,c,r);break;case 5:var p=a.stateNode;a.flags&32&&(Al(p,""),a.flags&=-33);var b=xc(e);no(e,b,p);break;case 3:case 4:var z=a.stateNode.containerInfo,X=xc(e);bc(e,X,z);break;default:throw Error(d(161))}}catch(W){rt(e,e.return,W)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Nm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gm(e,n.alternate,n),n=n.sibling}function Nl(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Nl(n);break;case 1:Pn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mm(n,n.return,a),Nl(n);break;case 27:Vi(n.stateNode);case 26:case 5:Pn(n,n.return),Nl(n);break;case 22:n.memoizedState===null&&Nl(n);break;case 30:Nl(n);break;default:Nl(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,c=n,p=c.flags;switch(c.tag){case 0:case 11:case 15:ya(r,c,a),Bi(4,c);break;case 1:if(ya(r,c,a),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(X){rt(l,l.return,X)}if(l=c,r=l.updateQueue,r!==null){var b=l.stateNode;try{var z=r.shared.hiddenCallbacks;if(z!==null)for(r.shared.hiddenCallbacks=null,r=0;r<z.length;r++)tp(z[r],b)}catch(X){rt(l,l.return,X)}}a&&p&64&&pm(c),Gi(c,c.return);break;case 27:xm(c);case 26:case 5:ya(r,c,a),a&&l===null&&p&4&&fm(c),Gi(c,c.return);break;case 12:ya(r,c,a);break;case 31:ya(r,c,a),a&&p&4&&jm(r,c);break;case 13:ya(r,c,a),a&&p&4&&wm(r,c);break;case 22:c.memoizedState===null&&ya(r,c,a),Gi(c,c.return);break;case 30:break;default:ya(r,c,a)}n=n.sibling}}function yc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ci(a))}function vc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ci(e))}function Xn(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Sm(e,n,a,l),n=n.sibling}function Sm(e,n,a,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Xn(e,n,a,l),r&2048&&Bi(9,n);break;case 1:Xn(e,n,a,l);break;case 3:Xn(e,n,a,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ci(e)));break;case 12:if(r&2048){Xn(e,n,a,l),e=n.stateNode;try{var c=n.memoizedProps,p=c.id,b=c.onPostCommit;typeof b=="function"&&b(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){rt(n,n.return,z)}}else Xn(e,n,a,l);break;case 31:Xn(e,n,a,l);break;case 13:Xn(e,n,a,l);break;case 23:break;case 22:c=n.stateNode,p=n.alternate,n.memoizedState!==null?c._visibility&2?Xn(e,n,a,l):Yi(e,n):c._visibility&2?Xn(e,n,a,l):(c._visibility|=2,Il(e,n,a,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&yc(p,n);break;case 24:Xn(e,n,a,l),r&2048&&vc(n.alternate,n);break;default:Xn(e,n,a,l)}}function Il(e,n,a,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,p=n,b=a,z=l,X=p.flags;switch(p.tag){case 0:case 11:case 15:Il(c,p,b,z,r),Bi(8,p);break;case 23:break;case 22:var W=p.stateNode;p.memoizedState!==null?W._visibility&2?Il(c,p,b,z,r):Yi(c,p):(W._visibility|=2,Il(c,p,b,z,r)),r&&X&2048&&yc(p.alternate,p);break;case 24:Il(c,p,b,z,r),r&&X&2048&&vc(p.alternate,p);break;default:Il(c,p,b,z,r)}n=n.sibling}}function Yi(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,r=l.flags;switch(l.tag){case 22:Yi(a,l),r&2048&&yc(l.alternate,l);break;case 24:Yi(a,l),r&2048&&vc(l.alternate,l);break;default:Yi(a,l)}n=n.sibling}}var $i=8192;function ei(e,n,a){if(e.subtreeFlags&$i)for(e=e.child;e!==null;)km(e,n,a),e=e.sibling}function km(e,n,a){switch(e.tag){case 26:ei(e,n,a),e.flags&$i&&e.memoizedState!==null&&Ug(a,Qn,e.memoizedState,e.memoizedProps);break;case 5:ei(e,n,a);break;case 3:case 4:var l=Qn;Qn=go(e.stateNode.containerInfo),ei(e,n,a),Qn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=$i,$i=16777216,ei(e,n,a),$i=l):ei(e,n,a));break;default:ei(e,n,a)}}function Cm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Qi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Pt=l,Tm(l,e)}Cm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zm(e),e=e.sibling}function zm(e){switch(e.tag){case 0:case 11:case 15:Qi(e),e.flags&2048&&qa(9,e,e.return);break;case 3:Qi(e);break;case 12:Qi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,lo(e)):Qi(e);break;default:Qi(e)}}function lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Pt=l,Tm(l,e)}Cm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:qa(8,n,n.return),lo(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,lo(n));break;default:lo(n)}e=e.sibling}}function Tm(e,n){for(;Pt!==null;){var a=Pt;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ci(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Pt=l;else e:for(a=e;Pt!==null;){l=Pt;var r=l.sibling,c=l.return;if(ym(l),l===a){Pt=null;break e}if(r!==null){r.return=c,Pt=r;break e}Pt=c}}}var Vb={getCacheForType:function(e){var n=nn(qt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return nn(qt).controller.signal}},Pb=typeof WeakMap=="function"?WeakMap:Map,it=0,xt=null,Qe=null,Ke=0,ot=0,Sn=null,Ba=!1,ti=!1,jc=!1,va=0,zt=0,Ga=0,Sl=0,wc=0,kn=0,ni=0,Xi=null,gn=null,_c=!1,io=0,Em=0,so=1/0,oo=null,Ya=null,Kt=0,$a=null,ai=null,ja=0,Nc=0,Sc=null,Mm=null,Zi=0,kc=null;function Cn(){return(it&2)!==0&&Ke!==0?Ke&-Ke:k.T!==null?Dc():bs()}function Dm(){if(kn===0)if((Ke&536870912)===0||Ve){var e=Mn;Mn<<=1,(Mn&3932160)===0&&(Mn=262144),kn=e}else kn=536870912;return e=_n.current,e!==null&&(e.flags|=32),kn}function yn(e,n,a){(e===xt&&(ot===2||ot===9)||e.cancelPendingCommit!==null)&&(li(e,0),Qa(e,Ke,kn,!1)),nt(e,a),((it&2)===0||e!==xt)&&(e===xt&&((it&2)===0&&(Sl|=a),zt===4&&Qa(e,Ke,kn,!1)),Wn(e))}function Am(e,n,a){if((it&6)!==0)throw Error(d(327));var l=!a&&(n&127)===0&&(n&e.expiredLanes)===0||re(e,n),r=l?eg(e,n):zc(e,n,!0),c=l;do{if(r===0){ti&&!l&&Qa(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!Wb(a)){r=zc(e,n,!1),c=!1;continue}if(r===2){if(c=n,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var b=e;r=Xi;var z=b.current.memoizedState.isDehydrated;if(z&&(li(b,p).flags|=256),p=zc(b,p,!1),p!==2){if(jc&&!z){b.errorRecoveryDisabledLanes|=c,Sl|=c,r=4;break e}c=gn,gn=r,c!==null&&(gn===null?gn=c:gn.push.apply(gn,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){li(e,0),Qa(e,n,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:Qa(l,n,kn,!Ba);break e;case 2:gn=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(r=io+300-ye(),10<r)){if(Qa(l,n,kn,!Ba),L(l,0,!0)!==0)break e;ja=n,l.timeoutHandle=uf(Om.bind(null,l,a,gn,oo,_c,n,kn,Sl,ni,Ba,c,"Throttled",-0,0),r);break e}Om(l,a,gn,oo,_c,n,kn,Sl,ni,Ba,c,null,-0,0)}}break}while(!0);Wn(e)}function Om(e,n,a,l,r,c,p,b,z,X,W,le,F,J){if(e.timeoutHandle=-1,le=n.subtreeFlags,le&8192||(le&16785408)===16785408){le={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},km(n,c,le);var je=(c&62914560)===c?io-ye():(c&4194048)===c?Em-ye():0;if(je=Rg(le,je),je!==null){ja=c,e.cancelPendingCommit=je(Ym.bind(null,e,n,c,a,l,r,p,b,z,W,le,null,F,J)),Qa(e,c,p,!X);return}}Ym(e,n,c,a,l,r,p,b,z)}function Wb(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var r=a[l],c=r.getSnapshot;r=r.value;try{if(!jn(c(),r))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(e,n,a,l){n&=~wc,n&=~Sl,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var c=31-st(r),p=1<<c;l[c]=-1,r&=~p}a!==0&&ht(e,a,n)}function ro(){return(it&6)===0?(Ki(0),!1):!0}function Cc(){if(Qe!==null){if(ot===0)var e=Qe.return;else e=Qe,da=xl=null,$r(e),Fl=null,Ti=0,e=Qe;for(;e!==null;)um(e.alternate,e),e=e.return;Qe=null}}function li(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,gg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ja=0,Cc(),xt=e,Qe=a=ra(e.current,null),Ke=n,ot=0,Sn=null,Ba=!1,ti=re(e,n),jc=!1,ni=kn=wc=Sl=Ga=zt=0,gn=Xi=null,_c=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-st(l),c=1<<r;n|=e[r],l&=~c}return va=n,Ts(),a}function Um(e,n){qe=null,k.H=Hi,n===Kl||n===Hs?(n=Pu(),ot=3):n===Mr?(n=Pu(),ot=4):ot=n===ic?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Sn=n,Qe===null&&(zt=1,Ps(e,Un(n,e.current)))}function Rm(){var e=_n.current;return e===null?!0:(Ke&4194048)===Ke?qn===null:(Ke&62914560)===Ke||(Ke&536870912)!==0?e===qn:!1}function Hm(){var e=k.H;return k.H=Hi,e===null?Hi:e}function Lm(){var e=k.A;return k.A=Vb,e}function co(){zt=4,Ba||(Ke&4194048)!==Ke&&_n.current!==null||(ti=!0),(Ga&134217727)===0&&(Sl&134217727)===0||xt===null||Qa(xt,Ke,kn,!1)}function zc(e,n,a){var l=it;it|=2;var r=Hm(),c=Lm();(xt!==e||Ke!==n)&&(oo=null,li(e,n)),n=!1;var p=zt;e:do try{if(ot!==0&&Qe!==null){var b=Qe,z=Sn;switch(ot){case 8:Cc(),p=6;break e;case 3:case 2:case 9:case 6:_n.current===null&&(n=!0);var X=ot;if(ot=0,Sn=null,ii(e,b,z,X),a&&ti){p=0;break e}break;default:X=ot,ot=0,Sn=null,ii(e,b,z,X)}}Ib(),p=zt;break}catch(W){Um(e,W)}while(!0);return n&&e.shellSuspendCounter++,da=xl=null,it=l,k.H=r,k.A=c,Qe===null&&(xt=null,Ke=0,Ts()),p}function Ib(){for(;Qe!==null;)qm(Qe)}function eg(e,n){var a=it;it|=2;var l=Hm(),r=Lm();xt!==e||Ke!==n?(oo=null,so=ye()+500,li(e,n)):ti=re(e,n);e:do try{if(ot!==0&&Qe!==null){n=Qe;var c=Sn;t:switch(ot){case 1:ot=0,Sn=null,ii(e,n,c,1);break;case 2:case 9:if(Ju(c)){ot=0,Sn=null,Bm(n);break}n=function(){ot!==2&&ot!==9||xt!==e||(ot=7),Wn(e)},c.then(n,n);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:Ju(c)?(ot=0,Sn=null,Bm(n)):(ot=0,Sn=null,ii(e,n,c,7));break;case 5:var p=null;switch(Qe.tag){case 26:p=Qe.memoizedState;case 5:case 27:var b=Qe;if(p?kf(p):b.stateNode.complete){ot=0,Sn=null;var z=b.sibling;if(z!==null)Qe=z;else{var X=b.return;X!==null?(Qe=X,uo(X)):Qe=null}break t}}ot=0,Sn=null,ii(e,n,c,5);break;case 6:ot=0,Sn=null,ii(e,n,c,6);break;case 8:Cc(),zt=6;break e;default:throw Error(d(462))}}tg();break}catch(W){Um(e,W)}while(!0);return da=xl=null,k.H=l,k.A=r,it=a,Qe!==null?0:(xt=null,Ke=0,Ts(),zt)}function tg(){for(;Qe!==null&&!Me();)qm(Qe)}function qm(e){var n=cm(e.alternate,e,va);e.memoizedProps=e.pendingProps,n===null?uo(e):Qe=n}function Bm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=am(a,n,n.pendingProps,n.type,void 0,Ke);break;case 11:n=am(a,n,n.pendingProps,n.type.render,n.ref,Ke);break;case 5:$r(n);default:um(a,n),n=Qe=Lu(n,va),n=cm(a,n,va)}e.memoizedProps=e.pendingProps,n===null?uo(e):Qe=n}function ii(e,n,a,l){da=xl=null,$r(n),Fl=null,Ti=0;var r=n.return;try{if($b(e,r,n,a,Ke)){zt=1,Ps(e,Un(a,e.current)),Qe=null;return}}catch(c){if(r!==null)throw Qe=r,c;zt=1,Ps(e,Un(a,e.current)),Qe=null;return}n.flags&32768?(Ve||l===1?e=!0:ti||(Ke&536870912)!==0?e=!1:(Ba=e=!0,(l===2||l===9||l===3||l===6)&&(l=_n.current,l!==null&&l.tag===13&&(l.flags|=16384))),Gm(n,e)):uo(n)}function uo(e){var n=e;do{if((n.flags&32768)!==0){Gm(n,Ba);return}e=n.return;var a=Zb(n.alternate,n,va);if(a!==null){Qe=a;return}if(n=n.sibling,n!==null){Qe=n;return}Qe=n=e}while(n!==null);zt===0&&(zt=5)}function Gm(e,n){do{var a=Kb(e.alternate,e);if(a!==null){a.flags&=32767,Qe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Qe=e;return}Qe=e=a}while(e!==null);zt=6,Qe=null}function Ym(e,n,a,l,r,c,p,b,z){e.cancelPendingCommit=null;do po();while(Kt!==0);if((it&6)!==0)throw Error(d(327));if(n!==null){if(n===e.current)throw Error(d(177));if(c=n.lanes|n.childLanes,c|=xr,ft(e,a,c,p,b,z),e===xt&&(Qe=xt=null,Ke=0),ai=n,$a=e,ja=a,Nc=c,Sc=r,Mm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ig(K,function(){return Km(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=k.T,k.T=null,r=V.p,V.p=2,p=it,it|=4;try{Fb(e,n,a)}finally{it=p,V.p=r,k.T=l}}Kt=1,$m(),Qm(),Xm()}}function $m(){if(Kt===1){Kt=0;var e=$a,n=ai,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=k.T,k.T=null;var l=V.p;V.p=2;var r=it;it|=4;try{_m(n,e);var c=Bc,p=Tu(e.containerInfo),b=c.focusedElem,z=c.selectionRange;if(p!==b&&b&&b.ownerDocument&&zu(b.ownerDocument.documentElement,b)){if(z!==null&&ur(b)){var X=z.start,W=z.end;if(W===void 0&&(W=X),"selectionStart"in b)b.selectionStart=X,b.selectionEnd=Math.min(W,b.value.length);else{var le=b.ownerDocument||document,F=le&&le.defaultView||window;if(F.getSelection){var J=F.getSelection(),je=b.textContent.length,De=Math.min(z.start,je),pt=z.end===void 0?De:Math.min(z.end,je);!J.extend&&De>pt&&(p=pt,pt=De,De=p);var q=Cu(b,De),O=Cu(b,pt);if(q&&O&&(J.rangeCount!==1||J.anchorNode!==q.node||J.anchorOffset!==q.offset||J.focusNode!==O.node||J.focusOffset!==O.offset)){var Q=le.createRange();Q.setStart(q.node,q.offset),J.removeAllRanges(),De>pt?(J.addRange(Q),J.extend(O.node,O.offset)):(Q.setEnd(O.node,O.offset),J.addRange(Q))}}}}for(le=[],J=b;J=J.parentNode;)J.nodeType===1&&le.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<le.length;b++){var ae=le[b];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}No=!!qc,Bc=qc=null}finally{it=r,V.p=l,k.T=a}}e.current=n,Kt=2}}function Qm(){if(Kt===2){Kt=0;var e=$a,n=ai,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=k.T,k.T=null;var l=V.p;V.p=2;var r=it;it|=4;try{gm(e,n.alternate,n)}finally{it=r,V.p=l,k.T=a}}Kt=3}}function Xm(){if(Kt===4||Kt===3){Kt=0,D();var e=$a,n=ai,a=ja,l=Mm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Kt=5:(Kt=0,ai=$a=null,Zm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Ya=null),hi(a),n=n.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Ue,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=k.T,r=V.p,V.p=2,k.T=null;try{for(var c=e.onRecoverableError,p=0;p<l.length;p++){var b=l[p];c(b.value,{componentStack:b.stack})}}finally{k.T=n,V.p=r}}(ja&3)!==0&&po(),Wn(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===kc?Zi++:(Zi=0,kc=e):Zi=0,Ki(0)}}function Zm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ci(n)))}function po(){return $m(),Qm(),Xm(),Km()}function Km(){if(Kt!==5)return!1;var e=$a,n=Nc;Nc=0;var a=hi(ja),l=k.T,r=V.p;try{V.p=32>a?32:a,k.T=null,a=Sc,Sc=null;var c=$a,p=ja;if(Kt=0,ai=$a=null,ja=0,(it&6)!==0)throw Error(d(331));var b=it;if(it|=4,zm(c.current),Sm(c,c.current,p,a),it=b,Ki(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Ue,c)}catch{}return!0}finally{V.p=r,k.T=l,Zm(e,n)}}function Fm(e,n,a){n=Un(a,n),n=lc(e.stateNode,n,2),e=Ra(e,n,2),e!==null&&(nt(e,2),Wn(e))}function rt(e,n,a){if(e.tag===3)Fm(e,e,a);else for(;n!==null;){if(n.tag===3){Fm(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ya===null||!Ya.has(l))){e=Un(a,e),a=Jp(2),l=Ra(n,a,2),l!==null&&(Vp(a,l,n,e),nt(l,2),Wn(l));break}}n=n.return}}function Tc(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Pb;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(a)||(jc=!0,r.add(a),e=ng.bind(null,e,n,a),n.then(e,e))}function ng(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xt===e&&(Ke&a)===a&&(zt===4||zt===3&&(Ke&62914560)===Ke&&300>ye()-io?(it&2)===0&&li(e,0):wc|=a,ni===Ke&&(ni=0)),Wn(e)}function Jm(e,n){n===0&&(n=Ce()),e=ml(e,n),e!==null&&(nt(e,n),Wn(e))}function ag(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Jm(e,a)}function lg(e,n){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(n),Jm(e,a)}function ig(e,n){return ve(e,n)}var mo=null,si=null,Ec=!1,fo=!1,Mc=!1,Xa=0;function Wn(e){e!==si&&e.next===null&&(si===null?mo=si=e:si=si.next=e),fo=!0,Ec||(Ec=!0,og())}function Ki(e,n){if(!Mc&&fo){Mc=!0;do for(var a=!1,l=mo;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var p=l.suspendedLanes,b=l.pingedLanes;c=(1<<31-st(42|e)+1)-1,c&=r&~(p&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Im(l,c))}else c=Ke,c=L(l,l===xt?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||re(l,c)||(a=!0,Im(l,c));l=l.next}while(a);Mc=!1}}function sg(){Vm()}function Vm(){fo=Ec=!1;var e=0;Xa!==0&&bg()&&(e=Xa);for(var n=ye(),a=null,l=mo;l!==null;){var r=l.next,c=Pm(l,n);c===0?(l.next=null,a===null?mo=r:a.next=r,r===null&&(si=a)):(a=l,(e!==0||(c&3)!==0)&&(fo=!0)),l=r}Kt!==0&&Kt!==5||Ki(e),Xa!==0&&(Xa=0)}function Pm(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-st(c),b=1<<p,z=r[p];z===-1?((b&a)===0||(b&l)!==0)&&(r[p]=ee(b,n)):z<=n&&(e.expiredLanes|=b),c&=~b}if(n=xt,a=Ke,a=L(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(ot===2||ot===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&_t(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||re(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&_t(l),hi(a)){case 2:case 8:a=mt;break;case 32:a=K;break;case 268435456:a=_e;break;default:a=K}return l=Wm.bind(null,e),a=ve(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&_t(l),e.callbackPriority=2,e.callbackNode=null,2}function Wm(e,n){if(Kt!==0&&Kt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(po()&&e.callbackNode!==a)return null;var l=Ke;return l=L(e,e===xt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Am(e,l,n),Pm(e,ye()),e.callbackNode!=null&&e.callbackNode===a?Wm.bind(null,e):null)}function Im(e,n){if(po())return null;Am(e,n,!0)}function og(){yg(function(){(it&6)!==0?ve(Le,sg):Vm()})}function Dc(){if(Xa===0){var e=Xl;e===0&&(e=en,en<<=1,(en&261888)===0&&(en=256)),Xa=e}return Xa}function ef(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:js(""+e)}function tf(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function rg(e,n,a,l,r){if(n==="submit"&&a&&a.stateNode===r){var c=ef((r[St]||null).action),p=l.submitter;p&&(n=(n=p[St]||null)?ef(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var b=new Ss("action","action",null,l,r);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Xa!==0){var z=p?tf(r,p):new FormData(r);Wr(a,{pending:!0,data:z,method:r.method,action:c},null,z)}}else typeof c=="function"&&(b.preventDefault(),z=p?tf(r,p):new FormData(r),Wr(a,{pending:!0,data:z,method:r.method,action:c},c,z))},currentTarget:r}]})}}for(var Ac=0;Ac<hr.length;Ac++){var Oc=hr[Ac],cg=Oc.toLowerCase(),dg=Oc[0].toUpperCase()+Oc.slice(1);$n(cg,"on"+dg)}$n(Du,"onAnimationEnd"),$n(Au,"onAnimationIteration"),$n(Ou,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(kb,"onTransitionRun"),$n(Cb,"onTransitionStart"),$n(zb,"onTransitionCancel"),$n(Uu,"onTransitionEnd"),Ml("onMouseEnter",["mouseout","mouseover"]),Ml("onMouseLeave",["mouseout","mouseover"]),Ml("onPointerEnter",["pointerout","pointerover"]),Ml("onPointerLeave",["pointerout","pointerover"]),cl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cl("onBeforeInput",["compositionend","keypress","textInput","paste"]),cl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fi));function nf(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],r=l.event;l=l.listeners;e:{var c=void 0;if(n)for(var p=l.length-1;0<=p;p--){var b=l[p],z=b.instance,X=b.currentTarget;if(b=b.listener,z!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=X;try{c(r)}catch(W){zs(W)}r.currentTarget=null,c=z}else for(p=0;p<l.length;p++){if(b=l[p],z=b.instance,X=b.currentTarget,b=b.listener,z!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=X;try{c(r)}catch(W){zs(W)}r.currentTarget=null,c=z}}}}function Xe(e,n){var a=n[g];a===void 0&&(a=n[g]=new Set);var l=e+"__bubble";a.has(l)||(af(n,e,2,!1),a.add(l))}function Uc(e,n,a){var l=0;n&&(l|=4),af(a,e,l,n)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Rc(e){if(!e[ho]){e[ho]=!0,Vd.forEach(function(a){a!=="selectionchange"&&(ug.has(a)||Uc(a,!1,e),Uc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ho]||(n[ho]=!0,Uc("selectionchange",!1,n))}}function af(e,n,a,l){switch(Af(n)){case 2:var r=qg;break;case 8:r=Bg;break;default:r=Pc}a=r.bind(null,n,a,e),r=void 0,!nr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,a,{capture:!0,passive:r}):e.addEventListener(n,a,!0):r!==void 0?e.addEventListener(n,a,{passive:r}):e.addEventListener(n,a,!1)}function Hc(e,n,a,l,r){var c=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var b=l.stateNode.containerInfo;if(b===r)break;if(p===4)for(p=l.return;p!==null;){var z=p.tag;if((z===3||z===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;b!==null;){if(p=Lt(b),p===null)return;if(z=p.tag,z===5||z===6||z===26||z===27){l=c=p;continue e}b=b.parentNode}}l=l.return}ru(function(){var X=c,W=er(a),le=[];e:{var F=Ru.get(e);if(F!==void 0){var J=Ss,je=e;switch(e){case"keypress":if(_s(a)===0)break e;case"keydown":case"keyup":J=lb;break;case"focusin":je="focus",J=sr;break;case"focusout":je="blur",J=sr;break;case"beforeblur":case"afterblur":J=sr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=ob;break;case Du:case Au:case Ou:J=Jx;break;case Uu:J=cb;break;case"scroll":case"scrollend":J=Qx;break;case"wheel":J=ub;break;case"copy":case"cut":case"paste":J=Px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=mu;break;case"toggle":case"beforetoggle":J=mb}var De=(n&4)!==0,pt=!De&&(e==="scroll"||e==="scrollend"),q=De?F!==null?F+"Capture":null:F;De=[];for(var O=X,Q;O!==null;){var ae=O;if(Q=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||Q===null||q===null||(ae=xi(O,q),ae!=null&&De.push(Ji(O,ae,Q))),pt)break;O=O.return}0<De.length&&(F=new J(F,je,null,a,W),le.push({event:F,listeners:De}))}}if((n&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",F&&a!==Io&&(je=a.relatedTarget||a.fromElement)&&(Lt(je)||je[Ca]))break e;if((J||F)&&(F=W.window===W?W:(F=W.ownerDocument)?F.defaultView||F.parentWindow:window,J?(je=a.relatedTarget||a.toElement,J=X,je=je?Lt(je):null,je!==null&&(pt=f(je),De=je.tag,je!==pt||De!==5&&De!==27&&De!==6)&&(je=null)):(J=null,je=X),J!==je)){if(De=uu,ae="onMouseLeave",q="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(De=mu,ae="onPointerLeave",q="onPointerEnter",O="pointer"),pt=J==null?F:la(J),Q=je==null?F:la(je),F=new De(ae,O+"leave",J,a,W),F.target=pt,F.relatedTarget=Q,ae=null,Lt(W)===X&&(De=new De(q,O+"enter",je,a,W),De.target=Q,De.relatedTarget=pt,ae=De),pt=ae,J&&je)t:{for(De=pg,q=J,O=je,Q=0,ae=q;ae;ae=De(ae))Q++;ae=0;for(var Ee=O;Ee;Ee=De(Ee))ae++;for(;0<Q-ae;)q=De(q),Q--;for(;0<ae-Q;)O=De(O),ae--;for(;Q--;){if(q===O||O!==null&&q===O.alternate){De=q;break t}q=De(q),O=De(O)}De=null}else De=null;J!==null&&lf(le,F,J,De,!1),je!==null&&pt!==null&&lf(le,pt,je,De,!0)}}e:{if(F=X?la(X):window,J=F.nodeName&&F.nodeName.toLowerCase(),J==="select"||J==="input"&&F.type==="file")var at=ju;else if(yu(F))if(wu)at=_b;else{at=jb;var Se=vb}else J=F.nodeName,!J||J.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?X&&Wo(X.elementType)&&(at=ju):at=wb;if(at&&(at=at(e,X))){vu(le,at,a,W);break e}Se&&Se(e,F,X),e==="focusout"&&X&&F.type==="number"&&X.memoizedProps.value!=null&&Po(F,"number",F.value)}switch(Se=X?la(X):window,e){case"focusin":(yu(Se)||Se.contentEditable==="true")&&(Hl=Se,pr=X,Ni=null);break;case"focusout":Ni=pr=Hl=null;break;case"mousedown":mr=!0;break;case"contextmenu":case"mouseup":case"dragend":mr=!1,Eu(le,a,W);break;case"selectionchange":if(Sb)break;case"keydown":case"keyup":Eu(le,a,W)}var Be;if(rr)e:{switch(e){case"compositionstart":var Fe="onCompositionStart";break e;case"compositionend":Fe="onCompositionEnd";break e;case"compositionupdate":Fe="onCompositionUpdate";break e}Fe=void 0}else Rl?bu(e,a)&&(Fe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Fe="onCompositionStart");Fe&&(fu&&a.locale!=="ko"&&(Rl||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&Rl&&(Be=cu()):(Ta=W,ar="value"in Ta?Ta.value:Ta.textContent,Rl=!0)),Se=xo(X,Fe),0<Se.length&&(Fe=new pu(Fe,e,null,a,W),le.push({event:Fe,listeners:Se}),Be?Fe.data=Be:(Be=gu(a),Be!==null&&(Fe.data=Be)))),(Be=hb?xb(e,a):bb(e,a))&&(Fe=xo(X,"onBeforeInput"),0<Fe.length&&(Se=new pu("onBeforeInput","beforeinput",null,a,W),le.push({event:Se,listeners:Fe}),Se.data=Be)),rg(le,e,X,a,W)}nf(le,n)})}function Ji(e,n,a){return{instance:e,listener:n,currentTarget:a}}function xo(e,n){for(var a=n+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=xi(e,a),r!=null&&l.unshift(Ji(e,r,c)),r=xi(e,n),r!=null&&l.push(Ji(e,r,c))),e.tag===3)return l;e=e.return}return[]}function pg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lf(e,n,a,l,r){for(var c=n._reactName,p=[];a!==null&&a!==l;){var b=a,z=b.alternate,X=b.stateNode;if(b=b.tag,z!==null&&z===l)break;b!==5&&b!==26&&b!==27||X===null||(z=X,r?(X=xi(a,c),X!=null&&p.unshift(Ji(a,X,z))):r||(X=xi(a,c),X!=null&&p.push(Ji(a,X,z)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var mg=/\r\n?/g,fg=/\u0000|\uFFFD/g;function sf(e){return(typeof e=="string"?e:""+e).replace(mg,`
`).replace(fg,"")}function of(e,n){return n=sf(n),sf(e)===n}function ut(e,n,a,l,r,c){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Al(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Al(e,""+l);break;case"className":ys(e,"class",l);break;case"tabIndex":ys(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ys(e,a,l);break;case"style":su(e,l,c);break;case"data":if(n!=="object"){ys(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=js(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&ut(e,n,"name",r.name,r,null),ut(e,n,"formEncType",r.formEncType,r,null),ut(e,n,"formMethod",r.formMethod,r,null),ut(e,n,"formTarget",r.formTarget,r,null)):(ut(e,n,"encType",r.encType,r,null),ut(e,n,"method",r.method,r,null),ut(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=js(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=sa);break;case"onScroll":l!=null&&Xe("scroll",e);break;case"onScrollEnd":l!=null&&Xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=js(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Xe("beforetoggle",e),Xe("toggle",e),gs(e,"popover",l);break;case"xlinkActuate":ia(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ia(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ia(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ia(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ia(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ia(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ia(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ia(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ia(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":gs(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yx.get(a)||a,gs(e,a,l))}}function Lc(e,n,a,l,r,c){switch(a){case"style":su(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Al(e,l):(typeof l=="number"||typeof l=="bigint")&&Al(e,""+l);break;case"onScroll":l!=null&&Xe("scroll",e);break;case"onScrollEnd":l!=null&&Xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),n=a.slice(2,r?a.length-7:void 0),c=e[St]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,r);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):gs(e,a,l)}}}function ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xe("error",e),Xe("load",e);var l=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:ut(e,n,c,p,a,null)}}r&&ut(e,n,"srcSet",a.srcSet,a,null),l&&ut(e,n,"src",a.src,a,null);return;case"input":Xe("invalid",e);var b=c=p=r=null,z=null,X=null;for(l in a)if(a.hasOwnProperty(l)){var W=a[l];if(W!=null)switch(l){case"name":r=W;break;case"type":p=W;break;case"checked":z=W;break;case"defaultChecked":X=W;break;case"value":c=W;break;case"defaultValue":b=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(d(137,n));break;default:ut(e,n,l,W,a,null)}}nu(e,c,b,z,X,p,r,!1);return;case"select":Xe("invalid",e),l=p=c=null;for(r in a)if(a.hasOwnProperty(r)&&(b=a[r],b!=null))switch(r){case"value":c=b;break;case"defaultValue":p=b;break;case"multiple":l=b;default:ut(e,n,r,b,a,null)}n=c,a=p,e.multiple=!!l,n!=null?Dl(e,!!l,n,!1):a!=null&&Dl(e,!!l,a,!0);return;case"textarea":Xe("invalid",e),c=r=l=null;for(p in a)if(a.hasOwnProperty(p)&&(b=a[p],b!=null))switch(p){case"value":l=b;break;case"defaultValue":r=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(91));break;default:ut(e,n,p,b,a,null)}lu(e,l,r,c);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ut(e,n,z,l,a,null)}return;case"dialog":Xe("beforetoggle",e),Xe("toggle",e),Xe("cancel",e),Xe("close",e);break;case"iframe":case"object":Xe("load",e);break;case"video":case"audio":for(l=0;l<Fi.length;l++)Xe(Fi[l],e);break;case"image":Xe("error",e),Xe("load",e);break;case"details":Xe("toggle",e);break;case"embed":case"source":case"link":Xe("error",e),Xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in a)if(a.hasOwnProperty(X)&&(l=a[X],l!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:ut(e,n,X,l,a,null)}return;default:if(Wo(n)){for(W in a)a.hasOwnProperty(W)&&(l=a[W],l!==void 0&&Lc(e,n,W,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&ut(e,n,b,l,a,null))}function hg(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,b=null,z=null,X=null,W=null;for(J in a){var le=a[J];if(a.hasOwnProperty(J)&&le!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":z=le;default:l.hasOwnProperty(J)||ut(e,n,J,null,l,le)}}for(var F in l){var J=l[F];if(le=a[F],l.hasOwnProperty(F)&&(J!=null||le!=null))switch(F){case"type":c=J;break;case"name":r=J;break;case"checked":X=J;break;case"defaultChecked":W=J;break;case"value":p=J;break;case"defaultValue":b=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(d(137,n));break;default:J!==le&&ut(e,n,F,J,l,le)}}Vo(e,p,b,z,X,W,c,r);return;case"select":J=p=b=F=null;for(c in a)if(z=a[c],a.hasOwnProperty(c)&&z!=null)switch(c){case"value":break;case"multiple":J=z;default:l.hasOwnProperty(c)||ut(e,n,c,null,l,z)}for(r in l)if(c=l[r],z=a[r],l.hasOwnProperty(r)&&(c!=null||z!=null))switch(r){case"value":F=c;break;case"defaultValue":b=c;break;case"multiple":p=c;default:c!==z&&ut(e,n,r,c,l,z)}n=b,a=p,l=J,F!=null?Dl(e,!!a,F,!1):!!l!=!!a&&(n!=null?Dl(e,!!a,n,!0):Dl(e,!!a,a?[]:"",!1));return;case"textarea":J=F=null;for(b in a)if(r=a[b],a.hasOwnProperty(b)&&r!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:ut(e,n,b,null,l,r)}for(p in l)if(r=l[p],c=a[p],l.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":F=r;break;case"defaultValue":J=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&ut(e,n,p,r,l,c)}au(e,F,J);return;case"option":for(var je in a)if(F=a[je],a.hasOwnProperty(je)&&F!=null&&!l.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:ut(e,n,je,null,l,F)}for(z in l)if(F=l[z],J=a[z],l.hasOwnProperty(z)&&F!==J&&(F!=null||J!=null))switch(z){case"selected":e.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:ut(e,n,z,F,l,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in a)F=a[De],a.hasOwnProperty(De)&&F!=null&&!l.hasOwnProperty(De)&&ut(e,n,De,null,l,F);for(X in l)if(F=l[X],J=a[X],l.hasOwnProperty(X)&&F!==J&&(F!=null||J!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(d(137,n));break;default:ut(e,n,X,F,l,J)}return;default:if(Wo(n)){for(var pt in a)F=a[pt],a.hasOwnProperty(pt)&&F!==void 0&&!l.hasOwnProperty(pt)&&Lc(e,n,pt,void 0,l,F);for(W in l)F=l[W],J=a[W],!l.hasOwnProperty(W)||F===J||F===void 0&&J===void 0||Lc(e,n,W,F,l,J);return}}for(var q in a)F=a[q],a.hasOwnProperty(q)&&F!=null&&!l.hasOwnProperty(q)&&ut(e,n,q,null,l,F);for(le in l)F=l[le],J=a[le],!l.hasOwnProperty(le)||F===J||F==null&&J==null||ut(e,n,le,F,l,J)}function rf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var r=a[l],c=r.transferSize,p=r.initiatorType,b=r.duration;if(c&&b&&rf(p)){for(p=0,b=r.responseEnd,l+=1;l<a.length;l++){var z=a[l],X=z.startTime;if(X>b)break;var W=z.transferSize,le=z.initiatorType;W&&rf(le)&&(z=z.responseEnd,p+=W*(z<b?1:(b-X)/(z-X)))}if(--l,n+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qc=null,Bc=null;function bo(e){return e.nodeType===9?e:e.ownerDocument}function cf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function df(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yc=null;function bg(){var e=window.event;return e&&e.type==="popstate"?e===Yc?!1:(Yc=e,!0):(Yc=null,!1)}var uf=typeof setTimeout=="function"?setTimeout:void 0,gg=typeof clearTimeout=="function"?clearTimeout:void 0,pf=typeof Promise=="function"?Promise:void 0,yg=typeof queueMicrotask=="function"?queueMicrotask:typeof pf<"u"?function(e){return pf.resolve(null).then(e).catch(vg)}:uf;function vg(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function mf(e,n){var a=n,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(r),di(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Vi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Vi(a);for(var c=a.firstChild;c;){var p=c.nextSibling,b=c.nodeName;c[Ie]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&Vi(e.ownerDocument.body);a=r}while(a);di(n)}function ff(e,n){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function $c(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$c(a),mn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function jg(e,n,a,l){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ie])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Bn(e.nextSibling),e===null)break}return null}function wg(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Bn(e.nextSibling),e===null))return null;return e}function hf(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Bn(e.nextSibling),e===null))return null;return e}function Qc(e){return e.data==="$?"||e.data==="$~"}function Xc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _g(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Bn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Zc=null;function xf(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Bn(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function bf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function gf(e,n,a){switch(n=bo(a),e){case"html":if(e=n.documentElement,!e)throw Error(d(452));return e;case"head":if(e=n.head,!e)throw Error(d(453));return e;case"body":if(e=n.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Vi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);mn(e)}var Gn=new Map,yf=new Set;function go(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wa=V.d;V.d={f:Ng,r:Sg,D:kg,C:Cg,L:zg,m:Tg,X:Mg,S:Eg,M:Dg};function Ng(){var e=wa.f(),n=ro();return e||n}function Sg(e){var n=Fn(e);n!==null&&n.tag===5&&n.type==="form"?Up(n):wa.r(e)}var oi=typeof document>"u"?null:document;function vf(e,n,a){var l=oi;if(l&&typeof n=="string"&&n){var r=An(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),yf.has(r)||(yf.add(r),e={rel:e,crossOrigin:a,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),ln(n,"link",e),Vt(n),l.head.appendChild(n)))}}function kg(e){wa.D(e),vf("dns-prefetch",e,null)}function Cg(e,n){wa.C(e,n),vf("preconnect",e,n)}function zg(e,n,a){wa.L(e,n,a);var l=oi;if(l&&e&&n){var r='link[rel="preload"][as="'+An(n)+'"]';n==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+An(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+An(a.imageSizes)+'"]')):r+='[href="'+An(e)+'"]';var c=r;switch(n){case"style":c=ri(e);break;case"script":c=ci(e)}Gn.has(c)||(e=j({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Gn.set(c,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(Pi(c))||n==="script"&&l.querySelector(Wi(c))||(n=l.createElement("link"),ln(n,"link",e),Vt(n),l.head.appendChild(n)))}}function Tg(e,n){wa.m(e,n);var a=oi;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+An(l)+'"][href="'+An(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ci(e)}if(!Gn.has(c)&&(e=j({rel:"modulepreload",href:e},n),Gn.set(c,e),a.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wi(c)))return}l=a.createElement("link"),ln(l,"link",e),Vt(l),a.head.appendChild(l)}}}function Eg(e,n,a){wa.S(e,n,a);var l=oi;if(l&&e){var r=za(l).hoistableStyles,c=ri(e);n=n||"default";var p=r.get(c);if(!p){var b={loading:0,preload:null};if(p=l.querySelector(Pi(c)))b.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Gn.get(c))&&Kc(e,a);var z=p=l.createElement("link");Vt(z),ln(z,"link",e),z._p=new Promise(function(X,W){z.onload=X,z.onerror=W}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,yo(p,n,l)}p={type:"stylesheet",instance:p,count:1,state:b},r.set(c,p)}}}function Mg(e,n){wa.X(e,n);var a=oi;if(a&&e){var l=za(a).hoistableScripts,r=ci(e),c=l.get(r);c||(c=a.querySelector(Wi(r)),c||(e=j({src:e,async:!0},n),(n=Gn.get(r))&&Fc(e,n),c=a.createElement("script"),Vt(c),ln(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Dg(e,n){wa.M(e,n);var a=oi;if(a&&e){var l=za(a).hoistableScripts,r=ci(e),c=l.get(r);c||(c=a.querySelector(Wi(r)),c||(e=j({src:e,async:!0,type:"module"},n),(n=Gn.get(r))&&Fc(e,n),c=a.createElement("script"),Vt(c),ln(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function jf(e,n,a,l){var r=(r=ze.current)?go(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ri(a.href),a=za(r).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ri(a.href);var c=za(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(Pi(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Gn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gn.set(e,a),c||Ag(r,e,a,p.state))),n&&l===null)throw Error(d(528,""));return p}if(n&&l!==null)throw Error(d(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ci(a),a=za(r).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ri(e){return'href="'+An(e)+'"'}function Pi(e){return'link[rel="stylesheet"]['+e+"]"}function wf(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Ag(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),ln(n,"link",a),Vt(n),e.head.appendChild(n))}function ci(e){return'[src="'+An(e)+'"]'}function Wi(e){return"script[async]"+e}function _f(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+An(a.href)+'"]');if(l)return n.instance=l,Vt(l),l;var r=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Vt(l),ln(l,"style",r),yo(l,a.precedence,e),n.instance=l;case"stylesheet":r=ri(a.href);var c=e.querySelector(Pi(r));if(c)return n.state.loading|=4,n.instance=c,Vt(c),c;l=wf(a),(r=Gn.get(r))&&Kc(l,r),c=(e.ownerDocument||e).createElement("link"),Vt(c);var p=c;return p._p=new Promise(function(b,z){p.onload=b,p.onerror=z}),ln(c,"link",l),n.state.loading|=4,yo(c,a.precedence,e),n.instance=c;case"script":return c=ci(a.src),(r=e.querySelector(Wi(c)))?(n.instance=r,Vt(r),r):(l=a,(r=Gn.get(c))&&(l=j({},a),Fc(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Vt(r),ln(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,yo(l,a.precedence,e));return n.instance}function yo(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,p=0;p<l.length;p++){var b=l[p];if(b.dataset.precedence===n)c=b;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Kc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Fc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var vo=null;function Nf(e,n,a){if(vo===null){var l=new Map,r=vo=new Map;r.set(a,l)}else r=vo,l=r.get(a),l||(l=new Map,r.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var c=a[r];if(!(c[Ie]||c[Zt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=e+p;var b=l.get(p);b?b.push(c):l.set(p,[c])}}return l}function Sf(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Og(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function kf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ug(e,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=ri(l.href),c=n.querySelector(Pi(r));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=jo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,Vt(c);return}c=n.ownerDocument||n,l=wf(l),(r=Gn.get(r))&&Kc(l,r),c=c.createElement("link"),Vt(c);var p=c;p._p=new Promise(function(b,z){p.onload=b,p.onerror=z}),ln(c,"link",l),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=jo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Jc=0;function Rg(e,n){return e.stylesheets&&e.count===0&&_o(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&_o(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&Jc===0&&(Jc=62500*xg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_o(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Jc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function jo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_o(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wo=null;function _o(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wo=new Map,n.forEach(Hg,e),wo=null,jo.call(e))}function Hg(e,n){if(!(n.state.loading&4)){var a=wo.get(e);if(a)var l=a.get(null);else{a=new Map,wo.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),l=p)}l&&a.set(null,l)}r=n.instance,p=r.getAttribute("data-precedence"),c=a.get(p)||l,c===l&&a.set(null,r),a.set(p,r),this.count++,l=jo.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var Ii={$$typeof:U,Provider:null,Consumer:null,_currentValue:C,_currentValue2:C,_threadCount:0};function Lg(e,n,a,l,r,c,p,b,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Cf(e,n,a,l,r,c,p,b,z,X,W,le){return e=new Lg(e,n,a,p,z,X,W,le,b),n=1,c===!0&&(n|=24),c=wn(3,null,null,n),e.current=c,c.stateNode=e,n=zr(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:n},Dr(c),e}function zf(e){return e?(e=Bl,e):Bl}function Tf(e,n,a,l,r,c){r=zf(r),l.context===null?l.context=r:l.pendingContext=r,l=Ua(n),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=Ra(e,l,n),a!==null&&(yn(a,e,n),Mi(a,e,n))}function Ef(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Vc(e,n){Ef(e,n),(e=e.alternate)&&Ef(e,n)}function Mf(e){if(e.tag===13||e.tag===31){var n=ml(e,67108864);n!==null&&yn(n,e,67108864),Vc(e,67108864)}}function Df(e){if(e.tag===13||e.tag===31){var n=Cn();n=fi(n);var a=ml(e,n);a!==null&&yn(a,e,n),Vc(e,n)}}var No=!0;function qg(e,n,a,l){var r=k.T;k.T=null;var c=V.p;try{V.p=2,Pc(e,n,a,l)}finally{V.p=c,k.T=r}}function Bg(e,n,a,l){var r=k.T;k.T=null;var c=V.p;try{V.p=8,Pc(e,n,a,l)}finally{V.p=c,k.T=r}}function Pc(e,n,a,l){if(No){var r=Wc(l);if(r===null)Hc(e,n,l,So,a),Of(e,l);else if(Yg(r,e,n,a,l))l.stopPropagation();else if(Of(e,l),n&4&&-1<Gg.indexOf(e)){for(;r!==null;){var c=Fn(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=vn(c.pendingLanes);if(p!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;p;){var z=1<<31-st(p);b.entanglements[1]|=z,p&=~z}Wn(c),(it&6)===0&&(so=ye()+500,Ki(0))}}break;case 31:case 13:b=ml(c,2),b!==null&&yn(b,c,2),ro(),Vc(c,2)}if(c=Wc(l),c===null&&Hc(e,n,l,So,a),c===r)break;r=c}r!==null&&l.stopPropagation()}else Hc(e,n,l,null,a)}}function Wc(e){return e=er(e),Ic(e)}var So=null;function Ic(e){if(So=null,e=Lt(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=m(n),e!==null)return e;e=null}else if(a===31){if(e=S(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return So=e,null}function Af(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oe()){case Le:return 2;case mt:return 8;case K:case we:return 32;case _e:return 268435456;default:return 32}default:return 32}}var ed=!1,Ka=null,Fa=null,Ja=null,es=new Map,ts=new Map,Va=[],Gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Of(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":es.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(n.pointerId)}}function ns(e,n,a,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},n!==null&&(n=Fn(n),n!==null&&Mf(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Yg(e,n,a,l,r){switch(n){case"focusin":return Ka=ns(Ka,e,n,a,l,r),!0;case"dragenter":return Fa=ns(Fa,e,n,a,l,r),!0;case"mouseover":return Ja=ns(Ja,e,n,a,l,r),!0;case"pointerover":var c=r.pointerId;return es.set(c,ns(es.get(c)||null,e,n,a,l,r)),!0;case"gotpointercapture":return c=r.pointerId,ts.set(c,ns(ts.get(c)||null,e,n,a,l,r)),!0}return!1}function Uf(e){var n=Lt(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=m(a),n!==null){e.blockedOn=n,Nt(e.priority,function(){Df(a)});return}}else if(n===31){if(n=S(a),n!==null){e.blockedOn=n,Nt(e.priority,function(){Df(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Wc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Io=l,a.target.dispatchEvent(l),Io=null}else return n=Fn(a),n!==null&&Mf(n),e.blockedOn=a,!1;n.shift()}return!0}function Rf(e,n,a){ko(e)&&a.delete(n)}function $g(){ed=!1,Ka!==null&&ko(Ka)&&(Ka=null),Fa!==null&&ko(Fa)&&(Fa=null),Ja!==null&&ko(Ja)&&(Ja=null),es.forEach(Rf),ts.forEach(Rf)}function Co(e,n){e.blockedOn===n&&(e.blockedOn=null,ed||(ed=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,$g)))}var zo=null;function Hf(e){zo!==e&&(zo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){zo===e&&(zo=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(Ic(l||a)===null)continue;break}var c=Fn(a);c!==null&&(e.splice(n,3),n-=3,Wr(c,{pending:!0,data:r,method:a.method,action:l},l,r))}}))}function di(e){function n(z){return Co(z,e)}Ka!==null&&Co(Ka,e),Fa!==null&&Co(Fa,e),Ja!==null&&Co(Ja,e),es.forEach(n),ts.forEach(n);for(var a=0;a<Va.length;a++){var l=Va[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)Uf(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var r=a[l],c=a[l+1],p=r[St]||null;if(typeof c=="function")p||Hf(a);else if(p){var b=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[St]||null)b=p.formAction;else if(Ic(r)!==null)continue}else b=p.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),Hf(a)}}}function Lf(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function td(e){this._internalRoot=e}To.prototype.render=td.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(d(409));var a=n.current,l=Cn();Tf(a,l,e,n,null,null)},To.prototype.unmount=td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tf(e.current,2,null,e,null,null),ro(),n[Ca]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var n=bs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Va.length&&n!==0&&n<Va[a].priority;a++);Va.splice(a,0,e),a===0&&Uf(e)}};var qf=i.version;if(qf!=="19.2.6")throw Error(d(527,qf,"19.2.6"));V.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=x(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Qg={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Ue=Eo.inject(Qg),Ge=Eo}catch{}}return ls.createRoot=function(e,n){if(!u(e))throw Error(d(299));var a=!1,l="",r=Xp,c=Zp,p=Kp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Cf(e,1,!1,null,null,a,l,null,r,c,p,Lf),e[Ca]=n.current,Rc(e),new td(n)},ls.hydrateRoot=function(e,n,a){if(!u(e))throw Error(d(299));var l=!1,r="",c=Xp,p=Zp,b=Kp,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Cf(e,1,!0,n,a??null,l,r,z,c,p,b,Lf),n.context=zf(null),a=n.current,l=Cn(),l=fi(l),r=Ua(l),r.callback=null,Ra(a,r,l),a=l,n.current.lanes=a,nt(n,a),Wn(n),e[Ca]=n.current,Rc(e),new To(n)},ls.version="19.2.6",ls}var Jf;function ay(){if(Jf)return ld.exports;Jf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),ld.exports=ny(),ld.exports}var ly=ay(),iy=Wh();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function us(){return us=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},us.apply(this,arguments)}var nl;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(nl||(nl={}));const Vf="popstate";function sy(s){s===void 0&&(s={});function i(u,f){let{pathname:m="/",search:S="",hash:y=""}=Tl(u.location.hash.substr(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),Sd("",{pathname:m,search:S,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function o(u,f){let m=u.document.querySelector("base"),S="";if(m&&m.getAttribute("href")){let y=u.location.href,x=y.indexOf("#");S=x===-1?y:y.slice(0,x)}return S+"#"+(typeof f=="string"?f:Yo(f))}function d(u,f){Zo(u.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(f)+")")}return ry(i,o,d,s)}function At(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function Zo(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function oy(){return Math.random().toString(36).substr(2,8)}function Pf(s,i){return{usr:s.state,key:s.key,idx:i}}function Sd(s,i,o,d){return o===void 0&&(o=null),us({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof i=="string"?Tl(i):i,{state:o,key:i&&i.key||d||oy()})}function Yo(s){let{pathname:i="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function Tl(s){let i={};if(s){let o=s.indexOf("#");o>=0&&(i.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(i.search=s.substr(d),s=s.substr(0,d)),s&&(i.pathname=s)}return i}function ry(s,i,o,d){d===void 0&&(d={});let{window:u=document.defaultView,v5Compat:f=!1}=d,m=u.history,S=nl.Pop,y=null,x=v();x==null&&(x=0,m.replaceState(us({},m.state,{idx:x}),""));function v(){return(m.state||{idx:null}).idx}function j(){S=nl.Pop;let M=v(),B=M==null?null:M-x;x=M,y&&y({action:S,location:Z.location,delta:B})}function E(M,B){S=nl.Push;let R=Sd(Z.location,M,B);o&&o(R,M),x=v()+1;let U=Pf(R,x),I=Z.createHref(R);try{m.pushState(U,"",I)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;u.location.assign(I)}f&&y&&y({action:S,location:Z.location,delta:1})}function Y(M,B){S=nl.Replace;let R=Sd(Z.location,M,B);o&&o(R,M),x=v();let U=Pf(R,x),I=Z.createHref(R);m.replaceState(U,"",I),f&&y&&y({action:S,location:Z.location,delta:0})}function P(M){let B=u.location.origin!=="null"?u.location.origin:u.location.href,R=typeof M=="string"?M:Yo(M);return R=R.replace(/ $/,"%20"),At(B,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,B)}let Z={get action(){return S},get location(){return s(u,m)},listen(M){if(y)throw new Error("A history only accepts one active listener");return u.addEventListener(Vf,j),y=M,()=>{u.removeEventListener(Vf,j),y=null}},createHref(M){return i(u,M)},createURL:P,encodeLocation(M){let B=P(M);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:E,replace:Y,go(M){return m.go(M)}};return Z}var Wf;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Wf||(Wf={}));function cy(s,i,o){return o===void 0&&(o="/"),dy(s,i,o)}function dy(s,i,o,d){let u=typeof i=="string"?Tl(i):i,f=qd(u.pathname||"/",o);if(f==null)return null;let m=Ih(s);uy(m);let S=null;for(let y=0;S==null&&y<m.length;++y){let x=_y(f);S=vy(m[y],x)}return S}function Ih(s,i,o,d){i===void 0&&(i=[]),o===void 0&&(o=[]),d===void 0&&(d="");let u=(f,m,S)=>{let y={relativePath:S===void 0?f.path||"":S,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};y.relativePath.startsWith("/")&&(At(y.relativePath.startsWith(d),'Absolute route path "'+y.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),y.relativePath=y.relativePath.slice(d.length));let x=ll([d,y.relativePath]),v=o.concat(y);f.children&&f.children.length>0&&(At(f.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+x+'".')),Ih(f.children,i,v,x)),!(f.path==null&&!f.index)&&i.push({path:x,score:gy(x,f.index),routesMeta:v})};return s.forEach((f,m)=>{var S;if(f.path===""||!((S=f.path)!=null&&S.includes("?")))u(f,m);else for(let y of ex(f.path))u(f,m,y)}),i}function ex(s){let i=s.split("/");if(i.length===0)return[];let[o,...d]=i,u=o.endsWith("?"),f=o.replace(/\?$/,"");if(d.length===0)return u?[f,""]:[f];let m=ex(d.join("/")),S=[];return S.push(...m.map(y=>y===""?f:[f,y].join("/"))),u&&S.push(...m),S.map(y=>s.startsWith("/")&&y===""?"/":y)}function uy(s){s.sort((i,o)=>i.score!==o.score?o.score-i.score:yy(i.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const py=/^:[\w-]+$/,my=3,fy=2,hy=1,xy=10,by=-2,If=s=>s==="*";function gy(s,i){let o=s.split("/"),d=o.length;return o.some(If)&&(d+=by),i&&(d+=fy),o.filter(u=>!If(u)).reduce((u,f)=>u+(py.test(f)?my:f===""?hy:xy),d)}function yy(s,i){return s.length===i.length&&s.slice(0,-1).every((d,u)=>d===i[u])?s[s.length-1]-i[i.length-1]:0}function vy(s,i,o){let{routesMeta:d}=s,u={},f="/",m=[];for(let S=0;S<d.length;++S){let y=d[S],x=S===d.length-1,v=f==="/"?i:i.slice(f.length)||"/",j=jy({path:y.relativePath,caseSensitive:y.caseSensitive,end:x},v),E=y.route;if(!j)return null;Object.assign(u,j.params),m.push({params:u,pathname:ll([f,j.pathname]),pathnameBase:zy(ll([f,j.pathnameBase])),route:E}),j.pathnameBase!=="/"&&(f=ll([f,j.pathnameBase]))}return m}function jy(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=wy(s.path,s.caseSensitive,s.end),u=i.match(o);if(!u)return null;let f=u[0],m=f.replace(/(.)\/+$/,"$1"),S=u.slice(1);return{params:d.reduce((x,v,j)=>{let{paramName:E,isOptional:Y}=v;if(E==="*"){let Z=S[j]||"";m=f.slice(0,f.length-Z.length).replace(/(.)\/+$/,"$1")}const P=S[j];return Y&&!P?x[E]=void 0:x[E]=(P||"").replace(/%2F/g,"/"),x},{}),pathname:f,pathnameBase:m,pattern:s}}function wy(s,i,o){i===void 0&&(i=!1),o===void 0&&(o=!0),Zo(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],u="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,S,y)=>(d.push({paramName:S,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),u+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":s!==""&&s!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),d]}function _y(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Zo(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),s}}function qd(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const Ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sy=s=>Ny.test(s);function ky(s,i){i===void 0&&(i="/");let{pathname:o,search:d="",hash:u=""}=typeof s=="string"?Tl(s):s,f;if(o)if(Sy(o))f=o;else{if(o.includes("//")){let m=o;o=o.replace(/\/\/+/g,"/"),Zo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(m+" -> "+o))}o.startsWith("/")?f=eh(o.substring(1),"/"):f=eh(o,i)}else f=i;return{pathname:f,search:Ty(d),hash:Ey(u)}}function eh(s,i){let o=i.replace(/\/+$/,"").split("/");return s.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function rd(s,i,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cy(s){return s.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Bd(s,i){let o=Cy(s);return i?o.map((d,u)=>u===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function Gd(s,i,o,d){d===void 0&&(d=!1);let u;typeof s=="string"?u=Tl(s):(u=us({},s),At(!u.pathname||!u.pathname.includes("?"),rd("?","pathname","search",u)),At(!u.pathname||!u.pathname.includes("#"),rd("#","pathname","hash",u)),At(!u.search||!u.search.includes("#"),rd("#","search","hash",u)));let f=s===""||u.pathname==="",m=f?"/":u.pathname,S;if(m==null)S=o;else{let j=i.length-1;if(!d&&m.startsWith("..")){let E=m.split("/");for(;E[0]==="..";)E.shift(),j-=1;u.pathname=E.join("/")}S=j>=0?i[j]:"/"}let y=ky(u,S),x=m&&m!=="/"&&m.endsWith("/"),v=(f||m===".")&&o.endsWith("/");return!y.pathname.endsWith("/")&&(x||v)&&(y.pathname+="/"),y}const ll=s=>s.join("/").replace(/\/\/+/g,"/"),zy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Ty=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Ey=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function My(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const tx=["post","put","patch","delete"];new Set(tx);const Dy=["get",...tx];new Set(Dy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ps(){return ps=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},ps.apply(this,arguments)}const Yd=h.createContext(null),Ay=h.createContext(null),sl=h.createContext(null),Ko=h.createContext(null),ol=h.createContext({outlet:null,matches:[],isDataRoute:!1}),nx=h.createContext(null);function Oy(s,i){let{relative:o}=i===void 0?{}:i;mi()||At(!1);let{basename:d,navigator:u}=h.useContext(sl),{hash:f,pathname:m,search:S}=lx(s,{relative:o}),y=m;return d!=="/"&&(y=m==="/"?d:ll([d,m])),u.createHref({pathname:y,search:S,hash:f})}function mi(){return h.useContext(Ko)!=null}function na(){return mi()||At(!1),h.useContext(Ko).location}function ax(s){h.useContext(sl).static||h.useLayoutEffect(s)}function $d(){let{isDataRoute:s}=h.useContext(ol);return s?Ky():Uy()}function Uy(){mi()||At(!1);let s=h.useContext(Yd),{basename:i,future:o,navigator:d}=h.useContext(sl),{matches:u}=h.useContext(ol),{pathname:f}=na(),m=JSON.stringify(Bd(u,o.v7_relativeSplatPath)),S=h.useRef(!1);return ax(()=>{S.current=!0}),h.useCallback(function(x,v){if(v===void 0&&(v={}),!S.current)return;if(typeof x=="number"){d.go(x);return}let j=Gd(x,JSON.parse(m),f,v.relative==="path");s==null&&i!=="/"&&(j.pathname=j.pathname==="/"?i:ll([i,j.pathname])),(v.replace?d.replace:d.push)(j,v.state,v)},[i,d,m,f,s])}function lx(s,i){let{relative:o}=i===void 0?{}:i,{future:d}=h.useContext(sl),{matches:u}=h.useContext(ol),{pathname:f}=na(),m=JSON.stringify(Bd(u,d.v7_relativeSplatPath));return h.useMemo(()=>Gd(s,JSON.parse(m),f,o==="path"),[s,m,f,o])}function Ry(s,i){return Hy(s,i)}function Hy(s,i,o,d){mi()||At(!1);let{navigator:u}=h.useContext(sl),{matches:f}=h.useContext(ol),m=f[f.length-1],S=m?m.params:{};m&&m.pathname;let y=m?m.pathnameBase:"/";m&&m.route;let x=na(),v;if(i){var j;let M=typeof i=="string"?Tl(i):i;y==="/"||(j=M.pathname)!=null&&j.startsWith(y)||At(!1),v=M}else v=x;let E=v.pathname||"/",Y=E;if(y!=="/"){let M=y.replace(/^\//,"").split("/");Y="/"+E.replace(/^\//,"").split("/").slice(M.length).join("/")}let P=cy(s,{pathname:Y}),Z=Yy(P&&P.map(M=>Object.assign({},M,{params:Object.assign({},S,M.params),pathname:ll([y,u.encodeLocation?u.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:ll([y,u.encodeLocation?u.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),f,o,d);return i&&Z?h.createElement(Ko.Provider,{value:{location:ps({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:nl.Pop}},Z):Z}function Ly(){let s=Zy(),i=My(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},i),o?h.createElement("pre",{style:u},o):null,null)}const qy=h.createElement(Ly,null);class By extends h.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?h.createElement(ol.Provider,{value:this.props.routeContext},h.createElement(nx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gy(s){let{routeContext:i,match:o,children:d}=s,u=h.useContext(Yd);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),h.createElement(ol.Provider,{value:i},d)}function Yy(s,i,o,d){var u;if(i===void 0&&(i=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var f;if(!o)return null;if(o.errors)s=o.matches;else if((f=d)!=null&&f.v7_partialHydration&&i.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let m=s,S=(u=o)==null?void 0:u.errors;if(S!=null){let v=m.findIndex(j=>j.route.id&&(S==null?void 0:S[j.route.id])!==void 0);v>=0||At(!1),m=m.slice(0,Math.min(m.length,v+1))}let y=!1,x=-1;if(o&&d&&d.v7_partialHydration)for(let v=0;v<m.length;v++){let j=m[v];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(x=v),j.route.id){let{loaderData:E,errors:Y}=o,P=j.route.loader&&E[j.route.id]===void 0&&(!Y||Y[j.route.id]===void 0);if(j.route.lazy||P){y=!0,x>=0?m=m.slice(0,x+1):m=[m[0]];break}}}return m.reduceRight((v,j,E)=>{let Y,P=!1,Z=null,M=null;o&&(Y=S&&j.route.id?S[j.route.id]:void 0,Z=j.route.errorElement||qy,y&&(x<0&&E===0?(Fy("route-fallback"),P=!0,M=null):x===E&&(P=!0,M=j.route.hydrateFallbackElement||null)));let B=i.concat(m.slice(0,E+1)),R=()=>{let U;return Y?U=Z:P?U=M:j.route.Component?U=h.createElement(j.route.Component,null):j.route.element?U=j.route.element:U=v,h.createElement(Gy,{match:j,routeContext:{outlet:v,matches:B,isDataRoute:o!=null},children:U})};return o&&(j.route.ErrorBoundary||j.route.errorElement||E===0)?h.createElement(By,{location:o.location,revalidation:o.revalidation,component:Z,error:Y,children:R(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):R()},null)}var ix=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(ix||{}),sx=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(sx||{});function $y(s){let i=h.useContext(Yd);return i||At(!1),i}function Qy(s){let i=h.useContext(Ay);return i||At(!1),i}function Xy(s){let i=h.useContext(ol);return i||At(!1),i}function ox(s){let i=Xy(),o=i.matches[i.matches.length-1];return o.route.id||At(!1),o.route.id}function Zy(){var s;let i=h.useContext(nx),o=Qy(),d=ox();return i!==void 0?i:(s=o.errors)==null?void 0:s[d]}function Ky(){let{router:s}=$y(ix.UseNavigateStable),i=ox(sx.UseNavigateStable),o=h.useRef(!1);return ax(()=>{o.current=!0}),h.useCallback(function(u,f){f===void 0&&(f={}),o.current&&(typeof u=="number"?s.navigate(u):s.navigate(u,ps({fromRouteId:i},f)))},[s,i])}const th={};function Fy(s,i,o){th[s]||(th[s]=!0)}function Jy(s,i){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function nh(s){let{to:i,replace:o,state:d,relative:u}=s;mi()||At(!1);let{future:f,static:m}=h.useContext(sl),{matches:S}=h.useContext(ol),{pathname:y}=na(),x=$d(),v=Gd(i,Bd(S,f.v7_relativeSplatPath),y,u==="path"),j=JSON.stringify(v);return h.useEffect(()=>x(JSON.parse(j),{replace:o,state:d,relative:u}),[x,j,u,o,d]),null}function kt(s){At(!1)}function Vy(s){let{basename:i="/",children:o=null,location:d,navigationType:u=nl.Pop,navigator:f,static:m=!1,future:S}=s;mi()&&At(!1);let y=i.replace(/^\/*/,"/"),x=h.useMemo(()=>({basename:y,navigator:f,static:m,future:ps({v7_relativeSplatPath:!1},S)}),[y,S,f,m]);typeof d=="string"&&(d=Tl(d));let{pathname:v="/",search:j="",hash:E="",state:Y=null,key:P="default"}=d,Z=h.useMemo(()=>{let M=qd(v,y);return M==null?null:{location:{pathname:M,search:j,hash:E,state:Y,key:P},navigationType:u}},[y,v,j,E,Y,P,u]);return Z==null?null:h.createElement(sl.Provider,{value:x},h.createElement(Ko.Provider,{children:o,value:Z}))}function Py(s){let{children:i,location:o}=s;return Ry(kd(i),o)}new Promise(()=>{});function kd(s,i){i===void 0&&(i=[]);let o=[];return h.Children.forEach(s,(d,u)=>{if(!h.isValidElement(d))return;let f=[...i,u];if(d.type===h.Fragment){o.push.apply(o,kd(d.props.children,f));return}d.type!==kt&&At(!1),!d.props.index||!d.props.children||At(!1);let m={id:d.props.id||f.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(m.children=kd(d.props.children,f)),o.push(m)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cd(){return Cd=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},Cd.apply(this,arguments)}function Wy(s,i){if(s==null)return{};var o={},d=Object.keys(s),u,f;for(f=0;f<d.length;f++)u=d[f],!(i.indexOf(u)>=0)&&(o[u]=s[u]);return o}function Iy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function ev(s,i){return s.button===0&&(!i||i==="_self")&&!Iy(s)}const tv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],nv="6";try{window.__reactRouterVersion=nv}catch{}const av="startTransition",ah=Wg[av];function lv(s){let{basename:i,children:o,future:d,window:u}=s,f=h.useRef();f.current==null&&(f.current=sy({window:u,v5Compat:!0}));let m=f.current,[S,y]=h.useState({action:m.action,location:m.location}),{v7_startTransition:x}=d||{},v=h.useCallback(j=>{x&&ah?ah(()=>y(j)):y(j)},[y,x]);return h.useLayoutEffect(()=>m.listen(v),[m,v]),h.useEffect(()=>Jy(d),[d]),h.createElement(Vy,{basename:i,children:o,location:S.location,navigationType:S.action,navigator:m,future:d})}const iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ov=h.forwardRef(function(i,o){let{onClick:d,relative:u,reloadDocument:f,replace:m,state:S,target:y,to:x,preventScrollReset:v,viewTransition:j}=i,E=Wy(i,tv),{basename:Y}=h.useContext(sl),P,Z=!1;if(typeof x=="string"&&sv.test(x)&&(P=x,iv))try{let U=new URL(window.location.href),I=x.startsWith("//")?new URL(U.protocol+x):new URL(x),se=qd(I.pathname,Y);I.origin===U.origin&&se!=null?x=se+I.search+I.hash:Z=!0}catch{}let M=Oy(x,{relative:u}),B=rv(x,{replace:m,state:S,target:y,preventScrollReset:v,relative:u,viewTransition:j});function R(U){d&&d(U),U.defaultPrevented||B(U)}return h.createElement("a",Cd({},E,{href:P||M,onClick:Z||f?d:R,ref:o,target:y}))});var lh;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(lh||(lh={}));var ih;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(ih||(ih={}));function rv(s,i){let{target:o,replace:d,state:u,preventScrollReset:f,relative:m,viewTransition:S}=i===void 0?{}:i,y=$d(),x=na(),v=lx(s,{relative:m});return h.useCallback(j=>{if(ev(j,o)){j.preventDefault();let E=d!==void 0?d:Yo(x)===Yo(v);y(s,{replace:E,state:u,preventScrollReset:f,relative:m,viewTransition:S})}},[x,y,v,d,u,o,s,f,m,S])}function Ot(){const s=$d();return h.useMemo(()=>({push:i=>s(i),replace:i=>s(i,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function cv(){return na().pathname}function dv({href:s,...i}){return t.jsx(ov,{to:s,...i})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rx=(...s)=>s.filter((i,o,d)=>!!i&&i.trim()!==""&&d.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=h.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:u="",children:f,iconNode:m,...S},y)=>h.createElement("svg",{ref:y,...pv,width:i,height:i,stroke:s,strokeWidth:d?Number(o)*24/Number(i):o,className:rx("lucide",u),...S},[...m.map(([x,v])=>h.createElement(x,v)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(s,i)=>{const o=h.forwardRef(({className:d,...u},f)=>h.createElement(mv,{ref:f,iconNode:i,className:rx(`lucide-${uv(s)}`,d),...u}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=ge("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=ge("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=ge("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=ge("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=ge("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ge("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ge("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=ge("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=ge("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ge("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=ge("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=ge("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=ge("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ge("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=ge("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ge("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=ge("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ge("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ge("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ge("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ge("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=ge("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ge("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ge("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=ge("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=ge("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=ge("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=ge("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ge("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ge("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=ge("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=ge("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ge("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=ge("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ge("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ge("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=ge("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ge("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=ge("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ge("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ge("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=ge("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=ge("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=ge("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ge("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=ge("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=ge("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=ge("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=ge("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=ge("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=ge("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=ge("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=ge("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=ge("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=ge("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=ge("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=ge("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=ge("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=ge("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=ge("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=ge("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=ge("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=ge("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
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
 */const mx=ge("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=ge("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=ge("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=ge("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=ge("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=ge("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=ge("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=ge("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),e1="/api/v3";var Ph;const xe=typeof window<"u"&&((Ph=window.settings)==null?void 0:Ph.secure_path)||"ZicFree123",Go="authorization";function t1(s){if(typeof window>"u"||typeof document>"u")return null;const i=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let u=o[d];for(;u.charAt(0)===" ";)u=u.substring(1,u.length);if(u.indexOf(i)===0)try{const f=u.substring(i.length,u.length),m=decodeURIComponent(f),S=JSON.parse(m);return S&&typeof S=="object"&&"value"in S?S.value:m}catch{try{return decodeURIComponent(u.substring(i.length,u.length))}catch{return u.substring(i.length,u.length)}}}return null}function n1(s,i,o=36500){if(typeof window>"u"||typeof document>"u")return;const u=JSON.stringify({site:"ZicNet",value:i}),f=window.location.protocol==="https:",m=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",S=new Date;S.setTime(S.getTime()+o*24*60*60*1e3);const y=`expires=${S.toUTCString()}`,x=m?"":`domain=${window.location.hostname};`;let v=`${s}=${encodeURIComponent(u)}; ${y}; ${x} path=/`;f&&(v+="; secure"),v+="; SameSite=Lax",document.cookie=v;try{window.localStorage.setItem(`cookie_${s}`,u)}catch{}}function a1(s){if(typeof window>"u"||typeof document>"u")return;const i=window.location.hostname,o=["",i,i.startsWith(".")?i:`.${i}`],d=["/","/dashboard","/user","/admin"];o.forEach(u=>{d.forEach(f=>{const m=u?` domain=${u};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${m} path=${f};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function fx(){if(typeof window>"u")return null;let s=window.localStorage.getItem(Go);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(Go,s)}catch{}if(!s&&(s=t1("auth_data"),s))try{window.localStorage.setItem(Go,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function l1(s,i){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${e1}${o}`,window.location.origin);return Object.entries(i??{}).forEach(([u,f])=>{f!==void 0&&d.searchParams.set(u,String(f))}),d.toString()}function Ut(){return!!fx()}function i1(s){typeof window>"u"||(window.localStorage.setItem(Go,s),window.localStorage.setItem("auth_data",s),n1("auth_data",s,36500))}function hx(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(u=>{window.localStorage.removeItem(u)}),["token","auth_data","authorization","vuex","user","auth"].forEach(u=>{window.sessionStorage.removeItem(u)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(u=>{o.forEach(f=>{document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${f};`}),document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,a1(u)})}async function fe(s,i={}){const o={},d=i.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),i.auth!==!1){const y=fx();y&&(o.authorization=y)}const u=await fetch(l1(s,i.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(i.body??{}),cache:"no-store"}),m=(u.headers.get("content-type")||"").includes("application/json"),S=m?await u.json():await u.text();if(!u.ok){const y=typeof S=="object"&&S&&"message"in S?String(S.message):`Request failed with status ${u.status}`,x=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(y);throw(u.status===401||u.status===403&&!x)&&i.auth!==!1&&(hx(),window.location.hash="/login"),new Error(y)}if(!m&&typeof S=="string"&&(S.trim().startsWith("<!DOCTYPE html")||S.trim().startsWith("<html")||S.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return S}async function s1(s,i){return fe("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:i}})}async function o1(){const s=`/${xe}/stat`,[i,o,d,u,f,m]=await Promise.all([fe(`${s}/getOverride`),fe(`${s}/getOrder`),fe(`${s}/getServerTodayRank`),fe(`${s}/getServerLastRank`),fe(`${s}/getUserTodayRank`),fe(`${s}/getUserLastRank`)]);return{override:i.data,order:o.data,serverToday:d.data,serverYesterday:u.data,userToday:f.data,userYesterday:m.data}}async function xx(){return(await fe(`/${xe}/config/fetch`)).data}async function bx(s){return fe(`/${xe}/config/save`,{method:"POST",body:s})}async function r1(){return(await fe(`/${xe}/config/getEmailTemplate`)).data}async function c1(){return(await fe(`/${xe}/plan/fetch`)).data.map(i=>({id:i.id,name:i.name}))}async function d1(){return fe(`/${xe}/config/testSendMail`,{method:"POST",body:{}})}async function u1(s){return fe(`/${xe}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function p1(){return(await fe(`/${xe}/payment/fetch`)).data}async function m1(){return(await fe(`/${xe}/payment/getPaymentMethods`)).data}async function fh(s,i){return(await fe(`/${xe}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:i}})).data}async function f1(s){return fe(`/${xe}/payment/save`,{method:"POST",body:s})}async function h1(s){return fe(`/${xe}/payment/show`,{method:"POST",body:{id:s}})}async function x1(s){return fe(`/${xe}/payment/drop`,{method:"POST",body:{id:s}})}async function b1(s){return fe(`/${xe}/payment/sort`,{method:"POST",body:{ids:s}})}async function g1(){return(await fe(`/${xe}/theme/getThemes`)).data}async function y1(s){return(await fe(`/${xe}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function v1(s,i){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(i))));return fe(`/${xe}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function hs(){return(await fe(`/${xe}/server/group/fetch`)).data}async function gx(s){return fe(`/${xe}/server/group/save`,{method:"POST",body:s})}async function j1(s){return fe(`/${xe}/server/group/drop`,{method:"POST",body:{id:s}})}const yx=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function vx(){return(await fe(`/${xe}/server/route/fetch`)).data}async function w1(s){return fe(`/${xe}/server/route/save`,{method:"POST",body:s})}async function _1(s){return fe(`/${xe}/server/route/drop`,{method:"POST",body:{id:s}})}async function El(){return(await fe(`/${xe}/plan/fetch`)).data}async function N1(s){return fe(`/${xe}/plan/save`,{method:"POST",body:s})}async function S1(s){return fe(`/${xe}/plan/drop`,{method:"POST",body:{id:s}})}async function cd(s,i){return fe(`/${xe}/plan/update`,{method:"POST",body:{id:s,...i}})}async function hh(s){return fe(`/${xe}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function k1(s={}){const i=new URLSearchParams;return i.set("current",String(s.current??1)),i.set("pageSize",String(s.pageSize??15)),s.is_commission&&i.set("is_commission","1"),s.filter&&s.filter.forEach((d,u)=>{i.set(`filter[${u}][key]`,d.key),i.set(`filter[${u}][condition]`,d.condition),i.set(`filter[${u}][value]`,d.value)}),await fe(`/${xe}/order/fetch?${i.toString()}`)}async function C1(s){return fe(`/${xe}/order/paid`,{method:"POST",body:{trade_no:s}})}async function z1(s){return fe(`/${xe}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function jx(s){return fe(`/${xe}/order/assign`,{method:"POST",body:s})}async function T1(s,i){return fe(`/${xe}/order/update`,{method:"POST",body:{trade_no:s,commission_status:i}})}async function E1(s){return fe(`/${xe}/order/detail`,{method:"POST",body:{id:s}})}async function wx(s=1,i=15){return fe(`/${xe}/coupon/fetch?current=${s}&pageSize=${i}`)}async function M1(s){return fe(`/${xe}/coupon/generate`,{method:"POST",body:s})}async function D1(s){return fe(`/${xe}/coupon/drop`,{method:"POST",body:{id:s}})}async function A1(s){return fe(`/${xe}/coupon/show`,{method:"POST",body:{id:s}})}async function O1(s=1,i=15){return fe(`/${xe}/giftcard/fetch?current=${s}&pageSize=${i}`)}async function U1(s){return fe(`/${xe}/giftcard/generate`,{method:"POST",body:s})}async function R1(s){return fe(`/${xe}/giftcard/drop`,{method:"POST",body:{id:s}})}async function Md(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o&&o.forEach((u,f)=>{d.set(`filter[${f}][key]`,u.key),d.set(`filter[${f}][condition]`,u.condition),d.set(`filter[${f}][value]`,u.value)}),fe(`/${xe}/user/fetch?${d.toString()}`)}async function H1(s){return fe(`/${xe}/user/update`,{method:"POST",body:s})}async function _x(s){return fe(`/${xe}/user/getUserInfoById`,{params:{id:s}})}async function L1(s){return fe(`/${xe}/user/delUser`,{method:"POST",body:{id:s}})}async function q1(s){return fe(`/${xe}/user/generate`,{method:"POST",body:s})}async function B1(s){return fe(`/${xe}/user/resetSecret`,{method:"POST",body:{id:s}})}async function G1(s=1,i=15,o,d=!1){const u=new URLSearchParams;return u.set("current",String(s)),u.set("pageSize",String(i)),d&&u.set("include_subscribe_url","1"),o==null||o.forEach((f,m)=>{u.set(`filter[${m}][key]`,f.key),u.set(`filter[${m}][condition]`,f.condition),u.set(`filter[${m}][value]`,f.value)}),fe(`/${xe}/subscription/fetch?${u.toString()}`)}async function Y1(s){return fe(`/${xe}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function $1(s){return fe(`/${xe}/subscription/update`,{method:"POST",body:s})}async function Q1(s){return fe(`/${xe}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function Nx(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o==null||o.forEach((u,f)=>{d.set(`filter[${f}][key]`,u.key),d.set(`filter[${f}][condition]`,u.condition),d.set(`filter[${f}][value]`,u.value)}),fe(`/${xe}/device/fetch?${d.toString()}`)}async function Sx(s){return fe(`/${xe}/device/drop`,{method:"POST",body:{id:s}})}async function kx(s){return fe(`/${xe}/device/ban`,{method:"POST",body:{id:s}})}async function X1(s){return fe(`/${xe}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function Z1(s,i=1,o=10){return fe(`/${xe}/stat/getStatUser`,{params:{user_id:s,current:i,pageSize:o}})}async function K1(){return(await fe(`/${xe}/notice/fetch`)).data}async function F1(s){return fe(`/${xe}/notice/save`,{method:"POST",body:s})}async function J1(s){return fe(`/${xe}/notice/drop`,{method:"POST",body:{id:s}})}async function V1(s){return fe(`/${xe}/notice/show`,{method:"POST",body:{id:s}})}async function P1(){return(await fe(`/${xe}/ticket/fetch`)).data}async function xh(s){return(await fe(`/${xe}/ticket/fetch`,{params:{id:s}})).data}async function W1(s,i){return fe(`/${xe}/ticket/reply`,{method:"POST",body:{id:s,message:i}})}async function I1(s){return fe(`/${xe}/ticket/close`,{method:"POST",body:{id:s}})}async function e0(){return(await fe(`/${xe}/knowledge/fetch`)).data}async function t0(s){return(await fe(`/${xe}/knowledge/fetch`,{params:{id:s}})).data}async function n0(s){return fe(`/${xe}/knowledge/save`,{method:"POST",body:s})}async function a0(s){return fe(`/${xe}/knowledge/drop`,{method:"POST",body:{id:s}})}async function l0(s){return fe(`/${xe}/knowledge/show`,{method:"POST",body:{id:s}})}async function i0(){return(await fe(`/${xe}/webcon/fetch`)).data}async function s0(s){return fe(`/${xe}/webcon/save`,{method:"POST",body:s})}async function o0(s){return fe(`/${xe}/webcon/drop`,{method:"POST",body:{id:s}})}async function r0(s){return fe(`/${xe}/webcon/show`,{method:"POST",body:{id:s}})}async function c0(){return fe(`/${xe}/system/getSystemStatus`)}async function d0(){return(await fe(`/${xe}/system/getCoreLicenseStatus`)).data}async function u0(){return(await fe(`/${xe}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function p0(){return fe(`/${xe}/system/getQueueStats`)}async function m0(){return fe(`/${xe}/system/getQueueWorkload`)}async function f0(){return fe(`/${xe}/system/getSystemLog`)}async function bh(){return fe(`/${xe}/server/manage/getNodes`)}async function h0(s,i){return fe(`/${xe}/server/${s}/save`,{method:"POST",body:i})}async function x0(s,i){return fe(`/${xe}/server/${s}/drop`,{method:"POST",body:{id:i}})}async function b0(s,i,o){return fe(`/${xe}/server/${s}/update`,{method:"POST",body:{id:i,show:o}})}async function g0(s,i){return fe(`/${xe}/server/${s}/copy`,{method:"POST",body:{id:i}})}async function y0(s){return fe(`/${xe}/server/manage/sort`,{method:"POST",body:s})}const Zd=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],Cx="admin-locale",Dd="vi-VN",v0="/assets/adminzic",zx=h.createContext(null);function j0(){if(typeof window>"u")return Dd;const s=localStorage.getItem(Cx);return s&&Zd.some(i=>i.code===s)?s:Dd}function w0(s,i){return i?Object.entries(i).reduce((o,[d,u])=>o.replaceAll(`{${d}}`,String(u)),s):s}function _0(s){return new Promise((i,o)=>{var m;if(typeof window>"u"){i({});return}const d=(m=window.AdminNextI18n)==null?void 0:m[s];if(d){i(d);return}const u=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(u){u.addEventListener("load",()=>{var S;i(((S=window.AdminNextI18n)==null?void 0:S[s])??{})}),u.addEventListener("error",o);return}const f=document.createElement("script");f.src=`${v0}/i18n/${s}.js`,f.async=!0,f.dataset.adminNextLocale=s,f.onload=()=>{var S;return i(((S=window.AdminNextI18n)==null?void 0:S[s])??{})},f.onerror=o,document.head.appendChild(f)})}function N0({children:s}){const[i,o]=h.useState(Dd),[d,u]=h.useState({}),[f,m]=h.useState(!0);h.useEffect(()=>{o(j0())},[]);const S=h.useCallback(v=>{o(v),typeof window<"u"&&localStorage.setItem(Cx,v)},[]);h.useEffect(()=>{let v=!0;return m(!0),_0(i).then(j=>{v&&u(j)}).finally(()=>{v&&m(!1)}),()=>{v=!1}},[i]);const y=h.useCallback((v,j)=>w0(d[v]??v,j),[d]),x=h.useMemo(()=>({locale:i,loading:f,setLocale:S,t:y}),[i,f,S,y]);return t.jsx(zx.Provider,{value:x,children:s})}function $e(){const s=h.useContext(zx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function S0(){const s=Ot(),{t:i,locale:o,setLocale:d}=$e(),[u,f]=h.useState(""),[m,S]=h.useState(""),[y,x]=h.useState(""),[v,j]=h.useState(!1),[E,Y]=h.useState(!1),P=h.useRef(null);h.useEffect(()=>{function M(B){P.current&&!P.current.contains(B.target)&&Y(!1)}return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]),h.useEffect(()=>{Ut()&&s.replace("/dashboard")},[s]);async function Z(M){var B,R,U,I;M.preventDefault(),x(""),j(!0);try{const se=await s1(u,m),ce=((B=se.data)==null?void 0:B.auth_data)??((R=se.data)==null?void 0:R.token),A=((U=se.data)==null?void 0:U.is_admin)===1||((I=se.data)==null?void 0:I.is_admin)===!0;if(!ce||!A)throw new Error(i("login.adminRequired"));i1(ce),s.replace("/dashboard")}catch(se){x(se instanceof Error?se.message:i("login.failed"))}finally{j(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:i("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:i("login.eyebrow")}),t.jsx("h1",{children:i("login.heading")}),t.jsx("span",{children:i("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":i("login.formLabel"),children:[t.jsxs("div",{ref:P,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.language"),onClick:()=>Y(M=>!M),children:t.jsx(xs,{size:17})}),E?t.jsx("div",{className:"locale-menu",children:Zd.map(M=>t.jsxs("button",{className:`locale-option ${o===M.code?"active":""}`,type:"button",onClick:()=>{d(M.code),Y(!1)},children:[t.jsx("span",{className:"locale-flag",children:M.flag}),t.jsx("span",{children:M.label})]},M.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(Yv,{size:18}),t.jsx("span",{children:i("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:i("login.title")}),t.jsx("p",{children:i("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:Z,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(ux,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:M=>f(M.target.value),placeholder:i("login.emailPlaceholder"),required:!0,type:"email",value:u})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Dv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:M=>S(M.target.value),placeholder:i("login.passwordPlaceholder"),required:!0,type:"password",value:m})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,t.jsx("button",{className:"primary-button",disabled:v,type:"submit",children:i(v?"login.signingIn":"login.submit")})]})]})]})}function zn(s){const i=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(i)}function ea(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function k0(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const C0=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:kv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Zv},{href:"/config/payment",label:"nav.paymentConfig",icon:jv},{href:"/config/theme",label:"nav.themeConfig",icon:Vv}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:Xd},{href:"/server/group",label:"nav.groupManagement",icon:Wv},{href:"/server/route",label:"nav.routeManagement",icon:Xv}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:uh},{href:"/order",label:"nav.orders",icon:Mv},{href:"/coupon",label:"nav.coupons",icon:Cv},{href:"/giftcard",label:"nav.giftcards",icon:Fv}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:mx},{href:"/subscription",label:"nav.subscriptions",icon:uh},{href:"/device",label:"nav.devices",icon:Kv},{href:"/webcon",label:"nav.webcon",icon:xs},{href:"/notice",label:"nav.notices",icon:os},{href:"/ticket",label:"nav.tickets",icon:Ev},{href:"/knowledge",label:"nav.knowledge",icon:xv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:bv}]}];function z0(){const[s,i]=h.useState("light");h.useEffect(()=>{const f=localStorage.getItem("admin-theme")??"light";i(f),document.documentElement.setAttribute("data-theme",f)},[]);const o=h.useCallback(u=>{i(u),localStorage.setItem("admin-theme",u),document.documentElement.setAttribute("data-theme",u)},[]),d=h.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function Tx(s){return s?new Date(s*1e3):null}function T0(s,i){const o=Tx(i);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function E0(s){const i=Tx(s);return i?Math.ceil((i.getTime()-Date.now())/864e5):null}function Jt({children:s,title:i,subtitle:o}){const[d,u]=h.useState(!1),f=Ot(),m=cv(),{t:S,locale:y,setLocale:x}=$e(),{theme:v,toggle:j}=z0(),[E,Y]=h.useState(!1),P=h.useRef(null),[Z,M]=h.useState(null),[B,R]=h.useState(!1),U=h.useCallback(async(w=!1)=>{if(Ut()){R(w);try{M(w?await u0():await d0())}catch(H){M({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:S("license.unavailable"),error:H instanceof Error?H.message:S("license.unavailable")})}finally{R(!1)}}},[S]);h.useEffect(()=>{function w(H){P.current&&!P.current.contains(H.target)&&Y(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),h.useEffect(()=>{U(!1);const w=window.setInterval(()=>{U(!1)},6e4);return()=>window.clearInterval(w)},[U]);function I(){hx(),f.replace("/login")}const se=(Z==null?void 0:Z.license_expires_at)??(Z==null?void 0:Z.expires_at),ce=T0(y,se),A=typeof(Z==null?void 0:Z.days_until_expiry)=="number"?Z.days_until_expiry:E0(se),$=typeof A=="number"?A<=0?S("license.expiresToday"):S("license.daysLeft",{days:A}):null,ne=!!Z&&Z.available&&!Z.requires_renewal,he=ne&&!!(Z!=null&&Z.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>u(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:S("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:C0.map(w=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:S(w.label)}),w.items.map(H=>{const te=H.icon,G=m===H.href;return t.jsxs(dv,{className:`nav-item ${G?"active":""}`,href:H.href,onClick:()=>u(!1),children:[t.jsx(te,{size:17}),t.jsx("span",{children:S(H.label)})]},H.href)})]},w.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":S(d?"common.closeMenu":"common.openMenu"),onClick:()=>u(w=>!w),children:d?t.jsx(ct,{size:19}):t.jsx(Ov,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:i}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[ne?t.jsxs("button",{className:`license-chip ${he?"warning":""}`,type:"button",disabled:B,title:S("license.refresh"),onClick:()=>void U(!0),children:[t.jsx(rh,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:S("license.validUntil")}),t.jsx("strong",{children:ce??S("license.unknownExpiry")})]}),$?t.jsx("small",{children:$}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:P,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":S("common.language"),onClick:()=>Y(w=>!w),children:t.jsx(xs,{size:17})}),E?t.jsx("div",{className:"locale-menu",children:Zd.map(w=>t.jsxs("button",{className:`locale-option ${y===w.code?"active":""}`,type:"button",onClick:()=>{x(w.code),Y(!1)},children:[t.jsx("span",{className:"locale-flag",children:w.flag}),t.jsx("span",{children:w.label})]},w.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":v==="dark"?"Switch to light mode":"Switch to dark mode",onClick:j,children:v==="dark"?t.jsx(Jv,{size:17}):t.jsx(Uv,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,children:[t.jsx(Av,{size:16}),t.jsx("span",{children:S("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[Z!=null&&Z.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(Td,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:S("license.renewTitle")}),t.jsx("p",{children:S("license.renewBody")}),t.jsxs("small",{children:[S("license.currentStatus"),": ",Z.status,Z.error?` - ${Z.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:B,onClick:()=>void U(!0),children:[t.jsx(Tt,{size:16}),S(B?"license.refreshing":"license.refresh")]})]}):null,he?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(rh,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:S("license.expiryWarningTitle")}),t.jsx("p",{children:S("license.expiryWarningBody",{date:ce??S("license.unknownExpiry"),days:A??""})}),t.jsxs("small",{children:[S("license.currentStatus"),": ",Z.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:B,onClick:()=>void U(!0),children:[t.jsx(Tt,{size:16}),S(B?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const gh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function Ex(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function rs(s){return Number(s??0)}function yh(s){return rs(s)/100}function vh(s){return`${ea(Math.round(s))} VND`}function Mx(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function M0(s){const i=new Date;return i.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const u=new Date(i);return u.setDate(i.getDate()-(s-d-1)),Mx(u)})}function jh(s,i){const o=s.get(i);if(o)return o;const d=Ex(i);return s.set(i,d),d}function D0(s){const i=s.toLowerCase();return i==="register_count"||i.includes("đăng")||i.includes("register")?"registrations":i==="order_count"?"orderCount":i==="paid_count"||i.includes("giao dịch thu")?"paidCount":i==="paid_total"||i.includes("tiền thu")?"paidAmount":i==="commission_count"||i.includes("giao dịch hoa hồng")?"commissionCount":i==="commission_total"||i.includes("tiền hoa hồng")?"commissionAmount":null}function Do({label:s,value:i,helper:o,tone:d="default",onClick:u}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:u,style:u?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:i})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(hv,{size:19})}),o?t.jsx("small",{children:o}):null]})}function jt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(Tt,{size:18}),t.jsx("span",{children:s})]})}function A0(s,i){const o=new Map,d=new Map;if(s.forEach(u=>{const f=jh(o,u.date),m=D0(u.type);if(m){f[m]=Number(u.value||0);return}const S=d.get(u.date)??0,y=gh[S%gh.length];f[y]=Number(u.value||0),d.set(u.date,S+1)}),i){const u=jh(o,Mx(new Date));u.registrations=rs(i.day_register_total),i.day_order_total!==void 0&&(u.orderCount=rs(i.day_order_total)),i.day_paid_order_total!==void 0&&(u.paidCount=rs(i.day_paid_order_total)),u.paidAmount=yh(i.day_paid_income??i.day_income),i.day_commission_payout!==void 0&&(u.commissionAmount=yh(i.day_commission_payout)),i.day_commission_count!==void 0&&(u.commissionCount=rs(i.day_commission_count))}return o.size===0?[]:M0(31).map(u=>o.get(u)??Ex(u))}function O0({records:s,override:i}){const{t:o}=$e(),[d,u]=h.useState("paidAmount"),[f,m]=h.useState(null),[S,y]=h.useState(0),[x,v]=h.useState(0),j=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#2f8f83",format:vh},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#2563eb",format:ea},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#7c3aed",format:ea},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#c2410c",format:vh},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#be123c",format:ea},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#0891b2",format:ea}],E=j.find($=>$.key===d)??j[0],Y=A0(s,i),P=$=>Number($[E.key]||0),Z=Math.max(...Y.map(P),1),M=720,B=220,R=28,U=Y.length>1?(M-R*2)/(Y.length-1):0,I=$=>B-R-$/Z*(B-R*2),se=Y.map(($,ne)=>`${R+ne*U},${I(P($))}`).join(" "),ce=Math.max(Math.ceil(Y.length/6),1),A=`dashboardTrendFill-${E.key}`;return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:Y.length})})]}),t.jsx("div",{className:"chart-metric-tabs",role:"tablist","aria-label":o("dashboard.chartMetrics"),children:j.map($=>t.jsx("button",{type:"button",className:d===$.key?"active":"",onClick:()=>{u($.key),m(null)},children:$.label},$.key))}),Y.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):null,t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${M} ${B}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:A,x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:E.color,stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:E.color,stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map($=>t.jsx("line",{className:"chart-grid",x1:R,x2:M-R,y1:R+$*(B-R*2),y2:R+$*(B-R*2)},$)),Y.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",style:{fill:`url(#${A})`},points:`${R},${B-R} ${se} ${M-R},${B-R}`}),t.jsx("polyline",{className:"chart-line",points:se,style:{stroke:E.color}}),Y.map(($,ne)=>{const he=R+ne*U,w=I(P($));return t.jsxs("g",{children:[t.jsx("circle",{cx:he,cy:w,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{m($),y(he),v(w)},onMouseLeave:()=>{m(null)}}),t.jsx("circle",{cx:he,cy:w,r:(f==null?void 0:f.date)===$.date?6:4,fill:E.color,stroke:"var(--surface)",strokeWidth:(f==null?void 0:f.date)===$.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},$.date)})]}):null]}),f?t.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${S/M*100}%`,top:`${x/B*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",f.date]}),t.jsxs("div",{className:"tooltip-value",children:[E.label,": ",E.format(P(f))]})]}):null]}),t.jsx("div",{className:"chart-axis",children:Y.filter(($,ne)=>ne===0||ne===Y.length-1||ne%ce===0).map($=>t.jsx("span",{children:$.date},$.date))}),Y.length>0?t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:E.summaryLabel}),t.jsx("strong",{children:E.format(Z)})]}):null]})}function Ao({title:s,subtitle:i,records:o,labelKey:d}){const{t:u}=$e(),f=Math.max(...o.map(m=>Number(m.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:i})]})}),t.jsx("div",{className:"rank-list",children:o.length===0?t.jsx("div",{className:"empty-state",children:u("dashboard.noTraffic")}):o.slice(0,8).map((m,S)=>{const y=d==="server_name"?m.server_name||u("dashboard.unnamedNode"):m.email||u("dashboard.unknownUser"),x=Number(m.total||0)/f*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:S+1}),t.jsx("strong",{children:y}),t.jsxs("small",{children:[k0(m.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(x,3)}%`}})})]},`${y}-${S}`)})})]})}function dd({label:s,current:i,previous:o}){const{t:d}=$e();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof i=="number"?ea(i):i}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?ea(o):o]})]})}function U0(){var x,v,j,E,Y,P,Z,M,B,R,U,I;const s=Ot(),{t:i}=$e(),[o,d]=h.useState(null),[u,f]=h.useState(""),[m,S]=h.useState(!0),y=h.useCallback(async()=>{S(!0),f("");try{d(await o1())}catch(se){f(se instanceof Error?se.message:i("dashboard.loadFailed"))}finally{S(!1)}},[i]);return h.useEffect(()=>{if(!Ut()){s.replace("/login");return}y()},[y,s]),t.jsxs(Jt,{title:i("dashboard.title"),subtitle:i("dashboard.subtitle"),children:[u?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:u}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:y,children:[t.jsx(Tt,{size:16}),i("common.retry")]})]}):null,m&&!o?t.jsx(jt,{label:i("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((x=o.override)==null?void 0:x.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:i("dashboard.pendingTickets",{count:(v=o.override)==null?void 0:v.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:i("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("dashboard.today")}),t.jsx("p",{children:i("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:y,disabled:m,children:[t.jsx(Tt,{size:16}),i(m?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(Do,{label:i("dashboard.onlineUsers"),value:ea(((j=o.override)==null?void 0:j.online_user)??0),helper:i("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(Do,{label:i("dashboard.todayIncome"),value:`${zn(((E=o.override)==null?void 0:E.day_paid_income)??((Y=o.override)==null?void 0:Y.day_income)??0)} VND`,helper:i("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(Do,{label:i("dashboard.todayRegistrations"),value:ea(((P=o.override)==null?void 0:P.day_register_total)??0),helper:i("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(Do,{label:i("dashboard.pendingCommission"),value:ea(((Z=o.override)==null?void 0:Z.commission_pending_total)??0),helper:i("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(dd,{label:i("dashboard.monthIncome"),current:`${zn(((M=o.override)==null?void 0:M.month_income)??0)} VND`,previous:`${zn(((B=o.override)==null?void 0:B.last_month_income)??0)} VND`}),t.jsx(dd,{label:i("dashboard.monthCommission"),current:`${zn(((R=o.override)==null?void 0:R.commission_month_payout)??0)} VND`,previous:`${zn(((U=o.override)==null?void 0:U.commission_last_month_payout)??0)} VND`}),t.jsx(dd,{label:i("dashboard.monthRegistrations"),current:((I=o.override)==null?void 0:I.month_register_total)??0,previous:"-"})]}),t.jsx(O0,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(Ao,{title:i("dashboard.serverRankToday"),subtitle:i("dashboard.trafficGb"),records:o.serverToday,labelKey:"server_name"}),t.jsx(Ao,{title:i("dashboard.serverRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.serverYesterday,labelKey:"server_name"}),t.jsx(Ao,{title:i("dashboard.userRankToday"),subtitle:i("dashboard.trafficGb"),records:o.userToday,labelKey:"email"}),t.jsx(Ao,{title:i("dashboard.userRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.userYesterday,labelKey:"email"})]})]}):null]})}const R0=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function wh(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function H0(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function ud(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function L0(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function q0(s){return[{label:s("config.happPing.proxyHead"),value:"proxy-head"},{label:s("config.happPing.proxy"),value:"proxy"},{label:s("config.happPing.tcp"),value:"tcp"},{label:s("config.happPing.icmp"),value:"icmp"}]}function B0(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function on(s){return s===!0||s===1||s==="1"}function G0(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function pd(s){return s.split(",").map(i=>i.trim()).filter(Boolean)}function Y0({field:s,value:i,onChange:o}){const{t:d}=$e(),u=s.toInput?s.toInput(i):G0(i);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${on(i)?"on":""}`,type:"button",onClick:()=>o(on(i)?0:1),"aria-pressed":on(i),children:[t.jsx("span",{}),on(i)?wh(d)[0].label:wh(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:u,onChange:f=>o(f.target.value),children:(s.options??[]).map(f=>t.jsx("option",{value:f.value,children:f.label},String(f.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:f=>o(s.fromInput?s.fromInput(f.target.value):f.target.value),placeholder:s.placeholder,rows:4,value:u}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:f=>o(s.fromInput?s.fromInput(f.target.value):f.target.value),placeholder:s.placeholder,type:s.type,value:u}):null]})]})}function $0({plans:s,emailTemplates:i,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(u=>({label:u.name,value:u.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:u=>Number(u.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:u=>on(u.email_whitelist_enable),fromInput:pd},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:u=>on(u.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:u=>on(u.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>on(u.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>on(u.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>on(u.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>on(u.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:o("config.subscribe.happProfileTitle"),description:o("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:o("config.subscribe.happHideSettings"),description:o("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:o("config.subscribe.happAnnounce"),description:o("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:o("config.subscribe.happProviderId"),description:o("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:o("config.subscribe.happColorProfile"),description:o("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:o("config.subscribe.happPingType"),description:o("config.subscribe.happPingTypeHelp"),type:"select",options:q0(o)},{key:"happ_check_url",label:o("config.subscribe.happCheckUrl"),description:o("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:u=>String(u.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:H0(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:ud(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:ud(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:ud(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:L0(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:u=>Number(u.show_subscribe_method||0)===2}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:pd}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:B0(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:pd},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:u=>on(u.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:u=>on(u.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:u=>on(u.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:o("config.server.zicnodeAutoTls"),description:o("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:o("config.server.zicnodeAutoTlsProvider"),description:o("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:u=>on(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:o("config.server.zicnodeAutoTlsDnsEnv"),description:o("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:u=>on(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:o("config.server.zicnodeAutoTlsSelfFallback"),description:o("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:u=>on(u.zicnode_auto_tls_enable)}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:i.map(u=>({label:u,value:u}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function Q0(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState("site"),[u,f]=h.useState(null),[m,S]=h.useState([]),[y,x]=h.useState([]),[v,j]=h.useState(!0),[E,Y]=h.useState(null),[P,Z]=h.useState(""),M=h.useCallback(async()=>{j(!0),Z("");try{const[$,ne,he]=await Promise.all([xx(),c1(),r1()]);f($),S(ne),x(he)}catch($){Z($ instanceof Error?$.message:i("config.loadFailed"))}finally{j(!1)}},[i]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}M()},[M,s]),h.useEffect(()=>{const $=document.querySelector(".config-tabs button.active");$&&$.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const B=h.useMemo(()=>$0({plans:m,emailTemplates:y,t:i}),[m,y,i]),R=B.find($=>$.key===o)??B[0],U=(u==null?void 0:u[R.key])??{};function I($,ne,he){f(w=>w&&{...w,[$]:{...w[$],[ne]:he}})}async function se(){var $;if(u){Y(R.key),Z("");try{await bx(u[R.key]),($=window.showToast)==null||$.call(window,i("config.saveSuccess"),"success")}catch(ne){Z(ne instanceof Error?ne.message:i("config.saveFailed"))}finally{Y(null)}}}async function ce(){var $;Y("mail"),Z("");try{await d1(),($=window.showToast)==null||$.call(window,i("config.email.testSuccess"),"success")}catch(ne){Z(ne instanceof Error?ne.message:i("config.email.testFailed"))}finally{Y(null)}}async function A(){var ne;const $=String((u==null?void 0:u.telegram.telegram_bot_token)??"");Y("webhook"),Z("");try{await u1($),(ne=window.showToast)==null||ne.call(window,i("config.telegram.webhookSuccess"),"success")}catch(he){Z(he instanceof Error?he.message:i("config.telegram.webhookFailed"))}finally{Y(null)}}return t.jsxs(Jt,{title:i("config.title"),subtitle:i("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("config.systemConfig")}),t.jsx("p",{children:i("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:M,disabled:v,children:[t.jsx(Tt,{size:16}),i(v?"common.refreshing":"common.refresh")]})]}),P?t.jsx("div",{className:"form-error",children:P}):null,v&&!u?t.jsx(jt,{label:i("config.loading")}):null,u?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":i("config.tabsLabel"),children:R0.map($=>{const ne=B.find(he=>he.key===$);return ne?t.jsxs("button",{className:o===$?"active":"",type:"button",onClick:()=>d($),children:[t.jsx("span",{children:ne.label}),t.jsx("small",{children:ne.hint})]},$):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:R.label}),t.jsx("p",{children:R.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:E===R.key,type:"button",onClick:se,children:[t.jsx(En,{size:16}),E===R.key?i("config.saving"):i("config.saveTab")]})]}),R.warning?t.jsx("div",{className:"config-warning",children:R.warning}):null,t.jsx("div",{className:"config-fields",children:R.fields.map($=>$.visible&&!$.visible(U)?null:t.jsx(Y0,{field:$,value:U[$.key],onChange:ne=>I(R.key,$.key,ne)},$.key))}),R.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:E==="mail",onClick:ce,children:[t.jsx(ux,{size:16}),i(E==="mail"?"config.email.testing":"config.email.test")]})}):null,R.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:E==="webhook",onClick:A,children:[t.jsx(Pv,{size:16}),i(E==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(px,{size:14}),i("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function il(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const i=document.createElement("textarea");i.value=s,i.setAttribute("readonly",""),i.style.position="fixed",i.style.left="-9999px",i.style.top="0",document.body.appendChild(i),i.select(),i.setSelectionRange(0,i.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(i)}}function md(s){return s===!0||s===1||s==="1"}function X0(s,i=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??i,config:{...(s==null?void 0:s.config)??{}}}}function Z0(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function K0(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState([]),[u,f]=h.useState([]),[m,S]=h.useState(null),[y,x]=h.useState({}),[v,j]=h.useState(!0),[E,Y]=h.useState(!1),[P,Z]=h.useState(!1),[M,B]=h.useState(""),[R,U]=h.useState(""),[I,se]=h.useState({}),ce=h.useCallback(async()=>{j(!0),B("");try{const[G,oe]=await Promise.all([p1(),m1()]);d(G),f(oe),se({})}catch(G){B(G instanceof Error?G.message:i("payment.loadFailed"))}finally{j(!1)}},[i]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}ce()},[ce,s]);async function A(G){const oe=(G==null?void 0:G.payment)??u[0]??"",k=X0(G,oe);if(S(k),x({}),B(""),U(""),!!oe){Y(!0);try{x(await fh(oe,G==null?void 0:G.id))}catch(V){B(V instanceof Error?V.message:i("payment.formLoadFailed"))}finally{Y(!1)}}}async function $(G){if(m){S({...m,payment:G,config:{}}),Y(!0),B("");try{x(await fh(G,m.id))}catch(oe){B(oe instanceof Error?oe.message:i("payment.formLoadFailed"))}finally{Y(!1)}}}async function ne(G){var oe,k;if(G.preventDefault(),!!m){Z(!0),B(""),U("");try{await f1(Z0(m)),S(null),(oe=window.showToast)==null||oe.call(window,i("payment.saveSuccess"),"success"),await ce()}catch(V){(k=window.showToast)==null||k.call(window,V instanceof Error?V.message:i("payment.saveFailed"),"error")}finally{Z(!1)}}}async function he(G){var oe;B(""),U("");try{await h1(G),await ce()}catch(k){(oe=window.showToast)==null||oe.call(window,k instanceof Error?k.message:i("payment.toggleFailed"),"error")}}async function w(G){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:i("payment.deleteConfirm"),onConfirm:async()=>{var k,V;B(""),U("");try{await x1(G),(k=window.showToast)==null||k.call(window,i("payment.deleteSuccess"),"success"),await ce()}catch(C){(V=window.showToast)==null||V.call(window,C instanceof Error?C.message:i("payment.deleteFailed"),"error")}}})}async function H(G,oe){var de;const k=G+oe;if(k<0||k>=o.length)return;const V=[...o],C=V[G];V.splice(G,1),V.splice(k,0,C),d(V);try{await b1(V.map(N=>N.id)),await ce()}catch(N){(de=window.showToast)==null||de.call(window,N instanceof Error?N.message:i("payment.sortFailed"),"error"),await ce()}}async function te(G){var k;const oe=await il(G);(k=window.showToast)==null||k.call(window,i(oe?"payment.copied":"common.copyFailed"),oe?"success":"error")}return t.jsxs(Jt,{title:i("payment.title"),subtitle:i("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("payment.methods")}),t.jsx("p",{children:i("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:ce,disabled:v,children:[t.jsx(Tt,{size:16}),t.jsx("span",{children:i(v?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void A(),children:[t.jsx(Tn,{size:16}),t.jsx("span",{children:i("payment.add")})]})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,R?t.jsx("div",{className:"form-success",children:R}):null,v&&o.length===0?t.jsx(jt,{label:i("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("payment.id")}),t.jsx("th",{children:i("payment.enabled")}),t.jsx("th",{children:i("payment.displayName")}),t.jsx("th",{children:i("payment.interface")}),t.jsx("th",{children:i("payment.notifyUrl")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((G,oe)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:G.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void H(oe,-1),disabled:oe===0,"aria-label":i("payment.moveUp"),children:t.jsx(oh,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void H(oe,1),disabled:oe===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(sh,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${md(G.enable)?"active":""}`,type:"button",onClick:()=>void he(G.id),"aria-label":md(G.enable)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:G.name}),G.icon?t.jsx("small",{children:G.icon}):null]}),t.jsx("td",{children:G.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void te(G.notify_url),children:[t.jsx("span",{children:G.notify_url}),t.jsx(ms,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void A(G),children:[t.jsx(Ft,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void w(G.id),children:[t.jsx(Wt,{size:14}),i("common.delete")]})]})})]},G.id)),!v&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map((G,oe)=>{const k=md(G.enable),V=G.handling_fee_percent!==null&&G.handling_fee_percent!==""?`${G.handling_fee_percent}%`:"",C=G.handling_fee_fixed!==null?`${zn(G.handling_fee_fixed)} VND`:"",de=[V,C].filter(Boolean).join(" + ")||"No fees",N=I[G.id],_=G.icon&&!N;return t.jsxs("div",{className:`payment-mobile-card ${k?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",G.id]}),t.jsx("span",{className:"gateway-tag",children:G.payment})]}),t.jsx("button",{className:`admin-switch ${k?"active":""}`,type:"button",onClick:()=>void he(G.id),"aria-label":i(k?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[_?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:G.icon,alt:G.name,onError:()=>{se(T=>({...T,[G.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:G.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:G.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:de})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:i("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void te(G.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:G.notify_url}),t.jsx(ms,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void H(oe,-1),disabled:oe===0,"aria-label":i("payment.moveUp"),children:t.jsx(oh,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void H(oe,1),disabled:oe===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(sh,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void A(G),children:[t.jsx(Ft,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void w(G.id),children:[t.jsx(Wt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]})]},G.id)}),!v&&o.length===0?t.jsx("div",{className:"empty-state",children:i("payment.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("payment.edit"):i("payment.add")}),t.jsx("p",{children:i("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ne,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:G=>S({...m,name:G.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:m.icon,onChange:G=>S({...m,icon:G.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:m.notify_domain,onChange:G=>S({...m,notify_domain:G.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:m.handling_fee_percent,onChange:G=>S({...m,handling_fee_percent:G.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:m.handling_fee_fixed,onChange:G=>S({...m,handling_fee_fixed:G.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.interface")}),t.jsx("select",{className:"config-input",value:m.payment,onChange:G=>void $(G.target.value),children:u.map(G=>t.jsx("option",{value:G,children:G},G))})]}),E?t.jsx(jt,{label:i("payment.formLoading")}):null,E?null:Object.entries(y).map(([G,oe])=>t.jsxs("label",{children:[t.jsx("span",{children:oe.label}),t.jsx("input",{className:"config-input",placeholder:oe.description,value:String(m.config[G]??oe.value??""),onChange:k=>S({...m,config:{...m.config,[G]:k.target.value}})})]},G)),m.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[t.jsx(En,{size:16}),i(P?"payment.saving":"common.save")]})]})]})]})}):null]})}function F0(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function J0(s,i){return i[s.field_name]??s.default_value??""}function V0(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState(null),[u,f]=h.useState(null),[m,S]=h.useState(!0),[y,x]=h.useState(!1),[v,j]=h.useState(!1),[E,Y]=h.useState(null),[P,Z]=h.useState(""),[M,B]=h.useState(""),R=h.useCallback(async()=>{S(!0),Z("");try{d(await g1())}catch(A){Z(A instanceof Error?A.message:i("theme.loadFailed"))}finally{S(!1)}},[i]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}R()},[R,s]);async function U(A,$){f(null),x(!0),Z(""),B("");try{const ne=await y1(A);f({key:A,theme:$,values:ne})}catch(ne){Z(ne instanceof Error?ne.message:i("theme.configLoadFailed"))}finally{x(!1)}}async function I(A){Y(A),Z(""),B("");try{await bx({frontend_theme:A}),B(i("theme.activateSuccess")),await R()}catch($){Z($ instanceof Error?$.message:i("theme.activateFailed"))}finally{Y(null)}}async function se(A){if(A.preventDefault(),!!u){j(!0),Z(""),B("");try{await v1(u.key,u.values),f(null),B(i("theme.saveSuccess")),await R()}catch($){Z($ instanceof Error?$.message:i("theme.saveFailed"))}finally{j(!1)}}}function ce(A,$){f(ne=>ne&&{...ne,values:{...ne.values,[A]:$}})}return t.jsxs(Jt,{title:i("theme.title"),subtitle:i("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.available")}),t.jsx("p",{children:i("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:R,disabled:m,children:[t.jsx(Tt,{size:16}),i(m?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:i("theme.warning")}),P?t.jsx("div",{className:"form-error",children:P}):null,M?t.jsx("div",{className:"form-success",children:M}):null,m&&!o?t.jsx(jt,{label:i("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([A,$])=>{const ne=o.active===A;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${F0($)})`},children:ne?t.jsxs("span",{className:"theme-active",children:[t.jsx(cx,{size:15}),i("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:$.name||A}),t.jsx("p",{children:$.description||i("theme.noDescription")})]}),t.jsxs("small",{children:[i("theme.version"),": ",$.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void U(A,$),children:[t.jsx(Gv,{size:15}),i("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ne||E===A,type:"button",onClick:()=>void I(A),children:[t.jsx(Rv,{size:15}),i(ne?"theme.current":E===A?"theme.activating":"theme.activate")]})]})]},A)})}):null,y?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(jt,{label:i("theme.configLoading")})})}):null,u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.configure",{name:u.theme.name||u.key})}),t.jsx("p",{children:u.theme.description||i("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:se,children:[(u.theme.configs??[]).map(A=>{const $=J0(A,u.values);return t.jsxs("label",{children:[t.jsx("span",{children:A.label}),A.description?t.jsx("p",{className:"field-description",children:A.description}):null,A.field_type==="select"?t.jsx("select",{className:"config-input",value:$,onChange:ne=>ce(A.field_name,ne.target.value),children:Object.entries(A.select_options??{}).map(([ne,he])=>t.jsx("option",{value:ne,children:he},ne))}):null,A.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:A.placeholder,rows:5,value:$,onChange:ne=>ce(A.field_name,ne.target.value)}):null,A.field_type!=="select"&&A.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:A.placeholder,value:$,onChange:ne=>ce(A.field_name,ne.target.value)}):null]},A.field_name)}),(u.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:i("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(En,{size:16}),i(v?"theme.saving":"common.save")]})]})]})]})}):null]})}const Ad=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],P0=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],W0=["tcp","ws","grpc","http","httpupgrade","xhttp"],Dx=["tcp","ws","grpc"],Ax=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],I0=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],_h=["anytls","hysteria2","trojan","tuic"],ej=["tcp","ws","grpc","httpupgrade","xhttp"],tj=["chrome","firefox","safari","ios","android","edge","360","qq"],nj=["vmess","vless","trojan","hysteria","tuic","anytls"],aj=["trojan","hysteria","tuic","anytls"],Kd=typeof window<"u"?window.location.origin:"",lj="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function ij(s,i,o=""){return s[i]??o}function Ze(s,i,o=""){return String(ij(s,i,o))}function sj(s,i){const o=s[i];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function Fd(s){if(s&&typeof s=="object"&&!Array.isArray(s))return s;if(typeof s!="string"||!s.trim())return{};try{const i=JSON.parse(s);return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}catch{return{}}}function oj(s){return typeof s=="string"?s.trim()!=="":Array.isArray(s)?s.length>0:s&&typeof s=="object"?Object.keys(s).length>0:!1}function rj(s){return s==="vmess"?"networkSettings":"network_settings"}function cj(s,i){const o=s==="vmess",d=s==="vless"||In(s),u={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(i){case"tcp":return d?{acceptProxyProtocol:!1,...u}:u;case"ws":return d?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return o?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function In(s){return s==="v2node"||s==="zicnode"}function dj(s){return aj.includes(s)}function uj(s){return In(s)||nj.includes(s)}function Nh(s){return s==="vmess"?"tlsSettings":"tls_settings"}function pj(s){const i=String((s==null?void 0:s._type)??"");return dj(i)?1:Number((s==null?void 0:s.tls)??0)}function Od(s){return!!s&&s!=="shadowsocks"}function mj(s){return s==="vless"||s==="vmess"}function Ud(s){return s==="vless"||s==="anytls"}function fj(s){return["vless","vmess","trojan","shadowsocks"].includes(s)}function Sh(s){return s==="shadowsocks"?["tcp","http"]:s==="trojan"?Dx:s==="vless"||s==="vmess"?ej:[]}function hj(s){var i;return In(s)?"ZicNode":((i=Ad.find(o=>o.value===s))==null?void 0:i.label)??s}function Rd(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function xj(s){return s===!0||s===1||s==="1"||s==="true"}const bj=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],gj=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert"];function Na(s,i){const o=Fd(s);if(i===0)return{};const d={...o};return delete d.allow_insecure,delete d.allowInsecure,i===1?bj.forEach(u=>delete d[u]):i===2&&gj.forEach(u=>delete d[u]),Object.keys(d).forEach(u=>{const f=d[u];(f===""||f===null||f===void 0)&&delete d[u]}),d}function yj(s){return Rd(s).replace(/\/+$/,"")||Kd}function kh(s){return`'${s.replace(/'/g,"'\\''")}'`}function vj(s,i){const o=i.apiHost||Kd,d=i.apiKey||"TOKEN_MOI";return`wget -N ${lj} && \\
bash install.sh --api-host ${kh(o)} --node-id ${s} --api-key ${kh(d)}`}function Ch(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function zh(s,i){if(i){const d=JSON.parse(JSON.stringify(i));return d.group_id=Ch(d.group_id),d.route_id=Ch(d.route_id),{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...o,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...o,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:""};default:return o}}function Ox({initialValue:s,onCancel:i,onSave:o}){const{t:d}=$e(),[u,f]=h.useState(()=>JSON.stringify(s??{},null,2)),[m,S]=h.useState(""),y=v=>{if(v.preventDefault(),!u.trim()){o({});return}try{const j=JSON.parse(u);if(typeof j!="object"||j===null)throw new Error("Must be a JSON object {} or array []");o(j)}catch(j){S(j instanceof Error?j.message:"Invalid JSON")}},x=v=>{if(f(v),!v.trim()){S("");return}try{const j=JSON.parse(v);if(typeof j!="object"||j===null)throw new Error("Must be a JSON object {} or array []");S("")}catch(j){S(j instanceof Error?j.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:y,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),m&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",m]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:m?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:u,onChange:v=>x(v.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:i,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!m,children:d("common.confirm")})]})]})}function Te({label:s,required:i,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,i&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:u=>{u.preventDefault(),d()},children:o})]})}function jj({value:s,onChange:i,label:o}){const{t:d}=$e(),[u,f]=h.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Te,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((m,S)=>t.jsxs("span",{className:"tag",onClick:()=>i(s.filter((y,x)=>x!==S)),style:{cursor:"pointer"},children:[m," ×"]},S)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:u,placeholder:d("node.tagPlaceholder"),onChange:m=>f(m.target.value),onKeyDown:m=>{m.key==="Enter"&&u.trim()&&(m.preventDefault(),i([...s,u.trim()]),f(""))}})]})]})}function Th({options:s,value:i,onChange:o,label:d,actionText:u,onAction:f}){const{t:m}=$e(),[S,y]=h.useState(""),x=s.filter(j=>i.includes(j.id)),v=s.filter(j=>j.name.toLowerCase().includes(S.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Te,{label:d,actionText:u,onAction:f}),x.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:x.map(j=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(i.filter(E=>E!==j.id)),children:[j.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},j.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${m("common.search")}...`,value:S,onChange:j=>y(j.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[v.map(j=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:i.includes(j.id),onChange:E=>o(E.target.checked?[...i,j.id]:i.filter(Y=>Y!==j.id))}),t.jsx("span",{children:j.name})]},j.id)),v.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?m("node.noGroupsAvailable"):m("node.noResultsFound")})]})]})}function ta({label:s,checked:i,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:i,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:i?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:i?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function wj({initialValue:s,isSnakeCase:i,tlsMode:o,nodeType:d,onCancel:u,onSave:f}){const{t:m}=$e(),S=i?"server_name":"serverName",y=i?"allow_insecure":"allowInsecure",x=In(d),v=uj(d),j=o===1&&v,[E,Y]=h.useState(String((s==null?void 0:s[S])??"")),[P,Z]=h.useState(String((s==null?void 0:s.dest)??"")),[M,B]=h.useState(String((s==null?void 0:s.server_port)??"443")),[R,U]=h.useState(String((s==null?void 0:s.xver)??"0")),[I,se]=h.useState(String((s==null?void 0:s.private_key)??"")),[ce,A]=h.useState(String((s==null?void 0:s.public_key)??"")),[$,ne]=h.useState(String((s==null?void 0:s.short_id)??"")),[he,w]=h.useState(String((s==null?void 0:s.fingerprint)??"chrome")),[H,te]=h.useState(String((s==null?void 0:s.pinnedPeerCertSha256)??(s==null?void 0:s.pinned_peer_cert_sha256)??"")),[G,oe]=h.useState(String((s==null?void 0:s.verifyPeerCertByName)??(s==null?void 0:s.verify_peer_cert_by_name)??"")),k=String((s==null?void 0:s.cert_mode)??"").trim(),[V,C]=h.useState(k||"auto"),[de,N]=h.useState(String((s==null?void 0:s.provider)??"")),[_,T]=h.useState(String((s==null?void 0:s.dns_env)??"")),[ie,pe]=h.useState(String((s==null?void 0:s.cert_file)??"")),[Ne,ze]=h.useState(String((s==null?void 0:s.key_file)??"")),[Ae,Je]=h.useState(()=>{const ve=s==null?void 0:s.reject_unknown_sni;return ve===1||ve===!0||String(ve)==="1"||String(ve)==="true"}),[Re,et]=h.useState(String((s==null?void 0:s.ech)??"")),[Et,Rt]=h.useState(String((s==null?void 0:s.ech_server_name)??"")),[rn,gt]=h.useState(String((s==null?void 0:s.ech_key)??"")),[$t,Ht]=h.useState(String((s==null?void 0:s.ech_config)??"")),[It,bt]=h.useState(()=>{const ve=s==null?void 0:s[y];return ve===1||ve===!0||String(ve)==="1"||String(ve)==="true"}),Qt=ve=>{if(ve.preventDefault(),x&&o===0){f({});return}const _t=x?Na(s,o):Fd(s),Me=x?{..._t,[S]:E,fingerprint:he}:{...s??{},[S]:E,fingerprint:he},D=H.trim(),ye=G.trim();if(D?Me.pinnedPeerCertSha256=D:delete Me.pinnedPeerCertSha256,delete Me.pinned_peer_cert_sha256,ye?Me.verifyPeerCertByName=ye:delete Me.verifyPeerCertByName,delete Me.verify_peer_cert_by_name,x?(delete Me.allow_insecure,delete Me.allowInsecure):Me[y]=i?It?1:0:It,o===2&&(Me.dest=P,Me.server_port=M,Me.xver=Number(R)||0,Me.private_key=I,Me.public_key=ce,Me.short_id=$,Me.ech=Re,Me.ech_server_name=Et,Me.ech_key=rn,Me.ech_config=$t),j){Me.cert_mode=V;const Oe=s==null?void 0:s.auto_cert;Oe&&typeof Oe=="object"&&(Me.auto_cert=Oe),V==="none"?(delete Me.provider,delete Me.dns_env,delete Me.cert_file,delete Me.key_file):(de.trim()?Me.provider=de:delete Me.provider,_.trim()?Me.dns_env=_:delete Me.dns_env,ie.trim()?Me.cert_file=ie:delete Me.cert_file,Ne.trim()?Me.key_file=Ne:delete Me.key_file),Me.reject_unknown_sni=Ae?"1":"0"}f(x?Na(Me,o):Me)};return t.jsxs("form",{onSubmit:Qt,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:m("node.sni")}),t.jsx("input",{className:"config-input",value:E,onChange:ve=>Y(ve.target.value),placeholder:m(o===2?"node.realitySniHelp":"node.serverNameHelp")})]}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.dest")}),t.jsx("input",{className:"config-input",value:P,onChange:ve=>Z(ve.target.value),placeholder:m("node.destHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.servicePort")}),t.jsx("input",{className:"config-input",value:M,onChange:ve=>B(ve.target.value),placeholder:"443"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.proxyProtocol")}),t.jsxs("select",{className:"config-input",value:R,onChange:ve=>U(ve.target.value),children:[t.jsx("option",{value:"0",children:"0"}),t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.privateKey")}),t.jsx("input",{className:"config-input",value:I,onChange:ve=>se(ve.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.publicKey")}),t.jsx("input",{className:"config-input",value:ce,onChange:ve=>A(ve.target.value),placeholder:m("node.autoGenHelp")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.shortId")}),t.jsx("input",{className:"config-input",value:$,onChange:ve=>ne(ve.target.value),placeholder:m("node.autoGenHelp")})]})]}):null,t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.fingerprint")}),t.jsx("select",{className:"config-input",value:he,onChange:ve=>w(ve.target.value),children:tj.map(ve=>t.jsx("option",{value:ve,children:ve},ve))})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.pinnedPeerCertSha256")}),t.jsx("input",{className:"config-input",value:H,onChange:ve=>te(ve.target.value),placeholder:"AA:BB:CC..."})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.verifyPeerCertByName")}),t.jsx("input",{className:"config-input",value:G,onChange:ve=>oe(ve.target.value),placeholder:"example.com"})]})]}),j?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.certMode")}),t.jsxs("select",{className:"config-input",value:V,onChange:ve=>C(ve.target.value),children:[t.jsx("option",{value:"auto",children:m("node.certModeAuto")}),t.jsx("option",{value:"self",children:m("node.certModeSelf")}),t.jsx("option",{value:"http",children:m("node.certModeHttp")}),t.jsx("option",{value:"dns",children:m("node.certModeDns")}),t.jsx("option",{value:"file",children:m("node.certModeFile")}),t.jsx("option",{value:"none",children:m("node.certModeNone")})]})]}),V==="dns"||V==="auto"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.dnsProvider")}),t.jsx("input",{className:"config-input",value:de,onChange:ve=>N(ve.target.value),placeholder:"cloudflare"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.dnsEnv")}),t.jsx("input",{className:"config-input",value:_,onChange:ve=>T(ve.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,V!=="none"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.certFile")}),t.jsx("input",{className:"config-input",value:ie,onChange:ve=>pe(ve.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.keyFile")}),t.jsx("input",{className:"config-input",value:Ne,onChange:ve=>ze(ve.target.value),placeholder:m("node.autoGenHelp")})]})]}):null,t.jsx(ta,{label:m("node.rejectUnknownSni"),checked:Ae,onChange:Je})]}):null,x?null:t.jsx(ta,{label:m("node.allowInsecure"),checked:It,onChange:bt}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.ech")}),t.jsxs("select",{className:"config-input",value:Re,onChange:ve=>et(ve.target.value),children:[t.jsx("option",{value:"",children:m("node.echNone")}),t.jsx("option",{value:"cloudflare",children:"Cloudflare"}),t.jsx("option",{value:"custom",children:m("node.echCustom")})]})]}),Re==="cloudflare"?t.jsx("div",{className:"config-warning",children:m("node.echCloudflareHelp")}):null,Re==="custom"?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.echServerName")}),t.jsx("input",{className:"config-input",value:Et,onChange:ve=>Rt(ve.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.echKey")}),t.jsx("input",{className:"config-input",value:rn,onChange:ve=>gt(ve.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.echConfig")}),t.jsx("input",{className:"config-input",value:$t,onChange:ve=>Ht(ve.target.value),placeholder:m("node.autoGenHelp")})]})]}):null]}):null,t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:u,children:m("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:m("common.confirm")})]})]})}function _j({draft:s,set:i,groups:o,routes:d,nodes:u,onOpenJson:f,onAddGroup:m,onOpenTransportConfig:S}){const{t:y}=$e(),x=String(s._type),v=In(x),j=Ze(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:y("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"name"),onChange:E=>i("name",E.target.value),placeholder:y("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:Ze(s,"rate","1"),onChange:E=>i("rate",Number(E.target.value))})]})]}),t.jsx(jj,{value:s.tags??[],onChange:E=>i("tags",E),label:y("node.tags")}),t.jsx(Th,{options:o.map(E=>({id:E.id,name:E.name})),value:s.group_id??[],onChange:E=>i("group_id",E),label:y("node.permissionGroups"),actionText:y("node.addGroup"),onAction:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"host"),onChange:E=>i("host",E.target.value),placeholder:y("node.addressPlaceholder")})]}),v?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.listenIp")}),t.jsx("input",{className:"config-input",value:Ze(s,"listen_ip"),onChange:E=>i("listen_ip",E.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(x)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?y("node.editConfig"):void 0,onAction:()=>{const E=Nh(x);f(y("node.connectionSecurityConfig"),E)}}),t.jsxs("select",{className:"config-input",value:Ze(s,"tls","0"),onChange:E=>{const Y=Number(E.target.value);i("tls",Y);const P=Nh(x);Y!==0&&!s[P]&&i(P,{})},children:[t.jsx("option",{value:"0",children:y("node.none")}),t.jsx("option",{value:"1",children:y("node.useTls")}),x!=="vmess"&&t.jsx("option",{value:"2",children:y("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(x)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.sni"),actionText:y("node.editConfig"),onAction:()=>f(y("node.connectionSecurityConfig"),"tls_settings")}),t.jsx("input",{className:"config-input",value:Ze(s,"server_name"),onChange:E=>i("server_name",E.target.value),placeholder:y("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"port"),onChange:E=>i("port",E.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"server_port"),onChange:E=>i("server_port",E.target.value),placeholder:"443"})]})]}),v?t.jsx(Mj,{draft:s,set:i,onOpenJson:f,onOpenTransportConfig:S,onOpenSecurityConfig:()=>f(y("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(x)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:y("node.transportProtocol"),required:!0,actionText:y("node.editConfig"),onAction:S}),t.jsxs("select",{className:"config-input",value:j,onChange:E=>{i("network",E.target.value);const Y=x==="vmess"?"networkSettings":"network_settings";s[Y]||i(Y,{})},children:[x==="vmess"&&P0.map(E=>t.jsx("option",{value:E,children:E},E)),x==="trojan"&&Dx.map(E=>t.jsx("option",{value:E,children:E},E)),x==="vless"&&W0.map(E=>t.jsx("option",{value:E,children:E},E))]})]}):null,x==="trojan"&&t.jsx(Sj,{draft:s,set:i}),x==="shadowsocks"&&t.jsx(kj,{draft:s,set:i,onOpenJson:f}),x==="hysteria"&&t.jsx(Cj,{draft:s,set:i}),x==="tuic"&&t.jsx(zj,{draft:s,set:i}),x==="vless"&&t.jsx(Tj,{draft:s,set:i,onOpenJson:f}),x==="anytls"&&t.jsx(Ej,{draft:s,set:i,onOpenJson:f}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:E=>i("parent_id",E.target.value?Number(E.target.value):null),children:[t.jsx("option",{value:"",children:y("node.none")}),u.filter(E=>E.id!==s.id&&!E.parent_id).map(E=>t.jsx("option",{value:E.id,children:E.name},E.id))]})]}),t.jsx(Th,{options:d.map(E=>({id:E.id,name:E.remarks})),value:s.route_id??[],onChange:E=>i("route_id",E),label:y("node.routingGroups")})]})]})}function Nj({draft:s,set:i,onCancel:o,onSave:d}){const u=String(s._type),f=String(s.network??"tcp"),m=rj(u),S=s[m],y=oj(S)?Fd(S):cj(u,f);return t.jsx(Ox,{initialValue:y,onCancel:o,onSave:x=>{i(m,x),d()}})}function Sj({draft:s,set:i}){const{t:o}=$e();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(ta,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>i("allow_insecure",d?1:0)})]})}function kj({draft:s,set:i,onOpenJson:o}){const{t:d}=$e(),u=sj(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Ze(s,"cipher","aes-128-gcm"),onChange:f=>i("cipher",f.target.value),children:Ax.map(f=>t.jsx("option",{value:f,children:f},f))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Ze(s,"obfs"),onChange:f=>i("obfs",f.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(u.host??""),onChange:f=>i("obfs_settings",{...u,host:f.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(u.path??""),onChange:f=>i("obfs_settings",{...u,path:f.target.value}),placeholder:"/"})]})]})]})}function Cj({draft:s,set:i}){const{t:o}=$e();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Ze(s,"version","2"),onChange:d=>i("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"up_mbps","0"),onChange:d=>i("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"down_mbps","0"),onChange:d=>i("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs"),onChange:d=>i("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs_password"),onChange:d=>i("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(ta,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)})]})}function zj({draft:s,set:i}){const{t:o}=$e();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ze(s,"udp_relay_mode","native"),onChange:d=>i("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ze(s,"congestion_control","bbr"),onChange:d=>i("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(ta,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)}),t.jsx(ta,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>i("disable_sni",d?1:0)}),t.jsx(ta,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>i("zero_rtt_handshake",d?1:0)})]})}function Tj({draft:s,set:i,onOpenJson:o}){const{t:d}=$e();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Ze(s,"flow"),onChange:u=>i("flow",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Ze(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ze(s,"encryption"),onChange:u=>i("encryption",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function Ej({draft:s,set:i,onOpenJson:o}){const{t:d}=$e();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(ta,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:u=>i("insecure",u?1:0)})]})}function Mj({draft:s,set:i,onOpenJson:o,onOpenTransportConfig:d,onOpenSecurityConfig:u}){const{t:f}=$e(),m=Ze(s,"protocol"),S=Sh(m),y=x=>{if(i("protocol",x),!x){i("tls",0),i("network","tcp");return}_h.includes(x)?(i("tls",1),s.tls_settings||i("tls_settings",{})):x==="shadowsocks"?i("tls",0):x==="vmess"&&Number(s.tls??0)===2&&i("tls",1);const v=Sh(x);(v.length===0||!v.includes(Ze(s,"network","tcp")))&&i("network","tcp"),x!=="vless"&&(i("flow",""),i("encryption",""),i("encryption_settings",{})),x!=="hysteria2"&&(i("obfs",null),i("obfs_password",""),i("up_mbps",0),i("down_mbps",0)),x!=="anytls"&&i("padding_scheme","")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:f("node.zicnodeConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.nodeProtocol"),required:!0}),t.jsxs("select",{className:"config-input",value:m,onChange:x=>y(x.target.value),children:[t.jsx("option",{value:"",children:f("node.selectNodeProtocol")}),I0.map(x=>t.jsx("option",{value:x,children:x},x))]})]}),m?t.jsxs(t.Fragment,{children:[Od(m)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:f("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?f("node.editConfig"):void 0,onAction:u}),t.jsxs("select",{className:"config-input",value:Ze(s,"tls",_h.includes(m)?"1":"0"),onChange:x=>{const v=Number(x.target.value);i("tls",v),v!==0&&!s.tls_settings&&i("tls_settings",{})},children:[mj(m)?t.jsx("option",{value:"0",children:f("node.none")}):null,t.jsx("option",{value:"1",children:f("node.useTls")}),Ud(m)?t.jsx("option",{value:"2",children:f("node.reality")}):null]})]}):null,fj(m)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:f("node.transportProtocol"),required:!0,actionText:f("node.editConfig"),onAction:d}),t.jsx("select",{className:"config-input",value:S.includes(Ze(s,"network","tcp"))?Ze(s,"network","tcp"):"tcp",onChange:x=>{i("network",x.target.value),s.network_settings||i("network_settings",{})},children:S.map(x=>t.jsx("option",{value:x,children:x},x))})]}):null]}):null,m==="vless"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:f("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.encryption"),actionText:Ze(s,"encryption")?f("node.editConfig"):void 0,onAction:()=>o(f("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ze(s,"encryption"),onChange:x=>i("encryption",x.target.value||null),children:[t.jsx("option",{value:"",children:f("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.flow")}),t.jsxs("select",{className:"config-input",value:Ze(s,"flow"),onChange:x=>i("flow",x.target.value||null),children:[t.jsx("option",{value:"",children:f("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),m==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:f("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Ze(s,"cipher","aes-128-gcm"),onChange:x=>i("cipher",x.target.value),children:Ax.map(x=>t.jsx("option",{value:x,children:x},x))})]}),m==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:f("node.hysteriaConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"up_mbps","0"),onChange:x=>i("up_mbps",Number(x.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"down_mbps","0"),onChange:x=>i("down_mbps",Number(x.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.obfsMethod")}),t.jsxs("select",{className:"config-input",value:Ze(s,"obfs"),onChange:x=>i("obfs",x.target.value||null),children:[t.jsx("option",{value:"",children:f("node.none")}),t.jsx("option",{value:"salamander",children:"salamander"})]})]}),Ze(s,"obfs")==="salamander"?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs_password"),onChange:x=>i("obfs_password",x.target.value),placeholder:f("node.autoGenHelp")})]}):null]})]}),m==="tuic"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:f("node.tuicConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ze(s,"udp_relay_mode","native"),onChange:x=>i("udp_relay_mode",x.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ze(s,"congestion_control","bbr"),onChange:x=>i("congestion_control",x.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(ta,{label:f("node.disableSni"),checked:s.disable_sni===1,onChange:x=>i("disable_sni",x?1:0)}),t.jsx(ta,{label:f("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:x=>i("zero_rtt_handshake",x?1:0)})]}),m==="anytls"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:f("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:f("node.paddingScheme"),actionText:f("node.editConfig"),onAction:()=>o(f("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const Eh={vmess:$v,vless:Iv,trojan:zd,shadowsocks:Qd,hysteria:qv,tuic:vv,anytls:xs,v2node:ch,zicnode:ch},Dj={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},Aj={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function Wa(s){return Dj[s]??Aj}function Oj({draft:s,config:i,onCopy:o,t:d}){const u=Number(s.id??0),f=u>0?vj(u,i):"",m=!i.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),u>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:f}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(f),children:[t.jsx(ms,{size:15}),d("node.copyInstallCommand")]}),m?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function Uj(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState([]),[u,f]=h.useState([]),[m,S]=h.useState([]),[y,x]=h.useState(null),[v,j]=h.useState(null),[E,Y]=h.useState(!0),[P,Z]=h.useState(!1),[M,B]=h.useState(""),[R,U]=h.useState(""),[I,se]=h.useState(1),[ce,A]=h.useState(10),[$,ne]=h.useState(!1),[he,w]=h.useState({}),[H,te]=h.useState({apiHost:Kd,apiKey:""}),[G,oe]=h.useState(!1),[k,V]=h.useState(""),[C,de]=h.useState(null),[N,_]=h.useState(null),[T,ie]=h.useState(null),pe=(L,re)=>{L.dataTransfer.effectAllowed="move",_(re)},Ne=(L,re)=>{if(L.preventDefault(),N===null||N===re)return;const ee=[...o],Ce=ee[N];ee.splice(N,1),ee.splice(re,0,Ce),_(re),d(ee)},ze=()=>{_(null)},Ae=(L,re)=>{$&&ie(re)},Je=L=>{if(!$||T===null)return;L.cancelable&&L.preventDefault();const re=L.touches[0],ee=document.elementFromPoint(re.clientX,re.clientY);if(!ee)return;const Ce=ee.closest(".mobile-node-card");if(!Ce)return;const Ye=Ce.getAttribute("data-index");if(Ye===null)return;const nt=Number(Ye);if(nt!==T&&nt>=0&&nt<o.length){const ft=[...o],ht=ft[T];ft.splice(T,1),ft.splice(nt,0,ht),ie(nt),d(ft)}},Re=()=>{ie(null)};h.useEffect(()=>{se(1)},[k,ce]);const et=o.filter(L=>{const re=k.toLowerCase().trim();return re?L.name.toLowerCase().includes(re)||L.host.toLowerCase().includes(re)||String(L.id).includes(re)||L.type.toLowerCase().includes(re):!0}),Et=Math.ceil(et.length/ce),Rt=et.slice((I-1)*ce,I*ce);function rn(L,re){return re<=7?Array.from({length:re},(ee,Ce)=>Ce+1):L<=4?[1,2,3,4,5,"...",re]:L>=re-3?[1,"...",re-4,re-3,re-2,re-1,re]:[1,"...",L-1,L,L+1,"...",re]}const gt=rn(I,Et),$t=async()=>{var L,re;Z(!0),B(""),U("");try{const ee={};o.forEach((Ce,Ye)=>{ee[Ce.type]||(ee[Ce.type]={}),ee[Ce.type][String(Ce.id)]=Ye+1}),await y0(ee),(L=window.showToast)==null||L.call(window,i("node.saveSortSuccess"),"success"),ne(!1),await be()}catch(ee){B(ee instanceof Error?ee.message:i("node.saveSortFailed")),(re=window.showToast)==null||re.call(window,ee instanceof Error?ee.message:i("node.saveSortFailed"),"error")}finally{Z(!1)}},Ht=async()=>{ne(!1),await _e()},It=()=>et.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:I===1,onClick:()=>se(L=>Math.max(L-1,1)),children:"<"}),gt.map((L,re)=>L==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${re}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${I===L?"active":""}`,onClick:()=>se(Number(L)),children:L},`page-${L}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:I===Et||Et===0,onClick:()=>se(L=>Math.min(L+1,Et)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsxs("select",{className:"pagination-size-select",value:ce,onChange:L=>A(Number(L.target.value)),children:[t.jsxs("option",{value:10,children:["10 / ",i("common.perPage")]}),t.jsxs("option",{value:20,children:["20 / ",i("common.perPage")]}),t.jsxs("option",{value:50,children:["50 / ",i("common.perPage")]}),t.jsxs("option",{value:100,children:["100 / ",i("common.perPage")]})]})})]}),[bt,Qt]=h.useState(null),[ve,_t]=h.useState(!1),[Me,D]=h.useState(""),[ye,Oe]=h.useState(!1),[Le,mt]=h.useState(!1);async function K(L){var ee,Ce;L.preventDefault();const re=Me.trim();if(!(!re||!y)){Oe(!0),B(""),U("");try{await gx({name:re});const Ye=await hs();f(Ye);const nt=Ye.filter(ft=>ft.name===re).sort((ft,ht)=>ht.id-ft.id)[0];if(nt){const ft=y.group_id??[];ft.includes(nt.id)||Mn("group_id",[...ft,nt.id])}D(""),_t(!1),(ee=window.showToast)==null||ee.call(window,i("node.groupCreateSuccess"),"success")}catch(Ye){B(Ye instanceof Error?Ye.message:i("node.groupCreateFailed")),(Ce=window.showToast)==null||Ce.call(window,Ye instanceof Error?Ye.message:i("node.groupCreateFailed"),"error")}finally{Oe(!1)}}}const we=(L,re)=>{if(!y)return;let ee=y[re];if(typeof ee=="string"&&ee.trim())try{ee=JSON.parse(ee)}catch{}["tlsSettings","tls_settings"].includes(re)&&In(String(y._type))&&(ee=Na(ee,Number(y.tls??0))),Qt({title:L,key:re,value:ee&&typeof ee=="object"?ee:{}})},_e=h.useCallback(async()=>{var L,re,ee,Ce;Y(!0),B("");try{const[Ye,nt,ft,ht]=await Promise.all([bh(),hs(),vx(),xx()]);d(Ye.data),f(nt),S(ft),te({apiHost:yj((L=ht.site)==null?void 0:L.app_url),apiKey:Rd((re=ht.server)==null?void 0:re.server_token)}),oe(xj(((ee=ht.subscribe)==null?void 0:ee.device_hwid_available)??((Ce=ht.subscribe)==null?void 0:Ce.device_hwid_enable)))}catch(Ye){B(Ye instanceof Error?Ye.message:i("knowledge.loadFailed"))}finally{Y(!1)}},[]),be=h.useCallback(async()=>{try{const L=await bh();d(L.data)}catch(L){console.error("Refresh nodes failed",L)}},[]);async function tt(L){var ee;const re=await il(L);(ee=window.showToast)==null||ee.call(window,i(re?"node.installCopied":"common.copyFailed"),re?"success":"error")}h.useEffect(()=>{if(!Ut()){s.replace("/login");return}_e()},[_e,s]);function Ue(L){x(zh(L)),j(null),B(""),U("")}function Ge(L){x(zh(L.type,L)),B(""),U("")}function Pe(L){!G||Number(L.online??0)<=0||s.push(`/device?node_type=${encodeURIComponent(L.type)}&node_id=${encodeURIComponent(String(L.id))}`)}function st(L,re){const ee=Number(L.online??0),Ce=G&&ee>0,Ye=`${re==="mobile"?"mobile-badge-pill":"online-badge"}${Ce?" online-badge-link":""}`,nt=re==="mobile"?12:13,ft={...re==="mobile"?{marginRight:4}:{},color:ee>0?"#10b981":"var(--muted)",opacity:ee>0?1:.6},ht=t.jsxs(t.Fragment,{children:[t.jsx(mx,{size:nt,style:ft}),ee]});return Ce?t.jsx("button",{className:Ye,type:"button",title:i("node.viewOnlineDevices"),onClick:()=>Pe(L),children:ht}):t.jsx("span",{className:Ye,children:ht})}async function Zn(L){var nt,ft,ht;if(L.preventDefault(),!y)return;Z(!0),B(""),U("");const re=String(y._type),ee={...y};if(In(re)&&!Rd(ee.protocol)){B(i("node.protocolRequired")),(nt=window.showToast)==null||nt.call(window,i("node.protocolRequired"),"error"),Z(!1);return}for(const We of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete ee[We];if(ee.padding_scheme!==void 0&&ee.padding_scheme!==null&&typeof ee.padding_scheme!="string"&&(ee.padding_scheme=JSON.stringify(ee.padding_scheme)),ee.padding_scheme)try{const We=JSON.parse(String(ee.padding_scheme));if(typeof We!="object"||We===null)throw new Error("Invalid JSON array or object")}catch(We){B("Invalid Padding Scheme configuration: "+(We instanceof Error?We.message:"JSON error")),Z(!1);return}const Ce=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const We of Ce)(ee[We]===""||ee[We]===null||ee[We]===void 0)&&delete ee[We];if(In(re)){const We=String(ee.protocol??""),pn=Number(ee.tls??0);Od(We)?!Ud(We)&&pn===2?(ee.tls=1,ee.tls_settings=Na(ee.tls_settings,1)):ee.tls_settings=Na(ee.tls_settings,pn):(ee.tls=0,ee.tls_settings={})}const Ye=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings"];for(const We of Ye){const pn=ee[We];(pn==null||typeof pn=="object"&&Object.keys(pn).length===0)&&delete ee[We]}ee.port!==void 0&&(ee.port=Number(ee.port)),ee.server_port!==void 0&&(ee.server_port=Number(ee.server_port)),ee.tls!==void 0&&(ee.tls=Number(ee.tls)),ee.rate!==void 0&&(ee.rate=Number(ee.rate));try{await h0(re,ee),x(null),(ft=window.showToast)==null||ft.call(window,i("node.saveSuccess"),"success"),await be()}catch(We){B(We instanceof Error?We.message:i("node.saveFailed")),(ht=window.showToast)==null||ht.call(window,We instanceof Error?We.message:i("node.saveFailed"),"error")}finally{Z(!1)}}async function Xt(L){const re=[...o];d(ee=>ee.map(Ce=>Ce.id===L.id&&Ce.type===L.type?{...Ce,show:L.show?0:1}:Ce));try{await b0(L.type,L.id,L.show?0:1),await be()}catch(ee){d(re),B(ee instanceof Error?ee.message:i("node.updateFailed"))}}async function rl(L){var re,ee;try{await g0(L.type,L.id),(re=window.showToast)==null||re.call(window,i("node.copySuccess"),"success"),await be()}catch(Ce){B(Ce instanceof Error?Ce.message:i("node.copyFailed")),(ee=window.showToast)==null||ee.call(window,Ce instanceof Error?Ce.message:i("node.copyFailed"),"error")}}async function en(L){var re;(re=window.showConfirm)==null||re.call(window,{message:i("node.deleteConfirm",{name:L.name}),onConfirm:async()=>{var Ce,Ye;const ee=[...o];d(nt=>nt.filter(ft=>!(ft.id===L.id&&ft.type===L.type))),B("");try{await x0(L.type,L.id),(Ce=window.showToast)==null||Ce.call(window,i("node.deleteSuccess"),"success"),await be()}catch(nt){d(ee),B(nt instanceof Error?nt.message:i("node.deleteFailed")),(Ye=window.showToast)==null||Ye.call(window,nt instanceof Error?nt.message:i("node.deleteFailed"),"error")}}})}const Mn=(L,re)=>x(ee=>{if(!ee)return null;const Ce={...ee,[L]:re};if(!In(String(Ce._type)))return Ce;if(L==="tls_settings"&&(Ce.tls_settings=Na(re,Number(Ce.tls??0))),L==="tls"&&(Ce.tls_settings=Na(Ce.tls_settings,Number(re))),L==="protocol"){const Ye=String(re);Od(Ye)?!Ud(Ye)&&Number(Ce.tls??0)===2?(Ce.tls=1,Ce.tls_settings=Na(Ce.tls_settings,1)):Ce.tls_settings=Na(Ce.tls_settings,Number(Ce.tls??0)):(Ce.tls=0,Ce.tls_settings={})}return Ce}),aa=y?String(y._type):"",vn=hj(aa);return t.jsxs(Jt,{title:i("node.title"),subtitle:i("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>j(v?null:"show"),title:i("node.createNode"),children:t.jsx(Tn,{size:18})}),v!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Ad.map(L=>{const re=Wa(L.value),ee=Eh[L.value]||$o;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ue(L.value),j(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:re==null?void 0:re.bg,backgroundColor:re==null?void 0:re.rowBg},children:t.jsx(ee,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(re==null?void 0:re.bg)??"var(--surface-soft)",color:(re==null?void 0:re.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:k,onChange:L=>V(L.target.value),placeholder:`${i("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${$?"success-btn":""}`,type:"button",onClick:$?$t:()=>ne(!0),disabled:P,children:i($?P?"node.saving":"node.saveOrder":"node.editSortOrder")}),$&&t.jsx("button",{className:"ghost-button",type:"button",onClick:Ht,children:i("common.cancel")})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,R?t.jsx("div",{className:"form-success",children:R}):null,E&&o.length===0?t.jsx(jt,{label:i("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[i("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",i("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",i("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",i("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:i("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:i("node.address")}),t.jsx("th",{className:"mobile-hide",children:i("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:i("node.colRate")}),t.jsx("th",{children:i("node.colGroups")}),t.jsx("th",{children:i($?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[Rt.map(L=>{const re=o.findIndex(ee=>ee.id===L.id&&ee.type===L.type);return t.jsxs("tr",{draggable:$,onDragStart:ee=>pe(ee,re),onDragOver:ee=>Ne(ee,re),onDragEnd:ze,className:N===re?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Wa(L.type).bg,color:Wa(L.type).text,border:`1px solid ${Wa(L.type).border}`},children:L.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${L.show?"active":""}`,type:"button",onClick:()=>void Xt(L),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?i("node.statusNormal"):L.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("strong",{children:L.name})]})}),t.jsx("td",{children:st(L,"desktop")}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:L.host})}),t.jsx("td",{className:"mobile-hide",children:String(L.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[L.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const ee=L.group_id??[],Ce=he[`${L.type}-${L.id}`],Ye=ee.map(ht=>{const We=u.find(pn=>Number(pn.id)===Number(ht));return t.jsx("span",{className:"tag",children:(We==null?void 0:We.name)??`#${ht}`},ht)});if(ee.length<=3||Ce)return t.jsxs(t.Fragment,{children:[Ye,ee.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>w(ht=>({...ht,[`${L.type}-${L.id}`]:!1})),children:i("node.collapse")})]});const nt=Ye.slice(0,3),ft=ee.length-3;return t.jsxs(t.Fragment,{children:[nt,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>w(ht=>({...ht,[`${L.type}-${L.id}`]:!0})),children:["+",ft,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:i("node.allPermissionGroups",{count:ee.length})}),Ye]})]})]})})()})}),t.jsx("td",{children:$?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(cs,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(C==null?void 0:C.id)===L.id&&(C==null?void 0:C.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>de((C==null?void 0:C.id)===L.id&&(C==null?void 0:C.type)===L.type?null:{id:L.id,type:L.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(C==null?void 0:C.id)===L.id&&(C==null?void 0:C.type)===L.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>de(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ge(L),de(null)},children:[t.jsx(Ft,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{rl(L),de(null)},children:[t.jsx(ms,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{en(L),de(null)},children:[t.jsx(Wt,{size:14})," ",i("common.delete")]})]})]})]})})]},`${L.type}-${L.id}`)}),!E&&et.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")})})}):null]})]})}),It()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>j(v?null:"show"),title:i("node.createNode"),children:t.jsx(Tn,{size:20})}),v!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Ad.map(L=>{const re=Wa(L.value),ee=Eh[L.value]||$o;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ue(L.value),j(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:re==null?void 0:re.bg,backgroundColor:re==null?void 0:re.rowBg},children:t.jsx(ee,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(re==null?void 0:re.bg)??"var(--surface-soft)",color:(re==null?void 0:re.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:k,onChange:L=>V(L.target.value),placeholder:`${i("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${$?"active":""}`,type:"button",onClick:()=>ne(!$),title:i("node.editSortOrder"),children:t.jsx(cs,{size:20})})]}),$&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:i("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:Ht,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void $t(),disabled:P,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i(P?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[Rt.map(L=>{const re=o.findIndex(ee=>ee.id===L.id&&ee.type===L.type);return t.jsxs("div",{className:`mobile-node-card ${N===re||T===re?"dragging":""}`,draggable:$,onDragStart:ee=>pe(ee,re),onDragOver:ee=>Ne(ee,re),onDragEnd:ze,onTouchStart:ee=>Ae(ee,re),onTouchMove:Je,onTouchEnd:Re,"data-index":re,style:$?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?i("node.statusNormal"):L.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:L.name})]}),t.jsx("div",{className:"card-header-right",children:$?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(cs,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${L.show===1?"active":""}`,onClick:()=>void Xt(L),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(C==null?void 0:C.id)===L.id&&(C==null?void 0:C.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>de((C==null?void 0:C.id)===L.id&&(C==null?void 0:C.type)===L.type?null:{id:L.id,type:L.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(C==null?void 0:C.id)===L.id&&(C==null?void 0:C.type)===L.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>de(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ge(L),de(null)},children:[t.jsx(Ft,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{rl(L),de(null)},children:[t.jsx(ms,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{en(L),de(null)},children:[t.jsx(Wt,{size:14})," ",i("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[L.host,":",L.port||L.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Wa(L.type).bg,color:Wa(L.type).text,border:`1px solid ${Wa(L.type).border}`},children:L.id}),st(L,"mobile"),t.jsxs("span",{className:"mobile-badge-pill",children:[L.rate," x"]})]})]},`${L.type}-${L.id}`)}),!E&&et.length===0&&t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")}),It()]}),y!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:y.id?i("node.editNodeTitle",{type:vn}):i("node.createNodeTitle",{type:vn})}),t.jsx("p",{children:i("node.configureFieldsSubtitle",{type:vn})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>x(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Zn,children:[t.jsx(_j,{draft:y,set:Mn,groups:u,routes:m,nodes:o,onOpenJson:we,onAddGroup:()=>_t(!0),onOpenTransportConfig:()=>mt(!0)}),In(aa)?t.jsx(Oj,{draft:y,config:H,onCopy:L=>void tt(L),t:i}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>x(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[t.jsx(En,{size:16}),i(P?"node.saving":"common.save")]})]})]})]})}),bt!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:bt.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(bt.key)?i("node.connectionSecurityEditorSubtitle"):i("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Qt(null),children:t.jsx(ct,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(bt.key)?t.jsx(wj,{initialValue:bt.value,isSnakeCase:bt.key==="tls_settings",tlsMode:pj(y),nodeType:String((y==null?void 0:y._type)??""),onCancel:()=>Qt(null),onSave:L=>{Mn(bt.key,L),Qt(null)}}):t.jsx(Ox,{initialValue:bt.value,onCancel:()=>Qt(null),onSave:L=>{Mn(bt.key,L),Qt(null)}})})]})}),ve&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.addNewGroupTitle")}),t.jsx("p",{children:i("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_t(!1),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{onSubmit:K,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:i("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:Me,onChange:L=>D(L.target.value),placeholder:i("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_t(!1),disabled:ye,children:i("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ye||!Me.trim(),children:i(ye?"node.saving":"common.confirm")})]})]})]})}),Le&&y!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.transportConfigTitle",{network:String(y.network??"tcp").toUpperCase()})}),t.jsx("p",{children:i("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>mt(!1),children:t.jsx(ct,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(Nj,{draft:y,set:Mn,onCancel:()=>mt(!1),onSave:()=>mt(!1)})})]})})]})}function Rj(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState([]),[u,f]=h.useState(null),[m,S]=h.useState(!0),[y,x]=h.useState(!1),[v,j]=h.useState(""),E=h.useCallback(async()=>{S(!0),j("");try{d(await hs())}catch(M){j(M instanceof Error?M.message:i("serverGroup.loadFailed"))}finally{S(!1)}},[i]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}E()},[E,s]);function Y(M){f({id:M==null?void 0:M.id,name:(M==null?void 0:M.name)??""}),j("")}async function P(M){var B;if(M.preventDefault(),!!u){x(!0),j("");try{await gx(u),f(null),(B=window.showToast)==null||B.call(window,i("serverGroup.saveSuccess"),"success"),await E()}catch(R){j(R instanceof Error?R.message:i("serverGroup.saveFailed"))}finally{x(!1)}}}async function Z(M){var B;(B=window.showConfirm)==null||B.call(window,{message:i("serverGroup.deleteConfirm"),onConfirm:async()=>{var R,U;j("");try{await j1(M),(R=window.showToast)==null||R.call(window,i("serverGroup.deleteSuccess"),"success"),await E()}catch(I){j(I instanceof Error?I.message:i("serverGroup.deleteFailed")),(U=window.showToast)==null||U.call(window,I instanceof Error?I.message:i("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(Jt,{title:i("serverGroup.title"),subtitle:i("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverGroup.heading")}),t.jsx("p",{children:i("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:E,disabled:m,children:[t.jsx(Tt,{size:16}),i(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>Y(),children:[t.jsx(Tn,{size:16}),i("serverGroup.add")]})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,m&&o.length===0?t.jsx(jt,{label:i("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverGroup.id")}),t.jsx("th",{children:i("serverGroup.name")}),t.jsx("th",{children:i("serverGroup.userCount")}),t.jsx("th",{children:i("serverGroup.serverCount")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:M.id}),t.jsx("td",{children:t.jsx("strong",{children:M.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Qo,{size:14}),M.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx($o,{size:14}),M.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>Y(M),children:[t.jsx(Ft,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Z(M.id),children:[t.jsx(Wt,{size:14}),i("common.delete")]})]})})]},M.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:i("serverGroup.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?i("serverGroup.edit"):i("serverGroup.add")}),t.jsx("p",{children:i("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:P,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:u.name,onChange:M=>f({...u,name:M.target.value}),placeholder:i("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(En,{size:16}),i(y?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function Hj(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function Lj(s){var i;return((i=yx.find(o=>o.value===s))==null?void 0:i.label)??s}function qj(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState([]),[u,f]=h.useState(null),[m,S]=h.useState(!0),[y,x]=h.useState(!1),[v,j]=h.useState(""),E=h.useCallback(async()=>{S(!0),j("");try{d(await vx())}catch(M){j(M instanceof Error?M.message:i("serverRoute.loadFailed"))}finally{S(!1)}},[i]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}E()},[E,s]);function Y(M){f(Hj(M)),j("")}async function P(M){var R;if(M.preventDefault(),!u)return;x(!0),j("");const B=u.action==="default_out"?[]:u.match.split(`
`).map(U=>U.trim()).filter(Boolean);try{await w1({id:u.id,remarks:u.remarks,match:B,action:u.action,action_value:u.action_value||null}),f(null),(R=window.showToast)==null||R.call(window,i("serverRoute.saveSuccess"),"success"),await E()}catch(U){j(U instanceof Error?U.message:i("serverRoute.saveFailed"))}finally{x(!1)}}async function Z(M){var B;(B=window.showConfirm)==null||B.call(window,{message:i("serverRoute.deleteConfirm"),onConfirm:async()=>{var R,U;j("");try{await _1(M),(R=window.showToast)==null||R.call(window,i("serverRoute.deleteSuccess"),"success"),await E()}catch(I){j(I instanceof Error?I.message:i("serverRoute.deleteFailed")),(U=window.showToast)==null||U.call(window,I instanceof Error?I.message:i("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(Jt,{title:i("serverRoute.title"),subtitle:i("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverRoute.heading")}),t.jsx("p",{children:i("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:E,disabled:m,children:[t.jsx(Tt,{size:16}),i(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>Y(),children:[t.jsx(Tn,{size:16}),i("serverRoute.add")]})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,m&&o.length===0?t.jsx(jt,{label:i("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverRoute.id")}),t.jsx("th",{children:i("serverRoute.remarks")}),t.jsx("th",{children:i("serverRoute.matchValues")}),t.jsx("th",{children:i("serverRoute.action")}),t.jsx("th",{children:i("serverRoute.actionValue")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:M.id}),t.jsx("td",{children:t.jsx("strong",{children:M.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(M.match)?M.match:[]).slice(0,3).map((B,R)=>t.jsx("span",{className:"tag",children:B},R)),Array.isArray(M.match)&&M.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",M.match.length-3]}):null,!Array.isArray(M.match)||M.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:Lj(M.action)})}),t.jsx("td",{children:M.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>Y(M),children:[t.jsx(Ft,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Z(M.id),children:[t.jsx(Wt,{size:14}),i("common.delete")]})]})})]},M.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("serverRoute.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?i("serverRoute.edit"):i("serverRoute.add")}),t.jsx("p",{children:i("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:P,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:u.remarks,onChange:M=>f({...u,remarks:M.target.value}),placeholder:i("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.action")}),t.jsx("select",{className:"config-input",value:u.action,onChange:M=>f({...u,action:M.target.value}),children:yx.map(M=>t.jsx("option",{value:M.value,children:M.label},M.value))})]}),u.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:u.match,onChange:M=>f({...u,match:M.target.value}),placeholder:i("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:u.action_value,onChange:M=>f({...u,action_value:M.target.value}),placeholder:i("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(En,{size:16}),i(y?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function Bj(s){return s.split(/\r?\n/).map(i=>i.trim()).filter(Boolean).join(`
`)}function Gj(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",allow_subscribe_url:(s==null?void 0:s.allow_subscribe_url)===0?"0":"1",allow_subscribe_url_ua:(s==null?void 0:s.allow_subscribe_url_ua)===1?"1":"0",subscribe_url_allowed_ua:(s==null?void 0:s.subscribe_url_allowed_ua)??"",force_update:!1}}function Yj(s){const i=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:i(s.month_price),quarter_price:i(s.quarter_price),half_year_price:i(s.half_year_price),year_price:i(s.year_price),two_year_price:i(s.two_year_price),three_year_price:i(s.three_year_price),onetime_price:i(s.onetime_price),reset_price:i(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),allow_subscribe_url:s.allow_subscribe_url==="0"?0:1,allow_subscribe_url_ua:s.allow_subscribe_url_ua==="1"?1:0,subscribe_url_allowed_ua:s.allow_subscribe_url_ua==="1"?Bj(s.subscribe_url_allowed_ua):null,force_update:s.force_update}}function dn(s){return s==null?"—":zn(s)}function $j(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function Qj(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState([]),[u,f]=h.useState([]),[m,S]=h.useState(null),[y,x]=h.useState(!0),[v,j]=h.useState(!1),[E,Y]=h.useState(""),[P,Z]=h.useState(""),[M,B]=h.useState(null),[R,U]=h.useState(null),I=(N,_)=>{N.dataTransfer.effectAllowed="move",B(_)},se=(N,_)=>{if(N.preventDefault(),M===null||M===_)return;const T=[...o],ie=T[M];T.splice(M,1),T.splice(_,0,ie),B(_),d(T)},ce=async()=>{B(null);try{await hh(o.map(N=>N.id)),await he()}catch(N){Y(N instanceof Error?N.message:i("plan.sortFailed")),await he()}},A=(N,_)=>{U(_)},$=N=>{if(R===null)return;const _=N.touches[0],T=document.elementFromPoint(_.clientX,_.clientY);if(!T)return;const ie=T.closest("tr, [data-index]");if(!ie)return;const pe=ie.getAttribute("data-index");if(pe===null)return;const Ne=Number(pe);if(Ne!==R&&Ne>=0&&Ne<o.length){const ze=[...o],Ae=ze[R];ze.splice(R,1),ze.splice(Ne,0,Ae),U(Ne),d(ze)}},ne=async()=>{if(R!==null){U(null);try{await hh(o.map(N=>N.id)),await he()}catch(N){Y(N instanceof Error?N.message:i("plan.sortFailed")),await he()}}},he=h.useCallback(async()=>{x(!0),Y("");try{const[N,_]=await Promise.all([El(),hs()]);d(N),f(_)}catch(N){Y(N instanceof Error?N.message:i("plan.loadFailed"))}finally{x(!1)}},[i]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}he()},[he,s]);function w(N){S(Gj(N)),Y(""),Z("")}async function H(N){var _,T;if(N.preventDefault(),!!m){j(!0),Y(""),Z("");try{await N1(Yj(m)),S(null),(_=window.showToast)==null||_.call(window,i("plan.saveSuccess"),"success"),await he()}catch(ie){(T=window.showToast)==null||T.call(window,ie instanceof Error?ie.message:i("plan.saveFailed"),"error")}finally{j(!1)}}}async function te(N,_){var T;try{await cd(N,{show:_?0:1}),await he()}catch(ie){(T=window.showToast)==null||T.call(window,ie instanceof Error?ie.message:i("plan.toggleFailed"),"error")}}async function G(N,_){var T;try{await cd(N,{renew:_?0:1}),await he()}catch(ie){(T=window.showToast)==null||T.call(window,ie instanceof Error?ie.message:i("plan.toggleFailed"),"error")}}async function oe(N,_){var T;try{await cd(N,{allow_subscribe_url:_?0:1}),await he()}catch(ie){(T=window.showToast)==null||T.call(window,ie instanceof Error?ie.message:i("plan.toggleFailed"),"error")}}async function k(N){var _;(_=window.showConfirm)==null||_.call(window,{message:i("plan.deleteConfirm"),onConfirm:async()=>{var T,ie;Y(""),Z("");try{await S1(N),(T=window.showToast)==null||T.call(window,i("plan.deleteSuccess"),"success"),await he()}catch(pe){(ie=window.showToast)==null||ie.call(window,pe instanceof Error?pe.message:i("plan.deleteFailed"),"error")}}})}function V(N){var _;return((_=u.find(T=>T.id===N))==null?void 0:_.name)??`#${N}`}function C(N){return Number(N.allow_subscribe_url??1)===1}function de(N,_){S(T=>T&&{...T,[N]:_})}return t.jsxs(Jt,{title:i("plan.title"),subtitle:i("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("plan.heading")}),t.jsx("p",{children:i("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:he,disabled:y,children:[t.jsx(Tt,{size:16}),i(y?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(),children:[t.jsx(Tn,{size:16}),i("plan.add")]})]})]}),E?t.jsx("div",{className:"form-error",children:E}):null,P?t.jsx("div",{className:"form-success",children:P}):null,y&&o.length===0?t.jsx(jt,{label:i("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:i("plan.show")}),t.jsx("th",{children:i("plan.renew")}),t.jsx("th",{children:i("plan.allowSubscribeUrl")}),t.jsx("th",{children:i("plan.name")}),t.jsx("th",{children:i("plan.users")}),t.jsx("th",{children:i("plan.group")}),t.jsx("th",{children:i("plan.pricing")}),t.jsx("th",{children:i("plan.traffic")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((N,_)=>t.jsxs("tr",{draggable:!0,onDragStart:T=>I(T,_),onDragOver:T=>se(T,_),onDragEnd:ce,onTouchStart:T=>A(T,_),onTouchMove:$,onTouchEnd:ne,"data-index":_,className:M===_||R===_?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:i("plan.sort"),children:t.jsx(cs,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:N.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:T=>{T.stopPropagation(),te(N.id,N.show)},title:N.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${N.renew?"active":""}`,type:"button",onClick:T=>{T.stopPropagation(),G(N.id,N.renew)},title:N.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${C(N)?"active":""}`,type:"button",onClick:T=>{T.stopPropagation(),oe(N.id,C(N)?1:0)},title:C(N)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:N.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Qo,{size:14}),N.count??0]})}),t.jsx("td",{children:V(N.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[N.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:dn(N.month_price)})]}),N.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:dn(N.quarter_price)})]}),N.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:dn(N.half_year_price)})]}),N.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:dn(N.year_price)})]}),N.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:dn(N.two_year_price)})]}),N.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:dn(N.three_year_price)})]}),N.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:dn(N.onetime_price)})]}),N.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:dn(N.reset_price)})]})]})}),t.jsxs("td",{children:[N.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:T=>{T.stopPropagation(),w(N)},children:[t.jsx(Ft,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:T=>{T.stopPropagation(),k(N.id)},children:[t.jsx(Wt,{size:14}),i("common.delete")]})]})})]},N.id)),!y&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:i("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((N,_)=>t.jsxs("div",{className:`mobile-node-card ${M===_||R===_?"dragging":""}`,draggable:!0,onDragStart:T=>I(T,_),onDragOver:T=>se(T,_),onDragEnd:ce,onTouchStart:T=>A(T,_),onTouchMove:$,onTouchEnd:ne,"data-index":_,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:i("plan.sort"),children:t.jsx(cs,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:N.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:N.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:T=>{T.stopPropagation(),w(N)},children:[t.jsx(Ft,{size:12}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:T=>{T.stopPropagation(),k(N.id)},children:[t.jsx(Wt,{size:12}),i("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.show")}),t.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:T=>{T.stopPropagation(),te(N.id,N.show)},title:N.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.renew")}),t.jsx("button",{className:`admin-switch ${N.renew?"active":""}`,type:"button",onClick:T=>{T.stopPropagation(),G(N.id,N.renew)},title:N.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.allowSubscribeUrl")}),t.jsx("button",{className:`admin-switch ${C(N)?"active":""}`,type:"button",onClick:T=>{T.stopPropagation(),oe(N.id,C(N)?1:0)},title:C(N)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(Qo,{size:12,style:{marginRight:4}}),N.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:V(N.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[N.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[N.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:dn(N.month_price)})]}),N.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:dn(N.quarter_price)})]}),N.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:dn(N.half_year_price)})]}),N.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:dn(N.year_price)})]}),N.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:dn(N.two_year_price)})]}),N.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:dn(N.three_year_price)})]}),N.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:dn(N.onetime_price)})]}),N.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:dn(N.reset_price)})]})]})]},N.id)),!y&&o.length===0?t.jsx("div",{className:"empty-state",children:i("plan.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("plan.edit"):i("plan.add")}),t.jsx("p",{children:i("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:H,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:N=>de("name",N.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:m.content,onChange:N=>de("content",N.target.value),placeholder:i("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:m.group_id,onChange:N=>de("group_id",N.target.value),children:[t.jsx("option",{value:"",children:i("plan.selectGroup")}),u.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:m.transfer_enable,onChange:N=>de("transfer_enable",N.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.device_limit,onChange:N=>de("device_limit",N.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.speed_limit,onChange:N=>de("speed_limit",N.target.value),placeholder:i("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.capacity_limit,onChange:N=>de("capacity_limit",N.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:m.reset_traffic_method,onChange:N=>de("reset_traffic_method",N.target.value),children:$j(i).map(N=>t.jsx("option",{value:N.value,children:N.label},N.value))})]})]}),t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.allow_subscribe_url==="1",onChange:N=>de("allow_subscribe_url",N.target.checked?"1":"0")}),t.jsx("span",{children:i("plan.allowSubscribeUrl")})]}),m.allow_subscribe_url==="0"?t.jsxs(t.Fragment,{children:[t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.allow_subscribe_url_ua==="1",onChange:N=>de("allow_subscribe_url_ua",N.target.checked?"1":"0")}),t.jsx("span",{children:i("plan.allowSubscribeUrlUa")})]}),m.allow_subscribe_url_ua==="1"?t.jsxs("label",{children:[t.jsx("span",{children:i("plan.subscribeUrlAllowedUa")}),t.jsx("textarea",{className:"config-input",rows:4,value:m.subscribe_url_allowed_ua,onChange:N=>de("subscribe_url_allowed_ua",N.target.value),placeholder:i("plan.subscribeUrlAllowedUaPlaceholder")}),t.jsx("small",{className:"field-help",children:i("plan.subscribeUrlAllowedUaHelp")})]}):null]}):null,t.jsx("h3",{className:"form-section-title",children:i("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.month_price,onChange:N=>de("month_price",N.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.quarter_price,onChange:N=>de("quarter_price",N.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.half_year_price,onChange:N=>de("half_year_price",N.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.year_price,onChange:N=>de("year_price",N.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.two_year_price,onChange:N=>de("two_year_price",N.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.three_year_price,onChange:N=>de("three_year_price",N.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.onetime_price,onChange:N=>de("onetime_price",N.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.reset_price,onChange:N=>de("reset_price",N.target.value),placeholder:"—"})]})]}),m.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.force_update,onChange:N=>de("force_update",String(N.target.checked))}),t.jsx("span",{children:i("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(En,{size:16}),i(v?"plan.saving":"common.save")]})]})]})]})}):null]})}const fd="模糊",Mh={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Dh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Ah(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),u=String(i.getDate()).padStart(2,"0"),f=String(i.getHours()).padStart(2,"0"),m=String(i.getMinutes()).padStart(2,"0");return`${o}/${d}/${u} ${f}:${m}`}function Oh(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),u=String(i.getDate()).padStart(2,"0"),f=String(i.getHours()).padStart(2,"0"),m=String(i.getMinutes()).padStart(2,"0"),S=String(i.getSeconds()).padStart(2,"0");return`${o}-${d}-${u} ${f}:${m}:${S}`}function Uh(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Yn(s){return`${zn(Number(s??0))} ₫`}const Ux="adminzic_user_cache";function Xj(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(Ux);return s?JSON.parse(s):{}}catch{return{}}}function Zj(s){if(!(typeof window>"u"))try{sessionStorage.setItem(Ux,JSON.stringify(s))}catch{}}const ui=(s,i)=>`${s}:${i}`;function Kj(){var D,ye,Oe,Le,mt;const s=Ot(),i=na(),{t:o}=$e(),d=h.useCallback(K=>{switch(K){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${K}`,cls:""}}},[o]),u=h.useCallback(K=>{const we=`order.period.${K}`,_e=o(we);return _e===we?Dh[K]??K:_e},[o]),[f,m]=h.useState([]),[S,y]=h.useState([]),[x,v]=h.useState({}),[j,E]=h.useState(0),[Y,P]=h.useState(1),[Z]=h.useState(15),[M,B]=h.useState(""),[R,U]=h.useState("trade_no"),[I,se]=h.useState(!0),[ce,A]=h.useState(null),[$,ne]=h.useState(!1),[he,w]=h.useState(""),[H,te]=h.useState(""),[G,oe]=h.useState(null),[k,V]=h.useState(null),[C,de]=h.useState(!1),[N,_]=h.useState(null),[T,ie]=h.useState(!1),[pe,Ne]=h.useState(()=>Xj()),ze=h.useCallback((K,we)=>{const _e=ui(we,K);V(null),oe(be=>be===_e?null:_e)},[]),Ae=h.useCallback((K,we)=>{const _e=ui(we,K);oe(null),V(be=>be===_e?null:_e)},[]),Je=h.useCallback(K=>{const we=Number(K.coupon_id??0);return we?x[we]??`#${we}`:null},[x]);h.useEffect(()=>{if(!G&&!k)return;const K=()=>{oe(null),V(null)},we=be=>{const tt=be.target;tt!=null&&tt.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||K()},_e=be=>{be.key==="Escape"&&K()};return document.addEventListener("pointerdown",we),document.addEventListener("keydown",_e),()=>{document.removeEventListener("pointerdown",we),document.removeEventListener("keydown",_e)}},[G,k]),h.useEffect(()=>{const K=new Set;if(f.forEach(_e=>{_e.user_id&&!pe[_e.user_id]&&K.add(_e.user_id),_e.invite_user_id&&!pe[_e.invite_user_id]&&K.add(_e.invite_user_id)}),N&&(N.user_id&&!pe[N.user_id]&&K.add(N.user_id),N.invite_user_id&&!pe[N.invite_user_id]&&K.add(N.invite_user_id)),K.size===0)return;const we=Array.from(K);Promise.allSettled(we.map(async _e=>{try{const be=await _x(_e);if(be&&be.data)return{id:_e,email:be.data.email,invite_user:be.data.invite_user}}catch(be){console.error(`Failed to fetch user ${_e}:`,be)}return null})).then(_e=>{const be={};_e.forEach(tt=>{var Ue;if(tt.status==="fulfilled"&&tt.value){const Ge=tt.value;be[Ge.id]={email:Ge.email,invite_user_email:((Ue=Ge.invite_user)==null?void 0:Ue.email)||null},Ge.invite_user&&(be[Ge.invite_user.id]={email:Ge.invite_user.email})}}),Object.keys(be).length>0&&Ne(tt=>{const Ue={...tt,...be};return Zj(Ue),Ue})})},[f,N,pe]);const Re={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},et=h.useCallback(async(K=1,we,_e)=>{var be,tt;se(!0),w("");try{let Ue;if(we)if(_e==="email"){const st=(be=(await Md(1,1,[{key:"email",condition:fd,value:we}])).data)==null?void 0:be[0];if(!st){m([]),E(0),se(!1);return}Ue=[{key:"user_id",condition:"=",value:String(st.id)}]}else if(_e==="invite_user_email"){const st=(tt=(await Md(1,1,[{key:"email",condition:fd,value:we}])).data)==null?void 0:tt[0];if(!st){m([]),E(0),se(!1);return}Ue=[{key:"invite_user_id",condition:"=",value:String(st.id)}]}else Ue=[{key:_e||"trade_no",condition:_e==="trade_no"||_e==="user_id"||_e==="invite_user_id"||_e==="plan_id"||_e==="status"?"=":fd,value:we}];const Ge=await k1({current:K,pageSize:Z,filter:Ue});m(Ge.data),E(Ge.total)}catch(Ue){w(Ue instanceof Error?Ue.message:o("order.loadFailed"))}finally{se(!1)}},[Z,o]),Et=h.useCallback(K=>{const we=String(K);U("user_id"),B(we),de(!0),P(1),et(1,we,"user_id")},[et]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}const K=new URLSearchParams(i.search),we=K.get("filter_email"),_e=K.get("invite_user_email"),be=K.get("user_id")||K.get("filter_user_id");let tt="",Ue="trade_no";be?(tt=be,Ue="user_id",U("user_id"),B(be),de(!0)):we?(tt=we,Ue="email",U("email"),B(we),de(!0)):_e&&(tt=_e,Ue="invite_user_email",U("invite_user_email"),B(_e),de(!0)),et(1,tt,Ue),El().then(y).catch(()=>{}),wx(1,1e3).then(Ge=>{const Pe={};Ge.data.forEach(st=>{Pe[st.id]=st.code}),v(Pe)}).catch(()=>{})},[et,s,i.search]);function Rt(){P(1),et(1,M,R)}function rn(){B(""),P(1),et(1)}function gt(K){P(K),et(K,M,R)}async function $t(K){var we,_e;oe(null),V(null),w(""),te("");try{await C1(K),(we=window.showToast)==null||we.call(window,o("order.paidSuccess"),"success"),await et(Y,M,R)}catch(be){(_e=window.showToast)==null||_e.call(window,be instanceof Error?be.message:o("order.paidFailed"),"error")}}async function Ht(K){var we,_e;oe(null),V(null),w(""),te("");try{await z1(K),(we=window.showToast)==null||we.call(window,o("order.cancelSuccess"),"success"),await et(Y,M,R)}catch(be){(_e=window.showToast)==null||_e.call(window,be instanceof Error?be.message:o("order.cancelFailed"),"error")}}async function It(K,we){var _e,be;oe(null),V(null),w(""),te("");try{await T1(K,we),(_e=window.showToast)==null||_e.call(window,o("order.commissionSuccess"),"success"),await et(Y,M,R)}catch(tt){(be=window.showToast)==null||be.call(window,tt instanceof Error?tt.message:o("order.commissionFailed"),"error")}}async function bt(K){_(K),ie(!0);try{const we=await E1(K.id);we&&we.data&&_(we.data)}catch(we){console.error("Failed to fetch order detail:",we)}finally{ie(!1)}}function Qt(){var K;A({email:"",plan_id:(K=S[0])!=null&&K.id?String(S[0].id):"",period:"month_price",total_amount:"0"}),w(""),te("")}async function ve(K){var we,_e;if(K.preventDefault(),!!ce){ne(!0),w(""),te("");try{await jx({email:ce.email,plan_id:Number(ce.plan_id),period:ce.period,total_amount:Number(ce.total_amount)*100}),A(null),(we=window.showToast)==null||we.call(window,o("order.assignSuccess"),"success"),await et(Y,M,R)}catch(be){(_e=window.showToast)==null||_e.call(window,be instanceof Error?be.message:o("order.assignFailed"),"error")}finally{ne(!1)}}}const _t=Math.ceil(j/Z),Me=N?Je(N):null;return t.jsxs(Jt,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${C?"active":""}`,type:"button",onClick:()=>de(!C),children:[t.jsx(fs,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Qt,children:[t.jsx(Tn,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void et(Y,M,R),disabled:I,children:[t.jsx(Tt,{size:16}),o(I?"common.refreshing":"common.refresh")]})]}),C&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:R,onChange:K=>U(K.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Fo,{size:16}),t.jsx("input",{className:"config-input search-input",value:M,onChange:K=>B(K.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:K=>K.key==="Enter"&&Rt()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Rt,children:[t.jsx(fs,{size:16}),o("order.filter")]}),M?t.jsxs("button",{className:"ghost-button",type:"button",onClick:rn,children:[t.jsx(ct,{size:16}),o("order.clearFilter")]}):null]}),he?t.jsx("div",{className:"form-error",children:he}):null,H?t.jsx("div",{className:"form-success",children:H}):null,I&&f.length===0?t.jsx(jt,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${I?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[f.map(K=>{var Ge;const we=d(K.status),_e=K.invite_user_id!==null,be=Re[K.commission_status]??{label:`#${K.commission_status}`,dotClass:"pending"},tt=Je(K),Ue=(Ge=pe[K.user_id])==null?void 0:Ge.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>bt(K),title:o("order.detailsTitle"),children:Uh(K.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",K.id]}),t.jsx("span",{className:"order-type-pill",children:Mh[K.type]??`#${K.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[Ue?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Et(K.user_id),title:o("order.filterByUser"),children:Ue}):t.jsxs("span",{className:"order-subline",children:["ID: ",K.user_id]}),t.jsx("strong",{className:"order-plan-name",children:K.plan_name??`Plan #${K.plan_id}`}),t.jsx("span",{className:"period-capsule",children:u(K.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Yn(K.total_amount)}),tt?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",tt]}):null,Number(K.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Yn(K.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${we.cls.replace("status-","")}`}),t.jsx("span",{children:we.label}),K.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Pe=>{Pe.stopPropagation(),ze(K.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(zl,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),G===ui("desktop",K.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Pe=>Pe.stopPropagation(),onClick:Pe=>Pe.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{oe(null),$t(K.trade_no)},children:[t.jsx(Mo,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{oe(null),Ht(K.trade_no)},children:[t.jsx(Cl,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[_e?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Yn(K.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${be.dotClass}`}),t.jsx("span",{children:be.label}),K.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Pe=>{Pe.stopPropagation(),Ae(K.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(zl,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),k===ui("desktop",K.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Pe=>Pe.stopPropagation(),onClick:Pe=>Pe.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{V(null),It(K.trade_no,1)},children:[t.jsx(Mo,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{V(null),It(K.trade_no,3)},children:[t.jsx(Cl,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Ah(K.created_at)})})]},K.trade_no)}),!I&&f.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),_t>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:Y<=1,onClick:()=>gt(Y-1),children:t.jsx(Sa,{size:16})}),t.jsxs("span",{className:"page-info",children:[Y," / ",_t]}),t.jsx("button",{className:"mini-button",disabled:Y>=_t,onClick:()=>gt(Y+1),children:t.jsx(ka,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[f.map(K=>{var Zn;const we=d(K.status),_e=K.invite_user_id!==null,be=Re[K.invite_user_id!==null?K.commission_status:0]??{label:`#${K.commission_status}`,dotClass:"pending"},tt=(Zn=pe[K.user_id])==null?void 0:Zn.email,Ue=Je(K),Ge=ui("mobile",K.trade_no),Pe=ui("mobile",K.trade_no),st=G===Ge||k===Pe;return t.jsxs("div",{className:`mobile-order-card${st?" is-menu-open":""}`,children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>bt(K),children:Uh(K.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",K.id]})]}),t.jsx("div",{className:"mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${we.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:we.label}),K.status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Xt=>{Xt.stopPropagation(),ze(K.trade_no,"mobile")},"aria-expanded":G===Ge,children:[o("order.markAs"),t.jsx(zl,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),G===Ge&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Xt=>Xt.stopPropagation(),onClick:Xt=>Xt.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{oe(null),$t(K.trade_no)},children:[t.jsx(Mo,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{oe(null),Ht(K.trade_no)},children:[t.jsx(Cl,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:tt?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Et(K.user_id),children:tt}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",K.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:Mh[K.type]??`#${K.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:K.plan_name??`Plan #${K.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:u(K.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Yn(K.total_amount)})]}),Ue?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:Ue})})]}):null,Number(K.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Yn(K.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:_e?t.jsx("strong",{children:Yn(K.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),_e&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsx("div",{className:"value mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${be.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:be.label}),K.commission_status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Xt=>{Xt.stopPropagation(),Ae(K.trade_no,"mobile")},"aria-expanded":k===Pe,children:[o("order.markAs"),t.jsx(zl,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),k===Pe&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Xt=>Xt.stopPropagation(),onClick:Xt=>Xt.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{V(null),It(K.trade_no,1)},children:[t.jsx(Mo,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{V(null),It(K.trade_no,3)},children:[t.jsx(Cl,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Ah(K.created_at)})]})]})]},K.trade_no)}),!I&&f.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,_t>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:Y<=1,onClick:()=>gt(Y-1),children:t.jsx(Sa,{size:16})}),t.jsxs("span",{className:"page-info",children:[Y," / ",_t]}),t.jsx("button",{className:"mini-button",disabled:Y>=_t,onClick:()=>gt(Y+1),children:t.jsx(ka,{size:16})})]}):null]})]}),N?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:t.jsx(ct,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:T?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(jt,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(D=pe[N.user_id])!=null&&D.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{_(null),Et(N.user_id)},title:"Filter by this user",children:pe[N.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",N.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:N.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:u(N.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(N.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:N.plan_name??`Plan #${N.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:N.callback_no||"-"})]}),Me?t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:Me})]}):null]}),N.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(ye=pe[N.invite_user_id])!=null&&ye.email||(Oe=pe[N.user_id])!=null&&Oe.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const K=String(N.invite_user_id);U("invite_user_id"),B(K),de(!0),_(null),et(1,K,"invite_user_id")},title:"Filter by this inviter",children:((Le=pe[N.invite_user_id])==null?void 0:Le.email)||((mt=pe[N.user_id])==null?void 0:mt.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",N.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Yn(N.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(Re[N.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(Re[N.commission_status]??{label:`#${N.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Yn(N.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Yn(N.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Yn(N.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Yn(N.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Yn(N.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:Oh(N.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:Oh(N.updated_at)})]})]})]})})]})}):null,ce?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>A(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ve,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:ce.email,onChange:K=>A({...ce,email:K.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:ce.plan_id,onChange:K=>A({...ce,plan_id:K.target.value}),children:S.map(K=>t.jsx("option",{value:K.id,children:K.name},K.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:ce.period,onChange:K=>A({...ce,period:K.target.value}),children:Object.entries(Dh).map(([K,we])=>t.jsx("option",{value:K,children:we},K))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:ce.total_amount,onChange:K=>A({...ce,total_amount:K.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>A(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:$,children:[t.jsx(En,{size:16}),o($?"order.assigning":"order.assign")]})]})]})]})}):null]})}function Oo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Uo(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function hd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function Fj(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState([]),[u,f]=h.useState(0),[m,S]=h.useState(1),[y,x]=h.useState([]),[v,j]=h.useState(null),[E,Y]=h.useState(!0),[P,Z]=h.useState(!1),[M,B]=h.useState(""),[R,U]=h.useState(""),[I,se]=h.useState("");h.useEffect(()=>{v||se("")},[v]);const ce=h.useCallback(async(w=1)=>{Y(!0),B("");try{const H=await wx(w,15);d(H.data),f(H.total)}catch(H){B(H instanceof Error?H.message:i("coupon.loadFailed"))}finally{Y(!1)}},[]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}ce(1),El().then(x).catch(()=>{})},[ce,s]);async function A(w){var H,te;if(w.preventDefault(),!!v){Z(!0),B(""),U("");try{const G=v.type==="1"?Math.round(Number(v.value)*100):Number(v.value);await M1({id:v.id,name:v.name,type:Number(v.type),value:G,code:v.code||void 0,started_at:Math.floor(new Date(v.started_at).getTime()/1e3),ended_at:Math.floor(new Date(v.ended_at).getTime()/1e3),limit_use:v.limit_use?Number(v.limit_use):null,limit_use_with_user:v.limit_use_with_user?Number(v.limit_use_with_user):null,limit_plan_ids:v.limit_plan_ids.length?v.limit_plan_ids:null,limit_period:v.limit_period.length?v.limit_period:null,generate_count:v.generate_count?Number(v.generate_count):void 0}),j(null),(H=window.showToast)==null||H.call(window,i("coupon.saveSuccess"),"success"),await ce(m)}catch(G){(te=window.showToast)==null||te.call(window,G instanceof Error?G.message:i("coupon.saveFailed"),"error")}finally{Z(!1)}}}async function $(w){var H;try{await A1(w),await ce(m)}catch(te){(H=window.showToast)==null||H.call(window,te instanceof Error?te.message:i("coupon.toggleFailed"),"error")}}async function ne(w){var H;(H=window.showConfirm)==null||H.call(window,{message:i("coupon.deleteConfirm"),onConfirm:async()=>{var te,G;try{await D1(w),(te=window.showToast)==null||te.call(window,i("coupon.deleteSuccess"),"success"),await ce(m)}catch(oe){(G=window.showToast)==null||G.call(window,oe instanceof Error?oe.message:i("coupon.deleteFailed"),"error")}}})}const he=Math.ceil(u/15);return t.jsxs(Jt,{title:i("coupon.title"),subtitle:i("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("coupon.heading")}),t.jsxs("p",{children:[u," ",i("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void ce(m),disabled:E,children:[t.jsx(Tt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(hd()),children:[t.jsx(Tn,{size:16}),i("coupon.add")]})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,R?t.jsx("div",{className:"form-success",children:R}):null,E&&o.length===0?t.jsx(jt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("coupon.name")}),t.jsx("th",{children:i("coupon.code")}),t.jsx("th",{children:i("coupon.type")}),t.jsx("th",{children:i("coupon.value")}),t.jsx("th",{children:i("coupon.usageLimit")}),t.jsx("th",{children:i("coupon.limitPlans")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("coupon.limitPeriods")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(w=>{var oe,k;const H=(oe=w.limit_plan_ids)==null?void 0:oe.map(V=>{var C;return((C=y.find(de=>de.id===V))==null?void 0:C.name)||`#${V}`}).join(", "),te=Uo(i),G=(k=w.limit_period)==null?void 0:k.map(V=>te[V]||V).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:w.id}),t.jsx("td",{children:t.jsx("strong",{children:w.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:w.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:w.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:w.type===1?zn(w.value):`${w.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[i("coupon.maxUses"),": ",w.limit_use??"∞"]}),w.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[i("coupon.maxUses")," ",w.limit_use_with_user,"/",i("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[H?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[i("coupon.plans"),": ",H]})}):null,G?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[i("coupon.cycles"),": ",G]})}):null,!H&&!G?t.jsx("span",{className:"tag muted-tag",children:i("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${w.show?"active":""}`,type:"button",onClick:()=>void $(w.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[Oo(w.started_at)," — ",Oo(w.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(hd(w)),children:[t.jsx(Ft,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(w.id),children:[t.jsx(Wt,{size:14}),i("common.delete")]})]})})]},w.id)}),!E&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(w=>{var H,te,G,oe;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",w.id]}),t.jsx("span",{className:`tag type-tag ${w.type===1?"fixed-type":"percent-type"}`,children:w.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:w.name,children:w.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:i("coupon.clickToCopy"),onClick:()=>{il(w.code).then(k=>{var V;(V=window.showToast)==null||V.call(window,k?`${i("coupon.copiedCode")}: ${w.code}`:i("common.copyFailed"),k?"success":"error")})},children:[t.jsx("code",{className:"mono",children:w.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(H=w.limit_plan_ids)!=null&&H.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:w.limit_plan_ids.map(k=>{const V=y.find(C=>C.id===k);return t.jsx("span",{className:"res-pill plan-pill",children:V?V.name:`#${k}`},k)})})]}):null,(te=w.limit_period)!=null&&te.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:w.limit_period.map(k=>t.jsx("span",{className:"res-pill cycle-pill",children:Uo(i)[k]||k},k))})]}):null,!((G=w.limit_plan_ids)!=null&&G.length)&&!((oe=w.limit_period)!=null&&oe.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Oo(w.started_at)," — ",Oo(w.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:i("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${w.show?"active":""}`,type:"button",onClick:()=>void $(w.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:w.type===1?zn(w.value).replace(/\s?₫/,""):`${w.value}`}),t.jsx("span",{className:"ticket-value-unit",children:w.type===1?"₫":i("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:w.limit_use??"∞"}),w.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[i("coupon.maxUses")," ",w.limit_use_with_user,"/",i("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(hd(w)),"aria-label":i("common.edit"),children:t.jsx(Ft,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(w.id),"aria-label":i("common.delete"),children:t.jsx(Wt,{size:15})})]})]})]},w.id)}),!E&&o.length===0?t.jsx("div",{className:"empty-state",children:i("coupon.empty")}):null]}),he>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{S(m-1),ce(m-1)},children:t.jsx(Sa,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",he]}),t.jsx("button",{className:"mini-button",disabled:m>=he,onClick:()=>{S(m+1),ce(m+1)},children:t.jsx(ka,{size:16})})]}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?i("coupon.edit"):i("coupon.add")}),t.jsx("p",{children:i("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:A,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:v.name,onChange:w=>j({...v,name:w.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.type")}),t.jsxs("select",{className:"config-input",value:v.type,onChange:w=>j({...v,type:w.target.value}),children:[t.jsx("option",{value:"1",children:i("coupon.type.fixed")}),t.jsx("option",{value:"2",children:i("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:v.value,onChange:w=>j({...v,value:w.target.value})})]})]}),v.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[i("coupon.code")," (",i("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:v.code,onChange:w=>j({...v,code:w.target.value}),placeholder:i("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:v.started_at,onChange:w=>j({...v,started_at:w.target.value}),onClick:w=>{var H,te;return(te=(H=w.currentTarget).showPicker)==null?void 0:te.call(H)},onFocus:w=>{var H,te;return(te=(H=w.currentTarget).showPicker)==null?void 0:te.call(H)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:v.ended_at,onChange:w=>j({...v,ended_at:w.target.value}),onClick:w=>{var H,te;return(te=(H=w.currentTarget).showPicker)==null?void 0:te.call(H)},onFocus:w=>{var H,te;return(te=(H=w.currentTarget).showPicker)==null?void 0:te.call(H)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.limit_use,onChange:w=>j({...v,limit_use:w.target.value}),placeholder:i("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.limit_use_with_user,onChange:w=>j({...v,limit_use_with_user:w.target.value}),placeholder:i("coupon.unlimited")})]})]}),v.id?null:t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.generate_count,onChange:w=>j({...v,generate_count:w.target.value}),placeholder:i("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPlans")}),v.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:v.limit_plan_ids.map(w=>{const H=y.find(te=>te.id===w);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const te=v.limit_plan_ids.filter(G=>G!==w);j({...v,limit_plan_ids:te})},children:[H?H.name:`#${w}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},w)})}),y.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("coupon.searchPlans"),value:I,onChange:w=>se(w.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[y.filter(w=>w.name.toLowerCase().includes(I.toLowerCase())).map(w=>{const H=v.limit_plan_ids.includes(w.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:H,onChange:te=>{const G=te.target.checked?[...v.limit_plan_ids,w.id]:v.limit_plan_ids.filter(oe=>oe!==w.id);j({...v,limit_plan_ids:G})}}),t.jsx("span",{children:w.name})]},w.id)}),y.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPeriods")}),v.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:v.limit_period.map(w=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const H=v.limit_period.filter(te=>te!==w);j({...v,limit_period:H})},children:[Uo(i)[w]||w," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},w))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(Uo(i)).map(([w,H])=>{const te=v.limit_period.includes(w);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:te,onChange:G=>{const oe=G.target.checked?[...v.limit_period,w]:v.limit_period.filter(k=>k!==w);j({...v,limit_period:oe})}}),t.jsx("span",{children:H})]},w)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[t.jsx(En,{size:16}),i(P?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Ro(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Jj(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function xd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function Vj(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState([]),[u,f]=h.useState(0),[m,S]=h.useState(1),[y,x]=h.useState([]),[v,j]=h.useState(null),[E,Y]=h.useState(!0),[P,Z]=h.useState(!1),[M,B]=h.useState(""),[R,U]=h.useState(""),[I,se]=h.useState("");h.useEffect(()=>{v||se("")},[v]);const ce=Jj(i),A=h.useCallback(async(w=1)=>{Y(!0),B("");try{const H=await O1(w,15);d(H.data),f(H.total)}catch(H){B(H instanceof Error?H.message:i("giftcard.loadFailed"))}finally{Y(!1)}},[i]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}A(1),El().then(x).catch(()=>{})},[A,s]);async function $(w){var H,te;if(w.preventDefault(),!!v){Z(!0),B(""),U("");try{const G=v.type==="1"?Math.round(Number(v.value)*100):Number(v.value);await U1({id:v.id,name:v.name,type:Number(v.type),value:G,code:v.code||void 0,started_at:Math.floor(new Date(v.started_at).getTime()/1e3),ended_at:Math.floor(new Date(v.ended_at).getTime()/1e3),limit_use:v.limit_use?Number(v.limit_use):null,plan_id:v.plan_id?Number(v.plan_id):null,generate_count:v.generate_count?Number(v.generate_count):void 0}),j(null),(H=window.showToast)==null||H.call(window,i("giftcard.saveSuccess"),"success"),await A(m)}catch(G){(te=window.showToast)==null||te.call(window,G instanceof Error?G.message:i("giftcard.saveFailed"),"error")}finally{Z(!1)}}}async function ne(w){var H;(H=window.showConfirm)==null||H.call(window,{message:i("giftcard.deleteConfirm"),onConfirm:async()=>{var te,G;try{await R1(w),(te=window.showToast)==null||te.call(window,i("giftcard.deleteSuccess"),"success"),await A(m)}catch(oe){(G=window.showToast)==null||G.call(window,oe instanceof Error?oe.message:i("giftcard.deleteFailed"),"error")}}})}const he=Math.ceil(u/15);return t.jsxs(Jt,{title:i("giftcard.title"),subtitle:i("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("giftcard.heading")}),t.jsxs("p",{children:[u," ",i("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void A(m),disabled:E,children:[t.jsx(Tt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(xd()),children:[t.jsx(Tn,{size:16}),i("giftcard.add")]})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,R?t.jsx("div",{className:"form-success",children:R}):null,E&&o.length===0?t.jsx(jt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("giftcard.thId")}),t.jsx("th",{children:i("giftcard.thName")}),t.jsx("th",{children:i("giftcard.thCode")}),t.jsx("th",{children:i("giftcard.thType")}),t.jsx("th",{children:i("giftcard.thValue")}),t.jsx("th",{children:i("giftcard.thBoundPlan")}),t.jsx("th",{children:i("giftcard.thUses")}),t.jsx("th",{children:i("giftcard.thPeriod")}),t.jsx("th",{children:i("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(w=>{var H;return t.jsxs("tr",{children:[t.jsx("td",{children:w.id}),t.jsx("td",{children:t.jsx("strong",{children:w.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:w.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:ce[w.type]??w.type})}),t.jsx("td",{children:t.jsx("strong",{children:w.type===1?zn(w.value):w.value})}),t.jsx("td",{children:w.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((H=y.find(te=>te.id===w.plan_id))==null?void 0:H.name)||`#${w.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:i("giftcard.planNone")})}),t.jsx("td",{children:w.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Ro(w.started_at)," — ",Ro(w.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(xd(w)),children:[t.jsx(Ft,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(w.id),children:[t.jsx(Wt,{size:14}),i("common.delete")]})]})})]},w.id)}),!E&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(w=>{var H;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",w.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:ce[w.type]??w.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:w.name,children:w.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:i("giftcard.clickToCopy"),onClick:()=>{il(w.code).then(te=>{var G;(G=window.showToast)==null||G.call(window,te?i("giftcard.copiedCode").replace("{code}",w.code):i("common.copyFailed"),te?"success":"error")})},children:[t.jsx("code",{className:"mono",children:w.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:w.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((H=y.find(te=>te.id===w.plan_id))==null?void 0:H.name)||`#${w.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Ro(w.started_at)," — ",Ro(w.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:w.type===1?zn(w.value).replace(/\s?₫/,""):`${w.value}`}),t.jsx("span",{className:"ticket-value-unit",children:w.type===1?"₫":ce[w.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:w.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(xd(w)),"aria-label":i("common.edit"),children:t.jsx(Ft,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(w.id),"aria-label":i("common.delete"),children:t.jsx(Wt,{size:15})})]})]})]},w.id)}),!E&&o.length===0?t.jsx("div",{className:"empty-state",children:i("giftcard.empty")}):null]}),he>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{S(m-1),A(m-1)},children:t.jsx(Sa,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",he]}),t.jsx("button",{className:"mini-button",disabled:m>=he,onClick:()=>{S(m+1),A(m+1)},children:t.jsx(ka,{size:16})})]}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?i("giftcard.edit"):i("giftcard.create")}),t.jsx("p",{children:i("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:$,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:v.name,onChange:w=>j({...v,name:w.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:v.type,onChange:w=>j({...v,type:w.target.value}),children:Object.entries(ce).map(([w,H])=>t.jsx("option",{value:w,children:H},w))})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:v.value,onChange:w=>j({...v,value:w.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:v.started_at,onChange:w=>j({...v,started_at:w.target.value}),onClick:w=>{var H,te;return(te=(H=w.currentTarget).showPicker)==null?void 0:te.call(H)},onFocus:w=>{var H,te;return(te=(H=w.currentTarget).showPicker)==null?void 0:te.call(H)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:v.ended_at,onChange:w=>j({...v,ended_at:w.target.value}),onClick:w=>{var H,te;return(te=(H=w.currentTarget).showPicker)==null?void 0:te.call(H)},onFocus:w=>{var H,te;return(te=(H=w.currentTarget).showPicker)==null?void 0:te.call(H)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.limit_use,onChange:w=>j({...v,limit_use:w.target.value}),placeholder:i("giftcard.placeholderUnlimited")})]}),v.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.generate_count,onChange:w=>j({...v,generate_count:w.target.value}),placeholder:i("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("giftcard.bindPlan")}),v.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const w=y.find(H=>String(H.id)===v.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{j({...v,plan_id:""})},children:[w?w.name:`#${v.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),y.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("giftcard.searchPlans"),value:I,onChange:w=>se(w.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!v.plan_id,onChange:()=>{j({...v,plan_id:""})}}),t.jsx("span",{children:i("giftcard.noneAllPlans")})]}),y.filter(w=>w.name.toLowerCase().includes(I.toLowerCase())).map(w=>{const H=String(w.id)===v.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:H,onChange:te=>{te.target.checked&&j({...v,plan_id:String(w.id)})}}),t.jsx("span",{children:w.name})]},w.id)}),y.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[t.jsx(En,{size:16}),i(P?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const is="Tương đối",_a="=";function Ho(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Pj(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Rh(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function bd(s){return+(s/1073741824).toFixed(2)}function gd(s){return Math.round(s*1073741824)}function Lo(s){return(s/1073741824).toFixed(2)}function Wj(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function pi(s){if(s===0)return"0.00 MB";const i=s/1073741824;return i<.1?`${(s/1048576).toFixed(2)} MB`:`${i.toFixed(2)} GB`}const Hd=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Rx="user_visible_columns";function Ij(){if(typeof window<"u")try{const s=localStorage.getItem(Rx);if(s)return new Set(JSON.parse(s))}catch{}return new Set(Hd.filter(s=>s.defaultVisible).map(s=>s.key))}const Xo=[{value:"email",label:"Email",condition:is,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:_a,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:_a,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:_a,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:_a,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:is,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:_a,placeholder:"12345"},{value:"uuid",label:"UUID",condition:is,placeholder:"UUID"},{value:"token",label:"Token",condition:is,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:is,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:_a,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:_a,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:_a,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:_a,placeholder:"1780366403"}],ew=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function sn(s,i){switch(s){case"id":return i("user.colId");case"email":return i("user.colEmail");case"status":return i("user.colStatus");case"plan":return i("user.colPlan");case"group":return i("user.colGroup");case"used":return i("user.colUsed");case"traffic":return i("user.colTraffic");case"devices":return i("user.colDevices");case"expires":return i("user.colExpires");case"balance":return i("user.colBalance");case"commission":return i("user.colCommission");case"joined":return i("user.colJoined");case"actions":return i("user.colActions");default:return""}}function tw(s,i){var u;const o=((u=Xo.find(f=>f.value===s))==null?void 0:u.label)??s,d=f=>{const m=i(f);return m===f?o:m};switch(s){case"email":return i("user.filterEmail");case"id":return i("user.filterId");case"plan_id":return i("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return i("user.filterInviterEmail");case"invite_user_id":return i("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return i("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function yd(s){return Xo.find(i=>i.value===s)??Xo[0]}function nw(s,i){switch(s){case"month_price":return i("order.period.month_price");case"quarter_price":return i("order.period.quarter_price");case"half_year_price":return i("order.period.half_year_price");case"year_price":return i("order.period.year_price");case"two_year_price":return i("order.period.two_year_price");case"three_year_price":return i("order.period.three_year_price");case"onetime_price":return i("order.period.onetime_price");case"reset_price":return i("order.period.reset_price");default:return""}}function aw(){const s=Ot(),i=na(),{t:o}=$e(),[d,u]=h.useState([]),[f,m]=h.useState([]),[S,y]=h.useState([]),[x,v]=h.useState(0),[j,E]=h.useState(1),[Y,P]=h.useState(""),[Z,M]=h.useState("email"),[B,R]=h.useState(!0),[U,I]=h.useState(""),[se,ce]=h.useState(Ij),[A,$]=h.useState(!1),ne=h.useRef(null),[he,w]=h.useState(null),[H,te]=h.useState(null),[G,oe]=h.useState(null),[k,V]=h.useState({}),[C,de]=h.useState(!1),[N,_]=h.useState(!1),[T,ie]=h.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[pe,Ne]=h.useState(!1),[ze,Ae]=h.useState(null),[Je,Re]=h.useState({plan_id:"",period:"month_price",total_amount:""}),[et,Et]=h.useState(!1),[Rt,rn]=h.useState(null),[gt,$t]=h.useState(null),[Ht,It]=h.useState([]),[bt,Qt]=h.useState(0),[ve,_t]=h.useState(1),[Me]=h.useState(10),[D,ye]=h.useState(!1),[Oe,Le]=h.useState("");h.useEffect(()=>{function g(ue){const me=ue.target instanceof Element?ue.target:null;he!==null&&(!me||!me.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(w(null),te(null)),A&&ne.current&&!ne.current.contains(ue.target)&&$(!1)}return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[he,A]),h.useEffect(()=>{if(he===null)return;const g=()=>{w(null),te(null)};return window.addEventListener("resize",g),window.addEventListener("scroll",g,!0),()=>{window.removeEventListener("resize",g),window.removeEventListener("scroll",g,!0)}},[he]);function mt(g,ue){if(he===g){w(null),te(null);return}const me=ue.getBoundingClientRect(),ke=220,Ie=392,mn=6,Lt=8,Fn=Math.max(Lt,Math.min(window.innerWidth-ke-Lt,me.right-ke)),za=me.bottom+mn+Ie<=window.innerHeight-Lt?me.bottom+mn:Math.max(Lt,me.top-Ie-mn);te({top:za,left:Fn}),w(g)}function K(){w(null),te(null)}function we(g,ue=!1,me=""){const ke=Ie=>{K(),Ie()};return t.jsxs("div",{className:`action-dropdown-menu ${ue?"action-dropdown-menu-fixed":""} ${me}`.trim(),style:ue&&H?{top:H.top,left:H.left}:void 0,onMouseDown:Ie=>Ie.stopPropagation(),children:[t.jsxs("button",{type:"button",onClick:()=>ke(()=>bs(g)),children:[t.jsx(Ft,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>ke(()=>fi(g)),children:[t.jsx(Qv,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>ke(()=>void re(g)),children:[t.jsx(al,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>ke(()=>Ye(g)),children:[t.jsx(Lv,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>ke(()=>ee(g)),children:[t.jsx(Qd,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>ke(()=>nt(g)),children:[t.jsx(Sv,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>ke(()=>ft(g)),children:[t.jsx(dx,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>ke(()=>ht(g)),children:[t.jsx(Qo,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>ke(()=>pn(g)),children:[t.jsx(dh,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>ke(()=>Ce(g)),children:[t.jsx(Wt,{size:14}),o("user.actionDelete")]})]})}function _e(g){ce(ue=>{const me=new Set(ue);me.has(g)?me.delete(g):me.add(g);try{localStorage.setItem(Rx,JSON.stringify([...me]))}catch{}return me})}const be=g=>se.has(g),tt=Hd.filter(g=>se.has(g.key)).length,Ue=h.useCallback(async(g=1,ue,me)=>{R(!0),I("");try{const ke=ue==null?void 0:ue.trim(),Ie=yd(me||"email"),mn=ke?[{key:Ie.value,condition:Ie.condition,value:ke}]:void 0,Lt=await Md(g,15,mn);u(Lt.data),v(Lt.total)}catch(ke){I(ke instanceof Error?ke.message:o("user.loadFailed"))}finally{R(!1)}},[]),Ge=h.useCallback(async()=>{try{const[g,ue]=await Promise.all([El(),hs()]);m(g),y(ue)}catch{}},[]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}const g=new URLSearchParams(i.search),me=[["email",g.get("email")||g.get("filter_email")],["id",g.get("id")||g.get("user_id")||g.get("filter_user_id")],["plan_id",g.get("plan_id")],["invite_user_id",g.get("invite_user_id")],["invite_by_email",g.get("invite_by_email")],["uuid",g.get("uuid")],["token",g.get("token")],["remarks",g.get("remarks")]].find(([,ke])=>ke==null?void 0:ke.trim());if(me){const[ke,Ie]=me,mn=yd(ke),Lt=(Ie==null?void 0:Ie.trim())??"";M(mn.value),P(Lt),E(1),Ue(1,Lt,mn.value)}else Ue(1);Ge()},[Ue,Ge,s,i.search]);function Pe(){E(1),Ue(1,Y,Z)}function st(){P(""),E(1),Ue(1)}function Zn(g){E(g),Ue(g,Y,Z)}function Xt(g){if(g.plan_name)return g.plan_name;if(!g.plan_id)return"—";const ue=f.find(me=>me.id===g.plan_id);return ue?ue.name:`#${g.plan_id}`}function rl(g){if(!g.group_id)return"—";const ue=S.find(me=>me.id===g.group_id);return ue?ue.name:`#${g.group_id}`}function en(g,ue){const me=o(g);return me===g?ue:me}function Mn(g){const ue=Number(g.device_limit??0);return ue>0?`${Number(g.device_bound_count??0)} / ${ue}`:en("user.unlimited","Unlimited")}function aa(g){const ue=Number(g.device_bound_count??0),me=Number(g.device_pending_count??0),ke=Number(g.device_banned_count??0),Ie=Number(g.device_online_count??0),mn=Number(g.alive_ip??0),Lt=Number(g.device_limit??0),Fn=Lt>0?`${ue} / ${Lt}`:`${ue} / ${en("user.unlimited","Unlimited")}`,la=[`${en("user.deviceBound","Bound")}: ${Fn}`,`${en("user.devicePending","Pending")}: ${me}`,`${en("user.deviceBanned","Banned")}: ${ke}`,`${en("user.deviceOnline","Online devices")}: ${Ie}`,`${en("user.deviceOnlineIp","Online IP")}: ${mn}`];return g.ips&&la.push(g.ips),la.join(`
`)}function vn(g){s.push(`/device?user_id=${encodeURIComponent(String(g.id))}`)}function L(g,ue="left"){const me=`${en("user.deviceOnlineShort","Online")}: ${Number(g.device_online_count??0)} | ${en("user.deviceIpShort","IP")}: ${Number(g.alive_ip??0)}`;return t.jsxs("button",{className:`device-cell-button ${ue==="right"?"align-right":""}`,type:"button",title:aa(g),onClick:()=>vn(g),children:[t.jsx("span",{className:"device-cell-primary",children:Mn(g)}),t.jsx("span",{className:"device-cell-secondary",children:me})]})}async function re(g){var ke,Ie;const ue=g.subscribe_url;if(!ue){(ke=window.showToast)==null||ke.call(window,o("user.toastNoSubscribeUrl"),"error");return}const me=await il(ue);(Ie=window.showToast)==null||Ie.call(window,o(me?"user.toastUrlCopied":"common.copyFailed"),me?"success":"error"),w(null)}function ee(g){var ue;w(null),(ue=window.showConfirm)==null||ue.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var me,ke;try{await B1(g.id),(me=window.showToast)==null||me.call(window,o("user.toastSecretResetSuccess"),"success"),await Ue(j,Y,Z)}catch(Ie){(ke=window.showToast)==null||ke.call(window,Ie instanceof Error?Ie.message:o("user.toastSecretResetFailed"),"error")}}})}function Ce(g){var ue;w(null),(ue=window.showConfirm)==null||ue.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var me,ke;try{await L1(g.id),(me=window.showToast)==null||me.call(window,o("user.toastDeletedSuccess"),"success"),await Ue(j,Y,Z)}catch(Ie){(ke=window.showToast)==null||ke.call(window,Ie instanceof Error?Ie.message:o("user.toastDeletedFailed"),"error")}}})}function Ye(g){var me;w(null);const ue=g.subscribe_url;if(!ue){(me=window.showToast)==null||me.call(window,o("user.toastNoSubscribeUrl"),"error");return}rn({url:ue,userId:g.id})}function nt(g){w(null),s.push(`/order?user_id=${g.id}`)}function ft(g){w(null),s.push(`/subscription?user_id=${g.id}`)}function ht(g){w(null),M("invite_user_id"),P(String(g.id)),Ue(1,String(g.id),"invite_user_id")}async function We(g,ue){ye(!0),Le("");try{const me=await Z1(g,ue,Me);It(me.data||[]),Qt(me.total||0),_t(ue)}catch(me){Le(me instanceof Error?me.message:o("user.historyLoading"))}finally{ye(!1)}}function pn(g){w(null),$t(g),We(g.id,1)}function fi(g){w(null),Ae(g.email),Re({plan_id:"",period:"month_price",total_amount:""})}async function hi(g){var ue,me;if(g.preventDefault(),!!ze){Et(!0);try{await jx({email:ze,plan_id:Number(Je.plan_id),period:Je.period,total_amount:(Number(Je.total_amount)||0)*100}),(ue=window.showToast)==null||ue.call(window,o("user.toastAssignSuccess"),"success"),Ae(null)}catch(ke){(me=window.showToast)==null||me.call(window,ke instanceof Error?ke.message:o("user.toastAssignFailed"),"error")}finally{Et(!1)}}}function bs(g){w(null),oe(g),V({id:g.id,email:g.email,invite_user_email:"",password:"",balance:g.balance,commission_balance:g.commission_balance,u:bd(g.u),d:bd(g.d),transfer_enable:bd(g.transfer_enable),device_limit:g.device_limit,network_settings:g.network_settings??"",expired_at:Pj(g.expired_at),plan_id:g.plan_id,banned:g.banned,commission_type:g.commission_type??0,commission_rate:g.commission_rate??"",discount:g.discount??"",speed_limit:g.speed_limit,is_admin:g.is_admin,is_staff:g.is_staff,remarks:g.remarks??""})}function Nt(g,ue){V(me=>({...me,[g]:ue}))}async function Kn(g){var ue,me;if(g.preventDefault(),!!G){de(!0);try{const ke={id:G.id,email:k.email,plan_id:k.plan_id||null,expired_at:Rh(String(k.expired_at??"")),transfer_enable:gd(Number(k.transfer_enable??0)),speed_limit:k.speed_limit||null,device_limit:k.device_limit||null,u:gd(Number(k.u??0)),d:gd(Number(k.d??0)),balance:Number(k.balance??0),commission_balance:Number(k.commission_balance??0),commission_rate:k.commission_rate!==""&&k.commission_rate!==null?Number(k.commission_rate):null,commission_type:Number(k.commission_type??0),discount:k.discount!==""&&k.discount!==null?Number(k.discount):null,network_settings:k.network_settings||null,remarks:k.remarks||null,is_admin:Number(k.is_admin??0),is_staff:Number(k.is_staff??0),banned:Number(k.banned??0)};k.invite_user_email&&(ke.invite_user_email=k.invite_user_email),k.password&&(ke.password=k.password),await H1(ke),(ue=window.showToast)==null||ue.call(window,o("user.toastSaveSuccess"),"success"),oe(null),await Ue(j,Y,Z)}catch(ke){(me=window.showToast)==null||me.call(window,ke instanceof Error?ke.message:o("user.toastSaveFailed"),"error")}finally{de(!1)}}}async function Zt(g){var ue,me;g.preventDefault(),Ne(!0);try{await q1({email_prefix:T.email_prefix,email_suffix:T.email_suffix,password:T.password||void 0,plan_id:T.plan_id?Number(T.plan_id):void 0,expired_at:Rh(T.expired_at)}),(ue=window.showToast)==null||ue.call(window,o("user.toastCreateSuccess"),"success"),_(!1),ie({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await Ue(j,Y,Z)}catch(ke){(me=window.showToast)==null||me.call(window,ke instanceof Error?ke.message:o("user.toastCreateFailed"),"error")}finally{Ne(!1)}}const St=Math.ceil(x/15),Ca=yd(Z);return t.jsxs(Jt,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[x," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:ne,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>$(!A),children:[t.jsx(yv,{size:16}),o("user.columns")]}),A?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:tt})})}),Hd.map(g=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:se.has(g.key),onChange:()=>_e(g.key)}),t.jsx("span",{children:sn(g.key,o)})]},g.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Ue(j,Y,Z),disabled:B,children:[t.jsx(Tt,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>_(!0),children:[t.jsx(Tn,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:Z,onChange:g=>M(g.target.value),children:Xo.map(g=>t.jsx("option",{value:g.value,children:tw(g.value,o)},g.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Fo,{size:16}),t.jsx("input",{className:"config-input search-input",value:Y,onChange:g=>P(g.target.value),placeholder:Ca.placeholder,onKeyDown:g=>g.key==="Enter"&&Pe()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Pe,children:[t.jsx(fs,{size:16}),o("user.filter")]}),Y?t.jsxs("button",{className:"ghost-button",type:"button",onClick:st,children:[t.jsx(ct,{size:16}),o("user.clearFilter")]}):null]}),U?t.jsx("div",{className:"form-error",children:U}):null,B&&d.length===0?t.jsx(jt,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${B?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(g=>{const ue=Lo(g.u+g.d),me=Lo(g.transfer_enable),ke=parseFloat(ue);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",g.id]}),t.jsx("span",{className:"user-email",title:g.email,children:g.email})]}),g.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Xt(g)," / ",g.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):rl(g)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${ke>0?ke>parseFloat(me)*.9?"high":"ok":""}`,children:[ue," GB"]})," / ",me," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:sn("devices",o)}),t.jsx("span",{className:"info-val",children:L(g,"right")})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:sn("expires",o)}),t.jsx("span",{className:"info-val",children:g.expired_at?t.jsx("span",{className:`expiry-date ${g.expired_at<Date.now()/1e3?"expired":""}`,children:Ho(g.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(g.balance/100).toFixed(2)," ₫ / ",(g.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:sn("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:Ho(g.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${he===g.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>w(he===g.id?null:g.id),children:[o("user.colActions")," ",t.jsx(zl,{size:14})]}),he===g.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>w(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:Ie=>Ie.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:g.email}),t.jsxs("small",{children:["#",g.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:t.jsx(ct,{size:16})})]}),we(g,!1,"mobile-action-menu")]})}):null]})})]},g.id)}),!B&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[be("id")&&t.jsx("th",{children:sn("id",o)}),be("email")&&t.jsx("th",{children:sn("email",o)}),be("status")&&t.jsx("th",{children:sn("status",o)}),be("plan")&&t.jsx("th",{children:sn("plan",o)}),be("group")&&t.jsx("th",{children:sn("group",o)}),be("used")&&t.jsx("th",{children:sn("used",o)}),be("traffic")&&t.jsx("th",{children:sn("traffic",o)}),be("devices")&&t.jsx("th",{children:sn("devices",o)}),be("expires")&&t.jsx("th",{children:sn("expires",o)}),be("balance")&&t.jsx("th",{children:sn("balance",o)}),be("commission")&&t.jsx("th",{children:sn("commission",o)}),be("joined")&&t.jsx("th",{children:sn("joined",o)}),be("actions")&&t.jsx("th",{children:sn("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(g=>{const ue=Lo(g.u+g.d),me=Lo(g.transfer_enable),ke=parseFloat(ue);return t.jsxs("tr",{children:[be("id")&&t.jsx("td",{children:g.id}),be("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:g.email})}),be("status")&&t.jsx("td",{children:g.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),be("plan")&&t.jsx("td",{children:Xt(g)}),be("group")&&t.jsx("td",{children:g.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):rl(g)}),be("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${ke>0?ke>parseFloat(me)*.9?"high":"ok":""}`,children:ue})}),be("traffic")&&t.jsx("td",{children:me}),be("devices")&&t.jsx("td",{children:L(g)}),be("expires")&&t.jsx("td",{children:g.expired_at?t.jsx("span",{className:`expiry-date ${g.expired_at<Date.now()/1e3?"expired":""}`,children:Ho(g.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),be("balance")&&t.jsx("td",{children:(g.balance/100).toFixed(2)}),be("commission")&&t.jsx("td",{children:(g.commission_balance/100).toFixed(2)}),be("joined")&&t.jsx("td",{children:t.jsx("small",{children:Ho(g.created_at)})}),be("actions")&&t.jsx("td",{children:t.jsxs("div",{className:`action-dropdown-wrap ${he===g.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:Ie=>mt(g.id,Ie.currentTarget),children:[o("user.colActions")," ",t.jsx(zl,{size:14})]}),he===g.id&&H?iy.createPortal(we(g,!0),document.body):null]})})]},g.id)}),!B&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:tt,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),St>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:j<=1,onClick:()=>Zn(j-1),children:t.jsx(Sa,{size:16})}),Array.from({length:Math.min(5,St)},(g,ue)=>{let me;return St<=5||j<=3?me=ue+1:j>=St-2?me=St-4+ue:me=j-2+ue,t.jsx("button",{className:`mini-button ${me===j?"active-page":""}`,onClick:()=>Zn(me),children:me},me)}),St>5?t.jsxs("span",{className:"page-info",children:["… ",St]}):null,t.jsx("button",{className:"mini-button",disabled:j>=St,onClick:()=>Zn(j+1),children:t.jsx(ka,{size:16})})]})}):null]}),G?t.jsx("div",{className:"modal-backdrop",onClick:()=>oe(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>oe(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:Kn,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(k.email??""),onChange:g=>Nt("email",g.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(k.invite_user_email??""),onChange:g=>Nt("invite_user_email",g.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(k.password??""),onChange:g=>Nt("password",g.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(k.balance??0)/100).toFixed(2)),onChange:g=>Nt("balance",Math.round(Number(g.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(k.commission_balance??0)/100).toFixed(2)),onChange:g=>Nt("commission_balance",Math.round(Number(g.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(k.u??0),onChange:g=>Nt("u",g.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(k.d??0),onChange:g=>Nt("d",g.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(k.transfer_enable??0),onChange:g=>Nt("transfer_enable",g.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(k.device_limit??""),onChange:g=>Nt("device_limit",g.target.value?Number(g.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.sniUserLabel"),t.jsx("input",{className:"config-input",value:String(k.network_settings??""),onChange:g=>Nt("network_settings",g.target.value),placeholder:o("user.sniUserPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(k.expired_at??""),onChange:g=>Nt("expired_at",g.target.value),onClick:g=>{var ue,me;return(me=(ue=g.currentTarget).showPicker)==null?void 0:me.call(ue)},onFocus:g=>{var ue,me;return(me=(ue=g.currentTarget).showPicker)==null?void 0:me.call(ue)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(k.plan_id??""),onChange:g=>Nt("plan_id",g.target.value?Number(g.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),f.map(g=>t.jsx("option",{value:g.id,children:g.name},g.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(k.banned??0),onChange:g=>Nt("banned",Number(g.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(k.commission_type??0),onChange:g=>Nt("commission_type",Number(g.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(k.commission_rate??""),onChange:g=>Nt("commission_rate",g.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(k.discount??""),onChange:g=>Nt("discount",g.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(k.speed_limit??""),onChange:g=>Nt("speed_limit",g.target.value?Number(g.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${k.is_admin?"active":""}`,onClick:()=>Nt("is_admin",k.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${k.is_staff?"active":""}`,onClick:()=>Nt("is_staff",k.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(k.remarks??""),onChange:g=>Nt("remarks",g.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>oe(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:C,children:o(C?"common.processing":"common.save")})]})]})]})}):null,N?t.jsx("div",{className:"modal-backdrop",onClick:()=>_(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(!1),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Zt,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:T.email_prefix,onChange:g=>ie({...T,email_prefix:g.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:T.email_suffix,onChange:g=>ie({...T,email_suffix:g.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:T.password,onChange:g=>ie({...T,password:g.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:T.plan_id,onChange:g=>ie({...T,plan_id:g.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),f.map(g=>t.jsx("option",{value:g.id,children:g.name},g.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:T.expired_at,onChange:g=>ie({...T,expired_at:g.target.value}),onClick:g=>{var ue,me;return(me=(ue=g.currentTarget).showPicker)==null?void 0:me.call(ue)},onFocus:g=>{var ue,me;return(me=(ue=g.currentTarget).showPicker)==null?void 0:me.call(ue)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:pe,children:o(pe?"user.creating":"user.createUser")})]})]})]})}):null,ze?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ae(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ae(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:hi,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:ze})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:Je.plan_id,onChange:g=>Re({...Je,plan_id:g.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),f.map(g=>t.jsx("option",{value:g.id,children:g.name},g.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:Je.period,onChange:g=>Re({...Je,period:g.target.value}),children:ew.map(g=>t.jsx("option",{value:g.value,children:nw(g.value,o)},g.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Je.total_amount,onChange:g=>Re({...Je,total_amount:g.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Ae(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:et,children:o(et?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),Rt?t.jsx("div",{className:"modal-backdrop",onClick:()=>rn(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>rn(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Rt.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:Rt.userId})})]})]})}):null,gt?t.jsx("div",{className:"modal-backdrop",onClick:()=>$t(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:gt.email,id:gt.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>$t(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[Oe?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:Oe}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:bt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:pi(Ht.reduce((g,ue)=>g+ue.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:pi(Ht.reduce((g,ue)=>g+ue.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:pi(Ht.reduce((g,ue)=>g+ue.u+ue.d,0))})]})]}),D?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(jt,{label:o("user.historyLoading")})}):Ht.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(dh,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:Ht.map(g=>{const ue=pi(g.u),me=pi(g.d),ke=pi(g.u+g.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:Wj(g.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(g.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:ue}),t.jsx("td",{style:{color:"var(--muted)"},children:me}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:ke})]},g.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min((ve-1)*Me+1,bt),end:Math.min(ve*Me,bt),total:bt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:ve<=1,onClick:()=>We(gt.id,ve-1),children:[t.jsx(Sa,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:ve*Me>=bt,onClick:()=>We(gt.id,ve+1),children:[o("user.historyNext"),t.jsx(ka,{size:16})]})]})]})]})]})]})}):null]})}function lw(s,i=8,o=4){return s.length<=i+o+3?s:`${s.slice(0,i)}...${s.slice(-o)}`}function ds({value:s,onCopy:i,className:o="",copyClassName:d="",prefixLength:u=8,suffixLength:f=4}){const{t:m}=$e(),[S,y]=h.useState(!1),x=S?s:lw(s,u,f);return t.jsxs("span",{className:`masked-uuid ${o}`.trim(),children:[t.jsxs("button",{className:`copy-value masked-uuid-copy ${d}`.trim(),type:"button",title:m("uuid.copy"),onClick:()=>void i(),children:[t.jsx(al,{size:14}),t.jsx("span",{className:"mono masked-uuid-text",title:S?s:x,children:x})]}),t.jsx("button",{className:"masked-uuid-toggle",type:"button",title:m(S?"uuid.hide":"uuid.showFull"),"aria-label":m(S?"uuid.hide":"uuid.showFull"),onClick:()=>y(v=>!v),children:S?t.jsx(_v,{size:14}):t.jsx(Nv,{size:14})})]})}const Hh=15,Lh=20,iw=["email","id","user_id","plan_id","status"];function Ia(s,i){return s?new Date(s*1e3).toLocaleString():i}function sw(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function ow(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function kl(s){return+(s/1073741824).toFixed(2)}function vd(s){return Math.round((Number(s)||0)*1073741824)}function rw(s){return s==="email"?"like":"="}function cw(s,i){switch(s){case"email":return i("subscription.filterEmail");case"id":return i("subscription.filterId");case"user_id":return i("subscription.filterUserId");case"plan_id":return i("subscription.filterPlanId");case"status":return i("subscription.filterStatus");default:return s}}function qh(s,i){return i(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Bh(s,i){switch(s){case"bound":return i("subscription.slotStatusBound");case"banned":return i("subscription.slotStatusBanned");default:return i("subscription.slotStatusPending")}}function Gh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function dw(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function uw(){const s=Ot(),i=na(),{t:o}=$e(),[d,u]=h.useState([]),[f,m]=h.useState(0),[S,y]=h.useState(1),[x,v]=h.useState("email"),[j,E]=h.useState(""),[Y,P]=h.useState(!0),[Z,M]=h.useState(""),[B,R]=h.useState(null),[U,I]=h.useState({}),[se,ce]=h.useState(null),[A,$]=h.useState(null),[ne,he]=h.useState([]),[w,H]=h.useState(0),[te,G]=h.useState(1),[oe,k]=h.useState(!1),[V,C]=h.useState(""),[de,N]=h.useState(null);function _(D){const ye=D==null?void 0:D.trim();ye&&s.push(`/user?email=${encodeURIComponent(ye)}`)}const T=h.useCallback(async(D=1,ye="",Oe="email")=>{P(!0),M("");try{const Le=ye.trim()?[{key:Oe,condition:rw(Oe),value:ye.trim()}]:void 0,mt=await G1(D,Hh,Le);u(mt.data),m(mt.total),y(D)}catch(Le){M(Le instanceof Error?Le.message:o("subscription.loadFailed"))}finally{P(!1)}},[o]),ie=h.useCallback(async(D,ye=1)=>{k(!0),C("");try{const Oe=await Nx(ye,Lh,[{key:"subscription_id",condition:"=",value:String(D.id)}]);he(Oe.data),H(Oe.total),G(ye)}catch(Oe){C(Oe instanceof Error?Oe.message:o("subscription.slotsLoadFailed"))}finally{k(!1)}},[o]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}const D=new URLSearchParams(i.search),Oe=[["user_id",D.get("user_id")],["id",D.get("id")],["plan_id",D.get("plan_id")],["email",D.get("email")],["status",D.get("status")]].find(([,Le])=>Le&&Le.trim());if(Oe){const[Le,mt]=Oe,K=mt??"";v(Le),E(K),T(1,K,Le);return}T()},[T,i.search,s]);function pe(D){D.preventDefault(),T(1,j,x)}function Ne(){if(E(""),i.search){s.replace("/subscription");return}T(1,"",x)}function ze(D){R(D),I({transfer_enable:String(kl(D.transfer_enable)),u:String(kl(D.u)),d:String(kl(D.d)),device_limit:D.device_limit===null?"":String(D.device_limit),speed_limit:D.speed_limit===null?"":String(D.speed_limit),expired_at:sw(D.expired_at),status:D.status,auto_renewal:String(D.auto_renewal||0),remarks:D.remarks??""})}async function Ae(D){var ye,Oe;if(D.preventDefault(),!!B){ce(B.id);try{await $1({id:B.id,transfer_enable:vd(U.transfer_enable),u:vd(U.u),d:vd(U.d),device_limit:U.device_limit===""?null:Number(U.device_limit),speed_limit:U.speed_limit===""?null:Number(U.speed_limit),expired_at:ow(U.expired_at),status:U.status,auto_renewal:Number(U.auto_renewal),remarks:U.remarks}),R(null),(ye=window.showToast)==null||ye.call(window,o("subscription.updateSuccess"),"success"),await T(S,j,x)}catch(Le){(Oe=window.showToast)==null||Oe.call(window,Le instanceof Error?Le.message:o("subscription.saveFailed"),"error")}finally{ce(null)}}}function Je(D){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:o("subscription.resetConfirm",{id:D.id}),onConfirm:async()=>{var Oe,Le;ce(D.id);try{await Q1(D.id),(Oe=window.showToast)==null||Oe.call(window,o("subscription.resetSuccess"),"success"),await T(S,j,x)}catch(mt){(Le=window.showToast)==null||Le.call(window,mt instanceof Error?mt.message:o("subscription.resetFailed"),"error")}finally{ce(null)}}})}async function Re(D){var Oe;if(!D)return;const ye=await il(D);(Oe=window.showToast)==null||Oe.call(window,o(ye?"subscription.copySuccess":"common.copyFailed"),ye?"success":"error")}async function et(D){var ye,Oe;N(D.id);try{let Le=D.subscribe_url||null;if(Le||(Le=(await Y1(D.id)).data,Le&&u(K=>K.map(we=>we.id===D.id?{...we,subscribe_url:Le}:we))),!Le){(ye=window.showToast)==null||ye.call(window,o("common.copyFailed"),"error");return}await Re(Le)}catch(Le){(Oe=window.showToast)==null||Oe.call(window,Le instanceof Error?Le.message:o("common.copyFailed"),"error")}finally{N(null)}}function Et(D){$(D),he([]),H(0),G(1),ie(D,1)}function Rt(D=te){return A?ie(A,D):Promise.resolve()}function rn(D){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var Oe,Le;ce(D.id);try{await Sx(D.id),(Oe=window.showToast)==null||Oe.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([Rt(),T(S,j,x)])}catch(mt){(Le=window.showToast)==null||Le.call(window,mt instanceof Error?mt.message:o("subscription.unbindFailed"),"error")}finally{ce(null)}}})}function gt(D){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var Oe,Le;ce(D.id);try{await kx(D.id),(Oe=window.showToast)==null||Oe.call(window,o("subscription.banSuccess"),"success"),await Promise.all([Rt(),T(S,j,x)])}catch(mt){(Le=window.showToast)==null||Le.call(window,mt instanceof Error?mt.message:o("subscription.banFailed"),"error")}finally{ce(null)}}})}function $t(D){const ye=D.device_limit&&D.device_limit>0?String(D.device_limit):o("subscription.unlimited"),Oe=!!(D.device_count||D.device_limit&&D.device_limit>0);return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:D.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:ye})]}),D.device_limit&&D.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(D.device_count/D.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),Oe?t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Et(D),children:[t.jsx(dx,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]}):null]})}function Ht(D){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[kl(D.total_used)," / ",kl(D.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${dw(D)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:kl(D.u),download:kl(D.d)})})]})}function It(D){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsx(ds,{value:D.uuid,onCopy:()=>Re(D.uuid),copyClassName:"subscription-link"}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function bt(D){return t.jsxs("div",{className:"subscription-link-stack",children:[It(D),D.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:D.subscribe_url,onClick:()=>void et(D),disabled:de===D.id,children:[t.jsx(al,{size:14}),t.jsx("span",{className:"mono",children:D.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void et(D),disabled:de===D.id,children:[t.jsx(al,{size:14}),t.jsx("span",{children:de===D.id?o("common.processing"):o("subscription.colSubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function Qt(D){return t.jsxs("div",{className:"row-actions subscription-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>ze(D),children:[t.jsx(Ft,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:se===D.id,onClick:()=>Je(D),children:[t.jsx(Qd,{size:14}),o("subscription.resetSecret")]})]})}const ve=Math.ceil(f/Hh),_t=Math.ceil(w/Lh),Me=ve>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:S<=1||Y,onClick:()=>void T(S-1,j,x),children:[t.jsx(Sa,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:S,total:ve})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:S>=ve||Y,onClick:()=>void T(S+1,j,x),children:[o("common.next"),t.jsx(ka,{size:14})]})]}):null;return t.jsxs(Jt,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:f})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Y,onClick:()=>void T(S,j,x),children:[t.jsx(Tt,{size:16}),o(Y?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:pe,children:[t.jsx("select",{className:"config-input filter-select",value:x,onChange:D=>v(D.target.value),children:iw.map(D=>t.jsx("option",{value:D,children:cw(D,o)},D))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Fo,{size:16}),t.jsx("input",{className:"config-input",value:j,onChange:D=>E(D.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(fs,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:Ne,children:o("common.clearFilter")})]}),Z?t.jsx("div",{className:"form-error",children:Z}):null,Y&&d.length===0?t.jsx(jt,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsxs("th",{children:[o("subscription.colPrimaryUuid")," / ",o("subscription.colSubscribeUrl")]}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(D=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",D.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:D.plan_name??"-"}),D.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>_(D.user_email),title:o("subscription.viewUser"),children:D.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:D.user_id}),D.plan_id?` - ${o("subscription.planId",{id:D.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${D.status}`,children:qh(D.status,o)})}),t.jsx("td",{children:Ht(D)}),t.jsx("td",{children:$t(D)}),t.jsx("td",{children:Ia(D.expired_at,o("subscription.never"))}),t.jsx("td",{children:bt(D)}),t.jsx("td",{children:Ia(D.updated_at,o("subscription.never"))}),t.jsx("td",{children:Qt(D)})]},D.id)),!Y&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(D=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",D.id]}),t.jsx("strong",{className:"subscription-plan-name",children:D.plan_name??"-"}),D.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>_(D.user_email),title:o("subscription.viewUser"),children:D.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${D.status}`,children:qh(D.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),Ht(D)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),$t(D)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:Ia(D.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:Ia(D.updated_at,o("subscription.never"))})]})]}),t.jsx("div",{className:"subscription-card-link-block",children:bt(D)}),Qt(D)]},D.id)),!Y&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),Me,A?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>$(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:D=>D.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:A.id})}),t.jsx("p",{children:A.user_email??o("subscription.userId",{id:A.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>$(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[V?t.jsx("div",{className:"form-error",children:V}):null,oe&&ne.length===0?t.jsx(jt,{label:o("subscription.slotsLoading")}):null,t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[ne.map(D=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(ds,{value:D.uuid,onCopy:()=>Re(D.uuid),copyClassName:"subscription-link"})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${Gh(D.status)}`,children:Bh(D.status,o)})}),t.jsx("td",{children:D.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:D.hwid,onClick:()=>Re(D.hwid),children:[t.jsx(al,{size:14}),t.jsx("span",{className:"mono",children:D.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:D.user_agent??"",children:D.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:D.last_ip??"-"}),t.jsx("small",{children:D.first_ip?o("subscription.firstIp",{ip:D.first_ip}):"-"})]}),t.jsx("td",{children:Ia(D.first_seen_at,"-")}),t.jsx("td",{children:Ia(D.last_seen_at,"-")}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===D.id,onClick:()=>rn(D),children:[t.jsx(Ed,{size:14}),o("subscription.unbind")]}),D.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===D.id,onClick:()=>gt(D),children:[t.jsx(Cl,{size:14}),o("subscription.ban")]}):null]})})]},D.id)),!oe&&ne.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[ne.map(D=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${Gh(D.status)}`,children:Bh(D.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsx(ds,{value:D.uuid,onCopy:()=>Re(D.uuid),copyClassName:"subscription-link"})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),D.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:D.hwid,onClick:()=>Re(D.hwid),children:[t.jsx(al,{size:14}),t.jsx("span",{className:"mono",children:D.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:D.last_ip??"-"}),t.jsx("small",{children:D.first_ip?o("subscription.firstIp",{ip:D.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:D.user_agent??"",children:D.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:Ia(D.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:Ia(D.last_seen_at,"-")})]})]}),t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===D.id,onClick:()=>rn(D),children:[t.jsx(Ed,{size:14}),o("subscription.unbind")]}),D.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===D.id,onClick:()=>gt(D),children:[t.jsx(Cl,{size:14}),o("subscription.ban")]}):null]})]},D.id)),!oe&&ne.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),_t>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:te<=1||oe,onClick:()=>void Rt(te-1),children:[t.jsx(Sa,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:te,total:_t})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:te>=_t||oe,onClick:()=>void Rt(te+1),children:[o("common.next"),t.jsx(ka,{size:14})]})]}):null]})]})}):null,B?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>R(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:D=>D.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:B.id})}),t.jsx("p",{children:B.user_email??o("subscription.userId",{id:B.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>R(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ae,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.transfer_enable,onChange:D=>I(ye=>({...ye,transfer_enable:D.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.u,onChange:D=>I(ye=>({...ye,u:D.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.d,onChange:D=>I(ye=>({...ye,d:D.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:U.device_limit,onChange:D=>I(ye=>({...ye,device_limit:D.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:U.speed_limit,onChange:D=>I(ye=>({...ye,speed_limit:D.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:U.expired_at,onChange:D=>I(ye=>({...ye,expired_at:D.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:U.status,onChange:D=>I(ye=>({...ye,status:D.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:U.auto_renewal,onChange:D=>I(ye=>({...ye,auto_renewal:D.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:U.remarks,onChange:D=>I(ye=>({...ye,remarks:D.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>R(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:se===B.id,children:se===B.id?o("common.processing"):o("common.save")})]})]})]})}):null]})}const Yh=15,pw=["email","user_id","node","hwid","user_agent","last_ip"];function ss(s){return s?new Date(s*1e3).toLocaleString():"-"}function el(s){const i=Math.max(0,Number(s??0));if(i===0)return"0 B";const o=["B","KB","MB","GB","TB"];let d=i,u=0;for(;d>=1024&&u<o.length-1;)d/=1024,u+=1;return`${d>=10||u===0?d.toFixed(0):d.toFixed(2)} ${o[u]}`}function mw(s){return["user_id","subscription_id","node","node_type","node_id"].includes(s)?"=":"like"}function fw(s,i){switch(s){case"email":return i("device.filterEmail");case"user_id":return i("device.filterUserId");case"hwid":return i("device.filterHwid");case"node":return i("device.filterNode");case"node_id":return i("device.filterNodeId");case"node_type":return i("device.filterNodeType");case"user_agent":return i("device.filterUserAgent");case"last_ip":return i("device.filterIp");default:return""}}function $h(s,i){switch(s){case"bound":return i("device.statusBound");case"banned":return i("device.statusBanned");default:return i("device.statusPending")}}function qo(s){return(s.online_ips??[]).join(", ")||"-"}function Bo(s){return(s.online_nodes??[]).map(i=>`${i.node_type}#${i.node_id}`).join(", ")||"-"}function hw(s){var f,m,S;const i=new URLSearchParams(s),o=(f=i.get("node_type"))==null?void 0:f.trim(),d=(m=i.get("node_id"))==null?void 0:m.trim();if(o&&d)return{field:"node",value:`${o}:${d}`};if(d)return{field:"node",value:d};const u=["node","hwid","user_agent","last_ip","email","user_id"];for(const y of u){const x=(S=i.get(y))==null?void 0:S.trim();if(x)return{field:y,value:x}}return null}function xw(){const s=Ot(),i=na(),{t:o}=$e(),[d,u]=h.useState([]),[f,m]=h.useState(0),[S,y]=h.useState(1),[x,v]=h.useState("email"),[j,E]=h.useState(""),[Y,P]=h.useState(!0),[Z,M]=h.useState(""),[B,R]=h.useState(null),[U,I]=h.useState(null),[se,ce]=h.useState(null),A=h.useCallback(async(C=1,de="",N="email")=>{P(!0),M("");try{const _=de.trim()?[{key:N,condition:mw(N),value:de.trim()}]:void 0,T=await Nx(C,Yh,_);u(T.data),m(T.total),y(C)}catch(_){M(_ instanceof Error?_.message:o("device.loadFailed"))}finally{P(!1)}},[o]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}const C=hw(i.search);if(C){v(C.field),E(C.value),A(1,C.value,C.field);return}A()},[A,s,i.search]),h.useEffect(()=>{if(se===null)return;function C(N){const _=N.target;_!=null&&_.closest(".device-action-wrap")||ce(null)}function de(N){N.key==="Escape"&&ce(null)}return document.addEventListener("pointerdown",C),document.addEventListener("keydown",de),()=>{document.removeEventListener("pointerdown",C),document.removeEventListener("keydown",de)}},[se]);function $(C){C.preventDefault(),A(1,j,x)}function ne(){if(E(""),i.search){s.replace("/device");return}A(1,"",x)}async function he(C){var N;if(!C.hwid)return;const de=await il(C.hwid);(N=window.showToast)==null||N.call(window,o(de?"device.copySuccess":"common.copyFailed"),de?"success":"error")}async function w(C){var N;const de=await il(C.uuid);(N=window.showToast)==null||N.call(window,o(de?"device.copyUuidSuccess":"common.copyFailed"),de?"success":"error")}function H(C){var de;(de=window.showConfirm)==null||de.call(window,{message:o("device.unbindConfirm"),onConfirm:async()=>{var N,_;R(C.id);try{await Sx(C.id),(N=window.showToast)==null||N.call(window,o("device.unbindSuccess"),"success"),await A(S,j,x)}catch(T){(_=window.showToast)==null||_.call(window,T instanceof Error?T.message:o("device.unbindFailed"),"error")}finally{R(null)}}})}function te(C){var de;(de=window.showConfirm)==null||de.call(window,{message:o("device.banConfirm"),onConfirm:async()=>{var N,_;R(C.id);try{await kx(C.id),(N=window.showToast)==null||N.call(window,o("device.banSuccess"),"success"),await A(S,j,x)}catch(T){(_=window.showToast)==null||_.call(window,T instanceof Error?T.message:o("device.banFailed"),"error")}finally{R(null)}}})}function G(C){var de;(de=window.showConfirm)==null||de.call(window,{message:o("device.resetConfirm",{user:C.user_email??`#${C.user_id}`}),onConfirm:async()=>{var N,_;I(C.user_id);try{await X1(C.user_id),(N=window.showToast)==null||N.call(window,o("device.resetSuccess"),"success"),await A(S,j,x)}catch(T){(_=window.showToast)==null||_.call(window,T instanceof Error?T.message:o("device.resetFailed"),"error")}finally{I(null)}}})}function oe(C){ce(null),C()}function k(C,de){const N=de==="mobile"?-C.id:C.id,_=se===N;return t.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${_?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>ce(_?null:N),children:[o("device.action")," ",t.jsx(zl,{size:14})]}),_?t.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:B===C.id,onClick:()=>oe(()=>H(C)),children:[t.jsx(Ed,{size:14}),o("device.unbind")]}),C.status==="bound"?t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:B===C.id,onClick:()=>oe(()=>te(C)),children:[t.jsx(Cl,{size:14}),o("device.ban")]}):null,t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:U===C.user_id,onClick:()=>oe(()=>G(C)),children:[t.jsx(Bv,{size:14}),o("device.resetUser")]})]}):null]})}const V=Math.ceil(f/Yh);return t.jsxs(Jt,{title:o("device.title"),subtitle:o("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("device.heading")}),t.jsx("p",{children:o("device.total",{count:f})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:Y,onClick:()=>void A(S,j,x),children:[t.jsx(Tt,{size:16}),o(Y?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:$,children:[t.jsx("select",{className:"config-input filter-select",value:x,onChange:C=>v(C.target.value),children:pw.map(C=>t.jsx("option",{value:C,children:fw(C,o)},C))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Fo,{size:16}),t.jsx("input",{className:"config-input",value:j,onChange:C=>E(C.target.value),placeholder:o(x==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(fs,{size:16}),o("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ne,children:o("device.clear")})]}),Z?t.jsx("div",{className:"form-error",children:Z}):null,Y&&d.length===0?t.jsx(jt,{label:o("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[d.map(C=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:C.user_email??"-"}),t.jsxs("small",{children:["ID: ",C.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[C.plan_name??"-",C.user_plan_id?` #${C.user_plan_id}`:""]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:$h(C.status,o)}),t.jsxs("span",{className:`online-badge ${C.is_online?"online":"offline"}`,children:[C.is_online?t.jsx(mh,{size:14}):t.jsx(ph,{size:14}),C.is_online?o("device.online"):o("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-info",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.uuid")}),t.jsx(ds,{value:C.uuid,onCopy:()=>w(C),copyClassName:"mobile-device-copy"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.hwid")}),C.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:C.hwid,onClick:()=>he(C),children:[t.jsx(al,{size:14}),t.jsx("span",{className:"mono",children:C.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.client")}),t.jsx("small",{title:C.user_agent??"",children:C.user_agent??"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.ip")}),t.jsxs("span",{className:"mono",title:`${C.last_ip??"-"} / ${C.first_ip??"-"}`,children:[C.last_ip??"-",C.first_ip?` (${C.first_ip})`:""]})]})]}),t.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[t.jsx("span",{children:o("device.traffic")}),t.jsxs("small",{title:`${o("device.upload")}: ${el(C.device_upload)} / ${o("device.download")}: ${el(C.device_download)}`,children:[el(C.device_used_traffic)," / ",o("device.upload"),": ",el(C.device_upload)," / ",o("device.download"),": ",el(C.device_download)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.connection")}),t.jsxs("small",{title:`${qo(C)} / ${Bo(C)}`,children:[o("device.onlineIps"),": ",qo(C)," / ",o("device.onlineNodes"),": ",Bo(C)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.time")}),t.jsxs("small",{children:[o("device.firstSeen"),": ",ss(C.first_seen_at)," / ",o("device.lastSeen"),": ",ss(C.last_seen_at)]})]})]}),t.jsx("div",{className:"mobile-device-actions",children:k(C,"mobile")})]},C.id)),!Y&&d.length===0?t.jsx("div",{className:"empty-state",children:o("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("device.user")}),t.jsx("th",{children:o("device.status")}),t.jsx("th",{children:o("device.traffic")}),t.jsx("th",{children:o("device.connection")}),t.jsx("th",{children:o("device.deviceInfo")}),t.jsx("th",{children:o("device.time")}),t.jsx("th",{children:o("device.action")})]})}),t.jsxs("tbody",{children:[d.map(C=>t.jsxs("tr",{children:[t.jsxs("td",{className:"device-user-cell",children:[t.jsx("strong",{children:C.user_email??"-"}),t.jsxs("small",{children:["ID: ",C.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[C.plan_name??"-",C.user_plan_id?` #${C.user_plan_id}`:""]})]}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:$h(C.status,o)})}),t.jsx("td",{className:"device-traffic-cell",children:t.jsxs("div",{className:"device-traffic-stack",children:[t.jsx("strong",{children:el(C.device_used_traffic)}),t.jsxs("small",{children:[o("device.upload"),": ",el(C.device_upload)]}),t.jsxs("small",{children:[o("device.download"),": ",el(C.device_download)]})]})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${C.is_online?"online":"offline"}`,children:[C.is_online?t.jsx(mh,{size:14}):t.jsx(ph,{size:14}),C.is_online?o("device.online"):o("device.offline")]}),t.jsxs("small",{title:qo(C),children:[o("device.onlineIps"),": ",qo(C)]}),t.jsxs("small",{title:Bo(C),children:[o("device.onlineNodes"),": ",Bo(C)]}),t.jsxs("small",{children:[o("device.lastOnline"),": ",ss(C.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-info-cell",children:t.jsxs("div",{className:"device-info-stack",children:[t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.uuid")}),t.jsx(ds,{value:C.uuid,onCopy:()=>w(C),copyClassName:"device-info-copy"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.hwid")}),C.hwid?t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:C.hwid,onClick:()=>he(C),children:[t.jsx(al,{size:14}),t.jsx("span",{className:"mono",children:C.hwid})]}):t.jsx("span",{className:"device-info-value",children:"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.client")}),t.jsx("small",{className:"device-info-value",title:C.user_agent??"",children:C.user_agent??"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.ip")}),t.jsxs("div",{className:"device-info-value",children:[t.jsx("strong",{className:"mono",children:C.last_ip??"-"}),t.jsx("small",{children:C.first_ip?`${o("device.firstIp")}: ${C.first_ip}`:"-"})]})]})]})}),t.jsx("td",{className:"device-time-cell",children:t.jsxs("div",{className:"device-time-stack",children:[t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.firstSeen")}),t.jsx("span",{children:ss(C.first_seen_at)})]}),t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.lastSeen")}),t.jsx("span",{children:ss(C.last_seen_at)})]})]})}),t.jsx("td",{className:"device-action-cell",children:k(C,"desktop")})]},C.id)),!Y&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("device.empty")})})}):null]})]})}),V>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:S<=1||Y,onClick:()=>void A(S-1,j,x),children:[t.jsx(Sa,{size:14}),o("device.previous")]}),t.jsx("span",{className:"page-info",children:o("device.page",{page:S,total:V})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:S>=V||Y,onClick:()=>void A(S+1,j,x),children:[o("device.next"),t.jsx(ka,{size:14})]})]}):null]})]})}const bw={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function Jd(s){if(Array.isArray(s))return s.map(i=>Number(i)).filter(i=>Number.isFinite(i)&&i>0);if(typeof s=="string")try{return Jd(JSON.parse(s))}catch{return s.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i)&&i>0)}return[]}function Qh(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:Jd(s.plan_id)}:{...bw}}function jd(s){const i=s.trim();if(!i)return"";try{return new URL(i.includes("://")?i:`https://${i}`).host.toLowerCase()}catch{return i.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function gw(s){const i=Number(s);if(!i)return"-";const o=new Date(i*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function yw(s){return Number(s)===1}function Xh(s,i,o){if(!s.length)return o("webcon.allPlans");const d=new Map(i.map(u=>[Number(u.id),u.name]));return s.map(u=>d.get(u)??`#${u}`).join(", ")}function tl(s,i=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,i?t.jsx("small",{children:"*"}):null]})}function vw(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState([]),[u,f]=h.useState([]),[m,S]=h.useState(null),[y,x]=h.useState(!0),[v,j]=h.useState(!1),[E,Y]=h.useState(null),[P,Z]=h.useState(""),M=h.useCallback(async()=>{x(!0),Z("");try{const[A,$]=await Promise.all([i0(),El()]);d(A),f($)}catch(A){Z(A instanceof Error?A.message:i("webcon.toastLoadFailed"))}finally{x(!1)}},[i]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}M()},[M,s]);const B=h.useMemo(()=>u.map(A=>({id:Number(A.id),name:A.name})),[u]);function R(A,$){S(ne=>ne&&{...ne,[A]:$})}function U(A,$){S(ne=>{if(!ne)return ne;const he=$?Array.from(new Set([...ne.plan_ids,A])):ne.plan_ids.filter(w=>w!==A);return{...ne,plan_ids:he}})}async function I(A){var ne,he;if(A.preventDefault(),!m)return;const $=jd(m.domain);j(!0),Z("");try{await s0({id:m.id,email:m.email.trim(),domain:$,title:m.title.trim(),description:m.description.trim()||null,logo:m.logo.trim()||null,background_url:m.background_url.trim()||null,custom_html:m.custom_html||null,plan_ids:m.plan_ids,plan_id:m.plan_ids}),S(null),(ne=window.showToast)==null||ne.call(window,i("webcon.toastSaveSuccess"),"success"),await M()}catch(w){const H=w instanceof Error?w.message:i("webcon.toastSaveFailed");Z(H),(he=window.showToast)==null||he.call(window,H,"error")}finally{j(!1)}}async function se(A){var $,ne;Y(A.id);try{await r0(A.id),($=window.showToast)==null||$.call(window,i("webcon.toastToggleSuccess"),"success"),await M()}catch(he){const w=he instanceof Error?he.message:i("webcon.toastToggleFailed");Z(w),(ne=window.showToast)==null||ne.call(window,w,"error")}finally{Y(null)}}function ce(A){var $;($=window.showConfirm)==null||$.call(window,{message:i("webcon.deleteConfirm"),onConfirm:async()=>{var ne,he;Y(A.id),Z("");try{await o0(A.id),(ne=window.showToast)==null||ne.call(window,i("webcon.toastDeleteSuccess"),"success"),await M()}catch(w){const H=w instanceof Error?w.message:i("webcon.toastDeleteFailed");Z(H),(he=window.showToast)==null||he.call(window,H,"error")}finally{Y(null)}}})}return t.jsxs(Jt,{title:i("webcon.title"),subtitle:i("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("webcon.heading")}),t.jsx("p",{children:i("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:y,onClick:()=>void M(),children:[t.jsx(Tt,{size:16}),i(y?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>S(Qh()),children:[t.jsx(Tn,{size:16}),i("webcon.add")]})]})]}),P?t.jsx("div",{className:"form-error",children:P}):null,y&&o.length===0?t.jsx(jt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("webcon.colId")}),t.jsx("th",{children:i("webcon.colStatus")}),t.jsx("th",{children:i("webcon.colStaffOwner")}),t.jsx("th",{children:i("webcon.colDomain")}),t.jsx("th",{children:i("webcon.colLanding")}),t.jsx("th",{children:i("webcon.colPlans")}),t.jsx("th",{children:i("webcon.colCreated")}),t.jsx("th",{children:i("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(A=>{var ne;const $=Jd(A.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",A.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${yw(A.status)?"active":""}`,type:"button",disabled:E===A.id,onClick:()=>void se(A),"aria-label":i("webcon.toggleStatusLabel"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:A.email??"-"}),t.jsx("small",{children:Number(A.staff)===1?i("webcon.staffEnabled"):i("webcon.staffDisabled")})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:A.domain}),t.jsx("small",{children:i("webcon.adminPath",{path:`/${String(((ne=window.settings)==null?void 0:ne.secure_path)??"admin")}/webcon`})})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:A.title||"-"}),t.jsx("small",{children:A.description||i("webcon.noDescription")}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(zv,{size:13}),A.logo?i("webcon.logo"):i("webcon.noLogo")]}),t.jsxs("span",{children:[t.jsx(xs,{size:13}),A.background_url?i("webcon.background"):i("webcon.noBackground")]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:Xh($,B,i)}),t.jsx("small",{children:$.length?i("webcon.selectedCount",{count:$.length}):i("webcon.unrestricted")})]})}),t.jsx("td",{children:gw(A.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>S(Qh(A)),children:[t.jsx(Ft,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:E===A.id,onClick:()=>ce(A),children:[t.jsx(Wt,{size:14}),i("common.delete")]})]})})]},A.id)}),!y&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("webcon.noWebcon")})})}):null]})]})})}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>S(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:A=>A.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("webcon.editTitle"):i("webcon.newTitle")}),t.jsx("p",{children:m.domain||i("webcon.modalSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.closeMenu"),onClick:()=>S(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:I,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[tl(i("webcon.staffOwnerEmail"),!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:m.email,onChange:A=>R("email",A.target.value),placeholder:i("webcon.staffEmailPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[tl(i("webcon.domain"),!0),t.jsx("input",{className:"config-input",required:!0,value:m.domain,onChange:A=>R("domain",A.target.value),onBlur:A=>R("domain",jd(A.target.value)),placeholder:i("webcon.domainPlaceholder")}),t.jsx("span",{className:"webcon-help",children:i("webcon.domainHelp")})]}),t.jsxs("label",{className:"webcon-field",children:[tl(i("webcon.landingTitle"),!0),t.jsx("input",{className:"config-input",required:!0,value:m.title,onChange:A=>R("title",A.target.value),placeholder:i("webcon.landingTitlePlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[tl(i("webcon.description")),t.jsx("input",{className:"config-input",value:m.description,onChange:A=>R("description",A.target.value),placeholder:i("webcon.descriptionPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[tl(i("webcon.logoUrl")),t.jsx("input",{className:"config-input",type:"url",value:m.logo,onChange:A=>R("logo",A.target.value),placeholder:i("webcon.logoPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[tl(i("webcon.backgroundUrl")),t.jsx("input",{className:"config-input",type:"url",value:m.background_url,onChange:A=>R("background_url",A.target.value),placeholder:i("webcon.backgroundPlaceholder")})]}),t.jsxs("div",{className:"webcon-field full",children:[tl(i("webcon.allowedPlans")),t.jsxs("div",{className:"webcon-plan-picker",children:[B.map(A=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:m.plan_ids.includes(A.id),onChange:$=>U(A.id,$.target.checked)}),t.jsx("span",{children:A.name})]},A.id)),B.length===0?t.jsx("span",{className:"webcon-help",children:i("webcon.noPlansLoaded")}):null]}),t.jsx("span",{className:"webcon-help",children:i("webcon.allowedPlansHelp")})]}),t.jsxs("label",{className:"webcon-field full",children:[tl(i("webcon.customHtml")),t.jsx("textarea",{className:"config-input",rows:5,value:m.custom_html,onChange:A=>R("custom_html",A.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:m.logo?t.jsx("img",{src:m.logo,alt:""}):t.jsx(Hv,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:m.title||i("webcon.previewTitle")}),t.jsx("span",{children:jd(m.domain)||i("webcon.domainPlaceholder")}),t.jsxs("span",{children:[t.jsx(Xd,{size:12})," ",Xh(m.plan_ids,B,i)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(En,{size:16}),i(v?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Zh(s){return new Date(s*1e3).toLocaleString("vi-VN")}function wd(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function jw(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState([]),[u,f]=h.useState(null),[m,S]=h.useState(!0),[y,x]=h.useState(!1),[v,j]=h.useState(""),[E,Y]=h.useState(""),P=h.useCallback(async()=>{S(!0),j("");try{d(await K1())}catch(R){j(R instanceof Error?R.message:i("notice.loadFailed"))}finally{S(!1)}},[i]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}P()},[P,s]);async function Z(R){var U,I;if(R.preventDefault(),!!u){x(!0),j(""),Y("");try{const se=u.tags?u.tags.split(",").map(ce=>ce.trim()).filter(Boolean):[];await F1({id:u.id,title:u.title,content:u.content,img_url:u.img_url||null,tags:se.length?se:null}),f(null),(U=window.showToast)==null||U.call(window,i("notice.saveSuccess"),"success"),await P()}catch(se){(I=window.showToast)==null||I.call(window,se instanceof Error?se.message:i("notice.saveFailed"),"error")}finally{x(!1)}}}async function M(R){var U;try{await V1(R),await P()}catch(I){(U=window.showToast)==null||U.call(window,I instanceof Error?I.message:i("notice.toggleFailed"),"error")}}async function B(R){var U;(U=window.showConfirm)==null||U.call(window,{message:i("notice.deleteConfirm"),onConfirm:async()=>{var I,se;try{await J1(R),(I=window.showToast)==null||I.call(window,i("notice.deleteSuccess"),"success"),await P()}catch(ce){(se=window.showToast)==null||se.call(window,ce instanceof Error?ce.message:i("notice.deleteFailed"),"error")}}})}return t.jsxs(Jt,{title:i("notice.title"),subtitle:i("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("notice.heading")}),t.jsxs("p",{children:[o.length," ",i("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:m,children:[t.jsx(Tt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>f(wd()),children:[t.jsx(Tn,{size:16}),i("notice.addNotice")]})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,E?t.jsx("div",{className:"form-success",children:E}):null,m&&o.length===0?t.jsx(jt,{label:i("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("notice.titleField")}),t.jsx("th",{children:i("notice.show")}),t.jsx("th",{children:i("notice.tags")}),t.jsx("th",{children:i("notice.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(R=>{var U;return t.jsxs("tr",{children:[t.jsx("td",{children:R.id}),t.jsx("td",{children:t.jsx("strong",{children:R.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${R.show?"active":""}`,type:"button",onClick:()=>void M(R.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((U=R.tags)==null?void 0:U.map((I,se)=>t.jsx("span",{className:"tag",children:I},se)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:Zh(R.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>f(wd(R)),children:[t.jsx(Ft,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void B(R.id),children:[t.jsx(Wt,{size:14}),i("common.delete")]})]})})]},R.id)}),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(R=>t.jsxs("div",{className:`notice-mobile-card ${R.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",R.id]})}),t.jsx("button",{className:`admin-switch ${R.show?"active":""}`,type:"button",onClick:()=>void M(R.id),"aria-label":R.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:R.title}),t.jsx("div",{className:"notice-tags",children:R.tags&&R.tags.length>0?R.tags.map((U,I)=>t.jsx("span",{className:"tag-badge",children:U},I)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[i("notice.created"),": ",Zh(R.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>f(wd(R)),children:[t.jsx(Ft,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void B(R.id),children:[t.jsx(Wt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},R.id)),!m&&o.length===0?t.jsx("div",{className:"empty-state",children:i("notice.noNotices")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?i("notice.editNotice"):i("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Z,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:R=>f({...u,title:R.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:u.content,onChange:R=>f({...u,content:R.target.value}),placeholder:i("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:u.img_url,onChange:R=>f({...u,img_url:R.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.tags")}),t.jsx("input",{className:"config-input",value:u.tags,onChange:R=>f({...u,tags:R.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(En,{size:16}),i(y?"notice.saving":"common.save")]})]})]})]})}):null]})}function _d(s){return new Date(s*1e3).toLocaleString("vi-VN")}const Kh=(s,i)=>({0:{label:i("ticket.statusOpen"),cls:"enabled"},1:{label:i("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},Nd=(s,i)=>({0:i("ticket.levelLow"),1:i("ticket.levelMedium"),2:i("ticket.levelHigh")})[s]||String(s);function ww(){var w;const s=Ot(),{t:i}=$e(),[o,d]=h.useState([]),[u,f]=h.useState(null),[m,S]=h.useState(!1),[y,x]=h.useState(null),[v,j]=h.useState(""),[E,Y]=h.useState(!0),[P,Z]=h.useState(!1),[M,B]=h.useState(""),R=h.useRef(null),[U,I]=h.useState([]),[se,ce]=h.useState(null),A=h.useCallback(async()=>{Y(!0),B("");try{d(await P1())}catch(H){B(H instanceof Error?H.message:"Load failed")}finally{Y(!1)}},[]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}A(),El().then(H=>{H&&I(H)}).catch(()=>{})},[A,s]),h.useEffect(()=>{var H;(H=R.current)==null||H.scrollIntoView({behavior:"smooth"})},[u]);async function $(H){var te;x(H),j(""),f(null),ce(null),S(!0);try{const G=await xh(H);if(f(G),G&&G.user_id)try{const oe=await _x(G.user_id);oe&&oe.data&&ce(oe.data)}catch(oe){console.error("Failed to load user info:",oe)}}catch{(te=window.showToast)==null||te.call(window,"Failed to load message thread","error")}finally{S(!1)}}async function ne(H){var te,G;if(H.preventDefault(),!(!y||!v.trim())){Z(!0),B("");try{await W1(y,v),j(""),(te=window.showToast)==null||te.call(window,"Reply sent!","success");try{const oe=await xh(y);f(oe)}catch{}await A()}catch(oe){(G=window.showToast)==null||G.call(window,oe instanceof Error?oe.message:"Reply failed","error")}finally{Z(!1)}}}async function he(H){var te;(te=window.showConfirm)==null||te.call(window,{message:"Close this ticket?",onConfirm:async()=>{var G,oe;B("");try{await I1(H),(G=window.showToast)==null||G.call(window,"Ticket closed!","success"),y===H&&(x(null),f(null)),await A()}catch(k){B(k instanceof Error?k.message:"Close failed"),(oe=window.showToast)==null||oe.call(window,k instanceof Error?k.message:"Close failed","error")}}})}return t.jsxs(Jt,{title:i("ticket.title"),subtitle:i("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:A,disabled:E,children:[t.jsx(Tt,{size:16}),i("common.refresh")]})})]}),M?t.jsx("div",{className:"form-error",children:M}):null,E&&o.length===0?t.jsx(jt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("ticket.id")}),t.jsx("th",{children:i("ticket.subject")}),t.jsx("th",{children:i("ticket.user")}),t.jsx("th",{children:i("ticket.level")}),t.jsx("th",{children:i("ticket.status")}),t.jsx("th",{children:i("ticket.replyStatus")}),t.jsx("th",{children:i("ticket.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(H=>{const te=Kh(H.status,i);return t.jsxs("tr",{children:[t.jsx("td",{children:H.id}),t.jsx("td",{children:t.jsx("strong",{children:H.subject})}),t.jsxs("td",{children:["#",H.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:Nd(H.level,i)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${te.cls}`,children:te.label})}),t.jsx("td",{children:H.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:_d(H.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:H.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void $(H.id),children:[t.jsx(os,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void he(H.id),children:[t.jsx(zd,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void $(H.id),children:[t.jsx(os,{size:14}),i("ticket.viewHistory")]})})})]},H.id)}),!E&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(H=>{const te=Kh(H.status,i);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:H.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Nd(H.level,i)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.id"),": ",t.jsxs("strong",{children:["#",H.id]})]}),t.jsx("span",{className:`status-pill ${te.cls}`,children:te.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.user"),": ",t.jsxs("strong",{children:["#",H.user_id]})]}),t.jsx("span",{children:H.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[i("ticket.created"),": ",t.jsx("small",{children:_d(H.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:H.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void $(H.id),children:[t.jsx(os,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void he(H.id),children:[t.jsx(zd,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void $(H.id),children:[t.jsx(os,{size:14}),i("ticket.viewHistory")]})})]},H.id)}),!E&&o.length===0?t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")}):null]}),y!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u?`${i("ticket.ticketDetail")}: ${u.subject}`:`${i("ticket.ticketDetail")} #${y}`}),t.jsxs("p",{children:[i("ticket.user"),": #",u==null?void 0:u.user_id," | ",i("ticket.level"),": ",u!=null?Nd(u.level,i):i("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{x(null),f(null)},children:t.jsx(ct,{size:18})})]}),se&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("common.email")}),t.jsx("span",{className:"details-value",title:se.email,children:se.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((w=U.find(H=>H.id===se.plan_id))==null?void 0:w.name)||i("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[zn(se.balance)," ",i("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:se.expired_at?new Date(se.expired_at*1e3).toLocaleDateString("vi-VN"):i("ticket.never")})]})]}),m?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(jt,{label:i("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[u!=null&&u.message&&u.message.length>0?u.message.map(H=>{const te=H.is_me;return t.jsxs("div",{className:`chat-message ${te?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:H.message}),t.jsxs("div",{className:"chat-meta",children:[te?i("ticket.staff"):`${i("ticket.user")} #${H.user_id}`," • ",_d(H.created_at)]})]},H.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:i("ticket.noLogs")}),t.jsx("div",{ref:R})]}),(u==null?void 0:u.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ne,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:i("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:v,onChange:H=>j(H.target.value),placeholder:i("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P||!v.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(px,{size:14}),P?"":i("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:i("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Fh(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const Jh={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function Vh(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function _w(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState([]),[u,f]=h.useState(null),[m,S]=h.useState(!0),[y,x]=h.useState(!1),[v,j]=h.useState(""),[E,Y]=h.useState(""),P=h.useCallback(async()=>{S(!0),j("");try{d(await e0())}catch(U){j(U instanceof Error?U.message:i("knowledge.loadFailed"))}finally{S(!1)}},[i]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}P()},[P,s]);async function Z(U){var I;try{const se=await t0(U.id);f(Vh(se))}catch(se){(I=window.showToast)==null||I.call(window,se instanceof Error?se.message:i("knowledge.detailFailed"),"error")}}async function M(U){var I,se;if(U.preventDefault(),!!u){x(!0),j(""),Y("");try{await n0({id:u.id,category:u.category,title:u.title,body:u.body,language:u.language||null,sort:u.sort?Number(u.sort):null}),f(null),(I=window.showToast)==null||I.call(window,i("knowledge.saveSuccess"),"success"),await P()}catch(ce){(se=window.showToast)==null||se.call(window,ce instanceof Error?ce.message:i("knowledge.saveFailed"),"error")}finally{x(!1)}}}async function B(U){var I;try{await l0(U),await P()}catch(se){(I=window.showToast)==null||I.call(window,se instanceof Error?se.message:i("knowledge.toggleFailed"),"error")}}async function R(U){var I;(I=window.showConfirm)==null||I.call(window,{message:i("knowledge.deleteConfirm"),onConfirm:async()=>{var se,ce;try{await a0(U),(se=window.showToast)==null||se.call(window,i("knowledge.deleteSuccess"),"success"),await P()}catch(A){(ce=window.showToast)==null||ce.call(window,A instanceof Error?A.message:i("knowledge.deleteFailed"),"error")}}})}return t.jsxs(Jt,{title:i("knowledge.title"),subtitle:i("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",i("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:m,children:[t.jsx(Tt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>f(Vh()),children:[t.jsx(Tn,{size:16}),i("knowledge.addArticle")]})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,E?t.jsx("div",{className:"form-success",children:E}):null,m&&o.length===0?t.jsx(jt,{label:i("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("knowledge.category")}),t.jsx("th",{children:i("knowledge.titleField")}),t.jsx("th",{children:i("knowledge.language")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("knowledge.sort")}),t.jsx("th",{children:i("knowledge.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(U=>t.jsxs("tr",{children:[t.jsx("td",{children:U.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:U.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:U.title})}),t.jsx("td",{children:U.language&&Jh[U.language]||U.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void B(U.id),"aria-label":i("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:U.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:Fh(U.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Z(U),children:[t.jsx(Ft,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void R(U.id),children:[t.jsx(Wt,{size:14}),i("common.delete")]})]})})]},U.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(U=>t.jsxs("div",{className:`knowledge-mobile-card ${U.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",U.id]}),U.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",U.sort]})]}),t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void B(U.id),"aria-label":U.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:U.title}),t.jsxs("div",{className:"card-meta",children:[U.category&&t.jsx("span",{className:"category-badge",children:U.category}),U.language&&t.jsx("span",{className:"lang-badge",children:Jh[U.language]||U.language})]}),t.jsxs("p",{className:"created-time",children:[i("knowledge.created"),": ",Fh(U.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void Z(U),children:[t.jsx(Ft,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void R(U.id),children:[t.jsx(Wt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},U.id)),!m&&o.length===0?t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?i("knowledge.editArticle"):i("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:M,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:u.category,onChange:U=>f({...u,category:U.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:U=>f({...u,title:U.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:u.body,onChange:U=>f({...u,body:U.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:u.language,onChange:U=>f({...u,language:U.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:i("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:i("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:i("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:i("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:i("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:i("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:i("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:u.sort,onChange:U=>f({...u,sort:U.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(En,{size:16}),i(y?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function Nw(){const s=Ot(),{t:i}=$e(),[o,d]=h.useState(null),[u,f]=h.useState(null),[m,S]=h.useState(null),[y,x]=h.useState(""),[v,j]=h.useState(!0),[E,Y]=h.useState(""),P=h.useCallback(async()=>{j(!0),Y("");try{const[M,B,R,U]=await Promise.all([c0().catch(()=>({data:{}})),p0().catch(()=>({data:{}})),m0().catch(()=>({data:[]})),f0().catch(()=>({data:""}))]);d(M.data),f(B.data),S(R.data),x(typeof U.data=="string"?U.data:"")}catch(M){Y(M instanceof Error?M.message:i("queue.toastLoadFailed"))}finally{j(!1)}},[i]);h.useEffect(()=>{if(!Ut()){s.replace("/login");return}P()},[P,s]);function Z(M,B,R){return M?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[R," ",B]}),t.jsx("div",{className:"queue-grid",children:Object.entries(M).map(([U,I])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:U}),t.jsx("strong",{children:typeof I=="object"?JSON.stringify(I):String(I??"—")})]},U))})]}):null}return t.jsxs(Jt,{title:i("queue.title"),subtitle:i("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("queue.heading")}),t.jsx("p",{children:i("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:v,children:[t.jsx(Tt,{size:16}),i("common.refresh")]})})]}),E?t.jsx("div",{className:"form-error",children:E}):null,v?t.jsx(jt,{label:i("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[Z(o,i("queue.systemStatus"),t.jsx($o,{size:18})),Z(u,i("queue.queueStats"),t.jsx(Xd,{size:18})),m&&m.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(fv,{size:18})," ",i("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(m,null,2)})]}):null,y?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(wv,{size:18})," ",i("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:y})]}):null]})]})}const Sw=h.createContext(null);function kw({children:s}){const[i,o]=h.useState([]),[d,u]=h.useState(null),f=h.useCallback((x,v="success")=>{const j=Math.random().toString(36).substring(2,9);o(E=>[...E,{id:j,message:x,type:v}]),setTimeout(()=>{o(E=>E.filter(Y=>Y.id!==j))},5e3)},[]),m=h.useCallback(x=>{u(x)},[]);h.useEffect(()=>{typeof window<"u"&&(window.showToast=f,window.showConfirm=m)},[f,m]);const S=async()=>{if(d){try{await d.onConfirm()}catch(x){console.error("Error in onConfirm:",x)}u(null)}},y=()=>{d&&(d.onCancel&&d.onCancel(),u(null))};return t.jsxs(Sw.Provider,{value:{showToast:f,showConfirm:m},children:[s,t.jsx("div",{className:"toast-container",children:i.map(x=>{let v=Tv;return x.type==="success"&&(v=cx),x.type==="error"&&(v=gv),x.type==="warning"&&(v=Td),t.jsxs("div",{className:`toast-card toast-${x.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(v,{size:18})}),t.jsx("div",{className:"toast-message",children:x.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(j=>j.filter(E=>E.id!==x.id)),children:t.jsx(ct,{size:14})})]},x.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:y,children:t.jsxs("div",{className:"confirm-card",onClick:x=>x.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(Td,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:y,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:S,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Cw({children:s}){return t.jsx(N0,{children:t.jsx(kw,{children:s})})}function zw(){return t.jsx(Cw,{children:t.jsxs(Py,{children:[t.jsx(kt,{path:"/login",element:t.jsx(S0,{})}),t.jsx(kt,{path:"/dashboard",element:t.jsx(U0,{})}),t.jsx(kt,{path:"/config/system",element:t.jsx(Q0,{})}),t.jsx(kt,{path:"/config/payment",element:t.jsx(K0,{})}),t.jsx(kt,{path:"/config/theme",element:t.jsx(V0,{})}),t.jsx(kt,{path:"/server/manage",element:t.jsx(Uj,{})}),t.jsx(kt,{path:"/server/group",element:t.jsx(Rj,{})}),t.jsx(kt,{path:"/server/route",element:t.jsx(qj,{})}),t.jsx(kt,{path:"/plan",element:t.jsx(Qj,{})}),t.jsx(kt,{path:"/order",element:t.jsx(Kj,{})}),t.jsx(kt,{path:"/coupon",element:t.jsx(Fj,{})}),t.jsx(kt,{path:"/giftcard",element:t.jsx(Vj,{})}),t.jsx(kt,{path:"/user",element:t.jsx(aw,{})}),t.jsx(kt,{path:"/subscription",element:t.jsx(uw,{})}),t.jsx(kt,{path:"/device",element:t.jsx(xw,{})}),t.jsx(kt,{path:"/webcon",element:t.jsx(vw,{})}),t.jsx(kt,{path:"/notice",element:t.jsx(jw,{})}),t.jsx(kt,{path:"/ticket",element:t.jsx(ww,{})}),t.jsx(kt,{path:"/knowledge",element:t.jsx(_w,{})}),t.jsx(kt,{path:"/queue",element:t.jsx(Nw,{})}),t.jsx(kt,{path:"/",element:t.jsx(nh,{to:"/dashboard",replace:!0})}),t.jsx(kt,{path:"*",element:t.jsx(nh,{to:"/dashboard",replace:!0})})]})})}ly.createRoot(document.getElementById("root")).render(t.jsx(h.StrictMode,{children:t.jsx(lv,{children:t.jsx(zw,{})})}));
