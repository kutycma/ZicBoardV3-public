function py(s,i){for(var o=0;o<i.length;o++){const d=i[o];if(typeof d!="string"&&!Array.isArray(d)){for(const u in d)if(u!=="default"&&!(u in s)){const m=Object.getOwnPropertyDescriptor(d,u);m&&Object.defineProperty(s,u,m.get?m:{enumerable:!0,get:()=>d[u]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function o(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(u){if(u.ep)return;u.ep=!0;const m=o(u);fetch(u.href,m)}})();function my(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var pd={exports:{}},os={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function hy(){if(Wh)return os;Wh=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(d,u,m){var h=null;if(m!==void 0&&(h=""+m),u.key!==void 0&&(h=""+u.key),"key"in u){m={};for(var k in u)k!=="key"&&(m[k]=u[k])}else m=u;return u=m.ref,{$$typeof:s,type:d,key:h,ref:u!==void 0?u:null,props:m}}return os.Fragment=i,os.jsx=o,os.jsxs=o,os}var Ih;function fy(){return Ih||(Ih=1,pd.exports=hy()),pd.exports}var t=fy(),md={exports:{}},$e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function xy(){if(ef)return $e;ef=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),h=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),_=Symbol.iterator;function G(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,A={};function Q(C,U,pe){this.props=C,this.context=U,this.refs=A,this.updater=pe||I}Q.prototype.isReactComponent={},Q.prototype.setState=function(C,U){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,U,"setState")},Q.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function q(){}q.prototype=Q.prototype;function O(C,U,pe){this.props=C,this.context=U,this.refs=A,this.updater=pe||I}var te=O.prototype=new q;te.constructor=O,Y(te,Q.prototype),te.isPureReactComponent=!0;var P=Array.isArray;function ne(){}var M={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function ie(C,U,pe){var ge=pe.ref;return{$$typeof:s,type:C,key:U,ref:ge!==void 0?ge:null,props:pe}}function ye(C,U){return ie(C.type,U,C.props)}function x(C){return typeof C=="object"&&C!==null&&C.$$typeof===s}function T(C){var U={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(pe){return U[pe]})}var W=/\/+/g;function $(C,U){return typeof C=="object"&&C!==null&&C.key!=null?T(""+C.key):U.toString(36)}function le(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(ne,ne):(C.status="pending",C.then(function(U){C.status==="pending"&&(C.status="fulfilled",C.value=U)},function(U){C.status==="pending"&&(C.status="rejected",C.reason=U)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function v(C,U,pe,ge,ze){var Ne=typeof C;(Ne==="undefined"||Ne==="boolean")&&(C=null);var qe=!1;if(C===null)qe=!0;else switch(Ne){case"bigint":case"string":case"number":qe=!0;break;case"object":switch(C.$$typeof){case s:case i:qe=!0;break;case w:return qe=C._init,v(qe(C._payload),U,pe,ge,ze)}}if(qe)return ze=ze(C),qe=ge===""?"."+$(C,0):ge,P(ze)?(pe="",qe!=null&&(pe=qe.replace(W,"$&/")+"/"),v(ze,U,pe,"",function(he){return he})):ze!=null&&(x(ze)&&(ze=ye(ze,pe+(ze.key==null||C&&C.key===ze.key?"":(""+ze.key).replace(W,"$&/")+"/")+qe)),U.push(ze)),1;qe=0;var R=ge===""?".":ge+":";if(P(C))for(var fe=0;fe<C.length;fe++)ge=C[fe],Ne=R+$(ge,fe),qe+=v(ge,U,pe,Ne,ze);else if(fe=G(C),typeof fe=="function")for(C=fe.call(C),fe=0;!(ge=C.next()).done;)ge=ge.value,Ne=R+$(ge,fe++),qe+=v(ge,U,pe,Ne,ze);else if(Ne==="object"){if(typeof C.then=="function")return v(le(C),U,pe,ge,ze);throw U=String(C),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return qe}function L(C,U,pe){if(C==null)return C;var ge=[],ze=0;return v(C,ge,"","",function(Ne){return U.call(pe,Ne,ze++)}),ge}function z(C){if(C._status===-1){var U=C._result;U=U(),U.then(function(pe){(C._status===0||C._status===-1)&&(C._status=1,C._result=pe)},function(pe){(C._status===0||C._status===-1)&&(C._status=2,C._result=pe)}),C._status===-1&&(C._status=0,C._result=U)}if(C._status===1)return C._result.default;throw C._result}var me=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},se={map:L,forEach:function(C,U,pe){L(C,function(){U.apply(this,arguments)},pe)},count:function(C){var U=0;return L(C,function(){U++}),U},toArray:function(C){return L(C,function(U){return U})||[]},only:function(C){if(!x(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return $e.Activity=S,$e.Children=se,$e.Component=Q,$e.Fragment=o,$e.Profiler=u,$e.PureComponent=O,$e.StrictMode=d,$e.Suspense=b,$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,$e.__COMPILER_RUNTIME={__proto__:null,c:function(C){return M.H.useMemoCache(C)}},$e.cache=function(C){return function(){return C.apply(null,arguments)}},$e.cacheSignal=function(){return null},$e.cloneElement=function(C,U,pe){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var ge=Y({},C.props),ze=C.key;if(U!=null)for(Ne in U.key!==void 0&&(ze=""+U.key),U)!K.call(U,Ne)||Ne==="key"||Ne==="__self"||Ne==="__source"||Ne==="ref"&&U.ref===void 0||(ge[Ne]=U[Ne]);var Ne=arguments.length-2;if(Ne===1)ge.children=pe;else if(1<Ne){for(var qe=Array(Ne),R=0;R<Ne;R++)qe[R]=arguments[R+2];ge.children=qe}return ie(C.type,ze,ge)},$e.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:m,_context:C},C},$e.createElement=function(C,U,pe){var ge,ze={},Ne=null;if(U!=null)for(ge in U.key!==void 0&&(Ne=""+U.key),U)K.call(U,ge)&&ge!=="key"&&ge!=="__self"&&ge!=="__source"&&(ze[ge]=U[ge]);var qe=arguments.length-2;if(qe===1)ze.children=pe;else if(1<qe){for(var R=Array(qe),fe=0;fe<qe;fe++)R[fe]=arguments[fe+2];ze.children=R}if(C&&C.defaultProps)for(ge in qe=C.defaultProps,qe)ze[ge]===void 0&&(ze[ge]=qe[ge]);return ie(C,Ne,ze)},$e.createRef=function(){return{current:null}},$e.forwardRef=function(C){return{$$typeof:k,render:C}},$e.isValidElement=x,$e.lazy=function(C){return{$$typeof:w,_payload:{_status:-1,_result:C},_init:z}},$e.memo=function(C,U){return{$$typeof:y,type:C,compare:U===void 0?null:U}},$e.startTransition=function(C){var U=M.T,pe={};M.T=pe;try{var ge=C(),ze=M.S;ze!==null&&ze(pe,ge),typeof ge=="object"&&ge!==null&&typeof ge.then=="function"&&ge.then(ne,me)}catch(Ne){me(Ne)}finally{U!==null&&pe.types!==null&&(U.types=pe.types),M.T=U}},$e.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},$e.use=function(C){return M.H.use(C)},$e.useActionState=function(C,U,pe){return M.H.useActionState(C,U,pe)},$e.useCallback=function(C,U){return M.H.useCallback(C,U)},$e.useContext=function(C){return M.H.useContext(C)},$e.useDebugValue=function(){},$e.useDeferredValue=function(C,U){return M.H.useDeferredValue(C,U)},$e.useEffect=function(C,U){return M.H.useEffect(C,U)},$e.useEffectEvent=function(C){return M.H.useEffectEvent(C)},$e.useId=function(){return M.H.useId()},$e.useImperativeHandle=function(C,U,pe){return M.H.useImperativeHandle(C,U,pe)},$e.useInsertionEffect=function(C,U){return M.H.useInsertionEffect(C,U)},$e.useLayoutEffect=function(C,U){return M.H.useLayoutEffect(C,U)},$e.useMemo=function(C,U){return M.H.useMemo(C,U)},$e.useOptimistic=function(C,U){return M.H.useOptimistic(C,U)},$e.useReducer=function(C,U,pe){return M.H.useReducer(C,U,pe)},$e.useRef=function(C){return M.H.useRef(C)},$e.useState=function(C){return M.H.useState(C)},$e.useSyncExternalStore=function(C,U,pe){return M.H.useSyncExternalStore(C,U,pe)},$e.useTransition=function(){return M.H.useTransition()},$e.version="19.2.6",$e}var tf;function Fd(){return tf||(tf=1,md.exports=xy()),md.exports}var f=Fd();const gy=my(f),by=py({__proto__:null,default:gy},[f]);var hd={exports:{}},rs={},fd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function yy(){return nf||(nf=1,(function(s){function i(v,L){var z=v.length;v.push(L);e:for(;0<z;){var me=z-1>>>1,se=v[me];if(0<u(se,L))v[me]=L,v[z]=se,z=me;else break e}}function o(v){return v.length===0?null:v[0]}function d(v){if(v.length===0)return null;var L=v[0],z=v.pop();if(z!==L){v[0]=z;e:for(var me=0,se=v.length,C=se>>>1;me<C;){var U=2*(me+1)-1,pe=v[U],ge=U+1,ze=v[ge];if(0>u(pe,z))ge<se&&0>u(ze,pe)?(v[me]=ze,v[ge]=z,me=ge):(v[me]=pe,v[U]=z,me=U);else if(ge<se&&0>u(ze,z))v[me]=ze,v[ge]=z,me=ge;else break e}}return L}function u(v,L){var z=v.sortIndex-L.sortIndex;return z!==0?z:v.id-L.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var h=Date,k=h.now();s.unstable_now=function(){return h.now()-k}}var b=[],y=[],w=1,S=null,_=3,G=!1,I=!1,Y=!1,A=!1,Q=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function te(v){for(var L=o(y);L!==null;){if(L.callback===null)d(y);else if(L.startTime<=v)d(y),L.sortIndex=L.expirationTime,i(b,L);else break;L=o(y)}}function P(v){if(Y=!1,te(v),!I)if(o(b)!==null)I=!0,ne||(ne=!0,T());else{var L=o(y);L!==null&&le(P,L.startTime-v)}}var ne=!1,M=-1,K=5,ie=-1;function ye(){return A?!0:!(s.unstable_now()-ie<K)}function x(){if(A=!1,ne){var v=s.unstable_now();ie=v;var L=!0;try{e:{I=!1,Y&&(Y=!1,q(M),M=-1),G=!0;var z=_;try{t:{for(te(v),S=o(b);S!==null&&!(S.expirationTime>v&&ye());){var me=S.callback;if(typeof me=="function"){S.callback=null,_=S.priorityLevel;var se=me(S.expirationTime<=v);if(v=s.unstable_now(),typeof se=="function"){S.callback=se,te(v),L=!0;break t}S===o(b)&&d(b),te(v)}else d(b);S=o(b)}if(S!==null)L=!0;else{var C=o(y);C!==null&&le(P,C.startTime-v),L=!1}}break e}finally{S=null,_=z,G=!1}L=void 0}}finally{L?T():ne=!1}}}var T;if(typeof O=="function")T=function(){O(x)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,$=W.port2;W.port1.onmessage=x,T=function(){$.postMessage(null)}}else T=function(){Q(x,0)};function le(v,L){M=Q(function(){v(s.unstable_now())},L)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(v){v.callback=null},s.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<v?Math.floor(1e3/v):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(v){switch(_){case 1:case 2:case 3:var L=3;break;default:L=_}var z=_;_=L;try{return v()}finally{_=z}},s.unstable_requestPaint=function(){A=!0},s.unstable_runWithPriority=function(v,L){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var z=_;_=v;try{return L()}finally{_=z}},s.unstable_scheduleCallback=function(v,L,z){var me=s.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?me+z:me):z=me,v){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=z+se,v={id:w++,callback:L,priorityLevel:v,startTime:z,expirationTime:se,sortIndex:-1},z>me?(v.sortIndex=z,i(y,v),o(b)===null&&v===o(y)&&(Y?(q(M),M=-1):Y=!0,le(P,z-me))):(v.sortIndex=se,i(b,v),I||G||(I=!0,ne||(ne=!0,T()))),v},s.unstable_shouldYield=ye,s.unstable_wrapCallback=function(v){var L=_;return function(){var z=_;_=L;try{return v.apply(this,arguments)}finally{_=z}}}})(xd)),xd}var af;function vy(){return af||(af=1,fd.exports=yy()),fd.exports}var gd={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf;function jy(){if(lf)return cn;lf=1;var s=Fd();function i(b){var y="https://react.dev/errors/"+b;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)y+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+b+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(b,y,w){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:S==null?null:""+S,children:b,containerInfo:y,implementation:w}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(b,y){if(b==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,cn.createPortal=function(b,y){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return m(b,y,null,w)},cn.flushSync=function(b){var y=h.T,w=d.p;try{if(h.T=null,d.p=2,b)return b()}finally{h.T=y,d.p=w,d.d.f()}},cn.preconnect=function(b,y){typeof b=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,d.d.C(b,y))},cn.prefetchDNS=function(b){typeof b=="string"&&d.d.D(b)},cn.preinit=function(b,y){if(typeof b=="string"&&y&&typeof y.as=="string"){var w=y.as,S=k(w,y.crossOrigin),_=typeof y.integrity=="string"?y.integrity:void 0,G=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;w==="style"?d.d.S(b,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:G}):w==="script"&&d.d.X(b,{crossOrigin:S,integrity:_,fetchPriority:G,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},cn.preinitModule=function(b,y){if(typeof b=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var w=k(y.as,y.crossOrigin);d.d.M(b,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&d.d.M(b)},cn.preload=function(b,y){if(typeof b=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var w=y.as,S=k(w,y.crossOrigin);d.d.L(b,w,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},cn.preloadModule=function(b,y){if(typeof b=="string")if(y){var w=k(y.as,y.crossOrigin);d.d.m(b,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else d.d.m(b)},cn.requestFormReset=function(b){d.d.r(b)},cn.unstable_batchedUpdates=function(b,y){return b(y)},cn.useFormState=function(b,y,w){return h.H.useFormState(b,y,w)},cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},cn.version="19.2.6",cn}var sf;function hx(){if(sf)return gd.exports;sf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),gd.exports=jy(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of;function wy(){if(of)return rs;of=1;var s=vy(),i=Fd(),o=hx();function d(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function k(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(d(188))}function y(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(d(188));return n!==e?null:e}for(var a=e,l=n;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){a=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return b(r),e;if(c===l)return b(r),n;c=c.sibling}throw Error(d(188))}if(a.return!==l.return)a=r,l=c;else{for(var p=!1,g=r.child;g;){if(g===a){p=!0,a=r,l=c;break}if(g===l){p=!0,l=r,a=c;break}g=g.sibling}if(!p){for(g=c.child;g;){if(g===a){p=!0,a=c,l=r;break}if(g===l){p=!0,l=c,a=r;break}g=g.sibling}if(!p)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:n}function w(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=w(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),O=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var W=Symbol.for("react.client.reference");function $(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===W?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case Q:return"Profiler";case A:return"StrictMode";case P:return"Suspense";case ne:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case O:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case te:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return n=e.displayName||null,n!==null?n:$(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return $(e(n))}catch{}}return null}var le=Array.isArray,v=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},me=[],se=-1;function C(e){return{current:e}}function U(e){0>se||(e.current=me[se],me[se]=null,se--)}function pe(e,n){se++,me[se]=e.current,e.current=n}var ge=C(null),ze=C(null),Ne=C(null),qe=C(null);function R(e,n){switch(pe(Ne,n),pe(ze,e),pe(ge,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?jh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=jh(n),e=wh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(ge),pe(ge,e)}function fe(){U(ge),U(ze),U(Ne)}function he(e){e.memoizedState!==null&&pe(qe,e);var n=ge.current,a=wh(n,e.type);n!==a&&(pe(ze,e),pe(ge,a))}function Le(e){ze.current===e&&(U(ge),U(ze)),qe.current===e&&(U(qe),as._currentValue=z)}var ct,ut;function nt(e){if(ct===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ct=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ct+e+ut}var Ct=!1;function pt(e,n){if(!e||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var de=function(){throw Error()};if(Object.defineProperty(de.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(de,[])}catch(V){var F=V}Reflect.construct(e,[],de)}else{try{de.call()}catch(V){F=V}e.call(de.prototype)}}else{try{throw Error()}catch(V){F=V}(de=e())&&typeof de.catch=="function"&&de.catch(function(){})}}catch(V){if(V&&F&&typeof V.stack=="string")return[V.stack,F.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),p=c[0],g=c[1];if(p&&g){var E=p.split(`
`),Z=g.split(`
`);for(r=l=0;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;for(;r<Z.length&&!Z[r].includes("DetermineComponentFrameRoot");)r++;if(l===E.length||r===Z.length)for(l=E.length-1,r=Z.length-1;1<=l&&0<=r&&E[l]!==Z[r];)r--;for(;1<=l&&0<=r;l--,r--)if(E[l]!==Z[r]){if(l!==1||r!==1)do if(l--,r--,0>r||E[l]!==Z[r]){var ae=`
`+E[l].replace(" at new "," at ");return e.displayName&&ae.includes("<anonymous>")&&(ae=ae.replace("<anonymous>",e.displayName)),ae}while(1<=l&&0<=r);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?nt(a):""}function Pt(e,n){switch(e.tag){case 26:case 27:case 5:return nt(e.type);case 16:return nt("Lazy");case 13:return e.child!==n&&n!==null?nt("Suspense Fallback"):nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return pt(e.type,!1);case 11:return pt(e.type.render,!1);case 1:return pt(e.type,!0);case 31:return nt("Activity");default:return""}}function vt(e){try{var n="",a=null;do n+=Pt(e,a),a=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ke=Object.prototype.hasOwnProperty,$t=s.unstable_scheduleCallback,Ot=s.unstable_cancelCallback,ke=s.unstable_shouldYield,Sn=s.unstable_requestPaint,Ae=s.unstable_now,un=s.unstable_getCurrentPriorityLevel,pn=s.unstable_ImmediatePriority,Wt=s.unstable_UserBlockingPriority,J=s.unstable_NormalPriority,De=s.unstable_LowPriority,Se=s.unstable_IdlePriority,we=s.log,Je=s.unstable_setDisableYieldValue,Be=null,Ye=null;function Ve(e){if(typeof we=="function"&&Je(e),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(Be,e)}catch{}}var st=Math.clz32?Math.clz32:ta,mn=Math.log,Et=Math.LN2;function ta(e){return e>>>=0,e===0?32:31-(mn(e)/Et|0)|0}var Gt=256,hn=262144,Fn=4194304;function fn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function H(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~c,l!==0?r=fn(l):(p&=g,p!==0?r=fn(p):a||(a=g&~e,a!==0&&(r=fn(a))))):(g=l&~c,g!==0?r=fn(g):p!==0?r=fn(p):a||(a=l&~e,a!==0&&(r=fn(a)))),r===0?0:n!==0&&n!==r&&(n&c)===0&&(c=r&-r,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:r}function oe(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ee(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var e=Fn;return Fn<<=1,(Fn&62914560)===0&&(Fn=4194304),e}function Ze(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Fe(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function j(e,n,a,l,r,c){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,E=e.expirationTimes,Z=e.hiddenUpdates;for(a=p&~a;0<a;){var ae=31-st(a),de=1<<ae;g[ae]=0,E[ae]=-1;var F=Z[ae];if(F!==null)for(Z[ae]=null,ae=0;ae<F.length;ae++){var V=F[ae];V!==null&&(V.lane&=-536870913)}a&=~de}l!==0&&ce(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~n))}function ce(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-st(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ue(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-st(a),r=1<<l;r&n|e[l]&n&&(e[l]|=n),a&=~r}}function Ce(e,n){var a=n&-n;return a=(a&42)!==0?1:jt(a),(a&(e.suspendedLanes|n))!==0?0:a}function jt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Un(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ca(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:Xh(e.type))}function Nt(e,n){var a=L.p;try{return L.p=e,n()}finally{L.p=a}}var Jn=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Jn,zt="__reactProps$"+Jn,Oa="__reactContainer$"+Jn,N="__reactEvents$"+Jn,be="__reactListeners$"+Jn,ve="__reactHandles$"+Jn,Re="__reactResources$"+Jn,it="__reactMarker$"+Jn;function gn(e){delete e[Rt],delete e[zt],delete e[N],delete e[be],delete e[ve]}function Yt(e){var n=e[Rt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oa]||a[Rt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Th(e);e!==null;){if(a=e[Rt])return a;e=Th(e)}return n}e=a,a=e.parentNode}return null}function na(e){if(e=e[Rt]||e[Oa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function da(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(d(33))}function Ra(e){var n=e[Re];return n||(n=e[Re]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function It(e){e[it]=!0}var cu=new Set,du={};function xi(e,n){Ui(e,n),Ui(e+"Capture",n)}function Ui(e,n){for(du[e]=n,e=0;e<n.length;e++)cu.add(n[e])}var ag=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uu={},pu={};function ig(e){return Ke.call(pu,e)?!0:Ke.call(uu,e)?!1:ag.test(e)?pu[e]=!0:(uu[e]=!0,!1)}function vs(e,n,a){if(ig(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function js(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ua(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}function Hn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function lg(e,n,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,c=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function lr(e){if(!e._valueTracker){var n=mu(e)?"checked":"value";e._valueTracker=lg(e,n,""+e[n])}}function hu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=mu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sg=/[\n"\\]/g;function Ln(e){return e.replace(sg,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function sr(e,n,a,l,r,c,p,g){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Hn(n)):e.value!==""+Hn(n)&&(e.value=""+Hn(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?or(e,p,Hn(n)):a!=null?or(e,p,Hn(a)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Hn(g):e.removeAttribute("name")}function fu(e,n,a,l,r,c,p,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){lr(e);return}a=a!=null?""+Hn(a):"",n=n!=null?""+Hn(n):a,g||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),lr(e)}function or(e,n,a){n==="number"&&ws(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Hi(e,n,a,l){if(e=e.options,n){n={};for(var r=0;r<a.length;r++)n["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=n.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Hn(a),n=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function xu(e,n,a){if(n!=null&&(n=""+Hn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Hn(a):""}function gu(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(d(92));if(le(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=Hn(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),lr(e)}function Li(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var og=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bu(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||og.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yu(e,n,a){if(n!=null&&typeof n!="object")throw Error(d(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&a[r]!==l&&bu(e,r,l)}else for(var c in n)n.hasOwnProperty(c)&&bu(e,c,n[c])}function rr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _s(e){return cg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pa(){}var cr=null;function dr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qi=null,Bi=null;function vu(e){var n=na(e);if(n&&(e=n.stateNode)){var a=e[zt]||null;e:switch(e=n.stateNode,n.type){case"input":if(sr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ln(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var r=l[zt]||null;if(!r)throw Error(d(90));sr(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&hu(l)}break e;case"textarea":xu(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Hi(e,!!a.multiple,n,!1)}}}var ur=!1;function ju(e,n,a){if(ur)return e(n,a);ur=!0;try{var l=e(n);return l}finally{if(ur=!1,(qi!==null||Bi!==null)&&(uo(),qi&&(n=qi,e=Bi,Bi=qi=null,vu(n),e)))for(n=0;n<e.length;n++)vu(e[n])}}function vl(e,n){var a=e.stateNode;if(a===null)return null;var l=a[zt]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,n,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pr=!1;if(ma)try{var jl={};Object.defineProperty(jl,"passive",{get:function(){pr=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{pr=!1}var Ua=null,mr=null,Ns=null;function wu(){if(Ns)return Ns;var e,n=mr,a=n.length,l,r="value"in Ua?Ua.value:Ua.textContent,c=r.length;for(e=0;e<a&&n[e]===r[e];e++);var p=a-e;for(l=1;l<=p&&n[a-l]===r[c-l];l++);return Ns=r.slice(e,1<l?1-l:void 0)}function Ss(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ks(){return!0}function _u(){return!1}function bn(e){function n(a,l,r,c,p){this._reactName=a,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ks:_u,this.isPropagationStopped=_u,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),n}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=bn(gi),wl=S({},gi,{view:0,detail:0}),dg=bn(wl),hr,fr,_l,zs=S({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(hr=e.screenX-_l.screenX,fr=e.screenY-_l.screenY):fr=hr=0,_l=e),hr)},movementY:function(e){return"movementY"in e?e.movementY:fr}}),Nu=bn(zs),ug=S({},zs,{dataTransfer:0}),pg=bn(ug),mg=S({},wl,{relatedTarget:0}),xr=bn(mg),hg=S({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),fg=bn(hg),xg=S({},gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gg=bn(xg),bg=S({},gi,{data:0}),Su=bn(bg),yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=jg[e])?!!n[e]:!1}function gr(){return wg}var _g=S({},wl,{key:function(e){if(e.key){var n=yg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gr,charCode:function(e){return e.type==="keypress"?Ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ng=bn(_g),Sg=S({},zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=bn(Sg),kg=S({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gr}),Cg=bn(kg),zg=S({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tg=bn(zg),Eg=S({},zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mg=bn(Eg),Ag=S({},gi,{newState:0,oldState:0}),Dg=bn(Ag),Og=[9,13,27,32],br=ma&&"CompositionEvent"in window,Nl=null;ma&&"documentMode"in document&&(Nl=document.documentMode);var Rg=ma&&"TextEvent"in window&&!Nl,Cu=ma&&(!br||Nl&&8<Nl&&11>=Nl),zu=" ",Tu=!1;function Eu(e,n){switch(e){case"keyup":return Og.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $i=!1;function Ug(e,n){switch(e){case"compositionend":return Mu(n);case"keypress":return n.which!==32?null:(Tu=!0,zu);case"textInput":return e=n.data,e===zu&&Tu?null:e;default:return null}}function Hg(e,n){if($i)return e==="compositionend"||!br&&Eu(e,n)?(e=wu(),Ns=mr=Ua=null,$i=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cu&&n.locale!=="ko"?null:n.data;default:return null}}var Lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Lg[e.type]:n==="textarea"}function Du(e,n,a,l){qi?Bi?Bi.push(l):Bi=[l]:qi=l,n=bo(n,"onChange"),0<n.length&&(a=new Cs("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var Sl=null,kl=null;function qg(e){fh(e,0)}function Ts(e){var n=da(e);if(hu(n))return e}function Ou(e,n){if(e==="change")return n}var Ru=!1;if(ma){var yr;if(ma){var vr="oninput"in document;if(!vr){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),vr=typeof Uu.oninput=="function"}yr=vr}else yr=!1;Ru=yr&&(!document.documentMode||9<document.documentMode)}function Hu(){Sl&&(Sl.detachEvent("onpropertychange",Lu),kl=Sl=null)}function Lu(e){if(e.propertyName==="value"&&Ts(kl)){var n=[];Du(n,kl,e,dr(e)),ju(qg,n)}}function Bg(e,n,a){e==="focusin"?(Hu(),Sl=n,kl=a,Sl.attachEvent("onpropertychange",Lu)):e==="focusout"&&Hu()}function $g(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ts(kl)}function Gg(e,n){if(e==="click")return Ts(n)}function Yg(e,n){if(e==="input"||e==="change")return Ts(n)}function Qg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:Qg;function Cl(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var r=a[l];if(!Ke.call(n,r)||!kn(e[r],n[r]))return!1}return!0}function qu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bu(e,n){var a=qu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qu(a)}}function $u(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$u(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ws(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ws(e.document)}return n}function jr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Xg=ma&&"documentMode"in document&&11>=document.documentMode,Gi=null,wr=null,zl=null,_r=!1;function Yu(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_r||Gi==null||Gi!==ws(l)||(l=Gi,"selectionStart"in l&&jr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),zl&&Cl(zl,l)||(zl=l,l=bo(wr,"onSelect"),0<l.length&&(n=new Cs("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=Gi)))}function bi(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Yi={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionrun:bi("Transition","TransitionRun"),transitionstart:bi("Transition","TransitionStart"),transitioncancel:bi("Transition","TransitionCancel"),transitionend:bi("Transition","TransitionEnd")},Nr={},Qu={};ma&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete Yi.animationend.animation,delete Yi.animationiteration.animation,delete Yi.animationstart.animation),"TransitionEvent"in window||delete Yi.transitionend.transition);function yi(e){if(Nr[e])return Nr[e];if(!Yi[e])return e;var n=Yi[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qu)return Nr[e]=n[a];return e}var Xu=yi("animationend"),Zu=yi("animationiteration"),Ku=yi("animationstart"),Zg=yi("transitionrun"),Kg=yi("transitionstart"),Fg=yi("transitioncancel"),Fu=yi("transitionend"),Ju=new Map,Sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sr.push("scrollEnd");function Vn(e,n){Ju.set(e,n),xi(n,[e])}var Es=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qn=[],Qi=0,kr=0;function Ms(){for(var e=Qi,n=kr=Qi=0;n<e;){var a=qn[n];qn[n++]=null;var l=qn[n];qn[n++]=null;var r=qn[n];qn[n++]=null;var c=qn[n];if(qn[n++]=null,l!==null&&r!==null){var p=l.pending;p===null?r.next=r:(r.next=p.next,p.next=r),l.pending=r}c!==0&&Vu(a,r,c)}}function As(e,n,a,l){qn[Qi++]=e,qn[Qi++]=n,qn[Qi++]=a,qn[Qi++]=l,kr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Cr(e,n,a,l){return As(e,n,a,l),Ds(e)}function vi(e,n){return As(e,null,null,n),Ds(e)}function Vu(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var r=!1,c=e.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&n!==null&&(r=31-st(a),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=a|536870912),c):null}function Ds(e){if(50<Vl)throw Vl=0,Uc=null,Error(d(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xi={};function Jg(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,n,a,l){return new Jg(e,n,a,l)}function zr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ha(e,n){var a=e.alternate;return a===null?(a=Cn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Pu(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Os(e,n,a,l,r,c){var p=0;if(l=e,typeof e=="function")zr(e)&&(p=1);else if(typeof e=="string")p=ey(e,a,ge.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=Cn(31,a,n,r),e.elementType=ie,e.lanes=c,e;case Y:return ji(a.children,r,c,n);case A:p=8,r|=24;break;case Q:return e=Cn(12,a,n,r|2),e.elementType=Q,e.lanes=c,e;case P:return e=Cn(13,a,n,r),e.elementType=P,e.lanes=c,e;case ne:return e=Cn(19,a,n,r),e.elementType=ne,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:p=10;break e;case q:p=9;break e;case te:p=11;break e;case M:p=14;break e;case K:p=16,l=null;break e}p=29,a=Error(d(130,e===null?"null":typeof e,"")),l=null}return n=Cn(p,a,n,r),n.elementType=e,n.type=l,n.lanes=c,n}function ji(e,n,a,l){return e=Cn(7,e,l,n),e.lanes=a,e}function Tr(e,n,a){return e=Cn(6,e,null,n),e.lanes=a,e}function Wu(e){var n=Cn(18,null,null,0);return n.stateNode=e,n}function Er(e,n,a){return n=Cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Iu=new WeakMap;function Bn(e,n){if(typeof e=="object"&&e!==null){var a=Iu.get(e);return a!==void 0?a:(n={value:e,source:n,stack:vt(n)},Iu.set(e,n),n)}return{value:e,source:n,stack:vt(n)}}var Zi=[],Ki=0,Rs=null,Tl=0,$n=[],Gn=0,Ha=null,aa=1,ia="";function fa(e,n){Zi[Ki++]=Tl,Zi[Ki++]=Rs,Rs=e,Tl=n}function ep(e,n,a){$n[Gn++]=aa,$n[Gn++]=ia,$n[Gn++]=Ha,Ha=e;var l=aa;e=ia;var r=32-st(l)-1;l&=~(1<<r),a+=1;var c=32-st(n)+r;if(30<c){var p=r-r%5;c=(l&(1<<p)-1).toString(32),l>>=p,r-=p,aa=1<<32-st(n)+r|a<<r|l,ia=c+e}else aa=1<<c|a<<r|l,ia=e}function Mr(e){e.return!==null&&(fa(e,1),ep(e,1,0))}function Ar(e){for(;e===Rs;)Rs=Zi[--Ki],Zi[Ki]=null,Tl=Zi[--Ki],Zi[Ki]=null;for(;e===Ha;)Ha=$n[--Gn],$n[Gn]=null,ia=$n[--Gn],$n[Gn]=null,aa=$n[--Gn],$n[Gn]=null}function tp(e,n){$n[Gn++]=aa,$n[Gn++]=ia,$n[Gn++]=Ha,aa=n.id,ia=n.overflow,Ha=e}var an=null,wt=null,at=!1,La=null,Yn=!1,Dr=Error(d(519));function qa(e){var n=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw El(Bn(n,e)),Dr}function np(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[Rt]=e,n[zt]=l,a){case"dialog":We("cancel",n),We("close",n);break;case"iframe":case"object":case"embed":We("load",n);break;case"video":case"audio":for(a=0;a<Wl.length;a++)We(Wl[a],n);break;case"source":We("error",n);break;case"img":case"image":case"link":We("error",n),We("load",n);break;case"details":We("toggle",n);break;case"input":We("invalid",n),fu(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":We("invalid",n);break;case"textarea":We("invalid",n),gu(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||yh(n.textContent,a)?(l.popover!=null&&(We("beforetoggle",n),We("toggle",n)),l.onScroll!=null&&We("scroll",n),l.onScrollEnd!=null&&We("scrollend",n),l.onClick!=null&&(n.onclick=pa),n=!0):n=!1,n||qa(e,!0)}function ap(e){for(an=e.return;an;)switch(an.tag){case 5:case 31:case 13:Yn=!1;return;case 27:case 3:Yn=!0;return;default:an=an.return}}function Fi(e){if(e!==an)return!1;if(!at)return ap(e),at=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pc(e.type,e.memoizedProps)),a=!a),a&&wt&&qa(e),ap(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));wt=zh(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));wt=zh(e)}else n===27?(n=wt,Ia(e.type)?(e=nd,nd=null,wt=e):wt=n):wt=an?Xn(e.stateNode.nextSibling):null;return!0}function wi(){wt=an=null,at=!1}function Or(){var e=La;return e!==null&&(wn===null?wn=e:wn.push.apply(wn,e),La=null),e}function El(e){La===null?La=[e]:La.push(e)}var Rr=C(null),_i=null,xa=null;function Ba(e,n,a){pe(Rr,n._currentValue),n._currentValue=a}function ga(e){e._currentValue=Rr.current,U(Rr)}function Ur(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function Hr(e,n,a,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var g=c;c=r;for(var E=0;E<n.length;E++)if(g.context===n[E]){c.lanes|=a,g=c.alternate,g!==null&&(g.lanes|=a),Ur(c.return,a,e),l||(p=null);break e}c=g.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(d(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),Ur(p,a,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function Ji(e,n,a,l){e=null;for(var r=n,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(d(387));if(p=p.memoizedProps,p!==null){var g=r.type;kn(r.pendingProps.value,p.value)||(e!==null?e.push(g):e=[g])}}else if(r===qe.current){if(p=r.alternate,p===null)throw Error(d(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(as):e=[as])}r=r.return}e!==null&&Hr(n,e,a,l),n.flags|=262144}function Us(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ni(e){_i=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return ip(_i,e)}function Hs(e,n){return _i===null&&Ni(e),ip(e,n)}function ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xa===null){if(e===null)throw Error(d(308));xa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else xa=xa.next=n;return a}var Vg=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Pg=s.unstable_scheduleCallback,Wg=s.unstable_NormalPriority,Qt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lr(){return{controller:new Vg,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&Pg(Wg,function(){e.controller.abort()})}var Al=null,qr=0,Vi=0,Pi=null;function Ig(e,n){if(Al===null){var a=Al=[];qr=0,Vi=Gc(),Pi={status:"pending",value:void 0,then:function(l){a.push(l)}}}return qr++,n.then(lp,lp),n}function lp(){if(--qr===0&&Al!==null){Pi!==null&&(Pi.status="fulfilled");var e=Al;Al=null,Vi=0,Pi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function eb(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<a.length;r++)(0,a[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),l}var sp=v.S;v.S=function(e,n){Ym=Ae(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ig(e,n),sp!==null&&sp(e,n)};var Si=C(null);function Br(){var e=Si.current;return e!==null?e:yt.pooledCache}function Ls(e,n){n===null?pe(Si,Si.current):pe(Si,n.pool)}function op(){var e=Br();return e===null?null:{parent:Qt._currentValue,pool:e}}var Wi=Error(d(460)),$r=Error(d(474)),qs=Error(d(542)),Bs={then:function(){}};function rp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(pa,pa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,up(e),e;default:if(typeof n.status=="string")n.then(pa,pa);else{if(e=yt,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,up(e),e}throw Ci=n,Wi}}function ki(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ci=a,Wi):a}}var Ci=null;function dp(){if(Ci===null)throw Error(d(459));var e=Ci;return Ci=null,e}function up(e){if(e===Wi||e===qs)throw Error(d(483))}var Ii=null,Dl=0;function $s(e){var n=Dl;return Dl+=1,Ii===null&&(Ii=[]),cp(Ii,e,n)}function Ol(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Gs(e,n){throw n.$$typeof===_?Error(d(525)):(e=Object.prototype.toString.call(n),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function pp(e){function n(B,D){if(e){var X=B.deletions;X===null?(B.deletions=[D],B.flags|=16):X.push(D)}}function a(B,D){if(!e)return null;for(;D!==null;)n(B,D),D=D.sibling;return null}function l(B){for(var D=new Map;B!==null;)B.key!==null?D.set(B.key,B):D.set(B.index,B),B=B.sibling;return D}function r(B,D){return B=ha(B,D),B.index=0,B.sibling=null,B}function c(B,D,X){return B.index=X,e?(X=B.alternate,X!==null?(X=X.index,X<D?(B.flags|=67108866,D):X):(B.flags|=67108866,D)):(B.flags|=1048576,D)}function p(B){return e&&B.alternate===null&&(B.flags|=67108866),B}function g(B,D,X,re){return D===null||D.tag!==6?(D=Tr(X,B.mode,re),D.return=B,D):(D=r(D,X),D.return=B,D)}function E(B,D,X,re){var Ue=X.type;return Ue===Y?ae(B,D,X.props.children,re,X.key):D!==null&&(D.elementType===Ue||typeof Ue=="object"&&Ue!==null&&Ue.$$typeof===K&&ki(Ue)===D.type)?(D=r(D,X.props),Ol(D,X),D.return=B,D):(D=Os(X.type,X.key,X.props,null,B.mode,re),Ol(D,X),D.return=B,D)}function Z(B,D,X,re){return D===null||D.tag!==4||D.stateNode.containerInfo!==X.containerInfo||D.stateNode.implementation!==X.implementation?(D=Er(X,B.mode,re),D.return=B,D):(D=r(D,X.children||[]),D.return=B,D)}function ae(B,D,X,re,Ue){return D===null||D.tag!==7?(D=ji(X,B.mode,re,Ue),D.return=B,D):(D=r(D,X),D.return=B,D)}function de(B,D,X){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Tr(""+D,B.mode,X),D.return=B,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case G:return X=Os(D.type,D.key,D.props,null,B.mode,X),Ol(X,D),X.return=B,X;case I:return D=Er(D,B.mode,X),D.return=B,D;case K:return D=ki(D),de(B,D,X)}if(le(D)||T(D))return D=ji(D,B.mode,X,null),D.return=B,D;if(typeof D.then=="function")return de(B,$s(D),X);if(D.$$typeof===O)return de(B,Hs(B,D),X);Gs(B,D)}return null}function F(B,D,X,re){var Ue=D!==null?D.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return Ue!==null?null:g(B,D,""+X,re);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case G:return X.key===Ue?E(B,D,X,re):null;case I:return X.key===Ue?Z(B,D,X,re):null;case K:return X=ki(X),F(B,D,X,re)}if(le(X)||T(X))return Ue!==null?null:ae(B,D,X,re,null);if(typeof X.then=="function")return F(B,D,$s(X),re);if(X.$$typeof===O)return F(B,D,Hs(B,X),re);Gs(B,X)}return null}function V(B,D,X,re,Ue){if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return B=B.get(X)||null,g(D,B,""+re,Ue);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case G:return B=B.get(re.key===null?X:re.key)||null,E(D,B,re,Ue);case I:return B=B.get(re.key===null?X:re.key)||null,Z(D,B,re,Ue);case K:return re=ki(re),V(B,D,X,re,Ue)}if(le(re)||T(re))return B=B.get(X)||null,ae(D,B,re,Ue,null);if(typeof re.then=="function")return V(B,D,X,$s(re),Ue);if(re.$$typeof===O)return V(B,D,X,Hs(D,re),Ue);Gs(D,re)}return null}function Ee(B,D,X,re){for(var Ue=null,ot=null,Oe=D,Xe=D=0,tt=null;Oe!==null&&Xe<X.length;Xe++){Oe.index>Xe?(tt=Oe,Oe=null):tt=Oe.sibling;var rt=F(B,Oe,X[Xe],re);if(rt===null){Oe===null&&(Oe=tt);break}e&&Oe&&rt.alternate===null&&n(B,Oe),D=c(rt,D,Xe),ot===null?Ue=rt:ot.sibling=rt,ot=rt,Oe=tt}if(Xe===X.length)return a(B,Oe),at&&fa(B,Xe),Ue;if(Oe===null){for(;Xe<X.length;Xe++)Oe=de(B,X[Xe],re),Oe!==null&&(D=c(Oe,D,Xe),ot===null?Ue=Oe:ot.sibling=Oe,ot=Oe);return at&&fa(B,Xe),Ue}for(Oe=l(Oe);Xe<X.length;Xe++)tt=V(Oe,B,Xe,X[Xe],re),tt!==null&&(e&&tt.alternate!==null&&Oe.delete(tt.key===null?Xe:tt.key),D=c(tt,D,Xe),ot===null?Ue=tt:ot.sibling=tt,ot=tt);return e&&Oe.forEach(function(ii){return n(B,ii)}),at&&fa(B,Xe),Ue}function He(B,D,X,re){if(X==null)throw Error(d(151));for(var Ue=null,ot=null,Oe=D,Xe=D=0,tt=null,rt=X.next();Oe!==null&&!rt.done;Xe++,rt=X.next()){Oe.index>Xe?(tt=Oe,Oe=null):tt=Oe.sibling;var ii=F(B,Oe,rt.value,re);if(ii===null){Oe===null&&(Oe=tt);break}e&&Oe&&ii.alternate===null&&n(B,Oe),D=c(ii,D,Xe),ot===null?Ue=ii:ot.sibling=ii,ot=ii,Oe=tt}if(rt.done)return a(B,Oe),at&&fa(B,Xe),Ue;if(Oe===null){for(;!rt.done;Xe++,rt=X.next())rt=de(B,rt.value,re),rt!==null&&(D=c(rt,D,Xe),ot===null?Ue=rt:ot.sibling=rt,ot=rt);return at&&fa(B,Xe),Ue}for(Oe=l(Oe);!rt.done;Xe++,rt=X.next())rt=V(Oe,B,Xe,rt.value,re),rt!==null&&(e&&rt.alternate!==null&&Oe.delete(rt.key===null?Xe:rt.key),D=c(rt,D,Xe),ot===null?Ue=rt:ot.sibling=rt,ot=rt);return e&&Oe.forEach(function(uy){return n(B,uy)}),at&&fa(B,Xe),Ue}function gt(B,D,X,re){if(typeof X=="object"&&X!==null&&X.type===Y&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case G:e:{for(var Ue=X.key;D!==null;){if(D.key===Ue){if(Ue=X.type,Ue===Y){if(D.tag===7){a(B,D.sibling),re=r(D,X.props.children),re.return=B,B=re;break e}}else if(D.elementType===Ue||typeof Ue=="object"&&Ue!==null&&Ue.$$typeof===K&&ki(Ue)===D.type){a(B,D.sibling),re=r(D,X.props),Ol(re,X),re.return=B,B=re;break e}a(B,D);break}else n(B,D);D=D.sibling}X.type===Y?(re=ji(X.props.children,B.mode,re,X.key),re.return=B,B=re):(re=Os(X.type,X.key,X.props,null,B.mode,re),Ol(re,X),re.return=B,B=re)}return p(B);case I:e:{for(Ue=X.key;D!==null;){if(D.key===Ue)if(D.tag===4&&D.stateNode.containerInfo===X.containerInfo&&D.stateNode.implementation===X.implementation){a(B,D.sibling),re=r(D,X.children||[]),re.return=B,B=re;break e}else{a(B,D);break}else n(B,D);D=D.sibling}re=Er(X,B.mode,re),re.return=B,B=re}return p(B);case K:return X=ki(X),gt(B,D,X,re)}if(le(X))return Ee(B,D,X,re);if(T(X)){if(Ue=T(X),typeof Ue!="function")throw Error(d(150));return X=Ue.call(X),He(B,D,X,re)}if(typeof X.then=="function")return gt(B,D,$s(X),re);if(X.$$typeof===O)return gt(B,D,Hs(B,X),re);Gs(B,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,D!==null&&D.tag===6?(a(B,D.sibling),re=r(D,X),re.return=B,B=re):(a(B,D),re=Tr(X,B.mode,re),re.return=B,B=re),p(B)):a(B,D)}return function(B,D,X,re){try{Dl=0;var Ue=gt(B,D,X,re);return Ii=null,Ue}catch(Oe){if(Oe===Wi||Oe===qs)throw Oe;var ot=Cn(29,Oe,null,B.mode);return ot.lanes=re,ot.return=B,ot}finally{}}}var zi=pp(!0),mp=pp(!1),$a=!1;function Gr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yr(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(dt&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=Ds(e),Vu(e,null,a),n}return As(e,l,n,a),Ds(e)}function Rl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,ue(e,a)}}function Qr(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?r=c=n:c=c.next=n}else r=c=n;a={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Xr=!1;function Ul(){if(Xr){var e=Pi;if(e!==null)throw e}}function Hl(e,n,a,l){Xr=!1;var r=e.updateQueue;$a=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var E=g,Z=E.next;E.next=null,p===null?c=Z:p.next=Z,p=E;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,g=ae.lastBaseUpdate,g!==p&&(g===null?ae.firstBaseUpdate=Z:g.next=Z,ae.lastBaseUpdate=E))}if(c!==null){var de=r.baseState;p=0,ae=Z=E=null,g=c;do{var F=g.lane&-536870913,V=F!==g.lane;if(V?(et&F)===F:(l&F)===F){F!==0&&F===Vi&&(Xr=!0),ae!==null&&(ae=ae.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var Ee=e,He=g;F=n;var gt=a;switch(He.tag){case 1:if(Ee=He.payload,typeof Ee=="function"){de=Ee.call(gt,de,F);break e}de=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=He.payload,F=typeof Ee=="function"?Ee.call(gt,de,F):Ee,F==null)break e;de=S({},de,F);break e;case 2:$a=!0}}F=g.callback,F!==null&&(e.flags|=64,V&&(e.flags|=8192),V=r.callbacks,V===null?r.callbacks=[F]:V.push(F))}else V={lane:F,tag:g.tag,payload:g.payload,callback:g.callback,next:null},ae===null?(Z=ae=V,E=de):ae=ae.next=V,p|=F;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;V=g,g=V.next,V.next=null,r.lastBaseUpdate=V,r.shared.pending=null}}while(!0);ae===null&&(E=de),r.baseState=E,r.firstBaseUpdate=Z,r.lastBaseUpdate=ae,c===null&&(r.shared.lanes=0),Fa|=p,e.lanes=p,e.memoizedState=de}}function hp(e,n){if(typeof e!="function")throw Error(d(191,e));e.call(n)}function fp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hp(a[e],n)}var el=C(null),Ys=C(0);function xp(e,n){e=ka,pe(Ys,e),pe(el,n),ka=e|n.baseLanes}function Zr(){pe(Ys,ka),pe(el,el.current)}function Kr(){ka=Ys.current,U(el),U(Ys)}var zn=C(null),Qn=null;function Qa(e){var n=e.alternate;pe(Ut,Ut.current&1),pe(zn,e),Qn===null&&(n===null||el.current!==null||n.memoizedState!==null)&&(Qn=e)}function Fr(e){pe(Ut,Ut.current),pe(zn,e),Qn===null&&(Qn=e)}function gp(e){e.tag===22?(pe(Ut,Ut.current),pe(zn,e),Qn===null&&(Qn=e)):Xa()}function Xa(){pe(Ut,Ut.current),pe(zn,zn.current)}function Tn(e){U(zn),Qn===e&&(Qn=null),U(Ut)}var Ut=C(0);function Qs(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ed(a)||td(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ba=0,Qe=null,ft=null,Xt=null,Xs=!1,tl=!1,Ti=!1,Zs=0,Ll=0,nl=null,tb=0;function Mt(){throw Error(d(321))}function Jr(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function Vr(e,n,a,l,r,c){return ba=c,Qe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,v.H=e===null||e.memoizedState===null?em:uc,Ti=!1,c=a(l,r),Ti=!1,tl&&(c=yp(n,a,l,r)),bp(e),c}function bp(e){v.H=$l;var n=ft!==null&&ft.next!==null;if(ba=0,Xt=ft=Qe=null,Xs=!1,Ll=0,nl=null,n)throw Error(d(300));e===null||Zt||(e=e.dependencies,e!==null&&Us(e)&&(Zt=!0))}function yp(e,n,a,l){Qe=e;var r=0;do{if(tl&&(nl=null),Ll=0,tl=!1,25<=r)throw Error(d(301));if(r+=1,Xt=ft=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}v.H=tm,c=n(a,l)}while(tl);return c}function nb(){var e=v.H,n=e.useState()[0];return n=typeof n.then=="function"?ql(n):n,e=e.useState()[0],(ft!==null?ft.memoizedState:null)!==e&&(Qe.flags|=1024),n}function Pr(){var e=Zs!==0;return Zs=0,e}function Wr(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ir(e){if(Xs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Xs=!1}ba=0,Xt=ft=Qe=null,tl=!1,Ll=Zs=0,nl=null}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Qe.memoizedState=Xt=e:Xt=Xt.next=e,Xt}function Ht(){if(ft===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=ft.next;var n=Xt===null?Qe.memoizedState:Xt.next;if(n!==null)Xt=n,ft=e;else{if(e===null)throw Qe.alternate===null?Error(d(467)):Error(d(310));ft=e,e={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},Xt===null?Qe.memoizedState=Xt=e:Xt=Xt.next=e}return Xt}function Ks(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(e){var n=Ll;return Ll+=1,nl===null&&(nl=[]),e=cp(nl,e,n),n=Qe,(Xt===null?n.memoizedState:Xt.next)===null&&(n=n.alternate,v.H=n===null||n.memoizedState===null?em:uc),e}function Fs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ql(e);if(e.$$typeof===O)return ln(e)}throw Error(d(438,String(e)))}function ec(e){var n=null,a=Qe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=Qe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ks(),Qe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=ye;return n.index++,a}function ya(e,n){return typeof n=="function"?n(e):n}function Js(e){var n=Ht();return tc(n,ft,e)}function tc(e,n,a){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}n.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{n=r.next;var g=p=null,E=null,Z=n,ae=!1;do{var de=Z.lane&-536870913;if(de!==Z.lane?(et&de)===de:(ba&de)===de){var F=Z.revertLane;if(F===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),de===Vi&&(ae=!0);else if((ba&F)===F){Z=Z.next,F===Vi&&(ae=!0);continue}else de={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},E===null?(g=E=de,p=c):E=E.next=de,Qe.lanes|=F,Fa|=F;de=Z.action,Ti&&a(c,de),c=Z.hasEagerState?Z.eagerState:a(c,de)}else F={lane:de,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},E===null?(g=E=F,p=c):E=E.next=F,Qe.lanes|=de,Fa|=de;Z=Z.next}while(Z!==null&&Z!==n);if(E===null?p=c:E.next=g,!kn(c,e.memoizedState)&&(Zt=!0,ae&&(a=Pi,a!==null)))throw a;e.memoizedState=c,e.baseState=p,e.baseQueue=E,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function nc(e){var n=Ht(),a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var l=a.dispatch,r=a.pending,c=n.memoizedState;if(r!==null){a.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);kn(c,n.memoizedState)||(Zt=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,l]}function vp(e,n,a){var l=Qe,r=Ht(),c=at;if(c){if(a===void 0)throw Error(d(407));a=a()}else a=n();var p=!kn((ft||r).memoizedState,a);if(p&&(r.memoizedState=a,Zt=!0),r=r.queue,lc(_p.bind(null,l,r,e),[e]),r.getSnapshot!==n||p||Xt!==null&&Xt.memoizedState.tag&1){if(l.flags|=2048,al(9,{destroy:void 0},wp.bind(null,l,r,a,n),null),yt===null)throw Error(d(349));c||(ba&127)!==0||jp(l,n,a)}return a}function jp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Qe.updateQueue,n===null?(n=Ks(),Qe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wp(e,n,a,l){n.value=a,n.getSnapshot=l,Np(n)&&Sp(e)}function _p(e,n,a){return a(function(){Np(n)&&Sp(e)})}function Np(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Sp(e){var n=vi(e,2);n!==null&&_n(n,e,2)}function ac(e){var n=xn();if(typeof e=="function"){var a=e;if(e=a(),Ti){Ve(!0);try{a()}finally{Ve(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},n}function kp(e,n,a,l){return e.baseState=a,tc(e,ft,typeof l=="function"?l:ya)}function ab(e,n,a,l,r){if(Ws(e))throw Error(d(485));if(e=n.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};v.T!==null?a(!0):c.isTransition=!1,l(c),a=n.pending,a===null?(c.next=n.pending=c,Cp(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Cp(e,n){var a=n.action,l=n.payload,r=e.state;if(n.isTransition){var c=v.T,p={};v.T=p;try{var g=a(r,l),E=v.S;E!==null&&E(p,g),zp(e,n,g)}catch(Z){ic(e,n,Z)}finally{c!==null&&p.types!==null&&(c.types=p.types),v.T=c}}else try{c=a(r,l),zp(e,n,c)}catch(Z){ic(e,n,Z)}}function zp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Tp(e,n,l)},function(l){return ic(e,n,l)}):Tp(e,n,a)}function Tp(e,n,a){n.status="fulfilled",n.value=a,Ep(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Cp(e,a)))}function ic(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,Ep(n),n=n.next;while(n!==l)}e.action=null}function Ep(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Mp(e,n){return n}function Ap(e,n){if(at){var a=yt.formState;if(a!==null){e:{var l=Qe;if(at){if(wt){t:{for(var r=wt,c=Yn;r.nodeType!==8;){if(!c){r=null;break t}if(r=Xn(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){wt=Xn(r.nextSibling),l=r.data==="F!";break e}}qa(l)}l=!1}l&&(n=a[0])}}return a=xn(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mp,lastRenderedState:n},a.queue=l,a=Pp.bind(null,Qe,l),l.dispatch=a,l=ac(!1),c=dc.bind(null,Qe,!1,l.queue),l=xn(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,a=ab.bind(null,Qe,r,c,a),r.dispatch=a,l.memoizedState=e,[n,a,!1]}function Dp(e){var n=Ht();return Op(n,ft,e)}function Op(e,n,a){if(n=tc(e,n,Mp)[0],e=Js(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=ql(n)}catch(p){throw p===Wi?qs:p}else l=n;n=Ht();var r=n.queue,c=r.dispatch;return a!==n.memoizedState&&(Qe.flags|=2048,al(9,{destroy:void 0},ib.bind(null,r,a),null)),[l,c,e]}function ib(e,n){e.action=n}function Rp(e){var n=Ht(),a=ft;if(a!==null)return Op(n,a,e);Ht(),n=n.memoizedState,a=Ht();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function al(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=Qe.updateQueue,n===null&&(n=Ks(),Qe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function Up(){return Ht().memoizedState}function Vs(e,n,a,l){var r=xn();Qe.flags|=e,r.memoizedState=al(1|n,{destroy:void 0},a,l===void 0?null:l)}function Ps(e,n,a,l){var r=Ht();l=l===void 0?null:l;var c=r.memoizedState.inst;ft!==null&&l!==null&&Jr(l,ft.memoizedState.deps)?r.memoizedState=al(n,c,a,l):(Qe.flags|=e,r.memoizedState=al(1|n,c,a,l))}function Hp(e,n){Vs(8390656,8,e,n)}function lc(e,n){Ps(2048,8,e,n)}function lb(e){Qe.flags|=4;var n=Qe.updateQueue;if(n===null)n=Ks(),Qe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Lp(e){var n=Ht().memoizedState;return lb({ref:n,nextImpl:e}),function(){if((dt&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}function qp(e,n){return Ps(4,2,e,n)}function Bp(e,n){return Ps(4,4,e,n)}function $p(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gp(e,n,a){a=a!=null?a.concat([e]):null,Ps(4,4,$p.bind(null,n,e),a)}function sc(){}function Yp(e,n){var a=Ht();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Jr(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function Qp(e,n){var a=Ht();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Jr(n,l[1]))return l[0];if(l=e(),Ti){Ve(!0);try{e()}finally{Ve(!1)}}return a.memoizedState=[l,n],l}function oc(e,n,a){return a===void 0||(ba&1073741824)!==0&&(et&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Xm(),Qe.lanes|=e,Fa|=e,a)}function Xp(e,n,a,l){return kn(a,n)?a:el.current!==null?(e=oc(e,a,l),kn(e,n)||(Zt=!0),e):(ba&42)===0||(ba&1073741824)!==0&&(et&261930)===0?(Zt=!0,e.memoizedState=a):(e=Xm(),Qe.lanes|=e,Fa|=e,n)}function Zp(e,n,a,l,r){var c=L.p;L.p=c!==0&&8>c?c:8;var p=v.T,g={};v.T=g,dc(e,!1,n,a);try{var E=r(),Z=v.S;if(Z!==null&&Z(g,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var ae=eb(E,l);Bl(e,n,ae,An(e))}else Bl(e,n,l,An(e))}catch(de){Bl(e,n,{then:function(){},status:"rejected",reason:de},An())}finally{L.p=c,p!==null&&g.types!==null&&(p.types=g.types),v.T=p}}function sb(){}function rc(e,n,a,l){if(e.tag!==5)throw Error(d(476));var r=Kp(e).queue;Zp(e,r,n,z,a===null?sb:function(){return Fp(e),a(l)})}function Kp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Fp(e){var n=Kp(e);n.next===null&&(n=e.alternate.memoizedState),Bl(e,n.next.queue,{},An())}function cc(){return ln(as)}function Jp(){return Ht().memoizedState}function Vp(){return Ht().memoizedState}function ob(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=An();e=Ga(a);var l=Ya(n,e,a);l!==null&&(_n(l,n,a),Rl(l,n,a)),n={cache:Lr()},e.payload=n;return}n=n.return}}function rb(e,n,a){var l=An();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ws(e)?Wp(n,a):(a=Cr(e,n,a,l),a!==null&&(_n(a,e,l),Ip(a,n,l)))}function Pp(e,n,a){var l=An();Bl(e,n,a,l)}function Bl(e,n,a,l){var r={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ws(e))Wp(n,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,g=c(p,a);if(r.hasEagerState=!0,r.eagerState=g,kn(g,p))return As(e,n,r,0),yt===null&&Ms(),!1}catch{}finally{}if(a=Cr(e,n,r,l),a!==null)return _n(a,e,l),Ip(a,n,l),!0}return!1}function dc(e,n,a,l){if(l={lane:2,revertLane:Gc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ws(e)){if(n)throw Error(d(479))}else n=Cr(e,a,l,2),n!==null&&_n(n,e,2)}function Ws(e){var n=e.alternate;return e===Qe||n!==null&&n===Qe}function Wp(e,n){tl=Xs=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ip(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,ue(e,a)}}var $l={readContext:ln,use:Fs,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt};$l.useEffectEvent=Mt;var em={readContext:ln,use:Fs,useCallback:function(e,n){return xn().memoizedState=[e,n===void 0?null:n],e},useContext:ln,useEffect:Hp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Vs(4194308,4,$p.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Vs(4194308,4,e,n)},useInsertionEffect:function(e,n){Vs(4,2,e,n)},useMemo:function(e,n){var a=xn();n=n===void 0?null:n;var l=e();if(Ti){Ve(!0);try{e()}finally{Ve(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=xn();if(a!==void 0){var r=a(n);if(Ti){Ve(!0);try{a(n)}finally{Ve(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=rb.bind(null,Qe,e),[l.memoizedState,e]},useRef:function(e){var n=xn();return e={current:e},n.memoizedState=e},useState:function(e){e=ac(e);var n=e.queue,a=Pp.bind(null,Qe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:sc,useDeferredValue:function(e,n){var a=xn();return oc(a,e,n)},useTransition:function(){var e=ac(!1);return e=Zp.bind(null,Qe,e.queue,!0,!1),xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=Qe,r=xn();if(at){if(a===void 0)throw Error(d(407));a=a()}else{if(a=n(),yt===null)throw Error(d(349));(et&127)!==0||jp(l,n,a)}r.memoizedState=a;var c={value:a,getSnapshot:n};return r.queue=c,Hp(_p.bind(null,l,c,e),[e]),l.flags|=2048,al(9,{destroy:void 0},wp.bind(null,l,c,a,n),null),a},useId:function(){var e=xn(),n=yt.identifierPrefix;if(at){var a=ia,l=aa;a=(l&~(1<<32-st(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Zs++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=tb++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:cc,useFormState:Ap,useActionState:Ap,useOptimistic:function(e){var n=xn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=dc.bind(null,Qe,!0,a),a.dispatch=n,[e,n]},useMemoCache:ec,useCacheRefresh:function(){return xn().memoizedState=ob.bind(null,Qe)},useEffectEvent:function(e){var n=xn(),a={impl:e};return n.memoizedState=a,function(){if((dt&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},uc={readContext:ln,use:Fs,useCallback:Yp,useContext:ln,useEffect:lc,useImperativeHandle:Gp,useInsertionEffect:qp,useLayoutEffect:Bp,useMemo:Qp,useReducer:Js,useRef:Up,useState:function(){return Js(ya)},useDebugValue:sc,useDeferredValue:function(e,n){var a=Ht();return Xp(a,ft.memoizedState,e,n)},useTransition:function(){var e=Js(ya)[0],n=Ht().memoizedState;return[typeof e=="boolean"?e:ql(e),n]},useSyncExternalStore:vp,useId:Jp,useHostTransitionStatus:cc,useFormState:Dp,useActionState:Dp,useOptimistic:function(e,n){var a=Ht();return kp(a,ft,e,n)},useMemoCache:ec,useCacheRefresh:Vp};uc.useEffectEvent=Lp;var tm={readContext:ln,use:Fs,useCallback:Yp,useContext:ln,useEffect:lc,useImperativeHandle:Gp,useInsertionEffect:qp,useLayoutEffect:Bp,useMemo:Qp,useReducer:nc,useRef:Up,useState:function(){return nc(ya)},useDebugValue:sc,useDeferredValue:function(e,n){var a=Ht();return ft===null?oc(a,e,n):Xp(a,ft.memoizedState,e,n)},useTransition:function(){var e=nc(ya)[0],n=Ht().memoizedState;return[typeof e=="boolean"?e:ql(e),n]},useSyncExternalStore:vp,useId:Jp,useHostTransitionStatus:cc,useFormState:Rp,useActionState:Rp,useOptimistic:function(e,n){var a=Ht();return ft!==null?kp(a,ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ec,useCacheRefresh:Vp};tm.useEffectEvent=Lp;function pc(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var mc={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=An(),r=Ga(l);r.payload=n,a!=null&&(r.callback=a),n=Ya(e,r,l),n!==null&&(_n(n,e,l),Rl(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=An(),r=Ga(l);r.tag=1,r.payload=n,a!=null&&(r.callback=a),n=Ya(e,r,l),n!==null&&(_n(n,e,l),Rl(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=An(),l=Ga(a);l.tag=2,n!=null&&(l.callback=n),n=Ya(e,l,a),n!==null&&(_n(n,e,a),Rl(n,e,a))}};function nm(e,n,a,l,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,p):n.prototype&&n.prototype.isPureReactComponent?!Cl(a,l)||!Cl(r,c):!0}function am(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&mc.enqueueReplaceState(n,n.state,null)}function Ei(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function im(e){Es(e)}function lm(e){console.error(e)}function sm(e){Es(e)}function Is(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function om(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function hc(e,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Is(e,n)},a}function rm(e){return e=Ga(e),e.tag=3,e}function cm(e,n,a,l){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){om(n,a,l)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){om(n,a,l),typeof r!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function cb(e,n,a,l,r){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Ji(n,a,r,!0),a=zn.current,a!==null){switch(a.tag){case 31:case 13:return Qn===null?po():a.alternate===null&&At===0&&(At=3),a.flags&=-257,a.flags|=65536,a.lanes=r,l===Bs?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),qc(e,l,r)),!1;case 22:return a.flags|=65536,l===Bs?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),qc(e,l,r)),!1}throw Error(d(435,a.tag))}return qc(e,l,r),po(),!1}if(at)return n=zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==Dr&&(e=Error(d(422),{cause:l}),El(Bn(e,a)))):(l!==Dr&&(n=Error(d(423),{cause:l}),El(Bn(n,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Bn(l,a),r=hc(e.stateNode,l,r),Qr(e,r),At!==4&&(At=2)),!1;var c=Error(d(520),{cause:l});if(c=Bn(c,a),Jl===null?Jl=[c]:Jl.push(c),At!==4&&(At=2),n===null)return!0;l=Bn(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=hc(a.stateNode,l,e),Qr(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ja===null||!Ja.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=rm(r),cm(r,e,a,l),Qr(a,r),!1}a=a.return}while(a!==null);return!1}var fc=Error(d(461)),Zt=!1;function sn(e,n,a,l){n.child=e===null?mp(n,null,a,l):zi(n,e.child,a,l)}function dm(e,n,a,l,r){a=a.render;var c=n.ref;if("ref"in l){var p={};for(var g in l)g!=="ref"&&(p[g]=l[g])}else p=l;return Ni(n),l=Vr(e,n,a,p,c,r),g=Pr(),e!==null&&!Zt?(Wr(e,n,r),va(e,n,r)):(at&&g&&Mr(n),n.flags|=1,sn(e,n,l,r),n.child)}function um(e,n,a,l,r){if(e===null){var c=a.type;return typeof c=="function"&&!zr(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,pm(e,n,c,l,r)):(e=Os(a.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!_c(e,r)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:Cl,a(p,l)&&e.ref===n.ref)return va(e,n,r)}return n.flags|=1,e=ha(c,l),e.ref=n.ref,e.return=n,n.child=e}function pm(e,n,a,l,r){if(e!==null){var c=e.memoizedProps;if(Cl(c,l)&&e.ref===n.ref)if(Zt=!1,n.pendingProps=l=c,_c(e,r))(e.flags&131072)!==0&&(Zt=!0);else return n.lanes=e.lanes,va(e,n,r)}return xc(e,n,a,l,r)}function mm(e,n,a,l){var r=l.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~c}else l=0,n.child=null;return hm(e,n,c,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ls(n,c!==null?c.cachePool:null),c!==null?xp(n,c):Zr(),gp(n);else return l=n.lanes=536870912,hm(e,n,c!==null?c.baseLanes|a:a,a,l)}else c!==null?(Ls(n,c.cachePool),xp(n,c),Xa(),n.memoizedState=null):(e!==null&&Ls(n,null),Zr(),Xa());return sn(e,n,r,a),n.child}function Gl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function hm(e,n,a,l,r){var c=Br();return c=c===null?null:{parent:Qt._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Ls(n,null),Zr(),gp(n),e!==null&&Ji(e,n,l,!0),n.childLanes=r,null}function eo(e,n){return n=no({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function fm(e,n,a){return zi(n,e.child,null,a),e=eo(n,n.pendingProps),e.flags|=2,Tn(n),n.memoizedState=null,e}function db(e,n,a){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(at){if(l.mode==="hidden")return e=eo(n,l),n.lanes=536870912,Gl(null,e);if(Fr(n),(e=wt)?(e=Ch(e,Yn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:aa,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},a=Wu(e),a.return=n,n.child=a,an=n,wt=null)):e=null,e===null)throw qa(n);return n.lanes=536870912,null}return eo(n,l)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Fr(n),r)if(n.flags&256)n.flags&=-257,n=fm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(d(558));else if(Zt||Ji(e,n,a,!1),r=(a&e.childLanes)!==0,Zt||r){if(l=yt,l!==null&&(p=Ce(l,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,vi(e,p),_n(l,e,p),fc;po(),n=fm(e,n,a)}else e=c.treeContext,wt=Xn(p.nextSibling),an=n,at=!0,La=null,Yn=!1,e!==null&&tp(n,e),n=eo(n,l),n.flags|=4096;return n}return e=ha(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function to(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function xc(e,n,a,l,r){return Ni(n),a=Vr(e,n,a,l,void 0,r),l=Pr(),e!==null&&!Zt?(Wr(e,n,r),va(e,n,r)):(at&&l&&Mr(n),n.flags|=1,sn(e,n,a,r),n.child)}function xm(e,n,a,l,r,c){return Ni(n),n.updateQueue=null,a=yp(n,l,a,r),bp(e),l=Pr(),e!==null&&!Zt?(Wr(e,n,c),va(e,n,c)):(at&&l&&Mr(n),n.flags|=1,sn(e,n,a,c),n.child)}function gm(e,n,a,l,r){if(Ni(n),n.stateNode===null){var c=Xi,p=a.contextType;typeof p=="object"&&p!==null&&(c=ln(p)),c=new a(l,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=mc,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=l,c.state=n.memoizedState,c.refs={},Gr(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?ln(p):Xi,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(pc(n,a,p,l),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&mc.enqueueReplaceState(c,c.state,null),Hl(n,l,c,r),Ul(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){c=n.stateNode;var g=n.memoizedProps,E=Ei(a,g);c.props=E;var Z=c.context,ae=a.contextType;p=Xi,typeof ae=="object"&&ae!==null&&(p=ln(ae));var de=a.getDerivedStateFromProps;ae=typeof de=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,ae||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||Z!==p)&&am(n,c,l,p),$a=!1;var F=n.memoizedState;c.state=F,Hl(n,l,c,r),Ul(),Z=n.memoizedState,g||F!==Z||$a?(typeof de=="function"&&(pc(n,a,de,l),Z=n.memoizedState),(E=$a||nm(n,a,E,l,F,Z,p))?(ae||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=Z),c.props=l,c.state=Z,c.context=p,l=E):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{c=n.stateNode,Yr(e,n),p=n.memoizedProps,ae=Ei(a,p),c.props=ae,de=n.pendingProps,F=c.context,Z=a.contextType,E=Xi,typeof Z=="object"&&Z!==null&&(E=ln(Z)),g=a.getDerivedStateFromProps,(Z=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==de||F!==E)&&am(n,c,l,E),$a=!1,F=n.memoizedState,c.state=F,Hl(n,l,c,r),Ul();var V=n.memoizedState;p!==de||F!==V||$a||e!==null&&e.dependencies!==null&&Us(e.dependencies)?(typeof g=="function"&&(pc(n,a,g,l),V=n.memoizedState),(ae=$a||nm(n,a,ae,l,F,V,E)||e!==null&&e.dependencies!==null&&Us(e.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,V,E),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,V,E)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=V),c.props=l,c.state=V,c.context=E,l=ae):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(n.flags|=1024),l=!1)}return c=l,to(e,n),l=(n.flags&128)!==0,c||l?(c=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&l?(n.child=zi(n,e.child,null,r),n.child=zi(n,null,a,r)):sn(e,n,a,r),n.memoizedState=c.state,e=n.child):e=va(e,n,r),e}function bm(e,n,a,l){return wi(),n.flags|=256,sn(e,n,a,l),n.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:op()}}function yc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Mn),e}function ym(e,n,a){var l=n.pendingProps,r=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Ut.current&2)!==0),p&&(r=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(at){if(r?Qa(n):Xa(),(e=wt)?(e=Ch(e,Yn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:aa,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},a=Wu(e),a.return=n,n.child=a,an=n,wt=null)):e=null,e===null)throw qa(n);return td(e)?n.lanes=32:n.lanes=536870912,null}var g=l.children;return l=l.fallback,r?(Xa(),r=n.mode,g=no({mode:"hidden",children:g},r),l=ji(l,r,a,null),g.return=n,l.return=n,g.sibling=l,n.child=g,l=n.child,l.memoizedState=bc(a),l.childLanes=yc(e,p,a),n.memoizedState=gc,Gl(null,l)):(Qa(n),vc(n,g))}var E=e.memoizedState;if(E!==null&&(g=E.dehydrated,g!==null)){if(c)n.flags&256?(Qa(n),n.flags&=-257,n=jc(e,n,a)):n.memoizedState!==null?(Xa(),n.child=e.child,n.flags|=128,n=null):(Xa(),g=l.fallback,r=n.mode,l=no({mode:"visible",children:l.children},r),g=ji(g,r,a,null),g.flags|=2,l.return=n,g.return=n,l.sibling=g,n.child=l,zi(n,e.child,null,a),l=n.child,l.memoizedState=bc(a),l.childLanes=yc(e,p,a),n.memoizedState=gc,n=Gl(null,l));else if(Qa(n),td(g)){if(p=g.nextSibling&&g.nextSibling.dataset,p)var Z=p.dgst;p=Z,l=Error(d(419)),l.stack="",l.digest=p,El({value:l,source:null,stack:null}),n=jc(e,n,a)}else if(Zt||Ji(e,n,a,!1),p=(a&e.childLanes)!==0,Zt||p){if(p=yt,p!==null&&(l=Ce(p,a),l!==0&&l!==E.retryLane))throw E.retryLane=l,vi(e,l),_n(p,e,l),fc;ed(g)||po(),n=jc(e,n,a)}else ed(g)?(n.flags|=192,n.child=e.child,n=null):(e=E.treeContext,wt=Xn(g.nextSibling),an=n,at=!0,La=null,Yn=!1,e!==null&&tp(n,e),n=vc(n,l.children),n.flags|=4096);return n}return r?(Xa(),g=l.fallback,r=n.mode,E=e.child,Z=E.sibling,l=ha(E,{mode:"hidden",children:l.children}),l.subtreeFlags=E.subtreeFlags&65011712,Z!==null?g=ha(Z,g):(g=ji(g,r,a,null),g.flags|=2),g.return=n,l.return=n,l.sibling=g,n.child=l,Gl(null,l),l=n.child,g=e.child.memoizedState,g===null?g=bc(a):(r=g.cachePool,r!==null?(E=Qt._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=op(),g={baseLanes:g.baseLanes|a,cachePool:r}),l.memoizedState=g,l.childLanes=yc(e,p,a),n.memoizedState=gc,Gl(e.child,l)):(Qa(n),a=e.child,e=a.sibling,a=ha(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function vc(e,n){return n=no({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function no(e,n){return e=Cn(22,e,null,n),e.lanes=0,e}function jc(e,n,a){return zi(n,e.child,null,a),e=vc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function vm(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Ur(e.return,n,a)}function wc(e,n,a,l,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:r,treeForkCount:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=r,p.treeForkCount=c)}function jm(e,n,a){var l=n.pendingProps,r=l.revealOrder,c=l.tail;l=l.children;var p=Ut.current,g=(p&2)!==0;if(g?(p=p&1|2,n.flags|=128):p&=1,pe(Ut,p),sn(e,n,l,a),l=at?Tl:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vm(e,a,n);else if(e.tag===19)vm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=n.child,r=null;a!==null;)e=a.alternate,e!==null&&Qs(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=n.child,n.child=null):(r=a.sibling,a.sibling=null),wc(n,!1,r,a,c,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Qs(e)===null){n.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}wc(n,!0,a,null,c,l);break;case"together":wc(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function va(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ji(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(d(153));if(n.child!==null){for(e=n.child,a=ha(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ha(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function _c(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Us(e)))}function ub(e,n,a){switch(n.tag){case 3:R(n,n.stateNode.containerInfo),Ba(n,Qt,e.memoizedState.cache),wi();break;case 27:case 5:he(n);break;case 4:R(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Fr(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ym(e,n,a):(Qa(n),e=va(e,n,a),e!==null?e.sibling:null);Qa(n);break;case 19:var r=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Ji(e,n,a,!1),l=(a&n.childLanes)!==0),r){if(l)return jm(e,n,a);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pe(Ut,Ut.current),l)break;return null;case 22:return n.lanes=0,mm(e,n,a,n.pendingProps);case 24:Ba(n,Qt,e.memoizedState.cache)}return va(e,n,a)}function wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Zt=!0;else{if(!_c(e,a)&&(n.flags&128)===0)return Zt=!1,ub(e,n,a);Zt=(e.flags&131072)!==0}else Zt=!1,at&&(n.flags&1048576)!==0&&ep(n,Tl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=ki(n.elementType),n.type=e,typeof e=="function")zr(e)?(l=Ei(e,l),n.tag=1,n=gm(null,n,e,l,a)):(n.tag=0,n=xc(null,n,e,l,a));else{if(e!=null){var r=e.$$typeof;if(r===te){n.tag=11,n=dm(null,n,e,l,a);break e}else if(r===M){n.tag=14,n=um(null,n,e,l,a);break e}}throw n=$(e)||e,Error(d(306,n,""))}}return n;case 0:return xc(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,r=Ei(l,n.pendingProps),gm(e,n,l,r,a);case 3:e:{if(R(n,n.stateNode.containerInfo),e===null)throw Error(d(387));l=n.pendingProps;var c=n.memoizedState;r=c.element,Yr(e,n),Hl(n,l,null,a);var p=n.memoizedState;if(l=p.cache,Ba(n,Qt,l),l!==c.cache&&Hr(n,[Qt],a,!0),Ul(),l=p.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=bm(e,n,l,a);break e}else if(l!==r){r=Bn(Error(d(424)),n),El(r),n=bm(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(wt=Xn(e.firstChild),an=n,at=!0,La=null,Yn=!0,a=mp(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wi(),l===r){n=va(e,n,a);break e}sn(e,n,l,a)}n=n.child}return n;case 26:return to(e,n),e===null?(a=Dh(n.type,null,n.pendingProps,null))?n.memoizedState=a:at||(a=n.type,e=n.pendingProps,l=yo(Ne.current).createElement(a),l[Rt]=n,l[zt]=e,on(l,a,e),It(l),n.stateNode=l):n.memoizedState=Dh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return he(n),e===null&&at&&(l=n.stateNode=Eh(n.type,n.pendingProps,Ne.current),an=n,Yn=!0,r=wt,Ia(n.type)?(nd=r,wt=Xn(l.firstChild)):wt=r),sn(e,n,n.pendingProps.children,a),to(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&at&&((r=l=wt)&&(l=$b(l,n.type,n.pendingProps,Yn),l!==null?(n.stateNode=l,an=n,wt=Xn(l.firstChild),Yn=!1,r=!0):r=!1),r||qa(n)),he(n),r=n.type,c=n.pendingProps,p=e!==null?e.memoizedProps:null,l=c.children,Pc(r,c)?l=null:p!==null&&Pc(r,p)&&(n.flags|=32),n.memoizedState!==null&&(r=Vr(e,n,nb,null,null,a),as._currentValue=r),to(e,n),sn(e,n,l,a),n.child;case 6:return e===null&&at&&((e=a=wt)&&(a=Gb(a,n.pendingProps,Yn),a!==null?(n.stateNode=a,an=n,wt=null,e=!0):e=!1),e||qa(n)),null;case 13:return ym(e,n,a);case 4:return R(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=zi(n,null,l,a):sn(e,n,l,a),n.child;case 11:return dm(e,n,n.type,n.pendingProps,a);case 7:return sn(e,n,n.pendingProps,a),n.child;case 8:return sn(e,n,n.pendingProps.children,a),n.child;case 12:return sn(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Ba(n,n.type,l.value),sn(e,n,l.children,a),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,Ni(n),r=ln(r),l=l(r),n.flags|=1,sn(e,n,l,a),n.child;case 14:return um(e,n,n.type,n.pendingProps,a);case 15:return pm(e,n,n.type,n.pendingProps,a);case 19:return jm(e,n,a);case 31:return db(e,n,a);case 22:return mm(e,n,a,n.pendingProps);case 24:return Ni(n),l=ln(Qt),e===null?(r=Br(),r===null&&(r=yt,c=Lr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),n.memoizedState={parent:l,cache:r},Gr(n),Ba(n,Qt,r)):((e.lanes&a)!==0&&(Yr(e,n),Hl(n,null,null,a),Ul()),r=e.memoizedState,c=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),Ba(n,Qt,l)):(l=c.cache,Ba(n,Qt,l),l!==r.cache&&Hr(n,[Qt],a,!0))),sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function ja(e){e.flags|=4}function Nc(e,n,a,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Jm())e.flags|=8192;else throw Ci=Bs,$r}else e.flags&=-16777217}function _m(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lh(n))if(Jm())e.flags|=8192;else throw Ci=Bs,$r}function ao(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Me():536870912,e.lanes|=n,ol|=n)}function Yl(e,n){if(!at)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _t(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function pb(e,n,a){var l=n.pendingProps;switch(Ar(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(n),null;case 1:return _t(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),ga(Qt),fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fi(n)?ja(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Or())),_t(n),null;case 26:var r=n.type,c=n.memoizedState;return e===null?(ja(n),c!==null?(_t(n),_m(n,c)):(_t(n),Nc(n,r,null,l,a))):c?c!==e.memoizedState?(ja(n),_t(n),_m(n,c)):(_t(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&ja(n),_t(n),Nc(n,r,e,l,a)),null;case 27:if(Le(n),a=Ne.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ja(n);else{if(!l){if(n.stateNode===null)throw Error(d(166));return _t(n),null}e=ge.current,Fi(n)?np(n):(e=Eh(r,l,a),n.stateNode=e,ja(n))}return _t(n),null;case 5:if(Le(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ja(n);else{if(!l){if(n.stateNode===null)throw Error(d(166));return _t(n),null}if(c=ge.current,Fi(n))np(n);else{var p=yo(Ne.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?p.createElement("select",{is:l.is}):p.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?p.createElement(r,{is:l.is}):p.createElement(r)}}c[Rt]=n,c[zt]=l;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=c;e:switch(on(c,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ja(n)}}return _t(n),Nc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&ja(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(d(166));if(e=Ne.current,Fi(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,r=an,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[Rt]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||yh(e.nodeValue,a)),e||qa(n,!0)}else e=yo(e).createTextNode(l),e[Rt]=n,n.stateNode=e}return _t(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(l=Fi(n),a!==null){if(e===null){if(!l)throw Error(d(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Rt]=n}else wi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_t(n),e=!1}else a=Or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Tn(n),n):(Tn(n),null);if((n.flags&128)!==0)throw Error(d(558))}return _t(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Fi(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[Rt]=n}else wi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_t(n),r=!1}else r=Or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(Tn(n),n):(Tn(n),null)}return Tn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ao(n,n.updateQueue),_t(n),null);case 4:return fe(),e===null&&Zc(n.stateNode.containerInfo),_t(n),null;case 10:return ga(n.type),_t(n),null;case 19:if(U(Ut),l=n.memoizedState,l===null)return _t(n),null;if(r=(n.flags&128)!==0,c=l.rendering,c===null)if(r)Yl(l,!1);else{if(At!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=Qs(e),c!==null){for(n.flags|=128,Yl(l,!1),e=c.updateQueue,n.updateQueue=e,ao(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Pu(a,e),a=a.sibling;return pe(Ut,Ut.current&1|2),at&&fa(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&Ae()>ro&&(n.flags|=128,r=!0,Yl(l,!1),n.lanes=4194304)}else{if(!r)if(e=Qs(c),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,ao(n,e),Yl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!at)return _t(n),null}else 2*Ae()-l.renderingStartTime>ro&&a!==536870912&&(n.flags|=128,r=!0,Yl(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(e=l.last,e!==null?e.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ae(),e.sibling=null,a=Ut.current,pe(Ut,r?a&1|2:a&1),at&&fa(n,l.treeForkCount),e):(_t(n),null);case 22:case 23:return Tn(n),Kr(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(_t(n),n.subtreeFlags&6&&(n.flags|=8192)):_t(n),a=n.updateQueue,a!==null&&ao(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&U(Si),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ga(Qt),_t(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function mb(e,n){switch(Ar(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ga(Qt),fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 31:if(n.memoizedState!==null){if(Tn(n),n.alternate===null)throw Error(d(340));wi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Tn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(d(340));wi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(Ut),null;case 4:return fe(),null;case 10:return ga(n.type),null;case 22:case 23:return Tn(n),Kr(),e!==null&&U(Si),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ga(Qt),null;case 25:return null;default:return null}}function Nm(e,n){switch(Ar(n),n.tag){case 3:ga(Qt),fe();break;case 26:case 27:case 5:Le(n);break;case 4:fe();break;case 31:n.memoizedState!==null&&Tn(n);break;case 13:Tn(n);break;case 19:U(Ut);break;case 10:ga(n.type);break;case 22:case 23:Tn(n),Kr(),e!==null&&U(Si);break;case 24:ga(Qt)}}function Ql(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){l=void 0;var c=a.create,p=a.inst;l=c(),p.destroy=l}a=a.next}while(a!==r)}}catch(g){ht(n,n.return,g)}}function Za(e,n,a){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var p=l.inst,g=p.destroy;if(g!==void 0){p.destroy=void 0,r=n;var E=a,Z=g;try{Z()}catch(ae){ht(r,E,ae)}}}l=l.next}while(l!==c)}}catch(ae){ht(n,n.return,ae)}}function Sm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{fp(n,a)}catch(l){ht(e,e.return,l)}}}function km(e,n,a){a.props=Ei(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ht(e,n,l)}}function Xl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(r){ht(e,n,r)}}function la(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(r){ht(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){ht(e,n,r)}else a.current=null}function Cm(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(r){ht(e,e.return,r)}}function Sc(e,n,a){try{var l=e.stateNode;Rb(l,e.type,a,n),l[zt]=n}catch(r){ht(e,e.return,r)}}function zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cc(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=pa));else if(l!==4&&(l===27&&Ia(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Cc(e,n,a),e=e.sibling;e!==null;)Cc(e,n,a),e=e.sibling}function io(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&Ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(io(e,n,a),e=e.sibling;e!==null;)io(e,n,a),e=e.sibling}function Tm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);on(n,l,a),n[Rt]=e,n[zt]=a}catch(c){ht(e,e.return,c)}}var wa=!1,Kt=!1,zc=!1,Em=typeof WeakSet=="function"?WeakSet:Set,en=null;function hb(e,n){if(e=e.containerInfo,Jc=ko,e=Gu(e),jr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var p=0,g=-1,E=-1,Z=0,ae=0,de=e,F=null;t:for(;;){for(var V;de!==a||r!==0&&de.nodeType!==3||(g=p+r),de!==c||l!==0&&de.nodeType!==3||(E=p+l),de.nodeType===3&&(p+=de.nodeValue.length),(V=de.firstChild)!==null;)F=de,de=V;for(;;){if(de===e)break t;if(F===a&&++Z===r&&(g=p),F===c&&++ae===l&&(E=p),(V=de.nextSibling)!==null)break;de=F,F=de.parentNode}de=V}a=g===-1||E===-1?null:{start:g,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:e,selectionRange:a},ko=!1,en=n;en!==null;)if(n=en,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,en=e;else for(;en!==null;){switch(n=en,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,r=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var Ee=Ei(a.type,r);e=l.getSnapshotBeforeUpdate(Ee,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(He){ht(a,a.return,He)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ic(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ic(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=n.sibling,e!==null){e.return=n.return,en=e;break}en=n.return}}function Mm(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Na(e,a),l&4&&Ql(5,a);break;case 1:if(Na(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){ht(a,a.return,p)}else{var r=Ei(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){ht(a,a.return,p)}}l&64&&Sm(a),l&512&&Xl(a,a.return);break;case 3:if(Na(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fp(e,n)}catch(p){ht(a,a.return,p)}}break;case 27:n===null&&l&4&&Tm(a);case 26:case 5:Na(e,a),n===null&&l&4&&Cm(a),l&512&&Xl(a,a.return);break;case 12:Na(e,a);break;case 31:Na(e,a),l&4&&Om(e,a);break;case 13:Na(e,a),l&4&&Rm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_b.bind(null,a),Yb(e,a))));break;case 22:if(l=a.memoizedState!==null||wa,!l){n=n!==null&&n.memoizedState!==null||Kt,r=wa;var c=Kt;wa=l,(Kt=n)&&!c?Sa(e,a,(a.subtreeFlags&8772)!==0):Na(e,a),wa=r,Kt=c}break;case 30:break;default:Na(e,a)}}function Am(e){var n=e.alternate;n!==null&&(e.alternate=null,Am(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&gn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var St=null,yn=!1;function _a(e,n,a){for(a=a.child;a!==null;)Dm(e,n,a),a=a.sibling}function Dm(e,n,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Be,a)}catch{}switch(a.tag){case 26:Kt||la(a,n),_a(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Kt||la(a,n);var l=St,r=yn;Ia(a.type)&&(St=a.stateNode,yn=!1),_a(e,n,a),es(a.stateNode),St=l,yn=r;break;case 5:Kt||la(a,n);case 6:if(l=St,r=yn,St=null,_a(e,n,a),St=l,yn=r,St!==null)if(yn)try{(St.nodeType===9?St.body:St.nodeName==="HTML"?St.ownerDocument.body:St).removeChild(a.stateNode)}catch(c){ht(a,n,c)}else try{St.removeChild(a.stateNode)}catch(c){ht(a,n,c)}break;case 18:St!==null&&(yn?(e=St,Sh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),fl(e)):Sh(St,a.stateNode));break;case 4:l=St,r=yn,St=a.stateNode.containerInfo,yn=!0,_a(e,n,a),St=l,yn=r;break;case 0:case 11:case 14:case 15:Za(2,a,n),Kt||Za(4,a,n),_a(e,n,a);break;case 1:Kt||(la(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&km(a,n,l)),_a(e,n,a);break;case 21:_a(e,n,a);break;case 22:Kt=(l=Kt)||a.memoizedState!==null,_a(e,n,a),Kt=l;break;default:_a(e,n,a)}}function Om(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{fl(e)}catch(a){ht(n,n.return,a)}}}function Rm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fl(e)}catch(a){ht(n,n.return,a)}}function fb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Em),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Em),n;default:throw Error(d(435,e.tag))}}function lo(e,n){var a=fb(e);n.forEach(function(l){if(!a.has(l)){a.add(l);var r=Nb.bind(null,e,l);l.then(r,r)}})}function vn(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var r=a[l],c=e,p=n,g=p;e:for(;g!==null;){switch(g.tag){case 27:if(Ia(g.type)){St=g.stateNode,yn=!1;break e}break;case 5:St=g.stateNode,yn=!1;break e;case 3:case 4:St=g.stateNode.containerInfo,yn=!0;break e}g=g.return}if(St===null)throw Error(d(160));Dm(c,p,r),St=null,yn=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Um(n,e),n=n.sibling}var Pn=null;function Um(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vn(n,e),jn(e),l&4&&(Za(3,e,e.return),Ql(3,e),Za(5,e,e.return));break;case 1:vn(n,e),jn(e),l&512&&(Kt||a===null||la(a,a.return)),l&64&&wa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var r=Pn;if(vn(n,e),jn(e),l&512&&(Kt||a===null||la(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[it]||c[Rt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),on(c,l,a),c[Rt]=e,It(c),l=c;break e;case"link":var p=Uh("link","href",r).get(l+(a.href||""));if(p){for(var g=0;g<p.length;g++)if(c=p[g],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(g,1);break t}}c=r.createElement(l),on(c,l,a),r.head.appendChild(c);break;case"meta":if(p=Uh("meta","content",r).get(l+(a.content||""))){for(g=0;g<p.length;g++)if(c=p[g],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(g,1);break t}}c=r.createElement(l),on(c,l,a),r.head.appendChild(c);break;default:throw Error(d(468,l))}c[Rt]=e,It(c),l=c}e.stateNode=l}else Hh(r,e.type,e.stateNode);else e.stateNode=Rh(r,l,e.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?Hh(r,e.type,e.stateNode):Rh(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Sc(e,e.memoizedProps,a.memoizedProps)}break;case 27:vn(n,e),jn(e),l&512&&(Kt||a===null||la(a,a.return)),a!==null&&l&4&&Sc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(vn(n,e),jn(e),l&512&&(Kt||a===null||la(a,a.return)),e.flags&32){r=e.stateNode;try{Li(r,"")}catch(Ee){ht(e,e.return,Ee)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Sc(e,r,a!==null?a.memoizedProps:r)),l&1024&&(zc=!0);break;case 6:if(vn(n,e),jn(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Ee){ht(e,e.return,Ee)}}break;case 3:if(wo=null,r=Pn,Pn=vo(n.containerInfo),vn(n,e),Pn=r,jn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{fl(n.containerInfo)}catch(Ee){ht(e,e.return,Ee)}zc&&(zc=!1,Hm(e));break;case 4:l=Pn,Pn=vo(e.stateNode.containerInfo),vn(n,e),jn(e),Pn=l;break;case 12:vn(n,e),jn(e);break;case 31:vn(n,e),jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,lo(e,l)));break;case 13:vn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(oo=Ae()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,lo(e,l)));break;case 22:r=e.memoizedState!==null;var E=a!==null&&a.memoizedState!==null,Z=wa,ae=Kt;if(wa=Z||r,Kt=ae||E,vn(n,e),Kt=ae,wa=Z,jn(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(a===null||E||wa||Kt||Mi(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){E=a=n;try{if(c=E.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{g=E.stateNode;var de=E.memoizedProps.style,F=de!=null&&de.hasOwnProperty("display")?de.display:null;g.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(Ee){ht(E,E.return,Ee)}}}else if(n.tag===6){if(a===null){E=n;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(Ee){ht(E,E.return,Ee)}}}else if(n.tag===18){if(a===null){E=n;try{var V=E.stateNode;r?kh(V,!0):kh(E.stateNode,!1)}catch(Ee){ht(E,E.return,Ee)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,lo(e,a))));break;case 19:vn(n,e),jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,lo(e,l)));break;case 30:break;case 21:break;default:vn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(zm(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var r=a.stateNode,c=kc(e);io(e,c,r);break;case 5:var p=a.stateNode;a.flags&32&&(Li(p,""),a.flags&=-33);var g=kc(e);io(e,g,p);break;case 3:case 4:var E=a.stateNode.containerInfo,Z=kc(e);Cc(e,Z,E);break;default:throw Error(d(161))}}catch(ae){ht(e,e.return,ae)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Hm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mm(e,n.alternate,n),n=n.sibling}function Mi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Za(4,n,n.return),Mi(n);break;case 1:la(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),Mi(n);break;case 27:es(n.stateNode);case 26:case 5:la(n,n.return),Mi(n);break;case 22:n.memoizedState===null&&Mi(n);break;case 30:Mi(n);break;default:Mi(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,c=n,p=c.flags;switch(c.tag){case 0:case 11:case 15:Sa(r,c,a),Ql(4,c);break;case 1:if(Sa(r,c,a),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Z){ht(l,l.return,Z)}if(l=c,r=l.updateQueue,r!==null){var g=l.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)hp(E[r],g)}catch(Z){ht(l,l.return,Z)}}a&&p&64&&Sm(c),Xl(c,c.return);break;case 27:Tm(c);case 26:case 5:Sa(r,c,a),a&&l===null&&p&4&&Cm(c),Xl(c,c.return);break;case 12:Sa(r,c,a);break;case 31:Sa(r,c,a),a&&p&4&&Om(r,c);break;case 13:Sa(r,c,a),a&&p&4&&Rm(r,c);break;case 22:c.memoizedState===null&&Sa(r,c,a),Xl(c,c.return);break;case 30:break;default:Sa(r,c,a)}n=n.sibling}}function Tc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ml(a))}function Ec(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ml(e))}function Wn(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lm(e,n,a,l),n=n.sibling}function Lm(e,n,a,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Wn(e,n,a,l),r&2048&&Ql(9,n);break;case 1:Wn(e,n,a,l);break;case 3:Wn(e,n,a,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ml(e)));break;case 12:if(r&2048){Wn(e,n,a,l),e=n.stateNode;try{var c=n.memoizedProps,p=c.id,g=c.onPostCommit;typeof g=="function"&&g(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){ht(n,n.return,E)}}else Wn(e,n,a,l);break;case 31:Wn(e,n,a,l);break;case 13:Wn(e,n,a,l);break;case 23:break;case 22:c=n.stateNode,p=n.alternate,n.memoizedState!==null?c._visibility&2?Wn(e,n,a,l):Zl(e,n):c._visibility&2?Wn(e,n,a,l):(c._visibility|=2,il(e,n,a,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&Tc(p,n);break;case 24:Wn(e,n,a,l),r&2048&&Ec(n.alternate,n);break;default:Wn(e,n,a,l)}}function il(e,n,a,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,p=n,g=a,E=l,Z=p.flags;switch(p.tag){case 0:case 11:case 15:il(c,p,g,E,r),Ql(8,p);break;case 23:break;case 22:var ae=p.stateNode;p.memoizedState!==null?ae._visibility&2?il(c,p,g,E,r):Zl(c,p):(ae._visibility|=2,il(c,p,g,E,r)),r&&Z&2048&&Tc(p.alternate,p);break;case 24:il(c,p,g,E,r),r&&Z&2048&&Ec(p.alternate,p);break;default:il(c,p,g,E,r)}n=n.sibling}}function Zl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,r=l.flags;switch(l.tag){case 22:Zl(a,l),r&2048&&Tc(l.alternate,l);break;case 24:Zl(a,l),r&2048&&Ec(l.alternate,l);break;default:Zl(a,l)}n=n.sibling}}var Kl=8192;function ll(e,n,a){if(e.subtreeFlags&Kl)for(e=e.child;e!==null;)qm(e,n,a),e=e.sibling}function qm(e,n,a){switch(e.tag){case 26:ll(e,n,a),e.flags&Kl&&e.memoizedState!==null&&ty(a,Pn,e.memoizedState,e.memoizedProps);break;case 5:ll(e,n,a);break;case 3:case 4:var l=Pn;Pn=vo(e.stateNode.containerInfo),ll(e,n,a),Pn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Kl,Kl=16777216,ll(e,n,a),Kl=l):ll(e,n,a));break;default:ll(e,n,a)}}function Bm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];en=l,Gm(l,e)}Bm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$m(e),e=e.sibling}function $m(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Za(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,so(e)):Fl(e);break;default:Fl(e)}}function so(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];en=l,Gm(l,e)}Bm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Za(8,n,n.return),so(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,so(n));break;default:so(n)}e=e.sibling}}function Gm(e,n){for(;en!==null;){var a=en;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ml(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,en=l;else e:for(a=e;en!==null;){l=en;var r=l.sibling,c=l.return;if(Am(l),l===a){en=null;break e}if(r!==null){r.return=c,en=r;break e}en=c}}}var xb={getCacheForType:function(e){var n=ln(Qt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return ln(Qt).controller.signal}},gb=typeof WeakMap=="function"?WeakMap:Map,dt=0,yt=null,Pe=null,et=0,mt=0,En=null,Ka=!1,sl=!1,Mc=!1,ka=0,At=0,Fa=0,Ai=0,Ac=0,Mn=0,ol=0,Jl=null,wn=null,Dc=!1,oo=0,Ym=0,ro=1/0,co=null,Ja=null,Ft=0,Va=null,rl=null,Ca=0,Oc=0,Rc=null,Qm=null,Vl=0,Uc=null;function An(){return(dt&2)!==0&&et!==0?et&-et:v.T!==null?Gc():ca()}function Xm(){if(Mn===0)if((et&536870912)===0||at){var e=hn;hn<<=1,(hn&3932160)===0&&(hn=262144),Mn=e}else Mn=536870912;return e=zn.current,e!==null&&(e.flags|=32),Mn}function _n(e,n,a){(e===yt&&(mt===2||mt===9)||e.cancelPendingCommit!==null)&&(cl(e,0),Pa(e,et,Mn,!1)),Fe(e,a),((dt&2)===0||e!==yt)&&(e===yt&&((dt&2)===0&&(Ai|=a),At===4&&Pa(e,et,Mn,!1)),sa(e))}function Zm(e,n,a){if((dt&6)!==0)throw Error(d(327));var l=!a&&(n&127)===0&&(n&e.expiredLanes)===0||oe(e,n),r=l?vb(e,n):Lc(e,n,!0),c=l;do{if(r===0){sl&&!l&&Pa(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!bb(a)){r=Lc(e,n,!1),c=!1;continue}if(r===2){if(c=n,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var g=e;r=Jl;var E=g.current.memoizedState.isDehydrated;if(E&&(cl(g,p).flags|=256),p=Lc(g,p,!1),p!==2){if(Mc&&!E){g.errorRecoveryDisabledLanes|=c,Ai|=c,r=4;break e}c=wn,wn=r,c!==null&&(wn===null?wn=c:wn.push.apply(wn,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){cl(e,0),Pa(e,n,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:Pa(l,n,Mn,!Ka);break e;case 2:wn=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(r=oo+300-Ae(),10<r)){if(Pa(l,n,Mn,!Ka),H(l,0,!0)!==0)break e;Ca=n,l.timeoutHandle=_h(Km.bind(null,l,a,wn,co,Dc,n,Mn,Ai,ol,Ka,c,"Throttled",-0,0),r);break e}Km(l,a,wn,co,Dc,n,Mn,Ai,ol,Ka,c,null,-0,0)}}break}while(!0);sa(e)}function Km(e,n,a,l,r,c,p,g,E,Z,ae,de,F,V){if(e.timeoutHandle=-1,de=n.subtreeFlags,de&8192||(de&16785408)===16785408){de={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},qm(n,c,de);var Ee=(c&62914560)===c?oo-Ae():(c&4194048)===c?Ym-Ae():0;if(Ee=ny(de,Ee),Ee!==null){Ca=c,e.cancelPendingCommit=Ee(th.bind(null,e,n,c,a,l,r,p,g,E,ae,de,null,F,V)),Pa(e,c,p,!Z);return}}th(e,n,c,a,l,r,p,g,E)}function bb(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var r=a[l],c=r.getSnapshot;r=r.value;try{if(!kn(c(),r))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(e,n,a,l){n&=~Ac,n&=~Ai,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var c=31-st(r),p=1<<c;l[c]=-1,r&=~p}a!==0&&ce(e,a,n)}function uo(){return(dt&6)===0?(Pl(0),!1):!0}function Hc(){if(Pe!==null){if(mt===0)var e=Pe.return;else e=Pe,xa=_i=null,Ir(e),Ii=null,Dl=0,e=Pe;for(;e!==null;)Nm(e.alternate,e),e=e.return;Pe=null}}function cl(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Lb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ca=0,Hc(),yt=e,Pe=a=ha(e.current,null),et=n,mt=0,En=null,Ka=!1,sl=oe(e,n),Mc=!1,ol=Mn=Ac=Ai=Fa=At=0,wn=Jl=null,Dc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-st(l),c=1<<r;n|=e[r],l&=~c}return ka=n,Ms(),a}function Fm(e,n){Qe=null,v.H=$l,n===Wi||n===qs?(n=dp(),mt=3):n===$r?(n=dp(),mt=4):mt=n===fc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,En=n,Pe===null&&(At=1,Is(e,Bn(n,e.current)))}function Jm(){var e=zn.current;return e===null?!0:(et&4194048)===et?Qn===null:(et&62914560)===et||(et&536870912)!==0?e===Qn:!1}function Vm(){var e=v.H;return v.H=$l,e===null?$l:e}function Pm(){var e=v.A;return v.A=xb,e}function po(){At=4,Ka||(et&4194048)!==et&&zn.current!==null||(sl=!0),(Fa&134217727)===0&&(Ai&134217727)===0||yt===null||Pa(yt,et,Mn,!1)}function Lc(e,n,a){var l=dt;dt|=2;var r=Vm(),c=Pm();(yt!==e||et!==n)&&(co=null,cl(e,n)),n=!1;var p=At;e:do try{if(mt!==0&&Pe!==null){var g=Pe,E=En;switch(mt){case 8:Hc(),p=6;break e;case 3:case 2:case 9:case 6:zn.current===null&&(n=!0);var Z=mt;if(mt=0,En=null,dl(e,g,E,Z),a&&sl){p=0;break e}break;default:Z=mt,mt=0,En=null,dl(e,g,E,Z)}}yb(),p=At;break}catch(ae){Fm(e,ae)}while(!0);return n&&e.shellSuspendCounter++,xa=_i=null,dt=l,v.H=r,v.A=c,Pe===null&&(yt=null,et=0,Ms()),p}function yb(){for(;Pe!==null;)Wm(Pe)}function vb(e,n){var a=dt;dt|=2;var l=Vm(),r=Pm();yt!==e||et!==n?(co=null,ro=Ae()+500,cl(e,n)):sl=oe(e,n);e:do try{if(mt!==0&&Pe!==null){n=Pe;var c=En;t:switch(mt){case 1:mt=0,En=null,dl(e,n,c,1);break;case 2:case 9:if(rp(c)){mt=0,En=null,Im(n);break}n=function(){mt!==2&&mt!==9||yt!==e||(mt=7),sa(e)},c.then(n,n);break e;case 3:mt=7;break e;case 4:mt=5;break e;case 7:rp(c)?(mt=0,En=null,Im(n)):(mt=0,En=null,dl(e,n,c,7));break;case 5:var p=null;switch(Pe.tag){case 26:p=Pe.memoizedState;case 5:case 27:var g=Pe;if(p?Lh(p):g.stateNode.complete){mt=0,En=null;var E=g.sibling;if(E!==null)Pe=E;else{var Z=g.return;Z!==null?(Pe=Z,mo(Z)):Pe=null}break t}}mt=0,En=null,dl(e,n,c,5);break;case 6:mt=0,En=null,dl(e,n,c,6);break;case 8:Hc(),At=6;break e;default:throw Error(d(462))}}jb();break}catch(ae){Fm(e,ae)}while(!0);return xa=_i=null,v.H=l,v.A=r,dt=a,Pe!==null?0:(yt=null,et=0,Ms(),At)}function jb(){for(;Pe!==null&&!ke();)Wm(Pe)}function Wm(e){var n=wm(e.alternate,e,ka);e.memoizedProps=e.pendingProps,n===null?mo(e):Pe=n}function Im(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=xm(a,n,n.pendingProps,n.type,void 0,et);break;case 11:n=xm(a,n,n.pendingProps,n.type.render,n.ref,et);break;case 5:Ir(n);default:Nm(a,n),n=Pe=Pu(n,ka),n=wm(a,n,ka)}e.memoizedProps=e.pendingProps,n===null?mo(e):Pe=n}function dl(e,n,a,l){xa=_i=null,Ir(n),Ii=null,Dl=0;var r=n.return;try{if(cb(e,r,n,a,et)){At=1,Is(e,Bn(a,e.current)),Pe=null;return}}catch(c){if(r!==null)throw Pe=r,c;At=1,Is(e,Bn(a,e.current)),Pe=null;return}n.flags&32768?(at||l===1?e=!0:sl||(et&536870912)!==0?e=!1:(Ka=e=!0,(l===2||l===9||l===3||l===6)&&(l=zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),eh(n,e)):mo(n)}function mo(e){var n=e;do{if((n.flags&32768)!==0){eh(n,Ka);return}e=n.return;var a=pb(n.alternate,n,ka);if(a!==null){Pe=a;return}if(n=n.sibling,n!==null){Pe=n;return}Pe=n=e}while(n!==null);At===0&&(At=5)}function eh(e,n){do{var a=mb(e.alternate,e);if(a!==null){a.flags&=32767,Pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Pe=e;return}Pe=e=a}while(e!==null);At=6,Pe=null}function th(e,n,a,l,r,c,p,g,E){e.cancelPendingCommit=null;do ho();while(Ft!==0);if((dt&6)!==0)throw Error(d(327));if(n!==null){if(n===e.current)throw Error(d(177));if(c=n.lanes|n.childLanes,c|=kr,j(e,a,c,p,g,E),e===yt&&(Pe=yt=null,et=0),rl=n,Va=e,Ca=a,Oc=c,Rc=r,Qm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sb(J,function(){return sh(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=v.T,v.T=null,r=L.p,L.p=2,p=dt,dt|=4;try{hb(e,n,a)}finally{dt=p,L.p=r,v.T=l}}Ft=1,nh(),ah(),ih()}}function nh(){if(Ft===1){Ft=0;var e=Va,n=rl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var l=L.p;L.p=2;var r=dt;dt|=4;try{Um(n,e);var c=Vc,p=Gu(e.containerInfo),g=c.focusedElem,E=c.selectionRange;if(p!==g&&g&&g.ownerDocument&&$u(g.ownerDocument.documentElement,g)){if(E!==null&&jr(g)){var Z=E.start,ae=E.end;if(ae===void 0&&(ae=Z),"selectionStart"in g)g.selectionStart=Z,g.selectionEnd=Math.min(ae,g.value.length);else{var de=g.ownerDocument||document,F=de&&de.defaultView||window;if(F.getSelection){var V=F.getSelection(),Ee=g.textContent.length,He=Math.min(E.start,Ee),gt=E.end===void 0?He:Math.min(E.end,Ee);!V.extend&&He>gt&&(p=gt,gt=He,He=p);var B=Bu(g,He),D=Bu(g,gt);if(B&&D&&(V.rangeCount!==1||V.anchorNode!==B.node||V.anchorOffset!==B.offset||V.focusNode!==D.node||V.focusOffset!==D.offset)){var X=de.createRange();X.setStart(B.node,B.offset),V.removeAllRanges(),He>gt?(V.addRange(X),V.extend(D.node,D.offset)):(X.setEnd(D.node,D.offset),V.addRange(X))}}}}for(de=[],V=g;V=V.parentNode;)V.nodeType===1&&de.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<de.length;g++){var re=de[g];re.element.scrollLeft=re.left,re.element.scrollTop=re.top}}ko=!!Jc,Vc=Jc=null}finally{dt=r,L.p=l,v.T=a}}e.current=n,Ft=2}}function ah(){if(Ft===2){Ft=0;var e=Va,n=rl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var l=L.p;L.p=2;var r=dt;dt|=4;try{Mm(e,n.alternate,n)}finally{dt=r,L.p=l,v.T=a}}Ft=3}}function ih(){if(Ft===4||Ft===3){Ft=0,Sn();var e=Va,n=rl,a=Ca,l=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ft=5:(Ft=0,rl=Va=null,lh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Ja=null),Un(a),n=n.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Be,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=v.T,r=L.p,L.p=2,v.T=null;try{for(var c=e.onRecoverableError,p=0;p<l.length;p++){var g=l[p];c(g.value,{componentStack:g.stack})}}finally{v.T=n,L.p=r}}(Ca&3)!==0&&ho(),sa(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===Uc?Vl++:(Vl=0,Uc=e):Vl=0,Pl(0)}}function lh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ml(n)))}function ho(){return nh(),ah(),ih(),sh()}function sh(){if(Ft!==5)return!1;var e=Va,n=Oc;Oc=0;var a=Un(Ca),l=v.T,r=L.p;try{L.p=32>a?32:a,v.T=null,a=Rc,Rc=null;var c=Va,p=Ca;if(Ft=0,rl=Va=null,Ca=0,(dt&6)!==0)throw Error(d(331));var g=dt;if(dt|=4,$m(c.current),Lm(c,c.current,p,a),dt=g,Pl(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Be,c)}catch{}return!0}finally{L.p=r,v.T=l,lh(e,n)}}function oh(e,n,a){n=Bn(a,n),n=hc(e.stateNode,n,2),e=Ya(e,n,2),e!==null&&(Fe(e,2),sa(e))}function ht(e,n,a){if(e.tag===3)oh(e,e,a);else for(;n!==null;){if(n.tag===3){oh(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ja===null||!Ja.has(l))){e=Bn(a,e),a=rm(2),l=Ya(n,a,2),l!==null&&(cm(a,l,n,e),Fe(l,2),sa(l));break}}n=n.return}}function qc(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new gb;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(a)||(Mc=!0,r.add(a),e=wb.bind(null,e,n,a),n.then(e,e))}function wb(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,yt===e&&(et&a)===a&&(At===4||At===3&&(et&62914560)===et&&300>Ae()-oo?(dt&2)===0&&cl(e,0):Ac|=a,ol===et&&(ol=0)),sa(e)}function rh(e,n){n===0&&(n=Me()),e=vi(e,n),e!==null&&(Fe(e,n),sa(e))}function _b(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),rh(e,a)}function Nb(e,n){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(n),rh(e,a)}function Sb(e,n){return $t(e,n)}var fo=null,ul=null,Bc=!1,xo=!1,$c=!1,Wa=0;function sa(e){e!==ul&&e.next===null&&(ul===null?fo=ul=e:ul=ul.next=e),xo=!0,Bc||(Bc=!0,Cb())}function Pl(e,n){if(!$c&&xo){$c=!0;do for(var a=!1,l=fo;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var p=l.suspendedLanes,g=l.pingedLanes;c=(1<<31-st(42|e)+1)-1,c&=r&~(p&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,ph(l,c))}else c=et,c=H(l,l===yt?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||oe(l,c)||(a=!0,ph(l,c));l=l.next}while(a);$c=!1}}function kb(){ch()}function ch(){xo=Bc=!1;var e=0;Wa!==0&&Hb()&&(e=Wa);for(var n=Ae(),a=null,l=fo;l!==null;){var r=l.next,c=dh(l,n);c===0?(l.next=null,a===null?fo=r:a.next=r,r===null&&(ul=a)):(a=l,(e!==0||(c&3)!==0)&&(xo=!0)),l=r}Ft!==0&&Ft!==5||Pl(e),Wa!==0&&(Wa=0)}function dh(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-st(c),g=1<<p,E=r[p];E===-1?((g&a)===0||(g&l)!==0)&&(r[p]=ee(g,n)):E<=n&&(e.expiredLanes|=g),c&=~g}if(n=yt,a=et,a=H(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(mt===2||mt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ot(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||oe(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&Ot(l),Un(a)){case 2:case 8:a=Wt;break;case 32:a=J;break;case 268435456:a=Se;break;default:a=J}return l=uh.bind(null,e),a=$t(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&Ot(l),e.callbackPriority=2,e.callbackNode=null,2}function uh(e,n){if(Ft!==0&&Ft!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ho()&&e.callbackNode!==a)return null;var l=et;return l=H(e,e===yt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zm(e,l,n),dh(e,Ae()),e.callbackNode!=null&&e.callbackNode===a?uh.bind(null,e):null)}function ph(e,n){if(ho())return null;Zm(e,n,!0)}function Cb(){qb(function(){(dt&6)!==0?$t(pn,kb):ch()})}function Gc(){if(Wa===0){var e=Vi;e===0&&(e=Gt,Gt<<=1,(Gt&261888)===0&&(Gt=256)),Wa=e}return Wa}function mh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_s(""+e)}function hh(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function zb(e,n,a,l,r){if(n==="submit"&&a&&a.stateNode===r){var c=mh((r[zt]||null).action),p=l.submitter;p&&(n=(n=p[zt]||null)?mh(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var g=new Cs("action","action",null,l,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Wa!==0){var E=p?hh(r,p):new FormData(r);rc(a,{pending:!0,data:E,method:r.method,action:c},null,E)}}else typeof c=="function"&&(g.preventDefault(),E=p?hh(r,p):new FormData(r),rc(a,{pending:!0,data:E,method:r.method,action:c},c,E))},currentTarget:r}]})}}for(var Yc=0;Yc<Sr.length;Yc++){var Qc=Sr[Yc],Tb=Qc.toLowerCase(),Eb=Qc[0].toUpperCase()+Qc.slice(1);Vn(Tb,"on"+Eb)}Vn(Xu,"onAnimationEnd"),Vn(Zu,"onAnimationIteration"),Vn(Ku,"onAnimationStart"),Vn("dblclick","onDoubleClick"),Vn("focusin","onFocus"),Vn("focusout","onBlur"),Vn(Zg,"onTransitionRun"),Vn(Kg,"onTransitionStart"),Vn(Fg,"onTransitionCancel"),Vn(Fu,"onTransitionEnd"),Ui("onMouseEnter",["mouseout","mouseover"]),Ui("onMouseLeave",["mouseout","mouseover"]),Ui("onPointerEnter",["pointerout","pointerover"]),Ui("onPointerLeave",["pointerout","pointerover"]),xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xi("onBeforeInput",["compositionend","keypress","textInput","paste"]),xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function fh(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],r=l.event;l=l.listeners;e:{var c=void 0;if(n)for(var p=l.length-1;0<=p;p--){var g=l[p],E=g.instance,Z=g.currentTarget;if(g=g.listener,E!==c&&r.isPropagationStopped())break e;c=g,r.currentTarget=Z;try{c(r)}catch(ae){Es(ae)}r.currentTarget=null,c=E}else for(p=0;p<l.length;p++){if(g=l[p],E=g.instance,Z=g.currentTarget,g=g.listener,E!==c&&r.isPropagationStopped())break e;c=g,r.currentTarget=Z;try{c(r)}catch(ae){Es(ae)}r.currentTarget=null,c=E}}}}function We(e,n){var a=n[N];a===void 0&&(a=n[N]=new Set);var l=e+"__bubble";a.has(l)||(xh(n,e,2,!1),a.add(l))}function Xc(e,n,a){var l=0;n&&(l|=4),xh(a,e,l,n)}var go="_reactListening"+Math.random().toString(36).slice(2);function Zc(e){if(!e[go]){e[go]=!0,cu.forEach(function(a){a!=="selectionchange"&&(Mb.has(a)||Xc(a,!1,e),Xc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[go]||(n[go]=!0,Xc("selectionchange",!1,n))}}function xh(e,n,a,l){switch(Xh(n)){case 2:var r=ly;break;case 8:r=sy;break;default:r=od}a=r.bind(null,n,a,e),r=void 0,!pr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,a,{capture:!0,passive:r}):e.addEventListener(n,a,!0):r!==void 0?e.addEventListener(n,a,{passive:r}):e.addEventListener(n,a,!1)}function Kc(e,n,a,l,r){var c=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var g=l.stateNode.containerInfo;if(g===r)break;if(p===4)for(p=l.return;p!==null;){var E=p.tag;if((E===3||E===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;g!==null;){if(p=Yt(g),p===null)return;if(E=p.tag,E===5||E===6||E===26||E===27){l=c=p;continue e}g=g.parentNode}}l=l.return}ju(function(){var Z=c,ae=dr(a),de=[];e:{var F=Ju.get(e);if(F!==void 0){var V=Cs,Ee=e;switch(e){case"keypress":if(Ss(a)===0)break e;case"keydown":case"keyup":V=Ng;break;case"focusin":Ee="focus",V=xr;break;case"focusout":Ee="blur",V=xr;break;case"beforeblur":case"afterblur":V=xr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Cg;break;case Xu:case Zu:case Ku:V=fg;break;case Fu:V=Tg;break;case"scroll":case"scrollend":V=dg;break;case"wheel":V=Mg;break;case"copy":case"cut":case"paste":V=gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=ku;break;case"toggle":case"beforetoggle":V=Dg}var He=(n&4)!==0,gt=!He&&(e==="scroll"||e==="scrollend"),B=He?F!==null?F+"Capture":null:F;He=[];for(var D=Z,X;D!==null;){var re=D;if(X=re.stateNode,re=re.tag,re!==5&&re!==26&&re!==27||X===null||B===null||(re=vl(D,B),re!=null&&He.push(Il(D,re,X))),gt)break;D=D.return}0<He.length&&(F=new V(F,Ee,null,a,ae),de.push({event:F,listeners:He}))}}if((n&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",F&&a!==cr&&(Ee=a.relatedTarget||a.fromElement)&&(Yt(Ee)||Ee[Oa]))break e;if((V||F)&&(F=ae.window===ae?ae:(F=ae.ownerDocument)?F.defaultView||F.parentWindow:window,V?(Ee=a.relatedTarget||a.toElement,V=Z,Ee=Ee?Yt(Ee):null,Ee!==null&&(gt=m(Ee),He=Ee.tag,Ee!==gt||He!==5&&He!==27&&He!==6)&&(Ee=null)):(V=null,Ee=Z),V!==Ee)){if(He=Nu,re="onMouseLeave",B="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(He=ku,re="onPointerLeave",B="onPointerEnter",D="pointer"),gt=V==null?F:da(V),X=Ee==null?F:da(Ee),F=new He(re,D+"leave",V,a,ae),F.target=gt,F.relatedTarget=X,re=null,Yt(ae)===Z&&(He=new He(B,D+"enter",Ee,a,ae),He.target=X,He.relatedTarget=gt,re=He),gt=re,V&&Ee)t:{for(He=Ab,B=V,D=Ee,X=0,re=B;re;re=He(re))X++;re=0;for(var Ue=D;Ue;Ue=He(Ue))re++;for(;0<X-re;)B=He(B),X--;for(;0<re-X;)D=He(D),re--;for(;X--;){if(B===D||D!==null&&B===D.alternate){He=B;break t}B=He(B),D=He(D)}He=null}else He=null;V!==null&&gh(de,F,V,He,!1),Ee!==null&&gt!==null&&gh(de,gt,Ee,He,!0)}}e:{if(F=Z?da(Z):window,V=F.nodeName&&F.nodeName.toLowerCase(),V==="select"||V==="input"&&F.type==="file")var ot=Ou;else if(Au(F))if(Ru)ot=Yg;else{ot=$g;var Oe=Bg}else V=F.nodeName,!V||V.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?Z&&rr(Z.elementType)&&(ot=Ou):ot=Gg;if(ot&&(ot=ot(e,Z))){Du(de,ot,a,ae);break e}Oe&&Oe(e,F,Z),e==="focusout"&&Z&&F.type==="number"&&Z.memoizedProps.value!=null&&or(F,"number",F.value)}switch(Oe=Z?da(Z):window,e){case"focusin":(Au(Oe)||Oe.contentEditable==="true")&&(Gi=Oe,wr=Z,zl=null);break;case"focusout":zl=wr=Gi=null;break;case"mousedown":_r=!0;break;case"contextmenu":case"mouseup":case"dragend":_r=!1,Yu(de,a,ae);break;case"selectionchange":if(Xg)break;case"keydown":case"keyup":Yu(de,a,ae)}var Xe;if(br)e:{switch(e){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else $i?Eu(e,a)&&(tt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(Cu&&a.locale!=="ko"&&($i||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&$i&&(Xe=wu()):(Ua=ae,mr="value"in Ua?Ua.value:Ua.textContent,$i=!0)),Oe=bo(Z,tt),0<Oe.length&&(tt=new Su(tt,e,null,a,ae),de.push({event:tt,listeners:Oe}),Xe?tt.data=Xe:(Xe=Mu(a),Xe!==null&&(tt.data=Xe)))),(Xe=Rg?Ug(e,a):Hg(e,a))&&(tt=bo(Z,"onBeforeInput"),0<tt.length&&(Oe=new Su("onBeforeInput","beforeinput",null,a,ae),de.push({event:Oe,listeners:tt}),Oe.data=Xe)),zb(de,e,Z,a,ae)}fh(de,n)})}function Il(e,n,a){return{instance:e,listener:n,currentTarget:a}}function bo(e,n){for(var a=n+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=vl(e,a),r!=null&&l.unshift(Il(e,r,c)),r=vl(e,n),r!=null&&l.push(Il(e,r,c))),e.tag===3)return l;e=e.return}return[]}function Ab(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gh(e,n,a,l,r){for(var c=n._reactName,p=[];a!==null&&a!==l;){var g=a,E=g.alternate,Z=g.stateNode;if(g=g.tag,E!==null&&E===l)break;g!==5&&g!==26&&g!==27||Z===null||(E=Z,r?(Z=vl(a,c),Z!=null&&p.unshift(Il(a,Z,E))):r||(Z=vl(a,c),Z!=null&&p.push(Il(a,Z,E)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var Db=/\r\n?/g,Ob=/\u0000|\uFFFD/g;function bh(e){return(typeof e=="string"?e:""+e).replace(Db,`
`).replace(Ob,"")}function yh(e,n){return n=bh(n),bh(e)===n}function xt(e,n,a,l,r,c){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Li(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Li(e,""+l);break;case"className":js(e,"class",l);break;case"tabIndex":js(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":js(e,a,l);break;case"style":yu(e,l,c);break;case"data":if(n!=="object"){js(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=_s(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&xt(e,n,"name",r.name,r,null),xt(e,n,"formEncType",r.formEncType,r,null),xt(e,n,"formMethod",r.formMethod,r,null),xt(e,n,"formTarget",r.formTarget,r,null)):(xt(e,n,"encType",r.encType,r,null),xt(e,n,"method",r.method,r,null),xt(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=_s(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=pa);break;case"onScroll":l!=null&&We("scroll",e);break;case"onScrollEnd":l!=null&&We("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=_s(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":We("beforetoggle",e),We("toggle",e),vs(e,"popover",l);break;case"xlinkActuate":ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ua(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ua(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ua(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ua(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":vs(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=rg.get(a)||a,vs(e,a,l))}}function Fc(e,n,a,l,r,c){switch(a){case"style":yu(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Li(e,l):(typeof l=="number"||typeof l=="bigint")&&Li(e,""+l);break;case"onScroll":l!=null&&We("scroll",e);break;case"onScrollEnd":l!=null&&We("scrollend",e);break;case"onClick":l!=null&&(e.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!du.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),n=a.slice(2,r?a.length-7:void 0),c=e[zt]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,r);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):vs(e,a,l)}}}function on(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":We("error",e),We("load",e);var l=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:xt(e,n,c,p,a,null)}}r&&xt(e,n,"srcSet",a.srcSet,a,null),l&&xt(e,n,"src",a.src,a,null);return;case"input":We("invalid",e);var g=c=p=r=null,E=null,Z=null;for(l in a)if(a.hasOwnProperty(l)){var ae=a[l];if(ae!=null)switch(l){case"name":r=ae;break;case"type":p=ae;break;case"checked":E=ae;break;case"defaultChecked":Z=ae;break;case"value":c=ae;break;case"defaultValue":g=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(d(137,n));break;default:xt(e,n,l,ae,a,null)}}fu(e,c,g,E,Z,p,r,!1);return;case"select":We("invalid",e),l=p=c=null;for(r in a)if(a.hasOwnProperty(r)&&(g=a[r],g!=null))switch(r){case"value":c=g;break;case"defaultValue":p=g;break;case"multiple":l=g;default:xt(e,n,r,g,a,null)}n=c,a=p,e.multiple=!!l,n!=null?Hi(e,!!l,n,!1):a!=null&&Hi(e,!!l,a,!0);return;case"textarea":We("invalid",e),c=r=l=null;for(p in a)if(a.hasOwnProperty(p)&&(g=a[p],g!=null))switch(p){case"value":l=g;break;case"defaultValue":r=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(91));break;default:xt(e,n,p,g,a,null)}gu(e,l,r,c);return;case"option":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:xt(e,n,E,l,a,null)}return;case"dialog":We("beforetoggle",e),We("toggle",e),We("cancel",e),We("close",e);break;case"iframe":case"object":We("load",e);break;case"video":case"audio":for(l=0;l<Wl.length;l++)We(Wl[l],e);break;case"image":We("error",e),We("load",e);break;case"details":We("toggle",e);break;case"embed":case"source":case"link":We("error",e),We("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(l=a[Z],l!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:xt(e,n,Z,l,a,null)}return;default:if(rr(n)){for(ae in a)a.hasOwnProperty(ae)&&(l=a[ae],l!==void 0&&Fc(e,n,ae,l,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!=null&&xt(e,n,g,l,a,null))}function Rb(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,g=null,E=null,Z=null,ae=null;for(V in a){var de=a[V];if(a.hasOwnProperty(V)&&de!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":E=de;default:l.hasOwnProperty(V)||xt(e,n,V,null,l,de)}}for(var F in l){var V=l[F];if(de=a[F],l.hasOwnProperty(F)&&(V!=null||de!=null))switch(F){case"type":c=V;break;case"name":r=V;break;case"checked":Z=V;break;case"defaultChecked":ae=V;break;case"value":p=V;break;case"defaultValue":g=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(d(137,n));break;default:V!==de&&xt(e,n,F,V,l,de)}}sr(e,p,g,E,Z,ae,c,r);return;case"select":V=p=g=F=null;for(c in a)if(E=a[c],a.hasOwnProperty(c)&&E!=null)switch(c){case"value":break;case"multiple":V=E;default:l.hasOwnProperty(c)||xt(e,n,c,null,l,E)}for(r in l)if(c=l[r],E=a[r],l.hasOwnProperty(r)&&(c!=null||E!=null))switch(r){case"value":F=c;break;case"defaultValue":g=c;break;case"multiple":p=c;default:c!==E&&xt(e,n,r,c,l,E)}n=g,a=p,l=V,F!=null?Hi(e,!!a,F,!1):!!l!=!!a&&(n!=null?Hi(e,!!a,n,!0):Hi(e,!!a,a?[]:"",!1));return;case"textarea":V=F=null;for(g in a)if(r=a[g],a.hasOwnProperty(g)&&r!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:xt(e,n,g,null,l,r)}for(p in l)if(r=l[p],c=a[p],l.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":F=r;break;case"defaultValue":V=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&xt(e,n,p,r,l,c)}xu(e,F,V);return;case"option":for(var Ee in a)if(F=a[Ee],a.hasOwnProperty(Ee)&&F!=null&&!l.hasOwnProperty(Ee))switch(Ee){case"selected":e.selected=!1;break;default:xt(e,n,Ee,null,l,F)}for(E in l)if(F=l[E],V=a[E],l.hasOwnProperty(E)&&F!==V&&(F!=null||V!=null))switch(E){case"selected":e.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:xt(e,n,E,F,l,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var He in a)F=a[He],a.hasOwnProperty(He)&&F!=null&&!l.hasOwnProperty(He)&&xt(e,n,He,null,l,F);for(Z in l)if(F=l[Z],V=a[Z],l.hasOwnProperty(Z)&&F!==V&&(F!=null||V!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(d(137,n));break;default:xt(e,n,Z,F,l,V)}return;default:if(rr(n)){for(var gt in a)F=a[gt],a.hasOwnProperty(gt)&&F!==void 0&&!l.hasOwnProperty(gt)&&Fc(e,n,gt,void 0,l,F);for(ae in l)F=l[ae],V=a[ae],!l.hasOwnProperty(ae)||F===V||F===void 0&&V===void 0||Fc(e,n,ae,F,l,V);return}}for(var B in a)F=a[B],a.hasOwnProperty(B)&&F!=null&&!l.hasOwnProperty(B)&&xt(e,n,B,null,l,F);for(de in l)F=l[de],V=a[de],!l.hasOwnProperty(de)||F===V||F==null&&V==null||xt(e,n,de,F,l,V)}function vh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ub(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var r=a[l],c=r.transferSize,p=r.initiatorType,g=r.duration;if(c&&g&&vh(p)){for(p=0,g=r.responseEnd,l+=1;l<a.length;l++){var E=a[l],Z=E.startTime;if(Z>g)break;var ae=E.transferSize,de=E.initiatorType;ae&&vh(de)&&(E=E.responseEnd,p+=ae*(E<g?1:(g-Z)/(E-Z)))}if(--l,n+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jc=null,Vc=null;function yo(e){return e.nodeType===9?e:e.ownerDocument}function jh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Pc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wc=null;function Hb(){var e=window.event;return e&&e.type==="popstate"?e===Wc?!1:(Wc=e,!0):(Wc=null,!1)}var _h=typeof setTimeout=="function"?setTimeout:void 0,Lb=typeof clearTimeout=="function"?clearTimeout:void 0,Nh=typeof Promise=="function"?Promise:void 0,qb=typeof queueMicrotask=="function"?queueMicrotask:typeof Nh<"u"?function(e){return Nh.resolve(null).then(e).catch(Bb)}:_h;function Bb(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function Sh(e,n){var a=n,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(r),fl(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")es(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,es(a);for(var c=a.firstChild;c;){var p=c.nextSibling,g=c.nodeName;c[it]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&es(e.ownerDocument.body);a=r}while(a);fl(n)}function kh(e,n){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Ic(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ic(a),gn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $b(e,n,a,l){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[it])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Xn(e.nextSibling),e===null)break}return null}function Gb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Xn(e.nextSibling),e===null))return null;return e}function Ch(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Xn(e.nextSibling),e===null))return null;return e}function ed(e){return e.data==="$?"||e.data==="$~"}function td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Yb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var nd=null;function zh(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Xn(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Th(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Eh(e,n,a){switch(n=yo(a),e){case"html":if(e=n.documentElement,!e)throw Error(d(452));return e;case"head":if(e=n.head,!e)throw Error(d(453));return e;case"body":if(e=n.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function es(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);gn(e)}var Zn=new Map,Mh=new Set;function vo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var za=L.d;L.d={f:Qb,r:Xb,D:Zb,C:Kb,L:Fb,m:Jb,X:Pb,S:Vb,M:Wb};function Qb(){var e=za.f(),n=uo();return e||n}function Xb(e){var n=na(e);n!==null&&n.tag===5&&n.type==="form"?Fp(n):za.r(e)}var pl=typeof document>"u"?null:document;function Ah(e,n,a){var l=pl;if(l&&typeof n=="string"&&n){var r=Ln(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Mh.has(r)||(Mh.add(r),e={rel:e,crossOrigin:a,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),on(n,"link",e),It(n),l.head.appendChild(n)))}}function Zb(e){za.D(e),Ah("dns-prefetch",e,null)}function Kb(e,n){za.C(e,n),Ah("preconnect",e,n)}function Fb(e,n,a){za.L(e,n,a);var l=pl;if(l&&e&&n){var r='link[rel="preload"][as="'+Ln(n)+'"]';n==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Ln(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Ln(a.imageSizes)+'"]')):r+='[href="'+Ln(e)+'"]';var c=r;switch(n){case"style":c=ml(e);break;case"script":c=hl(e)}Zn.has(c)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Zn.set(c,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(ts(c))||n==="script"&&l.querySelector(ns(c))||(n=l.createElement("link"),on(n,"link",e),It(n),l.head.appendChild(n)))}}function Jb(e,n){za.m(e,n);var a=pl;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+Ln(l)+'"][href="'+Ln(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=hl(e)}if(!Zn.has(c)&&(e=S({rel:"modulepreload",href:e},n),Zn.set(c,e),a.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ns(c)))return}l=a.createElement("link"),on(l,"link",e),It(l),a.head.appendChild(l)}}}function Vb(e,n,a){za.S(e,n,a);var l=pl;if(l&&e){var r=Ra(l).hoistableStyles,c=ml(e);n=n||"default";var p=r.get(c);if(!p){var g={loading:0,preload:null};if(p=l.querySelector(ts(c)))g.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Zn.get(c))&&ad(e,a);var E=p=l.createElement("link");It(E),on(E,"link",e),E._p=new Promise(function(Z,ae){E.onload=Z,E.onerror=ae}),E.addEventListener("load",function(){g.loading|=1}),E.addEventListener("error",function(){g.loading|=2}),g.loading|=4,jo(p,n,l)}p={type:"stylesheet",instance:p,count:1,state:g},r.set(c,p)}}}function Pb(e,n){za.X(e,n);var a=pl;if(a&&e){var l=Ra(a).hoistableScripts,r=hl(e),c=l.get(r);c||(c=a.querySelector(ns(r)),c||(e=S({src:e,async:!0},n),(n=Zn.get(r))&&id(e,n),c=a.createElement("script"),It(c),on(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Wb(e,n){za.M(e,n);var a=pl;if(a&&e){var l=Ra(a).hoistableScripts,r=hl(e),c=l.get(r);c||(c=a.querySelector(ns(r)),c||(e=S({src:e,async:!0,type:"module"},n),(n=Zn.get(r))&&id(e,n),c=a.createElement("script"),It(c),on(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Dh(e,n,a,l){var r=(r=Ne.current)?vo(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ml(a.href),a=Ra(r).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ml(a.href);var c=Ra(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(ts(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Zn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Zn.set(e,a),c||Ib(r,e,a,p.state))),n&&l===null)throw Error(d(528,""));return p}if(n&&l!==null)throw Error(d(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hl(a),a=Ra(r).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ml(e){return'href="'+Ln(e)+'"'}function ts(e){return'link[rel="stylesheet"]['+e+"]"}function Oh(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Ib(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),on(n,"link",a),It(n),e.head.appendChild(n))}function hl(e){return'[src="'+Ln(e)+'"]'}function ns(e){return"script[async]"+e}function Rh(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Ln(a.href)+'"]');if(l)return n.instance=l,It(l),l;var r=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),It(l),on(l,"style",r),jo(l,a.precedence,e),n.instance=l;case"stylesheet":r=ml(a.href);var c=e.querySelector(ts(r));if(c)return n.state.loading|=4,n.instance=c,It(c),c;l=Oh(a),(r=Zn.get(r))&&ad(l,r),c=(e.ownerDocument||e).createElement("link"),It(c);var p=c;return p._p=new Promise(function(g,E){p.onload=g,p.onerror=E}),on(c,"link",l),n.state.loading|=4,jo(c,a.precedence,e),n.instance=c;case"script":return c=hl(a.src),(r=e.querySelector(ns(c)))?(n.instance=r,It(r),r):(l=a,(r=Zn.get(c))&&(l=S({},a),id(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),It(r),on(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,jo(l,a.precedence,e));return n.instance}function jo(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,p=0;p<l.length;p++){var g=l[p];if(g.dataset.precedence===n)c=g;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ad(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function id(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var wo=null;function Uh(e,n,a){if(wo===null){var l=new Map,r=wo=new Map;r.set(a,l)}else r=wo,l=r.get(a),l||(l=new Map,r.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var c=a[r];if(!(c[it]||c[Rt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=e+p;var g=l.get(p);g?g.push(c):l.set(p,[c])}}return l}function Hh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ey(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Lh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ty(e,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=ml(l.href),c=n.querySelector(ts(r));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=_o.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,It(c);return}c=n.ownerDocument||n,l=Oh(l),(r=Zn.get(r))&&ad(l,r),c=c.createElement("link"),It(c);var p=c;p._p=new Promise(function(g,E){p.onload=g,p.onerror=E}),on(c,"link",l),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_o.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ld=0;function ny(e,n){return e.stylesheets&&e.count===0&&So(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&So(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&ld===0&&(ld=62500*Ub());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&So(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>ld?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function _o(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)So(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var No=null;function So(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,No=new Map,n.forEach(ay,e),No=null,_o.call(e))}function ay(e,n){if(!(n.state.loading&4)){var a=No.get(e);if(a)var l=a.get(null);else{a=new Map,No.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),l=p)}l&&a.set(null,l)}r=n.instance,p=r.getAttribute("data-precedence"),c=a.get(p)||l,c===l&&a.set(null,r),a.set(p,r),this.count++,l=_o.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var as={$$typeof:O,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function iy(e,n,a,l,r,c,p,g,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function qh(e,n,a,l,r,c,p,g,E,Z,ae,de){return e=new iy(e,n,a,p,E,Z,ae,de,g),n=1,c===!0&&(n|=24),c=Cn(3,null,null,n),e.current=c,c.stateNode=e,n=Lr(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:n},Gr(c),e}function Bh(e){return e?(e=Xi,e):Xi}function $h(e,n,a,l,r,c){r=Bh(r),l.context===null?l.context=r:l.pendingContext=r,l=Ga(n),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=Ya(e,l,n),a!==null&&(_n(a,e,n),Rl(a,e,n))}function Gh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function sd(e,n){Gh(e,n),(e=e.alternate)&&Gh(e,n)}function Yh(e){if(e.tag===13||e.tag===31){var n=vi(e,67108864);n!==null&&_n(n,e,67108864),sd(e,67108864)}}function Qh(e){if(e.tag===13||e.tag===31){var n=An();n=jt(n);var a=vi(e,n);a!==null&&_n(a,e,n),sd(e,n)}}var ko=!0;function ly(e,n,a,l){var r=v.T;v.T=null;var c=L.p;try{L.p=2,od(e,n,a,l)}finally{L.p=c,v.T=r}}function sy(e,n,a,l){var r=v.T;v.T=null;var c=L.p;try{L.p=8,od(e,n,a,l)}finally{L.p=c,v.T=r}}function od(e,n,a,l){if(ko){var r=rd(l);if(r===null)Kc(e,n,l,Co,a),Zh(e,l);else if(ry(r,e,n,a,l))l.stopPropagation();else if(Zh(e,l),n&4&&-1<oy.indexOf(e)){for(;r!==null;){var c=na(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=fn(c.pendingLanes);if(p!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;p;){var E=1<<31-st(p);g.entanglements[1]|=E,p&=~E}sa(c),(dt&6)===0&&(ro=Ae()+500,Pl(0))}}break;case 31:case 13:g=vi(c,2),g!==null&&_n(g,c,2),uo(),sd(c,2)}if(c=rd(l),c===null&&Kc(e,n,l,Co,a),c===r)break;r=c}r!==null&&l.stopPropagation()}else Kc(e,n,l,null,a)}}function rd(e){return e=dr(e),cd(e)}var Co=null;function cd(e){if(Co=null,e=Yt(e),e!==null){var n=m(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=k(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Co=e,null}function Xh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(un()){case pn:return 2;case Wt:return 8;case J:case De:return 32;case Se:return 268435456;default:return 32}default:return 32}}var dd=!1,ei=null,ti=null,ni=null,is=new Map,ls=new Map,ai=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zh(e,n){switch(e){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":is.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(n.pointerId)}}function ss(e,n,a,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},n!==null&&(n=na(n),n!==null&&Yh(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function ry(e,n,a,l,r){switch(n){case"focusin":return ei=ss(ei,e,n,a,l,r),!0;case"dragenter":return ti=ss(ti,e,n,a,l,r),!0;case"mouseover":return ni=ss(ni,e,n,a,l,r),!0;case"pointerover":var c=r.pointerId;return is.set(c,ss(is.get(c)||null,e,n,a,l,r)),!0;case"gotpointercapture":return c=r.pointerId,ls.set(c,ss(ls.get(c)||null,e,n,a,l,r)),!0}return!1}function Kh(e){var n=Yt(e.target);if(n!==null){var a=m(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Nt(e.priority,function(){Qh(a)});return}}else if(n===31){if(n=k(a),n!==null){e.blockedOn=n,Nt(e.priority,function(){Qh(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=rd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);cr=l,a.target.dispatchEvent(l),cr=null}else return n=na(a),n!==null&&Yh(n),e.blockedOn=a,!1;n.shift()}return!0}function Fh(e,n,a){zo(e)&&a.delete(n)}function cy(){dd=!1,ei!==null&&zo(ei)&&(ei=null),ti!==null&&zo(ti)&&(ti=null),ni!==null&&zo(ni)&&(ni=null),is.forEach(Fh),ls.forEach(Fh)}function To(e,n){e.blockedOn===n&&(e.blockedOn=null,dd||(dd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,cy)))}var Eo=null;function Jh(e){Eo!==e&&(Eo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Eo===e&&(Eo=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(cd(l||a)===null)continue;break}var c=na(a);c!==null&&(e.splice(n,3),n-=3,rc(c,{pending:!0,data:r,method:a.method,action:l},l,r))}}))}function fl(e){function n(E){return To(E,e)}ei!==null&&To(ei,e),ti!==null&&To(ti,e),ni!==null&&To(ni,e),is.forEach(n),ls.forEach(n);for(var a=0;a<ai.length;a++){var l=ai[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ai.length&&(a=ai[0],a.blockedOn===null);)Kh(a),a.blockedOn===null&&ai.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var r=a[l],c=a[l+1],p=r[zt]||null;if(typeof c=="function")p||Jh(a);else if(p){var g=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[zt]||null)g=p.formAction;else if(cd(r)!==null)continue}else g=p.action;typeof g=="function"?a[l+1]=g:(a.splice(l,3),l-=3),Jh(a)}}}function Vh(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function ud(e){this._internalRoot=e}Mo.prototype.render=ud.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(d(409));var a=n.current,l=An();$h(a,l,e,n,null,null)},Mo.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$h(e.current,2,null,e,null,null),uo(),n[Oa]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var n=ca();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ai.length&&n!==0&&n<ai[a].priority;a++);ai.splice(a,0,e),a===0&&Kh(e)}};var Ph=i.version;if(Ph!=="19.2.6")throw Error(d(527,Ph,"19.2.6"));L.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=y(n),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var dy={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{Be=Ao.inject(dy),Ye=Ao}catch{}}return rs.createRoot=function(e,n){if(!u(e))throw Error(d(299));var a=!1,l="",r=im,c=lm,p=sm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=qh(e,1,!1,null,null,a,l,null,r,c,p,Vh),e[Oa]=n.current,Zc(e),new ud(n)},rs.hydrateRoot=function(e,n,a){if(!u(e))throw Error(d(299));var l=!1,r="",c=im,p=lm,g=sm,E=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&(E=a.formState)),n=qh(e,1,!0,n,a??null,l,r,E,c,p,g,Vh),n.context=Bh(null),a=n.current,l=An(),l=jt(l),r=Ga(l),r.callback=null,Ya(a,r,l),a=l,n.current.lanes=a,Fe(n,a),sa(n),e[Oa]=n.current,Zc(e),new Mo(n)},rs.version="19.2.6",rs}var rf;function _y(){if(rf)return hd.exports;rf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),hd.exports=wy(),hd.exports}var Ny=_y(),fx=hx();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},fs.apply(this,arguments)}var ci;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(ci||(ci={}));const cf="popstate";function Sy(s){s===void 0&&(s={});function i(u,m){let{pathname:h="/",search:k="",hash:b=""}=Ri(u.location.hash.substr(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Rd("",{pathname:h,search:k,hash:b},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function o(u,m){let h=u.document.querySelector("base"),k="";if(h&&h.getAttribute("href")){let b=u.location.href,y=b.indexOf("#");k=y===-1?b:b.slice(0,y)}return k+"#"+(typeof m=="string"?m:Zo(m))}function d(u,m){nr(u.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(m)+")")}return Cy(i,o,d,s)}function Lt(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function nr(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ky(){return Math.random().toString(36).substr(2,8)}function df(s,i){return{usr:s.state,key:s.key,idx:i}}function Rd(s,i,o,d){return o===void 0&&(o=null),fs({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof i=="string"?Ri(i):i,{state:o,key:i&&i.key||d||ky()})}function Zo(s){let{pathname:i="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function Ri(s){let i={};if(s){let o=s.indexOf("#");o>=0&&(i.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(i.search=s.substr(d),s=s.substr(0,d)),s&&(i.pathname=s)}return i}function Cy(s,i,o,d){d===void 0&&(d={});let{window:u=document.defaultView,v5Compat:m=!1}=d,h=u.history,k=ci.Pop,b=null,y=w();y==null&&(y=0,h.replaceState(fs({},h.state,{idx:y}),""));function w(){return(h.state||{idx:null}).idx}function S(){k=ci.Pop;let A=w(),Q=A==null?null:A-y;y=A,b&&b({action:k,location:Y.location,delta:Q})}function _(A,Q){k=ci.Push;let q=Rd(Y.location,A,Q);o&&o(q,A),y=w()+1;let O=df(q,y),te=Y.createHref(q);try{h.pushState(O,"",te)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;u.location.assign(te)}m&&b&&b({action:k,location:Y.location,delta:1})}function G(A,Q){k=ci.Replace;let q=Rd(Y.location,A,Q);o&&o(q,A),y=w();let O=df(q,y),te=Y.createHref(q);h.replaceState(O,"",te),m&&b&&b({action:k,location:Y.location,delta:0})}function I(A){let Q=u.location.origin!=="null"?u.location.origin:u.location.href,q=typeof A=="string"?A:Zo(A);return q=q.replace(/ $/,"%20"),Lt(Q,"No window.location.(origin|href) available to create URL for href: "+q),new URL(q,Q)}let Y={get action(){return k},get location(){return s(u,h)},listen(A){if(b)throw new Error("A history only accepts one active listener");return u.addEventListener(cf,S),b=A,()=>{u.removeEventListener(cf,S),b=null}},createHref(A){return i(u,A)},createURL:I,encodeLocation(A){let Q=I(A);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:_,replace:G,go(A){return h.go(A)}};return Y}var uf;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(uf||(uf={}));function zy(s,i,o){return o===void 0&&(o="/"),Ty(s,i,o)}function Ty(s,i,o,d){let u=typeof i=="string"?Ri(i):i,m=Jd(u.pathname||"/",o);if(m==null)return null;let h=xx(s);Ey(h);let k=null;for(let b=0;k==null&&b<h.length;++b){let y=Gy(m);k=qy(h[b],y)}return k}function xx(s,i,o,d){i===void 0&&(i=[]),o===void 0&&(o=[]),d===void 0&&(d="");let u=(m,h,k)=>{let b={relativePath:k===void 0?m.path||"":k,caseSensitive:m.caseSensitive===!0,childrenIndex:h,route:m};b.relativePath.startsWith("/")&&(Lt(b.relativePath.startsWith(d),'Absolute route path "'+b.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),b.relativePath=b.relativePath.slice(d.length));let y=di([d,b.relativePath]),w=o.concat(b);m.children&&m.children.length>0&&(Lt(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),xx(m.children,i,w,y)),!(m.path==null&&!m.index)&&i.push({path:y,score:Hy(y,m.index),routesMeta:w})};return s.forEach((m,h)=>{var k;if(m.path===""||!((k=m.path)!=null&&k.includes("?")))u(m,h);else for(let b of gx(m.path))u(m,h,b)}),i}function gx(s){let i=s.split("/");if(i.length===0)return[];let[o,...d]=i,u=o.endsWith("?"),m=o.replace(/\?$/,"");if(d.length===0)return u?[m,""]:[m];let h=gx(d.join("/")),k=[];return k.push(...h.map(b=>b===""?m:[m,b].join("/"))),u&&k.push(...h),k.map(b=>s.startsWith("/")&&b===""?"/":b)}function Ey(s){s.sort((i,o)=>i.score!==o.score?o.score-i.score:Ly(i.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const My=/^:[\w-]+$/,Ay=3,Dy=2,Oy=1,Ry=10,Uy=-2,pf=s=>s==="*";function Hy(s,i){let o=s.split("/"),d=o.length;return o.some(pf)&&(d+=Uy),i&&(d+=Dy),o.filter(u=>!pf(u)).reduce((u,m)=>u+(My.test(m)?Ay:m===""?Oy:Ry),d)}function Ly(s,i){return s.length===i.length&&s.slice(0,-1).every((d,u)=>d===i[u])?s[s.length-1]-i[i.length-1]:0}function qy(s,i,o){let{routesMeta:d}=s,u={},m="/",h=[];for(let k=0;k<d.length;++k){let b=d[k],y=k===d.length-1,w=m==="/"?i:i.slice(m.length)||"/",S=By({path:b.relativePath,caseSensitive:b.caseSensitive,end:y},w),_=b.route;if(!S)return null;Object.assign(u,S.params),h.push({params:u,pathname:di([m,S.pathname]),pathnameBase:Ky(di([m,S.pathnameBase])),route:_}),S.pathnameBase!=="/"&&(m=di([m,S.pathnameBase]))}return h}function By(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=$y(s.path,s.caseSensitive,s.end),u=i.match(o);if(!u)return null;let m=u[0],h=m.replace(/(.)\/+$/,"$1"),k=u.slice(1);return{params:d.reduce((y,w,S)=>{let{paramName:_,isOptional:G}=w;if(_==="*"){let Y=k[S]||"";h=m.slice(0,m.length-Y.length).replace(/(.)\/+$/,"$1")}const I=k[S];return G&&!I?y[_]=void 0:y[_]=(I||"").replace(/%2F/g,"/"),y},{}),pathname:m,pathnameBase:h,pattern:s}}function $y(s,i,o){i===void 0&&(i=!1),o===void 0&&(o=!0),nr(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],u="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,k,b)=>(d.push({paramName:k,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),u+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":s!==""&&s!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),d]}function Gy(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return nr(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),s}}function Jd(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const Yy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qy=s=>Yy.test(s);function Xy(s,i){i===void 0&&(i="/");let{pathname:o,search:d="",hash:u=""}=typeof s=="string"?Ri(s):s,m;if(o)if(Qy(o))m=o;else{if(o.includes("//")){let h=o;o=o.replace(/\/\/+/g,"/"),nr(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+o))}o.startsWith("/")?m=mf(o.substring(1),"/"):m=mf(o,i)}else m=i;return{pathname:m,search:Fy(d),hash:Jy(u)}}function mf(s,i){let o=i.replace(/\/+$/,"").split("/");return s.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function bd(s,i,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zy(s){return s.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Vd(s,i){let o=Zy(s);return i?o.map((d,u)=>u===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function Pd(s,i,o,d){d===void 0&&(d=!1);let u;typeof s=="string"?u=Ri(s):(u=fs({},s),Lt(!u.pathname||!u.pathname.includes("?"),bd("?","pathname","search",u)),Lt(!u.pathname||!u.pathname.includes("#"),bd("#","pathname","hash",u)),Lt(!u.search||!u.search.includes("#"),bd("#","search","hash",u)));let m=s===""||u.pathname==="",h=m?"/":u.pathname,k;if(h==null)k=o;else{let S=i.length-1;if(!d&&h.startsWith("..")){let _=h.split("/");for(;_[0]==="..";)_.shift(),S-=1;u.pathname=_.join("/")}k=S>=0?i[S]:"/"}let b=Xy(u,k),y=h&&h!=="/"&&h.endsWith("/"),w=(m||h===".")&&o.endsWith("/");return!b.pathname.endsWith("/")&&(y||w)&&(b.pathname+="/"),b}const di=s=>s.join("/").replace(/\/\/+/g,"/"),Ky=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Fy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Jy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Vy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const bx=["post","put","patch","delete"];new Set(bx);const Py=["get",...bx];new Set(Py);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xs(){return xs=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},xs.apply(this,arguments)}const Wd=f.createContext(null),Wy=f.createContext(null),mi=f.createContext(null),ar=f.createContext(null),hi=f.createContext({outlet:null,matches:[],isDataRoute:!1}),yx=f.createContext(null);function Iy(s,i){let{relative:o}=i===void 0?{}:i;yl()||Lt(!1);let{basename:d,navigator:u}=f.useContext(mi),{hash:m,pathname:h,search:k}=jx(s,{relative:o}),b=h;return d!=="/"&&(b=h==="/"?d:di([d,h])),u.createHref({pathname:b,search:k,hash:m})}function yl(){return f.useContext(ar)!=null}function ra(){return yl()||Lt(!1),f.useContext(ar).location}function vx(s){f.useContext(mi).static||f.useLayoutEffect(s)}function Id(){let{isDataRoute:s}=f.useContext(hi);return s?pv():ev()}function ev(){yl()||Lt(!1);let s=f.useContext(Wd),{basename:i,future:o,navigator:d}=f.useContext(mi),{matches:u}=f.useContext(hi),{pathname:m}=ra(),h=JSON.stringify(Vd(u,o.v7_relativeSplatPath)),k=f.useRef(!1);return vx(()=>{k.current=!0}),f.useCallback(function(y,w){if(w===void 0&&(w={}),!k.current)return;if(typeof y=="number"){d.go(y);return}let S=Pd(y,JSON.parse(h),m,w.relative==="path");s==null&&i!=="/"&&(S.pathname=S.pathname==="/"?i:di([i,S.pathname])),(w.replace?d.replace:d.push)(S,w.state,w)},[i,d,h,m,s])}function jx(s,i){let{relative:o}=i===void 0?{}:i,{future:d}=f.useContext(mi),{matches:u}=f.useContext(hi),{pathname:m}=ra(),h=JSON.stringify(Vd(u,d.v7_relativeSplatPath));return f.useMemo(()=>Pd(s,JSON.parse(h),m,o==="path"),[s,h,m,o])}function tv(s,i){return nv(s,i)}function nv(s,i,o,d){yl()||Lt(!1);let{navigator:u}=f.useContext(mi),{matches:m}=f.useContext(hi),h=m[m.length-1],k=h?h.params:{};h&&h.pathname;let b=h?h.pathnameBase:"/";h&&h.route;let y=ra(),w;if(i){var S;let A=typeof i=="string"?Ri(i):i;b==="/"||(S=A.pathname)!=null&&S.startsWith(b)||Lt(!1),w=A}else w=y;let _=w.pathname||"/",G=_;if(b!=="/"){let A=b.replace(/^\//,"").split("/");G="/"+_.replace(/^\//,"").split("/").slice(A.length).join("/")}let I=zy(s,{pathname:G}),Y=ov(I&&I.map(A=>Object.assign({},A,{params:Object.assign({},k,A.params),pathname:di([b,u.encodeLocation?u.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?b:di([b,u.encodeLocation?u.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),m,o,d);return i&&Y?f.createElement(ar.Provider,{value:{location:xs({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:ci.Pop}},Y):Y}function av(){let s=uv(),i=Vy(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},i),o?f.createElement("pre",{style:u},o):null,null)}const iv=f.createElement(av,null);class lv extends f.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?f.createElement(hi.Provider,{value:this.props.routeContext},f.createElement(yx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sv(s){let{routeContext:i,match:o,children:d}=s,u=f.useContext(Wd);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),f.createElement(hi.Provider,{value:i},d)}function ov(s,i,o,d){var u;if(i===void 0&&(i=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var m;if(!o)return null;if(o.errors)s=o.matches;else if((m=d)!=null&&m.v7_partialHydration&&i.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let h=s,k=(u=o)==null?void 0:u.errors;if(k!=null){let w=h.findIndex(S=>S.route.id&&(k==null?void 0:k[S.route.id])!==void 0);w>=0||Lt(!1),h=h.slice(0,Math.min(h.length,w+1))}let b=!1,y=-1;if(o&&d&&d.v7_partialHydration)for(let w=0;w<h.length;w++){let S=h[w];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(y=w),S.route.id){let{loaderData:_,errors:G}=o,I=S.route.loader&&_[S.route.id]===void 0&&(!G||G[S.route.id]===void 0);if(S.route.lazy||I){b=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((w,S,_)=>{let G,I=!1,Y=null,A=null;o&&(G=k&&S.route.id?k[S.route.id]:void 0,Y=S.route.errorElement||iv,b&&(y<0&&_===0?(mv("route-fallback"),I=!0,A=null):y===_&&(I=!0,A=S.route.hydrateFallbackElement||null)));let Q=i.concat(h.slice(0,_+1)),q=()=>{let O;return G?O=Y:I?O=A:S.route.Component?O=f.createElement(S.route.Component,null):S.route.element?O=S.route.element:O=w,f.createElement(sv,{match:S,routeContext:{outlet:w,matches:Q,isDataRoute:o!=null},children:O})};return o&&(S.route.ErrorBoundary||S.route.errorElement||_===0)?f.createElement(lv,{location:o.location,revalidation:o.revalidation,component:Y,error:G,children:q(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):q()},null)}var wx=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(wx||{}),_x=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(_x||{});function rv(s){let i=f.useContext(Wd);return i||Lt(!1),i}function cv(s){let i=f.useContext(Wy);return i||Lt(!1),i}function dv(s){let i=f.useContext(hi);return i||Lt(!1),i}function Nx(s){let i=dv(),o=i.matches[i.matches.length-1];return o.route.id||Lt(!1),o.route.id}function uv(){var s;let i=f.useContext(yx),o=cv(),d=Nx();return i!==void 0?i:(s=o.errors)==null?void 0:s[d]}function pv(){let{router:s}=rv(wx.UseNavigateStable),i=Nx(_x.UseNavigateStable),o=f.useRef(!1);return vx(()=>{o.current=!0}),f.useCallback(function(u,m){m===void 0&&(m={}),o.current&&(typeof u=="number"?s.navigate(u):s.navigate(u,xs({fromRouteId:i},m)))},[s,i])}const hf={};function mv(s,i,o){hf[s]||(hf[s]=!0)}function hv(s,i){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function ff(s){let{to:i,replace:o,state:d,relative:u}=s;yl()||Lt(!1);let{future:m,static:h}=f.useContext(mi),{matches:k}=f.useContext(hi),{pathname:b}=ra(),y=Id(),w=Pd(i,Vd(k,m.v7_relativeSplatPath),b,u==="path"),S=JSON.stringify(w);return f.useEffect(()=>y(JSON.parse(S),{replace:o,state:d,relative:u}),[y,S,u,o,d]),null}function Tt(s){Lt(!1)}function fv(s){let{basename:i="/",children:o=null,location:d,navigationType:u=ci.Pop,navigator:m,static:h=!1,future:k}=s;yl()&&Lt(!1);let b=i.replace(/^\/*/,"/"),y=f.useMemo(()=>({basename:b,navigator:m,static:h,future:xs({v7_relativeSplatPath:!1},k)}),[b,k,m,h]);typeof d=="string"&&(d=Ri(d));let{pathname:w="/",search:S="",hash:_="",state:G=null,key:I="default"}=d,Y=f.useMemo(()=>{let A=Jd(w,b);return A==null?null:{location:{pathname:A,search:S,hash:_,state:G,key:I},navigationType:u}},[b,w,S,_,G,I,u]);return Y==null?null:f.createElement(mi.Provider,{value:y},f.createElement(ar.Provider,{children:o,value:Y}))}function xv(s){let{children:i,location:o}=s;return tv(Ud(i),o)}new Promise(()=>{});function Ud(s,i){i===void 0&&(i=[]);let o=[];return f.Children.forEach(s,(d,u)=>{if(!f.isValidElement(d))return;let m=[...i,u];if(d.type===f.Fragment){o.push.apply(o,Ud(d.props.children,m));return}d.type!==Tt&&Lt(!1),!d.props.index||!d.props.children||Lt(!1);let h={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(h.children=Ud(d.props.children,m)),o.push(h)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hd(){return Hd=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},Hd.apply(this,arguments)}function gv(s,i){if(s==null)return{};var o={},d=Object.keys(s),u,m;for(m=0;m<d.length;m++)u=d[m],!(i.indexOf(u)>=0)&&(o[u]=s[u]);return o}function bv(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function yv(s,i){return s.button===0&&(!i||i==="_self")&&!bv(s)}const vv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],jv="6";try{window.__reactRouterVersion=jv}catch{}const wv="startTransition",xf=by[wv];function _v(s){let{basename:i,children:o,future:d,window:u}=s,m=f.useRef();m.current==null&&(m.current=Sy({window:u,v5Compat:!0}));let h=m.current,[k,b]=f.useState({action:h.action,location:h.location}),{v7_startTransition:y}=d||{},w=f.useCallback(S=>{y&&xf?xf(()=>b(S)):b(S)},[b,y]);return f.useLayoutEffect(()=>h.listen(w),[h,w]),f.useEffect(()=>hv(d),[d]),f.createElement(fv,{basename:i,children:o,location:k.location,navigationType:k.action,navigator:h,future:d})}const Nv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kv=f.forwardRef(function(i,o){let{onClick:d,relative:u,reloadDocument:m,replace:h,state:k,target:b,to:y,preventScrollReset:w,viewTransition:S}=i,_=gv(i,vv),{basename:G}=f.useContext(mi),I,Y=!1;if(typeof y=="string"&&Sv.test(y)&&(I=y,Nv))try{let O=new URL(window.location.href),te=y.startsWith("//")?new URL(O.protocol+y):new URL(y),P=Jd(te.pathname,G);te.origin===O.origin&&P!=null?y=P+te.search+te.hash:Y=!0}catch{}let A=Iy(y,{relative:u}),Q=Cv(y,{replace:h,state:k,target:b,preventScrollReset:w,relative:u,viewTransition:S});function q(O){d&&d(O),O.defaultPrevented||Q(O)}return f.createElement("a",Hd({},_,{href:I||A,onClick:Y||m?d:q,ref:o,target:b}))});var gf;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(gf||(gf={}));var bf;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(bf||(bf={}));function Cv(s,i){let{target:o,replace:d,state:u,preventScrollReset:m,relative:h,viewTransition:k}=i===void 0?{}:i,b=Id(),y=ra(),w=jx(s,{relative:h});return f.useCallback(S=>{if(yv(S,o)){S.preventDefault();let _=d!==void 0?d:Zo(y)===Zo(w);b(s,{replace:_,state:u,preventScrollReset:m,relative:h,viewTransition:k})}},[y,b,w,d,u,o,s,m,h,k])}function qt(){const s=Id();return f.useMemo(()=>({push:i=>s(i),replace:i=>s(i,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function zv(){return ra().pathname}function Tv({href:s,...i}){return t.jsx(kv,{to:s,...i})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sx=(...s)=>s.filter((i,o,d)=>!!i&&i.trim()!==""&&d.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=f.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:u="",children:m,iconNode:h,...k},b)=>f.createElement("svg",{ref:b,...Mv,width:i,height:i,stroke:s,strokeWidth:d?Number(o)*24/Number(i):o,className:Sx("lucide",u),...k},[...h.map(([y,w])=>f.createElement(y,w)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=(s,i)=>{const o=f.forwardRef(({className:d,...u},m)=>f.createElement(Av,{ref:m,iconNode:i,className:Sx(`lucide-${Ev(s)}`,d),...u}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=_e("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=_e("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=_e("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=_e("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=_e("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=_e("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=_e("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=_e("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=_e("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=_e("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=_e("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=_e("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=_e("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=_e("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=_e("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=_e("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=_e("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=_e("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=_e("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=_e("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=_e("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=_e("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=_e("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=_e("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=_e("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=_e("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=_e("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=_e("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=_e("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=_e("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=_e("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=_e("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=_e("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=_e("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=_e("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=_e("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=_e("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=_e("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=_e("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=_e("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=_e("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=_e("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=_e("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=_e("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=_e("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=_e("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=_e("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=_e("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=_e("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=_e("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=_e("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=_e("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=_e("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=_e("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=_e("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=_e("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=_e("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=_e("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=_e("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=_e("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=_e("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=_e("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=_e("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=_e("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=_e("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=_e("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=_e("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=_e("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=_e("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=_e("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=_e("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=_e("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=_e("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=_e("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=_e("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=_e("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=_e("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=_e("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),g0="/api/v3";var mx;const je=typeof window<"u"&&((mx=window.settings)==null?void 0:mx.secure_path)||"ZicFree123",Xo="authorization";function b0(s){if(typeof window>"u"||typeof document>"u")return null;const i=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let u=o[d];for(;u.charAt(0)===" ";)u=u.substring(1,u.length);if(u.indexOf(i)===0)try{const m=u.substring(i.length,u.length),h=decodeURIComponent(m),k=JSON.parse(h);return k&&typeof k=="object"&&"value"in k?k.value:h}catch{try{return decodeURIComponent(u.substring(i.length,u.length))}catch{return u.substring(i.length,u.length)}}}return null}function y0(s,i,o=36500){if(typeof window>"u"||typeof document>"u")return;const u=JSON.stringify({site:"ZicNet",value:i}),m=window.location.protocol==="https:",h=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",k=new Date;k.setTime(k.getTime()+o*24*60*60*1e3);const b=`expires=${k.toUTCString()}`,y=h?"":`domain=${window.location.hostname};`;let w=`${s}=${encodeURIComponent(u)}; ${b}; ${y} path=/`;m&&(w+="; secure"),w+="; SameSite=Lax",document.cookie=w;try{window.localStorage.setItem(`cookie_${s}`,u)}catch{}}function v0(s){if(typeof window>"u"||typeof document>"u")return;const i=window.location.hostname,o=["",i,i.startsWith(".")?i:`.${i}`],d=["/","/dashboard","/user","/admin"];o.forEach(u=>{d.forEach(m=>{const h=u?` domain=${u};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${h} path=${m};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function Mx(){if(typeof window>"u")return null;let s=window.localStorage.getItem(Xo);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(Xo,s)}catch{}if(!s&&(s=b0("auth_data"),s))try{window.localStorage.setItem(Xo,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function j0(s,i){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${g0}${o}`,window.location.origin);return Object.entries(i??{}).forEach(([u,m])=>{m!==void 0&&d.searchParams.set(u,String(m))}),d.toString()}function Bt(){return!!Mx()}function w0(s){typeof window>"u"||(window.localStorage.setItem(Xo,s),window.localStorage.setItem("auth_data",s),y0("auth_data",s,36500))}function Ax(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(u=>{window.localStorage.removeItem(u)}),["token","auth_data","authorization","vuex","user","auth"].forEach(u=>{window.sessionStorage.removeItem(u)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(u=>{o.forEach(m=>{document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${m};`}),document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,v0(u)})}async function xe(s,i={}){const o={},d=i.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),i.auth!==!1){const b=Mx();b&&(o.authorization=b)}const u=await fetch(j0(s,i.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(i.body??{}),cache:"no-store"}),h=(u.headers.get("content-type")||"").includes("application/json"),k=h?await u.json():await u.text();if(!u.ok){const b=typeof k=="object"&&k&&"message"in k?String(k.message):`Request failed with status ${u.status}`,y=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(b);throw(u.status===401||u.status===403&&!y)&&i.auth!==!1&&(Ax(),window.location.hash="/login"),new Error(b)}if(!h&&typeof k=="string"&&(k.trim().startsWith("<!DOCTYPE html")||k.trim().startsWith("<html")||k.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return k}async function _0(s,i){return xe("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:i}})}async function N0(){const s=`/${je}/stat`,[i,o,d,u,m,h]=await Promise.all([xe(`${s}/getOverride`),xe(`${s}/getOrder`),xe(`${s}/getServerTodayRank`),xe(`${s}/getServerLastRank`),xe(`${s}/getUserTodayRank`),xe(`${s}/getUserLastRank`)]);return{override:i.data,order:o.data,serverToday:d.data,serverYesterday:u.data,userToday:m.data,userYesterday:h.data}}async function S0(s){return(await xe(`/${je}/stat/getUserBandwidthSeries`,{params:{range:s}})).data}async function k0(s){return(await xe(`/${je}/stat/getServerBandwidthSeries`,{params:{range:s}})).data}async function C0(s){return(await xe(`/${je}/stat/getOnlineUserSeries`,{params:{range:s}})).data}async function z0(s,i=10){return(await xe(`/${je}/stat/getCollaboratorCommissionRank`,{params:{range:s,limit:i}})).data}async function Dx(){return(await xe(`/${je}/config/fetch`)).data}async function Ox(s){return xe(`/${je}/config/save`,{method:"POST",body:s})}async function T0(){return(await xe(`/${je}/config/getEmailTemplate`)).data}async function E0(){return(await xe(`/${je}/plan/fetch`)).data.map(i=>({id:i.id,name:i.name}))}async function M0(){return xe(`/${je}/config/testSendMail`,{method:"POST",body:{}})}async function A0(s){return xe(`/${je}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function D0(){return(await xe(`/${je}/payment/fetch`)).data}async function O0(){return(await xe(`/${je}/payment/getPaymentMethods`)).data}async function Cf(s,i){return(await xe(`/${je}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:i}})).data}async function R0(s){return xe(`/${je}/payment/save`,{method:"POST",body:s})}async function U0(s){return xe(`/${je}/payment/show`,{method:"POST",body:{id:s}})}async function H0(s){return xe(`/${je}/payment/drop`,{method:"POST",body:{id:s}})}async function L0(s){return xe(`/${je}/payment/sort`,{method:"POST",body:{ids:s}})}async function q0(){return(await xe(`/${je}/theme/getThemes`)).data}async function B0(s){return(await xe(`/${je}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function $0(s,i){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(i))));return xe(`/${je}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function bl(){return(await xe(`/${je}/server/group/fetch`)).data}async function nu(s){return xe(`/${je}/server/group/save`,{method:"POST",body:s})}async function G0(s){return xe(`/${je}/server/group/drop`,{method:"POST",body:{id:s}})}const Rx=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function Ux(){return(await xe(`/${je}/server/route/fetch`)).data}async function Y0(s){return xe(`/${je}/server/route/save`,{method:"POST",body:s})}async function Q0(s){return xe(`/${je}/server/route/drop`,{method:"POST",body:{id:s}})}async function fi(){return(await xe(`/${je}/plan/fetch`)).data}async function X0(s){return xe(`/${je}/plan/save`,{method:"POST",body:s})}async function Z0(s){return xe(`/${je}/plan/drop`,{method:"POST",body:{id:s}})}async function yd(s,i){return xe(`/${je}/plan/update`,{method:"POST",body:{id:s,...i}})}async function zf(s){return xe(`/${je}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function K0(s={}){const i=new URLSearchParams;return i.set("current",String(s.current??1)),i.set("pageSize",String(s.pageSize??15)),s.is_commission&&i.set("is_commission","1"),s.filter&&s.filter.forEach((d,u)=>{i.set(`filter[${u}][key]`,d.key),i.set(`filter[${u}][condition]`,d.condition),i.set(`filter[${u}][value]`,d.value)}),await xe(`/${je}/order/fetch?${i.toString()}`)}async function F0(s){return xe(`/${je}/order/paid`,{method:"POST",body:{trade_no:s}})}async function J0(s){return xe(`/${je}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function au(s){return xe(`/${je}/order/assign`,{method:"POST",body:s})}async function V0(s,i){return xe(`/${je}/order/update`,{method:"POST",body:{trade_no:s,commission_status:i}})}async function P0(s){return xe(`/${je}/order/detail`,{method:"POST",body:{id:s}})}async function Hx(s=1,i=15){return xe(`/${je}/coupon/fetch?current=${s}&pageSize=${i}`)}async function W0(s){return xe(`/${je}/coupon/generate`,{method:"POST",body:s})}async function I0(s){return xe(`/${je}/coupon/drop`,{method:"POST",body:{id:s}})}async function e1(s){return xe(`/${je}/coupon/show`,{method:"POST",body:{id:s}})}async function t1(s=1,i=15){return xe(`/${je}/giftcard/fetch?current=${s}&pageSize=${i}`)}async function n1(s){return xe(`/${je}/giftcard/generate`,{method:"POST",body:s})}async function a1(s){return xe(`/${je}/giftcard/drop`,{method:"POST",body:{id:s}})}async function Yd(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o&&o.forEach((u,m)=>{d.set(`filter[${m}][key]`,u.key),d.set(`filter[${m}][condition]`,u.condition),d.set(`filter[${m}][value]`,u.value)}),xe(`/${je}/user/fetch?${d.toString()}`)}async function i1(s){return xe(`/${je}/user/update`,{method:"POST",body:s})}async function Lx(s){return xe(`/${je}/user/getUserInfoById`,{params:{id:s}})}async function l1(s){return xe(`/${je}/user/delUser`,{method:"POST",body:{id:s}})}async function s1(s){return xe(`/${je}/user/generate`,{method:"POST",body:s})}async function o1(s){return xe(`/${je}/user/resetSecret`,{method:"POST",body:{id:s}})}async function r1(s=1,i=15,o,d=!1){const u=new URLSearchParams;return u.set("current",String(s)),u.set("pageSize",String(i)),d&&u.set("include_subscribe_url","1"),o==null||o.forEach((m,h)=>{u.set(`filter[${h}][key]`,m.key),u.set(`filter[${h}][condition]`,m.condition),u.set(`filter[${h}][value]`,m.value)}),xe(`/${je}/subscription/fetch?${u.toString()}`)}async function c1(s){return xe(`/${je}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function d1(s){return xe(`/${je}/subscription/update`,{method:"POST",body:s})}async function u1(s){return xe(`/${je}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function qx(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o==null||o.forEach((u,m)=>{d.set(`filter[${m}][key]`,u.key),d.set(`filter[${m}][condition]`,u.condition),d.set(`filter[${m}][value]`,u.value)}),xe(`/${je}/device/fetch?${d.toString()}`)}async function Bx(s){return xe(`/${je}/device/drop`,{method:"POST",body:{id:s}})}async function $x(s){return xe(`/${je}/device/ban`,{method:"POST",body:{id:s}})}async function p1(s){return xe(`/${je}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function m1(s,i=1,o=10){return xe(`/${je}/stat/getStatUser`,{params:{user_id:s,current:i,pageSize:o}})}async function h1(){return(await xe(`/${je}/notice/fetch`)).data}async function f1(s){return xe(`/${je}/notice/save`,{method:"POST",body:s})}async function x1(s){return xe(`/${je}/notice/drop`,{method:"POST",body:{id:s}})}async function g1(s){return xe(`/${je}/notice/show`,{method:"POST",body:{id:s}})}async function b1(){return(await xe(`/${je}/ticket/fetch`)).data}async function Tf(s){return(await xe(`/${je}/ticket/fetch`,{params:{id:s}})).data}async function y1(s,i){return xe(`/${je}/ticket/reply`,{method:"POST",body:{id:s,message:i}})}async function v1(s){return xe(`/${je}/ticket/close`,{method:"POST",body:{id:s}})}async function j1(){return(await xe(`/${je}/knowledge/fetch`)).data}async function w1(s){return(await xe(`/${je}/knowledge/fetch`,{params:{id:s}})).data}async function _1(s){return xe(`/${je}/knowledge/save`,{method:"POST",body:s})}async function N1(s){return xe(`/${je}/knowledge/drop`,{method:"POST",body:{id:s}})}async function S1(s){return xe(`/${je}/knowledge/show`,{method:"POST",body:{id:s}})}async function k1(){return(await xe(`/${je}/webcon/fetch`)).data}async function C1(s){return xe(`/${je}/webcon/save`,{method:"POST",body:s})}async function z1(s){return xe(`/${je}/webcon/drop`,{method:"POST",body:{id:s}})}async function T1(s){return xe(`/${je}/webcon/show`,{method:"POST",body:{id:s}})}async function E1(){return xe(`/${je}/system/getSystemStatus`)}async function M1(){return(await xe(`/${je}/system/getCoreLicenseStatus`)).data}async function A1(){return(await xe(`/${je}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function D1(){return xe(`/${je}/system/getQueueStats`)}async function O1(){return xe(`/${je}/system/getQueueWorkload`)}async function R1(){return xe(`/${je}/system/getSystemLog`)}async function Ef(){return xe(`/${je}/server/manage/getNodes`)}async function U1(s,i){return xe(`/${je}/server/${s}/save`,{method:"POST",body:i})}async function H1(s,i){return xe(`/${je}/server/${s}/drop`,{method:"POST",body:{id:i}})}async function L1(s,i,o){return xe(`/${je}/server/${s}/update`,{method:"POST",body:{id:i,show:o}})}async function q1(s,i){return xe(`/${je}/server/${s}/copy`,{method:"POST",body:{id:i}})}async function B1(s){return xe(`/${je}/server/manage/sort`,{method:"POST",body:s})}const iu=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],Gx="admin-locale",Qd="vi-VN",$1="/assets/adminzic",Yx=f.createContext(null);function G1(){if(typeof window>"u")return Qd;const s=localStorage.getItem(Gx);return s&&iu.some(i=>i.code===s)?s:Qd}function Y1(s,i){return i?Object.entries(i).reduce((o,[d,u])=>o.replaceAll(`{${d}}`,String(u)),s):s}function Q1(s){return new Promise((i,o)=>{var h;if(typeof window>"u"){i({});return}const d=(h=window.AdminNextI18n)==null?void 0:h[s];if(d){i(d);return}const u=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(u){u.addEventListener("load",()=>{var k;i(((k=window.AdminNextI18n)==null?void 0:k[s])??{})}),u.addEventListener("error",o);return}const m=document.createElement("script");m.src=`${$1}/i18n/${s}.js`,m.async=!0,m.dataset.adminNextLocale=s,m.onload=()=>{var k;return i(((k=window.AdminNextI18n)==null?void 0:k[s])??{})},m.onerror=o,document.head.appendChild(m)})}function X1({children:s}){const[i,o]=f.useState(Qd),[d,u]=f.useState({}),[m,h]=f.useState(!0);f.useEffect(()=>{o(G1())},[]);const k=f.useCallback(w=>{o(w),typeof window<"u"&&localStorage.setItem(Gx,w)},[]);f.useEffect(()=>{let w=!0;return h(!0),Q1(i).then(S=>{w&&u(S)}).finally(()=>{w&&h(!1)}),()=>{w=!1}},[i]);const b=f.useCallback((w,S)=>Y1(d[w]??w,S),[d]),y=f.useMemo(()=>({locale:i,loading:m,setLocale:k,t:b}),[i,m,k,b]);return t.jsx(Yx.Provider,{value:y,children:s})}function Ge(){const s=f.useContext(Yx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function Z1(){const s=qt(),{t:i,locale:o,setLocale:d}=Ge(),[u,m]=f.useState(""),[h,k]=f.useState(""),[b,y]=f.useState(""),[w,S]=f.useState(!1),[_,G]=f.useState(!1),I=f.useRef(null);f.useEffect(()=>{function A(Q){I.current&&!I.current.contains(Q.target)&&G(!1)}return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]),f.useEffect(()=>{Bt()&&s.replace("/dashboard")},[s]);async function Y(A){var Q,q,O,te;A.preventDefault(),y(""),S(!0);try{const P=await _0(u,h),ne=((Q=P.data)==null?void 0:Q.auth_data)??((q=P.data)==null?void 0:q.token),M=((O=P.data)==null?void 0:O.is_admin)===1||((te=P.data)==null?void 0:te.is_admin)===!0;if(!ne||!M)throw new Error(i("login.adminRequired"));w0(ne),s.replace("/dashboard")}catch(P){y(P instanceof Error?P.message:i("login.failed"))}finally{S(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:i("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:i("login.eyebrow")}),t.jsx("h1",{children:i("login.heading")}),t.jsx("span",{children:i("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":i("login.formLabel"),children:[t.jsxs("div",{ref:I,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.language"),onClick:()=>G(A=>!A),children:t.jsx(ys,{size:17})}),_?t.jsx("div",{className:"locale-menu",children:iu.map(A=>t.jsxs("button",{className:`locale-option ${o===A.code?"active":""}`,type:"button",onClick:()=>{d(A.code),G(!1)},children:[t.jsx("span",{className:"locale-flag",children:A.flag}),t.jsx("span",{children:A.label})]},A.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(s0,{size:18}),t.jsx("span",{children:i("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:i("login.title")}),t.jsx("p",{children:i("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:Y,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Cx,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:A=>m(A.target.value),placeholder:i("login.emailPlaceholder"),required:!0,type:"text",value:u})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Pv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:A=>k(A.target.value),placeholder:i("login.passwordPlaceholder"),required:!0,type:"password",value:h})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,t.jsx("button",{className:"primary-button",disabled:w,type:"submit",children:i(w?"login.signingIn":"login.submit")})]})]})]})}function Nn(s){const i=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(i)}function Dn(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function K1(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const F1=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:Xv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:c0},{href:"/config/payment",label:"nav.paymentConfig",icon:Bv},{href:"/config/theme",label:"nav.themeConfig",icon:m0}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:tu},{href:"/server/group",label:"nav.groupManagement",icon:f0},{href:"/server/route",label:"nav.routeManagement",icon:r0}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:Nf},{href:"/order",label:"nav.orders",icon:Vv},{href:"/coupon",label:"nav.coupons",icon:Zv},{href:"/giftcard",label:"nav.giftcards",icon:u0}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:Ex},{href:"/subscription",label:"nav.subscriptions",icon:Nf},{href:"/device",label:"nav.devices",icon:d0},{href:"/webcon",label:"nav.webcon",icon:ys},{href:"/notice",label:"nav.notices",icon:us},{href:"/ticket",label:"nav.tickets",icon:Jv},{href:"/knowledge",label:"nav.knowledge",icon:Rv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:Uv}]}];function J1(){const[s,i]=f.useState("light");f.useEffect(()=>{const m=localStorage.getItem("admin-theme")??"light";i(m),document.documentElement.setAttribute("data-theme",m)},[]);const o=f.useCallback(u=>{i(u),localStorage.setItem("admin-theme",u),document.documentElement.setAttribute("data-theme",u)},[]),d=f.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function Qx(s){return s?new Date(s*1e3):null}function V1(s,i){const o=Qx(i);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function P1(s){const i=Qx(s);return i?Math.ceil((i.getTime()-Date.now())/864e5):null}function Vt({children:s,title:i,subtitle:o}){const[d,u]=f.useState(!1),m=qt(),h=zv(),{t:k,locale:b,setLocale:y}=Ge(),{theme:w,toggle:S}=J1(),[_,G]=f.useState(!1),I=f.useRef(null),[Y,A]=f.useState(null),[Q,q]=f.useState(!1),O=f.useCallback(async(x=!1)=>{if(Bt()){q(x);try{A(x?await A1():await M1())}catch(T){A({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:k("license.unavailable"),error:T instanceof Error?T.message:k("license.unavailable")})}finally{q(!1)}}},[k]);f.useEffect(()=>{function x(T){I.current&&!I.current.contains(T.target)&&G(!1)}return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]),f.useEffect(()=>{O(!1);const x=window.setInterval(()=>{O(!1)},6e4);return()=>window.clearInterval(x)},[O]);function te(){Ax(),m.replace("/login")}const P=(Y==null?void 0:Y.license_expires_at)??(Y==null?void 0:Y.expires_at),ne=V1(b,P),M=typeof(Y==null?void 0:Y.days_until_expiry)=="number"?Y.days_until_expiry:P1(P),K=typeof M=="number"?M<=0?k("license.expiresToday"):k("license.daysLeft",{days:M}):null,ie=!!Y&&Y.available&&!Y.requires_renewal,ye=ie&&!!(Y!=null&&Y.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>u(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:k("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:F1.map(x=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:k(x.label)}),x.items.map(T=>{const W=T.icon,$=h===T.href;return t.jsxs(Tv,{className:`nav-item ${$?"active":""}`,href:T.href,onClick:()=>u(!1),children:[t.jsx(W,{size:17}),t.jsx("span",{children:k(T.label)})]},T.href)})]},x.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":k(d?"common.closeMenu":"common.openMenu"),onClick:()=>u(x=>!x),children:d?t.jsx(lt,{size:19}):t.jsx(Iv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:i}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[ie?t.jsxs("button",{className:`license-chip ${ye?"warning":""}`,type:"button",disabled:Q,title:k("license.refresh"),onClick:()=>void O(!0),children:[t.jsx(jf,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:k("license.validUntil")}),t.jsx("strong",{children:ne??k("license.unknownExpiry")})]}),K?t.jsx("small",{children:K}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:I,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":k("common.language"),onClick:()=>G(x=>!x),children:t.jsx(ys,{size:17})}),_?t.jsx("div",{className:"locale-menu",children:iu.map(x=>t.jsxs("button",{className:`locale-option ${b===x.code?"active":""}`,type:"button",onClick:()=>{y(x.code),G(!1)},children:[t.jsx("span",{className:"locale-flag",children:x.flag}),t.jsx("span",{children:x.label})]},x.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":w==="dark"?"Switch to light mode":"Switch to dark mode",onClick:S,children:w==="dark"?t.jsx(p0,{size:17}):t.jsx(e0,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:te,children:[t.jsx(Wv,{size:16}),t.jsx("span",{children:k("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[Y!=null&&Y.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx($d,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:k("license.renewTitle")}),t.jsx("p",{children:k("license.renewBody")}),t.jsxs("small",{children:[k("license.currentStatus"),": ",Y.status,Y.error?` - ${Y.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void O(!0),children:[t.jsx(Dt,{size:16}),k(Q?"license.refreshing":"license.refresh")]})]}):null,ye?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(jf,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:k("license.expiryWarningTitle")}),t.jsx("p",{children:k("license.expiryWarningBody",{date:ne??k("license.unknownExpiry"),days:M??""})}),t.jsxs("small",{children:[k("license.currentStatus"),": ",Y.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void O(!0),children:[t.jsx(Dt,{size:16}),k(Q?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const Mf=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function Xx(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function ps(s){return Number(s??0)}function Af(s){return ps(s)/100}function Df(s){return`${Dn(Math.round(s))} VND`}function Oo(s){const i=["B","KB","MB","GB","TB","PB"];let o=Math.max(0,Number(s||0)),d=0;for(;o>=1024&&d<i.length-1;)o/=1024,d+=1;return`${new Intl.NumberFormat("en-US",{maximumFractionDigits:o>=10||d===0?0:1}).format(o)} ${i[d]}`}function Zx(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function W1(s){const i=new Date;return i.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const u=new Date(i);return u.setDate(i.getDate()-(s-d-1)),Zx(u)})}function Of(s,i){const o=s.get(i);if(o)return o;const d=Xx(i);return s.set(i,d),d}function I1(s){const i=s.toLowerCase();return i==="register_count"||i.includes("đăng")||i.includes("register")?"registrations":i==="order_count"?"orderCount":i==="paid_count"||i.includes("giao dịch thu")?"paidCount":i==="paid_total"||i.includes("tiền thu")?"paidAmount":i==="commission_count"||i.includes("giao dịch hoa hồng")?"commissionCount":i==="commission_total"||i.includes("tiền hoa hồng")?"commissionAmount":null}function Ro({label:s,value:i,helper:o,tone:d="default",onClick:u}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:u,style:u?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:i})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(Ov,{size:19})}),o?t.jsx("small",{children:o}):null]})}function bt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(Dt,{size:18}),t.jsx("span",{children:s})]})}function ej(s,i){const o=new Map,d=new Map;if(s.forEach(u=>{const m=Of(o,u.date),h=I1(u.type);if(h){m[h]=Number(u.value||0);return}const k=d.get(u.date)??0,b=Mf[k%Mf.length];m[b]=Number(u.value||0),d.set(u.date,k+1)}),i){const u=Of(o,Zx(new Date));u.registrations=ps(i.day_register_total),i.day_order_total!==void 0&&(u.orderCount=ps(i.day_order_total)),i.day_paid_order_total!==void 0&&(u.paidCount=ps(i.day_paid_order_total)),u.paidAmount=Af(i.day_paid_income??i.day_income),i.day_commission_payout!==void 0&&(u.commissionAmount=Af(i.day_commission_payout)),i.day_commission_count!==void 0&&(u.commissionCount=ps(i.day_commission_count))}return o.size===0?[]:W1(31).map(u=>o.get(u)??Xx(u))}function tj({records:s,override:i}){const{t:o}=Ge(),[d,u]=f.useState(["paidAmount","orderCount","paidCount","commissionAmount","commissionCount","registrations"]),[m,h]=f.useState(null),k=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#14b8a6",unit:"money",format:Df},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#60a5fa",unit:"count",format:Dn},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#a78bfa",unit:"count",format:Dn},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#f97316",unit:"money",format:Df},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#fb7185",unit:"count",format:Dn},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#22c55e",unit:"count",format:Dn}],b=ej(s,i),y=k.filter(v=>d.includes(v.key)),w=y.filter(v=>v.unit==="money"),S=y.filter(v=>v.unit==="count"),_=Math.max(1,...w.flatMap(v=>b.map(L=>Number(L[v.key]||0)))),G=Math.max(1,...S.flatMap(v=>b.map(L=>Number(L[v.key]||0)))),I=920,Y=300,A=8,Q=22,O=Y-Q-28,te=b.length>1?(I-A*2)/(b.length-1):0,P=Math.max(Math.ceil(b.length/7),1),ne=m===null?null:b[m]??null,M=v=>({"--metric-color":v.color}),K=(v,L)=>Number(v[L.key]||0),ie=v=>v.unit==="money"?_:G,ye=v=>A+v*te,x=m===null?50:Math.min(88,Math.max(12,ye(m)/I*100)),T=(v,L)=>Q+O-v/ie(L)*O,W=v=>Math.max(0,...b.map(L=>K(L,v))),$=v=>{const L=b.map((z,me)=>({x:ye(me),y:T(K(z,v),v)}));return L.length?L.length===1?`M ${L[0].x} ${L[0].y}`:L.slice(1).reduce((z,me,se)=>{const C=L[se],U=(C.x+me.x)/2;return`${z} C ${U} ${C.y}, ${U} ${me.y}, ${me.x} ${me.y}`},`M ${L[0].x} ${L[0].y}`):""};function le(v){u(L=>L.includes(v)?L.length===1?L:L.filter(z=>z!==v):[...L,v]),h(null)}return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading chart-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:b.length})})]}),t.jsx("div",{className:"chart-legend",role:"group","aria-label":o("dashboard.chartMetrics"),children:k.map(v=>{const L=d.includes(v.key);return t.jsxs("button",{type:"button",className:`chart-legend-toggle ${L?"active":""}`,style:M(v),onClick:()=>le(v.key),"aria-pressed":L,children:[t.jsx("span",{className:"chart-legend-swatch"}),t.jsx("span",{children:v.label})]},v.key)})}),b.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"chart-frame",onMouseLeave:()=>h(null),children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${I} ${Y}`,preserveAspectRatio:"none",role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:"dashboardChartBackdrop",x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:"currentColor",stopOpacity:"0.05"}),t.jsx("stop",{offset:"100%",stopColor:"currentColor",stopOpacity:"0"})]})}),t.jsx("rect",{className:"chart-plot-bg",x:A,y:Q,width:I-A*2,height:O,rx:"14"}),[0,.25,.5,.75,1].map(v=>t.jsx("line",{className:"chart-grid",x1:A,x2:I-A,y1:Q+v*O,y2:Q+v*O},v)),m!==null?t.jsx("line",{className:"chart-hover-line",x1:ye(m),x2:ye(m),y1:Q,y2:Q+O}):null,y.map(v=>t.jsx("path",{className:"chart-series-line",d:$(v),style:M(v)},v.key)),m!==null?y.map(v=>t.jsx("circle",{className:"chart-series-dot",cx:ye(m),cy:T(K(b[m],v),v),r:"5",style:M(v)},`${v.key}-${m}`)):null,b.map((v,L)=>{const z=b.length>1?te:I-A*2;return t.jsx("rect",{className:"chart-hover-zone",x:ye(L)-z/2,y:Q,width:z,height:O,onMouseEnter:()=>h(L),onFocus:()=>h(L),onClick:()=>h(L),tabIndex:0},v.date)})]}),ne?t.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${x}%`},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",ne.date]}),t.jsx("div",{className:"tooltip-series-list",children:y.map(v=>t.jsxs("div",{className:"tooltip-series-row",style:M(v),children:[t.jsx("span",{className:"tooltip-dot"}),t.jsx("span",{children:v.label}),t.jsx("strong",{children:v.format(K(ne,v))})]},v.key))})]}):null]}),t.jsx("div",{className:"chart-axis",children:b.filter((v,L)=>L===0||L===b.length-1||L%P===0).map(v=>t.jsx("span",{children:v.date},v.date))}),t.jsx("div",{className:"chart-insights",children:y.map(v=>t.jsxs("div",{className:"chart-insight",style:M(v),children:[t.jsx("span",{className:"chart-legend-swatch"}),t.jsx("span",{children:v.summaryLabel}),t.jsx("strong",{children:v.format(W(v))})]},v.key))})]})]})}function lu({value:s,onChange:i}){const{t:o}=Ge();return t.jsx("div",{className:"range-toggle",role:"group","aria-label":o("dashboard.range"),children:["today","month"].map(d=>t.jsx("button",{type:"button",className:s===d?"active":"",onClick:()=>i(d),"aria-pressed":s===d,children:o(d==="today"?"dashboard.rangeToday":"dashboard.rangeMonth")},d))})}function Kx({points:s,metrics:i,emptyLabel:o}){const{t:d}=Ge(),[u,m]=f.useState(i.map(x=>x.key)),[h,k]=f.useState(null),b=i.filter(x=>u.includes(x.key)),y=Math.max(1,...b.flatMap(x=>s.map(T=>Number(T[x.key]||0)))),w=920,S=260,_=8,G=22,Y=S-G-28,A=s.length>1?(w-_*2)/(s.length-1):0,Q=Math.max(Math.ceil(s.length/7),1),q=h===null?null:s[h]??null,O=x=>({"--metric-color":x.color}),te=x=>_+x*A,P=x=>G+Y-x/y*Y,ne=h===null?50:Math.min(88,Math.max(12,te(h)/w*100)),M=(x,T)=>Number(x[T.key]||0),K=x=>Math.max(0,...s.map(T=>M(T,x))),ie=x=>{const T=s.map((W,$)=>({x:te($),y:P(M(W,x))}));return T.length?T.length===1?`M ${T[0].x} ${T[0].y}`:T.slice(1).reduce((W,$,le)=>{const v=T[le],L=(v.x+$.x)/2;return`${W} C ${L} ${v.y}, ${L} ${$.y}, ${$.x} ${$.y}`},`M ${T[0].x} ${T[0].y}`):""};function ye(x){m(T=>T.includes(x)?T.length===1?T:T.filter(W=>W!==x):[...T,x]),k(null)}return s.length===0?t.jsx("div",{className:"empty-state",children:o}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"chart-legend",role:"group","aria-label":d("dashboard.chartMetrics"),children:i.map(x=>{const T=u.includes(x.key);return t.jsxs("button",{type:"button",className:`chart-legend-toggle ${T?"active":""}`,style:O(x),onClick:()=>ye(x.key),"aria-pressed":T,children:[t.jsx("span",{className:"chart-legend-swatch"}),t.jsx("span",{children:x.label})]},x.key)})}),t.jsxs("div",{className:"chart-frame",onMouseLeave:()=>k(null),children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${w} ${S}`,preserveAspectRatio:"none",role:"img",children:[t.jsx("rect",{className:"chart-plot-bg",x:_,y:G,width:w-_*2,height:Y,rx:"14"}),[0,.25,.5,.75,1].map(x=>t.jsx("line",{className:"chart-grid",x1:_,x2:w-_,y1:G+x*Y,y2:G+x*Y},x)),h!==null?t.jsx("line",{className:"chart-hover-line",x1:te(h),x2:te(h),y1:G,y2:G+Y}):null,b.map(x=>t.jsx("path",{className:"chart-series-line",d:ie(x),style:O(x)},x.key)),h!==null?b.map(x=>t.jsx("circle",{className:"chart-series-dot",cx:te(h),cy:P(M(s[h],x)),r:"5",style:O(x)},`${x.key}-${h}`)):null,s.map((x,T)=>{const W=s.length>1?A:w-_*2;return t.jsx("rect",{className:"chart-hover-zone",x:te(T)-W/2,y:G,width:W,height:Y,onMouseEnter:()=>k(T),onFocus:()=>k(T),onClick:()=>k(T),tabIndex:0},`${x.label}-${T}`)})]}),q?t.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${ne}%`},children:[t.jsx("div",{className:"tooltip-date",children:q.label}),t.jsxs("div",{className:"tooltip-series-list",children:[b.map(x=>t.jsxs("div",{className:"tooltip-series-row",style:O(x),children:[t.jsx("span",{className:"tooltip-dot"}),t.jsx("span",{children:x.label}),t.jsx("strong",{children:x.format(M(q,x))})]},x.key)),q.sample_count!==void 0?t.jsxs("div",{className:"tooltip-series-row",children:[t.jsx("span",{}),t.jsx("span",{children:d("dashboard.sampleCount")}),t.jsx("strong",{children:Dn(q.sample_count)})]}):null]})]}):null]}),t.jsx("div",{className:"chart-axis",children:s.filter((x,T)=>T===0||T===s.length-1||T%Q===0).map((x,T)=>t.jsx("span",{children:x.label},`${x.label}-${T}`))}),t.jsx("div",{className:"chart-insights",children:b.map(x=>t.jsxs("div",{className:"chart-insight",style:O(x),children:[t.jsx("span",{className:"chart-legend-swatch"}),t.jsx("span",{children:x.summaryLabel}),t.jsx("strong",{children:x.format(K(x))})]},x.key))})]})}function Rf({title:s,subtitle:i,data:o,range:d,onRangeChange:u,loading:m,error:h}){var y;const{t:k}=Ge(),b=[{key:"total",label:k("dashboard.total"),summaryLabel:k("dashboard.peakTotalTraffic"),color:"#14b8a6",format:Oo},{key:"upload",label:k("dashboard.upload"),summaryLabel:k("dashboard.peakUpload"),color:"#60a5fa",format:Oo},{key:"download",label:k("dashboard.download"),summaryLabel:k("dashboard.peakDownload"),color:"#f97316",format:Oo}];return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading chart-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:i})]}),t.jsx(lu,{value:d,onChange:u})]}),h?t.jsx("div",{className:"chart-error",children:h}):null,m?t.jsx(bt,{label:k("dashboard.chartLoading")}):t.jsx(Kx,{points:(o==null?void 0:o.points)??[],metrics:b,emptyLabel:k("dashboard.noChartData")}),(y=o==null?void 0:o.servers)!=null&&y.length?t.jsx("div",{className:"mini-rank-list",children:o.servers.slice(0,5).map((w,S)=>t.jsxs("div",{className:"mini-rank-item",children:[t.jsx("span",{children:S+1}),t.jsx("strong",{children:w.server_name||k("dashboard.unnamedNode")}),t.jsx("small",{children:Oo(w.total)})]},`${w.server_type}-${w.server_id}`))}):null]})}function nj({data:s,range:i,onRangeChange:o,loading:d,error:u}){const{t:m}=Ge(),h=[{key:"online_user",label:m("dashboard.onlineUsers"),summaryLabel:m(i==="today"?"dashboard.peakOnline":"dashboard.avgOnlinePeak"),color:"#22c55e",format:Dn}];return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading chart-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m("dashboard.onlineTrend")}),t.jsx("p",{children:m(i==="today"?"dashboard.onlineTrendTodayHelp":"dashboard.onlineTrendMonthHelp")})]}),t.jsx(lu,{value:i,onChange:o})]}),u?t.jsx("div",{className:"chart-error",children:u}):null,d?t.jsx(bt,{label:m("dashboard.chartLoading")}):t.jsx(Kx,{points:(s==null?void 0:s.points)??[],metrics:h,emptyLabel:m("dashboard.noChartData")}),t.jsx("p",{className:"chart-note",children:m("dashboard.onlineRetentionNote")})]})}function aj({data:s,range:i,onRangeChange:o,loading:d,error:u}){const{t:m}=Ge(),h=(s==null?void 0:s.items)??[],k=Math.max(...h.map(b=>Number(b.commission_amount||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsxs("div",{className:"panel-heading chart-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m("dashboard.topCtvCommission")}),t.jsx("p",{children:m("dashboard.topCtvCommissionHelp")})]}),t.jsx(lu,{value:i,onChange:o})]}),u?t.jsx("div",{className:"chart-error",children:u}):null,d?t.jsx(bt,{label:m("dashboard.chartLoading")}):t.jsx("div",{className:"rank-list",children:h.length===0?t.jsx("div",{className:"empty-state",children:m("dashboard.noCommissionRank")}):h.map((b,y)=>{const w=Number(b.commission_amount||0)/k*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:y+1}),t.jsx("strong",{children:b.email||`User #${b.user_id}`}),t.jsxs("small",{children:[Nn(b.commission_amount)," VND · ",Dn(b.commission_count)]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(w,3)}%`}})})]},`${b.user_id}-${y}`)})})]})}function Uo({title:s,subtitle:i,records:o,labelKey:d}){const{t:u}=Ge(),m=Math.max(...o.map(h=>Number(h.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:i})]})}),t.jsx("div",{className:"rank-list",children:o.length===0?t.jsx("div",{className:"empty-state",children:u("dashboard.noTraffic")}):o.slice(0,8).map((h,k)=>{const b=d==="server_name"?h.server_name||u("dashboard.unnamedNode"):h.email||u("dashboard.unknownUser"),y=Number(h.total||0)/m*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:k+1}),t.jsx("strong",{children:b}),t.jsxs("small",{children:[K1(h.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(y,3)}%`}})})]},`${b}-${k}`)})})]})}function vd({label:s,current:i,previous:o}){const{t:d}=Ge();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof i=="number"?Dn(i):i}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?Dn(o):o]})]})}function Ho(){return{data:null,loading:!0,error:""}}function ij(){var ie,ye,x,T,W,$,le,v,L,z,me,se;const s=qt(),{t:i}=Ge(),[o,d]=f.useState(null),[u,m]=f.useState(""),[h,k]=f.useState(!0),[b,y]=f.useState("today"),[w,S]=f.useState("today"),[_,G]=f.useState("today"),[I,Y]=f.useState("today"),[A,Q]=f.useState(Ho),[q,O]=f.useState(Ho),[te,P]=f.useState(Ho),[ne,M]=f.useState(Ho),K=f.useCallback(async()=>{k(!0),m("");try{d(await N0())}catch(C){m(C instanceof Error?C.message:i("dashboard.loadFailed"))}finally{k(!1)}},[i]);return f.useEffect(()=>{if(!Bt()){s.replace("/login");return}K()},[K,s]),f.useEffect(()=>{let C=!0;return Q(U=>({...U,loading:!0,error:""})),S0(b).then(U=>{C&&Q({data:U,loading:!1,error:""})}).catch(U=>{C&&Q({data:null,loading:!1,error:U instanceof Error?U.message:i("dashboard.chartLoadFailed")})}),()=>{C=!1}},[b,i]),f.useEffect(()=>{let C=!0;return O(U=>({...U,loading:!0,error:""})),k0(w).then(U=>{C&&O({data:U,loading:!1,error:""})}).catch(U=>{C&&O({data:null,loading:!1,error:U instanceof Error?U.message:i("dashboard.chartLoadFailed")})}),()=>{C=!1}},[w,i]),f.useEffect(()=>{let C=!0;return P(U=>({...U,loading:!0,error:""})),C0(_).then(U=>{C&&P({data:U,loading:!1,error:""})}).catch(U=>{C&&P({data:null,loading:!1,error:U instanceof Error?U.message:i("dashboard.chartLoadFailed")})}),()=>{C=!1}},[_,i]),f.useEffect(()=>{let C=!0;return M(U=>({...U,loading:!0,error:""})),z0(I).then(U=>{C&&M({data:U,loading:!1,error:""})}).catch(U=>{C&&M({data:null,loading:!1,error:U instanceof Error?U.message:i("dashboard.chartLoadFailed")})}),()=>{C=!1}},[I,i]),t.jsxs(Vt,{title:i("dashboard.title"),subtitle:i("dashboard.subtitle"),children:[u?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:u}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:K,children:[t.jsx(Dt,{size:16}),i("common.retry")]})]}):null,h&&!o?t.jsx(bt,{label:i("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((ie=o.override)==null?void 0:ie.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:i("dashboard.pendingTickets",{count:(ye=o.override)==null?void 0:ye.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:i("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("dashboard.today")}),t.jsx("p",{children:i("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:K,disabled:h,children:[t.jsx(Dt,{size:16}),i(h?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(Ro,{label:i("dashboard.onlineUsers"),value:Dn(((x=o.override)==null?void 0:x.online_user)??0),helper:i("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(Ro,{label:i("dashboard.todayIncome"),value:`${Nn(((T=o.override)==null?void 0:T.day_paid_income)??((W=o.override)==null?void 0:W.day_income)??0)} VND`,helper:i("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(Ro,{label:i("dashboard.todayRegistrations"),value:Dn((($=o.override)==null?void 0:$.day_register_total)??0),helper:i("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(Ro,{label:i("dashboard.pendingCommission"),value:Dn(((le=o.override)==null?void 0:le.commission_pending_total)??0),helper:i("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(vd,{label:i("dashboard.monthIncome"),current:`${Nn(((v=o.override)==null?void 0:v.month_income)??0)} VND`,previous:`${Nn(((L=o.override)==null?void 0:L.last_month_income)??0)} VND`}),t.jsx(vd,{label:i("dashboard.monthCommission"),current:`${Nn(((z=o.override)==null?void 0:z.commission_month_payout)??0)} VND`,previous:`${Nn(((me=o.override)==null?void 0:me.commission_last_month_payout)??0)} VND`}),t.jsx(vd,{label:i("dashboard.monthRegistrations"),current:((se=o.override)==null?void 0:se.month_register_total)??0,previous:"-"})]}),t.jsx(tj,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(Rf,{title:i("dashboard.userBandwidth"),subtitle:i("dashboard.userBandwidthHelp"),data:A.data,range:b,onRangeChange:y,loading:A.loading,error:A.error}),t.jsx(nj,{data:te.data,range:_,onRangeChange:G,loading:te.loading,error:te.error}),t.jsx(Rf,{title:i("dashboard.serverBandwidth"),subtitle:i("dashboard.serverBandwidthHelp"),data:q.data,range:w,onRangeChange:S,loading:q.loading,error:q.error}),t.jsx(aj,{data:ne.data,range:I,onRangeChange:Y,loading:ne.loading,error:ne.error})]}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(Uo,{title:i("dashboard.serverRankToday"),subtitle:i("dashboard.trafficGb"),records:o.serverToday,labelKey:"server_name"}),t.jsx(Uo,{title:i("dashboard.serverRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.serverYesterday,labelKey:"server_name"}),t.jsx(Uo,{title:i("dashboard.userRankToday"),subtitle:i("dashboard.trafficGb"),records:o.userToday,labelKey:"email"}),t.jsx(Uo,{title:i("dashboard.userRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.userYesterday,labelKey:"email"})]})]}):null]})}const lj=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function Uf(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function sj(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function jd(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function oj(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function rj(s){return[{label:s("config.happPing.proxyHead"),value:"proxy-head"},{label:s("config.happPing.proxy"),value:"proxy"},{label:s("config.happPing.tcp"),value:"tcp"},{label:s("config.happPing.icmp"),value:"icmp"}]}function cj(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function tn(s){return s===!0||s===1||s==="1"}function dj(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function wd(s){return s.split(",").map(i=>i.trim()).filter(Boolean)}function uj(s){return s.split(/\r\n|\r|\n/).map(i=>i.trim()).filter(Boolean).join(`
`)}function pj({field:s,value:i,onChange:o}){const{t:d}=Ge(),u=s.toInput?s.toInput(i):dj(i);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${tn(i)?"on":""}`,type:"button",onClick:()=>o(tn(i)?0:1),"aria-pressed":tn(i),children:[t.jsx("span",{}),tn(i)?Uf(d)[0].label:Uf(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:u,onChange:m=>o(m.target.value),children:(s.options??[]).map(m=>t.jsx("option",{value:m.value,children:m.label},String(m.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:m=>o(s.fromInput?s.fromInput(m.target.value):m.target.value),placeholder:s.placeholder,rows:4,value:u}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:m=>o(s.fromInput?s.fromInput(m.target.value):m.target.value),placeholder:s.placeholder,type:s.type,value:u}):null]})]})}function mj({plans:s,emailTemplates:i,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(u=>({label:u.name,value:u.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"webcon_shared_subscribe_url_enable",label:o("config.site.webconSharedSubscribeUrl"),description:o("config.site.webconSharedSubscribeUrlHelp"),type:"switch"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:u=>Number(u.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:u=>tn(u.email_whitelist_enable),fromInput:wd},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:u=>tn(u.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:u=>tn(u.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>tn(u.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>tn(u.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>tn(u.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>tn(u.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:o("config.subscribe.happProfileTitle"),description:o("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:o("config.subscribe.happHideSettings"),description:o("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:o("config.subscribe.happAnnounce"),description:o("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:o("config.subscribe.happProviderId"),description:o("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:o("config.subscribe.happColorProfile"),description:o("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:o("config.subscribe.happPingType"),description:o("config.subscribe.happPingTypeHelp"),type:"select",options:rj(o)},{key:"happ_check_url",label:o("config.subscribe.happCheckUrl"),description:o("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:u=>String(u.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:sj(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:jd(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:jd(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:jd(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:oj(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:u=>Number(u.show_subscribe_method||0)===2},{key:"subscribe_url_ua_enable",label:o("config.subscribe.uaAllow"),description:o("config.subscribe.uaAllowHelp"),type:"switch"},{key:"subscribe_url_allowed_ua",label:o("config.subscribe.uaAllowList"),description:o("config.subscribe.uaAllowListHelp"),type:"textarea",placeholder:`MosVPN
MosVPN Android
MosVPN iOS`,visible:u=>tn(u.subscribe_url_ua_enable),fromInput:uj}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:wd}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:cj(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:wd},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:u=>tn(u.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:u=>tn(u.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:u=>tn(u.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:o("config.server.zicnodeAutoTls"),description:o("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:o("config.server.zicnodeAutoTlsProvider"),description:o("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:u=>tn(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:o("config.server.zicnodeAutoTlsDnsEnv"),description:o("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:u=>tn(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:o("config.server.zicnodeAutoTlsSelfFallback"),description:o("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:u=>tn(u.zicnode_auto_tls_enable)}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:i.map(u=>({label:u,value:u}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function hj(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState("site"),[u,m]=f.useState(null),[h,k]=f.useState([]),[b,y]=f.useState([]),[w,S]=f.useState(!0),[_,G]=f.useState(null),[I,Y]=f.useState(""),A=f.useCallback(async()=>{S(!0),Y("");try{const[K,ie,ye]=await Promise.all([Dx(),E0(),T0()]);m(K),k(ie),y(ye)}catch(K){Y(K instanceof Error?K.message:i("config.loadFailed"))}finally{S(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}A()},[A,s]),f.useEffect(()=>{const K=document.querySelector(".config-tabs button.active");K&&K.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const Q=f.useMemo(()=>mj({plans:h,emailTemplates:b,t:i}),[h,b,i]),q=Q.find(K=>K.key===o)??Q[0],O=(u==null?void 0:u[q.key])??{};function te(K,ie,ye){m(x=>x&&{...x,[K]:{...x[K],[ie]:ye}})}async function P(){var ye,x,T;if(!u)return;const K=q.key==="safe"?String(((ye=window.settings)==null?void 0:ye.secure_path)??"").trim():"",ie=q.key==="safe"?String(((x=u.safe)==null?void 0:x.secure_path)??"").trim():"";G(q.key),Y("");try{await Ox(u[q.key]),(T=window.showToast)==null||T.call(window,i("config.saveSuccess"),"success"),q.key==="safe"&&ie&&ie!==K&&(window.settings={...window.settings??{},secure_path:ie},window.location.replace(`${window.location.origin}/${ie}`))}catch(W){Y(W instanceof Error?W.message:i("config.saveFailed"))}finally{G(null)}}async function ne(){var K;G("mail"),Y("");try{await M0(),(K=window.showToast)==null||K.call(window,i("config.email.testSuccess"),"success")}catch(ie){Y(ie instanceof Error?ie.message:i("config.email.testFailed"))}finally{G(null)}}async function M(){var ie;const K=String((u==null?void 0:u.telegram.telegram_bot_token)??"");G("webhook"),Y("");try{await A0(K),(ie=window.showToast)==null||ie.call(window,i("config.telegram.webhookSuccess"),"success")}catch(ye){Y(ye instanceof Error?ye.message:i("config.telegram.webhookFailed"))}finally{G(null)}}return t.jsxs(Vt,{title:i("config.title"),subtitle:i("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("config.systemConfig")}),t.jsx("p",{children:i("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:A,disabled:w,children:[t.jsx(Dt,{size:16}),i(w?"common.refreshing":"common.refresh")]})]}),I?t.jsx("div",{className:"form-error",children:I}):null,w&&!u?t.jsx(bt,{label:i("config.loading")}):null,u?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":i("config.tabsLabel"),children:lj.map(K=>{const ie=Q.find(ye=>ye.key===K);return ie?t.jsxs("button",{className:o===K?"active":"",type:"button",onClick:()=>d(K),children:[t.jsx("span",{children:ie.label}),t.jsx("small",{children:ie.hint})]},K):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:q.label}),t.jsx("p",{children:q.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:_===q.key,type:"button",onClick:P,children:[t.jsx(Rn,{size:16}),_===q.key?i("config.saving"):i("config.saveTab")]})]}),q.warning?t.jsx("div",{className:"config-warning",children:q.warning}):null,t.jsx("div",{className:"config-fields",children:q.fields.map(K=>K.visible&&!K.visible(O)?null:t.jsx(pj,{field:K,value:O[K.key],onChange:ie=>te(q.key,K.key,ie)},K.key))}),q.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:_==="mail",onClick:ne,children:[t.jsx(Cx,{size:16}),i(_==="mail"?"config.email.testing":"config.email.test")]})}):null,q.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:_==="webhook",onClick:M,children:[t.jsx(h0,{size:16}),i(_==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(zx,{size:14}),i("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function ui(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const i=document.createElement("textarea");i.value=s,i.setAttribute("readonly",""),i.style.position="fixed",i.style.left="-9999px",i.style.top="0",document.body.appendChild(i),i.select(),i.setSelectionRange(0,i.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(i)}}function _d(s){return s===!0||s===1||s==="1"}function fj(s,i=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??i,config:{...(s==null?void 0:s.config)??{}}}}function xj(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function gj(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState([]),[u,m]=f.useState([]),[h,k]=f.useState(null),[b,y]=f.useState({}),[w,S]=f.useState(!0),[_,G]=f.useState(!1),[I,Y]=f.useState(!1),[A,Q]=f.useState(""),[q,O]=f.useState(""),[te,P]=f.useState({}),ne=f.useCallback(async()=>{S(!0),Q("");try{const[$,le]=await Promise.all([D0(),O0()]);d($),m(le),P({})}catch($){Q($ instanceof Error?$.message:i("payment.loadFailed"))}finally{S(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}ne()},[ne,s]);async function M($){const le=($==null?void 0:$.payment)??u[0]??"",v=fj($,le);if(k(v),y({}),Q(""),O(""),!!le){G(!0);try{y(await Cf(le,$==null?void 0:$.id))}catch(L){Q(L instanceof Error?L.message:i("payment.formLoadFailed"))}finally{G(!1)}}}async function K($){if(h){k({...h,payment:$,config:{}}),G(!0),Q("");try{y(await Cf($,h.id))}catch(le){Q(le instanceof Error?le.message:i("payment.formLoadFailed"))}finally{G(!1)}}}async function ie($){var le,v;if($.preventDefault(),!!h){Y(!0),Q(""),O("");try{await R0(xj(h)),k(null),(le=window.showToast)==null||le.call(window,i("payment.saveSuccess"),"success"),await ne()}catch(L){(v=window.showToast)==null||v.call(window,L instanceof Error?L.message:i("payment.saveFailed"),"error")}finally{Y(!1)}}}async function ye($){var le;Q(""),O("");try{await U0($),await ne()}catch(v){(le=window.showToast)==null||le.call(window,v instanceof Error?v.message:i("payment.toggleFailed"),"error")}}async function x($){var le;(le=window.showConfirm)==null||le.call(window,{message:i("payment.deleteConfirm"),onConfirm:async()=>{var v,L;Q(""),O("");try{await H0($),(v=window.showToast)==null||v.call(window,i("payment.deleteSuccess"),"success"),await ne()}catch(z){(L=window.showToast)==null||L.call(window,z instanceof Error?z.message:i("payment.deleteFailed"),"error")}}})}async function T($,le){var me;const v=$+le;if(v<0||v>=o.length)return;const L=[...o],z=L[$];L.splice($,1),L.splice(v,0,z),d(L);try{await L0(L.map(se=>se.id)),await ne()}catch(se){(me=window.showToast)==null||me.call(window,se instanceof Error?se.message:i("payment.sortFailed"),"error"),await ne()}}async function W($){var v;const le=await ui($);(v=window.showToast)==null||v.call(window,i(le?"payment.copied":"common.copyFailed"),le?"success":"error")}return t.jsxs(Vt,{title:i("payment.title"),subtitle:i("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("payment.methods")}),t.jsx("p",{children:i("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:ne,disabled:w,children:[t.jsx(Dt,{size:16}),t.jsx("span",{children:i(w?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void M(),children:[t.jsx(On,{size:16}),t.jsx("span",{children:i("payment.add")})]})]})]}),A?t.jsx("div",{className:"form-error",children:A}):null,q?t.jsx("div",{className:"form-success",children:q}):null,w&&o.length===0?t.jsx(bt,{label:i("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("payment.id")}),t.jsx("th",{children:i("payment.enabled")}),t.jsx("th",{children:i("payment.displayName")}),t.jsx("th",{children:i("payment.interface")}),t.jsx("th",{children:i("payment.notifyUrl")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(($,le)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:$.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void T(le,-1),disabled:le===0,"aria-label":i("payment.moveUp"),children:t.jsx(vf,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void T(le,1),disabled:le===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(yf,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_d($.enable)?"active":""}`,type:"button",onClick:()=>void ye($.id),"aria-label":_d($.enable)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:$.name}),$.icon?t.jsx("small",{children:$.icon}):null]}),t.jsx("td",{children:$.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void W($.notify_url),children:[t.jsx("span",{children:$.notify_url}),t.jsx(gs,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void M($),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void x($.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},$.id)),!w&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map(($,le)=>{const v=_d($.enable),L=$.handling_fee_percent!==null&&$.handling_fee_percent!==""?`${$.handling_fee_percent}%`:"",z=$.handling_fee_fixed!==null?`${Nn($.handling_fee_fixed)} VND`:"",me=[L,z].filter(Boolean).join(" + ")||"No fees",se=te[$.id],C=$.icon&&!se;return t.jsxs("div",{className:`payment-mobile-card ${v?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",$.id]}),t.jsx("span",{className:"gateway-tag",children:$.payment})]}),t.jsx("button",{className:`admin-switch ${v?"active":""}`,type:"button",onClick:()=>void ye($.id),"aria-label":i(v?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[C?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:$.icon,alt:$.name,onError:()=>{P(U=>({...U,[$.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:$.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:$.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:me})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:i("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void W($.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:$.notify_url}),t.jsx(gs,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void T(le,-1),disabled:le===0,"aria-label":i("payment.moveUp"),children:t.jsx(vf,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void T(le,1),disabled:le===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(yf,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void M($),children:[t.jsx(Jt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void x($.id),children:[t.jsx(nn,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]})]},$.id)}),!w&&o.length===0?t.jsx("div",{className:"empty-state",children:i("payment.empty")}):null]}),h?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:h.id?i("payment.edit"):i("payment.add")}),t.jsx("p",{children:i("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>k(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ie,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:$=>k({...h,name:$.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:h.icon,onChange:$=>k({...h,icon:$.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:h.notify_domain,onChange:$=>k({...h,notify_domain:$.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:h.handling_fee_percent,onChange:$=>k({...h,handling_fee_percent:$.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:h.handling_fee_fixed,onChange:$=>k({...h,handling_fee_fixed:$.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.interface")}),t.jsx("select",{className:"config-input",value:h.payment,onChange:$=>void K($.target.value),children:u.map($=>t.jsx("option",{value:$,children:$},$))})]}),_?t.jsx(bt,{label:i("payment.formLoading")}):null,_?null:Object.entries(b).map(([$,le])=>t.jsxs("label",{children:[t.jsx("span",{children:le.label}),t.jsx("input",{className:"config-input",placeholder:le.description,value:String(h.config[$]??le.value??""),onChange:v=>k({...h,config:{...h.config,[$]:v.target.value}})})]},$)),h.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>k(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(Rn,{size:16}),i(I?"payment.saving":"common.save")]})]})]})]})}):null]})}function bj(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function yj(s,i){return i[s.field_name]??s.default_value??""}function vj(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState(null),[u,m]=f.useState(null),[h,k]=f.useState(!0),[b,y]=f.useState(!1),[w,S]=f.useState(!1),[_,G]=f.useState(null),[I,Y]=f.useState(""),[A,Q]=f.useState(""),q=f.useCallback(async()=>{k(!0),Y("");try{d(await q0())}catch(M){Y(M instanceof Error?M.message:i("theme.loadFailed"))}finally{k(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}q()},[q,s]);async function O(M,K){m(null),y(!0),Y(""),Q("");try{const ie=await B0(M);m({key:M,theme:K,values:ie})}catch(ie){Y(ie instanceof Error?ie.message:i("theme.configLoadFailed"))}finally{y(!1)}}async function te(M){G(M),Y(""),Q("");try{await Ox({frontend_theme:M}),Q(i("theme.activateSuccess")),await q()}catch(K){Y(K instanceof Error?K.message:i("theme.activateFailed"))}finally{G(null)}}async function P(M){if(M.preventDefault(),!!u){S(!0),Y(""),Q("");try{await $0(u.key,u.values),m(null),Q(i("theme.saveSuccess")),await q()}catch(K){Y(K instanceof Error?K.message:i("theme.saveFailed"))}finally{S(!1)}}}function ne(M,K){m(ie=>ie&&{...ie,values:{...ie.values,[M]:K}})}return t.jsxs(Vt,{title:i("theme.title"),subtitle:i("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.available")}),t.jsx("p",{children:i("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:q,disabled:h,children:[t.jsx(Dt,{size:16}),i(h?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:i("theme.warning")}),I?t.jsx("div",{className:"form-error",children:I}):null,A?t.jsx("div",{className:"form-success",children:A}):null,h&&!o?t.jsx(bt,{label:i("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([M,K])=>{const ie=o.active===M;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${bj(K)})`},children:ie?t.jsxs("span",{className:"theme-active",children:[t.jsx(kx,{size:15}),i("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:K.name||M}),t.jsx("p",{children:K.description||i("theme.noDescription")})]}),t.jsxs("small",{children:[i("theme.version"),": ",K.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void O(M,K),children:[t.jsx(l0,{size:15}),i("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ie||_===M,type:"button",onClick:()=>void te(M),children:[t.jsx(t0,{size:15}),i(ie?"theme.current":_===M?"theme.activating":"theme.activate")]})]})]},M)})}):null,b?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(bt,{label:i("theme.configLoading")})})}):null,u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.configure",{name:u.theme.name||u.key})}),t.jsx("p",{children:u.theme.description||i("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:P,children:[(u.theme.configs??[]).map(M=>{const K=yj(M,u.values);return t.jsxs("label",{children:[t.jsx("span",{children:M.label}),M.description?t.jsx("p",{className:"field-description",children:M.description}):null,M.field_type==="select"?t.jsx("select",{className:"config-input",value:K,onChange:ie=>ne(M.field_name,ie.target.value),children:Object.entries(M.select_options??{}).map(([ie,ye])=>t.jsx("option",{value:ie,children:ye},ie))}):null,M.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:M.placeholder,rows:5,value:K,onChange:ie=>ne(M.field_name,ie.target.value)}):null,M.field_type!=="select"&&M.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:M.placeholder,value:K,onChange:ie=>ne(M.field_name,ie.target.value)}):null]},M.field_name)}),(u.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:i("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:w,children:[t.jsx(Rn,{size:16}),i(w?"theme.saving":"common.save")]})]})]})]})}):null]})}const Xd=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],jj=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],wj=["tcp","ws","grpc","http","httpupgrade","xhttp"],Fx=["tcp","ws","grpc"],Jx=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],_j=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],Jo=["anytls","hysteria2","trojan","tuic"],Nj=["tcp","ws","grpc","httpupgrade","xhttp"],Sj=["chrome","firefox","safari","ios","android","edge","360","qq"],kj=["vmess","vless","trojan","hysteria","tuic","anytls"],Cj=["trojan","hysteria","tuic","anytls"],Vx=["ForceIP","ForceIPv4","ForceIPv6","ForceIPv4v6","ForceIPv6v4"],Vo={enable:!1,mode:"auto",fail_policy:"direct",mtu:1280,domain_strategy:"ForceIPv4v6",endpoint:"engage.cloudflareclient.com:2408",addresses:["172.16.0.2/32","2606:4700:110:8765::2/128"],reserved:[]},Po=[10,20,50,100],Px="admin_server_manage_page_size";function Wx(s){return Po.includes(s)}function zj(){if(typeof window>"u")return Po[0];try{const s=Number(window.localStorage.getItem(Px));if(Wx(s))return s}catch{}return Po[0]}const su=typeof window<"u"?window.location.origin:"",Tj="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function Ej(s,i,o=""){return s[i]??o}function Ie(s,i,o=""){return String(Ej(s,i,o))}function Mj(s,i){const o=s[i];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function pi(s){if(s&&typeof s=="object"&&!Array.isArray(s))return s;if(typeof s!="string"||!s.trim())return{};try{const i=JSON.parse(s);return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}catch{return{}}}function Zd(s){return typeof s=="string"?s.trim()!=="":Array.isArray(s)?s.length>0:s&&typeof s=="object"?Object.keys(s).length>0:!1}function Aj(s){return s==="vmess"?"networkSettings":"network_settings"}function Dj(s,i){const o=s==="vmess",d=s==="vless"||In(s),u={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(i){case"tcp":return d?{acceptProxyProtocol:!1,...u}:u;case"ws":return d?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return o?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function In(s){return s==="v2node"||s==="zicnode"}function Oj(s){return Cj.includes(s)}function Rj(s){return In(s)||kj.includes(s)}function Hf(s){return s==="vmess"?"tlsSettings":"tls_settings"}function Uj(s){const i=String((s==null?void 0:s._type)??"");return Oj(i)?1:Number((s==null?void 0:s.tls)??0)}function Wo(s){return!!s&&s!=="shadowsocks"}function Hj(s){return s==="vless"||s==="vmess"}function Io(s){return s==="vless"||s==="anytls"}function Lj(s){return["vless","vmess","trojan","shadowsocks"].includes(s)}function Lf(s){return s==="shadowsocks"?["tcp","http"]:s==="trojan"?Fx:s==="vless"||s==="vmess"?Nj:[]}function qj(s){var i;return In(s)?"ZicNode":((i=Xd.find(o=>o.value===s))==null?void 0:i.label)??s}function kt(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function ou(s){return s===!0||s===1||s==="1"||s==="true"}function qf(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s:""}function Ix(s){return Array.isArray(s)?s.map(i=>String(i).trim()).filter(Boolean):typeof s=="string"?s.split(",").map(i=>i.trim()).filter(Boolean):[]}function Bj(s){return Ix(s).map(i=>Number(i)).filter(i=>Number.isInteger(i)&&i>=0&&i<=255)}function er(s){const i={...Vo,...pi(s)};if(!ou(i.enable))return{enable:!1};const d={enable:!0,mode:["auto","manual"].includes(String(i.mode))?i.mode:"auto",fail_policy:["direct","block"].includes(String(i.fail_policy))?i.fail_policy:"direct",mtu:Number(i.mtu)>0?Number(i.mtu):1280,domain_strategy:Vx.includes(String(i.domain_strategy))?i.domain_strategy:"ForceIPv4v6"};["private_key","peer_public_key","endpoint"].forEach(h=>{const k=kt(i[h]);k&&(d[h]=k)});const u=Ix(i.addresses);u.length&&(d.addresses=u);const m=Bj(i.reserved);return m.length&&(d.reserved=m),d}const $j=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],Gj=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert","allow_insecure","allowInsecure"];function oa(s,i){const o=pi(s);if(i===0)return{};const d={...o};return i===1?$j.forEach(u=>delete d[u]):i===2&&Gj.forEach(u=>delete d[u]),Object.keys(d).forEach(u=>{const m=d[u];(m===""||m===null||m===void 0)&&delete d[u]}),d}function Yj(s){const i=pi(s);if(!Object.keys(i).length)return{state:"pending",hasPin:!1,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"};const o=String(i.status??"").trim().toLowerCase(),d=!!(kt(i.public_key_sha256)||kt(i.sha256_hex)||kt(i.sha256));return o==="error"?{state:"error",hasPin:d,labelKey:"node.autoCertError",detailKey:"node.autoCertErrorHelp"}:d?{state:"ready",hasPin:d,labelKey:"node.autoCertReady",detailKey:"node.autoCertReadyHelp"}:{state:"pending",hasPin:d,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"}}function Bf(s,i=su){return kt(s).replace(/\/+$/,"")||i}function $f(s){return`'${s.replace(/'/g,"'\\''")}'`}function Qj(s,i){const o=i.apiHost||su,d=i.apiKey||"TOKEN_MOI";return`wget -N ${Tj} && \\
bash install.sh --api-host ${$f(o)} --node-id ${s} --api-key ${$f(d)}`}function Gf(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function Yf(s,i){if(i){const d=JSON.parse(JSON.stringify(i));if(d.group_id=Gf(d.group_id),d.route_id=Gf(d.route_id),In(s)){d.warp_settings={...Vo,...pi(d.warp_settings)};const u=String(d.protocol??""),m=Number(d.tls??0);m===2&&!Io(u)?d.tls=Wo(u)?1:0:Jo.includes(u)&&m!==2&&(d.tls=1)}return{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:"1",show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...o,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...o,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:"",warp_settings:{...Vo}};default:return o}}function eg({initialValue:s,placeholder:i,onCancel:o,onSave:d}){const{t:u}=Ge(),[m,h]=f.useState(()=>Zd(s)?JSON.stringify(s,null,2):""),[k,b]=f.useState(""),y=S=>{if(S.preventDefault(),!m.trim()){d({});return}try{const _=JSON.parse(m);if(typeof _!="object"||_===null)throw new Error("Must be a JSON object {} or array []");d(_)}catch(_){b(_ instanceof Error?_.message:"Invalid JSON")}},w=S=>{if(h(S),!S.trim()){b("");return}try{const _=JSON.parse(S);if(typeof _!="object"||_===null)throw new Error("Must be a JSON object {} or array []");b("")}catch(_){b(_ instanceof Error?_.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:y,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:u("node.jsonContent")}),k&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",k]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:k?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:m,onChange:S=>w(S.target.value),placeholder:i??`{
  "key": "value"
}`,autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:o,children:u("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!k,children:u("common.confirm")})]})]})}function Te({label:s,required:i,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,i&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:u=>{u.preventDefault(),d()},children:o})]})}function Xj({value:s,onChange:i,label:o}){const{t:d}=Ge(),[u,m]=f.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Te,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((h,k)=>t.jsxs("span",{className:"tag",onClick:()=>i(s.filter((b,y)=>y!==k)),style:{cursor:"pointer"},children:[h," ×"]},k)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:u,placeholder:d("node.tagPlaceholder"),onChange:h=>m(h.target.value),onKeyDown:h=>{h.key==="Enter"&&u.trim()&&(h.preventDefault(),i([...s,u.trim()]),m(""))}})]})]})}function Qf({options:s,value:i,onChange:o,label:d,actionText:u,onAction:m}){const{t:h}=Ge(),[k,b]=f.useState(""),y=s.filter(S=>i.includes(S.id)),w=s.filter(S=>S.name.toLowerCase().includes(k.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Te,{label:d,actionText:u,onAction:m}),y.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:y.map(S=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(i.filter(_=>_!==S.id)),children:[S.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},S.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${h("common.search")}...`,value:k,onChange:S=>b(S.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[w.map(S=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:i.includes(S.id),onChange:_=>o(_.target.checked?[...i,S.id]:i.filter(G=>G!==S.id))}),t.jsx("span",{children:S.name})]},S.id)),w.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?h("node.noGroupsAvailable"):h("node.noResultsFound")})]})]})}function ea({label:s,checked:i,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:i,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:i?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:i?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function Zj({initialValue:s,isSnakeCase:i,tlsMode:o,nodeType:d,onCancel:u,onSave:m}){const{t:h}=Ge(),k=i?"server_name":"serverName",b=i?"allow_insecure":"allowInsecure",y=In(d),w=Rj(d),S=o===1&&w,[_,G]=f.useState(String((s==null?void 0:s[k])??"")),[I,Y]=f.useState(String((s==null?void 0:s.dest)??"")),[A,Q]=f.useState(String((s==null?void 0:s.server_port)??"443")),[q,O]=f.useState(String((s==null?void 0:s.xver)??"0")),[te,P]=f.useState(String((s==null?void 0:s.private_key)??"")),[ne,M]=f.useState(String((s==null?void 0:s.public_key)??"")),[K,ie]=f.useState(String((s==null?void 0:s.short_id)??"")),[ye,x]=f.useState(String((s==null?void 0:s.fingerprint)??"chrome")),[T,W]=f.useState(String((s==null?void 0:s.pinnedPeerCertSha256)??(s==null?void 0:s.pinned_peer_cert_sha256)??"")),[$,le]=f.useState(String((s==null?void 0:s.verifyPeerCertByName)??(s==null?void 0:s.verify_peer_cert_by_name)??"")),v=String((s==null?void 0:s.cert_mode)??"").trim(),[L,z]=f.useState(v||"auto"),[me,se]=f.useState(String((s==null?void 0:s.provider)??"")),[C,U]=f.useState(String((s==null?void 0:s.dns_env)??"")),[pe,ge]=f.useState(String((s==null?void 0:s.cert_file)??"")),[ze,Ne]=f.useState(String((s==null?void 0:s.key_file)??"")),[qe,R]=f.useState(()=>{const ke=s==null?void 0:s.reject_unknown_sni;return ke===1||ke===!0||String(ke)==="1"||String(ke)==="true"}),[fe,he]=f.useState(String((s==null?void 0:s.ech)??"")),[Le,ct]=f.useState(String((s==null?void 0:s.ech_server_name)??"")),[ut,nt]=f.useState(String((s==null?void 0:s.ech_key)??"")),[Ct,pt]=f.useState(String((s==null?void 0:s.ech_config)??"")),[Pt,vt]=f.useState(()=>{const ke=s==null?void 0:s[b];return ke===1||ke===!0||String(ke)==="1"||String(ke)==="true"}),Ke=pi(s==null?void 0:s.auto_cert),$t=Yj(s==null?void 0:s.auto_cert),Ot=ke=>{if(ke.preventDefault(),y&&o===0){m({});return}const Sn=y?oa(s,o):pi(s),Ae=y?{...Sn,[k]:_,fingerprint:ye}:{...s??{},[k]:_,fingerprint:ye},un=T.trim(),pn=$.trim();if(un?Ae.pinnedPeerCertSha256=un:delete Ae.pinnedPeerCertSha256,delete Ae.pinned_peer_cert_sha256,pn?Ae.verifyPeerCertByName=pn:delete Ae.verifyPeerCertByName,delete Ae.verify_peer_cert_by_name,y&&o!==1?(delete Ae.allow_insecure,delete Ae.allowInsecure):Ae[b]=i?Pt?1:0:Pt,o===2&&(Ae.dest=I,Ae.server_port=A,Ae.xver=Number(q)||0,Ae.private_key=te,Ae.public_key=ne,Ae.short_id=K,Ae.ech=fe,Ae.ech_server_name=Le,Ae.ech_key=ut,Ae.ech_config=Ct),S){Ae.cert_mode=L;const Wt=s==null?void 0:s.auto_cert;Wt&&typeof Wt=="object"&&(Ae.auto_cert=Wt),L==="none"?(delete Ae.provider,delete Ae.dns_env,delete Ae.cert_file,delete Ae.key_file):(me.trim()?Ae.provider=me:delete Ae.provider,C.trim()?Ae.dns_env=C:delete Ae.dns_env,pe.trim()?Ae.cert_file=pe:delete Ae.cert_file,ze.trim()?Ae.key_file=ze:delete Ae.key_file),Ae.reject_unknown_sni=qe?"1":"0"}m(y?oa(Ae,o):Ae)};return t.jsxs("form",{onSubmit:Ot,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:h("node.sni")}),t.jsx("input",{className:"config-input",value:_,onChange:ke=>G(ke.target.value),placeholder:h(o===2?"node.realitySniHelp":"node.serverNameHelp")})]}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.dest")}),t.jsx("input",{className:"config-input",value:I,onChange:ke=>Y(ke.target.value),placeholder:h("node.destHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.servicePort")}),t.jsx("input",{className:"config-input",value:A,onChange:ke=>Q(ke.target.value),placeholder:"443"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.proxyProtocol")}),t.jsxs("select",{className:"config-input",value:q,onChange:ke=>O(ke.target.value),children:[t.jsx("option",{value:"0",children:"0"}),t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.privateKey")}),t.jsx("input",{className:"config-input",value:te,onChange:ke=>P(ke.target.value),placeholder:h("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.publicKey")}),t.jsx("input",{className:"config-input",value:ne,onChange:ke=>M(ke.target.value),placeholder:h("node.autoGenHelp")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.shortId")}),t.jsx("input",{className:"config-input",value:K,onChange:ke=>ie(ke.target.value),placeholder:h("node.autoGenHelp")})]})]}):null,t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.fingerprint")}),t.jsx("select",{className:"config-input",value:ye,onChange:ke=>x(ke.target.value),children:Sj.map(ke=>t.jsx("option",{value:ke,children:ke},ke))})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.pinnedPeerCertSha256")}),t.jsx("input",{className:"config-input",value:T,onChange:ke=>W(ke.target.value),placeholder:"AA:BB:CC..."})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.verifyPeerCertByName")}),t.jsx("input",{className:"config-input",value:$,onChange:ke=>le(ke.target.value),placeholder:"example.com"})]})]}),S?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.certMode")}),t.jsxs("select",{className:"config-input",value:L,onChange:ke=>z(ke.target.value),children:[t.jsx("option",{value:"auto",children:h("node.certModeAuto")}),t.jsx("option",{value:"self",children:h("node.certModeSelf")}),t.jsx("option",{value:"http",children:h("node.certModeHttp")}),t.jsx("option",{value:"dns",children:h("node.certModeDns")}),t.jsx("option",{value:"file",children:h("node.certModeFile")}),t.jsx("option",{value:"none",children:h("node.certModeNone")})]})]}),L!=="none"?t.jsxs("div",{className:`config-warning auto-cert-status auto-cert-${$t.state}`,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[t.jsx("strong",{children:h($t.labelKey)}),kt(Ke.updated_at)?t.jsx("span",{className:"mono",children:kt(Ke.updated_at)}):null]}),t.jsx("div",{style:{marginTop:4},children:h($t.detailKey)}),kt(Ke.target)||kt(Ke.source)?t.jsxs("div",{className:"mono",style:{marginTop:6,fontSize:12},children:[kt(Ke.target)?`${h("node.autoCertTarget")}: ${kt(Ke.target)}`:"",kt(Ke.target)&&kt(Ke.source)?" · ":"",kt(Ke.source)?`${h("node.autoCertSource")}: ${kt(Ke.source)}`:""]}):null,kt(Ke.public_key_sha256)||kt(Ke.sha256_hex)?t.jsx("div",{className:"mono",style:{marginTop:6,fontSize:12,wordBreak:"break-all"},children:kt(Ke.public_key_sha256)?`${h("node.autoCertPublicKeySha")}: ${kt(Ke.public_key_sha256)}`:`${h("node.autoCertSha")}: ${kt(Ke.sha256_hex)}`}):null,kt(Ke.error)?t.jsx("div",{style:{marginTop:6,color:"var(--rose)"},children:kt(Ke.error)}):null]}):null,L==="dns"||L==="auto"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.dnsProvider")}),t.jsx("input",{className:"config-input",value:me,onChange:ke=>se(ke.target.value),placeholder:"cloudflare"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.dnsEnv")}),t.jsx("input",{className:"config-input",value:C,onChange:ke=>U(ke.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,L!=="none"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.certFile")}),t.jsx("input",{className:"config-input",value:pe,onChange:ke=>ge(ke.target.value),placeholder:h("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.keyFile")}),t.jsx("input",{className:"config-input",value:ze,onChange:ke=>Ne(ke.target.value),placeholder:h("node.autoGenHelp")})]})]}):null,t.jsx(ea,{label:h("node.rejectUnknownSni"),checked:qe,onChange:R})]}):null,!y||y&&o===1?t.jsx(ea,{label:h("node.allowInsecure"),checked:Pt,onChange:vt}):null,o===2?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.ech")}),t.jsxs("select",{className:"config-input",value:fe,onChange:ke=>he(ke.target.value),children:[t.jsx("option",{value:"",children:h("node.echNone")}),t.jsx("option",{value:"cloudflare",children:"Cloudflare"}),t.jsx("option",{value:"custom",children:h("node.echCustom")})]})]}),fe==="cloudflare"?t.jsx("div",{className:"config-warning",children:h("node.echCloudflareHelp")}):null,fe==="custom"?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.echServerName")}),t.jsx("input",{className:"config-input",value:Le,onChange:ke=>ct(ke.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.echKey")}),t.jsx("input",{className:"config-input",value:ut,onChange:ke=>nt(ke.target.value),placeholder:h("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.echConfig")}),t.jsx("input",{className:"config-input",value:Ct,onChange:ke=>pt(ke.target.value),placeholder:h("node.autoGenHelp")})]})]}):null]}):null,t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:u,children:h("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:h("common.confirm")})]})]})}function Kj({draft:s,set:i,groups:o,routes:d,nodes:u,onOpenJson:m,onAddGroup:h,onOpenTransportConfig:k}){const{t:b}=Ge(),y=String(s._type),w=In(y),S=Ie(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:b("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ie(s,"name"),onChange:_=>i("name",_.target.value),placeholder:b("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",inputMode:"decimal",required:!0,value:Ie(s,"rate","1"),onChange:_=>i("rate",_.target.value)})]})]}),t.jsx(Xj,{value:s.tags??[],onChange:_=>i("tags",_),label:b("node.tags")}),t.jsx(Qf,{options:o.map(_=>({id:_.id,name:_.name})),value:s.group_id??[],onChange:_=>i("group_id",_),label:b("node.permissionGroups"),actionText:b("node.addGroup"),onAction:h}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ie(s,"host"),onChange:_=>i("host",_.target.value),placeholder:b("node.addressPlaceholder")})]}),w?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.listenIp")}),t.jsx("input",{className:"config-input",value:Ie(s,"listen_ip"),onChange:_=>i("listen_ip",_.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(y)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?b("node.editConfig"):void 0,onAction:()=>{const _=Hf(y);m(b("node.connectionSecurityConfig"),_)}}),t.jsxs("select",{className:"config-input",value:Ie(s,"tls","0"),onChange:_=>{const G=Number(_.target.value);i("tls",G);const I=Hf(y);G!==0&&!s[I]&&i(I,{})},children:[t.jsx("option",{value:"0",children:b("node.none")}),t.jsx("option",{value:"1",children:b("node.useTls")}),y!=="vmess"&&t.jsx("option",{value:"2",children:b("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(y)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.sni"),actionText:b("node.editConfig"),onAction:()=>m(b("node.connectionSecurityConfig"),"tls_settings")}),t.jsx("input",{className:"config-input",value:Ie(s,"server_name"),onChange:_=>i("server_name",_.target.value),placeholder:b("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ie(s,"port"),onChange:_=>i("port",_.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ie(s,"server_port"),onChange:_=>i("server_port",_.target.value),placeholder:"443"})]})]}),w?t.jsx(tw,{draft:s,set:i,onOpenJson:m,onOpenTransportConfig:k,onOpenSecurityConfig:()=>m(b("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(y)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:b("node.transportProtocol"),required:!0,actionText:b("node.editConfig"),onAction:k}),t.jsxs("select",{className:"config-input",value:S,onChange:_=>{i("network",_.target.value);const G=y==="vmess"?"networkSettings":"network_settings";s[G]||i(G,{})},children:[y==="vmess"&&jj.map(_=>t.jsx("option",{value:_,children:_},_)),y==="trojan"&&Fx.map(_=>t.jsx("option",{value:_,children:_},_)),y==="vless"&&wj.map(_=>t.jsx("option",{value:_,children:_},_))]})]}):null,y==="trojan"&&t.jsx(Jj,{draft:s,set:i}),y==="shadowsocks"&&t.jsx(Vj,{draft:s,set:i,onOpenJson:m}),y==="hysteria"&&t.jsx(Pj,{draft:s,set:i}),y==="tuic"&&t.jsx(Wj,{draft:s,set:i}),y==="vless"&&t.jsx(Ij,{draft:s,set:i,onOpenJson:m}),y==="anytls"&&t.jsx(ew,{draft:s,set:i,onOpenJson:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:_=>i("parent_id",_.target.value?Number(_.target.value):null),children:[t.jsx("option",{value:"",children:b("node.none")}),u.filter(_=>_.id!==s.id&&!_.parent_id).map(_=>t.jsx("option",{value:_.id,children:_.name},_.id))]})]}),t.jsx(Qf,{options:d.map(_=>({id:_.id,name:_.remarks})),value:s.route_id??[],onChange:_=>i("route_id",_),label:b("node.routingGroups")})]})]})}function Fj({draft:s,set:i,onCancel:o,onSave:d}){const u=String(s._type),m=String(s.network??"tcp"),h=Aj(u),k=s[h],b=Zd(k)?pi(k):{},y=Dj(u,m),w=Zd(y)?JSON.stringify(y,null,2):void 0;return t.jsx(eg,{initialValue:b,placeholder:w,onCancel:o,onSave:S=>{i(h,S),d()}})}function Jj({draft:s,set:i}){const{t:o}=Ge();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(ea,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>i("allow_insecure",d?1:0)})]})}function Vj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ge(),u=Mj(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Ie(s,"cipher","aes-128-gcm"),onChange:m=>i("cipher",m.target.value),children:Jx.map(m=>t.jsx("option",{value:m,children:m},m))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Ie(s,"obfs"),onChange:m=>i("obfs",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(u.host??""),onChange:m=>i("obfs_settings",{...u,host:m.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(u.path??""),onChange:m=>i("obfs_settings",{...u,path:m.target.value}),placeholder:"/"})]})]})]})}function Pj({draft:s,set:i}){const{t:o}=Ge();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Ie(s,"version","2"),onChange:d=>i("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ie(s,"up_mbps","0"),onChange:d=>i("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ie(s,"down_mbps","0"),onChange:d=>i("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Ie(s,"obfs"),onChange:d=>i("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ie(s,"obfs_password"),onChange:d=>i("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(ea,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)})]})}function Wj({draft:s,set:i}){const{t:o}=Ge();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ie(s,"udp_relay_mode","native"),onChange:d=>i("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ie(s,"congestion_control","bbr"),onChange:d=>i("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(ea,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)}),t.jsx(ea,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>i("disable_sni",d?1:0)}),t.jsx(ea,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>i("zero_rtt_handshake",d?1:0)})]})}function Ij({draft:s,set:i,onOpenJson:o}){const{t:d}=Ge();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Ie(s,"flow"),onChange:u=>i("flow",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Ie(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ie(s,"encryption"),onChange:u=>i("encryption",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function ew({draft:s,set:i,onOpenJson:o}){const{t:d}=Ge();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(ea,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:u=>i("insecure",u?1:0)})]})}function tw({draft:s,set:i,onOpenJson:o,onOpenTransportConfig:d,onOpenSecurityConfig:u}){const{t:m}=Ge(),h=Ie(s,"protocol"),k=Lf(h),b={...Vo,...pi(s.warp_settings)},y=ou(b.enable),w=(_,G)=>{i("warp_settings",er({...b,[_]:G}))},S=_=>{if(i("protocol",_),!_){i("tls",0),i("network","tcp");return}Jo.includes(_)?(i("tls",1),s.tls_settings||i("tls_settings",{})):_==="shadowsocks"?i("tls",0):_==="vmess"&&Number(s.tls??0)===2&&i("tls",1);const G=Lf(_);(G.length===0||!G.includes(Ie(s,"network","tcp")))&&i("network","tcp"),_!=="vless"&&(i("flow",""),i("encryption",""),i("encryption_settings",{})),_!=="hysteria2"&&(i("obfs",null),i("obfs_password",""),i("up_mbps",0),i("down_mbps",0)),_!=="anytls"&&i("padding_scheme","")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.zicnodeConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.nodeProtocol"),required:!0}),t.jsxs("select",{className:"config-input",value:h,onChange:_=>S(_.target.value),children:[t.jsx("option",{value:"",children:m("node.selectNodeProtocol")}),_j.map(_=>t.jsx("option",{value:_,children:_},_))]})]}),h?t.jsxs(t.Fragment,{children:[Wo(h)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?m("node.editConfig"):void 0,onAction:u}),t.jsxs("select",{className:"config-input",value:Ie(s,"tls",Jo.includes(h)?"1":"0"),onChange:_=>{const G=Number(_.target.value);i("tls",G),G!==0&&!s.tls_settings&&i("tls_settings",{})},children:[Hj(h)?t.jsx("option",{value:"0",children:m("node.none")}):null,t.jsx("option",{value:"1",children:m("node.useTls")}),Io(h)?t.jsx("option",{value:"2",children:m("node.reality")}):null]})]}):null,Lj(h)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.transportProtocol"),required:!0,actionText:m("node.editConfig"),onAction:d}),t.jsx("select",{className:"config-input",value:k.includes(Ie(s,"network","tcp"))?Ie(s,"network","tcp"):"tcp",onChange:_=>{i("network",_.target.value),s.network_settings||i("network_settings",{})},children:k.map(_=>t.jsx("option",{value:_,children:_},_))})]}):null]}):null,t.jsx("div",{className:"form-section-title",children:m("node.warpOutbound")}),t.jsx(ea,{label:m("node.warpEnable"),checked:y,onChange:_=>i("warp_settings",er({...b,enable:_}))}),y?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpMode")}),t.jsxs("select",{className:"config-input",value:String(b.mode??"auto"),onChange:_=>w("mode",_.target.value),children:[t.jsx("option",{value:"auto",children:m("node.warpModeAuto")}),t.jsx("option",{value:"manual",children:m("node.warpModeManual")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpFailPolicy")}),t.jsxs("select",{className:"config-input",value:String(b.fail_policy??"direct"),onChange:_=>w("fail_policy",_.target.value),children:[t.jsx("option",{value:"direct",children:m("node.warpFailDirect")}),t.jsx("option",{value:"block",children:m("node.warpFailBlock")})]})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpMtu")}),t.jsx("input",{className:"config-input",type:"number",min:"576",value:String(b.mtu??1280),onChange:_=>w("mtu",Number(_.target.value))})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpDomainStrategy")}),t.jsx("select",{className:"config-input",value:String(b.domain_strategy??"ForceIPv4v6"),onChange:_=>w("domain_strategy",_.target.value),children:Vx.map(_=>t.jsx("option",{value:_,children:_},_))})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.warpPrivateKey")}),t.jsx("input",{className:"config-input",value:String(b.private_key??""),onChange:_=>w("private_key",_.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpPeerPublicKey")}),t.jsx("input",{className:"config-input",value:String(b.peer_public_key??""),onChange:_=>w("peer_public_key",_.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpEndpoint")}),t.jsx("input",{className:"config-input",value:String(b.endpoint??"engage.cloudflareclient.com:2408"),onChange:_=>w("endpoint",_.target.value)})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpAddresses")}),t.jsx("input",{className:"config-input",value:qf(b.addresses),onChange:_=>w("addresses",_.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpReserved")}),t.jsx("input",{className:"config-input",value:qf(b.reserved),onChange:_=>w("reserved",_.target.value)})]})]})]}):null,h==="vless"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.encryption"),actionText:Ie(s,"encryption")?m("node.editConfig"):void 0,onAction:()=>o(m("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ie(s,"encryption"),onChange:_=>i("encryption",_.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.flow")}),t.jsxs("select",{className:"config-input",value:Ie(s,"flow"),onChange:_=>i("flow",_.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),h==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Ie(s,"cipher","aes-128-gcm"),onChange:_=>i("cipher",_.target.value),children:Jx.map(_=>t.jsx("option",{value:_,children:_},_))})]}),h==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.hysteriaConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ie(s,"up_mbps","0"),onChange:_=>i("up_mbps",Number(_.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ie(s,"down_mbps","0"),onChange:_=>i("down_mbps",Number(_.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.obfsMethod")}),t.jsxs("select",{className:"config-input",value:Ie(s,"obfs"),onChange:_=>i("obfs",_.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"salamander",children:"salamander"})]})]}),Ie(s,"obfs")==="salamander"?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ie(s,"obfs_password"),onChange:_=>i("obfs_password",_.target.value),placeholder:m("node.autoGenHelp")})]}):null]})]}),h==="tuic"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.tuicConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ie(s,"udp_relay_mode","native"),onChange:_=>i("udp_relay_mode",_.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ie(s,"congestion_control","bbr"),onChange:_=>i("congestion_control",_.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(ea,{label:m("node.disableSni"),checked:s.disable_sni===1,onChange:_=>i("disable_sni",_?1:0)}),t.jsx(ea,{label:m("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:_=>i("zero_rtt_handshake",_?1:0)})]}),h==="anytls"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.paddingScheme"),actionText:m("node.editConfig"),onAction:()=>o(m("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const Xf={vmess:o0,vless:x0,trojan:qd,shadowsocks:eu,hysteria:a0,tuic:qv,anytls:ys,v2node:wf,zicnode:wf},nw={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},aw={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function li(s){return nw[s]??aw}function iw({draft:s,config:i,onCopy:o,t:d}){const u=Number(s.id??0),m=u>0?Qj(u,i):"",h=!i.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),u>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:m}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(m),children:[t.jsx(gs,{size:15}),d("node.copyInstallCommand")]}),h?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function lw(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState([]),[u,m]=f.useState([]),[h,k]=f.useState([]),[b,y]=f.useState(null),[w,S]=f.useState(null),[_,G]=f.useState(!0),[I,Y]=f.useState(!1),[A,Q]=f.useState(""),[q,O]=f.useState(""),[te,P]=f.useState(1),[ne,M]=f.useState(()=>zj()),[K,ie]=f.useState(!1),[ye,x]=f.useState({}),[T,W]=f.useState({apiHost:su,apiKey:""}),[$,le]=f.useState(!1),[v,L]=f.useState(""),[z,me]=f.useState(null),[se,C]=f.useState(null),[U,pe]=f.useState(null),ge=(H,oe)=>{H.dataTransfer.effectAllowed="move",C(oe)},ze=(H,oe)=>{if(H.preventDefault(),se===null||se===oe)return;const ee=[...o],Me=ee[se];ee.splice(se,1),ee.splice(oe,0,Me),C(oe),d(ee)},Ne=()=>{C(null)},qe=(H,oe)=>{K&&pe(oe)},R=H=>{if(!K||U===null)return;H.cancelable&&H.preventDefault();const oe=H.touches[0],ee=document.elementFromPoint(oe.clientX,oe.clientY);if(!ee)return;const Me=ee.closest(".mobile-node-card");if(!Me)return;const Ze=Me.getAttribute("data-index");if(Ze===null)return;const Fe=Number(Ze);if(Fe!==U&&Fe>=0&&Fe<o.length){const j=[...o],ce=j[U];j.splice(U,1),j.splice(Fe,0,ce),pe(Fe),d(j)}},fe=()=>{pe(null)};f.useEffect(()=>{P(1)},[v,ne]),f.useEffect(()=>{try{window.localStorage.setItem(Px,String(ne))}catch{}},[ne]);const he=o.filter(H=>{const oe=v.toLowerCase().trim();return oe?H.name.toLowerCase().includes(oe)||H.host.toLowerCase().includes(oe)||String(H.id).includes(oe)||H.type.toLowerCase().includes(oe):!0}),Le=Math.ceil(he.length/ne),ct=he.slice((te-1)*ne,te*ne);function ut(H,oe){return oe<=7?Array.from({length:oe},(ee,Me)=>Me+1):H<=4?[1,2,3,4,5,"...",oe]:H>=oe-3?[1,"...",oe-4,oe-3,oe-2,oe-1,oe]:[1,"...",H-1,H,H+1,"...",oe]}const nt=ut(te,Le),Ct=async()=>{var H,oe;Y(!0),Q(""),O("");try{const ee={};o.forEach((Me,Ze)=>{ee[Me.type]||(ee[Me.type]={}),ee[Me.type][String(Me.id)]=Ze+1}),await B1(ee),(H=window.showToast)==null||H.call(window,i("node.saveSortSuccess"),"success"),ie(!1),await we()}catch(ee){Q(ee instanceof Error?ee.message:i("node.saveSortFailed")),(oe=window.showToast)==null||oe.call(window,ee instanceof Error?ee.message:i("node.saveSortFailed"),"error")}finally{Y(!1)}},pt=async()=>{ie(!1),await Se()},Pt=()=>he.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:te===1,onClick:()=>P(H=>Math.max(H-1,1)),children:"<"}),nt.map((H,oe)=>H==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${oe}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${te===H?"active":""}`,onClick:()=>P(Number(H)),children:H},`page-${H}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:te===Le||Le===0,onClick:()=>P(H=>Math.min(H+1,Le)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsx("select",{className:"pagination-size-select",value:ne,onChange:H=>{const oe=Number(H.target.value);Wx(oe)&&M(oe)},children:Po.map(H=>t.jsxs("option",{value:H,children:[H," / ",i("common.perPage")]},H))})})]}),[vt,Ke]=f.useState(null),[$t,Ot]=f.useState(!1),[ke,Sn]=f.useState(""),[Ae,un]=f.useState(!1),[pn,Wt]=f.useState(!1);async function J(H){var ee,Me;H.preventDefault();const oe=ke.trim();if(!(!oe||!b)){un(!0),Q(""),O("");try{await nu({name:oe});const Ze=await bl();m(Ze);const Fe=Ze.filter(j=>j.name===oe).sort((j,ce)=>ce.id-j.id)[0];if(Fe){const j=b.group_id??[];j.includes(Fe.id)||hn("group_id",[...j,Fe.id])}Sn(""),Ot(!1),(ee=window.showToast)==null||ee.call(window,i("node.groupCreateSuccess"),"success")}catch(Ze){Q(Ze instanceof Error?Ze.message:i("node.groupCreateFailed")),(Me=window.showToast)==null||Me.call(window,Ze instanceof Error?Ze.message:i("node.groupCreateFailed"),"error")}finally{un(!1)}}}const De=(H,oe)=>{if(!b)return;let ee=b[oe];if(typeof ee=="string"&&ee.trim())try{ee=JSON.parse(ee)}catch{}["tlsSettings","tls_settings"].includes(oe)&&In(String(b._type))&&(ee=oa(ee,Number(b.tls??0))),Ke({title:H,key:oe,value:ee&&typeof ee=="object"?ee:{}})},Se=f.useCallback(async()=>{var H,oe,ee,Me,Ze;G(!0),Q("");try{const[Fe,j,ce,ue]=await Promise.all([Ef(),bl(),Ux(),Dx()]);d(Fe.data),m(j),k(ce);const Ce=Bf((H=ue.site)==null?void 0:H.app_url);W({apiHost:Bf((oe=ue.server)==null?void 0:oe.server_api_url,Ce),apiKey:kt((ee=ue.server)==null?void 0:ee.server_token)}),le(ou(((Me=ue.subscribe)==null?void 0:Me.device_hwid_available)??((Ze=ue.subscribe)==null?void 0:Ze.device_hwid_enable)))}catch(Fe){Q(Fe instanceof Error?Fe.message:i("knowledge.loadFailed"))}finally{G(!1)}},[]),we=f.useCallback(async()=>{try{const H=await Ef();d(H.data)}catch(H){console.error("Refresh nodes failed",H)}},[]);async function Je(H){var ee;const oe=await ui(H);(ee=window.showToast)==null||ee.call(window,i(oe?"node.installCopied":"common.copyFailed"),oe?"success":"error")}f.useEffect(()=>{if(!Bt()){s.replace("/login");return}Se()},[Se,s]);function Be(H){y(Yf(H)),S(null),Q(""),O("")}function Ye(H){y(Yf(H.type,H)),Q(""),O("")}function Ve(H){!$||Number(H.online??0)<=0||s.push(`/device?node_type=${encodeURIComponent(H.type)}&node_id=${encodeURIComponent(String(H.id))}`)}function st(H,oe){const ee=Number(H.online??0),Me=$&&ee>0,Ze=`${oe==="mobile"?"mobile-badge-pill":"online-badge"}${Me?" online-badge-link":""}`,Fe=oe==="mobile"?12:13,j={...oe==="mobile"?{marginRight:4}:{},color:ee>0?"#10b981":"var(--muted)",opacity:ee>0?1:.6},ce=t.jsxs(t.Fragment,{children:[t.jsx(Ex,{size:Fe,style:j}),ee]});return Me?t.jsx("button",{className:Ze,type:"button",title:i("node.viewOnlineDevices"),onClick:()=>Ve(H),children:ce}):t.jsx("span",{className:Ze,children:ce})}async function mn(H){var Fe,j,ce;if(H.preventDefault(),!b)return;Y(!0),Q(""),O("");const oe=String(b._type),ee={...b};if(In(oe)&&!kt(ee.protocol)){Q(i("node.protocolRequired")),(Fe=window.showToast)==null||Fe.call(window,i("node.protocolRequired"),"error"),Y(!1);return}for(const ue of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete ee[ue];if(ee.padding_scheme!==void 0&&ee.padding_scheme!==null&&typeof ee.padding_scheme!="string"&&(ee.padding_scheme=JSON.stringify(ee.padding_scheme)),ee.padding_scheme)try{const ue=JSON.parse(String(ee.padding_scheme));if(typeof ue!="object"||ue===null)throw new Error("Invalid JSON array or object")}catch(ue){Q("Invalid Padding Scheme configuration: "+(ue instanceof Error?ue.message:"JSON error")),Y(!1);return}const Me=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const ue of Me)(ee[ue]===""||ee[ue]===null||ee[ue]===void 0)&&delete ee[ue];if(In(oe)){const ue=String(ee.protocol??""),Ce=Number(ee.tls??0);ee.warp_settings=er(ee.warp_settings),Wo(ue)?Jo.includes(ue)&&Ce!==2||!Io(ue)&&Ce===2?(ee.tls=1,ee.tls_settings=oa(ee.tls_settings,1)):ee.tls_settings=oa(ee.tls_settings,Ce):(ee.tls=0,ee.tls_settings={})}const Ze=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings","warp_settings"];for(const ue of Ze){const Ce=ee[ue];(Ce==null||typeof Ce=="object"&&Object.keys(Ce).length===0)&&delete ee[ue]}ee.port!==void 0&&(ee.port=String(ee.port).trim()),ee.server_port!==void 0&&(ee.server_port=Number(ee.server_port)),ee.tls!==void 0&&(ee.tls=Number(ee.tls)),ee.rate!==void 0&&(ee.rate=Number(ee.rate));try{await U1(oe,ee),y(null),(j=window.showToast)==null||j.call(window,i("node.saveSuccess"),"success"),await we()}catch(ue){Q(ue instanceof Error?ue.message:i("node.saveFailed")),(ce=window.showToast)==null||ce.call(window,ue instanceof Error?ue.message:i("node.saveFailed"),"error")}finally{Y(!1)}}async function Et(H){const oe=[...o];d(ee=>ee.map(Me=>Me.id===H.id&&Me.type===H.type?{...Me,show:H.show?0:1}:Me));try{await L1(H.type,H.id,H.show?0:1),await we()}catch(ee){d(oe),Q(ee instanceof Error?ee.message:i("node.updateFailed"))}}async function ta(H){var oe,ee;try{await q1(H.type,H.id),(oe=window.showToast)==null||oe.call(window,i("node.copySuccess"),"success"),await we()}catch(Me){Q(Me instanceof Error?Me.message:i("node.copyFailed")),(ee=window.showToast)==null||ee.call(window,Me instanceof Error?Me.message:i("node.copyFailed"),"error")}}async function Gt(H){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:i("node.deleteConfirm",{name:H.name}),onConfirm:async()=>{var Me,Ze;const ee=[...o];d(Fe=>Fe.filter(j=>!(j.id===H.id&&j.type===H.type))),Q("");try{await H1(H.type,H.id),(Me=window.showToast)==null||Me.call(window,i("node.deleteSuccess"),"success"),await we()}catch(Fe){d(ee),Q(Fe instanceof Error?Fe.message:i("node.deleteFailed")),(Ze=window.showToast)==null||Ze.call(window,Fe instanceof Error?Fe.message:i("node.deleteFailed"),"error")}}})}const hn=(H,oe)=>y(ee=>{if(!ee)return null;const Me={...ee,[H]:oe};if(!In(String(Me._type)))return Me;if(H==="tls_settings"&&(Me.tls_settings=oa(oe,Number(Me.tls??0))),H==="tls"&&(Me.tls_settings=oa(Me.tls_settings,Number(oe))),H==="warp_settings"&&(Me.warp_settings=er(oe)),H==="protocol"){const Ze=String(oe);Wo(Ze)?!Io(Ze)&&Number(Me.tls??0)===2?(Me.tls=1,Me.tls_settings=oa(Me.tls_settings,1)):Me.tls_settings=oa(Me.tls_settings,Number(Me.tls??0)):(Me.tls=0,Me.tls_settings={})}return Me}),Fn=b?String(b._type):"",fn=qj(Fn);return t.jsxs(Vt,{title:i("node.title"),subtitle:i("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>S(w?null:"show"),title:i("node.createNode"),children:t.jsx(On,{size:18})}),w!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>S(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Xd.map(H=>{const oe=li(H.value),ee=Xf[H.value]||Ko;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Be(H.value),S(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:oe==null?void 0:oe.bg,backgroundColor:oe==null?void 0:oe.rowBg},children:t.jsx(ee,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(oe==null?void 0:oe.bg)??"var(--surface-soft)",color:(oe==null?void 0:oe.text)??"#ffffff"},children:H.label})]},H.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:v,onChange:H=>L(H.target.value),placeholder:`${i("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${K?"success-btn":""}`,type:"button",onClick:K?Ct:()=>ie(!0),disabled:I,children:i(K?I?"node.saving":"node.saveOrder":"node.editSortOrder")}),K&&t.jsx("button",{className:"ghost-button",type:"button",onClick:pt,children:i("common.cancel")})]})]}),A?t.jsx("div",{className:"form-error",children:A}):null,q?t.jsx("div",{className:"form-success",children:q}):null,_&&o.length===0?t.jsx(bt,{label:i("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[i("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",i("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",i("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",i("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:i("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:i("node.address")}),t.jsx("th",{className:"mobile-hide",children:i("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:i("node.colRate")}),t.jsx("th",{children:i("node.colGroups")}),t.jsx("th",{children:i(K?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[ct.map(H=>{const oe=o.findIndex(ee=>ee.id===H.id&&ee.type===H.type);return t.jsxs("tr",{draggable:K,onDragStart:ee=>ge(ee,oe),onDragOver:ee=>ze(ee,oe),onDragEnd:Ne,className:se===oe?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:li(H.type).bg,color:li(H.type).text,border:`1px solid ${li(H.type).border}`},children:H.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${H.show?"active":""}`,type:"button",onClick:()=>void Et(H),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${H.available_status??0}`,title:H.available_status===2?i("node.statusNormal"):H.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("strong",{children:H.name})]})}),t.jsx("td",{children:st(H,"desktop")}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:H.host})}),t.jsx("td",{className:"mobile-hide",children:String(H.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[H.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const ee=H.group_id??[],Me=ye[`${H.type}-${H.id}`],Ze=ee.map(ce=>{const ue=u.find(Ce=>Number(Ce.id)===Number(ce));return t.jsx("span",{className:"tag",children:(ue==null?void 0:ue.name)??`#${ce}`},ce)});if(ee.length<=3||Me)return t.jsxs(t.Fragment,{children:[Ze,ee.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>x(ce=>({...ce,[`${H.type}-${H.id}`]:!1})),children:i("node.collapse")})]});const Fe=Ze.slice(0,3),j=ee.length-3;return t.jsxs(t.Fragment,{children:[Fe,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>x(ce=>({...ce,[`${H.type}-${H.id}`]:!0})),children:["+",j,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:i("node.allPermissionGroups",{count:ee.length})}),Ze]})]})]})})()})}),t.jsx("td",{children:K?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(ms,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(z==null?void 0:z.id)===H.id&&(z==null?void 0:z.type)===H.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>me((z==null?void 0:z.id)===H.id&&(z==null?void 0:z.type)===H.type?null:{id:H.id,type:H.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(z==null?void 0:z.id)===H.id&&(z==null?void 0:z.type)===H.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>me(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ye(H),me(null)},children:[t.jsx(Jt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ta(H),me(null)},children:[t.jsx(gs,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Gt(H),me(null)},children:[t.jsx(nn,{size:14})," ",i("common.delete")]})]})]})]})})]},`${H.type}-${H.id}`)}),!_&&he.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")})})}):null]})]})}),Pt()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>S(w?null:"show"),title:i("node.createNode"),children:t.jsx(On,{size:20})}),w!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>S(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Xd.map(H=>{const oe=li(H.value),ee=Xf[H.value]||Ko;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Be(H.value),S(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:oe==null?void 0:oe.bg,backgroundColor:oe==null?void 0:oe.rowBg},children:t.jsx(ee,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(oe==null?void 0:oe.bg)??"var(--surface-soft)",color:(oe==null?void 0:oe.text)??"#ffffff"},children:H.label})]},H.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:v,onChange:H=>L(H.target.value),placeholder:`${i("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${K?"active":""}`,type:"button",onClick:()=>ie(!K),title:i("node.editSortOrder"),children:t.jsx(ms,{size:20})})]}),K&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:i("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:pt,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void Ct(),disabled:I,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i(I?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[ct.map(H=>{const oe=o.findIndex(ee=>ee.id===H.id&&ee.type===H.type);return t.jsxs("div",{className:`mobile-node-card ${se===oe||U===oe?"dragging":""}`,draggable:K,onDragStart:ee=>ge(ee,oe),onDragOver:ee=>ze(ee,oe),onDragEnd:Ne,onTouchStart:ee=>qe(ee,oe),onTouchMove:R,onTouchEnd:fe,"data-index":oe,style:K?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${H.available_status??0}`,title:H.available_status===2?i("node.statusNormal"):H.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:H.name})]}),t.jsx("div",{className:"card-header-right",children:K?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(ms,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${H.show===1?"active":""}`,onClick:()=>void Et(H),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(z==null?void 0:z.id)===H.id&&(z==null?void 0:z.type)===H.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>me((z==null?void 0:z.id)===H.id&&(z==null?void 0:z.type)===H.type?null:{id:H.id,type:H.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(z==null?void 0:z.id)===H.id&&(z==null?void 0:z.type)===H.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>me(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ye(H),me(null)},children:[t.jsx(Jt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ta(H),me(null)},children:[t.jsx(gs,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Gt(H),me(null)},children:[t.jsx(nn,{size:14})," ",i("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[H.host,":",H.port||H.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:li(H.type).bg,color:li(H.type).text,border:`1px solid ${li(H.type).border}`},children:H.id}),st(H,"mobile"),t.jsxs("span",{className:"mobile-badge-pill",children:[H.rate," x"]})]})]},`${H.type}-${H.id}`)}),!_&&he.length===0&&t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")}),Pt()]}),b!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:b.id?i("node.editNodeTitle",{type:fn}):i("node.createNodeTitle",{type:fn})}),t.jsx("p",{children:i("node.configureFieldsSubtitle",{type:fn})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>y(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:mn,children:[t.jsx(Kj,{draft:b,set:hn,groups:u,routes:h,nodes:o,onOpenJson:De,onAddGroup:()=>Ot(!0),onOpenTransportConfig:()=>Wt(!0)}),In(Fn)?t.jsx(iw,{draft:b,config:T,onCopy:H=>void Je(H),t:i}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>y(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(Rn,{size:16}),i(I?"node.saving":"common.save")]})]})]})]})}),vt!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:vt.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(vt.key)?i("node.connectionSecurityEditorSubtitle"):i("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ke(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(vt.key)?t.jsx(Zj,{initialValue:vt.value,isSnakeCase:vt.key==="tls_settings",tlsMode:Uj(b),nodeType:String((b==null?void 0:b._type)??""),onCancel:()=>Ke(null),onSave:H=>{hn(vt.key,H),Ke(null)}}):t.jsx(eg,{initialValue:vt.value,onCancel:()=>Ke(null),onSave:H=>{hn(vt.key,H),Ke(null)}})})]})}),$t&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.addNewGroupTitle")}),t.jsx("p",{children:i("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ot(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{onSubmit:J,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:i("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:ke,onChange:H=>Sn(H.target.value),placeholder:i("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Ot(!1),disabled:Ae,children:i("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Ae||!ke.trim(),children:i(Ae?"node.saving":"common.confirm")})]})]})]})}),pn&&b!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.transportConfigTitle",{network:String(b.network??"tcp").toUpperCase()})}),t.jsx("p",{children:i("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Wt(!1),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(Fj,{draft:b,set:hn,onCancel:()=>Wt(!1),onSave:()=>Wt(!1)})})]})})]})}function sw(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,k]=f.useState(!0),[b,y]=f.useState(!1),[w,S]=f.useState(""),_=f.useCallback(async()=>{k(!0),S("");try{d(await bl())}catch(A){S(A instanceof Error?A.message:i("serverGroup.loadFailed"))}finally{k(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}_()},[_,s]);function G(A){m({id:A==null?void 0:A.id,name:(A==null?void 0:A.name)??""}),S("")}async function I(A){var Q;if(A.preventDefault(),!!u){y(!0),S("");try{await nu(u),m(null),(Q=window.showToast)==null||Q.call(window,i("serverGroup.saveSuccess"),"success"),await _()}catch(q){S(q instanceof Error?q.message:i("serverGroup.saveFailed"))}finally{y(!1)}}}async function Y(A){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:i("serverGroup.deleteConfirm"),onConfirm:async()=>{var q,O;S("");try{await G0(A),(q=window.showToast)==null||q.call(window,i("serverGroup.deleteSuccess"),"success"),await _()}catch(te){S(te instanceof Error?te.message:i("serverGroup.deleteFailed")),(O=window.showToast)==null||O.call(window,te instanceof Error?te.message:i("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(Vt,{title:i("serverGroup.title"),subtitle:i("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverGroup.heading")}),t.jsx("p",{children:i("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:_,disabled:h,children:[t.jsx(Dt,{size:16}),i(h?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>G(),children:[t.jsx(On,{size:16}),i("serverGroup.add")]})]})]}),w?t.jsx("div",{className:"form-error",children:w}):null,h&&o.length===0?t.jsx(bt,{label:i("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverGroup.id")}),t.jsx("th",{children:i("serverGroup.name")}),t.jsx("th",{children:i("serverGroup.userCount")}),t.jsx("th",{children:i("serverGroup.serverCount")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:A.id}),t.jsx("td",{children:t.jsx("strong",{children:A.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Fo,{size:14}),A.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Ko,{size:14}),A.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>G(A),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Y(A.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},A.id)),!h&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:i("serverGroup.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?i("serverGroup.edit"):i("serverGroup.add")}),t.jsx("p",{children:i("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:I,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:u.name,onChange:A=>m({...u,name:A.target.value}),placeholder:i("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(Rn,{size:16}),i(b?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function ow(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function rw(s){var i;return((i=Rx.find(o=>o.value===s))==null?void 0:i.label)??s}function cw(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,k]=f.useState(!0),[b,y]=f.useState(!1),[w,S]=f.useState(""),_=f.useCallback(async()=>{k(!0),S("");try{d(await Ux())}catch(A){S(A instanceof Error?A.message:i("serverRoute.loadFailed"))}finally{k(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}_()},[_,s]);function G(A){m(ow(A)),S("")}async function I(A){var q;if(A.preventDefault(),!u)return;y(!0),S("");const Q=u.action==="default_out"?[]:u.match.split(`
`).map(O=>O.trim()).filter(Boolean);try{await Y0({id:u.id,remarks:u.remarks,match:Q,action:u.action,action_value:u.action_value||null}),m(null),(q=window.showToast)==null||q.call(window,i("serverRoute.saveSuccess"),"success"),await _()}catch(O){S(O instanceof Error?O.message:i("serverRoute.saveFailed"))}finally{y(!1)}}async function Y(A){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:i("serverRoute.deleteConfirm"),onConfirm:async()=>{var q,O;S("");try{await Q0(A),(q=window.showToast)==null||q.call(window,i("serverRoute.deleteSuccess"),"success"),await _()}catch(te){S(te instanceof Error?te.message:i("serverRoute.deleteFailed")),(O=window.showToast)==null||O.call(window,te instanceof Error?te.message:i("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(Vt,{title:i("serverRoute.title"),subtitle:i("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverRoute.heading")}),t.jsx("p",{children:i("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:_,disabled:h,children:[t.jsx(Dt,{size:16}),i(h?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>G(),children:[t.jsx(On,{size:16}),i("serverRoute.add")]})]})]}),w?t.jsx("div",{className:"form-error",children:w}):null,h&&o.length===0?t.jsx(bt,{label:i("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverRoute.id")}),t.jsx("th",{children:i("serverRoute.remarks")}),t.jsx("th",{children:i("serverRoute.matchValues")}),t.jsx("th",{children:i("serverRoute.action")}),t.jsx("th",{children:i("serverRoute.actionValue")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:A.id}),t.jsx("td",{children:t.jsx("strong",{children:A.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(A.match)?A.match:[]).slice(0,3).map((Q,q)=>t.jsx("span",{className:"tag",children:Q},q)),Array.isArray(A.match)&&A.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",A.match.length-3]}):null,!Array.isArray(A.match)||A.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:rw(A.action)})}),t.jsx("td",{children:A.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>G(A),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Y(A.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},A.id)),!h&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("serverRoute.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?i("serverRoute.edit"):i("serverRoute.add")}),t.jsx("p",{children:i("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:I,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:u.remarks,onChange:A=>m({...u,remarks:A.target.value}),placeholder:i("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.action")}),t.jsx("select",{className:"config-input",value:u.action,onChange:A=>m({...u,action:A.target.value}),children:Rx.map(A=>t.jsx("option",{value:A.value,children:A.label},A.value))})]}),u.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:u.match,onChange:A=>m({...u,match:A.target.value}),placeholder:i("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:u.action_value,onChange:A=>m({...u,action_value:A.target.value}),placeholder:i("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(Rn,{size:16}),i(b?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function dw(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",allow_subscribe_url:(s==null?void 0:s.allow_subscribe_url)===0?"0":"1",force_update:!1}}function uw(s){const i=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:i(s.month_price),quarter_price:i(s.quarter_price),half_year_price:i(s.half_year_price),year_price:i(s.year_price),two_year_price:i(s.two_year_price),three_year_price:i(s.three_year_price),onetime_price:i(s.onetime_price),reset_price:i(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),allow_subscribe_url:s.allow_subscribe_url==="0"?0:1,force_update:s.force_update}}function dn(s){return s==null?"—":Nn(s)}function pw(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function mw(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState([]),[u,m]=f.useState([]),[h,k]=f.useState(null),[b,y]=f.useState(!0),[w,S]=f.useState(!1),[_,G]=f.useState(""),[I,Y]=f.useState(""),[A,Q]=f.useState(!1),[q,O]=f.useState(""),[te,P]=f.useState(!1),[ne,M]=f.useState(null),[K,ie]=f.useState(null),ye=(R,fe)=>{R.dataTransfer.effectAllowed="move",M(fe)},x=(R,fe)=>{if(R.preventDefault(),ne===null||ne===fe)return;const he=[...o],Le=he[ne];he.splice(ne,1),he.splice(fe,0,Le),M(fe),d(he)},T=async()=>{M(null);try{await zf(o.map(R=>R.id)),await v()}catch(R){G(R instanceof Error?R.message:i("plan.sortFailed")),await v()}},W=(R,fe)=>{ie(fe)},$=R=>{if(K===null)return;const fe=R.touches[0],he=document.elementFromPoint(fe.clientX,fe.clientY);if(!he)return;const Le=he.closest("tr, [data-index]");if(!Le)return;const ct=Le.getAttribute("data-index");if(ct===null)return;const ut=Number(ct);if(ut!==K&&ut>=0&&ut<o.length){const nt=[...o],Ct=nt[K];nt.splice(K,1),nt.splice(ut,0,Ct),ie(ut),d(nt)}},le=async()=>{if(K!==null){ie(null);try{await zf(o.map(R=>R.id)),await v()}catch(R){G(R instanceof Error?R.message:i("plan.sortFailed")),await v()}}},v=f.useCallback(async()=>{y(!0),G("");try{const[R,fe]=await Promise.all([fi(),bl()]);d(R),m(fe)}catch(R){G(R instanceof Error?R.message:i("plan.loadFailed"))}finally{y(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}v()},[v,s]);function L(){k(null),Q(!1),O("")}function z(R){k(dw(R)),Q(!1),O(""),G(""),Y("")}async function me(R){var fe,he;if(R.preventDefault(),!!h){S(!0),G(""),Y("");try{await X0(uw(h)),L(),(fe=window.showToast)==null||fe.call(window,i("plan.saveSuccess"),"success"),await v()}catch(Le){(he=window.showToast)==null||he.call(window,Le instanceof Error?Le.message:i("plan.saveFailed"),"error")}finally{S(!1)}}}async function se(R,fe){var he;try{await yd(R,{show:fe?0:1}),await v()}catch(Le){(he=window.showToast)==null||he.call(window,Le instanceof Error?Le.message:i("plan.toggleFailed"),"error")}}async function C(R,fe){var he;try{await yd(R,{renew:fe?0:1}),await v()}catch(Le){(he=window.showToast)==null||he.call(window,Le instanceof Error?Le.message:i("plan.toggleFailed"),"error")}}async function U(R,fe){var he;try{await yd(R,{allow_subscribe_url:fe?0:1}),await v()}catch(Le){(he=window.showToast)==null||he.call(window,Le instanceof Error?Le.message:i("plan.toggleFailed"),"error")}}async function pe(R){var fe;(fe=window.showConfirm)==null||fe.call(window,{message:i("plan.deleteConfirm"),onConfirm:async()=>{var he,Le;G(""),Y("");try{await Z0(R),(he=window.showToast)==null||he.call(window,i("plan.deleteSuccess"),"success"),await v()}catch(ct){(Le=window.showToast)==null||Le.call(window,ct instanceof Error?ct.message:i("plan.deleteFailed"),"error")}}})}function ge(R){var fe;return((fe=u.find(he=>he.id===R))==null?void 0:fe.name)??`#${R}`}function ze(R){return Number(R.allow_subscribe_url??1)===1}function Ne(R,fe){k(he=>he&&{...he,[R]:fe})}async function qe(R){var he,Le;R.preventDefault();const fe=q.trim();if(!(!fe||!h)){P(!0),G(""),Y("");try{await nu({name:fe});const ct=await bl();m(ct);const ut=ct.filter(nt=>nt.name===fe).sort((nt,Ct)=>Ct.id-nt.id)[0];ut&&Ne("group_id",String(ut.id)),O(""),Q(!1),(he=window.showToast)==null||he.call(window,i("node.groupCreateSuccess"),"success")}catch(ct){const ut=ct instanceof Error?ct.message:i("node.groupCreateFailed");G(ut),(Le=window.showToast)==null||Le.call(window,ut,"error")}finally{P(!1)}}}return t.jsxs(Vt,{title:i("plan.title"),subtitle:i("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("plan.heading")}),t.jsx("p",{children:i("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,disabled:b,children:[t.jsx(Dt,{size:16}),i(b?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>z(),children:[t.jsx(On,{size:16}),i("plan.add")]})]})]}),_?t.jsx("div",{className:"form-error",children:_}):null,I?t.jsx("div",{className:"form-success",children:I}):null,b&&o.length===0?t.jsx(bt,{label:i("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:i("plan.show")}),t.jsx("th",{children:i("plan.renew")}),t.jsx("th",{children:i("plan.allowSubscribeUrl")}),t.jsx("th",{children:i("plan.name")}),t.jsx("th",{children:i("plan.users")}),t.jsx("th",{children:i("plan.group")}),t.jsx("th",{children:i("plan.pricing")}),t.jsx("th",{children:i("plan.traffic")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((R,fe)=>t.jsxs("tr",{draggable:!0,onDragStart:he=>ye(he,fe),onDragOver:he=>x(he,fe),onDragEnd:T,onTouchStart:he=>W(he,fe),onTouchMove:$,onTouchEnd:le,"data-index":fe,className:ne===fe||K===fe?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:i("plan.sort"),children:t.jsx(ms,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:R.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${R.show?"active":""}`,type:"button",onClick:he=>{he.stopPropagation(),se(R.id,R.show)},title:R.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${R.renew?"active":""}`,type:"button",onClick:he=>{he.stopPropagation(),C(R.id,R.renew)},title:R.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${ze(R)?"active":""}`,type:"button",onClick:he=>{he.stopPropagation(),U(R.id,ze(R)?1:0)},title:ze(R)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:R.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Fo,{size:14}),R.count??0]})}),t.jsx("td",{children:ge(R.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[R.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:dn(R.month_price)})]}),R.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:dn(R.quarter_price)})]}),R.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:dn(R.half_year_price)})]}),R.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:dn(R.year_price)})]}),R.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:dn(R.two_year_price)})]}),R.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:dn(R.three_year_price)})]}),R.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:dn(R.onetime_price)})]}),R.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:dn(R.reset_price)})]})]})}),t.jsxs("td",{children:[R.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:he=>{he.stopPropagation(),z(R)},children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:he=>{he.stopPropagation(),pe(R.id)},children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},R.id)),!b&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:i("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((R,fe)=>t.jsxs("div",{className:`mobile-node-card ${ne===fe||K===fe?"dragging":""}`,draggable:!0,onDragStart:he=>ye(he,fe),onDragOver:he=>x(he,fe),onDragEnd:T,onTouchStart:he=>W(he,fe),onTouchMove:$,onTouchEnd:le,"data-index":fe,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:i("plan.sort"),children:t.jsx(ms,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:R.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:R.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:he=>{he.stopPropagation(),z(R)},children:[t.jsx(Jt,{size:12}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:he=>{he.stopPropagation(),pe(R.id)},children:[t.jsx(nn,{size:12}),i("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.show")}),t.jsx("button",{className:`admin-switch ${R.show?"active":""}`,type:"button",onClick:he=>{he.stopPropagation(),se(R.id,R.show)},title:R.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.renew")}),t.jsx("button",{className:`admin-switch ${R.renew?"active":""}`,type:"button",onClick:he=>{he.stopPropagation(),C(R.id,R.renew)},title:R.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.allowSubscribeUrl")}),t.jsx("button",{className:`admin-switch ${ze(R)?"active":""}`,type:"button",onClick:he=>{he.stopPropagation(),U(R.id,ze(R)?1:0)},title:ze(R)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(Fo,{size:12,style:{marginRight:4}}),R.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:ge(R.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[R.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[R.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:dn(R.month_price)})]}),R.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:dn(R.quarter_price)})]}),R.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:dn(R.half_year_price)})]}),R.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:dn(R.year_price)})]}),R.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:dn(R.two_year_price)})]}),R.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:dn(R.three_year_price)})]}),R.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:dn(R.onetime_price)})]}),R.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:dn(R.reset_price)})]})]})]},R.id)),!b&&o.length===0?t.jsx("div",{className:"empty-state",children:i("plan.empty")}):null]}),h?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:h.id?i("plan.edit"):i("plan.add")}),t.jsx("p",{children:i("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:L,children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:me,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:R=>Ne("name",R.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:h.content,onChange:R=>Ne("content",R.target.value),placeholder:i("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[i("plan.group"),t.jsx("button",{type:"button",onClick:()=>Q(!0),style:{border:0,background:"transparent",color:"var(--accent)",padding:0,font:"inherit",fontSize:12,fontWeight:800,cursor:"pointer"},children:i("node.addGroup")})]}),t.jsxs("select",{className:"config-input",required:!0,value:h.group_id,onChange:R=>Ne("group_id",R.target.value),children:[t.jsx("option",{value:"",children:i("plan.selectGroup")}),u.map(R=>t.jsx("option",{value:R.id,children:R.name},R.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:h.transfer_enable,onChange:R=>Ne("transfer_enable",R.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:h.device_limit,onChange:R=>Ne("device_limit",R.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:h.speed_limit,onChange:R=>Ne("speed_limit",R.target.value),placeholder:i("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:h.capacity_limit,onChange:R=>Ne("capacity_limit",R.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:h.reset_traffic_method,onChange:R=>Ne("reset_traffic_method",R.target.value),children:pw(i).map(R=>t.jsx("option",{value:R.value,children:R.label},R.value))})]})]}),t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:h.allow_subscribe_url==="1",onChange:R=>Ne("allow_subscribe_url",R.target.checked?"1":"0")}),t.jsx("span",{children:i("plan.allowSubscribeUrl")})]}),t.jsx("h3",{className:"form-section-title",children:i("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.month_price,onChange:R=>Ne("month_price",R.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.quarter_price,onChange:R=>Ne("quarter_price",R.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.half_year_price,onChange:R=>Ne("half_year_price",R.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.year_price,onChange:R=>Ne("year_price",R.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.two_year_price,onChange:R=>Ne("two_year_price",R.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.three_year_price,onChange:R=>Ne("three_year_price",R.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.onetime_price,onChange:R=>Ne("onetime_price",R.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.reset_price,onChange:R=>Ne("reset_price",R.target.value),placeholder:"—"})]})]}),h.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:h.force_update,onChange:R=>Ne("force_update",String(R.target.checked))}),t.jsx("span",{children:i("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:L,children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:w,children:[t.jsx(Rn,{size:16}),i(w?"plan.saving":"common.save")]})]})]})]})}):null,A&&h?t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.addNewGroupTitle")}),t.jsx("p",{children:i("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Q(!1),disabled:te,children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{onSubmit:qe,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:i("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:q,onChange:R=>O(R.target.value),placeholder:i("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Q(!1),disabled:te,children:i("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:te||!q.trim(),children:i(te?"node.saving":"common.confirm")})]})]})]})}):null]})}const Nd="模糊",Zf={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Kf={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Ff(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),u=String(i.getDate()).padStart(2,"0"),m=String(i.getHours()).padStart(2,"0"),h=String(i.getMinutes()).padStart(2,"0");return`${o}/${d}/${u} ${m}:${h}`}function Jf(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),u=String(i.getDate()).padStart(2,"0"),m=String(i.getHours()).padStart(2,"0"),h=String(i.getMinutes()).padStart(2,"0"),k=String(i.getSeconds()).padStart(2,"0");return`${o}-${d}-${u} ${m}:${h}:${k}`}function Vf(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Kn(s){return`${Nn(Number(s??0))} ₫`}const tg="adminzic_user_cache";function hw(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(tg);return s?JSON.parse(s):{}}catch{return{}}}function fw(s){if(!(typeof window>"u"))try{sessionStorage.setItem(tg,JSON.stringify(s))}catch{}}const xl=(s,i)=>`${s}:${i}`;function xw(){var Sn,Ae,un,pn,Wt;const s=qt(),i=ra(),{t:o}=Ge(),d=f.useCallback(J=>{switch(J){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${J}`,cls:""}}},[o]),u=f.useCallback(J=>{const De=`order.period.${J}`,Se=o(De);return Se===De?Kf[J]??J:Se},[o]),[m,h]=f.useState([]),[k,b]=f.useState([]),[y,w]=f.useState({}),[S,_]=f.useState(0),[G,I]=f.useState(1),[Y]=f.useState(15),[A,Q]=f.useState(""),[q,O]=f.useState("trade_no"),[te,P]=f.useState(!0),[ne,M]=f.useState(null),[K,ie]=f.useState(!1),[ye,x]=f.useState(""),[T,W]=f.useState(""),[$,le]=f.useState(null),[v,L]=f.useState(null),[z,me]=f.useState(!1),[se,C]=f.useState(null),[U,pe]=f.useState(!1),[ge,ze]=f.useState(()=>hw()),Ne=f.useCallback((J,De)=>{const Se=xl(De,J);L(null),le(we=>we===Se?null:Se)},[]),qe=f.useCallback((J,De)=>{const Se=xl(De,J);le(null),L(we=>we===Se?null:Se)},[]),R=f.useCallback(J=>{const De=Number(J.coupon_id??0);return De?y[De]??`#${De}`:null},[y]);f.useEffect(()=>{if(!$&&!v)return;const J=()=>{le(null),L(null)},De=we=>{const Je=we.target;Je!=null&&Je.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||J()},Se=we=>{we.key==="Escape"&&J()};return document.addEventListener("pointerdown",De),document.addEventListener("keydown",Se),()=>{document.removeEventListener("pointerdown",De),document.removeEventListener("keydown",Se)}},[$,v]),f.useEffect(()=>{const J=new Set;if(m.forEach(Se=>{Se.user_id&&!ge[Se.user_id]&&J.add(Se.user_id),Se.invite_user_id&&!ge[Se.invite_user_id]&&J.add(Se.invite_user_id)}),se&&(se.user_id&&!ge[se.user_id]&&J.add(se.user_id),se.invite_user_id&&!ge[se.invite_user_id]&&J.add(se.invite_user_id)),J.size===0)return;const De=Array.from(J);Promise.allSettled(De.map(async Se=>{try{const we=await Lx(Se);if(we&&we.data)return{id:Se,email:we.data.email,invite_user:we.data.invite_user}}catch(we){console.error(`Failed to fetch user ${Se}:`,we)}return null})).then(Se=>{const we={};Se.forEach(Je=>{var Be;if(Je.status==="fulfilled"&&Je.value){const Ye=Je.value;we[Ye.id]={email:Ye.email,invite_user_email:((Be=Ye.invite_user)==null?void 0:Be.email)||null},Ye.invite_user&&(we[Ye.invite_user.id]={email:Ye.invite_user.email})}}),Object.keys(we).length>0&&ze(Je=>{const Be={...Je,...we};return fw(Be),Be})})},[m,se,ge]);const fe={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},he=f.useCallback(async(J=1,De,Se)=>{var we,Je;P(!0),x("");try{let Be;if(De)if(Se==="email"){const st=(we=(await Yd(1,1,[{key:"email",condition:Nd,value:De}])).data)==null?void 0:we[0];if(!st){h([]),_(0),P(!1);return}Be=[{key:"user_id",condition:"=",value:String(st.id)}]}else if(Se==="invite_user_email"){const st=(Je=(await Yd(1,1,[{key:"email",condition:Nd,value:De}])).data)==null?void 0:Je[0];if(!st){h([]),_(0),P(!1);return}Be=[{key:"invite_user_id",condition:"=",value:String(st.id)}]}else Be=[{key:Se||"trade_no",condition:Se==="trade_no"||Se==="user_id"||Se==="invite_user_id"||Se==="plan_id"||Se==="status"?"=":Nd,value:De}];const Ye=await K0({current:J,pageSize:Y,filter:Be});h(Ye.data),_(Ye.total)}catch(Be){x(Be instanceof Error?Be.message:o("order.loadFailed"))}finally{P(!1)}},[Y,o]),Le=f.useCallback(J=>{const De=String(J);O("user_id"),Q(De),me(!0),I(1),he(1,De,"user_id")},[he]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}const J=new URLSearchParams(i.search),De=J.get("filter_email"),Se=J.get("invite_user_email"),we=J.get("user_id")||J.get("filter_user_id");let Je="",Be="trade_no";we?(Je=we,Be="user_id",O("user_id"),Q(we),me(!0)):De?(Je=De,Be="email",O("email"),Q(De),me(!0)):Se&&(Je=Se,Be="invite_user_email",O("invite_user_email"),Q(Se),me(!0)),he(1,Je,Be),fi().then(b).catch(()=>{}),Hx(1,1e3).then(Ye=>{const Ve={};Ye.data.forEach(st=>{Ve[st.id]=st.code}),w(Ve)}).catch(()=>{})},[he,s,i.search]);function ct(){I(1),he(1,A,q)}function ut(){Q(""),I(1),he(1)}function nt(J){I(J),he(J,A,q)}async function Ct(J){var De,Se;le(null),L(null),x(""),W("");try{await F0(J),(De=window.showToast)==null||De.call(window,o("order.paidSuccess"),"success"),await he(G,A,q)}catch(we){(Se=window.showToast)==null||Se.call(window,we instanceof Error?we.message:o("order.paidFailed"),"error")}}async function pt(J){var De,Se;le(null),L(null),x(""),W("");try{await J0(J),(De=window.showToast)==null||De.call(window,o("order.cancelSuccess"),"success"),await he(G,A,q)}catch(we){(Se=window.showToast)==null||Se.call(window,we instanceof Error?we.message:o("order.cancelFailed"),"error")}}async function Pt(J,De){var Se,we;le(null),L(null),x(""),W("");try{await V0(J,De),(Se=window.showToast)==null||Se.call(window,o("order.commissionSuccess"),"success"),await he(G,A,q)}catch(Je){(we=window.showToast)==null||we.call(window,Je instanceof Error?Je.message:o("order.commissionFailed"),"error")}}async function vt(J){C(J),pe(!0);try{const De=await P0(J.id);De&&De.data&&C(De.data)}catch(De){console.error("Failed to fetch order detail:",De)}finally{pe(!1)}}function Ke(){var J;M({email:"",plan_id:(J=k[0])!=null&&J.id?String(k[0].id):"",period:"month_price",total_amount:"0"}),x(""),W("")}async function $t(J){var De,Se;if(J.preventDefault(),!!ne){ie(!0),x(""),W("");try{await au({email:ne.email,plan_id:Number(ne.plan_id),period:ne.period,total_amount:Number(ne.total_amount)*100}),M(null),(De=window.showToast)==null||De.call(window,o("order.assignSuccess"),"success"),await he(G,A,q)}catch(we){(Se=window.showToast)==null||Se.call(window,we instanceof Error?we.message:o("order.assignFailed"),"error")}finally{ie(!1)}}}const Ot=Math.ceil(S/Y),ke=se?R(se):null;return t.jsxs(Vt,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${z?"active":""}`,type:"button",onClick:()=>me(!z),children:[t.jsx(bs,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ke,children:[t.jsx(On,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void he(G,A,q),disabled:te,children:[t.jsx(Dt,{size:16}),o(te?"common.refreshing":"common.refresh")]})]}),z&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:q,onChange:J=>O(J.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(ir,{size:16}),t.jsx("input",{className:"config-input search-input",value:A,onChange:J=>Q(J.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:J=>J.key==="Enter"&&ct()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:ct,children:[t.jsx(bs,{size:16}),o("order.filter")]}),A?t.jsxs("button",{className:"ghost-button",type:"button",onClick:ut,children:[t.jsx(lt,{size:16}),o("order.clearFilter")]}):null]}),ye?t.jsx("div",{className:"form-error",children:ye}):null,T?t.jsx("div",{className:"form-success",children:T}):null,te&&m.length===0?t.jsx(bt,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${te?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[m.map(J=>{var Ye;const De=d(J.status),Se=J.invite_user_id!==null,we=fe[J.commission_status]??{label:`#${J.commission_status}`,dotClass:"pending"},Je=R(J),Be=(Ye=ge[J.user_id])==null?void 0:Ye.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>vt(J),title:o("order.detailsTitle"),children:Vf(J.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",J.id]}),t.jsx("span",{className:"order-type-pill",children:Zf[J.type]??`#${J.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[Be?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Le(J.user_id),title:o("order.filterByUser"),children:Be}):t.jsxs("span",{className:"order-subline",children:["ID: ",J.user_id]}),t.jsx("strong",{className:"order-plan-name",children:J.plan_name??`Plan #${J.plan_id}`}),t.jsx("span",{className:"period-capsule",children:u(J.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Kn(J.total_amount)}),Je?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",Je]}):null,Number(J.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Kn(J.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${De.cls.replace("status-","")}`}),t.jsx("span",{children:De.label}),J.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ve=>{Ve.stopPropagation(),Ne(J.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(Ma,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),$===xl("desktop",J.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ve=>Ve.stopPropagation(),onClick:Ve=>Ve.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{le(null),Ct(J.trade_no)},children:[t.jsx(Do,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{le(null),pt(J.trade_no)},children:[t.jsx(Oi,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[Se?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Kn(J.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${we.dotClass}`}),t.jsx("span",{children:we.label}),J.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ve=>{Ve.stopPropagation(),qe(J.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(Ma,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),v===xl("desktop",J.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ve=>Ve.stopPropagation(),onClick:Ve=>Ve.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{L(null),Pt(J.trade_no,1)},children:[t.jsx(Do,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{L(null),Pt(J.trade_no,3)},children:[t.jsx(Oi,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Ff(J.created_at)})})]},J.trade_no)}),!te&&m.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),Ot>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:G<=1,onClick:()=>nt(G-1),children:t.jsx(Aa,{size:16})}),t.jsxs("span",{className:"page-info",children:[G," / ",Ot]}),t.jsx("button",{className:"mini-button",disabled:G>=Ot,onClick:()=>nt(G+1),children:t.jsx(Da,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[m.map(J=>{var mn;const De=d(J.status),Se=J.invite_user_id!==null,we=fe[J.invite_user_id!==null?J.commission_status:0]??{label:`#${J.commission_status}`,dotClass:"pending"},Je=(mn=ge[J.user_id])==null?void 0:mn.email,Be=R(J),Ye=xl("mobile",J.trade_no),Ve=xl("mobile",J.trade_no),st=$===Ye||v===Ve;return t.jsxs("div",{className:`mobile-order-card${st?" is-menu-open":""}`,children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>vt(J),children:Vf(J.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",J.id]})]}),t.jsx("div",{className:"mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${De.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:De.label}),J.status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Et=>{Et.stopPropagation(),Ne(J.trade_no,"mobile")},"aria-expanded":$===Ye,children:[o("order.markAs"),t.jsx(Ma,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),$===Ye&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Et=>Et.stopPropagation(),onClick:Et=>Et.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{le(null),Ct(J.trade_no)},children:[t.jsx(Do,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{le(null),pt(J.trade_no)},children:[t.jsx(Oi,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:Je?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Le(J.user_id),children:Je}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",J.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:Zf[J.type]??`#${J.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:J.plan_name??`Plan #${J.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:u(J.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Kn(J.total_amount)})]}),Be?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:Be})})]}):null,Number(J.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Kn(J.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:Se?t.jsx("strong",{children:Kn(J.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),Se&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsx("div",{className:"value mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${we.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:we.label}),J.commission_status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Et=>{Et.stopPropagation(),qe(J.trade_no,"mobile")},"aria-expanded":v===Ve,children:[o("order.markAs"),t.jsx(Ma,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),v===Ve&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Et=>Et.stopPropagation(),onClick:Et=>Et.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{L(null),Pt(J.trade_no,1)},children:[t.jsx(Do,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{L(null),Pt(J.trade_no,3)},children:[t.jsx(Oi,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Ff(J.created_at)})]})]})]},J.trade_no)}),!te&&m.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,Ot>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:G<=1,onClick:()=>nt(G-1),children:t.jsx(Aa,{size:16})}),t.jsxs("span",{className:"page-info",children:[G," / ",Ot]}),t.jsx("button",{className:"mini-button",disabled:G>=Ot,onClick:()=>nt(G+1),children:t.jsx(Da,{size:16})})]}):null]})]}),se?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>C(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:U?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(bt,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(Sn=ge[se.user_id])!=null&&Sn.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{C(null),Le(se.user_id)},title:"Filter by this user",children:ge[se.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",se.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:se.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:u(se.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(se.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:se.plan_name??`Plan #${se.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:se.callback_no||"-"})]}),ke?t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:ke})]}):null]}),se.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(Ae=ge[se.invite_user_id])!=null&&Ae.email||(un=ge[se.user_id])!=null&&un.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const J=String(se.invite_user_id);O("invite_user_id"),Q(J),me(!0),C(null),he(1,J,"invite_user_id")},title:"Filter by this inviter",children:((pn=ge[se.invite_user_id])==null?void 0:pn.email)||((Wt=ge[se.user_id])==null?void 0:Wt.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",se.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Kn(se.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(fe[se.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(fe[se.commission_status]??{label:`#${se.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Kn(se.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Kn(se.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Kn(se.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Kn(se.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Kn(se.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:Jf(se.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:Jf(se.updated_at)})]})]})]})})]})}):null,ne?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>M(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:$t,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:ne.email,onChange:J=>M({...ne,email:J.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:ne.plan_id,onChange:J=>M({...ne,plan_id:J.target.value}),children:k.map(J=>t.jsx("option",{value:J.id,children:J.name},J.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:ne.period,onChange:J=>M({...ne,period:J.target.value}),children:Object.entries(Kf).map(([J,De])=>t.jsx("option",{value:J,children:De},J))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:ne.total_amount,onChange:J=>M({...ne,total_amount:J.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>M(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:K,children:[t.jsx(Rn,{size:16}),o(K?"order.assigning":"order.assign")]})]})]})]})}):null]})}function Lo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function qo(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function Sd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function gw(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState([]),[u,m]=f.useState(0),[h,k]=f.useState(1),[b,y]=f.useState([]),[w,S]=f.useState(null),[_,G]=f.useState(!0),[I,Y]=f.useState(!1),[A,Q]=f.useState(""),[q,O]=f.useState(""),[te,P]=f.useState("");f.useEffect(()=>{w||P("")},[w]);const ne=f.useCallback(async(x=1)=>{G(!0),Q("");try{const T=await Hx(x,15);d(T.data),m(T.total)}catch(T){Q(T instanceof Error?T.message:i("coupon.loadFailed"))}finally{G(!1)}},[]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}ne(1),fi().then(y).catch(()=>{})},[ne,s]);async function M(x){var T,W;if(x.preventDefault(),!!w){Y(!0),Q(""),O("");try{const $=w.type==="1"?Math.round(Number(w.value)*100):Number(w.value);await W0({id:w.id,name:w.name,type:Number(w.type),value:$,code:w.code||void 0,started_at:Math.floor(new Date(w.started_at).getTime()/1e3),ended_at:Math.floor(new Date(w.ended_at).getTime()/1e3),limit_use:w.limit_use?Number(w.limit_use):null,limit_use_with_user:w.limit_use_with_user?Number(w.limit_use_with_user):null,limit_plan_ids:w.limit_plan_ids.length?w.limit_plan_ids:null,limit_period:w.limit_period.length?w.limit_period:null,generate_count:w.generate_count?Number(w.generate_count):void 0}),S(null),(T=window.showToast)==null||T.call(window,i("coupon.saveSuccess"),"success"),await ne(h)}catch($){(W=window.showToast)==null||W.call(window,$ instanceof Error?$.message:i("coupon.saveFailed"),"error")}finally{Y(!1)}}}async function K(x){var T;try{await e1(x),await ne(h)}catch(W){(T=window.showToast)==null||T.call(window,W instanceof Error?W.message:i("coupon.toggleFailed"),"error")}}async function ie(x){var T;(T=window.showConfirm)==null||T.call(window,{message:i("coupon.deleteConfirm"),onConfirm:async()=>{var W,$;try{await I0(x),(W=window.showToast)==null||W.call(window,i("coupon.deleteSuccess"),"success"),await ne(h)}catch(le){($=window.showToast)==null||$.call(window,le instanceof Error?le.message:i("coupon.deleteFailed"),"error")}}})}const ye=Math.ceil(u/15);return t.jsxs(Vt,{title:i("coupon.title"),subtitle:i("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("coupon.heading")}),t.jsxs("p",{children:[u," ",i("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void ne(h),disabled:_,children:[t.jsx(Dt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>S(Sd()),children:[t.jsx(On,{size:16}),i("coupon.add")]})]})]}),A?t.jsx("div",{className:"form-error",children:A}):null,q?t.jsx("div",{className:"form-success",children:q}):null,_&&o.length===0?t.jsx(bt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("coupon.name")}),t.jsx("th",{children:i("coupon.code")}),t.jsx("th",{children:i("coupon.type")}),t.jsx("th",{children:i("coupon.value")}),t.jsx("th",{children:i("coupon.usageLimit")}),t.jsx("th",{children:i("coupon.limitPlans")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("coupon.limitPeriods")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(x=>{var le,v;const T=(le=x.limit_plan_ids)==null?void 0:le.map(L=>{var z;return((z=b.find(me=>me.id===L))==null?void 0:z.name)||`#${L}`}).join(", "),W=qo(i),$=(v=x.limit_period)==null?void 0:v.map(L=>W[L]||L).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:x.id}),t.jsx("td",{children:t.jsx("strong",{children:x.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:x.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:x.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:x.type===1?Nn(x.value):`${x.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[i("coupon.maxUses"),": ",x.limit_use??"∞"]}),x.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[i("coupon.maxUses")," ",x.limit_use_with_user,"/",i("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[T?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[i("coupon.plans"),": ",T]})}):null,$?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[i("coupon.cycles"),": ",$]})}):null,!T&&!$?t.jsx("span",{className:"tag muted-tag",children:i("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${x.show?"active":""}`,type:"button",onClick:()=>void K(x.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[Lo(x.started_at)," — ",Lo(x.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>S(Sd(x)),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ie(x.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},x.id)}),!_&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(x=>{var T,W,$,le;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",x.id]}),t.jsx("span",{className:`tag type-tag ${x.type===1?"fixed-type":"percent-type"}`,children:x.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:x.name,children:x.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:i("coupon.clickToCopy"),onClick:()=>{ui(x.code).then(v=>{var L;(L=window.showToast)==null||L.call(window,v?`${i("coupon.copiedCode")}: ${x.code}`:i("common.copyFailed"),v?"success":"error")})},children:[t.jsx("code",{className:"mono",children:x.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(T=x.limit_plan_ids)!=null&&T.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:x.limit_plan_ids.map(v=>{const L=b.find(z=>z.id===v);return t.jsx("span",{className:"res-pill plan-pill",children:L?L.name:`#${v}`},v)})})]}):null,(W=x.limit_period)!=null&&W.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:x.limit_period.map(v=>t.jsx("span",{className:"res-pill cycle-pill",children:qo(i)[v]||v},v))})]}):null,!(($=x.limit_plan_ids)!=null&&$.length)&&!((le=x.limit_period)!=null&&le.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Lo(x.started_at)," — ",Lo(x.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:i("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${x.show?"active":""}`,type:"button",onClick:()=>void K(x.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:x.type===1?Nn(x.value).replace(/\s?₫/,""):`${x.value}`}),t.jsx("span",{className:"ticket-value-unit",children:x.type===1?"₫":i("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:x.limit_use??"∞"}),x.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[i("coupon.maxUses")," ",x.limit_use_with_user,"/",i("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>S(Sd(x)),"aria-label":i("common.edit"),children:t.jsx(Jt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ie(x.id),"aria-label":i("common.delete"),children:t.jsx(nn,{size:15})})]})]})]},x.id)}),!_&&o.length===0?t.jsx("div",{className:"empty-state",children:i("coupon.empty")}):null]}),ye>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:h<=1,onClick:()=>{k(h-1),ne(h-1)},children:t.jsx(Aa,{size:16})}),t.jsxs("span",{className:"page-info",children:[h," / ",ye]}),t.jsx("button",{className:"mini-button",disabled:h>=ye,onClick:()=>{k(h+1),ne(h+1)},children:t.jsx(Da,{size:16})})]}):null,w?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:w.id?i("coupon.edit"):i("coupon.add")}),t.jsx("p",{children:i("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:M,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:w.name,onChange:x=>S({...w,name:x.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.type")}),t.jsxs("select",{className:"config-input",value:w.type,onChange:x=>S({...w,type:x.target.value}),children:[t.jsx("option",{value:"1",children:i("coupon.type.fixed")}),t.jsx("option",{value:"2",children:i("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:w.value,onChange:x=>S({...w,value:x.target.value})})]})]}),w.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[i("coupon.code")," (",i("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:w.code,onChange:x=>S({...w,code:x.target.value}),placeholder:i("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:w.started_at,onChange:x=>S({...w,started_at:x.target.value}),onClick:x=>{var T,W;return(W=(T=x.currentTarget).showPicker)==null?void 0:W.call(T)},onFocus:x=>{var T,W;return(W=(T=x.currentTarget).showPicker)==null?void 0:W.call(T)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:w.ended_at,onChange:x=>S({...w,ended_at:x.target.value}),onClick:x=>{var T,W;return(W=(T=x.currentTarget).showPicker)==null?void 0:W.call(T)},onFocus:x=>{var T,W;return(W=(T=x.currentTarget).showPicker)==null?void 0:W.call(T)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:w.limit_use,onChange:x=>S({...w,limit_use:x.target.value}),placeholder:i("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:w.limit_use_with_user,onChange:x=>S({...w,limit_use_with_user:x.target.value}),placeholder:i("coupon.unlimited")})]})]}),w.id?null:t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:w.generate_count,onChange:x=>S({...w,generate_count:x.target.value}),placeholder:i("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPlans")}),w.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:w.limit_plan_ids.map(x=>{const T=b.find(W=>W.id===x);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const W=w.limit_plan_ids.filter($=>$!==x);S({...w,limit_plan_ids:W})},children:[T?T.name:`#${x}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},x)})}),b.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("coupon.searchPlans"),value:te,onChange:x=>P(x.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[b.filter(x=>x.name.toLowerCase().includes(te.toLowerCase())).map(x=>{const T=w.limit_plan_ids.includes(x.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:T,onChange:W=>{const $=W.target.checked?[...w.limit_plan_ids,x.id]:w.limit_plan_ids.filter(le=>le!==x.id);S({...w,limit_plan_ids:$})}}),t.jsx("span",{children:x.name})]},x.id)}),b.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPeriods")}),w.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:w.limit_period.map(x=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const T=w.limit_period.filter(W=>W!==x);S({...w,limit_period:T})},children:[qo(i)[x]||x," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},x))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(qo(i)).map(([x,T])=>{const W=w.limit_period.includes(x);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:W,onChange:$=>{const le=$.target.checked?[...w.limit_period,x]:w.limit_period.filter(v=>v!==x);S({...w,limit_period:le})}}),t.jsx("span",{children:T})]},x)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(Rn,{size:16}),i(I?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Bo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function bw(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function kd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function yw(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState([]),[u,m]=f.useState(0),[h,k]=f.useState(1),[b,y]=f.useState([]),[w,S]=f.useState(null),[_,G]=f.useState(!0),[I,Y]=f.useState(!1),[A,Q]=f.useState(""),[q,O]=f.useState(""),[te,P]=f.useState("");f.useEffect(()=>{w||P("")},[w]);const ne=bw(i),M=f.useCallback(async(x=1)=>{G(!0),Q("");try{const T=await t1(x,15);d(T.data),m(T.total)}catch(T){Q(T instanceof Error?T.message:i("giftcard.loadFailed"))}finally{G(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}M(1),fi().then(y).catch(()=>{})},[M,s]);async function K(x){var T,W;if(x.preventDefault(),!!w){Y(!0),Q(""),O("");try{const $=w.type==="1"?Math.round(Number(w.value)*100):Number(w.value);await n1({id:w.id,name:w.name,type:Number(w.type),value:$,code:w.code||void 0,started_at:Math.floor(new Date(w.started_at).getTime()/1e3),ended_at:Math.floor(new Date(w.ended_at).getTime()/1e3),limit_use:w.limit_use?Number(w.limit_use):null,plan_id:w.plan_id?Number(w.plan_id):null,generate_count:w.generate_count?Number(w.generate_count):void 0}),S(null),(T=window.showToast)==null||T.call(window,i("giftcard.saveSuccess"),"success"),await M(h)}catch($){(W=window.showToast)==null||W.call(window,$ instanceof Error?$.message:i("giftcard.saveFailed"),"error")}finally{Y(!1)}}}async function ie(x){var T;(T=window.showConfirm)==null||T.call(window,{message:i("giftcard.deleteConfirm"),onConfirm:async()=>{var W,$;try{await a1(x),(W=window.showToast)==null||W.call(window,i("giftcard.deleteSuccess"),"success"),await M(h)}catch(le){($=window.showToast)==null||$.call(window,le instanceof Error?le.message:i("giftcard.deleteFailed"),"error")}}})}const ye=Math.ceil(u/15);return t.jsxs(Vt,{title:i("giftcard.title"),subtitle:i("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("giftcard.heading")}),t.jsxs("p",{children:[u," ",i("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void M(h),disabled:_,children:[t.jsx(Dt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>S(kd()),children:[t.jsx(On,{size:16}),i("giftcard.add")]})]})]}),A?t.jsx("div",{className:"form-error",children:A}):null,q?t.jsx("div",{className:"form-success",children:q}):null,_&&o.length===0?t.jsx(bt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("giftcard.thId")}),t.jsx("th",{children:i("giftcard.thName")}),t.jsx("th",{children:i("giftcard.thCode")}),t.jsx("th",{children:i("giftcard.thType")}),t.jsx("th",{children:i("giftcard.thValue")}),t.jsx("th",{children:i("giftcard.thBoundPlan")}),t.jsx("th",{children:i("giftcard.thUses")}),t.jsx("th",{children:i("giftcard.thPeriod")}),t.jsx("th",{children:i("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(x=>{var T;return t.jsxs("tr",{children:[t.jsx("td",{children:x.id}),t.jsx("td",{children:t.jsx("strong",{children:x.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:x.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:ne[x.type]??x.type})}),t.jsx("td",{children:t.jsx("strong",{children:x.type===1?Nn(x.value):x.value})}),t.jsx("td",{children:x.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((T=b.find(W=>W.id===x.plan_id))==null?void 0:T.name)||`#${x.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:i("giftcard.planNone")})}),t.jsx("td",{children:x.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Bo(x.started_at)," — ",Bo(x.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>S(kd(x)),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ie(x.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},x.id)}),!_&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(x=>{var T;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",x.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:ne[x.type]??x.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:x.name,children:x.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:i("giftcard.clickToCopy"),onClick:()=>{ui(x.code).then(W=>{var $;($=window.showToast)==null||$.call(window,W?i("giftcard.copiedCode").replace("{code}",x.code):i("common.copyFailed"),W?"success":"error")})},children:[t.jsx("code",{className:"mono",children:x.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:x.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((T=b.find(W=>W.id===x.plan_id))==null?void 0:T.name)||`#${x.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Bo(x.started_at)," — ",Bo(x.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:x.type===1?Nn(x.value).replace(/\s?₫/,""):`${x.value}`}),t.jsx("span",{className:"ticket-value-unit",children:x.type===1?"₫":ne[x.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:x.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>S(kd(x)),"aria-label":i("common.edit"),children:t.jsx(Jt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ie(x.id),"aria-label":i("common.delete"),children:t.jsx(nn,{size:15})})]})]})]},x.id)}),!_&&o.length===0?t.jsx("div",{className:"empty-state",children:i("giftcard.empty")}):null]}),ye>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:h<=1,onClick:()=>{k(h-1),M(h-1)},children:t.jsx(Aa,{size:16})}),t.jsxs("span",{className:"page-info",children:[h," / ",ye]}),t.jsx("button",{className:"mini-button",disabled:h>=ye,onClick:()=>{k(h+1),M(h+1)},children:t.jsx(Da,{size:16})})]}):null,w?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:w.id?i("giftcard.edit"):i("giftcard.create")}),t.jsx("p",{children:i("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:K,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:w.name,onChange:x=>S({...w,name:x.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:w.type,onChange:x=>S({...w,type:x.target.value}),children:Object.entries(ne).map(([x,T])=>t.jsx("option",{value:x,children:T},x))})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:w.value,onChange:x=>S({...w,value:x.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:w.started_at,onChange:x=>S({...w,started_at:x.target.value}),onClick:x=>{var T,W;return(W=(T=x.currentTarget).showPicker)==null?void 0:W.call(T)},onFocus:x=>{var T,W;return(W=(T=x.currentTarget).showPicker)==null?void 0:W.call(T)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:w.ended_at,onChange:x=>S({...w,ended_at:x.target.value}),onClick:x=>{var T,W;return(W=(T=x.currentTarget).showPicker)==null?void 0:W.call(T)},onFocus:x=>{var T,W;return(W=(T=x.currentTarget).showPicker)==null?void 0:W.call(T)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:w.limit_use,onChange:x=>S({...w,limit_use:x.target.value}),placeholder:i("giftcard.placeholderUnlimited")})]}),w.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:w.generate_count,onChange:x=>S({...w,generate_count:x.target.value}),placeholder:i("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("giftcard.bindPlan")}),w.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const x=b.find(T=>String(T.id)===w.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{S({...w,plan_id:""})},children:[x?x.name:`#${w.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),b.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("giftcard.searchPlans"),value:te,onChange:x=>P(x.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!w.plan_id,onChange:()=>{S({...w,plan_id:""})}}),t.jsx("span",{children:i("giftcard.noneAllPlans")})]}),b.filter(x=>x.name.toLowerCase().includes(te.toLowerCase())).map(x=>{const T=String(x.id)===w.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:T,onChange:W=>{W.target.checked&&S({...w,plan_id:String(x.id)})}}),t.jsx("span",{children:x.name})]},x.id)}),b.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(Rn,{size:16}),i(I?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const cs="Tương đối",Ta="=";function $o(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function vw(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Pf(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function Cd(s){return+(s/1073741824).toFixed(2)}function zd(s){return Math.round(s*1073741824)}function Go(s){return(s/1073741824).toFixed(2)}function jw(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function gl(s){if(s===0)return"0.00 MB";const i=s/1073741824;return i<.1?`${(s/1048576).toFixed(2)} MB`:`${i.toFixed(2)} GB`}const Kd=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],ng="user_visible_columns";function ww(){if(typeof window<"u")try{const s=localStorage.getItem(ng);if(s)return new Set(JSON.parse(s))}catch{}return new Set(Kd.filter(s=>s.defaultVisible).map(s=>s.key))}const tr=[{value:"email",label:"Email",condition:cs,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:Ta,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:Ta,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:Ta,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:Ta,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:cs,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:Ta,placeholder:"12345"},{value:"uuid",label:"UUID",condition:cs,placeholder:"UUID"},{value:"token",label:"Token",condition:cs,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:cs,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:Ta,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:Ta,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:Ta,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:Ta,placeholder:"1780366403"}],_w=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function rn(s,i){switch(s){case"id":return i("user.colId");case"email":return i("user.colEmail");case"status":return i("user.colStatus");case"plan":return i("user.colPlan");case"group":return i("user.colGroup");case"used":return i("user.colUsed");case"traffic":return i("user.colTraffic");case"devices":return i("user.colDevices");case"expires":return i("user.colExpires");case"balance":return i("user.colBalance");case"commission":return i("user.colCommission");case"joined":return i("user.colJoined");case"actions":return i("user.colActions");default:return""}}function Nw(s,i){var u;const o=((u=tr.find(m=>m.value===s))==null?void 0:u.label)??s,d=m=>{const h=i(m);return h===m?o:h};switch(s){case"email":return i("user.filterEmail");case"id":return i("user.filterId");case"plan_id":return i("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return i("user.filterInviterEmail");case"invite_user_id":return i("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return i("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function Td(s){return tr.find(i=>i.value===s)??tr[0]}function Sw(s,i){switch(s){case"month_price":return i("order.period.month_price");case"quarter_price":return i("order.period.quarter_price");case"half_year_price":return i("order.period.half_year_price");case"year_price":return i("order.period.year_price");case"two_year_price":return i("order.period.two_year_price");case"three_year_price":return i("order.period.three_year_price");case"onetime_price":return i("order.period.onetime_price");case"reset_price":return i("order.period.reset_price");default:return""}}function kw(){const s=qt(),i=ra(),{t:o}=Ge(),[d,u]=f.useState([]),[m,h]=f.useState([]),[k,b]=f.useState([]),[y,w]=f.useState(0),[S,_]=f.useState(1),[G,I]=f.useState(""),[Y,A]=f.useState("email"),[Q,q]=f.useState(!0),[O,te]=f.useState(""),[P,ne]=f.useState(ww),[M,K]=f.useState(!1),ie=f.useRef(null),[ye,x]=f.useState(null),[T,W]=f.useState(null),[$,le]=f.useState(null),[v,L]=f.useState({}),[z,me]=f.useState(!1),[se,C]=f.useState(!1),[U,pe]=f.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[ge,ze]=f.useState(!1),[Ne,qe]=f.useState(null),[R,fe]=f.useState({plan_id:"",period:"month_price",total_amount:""}),[he,Le]=f.useState(!1),[ct,ut]=f.useState(null),[nt,Ct]=f.useState(null),[pt,Pt]=f.useState([]),[vt,Ke]=f.useState(0),[$t,Ot]=f.useState(1),[ke]=f.useState(10),[Sn,Ae]=f.useState(!1),[un,pn]=f.useState("");f.useEffect(()=>{function N(be){const ve=be.target instanceof Element?be.target:null;ye!==null&&(!ve||!ve.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(x(null),W(null)),M&&ie.current&&!ie.current.contains(be.target)&&K(!1)}return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[ye,M]),f.useEffect(()=>{if(ye===null)return;const N=()=>{x(null),W(null)};return window.addEventListener("resize",N),window.addEventListener("scroll",N,!0),()=>{window.removeEventListener("resize",N),window.removeEventListener("scroll",N,!0)}},[ye]);function Wt(N,be){if(ye===N){x(null),W(null);return}const ve=be.getBoundingClientRect(),Re=220,it=392,gn=6,Yt=8,na=Math.max(Yt,Math.min(window.innerWidth-Re-Yt,ve.right-Re)),Ra=ve.bottom+gn+it<=window.innerHeight-Yt?ve.bottom+gn:Math.max(Yt,ve.top-it-gn);W({top:Ra,left:na}),x(N)}function J(){x(null),W(null)}function De(N,be=!1,ve=""){const Re=it=>{J(),it()};return t.jsxs("div",{className:`action-dropdown-menu ${be?"action-dropdown-menu-fixed":""} ${ve}`.trim(),style:be&&T?{top:T.top,left:T.left}:void 0,onMouseDown:it=>it.stopPropagation(),children:[t.jsxs("button",{type:"button",onClick:()=>Re(()=>ca(N)),children:[t.jsx(Jt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>Re(()=>jt(N)),children:[t.jsx(Tx,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>Re(()=>void oe(N)),children:[t.jsx(Ea,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>Re(()=>Ze(N)),children:[t.jsx(Bd,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>Re(()=>ee(N)),children:[t.jsx(eu,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Re(()=>Fe(N)),children:[t.jsx(Qv,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>Re(()=>j(N)),children:[t.jsx(Ld,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Re(()=>ce(N)),children:[t.jsx(Fo,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Re(()=>Ce(N)),children:[t.jsx(_f,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Re(()=>Me(N)),children:[t.jsx(nn,{size:14}),o("user.actionDelete")]})]})}function Se(N){ne(be=>{const ve=new Set(be);ve.has(N)?ve.delete(N):ve.add(N);try{localStorage.setItem(ng,JSON.stringify([...ve]))}catch{}return ve})}const we=N=>P.has(N),Je=Kd.filter(N=>P.has(N.key)).length,Be=f.useCallback(async(N=1,be,ve)=>{q(!0),te("");try{const Re=be==null?void 0:be.trim(),it=Td(ve||"email"),gn=Re?[{key:it.value,condition:it.condition,value:Re}]:void 0,Yt=await Yd(N,15,gn);u(Yt.data),w(Yt.total)}catch(Re){te(Re instanceof Error?Re.message:o("user.loadFailed"))}finally{q(!1)}},[]),Ye=f.useCallback(async()=>{try{const[N,be]=await Promise.all([fi(),bl()]);h(N),b(be)}catch{}},[]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}const N=new URLSearchParams(i.search),ve=[["email",N.get("email")||N.get("filter_email")],["id",N.get("id")||N.get("user_id")||N.get("filter_user_id")],["plan_id",N.get("plan_id")],["invite_user_id",N.get("invite_user_id")],["invite_by_email",N.get("invite_by_email")],["uuid",N.get("uuid")],["token",N.get("token")],["remarks",N.get("remarks")]].find(([,Re])=>Re==null?void 0:Re.trim());if(ve){const[Re,it]=ve,gn=Td(Re),Yt=(it==null?void 0:it.trim())??"";A(gn.value),I(Yt),_(1),Be(1,Yt,gn.value)}else Be(1);Ye()},[Be,Ye,s,i.search]);function Ve(){_(1),Be(1,G,Y)}function st(){I(""),_(1),Be(1)}function mn(N){_(N),Be(N,G,Y)}function Et(N){if(N.plan_name)return N.plan_name;if(!N.plan_id)return"—";const be=m.find(ve=>ve.id===N.plan_id);return be?be.name:`#${N.plan_id}`}function ta(N){if(!N.group_id)return"—";const be=k.find(ve=>ve.id===N.group_id);return be?be.name:`#${N.group_id}`}function Gt(N,be){const ve=o(N);return ve===N?be:ve}function hn(N){const be=Number(N.device_limit??0);return be>0?`${Number(N.device_bound_count??0)} / ${be}`:Gt("user.unlimited","Unlimited")}function Fn(N){const be=Number(N.device_bound_count??0),ve=Number(N.device_pending_count??0),Re=Number(N.device_banned_count??0),it=Number(N.device_online_count??0),gn=Number(N.alive_ip??0),Yt=Number(N.device_limit??0),na=Yt>0?`${be} / ${Yt}`:`${be} / ${Gt("user.unlimited","Unlimited")}`,da=[`${Gt("user.deviceBound","Bound")}: ${na}`,`${Gt("user.devicePending","Pending")}: ${ve}`,`${Gt("user.deviceBanned","Banned")}: ${Re}`,`${Gt("user.deviceOnline","Online devices")}: ${it}`,`${Gt("user.deviceOnlineIp","Online IP")}: ${gn}`];return N.ips&&da.push(N.ips),da.join(`
`)}function fn(N){s.push(`/device?user_id=${encodeURIComponent(String(N.id))}`)}function H(N,be="left"){const ve=`${Gt("user.deviceOnlineShort","Online")}: ${Number(N.device_online_count??0)} | ${Gt("user.deviceIpShort","IP")}: ${Number(N.alive_ip??0)}`;return t.jsxs("button",{className:`device-cell-button ${be==="right"?"align-right":""}`,type:"button",title:Fn(N),onClick:()=>fn(N),children:[t.jsx("span",{className:"device-cell-primary",children:hn(N)}),t.jsx("span",{className:"device-cell-secondary",children:ve})]})}async function oe(N){var Re,it;const be=N.subscribe_url;if(!be){(Re=window.showToast)==null||Re.call(window,o("user.toastNoSubscribeUrl"),"error");return}const ve=await ui(be);(it=window.showToast)==null||it.call(window,o(ve?"user.toastUrlCopied":"common.copyFailed"),ve?"success":"error"),x(null)}function ee(N){var be;x(null),(be=window.showConfirm)==null||be.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var ve,Re;try{await o1(N.id),(ve=window.showToast)==null||ve.call(window,o("user.toastSecretResetSuccess"),"success"),await Be(S,G,Y)}catch(it){(Re=window.showToast)==null||Re.call(window,it instanceof Error?it.message:o("user.toastSecretResetFailed"),"error")}}})}function Me(N){var be;x(null),(be=window.showConfirm)==null||be.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var ve,Re;try{await l1(N.id),(ve=window.showToast)==null||ve.call(window,o("user.toastDeletedSuccess"),"success"),await Be(S,G,Y)}catch(it){(Re=window.showToast)==null||Re.call(window,it instanceof Error?it.message:o("user.toastDeletedFailed"),"error")}}})}function Ze(N){var ve;x(null);const be=N.subscribe_url;if(!be){(ve=window.showToast)==null||ve.call(window,o("user.toastNoSubscribeUrl"),"error");return}ut({url:be,userId:N.id})}function Fe(N){x(null),s.push(`/order?user_id=${N.id}`)}function j(N){x(null),s.push(`/subscription?user_id=${N.id}`)}function ce(N){x(null),A("invite_user_id"),I(String(N.id)),Be(1,String(N.id),"invite_user_id")}async function ue(N,be){Ae(!0),pn("");try{const ve=await m1(N,be,ke);Pt(ve.data||[]),Ke(ve.total||0),Ot(be)}catch(ve){pn(ve instanceof Error?ve.message:o("user.historyLoading"))}finally{Ae(!1)}}function Ce(N){x(null),Ct(N),ue(N.id,1)}function jt(N){x(null),qe(N.email),fe({plan_id:"",period:"month_price",total_amount:""})}async function Un(N){var be,ve;if(N.preventDefault(),!!Ne){Le(!0);try{await au({email:Ne,plan_id:Number(R.plan_id),period:R.period,total_amount:(Number(R.total_amount)||0)*100}),(be=window.showToast)==null||be.call(window,o("user.toastAssignSuccess"),"success"),qe(null)}catch(Re){(ve=window.showToast)==null||ve.call(window,Re instanceof Error?Re.message:o("user.toastAssignFailed"),"error")}finally{Le(!1)}}}function ca(N){x(null),le(N),L({id:N.id,email:N.email,invite_user_email:"",password:"",balance:N.balance,commission_balance:N.commission_balance,u:Cd(N.u),d:Cd(N.d),transfer_enable:Cd(N.transfer_enable),device_limit:N.device_limit,expired_at:vw(N.expired_at),plan_id:N.plan_id,banned:N.banned,commission_type:N.commission_type??0,commission_rate:N.commission_rate??"",discount:N.discount??"",speed_limit:N.speed_limit,is_admin:N.is_admin,is_staff:N.is_staff,remarks:N.remarks??""})}function Nt(N,be){L(ve=>({...ve,[N]:be}))}async function Jn(N){var be,ve;if(N.preventDefault(),!!$){me(!0);try{const Re={id:$.id,email:v.email,plan_id:v.plan_id||null,expired_at:Pf(String(v.expired_at??"")),transfer_enable:zd(Number(v.transfer_enable??0)),speed_limit:v.speed_limit||null,device_limit:v.device_limit||null,u:zd(Number(v.u??0)),d:zd(Number(v.d??0)),balance:Number(v.balance??0),commission_balance:Number(v.commission_balance??0),commission_rate:v.commission_rate!==""&&v.commission_rate!==null?Number(v.commission_rate):null,commission_type:Number(v.commission_type??0),discount:v.discount!==""&&v.discount!==null?Number(v.discount):null,remarks:v.remarks||null,is_admin:Number(v.is_admin??0),is_staff:Number(v.is_staff??0),banned:Number(v.banned??0)};v.invite_user_email&&(Re.invite_user_email=v.invite_user_email),v.password&&(Re.password=v.password),await i1(Re),(be=window.showToast)==null||be.call(window,o("user.toastSaveSuccess"),"success"),le(null),await Be(S,G,Y)}catch(Re){(ve=window.showToast)==null||ve.call(window,Re instanceof Error?Re.message:o("user.toastSaveFailed"),"error")}finally{me(!1)}}}async function Rt(N){var be,ve;N.preventDefault(),ze(!0);try{await s1({email_prefix:U.email_prefix,email_suffix:U.email_suffix,password:U.password||void 0,plan_id:U.plan_id?Number(U.plan_id):void 0,expired_at:Pf(U.expired_at)}),(be=window.showToast)==null||be.call(window,o("user.toastCreateSuccess"),"success"),C(!1),pe({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await Be(S,G,Y)}catch(Re){(ve=window.showToast)==null||ve.call(window,Re instanceof Error?Re.message:o("user.toastCreateFailed"),"error")}finally{ze(!1)}}const zt=Math.ceil(y/15),Oa=Td(Y);return t.jsxs(Vt,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[y," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:ie,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>K(!M),children:[t.jsx(Lv,{size:16}),o("user.columns")]}),M?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:Je})})}),Kd.map(N=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:P.has(N.key),onChange:()=>Se(N.key)}),t.jsx("span",{children:rn(N.key,o)})]},N.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Be(S,G,Y),disabled:Q,children:[t.jsx(Dt,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>C(!0),children:[t.jsx(On,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:Y,onChange:N=>A(N.target.value),children:tr.map(N=>t.jsx("option",{value:N.value,children:Nw(N.value,o)},N.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(ir,{size:16}),t.jsx("input",{className:"config-input search-input",value:G,onChange:N=>I(N.target.value),placeholder:Oa.placeholder,onKeyDown:N=>N.key==="Enter"&&Ve()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ve,children:[t.jsx(bs,{size:16}),o("user.filter")]}),G?t.jsxs("button",{className:"ghost-button",type:"button",onClick:st,children:[t.jsx(lt,{size:16}),o("user.clearFilter")]}):null]}),O?t.jsx("div",{className:"form-error",children:O}):null,Q&&d.length===0?t.jsx(bt,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${Q?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(N=>{const be=Go(N.u+N.d),ve=Go(N.transfer_enable),Re=parseFloat(be);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",N.id]}),t.jsx("span",{className:"user-email",title:N.email,children:N.email})]}),N.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Et(N)," / ",N.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):ta(N)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Re>0?Re>parseFloat(ve)*.9?"high":"ok":""}`,children:[be," GB"]})," / ",ve," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:rn("devices",o)}),t.jsx("span",{className:"info-val",children:H(N,"right")})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:rn("expires",o)}),t.jsx("span",{className:"info-val",children:N.expired_at?t.jsx("span",{className:`expiry-date ${N.expired_at<Date.now()/1e3?"expired":""}`,children:$o(N.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(N.balance/100).toFixed(2)," ₫ / ",(N.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:rn("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:$o(N.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${ye===N.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>x(ye===N.id?null:N.id),children:[o("user.colActions")," ",t.jsx(Ma,{size:14})]}),ye===N.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>x(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:it=>it.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:N.email}),t.jsxs("small",{children:["#",N.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>x(null),children:t.jsx(lt,{size:16})})]}),De(N,!1,"mobile-action-menu")]})}):null]})})]},N.id)}),!Q&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[we("id")&&t.jsx("th",{children:rn("id",o)}),we("email")&&t.jsx("th",{children:rn("email",o)}),we("status")&&t.jsx("th",{children:rn("status",o)}),we("plan")&&t.jsx("th",{children:rn("plan",o)}),we("group")&&t.jsx("th",{children:rn("group",o)}),we("used")&&t.jsx("th",{children:rn("used",o)}),we("traffic")&&t.jsx("th",{children:rn("traffic",o)}),we("devices")&&t.jsx("th",{children:rn("devices",o)}),we("expires")&&t.jsx("th",{children:rn("expires",o)}),we("balance")&&t.jsx("th",{children:rn("balance",o)}),we("commission")&&t.jsx("th",{children:rn("commission",o)}),we("joined")&&t.jsx("th",{children:rn("joined",o)}),we("actions")&&t.jsx("th",{className:"user-actions-col",children:rn("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(N=>{const be=Go(N.u+N.d),ve=Go(N.transfer_enable),Re=parseFloat(be);return t.jsxs("tr",{children:[we("id")&&t.jsx("td",{children:N.id}),we("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:N.email})}),we("status")&&t.jsx("td",{children:N.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),we("plan")&&t.jsx("td",{children:Et(N)}),we("group")&&t.jsx("td",{children:N.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):ta(N)}),we("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Re>0?Re>parseFloat(ve)*.9?"high":"ok":""}`,children:be})}),we("traffic")&&t.jsx("td",{children:ve}),we("devices")&&t.jsx("td",{children:H(N)}),we("expires")&&t.jsx("td",{children:N.expired_at?t.jsx("span",{className:`expiry-date ${N.expired_at<Date.now()/1e3?"expired":""}`,children:$o(N.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),we("balance")&&t.jsx("td",{children:(N.balance/100).toFixed(2)}),we("commission")&&t.jsx("td",{children:(N.commission_balance/100).toFixed(2)}),we("joined")&&t.jsx("td",{children:t.jsx("small",{children:$o(N.created_at)})}),we("actions")&&t.jsx("td",{className:"user-actions-col",children:t.jsxs("div",{className:`action-dropdown-wrap ${ye===N.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:it=>Wt(N.id,it.currentTarget),children:[o("user.colActions")," ",t.jsx(Ma,{size:14})]}),ye===N.id&&T?fx.createPortal(De(N,!0),document.body):null]})})]},N.id)}),!Q&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:Je,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),zt>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:S<=1,onClick:()=>mn(S-1),children:t.jsx(Aa,{size:16})}),Array.from({length:Math.min(5,zt)},(N,be)=>{let ve;return zt<=5||S<=3?ve=be+1:S>=zt-2?ve=zt-4+be:ve=S-2+be,t.jsx("button",{className:`mini-button ${ve===S?"active-page":""}`,onClick:()=>mn(ve),children:ve},ve)}),zt>5?t.jsxs("span",{className:"page-info",children:["… ",zt]}):null,t.jsx("button",{className:"mini-button",disabled:S>=zt,onClick:()=>mn(S+1),children:t.jsx(Da,{size:16})})]})}):null]}),$?t.jsx("div",{className:"modal-backdrop",onClick:()=>le(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>le(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:Jn,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(v.email??""),onChange:N=>Nt("email",N.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(v.invite_user_email??""),onChange:N=>Nt("invite_user_email",N.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(v.password??""),onChange:N=>Nt("password",N.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(v.balance??0)/100).toFixed(2)),onChange:N=>Nt("balance",Math.round(Number(N.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(v.commission_balance??0)/100).toFixed(2)),onChange:N=>Nt("commission_balance",Math.round(Number(N.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(v.u??0),onChange:N=>Nt("u",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(v.d??0),onChange:N=>Nt("d",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(v.transfer_enable??0),onChange:N=>Nt("transfer_enable",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(v.device_limit??""),onChange:N=>Nt("device_limit",N.target.value?Number(N.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(v.expired_at??""),onChange:N=>Nt("expired_at",N.target.value),onClick:N=>{var be,ve;return(ve=(be=N.currentTarget).showPicker)==null?void 0:ve.call(be)},onFocus:N=>{var be,ve;return(ve=(be=N.currentTarget).showPicker)==null?void 0:ve.call(be)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(v.plan_id??""),onChange:N=>Nt("plan_id",N.target.value?Number(N.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),m.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(v.banned??0),onChange:N=>Nt("banned",Number(N.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(v.commission_type??0),onChange:N=>Nt("commission_type",Number(N.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(v.commission_rate??""),onChange:N=>Nt("commission_rate",N.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(v.discount??""),onChange:N=>Nt("discount",N.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(v.speed_limit??""),onChange:N=>Nt("speed_limit",N.target.value?Number(N.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${v.is_admin?"active":""}`,onClick:()=>Nt("is_admin",v.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${v.is_staff?"active":""}`,onClick:()=>Nt("is_staff",v.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(v.remarks??""),onChange:N=>Nt("remarks",N.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>le(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:z,children:o(z?"common.processing":"common.save")})]})]})]})}):null,se?t.jsx("div",{className:"modal-backdrop",onClick:()=>C(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>C(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Rt,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:U.email_prefix,onChange:N=>pe({...U,email_prefix:N.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:U.email_suffix,onChange:N=>pe({...U,email_suffix:N.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:U.password,onChange:N=>pe({...U,password:N.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:U.plan_id,onChange:N=>pe({...U,plan_id:N.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),m.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:U.expired_at,onChange:N=>pe({...U,expired_at:N.target.value}),onClick:N=>{var be,ve;return(ve=(be=N.currentTarget).showPicker)==null?void 0:ve.call(be)},onFocus:N=>{var be,ve;return(ve=(be=N.currentTarget).showPicker)==null?void 0:ve.call(be)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>C(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ge,children:o(ge?"user.creating":"user.createUser")})]})]})]})}):null,Ne?t.jsx("div",{className:"modal-backdrop",onClick:()=>qe(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>qe(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Un,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:Ne})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:R.plan_id,onChange:N=>fe({...R,plan_id:N.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),m.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:R.period,onChange:N=>fe({...R,period:N.target.value}),children:_w.map(N=>t.jsx("option",{value:N.value,children:Sw(N.value,o)},N.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:R.total_amount,onChange:N=>fe({...R,total_amount:N.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>qe(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:he,children:o(he?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),ct?t.jsx("div",{className:"modal-backdrop",onClick:()=>ut(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ut(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(ct.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:ct.userId})})]})]})}):null,nt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ct(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:nt.email,id:nt.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ct(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[un?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:un}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:vt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:gl(pt.reduce((N,be)=>N+be.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:gl(pt.reduce((N,be)=>N+be.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:gl(pt.reduce((N,be)=>N+be.u+be.d,0))})]})]}),Sn?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(bt,{label:o("user.historyLoading")})}):pt.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(_f,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:pt.map(N=>{const be=gl(N.u),ve=gl(N.d),Re=gl(N.u+N.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:jw(N.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(N.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:be}),t.jsx("td",{style:{color:"var(--muted)"},children:ve}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Re})]},N.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min(($t-1)*ke+1,vt),end:Math.min($t*ke,vt),total:vt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:$t<=1,onClick:()=>ue(nt.id,$t-1),children:[t.jsx(Aa,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:$t*ke>=vt,onClick:()=>ue(nt.id,$t+1),children:[o("user.historyNext"),t.jsx(Da,{size:16})]})]})]})]})]})]})}):null]})}function Cw(s,i=8,o=4){return s.length<=i+o+3?s:`${s.slice(0,i)}...${s.slice(-o)}`}function hs({value:s,onCopy:i,className:o="",copyClassName:d="",prefixLength:u=8,suffixLength:m=4}){const{t:h}=Ge(),[k,b]=f.useState(!1),y=k?s:Cw(s,u,m);return t.jsxs("span",{className:`masked-uuid ${o}`.trim(),children:[t.jsxs("button",{className:`copy-value masked-uuid-copy ${d}`.trim(),type:"button",title:h("uuid.copy"),onClick:()=>void i(),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono masked-uuid-text",title:k?s:y,children:y})]}),t.jsx("button",{className:"masked-uuid-toggle",type:"button",title:h(k?"uuid.hide":"uuid.showFull"),"aria-label":h(k?"uuid.hide":"uuid.showFull"),onClick:()=>b(w=>!w),children:k?t.jsx(Gv,{size:14}):t.jsx(Yv,{size:14})})]})}const Wf=15,If=20,zw=["email","id","user_id","plan_id","status"],Tw=["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"];function si(s,i){return s?new Date(s*1e3).toLocaleString():i}function Ew(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Mw(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function Di(s){return+(s/1073741824).toFixed(2)}function Ed(s){return Math.round((Number(s)||0)*1073741824)}function Aw(s){return s==="email"?"like":"="}function Dw(s,i){switch(s){case"email":return i("subscription.filterEmail");case"id":return i("subscription.filterId");case"user_id":return i("subscription.filterUserId");case"plan_id":return i("subscription.filterPlanId");case"status":return i("subscription.filterStatus");default:return s}}function Ow(s,i){const o=i(`order.period.${s}`);return o===`order.period.${s}`?s:o}function ex(s,i){return i(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function tx(s,i){switch(s){case"bound":return i("subscription.slotStatusBound");case"banned":return i("subscription.slotStatusBanned");default:return i("subscription.slotStatusPending")}}function nx(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function ax(s){return String(s.hwid??"").trim()!==""}function Rw(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function Uw(){const s=qt(),i=ra(),{t:o}=Ge(),[d,u]=f.useState([]),[m,h]=f.useState([]),[k,b]=f.useState(0),[y,w]=f.useState(1),[S,_]=f.useState("email"),[G,I]=f.useState(""),[Y,A]=f.useState(!0),[Q,q]=f.useState(""),[O,te]=f.useState(null),[P,ne]=f.useState({}),[M,K]=f.useState(null),[ie,ye]=f.useState(null),[x,T]=f.useState([]),[W,$]=f.useState(0),[le,v]=f.useState(1),[L,z]=f.useState(!1),[me,se]=f.useState(""),[C,U]=f.useState(null),[pe,ge]=f.useState(null),[ze,Ne]=f.useState({period:"month_price",total_amount:""}),[qe,R]=f.useState(!1),[fe,he]=f.useState(null),[Le,ct]=f.useState(null),[ut,nt]=f.useState(null);function Ct(j){const ce=j==null?void 0:j.trim();ce&&s.push(`/user?email=${encodeURIComponent(ce)}`)}const pt=f.useCallback(async(j=1,ce="",ue="email")=>{A(!0),q("");try{const Ce=ce.trim()?[{key:ue,condition:Aw(ue),value:ce.trim()}]:void 0,jt=await r1(j,Wf,Ce);u(jt.data),b(jt.total),w(j)}catch(Ce){q(Ce instanceof Error?Ce.message:o("subscription.loadFailed"))}finally{A(!1)}},[o]),Pt=f.useCallback(async(j,ce=1)=>{z(!0),se("");try{const ue=await qx(ce,If,[{key:"subscription_id",condition:"=",value:String(j.id)}]);T(ue.data),$(ue.total),v(ce)}catch(ue){se(ue instanceof Error?ue.message:o("subscription.slotsLoadFailed"))}finally{z(!1)}},[o]),vt=f.useCallback(async()=>{var j;try{h(await fi())}catch(ce){(j=window.showToast)==null||j.call(window,ce instanceof Error?ce.message:o("subscription.plansLoadFailed"),"error")}},[o]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}vt();const j=new URLSearchParams(i.search),ue=[["user_id",j.get("user_id")],["id",j.get("id")],["plan_id",j.get("plan_id")],["email",j.get("email")],["status",j.get("status")]].find(([,Ce])=>Ce&&Ce.trim());if(ue){const[Ce,jt]=ue,Un=jt??"";_(Ce),I(Un),pt(1,Un,Ce);return}pt()},[pt,vt,i.search,s]),f.useEffect(()=>{function j(ce){const ue=ce.target instanceof Element?ce.target:null;fe!==null&&(!ue||!ue.closest(".subscription-action-wrap, .subscription-mobile-action-sheet, .subscription-action-menu-fixed"))&&Ke()}return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[fe]),f.useEffect(()=>{if(fe===null)return;const j=()=>Ke();return window.addEventListener("resize",j),window.addEventListener("scroll",j,!0),()=>{window.removeEventListener("resize",j),window.removeEventListener("scroll",j,!0)}},[fe]);function Ke(){he(null),ct(null)}function $t(j,ce){if(fe===j&&Le){Ke();return}const ue=ce.getBoundingClientRect(),Ce=230,jt=292,Un=6,ca=8,Nt=Math.max(ca,Math.min(window.innerWidth-Ce-ca,ue.right-Ce)),Rt=ue.bottom+Un+jt<=window.innerHeight-ca?ue.bottom+Un:Math.max(ca,ue.top-jt-Un);ct({top:Rt,left:Nt}),he(j)}function Ot(j){ct(null),he(ce=>ce===j?null:j)}function ke(j){j.preventDefault(),pt(1,G,S)}function Sn(){if(I(""),i.search){s.replace("/subscription");return}pt(1,"",S)}function Ae(j){if(!j)return o("subscription.noPlan");const ce=m.find(ue=>Number(ue.id)===Number(j));return ce?`#${ce.id} - ${ce.name}`:`#${j}`}function un(j){te(j),ne({plan_id:j.plan_id?String(j.plan_id):"",transfer_enable:String(Di(j.transfer_enable)),u:String(Di(j.u)),d:String(Di(j.d)),device_limit:j.device_limit===null?"":String(j.device_limit),speed_limit:j.speed_limit===null?"":String(j.speed_limit),expired_at:Ew(j.expired_at),status:j.status,auto_renewal:String(j.auto_renewal||0),name_sni:j.name_sni??"",network_settings:j.network_settings??"",remarks:j.remarks??""})}async function pn(j){var ce,ue;if(j.preventDefault(),!!O){K(O.id);try{await d1({id:O.id,plan_id:P.plan_id===""?null:Number(P.plan_id),transfer_enable:Ed(P.transfer_enable),u:Ed(P.u),d:Ed(P.d),device_limit:P.device_limit===""?null:Number(P.device_limit),speed_limit:P.speed_limit===""?null:Number(P.speed_limit),expired_at:Mw(P.expired_at),status:P.status,auto_renewal:Number(P.auto_renewal),name_sni:P.name_sni||null,network_settings:P.network_settings||null,remarks:P.remarks}),te(null),(ce=window.showToast)==null||ce.call(window,o("subscription.updateSuccess"),"success"),await pt(y,G,S)}catch(Ce){(ue=window.showToast)==null||ue.call(window,Ce instanceof Error?Ce.message:o("subscription.saveFailed"),"error")}finally{K(null)}}}function Wt(j){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:o("subscription.resetConfirm",{id:j.id}),onConfirm:async()=>{var ue,Ce;K(j.id);try{await u1(j.id),(ue=window.showToast)==null||ue.call(window,o("subscription.resetSuccess"),"success"),await pt(y,G,S)}catch(jt){(Ce=window.showToast)==null||Ce.call(window,jt instanceof Error?jt.message:o("subscription.resetFailed"),"error")}finally{K(null)}}})}function J(j){var ce,ue;if(!j.user_email){(ce=window.showToast)==null||ce.call(window,o("subscription.renewMissingEmail"),"error");return}if(!j.plan_id){(ue=window.showToast)==null||ue.call(window,o("subscription.renewMissingPlan"),"error");return}ge(j),Ne({period:"month_price",total_amount:""})}async function De(j){var ce,ue;if(j.preventDefault(),!(!(pe!=null&&pe.user_email)||!pe.plan_id)){R(!0);try{await au({email:pe.user_email,plan_id:pe.plan_id,period:ze.period,total_amount:Math.round((Number(ze.total_amount)||0)*100),subscription_id:pe.id}),(ce=window.showToast)==null||ce.call(window,o("subscription.renewSuccess"),"success"),ge(null)}catch(Ce){(ue=window.showToast)==null||ue.call(window,Ce instanceof Error?Ce.message:o("subscription.renewFailed"),"error")}finally{R(!1)}}}async function Se(j){var ue;if(!j)return;const ce=await ui(j);(ue=window.showToast)==null||ue.call(window,o(ce?"subscription.copySuccess":"common.copyFailed"),ce?"success":"error")}function we(j,ce){u(ue=>ue.map(Ce=>Ce.id===j?{...Ce,subscribe_url:ce}:Ce)),ye(ue=>ue&&ue.id===j?{...ue,subscribe_url:ce}:ue)}async function Je(j){if(j.subscribe_url)return j.subscribe_url;const ue=(await c1(j.id)).data||null;return ue&&we(j.id,ue),ue}async function Be(j){var ce;if(!j.subscribe_url){U(j.id);try{await Je(j)}catch(ue){(ce=window.showToast)==null||ce.call(window,ue instanceof Error?ue.message:o("common.copyFailed"),"error")}finally{U(null)}}}async function Ye(j){var ce,ue;U(j.id);try{const Ce=await Je(j);if(!Ce){(ce=window.showToast)==null||ce.call(window,o("common.copyFailed"),"error");return}await Se(Ce)}catch(Ce){(ue=window.showToast)==null||ue.call(window,Ce instanceof Error?Ce.message:o("common.copyFailed"),"error")}finally{U(null)}}async function Ve(j){var ce,ue;U(j.id);try{const Ce=await Je(j);if(!Ce){(ce=window.showToast)==null||ce.call(window,o("common.copyFailed"),"error");return}nt({url:Ce,subscriptionId:j.id})}catch(Ce){(ue=window.showToast)==null||ue.call(window,Ce instanceof Error?Ce.message:o("common.copyFailed"),"error")}finally{U(null)}}function st(j){ye(j),T([]),$(0),v(1),Pt(j,1),Be(j)}function mn(j=le){return ie?Pt(ie,j):Promise.resolve()}function Et(j){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var ue,Ce;K(j.id);try{await Bx(j.id),(ue=window.showToast)==null||ue.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([mn(),pt(y,G,S)])}catch(jt){(Ce=window.showToast)==null||Ce.call(window,jt instanceof Error?jt.message:o("subscription.unbindFailed"),"error")}finally{K(null)}}})}function ta(j){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var ue,Ce;K(j.id);try{await $x(j.id),(ue=window.showToast)==null||ue.call(window,o("subscription.banSuccess"),"success"),await Promise.all([mn(),pt(y,G,S)])}catch(jt){(Ce=window.showToast)==null||Ce.call(window,jt instanceof Error?jt.message:o("subscription.banFailed"),"error")}finally{K(null)}}})}function Gt(j){const ce=j.device_limit&&j.device_limit>0?String(j.device_limit):o("subscription.unlimited");return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:j.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:ce})]}),j.device_limit&&j.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(j.device_count/j.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>st(j),children:[t.jsx(Ld,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]})]})}function hn(j){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[Di(j.total_used)," / ",Di(j.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Rw(j)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:Di(j.u),download:Di(j.d)})})]})}function Fn(j){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsx(hs,{value:j.uuid,onCopy:()=>Se(j.uuid),copyClassName:"subscription-link"}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function fn(j){return t.jsxs("div",{className:"subscription-link-stack",children:[Fn(j),j.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:j.subscribe_url,onClick:()=>void Ye(j),disabled:C===j.id,children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:j.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void Ye(j),disabled:C===j.id,children:[t.jsx(Ea,{size:14}),t.jsx("span",{children:C===j.id?o("subscription.subscribeUrlLoading"):o("subscription.copySubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function H(j){return t.jsxs("section",{className:"subscription-identity-summary",children:[t.jsxs("div",{className:"subscription-identity-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:o("subscription.identityTitle")}),t.jsx("small",{children:o("subscription.identityHelp")})]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:C===j.id,onClick:()=>void Ve(j),children:[t.jsx(Bd,{size:14}),C===j.id?o("subscription.subscribeUrlLoading"):o("subscription.getQr")]})]}),fn(j)]})}function oe(j,ce=!1,ue=""){const Ce=jt=>{Ke(),jt()};return t.jsxs("div",{className:`action-dropdown-menu subscription-action-menu ${ce?"subscription-action-menu-fixed":""} ${ue}`.trim(),style:ce&&Le?{top:Le.top,left:Le.left}:void 0,onMouseDown:jt=>jt.stopPropagation(),children:[t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>Ce(()=>un(j)),children:[t.jsx(Jt,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>Ce(()=>J(j)),children:[t.jsx(Tx,{size:14}),o("subscription.renew")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>Ce(()=>st(j)),children:[t.jsx(Ld,{size:14}),o("subscription.manageUuids")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:C===j.id,onClick:()=>Ce(()=>void Ye(j)),children:[t.jsx(Ea,{size:14}),C===j.id?o("subscription.subscribeUrlLoading"):o("subscription.copySubscribeUrl")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:C===j.id,onClick:()=>Ce(()=>void Ve(j)),children:[t.jsx(Bd,{size:14}),o("subscription.getQr")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:M===j.id,onClick:()=>Ce(()=>Wt(j)),children:[t.jsx(eu,{size:14}),o("subscription.resetSecret")]})]})}function ee(j,ce="desktop"){return ce==="mobile"?t.jsx("div",{className:"subscription-mobile-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${fe===j.id&&!Le?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:()=>Ot(j.id),children:[o("subscription.action")," ",t.jsx(Ma,{size:14})]}),fe===j.id&&!Le?t.jsx("div",{className:"subscription-mobile-action-sheet-backdrop",onClick:Ke,children:t.jsxs("div",{className:"subscription-mobile-action-sheet",onClick:ue=>ue.stopPropagation(),children:[t.jsxs("div",{className:"subscription-mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:j.user_email??o("subscription.userId",{id:j.user_id})}),t.jsxs("small",{children:["#",j.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:Ke,children:t.jsx(lt,{size:16})})]}),oe(j,!1,"subscription-mobile-action-menu")]})}):null]})}):t.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${fe===j.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:ue=>$t(j.id,ue.currentTarget),children:[o("subscription.action")," ",t.jsx(Ma,{size:14})]}),fe===j.id&&Le?fx.createPortal(oe(j,!0),document.body):null]})}const Me=Math.ceil(k/Wf),Ze=Math.ceil(W/If),Fe=Me>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:y<=1||Y,onClick:()=>void pt(y-1,G,S),children:[t.jsx(Aa,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:y,total:Me})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:y>=Me||Y,onClick:()=>void pt(y+1,G,S),children:[o("common.next"),t.jsx(Da,{size:14})]})]}):null;return t.jsxs(Vt,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:k})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Y,onClick:()=>void pt(y,G,S),children:[t.jsx(Dt,{size:16}),o(Y?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ke,children:[t.jsx("select",{className:"config-input filter-select",value:S,onChange:j=>_(j.target.value),children:zw.map(j=>t.jsx("option",{value:j,children:Dw(j,o)},j))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(ir,{size:16}),t.jsx("input",{className:"config-input",value:G,onChange:j=>I(j.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(bs,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:Sn,children:o("common.clearFilter")})]}),Q?t.jsx("div",{className:"form-error",children:Q}):null,Y&&d.length===0?t.jsx(bt,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(j=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",j.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:j.plan_name??"-"}),j.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>Ct(j.user_email),title:o("subscription.viewUser"),children:j.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:j.user_id}),j.plan_id?` - ${o("subscription.planId",{id:j.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${j.status}`,children:ex(j.status,o)})}),t.jsx("td",{children:hn(j)}),t.jsx("td",{children:Gt(j)}),t.jsx("td",{children:si(j.expired_at,o("subscription.never"))}),t.jsx("td",{children:si(j.updated_at,o("subscription.never"))}),t.jsx("td",{children:ee(j)})]},j.id)),!Y&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(j=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",j.id]}),t.jsx("strong",{className:"subscription-plan-name",children:j.plan_name??"-"}),j.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>Ct(j.user_email),title:o("subscription.viewUser"),children:j.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${j.status}`,children:ex(j.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),hn(j)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),Gt(j)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:si(j.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:si(j.updated_at,o("subscription.never"))})]})]}),ee(j,"mobile")]},j.id)),!Y&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),Fe,ie?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>ye(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:j=>j.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:ie.id})}),t.jsx("p",{children:ie.user_email??o("subscription.userId",{id:ie.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>ye(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[me?t.jsx("div",{className:"form-error",children:me}):null,L&&x.length===0?t.jsx(bt,{label:o("subscription.slotsLoading")}):null,H(ie),t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[x.map(j=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(hs,{value:j.uuid,onCopy:()=>Se(j.uuid),copyClassName:"subscription-link"})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${nx(j.status)}`,children:tx(j.status,o)})}),t.jsx("td",{children:j.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:j.hwid,onClick:()=>Se(j.hwid),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:j.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:j.user_agent??"",children:j.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:j.last_ip??"-"}),t.jsx("small",{children:j.first_ip?o("subscription.firstIp",{ip:j.first_ip}):"-"})]}),t.jsx("td",{children:si(j.first_seen_at,"-")}),t.jsx("td",{children:si(j.last_seen_at,"-")}),t.jsx("td",{children:ax(j)?t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:M===j.id,onClick:()=>Et(j),children:[t.jsx(Gd,{size:14}),o("subscription.unbind")]}),j.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:M===j.id,onClick:()=>ta(j),children:[t.jsx(Oi,{size:14}),o("subscription.ban")]}):null]}):t.jsx("span",{children:"-"})})]},j.id)),!L&&x.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[x.map(j=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${nx(j.status)}`,children:tx(j.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsx(hs,{value:j.uuid,onCopy:()=>Se(j.uuid),copyClassName:"subscription-link"})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),j.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:j.hwid,onClick:()=>Se(j.hwid),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:j.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:j.last_ip??"-"}),t.jsx("small",{children:j.first_ip?o("subscription.firstIp",{ip:j.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:j.user_agent??"",children:j.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:si(j.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:si(j.last_seen_at,"-")})]})]}),ax(j)?t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:M===j.id,onClick:()=>Et(j),children:[t.jsx(Gd,{size:14}),o("subscription.unbind")]}),j.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:M===j.id,onClick:()=>ta(j),children:[t.jsx(Oi,{size:14}),o("subscription.ban")]}):null]}):null]},j.id)),!L&&x.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),Ze>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:le<=1||L,onClick:()=>void mn(le-1),children:[t.jsx(Aa,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:le,total:Ze})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:le>=Ze||L,onClick:()=>void mn(le+1),children:[o("common.next"),t.jsx(Da,{size:14})]})]}):null]})]})}):null,ut?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>nt(null),children:t.jsxs("section",{className:"modal-panel subscription-qr-modal",role:"dialog","aria-modal":"true",onMouseDown:j=>j.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.qrTitle")}),t.jsx("p",{children:o("subscription.qrSubtitle",{id:ut.subscriptionId})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>nt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(ut.url)}`,alt:o("subscription.getQr"),width:200,height:200}),t.jsx("div",{className:"subscription-qr-url",children:ut.url})]})]})}):null,O?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>te(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:j=>j.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:O.id})}),t.jsx("p",{children:O.user_email??o("subscription.userId",{id:O.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>te(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:pn,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.plan"),t.jsxs("select",{className:"config-input",value:P.plan_id,onChange:j=>ne(ce=>({...ce,plan_id:j.target.value})),children:[t.jsx("option",{value:"",children:o("subscription.noPlan")}),m.map(j=>t.jsxs("option",{value:j.id,children:["#",j.id," - ",j.name]},j.id))]})]}),t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.transfer_enable,onChange:j=>ne(ce=>({...ce,transfer_enable:j.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.u,onChange:j=>ne(ce=>({...ce,u:j.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.d,onChange:j=>ne(ce=>({...ce,d:j.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:P.device_limit,onChange:j=>ne(ce=>({...ce,device_limit:j.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:P.speed_limit,onChange:j=>ne(ce=>({...ce,speed_limit:j.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:P.expired_at,onChange:j=>ne(ce=>({...ce,expired_at:j.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:P.status,onChange:j=>ne(ce=>({...ce,status:j.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:P.auto_renewal,onChange:j=>ne(ce=>({...ce,auto_renewal:j.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]}),t.jsxs("label",{children:[o("subscription.sniName"),t.jsx("input",{className:"config-input",value:P.name_sni,onChange:j=>ne(ce=>({...ce,name_sni:j.target.value})),placeholder:o("subscription.sniNamePlaceholder")})]}),t.jsxs("label",{children:[o("subscription.sniValue"),t.jsx("input",{className:"config-input",value:P.network_settings,onChange:j=>ne(ce=>({...ce,network_settings:j.target.value})),placeholder:o("subscription.sniValuePlaceholder")})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:P.remarks,onChange:j=>ne(ce=>({...ce,remarks:j.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>te(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:M===O.id,children:M===O.id?o("common.processing"):o("common.save")})]})]})]})}):null,pe?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>ge(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:j=>j.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.renewTitle")}),t.jsx("p",{children:o("subscription.renewSubtitle",{id:pe.id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>ge(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:De,children:[t.jsxs("div",{className:"subscription-renew-summary",children:[t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("common.email")}),t.jsx("strong",{title:pe.user_email??"",children:pe.user_email??"-"})]}),t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("subscription.renewSubscriptionId")}),t.jsxs("strong",{children:["#",pe.id]})]}),t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("subscription.renewPlan")}),t.jsx("strong",{title:Ae(pe.plan_id),children:Ae(pe.plan_id)})]})]}),t.jsxs("label",{children:[o("subscription.renewPeriod"),t.jsx("select",{className:"config-input",value:ze.period,onChange:j=>Ne(ce=>({...ce,period:j.target.value})),children:Tw.map(j=>t.jsx("option",{value:j,children:Ow(j,o)},j))})]}),t.jsxs("label",{children:[o("subscription.renewTotalAmount"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:ze.total_amount,onChange:j=>Ne(ce=>({...ce,total_amount:j.target.value})),placeholder:"0"})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ge(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:qe,children:o(qe?"common.processing":"common.save")})]})]})]})}):null]})}const ix=15,Hw=["email","user_id","node","hwid","user_agent","last_ip"];function ds(s){return s?new Date(s*1e3).toLocaleString():"-"}function oi(s){const i=Math.max(0,Number(s??0));if(i===0)return"0 B";const o=["B","KB","MB","GB","TB"];let d=i,u=0;for(;d>=1024&&u<o.length-1;)d/=1024,u+=1;return`${d>=10||u===0?d.toFixed(0):d.toFixed(2)} ${o[u]}`}function Lw(s){return["user_id","subscription_id","node","node_type","node_id"].includes(s)?"=":"like"}function qw(s,i){switch(s){case"email":return i("device.filterEmail");case"user_id":return i("device.filterUserId");case"hwid":return i("device.filterHwid");case"node":return i("device.filterNode");case"node_id":return i("device.filterNodeId");case"node_type":return i("device.filterNodeType");case"user_agent":return i("device.filterUserAgent");case"last_ip":return i("device.filterIp");default:return""}}function lx(s,i){switch(s){case"bound":return i("device.statusBound");case"banned":return i("device.statusBanned");default:return i("device.statusPending")}}function Yo(s){return(s.online_ips??[]).join(", ")||"-"}function Qo(s){return(s.online_nodes??[]).map(i=>`${i.node_type}#${i.node_id}`).join(", ")||"-"}function Bw(s){return String(s.hwid??"").trim()!==""}function $w(s){var m,h,k;const i=new URLSearchParams(s),o=(m=i.get("node_type"))==null?void 0:m.trim(),d=(h=i.get("node_id"))==null?void 0:h.trim();if(o&&d)return{field:"node",value:`${o}:${d}`};if(d)return{field:"node",value:d};const u=["node","hwid","user_agent","last_ip","email","user_id"];for(const b of u){const y=(k=i.get(b))==null?void 0:k.trim();if(y)return{field:b,value:y}}return null}function Gw(){const s=qt(),i=ra(),{t:o}=Ge(),[d,u]=f.useState([]),[m,h]=f.useState(0),[k,b]=f.useState(1),[y,w]=f.useState("email"),[S,_]=f.useState(""),[G,I]=f.useState(!0),[Y,A]=f.useState(""),[Q,q]=f.useState(null),[O,te]=f.useState(null),[P,ne]=f.useState(null),M=f.useCallback(async(z=1,me="",se="email")=>{I(!0),A("");try{const C=me.trim()?[{key:se,condition:Lw(se),value:me.trim()}]:void 0,U=await qx(z,ix,C);u(U.data),h(U.total),b(z)}catch(C){A(C instanceof Error?C.message:o("device.loadFailed"))}finally{I(!1)}},[o]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}const z=$w(i.search);if(z){w(z.field),_(z.value),M(1,z.value,z.field);return}M()},[M,s,i.search]),f.useEffect(()=>{if(P===null)return;function z(se){const C=se.target;C!=null&&C.closest(".device-action-wrap")||ne(null)}function me(se){se.key==="Escape"&&ne(null)}return document.addEventListener("pointerdown",z),document.addEventListener("keydown",me),()=>{document.removeEventListener("pointerdown",z),document.removeEventListener("keydown",me)}},[P]);function K(z){z.preventDefault(),M(1,S,y)}function ie(){if(_(""),i.search){s.replace("/device");return}M(1,"",y)}async function ye(z){var se;if(!z.hwid)return;const me=await ui(z.hwid);(se=window.showToast)==null||se.call(window,o(me?"device.copySuccess":"common.copyFailed"),me?"success":"error")}async function x(z){var se;const me=await ui(z.uuid);(se=window.showToast)==null||se.call(window,o(me?"device.copyUuidSuccess":"common.copyFailed"),me?"success":"error")}function T(z){var me;(me=window.showConfirm)==null||me.call(window,{message:o("device.unbindConfirm"),onConfirm:async()=>{var se,C;q(z.id);try{await Bx(z.id),(se=window.showToast)==null||se.call(window,o("device.unbindSuccess"),"success"),await M(k,S,y)}catch(U){(C=window.showToast)==null||C.call(window,U instanceof Error?U.message:o("device.unbindFailed"),"error")}finally{q(null)}}})}function W(z){var me;(me=window.showConfirm)==null||me.call(window,{message:o("device.banConfirm"),onConfirm:async()=>{var se,C;q(z.id);try{await $x(z.id),(se=window.showToast)==null||se.call(window,o("device.banSuccess"),"success"),await M(k,S,y)}catch(U){(C=window.showToast)==null||C.call(window,U instanceof Error?U.message:o("device.banFailed"),"error")}finally{q(null)}}})}function $(z){var me;(me=window.showConfirm)==null||me.call(window,{message:o("device.resetConfirm",{user:z.user_email??`#${z.user_id}`}),onConfirm:async()=>{var se,C;te(z.user_id);try{await p1(z.user_id),(se=window.showToast)==null||se.call(window,o("device.resetSuccess"),"success"),await M(k,S,y)}catch(U){(C=window.showToast)==null||C.call(window,U instanceof Error?U.message:o("device.resetFailed"),"error")}finally{te(null)}}})}function le(z){ne(null),z()}function v(z,me){const se=me==="mobile"?-z.id:z.id,C=P===se,U=Bw(z);return t.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${C?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>ne(C?null:se),children:[o("device.action")," ",t.jsx(Ma,{size:14})]}),C?t.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[U?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:Q===z.id,onClick:()=>le(()=>T(z)),children:[t.jsx(Gd,{size:14}),o("device.unbind")]}),z.status==="bound"?t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:Q===z.id,onClick:()=>le(()=>W(z)),children:[t.jsx(Oi,{size:14}),o("device.ban")]}):null]}):null,t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:O===z.user_id,onClick:()=>le(()=>$(z)),children:[t.jsx(i0,{size:14}),o("device.resetUser")]})]}):null]})}const L=Math.ceil(m/ix);return t.jsxs(Vt,{title:o("device.title"),subtitle:o("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("device.heading")}),t.jsx("p",{children:o("device.total",{count:m})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:G,onClick:()=>void M(k,S,y),children:[t.jsx(Dt,{size:16}),o(G?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:K,children:[t.jsx("select",{className:"config-input filter-select",value:y,onChange:z=>w(z.target.value),children:Hw.map(z=>t.jsx("option",{value:z,children:qw(z,o)},z))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(ir,{size:16}),t.jsx("input",{className:"config-input",value:S,onChange:z=>_(z.target.value),placeholder:o(y==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(bs,{size:16}),o("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ie,children:o("device.clear")})]}),Y?t.jsx("div",{className:"form-error",children:Y}):null,G&&d.length===0?t.jsx(bt,{label:o("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[d.map(z=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:z.user_email??"-"}),t.jsxs("small",{children:["ID: ",z.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[z.plan_name??"-",z.user_plan_id?` #${z.user_plan_id}`:""]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:lx(z.status,o)}),t.jsxs("span",{className:`online-badge ${z.is_online?"online":"offline"}`,children:[z.is_online?t.jsx(kf,{size:14}):t.jsx(Sf,{size:14}),z.is_online?o("device.online"):o("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-info",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.uuid")}),t.jsx(hs,{value:z.uuid,onCopy:()=>x(z),copyClassName:"mobile-device-copy"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.hwid")}),z.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:z.hwid,onClick:()=>ye(z),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:z.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.client")}),t.jsx("small",{title:z.user_agent??"",children:z.user_agent??"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.ip")}),t.jsxs("span",{className:"mono",title:`${z.last_ip??"-"} / ${z.first_ip??"-"}`,children:[z.last_ip??"-",z.first_ip?` (${z.first_ip})`:""]})]})]}),t.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[t.jsx("span",{children:o("device.traffic")}),t.jsxs("small",{title:`${o("device.upload")}: ${oi(z.device_upload)} / ${o("device.download")}: ${oi(z.device_download)}`,children:[oi(z.device_used_traffic)," / ",o("device.upload"),": ",oi(z.device_upload)," / ",o("device.download"),": ",oi(z.device_download)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.connection")}),t.jsxs("small",{title:`${Yo(z)} / ${Qo(z)}`,children:[o("device.onlineIps"),": ",Yo(z)," / ",o("device.onlineNodes"),": ",Qo(z)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.time")}),t.jsxs("small",{children:[o("device.firstSeen"),": ",ds(z.first_seen_at)," / ",o("device.lastSeen"),": ",ds(z.last_seen_at)]})]})]}),t.jsx("div",{className:"mobile-device-actions",children:v(z,"mobile")})]},z.id)),!G&&d.length===0?t.jsx("div",{className:"empty-state",children:o("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("device.user")}),t.jsx("th",{children:o("device.status")}),t.jsx("th",{children:o("device.traffic")}),t.jsx("th",{children:o("device.connection")}),t.jsx("th",{children:o("device.deviceInfo")}),t.jsx("th",{children:o("device.time")}),t.jsx("th",{children:o("device.action")})]})}),t.jsxs("tbody",{children:[d.map(z=>t.jsxs("tr",{children:[t.jsxs("td",{className:"device-user-cell",children:[t.jsx("strong",{children:z.user_email??"-"}),t.jsxs("small",{children:["ID: ",z.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[z.plan_name??"-",z.user_plan_id?` #${z.user_plan_id}`:""]})]}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:lx(z.status,o)})}),t.jsx("td",{className:"device-traffic-cell",children:t.jsxs("div",{className:"device-traffic-stack",children:[t.jsx("strong",{children:oi(z.device_used_traffic)}),t.jsxs("small",{children:[o("device.upload"),": ",oi(z.device_upload)]}),t.jsxs("small",{children:[o("device.download"),": ",oi(z.device_download)]})]})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${z.is_online?"online":"offline"}`,children:[z.is_online?t.jsx(kf,{size:14}):t.jsx(Sf,{size:14}),z.is_online?o("device.online"):o("device.offline")]}),t.jsxs("small",{title:Yo(z),children:[o("device.onlineIps"),": ",Yo(z)]}),t.jsxs("small",{title:Qo(z),children:[o("device.onlineNodes"),": ",Qo(z)]}),t.jsxs("small",{children:[o("device.lastOnline"),": ",ds(z.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-info-cell",children:t.jsxs("div",{className:"device-info-stack",children:[t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.uuid")}),t.jsx(hs,{value:z.uuid,onCopy:()=>x(z),copyClassName:"device-info-copy"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.hwid")}),z.hwid?t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:z.hwid,onClick:()=>ye(z),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:z.hwid})]}):t.jsx("span",{className:"device-info-value",children:"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.client")}),t.jsx("small",{className:"device-info-value",title:z.user_agent??"",children:z.user_agent??"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.ip")}),t.jsxs("div",{className:"device-info-value",children:[t.jsx("strong",{className:"mono",children:z.last_ip??"-"}),t.jsx("small",{children:z.first_ip?`${o("device.firstIp")}: ${z.first_ip}`:"-"})]})]})]})}),t.jsx("td",{className:"device-time-cell",children:t.jsxs("div",{className:"device-time-stack",children:[t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.firstSeen")}),t.jsx("span",{children:ds(z.first_seen_at)})]}),t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.lastSeen")}),t.jsx("span",{children:ds(z.last_seen_at)})]})]})}),t.jsx("td",{className:"device-action-cell",children:v(z,"desktop")})]},z.id)),!G&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("device.empty")})})}):null]})]})}),L>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:k<=1||G,onClick:()=>void M(k-1,S,y),children:[t.jsx(Aa,{size:14}),o("device.previous")]}),t.jsx("span",{className:"page-info",children:o("device.page",{page:k,total:L})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:k>=L||G,onClick:()=>void M(k+1,S,y),children:[o("device.next"),t.jsx(Da,{size:14})]})]}):null]})]})}const Yw={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function ru(s){if(Array.isArray(s))return s.map(i=>Number(i)).filter(i=>Number.isFinite(i)&&i>0);if(typeof s=="string")try{return ru(JSON.parse(s))}catch{return s.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i)&&i>0)}return[]}function sx(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:ru(s.plan_id)}:{...Yw}}function Md(s){const i=s.trim();if(!i)return"";try{return new URL(i.includes("://")?i:`https://${i}`).host.toLowerCase()}catch{return i.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function Qw(s){const i=Number(s);if(!i)return"-";const o=new Date(i*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function Xw(s){return Number(s)===1}function ox(s,i,o){if(!s.length)return o("webcon.allPlans");const d=new Map(i.map(u=>[Number(u.id),u.name]));return s.map(u=>d.get(u)??`#${u}`).join(", ")}function ri(s,i=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,i?t.jsx("small",{children:"*"}):null]})}function Zw(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState([]),[u,m]=f.useState([]),[h,k]=f.useState(null),[b,y]=f.useState(!0),[w,S]=f.useState(!1),[_,G]=f.useState(null),[I,Y]=f.useState(""),A=f.useCallback(async()=>{y(!0),Y("");try{const[M,K]=await Promise.all([k1(),fi()]);d(M),m(K)}catch(M){Y(M instanceof Error?M.message:i("webcon.toastLoadFailed"))}finally{y(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}A()},[A,s]);const Q=f.useMemo(()=>u.map(M=>({id:Number(M.id),name:M.name})),[u]);function q(M,K){k(ie=>ie&&{...ie,[M]:K})}function O(M,K){k(ie=>{if(!ie)return ie;const ye=K?Array.from(new Set([...ie.plan_ids,M])):ie.plan_ids.filter(x=>x!==M);return{...ie,plan_ids:ye}})}async function te(M){var ie,ye;if(M.preventDefault(),!h)return;const K=Md(h.domain);S(!0),Y("");try{await C1({id:h.id,email:h.email.trim(),domain:K,title:h.title.trim(),description:h.description.trim()||null,logo:h.logo.trim()||null,background_url:h.background_url.trim()||null,custom_html:h.custom_html||null,plan_ids:h.plan_ids,plan_id:h.plan_ids}),k(null),(ie=window.showToast)==null||ie.call(window,i("webcon.toastSaveSuccess"),"success"),await A()}catch(x){const T=x instanceof Error?x.message:i("webcon.toastSaveFailed");Y(T),(ye=window.showToast)==null||ye.call(window,T,"error")}finally{S(!1)}}async function P(M){var K,ie;G(M.id);try{await T1(M.id),(K=window.showToast)==null||K.call(window,i("webcon.toastToggleSuccess"),"success"),await A()}catch(ye){const x=ye instanceof Error?ye.message:i("webcon.toastToggleFailed");Y(x),(ie=window.showToast)==null||ie.call(window,x,"error")}finally{G(null)}}function ne(M){var K;(K=window.showConfirm)==null||K.call(window,{message:i("webcon.deleteConfirm"),onConfirm:async()=>{var ie,ye;G(M.id),Y("");try{await z1(M.id),(ie=window.showToast)==null||ie.call(window,i("webcon.toastDeleteSuccess"),"success"),await A()}catch(x){const T=x instanceof Error?x.message:i("webcon.toastDeleteFailed");Y(T),(ye=window.showToast)==null||ye.call(window,T,"error")}finally{G(null)}}})}return t.jsxs(Vt,{title:i("webcon.title"),subtitle:i("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("webcon.heading")}),t.jsx("p",{children:i("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:b,onClick:()=>void A(),children:[t.jsx(Dt,{size:16}),i(b?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>k(sx()),children:[t.jsx(On,{size:16}),i("webcon.add")]})]})]}),I?t.jsx("div",{className:"form-error",children:I}):null,b&&o.length===0?t.jsx(bt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("webcon.colId")}),t.jsx("th",{children:i("webcon.colStatus")}),t.jsx("th",{children:i("webcon.colStaffOwner")}),t.jsx("th",{children:i("webcon.colDomain")}),t.jsx("th",{children:i("webcon.colLanding")}),t.jsx("th",{children:i("webcon.colPlans")}),t.jsx("th",{children:i("webcon.colCreated")}),t.jsx("th",{children:i("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(M=>{var ie;const K=ru(M.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",M.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${Xw(M.status)?"active":""}`,type:"button",disabled:_===M.id,onClick:()=>void P(M),"aria-label":i("webcon.toggleStatusLabel"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:M.email??"-"}),t.jsx("small",{children:Number(M.staff)===1?i("webcon.staffEnabled"):i("webcon.staffDisabled")})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:M.domain}),t.jsx("small",{children:i("webcon.adminPath",{path:`/${String(((ie=window.settings)==null?void 0:ie.secure_path)??"admin")}/webcon`})})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:M.title||"-"}),t.jsx("small",{children:M.description||i("webcon.noDescription")}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(Kv,{size:13}),M.logo?i("webcon.logo"):i("webcon.noLogo")]}),t.jsxs("span",{children:[t.jsx(ys,{size:13}),M.background_url?i("webcon.background"):i("webcon.noBackground")]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:ox(K,Q,i)}),t.jsx("small",{children:K.length?i("webcon.selectedCount",{count:K.length}):i("webcon.unrestricted")})]})}),t.jsx("td",{children:Qw(M.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>k(sx(M)),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:_===M.id,onClick:()=>ne(M),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},M.id)}),!b&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("webcon.noWebcon")})})}):null]})]})})}),h?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>k(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:M=>M.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:h.id?i("webcon.editTitle"):i("webcon.newTitle")}),t.jsx("p",{children:h.domain||i("webcon.modalSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.closeMenu"),onClick:()=>k(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:te,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[ri(i("webcon.staffOwnerEmail"),!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:h.email,onChange:M=>q("email",M.target.value),placeholder:i("webcon.staffEmailPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(i("webcon.domain"),!0),t.jsx("input",{className:"config-input",required:!0,value:h.domain,onChange:M=>q("domain",M.target.value),onBlur:M=>q("domain",Md(M.target.value)),placeholder:i("webcon.domainPlaceholder")}),t.jsx("span",{className:"webcon-help",children:i("webcon.domainHelp")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(i("webcon.landingTitle"),!0),t.jsx("input",{className:"config-input",required:!0,value:h.title,onChange:M=>q("title",M.target.value),placeholder:i("webcon.landingTitlePlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(i("webcon.description")),t.jsx("input",{className:"config-input",value:h.description,onChange:M=>q("description",M.target.value),placeholder:i("webcon.descriptionPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(i("webcon.logoUrl")),t.jsx("input",{className:"config-input",type:"url",value:h.logo,onChange:M=>q("logo",M.target.value),placeholder:i("webcon.logoPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(i("webcon.backgroundUrl")),t.jsx("input",{className:"config-input",type:"url",value:h.background_url,onChange:M=>q("background_url",M.target.value),placeholder:i("webcon.backgroundPlaceholder")})]}),t.jsxs("div",{className:"webcon-field full",children:[ri(i("webcon.allowedPlans")),t.jsxs("div",{className:"webcon-plan-picker",children:[Q.map(M=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:h.plan_ids.includes(M.id),onChange:K=>O(M.id,K.target.checked)}),t.jsx("span",{children:M.name})]},M.id)),Q.length===0?t.jsx("span",{className:"webcon-help",children:i("webcon.noPlansLoaded")}):null]}),t.jsx("span",{className:"webcon-help",children:i("webcon.allowedPlansHelp")})]}),t.jsxs("label",{className:"webcon-field full",children:[ri(i("webcon.customHtml")),t.jsx("textarea",{className:"config-input",rows:5,value:h.custom_html,onChange:M=>q("custom_html",M.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:h.logo?t.jsx("img",{src:h.logo,alt:""}):t.jsx(n0,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:h.title||i("webcon.previewTitle")}),t.jsx("span",{children:Md(h.domain)||i("webcon.domainPlaceholder")}),t.jsxs("span",{children:[t.jsx(tu,{size:12})," ",ox(h.plan_ids,Q,i)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>k(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:w,children:[t.jsx(Rn,{size:16}),i(w?"webcon.saving":"common.save")]})]})]})]})}):null]})}function rx(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Ad(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function Kw(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,k]=f.useState(!0),[b,y]=f.useState(!1),[w,S]=f.useState(""),[_,G]=f.useState(""),I=f.useCallback(async()=>{k(!0),S("");try{d(await h1())}catch(q){S(q instanceof Error?q.message:i("notice.loadFailed"))}finally{k(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}I()},[I,s]);async function Y(q){var O,te;if(q.preventDefault(),!!u){y(!0),S(""),G("");try{const P=u.tags?u.tags.split(",").map(ne=>ne.trim()).filter(Boolean):[];await f1({id:u.id,title:u.title,content:u.content,img_url:u.img_url||null,tags:P.length?P:null}),m(null),(O=window.showToast)==null||O.call(window,i("notice.saveSuccess"),"success"),await I()}catch(P){(te=window.showToast)==null||te.call(window,P instanceof Error?P.message:i("notice.saveFailed"),"error")}finally{y(!1)}}}async function A(q){var O;try{await g1(q),await I()}catch(te){(O=window.showToast)==null||O.call(window,te instanceof Error?te.message:i("notice.toggleFailed"),"error")}}async function Q(q){var O;(O=window.showConfirm)==null||O.call(window,{message:i("notice.deleteConfirm"),onConfirm:async()=>{var te,P;try{await x1(q),(te=window.showToast)==null||te.call(window,i("notice.deleteSuccess"),"success"),await I()}catch(ne){(P=window.showToast)==null||P.call(window,ne instanceof Error?ne.message:i("notice.deleteFailed"),"error")}}})}return t.jsxs(Vt,{title:i("notice.title"),subtitle:i("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("notice.heading")}),t.jsxs("p",{children:[o.length," ",i("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:h,children:[t.jsx(Dt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>m(Ad()),children:[t.jsx(On,{size:16}),i("notice.addNotice")]})]})]}),w?t.jsx("div",{className:"form-error",children:w}):null,_?t.jsx("div",{className:"form-success",children:_}):null,h&&o.length===0?t.jsx(bt,{label:i("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("notice.titleField")}),t.jsx("th",{children:i("notice.show")}),t.jsx("th",{children:i("notice.tags")}),t.jsx("th",{children:i("notice.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(q=>{var O;return t.jsxs("tr",{children:[t.jsx("td",{children:q.id}),t.jsx("td",{children:t.jsx("strong",{children:q.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${q.show?"active":""}`,type:"button",onClick:()=>void A(q.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((O=q.tags)==null?void 0:O.map((te,P)=>t.jsx("span",{className:"tag",children:te},P)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:rx(q.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>m(Ad(q)),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Q(q.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},q.id)}),!h&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(q=>t.jsxs("div",{className:`notice-mobile-card ${q.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",q.id]})}),t.jsx("button",{className:`admin-switch ${q.show?"active":""}`,type:"button",onClick:()=>void A(q.id),"aria-label":q.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:q.title}),t.jsx("div",{className:"notice-tags",children:q.tags&&q.tags.length>0?q.tags.map((O,te)=>t.jsx("span",{className:"tag-badge",children:O},te)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[i("notice.created"),": ",rx(q.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>m(Ad(q)),children:[t.jsx(Jt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void Q(q.id),children:[t.jsx(nn,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},q.id)),!h&&o.length===0?t.jsx("div",{className:"empty-state",children:i("notice.noNotices")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?i("notice.editNotice"):i("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Y,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:q=>m({...u,title:q.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:u.content,onChange:q=>m({...u,content:q.target.value}),placeholder:i("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:u.img_url,onChange:q=>m({...u,img_url:q.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.tags")}),t.jsx("input",{className:"config-input",value:u.tags,onChange:q=>m({...u,tags:q.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(Rn,{size:16}),i(b?"notice.saving":"common.save")]})]})]})]})}):null]})}function Dd(s){return new Date(s*1e3).toLocaleString("vi-VN")}const cx=(s,i)=>({0:{label:i("ticket.statusOpen"),cls:"enabled"},1:{label:i("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},Od=(s,i)=>({0:i("ticket.levelLow"),1:i("ticket.levelMedium"),2:i("ticket.levelHigh")})[s]||String(s);function Fw(){var x;const s=qt(),{t:i}=Ge(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,k]=f.useState(!1),[b,y]=f.useState(null),[w,S]=f.useState(""),[_,G]=f.useState(!0),[I,Y]=f.useState(!1),[A,Q]=f.useState(""),q=f.useRef(null),[O,te]=f.useState([]),[P,ne]=f.useState(null),M=f.useCallback(async()=>{G(!0),Q("");try{d(await b1())}catch(T){Q(T instanceof Error?T.message:"Load failed")}finally{G(!1)}},[]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}M(),fi().then(T=>{T&&te(T)}).catch(()=>{})},[M,s]),f.useEffect(()=>{var T;(T=q.current)==null||T.scrollIntoView({behavior:"smooth"})},[u]);async function K(T){var W;y(T),S(""),m(null),ne(null),k(!0);try{const $=await Tf(T);if(m($),$&&$.user_id)try{const le=await Lx($.user_id);le&&le.data&&ne(le.data)}catch(le){console.error("Failed to load user info:",le)}}catch{(W=window.showToast)==null||W.call(window,"Failed to load message thread","error")}finally{k(!1)}}async function ie(T){var W,$;if(T.preventDefault(),!(!b||!w.trim())){Y(!0),Q("");try{await y1(b,w),S(""),(W=window.showToast)==null||W.call(window,"Reply sent!","success");try{const le=await Tf(b);m(le)}catch{}await M()}catch(le){($=window.showToast)==null||$.call(window,le instanceof Error?le.message:"Reply failed","error")}finally{Y(!1)}}}async function ye(T){var W;(W=window.showConfirm)==null||W.call(window,{message:"Close this ticket?",onConfirm:async()=>{var $,le;Q("");try{await v1(T),($=window.showToast)==null||$.call(window,"Ticket closed!","success"),b===T&&(y(null),m(null)),await M()}catch(v){Q(v instanceof Error?v.message:"Close failed"),(le=window.showToast)==null||le.call(window,v instanceof Error?v.message:"Close failed","error")}}})}return t.jsxs(Vt,{title:i("ticket.title"),subtitle:i("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:M,disabled:_,children:[t.jsx(Dt,{size:16}),i("common.refresh")]})})]}),A?t.jsx("div",{className:"form-error",children:A}):null,_&&o.length===0?t.jsx(bt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("ticket.id")}),t.jsx("th",{children:i("ticket.subject")}),t.jsx("th",{children:i("ticket.user")}),t.jsx("th",{children:i("ticket.level")}),t.jsx("th",{children:i("ticket.status")}),t.jsx("th",{children:i("ticket.replyStatus")}),t.jsx("th",{children:i("ticket.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(T=>{const W=cx(T.status,i);return t.jsxs("tr",{children:[t.jsx("td",{children:T.id}),t.jsx("td",{children:t.jsx("strong",{children:T.subject})}),t.jsxs("td",{children:["#",T.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:Od(T.level,i)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${W.cls}`,children:W.label})}),t.jsx("td",{children:T.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:Dd(T.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:T.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void K(T.id),children:[t.jsx(us,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ye(T.id),children:[t.jsx(qd,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void K(T.id),children:[t.jsx(us,{size:14}),i("ticket.viewHistory")]})})})]},T.id)}),!_&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(T=>{const W=cx(T.status,i);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:T.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Od(T.level,i)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.id"),": ",t.jsxs("strong",{children:["#",T.id]})]}),t.jsx("span",{className:`status-pill ${W.cls}`,children:W.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.user"),": ",t.jsxs("strong",{children:["#",T.user_id]})]}),t.jsx("span",{children:T.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[i("ticket.created"),": ",t.jsx("small",{children:Dd(T.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:T.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void K(T.id),children:[t.jsx(us,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ye(T.id),children:[t.jsx(qd,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void K(T.id),children:[t.jsx(us,{size:14}),i("ticket.viewHistory")]})})]},T.id)}),!_&&o.length===0?t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")}):null]}),b!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u?`${i("ticket.ticketDetail")}: ${u.subject}`:`${i("ticket.ticketDetail")} #${b}`}),t.jsxs("p",{children:[i("ticket.user"),": #",u==null?void 0:u.user_id," | ",i("ticket.level"),": ",u!=null?Od(u.level,i):i("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{y(null),m(null)},children:t.jsx(lt,{size:18})})]}),P&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("common.email")}),t.jsx("span",{className:"details-value",title:P.email,children:P.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((x=O.find(T=>T.id===P.plan_id))==null?void 0:x.name)||i("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[Nn(P.balance)," ",i("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:P.expired_at?new Date(P.expired_at*1e3).toLocaleDateString("vi-VN"):i("ticket.never")})]})]}),h?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(bt,{label:i("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[u!=null&&u.message&&u.message.length>0?u.message.map(T=>{const W=T.is_me;return t.jsxs("div",{className:`chat-message ${W?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:T.message}),t.jsxs("div",{className:"chat-meta",children:[W?i("ticket.staff"):`${i("ticket.user")} #${T.user_id}`," • ",Dd(T.created_at)]})]},T.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:i("ticket.noLogs")}),t.jsx("div",{ref:q})]}),(u==null?void 0:u.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ie,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:i("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:w,onChange:T=>S(T.target.value),placeholder:i("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I||!w.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(zx,{size:14}),I?"":i("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:i("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function dx(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const ux={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function px(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function Jw(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,k]=f.useState(!0),[b,y]=f.useState(!1),[w,S]=f.useState(""),[_,G]=f.useState(""),I=f.useCallback(async()=>{k(!0),S("");try{d(await j1())}catch(O){S(O instanceof Error?O.message:i("knowledge.loadFailed"))}finally{k(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}I()},[I,s]);async function Y(O){var te;try{const P=await w1(O.id);m(px(P))}catch(P){(te=window.showToast)==null||te.call(window,P instanceof Error?P.message:i("knowledge.detailFailed"),"error")}}async function A(O){var te,P;if(O.preventDefault(),!!u){y(!0),S(""),G("");try{await _1({id:u.id,category:u.category,title:u.title,body:u.body,language:u.language||null,sort:u.sort?Number(u.sort):null}),m(null),(te=window.showToast)==null||te.call(window,i("knowledge.saveSuccess"),"success"),await I()}catch(ne){(P=window.showToast)==null||P.call(window,ne instanceof Error?ne.message:i("knowledge.saveFailed"),"error")}finally{y(!1)}}}async function Q(O){var te;try{await S1(O),await I()}catch(P){(te=window.showToast)==null||te.call(window,P instanceof Error?P.message:i("knowledge.toggleFailed"),"error")}}async function q(O){var te;(te=window.showConfirm)==null||te.call(window,{message:i("knowledge.deleteConfirm"),onConfirm:async()=>{var P,ne;try{await N1(O),(P=window.showToast)==null||P.call(window,i("knowledge.deleteSuccess"),"success"),await I()}catch(M){(ne=window.showToast)==null||ne.call(window,M instanceof Error?M.message:i("knowledge.deleteFailed"),"error")}}})}return t.jsxs(Vt,{title:i("knowledge.title"),subtitle:i("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",i("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:h,children:[t.jsx(Dt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>m(px()),children:[t.jsx(On,{size:16}),i("knowledge.addArticle")]})]})]}),w?t.jsx("div",{className:"form-error",children:w}):null,_?t.jsx("div",{className:"form-success",children:_}):null,h&&o.length===0?t.jsx(bt,{label:i("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("knowledge.category")}),t.jsx("th",{children:i("knowledge.titleField")}),t.jsx("th",{children:i("knowledge.language")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("knowledge.sort")}),t.jsx("th",{children:i("knowledge.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(O=>t.jsxs("tr",{children:[t.jsx("td",{children:O.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:O.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:O.title})}),t.jsx("td",{children:O.language&&ux[O.language]||O.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${O.show?"active":""}`,type:"button",onClick:()=>void Q(O.id),"aria-label":i("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:O.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:dx(O.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Y(O),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void q(O.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},O.id)),!h&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(O=>t.jsxs("div",{className:`knowledge-mobile-card ${O.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",O.id]}),O.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",O.sort]})]}),t.jsx("button",{className:`admin-switch ${O.show?"active":""}`,type:"button",onClick:()=>void Q(O.id),"aria-label":O.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:O.title}),t.jsxs("div",{className:"card-meta",children:[O.category&&t.jsx("span",{className:"category-badge",children:O.category}),O.language&&t.jsx("span",{className:"lang-badge",children:ux[O.language]||O.language})]}),t.jsxs("p",{className:"created-time",children:[i("knowledge.created"),": ",dx(O.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void Y(O),children:[t.jsx(Jt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void q(O.id),children:[t.jsx(nn,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},O.id)),!h&&o.length===0?t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?i("knowledge.editArticle"):i("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:A,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:u.category,onChange:O=>m({...u,category:O.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:O=>m({...u,title:O.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:u.body,onChange:O=>m({...u,body:O.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:u.language,onChange:O=>m({...u,language:O.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:i("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:i("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:i("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:i("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:i("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:i("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:i("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:u.sort,onChange:O=>m({...u,sort:O.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(Rn,{size:16}),i(b?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function Vw(){const s=qt(),{t:i}=Ge(),[o,d]=f.useState(null),[u,m]=f.useState(null),[h,k]=f.useState(null),[b,y]=f.useState(""),[w,S]=f.useState(!0),[_,G]=f.useState(""),I=f.useCallback(async()=>{S(!0),G("");try{const[A,Q,q,O]=await Promise.all([E1().catch(()=>({data:{}})),D1().catch(()=>({data:{}})),O1().catch(()=>({data:[]})),R1().catch(()=>({data:""}))]);d(A.data),m(Q.data),k(q.data),y(typeof O.data=="string"?O.data:"")}catch(A){G(A instanceof Error?A.message:i("queue.toastLoadFailed"))}finally{S(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}I()},[I,s]);function Y(A,Q,q){return A?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[q," ",Q]}),t.jsx("div",{className:"queue-grid",children:Object.entries(A).map(([O,te])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:O}),t.jsx("strong",{children:typeof te=="object"?JSON.stringify(te):String(te??"—")})]},O))})]}):null}return t.jsxs(Vt,{title:i("queue.title"),subtitle:i("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("queue.heading")}),t.jsx("p",{children:i("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:w,children:[t.jsx(Dt,{size:16}),i("common.refresh")]})})]}),_?t.jsx("div",{className:"form-error",children:_}):null,w?t.jsx(bt,{label:i("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[Y(o,i("queue.systemStatus"),t.jsx(Ko,{size:18})),Y(u,i("queue.queueStats"),t.jsx(tu,{size:18})),h&&h.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(Dv,{size:18})," ",i("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(h,null,2)})]}):null,b?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx($v,{size:18})," ",i("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:b})]}):null]})]})}const Pw=f.createContext(null);function Ww({children:s}){const[i,o]=f.useState([]),[d,u]=f.useState(null),m=f.useCallback((y,w="success")=>{const S=Math.random().toString(36).substring(2,9);o(_=>[..._,{id:S,message:y,type:w}]),setTimeout(()=>{o(_=>_.filter(G=>G.id!==S))},5e3)},[]),h=f.useCallback(y=>{u(y)},[]);f.useEffect(()=>{typeof window<"u"&&(window.showToast=m,window.showConfirm=h)},[m,h]);const k=async()=>{if(d){try{await d.onConfirm()}catch(y){console.error("Error in onConfirm:",y)}u(null)}},b=()=>{d&&(d.onCancel&&d.onCancel(),u(null))};return t.jsxs(Pw.Provider,{value:{showToast:m,showConfirm:h},children:[s,t.jsx("div",{className:"toast-container",children:i.map(y=>{let w=Fv;return y.type==="success"&&(w=kx),y.type==="error"&&(w=Hv),y.type==="warning"&&(w=$d),t.jsxs("div",{className:`toast-card toast-${y.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(w,{size:18})}),t.jsx("div",{className:"toast-message",children:y.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(S=>S.filter(_=>_.id!==y.id)),children:t.jsx(lt,{size:14})})]},y.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:b,children:t.jsxs("div",{className:"confirm-card",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx($d,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:b,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:k,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Iw({children:s}){return t.jsx(X1,{children:t.jsx(Ww,{children:s})})}function e2(){return t.jsx(Iw,{children:t.jsxs(xv,{children:[t.jsx(Tt,{path:"/login",element:t.jsx(Z1,{})}),t.jsx(Tt,{path:"/dashboard",element:t.jsx(ij,{})}),t.jsx(Tt,{path:"/config/system",element:t.jsx(hj,{})}),t.jsx(Tt,{path:"/config/payment",element:t.jsx(gj,{})}),t.jsx(Tt,{path:"/config/theme",element:t.jsx(vj,{})}),t.jsx(Tt,{path:"/server/manage",element:t.jsx(lw,{})}),t.jsx(Tt,{path:"/server/group",element:t.jsx(sw,{})}),t.jsx(Tt,{path:"/server/route",element:t.jsx(cw,{})}),t.jsx(Tt,{path:"/plan",element:t.jsx(mw,{})}),t.jsx(Tt,{path:"/order",element:t.jsx(xw,{})}),t.jsx(Tt,{path:"/coupon",element:t.jsx(gw,{})}),t.jsx(Tt,{path:"/giftcard",element:t.jsx(yw,{})}),t.jsx(Tt,{path:"/user",element:t.jsx(kw,{})}),t.jsx(Tt,{path:"/subscription",element:t.jsx(Uw,{})}),t.jsx(Tt,{path:"/device",element:t.jsx(Gw,{})}),t.jsx(Tt,{path:"/webcon",element:t.jsx(Zw,{})}),t.jsx(Tt,{path:"/notice",element:t.jsx(Kw,{})}),t.jsx(Tt,{path:"/ticket",element:t.jsx(Fw,{})}),t.jsx(Tt,{path:"/knowledge",element:t.jsx(Jw,{})}),t.jsx(Tt,{path:"/queue",element:t.jsx(Vw,{})}),t.jsx(Tt,{path:"/",element:t.jsx(ff,{to:"/dashboard",replace:!0})}),t.jsx(Tt,{path:"*",element:t.jsx(ff,{to:"/dashboard",replace:!0})})]})})}Ny.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsx(_v,{children:t.jsx(e2,{})})}));
