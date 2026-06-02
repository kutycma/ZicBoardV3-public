function qb(s,i){for(var o=0;o<i.length;o++){const d=i[o];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in s)){const h=Object.getOwnPropertyDescriptor(d,p);h&&Object.defineProperty(s,p,h.get?h:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function o(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=o(p);fetch(p.href,h)}})();function Bb(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ic={exports:{}},Ki={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function Gb(){if(Of)return Ki;Of=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(d,p,h){var m=null;if(h!==void 0&&(m=""+h),p.key!==void 0&&(m=""+p.key),"key"in p){h={};for(var y in p)y!=="key"&&(h[y]=p[y])}else h=p;return p=h.ref,{$$typeof:s,type:d,key:m,ref:p!==void 0?p:null,props:h}}return Ki.Fragment=i,Ki.jsx=o,Ki.jsxs=o,Ki}var Af;function Yb(){return Af||(Af=1,Ic.exports=Gb()),Ic.exports}var t=Yb(),ed={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function $b(){if(Uf)return De;Uf=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),H=Symbol.iterator;function X(_){return _===null||typeof _!="object"?null:(_=H&&_[H]||_["@@iterator"],typeof _=="function"?_:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,z={};function B(_,F,de){this.props=_,this.context=F,this.refs=z,this.updater=de||ee}B.prototype.isReactComponent={},B.prototype.setState=function(_,F){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,F,"setState")},B.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function U(){}U.prototype=B.prototype;function A(_,F,de){this.props=_,this.context=F,this.refs=z,this.updater=de||ee}var P=A.prototype=new U;P.constructor=A,Z(P,B.prototype),P.isPureReactComponent=!0;var se=Array.isArray;function oe(){}var O={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function ae(_,F,de){var ue=de.ref;return{$$typeof:s,type:_,key:F,ref:ue!==void 0?ue:null,props:de}}function fe(_,F){return ae(_.type,F,_.props)}function w(_){return typeof _=="object"&&_!==null&&_.$$typeof===s}function R(_){var F={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(de){return F[de]})}var C=/\/+/g;function T(_,F){return typeof _=="object"&&_!==null&&_.key!=null?R(""+_.key):F.toString(36)}function te(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(oe,oe):(_.status="pending",_.then(function(F){_.status==="pending"&&(_.status="fulfilled",_.value=F)},function(F){_.status==="pending"&&(_.status="rejected",_.reason=F)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function S(_,F,de,ue,_e){var ke=typeof _;(ke==="undefined"||ke==="boolean")&&(_=null);var Ae=!1;if(_===null)Ae=!0;else switch(ke){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(_.$$typeof){case s:case i:Ae=!0;break;case v:return Ae=_._init,S(Ae(_._payload),F,de,ue,_e)}}if(Ae)return _e=_e(_),Ae=ue===""?"."+T(_,0):ue,se(_e)?(de="",Ae!=null&&(de=Ae.replace(C,"$&/")+"/"),S(_e,F,de,"",function(tt){return tt})):_e!=null&&(w(_e)&&(_e=fe(_e,de+(_e.key==null||_&&_.key===_e.key?"":(""+_e.key).replace(C,"$&/")+"/")+Ae)),F.push(_e)),1;Ae=0;var et=ue===""?".":ue+":";if(se(_))for(var Re=0;Re<_.length;Re++)ue=_[Re],ke=et+T(ue,Re),Ae+=S(ue,F,de,ke,_e);else if(Re=X(_),typeof Re=="function")for(_=Re.call(_),Re=0;!(ue=_.next()).done;)ue=ue.value,ke=et+T(ue,Re++),Ae+=S(ue,F,de,ke,_e);else if(ke==="object"){if(typeof _.then=="function")return S(te(_),F,de,ue,_e);throw F=String(_),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function $(_,F,de){if(_==null)return _;var ue=[],_e=0;return S(_,ue,"","",function(ke){return F.call(de,ke,_e++)}),ue}function E(_){if(_._status===-1){var F=_._result;F=F(),F.then(function(de){(_._status===0||_._status===-1)&&(_._status=1,_._result=de)},function(de){(_._status===0||_._status===-1)&&(_._status=2,_._result=de)}),_._status===-1&&(_._status=0,_._result=F)}if(_._status===1)return _._result.default;throw _._result}var ce=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)},K={map:$,forEach:function(_,F,de){$(_,function(){F.apply(this,arguments)},de)},count:function(_){var F=0;return $(_,function(){F++}),F},toArray:function(_){return $(_,function(F){return F})||[]},only:function(_){if(!w(_))throw Error("React.Children.only expected to receive a single React element child.");return _}};return De.Activity=g,De.Children=K,De.Component=B,De.Fragment=o,De.Profiler=p,De.PureComponent=A,De.StrictMode=d,De.Suspense=j,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,De.__COMPILER_RUNTIME={__proto__:null,c:function(_){return O.H.useMemoCache(_)}},De.cache=function(_){return function(){return _.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(_,F,de){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var ue=Z({},_.props),_e=_.key;if(F!=null)for(ke in F.key!==void 0&&(_e=""+F.key),F)!Y.call(F,ke)||ke==="key"||ke==="__self"||ke==="__source"||ke==="ref"&&F.ref===void 0||(ue[ke]=F[ke]);var ke=arguments.length-2;if(ke===1)ue.children=de;else if(1<ke){for(var Ae=Array(ke),et=0;et<ke;et++)Ae[et]=arguments[et+2];ue.children=Ae}return ae(_.type,_e,ue)},De.createContext=function(_){return _={$$typeof:m,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:h,_context:_},_},De.createElement=function(_,F,de){var ue,_e={},ke=null;if(F!=null)for(ue in F.key!==void 0&&(ke=""+F.key),F)Y.call(F,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(_e[ue]=F[ue]);var Ae=arguments.length-2;if(Ae===1)_e.children=de;else if(1<Ae){for(var et=Array(Ae),Re=0;Re<Ae;Re++)et[Re]=arguments[Re+2];_e.children=et}if(_&&_.defaultProps)for(ue in Ae=_.defaultProps,Ae)_e[ue]===void 0&&(_e[ue]=Ae[ue]);return ae(_,ke,_e)},De.createRef=function(){return{current:null}},De.forwardRef=function(_){return{$$typeof:y,render:_}},De.isValidElement=w,De.lazy=function(_){return{$$typeof:v,_payload:{_status:-1,_result:_},_init:E}},De.memo=function(_,F){return{$$typeof:b,type:_,compare:F===void 0?null:F}},De.startTransition=function(_){var F=O.T,de={};O.T=de;try{var ue=_(),_e=O.S;_e!==null&&_e(de,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(oe,ce)}catch(ke){ce(ke)}finally{F!==null&&de.types!==null&&(F.types=de.types),O.T=F}},De.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},De.use=function(_){return O.H.use(_)},De.useActionState=function(_,F,de){return O.H.useActionState(_,F,de)},De.useCallback=function(_,F){return O.H.useCallback(_,F)},De.useContext=function(_){return O.H.useContext(_)},De.useDebugValue=function(){},De.useDeferredValue=function(_,F){return O.H.useDeferredValue(_,F)},De.useEffect=function(_,F){return O.H.useEffect(_,F)},De.useEffectEvent=function(_){return O.H.useEffectEvent(_)},De.useId=function(){return O.H.useId()},De.useImperativeHandle=function(_,F,de){return O.H.useImperativeHandle(_,F,de)},De.useInsertionEffect=function(_,F){return O.H.useInsertionEffect(_,F)},De.useLayoutEffect=function(_,F){return O.H.useLayoutEffect(_,F)},De.useMemo=function(_,F){return O.H.useMemo(_,F)},De.useOptimistic=function(_,F){return O.H.useOptimistic(_,F)},De.useReducer=function(_,F,de){return O.H.useReducer(_,F,de)},De.useRef=function(_){return O.H.useRef(_)},De.useState=function(_){return O.H.useState(_)},De.useSyncExternalStore=function(_,F,de){return O.H.useSyncExternalStore(_,F,de)},De.useTransition=function(){return O.H.useTransition()},De.version="19.2.6",De}var Rf;function Dd(){return Rf||(Rf=1,ed.exports=$b()),ed.exports}var f=Dd();const Vb=Bb(f),Qb=qb({__proto__:null,default:Vb},[f]);var td={exports:{}},Ji={},ad={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function Xb(){return Hf||(Hf=1,(function(s){function i(S,$){var E=S.length;S.push($);e:for(;0<E;){var ce=E-1>>>1,K=S[ce];if(0<p(K,$))S[ce]=$,S[E]=K,E=ce;else break e}}function o(S){return S.length===0?null:S[0]}function d(S){if(S.length===0)return null;var $=S[0],E=S.pop();if(E!==$){S[0]=E;e:for(var ce=0,K=S.length,_=K>>>1;ce<_;){var F=2*(ce+1)-1,de=S[F],ue=F+1,_e=S[ue];if(0>p(de,E))ue<K&&0>p(_e,de)?(S[ce]=_e,S[ue]=E,ce=ue):(S[ce]=de,S[F]=E,ce=F);else if(ue<K&&0>p(_e,E))S[ce]=_e,S[ue]=E,ce=ue;else break e}}return $}function p(S,$){var E=S.sortIndex-$.sortIndex;return E!==0?E:S.id-$.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var m=Date,y=m.now();s.unstable_now=function(){return m.now()-y}}var j=[],b=[],v=1,g=null,H=3,X=!1,ee=!1,Z=!1,z=!1,B=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function P(S){for(var $=o(b);$!==null;){if($.callback===null)d(b);else if($.startTime<=S)d(b),$.sortIndex=$.expirationTime,i(j,$);else break;$=o(b)}}function se(S){if(Z=!1,P(S),!ee)if(o(j)!==null)ee=!0,oe||(oe=!0,R());else{var $=o(b);$!==null&&te(se,$.startTime-S)}}var oe=!1,O=-1,Y=5,ae=-1;function fe(){return z?!0:!(s.unstable_now()-ae<Y)}function w(){if(z=!1,oe){var S=s.unstable_now();ae=S;var $=!0;try{e:{ee=!1,Z&&(Z=!1,U(O),O=-1),X=!0;var E=H;try{t:{for(P(S),g=o(j);g!==null&&!(g.expirationTime>S&&fe());){var ce=g.callback;if(typeof ce=="function"){g.callback=null,H=g.priorityLevel;var K=ce(g.expirationTime<=S);if(S=s.unstable_now(),typeof K=="function"){g.callback=K,P(S),$=!0;break t}g===o(j)&&d(j),P(S)}else d(j);g=o(j)}if(g!==null)$=!0;else{var _=o(b);_!==null&&te(se,_.startTime-S),$=!1}}break e}finally{g=null,H=E,X=!1}$=void 0}}finally{$?R():oe=!1}}}var R;if(typeof A=="function")R=function(){A(w)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,T=C.port2;C.port1.onmessage=w,R=function(){T.postMessage(null)}}else R=function(){B(w,0)};function te(S,$){O=B(function(){S(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(S){S.callback=null},s.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<S?Math.floor(1e3/S):5},s.unstable_getCurrentPriorityLevel=function(){return H},s.unstable_next=function(S){switch(H){case 1:case 2:case 3:var $=3;break;default:$=H}var E=H;H=$;try{return S()}finally{H=E}},s.unstable_requestPaint=function(){z=!0},s.unstable_runWithPriority=function(S,$){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var E=H;H=S;try{return $()}finally{H=E}},s.unstable_scheduleCallback=function(S,$,E){var ce=s.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?ce+E:ce):E=ce,S){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=E+K,S={id:v++,callback:$,priorityLevel:S,startTime:E,expirationTime:K,sortIndex:-1},E>ce?(S.sortIndex=E,i(b,S),o(j)===null&&S===o(b)&&(Z?(U(O),O=-1):Z=!0,te(se,E-ce))):(S.sortIndex=K,i(j,S),ee||X||(ee=!0,oe||(oe=!0,R()))),S},s.unstable_shouldYield=fe,s.unstable_wrapCallback=function(S){var $=H;return function(){var E=H;H=$;try{return S.apply(this,arguments)}finally{H=E}}}})(nd)),nd}var Lf;function Zb(){return Lf||(Lf=1,ad.exports=Xb()),ad.exports}var ld={exports:{}},Pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function Kb(){if(qf)return Pt;qf=1;var s=Dd();function i(j){var b="https://react.dev/errors/"+j;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)b+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+j+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(j,b,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:g==null?null:""+g,children:j,containerInfo:b,implementation:v}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(j,b){if(j==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Pt.createPortal=function(j,b){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(i(299));return h(j,b,null,v)},Pt.flushSync=function(j){var b=m.T,v=d.p;try{if(m.T=null,d.p=2,j)return j()}finally{m.T=b,d.p=v,d.d.f()}},Pt.preconnect=function(j,b){typeof j=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,d.d.C(j,b))},Pt.prefetchDNS=function(j){typeof j=="string"&&d.d.D(j)},Pt.preinit=function(j,b){if(typeof j=="string"&&b&&typeof b.as=="string"){var v=b.as,g=y(v,b.crossOrigin),H=typeof b.integrity=="string"?b.integrity:void 0,X=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;v==="style"?d.d.S(j,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:g,integrity:H,fetchPriority:X}):v==="script"&&d.d.X(j,{crossOrigin:g,integrity:H,fetchPriority:X,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Pt.preinitModule=function(j,b){if(typeof j=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var v=y(b.as,b.crossOrigin);d.d.M(j,{crossOrigin:v,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&d.d.M(j)},Pt.preload=function(j,b){if(typeof j=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var v=b.as,g=y(v,b.crossOrigin);d.d.L(j,v,{crossOrigin:g,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Pt.preloadModule=function(j,b){if(typeof j=="string")if(b){var v=y(b.as,b.crossOrigin);d.d.m(j,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:v,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else d.d.m(j)},Pt.requestFormReset=function(j){d.d.r(j)},Pt.unstable_batchedUpdates=function(j,b){return j(b)},Pt.useFormState=function(j,b,v){return m.H.useFormState(j,b,v)},Pt.useFormStatus=function(){return m.H.useHostTransitionStatus()},Pt.version="19.2.6",Pt}var Bf;function Xh(){if(Bf)return ld.exports;Bf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),ld.exports=Kb(),ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf;function Jb(){if(Gf)return Ji;Gf=1;var s=Zb(),i=Dd(),o=Xh();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function m(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function y(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function j(e){if(h(e)!==e)throw Error(d(188))}function b(e){var a=e.alternate;if(!a){if(a=h(e),a===null)throw Error(d(188));return a!==e?null:e}for(var n=e,l=a;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return j(r),e;if(c===l)return j(r),a;c=c.sibling}throw Error(d(188))}if(n.return!==l.return)n=r,l=c;else{for(var u=!1,x=r.child;x;){if(x===n){u=!0,n=r,l=c;break}if(x===l){u=!0,l=r,n=c;break}x=x.sibling}if(!u){for(x=c.child;x;){if(x===n){u=!0,n=c,l=r;break}if(x===l){u=!0,l=c,n=r;break}x=x.sibling}if(!u)throw Error(d(189))}}if(n.alternate!==l)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:a}function v(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=v(e),a!==null)return a;e=e.sibling}return null}var g=Object.assign,H=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),ee=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),A=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),w=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var C=Symbol.for("react.client.reference");function T(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===C?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case B:return"Profiler";case z:return"StrictMode";case se:return"Suspense";case oe:return"SuspenseList";case ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ee:return"Portal";case A:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case P:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return a=e.displayName||null,a!==null?a:T(e.type)||"Memo";case Y:a=e._payload,e=e._init;try{return T(e(a))}catch{}}return null}var te=Array.isArray,S=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E={pending:!1,data:null,method:null,action:null},ce=[],K=-1;function _(e){return{current:e}}function F(e){0>K||(e.current=ce[K],ce[K]=null,K--)}function de(e,a){K++,ce[K]=e.current,e.current=a}var ue=_(null),_e=_(null),ke=_(null),Ae=_(null);function et(e,a){switch(de(ke,a),de(_e,e),de(ue,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?tf(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=tf(a),e=af(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(ue),de(ue,e)}function Re(){F(ue),F(_e),F(ke)}function tt(e){e.memoizedState!==null&&de(Ae,e);var a=ue.current,n=af(a,e.type);a!==n&&(de(_e,e),de(ue,n))}function Wt(e){_e.current===e&&(F(ue),F(_e)),Ae.current===e&&(F(Ae),Vi._currentValue=E)}var Ut,aa;function xt(e){if(Ut===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Ut=a&&a[1]||"",aa=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ut+e+aa}var na=!1;function pt(e,a){if(!e||na)return"";na=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(W){var J=W}Reflect.construct(e,[],le)}else{try{le.call()}catch(W){J=W}e.call(le.prototype)}}else{try{throw Error()}catch(W){J=W}(le=e())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(W){if(W&&J&&typeof W.stack=="string")return[W.stack,J.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),u=c[0],x=c[1];if(u&&x){var k=u.split(`
`),Q=x.split(`
`);for(r=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;r<Q.length&&!Q[r].includes("DetermineComponentFrameRoot");)r++;if(l===k.length||r===Q.length)for(l=k.length-1,r=Q.length-1;1<=l&&0<=r&&k[l]!==Q[r];)r--;for(;1<=l&&0<=r;l--,r--)if(k[l]!==Q[r]){if(l!==1||r!==1)do if(l--,r--,0>r||k[l]!==Q[r]){var I=`
`+k[l].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=l&&0<=r);break}}}finally{na=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?xt(n):""}function Vt(e,a){switch(e.tag){case 26:case 27:case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return e.child!==a&&a!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return pt(e.type,!1);case 11:return pt(e.type.render,!1);case 1:return pt(e.type,!0);case 31:return xt("Activity");default:return""}}function Qt(e){try{var a="",n=null;do a+=Vt(e,n),n=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ea=Object.prototype.hasOwnProperty,Gt=s.unstable_scheduleCallback,Rt=s.unstable_cancelCallback,ma=s.unstable_shouldYield,M=s.unstable_requestPaint,ye=s.unstable_now,Oe=s.unstable_getCurrentPriorityLevel,je=s.unstable_ImmediatePriority,G=s.unstable_UserBlockingPriority,xe=s.unstable_NormalPriority,ve=s.unstable_LowPriority,Ce=s.unstable_IdlePriority,Ze=s.log,Ke=s.unstable_setDisableYieldValue,it=null,Ee=null;function bt(e){if(typeof Ze=="function"&&Ke(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(it,e)}catch{}}var Ht=Math.clz32?Math.clz32:q,Ga=Math.log,Za=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Ga(e)/Za|0)|0}var re=256,ie=262144,He=4194304;function Qe(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Je(e,a,n){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var x=l&134217727;return x!==0?(l=x&~c,l!==0?r=Qe(l):(u&=x,u!==0?r=Qe(u):n||(n=x&~e,n!==0&&(r=Qe(n))))):(x=l&~c,x!==0?r=Qe(x):u!==0?r=Qe(u):n||(n=l&~e,n!==0&&(r=Qe(n)))),r===0?0:a!==0&&a!==r&&(a&c)===0&&(c=r&-r,n=a&-a,c>=n||c===32&&(n&4194048)!==0)?a:r}function st(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Ye(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function la(){var e=He;return He<<=1,(He&62914560)===0&&(He=4194304),e}function ut(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function Fn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $o(e,a,n,l,r,c){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,k=e.expirationTimes,Q=e.hiddenUpdates;for(n=u&~n;0<n;){var I=31-Ht(n),le=1<<I;x[I]=0,k[I]=-1;var J=Q[I];if(J!==null)for(Q[I]=null,I=0;I<J.length;I++){var W=J[I];W!==null&&(W.lane&=-536870913)}n&=~le}l!==0&&Ha(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(u&~a))}function Ha(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Ht(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function rs(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var l=31-Ht(n),r=1<<l;r&a|e[l]&a&&(e[l]|=a),n&=~r}}function N(e,a){var n=a&-a;return n=(n&42)!==0?1:he(n),(n&(e.suspendedLanes|a))!==0?0:n}function he(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ge(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:kf(e.type))}function Tt(e,a){var n=$.p;try{return $.p=e,a()}finally{$.p=n}}var fa=Math.random().toString(36).slice(2),yt="__reactFiber$"+fa,ia="__reactProps$"+fa,gl="__reactContainer$"+fa,Vo="__reactEvents$"+fa,zx="__reactListeners$"+fa,Tx="__reactHandles$"+fa,Yd="__reactResources$"+fa,ii="__reactMarker$"+fa;function Qo(e){delete e[yt],delete e[ia],delete e[Vo],delete e[zx],delete e[Tx]}function bl(e){var a=e[yt];if(a)return a;for(var n=e.parentNode;n;){if(a=n[gl]||n[yt]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[yt])return n;e=df(e)}return a}e=n,n=e.parentNode}return null}function yl(e){if(e=e[yt]||e[gl]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function si(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function vl(e){var a=e[Yd];return a||(a=e[Yd]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Yt(e){e[ii]=!0}var $d=new Set,Vd={};function Wn(e,a){jl(e,a),jl(e+"Capture",a)}function jl(e,a){for(Vd[e]=a,e=0;e<a.length;e++)$d.add(a[e])}var Ex=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qd={},Xd={};function Mx(e){return ea.call(Xd,e)?!0:ea.call(Qd,e)?!1:Ex.test(e)?Xd[e]=!0:(Qd[e]=!0,!1)}function cs(e,a,n){if(Mx(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+n)}}function ds(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+n)}}function Ka(e,a,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,""+l)}}function ka(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zd(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Dx(e,a,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,c=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return r.call(this)},set:function(u){n=""+u,c.call(this,u)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Xo(e){if(!e._valueTracker){var a=Zd(e)?"checked":"value";e._valueTracker=Dx(e,a,""+e[a])}}function Kd(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),l="";return e&&(l=Zd(e)?e.checked?"true":"false":e.value),e=l,e!==n?(a.setValue(e),!0):!1}function us(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ox=/[\n"\\]/g;function Ca(e){return e.replace(Ox,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Zo(e,a,n,l,r,c,u,x){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ka(a)):e.value!==""+ka(a)&&(e.value=""+ka(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?Ko(e,u,ka(a)):n!=null?Ko(e,u,ka(n)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+ka(x):e.removeAttribute("name")}function Jd(e,a,n,l,r,c,u,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),a!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||a!=null)){Xo(e);return}n=n!=null?""+ka(n):"",a=a!=null?""+ka(a):n,x||a===e.value||(e.value=a),e.defaultValue=a}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=x?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Xo(e)}function Ko(e,a,n){a==="number"&&us(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function wl(e,a,n,l){if(e=e.options,a){a={};for(var r=0;r<n.length;r++)a["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=a.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+ka(n),a=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}a!==null||e[r].disabled||(a=e[r])}a!==null&&(a.selected=!0)}}function Fd(e,a,n){if(a!=null&&(a=""+ka(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+ka(n):""}function Wd(e,a,n,l){if(a==null){if(l!=null){if(n!=null)throw Error(d(92));if(te(l)){if(1<l.length)throw Error(d(93));l=l[0]}n=l}n==null&&(n=""),a=n}n=ka(a),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Xo(e)}function Nl(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var Ax=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pd(e,a,n){var l=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,n):typeof n!="number"||n===0||Ax.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function Id(e,a,n){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in a)l=a[r],a.hasOwnProperty(r)&&n[r]!==l&&Pd(e,r,l)}else for(var c in a)a.hasOwnProperty(c)&&Pd(e,c,a[c])}function Jo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ux=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ps(e){return Rx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ja(){}var Fo=null;function Wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,Sl=null;function eu(e){var a=yl(e);if(a&&(e=a.stateNode)){var n=e[ia]||null;e:switch(e=a.stateNode,a.type){case"input":if(Zo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ca(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var l=n[a];if(l!==e&&l.form===e.form){var r=l[ia]||null;if(!r)throw Error(d(90));Zo(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(a=0;a<n.length;a++)l=n[a],l.form===e.form&&Kd(l)}break e;case"textarea":Fd(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&wl(e,!!n.multiple,a,!1)}}}var Po=!1;function tu(e,a,n){if(Po)return e(a,n);Po=!0;try{var l=e(a);return l}finally{if(Po=!1,(_l!==null||Sl!==null)&&(Is(),_l&&(a=_l,e=Sl,Sl=_l=null,eu(a),e)))for(a=0;a<e.length;a++)eu(e[a])}}function oi(e,a){var n=e.stateNode;if(n===null)return null;var l=n[ia]||null;if(l===null)return null;n=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,a,typeof n));return n}var Fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=!1;if(Fa)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){Io=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{Io=!1}var bn=null,er=null,ms=null;function au(){if(ms)return ms;var e,a=er,n=a.length,l,r="value"in bn?bn.value:bn.textContent,c=r.length;for(e=0;e<n&&a[e]===r[e];e++);var u=n-e;for(l=1;l<=u&&a[n-l]===r[c-l];l++);return ms=r.slice(e,1<l?1-l:void 0)}function fs(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function hs(){return!0}function nu(){return!1}function sa(e){function a(n,l,r,c,u){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=u,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?hs:nu,this.isPropagationStopped=nu,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),a}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=sa(Pn),ci=g({},Pn,{view:0,detail:0}),Hx=sa(ci),tr,ar,di,gs=g({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==di&&(di&&e.type==="mousemove"?(tr=e.screenX-di.screenX,ar=e.screenY-di.screenY):ar=tr=0,di=e),tr)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),lu=sa(gs),Lx=g({},gs,{dataTransfer:0}),qx=sa(Lx),Bx=g({},ci,{relatedTarget:0}),nr=sa(Bx),Gx=g({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),Yx=sa(Gx),$x=g({},Pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vx=sa($x),Qx=g({},Pn,{data:0}),iu=sa(Qx),Xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jx(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Kx[e])?!!a[e]:!1}function lr(){return Jx}var Fx=g({},ci,{key:function(e){if(e.key){var a=Xx[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lr,charCode:function(e){return e.type==="keypress"?fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wx=sa(Fx),Px=g({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=sa(Px),Ix=g({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lr}),eg=sa(Ix),tg=g({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ag=sa(tg),ng=g({},gs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lg=sa(ng),ig=g({},Pn,{newState:0,oldState:0}),sg=sa(ig),og=[9,13,27,32],ir=Fa&&"CompositionEvent"in window,ui=null;Fa&&"documentMode"in document&&(ui=document.documentMode);var rg=Fa&&"TextEvent"in window&&!ui,ou=Fa&&(!ir||ui&&8<ui&&11>=ui),ru=" ",cu=!1;function du(e,a){switch(e){case"keyup":return og.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kl=!1;function cg(e,a){switch(e){case"compositionend":return uu(a);case"keypress":return a.which!==32?null:(cu=!0,ru);case"textInput":return e=a.data,e===ru&&cu?null:e;default:return null}}function dg(e,a){if(kl)return e==="compositionend"||!ir&&du(e,a)?(e=au(),ms=er=bn=null,kl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ou&&a.locale!=="ko"?null:a.data;default:return null}}var ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pu(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!ug[e.type]:a==="textarea"}function mu(e,a,n,l){_l?Sl?Sl.push(l):Sl=[l]:_l=l,a=so(a,"onChange"),0<a.length&&(n=new xs("onChange","change",null,n,l),e.push({event:n,listeners:a}))}var pi=null,mi=null;function pg(e){Jm(e,0)}function bs(e){var a=si(e);if(Kd(a))return e}function fu(e,a){if(e==="change")return a}var hu=!1;if(Fa){var sr;if(Fa){var or="oninput"in document;if(!or){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),or=typeof xu.oninput=="function"}sr=or}else sr=!1;hu=sr&&(!document.documentMode||9<document.documentMode)}function gu(){pi&&(pi.detachEvent("onpropertychange",bu),mi=pi=null)}function bu(e){if(e.propertyName==="value"&&bs(mi)){var a=[];mu(a,mi,e,Wo(e)),tu(pg,a)}}function mg(e,a,n){e==="focusin"?(gu(),pi=a,mi=n,pi.attachEvent("onpropertychange",bu)):e==="focusout"&&gu()}function fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bs(mi)}function hg(e,a){if(e==="click")return bs(a)}function xg(e,a){if(e==="input"||e==="change")return bs(a)}function gg(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ha=typeof Object.is=="function"?Object.is:gg;function fi(e,a){if(ha(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),l=Object.keys(a);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!ea.call(a,r)||!ha(e[r],a[r]))return!1}return!0}function yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vu(e,a){var n=yu(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=a&&l>=a)return{node:n,offset:a-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yu(n)}}function ju(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?ju(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function wu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=us(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=us(e.document)}return a}function rr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var bg=Fa&&"documentMode"in document&&11>=document.documentMode,Cl=null,cr=null,hi=null,dr=!1;function Nu(e,a,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dr||Cl==null||Cl!==us(l)||(l=Cl,"selectionStart"in l&&rr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),hi&&fi(hi,l)||(hi=l,l=so(cr,"onSelect"),0<l.length&&(a=new xs("onSelect","select",null,a,n),e.push({event:a,listeners:l}),a.target=Cl)))}function In(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var zl={animationend:In("Animation","AnimationEnd"),animationiteration:In("Animation","AnimationIteration"),animationstart:In("Animation","AnimationStart"),transitionrun:In("Transition","TransitionRun"),transitionstart:In("Transition","TransitionStart"),transitioncancel:In("Transition","TransitionCancel"),transitionend:In("Transition","TransitionEnd")},ur={},_u={};Fa&&(_u=document.createElement("div").style,"AnimationEvent"in window||(delete zl.animationend.animation,delete zl.animationiteration.animation,delete zl.animationstart.animation),"TransitionEvent"in window||delete zl.transitionend.transition);function el(e){if(ur[e])return ur[e];if(!zl[e])return e;var a=zl[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in _u)return ur[e]=a[n];return e}var Su=el("animationend"),ku=el("animationiteration"),Cu=el("animationstart"),yg=el("transitionrun"),vg=el("transitionstart"),jg=el("transitioncancel"),zu=el("transitionend"),Tu=new Map,pr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pr.push("scrollEnd");function La(e,a){Tu.set(e,a),Wn(a,[e])}var ys=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},za=[],Tl=0,mr=0;function vs(){for(var e=Tl,a=mr=Tl=0;a<e;){var n=za[a];za[a++]=null;var l=za[a];za[a++]=null;var r=za[a];za[a++]=null;var c=za[a];if(za[a++]=null,l!==null&&r!==null){var u=l.pending;u===null?r.next=r:(r.next=u.next,u.next=r),l.pending=r}c!==0&&Eu(n,r,c)}}function js(e,a,n,l){za[Tl++]=e,za[Tl++]=a,za[Tl++]=n,za[Tl++]=l,mr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function fr(e,a,n,l){return js(e,a,n,l),ws(e)}function tl(e,a){return js(e,null,null,a),ws(e)}function Eu(e,a,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,l=c.alternate,l!==null&&(l.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&a!==null&&(r=31-Ht(n),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[a]:l.push(a),a.lane=n|536870912),c):null}function ws(e){if(50<Hi)throw Hi=0,Nc=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var El={};function wg(e,a,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xa(e,a,n,l){return new wg(e,a,n,l)}function hr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wa(e,a){var n=e.alternate;return n===null?(n=xa(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Mu(e,a){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Ns(e,a,n,l,r,c){var u=0;if(l=e,typeof e=="function")hr(e)&&(u=1);else if(typeof e=="string")u=Cb(e,n,ue.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ae:return e=xa(31,n,a,r),e.elementType=ae,e.lanes=c,e;case Z:return al(n.children,r,c,a);case z:u=8,r|=24;break;case B:return e=xa(12,n,a,r|2),e.elementType=B,e.lanes=c,e;case se:return e=xa(13,n,a,r),e.elementType=se,e.lanes=c,e;case oe:return e=xa(19,n,a,r),e.elementType=oe,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:u=10;break e;case U:u=9;break e;case P:u=11;break e;case O:u=14;break e;case Y:u=16,l=null;break e}u=29,n=Error(d(130,e===null?"null":typeof e,"")),l=null}return a=xa(u,n,a,r),a.elementType=e,a.type=l,a.lanes=c,a}function al(e,a,n,l){return e=xa(7,e,l,a),e.lanes=n,e}function xr(e,a,n){return e=xa(6,e,null,a),e.lanes=n,e}function Du(e){var a=xa(18,null,null,0);return a.stateNode=e,a}function gr(e,a,n){return a=xa(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Ou=new WeakMap;function Ta(e,a){if(typeof e=="object"&&e!==null){var n=Ou.get(e);return n!==void 0?n:(a={value:e,source:a,stack:Qt(a)},Ou.set(e,a),a)}return{value:e,source:a,stack:Qt(a)}}var Ml=[],Dl=0,_s=null,xi=0,Ea=[],Ma=0,yn=null,Ya=1,$a="";function Pa(e,a){Ml[Dl++]=xi,Ml[Dl++]=_s,_s=e,xi=a}function Au(e,a,n){Ea[Ma++]=Ya,Ea[Ma++]=$a,Ea[Ma++]=yn,yn=e;var l=Ya;e=$a;var r=32-Ht(l)-1;l&=~(1<<r),n+=1;var c=32-Ht(a)+r;if(30<c){var u=r-r%5;c=(l&(1<<u)-1).toString(32),l>>=u,r-=u,Ya=1<<32-Ht(a)+r|n<<r|l,$a=c+e}else Ya=1<<c|n<<r|l,$a=e}function br(e){e.return!==null&&(Pa(e,1),Au(e,1,0))}function yr(e){for(;e===_s;)_s=Ml[--Dl],Ml[Dl]=null,xi=Ml[--Dl],Ml[Dl]=null;for(;e===yn;)yn=Ea[--Ma],Ea[Ma]=null,$a=Ea[--Ma],Ea[Ma]=null,Ya=Ea[--Ma],Ea[Ma]=null}function Uu(e,a){Ea[Ma++]=Ya,Ea[Ma++]=$a,Ea[Ma++]=yn,Ya=a.id,$a=a.overflow,yn=e}var Xt=null,mt=null,Xe=!1,vn=null,Da=!1,vr=Error(d(519));function jn(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw gi(Ta(a,e)),vr}function Ru(e){var a=e.stateNode,n=e.type,l=e.memoizedProps;switch(a[yt]=e,a[ia]=l,n){case"dialog":Ge("cancel",a),Ge("close",a);break;case"iframe":case"object":case"embed":Ge("load",a);break;case"video":case"audio":for(n=0;n<qi.length;n++)Ge(qi[n],a);break;case"source":Ge("error",a);break;case"img":case"image":case"link":Ge("error",a),Ge("load",a);break;case"details":Ge("toggle",a);break;case"input":Ge("invalid",a),Jd(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ge("invalid",a);break;case"textarea":Ge("invalid",a),Wd(a,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||l.suppressHydrationWarning===!0||Im(a.textContent,n)?(l.popover!=null&&(Ge("beforetoggle",a),Ge("toggle",a)),l.onScroll!=null&&Ge("scroll",a),l.onScrollEnd!=null&&Ge("scrollend",a),l.onClick!=null&&(a.onclick=Ja),a=!0):a=!1,a||jn(e,!0)}function Hu(e){for(Xt=e.return;Xt;)switch(Xt.tag){case 5:case 31:case 13:Da=!1;return;case 27:case 3:Da=!0;return;default:Xt=Xt.return}}function Ol(e){if(e!==Xt)return!1;if(!Xe)return Hu(e),Xe=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Lc(e.type,e.memoizedProps)),n=!n),n&&mt&&jn(e),Hu(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));mt=cf(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));mt=cf(e)}else a===27?(a=mt,Un(e.type)?(e=$c,$c=null,mt=e):mt=a):mt=Xt?Aa(e.stateNode.nextSibling):null;return!0}function nl(){mt=Xt=null,Xe=!1}function jr(){var e=vn;return e!==null&&(da===null?da=e:da.push.apply(da,e),vn=null),e}function gi(e){vn===null?vn=[e]:vn.push(e)}var wr=_(null),ll=null,Ia=null;function wn(e,a,n){de(wr,a._currentValue),a._currentValue=n}function en(e){e._currentValue=wr.current,F(wr)}function Nr(e,a,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===n)break;e=e.return}}function _r(e,a,n,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var u=r.child;c=c.firstContext;e:for(;c!==null;){var x=c;c=r;for(var k=0;k<a.length;k++)if(x.context===a[k]){c.lanes|=n,x=c.alternate,x!==null&&(x.lanes|=n),Nr(c.return,n,e),l||(u=null);break e}c=x.next}}else if(r.tag===18){if(u=r.return,u===null)throw Error(d(341));u.lanes|=n,c=u.alternate,c!==null&&(c.lanes|=n),Nr(u,n,e),u=null}else u=r.child;if(u!==null)u.return=r;else for(u=r;u!==null;){if(u===e){u=null;break}if(r=u.sibling,r!==null){r.return=u.return,u=r;break}u=u.return}r=u}}function Al(e,a,n,l){e=null;for(var r=a,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var u=r.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var x=r.type;ha(r.pendingProps.value,u.value)||(e!==null?e.push(x):e=[x])}}else if(r===Ae.current){if(u=r.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Vi):e=[Vi])}r=r.return}e!==null&&_r(a,e,n,l),a.flags|=262144}function Ss(e){for(e=e.firstContext;e!==null;){if(!ha(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function il(e){ll=e,Ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zt(e){return Lu(ll,e)}function ks(e,a){return ll===null&&il(e),Lu(e,a)}function Lu(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},Ia===null){if(e===null)throw Error(d(308));Ia=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Ia=Ia.next=a;return n}var Ng=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},_g=s.unstable_scheduleCallback,Sg=s.unstable_NormalPriority,Et={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sr(){return{controller:new Ng,data:new Map,refCount:0}}function bi(e){e.refCount--,e.refCount===0&&_g(Sg,function(){e.controller.abort()})}var yi=null,kr=0,Ul=0,Rl=null;function kg(e,a){if(yi===null){var n=yi=[];kr=0,Ul=Tc(),Rl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return kr++,a.then(qu,qu),a}function qu(){if(--kr===0&&yi!==null){Rl!==null&&(Rl.status="fulfilled");var e=yi;yi=null,Ul=0,Rl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Cg(e,a){var n=[],l={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var r=0;r<n.length;r++)(0,n[r])(a)},function(r){for(l.status="rejected",l.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),l}var Bu=S.S;S.S=function(e,a){Nm=ye(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&kg(e,a),Bu!==null&&Bu(e,a)};var sl=_(null);function Cr(){var e=sl.current;return e!==null?e:dt.pooledCache}function Cs(e,a){a===null?de(sl,sl.current):de(sl,a.pool)}function Gu(){var e=Cr();return e===null?null:{parent:Et._currentValue,pool:e}}var Hl=Error(d(460)),zr=Error(d(474)),zs=Error(d(542)),Ts={then:function(){}};function Yu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $u(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(Ja,Ja),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Qu(e),e;default:if(typeof a.status=="string")a.then(Ja,Ja);else{if(e=dt,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var r=a;r.status="fulfilled",r.value=l}},function(l){if(a.status==="pending"){var r=a;r.status="rejected",r.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Qu(e),e}throw rl=a,Hl}}function ol(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(rl=n,Hl):n}}var rl=null;function Vu(){if(rl===null)throw Error(d(459));var e=rl;return rl=null,e}function Qu(e){if(e===Hl||e===zs)throw Error(d(483))}var Ll=null,vi=0;function Es(e){var a=vi;return vi+=1,Ll===null&&(Ll=[]),$u(Ll,e,a)}function ji(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ms(e,a){throw a.$$typeof===H?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Xu(e){function a(L,D){if(e){var V=L.deletions;V===null?(L.deletions=[D],L.flags|=16):V.push(D)}}function n(L,D){if(!e)return null;for(;D!==null;)a(L,D),D=D.sibling;return null}function l(L){for(var D=new Map;L!==null;)L.key!==null?D.set(L.key,L):D.set(L.index,L),L=L.sibling;return D}function r(L,D){return L=Wa(L,D),L.index=0,L.sibling=null,L}function c(L,D,V){return L.index=V,e?(V=L.alternate,V!==null?(V=V.index,V<D?(L.flags|=67108866,D):V):(L.flags|=67108866,D)):(L.flags|=1048576,D)}function u(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function x(L,D,V,ne){return D===null||D.tag!==6?(D=xr(V,L.mode,ne),D.return=L,D):(D=r(D,V),D.return=L,D)}function k(L,D,V,ne){var Se=V.type;return Se===Z?I(L,D,V.props.children,ne,V.key):D!==null&&(D.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===Y&&ol(Se)===D.type)?(D=r(D,V.props),ji(D,V),D.return=L,D):(D=Ns(V.type,V.key,V.props,null,L.mode,ne),ji(D,V),D.return=L,D)}function Q(L,D,V,ne){return D===null||D.tag!==4||D.stateNode.containerInfo!==V.containerInfo||D.stateNode.implementation!==V.implementation?(D=gr(V,L.mode,ne),D.return=L,D):(D=r(D,V.children||[]),D.return=L,D)}function I(L,D,V,ne,Se){return D===null||D.tag!==7?(D=al(V,L.mode,ne,Se),D.return=L,D):(D=r(D,V),D.return=L,D)}function le(L,D,V){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=xr(""+D,L.mode,V),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case X:return V=Ns(D.type,D.key,D.props,null,L.mode,V),ji(V,D),V.return=L,V;case ee:return D=gr(D,L.mode,V),D.return=L,D;case Y:return D=ol(D),le(L,D,V)}if(te(D)||R(D))return D=al(D,L.mode,V,null),D.return=L,D;if(typeof D.then=="function")return le(L,Es(D),V);if(D.$$typeof===A)return le(L,ks(L,D),V);Ms(L,D)}return null}function J(L,D,V,ne){var Se=D!==null?D.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return Se!==null?null:x(L,D,""+V,ne);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case X:return V.key===Se?k(L,D,V,ne):null;case ee:return V.key===Se?Q(L,D,V,ne):null;case Y:return V=ol(V),J(L,D,V,ne)}if(te(V)||R(V))return Se!==null?null:I(L,D,V,ne,null);if(typeof V.then=="function")return J(L,D,Es(V),ne);if(V.$$typeof===A)return J(L,D,ks(L,V),ne);Ms(L,V)}return null}function W(L,D,V,ne,Se){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return L=L.get(V)||null,x(D,L,""+ne,Se);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case X:return L=L.get(ne.key===null?V:ne.key)||null,k(D,L,ne,Se);case ee:return L=L.get(ne.key===null?V:ne.key)||null,Q(D,L,ne,Se);case Y:return ne=ol(ne),W(L,D,V,ne,Se)}if(te(ne)||R(ne))return L=L.get(V)||null,I(D,L,ne,Se,null);if(typeof ne.then=="function")return W(L,D,V,Es(ne),Se);if(ne.$$typeof===A)return W(L,D,V,ks(D,ne),Se);Ms(D,ne)}return null}function we(L,D,V,ne){for(var Se=null,Fe=null,Ne=D,Le=D=0,Ve=null;Ne!==null&&Le<V.length;Le++){Ne.index>Le?(Ve=Ne,Ne=null):Ve=Ne.sibling;var We=J(L,Ne,V[Le],ne);if(We===null){Ne===null&&(Ne=Ve);break}e&&Ne&&We.alternate===null&&a(L,Ne),D=c(We,D,Le),Fe===null?Se=We:Fe.sibling=We,Fe=We,Ne=Ve}if(Le===V.length)return n(L,Ne),Xe&&Pa(L,Le),Se;if(Ne===null){for(;Le<V.length;Le++)Ne=le(L,V[Le],ne),Ne!==null&&(D=c(Ne,D,Le),Fe===null?Se=Ne:Fe.sibling=Ne,Fe=Ne);return Xe&&Pa(L,Le),Se}for(Ne=l(Ne);Le<V.length;Le++)Ve=W(Ne,L,Le,V[Le],ne),Ve!==null&&(e&&Ve.alternate!==null&&Ne.delete(Ve.key===null?Le:Ve.key),D=c(Ve,D,Le),Fe===null?Se=Ve:Fe.sibling=Ve,Fe=Ve);return e&&Ne.forEach(function(Bn){return a(L,Bn)}),Xe&&Pa(L,Le),Se}function ze(L,D,V,ne){if(V==null)throw Error(d(151));for(var Se=null,Fe=null,Ne=D,Le=D=0,Ve=null,We=V.next();Ne!==null&&!We.done;Le++,We=V.next()){Ne.index>Le?(Ve=Ne,Ne=null):Ve=Ne.sibling;var Bn=J(L,Ne,We.value,ne);if(Bn===null){Ne===null&&(Ne=Ve);break}e&&Ne&&Bn.alternate===null&&a(L,Ne),D=c(Bn,D,Le),Fe===null?Se=Bn:Fe.sibling=Bn,Fe=Bn,Ne=Ve}if(We.done)return n(L,Ne),Xe&&Pa(L,Le),Se;if(Ne===null){for(;!We.done;Le++,We=V.next())We=le(L,We.value,ne),We!==null&&(D=c(We,D,Le),Fe===null?Se=We:Fe.sibling=We,Fe=We);return Xe&&Pa(L,Le),Se}for(Ne=l(Ne);!We.done;Le++,We=V.next())We=W(Ne,L,Le,We.value,ne),We!==null&&(e&&We.alternate!==null&&Ne.delete(We.key===null?Le:We.key),D=c(We,D,Le),Fe===null?Se=We:Fe.sibling=We,Fe=We);return e&&Ne.forEach(function(Lb){return a(L,Lb)}),Xe&&Pa(L,Le),Se}function ct(L,D,V,ne){if(typeof V=="object"&&V!==null&&V.type===Z&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case X:e:{for(var Se=V.key;D!==null;){if(D.key===Se){if(Se=V.type,Se===Z){if(D.tag===7){n(L,D.sibling),ne=r(D,V.props.children),ne.return=L,L=ne;break e}}else if(D.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===Y&&ol(Se)===D.type){n(L,D.sibling),ne=r(D,V.props),ji(ne,V),ne.return=L,L=ne;break e}n(L,D);break}else a(L,D);D=D.sibling}V.type===Z?(ne=al(V.props.children,L.mode,ne,V.key),ne.return=L,L=ne):(ne=Ns(V.type,V.key,V.props,null,L.mode,ne),ji(ne,V),ne.return=L,L=ne)}return u(L);case ee:e:{for(Se=V.key;D!==null;){if(D.key===Se)if(D.tag===4&&D.stateNode.containerInfo===V.containerInfo&&D.stateNode.implementation===V.implementation){n(L,D.sibling),ne=r(D,V.children||[]),ne.return=L,L=ne;break e}else{n(L,D);break}else a(L,D);D=D.sibling}ne=gr(V,L.mode,ne),ne.return=L,L=ne}return u(L);case Y:return V=ol(V),ct(L,D,V,ne)}if(te(V))return we(L,D,V,ne);if(R(V)){if(Se=R(V),typeof Se!="function")throw Error(d(150));return V=Se.call(V),ze(L,D,V,ne)}if(typeof V.then=="function")return ct(L,D,Es(V),ne);if(V.$$typeof===A)return ct(L,D,ks(L,V),ne);Ms(L,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,D!==null&&D.tag===6?(n(L,D.sibling),ne=r(D,V),ne.return=L,L=ne):(n(L,D),ne=xr(V,L.mode,ne),ne.return=L,L=ne),u(L)):n(L,D)}return function(L,D,V,ne){try{vi=0;var Se=ct(L,D,V,ne);return Ll=null,Se}catch(Ne){if(Ne===Hl||Ne===zs)throw Ne;var Fe=xa(29,Ne,null,L.mode);return Fe.lanes=ne,Fe.return=L,Fe}finally{}}}var cl=Xu(!0),Zu=Xu(!1),Nn=!1;function Tr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Er(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(e,a,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ie&2)!==0){var r=l.pending;return r===null?a.next=a:(a.next=r.next,r.next=a),l.pending=a,a=ws(e),Eu(e,null,n),a}return js(e,l,a,n),ws(e)}function wi(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,n|=l,a.lanes=n,rs(e,n)}}function Mr(e,a){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=u:c=c.next=u,n=n.next}while(n!==null);c===null?r=c=a:c=c.next=a}else r=c=a;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var Dr=!1;function Ni(){if(Dr){var e=Rl;if(e!==null)throw e}}function _i(e,a,n,l){Dr=!1;var r=e.updateQueue;Nn=!1;var c=r.firstBaseUpdate,u=r.lastBaseUpdate,x=r.shared.pending;if(x!==null){r.shared.pending=null;var k=x,Q=k.next;k.next=null,u===null?c=Q:u.next=Q,u=k;var I=e.alternate;I!==null&&(I=I.updateQueue,x=I.lastBaseUpdate,x!==u&&(x===null?I.firstBaseUpdate=Q:x.next=Q,I.lastBaseUpdate=k))}if(c!==null){var le=r.baseState;u=0,I=Q=k=null,x=c;do{var J=x.lane&-536870913,W=J!==x.lane;if(W?($e&J)===J:(l&J)===J){J!==0&&J===Ul&&(Dr=!0),I!==null&&(I=I.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var we=e,ze=x;J=a;var ct=n;switch(ze.tag){case 1:if(we=ze.payload,typeof we=="function"){le=we.call(ct,le,J);break e}le=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=ze.payload,J=typeof we=="function"?we.call(ct,le,J):we,J==null)break e;le=g({},le,J);break e;case 2:Nn=!0}}J=x.callback,J!==null&&(e.flags|=64,W&&(e.flags|=8192),W=r.callbacks,W===null?r.callbacks=[J]:W.push(J))}else W={lane:J,tag:x.tag,payload:x.payload,callback:x.callback,next:null},I===null?(Q=I=W,k=le):I=I.next=W,u|=J;if(x=x.next,x===null){if(x=r.shared.pending,x===null)break;W=x,x=W.next,W.next=null,r.lastBaseUpdate=W,r.shared.pending=null}}while(!0);I===null&&(k=le),r.baseState=k,r.firstBaseUpdate=Q,r.lastBaseUpdate=I,c===null&&(r.shared.lanes=0),En|=u,e.lanes=u,e.memoizedState=le}}function Ku(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function Ju(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ku(n[e],a)}var ql=_(null),Ds=_(0);function Fu(e,a){e=dn,de(Ds,e),de(ql,a),dn=e|a.baseLanes}function Or(){de(Ds,dn),de(ql,ql.current)}function Ar(){dn=Ds.current,F(ql),F(Ds)}var ga=_(null),Oa=null;function kn(e){var a=e.alternate;de(_t,_t.current&1),de(ga,e),Oa===null&&(a===null||ql.current!==null||a.memoizedState!==null)&&(Oa=e)}function Ur(e){de(_t,_t.current),de(ga,e),Oa===null&&(Oa=e)}function Wu(e){e.tag===22?(de(_t,_t.current),de(ga,e),Oa===null&&(Oa=e)):Cn()}function Cn(){de(_t,_t.current),de(ga,ga.current)}function ba(e){F(ga),Oa===e&&(Oa=null),F(_t)}var _t=_(0);function Os(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Gc(n)||Yc(n)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var tn=0,Ue=null,ot=null,Mt=null,As=!1,Bl=!1,dl=!1,Us=0,Si=0,Gl=null,zg=0;function jt(){throw Error(d(321))}function Rr(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!ha(e[n],a[n]))return!1;return!0}function Hr(e,a,n,l,r,c){return tn=c,Ue=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,S.H=e===null||e.memoizedState===null?Ap:Pr,dl=!1,c=n(l,r),dl=!1,Bl&&(c=Iu(a,n,l,r)),Pu(e),c}function Pu(e){S.H=zi;var a=ot!==null&&ot.next!==null;if(tn=0,Mt=ot=Ue=null,As=!1,Si=0,Gl=null,a)throw Error(d(300));e===null||Dt||(e=e.dependencies,e!==null&&Ss(e)&&(Dt=!0))}function Iu(e,a,n,l){Ue=e;var r=0;do{if(Bl&&(Gl=null),Si=0,Bl=!1,25<=r)throw Error(d(301));if(r+=1,Mt=ot=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}S.H=Up,c=a(n,l)}while(Bl);return c}function Tg(){var e=S.H,a=e.useState()[0];return a=typeof a.then=="function"?ki(a):a,e=e.useState()[0],(ot!==null?ot.memoizedState:null)!==e&&(Ue.flags|=1024),a}function Lr(){var e=Us!==0;return Us=0,e}function qr(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function Br(e){if(As){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}As=!1}tn=0,Mt=ot=Ue=null,Bl=!1,Si=Us=0,Gl=null}function ta(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?Ue.memoizedState=Mt=e:Mt=Mt.next=e,Mt}function St(){if(ot===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=ot.next;var a=Mt===null?Ue.memoizedState:Mt.next;if(a!==null)Mt=a,ot=e;else{if(e===null)throw Ue.alternate===null?Error(d(467)):Error(d(310));ot=e,e={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},Mt===null?Ue.memoizedState=Mt=e:Mt=Mt.next=e}return Mt}function Rs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ki(e){var a=Si;return Si+=1,Gl===null&&(Gl=[]),e=$u(Gl,e,a),a=Ue,(Mt===null?a.memoizedState:Mt.next)===null&&(a=a.alternate,S.H=a===null||a.memoizedState===null?Ap:Pr),e}function Hs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ki(e);if(e.$$typeof===A)return Zt(e)}throw Error(d(438,String(e)))}function Gr(e){var a=null,n=Ue.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var l=Ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(r){return r.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=Rs(),Ue.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),l=0;l<e;l++)n[l]=fe;return a.index++,n}function an(e,a){return typeof a=="function"?a(e):a}function Ls(e){var a=St();return Yr(a,ot,e)}function Yr(e,a,n){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=n;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var u=r.next;r.next=c.next,c.next=u}a.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{a=r.next;var x=u=null,k=null,Q=a,I=!1;do{var le=Q.lane&-536870913;if(le!==Q.lane?($e&le)===le:(tn&le)===le){var J=Q.revertLane;if(J===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),le===Ul&&(I=!0);else if((tn&J)===J){Q=Q.next,J===Ul&&(I=!0);continue}else le={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},k===null?(x=k=le,u=c):k=k.next=le,Ue.lanes|=J,En|=J;le=Q.action,dl&&n(c,le),c=Q.hasEagerState?Q.eagerState:n(c,le)}else J={lane:le,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},k===null?(x=k=J,u=c):k=k.next=J,Ue.lanes|=le,En|=le;Q=Q.next}while(Q!==null&&Q!==a);if(k===null?u=c:k.next=x,!ha(c,e.memoizedState)&&(Dt=!0,I&&(n=Rl,n!==null)))throw n;e.memoizedState=c,e.baseState=u,e.baseQueue=k,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function $r(e){var a=St(),n=a.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,c=a.memoizedState;if(r!==null){n.pending=null;var u=r=r.next;do c=e(c,u.action),u=u.next;while(u!==r);ha(c,a.memoizedState)||(Dt=!0),a.memoizedState=c,a.baseQueue===null&&(a.baseState=c),n.lastRenderedState=c}return[c,l]}function ep(e,a,n){var l=Ue,r=St(),c=Xe;if(c){if(n===void 0)throw Error(d(407));n=n()}else n=a();var u=!ha((ot||r).memoizedState,n);if(u&&(r.memoizedState=n,Dt=!0),r=r.queue,Xr(np.bind(null,l,r,e),[e]),r.getSnapshot!==a||u||Mt!==null&&Mt.memoizedState.tag&1){if(l.flags|=2048,Yl(9,{destroy:void 0},ap.bind(null,l,r,n,a),null),dt===null)throw Error(d(349));c||(tn&127)!==0||tp(l,a,n)}return n}function tp(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=Ue.updateQueue,a===null?(a=Rs(),Ue.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function ap(e,a,n,l){a.value=n,a.getSnapshot=l,lp(a)&&ip(e)}function np(e,a,n){return n(function(){lp(a)&&ip(e)})}function lp(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!ha(e,n)}catch{return!0}}function ip(e){var a=tl(e,2);a!==null&&ua(a,e,2)}function Vr(e){var a=ta();if(typeof e=="function"){var n=e;if(e=n(),dl){bt(!0);try{n()}finally{bt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:e},a}function sp(e,a,n,l){return e.baseState=n,Yr(e,ot,typeof l=="function"?l:an)}function Eg(e,a,n,l,r){if(Gs(e))throw Error(d(485));if(e=a.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){c.listeners.push(u)}};S.T!==null?n(!0):c.isTransition=!1,l(c),n=a.pending,n===null?(c.next=a.pending=c,op(a,c)):(c.next=n.next,a.pending=n.next=c)}}function op(e,a){var n=a.action,l=a.payload,r=e.state;if(a.isTransition){var c=S.T,u={};S.T=u;try{var x=n(r,l),k=S.S;k!==null&&k(u,x),rp(e,a,x)}catch(Q){Qr(e,a,Q)}finally{c!==null&&u.types!==null&&(c.types=u.types),S.T=c}}else try{c=n(r,l),rp(e,a,c)}catch(Q){Qr(e,a,Q)}}function rp(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){cp(e,a,l)},function(l){return Qr(e,a,l)}):cp(e,a,n)}function cp(e,a,n){a.status="fulfilled",a.value=n,dp(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,op(e,n)))}function Qr(e,a,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=n,dp(a),a=a.next;while(a!==l)}e.action=null}function dp(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function up(e,a){return a}function pp(e,a){if(Xe){var n=dt.formState;if(n!==null){e:{var l=Ue;if(Xe){if(mt){t:{for(var r=mt,c=Da;r.nodeType!==8;){if(!c){r=null;break t}if(r=Aa(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){mt=Aa(r.nextSibling),l=r.data==="F!";break e}}jn(l)}l=!1}l&&(a=n[0])}}return n=ta(),n.memoizedState=n.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:up,lastRenderedState:a},n.queue=l,n=Mp.bind(null,Ue,l),l.dispatch=n,l=Vr(!1),c=Wr.bind(null,Ue,!1,l.queue),l=ta(),r={state:a,dispatch:null,action:e,pending:null},l.queue=r,n=Eg.bind(null,Ue,r,c,n),r.dispatch=n,l.memoizedState=e,[a,n,!1]}function mp(e){var a=St();return fp(a,ot,e)}function fp(e,a,n){if(a=Yr(e,a,up)[0],e=Ls(an)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=ki(a)}catch(u){throw u===Hl?zs:u}else l=a;a=St();var r=a.queue,c=r.dispatch;return n!==a.memoizedState&&(Ue.flags|=2048,Yl(9,{destroy:void 0},Mg.bind(null,r,n),null)),[l,c,e]}function Mg(e,a){e.action=a}function hp(e){var a=St(),n=ot;if(n!==null)return fp(a,n,e);St(),a=a.memoizedState,n=St();var l=n.queue.dispatch;return n.memoizedState=e,[a,l,!1]}function Yl(e,a,n,l){return e={tag:e,create:n,deps:l,inst:a,next:null},a=Ue.updateQueue,a===null&&(a=Rs(),Ue.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,a.lastEffect=e),e}function xp(){return St().memoizedState}function qs(e,a,n,l){var r=ta();Ue.flags|=e,r.memoizedState=Yl(1|a,{destroy:void 0},n,l===void 0?null:l)}function Bs(e,a,n,l){var r=St();l=l===void 0?null:l;var c=r.memoizedState.inst;ot!==null&&l!==null&&Rr(l,ot.memoizedState.deps)?r.memoizedState=Yl(a,c,n,l):(Ue.flags|=e,r.memoizedState=Yl(1|a,c,n,l))}function gp(e,a){qs(8390656,8,e,a)}function Xr(e,a){Bs(2048,8,e,a)}function Dg(e){Ue.flags|=4;var a=Ue.updateQueue;if(a===null)a=Rs(),Ue.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function bp(e){var a=St().memoizedState;return Dg({ref:a,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function yp(e,a){return Bs(4,2,e,a)}function vp(e,a){return Bs(4,4,e,a)}function jp(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function wp(e,a,n){n=n!=null?n.concat([e]):null,Bs(4,4,jp.bind(null,a,e),n)}function Zr(){}function Np(e,a){var n=St();a=a===void 0?null:a;var l=n.memoizedState;return a!==null&&Rr(a,l[1])?l[0]:(n.memoizedState=[e,a],e)}function _p(e,a){var n=St();a=a===void 0?null:a;var l=n.memoizedState;if(a!==null&&Rr(a,l[1]))return l[0];if(l=e(),dl){bt(!0);try{e()}finally{bt(!1)}}return n.memoizedState=[l,a],l}function Kr(e,a,n){return n===void 0||(tn&1073741824)!==0&&($e&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=Sm(),Ue.lanes|=e,En|=e,n)}function Sp(e,a,n,l){return ha(n,a)?n:ql.current!==null?(e=Kr(e,n,l),ha(e,a)||(Dt=!0),e):(tn&42)===0||(tn&1073741824)!==0&&($e&261930)===0?(Dt=!0,e.memoizedState=n):(e=Sm(),Ue.lanes|=e,En|=e,a)}function kp(e,a,n,l,r){var c=$.p;$.p=c!==0&&8>c?c:8;var u=S.T,x={};S.T=x,Wr(e,!1,a,n);try{var k=r(),Q=S.S;if(Q!==null&&Q(x,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var I=Cg(k,l);Ci(e,a,I,ja(e))}else Ci(e,a,l,ja(e))}catch(le){Ci(e,a,{then:function(){},status:"rejected",reason:le},ja())}finally{$.p=c,u!==null&&x.types!==null&&(u.types=x.types),S.T=u}}function Og(){}function Jr(e,a,n,l){if(e.tag!==5)throw Error(d(476));var r=Cp(e).queue;kp(e,r,a,E,n===null?Og:function(){return zp(e),n(l)})}function Cp(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:E,baseState:E,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:E},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function zp(e){var a=Cp(e);a.next===null&&(a=e.alternate.memoizedState),Ci(e,a.next.queue,{},ja())}function Fr(){return Zt(Vi)}function Tp(){return St().memoizedState}function Ep(){return St().memoizedState}function Ag(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=ja();e=_n(n);var l=Sn(a,e,n);l!==null&&(ua(l,a,n),wi(l,a,n)),a={cache:Sr()},e.payload=a;return}a=a.return}}function Ug(e,a,n){var l=ja();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Gs(e)?Dp(a,n):(n=fr(e,a,n,l),n!==null&&(ua(n,e,l),Op(n,a,l)))}function Mp(e,a,n){var l=ja();Ci(e,a,n,l)}function Ci(e,a,n,l){var r={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gs(e))Dp(a,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=a.lastRenderedReducer,c!==null))try{var u=a.lastRenderedState,x=c(u,n);if(r.hasEagerState=!0,r.eagerState=x,ha(x,u))return js(e,a,r,0),dt===null&&vs(),!1}catch{}finally{}if(n=fr(e,a,r,l),n!==null)return ua(n,e,l),Op(n,a,l),!0}return!1}function Wr(e,a,n,l){if(l={lane:2,revertLane:Tc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Gs(e)){if(a)throw Error(d(479))}else a=fr(e,n,l,2),a!==null&&ua(a,e,2)}function Gs(e){var a=e.alternate;return e===Ue||a!==null&&a===Ue}function Dp(e,a){Bl=As=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function Op(e,a,n){if((n&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,n|=l,a.lanes=n,rs(e,n)}}var zi={readContext:Zt,use:Hs,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useLayoutEffect:jt,useInsertionEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useSyncExternalStore:jt,useId:jt,useHostTransitionStatus:jt,useFormState:jt,useActionState:jt,useOptimistic:jt,useMemoCache:jt,useCacheRefresh:jt};zi.useEffectEvent=jt;var Ap={readContext:Zt,use:Hs,useCallback:function(e,a){return ta().memoizedState=[e,a===void 0?null:a],e},useContext:Zt,useEffect:gp,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,qs(4194308,4,jp.bind(null,a,e),n)},useLayoutEffect:function(e,a){return qs(4194308,4,e,a)},useInsertionEffect:function(e,a){qs(4,2,e,a)},useMemo:function(e,a){var n=ta();a=a===void 0?null:a;var l=e();if(dl){bt(!0);try{e()}finally{bt(!1)}}return n.memoizedState=[l,a],l},useReducer:function(e,a,n){var l=ta();if(n!==void 0){var r=n(a);if(dl){bt(!0);try{n(a)}finally{bt(!1)}}}else r=a;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=Ug.bind(null,Ue,e),[l.memoizedState,e]},useRef:function(e){var a=ta();return e={current:e},a.memoizedState=e},useState:function(e){e=Vr(e);var a=e.queue,n=Mp.bind(null,Ue,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:Zr,useDeferredValue:function(e,a){var n=ta();return Kr(n,e,a)},useTransition:function(){var e=Vr(!1);return e=kp.bind(null,Ue,e.queue,!0,!1),ta().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var l=Ue,r=ta();if(Xe){if(n===void 0)throw Error(d(407));n=n()}else{if(n=a(),dt===null)throw Error(d(349));($e&127)!==0||tp(l,a,n)}r.memoizedState=n;var c={value:n,getSnapshot:a};return r.queue=c,gp(np.bind(null,l,c,e),[e]),l.flags|=2048,Yl(9,{destroy:void 0},ap.bind(null,l,c,n,a),null),n},useId:function(){var e=ta(),a=dt.identifierPrefix;if(Xe){var n=$a,l=Ya;n=(l&~(1<<32-Ht(l)-1)).toString(32)+n,a="_"+a+"R_"+n,n=Us++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=zg++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Fr,useFormState:pp,useActionState:pp,useOptimistic:function(e){var a=ta();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=Wr.bind(null,Ue,!0,n),n.dispatch=a,[e,a]},useMemoCache:Gr,useCacheRefresh:function(){return ta().memoizedState=Ag.bind(null,Ue)},useEffectEvent:function(e){var a=ta(),n={impl:e};return a.memoizedState=n,function(){if((Ie&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},Pr={readContext:Zt,use:Hs,useCallback:Np,useContext:Zt,useEffect:Xr,useImperativeHandle:wp,useInsertionEffect:yp,useLayoutEffect:vp,useMemo:_p,useReducer:Ls,useRef:xp,useState:function(){return Ls(an)},useDebugValue:Zr,useDeferredValue:function(e,a){var n=St();return Sp(n,ot.memoizedState,e,a)},useTransition:function(){var e=Ls(an)[0],a=St().memoizedState;return[typeof e=="boolean"?e:ki(e),a]},useSyncExternalStore:ep,useId:Tp,useHostTransitionStatus:Fr,useFormState:mp,useActionState:mp,useOptimistic:function(e,a){var n=St();return sp(n,ot,e,a)},useMemoCache:Gr,useCacheRefresh:Ep};Pr.useEffectEvent=bp;var Up={readContext:Zt,use:Hs,useCallback:Np,useContext:Zt,useEffect:Xr,useImperativeHandle:wp,useInsertionEffect:yp,useLayoutEffect:vp,useMemo:_p,useReducer:$r,useRef:xp,useState:function(){return $r(an)},useDebugValue:Zr,useDeferredValue:function(e,a){var n=St();return ot===null?Kr(n,e,a):Sp(n,ot.memoizedState,e,a)},useTransition:function(){var e=$r(an)[0],a=St().memoizedState;return[typeof e=="boolean"?e:ki(e),a]},useSyncExternalStore:ep,useId:Tp,useHostTransitionStatus:Fr,useFormState:hp,useActionState:hp,useOptimistic:function(e,a){var n=St();return ot!==null?sp(n,ot,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gr,useCacheRefresh:Ep};Up.useEffectEvent=bp;function Ir(e,a,n,l){a=e.memoizedState,n=n(l,a),n=n==null?a:g({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ec={enqueueSetState:function(e,a,n){e=e._reactInternals;var l=ja(),r=_n(l);r.payload=a,n!=null&&(r.callback=n),a=Sn(e,r,l),a!==null&&(ua(a,e,l),wi(a,e,l))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var l=ja(),r=_n(l);r.tag=1,r.payload=a,n!=null&&(r.callback=n),a=Sn(e,r,l),a!==null&&(ua(a,e,l),wi(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=ja(),l=_n(n);l.tag=2,a!=null&&(l.callback=a),a=Sn(e,l,n),a!==null&&(ua(a,e,n),wi(a,e,n))}};function Rp(e,a,n,l,r,c,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,u):a.prototype&&a.prototype.isPureReactComponent?!fi(n,l)||!fi(r,c):!0}function Hp(e,a,n,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,l),a.state!==e&&ec.enqueueReplaceState(a,a.state,null)}function ul(e,a){var n=a;if("ref"in a){n={};for(var l in a)l!=="ref"&&(n[l]=a[l])}if(e=e.defaultProps){n===a&&(n=g({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Lp(e){ys(e)}function qp(e){console.error(e)}function Bp(e){ys(e)}function Ys(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Gp(e,a,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function tc(e,a,n){return n=_n(n),n.tag=3,n.payload={element:null},n.callback=function(){Ys(e,a)},n}function Yp(e){return e=_n(e),e.tag=3,e}function $p(e,a,n,l){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){Gp(a,n,l)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Gp(a,n,l),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var x=l.stack;this.componentDidCatch(l.value,{componentStack:x!==null?x:""})})}function Rg(e,a,n,l,r){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=n.alternate,a!==null&&Al(a,n,r,!0),n=ga.current,n!==null){switch(n.tag){case 31:case 13:return Oa===null?eo():n.alternate===null&&wt===0&&(wt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,l===Ts?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([l]):a.add(l),kc(e,l,r)),!1;case 22:return n.flags|=65536,l===Ts?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([l]):n.add(l)),kc(e,l,r)),!1}throw Error(d(435,n.tag))}return kc(e,l,r),eo(),!1}if(Xe)return a=ga.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=r,l!==vr&&(e=Error(d(422),{cause:l}),gi(Ta(e,n)))):(l!==vr&&(a=Error(d(423),{cause:l}),gi(Ta(a,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Ta(l,n),r=tc(e.stateNode,l,r),Mr(e,r),wt!==4&&(wt=2)),!1;var c=Error(d(520),{cause:l});if(c=Ta(c,n),Ri===null?Ri=[c]:Ri.push(c),wt!==4&&(wt=2),a===null)return!0;l=Ta(l,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=tc(n.stateNode,l,e),Mr(n,e),!1;case 1:if(a=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Mn===null||!Mn.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Yp(r),$p(r,e,n,l),Mr(n,r),!1}n=n.return}while(n!==null);return!1}var ac=Error(d(461)),Dt=!1;function Kt(e,a,n,l){a.child=e===null?Zu(a,null,n,l):cl(a,e.child,n,l)}function Vp(e,a,n,l,r){n=n.render;var c=a.ref;if("ref"in l){var u={};for(var x in l)x!=="ref"&&(u[x]=l[x])}else u=l;return il(a),l=Hr(e,a,n,u,c,r),x=Lr(),e!==null&&!Dt?(qr(e,a,r),nn(e,a,r)):(Xe&&x&&br(a),a.flags|=1,Kt(e,a,l,r),a.child)}function Qp(e,a,n,l,r){if(e===null){var c=n.type;return typeof c=="function"&&!hr(c)&&c.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=c,Xp(e,a,c,l,r)):(e=Ns(n.type,null,l,a,a.mode,r),e.ref=a.ref,e.return=a,a.child=e)}if(c=e.child,!dc(e,r)){var u=c.memoizedProps;if(n=n.compare,n=n!==null?n:fi,n(u,l)&&e.ref===a.ref)return nn(e,a,r)}return a.flags|=1,e=Wa(c,l),e.ref=a.ref,e.return=a,a.child=e}function Xp(e,a,n,l,r){if(e!==null){var c=e.memoizedProps;if(fi(c,l)&&e.ref===a.ref)if(Dt=!1,a.pendingProps=l=c,dc(e,r))(e.flags&131072)!==0&&(Dt=!0);else return a.lanes=e.lanes,nn(e,a,r)}return nc(e,a,n,l,r)}function Zp(e,a,n,l){var r=l.children,c=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(l=a.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~c}else l=0,a.child=null;return Kp(e,a,c,n,l)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cs(a,c!==null?c.cachePool:null),c!==null?Fu(a,c):Or(),Wu(a);else return l=a.lanes=536870912,Kp(e,a,c!==null?c.baseLanes|n:n,n,l)}else c!==null?(Cs(a,c.cachePool),Fu(a,c),Cn(),a.memoizedState=null):(e!==null&&Cs(a,null),Or(),Cn());return Kt(e,a,r,n),a.child}function Ti(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Kp(e,a,n,l,r){var c=Cr();return c=c===null?null:{parent:Et._currentValue,pool:c},a.memoizedState={baseLanes:n,cachePool:c},e!==null&&Cs(a,null),Or(),Wu(a),e!==null&&Al(e,a,l,!0),a.childLanes=r,null}function $s(e,a){return a=Qs({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Jp(e,a,n){return cl(a,e.child,null,n),e=$s(a,a.pendingProps),e.flags|=2,ba(a),a.memoizedState=null,e}function Hg(e,a,n){var l=a.pendingProps,r=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Xe){if(l.mode==="hidden")return e=$s(a,l),a.lanes=536870912,Ti(null,e);if(Ur(a),(e=mt)?(e=rf(e,Da),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:yn!==null?{id:Ya,overflow:$a}:null,retryLane:536870912,hydrationErrors:null},n=Du(e),n.return=a,a.child=n,Xt=a,mt=null)):e=null,e===null)throw jn(a);return a.lanes=536870912,null}return $s(a,l)}var c=e.memoizedState;if(c!==null){var u=c.dehydrated;if(Ur(a),r)if(a.flags&256)a.flags&=-257,a=Jp(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(Dt||Al(e,a,n,!1),r=(n&e.childLanes)!==0,Dt||r){if(l=dt,l!==null&&(u=N(l,n),u!==0&&u!==c.retryLane))throw c.retryLane=u,tl(e,u),ua(l,e,u),ac;eo(),a=Jp(e,a,n)}else e=c.treeContext,mt=Aa(u.nextSibling),Xt=a,Xe=!0,vn=null,Da=!1,e!==null&&Uu(a,e),a=$s(a,l),a.flags|=4096;return a}return e=Wa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Vs(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function nc(e,a,n,l,r){return il(a),n=Hr(e,a,n,l,void 0,r),l=Lr(),e!==null&&!Dt?(qr(e,a,r),nn(e,a,r)):(Xe&&l&&br(a),a.flags|=1,Kt(e,a,n,r),a.child)}function Fp(e,a,n,l,r,c){return il(a),a.updateQueue=null,n=Iu(a,l,n,r),Pu(e),l=Lr(),e!==null&&!Dt?(qr(e,a,c),nn(e,a,c)):(Xe&&l&&br(a),a.flags|=1,Kt(e,a,n,c),a.child)}function Wp(e,a,n,l,r){if(il(a),a.stateNode===null){var c=El,u=n.contextType;typeof u=="object"&&u!==null&&(c=Zt(u)),c=new n(l,c),a.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ec,a.stateNode=c,c._reactInternals=a,c=a.stateNode,c.props=l,c.state=a.memoizedState,c.refs={},Tr(a),u=n.contextType,c.context=typeof u=="object"&&u!==null?Zt(u):El,c.state=a.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Ir(a,n,u,l),c.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(u=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),u!==c.state&&ec.enqueueReplaceState(c,c.state,null),_i(a,l,c,r),Ni(),c.state=a.memoizedState),typeof c.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){c=a.stateNode;var x=a.memoizedProps,k=ul(n,x);c.props=k;var Q=c.context,I=n.contextType;u=El,typeof I=="object"&&I!==null&&(u=Zt(I));var le=n.getDerivedStateFromProps;I=typeof le=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=a.pendingProps!==x,I||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||Q!==u)&&Hp(a,c,l,u),Nn=!1;var J=a.memoizedState;c.state=J,_i(a,l,c,r),Ni(),Q=a.memoizedState,x||J!==Q||Nn?(typeof le=="function"&&(Ir(a,n,le,l),Q=a.memoizedState),(k=Nn||Rp(a,n,k,l,J,Q,u))?(I||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(a.flags|=4194308)):(typeof c.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=Q),c.props=l,c.state=Q,c.context=u,l=k):(typeof c.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{c=a.stateNode,Er(e,a),u=a.memoizedProps,I=ul(n,u),c.props=I,le=a.pendingProps,J=c.context,Q=n.contextType,k=El,typeof Q=="object"&&Q!==null&&(k=Zt(Q)),x=n.getDerivedStateFromProps,(Q=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(u!==le||J!==k)&&Hp(a,c,l,k),Nn=!1,J=a.memoizedState,c.state=J,_i(a,l,c,r),Ni();var W=a.memoizedState;u!==le||J!==W||Nn||e!==null&&e.dependencies!==null&&Ss(e.dependencies)?(typeof x=="function"&&(Ir(a,n,x,l),W=a.memoizedState),(I=Nn||Rp(a,n,I,l,J,W,k)||e!==null&&e.dependencies!==null&&Ss(e.dependencies))?(Q||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,W,k),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,W,k)),typeof c.componentDidUpdate=="function"&&(a.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&J===e.memoizedState||(a.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&J===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=W),c.props=l,c.state=W,c.context=k,l=I):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&J===e.memoizedState||(a.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&J===e.memoizedState||(a.flags|=1024),l=!1)}return c=l,Vs(e,a),l=(a.flags&128)!==0,c||l?(c=a.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:c.render(),a.flags|=1,e!==null&&l?(a.child=cl(a,e.child,null,r),a.child=cl(a,null,n,r)):Kt(e,a,n,r),a.memoizedState=c.state,e=a.child):e=nn(e,a,r),e}function Pp(e,a,n,l){return nl(),a.flags|=256,Kt(e,a,n,l),a.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ic(e){return{baseLanes:e,cachePool:Gu()}}function sc(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=va),e}function Ip(e,a,n){var l=a.pendingProps,r=!1,c=(a.flags&128)!==0,u;if((u=c)||(u=e!==null&&e.memoizedState===null?!1:(_t.current&2)!==0),u&&(r=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(Xe){if(r?kn(a):Cn(),(e=mt)?(e=rf(e,Da),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:yn!==null?{id:Ya,overflow:$a}:null,retryLane:536870912,hydrationErrors:null},n=Du(e),n.return=a,a.child=n,Xt=a,mt=null)):e=null,e===null)throw jn(a);return Yc(e)?a.lanes=32:a.lanes=536870912,null}var x=l.children;return l=l.fallback,r?(Cn(),r=a.mode,x=Qs({mode:"hidden",children:x},r),l=al(l,r,n,null),x.return=a,l.return=a,x.sibling=l,a.child=x,l=a.child,l.memoizedState=ic(n),l.childLanes=sc(e,u,n),a.memoizedState=lc,Ti(null,l)):(kn(a),oc(a,x))}var k=e.memoizedState;if(k!==null&&(x=k.dehydrated,x!==null)){if(c)a.flags&256?(kn(a),a.flags&=-257,a=rc(e,a,n)):a.memoizedState!==null?(Cn(),a.child=e.child,a.flags|=128,a=null):(Cn(),x=l.fallback,r=a.mode,l=Qs({mode:"visible",children:l.children},r),x=al(x,r,n,null),x.flags|=2,l.return=a,x.return=a,l.sibling=x,a.child=l,cl(a,e.child,null,n),l=a.child,l.memoizedState=ic(n),l.childLanes=sc(e,u,n),a.memoizedState=lc,a=Ti(null,l));else if(kn(a),Yc(x)){if(u=x.nextSibling&&x.nextSibling.dataset,u)var Q=u.dgst;u=Q,l=Error(d(419)),l.stack="",l.digest=u,gi({value:l,source:null,stack:null}),a=rc(e,a,n)}else if(Dt||Al(e,a,n,!1),u=(n&e.childLanes)!==0,Dt||u){if(u=dt,u!==null&&(l=N(u,n),l!==0&&l!==k.retryLane))throw k.retryLane=l,tl(e,l),ua(u,e,l),ac;Gc(x)||eo(),a=rc(e,a,n)}else Gc(x)?(a.flags|=192,a.child=e.child,a=null):(e=k.treeContext,mt=Aa(x.nextSibling),Xt=a,Xe=!0,vn=null,Da=!1,e!==null&&Uu(a,e),a=oc(a,l.children),a.flags|=4096);return a}return r?(Cn(),x=l.fallback,r=a.mode,k=e.child,Q=k.sibling,l=Wa(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,Q!==null?x=Wa(Q,x):(x=al(x,r,n,null),x.flags|=2),x.return=a,l.return=a,l.sibling=x,a.child=l,Ti(null,l),l=a.child,x=e.child.memoizedState,x===null?x=ic(n):(r=x.cachePool,r!==null?(k=Et._currentValue,r=r.parent!==k?{parent:k,pool:k}:r):r=Gu(),x={baseLanes:x.baseLanes|n,cachePool:r}),l.memoizedState=x,l.childLanes=sc(e,u,n),a.memoizedState=lc,Ti(e.child,l)):(kn(a),n=e.child,e=n.sibling,n=Wa(n,{mode:"visible",children:l.children}),n.return=a,n.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=n,a.memoizedState=null,n)}function oc(e,a){return a=Qs({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Qs(e,a){return e=xa(22,e,null,a),e.lanes=0,e}function rc(e,a,n){return cl(a,e.child,null,n),e=oc(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function em(e,a,n){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Nr(e.return,a,n)}function cc(e,a,n,l,r,c){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r,treeForkCount:c}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=r,u.treeForkCount=c)}function tm(e,a,n){var l=a.pendingProps,r=l.revealOrder,c=l.tail;l=l.children;var u=_t.current,x=(u&2)!==0;if(x?(u=u&1|2,a.flags|=128):u&=1,de(_t,u),Kt(e,a,l,n),l=Xe?xi:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,n,a);else if(e.tag===19)em(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=a.child,r=null;n!==null;)e=n.alternate,e!==null&&Os(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=a.child,a.child=null):(r=n.sibling,n.sibling=null),cc(a,!1,r,n,c,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=a.child,a.child=null;r!==null;){if(e=r.alternate,e!==null&&Os(e)===null){a.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}cc(a,!0,n,null,c,l);break;case"together":cc(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function nn(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),En|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(Al(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,n=Wa(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=Wa(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function dc(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Ss(e)))}function Lg(e,a,n){switch(a.tag){case 3:et(a,a.stateNode.containerInfo),wn(a,Et,e.memoizedState.cache),nl();break;case 27:case 5:tt(a);break;case 4:et(a,a.stateNode.containerInfo);break;case 10:wn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ur(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(kn(a),a.flags|=128,null):(n&a.child.childLanes)!==0?Ip(e,a,n):(kn(a),e=nn(e,a,n),e!==null?e.sibling:null);kn(a);break;case 19:var r=(e.flags&128)!==0;if(l=(n&a.childLanes)!==0,l||(Al(e,a,n,!1),l=(n&a.childLanes)!==0),r){if(l)return tm(e,a,n);a.flags|=128}if(r=a.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),de(_t,_t.current),l)break;return null;case 22:return a.lanes=0,Zp(e,a,n,a.pendingProps);case 24:wn(a,Et,e.memoizedState.cache)}return nn(e,a,n)}function am(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)Dt=!0;else{if(!dc(e,n)&&(a.flags&128)===0)return Dt=!1,Lg(e,a,n);Dt=(e.flags&131072)!==0}else Dt=!1,Xe&&(a.flags&1048576)!==0&&Au(a,xi,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=ol(a.elementType),a.type=e,typeof e=="function")hr(e)?(l=ul(e,l),a.tag=1,a=Wp(null,a,e,l,n)):(a.tag=0,a=nc(null,a,e,l,n));else{if(e!=null){var r=e.$$typeof;if(r===P){a.tag=11,a=Vp(null,a,e,l,n);break e}else if(r===O){a.tag=14,a=Qp(null,a,e,l,n);break e}}throw a=T(e)||e,Error(d(306,a,""))}}return a;case 0:return nc(e,a,a.type,a.pendingProps,n);case 1:return l=a.type,r=ul(l,a.pendingProps),Wp(e,a,l,r,n);case 3:e:{if(et(a,a.stateNode.containerInfo),e===null)throw Error(d(387));l=a.pendingProps;var c=a.memoizedState;r=c.element,Er(e,a),_i(a,l,null,n);var u=a.memoizedState;if(l=u.cache,wn(a,Et,l),l!==c.cache&&_r(a,[Et],n,!0),Ni(),l=u.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=c,a.memoizedState=c,a.flags&256){a=Pp(e,a,l,n);break e}else if(l!==r){r=Ta(Error(d(424)),a),gi(r),a=Pp(e,a,l,n);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(mt=Aa(e.firstChild),Xt=a,Xe=!0,vn=null,Da=!0,n=Zu(a,null,l,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(nl(),l===r){a=nn(e,a,n);break e}Kt(e,a,l,n)}a=a.child}return a;case 26:return Vs(e,a),e===null?(n=ff(a.type,null,a.pendingProps,null))?a.memoizedState=n:Xe||(n=a.type,e=a.pendingProps,l=oo(ke.current).createElement(n),l[yt]=a,l[ia]=e,Jt(l,n,e),Yt(l),a.stateNode=l):a.memoizedState=ff(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return tt(a),e===null&&Xe&&(l=a.stateNode=uf(a.type,a.pendingProps,ke.current),Xt=a,Da=!0,r=mt,Un(a.type)?($c=r,mt=Aa(l.firstChild)):mt=r),Kt(e,a,a.pendingProps.children,n),Vs(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Xe&&((r=l=mt)&&(l=fb(l,a.type,a.pendingProps,Da),l!==null?(a.stateNode=l,Xt=a,mt=Aa(l.firstChild),Da=!1,r=!0):r=!1),r||jn(a)),tt(a),r=a.type,c=a.pendingProps,u=e!==null?e.memoizedProps:null,l=c.children,Lc(r,c)?l=null:u!==null&&Lc(r,u)&&(a.flags|=32),a.memoizedState!==null&&(r=Hr(e,a,Tg,null,null,n),Vi._currentValue=r),Vs(e,a),Kt(e,a,l,n),a.child;case 6:return e===null&&Xe&&((e=n=mt)&&(n=hb(n,a.pendingProps,Da),n!==null?(a.stateNode=n,Xt=a,mt=null,e=!0):e=!1),e||jn(a)),null;case 13:return Ip(e,a,n);case 4:return et(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=cl(a,null,l,n):Kt(e,a,l,n),a.child;case 11:return Vp(e,a,a.type,a.pendingProps,n);case 7:return Kt(e,a,a.pendingProps,n),a.child;case 8:return Kt(e,a,a.pendingProps.children,n),a.child;case 12:return Kt(e,a,a.pendingProps.children,n),a.child;case 10:return l=a.pendingProps,wn(a,a.type,l.value),Kt(e,a,l.children,n),a.child;case 9:return r=a.type._context,l=a.pendingProps.children,il(a),r=Zt(r),l=l(r),a.flags|=1,Kt(e,a,l,n),a.child;case 14:return Qp(e,a,a.type,a.pendingProps,n);case 15:return Xp(e,a,a.type,a.pendingProps,n);case 19:return tm(e,a,n);case 31:return Hg(e,a,n);case 22:return Zp(e,a,n,a.pendingProps);case 24:return il(a),l=Zt(Et),e===null?(r=Cr(),r===null&&(r=dt,c=Sr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),a.memoizedState={parent:l,cache:r},Tr(a),wn(a,Et,r)):((e.lanes&n)!==0&&(Er(e,a),_i(a,null,null,n),Ni()),r=e.memoizedState,c=a.memoizedState,r.parent!==l?(r={parent:l,cache:l},a.memoizedState=r,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=r),wn(a,Et,l)):(l=c.cache,wn(a,Et,l),l!==r.cache&&_r(a,[Et],n,!0))),Kt(e,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function ln(e){e.flags|=4}function uc(e,a,n,l,r){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Tm())e.flags|=8192;else throw rl=Ts,zr}else e.flags&=-16777217}function nm(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yf(a))if(Tm())e.flags|=8192;else throw rl=Ts,zr}function Xs(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?la():536870912,e.lanes|=a,Xl|=a)}function Ei(e,a){if(!Xe)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ft(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(a)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,a}function qg(e,a,n){var l=a.pendingProps;switch(yr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(a),null;case 1:return ft(a),null;case 3:return n=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),en(Et),Re(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ol(a)?ln(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,jr())),ft(a),null;case 26:var r=a.type,c=a.memoizedState;return e===null?(ln(a),c!==null?(ft(a),nm(a,c)):(ft(a),uc(a,r,null,l,n))):c?c!==e.memoizedState?(ln(a),ft(a),nm(a,c)):(ft(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&ln(a),ft(a),uc(a,r,e,l,n)),null;case 27:if(Wt(a),n=ke.current,r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ln(a);else{if(!l){if(a.stateNode===null)throw Error(d(166));return ft(a),null}e=ue.current,Ol(a)?Ru(a):(e=uf(r,l,n),a.stateNode=e,ln(a))}return ft(a),null;case 5:if(Wt(a),r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ln(a);else{if(!l){if(a.stateNode===null)throw Error(d(166));return ft(a),null}if(c=ue.current,Ol(a))Ru(a);else{var u=oo(ke.current);switch(c){case 1:c=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=u.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?u.createElement(r,{is:l.is}):u.createElement(r)}}c[yt]=a,c[ia]=l;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)c.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=c;e:switch(Jt(c,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ln(a)}}return ft(a),uc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&ln(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(d(166));if(e=ke.current,Ol(a)){if(e=a.stateNode,n=a.memoizedProps,l=null,r=Xt,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[yt]=a,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Im(e.nodeValue,n)),e||jn(a,!0)}else e=oo(e).createTextNode(l),e[yt]=a,a.stateNode=e}return ft(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(l=Ol(a),n!==null){if(e===null){if(!l)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[yt]=a}else nl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ft(a),e=!1}else n=jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(ba(a),a):(ba(a),null);if((a.flags&128)!==0)throw Error(d(558))}return ft(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ol(a),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=a.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[yt]=a}else nl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ft(a),r=!1}else r=jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return a.flags&256?(ba(a),a):(ba(a),null)}return ba(a),(a.flags&128)!==0?(a.lanes=n,a):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=a.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),Xs(a,a.updateQueue),ft(a),null);case 4:return Re(),e===null&&Oc(a.stateNode.containerInfo),ft(a),null;case 10:return en(a.type),ft(a),null;case 19:if(F(_t),l=a.memoizedState,l===null)return ft(a),null;if(r=(a.flags&128)!==0,c=l.rendering,c===null)if(r)Ei(l,!1);else{if(wt!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(c=Os(e),c!==null){for(a.flags|=128,Ei(l,!1),e=c.updateQueue,a.updateQueue=e,Xs(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)Mu(n,e),n=n.sibling;return de(_t,_t.current&1|2),Xe&&Pa(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&ye()>Ws&&(a.flags|=128,r=!0,Ei(l,!1),a.lanes=4194304)}else{if(!r)if(e=Os(c),e!==null){if(a.flags|=128,r=!0,e=e.updateQueue,a.updateQueue=e,Xs(a,e),Ei(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Xe)return ft(a),null}else 2*ye()-l.renderingStartTime>Ws&&n!==536870912&&(a.flags|=128,r=!0,Ei(l,!1),a.lanes=4194304);l.isBackwards?(c.sibling=a.child,a.child=c):(e=l.last,e!==null?e.sibling=c:a.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ye(),e.sibling=null,n=_t.current,de(_t,r?n&1|2:n&1),Xe&&Pa(a,l.treeForkCount),e):(ft(a),null);case 22:case 23:return ba(a),Ar(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(n&536870912)!==0&&(a.flags&128)===0&&(ft(a),a.subtreeFlags&6&&(a.flags|=8192)):ft(a),n=a.updateQueue,n!==null&&Xs(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==n&&(a.flags|=2048),e!==null&&F(sl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),en(Et),ft(a),null;case 25:return null;case 30:return null}throw Error(d(156,a.tag))}function Bg(e,a){switch(yr(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return en(Et),Re(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Wt(a),null;case 31:if(a.memoizedState!==null){if(ba(a),a.alternate===null)throw Error(d(340));nl()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ba(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));nl()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return F(_t),null;case 4:return Re(),null;case 10:return en(a.type),null;case 22:case 23:return ba(a),Ar(),e!==null&&F(sl),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return en(Et),null;case 25:return null;default:return null}}function lm(e,a){switch(yr(a),a.tag){case 3:en(Et),Re();break;case 26:case 27:case 5:Wt(a);break;case 4:Re();break;case 31:a.memoizedState!==null&&ba(a);break;case 13:ba(a);break;case 19:F(_t);break;case 10:en(a.type);break;case 22:case 23:ba(a),Ar(),e!==null&&F(sl);break;case 24:en(Et)}}function Mi(e,a){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){l=void 0;var c=n.create,u=n.inst;l=c(),u.destroy=l}n=n.next}while(n!==r)}}catch(x){nt(a,a.return,x)}}function zn(e,a,n){try{var l=a.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var u=l.inst,x=u.destroy;if(x!==void 0){u.destroy=void 0,r=a;var k=n,Q=x;try{Q()}catch(I){nt(r,k,I)}}}l=l.next}while(l!==c)}}catch(I){nt(a,a.return,I)}}function im(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{Ju(a,n)}catch(l){nt(e,e.return,l)}}}function sm(e,a,n){n.props=ul(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){nt(e,a,l)}}function Di(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){nt(e,a,r)}}function Va(e,a){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(r){nt(e,a,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){nt(e,a,r)}else n.current=null}function om(e){var a=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(r){nt(e,e.return,r)}}function pc(e,a,n){try{var l=e.stateNode;rb(l,e.type,n,a),l[ia]=a}catch(r){nt(e,e.return,r)}}function rm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Un(e.type)||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Un(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fc(e,a,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(e),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=Ja));else if(l!==4&&(l===27&&Un(e.type)&&(n=e.stateNode,a=null),e=e.child,e!==null))for(fc(e,a,n),e=e.sibling;e!==null;)fc(e,a,n),e=e.sibling}function Zs(e,a,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(l!==4&&(l===27&&Un(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zs(e,a,n),e=e.sibling;e!==null;)Zs(e,a,n),e=e.sibling}function cm(e){var a=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,r=a.attributes;r.length;)a.removeAttributeNode(r[0]);Jt(a,l,n),a[yt]=e,a[ia]=n}catch(c){nt(e,e.return,c)}}var sn=!1,Ot=!1,hc=!1,dm=typeof WeakSet=="function"?WeakSet:Set,$t=null;function Gg(e,a){if(e=e.containerInfo,Rc=ho,e=wu(e),rr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var u=0,x=-1,k=-1,Q=0,I=0,le=e,J=null;t:for(;;){for(var W;le!==n||r!==0&&le.nodeType!==3||(x=u+r),le!==c||l!==0&&le.nodeType!==3||(k=u+l),le.nodeType===3&&(u+=le.nodeValue.length),(W=le.firstChild)!==null;)J=le,le=W;for(;;){if(le===e)break t;if(J===n&&++Q===r&&(x=u),J===c&&++I===l&&(k=u),(W=le.nextSibling)!==null)break;le=J,J=le.parentNode}le=W}n=x===-1||k===-1?null:{start:x,end:k}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hc={focusedElem:e,selectionRange:n},ho=!1,$t=a;$t!==null;)if(a=$t,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,$t=e;else for(;$t!==null;){switch(a=$t,c=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=a,r=c.memoizedProps,c=c.memoizedState,l=n.stateNode;try{var we=ul(n.type,r);e=l.getSnapshotBeforeUpdate(we,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(ze){nt(n,n.return,ze)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,n=e.nodeType,n===9)Bc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=a.sibling,e!==null){e.return=a.return,$t=e;break}$t=a.return}}function um(e,a,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:rn(e,n),l&4&&Mi(5,n);break;case 1:if(rn(e,n),l&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(u){nt(n,n.return,u)}else{var r=ul(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(r,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){nt(n,n.return,u)}}l&64&&im(n),l&512&&Di(n,n.return);break;case 3:if(rn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{Ju(e,a)}catch(u){nt(n,n.return,u)}}break;case 27:a===null&&l&4&&cm(n);case 26:case 5:rn(e,n),a===null&&l&4&&om(n),l&512&&Di(n,n.return);break;case 12:rn(e,n);break;case 31:rn(e,n),l&4&&fm(e,n);break;case 13:rn(e,n),l&4&&hm(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Fg.bind(null,n),xb(e,n))));break;case 22:if(l=n.memoizedState!==null||sn,!l){a=a!==null&&a.memoizedState!==null||Ot,r=sn;var c=Ot;sn=l,(Ot=a)&&!c?cn(e,n,(n.subtreeFlags&8772)!==0):rn(e,n),sn=r,Ot=c}break;case 30:break;default:rn(e,n)}}function pm(e){var a=e.alternate;a!==null&&(e.alternate=null,pm(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Qo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gt=null,oa=!1;function on(e,a,n){for(n=n.child;n!==null;)mm(e,a,n),n=n.sibling}function mm(e,a,n){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(it,n)}catch{}switch(n.tag){case 26:Ot||Va(n,a),on(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ot||Va(n,a);var l=gt,r=oa;Un(n.type)&&(gt=n.stateNode,oa=!1),on(e,a,n),Gi(n.stateNode),gt=l,oa=r;break;case 5:Ot||Va(n,a);case 6:if(l=gt,r=oa,gt=null,on(e,a,n),gt=l,oa=r,gt!==null)if(oa)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(n.stateNode)}catch(c){nt(n,a,c)}else try{gt.removeChild(n.stateNode)}catch(c){nt(n,a,c)}break;case 18:gt!==null&&(oa?(e=gt,sf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ei(e)):sf(gt,n.stateNode));break;case 4:l=gt,r=oa,gt=n.stateNode.containerInfo,oa=!0,on(e,a,n),gt=l,oa=r;break;case 0:case 11:case 14:case 15:zn(2,n,a),Ot||zn(4,n,a),on(e,a,n);break;case 1:Ot||(Va(n,a),l=n.stateNode,typeof l.componentWillUnmount=="function"&&sm(n,a,l)),on(e,a,n);break;case 21:on(e,a,n);break;case 22:Ot=(l=Ot)||n.memoizedState!==null,on(e,a,n),Ot=l;break;default:on(e,a,n)}}function fm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ei(e)}catch(n){nt(a,a.return,n)}}}function hm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ei(e)}catch(n){nt(a,a.return,n)}}function Yg(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new dm),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new dm),a;default:throw Error(d(435,e.tag))}}function Ks(e,a){var n=Yg(e);a.forEach(function(l){if(!n.has(l)){n.add(l);var r=Wg.bind(null,e,l);l.then(r,r)}})}function ra(e,a){var n=a.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l],c=e,u=a,x=u;e:for(;x!==null;){switch(x.tag){case 27:if(Un(x.type)){gt=x.stateNode,oa=!1;break e}break;case 5:gt=x.stateNode,oa=!1;break e;case 3:case 4:gt=x.stateNode.containerInfo,oa=!0;break e}x=x.return}if(gt===null)throw Error(d(160));mm(c,u,r),gt=null,oa=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)xm(a,e),a=a.sibling}var qa=null;function xm(e,a){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ra(a,e),ca(e),l&4&&(zn(3,e,e.return),Mi(3,e),zn(5,e,e.return));break;case 1:ra(a,e),ca(e),l&512&&(Ot||n===null||Va(n,n.return)),l&64&&sn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var r=qa;if(ra(a,e),ca(e),l&512&&(Ot||n===null||Va(n,n.return)),l&4){var c=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[ii]||c[yt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),Jt(c,l,n),c[yt]=e,Yt(c),l=c;break e;case"link":var u=gf("link","href",r).get(l+(n.href||""));if(u){for(var x=0;x<u.length;x++)if(c=u[x],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(x,1);break t}}c=r.createElement(l),Jt(c,l,n),r.head.appendChild(c);break;case"meta":if(u=gf("meta","content",r).get(l+(n.content||""))){for(x=0;x<u.length;x++)if(c=u[x],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(x,1);break t}}c=r.createElement(l),Jt(c,l,n),r.head.appendChild(c);break;default:throw Error(d(468,l))}c[yt]=e,Yt(c),l=c}e.stateNode=l}else bf(r,e.type,e.stateNode);else e.stateNode=xf(r,l,e.memoizedProps);else c!==l?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,l===null?bf(r,e.type,e.stateNode):xf(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&pc(e,e.memoizedProps,n.memoizedProps)}break;case 27:ra(a,e),ca(e),l&512&&(Ot||n===null||Va(n,n.return)),n!==null&&l&4&&pc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ra(a,e),ca(e),l&512&&(Ot||n===null||Va(n,n.return)),e.flags&32){r=e.stateNode;try{Nl(r,"")}catch(we){nt(e,e.return,we)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,pc(e,r,n!==null?n.memoizedProps:r)),l&1024&&(hc=!0);break;case 6:if(ra(a,e),ca(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(we){nt(e,e.return,we)}}break;case 3:if(uo=null,r=qa,qa=ro(a.containerInfo),ra(a,e),qa=r,ca(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ei(a.containerInfo)}catch(we){nt(e,e.return,we)}hc&&(hc=!1,gm(e));break;case 4:l=qa,qa=ro(e.stateNode.containerInfo),ra(a,e),ca(e),qa=l;break;case 12:ra(a,e),ca(e);break;case 31:ra(a,e),ca(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ks(e,l)));break;case 13:ra(a,e),ca(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fs=ye()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ks(e,l)));break;case 22:r=e.memoizedState!==null;var k=n!==null&&n.memoizedState!==null,Q=sn,I=Ot;if(sn=Q||r,Ot=I||k,ra(a,e),Ot=I,sn=Q,ca(e),l&8192)e:for(a=e.stateNode,a._visibility=r?a._visibility&-2:a._visibility|1,r&&(n===null||k||sn||Ot||pl(e)),n=null,a=e;;){if(a.tag===5||a.tag===26){if(n===null){k=n=a;try{if(c=k.stateNode,r)u=c.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{x=k.stateNode;var le=k.memoizedProps.style,J=le!=null&&le.hasOwnProperty("display")?le.display:null;x.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(we){nt(k,k.return,we)}}}else if(a.tag===6){if(n===null){k=a;try{k.stateNode.nodeValue=r?"":k.memoizedProps}catch(we){nt(k,k.return,we)}}}else if(a.tag===18){if(n===null){k=a;try{var W=k.stateNode;r?of(W,!0):of(k.stateNode,!1)}catch(we){nt(k,k.return,we)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Ks(e,n))));break;case 19:ra(a,e),ca(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ks(e,l)));break;case 30:break;case 21:break;default:ra(a,e),ca(e)}}function ca(e){var a=e.flags;if(a&2){try{for(var n,l=e.return;l!==null;){if(rm(l)){n=l;break}l=l.return}if(n==null)throw Error(d(160));switch(n.tag){case 27:var r=n.stateNode,c=mc(e);Zs(e,c,r);break;case 5:var u=n.stateNode;n.flags&32&&(Nl(u,""),n.flags&=-33);var x=mc(e);Zs(e,x,u);break;case 3:case 4:var k=n.stateNode.containerInfo,Q=mc(e);fc(e,Q,k);break;default:throw Error(d(161))}}catch(I){nt(e,e.return,I)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function gm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;gm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function rn(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)um(e,a.alternate,a),a=a.sibling}function pl(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:zn(4,a,a.return),pl(a);break;case 1:Va(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&sm(a,a.return,n),pl(a);break;case 27:Gi(a.stateNode);case 26:case 5:Va(a,a.return),pl(a);break;case 22:a.memoizedState===null&&pl(a);break;case 30:pl(a);break;default:pl(a)}e=e.sibling}}function cn(e,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,r=e,c=a,u=c.flags;switch(c.tag){case 0:case 11:case 15:cn(r,c,n),Mi(4,c);break;case 1:if(cn(r,c,n),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Q){nt(l,l.return,Q)}if(l=c,r=l.updateQueue,r!==null){var x=l.stateNode;try{var k=r.shared.hiddenCallbacks;if(k!==null)for(r.shared.hiddenCallbacks=null,r=0;r<k.length;r++)Ku(k[r],x)}catch(Q){nt(l,l.return,Q)}}n&&u&64&&im(c),Di(c,c.return);break;case 27:cm(c);case 26:case 5:cn(r,c,n),n&&l===null&&u&4&&om(c),Di(c,c.return);break;case 12:cn(r,c,n);break;case 31:cn(r,c,n),n&&u&4&&fm(r,c);break;case 13:cn(r,c,n),n&&u&4&&hm(r,c);break;case 22:c.memoizedState===null&&cn(r,c,n),Di(c,c.return);break;case 30:break;default:cn(r,c,n)}a=a.sibling}}function xc(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&bi(n))}function gc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&bi(e))}function Ba(e,a,n,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)bm(e,a,n,l),a=a.sibling}function bm(e,a,n,l){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(e,a,n,l),r&2048&&Mi(9,a);break;case 1:Ba(e,a,n,l);break;case 3:Ba(e,a,n,l),r&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&bi(e)));break;case 12:if(r&2048){Ba(e,a,n,l),e=a.stateNode;try{var c=a.memoizedProps,u=c.id,x=c.onPostCommit;typeof x=="function"&&x(u,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){nt(a,a.return,k)}}else Ba(e,a,n,l);break;case 31:Ba(e,a,n,l);break;case 13:Ba(e,a,n,l);break;case 23:break;case 22:c=a.stateNode,u=a.alternate,a.memoizedState!==null?c._visibility&2?Ba(e,a,n,l):Oi(e,a):c._visibility&2?Ba(e,a,n,l):(c._visibility|=2,$l(e,a,n,l,(a.subtreeFlags&10256)!==0||!1)),r&2048&&xc(u,a);break;case 24:Ba(e,a,n,l),r&2048&&gc(a.alternate,a);break;default:Ba(e,a,n,l)}}function $l(e,a,n,l,r){for(r=r&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var c=e,u=a,x=n,k=l,Q=u.flags;switch(u.tag){case 0:case 11:case 15:$l(c,u,x,k,r),Mi(8,u);break;case 23:break;case 22:var I=u.stateNode;u.memoizedState!==null?I._visibility&2?$l(c,u,x,k,r):Oi(c,u):(I._visibility|=2,$l(c,u,x,k,r)),r&&Q&2048&&xc(u.alternate,u);break;case 24:$l(c,u,x,k,r),r&&Q&2048&&gc(u.alternate,u);break;default:$l(c,u,x,k,r)}a=a.sibling}}function Oi(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,l=a,r=l.flags;switch(l.tag){case 22:Oi(n,l),r&2048&&xc(l.alternate,l);break;case 24:Oi(n,l),r&2048&&gc(l.alternate,l);break;default:Oi(n,l)}a=a.sibling}}var Ai=8192;function Vl(e,a,n){if(e.subtreeFlags&Ai)for(e=e.child;e!==null;)ym(e,a,n),e=e.sibling}function ym(e,a,n){switch(e.tag){case 26:Vl(e,a,n),e.flags&Ai&&e.memoizedState!==null&&zb(n,qa,e.memoizedState,e.memoizedProps);break;case 5:Vl(e,a,n);break;case 3:case 4:var l=qa;qa=ro(e.stateNode.containerInfo),Vl(e,a,n),qa=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ai,Ai=16777216,Vl(e,a,n),Ai=l):Vl(e,a,n));break;default:Vl(e,a,n)}}function vm(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Ui(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var l=a[n];$t=l,wm(l,e)}vm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jm(e),e=e.sibling}function jm(e){switch(e.tag){case 0:case 11:case 15:Ui(e),e.flags&2048&&zn(9,e,e.return);break;case 3:Ui(e);break;case 12:Ui(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Js(e)):Ui(e);break;default:Ui(e)}}function Js(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var l=a[n];$t=l,wm(l,e)}vm(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:zn(8,a,a.return),Js(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,Js(a));break;default:Js(a)}e=e.sibling}}function wm(e,a){for(;$t!==null;){var n=$t;switch(n.tag){case 0:case 11:case 15:zn(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:bi(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,$t=l;else e:for(n=e;$t!==null;){l=$t;var r=l.sibling,c=l.return;if(pm(l),l===n){$t=null;break e}if(r!==null){r.return=c,$t=r;break e}$t=c}}}var $g={getCacheForType:function(e){var a=Zt(Et),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return Zt(Et).controller.signal}},Vg=typeof WeakMap=="function"?WeakMap:Map,Ie=0,dt=null,Be=null,$e=0,at=0,ya=null,Tn=!1,Ql=!1,bc=!1,dn=0,wt=0,En=0,ml=0,yc=0,va=0,Xl=0,Ri=null,da=null,vc=!1,Fs=0,Nm=0,Ws=1/0,Ps=null,Mn=null,Lt=0,Dn=null,Zl=null,un=0,jc=0,wc=null,_m=null,Hi=0,Nc=null;function ja(){return(Ie&2)!==0&&$e!==0?$e&-$e:S.T!==null?Tc():Me()}function Sm(){if(va===0)if(($e&536870912)===0||Xe){var e=ie;ie<<=1,(ie&3932160)===0&&(ie=262144),va=e}else va=536870912;return e=ga.current,e!==null&&(e.flags|=32),va}function ua(e,a,n){(e===dt&&(at===2||at===9)||e.cancelPendingCommit!==null)&&(Kl(e,0),On(e,$e,va,!1)),Fn(e,n),((Ie&2)===0||e!==dt)&&(e===dt&&((Ie&2)===0&&(ml|=n),wt===4&&On(e,$e,va,!1)),Qa(e))}function km(e,a,n){if((Ie&6)!==0)throw Error(d(327));var l=!n&&(a&127)===0&&(a&e.expiredLanes)===0||st(e,a),r=l?Zg(e,a):Sc(e,a,!0),c=l;do{if(r===0){Ql&&!l&&On(e,a,0,!1);break}else{if(n=e.current.alternate,c&&!Qg(n)){r=Sc(e,a,!1),c=!1;continue}if(r===2){if(c=a,e.errorRecoveryDisabledLanes&c)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var x=e;r=Ri;var k=x.current.memoizedState.isDehydrated;if(k&&(Kl(x,u).flags|=256),u=Sc(x,u,!1),u!==2){if(bc&&!k){x.errorRecoveryDisabledLanes|=c,ml|=c,r=4;break e}c=da,da=r,c!==null&&(da===null?da=c:da.push.apply(da,c))}r=u}if(c=!1,r!==2)continue}}if(r===1){Kl(e,0),On(e,a,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a)break;case 6:On(l,a,va,!Tn);break e;case 2:da=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(r=Fs+300-ye(),10<r)){if(On(l,a,va,!Tn),Je(l,0,!0)!==0)break e;un=a,l.timeoutHandle=nf(Cm.bind(null,l,n,da,Ps,vc,a,va,ml,Xl,Tn,c,"Throttled",-0,0),r);break e}Cm(l,n,da,Ps,vc,a,va,ml,Xl,Tn,c,null,-0,0)}}break}while(!0);Qa(e)}function Cm(e,a,n,l,r,c,u,x,k,Q,I,le,J,W){if(e.timeoutHandle=-1,le=a.subtreeFlags,le&8192||(le&16785408)===16785408){le={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ja},ym(a,c,le);var we=(c&62914560)===c?Fs-ye():(c&4194048)===c?Nm-ye():0;if(we=Tb(le,we),we!==null){un=c,e.cancelPendingCommit=we(Um.bind(null,e,a,c,n,l,r,u,x,k,I,le,null,J,W)),On(e,c,u,!Q);return}}Um(e,a,c,n,l,r,u,x,k)}function Qg(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var r=n[l],c=r.getSnapshot;r=r.value;try{if(!ha(c(),r))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function On(e,a,n,l){a&=~yc,a&=~ml,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var r=a;0<r;){var c=31-Ht(r),u=1<<c;l[c]=-1,r&=~u}n!==0&&Ha(e,n,a)}function Is(){return(Ie&6)===0?(Li(0),!1):!0}function _c(){if(Be!==null){if(at===0)var e=Be.return;else e=Be,Ia=ll=null,Br(e),Ll=null,vi=0,e=Be;for(;e!==null;)lm(e.alternate,e),e=e.return;Be=null}}function Kl(e,a){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ub(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),un=0,_c(),dt=e,Be=n=Wa(e.current,null),$e=a,at=0,ya=null,Tn=!1,Ql=st(e,a),bc=!1,Xl=va=yc=ml=En=wt=0,da=Ri=null,vc=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var r=31-Ht(l),c=1<<r;a|=e[r],l&=~c}return dn=a,vs(),n}function zm(e,a){Ue=null,S.H=zi,a===Hl||a===zs?(a=Vu(),at=3):a===zr?(a=Vu(),at=4):at=a===ac?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ya=a,Be===null&&(wt=1,Ys(e,Ta(a,e.current)))}function Tm(){var e=ga.current;return e===null?!0:($e&4194048)===$e?Oa===null:($e&62914560)===$e||($e&536870912)!==0?e===Oa:!1}function Em(){var e=S.H;return S.H=zi,e===null?zi:e}function Mm(){var e=S.A;return S.A=$g,e}function eo(){wt=4,Tn||($e&4194048)!==$e&&ga.current!==null||(Ql=!0),(En&134217727)===0&&(ml&134217727)===0||dt===null||On(dt,$e,va,!1)}function Sc(e,a,n){var l=Ie;Ie|=2;var r=Em(),c=Mm();(dt!==e||$e!==a)&&(Ps=null,Kl(e,a)),a=!1;var u=wt;e:do try{if(at!==0&&Be!==null){var x=Be,k=ya;switch(at){case 8:_c(),u=6;break e;case 3:case 2:case 9:case 6:ga.current===null&&(a=!0);var Q=at;if(at=0,ya=null,Jl(e,x,k,Q),n&&Ql){u=0;break e}break;default:Q=at,at=0,ya=null,Jl(e,x,k,Q)}}Xg(),u=wt;break}catch(I){zm(e,I)}while(!0);return a&&e.shellSuspendCounter++,Ia=ll=null,Ie=l,S.H=r,S.A=c,Be===null&&(dt=null,$e=0,vs()),u}function Xg(){for(;Be!==null;)Dm(Be)}function Zg(e,a){var n=Ie;Ie|=2;var l=Em(),r=Mm();dt!==e||$e!==a?(Ps=null,Ws=ye()+500,Kl(e,a)):Ql=st(e,a);e:do try{if(at!==0&&Be!==null){a=Be;var c=ya;t:switch(at){case 1:at=0,ya=null,Jl(e,a,c,1);break;case 2:case 9:if(Yu(c)){at=0,ya=null,Om(a);break}a=function(){at!==2&&at!==9||dt!==e||(at=7),Qa(e)},c.then(a,a);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:Yu(c)?(at=0,ya=null,Om(a)):(at=0,ya=null,Jl(e,a,c,7));break;case 5:var u=null;switch(Be.tag){case 26:u=Be.memoizedState;case 5:case 27:var x=Be;if(u?yf(u):x.stateNode.complete){at=0,ya=null;var k=x.sibling;if(k!==null)Be=k;else{var Q=x.return;Q!==null?(Be=Q,to(Q)):Be=null}break t}}at=0,ya=null,Jl(e,a,c,5);break;case 6:at=0,ya=null,Jl(e,a,c,6);break;case 8:_c(),wt=6;break e;default:throw Error(d(462))}}Kg();break}catch(I){zm(e,I)}while(!0);return Ia=ll=null,S.H=l,S.A=r,Ie=n,Be!==null?0:(dt=null,$e=0,vs(),wt)}function Kg(){for(;Be!==null&&!ma();)Dm(Be)}function Dm(e){var a=am(e.alternate,e,dn);e.memoizedProps=e.pendingProps,a===null?to(e):Be=a}function Om(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=Fp(n,a,a.pendingProps,a.type,void 0,$e);break;case 11:a=Fp(n,a,a.pendingProps,a.type.render,a.ref,$e);break;case 5:Br(a);default:lm(n,a),a=Be=Mu(a,dn),a=am(n,a,dn)}e.memoizedProps=e.pendingProps,a===null?to(e):Be=a}function Jl(e,a,n,l){Ia=ll=null,Br(a),Ll=null,vi=0;var r=a.return;try{if(Rg(e,r,a,n,$e)){wt=1,Ys(e,Ta(n,e.current)),Be=null;return}}catch(c){if(r!==null)throw Be=r,c;wt=1,Ys(e,Ta(n,e.current)),Be=null;return}a.flags&32768?(Xe||l===1?e=!0:Ql||($e&536870912)!==0?e=!1:(Tn=e=!0,(l===2||l===9||l===3||l===6)&&(l=ga.current,l!==null&&l.tag===13&&(l.flags|=16384))),Am(a,e)):to(a)}function to(e){var a=e;do{if((a.flags&32768)!==0){Am(a,Tn);return}e=a.return;var n=qg(a.alternate,a,dn);if(n!==null){Be=n;return}if(a=a.sibling,a!==null){Be=a;return}Be=a=e}while(a!==null);wt===0&&(wt=5)}function Am(e,a){do{var n=Bg(e.alternate,e);if(n!==null){n.flags&=32767,Be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){Be=e;return}Be=e=n}while(e!==null);wt=6,Be=null}function Um(e,a,n,l,r,c,u,x,k){e.cancelPendingCommit=null;do ao();while(Lt!==0);if((Ie&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));if(c=a.lanes|a.childLanes,c|=mr,$o(e,n,c,u,x,k),e===dt&&(Be=dt=null,$e=0),Zl=a,Dn=e,un=n,jc=c,wc=r,_m=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Pg(xe,function(){return Bm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=S.T,S.T=null,r=$.p,$.p=2,u=Ie,Ie|=4;try{Gg(e,a,n)}finally{Ie=u,$.p=r,S.T=l}}Lt=1,Rm(),Hm(),Lm()}}function Rm(){if(Lt===1){Lt=0;var e=Dn,a=Zl,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=S.T,S.T=null;var l=$.p;$.p=2;var r=Ie;Ie|=4;try{xm(a,e);var c=Hc,u=wu(e.containerInfo),x=c.focusedElem,k=c.selectionRange;if(u!==x&&x&&x.ownerDocument&&ju(x.ownerDocument.documentElement,x)){if(k!==null&&rr(x)){var Q=k.start,I=k.end;if(I===void 0&&(I=Q),"selectionStart"in x)x.selectionStart=Q,x.selectionEnd=Math.min(I,x.value.length);else{var le=x.ownerDocument||document,J=le&&le.defaultView||window;if(J.getSelection){var W=J.getSelection(),we=x.textContent.length,ze=Math.min(k.start,we),ct=k.end===void 0?ze:Math.min(k.end,we);!W.extend&&ze>ct&&(u=ct,ct=ze,ze=u);var L=vu(x,ze),D=vu(x,ct);if(L&&D&&(W.rangeCount!==1||W.anchorNode!==L.node||W.anchorOffset!==L.offset||W.focusNode!==D.node||W.focusOffset!==D.offset)){var V=le.createRange();V.setStart(L.node,L.offset),W.removeAllRanges(),ze>ct?(W.addRange(V),W.extend(D.node,D.offset)):(V.setEnd(D.node,D.offset),W.addRange(V))}}}}for(le=[],W=x;W=W.parentNode;)W.nodeType===1&&le.push({element:W,left:W.scrollLeft,top:W.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<le.length;x++){var ne=le[x];ne.element.scrollLeft=ne.left,ne.element.scrollTop=ne.top}}ho=!!Rc,Hc=Rc=null}finally{Ie=r,$.p=l,S.T=n}}e.current=a,Lt=2}}function Hm(){if(Lt===2){Lt=0;var e=Dn,a=Zl,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=S.T,S.T=null;var l=$.p;$.p=2;var r=Ie;Ie|=4;try{um(e,a.alternate,a)}finally{Ie=r,$.p=l,S.T=n}}Lt=3}}function Lm(){if(Lt===4||Lt===3){Lt=0,M();var e=Dn,a=Zl,n=un,l=_m;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Lt=5:(Lt=0,Zl=Dn=null,qm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Mn=null),ge(n),a=a.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(it,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=S.T,r=$.p,$.p=2,S.T=null;try{for(var c=e.onRecoverableError,u=0;u<l.length;u++){var x=l[u];c(x.value,{componentStack:x.stack})}}finally{S.T=a,$.p=r}}(un&3)!==0&&ao(),Qa(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Nc?Hi++:(Hi=0,Nc=e):Hi=0,Li(0)}}function qm(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,bi(a)))}function ao(){return Rm(),Hm(),Lm(),Bm()}function Bm(){if(Lt!==5)return!1;var e=Dn,a=jc;jc=0;var n=ge(un),l=S.T,r=$.p;try{$.p=32>n?32:n,S.T=null,n=wc,wc=null;var c=Dn,u=un;if(Lt=0,Zl=Dn=null,un=0,(Ie&6)!==0)throw Error(d(331));var x=Ie;if(Ie|=4,jm(c.current),bm(c,c.current,u,n),Ie=x,Li(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(it,c)}catch{}return!0}finally{$.p=r,S.T=l,qm(e,a)}}function Gm(e,a,n){a=Ta(n,a),a=tc(e.stateNode,a,2),e=Sn(e,a,2),e!==null&&(Fn(e,2),Qa(e))}function nt(e,a,n){if(e.tag===3)Gm(e,e,n);else for(;a!==null;){if(a.tag===3){Gm(a,e,n);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Mn===null||!Mn.has(l))){e=Ta(n,e),n=Yp(2),l=Sn(a,n,2),l!==null&&($p(n,l,a,e),Fn(l,2),Qa(l));break}}a=a.return}}function kc(e,a,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Vg;var r=new Set;l.set(a,r)}else r=l.get(a),r===void 0&&(r=new Set,l.set(a,r));r.has(n)||(bc=!0,r.add(n),e=Jg.bind(null,e,a,n),a.then(e,e))}function Jg(e,a,n){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,dt===e&&($e&n)===n&&(wt===4||wt===3&&($e&62914560)===$e&&300>ye()-Fs?(Ie&2)===0&&Kl(e,0):yc|=n,Xl===$e&&(Xl=0)),Qa(e)}function Ym(e,a){a===0&&(a=la()),e=tl(e,a),e!==null&&(Fn(e,a),Qa(e))}function Fg(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),Ym(e,n)}function Wg(e,a){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(a),Ym(e,n)}function Pg(e,a){return Gt(e,a)}var no=null,Fl=null,Cc=!1,lo=!1,zc=!1,An=0;function Qa(e){e!==Fl&&e.next===null&&(Fl===null?no=Fl=e:Fl=Fl.next=e),lo=!0,Cc||(Cc=!0,eb())}function Li(e,a){if(!zc&&lo){zc=!0;do for(var n=!1,l=no;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var u=l.suspendedLanes,x=l.pingedLanes;c=(1<<31-Ht(42|e)+1)-1,c&=r&~(u&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Xm(l,c))}else c=$e,c=Je(l,l===dt?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||st(l,c)||(n=!0,Xm(l,c));l=l.next}while(n);zc=!1}}function Ig(){$m()}function $m(){lo=Cc=!1;var e=0;An!==0&&db()&&(e=An);for(var a=ye(),n=null,l=no;l!==null;){var r=l.next,c=Vm(l,a);c===0?(l.next=null,n===null?no=r:n.next=r,r===null&&(Fl=n)):(n=l,(e!==0||(c&3)!==0)&&(lo=!0)),l=r}Lt!==0&&Lt!==5||Li(e),An!==0&&(An=0)}function Vm(e,a){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var u=31-Ht(c),x=1<<u,k=r[u];k===-1?((x&n)===0||(x&l)!==0)&&(r[u]=Ye(x,a)):k<=a&&(e.expiredLanes|=x),c&=~x}if(a=dt,n=$e,n=Je(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===a&&(at===2||at===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Rt(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||st(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(l!==null&&Rt(l),ge(n)){case 2:case 8:n=G;break;case 32:n=xe;break;case 268435456:n=Ce;break;default:n=xe}return l=Qm.bind(null,e),n=Gt(n,l),e.callbackPriority=a,e.callbackNode=n,a}return l!==null&&l!==null&&Rt(l),e.callbackPriority=2,e.callbackNode=null,2}function Qm(e,a){if(Lt!==0&&Lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ao()&&e.callbackNode!==n)return null;var l=$e;return l=Je(e,e===dt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(km(e,l,a),Vm(e,ye()),e.callbackNode!=null&&e.callbackNode===n?Qm.bind(null,e):null)}function Xm(e,a){if(ao())return null;km(e,a,!0)}function eb(){pb(function(){(Ie&6)!==0?Gt(je,Ig):$m()})}function Tc(){if(An===0){var e=Ul;e===0&&(e=re,re<<=1,(re&261888)===0&&(re=256)),An=e}return An}function Zm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ps(""+e)}function Km(e,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,e.id&&n.setAttribute("form",e.id),a.parentNode.insertBefore(n,a),e=new FormData(e),n.parentNode.removeChild(n),e}function tb(e,a,n,l,r){if(a==="submit"&&n&&n.stateNode===r){var c=Zm((r[ia]||null).action),u=l.submitter;u&&(a=(a=u[ia]||null)?Zm(a.formAction):u.getAttribute("formAction"),a!==null&&(c=a,u=null));var x=new xs("action","action",null,l,r);e.push({event:x,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(An!==0){var k=u?Km(r,u):new FormData(r);Jr(n,{pending:!0,data:k,method:r.method,action:c},null,k)}}else typeof c=="function"&&(x.preventDefault(),k=u?Km(r,u):new FormData(r),Jr(n,{pending:!0,data:k,method:r.method,action:c},c,k))},currentTarget:r}]})}}for(var Ec=0;Ec<pr.length;Ec++){var Mc=pr[Ec],ab=Mc.toLowerCase(),nb=Mc[0].toUpperCase()+Mc.slice(1);La(ab,"on"+nb)}La(Su,"onAnimationEnd"),La(ku,"onAnimationIteration"),La(Cu,"onAnimationStart"),La("dblclick","onDoubleClick"),La("focusin","onFocus"),La("focusout","onBlur"),La(yg,"onTransitionRun"),La(vg,"onTransitionStart"),La(jg,"onTransitionCancel"),La(zu,"onTransitionEnd"),jl("onMouseEnter",["mouseout","mouseover"]),jl("onMouseLeave",["mouseout","mouseover"]),jl("onPointerEnter",["pointerout","pointerover"]),jl("onPointerLeave",["pointerout","pointerover"]),Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qi));function Jm(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var c=void 0;if(a)for(var u=l.length-1;0<=u;u--){var x=l[u],k=x.instance,Q=x.currentTarget;if(x=x.listener,k!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=Q;try{c(r)}catch(I){ys(I)}r.currentTarget=null,c=k}else for(u=0;u<l.length;u++){if(x=l[u],k=x.instance,Q=x.currentTarget,x=x.listener,k!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=Q;try{c(r)}catch(I){ys(I)}r.currentTarget=null,c=k}}}}function Ge(e,a){var n=a[Vo];n===void 0&&(n=a[Vo]=new Set);var l=e+"__bubble";n.has(l)||(Fm(a,e,2,!1),n.add(l))}function Dc(e,a,n){var l=0;a&&(l|=4),Fm(n,e,l,a)}var io="_reactListening"+Math.random().toString(36).slice(2);function Oc(e){if(!e[io]){e[io]=!0,$d.forEach(function(n){n!=="selectionchange"&&(lb.has(n)||Dc(n,!1,e),Dc(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[io]||(a[io]=!0,Dc("selectionchange",!1,a))}}function Fm(e,a,n,l){switch(kf(a)){case 2:var r=Db;break;case 8:r=Ob;break;default:r=Kc}n=r.bind(null,a,n,e),r=void 0,!Io||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(a,n,{capture:!0,passive:r}):e.addEventListener(a,n,!0):r!==void 0?e.addEventListener(a,n,{passive:r}):e.addEventListener(a,n,!1)}function Ac(e,a,n,l,r){var c=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var x=l.stateNode.containerInfo;if(x===r)break;if(u===4)for(u=l.return;u!==null;){var k=u.tag;if((k===3||k===4)&&u.stateNode.containerInfo===r)return;u=u.return}for(;x!==null;){if(u=bl(x),u===null)return;if(k=u.tag,k===5||k===6||k===26||k===27){l=c=u;continue e}x=x.parentNode}}l=l.return}tu(function(){var Q=c,I=Wo(n),le=[];e:{var J=Tu.get(e);if(J!==void 0){var W=xs,we=e;switch(e){case"keypress":if(fs(n)===0)break e;case"keydown":case"keyup":W=Wx;break;case"focusin":we="focus",W=nr;break;case"focusout":we="blur",W=nr;break;case"beforeblur":case"afterblur":W=nr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=qx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=eg;break;case Su:case ku:case Cu:W=Yx;break;case zu:W=ag;break;case"scroll":case"scrollend":W=Hx;break;case"wheel":W=lg;break;case"copy":case"cut":case"paste":W=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=su;break;case"toggle":case"beforetoggle":W=sg}var ze=(a&4)!==0,ct=!ze&&(e==="scroll"||e==="scrollend"),L=ze?J!==null?J+"Capture":null:J;ze=[];for(var D=Q,V;D!==null;){var ne=D;if(V=ne.stateNode,ne=ne.tag,ne!==5&&ne!==26&&ne!==27||V===null||L===null||(ne=oi(D,L),ne!=null&&ze.push(Bi(D,ne,V))),ct)break;D=D.return}0<ze.length&&(J=new W(J,we,null,n,I),le.push({event:J,listeners:ze}))}}if((a&7)===0){e:{if(J=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",J&&n!==Fo&&(we=n.relatedTarget||n.fromElement)&&(bl(we)||we[gl]))break e;if((W||J)&&(J=I.window===I?I:(J=I.ownerDocument)?J.defaultView||J.parentWindow:window,W?(we=n.relatedTarget||n.toElement,W=Q,we=we?bl(we):null,we!==null&&(ct=h(we),ze=we.tag,we!==ct||ze!==5&&ze!==27&&ze!==6)&&(we=null)):(W=null,we=Q),W!==we)){if(ze=lu,ne="onMouseLeave",L="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(ze=su,ne="onPointerLeave",L="onPointerEnter",D="pointer"),ct=W==null?J:si(W),V=we==null?J:si(we),J=new ze(ne,D+"leave",W,n,I),J.target=ct,J.relatedTarget=V,ne=null,bl(I)===Q&&(ze=new ze(L,D+"enter",we,n,I),ze.target=V,ze.relatedTarget=ct,ne=ze),ct=ne,W&&we)t:{for(ze=ib,L=W,D=we,V=0,ne=L;ne;ne=ze(ne))V++;ne=0;for(var Se=D;Se;Se=ze(Se))ne++;for(;0<V-ne;)L=ze(L),V--;for(;0<ne-V;)D=ze(D),ne--;for(;V--;){if(L===D||D!==null&&L===D.alternate){ze=L;break t}L=ze(L),D=ze(D)}ze=null}else ze=null;W!==null&&Wm(le,J,W,ze,!1),we!==null&&ct!==null&&Wm(le,ct,we,ze,!0)}}e:{if(J=Q?si(Q):window,W=J.nodeName&&J.nodeName.toLowerCase(),W==="select"||W==="input"&&J.type==="file")var Fe=fu;else if(pu(J))if(hu)Fe=xg;else{Fe=fg;var Ne=mg}else W=J.nodeName,!W||W.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?Q&&Jo(Q.elementType)&&(Fe=fu):Fe=hg;if(Fe&&(Fe=Fe(e,Q))){mu(le,Fe,n,I);break e}Ne&&Ne(e,J,Q),e==="focusout"&&Q&&J.type==="number"&&Q.memoizedProps.value!=null&&Ko(J,"number",J.value)}switch(Ne=Q?si(Q):window,e){case"focusin":(pu(Ne)||Ne.contentEditable==="true")&&(Cl=Ne,cr=Q,hi=null);break;case"focusout":hi=cr=Cl=null;break;case"mousedown":dr=!0;break;case"contextmenu":case"mouseup":case"dragend":dr=!1,Nu(le,n,I);break;case"selectionchange":if(bg)break;case"keydown":case"keyup":Nu(le,n,I)}var Le;if(ir)e:{switch(e){case"compositionstart":var Ve="onCompositionStart";break e;case"compositionend":Ve="onCompositionEnd";break e;case"compositionupdate":Ve="onCompositionUpdate";break e}Ve=void 0}else kl?du(e,n)&&(Ve="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ve="onCompositionStart");Ve&&(ou&&n.locale!=="ko"&&(kl||Ve!=="onCompositionStart"?Ve==="onCompositionEnd"&&kl&&(Le=au()):(bn=I,er="value"in bn?bn.value:bn.textContent,kl=!0)),Ne=so(Q,Ve),0<Ne.length&&(Ve=new iu(Ve,e,null,n,I),le.push({event:Ve,listeners:Ne}),Le?Ve.data=Le:(Le=uu(n),Le!==null&&(Ve.data=Le)))),(Le=rg?cg(e,n):dg(e,n))&&(Ve=so(Q,"onBeforeInput"),0<Ve.length&&(Ne=new iu("onBeforeInput","beforeinput",null,n,I),le.push({event:Ne,listeners:Ve}),Ne.data=Le)),tb(le,e,Q,n,I)}Jm(le,a)})}function Bi(e,a,n){return{instance:e,listener:a,currentTarget:n}}function so(e,a){for(var n=a+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=oi(e,n),r!=null&&l.unshift(Bi(e,r,c)),r=oi(e,a),r!=null&&l.push(Bi(e,r,c))),e.tag===3)return l;e=e.return}return[]}function ib(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wm(e,a,n,l,r){for(var c=a._reactName,u=[];n!==null&&n!==l;){var x=n,k=x.alternate,Q=x.stateNode;if(x=x.tag,k!==null&&k===l)break;x!==5&&x!==26&&x!==27||Q===null||(k=Q,r?(Q=oi(n,c),Q!=null&&u.unshift(Bi(n,Q,k))):r||(Q=oi(n,c),Q!=null&&u.push(Bi(n,Q,k)))),n=n.return}u.length!==0&&e.push({event:a,listeners:u})}var sb=/\r\n?/g,ob=/\u0000|\uFFFD/g;function Pm(e){return(typeof e=="string"?e:""+e).replace(sb,`
`).replace(ob,"")}function Im(e,a){return a=Pm(a),Pm(e)===a}function rt(e,a,n,l,r,c){switch(n){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Nl(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Nl(e,""+l);break;case"className":ds(e,"class",l);break;case"tabIndex":ds(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ds(e,n,l);break;case"style":Id(e,l,c);break;case"data":if(a!=="object"){ds(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ps(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(a!=="input"&&rt(e,a,"name",r.name,r,null),rt(e,a,"formEncType",r.formEncType,r,null),rt(e,a,"formMethod",r.formMethod,r,null),rt(e,a,"formTarget",r.formTarget,r,null)):(rt(e,a,"encType",r.encType,r,null),rt(e,a,"method",r.method,r,null),rt(e,a,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ps(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Ja);break;case"onScroll":l!=null&&Ge("scroll",e);break;case"onScrollEnd":l!=null&&Ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ps(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Ge("beforetoggle",e),Ge("toggle",e),cs(e,"popover",l);break;case"xlinkActuate":Ka(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ka(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ka(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ka(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ka(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ka(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ka(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ka(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ka(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":cs(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ux.get(n)||n,cs(e,n,l))}}function Uc(e,a,n,l,r,c){switch(n){case"style":Id(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Nl(e,l):(typeof l=="number"||typeof l=="bigint")&&Nl(e,""+l);break;case"onScroll":l!=null&&Ge("scroll",e);break;case"onScrollEnd":l!=null&&Ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ja);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),a=n.slice(2,r?n.length-7:void 0),c=e[ia]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(a,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,l,r);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):cs(e,n,l)}}}function Jt(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",e),Ge("load",e);var l=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var u=n[c];if(u!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:rt(e,a,c,u,n,null)}}r&&rt(e,a,"srcSet",n.srcSet,n,null),l&&rt(e,a,"src",n.src,n,null);return;case"input":Ge("invalid",e);var x=c=u=r=null,k=null,Q=null;for(l in n)if(n.hasOwnProperty(l)){var I=n[l];if(I!=null)switch(l){case"name":r=I;break;case"type":u=I;break;case"checked":k=I;break;case"defaultChecked":Q=I;break;case"value":c=I;break;case"defaultValue":x=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(d(137,a));break;default:rt(e,a,l,I,n,null)}}Jd(e,c,x,k,Q,u,r,!1);return;case"select":Ge("invalid",e),l=u=c=null;for(r in n)if(n.hasOwnProperty(r)&&(x=n[r],x!=null))switch(r){case"value":c=x;break;case"defaultValue":u=x;break;case"multiple":l=x;default:rt(e,a,r,x,n,null)}a=c,n=u,e.multiple=!!l,a!=null?wl(e,!!l,a,!1):n!=null&&wl(e,!!l,n,!0);return;case"textarea":Ge("invalid",e),c=r=l=null;for(u in n)if(n.hasOwnProperty(u)&&(x=n[u],x!=null))switch(u){case"value":l=x;break;case"defaultValue":r=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(91));break;default:rt(e,a,u,x,n,null)}Wd(e,l,r,c);return;case"option":for(k in n)if(n.hasOwnProperty(k)&&(l=n[k],l!=null))switch(k){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:rt(e,a,k,l,n,null)}return;case"dialog":Ge("beforetoggle",e),Ge("toggle",e),Ge("cancel",e),Ge("close",e);break;case"iframe":case"object":Ge("load",e);break;case"video":case"audio":for(l=0;l<qi.length;l++)Ge(qi[l],e);break;case"image":Ge("error",e),Ge("load",e);break;case"details":Ge("toggle",e);break;case"embed":case"source":case"link":Ge("error",e),Ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in n)if(n.hasOwnProperty(Q)&&(l=n[Q],l!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:rt(e,a,Q,l,n,null)}return;default:if(Jo(a)){for(I in n)n.hasOwnProperty(I)&&(l=n[I],l!==void 0&&Uc(e,a,I,l,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(l=n[x],l!=null&&rt(e,a,x,l,n,null))}function rb(e,a,n,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,u=null,x=null,k=null,Q=null,I=null;for(W in n){var le=n[W];if(n.hasOwnProperty(W)&&le!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":k=le;default:l.hasOwnProperty(W)||rt(e,a,W,null,l,le)}}for(var J in l){var W=l[J];if(le=n[J],l.hasOwnProperty(J)&&(W!=null||le!=null))switch(J){case"type":c=W;break;case"name":r=W;break;case"checked":Q=W;break;case"defaultChecked":I=W;break;case"value":u=W;break;case"defaultValue":x=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(d(137,a));break;default:W!==le&&rt(e,a,J,W,l,le)}}Zo(e,u,x,k,Q,I,c,r);return;case"select":W=u=x=J=null;for(c in n)if(k=n[c],n.hasOwnProperty(c)&&k!=null)switch(c){case"value":break;case"multiple":W=k;default:l.hasOwnProperty(c)||rt(e,a,c,null,l,k)}for(r in l)if(c=l[r],k=n[r],l.hasOwnProperty(r)&&(c!=null||k!=null))switch(r){case"value":J=c;break;case"defaultValue":x=c;break;case"multiple":u=c;default:c!==k&&rt(e,a,r,c,l,k)}a=x,n=u,l=W,J!=null?wl(e,!!n,J,!1):!!l!=!!n&&(a!=null?wl(e,!!n,a,!0):wl(e,!!n,n?[]:"",!1));return;case"textarea":W=J=null;for(x in n)if(r=n[x],n.hasOwnProperty(x)&&r!=null&&!l.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:rt(e,a,x,null,l,r)}for(u in l)if(r=l[u],c=n[u],l.hasOwnProperty(u)&&(r!=null||c!=null))switch(u){case"value":J=r;break;case"defaultValue":W=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&rt(e,a,u,r,l,c)}Fd(e,J,W);return;case"option":for(var we in n)if(J=n[we],n.hasOwnProperty(we)&&J!=null&&!l.hasOwnProperty(we))switch(we){case"selected":e.selected=!1;break;default:rt(e,a,we,null,l,J)}for(k in l)if(J=l[k],W=n[k],l.hasOwnProperty(k)&&J!==W&&(J!=null||W!=null))switch(k){case"selected":e.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:rt(e,a,k,J,l,W)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ze in n)J=n[ze],n.hasOwnProperty(ze)&&J!=null&&!l.hasOwnProperty(ze)&&rt(e,a,ze,null,l,J);for(Q in l)if(J=l[Q],W=n[Q],l.hasOwnProperty(Q)&&J!==W&&(J!=null||W!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(d(137,a));break;default:rt(e,a,Q,J,l,W)}return;default:if(Jo(a)){for(var ct in n)J=n[ct],n.hasOwnProperty(ct)&&J!==void 0&&!l.hasOwnProperty(ct)&&Uc(e,a,ct,void 0,l,J);for(I in l)J=l[I],W=n[I],!l.hasOwnProperty(I)||J===W||J===void 0&&W===void 0||Uc(e,a,I,J,l,W);return}}for(var L in n)J=n[L],n.hasOwnProperty(L)&&J!=null&&!l.hasOwnProperty(L)&&rt(e,a,L,null,l,J);for(le in l)J=l[le],W=n[le],!l.hasOwnProperty(le)||J===W||J==null&&W==null||rt(e,a,le,J,l,W)}function ef(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var r=n[l],c=r.transferSize,u=r.initiatorType,x=r.duration;if(c&&x&&ef(u)){for(u=0,x=r.responseEnd,l+=1;l<n.length;l++){var k=n[l],Q=k.startTime;if(Q>x)break;var I=k.transferSize,le=k.initiatorType;I&&ef(le)&&(k=k.responseEnd,u+=I*(k<x?1:(x-Q)/(k-Q)))}if(--l,a+=8*(c+u)/(r.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rc=null,Hc=null;function oo(e){return e.nodeType===9?e:e.ownerDocument}function tf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function af(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Lc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var qc=null;function db(){var e=window.event;return e&&e.type==="popstate"?e===qc?!1:(qc=e,!0):(qc=null,!1)}var nf=typeof setTimeout=="function"?setTimeout:void 0,ub=typeof clearTimeout=="function"?clearTimeout:void 0,lf=typeof Promise=="function"?Promise:void 0,pb=typeof queueMicrotask=="function"?queueMicrotask:typeof lf<"u"?function(e){return lf.resolve(null).then(e).catch(mb)}:nf;function mb(e){setTimeout(function(){throw e})}function Un(e){return e==="head"}function sf(e,a){var n=a,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(r),ei(a);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Gi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Gi(n);for(var c=n.firstChild;c;){var u=c.nextSibling,x=c.nodeName;c[ii]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=u}}else n==="body"&&Gi(e.ownerDocument.body);n=r}while(n);ei(a)}function of(e,a){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function Bc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Bc(n),Qo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function fb(e,a,n,l){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ii])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Aa(e.nextSibling),e===null)break}return null}function hb(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Aa(e.nextSibling),e===null))return null;return e}function rf(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Aa(e.nextSibling),e===null))return null;return e}function Gc(e){return e.data==="$?"||e.data==="$~"}function Yc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xb(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var l=function(){a(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Aa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var $c=null;function cf(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return Aa(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function uf(e,a,n){switch(a=oo(n),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Gi(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Qo(e)}var Ua=new Map,pf=new Set;function ro(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pn=$.d;$.d={f:gb,r:bb,D:yb,C:vb,L:jb,m:wb,X:_b,S:Nb,M:Sb};function gb(){var e=pn.f(),a=Is();return e||a}function bb(e){var a=yl(e);a!==null&&a.tag===5&&a.type==="form"?zp(a):pn.r(e)}var Wl=typeof document>"u"?null:document;function mf(e,a,n){var l=Wl;if(l&&typeof a=="string"&&a){var r=Ca(a);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),pf.has(r)||(pf.add(r),e={rel:e,crossOrigin:n,href:a},l.querySelector(r)===null&&(a=l.createElement("link"),Jt(a,"link",e),Yt(a),l.head.appendChild(a)))}}function yb(e){pn.D(e),mf("dns-prefetch",e,null)}function vb(e,a){pn.C(e,a),mf("preconnect",e,a)}function jb(e,a,n){pn.L(e,a,n);var l=Wl;if(l&&e&&a){var r='link[rel="preload"][as="'+Ca(a)+'"]';a==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ca(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ca(n.imageSizes)+'"]')):r+='[href="'+Ca(e)+'"]';var c=r;switch(a){case"style":c=Pl(e);break;case"script":c=Il(e)}Ua.has(c)||(e=g({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),Ua.set(c,e),l.querySelector(r)!==null||a==="style"&&l.querySelector(Yi(c))||a==="script"&&l.querySelector($i(c))||(a=l.createElement("link"),Jt(a,"link",e),Yt(a),l.head.appendChild(a)))}}function wb(e,a){pn.m(e,a);var n=Wl;if(n&&e){var l=a&&typeof a.as=="string"?a.as:"script",r='link[rel="modulepreload"][as="'+Ca(l)+'"][href="'+Ca(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Il(e)}if(!Ua.has(c)&&(e=g({rel:"modulepreload",href:e},a),Ua.set(c,e),n.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector($i(c)))return}l=n.createElement("link"),Jt(l,"link",e),Yt(l),n.head.appendChild(l)}}}function Nb(e,a,n){pn.S(e,a,n);var l=Wl;if(l&&e){var r=vl(l).hoistableStyles,c=Pl(e);a=a||"default";var u=r.get(c);if(!u){var x={loading:0,preload:null};if(u=l.querySelector(Yi(c)))x.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":a},n),(n=Ua.get(c))&&Vc(e,n);var k=u=l.createElement("link");Yt(k),Jt(k,"link",e),k._p=new Promise(function(Q,I){k.onload=Q,k.onerror=I}),k.addEventListener("load",function(){x.loading|=1}),k.addEventListener("error",function(){x.loading|=2}),x.loading|=4,co(u,a,l)}u={type:"stylesheet",instance:u,count:1,state:x},r.set(c,u)}}}function _b(e,a){pn.X(e,a);var n=Wl;if(n&&e){var l=vl(n).hoistableScripts,r=Il(e),c=l.get(r);c||(c=n.querySelector($i(r)),c||(e=g({src:e,async:!0},a),(a=Ua.get(r))&&Qc(e,a),c=n.createElement("script"),Yt(c),Jt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Sb(e,a){pn.M(e,a);var n=Wl;if(n&&e){var l=vl(n).hoistableScripts,r=Il(e),c=l.get(r);c||(c=n.querySelector($i(r)),c||(e=g({src:e,async:!0,type:"module"},a),(a=Ua.get(r))&&Qc(e,a),c=n.createElement("script"),Yt(c),Jt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function ff(e,a,n,l){var r=(r=ke.current)?ro(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=Pl(n.href),n=vl(r).hoistableStyles,l=n.get(a),l||(l={type:"style",instance:null,count:0,state:null},n.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Pl(n.href);var c=vl(r).hoistableStyles,u=c.get(e);if(u||(r=r.ownerDocument||r,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,u),(c=r.querySelector(Yi(e)))&&!c._p&&(u.instance=c,u.state.loading=5),Ua.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ua.set(e,n),c||kb(r,e,n,u.state))),a&&l===null)throw Error(d(528,""));return u}if(a&&l!==null)throw Error(d(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Il(n),n=vl(r).hoistableScripts,l=n.get(a),l||(l={type:"script",instance:null,count:0,state:null},n.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Pl(e){return'href="'+Ca(e)+'"'}function Yi(e){return'link[rel="stylesheet"]['+e+"]"}function hf(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function kb(e,a,n,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Jt(a,"link",n),Yt(a),e.head.appendChild(a))}function Il(e){return'[src="'+Ca(e)+'"]'}function $i(e){return"script[async]"+e}function xf(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+Ca(n.href)+'"]');if(l)return a.instance=l,Yt(l),l;var r=g({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Yt(l),Jt(l,"style",r),co(l,n.precedence,e),a.instance=l;case"stylesheet":r=Pl(n.href);var c=e.querySelector(Yi(r));if(c)return a.state.loading|=4,a.instance=c,Yt(c),c;l=hf(n),(r=Ua.get(r))&&Vc(l,r),c=(e.ownerDocument||e).createElement("link"),Yt(c);var u=c;return u._p=new Promise(function(x,k){u.onload=x,u.onerror=k}),Jt(c,"link",l),a.state.loading|=4,co(c,n.precedence,e),a.instance=c;case"script":return c=Il(n.src),(r=e.querySelector($i(c)))?(a.instance=r,Yt(r),r):(l=n,(r=Ua.get(c))&&(l=g({},n),Qc(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Yt(r),Jt(r,"link",l),e.head.appendChild(r),a.instance=r);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,co(l,n.precedence,e));return a.instance}function co(e,a,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,u=0;u<l.length;u++){var x=l[u];if(x.dataset.precedence===a)c=x;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function Vc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Qc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var uo=null;function gf(e,a,n){if(uo===null){var l=new Map,r=uo=new Map;r.set(n,l)}else r=uo,l=r.get(n),l||(l=new Map,r.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[ii]||c[yt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var u=c.getAttribute(a)||"";u=e+u;var x=l.get(u);x?x.push(c):l.set(u,[c])}}return l}function bf(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function Cb(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function yf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function zb(e,a,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Pl(l.href),c=a.querySelector(Yi(r));if(c){a=c._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=po.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=c,Yt(c);return}c=a.ownerDocument||a,l=hf(l),(r=Ua.get(r))&&Vc(l,r),c=c.createElement("link"),Yt(c);var u=c;u._p=new Promise(function(x,k){u.onload=x,u.onerror=k}),Jt(c,"link",l),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=po.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var Xc=0;function Tb(e,a){return e.stylesheets&&e.count===0&&fo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&fo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+a);0<e.imgBytes&&Xc===0&&(Xc=62500*cb());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Xc?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function po(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mo=null;function fo(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mo=new Map,a.forEach(Eb,e),mo=null,po.call(e))}function Eb(e,a){if(!(a.state.loading&4)){var n=mo.get(e);if(n)var l=n.get(null);else{n=new Map,mo.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var u=r[c];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),l=u)}l&&n.set(null,l)}r=a.instance,u=r.getAttribute("data-precedence"),c=n.get(u)||l,c===l&&n.set(null,r),n.set(u,r),this.count++,l=po.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),a.state.loading|=4}}var Vi={$$typeof:A,Provider:null,Consumer:null,_currentValue:E,_currentValue2:E,_threadCount:0};function Mb(e,a,n,l,r,c,u,x,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ut(0),this.hiddenUpdates=ut(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function vf(e,a,n,l,r,c,u,x,k,Q,I,le){return e=new Mb(e,a,n,u,k,Q,I,le,x),a=1,c===!0&&(a|=24),c=xa(3,null,null,a),e.current=c,c.stateNode=e,a=Sr(),a.refCount++,e.pooledCache=a,a.refCount++,c.memoizedState={element:l,isDehydrated:n,cache:a},Tr(c),e}function jf(e){return e?(e=El,e):El}function wf(e,a,n,l,r,c){r=jf(r),l.context===null?l.context=r:l.pendingContext=r,l=_n(a),l.payload={element:n},c=c===void 0?null:c,c!==null&&(l.callback=c),n=Sn(e,l,a),n!==null&&(ua(n,e,a),wi(n,e,a))}function Nf(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function Zc(e,a){Nf(e,a),(e=e.alternate)&&Nf(e,a)}function _f(e){if(e.tag===13||e.tag===31){var a=tl(e,67108864);a!==null&&ua(a,e,67108864),Zc(e,67108864)}}function Sf(e){if(e.tag===13||e.tag===31){var a=ja();a=he(a);var n=tl(e,a);n!==null&&ua(n,e,a),Zc(e,a)}}var ho=!0;function Db(e,a,n,l){var r=S.T;S.T=null;var c=$.p;try{$.p=2,Kc(e,a,n,l)}finally{$.p=c,S.T=r}}function Ob(e,a,n,l){var r=S.T;S.T=null;var c=$.p;try{$.p=8,Kc(e,a,n,l)}finally{$.p=c,S.T=r}}function Kc(e,a,n,l){if(ho){var r=Jc(l);if(r===null)Ac(e,a,l,xo,n),Cf(e,l);else if(Ub(r,e,a,n,l))l.stopPropagation();else if(Cf(e,l),a&4&&-1<Ab.indexOf(e)){for(;r!==null;){var c=yl(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var u=Qe(c.pendingLanes);if(u!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;u;){var k=1<<31-Ht(u);x.entanglements[1]|=k,u&=~k}Qa(c),(Ie&6)===0&&(Ws=ye()+500,Li(0))}}break;case 31:case 13:x=tl(c,2),x!==null&&ua(x,c,2),Is(),Zc(c,2)}if(c=Jc(l),c===null&&Ac(e,a,l,xo,n),c===r)break;r=c}r!==null&&l.stopPropagation()}else Ac(e,a,l,null,n)}}function Jc(e){return e=Wo(e),Fc(e)}var xo=null;function Fc(e){if(xo=null,e=bl(e),e!==null){var a=h(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=m(a),e!==null)return e;e=null}else if(n===31){if(e=y(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return xo=e,null}function kf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oe()){case je:return 2;case G:return 8;case xe:case ve:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var Wc=!1,Rn=null,Hn=null,Ln=null,Qi=new Map,Xi=new Map,qn=[],Ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cf(e,a){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Qi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xi.delete(a.pointerId)}}function Zi(e,a,n,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:a,domEventName:n,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},a!==null&&(a=yl(a),a!==null&&_f(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,r!==null&&a.indexOf(r)===-1&&a.push(r),e)}function Ub(e,a,n,l,r){switch(a){case"focusin":return Rn=Zi(Rn,e,a,n,l,r),!0;case"dragenter":return Hn=Zi(Hn,e,a,n,l,r),!0;case"mouseover":return Ln=Zi(Ln,e,a,n,l,r),!0;case"pointerover":var c=r.pointerId;return Qi.set(c,Zi(Qi.get(c)||null,e,a,n,l,r)),!0;case"gotpointercapture":return c=r.pointerId,Xi.set(c,Zi(Xi.get(c)||null,e,a,n,l,r)),!0}return!1}function zf(e){var a=bl(e.target);if(a!==null){var n=h(a);if(n!==null){if(a=n.tag,a===13){if(a=m(n),a!==null){e.blockedOn=a,Tt(e.priority,function(){Sf(n)});return}}else if(a===31){if(a=y(n),a!==null){e.blockedOn=a,Tt(e.priority,function(){Sf(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=Jc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Fo=l,n.target.dispatchEvent(l),Fo=null}else return a=yl(n),a!==null&&_f(a),e.blockedOn=n,!1;a.shift()}return!0}function Tf(e,a,n){go(e)&&n.delete(a)}function Rb(){Wc=!1,Rn!==null&&go(Rn)&&(Rn=null),Hn!==null&&go(Hn)&&(Hn=null),Ln!==null&&go(Ln)&&(Ln=null),Qi.forEach(Tf),Xi.forEach(Tf)}function bo(e,a){e.blockedOn===a&&(e.blockedOn=null,Wc||(Wc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Rb)))}var yo=null;function Ef(e){yo!==e&&(yo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){yo===e&&(yo=null);for(var a=0;a<e.length;a+=3){var n=e[a],l=e[a+1],r=e[a+2];if(typeof l!="function"){if(Fc(l||n)===null)continue;break}var c=yl(n);c!==null&&(e.splice(a,3),a-=3,Jr(c,{pending:!0,data:r,method:n.method,action:l},l,r))}}))}function ei(e){function a(k){return bo(k,e)}Rn!==null&&bo(Rn,e),Hn!==null&&bo(Hn,e),Ln!==null&&bo(Ln,e),Qi.forEach(a),Xi.forEach(a);for(var n=0;n<qn.length;n++){var l=qn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)zf(n),n.blockedOn===null&&qn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var r=n[l],c=n[l+1],u=r[ia]||null;if(typeof c=="function")u||Ef(n);else if(u){var x=null;if(c&&c.hasAttribute("formAction")){if(r=c,u=c[ia]||null)x=u.formAction;else if(Fc(r)!==null)continue}else x=u.action;typeof x=="function"?n[l+1]=x:(n.splice(l,3),l-=3),Ef(n)}}}function Mf(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(u){return r=u})},focusReset:"manual",scroll:"manual"})}function a(){r!==null&&(r(),r=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),r!==null&&(r(),r=null)}}}function Pc(e){this._internalRoot=e}vo.prototype.render=Pc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var n=a.current,l=ja();wf(n,l,e,a,null,null)},vo.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;wf(e.current,2,null,e,null,null),Is(),a[gl]=null}};function vo(e){this._internalRoot=e}vo.prototype.unstable_scheduleHydration=function(e){if(e){var a=Me();e={blockedOn:null,target:e,priority:a};for(var n=0;n<qn.length&&a!==0&&a<qn[n].priority;n++);qn.splice(n,0,e),n===0&&zf(e)}};var Df=i.version;if(Df!=="19.2.6")throw Error(d(527,Df,"19.2.6"));$.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=b(a),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Hb={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{it=jo.inject(Hb),Ee=jo}catch{}}return Ji.createRoot=function(e,a){if(!p(e))throw Error(d(299));var n=!1,l="",r=Lp,c=qp,u=Bp;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=vf(e,1,!1,null,null,n,l,null,r,c,u,Mf),e[gl]=a.current,Oc(e),new Pc(a)},Ji.hydrateRoot=function(e,a,n){if(!p(e))throw Error(d(299));var l=!1,r="",c=Lp,u=qp,x=Bp,k=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.formState!==void 0&&(k=n.formState)),a=vf(e,1,!0,a,n??null,l,r,k,c,u,x,Mf),a.context=jf(null),n=a.current,l=ja(),l=he(l),r=_n(l),r.callback=null,Sn(n,r,l),n=l,a.current.lanes=n,Fn(a,n),Qa(a),e[gl]=a.current,Oc(e),new vo(a)},Ji.version="19.2.6",Ji}var Yf;function Fb(){if(Yf)return td.exports;Yf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),td.exports=Jb(),td.exports}var Wb=Fb();Xh();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},ts.apply(this,arguments)}var Vn;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Vn||(Vn={}));const $f="popstate";function Pb(s){s===void 0&&(s={});function i(p,h){let{pathname:m="/",search:y="",hash:j=""}=hl(p.location.hash.substr(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),wd("",{pathname:m,search:y,hash:j},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function o(p,h){let m=p.document.querySelector("base"),y="";if(m&&m.getAttribute("href")){let j=p.location.href,b=j.indexOf("#");y=b===-1?j:j.slice(0,b)}return y+"#"+(typeof h=="string"?h:Ao(h))}function d(p,h){qo(p.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(h)+")")}return ey(i,o,d,s)}function kt(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function qo(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Ib(){return Math.random().toString(36).substr(2,8)}function Vf(s,i){return{usr:s.state,key:s.key,idx:i}}function wd(s,i,o,d){return o===void 0&&(o=null),ts({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof i=="string"?hl(i):i,{state:o,key:i&&i.key||d||Ib()})}function Ao(s){let{pathname:i="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function hl(s){let i={};if(s){let o=s.indexOf("#");o>=0&&(i.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(i.search=s.substr(d),s=s.substr(0,d)),s&&(i.pathname=s)}return i}function ey(s,i,o,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:h=!1}=d,m=p.history,y=Vn.Pop,j=null,b=v();b==null&&(b=0,m.replaceState(ts({},m.state,{idx:b}),""));function v(){return(m.state||{idx:null}).idx}function g(){y=Vn.Pop;let z=v(),B=z==null?null:z-b;b=z,j&&j({action:y,location:Z.location,delta:B})}function H(z,B){y=Vn.Push;let U=wd(Z.location,z,B);o&&o(U,z),b=v()+1;let A=Vf(U,b),P=Z.createHref(U);try{m.pushState(A,"",P)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;p.location.assign(P)}h&&j&&j({action:y,location:Z.location,delta:1})}function X(z,B){y=Vn.Replace;let U=wd(Z.location,z,B);o&&o(U,z),b=v();let A=Vf(U,b),P=Z.createHref(U);m.replaceState(A,"",P),h&&j&&j({action:y,location:Z.location,delta:0})}function ee(z){let B=p.location.origin!=="null"?p.location.origin:p.location.href,U=typeof z=="string"?z:Ao(z);return U=U.replace(/ $/,"%20"),kt(B,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,B)}let Z={get action(){return y},get location(){return s(p,m)},listen(z){if(j)throw new Error("A history only accepts one active listener");return p.addEventListener($f,g),j=z,()=>{p.removeEventListener($f,g),j=null}},createHref(z){return i(p,z)},createURL:ee,encodeLocation(z){let B=ee(z);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:H,replace:X,go(z){return m.go(z)}};return Z}var Qf;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Qf||(Qf={}));function ty(s,i,o){return o===void 0&&(o="/"),ay(s,i,o)}function ay(s,i,o,d){let p=typeof i=="string"?hl(i):i,h=Od(p.pathname||"/",o);if(h==null)return null;let m=Zh(s);ny(m);let y=null;for(let j=0;y==null&&j<m.length;++j){let b=hy(h);y=py(m[j],b)}return y}function Zh(s,i,o,d){i===void 0&&(i=[]),o===void 0&&(o=[]),d===void 0&&(d="");let p=(h,m,y)=>{let j={relativePath:y===void 0?h.path||"":y,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};j.relativePath.startsWith("/")&&(kt(j.relativePath.startsWith(d),'Absolute route path "'+j.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),j.relativePath=j.relativePath.slice(d.length));let b=Xn([d,j.relativePath]),v=o.concat(j);h.children&&h.children.length>0&&(kt(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+b+'".')),Zh(h.children,i,v,b)),!(h.path==null&&!h.index)&&i.push({path:b,score:dy(b,h.index),routesMeta:v})};return s.forEach((h,m)=>{var y;if(h.path===""||!((y=h.path)!=null&&y.includes("?")))p(h,m);else for(let j of Kh(h.path))p(h,m,j)}),i}function Kh(s){let i=s.split("/");if(i.length===0)return[];let[o,...d]=i,p=o.endsWith("?"),h=o.replace(/\?$/,"");if(d.length===0)return p?[h,""]:[h];let m=Kh(d.join("/")),y=[];return y.push(...m.map(j=>j===""?h:[h,j].join("/"))),p&&y.push(...m),y.map(j=>s.startsWith("/")&&j===""?"/":j)}function ny(s){s.sort((i,o)=>i.score!==o.score?o.score-i.score:uy(i.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const ly=/^:[\w-]+$/,iy=3,sy=2,oy=1,ry=10,cy=-2,Xf=s=>s==="*";function dy(s,i){let o=s.split("/"),d=o.length;return o.some(Xf)&&(d+=cy),i&&(d+=sy),o.filter(p=>!Xf(p)).reduce((p,h)=>p+(ly.test(h)?iy:h===""?oy:ry),d)}function uy(s,i){return s.length===i.length&&s.slice(0,-1).every((d,p)=>d===i[p])?s[s.length-1]-i[i.length-1]:0}function py(s,i,o){let{routesMeta:d}=s,p={},h="/",m=[];for(let y=0;y<d.length;++y){let j=d[y],b=y===d.length-1,v=h==="/"?i:i.slice(h.length)||"/",g=my({path:j.relativePath,caseSensitive:j.caseSensitive,end:b},v),H=j.route;if(!g)return null;Object.assign(p,g.params),m.push({params:p,pathname:Xn([h,g.pathname]),pathnameBase:vy(Xn([h,g.pathnameBase])),route:H}),g.pathnameBase!=="/"&&(h=Xn([h,g.pathnameBase]))}return m}function my(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=fy(s.path,s.caseSensitive,s.end),p=i.match(o);if(!p)return null;let h=p[0],m=h.replace(/(.)\/+$/,"$1"),y=p.slice(1);return{params:d.reduce((b,v,g)=>{let{paramName:H,isOptional:X}=v;if(H==="*"){let Z=y[g]||"";m=h.slice(0,h.length-Z.length).replace(/(.)\/+$/,"$1")}const ee=y[g];return X&&!ee?b[H]=void 0:b[H]=(ee||"").replace(/%2F/g,"/"),b},{}),pathname:h,pathnameBase:m,pattern:s}}function fy(s,i,o){i===void 0&&(i=!1),o===void 0&&(o=!0),qo(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,y,j)=>(d.push({paramName:y,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,i?void 0:"i"),d]}function hy(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return qo(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),s}}function Od(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const xy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gy=s=>xy.test(s);function by(s,i){i===void 0&&(i="/");let{pathname:o,search:d="",hash:p=""}=typeof s=="string"?hl(s):s,h;if(o)if(gy(o))h=o;else{if(o.includes("//")){let m=o;o=o.replace(/\/\/+/g,"/"),qo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(m+" -> "+o))}o.startsWith("/")?h=Zf(o.substring(1),"/"):h=Zf(o,i)}else h=i;return{pathname:h,search:jy(d),hash:wy(p)}}function Zf(s,i){let o=i.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?o.length>1&&o.pop():p!=="."&&o.push(p)}),o.length>1?o.join("/"):"/"}function id(s,i,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yy(s){return s.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Ad(s,i){let o=yy(s);return i?o.map((d,p)=>p===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function Ud(s,i,o,d){d===void 0&&(d=!1);let p;typeof s=="string"?p=hl(s):(p=ts({},s),kt(!p.pathname||!p.pathname.includes("?"),id("?","pathname","search",p)),kt(!p.pathname||!p.pathname.includes("#"),id("#","pathname","hash",p)),kt(!p.search||!p.search.includes("#"),id("#","search","hash",p)));let h=s===""||p.pathname==="",m=h?"/":p.pathname,y;if(m==null)y=o;else{let g=i.length-1;if(!d&&m.startsWith("..")){let H=m.split("/");for(;H[0]==="..";)H.shift(),g-=1;p.pathname=H.join("/")}y=g>=0?i[g]:"/"}let j=by(p,y),b=m&&m!=="/"&&m.endsWith("/"),v=(h||m===".")&&o.endsWith("/");return!j.pathname.endsWith("/")&&(b||v)&&(j.pathname+="/"),j}const Xn=s=>s.join("/").replace(/\/\/+/g,"/"),vy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),jy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,wy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Ny(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Jh=["post","put","patch","delete"];new Set(Jh);const _y=["get",...Jh];new Set(_y);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},as.apply(this,arguments)}const Rd=f.createContext(null),Sy=f.createContext(null),Kn=f.createContext(null),Bo=f.createContext(null),Jn=f.createContext({outlet:null,matches:[],isDataRoute:!1}),Fh=f.createContext(null);function ky(s,i){let{relative:o}=i===void 0?{}:i;li()||kt(!1);let{basename:d,navigator:p}=f.useContext(Kn),{hash:h,pathname:m,search:y}=Ph(s,{relative:o}),j=m;return d!=="/"&&(j=m==="/"?d:Xn([d,m])),p.createHref({pathname:j,search:y,hash:h})}function li(){return f.useContext(Bo)!=null}function gn(){return li()||kt(!1),f.useContext(Bo).location}function Wh(s){f.useContext(Kn).static||f.useLayoutEffect(s)}function Hd(){let{isDataRoute:s}=f.useContext(Jn);return s?qy():Cy()}function Cy(){li()||kt(!1);let s=f.useContext(Rd),{basename:i,future:o,navigator:d}=f.useContext(Kn),{matches:p}=f.useContext(Jn),{pathname:h}=gn(),m=JSON.stringify(Ad(p,o.v7_relativeSplatPath)),y=f.useRef(!1);return Wh(()=>{y.current=!0}),f.useCallback(function(b,v){if(v===void 0&&(v={}),!y.current)return;if(typeof b=="number"){d.go(b);return}let g=Ud(b,JSON.parse(m),h,v.relative==="path");s==null&&i!=="/"&&(g.pathname=g.pathname==="/"?i:Xn([i,g.pathname])),(v.replace?d.replace:d.push)(g,v.state,v)},[i,d,m,h,s])}function Ph(s,i){let{relative:o}=i===void 0?{}:i,{future:d}=f.useContext(Kn),{matches:p}=f.useContext(Jn),{pathname:h}=gn(),m=JSON.stringify(Ad(p,d.v7_relativeSplatPath));return f.useMemo(()=>Ud(s,JSON.parse(m),h,o==="path"),[s,m,h,o])}function zy(s,i){return Ty(s,i)}function Ty(s,i,o,d){li()||kt(!1);let{navigator:p}=f.useContext(Kn),{matches:h}=f.useContext(Jn),m=h[h.length-1],y=m?m.params:{};m&&m.pathname;let j=m?m.pathnameBase:"/";m&&m.route;let b=gn(),v;if(i){var g;let z=typeof i=="string"?hl(i):i;j==="/"||(g=z.pathname)!=null&&g.startsWith(j)||kt(!1),v=z}else v=b;let H=v.pathname||"/",X=H;if(j!=="/"){let z=j.replace(/^\//,"").split("/");X="/"+H.replace(/^\//,"").split("/").slice(z.length).join("/")}let ee=ty(s,{pathname:X}),Z=Ay(ee&&ee.map(z=>Object.assign({},z,{params:Object.assign({},y,z.params),pathname:Xn([j,p.encodeLocation?p.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?j:Xn([j,p.encodeLocation?p.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),h,o,d);return i&&Z?f.createElement(Bo.Provider,{value:{location:as({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Vn.Pop}},Z):Z}function Ey(){let s=Ly(),i=Ny(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},i),o?f.createElement("pre",{style:p},o):null,null)}const My=f.createElement(Ey,null);class Dy extends f.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?f.createElement(Jn.Provider,{value:this.props.routeContext},f.createElement(Fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Oy(s){let{routeContext:i,match:o,children:d}=s,p=f.useContext(Rd);return p&&p.static&&p.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=o.route.id),f.createElement(Jn.Provider,{value:i},d)}function Ay(s,i,o,d){var p;if(i===void 0&&(i=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var h;if(!o)return null;if(o.errors)s=o.matches;else if((h=d)!=null&&h.v7_partialHydration&&i.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let m=s,y=(p=o)==null?void 0:p.errors;if(y!=null){let v=m.findIndex(g=>g.route.id&&(y==null?void 0:y[g.route.id])!==void 0);v>=0||kt(!1),m=m.slice(0,Math.min(m.length,v+1))}let j=!1,b=-1;if(o&&d&&d.v7_partialHydration)for(let v=0;v<m.length;v++){let g=m[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(b=v),g.route.id){let{loaderData:H,errors:X}=o,ee=g.route.loader&&H[g.route.id]===void 0&&(!X||X[g.route.id]===void 0);if(g.route.lazy||ee){j=!0,b>=0?m=m.slice(0,b+1):m=[m[0]];break}}}return m.reduceRight((v,g,H)=>{let X,ee=!1,Z=null,z=null;o&&(X=y&&g.route.id?y[g.route.id]:void 0,Z=g.route.errorElement||My,j&&(b<0&&H===0?(By("route-fallback"),ee=!0,z=null):b===H&&(ee=!0,z=g.route.hydrateFallbackElement||null)));let B=i.concat(m.slice(0,H+1)),U=()=>{let A;return X?A=Z:ee?A=z:g.route.Component?A=f.createElement(g.route.Component,null):g.route.element?A=g.route.element:A=v,f.createElement(Oy,{match:g,routeContext:{outlet:v,matches:B,isDataRoute:o!=null},children:A})};return o&&(g.route.ErrorBoundary||g.route.errorElement||H===0)?f.createElement(Dy,{location:o.location,revalidation:o.revalidation,component:Z,error:X,children:U(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):U()},null)}var Ih=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Ih||{}),ex=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(ex||{});function Uy(s){let i=f.useContext(Rd);return i||kt(!1),i}function Ry(s){let i=f.useContext(Sy);return i||kt(!1),i}function Hy(s){let i=f.useContext(Jn);return i||kt(!1),i}function tx(s){let i=Hy(),o=i.matches[i.matches.length-1];return o.route.id||kt(!1),o.route.id}function Ly(){var s;let i=f.useContext(Fh),o=Ry(),d=tx();return i!==void 0?i:(s=o.errors)==null?void 0:s[d]}function qy(){let{router:s}=Uy(Ih.UseNavigateStable),i=tx(ex.UseNavigateStable),o=f.useRef(!1);return Wh(()=>{o.current=!0}),f.useCallback(function(p,h){h===void 0&&(h={}),o.current&&(typeof p=="number"?s.navigate(p):s.navigate(p,as({fromRouteId:i},h)))},[s,i])}const Kf={};function By(s,i,o){Kf[s]||(Kf[s]=!0)}function Gy(s,i){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function Jf(s){let{to:i,replace:o,state:d,relative:p}=s;li()||kt(!1);let{future:h,static:m}=f.useContext(Kn),{matches:y}=f.useContext(Jn),{pathname:j}=gn(),b=Hd(),v=Ud(i,Ad(y,h.v7_relativeSplatPath),j,p==="path"),g=JSON.stringify(v);return f.useEffect(()=>b(JSON.parse(g),{replace:o,state:d,relative:p}),[b,g,p,o,d]),null}function vt(s){kt(!1)}function Yy(s){let{basename:i="/",children:o=null,location:d,navigationType:p=Vn.Pop,navigator:h,static:m=!1,future:y}=s;li()&&kt(!1);let j=i.replace(/^\/*/,"/"),b=f.useMemo(()=>({basename:j,navigator:h,static:m,future:as({v7_relativeSplatPath:!1},y)}),[j,y,h,m]);typeof d=="string"&&(d=hl(d));let{pathname:v="/",search:g="",hash:H="",state:X=null,key:ee="default"}=d,Z=f.useMemo(()=>{let z=Od(v,j);return z==null?null:{location:{pathname:z,search:g,hash:H,state:X,key:ee},navigationType:p}},[j,v,g,H,X,ee,p]);return Z==null?null:f.createElement(Kn.Provider,{value:b},f.createElement(Bo.Provider,{children:o,value:Z}))}function $y(s){let{children:i,location:o}=s;return zy(Nd(i),o)}new Promise(()=>{});function Nd(s,i){i===void 0&&(i=[]);let o=[];return f.Children.forEach(s,(d,p)=>{if(!f.isValidElement(d))return;let h=[...i,p];if(d.type===f.Fragment){o.push.apply(o,Nd(d.props.children,h));return}d.type!==vt&&kt(!1),!d.props.index||!d.props.children||kt(!1);let m={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(m.children=Nd(d.props.children,h)),o.push(m)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _d(){return _d=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},_d.apply(this,arguments)}function Vy(s,i){if(s==null)return{};var o={},d=Object.keys(s),p,h;for(h=0;h<d.length;h++)p=d[h],!(i.indexOf(p)>=0)&&(o[p]=s[p]);return o}function Qy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Xy(s,i){return s.button===0&&(!i||i==="_self")&&!Qy(s)}const Zy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ky="6";try{window.__reactRouterVersion=Ky}catch{}const Jy="startTransition",Ff=Qb[Jy];function Fy(s){let{basename:i,children:o,future:d,window:p}=s,h=f.useRef();h.current==null&&(h.current=Pb({window:p,v5Compat:!0}));let m=h.current,[y,j]=f.useState({action:m.action,location:m.location}),{v7_startTransition:b}=d||{},v=f.useCallback(g=>{b&&Ff?Ff(()=>j(g)):j(g)},[j,b]);return f.useLayoutEffect(()=>m.listen(v),[m,v]),f.useEffect(()=>Gy(d),[d]),f.createElement(Yy,{basename:i,children:o,location:y.location,navigationType:y.action,navigator:m,future:d})}const Wy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Py=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Iy=f.forwardRef(function(i,o){let{onClick:d,relative:p,reloadDocument:h,replace:m,state:y,target:j,to:b,preventScrollReset:v,viewTransition:g}=i,H=Vy(i,Zy),{basename:X}=f.useContext(Kn),ee,Z=!1;if(typeof b=="string"&&Py.test(b)&&(ee=b,Wy))try{let A=new URL(window.location.href),P=b.startsWith("//")?new URL(A.protocol+b):new URL(b),se=Od(P.pathname,X);P.origin===A.origin&&se!=null?b=se+P.search+P.hash:Z=!0}catch{}let z=ky(b,{relative:p}),B=ev(b,{replace:m,state:y,target:j,preventScrollReset:v,relative:p,viewTransition:g});function U(A){d&&d(A),A.defaultPrevented||B(A)}return f.createElement("a",_d({},H,{href:ee||z,onClick:Z||h?d:U,ref:o,target:j}))});var Wf;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Wf||(Wf={}));var Pf;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Pf||(Pf={}));function ev(s,i){let{target:o,replace:d,state:p,preventScrollReset:h,relative:m,viewTransition:y}=i===void 0?{}:i,j=Hd(),b=gn(),v=Ph(s,{relative:m});return f.useCallback(g=>{if(Xy(g,o)){g.preventDefault();let H=d!==void 0?d:Ao(b)===Ao(v);j(s,{replace:H,state:p,preventScrollReset:h,relative:m,viewTransition:y})}},[b,j,v,d,p,o,s,h,m,y])}function Ct(){const s=Hd();return f.useMemo(()=>({push:i=>s(i),replace:i=>s(i,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function tv(){return gn().pathname}function av({href:s,...i}){return t.jsx(Iy,{to:s,...i})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ax=(...s)=>s.filter((i,o,d)=>!!i&&i.trim()!==""&&d.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=f.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:p="",children:h,iconNode:m,...y},j)=>f.createElement("svg",{ref:j,...lv,width:i,height:i,stroke:s,strokeWidth:d?Number(o)*24/Number(i):o,className:ax("lucide",p),...y},[...m.map(([b,v])=>f.createElement(b,v)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=(s,i)=>{const o=f.forwardRef(({className:d,...p},h)=>f.createElement(iv,{ref:h,iconNode:i,className:ax(`lucide-${nv(s)}`,d),...p}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=be("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=be("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=be("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=be("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=be("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=be("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=be("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=be("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=be("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=be("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=be("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=be("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=be("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=be("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=be("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=be("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=be("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=be("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=be("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=be("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=be("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=be("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=be("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=be("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=be("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=be("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=be("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=be("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=be("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=be("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=be("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=be("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=be("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=be("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=be("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=be("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=be("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=be("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=be("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=be("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=be("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=be("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=be("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=be("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=be("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=be("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=be("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=be("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=be("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=be("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=be("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=be("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=be("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=be("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=be("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=be("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=be("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=be("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=be("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=be("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=be("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=be("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=be("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=be("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=be("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=be("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=be("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=be("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=be("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=be("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=be("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=be("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=be("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=be("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=be("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Bv="/api/v3";var Qh;const me=typeof window<"u"&&((Qh=window.settings)==null?void 0:Qh.secure_path)||"ZicFree123",Oo="authorization";function Gv(s){if(typeof window>"u"||typeof document>"u")return null;const i=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let p=o[d];for(;p.charAt(0)===" ";)p=p.substring(1,p.length);if(p.indexOf(i)===0)try{const h=p.substring(i.length,p.length),m=decodeURIComponent(h),y=JSON.parse(m);return y&&typeof y=="object"&&"value"in y?y.value:m}catch{try{return decodeURIComponent(p.substring(i.length,p.length))}catch{return p.substring(i.length,p.length)}}}return null}function Yv(s,i,o=36500){if(typeof window>"u"||typeof document>"u")return;const p=JSON.stringify({site:"ZicNet",value:i}),h=window.location.protocol==="https:",m=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",y=new Date;y.setTime(y.getTime()+o*24*60*60*1e3);const j=`expires=${y.toUTCString()}`,b=m?"":`domain=${window.location.hostname};`;let v=`${s}=${encodeURIComponent(p)}; ${j}; ${b} path=/`;h&&(v+="; secure"),v+="; SameSite=Lax",document.cookie=v;try{window.localStorage.setItem(`cookie_${s}`,p)}catch{}}function $v(s){if(typeof window>"u"||typeof document>"u")return;const i=window.location.hostname,o=["",i,i.startsWith(".")?i:`.${i}`],d=["/","/dashboard","/user","/admin"];o.forEach(p=>{d.forEach(h=>{const m=p?` domain=${p};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${m} path=${h};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function sx(){if(typeof window>"u")return null;let s=window.localStorage.getItem(Oo);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(Oo,s)}catch{}if(!s&&(s=Gv("auth_data"),s))try{window.localStorage.setItem(Oo,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function Vv(s,i){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${Bv}${o}`,window.location.origin);return Object.entries(i??{}).forEach(([p,h])=>{h!==void 0&&d.searchParams.set(p,String(h))}),d.toString()}function zt(){return!!sx()}function Qv(s){typeof window>"u"||(window.localStorage.setItem(Oo,s),window.localStorage.setItem("auth_data",s),Yv("auth_data",s,36500))}function ox(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(p=>{window.localStorage.removeItem(p)}),["token","auth_data","authorization","vuex","user","auth"].forEach(p=>{window.sessionStorage.removeItem(p)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(p=>{o.forEach(h=>{document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${h};`}),document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,$v(p)})}async function pe(s,i={}){const o={},d=i.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),i.auth!==!1){const j=sx();j&&(o.authorization=j)}const p=await fetch(Vv(s,i.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(i.body??{}),cache:"no-store"}),m=(p.headers.get("content-type")||"").includes("application/json"),y=m?await p.json():await p.text();if(!p.ok){const j=typeof y=="object"&&y&&"message"in y?String(y.message):`Request failed with status ${p.status}`,b=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(j);throw(p.status===401||p.status===403&&!b)&&i.auth!==!1&&(ox(),window.location.hash="/login"),new Error(j)}if(!m&&typeof y=="string"&&(y.trim().startsWith("<!DOCTYPE html")||y.trim().startsWith("<html")||y.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return y}async function Xv(s,i){return pe("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:i}})}async function Zv(){const s=`/${me}/stat`,[i,o,d,p,h,m]=await Promise.all([pe(`${s}/getOverride`),pe(`${s}/getOrder`),pe(`${s}/getServerTodayRank`),pe(`${s}/getServerLastRank`),pe(`${s}/getUserTodayRank`),pe(`${s}/getUserLastRank`)]);return{override:i.data,order:o.data,serverToday:d.data,serverYesterday:p.data,userToday:h.data,userYesterday:m.data}}async function rx(){return(await pe(`/${me}/config/fetch`)).data}async function cx(s){return pe(`/${me}/config/save`,{method:"POST",body:s})}async function Kv(){return(await pe(`/${me}/config/getEmailTemplate`)).data}async function Jv(){return(await pe(`/${me}/plan/fetch`)).data.map(i=>({id:i.id,name:i.name}))}async function Fv(){return pe(`/${me}/config/testSendMail`,{method:"POST",body:{}})}async function Wv(s){return pe(`/${me}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function Pv(){return(await pe(`/${me}/payment/fetch`)).data}async function Iv(){return(await pe(`/${me}/payment/getPaymentMethods`)).data}async function dh(s,i){return(await pe(`/${me}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:i}})).data}async function e1(s){return pe(`/${me}/payment/save`,{method:"POST",body:s})}async function t1(s){return pe(`/${me}/payment/show`,{method:"POST",body:{id:s}})}async function a1(s){return pe(`/${me}/payment/drop`,{method:"POST",body:{id:s}})}async function n1(s){return pe(`/${me}/payment/sort`,{method:"POST",body:{ids:s}})}async function l1(){return(await pe(`/${me}/theme/getThemes`)).data}async function i1(s){return(await pe(`/${me}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function s1(s,i){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(i))));return pe(`/${me}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function ss(){return(await pe(`/${me}/server/group/fetch`)).data}async function dx(s){return pe(`/${me}/server/group/save`,{method:"POST",body:s})}async function o1(s){return pe(`/${me}/server/group/drop`,{method:"POST",body:{id:s}})}const ux=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function px(){return(await pe(`/${me}/server/route/fetch`)).data}async function r1(s){return pe(`/${me}/server/route/save`,{method:"POST",body:s})}async function c1(s){return pe(`/${me}/server/route/drop`,{method:"POST",body:{id:s}})}async function xl(){return(await pe(`/${me}/plan/fetch`)).data}async function d1(s){return pe(`/${me}/plan/save`,{method:"POST",body:s})}async function u1(s){return pe(`/${me}/plan/drop`,{method:"POST",body:{id:s}})}async function uh(s,i){return pe(`/${me}/plan/update`,{method:"POST",body:{id:s,...i}})}async function ph(s){return pe(`/${me}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function p1(s={}){const i=new URLSearchParams;return i.set("current",String(s.current??1)),i.set("pageSize",String(s.pageSize??15)),s.is_commission&&i.set("is_commission","1"),s.filter&&s.filter.forEach((d,p)=>{i.set(`filter[${p}][key]`,d.key),i.set(`filter[${p}][condition]`,d.condition),i.set(`filter[${p}][value]`,d.value)}),await pe(`/${me}/order/fetch?${i.toString()}`)}async function m1(s){return pe(`/${me}/order/paid`,{method:"POST",body:{trade_no:s}})}async function f1(s){return pe(`/${me}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function mx(s){return pe(`/${me}/order/assign`,{method:"POST",body:s})}async function h1(s,i){return pe(`/${me}/order/update`,{method:"POST",body:{trade_no:s,commission_status:i}})}async function x1(s){return pe(`/${me}/order/detail`,{method:"POST",body:{id:s}})}async function fx(s=1,i=15){return pe(`/${me}/coupon/fetch?current=${s}&pageSize=${i}`)}async function g1(s){return pe(`/${me}/coupon/generate`,{method:"POST",body:s})}async function b1(s){return pe(`/${me}/coupon/drop`,{method:"POST",body:{id:s}})}async function y1(s){return pe(`/${me}/coupon/show`,{method:"POST",body:{id:s}})}async function v1(s=1,i=15){return pe(`/${me}/giftcard/fetch?current=${s}&pageSize=${i}`)}async function j1(s){return pe(`/${me}/giftcard/generate`,{method:"POST",body:s})}async function w1(s){return pe(`/${me}/giftcard/drop`,{method:"POST",body:{id:s}})}async function Td(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o&&o.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),pe(`/${me}/user/fetch?${d.toString()}`)}async function N1(s){return pe(`/${me}/user/update`,{method:"POST",body:s})}async function hx(s){return pe(`/${me}/user/getUserInfoById`,{params:{id:s}})}async function _1(s){return pe(`/${me}/user/delUser`,{method:"POST",body:{id:s}})}async function S1(s){return pe(`/${me}/user/generate`,{method:"POST",body:s})}async function k1(s){return pe(`/${me}/user/resetSecret`,{method:"POST",body:{id:s}})}async function C1(s=1,i=15,o,d=!1){const p=new URLSearchParams;return p.set("current",String(s)),p.set("pageSize",String(i)),d&&p.set("include_subscribe_url","1"),o==null||o.forEach((h,m)=>{p.set(`filter[${m}][key]`,h.key),p.set(`filter[${m}][condition]`,h.condition),p.set(`filter[${m}][value]`,h.value)}),pe(`/${me}/subscription/fetch?${p.toString()}`)}async function z1(s){return pe(`/${me}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function T1(s){return pe(`/${me}/subscription/update`,{method:"POST",body:s})}async function E1(s){return pe(`/${me}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function xx(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o==null||o.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),pe(`/${me}/device/fetch?${d.toString()}`)}async function gx(s){return pe(`/${me}/device/drop`,{method:"POST",body:{id:s}})}async function bx(s){return pe(`/${me}/device/ban`,{method:"POST",body:{id:s}})}async function M1(s){return pe(`/${me}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function D1(s,i=1,o=10){return pe(`/${me}/stat/getStatUser`,{params:{user_id:s,current:i,pageSize:o}})}async function O1(){return(await pe(`/${me}/notice/fetch`)).data}async function A1(s){return pe(`/${me}/notice/save`,{method:"POST",body:s})}async function U1(s){return pe(`/${me}/notice/drop`,{method:"POST",body:{id:s}})}async function R1(s){return pe(`/${me}/notice/show`,{method:"POST",body:{id:s}})}async function H1(){return(await pe(`/${me}/ticket/fetch`)).data}async function mh(s){return(await pe(`/${me}/ticket/fetch`,{params:{id:s}})).data}async function L1(s,i){return pe(`/${me}/ticket/reply`,{method:"POST",body:{id:s,message:i}})}async function q1(s){return pe(`/${me}/ticket/close`,{method:"POST",body:{id:s}})}async function B1(){return(await pe(`/${me}/knowledge/fetch`)).data}async function G1(s){return(await pe(`/${me}/knowledge/fetch`,{params:{id:s}})).data}async function Y1(s){return pe(`/${me}/knowledge/save`,{method:"POST",body:s})}async function $1(s){return pe(`/${me}/knowledge/drop`,{method:"POST",body:{id:s}})}async function V1(s){return pe(`/${me}/knowledge/show`,{method:"POST",body:{id:s}})}async function Q1(){return(await pe(`/${me}/webcon/fetch`)).data}async function X1(s){return pe(`/${me}/webcon/save`,{method:"POST",body:s})}async function Z1(s){return pe(`/${me}/webcon/drop`,{method:"POST",body:{id:s}})}async function K1(s){return pe(`/${me}/webcon/show`,{method:"POST",body:{id:s}})}async function J1(){return pe(`/${me}/system/getSystemStatus`)}async function F1(){return(await pe(`/${me}/system/getCoreLicenseStatus`)).data}async function W1(){return(await pe(`/${me}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function P1(){return pe(`/${me}/system/getQueueStats`)}async function I1(){return pe(`/${me}/system/getQueueWorkload`)}async function e0(){return pe(`/${me}/system/getSystemLog`)}async function fh(){return pe(`/${me}/server/manage/getNodes`)}async function t0(s,i){return pe(`/${me}/server/${s}/save`,{method:"POST",body:i})}async function a0(s,i){return pe(`/${me}/server/${s}/drop`,{method:"POST",body:{id:i}})}async function n0(s,i,o){return pe(`/${me}/server/${s}/update`,{method:"POST",body:{id:i,show:o}})}async function l0(s,i){return pe(`/${me}/server/${s}/copy`,{method:"POST",body:{id:i}})}async function i0(s){return pe(`/${me}/server/manage/sort`,{method:"POST",body:s})}const qd=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],yx="admin-locale",Ed="vi-VN",s0="/assets/adminzic",vx=f.createContext(null);function o0(){if(typeof window>"u")return Ed;const s=localStorage.getItem(yx);return s&&qd.some(i=>i.code===s)?s:Ed}function r0(s,i){return i?Object.entries(i).reduce((o,[d,p])=>o.replaceAll(`{${d}}`,String(p)),s):s}function c0(s){return new Promise((i,o)=>{var m;if(typeof window>"u"){i({});return}const d=(m=window.AdminNextI18n)==null?void 0:m[s];if(d){i(d);return}const p=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(p){p.addEventListener("load",()=>{var y;i(((y=window.AdminNextI18n)==null?void 0:y[s])??{})}),p.addEventListener("error",o);return}const h=document.createElement("script");h.src=`${s0}/i18n/${s}.js`,h.async=!0,h.dataset.adminNextLocale=s,h.onload=()=>{var y;return i(((y=window.AdminNextI18n)==null?void 0:y[s])??{})},h.onerror=o,document.head.appendChild(h)})}function d0({children:s}){const[i,o]=f.useState(Ed),[d,p]=f.useState({}),[h,m]=f.useState(!0);f.useEffect(()=>{o(o0())},[]);const y=f.useCallback(v=>{o(v),typeof window<"u"&&localStorage.setItem(yx,v)},[]);f.useEffect(()=>{let v=!0;return m(!0),c0(i).then(g=>{v&&p(g)}).finally(()=>{v&&m(!1)}),()=>{v=!1}},[i]);const j=f.useCallback((v,g)=>r0(d[v]??v,g),[d]),b=f.useMemo(()=>({locale:i,loading:h,setLocale:y,t:j}),[i,h,y,j]);return t.jsx(vx.Provider,{value:b,children:s})}function qe(){const s=f.useContext(vx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function u0(){const s=Ct(),{t:i,locale:o,setLocale:d}=qe(),[p,h]=f.useState(""),[m,y]=f.useState(""),[j,b]=f.useState(""),[v,g]=f.useState(!1),[H,X]=f.useState(!1),ee=f.useRef(null);f.useEffect(()=>{function z(B){ee.current&&!ee.current.contains(B.target)&&X(!1)}return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[]),f.useEffect(()=>{zt()&&s.replace("/dashboard")},[s]);async function Z(z){var B,U,A,P;z.preventDefault(),b(""),g(!0);try{const se=await Xv(p,m),oe=((B=se.data)==null?void 0:B.auth_data)??((U=se.data)==null?void 0:U.token),O=((A=se.data)==null?void 0:A.is_admin)===1||((P=se.data)==null?void 0:P.is_admin)===!0;if(!oe||!O)throw new Error(i("login.adminRequired"));Qv(oe),s.replace("/dashboard")}catch(se){b(se instanceof Error?se.message:i("login.failed"))}finally{g(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:i("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:i("login.eyebrow")}),t.jsx("h1",{children:i("login.heading")}),t.jsx("span",{children:i("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":i("login.formLabel"),children:[t.jsxs("div",{ref:ee,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.language"),onClick:()=>X(z=>!z),children:t.jsx(os,{size:17})}),H?t.jsx("div",{className:"locale-menu",children:qd.map(z=>t.jsxs("button",{className:`locale-option ${o===z.code?"active":""}`,type:"button",onClick:()=>{d(z.code),X(!1)},children:[t.jsx("span",{className:"locale-flag",children:z.flag}),t.jsx("span",{children:z.label})]},z.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(Tv,{size:18}),t.jsx("span",{children:i("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:i("login.title")}),t.jsx("p",{children:i("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:Z,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(lx,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:z=>h(z.target.value),placeholder:i("login.emailPlaceholder"),required:!0,type:"email",value:p})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(jv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:z=>y(z.target.value),placeholder:i("login.passwordPlaceholder"),required:!0,type:"password",value:m})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,t.jsx("button",{className:"primary-button",disabled:v,type:"submit",children:i(v?"login.signingIn":"login.submit")})]})]})]})}function Na(s){const i=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(i)}function Xa(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function p0(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const m0=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:hv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Dv},{href:"/config/payment",label:"nav.paymentConfig",icon:mv},{href:"/config/theme",label:"nav.themeConfig",icon:Rv}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:Ld},{href:"/server/group",label:"nav.groupManagement",icon:Lv},{href:"/server/route",label:"nav.routeManagement",icon:Mv}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:sh},{href:"/order",label:"nav.orders",icon:vv},{href:"/coupon",label:"nav.coupons",icon:xv},{href:"/giftcard",label:"nav.giftcards",icon:Av}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:zd},{href:"/subscription",label:"nav.subscriptions",icon:sh},{href:"/device",label:"nav.devices",icon:Ov},{href:"/webcon",label:"nav.webcon",icon:os},{href:"/notice",label:"nav.notices",icon:Wi},{href:"/ticket",label:"nav.tickets",icon:yv},{href:"/knowledge",label:"nav.knowledge",icon:rv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:cv}]}];function f0(){const[s,i]=f.useState("light");f.useEffect(()=>{const h=localStorage.getItem("admin-theme")??"light";i(h),document.documentElement.setAttribute("data-theme",h)},[]);const o=f.useCallback(p=>{i(p),localStorage.setItem("admin-theme",p),document.documentElement.setAttribute("data-theme",p)},[]),d=f.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function jx(s){return s?new Date(s*1e3):null}function h0(s,i){const o=jx(i);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function x0(s){const i=jx(s);return i?Math.ceil((i.getTime()-Date.now())/864e5):null}function Bt({children:s,title:i,subtitle:o}){const[d,p]=f.useState(!1),h=Ct(),m=tv(),{t:y,locale:j,setLocale:b}=qe(),{theme:v,toggle:g}=f0(),[H,X]=f.useState(!1),ee=f.useRef(null),[Z,z]=f.useState(null),[B,U]=f.useState(!1),A=f.useCallback(async(w=!1)=>{if(zt()){U(w);try{z(w?await W1():await F1())}catch(R){z({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:y("license.unavailable"),error:R instanceof Error?R.message:y("license.unavailable")})}finally{U(!1)}}},[y]);f.useEffect(()=>{function w(R){ee.current&&!ee.current.contains(R.target)&&X(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),f.useEffect(()=>{A(!1);const w=window.setInterval(()=>{A(!1)},6e4);return()=>window.clearInterval(w)},[A]);function P(){ox(),h.replace("/login")}const se=(Z==null?void 0:Z.license_expires_at)??(Z==null?void 0:Z.expires_at),oe=h0(j,se),O=typeof(Z==null?void 0:Z.days_until_expiry)=="number"?Z.days_until_expiry:x0(se),Y=typeof O=="number"?O<=0?y("license.expiresToday"):y("license.daysLeft",{days:O}):null,ae=!!Z&&Z.available&&!Z.requires_renewal,fe=ae&&!!(Z!=null&&Z.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>p(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:y("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:m0.map(w=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:y(w.label)}),w.items.map(R=>{const C=R.icon,T=m===R.href;return t.jsxs(av,{className:`nav-item ${T?"active":""}`,href:R.href,onClick:()=>p(!1),children:[t.jsx(C,{size:17}),t.jsx("span",{children:y(R.label)})]},R.href)})]},w.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":y(d?"common.closeMenu":"common.openMenu"),onClick:()=>p(w=>!w),children:d?t.jsx(lt,{size:19}):t.jsx(Nv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:i}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[ae?t.jsxs("button",{className:`license-chip ${fe?"warning":""}`,type:"button",disabled:B,title:y("license.refresh"),onClick:()=>void A(!0),children:[t.jsx(th,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:y("license.validUntil")}),t.jsx("strong",{children:oe??y("license.unknownExpiry")})]}),Y?t.jsx("small",{children:Y}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:ee,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":y("common.language"),onClick:()=>X(w=>!w),children:t.jsx(os,{size:17})}),H?t.jsx("div",{className:"locale-menu",children:qd.map(w=>t.jsxs("button",{className:`locale-option ${j===w.code?"active":""}`,type:"button",onClick:()=>{b(w.code),X(!1)},children:[t.jsx("span",{className:"locale-flag",children:w.flag}),t.jsx("span",{children:w.label})]},w.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":v==="dark"?"Switch to light mode":"Switch to dark mode",onClick:g,children:v==="dark"?t.jsx(Uv,{size:17}):t.jsx(_v,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:P,children:[t.jsx(wv,{size:16}),t.jsx("span",{children:y("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[Z!=null&&Z.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(Cd,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:y("license.renewTitle")}),t.jsx("p",{children:y("license.renewBody")}),t.jsxs("small",{children:[y("license.currentStatus"),": ",Z.status,Z.error?` - ${Z.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:B,onClick:()=>void A(!0),children:[t.jsx(Nt,{size:16}),y(B?"license.refreshing":"license.refresh")]})]}):null,fe?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(th,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:y("license.expiryWarningTitle")}),t.jsx("p",{children:y("license.expiryWarningBody",{date:oe??y("license.unknownExpiry"),days:O??""})}),t.jsxs("small",{children:[y("license.currentStatus"),": ",Z.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:B,onClick:()=>void A(!0),children:[t.jsx(Nt,{size:16}),y(B?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const hh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function wx(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function Pi(s){return Number(s??0)}function xh(s){return Pi(s)/100}function gh(s){return`${Xa(Math.round(s))} VND`}function Nx(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function g0(s){const i=new Date;return i.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const p=new Date(i);return p.setDate(i.getDate()-(s-d-1)),Nx(p)})}function bh(s,i){const o=s.get(i);if(o)return o;const d=wx(i);return s.set(i,d),d}function b0(s){const i=s.toLowerCase();return i==="register_count"||i.includes("đăng")||i.includes("register")?"registrations":i==="order_count"?"orderCount":i==="paid_count"||i.includes("giao dịch thu")?"paidCount":i==="paid_total"||i.includes("tiền thu")?"paidAmount":i==="commission_count"||i.includes("giao dịch hoa hồng")?"commissionCount":i==="commission_total"||i.includes("tiền hoa hồng")?"commissionAmount":null}function No({label:s,value:i,helper:o,tone:d="default",onClick:p}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:p,style:p?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:i})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(ov,{size:19})}),o?t.jsx("small",{children:o}):null]})}function ht({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(Nt,{size:18}),t.jsx("span",{children:s})]})}function y0(s,i){const o=new Map,d=new Map;if(s.forEach(p=>{const h=bh(o,p.date),m=b0(p.type);if(m){h[m]=Number(p.value||0);return}const y=d.get(p.date)??0,j=hh[y%hh.length];h[j]=Number(p.value||0),d.set(p.date,y+1)}),i){const p=bh(o,Nx(new Date));p.registrations=Pi(i.day_register_total),i.day_order_total!==void 0&&(p.orderCount=Pi(i.day_order_total)),i.day_paid_order_total!==void 0&&(p.paidCount=Pi(i.day_paid_order_total)),p.paidAmount=xh(i.day_paid_income??i.day_income),i.day_commission_payout!==void 0&&(p.commissionAmount=xh(i.day_commission_payout)),i.day_commission_count!==void 0&&(p.commissionCount=Pi(i.day_commission_count))}return o.size===0?[]:g0(31).map(p=>o.get(p)??wx(p))}function v0({records:s,override:i}){const{t:o}=qe(),[d,p]=f.useState("paidAmount"),[h,m]=f.useState(null),[y,j]=f.useState(0),[b,v]=f.useState(0),g=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#2f8f83",format:gh},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#2563eb",format:Xa},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#7c3aed",format:Xa},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#c2410c",format:gh},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#be123c",format:Xa},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#0891b2",format:Xa}],H=g.find(Y=>Y.key===d)??g[0],X=y0(s,i),ee=Y=>Number(Y[H.key]||0),Z=Math.max(...X.map(ee),1),z=720,B=220,U=28,A=X.length>1?(z-U*2)/(X.length-1):0,P=Y=>B-U-Y/Z*(B-U*2),se=X.map((Y,ae)=>`${U+ae*A},${P(ee(Y))}`).join(" "),oe=Math.max(Math.ceil(X.length/6),1),O=`dashboardTrendFill-${H.key}`;return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:X.length})})]}),t.jsx("div",{className:"chart-metric-tabs",role:"tablist","aria-label":o("dashboard.chartMetrics"),children:g.map(Y=>t.jsx("button",{type:"button",className:d===Y.key?"active":"",onClick:()=>{p(Y.key),m(null)},children:Y.label},Y.key))}),X.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):null,t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${z} ${B}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:O,x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:H.color,stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:H.color,stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map(Y=>t.jsx("line",{className:"chart-grid",x1:U,x2:z-U,y1:U+Y*(B-U*2),y2:U+Y*(B-U*2)},Y)),X.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",style:{fill:`url(#${O})`},points:`${U},${B-U} ${se} ${z-U},${B-U}`}),t.jsx("polyline",{className:"chart-line",points:se,style:{stroke:H.color}}),X.map((Y,ae)=>{const fe=U+ae*A,w=P(ee(Y));return t.jsxs("g",{children:[t.jsx("circle",{cx:fe,cy:w,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{m(Y),j(fe),v(w)},onMouseLeave:()=>{m(null)}}),t.jsx("circle",{cx:fe,cy:w,r:(h==null?void 0:h.date)===Y.date?6:4,fill:H.color,stroke:"var(--surface)",strokeWidth:(h==null?void 0:h.date)===Y.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},Y.date)})]}):null]}),h?t.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${y/z*100}%`,top:`${b/B*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",h.date]}),t.jsxs("div",{className:"tooltip-value",children:[H.label,": ",H.format(ee(h))]})]}):null]}),t.jsx("div",{className:"chart-axis",children:X.filter((Y,ae)=>ae===0||ae===X.length-1||ae%oe===0).map(Y=>t.jsx("span",{children:Y.date},Y.date))}),X.length>0?t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:H.summaryLabel}),t.jsx("strong",{children:H.format(Z)})]}):null]})}function _o({title:s,subtitle:i,records:o,labelKey:d}){const{t:p}=qe(),h=Math.max(...o.map(m=>Number(m.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:i})]})}),t.jsx("div",{className:"rank-list",children:o.length===0?t.jsx("div",{className:"empty-state",children:p("dashboard.noTraffic")}):o.slice(0,8).map((m,y)=>{const j=d==="server_name"?m.server_name||p("dashboard.unnamedNode"):m.email||p("dashboard.unknownUser"),b=Number(m.total||0)/h*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:y+1}),t.jsx("strong",{children:j}),t.jsxs("small",{children:[p0(m.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(b,3)}%`}})})]},`${j}-${y}`)})})]})}function od({label:s,current:i,previous:o}){const{t:d}=qe();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof i=="number"?Xa(i):i}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?Xa(o):o]})]})}function j0(){var b,v,g,H,X,ee,Z,z,B,U,A,P;const s=Ct(),{t:i}=qe(),[o,d]=f.useState(null),[p,h]=f.useState(""),[m,y]=f.useState(!0),j=f.useCallback(async()=>{y(!0),h("");try{d(await Zv())}catch(se){h(se instanceof Error?se.message:i("dashboard.loadFailed"))}finally{y(!1)}},[i]);return f.useEffect(()=>{if(!zt()){s.replace("/login");return}j()},[j,s]),t.jsxs(Bt,{title:i("dashboard.title"),subtitle:i("dashboard.subtitle"),children:[p?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:p}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:j,children:[t.jsx(Nt,{size:16}),i("common.retry")]})]}):null,m&&!o?t.jsx(ht,{label:i("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((b=o.override)==null?void 0:b.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:i("dashboard.pendingTickets",{count:(v=o.override)==null?void 0:v.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:i("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("dashboard.today")}),t.jsx("p",{children:i("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:j,disabled:m,children:[t.jsx(Nt,{size:16}),i(m?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(No,{label:i("dashboard.onlineUsers"),value:Xa(((g=o.override)==null?void 0:g.online_user)??0),helper:i("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(No,{label:i("dashboard.todayIncome"),value:`${Na(((H=o.override)==null?void 0:H.day_paid_income)??((X=o.override)==null?void 0:X.day_income)??0)} VND`,helper:i("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(No,{label:i("dashboard.todayRegistrations"),value:Xa(((ee=o.override)==null?void 0:ee.day_register_total)??0),helper:i("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(No,{label:i("dashboard.pendingCommission"),value:Xa(((Z=o.override)==null?void 0:Z.commission_pending_total)??0),helper:i("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(od,{label:i("dashboard.monthIncome"),current:`${Na(((z=o.override)==null?void 0:z.month_income)??0)} VND`,previous:`${Na(((B=o.override)==null?void 0:B.last_month_income)??0)} VND`}),t.jsx(od,{label:i("dashboard.monthCommission"),current:`${Na(((U=o.override)==null?void 0:U.commission_month_payout)??0)} VND`,previous:`${Na(((A=o.override)==null?void 0:A.commission_last_month_payout)??0)} VND`}),t.jsx(od,{label:i("dashboard.monthRegistrations"),current:((P=o.override)==null?void 0:P.month_register_total)??0,previous:"-"})]}),t.jsx(v0,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(_o,{title:i("dashboard.serverRankToday"),subtitle:i("dashboard.trafficGb"),records:o.serverToday,labelKey:"server_name"}),t.jsx(_o,{title:i("dashboard.serverRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.serverYesterday,labelKey:"server_name"}),t.jsx(_o,{title:i("dashboard.userRankToday"),subtitle:i("dashboard.trafficGb"),records:o.userToday,labelKey:"email"}),t.jsx(_o,{title:i("dashboard.userRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.userYesterday,labelKey:"email"})]})]}):null]})}const w0=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function yh(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function N0(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function rd(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function _0(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function S0(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function pa(s){return s===!0||s===1||s==="1"}function k0(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function cd(s){return s.split(",").map(i=>i.trim()).filter(Boolean)}function C0({field:s,value:i,onChange:o}){const{t:d}=qe(),p=s.toInput?s.toInput(i):k0(i);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${pa(i)?"on":""}`,type:"button",onClick:()=>o(pa(i)?0:1),"aria-pressed":pa(i),children:[t.jsx("span",{}),pa(i)?yh(d)[0].label:yh(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:p,onChange:h=>o(h.target.value),children:(s.options??[]).map(h=>t.jsx("option",{value:h.value,children:h.label},String(h.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:h=>o(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,rows:4,value:p}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:h=>o(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,type:s.type,value:p}):null]})]})}function z0({plans:s,emailTemplates:i,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(p=>({label:p.name,value:p.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:p=>Number(p.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:p=>pa(p.email_whitelist_enable),fromInput:cd},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:p=>pa(p.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:p=>pa(p.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:p=>pa(p.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:p=>pa(p.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:p=>pa(p.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:p=>pa(p.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:N0(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:rd(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:rd(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:rd(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:_0(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:p=>Number(p.show_subscribe_method||0)===2}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:cd}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:S0(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:cd},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:p=>pa(p.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:p=>pa(p.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:p=>pa(p.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:i.map(p=>({label:p,value:p}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function T0(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState("site"),[p,h]=f.useState(null),[m,y]=f.useState([]),[j,b]=f.useState([]),[v,g]=f.useState(!0),[H,X]=f.useState(null),[ee,Z]=f.useState(""),z=f.useCallback(async()=>{g(!0),Z("");try{const[Y,ae,fe]=await Promise.all([rx(),Jv(),Kv()]);h(Y),y(ae),b(fe)}catch(Y){Z(Y instanceof Error?Y.message:i("config.loadFailed"))}finally{g(!1)}},[i]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}z()},[z,s]),f.useEffect(()=>{const Y=document.querySelector(".config-tabs button.active");Y&&Y.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const B=f.useMemo(()=>z0({plans:m,emailTemplates:j,t:i}),[m,j,i]),U=B.find(Y=>Y.key===o)??B[0],A=(p==null?void 0:p[U.key])??{};function P(Y,ae,fe){h(w=>w&&{...w,[Y]:{...w[Y],[ae]:fe}})}async function se(){var Y;if(p){X(U.key),Z("");try{await cx(p[U.key]),(Y=window.showToast)==null||Y.call(window,i("config.saveSuccess"),"success")}catch(ae){Z(ae instanceof Error?ae.message:i("config.saveFailed"))}finally{X(null)}}}async function oe(){var Y;X("mail"),Z("");try{await Fv(),(Y=window.showToast)==null||Y.call(window,i("config.email.testSuccess"),"success")}catch(ae){Z(ae instanceof Error?ae.message:i("config.email.testFailed"))}finally{X(null)}}async function O(){var ae;const Y=String((p==null?void 0:p.telegram.telegram_bot_token)??"");X("webhook"),Z("");try{await Wv(Y),(ae=window.showToast)==null||ae.call(window,i("config.telegram.webhookSuccess"),"success")}catch(fe){Z(fe instanceof Error?fe.message:i("config.telegram.webhookFailed"))}finally{X(null)}}return t.jsxs(Bt,{title:i("config.title"),subtitle:i("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("config.systemConfig")}),t.jsx("p",{children:i("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:z,disabled:v,children:[t.jsx(Nt,{size:16}),i(v?"common.refreshing":"common.refresh")]})]}),ee?t.jsx("div",{className:"form-error",children:ee}):null,v&&!p?t.jsx(ht,{label:i("config.loading")}):null,p?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":i("config.tabsLabel"),children:w0.map(Y=>{const ae=B.find(fe=>fe.key===Y);return ae?t.jsxs("button",{className:o===Y?"active":"",type:"button",onClick:()=>d(Y),children:[t.jsx("span",{children:ae.label}),t.jsx("small",{children:ae.hint})]},Y):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:U.label}),t.jsx("p",{children:U.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:H===U.key,type:"button",onClick:se,children:[t.jsx(Sa,{size:16}),H===U.key?i("config.saving"):i("config.saveTab")]})]}),U.warning?t.jsx("div",{className:"config-warning",children:U.warning}):null,t.jsx("div",{className:"config-fields",children:U.fields.map(Y=>Y.visible&&!Y.visible(A)?null:t.jsx(C0,{field:Y,value:A[Y.key],onChange:ae=>P(U.key,Y.key,ae)},Y.key))}),U.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:H==="mail",onClick:oe,children:[t.jsx(lx,{size:16}),i(H==="mail"?"config.email.testing":"config.email.test")]})}):null,U.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:H==="webhook",onClick:O,children:[t.jsx(Hv,{size:16}),i(H==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(ix,{size:14}),i("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function Zn(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const i=document.createElement("textarea");i.value=s,i.setAttribute("readonly",""),i.style.position="fixed",i.style.left="-9999px",i.style.top="0",document.body.appendChild(i),i.select(),i.setSelectionRange(0,i.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(i)}}function dd(s){return s===!0||s===1||s==="1"}function E0(s,i=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??i,config:{...(s==null?void 0:s.config)??{}}}}function M0(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function D0(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,y]=f.useState(null),[j,b]=f.useState({}),[v,g]=f.useState(!0),[H,X]=f.useState(!1),[ee,Z]=f.useState(!1),[z,B]=f.useState(""),[U,A]=f.useState(""),[P,se]=f.useState({}),oe=f.useCallback(async()=>{g(!0),B("");try{const[T,te]=await Promise.all([Pv(),Iv()]);d(T),h(te),se({})}catch(T){B(T instanceof Error?T.message:i("payment.loadFailed"))}finally{g(!1)}},[i]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}oe()},[oe,s]);async function O(T){const te=(T==null?void 0:T.payment)??p[0]??"",S=E0(T,te);if(y(S),b({}),B(""),A(""),!!te){X(!0);try{b(await dh(te,T==null?void 0:T.id))}catch($){B($ instanceof Error?$.message:i("payment.formLoadFailed"))}finally{X(!1)}}}async function Y(T){if(m){y({...m,payment:T,config:{}}),X(!0),B("");try{b(await dh(T,m.id))}catch(te){B(te instanceof Error?te.message:i("payment.formLoadFailed"))}finally{X(!1)}}}async function ae(T){var te,S;if(T.preventDefault(),!!m){Z(!0),B(""),A("");try{await e1(M0(m)),y(null),(te=window.showToast)==null||te.call(window,i("payment.saveSuccess"),"success"),await oe()}catch($){(S=window.showToast)==null||S.call(window,$ instanceof Error?$.message:i("payment.saveFailed"),"error")}finally{Z(!1)}}}async function fe(T){var te;B(""),A("");try{await t1(T),await oe()}catch(S){(te=window.showToast)==null||te.call(window,S instanceof Error?S.message:i("payment.toggleFailed"),"error")}}async function w(T){var te;(te=window.showConfirm)==null||te.call(window,{message:i("payment.deleteConfirm"),onConfirm:async()=>{var S,$;B(""),A("");try{await a1(T),(S=window.showToast)==null||S.call(window,i("payment.deleteSuccess"),"success"),await oe()}catch(E){($=window.showToast)==null||$.call(window,E instanceof Error?E.message:i("payment.deleteFailed"),"error")}}})}async function R(T,te){var ce;const S=T+te;if(S<0||S>=o.length)return;const $=[...o],E=$[T];$.splice(T,1),$.splice(S,0,E),d($);try{await n1($.map(K=>K.id)),await oe()}catch(K){(ce=window.showToast)==null||ce.call(window,K instanceof Error?K.message:i("payment.sortFailed"),"error"),await oe()}}async function C(T){var S;const te=await Zn(T);(S=window.showToast)==null||S.call(window,i(te?"payment.copied":"common.copyFailed"),te?"success":"error")}return t.jsxs(Bt,{title:i("payment.title"),subtitle:i("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("payment.methods")}),t.jsx("p",{children:i("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:oe,disabled:v,children:[t.jsx(Nt,{size:16}),t.jsx("span",{children:i(v?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void O(),children:[t.jsx(_a,{size:16}),t.jsx("span",{children:i("payment.add")})]})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,U?t.jsx("div",{className:"form-success",children:U}):null,v&&o.length===0?t.jsx(ht,{label:i("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("payment.id")}),t.jsx("th",{children:i("payment.enabled")}),t.jsx("th",{children:i("payment.displayName")}),t.jsx("th",{children:i("payment.interface")}),t.jsx("th",{children:i("payment.notifyUrl")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((T,te)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:T.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void R(te,-1),disabled:te===0,"aria-label":i("payment.moveUp"),children:t.jsx(eh,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void R(te,1),disabled:te===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(If,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${dd(T.enable)?"active":""}`,type:"button",onClick:()=>void fe(T.id),"aria-label":dd(T.enable)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:T.name}),T.icon?t.jsx("small",{children:T.icon}):null]}),t.jsx("td",{children:T.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void C(T.notify_url),children:[t.jsx("span",{children:T.notify_url}),t.jsx(ns,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void O(T),children:[t.jsx(At,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void w(T.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},T.id)),!v&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map((T,te)=>{const S=dd(T.enable),$=T.handling_fee_percent!==null&&T.handling_fee_percent!==""?`${T.handling_fee_percent}%`:"",E=T.handling_fee_fixed!==null?`${Na(T.handling_fee_fixed)} VND`:"",ce=[$,E].filter(Boolean).join(" + ")||"No fees",K=P[T.id],_=T.icon&&!K;return t.jsxs("div",{className:`payment-mobile-card ${S?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",T.id]}),t.jsx("span",{className:"gateway-tag",children:T.payment})]}),t.jsx("button",{className:`admin-switch ${S?"active":""}`,type:"button",onClick:()=>void fe(T.id),"aria-label":i(S?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[_?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:T.icon,alt:T.name,onError:()=>{se(F=>({...F,[T.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:T.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:T.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:ce})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:i("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void C(T.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:T.notify_url}),t.jsx(ns,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void R(te,-1),disabled:te===0,"aria-label":i("payment.moveUp"),children:t.jsx(eh,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void R(te,1),disabled:te===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(If,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void O(T),children:[t.jsx(At,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void w(T.id),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]})]},T.id)}),!v&&o.length===0?t.jsx("div",{className:"empty-state",children:i("payment.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("payment.edit"):i("payment.add")}),t.jsx("p",{children:i("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>y(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ae,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:T=>y({...m,name:T.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:m.icon,onChange:T=>y({...m,icon:T.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:m.notify_domain,onChange:T=>y({...m,notify_domain:T.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:m.handling_fee_percent,onChange:T=>y({...m,handling_fee_percent:T.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:m.handling_fee_fixed,onChange:T=>y({...m,handling_fee_fixed:T.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.interface")}),t.jsx("select",{className:"config-input",value:m.payment,onChange:T=>void Y(T.target.value),children:p.map(T=>t.jsx("option",{value:T,children:T},T))})]}),H?t.jsx(ht,{label:i("payment.formLoading")}):null,H?null:Object.entries(j).map(([T,te])=>t.jsxs("label",{children:[t.jsx("span",{children:te.label}),t.jsx("input",{className:"config-input",placeholder:te.description,value:String(m.config[T]??te.value??""),onChange:S=>y({...m,config:{...m.config,[T]:S.target.value}})})]},T)),m.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>y(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:ee,children:[t.jsx(Sa,{size:16}),i(ee?"payment.saving":"common.save")]})]})]})]})}):null]})}function O0(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function A0(s,i){return i[s.field_name]??s.default_value??""}function U0(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState(null),[p,h]=f.useState(null),[m,y]=f.useState(!0),[j,b]=f.useState(!1),[v,g]=f.useState(!1),[H,X]=f.useState(null),[ee,Z]=f.useState(""),[z,B]=f.useState(""),U=f.useCallback(async()=>{y(!0),Z("");try{d(await l1())}catch(O){Z(O instanceof Error?O.message:i("theme.loadFailed"))}finally{y(!1)}},[i]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}U()},[U,s]);async function A(O,Y){h(null),b(!0),Z(""),B("");try{const ae=await i1(O);h({key:O,theme:Y,values:ae})}catch(ae){Z(ae instanceof Error?ae.message:i("theme.configLoadFailed"))}finally{b(!1)}}async function P(O){X(O),Z(""),B("");try{await cx({frontend_theme:O}),B(i("theme.activateSuccess")),await U()}catch(Y){Z(Y instanceof Error?Y.message:i("theme.activateFailed"))}finally{X(null)}}async function se(O){if(O.preventDefault(),!!p){g(!0),Z(""),B("");try{await s1(p.key,p.values),h(null),B(i("theme.saveSuccess")),await U()}catch(Y){Z(Y instanceof Error?Y.message:i("theme.saveFailed"))}finally{g(!1)}}}function oe(O,Y){h(ae=>ae&&{...ae,values:{...ae.values,[O]:Y}})}return t.jsxs(Bt,{title:i("theme.title"),subtitle:i("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.available")}),t.jsx("p",{children:i("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:U,disabled:m,children:[t.jsx(Nt,{size:16}),i(m?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:i("theme.warning")}),ee?t.jsx("div",{className:"form-error",children:ee}):null,z?t.jsx("div",{className:"form-success",children:z}):null,m&&!o?t.jsx(ht,{label:i("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([O,Y])=>{const ae=o.active===O;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${O0(Y)})`},children:ae?t.jsxs("span",{className:"theme-active",children:[t.jsx(nx,{size:15}),i("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:Y.name||O}),t.jsx("p",{children:Y.description||i("theme.noDescription")})]}),t.jsxs("small",{children:[i("theme.version"),": ",Y.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void A(O,Y),children:[t.jsx(zv,{size:15}),i("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ae||H===O,type:"button",onClick:()=>void P(O),children:[t.jsx(Sv,{size:15}),i(ae?"theme.current":H===O?"theme.activating":"theme.activate")]})]})]},O)})}):null,j?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(ht,{label:i("theme.configLoading")})})}):null,p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.configure",{name:p.theme.name||p.key})}),t.jsx("p",{children:p.theme.description||i("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:se,children:[(p.theme.configs??[]).map(O=>{const Y=A0(O,p.values);return t.jsxs("label",{children:[t.jsx("span",{children:O.label}),O.description?t.jsx("p",{className:"field-description",children:O.description}):null,O.field_type==="select"?t.jsx("select",{className:"config-input",value:Y,onChange:ae=>oe(O.field_name,ae.target.value),children:Object.entries(O.select_options??{}).map(([ae,fe])=>t.jsx("option",{value:ae,children:fe},ae))}):null,O.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:O.placeholder,rows:5,value:Y,onChange:ae=>oe(O.field_name,ae.target.value)}):null,O.field_type!=="select"&&O.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:O.placeholder,value:Y,onChange:ae=>oe(O.field_name,ae.target.value)}):null]},O.field_name)}),(p.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:i("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Sa,{size:16}),i(v?"theme.saving":"common.save")]})]})]})]})}):null]})}const vh=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"v2node",label:"V2Node"}],R0=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],H0=["tcp","ws","grpc","http","httpupgrade","xhttp"],L0=["tcp","ws","grpc","http","httpupgrade","xhttp"],q0=["tcp","ws","grpc"],_x=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],B0=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],Bd="https://hwid.zicnet.vn",G0="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function Y0(s,i,o=""){return s[i]??o}function Pe(s,i,o=""){return String(Y0(s,i,o))}function Yo(s,i){const o=s[i];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function Ii(s){return s==="v2node"||s==="zicnode"}function Sx(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function $0(s){return Sx(s).replace(/\/+$/,"")||Bd}function V0(s){return`'${s.replace(/'/g,"'\\''")}'`}function Q0(s,i){const o=i.apiHost||Bd,d=i.apiKey||"TOKEN_MOI";return`wget -N ${G0} && \\
bash install.sh --api-host ${o} --node-id ${s} --api-key ${V0(d)}`}function jh(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function wh(s,i){if(i){const d=JSON.parse(JSON.stringify(i));return d.group_id=jh(d.group_id),d.route_id=jh(d.route_id),{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",insecure:0};case"tuic":return{...o,server_name:"",insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",insecure:0,padding_scheme:""};case"v2node":return{...o,protocol:"vless",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:""};default:return o}}function X0({initialValue:s,onCancel:i,onSave:o}){const{t:d}=qe(),[p,h]=f.useState(()=>JSON.stringify(s??{},null,2)),[m,y]=f.useState(""),j=v=>{if(v.preventDefault(),!p.trim()){o({});return}try{const g=JSON.parse(p);if(typeof g!="object"||g===null)throw new Error("Must be a JSON object {} or array []");o(g)}catch(g){y(g instanceof Error?g.message:"Invalid JSON")}},b=v=>{if(h(v),!v.trim()){y("");return}try{const g=JSON.parse(v);if(typeof g!="object"||g===null)throw new Error("Must be a JSON object {} or array []");y("")}catch(g){y(g instanceof Error?g.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:j,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),m&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",m]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:m?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:p,onChange:v=>b(v.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:i,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!m,children:d("common.confirm")})]})]})}function Te({label:s,required:i,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,i&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:p=>{p.preventDefault(),d()},children:o})]})}function Z0({value:s,onChange:i,label:o}){const{t:d}=qe(),[p,h]=f.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Te,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((m,y)=>t.jsxs("span",{className:"tag",onClick:()=>i(s.filter((j,b)=>b!==y)),style:{cursor:"pointer"},children:[m," ×"]},y)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:p,placeholder:d("node.tagPlaceholder"),onChange:m=>h(m.target.value),onKeyDown:m=>{m.key==="Enter"&&p.trim()&&(m.preventDefault(),i([...s,p.trim()]),h(""))}})]})]})}function Nh({options:s,value:i,onChange:o,label:d,actionText:p,onAction:h}){const{t:m}=qe(),[y,j]=f.useState(""),b=s.filter(g=>i.includes(g.id)),v=s.filter(g=>g.name.toLowerCase().includes(y.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Te,{label:d,actionText:p,onAction:h}),b.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:b.map(g=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(i.filter(H=>H!==g.id)),children:[g.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},g.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${m("common.search")}...`,value:y,onChange:g=>j(g.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[v.map(g=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:i.includes(g.id),onChange:H=>o(H.target.checked?[...i,g.id]:i.filter(X=>X!==g.id))}),t.jsx("span",{children:g.name})]},g.id)),v.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?m("node.noGroupsAvailable"):m("node.noResultsFound")})]})]})}function fn({label:s,checked:i,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:i,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:i?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:i?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function K0({initialValue:s,isSnakeCase:i,onCancel:o,onSave:d}){const{t:p}=qe(),h=i?"server_name":"serverName",m=i?"allow_insecure":"allowInsecure",[y,j]=f.useState(String((s==null?void 0:s[h])??"")),[b,v]=f.useState(()=>{const H=s==null?void 0:s[m];return H===1||H===!0||String(H)==="1"||String(H)==="true"}),g=H=>{H.preventDefault(),d({[h]:y,[m]:i?b?1:0:b})};return t.jsxs("form",{onSubmit:g,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:p("node.serverName")}),t.jsx("input",{className:"config-input",value:y,onChange:H=>j(H.target.value),placeholder:p("node.serverNameHelp")})]}),t.jsx(fn,{label:p("node.allowInsecure"),checked:b,onChange:v}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:o,children:p("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:p("common.confirm")})]})]})}function J0({draft:s,set:i,groups:o,routes:d,nodes:p,onOpenJson:h,onAddGroup:m,onOpenTransportConfig:y}){const{t:j}=qe(),b=String(s._type),v=Pe(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:j("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Pe(s,"name"),onChange:g=>i("name",g.target.value),placeholder:j("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:Pe(s,"rate","1"),onChange:g=>i("rate",Number(g.target.value))})]})]}),t.jsx(Z0,{value:s.tags??[],onChange:g=>i("tags",g),label:j("node.tags")}),t.jsx(Nh,{options:o.map(g=>({id:g.id,name:g.name})),value:s.group_id??[],onChange:g=>i("group_id",g),label:j("node.permissionGroups"),actionText:j("node.addGroup"),onAction:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Pe(s,"host"),onChange:g=>i("host",g.target.value),placeholder:j("node.addressPlaceholder")})]}),["vmess","vless"].includes(b)||Ii(b)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.tls"),actionText:Number(s.tls)===2?void 0:j("node.editConfig"),onAction:()=>{const g=b==="vmess"?"tlsSettings":"tls_settings";h(j("node.tls"),g)}}),t.jsxs("select",{className:"config-input",value:Pe(s,"tls","0"),onChange:g=>{const H=Number(g.target.value);i("tls",H);const X=b==="vmess"?"tlsSettings":"tls_settings";H===1&&!s[X]&&i(X,{})},children:[t.jsx("option",{value:"0",children:j("node.none")}),t.jsx("option",{value:"1",children:j("node.useTls")}),b!=="vmess"&&t.jsx("option",{value:"2",children:j("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(b)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.sni")}),t.jsx("input",{className:"config-input",value:Pe(s,"server_name"),onChange:g=>i("server_name",g.target.value),placeholder:j("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Pe(s,"port"),onChange:g=>i("port",g.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Pe(s,"server_port"),onChange:g=>i("server_port",g.target.value),placeholder:"443"})]})]}),["vmess","trojan","vless"].includes(b)||Ii(b)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:j("node.transportProtocol"),required:!0,actionText:j("node.editConfig"),onAction:y}),t.jsxs("select",{className:"config-input",value:v,onChange:g=>{i("network",g.target.value);const H=b==="vmess"?"networkSettings":"network_settings";s[H]||i(H,{})},children:[b==="vmess"&&R0.map(g=>t.jsx("option",{value:g,children:g},g)),b==="trojan"&&q0.map(g=>t.jsx("option",{value:g,children:g},g)),b==="vless"&&H0.map(g=>t.jsx("option",{value:g,children:g},g)),Ii(b)&&L0.map(g=>t.jsx("option",{value:g,children:g},g))]})]}):null,b==="trojan"&&t.jsx(W0,{draft:s,set:i}),b==="shadowsocks"&&t.jsx(P0,{draft:s,set:i,onOpenJson:h}),b==="hysteria"&&t.jsx(I0,{draft:s,set:i}),b==="tuic"&&t.jsx(ej,{draft:s,set:i}),b==="vless"&&t.jsx(tj,{draft:s,set:i,onOpenJson:h}),b==="anytls"&&t.jsx(aj,{draft:s,set:i,onOpenJson:h}),Ii(b)&&t.jsx(nj,{draft:s,set:i,onOpenJson:h}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:g=>i("parent_id",g.target.value?Number(g.target.value):null),children:[t.jsx("option",{value:"",children:j("node.none")}),p.filter(g=>g.id!==s.id&&!g.parent_id).map(g=>t.jsx("option",{value:g.id,children:g.name},g.id))]})]}),t.jsx(Nh,{options:d.map(g=>({id:g.id,name:g.remarks})),value:s.route_id??[],onChange:g=>i("route_id",g),label:j("node.routingGroups")})]})]})}function F0({draft:s,set:i,onCancel:o,onSave:d}){const{t:p}=qe(),h=String(s._type),m=String(s.network??"tcp"),y=h==="vmess",j=y?"networkSettings":"network_settings",b=Yo(s,j),v=String(b.path??""),g=String(y?b.headers&&typeof b.headers=="object"?b.headers.Host??"":"":b.host??""),H=String(b.serviceName??""),X=z=>{z.preventDefault(),d()},ee=["ws","http","httpupgrade","xhttp"].includes(m),Z=m==="grpc";return t.jsxs("form",{onSubmit:X,style:{display:"flex",flexDirection:"column",gap:16},children:[ee&&t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:p("node.path")}),t.jsx("input",{className:"config-input",value:v,onChange:z=>{const B={...b,path:z.target.value};i(j,B)},placeholder:"/"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:p("node.host")}),t.jsx("input",{className:"config-input",value:g,onChange:z=>{if(y){const B=b.headers&&typeof b.headers=="object"?{...b.headers}:{};B.Host=z.target.value,i(j,{...b,headers:B})}else i(j,{...b,host:z.target.value})},placeholder:p("node.hostPlaceholder")})]})]}),Z&&t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:p("node.serviceName")}),t.jsx("input",{className:"config-input",value:H,onChange:z=>{i(j,{...b,serviceName:z.target.value})},placeholder:p("node.serviceNamePlaceholder")})]}),!ee&&!Z&&t.jsx("div",{style:{color:"var(--muted)",fontSize:13,padding:"8px 0"},children:p("node.transportNoConfig",{network:m.toUpperCase()})}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:o,children:p("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:p("common.confirm")})]})]})}function W0({draft:s,set:i}){const{t:o}=qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(fn,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>i("allow_insecure",d?1:0)})]})}function P0({draft:s,set:i,onOpenJson:o}){const{t:d}=qe(),p=Yo(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Pe(s,"cipher","aes-128-gcm"),onChange:h=>i("cipher",h.target.value),children:_x.map(h=>t.jsx("option",{value:h,children:h},h))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Pe(s,"obfs"),onChange:h=>i("obfs",h.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(p.host??""),onChange:h=>i("obfs_settings",{...p,host:h.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(p.path??""),onChange:h=>i("obfs_settings",{...p,path:h.target.value}),placeholder:"/"})]})]})]})}function I0({draft:s,set:i}){const{t:o}=qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Pe(s,"version","2"),onChange:d=>i("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Pe(s,"up_mbps","0"),onChange:d=>i("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Pe(s,"down_mbps","0"),onChange:d=>i("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Pe(s,"obfs"),onChange:d=>i("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Pe(s,"obfs_password"),onChange:d=>i("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(fn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)})]})}function ej({draft:s,set:i}){const{t:o}=qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Pe(s,"udp_relay_mode","native"),onChange:d=>i("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Pe(s,"congestion_control","bbr"),onChange:d=>i("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(fn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)}),t.jsx(fn,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>i("disable_sni",d?1:0)}),t.jsx(fn,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>i("zero_rtt_handshake",d?1:0)})]})}function tj({draft:s,set:i,onOpenJson:o}){const{t:d}=qe(),p=Number(s.tls??0),h=Yo(s,"tls_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Pe(s,"flow"),onChange:m=>i("flow",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Pe(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Pe(s,"encryption"),onChange:m=>i("encryption",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]}),p===2&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.realityConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.sni")}),t.jsx("input",{className:"config-input",value:String(h.server_name??""),onChange:m=>i("tls_settings",{...h,server_name:m.target.value})})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.servicePort")}),t.jsx("input",{className:"config-input",value:String(h.server_port??"443"),onChange:m=>i("tls_settings",{...h,server_port:m.target.value})})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.publicKey")}),t.jsx("input",{className:"config-input",value:String(h.public_key??""),onChange:m=>i("tls_settings",{...h,public_key:m.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.privateKey")}),t.jsx("input",{className:"config-input",value:String(h.private_key??""),onChange:m=>i("tls_settings",{...h,private_key:m.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.shortId")}),t.jsx("input",{className:"config-input",value:String(h.short_id??""),onChange:m=>i("tls_settings",{...h,short_id:m.target.value}),placeholder:d("node.autoGenHelp")})]})]})]})}function aj({draft:s,set:i,onOpenJson:o}){const{t:d}=qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(fn,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:p=>i("insecure",p?1:0)})]})}function nj({draft:s,set:i,onOpenJson:o}){const{t:d}=qe(),p=Pe(s,"protocol","vless"),h=Number(s.tls??0),m=Yo(s,"tls_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.v2nodeConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.nodeProtocol"),required:!0}),t.jsx("select",{className:"config-input",value:p,onChange:y=>i("protocol",y.target.value),children:B0.map(y=>t.jsx("option",{value:y,children:y},y))})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.listenIp")}),t.jsx("input",{className:"config-input",value:Pe(s,"listen_ip"),onChange:y=>i("listen_ip",y.target.value),placeholder:"0.0.0.0"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Pe(s,"flow"),onChange:y=>i("flow",y.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Pe(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Pe(s,"encryption"),onChange:y=>i("encryption",y.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]}),h===2&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.realityConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.sni")}),t.jsx("input",{className:"config-input",value:String(m.server_name??""),onChange:y=>i("tls_settings",{...m,server_name:y.target.value})})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.servicePort")}),t.jsx("input",{className:"config-input",value:String(m.server_port??"443"),onChange:y=>i("tls_settings",{...m,server_port:y.target.value})})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.publicKey")}),t.jsx("input",{className:"config-input",value:String(m.public_key??""),onChange:y=>i("tls_settings",{...m,public_key:y.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.privateKey")}),t.jsx("input",{className:"config-input",value:String(m.private_key??""),onChange:y=>i("tls_settings",{...m,private_key:y.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.shortId")}),t.jsx("input",{className:"config-input",value:String(m.short_id??""),onChange:y=>i("tls_settings",{...m,short_id:y.target.value}),placeholder:d("node.autoGenHelp")})]})]}),p==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Pe(s,"cipher","aes-128-gcm"),onChange:y=>i("cipher",y.target.value),children:_x.map(y=>t.jsx("option",{value:y,children:y},y))})]}),p==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Pe(s,"up_mbps","0"),onChange:y=>i("up_mbps",Number(y.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Pe(s,"down_mbps","0"),onChange:y=>i("down_mbps",Number(y.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Pe(s,"obfs"),onChange:y=>i("obfs",y.target.value||null)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Pe(s,"obfs_password"),onChange:y=>i("obfs_password",y.target.value)})]})]})]}),p==="tuic"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Pe(s,"udp_relay_mode","native"),onChange:y=>i("udp_relay_mode",y.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Pe(s,"congestion_control","bbr"),onChange:y=>i("congestion_control",y.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),p==="anytls"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(fn,{label:d("node.disableSni"),checked:s.disable_sni===1,onChange:y=>i("disable_sni",y?1:0)}),t.jsx(fn,{label:d("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:y=>i("zero_rtt_handshake",y?1:0)})]})}const _h={vmess:Ev,vless:qv,trojan:kd,shadowsocks:Uo,hysteria:Cv,tuic:pv,anytls:os,v2node:nh,zicnode:nh},lj={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},ij={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function Gn(s){return lj[s]??ij}function sj({draft:s,config:i,onCopy:o,t:d}){const p=Number(s.id??0),h=p>0?Q0(p,i):"",m=!i.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),p>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:h}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(h),children:[t.jsx(ns,{size:15}),d("node.copyInstallCommand")]}),m?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function oj(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,y]=f.useState([]),[j,b]=f.useState(null),[v,g]=f.useState(null),[H,X]=f.useState(!0),[ee,Z]=f.useState(!1),[z,B]=f.useState(""),[U,A]=f.useState(""),[P,se]=f.useState(1),[oe,O]=f.useState(10),[Y,ae]=f.useState(!1),[fe,w]=f.useState({}),[R,C]=f.useState({apiHost:Bd,apiKey:""}),[T,te]=f.useState(""),[S,$]=f.useState(null),[E,ce]=f.useState(null),[K,_]=f.useState(null),F=(q,re)=>{q.dataTransfer.effectAllowed="move",ce(re)},de=(q,re)=>{if(q.preventDefault(),E===null||E===re)return;const ie=[...o],He=ie[E];ie.splice(E,1),ie.splice(re,0,He),ce(re),d(ie)},ue=()=>{ce(null)},_e=(q,re)=>{Y&&_(re)},ke=q=>{if(!Y||K===null)return;q.cancelable&&q.preventDefault();const re=q.touches[0],ie=document.elementFromPoint(re.clientX,re.clientY);if(!ie)return;const He=ie.closest(".mobile-node-card");if(!He)return;const Qe=He.getAttribute("data-index");if(Qe===null)return;const Je=Number(Qe);if(Je!==K&&Je>=0&&Je<o.length){const st=[...o],Ye=st[K];st.splice(K,1),st.splice(Je,0,Ye),_(Je),d(st)}},Ae=()=>{_(null)};f.useEffect(()=>{se(1)},[T,oe]);const et=o.filter(q=>{const re=T.toLowerCase().trim();return re?q.name.toLowerCase().includes(re)||q.host.toLowerCase().includes(re)||String(q.id).includes(re)||q.type.toLowerCase().includes(re):!0}),Re=Math.ceil(et.length/oe),tt=et.slice((P-1)*oe,P*oe);function Wt(q,re){return re<=7?Array.from({length:re},(ie,He)=>He+1):q<=4?[1,2,3,4,5,"...",re]:q>=re-3?[1,"...",re-4,re-3,re-2,re-1,re]:[1,"...",q-1,q,q+1,"...",re]}const Ut=Wt(P,Re),aa=async()=>{var q,re;Z(!0),B(""),A("");try{const ie={};o.forEach((He,Qe)=>{ie[He.type]||(ie[He.type]={}),ie[He.type][String(He.id)]=Qe+1}),await i0(ie),(q=window.showToast)==null||q.call(window,i("node.saveSortSuccess"),"success"),ae(!1),await ve()}catch(ie){B(ie instanceof Error?ie.message:i("node.saveSortFailed")),(re=window.showToast)==null||re.call(window,ie instanceof Error?ie.message:i("node.saveSortFailed"),"error")}finally{Z(!1)}},xt=async()=>{ae(!1),await xe()},na=()=>et.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:P===1,onClick:()=>se(q=>Math.max(q-1,1)),children:"<"}),Ut.map((q,re)=>q==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${re}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${P===q?"active":""}`,onClick:()=>se(Number(q)),children:q},`page-${q}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:P===Re||Re===0,onClick:()=>se(q=>Math.min(q+1,Re)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsxs("select",{className:"pagination-size-select",value:oe,onChange:q=>O(Number(q.target.value)),children:[t.jsxs("option",{value:10,children:["10 / ",i("common.perPage")]}),t.jsxs("option",{value:20,children:["20 / ",i("common.perPage")]}),t.jsxs("option",{value:50,children:["50 / ",i("common.perPage")]}),t.jsxs("option",{value:100,children:["100 / ",i("common.perPage")]})]})})]}),[pt,Vt]=f.useState(null),[Qt,ea]=f.useState(!1),[Gt,Rt]=f.useState(""),[ma,M]=f.useState(!1),[ye,Oe]=f.useState(!1);async function je(q){var ie,He;q.preventDefault();const re=Gt.trim();if(!(!re||!j)){M(!0),B(""),A("");try{await dx({name:re});const Qe=await ss();h(Qe);const Je=Qe.filter(st=>st.name===re).sort((st,Ye)=>Ye.id-st.id)[0];if(Je){const st=j.group_id??[];st.includes(Je.id)||Ga("group_id",[...st,Je.id])}Rt(""),ea(!1),(ie=window.showToast)==null||ie.call(window,i("node.groupCreateSuccess"),"success")}catch(Qe){B(Qe instanceof Error?Qe.message:i("node.groupCreateFailed")),(He=window.showToast)==null||He.call(window,Qe instanceof Error?Qe.message:i("node.groupCreateFailed"),"error")}finally{M(!1)}}}const G=(q,re)=>{if(!j)return;let ie=j[re];if(typeof ie=="string"&&ie.trim())try{ie=JSON.parse(ie)}catch{}Vt({title:q,key:re,value:ie&&typeof ie=="object"?ie:{}})},xe=f.useCallback(async()=>{var q,re;X(!0),B("");try{const[ie,He,Qe,Je]=await Promise.all([fh(),ss(),px(),rx()]);d(ie.data),h(He),y(Qe),C({apiHost:$0((q=Je.server)==null?void 0:q.server_api_url),apiKey:Sx((re=Je.server)==null?void 0:re.server_token)})}catch(ie){B(ie instanceof Error?ie.message:i("knowledge.loadFailed"))}finally{X(!1)}},[]),ve=f.useCallback(async()=>{try{const q=await fh();d(q.data)}catch(q){console.error("Refresh nodes failed",q)}},[]);async function Ce(q){var ie;const re=await Zn(q);(ie=window.showToast)==null||ie.call(window,i(re?"node.installCopied":"common.copyFailed"),re?"success":"error")}f.useEffect(()=>{if(!zt()){s.replace("/login");return}xe()},[xe,s]);function Ze(q){b(wh(q)),g(null),B(""),A("")}function Ke(q){b(wh(q.type,q)),B(""),A("")}async function it(q){var Je,st;if(q.preventDefault(),!j)return;Z(!0),B(""),A("");const re=String(j._type),ie={...j};for(const Ye of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete ie[Ye];if(ie.padding_scheme!==void 0&&ie.padding_scheme!==null&&typeof ie.padding_scheme!="string"&&(ie.padding_scheme=JSON.stringify(ie.padding_scheme)),ie.padding_scheme)try{const Ye=JSON.parse(String(ie.padding_scheme));if(typeof Ye!="object"||Ye===null)throw new Error("Invalid JSON array or object")}catch(Ye){B("Invalid Padding Scheme configuration: "+(Ye instanceof Error?Ye.message:"JSON error")),Z(!1);return}const He=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const Ye of He)(ie[Ye]===""||ie[Ye]===null||ie[Ye]===void 0)&&delete ie[Ye];const Qe=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings"];for(const Ye of Qe){const la=ie[Ye];(la==null||typeof la=="object"&&Object.keys(la).length===0)&&delete ie[Ye]}ie.port!==void 0&&(ie.port=Number(ie.port)),ie.server_port!==void 0&&(ie.server_port=Number(ie.server_port)),ie.tls!==void 0&&(ie.tls=Number(ie.tls)),ie.rate!==void 0&&(ie.rate=Number(ie.rate));try{await t0(re,ie),b(null),(Je=window.showToast)==null||Je.call(window,i("node.saveSuccess"),"success"),await ve()}catch(Ye){B(Ye instanceof Error?Ye.message:i("node.saveFailed")),(st=window.showToast)==null||st.call(window,Ye instanceof Error?Ye.message:i("node.saveFailed"),"error")}finally{Z(!1)}}async function Ee(q){const re=[...o];d(ie=>ie.map(He=>He.id===q.id&&He.type===q.type?{...He,show:q.show?0:1}:He));try{await n0(q.type,q.id,q.show?0:1),await ve()}catch(ie){d(re),B(ie instanceof Error?ie.message:i("node.updateFailed"))}}async function bt(q){var re,ie;try{await l0(q.type,q.id),(re=window.showToast)==null||re.call(window,i("node.copySuccess"),"success"),await ve()}catch(He){B(He instanceof Error?He.message:i("node.copyFailed")),(ie=window.showToast)==null||ie.call(window,He instanceof Error?He.message:i("node.copyFailed"),"error")}}async function Ht(q){var re;(re=window.showConfirm)==null||re.call(window,{message:i("node.deleteConfirm",{name:q.name}),onConfirm:async()=>{var He,Qe;const ie=[...o];d(Je=>Je.filter(st=>!(st.id===q.id&&st.type===q.type))),B("");try{await a0(q.type,q.id),(He=window.showToast)==null||He.call(window,i("node.deleteSuccess"),"success"),await ve()}catch(Je){d(ie),B(Je instanceof Error?Je.message:i("node.deleteFailed")),(Qe=window.showToast)==null||Qe.call(window,Je instanceof Error?Je.message:i("node.deleteFailed"),"error")}}})}const Ga=(q,re)=>b(ie=>ie?{...ie,[q]:re}:null),Za=j?String(j._type):"";return t.jsxs(Bt,{title:i("node.title"),subtitle:i("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>g(v?null:"show"),title:i("node.createNode"),children:t.jsx(_a,{size:18})}),v!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>g(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),vh.map(q=>{const re=Gn(q.value),ie=_h[q.value]||Ro;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ze(q.value),g(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:re==null?void 0:re.bg,backgroundColor:re==null?void 0:re.rowBg},children:t.jsx(ie,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(re==null?void 0:re.bg)??"var(--surface-soft)",color:(re==null?void 0:re.text)??"#ffffff"},children:q.label})]},q.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:T,onChange:q=>te(q.target.value),placeholder:`${i("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${Y?"success-btn":""}`,type:"button",onClick:Y?aa:()=>ae(!0),disabled:ee,children:i(Y?ee?"node.saving":"node.saveOrder":"node.editSortOrder")}),Y&&t.jsx("button",{className:"ghost-button",type:"button",onClick:xt,children:i("common.cancel")})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,U?t.jsx("div",{className:"form-success",children:U}):null,H&&o.length===0?t.jsx(ht,{label:i("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[i("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",i("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",i("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",i("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:i("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:i("node.address")}),t.jsx("th",{className:"mobile-hide",children:i("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:i("node.colRate")}),t.jsx("th",{children:i("node.colGroups")}),t.jsx("th",{children:i(Y?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[tt.map(q=>{const re=o.findIndex(ie=>ie.id===q.id&&ie.type===q.type);return t.jsxs("tr",{draggable:Y,onDragStart:ie=>F(ie,re),onDragOver:ie=>de(ie,re),onDragEnd:ue,className:E===re?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Gn(q.type).bg,color:Gn(q.type).text,border:`1px solid ${Gn(q.type).border}`},children:q.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${q.show?"active":""}`,type:"button",onClick:()=>void Ee(q),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${q.available_status??0}`,title:q.available_status===2?i("node.statusNormal"):q.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("strong",{children:q.name})]})}),t.jsx("td",{children:t.jsxs("span",{className:"online-badge",children:[t.jsx(zd,{size:13,style:{color:Number(q.online)>0?"#10b981":"var(--muted)",opacity:Number(q.online)>0?1:.6}}),Number(q.online??0)]})}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:q.host})}),t.jsx("td",{className:"mobile-hide",children:String(q.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[q.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const ie=q.group_id??[],He=fe[`${q.type}-${q.id}`],Qe=ie.map(Ye=>{const la=p.find(ut=>Number(ut.id)===Number(Ye));return t.jsx("span",{className:"tag",children:(la==null?void 0:la.name)??`#${Ye}`},Ye)});if(ie.length<=3||He)return t.jsxs(t.Fragment,{children:[Qe,ie.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>w(Ye=>({...Ye,[`${q.type}-${q.id}`]:!1})),children:i("node.collapse")})]});const Je=Qe.slice(0,3),st=ie.length-3;return t.jsxs(t.Fragment,{children:[Je,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>w(Ye=>({...Ye,[`${q.type}-${q.id}`]:!0})),children:["+",st,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:i("node.allPermissionGroups",{count:ie.length})}),Qe]})]})]})})()})}),t.jsx("td",{children:Y?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(es,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(S==null?void 0:S.id)===q.id&&(S==null?void 0:S.type)===q.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>$((S==null?void 0:S.id)===q.id&&(S==null?void 0:S.type)===q.type?null:{id:q.id,type:q.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(S==null?void 0:S.id)===q.id&&(S==null?void 0:S.type)===q.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>$(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ke(q),$(null)},children:[t.jsx(At,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{bt(q),$(null)},children:[t.jsx(ns,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Ht(q),$(null)},children:[t.jsx(qt,{size:14})," ",i("common.delete")]})]})]})]})})]},`${q.type}-${q.id}`)}),!H&&et.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")})})}):null]})]})}),na()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>g(v?null:"show"),title:i("node.createNode"),children:t.jsx(_a,{size:20})}),v!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>g(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),vh.map(q=>{const re=Gn(q.value),ie=_h[q.value]||Ro;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ze(q.value),g(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:re==null?void 0:re.bg,backgroundColor:re==null?void 0:re.rowBg},children:t.jsx(ie,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(re==null?void 0:re.bg)??"var(--surface-soft)",color:(re==null?void 0:re.text)??"#ffffff"},children:q.label})]},q.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:T,onChange:q=>te(q.target.value),placeholder:`${i("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${Y?"active":""}`,type:"button",onClick:()=>ae(!Y),title:i("node.editSortOrder"),children:t.jsx(es,{size:20})})]}),Y&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:i("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:xt,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void aa(),disabled:ee,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i(ee?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[tt.map(q=>{const re=o.findIndex(ie=>ie.id===q.id&&ie.type===q.type);return t.jsxs("div",{className:`mobile-node-card ${E===re||K===re?"dragging":""}`,draggable:Y,onDragStart:ie=>F(ie,re),onDragOver:ie=>de(ie,re),onDragEnd:ue,onTouchStart:ie=>_e(ie,re),onTouchMove:ke,onTouchEnd:Ae,"data-index":re,style:Y?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${q.available_status??0}`,title:q.available_status===2?i("node.statusNormal"):q.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:q.name})]}),t.jsx("div",{className:"card-header-right",children:Y?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(es,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${q.show===1?"active":""}`,onClick:()=>void Ee(q),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(S==null?void 0:S.id)===q.id&&(S==null?void 0:S.type)===q.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>$((S==null?void 0:S.id)===q.id&&(S==null?void 0:S.type)===q.type?null:{id:q.id,type:q.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(S==null?void 0:S.id)===q.id&&(S==null?void 0:S.type)===q.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>$(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ke(q),$(null)},children:[t.jsx(At,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{bt(q),$(null)},children:[t.jsx(ns,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Ht(q),$(null)},children:[t.jsx(qt,{size:14})," ",i("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[q.host,":",q.port||q.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Gn(q.type).bg,color:Gn(q.type).text,border:`1px solid ${Gn(q.type).border}`},children:q.id}),t.jsxs("span",{className:"mobile-badge-pill",children:[t.jsx(zd,{size:12,style:{marginRight:4,color:Number(q.online)>0?"#10b981":"var(--muted)",opacity:Number(q.online)>0?1:.6}}),Number(q.online??0)]}),t.jsxs("span",{className:"mobile-badge-pill",children:[q.rate," x"]})]})]},`${q.type}-${q.id}`)}),!H&&et.length===0&&t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")}),na()]}),j!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:j.id?i("node.editNodeTitle",{type:Za}):i("node.createNodeTitle",{type:Za})}),t.jsx("p",{children:i("node.configureFieldsSubtitle",{type:Za})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>b(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:it,children:[t.jsx(J0,{draft:j,set:Ga,groups:p,routes:m,nodes:o,onOpenJson:G,onAddGroup:()=>ea(!0),onOpenTransportConfig:()=>Oe(!0)}),Ii(Za)?t.jsx(sj,{draft:j,config:R,onCopy:q=>void Ce(q),t:i}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>b(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:ee,children:[t.jsx(Sa,{size:16}),i(ee?"node.saving":"common.save")]})]})]})]})}),pt!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:600,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:pt.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(pt.key)?i("node.tlsEditorSubtitle"):i("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Vt(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(pt.key)?t.jsx(K0,{initialValue:pt.value,isSnakeCase:pt.key==="tls_settings",onCancel:()=>Vt(null),onSave:q=>{Ga(pt.key,q),Vt(null)}}):t.jsx(X0,{initialValue:pt.value,onCancel:()=>Vt(null),onSave:q=>{Ga(pt.key,q),Vt(null)}})})]})}),Qt&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.addNewGroupTitle")}),t.jsx("p",{children:i("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ea(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{onSubmit:je,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:i("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:Gt,onChange:q=>Rt(q.target.value),placeholder:i("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ea(!1),disabled:ma,children:i("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ma||!Gt.trim(),children:i(ma?"node.saving":"common.confirm")})]})]})]})}),ye&&j!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:500,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.transportConfigTitle",{network:String(j.network??"tcp").toUpperCase()})}),t.jsx("p",{children:i("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Oe(!1),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(F0,{draft:j,set:Ga,onCancel:()=>Oe(!1),onSave:()=>Oe(!1)})})]})})]})}function rj(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,y]=f.useState(!0),[j,b]=f.useState(!1),[v,g]=f.useState(""),H=f.useCallback(async()=>{y(!0),g("");try{d(await ss())}catch(z){g(z instanceof Error?z.message:i("serverGroup.loadFailed"))}finally{y(!1)}},[i]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}H()},[H,s]);function X(z){h({id:z==null?void 0:z.id,name:(z==null?void 0:z.name)??""}),g("")}async function ee(z){var B;if(z.preventDefault(),!!p){b(!0),g("");try{await dx(p),h(null),(B=window.showToast)==null||B.call(window,i("serverGroup.saveSuccess"),"success"),await H()}catch(U){g(U instanceof Error?U.message:i("serverGroup.saveFailed"))}finally{b(!1)}}}async function Z(z){var B;(B=window.showConfirm)==null||B.call(window,{message:i("serverGroup.deleteConfirm"),onConfirm:async()=>{var U,A;g("");try{await o1(z),(U=window.showToast)==null||U.call(window,i("serverGroup.deleteSuccess"),"success"),await H()}catch(P){g(P instanceof Error?P.message:i("serverGroup.deleteFailed")),(A=window.showToast)==null||A.call(window,P instanceof Error?P.message:i("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(Bt,{title:i("serverGroup.title"),subtitle:i("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverGroup.heading")}),t.jsx("p",{children:i("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:H,disabled:m,children:[t.jsx(Nt,{size:16}),i(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>X(),children:[t.jsx(_a,{size:16}),i("serverGroup.add")]})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,m&&o.length===0?t.jsx(ht,{label:i("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverGroup.id")}),t.jsx("th",{children:i("serverGroup.name")}),t.jsx("th",{children:i("serverGroup.userCount")}),t.jsx("th",{children:i("serverGroup.serverCount")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(z=>t.jsxs("tr",{children:[t.jsx("td",{children:z.id}),t.jsx("td",{children:t.jsx("strong",{children:z.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(is,{size:14}),z.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Ro,{size:14}),z.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>X(z),children:[t.jsx(At,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Z(z.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},z.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:i("serverGroup.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?i("serverGroup.edit"):i("serverGroup.add")}),t.jsx("p",{children:i("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ee,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:p.name,onChange:z=>h({...p,name:z.target.value}),placeholder:i("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Sa,{size:16}),i(j?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function cj(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function dj(s){var i;return((i=ux.find(o=>o.value===s))==null?void 0:i.label)??s}function uj(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,y]=f.useState(!0),[j,b]=f.useState(!1),[v,g]=f.useState(""),H=f.useCallback(async()=>{y(!0),g("");try{d(await px())}catch(z){g(z instanceof Error?z.message:i("serverRoute.loadFailed"))}finally{y(!1)}},[i]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}H()},[H,s]);function X(z){h(cj(z)),g("")}async function ee(z){var U;if(z.preventDefault(),!p)return;b(!0),g("");const B=p.action==="default_out"?[]:p.match.split(`
`).map(A=>A.trim()).filter(Boolean);try{await r1({id:p.id,remarks:p.remarks,match:B,action:p.action,action_value:p.action_value||null}),h(null),(U=window.showToast)==null||U.call(window,i("serverRoute.saveSuccess"),"success"),await H()}catch(A){g(A instanceof Error?A.message:i("serverRoute.saveFailed"))}finally{b(!1)}}async function Z(z){var B;(B=window.showConfirm)==null||B.call(window,{message:i("serverRoute.deleteConfirm"),onConfirm:async()=>{var U,A;g("");try{await c1(z),(U=window.showToast)==null||U.call(window,i("serverRoute.deleteSuccess"),"success"),await H()}catch(P){g(P instanceof Error?P.message:i("serverRoute.deleteFailed")),(A=window.showToast)==null||A.call(window,P instanceof Error?P.message:i("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(Bt,{title:i("serverRoute.title"),subtitle:i("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverRoute.heading")}),t.jsx("p",{children:i("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:H,disabled:m,children:[t.jsx(Nt,{size:16}),i(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>X(),children:[t.jsx(_a,{size:16}),i("serverRoute.add")]})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,m&&o.length===0?t.jsx(ht,{label:i("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverRoute.id")}),t.jsx("th",{children:i("serverRoute.remarks")}),t.jsx("th",{children:i("serverRoute.matchValues")}),t.jsx("th",{children:i("serverRoute.action")}),t.jsx("th",{children:i("serverRoute.actionValue")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(z=>t.jsxs("tr",{children:[t.jsx("td",{children:z.id}),t.jsx("td",{children:t.jsx("strong",{children:z.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(z.match)?z.match:[]).slice(0,3).map((B,U)=>t.jsx("span",{className:"tag",children:B},U)),Array.isArray(z.match)&&z.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",z.match.length-3]}):null,!Array.isArray(z.match)||z.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:dj(z.action)})}),t.jsx("td",{children:z.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>X(z),children:[t.jsx(At,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Z(z.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},z.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("serverRoute.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?i("serverRoute.edit"):i("serverRoute.add")}),t.jsx("p",{children:i("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ee,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:p.remarks,onChange:z=>h({...p,remarks:z.target.value}),placeholder:i("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.action")}),t.jsx("select",{className:"config-input",value:p.action,onChange:z=>h({...p,action:z.target.value}),children:ux.map(z=>t.jsx("option",{value:z.value,children:z.label},z.value))})]}),p.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:p.match,onChange:z=>h({...p,match:z.target.value}),placeholder:i("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:p.action_value,onChange:z=>h({...p,action_value:z.target.value}),placeholder:i("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Sa,{size:16}),i(j?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function pj(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",force_update:!1}}function mj(s){const i=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:i(s.month_price),quarter_price:i(s.quarter_price),half_year_price:i(s.half_year_price),year_price:i(s.year_price),two_year_price:i(s.two_year_price),three_year_price:i(s.three_year_price),onetime_price:i(s.onetime_price),reset_price:i(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),force_update:s.force_update}}function It(s){return s==null?"—":Na(s)}function fj(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function hj(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,y]=f.useState(null),[j,b]=f.useState(!0),[v,g]=f.useState(!1),[H,X]=f.useState(""),[ee,Z]=f.useState(""),[z,B]=f.useState(null),[U,A]=f.useState(null),P=(E,ce)=>{E.dataTransfer.effectAllowed="move",B(ce)},se=(E,ce)=>{if(E.preventDefault(),z===null||z===ce)return;const K=[...o],_=K[z];K.splice(z,1),K.splice(ce,0,_),B(ce),d(K)},oe=async()=>{B(null);try{await ph(o.map(E=>E.id)),await fe()}catch(E){X(E instanceof Error?E.message:i("plan.sortFailed")),await fe()}},O=(E,ce)=>{A(ce)},Y=E=>{if(U===null)return;const ce=E.touches[0],K=document.elementFromPoint(ce.clientX,ce.clientY);if(!K)return;const _=K.closest("tr, [data-index]");if(!_)return;const F=_.getAttribute("data-index");if(F===null)return;const de=Number(F);if(de!==U&&de>=0&&de<o.length){const ue=[...o],_e=ue[U];ue.splice(U,1),ue.splice(de,0,_e),A(de),d(ue)}},ae=async()=>{if(U!==null){A(null);try{await ph(o.map(E=>E.id)),await fe()}catch(E){X(E instanceof Error?E.message:i("plan.sortFailed")),await fe()}}},fe=f.useCallback(async()=>{b(!0),X("");try{const[E,ce]=await Promise.all([xl(),ss()]);d(E),h(ce)}catch(E){X(E instanceof Error?E.message:i("plan.loadFailed"))}finally{b(!1)}},[i]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}fe()},[fe,s]);function w(E){y(pj(E)),X(""),Z("")}async function R(E){var ce,K;if(E.preventDefault(),!!m){g(!0),X(""),Z("");try{await d1(mj(m)),y(null),(ce=window.showToast)==null||ce.call(window,i("plan.saveSuccess"),"success"),await fe()}catch(_){(K=window.showToast)==null||K.call(window,_ instanceof Error?_.message:i("plan.saveFailed"),"error")}finally{g(!1)}}}async function C(E,ce){var K;try{await uh(E,{show:ce?0:1}),await fe()}catch(_){(K=window.showToast)==null||K.call(window,_ instanceof Error?_.message:i("plan.toggleFailed"),"error")}}async function T(E,ce){var K;try{await uh(E,{renew:ce?0:1}),await fe()}catch(_){(K=window.showToast)==null||K.call(window,_ instanceof Error?_.message:i("plan.toggleFailed"),"error")}}async function te(E){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:i("plan.deleteConfirm"),onConfirm:async()=>{var K,_;X(""),Z("");try{await u1(E),(K=window.showToast)==null||K.call(window,i("plan.deleteSuccess"),"success"),await fe()}catch(F){(_=window.showToast)==null||_.call(window,F instanceof Error?F.message:i("plan.deleteFailed"),"error")}}})}function S(E){var ce;return((ce=p.find(K=>K.id===E))==null?void 0:ce.name)??`#${E}`}function $(E,ce){y(K=>K&&{...K,[E]:ce})}return t.jsxs(Bt,{title:i("plan.title"),subtitle:i("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("plan.heading")}),t.jsx("p",{children:i("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:fe,disabled:j,children:[t.jsx(Nt,{size:16}),i(j?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(),children:[t.jsx(_a,{size:16}),i("plan.add")]})]})]}),H?t.jsx("div",{className:"form-error",children:H}):null,ee?t.jsx("div",{className:"form-success",children:ee}):null,j&&o.length===0?t.jsx(ht,{label:i("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:i("plan.show")}),t.jsx("th",{children:i("plan.renew")}),t.jsx("th",{children:i("plan.name")}),t.jsx("th",{children:i("plan.users")}),t.jsx("th",{children:i("plan.group")}),t.jsx("th",{children:i("plan.pricing")}),t.jsx("th",{children:i("plan.traffic")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((E,ce)=>t.jsxs("tr",{draggable:!0,onDragStart:K=>P(K,ce),onDragOver:K=>se(K,ce),onDragEnd:oe,onTouchStart:K=>O(K,ce),onTouchMove:Y,onTouchEnd:ae,"data-index":ce,className:z===ce||U===ce?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:i("plan.sort"),children:t.jsx(es,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:E.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${E.show?"active":""}`,type:"button",onClick:K=>{K.stopPropagation(),C(E.id,E.show)},title:E.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${E.renew?"active":""}`,type:"button",onClick:K=>{K.stopPropagation(),T(E.id,E.renew)},title:E.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:E.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(is,{size:14}),E.count??0]})}),t.jsx("td",{children:S(E.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[E.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:It(E.month_price)})]}),E.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:It(E.quarter_price)})]}),E.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:It(E.half_year_price)})]}),E.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:It(E.year_price)})]}),E.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:It(E.two_year_price)})]}),E.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:It(E.three_year_price)})]}),E.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:It(E.onetime_price)})]}),E.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:It(E.reset_price)})]})]})}),t.jsxs("td",{children:[E.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:K=>{K.stopPropagation(),w(E)},children:[t.jsx(At,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:K=>{K.stopPropagation(),te(E.id)},children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},E.id)),!j&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((E,ce)=>t.jsxs("div",{className:`mobile-node-card ${z===ce||U===ce?"dragging":""}`,draggable:!0,onDragStart:K=>P(K,ce),onDragOver:K=>se(K,ce),onDragEnd:oe,onTouchStart:K=>O(K,ce),onTouchMove:Y,onTouchEnd:ae,"data-index":ce,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:i("plan.sort"),children:t.jsx(es,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:E.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:E.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:K=>{K.stopPropagation(),w(E)},children:[t.jsx(At,{size:12}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:K=>{K.stopPropagation(),te(E.id)},children:[t.jsx(qt,{size:12}),i("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.show")}),t.jsx("button",{className:`admin-switch ${E.show?"active":""}`,type:"button",onClick:K=>{K.stopPropagation(),C(E.id,E.show)},title:E.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.renew")}),t.jsx("button",{className:`admin-switch ${E.renew?"active":""}`,type:"button",onClick:K=>{K.stopPropagation(),T(E.id,E.renew)},title:E.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(is,{size:12,style:{marginRight:4}}),E.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:S(E.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[E.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[E.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:It(E.month_price)})]}),E.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:It(E.quarter_price)})]}),E.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:It(E.half_year_price)})]}),E.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:It(E.year_price)})]}),E.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:It(E.two_year_price)})]}),E.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:It(E.three_year_price)})]}),E.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:It(E.onetime_price)})]}),E.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:It(E.reset_price)})]})]})]},E.id)),!j&&o.length===0?t.jsx("div",{className:"empty-state",children:i("plan.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("plan.edit"):i("plan.add")}),t.jsx("p",{children:i("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>y(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:R,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:E=>$("name",E.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:m.content,onChange:E=>$("content",E.target.value),placeholder:i("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:m.group_id,onChange:E=>$("group_id",E.target.value),children:[t.jsx("option",{value:"",children:i("plan.selectGroup")}),p.map(E=>t.jsx("option",{value:E.id,children:E.name},E.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:m.transfer_enable,onChange:E=>$("transfer_enable",E.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.device_limit,onChange:E=>$("device_limit",E.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.speed_limit,onChange:E=>$("speed_limit",E.target.value),placeholder:i("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.capacity_limit,onChange:E=>$("capacity_limit",E.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:m.reset_traffic_method,onChange:E=>$("reset_traffic_method",E.target.value),children:fj(i).map(E=>t.jsx("option",{value:E.value,children:E.label},E.value))})]})]}),t.jsx("h3",{className:"form-section-title",children:i("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.month_price,onChange:E=>$("month_price",E.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.quarter_price,onChange:E=>$("quarter_price",E.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.half_year_price,onChange:E=>$("half_year_price",E.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.year_price,onChange:E=>$("year_price",E.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.two_year_price,onChange:E=>$("two_year_price",E.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.three_year_price,onChange:E=>$("three_year_price",E.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.onetime_price,onChange:E=>$("onetime_price",E.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.reset_price,onChange:E=>$("reset_price",E.target.value),placeholder:"—"})]})]}),m.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.force_update,onChange:E=>$("force_update",String(E.target.checked))}),t.jsx("span",{children:i("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>y(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Sa,{size:16}),i(v?"plan.saving":"common.save")]})]})]})]})}):null]})}const ud="模糊",Sh={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},kh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Ch(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getDate()).padStart(2,"0"),h=String(i.getHours()).padStart(2,"0"),m=String(i.getMinutes()).padStart(2,"0");return`${o}/${d}/${p} ${h}:${m}`}function zh(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getDate()).padStart(2,"0"),h=String(i.getHours()).padStart(2,"0"),m=String(i.getMinutes()).padStart(2,"0"),y=String(i.getSeconds()).padStart(2,"0");return`${o}-${d}-${p} ${h}:${m}:${y}`}function Th(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Ra(s){return`${Na(Number(s??0))} ₫`}const kx="adminzic_user_cache";function xj(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(kx);return s?JSON.parse(s):{}}catch{return{}}}function gj(s){if(!(typeof window>"u"))try{sessionStorage.setItem(kx,JSON.stringify(s))}catch{}}const ti=(s,i)=>`${s}:${i}`;function bj(){var ma,M,ye,Oe,je;const s=Ct(),i=gn(),{t:o}=qe(),d=f.useCallback(G=>{switch(G){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${G}`,cls:""}}},[o]),p=f.useCallback(G=>{const xe=`order.period.${G}`,ve=o(xe);return ve===xe?kh[G]??G:ve},[o]),[h,m]=f.useState([]),[y,j]=f.useState([]),[b,v]=f.useState({}),[g,H]=f.useState(0),[X,ee]=f.useState(1),[Z]=f.useState(15),[z,B]=f.useState(""),[U,A]=f.useState("trade_no"),[P,se]=f.useState(!0),[oe,O]=f.useState(null),[Y,ae]=f.useState(!1),[fe,w]=f.useState(""),[R,C]=f.useState(""),[T,te]=f.useState(null),[S,$]=f.useState(null),[E,ce]=f.useState(!1),[K,_]=f.useState(null),[F,de]=f.useState(!1),[ue,_e]=f.useState(()=>xj()),ke=f.useCallback((G,xe)=>{const ve=ti(xe,G);$(null),te(Ce=>Ce===ve?null:ve)},[]),Ae=f.useCallback((G,xe)=>{const ve=ti(xe,G);te(null),$(Ce=>Ce===ve?null:ve)},[]),et=f.useCallback(G=>{const xe=Number(G.coupon_id??0);return xe?b[xe]??`#${xe}`:null},[b]);f.useEffect(()=>{if(!T&&!S)return;const G=()=>{te(null),$(null)},xe=Ce=>{const Ze=Ce.target;Ze!=null&&Ze.closest(".order-dropdown-trigger, .order-dropdown-menu")||G()},ve=Ce=>{Ce.key==="Escape"&&G()};return document.addEventListener("pointerdown",xe),document.addEventListener("keydown",ve),()=>{document.removeEventListener("pointerdown",xe),document.removeEventListener("keydown",ve)}},[T,S]),f.useEffect(()=>{const G=new Set;if(h.forEach(ve=>{ve.user_id&&!ue[ve.user_id]&&G.add(ve.user_id),ve.invite_user_id&&!ue[ve.invite_user_id]&&G.add(ve.invite_user_id)}),K&&(K.user_id&&!ue[K.user_id]&&G.add(K.user_id),K.invite_user_id&&!ue[K.invite_user_id]&&G.add(K.invite_user_id)),G.size===0)return;const xe=Array.from(G);Promise.allSettled(xe.map(async ve=>{try{const Ce=await hx(ve);if(Ce&&Ce.data)return{id:ve,email:Ce.data.email,invite_user:Ce.data.invite_user}}catch(Ce){console.error(`Failed to fetch user ${ve}:`,Ce)}return null})).then(ve=>{const Ce={};ve.forEach(Ze=>{var Ke;if(Ze.status==="fulfilled"&&Ze.value){const it=Ze.value;Ce[it.id]={email:it.email,invite_user_email:((Ke=it.invite_user)==null?void 0:Ke.email)||null},it.invite_user&&(Ce[it.invite_user.id]={email:it.invite_user.email})}}),Object.keys(Ce).length>0&&_e(Ze=>{const Ke={...Ze,...Ce};return gj(Ke),Ke})})},[h,K,ue]);const Re={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},tt=f.useCallback(async(G=1,xe,ve)=>{var Ce,Ze;se(!0),w("");try{let Ke;if(xe)if(ve==="email"){const bt=(Ce=(await Td(1,1,[{key:"email",condition:ud,value:xe}])).data)==null?void 0:Ce[0];if(!bt){m([]),H(0),se(!1);return}Ke=[{key:"user_id",condition:"=",value:String(bt.id)}]}else if(ve==="invite_user_email"){const bt=(Ze=(await Td(1,1,[{key:"email",condition:ud,value:xe}])).data)==null?void 0:Ze[0];if(!bt){m([]),H(0),se(!1);return}Ke=[{key:"invite_user_id",condition:"=",value:String(bt.id)}]}else Ke=[{key:ve||"trade_no",condition:ve==="trade_no"||ve==="user_id"||ve==="invite_user_id"||ve==="plan_id"||ve==="status"?"=":ud,value:xe}];const it=await p1({current:G,pageSize:Z,filter:Ke});m(it.data),H(it.total)}catch(Ke){w(Ke instanceof Error?Ke.message:o("order.loadFailed"))}finally{se(!1)}},[Z,o]),Wt=f.useCallback(G=>{const xe=String(G);A("user_id"),B(xe),ce(!0),ee(1),tt(1,xe,"user_id")},[tt]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}const G=new URLSearchParams(i.search),xe=G.get("filter_email"),ve=G.get("invite_user_email"),Ce=G.get("user_id")||G.get("filter_user_id");let Ze="",Ke="trade_no";Ce?(Ze=Ce,Ke="user_id",A("user_id"),B(Ce),ce(!0)):xe?(Ze=xe,Ke="email",A("email"),B(xe),ce(!0)):ve&&(Ze=ve,Ke="invite_user_email",A("invite_user_email"),B(ve),ce(!0)),tt(1,Ze,Ke),xl().then(j).catch(()=>{}),fx(1,1e3).then(it=>{const Ee={};it.data.forEach(bt=>{Ee[bt.id]=bt.code}),v(Ee)}).catch(()=>{})},[tt,s,i.search]);function Ut(){ee(1),tt(1,z,U)}function aa(){B(""),ee(1),tt(1)}function xt(G){ee(G),tt(G,z,U)}async function na(G){var xe,ve;te(null),$(null),w(""),C("");try{await m1(G),(xe=window.showToast)==null||xe.call(window,o("order.paidSuccess"),"success"),await tt(X,z,U)}catch(Ce){(ve=window.showToast)==null||ve.call(window,Ce instanceof Error?Ce.message:o("order.paidFailed"),"error")}}async function pt(G){var xe,ve;te(null),$(null),w(""),C("");try{await f1(G),(xe=window.showToast)==null||xe.call(window,o("order.cancelSuccess"),"success"),await tt(X,z,U)}catch(Ce){(ve=window.showToast)==null||ve.call(window,Ce instanceof Error?Ce.message:o("order.cancelFailed"),"error")}}async function Vt(G,xe){var ve,Ce;te(null),$(null),w(""),C("");try{await h1(G,xe),(ve=window.showToast)==null||ve.call(window,o("order.commissionSuccess"),"success"),await tt(X,z,U)}catch(Ze){(Ce=window.showToast)==null||Ce.call(window,Ze instanceof Error?Ze.message:o("order.commissionFailed"),"error")}}async function Qt(G){_(G),de(!0);try{const xe=await x1(G.id);xe&&xe.data&&_(xe.data)}catch(xe){console.error("Failed to fetch order detail:",xe)}finally{de(!1)}}function ea(){var G;O({email:"",plan_id:(G=y[0])!=null&&G.id?String(y[0].id):"",period:"month_price",total_amount:"0"}),w(""),C("")}async function Gt(G){var xe,ve;if(G.preventDefault(),!!oe){ae(!0),w(""),C("");try{await mx({email:oe.email,plan_id:Number(oe.plan_id),period:oe.period,total_amount:Number(oe.total_amount)*100}),O(null),(xe=window.showToast)==null||xe.call(window,o("order.assignSuccess"),"success"),await tt(X,z,U)}catch(Ce){(ve=window.showToast)==null||ve.call(window,Ce instanceof Error?Ce.message:o("order.assignFailed"),"error")}finally{ae(!1)}}}const Rt=Math.ceil(g/Z);return t.jsxs(Bt,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
        .order-table {
          min-width: 980px;
          table-layout: fixed;
        }
        .order-table th:nth-child(1) { width: 150px; }
        .order-table th:nth-child(2) { width: 300px; }
        .order-table th:nth-child(3) { width: 178px; }
        .order-table th:nth-child(4) { width: 170px; }
        .order-table th:nth-child(5) { width: 190px; }
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${E?"active":""}`,type:"button",onClick:()=>ce(!E),children:[t.jsx(ls,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:ea,children:[t.jsx(_a,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void tt(X,z,U),disabled:P,children:[t.jsx(Nt,{size:16}),o(P?"common.refreshing":"common.refresh")]})]}),E&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:U,onChange:G=>A(G.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Go,{size:16}),t.jsx("input",{className:"config-input search-input",value:z,onChange:G=>B(G.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:G=>G.key==="Enter"&&Ut()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ut,children:[t.jsx(ls,{size:16}),o("order.filter")]}),z?t.jsxs("button",{className:"ghost-button",type:"button",onClick:aa,children:[t.jsx(lt,{size:16}),o("order.clearFilter")]}):null]}),fe?t.jsx("div",{className:"form-error",children:fe}):null,R?t.jsx("div",{className:"form-success",children:R}):null,P&&h.length===0?t.jsx(ht,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${P?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[h.map(G=>{var it;const xe=d(G.status),ve=G.invite_user_id!==null,Ce=Re[G.commission_status]??{label:`#${G.commission_status}`,dotClass:"pending"},Ze=et(G),Ke=(it=ue[G.user_id])==null?void 0:it.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>Qt(G),title:o("order.detailsTitle"),children:Th(G.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",G.id]}),t.jsx("span",{className:"order-type-pill",children:Sh[G.type]??`#${G.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[Ke?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Wt(G.user_id),title:o("order.filterByUser"),children:Ke}):t.jsxs("span",{className:"order-subline",children:["ID: ",G.user_id]}),t.jsx("strong",{className:"order-plan-name",children:G.plan_name??`Plan #${G.plan_id}`}),t.jsx("span",{className:"period-capsule",children:p(G.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Ra(G.total_amount)}),Ze?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",Ze]}):t.jsx("span",{className:"order-subline",children:o("order.noCoupon")}),Number(G.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Ra(G.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${xe.cls.replace("status-","")}`}),t.jsx("span",{children:xe.label}),G.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ee=>{Ee.stopPropagation(),ke(G.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(ni,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),T===ti("desktop",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ee=>Ee.stopPropagation(),onClick:Ee=>Ee.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{te(null),na(G.trade_no)},children:[t.jsx(wo,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{te(null),pt(G.trade_no)},children:[t.jsx(Qn,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[ve?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Ra(G.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ce.dotClass}`}),t.jsx("span",{children:Ce.label}),G.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ee=>{Ee.stopPropagation(),Ae(G.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(ni,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),S===ti("desktop",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ee=>Ee.stopPropagation(),onClick:Ee=>Ee.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{$(null),Vt(G.trade_no,1)},children:[t.jsx(wo,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{$(null),Vt(G.trade_no,3)},children:[t.jsx(Qn,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Ch(G.created_at)})})]},G.trade_no)}),!P&&h.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),Rt>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:X<=1,onClick:()=>xt(X-1),children:t.jsx(hn,{size:16})}),t.jsxs("span",{className:"page-info",children:[X," / ",Rt]}),t.jsx("button",{className:"mini-button",disabled:X>=Rt,onClick:()=>xt(X+1),children:t.jsx(xn,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[h.map(G=>{var it;const xe=d(G.status),ve=G.invite_user_id!==null,Ce=Re[G.invite_user_id!==null?G.commission_status:0]??{label:`#${G.commission_status}`,dotClass:"pending"},Ze=(it=ue[G.user_id])==null?void 0:it.email,Ke=et(G);return t.jsxs("div",{className:"mobile-order-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>Qt(G),children:Th(G.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",G.id]})]}),t.jsxs("div",{className:"mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${xe.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:xe.label}),G.status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ee=>{Ee.stopPropagation(),ke(G.trade_no,"mobile")},children:t.jsx(ni,{size:12,style:{display:"inline",strokeWidth:3}})})]}),T===ti("mobile",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ee=>Ee.stopPropagation(),onClick:Ee=>Ee.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{te(null),na(G.trade_no)},children:[t.jsx(wo,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{te(null),pt(G.trade_no)},children:[t.jsx(Qn,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:Ze?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Wt(G.user_id),children:Ze}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",G.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:Sh[G.type]??`#${G.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:G.plan_name??`Plan #${G.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:p(G.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Ra(G.total_amount)})]}),Ke?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:Ke})})]}):null,Number(G.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Ra(G.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:ve?t.jsx("strong",{children:Ra(G.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),ve&&t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsxs("div",{className:"value mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ce.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:Ce.label}),G.commission_status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ee=>{Ee.stopPropagation(),Ae(G.trade_no,"mobile")},children:t.jsx(ni,{size:12,style:{display:"inline",strokeWidth:3}})})]}),S===ti("mobile",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ee=>Ee.stopPropagation(),onClick:Ee=>Ee.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{$(null),Vt(G.trade_no,1)},children:[t.jsx(wo,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{$(null),Vt(G.trade_no,3)},children:[t.jsx(Qn,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Ch(G.created_at)})]})]})]},G.trade_no)}),!P&&h.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,Rt>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:X<=1,onClick:()=>xt(X-1),children:t.jsx(hn,{size:16})}),t.jsxs("span",{className:"page-info",children:[X," / ",Rt]}),t.jsx("button",{className:"mini-button",disabled:X>=Rt,onClick:()=>xt(X+1),children:t.jsx(xn,{size:16})})]}):null]})]}),K?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:F?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(ht,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(ma=ue[K.user_id])!=null&&ma.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{_(null),Wt(K.user_id)},title:"Filter by this user",children:ue[K.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",K.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:K.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:p(K.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(K.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:K.plan_name??`Plan #${K.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:K.callback_no||"-"})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:et(K)??"-"})]})]}),K.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(M=ue[K.invite_user_id])!=null&&M.email||(ye=ue[K.user_id])!=null&&ye.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const G=String(K.invite_user_id);A("invite_user_id"),B(G),ce(!0),_(null),tt(1,G,"invite_user_id")},title:"Filter by this inviter",children:((Oe=ue[K.invite_user_id])==null?void 0:Oe.email)||((je=ue[K.user_id])==null?void 0:je.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",K.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Ra(K.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(Re[K.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(Re[K.commission_status]??{label:`#${K.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Ra(K.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Ra(K.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Ra(K.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Ra(K.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Ra(K.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:zh(K.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:zh(K.updated_at)})]})]})]})})]})}):null,oe?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>O(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Gt,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:oe.email,onChange:G=>O({...oe,email:G.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:oe.plan_id,onChange:G=>O({...oe,plan_id:G.target.value}),children:y.map(G=>t.jsx("option",{value:G.id,children:G.name},G.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:oe.period,onChange:G=>O({...oe,period:G.target.value}),children:Object.entries(kh).map(([G,xe])=>t.jsx("option",{value:G,children:xe},G))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:oe.total_amount,onChange:G=>O({...oe,total_amount:G.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>O(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:Y,children:[t.jsx(Sa,{size:16}),o(Y?"order.assigning":"order.assign")]})]})]})]})}):null]})}function So(s){return new Date(s*1e3).toLocaleString("vi-VN")}function ko(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function pd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function yj(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState([]),[p,h]=f.useState(0),[m,y]=f.useState(1),[j,b]=f.useState([]),[v,g]=f.useState(null),[H,X]=f.useState(!0),[ee,Z]=f.useState(!1),[z,B]=f.useState(""),[U,A]=f.useState(""),[P,se]=f.useState("");f.useEffect(()=>{v||se("")},[v]);const oe=f.useCallback(async(w=1)=>{X(!0),B("");try{const R=await fx(w,15);d(R.data),h(R.total)}catch(R){B(R instanceof Error?R.message:i("coupon.loadFailed"))}finally{X(!1)}},[]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}oe(1),xl().then(b).catch(()=>{})},[oe,s]);async function O(w){var R,C;if(w.preventDefault(),!!v){Z(!0),B(""),A("");try{const T=v.type==="1"?Math.round(Number(v.value)*100):Number(v.value);await g1({id:v.id,name:v.name,type:Number(v.type),value:T,code:v.code||void 0,started_at:Math.floor(new Date(v.started_at).getTime()/1e3),ended_at:Math.floor(new Date(v.ended_at).getTime()/1e3),limit_use:v.limit_use?Number(v.limit_use):null,limit_use_with_user:v.limit_use_with_user?Number(v.limit_use_with_user):null,limit_plan_ids:v.limit_plan_ids.length?v.limit_plan_ids:null,limit_period:v.limit_period.length?v.limit_period:null,generate_count:v.generate_count?Number(v.generate_count):void 0}),g(null),(R=window.showToast)==null||R.call(window,i("coupon.saveSuccess"),"success"),await oe(m)}catch(T){(C=window.showToast)==null||C.call(window,T instanceof Error?T.message:i("coupon.saveFailed"),"error")}finally{Z(!1)}}}async function Y(w){var R;try{await y1(w),await oe(m)}catch(C){(R=window.showToast)==null||R.call(window,C instanceof Error?C.message:i("coupon.toggleFailed"),"error")}}async function ae(w){var R;(R=window.showConfirm)==null||R.call(window,{message:i("coupon.deleteConfirm"),onConfirm:async()=>{var C,T;try{await b1(w),(C=window.showToast)==null||C.call(window,i("coupon.deleteSuccess"),"success"),await oe(m)}catch(te){(T=window.showToast)==null||T.call(window,te instanceof Error?te.message:i("coupon.deleteFailed"),"error")}}})}const fe=Math.ceil(p/15);return t.jsxs(Bt,{title:i("coupon.title"),subtitle:i("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("coupon.heading")}),t.jsxs("p",{children:[p," ",i("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void oe(m),disabled:H,children:[t.jsx(Nt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>g(pd()),children:[t.jsx(_a,{size:16}),i("coupon.add")]})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,U?t.jsx("div",{className:"form-success",children:U}):null,H&&o.length===0?t.jsx(ht,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("coupon.name")}),t.jsx("th",{children:i("coupon.code")}),t.jsx("th",{children:i("coupon.type")}),t.jsx("th",{children:i("coupon.value")}),t.jsx("th",{children:i("coupon.usageLimit")}),t.jsx("th",{children:i("coupon.limitPlans")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("coupon.limitPeriods")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(w=>{var te,S;const R=(te=w.limit_plan_ids)==null?void 0:te.map($=>{var E;return((E=j.find(ce=>ce.id===$))==null?void 0:E.name)||`#${$}`}).join(", "),C=ko(i),T=(S=w.limit_period)==null?void 0:S.map($=>C[$]||$).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:w.id}),t.jsx("td",{children:t.jsx("strong",{children:w.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:w.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:w.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:w.type===1?Na(w.value):`${w.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[i("coupon.maxUses"),": ",w.limit_use??"∞"]}),w.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[i("coupon.maxUses")," ",w.limit_use_with_user,"/",i("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[R?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[i("coupon.plans"),": ",R]})}):null,T?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[i("coupon.cycles"),": ",T]})}):null,!R&&!T?t.jsx("span",{className:"tag muted-tag",children:i("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${w.show?"active":""}`,type:"button",onClick:()=>void Y(w.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[So(w.started_at)," — ",So(w.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>g(pd(w)),children:[t.jsx(At,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ae(w.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},w.id)}),!H&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(w=>{var R,C,T,te;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",w.id]}),t.jsx("span",{className:`tag type-tag ${w.type===1?"fixed-type":"percent-type"}`,children:w.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:w.name,children:w.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:i("coupon.clickToCopy"),onClick:()=>{Zn(w.code).then(S=>{var $;($=window.showToast)==null||$.call(window,S?`${i("coupon.copiedCode")}: ${w.code}`:i("common.copyFailed"),S?"success":"error")})},children:[t.jsx("code",{className:"mono",children:w.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(R=w.limit_plan_ids)!=null&&R.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:w.limit_plan_ids.map(S=>{const $=j.find(E=>E.id===S);return t.jsx("span",{className:"res-pill plan-pill",children:$?$.name:`#${S}`},S)})})]}):null,(C=w.limit_period)!=null&&C.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:w.limit_period.map(S=>t.jsx("span",{className:"res-pill cycle-pill",children:ko(i)[S]||S},S))})]}):null,!((T=w.limit_plan_ids)!=null&&T.length)&&!((te=w.limit_period)!=null&&te.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[So(w.started_at)," — ",So(w.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:i("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${w.show?"active":""}`,type:"button",onClick:()=>void Y(w.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:w.type===1?Na(w.value).replace(/\s?₫/,""):`${w.value}`}),t.jsx("span",{className:"ticket-value-unit",children:w.type===1?"₫":i("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:w.limit_use??"∞"}),w.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[i("coupon.maxUses")," ",w.limit_use_with_user,"/",i("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>g(pd(w)),"aria-label":i("common.edit"),children:t.jsx(At,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ae(w.id),"aria-label":i("common.delete"),children:t.jsx(qt,{size:15})})]})]})]},w.id)}),!H&&o.length===0?t.jsx("div",{className:"empty-state",children:i("coupon.empty")}):null]}),fe>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{y(m-1),oe(m-1)},children:t.jsx(hn,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",fe]}),t.jsx("button",{className:"mini-button",disabled:m>=fe,onClick:()=>{y(m+1),oe(m+1)},children:t.jsx(xn,{size:16})})]}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?i("coupon.edit"):i("coupon.add")}),t.jsx("p",{children:i("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:O,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:v.name,onChange:w=>g({...v,name:w.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.type")}),t.jsxs("select",{className:"config-input",value:v.type,onChange:w=>g({...v,type:w.target.value}),children:[t.jsx("option",{value:"1",children:i("coupon.type.fixed")}),t.jsx("option",{value:"2",children:i("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:v.value,onChange:w=>g({...v,value:w.target.value})})]})]}),v.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[i("coupon.code")," (",i("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:v.code,onChange:w=>g({...v,code:w.target.value}),placeholder:i("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:v.started_at,onChange:w=>g({...v,started_at:w.target.value}),onClick:w=>{var R,C;return(C=(R=w.currentTarget).showPicker)==null?void 0:C.call(R)},onFocus:w=>{var R,C;return(C=(R=w.currentTarget).showPicker)==null?void 0:C.call(R)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:v.ended_at,onChange:w=>g({...v,ended_at:w.target.value}),onClick:w=>{var R,C;return(C=(R=w.currentTarget).showPicker)==null?void 0:C.call(R)},onFocus:w=>{var R,C;return(C=(R=w.currentTarget).showPicker)==null?void 0:C.call(R)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.limit_use,onChange:w=>g({...v,limit_use:w.target.value}),placeholder:i("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.limit_use_with_user,onChange:w=>g({...v,limit_use_with_user:w.target.value}),placeholder:i("coupon.unlimited")})]})]}),v.id?null:t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.generate_count,onChange:w=>g({...v,generate_count:w.target.value}),placeholder:i("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPlans")}),v.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:v.limit_plan_ids.map(w=>{const R=j.find(C=>C.id===w);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const C=v.limit_plan_ids.filter(T=>T!==w);g({...v,limit_plan_ids:C})},children:[R?R.name:`#${w}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},w)})}),j.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("coupon.searchPlans"),value:P,onChange:w=>se(w.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[j.filter(w=>w.name.toLowerCase().includes(P.toLowerCase())).map(w=>{const R=v.limit_plan_ids.includes(w.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:R,onChange:C=>{const T=C.target.checked?[...v.limit_plan_ids,w.id]:v.limit_plan_ids.filter(te=>te!==w.id);g({...v,limit_plan_ids:T})}}),t.jsx("span",{children:w.name})]},w.id)}),j.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPeriods")}),v.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:v.limit_period.map(w=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const R=v.limit_period.filter(C=>C!==w);g({...v,limit_period:R})},children:[ko(i)[w]||w," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},w))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(ko(i)).map(([w,R])=>{const C=v.limit_period.includes(w);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:C,onChange:T=>{const te=T.target.checked?[...v.limit_period,w]:v.limit_period.filter(S=>S!==w);g({...v,limit_period:te})}}),t.jsx("span",{children:R})]},w)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:ee,children:[t.jsx(Sa,{size:16}),i(ee?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Co(s){return new Date(s*1e3).toLocaleString("vi-VN")}function vj(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function md(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function jj(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState([]),[p,h]=f.useState(0),[m,y]=f.useState(1),[j,b]=f.useState([]),[v,g]=f.useState(null),[H,X]=f.useState(!0),[ee,Z]=f.useState(!1),[z,B]=f.useState(""),[U,A]=f.useState(""),[P,se]=f.useState("");f.useEffect(()=>{v||se("")},[v]);const oe=vj(i),O=f.useCallback(async(w=1)=>{X(!0),B("");try{const R=await v1(w,15);d(R.data),h(R.total)}catch(R){B(R instanceof Error?R.message:i("giftcard.loadFailed"))}finally{X(!1)}},[i]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}O(1),xl().then(b).catch(()=>{})},[O,s]);async function Y(w){var R,C;if(w.preventDefault(),!!v){Z(!0),B(""),A("");try{const T=v.type==="1"?Math.round(Number(v.value)*100):Number(v.value);await j1({id:v.id,name:v.name,type:Number(v.type),value:T,code:v.code||void 0,started_at:Math.floor(new Date(v.started_at).getTime()/1e3),ended_at:Math.floor(new Date(v.ended_at).getTime()/1e3),limit_use:v.limit_use?Number(v.limit_use):null,plan_id:v.plan_id?Number(v.plan_id):null,generate_count:v.generate_count?Number(v.generate_count):void 0}),g(null),(R=window.showToast)==null||R.call(window,i("giftcard.saveSuccess"),"success"),await O(m)}catch(T){(C=window.showToast)==null||C.call(window,T instanceof Error?T.message:i("giftcard.saveFailed"),"error")}finally{Z(!1)}}}async function ae(w){var R;(R=window.showConfirm)==null||R.call(window,{message:i("giftcard.deleteConfirm"),onConfirm:async()=>{var C,T;try{await w1(w),(C=window.showToast)==null||C.call(window,i("giftcard.deleteSuccess"),"success"),await O(m)}catch(te){(T=window.showToast)==null||T.call(window,te instanceof Error?te.message:i("giftcard.deleteFailed"),"error")}}})}const fe=Math.ceil(p/15);return t.jsxs(Bt,{title:i("giftcard.title"),subtitle:i("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("giftcard.heading")}),t.jsxs("p",{children:[p," ",i("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void O(m),disabled:H,children:[t.jsx(Nt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>g(md()),children:[t.jsx(_a,{size:16}),i("giftcard.add")]})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,U?t.jsx("div",{className:"form-success",children:U}):null,H&&o.length===0?t.jsx(ht,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("giftcard.thId")}),t.jsx("th",{children:i("giftcard.thName")}),t.jsx("th",{children:i("giftcard.thCode")}),t.jsx("th",{children:i("giftcard.thType")}),t.jsx("th",{children:i("giftcard.thValue")}),t.jsx("th",{children:i("giftcard.thBoundPlan")}),t.jsx("th",{children:i("giftcard.thUses")}),t.jsx("th",{children:i("giftcard.thPeriod")}),t.jsx("th",{children:i("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(w=>{var R;return t.jsxs("tr",{children:[t.jsx("td",{children:w.id}),t.jsx("td",{children:t.jsx("strong",{children:w.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:w.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:oe[w.type]??w.type})}),t.jsx("td",{children:t.jsx("strong",{children:w.type===1?Na(w.value):w.value})}),t.jsx("td",{children:w.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((R=j.find(C=>C.id===w.plan_id))==null?void 0:R.name)||`#${w.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:i("giftcard.planNone")})}),t.jsx("td",{children:w.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Co(w.started_at)," — ",Co(w.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>g(md(w)),children:[t.jsx(At,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ae(w.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},w.id)}),!H&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(w=>{var R;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",w.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:oe[w.type]??w.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:w.name,children:w.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:i("giftcard.clickToCopy"),onClick:()=>{Zn(w.code).then(C=>{var T;(T=window.showToast)==null||T.call(window,C?i("giftcard.copiedCode").replace("{code}",w.code):i("common.copyFailed"),C?"success":"error")})},children:[t.jsx("code",{className:"mono",children:w.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:w.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((R=j.find(C=>C.id===w.plan_id))==null?void 0:R.name)||`#${w.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Co(w.started_at)," — ",Co(w.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:w.type===1?Na(w.value).replace(/\s?₫/,""):`${w.value}`}),t.jsx("span",{className:"ticket-value-unit",children:w.type===1?"₫":oe[w.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:w.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>g(md(w)),"aria-label":i("common.edit"),children:t.jsx(At,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ae(w.id),"aria-label":i("common.delete"),children:t.jsx(qt,{size:15})})]})]})]},w.id)}),!H&&o.length===0?t.jsx("div",{className:"empty-state",children:i("giftcard.empty")}):null]}),fe>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{y(m-1),O(m-1)},children:t.jsx(hn,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",fe]}),t.jsx("button",{className:"mini-button",disabled:m>=fe,onClick:()=>{y(m+1),O(m+1)},children:t.jsx(xn,{size:16})})]}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?i("giftcard.edit"):i("giftcard.create")}),t.jsx("p",{children:i("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Y,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:v.name,onChange:w=>g({...v,name:w.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:v.type,onChange:w=>g({...v,type:w.target.value}),children:Object.entries(oe).map(([w,R])=>t.jsx("option",{value:w,children:R},w))})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:v.value,onChange:w=>g({...v,value:w.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:v.started_at,onChange:w=>g({...v,started_at:w.target.value}),onClick:w=>{var R,C;return(C=(R=w.currentTarget).showPicker)==null?void 0:C.call(R)},onFocus:w=>{var R,C;return(C=(R=w.currentTarget).showPicker)==null?void 0:C.call(R)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:v.ended_at,onChange:w=>g({...v,ended_at:w.target.value}),onClick:w=>{var R,C;return(C=(R=w.currentTarget).showPicker)==null?void 0:C.call(R)},onFocus:w=>{var R,C;return(C=(R=w.currentTarget).showPicker)==null?void 0:C.call(R)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.limit_use,onChange:w=>g({...v,limit_use:w.target.value}),placeholder:i("giftcard.placeholderUnlimited")})]}),v.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.generate_count,onChange:w=>g({...v,generate_count:w.target.value}),placeholder:i("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("giftcard.bindPlan")}),v.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const w=j.find(R=>String(R.id)===v.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{g({...v,plan_id:""})},children:[w?w.name:`#${v.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),j.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("giftcard.searchPlans"),value:P,onChange:w=>se(w.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!v.plan_id,onChange:()=>{g({...v,plan_id:""})}}),t.jsx("span",{children:i("giftcard.noneAllPlans")})]}),j.filter(w=>w.name.toLowerCase().includes(P.toLowerCase())).map(w=>{const R=String(w.id)===v.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:R,onChange:C=>{C.target.checked&&g({...v,plan_id:String(w.id)})}}),t.jsx("span",{children:w.name})]},w.id)}),j.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:ee,children:[t.jsx(Sa,{size:16}),i(ee?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const Fi="Tương đối",mn="=";function zo(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function wj(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Eh(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function fd(s){return+(s/1073741824).toFixed(2)}function hd(s){return Math.round(s*1073741824)}function To(s){return(s/1073741824).toFixed(2)}function Nj(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function ai(s){if(s===0)return"0.00 MB";const i=s/1073741824;return i<.1?`${(s/1048576).toFixed(2)} MB`:`${i.toFixed(2)} GB`}const Md=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Cx="user_visible_columns";function _j(){if(typeof window<"u")try{const s=localStorage.getItem(Cx);if(s)return new Set(JSON.parse(s))}catch{}return new Set(Md.filter(s=>s.defaultVisible).map(s=>s.key))}const Lo=[{value:"email",label:"Email",condition:Fi,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:mn,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:mn,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:mn,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:mn,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:Fi,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:mn,placeholder:"12345"},{value:"uuid",label:"UUID",condition:Fi,placeholder:"UUID"},{value:"token",label:"Token",condition:Fi,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:Fi,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:mn,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:mn,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:mn,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:mn,placeholder:"1780366403"}],Sj=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Ft(s,i){switch(s){case"id":return i("user.colId");case"email":return i("user.colEmail");case"status":return i("user.colStatus");case"plan":return i("user.colPlan");case"group":return i("user.colGroup");case"used":return i("user.colUsed");case"traffic":return i("user.colTraffic");case"devices":return i("user.colDevices");case"expires":return i("user.colExpires");case"balance":return i("user.colBalance");case"commission":return i("user.colCommission");case"joined":return i("user.colJoined");case"actions":return i("user.colActions");default:return""}}function kj(s,i){var p;const o=((p=Lo.find(h=>h.value===s))==null?void 0:p.label)??s,d=h=>{const m=i(h);return m===h?o:m};switch(s){case"email":return i("user.filterEmail");case"id":return i("user.filterId");case"plan_id":return i("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return i("user.filterInviterEmail");case"invite_user_id":return i("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return i("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function xd(s){return Lo.find(i=>i.value===s)??Lo[0]}function Cj(s,i){switch(s){case"month_price":return i("order.period.month_price");case"quarter_price":return i("order.period.quarter_price");case"half_year_price":return i("order.period.half_year_price");case"year_price":return i("order.period.year_price");case"two_year_price":return i("order.period.two_year_price");case"three_year_price":return i("order.period.three_year_price");case"onetime_price":return i("order.period.onetime_price");case"reset_price":return i("order.period.reset_price");default:return""}}function zj(){const s=Ct(),i=gn(),{t:o}=qe(),[d,p]=f.useState([]),[h,m]=f.useState([]),[y,j]=f.useState([]),[b,v]=f.useState(0),[g,H]=f.useState(1),[X,ee]=f.useState(""),[Z,z]=f.useState("email"),[B,U]=f.useState(!0),[A,P]=f.useState(""),[se,oe]=f.useState(_j),[O,Y]=f.useState(!1),ae=f.useRef(null),[fe,w]=f.useState(null),[R,C]=f.useState(null),[T,te]=f.useState({}),[S,$]=f.useState(!1),[E,ce]=f.useState(!1),[K,_]=f.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[F,de]=f.useState(!1),[ue,_e]=f.useState(null),[ke,Ae]=f.useState({plan_id:"",period:"month_price",total_amount:""}),[et,Re]=f.useState(!1),[tt,Wt]=f.useState(null),[Ut,aa]=f.useState(null),[xt,na]=f.useState([]),[pt,Vt]=f.useState(0),[Qt,ea]=f.useState(1),[Gt]=f.useState(10),[Rt,ma]=f.useState(!1),[M,ye]=f.useState("");f.useEffect(()=>{function N(he){const ge=he.target instanceof Element?he.target:null;fe!==null&&(!ge||!ge.closest(".action-dropdown-wrap, .mobile-action-sheet"))&&w(null),O&&ae.current&&!ae.current.contains(he.target)&&Y(!1)}return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[fe,O]);function Oe(N){oe(he=>{const ge=new Set(he);ge.has(N)?ge.delete(N):ge.add(N);try{localStorage.setItem(Cx,JSON.stringify([...ge]))}catch{}return ge})}const je=N=>se.has(N),G=Md.filter(N=>se.has(N.key)).length,xe=f.useCallback(async(N=1,he,ge)=>{U(!0),P("");try{const Me=he==null?void 0:he.trim(),Tt=xd(ge||"email"),fa=Me?[{key:Tt.value,condition:Tt.condition,value:Me}]:void 0,yt=await Td(N,15,fa);p(yt.data),v(yt.total)}catch(Me){P(Me instanceof Error?Me.message:o("user.loadFailed"))}finally{U(!1)}},[]),ve=f.useCallback(async()=>{try{const[N,he]=await Promise.all([xl(),ss()]);m(N),j(he)}catch{}},[]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}const N=new URLSearchParams(i.search),ge=[["email",N.get("email")||N.get("filter_email")],["id",N.get("id")||N.get("user_id")||N.get("filter_user_id")],["plan_id",N.get("plan_id")],["invite_user_id",N.get("invite_user_id")],["invite_by_email",N.get("invite_by_email")],["uuid",N.get("uuid")],["token",N.get("token")],["remarks",N.get("remarks")]].find(([,Me])=>Me==null?void 0:Me.trim());if(ge){const[Me,Tt]=ge,fa=xd(Me),yt=(Tt==null?void 0:Tt.trim())??"";z(fa.value),ee(yt),H(1),xe(1,yt,fa.value)}else xe(1);ve()},[xe,ve,s,i.search]);function Ce(){H(1),xe(1,X,Z)}function Ze(){ee(""),H(1),xe(1)}function Ke(N){H(N),xe(N,X,Z)}function it(N){if(N.plan_name)return N.plan_name;if(!N.plan_id)return"—";const he=h.find(ge=>ge.id===N.plan_id);return he?he.name:`#${N.plan_id}`}function Ee(N){if(!N.group_id)return"—";const he=y.find(ge=>ge.id===N.group_id);return he?he.name:`#${N.group_id}`}function bt(N){return`${N.alive_ip??0} / ${N.device_limit??"∞"}`}async function Ht(N){var Me,Tt;const he=N.subscribe_url;if(!he){(Me=window.showToast)==null||Me.call(window,o("user.toastNoSubscribeUrl"),"error");return}const ge=await Zn(he);(Tt=window.showToast)==null||Tt.call(window,o(ge?"user.toastUrlCopied":"common.copyFailed"),ge?"success":"error"),w(null)}function Ga(N){var he;w(null),(he=window.showConfirm)==null||he.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var ge,Me;try{await k1(N.id),(ge=window.showToast)==null||ge.call(window,o("user.toastSecretResetSuccess"),"success"),await xe(g,X,Z)}catch(Tt){(Me=window.showToast)==null||Me.call(window,Tt instanceof Error?Tt.message:o("user.toastSecretResetFailed"),"error")}}})}function Za(N){var he;w(null),(he=window.showConfirm)==null||he.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var ge,Me;try{await _1(N.id),(ge=window.showToast)==null||ge.call(window,o("user.toastDeletedSuccess"),"success"),await xe(g,X,Z)}catch(Tt){(Me=window.showToast)==null||Me.call(window,Tt instanceof Error?Tt.message:o("user.toastDeletedFailed"),"error")}}})}function q(N){var ge;w(null);const he=N.subscribe_url;if(!he){(ge=window.showToast)==null||ge.call(window,o("user.toastNoSubscribeUrl"),"error");return}Wt({url:he,userId:N.id})}function re(N){w(null),s.push(`/order?user_id=${N.id}`)}function ie(N){w(null),s.push(`/subscription?user_id=${N.id}`)}function He(N){w(null),z("invite_user_id"),ee(String(N.id)),xe(1,String(N.id),"invite_user_id")}async function Qe(N,he){ma(!0),ye("");try{const ge=await D1(N,he,Gt);na(ge.data||[]),Vt(ge.total||0),ea(he)}catch(ge){ye(ge instanceof Error?ge.message:o("user.historyLoading"))}finally{ma(!1)}}function Je(N){w(null),aa(N),Qe(N.id,1)}function st(N){w(null),_e(N.email),Ae({plan_id:"",period:"month_price",total_amount:""})}async function Ye(N){var he,ge;if(N.preventDefault(),!!ue){Re(!0);try{await mx({email:ue,plan_id:Number(ke.plan_id),period:ke.period,total_amount:(Number(ke.total_amount)||0)*100}),(he=window.showToast)==null||he.call(window,o("user.toastAssignSuccess"),"success"),_e(null)}catch(Me){(ge=window.showToast)==null||ge.call(window,Me instanceof Error?Me.message:o("user.toastAssignFailed"),"error")}finally{Re(!1)}}}function la(N){w(null),C(N),te({id:N.id,email:N.email,invite_user_email:"",password:"",balance:N.balance,commission_balance:N.commission_balance,u:fd(N.u),d:fd(N.d),transfer_enable:fd(N.transfer_enable),device_limit:N.device_limit,network_settings:N.network_settings??"",expired_at:wj(N.expired_at),plan_id:N.plan_id,banned:N.banned,commission_type:N.commission_type??0,commission_rate:N.commission_rate??"",discount:N.discount??"",speed_limit:N.speed_limit,is_admin:N.is_admin,is_staff:N.is_staff,remarks:N.remarks??""})}function ut(N,he){te(ge=>({...ge,[N]:he}))}async function Fn(N){var he,ge;if(N.preventDefault(),!!R){$(!0);try{const Me={id:R.id,email:T.email,plan_id:T.plan_id||null,expired_at:Eh(String(T.expired_at??"")),transfer_enable:hd(Number(T.transfer_enable??0)),speed_limit:T.speed_limit||null,device_limit:T.device_limit||null,u:hd(Number(T.u??0)),d:hd(Number(T.d??0)),balance:Number(T.balance??0),commission_balance:Number(T.commission_balance??0),commission_rate:T.commission_rate!==""&&T.commission_rate!==null?Number(T.commission_rate):null,commission_type:Number(T.commission_type??0),discount:T.discount!==""&&T.discount!==null?Number(T.discount):null,network_settings:T.network_settings||null,remarks:T.remarks||null,is_admin:Number(T.is_admin??0),is_staff:Number(T.is_staff??0),banned:Number(T.banned??0)};T.invite_user_email&&(Me.invite_user_email=T.invite_user_email),T.password&&(Me.password=T.password),await N1(Me),(he=window.showToast)==null||he.call(window,o("user.toastSaveSuccess"),"success"),C(null),await xe(g,X,Z)}catch(Me){(ge=window.showToast)==null||ge.call(window,Me instanceof Error?Me.message:o("user.toastSaveFailed"),"error")}finally{$(!1)}}}async function $o(N){var he,ge;N.preventDefault(),de(!0);try{await S1({email_prefix:K.email_prefix,email_suffix:K.email_suffix,password:K.password||void 0,plan_id:K.plan_id?Number(K.plan_id):void 0,expired_at:Eh(K.expired_at)}),(he=window.showToast)==null||he.call(window,o("user.toastCreateSuccess"),"success"),ce(!1),_({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await xe(g,X,Z)}catch(Me){(ge=window.showToast)==null||ge.call(window,Me instanceof Error?Me.message:o("user.toastCreateFailed"),"error")}finally{de(!1)}}const Ha=Math.ceil(b/15),rs=xd(Z);return t.jsxs(Bt,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[b," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:ae,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>Y(!O),children:[t.jsx(uv,{size:16}),o("user.columns")]}),O?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:G})})}),Md.map(N=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:se.has(N.key),onChange:()=>Oe(N.key)}),t.jsx("span",{children:Ft(N.key,o)})]},N.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void xe(g,X,Z),disabled:B,children:[t.jsx(Nt,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>ce(!0),children:[t.jsx(_a,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:Z,onChange:N=>z(N.target.value),children:Lo.map(N=>t.jsx("option",{value:N.value,children:kj(N.value,o)},N.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Go,{size:16}),t.jsx("input",{className:"config-input search-input",value:X,onChange:N=>ee(N.target.value),placeholder:rs.placeholder,onKeyDown:N=>N.key==="Enter"&&Ce()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ce,children:[t.jsx(ls,{size:16}),o("user.filter")]}),X?t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ze,children:[t.jsx(lt,{size:16}),o("user.clearFilter")]}):null]}),A?t.jsx("div",{className:"form-error",children:A}):null,B&&d.length===0?t.jsx(ht,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${B?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(N=>{const he=To(N.u+N.d),ge=To(N.transfer_enable),Me=parseFloat(he);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",N.id]}),t.jsx("span",{className:"user-email",title:N.email,children:N.email})]}),N.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[it(N)," / ",N.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):Ee(N)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Me>0?Me>parseFloat(ge)*.9?"high":"ok":""}`,children:[he," GB"]})," / ",ge," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Ft("devices",o)}),t.jsx("span",{className:"info-val",children:bt(N)})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Ft("expires",o)}),t.jsx("span",{className:"info-val",children:N.expired_at?t.jsx("span",{className:`expiry-date ${N.expired_at<Date.now()/1e3?"expired":""}`,children:zo(N.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(N.balance/100).toFixed(2)," ₫ / ",(N.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Ft("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:zo(N.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${fe===N.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>w(fe===N.id?null:N.id),children:[o("user.colActions")," ",t.jsx(ni,{size:14})]}),fe===N.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>w(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:Tt=>Tt.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:N.email}),t.jsxs("small",{children:["#",N.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:t.jsx(lt,{size:16})})]}),t.jsxs("div",{className:"action-dropdown-menu mobile-action-menu",children:[t.jsxs("button",{type:"button",onClick:()=>la(N),children:[t.jsx(At,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>st(N),children:[t.jsx(oh,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void Ht(N),children:[t.jsx(wa,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>q(N),children:[t.jsx(lh,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>Ga(N),children:[t.jsx(Uo,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>re(N),children:[t.jsx(ah,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>ie(N),children:[t.jsx(Sd,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>He(N),children:[t.jsx(is,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Je(N),children:[t.jsx(sd,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Za(N),children:[t.jsx(qt,{size:14}),o("user.actionDelete")]})]})]})}):null]})})]},N.id)}),!B&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[je("id")&&t.jsx("th",{children:Ft("id",o)}),je("email")&&t.jsx("th",{children:Ft("email",o)}),je("status")&&t.jsx("th",{children:Ft("status",o)}),je("plan")&&t.jsx("th",{children:Ft("plan",o)}),je("group")&&t.jsx("th",{children:Ft("group",o)}),je("used")&&t.jsx("th",{children:Ft("used",o)}),je("traffic")&&t.jsx("th",{children:Ft("traffic",o)}),je("devices")&&t.jsx("th",{children:Ft("devices",o)}),je("expires")&&t.jsx("th",{children:Ft("expires",o)}),je("balance")&&t.jsx("th",{children:Ft("balance",o)}),je("commission")&&t.jsx("th",{children:Ft("commission",o)}),je("joined")&&t.jsx("th",{children:Ft("joined",o)}),je("actions")&&t.jsx("th",{children:Ft("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(N=>{const he=To(N.u+N.d),ge=To(N.transfer_enable),Me=parseFloat(he);return t.jsxs("tr",{children:[je("id")&&t.jsx("td",{children:N.id}),je("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:N.email})}),je("status")&&t.jsx("td",{children:N.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),je("plan")&&t.jsx("td",{children:it(N)}),je("group")&&t.jsx("td",{children:N.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):Ee(N)}),je("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Me>0?Me>parseFloat(ge)*.9?"high":"ok":""}`,children:he})}),je("traffic")&&t.jsx("td",{children:ge}),je("devices")&&t.jsx("td",{children:bt(N)}),je("expires")&&t.jsx("td",{children:N.expired_at?t.jsx("span",{className:`expiry-date ${N.expired_at<Date.now()/1e3?"expired":""}`,children:zo(N.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),je("balance")&&t.jsx("td",{children:(N.balance/100).toFixed(2)}),je("commission")&&t.jsx("td",{children:(N.commission_balance/100).toFixed(2)}),je("joined")&&t.jsx("td",{children:t.jsx("small",{children:zo(N.created_at)})}),je("actions")&&t.jsx("td",{children:t.jsxs("div",{className:`action-dropdown-wrap ${fe===N.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>w(fe===N.id?null:N.id),children:[o("user.colActions")," ",t.jsx(ni,{size:14})]}),fe===N.id?t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",onClick:()=>la(N),children:[t.jsx(At,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>st(N),children:[t.jsx(oh,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void Ht(N),children:[t.jsx(wa,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>q(N),children:[t.jsx(lh,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>Ga(N),children:[t.jsx(Uo,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>re(N),children:[t.jsx(ah,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>ie(N),children:[t.jsx(Sd,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>He(N),children:[t.jsx(is,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Je(N),children:[t.jsx(sd,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Za(N),children:[t.jsx(qt,{size:14}),o("user.actionDelete")]})]}):null]})})]},N.id)}),!B&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:G,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),Ha>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:g<=1,onClick:()=>Ke(g-1),children:t.jsx(hn,{size:16})}),Array.from({length:Math.min(5,Ha)},(N,he)=>{let ge;return Ha<=5||g<=3?ge=he+1:g>=Ha-2?ge=Ha-4+he:ge=g-2+he,t.jsx("button",{className:`mini-button ${ge===g?"active-page":""}`,onClick:()=>Ke(ge),children:ge},ge)}),Ha>5?t.jsxs("span",{className:"page-info",children:["… ",Ha]}):null,t.jsx("button",{className:"mini-button",disabled:g>=Ha,onClick:()=>Ke(g+1),children:t.jsx(xn,{size:16})})]})}):null]}),R?t.jsx("div",{className:"modal-backdrop",onClick:()=>C(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>C(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:Fn,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(T.email??""),onChange:N=>ut("email",N.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(T.invite_user_email??""),onChange:N=>ut("invite_user_email",N.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(T.password??""),onChange:N=>ut("password",N.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(T.balance??0)/100).toFixed(2)),onChange:N=>ut("balance",Math.round(Number(N.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(T.commission_balance??0)/100).toFixed(2)),onChange:N=>ut("commission_balance",Math.round(Number(N.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(T.u??0),onChange:N=>ut("u",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(T.d??0),onChange:N=>ut("d",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(T.transfer_enable??0),onChange:N=>ut("transfer_enable",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(T.device_limit??""),onChange:N=>ut("device_limit",N.target.value?Number(N.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.sniUserLabel"),t.jsx("input",{className:"config-input",value:String(T.network_settings??""),onChange:N=>ut("network_settings",N.target.value),placeholder:o("user.sniUserPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(T.expired_at??""),onChange:N=>ut("expired_at",N.target.value),onClick:N=>{var he,ge;return(ge=(he=N.currentTarget).showPicker)==null?void 0:ge.call(he)},onFocus:N=>{var he,ge;return(ge=(he=N.currentTarget).showPicker)==null?void 0:ge.call(he)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(T.plan_id??""),onChange:N=>ut("plan_id",N.target.value?Number(N.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),h.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(T.banned??0),onChange:N=>ut("banned",Number(N.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(T.commission_type??0),onChange:N=>ut("commission_type",Number(N.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(T.commission_rate??""),onChange:N=>ut("commission_rate",N.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(T.discount??""),onChange:N=>ut("discount",N.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(T.speed_limit??""),onChange:N=>ut("speed_limit",N.target.value?Number(N.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${T.is_admin?"active":""}`,onClick:()=>ut("is_admin",T.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${T.is_staff?"active":""}`,onClick:()=>ut("is_staff",T.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(T.remarks??""),onChange:N=>ut("remarks",N.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>C(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:S,children:o(S?"common.processing":"common.save")})]})]})]})}):null,E?t.jsx("div",{className:"modal-backdrop",onClick:()=>ce(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ce(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:$o,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:K.email_prefix,onChange:N=>_({...K,email_prefix:N.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:K.email_suffix,onChange:N=>_({...K,email_suffix:N.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:K.password,onChange:N=>_({...K,password:N.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:K.plan_id,onChange:N=>_({...K,plan_id:N.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),h.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:K.expired_at,onChange:N=>_({...K,expired_at:N.target.value}),onClick:N=>{var he,ge;return(ge=(he=N.currentTarget).showPicker)==null?void 0:ge.call(he)},onFocus:N=>{var he,ge;return(ge=(he=N.currentTarget).showPicker)==null?void 0:ge.call(he)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ce(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:F,children:o(F?"user.creating":"user.createUser")})]})]})]})}):null,ue?t.jsx("div",{className:"modal-backdrop",onClick:()=>_e(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_e(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ye,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:ue})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:ke.plan_id,onChange:N=>Ae({...ke,plan_id:N.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),h.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:ke.period,onChange:N=>Ae({...ke,period:N.target.value}),children:Sj.map(N=>t.jsx("option",{value:N.value,children:Cj(N.value,o)},N.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:ke.total_amount,onChange:N=>Ae({...ke,total_amount:N.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_e(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:et,children:o(et?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),tt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Wt(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Wt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(tt.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:tt.userId})})]})]})}):null,Ut?t.jsx("div",{className:"modal-backdrop",onClick:()=>aa(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:Ut.email,id:Ut.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>aa(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[M?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:M}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:pt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:ai(xt.reduce((N,he)=>N+he.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:ai(xt.reduce((N,he)=>N+he.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:ai(xt.reduce((N,he)=>N+he.u+he.d,0))})]})]}),Rt?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(ht,{label:o("user.historyLoading")})}):xt.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(sd,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:xt.map(N=>{const he=ai(N.u),ge=ai(N.d),Me=ai(N.u+N.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:Nj(N.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(N.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:he}),t.jsx("td",{style:{color:"var(--muted)"},children:ge}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Me})]},N.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min((Qt-1)*Gt+1,pt),end:Math.min(Qt*Gt,pt),total:pt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:Qt<=1,onClick:()=>Qe(Ut.id,Qt-1),children:[t.jsx(hn,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Qt*Gt>=pt,onClick:()=>Qe(Ut.id,Qt+1),children:[o("user.historyNext"),t.jsx(xn,{size:16})]})]})]})]})]})]})}):null]})}const Mh=15,Dh=20,Tj=["email","id","user_id","plan_id","status"];function Yn(s,i){return s?new Date(s*1e3).toLocaleString():i}function Ej(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Mj(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function fl(s){return+(s/1073741824).toFixed(2)}function gd(s){return Math.round((Number(s)||0)*1073741824)}function Dj(s){return s==="email"?"like":"="}function Oj(s,i){switch(s){case"email":return i("subscription.filterEmail");case"id":return i("subscription.filterId");case"user_id":return i("subscription.filterUserId");case"plan_id":return i("subscription.filterPlanId");case"status":return i("subscription.filterStatus");default:return s}}function Oh(s,i){return i(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Ah(s,i){switch(s){case"bound":return i("subscription.slotStatusBound");case"banned":return i("subscription.slotStatusBanned");default:return i("subscription.slotStatusPending")}}function Uh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Aj(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function Uj(){const s=Ct(),i=gn(),{t:o}=qe(),[d,p]=f.useState([]),[h,m]=f.useState(0),[y,j]=f.useState(1),[b,v]=f.useState("email"),[g,H]=f.useState(""),[X,ee]=f.useState(!0),[Z,z]=f.useState(""),[B,U]=f.useState(null),[A,P]=f.useState({}),[se,oe]=f.useState(null),[O,Y]=f.useState(null),[ae,fe]=f.useState([]),[w,R]=f.useState(0),[C,T]=f.useState(1),[te,S]=f.useState(!1),[$,E]=f.useState(""),[ce,K]=f.useState(null);function _(M){const ye=M==null?void 0:M.trim();ye&&s.push(`/user?email=${encodeURIComponent(ye)}`)}const F=f.useCallback(async(M=1,ye="",Oe="email")=>{ee(!0),z("");try{const je=ye.trim()?[{key:Oe,condition:Dj(Oe),value:ye.trim()}]:void 0,G=await C1(M,Mh,je);p(G.data),m(G.total),j(M)}catch(je){z(je instanceof Error?je.message:o("subscription.loadFailed"))}finally{ee(!1)}},[o]),de=f.useCallback(async(M,ye=1)=>{S(!0),E("");try{const Oe=await xx(ye,Dh,[{key:"subscription_id",condition:"=",value:String(M.id)}]);fe(Oe.data),R(Oe.total),T(ye)}catch(Oe){E(Oe instanceof Error?Oe.message:o("subscription.slotsLoadFailed"))}finally{S(!1)}},[o]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}const M=new URLSearchParams(i.search),Oe=[["user_id",M.get("user_id")],["id",M.get("id")],["plan_id",M.get("plan_id")],["email",M.get("email")],["status",M.get("status")]].find(([,je])=>je&&je.trim());if(Oe){const[je,G]=Oe,xe=G??"";v(je),H(xe),F(1,xe,je);return}F()},[F,i.search,s]);function ue(M){M.preventDefault(),F(1,g,b)}function _e(){if(H(""),i.search){s.replace("/subscription");return}F(1,"",b)}function ke(M){U(M),P({transfer_enable:String(fl(M.transfer_enable)),u:String(fl(M.u)),d:String(fl(M.d)),device_limit:M.device_limit===null?"":String(M.device_limit),speed_limit:M.speed_limit===null?"":String(M.speed_limit),expired_at:Ej(M.expired_at),status:M.status,auto_renewal:String(M.auto_renewal||0),remarks:M.remarks??""})}async function Ae(M){var ye,Oe;if(M.preventDefault(),!!B){oe(B.id);try{await T1({id:B.id,transfer_enable:gd(A.transfer_enable),u:gd(A.u),d:gd(A.d),device_limit:A.device_limit===""?null:Number(A.device_limit),speed_limit:A.speed_limit===""?null:Number(A.speed_limit),expired_at:Mj(A.expired_at),status:A.status,auto_renewal:Number(A.auto_renewal),remarks:A.remarks}),U(null),(ye=window.showToast)==null||ye.call(window,o("subscription.updateSuccess"),"success"),await F(y,g,b)}catch(je){(Oe=window.showToast)==null||Oe.call(window,je instanceof Error?je.message:o("subscription.saveFailed"),"error")}finally{oe(null)}}}function et(M){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:o("subscription.resetConfirm",{id:M.id}),onConfirm:async()=>{var Oe,je;oe(M.id);try{await E1(M.id),(Oe=window.showToast)==null||Oe.call(window,o("subscription.resetSuccess"),"success"),await F(y,g,b)}catch(G){(je=window.showToast)==null||je.call(window,G instanceof Error?G.message:o("subscription.resetFailed"),"error")}finally{oe(null)}}})}async function Re(M){var Oe;if(!M)return;const ye=await Zn(M);(Oe=window.showToast)==null||Oe.call(window,o(ye?"subscription.copySuccess":"common.copyFailed"),ye?"success":"error")}async function tt(M){var ye,Oe;K(M.id);try{let je=M.subscribe_url||null;if(je||(je=(await z1(M.id)).data,je&&p(xe=>xe.map(ve=>ve.id===M.id?{...ve,subscribe_url:je}:ve))),!je){(ye=window.showToast)==null||ye.call(window,o("common.copyFailed"),"error");return}await Re(je)}catch(je){(Oe=window.showToast)==null||Oe.call(window,je instanceof Error?je.message:o("common.copyFailed"),"error")}finally{K(null)}}function Wt(M){Y(M),fe([]),R(0),T(1),de(M,1)}function Ut(M=C){return O?de(O,M):Promise.resolve()}function aa(M){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var Oe,je;oe(M.id);try{await gx(M.id),(Oe=window.showToast)==null||Oe.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([Ut(),F(y,g,b)])}catch(G){(je=window.showToast)==null||je.call(window,G instanceof Error?G.message:o("subscription.unbindFailed"),"error")}finally{oe(null)}}})}function xt(M){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var Oe,je;oe(M.id);try{await bx(M.id),(Oe=window.showToast)==null||Oe.call(window,o("subscription.banSuccess"),"success"),await Promise.all([Ut(),F(y,g,b)])}catch(G){(je=window.showToast)==null||je.call(window,G instanceof Error?G.message:o("subscription.banFailed"),"error")}finally{oe(null)}}})}function na(M){const ye=M.device_limit&&M.device_limit>0?String(M.device_limit):o("subscription.unlimited"),Oe=!!(M.device_count||M.device_limit&&M.device_limit>0);return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:M.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:ye})]}),M.device_limit&&M.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(M.device_count/M.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),Oe?t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Wt(M),children:[t.jsx(Sd,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]}):null]})}function pt(M){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[fl(M.total_used)," / ",fl(M.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Aj(M)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:fl(M.u),download:fl(M.d)})})]})}function Vt(M){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.uuid,onClick:()=>Re(M.uuid),children:[t.jsx(wa,{size:14}),t.jsx("span",{className:"mono",children:M.uuid})]}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function Qt(M){return t.jsxs("div",{className:"subscription-link-stack",children:[Vt(M),M.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.subscribe_url,onClick:()=>void tt(M),disabled:ce===M.id,children:[t.jsx(wa,{size:14}),t.jsx("span",{className:"mono",children:M.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void tt(M),disabled:ce===M.id,children:[t.jsx(wa,{size:14}),t.jsx("span",{children:ce===M.id?o("common.processing"):o("subscription.colSubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function ea(M){return t.jsxs("div",{className:"row-actions subscription-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>ke(M),children:[t.jsx(At,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:se===M.id,onClick:()=>et(M),children:[t.jsx(Uo,{size:14}),o("subscription.resetSecret")]})]})}const Gt=Math.ceil(h/Mh),Rt=Math.ceil(w/Dh),ma=Gt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:y<=1||X,onClick:()=>void F(y-1,g,b),children:[t.jsx(hn,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:y,total:Gt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:y>=Gt||X,onClick:()=>void F(y+1,g,b),children:[o("common.next"),t.jsx(xn,{size:14})]})]}):null;return t.jsxs(Bt,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:h})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:X,onClick:()=>void F(y,g,b),children:[t.jsx(Nt,{size:16}),o(X?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ue,children:[t.jsx("select",{className:"config-input filter-select",value:b,onChange:M=>v(M.target.value),children:Tj.map(M=>t.jsx("option",{value:M,children:Oj(M,o)},M))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Go,{size:16}),t.jsx("input",{className:"config-input",value:g,onChange:M=>H(M.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(ls,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:_e,children:o("common.clearFilter")})]}),Z?t.jsx("div",{className:"form-error",children:Z}):null,X&&d.length===0?t.jsx(ht,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsxs("th",{children:[o("subscription.colPrimaryUuid")," / ",o("subscription.colSubscribeUrl")]}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",M.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:M.plan_name??"-"}),M.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>_(M.user_email),title:o("subscription.viewUser"),children:M.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:M.user_id}),M.plan_id?` - ${o("subscription.planId",{id:M.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${M.status}`,children:Oh(M.status,o)})}),t.jsx("td",{children:pt(M)}),t.jsx("td",{children:na(M)}),t.jsx("td",{children:Yn(M.expired_at,o("subscription.never"))}),t.jsx("td",{children:Qt(M)}),t.jsx("td",{children:Yn(M.updated_at,o("subscription.never"))}),t.jsx("td",{children:ea(M)})]},M.id)),!X&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(M=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",M.id]}),t.jsx("strong",{className:"subscription-plan-name",children:M.plan_name??"-"}),M.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>_(M.user_email),title:o("subscription.viewUser"),children:M.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${M.status}`,children:Oh(M.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),pt(M)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),na(M)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:Yn(M.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:Yn(M.updated_at,o("subscription.never"))})]})]}),t.jsx("div",{className:"subscription-card-link-block",children:Qt(M)}),ea(M)]},M.id)),!X&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),ma,O?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>Y(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:M=>M.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:O.id})}),t.jsx("p",{children:O.user_email??o("subscription.userId",{id:O.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>Y(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[$?t.jsx("div",{className:"form-error",children:$}):null,te&&ae.length===0?t.jsx(ht,{label:o("subscription.slotsLoading")}):null,t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[ae.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.uuid,onClick:()=>Re(M.uuid),children:[t.jsx(wa,{size:14}),t.jsx("span",{className:"mono",children:M.uuid})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${Uh(M.status)}`,children:Ah(M.status,o)})}),t.jsx("td",{children:M.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.hwid,onClick:()=>Re(M.hwid),children:[t.jsx(wa,{size:14}),t.jsx("span",{className:"mono",children:M.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:M.user_agent??"",children:M.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:M.last_ip??"-"}),t.jsx("small",{children:M.first_ip?o("subscription.firstIp",{ip:M.first_ip}):"-"})]}),t.jsx("td",{children:Yn(M.first_seen_at,"-")}),t.jsx("td",{children:Yn(M.last_seen_at,"-")}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===M.id,onClick:()=>aa(M),children:[t.jsx(Ho,{size:14}),o("subscription.unbind")]}),M.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===M.id,onClick:()=>xt(M),children:[t.jsx(Qn,{size:14}),o("subscription.ban")]}):null]})})]},M.id)),!te&&ae.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[ae.map(M=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${Uh(M.status)}`,children:Ah(M.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.uuid,onClick:()=>Re(M.uuid),children:[t.jsx(wa,{size:14}),t.jsx("span",{className:"mono",children:M.uuid})]})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),M.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.hwid,onClick:()=>Re(M.hwid),children:[t.jsx(wa,{size:14}),t.jsx("span",{className:"mono",children:M.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:M.last_ip??"-"}),t.jsx("small",{children:M.first_ip?o("subscription.firstIp",{ip:M.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:M.user_agent??"",children:M.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:Yn(M.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:Yn(M.last_seen_at,"-")})]})]}),t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===M.id,onClick:()=>aa(M),children:[t.jsx(Ho,{size:14}),o("subscription.unbind")]}),M.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===M.id,onClick:()=>xt(M),children:[t.jsx(Qn,{size:14}),o("subscription.ban")]}):null]})]},M.id)),!te&&ae.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),Rt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:C<=1||te,onClick:()=>void Ut(C-1),children:[t.jsx(hn,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:C,total:Rt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:C>=Rt||te,onClick:()=>void Ut(C+1),children:[o("common.next"),t.jsx(xn,{size:14})]})]}):null]})]})}):null,B?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>U(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:M=>M.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:B.id})}),t.jsx("p",{children:B.user_email??o("subscription.userId",{id:B.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>U(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ae,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:A.transfer_enable,onChange:M=>P(ye=>({...ye,transfer_enable:M.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:A.u,onChange:M=>P(ye=>({...ye,u:M.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:A.d,onChange:M=>P(ye=>({...ye,d:M.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:A.device_limit,onChange:M=>P(ye=>({...ye,device_limit:M.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:A.speed_limit,onChange:M=>P(ye=>({...ye,speed_limit:M.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:A.expired_at,onChange:M=>P(ye=>({...ye,expired_at:M.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:A.status,onChange:M=>P(ye=>({...ye,status:M.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:A.auto_renewal,onChange:M=>P(ye=>({...ye,auto_renewal:M.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:A.remarks,onChange:M=>P(ye=>({...ye,remarks:M.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>U(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:se===B.id,children:se===B.id?o("common.processing"):o("common.save")})]})]})]})}):null]})}const Rh=15,Rj=["email","user_id","hwid","last_ip"];function Eo(s){return s?new Date(s*1e3).toLocaleString():"-"}function Hj(s){return s==="user_id"?"=":"like"}function Lj(s,i){switch(s){case"email":return i("device.filterEmail");case"user_id":return i("device.filterUserId");case"hwid":return i("device.filterHwid");case"last_ip":return i("device.filterIp");default:return""}}function Hh(s,i){switch(s){case"bound":return i("device.statusBound");case"banned":return i("device.statusBanned");default:return i("device.statusPending")}}function Mo(s){return(s.online_ips??[]).join(", ")||"-"}function Do(s){return(s.online_nodes??[]).map(i=>`${i.node_type}#${i.node_id}`).join(", ")||"-"}function qj(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState([]),[p,h]=f.useState(0),[m,y]=f.useState(1),[j,b]=f.useState("email"),[v,g]=f.useState(""),[H,X]=f.useState(!0),[ee,Z]=f.useState(""),[z,B]=f.useState(null),[U,A]=f.useState(null),P=f.useCallback(async(C=1,T="",te="email")=>{X(!0),Z("");try{const S=T.trim()?[{key:te,condition:Hj(te),value:T.trim()}]:void 0,$=await xx(C,Rh,S);d($.data),h($.total),y(C)}catch(S){Z(S instanceof Error?S.message:i("device.loadFailed"))}finally{X(!1)}},[i]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}P()},[P,s]);function se(C){C.preventDefault(),P(1,v,j)}function oe(){g(""),P(1,"",j)}async function O(C){var te;if(!C.hwid)return;const T=await Zn(C.hwid);(te=window.showToast)==null||te.call(window,i(T?"device.copySuccess":"common.copyFailed"),T?"success":"error")}async function Y(C){var te;const T=await Zn(C.uuid);(te=window.showToast)==null||te.call(window,i(T?"device.copyUuidSuccess":"common.copyFailed"),T?"success":"error")}function ae(C){var T;(T=window.showConfirm)==null||T.call(window,{message:i("device.unbindConfirm"),onConfirm:async()=>{var te,S;B(C.id);try{await gx(C.id),(te=window.showToast)==null||te.call(window,i("device.unbindSuccess"),"success"),await P(m,v,j)}catch($){(S=window.showToast)==null||S.call(window,$ instanceof Error?$.message:i("device.unbindFailed"),"error")}finally{B(null)}}})}function fe(C){var T;(T=window.showConfirm)==null||T.call(window,{message:i("device.banConfirm"),onConfirm:async()=>{var te,S;B(C.id);try{await bx(C.id),(te=window.showToast)==null||te.call(window,i("device.banSuccess"),"success"),await P(m,v,j)}catch($){(S=window.showToast)==null||S.call(window,$ instanceof Error?$.message:i("device.banFailed"),"error")}finally{B(null)}}})}function w(C){var T;(T=window.showConfirm)==null||T.call(window,{message:i("device.resetConfirm",{user:C.user_email??`#${C.user_id}`}),onConfirm:async()=>{var te,S;A(C.user_id);try{await M1(C.user_id),(te=window.showToast)==null||te.call(window,i("device.resetSuccess"),"success"),await P(m,v,j)}catch($){(S=window.showToast)==null||S.call(window,$ instanceof Error?$.message:i("device.resetFailed"),"error")}finally{A(null)}}})}const R=Math.ceil(p/Rh);return t.jsxs(Bt,{title:i("device.title"),subtitle:i("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("device.heading")}),t.jsx("p",{children:i("device.total",{count:p})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:H,onClick:()=>void P(m,v,j),children:[t.jsx(Nt,{size:16}),i(H?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:se,children:[t.jsx("select",{className:"config-input filter-select",value:j,onChange:C=>b(C.target.value),children:Rj.map(C=>t.jsx("option",{value:C,children:Lj(C,i)},C))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Go,{size:16}),t.jsx("input",{className:"config-input",value:v,onChange:C=>g(C.target.value),placeholder:i("device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(ls,{size:16}),i("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:oe,children:i("device.clear")})]}),ee?t.jsx("div",{className:"form-error",children:ee}):null,H&&o.length===0?t.jsx(ht,{label:i("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[o.map(C=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:C.user_email??"-"}),t.jsxs("small",{children:["ID: ",C.user_id," · ",C.plan_name??"-"]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:Hh(C.status,i)}),t.jsxs("span",{className:`online-badge ${C.is_online?"online":"offline"}`,children:[C.is_online?t.jsx(ch,{size:14}):t.jsx(rh,{size:14}),C.is_online?i("device.online"):i("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:i("device.boundLimit")}),t.jsxs("span",{children:[C.user_device_count," / ",C.user_device_limit&&C.user_device_limit>0?C.user_device_limit:i("device.unlimited")]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:i("device.uuid")}),t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:C.uuid,onClick:()=>Y(C),children:[t.jsx(wa,{size:14}),t.jsx("span",{className:"mono",children:C.uuid})]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:i("device.hwid")}),C.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:C.hwid,onClick:()=>O(C),children:[t.jsx(wa,{size:14}),t.jsx("span",{className:"mono",children:C.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:i("device.ip")}),t.jsxs("span",{className:"mono",title:`${C.last_ip??"-"} / ${C.first_ip??"-"}`,children:[C.last_ip??"-",C.first_ip?` (${C.first_ip})`:""]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:i("device.connection")}),t.jsxs("small",{title:`${Mo(C)} · ${Do(C)}`,children:[i("device.onlineIps"),": ",Mo(C)," · ",i("device.onlineNodes"),": ",Do(C)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:i("device.lastSeen")}),t.jsx("span",{children:Eo(C.last_seen_at)})]})]}),t.jsxs("div",{className:"mobile-device-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:z===C.id,onClick:()=>ae(C),children:[t.jsx(Ho,{size:14}),i("device.unbind")]}),C.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:z===C.id,onClick:()=>fe(C),children:[t.jsx(Qn,{size:14}),i("device.ban")]}):null,t.jsxs("button",{className:"mini-button",type:"button",disabled:U===C.user_id,onClick:()=>w(C),children:[t.jsx(ih,{size:14}),i("device.resetUser")]})]})]},C.id)),!H&&o.length===0?t.jsx("div",{className:"empty-state",children:i("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("device.user")}),t.jsx("th",{children:i("device.plan")}),t.jsx("th",{children:i("device.boundLimit")}),t.jsx("th",{children:i("device.status")}),t.jsx("th",{children:i("device.connection")}),t.jsx("th",{children:i("device.uuid")}),t.jsx("th",{children:i("device.hwid")}),t.jsx("th",{children:i("device.client")}),t.jsx("th",{children:i("device.ip")}),t.jsx("th",{children:i("device.firstSeen")}),t.jsx("th",{children:i("device.lastSeen")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(C=>t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("strong",{children:C.user_email??"-"}),t.jsxs("small",{children:["ID: ",C.user_id]})]}),t.jsxs("td",{children:[t.jsx("strong",{children:C.plan_name??"-"}),C.user_plan_id?t.jsxs("small",{children:["#",C.user_plan_id]}):null]}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[C.user_device_count," / ",C.user_device_limit&&C.user_device_limit>0?C.user_device_limit:i("device.unlimited")]})}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:Hh(C.status,i)})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${C.is_online?"online":"offline"}`,children:[C.is_online?t.jsx(ch,{size:14}):t.jsx(rh,{size:14}),C.is_online?i("device.online"):i("device.offline")]}),t.jsxs("small",{title:Mo(C),children:[i("device.onlineIps"),": ",Mo(C)]}),t.jsxs("small",{title:Do(C),children:[i("device.onlineNodes"),": ",Do(C)]}),t.jsxs("small",{children:[i("device.lastOnline"),": ",Eo(C.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-hwid",children:t.jsxs("button",{className:"copy-value",type:"button",title:C.uuid,onClick:()=>Y(C),children:[t.jsx(wa,{size:14}),t.jsx("span",{className:"mono",children:C.uuid})]})}),t.jsx("td",{className:"device-hwid",children:C.hwid?t.jsxs("button",{className:"copy-value",type:"button",title:C.hwid,onClick:()=>O(C),children:[t.jsx(wa,{size:14}),t.jsx("span",{className:"mono",children:C.hwid})]}):"-"}),t.jsx("td",{className:"device-client",children:t.jsx("small",{title:C.user_agent??"",children:C.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:C.last_ip??"-"}),t.jsx("small",{children:C.first_ip?`${i("device.firstIp")}: ${C.first_ip}`:"-"})]}),t.jsx("td",{children:Eo(C.first_seen_at)}),t.jsx("td",{children:Eo(C.last_seen_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:z===C.id,onClick:()=>ae(C),children:[t.jsx(Ho,{size:14}),i("device.unbind")]}),C.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:z===C.id,onClick:()=>fe(C),children:[t.jsx(Qn,{size:14}),i("device.ban")]}):null,t.jsxs("button",{className:"mini-button",type:"button",disabled:U===C.user_id,onClick:()=>w(C),children:[t.jsx(ih,{size:14}),i("device.resetUser")]})]})})]},C.id)),!H&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:12,children:t.jsx("div",{className:"empty-state",children:i("device.empty")})})}):null]})]})}),R>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:m<=1||H,onClick:()=>void P(m-1,v,j),children:[t.jsx(hn,{size:14}),i("device.previous")]}),t.jsx("span",{className:"page-info",children:i("device.page",{page:m,total:R})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:m>=R||H,onClick:()=>void P(m+1,v,j),children:[i("device.next"),t.jsx(xn,{size:14})]})]}):null]})]})}const Bj={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function Gd(s){if(Array.isArray(s))return s.map(i=>Number(i)).filter(i=>Number.isFinite(i)&&i>0);if(typeof s=="string")try{return Gd(JSON.parse(s))}catch{return s.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i)&&i>0)}return[]}function Lh(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:Gd(s.plan_id)}:{...Bj}}function bd(s){const i=s.trim();if(!i)return"";try{return new URL(i.includes("://")?i:`https://${i}`).host.toLowerCase()}catch{return i.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function Gj(s){const i=Number(s);if(!i)return"-";const o=new Date(i*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function Yj(s){return Number(s)===1}function qh(s,i){if(!s.length)return"All plans";const o=new Map(i.map(d=>[Number(d.id),d.name]));return s.map(d=>o.get(d)??`#${d}`).join(", ")}function $n(s,i=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,i?t.jsx("small",{children:"*"}):null]})}function $j(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,y]=f.useState(null),[j,b]=f.useState(!0),[v,g]=f.useState(!1),[H,X]=f.useState(null),[ee,Z]=f.useState(""),z=f.useCallback(async()=>{b(!0),Z("");try{const[O,Y]=await Promise.all([Q1(),xl()]);d(O),h(Y)}catch(O){Z(O instanceof Error?O.message:i("webcon.toastLoadFailed"))}finally{b(!1)}},[i]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}z()},[z,s]);const B=f.useMemo(()=>p.map(O=>({id:Number(O.id),name:O.name})),[p]);function U(O,Y){y(ae=>ae&&{...ae,[O]:Y})}function A(O,Y){y(ae=>{if(!ae)return ae;const fe=Y?Array.from(new Set([...ae.plan_ids,O])):ae.plan_ids.filter(w=>w!==O);return{...ae,plan_ids:fe}})}async function P(O){var ae,fe;if(O.preventDefault(),!m)return;const Y=bd(m.domain);g(!0),Z("");try{await X1({id:m.id,email:m.email.trim(),domain:Y,title:m.title.trim(),description:m.description.trim()||null,logo:m.logo.trim()||null,background_url:m.background_url.trim()||null,custom_html:m.custom_html||null,plan_ids:m.plan_ids,plan_id:m.plan_ids}),y(null),(ae=window.showToast)==null||ae.call(window,i("webcon.toastSaveSuccess"),"success"),await z()}catch(w){const R=w instanceof Error?w.message:i("webcon.toastSaveFailed");Z(R),(fe=window.showToast)==null||fe.call(window,R,"error")}finally{g(!1)}}async function se(O){var Y,ae;X(O.id);try{await K1(O.id),(Y=window.showToast)==null||Y.call(window,i("webcon.toastToggleSuccess"),"success"),await z()}catch(fe){const w=fe instanceof Error?fe.message:i("webcon.toastToggleFailed");Z(w),(ae=window.showToast)==null||ae.call(window,w,"error")}finally{X(null)}}function oe(O){var Y;(Y=window.showConfirm)==null||Y.call(window,{message:i("webcon.deleteConfirm"),onConfirm:async()=>{var ae,fe;X(O.id),Z("");try{await Z1(O.id),(ae=window.showToast)==null||ae.call(window,i("webcon.toastDeleteSuccess"),"success"),await z()}catch(w){const R=w instanceof Error?w.message:i("webcon.toastDeleteFailed");Z(R),(fe=window.showToast)==null||fe.call(window,R,"error")}finally{X(null)}}})}return t.jsxs(Bt,{title:i("webcon.title"),subtitle:i("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("webcon.heading")}),t.jsx("p",{children:i("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:j,onClick:()=>void z(),children:[t.jsx(Nt,{size:16}),i(j?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>y(Lh()),children:[t.jsx(_a,{size:16}),i("webcon.add")]})]})]}),ee?t.jsx("div",{className:"form-error",children:ee}):null,j&&o.length===0?t.jsx(ht,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("webcon.colId")}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Staff owner"}),t.jsx("th",{children:i("webcon.colDomain")}),t.jsx("th",{children:"Landing"}),t.jsx("th",{children:"Plans"}),t.jsx("th",{children:"Created"}),t.jsx("th",{children:i("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(O=>{var ae;const Y=Gd(O.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",O.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${Yj(O.status)?"active":""}`,type:"button",disabled:H===O.id,onClick:()=>void se(O),"aria-label":"Toggle webcon status",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:O.email??"-"}),t.jsx("small",{children:Number(O.staff)===1?"is_staff enabled":"user is not marked staff"})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:O.domain}),t.jsxs("small",{children:["/",String(((ae=window.settings)==null?void 0:ae.secure_path)??"admin"),"/webcon"]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:O.title||"-"}),t.jsx("small",{children:O.description||"No description"}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(gv,{size:13}),O.logo?"Logo":"No logo"]}),t.jsxs("span",{children:[t.jsx(os,{size:13}),O.background_url?"Background":"No background"]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:qh(Y,B)}),t.jsx("small",{children:Y.length?`${Y.length} selected`:"not restricted"})]})}),t.jsx("td",{children:Gj(O.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>y(Lh(O)),children:[t.jsx(At,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:H===O.id,onClick:()=>oe(O),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},O.id)}),!j&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("webcon.noWebcon")})})}):null]})]})})}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>y(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:O=>O.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("webcon.editTitle"):i("webcon.newTitle")}),t.jsx("p",{children:m.domain||"Create a staff landing domain"})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.closeMenu"),onClick:()=>y(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:P,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[$n("Staff owner email",!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:m.email,onChange:O=>U("email",O.target.value),placeholder:"staff@example.com"})]}),t.jsxs("label",{className:"webcon-field",children:[$n("Domain",!0),t.jsx("input",{className:"config-input",required:!0,value:m.domain,onChange:O=>U("domain",O.target.value),onBlur:O=>U("domain",bd(O.target.value)),placeholder:"webcon.example.com"}),t.jsx("span",{className:"webcon-help",children:"Store only the host. Do not include path/query."})]}),t.jsxs("label",{className:"webcon-field",children:[$n("Landing title",!0),t.jsx("input",{className:"config-input",required:!0,value:m.title,onChange:O=>U("title",O.target.value),placeholder:"ZicBoard Partner"})]}),t.jsxs("label",{className:"webcon-field",children:[$n("Description"),t.jsx("input",{className:"config-input",value:m.description,onChange:O=>U("description",O.target.value),placeholder:"Short landing page description"})]}),t.jsxs("label",{className:"webcon-field",children:[$n("Logo URL"),t.jsx("input",{className:"config-input",type:"url",value:m.logo,onChange:O=>U("logo",O.target.value),placeholder:"https://example.com/logo.png"})]}),t.jsxs("label",{className:"webcon-field",children:[$n("Background URL"),t.jsx("input",{className:"config-input",type:"url",value:m.background_url,onChange:O=>U("background_url",O.target.value),placeholder:"https://example.com/background.jpg"})]}),t.jsxs("div",{className:"webcon-field full",children:[$n("Allowed plans"),t.jsxs("div",{className:"webcon-plan-picker",children:[B.map(O=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:m.plan_ids.includes(O.id),onChange:Y=>A(O.id,Y.target.checked)}),t.jsx("span",{children:O.name})]},O.id)),B.length===0?t.jsx("span",{className:"webcon-help",children:"No plans loaded."}):null]}),t.jsx("span",{className:"webcon-help",children:"Leave empty to allow all visible plans for this webcon domain."})]}),t.jsxs("label",{className:"webcon-field full",children:[$n("Custom HTML"),t.jsx("textarea",{className:"config-input",rows:5,value:m.custom_html,onChange:O=>U("custom_html",O.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:m.logo?t.jsx("img",{src:m.logo,alt:""}):t.jsx(kv,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:m.title||"Landing title"}),t.jsx("span",{children:bd(m.domain)||"webcon.example.com"}),t.jsxs("span",{children:[t.jsx(Ld,{size:12})," ",qh(m.plan_ids,B)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>y(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Sa,{size:16}),i(v?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Bh(s){return new Date(s*1e3).toLocaleString("vi-VN")}function yd(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function Vj(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,y]=f.useState(!0),[j,b]=f.useState(!1),[v,g]=f.useState(""),[H,X]=f.useState(""),ee=f.useCallback(async()=>{y(!0),g("");try{d(await O1())}catch(U){g(U instanceof Error?U.message:i("notice.loadFailed"))}finally{y(!1)}},[i]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}ee()},[ee,s]);async function Z(U){var A,P;if(U.preventDefault(),!!p){b(!0),g(""),X("");try{const se=p.tags?p.tags.split(",").map(oe=>oe.trim()).filter(Boolean):[];await A1({id:p.id,title:p.title,content:p.content,img_url:p.img_url||null,tags:se.length?se:null}),h(null),(A=window.showToast)==null||A.call(window,i("notice.saveSuccess"),"success"),await ee()}catch(se){(P=window.showToast)==null||P.call(window,se instanceof Error?se.message:i("notice.saveFailed"),"error")}finally{b(!1)}}}async function z(U){var A;try{await R1(U),await ee()}catch(P){(A=window.showToast)==null||A.call(window,P instanceof Error?P.message:i("notice.toggleFailed"),"error")}}async function B(U){var A;(A=window.showConfirm)==null||A.call(window,{message:i("notice.deleteConfirm"),onConfirm:async()=>{var P,se;try{await U1(U),(P=window.showToast)==null||P.call(window,i("notice.deleteSuccess"),"success"),await ee()}catch(oe){(se=window.showToast)==null||se.call(window,oe instanceof Error?oe.message:i("notice.deleteFailed"),"error")}}})}return t.jsxs(Bt,{title:i("notice.title"),subtitle:i("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("notice.heading")}),t.jsxs("p",{children:[o.length," ",i("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:ee,disabled:m,children:[t.jsx(Nt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(yd()),children:[t.jsx(_a,{size:16}),i("notice.addNotice")]})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,H?t.jsx("div",{className:"form-success",children:H}):null,m&&o.length===0?t.jsx(ht,{label:i("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("notice.titleField")}),t.jsx("th",{children:i("notice.show")}),t.jsx("th",{children:i("notice.tags")}),t.jsx("th",{children:i("notice.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(U=>{var A;return t.jsxs("tr",{children:[t.jsx("td",{children:U.id}),t.jsx("td",{children:t.jsx("strong",{children:U.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void z(U.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((A=U.tags)==null?void 0:A.map((P,se)=>t.jsx("span",{className:"tag",children:P},se)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:Bh(U.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>h(yd(U)),children:[t.jsx(At,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void B(U.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},U.id)}),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(U=>t.jsxs("div",{className:`notice-mobile-card ${U.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",U.id]})}),t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void z(U.id),"aria-label":U.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:U.title}),t.jsx("div",{className:"notice-tags",children:U.tags&&U.tags.length>0?U.tags.map((A,P)=>t.jsx("span",{className:"tag-badge",children:A},P)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[i("notice.created"),": ",Bh(U.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>h(yd(U)),children:[t.jsx(At,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void B(U.id),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},U.id)),!m&&o.length===0?t.jsx("div",{className:"empty-state",children:i("notice.noNotices")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?i("notice.editNotice"):i("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Z,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:U=>h({...p,title:U.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:p.content,onChange:U=>h({...p,content:U.target.value}),placeholder:i("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:p.img_url,onChange:U=>h({...p,img_url:U.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.tags")}),t.jsx("input",{className:"config-input",value:p.tags,onChange:U=>h({...p,tags:U.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Sa,{size:16}),i(j?"notice.saving":"common.save")]})]})]})]})}):null]})}function vd(s){return new Date(s*1e3).toLocaleString("vi-VN")}const Gh=(s,i)=>({0:{label:i("ticket.statusOpen"),cls:"enabled"},1:{label:i("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},jd=(s,i)=>({0:i("ticket.levelLow"),1:i("ticket.levelMedium"),2:i("ticket.levelHigh")})[s]||String(s);function Qj(){var w;const s=Ct(),{t:i}=qe(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,y]=f.useState(!1),[j,b]=f.useState(null),[v,g]=f.useState(""),[H,X]=f.useState(!0),[ee,Z]=f.useState(!1),[z,B]=f.useState(""),U=f.useRef(null),[A,P]=f.useState([]),[se,oe]=f.useState(null),O=f.useCallback(async()=>{X(!0),B("");try{d(await H1())}catch(R){B(R instanceof Error?R.message:"Load failed")}finally{X(!1)}},[]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}O(),xl().then(R=>{R&&P(R)}).catch(()=>{})},[O,s]),f.useEffect(()=>{var R;(R=U.current)==null||R.scrollIntoView({behavior:"smooth"})},[p]);async function Y(R){var C;b(R),g(""),h(null),oe(null),y(!0);try{const T=await mh(R);if(h(T),T&&T.user_id)try{const te=await hx(T.user_id);te&&te.data&&oe(te.data)}catch(te){console.error("Failed to load user info:",te)}}catch{(C=window.showToast)==null||C.call(window,"Failed to load message thread","error")}finally{y(!1)}}async function ae(R){var C,T;if(R.preventDefault(),!(!j||!v.trim())){Z(!0),B("");try{await L1(j,v),g(""),(C=window.showToast)==null||C.call(window,"Reply sent!","success");try{const te=await mh(j);h(te)}catch{}await O()}catch(te){(T=window.showToast)==null||T.call(window,te instanceof Error?te.message:"Reply failed","error")}finally{Z(!1)}}}async function fe(R){var C;(C=window.showConfirm)==null||C.call(window,{message:"Close this ticket?",onConfirm:async()=>{var T,te;B("");try{await q1(R),(T=window.showToast)==null||T.call(window,"Ticket closed!","success"),j===R&&(b(null),h(null)),await O()}catch(S){B(S instanceof Error?S.message:"Close failed"),(te=window.showToast)==null||te.call(window,S instanceof Error?S.message:"Close failed","error")}}})}return t.jsxs(Bt,{title:i("ticket.title"),subtitle:i("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:O,disabled:H,children:[t.jsx(Nt,{size:16}),i("common.refresh")]})})]}),z?t.jsx("div",{className:"form-error",children:z}):null,H&&o.length===0?t.jsx(ht,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("ticket.id")}),t.jsx("th",{children:i("ticket.subject")}),t.jsx("th",{children:i("ticket.user")}),t.jsx("th",{children:i("ticket.level")}),t.jsx("th",{children:i("ticket.status")}),t.jsx("th",{children:i("ticket.replyStatus")}),t.jsx("th",{children:i("ticket.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(R=>{const C=Gh(R.status,i);return t.jsxs("tr",{children:[t.jsx("td",{children:R.id}),t.jsx("td",{children:t.jsx("strong",{children:R.subject})}),t.jsxs("td",{children:["#",R.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:jd(R.level,i)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${C.cls}`,children:C.label})}),t.jsx("td",{children:R.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:vd(R.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:R.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Y(R.id),children:[t.jsx(Wi,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void fe(R.id),children:[t.jsx(kd,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Y(R.id),children:[t.jsx(Wi,{size:14}),i("ticket.viewHistory")]})})})]},R.id)}),!H&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(R=>{const C=Gh(R.status,i);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:R.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:jd(R.level,i)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.id"),": ",t.jsxs("strong",{children:["#",R.id]})]}),t.jsx("span",{className:`status-pill ${C.cls}`,children:C.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.user"),": ",t.jsxs("strong",{children:["#",R.user_id]})]}),t.jsx("span",{children:R.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[i("ticket.created"),": ",t.jsx("small",{children:vd(R.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:R.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Y(R.id),children:[t.jsx(Wi,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void fe(R.id),children:[t.jsx(kd,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Y(R.id),children:[t.jsx(Wi,{size:14}),i("ticket.viewHistory")]})})]},R.id)}),!H&&o.length===0?t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")}):null]}),j!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p?`${i("ticket.ticketDetail")}: ${p.subject}`:`${i("ticket.ticketDetail")} #${j}`}),t.jsxs("p",{children:[i("ticket.user"),": #",p==null?void 0:p.user_id," | ",i("ticket.level"),": ",p!=null?jd(p.level,i):i("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{b(null),h(null)},children:t.jsx(lt,{size:18})})]}),se&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("common.email")}),t.jsx("span",{className:"details-value",title:se.email,children:se.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((w=A.find(R=>R.id===se.plan_id))==null?void 0:w.name)||i("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[Na(se.balance)," ",i("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:se.expired_at?new Date(se.expired_at*1e3).toLocaleDateString("vi-VN"):i("ticket.never")})]})]}),m?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(ht,{label:i("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[p!=null&&p.message&&p.message.length>0?p.message.map(R=>{const C=R.is_me;return t.jsxs("div",{className:`chat-message ${C?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:R.message}),t.jsxs("div",{className:"chat-meta",children:[C?i("ticket.staff"):`${i("ticket.user")} #${R.user_id}`," • ",vd(R.created_at)]})]},R.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:i("ticket.noLogs")}),t.jsx("div",{ref:U})]}),(p==null?void 0:p.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ae,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:i("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:v,onChange:R=>g(R.target.value),placeholder:i("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:ee||!v.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(ix,{size:14}),ee?"":i("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:i("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Yh(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const $h={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function Vh(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function Xj(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,y]=f.useState(!0),[j,b]=f.useState(!1),[v,g]=f.useState(""),[H,X]=f.useState(""),ee=f.useCallback(async()=>{y(!0),g("");try{d(await B1())}catch(A){g(A instanceof Error?A.message:i("knowledge.loadFailed"))}finally{y(!1)}},[i]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}ee()},[ee,s]);async function Z(A){var P;try{const se=await G1(A.id);h(Vh(se))}catch(se){(P=window.showToast)==null||P.call(window,se instanceof Error?se.message:i("knowledge.detailFailed"),"error")}}async function z(A){var P,se;if(A.preventDefault(),!!p){b(!0),g(""),X("");try{await Y1({id:p.id,category:p.category,title:p.title,body:p.body,language:p.language||null,sort:p.sort?Number(p.sort):null}),h(null),(P=window.showToast)==null||P.call(window,i("knowledge.saveSuccess"),"success"),await ee()}catch(oe){(se=window.showToast)==null||se.call(window,oe instanceof Error?oe.message:i("knowledge.saveFailed"),"error")}finally{b(!1)}}}async function B(A){var P;try{await V1(A),await ee()}catch(se){(P=window.showToast)==null||P.call(window,se instanceof Error?se.message:i("knowledge.toggleFailed"),"error")}}async function U(A){var P;(P=window.showConfirm)==null||P.call(window,{message:i("knowledge.deleteConfirm"),onConfirm:async()=>{var se,oe;try{await $1(A),(se=window.showToast)==null||se.call(window,i("knowledge.deleteSuccess"),"success"),await ee()}catch(O){(oe=window.showToast)==null||oe.call(window,O instanceof Error?O.message:i("knowledge.deleteFailed"),"error")}}})}return t.jsxs(Bt,{title:i("knowledge.title"),subtitle:i("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",i("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:ee,disabled:m,children:[t.jsx(Nt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(Vh()),children:[t.jsx(_a,{size:16}),i("knowledge.addArticle")]})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,H?t.jsx("div",{className:"form-success",children:H}):null,m&&o.length===0?t.jsx(ht,{label:i("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("knowledge.category")}),t.jsx("th",{children:i("knowledge.titleField")}),t.jsx("th",{children:i("knowledge.language")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("knowledge.sort")}),t.jsx("th",{children:i("knowledge.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:A.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:A.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:A.title})}),t.jsx("td",{children:A.language&&$h[A.language]||A.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${A.show?"active":""}`,type:"button",onClick:()=>void B(A.id),"aria-label":i("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:A.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:Yh(A.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Z(A),children:[t.jsx(At,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void U(A.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},A.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(A=>t.jsxs("div",{className:`knowledge-mobile-card ${A.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",A.id]}),A.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",A.sort]})]}),t.jsx("button",{className:`admin-switch ${A.show?"active":""}`,type:"button",onClick:()=>void B(A.id),"aria-label":A.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:A.title}),t.jsxs("div",{className:"card-meta",children:[A.category&&t.jsx("span",{className:"category-badge",children:A.category}),A.language&&t.jsx("span",{className:"lang-badge",children:$h[A.language]||A.language})]}),t.jsxs("p",{className:"created-time",children:[i("knowledge.created"),": ",Yh(A.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void Z(A),children:[t.jsx(At,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void U(A.id),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},A.id)),!m&&o.length===0?t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?i("knowledge.editArticle"):i("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:z,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:p.category,onChange:A=>h({...p,category:A.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:A=>h({...p,title:A.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:p.body,onChange:A=>h({...p,body:A.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:p.language,onChange:A=>h({...p,language:A.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:i("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:i("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:i("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:i("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:i("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:i("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:i("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:p.sort,onChange:A=>h({...p,sort:A.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Sa,{size:16}),i(j?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function Zj(){const s=Ct(),{t:i}=qe(),[o,d]=f.useState(null),[p,h]=f.useState(null),[m,y]=f.useState(null),[j,b]=f.useState(""),[v,g]=f.useState(!0),[H,X]=f.useState(""),ee=f.useCallback(async()=>{g(!0),X("");try{const[z,B,U,A]=await Promise.all([J1().catch(()=>({data:{}})),P1().catch(()=>({data:{}})),I1().catch(()=>({data:[]})),e0().catch(()=>({data:""}))]);d(z.data),h(B.data),y(U.data),b(typeof A.data=="string"?A.data:"")}catch(z){X(z instanceof Error?z.message:i("queue.toastLoadFailed"))}finally{g(!1)}},[i]);f.useEffect(()=>{if(!zt()){s.replace("/login");return}ee()},[ee,s]);function Z(z,B,U){return z?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[U," ",B]}),t.jsx("div",{className:"queue-grid",children:Object.entries(z).map(([A,P])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:A}),t.jsx("strong",{children:typeof P=="object"?JSON.stringify(P):String(P??"—")})]},A))})]}):null}return t.jsxs(Bt,{title:i("queue.title"),subtitle:i("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("queue.heading")}),t.jsx("p",{children:i("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:ee,disabled:v,children:[t.jsx(Nt,{size:16}),i("common.refresh")]})})]}),H?t.jsx("div",{className:"form-error",children:H}):null,v?t.jsx(ht,{label:i("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[Z(o,i("queue.systemStatus"),t.jsx(Ro,{size:18})),Z(p,i("queue.queueStats"),t.jsx(Ld,{size:18})),m&&m.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(sv,{size:18})," ",i("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(m,null,2)})]}):null,j?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(fv,{size:18})," ",i("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:j})]}):null]})]})}const Kj=f.createContext(null);function Jj({children:s}){const[i,o]=f.useState([]),[d,p]=f.useState(null),h=f.useCallback((b,v="success")=>{const g=Math.random().toString(36).substring(2,9);o(H=>[...H,{id:g,message:b,type:v}]),setTimeout(()=>{o(H=>H.filter(X=>X.id!==g))},5e3)},[]),m=f.useCallback(b=>{p(b)},[]);f.useEffect(()=>{typeof window<"u"&&(window.showToast=h,window.showConfirm=m)},[h,m]);const y=async()=>{if(d){try{await d.onConfirm()}catch(b){console.error("Error in onConfirm:",b)}p(null)}},j=()=>{d&&(d.onCancel&&d.onCancel(),p(null))};return t.jsxs(Kj.Provider,{value:{showToast:h,showConfirm:m},children:[s,t.jsx("div",{className:"toast-container",children:i.map(b=>{let v=bv;return b.type==="success"&&(v=nx),b.type==="error"&&(v=dv),b.type==="warning"&&(v=Cd),t.jsxs("div",{className:`toast-card toast-${b.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(v,{size:18})}),t.jsx("div",{className:"toast-message",children:b.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(g=>g.filter(H=>H.id!==b.id)),children:t.jsx(lt,{size:14})})]},b.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:j,children:t.jsxs("div",{className:"confirm-card",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(Cd,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:j,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:y,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Fj({children:s}){return t.jsx(d0,{children:t.jsx(Jj,{children:s})})}function Wj(){return t.jsx(Fj,{children:t.jsxs($y,{children:[t.jsx(vt,{path:"/login",element:t.jsx(u0,{})}),t.jsx(vt,{path:"/dashboard",element:t.jsx(j0,{})}),t.jsx(vt,{path:"/config/system",element:t.jsx(T0,{})}),t.jsx(vt,{path:"/config/payment",element:t.jsx(D0,{})}),t.jsx(vt,{path:"/config/theme",element:t.jsx(U0,{})}),t.jsx(vt,{path:"/server/manage",element:t.jsx(oj,{})}),t.jsx(vt,{path:"/server/group",element:t.jsx(rj,{})}),t.jsx(vt,{path:"/server/route",element:t.jsx(uj,{})}),t.jsx(vt,{path:"/plan",element:t.jsx(hj,{})}),t.jsx(vt,{path:"/order",element:t.jsx(bj,{})}),t.jsx(vt,{path:"/coupon",element:t.jsx(yj,{})}),t.jsx(vt,{path:"/giftcard",element:t.jsx(jj,{})}),t.jsx(vt,{path:"/user",element:t.jsx(zj,{})}),t.jsx(vt,{path:"/subscription",element:t.jsx(Uj,{})}),t.jsx(vt,{path:"/device",element:t.jsx(qj,{})}),t.jsx(vt,{path:"/webcon",element:t.jsx($j,{})}),t.jsx(vt,{path:"/notice",element:t.jsx(Vj,{})}),t.jsx(vt,{path:"/ticket",element:t.jsx(Qj,{})}),t.jsx(vt,{path:"/knowledge",element:t.jsx(Xj,{})}),t.jsx(vt,{path:"/queue",element:t.jsx(Zj,{})}),t.jsx(vt,{path:"/",element:t.jsx(Jf,{to:"/dashboard",replace:!0})}),t.jsx(vt,{path:"*",element:t.jsx(Jf,{to:"/dashboard",replace:!0})})]})})}Wb.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsx(Fy,{children:t.jsx(Wj,{})})}));
