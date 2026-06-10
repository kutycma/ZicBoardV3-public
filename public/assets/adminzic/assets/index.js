function cy(s,i){for(var o=0;o<i.length;o++){const d=i[o];if(typeof d!="string"&&!Array.isArray(d)){for(const u in d)if(u!=="default"&&!(u in s)){const m=Object.getOwnPropertyDescriptor(d,u);m&&Object.defineProperty(s,u,m.get?m:{enumerable:!0,get:()=>d[u]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function o(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(u){if(u.ep)return;u.ep=!0;const m=o(u);fetch(u.href,m)}})();function dy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var dd={exports:{}},os={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function uy(){if(Wh)return os;Wh=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(d,u,m){var h=null;if(m!==void 0&&(h=""+m),u.key!==void 0&&(h=""+u.key),"key"in u){m={};for(var k in u)k!=="key"&&(m[k]=u[k])}else m=u;return u=m.ref,{$$typeof:s,type:d,key:h,ref:u!==void 0?u:null,props:m}}return os.Fragment=i,os.jsx=o,os.jsxs=o,os}var Ih;function py(){return Ih||(Ih=1,dd.exports=uy()),dd.exports}var t=py(),ud={exports:{}},$e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function my(){if(ef)return $e;ef=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),h=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),_=Symbol.iterator;function $(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,M={};function Q(z,R,V){this.props=z,this.context=R,this.refs=M,this.updater=V||W}Q.prototype.isReactComponent={},Q.prototype.setState=function(z,R){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,R,"setState")},Q.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function q(){}q.prototype=Q.prototype;function D(z,R,V){this.props=z,this.context=R,this.refs=M,this.updater=V||W}var I=D.prototype=new q;I.constructor=D,G(I,Q.prototype),I.isPureReactComponent=!0;var te=Array.isArray;function ie(){}var T={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function ne(z,R,V){var xe=V.ref;return{$$typeof:s,type:z,key:R,ref:xe!==void 0?xe:null,props:V}}function ge(z,R){return ne(z.type,R,z.props)}function g(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function L(z){var R={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(V){return R[V]})}var re=/\/+/g;function Y(z,R){return typeof z=="object"&&z!==null&&z.key!=null?L(""+z.key):R.toString(36)}function me(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(ie,ie):(z.status="pending",z.then(function(R){z.status==="pending"&&(z.status="fulfilled",z.value=R)},function(R){z.status==="pending"&&(z.status="rejected",z.reason=R)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function x(z,R,V,xe,ze){var _e=typeof z;(_e==="undefined"||_e==="boolean")&&(z=null);var He=!1;if(z===null)He=!0;else switch(_e){case"bigint":case"string":case"number":He=!0;break;case"object":switch(z.$$typeof){case s:case i:He=!0;break;case j:return He=z._init,x(He(z._payload),R,V,xe,ze)}}if(He)return ze=ze(z),He=xe===""?"."+Y(z,0):xe,te(ze)?(V="",He!=null&&(V=He.replace(re,"$&/")+"/"),x(ze,R,V,"",function(he){return he})):ze!=null&&(g(ze)&&(ze=ge(ze,V+(ze.key==null||z&&z.key===ze.key?"":(""+ze.key).replace(re,"$&/")+"/")+He)),R.push(ze)),1;He=0;var U=xe===""?".":xe+":";if(te(z))for(var fe=0;fe<z.length;fe++)xe=z[fe],_e=U+Y(xe,fe),He+=x(xe,R,V,_e,ze);else if(fe=$(z),typeof fe=="function")for(z=fe.call(z),fe=0;!(xe=z.next()).done;)xe=xe.value,_e=U+Y(xe,fe++),He+=x(xe,R,V,_e,ze);else if(_e==="object"){if(typeof z.then=="function")return x(me(z),R,V,xe,ze);throw R=String(z),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return He}function A(z,R,V){if(z==null)return z;var xe=[],ze=0;return x(z,xe,"","",function(_e){return R.call(V,_e,ze++)}),xe}function C(z){if(z._status===-1){var R=z._result;R=R(),R.then(function(V){(z._status===0||z._status===-1)&&(z._status=1,z._result=V)},function(V){(z._status===0||z._status===-1)&&(z._status=2,z._result=V)}),z._status===-1&&(z._status=0,z._result=R)}if(z._status===1)return z._result.default;throw z._result}var de=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},ae={map:A,forEach:function(z,R,V){A(z,function(){R.apply(this,arguments)},V)},count:function(z){var R=0;return A(z,function(){R++}),R},toArray:function(z){return A(z,function(R){return R})||[]},only:function(z){if(!g(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return $e.Activity=S,$e.Children=ae,$e.Component=Q,$e.Fragment=o,$e.Profiler=u,$e.PureComponent=D,$e.StrictMode=d,$e.Suspense=y,$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,$e.__COMPILER_RUNTIME={__proto__:null,c:function(z){return T.H.useMemoCache(z)}},$e.cache=function(z){return function(){return z.apply(null,arguments)}},$e.cacheSignal=function(){return null},$e.cloneElement=function(z,R,V){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var xe=G({},z.props),ze=z.key;if(R!=null)for(_e in R.key!==void 0&&(ze=""+R.key),R)!K.call(R,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&R.ref===void 0||(xe[_e]=R[_e]);var _e=arguments.length-2;if(_e===1)xe.children=V;else if(1<_e){for(var He=Array(_e),U=0;U<_e;U++)He[U]=arguments[U+2];xe.children=He}return ne(z.type,ze,xe)},$e.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:m,_context:z},z},$e.createElement=function(z,R,V){var xe,ze={},_e=null;if(R!=null)for(xe in R.key!==void 0&&(_e=""+R.key),R)K.call(R,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(ze[xe]=R[xe]);var He=arguments.length-2;if(He===1)ze.children=V;else if(1<He){for(var U=Array(He),fe=0;fe<He;fe++)U[fe]=arguments[fe+2];ze.children=U}if(z&&z.defaultProps)for(xe in He=z.defaultProps,He)ze[xe]===void 0&&(ze[xe]=He[xe]);return ne(z,_e,ze)},$e.createRef=function(){return{current:null}},$e.forwardRef=function(z){return{$$typeof:k,render:z}},$e.isValidElement=g,$e.lazy=function(z){return{$$typeof:j,_payload:{_status:-1,_result:z},_init:C}},$e.memo=function(z,R){return{$$typeof:v,type:z,compare:R===void 0?null:R}},$e.startTransition=function(z){var R=T.T,V={};T.T=V;try{var xe=z(),ze=T.S;ze!==null&&ze(V,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(ie,de)}catch(_e){de(_e)}finally{R!==null&&V.types!==null&&(R.types=V.types),T.T=R}},$e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},$e.use=function(z){return T.H.use(z)},$e.useActionState=function(z,R,V){return T.H.useActionState(z,R,V)},$e.useCallback=function(z,R){return T.H.useCallback(z,R)},$e.useContext=function(z){return T.H.useContext(z)},$e.useDebugValue=function(){},$e.useDeferredValue=function(z,R){return T.H.useDeferredValue(z,R)},$e.useEffect=function(z,R){return T.H.useEffect(z,R)},$e.useEffectEvent=function(z){return T.H.useEffectEvent(z)},$e.useId=function(){return T.H.useId()},$e.useImperativeHandle=function(z,R,V){return T.H.useImperativeHandle(z,R,V)},$e.useInsertionEffect=function(z,R){return T.H.useInsertionEffect(z,R)},$e.useLayoutEffect=function(z,R){return T.H.useLayoutEffect(z,R)},$e.useMemo=function(z,R){return T.H.useMemo(z,R)},$e.useOptimistic=function(z,R){return T.H.useOptimistic(z,R)},$e.useReducer=function(z,R,V){return T.H.useReducer(z,R,V)},$e.useRef=function(z){return T.H.useRef(z)},$e.useState=function(z){return T.H.useState(z)},$e.useSyncExternalStore=function(z,R,V){return T.H.useSyncExternalStore(z,R,V)},$e.useTransition=function(){return T.H.useTransition()},$e.version="19.2.6",$e}var tf;function Fd(){return tf||(tf=1,ud.exports=my()),ud.exports}var f=Fd();const hy=dy(f),fy=cy({__proto__:null,default:hy},[f]);var pd={exports:{}},rs={},md={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function xy(){return nf||(nf=1,(function(s){function i(x,A){var C=x.length;x.push(A);e:for(;0<C;){var de=C-1>>>1,ae=x[de];if(0<u(ae,A))x[de]=A,x[C]=ae,C=de;else break e}}function o(x){return x.length===0?null:x[0]}function d(x){if(x.length===0)return null;var A=x[0],C=x.pop();if(C!==A){x[0]=C;e:for(var de=0,ae=x.length,z=ae>>>1;de<z;){var R=2*(de+1)-1,V=x[R],xe=R+1,ze=x[xe];if(0>u(V,C))xe<ae&&0>u(ze,V)?(x[de]=ze,x[xe]=C,de=xe):(x[de]=V,x[R]=C,de=R);else if(xe<ae&&0>u(ze,C))x[de]=ze,x[xe]=C,de=xe;else break e}}return A}function u(x,A){var C=x.sortIndex-A.sortIndex;return C!==0?C:x.id-A.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var h=Date,k=h.now();s.unstable_now=function(){return h.now()-k}}var y=[],v=[],j=1,S=null,_=3,$=!1,W=!1,G=!1,M=!1,Q=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function I(x){for(var A=o(v);A!==null;){if(A.callback===null)d(v);else if(A.startTime<=x)d(v),A.sortIndex=A.expirationTime,i(y,A);else break;A=o(v)}}function te(x){if(G=!1,I(x),!W)if(o(y)!==null)W=!0,ie||(ie=!0,L());else{var A=o(v);A!==null&&me(te,A.startTime-x)}}var ie=!1,T=-1,K=5,ne=-1;function ge(){return M?!0:!(s.unstable_now()-ne<K)}function g(){if(M=!1,ie){var x=s.unstable_now();ne=x;var A=!0;try{e:{W=!1,G&&(G=!1,q(T),T=-1),$=!0;var C=_;try{t:{for(I(x),S=o(y);S!==null&&!(S.expirationTime>x&&ge());){var de=S.callback;if(typeof de=="function"){S.callback=null,_=S.priorityLevel;var ae=de(S.expirationTime<=x);if(x=s.unstable_now(),typeof ae=="function"){S.callback=ae,I(x),A=!0;break t}S===o(y)&&d(y),I(x)}else d(y);S=o(y)}if(S!==null)A=!0;else{var z=o(v);z!==null&&me(te,z.startTime-x),A=!1}}break e}finally{S=null,_=C,$=!1}A=void 0}}finally{A?L():ie=!1}}}var L;if(typeof D=="function")L=function(){D(g)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,Y=re.port2;re.port1.onmessage=g,L=function(){Y.postMessage(null)}}else L=function(){Q(g,0)};function me(x,A){T=Q(function(){x(s.unstable_now())},A)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(x){x.callback=null},s.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<x?Math.floor(1e3/x):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(x){switch(_){case 1:case 2:case 3:var A=3;break;default:A=_}var C=_;_=A;try{return x()}finally{_=C}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(x,A){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var C=_;_=x;try{return A()}finally{_=C}},s.unstable_scheduleCallback=function(x,A,C){var de=s.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?de+C:de):C=de,x){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=C+ae,x={id:j++,callback:A,priorityLevel:x,startTime:C,expirationTime:ae,sortIndex:-1},C>de?(x.sortIndex=C,i(v,x),o(y)===null&&x===o(v)&&(G?(q(T),T=-1):G=!0,me(te,C-de))):(x.sortIndex=ae,i(y,x),W||$||(W=!0,ie||(ie=!0,L()))),x},s.unstable_shouldYield=ge,s.unstable_wrapCallback=function(x){var A=_;return function(){var C=_;_=A;try{return x.apply(this,arguments)}finally{_=C}}}})(hd)),hd}var af;function gy(){return af||(af=1,md.exports=xy()),md.exports}var fd={exports:{}},dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf;function by(){if(lf)return dn;lf=1;var s=Fd();function i(y){var v="https://react.dev/errors/"+y;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)v+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+y+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(y,v,j){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:S==null?null:""+S,children:y,containerInfo:v,implementation:j}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(y,v){if(y==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,dn.createPortal=function(y,v){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(i(299));return m(y,v,null,j)},dn.flushSync=function(y){var v=h.T,j=d.p;try{if(h.T=null,d.p=2,y)return y()}finally{h.T=v,d.p=j,d.d.f()}},dn.preconnect=function(y,v){typeof y=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,d.d.C(y,v))},dn.prefetchDNS=function(y){typeof y=="string"&&d.d.D(y)},dn.preinit=function(y,v){if(typeof y=="string"&&v&&typeof v.as=="string"){var j=v.as,S=k(j,v.crossOrigin),_=typeof v.integrity=="string"?v.integrity:void 0,$=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;j==="style"?d.d.S(y,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:$}):j==="script"&&d.d.X(y,{crossOrigin:S,integrity:_,fetchPriority:$,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},dn.preinitModule=function(y,v){if(typeof y=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var j=k(v.as,v.crossOrigin);d.d.M(y,{crossOrigin:j,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&d.d.M(y)},dn.preload=function(y,v){if(typeof y=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var j=v.as,S=k(j,v.crossOrigin);d.d.L(y,j,{crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},dn.preloadModule=function(y,v){if(typeof y=="string")if(v){var j=k(v.as,v.crossOrigin);d.d.m(y,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:j,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else d.d.m(y)},dn.requestFormReset=function(y){d.d.r(y)},dn.unstable_batchedUpdates=function(y,v){return y(v)},dn.useFormState=function(y,v,j){return h.H.useFormState(y,v,j)},dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},dn.version="19.2.6",dn}var sf;function mx(){if(sf)return fd.exports;sf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),fd.exports=by(),fd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of;function yy(){if(of)return rs;of=1;var s=gy(),i=Fd(),o=mx();function d(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function k(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(d(188))}function v(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(d(188));return n!==e?null:e}for(var a=e,l=n;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){a=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return y(r),e;if(c===l)return y(r),n;c=c.sibling}throw Error(d(188))}if(a.return!==l.return)a=r,l=c;else{for(var p=!1,b=r.child;b;){if(b===a){p=!0,a=r,l=c;break}if(b===l){p=!0,l=r,a=c;break}b=b.sibling}if(!p){for(b=c.child;b;){if(b===a){p=!0,a=c,l=r;break}if(b===l){p=!0,l=c,a=r;break}b=b.sibling}if(!p)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:n}function j(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=j(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),$=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),D=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),g=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=g&&e[g]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function Y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case Q:return"Profiler";case M:return"StrictMode";case te:return"Suspense";case ie:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case D:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case I:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case T:return n=e.displayName||null,n!==null?n:Y(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return Y(e(n))}catch{}}return null}var me=Array.isArray,x=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C={pending:!1,data:null,method:null,action:null},de=[],ae=-1;function z(e){return{current:e}}function R(e){0>ae||(e.current=de[ae],de[ae]=null,ae--)}function V(e,n){ae++,de[ae]=e.current,e.current=n}var xe=z(null),ze=z(null),_e=z(null),He=z(null);function U(e,n){switch(V(_e,n),V(ze,e),V(xe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?jh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=jh(n),e=wh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}R(xe),V(xe,e)}function fe(){R(xe),R(ze),R(_e)}function he(e){e.memoizedState!==null&&V(He,e);var n=xe.current,a=wh(n,e.type);n!==a&&(V(ze,e),V(xe,a))}function qe(e){ze.current===e&&(R(xe),R(ze)),He.current===e&&(R(He),as._currentValue=C)}var ct,ut;function nt(e){if(ct===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ct=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ct+e+ut}var Ct=!1;function pt(e,n){if(!e||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var ue=function(){throw Error()};if(Object.defineProperty(ue.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ue,[])}catch(P){var F=P}Reflect.construct(e,[],ue)}else{try{ue.call()}catch(P){F=P}e.call(ue.prototype)}}else{try{throw Error()}catch(P){F=P}(ue=e())&&typeof ue.catch=="function"&&ue.catch(function(){})}}catch(P){if(P&&F&&typeof P.stack=="string")return[P.stack,F.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),p=c[0],b=c[1];if(p&&b){var E=p.split(`
`),Z=b.split(`
`);for(r=l=0;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;for(;r<Z.length&&!Z[r].includes("DetermineComponentFrameRoot");)r++;if(l===E.length||r===Z.length)for(l=E.length-1,r=Z.length-1;1<=l&&0<=r&&E[l]!==Z[r];)r--;for(;1<=l&&0<=r;l--,r--)if(E[l]!==Z[r]){if(l!==1||r!==1)do if(l--,r--,0>r||E[l]!==Z[r]){var le=`
`+E[l].replace(" at new "," at ");return e.displayName&&le.includes("<anonymous>")&&(le=le.replace("<anonymous>",e.displayName)),le}while(1<=l&&0<=r);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?nt(a):""}function Pt(e,n){switch(e.tag){case 26:case 27:case 5:return nt(e.type);case 16:return nt("Lazy");case 13:return e.child!==n&&n!==null?nt("Suspense Fallback"):nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return pt(e.type,!1);case 11:return pt(e.type.render,!1);case 1:return pt(e.type,!0);case 31:return nt("Activity");default:return""}}function vt(e){try{var n="",a=null;do n+=Pt(e,a),a=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ke=Object.prototype.hasOwnProperty,$t=s.unstable_scheduleCallback,Ot=s.unstable_cancelCallback,ke=s.unstable_shouldYield,Sn=s.unstable_requestPaint,De=s.unstable_now,pn=s.unstable_getCurrentPriorityLevel,mn=s.unstable_ImmediatePriority,Wt=s.unstable_UserBlockingPriority,J=s.unstable_NormalPriority,Ae=s.unstable_LowPriority,Se=s.unstable_IdlePriority,we=s.log,Je=s.unstable_setDisableYieldValue,Be=null,Ge=null;function Ve(e){if(typeof we=="function"&&Je(e),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(Be,e)}catch{}}var st=Math.clz32?Math.clz32:ta,hn=Math.log,Et=Math.LN2;function ta(e){return e>>>=0,e===0?32:31-(hn(e)/Et|0)|0}var Gt=256,fn=262144,Fn=4194304;function xn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function H(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~c,l!==0?r=xn(l):(p&=b,p!==0?r=xn(p):a||(a=b&~e,a!==0&&(r=xn(a))))):(b=l&~c,b!==0?r=xn(b):p!==0?r=xn(p):a||(a=l&~e,a!==0&&(r=xn(a)))),r===0?0:n!==0&&n!==r&&(n&c)===0&&(c=r&-r,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:r}function se(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ee(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var e=Fn;return Fn<<=1,(Fn&62914560)===0&&(Fn=4194304),e}function Ze(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Fe(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function w(e,n,a,l,r,c){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,E=e.expirationTimes,Z=e.hiddenUpdates;for(a=p&~a;0<a;){var le=31-st(a),ue=1<<le;b[le]=0,E[le]=-1;var F=Z[le];if(F!==null)for(Z[le]=null,le=0;le<F.length;le++){var P=F[le];P!==null&&(P.lane&=-536870913)}a&=~ue}l!==0&&ce(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~n))}function ce(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-st(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function pe(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-st(a),r=1<<l;r&n|e[l]&n&&(e[l]|=n),a&=~r}}function Ce(e,n){var a=n&-n;return a=(a&42)!==0?1:jt(a),(a&(e.suspendedLanes|n))!==0?0:a}function jt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ca(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:Xh(e.type))}function Nt(e,n){var a=A.p;try{return A.p=e,n()}finally{A.p=a}}var Jn=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Jn,zt="__reactProps$"+Jn,Oa="__reactContainer$"+Jn,N="__reactEvents$"+Jn,be="__reactListeners$"+Jn,ve="__reactHandles$"+Jn,Ue="__reactResources$"+Jn,it="__reactMarker$"+Jn;function bn(e){delete e[Ut],delete e[zt],delete e[N],delete e[be],delete e[ve]}function Yt(e){var n=e[Ut];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oa]||a[Ut]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Th(e);e!==null;){if(a=e[Ut])return a;e=Th(e)}return n}e=a,a=e.parentNode}return null}function na(e){if(e=e[Ut]||e[Oa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function da(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(d(33))}function Ua(e){var n=e[Ue];return n||(n=e[Ue]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function It(e){e[it]=!0}var cu=new Set,du={};function xi(e,n){Ri(e,n),Ri(e+"Capture",n)}function Ri(e,n){for(du[e]=n,e=0;e<n.length;e++)cu.add(n[e])}var eg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uu={},pu={};function tg(e){return Ke.call(pu,e)?!0:Ke.call(uu,e)?!1:eg.test(e)?pu[e]=!0:(uu[e]=!0,!1)}function vs(e,n,a){if(tg(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function js(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ua(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}function Hn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ng(e,n,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,c=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ar(e){if(!e._valueTracker){var n=mu(e)?"checked":"value";e._valueTracker=ng(e,n,""+e[n])}}function hu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=mu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ag=/[\n"\\]/g;function Ln(e){return e.replace(ag,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ir(e,n,a,l,r,c,p,b){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Hn(n)):e.value!==""+Hn(n)&&(e.value=""+Hn(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?lr(e,p,Hn(n)):a!=null?lr(e,p,Hn(a)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Hn(b):e.removeAttribute("name")}function fu(e,n,a,l,r,c,p,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){ar(e);return}a=a!=null?""+Hn(a):"",n=n!=null?""+Hn(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),ar(e)}function lr(e,n,a){n==="number"&&ws(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Hi(e,n,a,l){if(e=e.options,n){n={};for(var r=0;r<a.length;r++)n["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=n.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Hn(a),n=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function xu(e,n,a){if(n!=null&&(n=""+Hn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Hn(a):""}function gu(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(d(92));if(me(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=Hn(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ar(e)}function Li(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ig=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bu(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||ig.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yu(e,n,a){if(n!=null&&typeof n!="object")throw Error(d(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&a[r]!==l&&bu(e,r,l)}else for(var c in n)n.hasOwnProperty(c)&&bu(e,c,n[c])}function sr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _s(e){return sg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pa(){}var or=null;function rr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qi=null,Bi=null;function vu(e){var n=na(e);if(n&&(e=n.stateNode)){var a=e[zt]||null;e:switch(e=n.stateNode,n.type){case"input":if(ir(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ln(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var r=l[zt]||null;if(!r)throw Error(d(90));ir(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&hu(l)}break e;case"textarea":xu(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Hi(e,!!a.multiple,n,!1)}}}var cr=!1;function ju(e,n,a){if(cr)return e(n,a);cr=!0;try{var l=e(n);return l}finally{if(cr=!1,(qi!==null||Bi!==null)&&(uo(),qi&&(n=qi,e=Bi,Bi=qi=null,vu(n),e)))for(n=0;n<e.length;n++)vu(e[n])}}function vl(e,n){var a=e.stateNode;if(a===null)return null;var l=a[zt]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,n,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dr=!1;if(ma)try{var jl={};Object.defineProperty(jl,"passive",{get:function(){dr=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{dr=!1}var Ra=null,ur=null,Ns=null;function wu(){if(Ns)return Ns;var e,n=ur,a=n.length,l,r="value"in Ra?Ra.value:Ra.textContent,c=r.length;for(e=0;e<a&&n[e]===r[e];e++);var p=a-e;for(l=1;l<=p&&n[a-l]===r[c-l];l++);return Ns=r.slice(e,1<l?1-l:void 0)}function Ss(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ks(){return!0}function _u(){return!1}function yn(e){function n(a,l,r,c,p){this._reactName=a,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ks:_u,this.isPropagationStopped=_u,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),n}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=yn(gi),wl=S({},gi,{view:0,detail:0}),og=yn(wl),pr,mr,_l,zs=S({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(pr=e.screenX-_l.screenX,mr=e.screenY-_l.screenY):mr=pr=0,_l=e),pr)},movementY:function(e){return"movementY"in e?e.movementY:mr}}),Nu=yn(zs),rg=S({},zs,{dataTransfer:0}),cg=yn(rg),dg=S({},wl,{relatedTarget:0}),hr=yn(dg),ug=S({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),pg=yn(ug),mg=S({},gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hg=yn(mg),fg=S({},gi,{data:0}),Su=yn(fg),xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bg[e])?!!n[e]:!1}function fr(){return yg}var vg=S({},wl,{key:function(e){if(e.key){var n=xg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fr,charCode:function(e){return e.type==="keypress"?Ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jg=yn(vg),wg=S({},zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=yn(wg),_g=S({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fr}),Ng=yn(_g),Sg=S({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),kg=yn(Sg),Cg=S({},zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zg=yn(Cg),Tg=S({},gi,{newState:0,oldState:0}),Eg=yn(Tg),Mg=[9,13,27,32],xr=ma&&"CompositionEvent"in window,Nl=null;ma&&"documentMode"in document&&(Nl=document.documentMode);var Dg=ma&&"TextEvent"in window&&!Nl,Cu=ma&&(!xr||Nl&&8<Nl&&11>=Nl),zu=" ",Tu=!1;function Eu(e,n){switch(e){case"keyup":return Mg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $i=!1;function Ag(e,n){switch(e){case"compositionend":return Mu(n);case"keypress":return n.which!==32?null:(Tu=!0,zu);case"textInput":return e=n.data,e===zu&&Tu?null:e;default:return null}}function Og(e,n){if($i)return e==="compositionend"||!xr&&Eu(e,n)?(e=wu(),Ns=ur=Ra=null,$i=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cu&&n.locale!=="ko"?null:n.data;default:return null}}var Ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ug[e.type]:n==="textarea"}function Au(e,n,a,l){qi?Bi?Bi.push(l):Bi=[l]:qi=l,n=bo(n,"onChange"),0<n.length&&(a=new Cs("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var Sl=null,kl=null;function Rg(e){fh(e,0)}function Ts(e){var n=da(e);if(hu(n))return e}function Ou(e,n){if(e==="change")return n}var Uu=!1;if(ma){var gr;if(ma){var br="oninput"in document;if(!br){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),br=typeof Ru.oninput=="function"}gr=br}else gr=!1;Uu=gr&&(!document.documentMode||9<document.documentMode)}function Hu(){Sl&&(Sl.detachEvent("onpropertychange",Lu),kl=Sl=null)}function Lu(e){if(e.propertyName==="value"&&Ts(kl)){var n=[];Au(n,kl,e,rr(e)),ju(Rg,n)}}function Hg(e,n,a){e==="focusin"?(Hu(),Sl=n,kl=a,Sl.attachEvent("onpropertychange",Lu)):e==="focusout"&&Hu()}function Lg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ts(kl)}function qg(e,n){if(e==="click")return Ts(n)}function Bg(e,n){if(e==="input"||e==="change")return Ts(n)}function $g(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:$g;function Cl(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var r=a[l];if(!Ke.call(n,r)||!kn(e[r],n[r]))return!1}return!0}function qu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bu(e,n){var a=qu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qu(a)}}function $u(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$u(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ws(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ws(e.document)}return n}function yr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Gg=ma&&"documentMode"in document&&11>=document.documentMode,Gi=null,vr=null,zl=null,jr=!1;function Yu(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jr||Gi==null||Gi!==ws(l)||(l=Gi,"selectionStart"in l&&yr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),zl&&Cl(zl,l)||(zl=l,l=bo(vr,"onSelect"),0<l.length&&(n=new Cs("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=Gi)))}function bi(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Yi={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionrun:bi("Transition","TransitionRun"),transitionstart:bi("Transition","TransitionStart"),transitioncancel:bi("Transition","TransitionCancel"),transitionend:bi("Transition","TransitionEnd")},wr={},Qu={};ma&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete Yi.animationend.animation,delete Yi.animationiteration.animation,delete Yi.animationstart.animation),"TransitionEvent"in window||delete Yi.transitionend.transition);function yi(e){if(wr[e])return wr[e];if(!Yi[e])return e;var n=Yi[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qu)return wr[e]=n[a];return e}var Xu=yi("animationend"),Zu=yi("animationiteration"),Ku=yi("animationstart"),Yg=yi("transitionrun"),Qg=yi("transitionstart"),Xg=yi("transitioncancel"),Fu=yi("transitionend"),Ju=new Map,_r="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_r.push("scrollEnd");function Vn(e,n){Ju.set(e,n),xi(n,[e])}var Es=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qn=[],Qi=0,Nr=0;function Ms(){for(var e=Qi,n=Nr=Qi=0;n<e;){var a=qn[n];qn[n++]=null;var l=qn[n];qn[n++]=null;var r=qn[n];qn[n++]=null;var c=qn[n];if(qn[n++]=null,l!==null&&r!==null){var p=l.pending;p===null?r.next=r:(r.next=p.next,p.next=r),l.pending=r}c!==0&&Vu(a,r,c)}}function Ds(e,n,a,l){qn[Qi++]=e,qn[Qi++]=n,qn[Qi++]=a,qn[Qi++]=l,Nr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Sr(e,n,a,l){return Ds(e,n,a,l),As(e)}function vi(e,n){return Ds(e,null,null,n),As(e)}function Vu(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var r=!1,c=e.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&n!==null&&(r=31-st(a),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=a|536870912),c):null}function As(e){if(50<Vl)throw Vl=0,Oc=null,Error(d(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xi={};function Zg(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,n,a,l){return new Zg(e,n,a,l)}function kr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ha(e,n){var a=e.alternate;return a===null?(a=Cn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Pu(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Os(e,n,a,l,r,c){var p=0;if(l=e,typeof e=="function")kr(e)&&(p=1);else if(typeof e=="string")p=Pb(e,a,xe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Cn(31,a,n,r),e.elementType=ne,e.lanes=c,e;case G:return ji(a.children,r,c,n);case M:p=8,r|=24;break;case Q:return e=Cn(12,a,n,r|2),e.elementType=Q,e.lanes=c,e;case te:return e=Cn(13,a,n,r),e.elementType=te,e.lanes=c,e;case ie:return e=Cn(19,a,n,r),e.elementType=ie,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:p=10;break e;case q:p=9;break e;case I:p=11;break e;case T:p=14;break e;case K:p=16,l=null;break e}p=29,a=Error(d(130,e===null?"null":typeof e,"")),l=null}return n=Cn(p,a,n,r),n.elementType=e,n.type=l,n.lanes=c,n}function ji(e,n,a,l){return e=Cn(7,e,l,n),e.lanes=a,e}function Cr(e,n,a){return e=Cn(6,e,null,n),e.lanes=a,e}function Wu(e){var n=Cn(18,null,null,0);return n.stateNode=e,n}function zr(e,n,a){return n=Cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Iu=new WeakMap;function Bn(e,n){if(typeof e=="object"&&e!==null){var a=Iu.get(e);return a!==void 0?a:(n={value:e,source:n,stack:vt(n)},Iu.set(e,n),n)}return{value:e,source:n,stack:vt(n)}}var Zi=[],Ki=0,Us=null,Tl=0,$n=[],Gn=0,Ha=null,aa=1,ia="";function fa(e,n){Zi[Ki++]=Tl,Zi[Ki++]=Us,Us=e,Tl=n}function ep(e,n,a){$n[Gn++]=aa,$n[Gn++]=ia,$n[Gn++]=Ha,Ha=e;var l=aa;e=ia;var r=32-st(l)-1;l&=~(1<<r),a+=1;var c=32-st(n)+r;if(30<c){var p=r-r%5;c=(l&(1<<p)-1).toString(32),l>>=p,r-=p,aa=1<<32-st(n)+r|a<<r|l,ia=c+e}else aa=1<<c|a<<r|l,ia=e}function Tr(e){e.return!==null&&(fa(e,1),ep(e,1,0))}function Er(e){for(;e===Us;)Us=Zi[--Ki],Zi[Ki]=null,Tl=Zi[--Ki],Zi[Ki]=null;for(;e===Ha;)Ha=$n[--Gn],$n[Gn]=null,ia=$n[--Gn],$n[Gn]=null,aa=$n[--Gn],$n[Gn]=null}function tp(e,n){$n[Gn++]=aa,$n[Gn++]=ia,$n[Gn++]=Ha,aa=n.id,ia=n.overflow,Ha=e}var an=null,wt=null,at=!1,La=null,Yn=!1,Mr=Error(d(519));function qa(e){var n=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw El(Bn(n,e)),Mr}function np(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[Ut]=e,n[zt]=l,a){case"dialog":We("cancel",n),We("close",n);break;case"iframe":case"object":case"embed":We("load",n);break;case"video":case"audio":for(a=0;a<Wl.length;a++)We(Wl[a],n);break;case"source":We("error",n);break;case"img":case"image":case"link":We("error",n),We("load",n);break;case"details":We("toggle",n);break;case"input":We("invalid",n),fu(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":We("invalid",n);break;case"textarea":We("invalid",n),gu(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||yh(n.textContent,a)?(l.popover!=null&&(We("beforetoggle",n),We("toggle",n)),l.onScroll!=null&&We("scroll",n),l.onScrollEnd!=null&&We("scrollend",n),l.onClick!=null&&(n.onclick=pa),n=!0):n=!1,n||qa(e,!0)}function ap(e){for(an=e.return;an;)switch(an.tag){case 5:case 31:case 13:Yn=!1;return;case 27:case 3:Yn=!0;return;default:an=an.return}}function Fi(e){if(e!==an)return!1;if(!at)return ap(e),at=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Jc(e.type,e.memoizedProps)),a=!a),a&&wt&&qa(e),ap(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));wt=zh(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));wt=zh(e)}else n===27?(n=wt,Ia(e.type)?(e=ed,ed=null,wt=e):wt=n):wt=an?Xn(e.stateNode.nextSibling):null;return!0}function wi(){wt=an=null,at=!1}function Dr(){var e=La;return e!==null&&(_n===null?_n=e:_n.push.apply(_n,e),La=null),e}function El(e){La===null?La=[e]:La.push(e)}var Ar=z(null),_i=null,xa=null;function Ba(e,n,a){V(Ar,n._currentValue),n._currentValue=a}function ga(e){e._currentValue=Ar.current,R(Ar)}function Or(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function Ur(e,n,a,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=r;for(var E=0;E<n.length;E++)if(b.context===n[E]){c.lanes|=a,b=c.alternate,b!==null&&(b.lanes|=a),Or(c.return,a,e),l||(p=null);break e}c=b.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(d(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),Or(p,a,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function Ji(e,n,a,l){e=null;for(var r=n,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(d(387));if(p=p.memoizedProps,p!==null){var b=r.type;kn(r.pendingProps.value,p.value)||(e!==null?e.push(b):e=[b])}}else if(r===He.current){if(p=r.alternate,p===null)throw Error(d(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(as):e=[as])}r=r.return}e!==null&&Ur(n,e,a,l),n.flags|=262144}function Rs(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ni(e){_i=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return ip(_i,e)}function Hs(e,n){return _i===null&&Ni(e),ip(e,n)}function ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xa===null){if(e===null)throw Error(d(308));xa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else xa=xa.next=n;return a}var Kg=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Fg=s.unstable_scheduleCallback,Jg=s.unstable_NormalPriority,Qt={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rr(){return{controller:new Kg,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&Fg(Jg,function(){e.controller.abort()})}var Dl=null,Hr=0,Vi=0,Pi=null;function Vg(e,n){if(Dl===null){var a=Dl=[];Hr=0,Vi=Bc(),Pi={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Hr++,n.then(lp,lp),n}function lp(){if(--Hr===0&&Dl!==null){Pi!==null&&(Pi.status="fulfilled");var e=Dl;Dl=null,Vi=0,Pi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Pg(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<a.length;r++)(0,a[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),l}var sp=x.S;x.S=function(e,n){Ym=De(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Vg(e,n),sp!==null&&sp(e,n)};var Si=z(null);function Lr(){var e=Si.current;return e!==null?e:yt.pooledCache}function Ls(e,n){n===null?V(Si,Si.current):V(Si,n.pool)}function op(){var e=Lr();return e===null?null:{parent:Qt._currentValue,pool:e}}var Wi=Error(d(460)),qr=Error(d(474)),qs=Error(d(542)),Bs={then:function(){}};function rp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(pa,pa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,up(e),e;default:if(typeof n.status=="string")n.then(pa,pa);else{if(e=yt,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,up(e),e}throw Ci=n,Wi}}function ki(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ci=a,Wi):a}}var Ci=null;function dp(){if(Ci===null)throw Error(d(459));var e=Ci;return Ci=null,e}function up(e){if(e===Wi||e===qs)throw Error(d(483))}var Ii=null,Al=0;function $s(e){var n=Al;return Al+=1,Ii===null&&(Ii=[]),cp(Ii,e,n)}function Ol(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Gs(e,n){throw n.$$typeof===_?Error(d(525)):(e=Object.prototype.toString.call(n),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function pp(e){function n(B,O){if(e){var X=B.deletions;X===null?(B.deletions=[O],B.flags|=16):X.push(O)}}function a(B,O){if(!e)return null;for(;O!==null;)n(B,O),O=O.sibling;return null}function l(B){for(var O=new Map;B!==null;)B.key!==null?O.set(B.key,B):O.set(B.index,B),B=B.sibling;return O}function r(B,O){return B=ha(B,O),B.index=0,B.sibling=null,B}function c(B,O,X){return B.index=X,e?(X=B.alternate,X!==null?(X=X.index,X<O?(B.flags|=67108866,O):X):(B.flags|=67108866,O)):(B.flags|=1048576,O)}function p(B){return e&&B.alternate===null&&(B.flags|=67108866),B}function b(B,O,X,oe){return O===null||O.tag!==6?(O=Cr(X,B.mode,oe),O.return=B,O):(O=r(O,X),O.return=B,O)}function E(B,O,X,oe){var Re=X.type;return Re===G?le(B,O,X.props.children,oe,X.key):O!==null&&(O.elementType===Re||typeof Re=="object"&&Re!==null&&Re.$$typeof===K&&ki(Re)===O.type)?(O=r(O,X.props),Ol(O,X),O.return=B,O):(O=Os(X.type,X.key,X.props,null,B.mode,oe),Ol(O,X),O.return=B,O)}function Z(B,O,X,oe){return O===null||O.tag!==4||O.stateNode.containerInfo!==X.containerInfo||O.stateNode.implementation!==X.implementation?(O=zr(X,B.mode,oe),O.return=B,O):(O=r(O,X.children||[]),O.return=B,O)}function le(B,O,X,oe,Re){return O===null||O.tag!==7?(O=ji(X,B.mode,oe,Re),O.return=B,O):(O=r(O,X),O.return=B,O)}function ue(B,O,X){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Cr(""+O,B.mode,X),O.return=B,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case $:return X=Os(O.type,O.key,O.props,null,B.mode,X),Ol(X,O),X.return=B,X;case W:return O=zr(O,B.mode,X),O.return=B,O;case K:return O=ki(O),ue(B,O,X)}if(me(O)||L(O))return O=ji(O,B.mode,X,null),O.return=B,O;if(typeof O.then=="function")return ue(B,$s(O),X);if(O.$$typeof===D)return ue(B,Hs(B,O),X);Gs(B,O)}return null}function F(B,O,X,oe){var Re=O!==null?O.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return Re!==null?null:b(B,O,""+X,oe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case $:return X.key===Re?E(B,O,X,oe):null;case W:return X.key===Re?Z(B,O,X,oe):null;case K:return X=ki(X),F(B,O,X,oe)}if(me(X)||L(X))return Re!==null?null:le(B,O,X,oe,null);if(typeof X.then=="function")return F(B,O,$s(X),oe);if(X.$$typeof===D)return F(B,O,Hs(B,X),oe);Gs(B,X)}return null}function P(B,O,X,oe,Re){if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return B=B.get(X)||null,b(O,B,""+oe,Re);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case $:return B=B.get(oe.key===null?X:oe.key)||null,E(O,B,oe,Re);case W:return B=B.get(oe.key===null?X:oe.key)||null,Z(O,B,oe,Re);case K:return oe=ki(oe),P(B,O,X,oe,Re)}if(me(oe)||L(oe))return B=B.get(X)||null,le(O,B,oe,Re,null);if(typeof oe.then=="function")return P(B,O,X,$s(oe),Re);if(oe.$$typeof===D)return P(B,O,X,Hs(O,oe),Re);Gs(O,oe)}return null}function Ee(B,O,X,oe){for(var Re=null,ot=null,Oe=O,Xe=O=0,tt=null;Oe!==null&&Xe<X.length;Xe++){Oe.index>Xe?(tt=Oe,Oe=null):tt=Oe.sibling;var rt=F(B,Oe,X[Xe],oe);if(rt===null){Oe===null&&(Oe=tt);break}e&&Oe&&rt.alternate===null&&n(B,Oe),O=c(rt,O,Xe),ot===null?Re=rt:ot.sibling=rt,ot=rt,Oe=tt}if(Xe===X.length)return a(B,Oe),at&&fa(B,Xe),Re;if(Oe===null){for(;Xe<X.length;Xe++)Oe=ue(B,X[Xe],oe),Oe!==null&&(O=c(Oe,O,Xe),ot===null?Re=Oe:ot.sibling=Oe,ot=Oe);return at&&fa(B,Xe),Re}for(Oe=l(Oe);Xe<X.length;Xe++)tt=P(Oe,B,Xe,X[Xe],oe),tt!==null&&(e&&tt.alternate!==null&&Oe.delete(tt.key===null?Xe:tt.key),O=c(tt,O,Xe),ot===null?Re=tt:ot.sibling=tt,ot=tt);return e&&Oe.forEach(function(ii){return n(B,ii)}),at&&fa(B,Xe),Re}function Le(B,O,X,oe){if(X==null)throw Error(d(151));for(var Re=null,ot=null,Oe=O,Xe=O=0,tt=null,rt=X.next();Oe!==null&&!rt.done;Xe++,rt=X.next()){Oe.index>Xe?(tt=Oe,Oe=null):tt=Oe.sibling;var ii=F(B,Oe,rt.value,oe);if(ii===null){Oe===null&&(Oe=tt);break}e&&Oe&&ii.alternate===null&&n(B,Oe),O=c(ii,O,Xe),ot===null?Re=ii:ot.sibling=ii,ot=ii,Oe=tt}if(rt.done)return a(B,Oe),at&&fa(B,Xe),Re;if(Oe===null){for(;!rt.done;Xe++,rt=X.next())rt=ue(B,rt.value,oe),rt!==null&&(O=c(rt,O,Xe),ot===null?Re=rt:ot.sibling=rt,ot=rt);return at&&fa(B,Xe),Re}for(Oe=l(Oe);!rt.done;Xe++,rt=X.next())rt=P(Oe,B,Xe,rt.value,oe),rt!==null&&(e&&rt.alternate!==null&&Oe.delete(rt.key===null?Xe:rt.key),O=c(rt,O,Xe),ot===null?Re=rt:ot.sibling=rt,ot=rt);return e&&Oe.forEach(function(ry){return n(B,ry)}),at&&fa(B,Xe),Re}function gt(B,O,X,oe){if(typeof X=="object"&&X!==null&&X.type===G&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case $:e:{for(var Re=X.key;O!==null;){if(O.key===Re){if(Re=X.type,Re===G){if(O.tag===7){a(B,O.sibling),oe=r(O,X.props.children),oe.return=B,B=oe;break e}}else if(O.elementType===Re||typeof Re=="object"&&Re!==null&&Re.$$typeof===K&&ki(Re)===O.type){a(B,O.sibling),oe=r(O,X.props),Ol(oe,X),oe.return=B,B=oe;break e}a(B,O);break}else n(B,O);O=O.sibling}X.type===G?(oe=ji(X.props.children,B.mode,oe,X.key),oe.return=B,B=oe):(oe=Os(X.type,X.key,X.props,null,B.mode,oe),Ol(oe,X),oe.return=B,B=oe)}return p(B);case W:e:{for(Re=X.key;O!==null;){if(O.key===Re)if(O.tag===4&&O.stateNode.containerInfo===X.containerInfo&&O.stateNode.implementation===X.implementation){a(B,O.sibling),oe=r(O,X.children||[]),oe.return=B,B=oe;break e}else{a(B,O);break}else n(B,O);O=O.sibling}oe=zr(X,B.mode,oe),oe.return=B,B=oe}return p(B);case K:return X=ki(X),gt(B,O,X,oe)}if(me(X))return Ee(B,O,X,oe);if(L(X)){if(Re=L(X),typeof Re!="function")throw Error(d(150));return X=Re.call(X),Le(B,O,X,oe)}if(typeof X.then=="function")return gt(B,O,$s(X),oe);if(X.$$typeof===D)return gt(B,O,Hs(B,X),oe);Gs(B,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,O!==null&&O.tag===6?(a(B,O.sibling),oe=r(O,X),oe.return=B,B=oe):(a(B,O),oe=Cr(X,B.mode,oe),oe.return=B,B=oe),p(B)):a(B,O)}return function(B,O,X,oe){try{Al=0;var Re=gt(B,O,X,oe);return Ii=null,Re}catch(Oe){if(Oe===Wi||Oe===qs)throw Oe;var ot=Cn(29,Oe,null,B.mode);return ot.lanes=oe,ot.return=B,ot}finally{}}}var zi=pp(!0),mp=pp(!1),$a=!1;function Br(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $r(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(dt&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=As(e),Vu(e,null,a),n}return Ds(e,l,n,a),As(e)}function Ul(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,pe(e,a)}}function Gr(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?r=c=n:c=c.next=n}else r=c=n;a={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Yr=!1;function Rl(){if(Yr){var e=Pi;if(e!==null)throw e}}function Hl(e,n,a,l){Yr=!1;var r=e.updateQueue;$a=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var E=b,Z=E.next;E.next=null,p===null?c=Z:p.next=Z,p=E;var le=e.alternate;le!==null&&(le=le.updateQueue,b=le.lastBaseUpdate,b!==p&&(b===null?le.firstBaseUpdate=Z:b.next=Z,le.lastBaseUpdate=E))}if(c!==null){var ue=r.baseState;p=0,le=Z=E=null,b=c;do{var F=b.lane&-536870913,P=F!==b.lane;if(P?(et&F)===F:(l&F)===F){F!==0&&F===Vi&&(Yr=!0),le!==null&&(le=le.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Ee=e,Le=b;F=n;var gt=a;switch(Le.tag){case 1:if(Ee=Le.payload,typeof Ee=="function"){ue=Ee.call(gt,ue,F);break e}ue=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=Le.payload,F=typeof Ee=="function"?Ee.call(gt,ue,F):Ee,F==null)break e;ue=S({},ue,F);break e;case 2:$a=!0}}F=b.callback,F!==null&&(e.flags|=64,P&&(e.flags|=8192),P=r.callbacks,P===null?r.callbacks=[F]:P.push(F))}else P={lane:F,tag:b.tag,payload:b.payload,callback:b.callback,next:null},le===null?(Z=le=P,E=ue):le=le.next=P,p|=F;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;P=b,b=P.next,P.next=null,r.lastBaseUpdate=P,r.shared.pending=null}}while(!0);le===null&&(E=ue),r.baseState=E,r.firstBaseUpdate=Z,r.lastBaseUpdate=le,c===null&&(r.shared.lanes=0),Fa|=p,e.lanes=p,e.memoizedState=ue}}function hp(e,n){if(typeof e!="function")throw Error(d(191,e));e.call(n)}function fp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hp(a[e],n)}var el=z(null),Ys=z(0);function xp(e,n){e=ka,V(Ys,e),V(el,n),ka=e|n.baseLanes}function Qr(){V(Ys,ka),V(el,el.current)}function Xr(){ka=Ys.current,R(el),R(Ys)}var zn=z(null),Qn=null;function Qa(e){var n=e.alternate;V(Rt,Rt.current&1),V(zn,e),Qn===null&&(n===null||el.current!==null||n.memoizedState!==null)&&(Qn=e)}function Zr(e){V(Rt,Rt.current),V(zn,e),Qn===null&&(Qn=e)}function gp(e){e.tag===22?(V(Rt,Rt.current),V(zn,e),Qn===null&&(Qn=e)):Xa()}function Xa(){V(Rt,Rt.current),V(zn,zn.current)}function Tn(e){R(zn),Qn===e&&(Qn=null),R(Rt)}var Rt=z(0);function Qs(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wc(a)||Ic(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ba=0,Ye=null,ft=null,Xt=null,Xs=!1,tl=!1,Ti=!1,Zs=0,Ll=0,nl=null,Wg=0;function Mt(){throw Error(d(321))}function Kr(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function Fr(e,n,a,l,r,c){return ba=c,Ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,x.H=e===null||e.memoizedState===null?em:cc,Ti=!1,c=a(l,r),Ti=!1,tl&&(c=yp(n,a,l,r)),bp(e),c}function bp(e){x.H=$l;var n=ft!==null&&ft.next!==null;if(ba=0,Xt=ft=Ye=null,Xs=!1,Ll=0,nl=null,n)throw Error(d(300));e===null||Zt||(e=e.dependencies,e!==null&&Rs(e)&&(Zt=!0))}function yp(e,n,a,l){Ye=e;var r=0;do{if(tl&&(nl=null),Ll=0,tl=!1,25<=r)throw Error(d(301));if(r+=1,Xt=ft=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}x.H=tm,c=n(a,l)}while(tl);return c}function Ig(){var e=x.H,n=e.useState()[0];return n=typeof n.then=="function"?ql(n):n,e=e.useState()[0],(ft!==null?ft.memoizedState:null)!==e&&(Ye.flags|=1024),n}function Jr(){var e=Zs!==0;return Zs=0,e}function Vr(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Pr(e){if(Xs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Xs=!1}ba=0,Xt=ft=Ye=null,tl=!1,Ll=Zs=0,nl=null}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Ye.memoizedState=Xt=e:Xt=Xt.next=e,Xt}function Ht(){if(ft===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=ft.next;var n=Xt===null?Ye.memoizedState:Xt.next;if(n!==null)Xt=n,ft=e;else{if(e===null)throw Ye.alternate===null?Error(d(467)):Error(d(310));ft=e,e={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},Xt===null?Ye.memoizedState=Xt=e:Xt=Xt.next=e}return Xt}function Ks(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(e){var n=Ll;return Ll+=1,nl===null&&(nl=[]),e=cp(nl,e,n),n=Ye,(Xt===null?n.memoizedState:Xt.next)===null&&(n=n.alternate,x.H=n===null||n.memoizedState===null?em:cc),e}function Fs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ql(e);if(e.$$typeof===D)return ln(e)}throw Error(d(438,String(e)))}function Wr(e){var n=null,a=Ye.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=Ye.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ks(),Ye.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=ge;return n.index++,a}function ya(e,n){return typeof n=="function"?n(e):n}function Js(e){var n=Ht();return Ir(n,ft,e)}function Ir(e,n,a){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}n.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{n=r.next;var b=p=null,E=null,Z=n,le=!1;do{var ue=Z.lane&-536870913;if(ue!==Z.lane?(et&ue)===ue:(ba&ue)===ue){var F=Z.revertLane;if(F===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),ue===Vi&&(le=!0);else if((ba&F)===F){Z=Z.next,F===Vi&&(le=!0);continue}else ue={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},E===null?(b=E=ue,p=c):E=E.next=ue,Ye.lanes|=F,Fa|=F;ue=Z.action,Ti&&a(c,ue),c=Z.hasEagerState?Z.eagerState:a(c,ue)}else F={lane:ue,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},E===null?(b=E=F,p=c):E=E.next=F,Ye.lanes|=ue,Fa|=ue;Z=Z.next}while(Z!==null&&Z!==n);if(E===null?p=c:E.next=b,!kn(c,e.memoizedState)&&(Zt=!0,le&&(a=Pi,a!==null)))throw a;e.memoizedState=c,e.baseState=p,e.baseQueue=E,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ec(e){var n=Ht(),a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var l=a.dispatch,r=a.pending,c=n.memoizedState;if(r!==null){a.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);kn(c,n.memoizedState)||(Zt=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,l]}function vp(e,n,a){var l=Ye,r=Ht(),c=at;if(c){if(a===void 0)throw Error(d(407));a=a()}else a=n();var p=!kn((ft||r).memoizedState,a);if(p&&(r.memoizedState=a,Zt=!0),r=r.queue,ac(_p.bind(null,l,r,e),[e]),r.getSnapshot!==n||p||Xt!==null&&Xt.memoizedState.tag&1){if(l.flags|=2048,al(9,{destroy:void 0},wp.bind(null,l,r,a,n),null),yt===null)throw Error(d(349));c||(ba&127)!==0||jp(l,n,a)}return a}function jp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ye.updateQueue,n===null?(n=Ks(),Ye.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wp(e,n,a,l){n.value=a,n.getSnapshot=l,Np(n)&&Sp(e)}function _p(e,n,a){return a(function(){Np(n)&&Sp(e)})}function Np(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Sp(e){var n=vi(e,2);n!==null&&Nn(n,e,2)}function tc(e){var n=gn();if(typeof e=="function"){var a=e;if(e=a(),Ti){Ve(!0);try{a()}finally{Ve(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},n}function kp(e,n,a,l){return e.baseState=a,Ir(e,ft,typeof l=="function"?l:ya)}function eb(e,n,a,l,r){if(Ws(e))throw Error(d(485));if(e=n.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};x.T!==null?a(!0):c.isTransition=!1,l(c),a=n.pending,a===null?(c.next=n.pending=c,Cp(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Cp(e,n){var a=n.action,l=n.payload,r=e.state;if(n.isTransition){var c=x.T,p={};x.T=p;try{var b=a(r,l),E=x.S;E!==null&&E(p,b),zp(e,n,b)}catch(Z){nc(e,n,Z)}finally{c!==null&&p.types!==null&&(c.types=p.types),x.T=c}}else try{c=a(r,l),zp(e,n,c)}catch(Z){nc(e,n,Z)}}function zp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Tp(e,n,l)},function(l){return nc(e,n,l)}):Tp(e,n,a)}function Tp(e,n,a){n.status="fulfilled",n.value=a,Ep(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Cp(e,a)))}function nc(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,Ep(n),n=n.next;while(n!==l)}e.action=null}function Ep(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Mp(e,n){return n}function Dp(e,n){if(at){var a=yt.formState;if(a!==null){e:{var l=Ye;if(at){if(wt){t:{for(var r=wt,c=Yn;r.nodeType!==8;){if(!c){r=null;break t}if(r=Xn(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){wt=Xn(r.nextSibling),l=r.data==="F!";break e}}qa(l)}l=!1}l&&(n=a[0])}}return a=gn(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mp,lastRenderedState:n},a.queue=l,a=Pp.bind(null,Ye,l),l.dispatch=a,l=tc(!1),c=rc.bind(null,Ye,!1,l.queue),l=gn(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,a=eb.bind(null,Ye,r,c,a),r.dispatch=a,l.memoizedState=e,[n,a,!1]}function Ap(e){var n=Ht();return Op(n,ft,e)}function Op(e,n,a){if(n=Ir(e,n,Mp)[0],e=Js(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=ql(n)}catch(p){throw p===Wi?qs:p}else l=n;n=Ht();var r=n.queue,c=r.dispatch;return a!==n.memoizedState&&(Ye.flags|=2048,al(9,{destroy:void 0},tb.bind(null,r,a),null)),[l,c,e]}function tb(e,n){e.action=n}function Up(e){var n=Ht(),a=ft;if(a!==null)return Op(n,a,e);Ht(),n=n.memoizedState,a=Ht();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function al(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=Ye.updateQueue,n===null&&(n=Ks(),Ye.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function Rp(){return Ht().memoizedState}function Vs(e,n,a,l){var r=gn();Ye.flags|=e,r.memoizedState=al(1|n,{destroy:void 0},a,l===void 0?null:l)}function Ps(e,n,a,l){var r=Ht();l=l===void 0?null:l;var c=r.memoizedState.inst;ft!==null&&l!==null&&Kr(l,ft.memoizedState.deps)?r.memoizedState=al(n,c,a,l):(Ye.flags|=e,r.memoizedState=al(1|n,c,a,l))}function Hp(e,n){Vs(8390656,8,e,n)}function ac(e,n){Ps(2048,8,e,n)}function nb(e){Ye.flags|=4;var n=Ye.updateQueue;if(n===null)n=Ks(),Ye.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Lp(e){var n=Ht().memoizedState;return nb({ref:n,nextImpl:e}),function(){if((dt&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}function qp(e,n){return Ps(4,2,e,n)}function Bp(e,n){return Ps(4,4,e,n)}function $p(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gp(e,n,a){a=a!=null?a.concat([e]):null,Ps(4,4,$p.bind(null,n,e),a)}function ic(){}function Yp(e,n){var a=Ht();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Kr(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function Qp(e,n){var a=Ht();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Kr(n,l[1]))return l[0];if(l=e(),Ti){Ve(!0);try{e()}finally{Ve(!1)}}return a.memoizedState=[l,n],l}function lc(e,n,a){return a===void 0||(ba&1073741824)!==0&&(et&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Xm(),Ye.lanes|=e,Fa|=e,a)}function Xp(e,n,a,l){return kn(a,n)?a:el.current!==null?(e=lc(e,a,l),kn(e,n)||(Zt=!0),e):(ba&42)===0||(ba&1073741824)!==0&&(et&261930)===0?(Zt=!0,e.memoizedState=a):(e=Xm(),Ye.lanes|=e,Fa|=e,n)}function Zp(e,n,a,l,r){var c=A.p;A.p=c!==0&&8>c?c:8;var p=x.T,b={};x.T=b,rc(e,!1,n,a);try{var E=r(),Z=x.S;if(Z!==null&&Z(b,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var le=Pg(E,l);Bl(e,n,le,Dn(e))}else Bl(e,n,l,Dn(e))}catch(ue){Bl(e,n,{then:function(){},status:"rejected",reason:ue},Dn())}finally{A.p=c,p!==null&&b.types!==null&&(p.types=b.types),x.T=p}}function ab(){}function sc(e,n,a,l){if(e.tag!==5)throw Error(d(476));var r=Kp(e).queue;Zp(e,r,n,C,a===null?ab:function(){return Fp(e),a(l)})}function Kp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:C,baseState:C,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:C},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Fp(e){var n=Kp(e);n.next===null&&(n=e.alternate.memoizedState),Bl(e,n.next.queue,{},Dn())}function oc(){return ln(as)}function Jp(){return Ht().memoizedState}function Vp(){return Ht().memoizedState}function ib(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Dn();e=Ga(a);var l=Ya(n,e,a);l!==null&&(Nn(l,n,a),Ul(l,n,a)),n={cache:Rr()},e.payload=n;return}n=n.return}}function lb(e,n,a){var l=Dn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ws(e)?Wp(n,a):(a=Sr(e,n,a,l),a!==null&&(Nn(a,e,l),Ip(a,n,l)))}function Pp(e,n,a){var l=Dn();Bl(e,n,a,l)}function Bl(e,n,a,l){var r={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ws(e))Wp(n,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,b=c(p,a);if(r.hasEagerState=!0,r.eagerState=b,kn(b,p))return Ds(e,n,r,0),yt===null&&Ms(),!1}catch{}finally{}if(a=Sr(e,n,r,l),a!==null)return Nn(a,e,l),Ip(a,n,l),!0}return!1}function rc(e,n,a,l){if(l={lane:2,revertLane:Bc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ws(e)){if(n)throw Error(d(479))}else n=Sr(e,a,l,2),n!==null&&Nn(n,e,2)}function Ws(e){var n=e.alternate;return e===Ye||n!==null&&n===Ye}function Wp(e,n){tl=Xs=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ip(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,pe(e,a)}}var $l={readContext:ln,use:Fs,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt};$l.useEffectEvent=Mt;var em={readContext:ln,use:Fs,useCallback:function(e,n){return gn().memoizedState=[e,n===void 0?null:n],e},useContext:ln,useEffect:Hp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Vs(4194308,4,$p.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Vs(4194308,4,e,n)},useInsertionEffect:function(e,n){Vs(4,2,e,n)},useMemo:function(e,n){var a=gn();n=n===void 0?null:n;var l=e();if(Ti){Ve(!0);try{e()}finally{Ve(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=gn();if(a!==void 0){var r=a(n);if(Ti){Ve(!0);try{a(n)}finally{Ve(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=lb.bind(null,Ye,e),[l.memoizedState,e]},useRef:function(e){var n=gn();return e={current:e},n.memoizedState=e},useState:function(e){e=tc(e);var n=e.queue,a=Pp.bind(null,Ye,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ic,useDeferredValue:function(e,n){var a=gn();return lc(a,e,n)},useTransition:function(){var e=tc(!1);return e=Zp.bind(null,Ye,e.queue,!0,!1),gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=Ye,r=gn();if(at){if(a===void 0)throw Error(d(407));a=a()}else{if(a=n(),yt===null)throw Error(d(349));(et&127)!==0||jp(l,n,a)}r.memoizedState=a;var c={value:a,getSnapshot:n};return r.queue=c,Hp(_p.bind(null,l,c,e),[e]),l.flags|=2048,al(9,{destroy:void 0},wp.bind(null,l,c,a,n),null),a},useId:function(){var e=gn(),n=yt.identifierPrefix;if(at){var a=ia,l=aa;a=(l&~(1<<32-st(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Zs++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Wg++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:oc,useFormState:Dp,useActionState:Dp,useOptimistic:function(e){var n=gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rc.bind(null,Ye,!0,a),a.dispatch=n,[e,n]},useMemoCache:Wr,useCacheRefresh:function(){return gn().memoizedState=ib.bind(null,Ye)},useEffectEvent:function(e){var n=gn(),a={impl:e};return n.memoizedState=a,function(){if((dt&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},cc={readContext:ln,use:Fs,useCallback:Yp,useContext:ln,useEffect:ac,useImperativeHandle:Gp,useInsertionEffect:qp,useLayoutEffect:Bp,useMemo:Qp,useReducer:Js,useRef:Rp,useState:function(){return Js(ya)},useDebugValue:ic,useDeferredValue:function(e,n){var a=Ht();return Xp(a,ft.memoizedState,e,n)},useTransition:function(){var e=Js(ya)[0],n=Ht().memoizedState;return[typeof e=="boolean"?e:ql(e),n]},useSyncExternalStore:vp,useId:Jp,useHostTransitionStatus:oc,useFormState:Ap,useActionState:Ap,useOptimistic:function(e,n){var a=Ht();return kp(a,ft,e,n)},useMemoCache:Wr,useCacheRefresh:Vp};cc.useEffectEvent=Lp;var tm={readContext:ln,use:Fs,useCallback:Yp,useContext:ln,useEffect:ac,useImperativeHandle:Gp,useInsertionEffect:qp,useLayoutEffect:Bp,useMemo:Qp,useReducer:ec,useRef:Rp,useState:function(){return ec(ya)},useDebugValue:ic,useDeferredValue:function(e,n){var a=Ht();return ft===null?lc(a,e,n):Xp(a,ft.memoizedState,e,n)},useTransition:function(){var e=ec(ya)[0],n=Ht().memoizedState;return[typeof e=="boolean"?e:ql(e),n]},useSyncExternalStore:vp,useId:Jp,useHostTransitionStatus:oc,useFormState:Up,useActionState:Up,useOptimistic:function(e,n){var a=Ht();return ft!==null?kp(a,ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Wr,useCacheRefresh:Vp};tm.useEffectEvent=Lp;function dc(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var uc={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=Dn(),r=Ga(l);r.payload=n,a!=null&&(r.callback=a),n=Ya(e,r,l),n!==null&&(Nn(n,e,l),Ul(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=Dn(),r=Ga(l);r.tag=1,r.payload=n,a!=null&&(r.callback=a),n=Ya(e,r,l),n!==null&&(Nn(n,e,l),Ul(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Dn(),l=Ga(a);l.tag=2,n!=null&&(l.callback=n),n=Ya(e,l,a),n!==null&&(Nn(n,e,a),Ul(n,e,a))}};function nm(e,n,a,l,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,p):n.prototype&&n.prototype.isPureReactComponent?!Cl(a,l)||!Cl(r,c):!0}function am(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&uc.enqueueReplaceState(n,n.state,null)}function Ei(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function im(e){Es(e)}function lm(e){console.error(e)}function sm(e){Es(e)}function Is(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function om(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function pc(e,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Is(e,n)},a}function rm(e){return e=Ga(e),e.tag=3,e}function cm(e,n,a,l){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){om(n,a,l)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){om(n,a,l),typeof r!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function sb(e,n,a,l,r){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Ji(n,a,r,!0),a=zn.current,a!==null){switch(a.tag){case 31:case 13:return Qn===null?po():a.alternate===null&&Dt===0&&(Dt=3),a.flags&=-257,a.flags|=65536,a.lanes=r,l===Bs?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Hc(e,l,r)),!1;case 22:return a.flags|=65536,l===Bs?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Hc(e,l,r)),!1}throw Error(d(435,a.tag))}return Hc(e,l,r),po(),!1}if(at)return n=zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==Mr&&(e=Error(d(422),{cause:l}),El(Bn(e,a)))):(l!==Mr&&(n=Error(d(423),{cause:l}),El(Bn(n,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Bn(l,a),r=pc(e.stateNode,l,r),Gr(e,r),Dt!==4&&(Dt=2)),!1;var c=Error(d(520),{cause:l});if(c=Bn(c,a),Jl===null?Jl=[c]:Jl.push(c),Dt!==4&&(Dt=2),n===null)return!0;l=Bn(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=pc(a.stateNode,l,e),Gr(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ja===null||!Ja.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=rm(r),cm(r,e,a,l),Gr(a,r),!1}a=a.return}while(a!==null);return!1}var mc=Error(d(461)),Zt=!1;function sn(e,n,a,l){n.child=e===null?mp(n,null,a,l):zi(n,e.child,a,l)}function dm(e,n,a,l,r){a=a.render;var c=n.ref;if("ref"in l){var p={};for(var b in l)b!=="ref"&&(p[b]=l[b])}else p=l;return Ni(n),l=Fr(e,n,a,p,c,r),b=Jr(),e!==null&&!Zt?(Vr(e,n,r),va(e,n,r)):(at&&b&&Tr(n),n.flags|=1,sn(e,n,l,r),n.child)}function um(e,n,a,l,r){if(e===null){var c=a.type;return typeof c=="function"&&!kr(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,pm(e,n,c,l,r)):(e=Os(a.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!jc(e,r)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:Cl,a(p,l)&&e.ref===n.ref)return va(e,n,r)}return n.flags|=1,e=ha(c,l),e.ref=n.ref,e.return=n,n.child=e}function pm(e,n,a,l,r){if(e!==null){var c=e.memoizedProps;if(Cl(c,l)&&e.ref===n.ref)if(Zt=!1,n.pendingProps=l=c,jc(e,r))(e.flags&131072)!==0&&(Zt=!0);else return n.lanes=e.lanes,va(e,n,r)}return hc(e,n,a,l,r)}function mm(e,n,a,l){var r=l.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~c}else l=0,n.child=null;return hm(e,n,c,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ls(n,c!==null?c.cachePool:null),c!==null?xp(n,c):Qr(),gp(n);else return l=n.lanes=536870912,hm(e,n,c!==null?c.baseLanes|a:a,a,l)}else c!==null?(Ls(n,c.cachePool),xp(n,c),Xa(),n.memoizedState=null):(e!==null&&Ls(n,null),Qr(),Xa());return sn(e,n,r,a),n.child}function Gl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function hm(e,n,a,l,r){var c=Lr();return c=c===null?null:{parent:Qt._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Ls(n,null),Qr(),gp(n),e!==null&&Ji(e,n,l,!0),n.childLanes=r,null}function eo(e,n){return n=no({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function fm(e,n,a){return zi(n,e.child,null,a),e=eo(n,n.pendingProps),e.flags|=2,Tn(n),n.memoizedState=null,e}function ob(e,n,a){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(at){if(l.mode==="hidden")return e=eo(n,l),n.lanes=536870912,Gl(null,e);if(Zr(n),(e=wt)?(e=Ch(e,Yn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:aa,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},a=Wu(e),a.return=n,n.child=a,an=n,wt=null)):e=null,e===null)throw qa(n);return n.lanes=536870912,null}return eo(n,l)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Zr(n),r)if(n.flags&256)n.flags&=-257,n=fm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(d(558));else if(Zt||Ji(e,n,a,!1),r=(a&e.childLanes)!==0,Zt||r){if(l=yt,l!==null&&(p=Ce(l,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,vi(e,p),Nn(l,e,p),mc;po(),n=fm(e,n,a)}else e=c.treeContext,wt=Xn(p.nextSibling),an=n,at=!0,La=null,Yn=!1,e!==null&&tp(n,e),n=eo(n,l),n.flags|=4096;return n}return e=ha(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function to(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function hc(e,n,a,l,r){return Ni(n),a=Fr(e,n,a,l,void 0,r),l=Jr(),e!==null&&!Zt?(Vr(e,n,r),va(e,n,r)):(at&&l&&Tr(n),n.flags|=1,sn(e,n,a,r),n.child)}function xm(e,n,a,l,r,c){return Ni(n),n.updateQueue=null,a=yp(n,l,a,r),bp(e),l=Jr(),e!==null&&!Zt?(Vr(e,n,c),va(e,n,c)):(at&&l&&Tr(n),n.flags|=1,sn(e,n,a,c),n.child)}function gm(e,n,a,l,r){if(Ni(n),n.stateNode===null){var c=Xi,p=a.contextType;typeof p=="object"&&p!==null&&(c=ln(p)),c=new a(l,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=uc,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=l,c.state=n.memoizedState,c.refs={},Br(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?ln(p):Xi,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(dc(n,a,p,l),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&uc.enqueueReplaceState(c,c.state,null),Hl(n,l,c,r),Rl(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){c=n.stateNode;var b=n.memoizedProps,E=Ei(a,b);c.props=E;var Z=c.context,le=a.contextType;p=Xi,typeof le=="object"&&le!==null&&(p=ln(le));var ue=a.getDerivedStateFromProps;le=typeof ue=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,le||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||Z!==p)&&am(n,c,l,p),$a=!1;var F=n.memoizedState;c.state=F,Hl(n,l,c,r),Rl(),Z=n.memoizedState,b||F!==Z||$a?(typeof ue=="function"&&(dc(n,a,ue,l),Z=n.memoizedState),(E=$a||nm(n,a,E,l,F,Z,p))?(le||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=Z),c.props=l,c.state=Z,c.context=p,l=E):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{c=n.stateNode,$r(e,n),p=n.memoizedProps,le=Ei(a,p),c.props=le,ue=n.pendingProps,F=c.context,Z=a.contextType,E=Xi,typeof Z=="object"&&Z!==null&&(E=ln(Z)),b=a.getDerivedStateFromProps,(Z=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==ue||F!==E)&&am(n,c,l,E),$a=!1,F=n.memoizedState,c.state=F,Hl(n,l,c,r),Rl();var P=n.memoizedState;p!==ue||F!==P||$a||e!==null&&e.dependencies!==null&&Rs(e.dependencies)?(typeof b=="function"&&(dc(n,a,b,l),P=n.memoizedState),(le=$a||nm(n,a,le,l,F,P,E)||e!==null&&e.dependencies!==null&&Rs(e.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,P,E),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,P,E)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=P),c.props=l,c.state=P,c.context=E,l=le):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(n.flags|=1024),l=!1)}return c=l,to(e,n),l=(n.flags&128)!==0,c||l?(c=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&l?(n.child=zi(n,e.child,null,r),n.child=zi(n,null,a,r)):sn(e,n,a,r),n.memoizedState=c.state,e=n.child):e=va(e,n,r),e}function bm(e,n,a,l){return wi(),n.flags|=256,sn(e,n,a,l),n.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:op()}}function gc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Mn),e}function ym(e,n,a){var l=n.pendingProps,r=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Rt.current&2)!==0),p&&(r=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(at){if(r?Qa(n):Xa(),(e=wt)?(e=Ch(e,Yn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:aa,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},a=Wu(e),a.return=n,n.child=a,an=n,wt=null)):e=null,e===null)throw qa(n);return Ic(e)?n.lanes=32:n.lanes=536870912,null}var b=l.children;return l=l.fallback,r?(Xa(),r=n.mode,b=no({mode:"hidden",children:b},r),l=ji(l,r,a,null),b.return=n,l.return=n,b.sibling=l,n.child=b,l=n.child,l.memoizedState=xc(a),l.childLanes=gc(e,p,a),n.memoizedState=fc,Gl(null,l)):(Qa(n),bc(n,b))}var E=e.memoizedState;if(E!==null&&(b=E.dehydrated,b!==null)){if(c)n.flags&256?(Qa(n),n.flags&=-257,n=yc(e,n,a)):n.memoizedState!==null?(Xa(),n.child=e.child,n.flags|=128,n=null):(Xa(),b=l.fallback,r=n.mode,l=no({mode:"visible",children:l.children},r),b=ji(b,r,a,null),b.flags|=2,l.return=n,b.return=n,l.sibling=b,n.child=l,zi(n,e.child,null,a),l=n.child,l.memoizedState=xc(a),l.childLanes=gc(e,p,a),n.memoizedState=fc,n=Gl(null,l));else if(Qa(n),Ic(b)){if(p=b.nextSibling&&b.nextSibling.dataset,p)var Z=p.dgst;p=Z,l=Error(d(419)),l.stack="",l.digest=p,El({value:l,source:null,stack:null}),n=yc(e,n,a)}else if(Zt||Ji(e,n,a,!1),p=(a&e.childLanes)!==0,Zt||p){if(p=yt,p!==null&&(l=Ce(p,a),l!==0&&l!==E.retryLane))throw E.retryLane=l,vi(e,l),Nn(p,e,l),mc;Wc(b)||po(),n=yc(e,n,a)}else Wc(b)?(n.flags|=192,n.child=e.child,n=null):(e=E.treeContext,wt=Xn(b.nextSibling),an=n,at=!0,La=null,Yn=!1,e!==null&&tp(n,e),n=bc(n,l.children),n.flags|=4096);return n}return r?(Xa(),b=l.fallback,r=n.mode,E=e.child,Z=E.sibling,l=ha(E,{mode:"hidden",children:l.children}),l.subtreeFlags=E.subtreeFlags&65011712,Z!==null?b=ha(Z,b):(b=ji(b,r,a,null),b.flags|=2),b.return=n,l.return=n,l.sibling=b,n.child=l,Gl(null,l),l=n.child,b=e.child.memoizedState,b===null?b=xc(a):(r=b.cachePool,r!==null?(E=Qt._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=op(),b={baseLanes:b.baseLanes|a,cachePool:r}),l.memoizedState=b,l.childLanes=gc(e,p,a),n.memoizedState=fc,Gl(e.child,l)):(Qa(n),a=e.child,e=a.sibling,a=ha(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function bc(e,n){return n=no({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function no(e,n){return e=Cn(22,e,null,n),e.lanes=0,e}function yc(e,n,a){return zi(n,e.child,null,a),e=bc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function vm(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Or(e.return,n,a)}function vc(e,n,a,l,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:r,treeForkCount:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=r,p.treeForkCount=c)}function jm(e,n,a){var l=n.pendingProps,r=l.revealOrder,c=l.tail;l=l.children;var p=Rt.current,b=(p&2)!==0;if(b?(p=p&1|2,n.flags|=128):p&=1,V(Rt,p),sn(e,n,l,a),l=at?Tl:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vm(e,a,n);else if(e.tag===19)vm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=n.child,r=null;a!==null;)e=a.alternate,e!==null&&Qs(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=n.child,n.child=null):(r=a.sibling,a.sibling=null),vc(n,!1,r,a,c,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Qs(e)===null){n.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}vc(n,!0,a,null,c,l);break;case"together":vc(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function va(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ji(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(d(153));if(n.child!==null){for(e=n.child,a=ha(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ha(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function jc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Rs(e)))}function rb(e,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Ba(n,Qt,e.memoizedState.cache),wi();break;case 27:case 5:he(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Zr(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ym(e,n,a):(Qa(n),e=va(e,n,a),e!==null?e.sibling:null);Qa(n);break;case 19:var r=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Ji(e,n,a,!1),l=(a&n.childLanes)!==0),r){if(l)return jm(e,n,a);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),V(Rt,Rt.current),l)break;return null;case 22:return n.lanes=0,mm(e,n,a,n.pendingProps);case 24:Ba(n,Qt,e.memoizedState.cache)}return va(e,n,a)}function wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Zt=!0;else{if(!jc(e,a)&&(n.flags&128)===0)return Zt=!1,rb(e,n,a);Zt=(e.flags&131072)!==0}else Zt=!1,at&&(n.flags&1048576)!==0&&ep(n,Tl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=ki(n.elementType),n.type=e,typeof e=="function")kr(e)?(l=Ei(e,l),n.tag=1,n=gm(null,n,e,l,a)):(n.tag=0,n=hc(null,n,e,l,a));else{if(e!=null){var r=e.$$typeof;if(r===I){n.tag=11,n=dm(null,n,e,l,a);break e}else if(r===T){n.tag=14,n=um(null,n,e,l,a);break e}}throw n=Y(e)||e,Error(d(306,n,""))}}return n;case 0:return hc(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,r=Ei(l,n.pendingProps),gm(e,n,l,r,a);case 3:e:{if(U(n,n.stateNode.containerInfo),e===null)throw Error(d(387));l=n.pendingProps;var c=n.memoizedState;r=c.element,$r(e,n),Hl(n,l,null,a);var p=n.memoizedState;if(l=p.cache,Ba(n,Qt,l),l!==c.cache&&Ur(n,[Qt],a,!0),Rl(),l=p.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=bm(e,n,l,a);break e}else if(l!==r){r=Bn(Error(d(424)),n),El(r),n=bm(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(wt=Xn(e.firstChild),an=n,at=!0,La=null,Yn=!0,a=mp(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wi(),l===r){n=va(e,n,a);break e}sn(e,n,l,a)}n=n.child}return n;case 26:return to(e,n),e===null?(a=Ah(n.type,null,n.pendingProps,null))?n.memoizedState=a:at||(a=n.type,e=n.pendingProps,l=yo(_e.current).createElement(a),l[Ut]=n,l[zt]=e,on(l,a,e),It(l),n.stateNode=l):n.memoizedState=Ah(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return he(n),e===null&&at&&(l=n.stateNode=Eh(n.type,n.pendingProps,_e.current),an=n,Yn=!0,r=wt,Ia(n.type)?(ed=r,wt=Xn(l.firstChild)):wt=r),sn(e,n,n.pendingProps.children,a),to(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&at&&((r=l=wt)&&(l=Lb(l,n.type,n.pendingProps,Yn),l!==null?(n.stateNode=l,an=n,wt=Xn(l.firstChild),Yn=!1,r=!0):r=!1),r||qa(n)),he(n),r=n.type,c=n.pendingProps,p=e!==null?e.memoizedProps:null,l=c.children,Jc(r,c)?l=null:p!==null&&Jc(r,p)&&(n.flags|=32),n.memoizedState!==null&&(r=Fr(e,n,Ig,null,null,a),as._currentValue=r),to(e,n),sn(e,n,l,a),n.child;case 6:return e===null&&at&&((e=a=wt)&&(a=qb(a,n.pendingProps,Yn),a!==null?(n.stateNode=a,an=n,wt=null,e=!0):e=!1),e||qa(n)),null;case 13:return ym(e,n,a);case 4:return U(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=zi(n,null,l,a):sn(e,n,l,a),n.child;case 11:return dm(e,n,n.type,n.pendingProps,a);case 7:return sn(e,n,n.pendingProps,a),n.child;case 8:return sn(e,n,n.pendingProps.children,a),n.child;case 12:return sn(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Ba(n,n.type,l.value),sn(e,n,l.children,a),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,Ni(n),r=ln(r),l=l(r),n.flags|=1,sn(e,n,l,a),n.child;case 14:return um(e,n,n.type,n.pendingProps,a);case 15:return pm(e,n,n.type,n.pendingProps,a);case 19:return jm(e,n,a);case 31:return ob(e,n,a);case 22:return mm(e,n,a,n.pendingProps);case 24:return Ni(n),l=ln(Qt),e===null?(r=Lr(),r===null&&(r=yt,c=Rr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),n.memoizedState={parent:l,cache:r},Br(n),Ba(n,Qt,r)):((e.lanes&a)!==0&&($r(e,n),Hl(n,null,null,a),Rl()),r=e.memoizedState,c=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),Ba(n,Qt,l)):(l=c.cache,Ba(n,Qt,l),l!==r.cache&&Ur(n,[Qt],a,!0))),sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function ja(e){e.flags|=4}function wc(e,n,a,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Jm())e.flags|=8192;else throw Ci=Bs,qr}else e.flags&=-16777217}function _m(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lh(n))if(Jm())e.flags|=8192;else throw Ci=Bs,qr}function ao(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Me():536870912,e.lanes|=n,ol|=n)}function Yl(e,n){if(!at)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _t(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function cb(e,n,a){var l=n.pendingProps;switch(Er(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(n),null;case 1:return _t(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),ga(Qt),fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fi(n)?ja(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Dr())),_t(n),null;case 26:var r=n.type,c=n.memoizedState;return e===null?(ja(n),c!==null?(_t(n),_m(n,c)):(_t(n),wc(n,r,null,l,a))):c?c!==e.memoizedState?(ja(n),_t(n),_m(n,c)):(_t(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&ja(n),_t(n),wc(n,r,e,l,a)),null;case 27:if(qe(n),a=_e.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ja(n);else{if(!l){if(n.stateNode===null)throw Error(d(166));return _t(n),null}e=xe.current,Fi(n)?np(n):(e=Eh(r,l,a),n.stateNode=e,ja(n))}return _t(n),null;case 5:if(qe(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ja(n);else{if(!l){if(n.stateNode===null)throw Error(d(166));return _t(n),null}if(c=xe.current,Fi(n))np(n);else{var p=yo(_e.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?p.createElement("select",{is:l.is}):p.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?p.createElement(r,{is:l.is}):p.createElement(r)}}c[Ut]=n,c[zt]=l;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=c;e:switch(on(c,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ja(n)}}return _t(n),wc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&ja(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(d(166));if(e=_e.current,Fi(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,r=an,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[Ut]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||yh(e.nodeValue,a)),e||qa(n,!0)}else e=yo(e).createTextNode(l),e[Ut]=n,n.stateNode=e}return _t(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(l=Fi(n),a!==null){if(e===null){if(!l)throw Error(d(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Ut]=n}else wi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_t(n),e=!1}else a=Dr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Tn(n),n):(Tn(n),null);if((n.flags&128)!==0)throw Error(d(558))}return _t(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Fi(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[Ut]=n}else wi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_t(n),r=!1}else r=Dr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(Tn(n),n):(Tn(n),null)}return Tn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ao(n,n.updateQueue),_t(n),null);case 4:return fe(),e===null&&Qc(n.stateNode.containerInfo),_t(n),null;case 10:return ga(n.type),_t(n),null;case 19:if(R(Rt),l=n.memoizedState,l===null)return _t(n),null;if(r=(n.flags&128)!==0,c=l.rendering,c===null)if(r)Yl(l,!1);else{if(Dt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=Qs(e),c!==null){for(n.flags|=128,Yl(l,!1),e=c.updateQueue,n.updateQueue=e,ao(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Pu(a,e),a=a.sibling;return V(Rt,Rt.current&1|2),at&&fa(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&De()>ro&&(n.flags|=128,r=!0,Yl(l,!1),n.lanes=4194304)}else{if(!r)if(e=Qs(c),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,ao(n,e),Yl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!at)return _t(n),null}else 2*De()-l.renderingStartTime>ro&&a!==536870912&&(n.flags|=128,r=!0,Yl(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(e=l.last,e!==null?e.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=De(),e.sibling=null,a=Rt.current,V(Rt,r?a&1|2:a&1),at&&fa(n,l.treeForkCount),e):(_t(n),null);case 22:case 23:return Tn(n),Xr(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(_t(n),n.subtreeFlags&6&&(n.flags|=8192)):_t(n),a=n.updateQueue,a!==null&&ao(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&R(Si),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ga(Qt),_t(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function db(e,n){switch(Er(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ga(Qt),fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return qe(n),null;case 31:if(n.memoizedState!==null){if(Tn(n),n.alternate===null)throw Error(d(340));wi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Tn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(d(340));wi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return R(Rt),null;case 4:return fe(),null;case 10:return ga(n.type),null;case 22:case 23:return Tn(n),Xr(),e!==null&&R(Si),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ga(Qt),null;case 25:return null;default:return null}}function Nm(e,n){switch(Er(n),n.tag){case 3:ga(Qt),fe();break;case 26:case 27:case 5:qe(n);break;case 4:fe();break;case 31:n.memoizedState!==null&&Tn(n);break;case 13:Tn(n);break;case 19:R(Rt);break;case 10:ga(n.type);break;case 22:case 23:Tn(n),Xr(),e!==null&&R(Si);break;case 24:ga(Qt)}}function Ql(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){l=void 0;var c=a.create,p=a.inst;l=c(),p.destroy=l}a=a.next}while(a!==r)}}catch(b){ht(n,n.return,b)}}function Za(e,n,a){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var p=l.inst,b=p.destroy;if(b!==void 0){p.destroy=void 0,r=n;var E=a,Z=b;try{Z()}catch(le){ht(r,E,le)}}}l=l.next}while(l!==c)}}catch(le){ht(n,n.return,le)}}function Sm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{fp(n,a)}catch(l){ht(e,e.return,l)}}}function km(e,n,a){a.props=Ei(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ht(e,n,l)}}function Xl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(r){ht(e,n,r)}}function la(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(r){ht(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){ht(e,n,r)}else a.current=null}function Cm(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(r){ht(e,e.return,r)}}function _c(e,n,a){try{var l=e.stateNode;Db(l,e.type,a,n),l[zt]=n}catch(r){ht(e,e.return,r)}}function zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function Nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=pa));else if(l!==4&&(l===27&&Ia(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sc(e,n,a),e=e.sibling;e!==null;)Sc(e,n,a),e=e.sibling}function io(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&Ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(io(e,n,a),e=e.sibling;e!==null;)io(e,n,a),e=e.sibling}function Tm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);on(n,l,a),n[Ut]=e,n[zt]=a}catch(c){ht(e,e.return,c)}}var wa=!1,Kt=!1,kc=!1,Em=typeof WeakSet=="function"?WeakSet:Set,en=null;function ub(e,n){if(e=e.containerInfo,Kc=ko,e=Gu(e),yr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var p=0,b=-1,E=-1,Z=0,le=0,ue=e,F=null;t:for(;;){for(var P;ue!==a||r!==0&&ue.nodeType!==3||(b=p+r),ue!==c||l!==0&&ue.nodeType!==3||(E=p+l),ue.nodeType===3&&(p+=ue.nodeValue.length),(P=ue.firstChild)!==null;)F=ue,ue=P;for(;;){if(ue===e)break t;if(F===a&&++Z===r&&(b=p),F===c&&++le===l&&(E=p),(P=ue.nextSibling)!==null)break;ue=F,F=ue.parentNode}ue=P}a=b===-1||E===-1?null:{start:b,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:e,selectionRange:a},ko=!1,en=n;en!==null;)if(n=en,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,en=e;else for(;en!==null;){switch(n=en,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,r=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var Ee=Ei(a.type,r);e=l.getSnapshotBeforeUpdate(Ee,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(Le){ht(a,a.return,Le)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Pc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=n.sibling,e!==null){e.return=n.return,en=e;break}en=n.return}}function Mm(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Na(e,a),l&4&&Ql(5,a);break;case 1:if(Na(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){ht(a,a.return,p)}else{var r=Ei(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){ht(a,a.return,p)}}l&64&&Sm(a),l&512&&Xl(a,a.return);break;case 3:if(Na(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fp(e,n)}catch(p){ht(a,a.return,p)}}break;case 27:n===null&&l&4&&Tm(a);case 26:case 5:Na(e,a),n===null&&l&4&&Cm(a),l&512&&Xl(a,a.return);break;case 12:Na(e,a);break;case 31:Na(e,a),l&4&&Om(e,a);break;case 13:Na(e,a),l&4&&Um(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vb.bind(null,a),Bb(e,a))));break;case 22:if(l=a.memoizedState!==null||wa,!l){n=n!==null&&n.memoizedState!==null||Kt,r=wa;var c=Kt;wa=l,(Kt=n)&&!c?Sa(e,a,(a.subtreeFlags&8772)!==0):Na(e,a),wa=r,Kt=c}break;case 30:break;default:Na(e,a)}}function Dm(e){var n=e.alternate;n!==null&&(e.alternate=null,Dm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&bn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var St=null,vn=!1;function _a(e,n,a){for(a=a.child;a!==null;)Am(e,n,a),a=a.sibling}function Am(e,n,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Be,a)}catch{}switch(a.tag){case 26:Kt||la(a,n),_a(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Kt||la(a,n);var l=St,r=vn;Ia(a.type)&&(St=a.stateNode,vn=!1),_a(e,n,a),es(a.stateNode),St=l,vn=r;break;case 5:Kt||la(a,n);case 6:if(l=St,r=vn,St=null,_a(e,n,a),St=l,vn=r,St!==null)if(vn)try{(St.nodeType===9?St.body:St.nodeName==="HTML"?St.ownerDocument.body:St).removeChild(a.stateNode)}catch(c){ht(a,n,c)}else try{St.removeChild(a.stateNode)}catch(c){ht(a,n,c)}break;case 18:St!==null&&(vn?(e=St,Sh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),fl(e)):Sh(St,a.stateNode));break;case 4:l=St,r=vn,St=a.stateNode.containerInfo,vn=!0,_a(e,n,a),St=l,vn=r;break;case 0:case 11:case 14:case 15:Za(2,a,n),Kt||Za(4,a,n),_a(e,n,a);break;case 1:Kt||(la(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&km(a,n,l)),_a(e,n,a);break;case 21:_a(e,n,a);break;case 22:Kt=(l=Kt)||a.memoizedState!==null,_a(e,n,a),Kt=l;break;default:_a(e,n,a)}}function Om(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{fl(e)}catch(a){ht(n,n.return,a)}}}function Um(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fl(e)}catch(a){ht(n,n.return,a)}}function pb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Em),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Em),n;default:throw Error(d(435,e.tag))}}function lo(e,n){var a=pb(e);n.forEach(function(l){if(!a.has(l)){a.add(l);var r=jb.bind(null,e,l);l.then(r,r)}})}function jn(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var r=a[l],c=e,p=n,b=p;e:for(;b!==null;){switch(b.tag){case 27:if(Ia(b.type)){St=b.stateNode,vn=!1;break e}break;case 5:St=b.stateNode,vn=!1;break e;case 3:case 4:St=b.stateNode.containerInfo,vn=!0;break e}b=b.return}if(St===null)throw Error(d(160));Am(c,p,r),St=null,vn=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Rm(n,e),n=n.sibling}var Pn=null;function Rm(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),wn(e),l&4&&(Za(3,e,e.return),Ql(3,e),Za(5,e,e.return));break;case 1:jn(n,e),wn(e),l&512&&(Kt||a===null||la(a,a.return)),l&64&&wa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var r=Pn;if(jn(n,e),wn(e),l&512&&(Kt||a===null||la(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[it]||c[Ut]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),on(c,l,a),c[Ut]=e,It(c),l=c;break e;case"link":var p=Rh("link","href",r).get(l+(a.href||""));if(p){for(var b=0;b<p.length;b++)if(c=p[b],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(b,1);break t}}c=r.createElement(l),on(c,l,a),r.head.appendChild(c);break;case"meta":if(p=Rh("meta","content",r).get(l+(a.content||""))){for(b=0;b<p.length;b++)if(c=p[b],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(b,1);break t}}c=r.createElement(l),on(c,l,a),r.head.appendChild(c);break;default:throw Error(d(468,l))}c[Ut]=e,It(c),l=c}e.stateNode=l}else Hh(r,e.type,e.stateNode);else e.stateNode=Uh(r,l,e.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?Hh(r,e.type,e.stateNode):Uh(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&_c(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),wn(e),l&512&&(Kt||a===null||la(a,a.return)),a!==null&&l&4&&_c(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),wn(e),l&512&&(Kt||a===null||la(a,a.return)),e.flags&32){r=e.stateNode;try{Li(r,"")}catch(Ee){ht(e,e.return,Ee)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,_c(e,r,a!==null?a.memoizedProps:r)),l&1024&&(kc=!0);break;case 6:if(jn(n,e),wn(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Ee){ht(e,e.return,Ee)}}break;case 3:if(wo=null,r=Pn,Pn=vo(n.containerInfo),jn(n,e),Pn=r,wn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{fl(n.containerInfo)}catch(Ee){ht(e,e.return,Ee)}kc&&(kc=!1,Hm(e));break;case 4:l=Pn,Pn=vo(e.stateNode.containerInfo),jn(n,e),wn(e),Pn=l;break;case 12:jn(n,e),wn(e);break;case 31:jn(n,e),wn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,lo(e,l)));break;case 13:jn(n,e),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(oo=De()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,lo(e,l)));break;case 22:r=e.memoizedState!==null;var E=a!==null&&a.memoizedState!==null,Z=wa,le=Kt;if(wa=Z||r,Kt=le||E,jn(n,e),Kt=le,wa=Z,wn(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(a===null||E||wa||Kt||Mi(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){E=a=n;try{if(c=E.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{b=E.stateNode;var ue=E.memoizedProps.style,F=ue!=null&&ue.hasOwnProperty("display")?ue.display:null;b.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(Ee){ht(E,E.return,Ee)}}}else if(n.tag===6){if(a===null){E=n;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(Ee){ht(E,E.return,Ee)}}}else if(n.tag===18){if(a===null){E=n;try{var P=E.stateNode;r?kh(P,!0):kh(E.stateNode,!1)}catch(Ee){ht(E,E.return,Ee)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,lo(e,a))));break;case 19:jn(n,e),wn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,lo(e,l)));break;case 30:break;case 21:break;default:jn(n,e),wn(e)}}function wn(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(zm(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var r=a.stateNode,c=Nc(e);io(e,c,r);break;case 5:var p=a.stateNode;a.flags&32&&(Li(p,""),a.flags&=-33);var b=Nc(e);io(e,b,p);break;case 3:case 4:var E=a.stateNode.containerInfo,Z=Nc(e);Sc(e,Z,E);break;default:throw Error(d(161))}}catch(le){ht(e,e.return,le)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Hm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mm(e,n.alternate,n),n=n.sibling}function Mi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Za(4,n,n.return),Mi(n);break;case 1:la(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),Mi(n);break;case 27:es(n.stateNode);case 26:case 5:la(n,n.return),Mi(n);break;case 22:n.memoizedState===null&&Mi(n);break;case 30:Mi(n);break;default:Mi(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,c=n,p=c.flags;switch(c.tag){case 0:case 11:case 15:Sa(r,c,a),Ql(4,c);break;case 1:if(Sa(r,c,a),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Z){ht(l,l.return,Z)}if(l=c,r=l.updateQueue,r!==null){var b=l.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)hp(E[r],b)}catch(Z){ht(l,l.return,Z)}}a&&p&64&&Sm(c),Xl(c,c.return);break;case 27:Tm(c);case 26:case 5:Sa(r,c,a),a&&l===null&&p&4&&Cm(c),Xl(c,c.return);break;case 12:Sa(r,c,a);break;case 31:Sa(r,c,a),a&&p&4&&Om(r,c);break;case 13:Sa(r,c,a),a&&p&4&&Um(r,c);break;case 22:c.memoizedState===null&&Sa(r,c,a),Xl(c,c.return);break;case 30:break;default:Sa(r,c,a)}n=n.sibling}}function Cc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ml(a))}function zc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ml(e))}function Wn(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lm(e,n,a,l),n=n.sibling}function Lm(e,n,a,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Wn(e,n,a,l),r&2048&&Ql(9,n);break;case 1:Wn(e,n,a,l);break;case 3:Wn(e,n,a,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ml(e)));break;case 12:if(r&2048){Wn(e,n,a,l),e=n.stateNode;try{var c=n.memoizedProps,p=c.id,b=c.onPostCommit;typeof b=="function"&&b(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){ht(n,n.return,E)}}else Wn(e,n,a,l);break;case 31:Wn(e,n,a,l);break;case 13:Wn(e,n,a,l);break;case 23:break;case 22:c=n.stateNode,p=n.alternate,n.memoizedState!==null?c._visibility&2?Wn(e,n,a,l):Zl(e,n):c._visibility&2?Wn(e,n,a,l):(c._visibility|=2,il(e,n,a,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&Cc(p,n);break;case 24:Wn(e,n,a,l),r&2048&&zc(n.alternate,n);break;default:Wn(e,n,a,l)}}function il(e,n,a,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,p=n,b=a,E=l,Z=p.flags;switch(p.tag){case 0:case 11:case 15:il(c,p,b,E,r),Ql(8,p);break;case 23:break;case 22:var le=p.stateNode;p.memoizedState!==null?le._visibility&2?il(c,p,b,E,r):Zl(c,p):(le._visibility|=2,il(c,p,b,E,r)),r&&Z&2048&&Cc(p.alternate,p);break;case 24:il(c,p,b,E,r),r&&Z&2048&&zc(p.alternate,p);break;default:il(c,p,b,E,r)}n=n.sibling}}function Zl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,r=l.flags;switch(l.tag){case 22:Zl(a,l),r&2048&&Cc(l.alternate,l);break;case 24:Zl(a,l),r&2048&&zc(l.alternate,l);break;default:Zl(a,l)}n=n.sibling}}var Kl=8192;function ll(e,n,a){if(e.subtreeFlags&Kl)for(e=e.child;e!==null;)qm(e,n,a),e=e.sibling}function qm(e,n,a){switch(e.tag){case 26:ll(e,n,a),e.flags&Kl&&e.memoizedState!==null&&Wb(a,Pn,e.memoizedState,e.memoizedProps);break;case 5:ll(e,n,a);break;case 3:case 4:var l=Pn;Pn=vo(e.stateNode.containerInfo),ll(e,n,a),Pn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Kl,Kl=16777216,ll(e,n,a),Kl=l):ll(e,n,a));break;default:ll(e,n,a)}}function Bm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];en=l,Gm(l,e)}Bm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$m(e),e=e.sibling}function $m(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Za(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,so(e)):Fl(e);break;default:Fl(e)}}function so(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];en=l,Gm(l,e)}Bm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Za(8,n,n.return),so(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,so(n));break;default:so(n)}e=e.sibling}}function Gm(e,n){for(;en!==null;){var a=en;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ml(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,en=l;else e:for(a=e;en!==null;){l=en;var r=l.sibling,c=l.return;if(Dm(l),l===a){en=null;break e}if(r!==null){r.return=c,en=r;break e}en=c}}}var mb={getCacheForType:function(e){var n=ln(Qt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return ln(Qt).controller.signal}},hb=typeof WeakMap=="function"?WeakMap:Map,dt=0,yt=null,Pe=null,et=0,mt=0,En=null,Ka=!1,sl=!1,Tc=!1,ka=0,Dt=0,Fa=0,Di=0,Ec=0,Mn=0,ol=0,Jl=null,_n=null,Mc=!1,oo=0,Ym=0,ro=1/0,co=null,Ja=null,Ft=0,Va=null,rl=null,Ca=0,Dc=0,Ac=null,Qm=null,Vl=0,Oc=null;function Dn(){return(dt&2)!==0&&et!==0?et&-et:x.T!==null?Bc():ca()}function Xm(){if(Mn===0)if((et&536870912)===0||at){var e=fn;fn<<=1,(fn&3932160)===0&&(fn=262144),Mn=e}else Mn=536870912;return e=zn.current,e!==null&&(e.flags|=32),Mn}function Nn(e,n,a){(e===yt&&(mt===2||mt===9)||e.cancelPendingCommit!==null)&&(cl(e,0),Pa(e,et,Mn,!1)),Fe(e,a),((dt&2)===0||e!==yt)&&(e===yt&&((dt&2)===0&&(Di|=a),Dt===4&&Pa(e,et,Mn,!1)),sa(e))}function Zm(e,n,a){if((dt&6)!==0)throw Error(d(327));var l=!a&&(n&127)===0&&(n&e.expiredLanes)===0||se(e,n),r=l?gb(e,n):Rc(e,n,!0),c=l;do{if(r===0){sl&&!l&&Pa(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!fb(a)){r=Rc(e,n,!1),c=!1;continue}if(r===2){if(c=n,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var b=e;r=Jl;var E=b.current.memoizedState.isDehydrated;if(E&&(cl(b,p).flags|=256),p=Rc(b,p,!1),p!==2){if(Tc&&!E){b.errorRecoveryDisabledLanes|=c,Di|=c,r=4;break e}c=_n,_n=r,c!==null&&(_n===null?_n=c:_n.push.apply(_n,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){cl(e,0),Pa(e,n,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:Pa(l,n,Mn,!Ka);break e;case 2:_n=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(r=oo+300-De(),10<r)){if(Pa(l,n,Mn,!Ka),H(l,0,!0)!==0)break e;Ca=n,l.timeoutHandle=_h(Km.bind(null,l,a,_n,co,Mc,n,Mn,Di,ol,Ka,c,"Throttled",-0,0),r);break e}Km(l,a,_n,co,Mc,n,Mn,Di,ol,Ka,c,null,-0,0)}}break}while(!0);sa(e)}function Km(e,n,a,l,r,c,p,b,E,Z,le,ue,F,P){if(e.timeoutHandle=-1,ue=n.subtreeFlags,ue&8192||(ue&16785408)===16785408){ue={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},qm(n,c,ue);var Ee=(c&62914560)===c?oo-De():(c&4194048)===c?Ym-De():0;if(Ee=Ib(ue,Ee),Ee!==null){Ca=c,e.cancelPendingCommit=Ee(th.bind(null,e,n,c,a,l,r,p,b,E,le,ue,null,F,P)),Pa(e,c,p,!Z);return}}th(e,n,c,a,l,r,p,b,E)}function fb(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var r=a[l],c=r.getSnapshot;r=r.value;try{if(!kn(c(),r))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(e,n,a,l){n&=~Ec,n&=~Di,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var c=31-st(r),p=1<<c;l[c]=-1,r&=~p}a!==0&&ce(e,a,n)}function uo(){return(dt&6)===0?(Pl(0),!1):!0}function Uc(){if(Pe!==null){if(mt===0)var e=Pe.return;else e=Pe,xa=_i=null,Pr(e),Ii=null,Al=0,e=Pe;for(;e!==null;)Nm(e.alternate,e),e=e.return;Pe=null}}function cl(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ub(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ca=0,Uc(),yt=e,Pe=a=ha(e.current,null),et=n,mt=0,En=null,Ka=!1,sl=se(e,n),Tc=!1,ol=Mn=Ec=Di=Fa=Dt=0,_n=Jl=null,Mc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-st(l),c=1<<r;n|=e[r],l&=~c}return ka=n,Ms(),a}function Fm(e,n){Ye=null,x.H=$l,n===Wi||n===qs?(n=dp(),mt=3):n===qr?(n=dp(),mt=4):mt=n===mc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,En=n,Pe===null&&(Dt=1,Is(e,Bn(n,e.current)))}function Jm(){var e=zn.current;return e===null?!0:(et&4194048)===et?Qn===null:(et&62914560)===et||(et&536870912)!==0?e===Qn:!1}function Vm(){var e=x.H;return x.H=$l,e===null?$l:e}function Pm(){var e=x.A;return x.A=mb,e}function po(){Dt=4,Ka||(et&4194048)!==et&&zn.current!==null||(sl=!0),(Fa&134217727)===0&&(Di&134217727)===0||yt===null||Pa(yt,et,Mn,!1)}function Rc(e,n,a){var l=dt;dt|=2;var r=Vm(),c=Pm();(yt!==e||et!==n)&&(co=null,cl(e,n)),n=!1;var p=Dt;e:do try{if(mt!==0&&Pe!==null){var b=Pe,E=En;switch(mt){case 8:Uc(),p=6;break e;case 3:case 2:case 9:case 6:zn.current===null&&(n=!0);var Z=mt;if(mt=0,En=null,dl(e,b,E,Z),a&&sl){p=0;break e}break;default:Z=mt,mt=0,En=null,dl(e,b,E,Z)}}xb(),p=Dt;break}catch(le){Fm(e,le)}while(!0);return n&&e.shellSuspendCounter++,xa=_i=null,dt=l,x.H=r,x.A=c,Pe===null&&(yt=null,et=0,Ms()),p}function xb(){for(;Pe!==null;)Wm(Pe)}function gb(e,n){var a=dt;dt|=2;var l=Vm(),r=Pm();yt!==e||et!==n?(co=null,ro=De()+500,cl(e,n)):sl=se(e,n);e:do try{if(mt!==0&&Pe!==null){n=Pe;var c=En;t:switch(mt){case 1:mt=0,En=null,dl(e,n,c,1);break;case 2:case 9:if(rp(c)){mt=0,En=null,Im(n);break}n=function(){mt!==2&&mt!==9||yt!==e||(mt=7),sa(e)},c.then(n,n);break e;case 3:mt=7;break e;case 4:mt=5;break e;case 7:rp(c)?(mt=0,En=null,Im(n)):(mt=0,En=null,dl(e,n,c,7));break;case 5:var p=null;switch(Pe.tag){case 26:p=Pe.memoizedState;case 5:case 27:var b=Pe;if(p?Lh(p):b.stateNode.complete){mt=0,En=null;var E=b.sibling;if(E!==null)Pe=E;else{var Z=b.return;Z!==null?(Pe=Z,mo(Z)):Pe=null}break t}}mt=0,En=null,dl(e,n,c,5);break;case 6:mt=0,En=null,dl(e,n,c,6);break;case 8:Uc(),Dt=6;break e;default:throw Error(d(462))}}bb();break}catch(le){Fm(e,le)}while(!0);return xa=_i=null,x.H=l,x.A=r,dt=a,Pe!==null?0:(yt=null,et=0,Ms(),Dt)}function bb(){for(;Pe!==null&&!ke();)Wm(Pe)}function Wm(e){var n=wm(e.alternate,e,ka);e.memoizedProps=e.pendingProps,n===null?mo(e):Pe=n}function Im(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=xm(a,n,n.pendingProps,n.type,void 0,et);break;case 11:n=xm(a,n,n.pendingProps,n.type.render,n.ref,et);break;case 5:Pr(n);default:Nm(a,n),n=Pe=Pu(n,ka),n=wm(a,n,ka)}e.memoizedProps=e.pendingProps,n===null?mo(e):Pe=n}function dl(e,n,a,l){xa=_i=null,Pr(n),Ii=null,Al=0;var r=n.return;try{if(sb(e,r,n,a,et)){Dt=1,Is(e,Bn(a,e.current)),Pe=null;return}}catch(c){if(r!==null)throw Pe=r,c;Dt=1,Is(e,Bn(a,e.current)),Pe=null;return}n.flags&32768?(at||l===1?e=!0:sl||(et&536870912)!==0?e=!1:(Ka=e=!0,(l===2||l===9||l===3||l===6)&&(l=zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),eh(n,e)):mo(n)}function mo(e){var n=e;do{if((n.flags&32768)!==0){eh(n,Ka);return}e=n.return;var a=cb(n.alternate,n,ka);if(a!==null){Pe=a;return}if(n=n.sibling,n!==null){Pe=n;return}Pe=n=e}while(n!==null);Dt===0&&(Dt=5)}function eh(e,n){do{var a=db(e.alternate,e);if(a!==null){a.flags&=32767,Pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Pe=e;return}Pe=e=a}while(e!==null);Dt=6,Pe=null}function th(e,n,a,l,r,c,p,b,E){e.cancelPendingCommit=null;do ho();while(Ft!==0);if((dt&6)!==0)throw Error(d(327));if(n!==null){if(n===e.current)throw Error(d(177));if(c=n.lanes|n.childLanes,c|=Nr,w(e,a,c,p,b,E),e===yt&&(Pe=yt=null,et=0),rl=n,Va=e,Ca=a,Dc=c,Ac=r,Qm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wb(J,function(){return sh(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=x.T,x.T=null,r=A.p,A.p=2,p=dt,dt|=4;try{ub(e,n,a)}finally{dt=p,A.p=r,x.T=l}}Ft=1,nh(),ah(),ih()}}function nh(){if(Ft===1){Ft=0;var e=Va,n=rl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=x.T,x.T=null;var l=A.p;A.p=2;var r=dt;dt|=4;try{Rm(n,e);var c=Fc,p=Gu(e.containerInfo),b=c.focusedElem,E=c.selectionRange;if(p!==b&&b&&b.ownerDocument&&$u(b.ownerDocument.documentElement,b)){if(E!==null&&yr(b)){var Z=E.start,le=E.end;if(le===void 0&&(le=Z),"selectionStart"in b)b.selectionStart=Z,b.selectionEnd=Math.min(le,b.value.length);else{var ue=b.ownerDocument||document,F=ue&&ue.defaultView||window;if(F.getSelection){var P=F.getSelection(),Ee=b.textContent.length,Le=Math.min(E.start,Ee),gt=E.end===void 0?Le:Math.min(E.end,Ee);!P.extend&&Le>gt&&(p=gt,gt=Le,Le=p);var B=Bu(b,Le),O=Bu(b,gt);if(B&&O&&(P.rangeCount!==1||P.anchorNode!==B.node||P.anchorOffset!==B.offset||P.focusNode!==O.node||P.focusOffset!==O.offset)){var X=ue.createRange();X.setStart(B.node,B.offset),P.removeAllRanges(),Le>gt?(P.addRange(X),P.extend(O.node,O.offset)):(X.setEnd(O.node,O.offset),P.addRange(X))}}}}for(ue=[],P=b;P=P.parentNode;)P.nodeType===1&&ue.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ue.length;b++){var oe=ue[b];oe.element.scrollLeft=oe.left,oe.element.scrollTop=oe.top}}ko=!!Kc,Fc=Kc=null}finally{dt=r,A.p=l,x.T=a}}e.current=n,Ft=2}}function ah(){if(Ft===2){Ft=0;var e=Va,n=rl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=x.T,x.T=null;var l=A.p;A.p=2;var r=dt;dt|=4;try{Mm(e,n.alternate,n)}finally{dt=r,A.p=l,x.T=a}}Ft=3}}function ih(){if(Ft===4||Ft===3){Ft=0,Sn();var e=Va,n=rl,a=Ca,l=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ft=5:(Ft=0,rl=Va=null,lh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Ja=null),Rn(a),n=n.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Be,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=x.T,r=A.p,A.p=2,x.T=null;try{for(var c=e.onRecoverableError,p=0;p<l.length;p++){var b=l[p];c(b.value,{componentStack:b.stack})}}finally{x.T=n,A.p=r}}(Ca&3)!==0&&ho(),sa(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===Oc?Vl++:(Vl=0,Oc=e):Vl=0,Pl(0)}}function lh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ml(n)))}function ho(){return nh(),ah(),ih(),sh()}function sh(){if(Ft!==5)return!1;var e=Va,n=Dc;Dc=0;var a=Rn(Ca),l=x.T,r=A.p;try{A.p=32>a?32:a,x.T=null,a=Ac,Ac=null;var c=Va,p=Ca;if(Ft=0,rl=Va=null,Ca=0,(dt&6)!==0)throw Error(d(331));var b=dt;if(dt|=4,$m(c.current),Lm(c,c.current,p,a),dt=b,Pl(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Be,c)}catch{}return!0}finally{A.p=r,x.T=l,lh(e,n)}}function oh(e,n,a){n=Bn(a,n),n=pc(e.stateNode,n,2),e=Ya(e,n,2),e!==null&&(Fe(e,2),sa(e))}function ht(e,n,a){if(e.tag===3)oh(e,e,a);else for(;n!==null;){if(n.tag===3){oh(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ja===null||!Ja.has(l))){e=Bn(a,e),a=rm(2),l=Ya(n,a,2),l!==null&&(cm(a,l,n,e),Fe(l,2),sa(l));break}}n=n.return}}function Hc(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new hb;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(a)||(Tc=!0,r.add(a),e=yb.bind(null,e,n,a),n.then(e,e))}function yb(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,yt===e&&(et&a)===a&&(Dt===4||Dt===3&&(et&62914560)===et&&300>De()-oo?(dt&2)===0&&cl(e,0):Ec|=a,ol===et&&(ol=0)),sa(e)}function rh(e,n){n===0&&(n=Me()),e=vi(e,n),e!==null&&(Fe(e,n),sa(e))}function vb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),rh(e,a)}function jb(e,n){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(n),rh(e,a)}function wb(e,n){return $t(e,n)}var fo=null,ul=null,Lc=!1,xo=!1,qc=!1,Wa=0;function sa(e){e!==ul&&e.next===null&&(ul===null?fo=ul=e:ul=ul.next=e),xo=!0,Lc||(Lc=!0,Nb())}function Pl(e,n){if(!qc&&xo){qc=!0;do for(var a=!1,l=fo;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var p=l.suspendedLanes,b=l.pingedLanes;c=(1<<31-st(42|e)+1)-1,c&=r&~(p&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,ph(l,c))}else c=et,c=H(l,l===yt?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||se(l,c)||(a=!0,ph(l,c));l=l.next}while(a);qc=!1}}function _b(){ch()}function ch(){xo=Lc=!1;var e=0;Wa!==0&&Ob()&&(e=Wa);for(var n=De(),a=null,l=fo;l!==null;){var r=l.next,c=dh(l,n);c===0?(l.next=null,a===null?fo=r:a.next=r,r===null&&(ul=a)):(a=l,(e!==0||(c&3)!==0)&&(xo=!0)),l=r}Ft!==0&&Ft!==5||Pl(e),Wa!==0&&(Wa=0)}function dh(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-st(c),b=1<<p,E=r[p];E===-1?((b&a)===0||(b&l)!==0)&&(r[p]=ee(b,n)):E<=n&&(e.expiredLanes|=b),c&=~b}if(n=yt,a=et,a=H(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(mt===2||mt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ot(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||se(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&Ot(l),Rn(a)){case 2:case 8:a=Wt;break;case 32:a=J;break;case 268435456:a=Se;break;default:a=J}return l=uh.bind(null,e),a=$t(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&Ot(l),e.callbackPriority=2,e.callbackNode=null,2}function uh(e,n){if(Ft!==0&&Ft!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ho()&&e.callbackNode!==a)return null;var l=et;return l=H(e,e===yt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zm(e,l,n),dh(e,De()),e.callbackNode!=null&&e.callbackNode===a?uh.bind(null,e):null)}function ph(e,n){if(ho())return null;Zm(e,n,!0)}function Nb(){Rb(function(){(dt&6)!==0?$t(mn,_b):ch()})}function Bc(){if(Wa===0){var e=Vi;e===0&&(e=Gt,Gt<<=1,(Gt&261888)===0&&(Gt=256)),Wa=e}return Wa}function mh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_s(""+e)}function hh(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Sb(e,n,a,l,r){if(n==="submit"&&a&&a.stateNode===r){var c=mh((r[zt]||null).action),p=l.submitter;p&&(n=(n=p[zt]||null)?mh(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var b=new Cs("action","action",null,l,r);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Wa!==0){var E=p?hh(r,p):new FormData(r);sc(a,{pending:!0,data:E,method:r.method,action:c},null,E)}}else typeof c=="function"&&(b.preventDefault(),E=p?hh(r,p):new FormData(r),sc(a,{pending:!0,data:E,method:r.method,action:c},c,E))},currentTarget:r}]})}}for(var $c=0;$c<_r.length;$c++){var Gc=_r[$c],kb=Gc.toLowerCase(),Cb=Gc[0].toUpperCase()+Gc.slice(1);Vn(kb,"on"+Cb)}Vn(Xu,"onAnimationEnd"),Vn(Zu,"onAnimationIteration"),Vn(Ku,"onAnimationStart"),Vn("dblclick","onDoubleClick"),Vn("focusin","onFocus"),Vn("focusout","onBlur"),Vn(Yg,"onTransitionRun"),Vn(Qg,"onTransitionStart"),Vn(Xg,"onTransitionCancel"),Vn(Fu,"onTransitionEnd"),Ri("onMouseEnter",["mouseout","mouseover"]),Ri("onMouseLeave",["mouseout","mouseover"]),Ri("onPointerEnter",["pointerout","pointerover"]),Ri("onPointerLeave",["pointerout","pointerover"]),xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xi("onBeforeInput",["compositionend","keypress","textInput","paste"]),xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function fh(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],r=l.event;l=l.listeners;e:{var c=void 0;if(n)for(var p=l.length-1;0<=p;p--){var b=l[p],E=b.instance,Z=b.currentTarget;if(b=b.listener,E!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=Z;try{c(r)}catch(le){Es(le)}r.currentTarget=null,c=E}else for(p=0;p<l.length;p++){if(b=l[p],E=b.instance,Z=b.currentTarget,b=b.listener,E!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=Z;try{c(r)}catch(le){Es(le)}r.currentTarget=null,c=E}}}}function We(e,n){var a=n[N];a===void 0&&(a=n[N]=new Set);var l=e+"__bubble";a.has(l)||(xh(n,e,2,!1),a.add(l))}function Yc(e,n,a){var l=0;n&&(l|=4),xh(a,e,l,n)}var go="_reactListening"+Math.random().toString(36).slice(2);function Qc(e){if(!e[go]){e[go]=!0,cu.forEach(function(a){a!=="selectionchange"&&(zb.has(a)||Yc(a,!1,e),Yc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[go]||(n[go]=!0,Yc("selectionchange",!1,n))}}function xh(e,n,a,l){switch(Xh(n)){case 2:var r=ny;break;case 8:r=ay;break;default:r=ld}a=r.bind(null,n,a,e),r=void 0,!dr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,a,{capture:!0,passive:r}):e.addEventListener(n,a,!0):r!==void 0?e.addEventListener(n,a,{passive:r}):e.addEventListener(n,a,!1)}function Xc(e,n,a,l,r){var c=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var b=l.stateNode.containerInfo;if(b===r)break;if(p===4)for(p=l.return;p!==null;){var E=p.tag;if((E===3||E===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;b!==null;){if(p=Yt(b),p===null)return;if(E=p.tag,E===5||E===6||E===26||E===27){l=c=p;continue e}b=b.parentNode}}l=l.return}ju(function(){var Z=c,le=rr(a),ue=[];e:{var F=Ju.get(e);if(F!==void 0){var P=Cs,Ee=e;switch(e){case"keypress":if(Ss(a)===0)break e;case"keydown":case"keyup":P=jg;break;case"focusin":Ee="focus",P=hr;break;case"focusout":Ee="blur",P=hr;break;case"beforeblur":case"afterblur":P=hr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Ng;break;case Xu:case Zu:case Ku:P=pg;break;case Fu:P=kg;break;case"scroll":case"scrollend":P=og;break;case"wheel":P=zg;break;case"copy":case"cut":case"paste":P=hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=ku;break;case"toggle":case"beforetoggle":P=Eg}var Le=(n&4)!==0,gt=!Le&&(e==="scroll"||e==="scrollend"),B=Le?F!==null?F+"Capture":null:F;Le=[];for(var O=Z,X;O!==null;){var oe=O;if(X=oe.stateNode,oe=oe.tag,oe!==5&&oe!==26&&oe!==27||X===null||B===null||(oe=vl(O,B),oe!=null&&Le.push(Il(O,oe,X))),gt)break;O=O.return}0<Le.length&&(F=new P(F,Ee,null,a,le),ue.push({event:F,listeners:Le}))}}if((n&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",F&&a!==or&&(Ee=a.relatedTarget||a.fromElement)&&(Yt(Ee)||Ee[Oa]))break e;if((P||F)&&(F=le.window===le?le:(F=le.ownerDocument)?F.defaultView||F.parentWindow:window,P?(Ee=a.relatedTarget||a.toElement,P=Z,Ee=Ee?Yt(Ee):null,Ee!==null&&(gt=m(Ee),Le=Ee.tag,Ee!==gt||Le!==5&&Le!==27&&Le!==6)&&(Ee=null)):(P=null,Ee=Z),P!==Ee)){if(Le=Nu,oe="onMouseLeave",B="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(Le=ku,oe="onPointerLeave",B="onPointerEnter",O="pointer"),gt=P==null?F:da(P),X=Ee==null?F:da(Ee),F=new Le(oe,O+"leave",P,a,le),F.target=gt,F.relatedTarget=X,oe=null,Yt(le)===Z&&(Le=new Le(B,O+"enter",Ee,a,le),Le.target=X,Le.relatedTarget=gt,oe=Le),gt=oe,P&&Ee)t:{for(Le=Tb,B=P,O=Ee,X=0,oe=B;oe;oe=Le(oe))X++;oe=0;for(var Re=O;Re;Re=Le(Re))oe++;for(;0<X-oe;)B=Le(B),X--;for(;0<oe-X;)O=Le(O),oe--;for(;X--;){if(B===O||O!==null&&B===O.alternate){Le=B;break t}B=Le(B),O=Le(O)}Le=null}else Le=null;P!==null&&gh(ue,F,P,Le,!1),Ee!==null&&gt!==null&&gh(ue,gt,Ee,Le,!0)}}e:{if(F=Z?da(Z):window,P=F.nodeName&&F.nodeName.toLowerCase(),P==="select"||P==="input"&&F.type==="file")var ot=Ou;else if(Du(F))if(Uu)ot=Bg;else{ot=Lg;var Oe=Hg}else P=F.nodeName,!P||P.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?Z&&sr(Z.elementType)&&(ot=Ou):ot=qg;if(ot&&(ot=ot(e,Z))){Au(ue,ot,a,le);break e}Oe&&Oe(e,F,Z),e==="focusout"&&Z&&F.type==="number"&&Z.memoizedProps.value!=null&&lr(F,"number",F.value)}switch(Oe=Z?da(Z):window,e){case"focusin":(Du(Oe)||Oe.contentEditable==="true")&&(Gi=Oe,vr=Z,zl=null);break;case"focusout":zl=vr=Gi=null;break;case"mousedown":jr=!0;break;case"contextmenu":case"mouseup":case"dragend":jr=!1,Yu(ue,a,le);break;case"selectionchange":if(Gg)break;case"keydown":case"keyup":Yu(ue,a,le)}var Xe;if(xr)e:{switch(e){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else $i?Eu(e,a)&&(tt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(Cu&&a.locale!=="ko"&&($i||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&$i&&(Xe=wu()):(Ra=le,ur="value"in Ra?Ra.value:Ra.textContent,$i=!0)),Oe=bo(Z,tt),0<Oe.length&&(tt=new Su(tt,e,null,a,le),ue.push({event:tt,listeners:Oe}),Xe?tt.data=Xe:(Xe=Mu(a),Xe!==null&&(tt.data=Xe)))),(Xe=Dg?Ag(e,a):Og(e,a))&&(tt=bo(Z,"onBeforeInput"),0<tt.length&&(Oe=new Su("onBeforeInput","beforeinput",null,a,le),ue.push({event:Oe,listeners:tt}),Oe.data=Xe)),Sb(ue,e,Z,a,le)}fh(ue,n)})}function Il(e,n,a){return{instance:e,listener:n,currentTarget:a}}function bo(e,n){for(var a=n+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=vl(e,a),r!=null&&l.unshift(Il(e,r,c)),r=vl(e,n),r!=null&&l.push(Il(e,r,c))),e.tag===3)return l;e=e.return}return[]}function Tb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gh(e,n,a,l,r){for(var c=n._reactName,p=[];a!==null&&a!==l;){var b=a,E=b.alternate,Z=b.stateNode;if(b=b.tag,E!==null&&E===l)break;b!==5&&b!==26&&b!==27||Z===null||(E=Z,r?(Z=vl(a,c),Z!=null&&p.unshift(Il(a,Z,E))):r||(Z=vl(a,c),Z!=null&&p.push(Il(a,Z,E)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var Eb=/\r\n?/g,Mb=/\u0000|\uFFFD/g;function bh(e){return(typeof e=="string"?e:""+e).replace(Eb,`
`).replace(Mb,"")}function yh(e,n){return n=bh(n),bh(e)===n}function xt(e,n,a,l,r,c){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Li(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Li(e,""+l);break;case"className":js(e,"class",l);break;case"tabIndex":js(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":js(e,a,l);break;case"style":yu(e,l,c);break;case"data":if(n!=="object"){js(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=_s(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&xt(e,n,"name",r.name,r,null),xt(e,n,"formEncType",r.formEncType,r,null),xt(e,n,"formMethod",r.formMethod,r,null),xt(e,n,"formTarget",r.formTarget,r,null)):(xt(e,n,"encType",r.encType,r,null),xt(e,n,"method",r.method,r,null),xt(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=_s(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=pa);break;case"onScroll":l!=null&&We("scroll",e);break;case"onScrollEnd":l!=null&&We("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=_s(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":We("beforetoggle",e),We("toggle",e),vs(e,"popover",l);break;case"xlinkActuate":ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ua(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ua(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ua(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ua(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":vs(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=lg.get(a)||a,vs(e,a,l))}}function Zc(e,n,a,l,r,c){switch(a){case"style":yu(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Li(e,l):(typeof l=="number"||typeof l=="bigint")&&Li(e,""+l);break;case"onScroll":l!=null&&We("scroll",e);break;case"onScrollEnd":l!=null&&We("scrollend",e);break;case"onClick":l!=null&&(e.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!du.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),n=a.slice(2,r?a.length-7:void 0),c=e[zt]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,r);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):vs(e,a,l)}}}function on(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":We("error",e),We("load",e);var l=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:xt(e,n,c,p,a,null)}}r&&xt(e,n,"srcSet",a.srcSet,a,null),l&&xt(e,n,"src",a.src,a,null);return;case"input":We("invalid",e);var b=c=p=r=null,E=null,Z=null;for(l in a)if(a.hasOwnProperty(l)){var le=a[l];if(le!=null)switch(l){case"name":r=le;break;case"type":p=le;break;case"checked":E=le;break;case"defaultChecked":Z=le;break;case"value":c=le;break;case"defaultValue":b=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(d(137,n));break;default:xt(e,n,l,le,a,null)}}fu(e,c,b,E,Z,p,r,!1);return;case"select":We("invalid",e),l=p=c=null;for(r in a)if(a.hasOwnProperty(r)&&(b=a[r],b!=null))switch(r){case"value":c=b;break;case"defaultValue":p=b;break;case"multiple":l=b;default:xt(e,n,r,b,a,null)}n=c,a=p,e.multiple=!!l,n!=null?Hi(e,!!l,n,!1):a!=null&&Hi(e,!!l,a,!0);return;case"textarea":We("invalid",e),c=r=l=null;for(p in a)if(a.hasOwnProperty(p)&&(b=a[p],b!=null))switch(p){case"value":l=b;break;case"defaultValue":r=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(91));break;default:xt(e,n,p,b,a,null)}gu(e,l,r,c);return;case"option":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:xt(e,n,E,l,a,null)}return;case"dialog":We("beforetoggle",e),We("toggle",e),We("cancel",e),We("close",e);break;case"iframe":case"object":We("load",e);break;case"video":case"audio":for(l=0;l<Wl.length;l++)We(Wl[l],e);break;case"image":We("error",e),We("load",e);break;case"details":We("toggle",e);break;case"embed":case"source":case"link":We("error",e),We("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(l=a[Z],l!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:xt(e,n,Z,l,a,null)}return;default:if(sr(n)){for(le in a)a.hasOwnProperty(le)&&(l=a[le],l!==void 0&&Zc(e,n,le,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&xt(e,n,b,l,a,null))}function Db(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,b=null,E=null,Z=null,le=null;for(P in a){var ue=a[P];if(a.hasOwnProperty(P)&&ue!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":E=ue;default:l.hasOwnProperty(P)||xt(e,n,P,null,l,ue)}}for(var F in l){var P=l[F];if(ue=a[F],l.hasOwnProperty(F)&&(P!=null||ue!=null))switch(F){case"type":c=P;break;case"name":r=P;break;case"checked":Z=P;break;case"defaultChecked":le=P;break;case"value":p=P;break;case"defaultValue":b=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(d(137,n));break;default:P!==ue&&xt(e,n,F,P,l,ue)}}ir(e,p,b,E,Z,le,c,r);return;case"select":P=p=b=F=null;for(c in a)if(E=a[c],a.hasOwnProperty(c)&&E!=null)switch(c){case"value":break;case"multiple":P=E;default:l.hasOwnProperty(c)||xt(e,n,c,null,l,E)}for(r in l)if(c=l[r],E=a[r],l.hasOwnProperty(r)&&(c!=null||E!=null))switch(r){case"value":F=c;break;case"defaultValue":b=c;break;case"multiple":p=c;default:c!==E&&xt(e,n,r,c,l,E)}n=b,a=p,l=P,F!=null?Hi(e,!!a,F,!1):!!l!=!!a&&(n!=null?Hi(e,!!a,n,!0):Hi(e,!!a,a?[]:"",!1));return;case"textarea":P=F=null;for(b in a)if(r=a[b],a.hasOwnProperty(b)&&r!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:xt(e,n,b,null,l,r)}for(p in l)if(r=l[p],c=a[p],l.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":F=r;break;case"defaultValue":P=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&xt(e,n,p,r,l,c)}xu(e,F,P);return;case"option":for(var Ee in a)if(F=a[Ee],a.hasOwnProperty(Ee)&&F!=null&&!l.hasOwnProperty(Ee))switch(Ee){case"selected":e.selected=!1;break;default:xt(e,n,Ee,null,l,F)}for(E in l)if(F=l[E],P=a[E],l.hasOwnProperty(E)&&F!==P&&(F!=null||P!=null))switch(E){case"selected":e.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:xt(e,n,E,F,l,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Le in a)F=a[Le],a.hasOwnProperty(Le)&&F!=null&&!l.hasOwnProperty(Le)&&xt(e,n,Le,null,l,F);for(Z in l)if(F=l[Z],P=a[Z],l.hasOwnProperty(Z)&&F!==P&&(F!=null||P!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(d(137,n));break;default:xt(e,n,Z,F,l,P)}return;default:if(sr(n)){for(var gt in a)F=a[gt],a.hasOwnProperty(gt)&&F!==void 0&&!l.hasOwnProperty(gt)&&Zc(e,n,gt,void 0,l,F);for(le in l)F=l[le],P=a[le],!l.hasOwnProperty(le)||F===P||F===void 0&&P===void 0||Zc(e,n,le,F,l,P);return}}for(var B in a)F=a[B],a.hasOwnProperty(B)&&F!=null&&!l.hasOwnProperty(B)&&xt(e,n,B,null,l,F);for(ue in l)F=l[ue],P=a[ue],!l.hasOwnProperty(ue)||F===P||F==null&&P==null||xt(e,n,ue,F,l,P)}function vh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ab(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var r=a[l],c=r.transferSize,p=r.initiatorType,b=r.duration;if(c&&b&&vh(p)){for(p=0,b=r.responseEnd,l+=1;l<a.length;l++){var E=a[l],Z=E.startTime;if(Z>b)break;var le=E.transferSize,ue=E.initiatorType;le&&vh(ue)&&(E=E.responseEnd,p+=le*(E<b?1:(b-Z)/(E-Z)))}if(--l,n+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Kc=null,Fc=null;function yo(e){return e.nodeType===9?e:e.ownerDocument}function jh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Jc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vc=null;function Ob(){var e=window.event;return e&&e.type==="popstate"?e===Vc?!1:(Vc=e,!0):(Vc=null,!1)}var _h=typeof setTimeout=="function"?setTimeout:void 0,Ub=typeof clearTimeout=="function"?clearTimeout:void 0,Nh=typeof Promise=="function"?Promise:void 0,Rb=typeof queueMicrotask=="function"?queueMicrotask:typeof Nh<"u"?function(e){return Nh.resolve(null).then(e).catch(Hb)}:_h;function Hb(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function Sh(e,n){var a=n,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(r),fl(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")es(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,es(a);for(var c=a.firstChild;c;){var p=c.nextSibling,b=c.nodeName;c[it]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&es(e.ownerDocument.body);a=r}while(a);fl(n)}function kh(e,n){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Pc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pc(a),bn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Lb(e,n,a,l){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[it])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Xn(e.nextSibling),e===null)break}return null}function qb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Xn(e.nextSibling),e===null))return null;return e}function Ch(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Xn(e.nextSibling),e===null))return null;return e}function Wc(e){return e.data==="$?"||e.data==="$~"}function Ic(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Bb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ed=null;function zh(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Xn(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Th(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Eh(e,n,a){switch(n=yo(a),e){case"html":if(e=n.documentElement,!e)throw Error(d(452));return e;case"head":if(e=n.head,!e)throw Error(d(453));return e;case"body":if(e=n.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function es(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);bn(e)}var Zn=new Map,Mh=new Set;function vo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var za=A.d;A.d={f:$b,r:Gb,D:Yb,C:Qb,L:Xb,m:Zb,X:Fb,S:Kb,M:Jb};function $b(){var e=za.f(),n=uo();return e||n}function Gb(e){var n=na(e);n!==null&&n.tag===5&&n.type==="form"?Fp(n):za.r(e)}var pl=typeof document>"u"?null:document;function Dh(e,n,a){var l=pl;if(l&&typeof n=="string"&&n){var r=Ln(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Mh.has(r)||(Mh.add(r),e={rel:e,crossOrigin:a,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),on(n,"link",e),It(n),l.head.appendChild(n)))}}function Yb(e){za.D(e),Dh("dns-prefetch",e,null)}function Qb(e,n){za.C(e,n),Dh("preconnect",e,n)}function Xb(e,n,a){za.L(e,n,a);var l=pl;if(l&&e&&n){var r='link[rel="preload"][as="'+Ln(n)+'"]';n==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Ln(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Ln(a.imageSizes)+'"]')):r+='[href="'+Ln(e)+'"]';var c=r;switch(n){case"style":c=ml(e);break;case"script":c=hl(e)}Zn.has(c)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Zn.set(c,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(ts(c))||n==="script"&&l.querySelector(ns(c))||(n=l.createElement("link"),on(n,"link",e),It(n),l.head.appendChild(n)))}}function Zb(e,n){za.m(e,n);var a=pl;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+Ln(l)+'"][href="'+Ln(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=hl(e)}if(!Zn.has(c)&&(e=S({rel:"modulepreload",href:e},n),Zn.set(c,e),a.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ns(c)))return}l=a.createElement("link"),on(l,"link",e),It(l),a.head.appendChild(l)}}}function Kb(e,n,a){za.S(e,n,a);var l=pl;if(l&&e){var r=Ua(l).hoistableStyles,c=ml(e);n=n||"default";var p=r.get(c);if(!p){var b={loading:0,preload:null};if(p=l.querySelector(ts(c)))b.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Zn.get(c))&&td(e,a);var E=p=l.createElement("link");It(E),on(E,"link",e),E._p=new Promise(function(Z,le){E.onload=Z,E.onerror=le}),E.addEventListener("load",function(){b.loading|=1}),E.addEventListener("error",function(){b.loading|=2}),b.loading|=4,jo(p,n,l)}p={type:"stylesheet",instance:p,count:1,state:b},r.set(c,p)}}}function Fb(e,n){za.X(e,n);var a=pl;if(a&&e){var l=Ua(a).hoistableScripts,r=hl(e),c=l.get(r);c||(c=a.querySelector(ns(r)),c||(e=S({src:e,async:!0},n),(n=Zn.get(r))&&nd(e,n),c=a.createElement("script"),It(c),on(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Jb(e,n){za.M(e,n);var a=pl;if(a&&e){var l=Ua(a).hoistableScripts,r=hl(e),c=l.get(r);c||(c=a.querySelector(ns(r)),c||(e=S({src:e,async:!0,type:"module"},n),(n=Zn.get(r))&&nd(e,n),c=a.createElement("script"),It(c),on(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Ah(e,n,a,l){var r=(r=_e.current)?vo(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ml(a.href),a=Ua(r).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ml(a.href);var c=Ua(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(ts(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Zn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Zn.set(e,a),c||Vb(r,e,a,p.state))),n&&l===null)throw Error(d(528,""));return p}if(n&&l!==null)throw Error(d(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hl(a),a=Ua(r).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ml(e){return'href="'+Ln(e)+'"'}function ts(e){return'link[rel="stylesheet"]['+e+"]"}function Oh(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Vb(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),on(n,"link",a),It(n),e.head.appendChild(n))}function hl(e){return'[src="'+Ln(e)+'"]'}function ns(e){return"script[async]"+e}function Uh(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Ln(a.href)+'"]');if(l)return n.instance=l,It(l),l;var r=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),It(l),on(l,"style",r),jo(l,a.precedence,e),n.instance=l;case"stylesheet":r=ml(a.href);var c=e.querySelector(ts(r));if(c)return n.state.loading|=4,n.instance=c,It(c),c;l=Oh(a),(r=Zn.get(r))&&td(l,r),c=(e.ownerDocument||e).createElement("link"),It(c);var p=c;return p._p=new Promise(function(b,E){p.onload=b,p.onerror=E}),on(c,"link",l),n.state.loading|=4,jo(c,a.precedence,e),n.instance=c;case"script":return c=hl(a.src),(r=e.querySelector(ns(c)))?(n.instance=r,It(r),r):(l=a,(r=Zn.get(c))&&(l=S({},a),nd(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),It(r),on(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,jo(l,a.precedence,e));return n.instance}function jo(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,p=0;p<l.length;p++){var b=l[p];if(b.dataset.precedence===n)c=b;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function td(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function nd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var wo=null;function Rh(e,n,a){if(wo===null){var l=new Map,r=wo=new Map;r.set(a,l)}else r=wo,l=r.get(a),l||(l=new Map,r.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var c=a[r];if(!(c[it]||c[Ut]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=e+p;var b=l.get(p);b?b.push(c):l.set(p,[c])}}return l}function Hh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Pb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Lh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Wb(e,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=ml(l.href),c=n.querySelector(ts(r));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=_o.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,It(c);return}c=n.ownerDocument||n,l=Oh(l),(r=Zn.get(r))&&td(l,r),c=c.createElement("link"),It(c);var p=c;p._p=new Promise(function(b,E){p.onload=b,p.onerror=E}),on(c,"link",l),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_o.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ad=0;function Ib(e,n){return e.stylesheets&&e.count===0&&So(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&So(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&ad===0&&(ad=62500*Ab());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&So(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>ad?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function _o(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)So(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var No=null;function So(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,No=new Map,n.forEach(ey,e),No=null,_o.call(e))}function ey(e,n){if(!(n.state.loading&4)){var a=No.get(e);if(a)var l=a.get(null);else{a=new Map,No.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),l=p)}l&&a.set(null,l)}r=n.instance,p=r.getAttribute("data-precedence"),c=a.get(p)||l,c===l&&a.set(null,r),a.set(p,r),this.count++,l=_o.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var as={$$typeof:D,Provider:null,Consumer:null,_currentValue:C,_currentValue2:C,_threadCount:0};function ty(e,n,a,l,r,c,p,b,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function qh(e,n,a,l,r,c,p,b,E,Z,le,ue){return e=new ty(e,n,a,p,E,Z,le,ue,b),n=1,c===!0&&(n|=24),c=Cn(3,null,null,n),e.current=c,c.stateNode=e,n=Rr(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:n},Br(c),e}function Bh(e){return e?(e=Xi,e):Xi}function $h(e,n,a,l,r,c){r=Bh(r),l.context===null?l.context=r:l.pendingContext=r,l=Ga(n),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=Ya(e,l,n),a!==null&&(Nn(a,e,n),Ul(a,e,n))}function Gh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function id(e,n){Gh(e,n),(e=e.alternate)&&Gh(e,n)}function Yh(e){if(e.tag===13||e.tag===31){var n=vi(e,67108864);n!==null&&Nn(n,e,67108864),id(e,67108864)}}function Qh(e){if(e.tag===13||e.tag===31){var n=Dn();n=jt(n);var a=vi(e,n);a!==null&&Nn(a,e,n),id(e,n)}}var ko=!0;function ny(e,n,a,l){var r=x.T;x.T=null;var c=A.p;try{A.p=2,ld(e,n,a,l)}finally{A.p=c,x.T=r}}function ay(e,n,a,l){var r=x.T;x.T=null;var c=A.p;try{A.p=8,ld(e,n,a,l)}finally{A.p=c,x.T=r}}function ld(e,n,a,l){if(ko){var r=sd(l);if(r===null)Xc(e,n,l,Co,a),Zh(e,l);else if(ly(r,e,n,a,l))l.stopPropagation();else if(Zh(e,l),n&4&&-1<iy.indexOf(e)){for(;r!==null;){var c=na(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=xn(c.pendingLanes);if(p!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;p;){var E=1<<31-st(p);b.entanglements[1]|=E,p&=~E}sa(c),(dt&6)===0&&(ro=De()+500,Pl(0))}}break;case 31:case 13:b=vi(c,2),b!==null&&Nn(b,c,2),uo(),id(c,2)}if(c=sd(l),c===null&&Xc(e,n,l,Co,a),c===r)break;r=c}r!==null&&l.stopPropagation()}else Xc(e,n,l,null,a)}}function sd(e){return e=rr(e),od(e)}var Co=null;function od(e){if(Co=null,e=Yt(e),e!==null){var n=m(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=k(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Co=e,null}function Xh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pn()){case mn:return 2;case Wt:return 8;case J:case Ae:return 32;case Se:return 268435456;default:return 32}default:return 32}}var rd=!1,ei=null,ti=null,ni=null,is=new Map,ls=new Map,ai=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zh(e,n){switch(e){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":is.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(n.pointerId)}}function ss(e,n,a,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},n!==null&&(n=na(n),n!==null&&Yh(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function ly(e,n,a,l,r){switch(n){case"focusin":return ei=ss(ei,e,n,a,l,r),!0;case"dragenter":return ti=ss(ti,e,n,a,l,r),!0;case"mouseover":return ni=ss(ni,e,n,a,l,r),!0;case"pointerover":var c=r.pointerId;return is.set(c,ss(is.get(c)||null,e,n,a,l,r)),!0;case"gotpointercapture":return c=r.pointerId,ls.set(c,ss(ls.get(c)||null,e,n,a,l,r)),!0}return!1}function Kh(e){var n=Yt(e.target);if(n!==null){var a=m(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Nt(e.priority,function(){Qh(a)});return}}else if(n===31){if(n=k(a),n!==null){e.blockedOn=n,Nt(e.priority,function(){Qh(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=sd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);or=l,a.target.dispatchEvent(l),or=null}else return n=na(a),n!==null&&Yh(n),e.blockedOn=a,!1;n.shift()}return!0}function Fh(e,n,a){zo(e)&&a.delete(n)}function sy(){rd=!1,ei!==null&&zo(ei)&&(ei=null),ti!==null&&zo(ti)&&(ti=null),ni!==null&&zo(ni)&&(ni=null),is.forEach(Fh),ls.forEach(Fh)}function To(e,n){e.blockedOn===n&&(e.blockedOn=null,rd||(rd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,sy)))}var Eo=null;function Jh(e){Eo!==e&&(Eo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Eo===e&&(Eo=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(od(l||a)===null)continue;break}var c=na(a);c!==null&&(e.splice(n,3),n-=3,sc(c,{pending:!0,data:r,method:a.method,action:l},l,r))}}))}function fl(e){function n(E){return To(E,e)}ei!==null&&To(ei,e),ti!==null&&To(ti,e),ni!==null&&To(ni,e),is.forEach(n),ls.forEach(n);for(var a=0;a<ai.length;a++){var l=ai[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ai.length&&(a=ai[0],a.blockedOn===null);)Kh(a),a.blockedOn===null&&ai.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var r=a[l],c=a[l+1],p=r[zt]||null;if(typeof c=="function")p||Jh(a);else if(p){var b=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[zt]||null)b=p.formAction;else if(od(r)!==null)continue}else b=p.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),Jh(a)}}}function Vh(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function cd(e){this._internalRoot=e}Mo.prototype.render=cd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(d(409));var a=n.current,l=Dn();$h(a,l,e,n,null,null)},Mo.prototype.unmount=cd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$h(e.current,2,null,e,null,null),uo(),n[Oa]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var n=ca();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ai.length&&n!==0&&n<ai[a].priority;a++);ai.splice(a,0,e),a===0&&Kh(e)}};var Ph=i.version;if(Ph!=="19.2.6")throw Error(d(527,Ph,"19.2.6"));A.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=v(n),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var oy={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Do=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Do.isDisabled&&Do.supportsFiber)try{Be=Do.inject(oy),Ge=Do}catch{}}return rs.createRoot=function(e,n){if(!u(e))throw Error(d(299));var a=!1,l="",r=im,c=lm,p=sm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=qh(e,1,!1,null,null,a,l,null,r,c,p,Vh),e[Oa]=n.current,Qc(e),new cd(n)},rs.hydrateRoot=function(e,n,a){if(!u(e))throw Error(d(299));var l=!1,r="",c=im,p=lm,b=sm,E=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(E=a.formState)),n=qh(e,1,!0,n,a??null,l,r,E,c,p,b,Vh),n.context=Bh(null),a=n.current,l=Dn(),l=jt(l),r=Ga(l),r.callback=null,Ya(a,r,l),a=l,n.current.lanes=a,Fe(n,a),sa(n),e[Oa]=n.current,Qc(e),new Mo(n)},rs.version="19.2.6",rs}var rf;function vy(){if(rf)return pd.exports;rf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),pd.exports=yy(),pd.exports}var jy=vy(),hx=mx();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},fs.apply(this,arguments)}var ci;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(ci||(ci={}));const cf="popstate";function wy(s){s===void 0&&(s={});function i(u,m){let{pathname:h="/",search:k="",hash:y=""}=Ui(u.location.hash.substr(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Od("",{pathname:h,search:k,hash:y},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function o(u,m){let h=u.document.querySelector("base"),k="";if(h&&h.getAttribute("href")){let y=u.location.href,v=y.indexOf("#");k=v===-1?y:y.slice(0,v)}return k+"#"+(typeof m=="string"?m:Qo(m))}function d(u,m){er(u.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(m)+")")}return Ny(i,o,d,s)}function Lt(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function er(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function _y(){return Math.random().toString(36).substr(2,8)}function df(s,i){return{usr:s.state,key:s.key,idx:i}}function Od(s,i,o,d){return o===void 0&&(o=null),fs({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof i=="string"?Ui(i):i,{state:o,key:i&&i.key||d||_y()})}function Qo(s){let{pathname:i="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function Ui(s){let i={};if(s){let o=s.indexOf("#");o>=0&&(i.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(i.search=s.substr(d),s=s.substr(0,d)),s&&(i.pathname=s)}return i}function Ny(s,i,o,d){d===void 0&&(d={});let{window:u=document.defaultView,v5Compat:m=!1}=d,h=u.history,k=ci.Pop,y=null,v=j();v==null&&(v=0,h.replaceState(fs({},h.state,{idx:v}),""));function j(){return(h.state||{idx:null}).idx}function S(){k=ci.Pop;let M=j(),Q=M==null?null:M-v;v=M,y&&y({action:k,location:G.location,delta:Q})}function _(M,Q){k=ci.Push;let q=Od(G.location,M,Q);o&&o(q,M),v=j()+1;let D=df(q,v),I=G.createHref(q);try{h.pushState(D,"",I)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;u.location.assign(I)}m&&y&&y({action:k,location:G.location,delta:1})}function $(M,Q){k=ci.Replace;let q=Od(G.location,M,Q);o&&o(q,M),v=j();let D=df(q,v),I=G.createHref(q);h.replaceState(D,"",I),m&&y&&y({action:k,location:G.location,delta:0})}function W(M){let Q=u.location.origin!=="null"?u.location.origin:u.location.href,q=typeof M=="string"?M:Qo(M);return q=q.replace(/ $/,"%20"),Lt(Q,"No window.location.(origin|href) available to create URL for href: "+q),new URL(q,Q)}let G={get action(){return k},get location(){return s(u,h)},listen(M){if(y)throw new Error("A history only accepts one active listener");return u.addEventListener(cf,S),y=M,()=>{u.removeEventListener(cf,S),y=null}},createHref(M){return i(u,M)},createURL:W,encodeLocation(M){let Q=W(M);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:_,replace:$,go(M){return h.go(M)}};return G}var uf;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(uf||(uf={}));function Sy(s,i,o){return o===void 0&&(o="/"),ky(s,i,o)}function ky(s,i,o,d){let u=typeof i=="string"?Ui(i):i,m=Jd(u.pathname||"/",o);if(m==null)return null;let h=fx(s);Cy(h);let k=null;for(let y=0;k==null&&y<h.length;++y){let v=qy(m);k=Ry(h[y],v)}return k}function fx(s,i,o,d){i===void 0&&(i=[]),o===void 0&&(o=[]),d===void 0&&(d="");let u=(m,h,k)=>{let y={relativePath:k===void 0?m.path||"":k,caseSensitive:m.caseSensitive===!0,childrenIndex:h,route:m};y.relativePath.startsWith("/")&&(Lt(y.relativePath.startsWith(d),'Absolute route path "'+y.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),y.relativePath=y.relativePath.slice(d.length));let v=di([d,y.relativePath]),j=o.concat(y);m.children&&m.children.length>0&&(Lt(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),fx(m.children,i,j,v)),!(m.path==null&&!m.index)&&i.push({path:v,score:Oy(v,m.index),routesMeta:j})};return s.forEach((m,h)=>{var k;if(m.path===""||!((k=m.path)!=null&&k.includes("?")))u(m,h);else for(let y of xx(m.path))u(m,h,y)}),i}function xx(s){let i=s.split("/");if(i.length===0)return[];let[o,...d]=i,u=o.endsWith("?"),m=o.replace(/\?$/,"");if(d.length===0)return u?[m,""]:[m];let h=xx(d.join("/")),k=[];return k.push(...h.map(y=>y===""?m:[m,y].join("/"))),u&&k.push(...h),k.map(y=>s.startsWith("/")&&y===""?"/":y)}function Cy(s){s.sort((i,o)=>i.score!==o.score?o.score-i.score:Uy(i.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const zy=/^:[\w-]+$/,Ty=3,Ey=2,My=1,Dy=10,Ay=-2,pf=s=>s==="*";function Oy(s,i){let o=s.split("/"),d=o.length;return o.some(pf)&&(d+=Ay),i&&(d+=Ey),o.filter(u=>!pf(u)).reduce((u,m)=>u+(zy.test(m)?Ty:m===""?My:Dy),d)}function Uy(s,i){return s.length===i.length&&s.slice(0,-1).every((d,u)=>d===i[u])?s[s.length-1]-i[i.length-1]:0}function Ry(s,i,o){let{routesMeta:d}=s,u={},m="/",h=[];for(let k=0;k<d.length;++k){let y=d[k],v=k===d.length-1,j=m==="/"?i:i.slice(m.length)||"/",S=Hy({path:y.relativePath,caseSensitive:y.caseSensitive,end:v},j),_=y.route;if(!S)return null;Object.assign(u,S.params),h.push({params:u,pathname:di([m,S.pathname]),pathnameBase:Qy(di([m,S.pathnameBase])),route:_}),S.pathnameBase!=="/"&&(m=di([m,S.pathnameBase]))}return h}function Hy(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=Ly(s.path,s.caseSensitive,s.end),u=i.match(o);if(!u)return null;let m=u[0],h=m.replace(/(.)\/+$/,"$1"),k=u.slice(1);return{params:d.reduce((v,j,S)=>{let{paramName:_,isOptional:$}=j;if(_==="*"){let G=k[S]||"";h=m.slice(0,m.length-G.length).replace(/(.)\/+$/,"$1")}const W=k[S];return $&&!W?v[_]=void 0:v[_]=(W||"").replace(/%2F/g,"/"),v},{}),pathname:m,pathnameBase:h,pattern:s}}function Ly(s,i,o){i===void 0&&(i=!1),o===void 0&&(o=!0),er(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],u="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,k,y)=>(d.push({paramName:k,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),u+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":s!==""&&s!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),d]}function qy(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return er(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),s}}function Jd(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const By=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$y=s=>By.test(s);function Gy(s,i){i===void 0&&(i="/");let{pathname:o,search:d="",hash:u=""}=typeof s=="string"?Ui(s):s,m;if(o)if($y(o))m=o;else{if(o.includes("//")){let h=o;o=o.replace(/\/\/+/g,"/"),er(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+o))}o.startsWith("/")?m=mf(o.substring(1),"/"):m=mf(o,i)}else m=i;return{pathname:m,search:Xy(d),hash:Zy(u)}}function mf(s,i){let o=i.replace(/\/+$/,"").split("/");return s.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function xd(s,i,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yy(s){return s.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Vd(s,i){let o=Yy(s);return i?o.map((d,u)=>u===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function Pd(s,i,o,d){d===void 0&&(d=!1);let u;typeof s=="string"?u=Ui(s):(u=fs({},s),Lt(!u.pathname||!u.pathname.includes("?"),xd("?","pathname","search",u)),Lt(!u.pathname||!u.pathname.includes("#"),xd("#","pathname","hash",u)),Lt(!u.search||!u.search.includes("#"),xd("#","search","hash",u)));let m=s===""||u.pathname==="",h=m?"/":u.pathname,k;if(h==null)k=o;else{let S=i.length-1;if(!d&&h.startsWith("..")){let _=h.split("/");for(;_[0]==="..";)_.shift(),S-=1;u.pathname=_.join("/")}k=S>=0?i[S]:"/"}let y=Gy(u,k),v=h&&h!=="/"&&h.endsWith("/"),j=(m||h===".")&&o.endsWith("/");return!y.pathname.endsWith("/")&&(v||j)&&(y.pathname+="/"),y}const di=s=>s.join("/").replace(/\/\/+/g,"/"),Qy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Xy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Zy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Ky(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const gx=["post","put","patch","delete"];new Set(gx);const Fy=["get",...gx];new Set(Fy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xs(){return xs=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},xs.apply(this,arguments)}const Wd=f.createContext(null),Jy=f.createContext(null),mi=f.createContext(null),tr=f.createContext(null),hi=f.createContext({outlet:null,matches:[],isDataRoute:!1}),bx=f.createContext(null);function Vy(s,i){let{relative:o}=i===void 0?{}:i;yl()||Lt(!1);let{basename:d,navigator:u}=f.useContext(mi),{hash:m,pathname:h,search:k}=vx(s,{relative:o}),y=h;return d!=="/"&&(y=h==="/"?d:di([d,h])),u.createHref({pathname:y,search:k,hash:m})}function yl(){return f.useContext(tr)!=null}function ra(){return yl()||Lt(!1),f.useContext(tr).location}function yx(s){f.useContext(mi).static||f.useLayoutEffect(s)}function Id(){let{isDataRoute:s}=f.useContext(hi);return s?cv():Py()}function Py(){yl()||Lt(!1);let s=f.useContext(Wd),{basename:i,future:o,navigator:d}=f.useContext(mi),{matches:u}=f.useContext(hi),{pathname:m}=ra(),h=JSON.stringify(Vd(u,o.v7_relativeSplatPath)),k=f.useRef(!1);return yx(()=>{k.current=!0}),f.useCallback(function(v,j){if(j===void 0&&(j={}),!k.current)return;if(typeof v=="number"){d.go(v);return}let S=Pd(v,JSON.parse(h),m,j.relative==="path");s==null&&i!=="/"&&(S.pathname=S.pathname==="/"?i:di([i,S.pathname])),(j.replace?d.replace:d.push)(S,j.state,j)},[i,d,h,m,s])}function vx(s,i){let{relative:o}=i===void 0?{}:i,{future:d}=f.useContext(mi),{matches:u}=f.useContext(hi),{pathname:m}=ra(),h=JSON.stringify(Vd(u,d.v7_relativeSplatPath));return f.useMemo(()=>Pd(s,JSON.parse(h),m,o==="path"),[s,h,m,o])}function Wy(s,i){return Iy(s,i)}function Iy(s,i,o,d){yl()||Lt(!1);let{navigator:u}=f.useContext(mi),{matches:m}=f.useContext(hi),h=m[m.length-1],k=h?h.params:{};h&&h.pathname;let y=h?h.pathnameBase:"/";h&&h.route;let v=ra(),j;if(i){var S;let M=typeof i=="string"?Ui(i):i;y==="/"||(S=M.pathname)!=null&&S.startsWith(y)||Lt(!1),j=M}else j=v;let _=j.pathname||"/",$=_;if(y!=="/"){let M=y.replace(/^\//,"").split("/");$="/"+_.replace(/^\//,"").split("/").slice(M.length).join("/")}let W=Sy(s,{pathname:$}),G=iv(W&&W.map(M=>Object.assign({},M,{params:Object.assign({},k,M.params),pathname:di([y,u.encodeLocation?u.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:di([y,u.encodeLocation?u.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),m,o,d);return i&&G?f.createElement(tr.Provider,{value:{location:xs({pathname:"/",search:"",hash:"",state:null,key:"default"},j),navigationType:ci.Pop}},G):G}function ev(){let s=rv(),i=Ky(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},i),o?f.createElement("pre",{style:u},o):null,null)}const tv=f.createElement(ev,null);class nv extends f.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?f.createElement(hi.Provider,{value:this.props.routeContext},f.createElement(bx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function av(s){let{routeContext:i,match:o,children:d}=s,u=f.useContext(Wd);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),f.createElement(hi.Provider,{value:i},d)}function iv(s,i,o,d){var u;if(i===void 0&&(i=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var m;if(!o)return null;if(o.errors)s=o.matches;else if((m=d)!=null&&m.v7_partialHydration&&i.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let h=s,k=(u=o)==null?void 0:u.errors;if(k!=null){let j=h.findIndex(S=>S.route.id&&(k==null?void 0:k[S.route.id])!==void 0);j>=0||Lt(!1),h=h.slice(0,Math.min(h.length,j+1))}let y=!1,v=-1;if(o&&d&&d.v7_partialHydration)for(let j=0;j<h.length;j++){let S=h[j];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(v=j),S.route.id){let{loaderData:_,errors:$}=o,W=S.route.loader&&_[S.route.id]===void 0&&(!$||$[S.route.id]===void 0);if(S.route.lazy||W){y=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}return h.reduceRight((j,S,_)=>{let $,W=!1,G=null,M=null;o&&($=k&&S.route.id?k[S.route.id]:void 0,G=S.route.errorElement||tv,y&&(v<0&&_===0?(dv("route-fallback"),W=!0,M=null):v===_&&(W=!0,M=S.route.hydrateFallbackElement||null)));let Q=i.concat(h.slice(0,_+1)),q=()=>{let D;return $?D=G:W?D=M:S.route.Component?D=f.createElement(S.route.Component,null):S.route.element?D=S.route.element:D=j,f.createElement(av,{match:S,routeContext:{outlet:j,matches:Q,isDataRoute:o!=null},children:D})};return o&&(S.route.ErrorBoundary||S.route.errorElement||_===0)?f.createElement(nv,{location:o.location,revalidation:o.revalidation,component:G,error:$,children:q(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):q()},null)}var jx=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(jx||{}),wx=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(wx||{});function lv(s){let i=f.useContext(Wd);return i||Lt(!1),i}function sv(s){let i=f.useContext(Jy);return i||Lt(!1),i}function ov(s){let i=f.useContext(hi);return i||Lt(!1),i}function _x(s){let i=ov(),o=i.matches[i.matches.length-1];return o.route.id||Lt(!1),o.route.id}function rv(){var s;let i=f.useContext(bx),o=sv(),d=_x();return i!==void 0?i:(s=o.errors)==null?void 0:s[d]}function cv(){let{router:s}=lv(jx.UseNavigateStable),i=_x(wx.UseNavigateStable),o=f.useRef(!1);return yx(()=>{o.current=!0}),f.useCallback(function(u,m){m===void 0&&(m={}),o.current&&(typeof u=="number"?s.navigate(u):s.navigate(u,xs({fromRouteId:i},m)))},[s,i])}const hf={};function dv(s,i,o){hf[s]||(hf[s]=!0)}function uv(s,i){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function ff(s){let{to:i,replace:o,state:d,relative:u}=s;yl()||Lt(!1);let{future:m,static:h}=f.useContext(mi),{matches:k}=f.useContext(hi),{pathname:y}=ra(),v=Id(),j=Pd(i,Vd(k,m.v7_relativeSplatPath),y,u==="path"),S=JSON.stringify(j);return f.useEffect(()=>v(JSON.parse(S),{replace:o,state:d,relative:u}),[v,S,u,o,d]),null}function Tt(s){Lt(!1)}function pv(s){let{basename:i="/",children:o=null,location:d,navigationType:u=ci.Pop,navigator:m,static:h=!1,future:k}=s;yl()&&Lt(!1);let y=i.replace(/^\/*/,"/"),v=f.useMemo(()=>({basename:y,navigator:m,static:h,future:xs({v7_relativeSplatPath:!1},k)}),[y,k,m,h]);typeof d=="string"&&(d=Ui(d));let{pathname:j="/",search:S="",hash:_="",state:$=null,key:W="default"}=d,G=f.useMemo(()=>{let M=Jd(j,y);return M==null?null:{location:{pathname:M,search:S,hash:_,state:$,key:W},navigationType:u}},[y,j,S,_,$,W,u]);return G==null?null:f.createElement(mi.Provider,{value:v},f.createElement(tr.Provider,{children:o,value:G}))}function mv(s){let{children:i,location:o}=s;return Wy(Ud(i),o)}new Promise(()=>{});function Ud(s,i){i===void 0&&(i=[]);let o=[];return f.Children.forEach(s,(d,u)=>{if(!f.isValidElement(d))return;let m=[...i,u];if(d.type===f.Fragment){o.push.apply(o,Ud(d.props.children,m));return}d.type!==Tt&&Lt(!1),!d.props.index||!d.props.children||Lt(!1);let h={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(h.children=Ud(d.props.children,m)),o.push(h)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rd(){return Rd=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},Rd.apply(this,arguments)}function hv(s,i){if(s==null)return{};var o={},d=Object.keys(s),u,m;for(m=0;m<d.length;m++)u=d[m],!(i.indexOf(u)>=0)&&(o[u]=s[u]);return o}function fv(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function xv(s,i){return s.button===0&&(!i||i==="_self")&&!fv(s)}const gv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bv="6";try{window.__reactRouterVersion=bv}catch{}const yv="startTransition",xf=fy[yv];function vv(s){let{basename:i,children:o,future:d,window:u}=s,m=f.useRef();m.current==null&&(m.current=wy({window:u,v5Compat:!0}));let h=m.current,[k,y]=f.useState({action:h.action,location:h.location}),{v7_startTransition:v}=d||{},j=f.useCallback(S=>{v&&xf?xf(()=>y(S)):y(S)},[y,v]);return f.useLayoutEffect(()=>h.listen(j),[h,j]),f.useEffect(()=>uv(d),[d]),f.createElement(pv,{basename:i,children:o,location:k.location,navigationType:k.action,navigator:h,future:d})}const jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_v=f.forwardRef(function(i,o){let{onClick:d,relative:u,reloadDocument:m,replace:h,state:k,target:y,to:v,preventScrollReset:j,viewTransition:S}=i,_=hv(i,gv),{basename:$}=f.useContext(mi),W,G=!1;if(typeof v=="string"&&wv.test(v)&&(W=v,jv))try{let D=new URL(window.location.href),I=v.startsWith("//")?new URL(D.protocol+v):new URL(v),te=Jd(I.pathname,$);I.origin===D.origin&&te!=null?v=te+I.search+I.hash:G=!0}catch{}let M=Vy(v,{relative:u}),Q=Nv(v,{replace:h,state:k,target:y,preventScrollReset:j,relative:u,viewTransition:S});function q(D){d&&d(D),D.defaultPrevented||Q(D)}return f.createElement("a",Rd({},_,{href:W||M,onClick:G||m?d:q,ref:o,target:y}))});var gf;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(gf||(gf={}));var bf;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(bf||(bf={}));function Nv(s,i){let{target:o,replace:d,state:u,preventScrollReset:m,relative:h,viewTransition:k}=i===void 0?{}:i,y=Id(),v=ra(),j=vx(s,{relative:h});return f.useCallback(S=>{if(xv(S,o)){S.preventDefault();let _=d!==void 0?d:Qo(v)===Qo(j);y(s,{replace:_,state:u,preventScrollReset:m,relative:h,viewTransition:k})}},[v,y,j,d,u,o,s,m,h,k])}function qt(){const s=Id();return f.useMemo(()=>({push:i=>s(i),replace:i=>s(i,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function Sv(){return ra().pathname}function kv({href:s,...i}){return t.jsx(_v,{to:s,...i})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nx=(...s)=>s.filter((i,o,d)=>!!i&&i.trim()!==""&&d.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=f.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:u="",children:m,iconNode:h,...k},y)=>f.createElement("svg",{ref:y,...zv,width:i,height:i,stroke:s,strokeWidth:d?Number(o)*24/Number(i):o,className:Nx("lucide",u),...k},[...h.map(([v,j])=>f.createElement(v,j)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=(s,i)=>{const o=f.forwardRef(({className:d,...u},m)=>f.createElement(Tv,{ref:m,iconNode:i,className:Nx(`lucide-${Cv(s)}`,d),...u}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=Ne("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=Ne("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=Ne("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=Ne("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=Ne("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=Ne("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=Ne("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=Ne("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=Ne("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=Ne("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=Ne("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=Ne("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=Ne("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=Ne("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=Ne("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=Ne("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=Ne("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=Ne("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=Ne("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=Ne("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=Ne("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=Ne("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=Ne("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=Ne("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=Ne("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=Ne("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=Ne("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=Ne("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=Ne("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=Ne("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=Ne("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=Ne("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=Ne("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=Ne("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=Ne("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=Ne("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=Ne("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=Ne("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=Ne("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=Ne("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=Ne("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=Ne("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=Ne("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=Ne("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=Ne("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=Ne("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=Ne("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=Ne("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=Ne("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=Ne("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=Ne("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=Ne("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=Ne("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=Ne("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=Ne("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=Ne("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=Ne("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=Ne("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=Ne("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=Ne("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=Ne("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=Ne("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=Ne("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=Ne("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=Ne("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=Ne("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=Ne("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=Ne("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=Ne("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=Ne("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=Ne("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=Ne("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=Ne("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=Ne("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=Ne("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=Ne("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=Ne("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=Ne("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=Ne("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),f0="/api/v3";var px;const je=typeof window<"u"&&((px=window.settings)==null?void 0:px.secure_path)||"ZicFree123",Yo="authorization";function x0(s){if(typeof window>"u"||typeof document>"u")return null;const i=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let u=o[d];for(;u.charAt(0)===" ";)u=u.substring(1,u.length);if(u.indexOf(i)===0)try{const m=u.substring(i.length,u.length),h=decodeURIComponent(m),k=JSON.parse(h);return k&&typeof k=="object"&&"value"in k?k.value:h}catch{try{return decodeURIComponent(u.substring(i.length,u.length))}catch{return u.substring(i.length,u.length)}}}return null}function g0(s,i,o=36500){if(typeof window>"u"||typeof document>"u")return;const u=JSON.stringify({site:"ZicNet",value:i}),m=window.location.protocol==="https:",h=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",k=new Date;k.setTime(k.getTime()+o*24*60*60*1e3);const y=`expires=${k.toUTCString()}`,v=h?"":`domain=${window.location.hostname};`;let j=`${s}=${encodeURIComponent(u)}; ${y}; ${v} path=/`;m&&(j+="; secure"),j+="; SameSite=Lax",document.cookie=j;try{window.localStorage.setItem(`cookie_${s}`,u)}catch{}}function b0(s){if(typeof window>"u"||typeof document>"u")return;const i=window.location.hostname,o=["",i,i.startsWith(".")?i:`.${i}`],d=["/","/dashboard","/user","/admin"];o.forEach(u=>{d.forEach(m=>{const h=u?` domain=${u};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${h} path=${m};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function Ex(){if(typeof window>"u")return null;let s=window.localStorage.getItem(Yo);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(Yo,s)}catch{}if(!s&&(s=x0("auth_data"),s))try{window.localStorage.setItem(Yo,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function y0(s,i){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${f0}${o}`,window.location.origin);return Object.entries(i??{}).forEach(([u,m])=>{m!==void 0&&d.searchParams.set(u,String(m))}),d.toString()}function Bt(){return!!Ex()}function v0(s){typeof window>"u"||(window.localStorage.setItem(Yo,s),window.localStorage.setItem("auth_data",s),g0("auth_data",s,36500))}function Mx(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(u=>{window.localStorage.removeItem(u)}),["token","auth_data","authorization","vuex","user","auth"].forEach(u=>{window.sessionStorage.removeItem(u)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(u=>{o.forEach(m=>{document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${m};`}),document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,b0(u)})}async function ye(s,i={}){const o={},d=i.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),i.auth!==!1){const y=Ex();y&&(o.authorization=y)}const u=await fetch(y0(s,i.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(i.body??{}),cache:"no-store"}),h=(u.headers.get("content-type")||"").includes("application/json"),k=h?await u.json():await u.text();if(!u.ok){const y=typeof k=="object"&&k&&"message"in k?String(k.message):`Request failed with status ${u.status}`,v=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(y);throw(u.status===401||u.status===403&&!v)&&i.auth!==!1&&(Mx(),window.location.hash="/login"),new Error(y)}if(!h&&typeof k=="string"&&(k.trim().startsWith("<!DOCTYPE html")||k.trim().startsWith("<html")||k.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return k}async function j0(s,i){return ye("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:i}})}async function w0(){const s=`/${je}/stat`,[i,o]=await Promise.all([ye(`${s}/getOverride`),ye(`${s}/getOrder`)]);return{override:i.data,order:o.data}}async function _0(s){return(await ye(`/${je}/stat/getUserBandwidthSeries`,{params:{range:s}})).data}async function N0(s){return(await ye(`/${je}/stat/getServerBandwidthSeries`,{params:{range:s}})).data}async function S0(s){return(await ye(`/${je}/stat/getOnlineUserSeries`,{params:{range:s}})).data}async function k0(s,i=10){return(await ye(`/${je}/stat/getCollaboratorCommissionRank`,{params:{range:s,limit:i}})).data}async function Dx(){return(await ye(`/${je}/config/fetch`)).data}async function Ax(s){return ye(`/${je}/config/save`,{method:"POST",body:s})}async function C0(){return(await ye(`/${je}/config/getEmailTemplate`)).data}async function z0(){return(await ye(`/${je}/plan/fetch`)).data.map(i=>({id:i.id,name:i.name}))}async function T0(){return ye(`/${je}/config/testSendMail`,{method:"POST",body:{}})}async function E0(s){return ye(`/${je}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function M0(){return(await ye(`/${je}/payment/fetch`)).data}async function D0(){return(await ye(`/${je}/payment/getPaymentMethods`)).data}async function Cf(s,i){return(await ye(`/${je}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:i}})).data}async function A0(s){return ye(`/${je}/payment/save`,{method:"POST",body:s})}async function O0(s){return ye(`/${je}/payment/show`,{method:"POST",body:{id:s}})}async function U0(s){return ye(`/${je}/payment/drop`,{method:"POST",body:{id:s}})}async function R0(s){return ye(`/${je}/payment/sort`,{method:"POST",body:{ids:s}})}async function H0(){return(await ye(`/${je}/theme/getThemes`)).data}async function L0(s){return(await ye(`/${je}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function q0(s,i){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(i))));return ye(`/${je}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function bl(){return(await ye(`/${je}/server/group/fetch`)).data}async function nu(s){return ye(`/${je}/server/group/save`,{method:"POST",body:s})}async function B0(s){return ye(`/${je}/server/group/drop`,{method:"POST",body:{id:s}})}const Ox=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function Ux(){return(await ye(`/${je}/server/route/fetch`)).data}async function $0(s){return ye(`/${je}/server/route/save`,{method:"POST",body:s})}async function G0(s){return ye(`/${je}/server/route/drop`,{method:"POST",body:{id:s}})}async function fi(){return(await ye(`/${je}/plan/fetch`)).data}async function Y0(s){return ye(`/${je}/plan/save`,{method:"POST",body:s})}async function Q0(s){return ye(`/${je}/plan/drop`,{method:"POST",body:{id:s}})}async function gd(s,i){return ye(`/${je}/plan/update`,{method:"POST",body:{id:s,...i}})}async function zf(s){return ye(`/${je}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function X0(s={}){const i=new URLSearchParams;return i.set("current",String(s.current??1)),i.set("pageSize",String(s.pageSize??15)),s.is_commission&&i.set("is_commission","1"),s.filter&&s.filter.forEach((d,u)=>{i.set(`filter[${u}][key]`,d.key),i.set(`filter[${u}][condition]`,d.condition),i.set(`filter[${u}][value]`,d.value)}),await ye(`/${je}/order/fetch?${i.toString()}`)}async function Z0(s){return ye(`/${je}/order/paid`,{method:"POST",body:{trade_no:s}})}async function K0(s){return ye(`/${je}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function au(s){return ye(`/${je}/order/assign`,{method:"POST",body:s})}async function F0(s,i){return ye(`/${je}/order/update`,{method:"POST",body:{trade_no:s,commission_status:i}})}async function J0(s){return ye(`/${je}/order/detail`,{method:"POST",body:{id:s}})}async function Rx(s=1,i=15){return ye(`/${je}/coupon/fetch?current=${s}&pageSize=${i}`)}async function V0(s){return ye(`/${je}/coupon/generate`,{method:"POST",body:s})}async function P0(s){return ye(`/${je}/coupon/drop`,{method:"POST",body:{id:s}})}async function W0(s){return ye(`/${je}/coupon/show`,{method:"POST",body:{id:s}})}async function I0(s=1,i=15){return ye(`/${je}/giftcard/fetch?current=${s}&pageSize=${i}`)}async function e1(s){return ye(`/${je}/giftcard/generate`,{method:"POST",body:s})}async function t1(s){return ye(`/${je}/giftcard/drop`,{method:"POST",body:{id:s}})}async function Gd(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o&&o.forEach((u,m)=>{d.set(`filter[${m}][key]`,u.key),d.set(`filter[${m}][condition]`,u.condition),d.set(`filter[${m}][value]`,u.value)}),ye(`/${je}/user/fetch?${d.toString()}`)}async function n1(s){return ye(`/${je}/user/update`,{method:"POST",body:s})}async function Yd(s){return ye(`/${je}/user/getUserInfoById`,{params:{id:s}})}async function a1(s){return ye(`/${je}/user/delUser`,{method:"POST",body:{id:s}})}async function i1(s){return ye(`/${je}/user/generate`,{method:"POST",body:s})}async function l1(s){return ye(`/${je}/user/resetSecret`,{method:"POST",body:{id:s}})}async function s1(s=1,i=15,o,d=!1){const u=new URLSearchParams;return u.set("current",String(s)),u.set("pageSize",String(i)),d&&u.set("include_subscribe_url","1"),o==null||o.forEach((m,h)=>{u.set(`filter[${h}][key]`,m.key),u.set(`filter[${h}][condition]`,m.condition),u.set(`filter[${h}][value]`,m.value)}),ye(`/${je}/subscription/fetch?${u.toString()}`)}async function o1(s){return ye(`/${je}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function r1(s){return ye(`/${je}/subscription/update`,{method:"POST",body:s})}async function c1(s){return ye(`/${je}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function Hx(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o==null||o.forEach((u,m)=>{d.set(`filter[${m}][key]`,u.key),d.set(`filter[${m}][condition]`,u.condition),d.set(`filter[${m}][value]`,u.value)}),ye(`/${je}/device/fetch?${d.toString()}`)}async function Lx(s){return ye(`/${je}/device/drop`,{method:"POST",body:{id:s}})}async function qx(s){return ye(`/${je}/device/ban`,{method:"POST",body:{id:s}})}async function d1(s){return ye(`/${je}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function u1(s,i=1,o=10){return ye(`/${je}/stat/getStatUser`,{params:{user_id:s,current:i,pageSize:o}})}async function p1(){return(await ye(`/${je}/notice/fetch`)).data}async function m1(s){return ye(`/${je}/notice/save`,{method:"POST",body:s})}async function h1(s){return ye(`/${je}/notice/drop`,{method:"POST",body:{id:s}})}async function f1(s){return ye(`/${je}/notice/show`,{method:"POST",body:{id:s}})}async function x1(){return(await ye(`/${je}/ticket/fetch`)).data}async function bd(s){return(await ye(`/${je}/ticket/fetch`,{params:{id:s}})).data}async function g1(s,i){return ye(`/${je}/ticket/reply`,{method:"POST",body:{id:s,message:i}})}async function b1(s){return ye(`/${je}/ticket/close`,{method:"POST",body:{id:s}})}async function y1(s){return ye(`/${je}/ticket/confirmCommission`,{method:"POST",body:{id:s}})}async function v1(){return(await ye(`/${je}/knowledge/fetch`)).data}async function j1(s){return(await ye(`/${je}/knowledge/fetch`,{params:{id:s}})).data}async function w1(s){return ye(`/${je}/knowledge/save`,{method:"POST",body:s})}async function _1(s){return ye(`/${je}/knowledge/drop`,{method:"POST",body:{id:s}})}async function N1(s){return ye(`/${je}/knowledge/show`,{method:"POST",body:{id:s}})}async function S1(){return(await ye(`/${je}/webcon/fetch`)).data}async function k1(s){return ye(`/${je}/webcon/save`,{method:"POST",body:s})}async function C1(s){return ye(`/${je}/webcon/drop`,{method:"POST",body:{id:s}})}async function z1(s){return ye(`/${je}/webcon/show`,{method:"POST",body:{id:s}})}async function T1(){return ye(`/${je}/system/getSystemStatus`)}async function E1(){return(await ye(`/${je}/system/getCoreLicenseStatus`)).data}async function M1(){return(await ye(`/${je}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function D1(){return ye(`/${je}/system/getQueueStats`)}async function A1(){return ye(`/${je}/system/getQueueWorkload`)}async function O1(){return ye(`/${je}/system/getSystemLog`)}async function Tf(){return ye(`/${je}/server/manage/getNodes`)}async function U1(s,i){return ye(`/${je}/server/${s}/save`,{method:"POST",body:i})}async function R1(s,i){return ye(`/${je}/server/${s}/drop`,{method:"POST",body:{id:i}})}async function H1(s,i,o){return ye(`/${je}/server/${s}/update`,{method:"POST",body:{id:i,show:o}})}async function L1(s,i){return ye(`/${je}/server/${s}/copy`,{method:"POST",body:{id:i}})}async function q1(s){return ye(`/${je}/server/manage/sort`,{method:"POST",body:s})}const iu=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],Bx="admin-locale",Qd="vi-VN",B1="/assets/adminzic",$x=f.createContext(null);function $1(){if(typeof window>"u")return Qd;const s=localStorage.getItem(Bx);return s&&iu.some(i=>i.code===s)?s:Qd}function G1(s,i){return i?Object.entries(i).reduce((o,[d,u])=>o.replaceAll(`{${d}}`,String(u)),s):s}function Y1(s){return new Promise((i,o)=>{var h;if(typeof window>"u"){i({});return}const d=(h=window.AdminNextI18n)==null?void 0:h[s];if(d){i(d);return}const u=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(u){u.addEventListener("load",()=>{var k;i(((k=window.AdminNextI18n)==null?void 0:k[s])??{})}),u.addEventListener("error",o);return}const m=document.createElement("script");m.src=`${B1}/i18n/${s}.js`,m.async=!0,m.dataset.adminNextLocale=s,m.onload=()=>{var k;return i(((k=window.AdminNextI18n)==null?void 0:k[s])??{})},m.onerror=o,document.head.appendChild(m)})}function Q1({children:s}){const[i,o]=f.useState(Qd),[d,u]=f.useState({}),[m,h]=f.useState(!0);f.useEffect(()=>{o($1())},[]);const k=f.useCallback(j=>{o(j),typeof window<"u"&&localStorage.setItem(Bx,j)},[]);f.useEffect(()=>{let j=!0;return h(!0),Y1(i).then(S=>{j&&u(S)}).finally(()=>{j&&h(!1)}),()=>{j=!1}},[i]);const y=f.useCallback((j,S)=>G1(d[j]??j,S),[d]),v=f.useMemo(()=>({locale:i,loading:m,setLocale:k,t:y}),[i,m,k,y]);return t.jsx($x.Provider,{value:v,children:s})}function Qe(){const s=f.useContext($x);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function X1(){const s=qt(),{t:i,locale:o,setLocale:d}=Qe(),[u,m]=f.useState(""),[h,k]=f.useState(""),[y,v]=f.useState(""),[j,S]=f.useState(!1),[_,$]=f.useState(!1),W=f.useRef(null);f.useEffect(()=>{function M(Q){W.current&&!W.current.contains(Q.target)&&$(!1)}return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]),f.useEffect(()=>{Bt()&&s.replace("/dashboard")},[s]);async function G(M){var Q,q,D,I;M.preventDefault(),v(""),S(!0);try{const te=await j0(u,h),ie=((Q=te.data)==null?void 0:Q.auth_data)??((q=te.data)==null?void 0:q.token),T=((D=te.data)==null?void 0:D.is_admin)===1||((I=te.data)==null?void 0:I.is_admin)===!0;if(!ie||!T)throw new Error(i("login.adminRequired"));v0(ie),s.replace("/dashboard")}catch(te){v(te instanceof Error?te.message:i("login.failed"))}finally{S(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:i("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:i("login.eyebrow")}),t.jsx("h1",{children:i("login.heading")}),t.jsx("span",{children:i("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":i("login.formLabel"),children:[t.jsxs("div",{ref:W,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.language"),onClick:()=>$(M=>!M),children:t.jsx(ys,{size:17})}),_?t.jsx("div",{className:"locale-menu",children:iu.map(M=>t.jsxs("button",{className:`locale-option ${o===M.code?"active":""}`,type:"button",onClick:()=>{d(M.code),$(!1)},children:[t.jsx("span",{className:"locale-flag",children:M.flag}),t.jsx("span",{children:M.label})]},M.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(i0,{size:18}),t.jsx("span",{children:i("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:i("login.title")}),t.jsx("p",{children:i("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:G,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(kx,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:M=>m(M.target.value),placeholder:i("login.emailPlaceholder"),required:!0,type:"text",value:u})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Jv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:M=>k(M.target.value),placeholder:i("login.passwordPlaceholder"),required:!0,type:"password",value:h})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,t.jsx("button",{className:"primary-button",disabled:j,type:"submit",children:i(j?"login.signingIn":"login.submit")})]})]})]})}function cn(s){const i=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(i)}function An(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}const Z1=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:Yv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:o0},{href:"/config/payment",label:"nav.paymentConfig",icon:Lv},{href:"/config/theme",label:"nav.themeConfig",icon:u0}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:tu},{href:"/server/group",label:"nav.groupManagement",icon:m0},{href:"/server/route",label:"nav.routeManagement",icon:s0}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:Nf},{href:"/order",label:"nav.orders",icon:Fv},{href:"/coupon",label:"nav.coupons",icon:Qv},{href:"/giftcard",label:"nav.giftcards",icon:c0}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:Tx},{href:"/subscription",label:"nav.subscriptions",icon:Nf},{href:"/device",label:"nav.devices",icon:r0},{href:"/webcon",label:"nav.webcon",icon:ys},{href:"/notice",label:"nav.notices",icon:us},{href:"/ticket",label:"nav.tickets",icon:Kv},{href:"/knowledge",label:"nav.knowledge",icon:Dv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:Av}]}];function K1(){const[s,i]=f.useState("light");f.useEffect(()=>{const m=localStorage.getItem("admin-theme")??"light";i(m),document.documentElement.setAttribute("data-theme",m)},[]);const o=f.useCallback(u=>{i(u),localStorage.setItem("admin-theme",u),document.documentElement.setAttribute("data-theme",u)},[]),d=f.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function Gx(s){return s?new Date(s*1e3):null}function F1(s,i){const o=Gx(i);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function J1(s){const i=Gx(s);return i?Math.ceil((i.getTime()-Date.now())/864e5):null}function Vt({children:s,title:i,subtitle:o}){const[d,u]=f.useState(!1),m=qt(),h=Sv(),{t:k,locale:y,setLocale:v}=Qe(),{theme:j,toggle:S}=K1(),[_,$]=f.useState(!1),W=f.useRef(null),[G,M]=f.useState(null),[Q,q]=f.useState(!1),D=f.useCallback(async(g=!1)=>{if(Bt()){q(g);try{M(g?await M1():await E1())}catch(L){M({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:k("license.unavailable"),error:L instanceof Error?L.message:k("license.unavailable")})}finally{q(!1)}}},[k]);f.useEffect(()=>{function g(L){W.current&&!W.current.contains(L.target)&&$(!1)}return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),f.useEffect(()=>{D(!1);const g=window.setInterval(()=>{D(!1)},6e4);return()=>window.clearInterval(g)},[D]);function I(){Mx(),m.replace("/login")}const te=(G==null?void 0:G.license_expires_at)??(G==null?void 0:G.expires_at),ie=F1(y,te),T=typeof(G==null?void 0:G.days_until_expiry)=="number"?G.days_until_expiry:J1(te),K=typeof T=="number"?T<=0?k("license.expiresToday"):k("license.daysLeft",{days:T}):null,ne=!!G&&G.available&&!G.requires_renewal,ge=ne&&!!(G!=null&&G.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>u(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:k("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:Z1.map(g=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:k(g.label)}),g.items.map(L=>{const re=L.icon,Y=h===L.href;return t.jsxs(kv,{className:`nav-item ${Y?"active":""}`,href:L.href,onClick:()=>u(!1),children:[t.jsx(re,{size:17}),t.jsx("span",{children:k(L.label)})]},L.href)})]},g.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":k(d?"common.closeMenu":"common.openMenu"),onClick:()=>u(g=>!g),children:d?t.jsx(lt,{size:19}):t.jsx(Pv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:i}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[ne?t.jsxs("button",{className:`license-chip ${ge?"warning":""}`,type:"button",disabled:Q,title:k("license.refresh"),onClick:()=>void D(!0),children:[t.jsx(jf,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:k("license.validUntil")}),t.jsx("strong",{children:ie??k("license.unknownExpiry")})]}),K?t.jsx("small",{children:K}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:W,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":k("common.language"),onClick:()=>$(g=>!g),children:t.jsx(ys,{size:17})}),_?t.jsx("div",{className:"locale-menu",children:iu.map(g=>t.jsxs("button",{className:`locale-option ${y===g.code?"active":""}`,type:"button",onClick:()=>{v(g.code),$(!1)},children:[t.jsx("span",{className:"locale-flag",children:g.flag}),t.jsx("span",{children:g.label})]},g.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":j==="dark"?"Switch to light mode":"Switch to dark mode",onClick:S,children:j==="dark"?t.jsx(d0,{size:17}):t.jsx(Wv,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,children:[t.jsx(Vv,{size:16}),t.jsx("span",{children:k("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[G!=null&&G.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(Bd,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:k("license.renewTitle")}),t.jsx("p",{children:k("license.renewBody")}),t.jsxs("small",{children:[k("license.currentStatus"),": ",G.status,G.error?` - ${G.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void D(!0),children:[t.jsx(At,{size:16}),k(Q?"license.refreshing":"license.refresh")]})]}):null,ge?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(jf,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:k("license.expiryWarningTitle")}),t.jsx("p",{children:k("license.expiryWarningBody",{date:ie??k("license.unknownExpiry"),days:T??""})}),t.jsxs("small",{children:[k("license.currentStatus"),": ",G.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void D(!0),children:[t.jsx(At,{size:16}),k(Q?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const Ef=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function Yx(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function ps(s){return Number(s??0)}function Mf(s){return ps(s)/100}function Df(s){return`${An(Math.round(s))} VND`}function V1(s){const i=["B","KB","MB","GB","TB","PB"];let o=Math.max(0,Number(s||0)),d=0;for(;o>=1024&&d<i.length-1;)o/=1024,d+=1;return`${new Intl.NumberFormat("en-US",{maximumFractionDigits:o>=10||d===0?0:1}).format(o)} ${i[d]}`}function Qx(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function P1(s){const i=new Date;return i.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const u=new Date(i);return u.setDate(i.getDate()-(s-d-1)),Qx(u)})}function Af(s,i){const o=s.get(i);if(o)return o;const d=Yx(i);return s.set(i,d),d}function W1(s){const i=s.toLowerCase();return i==="register_count"||i.includes("đăng")||i.includes("register")?"registrations":i==="order_count"?"orderCount":i==="paid_count"||i.includes("giao dịch thu")?"paidCount":i==="paid_total"||i.includes("tiền thu")?"paidAmount":i==="commission_count"||i.includes("giao dịch hoa hồng")?"commissionCount":i==="commission_total"||i.includes("tiền hoa hồng")?"commissionAmount":null}function Oo({label:s,value:i,helper:o,tone:d="default",onClick:u}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:u,style:u?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:i})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(Mv,{size:19})}),o?t.jsx("small",{children:o}):null]})}function bt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(At,{size:18}),t.jsx("span",{children:s})]})}function I1(s,i){const o=new Map,d=new Map;if(s.forEach(u=>{const m=Af(o,u.date),h=W1(u.type);if(h){m[h]=Number(u.value||0);return}const k=d.get(u.date)??0,y=Ef[k%Ef.length];m[y]=Number(u.value||0),d.set(u.date,k+1)}),i){const u=Af(o,Qx(new Date));u.registrations=ps(i.day_register_total),i.day_order_total!==void 0&&(u.orderCount=ps(i.day_order_total)),i.day_paid_order_total!==void 0&&(u.paidCount=ps(i.day_paid_order_total)),u.paidAmount=Mf(i.day_paid_income??i.day_income),i.day_commission_payout!==void 0&&(u.commissionAmount=Mf(i.day_commission_payout)),i.day_commission_count!==void 0&&(u.commissionCount=ps(i.day_commission_count))}return o.size===0?[]:P1(31).map(u=>o.get(u)??Yx(u))}function ej({records:s,override:i}){const{t:o}=Qe(),[d,u]=f.useState(["paidAmount","orderCount","paidCount","commissionAmount","commissionCount","registrations"]),[m,h]=f.useState(null),k=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#14b8a6",unit:"money",format:Df},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#60a5fa",unit:"count",format:An},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#a78bfa",unit:"count",format:An},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#f97316",unit:"money",format:Df},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#fb7185",unit:"count",format:An},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#22c55e",unit:"count",format:An}],y=I1(s,i),v=k.filter(x=>d.includes(x.key)),j=v.filter(x=>x.unit==="money"),S=v.filter(x=>x.unit==="count"),_=Math.max(1,...j.flatMap(x=>y.map(A=>Number(A[x.key]||0)))),$=Math.max(1,...S.flatMap(x=>y.map(A=>Number(A[x.key]||0)))),W=920,G=300,M=8,Q=22,D=G-Q-28,I=y.length>1?(W-M*2)/(y.length-1):0,te=Math.max(Math.ceil(y.length/7),1),ie=m===null?null:y[m]??null,T=x=>({"--metric-color":x.color}),K=(x,A)=>Number(x[A.key]||0),ne=x=>x.unit==="money"?_:$,ge=x=>M+x*I,g=m===null?50:Math.min(88,Math.max(12,ge(m)/W*100)),L=(x,A)=>Q+D-x/ne(A)*D,re=x=>Math.max(0,...y.map(A=>K(A,x))),Y=x=>{const A=y.map((C,de)=>({x:ge(de),y:L(K(C,x),x)}));return A.length?A.length===1?`M ${A[0].x} ${A[0].y}`:A.slice(1).reduce((C,de,ae)=>{const z=A[ae],R=(z.x+de.x)/2;return`${C} C ${R} ${z.y}, ${R} ${de.y}, ${de.x} ${de.y}`},`M ${A[0].x} ${A[0].y}`):""};function me(x){u(A=>A.includes(x)?A.length===1?A:A.filter(C=>C!==x):[...A,x]),h(null)}return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading chart-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:y.length})})]}),t.jsx("div",{className:"chart-legend",role:"group","aria-label":o("dashboard.chartMetrics"),children:k.map(x=>{const A=d.includes(x.key);return t.jsxs("button",{type:"button",className:`chart-legend-toggle ${A?"active":""}`,style:T(x),onClick:()=>me(x.key),"aria-pressed":A,children:[t.jsx("span",{className:"chart-legend-swatch"}),t.jsx("span",{children:x.label})]},x.key)})}),y.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"chart-frame",onMouseLeave:()=>h(null),children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${W} ${G}`,preserveAspectRatio:"none",role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:"dashboardChartBackdrop",x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:"currentColor",stopOpacity:"0.05"}),t.jsx("stop",{offset:"100%",stopColor:"currentColor",stopOpacity:"0"})]})}),t.jsx("rect",{className:"chart-plot-bg",x:M,y:Q,width:W-M*2,height:D,rx:"14"}),[0,.25,.5,.75,1].map(x=>t.jsx("line",{className:"chart-grid",x1:M,x2:W-M,y1:Q+x*D,y2:Q+x*D},x)),m!==null?t.jsx("line",{className:"chart-hover-line",x1:ge(m),x2:ge(m),y1:Q,y2:Q+D}):null,v.map(x=>t.jsx("path",{className:"chart-series-line",d:Y(x),style:T(x)},x.key)),m!==null?v.map(x=>t.jsx("circle",{className:"chart-series-dot",cx:ge(m),cy:L(K(y[m],x),x),r:"5",style:T(x)},`${x.key}-${m}`)):null,y.map((x,A)=>{const C=y.length>1?I:W-M*2;return t.jsx("rect",{className:"chart-hover-zone",x:ge(A)-C/2,y:Q,width:C,height:D,onMouseEnter:()=>h(A),onFocus:()=>h(A),onClick:()=>h(A),tabIndex:0},x.date)})]}),ie?t.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${g}%`},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",ie.date]}),t.jsx("div",{className:"tooltip-series-list",children:v.map(x=>t.jsxs("div",{className:"tooltip-series-row",style:T(x),children:[t.jsx("span",{className:"tooltip-dot"}),t.jsx("span",{children:x.label}),t.jsx("strong",{children:x.format(K(ie,x))})]},x.key))})]}):null]}),t.jsx("div",{className:"chart-axis",children:y.filter((x,A)=>A===0||A===y.length-1||A%te===0).map(x=>t.jsx("span",{children:x.date},x.date))}),t.jsx("div",{className:"chart-insights",children:v.map(x=>t.jsxs("div",{className:"chart-insight",style:T(x),children:[t.jsx("span",{className:"chart-legend-swatch"}),t.jsx("span",{children:x.summaryLabel}),t.jsx("strong",{children:x.format(re(x))})]},x.key))})]})]})}function lu({value:s,onChange:i,monthLabel:o}){const{t:d}=Qe();return t.jsx("div",{className:"range-toggle",role:"group","aria-label":d("dashboard.range"),children:["today","month"].map(u=>t.jsx("button",{type:"button",className:s===u?"active":"",onClick:()=>i(u),"aria-pressed":s===u,children:u==="today"?d("dashboard.rangeToday"):o??d("dashboard.rangeMonth")},u))})}function tj({points:s,metrics:i,emptyLabel:o}){const{t:d}=Qe(),[u,m]=f.useState(i.map(g=>g.key)),[h,k]=f.useState(null),y=i.filter(g=>u.includes(g.key)),v=Math.max(1,...y.flatMap(g=>s.map(L=>Number(L[g.key]||0)))),j=920,S=260,_=8,$=22,G=S-$-28,M=s.length>1?(j-_*2)/(s.length-1):0,Q=Math.max(Math.ceil(s.length/7),1),q=h===null?null:s[h]??null,D=g=>({"--metric-color":g.color}),I=g=>_+g*M,te=g=>$+G-g/v*G,ie=h===null?50:Math.min(88,Math.max(12,I(h)/j*100)),T=(g,L)=>Number(g[L.key]||0),K=g=>Math.max(0,...s.map(L=>T(L,g))),ne=g=>{const L=s.map((re,Y)=>({x:I(Y),y:te(T(re,g))}));return L.length?L.length===1?`M ${L[0].x} ${L[0].y}`:L.slice(1).reduce((re,Y,me)=>{const x=L[me],A=(x.x+Y.x)/2;return`${re} C ${A} ${x.y}, ${A} ${Y.y}, ${Y.x} ${Y.y}`},`M ${L[0].x} ${L[0].y}`):""};function ge(g){m(L=>L.includes(g)?L.length===1?L:L.filter(re=>re!==g):[...L,g]),k(null)}return s.length===0?t.jsx("div",{className:"empty-state",children:o}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"chart-legend",role:"group","aria-label":d("dashboard.chartMetrics"),children:i.map(g=>{const L=u.includes(g.key);return t.jsxs("button",{type:"button",className:`chart-legend-toggle ${L?"active":""}`,style:D(g),onClick:()=>ge(g.key),"aria-pressed":L,children:[t.jsx("span",{className:"chart-legend-swatch"}),t.jsx("span",{children:g.label})]},g.key)})}),t.jsxs("div",{className:"chart-frame",onMouseLeave:()=>k(null),children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${j} ${S}`,preserveAspectRatio:"none",role:"img",children:[t.jsx("rect",{className:"chart-plot-bg",x:_,y:$,width:j-_*2,height:G,rx:"14"}),[0,.25,.5,.75,1].map(g=>t.jsx("line",{className:"chart-grid",x1:_,x2:j-_,y1:$+g*G,y2:$+g*G},g)),h!==null?t.jsx("line",{className:"chart-hover-line",x1:I(h),x2:I(h),y1:$,y2:$+G}):null,y.map(g=>t.jsx("path",{className:"chart-series-line",d:ne(g),style:D(g)},g.key)),h!==null?y.map(g=>t.jsx("circle",{className:"chart-series-dot",cx:I(h),cy:te(T(s[h],g)),r:"5",style:D(g)},`${g.key}-${h}`)):null,s.map((g,L)=>{const re=s.length>1?M:j-_*2;return t.jsx("rect",{className:"chart-hover-zone",x:I(L)-re/2,y:$,width:re,height:G,onMouseEnter:()=>k(L),onFocus:()=>k(L),onClick:()=>k(L),tabIndex:0},`${g.label}-${L}`)})]}),q?t.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${ie}%`},children:[t.jsx("div",{className:"tooltip-date",children:q.label}),t.jsxs("div",{className:"tooltip-series-list",children:[y.map(g=>t.jsxs("div",{className:"tooltip-series-row",style:D(g),children:[t.jsx("span",{className:"tooltip-dot"}),t.jsx("span",{children:g.label}),t.jsx("strong",{children:g.format(T(q,g))})]},g.key)),q.sample_count!==void 0?t.jsxs("div",{className:"tooltip-series-row",children:[t.jsx("span",{}),t.jsx("span",{children:d("dashboard.sampleCount")}),t.jsx("strong",{children:An(q.sample_count)})]}):null]})]}):null]}),t.jsx("div",{className:"chart-axis",children:s.filter((g,L)=>L===0||L===s.length-1||L%Q===0).map((g,L)=>t.jsx("span",{children:g.label},`${g.label}-${L}`))}),t.jsx("div",{className:"chart-insights",children:y.map(g=>t.jsxs("div",{className:"chart-insight",style:D(g),children:[t.jsx("span",{className:"chart-legend-swatch"}),t.jsx("span",{children:g.summaryLabel}),t.jsx("strong",{children:g.format(K(g))})]},g.key))})]})}function Of({title:s,subtitle:i,data:o,range:d,onRangeChange:u,loading:m,error:h,mode:k}){const{t:y}=Qe(),v=k==="users"?((o==null?void 0:o.users)??[]).map(j=>({id:`user-${j.user_id}`,label:j.email||`User #${j.user_id}`,total:Number(j.total||0)})):((o==null?void 0:o.servers)??[]).map(j=>({id:`${j.server_type}-${j.server_id}`,label:j.server_name||y("dashboard.unnamedNode"),total:Number(j.total||0)}));return t.jsxs("section",{className:"panel chart-panel rank-chart-panel",children:[t.jsxs("div",{className:"panel-heading chart-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:i})]}),t.jsx(lu,{value:d,onChange:u,monthLabel:y("dashboard.rangeLast31Days")})]}),h?t.jsx("div",{className:"chart-error",children:h}):null,m?t.jsx(bt,{label:y("dashboard.chartLoading")}):t.jsx("div",{className:"traffic-compact-list",children:v.length===0?t.jsx("div",{className:"empty-state",children:y("dashboard.noTraffic")}):v.slice(0,10).map((j,S)=>{var W;const _=Math.max(((W=v[0])==null?void 0:W.total)??1,1),$=Math.max(3,j.total/_*100);return t.jsxs("div",{className:"traffic-compact-row",children:[t.jsxs("div",{className:"traffic-compact-meta",children:[t.jsx("span",{children:S+1}),t.jsx("strong",{title:j.label,children:j.label}),t.jsx("small",{children:V1(j.total)})]}),t.jsx("div",{className:"traffic-compact-track","aria-hidden":"true",children:t.jsx("span",{style:{width:`${$}%`}})})]},j.id)})})]})}function nj({data:s,range:i,onRangeChange:o,loading:d,error:u}){const{t:m}=Qe(),h=[{key:"online_user",label:m("dashboard.onlineUsers"),summaryLabel:m(i==="today"?"dashboard.peakOnline":"dashboard.avgOnlinePeak"),color:"#22c55e",format:An}];return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading chart-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m("dashboard.onlineTrend")}),t.jsx("p",{children:m(i==="today"?"dashboard.onlineTrendTodayHelp":"dashboard.onlineTrendMonthHelp")})]}),t.jsx(lu,{value:i,onChange:o,monthLabel:m("dashboard.rangeLast31Days")})]}),u?t.jsx("div",{className:"chart-error",children:m("dashboard.chartLoadFailed")}):null,d?t.jsx(bt,{label:m("dashboard.chartLoading")}):t.jsx(tj,{points:(s==null?void 0:s.points)??[],metrics:h,emptyLabel:m("dashboard.noChartData")}),t.jsx("p",{className:"chart-note",children:m("dashboard.onlineRetentionNote")})]})}function aj({data:s,range:i,onRangeChange:o,loading:d,error:u}){const{t:m}=Qe(),h=(s==null?void 0:s.items)??[],k=Math.max(...h.map(y=>Number(y.commission_amount||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsxs("div",{className:"panel-heading chart-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m("dashboard.topCtvCommission")}),t.jsx("p",{children:m("dashboard.topCtvCommissionHelp")})]}),t.jsx(lu,{value:i,onChange:o})]}),u?t.jsx("div",{className:"chart-error",children:m("dashboard.chartLoadFailed")}):null,d?t.jsx(bt,{label:m("dashboard.chartLoading")}):t.jsx("div",{className:"rank-list",children:h.length===0?t.jsx("div",{className:"empty-state",children:m("dashboard.noCommissionRank")}):h.map((y,v)=>{const j=Number(y.commission_amount||0)/k*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:v+1}),t.jsx("strong",{children:y.email||`User #${y.user_id}`}),t.jsxs("small",{children:[cn(y.commission_amount)," VND · ",An(y.commission_count)]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(j,3)}%`}})})]},`${y.user_id}-${v}`)})})]})}function yd({label:s,current:i,previous:o}){const{t:d}=Qe();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof i=="number"?An(i):i}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?An(o):o]})]})}function Uo(){return{data:null,loading:!0,error:""}}function ij(s,i){const o=new Date;if(s==="today"){const u=o.getHours();return{range:s,points:Array.from({length:24},(m,h)=>({time:Math.floor(new Date(o.getFullYear(),o.getMonth(),o.getDate(),h).getTime()/1e3),label:`${String(h).padStart(2,"0")}:00`,online_user:h===u?i:0,sample_count:h===u?1:0}))}}const d=new Date(o.getFullYear(),o.getMonth(),o.getDate());return{range:s,points:Array.from({length:31},(u,m)=>{const h=new Date(d);return h.setDate(d.getDate()-(30-m)),{time:Math.floor(h.getTime()/1e3),label:`${String(h.getMonth()+1).padStart(2,"0")}-${String(h.getDate()).padStart(2,"0")}`,online_user:m===30?i:0,online_user_avg:m===30?i:0,sample_count:m===30?1:0}})}}function lj(){var ne,ge,g,L,re,Y,me,x,A,C,de,ae,z;const s=qt(),{t:i}=Qe(),[o,d]=f.useState(null),[u,m]=f.useState(""),[h,k]=f.useState(!0),[y,v]=f.useState("today"),[j,S]=f.useState("today"),[_,$]=f.useState("today"),[W,G]=f.useState("today"),[M,Q]=f.useState(Uo),[q,D]=f.useState(Uo),[I,te]=f.useState(Uo),[ie,T]=f.useState(Uo),K=f.useCallback(async()=>{k(!0),m("");try{d(await w0())}catch(R){m(R instanceof Error?R.message:i("dashboard.loadFailed"))}finally{k(!1)}},[i]);return f.useEffect(()=>{if(!Bt()){s.replace("/login");return}K()},[K,s]),f.useEffect(()=>{let R=!0;return Q(V=>({...V,loading:!0,error:""})),_0(y).then(V=>{R&&Q({data:V,loading:!1,error:""})}).catch(V=>{R&&Q({data:null,loading:!1,error:V instanceof Error?V.message:i("dashboard.chartLoadFailed")})}),()=>{R=!1}},[y,i]),f.useEffect(()=>{let R=!0;return D(V=>({...V,loading:!0,error:""})),N0(j).then(V=>{R&&D({data:V,loading:!1,error:""})}).catch(V=>{R&&D({data:null,loading:!1,error:V instanceof Error?V.message:i("dashboard.chartLoadFailed")})}),()=>{R=!1}},[j,i]),f.useEffect(()=>{let R=!0;return te(V=>({...V,loading:!0,error:""})),S0(_).then(V=>{R&&te({data:V,loading:!1,error:""})}).catch(()=>{var V;R&&te({data:ij(_,((V=o==null?void 0:o.override)==null?void 0:V.online_user)??0),loading:!1,error:""})}),()=>{R=!1}},[_,(ne=o==null?void 0:o.override)==null?void 0:ne.online_user]),f.useEffect(()=>{let R=!0;return T(V=>({...V,loading:!0,error:""})),k0(W).then(V=>{R&&T({data:V,loading:!1,error:""})}).catch(V=>{R&&T({data:null,loading:!1,error:V instanceof Error?V.message:i("dashboard.chartLoadFailed")})}),()=>{R=!1}},[W,i]),t.jsxs(Vt,{title:i("dashboard.title"),subtitle:i("dashboard.subtitle"),children:[u?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:u}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:K,children:[t.jsx(At,{size:16}),i("common.retry")]})]}):null,h&&!o?t.jsx(bt,{label:i("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((ge=o.override)==null?void 0:ge.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:i("dashboard.pendingTickets",{count:(g=o.override)==null?void 0:g.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:i("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("dashboard.today")}),t.jsx("p",{children:i("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:K,disabled:h,children:[t.jsx(At,{size:16}),i(h?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(Oo,{label:i("dashboard.onlineUsers"),value:An(((L=o.override)==null?void 0:L.online_user)??0),helper:i("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(Oo,{label:i("dashboard.todayIncome"),value:`${cn(((re=o.override)==null?void 0:re.day_paid_income)??((Y=o.override)==null?void 0:Y.day_income)??0)} VND`,helper:i("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(Oo,{label:i("dashboard.todayRegistrations"),value:An(((me=o.override)==null?void 0:me.day_register_total)??0),helper:i("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(Oo,{label:i("dashboard.pendingCommission"),value:An(((x=o.override)==null?void 0:x.commission_pending_total)??0),helper:i("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(yd,{label:i("dashboard.monthIncome"),current:`${cn(((A=o.override)==null?void 0:A.month_income)??0)} VND`,previous:`${cn(((C=o.override)==null?void 0:C.last_month_income)??0)} VND`}),t.jsx(yd,{label:i("dashboard.monthCommission"),current:`${cn(((de=o.override)==null?void 0:de.commission_month_payout)??0)} VND`,previous:`${cn(((ae=o.override)==null?void 0:ae.commission_last_month_payout)??0)} VND`}),t.jsx(yd,{label:i("dashboard.monthRegistrations"),current:((z=o.override)==null?void 0:z.month_register_total)??0,previous:"-"})]}),t.jsx(ej,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(nj,{data:I.data,range:_,onRangeChange:$,loading:I.loading,error:I.error}),t.jsx(aj,{data:ie.data,range:W,onRangeChange:G,loading:ie.loading,error:ie.error}),t.jsx(Of,{title:i("dashboard.userBandwidth"),subtitle:i("dashboard.userBandwidthHelp"),data:M.data,range:y,onRangeChange:v,loading:M.loading,error:M.error,mode:"users"}),t.jsx(Of,{title:i("dashboard.serverBandwidth"),subtitle:i("dashboard.serverBandwidthHelp"),data:q.data,range:j,onRangeChange:S,loading:q.loading,error:q.error,mode:"servers"})]})]}):null]})}const sj=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function Uf(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function oj(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function vd(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function rj(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function cj(s){return[{label:s("config.happPing.proxyHead"),value:"proxy-head"},{label:s("config.happPing.proxy"),value:"proxy"},{label:s("config.happPing.tcp"),value:"tcp"},{label:s("config.happPing.icmp"),value:"icmp"}]}function dj(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function tn(s){return s===!0||s===1||s==="1"}function uj(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function jd(s){return s.split(",").map(i=>i.trim()).filter(Boolean)}function pj(s){return s.split(/\r\n|\r|\n/).map(i=>i.trim()).filter(Boolean).join(`
`)}function mj({field:s,value:i,onChange:o}){const{t:d}=Qe(),u=s.toInput?s.toInput(i):uj(i);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${tn(i)?"on":""}`,type:"button",onClick:()=>o(tn(i)?0:1),"aria-pressed":tn(i),children:[t.jsx("span",{}),tn(i)?Uf(d)[0].label:Uf(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:u,onChange:m=>o(m.target.value),children:(s.options??[]).map(m=>t.jsx("option",{value:m.value,children:m.label},String(m.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:m=>o(s.fromInput?s.fromInput(m.target.value):m.target.value),placeholder:s.placeholder,rows:4,value:u}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:m=>o(s.fromInput?s.fromInput(m.target.value):m.target.value),placeholder:s.placeholder,type:s.type,value:u}):null]})]})}function hj({plans:s,emailTemplates:i,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(u=>({label:u.name,value:u.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"webcon_shared_subscribe_url_enable",label:o("config.site.webconSharedSubscribeUrl"),description:o("config.site.webconSharedSubscribeUrlHelp"),type:"switch"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:u=>Number(u.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:u=>tn(u.email_whitelist_enable),fromInput:jd},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:u=>tn(u.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:u=>tn(u.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>tn(u.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>tn(u.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>tn(u.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>tn(u.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:o("config.subscribe.happProfileTitle"),description:o("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:o("config.subscribe.happHideSettings"),description:o("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:o("config.subscribe.happAnnounce"),description:o("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:o("config.subscribe.happProviderId"),description:o("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:o("config.subscribe.happColorProfile"),description:o("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:o("config.subscribe.happPingType"),description:o("config.subscribe.happPingTypeHelp"),type:"select",options:cj(o)},{key:"happ_check_url",label:o("config.subscribe.happCheckUrl"),description:o("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:u=>String(u.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:oj(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:vd(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:vd(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:vd(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:rj(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:u=>Number(u.show_subscribe_method||0)===2},{key:"subscribe_url_ua_enable",label:o("config.subscribe.uaAllow"),description:o("config.subscribe.uaAllowHelp"),type:"switch"},{key:"subscribe_url_allowed_ua",label:o("config.subscribe.uaAllowList"),description:o("config.subscribe.uaAllowListHelp"),type:"textarea",placeholder:`MosVPN
MosVPN Android
MosVPN iOS`,visible:u=>tn(u.subscribe_url_ua_enable),fromInput:pj}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:jd}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:dj(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:jd},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:u=>tn(u.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:u=>tn(u.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:u=>tn(u.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:o("config.server.zicnodeAutoTls"),description:o("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:o("config.server.zicnodeAutoTlsProvider"),description:o("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:u=>tn(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:o("config.server.zicnodeAutoTlsDnsEnv"),description:o("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:u=>tn(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:o("config.server.zicnodeAutoTlsSelfFallback"),description:o("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:u=>tn(u.zicnode_auto_tls_enable)}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:i.map(u=>({label:u,value:u}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function fj(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState("site"),[u,m]=f.useState(null),[h,k]=f.useState([]),[y,v]=f.useState([]),[j,S]=f.useState(!0),[_,$]=f.useState(null),[W,G]=f.useState(""),M=f.useCallback(async()=>{S(!0),G("");try{const[K,ne,ge]=await Promise.all([Dx(),z0(),C0()]);m(K),k(ne),v(ge)}catch(K){G(K instanceof Error?K.message:i("config.loadFailed"))}finally{S(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}M()},[M,s]),f.useEffect(()=>{const K=document.querySelector(".config-tabs button.active");K&&K.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const Q=f.useMemo(()=>hj({plans:h,emailTemplates:y,t:i}),[h,y,i]),q=Q.find(K=>K.key===o)??Q[0],D=(u==null?void 0:u[q.key])??{};function I(K,ne,ge){m(g=>g&&{...g,[K]:{...g[K],[ne]:ge}})}async function te(){var ge,g,L;if(!u)return;const K=q.key==="safe"?String(((ge=window.settings)==null?void 0:ge.secure_path)??"").trim():"",ne=q.key==="safe"?String(((g=u.safe)==null?void 0:g.secure_path)??"").trim():"";$(q.key),G("");try{await Ax(u[q.key]),(L=window.showToast)==null||L.call(window,i("config.saveSuccess"),"success"),q.key==="safe"&&ne&&ne!==K&&(window.settings={...window.settings??{},secure_path:ne},window.location.replace(`${window.location.origin}/${ne}`))}catch(re){G(re instanceof Error?re.message:i("config.saveFailed"))}finally{$(null)}}async function ie(){var K;$("mail"),G("");try{await T0(),(K=window.showToast)==null||K.call(window,i("config.email.testSuccess"),"success")}catch(ne){G(ne instanceof Error?ne.message:i("config.email.testFailed"))}finally{$(null)}}async function T(){var ne;const K=String((u==null?void 0:u.telegram.telegram_bot_token)??"");$("webhook"),G("");try{await E0(K),(ne=window.showToast)==null||ne.call(window,i("config.telegram.webhookSuccess"),"success")}catch(ge){G(ge instanceof Error?ge.message:i("config.telegram.webhookFailed"))}finally{$(null)}}return t.jsxs(Vt,{title:i("config.title"),subtitle:i("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("config.systemConfig")}),t.jsx("p",{children:i("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:M,disabled:j,children:[t.jsx(At,{size:16}),i(j?"common.refreshing":"common.refresh")]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,j&&!u?t.jsx(bt,{label:i("config.loading")}):null,u?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":i("config.tabsLabel"),children:sj.map(K=>{const ne=Q.find(ge=>ge.key===K);return ne?t.jsxs("button",{className:o===K?"active":"",type:"button",onClick:()=>d(K),children:[t.jsx("span",{children:ne.label}),t.jsx("small",{children:ne.hint})]},K):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:q.label}),t.jsx("p",{children:q.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:_===q.key,type:"button",onClick:te,children:[t.jsx(Un,{size:16}),_===q.key?i("config.saving"):i("config.saveTab")]})]}),q.warning?t.jsx("div",{className:"config-warning",children:q.warning}):null,t.jsx("div",{className:"config-fields",children:q.fields.map(K=>K.visible&&!K.visible(D)?null:t.jsx(mj,{field:K,value:D[K.key],onChange:ne=>I(q.key,K.key,ne)},K.key))}),q.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:_==="mail",onClick:ie,children:[t.jsx(kx,{size:16}),i(_==="mail"?"config.email.testing":"config.email.test")]})}):null,q.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:_==="webhook",onClick:T,children:[t.jsx(p0,{size:16}),i(_==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(Cx,{size:14}),i("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function ui(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const i=document.createElement("textarea");i.value=s,i.setAttribute("readonly",""),i.style.position="fixed",i.style.left="-9999px",i.style.top="0",document.body.appendChild(i),i.select(),i.setSelectionRange(0,i.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(i)}}function wd(s){return s===!0||s===1||s==="1"}function xj(s,i=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??i,config:{...(s==null?void 0:s.config)??{}}}}function gj(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function bj(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState([]),[h,k]=f.useState(null),[y,v]=f.useState({}),[j,S]=f.useState(!0),[_,$]=f.useState(!1),[W,G]=f.useState(!1),[M,Q]=f.useState(""),[q,D]=f.useState(""),[I,te]=f.useState({}),ie=f.useCallback(async()=>{S(!0),Q("");try{const[Y,me]=await Promise.all([M0(),D0()]);d(Y),m(me),te({})}catch(Y){Q(Y instanceof Error?Y.message:i("payment.loadFailed"))}finally{S(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}ie()},[ie,s]);async function T(Y){const me=(Y==null?void 0:Y.payment)??u[0]??"",x=xj(Y,me);if(k(x),v({}),Q(""),D(""),!!me){$(!0);try{v(await Cf(me,Y==null?void 0:Y.id))}catch(A){Q(A instanceof Error?A.message:i("payment.formLoadFailed"))}finally{$(!1)}}}async function K(Y){if(h){k({...h,payment:Y,config:{}}),$(!0),Q("");try{v(await Cf(Y,h.id))}catch(me){Q(me instanceof Error?me.message:i("payment.formLoadFailed"))}finally{$(!1)}}}async function ne(Y){var me,x;if(Y.preventDefault(),!!h){G(!0),Q(""),D("");try{await A0(gj(h)),k(null),(me=window.showToast)==null||me.call(window,i("payment.saveSuccess"),"success"),await ie()}catch(A){(x=window.showToast)==null||x.call(window,A instanceof Error?A.message:i("payment.saveFailed"),"error")}finally{G(!1)}}}async function ge(Y){var me;Q(""),D("");try{await O0(Y),await ie()}catch(x){(me=window.showToast)==null||me.call(window,x instanceof Error?x.message:i("payment.toggleFailed"),"error")}}async function g(Y){var me;(me=window.showConfirm)==null||me.call(window,{message:i("payment.deleteConfirm"),onConfirm:async()=>{var x,A;Q(""),D("");try{await U0(Y),(x=window.showToast)==null||x.call(window,i("payment.deleteSuccess"),"success"),await ie()}catch(C){(A=window.showToast)==null||A.call(window,C instanceof Error?C.message:i("payment.deleteFailed"),"error")}}})}async function L(Y,me){var de;const x=Y+me;if(x<0||x>=o.length)return;const A=[...o],C=A[Y];A.splice(Y,1),A.splice(x,0,C),d(A);try{await R0(A.map(ae=>ae.id)),await ie()}catch(ae){(de=window.showToast)==null||de.call(window,ae instanceof Error?ae.message:i("payment.sortFailed"),"error"),await ie()}}async function re(Y){var x;const me=await ui(Y);(x=window.showToast)==null||x.call(window,i(me?"payment.copied":"common.copyFailed"),me?"success":"error")}return t.jsxs(Vt,{title:i("payment.title"),subtitle:i("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("payment.methods")}),t.jsx("p",{children:i("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:ie,disabled:j,children:[t.jsx(At,{size:16}),t.jsx("span",{children:i(j?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void T(),children:[t.jsx(On,{size:16}),t.jsx("span",{children:i("payment.add")})]})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,q?t.jsx("div",{className:"form-success",children:q}):null,j&&o.length===0?t.jsx(bt,{label:i("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("payment.id")}),t.jsx("th",{children:i("payment.enabled")}),t.jsx("th",{children:i("payment.displayName")}),t.jsx("th",{children:i("payment.interface")}),t.jsx("th",{children:i("payment.notifyUrl")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((Y,me)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:Y.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void L(me,-1),disabled:me===0,"aria-label":i("payment.moveUp"),children:t.jsx(vf,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void L(me,1),disabled:me===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(yf,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${wd(Y.enable)?"active":""}`,type:"button",onClick:()=>void ge(Y.id),"aria-label":wd(Y.enable)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:Y.name}),Y.icon?t.jsx("small",{children:Y.icon}):null]}),t.jsx("td",{children:Y.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void re(Y.notify_url),children:[t.jsx("span",{children:Y.notify_url}),t.jsx(gs,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void T(Y),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void g(Y.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},Y.id)),!j&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map((Y,me)=>{const x=wd(Y.enable),A=Y.handling_fee_percent!==null&&Y.handling_fee_percent!==""?`${Y.handling_fee_percent}%`:"",C=Y.handling_fee_fixed!==null?`${cn(Y.handling_fee_fixed)} VND`:"",de=[A,C].filter(Boolean).join(" + ")||"No fees",ae=I[Y.id],z=Y.icon&&!ae;return t.jsxs("div",{className:`payment-mobile-card ${x?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",Y.id]}),t.jsx("span",{className:"gateway-tag",children:Y.payment})]}),t.jsx("button",{className:`admin-switch ${x?"active":""}`,type:"button",onClick:()=>void ge(Y.id),"aria-label":i(x?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[z?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:Y.icon,alt:Y.name,onError:()=>{te(R=>({...R,[Y.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:Y.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:Y.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:de})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:i("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void re(Y.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:Y.notify_url}),t.jsx(gs,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void L(me,-1),disabled:me===0,"aria-label":i("payment.moveUp"),children:t.jsx(vf,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void L(me,1),disabled:me===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(yf,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void T(Y),children:[t.jsx(Jt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void g(Y.id),children:[t.jsx(nn,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]})]},Y.id)}),!j&&o.length===0?t.jsx("div",{className:"empty-state",children:i("payment.empty")}):null]}),h?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:h.id?i("payment.edit"):i("payment.add")}),t.jsx("p",{children:i("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>k(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ne,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:Y=>k({...h,name:Y.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:h.icon,onChange:Y=>k({...h,icon:Y.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:h.notify_domain,onChange:Y=>k({...h,notify_domain:Y.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:h.handling_fee_percent,onChange:Y=>k({...h,handling_fee_percent:Y.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:h.handling_fee_fixed,onChange:Y=>k({...h,handling_fee_fixed:Y.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.interface")}),t.jsx("select",{className:"config-input",value:h.payment,onChange:Y=>void K(Y.target.value),children:u.map(Y=>t.jsx("option",{value:Y,children:Y},Y))})]}),_?t.jsx(bt,{label:i("payment.formLoading")}):null,_?null:Object.entries(y).map(([Y,me])=>t.jsxs("label",{children:[t.jsx("span",{children:me.label}),t.jsx("input",{className:"config-input",placeholder:me.description,value:String(h.config[Y]??me.value??""),onChange:x=>k({...h,config:{...h.config,[Y]:x.target.value}})})]},Y)),h.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>k(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Un,{size:16}),i(W?"payment.saving":"common.save")]})]})]})]})}):null]})}function yj(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function vj(s,i){return i[s.field_name]??s.default_value??""}function jj(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState(null),[u,m]=f.useState(null),[h,k]=f.useState(!0),[y,v]=f.useState(!1),[j,S]=f.useState(!1),[_,$]=f.useState(null),[W,G]=f.useState(""),[M,Q]=f.useState(""),q=f.useCallback(async()=>{k(!0),G("");try{d(await H0())}catch(T){G(T instanceof Error?T.message:i("theme.loadFailed"))}finally{k(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}q()},[q,s]);async function D(T,K){m(null),v(!0),G(""),Q("");try{const ne=await L0(T);m({key:T,theme:K,values:ne})}catch(ne){G(ne instanceof Error?ne.message:i("theme.configLoadFailed"))}finally{v(!1)}}async function I(T){$(T),G(""),Q("");try{await Ax({frontend_theme:T}),Q(i("theme.activateSuccess")),await q()}catch(K){G(K instanceof Error?K.message:i("theme.activateFailed"))}finally{$(null)}}async function te(T){if(T.preventDefault(),!!u){S(!0),G(""),Q("");try{await q0(u.key,u.values),m(null),Q(i("theme.saveSuccess")),await q()}catch(K){G(K instanceof Error?K.message:i("theme.saveFailed"))}finally{S(!1)}}}function ie(T,K){m(ne=>ne&&{...ne,values:{...ne.values,[T]:K}})}return t.jsxs(Vt,{title:i("theme.title"),subtitle:i("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.available")}),t.jsx("p",{children:i("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:q,disabled:h,children:[t.jsx(At,{size:16}),i(h?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:i("theme.warning")}),W?t.jsx("div",{className:"form-error",children:W}):null,M?t.jsx("div",{className:"form-success",children:M}):null,h&&!o?t.jsx(bt,{label:i("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([T,K])=>{const ne=o.active===T;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${yj(K)})`},children:ne?t.jsxs("span",{className:"theme-active",children:[t.jsx(Sx,{size:15}),i("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:K.name||T}),t.jsx("p",{children:K.description||i("theme.noDescription")})]}),t.jsxs("small",{children:[i("theme.version"),": ",K.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void D(T,K),children:[t.jsx(a0,{size:15}),i("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ne||_===T,type:"button",onClick:()=>void I(T),children:[t.jsx(Iv,{size:15}),i(ne?"theme.current":_===T?"theme.activating":"theme.activate")]})]})]},T)})}):null,y?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(bt,{label:i("theme.configLoading")})})}):null,u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.configure",{name:u.theme.name||u.key})}),t.jsx("p",{children:u.theme.description||i("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:te,children:[(u.theme.configs??[]).map(T=>{const K=vj(T,u.values);return t.jsxs("label",{children:[t.jsx("span",{children:T.label}),T.description?t.jsx("p",{className:"field-description",children:T.description}):null,T.field_type==="select"?t.jsx("select",{className:"config-input",value:K,onChange:ne=>ie(T.field_name,ne.target.value),children:Object.entries(T.select_options??{}).map(([ne,ge])=>t.jsx("option",{value:ne,children:ge},ne))}):null,T.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:T.placeholder,rows:5,value:K,onChange:ne=>ie(T.field_name,ne.target.value)}):null,T.field_type!=="select"&&T.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:T.placeholder,value:K,onChange:ne=>ie(T.field_name,ne.target.value)}):null]},T.field_name)}),(u.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:i("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Un,{size:16}),i(j?"theme.saving":"common.save")]})]})]})]})}):null]})}const Xd=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],wj=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],_j=["tcp","ws","grpc","http","httpupgrade","xhttp"],Xx=["tcp","ws","grpc"],Zx=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],Nj=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],Ko=["anytls","hysteria2","trojan","tuic"],Sj=["tcp","ws","grpc","httpupgrade","xhttp"],kj=["chrome","firefox","safari","ios","android","edge","360","qq"],Cj=["vmess","vless","trojan","hysteria","tuic","anytls"],zj=["trojan","hysteria","tuic","anytls"],Kx=["ForceIP","ForceIPv4","ForceIPv6","ForceIPv4v6","ForceIPv6v4"],Fo={enable:!1,mode:"auto",fail_policy:"direct",mtu:1280,domain_strategy:"ForceIPv4v6",endpoint:"engage.cloudflareclient.com:2408",addresses:["172.16.0.2/32","2606:4700:110:8765::2/128"],reserved:[]},Jo=[10,20,50,100],Fx="admin_server_manage_page_size";function Jx(s){return Jo.includes(s)}function Tj(){if(typeof window>"u")return Jo[0];try{const s=Number(window.localStorage.getItem(Fx));if(Jx(s))return s}catch{}return Jo[0]}const su=typeof window<"u"?window.location.origin:"",Ej="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function Mj(s,i,o=""){return s[i]??o}function Ie(s,i,o=""){return String(Mj(s,i,o))}function Dj(s,i){const o=s[i];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function pi(s){if(s&&typeof s=="object"&&!Array.isArray(s))return s;if(typeof s!="string"||!s.trim())return{};try{const i=JSON.parse(s);return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}catch{return{}}}function Zd(s){return typeof s=="string"?s.trim()!=="":Array.isArray(s)?s.length>0:s&&typeof s=="object"?Object.keys(s).length>0:!1}function Aj(s){return s==="vmess"?"networkSettings":"network_settings"}function Oj(s,i){const o=s==="vmess",d=s==="vless"||In(s),u={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(i){case"tcp":return d?{acceptProxyProtocol:!1,...u}:u;case"ws":return d?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return o?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function In(s){return s==="v2node"||s==="zicnode"}function Uj(s){return zj.includes(s)}function Rj(s){return In(s)||Cj.includes(s)}function Rf(s){return s==="vmess"?"tlsSettings":"tls_settings"}function Hj(s){const i=String((s==null?void 0:s._type)??"");return Uj(i)?1:Number((s==null?void 0:s.tls)??0)}function Vo(s){return!!s&&s!=="shadowsocks"}function Lj(s){return s==="vless"||s==="vmess"}function Po(s){return s==="vless"||s==="anytls"}function qj(s){return["vless","vmess","trojan","shadowsocks"].includes(s)}function Hf(s){return s==="shadowsocks"?["tcp","http"]:s==="trojan"?Xx:s==="vless"||s==="vmess"?Sj:[]}function Bj(s){var i;return In(s)?"ZicNode":((i=Xd.find(o=>o.value===s))==null?void 0:i.label)??s}function kt(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function ou(s){return s===!0||s===1||s==="1"||s==="true"}function Lf(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s:""}function Vx(s){return Array.isArray(s)?s.map(i=>String(i).trim()).filter(Boolean):typeof s=="string"?s.split(",").map(i=>i.trim()).filter(Boolean):[]}function $j(s){return Vx(s).map(i=>Number(i)).filter(i=>Number.isInteger(i)&&i>=0&&i<=255)}function Wo(s){const i={...Fo,...pi(s)};if(!ou(i.enable))return{enable:!1};const d={enable:!0,mode:["auto","manual"].includes(String(i.mode))?i.mode:"auto",fail_policy:["direct","block"].includes(String(i.fail_policy))?i.fail_policy:"direct",mtu:Number(i.mtu)>0?Number(i.mtu):1280,domain_strategy:Kx.includes(String(i.domain_strategy))?i.domain_strategy:"ForceIPv4v6"};["private_key","peer_public_key","endpoint"].forEach(h=>{const k=kt(i[h]);k&&(d[h]=k)});const u=Vx(i.addresses);u.length&&(d.addresses=u);const m=$j(i.reserved);return m.length&&(d.reserved=m),d}const Gj=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],Yj=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert","allow_insecure","allowInsecure"];function oa(s,i){const o=pi(s);if(i===0)return{};const d={...o};return i===1?Gj.forEach(u=>delete d[u]):i===2&&Yj.forEach(u=>delete d[u]),Object.keys(d).forEach(u=>{const m=d[u];(m===""||m===null||m===void 0)&&delete d[u]}),d}function Qj(s){const i=pi(s);if(!Object.keys(i).length)return{state:"pending",hasPin:!1,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"};const o=String(i.status??"").trim().toLowerCase(),d=!!(kt(i.public_key_sha256)||kt(i.sha256_hex)||kt(i.sha256));return o==="error"?{state:"error",hasPin:d,labelKey:"node.autoCertError",detailKey:"node.autoCertErrorHelp"}:d?{state:"ready",hasPin:d,labelKey:"node.autoCertReady",detailKey:"node.autoCertReadyHelp"}:{state:"pending",hasPin:d,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"}}function qf(s,i=su){return kt(s).replace(/\/+$/,"")||i}function Bf(s){return`'${s.replace(/'/g,"'\\''")}'`}function Xj(s,i){const o=i.apiHost||su,d=i.apiKey||"TOKEN_MOI";return`wget -N ${Ej} && \\
bash install.sh --api-host ${Bf(o)} --node-id ${s} --api-key ${Bf(d)}`}function $f(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function Gf(s,i){if(i){const d=JSON.parse(JSON.stringify(i));if(d.group_id=$f(d.group_id),d.route_id=$f(d.route_id),In(s)){d.warp_settings={...Fo,...pi(d.warp_settings)};const u=String(d.protocol??""),m=Number(d.tls??0);m===2&&!Po(u)?d.tls=Vo(u)?1:0:Ko.includes(u)&&m!==2&&(d.tls=1)}return{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:"1",show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...o,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...o,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:"",warp_settings:{...Fo}};default:return o}}function Px({initialValue:s,placeholder:i,onCancel:o,onSave:d}){const{t:u}=Qe(),[m,h]=f.useState(()=>Zd(s)?JSON.stringify(s,null,2):""),[k,y]=f.useState(""),v=S=>{if(S.preventDefault(),!m.trim()){d({});return}try{const _=JSON.parse(m);if(typeof _!="object"||_===null)throw new Error("Must be a JSON object {} or array []");d(_)}catch(_){y(_ instanceof Error?_.message:"Invalid JSON")}},j=S=>{if(h(S),!S.trim()){y("");return}try{const _=JSON.parse(S);if(typeof _!="object"||_===null)throw new Error("Must be a JSON object {} or array []");y("")}catch(_){y(_ instanceof Error?_.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:v,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:u("node.jsonContent")}),k&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",k]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:k?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:m,onChange:S=>j(S.target.value),placeholder:i??`{
  "key": "value"
}`,autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:o,children:u("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!k,children:u("common.confirm")})]})]})}function Te({label:s,required:i,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,i&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:u=>{u.preventDefault(),d()},children:o})]})}function Zj({value:s,onChange:i,label:o}){const{t:d}=Qe(),[u,m]=f.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Te,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((h,k)=>t.jsxs("span",{className:"tag",onClick:()=>i(s.filter((y,v)=>v!==k)),style:{cursor:"pointer"},children:[h," ×"]},k)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:u,placeholder:d("node.tagPlaceholder"),onChange:h=>m(h.target.value),onKeyDown:h=>{h.key==="Enter"&&u.trim()&&(h.preventDefault(),i([...s,u.trim()]),m(""))}})]})]})}function Yf({options:s,value:i,onChange:o,label:d,actionText:u,onAction:m}){const{t:h}=Qe(),[k,y]=f.useState(""),v=s.filter(S=>i.includes(S.id)),j=s.filter(S=>S.name.toLowerCase().includes(k.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Te,{label:d,actionText:u,onAction:m}),v.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:v.map(S=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(i.filter(_=>_!==S.id)),children:[S.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},S.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${h("common.search")}...`,value:k,onChange:S=>y(S.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[j.map(S=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:i.includes(S.id),onChange:_=>o(_.target.checked?[...i,S.id]:i.filter($=>$!==S.id))}),t.jsx("span",{children:S.name})]},S.id)),j.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?h("node.noGroupsAvailable"):h("node.noResultsFound")})]})]})}function ea({label:s,checked:i,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:i,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:i?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:i?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function Kj({initialValue:s,isSnakeCase:i,tlsMode:o,nodeType:d,onCancel:u,onSave:m}){const{t:h}=Qe(),k=i?"server_name":"serverName",y=i?"allow_insecure":"allowInsecure",v=In(d),j=Rj(d),S=o===1&&j,[_,$]=f.useState(String((s==null?void 0:s[k])??"")),[W,G]=f.useState(String((s==null?void 0:s.dest)??"")),[M,Q]=f.useState(String((s==null?void 0:s.server_port)??"443")),[q,D]=f.useState(String((s==null?void 0:s.xver)??"0")),[I,te]=f.useState(String((s==null?void 0:s.private_key)??"")),[ie,T]=f.useState(String((s==null?void 0:s.public_key)??"")),[K,ne]=f.useState(String((s==null?void 0:s.short_id)??"")),[ge,g]=f.useState(String((s==null?void 0:s.fingerprint)??"chrome")),[L,re]=f.useState(String((s==null?void 0:s.pinnedPeerCertSha256)??(s==null?void 0:s.pinned_peer_cert_sha256)??"")),[Y,me]=f.useState(String((s==null?void 0:s.verifyPeerCertByName)??(s==null?void 0:s.verify_peer_cert_by_name)??"")),x=String((s==null?void 0:s.cert_mode)??"").trim(),[A,C]=f.useState(x||"auto"),[de,ae]=f.useState(String((s==null?void 0:s.provider)??"")),[z,R]=f.useState(String((s==null?void 0:s.dns_env)??"")),[V,xe]=f.useState(String((s==null?void 0:s.cert_file)??"")),[ze,_e]=f.useState(String((s==null?void 0:s.key_file)??"")),[He,U]=f.useState(()=>{const ke=s==null?void 0:s.reject_unknown_sni;return ke===1||ke===!0||String(ke)==="1"||String(ke)==="true"}),[fe,he]=f.useState(String((s==null?void 0:s.ech)??"")),[qe,ct]=f.useState(String((s==null?void 0:s.ech_server_name)??"")),[ut,nt]=f.useState(String((s==null?void 0:s.ech_key)??"")),[Ct,pt]=f.useState(String((s==null?void 0:s.ech_config)??"")),[Pt,vt]=f.useState(()=>{const ke=s==null?void 0:s[y];return ke===1||ke===!0||String(ke)==="1"||String(ke)==="true"}),Ke=pi(s==null?void 0:s.auto_cert),$t=Qj(s==null?void 0:s.auto_cert),Ot=ke=>{if(ke.preventDefault(),v&&o===0){m({});return}const Sn=v?oa(s,o):pi(s),De=v?{...Sn,[k]:_,fingerprint:ge}:{...s??{},[k]:_,fingerprint:ge},pn=L.trim(),mn=Y.trim();if(pn?De.pinnedPeerCertSha256=pn:delete De.pinnedPeerCertSha256,delete De.pinned_peer_cert_sha256,mn?De.verifyPeerCertByName=mn:delete De.verifyPeerCertByName,delete De.verify_peer_cert_by_name,v&&o!==1?(delete De.allow_insecure,delete De.allowInsecure):De[y]=i?Pt?1:0:Pt,o===2&&(De.dest=W,De.server_port=M,De.xver=Number(q)||0,De.private_key=I,De.public_key=ie,De.short_id=K,De.ech=fe,De.ech_server_name=qe,De.ech_key=ut,De.ech_config=Ct),S){De.cert_mode=A;const Wt=s==null?void 0:s.auto_cert;Wt&&typeof Wt=="object"&&(De.auto_cert=Wt),A==="none"?(delete De.provider,delete De.dns_env,delete De.cert_file,delete De.key_file):(de.trim()?De.provider=de:delete De.provider,z.trim()?De.dns_env=z:delete De.dns_env,V.trim()?De.cert_file=V:delete De.cert_file,ze.trim()?De.key_file=ze:delete De.key_file),De.reject_unknown_sni=He?"1":"0"}m(v?oa(De,o):De)};return t.jsxs("form",{onSubmit:Ot,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:h("node.sni")}),t.jsx("input",{className:"config-input",value:_,onChange:ke=>$(ke.target.value),placeholder:h(o===2?"node.realitySniHelp":"node.serverNameHelp")})]}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.dest")}),t.jsx("input",{className:"config-input",value:W,onChange:ke=>G(ke.target.value),placeholder:h("node.destHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.servicePort")}),t.jsx("input",{className:"config-input",value:M,onChange:ke=>Q(ke.target.value),placeholder:"443"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.proxyProtocol")}),t.jsxs("select",{className:"config-input",value:q,onChange:ke=>D(ke.target.value),children:[t.jsx("option",{value:"0",children:"0"}),t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.privateKey")}),t.jsx("input",{className:"config-input",value:I,onChange:ke=>te(ke.target.value),placeholder:h("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.publicKey")}),t.jsx("input",{className:"config-input",value:ie,onChange:ke=>T(ke.target.value),placeholder:h("node.autoGenHelp")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.shortId")}),t.jsx("input",{className:"config-input",value:K,onChange:ke=>ne(ke.target.value),placeholder:h("node.autoGenHelp")})]})]}):null,t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.fingerprint")}),t.jsx("select",{className:"config-input",value:ge,onChange:ke=>g(ke.target.value),children:kj.map(ke=>t.jsx("option",{value:ke,children:ke},ke))})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.pinnedPeerCertSha256")}),t.jsx("input",{className:"config-input",value:L,onChange:ke=>re(ke.target.value),placeholder:"AA:BB:CC..."})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.verifyPeerCertByName")}),t.jsx("input",{className:"config-input",value:Y,onChange:ke=>me(ke.target.value),placeholder:"example.com"})]})]}),S?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.certMode")}),t.jsxs("select",{className:"config-input",value:A,onChange:ke=>C(ke.target.value),children:[t.jsx("option",{value:"auto",children:h("node.certModeAuto")}),t.jsx("option",{value:"self",children:h("node.certModeSelf")}),t.jsx("option",{value:"http",children:h("node.certModeHttp")}),t.jsx("option",{value:"dns",children:h("node.certModeDns")}),t.jsx("option",{value:"file",children:h("node.certModeFile")}),t.jsx("option",{value:"none",children:h("node.certModeNone")})]})]}),A!=="none"?t.jsxs("div",{className:`config-warning auto-cert-status auto-cert-${$t.state}`,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[t.jsx("strong",{children:h($t.labelKey)}),kt(Ke.updated_at)?t.jsx("span",{className:"mono",children:kt(Ke.updated_at)}):null]}),t.jsx("div",{style:{marginTop:4},children:h($t.detailKey)}),kt(Ke.target)||kt(Ke.source)?t.jsxs("div",{className:"mono",style:{marginTop:6,fontSize:12},children:[kt(Ke.target)?`${h("node.autoCertTarget")}: ${kt(Ke.target)}`:"",kt(Ke.target)&&kt(Ke.source)?" · ":"",kt(Ke.source)?`${h("node.autoCertSource")}: ${kt(Ke.source)}`:""]}):null,kt(Ke.public_key_sha256)||kt(Ke.sha256_hex)?t.jsx("div",{className:"mono",style:{marginTop:6,fontSize:12,wordBreak:"break-all"},children:kt(Ke.public_key_sha256)?`${h("node.autoCertPublicKeySha")}: ${kt(Ke.public_key_sha256)}`:`${h("node.autoCertSha")}: ${kt(Ke.sha256_hex)}`}):null,kt(Ke.error)?t.jsx("div",{style:{marginTop:6,color:"var(--rose)"},children:kt(Ke.error)}):null]}):null,A==="dns"||A==="auto"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.dnsProvider")}),t.jsx("input",{className:"config-input",value:de,onChange:ke=>ae(ke.target.value),placeholder:"cloudflare"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.dnsEnv")}),t.jsx("input",{className:"config-input",value:z,onChange:ke=>R(ke.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,A!=="none"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.certFile")}),t.jsx("input",{className:"config-input",value:V,onChange:ke=>xe(ke.target.value),placeholder:h("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.keyFile")}),t.jsx("input",{className:"config-input",value:ze,onChange:ke=>_e(ke.target.value),placeholder:h("node.autoGenHelp")})]})]}):null,t.jsx(ea,{label:h("node.rejectUnknownSni"),checked:He,onChange:U})]}):null,!v||v&&o===1?t.jsx(ea,{label:h("node.allowInsecure"),checked:Pt,onChange:vt}):null,o===2?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.ech")}),t.jsxs("select",{className:"config-input",value:fe,onChange:ke=>he(ke.target.value),children:[t.jsx("option",{value:"",children:h("node.echNone")}),t.jsx("option",{value:"cloudflare",children:"Cloudflare"}),t.jsx("option",{value:"custom",children:h("node.echCustom")})]})]}),fe==="cloudflare"?t.jsx("div",{className:"config-warning",children:h("node.echCloudflareHelp")}):null,fe==="custom"?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.echServerName")}),t.jsx("input",{className:"config-input",value:qe,onChange:ke=>ct(ke.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.echKey")}),t.jsx("input",{className:"config-input",value:ut,onChange:ke=>nt(ke.target.value),placeholder:h("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.echConfig")}),t.jsx("input",{className:"config-input",value:Ct,onChange:ke=>pt(ke.target.value),placeholder:h("node.autoGenHelp")})]})]}):null]}):null,t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:u,children:h("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:h("common.confirm")})]})]})}function Fj({draft:s,set:i,groups:o,routes:d,nodes:u,onOpenJson:m,onAddGroup:h,onOpenTransportConfig:k}){const{t:y}=Qe(),v=String(s._type),j=In(v),S=Ie(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:y("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ie(s,"name"),onChange:_=>i("name",_.target.value),placeholder:y("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",inputMode:"decimal",required:!0,value:Ie(s,"rate","1"),onChange:_=>i("rate",_.target.value)})]})]}),t.jsx(Zj,{value:s.tags??[],onChange:_=>i("tags",_),label:y("node.tags")}),t.jsx(Yf,{options:o.map(_=>({id:_.id,name:_.name})),value:s.group_id??[],onChange:_=>i("group_id",_),label:y("node.permissionGroups"),actionText:y("node.addGroup"),onAction:h}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ie(s,"host"),onChange:_=>i("host",_.target.value),placeholder:y("node.addressPlaceholder")})]}),j?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.listenIp")}),t.jsx("input",{className:"config-input",value:Ie(s,"listen_ip"),onChange:_=>i("listen_ip",_.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(v)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?y("node.editConfig"):void 0,onAction:()=>{const _=Rf(v);m(y("node.connectionSecurityConfig"),_)}}),t.jsxs("select",{className:"config-input",value:Ie(s,"tls","0"),onChange:_=>{const $=Number(_.target.value);i("tls",$);const W=Rf(v);$!==0&&!s[W]&&i(W,{})},children:[t.jsx("option",{value:"0",children:y("node.none")}),t.jsx("option",{value:"1",children:y("node.useTls")}),v!=="vmess"&&t.jsx("option",{value:"2",children:y("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(v)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.sni"),actionText:y("node.editConfig"),onAction:()=>m(y("node.connectionSecurityConfig"),"tls_settings")}),t.jsx("input",{className:"config-input",value:Ie(s,"server_name"),onChange:_=>i("server_name",_.target.value),placeholder:y("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ie(s,"port"),onChange:_=>i("port",_.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ie(s,"server_port"),onChange:_=>i("server_port",_.target.value),placeholder:"443"})]})]}),j?t.jsx(nw,{draft:s,set:i,onOpenJson:m,onOpenTransportConfig:k,onOpenSecurityConfig:()=>m(y("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(v)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:y("node.transportProtocol"),required:!0,actionText:y("node.editConfig"),onAction:k}),t.jsxs("select",{className:"config-input",value:S,onChange:_=>{i("network",_.target.value);const $=v==="vmess"?"networkSettings":"network_settings";s[$]||i($,{})},children:[v==="vmess"&&wj.map(_=>t.jsx("option",{value:_,children:_},_)),v==="trojan"&&Xx.map(_=>t.jsx("option",{value:_,children:_},_)),v==="vless"&&_j.map(_=>t.jsx("option",{value:_,children:_},_))]})]}):null,v==="trojan"&&t.jsx(Vj,{draft:s,set:i}),v==="shadowsocks"&&t.jsx(Pj,{draft:s,set:i,onOpenJson:m}),v==="hysteria"&&t.jsx(Wj,{draft:s,set:i}),v==="tuic"&&t.jsx(Ij,{draft:s,set:i}),v==="vless"&&t.jsx(ew,{draft:s,set:i,onOpenJson:m}),v==="anytls"&&t.jsx(tw,{draft:s,set:i,onOpenJson:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:y("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:_=>i("parent_id",_.target.value?Number(_.target.value):null),children:[t.jsx("option",{value:"",children:y("node.none")}),u.filter(_=>_.id!==s.id&&!_.parent_id).map(_=>t.jsx("option",{value:_.id,children:_.name},_.id))]})]}),t.jsx(Yf,{options:d.map(_=>({id:_.id,name:_.remarks})),value:s.route_id??[],onChange:_=>i("route_id",_),label:y("node.routingGroups")})]})]})}function Jj({draft:s,set:i,onCancel:o,onSave:d}){const u=String(s._type),m=String(s.network??"tcp"),h=Aj(u),k=s[h],y=Zd(k)?pi(k):{},v=Oj(u,m),j=Zd(v)?JSON.stringify(v,null,2):void 0;return t.jsx(Px,{initialValue:y,placeholder:j,onCancel:o,onSave:S=>{i(h,S),d()}})}function Vj({draft:s,set:i}){const{t:o}=Qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(ea,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>i("allow_insecure",d?1:0)})]})}function Pj({draft:s,set:i,onOpenJson:o}){const{t:d}=Qe(),u=Dj(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Ie(s,"cipher","aes-128-gcm"),onChange:m=>i("cipher",m.target.value),children:Zx.map(m=>t.jsx("option",{value:m,children:m},m))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Ie(s,"obfs"),onChange:m=>i("obfs",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(u.host??""),onChange:m=>i("obfs_settings",{...u,host:m.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(u.path??""),onChange:m=>i("obfs_settings",{...u,path:m.target.value}),placeholder:"/"})]})]})]})}function Wj({draft:s,set:i}){const{t:o}=Qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Ie(s,"version","2"),onChange:d=>i("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ie(s,"up_mbps","0"),onChange:d=>i("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ie(s,"down_mbps","0"),onChange:d=>i("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Ie(s,"obfs"),onChange:d=>i("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ie(s,"obfs_password"),onChange:d=>i("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(ea,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)})]})}function Ij({draft:s,set:i}){const{t:o}=Qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ie(s,"udp_relay_mode","native"),onChange:d=>i("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ie(s,"congestion_control","bbr"),onChange:d=>i("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(ea,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)}),t.jsx(ea,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>i("disable_sni",d?1:0)}),t.jsx(ea,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>i("zero_rtt_handshake",d?1:0)})]})}function ew({draft:s,set:i,onOpenJson:o}){const{t:d}=Qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Ie(s,"flow"),onChange:u=>i("flow",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Ie(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ie(s,"encryption"),onChange:u=>i("encryption",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function tw({draft:s,set:i,onOpenJson:o}){const{t:d}=Qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(ea,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:u=>i("insecure",u?1:0)})]})}function nw({draft:s,set:i,onOpenJson:o,onOpenTransportConfig:d,onOpenSecurityConfig:u}){const{t:m}=Qe(),h=Ie(s,"protocol"),k=Hf(h),y={...Fo,...pi(s.warp_settings)},v=ou(y.enable),j=(_,$)=>{i("warp_settings",Wo({...y,[_]:$}))},S=_=>{if(i("protocol",_),!_){i("tls",0),i("network","tcp");return}Ko.includes(_)?(i("tls",1),s.tls_settings||i("tls_settings",{})):_==="shadowsocks"?i("tls",0):_==="vmess"&&Number(s.tls??0)===2&&i("tls",1);const $=Hf(_);($.length===0||!$.includes(Ie(s,"network","tcp")))&&i("network","tcp"),_!=="vless"&&(i("flow",""),i("encryption",""),i("encryption_settings",{})),_!=="hysteria2"&&(i("obfs",null),i("obfs_password",""),i("up_mbps",0),i("down_mbps",0)),_!=="anytls"&&i("padding_scheme","")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.zicnodeConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.nodeProtocol"),required:!0}),t.jsxs("select",{className:"config-input",value:h,onChange:_=>S(_.target.value),children:[t.jsx("option",{value:"",children:m("node.selectNodeProtocol")}),Nj.map(_=>t.jsx("option",{value:_,children:_},_))]})]}),h?t.jsxs(t.Fragment,{children:[Vo(h)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?m("node.editConfig"):void 0,onAction:u}),t.jsxs("select",{className:"config-input",value:Ie(s,"tls",Ko.includes(h)?"1":"0"),onChange:_=>{const $=Number(_.target.value);i("tls",$),$!==0&&!s.tls_settings&&i("tls_settings",{})},children:[Lj(h)?t.jsx("option",{value:"0",children:m("node.none")}):null,t.jsx("option",{value:"1",children:m("node.useTls")}),Po(h)?t.jsx("option",{value:"2",children:m("node.reality")}):null]})]}):null,qj(h)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.transportProtocol"),required:!0,actionText:m("node.editConfig"),onAction:d}),t.jsx("select",{className:"config-input",value:k.includes(Ie(s,"network","tcp"))?Ie(s,"network","tcp"):"tcp",onChange:_=>{i("network",_.target.value),s.network_settings||i("network_settings",{})},children:k.map(_=>t.jsx("option",{value:_,children:_},_))})]}):null]}):null,t.jsx("div",{className:"form-section-title",children:m("node.warpOutbound")}),t.jsx(ea,{label:m("node.warpEnable"),checked:v,onChange:_=>i("warp_settings",Wo({...y,enable:_}))}),v?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpMode")}),t.jsxs("select",{className:"config-input",value:String(y.mode??"auto"),onChange:_=>j("mode",_.target.value),children:[t.jsx("option",{value:"auto",children:m("node.warpModeAuto")}),t.jsx("option",{value:"manual",children:m("node.warpModeManual")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpFailPolicy")}),t.jsxs("select",{className:"config-input",value:String(y.fail_policy??"direct"),onChange:_=>j("fail_policy",_.target.value),children:[t.jsx("option",{value:"direct",children:m("node.warpFailDirect")}),t.jsx("option",{value:"block",children:m("node.warpFailBlock")})]})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpMtu")}),t.jsx("input",{className:"config-input",type:"number",min:"576",value:String(y.mtu??1280),onChange:_=>j("mtu",Number(_.target.value))})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpDomainStrategy")}),t.jsx("select",{className:"config-input",value:String(y.domain_strategy??"ForceIPv4v6"),onChange:_=>j("domain_strategy",_.target.value),children:Kx.map(_=>t.jsx("option",{value:_,children:_},_))})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.warpPrivateKey")}),t.jsx("input",{className:"config-input",value:String(y.private_key??""),onChange:_=>j("private_key",_.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpPeerPublicKey")}),t.jsx("input",{className:"config-input",value:String(y.peer_public_key??""),onChange:_=>j("peer_public_key",_.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpEndpoint")}),t.jsx("input",{className:"config-input",value:String(y.endpoint??"engage.cloudflareclient.com:2408"),onChange:_=>j("endpoint",_.target.value)})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpAddresses")}),t.jsx("input",{className:"config-input",value:Lf(y.addresses),onChange:_=>j("addresses",_.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpReserved")}),t.jsx("input",{className:"config-input",value:Lf(y.reserved),onChange:_=>j("reserved",_.target.value)})]})]})]}):null,h==="vless"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.encryption"),actionText:Ie(s,"encryption")?m("node.editConfig"):void 0,onAction:()=>o(m("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ie(s,"encryption"),onChange:_=>i("encryption",_.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.flow")}),t.jsxs("select",{className:"config-input",value:Ie(s,"flow"),onChange:_=>i("flow",_.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),h==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Ie(s,"cipher","aes-128-gcm"),onChange:_=>i("cipher",_.target.value),children:Zx.map(_=>t.jsx("option",{value:_,children:_},_))})]}),h==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.hysteriaConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ie(s,"up_mbps","0"),onChange:_=>i("up_mbps",Number(_.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ie(s,"down_mbps","0"),onChange:_=>i("down_mbps",Number(_.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.obfsMethod")}),t.jsxs("select",{className:"config-input",value:Ie(s,"obfs"),onChange:_=>i("obfs",_.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"salamander",children:"salamander"})]})]}),Ie(s,"obfs")==="salamander"?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ie(s,"obfs_password"),onChange:_=>i("obfs_password",_.target.value),placeholder:m("node.autoGenHelp")})]}):null]})]}),h==="tuic"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.tuicConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ie(s,"udp_relay_mode","native"),onChange:_=>i("udp_relay_mode",_.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ie(s,"congestion_control","bbr"),onChange:_=>i("congestion_control",_.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(ea,{label:m("node.disableSni"),checked:s.disable_sni===1,onChange:_=>i("disable_sni",_?1:0)}),t.jsx(ea,{label:m("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:_=>i("zero_rtt_handshake",_?1:0)})]}),h==="anytls"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.paddingScheme"),actionText:m("node.editConfig"),onAction:()=>o(m("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const Qf={vmess:l0,vless:h0,trojan:Ld,shadowsocks:eu,hysteria:t0,tuic:Hv,anytls:ys,v2node:wf,zicnode:wf},aw={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},iw={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function li(s){return aw[s]??iw}function lw({draft:s,config:i,onCopy:o,t:d}){const u=Number(s.id??0),m=u>0?Xj(u,i):"",h=!i.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),u>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:m}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(m),children:[t.jsx(gs,{size:15}),d("node.copyInstallCommand")]}),h?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function sw(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState([]),[h,k]=f.useState([]),[y,v]=f.useState(null),[j,S]=f.useState(null),[_,$]=f.useState(!0),[W,G]=f.useState(!1),[M,Q]=f.useState(""),[q,D]=f.useState(""),[I,te]=f.useState(1),[ie,T]=f.useState(()=>Tj()),[K,ne]=f.useState(!1),[ge,g]=f.useState({}),[L,re]=f.useState({apiHost:su,apiKey:""}),[Y,me]=f.useState(!1),[x,A]=f.useState(""),[C,de]=f.useState(null),[ae,z]=f.useState(null),[R,V]=f.useState(null),xe=(H,se)=>{H.dataTransfer.effectAllowed="move",z(se)},ze=(H,se)=>{if(H.preventDefault(),ae===null||ae===se)return;const ee=[...o],Me=ee[ae];ee.splice(ae,1),ee.splice(se,0,Me),z(se),d(ee)},_e=()=>{z(null)},He=(H,se)=>{K&&V(se)},U=H=>{if(!K||R===null)return;H.cancelable&&H.preventDefault();const se=H.touches[0],ee=document.elementFromPoint(se.clientX,se.clientY);if(!ee)return;const Me=ee.closest(".mobile-node-card");if(!Me)return;const Ze=Me.getAttribute("data-index");if(Ze===null)return;const Fe=Number(Ze);if(Fe!==R&&Fe>=0&&Fe<o.length){const w=[...o],ce=w[R];w.splice(R,1),w.splice(Fe,0,ce),V(Fe),d(w)}},fe=()=>{V(null)};f.useEffect(()=>{te(1)},[x,ie]),f.useEffect(()=>{try{window.localStorage.setItem(Fx,String(ie))}catch{}},[ie]);const he=o.filter(H=>{const se=x.toLowerCase().trim();return se?H.name.toLowerCase().includes(se)||H.host.toLowerCase().includes(se)||String(H.id).includes(se)||H.type.toLowerCase().includes(se):!0}),qe=Math.ceil(he.length/ie),ct=he.slice((I-1)*ie,I*ie);function ut(H,se){return se<=7?Array.from({length:se},(ee,Me)=>Me+1):H<=4?[1,2,3,4,5,"...",se]:H>=se-3?[1,"...",se-4,se-3,se-2,se-1,se]:[1,"...",H-1,H,H+1,"...",se]}const nt=ut(I,qe),Ct=async()=>{var H,se;G(!0),Q(""),D("");try{const ee={};o.forEach((Me,Ze)=>{ee[Me.type]||(ee[Me.type]={}),ee[Me.type][String(Me.id)]=Ze+1}),await q1(ee),(H=window.showToast)==null||H.call(window,i("node.saveSortSuccess"),"success"),ne(!1),await we()}catch(ee){Q(ee instanceof Error?ee.message:i("node.saveSortFailed")),(se=window.showToast)==null||se.call(window,ee instanceof Error?ee.message:i("node.saveSortFailed"),"error")}finally{G(!1)}},pt=async()=>{ne(!1),await Se()},Pt=()=>he.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:I===1,onClick:()=>te(H=>Math.max(H-1,1)),children:"<"}),nt.map((H,se)=>H==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${se}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${I===H?"active":""}`,onClick:()=>te(Number(H)),children:H},`page-${H}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:I===qe||qe===0,onClick:()=>te(H=>Math.min(H+1,qe)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsx("select",{className:"pagination-size-select",value:ie,onChange:H=>{const se=Number(H.target.value);Jx(se)&&T(se)},children:Jo.map(H=>t.jsxs("option",{value:H,children:[H," / ",i("common.perPage")]},H))})})]}),[vt,Ke]=f.useState(null),[$t,Ot]=f.useState(!1),[ke,Sn]=f.useState(""),[De,pn]=f.useState(!1),[mn,Wt]=f.useState(!1);async function J(H){var ee,Me;H.preventDefault();const se=ke.trim();if(!(!se||!y)){pn(!0),Q(""),D("");try{await nu({name:se});const Ze=await bl();m(Ze);const Fe=Ze.filter(w=>w.name===se).sort((w,ce)=>ce.id-w.id)[0];if(Fe){const w=y.group_id??[];w.includes(Fe.id)||fn("group_id",[...w,Fe.id])}Sn(""),Ot(!1),(ee=window.showToast)==null||ee.call(window,i("node.groupCreateSuccess"),"success")}catch(Ze){Q(Ze instanceof Error?Ze.message:i("node.groupCreateFailed")),(Me=window.showToast)==null||Me.call(window,Ze instanceof Error?Ze.message:i("node.groupCreateFailed"),"error")}finally{pn(!1)}}}const Ae=(H,se)=>{if(!y)return;let ee=y[se];if(typeof ee=="string"&&ee.trim())try{ee=JSON.parse(ee)}catch{}["tlsSettings","tls_settings"].includes(se)&&In(String(y._type))&&(ee=oa(ee,Number(y.tls??0))),Ke({title:H,key:se,value:ee&&typeof ee=="object"?ee:{}})},Se=f.useCallback(async()=>{var H,se,ee,Me,Ze;$(!0),Q("");try{const[Fe,w,ce,pe]=await Promise.all([Tf(),bl(),Ux(),Dx()]);d(Fe.data),m(w),k(ce);const Ce=qf((H=pe.site)==null?void 0:H.app_url);re({apiHost:qf((se=pe.server)==null?void 0:se.server_api_url,Ce),apiKey:kt((ee=pe.server)==null?void 0:ee.server_token)}),me(ou(((Me=pe.subscribe)==null?void 0:Me.device_hwid_available)??((Ze=pe.subscribe)==null?void 0:Ze.device_hwid_enable)))}catch(Fe){Q(Fe instanceof Error?Fe.message:i("knowledge.loadFailed"))}finally{$(!1)}},[]),we=f.useCallback(async()=>{try{const H=await Tf();d(H.data)}catch(H){console.error("Refresh nodes failed",H)}},[]);async function Je(H){var ee;const se=await ui(H);(ee=window.showToast)==null||ee.call(window,i(se?"node.installCopied":"common.copyFailed"),se?"success":"error")}f.useEffect(()=>{if(!Bt()){s.replace("/login");return}Se()},[Se,s]);function Be(H){v(Gf(H)),S(null),Q(""),D("")}function Ge(H){v(Gf(H.type,H)),Q(""),D("")}function Ve(H){!Y||Number(H.online??0)<=0||s.push(`/device?node_type=${encodeURIComponent(H.type)}&node_id=${encodeURIComponent(String(H.id))}`)}function st(H,se){const ee=Number(H.online??0),Me=Y&&ee>0,Ze=`${se==="mobile"?"mobile-badge-pill":"online-badge"}${Me?" online-badge-link":""}`,Fe=se==="mobile"?12:13,w={...se==="mobile"?{marginRight:4}:{},color:ee>0?"#10b981":"var(--muted)",opacity:ee>0?1:.6},ce=t.jsxs(t.Fragment,{children:[t.jsx(Tx,{size:Fe,style:w}),ee]});return Me?t.jsx("button",{className:Ze,type:"button",title:i("node.viewOnlineDevices"),onClick:()=>Ve(H),children:ce}):t.jsx("span",{className:Ze,children:ce})}async function hn(H){var Fe,w,ce;if(H.preventDefault(),!y)return;G(!0),Q(""),D("");const se=String(y._type),ee={...y};if(In(se)&&!kt(ee.protocol)){Q(i("node.protocolRequired")),(Fe=window.showToast)==null||Fe.call(window,i("node.protocolRequired"),"error"),G(!1);return}for(const pe of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete ee[pe];if(ee.padding_scheme!==void 0&&ee.padding_scheme!==null&&typeof ee.padding_scheme!="string"&&(ee.padding_scheme=JSON.stringify(ee.padding_scheme)),ee.padding_scheme)try{const pe=JSON.parse(String(ee.padding_scheme));if(typeof pe!="object"||pe===null)throw new Error("Invalid JSON array or object")}catch(pe){Q("Invalid Padding Scheme configuration: "+(pe instanceof Error?pe.message:"JSON error")),G(!1);return}const Me=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const pe of Me)(ee[pe]===""||ee[pe]===null||ee[pe]===void 0)&&delete ee[pe];if(In(se)){const pe=String(ee.protocol??""),Ce=Number(ee.tls??0);ee.warp_settings=Wo(ee.warp_settings),Vo(pe)?Ko.includes(pe)&&Ce!==2||!Po(pe)&&Ce===2?(ee.tls=1,ee.tls_settings=oa(ee.tls_settings,1)):ee.tls_settings=oa(ee.tls_settings,Ce):(ee.tls=0,ee.tls_settings={})}const Ze=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings","warp_settings"];for(const pe of Ze){const Ce=ee[pe];(Ce==null||typeof Ce=="object"&&Object.keys(Ce).length===0)&&delete ee[pe]}ee.port!==void 0&&(ee.port=String(ee.port).trim()),ee.server_port!==void 0&&(ee.server_port=Number(ee.server_port)),ee.tls!==void 0&&(ee.tls=Number(ee.tls)),ee.rate!==void 0&&(ee.rate=Number(ee.rate));try{await U1(se,ee),v(null),(w=window.showToast)==null||w.call(window,i("node.saveSuccess"),"success"),await we()}catch(pe){Q(pe instanceof Error?pe.message:i("node.saveFailed")),(ce=window.showToast)==null||ce.call(window,pe instanceof Error?pe.message:i("node.saveFailed"),"error")}finally{G(!1)}}async function Et(H){const se=[...o];d(ee=>ee.map(Me=>Me.id===H.id&&Me.type===H.type?{...Me,show:H.show?0:1}:Me));try{await H1(H.type,H.id,H.show?0:1),await we()}catch(ee){d(se),Q(ee instanceof Error?ee.message:i("node.updateFailed"))}}async function ta(H){var se,ee;try{await L1(H.type,H.id),(se=window.showToast)==null||se.call(window,i("node.copySuccess"),"success"),await we()}catch(Me){Q(Me instanceof Error?Me.message:i("node.copyFailed")),(ee=window.showToast)==null||ee.call(window,Me instanceof Error?Me.message:i("node.copyFailed"),"error")}}async function Gt(H){var se;(se=window.showConfirm)==null||se.call(window,{message:i("node.deleteConfirm",{name:H.name}),onConfirm:async()=>{var Me,Ze;const ee=[...o];d(Fe=>Fe.filter(w=>!(w.id===H.id&&w.type===H.type))),Q("");try{await R1(H.type,H.id),(Me=window.showToast)==null||Me.call(window,i("node.deleteSuccess"),"success"),await we()}catch(Fe){d(ee),Q(Fe instanceof Error?Fe.message:i("node.deleteFailed")),(Ze=window.showToast)==null||Ze.call(window,Fe instanceof Error?Fe.message:i("node.deleteFailed"),"error")}}})}const fn=(H,se)=>v(ee=>{if(!ee)return null;const Me={...ee,[H]:se};if(!In(String(Me._type)))return Me;if(H==="tls_settings"&&(Me.tls_settings=oa(se,Number(Me.tls??0))),H==="tls"&&(Me.tls_settings=oa(Me.tls_settings,Number(se))),H==="warp_settings"&&(Me.warp_settings=Wo(se)),H==="protocol"){const Ze=String(se);Vo(Ze)?!Po(Ze)&&Number(Me.tls??0)===2?(Me.tls=1,Me.tls_settings=oa(Me.tls_settings,1)):Me.tls_settings=oa(Me.tls_settings,Number(Me.tls??0)):(Me.tls=0,Me.tls_settings={})}return Me}),Fn=y?String(y._type):"",xn=Bj(Fn);return t.jsxs(Vt,{title:i("node.title"),subtitle:i("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>S(j?null:"show"),title:i("node.createNode"),children:t.jsx(On,{size:18})}),j!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>S(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Xd.map(H=>{const se=li(H.value),ee=Qf[H.value]||Xo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Be(H.value),S(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:se==null?void 0:se.bg,backgroundColor:se==null?void 0:se.rowBg},children:t.jsx(ee,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(se==null?void 0:se.bg)??"var(--surface-soft)",color:(se==null?void 0:se.text)??"#ffffff"},children:H.label})]},H.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:x,onChange:H=>A(H.target.value),placeholder:`${i("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${K?"success-btn":""}`,type:"button",onClick:K?Ct:()=>ne(!0),disabled:W,children:i(K?W?"node.saving":"node.saveOrder":"node.editSortOrder")}),K&&t.jsx("button",{className:"ghost-button",type:"button",onClick:pt,children:i("common.cancel")})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,q?t.jsx("div",{className:"form-success",children:q}):null,_&&o.length===0?t.jsx(bt,{label:i("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[i("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",i("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",i("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",i("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:i("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:i("node.address")}),t.jsx("th",{className:"mobile-hide",children:i("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:i("node.colRate")}),t.jsx("th",{children:i("node.colGroups")}),t.jsx("th",{children:i(K?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[ct.map(H=>{const se=o.findIndex(ee=>ee.id===H.id&&ee.type===H.type);return t.jsxs("tr",{draggable:K,onDragStart:ee=>xe(ee,se),onDragOver:ee=>ze(ee,se),onDragEnd:_e,className:ae===se?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:li(H.type).bg,color:li(H.type).text,border:`1px solid ${li(H.type).border}`},children:H.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${H.show?"active":""}`,type:"button",onClick:()=>void Et(H),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${H.available_status??0}`,title:H.available_status===2?i("node.statusNormal"):H.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("strong",{children:H.name})]})}),t.jsx("td",{children:st(H,"desktop")}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:H.host})}),t.jsx("td",{className:"mobile-hide",children:String(H.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[H.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const ee=H.group_id??[],Me=ge[`${H.type}-${H.id}`],Ze=ee.map(ce=>{const pe=u.find(Ce=>Number(Ce.id)===Number(ce));return t.jsx("span",{className:"tag",children:(pe==null?void 0:pe.name)??`#${ce}`},ce)});if(ee.length<=3||Me)return t.jsxs(t.Fragment,{children:[Ze,ee.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>g(ce=>({...ce,[`${H.type}-${H.id}`]:!1})),children:i("node.collapse")})]});const Fe=Ze.slice(0,3),w=ee.length-3;return t.jsxs(t.Fragment,{children:[Fe,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>g(ce=>({...ce,[`${H.type}-${H.id}`]:!0})),children:["+",w,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:i("node.allPermissionGroups",{count:ee.length})}),Ze]})]})]})})()})}),t.jsx("td",{children:K?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(ms,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(C==null?void 0:C.id)===H.id&&(C==null?void 0:C.type)===H.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>de((C==null?void 0:C.id)===H.id&&(C==null?void 0:C.type)===H.type?null:{id:H.id,type:H.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(C==null?void 0:C.id)===H.id&&(C==null?void 0:C.type)===H.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>de(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ge(H),de(null)},children:[t.jsx(Jt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ta(H),de(null)},children:[t.jsx(gs,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Gt(H),de(null)},children:[t.jsx(nn,{size:14})," ",i("common.delete")]})]})]})]})})]},`${H.type}-${H.id}`)}),!_&&he.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")})})}):null]})]})}),Pt()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>S(j?null:"show"),title:i("node.createNode"),children:t.jsx(On,{size:20})}),j!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>S(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Xd.map(H=>{const se=li(H.value),ee=Qf[H.value]||Xo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Be(H.value),S(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:se==null?void 0:se.bg,backgroundColor:se==null?void 0:se.rowBg},children:t.jsx(ee,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(se==null?void 0:se.bg)??"var(--surface-soft)",color:(se==null?void 0:se.text)??"#ffffff"},children:H.label})]},H.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:x,onChange:H=>A(H.target.value),placeholder:`${i("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${K?"active":""}`,type:"button",onClick:()=>ne(!K),title:i("node.editSortOrder"),children:t.jsx(ms,{size:20})})]}),K&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:i("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:pt,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void Ct(),disabled:W,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i(W?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[ct.map(H=>{const se=o.findIndex(ee=>ee.id===H.id&&ee.type===H.type);return t.jsxs("div",{className:`mobile-node-card ${ae===se||R===se?"dragging":""}`,draggable:K,onDragStart:ee=>xe(ee,se),onDragOver:ee=>ze(ee,se),onDragEnd:_e,onTouchStart:ee=>He(ee,se),onTouchMove:U,onTouchEnd:fe,"data-index":se,style:K?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${H.available_status??0}`,title:H.available_status===2?i("node.statusNormal"):H.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:H.name})]}),t.jsx("div",{className:"card-header-right",children:K?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(ms,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${H.show===1?"active":""}`,onClick:()=>void Et(H),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(C==null?void 0:C.id)===H.id&&(C==null?void 0:C.type)===H.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>de((C==null?void 0:C.id)===H.id&&(C==null?void 0:C.type)===H.type?null:{id:H.id,type:H.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(C==null?void 0:C.id)===H.id&&(C==null?void 0:C.type)===H.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>de(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ge(H),de(null)},children:[t.jsx(Jt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ta(H),de(null)},children:[t.jsx(gs,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Gt(H),de(null)},children:[t.jsx(nn,{size:14})," ",i("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[H.host,":",H.port||H.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:li(H.type).bg,color:li(H.type).text,border:`1px solid ${li(H.type).border}`},children:H.id}),st(H,"mobile"),t.jsxs("span",{className:"mobile-badge-pill",children:[H.rate," x"]})]})]},`${H.type}-${H.id}`)}),!_&&he.length===0&&t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")}),Pt()]}),y!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:y.id?i("node.editNodeTitle",{type:xn}):i("node.createNodeTitle",{type:xn})}),t.jsx("p",{children:i("node.configureFieldsSubtitle",{type:xn})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>v(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:hn,children:[t.jsx(Fj,{draft:y,set:fn,groups:u,routes:h,nodes:o,onOpenJson:Ae,onAddGroup:()=>Ot(!0),onOpenTransportConfig:()=>Wt(!0)}),In(Fn)?t.jsx(lw,{draft:y,config:L,onCopy:H=>void Je(H),t:i}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>v(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Un,{size:16}),i(W?"node.saving":"common.save")]})]})]})]})}),vt!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:vt.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(vt.key)?i("node.connectionSecurityEditorSubtitle"):i("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ke(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(vt.key)?t.jsx(Kj,{initialValue:vt.value,isSnakeCase:vt.key==="tls_settings",tlsMode:Hj(y),nodeType:String((y==null?void 0:y._type)??""),onCancel:()=>Ke(null),onSave:H=>{fn(vt.key,H),Ke(null)}}):t.jsx(Px,{initialValue:vt.value,onCancel:()=>Ke(null),onSave:H=>{fn(vt.key,H),Ke(null)}})})]})}),$t&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.addNewGroupTitle")}),t.jsx("p",{children:i("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ot(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{onSubmit:J,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:i("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:ke,onChange:H=>Sn(H.target.value),placeholder:i("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Ot(!1),disabled:De,children:i("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:De||!ke.trim(),children:i(De?"node.saving":"common.confirm")})]})]})]})}),mn&&y!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.transportConfigTitle",{network:String(y.network??"tcp").toUpperCase()})}),t.jsx("p",{children:i("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Wt(!1),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(Jj,{draft:y,set:fn,onCancel:()=>Wt(!1),onSave:()=>Wt(!1)})})]})})]})}function ow(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,k]=f.useState(!0),[y,v]=f.useState(!1),[j,S]=f.useState(""),_=f.useCallback(async()=>{k(!0),S("");try{d(await bl())}catch(M){S(M instanceof Error?M.message:i("serverGroup.loadFailed"))}finally{k(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}_()},[_,s]);function $(M){m({id:M==null?void 0:M.id,name:(M==null?void 0:M.name)??""}),S("")}async function W(M){var Q;if(M.preventDefault(),!!u){v(!0),S("");try{await nu(u),m(null),(Q=window.showToast)==null||Q.call(window,i("serverGroup.saveSuccess"),"success"),await _()}catch(q){S(q instanceof Error?q.message:i("serverGroup.saveFailed"))}finally{v(!1)}}}async function G(M){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:i("serverGroup.deleteConfirm"),onConfirm:async()=>{var q,D;S("");try{await B0(M),(q=window.showToast)==null||q.call(window,i("serverGroup.deleteSuccess"),"success"),await _()}catch(I){S(I instanceof Error?I.message:i("serverGroup.deleteFailed")),(D=window.showToast)==null||D.call(window,I instanceof Error?I.message:i("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(Vt,{title:i("serverGroup.title"),subtitle:i("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverGroup.heading")}),t.jsx("p",{children:i("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:_,disabled:h,children:[t.jsx(At,{size:16}),i(h?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>$(),children:[t.jsx(On,{size:16}),i("serverGroup.add")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,h&&o.length===0?t.jsx(bt,{label:i("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverGroup.id")}),t.jsx("th",{children:i("serverGroup.name")}),t.jsx("th",{children:i("serverGroup.userCount")}),t.jsx("th",{children:i("serverGroup.serverCount")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:M.id}),t.jsx("td",{children:t.jsx("strong",{children:M.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Zo,{size:14}),M.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Xo,{size:14}),M.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>$(M),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void G(M.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},M.id)),!h&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:i("serverGroup.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?i("serverGroup.edit"):i("serverGroup.add")}),t.jsx("p",{children:i("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:u.name,onChange:M=>m({...u,name:M.target.value}),placeholder:i("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(Un,{size:16}),i(y?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function rw(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function cw(s){var i;return((i=Ox.find(o=>o.value===s))==null?void 0:i.label)??s}function dw(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,k]=f.useState(!0),[y,v]=f.useState(!1),[j,S]=f.useState(""),_=f.useCallback(async()=>{k(!0),S("");try{d(await Ux())}catch(M){S(M instanceof Error?M.message:i("serverRoute.loadFailed"))}finally{k(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}_()},[_,s]);function $(M){m(rw(M)),S("")}async function W(M){var q;if(M.preventDefault(),!u)return;v(!0),S("");const Q=u.action==="default_out"?[]:u.match.split(`
`).map(D=>D.trim()).filter(Boolean);try{await $0({id:u.id,remarks:u.remarks,match:Q,action:u.action,action_value:u.action_value||null}),m(null),(q=window.showToast)==null||q.call(window,i("serverRoute.saveSuccess"),"success"),await _()}catch(D){S(D instanceof Error?D.message:i("serverRoute.saveFailed"))}finally{v(!1)}}async function G(M){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:i("serverRoute.deleteConfirm"),onConfirm:async()=>{var q,D;S("");try{await G0(M),(q=window.showToast)==null||q.call(window,i("serverRoute.deleteSuccess"),"success"),await _()}catch(I){S(I instanceof Error?I.message:i("serverRoute.deleteFailed")),(D=window.showToast)==null||D.call(window,I instanceof Error?I.message:i("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(Vt,{title:i("serverRoute.title"),subtitle:i("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverRoute.heading")}),t.jsx("p",{children:i("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:_,disabled:h,children:[t.jsx(At,{size:16}),i(h?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>$(),children:[t.jsx(On,{size:16}),i("serverRoute.add")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,h&&o.length===0?t.jsx(bt,{label:i("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverRoute.id")}),t.jsx("th",{children:i("serverRoute.remarks")}),t.jsx("th",{children:i("serverRoute.matchValues")}),t.jsx("th",{children:i("serverRoute.action")}),t.jsx("th",{children:i("serverRoute.actionValue")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:M.id}),t.jsx("td",{children:t.jsx("strong",{children:M.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(M.match)?M.match:[]).slice(0,3).map((Q,q)=>t.jsx("span",{className:"tag",children:Q},q)),Array.isArray(M.match)&&M.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",M.match.length-3]}):null,!Array.isArray(M.match)||M.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:cw(M.action)})}),t.jsx("td",{children:M.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>$(M),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void G(M.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},M.id)),!h&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("serverRoute.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?i("serverRoute.edit"):i("serverRoute.add")}),t.jsx("p",{children:i("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:u.remarks,onChange:M=>m({...u,remarks:M.target.value}),placeholder:i("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.action")}),t.jsx("select",{className:"config-input",value:u.action,onChange:M=>m({...u,action:M.target.value}),children:Ox.map(M=>t.jsx("option",{value:M.value,children:M.label},M.value))})]}),u.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:u.match,onChange:M=>m({...u,match:M.target.value}),placeholder:i("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:u.action_value,onChange:M=>m({...u,action_value:M.target.value}),placeholder:i("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(Un,{size:16}),i(y?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function uw(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",allow_subscribe_url:(s==null?void 0:s.allow_subscribe_url)===0?"0":"1",force_update:!1}}function pw(s){const i=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:i(s.month_price),quarter_price:i(s.quarter_price),half_year_price:i(s.half_year_price),year_price:i(s.year_price),two_year_price:i(s.two_year_price),three_year_price:i(s.three_year_price),onetime_price:i(s.onetime_price),reset_price:i(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),allow_subscribe_url:s.allow_subscribe_url==="0"?0:1,force_update:s.force_update}}function un(s){return s==null?"—":cn(s)}function mw(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function hw(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState([]),[h,k]=f.useState(null),[y,v]=f.useState(!0),[j,S]=f.useState(!1),[_,$]=f.useState(""),[W,G]=f.useState(""),[M,Q]=f.useState(!1),[q,D]=f.useState(""),[I,te]=f.useState(!1),[ie,T]=f.useState(null),[K,ne]=f.useState(null),ge=(U,fe)=>{U.dataTransfer.effectAllowed="move",T(fe)},g=(U,fe)=>{if(U.preventDefault(),ie===null||ie===fe)return;const he=[...o],qe=he[ie];he.splice(ie,1),he.splice(fe,0,qe),T(fe),d(he)},L=async()=>{T(null);try{await zf(o.map(U=>U.id)),await x()}catch(U){$(U instanceof Error?U.message:i("plan.sortFailed")),await x()}},re=(U,fe)=>{ne(fe)},Y=U=>{if(K===null)return;const fe=U.touches[0],he=document.elementFromPoint(fe.clientX,fe.clientY);if(!he)return;const qe=he.closest("tr, [data-index]");if(!qe)return;const ct=qe.getAttribute("data-index");if(ct===null)return;const ut=Number(ct);if(ut!==K&&ut>=0&&ut<o.length){const nt=[...o],Ct=nt[K];nt.splice(K,1),nt.splice(ut,0,Ct),ne(ut),d(nt)}},me=async()=>{if(K!==null){ne(null);try{await zf(o.map(U=>U.id)),await x()}catch(U){$(U instanceof Error?U.message:i("plan.sortFailed")),await x()}}},x=f.useCallback(async()=>{v(!0),$("");try{const[U,fe]=await Promise.all([fi(),bl()]);d(U),m(fe)}catch(U){$(U instanceof Error?U.message:i("plan.loadFailed"))}finally{v(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}x()},[x,s]);function A(){k(null),Q(!1),D("")}function C(U){k(uw(U)),Q(!1),D(""),$(""),G("")}async function de(U){var fe,he;if(U.preventDefault(),!!h){S(!0),$(""),G("");try{await Y0(pw(h)),A(),(fe=window.showToast)==null||fe.call(window,i("plan.saveSuccess"),"success"),await x()}catch(qe){(he=window.showToast)==null||he.call(window,qe instanceof Error?qe.message:i("plan.saveFailed"),"error")}finally{S(!1)}}}async function ae(U,fe){var he;try{await gd(U,{show:fe?0:1}),await x()}catch(qe){(he=window.showToast)==null||he.call(window,qe instanceof Error?qe.message:i("plan.toggleFailed"),"error")}}async function z(U,fe){var he;try{await gd(U,{renew:fe?0:1}),await x()}catch(qe){(he=window.showToast)==null||he.call(window,qe instanceof Error?qe.message:i("plan.toggleFailed"),"error")}}async function R(U,fe){var he;try{await gd(U,{allow_subscribe_url:fe?0:1}),await x()}catch(qe){(he=window.showToast)==null||he.call(window,qe instanceof Error?qe.message:i("plan.toggleFailed"),"error")}}async function V(U){var fe;(fe=window.showConfirm)==null||fe.call(window,{message:i("plan.deleteConfirm"),onConfirm:async()=>{var he,qe;$(""),G("");try{await Q0(U),(he=window.showToast)==null||he.call(window,i("plan.deleteSuccess"),"success"),await x()}catch(ct){(qe=window.showToast)==null||qe.call(window,ct instanceof Error?ct.message:i("plan.deleteFailed"),"error")}}})}function xe(U){var fe;return((fe=u.find(he=>he.id===U))==null?void 0:fe.name)??`#${U}`}function ze(U){return Number(U.allow_subscribe_url??1)===1}function _e(U,fe){k(he=>he&&{...he,[U]:fe})}async function He(U){var he,qe;U.preventDefault();const fe=q.trim();if(!(!fe||!h)){te(!0),$(""),G("");try{await nu({name:fe});const ct=await bl();m(ct);const ut=ct.filter(nt=>nt.name===fe).sort((nt,Ct)=>Ct.id-nt.id)[0];ut&&_e("group_id",String(ut.id)),D(""),Q(!1),(he=window.showToast)==null||he.call(window,i("node.groupCreateSuccess"),"success")}catch(ct){const ut=ct instanceof Error?ct.message:i("node.groupCreateFailed");$(ut),(qe=window.showToast)==null||qe.call(window,ut,"error")}finally{te(!1)}}}return t.jsxs(Vt,{title:i("plan.title"),subtitle:i("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("plan.heading")}),t.jsx("p",{children:i("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:x,disabled:y,children:[t.jsx(At,{size:16}),i(y?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>C(),children:[t.jsx(On,{size:16}),i("plan.add")]})]})]}),_?t.jsx("div",{className:"form-error",children:_}):null,W?t.jsx("div",{className:"form-success",children:W}):null,y&&o.length===0?t.jsx(bt,{label:i("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:i("plan.show")}),t.jsx("th",{children:i("plan.renew")}),t.jsx("th",{children:i("plan.allowSubscribeUrl")}),t.jsx("th",{children:i("plan.name")}),t.jsx("th",{children:i("plan.users")}),t.jsx("th",{children:i("plan.group")}),t.jsx("th",{children:i("plan.pricing")}),t.jsx("th",{children:i("plan.traffic")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((U,fe)=>t.jsxs("tr",{draggable:!0,onDragStart:he=>ge(he,fe),onDragOver:he=>g(he,fe),onDragEnd:L,onTouchStart:he=>re(he,fe),onTouchMove:Y,onTouchEnd:me,"data-index":fe,className:ie===fe||K===fe?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:i("plan.sort"),children:t.jsx(ms,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:U.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:he=>{he.stopPropagation(),ae(U.id,U.show)},title:U.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.renew?"active":""}`,type:"button",onClick:he=>{he.stopPropagation(),z(U.id,U.renew)},title:U.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${ze(U)?"active":""}`,type:"button",onClick:he=>{he.stopPropagation(),R(U.id,ze(U)?1:0)},title:ze(U)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:U.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Zo,{size:14}),U.count??0]})}),t.jsx("td",{children:xe(U.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[U.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:un(U.month_price)})]}),U.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:un(U.quarter_price)})]}),U.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:un(U.half_year_price)})]}),U.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:un(U.year_price)})]}),U.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:un(U.two_year_price)})]}),U.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:un(U.three_year_price)})]}),U.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:un(U.onetime_price)})]}),U.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:un(U.reset_price)})]})]})}),t.jsxs("td",{children:[U.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:he=>{he.stopPropagation(),C(U)},children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:he=>{he.stopPropagation(),V(U.id)},children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},U.id)),!y&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:i("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((U,fe)=>t.jsxs("div",{className:`mobile-node-card ${ie===fe||K===fe?"dragging":""}`,draggable:!0,onDragStart:he=>ge(he,fe),onDragOver:he=>g(he,fe),onDragEnd:L,onTouchStart:he=>re(he,fe),onTouchMove:Y,onTouchEnd:me,"data-index":fe,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:i("plan.sort"),children:t.jsx(ms,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:U.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:U.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:he=>{he.stopPropagation(),C(U)},children:[t.jsx(Jt,{size:12}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:he=>{he.stopPropagation(),V(U.id)},children:[t.jsx(nn,{size:12}),i("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.show")}),t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:he=>{he.stopPropagation(),ae(U.id,U.show)},title:U.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.renew")}),t.jsx("button",{className:`admin-switch ${U.renew?"active":""}`,type:"button",onClick:he=>{he.stopPropagation(),z(U.id,U.renew)},title:U.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.allowSubscribeUrl")}),t.jsx("button",{className:`admin-switch ${ze(U)?"active":""}`,type:"button",onClick:he=>{he.stopPropagation(),R(U.id,ze(U)?1:0)},title:ze(U)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(Zo,{size:12,style:{marginRight:4}}),U.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:xe(U.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[U.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[U.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:un(U.month_price)})]}),U.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:un(U.quarter_price)})]}),U.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:un(U.half_year_price)})]}),U.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:un(U.year_price)})]}),U.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:un(U.two_year_price)})]}),U.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:un(U.three_year_price)})]}),U.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:un(U.onetime_price)})]}),U.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:un(U.reset_price)})]})]})]},U.id)),!y&&o.length===0?t.jsx("div",{className:"empty-state",children:i("plan.empty")}):null]}),h?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:h.id?i("plan.edit"):i("plan.add")}),t.jsx("p",{children:i("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:A,children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:de,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:U=>_e("name",U.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:h.content,onChange:U=>_e("content",U.target.value),placeholder:i("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[i("plan.group"),t.jsx("button",{type:"button",onClick:()=>Q(!0),style:{border:0,background:"transparent",color:"var(--accent)",padding:0,font:"inherit",fontSize:12,fontWeight:800,cursor:"pointer"},children:i("node.addGroup")})]}),t.jsxs("select",{className:"config-input",required:!0,value:h.group_id,onChange:U=>_e("group_id",U.target.value),children:[t.jsx("option",{value:"",children:i("plan.selectGroup")}),u.map(U=>t.jsx("option",{value:U.id,children:U.name},U.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:h.transfer_enable,onChange:U=>_e("transfer_enable",U.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:h.device_limit,onChange:U=>_e("device_limit",U.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:h.speed_limit,onChange:U=>_e("speed_limit",U.target.value),placeholder:i("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:h.capacity_limit,onChange:U=>_e("capacity_limit",U.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:h.reset_traffic_method,onChange:U=>_e("reset_traffic_method",U.target.value),children:mw(i).map(U=>t.jsx("option",{value:U.value,children:U.label},U.value))})]})]}),t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:h.allow_subscribe_url==="1",onChange:U=>_e("allow_subscribe_url",U.target.checked?"1":"0")}),t.jsx("span",{children:i("plan.allowSubscribeUrl")})]}),t.jsx("h3",{className:"form-section-title",children:i("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.month_price,onChange:U=>_e("month_price",U.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.quarter_price,onChange:U=>_e("quarter_price",U.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.half_year_price,onChange:U=>_e("half_year_price",U.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.year_price,onChange:U=>_e("year_price",U.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.two_year_price,onChange:U=>_e("two_year_price",U.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.three_year_price,onChange:U=>_e("three_year_price",U.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.onetime_price,onChange:U=>_e("onetime_price",U.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:h.reset_price,onChange:U=>_e("reset_price",U.target.value),placeholder:"—"})]})]}),h.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:h.force_update,onChange:U=>_e("force_update",String(U.target.checked))}),t.jsx("span",{children:i("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:A,children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Un,{size:16}),i(j?"plan.saving":"common.save")]})]})]})]})}):null,M&&h?t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.addNewGroupTitle")}),t.jsx("p",{children:i("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Q(!1),disabled:I,children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{onSubmit:He,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:i("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:q,onChange:U=>D(U.target.value),placeholder:i("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Q(!1),disabled:I,children:i("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:I||!q.trim(),children:i(I?"node.saving":"common.confirm")})]})]})]})}):null]})}const _d="模糊",Xf={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Zf={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Kf(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),u=String(i.getDate()).padStart(2,"0"),m=String(i.getHours()).padStart(2,"0"),h=String(i.getMinutes()).padStart(2,"0");return`${o}/${d}/${u} ${m}:${h}`}function Ff(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),u=String(i.getDate()).padStart(2,"0"),m=String(i.getHours()).padStart(2,"0"),h=String(i.getMinutes()).padStart(2,"0"),k=String(i.getSeconds()).padStart(2,"0");return`${o}-${d}-${u} ${m}:${h}:${k}`}function Jf(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Kn(s){return`${cn(Number(s??0))} ₫`}const Wx="adminzic_user_cache";function fw(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(Wx);return s?JSON.parse(s):{}}catch{return{}}}function xw(s){if(!(typeof window>"u"))try{sessionStorage.setItem(Wx,JSON.stringify(s))}catch{}}const xl=(s,i)=>`${s}:${i}`;function gw(){var Sn,De,pn,mn,Wt;const s=qt(),i=ra(),{t:o}=Qe(),d=f.useCallback(J=>{switch(J){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${J}`,cls:""}}},[o]),u=f.useCallback(J=>{const Ae=`order.period.${J}`,Se=o(Ae);return Se===Ae?Zf[J]??J:Se},[o]),[m,h]=f.useState([]),[k,y]=f.useState([]),[v,j]=f.useState({}),[S,_]=f.useState(0),[$,W]=f.useState(1),[G]=f.useState(15),[M,Q]=f.useState(""),[q,D]=f.useState("trade_no"),[I,te]=f.useState(!0),[ie,T]=f.useState(null),[K,ne]=f.useState(!1),[ge,g]=f.useState(""),[L,re]=f.useState(""),[Y,me]=f.useState(null),[x,A]=f.useState(null),[C,de]=f.useState(!1),[ae,z]=f.useState(null),[R,V]=f.useState(!1),[xe,ze]=f.useState(()=>fw()),_e=f.useCallback((J,Ae)=>{const Se=xl(Ae,J);A(null),me(we=>we===Se?null:Se)},[]),He=f.useCallback((J,Ae)=>{const Se=xl(Ae,J);me(null),A(we=>we===Se?null:Se)},[]),U=f.useCallback(J=>{const Ae=Number(J.coupon_id??0);return Ae?v[Ae]??`#${Ae}`:null},[v]);f.useEffect(()=>{if(!Y&&!x)return;const J=()=>{me(null),A(null)},Ae=we=>{const Je=we.target;Je!=null&&Je.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||J()},Se=we=>{we.key==="Escape"&&J()};return document.addEventListener("pointerdown",Ae),document.addEventListener("keydown",Se),()=>{document.removeEventListener("pointerdown",Ae),document.removeEventListener("keydown",Se)}},[Y,x]),f.useEffect(()=>{const J=new Set;if(m.forEach(Se=>{Se.user_id&&!xe[Se.user_id]&&J.add(Se.user_id),Se.invite_user_id&&!xe[Se.invite_user_id]&&J.add(Se.invite_user_id)}),ae&&(ae.user_id&&!xe[ae.user_id]&&J.add(ae.user_id),ae.invite_user_id&&!xe[ae.invite_user_id]&&J.add(ae.invite_user_id)),J.size===0)return;const Ae=Array.from(J);Promise.allSettled(Ae.map(async Se=>{try{const we=await Yd(Se);if(we&&we.data)return{id:Se,email:we.data.email,invite_user:we.data.invite_user}}catch(we){console.error(`Failed to fetch user ${Se}:`,we)}return null})).then(Se=>{const we={};Se.forEach(Je=>{var Be;if(Je.status==="fulfilled"&&Je.value){const Ge=Je.value;we[Ge.id]={email:Ge.email,invite_user_email:((Be=Ge.invite_user)==null?void 0:Be.email)||null},Ge.invite_user&&(we[Ge.invite_user.id]={email:Ge.invite_user.email})}}),Object.keys(we).length>0&&ze(Je=>{const Be={...Je,...we};return xw(Be),Be})})},[m,ae,xe]);const fe={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},he=f.useCallback(async(J=1,Ae,Se)=>{var we,Je;te(!0),g("");try{let Be;if(Ae)if(Se==="email"){const st=(we=(await Gd(1,1,[{key:"email",condition:_d,value:Ae}])).data)==null?void 0:we[0];if(!st){h([]),_(0),te(!1);return}Be=[{key:"user_id",condition:"=",value:String(st.id)}]}else if(Se==="invite_user_email"){const st=(Je=(await Gd(1,1,[{key:"email",condition:_d,value:Ae}])).data)==null?void 0:Je[0];if(!st){h([]),_(0),te(!1);return}Be=[{key:"invite_user_id",condition:"=",value:String(st.id)}]}else Be=[{key:Se||"trade_no",condition:Se==="trade_no"||Se==="user_id"||Se==="invite_user_id"||Se==="plan_id"||Se==="status"?"=":_d,value:Ae}];const Ge=await X0({current:J,pageSize:G,filter:Be});h(Ge.data),_(Ge.total)}catch(Be){g(Be instanceof Error?Be.message:o("order.loadFailed"))}finally{te(!1)}},[G,o]),qe=f.useCallback(J=>{const Ae=String(J);D("user_id"),Q(Ae),de(!0),W(1),he(1,Ae,"user_id")},[he]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}const J=new URLSearchParams(i.search),Ae=J.get("filter_email"),Se=J.get("invite_user_email"),we=J.get("user_id")||J.get("filter_user_id");let Je="",Be="trade_no";we?(Je=we,Be="user_id",D("user_id"),Q(we),de(!0)):Ae?(Je=Ae,Be="email",D("email"),Q(Ae),de(!0)):Se&&(Je=Se,Be="invite_user_email",D("invite_user_email"),Q(Se),de(!0)),he(1,Je,Be),fi().then(y).catch(()=>{}),Rx(1,1e3).then(Ge=>{const Ve={};Ge.data.forEach(st=>{Ve[st.id]=st.code}),j(Ve)}).catch(()=>{})},[he,s,i.search]);function ct(){W(1),he(1,M,q)}function ut(){Q(""),W(1),he(1)}function nt(J){W(J),he(J,M,q)}async function Ct(J){var Ae,Se;me(null),A(null),g(""),re("");try{await Z0(J),(Ae=window.showToast)==null||Ae.call(window,o("order.paidSuccess"),"success"),await he($,M,q)}catch(we){(Se=window.showToast)==null||Se.call(window,we instanceof Error?we.message:o("order.paidFailed"),"error")}}async function pt(J){var Ae,Se;me(null),A(null),g(""),re("");try{await K0(J),(Ae=window.showToast)==null||Ae.call(window,o("order.cancelSuccess"),"success"),await he($,M,q)}catch(we){(Se=window.showToast)==null||Se.call(window,we instanceof Error?we.message:o("order.cancelFailed"),"error")}}async function Pt(J,Ae){var Se,we;me(null),A(null),g(""),re("");try{await F0(J,Ae),(Se=window.showToast)==null||Se.call(window,o("order.commissionSuccess"),"success"),await he($,M,q)}catch(Je){(we=window.showToast)==null||we.call(window,Je instanceof Error?Je.message:o("order.commissionFailed"),"error")}}async function vt(J){z(J),V(!0);try{const Ae=await J0(J.id);Ae&&Ae.data&&z(Ae.data)}catch(Ae){console.error("Failed to fetch order detail:",Ae)}finally{V(!1)}}function Ke(){var J;T({email:"",plan_id:(J=k[0])!=null&&J.id?String(k[0].id):"",period:"month_price",total_amount:"0"}),g(""),re("")}async function $t(J){var Ae,Se;if(J.preventDefault(),!!ie){ne(!0),g(""),re("");try{await au({email:ie.email,plan_id:Number(ie.plan_id),period:ie.period,total_amount:Number(ie.total_amount)*100}),T(null),(Ae=window.showToast)==null||Ae.call(window,o("order.assignSuccess"),"success"),await he($,M,q)}catch(we){(Se=window.showToast)==null||Se.call(window,we instanceof Error?we.message:o("order.assignFailed"),"error")}finally{ne(!1)}}}const Ot=Math.ceil(S/G),ke=ae?U(ae):null;return t.jsxs(Vt,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${C?"active":""}`,type:"button",onClick:()=>de(!C),children:[t.jsx(bs,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ke,children:[t.jsx(On,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void he($,M,q),disabled:I,children:[t.jsx(At,{size:16}),o(I?"common.refreshing":"common.refresh")]})]}),C&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:q,onChange:J=>D(J.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(nr,{size:16}),t.jsx("input",{className:"config-input search-input",value:M,onChange:J=>Q(J.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:J=>J.key==="Enter"&&ct()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:ct,children:[t.jsx(bs,{size:16}),o("order.filter")]}),M?t.jsxs("button",{className:"ghost-button",type:"button",onClick:ut,children:[t.jsx(lt,{size:16}),o("order.clearFilter")]}):null]}),ge?t.jsx("div",{className:"form-error",children:ge}):null,L?t.jsx("div",{className:"form-success",children:L}):null,I&&m.length===0?t.jsx(bt,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${I?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[m.map(J=>{var Ge;const Ae=d(J.status),Se=J.invite_user_id!==null,we=fe[J.commission_status]??{label:`#${J.commission_status}`,dotClass:"pending"},Je=U(J),Be=(Ge=xe[J.user_id])==null?void 0:Ge.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>vt(J),title:o("order.detailsTitle"),children:Jf(J.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",J.id]}),t.jsx("span",{className:"order-type-pill",children:Xf[J.type]??`#${J.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[Be?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>qe(J.user_id),title:o("order.filterByUser"),children:Be}):t.jsxs("span",{className:"order-subline",children:["ID: ",J.user_id]}),t.jsx("strong",{className:"order-plan-name",children:J.plan_name??`Plan #${J.plan_id}`}),t.jsx("span",{className:"period-capsule",children:u(J.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Kn(J.total_amount)}),Je?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",Je]}):null,Number(J.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Kn(J.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ae.cls.replace("status-","")}`}),t.jsx("span",{children:Ae.label}),J.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ve=>{Ve.stopPropagation(),_e(J.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(Ma,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),Y===xl("desktop",J.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ve=>Ve.stopPropagation(),onClick:Ve=>Ve.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{me(null),Ct(J.trade_no)},children:[t.jsx(Ao,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{me(null),pt(J.trade_no)},children:[t.jsx(Oi,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[Se?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Kn(J.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${we.dotClass}`}),t.jsx("span",{children:we.label}),J.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ve=>{Ve.stopPropagation(),He(J.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(Ma,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),x===xl("desktop",J.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ve=>Ve.stopPropagation(),onClick:Ve=>Ve.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{A(null),Pt(J.trade_no,1)},children:[t.jsx(Ao,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{A(null),Pt(J.trade_no,3)},children:[t.jsx(Oi,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Kf(J.created_at)})})]},J.trade_no)}),!I&&m.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),Ot>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:$<=1,onClick:()=>nt($-1),children:t.jsx(Da,{size:16})}),t.jsxs("span",{className:"page-info",children:[$," / ",Ot]}),t.jsx("button",{className:"mini-button",disabled:$>=Ot,onClick:()=>nt($+1),children:t.jsx(Aa,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[m.map(J=>{var hn;const Ae=d(J.status),Se=J.invite_user_id!==null,we=fe[J.invite_user_id!==null?J.commission_status:0]??{label:`#${J.commission_status}`,dotClass:"pending"},Je=(hn=xe[J.user_id])==null?void 0:hn.email,Be=U(J),Ge=xl("mobile",J.trade_no),Ve=xl("mobile",J.trade_no),st=Y===Ge||x===Ve;return t.jsxs("div",{className:`mobile-order-card${st?" is-menu-open":""}`,children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>vt(J),children:Jf(J.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",J.id]})]}),t.jsx("div",{className:"mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ae.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:Ae.label}),J.status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Et=>{Et.stopPropagation(),_e(J.trade_no,"mobile")},"aria-expanded":Y===Ge,children:[o("order.markAs"),t.jsx(Ma,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),Y===Ge&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Et=>Et.stopPropagation(),onClick:Et=>Et.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{me(null),Ct(J.trade_no)},children:[t.jsx(Ao,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{me(null),pt(J.trade_no)},children:[t.jsx(Oi,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:Je?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>qe(J.user_id),children:Je}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",J.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:Xf[J.type]??`#${J.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:J.plan_name??`Plan #${J.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:u(J.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Kn(J.total_amount)})]}),Be?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:Be})})]}):null,Number(J.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Kn(J.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:Se?t.jsx("strong",{children:Kn(J.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),Se&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsx("div",{className:"value mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${we.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:we.label}),J.commission_status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Et=>{Et.stopPropagation(),He(J.trade_no,"mobile")},"aria-expanded":x===Ve,children:[o("order.markAs"),t.jsx(Ma,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),x===Ve&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Et=>Et.stopPropagation(),onClick:Et=>Et.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{A(null),Pt(J.trade_no,1)},children:[t.jsx(Ao,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{A(null),Pt(J.trade_no,3)},children:[t.jsx(Oi,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Kf(J.created_at)})]})]})]},J.trade_no)}),!I&&m.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,Ot>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:$<=1,onClick:()=>nt($-1),children:t.jsx(Da,{size:16})}),t.jsxs("span",{className:"page-info",children:[$," / ",Ot]}),t.jsx("button",{className:"mini-button",disabled:$>=Ot,onClick:()=>nt($+1),children:t.jsx(Aa,{size:16})})]}):null]})]}),ae?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>z(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:R?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(bt,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(Sn=xe[ae.user_id])!=null&&Sn.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{z(null),qe(ae.user_id)},title:"Filter by this user",children:xe[ae.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",ae.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:ae.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:u(ae.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(ae.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:ae.plan_name??`Plan #${ae.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:ae.callback_no||"-"})]}),ke?t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:ke})]}):null]}),ae.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(De=xe[ae.invite_user_id])!=null&&De.email||(pn=xe[ae.user_id])!=null&&pn.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const J=String(ae.invite_user_id);D("invite_user_id"),Q(J),de(!0),z(null),he(1,J,"invite_user_id")},title:"Filter by this inviter",children:((mn=xe[ae.invite_user_id])==null?void 0:mn.email)||((Wt=xe[ae.user_id])==null?void 0:Wt.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",ae.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Kn(ae.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(fe[ae.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(fe[ae.commission_status]??{label:`#${ae.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Kn(ae.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Kn(ae.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Kn(ae.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Kn(ae.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Kn(ae.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:Ff(ae.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:Ff(ae.updated_at)})]})]})]})})]})}):null,ie?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>T(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:$t,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:ie.email,onChange:J=>T({...ie,email:J.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:ie.plan_id,onChange:J=>T({...ie,plan_id:J.target.value}),children:k.map(J=>t.jsx("option",{value:J.id,children:J.name},J.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:ie.period,onChange:J=>T({...ie,period:J.target.value}),children:Object.entries(Zf).map(([J,Ae])=>t.jsx("option",{value:J,children:Ae},J))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:ie.total_amount,onChange:J=>T({...ie,total_amount:J.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>T(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:K,children:[t.jsx(Un,{size:16}),o(K?"order.assigning":"order.assign")]})]})]})]})}):null]})}function Ro(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Ho(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function Nd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function bw(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(0),[h,k]=f.useState(1),[y,v]=f.useState([]),[j,S]=f.useState(null),[_,$]=f.useState(!0),[W,G]=f.useState(!1),[M,Q]=f.useState(""),[q,D]=f.useState(""),[I,te]=f.useState("");f.useEffect(()=>{j||te("")},[j]);const ie=f.useCallback(async(g=1)=>{$(!0),Q("");try{const L=await Rx(g,15);d(L.data),m(L.total)}catch(L){Q(L instanceof Error?L.message:i("coupon.loadFailed"))}finally{$(!1)}},[]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}ie(1),fi().then(v).catch(()=>{})},[ie,s]);async function T(g){var L,re;if(g.preventDefault(),!!j){G(!0),Q(""),D("");try{const Y=j.type==="1"?Math.round(Number(j.value)*100):Number(j.value);await V0({id:j.id,name:j.name,type:Number(j.type),value:Y,code:j.code||void 0,started_at:Math.floor(new Date(j.started_at).getTime()/1e3),ended_at:Math.floor(new Date(j.ended_at).getTime()/1e3),limit_use:j.limit_use?Number(j.limit_use):null,limit_use_with_user:j.limit_use_with_user?Number(j.limit_use_with_user):null,limit_plan_ids:j.limit_plan_ids.length?j.limit_plan_ids:null,limit_period:j.limit_period.length?j.limit_period:null,generate_count:j.generate_count?Number(j.generate_count):void 0}),S(null),(L=window.showToast)==null||L.call(window,i("coupon.saveSuccess"),"success"),await ie(h)}catch(Y){(re=window.showToast)==null||re.call(window,Y instanceof Error?Y.message:i("coupon.saveFailed"),"error")}finally{G(!1)}}}async function K(g){var L;try{await W0(g),await ie(h)}catch(re){(L=window.showToast)==null||L.call(window,re instanceof Error?re.message:i("coupon.toggleFailed"),"error")}}async function ne(g){var L;(L=window.showConfirm)==null||L.call(window,{message:i("coupon.deleteConfirm"),onConfirm:async()=>{var re,Y;try{await P0(g),(re=window.showToast)==null||re.call(window,i("coupon.deleteSuccess"),"success"),await ie(h)}catch(me){(Y=window.showToast)==null||Y.call(window,me instanceof Error?me.message:i("coupon.deleteFailed"),"error")}}})}const ge=Math.ceil(u/15);return t.jsxs(Vt,{title:i("coupon.title"),subtitle:i("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("coupon.heading")}),t.jsxs("p",{children:[u," ",i("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void ie(h),disabled:_,children:[t.jsx(At,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>S(Nd()),children:[t.jsx(On,{size:16}),i("coupon.add")]})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,q?t.jsx("div",{className:"form-success",children:q}):null,_&&o.length===0?t.jsx(bt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("coupon.name")}),t.jsx("th",{children:i("coupon.code")}),t.jsx("th",{children:i("coupon.type")}),t.jsx("th",{children:i("coupon.value")}),t.jsx("th",{children:i("coupon.usageLimit")}),t.jsx("th",{children:i("coupon.limitPlans")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("coupon.limitPeriods")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(g=>{var me,x;const L=(me=g.limit_plan_ids)==null?void 0:me.map(A=>{var C;return((C=y.find(de=>de.id===A))==null?void 0:C.name)||`#${A}`}).join(", "),re=Ho(i),Y=(x=g.limit_period)==null?void 0:x.map(A=>re[A]||A).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:g.id}),t.jsx("td",{children:t.jsx("strong",{children:g.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:g.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:g.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:g.type===1?cn(g.value):`${g.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[i("coupon.maxUses"),": ",g.limit_use??"∞"]}),g.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[i("coupon.maxUses")," ",g.limit_use_with_user,"/",i("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[L?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[i("coupon.plans"),": ",L]})}):null,Y?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[i("coupon.cycles"),": ",Y]})}):null,!L&&!Y?t.jsx("span",{className:"tag muted-tag",children:i("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${g.show?"active":""}`,type:"button",onClick:()=>void K(g.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[Ro(g.started_at)," — ",Ro(g.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>S(Nd(g)),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(g.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},g.id)}),!_&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(g=>{var L,re,Y,me;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",g.id]}),t.jsx("span",{className:`tag type-tag ${g.type===1?"fixed-type":"percent-type"}`,children:g.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:g.name,children:g.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:i("coupon.clickToCopy"),onClick:()=>{ui(g.code).then(x=>{var A;(A=window.showToast)==null||A.call(window,x?`${i("coupon.copiedCode")}: ${g.code}`:i("common.copyFailed"),x?"success":"error")})},children:[t.jsx("code",{className:"mono",children:g.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(L=g.limit_plan_ids)!=null&&L.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:g.limit_plan_ids.map(x=>{const A=y.find(C=>C.id===x);return t.jsx("span",{className:"res-pill plan-pill",children:A?A.name:`#${x}`},x)})})]}):null,(re=g.limit_period)!=null&&re.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:g.limit_period.map(x=>t.jsx("span",{className:"res-pill cycle-pill",children:Ho(i)[x]||x},x))})]}):null,!((Y=g.limit_plan_ids)!=null&&Y.length)&&!((me=g.limit_period)!=null&&me.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Ro(g.started_at)," — ",Ro(g.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:i("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${g.show?"active":""}`,type:"button",onClick:()=>void K(g.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:g.type===1?cn(g.value).replace(/\s?₫/,""):`${g.value}`}),t.jsx("span",{className:"ticket-value-unit",children:g.type===1?"₫":i("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:g.limit_use??"∞"}),g.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[i("coupon.maxUses")," ",g.limit_use_with_user,"/",i("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>S(Nd(g)),"aria-label":i("common.edit"),children:t.jsx(Jt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(g.id),"aria-label":i("common.delete"),children:t.jsx(nn,{size:15})})]})]})]},g.id)}),!_&&o.length===0?t.jsx("div",{className:"empty-state",children:i("coupon.empty")}):null]}),ge>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:h<=1,onClick:()=>{k(h-1),ie(h-1)},children:t.jsx(Da,{size:16})}),t.jsxs("span",{className:"page-info",children:[h," / ",ge]}),t.jsx("button",{className:"mini-button",disabled:h>=ge,onClick:()=>{k(h+1),ie(h+1)},children:t.jsx(Aa,{size:16})})]}):null,j?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:j.id?i("coupon.edit"):i("coupon.add")}),t.jsx("p",{children:i("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:T,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:j.name,onChange:g=>S({...j,name:g.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.type")}),t.jsxs("select",{className:"config-input",value:j.type,onChange:g=>S({...j,type:g.target.value}),children:[t.jsx("option",{value:"1",children:i("coupon.type.fixed")}),t.jsx("option",{value:"2",children:i("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:j.value,onChange:g=>S({...j,value:g.target.value})})]})]}),j.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[i("coupon.code")," (",i("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:j.code,onChange:g=>S({...j,code:g.target.value}),placeholder:i("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.started_at,onChange:g=>S({...j,started_at:g.target.value}),onClick:g=>{var L,re;return(re=(L=g.currentTarget).showPicker)==null?void 0:re.call(L)},onFocus:g=>{var L,re;return(re=(L=g.currentTarget).showPicker)==null?void 0:re.call(L)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.ended_at,onChange:g=>S({...j,ended_at:g.target.value}),onClick:g=>{var L,re;return(re=(L=g.currentTarget).showPicker)==null?void 0:re.call(L)},onFocus:g=>{var L,re;return(re=(L=g.currentTarget).showPicker)==null?void 0:re.call(L)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use,onChange:g=>S({...j,limit_use:g.target.value}),placeholder:i("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use_with_user,onChange:g=>S({...j,limit_use_with_user:g.target.value}),placeholder:i("coupon.unlimited")})]})]}),j.id?null:t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.generate_count,onChange:g=>S({...j,generate_count:g.target.value}),placeholder:i("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPlans")}),j.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:j.limit_plan_ids.map(g=>{const L=y.find(re=>re.id===g);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const re=j.limit_plan_ids.filter(Y=>Y!==g);S({...j,limit_plan_ids:re})},children:[L?L.name:`#${g}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},g)})}),y.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("coupon.searchPlans"),value:I,onChange:g=>te(g.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[y.filter(g=>g.name.toLowerCase().includes(I.toLowerCase())).map(g=>{const L=j.limit_plan_ids.includes(g.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:L,onChange:re=>{const Y=re.target.checked?[...j.limit_plan_ids,g.id]:j.limit_plan_ids.filter(me=>me!==g.id);S({...j,limit_plan_ids:Y})}}),t.jsx("span",{children:g.name})]},g.id)}),y.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPeriods")}),j.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:j.limit_period.map(g=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const L=j.limit_period.filter(re=>re!==g);S({...j,limit_period:L})},children:[Ho(i)[g]||g," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},g))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(Ho(i)).map(([g,L])=>{const re=j.limit_period.includes(g);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:re,onChange:Y=>{const me=Y.target.checked?[...j.limit_period,g]:j.limit_period.filter(x=>x!==g);S({...j,limit_period:me})}}),t.jsx("span",{children:L})]},g)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Un,{size:16}),i(W?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Lo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function yw(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function Sd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function vw(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(0),[h,k]=f.useState(1),[y,v]=f.useState([]),[j,S]=f.useState(null),[_,$]=f.useState(!0),[W,G]=f.useState(!1),[M,Q]=f.useState(""),[q,D]=f.useState(""),[I,te]=f.useState("");f.useEffect(()=>{j||te("")},[j]);const ie=yw(i),T=f.useCallback(async(g=1)=>{$(!0),Q("");try{const L=await I0(g,15);d(L.data),m(L.total)}catch(L){Q(L instanceof Error?L.message:i("giftcard.loadFailed"))}finally{$(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}T(1),fi().then(v).catch(()=>{})},[T,s]);async function K(g){var L,re;if(g.preventDefault(),!!j){G(!0),Q(""),D("");try{const Y=j.type==="1"?Math.round(Number(j.value)*100):Number(j.value);await e1({id:j.id,name:j.name,type:Number(j.type),value:Y,code:j.code||void 0,started_at:Math.floor(new Date(j.started_at).getTime()/1e3),ended_at:Math.floor(new Date(j.ended_at).getTime()/1e3),limit_use:j.limit_use?Number(j.limit_use):null,plan_id:j.plan_id?Number(j.plan_id):null,generate_count:j.generate_count?Number(j.generate_count):void 0}),S(null),(L=window.showToast)==null||L.call(window,i("giftcard.saveSuccess"),"success"),await T(h)}catch(Y){(re=window.showToast)==null||re.call(window,Y instanceof Error?Y.message:i("giftcard.saveFailed"),"error")}finally{G(!1)}}}async function ne(g){var L;(L=window.showConfirm)==null||L.call(window,{message:i("giftcard.deleteConfirm"),onConfirm:async()=>{var re,Y;try{await t1(g),(re=window.showToast)==null||re.call(window,i("giftcard.deleteSuccess"),"success"),await T(h)}catch(me){(Y=window.showToast)==null||Y.call(window,me instanceof Error?me.message:i("giftcard.deleteFailed"),"error")}}})}const ge=Math.ceil(u/15);return t.jsxs(Vt,{title:i("giftcard.title"),subtitle:i("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("giftcard.heading")}),t.jsxs("p",{children:[u," ",i("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void T(h),disabled:_,children:[t.jsx(At,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>S(Sd()),children:[t.jsx(On,{size:16}),i("giftcard.add")]})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,q?t.jsx("div",{className:"form-success",children:q}):null,_&&o.length===0?t.jsx(bt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("giftcard.thId")}),t.jsx("th",{children:i("giftcard.thName")}),t.jsx("th",{children:i("giftcard.thCode")}),t.jsx("th",{children:i("giftcard.thType")}),t.jsx("th",{children:i("giftcard.thValue")}),t.jsx("th",{children:i("giftcard.thBoundPlan")}),t.jsx("th",{children:i("giftcard.thUses")}),t.jsx("th",{children:i("giftcard.thPeriod")}),t.jsx("th",{children:i("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(g=>{var L;return t.jsxs("tr",{children:[t.jsx("td",{children:g.id}),t.jsx("td",{children:t.jsx("strong",{children:g.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:g.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:ie[g.type]??g.type})}),t.jsx("td",{children:t.jsx("strong",{children:g.type===1?cn(g.value):g.value})}),t.jsx("td",{children:g.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((L=y.find(re=>re.id===g.plan_id))==null?void 0:L.name)||`#${g.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:i("giftcard.planNone")})}),t.jsx("td",{children:g.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Lo(g.started_at)," — ",Lo(g.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>S(Sd(g)),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(g.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},g.id)}),!_&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(g=>{var L;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",g.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:ie[g.type]??g.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:g.name,children:g.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:i("giftcard.clickToCopy"),onClick:()=>{ui(g.code).then(re=>{var Y;(Y=window.showToast)==null||Y.call(window,re?i("giftcard.copiedCode").replace("{code}",g.code):i("common.copyFailed"),re?"success":"error")})},children:[t.jsx("code",{className:"mono",children:g.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:g.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((L=y.find(re=>re.id===g.plan_id))==null?void 0:L.name)||`#${g.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Lo(g.started_at)," — ",Lo(g.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:g.type===1?cn(g.value).replace(/\s?₫/,""):`${g.value}`}),t.jsx("span",{className:"ticket-value-unit",children:g.type===1?"₫":ie[g.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:g.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>S(Sd(g)),"aria-label":i("common.edit"),children:t.jsx(Jt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(g.id),"aria-label":i("common.delete"),children:t.jsx(nn,{size:15})})]})]})]},g.id)}),!_&&o.length===0?t.jsx("div",{className:"empty-state",children:i("giftcard.empty")}):null]}),ge>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:h<=1,onClick:()=>{k(h-1),T(h-1)},children:t.jsx(Da,{size:16})}),t.jsxs("span",{className:"page-info",children:[h," / ",ge]}),t.jsx("button",{className:"mini-button",disabled:h>=ge,onClick:()=>{k(h+1),T(h+1)},children:t.jsx(Aa,{size:16})})]}):null,j?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:j.id?i("giftcard.edit"):i("giftcard.create")}),t.jsx("p",{children:i("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:K,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:j.name,onChange:g=>S({...j,name:g.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:j.type,onChange:g=>S({...j,type:g.target.value}),children:Object.entries(ie).map(([g,L])=>t.jsx("option",{value:g,children:L},g))})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:j.value,onChange:g=>S({...j,value:g.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.started_at,onChange:g=>S({...j,started_at:g.target.value}),onClick:g=>{var L,re;return(re=(L=g.currentTarget).showPicker)==null?void 0:re.call(L)},onFocus:g=>{var L,re;return(re=(L=g.currentTarget).showPicker)==null?void 0:re.call(L)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.ended_at,onChange:g=>S({...j,ended_at:g.target.value}),onClick:g=>{var L,re;return(re=(L=g.currentTarget).showPicker)==null?void 0:re.call(L)},onFocus:g=>{var L,re;return(re=(L=g.currentTarget).showPicker)==null?void 0:re.call(L)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use,onChange:g=>S({...j,limit_use:g.target.value}),placeholder:i("giftcard.placeholderUnlimited")})]}),j.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.generate_count,onChange:g=>S({...j,generate_count:g.target.value}),placeholder:i("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("giftcard.bindPlan")}),j.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const g=y.find(L=>String(L.id)===j.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{S({...j,plan_id:""})},children:[g?g.name:`#${j.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),y.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("giftcard.searchPlans"),value:I,onChange:g=>te(g.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!j.plan_id,onChange:()=>{S({...j,plan_id:""})}}),t.jsx("span",{children:i("giftcard.noneAllPlans")})]}),y.filter(g=>g.name.toLowerCase().includes(I.toLowerCase())).map(g=>{const L=String(g.id)===j.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:L,onChange:re=>{re.target.checked&&S({...j,plan_id:String(g.id)})}}),t.jsx("span",{children:g.name})]},g.id)}),y.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Un,{size:16}),i(W?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const cs="Tương đối",Ta="=";function qo(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function jw(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Vf(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function kd(s){return+(s/1073741824).toFixed(2)}function Cd(s){return Math.round(s*1073741824)}function Bo(s){return(s/1073741824).toFixed(2)}function ww(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function gl(s){if(s===0)return"0.00 MB";const i=s/1073741824;return i<.1?`${(s/1048576).toFixed(2)} MB`:`${i.toFixed(2)} GB`}const Kd=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Ix="user_visible_columns";function _w(){if(typeof window<"u")try{const s=localStorage.getItem(Ix);if(s)return new Set(JSON.parse(s))}catch{}return new Set(Kd.filter(s=>s.defaultVisible).map(s=>s.key))}const Io=[{value:"email",label:"Email",condition:cs,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:Ta,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:Ta,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:Ta,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:Ta,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:cs,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:Ta,placeholder:"12345"},{value:"uuid",label:"UUID",condition:cs,placeholder:"UUID"},{value:"token",label:"Token",condition:cs,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:cs,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:Ta,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:Ta,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:Ta,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:Ta,placeholder:"1780366403"}],Nw=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function rn(s,i){switch(s){case"id":return i("user.colId");case"email":return i("user.colEmail");case"status":return i("user.colStatus");case"plan":return i("user.colPlan");case"group":return i("user.colGroup");case"used":return i("user.colUsed");case"traffic":return i("user.colTraffic");case"devices":return i("user.colDevices");case"expires":return i("user.colExpires");case"balance":return i("user.colBalance");case"commission":return i("user.colCommission");case"joined":return i("user.colJoined");case"actions":return i("user.colActions");default:return""}}function Sw(s,i){var u;const o=((u=Io.find(m=>m.value===s))==null?void 0:u.label)??s,d=m=>{const h=i(m);return h===m?o:h};switch(s){case"email":return i("user.filterEmail");case"id":return i("user.filterId");case"plan_id":return i("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return i("user.filterInviterEmail");case"invite_user_id":return i("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return i("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function zd(s){return Io.find(i=>i.value===s)??Io[0]}function kw(s,i){switch(s){case"month_price":return i("order.period.month_price");case"quarter_price":return i("order.period.quarter_price");case"half_year_price":return i("order.period.half_year_price");case"year_price":return i("order.period.year_price");case"two_year_price":return i("order.period.two_year_price");case"three_year_price":return i("order.period.three_year_price");case"onetime_price":return i("order.period.onetime_price");case"reset_price":return i("order.period.reset_price");default:return""}}function Cw(){const s=qt(),i=ra(),{t:o}=Qe(),[d,u]=f.useState([]),[m,h]=f.useState([]),[k,y]=f.useState([]),[v,j]=f.useState(0),[S,_]=f.useState(1),[$,W]=f.useState(""),[G,M]=f.useState("email"),[Q,q]=f.useState(!0),[D,I]=f.useState(""),[te,ie]=f.useState(_w),[T,K]=f.useState(!1),ne=f.useRef(null),[ge,g]=f.useState(null),[L,re]=f.useState(null),[Y,me]=f.useState(null),[x,A]=f.useState({}),[C,de]=f.useState(!1),[ae,z]=f.useState(!1),[R,V]=f.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[xe,ze]=f.useState(!1),[_e,He]=f.useState(null),[U,fe]=f.useState({plan_id:"",period:"month_price",total_amount:""}),[he,qe]=f.useState(!1),[ct,ut]=f.useState(null),[nt,Ct]=f.useState(null),[pt,Pt]=f.useState([]),[vt,Ke]=f.useState(0),[$t,Ot]=f.useState(1),[ke]=f.useState(10),[Sn,De]=f.useState(!1),[pn,mn]=f.useState("");f.useEffect(()=>{function N(be){const ve=be.target instanceof Element?be.target:null;ge!==null&&(!ve||!ve.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(g(null),re(null)),T&&ne.current&&!ne.current.contains(be.target)&&K(!1)}return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[ge,T]),f.useEffect(()=>{if(ge===null)return;const N=()=>{g(null),re(null)};return window.addEventListener("resize",N),window.addEventListener("scroll",N,!0),()=>{window.removeEventListener("resize",N),window.removeEventListener("scroll",N,!0)}},[ge]);function Wt(N,be){if(ge===N){g(null),re(null);return}const ve=be.getBoundingClientRect(),Ue=220,it=392,bn=6,Yt=8,na=Math.max(Yt,Math.min(window.innerWidth-Ue-Yt,ve.right-Ue)),Ua=ve.bottom+bn+it<=window.innerHeight-Yt?ve.bottom+bn:Math.max(Yt,ve.top-it-bn);re({top:Ua,left:na}),g(N)}function J(){g(null),re(null)}function Ae(N,be=!1,ve=""){const Ue=it=>{J(),it()};return t.jsxs("div",{className:`action-dropdown-menu ${be?"action-dropdown-menu-fixed":""} ${ve}`.trim(),style:be&&L?{top:L.top,left:L.left}:void 0,onMouseDown:it=>it.stopPropagation(),children:[t.jsxs("button",{type:"button",onClick:()=>Ue(()=>ca(N)),children:[t.jsx(Jt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>jt(N)),children:[t.jsx(zx,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>void se(N)),children:[t.jsx(Ea,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>Ze(N)),children:[t.jsx(qd,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>ee(N)),children:[t.jsx(eu,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>Fe(N)),children:[t.jsx(Gv,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>w(N)),children:[t.jsx(Hd,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>ce(N)),children:[t.jsx(Zo,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>Ce(N)),children:[t.jsx(_f,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Ue(()=>Me(N)),children:[t.jsx(nn,{size:14}),o("user.actionDelete")]})]})}function Se(N){ie(be=>{const ve=new Set(be);ve.has(N)?ve.delete(N):ve.add(N);try{localStorage.setItem(Ix,JSON.stringify([...ve]))}catch{}return ve})}const we=N=>te.has(N),Je=Kd.filter(N=>te.has(N.key)).length,Be=f.useCallback(async(N=1,be,ve)=>{q(!0),I("");try{const Ue=be==null?void 0:be.trim(),it=zd(ve||"email"),bn=Ue?[{key:it.value,condition:it.condition,value:Ue}]:void 0,Yt=await Gd(N,15,bn);u(Yt.data),j(Yt.total)}catch(Ue){I(Ue instanceof Error?Ue.message:o("user.loadFailed"))}finally{q(!1)}},[]),Ge=f.useCallback(async()=>{try{const[N,be]=await Promise.all([fi(),bl()]);h(N),y(be)}catch{}},[]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}const N=new URLSearchParams(i.search),ve=[["email",N.get("email")||N.get("filter_email")],["id",N.get("id")||N.get("user_id")||N.get("filter_user_id")],["plan_id",N.get("plan_id")],["invite_user_id",N.get("invite_user_id")],["invite_by_email",N.get("invite_by_email")],["uuid",N.get("uuid")],["token",N.get("token")],["remarks",N.get("remarks")]].find(([,Ue])=>Ue==null?void 0:Ue.trim());if(ve){const[Ue,it]=ve,bn=zd(Ue),Yt=(it==null?void 0:it.trim())??"";M(bn.value),W(Yt),_(1),Be(1,Yt,bn.value)}else Be(1);Ge()},[Be,Ge,s,i.search]);function Ve(){_(1),Be(1,$,G)}function st(){W(""),_(1),Be(1)}function hn(N){_(N),Be(N,$,G)}function Et(N){if(N.plan_name)return N.plan_name;if(!N.plan_id)return"—";const be=m.find(ve=>ve.id===N.plan_id);return be?be.name:`#${N.plan_id}`}function ta(N){if(!N.group_id)return"—";const be=k.find(ve=>ve.id===N.group_id);return be?be.name:`#${N.group_id}`}function Gt(N,be){const ve=o(N);return ve===N?be:ve}function fn(N){const be=Number(N.device_limit??0);return be>0?`${Number(N.device_bound_count??0)} / ${be}`:Gt("user.unlimited","Unlimited")}function Fn(N){const be=Number(N.device_bound_count??0),ve=Number(N.device_pending_count??0),Ue=Number(N.device_banned_count??0),it=Number(N.device_online_count??0),bn=Number(N.alive_ip??0),Yt=Number(N.device_limit??0),na=Yt>0?`${be} / ${Yt}`:`${be} / ${Gt("user.unlimited","Unlimited")}`,da=[`${Gt("user.deviceBound","Bound")}: ${na}`,`${Gt("user.devicePending","Pending")}: ${ve}`,`${Gt("user.deviceBanned","Banned")}: ${Ue}`,`${Gt("user.deviceOnline","Online devices")}: ${it}`,`${Gt("user.deviceOnlineIp","Online IP")}: ${bn}`];return N.ips&&da.push(N.ips),da.join(`
`)}function xn(N){s.push(`/device?user_id=${encodeURIComponent(String(N.id))}`)}function H(N,be="left"){const ve=`${Gt("user.deviceOnlineShort","Online")}: ${Number(N.device_online_count??0)} | ${Gt("user.deviceIpShort","IP")}: ${Number(N.alive_ip??0)}`;return t.jsxs("button",{className:`device-cell-button ${be==="right"?"align-right":""}`,type:"button",title:Fn(N),onClick:()=>xn(N),children:[t.jsx("span",{className:"device-cell-primary",children:fn(N)}),t.jsx("span",{className:"device-cell-secondary",children:ve})]})}async function se(N){var Ue,it;const be=N.subscribe_url;if(!be){(Ue=window.showToast)==null||Ue.call(window,o("user.toastNoSubscribeUrl"),"error");return}const ve=await ui(be);(it=window.showToast)==null||it.call(window,o(ve?"user.toastUrlCopied":"common.copyFailed"),ve?"success":"error"),g(null)}function ee(N){var be;g(null),(be=window.showConfirm)==null||be.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var ve,Ue;try{await l1(N.id),(ve=window.showToast)==null||ve.call(window,o("user.toastSecretResetSuccess"),"success"),await Be(S,$,G)}catch(it){(Ue=window.showToast)==null||Ue.call(window,it instanceof Error?it.message:o("user.toastSecretResetFailed"),"error")}}})}function Me(N){var be;g(null),(be=window.showConfirm)==null||be.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var ve,Ue;try{await a1(N.id),(ve=window.showToast)==null||ve.call(window,o("user.toastDeletedSuccess"),"success"),await Be(S,$,G)}catch(it){(Ue=window.showToast)==null||Ue.call(window,it instanceof Error?it.message:o("user.toastDeletedFailed"),"error")}}})}function Ze(N){var ve;g(null);const be=N.subscribe_url;if(!be){(ve=window.showToast)==null||ve.call(window,o("user.toastNoSubscribeUrl"),"error");return}ut({url:be,userId:N.id})}function Fe(N){g(null),s.push(`/order?user_id=${N.id}`)}function w(N){g(null),s.push(`/subscription?user_id=${N.id}`)}function ce(N){g(null),M("invite_user_id"),W(String(N.id)),Be(1,String(N.id),"invite_user_id")}async function pe(N,be){De(!0),mn("");try{const ve=await u1(N,be,ke);Pt(ve.data||[]),Ke(ve.total||0),Ot(be)}catch(ve){mn(ve instanceof Error?ve.message:o("user.historyLoading"))}finally{De(!1)}}function Ce(N){g(null),Ct(N),pe(N.id,1)}function jt(N){g(null),He(N.email),fe({plan_id:"",period:"month_price",total_amount:""})}async function Rn(N){var be,ve;if(N.preventDefault(),!!_e){qe(!0);try{await au({email:_e,plan_id:Number(U.plan_id),period:U.period,total_amount:(Number(U.total_amount)||0)*100}),(be=window.showToast)==null||be.call(window,o("user.toastAssignSuccess"),"success"),He(null)}catch(Ue){(ve=window.showToast)==null||ve.call(window,Ue instanceof Error?Ue.message:o("user.toastAssignFailed"),"error")}finally{qe(!1)}}}function ca(N){g(null),me(N),A({id:N.id,email:N.email,invite_user_email:"",password:"",balance:N.balance,commission_balance:N.commission_balance,u:kd(N.u),d:kd(N.d),transfer_enable:kd(N.transfer_enable),device_limit:N.device_limit,expired_at:jw(N.expired_at),plan_id:N.plan_id,banned:N.banned,commission_type:N.commission_type??0,commission_rate:N.commission_rate??"",discount:N.discount??"",speed_limit:N.speed_limit,is_admin:N.is_admin,is_staff:N.is_staff,remarks:N.remarks??""})}function Nt(N,be){A(ve=>({...ve,[N]:be}))}async function Jn(N){var be,ve;if(N.preventDefault(),!!Y){de(!0);try{const Ue={id:Y.id,email:x.email,plan_id:x.plan_id||null,expired_at:Vf(String(x.expired_at??"")),transfer_enable:Cd(Number(x.transfer_enable??0)),speed_limit:x.speed_limit||null,device_limit:x.device_limit||null,u:Cd(Number(x.u??0)),d:Cd(Number(x.d??0)),balance:Number(x.balance??0),commission_balance:Number(x.commission_balance??0),commission_rate:x.commission_rate!==""&&x.commission_rate!==null?Number(x.commission_rate):null,commission_type:Number(x.commission_type??0),discount:x.discount!==""&&x.discount!==null?Number(x.discount):null,remarks:x.remarks||null,is_admin:Number(x.is_admin??0),is_staff:Number(x.is_staff??0),banned:Number(x.banned??0)};x.invite_user_email&&(Ue.invite_user_email=x.invite_user_email),x.password&&(Ue.password=x.password),await n1(Ue),(be=window.showToast)==null||be.call(window,o("user.toastSaveSuccess"),"success"),me(null),await Be(S,$,G)}catch(Ue){(ve=window.showToast)==null||ve.call(window,Ue instanceof Error?Ue.message:o("user.toastSaveFailed"),"error")}finally{de(!1)}}}async function Ut(N){var be,ve;N.preventDefault(),ze(!0);try{await i1({email_prefix:R.email_prefix,email_suffix:R.email_suffix,password:R.password||void 0,plan_id:R.plan_id?Number(R.plan_id):void 0,expired_at:Vf(R.expired_at)}),(be=window.showToast)==null||be.call(window,o("user.toastCreateSuccess"),"success"),z(!1),V({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await Be(S,$,G)}catch(Ue){(ve=window.showToast)==null||ve.call(window,Ue instanceof Error?Ue.message:o("user.toastCreateFailed"),"error")}finally{ze(!1)}}const zt=Math.ceil(v/15),Oa=zd(G);return t.jsxs(Vt,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[v," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:ne,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>K(!T),children:[t.jsx(Rv,{size:16}),o("user.columns")]}),T?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:Je})})}),Kd.map(N=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:te.has(N.key),onChange:()=>Se(N.key)}),t.jsx("span",{children:rn(N.key,o)})]},N.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Be(S,$,G),disabled:Q,children:[t.jsx(At,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>z(!0),children:[t.jsx(On,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:G,onChange:N=>M(N.target.value),children:Io.map(N=>t.jsx("option",{value:N.value,children:Sw(N.value,o)},N.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(nr,{size:16}),t.jsx("input",{className:"config-input search-input",value:$,onChange:N=>W(N.target.value),placeholder:Oa.placeholder,onKeyDown:N=>N.key==="Enter"&&Ve()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ve,children:[t.jsx(bs,{size:16}),o("user.filter")]}),$?t.jsxs("button",{className:"ghost-button",type:"button",onClick:st,children:[t.jsx(lt,{size:16}),o("user.clearFilter")]}):null]}),D?t.jsx("div",{className:"form-error",children:D}):null,Q&&d.length===0?t.jsx(bt,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${Q?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(N=>{const be=Bo(N.u+N.d),ve=Bo(N.transfer_enable),Ue=parseFloat(be);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",N.id]}),t.jsx("span",{className:"user-email",title:N.email,children:N.email})]}),N.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Et(N)," / ",N.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):ta(N)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Ue>0?Ue>parseFloat(ve)*.9?"high":"ok":""}`,children:[be," GB"]})," / ",ve," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:rn("devices",o)}),t.jsx("span",{className:"info-val",children:H(N,"right")})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:rn("expires",o)}),t.jsx("span",{className:"info-val",children:N.expired_at?t.jsx("span",{className:`expiry-date ${N.expired_at<Date.now()/1e3?"expired":""}`,children:qo(N.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(N.balance/100).toFixed(2)," ₫ / ",(N.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:rn("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:qo(N.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${ge===N.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>g(ge===N.id?null:N.id),children:[o("user.colActions")," ",t.jsx(Ma,{size:14})]}),ge===N.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>g(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:it=>it.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:N.email}),t.jsxs("small",{children:["#",N.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:t.jsx(lt,{size:16})})]}),Ae(N,!1,"mobile-action-menu")]})}):null]})})]},N.id)}),!Q&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[we("id")&&t.jsx("th",{children:rn("id",o)}),we("email")&&t.jsx("th",{children:rn("email",o)}),we("status")&&t.jsx("th",{children:rn("status",o)}),we("plan")&&t.jsx("th",{children:rn("plan",o)}),we("group")&&t.jsx("th",{children:rn("group",o)}),we("used")&&t.jsx("th",{children:rn("used",o)}),we("traffic")&&t.jsx("th",{children:rn("traffic",o)}),we("devices")&&t.jsx("th",{children:rn("devices",o)}),we("expires")&&t.jsx("th",{children:rn("expires",o)}),we("balance")&&t.jsx("th",{children:rn("balance",o)}),we("commission")&&t.jsx("th",{children:rn("commission",o)}),we("joined")&&t.jsx("th",{children:rn("joined",o)}),we("actions")&&t.jsx("th",{className:"user-actions-col",children:rn("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(N=>{const be=Bo(N.u+N.d),ve=Bo(N.transfer_enable),Ue=parseFloat(be);return t.jsxs("tr",{children:[we("id")&&t.jsx("td",{children:N.id}),we("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:N.email})}),we("status")&&t.jsx("td",{children:N.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),we("plan")&&t.jsx("td",{children:Et(N)}),we("group")&&t.jsx("td",{children:N.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):ta(N)}),we("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Ue>0?Ue>parseFloat(ve)*.9?"high":"ok":""}`,children:be})}),we("traffic")&&t.jsx("td",{children:ve}),we("devices")&&t.jsx("td",{children:H(N)}),we("expires")&&t.jsx("td",{children:N.expired_at?t.jsx("span",{className:`expiry-date ${N.expired_at<Date.now()/1e3?"expired":""}`,children:qo(N.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),we("balance")&&t.jsx("td",{children:(N.balance/100).toFixed(2)}),we("commission")&&t.jsx("td",{children:(N.commission_balance/100).toFixed(2)}),we("joined")&&t.jsx("td",{children:t.jsx("small",{children:qo(N.created_at)})}),we("actions")&&t.jsx("td",{className:"user-actions-col",children:t.jsxs("div",{className:`action-dropdown-wrap ${ge===N.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:it=>Wt(N.id,it.currentTarget),children:[o("user.colActions")," ",t.jsx(Ma,{size:14})]}),ge===N.id&&L?hx.createPortal(Ae(N,!0),document.body):null]})})]},N.id)}),!Q&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:Je,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),zt>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:S<=1,onClick:()=>hn(S-1),children:t.jsx(Da,{size:16})}),Array.from({length:Math.min(5,zt)},(N,be)=>{let ve;return zt<=5||S<=3?ve=be+1:S>=zt-2?ve=zt-4+be:ve=S-2+be,t.jsx("button",{className:`mini-button ${ve===S?"active-page":""}`,onClick:()=>hn(ve),children:ve},ve)}),zt>5?t.jsxs("span",{className:"page-info",children:["… ",zt]}):null,t.jsx("button",{className:"mini-button",disabled:S>=zt,onClick:()=>hn(S+1),children:t.jsx(Aa,{size:16})})]})}):null]}),Y?t.jsx("div",{className:"modal-backdrop",onClick:()=>me(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>me(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:Jn,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(x.email??""),onChange:N=>Nt("email",N.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(x.invite_user_email??""),onChange:N=>Nt("invite_user_email",N.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(x.password??""),onChange:N=>Nt("password",N.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(x.balance??0)/100).toFixed(2)),onChange:N=>Nt("balance",Math.round(Number(N.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(x.commission_balance??0)/100).toFixed(2)),onChange:N=>Nt("commission_balance",Math.round(Number(N.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(x.u??0),onChange:N=>Nt("u",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(x.d??0),onChange:N=>Nt("d",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(x.transfer_enable??0),onChange:N=>Nt("transfer_enable",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(x.device_limit??""),onChange:N=>Nt("device_limit",N.target.value?Number(N.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(x.expired_at??""),onChange:N=>Nt("expired_at",N.target.value),onClick:N=>{var be,ve;return(ve=(be=N.currentTarget).showPicker)==null?void 0:ve.call(be)},onFocus:N=>{var be,ve;return(ve=(be=N.currentTarget).showPicker)==null?void 0:ve.call(be)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(x.plan_id??""),onChange:N=>Nt("plan_id",N.target.value?Number(N.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),m.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(x.banned??0),onChange:N=>Nt("banned",Number(N.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(x.commission_type??0),onChange:N=>Nt("commission_type",Number(N.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(x.commission_rate??""),onChange:N=>Nt("commission_rate",N.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(x.discount??""),onChange:N=>Nt("discount",N.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(x.speed_limit??""),onChange:N=>Nt("speed_limit",N.target.value?Number(N.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${x.is_admin?"active":""}`,onClick:()=>Nt("is_admin",x.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${x.is_staff?"active":""}`,onClick:()=>Nt("is_staff",x.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(x.remarks??""),onChange:N=>Nt("remarks",N.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>me(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:C,children:o(C?"common.processing":"common.save")})]})]})]})}):null,ae?t.jsx("div",{className:"modal-backdrop",onClick:()=>z(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>z(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ut,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:R.email_prefix,onChange:N=>V({...R,email_prefix:N.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:R.email_suffix,onChange:N=>V({...R,email_suffix:N.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:R.password,onChange:N=>V({...R,password:N.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:R.plan_id,onChange:N=>V({...R,plan_id:N.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),m.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:R.expired_at,onChange:N=>V({...R,expired_at:N.target.value}),onClick:N=>{var be,ve;return(ve=(be=N.currentTarget).showPicker)==null?void 0:ve.call(be)},onFocus:N=>{var be,ve;return(ve=(be=N.currentTarget).showPicker)==null?void 0:ve.call(be)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>z(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:xe,children:o(xe?"user.creating":"user.createUser")})]})]})]})}):null,_e?t.jsx("div",{className:"modal-backdrop",onClick:()=>He(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>He(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Rn,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:_e})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:U.plan_id,onChange:N=>fe({...U,plan_id:N.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),m.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:U.period,onChange:N=>fe({...U,period:N.target.value}),children:Nw.map(N=>t.jsx("option",{value:N.value,children:kw(N.value,o)},N.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.total_amount,onChange:N=>fe({...U,total_amount:N.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>He(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:he,children:o(he?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),ct?t.jsx("div",{className:"modal-backdrop",onClick:()=>ut(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ut(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(ct.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:ct.userId})})]})]})}):null,nt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ct(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:nt.email,id:nt.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ct(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[pn?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:pn}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:vt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:gl(pt.reduce((N,be)=>N+be.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:gl(pt.reduce((N,be)=>N+be.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:gl(pt.reduce((N,be)=>N+be.u+be.d,0))})]})]}),Sn?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(bt,{label:o("user.historyLoading")})}):pt.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(_f,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:pt.map(N=>{const be=gl(N.u),ve=gl(N.d),Ue=gl(N.u+N.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:ww(N.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(N.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:be}),t.jsx("td",{style:{color:"var(--muted)"},children:ve}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Ue})]},N.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min(($t-1)*ke+1,vt),end:Math.min($t*ke,vt),total:vt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:$t<=1,onClick:()=>pe(nt.id,$t-1),children:[t.jsx(Da,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:$t*ke>=vt,onClick:()=>pe(nt.id,$t+1),children:[o("user.historyNext"),t.jsx(Aa,{size:16})]})]})]})]})]})]})}):null]})}function zw(s,i=8,o=4){return s.length<=i+o+3?s:`${s.slice(0,i)}...${s.slice(-o)}`}function hs({value:s,onCopy:i,className:o="",copyClassName:d="",prefixLength:u=8,suffixLength:m=4}){const{t:h}=Qe(),[k,y]=f.useState(!1),v=k?s:zw(s,u,m);return t.jsxs("span",{className:`masked-uuid ${o}`.trim(),children:[t.jsxs("button",{className:`copy-value masked-uuid-copy ${d}`.trim(),type:"button",title:h("uuid.copy"),onClick:()=>void i(),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono masked-uuid-text",title:k?s:v,children:v})]}),t.jsx("button",{className:"masked-uuid-toggle",type:"button",title:h(k?"uuid.hide":"uuid.showFull"),"aria-label":h(k?"uuid.hide":"uuid.showFull"),onClick:()=>y(j=>!j),children:k?t.jsx(Bv,{size:14}):t.jsx($v,{size:14})})]})}const Pf=15,Wf=20,Tw=["email","id","user_id","plan_id","status"],Ew=["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"];function si(s,i){return s?new Date(s*1e3).toLocaleString():i}function Mw(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Dw(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function Ai(s){return+(s/1073741824).toFixed(2)}function Td(s){return Math.round((Number(s)||0)*1073741824)}function Aw(s){return s==="email"?"like":"="}function Ow(s,i){switch(s){case"email":return i("subscription.filterEmail");case"id":return i("subscription.filterId");case"user_id":return i("subscription.filterUserId");case"plan_id":return i("subscription.filterPlanId");case"status":return i("subscription.filterStatus");default:return s}}function Uw(s,i){const o=i(`order.period.${s}`);return o===`order.period.${s}`?s:o}function If(s,i){return i(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function ex(s,i){switch(s){case"bound":return i("subscription.slotStatusBound");case"banned":return i("subscription.slotStatusBanned");default:return i("subscription.slotStatusPending")}}function tx(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function nx(s){return String(s.hwid??"").trim()!==""}function Rw(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function Hw(){const s=qt(),i=ra(),{t:o}=Qe(),[d,u]=f.useState([]),[m,h]=f.useState([]),[k,y]=f.useState(0),[v,j]=f.useState(1),[S,_]=f.useState("email"),[$,W]=f.useState(""),[G,M]=f.useState(!0),[Q,q]=f.useState(""),[D,I]=f.useState(null),[te,ie]=f.useState({}),[T,K]=f.useState(null),[ne,ge]=f.useState(null),[g,L]=f.useState([]),[re,Y]=f.useState(0),[me,x]=f.useState(1),[A,C]=f.useState(!1),[de,ae]=f.useState(""),[z,R]=f.useState(null),[V,xe]=f.useState(null),[ze,_e]=f.useState({period:"month_price",total_amount:""}),[He,U]=f.useState(!1),[fe,he]=f.useState(null),[qe,ct]=f.useState(null),[ut,nt]=f.useState(null);function Ct(w){const ce=w==null?void 0:w.trim();ce&&s.push(`/user?email=${encodeURIComponent(ce)}`)}const pt=f.useCallback(async(w=1,ce="",pe="email")=>{M(!0),q("");try{const Ce=ce.trim()?[{key:pe,condition:Aw(pe),value:ce.trim()}]:void 0,jt=await s1(w,Pf,Ce);u(jt.data),y(jt.total),j(w)}catch(Ce){q(Ce instanceof Error?Ce.message:o("subscription.loadFailed"))}finally{M(!1)}},[o]),Pt=f.useCallback(async(w,ce=1)=>{C(!0),ae("");try{const pe=await Hx(ce,Wf,[{key:"subscription_id",condition:"=",value:String(w.id)}]);L(pe.data),Y(pe.total),x(ce)}catch(pe){ae(pe instanceof Error?pe.message:o("subscription.slotsLoadFailed"))}finally{C(!1)}},[o]),vt=f.useCallback(async()=>{var w;try{h(await fi())}catch(ce){(w=window.showToast)==null||w.call(window,ce instanceof Error?ce.message:o("subscription.plansLoadFailed"),"error")}},[o]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}vt();const w=new URLSearchParams(i.search),pe=[["user_id",w.get("user_id")],["id",w.get("id")],["plan_id",w.get("plan_id")],["email",w.get("email")],["status",w.get("status")]].find(([,Ce])=>Ce&&Ce.trim());if(pe){const[Ce,jt]=pe,Rn=jt??"";_(Ce),W(Rn),pt(1,Rn,Ce);return}pt()},[pt,vt,i.search,s]),f.useEffect(()=>{function w(ce){const pe=ce.target instanceof Element?ce.target:null;fe!==null&&(!pe||!pe.closest(".subscription-action-wrap, .subscription-mobile-action-sheet, .subscription-action-menu-fixed"))&&Ke()}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[fe]),f.useEffect(()=>{if(fe===null)return;const w=()=>Ke();return window.addEventListener("resize",w),window.addEventListener("scroll",w,!0),()=>{window.removeEventListener("resize",w),window.removeEventListener("scroll",w,!0)}},[fe]);function Ke(){he(null),ct(null)}function $t(w,ce){if(fe===w&&qe){Ke();return}const pe=ce.getBoundingClientRect(),Ce=230,jt=292,Rn=6,ca=8,Nt=Math.max(ca,Math.min(window.innerWidth-Ce-ca,pe.right-Ce)),Ut=pe.bottom+Rn+jt<=window.innerHeight-ca?pe.bottom+Rn:Math.max(ca,pe.top-jt-Rn);ct({top:Ut,left:Nt}),he(w)}function Ot(w){ct(null),he(ce=>ce===w?null:w)}function ke(w){w.preventDefault(),pt(1,$,S)}function Sn(){if(W(""),i.search){s.replace("/subscription");return}pt(1,"",S)}function De(w){if(!w)return o("subscription.noPlan");const ce=m.find(pe=>Number(pe.id)===Number(w));return ce?`#${ce.id} - ${ce.name}`:`#${w}`}function pn(w){I(w),ie({plan_id:w.plan_id?String(w.plan_id):"",transfer_enable:String(Ai(w.transfer_enable)),u:String(Ai(w.u)),d:String(Ai(w.d)),device_limit:w.device_limit===null?"":String(w.device_limit),speed_limit:w.speed_limit===null?"":String(w.speed_limit),expired_at:Mw(w.expired_at),status:w.status,auto_renewal:String(w.auto_renewal||0),name_sni:w.name_sni??"",network_settings:w.network_settings??"",remarks:w.remarks??""})}async function mn(w){var ce,pe;if(w.preventDefault(),!!D){K(D.id);try{await r1({id:D.id,plan_id:te.plan_id===""?null:Number(te.plan_id),transfer_enable:Td(te.transfer_enable),u:Td(te.u),d:Td(te.d),device_limit:te.device_limit===""?null:Number(te.device_limit),speed_limit:te.speed_limit===""?null:Number(te.speed_limit),expired_at:Dw(te.expired_at),status:te.status,auto_renewal:Number(te.auto_renewal),name_sni:te.name_sni||null,network_settings:te.network_settings||null,remarks:te.remarks}),I(null),(ce=window.showToast)==null||ce.call(window,o("subscription.updateSuccess"),"success"),await pt(v,$,S)}catch(Ce){(pe=window.showToast)==null||pe.call(window,Ce instanceof Error?Ce.message:o("subscription.saveFailed"),"error")}finally{K(null)}}}function Wt(w){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:o("subscription.resetConfirm",{id:w.id}),onConfirm:async()=>{var pe,Ce;K(w.id);try{await c1(w.id),(pe=window.showToast)==null||pe.call(window,o("subscription.resetSuccess"),"success"),await pt(v,$,S)}catch(jt){(Ce=window.showToast)==null||Ce.call(window,jt instanceof Error?jt.message:o("subscription.resetFailed"),"error")}finally{K(null)}}})}function J(w){var ce,pe;if(!w.user_email){(ce=window.showToast)==null||ce.call(window,o("subscription.renewMissingEmail"),"error");return}if(!w.plan_id){(pe=window.showToast)==null||pe.call(window,o("subscription.renewMissingPlan"),"error");return}xe(w),_e({period:"month_price",total_amount:""})}async function Ae(w){var ce,pe;if(w.preventDefault(),!(!(V!=null&&V.user_email)||!V.plan_id)){U(!0);try{await au({email:V.user_email,plan_id:V.plan_id,period:ze.period,total_amount:Math.round((Number(ze.total_amount)||0)*100),subscription_id:V.id}),(ce=window.showToast)==null||ce.call(window,o("subscription.renewSuccess"),"success"),xe(null)}catch(Ce){(pe=window.showToast)==null||pe.call(window,Ce instanceof Error?Ce.message:o("subscription.renewFailed"),"error")}finally{U(!1)}}}async function Se(w){var pe;if(!w)return;const ce=await ui(w);(pe=window.showToast)==null||pe.call(window,o(ce?"subscription.copySuccess":"common.copyFailed"),ce?"success":"error")}function we(w,ce){u(pe=>pe.map(Ce=>Ce.id===w?{...Ce,subscribe_url:ce}:Ce)),ge(pe=>pe&&pe.id===w?{...pe,subscribe_url:ce}:pe)}async function Je(w){if(w.subscribe_url)return w.subscribe_url;const pe=(await o1(w.id)).data||null;return pe&&we(w.id,pe),pe}async function Be(w){var ce;if(!w.subscribe_url){R(w.id);try{await Je(w)}catch(pe){(ce=window.showToast)==null||ce.call(window,pe instanceof Error?pe.message:o("common.copyFailed"),"error")}finally{R(null)}}}async function Ge(w){var ce,pe;R(w.id);try{const Ce=await Je(w);if(!Ce){(ce=window.showToast)==null||ce.call(window,o("common.copyFailed"),"error");return}await Se(Ce)}catch(Ce){(pe=window.showToast)==null||pe.call(window,Ce instanceof Error?Ce.message:o("common.copyFailed"),"error")}finally{R(null)}}async function Ve(w){var ce,pe;R(w.id);try{const Ce=await Je(w);if(!Ce){(ce=window.showToast)==null||ce.call(window,o("common.copyFailed"),"error");return}nt({url:Ce,subscriptionId:w.id})}catch(Ce){(pe=window.showToast)==null||pe.call(window,Ce instanceof Error?Ce.message:o("common.copyFailed"),"error")}finally{R(null)}}function st(w){ge(w),L([]),Y(0),x(1),Pt(w,1),Be(w)}function hn(w=me){return ne?Pt(ne,w):Promise.resolve()}function Et(w){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var pe,Ce;K(w.id);try{await Lx(w.id),(pe=window.showToast)==null||pe.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([hn(),pt(v,$,S)])}catch(jt){(Ce=window.showToast)==null||Ce.call(window,jt instanceof Error?jt.message:o("subscription.unbindFailed"),"error")}finally{K(null)}}})}function ta(w){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var pe,Ce;K(w.id);try{await qx(w.id),(pe=window.showToast)==null||pe.call(window,o("subscription.banSuccess"),"success"),await Promise.all([hn(),pt(v,$,S)])}catch(jt){(Ce=window.showToast)==null||Ce.call(window,jt instanceof Error?jt.message:o("subscription.banFailed"),"error")}finally{K(null)}}})}function Gt(w){const ce=w.device_limit&&w.device_limit>0?String(w.device_limit):o("subscription.unlimited");return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:w.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:ce})]}),w.device_limit&&w.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(w.device_count/w.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>st(w),children:[t.jsx(Hd,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]})]})}function fn(w){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[Ai(w.total_used)," / ",Ai(w.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Rw(w)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:Ai(w.u),download:Ai(w.d)})})]})}function Fn(w){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsx(hs,{value:w.uuid,onCopy:()=>Se(w.uuid),copyClassName:"subscription-link"}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function xn(w){return t.jsxs("div",{className:"subscription-link-stack",children:[Fn(w),w.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:w.subscribe_url,onClick:()=>void Ge(w),disabled:z===w.id,children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:w.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void Ge(w),disabled:z===w.id,children:[t.jsx(Ea,{size:14}),t.jsx("span",{children:z===w.id?o("subscription.subscribeUrlLoading"):o("subscription.copySubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function H(w){return t.jsxs("section",{className:"subscription-identity-summary",children:[t.jsxs("div",{className:"subscription-identity-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:o("subscription.identityTitle")}),t.jsx("small",{children:o("subscription.identityHelp")})]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:z===w.id,onClick:()=>void Ve(w),children:[t.jsx(qd,{size:14}),z===w.id?o("subscription.subscribeUrlLoading"):o("subscription.getQr")]})]}),xn(w)]})}function se(w,ce=!1,pe=""){const Ce=jt=>{Ke(),jt()};return t.jsxs("div",{className:`action-dropdown-menu subscription-action-menu ${ce?"subscription-action-menu-fixed":""} ${pe}`.trim(),style:ce&&qe?{top:qe.top,left:qe.left}:void 0,onMouseDown:jt=>jt.stopPropagation(),children:[t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>Ce(()=>pn(w)),children:[t.jsx(Jt,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>Ce(()=>J(w)),children:[t.jsx(zx,{size:14}),o("subscription.renew")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>Ce(()=>st(w)),children:[t.jsx(Hd,{size:14}),o("subscription.manageUuids")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:z===w.id,onClick:()=>Ce(()=>void Ge(w)),children:[t.jsx(Ea,{size:14}),z===w.id?o("subscription.subscribeUrlLoading"):o("subscription.copySubscribeUrl")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:z===w.id,onClick:()=>Ce(()=>void Ve(w)),children:[t.jsx(qd,{size:14}),o("subscription.getQr")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:T===w.id,onClick:()=>Ce(()=>Wt(w)),children:[t.jsx(eu,{size:14}),o("subscription.resetSecret")]})]})}function ee(w,ce="desktop"){return ce==="mobile"?t.jsx("div",{className:"subscription-mobile-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${fe===w.id&&!qe?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:()=>Ot(w.id),children:[o("subscription.action")," ",t.jsx(Ma,{size:14})]}),fe===w.id&&!qe?t.jsx("div",{className:"subscription-mobile-action-sheet-backdrop",onClick:Ke,children:t.jsxs("div",{className:"subscription-mobile-action-sheet",onClick:pe=>pe.stopPropagation(),children:[t.jsxs("div",{className:"subscription-mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:w.user_email??o("subscription.userId",{id:w.user_id})}),t.jsxs("small",{children:["#",w.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:Ke,children:t.jsx(lt,{size:16})})]}),se(w,!1,"subscription-mobile-action-menu")]})}):null]})}):t.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${fe===w.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:pe=>$t(w.id,pe.currentTarget),children:[o("subscription.action")," ",t.jsx(Ma,{size:14})]}),fe===w.id&&qe?hx.createPortal(se(w,!0),document.body):null]})}const Me=Math.ceil(k/Pf),Ze=Math.ceil(re/Wf),Fe=Me>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:v<=1||G,onClick:()=>void pt(v-1,$,S),children:[t.jsx(Da,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:v,total:Me})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:v>=Me||G,onClick:()=>void pt(v+1,$,S),children:[o("common.next"),t.jsx(Aa,{size:14})]})]}):null;return t.jsxs(Vt,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:k})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:G,onClick:()=>void pt(v,$,S),children:[t.jsx(At,{size:16}),o(G?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ke,children:[t.jsx("select",{className:"config-input filter-select",value:S,onChange:w=>_(w.target.value),children:Tw.map(w=>t.jsx("option",{value:w,children:Ow(w,o)},w))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(nr,{size:16}),t.jsx("input",{className:"config-input",value:$,onChange:w=>W(w.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(bs,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:Sn,children:o("common.clearFilter")})]}),Q?t.jsx("div",{className:"form-error",children:Q}):null,G&&d.length===0?t.jsx(bt,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(w=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",w.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:w.plan_name??"-"}),w.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>Ct(w.user_email),title:o("subscription.viewUser"),children:w.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:w.user_id}),w.plan_id?` - ${o("subscription.planId",{id:w.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${w.status}`,children:If(w.status,o)})}),t.jsx("td",{children:fn(w)}),t.jsx("td",{children:Gt(w)}),t.jsx("td",{children:si(w.expired_at,o("subscription.never"))}),t.jsx("td",{children:si(w.updated_at,o("subscription.never"))}),t.jsx("td",{children:ee(w)})]},w.id)),!G&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(w=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",w.id]}),t.jsx("strong",{className:"subscription-plan-name",children:w.plan_name??"-"}),w.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>Ct(w.user_email),title:o("subscription.viewUser"),children:w.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${w.status}`,children:If(w.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),fn(w)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),Gt(w)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:si(w.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:si(w.updated_at,o("subscription.never"))})]})]}),ee(w,"mobile")]},w.id)),!G&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),Fe,ne?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>ge(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:ne.id})}),t.jsx("p",{children:ne.user_email??o("subscription.userId",{id:ne.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>ge(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[de?t.jsx("div",{className:"form-error",children:de}):null,A&&g.length===0?t.jsx(bt,{label:o("subscription.slotsLoading")}):null,H(ne),t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[g.map(w=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(hs,{value:w.uuid,onCopy:()=>Se(w.uuid),copyClassName:"subscription-link"})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${tx(w.status)}`,children:ex(w.status,o)})}),t.jsx("td",{children:w.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:w.hwid,onClick:()=>Se(w.hwid),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:w.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:w.user_agent??"",children:w.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:w.last_ip??"-"}),t.jsx("small",{children:w.first_ip?o("subscription.firstIp",{ip:w.first_ip}):"-"})]}),t.jsx("td",{children:si(w.first_seen_at,"-")}),t.jsx("td",{children:si(w.last_seen_at,"-")}),t.jsx("td",{children:nx(w)?t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:T===w.id,onClick:()=>Et(w),children:[t.jsx($d,{size:14}),o("subscription.unbind")]}),w.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:T===w.id,onClick:()=>ta(w),children:[t.jsx(Oi,{size:14}),o("subscription.ban")]}):null]}):t.jsx("span",{children:"-"})})]},w.id)),!A&&g.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[g.map(w=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${tx(w.status)}`,children:ex(w.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsx(hs,{value:w.uuid,onCopy:()=>Se(w.uuid),copyClassName:"subscription-link"})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),w.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:w.hwid,onClick:()=>Se(w.hwid),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:w.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:w.last_ip??"-"}),t.jsx("small",{children:w.first_ip?o("subscription.firstIp",{ip:w.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:w.user_agent??"",children:w.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:si(w.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:si(w.last_seen_at,"-")})]})]}),nx(w)?t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:T===w.id,onClick:()=>Et(w),children:[t.jsx($d,{size:14}),o("subscription.unbind")]}),w.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:T===w.id,onClick:()=>ta(w),children:[t.jsx(Oi,{size:14}),o("subscription.ban")]}):null]}):null]},w.id)),!A&&g.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),Ze>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:me<=1||A,onClick:()=>void hn(me-1),children:[t.jsx(Da,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:me,total:Ze})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:me>=Ze||A,onClick:()=>void hn(me+1),children:[o("common.next"),t.jsx(Aa,{size:14})]})]}):null]})]})}):null,ut?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>nt(null),children:t.jsxs("section",{className:"modal-panel subscription-qr-modal",role:"dialog","aria-modal":"true",onMouseDown:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.qrTitle")}),t.jsx("p",{children:o("subscription.qrSubtitle",{id:ut.subscriptionId})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>nt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(ut.url)}`,alt:o("subscription.getQr"),width:200,height:200}),t.jsx("div",{className:"subscription-qr-url",children:ut.url})]})]})}):null,D?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>I(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:D.id})}),t.jsx("p",{children:D.user_email??o("subscription.userId",{id:D.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>I(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:mn,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.plan"),t.jsxs("select",{className:"config-input",value:te.plan_id,onChange:w=>ie(ce=>({...ce,plan_id:w.target.value})),children:[t.jsx("option",{value:"",children:o("subscription.noPlan")}),m.map(w=>t.jsxs("option",{value:w.id,children:["#",w.id," - ",w.name]},w.id))]})]}),t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:te.transfer_enable,onChange:w=>ie(ce=>({...ce,transfer_enable:w.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:te.u,onChange:w=>ie(ce=>({...ce,u:w.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:te.d,onChange:w=>ie(ce=>({...ce,d:w.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:te.device_limit,onChange:w=>ie(ce=>({...ce,device_limit:w.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:te.speed_limit,onChange:w=>ie(ce=>({...ce,speed_limit:w.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:te.expired_at,onChange:w=>ie(ce=>({...ce,expired_at:w.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:te.status,onChange:w=>ie(ce=>({...ce,status:w.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:te.auto_renewal,onChange:w=>ie(ce=>({...ce,auto_renewal:w.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]}),t.jsxs("label",{children:[o("subscription.sniName"),t.jsx("input",{className:"config-input",value:te.name_sni,onChange:w=>ie(ce=>({...ce,name_sni:w.target.value})),placeholder:o("subscription.sniNamePlaceholder")})]}),t.jsxs("label",{children:[o("subscription.sniValue"),t.jsx("input",{className:"config-input",value:te.network_settings,onChange:w=>ie(ce=>({...ce,network_settings:w.target.value})),placeholder:o("subscription.sniValuePlaceholder")})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:te.remarks,onChange:w=>ie(ce=>({...ce,remarks:w.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>I(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:T===D.id,children:T===D.id?o("common.processing"):o("common.save")})]})]})]})}):null,V?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>xe(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.renewTitle")}),t.jsx("p",{children:o("subscription.renewSubtitle",{id:V.id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>xe(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ae,children:[t.jsxs("div",{className:"subscription-renew-summary",children:[t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("common.email")}),t.jsx("strong",{title:V.user_email??"",children:V.user_email??"-"})]}),t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("subscription.renewSubscriptionId")}),t.jsxs("strong",{children:["#",V.id]})]}),t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("subscription.renewPlan")}),t.jsx("strong",{title:De(V.plan_id),children:De(V.plan_id)})]})]}),t.jsxs("label",{children:[o("subscription.renewPeriod"),t.jsx("select",{className:"config-input",value:ze.period,onChange:w=>_e(ce=>({...ce,period:w.target.value})),children:Ew.map(w=>t.jsx("option",{value:w,children:Uw(w,o)},w))})]}),t.jsxs("label",{children:[o("subscription.renewTotalAmount"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:ze.total_amount,onChange:w=>_e(ce=>({...ce,total_amount:w.target.value})),placeholder:"0"})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>xe(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:He,children:o(He?"common.processing":"common.save")})]})]})]})}):null]})}const ax=15,Lw=["email","user_id","node","hwid","user_agent","last_ip"];function ds(s){return s?new Date(s*1e3).toLocaleString():"-"}function oi(s){const i=Math.max(0,Number(s??0));if(i===0)return"0 B";const o=["B","KB","MB","GB","TB"];let d=i,u=0;for(;d>=1024&&u<o.length-1;)d/=1024,u+=1;return`${d>=10||u===0?d.toFixed(0):d.toFixed(2)} ${o[u]}`}function qw(s){return["user_id","subscription_id","node","node_type","node_id"].includes(s)?"=":"like"}function Bw(s,i){switch(s){case"email":return i("device.filterEmail");case"user_id":return i("device.filterUserId");case"hwid":return i("device.filterHwid");case"node":return i("device.filterNode");case"node_id":return i("device.filterNodeId");case"node_type":return i("device.filterNodeType");case"user_agent":return i("device.filterUserAgent");case"last_ip":return i("device.filterIp");default:return""}}function ix(s,i){switch(s){case"bound":return i("device.statusBound");case"banned":return i("device.statusBanned");default:return i("device.statusPending")}}function $o(s){return(s.online_ips??[]).join(", ")||"-"}function Go(s){return(s.online_nodes??[]).map(i=>`${i.node_type}#${i.node_id}`).join(", ")||"-"}function $w(s){return String(s.hwid??"").trim()!==""}function Gw(s){var m,h,k;const i=new URLSearchParams(s),o=(m=i.get("node_type"))==null?void 0:m.trim(),d=(h=i.get("node_id"))==null?void 0:h.trim();if(o&&d)return{field:"node",value:`${o}:${d}`};if(d)return{field:"node",value:d};const u=["node","hwid","user_agent","last_ip","email","user_id"];for(const y of u){const v=(k=i.get(y))==null?void 0:k.trim();if(v)return{field:y,value:v}}return null}function Yw(){const s=qt(),i=ra(),{t:o}=Qe(),[d,u]=f.useState([]),[m,h]=f.useState(0),[k,y]=f.useState(1),[v,j]=f.useState("email"),[S,_]=f.useState(""),[$,W]=f.useState(!0),[G,M]=f.useState(""),[Q,q]=f.useState(null),[D,I]=f.useState(null),[te,ie]=f.useState(null),T=f.useCallback(async(C=1,de="",ae="email")=>{W(!0),M("");try{const z=de.trim()?[{key:ae,condition:qw(ae),value:de.trim()}]:void 0,R=await Hx(C,ax,z);u(R.data),h(R.total),y(C)}catch(z){M(z instanceof Error?z.message:o("device.loadFailed"))}finally{W(!1)}},[o]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}const C=Gw(i.search);if(C){j(C.field),_(C.value),T(1,C.value,C.field);return}T()},[T,s,i.search]),f.useEffect(()=>{if(te===null)return;function C(ae){const z=ae.target;z!=null&&z.closest(".device-action-wrap")||ie(null)}function de(ae){ae.key==="Escape"&&ie(null)}return document.addEventListener("pointerdown",C),document.addEventListener("keydown",de),()=>{document.removeEventListener("pointerdown",C),document.removeEventListener("keydown",de)}},[te]);function K(C){C.preventDefault(),T(1,S,v)}function ne(){if(_(""),i.search){s.replace("/device");return}T(1,"",v)}async function ge(C){var ae;if(!C.hwid)return;const de=await ui(C.hwid);(ae=window.showToast)==null||ae.call(window,o(de?"device.copySuccess":"common.copyFailed"),de?"success":"error")}async function g(C){var ae;const de=await ui(C.uuid);(ae=window.showToast)==null||ae.call(window,o(de?"device.copyUuidSuccess":"common.copyFailed"),de?"success":"error")}function L(C){var de;(de=window.showConfirm)==null||de.call(window,{message:o("device.unbindConfirm"),onConfirm:async()=>{var ae,z;q(C.id);try{await Lx(C.id),(ae=window.showToast)==null||ae.call(window,o("device.unbindSuccess"),"success"),await T(k,S,v)}catch(R){(z=window.showToast)==null||z.call(window,R instanceof Error?R.message:o("device.unbindFailed"),"error")}finally{q(null)}}})}function re(C){var de;(de=window.showConfirm)==null||de.call(window,{message:o("device.banConfirm"),onConfirm:async()=>{var ae,z;q(C.id);try{await qx(C.id),(ae=window.showToast)==null||ae.call(window,o("device.banSuccess"),"success"),await T(k,S,v)}catch(R){(z=window.showToast)==null||z.call(window,R instanceof Error?R.message:o("device.banFailed"),"error")}finally{q(null)}}})}function Y(C){var de;(de=window.showConfirm)==null||de.call(window,{message:o("device.resetConfirm",{user:C.user_email??`#${C.user_id}`}),onConfirm:async()=>{var ae,z;I(C.user_id);try{await d1(C.user_id),(ae=window.showToast)==null||ae.call(window,o("device.resetSuccess"),"success"),await T(k,S,v)}catch(R){(z=window.showToast)==null||z.call(window,R instanceof Error?R.message:o("device.resetFailed"),"error")}finally{I(null)}}})}function me(C){ie(null),C()}function x(C,de){const ae=de==="mobile"?-C.id:C.id,z=te===ae,R=$w(C);return t.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${z?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>ie(z?null:ae),children:[o("device.action")," ",t.jsx(Ma,{size:14})]}),z?t.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[R?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:Q===C.id,onClick:()=>me(()=>L(C)),children:[t.jsx($d,{size:14}),o("device.unbind")]}),C.status==="bound"?t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:Q===C.id,onClick:()=>me(()=>re(C)),children:[t.jsx(Oi,{size:14}),o("device.ban")]}):null]}):null,t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:D===C.user_id,onClick:()=>me(()=>Y(C)),children:[t.jsx(n0,{size:14}),o("device.resetUser")]})]}):null]})}const A=Math.ceil(m/ax);return t.jsxs(Vt,{title:o("device.title"),subtitle:o("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("device.heading")}),t.jsx("p",{children:o("device.total",{count:m})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:$,onClick:()=>void T(k,S,v),children:[t.jsx(At,{size:16}),o($?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:K,children:[t.jsx("select",{className:"config-input filter-select",value:v,onChange:C=>j(C.target.value),children:Lw.map(C=>t.jsx("option",{value:C,children:Bw(C,o)},C))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(nr,{size:16}),t.jsx("input",{className:"config-input",value:S,onChange:C=>_(C.target.value),placeholder:o(v==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(bs,{size:16}),o("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ne,children:o("device.clear")})]}),G?t.jsx("div",{className:"form-error",children:G}):null,$&&d.length===0?t.jsx(bt,{label:o("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[d.map(C=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:C.user_email??"-"}),t.jsxs("small",{children:["ID: ",C.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[C.plan_name??"-",C.user_plan_id?` #${C.user_plan_id}`:""]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:ix(C.status,o)}),t.jsxs("span",{className:`online-badge ${C.is_online?"online":"offline"}`,children:[C.is_online?t.jsx(kf,{size:14}):t.jsx(Sf,{size:14}),C.is_online?o("device.online"):o("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-info",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.uuid")}),t.jsx(hs,{value:C.uuid,onCopy:()=>g(C),copyClassName:"mobile-device-copy"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.hwid")}),C.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:C.hwid,onClick:()=>ge(C),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:C.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.client")}),t.jsx("small",{title:C.user_agent??"",children:C.user_agent??"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.ip")}),t.jsxs("span",{className:"mono",title:`${C.last_ip??"-"} / ${C.first_ip??"-"}`,children:[C.last_ip??"-",C.first_ip?` (${C.first_ip})`:""]})]})]}),t.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[t.jsx("span",{children:o("device.traffic")}),t.jsxs("small",{title:`${o("device.upload")}: ${oi(C.device_upload)} / ${o("device.download")}: ${oi(C.device_download)}`,children:[oi(C.device_used_traffic)," / ",o("device.upload"),": ",oi(C.device_upload)," / ",o("device.download"),": ",oi(C.device_download)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.connection")}),t.jsxs("small",{title:`${$o(C)} / ${Go(C)}`,children:[o("device.onlineIps"),": ",$o(C)," / ",o("device.onlineNodes"),": ",Go(C)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.time")}),t.jsxs("small",{children:[o("device.firstSeen"),": ",ds(C.first_seen_at)," / ",o("device.lastSeen"),": ",ds(C.last_seen_at)]})]})]}),t.jsx("div",{className:"mobile-device-actions",children:x(C,"mobile")})]},C.id)),!$&&d.length===0?t.jsx("div",{className:"empty-state",children:o("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("device.user")}),t.jsx("th",{children:o("device.status")}),t.jsx("th",{children:o("device.traffic")}),t.jsx("th",{children:o("device.connection")}),t.jsx("th",{children:o("device.deviceInfo")}),t.jsx("th",{children:o("device.time")}),t.jsx("th",{children:o("device.action")})]})}),t.jsxs("tbody",{children:[d.map(C=>t.jsxs("tr",{children:[t.jsxs("td",{className:"device-user-cell",children:[t.jsx("strong",{children:C.user_email??"-"}),t.jsxs("small",{children:["ID: ",C.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[C.plan_name??"-",C.user_plan_id?` #${C.user_plan_id}`:""]})]}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:ix(C.status,o)})}),t.jsx("td",{className:"device-traffic-cell",children:t.jsxs("div",{className:"device-traffic-stack",children:[t.jsx("strong",{children:oi(C.device_used_traffic)}),t.jsxs("small",{children:[o("device.upload"),": ",oi(C.device_upload)]}),t.jsxs("small",{children:[o("device.download"),": ",oi(C.device_download)]})]})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${C.is_online?"online":"offline"}`,children:[C.is_online?t.jsx(kf,{size:14}):t.jsx(Sf,{size:14}),C.is_online?o("device.online"):o("device.offline")]}),t.jsxs("small",{title:$o(C),children:[o("device.onlineIps"),": ",$o(C)]}),t.jsxs("small",{title:Go(C),children:[o("device.onlineNodes"),": ",Go(C)]}),t.jsxs("small",{children:[o("device.lastOnline"),": ",ds(C.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-info-cell",children:t.jsxs("div",{className:"device-info-stack",children:[t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.uuid")}),t.jsx(hs,{value:C.uuid,onCopy:()=>g(C),copyClassName:"device-info-copy"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.hwid")}),C.hwid?t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:C.hwid,onClick:()=>ge(C),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:C.hwid})]}):t.jsx("span",{className:"device-info-value",children:"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.client")}),t.jsx("small",{className:"device-info-value",title:C.user_agent??"",children:C.user_agent??"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.ip")}),t.jsxs("div",{className:"device-info-value",children:[t.jsx("strong",{className:"mono",children:C.last_ip??"-"}),t.jsx("small",{children:C.first_ip?`${o("device.firstIp")}: ${C.first_ip}`:"-"})]})]})]})}),t.jsx("td",{className:"device-time-cell",children:t.jsxs("div",{className:"device-time-stack",children:[t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.firstSeen")}),t.jsx("span",{children:ds(C.first_seen_at)})]}),t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.lastSeen")}),t.jsx("span",{children:ds(C.last_seen_at)})]})]})}),t.jsx("td",{className:"device-action-cell",children:x(C,"desktop")})]},C.id)),!$&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("device.empty")})})}):null]})]})}),A>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:k<=1||$,onClick:()=>void T(k-1,S,v),children:[t.jsx(Da,{size:14}),o("device.previous")]}),t.jsx("span",{className:"page-info",children:o("device.page",{page:k,total:A})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:k>=A||$,onClick:()=>void T(k+1,S,v),children:[o("device.next"),t.jsx(Aa,{size:14})]})]}):null]})]})}const Qw={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function ru(s){if(Array.isArray(s))return s.map(i=>Number(i)).filter(i=>Number.isFinite(i)&&i>0);if(typeof s=="string")try{return ru(JSON.parse(s))}catch{return s.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i)&&i>0)}return[]}function lx(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:ru(s.plan_id)}:{...Qw}}function Ed(s){const i=s.trim();if(!i)return"";try{return new URL(i.includes("://")?i:`https://${i}`).host.toLowerCase()}catch{return i.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function Xw(s){const i=Number(s);if(!i)return"-";const o=new Date(i*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function Zw(s){return Number(s)===1}function sx(s,i,o){if(!s.length)return o("webcon.allPlans");const d=new Map(i.map(u=>[Number(u.id),u.name]));return s.map(u=>d.get(u)??`#${u}`).join(", ")}function ri(s,i=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,i?t.jsx("small",{children:"*"}):null]})}function Kw(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState([]),[h,k]=f.useState(null),[y,v]=f.useState(!0),[j,S]=f.useState(!1),[_,$]=f.useState(null),[W,G]=f.useState(""),M=f.useCallback(async()=>{v(!0),G("");try{const[T,K]=await Promise.all([S1(),fi()]);d(T),m(K)}catch(T){G(T instanceof Error?T.message:i("webcon.toastLoadFailed"))}finally{v(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}M()},[M,s]);const Q=f.useMemo(()=>u.map(T=>({id:Number(T.id),name:T.name})),[u]);function q(T,K){k(ne=>ne&&{...ne,[T]:K})}function D(T,K){k(ne=>{if(!ne)return ne;const ge=K?Array.from(new Set([...ne.plan_ids,T])):ne.plan_ids.filter(g=>g!==T);return{...ne,plan_ids:ge}})}async function I(T){var ne,ge;if(T.preventDefault(),!h)return;const K=Ed(h.domain);S(!0),G("");try{await k1({id:h.id,email:h.email.trim(),domain:K,title:h.title.trim(),description:h.description.trim()||null,logo:h.logo.trim()||null,background_url:h.background_url.trim()||null,custom_html:h.custom_html||null,plan_ids:h.plan_ids,plan_id:h.plan_ids}),k(null),(ne=window.showToast)==null||ne.call(window,i("webcon.toastSaveSuccess"),"success"),await M()}catch(g){const L=g instanceof Error?g.message:i("webcon.toastSaveFailed");G(L),(ge=window.showToast)==null||ge.call(window,L,"error")}finally{S(!1)}}async function te(T){var K,ne;$(T.id);try{await z1(T.id),(K=window.showToast)==null||K.call(window,i("webcon.toastToggleSuccess"),"success"),await M()}catch(ge){const g=ge instanceof Error?ge.message:i("webcon.toastToggleFailed");G(g),(ne=window.showToast)==null||ne.call(window,g,"error")}finally{$(null)}}function ie(T){var K;(K=window.showConfirm)==null||K.call(window,{message:i("webcon.deleteConfirm"),onConfirm:async()=>{var ne,ge;$(T.id),G("");try{await C1(T.id),(ne=window.showToast)==null||ne.call(window,i("webcon.toastDeleteSuccess"),"success"),await M()}catch(g){const L=g instanceof Error?g.message:i("webcon.toastDeleteFailed");G(L),(ge=window.showToast)==null||ge.call(window,L,"error")}finally{$(null)}}})}return t.jsxs(Vt,{title:i("webcon.title"),subtitle:i("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("webcon.heading")}),t.jsx("p",{children:i("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:y,onClick:()=>void M(),children:[t.jsx(At,{size:16}),i(y?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>k(lx()),children:[t.jsx(On,{size:16}),i("webcon.add")]})]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,y&&o.length===0?t.jsx(bt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("webcon.colId")}),t.jsx("th",{children:i("webcon.colStatus")}),t.jsx("th",{children:i("webcon.colStaffOwner")}),t.jsx("th",{children:i("webcon.colDomain")}),t.jsx("th",{children:i("webcon.colLanding")}),t.jsx("th",{children:i("webcon.colPlans")}),t.jsx("th",{children:i("webcon.colCreated")}),t.jsx("th",{children:i("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(T=>{var ne;const K=ru(T.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",T.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${Zw(T.status)?"active":""}`,type:"button",disabled:_===T.id,onClick:()=>void te(T),"aria-label":i("webcon.toggleStatusLabel"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:T.email??"-"}),t.jsx("small",{children:Number(T.staff)===1?i("webcon.staffEnabled"):i("webcon.staffDisabled")})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:T.domain}),t.jsx("small",{children:i("webcon.adminPath",{path:`/${String(((ne=window.settings)==null?void 0:ne.secure_path)??"admin")}/webcon`})})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:T.title||"-"}),t.jsx("small",{children:T.description||i("webcon.noDescription")}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(Xv,{size:13}),T.logo?i("webcon.logo"):i("webcon.noLogo")]}),t.jsxs("span",{children:[t.jsx(ys,{size:13}),T.background_url?i("webcon.background"):i("webcon.noBackground")]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:sx(K,Q,i)}),t.jsx("small",{children:K.length?i("webcon.selectedCount",{count:K.length}):i("webcon.unrestricted")})]})}),t.jsx("td",{children:Xw(T.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>k(lx(T)),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:_===T.id,onClick:()=>ie(T),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},T.id)}),!y&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("webcon.noWebcon")})})}):null]})]})})}),h?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>k(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:T=>T.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:h.id?i("webcon.editTitle"):i("webcon.newTitle")}),t.jsx("p",{children:h.domain||i("webcon.modalSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.closeMenu"),onClick:()=>k(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:I,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[ri(i("webcon.staffOwnerEmail"),!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:h.email,onChange:T=>q("email",T.target.value),placeholder:i("webcon.staffEmailPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(i("webcon.domain"),!0),t.jsx("input",{className:"config-input",required:!0,value:h.domain,onChange:T=>q("domain",T.target.value),onBlur:T=>q("domain",Ed(T.target.value)),placeholder:i("webcon.domainPlaceholder")}),t.jsx("span",{className:"webcon-help",children:i("webcon.domainHelp")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(i("webcon.landingTitle"),!0),t.jsx("input",{className:"config-input",required:!0,value:h.title,onChange:T=>q("title",T.target.value),placeholder:i("webcon.landingTitlePlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(i("webcon.description")),t.jsx("input",{className:"config-input",value:h.description,onChange:T=>q("description",T.target.value),placeholder:i("webcon.descriptionPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(i("webcon.logoUrl")),t.jsx("input",{className:"config-input",type:"url",value:h.logo,onChange:T=>q("logo",T.target.value),placeholder:i("webcon.logoPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(i("webcon.backgroundUrl")),t.jsx("input",{className:"config-input",type:"url",value:h.background_url,onChange:T=>q("background_url",T.target.value),placeholder:i("webcon.backgroundPlaceholder")})]}),t.jsxs("div",{className:"webcon-field full",children:[ri(i("webcon.allowedPlans")),t.jsxs("div",{className:"webcon-plan-picker",children:[Q.map(T=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:h.plan_ids.includes(T.id),onChange:K=>D(T.id,K.target.checked)}),t.jsx("span",{children:T.name})]},T.id)),Q.length===0?t.jsx("span",{className:"webcon-help",children:i("webcon.noPlansLoaded")}):null]}),t.jsx("span",{className:"webcon-help",children:i("webcon.allowedPlansHelp")})]}),t.jsxs("label",{className:"webcon-field full",children:[ri(i("webcon.customHtml")),t.jsx("textarea",{className:"config-input",rows:5,value:h.custom_html,onChange:T=>q("custom_html",T.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:h.logo?t.jsx("img",{src:h.logo,alt:""}):t.jsx(e0,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:h.title||i("webcon.previewTitle")}),t.jsx("span",{children:Ed(h.domain)||i("webcon.domainPlaceholder")}),t.jsxs("span",{children:[t.jsx(tu,{size:12})," ",sx(h.plan_ids,Q,i)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>k(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Un,{size:16}),i(j?"webcon.saving":"common.save")]})]})]})]})}):null]})}function ox(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Md(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function Fw(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,k]=f.useState(!0),[y,v]=f.useState(!1),[j,S]=f.useState(""),[_,$]=f.useState(""),W=f.useCallback(async()=>{k(!0),S("");try{d(await p1())}catch(q){S(q instanceof Error?q.message:i("notice.loadFailed"))}finally{k(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}W()},[W,s]);async function G(q){var D,I;if(q.preventDefault(),!!u){v(!0),S(""),$("");try{const te=u.tags?u.tags.split(",").map(ie=>ie.trim()).filter(Boolean):[];await m1({id:u.id,title:u.title,content:u.content,img_url:u.img_url||null,tags:te.length?te:null}),m(null),(D=window.showToast)==null||D.call(window,i("notice.saveSuccess"),"success"),await W()}catch(te){(I=window.showToast)==null||I.call(window,te instanceof Error?te.message:i("notice.saveFailed"),"error")}finally{v(!1)}}}async function M(q){var D;try{await f1(q),await W()}catch(I){(D=window.showToast)==null||D.call(window,I instanceof Error?I.message:i("notice.toggleFailed"),"error")}}async function Q(q){var D;(D=window.showConfirm)==null||D.call(window,{message:i("notice.deleteConfirm"),onConfirm:async()=>{var I,te;try{await h1(q),(I=window.showToast)==null||I.call(window,i("notice.deleteSuccess"),"success"),await W()}catch(ie){(te=window.showToast)==null||te.call(window,ie instanceof Error?ie.message:i("notice.deleteFailed"),"error")}}})}return t.jsxs(Vt,{title:i("notice.title"),subtitle:i("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("notice.heading")}),t.jsxs("p",{children:[o.length," ",i("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:h,children:[t.jsx(At,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>m(Md()),children:[t.jsx(On,{size:16}),i("notice.addNotice")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,_?t.jsx("div",{className:"form-success",children:_}):null,h&&o.length===0?t.jsx(bt,{label:i("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("notice.titleField")}),t.jsx("th",{children:i("notice.show")}),t.jsx("th",{children:i("notice.tags")}),t.jsx("th",{children:i("notice.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(q=>{var D;return t.jsxs("tr",{children:[t.jsx("td",{children:q.id}),t.jsx("td",{children:t.jsx("strong",{children:q.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${q.show?"active":""}`,type:"button",onClick:()=>void M(q.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((D=q.tags)==null?void 0:D.map((I,te)=>t.jsx("span",{className:"tag",children:I},te)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:ox(q.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>m(Md(q)),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Q(q.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},q.id)}),!h&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(q=>t.jsxs("div",{className:`notice-mobile-card ${q.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",q.id]})}),t.jsx("button",{className:`admin-switch ${q.show?"active":""}`,type:"button",onClick:()=>void M(q.id),"aria-label":q.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:q.title}),t.jsx("div",{className:"notice-tags",children:q.tags&&q.tags.length>0?q.tags.map((D,I)=>t.jsx("span",{className:"tag-badge",children:D},I)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[i("notice.created"),": ",ox(q.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>m(Md(q)),children:[t.jsx(Jt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void Q(q.id),children:[t.jsx(nn,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},q.id)),!h&&o.length===0?t.jsx("div",{className:"empty-state",children:i("notice.noNotices")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?i("notice.editNotice"):i("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:G,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:q=>m({...u,title:q.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:u.content,onChange:q=>m({...u,content:q.target.value}),placeholder:i("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:u.img_url,onChange:q=>m({...u,img_url:q.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.tags")}),t.jsx("input",{className:"config-input",value:u.tags,onChange:q=>m({...u,tags:q.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(Un,{size:16}),i(y?"notice.saving":"common.save")]})]})]})]})}):null]})}function Dd(s){return new Date(s*1e3).toLocaleString("vi-VN")}const rx=(s,i)=>({0:{label:i("ticket.statusOpen"),cls:"enabled"},1:{label:i("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},Ad=(s,i)=>({0:i("ticket.levelLow"),1:i("ticket.levelMedium"),2:i("ticket.levelHigh")})[s]||String(s);function Jw(){var me;const s=qt(),{t:i}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,k]=f.useState(!1),[y,v]=f.useState(null),[j,S]=f.useState(""),[_,$]=f.useState(!0),[W,G]=f.useState(!1),[M,Q]=f.useState(!1),[q,D]=f.useState(""),I=f.useRef(null),[te,ie]=f.useState([]),[T,K]=f.useState(null),ne=f.useCallback(async()=>{$(!0),D("");try{d(await x1())}catch(x){D(x instanceof Error?x.message:"Load failed")}finally{$(!1)}},[]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}ne(),fi().then(x=>{x&&ie(x)}).catch(()=>{})},[ne,s]),f.useEffect(()=>{var x;(x=I.current)==null||x.scrollIntoView({behavior:"smooth"})},[u]);async function ge(x){var A;v(x),S(""),m(null),K(null),k(!0);try{const C=await bd(x);if(m(C),C&&C.user_id)try{const de=await Yd(C.user_id);de&&de.data&&K(de.data)}catch(de){console.error("Failed to load user info:",de)}}catch{(A=window.showToast)==null||A.call(window,"Failed to load message thread","error")}finally{k(!1)}}async function g(x){var A,C;if(x.preventDefault(),!(!y||!j.trim())){G(!0),D("");try{await g1(y,j),S(""),(A=window.showToast)==null||A.call(window,"Reply sent!","success");try{const de=await bd(y);m(de)}catch{}await ne()}catch(de){(C=window.showToast)==null||C.call(window,de instanceof Error?de.message:"Reply failed","error")}finally{G(!1)}}}async function L(x){var A;(A=window.showConfirm)==null||A.call(window,{message:"Close this ticket?",onConfirm:async()=>{var C,de;D("");try{await b1(x),(C=window.showToast)==null||C.call(window,"Ticket closed!","success"),y===x&&(v(null),m(null)),await ne()}catch(ae){D(ae instanceof Error?ae.message:"Close failed"),(de=window.showToast)==null||de.call(window,ae instanceof Error?ae.message:"Close failed","error")}}})}function re(){var C,de;if(!u||!T)return;const x=Number(T.commission_balance??0);if(x<=0){(C=window.showToast)==null||C.call(window,i("ticket.noCommissionToConfirm"),"error");return}const A=`${cn(x)} ${i("ticket.currencyUnit")}`;(de=window.showConfirm)==null||de.call(window,{message:i("ticket.confirmCommissionMessage",{amount:A}),confirmText:i("ticket.confirmCommissionAction"),onConfirm:async()=>{var ae,z,R;Q(!0),D("");try{const xe=((ae=(await y1(u.id)).data)==null?void 0:ae.amount)??x,ze=`${cn(xe)} ${i("ticket.currencyUnit")}`,_e=await bd(u.id);if(m(_e),_e!=null&&_e.user_id){const He=await Yd(_e.user_id);K(He.data)}await ne(),(z=window.showToast)==null||z.call(window,i("ticket.commissionConfirmSuccess",{amount:ze}),"success")}catch(V){(R=window.showToast)==null||R.call(window,V instanceof Error?V.message:i("ticket.commissionConfirmFailed"),"error")}finally{Q(!1)}}})}const Y=Number((T==null?void 0:T.commission_balance)??0);return t.jsxs(Vt,{title:i("ticket.title"),subtitle:i("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:ne,disabled:_,children:[t.jsx(At,{size:16}),i("common.refresh")]})})]}),q?t.jsx("div",{className:"form-error",children:q}):null,_&&o.length===0?t.jsx(bt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("ticket.id")}),t.jsx("th",{children:i("ticket.subject")}),t.jsx("th",{children:i("ticket.user")}),t.jsx("th",{children:i("ticket.level")}),t.jsx("th",{children:i("ticket.status")}),t.jsx("th",{children:i("ticket.replyStatus")}),t.jsx("th",{children:i("ticket.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(x=>{const A=rx(x.status,i);return t.jsxs("tr",{children:[t.jsx("td",{children:x.id}),t.jsx("td",{children:t.jsx("strong",{children:x.subject})}),t.jsxs("td",{children:["#",x.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:Ad(x.level,i)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${A.cls}`,children:A.label})}),t.jsx("td",{children:x.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:Dd(x.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:x.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void ge(x.id),children:[t.jsx(us,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void L(x.id),children:[t.jsx(Ld,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void ge(x.id),children:[t.jsx(us,{size:14}),i("ticket.viewHistory")]})})})]},x.id)}),!_&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(x=>{const A=rx(x.status,i);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:x.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Ad(x.level,i)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.id"),": ",t.jsxs("strong",{children:["#",x.id]})]}),t.jsx("span",{className:`status-pill ${A.cls}`,children:A.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.user"),": ",t.jsxs("strong",{children:["#",x.user_id]})]}),t.jsx("span",{children:x.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[i("ticket.created"),": ",t.jsx("small",{children:Dd(x.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:x.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void ge(x.id),children:[t.jsx(us,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void L(x.id),children:[t.jsx(Ld,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void ge(x.id),children:[t.jsx(us,{size:14}),i("ticket.viewHistory")]})})]},x.id)}),!_&&o.length===0?t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")}):null]}),y!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u?`${i("ticket.ticketDetail")}: ${u.subject}`:`${i("ticket.ticketDetail")} #${y}`}),t.jsxs("p",{children:[i("ticket.user"),": #",u==null?void 0:u.user_id," | ",i("ticket.level"),": ",u!=null?Ad(u.level,i):i("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{v(null),m(null)},children:t.jsx(lt,{size:18})})]}),T&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("common.email")}),t.jsx("span",{className:"details-value",title:T.email,children:T.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((me=te.find(x=>x.id===T.plan_id))==null?void 0:me.name)||i("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[cn(T.balance)," ",i("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.commissionBalance")}),t.jsxs("span",{className:"details-value commission-value",children:[cn(T.commission_balance)," ",i("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:T.expired_at?new Date(T.expired_at*1e3).toLocaleDateString("vi-VN"):i("ticket.never")})]}),t.jsx("div",{className:"user-details-actions",children:t.jsxs("button",{className:"mini-button commission-confirm-button",type:"button",onClick:re,disabled:M||Y<=0,children:[t.jsx(Uv,{size:14}),i(M?"common.processing":"ticket.confirmCommissionAction")]})})]}),h?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(bt,{label:i("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[u!=null&&u.message&&u.message.length>0?u.message.map(x=>{const A=x.is_me;return t.jsxs("div",{className:`chat-message ${A?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:x.message}),t.jsxs("div",{className:"chat-meta",children:[A?i("ticket.staff"):`${i("ticket.user")} #${x.user_id}`," • ",Dd(x.created_at)]})]},x.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:i("ticket.noLogs")}),t.jsx("div",{ref:I})]}),(u==null?void 0:u.status)===0?t.jsx("form",{className:"modal-form",onSubmit:g,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:i("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:j,onChange:x=>S(x.target.value),placeholder:i("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W||!j.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(Cx,{size:14}),W?"":i("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:i("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        .commission-value {
          color: var(--accent-strong);
          font-weight: 800;
        }
        .user-details-actions {
          grid-column: 1 / -1;
          display: flex;
          justify-content: flex-end;
        }
        .commission-confirm-button:disabled {
          cursor: not-allowed;
          opacity: 0.58;
        }
        @media (max-width: 480px) {
          .user-details-bar {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 10px 14px;
          }
          .user-details-actions {
            justify-content: stretch;
          }
          .user-details-actions .mini-button {
            width: 100%;
            justify-content: center;
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
      `}})]})}function cx(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const dx={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function ux(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function Vw(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState([]),[u,m]=f.useState(null),[h,k]=f.useState(!0),[y,v]=f.useState(!1),[j,S]=f.useState(""),[_,$]=f.useState(""),W=f.useCallback(async()=>{k(!0),S("");try{d(await v1())}catch(D){S(D instanceof Error?D.message:i("knowledge.loadFailed"))}finally{k(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}W()},[W,s]);async function G(D){var I;try{const te=await j1(D.id);m(ux(te))}catch(te){(I=window.showToast)==null||I.call(window,te instanceof Error?te.message:i("knowledge.detailFailed"),"error")}}async function M(D){var I,te;if(D.preventDefault(),!!u){v(!0),S(""),$("");try{await w1({id:u.id,category:u.category,title:u.title,body:u.body,language:u.language||null,sort:u.sort?Number(u.sort):null}),m(null),(I=window.showToast)==null||I.call(window,i("knowledge.saveSuccess"),"success"),await W()}catch(ie){(te=window.showToast)==null||te.call(window,ie instanceof Error?ie.message:i("knowledge.saveFailed"),"error")}finally{v(!1)}}}async function Q(D){var I;try{await N1(D),await W()}catch(te){(I=window.showToast)==null||I.call(window,te instanceof Error?te.message:i("knowledge.toggleFailed"),"error")}}async function q(D){var I;(I=window.showConfirm)==null||I.call(window,{message:i("knowledge.deleteConfirm"),onConfirm:async()=>{var te,ie;try{await _1(D),(te=window.showToast)==null||te.call(window,i("knowledge.deleteSuccess"),"success"),await W()}catch(T){(ie=window.showToast)==null||ie.call(window,T instanceof Error?T.message:i("knowledge.deleteFailed"),"error")}}})}return t.jsxs(Vt,{title:i("knowledge.title"),subtitle:i("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",i("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:h,children:[t.jsx(At,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>m(ux()),children:[t.jsx(On,{size:16}),i("knowledge.addArticle")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,_?t.jsx("div",{className:"form-success",children:_}):null,h&&o.length===0?t.jsx(bt,{label:i("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("knowledge.category")}),t.jsx("th",{children:i("knowledge.titleField")}),t.jsx("th",{children:i("knowledge.language")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("knowledge.sort")}),t.jsx("th",{children:i("knowledge.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(D=>t.jsxs("tr",{children:[t.jsx("td",{children:D.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:D.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:D.title})}),t.jsx("td",{children:D.language&&dx[D.language]||D.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${D.show?"active":""}`,type:"button",onClick:()=>void Q(D.id),"aria-label":i("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:D.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:cx(D.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void G(D),children:[t.jsx(Jt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void q(D.id),children:[t.jsx(nn,{size:14}),i("common.delete")]})]})})]},D.id)),!h&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(D=>t.jsxs("div",{className:`knowledge-mobile-card ${D.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",D.id]}),D.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",D.sort]})]}),t.jsx("button",{className:`admin-switch ${D.show?"active":""}`,type:"button",onClick:()=>void Q(D.id),"aria-label":D.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:D.title}),t.jsxs("div",{className:"card-meta",children:[D.category&&t.jsx("span",{className:"category-badge",children:D.category}),D.language&&t.jsx("span",{className:"lang-badge",children:dx[D.language]||D.language})]}),t.jsxs("p",{className:"created-time",children:[i("knowledge.created"),": ",cx(D.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void G(D),children:[t.jsx(Jt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void q(D.id),children:[t.jsx(nn,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},D.id)),!h&&o.length===0?t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?i("knowledge.editArticle"):i("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:M,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:u.category,onChange:D=>m({...u,category:D.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:D=>m({...u,title:D.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:u.body,onChange:D=>m({...u,body:D.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:u.language,onChange:D=>m({...u,language:D.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:i("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:i("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:i("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:i("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:i("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:i("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:i("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:u.sort,onChange:D=>m({...u,sort:D.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(Un,{size:16}),i(y?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function Pw(){const s=qt(),{t:i}=Qe(),[o,d]=f.useState(null),[u,m]=f.useState(null),[h,k]=f.useState(null),[y,v]=f.useState(""),[j,S]=f.useState(!0),[_,$]=f.useState(""),W=f.useCallback(async()=>{S(!0),$("");try{const[M,Q,q,D]=await Promise.all([T1().catch(()=>({data:{}})),D1().catch(()=>({data:{}})),A1().catch(()=>({data:[]})),O1().catch(()=>({data:""}))]);d(M.data),m(Q.data),k(q.data),v(typeof D.data=="string"?D.data:"")}catch(M){$(M instanceof Error?M.message:i("queue.toastLoadFailed"))}finally{S(!1)}},[i]);f.useEffect(()=>{if(!Bt()){s.replace("/login");return}W()},[W,s]);function G(M,Q,q){return M?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[q," ",Q]}),t.jsx("div",{className:"queue-grid",children:Object.entries(M).map(([D,I])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:D}),t.jsx("strong",{children:typeof I=="object"?JSON.stringify(I):String(I??"—")})]},D))})]}):null}return t.jsxs(Vt,{title:i("queue.title"),subtitle:i("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("queue.heading")}),t.jsx("p",{children:i("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:j,children:[t.jsx(At,{size:16}),i("common.refresh")]})})]}),_?t.jsx("div",{className:"form-error",children:_}):null,j?t.jsx(bt,{label:i("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[G(o,i("queue.systemStatus"),t.jsx(Xo,{size:18})),G(u,i("queue.queueStats"),t.jsx(tu,{size:18})),h&&h.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(Ev,{size:18})," ",i("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(h,null,2)})]}):null,y?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(qv,{size:18})," ",i("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:y})]}):null]})]})}const Ww=f.createContext(null);function Iw({children:s}){const[i,o]=f.useState([]),[d,u]=f.useState(null),m=f.useCallback((v,j="success")=>{const S=Math.random().toString(36).substring(2,9);o(_=>[..._,{id:S,message:v,type:j}]),setTimeout(()=>{o(_=>_.filter($=>$.id!==S))},5e3)},[]),h=f.useCallback(v=>{u(v)},[]);f.useEffect(()=>{typeof window<"u"&&(window.showToast=m,window.showConfirm=h)},[m,h]);const k=async()=>{if(d){try{await d.onConfirm()}catch(v){console.error("Error in onConfirm:",v)}u(null)}},y=()=>{d&&(d.onCancel&&d.onCancel(),u(null))};return t.jsxs(Ww.Provider,{value:{showToast:m,showConfirm:h},children:[s,t.jsx("div",{className:"toast-container",children:i.map(v=>{let j=Zv;return v.type==="success"&&(j=Sx),v.type==="error"&&(j=Ov),v.type==="warning"&&(j=Bd),t.jsxs("div",{className:`toast-card toast-${v.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(j,{size:18})}),t.jsx("div",{className:"toast-message",children:v.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(S=>S.filter(_=>_.id!==v.id)),children:t.jsx(lt,{size:14})})]},v.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:y,children:t.jsxs("div",{className:"confirm-card",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(Bd,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:y,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:k,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function e2({children:s}){return t.jsx(Q1,{children:t.jsx(Iw,{children:s})})}function t2(){return t.jsx(e2,{children:t.jsxs(mv,{children:[t.jsx(Tt,{path:"/login",element:t.jsx(X1,{})}),t.jsx(Tt,{path:"/dashboard",element:t.jsx(lj,{})}),t.jsx(Tt,{path:"/config/system",element:t.jsx(fj,{})}),t.jsx(Tt,{path:"/config/payment",element:t.jsx(bj,{})}),t.jsx(Tt,{path:"/config/theme",element:t.jsx(jj,{})}),t.jsx(Tt,{path:"/server/manage",element:t.jsx(sw,{})}),t.jsx(Tt,{path:"/server/group",element:t.jsx(ow,{})}),t.jsx(Tt,{path:"/server/route",element:t.jsx(dw,{})}),t.jsx(Tt,{path:"/plan",element:t.jsx(hw,{})}),t.jsx(Tt,{path:"/order",element:t.jsx(gw,{})}),t.jsx(Tt,{path:"/coupon",element:t.jsx(bw,{})}),t.jsx(Tt,{path:"/giftcard",element:t.jsx(vw,{})}),t.jsx(Tt,{path:"/user",element:t.jsx(Cw,{})}),t.jsx(Tt,{path:"/subscription",element:t.jsx(Hw,{})}),t.jsx(Tt,{path:"/device",element:t.jsx(Yw,{})}),t.jsx(Tt,{path:"/webcon",element:t.jsx(Kw,{})}),t.jsx(Tt,{path:"/notice",element:t.jsx(Fw,{})}),t.jsx(Tt,{path:"/ticket",element:t.jsx(Jw,{})}),t.jsx(Tt,{path:"/knowledge",element:t.jsx(Vw,{})}),t.jsx(Tt,{path:"/queue",element:t.jsx(Pw,{})}),t.jsx(Tt,{path:"/",element:t.jsx(ff,{to:"/dashboard",replace:!0})}),t.jsx(Tt,{path:"*",element:t.jsx(ff,{to:"/dashboard",replace:!0})})]})})}jy.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsx(vv,{children:t.jsx(t2,{})})}));
