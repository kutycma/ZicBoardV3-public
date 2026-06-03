function Gb(s,i){for(var o=0;o<i.length;o++){const d=i[o];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in s)){const x=Object.getOwnPropertyDescriptor(d,p);x&&Object.defineProperty(s,p,x.get?x:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const x of p)if(x.type==="childList")for(const f of x.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&d(f)}).observe(document,{childList:!0,subtree:!0});function o(p){const x={};return p.integrity&&(x.integrity=p.integrity),p.referrerPolicy&&(x.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?x.credentials="include":p.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function d(p){if(p.ep)return;p.ep=!0;const x=o(p);fetch(p.href,x)}})();function Yb(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Pc={exports:{}},Pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;function $b(){if(Af)return Pi;Af=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(d,p,x){var f=null;if(x!==void 0&&(f=""+x),p.key!==void 0&&(f=""+p.key),"key"in p){x={};for(var y in p)y!=="key"&&(x[y]=p[y])}else x=p;return p=x.ref,{$$typeof:s,type:d,key:f,ref:p!==void 0?p:null,props:x}}return Pi.Fragment=i,Pi.jsx=o,Pi.jsxs=o,Pi}var Uf;function Vb(){return Uf||(Uf=1,Pc.exports=$b()),Pc.exports}var t=Vb(),Ic={exports:{}},Ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf;function Qb(){if(Rf)return Ae;Rf=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),f=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),q=Symbol.iterator;function V(S){return S===null||typeof S!="object"?null:(S=q&&S[q]||S["@@iterator"],typeof S=="function"?S:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,C={};function B(S,X,de){this.props=S,this.context=X,this.refs=C,this.updater=de||ee}B.prototype.isReactComponent={},B.prototype.setState=function(S,X){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,X,"setState")},B.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function A(){}A.prototype=B.prototype;function D(S,X,de){this.props=S,this.context=X,this.refs=C,this.updater=de||ee}var I=D.prototype=new A;I.constructor=D,Z(I,B.prototype),I.isPureReactComponent=!0;var ie=Array.isArray;function re(){}var T={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function ne(S,X,de){var ue=de.ref;return{$$typeof:s,type:S,key:X,ref:ue!==void 0?ue:null,props:de}}function fe(S,X){return ne(S.type,X,S.props)}function w(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function U(S){var X={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(de){return X[de]})}var te=/\/+/g;function E(S,X){return typeof S=="object"&&S!==null&&S.key!=null?U(""+S.key):X.toString(36)}function oe(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(re,re):(S.status="pending",S.then(function(X){S.status==="pending"&&(S.status="fulfilled",S.value=X)},function(X){S.status==="pending"&&(S.status="rejected",S.reason=X)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function O(S,X,de,ue,_e){var Se=typeof S;(Se==="undefined"||Se==="boolean")&&(S=null);var Ue=!1;if(S===null)Ue=!0;else switch(Se){case"bigint":case"string":case"number":Ue=!0;break;case"object":switch(S.$$typeof){case s:case i:Ue=!0;break;case j:return Ue=S._init,O(Ue(S._payload),X,de,ue,_e)}}if(Ue)return _e=_e(S),Ue=ue===""?"."+E(S,0):ue,ie(_e)?(de="",Ue!=null&&(de=Ue.replace(te,"$&/")+"/"),O(_e,X,de,"",function(We){return We})):_e!=null&&(w(_e)&&(_e=fe(_e,de+(_e.key==null||S&&S.key===_e.key?"":(""+_e.key).replace(te,"$&/")+"/")+Ue)),X.push(_e)),1;Ue=0;var pt=ue===""?".":ue+":";if(ie(S))for(var Be=0;Be<S.length;Be++)ue=S[Be],Se=pt+E(ue,Be),Ue+=O(ue,X,de,Se,_e);else if(Be=V(S),typeof Be=="function")for(S=Be.call(S),Be=0;!(ue=S.next()).done;)ue=ue.value,Se=pt+E(ue,Be++),Ue+=O(ue,X,de,Se,_e);else if(Se==="object"){if(typeof S.then=="function")return O(oe(S),X,de,ue,_e);throw X=String(S),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Ue}function J(S,X,de){if(S==null)return S;var ue=[],_e=0;return O(S,ue,"","",function(Se){return X.call(de,Se,_e++)}),ue}function h(S){if(S._status===-1){var X=S._result;X=X(),X.then(function(de){(S._status===0||S._status===-1)&&(S._status=1,S._result=de)},function(de){(S._status===0||S._status===-1)&&(S._status=2,S._result=de)}),S._status===-1&&(S._status=0,S._result=X)}if(S._status===1)return S._result.default;throw S._result}var W=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},R={map:J,forEach:function(S,X,de){J(S,function(){X.apply(this,arguments)},de)},count:function(S){var X=0;return J(S,function(){X++}),X},toArray:function(S){return J(S,function(X){return X})||[]},only:function(S){if(!w(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return Ae.Activity=b,Ae.Children=R,Ae.Component=B,Ae.Fragment=o,Ae.Profiler=p,Ae.PureComponent=D,Ae.StrictMode=d,Ae.Suspense=_,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(S){return T.H.useMemoCache(S)}},Ae.cache=function(S){return function(){return S.apply(null,arguments)}},Ae.cacheSignal=function(){return null},Ae.cloneElement=function(S,X,de){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var ue=Z({},S.props),_e=S.key;if(X!=null)for(Se in X.key!==void 0&&(_e=""+X.key),X)!Y.call(X,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&X.ref===void 0||(ue[Se]=X[Se]);var Se=arguments.length-2;if(Se===1)ue.children=de;else if(1<Se){for(var Ue=Array(Se),pt=0;pt<Se;pt++)Ue[pt]=arguments[pt+2];ue.children=Ue}return ne(S.type,_e,ue)},Ae.createContext=function(S){return S={$$typeof:f,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:x,_context:S},S},Ae.createElement=function(S,X,de){var ue,_e={},Se=null;if(X!=null)for(ue in X.key!==void 0&&(Se=""+X.key),X)Y.call(X,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(_e[ue]=X[ue]);var Ue=arguments.length-2;if(Ue===1)_e.children=de;else if(1<Ue){for(var pt=Array(Ue),Be=0;Be<Ue;Be++)pt[Be]=arguments[Be+2];_e.children=pt}if(S&&S.defaultProps)for(ue in Ue=S.defaultProps,Ue)_e[ue]===void 0&&(_e[ue]=Ue[ue]);return ne(S,Se,_e)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(S){return{$$typeof:y,render:S}},Ae.isValidElement=w,Ae.lazy=function(S){return{$$typeof:j,_payload:{_status:-1,_result:S},_init:h}},Ae.memo=function(S,X){return{$$typeof:v,type:S,compare:X===void 0?null:X}},Ae.startTransition=function(S){var X=T.T,de={};T.T=de;try{var ue=S(),_e=T.S;_e!==null&&_e(de,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(re,W)}catch(Se){W(Se)}finally{X!==null&&de.types!==null&&(X.types=de.types),T.T=X}},Ae.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},Ae.use=function(S){return T.H.use(S)},Ae.useActionState=function(S,X,de){return T.H.useActionState(S,X,de)},Ae.useCallback=function(S,X){return T.H.useCallback(S,X)},Ae.useContext=function(S){return T.H.useContext(S)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(S,X){return T.H.useDeferredValue(S,X)},Ae.useEffect=function(S,X){return T.H.useEffect(S,X)},Ae.useEffectEvent=function(S){return T.H.useEffectEvent(S)},Ae.useId=function(){return T.H.useId()},Ae.useImperativeHandle=function(S,X,de){return T.H.useImperativeHandle(S,X,de)},Ae.useInsertionEffect=function(S,X){return T.H.useInsertionEffect(S,X)},Ae.useLayoutEffect=function(S,X){return T.H.useLayoutEffect(S,X)},Ae.useMemo=function(S,X){return T.H.useMemo(S,X)},Ae.useOptimistic=function(S,X){return T.H.useOptimistic(S,X)},Ae.useReducer=function(S,X,de){return T.H.useReducer(S,X,de)},Ae.useRef=function(S){return T.H.useRef(S)},Ae.useState=function(S){return T.H.useState(S)},Ae.useSyncExternalStore=function(S,X,de){return T.H.useSyncExternalStore(S,X,de)},Ae.useTransition=function(){return T.H.useTransition()},Ae.version="19.2.6",Ae}var Hf;function Dd(){return Hf||(Hf=1,Ic.exports=Qb()),Ic.exports}var m=Dd();const Xb=Yb(m),Zb=Gb({__proto__:null,default:Xb},[m]);var ed={exports:{}},Ii={},td={exports:{}},ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function Kb(){return Lf||(Lf=1,(function(s){function i(O,J){var h=O.length;O.push(J);e:for(;0<h;){var W=h-1>>>1,R=O[W];if(0<p(R,J))O[W]=J,O[h]=R,h=W;else break e}}function o(O){return O.length===0?null:O[0]}function d(O){if(O.length===0)return null;var J=O[0],h=O.pop();if(h!==J){O[0]=h;e:for(var W=0,R=O.length,S=R>>>1;W<S;){var X=2*(W+1)-1,de=O[X],ue=X+1,_e=O[ue];if(0>p(de,h))ue<R&&0>p(_e,de)?(O[W]=_e,O[ue]=h,W=ue):(O[W]=de,O[X]=h,W=X);else if(ue<R&&0>p(_e,h))O[W]=_e,O[ue]=h,W=ue;else break e}}return J}function p(O,J){var h=O.sortIndex-J.sortIndex;return h!==0?h:O.id-J.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;s.unstable_now=function(){return x.now()}}else{var f=Date,y=f.now();s.unstable_now=function(){return f.now()-y}}var _=[],v=[],j=1,b=null,q=3,V=!1,ee=!1,Z=!1,C=!1,B=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function I(O){for(var J=o(v);J!==null;){if(J.callback===null)d(v);else if(J.startTime<=O)d(v),J.sortIndex=J.expirationTime,i(_,J);else break;J=o(v)}}function ie(O){if(Z=!1,I(O),!ee)if(o(_)!==null)ee=!0,re||(re=!0,U());else{var J=o(v);J!==null&&oe(ie,J.startTime-O)}}var re=!1,T=-1,Y=5,ne=-1;function fe(){return C?!0:!(s.unstable_now()-ne<Y)}function w(){if(C=!1,re){var O=s.unstable_now();ne=O;var J=!0;try{e:{ee=!1,Z&&(Z=!1,A(T),T=-1),V=!0;var h=q;try{t:{for(I(O),b=o(_);b!==null&&!(b.expirationTime>O&&fe());){var W=b.callback;if(typeof W=="function"){b.callback=null,q=b.priorityLevel;var R=W(b.expirationTime<=O);if(O=s.unstable_now(),typeof R=="function"){b.callback=R,I(O),J=!0;break t}b===o(_)&&d(_),I(O)}else d(_);b=o(_)}if(b!==null)J=!0;else{var S=o(v);S!==null&&oe(ie,S.startTime-O),J=!1}}break e}finally{b=null,q=h,V=!1}J=void 0}}finally{J?U():re=!1}}}var U;if(typeof D=="function")U=function(){D(w)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,E=te.port2;te.port1.onmessage=w,U=function(){E.postMessage(null)}}else U=function(){B(w,0)};function oe(O,J){T=B(function(){O(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return q},s.unstable_next=function(O){switch(q){case 1:case 2:case 3:var J=3;break;default:J=q}var h=q;q=J;try{return O()}finally{q=h}},s.unstable_requestPaint=function(){C=!0},s.unstable_runWithPriority=function(O,J){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var h=q;q=O;try{return J()}finally{q=h}},s.unstable_scheduleCallback=function(O,J,h){var W=s.unstable_now();switch(typeof h=="object"&&h!==null?(h=h.delay,h=typeof h=="number"&&0<h?W+h:W):h=W,O){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=h+R,O={id:j++,callback:J,priorityLevel:O,startTime:h,expirationTime:R,sortIndex:-1},h>W?(O.sortIndex=h,i(v,O),o(_)===null&&O===o(v)&&(Z?(A(T),T=-1):Z=!0,oe(ie,h-W))):(O.sortIndex=R,i(_,O),ee||V||(ee=!0,re||(re=!0,U()))),O},s.unstable_shouldYield=fe,s.unstable_wrapCallback=function(O){var J=q;return function(){var h=q;q=J;try{return O.apply(this,arguments)}finally{q=h}}}})(ad)),ad}var qf;function Jb(){return qf||(qf=1,td.exports=Kb()),td.exports}var nd={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function Fb(){if(Bf)return Wt;Bf=1;var s=Dd();function i(_){var v="https://react.dev/errors/"+_;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)v+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+_+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},p=Symbol.for("react.portal");function x(_,v,j){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:b==null?null:""+b,children:_,containerInfo:v,implementation:j}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(_,v){if(_==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Wt.createPortal=function(_,v){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(i(299));return x(_,v,null,j)},Wt.flushSync=function(_){var v=f.T,j=d.p;try{if(f.T=null,d.p=2,_)return _()}finally{f.T=v,d.p=j,d.d.f()}},Wt.preconnect=function(_,v){typeof _=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,d.d.C(_,v))},Wt.prefetchDNS=function(_){typeof _=="string"&&d.d.D(_)},Wt.preinit=function(_,v){if(typeof _=="string"&&v&&typeof v.as=="string"){var j=v.as,b=y(j,v.crossOrigin),q=typeof v.integrity=="string"?v.integrity:void 0,V=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;j==="style"?d.d.S(_,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:b,integrity:q,fetchPriority:V}):j==="script"&&d.d.X(_,{crossOrigin:b,integrity:q,fetchPriority:V,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Wt.preinitModule=function(_,v){if(typeof _=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var j=y(v.as,v.crossOrigin);d.d.M(_,{crossOrigin:j,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&d.d.M(_)},Wt.preload=function(_,v){if(typeof _=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var j=v.as,b=y(j,v.crossOrigin);d.d.L(_,j,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Wt.preloadModule=function(_,v){if(typeof _=="string")if(v){var j=y(v.as,v.crossOrigin);d.d.m(_,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:j,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else d.d.m(_)},Wt.requestFormReset=function(_){d.d.r(_)},Wt.unstable_batchedUpdates=function(_,v){return _(v)},Wt.useFormState=function(_,v,j){return f.H.useFormState(_,v,j)},Wt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Wt.version="19.2.6",Wt}var Gf;function Xh(){if(Gf)return nd.exports;Gf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),nd.exports=Fb(),nd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Wb(){if(Yf)return Ii;Yf=1;var s=Jb(),i=Dd(),o=Xh();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function f(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function y(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function _(e){if(x(e)!==e)throw Error(d(188))}function v(e){var a=e.alternate;if(!a){if(a=x(e),a===null)throw Error(d(188));return a!==e?null:e}for(var n=e,l=a;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return _(r),e;if(c===l)return _(r),a;c=c.sibling}throw Error(d(188))}if(n.return!==l.return)n=r,l=c;else{for(var u=!1,g=r.child;g;){if(g===n){u=!0,n=r,l=c;break}if(g===l){u=!0,l=r,n=c;break}g=g.sibling}if(!u){for(g=c.child;g;){if(g===n){u=!0,n=c,l=r;break}if(g===l){u=!0,l=c,n=r;break}g=g.sibling}if(!u)throw Error(d(189))}}if(n.alternate!==l)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:a}function j(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=j(e),a!==null)return a;e=e.sibling}return null}var b=Object.assign,q=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),ee=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),w=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function E(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case B:return"Profiler";case C:return"StrictMode";case ie:return"Suspense";case re:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ee:return"Portal";case D:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case I:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case T:return a=e.displayName||null,a!==null?a:E(e.type)||"Memo";case Y:a=e._payload,e=e._init;try{return E(e(a))}catch{}}return null}var oe=Array.isArray,O=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,h={pending:!1,data:null,method:null,action:null},W=[],R=-1;function S(e){return{current:e}}function X(e){0>R||(e.current=W[R],W[R]=null,R--)}function de(e,a){R++,W[R]=e.current,e.current=a}var ue=S(null),_e=S(null),Se=S(null),Ue=S(null);function pt(e,a){switch(de(Se,a),de(_e,e),de(ue,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?af(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=af(a),e=nf(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(ue),de(ue,e)}function Be(){X(ue),X(_e),X(Se)}function We(e){e.memoizedState!==null&&de(Ue,e);var a=ue.current,n=nf(a,e.type);a!==n&&(de(_e,e),de(ue,n))}function Ht(e){_e.current===e&&(X(ue),X(_e)),Ue.current===e&&(X(Ue),Ki._currentValue=h)}var Et,da;function bt(e){if(Et===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Et=a&&a[1]||"",da=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+e+da}var ta=!1;function Gt(e,a){if(!e||ta)return"";ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(F){var K=F}Reflect.construct(e,[],le)}else{try{le.call()}catch(F){K=F}e.call(le.prototype)}}else{try{throw Error()}catch(F){K=F}(le=e())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(F){if(F&&K&&typeof F.stack=="string")return[F.stack,K.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),u=c[0],g=c[1];if(u&&g){var k=u.split(`
`),Q=g.split(`
`);for(r=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;r<Q.length&&!Q[r].includes("DetermineComponentFrameRoot");)r++;if(l===k.length||r===Q.length)for(l=k.length-1,r=Q.length-1;1<=l&&0<=r&&k[l]!==Q[r];)r--;for(;1<=l&&0<=r;l--,r--)if(k[l]!==Q[r]){if(l!==1||r!==1)do if(l--,r--,0>r||k[l]!==Q[r]){var P=`
`+k[l].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=l&&0<=r);break}}}finally{ta=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?bt(n):""}function ua(e,a){switch(e.tag){case 26:case 27:case 5:return bt(e.type);case 16:return bt("Lazy");case 13:return e.child!==a&&a!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return Gt(e.type,!1);case 11:return Gt(e.type.render,!1);case 1:return Gt(e.type,!0);case 31:return bt("Activity");default:return""}}function mt(e){try{var a="",n=null;do a+=ua(e,n),n=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Vt=Object.prototype.hasOwnProperty,Ft=s.unstable_scheduleCallback,_t=s.unstable_cancelCallback,pa=s.unstable_shouldYield,z=s.unstable_requestPaint,be=s.unstable_now,Le=s.unstable_getCurrentPriorityLevel,ye=s.unstable_ImmediatePriority,st=s.unstable_UserBlockingPriority,G=s.unstable_NormalPriority,we=s.unstable_LowPriority,je=s.unstable_IdlePriority,Ce=s.log,Je=s.unstable_setDisableYieldValue,Qe=null,Ge=null;function Re(e){if(typeof Ce=="function"&&Je(e),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(Qe,e)}catch{}}var ot=Math.clz32?Math.clz32:Wn,jl=Math.log,Fn=Math.LN2;function Wn(e){return e>>>=0,e===0?32:31-(jl(e)/Fn|0)|0}var Ga=256,ma=262144,Ya=4194304;function It(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function H(e,a,n){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~c,l!==0?r=It(l):(u&=g,u!==0?r=It(u):n||(n=g&~e,n!==0&&(r=It(n))))):(g=l&~c,g!==0?r=It(g):u!==0?r=It(u):n||(n=l&~e,n!==0&&(r=It(n)))),r===0?0:a!==0&&a!==r&&(a&c)===0&&(c=r&-r,n=a&-a,c>=n||c===32&&(n&4194048)!==0)?a:r}function ce(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function se(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function De(){var e=Ya;return Ya<<=1,(Ya&62914560)===0&&(Ya=4194304),e}function ze(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function Fe(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,a,n,l,r,c){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,k=e.expirationTimes,Q=e.hiddenUpdates;for(n=u&~n;0<n;){var P=31-ot(n),le=1<<P;g[P]=0,k[P]=-1;var K=Q[P];if(K!==null)for(Q[P]=null,P=0;P<K.length;P++){var F=K[P];F!==null&&(F.lane&=-536870913)}n&=~le}l!==0&&Ee(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(u&~a))}function Ee(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-ot(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function fa(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var l=31-ot(n),r=1<<l;r&a|e[l]&a&&(e[l]|=a),n&=~r}}function N(e,a){var n=a&-a;return n=(n&42)!==0?1:he(n),(n&(e.suspendedLanes|a))!==0?0:n}function he(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oe(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Cf(e.type))}function Mt(e,a){var n=J.p;try{return J.p=e,a()}finally{J.p=n}}var ha=Math.random().toString(36).slice(2),yt="__reactFiber$"+ha,aa="__reactProps$"+ha,wl="__reactContainer$"+ha,$o="__reactEvents$"+ha,Ex="__reactListeners$"+ha,Mx="__reactHandles$"+ha,$d="__reactResources$"+ha,ci="__reactMarker$"+ha;function Vo(e){delete e[yt],delete e[aa],delete e[$o],delete e[Ex],delete e[Mx]}function Nl(e){var a=e[yt];if(a)return a;for(var n=e.parentNode;n;){if(a=n[wl]||n[yt]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=uf(e);e!==null;){if(n=e[yt])return n;e=uf(e)}return a}e=n,n=e.parentNode}return null}function _l(e){if(e=e[yt]||e[wl]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function di(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function Sl(e){var a=e[$d];return a||(a=e[$d]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Yt(e){e[ci]=!0}var Vd=new Set,Qd={};function Pn(e,a){kl(e,a),kl(e+"Capture",a)}function kl(e,a){for(Qd[e]=a,e=0;e<a.length;e++)Vd.add(a[e])}var Dx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xd={},Zd={};function Ox(e){return Vt.call(Zd,e)?!0:Vt.call(Xd,e)?!1:Dx.test(e)?Zd[e]=!0:(Xd[e]=!0,!1)}function ps(e,a,n){if(Ox(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+n)}}function ms(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+n)}}function Ja(e,a,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,""+l)}}function Ca(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kd(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ax(e,a,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,c=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return r.call(this)},set:function(u){n=""+u,c.call(this,u)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Qo(e){if(!e._valueTracker){var a=Kd(e)?"checked":"value";e._valueTracker=Ax(e,a,""+e[a])}}function Jd(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),l="";return e&&(l=Kd(e)?e.checked?"true":"false":e.value),e=l,e!==n?(a.setValue(e),!0):!1}function fs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ux=/[\n"\\]/g;function za(e){return e.replace(Ux,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Xo(e,a,n,l,r,c,u,g){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ca(a)):e.value!==""+Ca(a)&&(e.value=""+Ca(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?Zo(e,u,Ca(a)):n!=null?Zo(e,u,Ca(n)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Ca(g):e.removeAttribute("name")}function Fd(e,a,n,l,r,c,u,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),a!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||a!=null)){Qo(e);return}n=n!=null?""+Ca(n):"",a=a!=null?""+Ca(a):n,g||a===e.value||(e.value=a),e.defaultValue=a}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Qo(e)}function Zo(e,a,n){a==="number"&&fs(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Cl(e,a,n,l){if(e=e.options,a){a={};for(var r=0;r<n.length;r++)a["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=a.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Ca(n),a=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}a!==null||e[r].disabled||(a=e[r])}a!==null&&(a.selected=!0)}}function Wd(e,a,n){if(a!=null&&(a=""+Ca(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+Ca(n):""}function Pd(e,a,n,l){if(a==null){if(l!=null){if(n!=null)throw Error(d(92));if(oe(l)){if(1<l.length)throw Error(d(93));l=l[0]}n=l}n==null&&(n=""),a=n}n=Ca(a),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Qo(e)}function zl(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var Rx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Id(e,a,n){var l=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,n):typeof n!="number"||n===0||Rx.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function eu(e,a,n){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in a)l=a[r],a.hasOwnProperty(r)&&n[r]!==l&&Id(e,r,l)}else for(var c in a)a.hasOwnProperty(c)&&Id(e,c,a[c])}function Ko(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hs(e){return Lx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fa(){}var Jo=null;function Fo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tl=null,El=null;function tu(e){var a=_l(e);if(a&&(e=a.stateNode)){var n=e[aa]||null;e:switch(e=a.stateNode,a.type){case"input":if(Xo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+za(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var l=n[a];if(l!==e&&l.form===e.form){var r=l[aa]||null;if(!r)throw Error(d(90));Xo(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(a=0;a<n.length;a++)l=n[a],l.form===e.form&&Jd(l)}break e;case"textarea":Wd(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&Cl(e,!!n.multiple,a,!1)}}}var Wo=!1;function au(e,a,n){if(Wo)return e(a,n);Wo=!0;try{var l=e(a);return l}finally{if(Wo=!1,(Tl!==null||El!==null)&&(ao(),Tl&&(a=Tl,e=El,El=Tl=null,tu(a),e)))for(a=0;a<e.length;a++)tu(e[a])}}function ui(e,a){var n=e.stateNode;if(n===null)return null;var l=n[aa]||null;if(l===null)return null;n=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,a,typeof n));return n}var Wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=!1;if(Wa)try{var pi={};Object.defineProperty(pi,"passive",{get:function(){Po=!0}}),window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{Po=!1}var bn=null,Io=null,xs=null;function nu(){if(xs)return xs;var e,a=Io,n=a.length,l,r="value"in bn?bn.value:bn.textContent,c=r.length;for(e=0;e<n&&a[e]===r[e];e++);var u=n-e;for(l=1;l<=u&&a[n-l]===r[c-l];l++);return xs=r.slice(e,1<l?1-l:void 0)}function gs(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function bs(){return!0}function lu(){return!1}function na(e){function a(n,l,r,c,u){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=u,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?bs:lu,this.isPropagationStopped=lu,this}return b(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),a}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=na(In),mi=b({},In,{view:0,detail:0}),qx=na(mi),er,tr,fi,vs=b({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(er=e.screenX-fi.screenX,tr=e.screenY-fi.screenY):tr=er=0,fi=e),er)},movementY:function(e){return"movementY"in e?e.movementY:tr}}),iu=na(vs),Bx=b({},vs,{dataTransfer:0}),Gx=na(Bx),Yx=b({},mi,{relatedTarget:0}),ar=na(Yx),$x=b({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=na($x),Qx=b({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xx=na(Qx),Zx=b({},In,{data:0}),su=na(Zx),Kx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wx(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Fx[e])?!!a[e]:!1}function nr(){return Wx}var Px=b({},mi,{key:function(e){if(e.key){var a=Kx[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=gs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(e){return e.type==="keypress"?gs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ix=na(Px),eg=b({},vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ou=na(eg),tg=b({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr}),ag=na(tg),ng=b({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),lg=na(ng),ig=b({},vs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sg=na(ig),og=b({},In,{newState:0,oldState:0}),rg=na(og),cg=[9,13,27,32],lr=Wa&&"CompositionEvent"in window,hi=null;Wa&&"documentMode"in document&&(hi=document.documentMode);var dg=Wa&&"TextEvent"in window&&!hi,ru=Wa&&(!lr||hi&&8<hi&&11>=hi),cu=" ",du=!1;function uu(e,a){switch(e){case"keyup":return cg.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ml=!1;function ug(e,a){switch(e){case"compositionend":return pu(a);case"keypress":return a.which!==32?null:(du=!0,cu);case"textInput":return e=a.data,e===cu&&du?null:e;default:return null}}function pg(e,a){if(Ml)return e==="compositionend"||!lr&&uu(e,a)?(e=nu(),xs=Io=bn=null,Ml=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ru&&a.locale!=="ko"?null:a.data;default:return null}}var mg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!mg[e.type]:a==="textarea"}function fu(e,a,n,l){Tl?El?El.push(l):El=[l]:Tl=l,a=co(a,"onChange"),0<a.length&&(n=new ys("onChange","change",null,n,l),e.push({event:n,listeners:a}))}var xi=null,gi=null;function fg(e){Fm(e,0)}function js(e){var a=di(e);if(Jd(a))return e}function hu(e,a){if(e==="change")return a}var xu=!1;if(Wa){var ir;if(Wa){var sr="oninput"in document;if(!sr){var gu=document.createElement("div");gu.setAttribute("oninput","return;"),sr=typeof gu.oninput=="function"}ir=sr}else ir=!1;xu=ir&&(!document.documentMode||9<document.documentMode)}function bu(){xi&&(xi.detachEvent("onpropertychange",yu),gi=xi=null)}function yu(e){if(e.propertyName==="value"&&js(gi)){var a=[];fu(a,gi,e,Fo(e)),au(fg,a)}}function hg(e,a,n){e==="focusin"?(bu(),xi=a,gi=n,xi.attachEvent("onpropertychange",yu)):e==="focusout"&&bu()}function xg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return js(gi)}function gg(e,a){if(e==="click")return js(a)}function bg(e,a){if(e==="input"||e==="change")return js(a)}function yg(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var xa=typeof Object.is=="function"?Object.is:yg;function bi(e,a){if(xa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),l=Object.keys(a);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!Vt.call(a,r)||!xa(e[r],a[r]))return!1}return!0}function vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ju(e,a){var n=vu(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=a&&l>=a)return{node:n,offset:a-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vu(n)}}function wu(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?wu(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Nu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=fs(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=fs(e.document)}return a}function or(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var vg=Wa&&"documentMode"in document&&11>=document.documentMode,Dl=null,rr=null,yi=null,cr=!1;function _u(e,a,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cr||Dl==null||Dl!==fs(l)||(l=Dl,"selectionStart"in l&&or(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),yi&&bi(yi,l)||(yi=l,l=co(rr,"onSelect"),0<l.length&&(a=new ys("onSelect","select",null,a,n),e.push({event:a,listeners:l}),a.target=Dl)))}function el(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var Ol={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionrun:el("Transition","TransitionRun"),transitionstart:el("Transition","TransitionStart"),transitioncancel:el("Transition","TransitionCancel"),transitionend:el("Transition","TransitionEnd")},dr={},Su={};Wa&&(Su=document.createElement("div").style,"AnimationEvent"in window||(delete Ol.animationend.animation,delete Ol.animationiteration.animation,delete Ol.animationstart.animation),"TransitionEvent"in window||delete Ol.transitionend.transition);function tl(e){if(dr[e])return dr[e];if(!Ol[e])return e;var a=Ol[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in Su)return dr[e]=a[n];return e}var ku=tl("animationend"),Cu=tl("animationiteration"),zu=tl("animationstart"),jg=tl("transitionrun"),wg=tl("transitionstart"),Ng=tl("transitioncancel"),Tu=tl("transitionend"),Eu=new Map,ur="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ur.push("scrollEnd");function La(e,a){Eu.set(e,a),Pn(a,[e])}var ws=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ta=[],Al=0,pr=0;function Ns(){for(var e=Al,a=pr=Al=0;a<e;){var n=Ta[a];Ta[a++]=null;var l=Ta[a];Ta[a++]=null;var r=Ta[a];Ta[a++]=null;var c=Ta[a];if(Ta[a++]=null,l!==null&&r!==null){var u=l.pending;u===null?r.next=r:(r.next=u.next,u.next=r),l.pending=r}c!==0&&Mu(n,r,c)}}function _s(e,a,n,l){Ta[Al++]=e,Ta[Al++]=a,Ta[Al++]=n,Ta[Al++]=l,pr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function mr(e,a,n,l){return _s(e,a,n,l),Ss(e)}function al(e,a){return _s(e,null,null,a),Ss(e)}function Mu(e,a,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,l=c.alternate,l!==null&&(l.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&a!==null&&(r=31-ot(n),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[a]:l.push(a),a.lane=n|536870912),c):null}function Ss(e){if(50<Gi)throw Gi=0,wc=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Ul={};function _g(e,a,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ga(e,a,n,l){return new _g(e,a,n,l)}function fr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pa(e,a){var n=e.alternate;return n===null?(n=ga(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Du(e,a){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ks(e,a,n,l,r,c){var u=0;if(l=e,typeof e=="function")fr(e)&&(u=1);else if(typeof e=="string")u=Tb(e,n,ue.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=ga(31,n,a,r),e.elementType=ne,e.lanes=c,e;case Z:return nl(n.children,r,c,a);case C:u=8,r|=24;break;case B:return e=ga(12,n,a,r|2),e.elementType=B,e.lanes=c,e;case ie:return e=ga(13,n,a,r),e.elementType=ie,e.lanes=c,e;case re:return e=ga(19,n,a,r),e.elementType=re,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:u=10;break e;case A:u=9;break e;case I:u=11;break e;case T:u=14;break e;case Y:u=16,l=null;break e}u=29,n=Error(d(130,e===null?"null":typeof e,"")),l=null}return a=ga(u,n,a,r),a.elementType=e,a.type=l,a.lanes=c,a}function nl(e,a,n,l){return e=ga(7,e,l,a),e.lanes=n,e}function hr(e,a,n){return e=ga(6,e,null,a),e.lanes=n,e}function Ou(e){var a=ga(18,null,null,0);return a.stateNode=e,a}function xr(e,a,n){return a=ga(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Au=new WeakMap;function Ea(e,a){if(typeof e=="object"&&e!==null){var n=Au.get(e);return n!==void 0?n:(a={value:e,source:a,stack:mt(a)},Au.set(e,a),a)}return{value:e,source:a,stack:mt(a)}}var Rl=[],Hl=0,Cs=null,vi=0,Ma=[],Da=0,yn=null,$a=1,Va="";function Ia(e,a){Rl[Hl++]=vi,Rl[Hl++]=Cs,Cs=e,vi=a}function Uu(e,a,n){Ma[Da++]=$a,Ma[Da++]=Va,Ma[Da++]=yn,yn=e;var l=$a;e=Va;var r=32-ot(l)-1;l&=~(1<<r),n+=1;var c=32-ot(a)+r;if(30<c){var u=r-r%5;c=(l&(1<<u)-1).toString(32),l>>=u,r-=u,$a=1<<32-ot(a)+r|n<<r|l,Va=c+e}else $a=1<<c|n<<r|l,Va=e}function gr(e){e.return!==null&&(Ia(e,1),Uu(e,1,0))}function br(e){for(;e===Cs;)Cs=Rl[--Hl],Rl[Hl]=null,vi=Rl[--Hl],Rl[Hl]=null;for(;e===yn;)yn=Ma[--Da],Ma[Da]=null,Va=Ma[--Da],Ma[Da]=null,$a=Ma[--Da],Ma[Da]=null}function Ru(e,a){Ma[Da++]=$a,Ma[Da++]=Va,Ma[Da++]=yn,$a=a.id,Va=a.overflow,yn=e}var Qt=null,ft=null,Ke=!1,vn=null,Oa=!1,yr=Error(d(519));function jn(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ji(Ea(a,e)),yr}function Hu(e){var a=e.stateNode,n=e.type,l=e.memoizedProps;switch(a[yt]=e,a[aa]=l,n){case"dialog":$e("cancel",a),$e("close",a);break;case"iframe":case"object":case"embed":$e("load",a);break;case"video":case"audio":for(n=0;n<$i.length;n++)$e($i[n],a);break;case"source":$e("error",a);break;case"img":case"image":case"link":$e("error",a),$e("load",a);break;case"details":$e("toggle",a);break;case"input":$e("invalid",a),Fd(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":$e("invalid",a);break;case"textarea":$e("invalid",a),Pd(a,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||l.suppressHydrationWarning===!0||ef(a.textContent,n)?(l.popover!=null&&($e("beforetoggle",a),$e("toggle",a)),l.onScroll!=null&&$e("scroll",a),l.onScrollEnd!=null&&$e("scrollend",a),l.onClick!=null&&(a.onclick=Fa),a=!0):a=!1,a||jn(e,!0)}function Lu(e){for(Qt=e.return;Qt;)switch(Qt.tag){case 5:case 31:case 13:Oa=!1;return;case 27:case 3:Oa=!0;return;default:Qt=Qt.return}}function Ll(e){if(e!==Qt)return!1;if(!Ke)return Lu(e),Ke=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Hc(e.type,e.memoizedProps)),n=!n),n&&ft&&jn(e),Lu(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));ft=df(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));ft=df(e)}else a===27?(a=ft,Un(e.type)?(e=Yc,Yc=null,ft=e):ft=a):ft=Qt?Ua(e.stateNode.nextSibling):null;return!0}function ll(){ft=Qt=null,Ke=!1}function vr(){var e=vn;return e!==null&&(oa===null?oa=e:oa.push.apply(oa,e),vn=null),e}function ji(e){vn===null?vn=[e]:vn.push(e)}var jr=S(null),il=null,en=null;function wn(e,a,n){de(jr,a._currentValue),a._currentValue=n}function tn(e){e._currentValue=jr.current,X(jr)}function wr(e,a,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===n)break;e=e.return}}function Nr(e,a,n,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var u=r.child;c=c.firstContext;e:for(;c!==null;){var g=c;c=r;for(var k=0;k<a.length;k++)if(g.context===a[k]){c.lanes|=n,g=c.alternate,g!==null&&(g.lanes|=n),wr(c.return,n,e),l||(u=null);break e}c=g.next}}else if(r.tag===18){if(u=r.return,u===null)throw Error(d(341));u.lanes|=n,c=u.alternate,c!==null&&(c.lanes|=n),wr(u,n,e),u=null}else u=r.child;if(u!==null)u.return=r;else for(u=r;u!==null;){if(u===e){u=null;break}if(r=u.sibling,r!==null){r.return=u.return,u=r;break}u=u.return}r=u}}function ql(e,a,n,l){e=null;for(var r=a,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var u=r.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var g=r.type;xa(r.pendingProps.value,u.value)||(e!==null?e.push(g):e=[g])}}else if(r===Ue.current){if(u=r.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ki):e=[Ki])}r=r.return}e!==null&&Nr(a,e,n,l),a.flags|=262144}function zs(e){for(e=e.firstContext;e!==null;){if(!xa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sl(e){il=e,en=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xt(e){return qu(il,e)}function Ts(e,a){return il===null&&sl(e),qu(e,a)}function qu(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},en===null){if(e===null)throw Error(d(308));en=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else en=en.next=a;return n}var Sg=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},kg=s.unstable_scheduleCallback,Cg=s.unstable_NormalPriority,Dt={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _r(){return{controller:new Sg,data:new Map,refCount:0}}function wi(e){e.refCount--,e.refCount===0&&kg(Cg,function(){e.controller.abort()})}var Ni=null,Sr=0,Bl=0,Gl=null;function zg(e,a){if(Ni===null){var n=Ni=[];Sr=0,Bl=zc(),Gl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Sr++,a.then(Bu,Bu),a}function Bu(){if(--Sr===0&&Ni!==null){Gl!==null&&(Gl.status="fulfilled");var e=Ni;Ni=null,Bl=0,Gl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Tg(e,a){var n=[],l={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var r=0;r<n.length;r++)(0,n[r])(a)},function(r){for(l.status="rejected",l.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),l}var Gu=O.S;O.S=function(e,a){_m=be(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&zg(e,a),Gu!==null&&Gu(e,a)};var ol=S(null);function kr(){var e=ol.current;return e!==null?e:ut.pooledCache}function Es(e,a){a===null?de(ol,ol.current):de(ol,a.pool)}function Yu(){var e=kr();return e===null?null:{parent:Dt._currentValue,pool:e}}var Yl=Error(d(460)),Cr=Error(d(474)),Ms=Error(d(542)),Ds={then:function(){}};function $u(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vu(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(Fa,Fa),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Xu(e),e;default:if(typeof a.status=="string")a.then(Fa,Fa);else{if(e=ut,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var r=a;r.status="fulfilled",r.value=l}},function(l){if(a.status==="pending"){var r=a;r.status="rejected",r.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Xu(e),e}throw cl=a,Yl}}function rl(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(cl=n,Yl):n}}var cl=null;function Qu(){if(cl===null)throw Error(d(459));var e=cl;return cl=null,e}function Xu(e){if(e===Yl||e===Ms)throw Error(d(483))}var $l=null,_i=0;function Os(e){var a=_i;return _i+=1,$l===null&&($l=[]),Vu($l,e,a)}function Si(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function As(e,a){throw a.$$typeof===q?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Zu(e){function a(L,M){if(e){var $=L.deletions;$===null?(L.deletions=[M],L.flags|=16):$.push(M)}}function n(L,M){if(!e)return null;for(;M!==null;)a(L,M),M=M.sibling;return null}function l(L){for(var M=new Map;L!==null;)L.key!==null?M.set(L.key,L):M.set(L.index,L),L=L.sibling;return M}function r(L,M){return L=Pa(L,M),L.index=0,L.sibling=null,L}function c(L,M,$){return L.index=$,e?($=L.alternate,$!==null?($=$.index,$<M?(L.flags|=67108866,M):$):(L.flags|=67108866,M)):(L.flags|=1048576,M)}function u(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function g(L,M,$,ae){return M===null||M.tag!==6?(M=hr($,L.mode,ae),M.return=L,M):(M=r(M,$),M.return=L,M)}function k(L,M,$,ae){var ke=$.type;return ke===Z?P(L,M,$.props.children,ae,$.key):M!==null&&(M.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===Y&&rl(ke)===M.type)?(M=r(M,$.props),Si(M,$),M.return=L,M):(M=ks($.type,$.key,$.props,null,L.mode,ae),Si(M,$),M.return=L,M)}function Q(L,M,$,ae){return M===null||M.tag!==4||M.stateNode.containerInfo!==$.containerInfo||M.stateNode.implementation!==$.implementation?(M=xr($,L.mode,ae),M.return=L,M):(M=r(M,$.children||[]),M.return=L,M)}function P(L,M,$,ae,ke){return M===null||M.tag!==7?(M=nl($,L.mode,ae,ke),M.return=L,M):(M=r(M,$),M.return=L,M)}function le(L,M,$){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=hr(""+M,L.mode,$),M.return=L,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case V:return $=ks(M.type,M.key,M.props,null,L.mode,$),Si($,M),$.return=L,$;case ee:return M=xr(M,L.mode,$),M.return=L,M;case Y:return M=rl(M),le(L,M,$)}if(oe(M)||U(M))return M=nl(M,L.mode,$,null),M.return=L,M;if(typeof M.then=="function")return le(L,Os(M),$);if(M.$$typeof===D)return le(L,Ts(L,M),$);As(L,M)}return null}function K(L,M,$,ae){var ke=M!==null?M.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ke!==null?null:g(L,M,""+$,ae);if(typeof $=="object"&&$!==null){switch($.$$typeof){case V:return $.key===ke?k(L,M,$,ae):null;case ee:return $.key===ke?Q(L,M,$,ae):null;case Y:return $=rl($),K(L,M,$,ae)}if(oe($)||U($))return ke!==null?null:P(L,M,$,ae,null);if(typeof $.then=="function")return K(L,M,Os($),ae);if($.$$typeof===D)return K(L,M,Ts(L,$),ae);As(L,$)}return null}function F(L,M,$,ae,ke){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return L=L.get($)||null,g(M,L,""+ae,ke);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case V:return L=L.get(ae.key===null?$:ae.key)||null,k(M,L,ae,ke);case ee:return L=L.get(ae.key===null?$:ae.key)||null,Q(M,L,ae,ke);case Y:return ae=rl(ae),F(L,M,$,ae,ke)}if(oe(ae)||U(ae))return L=L.get($)||null,P(M,L,ae,ke,null);if(typeof ae.then=="function")return F(L,M,$,Os(ae),ke);if(ae.$$typeof===D)return F(L,M,$,Ts(M,ae),ke);As(M,ae)}return null}function ve(L,M,$,ae){for(var ke=null,Pe=null,Ne=M,qe=M=0,Ze=null;Ne!==null&&qe<$.length;qe++){Ne.index>qe?(Ze=Ne,Ne=null):Ze=Ne.sibling;var Ie=K(L,Ne,$[qe],ae);if(Ie===null){Ne===null&&(Ne=Ze);break}e&&Ne&&Ie.alternate===null&&a(L,Ne),M=c(Ie,M,qe),Pe===null?ke=Ie:Pe.sibling=Ie,Pe=Ie,Ne=Ze}if(qe===$.length)return n(L,Ne),Ke&&Ia(L,qe),ke;if(Ne===null){for(;qe<$.length;qe++)Ne=le(L,$[qe],ae),Ne!==null&&(M=c(Ne,M,qe),Pe===null?ke=Ne:Pe.sibling=Ne,Pe=Ne);return Ke&&Ia(L,qe),ke}for(Ne=l(Ne);qe<$.length;qe++)Ze=F(Ne,L,qe,$[qe],ae),Ze!==null&&(e&&Ze.alternate!==null&&Ne.delete(Ze.key===null?qe:Ze.key),M=c(Ze,M,qe),Pe===null?ke=Ze:Pe.sibling=Ze,Pe=Ze);return e&&Ne.forEach(function(Bn){return a(L,Bn)}),Ke&&Ia(L,qe),ke}function Te(L,M,$,ae){if($==null)throw Error(d(151));for(var ke=null,Pe=null,Ne=M,qe=M=0,Ze=null,Ie=$.next();Ne!==null&&!Ie.done;qe++,Ie=$.next()){Ne.index>qe?(Ze=Ne,Ne=null):Ze=Ne.sibling;var Bn=K(L,Ne,Ie.value,ae);if(Bn===null){Ne===null&&(Ne=Ze);break}e&&Ne&&Bn.alternate===null&&a(L,Ne),M=c(Bn,M,qe),Pe===null?ke=Bn:Pe.sibling=Bn,Pe=Bn,Ne=Ze}if(Ie.done)return n(L,Ne),Ke&&Ia(L,qe),ke;if(Ne===null){for(;!Ie.done;qe++,Ie=$.next())Ie=le(L,Ie.value,ae),Ie!==null&&(M=c(Ie,M,qe),Pe===null?ke=Ie:Pe.sibling=Ie,Pe=Ie);return Ke&&Ia(L,qe),ke}for(Ne=l(Ne);!Ie.done;qe++,Ie=$.next())Ie=F(Ne,L,qe,Ie.value,ae),Ie!==null&&(e&&Ie.alternate!==null&&Ne.delete(Ie.key===null?qe:Ie.key),M=c(Ie,M,qe),Pe===null?ke=Ie:Pe.sibling=Ie,Pe=Ie);return e&&Ne.forEach(function(Bb){return a(L,Bb)}),Ke&&Ia(L,qe),ke}function dt(L,M,$,ae){if(typeof $=="object"&&$!==null&&$.type===Z&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case V:e:{for(var ke=$.key;M!==null;){if(M.key===ke){if(ke=$.type,ke===Z){if(M.tag===7){n(L,M.sibling),ae=r(M,$.props.children),ae.return=L,L=ae;break e}}else if(M.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===Y&&rl(ke)===M.type){n(L,M.sibling),ae=r(M,$.props),Si(ae,$),ae.return=L,L=ae;break e}n(L,M);break}else a(L,M);M=M.sibling}$.type===Z?(ae=nl($.props.children,L.mode,ae,$.key),ae.return=L,L=ae):(ae=ks($.type,$.key,$.props,null,L.mode,ae),Si(ae,$),ae.return=L,L=ae)}return u(L);case ee:e:{for(ke=$.key;M!==null;){if(M.key===ke)if(M.tag===4&&M.stateNode.containerInfo===$.containerInfo&&M.stateNode.implementation===$.implementation){n(L,M.sibling),ae=r(M,$.children||[]),ae.return=L,L=ae;break e}else{n(L,M);break}else a(L,M);M=M.sibling}ae=xr($,L.mode,ae),ae.return=L,L=ae}return u(L);case Y:return $=rl($),dt(L,M,$,ae)}if(oe($))return ve(L,M,$,ae);if(U($)){if(ke=U($),typeof ke!="function")throw Error(d(150));return $=ke.call($),Te(L,M,$,ae)}if(typeof $.then=="function")return dt(L,M,Os($),ae);if($.$$typeof===D)return dt(L,M,Ts(L,$),ae);As(L,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,M!==null&&M.tag===6?(n(L,M.sibling),ae=r(M,$),ae.return=L,L=ae):(n(L,M),ae=hr($,L.mode,ae),ae.return=L,L=ae),u(L)):n(L,M)}return function(L,M,$,ae){try{_i=0;var ke=dt(L,M,$,ae);return $l=null,ke}catch(Ne){if(Ne===Yl||Ne===Ms)throw Ne;var Pe=ga(29,Ne,null,L.mode);return Pe.lanes=ae,Pe.return=L,Pe}finally{}}}var dl=Zu(!0),Ku=Zu(!1),Nn=!1;function zr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tr(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(e,a,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(tt&2)!==0){var r=l.pending;return r===null?a.next=a:(a.next=r.next,r.next=a),l.pending=a,a=Ss(e),Mu(e,null,n),a}return _s(e,l,a,n),Ss(e)}function ki(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,n|=l,a.lanes=n,fa(e,n)}}function Er(e,a){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=u:c=c.next=u,n=n.next}while(n!==null);c===null?r=c=a:c=c.next=a}else r=c=a;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var Mr=!1;function Ci(){if(Mr){var e=Gl;if(e!==null)throw e}}function zi(e,a,n,l){Mr=!1;var r=e.updateQueue;Nn=!1;var c=r.firstBaseUpdate,u=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var k=g,Q=k.next;k.next=null,u===null?c=Q:u.next=Q,u=k;var P=e.alternate;P!==null&&(P=P.updateQueue,g=P.lastBaseUpdate,g!==u&&(g===null?P.firstBaseUpdate=Q:g.next=Q,P.lastBaseUpdate=k))}if(c!==null){var le=r.baseState;u=0,P=Q=k=null,g=c;do{var K=g.lane&-536870913,F=K!==g.lane;if(F?(Xe&K)===K:(l&K)===K){K!==0&&K===Bl&&(Mr=!0),P!==null&&(P=P.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ve=e,Te=g;K=a;var dt=n;switch(Te.tag){case 1:if(ve=Te.payload,typeof ve=="function"){le=ve.call(dt,le,K);break e}le=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=Te.payload,K=typeof ve=="function"?ve.call(dt,le,K):ve,K==null)break e;le=b({},le,K);break e;case 2:Nn=!0}}K=g.callback,K!==null&&(e.flags|=64,F&&(e.flags|=8192),F=r.callbacks,F===null?r.callbacks=[K]:F.push(K))}else F={lane:K,tag:g.tag,payload:g.payload,callback:g.callback,next:null},P===null?(Q=P=F,k=le):P=P.next=F,u|=K;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;F=g,g=F.next,F.next=null,r.lastBaseUpdate=F,r.shared.pending=null}}while(!0);P===null&&(k=le),r.baseState=k,r.firstBaseUpdate=Q,r.lastBaseUpdate=P,c===null&&(r.shared.lanes=0),En|=u,e.lanes=u,e.memoizedState=le}}function Ju(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function Fu(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ju(n[e],a)}var Vl=S(null),Us=S(0);function Wu(e,a){e=un,de(Us,e),de(Vl,a),un=e|a.baseLanes}function Dr(){de(Us,un),de(Vl,Vl.current)}function Or(){un=Us.current,X(Vl),X(Us)}var ba=S(null),Aa=null;function kn(e){var a=e.alternate;de(St,St.current&1),de(ba,e),Aa===null&&(a===null||Vl.current!==null||a.memoizedState!==null)&&(Aa=e)}function Ar(e){de(St,St.current),de(ba,e),Aa===null&&(Aa=e)}function Pu(e){e.tag===22?(de(St,St.current),de(ba,e),Aa===null&&(Aa=e)):Cn()}function Cn(){de(St,St.current),de(ba,ba.current)}function ya(e){X(ba),Aa===e&&(Aa=null),X(St)}var St=S(0);function Rs(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Bc(n)||Gc(n)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var an=0,He=null,rt=null,Ot=null,Hs=!1,Ql=!1,ul=!1,Ls=0,Ti=0,Xl=null,Eg=0;function jt(){throw Error(d(321))}function Ur(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!xa(e[n],a[n]))return!1;return!0}function Rr(e,a,n,l,r,c){return an=c,He=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,O.H=e===null||e.memoizedState===null?Up:Wr,ul=!1,c=n(l,r),ul=!1,Ql&&(c=ep(a,n,l,r)),Iu(e),c}function Iu(e){O.H=Di;var a=rt!==null&&rt.next!==null;if(an=0,Ot=rt=He=null,Hs=!1,Ti=0,Xl=null,a)throw Error(d(300));e===null||At||(e=e.dependencies,e!==null&&zs(e)&&(At=!0))}function ep(e,a,n,l){He=e;var r=0;do{if(Ql&&(Xl=null),Ti=0,Ql=!1,25<=r)throw Error(d(301));if(r+=1,Ot=rt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}O.H=Rp,c=a(n,l)}while(Ql);return c}function Mg(){var e=O.H,a=e.useState()[0];return a=typeof a.then=="function"?Ei(a):a,e=e.useState()[0],(rt!==null?rt.memoizedState:null)!==e&&(He.flags|=1024),a}function Hr(){var e=Ls!==0;return Ls=0,e}function Lr(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function qr(e){if(Hs){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Hs=!1}an=0,Ot=rt=He=null,Ql=!1,Ti=Ls=0,Xl=null}function ea(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?He.memoizedState=Ot=e:Ot=Ot.next=e,Ot}function kt(){if(rt===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=rt.next;var a=Ot===null?He.memoizedState:Ot.next;if(a!==null)Ot=a,rt=e;else{if(e===null)throw He.alternate===null?Error(d(467)):Error(d(310));rt=e,e={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Ot===null?He.memoizedState=Ot=e:Ot=Ot.next=e}return Ot}function qs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ei(e){var a=Ti;return Ti+=1,Xl===null&&(Xl=[]),e=Vu(Xl,e,a),a=He,(Ot===null?a.memoizedState:Ot.next)===null&&(a=a.alternate,O.H=a===null||a.memoizedState===null?Up:Wr),e}function Bs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ei(e);if(e.$$typeof===D)return Xt(e)}throw Error(d(438,String(e)))}function Br(e){var a=null,n=He.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var l=He.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(r){return r.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=qs(),He.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),l=0;l<e;l++)n[l]=fe;return a.index++,n}function nn(e,a){return typeof a=="function"?a(e):a}function Gs(e){var a=kt();return Gr(a,rt,e)}function Gr(e,a,n){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=n;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var u=r.next;r.next=c.next,c.next=u}a.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{a=r.next;var g=u=null,k=null,Q=a,P=!1;do{var le=Q.lane&-536870913;if(le!==Q.lane?(Xe&le)===le:(an&le)===le){var K=Q.revertLane;if(K===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),le===Bl&&(P=!0);else if((an&K)===K){Q=Q.next,K===Bl&&(P=!0);continue}else le={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},k===null?(g=k=le,u=c):k=k.next=le,He.lanes|=K,En|=K;le=Q.action,ul&&n(c,le),c=Q.hasEagerState?Q.eagerState:n(c,le)}else K={lane:le,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},k===null?(g=k=K,u=c):k=k.next=K,He.lanes|=le,En|=le;Q=Q.next}while(Q!==null&&Q!==a);if(k===null?u=c:k.next=g,!xa(c,e.memoizedState)&&(At=!0,P&&(n=Gl,n!==null)))throw n;e.memoizedState=c,e.baseState=u,e.baseQueue=k,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Yr(e){var a=kt(),n=a.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,c=a.memoizedState;if(r!==null){n.pending=null;var u=r=r.next;do c=e(c,u.action),u=u.next;while(u!==r);xa(c,a.memoizedState)||(At=!0),a.memoizedState=c,a.baseQueue===null&&(a.baseState=c),n.lastRenderedState=c}return[c,l]}function tp(e,a,n){var l=He,r=kt(),c=Ke;if(c){if(n===void 0)throw Error(d(407));n=n()}else n=a();var u=!xa((rt||r).memoizedState,n);if(u&&(r.memoizedState=n,At=!0),r=r.queue,Qr(lp.bind(null,l,r,e),[e]),r.getSnapshot!==a||u||Ot!==null&&Ot.memoizedState.tag&1){if(l.flags|=2048,Zl(9,{destroy:void 0},np.bind(null,l,r,n,a),null),ut===null)throw Error(d(349));c||(an&127)!==0||ap(l,a,n)}return n}function ap(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=He.updateQueue,a===null?(a=qs(),He.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function np(e,a,n,l){a.value=n,a.getSnapshot=l,ip(a)&&sp(e)}function lp(e,a,n){return n(function(){ip(a)&&sp(e)})}function ip(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!xa(e,n)}catch{return!0}}function sp(e){var a=al(e,2);a!==null&&ra(a,e,2)}function $r(e){var a=ea();if(typeof e=="function"){var n=e;if(e=n(),ul){Re(!0);try{n()}finally{Re(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:e},a}function op(e,a,n,l){return e.baseState=n,Gr(e,rt,typeof l=="function"?l:nn)}function Dg(e,a,n,l,r){if(Vs(e))throw Error(d(485));if(e=a.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){c.listeners.push(u)}};O.T!==null?n(!0):c.isTransition=!1,l(c),n=a.pending,n===null?(c.next=a.pending=c,rp(a,c)):(c.next=n.next,a.pending=n.next=c)}}function rp(e,a){var n=a.action,l=a.payload,r=e.state;if(a.isTransition){var c=O.T,u={};O.T=u;try{var g=n(r,l),k=O.S;k!==null&&k(u,g),cp(e,a,g)}catch(Q){Vr(e,a,Q)}finally{c!==null&&u.types!==null&&(c.types=u.types),O.T=c}}else try{c=n(r,l),cp(e,a,c)}catch(Q){Vr(e,a,Q)}}function cp(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){dp(e,a,l)},function(l){return Vr(e,a,l)}):dp(e,a,n)}function dp(e,a,n){a.status="fulfilled",a.value=n,up(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,rp(e,n)))}function Vr(e,a,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=n,up(a),a=a.next;while(a!==l)}e.action=null}function up(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function pp(e,a){return a}function mp(e,a){if(Ke){var n=ut.formState;if(n!==null){e:{var l=He;if(Ke){if(ft){t:{for(var r=ft,c=Oa;r.nodeType!==8;){if(!c){r=null;break t}if(r=Ua(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){ft=Ua(r.nextSibling),l=r.data==="F!";break e}}jn(l)}l=!1}l&&(a=n[0])}}return n=ea(),n.memoizedState=n.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pp,lastRenderedState:a},n.queue=l,n=Dp.bind(null,He,l),l.dispatch=n,l=$r(!1),c=Fr.bind(null,He,!1,l.queue),l=ea(),r={state:a,dispatch:null,action:e,pending:null},l.queue=r,n=Dg.bind(null,He,r,c,n),r.dispatch=n,l.memoizedState=e,[a,n,!1]}function fp(e){var a=kt();return hp(a,rt,e)}function hp(e,a,n){if(a=Gr(e,a,pp)[0],e=Gs(nn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Ei(a)}catch(u){throw u===Yl?Ms:u}else l=a;a=kt();var r=a.queue,c=r.dispatch;return n!==a.memoizedState&&(He.flags|=2048,Zl(9,{destroy:void 0},Og.bind(null,r,n),null)),[l,c,e]}function Og(e,a){e.action=a}function xp(e){var a=kt(),n=rt;if(n!==null)return hp(a,n,e);kt(),a=a.memoizedState,n=kt();var l=n.queue.dispatch;return n.memoizedState=e,[a,l,!1]}function Zl(e,a,n,l){return e={tag:e,create:n,deps:l,inst:a,next:null},a=He.updateQueue,a===null&&(a=qs(),He.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,a.lastEffect=e),e}function gp(){return kt().memoizedState}function Ys(e,a,n,l){var r=ea();He.flags|=e,r.memoizedState=Zl(1|a,{destroy:void 0},n,l===void 0?null:l)}function $s(e,a,n,l){var r=kt();l=l===void 0?null:l;var c=r.memoizedState.inst;rt!==null&&l!==null&&Ur(l,rt.memoizedState.deps)?r.memoizedState=Zl(a,c,n,l):(He.flags|=e,r.memoizedState=Zl(1|a,c,n,l))}function bp(e,a){Ys(8390656,8,e,a)}function Qr(e,a){$s(2048,8,e,a)}function Ag(e){He.flags|=4;var a=He.updateQueue;if(a===null)a=qs(),He.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function yp(e){var a=kt().memoizedState;return Ag({ref:a,nextImpl:e}),function(){if((tt&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function vp(e,a){return $s(4,2,e,a)}function jp(e,a){return $s(4,4,e,a)}function wp(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Np(e,a,n){n=n!=null?n.concat([e]):null,$s(4,4,wp.bind(null,a,e),n)}function Xr(){}function _p(e,a){var n=kt();a=a===void 0?null:a;var l=n.memoizedState;return a!==null&&Ur(a,l[1])?l[0]:(n.memoizedState=[e,a],e)}function Sp(e,a){var n=kt();a=a===void 0?null:a;var l=n.memoizedState;if(a!==null&&Ur(a,l[1]))return l[0];if(l=e(),ul){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[l,a],l}function Zr(e,a,n){return n===void 0||(an&1073741824)!==0&&(Xe&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=km(),He.lanes|=e,En|=e,n)}function kp(e,a,n,l){return xa(n,a)?n:Vl.current!==null?(e=Zr(e,n,l),xa(e,a)||(At=!0),e):(an&42)===0||(an&1073741824)!==0&&(Xe&261930)===0?(At=!0,e.memoizedState=n):(e=km(),He.lanes|=e,En|=e,a)}function Cp(e,a,n,l,r){var c=J.p;J.p=c!==0&&8>c?c:8;var u=O.T,g={};O.T=g,Fr(e,!1,a,n);try{var k=r(),Q=O.S;if(Q!==null&&Q(g,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var P=Tg(k,l);Mi(e,a,P,wa(e))}else Mi(e,a,l,wa(e))}catch(le){Mi(e,a,{then:function(){},status:"rejected",reason:le},wa())}finally{J.p=c,u!==null&&g.types!==null&&(u.types=g.types),O.T=u}}function Ug(){}function Kr(e,a,n,l){if(e.tag!==5)throw Error(d(476));var r=zp(e).queue;Cp(e,r,a,h,n===null?Ug:function(){return Tp(e),n(l)})}function zp(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:h,baseState:h,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:h},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Tp(e){var a=zp(e);a.next===null&&(a=e.alternate.memoizedState),Mi(e,a.next.queue,{},wa())}function Jr(){return Xt(Ki)}function Ep(){return kt().memoizedState}function Mp(){return kt().memoizedState}function Rg(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=wa();e=_n(n);var l=Sn(a,e,n);l!==null&&(ra(l,a,n),ki(l,a,n)),a={cache:_r()},e.payload=a;return}a=a.return}}function Hg(e,a,n){var l=wa();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Vs(e)?Op(a,n):(n=mr(e,a,n,l),n!==null&&(ra(n,e,l),Ap(n,a,l)))}function Dp(e,a,n){var l=wa();Mi(e,a,n,l)}function Mi(e,a,n,l){var r={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vs(e))Op(a,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=a.lastRenderedReducer,c!==null))try{var u=a.lastRenderedState,g=c(u,n);if(r.hasEagerState=!0,r.eagerState=g,xa(g,u))return _s(e,a,r,0),ut===null&&Ns(),!1}catch{}finally{}if(n=mr(e,a,r,l),n!==null)return ra(n,e,l),Ap(n,a,l),!0}return!1}function Fr(e,a,n,l){if(l={lane:2,revertLane:zc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Vs(e)){if(a)throw Error(d(479))}else a=mr(e,n,l,2),a!==null&&ra(a,e,2)}function Vs(e){var a=e.alternate;return e===He||a!==null&&a===He}function Op(e,a){Ql=Hs=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function Ap(e,a,n){if((n&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,n|=l,a.lanes=n,fa(e,n)}}var Di={readContext:Xt,use:Bs,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useLayoutEffect:jt,useInsertionEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useSyncExternalStore:jt,useId:jt,useHostTransitionStatus:jt,useFormState:jt,useActionState:jt,useOptimistic:jt,useMemoCache:jt,useCacheRefresh:jt};Di.useEffectEvent=jt;var Up={readContext:Xt,use:Bs,useCallback:function(e,a){return ea().memoizedState=[e,a===void 0?null:a],e},useContext:Xt,useEffect:bp,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,Ys(4194308,4,wp.bind(null,a,e),n)},useLayoutEffect:function(e,a){return Ys(4194308,4,e,a)},useInsertionEffect:function(e,a){Ys(4,2,e,a)},useMemo:function(e,a){var n=ea();a=a===void 0?null:a;var l=e();if(ul){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[l,a],l},useReducer:function(e,a,n){var l=ea();if(n!==void 0){var r=n(a);if(ul){Re(!0);try{n(a)}finally{Re(!1)}}}else r=a;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=Hg.bind(null,He,e),[l.memoizedState,e]},useRef:function(e){var a=ea();return e={current:e},a.memoizedState=e},useState:function(e){e=$r(e);var a=e.queue,n=Dp.bind(null,He,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:Xr,useDeferredValue:function(e,a){var n=ea();return Zr(n,e,a)},useTransition:function(){var e=$r(!1);return e=Cp.bind(null,He,e.queue,!0,!1),ea().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var l=He,r=ea();if(Ke){if(n===void 0)throw Error(d(407));n=n()}else{if(n=a(),ut===null)throw Error(d(349));(Xe&127)!==0||ap(l,a,n)}r.memoizedState=n;var c={value:n,getSnapshot:a};return r.queue=c,bp(lp.bind(null,l,c,e),[e]),l.flags|=2048,Zl(9,{destroy:void 0},np.bind(null,l,c,n,a),null),n},useId:function(){var e=ea(),a=ut.identifierPrefix;if(Ke){var n=Va,l=$a;n=(l&~(1<<32-ot(l)-1)).toString(32)+n,a="_"+a+"R_"+n,n=Ls++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=Eg++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Jr,useFormState:mp,useActionState:mp,useOptimistic:function(e){var a=ea();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=Fr.bind(null,He,!0,n),n.dispatch=a,[e,a]},useMemoCache:Br,useCacheRefresh:function(){return ea().memoizedState=Rg.bind(null,He)},useEffectEvent:function(e){var a=ea(),n={impl:e};return a.memoizedState=n,function(){if((tt&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},Wr={readContext:Xt,use:Bs,useCallback:_p,useContext:Xt,useEffect:Qr,useImperativeHandle:Np,useInsertionEffect:vp,useLayoutEffect:jp,useMemo:Sp,useReducer:Gs,useRef:gp,useState:function(){return Gs(nn)},useDebugValue:Xr,useDeferredValue:function(e,a){var n=kt();return kp(n,rt.memoizedState,e,a)},useTransition:function(){var e=Gs(nn)[0],a=kt().memoizedState;return[typeof e=="boolean"?e:Ei(e),a]},useSyncExternalStore:tp,useId:Ep,useHostTransitionStatus:Jr,useFormState:fp,useActionState:fp,useOptimistic:function(e,a){var n=kt();return op(n,rt,e,a)},useMemoCache:Br,useCacheRefresh:Mp};Wr.useEffectEvent=yp;var Rp={readContext:Xt,use:Bs,useCallback:_p,useContext:Xt,useEffect:Qr,useImperativeHandle:Np,useInsertionEffect:vp,useLayoutEffect:jp,useMemo:Sp,useReducer:Yr,useRef:gp,useState:function(){return Yr(nn)},useDebugValue:Xr,useDeferredValue:function(e,a){var n=kt();return rt===null?Zr(n,e,a):kp(n,rt.memoizedState,e,a)},useTransition:function(){var e=Yr(nn)[0],a=kt().memoizedState;return[typeof e=="boolean"?e:Ei(e),a]},useSyncExternalStore:tp,useId:Ep,useHostTransitionStatus:Jr,useFormState:xp,useActionState:xp,useOptimistic:function(e,a){var n=kt();return rt!==null?op(n,rt,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Br,useCacheRefresh:Mp};Rp.useEffectEvent=yp;function Pr(e,a,n,l){a=e.memoizedState,n=n(l,a),n=n==null?a:b({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ir={enqueueSetState:function(e,a,n){e=e._reactInternals;var l=wa(),r=_n(l);r.payload=a,n!=null&&(r.callback=n),a=Sn(e,r,l),a!==null&&(ra(a,e,l),ki(a,e,l))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var l=wa(),r=_n(l);r.tag=1,r.payload=a,n!=null&&(r.callback=n),a=Sn(e,r,l),a!==null&&(ra(a,e,l),ki(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=wa(),l=_n(n);l.tag=2,a!=null&&(l.callback=a),a=Sn(e,l,n),a!==null&&(ra(a,e,n),ki(a,e,n))}};function Hp(e,a,n,l,r,c,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,u):a.prototype&&a.prototype.isPureReactComponent?!bi(n,l)||!bi(r,c):!0}function Lp(e,a,n,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,l),a.state!==e&&Ir.enqueueReplaceState(a,a.state,null)}function pl(e,a){var n=a;if("ref"in a){n={};for(var l in a)l!=="ref"&&(n[l]=a[l])}if(e=e.defaultProps){n===a&&(n=b({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function qp(e){ws(e)}function Bp(e){console.error(e)}function Gp(e){ws(e)}function Qs(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Yp(e,a,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ec(e,a,n){return n=_n(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,a)},n}function $p(e){return e=_n(e),e.tag=3,e}function Vp(e,a,n,l){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){Yp(a,n,l)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Yp(a,n,l),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function Lg(e,a,n,l,r){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=n.alternate,a!==null&&ql(a,n,r,!0),n=ba.current,n!==null){switch(n.tag){case 31:case 13:return Aa===null?no():n.alternate===null&&wt===0&&(wt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,l===Ds?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([l]):a.add(l),Sc(e,l,r)),!1;case 22:return n.flags|=65536,l===Ds?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([l]):n.add(l)),Sc(e,l,r)),!1}throw Error(d(435,n.tag))}return Sc(e,l,r),no(),!1}if(Ke)return a=ba.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=r,l!==yr&&(e=Error(d(422),{cause:l}),ji(Ea(e,n)))):(l!==yr&&(a=Error(d(423),{cause:l}),ji(Ea(a,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Ea(l,n),r=ec(e.stateNode,l,r),Er(e,r),wt!==4&&(wt=2)),!1;var c=Error(d(520),{cause:l});if(c=Ea(c,n),Bi===null?Bi=[c]:Bi.push(c),wt!==4&&(wt=2),a===null)return!0;l=Ea(l,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=ec(n.stateNode,l,e),Er(n,e),!1;case 1:if(a=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Mn===null||!Mn.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=$p(r),Vp(r,e,n,l),Er(n,r),!1}n=n.return}while(n!==null);return!1}var tc=Error(d(461)),At=!1;function Zt(e,a,n,l){a.child=e===null?Ku(a,null,n,l):dl(a,e.child,n,l)}function Qp(e,a,n,l,r){n=n.render;var c=a.ref;if("ref"in l){var u={};for(var g in l)g!=="ref"&&(u[g]=l[g])}else u=l;return sl(a),l=Rr(e,a,n,u,c,r),g=Hr(),e!==null&&!At?(Lr(e,a,r),ln(e,a,r)):(Ke&&g&&gr(a),a.flags|=1,Zt(e,a,l,r),a.child)}function Xp(e,a,n,l,r){if(e===null){var c=n.type;return typeof c=="function"&&!fr(c)&&c.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=c,Zp(e,a,c,l,r)):(e=ks(n.type,null,l,a,a.mode,r),e.ref=a.ref,e.return=a,a.child=e)}if(c=e.child,!cc(e,r)){var u=c.memoizedProps;if(n=n.compare,n=n!==null?n:bi,n(u,l)&&e.ref===a.ref)return ln(e,a,r)}return a.flags|=1,e=Pa(c,l),e.ref=a.ref,e.return=a,a.child=e}function Zp(e,a,n,l,r){if(e!==null){var c=e.memoizedProps;if(bi(c,l)&&e.ref===a.ref)if(At=!1,a.pendingProps=l=c,cc(e,r))(e.flags&131072)!==0&&(At=!0);else return a.lanes=e.lanes,ln(e,a,r)}return ac(e,a,n,l,r)}function Kp(e,a,n,l){var r=l.children,c=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(l=a.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~c}else l=0,a.child=null;return Jp(e,a,c,n,l)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Es(a,c!==null?c.cachePool:null),c!==null?Wu(a,c):Dr(),Pu(a);else return l=a.lanes=536870912,Jp(e,a,c!==null?c.baseLanes|n:n,n,l)}else c!==null?(Es(a,c.cachePool),Wu(a,c),Cn(),a.memoizedState=null):(e!==null&&Es(a,null),Dr(),Cn());return Zt(e,a,r,n),a.child}function Oi(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Jp(e,a,n,l,r){var c=kr();return c=c===null?null:{parent:Dt._currentValue,pool:c},a.memoizedState={baseLanes:n,cachePool:c},e!==null&&Es(a,null),Dr(),Pu(a),e!==null&&ql(e,a,l,!0),a.childLanes=r,null}function Xs(e,a){return a=Ks({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Fp(e,a,n){return dl(a,e.child,null,n),e=Xs(a,a.pendingProps),e.flags|=2,ya(a),a.memoizedState=null,e}function qg(e,a,n){var l=a.pendingProps,r=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Ke){if(l.mode==="hidden")return e=Xs(a,l),a.lanes=536870912,Oi(null,e);if(Ar(a),(e=ft)?(e=cf(e,Oa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:yn!==null?{id:$a,overflow:Va}:null,retryLane:536870912,hydrationErrors:null},n=Ou(e),n.return=a,a.child=n,Qt=a,ft=null)):e=null,e===null)throw jn(a);return a.lanes=536870912,null}return Xs(a,l)}var c=e.memoizedState;if(c!==null){var u=c.dehydrated;if(Ar(a),r)if(a.flags&256)a.flags&=-257,a=Fp(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(At||ql(e,a,n,!1),r=(n&e.childLanes)!==0,At||r){if(l=ut,l!==null&&(u=N(l,n),u!==0&&u!==c.retryLane))throw c.retryLane=u,al(e,u),ra(l,e,u),tc;no(),a=Fp(e,a,n)}else e=c.treeContext,ft=Ua(u.nextSibling),Qt=a,Ke=!0,vn=null,Oa=!1,e!==null&&Ru(a,e),a=Xs(a,l),a.flags|=4096;return a}return e=Pa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Zs(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function ac(e,a,n,l,r){return sl(a),n=Rr(e,a,n,l,void 0,r),l=Hr(),e!==null&&!At?(Lr(e,a,r),ln(e,a,r)):(Ke&&l&&gr(a),a.flags|=1,Zt(e,a,n,r),a.child)}function Wp(e,a,n,l,r,c){return sl(a),a.updateQueue=null,n=ep(a,l,n,r),Iu(e),l=Hr(),e!==null&&!At?(Lr(e,a,c),ln(e,a,c)):(Ke&&l&&gr(a),a.flags|=1,Zt(e,a,n,c),a.child)}function Pp(e,a,n,l,r){if(sl(a),a.stateNode===null){var c=Ul,u=n.contextType;typeof u=="object"&&u!==null&&(c=Xt(u)),c=new n(l,c),a.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Ir,a.stateNode=c,c._reactInternals=a,c=a.stateNode,c.props=l,c.state=a.memoizedState,c.refs={},zr(a),u=n.contextType,c.context=typeof u=="object"&&u!==null?Xt(u):Ul,c.state=a.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Pr(a,n,u,l),c.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(u=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),u!==c.state&&Ir.enqueueReplaceState(c,c.state,null),zi(a,l,c,r),Ci(),c.state=a.memoizedState),typeof c.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){c=a.stateNode;var g=a.memoizedProps,k=pl(n,g);c.props=k;var Q=c.context,P=n.contextType;u=Ul,typeof P=="object"&&P!==null&&(u=Xt(P));var le=n.getDerivedStateFromProps;P=typeof le=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=a.pendingProps!==g,P||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||Q!==u)&&Lp(a,c,l,u),Nn=!1;var K=a.memoizedState;c.state=K,zi(a,l,c,r),Ci(),Q=a.memoizedState,g||K!==Q||Nn?(typeof le=="function"&&(Pr(a,n,le,l),Q=a.memoizedState),(k=Nn||Hp(a,n,k,l,K,Q,u))?(P||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(a.flags|=4194308)):(typeof c.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=Q),c.props=l,c.state=Q,c.context=u,l=k):(typeof c.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{c=a.stateNode,Tr(e,a),u=a.memoizedProps,P=pl(n,u),c.props=P,le=a.pendingProps,K=c.context,Q=n.contextType,k=Ul,typeof Q=="object"&&Q!==null&&(k=Xt(Q)),g=n.getDerivedStateFromProps,(Q=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(u!==le||K!==k)&&Lp(a,c,l,k),Nn=!1,K=a.memoizedState,c.state=K,zi(a,l,c,r),Ci();var F=a.memoizedState;u!==le||K!==F||Nn||e!==null&&e.dependencies!==null&&zs(e.dependencies)?(typeof g=="function"&&(Pr(a,n,g,l),F=a.memoizedState),(P=Nn||Hp(a,n,P,l,K,F,k)||e!==null&&e.dependencies!==null&&zs(e.dependencies))?(Q||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,F,k),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,F,k)),typeof c.componentDidUpdate=="function"&&(a.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&K===e.memoizedState||(a.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&K===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=F),c.props=l,c.state=F,c.context=k,l=P):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&K===e.memoizedState||(a.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&K===e.memoizedState||(a.flags|=1024),l=!1)}return c=l,Zs(e,a),l=(a.flags&128)!==0,c||l?(c=a.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:c.render(),a.flags|=1,e!==null&&l?(a.child=dl(a,e.child,null,r),a.child=dl(a,null,n,r)):Zt(e,a,n,r),a.memoizedState=c.state,e=a.child):e=ln(e,a,r),e}function Ip(e,a,n,l){return ll(),a.flags|=256,Zt(e,a,n,l),a.child}var nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lc(e){return{baseLanes:e,cachePool:Yu()}}function ic(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=ja),e}function em(e,a,n){var l=a.pendingProps,r=!1,c=(a.flags&128)!==0,u;if((u=c)||(u=e!==null&&e.memoizedState===null?!1:(St.current&2)!==0),u&&(r=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ke){if(r?kn(a):Cn(),(e=ft)?(e=cf(e,Oa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:yn!==null?{id:$a,overflow:Va}:null,retryLane:536870912,hydrationErrors:null},n=Ou(e),n.return=a,a.child=n,Qt=a,ft=null)):e=null,e===null)throw jn(a);return Gc(e)?a.lanes=32:a.lanes=536870912,null}var g=l.children;return l=l.fallback,r?(Cn(),r=a.mode,g=Ks({mode:"hidden",children:g},r),l=nl(l,r,n,null),g.return=a,l.return=a,g.sibling=l,a.child=g,l=a.child,l.memoizedState=lc(n),l.childLanes=ic(e,u,n),a.memoizedState=nc,Oi(null,l)):(kn(a),sc(a,g))}var k=e.memoizedState;if(k!==null&&(g=k.dehydrated,g!==null)){if(c)a.flags&256?(kn(a),a.flags&=-257,a=oc(e,a,n)):a.memoizedState!==null?(Cn(),a.child=e.child,a.flags|=128,a=null):(Cn(),g=l.fallback,r=a.mode,l=Ks({mode:"visible",children:l.children},r),g=nl(g,r,n,null),g.flags|=2,l.return=a,g.return=a,l.sibling=g,a.child=l,dl(a,e.child,null,n),l=a.child,l.memoizedState=lc(n),l.childLanes=ic(e,u,n),a.memoizedState=nc,a=Oi(null,l));else if(kn(a),Gc(g)){if(u=g.nextSibling&&g.nextSibling.dataset,u)var Q=u.dgst;u=Q,l=Error(d(419)),l.stack="",l.digest=u,ji({value:l,source:null,stack:null}),a=oc(e,a,n)}else if(At||ql(e,a,n,!1),u=(n&e.childLanes)!==0,At||u){if(u=ut,u!==null&&(l=N(u,n),l!==0&&l!==k.retryLane))throw k.retryLane=l,al(e,l),ra(u,e,l),tc;Bc(g)||no(),a=oc(e,a,n)}else Bc(g)?(a.flags|=192,a.child=e.child,a=null):(e=k.treeContext,ft=Ua(g.nextSibling),Qt=a,Ke=!0,vn=null,Oa=!1,e!==null&&Ru(a,e),a=sc(a,l.children),a.flags|=4096);return a}return r?(Cn(),g=l.fallback,r=a.mode,k=e.child,Q=k.sibling,l=Pa(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,Q!==null?g=Pa(Q,g):(g=nl(g,r,n,null),g.flags|=2),g.return=a,l.return=a,l.sibling=g,a.child=l,Oi(null,l),l=a.child,g=e.child.memoizedState,g===null?g=lc(n):(r=g.cachePool,r!==null?(k=Dt._currentValue,r=r.parent!==k?{parent:k,pool:k}:r):r=Yu(),g={baseLanes:g.baseLanes|n,cachePool:r}),l.memoizedState=g,l.childLanes=ic(e,u,n),a.memoizedState=nc,Oi(e.child,l)):(kn(a),n=e.child,e=n.sibling,n=Pa(n,{mode:"visible",children:l.children}),n.return=a,n.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=n,a.memoizedState=null,n)}function sc(e,a){return a=Ks({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Ks(e,a){return e=ga(22,e,null,a),e.lanes=0,e}function oc(e,a,n){return dl(a,e.child,null,n),e=sc(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function tm(e,a,n){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),wr(e.return,a,n)}function rc(e,a,n,l,r,c){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r,treeForkCount:c}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=r,u.treeForkCount=c)}function am(e,a,n){var l=a.pendingProps,r=l.revealOrder,c=l.tail;l=l.children;var u=St.current,g=(u&2)!==0;if(g?(u=u&1|2,a.flags|=128):u&=1,de(St,u),Zt(e,a,l,n),l=Ke?vi:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tm(e,n,a);else if(e.tag===19)tm(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=a.child,r=null;n!==null;)e=n.alternate,e!==null&&Rs(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=a.child,a.child=null):(r=n.sibling,n.sibling=null),rc(a,!1,r,n,c,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=a.child,a.child=null;r!==null;){if(e=r.alternate,e!==null&&Rs(e)===null){a.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}rc(a,!0,n,null,c,l);break;case"together":rc(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function ln(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),En|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(ql(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,n=Pa(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=Pa(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function cc(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&zs(e)))}function Bg(e,a,n){switch(a.tag){case 3:pt(a,a.stateNode.containerInfo),wn(a,Dt,e.memoizedState.cache),ll();break;case 27:case 5:We(a);break;case 4:pt(a,a.stateNode.containerInfo);break;case 10:wn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ar(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(kn(a),a.flags|=128,null):(n&a.child.childLanes)!==0?em(e,a,n):(kn(a),e=ln(e,a,n),e!==null?e.sibling:null);kn(a);break;case 19:var r=(e.flags&128)!==0;if(l=(n&a.childLanes)!==0,l||(ql(e,a,n,!1),l=(n&a.childLanes)!==0),r){if(l)return am(e,a,n);a.flags|=128}if(r=a.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),de(St,St.current),l)break;return null;case 22:return a.lanes=0,Kp(e,a,n,a.pendingProps);case 24:wn(a,Dt,e.memoizedState.cache)}return ln(e,a,n)}function nm(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)At=!0;else{if(!cc(e,n)&&(a.flags&128)===0)return At=!1,Bg(e,a,n);At=(e.flags&131072)!==0}else At=!1,Ke&&(a.flags&1048576)!==0&&Uu(a,vi,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=rl(a.elementType),a.type=e,typeof e=="function")fr(e)?(l=pl(e,l),a.tag=1,a=Pp(null,a,e,l,n)):(a.tag=0,a=ac(null,a,e,l,n));else{if(e!=null){var r=e.$$typeof;if(r===I){a.tag=11,a=Qp(null,a,e,l,n);break e}else if(r===T){a.tag=14,a=Xp(null,a,e,l,n);break e}}throw a=E(e)||e,Error(d(306,a,""))}}return a;case 0:return ac(e,a,a.type,a.pendingProps,n);case 1:return l=a.type,r=pl(l,a.pendingProps),Pp(e,a,l,r,n);case 3:e:{if(pt(a,a.stateNode.containerInfo),e===null)throw Error(d(387));l=a.pendingProps;var c=a.memoizedState;r=c.element,Tr(e,a),zi(a,l,null,n);var u=a.memoizedState;if(l=u.cache,wn(a,Dt,l),l!==c.cache&&Nr(a,[Dt],n,!0),Ci(),l=u.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=c,a.memoizedState=c,a.flags&256){a=Ip(e,a,l,n);break e}else if(l!==r){r=Ea(Error(d(424)),a),ji(r),a=Ip(e,a,l,n);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ft=Ua(e.firstChild),Qt=a,Ke=!0,vn=null,Oa=!0,n=Ku(a,null,l,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ll(),l===r){a=ln(e,a,n);break e}Zt(e,a,l,n)}a=a.child}return a;case 26:return Zs(e,a),e===null?(n=hf(a.type,null,a.pendingProps,null))?a.memoizedState=n:Ke||(n=a.type,e=a.pendingProps,l=uo(Se.current).createElement(n),l[yt]=a,l[aa]=e,Kt(l,n,e),Yt(l),a.stateNode=l):a.memoizedState=hf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return We(a),e===null&&Ke&&(l=a.stateNode=pf(a.type,a.pendingProps,Se.current),Qt=a,Oa=!0,r=ft,Un(a.type)?(Yc=r,ft=Ua(l.firstChild)):ft=r),Zt(e,a,a.pendingProps.children,n),Zs(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Ke&&((r=l=ft)&&(l=xb(l,a.type,a.pendingProps,Oa),l!==null?(a.stateNode=l,Qt=a,ft=Ua(l.firstChild),Oa=!1,r=!0):r=!1),r||jn(a)),We(a),r=a.type,c=a.pendingProps,u=e!==null?e.memoizedProps:null,l=c.children,Hc(r,c)?l=null:u!==null&&Hc(r,u)&&(a.flags|=32),a.memoizedState!==null&&(r=Rr(e,a,Mg,null,null,n),Ki._currentValue=r),Zs(e,a),Zt(e,a,l,n),a.child;case 6:return e===null&&Ke&&((e=n=ft)&&(n=gb(n,a.pendingProps,Oa),n!==null?(a.stateNode=n,Qt=a,ft=null,e=!0):e=!1),e||jn(a)),null;case 13:return em(e,a,n);case 4:return pt(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=dl(a,null,l,n):Zt(e,a,l,n),a.child;case 11:return Qp(e,a,a.type,a.pendingProps,n);case 7:return Zt(e,a,a.pendingProps,n),a.child;case 8:return Zt(e,a,a.pendingProps.children,n),a.child;case 12:return Zt(e,a,a.pendingProps.children,n),a.child;case 10:return l=a.pendingProps,wn(a,a.type,l.value),Zt(e,a,l.children,n),a.child;case 9:return r=a.type._context,l=a.pendingProps.children,sl(a),r=Xt(r),l=l(r),a.flags|=1,Zt(e,a,l,n),a.child;case 14:return Xp(e,a,a.type,a.pendingProps,n);case 15:return Zp(e,a,a.type,a.pendingProps,n);case 19:return am(e,a,n);case 31:return qg(e,a,n);case 22:return Kp(e,a,n,a.pendingProps);case 24:return sl(a),l=Xt(Dt),e===null?(r=kr(),r===null&&(r=ut,c=_r(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),a.memoizedState={parent:l,cache:r},zr(a),wn(a,Dt,r)):((e.lanes&n)!==0&&(Tr(e,a),zi(a,null,null,n),Ci()),r=e.memoizedState,c=a.memoizedState,r.parent!==l?(r={parent:l,cache:l},a.memoizedState=r,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=r),wn(a,Dt,l)):(l=c.cache,wn(a,Dt,l),l!==r.cache&&Nr(a,[Dt],n,!0))),Zt(e,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function sn(e){e.flags|=4}function dc(e,a,n,l,r){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Em())e.flags|=8192;else throw cl=Ds,Cr}else e.flags&=-16777217}function lm(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vf(a))if(Em())e.flags|=8192;else throw cl=Ds,Cr}function Js(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?De():536870912,e.lanes|=a,Wl|=a)}function Ai(e,a){if(!Ke)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ht(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(a)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,a}function Gg(e,a,n){var l=a.pendingProps;switch(br(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(a),null;case 1:return ht(a),null;case 3:return n=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),tn(Dt),Be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ll(a)?sn(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,vr())),ht(a),null;case 26:var r=a.type,c=a.memoizedState;return e===null?(sn(a),c!==null?(ht(a),lm(a,c)):(ht(a),dc(a,r,null,l,n))):c?c!==e.memoizedState?(sn(a),ht(a),lm(a,c)):(ht(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&sn(a),ht(a),dc(a,r,e,l,n)),null;case 27:if(Ht(a),n=Se.current,r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&sn(a);else{if(!l){if(a.stateNode===null)throw Error(d(166));return ht(a),null}e=ue.current,Ll(a)?Hu(a):(e=pf(r,l,n),a.stateNode=e,sn(a))}return ht(a),null;case 5:if(Ht(a),r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&sn(a);else{if(!l){if(a.stateNode===null)throw Error(d(166));return ht(a),null}if(c=ue.current,Ll(a))Hu(a);else{var u=uo(Se.current);switch(c){case 1:c=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=u.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?u.createElement(r,{is:l.is}):u.createElement(r)}}c[yt]=a,c[aa]=l;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)c.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=c;e:switch(Kt(c,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&sn(a)}}return ht(a),dc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&sn(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(d(166));if(e=Se.current,Ll(a)){if(e=a.stateNode,n=a.memoizedProps,l=null,r=Qt,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[yt]=a,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||ef(e.nodeValue,n)),e||jn(a,!0)}else e=uo(e).createTextNode(l),e[yt]=a,a.stateNode=e}return ht(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(l=Ll(a),n!==null){if(e===null){if(!l)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[yt]=a}else ll(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ht(a),e=!1}else n=vr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(ya(a),a):(ya(a),null);if((a.flags&128)!==0)throw Error(d(558))}return ht(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ll(a),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=a.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[yt]=a}else ll(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ht(a),r=!1}else r=vr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return a.flags&256?(ya(a),a):(ya(a),null)}return ya(a),(a.flags&128)!==0?(a.lanes=n,a):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=a.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),Js(a,a.updateQueue),ht(a),null);case 4:return Be(),e===null&&Dc(a.stateNode.containerInfo),ht(a),null;case 10:return tn(a.type),ht(a),null;case 19:if(X(St),l=a.memoizedState,l===null)return ht(a),null;if(r=(a.flags&128)!==0,c=l.rendering,c===null)if(r)Ai(l,!1);else{if(wt!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(c=Rs(e),c!==null){for(a.flags|=128,Ai(l,!1),e=c.updateQueue,a.updateQueue=e,Js(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)Du(n,e),n=n.sibling;return de(St,St.current&1|2),Ke&&Ia(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&be()>eo&&(a.flags|=128,r=!0,Ai(l,!1),a.lanes=4194304)}else{if(!r)if(e=Rs(c),e!==null){if(a.flags|=128,r=!0,e=e.updateQueue,a.updateQueue=e,Js(a,e),Ai(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Ke)return ht(a),null}else 2*be()-l.renderingStartTime>eo&&n!==536870912&&(a.flags|=128,r=!0,Ai(l,!1),a.lanes=4194304);l.isBackwards?(c.sibling=a.child,a.child=c):(e=l.last,e!==null?e.sibling=c:a.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=be(),e.sibling=null,n=St.current,de(St,r?n&1|2:n&1),Ke&&Ia(a,l.treeForkCount),e):(ht(a),null);case 22:case 23:return ya(a),Or(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(n&536870912)!==0&&(a.flags&128)===0&&(ht(a),a.subtreeFlags&6&&(a.flags|=8192)):ht(a),n=a.updateQueue,n!==null&&Js(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==n&&(a.flags|=2048),e!==null&&X(ol),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),tn(Dt),ht(a),null;case 25:return null;case 30:return null}throw Error(d(156,a.tag))}function Yg(e,a){switch(br(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return tn(Dt),Be(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Ht(a),null;case 31:if(a.memoizedState!==null){if(ya(a),a.alternate===null)throw Error(d(340));ll()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ya(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));ll()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return X(St),null;case 4:return Be(),null;case 10:return tn(a.type),null;case 22:case 23:return ya(a),Or(),e!==null&&X(ol),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return tn(Dt),null;case 25:return null;default:return null}}function im(e,a){switch(br(a),a.tag){case 3:tn(Dt),Be();break;case 26:case 27:case 5:Ht(a);break;case 4:Be();break;case 31:a.memoizedState!==null&&ya(a);break;case 13:ya(a);break;case 19:X(St);break;case 10:tn(a.type);break;case 22:case 23:ya(a),Or(),e!==null&&X(ol);break;case 24:tn(Dt)}}function Ui(e,a){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){l=void 0;var c=n.create,u=n.inst;l=c(),u.destroy=l}n=n.next}while(n!==r)}}catch(g){lt(a,a.return,g)}}function zn(e,a,n){try{var l=a.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var u=l.inst,g=u.destroy;if(g!==void 0){u.destroy=void 0,r=a;var k=n,Q=g;try{Q()}catch(P){lt(r,k,P)}}}l=l.next}while(l!==c)}}catch(P){lt(a,a.return,P)}}function sm(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{Fu(a,n)}catch(l){lt(e,e.return,l)}}}function om(e,a,n){n.props=pl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){lt(e,a,l)}}function Ri(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){lt(e,a,r)}}function Qa(e,a){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(r){lt(e,a,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){lt(e,a,r)}else n.current=null}function rm(e){var a=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(r){lt(e,e.return,r)}}function uc(e,a,n){try{var l=e.stateNode;db(l,e.type,n,a),l[aa]=a}catch(r){lt(e,e.return,r)}}function cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Un(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Un(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mc(e,a,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(e),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=Fa));else if(l!==4&&(l===27&&Un(e.type)&&(n=e.stateNode,a=null),e=e.child,e!==null))for(mc(e,a,n),e=e.sibling;e!==null;)mc(e,a,n),e=e.sibling}function Fs(e,a,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(l!==4&&(l===27&&Un(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Fs(e,a,n),e=e.sibling;e!==null;)Fs(e,a,n),e=e.sibling}function dm(e){var a=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,r=a.attributes;r.length;)a.removeAttributeNode(r[0]);Kt(a,l,n),a[yt]=e,a[aa]=n}catch(c){lt(e,e.return,c)}}var on=!1,Ut=!1,fc=!1,um=typeof WeakSet=="function"?WeakSet:Set,$t=null;function $g(e,a){if(e=e.containerInfo,Uc=bo,e=Nu(e),or(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var u=0,g=-1,k=-1,Q=0,P=0,le=e,K=null;t:for(;;){for(var F;le!==n||r!==0&&le.nodeType!==3||(g=u+r),le!==c||l!==0&&le.nodeType!==3||(k=u+l),le.nodeType===3&&(u+=le.nodeValue.length),(F=le.firstChild)!==null;)K=le,le=F;for(;;){if(le===e)break t;if(K===n&&++Q===r&&(g=u),K===c&&++P===l&&(k=u),(F=le.nextSibling)!==null)break;le=K,K=le.parentNode}le=F}n=g===-1||k===-1?null:{start:g,end:k}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rc={focusedElem:e,selectionRange:n},bo=!1,$t=a;$t!==null;)if(a=$t,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,$t=e;else for(;$t!==null;){switch(a=$t,c=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=a,r=c.memoizedProps,c=c.memoizedState,l=n.stateNode;try{var ve=pl(n.type,r);e=l.getSnapshotBeforeUpdate(ve,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(Te){lt(n,n.return,Te)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,n=e.nodeType,n===9)qc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=a.sibling,e!==null){e.return=a.return,$t=e;break}$t=a.return}}function pm(e,a,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:cn(e,n),l&4&&Ui(5,n);break;case 1:if(cn(e,n),l&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(u){lt(n,n.return,u)}else{var r=pl(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(r,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){lt(n,n.return,u)}}l&64&&sm(n),l&512&&Ri(n,n.return);break;case 3:if(cn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{Fu(e,a)}catch(u){lt(n,n.return,u)}}break;case 27:a===null&&l&4&&dm(n);case 26:case 5:cn(e,n),a===null&&l&4&&rm(n),l&512&&Ri(n,n.return);break;case 12:cn(e,n);break;case 31:cn(e,n),l&4&&hm(e,n);break;case 13:cn(e,n),l&4&&xm(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Pg.bind(null,n),bb(e,n))));break;case 22:if(l=n.memoizedState!==null||on,!l){a=a!==null&&a.memoizedState!==null||Ut,r=on;var c=Ut;on=l,(Ut=a)&&!c?dn(e,n,(n.subtreeFlags&8772)!==0):cn(e,n),on=r,Ut=c}break;case 30:break;default:cn(e,n)}}function mm(e){var a=e.alternate;a!==null&&(e.alternate=null,mm(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Vo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gt=null,la=!1;function rn(e,a,n){for(n=n.child;n!==null;)fm(e,a,n),n=n.sibling}function fm(e,a,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Qe,n)}catch{}switch(n.tag){case 26:Ut||Qa(n,a),rn(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ut||Qa(n,a);var l=gt,r=la;Un(n.type)&&(gt=n.stateNode,la=!1),rn(e,a,n),Qi(n.stateNode),gt=l,la=r;break;case 5:Ut||Qa(n,a);case 6:if(l=gt,r=la,gt=null,rn(e,a,n),gt=l,la=r,gt!==null)if(la)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(n.stateNode)}catch(c){lt(n,a,c)}else try{gt.removeChild(n.stateNode)}catch(c){lt(n,a,c)}break;case 18:gt!==null&&(la?(e=gt,of(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ii(e)):of(gt,n.stateNode));break;case 4:l=gt,r=la,gt=n.stateNode.containerInfo,la=!0,rn(e,a,n),gt=l,la=r;break;case 0:case 11:case 14:case 15:zn(2,n,a),Ut||zn(4,n,a),rn(e,a,n);break;case 1:Ut||(Qa(n,a),l=n.stateNode,typeof l.componentWillUnmount=="function"&&om(n,a,l)),rn(e,a,n);break;case 21:rn(e,a,n);break;case 22:Ut=(l=Ut)||n.memoizedState!==null,rn(e,a,n),Ut=l;break;default:rn(e,a,n)}}function hm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ii(e)}catch(n){lt(a,a.return,n)}}}function xm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ii(e)}catch(n){lt(a,a.return,n)}}function Vg(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new um),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new um),a;default:throw Error(d(435,e.tag))}}function Ws(e,a){var n=Vg(e);a.forEach(function(l){if(!n.has(l)){n.add(l);var r=Ig.bind(null,e,l);l.then(r,r)}})}function ia(e,a){var n=a.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l],c=e,u=a,g=u;e:for(;g!==null;){switch(g.tag){case 27:if(Un(g.type)){gt=g.stateNode,la=!1;break e}break;case 5:gt=g.stateNode,la=!1;break e;case 3:case 4:gt=g.stateNode.containerInfo,la=!0;break e}g=g.return}if(gt===null)throw Error(d(160));fm(c,u,r),gt=null,la=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)gm(a,e),a=a.sibling}var qa=null;function gm(e,a){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ia(a,e),sa(e),l&4&&(zn(3,e,e.return),Ui(3,e),zn(5,e,e.return));break;case 1:ia(a,e),sa(e),l&512&&(Ut||n===null||Qa(n,n.return)),l&64&&on&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var r=qa;if(ia(a,e),sa(e),l&512&&(Ut||n===null||Qa(n,n.return)),l&4){var c=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[ci]||c[yt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),Kt(c,l,n),c[yt]=e,Yt(c),l=c;break e;case"link":var u=bf("link","href",r).get(l+(n.href||""));if(u){for(var g=0;g<u.length;g++)if(c=u[g],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(g,1);break t}}c=r.createElement(l),Kt(c,l,n),r.head.appendChild(c);break;case"meta":if(u=bf("meta","content",r).get(l+(n.content||""))){for(g=0;g<u.length;g++)if(c=u[g],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(g,1);break t}}c=r.createElement(l),Kt(c,l,n),r.head.appendChild(c);break;default:throw Error(d(468,l))}c[yt]=e,Yt(c),l=c}e.stateNode=l}else yf(r,e.type,e.stateNode);else e.stateNode=gf(r,l,e.memoizedProps);else c!==l?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,l===null?yf(r,e.type,e.stateNode):gf(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&uc(e,e.memoizedProps,n.memoizedProps)}break;case 27:ia(a,e),sa(e),l&512&&(Ut||n===null||Qa(n,n.return)),n!==null&&l&4&&uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ia(a,e),sa(e),l&512&&(Ut||n===null||Qa(n,n.return)),e.flags&32){r=e.stateNode;try{zl(r,"")}catch(ve){lt(e,e.return,ve)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,uc(e,r,n!==null?n.memoizedProps:r)),l&1024&&(fc=!0);break;case 6:if(ia(a,e),sa(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ve){lt(e,e.return,ve)}}break;case 3:if(fo=null,r=qa,qa=po(a.containerInfo),ia(a,e),qa=r,sa(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ii(a.containerInfo)}catch(ve){lt(e,e.return,ve)}fc&&(fc=!1,bm(e));break;case 4:l=qa,qa=po(e.stateNode.containerInfo),ia(a,e),sa(e),qa=l;break;case 12:ia(a,e),sa(e);break;case 31:ia(a,e),sa(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ws(e,l)));break;case 13:ia(a,e),sa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Is=be()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ws(e,l)));break;case 22:r=e.memoizedState!==null;var k=n!==null&&n.memoizedState!==null,Q=on,P=Ut;if(on=Q||r,Ut=P||k,ia(a,e),Ut=P,on=Q,sa(e),l&8192)e:for(a=e.stateNode,a._visibility=r?a._visibility&-2:a._visibility|1,r&&(n===null||k||on||Ut||ml(e)),n=null,a=e;;){if(a.tag===5||a.tag===26){if(n===null){k=n=a;try{if(c=k.stateNode,r)u=c.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{g=k.stateNode;var le=k.memoizedProps.style,K=le!=null&&le.hasOwnProperty("display")?le.display:null;g.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(ve){lt(k,k.return,ve)}}}else if(a.tag===6){if(n===null){k=a;try{k.stateNode.nodeValue=r?"":k.memoizedProps}catch(ve){lt(k,k.return,ve)}}}else if(a.tag===18){if(n===null){k=a;try{var F=k.stateNode;r?rf(F,!0):rf(k.stateNode,!1)}catch(ve){lt(k,k.return,ve)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Ws(e,n))));break;case 19:ia(a,e),sa(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ws(e,l)));break;case 30:break;case 21:break;default:ia(a,e),sa(e)}}function sa(e){var a=e.flags;if(a&2){try{for(var n,l=e.return;l!==null;){if(cm(l)){n=l;break}l=l.return}if(n==null)throw Error(d(160));switch(n.tag){case 27:var r=n.stateNode,c=pc(e);Fs(e,c,r);break;case 5:var u=n.stateNode;n.flags&32&&(zl(u,""),n.flags&=-33);var g=pc(e);Fs(e,g,u);break;case 3:case 4:var k=n.stateNode.containerInfo,Q=pc(e);mc(e,Q,k);break;default:throw Error(d(161))}}catch(P){lt(e,e.return,P)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function bm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;bm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function cn(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)pm(e,a.alternate,a),a=a.sibling}function ml(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:zn(4,a,a.return),ml(a);break;case 1:Qa(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&om(a,a.return,n),ml(a);break;case 27:Qi(a.stateNode);case 26:case 5:Qa(a,a.return),ml(a);break;case 22:a.memoizedState===null&&ml(a);break;case 30:ml(a);break;default:ml(a)}e=e.sibling}}function dn(e,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,r=e,c=a,u=c.flags;switch(c.tag){case 0:case 11:case 15:dn(r,c,n),Ui(4,c);break;case 1:if(dn(r,c,n),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Q){lt(l,l.return,Q)}if(l=c,r=l.updateQueue,r!==null){var g=l.stateNode;try{var k=r.shared.hiddenCallbacks;if(k!==null)for(r.shared.hiddenCallbacks=null,r=0;r<k.length;r++)Ju(k[r],g)}catch(Q){lt(l,l.return,Q)}}n&&u&64&&sm(c),Ri(c,c.return);break;case 27:dm(c);case 26:case 5:dn(r,c,n),n&&l===null&&u&4&&rm(c),Ri(c,c.return);break;case 12:dn(r,c,n);break;case 31:dn(r,c,n),n&&u&4&&hm(r,c);break;case 13:dn(r,c,n),n&&u&4&&xm(r,c);break;case 22:c.memoizedState===null&&dn(r,c,n),Ri(c,c.return);break;case 30:break;default:dn(r,c,n)}a=a.sibling}}function hc(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&wi(n))}function xc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&wi(e))}function Ba(e,a,n,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ym(e,a,n,l),a=a.sibling}function ym(e,a,n,l){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(e,a,n,l),r&2048&&Ui(9,a);break;case 1:Ba(e,a,n,l);break;case 3:Ba(e,a,n,l),r&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&wi(e)));break;case 12:if(r&2048){Ba(e,a,n,l),e=a.stateNode;try{var c=a.memoizedProps,u=c.id,g=c.onPostCommit;typeof g=="function"&&g(u,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){lt(a,a.return,k)}}else Ba(e,a,n,l);break;case 31:Ba(e,a,n,l);break;case 13:Ba(e,a,n,l);break;case 23:break;case 22:c=a.stateNode,u=a.alternate,a.memoizedState!==null?c._visibility&2?Ba(e,a,n,l):Hi(e,a):c._visibility&2?Ba(e,a,n,l):(c._visibility|=2,Kl(e,a,n,l,(a.subtreeFlags&10256)!==0||!1)),r&2048&&hc(u,a);break;case 24:Ba(e,a,n,l),r&2048&&xc(a.alternate,a);break;default:Ba(e,a,n,l)}}function Kl(e,a,n,l,r){for(r=r&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var c=e,u=a,g=n,k=l,Q=u.flags;switch(u.tag){case 0:case 11:case 15:Kl(c,u,g,k,r),Ui(8,u);break;case 23:break;case 22:var P=u.stateNode;u.memoizedState!==null?P._visibility&2?Kl(c,u,g,k,r):Hi(c,u):(P._visibility|=2,Kl(c,u,g,k,r)),r&&Q&2048&&hc(u.alternate,u);break;case 24:Kl(c,u,g,k,r),r&&Q&2048&&xc(u.alternate,u);break;default:Kl(c,u,g,k,r)}a=a.sibling}}function Hi(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,l=a,r=l.flags;switch(l.tag){case 22:Hi(n,l),r&2048&&hc(l.alternate,l);break;case 24:Hi(n,l),r&2048&&xc(l.alternate,l);break;default:Hi(n,l)}a=a.sibling}}var Li=8192;function Jl(e,a,n){if(e.subtreeFlags&Li)for(e=e.child;e!==null;)vm(e,a,n),e=e.sibling}function vm(e,a,n){switch(e.tag){case 26:Jl(e,a,n),e.flags&Li&&e.memoizedState!==null&&Eb(n,qa,e.memoizedState,e.memoizedProps);break;case 5:Jl(e,a,n);break;case 3:case 4:var l=qa;qa=po(e.stateNode.containerInfo),Jl(e,a,n),qa=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Li,Li=16777216,Jl(e,a,n),Li=l):Jl(e,a,n));break;default:Jl(e,a,n)}}function jm(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function qi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var l=a[n];$t=l,Nm(l,e)}jm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wm(e),e=e.sibling}function wm(e){switch(e.tag){case 0:case 11:case 15:qi(e),e.flags&2048&&zn(9,e,e.return);break;case 3:qi(e);break;case 12:qi(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Ps(e)):qi(e);break;default:qi(e)}}function Ps(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var l=a[n];$t=l,Nm(l,e)}jm(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:zn(8,a,a.return),Ps(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,Ps(a));break;default:Ps(a)}e=e.sibling}}function Nm(e,a){for(;$t!==null;){var n=$t;switch(n.tag){case 0:case 11:case 15:zn(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:wi(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,$t=l;else e:for(n=e;$t!==null;){l=$t;var r=l.sibling,c=l.return;if(mm(l),l===n){$t=null;break e}if(r!==null){r.return=c,$t=r;break e}$t=c}}}var Qg={getCacheForType:function(e){var a=Xt(Dt),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return Xt(Dt).controller.signal}},Xg=typeof WeakMap=="function"?WeakMap:Map,tt=0,ut=null,Ye=null,Xe=0,nt=0,va=null,Tn=!1,Fl=!1,gc=!1,un=0,wt=0,En=0,fl=0,bc=0,ja=0,Wl=0,Bi=null,oa=null,yc=!1,Is=0,_m=0,eo=1/0,to=null,Mn=null,Lt=0,Dn=null,Pl=null,pn=0,vc=0,jc=null,Sm=null,Gi=0,wc=null;function wa(){return(tt&2)!==0&&Xe!==0?Xe&-Xe:O.T!==null?zc():Oe()}function km(){if(ja===0)if((Xe&536870912)===0||Ke){var e=ma;ma<<=1,(ma&3932160)===0&&(ma=262144),ja=e}else ja=536870912;return e=ba.current,e!==null&&(e.flags|=32),ja}function ra(e,a,n){(e===ut&&(nt===2||nt===9)||e.cancelPendingCommit!==null)&&(Il(e,0),On(e,Xe,ja,!1)),Fe(e,n),((tt&2)===0||e!==ut)&&(e===ut&&((tt&2)===0&&(fl|=n),wt===4&&On(e,Xe,ja,!1)),Xa(e))}function Cm(e,a,n){if((tt&6)!==0)throw Error(d(327));var l=!n&&(a&127)===0&&(a&e.expiredLanes)===0||ce(e,a),r=l?Jg(e,a):_c(e,a,!0),c=l;do{if(r===0){Fl&&!l&&On(e,a,0,!1);break}else{if(n=e.current.alternate,c&&!Zg(n)){r=_c(e,a,!1),c=!1;continue}if(r===2){if(c=a,e.errorRecoveryDisabledLanes&c)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var g=e;r=Bi;var k=g.current.memoizedState.isDehydrated;if(k&&(Il(g,u).flags|=256),u=_c(g,u,!1),u!==2){if(gc&&!k){g.errorRecoveryDisabledLanes|=c,fl|=c,r=4;break e}c=oa,oa=r,c!==null&&(oa===null?oa=c:oa.push.apply(oa,c))}r=u}if(c=!1,r!==2)continue}}if(r===1){Il(e,0),On(e,a,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a)break;case 6:On(l,a,ja,!Tn);break e;case 2:oa=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(r=Is+300-be(),10<r)){if(On(l,a,ja,!Tn),H(l,0,!0)!==0)break e;pn=a,l.timeoutHandle=lf(zm.bind(null,l,n,oa,to,yc,a,ja,fl,Wl,Tn,c,"Throttled",-0,0),r);break e}zm(l,n,oa,to,yc,a,ja,fl,Wl,Tn,c,null,-0,0)}}break}while(!0);Xa(e)}function zm(e,a,n,l,r,c,u,g,k,Q,P,le,K,F){if(e.timeoutHandle=-1,le=a.subtreeFlags,le&8192||(le&16785408)===16785408){le={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fa},vm(a,c,le);var ve=(c&62914560)===c?Is-be():(c&4194048)===c?_m-be():0;if(ve=Mb(le,ve),ve!==null){pn=c,e.cancelPendingCommit=ve(Rm.bind(null,e,a,c,n,l,r,u,g,k,P,le,null,K,F)),On(e,c,u,!Q);return}}Rm(e,a,c,n,l,r,u,g,k)}function Zg(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var r=n[l],c=r.getSnapshot;r=r.value;try{if(!xa(c(),r))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function On(e,a,n,l){a&=~bc,a&=~fl,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var r=a;0<r;){var c=31-ot(r),u=1<<c;l[c]=-1,r&=~u}n!==0&&Ee(e,n,a)}function ao(){return(tt&6)===0?(Yi(0),!1):!0}function Nc(){if(Ye!==null){if(nt===0)var e=Ye.return;else e=Ye,en=il=null,qr(e),$l=null,_i=0,e=Ye;for(;e!==null;)im(e.alternate,e),e=e.return;Ye=null}}function Il(e,a){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,mb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),pn=0,Nc(),ut=e,Ye=n=Pa(e.current,null),Xe=a,nt=0,va=null,Tn=!1,Fl=ce(e,a),gc=!1,Wl=ja=bc=fl=En=wt=0,oa=Bi=null,yc=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var r=31-ot(l),c=1<<r;a|=e[r],l&=~c}return un=a,Ns(),n}function Tm(e,a){He=null,O.H=Di,a===Yl||a===Ms?(a=Qu(),nt=3):a===Cr?(a=Qu(),nt=4):nt=a===tc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,va=a,Ye===null&&(wt=1,Qs(e,Ea(a,e.current)))}function Em(){var e=ba.current;return e===null?!0:(Xe&4194048)===Xe?Aa===null:(Xe&62914560)===Xe||(Xe&536870912)!==0?e===Aa:!1}function Mm(){var e=O.H;return O.H=Di,e===null?Di:e}function Dm(){var e=O.A;return O.A=Qg,e}function no(){wt=4,Tn||(Xe&4194048)!==Xe&&ba.current!==null||(Fl=!0),(En&134217727)===0&&(fl&134217727)===0||ut===null||On(ut,Xe,ja,!1)}function _c(e,a,n){var l=tt;tt|=2;var r=Mm(),c=Dm();(ut!==e||Xe!==a)&&(to=null,Il(e,a)),a=!1;var u=wt;e:do try{if(nt!==0&&Ye!==null){var g=Ye,k=va;switch(nt){case 8:Nc(),u=6;break e;case 3:case 2:case 9:case 6:ba.current===null&&(a=!0);var Q=nt;if(nt=0,va=null,ei(e,g,k,Q),n&&Fl){u=0;break e}break;default:Q=nt,nt=0,va=null,ei(e,g,k,Q)}}Kg(),u=wt;break}catch(P){Tm(e,P)}while(!0);return a&&e.shellSuspendCounter++,en=il=null,tt=l,O.H=r,O.A=c,Ye===null&&(ut=null,Xe=0,Ns()),u}function Kg(){for(;Ye!==null;)Om(Ye)}function Jg(e,a){var n=tt;tt|=2;var l=Mm(),r=Dm();ut!==e||Xe!==a?(to=null,eo=be()+500,Il(e,a)):Fl=ce(e,a);e:do try{if(nt!==0&&Ye!==null){a=Ye;var c=va;t:switch(nt){case 1:nt=0,va=null,ei(e,a,c,1);break;case 2:case 9:if($u(c)){nt=0,va=null,Am(a);break}a=function(){nt!==2&&nt!==9||ut!==e||(nt=7),Xa(e)},c.then(a,a);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:$u(c)?(nt=0,va=null,Am(a)):(nt=0,va=null,ei(e,a,c,7));break;case 5:var u=null;switch(Ye.tag){case 26:u=Ye.memoizedState;case 5:case 27:var g=Ye;if(u?vf(u):g.stateNode.complete){nt=0,va=null;var k=g.sibling;if(k!==null)Ye=k;else{var Q=g.return;Q!==null?(Ye=Q,lo(Q)):Ye=null}break t}}nt=0,va=null,ei(e,a,c,5);break;case 6:nt=0,va=null,ei(e,a,c,6);break;case 8:Nc(),wt=6;break e;default:throw Error(d(462))}}Fg();break}catch(P){Tm(e,P)}while(!0);return en=il=null,O.H=l,O.A=r,tt=n,Ye!==null?0:(ut=null,Xe=0,Ns(),wt)}function Fg(){for(;Ye!==null&&!pa();)Om(Ye)}function Om(e){var a=nm(e.alternate,e,un);e.memoizedProps=e.pendingProps,a===null?lo(e):Ye=a}function Am(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=Wp(n,a,a.pendingProps,a.type,void 0,Xe);break;case 11:a=Wp(n,a,a.pendingProps,a.type.render,a.ref,Xe);break;case 5:qr(a);default:im(n,a),a=Ye=Du(a,un),a=nm(n,a,un)}e.memoizedProps=e.pendingProps,a===null?lo(e):Ye=a}function ei(e,a,n,l){en=il=null,qr(a),$l=null,_i=0;var r=a.return;try{if(Lg(e,r,a,n,Xe)){wt=1,Qs(e,Ea(n,e.current)),Ye=null;return}}catch(c){if(r!==null)throw Ye=r,c;wt=1,Qs(e,Ea(n,e.current)),Ye=null;return}a.flags&32768?(Ke||l===1?e=!0:Fl||(Xe&536870912)!==0?e=!1:(Tn=e=!0,(l===2||l===9||l===3||l===6)&&(l=ba.current,l!==null&&l.tag===13&&(l.flags|=16384))),Um(a,e)):lo(a)}function lo(e){var a=e;do{if((a.flags&32768)!==0){Um(a,Tn);return}e=a.return;var n=Gg(a.alternate,a,un);if(n!==null){Ye=n;return}if(a=a.sibling,a!==null){Ye=a;return}Ye=a=e}while(a!==null);wt===0&&(wt=5)}function Um(e,a){do{var n=Yg(e.alternate,e);if(n!==null){n.flags&=32767,Ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){Ye=e;return}Ye=e=n}while(e!==null);wt=6,Ye=null}function Rm(e,a,n,l,r,c,u,g,k){e.cancelPendingCommit=null;do io();while(Lt!==0);if((tt&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));if(c=a.lanes|a.childLanes,c|=pr,at(e,n,c,u,g,k),e===ut&&(Ye=ut=null,Xe=0),Pl=a,Dn=e,pn=n,vc=c,jc=r,Sm=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,eb(G,function(){return Gm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,r=J.p,J.p=2,u=tt,tt|=4;try{$g(e,a,n)}finally{tt=u,J.p=r,O.T=l}}Lt=1,Hm(),Lm(),qm()}}function Hm(){if(Lt===1){Lt=0;var e=Dn,a=Pl,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var l=J.p;J.p=2;var r=tt;tt|=4;try{gm(a,e);var c=Rc,u=Nu(e.containerInfo),g=c.focusedElem,k=c.selectionRange;if(u!==g&&g&&g.ownerDocument&&wu(g.ownerDocument.documentElement,g)){if(k!==null&&or(g)){var Q=k.start,P=k.end;if(P===void 0&&(P=Q),"selectionStart"in g)g.selectionStart=Q,g.selectionEnd=Math.min(P,g.value.length);else{var le=g.ownerDocument||document,K=le&&le.defaultView||window;if(K.getSelection){var F=K.getSelection(),ve=g.textContent.length,Te=Math.min(k.start,ve),dt=k.end===void 0?Te:Math.min(k.end,ve);!F.extend&&Te>dt&&(u=dt,dt=Te,Te=u);var L=ju(g,Te),M=ju(g,dt);if(L&&M&&(F.rangeCount!==1||F.anchorNode!==L.node||F.anchorOffset!==L.offset||F.focusNode!==M.node||F.focusOffset!==M.offset)){var $=le.createRange();$.setStart(L.node,L.offset),F.removeAllRanges(),Te>dt?(F.addRange($),F.extend(M.node,M.offset)):($.setEnd(M.node,M.offset),F.addRange($))}}}}for(le=[],F=g;F=F.parentNode;)F.nodeType===1&&le.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<le.length;g++){var ae=le[g];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}bo=!!Uc,Rc=Uc=null}finally{tt=r,J.p=l,O.T=n}}e.current=a,Lt=2}}function Lm(){if(Lt===2){Lt=0;var e=Dn,a=Pl,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var l=J.p;J.p=2;var r=tt;tt|=4;try{pm(e,a.alternate,a)}finally{tt=r,J.p=l,O.T=n}}Lt=3}}function qm(){if(Lt===4||Lt===3){Lt=0,z();var e=Dn,a=Pl,n=pn,l=Sm;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Lt=5:(Lt=0,Pl=Dn=null,Bm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Mn=null),xe(n),a=a.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Qe,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=O.T,r=J.p,J.p=2,O.T=null;try{for(var c=e.onRecoverableError,u=0;u<l.length;u++){var g=l[u];c(g.value,{componentStack:g.stack})}}finally{O.T=a,J.p=r}}(pn&3)!==0&&io(),Xa(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===wc?Gi++:(Gi=0,wc=e):Gi=0,Yi(0)}}function Bm(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,wi(a)))}function io(){return Hm(),Lm(),qm(),Gm()}function Gm(){if(Lt!==5)return!1;var e=Dn,a=vc;vc=0;var n=xe(pn),l=O.T,r=J.p;try{J.p=32>n?32:n,O.T=null,n=jc,jc=null;var c=Dn,u=pn;if(Lt=0,Pl=Dn=null,pn=0,(tt&6)!==0)throw Error(d(331));var g=tt;if(tt|=4,wm(c.current),ym(c,c.current,u,n),tt=g,Yi(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Qe,c)}catch{}return!0}finally{J.p=r,O.T=l,Bm(e,a)}}function Ym(e,a,n){a=Ea(n,a),a=ec(e.stateNode,a,2),e=Sn(e,a,2),e!==null&&(Fe(e,2),Xa(e))}function lt(e,a,n){if(e.tag===3)Ym(e,e,n);else for(;a!==null;){if(a.tag===3){Ym(a,e,n);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Mn===null||!Mn.has(l))){e=Ea(n,e),n=$p(2),l=Sn(a,n,2),l!==null&&(Vp(n,l,a,e),Fe(l,2),Xa(l));break}}a=a.return}}function Sc(e,a,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Xg;var r=new Set;l.set(a,r)}else r=l.get(a),r===void 0&&(r=new Set,l.set(a,r));r.has(n)||(gc=!0,r.add(n),e=Wg.bind(null,e,a,n),a.then(e,e))}function Wg(e,a,n){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ut===e&&(Xe&n)===n&&(wt===4||wt===3&&(Xe&62914560)===Xe&&300>be()-Is?(tt&2)===0&&Il(e,0):bc|=n,Wl===Xe&&(Wl=0)),Xa(e)}function $m(e,a){a===0&&(a=De()),e=al(e,a),e!==null&&(Fe(e,a),Xa(e))}function Pg(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),$m(e,n)}function Ig(e,a){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(a),$m(e,n)}function eb(e,a){return Ft(e,a)}var so=null,ti=null,kc=!1,oo=!1,Cc=!1,An=0;function Xa(e){e!==ti&&e.next===null&&(ti===null?so=ti=e:ti=ti.next=e),oo=!0,kc||(kc=!0,ab())}function Yi(e,a){if(!Cc&&oo){Cc=!0;do for(var n=!1,l=so;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var u=l.suspendedLanes,g=l.pingedLanes;c=(1<<31-ot(42|e)+1)-1,c&=r&~(u&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Zm(l,c))}else c=Xe,c=H(l,l===ut?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||ce(l,c)||(n=!0,Zm(l,c));l=l.next}while(n);Cc=!1}}function tb(){Vm()}function Vm(){oo=kc=!1;var e=0;An!==0&&pb()&&(e=An);for(var a=be(),n=null,l=so;l!==null;){var r=l.next,c=Qm(l,a);c===0?(l.next=null,n===null?so=r:n.next=r,r===null&&(ti=n)):(n=l,(e!==0||(c&3)!==0)&&(oo=!0)),l=r}Lt!==0&&Lt!==5||Yi(e),An!==0&&(An=0)}function Qm(e,a){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var u=31-ot(c),g=1<<u,k=r[u];k===-1?((g&n)===0||(g&l)!==0)&&(r[u]=se(g,a)):k<=a&&(e.expiredLanes|=g),c&=~g}if(a=ut,n=Xe,n=H(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===a&&(nt===2||nt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&_t(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ce(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(l!==null&&_t(l),xe(n)){case 2:case 8:n=st;break;case 32:n=G;break;case 268435456:n=je;break;default:n=G}return l=Xm.bind(null,e),n=Ft(n,l),e.callbackPriority=a,e.callbackNode=n,a}return l!==null&&l!==null&&_t(l),e.callbackPriority=2,e.callbackNode=null,2}function Xm(e,a){if(Lt!==0&&Lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(io()&&e.callbackNode!==n)return null;var l=Xe;return l=H(e,e===ut?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Cm(e,l,a),Qm(e,be()),e.callbackNode!=null&&e.callbackNode===n?Xm.bind(null,e):null)}function Zm(e,a){if(io())return null;Cm(e,a,!0)}function ab(){fb(function(){(tt&6)!==0?Ft(ye,tb):Vm()})}function zc(){if(An===0){var e=Bl;e===0&&(e=Ga,Ga<<=1,(Ga&261888)===0&&(Ga=256)),An=e}return An}function Km(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hs(""+e)}function Jm(e,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,e.id&&n.setAttribute("form",e.id),a.parentNode.insertBefore(n,a),e=new FormData(e),n.parentNode.removeChild(n),e}function nb(e,a,n,l,r){if(a==="submit"&&n&&n.stateNode===r){var c=Km((r[aa]||null).action),u=l.submitter;u&&(a=(a=u[aa]||null)?Km(a.formAction):u.getAttribute("formAction"),a!==null&&(c=a,u=null));var g=new ys("action","action",null,l,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(An!==0){var k=u?Jm(r,u):new FormData(r);Kr(n,{pending:!0,data:k,method:r.method,action:c},null,k)}}else typeof c=="function"&&(g.preventDefault(),k=u?Jm(r,u):new FormData(r),Kr(n,{pending:!0,data:k,method:r.method,action:c},c,k))},currentTarget:r}]})}}for(var Tc=0;Tc<ur.length;Tc++){var Ec=ur[Tc],lb=Ec.toLowerCase(),ib=Ec[0].toUpperCase()+Ec.slice(1);La(lb,"on"+ib)}La(ku,"onAnimationEnd"),La(Cu,"onAnimationIteration"),La(zu,"onAnimationStart"),La("dblclick","onDoubleClick"),La("focusin","onFocus"),La("focusout","onBlur"),La(jg,"onTransitionRun"),La(wg,"onTransitionStart"),La(Ng,"onTransitionCancel"),La(Tu,"onTransitionEnd"),kl("onMouseEnter",["mouseout","mouseover"]),kl("onMouseLeave",["mouseout","mouseover"]),kl("onPointerEnter",["pointerout","pointerover"]),kl("onPointerLeave",["pointerout","pointerover"]),Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($i));function Fm(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var c=void 0;if(a)for(var u=l.length-1;0<=u;u--){var g=l[u],k=g.instance,Q=g.currentTarget;if(g=g.listener,k!==c&&r.isPropagationStopped())break e;c=g,r.currentTarget=Q;try{c(r)}catch(P){ws(P)}r.currentTarget=null,c=k}else for(u=0;u<l.length;u++){if(g=l[u],k=g.instance,Q=g.currentTarget,g=g.listener,k!==c&&r.isPropagationStopped())break e;c=g,r.currentTarget=Q;try{c(r)}catch(P){ws(P)}r.currentTarget=null,c=k}}}}function $e(e,a){var n=a[$o];n===void 0&&(n=a[$o]=new Set);var l=e+"__bubble";n.has(l)||(Wm(a,e,2,!1),n.add(l))}function Mc(e,a,n){var l=0;a&&(l|=4),Wm(n,e,l,a)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Dc(e){if(!e[ro]){e[ro]=!0,Vd.forEach(function(n){n!=="selectionchange"&&(sb.has(n)||Mc(n,!1,e),Mc(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[ro]||(a[ro]=!0,Mc("selectionchange",!1,a))}}function Wm(e,a,n,l){switch(Cf(a)){case 2:var r=Ab;break;case 8:r=Ub;break;default:r=Zc}n=r.bind(null,a,n,e),r=void 0,!Po||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(a,n,{capture:!0,passive:r}):e.addEventListener(a,n,!0):r!==void 0?e.addEventListener(a,n,{passive:r}):e.addEventListener(a,n,!1)}function Oc(e,a,n,l,r){var c=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var g=l.stateNode.containerInfo;if(g===r)break;if(u===4)for(u=l.return;u!==null;){var k=u.tag;if((k===3||k===4)&&u.stateNode.containerInfo===r)return;u=u.return}for(;g!==null;){if(u=Nl(g),u===null)return;if(k=u.tag,k===5||k===6||k===26||k===27){l=c=u;continue e}g=g.parentNode}}l=l.return}au(function(){var Q=c,P=Fo(n),le=[];e:{var K=Eu.get(e);if(K!==void 0){var F=ys,ve=e;switch(e){case"keypress":if(gs(n)===0)break e;case"keydown":case"keyup":F=Ix;break;case"focusin":ve="focus",F=ar;break;case"focusout":ve="blur",F=ar;break;case"beforeblur":case"afterblur":F=ar;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=ag;break;case ku:case Cu:case zu:F=Vx;break;case Tu:F=lg;break;case"scroll":case"scrollend":F=qx;break;case"wheel":F=sg;break;case"copy":case"cut":case"paste":F=Xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=ou;break;case"toggle":case"beforetoggle":F=rg}var Te=(a&4)!==0,dt=!Te&&(e==="scroll"||e==="scrollend"),L=Te?K!==null?K+"Capture":null:K;Te=[];for(var M=Q,$;M!==null;){var ae=M;if($=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||$===null||L===null||(ae=ui(M,L),ae!=null&&Te.push(Vi(M,ae,$))),dt)break;M=M.return}0<Te.length&&(K=new F(K,ve,null,n,P),le.push({event:K,listeners:Te}))}}if((a&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",K&&n!==Jo&&(ve=n.relatedTarget||n.fromElement)&&(Nl(ve)||ve[wl]))break e;if((F||K)&&(K=P.window===P?P:(K=P.ownerDocument)?K.defaultView||K.parentWindow:window,F?(ve=n.relatedTarget||n.toElement,F=Q,ve=ve?Nl(ve):null,ve!==null&&(dt=x(ve),Te=ve.tag,ve!==dt||Te!==5&&Te!==27&&Te!==6)&&(ve=null)):(F=null,ve=Q),F!==ve)){if(Te=iu,ae="onMouseLeave",L="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(Te=ou,ae="onPointerLeave",L="onPointerEnter",M="pointer"),dt=F==null?K:di(F),$=ve==null?K:di(ve),K=new Te(ae,M+"leave",F,n,P),K.target=dt,K.relatedTarget=$,ae=null,Nl(P)===Q&&(Te=new Te(L,M+"enter",ve,n,P),Te.target=$,Te.relatedTarget=dt,ae=Te),dt=ae,F&&ve)t:{for(Te=ob,L=F,M=ve,$=0,ae=L;ae;ae=Te(ae))$++;ae=0;for(var ke=M;ke;ke=Te(ke))ae++;for(;0<$-ae;)L=Te(L),$--;for(;0<ae-$;)M=Te(M),ae--;for(;$--;){if(L===M||M!==null&&L===M.alternate){Te=L;break t}L=Te(L),M=Te(M)}Te=null}else Te=null;F!==null&&Pm(le,K,F,Te,!1),ve!==null&&dt!==null&&Pm(le,dt,ve,Te,!0)}}e:{if(K=Q?di(Q):window,F=K.nodeName&&K.nodeName.toLowerCase(),F==="select"||F==="input"&&K.type==="file")var Pe=hu;else if(mu(K))if(xu)Pe=bg;else{Pe=xg;var Ne=hg}else F=K.nodeName,!F||F.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?Q&&Ko(Q.elementType)&&(Pe=hu):Pe=gg;if(Pe&&(Pe=Pe(e,Q))){fu(le,Pe,n,P);break e}Ne&&Ne(e,K,Q),e==="focusout"&&Q&&K.type==="number"&&Q.memoizedProps.value!=null&&Zo(K,"number",K.value)}switch(Ne=Q?di(Q):window,e){case"focusin":(mu(Ne)||Ne.contentEditable==="true")&&(Dl=Ne,rr=Q,yi=null);break;case"focusout":yi=rr=Dl=null;break;case"mousedown":cr=!0;break;case"contextmenu":case"mouseup":case"dragend":cr=!1,_u(le,n,P);break;case"selectionchange":if(vg)break;case"keydown":case"keyup":_u(le,n,P)}var qe;if(lr)e:{switch(e){case"compositionstart":var Ze="onCompositionStart";break e;case"compositionend":Ze="onCompositionEnd";break e;case"compositionupdate":Ze="onCompositionUpdate";break e}Ze=void 0}else Ml?uu(e,n)&&(Ze="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ze="onCompositionStart");Ze&&(ru&&n.locale!=="ko"&&(Ml||Ze!=="onCompositionStart"?Ze==="onCompositionEnd"&&Ml&&(qe=nu()):(bn=P,Io="value"in bn?bn.value:bn.textContent,Ml=!0)),Ne=co(Q,Ze),0<Ne.length&&(Ze=new su(Ze,e,null,n,P),le.push({event:Ze,listeners:Ne}),qe?Ze.data=qe:(qe=pu(n),qe!==null&&(Ze.data=qe)))),(qe=dg?ug(e,n):pg(e,n))&&(Ze=co(Q,"onBeforeInput"),0<Ze.length&&(Ne=new su("onBeforeInput","beforeinput",null,n,P),le.push({event:Ne,listeners:Ze}),Ne.data=qe)),nb(le,e,Q,n,P)}Fm(le,a)})}function Vi(e,a,n){return{instance:e,listener:a,currentTarget:n}}function co(e,a){for(var n=a+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=ui(e,n),r!=null&&l.unshift(Vi(e,r,c)),r=ui(e,a),r!=null&&l.push(Vi(e,r,c))),e.tag===3)return l;e=e.return}return[]}function ob(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pm(e,a,n,l,r){for(var c=a._reactName,u=[];n!==null&&n!==l;){var g=n,k=g.alternate,Q=g.stateNode;if(g=g.tag,k!==null&&k===l)break;g!==5&&g!==26&&g!==27||Q===null||(k=Q,r?(Q=ui(n,c),Q!=null&&u.unshift(Vi(n,Q,k))):r||(Q=ui(n,c),Q!=null&&u.push(Vi(n,Q,k)))),n=n.return}u.length!==0&&e.push({event:a,listeners:u})}var rb=/\r\n?/g,cb=/\u0000|\uFFFD/g;function Im(e){return(typeof e=="string"?e:""+e).replace(rb,`
`).replace(cb,"")}function ef(e,a){return a=Im(a),Im(e)===a}function ct(e,a,n,l,r,c){switch(n){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||zl(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&zl(e,""+l);break;case"className":ms(e,"class",l);break;case"tabIndex":ms(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ms(e,n,l);break;case"style":eu(e,l,c);break;case"data":if(a!=="object"){ms(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=hs(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(a!=="input"&&ct(e,a,"name",r.name,r,null),ct(e,a,"formEncType",r.formEncType,r,null),ct(e,a,"formMethod",r.formMethod,r,null),ct(e,a,"formTarget",r.formTarget,r,null)):(ct(e,a,"encType",r.encType,r,null),ct(e,a,"method",r.method,r,null),ct(e,a,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=hs(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Fa);break;case"onScroll":l!=null&&$e("scroll",e);break;case"onScrollEnd":l!=null&&$e("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=hs(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":$e("beforetoggle",e),$e("toggle",e),ps(e,"popover",l);break;case"xlinkActuate":Ja(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ja(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ja(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ja(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ja(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ja(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ja(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ja(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ja(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ps(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Hx.get(n)||n,ps(e,n,l))}}function Ac(e,a,n,l,r,c){switch(n){case"style":eu(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"children":typeof l=="string"?zl(e,l):(typeof l=="number"||typeof l=="bigint")&&zl(e,""+l);break;case"onScroll":l!=null&&$e("scroll",e);break;case"onScrollEnd":l!=null&&$e("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Fa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),a=n.slice(2,r?n.length-7:void 0),c=e[aa]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(a,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,l,r);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):ps(e,n,l)}}}function Kt(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$e("error",e),$e("load",e);var l=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var u=n[c];if(u!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:ct(e,a,c,u,n,null)}}r&&ct(e,a,"srcSet",n.srcSet,n,null),l&&ct(e,a,"src",n.src,n,null);return;case"input":$e("invalid",e);var g=c=u=r=null,k=null,Q=null;for(l in n)if(n.hasOwnProperty(l)){var P=n[l];if(P!=null)switch(l){case"name":r=P;break;case"type":u=P;break;case"checked":k=P;break;case"defaultChecked":Q=P;break;case"value":c=P;break;case"defaultValue":g=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(d(137,a));break;default:ct(e,a,l,P,n,null)}}Fd(e,c,g,k,Q,u,r,!1);return;case"select":$e("invalid",e),l=u=c=null;for(r in n)if(n.hasOwnProperty(r)&&(g=n[r],g!=null))switch(r){case"value":c=g;break;case"defaultValue":u=g;break;case"multiple":l=g;default:ct(e,a,r,g,n,null)}a=c,n=u,e.multiple=!!l,a!=null?Cl(e,!!l,a,!1):n!=null&&Cl(e,!!l,n,!0);return;case"textarea":$e("invalid",e),c=r=l=null;for(u in n)if(n.hasOwnProperty(u)&&(g=n[u],g!=null))switch(u){case"value":l=g;break;case"defaultValue":r=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(91));break;default:ct(e,a,u,g,n,null)}Pd(e,l,r,c);return;case"option":for(k in n)if(n.hasOwnProperty(k)&&(l=n[k],l!=null))switch(k){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ct(e,a,k,l,n,null)}return;case"dialog":$e("beforetoggle",e),$e("toggle",e),$e("cancel",e),$e("close",e);break;case"iframe":case"object":$e("load",e);break;case"video":case"audio":for(l=0;l<$i.length;l++)$e($i[l],e);break;case"image":$e("error",e),$e("load",e);break;case"details":$e("toggle",e);break;case"embed":case"source":case"link":$e("error",e),$e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in n)if(n.hasOwnProperty(Q)&&(l=n[Q],l!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:ct(e,a,Q,l,n,null)}return;default:if(Ko(a)){for(P in n)n.hasOwnProperty(P)&&(l=n[P],l!==void 0&&Ac(e,a,P,l,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(l=n[g],l!=null&&ct(e,a,g,l,n,null))}function db(e,a,n,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,u=null,g=null,k=null,Q=null,P=null;for(F in n){var le=n[F];if(n.hasOwnProperty(F)&&le!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":k=le;default:l.hasOwnProperty(F)||ct(e,a,F,null,l,le)}}for(var K in l){var F=l[K];if(le=n[K],l.hasOwnProperty(K)&&(F!=null||le!=null))switch(K){case"type":c=F;break;case"name":r=F;break;case"checked":Q=F;break;case"defaultChecked":P=F;break;case"value":u=F;break;case"defaultValue":g=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(d(137,a));break;default:F!==le&&ct(e,a,K,F,l,le)}}Xo(e,u,g,k,Q,P,c,r);return;case"select":F=u=g=K=null;for(c in n)if(k=n[c],n.hasOwnProperty(c)&&k!=null)switch(c){case"value":break;case"multiple":F=k;default:l.hasOwnProperty(c)||ct(e,a,c,null,l,k)}for(r in l)if(c=l[r],k=n[r],l.hasOwnProperty(r)&&(c!=null||k!=null))switch(r){case"value":K=c;break;case"defaultValue":g=c;break;case"multiple":u=c;default:c!==k&&ct(e,a,r,c,l,k)}a=g,n=u,l=F,K!=null?Cl(e,!!n,K,!1):!!l!=!!n&&(a!=null?Cl(e,!!n,a,!0):Cl(e,!!n,n?[]:"",!1));return;case"textarea":F=K=null;for(g in n)if(r=n[g],n.hasOwnProperty(g)&&r!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ct(e,a,g,null,l,r)}for(u in l)if(r=l[u],c=n[u],l.hasOwnProperty(u)&&(r!=null||c!=null))switch(u){case"value":K=r;break;case"defaultValue":F=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&ct(e,a,u,r,l,c)}Wd(e,K,F);return;case"option":for(var ve in n)if(K=n[ve],n.hasOwnProperty(ve)&&K!=null&&!l.hasOwnProperty(ve))switch(ve){case"selected":e.selected=!1;break;default:ct(e,a,ve,null,l,K)}for(k in l)if(K=l[k],F=n[k],l.hasOwnProperty(k)&&K!==F&&(K!=null||F!=null))switch(k){case"selected":e.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:ct(e,a,k,K,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in n)K=n[Te],n.hasOwnProperty(Te)&&K!=null&&!l.hasOwnProperty(Te)&&ct(e,a,Te,null,l,K);for(Q in l)if(K=l[Q],F=n[Q],l.hasOwnProperty(Q)&&K!==F&&(K!=null||F!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(d(137,a));break;default:ct(e,a,Q,K,l,F)}return;default:if(Ko(a)){for(var dt in n)K=n[dt],n.hasOwnProperty(dt)&&K!==void 0&&!l.hasOwnProperty(dt)&&Ac(e,a,dt,void 0,l,K);for(P in l)K=l[P],F=n[P],!l.hasOwnProperty(P)||K===F||K===void 0&&F===void 0||Ac(e,a,P,K,l,F);return}}for(var L in n)K=n[L],n.hasOwnProperty(L)&&K!=null&&!l.hasOwnProperty(L)&&ct(e,a,L,null,l,K);for(le in l)K=l[le],F=n[le],!l.hasOwnProperty(le)||K===F||K==null&&F==null||ct(e,a,le,K,l,F)}function tf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ub(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var r=n[l],c=r.transferSize,u=r.initiatorType,g=r.duration;if(c&&g&&tf(u)){for(u=0,g=r.responseEnd,l+=1;l<n.length;l++){var k=n[l],Q=k.startTime;if(Q>g)break;var P=k.transferSize,le=k.initiatorType;P&&tf(le)&&(k=k.responseEnd,u+=P*(k<g?1:(g-Q)/(k-Q)))}if(--l,a+=8*(c+u)/(r.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uc=null,Rc=null;function uo(e){return e.nodeType===9?e:e.ownerDocument}function af(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nf(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Hc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Lc=null;function pb(){var e=window.event;return e&&e.type==="popstate"?e===Lc?!1:(Lc=e,!0):(Lc=null,!1)}var lf=typeof setTimeout=="function"?setTimeout:void 0,mb=typeof clearTimeout=="function"?clearTimeout:void 0,sf=typeof Promise=="function"?Promise:void 0,fb=typeof queueMicrotask=="function"?queueMicrotask:typeof sf<"u"?function(e){return sf.resolve(null).then(e).catch(hb)}:lf;function hb(e){setTimeout(function(){throw e})}function Un(e){return e==="head"}function of(e,a){var n=a,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(r),ii(a);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Qi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Qi(n);for(var c=n.firstChild;c;){var u=c.nextSibling,g=c.nodeName;c[ci]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=u}}else n==="body"&&Qi(e.ownerDocument.body);n=r}while(n);ii(a)}function rf(e,a){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function qc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qc(n),Vo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function xb(e,a,n,l){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ci])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Ua(e.nextSibling),e===null)break}return null}function gb(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ua(e.nextSibling),e===null))return null;return e}function cf(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ua(e.nextSibling),e===null))return null;return e}function Bc(e){return e.data==="$?"||e.data==="$~"}function Gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bb(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var l=function(){a(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ua(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Yc=null;function df(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return Ua(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function uf(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function pf(e,a,n){switch(a=uo(n),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Qi(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Vo(e)}var Ra=new Map,mf=new Set;function po(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var mn=J.d;J.d={f:yb,r:vb,D:jb,C:wb,L:Nb,m:_b,X:kb,S:Sb,M:Cb};function yb(){var e=mn.f(),a=ao();return e||a}function vb(e){var a=_l(e);a!==null&&a.tag===5&&a.type==="form"?Tp(a):mn.r(e)}var ai=typeof document>"u"?null:document;function ff(e,a,n){var l=ai;if(l&&typeof a=="string"&&a){var r=za(a);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),mf.has(r)||(mf.add(r),e={rel:e,crossOrigin:n,href:a},l.querySelector(r)===null&&(a=l.createElement("link"),Kt(a,"link",e),Yt(a),l.head.appendChild(a)))}}function jb(e){mn.D(e),ff("dns-prefetch",e,null)}function wb(e,a){mn.C(e,a),ff("preconnect",e,a)}function Nb(e,a,n){mn.L(e,a,n);var l=ai;if(l&&e&&a){var r='link[rel="preload"][as="'+za(a)+'"]';a==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+za(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+za(n.imageSizes)+'"]')):r+='[href="'+za(e)+'"]';var c=r;switch(a){case"style":c=ni(e);break;case"script":c=li(e)}Ra.has(c)||(e=b({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),Ra.set(c,e),l.querySelector(r)!==null||a==="style"&&l.querySelector(Xi(c))||a==="script"&&l.querySelector(Zi(c))||(a=l.createElement("link"),Kt(a,"link",e),Yt(a),l.head.appendChild(a)))}}function _b(e,a){mn.m(e,a);var n=ai;if(n&&e){var l=a&&typeof a.as=="string"?a.as:"script",r='link[rel="modulepreload"][as="'+za(l)+'"][href="'+za(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=li(e)}if(!Ra.has(c)&&(e=b({rel:"modulepreload",href:e},a),Ra.set(c,e),n.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Zi(c)))return}l=n.createElement("link"),Kt(l,"link",e),Yt(l),n.head.appendChild(l)}}}function Sb(e,a,n){mn.S(e,a,n);var l=ai;if(l&&e){var r=Sl(l).hoistableStyles,c=ni(e);a=a||"default";var u=r.get(c);if(!u){var g={loading:0,preload:null};if(u=l.querySelector(Xi(c)))g.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":a},n),(n=Ra.get(c))&&$c(e,n);var k=u=l.createElement("link");Yt(k),Kt(k,"link",e),k._p=new Promise(function(Q,P){k.onload=Q,k.onerror=P}),k.addEventListener("load",function(){g.loading|=1}),k.addEventListener("error",function(){g.loading|=2}),g.loading|=4,mo(u,a,l)}u={type:"stylesheet",instance:u,count:1,state:g},r.set(c,u)}}}function kb(e,a){mn.X(e,a);var n=ai;if(n&&e){var l=Sl(n).hoistableScripts,r=li(e),c=l.get(r);c||(c=n.querySelector(Zi(r)),c||(e=b({src:e,async:!0},a),(a=Ra.get(r))&&Vc(e,a),c=n.createElement("script"),Yt(c),Kt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Cb(e,a){mn.M(e,a);var n=ai;if(n&&e){var l=Sl(n).hoistableScripts,r=li(e),c=l.get(r);c||(c=n.querySelector(Zi(r)),c||(e=b({src:e,async:!0,type:"module"},a),(a=Ra.get(r))&&Vc(e,a),c=n.createElement("script"),Yt(c),Kt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function hf(e,a,n,l){var r=(r=Se.current)?po(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=ni(n.href),n=Sl(r).hoistableStyles,l=n.get(a),l||(l={type:"style",instance:null,count:0,state:null},n.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ni(n.href);var c=Sl(r).hoistableStyles,u=c.get(e);if(u||(r=r.ownerDocument||r,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,u),(c=r.querySelector(Xi(e)))&&!c._p&&(u.instance=c,u.state.loading=5),Ra.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ra.set(e,n),c||zb(r,e,n,u.state))),a&&l===null)throw Error(d(528,""));return u}if(a&&l!==null)throw Error(d(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=li(n),n=Sl(r).hoistableScripts,l=n.get(a),l||(l={type:"script",instance:null,count:0,state:null},n.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ni(e){return'href="'+za(e)+'"'}function Xi(e){return'link[rel="stylesheet"]['+e+"]"}function xf(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function zb(e,a,n,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Kt(a,"link",n),Yt(a),e.head.appendChild(a))}function li(e){return'[src="'+za(e)+'"]'}function Zi(e){return"script[async]"+e}function gf(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+za(n.href)+'"]');if(l)return a.instance=l,Yt(l),l;var r=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Yt(l),Kt(l,"style",r),mo(l,n.precedence,e),a.instance=l;case"stylesheet":r=ni(n.href);var c=e.querySelector(Xi(r));if(c)return a.state.loading|=4,a.instance=c,Yt(c),c;l=xf(n),(r=Ra.get(r))&&$c(l,r),c=(e.ownerDocument||e).createElement("link"),Yt(c);var u=c;return u._p=new Promise(function(g,k){u.onload=g,u.onerror=k}),Kt(c,"link",l),a.state.loading|=4,mo(c,n.precedence,e),a.instance=c;case"script":return c=li(n.src),(r=e.querySelector(Zi(c)))?(a.instance=r,Yt(r),r):(l=n,(r=Ra.get(c))&&(l=b({},n),Vc(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Yt(r),Kt(r,"link",l),e.head.appendChild(r),a.instance=r);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,mo(l,n.precedence,e));return a.instance}function mo(e,a,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,u=0;u<l.length;u++){var g=l[u];if(g.dataset.precedence===a)c=g;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function $c(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Vc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var fo=null;function bf(e,a,n){if(fo===null){var l=new Map,r=fo=new Map;r.set(n,l)}else r=fo,l=r.get(n),l||(l=new Map,r.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[ci]||c[yt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var u=c.getAttribute(a)||"";u=e+u;var g=l.get(u);g?g.push(c):l.set(u,[c])}}return l}function yf(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function Tb(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function vf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Eb(e,a,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=ni(l.href),c=a.querySelector(Xi(r));if(c){a=c._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=ho.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=c,Yt(c);return}c=a.ownerDocument||a,l=xf(l),(r=Ra.get(r))&&$c(l,r),c=c.createElement("link"),Yt(c);var u=c;u._p=new Promise(function(g,k){u.onload=g,u.onerror=k}),Kt(c,"link",l),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ho.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var Qc=0;function Mb(e,a){return e.stylesheets&&e.count===0&&go(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&go(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+a);0<e.imgBytes&&Qc===0&&(Qc=62500*ub());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&go(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Qc?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function ho(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)go(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xo=null;function go(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xo=new Map,a.forEach(Db,e),xo=null,ho.call(e))}function Db(e,a){if(!(a.state.loading&4)){var n=xo.get(e);if(n)var l=n.get(null);else{n=new Map,xo.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var u=r[c];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),l=u)}l&&n.set(null,l)}r=a.instance,u=r.getAttribute("data-precedence"),c=n.get(u)||l,c===l&&n.set(null,r),n.set(u,r),this.count++,l=ho.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),a.state.loading|=4}}var Ki={$$typeof:D,Provider:null,Consumer:null,_currentValue:h,_currentValue2:h,_threadCount:0};function Ob(e,a,n,l,r,c,u,g,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ze(0),this.hiddenUpdates=ze(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function jf(e,a,n,l,r,c,u,g,k,Q,P,le){return e=new Ob(e,a,n,u,k,Q,P,le,g),a=1,c===!0&&(a|=24),c=ga(3,null,null,a),e.current=c,c.stateNode=e,a=_r(),a.refCount++,e.pooledCache=a,a.refCount++,c.memoizedState={element:l,isDehydrated:n,cache:a},zr(c),e}function wf(e){return e?(e=Ul,e):Ul}function Nf(e,a,n,l,r,c){r=wf(r),l.context===null?l.context=r:l.pendingContext=r,l=_n(a),l.payload={element:n},c=c===void 0?null:c,c!==null&&(l.callback=c),n=Sn(e,l,a),n!==null&&(ra(n,e,a),ki(n,e,a))}function _f(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function Xc(e,a){_f(e,a),(e=e.alternate)&&_f(e,a)}function Sf(e){if(e.tag===13||e.tag===31){var a=al(e,67108864);a!==null&&ra(a,e,67108864),Xc(e,67108864)}}function kf(e){if(e.tag===13||e.tag===31){var a=wa();a=he(a);var n=al(e,a);n!==null&&ra(n,e,a),Xc(e,a)}}var bo=!0;function Ab(e,a,n,l){var r=O.T;O.T=null;var c=J.p;try{J.p=2,Zc(e,a,n,l)}finally{J.p=c,O.T=r}}function Ub(e,a,n,l){var r=O.T;O.T=null;var c=J.p;try{J.p=8,Zc(e,a,n,l)}finally{J.p=c,O.T=r}}function Zc(e,a,n,l){if(bo){var r=Kc(l);if(r===null)Oc(e,a,l,yo,n),zf(e,l);else if(Hb(r,e,a,n,l))l.stopPropagation();else if(zf(e,l),a&4&&-1<Rb.indexOf(e)){for(;r!==null;){var c=_l(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var u=It(c.pendingLanes);if(u!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;u;){var k=1<<31-ot(u);g.entanglements[1]|=k,u&=~k}Xa(c),(tt&6)===0&&(eo=be()+500,Yi(0))}}break;case 31:case 13:g=al(c,2),g!==null&&ra(g,c,2),ao(),Xc(c,2)}if(c=Kc(l),c===null&&Oc(e,a,l,yo,n),c===r)break;r=c}r!==null&&l.stopPropagation()}else Oc(e,a,l,null,n)}}function Kc(e){return e=Fo(e),Jc(e)}var yo=null;function Jc(e){if(yo=null,e=Nl(e),e!==null){var a=x(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=f(a),e!==null)return e;e=null}else if(n===31){if(e=y(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return yo=e,null}function Cf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Le()){case ye:return 2;case st:return 8;case G:case we:return 32;case je:return 268435456;default:return 32}default:return 32}}var Fc=!1,Rn=null,Hn=null,Ln=null,Ji=new Map,Fi=new Map,qn=[],Rb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zf(e,a){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Ji.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(a.pointerId)}}function Wi(e,a,n,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:a,domEventName:n,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},a!==null&&(a=_l(a),a!==null&&Sf(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,r!==null&&a.indexOf(r)===-1&&a.push(r),e)}function Hb(e,a,n,l,r){switch(a){case"focusin":return Rn=Wi(Rn,e,a,n,l,r),!0;case"dragenter":return Hn=Wi(Hn,e,a,n,l,r),!0;case"mouseover":return Ln=Wi(Ln,e,a,n,l,r),!0;case"pointerover":var c=r.pointerId;return Ji.set(c,Wi(Ji.get(c)||null,e,a,n,l,r)),!0;case"gotpointercapture":return c=r.pointerId,Fi.set(c,Wi(Fi.get(c)||null,e,a,n,l,r)),!0}return!1}function Tf(e){var a=Nl(e.target);if(a!==null){var n=x(a);if(n!==null){if(a=n.tag,a===13){if(a=f(n),a!==null){e.blockedOn=a,Mt(e.priority,function(){kf(n)});return}}else if(a===31){if(a=y(n),a!==null){e.blockedOn=a,Mt(e.priority,function(){kf(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vo(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=Kc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Jo=l,n.target.dispatchEvent(l),Jo=null}else return a=_l(n),a!==null&&Sf(a),e.blockedOn=n,!1;a.shift()}return!0}function Ef(e,a,n){vo(e)&&n.delete(a)}function Lb(){Fc=!1,Rn!==null&&vo(Rn)&&(Rn=null),Hn!==null&&vo(Hn)&&(Hn=null),Ln!==null&&vo(Ln)&&(Ln=null),Ji.forEach(Ef),Fi.forEach(Ef)}function jo(e,a){e.blockedOn===a&&(e.blockedOn=null,Fc||(Fc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Lb)))}var wo=null;function Mf(e){wo!==e&&(wo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){wo===e&&(wo=null);for(var a=0;a<e.length;a+=3){var n=e[a],l=e[a+1],r=e[a+2];if(typeof l!="function"){if(Jc(l||n)===null)continue;break}var c=_l(n);c!==null&&(e.splice(a,3),a-=3,Kr(c,{pending:!0,data:r,method:n.method,action:l},l,r))}}))}function ii(e){function a(k){return jo(k,e)}Rn!==null&&jo(Rn,e),Hn!==null&&jo(Hn,e),Ln!==null&&jo(Ln,e),Ji.forEach(a),Fi.forEach(a);for(var n=0;n<qn.length;n++){var l=qn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)Tf(n),n.blockedOn===null&&qn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var r=n[l],c=n[l+1],u=r[aa]||null;if(typeof c=="function")u||Mf(n);else if(u){var g=null;if(c&&c.hasAttribute("formAction")){if(r=c,u=c[aa]||null)g=u.formAction;else if(Jc(r)!==null)continue}else g=u.action;typeof g=="function"?n[l+1]=g:(n.splice(l,3),l-=3),Mf(n)}}}function Df(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(u){return r=u})},focusReset:"manual",scroll:"manual"})}function a(){r!==null&&(r(),r=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),r!==null&&(r(),r=null)}}}function Wc(e){this._internalRoot=e}No.prototype.render=Wc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var n=a.current,l=wa();Nf(n,l,e,a,null,null)},No.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Nf(e.current,2,null,e,null,null),ao(),a[wl]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var a=Oe();e={blockedOn:null,target:e,priority:a};for(var n=0;n<qn.length&&a!==0&&a<qn[n].priority;n++);qn.splice(n,0,e),n===0&&Tf(e)}};var Of=i.version;if(Of!=="19.2.6")throw Error(d(527,Of,"19.2.6"));J.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=v(a),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var qb={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Qe=_o.inject(qb),Ge=_o}catch{}}return Ii.createRoot=function(e,a){if(!p(e))throw Error(d(299));var n=!1,l="",r=qp,c=Bp,u=Gp;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=jf(e,1,!1,null,null,n,l,null,r,c,u,Df),e[wl]=a.current,Dc(e),new Wc(a)},Ii.hydrateRoot=function(e,a,n){if(!p(e))throw Error(d(299));var l=!1,r="",c=qp,u=Bp,g=Gp,k=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(k=n.formState)),a=jf(e,1,!0,a,n??null,l,r,k,c,u,g,Df),a.context=wf(null),n=a.current,l=wa(),l=he(l),r=_n(l),r.callback=null,Sn(n,r,l),n=l,a.current.lanes=n,Fe(a,n),Xa(a),e[wl]=a.current,Dc(e),new No(a)},Ii.version="19.2.6",Ii}var $f;function Pb(){if($f)return ed.exports;$f=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),ed.exports=Wb(),ed.exports}var Ib=Pb();Xh();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},is.apply(this,arguments)}var Qn;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Qn||(Qn={}));const Vf="popstate";function ey(s){s===void 0&&(s={});function i(p,x){let{pathname:f="/",search:y="",hash:_=""}=yl(p.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),jd("",{pathname:f,search:y,hash:_},x.state&&x.state.usr||null,x.state&&x.state.key||"default")}function o(p,x){let f=p.document.querySelector("base"),y="";if(f&&f.getAttribute("href")){let _=p.location.href,v=_.indexOf("#");y=v===-1?_:_.slice(0,v)}return y+"#"+(typeof x=="string"?x:Ro(x))}function d(p,x){Bo(p.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(x)+")")}return ay(i,o,d,s)}function Ct(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function Bo(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ty(){return Math.random().toString(36).substr(2,8)}function Qf(s,i){return{usr:s.state,key:s.key,idx:i}}function jd(s,i,o,d){return o===void 0&&(o=null),is({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof i=="string"?yl(i):i,{state:o,key:i&&i.key||d||ty()})}function Ro(s){let{pathname:i="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function yl(s){let i={};if(s){let o=s.indexOf("#");o>=0&&(i.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(i.search=s.substr(d),s=s.substr(0,d)),s&&(i.pathname=s)}return i}function ay(s,i,o,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:x=!1}=d,f=p.history,y=Qn.Pop,_=null,v=j();v==null&&(v=0,f.replaceState(is({},f.state,{idx:v}),""));function j(){return(f.state||{idx:null}).idx}function b(){y=Qn.Pop;let C=j(),B=C==null?null:C-v;v=C,_&&_({action:y,location:Z.location,delta:B})}function q(C,B){y=Qn.Push;let A=jd(Z.location,C,B);o&&o(A,C),v=j()+1;let D=Qf(A,v),I=Z.createHref(A);try{f.pushState(D,"",I)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;p.location.assign(I)}x&&_&&_({action:y,location:Z.location,delta:1})}function V(C,B){y=Qn.Replace;let A=jd(Z.location,C,B);o&&o(A,C),v=j();let D=Qf(A,v),I=Z.createHref(A);f.replaceState(D,"",I),x&&_&&_({action:y,location:Z.location,delta:0})}function ee(C){let B=p.location.origin!=="null"?p.location.origin:p.location.href,A=typeof C=="string"?C:Ro(C);return A=A.replace(/ $/,"%20"),Ct(B,"No window.location.(origin|href) available to create URL for href: "+A),new URL(A,B)}let Z={get action(){return y},get location(){return s(p,f)},listen(C){if(_)throw new Error("A history only accepts one active listener");return p.addEventListener(Vf,b),_=C,()=>{p.removeEventListener(Vf,b),_=null}},createHref(C){return i(p,C)},createURL:ee,encodeLocation(C){let B=ee(C);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:q,replace:V,go(C){return f.go(C)}};return Z}var Xf;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Xf||(Xf={}));function ny(s,i,o){return o===void 0&&(o="/"),ly(s,i,o)}function ly(s,i,o,d){let p=typeof i=="string"?yl(i):i,x=Od(p.pathname||"/",o);if(x==null)return null;let f=Zh(s);iy(f);let y=null;for(let _=0;y==null&&_<f.length;++_){let v=gy(x);y=fy(f[_],v)}return y}function Zh(s,i,o,d){i===void 0&&(i=[]),o===void 0&&(o=[]),d===void 0&&(d="");let p=(x,f,y)=>{let _={relativePath:y===void 0?x.path||"":y,caseSensitive:x.caseSensitive===!0,childrenIndex:f,route:x};_.relativePath.startsWith("/")&&(Ct(_.relativePath.startsWith(d),'Absolute route path "'+_.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),_.relativePath=_.relativePath.slice(d.length));let v=Xn([d,_.relativePath]),j=o.concat(_);x.children&&x.children.length>0&&(Ct(x.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),Zh(x.children,i,j,v)),!(x.path==null&&!x.index)&&i.push({path:v,score:py(v,x.index),routesMeta:j})};return s.forEach((x,f)=>{var y;if(x.path===""||!((y=x.path)!=null&&y.includes("?")))p(x,f);else for(let _ of Kh(x.path))p(x,f,_)}),i}function Kh(s){let i=s.split("/");if(i.length===0)return[];let[o,...d]=i,p=o.endsWith("?"),x=o.replace(/\?$/,"");if(d.length===0)return p?[x,""]:[x];let f=Kh(d.join("/")),y=[];return y.push(...f.map(_=>_===""?x:[x,_].join("/"))),p&&y.push(...f),y.map(_=>s.startsWith("/")&&_===""?"/":_)}function iy(s){s.sort((i,o)=>i.score!==o.score?o.score-i.score:my(i.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const sy=/^:[\w-]+$/,oy=3,ry=2,cy=1,dy=10,uy=-2,Zf=s=>s==="*";function py(s,i){let o=s.split("/"),d=o.length;return o.some(Zf)&&(d+=uy),i&&(d+=ry),o.filter(p=>!Zf(p)).reduce((p,x)=>p+(sy.test(x)?oy:x===""?cy:dy),d)}function my(s,i){return s.length===i.length&&s.slice(0,-1).every((d,p)=>d===i[p])?s[s.length-1]-i[i.length-1]:0}function fy(s,i,o){let{routesMeta:d}=s,p={},x="/",f=[];for(let y=0;y<d.length;++y){let _=d[y],v=y===d.length-1,j=x==="/"?i:i.slice(x.length)||"/",b=hy({path:_.relativePath,caseSensitive:_.caseSensitive,end:v},j),q=_.route;if(!b)return null;Object.assign(p,b.params),f.push({params:p,pathname:Xn([x,b.pathname]),pathnameBase:wy(Xn([x,b.pathnameBase])),route:q}),b.pathnameBase!=="/"&&(x=Xn([x,b.pathnameBase]))}return f}function hy(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=xy(s.path,s.caseSensitive,s.end),p=i.match(o);if(!p)return null;let x=p[0],f=x.replace(/(.)\/+$/,"$1"),y=p.slice(1);return{params:d.reduce((v,j,b)=>{let{paramName:q,isOptional:V}=j;if(q==="*"){let Z=y[b]||"";f=x.slice(0,x.length-Z.length).replace(/(.)\/+$/,"$1")}const ee=y[b];return V&&!ee?v[q]=void 0:v[q]=(ee||"").replace(/%2F/g,"/"),v},{}),pathname:x,pathnameBase:f,pattern:s}}function xy(s,i,o){i===void 0&&(i=!1),o===void 0&&(o=!0),Bo(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,y,_)=>(d.push({paramName:y,isOptional:_!=null}),_?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,i?void 0:"i"),d]}function gy(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Bo(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),s}}function Od(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const by=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yy=s=>by.test(s);function vy(s,i){i===void 0&&(i="/");let{pathname:o,search:d="",hash:p=""}=typeof s=="string"?yl(s):s,x;if(o)if(yy(o))x=o;else{if(o.includes("//")){let f=o;o=o.replace(/\/\/+/g,"/"),Bo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(f+" -> "+o))}o.startsWith("/")?x=Kf(o.substring(1),"/"):x=Kf(o,i)}else x=i;return{pathname:x,search:Ny(d),hash:_y(p)}}function Kf(s,i){let o=i.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?o.length>1&&o.pop():p!=="."&&o.push(p)}),o.length>1?o.join("/"):"/"}function ld(s,i,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jy(s){return s.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Ad(s,i){let o=jy(s);return i?o.map((d,p)=>p===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function Ud(s,i,o,d){d===void 0&&(d=!1);let p;typeof s=="string"?p=yl(s):(p=is({},s),Ct(!p.pathname||!p.pathname.includes("?"),ld("?","pathname","search",p)),Ct(!p.pathname||!p.pathname.includes("#"),ld("#","pathname","hash",p)),Ct(!p.search||!p.search.includes("#"),ld("#","search","hash",p)));let x=s===""||p.pathname==="",f=x?"/":p.pathname,y;if(f==null)y=o;else{let b=i.length-1;if(!d&&f.startsWith("..")){let q=f.split("/");for(;q[0]==="..";)q.shift(),b-=1;p.pathname=q.join("/")}y=b>=0?i[b]:"/"}let _=vy(p,y),v=f&&f!=="/"&&f.endsWith("/"),j=(x||f===".")&&o.endsWith("/");return!_.pathname.endsWith("/")&&(v||j)&&(_.pathname+="/"),_}const Xn=s=>s.join("/").replace(/\/\/+/g,"/"),wy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Ny=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,_y=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Sy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Jh=["post","put","patch","delete"];new Set(Jh);const ky=["get",...Jh];new Set(ky);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},ss.apply(this,arguments)}const Rd=m.createContext(null),Cy=m.createContext(null),Kn=m.createContext(null),Go=m.createContext(null),Jn=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Fh=m.createContext(null);function zy(s,i){let{relative:o}=i===void 0?{}:i;ri()||Ct(!1);let{basename:d,navigator:p}=m.useContext(Kn),{hash:x,pathname:f,search:y}=Ph(s,{relative:o}),_=f;return d!=="/"&&(_=f==="/"?d:Xn([d,f])),p.createHref({pathname:_,search:y,hash:x})}function ri(){return m.useContext(Go)!=null}function Ka(){return ri()||Ct(!1),m.useContext(Go).location}function Wh(s){m.useContext(Kn).static||m.useLayoutEffect(s)}function Hd(){let{isDataRoute:s}=m.useContext(Jn);return s?Gy():Ty()}function Ty(){ri()||Ct(!1);let s=m.useContext(Rd),{basename:i,future:o,navigator:d}=m.useContext(Kn),{matches:p}=m.useContext(Jn),{pathname:x}=Ka(),f=JSON.stringify(Ad(p,o.v7_relativeSplatPath)),y=m.useRef(!1);return Wh(()=>{y.current=!0}),m.useCallback(function(v,j){if(j===void 0&&(j={}),!y.current)return;if(typeof v=="number"){d.go(v);return}let b=Ud(v,JSON.parse(f),x,j.relative==="path");s==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:Xn([i,b.pathname])),(j.replace?d.replace:d.push)(b,j.state,j)},[i,d,f,x,s])}function Ph(s,i){let{relative:o}=i===void 0?{}:i,{future:d}=m.useContext(Kn),{matches:p}=m.useContext(Jn),{pathname:x}=Ka(),f=JSON.stringify(Ad(p,d.v7_relativeSplatPath));return m.useMemo(()=>Ud(s,JSON.parse(f),x,o==="path"),[s,f,x,o])}function Ey(s,i){return My(s,i)}function My(s,i,o,d){ri()||Ct(!1);let{navigator:p}=m.useContext(Kn),{matches:x}=m.useContext(Jn),f=x[x.length-1],y=f?f.params:{};f&&f.pathname;let _=f?f.pathnameBase:"/";f&&f.route;let v=Ka(),j;if(i){var b;let C=typeof i=="string"?yl(i):i;_==="/"||(b=C.pathname)!=null&&b.startsWith(_)||Ct(!1),j=C}else j=v;let q=j.pathname||"/",V=q;if(_!=="/"){let C=_.replace(/^\//,"").split("/");V="/"+q.replace(/^\//,"").split("/").slice(C.length).join("/")}let ee=ny(s,{pathname:V}),Z=Ry(ee&&ee.map(C=>Object.assign({},C,{params:Object.assign({},y,C.params),pathname:Xn([_,p.encodeLocation?p.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?_:Xn([_,p.encodeLocation?p.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),x,o,d);return i&&Z?m.createElement(Go.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},j),navigationType:Qn.Pop}},Z):Z}function Dy(){let s=By(),i=Sy(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},i),o?m.createElement("pre",{style:p},o):null,null)}const Oy=m.createElement(Dy,null);class Ay extends m.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?m.createElement(Jn.Provider,{value:this.props.routeContext},m.createElement(Fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Uy(s){let{routeContext:i,match:o,children:d}=s,p=m.useContext(Rd);return p&&p.static&&p.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=o.route.id),m.createElement(Jn.Provider,{value:i},d)}function Ry(s,i,o,d){var p;if(i===void 0&&(i=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var x;if(!o)return null;if(o.errors)s=o.matches;else if((x=d)!=null&&x.v7_partialHydration&&i.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let f=s,y=(p=o)==null?void 0:p.errors;if(y!=null){let j=f.findIndex(b=>b.route.id&&(y==null?void 0:y[b.route.id])!==void 0);j>=0||Ct(!1),f=f.slice(0,Math.min(f.length,j+1))}let _=!1,v=-1;if(o&&d&&d.v7_partialHydration)for(let j=0;j<f.length;j++){let b=f[j];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(v=j),b.route.id){let{loaderData:q,errors:V}=o,ee=b.route.loader&&q[b.route.id]===void 0&&(!V||V[b.route.id]===void 0);if(b.route.lazy||ee){_=!0,v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}return f.reduceRight((j,b,q)=>{let V,ee=!1,Z=null,C=null;o&&(V=y&&b.route.id?y[b.route.id]:void 0,Z=b.route.errorElement||Oy,_&&(v<0&&q===0?(Yy("route-fallback"),ee=!0,C=null):v===q&&(ee=!0,C=b.route.hydrateFallbackElement||null)));let B=i.concat(f.slice(0,q+1)),A=()=>{let D;return V?D=Z:ee?D=C:b.route.Component?D=m.createElement(b.route.Component,null):b.route.element?D=b.route.element:D=j,m.createElement(Uy,{match:b,routeContext:{outlet:j,matches:B,isDataRoute:o!=null},children:D})};return o&&(b.route.ErrorBoundary||b.route.errorElement||q===0)?m.createElement(Ay,{location:o.location,revalidation:o.revalidation,component:Z,error:V,children:A(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):A()},null)}var Ih=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Ih||{}),ex=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(ex||{});function Hy(s){let i=m.useContext(Rd);return i||Ct(!1),i}function Ly(s){let i=m.useContext(Cy);return i||Ct(!1),i}function qy(s){let i=m.useContext(Jn);return i||Ct(!1),i}function tx(s){let i=qy(),o=i.matches[i.matches.length-1];return o.route.id||Ct(!1),o.route.id}function By(){var s;let i=m.useContext(Fh),o=Ly(),d=tx();return i!==void 0?i:(s=o.errors)==null?void 0:s[d]}function Gy(){let{router:s}=Hy(Ih.UseNavigateStable),i=tx(ex.UseNavigateStable),o=m.useRef(!1);return Wh(()=>{o.current=!0}),m.useCallback(function(p,x){x===void 0&&(x={}),o.current&&(typeof p=="number"?s.navigate(p):s.navigate(p,ss({fromRouteId:i},x)))},[s,i])}const Jf={};function Yy(s,i,o){Jf[s]||(Jf[s]=!0)}function $y(s,i){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function Ff(s){let{to:i,replace:o,state:d,relative:p}=s;ri()||Ct(!1);let{future:x,static:f}=m.useContext(Kn),{matches:y}=m.useContext(Jn),{pathname:_}=Ka(),v=Hd(),j=Ud(i,Ad(y,x.v7_relativeSplatPath),_,p==="path"),b=JSON.stringify(j);return m.useEffect(()=>v(JSON.parse(b),{replace:o,state:d,relative:p}),[v,b,p,o,d]),null}function vt(s){Ct(!1)}function Vy(s){let{basename:i="/",children:o=null,location:d,navigationType:p=Qn.Pop,navigator:x,static:f=!1,future:y}=s;ri()&&Ct(!1);let _=i.replace(/^\/*/,"/"),v=m.useMemo(()=>({basename:_,navigator:x,static:f,future:ss({v7_relativeSplatPath:!1},y)}),[_,y,x,f]);typeof d=="string"&&(d=yl(d));let{pathname:j="/",search:b="",hash:q="",state:V=null,key:ee="default"}=d,Z=m.useMemo(()=>{let C=Od(j,_);return C==null?null:{location:{pathname:C,search:b,hash:q,state:V,key:ee},navigationType:p}},[_,j,b,q,V,ee,p]);return Z==null?null:m.createElement(Kn.Provider,{value:v},m.createElement(Go.Provider,{children:o,value:Z}))}function Qy(s){let{children:i,location:o}=s;return Ey(wd(i),o)}new Promise(()=>{});function wd(s,i){i===void 0&&(i=[]);let o=[];return m.Children.forEach(s,(d,p)=>{if(!m.isValidElement(d))return;let x=[...i,p];if(d.type===m.Fragment){o.push.apply(o,wd(d.props.children,x));return}d.type!==vt&&Ct(!1),!d.props.index||!d.props.children||Ct(!1);let f={id:d.props.id||x.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(f.children=wd(d.props.children,x)),o.push(f)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nd(){return Nd=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},Nd.apply(this,arguments)}function Xy(s,i){if(s==null)return{};var o={},d=Object.keys(s),p,x;for(x=0;x<d.length;x++)p=d[x],!(i.indexOf(p)>=0)&&(o[p]=s[p]);return o}function Zy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Ky(s,i){return s.button===0&&(!i||i==="_self")&&!Zy(s)}const Jy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fy="6";try{window.__reactRouterVersion=Fy}catch{}const Wy="startTransition",Wf=Zb[Wy];function Py(s){let{basename:i,children:o,future:d,window:p}=s,x=m.useRef();x.current==null&&(x.current=ey({window:p,v5Compat:!0}));let f=x.current,[y,_]=m.useState({action:f.action,location:f.location}),{v7_startTransition:v}=d||{},j=m.useCallback(b=>{v&&Wf?Wf(()=>_(b)):_(b)},[_,v]);return m.useLayoutEffect(()=>f.listen(j),[f,j]),m.useEffect(()=>$y(d),[d]),m.createElement(Vy,{basename:i,children:o,location:y.location,navigationType:y.action,navigator:f,future:d})}const Iy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ev=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tv=m.forwardRef(function(i,o){let{onClick:d,relative:p,reloadDocument:x,replace:f,state:y,target:_,to:v,preventScrollReset:j,viewTransition:b}=i,q=Xy(i,Jy),{basename:V}=m.useContext(Kn),ee,Z=!1;if(typeof v=="string"&&ev.test(v)&&(ee=v,Iy))try{let D=new URL(window.location.href),I=v.startsWith("//")?new URL(D.protocol+v):new URL(v),ie=Od(I.pathname,V);I.origin===D.origin&&ie!=null?v=ie+I.search+I.hash:Z=!0}catch{}let C=zy(v,{relative:p}),B=av(v,{replace:f,state:y,target:_,preventScrollReset:j,relative:p,viewTransition:b});function A(D){d&&d(D),D.defaultPrevented||B(D)}return m.createElement("a",Nd({},q,{href:ee||C,onClick:Z||x?d:A,ref:o,target:_}))});var Pf;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Pf||(Pf={}));var If;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(If||(If={}));function av(s,i){let{target:o,replace:d,state:p,preventScrollReset:x,relative:f,viewTransition:y}=i===void 0?{}:i,_=Hd(),v=Ka(),j=Ph(s,{relative:f});return m.useCallback(b=>{if(Ky(b,o)){b.preventDefault();let q=d!==void 0?d:Ro(v)===Ro(j);_(s,{replace:q,state:p,preventScrollReset:x,relative:f,viewTransition:y})}},[v,_,j,d,p,o,s,x,f,y])}function zt(){const s=Hd();return m.useMemo(()=>({push:i=>s(i),replace:i=>s(i,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function nv(){return Ka().pathname}function lv({href:s,...i}){return t.jsx(tv,{to:s,...i})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ax=(...s)=>s.filter((i,o,d)=>!!i&&i.trim()!==""&&d.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=m.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:p="",children:x,iconNode:f,...y},_)=>m.createElement("svg",{ref:_,...sv,width:i,height:i,stroke:s,strokeWidth:d?Number(o)*24/Number(i):o,className:ax("lucide",p),...y},[...f.map(([v,j])=>m.createElement(v,j)),...Array.isArray(x)?x:[x]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(s,i)=>{const o=m.forwardRef(({className:d,...p},x)=>m.createElement(ov,{ref:x,iconNode:i,className:ax(`lucide-${iv(s)}`,d),...p}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=ge("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=ge("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=ge("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
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
 */const dv=ge("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=ge("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
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
 */const pv=ge("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=ge("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
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
 */const mv=ge("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=ge("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=ge("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=ge("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ge("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
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
 */const gv=ge("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ge("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
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
 */const yv=ge("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ge("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=ge("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=ge("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=ge("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=ge("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ge("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ge("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=ge("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ge("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=ge("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ge("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ge("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=ge("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=ge("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ge("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=ge("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=ge("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ge("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ge("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
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
 */const ix=ge("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=ge("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ge("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ge("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ge("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
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
 */const Av=ge("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ge("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ge("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=ge("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ge("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=ge("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
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
 */const sx=ge("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=ge("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=ge("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=ge("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
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
 */const Gv=ge("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=ge("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),$v="/api/v3";var Qh;const me=typeof window<"u"&&((Qh=window.settings)==null?void 0:Qh.secure_path)||"ZicFree123",Uo="authorization";function Vv(s){if(typeof window>"u"||typeof document>"u")return null;const i=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let p=o[d];for(;p.charAt(0)===" ";)p=p.substring(1,p.length);if(p.indexOf(i)===0)try{const x=p.substring(i.length,p.length),f=decodeURIComponent(x),y=JSON.parse(f);return y&&typeof y=="object"&&"value"in y?y.value:f}catch{try{return decodeURIComponent(p.substring(i.length,p.length))}catch{return p.substring(i.length,p.length)}}}return null}function Qv(s,i,o=36500){if(typeof window>"u"||typeof document>"u")return;const p=JSON.stringify({site:"ZicNet",value:i}),x=window.location.protocol==="https:",f=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",y=new Date;y.setTime(y.getTime()+o*24*60*60*1e3);const _=`expires=${y.toUTCString()}`,v=f?"":`domain=${window.location.hostname};`;let j=`${s}=${encodeURIComponent(p)}; ${_}; ${v} path=/`;x&&(j+="; secure"),j+="; SameSite=Lax",document.cookie=j;try{window.localStorage.setItem(`cookie_${s}`,p)}catch{}}function Xv(s){if(typeof window>"u"||typeof document>"u")return;const i=window.location.hostname,o=["",i,i.startsWith(".")?i:`.${i}`],d=["/","/dashboard","/user","/admin"];o.forEach(p=>{d.forEach(x=>{const f=p?` domain=${p};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${f} path=${x};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function ox(){if(typeof window>"u")return null;let s=window.localStorage.getItem(Uo);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(Uo,s)}catch{}if(!s&&(s=Vv("auth_data"),s))try{window.localStorage.setItem(Uo,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function Zv(s,i){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${$v}${o}`,window.location.origin);return Object.entries(i??{}).forEach(([p,x])=>{x!==void 0&&d.searchParams.set(p,String(x))}),d.toString()}function Tt(){return!!ox()}function Kv(s){typeof window>"u"||(window.localStorage.setItem(Uo,s),window.localStorage.setItem("auth_data",s),Qv("auth_data",s,36500))}function rx(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(p=>{window.localStorage.removeItem(p)}),["token","auth_data","authorization","vuex","user","auth"].forEach(p=>{window.sessionStorage.removeItem(p)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(p=>{o.forEach(x=>{document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${x};`}),document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Xv(p)})}async function pe(s,i={}){const o={},d=i.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),i.auth!==!1){const _=ox();_&&(o.authorization=_)}const p=await fetch(Zv(s,i.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(i.body??{}),cache:"no-store"}),f=(p.headers.get("content-type")||"").includes("application/json"),y=f?await p.json():await p.text();if(!p.ok){const _=typeof y=="object"&&y&&"message"in y?String(y.message):`Request failed with status ${p.status}`,v=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(_);throw(p.status===401||p.status===403&&!v)&&i.auth!==!1&&(rx(),window.location.hash="/login"),new Error(_)}if(!f&&typeof y=="string"&&(y.trim().startsWith("<!DOCTYPE html")||y.trim().startsWith("<html")||y.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return y}async function Jv(s,i){return pe("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:i}})}async function Fv(){const s=`/${me}/stat`,[i,o,d,p,x,f]=await Promise.all([pe(`${s}/getOverride`),pe(`${s}/getOrder`),pe(`${s}/getServerTodayRank`),pe(`${s}/getServerLastRank`),pe(`${s}/getUserTodayRank`),pe(`${s}/getUserLastRank`)]);return{override:i.data,order:o.data,serverToday:d.data,serverYesterday:p.data,userToday:x.data,userYesterday:f.data}}async function cx(){return(await pe(`/${me}/config/fetch`)).data}async function dx(s){return pe(`/${me}/config/save`,{method:"POST",body:s})}async function Wv(){return(await pe(`/${me}/config/getEmailTemplate`)).data}async function Pv(){return(await pe(`/${me}/plan/fetch`)).data.map(i=>({id:i.id,name:i.name}))}async function Iv(){return pe(`/${me}/config/testSendMail`,{method:"POST",body:{}})}async function e1(s){return pe(`/${me}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function t1(){return(await pe(`/${me}/payment/fetch`)).data}async function a1(){return(await pe(`/${me}/payment/getPaymentMethods`)).data}async function dh(s,i){return(await pe(`/${me}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:i}})).data}async function n1(s){return pe(`/${me}/payment/save`,{method:"POST",body:s})}async function l1(s){return pe(`/${me}/payment/show`,{method:"POST",body:{id:s}})}async function i1(s){return pe(`/${me}/payment/drop`,{method:"POST",body:{id:s}})}async function s1(s){return pe(`/${me}/payment/sort`,{method:"POST",body:{ids:s}})}async function o1(){return(await pe(`/${me}/theme/getThemes`)).data}async function r1(s){return(await pe(`/${me}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function c1(s,i){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(i))));return pe(`/${me}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function ds(){return(await pe(`/${me}/server/group/fetch`)).data}async function ux(s){return pe(`/${me}/server/group/save`,{method:"POST",body:s})}async function d1(s){return pe(`/${me}/server/group/drop`,{method:"POST",body:{id:s}})}const px=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function mx(){return(await pe(`/${me}/server/route/fetch`)).data}async function u1(s){return pe(`/${me}/server/route/save`,{method:"POST",body:s})}async function p1(s){return pe(`/${me}/server/route/drop`,{method:"POST",body:{id:s}})}async function vl(){return(await pe(`/${me}/plan/fetch`)).data}async function m1(s){return pe(`/${me}/plan/save`,{method:"POST",body:s})}async function f1(s){return pe(`/${me}/plan/drop`,{method:"POST",body:{id:s}})}async function uh(s,i){return pe(`/${me}/plan/update`,{method:"POST",body:{id:s,...i}})}async function ph(s){return pe(`/${me}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function h1(s={}){const i=new URLSearchParams;return i.set("current",String(s.current??1)),i.set("pageSize",String(s.pageSize??15)),s.is_commission&&i.set("is_commission","1"),s.filter&&s.filter.forEach((d,p)=>{i.set(`filter[${p}][key]`,d.key),i.set(`filter[${p}][condition]`,d.condition),i.set(`filter[${p}][value]`,d.value)}),await pe(`/${me}/order/fetch?${i.toString()}`)}async function x1(s){return pe(`/${me}/order/paid`,{method:"POST",body:{trade_no:s}})}async function g1(s){return pe(`/${me}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function fx(s){return pe(`/${me}/order/assign`,{method:"POST",body:s})}async function b1(s,i){return pe(`/${me}/order/update`,{method:"POST",body:{trade_no:s,commission_status:i}})}async function y1(s){return pe(`/${me}/order/detail`,{method:"POST",body:{id:s}})}async function hx(s=1,i=15){return pe(`/${me}/coupon/fetch?current=${s}&pageSize=${i}`)}async function v1(s){return pe(`/${me}/coupon/generate`,{method:"POST",body:s})}async function j1(s){return pe(`/${me}/coupon/drop`,{method:"POST",body:{id:s}})}async function w1(s){return pe(`/${me}/coupon/show`,{method:"POST",body:{id:s}})}async function N1(s=1,i=15){return pe(`/${me}/giftcard/fetch?current=${s}&pageSize=${i}`)}async function _1(s){return pe(`/${me}/giftcard/generate`,{method:"POST",body:s})}async function S1(s){return pe(`/${me}/giftcard/drop`,{method:"POST",body:{id:s}})}async function zd(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o&&o.forEach((p,x)=>{d.set(`filter[${x}][key]`,p.key),d.set(`filter[${x}][condition]`,p.condition),d.set(`filter[${x}][value]`,p.value)}),pe(`/${me}/user/fetch?${d.toString()}`)}async function k1(s){return pe(`/${me}/user/update`,{method:"POST",body:s})}async function xx(s){return pe(`/${me}/user/getUserInfoById`,{params:{id:s}})}async function C1(s){return pe(`/${me}/user/delUser`,{method:"POST",body:{id:s}})}async function z1(s){return pe(`/${me}/user/generate`,{method:"POST",body:s})}async function T1(s){return pe(`/${me}/user/resetSecret`,{method:"POST",body:{id:s}})}async function E1(s=1,i=15,o,d=!1){const p=new URLSearchParams;return p.set("current",String(s)),p.set("pageSize",String(i)),d&&p.set("include_subscribe_url","1"),o==null||o.forEach((x,f)=>{p.set(`filter[${f}][key]`,x.key),p.set(`filter[${f}][condition]`,x.condition),p.set(`filter[${f}][value]`,x.value)}),pe(`/${me}/subscription/fetch?${p.toString()}`)}async function M1(s){return pe(`/${me}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function D1(s){return pe(`/${me}/subscription/update`,{method:"POST",body:s})}async function O1(s){return pe(`/${me}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function gx(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o==null||o.forEach((p,x)=>{d.set(`filter[${x}][key]`,p.key),d.set(`filter[${x}][condition]`,p.condition),d.set(`filter[${x}][value]`,p.value)}),pe(`/${me}/device/fetch?${d.toString()}`)}async function bx(s){return pe(`/${me}/device/drop`,{method:"POST",body:{id:s}})}async function yx(s){return pe(`/${me}/device/ban`,{method:"POST",body:{id:s}})}async function A1(s){return pe(`/${me}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function U1(s,i=1,o=10){return pe(`/${me}/stat/getStatUser`,{params:{user_id:s,current:i,pageSize:o}})}async function R1(){return(await pe(`/${me}/notice/fetch`)).data}async function H1(s){return pe(`/${me}/notice/save`,{method:"POST",body:s})}async function L1(s){return pe(`/${me}/notice/drop`,{method:"POST",body:{id:s}})}async function q1(s){return pe(`/${me}/notice/show`,{method:"POST",body:{id:s}})}async function B1(){return(await pe(`/${me}/ticket/fetch`)).data}async function mh(s){return(await pe(`/${me}/ticket/fetch`,{params:{id:s}})).data}async function G1(s,i){return pe(`/${me}/ticket/reply`,{method:"POST",body:{id:s,message:i}})}async function Y1(s){return pe(`/${me}/ticket/close`,{method:"POST",body:{id:s}})}async function $1(){return(await pe(`/${me}/knowledge/fetch`)).data}async function V1(s){return(await pe(`/${me}/knowledge/fetch`,{params:{id:s}})).data}async function Q1(s){return pe(`/${me}/knowledge/save`,{method:"POST",body:s})}async function X1(s){return pe(`/${me}/knowledge/drop`,{method:"POST",body:{id:s}})}async function Z1(s){return pe(`/${me}/knowledge/show`,{method:"POST",body:{id:s}})}async function K1(){return(await pe(`/${me}/webcon/fetch`)).data}async function J1(s){return pe(`/${me}/webcon/save`,{method:"POST",body:s})}async function F1(s){return pe(`/${me}/webcon/drop`,{method:"POST",body:{id:s}})}async function W1(s){return pe(`/${me}/webcon/show`,{method:"POST",body:{id:s}})}async function P1(){return pe(`/${me}/system/getSystemStatus`)}async function I1(){return(await pe(`/${me}/system/getCoreLicenseStatus`)).data}async function e0(){return(await pe(`/${me}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function t0(){return pe(`/${me}/system/getQueueStats`)}async function a0(){return pe(`/${me}/system/getQueueWorkload`)}async function n0(){return pe(`/${me}/system/getSystemLog`)}async function fh(){return pe(`/${me}/server/manage/getNodes`)}async function l0(s,i){return pe(`/${me}/server/${s}/save`,{method:"POST",body:i})}async function i0(s,i){return pe(`/${me}/server/${s}/drop`,{method:"POST",body:{id:i}})}async function s0(s,i,o){return pe(`/${me}/server/${s}/update`,{method:"POST",body:{id:i,show:o}})}async function o0(s,i){return pe(`/${me}/server/${s}/copy`,{method:"POST",body:{id:i}})}async function r0(s){return pe(`/${me}/server/manage/sort`,{method:"POST",body:s})}const qd=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],vx="admin-locale",Td="vi-VN",c0="/assets/adminzic",jx=m.createContext(null);function d0(){if(typeof window>"u")return Td;const s=localStorage.getItem(vx);return s&&qd.some(i=>i.code===s)?s:Td}function u0(s,i){return i?Object.entries(i).reduce((o,[d,p])=>o.replaceAll(`{${d}}`,String(p)),s):s}function p0(s){return new Promise((i,o)=>{var f;if(typeof window>"u"){i({});return}const d=(f=window.AdminNextI18n)==null?void 0:f[s];if(d){i(d);return}const p=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(p){p.addEventListener("load",()=>{var y;i(((y=window.AdminNextI18n)==null?void 0:y[s])??{})}),p.addEventListener("error",o);return}const x=document.createElement("script");x.src=`${c0}/i18n/${s}.js`,x.async=!0,x.dataset.adminNextLocale=s,x.onload=()=>{var y;return i(((y=window.AdminNextI18n)==null?void 0:y[s])??{})},x.onerror=o,document.head.appendChild(x)})}function m0({children:s}){const[i,o]=m.useState(Td),[d,p]=m.useState({}),[x,f]=m.useState(!0);m.useEffect(()=>{o(d0())},[]);const y=m.useCallback(j=>{o(j),typeof window<"u"&&localStorage.setItem(vx,j)},[]);m.useEffect(()=>{let j=!0;return f(!0),p0(i).then(b=>{j&&p(b)}).finally(()=>{j&&f(!1)}),()=>{j=!1}},[i]);const _=m.useCallback((j,b)=>u0(d[j]??j,b),[d]),v=m.useMemo(()=>({locale:i,loading:x,setLocale:y,t:_}),[i,x,y,_]);return t.jsx(jx.Provider,{value:v,children:s})}function Ve(){const s=m.useContext(jx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function f0(){const s=zt(),{t:i,locale:o,setLocale:d}=Ve(),[p,x]=m.useState(""),[f,y]=m.useState(""),[_,v]=m.useState(""),[j,b]=m.useState(!1),[q,V]=m.useState(!1),ee=m.useRef(null);m.useEffect(()=>{function C(B){ee.current&&!ee.current.contains(B.target)&&V(!1)}return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]),m.useEffect(()=>{Tt()&&s.replace("/dashboard")},[s]);async function Z(C){var B,A,D,I;C.preventDefault(),v(""),b(!0);try{const ie=await Jv(p,f),re=((B=ie.data)==null?void 0:B.auth_data)??((A=ie.data)==null?void 0:A.token),T=((D=ie.data)==null?void 0:D.is_admin)===1||((I=ie.data)==null?void 0:I.is_admin)===!0;if(!re||!T)throw new Error(i("login.adminRequired"));Kv(re),s.replace("/dashboard")}catch(ie){v(ie instanceof Error?ie.message:i("login.failed"))}finally{b(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:i("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:i("login.eyebrow")}),t.jsx("h1",{children:i("login.heading")}),t.jsx("span",{children:i("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":i("login.formLabel"),children:[t.jsxs("div",{ref:ee,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.language"),onClick:()=>V(C=>!C),children:t.jsx(us,{size:17})}),q?t.jsx("div",{className:"locale-menu",children:qd.map(C=>t.jsxs("button",{className:`locale-option ${o===C.code?"active":""}`,type:"button",onClick:()=>{d(C.code),V(!1)},children:[t.jsx("span",{className:"locale-flag",children:C.flag}),t.jsx("span",{children:C.label})]},C.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(Dv,{size:18}),t.jsx("span",{children:i("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:i("login.title")}),t.jsx("p",{children:i("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:Z,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(lx,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:C=>x(C.target.value),placeholder:i("login.emailPlaceholder"),required:!0,type:"email",value:p})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Nv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:C=>y(C.target.value),placeholder:i("login.passwordPlaceholder"),required:!0,type:"password",value:f})]})]}),_?t.jsx("div",{className:"form-error",children:_}):null,t.jsx("button",{className:"primary-button",disabled:j,type:"submit",children:i(j?"login.signingIn":"login.submit")})]})]})]})}function _a(s){const i=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(i)}function Za(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function h0(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const x0=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:gv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Uv},{href:"/config/payment",label:"nav.paymentConfig",icon:hv},{href:"/config/theme",label:"nav.themeConfig",icon:qv}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:Ld},{href:"/server/group",label:"nav.groupManagement",icon:Gv},{href:"/server/route",label:"nav.routeManagement",icon:Av}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:sh},{href:"/order",label:"nav.orders",icon:wv},{href:"/coupon",label:"nav.coupons",icon:bv},{href:"/giftcard",label:"nav.giftcards",icon:Hv}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:sx},{href:"/subscription",label:"nav.subscriptions",icon:sh},{href:"/device",label:"nav.devices",icon:Rv},{href:"/webcon",label:"nav.webcon",icon:us},{href:"/notice",label:"nav.notices",icon:as},{href:"/ticket",label:"nav.tickets",icon:jv},{href:"/knowledge",label:"nav.knowledge",icon:dv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:uv}]}];function g0(){const[s,i]=m.useState("light");m.useEffect(()=>{const x=localStorage.getItem("admin-theme")??"light";i(x),document.documentElement.setAttribute("data-theme",x)},[]);const o=m.useCallback(p=>{i(p),localStorage.setItem("admin-theme",p),document.documentElement.setAttribute("data-theme",p)},[]),d=m.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function wx(s){return s?new Date(s*1e3):null}function b0(s,i){const o=wx(i);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function y0(s){const i=wx(s);return i?Math.ceil((i.getTime()-Date.now())/864e5):null}function Bt({children:s,title:i,subtitle:o}){const[d,p]=m.useState(!1),x=zt(),f=nv(),{t:y,locale:_,setLocale:v}=Ve(),{theme:j,toggle:b}=g0(),[q,V]=m.useState(!1),ee=m.useRef(null),[Z,C]=m.useState(null),[B,A]=m.useState(!1),D=m.useCallback(async(w=!1)=>{if(Tt()){A(w);try{C(w?await e0():await I1())}catch(U){C({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:y("license.unavailable"),error:U instanceof Error?U.message:y("license.unavailable")})}finally{A(!1)}}},[y]);m.useEffect(()=>{function w(U){ee.current&&!ee.current.contains(U.target)&&V(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),m.useEffect(()=>{D(!1);const w=window.setInterval(()=>{D(!1)},6e4);return()=>window.clearInterval(w)},[D]);function I(){rx(),x.replace("/login")}const ie=(Z==null?void 0:Z.license_expires_at)??(Z==null?void 0:Z.expires_at),re=b0(_,ie),T=typeof(Z==null?void 0:Z.days_until_expiry)=="number"?Z.days_until_expiry:y0(ie),Y=typeof T=="number"?T<=0?y("license.expiresToday"):y("license.daysLeft",{days:T}):null,ne=!!Z&&Z.available&&!Z.requires_renewal,fe=ne&&!!(Z!=null&&Z.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>p(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:y("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:x0.map(w=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:y(w.label)}),w.items.map(U=>{const te=U.icon,E=f===U.href;return t.jsxs(lv,{className:`nav-item ${E?"active":""}`,href:U.href,onClick:()=>p(!1),children:[t.jsx(te,{size:17}),t.jsx("span",{children:y(U.label)})]},U.href)})]},w.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":y(d?"common.closeMenu":"common.openMenu"),onClick:()=>p(w=>!w),children:d?t.jsx(it,{size:19}):t.jsx(Sv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:i}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[ne?t.jsxs("button",{className:`license-chip ${fe?"warning":""}`,type:"button",disabled:B,title:y("license.refresh"),onClick:()=>void D(!0),children:[t.jsx(ah,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:y("license.validUntil")}),t.jsx("strong",{children:re??y("license.unknownExpiry")})]}),Y?t.jsx("small",{children:Y}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:ee,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":y("common.language"),onClick:()=>V(w=>!w),children:t.jsx(us,{size:17})}),q?t.jsx("div",{className:"locale-menu",children:qd.map(w=>t.jsxs("button",{className:`locale-option ${_===w.code?"active":""}`,type:"button",onClick:()=>{v(w.code),V(!1)},children:[t.jsx("span",{className:"locale-flag",children:w.flag}),t.jsx("span",{children:w.label})]},w.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":j==="dark"?"Switch to light mode":"Switch to dark mode",onClick:b,children:j==="dark"?t.jsx(Lv,{size:17}):t.jsx(kv,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,children:[t.jsx(_v,{size:16}),t.jsx("span",{children:y("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[Z!=null&&Z.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(kd,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:y("license.renewTitle")}),t.jsx("p",{children:y("license.renewBody")}),t.jsxs("small",{children:[y("license.currentStatus"),": ",Z.status,Z.error?` - ${Z.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:B,onClick:()=>void D(!0),children:[t.jsx(Nt,{size:16}),y(B?"license.refreshing":"license.refresh")]})]}):null,fe?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(ah,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:y("license.expiryWarningTitle")}),t.jsx("p",{children:y("license.expiryWarningBody",{date:re??y("license.unknownExpiry"),days:T??""})}),t.jsxs("small",{children:[y("license.currentStatus"),": ",Z.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:B,onClick:()=>void D(!0),children:[t.jsx(Nt,{size:16}),y(B?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const hh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function Nx(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function ns(s){return Number(s??0)}function xh(s){return ns(s)/100}function gh(s){return`${Za(Math.round(s))} VND`}function _x(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function v0(s){const i=new Date;return i.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const p=new Date(i);return p.setDate(i.getDate()-(s-d-1)),_x(p)})}function bh(s,i){const o=s.get(i);if(o)return o;const d=Nx(i);return s.set(i,d),d}function j0(s){const i=s.toLowerCase();return i==="register_count"||i.includes("đăng")||i.includes("register")?"registrations":i==="order_count"?"orderCount":i==="paid_count"||i.includes("giao dịch thu")?"paidCount":i==="paid_total"||i.includes("tiền thu")?"paidAmount":i==="commission_count"||i.includes("giao dịch hoa hồng")?"commissionCount":i==="commission_total"||i.includes("tiền hoa hồng")?"commissionAmount":null}function ko({label:s,value:i,helper:o,tone:d="default",onClick:p}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:p,style:p?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:i})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(cv,{size:19})}),o?t.jsx("small",{children:o}):null]})}function xt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(Nt,{size:18}),t.jsx("span",{children:s})]})}function w0(s,i){const o=new Map,d=new Map;if(s.forEach(p=>{const x=bh(o,p.date),f=j0(p.type);if(f){x[f]=Number(p.value||0);return}const y=d.get(p.date)??0,_=hh[y%hh.length];x[_]=Number(p.value||0),d.set(p.date,y+1)}),i){const p=bh(o,_x(new Date));p.registrations=ns(i.day_register_total),i.day_order_total!==void 0&&(p.orderCount=ns(i.day_order_total)),i.day_paid_order_total!==void 0&&(p.paidCount=ns(i.day_paid_order_total)),p.paidAmount=xh(i.day_paid_income??i.day_income),i.day_commission_payout!==void 0&&(p.commissionAmount=xh(i.day_commission_payout)),i.day_commission_count!==void 0&&(p.commissionCount=ns(i.day_commission_count))}return o.size===0?[]:v0(31).map(p=>o.get(p)??Nx(p))}function N0({records:s,override:i}){const{t:o}=Ve(),[d,p]=m.useState("paidAmount"),[x,f]=m.useState(null),[y,_]=m.useState(0),[v,j]=m.useState(0),b=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#2f8f83",format:gh},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#2563eb",format:Za},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#7c3aed",format:Za},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#c2410c",format:gh},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#be123c",format:Za},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#0891b2",format:Za}],q=b.find(Y=>Y.key===d)??b[0],V=w0(s,i),ee=Y=>Number(Y[q.key]||0),Z=Math.max(...V.map(ee),1),C=720,B=220,A=28,D=V.length>1?(C-A*2)/(V.length-1):0,I=Y=>B-A-Y/Z*(B-A*2),ie=V.map((Y,ne)=>`${A+ne*D},${I(ee(Y))}`).join(" "),re=Math.max(Math.ceil(V.length/6),1),T=`dashboardTrendFill-${q.key}`;return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:V.length})})]}),t.jsx("div",{className:"chart-metric-tabs",role:"tablist","aria-label":o("dashboard.chartMetrics"),children:b.map(Y=>t.jsx("button",{type:"button",className:d===Y.key?"active":"",onClick:()=>{p(Y.key),f(null)},children:Y.label},Y.key))}),V.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):null,t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${C} ${B}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:T,x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:q.color,stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:q.color,stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map(Y=>t.jsx("line",{className:"chart-grid",x1:A,x2:C-A,y1:A+Y*(B-A*2),y2:A+Y*(B-A*2)},Y)),V.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",style:{fill:`url(#${T})`},points:`${A},${B-A} ${ie} ${C-A},${B-A}`}),t.jsx("polyline",{className:"chart-line",points:ie,style:{stroke:q.color}}),V.map((Y,ne)=>{const fe=A+ne*D,w=I(ee(Y));return t.jsxs("g",{children:[t.jsx("circle",{cx:fe,cy:w,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{f(Y),_(fe),j(w)},onMouseLeave:()=>{f(null)}}),t.jsx("circle",{cx:fe,cy:w,r:(x==null?void 0:x.date)===Y.date?6:4,fill:q.color,stroke:"var(--surface)",strokeWidth:(x==null?void 0:x.date)===Y.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},Y.date)})]}):null]}),x?t.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${y/C*100}%`,top:`${v/B*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",x.date]}),t.jsxs("div",{className:"tooltip-value",children:[q.label,": ",q.format(ee(x))]})]}):null]}),t.jsx("div",{className:"chart-axis",children:V.filter((Y,ne)=>ne===0||ne===V.length-1||ne%re===0).map(Y=>t.jsx("span",{children:Y.date},Y.date))}),V.length>0?t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:q.summaryLabel}),t.jsx("strong",{children:q.format(Z)})]}):null]})}function Co({title:s,subtitle:i,records:o,labelKey:d}){const{t:p}=Ve(),x=Math.max(...o.map(f=>Number(f.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:i})]})}),t.jsx("div",{className:"rank-list",children:o.length===0?t.jsx("div",{className:"empty-state",children:p("dashboard.noTraffic")}):o.slice(0,8).map((f,y)=>{const _=d==="server_name"?f.server_name||p("dashboard.unnamedNode"):f.email||p("dashboard.unknownUser"),v=Number(f.total||0)/x*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:y+1}),t.jsx("strong",{children:_}),t.jsxs("small",{children:[h0(f.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(v,3)}%`}})})]},`${_}-${y}`)})})]})}function sd({label:s,current:i,previous:o}){const{t:d}=Ve();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof i=="number"?Za(i):i}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?Za(o):o]})]})}function _0(){var v,j,b,q,V,ee,Z,C,B,A,D,I;const s=zt(),{t:i}=Ve(),[o,d]=m.useState(null),[p,x]=m.useState(""),[f,y]=m.useState(!0),_=m.useCallback(async()=>{y(!0),x("");try{d(await Fv())}catch(ie){x(ie instanceof Error?ie.message:i("dashboard.loadFailed"))}finally{y(!1)}},[i]);return m.useEffect(()=>{if(!Tt()){s.replace("/login");return}_()},[_,s]),t.jsxs(Bt,{title:i("dashboard.title"),subtitle:i("dashboard.subtitle"),children:[p?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:p}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:_,children:[t.jsx(Nt,{size:16}),i("common.retry")]})]}):null,f&&!o?t.jsx(xt,{label:i("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((v=o.override)==null?void 0:v.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:i("dashboard.pendingTickets",{count:(j=o.override)==null?void 0:j.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:i("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("dashboard.today")}),t.jsx("p",{children:i("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:_,disabled:f,children:[t.jsx(Nt,{size:16}),i(f?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(ko,{label:i("dashboard.onlineUsers"),value:Za(((b=o.override)==null?void 0:b.online_user)??0),helper:i("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(ko,{label:i("dashboard.todayIncome"),value:`${_a(((q=o.override)==null?void 0:q.day_paid_income)??((V=o.override)==null?void 0:V.day_income)??0)} VND`,helper:i("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(ko,{label:i("dashboard.todayRegistrations"),value:Za(((ee=o.override)==null?void 0:ee.day_register_total)??0),helper:i("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(ko,{label:i("dashboard.pendingCommission"),value:Za(((Z=o.override)==null?void 0:Z.commission_pending_total)??0),helper:i("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(sd,{label:i("dashboard.monthIncome"),current:`${_a(((C=o.override)==null?void 0:C.month_income)??0)} VND`,previous:`${_a(((B=o.override)==null?void 0:B.last_month_income)??0)} VND`}),t.jsx(sd,{label:i("dashboard.monthCommission"),current:`${_a(((A=o.override)==null?void 0:A.commission_month_payout)??0)} VND`,previous:`${_a(((D=o.override)==null?void 0:D.commission_last_month_payout)??0)} VND`}),t.jsx(sd,{label:i("dashboard.monthRegistrations"),current:((I=o.override)==null?void 0:I.month_register_total)??0,previous:"-"})]}),t.jsx(N0,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(Co,{title:i("dashboard.serverRankToday"),subtitle:i("dashboard.trafficGb"),records:o.serverToday,labelKey:"server_name"}),t.jsx(Co,{title:i("dashboard.serverRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.serverYesterday,labelKey:"server_name"}),t.jsx(Co,{title:i("dashboard.userRankToday"),subtitle:i("dashboard.trafficGb"),records:o.userToday,labelKey:"email"}),t.jsx(Co,{title:i("dashboard.userRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.userYesterday,labelKey:"email"})]})]}):null]})}const S0=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function yh(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function k0(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function od(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function C0(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function z0(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function ca(s){return s===!0||s===1||s==="1"}function T0(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function rd(s){return s.split(",").map(i=>i.trim()).filter(Boolean)}function E0({field:s,value:i,onChange:o}){const{t:d}=Ve(),p=s.toInput?s.toInput(i):T0(i);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${ca(i)?"on":""}`,type:"button",onClick:()=>o(ca(i)?0:1),"aria-pressed":ca(i),children:[t.jsx("span",{}),ca(i)?yh(d)[0].label:yh(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:p,onChange:x=>o(x.target.value),children:(s.options??[]).map(x=>t.jsx("option",{value:x.value,children:x.label},String(x.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:x=>o(s.fromInput?s.fromInput(x.target.value):x.target.value),placeholder:s.placeholder,rows:4,value:p}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:x=>o(s.fromInput?s.fromInput(x.target.value):x.target.value),placeholder:s.placeholder,type:s.type,value:p}):null]})]})}function M0({plans:s,emailTemplates:i,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(p=>({label:p.name,value:p.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:p=>Number(p.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:p=>ca(p.email_whitelist_enable),fromInput:rd},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:p=>ca(p.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:p=>ca(p.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:p=>ca(p.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:p=>ca(p.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:p=>ca(p.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:p=>ca(p.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:k0(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:od(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:od(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:od(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:C0(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:p=>Number(p.show_subscribe_method||0)===2}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:rd}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:z0(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:rd},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:p=>ca(p.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:p=>ca(p.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:p=>ca(p.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:i.map(p=>({label:p,value:p}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function D0(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState("site"),[p,x]=m.useState(null),[f,y]=m.useState([]),[_,v]=m.useState([]),[j,b]=m.useState(!0),[q,V]=m.useState(null),[ee,Z]=m.useState(""),C=m.useCallback(async()=>{b(!0),Z("");try{const[Y,ne,fe]=await Promise.all([cx(),Pv(),Wv()]);x(Y),y(ne),v(fe)}catch(Y){Z(Y instanceof Error?Y.message:i("config.loadFailed"))}finally{b(!1)}},[i]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}C()},[C,s]),m.useEffect(()=>{const Y=document.querySelector(".config-tabs button.active");Y&&Y.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const B=m.useMemo(()=>M0({plans:f,emailTemplates:_,t:i}),[f,_,i]),A=B.find(Y=>Y.key===o)??B[0],D=(p==null?void 0:p[A.key])??{};function I(Y,ne,fe){x(w=>w&&{...w,[Y]:{...w[Y],[ne]:fe}})}async function ie(){var Y;if(p){V(A.key),Z("");try{await dx(p[A.key]),(Y=window.showToast)==null||Y.call(window,i("config.saveSuccess"),"success")}catch(ne){Z(ne instanceof Error?ne.message:i("config.saveFailed"))}finally{V(null)}}}async function re(){var Y;V("mail"),Z("");try{await Iv(),(Y=window.showToast)==null||Y.call(window,i("config.email.testSuccess"),"success")}catch(ne){Z(ne instanceof Error?ne.message:i("config.email.testFailed"))}finally{V(null)}}async function T(){var ne;const Y=String((p==null?void 0:p.telegram.telegram_bot_token)??"");V("webhook"),Z("");try{await e1(Y),(ne=window.showToast)==null||ne.call(window,i("config.telegram.webhookSuccess"),"success")}catch(fe){Z(fe instanceof Error?fe.message:i("config.telegram.webhookFailed"))}finally{V(null)}}return t.jsxs(Bt,{title:i("config.title"),subtitle:i("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("config.systemConfig")}),t.jsx("p",{children:i("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:C,disabled:j,children:[t.jsx(Nt,{size:16}),i(j?"common.refreshing":"common.refresh")]})]}),ee?t.jsx("div",{className:"form-error",children:ee}):null,j&&!p?t.jsx(xt,{label:i("config.loading")}):null,p?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":i("config.tabsLabel"),children:S0.map(Y=>{const ne=B.find(fe=>fe.key===Y);return ne?t.jsxs("button",{className:o===Y?"active":"",type:"button",onClick:()=>d(Y),children:[t.jsx("span",{children:ne.label}),t.jsx("small",{children:ne.hint})]},Y):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:A.label}),t.jsx("p",{children:A.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:q===A.key,type:"button",onClick:ie,children:[t.jsx(ka,{size:16}),q===A.key?i("config.saving"):i("config.saveTab")]})]}),A.warning?t.jsx("div",{className:"config-warning",children:A.warning}):null,t.jsx("div",{className:"config-fields",children:A.fields.map(Y=>Y.visible&&!Y.visible(D)?null:t.jsx(E0,{field:Y,value:D[Y.key],onChange:ne=>I(A.key,Y.key,ne)},Y.key))}),A.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:q==="mail",onClick:re,children:[t.jsx(lx,{size:16}),i(q==="mail"?"config.email.testing":"config.email.test")]})}):null,A.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:q==="webhook",onClick:T,children:[t.jsx(Bv,{size:16}),i(q==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(ix,{size:14}),i("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function Zn(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const i=document.createElement("textarea");i.value=s,i.setAttribute("readonly",""),i.style.position="fixed",i.style.left="-9999px",i.style.top="0",document.body.appendChild(i),i.select(),i.setSelectionRange(0,i.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(i)}}function cd(s){return s===!0||s===1||s==="1"}function O0(s,i=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??i,config:{...(s==null?void 0:s.config)??{}}}}function A0(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function U0(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState([]),[p,x]=m.useState([]),[f,y]=m.useState(null),[_,v]=m.useState({}),[j,b]=m.useState(!0),[q,V]=m.useState(!1),[ee,Z]=m.useState(!1),[C,B]=m.useState(""),[A,D]=m.useState(""),[I,ie]=m.useState({}),re=m.useCallback(async()=>{b(!0),B("");try{const[E,oe]=await Promise.all([t1(),a1()]);d(E),x(oe),ie({})}catch(E){B(E instanceof Error?E.message:i("payment.loadFailed"))}finally{b(!1)}},[i]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}re()},[re,s]);async function T(E){const oe=(E==null?void 0:E.payment)??p[0]??"",O=O0(E,oe);if(y(O),v({}),B(""),D(""),!!oe){V(!0);try{v(await dh(oe,E==null?void 0:E.id))}catch(J){B(J instanceof Error?J.message:i("payment.formLoadFailed"))}finally{V(!1)}}}async function Y(E){if(f){y({...f,payment:E,config:{}}),V(!0),B("");try{v(await dh(E,f.id))}catch(oe){B(oe instanceof Error?oe.message:i("payment.formLoadFailed"))}finally{V(!1)}}}async function ne(E){var oe,O;if(E.preventDefault(),!!f){Z(!0),B(""),D("");try{await n1(A0(f)),y(null),(oe=window.showToast)==null||oe.call(window,i("payment.saveSuccess"),"success"),await re()}catch(J){(O=window.showToast)==null||O.call(window,J instanceof Error?J.message:i("payment.saveFailed"),"error")}finally{Z(!1)}}}async function fe(E){var oe;B(""),D("");try{await l1(E),await re()}catch(O){(oe=window.showToast)==null||oe.call(window,O instanceof Error?O.message:i("payment.toggleFailed"),"error")}}async function w(E){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:i("payment.deleteConfirm"),onConfirm:async()=>{var O,J;B(""),D("");try{await i1(E),(O=window.showToast)==null||O.call(window,i("payment.deleteSuccess"),"success"),await re()}catch(h){(J=window.showToast)==null||J.call(window,h instanceof Error?h.message:i("payment.deleteFailed"),"error")}}})}async function U(E,oe){var W;const O=E+oe;if(O<0||O>=o.length)return;const J=[...o],h=J[E];J.splice(E,1),J.splice(O,0,h),d(J);try{await s1(J.map(R=>R.id)),await re()}catch(R){(W=window.showToast)==null||W.call(window,R instanceof Error?R.message:i("payment.sortFailed"),"error"),await re()}}async function te(E){var O;const oe=await Zn(E);(O=window.showToast)==null||O.call(window,i(oe?"payment.copied":"common.copyFailed"),oe?"success":"error")}return t.jsxs(Bt,{title:i("payment.title"),subtitle:i("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("payment.methods")}),t.jsx("p",{children:i("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:re,disabled:j,children:[t.jsx(Nt,{size:16}),t.jsx("span",{children:i(j?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void T(),children:[t.jsx(Sa,{size:16}),t.jsx("span",{children:i("payment.add")})]})]})]}),C?t.jsx("div",{className:"form-error",children:C}):null,A?t.jsx("div",{className:"form-success",children:A}):null,j&&o.length===0?t.jsx(xt,{label:i("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("payment.id")}),t.jsx("th",{children:i("payment.enabled")}),t.jsx("th",{children:i("payment.displayName")}),t.jsx("th",{children:i("payment.interface")}),t.jsx("th",{children:i("payment.notifyUrl")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((E,oe)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:E.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void U(oe,-1),disabled:oe===0,"aria-label":i("payment.moveUp"),children:t.jsx(th,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void U(oe,1),disabled:oe===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(eh,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${cd(E.enable)?"active":""}`,type:"button",onClick:()=>void fe(E.id),"aria-label":cd(E.enable)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:E.name}),E.icon?t.jsx("small",{children:E.icon}):null]}),t.jsx("td",{children:E.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void te(E.notify_url),children:[t.jsx("span",{children:E.notify_url}),t.jsx(os,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void T(E),children:[t.jsx(Rt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void w(E.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},E.id)),!j&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map((E,oe)=>{const O=cd(E.enable),J=E.handling_fee_percent!==null&&E.handling_fee_percent!==""?`${E.handling_fee_percent}%`:"",h=E.handling_fee_fixed!==null?`${_a(E.handling_fee_fixed)} VND`:"",W=[J,h].filter(Boolean).join(" + ")||"No fees",R=I[E.id],S=E.icon&&!R;return t.jsxs("div",{className:`payment-mobile-card ${O?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",E.id]}),t.jsx("span",{className:"gateway-tag",children:E.payment})]}),t.jsx("button",{className:`admin-switch ${O?"active":""}`,type:"button",onClick:()=>void fe(E.id),"aria-label":i(O?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[S?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:E.icon,alt:E.name,onError:()=>{ie(X=>({...X,[E.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:E.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:E.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:W})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:i("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void te(E.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:E.notify_url}),t.jsx(os,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void U(oe,-1),disabled:oe===0,"aria-label":i("payment.moveUp"),children:t.jsx(th,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void U(oe,1),disabled:oe===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(eh,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void T(E),children:[t.jsx(Rt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void w(E.id),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]})]},E.id)}),!j&&o.length===0?t.jsx("div",{className:"empty-state",children:i("payment.empty")}):null]}),f?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:f.id?i("payment.edit"):i("payment.add")}),t.jsx("p",{children:i("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>y(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ne,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:f.name,onChange:E=>y({...f,name:E.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:f.icon,onChange:E=>y({...f,icon:E.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:f.notify_domain,onChange:E=>y({...f,notify_domain:E.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:f.handling_fee_percent,onChange:E=>y({...f,handling_fee_percent:E.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:f.handling_fee_fixed,onChange:E=>y({...f,handling_fee_fixed:E.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.interface")}),t.jsx("select",{className:"config-input",value:f.payment,onChange:E=>void Y(E.target.value),children:p.map(E=>t.jsx("option",{value:E,children:E},E))})]}),q?t.jsx(xt,{label:i("payment.formLoading")}):null,q?null:Object.entries(_).map(([E,oe])=>t.jsxs("label",{children:[t.jsx("span",{children:oe.label}),t.jsx("input",{className:"config-input",placeholder:oe.description,value:String(f.config[E]??oe.value??""),onChange:O=>y({...f,config:{...f.config,[E]:O.target.value}})})]},E)),f.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>y(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:ee,children:[t.jsx(ka,{size:16}),i(ee?"payment.saving":"common.save")]})]})]})]})}):null]})}function R0(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function H0(s,i){return i[s.field_name]??s.default_value??""}function L0(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState(null),[p,x]=m.useState(null),[f,y]=m.useState(!0),[_,v]=m.useState(!1),[j,b]=m.useState(!1),[q,V]=m.useState(null),[ee,Z]=m.useState(""),[C,B]=m.useState(""),A=m.useCallback(async()=>{y(!0),Z("");try{d(await o1())}catch(T){Z(T instanceof Error?T.message:i("theme.loadFailed"))}finally{y(!1)}},[i]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}A()},[A,s]);async function D(T,Y){x(null),v(!0),Z(""),B("");try{const ne=await r1(T);x({key:T,theme:Y,values:ne})}catch(ne){Z(ne instanceof Error?ne.message:i("theme.configLoadFailed"))}finally{v(!1)}}async function I(T){V(T),Z(""),B("");try{await dx({frontend_theme:T}),B(i("theme.activateSuccess")),await A()}catch(Y){Z(Y instanceof Error?Y.message:i("theme.activateFailed"))}finally{V(null)}}async function ie(T){if(T.preventDefault(),!!p){b(!0),Z(""),B("");try{await c1(p.key,p.values),x(null),B(i("theme.saveSuccess")),await A()}catch(Y){Z(Y instanceof Error?Y.message:i("theme.saveFailed"))}finally{b(!1)}}}function re(T,Y){x(ne=>ne&&{...ne,values:{...ne.values,[T]:Y}})}return t.jsxs(Bt,{title:i("theme.title"),subtitle:i("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.available")}),t.jsx("p",{children:i("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:A,disabled:f,children:[t.jsx(Nt,{size:16}),i(f?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:i("theme.warning")}),ee?t.jsx("div",{className:"form-error",children:ee}):null,C?t.jsx("div",{className:"form-success",children:C}):null,f&&!o?t.jsx(xt,{label:i("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([T,Y])=>{const ne=o.active===T;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${R0(Y)})`},children:ne?t.jsxs("span",{className:"theme-active",children:[t.jsx(nx,{size:15}),i("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:Y.name||T}),t.jsx("p",{children:Y.description||i("theme.noDescription")})]}),t.jsxs("small",{children:[i("theme.version"),": ",Y.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void D(T,Y),children:[t.jsx(Mv,{size:15}),i("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ne||q===T,type:"button",onClick:()=>void I(T),children:[t.jsx(Cv,{size:15}),i(ne?"theme.current":q===T?"theme.activating":"theme.activate")]})]})]},T)})}):null,_?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(xt,{label:i("theme.configLoading")})})}):null,p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.configure",{name:p.theme.name||p.key})}),t.jsx("p",{children:p.theme.description||i("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>x(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ie,children:[(p.theme.configs??[]).map(T=>{const Y=H0(T,p.values);return t.jsxs("label",{children:[t.jsx("span",{children:T.label}),T.description?t.jsx("p",{className:"field-description",children:T.description}):null,T.field_type==="select"?t.jsx("select",{className:"config-input",value:Y,onChange:ne=>re(T.field_name,ne.target.value),children:Object.entries(T.select_options??{}).map(([ne,fe])=>t.jsx("option",{value:ne,children:fe},ne))}):null,T.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:T.placeholder,rows:5,value:Y,onChange:ne=>re(T.field_name,ne.target.value)}):null,T.field_type!=="select"&&T.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:T.placeholder,value:Y,onChange:ne=>re(T.field_name,ne.target.value)}):null]},T.field_name)}),(p.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:i("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>x(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(ka,{size:16}),i(j?"theme.saving":"common.save")]})]})]})]})}):null]})}const Ed=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],q0=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],B0=["tcp","ws","grpc","http","httpupgrade","xhttp"],G0=["tcp","ws","grpc","http","httpupgrade","xhttp"],Y0=["tcp","ws","grpc"],Sx=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],$0=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],Bd=typeof window<"u"?window.location.origin:"",V0="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function Q0(s,i,o=""){return s[i]??o}function et(s,i,o=""){return String(Q0(s,i,o))}function Gd(s,i){const o=s[i];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function X0(s){if(s&&typeof s=="object"&&!Array.isArray(s))return s;if(typeof s!="string"||!s.trim())return{};try{const i=JSON.parse(s);return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}catch{return{}}}function Z0(s){return typeof s=="string"?s.trim()!=="":Array.isArray(s)?s.length>0:s&&typeof s=="object"?Object.keys(s).length>0:!1}function K0(s){return s==="vmess"?"networkSettings":"network_settings"}function J0(s,i){const o=s==="vmess",d=s==="vless"||bl(s),p={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(i){case"tcp":return d?{acceptProxyProtocol:!1,...p}:p;case"ws":return d?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return o?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function bl(s){return s==="v2node"||s==="zicnode"}function F0(s){var i;return bl(s)?"ZicNode":((i=Ed.find(o=>o.value===s))==null?void 0:i.label)??s}function kx(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function W0(s){return s===!0||s===1||s==="1"||s==="true"}function P0(s){return kx(s).replace(/\/+$/,"")||Bd}function vh(s){return`'${s.replace(/'/g,"'\\''")}'`}function I0(s,i){const o=i.apiHost||Bd,d=i.apiKey||"TOKEN_MOI";return`wget -N ${V0} && \\
bash install.sh --api-host ${vh(o)} --node-id ${s} --api-key ${vh(d)}`}function jh(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function wh(s,i){if(i){const d=JSON.parse(JSON.stringify(i));return d.group_id=jh(d.group_id),d.route_id=jh(d.route_id),{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",insecure:0};case"tuic":return{...o,server_name:"",insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...o,protocol:"vless",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:""};default:return o}}function Cx({initialValue:s,onCancel:i,onSave:o}){const{t:d}=Ve(),[p,x]=m.useState(()=>JSON.stringify(s??{},null,2)),[f,y]=m.useState(""),_=j=>{if(j.preventDefault(),!p.trim()){o({});return}try{const b=JSON.parse(p);if(typeof b!="object"||b===null)throw new Error("Must be a JSON object {} or array []");o(b)}catch(b){y(b instanceof Error?b.message:"Invalid JSON")}},v=j=>{if(x(j),!j.trim()){y("");return}try{const b=JSON.parse(j);if(typeof b!="object"||b===null)throw new Error("Must be a JSON object {} or array []");y("")}catch(b){y(b instanceof Error?b.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:_,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),f&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",f]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:f?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:p,onChange:j=>v(j.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:i,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!f,children:d("common.confirm")})]})]})}function Me({label:s,required:i,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,i&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:p=>{p.preventDefault(),d()},children:o})]})}function ej({value:s,onChange:i,label:o}){const{t:d}=Ve(),[p,x]=m.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Me,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((f,y)=>t.jsxs("span",{className:"tag",onClick:()=>i(s.filter((_,v)=>v!==y)),style:{cursor:"pointer"},children:[f," ×"]},y)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:p,placeholder:d("node.tagPlaceholder"),onChange:f=>x(f.target.value),onKeyDown:f=>{f.key==="Enter"&&p.trim()&&(f.preventDefault(),i([...s,p.trim()]),x(""))}})]})]})}function Nh({options:s,value:i,onChange:o,label:d,actionText:p,onAction:x}){const{t:f}=Ve(),[y,_]=m.useState(""),v=s.filter(b=>i.includes(b.id)),j=s.filter(b=>b.name.toLowerCase().includes(y.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Me,{label:d,actionText:p,onAction:x}),v.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:v.map(b=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(i.filter(q=>q!==b.id)),children:[b.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},b.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${f("common.search")}...`,value:y,onChange:b=>_(b.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[j.map(b=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:i.includes(b.id),onChange:q=>o(q.target.checked?[...i,b.id]:i.filter(V=>V!==b.id))}),t.jsx("span",{children:b.name})]},b.id)),j.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?f("node.noGroupsAvailable"):f("node.noResultsFound")})]})]})}function hn({label:s,checked:i,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:i,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:i?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:i?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function tj({initialValue:s,isSnakeCase:i,onCancel:o,onSave:d}){const{t:p}=Ve(),x=i?"server_name":"serverName",f=i?"allow_insecure":"allowInsecure",[y,_]=m.useState(String((s==null?void 0:s[x])??"")),[v,j]=m.useState(()=>{const q=s==null?void 0:s[f];return q===1||q===!0||String(q)==="1"||String(q)==="true"}),b=q=>{q.preventDefault(),d({[x]:y,[f]:i?v?1:0:v})};return t.jsxs("form",{onSubmit:b,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:p("node.serverName")}),t.jsx("input",{className:"config-input",value:y,onChange:q=>_(q.target.value),placeholder:p("node.serverNameHelp")})]}),t.jsx(hn,{label:p("node.allowInsecure"),checked:v,onChange:j}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:o,children:p("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:p("common.confirm")})]})]})}function aj({draft:s,set:i,groups:o,routes:d,nodes:p,onOpenJson:x,onAddGroup:f,onOpenTransportConfig:y}){const{t:_}=Ve(),v=String(s._type),j=et(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:_("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:_("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:et(s,"name"),onChange:b=>i("name",b.target.value),placeholder:_("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:_("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:et(s,"rate","1"),onChange:b=>i("rate",Number(b.target.value))})]})]}),t.jsx(ej,{value:s.tags??[],onChange:b=>i("tags",b),label:_("node.tags")}),t.jsx(Nh,{options:o.map(b=>({id:b.id,name:b.name})),value:s.group_id??[],onChange:b=>i("group_id",b),label:_("node.permissionGroups"),actionText:_("node.addGroup"),onAction:f}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:_("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:et(s,"host"),onChange:b=>i("host",b.target.value),placeholder:_("node.addressPlaceholder")})]}),["vmess","vless"].includes(v)||bl(v)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:_("node.tls"),actionText:Number(s.tls)===2?void 0:_("node.editConfig"),onAction:()=>{const b=v==="vmess"?"tlsSettings":"tls_settings";x(_("node.tls"),b)}}),t.jsxs("select",{className:"config-input",value:et(s,"tls","0"),onChange:b=>{const q=Number(b.target.value);i("tls",q);const V=v==="vmess"?"tlsSettings":"tls_settings";q===1&&!s[V]&&i(V,{})},children:[t.jsx("option",{value:"0",children:_("node.none")}),t.jsx("option",{value:"1",children:_("node.useTls")}),v!=="vmess"&&t.jsx("option",{value:"2",children:_("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(v)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:_("node.sni")}),t.jsx("input",{className:"config-input",value:et(s,"server_name"),onChange:b=>i("server_name",b.target.value),placeholder:_("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:_("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:et(s,"port"),onChange:b=>i("port",b.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:_("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:et(s,"server_port"),onChange:b=>i("server_port",b.target.value),placeholder:"443"})]})]}),["vmess","trojan","vless"].includes(v)||bl(v)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:_("node.transportProtocol"),required:!0,actionText:_("node.editConfig"),onAction:y}),t.jsxs("select",{className:"config-input",value:j,onChange:b=>{i("network",b.target.value);const q=v==="vmess"?"networkSettings":"network_settings";s[q]||i(q,{})},children:[v==="vmess"&&q0.map(b=>t.jsx("option",{value:b,children:b},b)),v==="trojan"&&Y0.map(b=>t.jsx("option",{value:b,children:b},b)),v==="vless"&&B0.map(b=>t.jsx("option",{value:b,children:b},b)),bl(v)&&G0.map(b=>t.jsx("option",{value:b,children:b},b))]})]}):null,v==="trojan"&&t.jsx(lj,{draft:s,set:i}),v==="shadowsocks"&&t.jsx(ij,{draft:s,set:i,onOpenJson:x}),v==="hysteria"&&t.jsx(sj,{draft:s,set:i}),v==="tuic"&&t.jsx(oj,{draft:s,set:i}),v==="vless"&&t.jsx(rj,{draft:s,set:i,onOpenJson:x}),v==="anytls"&&t.jsx(cj,{draft:s,set:i,onOpenJson:x}),bl(v)&&t.jsx(dj,{draft:s,set:i,onOpenJson:x}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:_("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:b=>i("parent_id",b.target.value?Number(b.target.value):null),children:[t.jsx("option",{value:"",children:_("node.none")}),p.filter(b=>b.id!==s.id&&!b.parent_id).map(b=>t.jsx("option",{value:b.id,children:b.name},b.id))]})]}),t.jsx(Nh,{options:d.map(b=>({id:b.id,name:b.remarks})),value:s.route_id??[],onChange:b=>i("route_id",b),label:_("node.routingGroups")})]})]})}function nj({draft:s,set:i,onCancel:o,onSave:d}){const p=String(s._type),x=String(s.network??"tcp"),f=K0(p),y=s[f],_=Z0(y)?X0(y):J0(p,x);return t.jsx(Cx,{initialValue:_,onCancel:o,onSave:v=>{i(f,v),d()}})}function lj({draft:s,set:i}){const{t:o}=Ve();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(hn,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>i("allow_insecure",d?1:0)})]})}function ij({draft:s,set:i,onOpenJson:o}){const{t:d}=Ve(),p=Gd(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:et(s,"cipher","aes-128-gcm"),onChange:x=>i("cipher",x.target.value),children:Sx.map(x=>t.jsx("option",{value:x,children:x},x))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:et(s,"obfs"),onChange:x=>i("obfs",x.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(p.host??""),onChange:x=>i("obfs_settings",{...p,host:x.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(p.path??""),onChange:x=>i("obfs_settings",{...p,path:x.target.value}),placeholder:"/"})]})]})]})}function sj({draft:s,set:i}){const{t:o}=Ve();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:et(s,"version","2"),onChange:d=>i("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:et(s,"up_mbps","0"),onChange:d=>i("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:et(s,"down_mbps","0"),onChange:d=>i("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:et(s,"obfs"),onChange:d=>i("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:et(s,"obfs_password"),onChange:d=>i("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(hn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)})]})}function oj({draft:s,set:i}){const{t:o}=Ve();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:et(s,"udp_relay_mode","native"),onChange:d=>i("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:et(s,"congestion_control","bbr"),onChange:d=>i("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(hn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)}),t.jsx(hn,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>i("disable_sni",d?1:0)}),t.jsx(hn,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>i("zero_rtt_handshake",d?1:0)})]})}function rj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ve(),p=Number(s.tls??0),x=Gd(s,"tls_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:et(s,"flow"),onChange:f=>i("flow",f.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.encryption"),actionText:et(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:et(s,"encryption"),onChange:f=>i("encryption",f.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]}),p===2&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.realityConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.sni")}),t.jsx("input",{className:"config-input",value:String(x.server_name??""),onChange:f=>i("tls_settings",{...x,server_name:f.target.value})})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.servicePort")}),t.jsx("input",{className:"config-input",value:String(x.server_port??"443"),onChange:f=>i("tls_settings",{...x,server_port:f.target.value})})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:d("node.publicKey")}),t.jsx("input",{className:"config-input",value:String(x.public_key??""),onChange:f=>i("tls_settings",{...x,public_key:f.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:d("node.privateKey")}),t.jsx("input",{className:"config-input",value:String(x.private_key??""),onChange:f=>i("tls_settings",{...x,private_key:f.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:d("node.shortId")}),t.jsx("input",{className:"config-input",value:String(x.short_id??""),onChange:f=>i("tls_settings",{...x,short_id:f.target.value}),placeholder:d("node.autoGenHelp")})]})]})]})}function cj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ve();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(hn,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:p=>i("insecure",p?1:0)})]})}function dj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ve(),p=et(s,"protocol","vless"),x=Number(s.tls??0),f=Gd(s,"tls_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.zicnodeConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.nodeProtocol"),required:!0}),t.jsx("select",{className:"config-input",value:p,onChange:y=>i("protocol",y.target.value),children:$0.map(y=>t.jsx("option",{value:y,children:y},y))})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.listenIp")}),t.jsx("input",{className:"config-input",value:et(s,"listen_ip"),onChange:y=>i("listen_ip",y.target.value),placeholder:"0.0.0.0"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:et(s,"flow"),onChange:y=>i("flow",y.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.encryption"),actionText:et(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:et(s,"encryption"),onChange:y=>i("encryption",y.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]}),x===2&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.realityConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.sni")}),t.jsx("input",{className:"config-input",value:String(f.server_name??""),onChange:y=>i("tls_settings",{...f,server_name:y.target.value})})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.servicePort")}),t.jsx("input",{className:"config-input",value:String(f.server_port??"443"),onChange:y=>i("tls_settings",{...f,server_port:y.target.value})})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:d("node.publicKey")}),t.jsx("input",{className:"config-input",value:String(f.public_key??""),onChange:y=>i("tls_settings",{...f,public_key:y.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:d("node.privateKey")}),t.jsx("input",{className:"config-input",value:String(f.private_key??""),onChange:y=>i("tls_settings",{...f,private_key:y.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:d("node.shortId")}),t.jsx("input",{className:"config-input",value:String(f.short_id??""),onChange:y=>i("tls_settings",{...f,short_id:y.target.value}),placeholder:d("node.autoGenHelp")})]})]}),p==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:d("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:et(s,"cipher","aes-128-gcm"),onChange:y=>i("cipher",y.target.value),children:Sx.map(y=>t.jsx("option",{value:y,children:y},y))})]}),p==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:et(s,"up_mbps","0"),onChange:y=>i("up_mbps",Number(y.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:et(s,"down_mbps","0"),onChange:y=>i("down_mbps",Number(y.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:et(s,"obfs"),onChange:y=>i("obfs",y.target.value||null)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:et(s,"obfs_password"),onChange:y=>i("obfs_password",y.target.value)})]})]})]}),p==="tuic"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:et(s,"udp_relay_mode","native"),onChange:y=>i("udp_relay_mode",y.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:et(s,"congestion_control","bbr"),onChange:y=>i("congestion_control",y.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),p==="anytls"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(hn,{label:d("node.disableSni"),checked:s.disable_sni===1,onChange:y=>i("disable_sni",y?1:0)}),t.jsx(hn,{label:d("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:y=>i("zero_rtt_handshake",y?1:0)})]})}const _h={vmess:Ov,vless:Yv,trojan:Sd,shadowsocks:Ho,hysteria:Tv,tuic:fv,anytls:us,v2node:lh,zicnode:lh},uj={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},pj={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function Gn(s){return uj[s]??pj}function mj({draft:s,config:i,onCopy:o,t:d}){const p=Number(s.id??0),x=p>0?I0(p,i):"",f=!i.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),p>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:x}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(x),children:[t.jsx(os,{size:15}),d("node.copyInstallCommand")]}),f?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function fj(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState([]),[p,x]=m.useState([]),[f,y]=m.useState([]),[_,v]=m.useState(null),[j,b]=m.useState(null),[q,V]=m.useState(!0),[ee,Z]=m.useState(!1),[C,B]=m.useState(""),[A,D]=m.useState(""),[I,ie]=m.useState(1),[re,T]=m.useState(10),[Y,ne]=m.useState(!1),[fe,w]=m.useState({}),[U,te]=m.useState({apiHost:Bd,apiKey:""}),[E,oe]=m.useState(!1),[O,J]=m.useState(""),[h,W]=m.useState(null),[R,S]=m.useState(null),[X,de]=m.useState(null),ue=(H,ce)=>{H.dataTransfer.effectAllowed="move",S(ce)},_e=(H,ce)=>{if(H.preventDefault(),R===null||R===ce)return;const se=[...o],De=se[R];se.splice(R,1),se.splice(ce,0,De),S(ce),d(se)},Se=()=>{S(null)},Ue=(H,ce)=>{Y&&de(ce)},pt=H=>{if(!Y||X===null)return;H.cancelable&&H.preventDefault();const ce=H.touches[0],se=document.elementFromPoint(ce.clientX,ce.clientY);if(!se)return;const De=se.closest(".mobile-node-card");if(!De)return;const ze=De.getAttribute("data-index");if(ze===null)return;const Fe=Number(ze);if(Fe!==X&&Fe>=0&&Fe<o.length){const at=[...o],Ee=at[X];at.splice(X,1),at.splice(Fe,0,Ee),de(Fe),d(at)}},Be=()=>{de(null)};m.useEffect(()=>{ie(1)},[O,re]);const We=o.filter(H=>{const ce=O.toLowerCase().trim();return ce?H.name.toLowerCase().includes(ce)||H.host.toLowerCase().includes(ce)||String(H.id).includes(ce)||H.type.toLowerCase().includes(ce):!0}),Ht=Math.ceil(We.length/re),Et=We.slice((I-1)*re,I*re);function da(H,ce){return ce<=7?Array.from({length:ce},(se,De)=>De+1):H<=4?[1,2,3,4,5,"...",ce]:H>=ce-3?[1,"...",ce-4,ce-3,ce-2,ce-1,ce]:[1,"...",H-1,H,H+1,"...",ce]}const bt=da(I,Ht),ta=async()=>{var H,ce;Z(!0),B(""),D("");try{const se={};o.forEach((De,ze)=>{se[De.type]||(se[De.type]={}),se[De.type][String(De.id)]=ze+1}),await r0(se),(H=window.showToast)==null||H.call(window,i("node.saveSortSuccess"),"success"),ne(!1),await Ce()}catch(se){B(se instanceof Error?se.message:i("node.saveSortFailed")),(ce=window.showToast)==null||ce.call(window,se instanceof Error?se.message:i("node.saveSortFailed"),"error")}finally{Z(!1)}},Gt=async()=>{ne(!1),await je()},ua=()=>We.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:I===1,onClick:()=>ie(H=>Math.max(H-1,1)),children:"<"}),bt.map((H,ce)=>H==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${ce}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${I===H?"active":""}`,onClick:()=>ie(Number(H)),children:H},`page-${H}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:I===Ht||Ht===0,onClick:()=>ie(H=>Math.min(H+1,Ht)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsxs("select",{className:"pagination-size-select",value:re,onChange:H=>T(Number(H.target.value)),children:[t.jsxs("option",{value:10,children:["10 / ",i("common.perPage")]}),t.jsxs("option",{value:20,children:["20 / ",i("common.perPage")]}),t.jsxs("option",{value:50,children:["50 / ",i("common.perPage")]}),t.jsxs("option",{value:100,children:["100 / ",i("common.perPage")]})]})})]}),[mt,Vt]=m.useState(null),[Ft,_t]=m.useState(!1),[pa,z]=m.useState(""),[be,Le]=m.useState(!1),[ye,st]=m.useState(!1);async function G(H){var se,De;H.preventDefault();const ce=pa.trim();if(!(!ce||!_)){Le(!0),B(""),D("");try{await ux({name:ce});const ze=await ds();x(ze);const Fe=ze.filter(at=>at.name===ce).sort((at,Ee)=>Ee.id-at.id)[0];if(Fe){const at=_.group_id??[];at.includes(Fe.id)||ma("group_id",[...at,Fe.id])}z(""),_t(!1),(se=window.showToast)==null||se.call(window,i("node.groupCreateSuccess"),"success")}catch(ze){B(ze instanceof Error?ze.message:i("node.groupCreateFailed")),(De=window.showToast)==null||De.call(window,ze instanceof Error?ze.message:i("node.groupCreateFailed"),"error")}finally{Le(!1)}}}const we=(H,ce)=>{if(!_)return;let se=_[ce];if(typeof se=="string"&&se.trim())try{se=JSON.parse(se)}catch{}Vt({title:H,key:ce,value:se&&typeof se=="object"?se:{}})},je=m.useCallback(async()=>{var H,ce,se;V(!0),B("");try{const[De,ze,Fe,at]=await Promise.all([fh(),ds(),mx(),cx()]);d(De.data),x(ze),y(Fe),te({apiHost:P0((H=at.site)==null?void 0:H.app_url),apiKey:kx((ce=at.server)==null?void 0:ce.server_token)}),oe(W0((se=at.subscribe)==null?void 0:se.device_hwid_enable))}catch(De){B(De instanceof Error?De.message:i("knowledge.loadFailed"))}finally{V(!1)}},[]),Ce=m.useCallback(async()=>{try{const H=await fh();d(H.data)}catch(H){console.error("Refresh nodes failed",H)}},[]);async function Je(H){var se;const ce=await Zn(H);(se=window.showToast)==null||se.call(window,i(ce?"node.installCopied":"common.copyFailed"),ce?"success":"error")}m.useEffect(()=>{if(!Tt()){s.replace("/login");return}je()},[je,s]);function Qe(H){v(wh(H)),b(null),B(""),D("")}function Ge(H){v(wh(H.type,H)),B(""),D("")}function Re(H){!E||Number(H.online??0)<=0||s.push(`/device?node_type=${encodeURIComponent(H.type)}&node_id=${encodeURIComponent(String(H.id))}`)}function ot(H,ce){const se=Number(H.online??0),De=E&&se>0,ze=`${ce==="mobile"?"mobile-badge-pill":"online-badge"}${De?" online-badge-link":""}`,Fe=ce==="mobile"?12:13,at={...ce==="mobile"?{marginRight:4}:{},color:se>0?"#10b981":"var(--muted)",opacity:se>0?1:.6},Ee=t.jsxs(t.Fragment,{children:[t.jsx(sx,{size:Fe,style:at}),se]});return De?t.jsx("button",{className:ze,type:"button",title:i("node.viewOnlineDevices"),onClick:()=>Re(H),children:Ee}):t.jsx("span",{className:ze,children:Ee})}async function jl(H){var Fe,at;if(H.preventDefault(),!_)return;Z(!0),B(""),D("");const ce=String(_._type),se={..._};for(const Ee of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete se[Ee];if(se.padding_scheme!==void 0&&se.padding_scheme!==null&&typeof se.padding_scheme!="string"&&(se.padding_scheme=JSON.stringify(se.padding_scheme)),se.padding_scheme)try{const Ee=JSON.parse(String(se.padding_scheme));if(typeof Ee!="object"||Ee===null)throw new Error("Invalid JSON array or object")}catch(Ee){B("Invalid Padding Scheme configuration: "+(Ee instanceof Error?Ee.message:"JSON error")),Z(!1);return}const De=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const Ee of De)(se[Ee]===""||se[Ee]===null||se[Ee]===void 0)&&delete se[Ee];const ze=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings"];for(const Ee of ze){const fa=se[Ee];(fa==null||typeof fa=="object"&&Object.keys(fa).length===0)&&delete se[Ee]}se.port!==void 0&&(se.port=Number(se.port)),se.server_port!==void 0&&(se.server_port=Number(se.server_port)),se.tls!==void 0&&(se.tls=Number(se.tls)),se.rate!==void 0&&(se.rate=Number(se.rate));try{await l0(ce,se),v(null),(Fe=window.showToast)==null||Fe.call(window,i("node.saveSuccess"),"success"),await Ce()}catch(Ee){B(Ee instanceof Error?Ee.message:i("node.saveFailed")),(at=window.showToast)==null||at.call(window,Ee instanceof Error?Ee.message:i("node.saveFailed"),"error")}finally{Z(!1)}}async function Fn(H){const ce=[...o];d(se=>se.map(De=>De.id===H.id&&De.type===H.type?{...De,show:H.show?0:1}:De));try{await s0(H.type,H.id,H.show?0:1),await Ce()}catch(se){d(ce),B(se instanceof Error?se.message:i("node.updateFailed"))}}async function Wn(H){var ce,se;try{await o0(H.type,H.id),(ce=window.showToast)==null||ce.call(window,i("node.copySuccess"),"success"),await Ce()}catch(De){B(De instanceof Error?De.message:i("node.copyFailed")),(se=window.showToast)==null||se.call(window,De instanceof Error?De.message:i("node.copyFailed"),"error")}}async function Ga(H){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:i("node.deleteConfirm",{name:H.name}),onConfirm:async()=>{var De,ze;const se=[...o];d(Fe=>Fe.filter(at=>!(at.id===H.id&&at.type===H.type))),B("");try{await i0(H.type,H.id),(De=window.showToast)==null||De.call(window,i("node.deleteSuccess"),"success"),await Ce()}catch(Fe){d(se),B(Fe instanceof Error?Fe.message:i("node.deleteFailed")),(ze=window.showToast)==null||ze.call(window,Fe instanceof Error?Fe.message:i("node.deleteFailed"),"error")}}})}const ma=(H,ce)=>v(se=>se?{...se,[H]:ce}:null),Ya=_?String(_._type):"",It=F0(Ya);return t.jsxs(Bt,{title:i("node.title"),subtitle:i("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>b(j?null:"show"),title:i("node.createNode"),children:t.jsx(Sa,{size:18})}),j!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>b(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Ed.map(H=>{const ce=Gn(H.value),se=_h[H.value]||Lo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Qe(H.value),b(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:ce==null?void 0:ce.bg,backgroundColor:ce==null?void 0:ce.rowBg},children:t.jsx(se,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(ce==null?void 0:ce.bg)??"var(--surface-soft)",color:(ce==null?void 0:ce.text)??"#ffffff"},children:H.label})]},H.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:O,onChange:H=>J(H.target.value),placeholder:`${i("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${Y?"success-btn":""}`,type:"button",onClick:Y?ta:()=>ne(!0),disabled:ee,children:i(Y?ee?"node.saving":"node.saveOrder":"node.editSortOrder")}),Y&&t.jsx("button",{className:"ghost-button",type:"button",onClick:Gt,children:i("common.cancel")})]})]}),C?t.jsx("div",{className:"form-error",children:C}):null,A?t.jsx("div",{className:"form-success",children:A}):null,q&&o.length===0?t.jsx(xt,{label:i("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[i("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",i("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",i("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",i("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:i("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:i("node.address")}),t.jsx("th",{className:"mobile-hide",children:i("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:i("node.colRate")}),t.jsx("th",{children:i("node.colGroups")}),t.jsx("th",{children:i(Y?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[Et.map(H=>{const ce=o.findIndex(se=>se.id===H.id&&se.type===H.type);return t.jsxs("tr",{draggable:Y,onDragStart:se=>ue(se,ce),onDragOver:se=>_e(se,ce),onDragEnd:Se,className:R===ce?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Gn(H.type).bg,color:Gn(H.type).text,border:`1px solid ${Gn(H.type).border}`},children:H.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${H.show?"active":""}`,type:"button",onClick:()=>void Fn(H),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${H.available_status??0}`,title:H.available_status===2?i("node.statusNormal"):H.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("strong",{children:H.name})]})}),t.jsx("td",{children:ot(H,"desktop")}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:H.host})}),t.jsx("td",{className:"mobile-hide",children:String(H.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[H.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const se=H.group_id??[],De=fe[`${H.type}-${H.id}`],ze=se.map(Ee=>{const fa=p.find(N=>Number(N.id)===Number(Ee));return t.jsx("span",{className:"tag",children:(fa==null?void 0:fa.name)??`#${Ee}`},Ee)});if(se.length<=3||De)return t.jsxs(t.Fragment,{children:[ze,se.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>w(Ee=>({...Ee,[`${H.type}-${H.id}`]:!1})),children:i("node.collapse")})]});const Fe=ze.slice(0,3),at=se.length-3;return t.jsxs(t.Fragment,{children:[Fe,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>w(Ee=>({...Ee,[`${H.type}-${H.id}`]:!0})),children:["+",at,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:i("node.allPermissionGroups",{count:se.length})}),ze]})]})]})})()})}),t.jsx("td",{children:Y?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(ls,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(h==null?void 0:h.id)===H.id&&(h==null?void 0:h.type)===H.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>W((h==null?void 0:h.id)===H.id&&(h==null?void 0:h.type)===H.type?null:{id:H.id,type:H.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(h==null?void 0:h.id)===H.id&&(h==null?void 0:h.type)===H.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>W(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ge(H),W(null)},children:[t.jsx(Rt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Wn(H),W(null)},children:[t.jsx(os,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Ga(H),W(null)},children:[t.jsx(qt,{size:14})," ",i("common.delete")]})]})]})]})})]},`${H.type}-${H.id}`)}),!q&&We.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")})})}):null]})]})}),ua()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>b(j?null:"show"),title:i("node.createNode"),children:t.jsx(Sa,{size:20})}),j!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>b(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Ed.map(H=>{const ce=Gn(H.value),se=_h[H.value]||Lo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Qe(H.value),b(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:ce==null?void 0:ce.bg,backgroundColor:ce==null?void 0:ce.rowBg},children:t.jsx(se,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(ce==null?void 0:ce.bg)??"var(--surface-soft)",color:(ce==null?void 0:ce.text)??"#ffffff"},children:H.label})]},H.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:O,onChange:H=>J(H.target.value),placeholder:`${i("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${Y?"active":""}`,type:"button",onClick:()=>ne(!Y),title:i("node.editSortOrder"),children:t.jsx(ls,{size:20})})]}),Y&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:i("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:Gt,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void ta(),disabled:ee,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i(ee?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[Et.map(H=>{const ce=o.findIndex(se=>se.id===H.id&&se.type===H.type);return t.jsxs("div",{className:`mobile-node-card ${R===ce||X===ce?"dragging":""}`,draggable:Y,onDragStart:se=>ue(se,ce),onDragOver:se=>_e(se,ce),onDragEnd:Se,onTouchStart:se=>Ue(se,ce),onTouchMove:pt,onTouchEnd:Be,"data-index":ce,style:Y?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${H.available_status??0}`,title:H.available_status===2?i("node.statusNormal"):H.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:H.name})]}),t.jsx("div",{className:"card-header-right",children:Y?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(ls,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${H.show===1?"active":""}`,onClick:()=>void Fn(H),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(h==null?void 0:h.id)===H.id&&(h==null?void 0:h.type)===H.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>W((h==null?void 0:h.id)===H.id&&(h==null?void 0:h.type)===H.type?null:{id:H.id,type:H.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(h==null?void 0:h.id)===H.id&&(h==null?void 0:h.type)===H.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>W(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ge(H),W(null)},children:[t.jsx(Rt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Wn(H),W(null)},children:[t.jsx(os,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Ga(H),W(null)},children:[t.jsx(qt,{size:14})," ",i("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[H.host,":",H.port||H.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Gn(H.type).bg,color:Gn(H.type).text,border:`1px solid ${Gn(H.type).border}`},children:H.id}),ot(H,"mobile"),t.jsxs("span",{className:"mobile-badge-pill",children:[H.rate," x"]})]})]},`${H.type}-${H.id}`)}),!q&&We.length===0&&t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")}),ua()]}),_!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:_.id?i("node.editNodeTitle",{type:It}):i("node.createNodeTitle",{type:It})}),t.jsx("p",{children:i("node.configureFieldsSubtitle",{type:It})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>v(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:jl,children:[t.jsx(aj,{draft:_,set:ma,groups:p,routes:f,nodes:o,onOpenJson:we,onAddGroup:()=>_t(!0),onOpenTransportConfig:()=>st(!0)}),bl(Ya)?t.jsx(mj,{draft:_,config:U,onCopy:H=>void Je(H),t:i}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>v(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:ee,children:[t.jsx(ka,{size:16}),i(ee?"node.saving":"common.save")]})]})]})]})}),mt!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:600,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:mt.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(mt.key)?i("node.tlsEditorSubtitle"):i("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Vt(null),children:t.jsx(it,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(mt.key)?t.jsx(tj,{initialValue:mt.value,isSnakeCase:mt.key==="tls_settings",onCancel:()=>Vt(null),onSave:H=>{ma(mt.key,H),Vt(null)}}):t.jsx(Cx,{initialValue:mt.value,onCancel:()=>Vt(null),onSave:H=>{ma(mt.key,H),Vt(null)}})})]})}),Ft&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.addNewGroupTitle")}),t.jsx("p",{children:i("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_t(!1),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{onSubmit:G,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:i("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:pa,onChange:H=>z(H.target.value),placeholder:i("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_t(!1),disabled:be,children:i("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:be||!pa.trim(),children:i(be?"node.saving":"common.confirm")})]})]})]})}),ye&&_!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.transportConfigTitle",{network:String(_.network??"tcp").toUpperCase()})}),t.jsx("p",{children:i("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>st(!1),children:t.jsx(it,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(nj,{draft:_,set:ma,onCancel:()=>st(!1),onSave:()=>st(!1)})})]})})]})}function hj(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState([]),[p,x]=m.useState(null),[f,y]=m.useState(!0),[_,v]=m.useState(!1),[j,b]=m.useState(""),q=m.useCallback(async()=>{y(!0),b("");try{d(await ds())}catch(C){b(C instanceof Error?C.message:i("serverGroup.loadFailed"))}finally{y(!1)}},[i]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}q()},[q,s]);function V(C){x({id:C==null?void 0:C.id,name:(C==null?void 0:C.name)??""}),b("")}async function ee(C){var B;if(C.preventDefault(),!!p){v(!0),b("");try{await ux(p),x(null),(B=window.showToast)==null||B.call(window,i("serverGroup.saveSuccess"),"success"),await q()}catch(A){b(A instanceof Error?A.message:i("serverGroup.saveFailed"))}finally{v(!1)}}}async function Z(C){var B;(B=window.showConfirm)==null||B.call(window,{message:i("serverGroup.deleteConfirm"),onConfirm:async()=>{var A,D;b("");try{await d1(C),(A=window.showToast)==null||A.call(window,i("serverGroup.deleteSuccess"),"success"),await q()}catch(I){b(I instanceof Error?I.message:i("serverGroup.deleteFailed")),(D=window.showToast)==null||D.call(window,I instanceof Error?I.message:i("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(Bt,{title:i("serverGroup.title"),subtitle:i("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverGroup.heading")}),t.jsx("p",{children:i("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:q,disabled:f,children:[t.jsx(Nt,{size:16}),i(f?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>V(),children:[t.jsx(Sa,{size:16}),i("serverGroup.add")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,f&&o.length===0?t.jsx(xt,{label:i("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverGroup.id")}),t.jsx("th",{children:i("serverGroup.name")}),t.jsx("th",{children:i("serverGroup.userCount")}),t.jsx("th",{children:i("serverGroup.serverCount")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(C=>t.jsxs("tr",{children:[t.jsx("td",{children:C.id}),t.jsx("td",{children:t.jsx("strong",{children:C.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(cs,{size:14}),C.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Lo,{size:14}),C.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>V(C),children:[t.jsx(Rt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Z(C.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},C.id)),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:i("serverGroup.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?i("serverGroup.edit"):i("serverGroup.add")}),t.jsx("p",{children:i("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>x(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ee,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:p.name,onChange:C=>x({...p,name:C.target.value}),placeholder:i("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>x(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:_,children:[t.jsx(ka,{size:16}),i(_?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function xj(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function gj(s){var i;return((i=px.find(o=>o.value===s))==null?void 0:i.label)??s}function bj(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState([]),[p,x]=m.useState(null),[f,y]=m.useState(!0),[_,v]=m.useState(!1),[j,b]=m.useState(""),q=m.useCallback(async()=>{y(!0),b("");try{d(await mx())}catch(C){b(C instanceof Error?C.message:i("serverRoute.loadFailed"))}finally{y(!1)}},[i]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}q()},[q,s]);function V(C){x(xj(C)),b("")}async function ee(C){var A;if(C.preventDefault(),!p)return;v(!0),b("");const B=p.action==="default_out"?[]:p.match.split(`
`).map(D=>D.trim()).filter(Boolean);try{await u1({id:p.id,remarks:p.remarks,match:B,action:p.action,action_value:p.action_value||null}),x(null),(A=window.showToast)==null||A.call(window,i("serverRoute.saveSuccess"),"success"),await q()}catch(D){b(D instanceof Error?D.message:i("serverRoute.saveFailed"))}finally{v(!1)}}async function Z(C){var B;(B=window.showConfirm)==null||B.call(window,{message:i("serverRoute.deleteConfirm"),onConfirm:async()=>{var A,D;b("");try{await p1(C),(A=window.showToast)==null||A.call(window,i("serverRoute.deleteSuccess"),"success"),await q()}catch(I){b(I instanceof Error?I.message:i("serverRoute.deleteFailed")),(D=window.showToast)==null||D.call(window,I instanceof Error?I.message:i("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(Bt,{title:i("serverRoute.title"),subtitle:i("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverRoute.heading")}),t.jsx("p",{children:i("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:q,disabled:f,children:[t.jsx(Nt,{size:16}),i(f?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>V(),children:[t.jsx(Sa,{size:16}),i("serverRoute.add")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,f&&o.length===0?t.jsx(xt,{label:i("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverRoute.id")}),t.jsx("th",{children:i("serverRoute.remarks")}),t.jsx("th",{children:i("serverRoute.matchValues")}),t.jsx("th",{children:i("serverRoute.action")}),t.jsx("th",{children:i("serverRoute.actionValue")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(C=>t.jsxs("tr",{children:[t.jsx("td",{children:C.id}),t.jsx("td",{children:t.jsx("strong",{children:C.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(C.match)?C.match:[]).slice(0,3).map((B,A)=>t.jsx("span",{className:"tag",children:B},A)),Array.isArray(C.match)&&C.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",C.match.length-3]}):null,!Array.isArray(C.match)||C.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:gj(C.action)})}),t.jsx("td",{children:C.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>V(C),children:[t.jsx(Rt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Z(C.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},C.id)),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("serverRoute.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?i("serverRoute.edit"):i("serverRoute.add")}),t.jsx("p",{children:i("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>x(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ee,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:p.remarks,onChange:C=>x({...p,remarks:C.target.value}),placeholder:i("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.action")}),t.jsx("select",{className:"config-input",value:p.action,onChange:C=>x({...p,action:C.target.value}),children:px.map(C=>t.jsx("option",{value:C.value,children:C.label},C.value))})]}),p.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:p.match,onChange:C=>x({...p,match:C.target.value}),placeholder:i("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:p.action_value,onChange:C=>x({...p,action_value:C.target.value}),placeholder:i("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>x(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:_,children:[t.jsx(ka,{size:16}),i(_?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function yj(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",force_update:!1}}function vj(s){const i=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:i(s.month_price),quarter_price:i(s.quarter_price),half_year_price:i(s.half_year_price),year_price:i(s.year_price),two_year_price:i(s.two_year_price),three_year_price:i(s.three_year_price),onetime_price:i(s.onetime_price),reset_price:i(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),force_update:s.force_update}}function Pt(s){return s==null?"—":_a(s)}function jj(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function wj(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState([]),[p,x]=m.useState([]),[f,y]=m.useState(null),[_,v]=m.useState(!0),[j,b]=m.useState(!1),[q,V]=m.useState(""),[ee,Z]=m.useState(""),[C,B]=m.useState(null),[A,D]=m.useState(null),I=(h,W)=>{h.dataTransfer.effectAllowed="move",B(W)},ie=(h,W)=>{if(h.preventDefault(),C===null||C===W)return;const R=[...o],S=R[C];R.splice(C,1),R.splice(W,0,S),B(W),d(R)},re=async()=>{B(null);try{await ph(o.map(h=>h.id)),await fe()}catch(h){V(h instanceof Error?h.message:i("plan.sortFailed")),await fe()}},T=(h,W)=>{D(W)},Y=h=>{if(A===null)return;const W=h.touches[0],R=document.elementFromPoint(W.clientX,W.clientY);if(!R)return;const S=R.closest("tr, [data-index]");if(!S)return;const X=S.getAttribute("data-index");if(X===null)return;const de=Number(X);if(de!==A&&de>=0&&de<o.length){const ue=[...o],_e=ue[A];ue.splice(A,1),ue.splice(de,0,_e),D(de),d(ue)}},ne=async()=>{if(A!==null){D(null);try{await ph(o.map(h=>h.id)),await fe()}catch(h){V(h instanceof Error?h.message:i("plan.sortFailed")),await fe()}}},fe=m.useCallback(async()=>{v(!0),V("");try{const[h,W]=await Promise.all([vl(),ds()]);d(h),x(W)}catch(h){V(h instanceof Error?h.message:i("plan.loadFailed"))}finally{v(!1)}},[i]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}fe()},[fe,s]);function w(h){y(yj(h)),V(""),Z("")}async function U(h){var W,R;if(h.preventDefault(),!!f){b(!0),V(""),Z("");try{await m1(vj(f)),y(null),(W=window.showToast)==null||W.call(window,i("plan.saveSuccess"),"success"),await fe()}catch(S){(R=window.showToast)==null||R.call(window,S instanceof Error?S.message:i("plan.saveFailed"),"error")}finally{b(!1)}}}async function te(h,W){var R;try{await uh(h,{show:W?0:1}),await fe()}catch(S){(R=window.showToast)==null||R.call(window,S instanceof Error?S.message:i("plan.toggleFailed"),"error")}}async function E(h,W){var R;try{await uh(h,{renew:W?0:1}),await fe()}catch(S){(R=window.showToast)==null||R.call(window,S instanceof Error?S.message:i("plan.toggleFailed"),"error")}}async function oe(h){var W;(W=window.showConfirm)==null||W.call(window,{message:i("plan.deleteConfirm"),onConfirm:async()=>{var R,S;V(""),Z("");try{await f1(h),(R=window.showToast)==null||R.call(window,i("plan.deleteSuccess"),"success"),await fe()}catch(X){(S=window.showToast)==null||S.call(window,X instanceof Error?X.message:i("plan.deleteFailed"),"error")}}})}function O(h){var W;return((W=p.find(R=>R.id===h))==null?void 0:W.name)??`#${h}`}function J(h,W){y(R=>R&&{...R,[h]:W})}return t.jsxs(Bt,{title:i("plan.title"),subtitle:i("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("plan.heading")}),t.jsx("p",{children:i("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:fe,disabled:_,children:[t.jsx(Nt,{size:16}),i(_?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(),children:[t.jsx(Sa,{size:16}),i("plan.add")]})]})]}),q?t.jsx("div",{className:"form-error",children:q}):null,ee?t.jsx("div",{className:"form-success",children:ee}):null,_&&o.length===0?t.jsx(xt,{label:i("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:i("plan.show")}),t.jsx("th",{children:i("plan.renew")}),t.jsx("th",{children:i("plan.name")}),t.jsx("th",{children:i("plan.users")}),t.jsx("th",{children:i("plan.group")}),t.jsx("th",{children:i("plan.pricing")}),t.jsx("th",{children:i("plan.traffic")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((h,W)=>t.jsxs("tr",{draggable:!0,onDragStart:R=>I(R,W),onDragOver:R=>ie(R,W),onDragEnd:re,onTouchStart:R=>T(R,W),onTouchMove:Y,onTouchEnd:ne,"data-index":W,className:C===W||A===W?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:i("plan.sort"),children:t.jsx(ls,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:h.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${h.show?"active":""}`,type:"button",onClick:R=>{R.stopPropagation(),te(h.id,h.show)},title:h.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${h.renew?"active":""}`,type:"button",onClick:R=>{R.stopPropagation(),E(h.id,h.renew)},title:h.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:h.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(cs,{size:14}),h.count??0]})}),t.jsx("td",{children:O(h.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[h.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:Pt(h.month_price)})]}),h.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:Pt(h.quarter_price)})]}),h.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:Pt(h.half_year_price)})]}),h.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:Pt(h.year_price)})]}),h.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:Pt(h.two_year_price)})]}),h.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:Pt(h.three_year_price)})]}),h.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:Pt(h.onetime_price)})]}),h.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:Pt(h.reset_price)})]})]})}),t.jsxs("td",{children:[h.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:R=>{R.stopPropagation(),w(h)},children:[t.jsx(Rt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:R=>{R.stopPropagation(),oe(h.id)},children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},h.id)),!_&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((h,W)=>t.jsxs("div",{className:`mobile-node-card ${C===W||A===W?"dragging":""}`,draggable:!0,onDragStart:R=>I(R,W),onDragOver:R=>ie(R,W),onDragEnd:re,onTouchStart:R=>T(R,W),onTouchMove:Y,onTouchEnd:ne,"data-index":W,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:i("plan.sort"),children:t.jsx(ls,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:h.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:h.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:R=>{R.stopPropagation(),w(h)},children:[t.jsx(Rt,{size:12}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:R=>{R.stopPropagation(),oe(h.id)},children:[t.jsx(qt,{size:12}),i("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.show")}),t.jsx("button",{className:`admin-switch ${h.show?"active":""}`,type:"button",onClick:R=>{R.stopPropagation(),te(h.id,h.show)},title:h.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.renew")}),t.jsx("button",{className:`admin-switch ${h.renew?"active":""}`,type:"button",onClick:R=>{R.stopPropagation(),E(h.id,h.renew)},title:h.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(cs,{size:12,style:{marginRight:4}}),h.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:O(h.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[h.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[h.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:Pt(h.month_price)})]}),h.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:Pt(h.quarter_price)})]}),h.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:Pt(h.half_year_price)})]}),h.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:Pt(h.year_price)})]}),h.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:Pt(h.two_year_price)})]}),h.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:Pt(h.three_year_price)})]}),h.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:Pt(h.onetime_price)})]}),h.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:Pt(h.reset_price)})]})]})]},h.id)),!_&&o.length===0?t.jsx("div",{className:"empty-state",children:i("plan.empty")}):null]}),f?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:f.id?i("plan.edit"):i("plan.add")}),t.jsx("p",{children:i("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>y(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:U,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:f.name,onChange:h=>J("name",h.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:f.content,onChange:h=>J("content",h.target.value),placeholder:i("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:f.group_id,onChange:h=>J("group_id",h.target.value),children:[t.jsx("option",{value:"",children:i("plan.selectGroup")}),p.map(h=>t.jsx("option",{value:h.id,children:h.name},h.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:f.transfer_enable,onChange:h=>J("transfer_enable",h.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:f.device_limit,onChange:h=>J("device_limit",h.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:f.speed_limit,onChange:h=>J("speed_limit",h.target.value),placeholder:i("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:f.capacity_limit,onChange:h=>J("capacity_limit",h.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:f.reset_traffic_method,onChange:h=>J("reset_traffic_method",h.target.value),children:jj(i).map(h=>t.jsx("option",{value:h.value,children:h.label},h.value))})]})]}),t.jsx("h3",{className:"form-section-title",children:i("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.month_price,onChange:h=>J("month_price",h.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.quarter_price,onChange:h=>J("quarter_price",h.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.half_year_price,onChange:h=>J("half_year_price",h.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.year_price,onChange:h=>J("year_price",h.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.two_year_price,onChange:h=>J("two_year_price",h.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.three_year_price,onChange:h=>J("three_year_price",h.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.onetime_price,onChange:h=>J("onetime_price",h.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.reset_price,onChange:h=>J("reset_price",h.target.value),placeholder:"—"})]})]}),f.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:f.force_update,onChange:h=>J("force_update",String(h.target.checked))}),t.jsx("span",{children:i("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>y(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(ka,{size:16}),i(j?"plan.saving":"common.save")]})]})]})]})}):null]})}const dd="模糊",Sh={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},kh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Ch(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getDate()).padStart(2,"0"),x=String(i.getHours()).padStart(2,"0"),f=String(i.getMinutes()).padStart(2,"0");return`${o}/${d}/${p} ${x}:${f}`}function zh(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getDate()).padStart(2,"0"),x=String(i.getHours()).padStart(2,"0"),f=String(i.getMinutes()).padStart(2,"0"),y=String(i.getSeconds()).padStart(2,"0");return`${o}-${d}-${p} ${x}:${f}:${y}`}function Th(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Ha(s){return`${_a(Number(s??0))} ₫`}const zx="adminzic_user_cache";function Nj(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(zx);return s?JSON.parse(s):{}}catch{return{}}}function _j(s){if(!(typeof window>"u"))try{sessionStorage.setItem(zx,JSON.stringify(s))}catch{}}const si=(s,i)=>`${s}:${i}`;function Sj(){var z,be,Le,ye,st;const s=zt(),i=Ka(),{t:o}=Ve(),d=m.useCallback(G=>{switch(G){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${G}`,cls:""}}},[o]),p=m.useCallback(G=>{const we=`order.period.${G}`,je=o(we);return je===we?kh[G]??G:je},[o]),[x,f]=m.useState([]),[y,_]=m.useState([]),[v,j]=m.useState({}),[b,q]=m.useState(0),[V,ee]=m.useState(1),[Z]=m.useState(15),[C,B]=m.useState(""),[A,D]=m.useState("trade_no"),[I,ie]=m.useState(!0),[re,T]=m.useState(null),[Y,ne]=m.useState(!1),[fe,w]=m.useState(""),[U,te]=m.useState(""),[E,oe]=m.useState(null),[O,J]=m.useState(null),[h,W]=m.useState(!1),[R,S]=m.useState(null),[X,de]=m.useState(!1),[ue,_e]=m.useState(()=>Nj()),Se=m.useCallback((G,we)=>{const je=si(we,G);J(null),oe(Ce=>Ce===je?null:je)},[]),Ue=m.useCallback((G,we)=>{const je=si(we,G);oe(null),J(Ce=>Ce===je?null:je)},[]),pt=m.useCallback(G=>{const we=Number(G.coupon_id??0);return we?v[we]??`#${we}`:null},[v]);m.useEffect(()=>{if(!E&&!O)return;const G=()=>{oe(null),J(null)},we=Ce=>{const Je=Ce.target;Je!=null&&Je.closest(".order-dropdown-trigger, .order-dropdown-menu")||G()},je=Ce=>{Ce.key==="Escape"&&G()};return document.addEventListener("pointerdown",we),document.addEventListener("keydown",je),()=>{document.removeEventListener("pointerdown",we),document.removeEventListener("keydown",je)}},[E,O]),m.useEffect(()=>{const G=new Set;if(x.forEach(je=>{je.user_id&&!ue[je.user_id]&&G.add(je.user_id),je.invite_user_id&&!ue[je.invite_user_id]&&G.add(je.invite_user_id)}),R&&(R.user_id&&!ue[R.user_id]&&G.add(R.user_id),R.invite_user_id&&!ue[R.invite_user_id]&&G.add(R.invite_user_id)),G.size===0)return;const we=Array.from(G);Promise.allSettled(we.map(async je=>{try{const Ce=await xx(je);if(Ce&&Ce.data)return{id:je,email:Ce.data.email,invite_user:Ce.data.invite_user}}catch(Ce){console.error(`Failed to fetch user ${je}:`,Ce)}return null})).then(je=>{const Ce={};je.forEach(Je=>{var Qe;if(Je.status==="fulfilled"&&Je.value){const Ge=Je.value;Ce[Ge.id]={email:Ge.email,invite_user_email:((Qe=Ge.invite_user)==null?void 0:Qe.email)||null},Ge.invite_user&&(Ce[Ge.invite_user.id]={email:Ge.invite_user.email})}}),Object.keys(Ce).length>0&&_e(Je=>{const Qe={...Je,...Ce};return _j(Qe),Qe})})},[x,R,ue]);const Be={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},We=m.useCallback(async(G=1,we,je)=>{var Ce,Je;ie(!0),w("");try{let Qe;if(we)if(je==="email"){const ot=(Ce=(await zd(1,1,[{key:"email",condition:dd,value:we}])).data)==null?void 0:Ce[0];if(!ot){f([]),q(0),ie(!1);return}Qe=[{key:"user_id",condition:"=",value:String(ot.id)}]}else if(je==="invite_user_email"){const ot=(Je=(await zd(1,1,[{key:"email",condition:dd,value:we}])).data)==null?void 0:Je[0];if(!ot){f([]),q(0),ie(!1);return}Qe=[{key:"invite_user_id",condition:"=",value:String(ot.id)}]}else Qe=[{key:je||"trade_no",condition:je==="trade_no"||je==="user_id"||je==="invite_user_id"||je==="plan_id"||je==="status"?"=":dd,value:we}];const Ge=await h1({current:G,pageSize:Z,filter:Qe});f(Ge.data),q(Ge.total)}catch(Qe){w(Qe instanceof Error?Qe.message:o("order.loadFailed"))}finally{ie(!1)}},[Z,o]),Ht=m.useCallback(G=>{const we=String(G);D("user_id"),B(we),W(!0),ee(1),We(1,we,"user_id")},[We]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}const G=new URLSearchParams(i.search),we=G.get("filter_email"),je=G.get("invite_user_email"),Ce=G.get("user_id")||G.get("filter_user_id");let Je="",Qe="trade_no";Ce?(Je=Ce,Qe="user_id",D("user_id"),B(Ce),W(!0)):we?(Je=we,Qe="email",D("email"),B(we),W(!0)):je&&(Je=je,Qe="invite_user_email",D("invite_user_email"),B(je),W(!0)),We(1,Je,Qe),vl().then(_).catch(()=>{}),hx(1,1e3).then(Ge=>{const Re={};Ge.data.forEach(ot=>{Re[ot.id]=ot.code}),j(Re)}).catch(()=>{})},[We,s,i.search]);function Et(){ee(1),We(1,C,A)}function da(){B(""),ee(1),We(1)}function bt(G){ee(G),We(G,C,A)}async function ta(G){var we,je;oe(null),J(null),w(""),te("");try{await x1(G),(we=window.showToast)==null||we.call(window,o("order.paidSuccess"),"success"),await We(V,C,A)}catch(Ce){(je=window.showToast)==null||je.call(window,Ce instanceof Error?Ce.message:o("order.paidFailed"),"error")}}async function Gt(G){var we,je;oe(null),J(null),w(""),te("");try{await g1(G),(we=window.showToast)==null||we.call(window,o("order.cancelSuccess"),"success"),await We(V,C,A)}catch(Ce){(je=window.showToast)==null||je.call(window,Ce instanceof Error?Ce.message:o("order.cancelFailed"),"error")}}async function ua(G,we){var je,Ce;oe(null),J(null),w(""),te("");try{await b1(G,we),(je=window.showToast)==null||je.call(window,o("order.commissionSuccess"),"success"),await We(V,C,A)}catch(Je){(Ce=window.showToast)==null||Ce.call(window,Je instanceof Error?Je.message:o("order.commissionFailed"),"error")}}async function mt(G){S(G),de(!0);try{const we=await y1(G.id);we&&we.data&&S(we.data)}catch(we){console.error("Failed to fetch order detail:",we)}finally{de(!1)}}function Vt(){var G;T({email:"",plan_id:(G=y[0])!=null&&G.id?String(y[0].id):"",period:"month_price",total_amount:"0"}),w(""),te("")}async function Ft(G){var we,je;if(G.preventDefault(),!!re){ne(!0),w(""),te("");try{await fx({email:re.email,plan_id:Number(re.plan_id),period:re.period,total_amount:Number(re.total_amount)*100}),T(null),(we=window.showToast)==null||we.call(window,o("order.assignSuccess"),"success"),await We(V,C,A)}catch(Ce){(je=window.showToast)==null||je.call(window,Ce instanceof Error?Ce.message:o("order.assignFailed"),"error")}finally{ne(!1)}}}const _t=Math.ceil(b/Z),pa=R?pt(R):null;return t.jsxs(Bt,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${h?"active":""}`,type:"button",onClick:()=>W(!h),children:[t.jsx(rs,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Vt,children:[t.jsx(Sa,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void We(V,C,A),disabled:I,children:[t.jsx(Nt,{size:16}),o(I?"common.refreshing":"common.refresh")]})]}),h&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:A,onChange:G=>D(G.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Yo,{size:16}),t.jsx("input",{className:"config-input search-input",value:C,onChange:G=>B(G.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:G=>G.key==="Enter"&&Et()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Et,children:[t.jsx(rs,{size:16}),o("order.filter")]}),C?t.jsxs("button",{className:"ghost-button",type:"button",onClick:da,children:[t.jsx(it,{size:16}),o("order.clearFilter")]}):null]}),fe?t.jsx("div",{className:"form-error",children:fe}):null,U?t.jsx("div",{className:"form-success",children:U}):null,I&&x.length===0?t.jsx(xt,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${I?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[x.map(G=>{var Ge;const we=d(G.status),je=G.invite_user_id!==null,Ce=Be[G.commission_status]??{label:`#${G.commission_status}`,dotClass:"pending"},Je=pt(G),Qe=(Ge=ue[G.user_id])==null?void 0:Ge.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>mt(G),title:o("order.detailsTitle"),children:Th(G.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",G.id]}),t.jsx("span",{className:"order-type-pill",children:Sh[G.type]??`#${G.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[Qe?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Ht(G.user_id),title:o("order.filterByUser"),children:Qe}):t.jsxs("span",{className:"order-subline",children:["ID: ",G.user_id]}),t.jsx("strong",{className:"order-plan-name",children:G.plan_name??`Plan #${G.plan_id}`}),t.jsx("span",{className:"period-capsule",children:p(G.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Ha(G.total_amount)}),Je?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",Je]}):null,Number(G.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Ha(G.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${we.cls.replace("status-","")}`}),t.jsx("span",{children:we.label}),G.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Re=>{Re.stopPropagation(),Se(G.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),E===si("desktop",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Re=>Re.stopPropagation(),onClick:Re=>Re.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{oe(null),ta(G.trade_no)},children:[t.jsx(So,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{oe(null),Gt(G.trade_no)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[je?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Ha(G.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ce.dotClass}`}),t.jsx("span",{children:Ce.label}),G.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Re=>{Re.stopPropagation(),Ue(G.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),O===si("desktop",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Re=>Re.stopPropagation(),onClick:Re=>Re.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{J(null),ua(G.trade_no,1)},children:[t.jsx(So,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{J(null),ua(G.trade_no,3)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Ch(G.created_at)})})]},G.trade_no)}),!I&&x.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),_t>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:V<=1,onClick:()=>bt(V-1),children:t.jsx(xn,{size:16})}),t.jsxs("span",{className:"page-info",children:[V," / ",_t]}),t.jsx("button",{className:"mini-button",disabled:V>=_t,onClick:()=>bt(V+1),children:t.jsx(gn,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[x.map(G=>{var Ge;const we=d(G.status),je=G.invite_user_id!==null,Ce=Be[G.invite_user_id!==null?G.commission_status:0]??{label:`#${G.commission_status}`,dotClass:"pending"},Je=(Ge=ue[G.user_id])==null?void 0:Ge.email,Qe=pt(G);return t.jsxs("div",{className:"mobile-order-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>mt(G),children:Th(G.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",G.id]})]}),t.jsxs("div",{className:"mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${we.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:we.label}),G.status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Re=>{Re.stopPropagation(),Se(G.trade_no,"mobile")},children:t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})})]}),E===si("mobile",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Re=>Re.stopPropagation(),onClick:Re=>Re.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{oe(null),ta(G.trade_no)},children:[t.jsx(So,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{oe(null),Gt(G.trade_no)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:Je?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Ht(G.user_id),children:Je}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",G.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:Sh[G.type]??`#${G.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:G.plan_name??`Plan #${G.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:p(G.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Ha(G.total_amount)})]}),Qe?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:Qe})})]}):null,Number(G.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Ha(G.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:je?t.jsx("strong",{children:Ha(G.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),je&&t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsxs("div",{className:"value mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ce.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:Ce.label}),G.commission_status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Re=>{Re.stopPropagation(),Ue(G.trade_no,"mobile")},children:t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})})]}),O===si("mobile",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Re=>Re.stopPropagation(),onClick:Re=>Re.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{J(null),ua(G.trade_no,1)},children:[t.jsx(So,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{J(null),ua(G.trade_no,3)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Ch(G.created_at)})]})]})]},G.trade_no)}),!I&&x.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,_t>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:V<=1,onClick:()=>bt(V-1),children:t.jsx(xn,{size:16})}),t.jsxs("span",{className:"page-info",children:[V," / ",_t]}),t.jsx("button",{className:"mini-button",disabled:V>=_t,onClick:()=>bt(V+1),children:t.jsx(gn,{size:16})})]}):null]})]}),R?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(it,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:X?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(xt,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(z=ue[R.user_id])!=null&&z.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{S(null),Ht(R.user_id)},title:"Filter by this user",children:ue[R.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",R.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:R.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:p(R.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(R.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:R.plan_name??`Plan #${R.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:R.callback_no||"-"})]}),pa?t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:pa})]}):null]}),R.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(be=ue[R.invite_user_id])!=null&&be.email||(Le=ue[R.user_id])!=null&&Le.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const G=String(R.invite_user_id);D("invite_user_id"),B(G),W(!0),S(null),We(1,G,"invite_user_id")},title:"Filter by this inviter",children:((ye=ue[R.invite_user_id])==null?void 0:ye.email)||((st=ue[R.user_id])==null?void 0:st.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",R.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Ha(R.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(Be[R.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(Be[R.commission_status]??{label:`#${R.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Ha(R.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Ha(R.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Ha(R.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Ha(R.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Ha(R.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:zh(R.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:zh(R.updated_at)})]})]})]})})]})}):null,re?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>T(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ft,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:re.email,onChange:G=>T({...re,email:G.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:re.plan_id,onChange:G=>T({...re,plan_id:G.target.value}),children:y.map(G=>t.jsx("option",{value:G.id,children:G.name},G.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:re.period,onChange:G=>T({...re,period:G.target.value}),children:Object.entries(kh).map(([G,we])=>t.jsx("option",{value:G,children:we},G))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:re.total_amount,onChange:G=>T({...re,total_amount:G.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>T(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:Y,children:[t.jsx(ka,{size:16}),o(Y?"order.assigning":"order.assign")]})]})]})]})}):null]})}function zo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function To(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function ud(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function kj(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState([]),[p,x]=m.useState(0),[f,y]=m.useState(1),[_,v]=m.useState([]),[j,b]=m.useState(null),[q,V]=m.useState(!0),[ee,Z]=m.useState(!1),[C,B]=m.useState(""),[A,D]=m.useState(""),[I,ie]=m.useState("");m.useEffect(()=>{j||ie("")},[j]);const re=m.useCallback(async(w=1)=>{V(!0),B("");try{const U=await hx(w,15);d(U.data),x(U.total)}catch(U){B(U instanceof Error?U.message:i("coupon.loadFailed"))}finally{V(!1)}},[]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}re(1),vl().then(v).catch(()=>{})},[re,s]);async function T(w){var U,te;if(w.preventDefault(),!!j){Z(!0),B(""),D("");try{const E=j.type==="1"?Math.round(Number(j.value)*100):Number(j.value);await v1({id:j.id,name:j.name,type:Number(j.type),value:E,code:j.code||void 0,started_at:Math.floor(new Date(j.started_at).getTime()/1e3),ended_at:Math.floor(new Date(j.ended_at).getTime()/1e3),limit_use:j.limit_use?Number(j.limit_use):null,limit_use_with_user:j.limit_use_with_user?Number(j.limit_use_with_user):null,limit_plan_ids:j.limit_plan_ids.length?j.limit_plan_ids:null,limit_period:j.limit_period.length?j.limit_period:null,generate_count:j.generate_count?Number(j.generate_count):void 0}),b(null),(U=window.showToast)==null||U.call(window,i("coupon.saveSuccess"),"success"),await re(f)}catch(E){(te=window.showToast)==null||te.call(window,E instanceof Error?E.message:i("coupon.saveFailed"),"error")}finally{Z(!1)}}}async function Y(w){var U;try{await w1(w),await re(f)}catch(te){(U=window.showToast)==null||U.call(window,te instanceof Error?te.message:i("coupon.toggleFailed"),"error")}}async function ne(w){var U;(U=window.showConfirm)==null||U.call(window,{message:i("coupon.deleteConfirm"),onConfirm:async()=>{var te,E;try{await j1(w),(te=window.showToast)==null||te.call(window,i("coupon.deleteSuccess"),"success"),await re(f)}catch(oe){(E=window.showToast)==null||E.call(window,oe instanceof Error?oe.message:i("coupon.deleteFailed"),"error")}}})}const fe=Math.ceil(p/15);return t.jsxs(Bt,{title:i("coupon.title"),subtitle:i("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("coupon.heading")}),t.jsxs("p",{children:[p," ",i("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void re(f),disabled:q,children:[t.jsx(Nt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>b(ud()),children:[t.jsx(Sa,{size:16}),i("coupon.add")]})]})]}),C?t.jsx("div",{className:"form-error",children:C}):null,A?t.jsx("div",{className:"form-success",children:A}):null,q&&o.length===0?t.jsx(xt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("coupon.name")}),t.jsx("th",{children:i("coupon.code")}),t.jsx("th",{children:i("coupon.type")}),t.jsx("th",{children:i("coupon.value")}),t.jsx("th",{children:i("coupon.usageLimit")}),t.jsx("th",{children:i("coupon.limitPlans")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("coupon.limitPeriods")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(w=>{var oe,O;const U=(oe=w.limit_plan_ids)==null?void 0:oe.map(J=>{var h;return((h=_.find(W=>W.id===J))==null?void 0:h.name)||`#${J}`}).join(", "),te=To(i),E=(O=w.limit_period)==null?void 0:O.map(J=>te[J]||J).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:w.id}),t.jsx("td",{children:t.jsx("strong",{children:w.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:w.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:w.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:w.type===1?_a(w.value):`${w.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[i("coupon.maxUses"),": ",w.limit_use??"∞"]}),w.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[i("coupon.maxUses")," ",w.limit_use_with_user,"/",i("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[U?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[i("coupon.plans"),": ",U]})}):null,E?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[i("coupon.cycles"),": ",E]})}):null,!U&&!E?t.jsx("span",{className:"tag muted-tag",children:i("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${w.show?"active":""}`,type:"button",onClick:()=>void Y(w.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[zo(w.started_at)," — ",zo(w.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>b(ud(w)),children:[t.jsx(Rt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(w.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},w.id)}),!q&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(w=>{var U,te,E,oe;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",w.id]}),t.jsx("span",{className:`tag type-tag ${w.type===1?"fixed-type":"percent-type"}`,children:w.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:w.name,children:w.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:i("coupon.clickToCopy"),onClick:()=>{Zn(w.code).then(O=>{var J;(J=window.showToast)==null||J.call(window,O?`${i("coupon.copiedCode")}: ${w.code}`:i("common.copyFailed"),O?"success":"error")})},children:[t.jsx("code",{className:"mono",children:w.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(U=w.limit_plan_ids)!=null&&U.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:w.limit_plan_ids.map(O=>{const J=_.find(h=>h.id===O);return t.jsx("span",{className:"res-pill plan-pill",children:J?J.name:`#${O}`},O)})})]}):null,(te=w.limit_period)!=null&&te.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:w.limit_period.map(O=>t.jsx("span",{className:"res-pill cycle-pill",children:To(i)[O]||O},O))})]}):null,!((E=w.limit_plan_ids)!=null&&E.length)&&!((oe=w.limit_period)!=null&&oe.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[zo(w.started_at)," — ",zo(w.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:i("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${w.show?"active":""}`,type:"button",onClick:()=>void Y(w.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:w.type===1?_a(w.value).replace(/\s?₫/,""):`${w.value}`}),t.jsx("span",{className:"ticket-value-unit",children:w.type===1?"₫":i("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:w.limit_use??"∞"}),w.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[i("coupon.maxUses")," ",w.limit_use_with_user,"/",i("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>b(ud(w)),"aria-label":i("common.edit"),children:t.jsx(Rt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(w.id),"aria-label":i("common.delete"),children:t.jsx(qt,{size:15})})]})]})]},w.id)}),!q&&o.length===0?t.jsx("div",{className:"empty-state",children:i("coupon.empty")}):null]}),fe>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:f<=1,onClick:()=>{y(f-1),re(f-1)},children:t.jsx(xn,{size:16})}),t.jsxs("span",{className:"page-info",children:[f," / ",fe]}),t.jsx("button",{className:"mini-button",disabled:f>=fe,onClick:()=>{y(f+1),re(f+1)},children:t.jsx(gn,{size:16})})]}):null,j?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:j.id?i("coupon.edit"):i("coupon.add")}),t.jsx("p",{children:i("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>b(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:T,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:j.name,onChange:w=>b({...j,name:w.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.type")}),t.jsxs("select",{className:"config-input",value:j.type,onChange:w=>b({...j,type:w.target.value}),children:[t.jsx("option",{value:"1",children:i("coupon.type.fixed")}),t.jsx("option",{value:"2",children:i("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:j.value,onChange:w=>b({...j,value:w.target.value})})]})]}),j.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[i("coupon.code")," (",i("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:j.code,onChange:w=>b({...j,code:w.target.value}),placeholder:i("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.started_at,onChange:w=>b({...j,started_at:w.target.value}),onClick:w=>{var U,te;return(te=(U=w.currentTarget).showPicker)==null?void 0:te.call(U)},onFocus:w=>{var U,te;return(te=(U=w.currentTarget).showPicker)==null?void 0:te.call(U)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.ended_at,onChange:w=>b({...j,ended_at:w.target.value}),onClick:w=>{var U,te;return(te=(U=w.currentTarget).showPicker)==null?void 0:te.call(U)},onFocus:w=>{var U,te;return(te=(U=w.currentTarget).showPicker)==null?void 0:te.call(U)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use,onChange:w=>b({...j,limit_use:w.target.value}),placeholder:i("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use_with_user,onChange:w=>b({...j,limit_use_with_user:w.target.value}),placeholder:i("coupon.unlimited")})]})]}),j.id?null:t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.generate_count,onChange:w=>b({...j,generate_count:w.target.value}),placeholder:i("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPlans")}),j.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:j.limit_plan_ids.map(w=>{const U=_.find(te=>te.id===w);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const te=j.limit_plan_ids.filter(E=>E!==w);b({...j,limit_plan_ids:te})},children:[U?U.name:`#${w}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},w)})}),_.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("coupon.searchPlans"),value:I,onChange:w=>ie(w.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[_.filter(w=>w.name.toLowerCase().includes(I.toLowerCase())).map(w=>{const U=j.limit_plan_ids.includes(w.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:U,onChange:te=>{const E=te.target.checked?[...j.limit_plan_ids,w.id]:j.limit_plan_ids.filter(oe=>oe!==w.id);b({...j,limit_plan_ids:E})}}),t.jsx("span",{children:w.name})]},w.id)}),_.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPeriods")}),j.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:j.limit_period.map(w=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const U=j.limit_period.filter(te=>te!==w);b({...j,limit_period:U})},children:[To(i)[w]||w," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},w))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(To(i)).map(([w,U])=>{const te=j.limit_period.includes(w);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:te,onChange:E=>{const oe=E.target.checked?[...j.limit_period,w]:j.limit_period.filter(O=>O!==w);b({...j,limit_period:oe})}}),t.jsx("span",{children:U})]},w)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>b(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:ee,children:[t.jsx(ka,{size:16}),i(ee?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Eo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Cj(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function pd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function zj(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState([]),[p,x]=m.useState(0),[f,y]=m.useState(1),[_,v]=m.useState([]),[j,b]=m.useState(null),[q,V]=m.useState(!0),[ee,Z]=m.useState(!1),[C,B]=m.useState(""),[A,D]=m.useState(""),[I,ie]=m.useState("");m.useEffect(()=>{j||ie("")},[j]);const re=Cj(i),T=m.useCallback(async(w=1)=>{V(!0),B("");try{const U=await N1(w,15);d(U.data),x(U.total)}catch(U){B(U instanceof Error?U.message:i("giftcard.loadFailed"))}finally{V(!1)}},[i]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}T(1),vl().then(v).catch(()=>{})},[T,s]);async function Y(w){var U,te;if(w.preventDefault(),!!j){Z(!0),B(""),D("");try{const E=j.type==="1"?Math.round(Number(j.value)*100):Number(j.value);await _1({id:j.id,name:j.name,type:Number(j.type),value:E,code:j.code||void 0,started_at:Math.floor(new Date(j.started_at).getTime()/1e3),ended_at:Math.floor(new Date(j.ended_at).getTime()/1e3),limit_use:j.limit_use?Number(j.limit_use):null,plan_id:j.plan_id?Number(j.plan_id):null,generate_count:j.generate_count?Number(j.generate_count):void 0}),b(null),(U=window.showToast)==null||U.call(window,i("giftcard.saveSuccess"),"success"),await T(f)}catch(E){(te=window.showToast)==null||te.call(window,E instanceof Error?E.message:i("giftcard.saveFailed"),"error")}finally{Z(!1)}}}async function ne(w){var U;(U=window.showConfirm)==null||U.call(window,{message:i("giftcard.deleteConfirm"),onConfirm:async()=>{var te,E;try{await S1(w),(te=window.showToast)==null||te.call(window,i("giftcard.deleteSuccess"),"success"),await T(f)}catch(oe){(E=window.showToast)==null||E.call(window,oe instanceof Error?oe.message:i("giftcard.deleteFailed"),"error")}}})}const fe=Math.ceil(p/15);return t.jsxs(Bt,{title:i("giftcard.title"),subtitle:i("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("giftcard.heading")}),t.jsxs("p",{children:[p," ",i("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void T(f),disabled:q,children:[t.jsx(Nt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>b(pd()),children:[t.jsx(Sa,{size:16}),i("giftcard.add")]})]})]}),C?t.jsx("div",{className:"form-error",children:C}):null,A?t.jsx("div",{className:"form-success",children:A}):null,q&&o.length===0?t.jsx(xt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("giftcard.thId")}),t.jsx("th",{children:i("giftcard.thName")}),t.jsx("th",{children:i("giftcard.thCode")}),t.jsx("th",{children:i("giftcard.thType")}),t.jsx("th",{children:i("giftcard.thValue")}),t.jsx("th",{children:i("giftcard.thBoundPlan")}),t.jsx("th",{children:i("giftcard.thUses")}),t.jsx("th",{children:i("giftcard.thPeriod")}),t.jsx("th",{children:i("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(w=>{var U;return t.jsxs("tr",{children:[t.jsx("td",{children:w.id}),t.jsx("td",{children:t.jsx("strong",{children:w.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:w.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:re[w.type]??w.type})}),t.jsx("td",{children:t.jsx("strong",{children:w.type===1?_a(w.value):w.value})}),t.jsx("td",{children:w.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((U=_.find(te=>te.id===w.plan_id))==null?void 0:U.name)||`#${w.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:i("giftcard.planNone")})}),t.jsx("td",{children:w.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Eo(w.started_at)," — ",Eo(w.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>b(pd(w)),children:[t.jsx(Rt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(w.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},w.id)}),!q&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(w=>{var U;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",w.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:re[w.type]??w.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:w.name,children:w.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:i("giftcard.clickToCopy"),onClick:()=>{Zn(w.code).then(te=>{var E;(E=window.showToast)==null||E.call(window,te?i("giftcard.copiedCode").replace("{code}",w.code):i("common.copyFailed"),te?"success":"error")})},children:[t.jsx("code",{className:"mono",children:w.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:w.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((U=_.find(te=>te.id===w.plan_id))==null?void 0:U.name)||`#${w.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Eo(w.started_at)," — ",Eo(w.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:w.type===1?_a(w.value).replace(/\s?₫/,""):`${w.value}`}),t.jsx("span",{className:"ticket-value-unit",children:w.type===1?"₫":re[w.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:w.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>b(pd(w)),"aria-label":i("common.edit"),children:t.jsx(Rt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(w.id),"aria-label":i("common.delete"),children:t.jsx(qt,{size:15})})]})]})]},w.id)}),!q&&o.length===0?t.jsx("div",{className:"empty-state",children:i("giftcard.empty")}):null]}),fe>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:f<=1,onClick:()=>{y(f-1),T(f-1)},children:t.jsx(xn,{size:16})}),t.jsxs("span",{className:"page-info",children:[f," / ",fe]}),t.jsx("button",{className:"mini-button",disabled:f>=fe,onClick:()=>{y(f+1),T(f+1)},children:t.jsx(gn,{size:16})})]}):null,j?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:j.id?i("giftcard.edit"):i("giftcard.create")}),t.jsx("p",{children:i("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>b(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Y,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:j.name,onChange:w=>b({...j,name:w.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:j.type,onChange:w=>b({...j,type:w.target.value}),children:Object.entries(re).map(([w,U])=>t.jsx("option",{value:w,children:U},w))})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:j.value,onChange:w=>b({...j,value:w.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.started_at,onChange:w=>b({...j,started_at:w.target.value}),onClick:w=>{var U,te;return(te=(U=w.currentTarget).showPicker)==null?void 0:te.call(U)},onFocus:w=>{var U,te;return(te=(U=w.currentTarget).showPicker)==null?void 0:te.call(U)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.ended_at,onChange:w=>b({...j,ended_at:w.target.value}),onClick:w=>{var U,te;return(te=(U=w.currentTarget).showPicker)==null?void 0:te.call(U)},onFocus:w=>{var U,te;return(te=(U=w.currentTarget).showPicker)==null?void 0:te.call(U)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use,onChange:w=>b({...j,limit_use:w.target.value}),placeholder:i("giftcard.placeholderUnlimited")})]}),j.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.generate_count,onChange:w=>b({...j,generate_count:w.target.value}),placeholder:i("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("giftcard.bindPlan")}),j.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const w=_.find(U=>String(U.id)===j.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{b({...j,plan_id:""})},children:[w?w.name:`#${j.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),_.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("giftcard.searchPlans"),value:I,onChange:w=>ie(w.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!j.plan_id,onChange:()=>{b({...j,plan_id:""})}}),t.jsx("span",{children:i("giftcard.noneAllPlans")})]}),_.filter(w=>w.name.toLowerCase().includes(I.toLowerCase())).map(w=>{const U=String(w.id)===j.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:U,onChange:te=>{te.target.checked&&b({...j,plan_id:String(w.id)})}}),t.jsx("span",{children:w.name})]},w.id)}),_.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>b(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:ee,children:[t.jsx(ka,{size:16}),i(ee?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const es="Tương đối",fn="=";function Mo(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Tj(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Eh(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function md(s){return+(s/1073741824).toFixed(2)}function fd(s){return Math.round(s*1073741824)}function Do(s){return(s/1073741824).toFixed(2)}function Ej(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function oi(s){if(s===0)return"0.00 MB";const i=s/1073741824;return i<.1?`${(s/1048576).toFixed(2)} MB`:`${i.toFixed(2)} GB`}const Md=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Tx="user_visible_columns";function Mj(){if(typeof window<"u")try{const s=localStorage.getItem(Tx);if(s)return new Set(JSON.parse(s))}catch{}return new Set(Md.filter(s=>s.defaultVisible).map(s=>s.key))}const qo=[{value:"email",label:"Email",condition:es,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:fn,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:fn,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:fn,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:fn,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:es,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:fn,placeholder:"12345"},{value:"uuid",label:"UUID",condition:es,placeholder:"UUID"},{value:"token",label:"Token",condition:es,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:es,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:fn,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:fn,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:fn,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:fn,placeholder:"1780366403"}],Dj=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Jt(s,i){switch(s){case"id":return i("user.colId");case"email":return i("user.colEmail");case"status":return i("user.colStatus");case"plan":return i("user.colPlan");case"group":return i("user.colGroup");case"used":return i("user.colUsed");case"traffic":return i("user.colTraffic");case"devices":return i("user.colDevices");case"expires":return i("user.colExpires");case"balance":return i("user.colBalance");case"commission":return i("user.colCommission");case"joined":return i("user.colJoined");case"actions":return i("user.colActions");default:return""}}function Oj(s,i){var p;const o=((p=qo.find(x=>x.value===s))==null?void 0:p.label)??s,d=x=>{const f=i(x);return f===x?o:f};switch(s){case"email":return i("user.filterEmail");case"id":return i("user.filterId");case"plan_id":return i("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return i("user.filterInviterEmail");case"invite_user_id":return i("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return i("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function hd(s){return qo.find(i=>i.value===s)??qo[0]}function Aj(s,i){switch(s){case"month_price":return i("order.period.month_price");case"quarter_price":return i("order.period.quarter_price");case"half_year_price":return i("order.period.half_year_price");case"year_price":return i("order.period.year_price");case"two_year_price":return i("order.period.two_year_price");case"three_year_price":return i("order.period.three_year_price");case"onetime_price":return i("order.period.onetime_price");case"reset_price":return i("order.period.reset_price");default:return""}}function Uj(){const s=zt(),i=Ka(),{t:o}=Ve(),[d,p]=m.useState([]),[x,f]=m.useState([]),[y,_]=m.useState([]),[v,j]=m.useState(0),[b,q]=m.useState(1),[V,ee]=m.useState(""),[Z,C]=m.useState("email"),[B,A]=m.useState(!0),[D,I]=m.useState(""),[ie,re]=m.useState(Mj),[T,Y]=m.useState(!1),ne=m.useRef(null),[fe,w]=m.useState(null),[U,te]=m.useState(null),[E,oe]=m.useState({}),[O,J]=m.useState(!1),[h,W]=m.useState(!1),[R,S]=m.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[X,de]=m.useState(!1),[ue,_e]=m.useState(null),[Se,Ue]=m.useState({plan_id:"",period:"month_price",total_amount:""}),[pt,Be]=m.useState(!1),[We,Ht]=m.useState(null),[Et,da]=m.useState(null),[bt,ta]=m.useState([]),[Gt,ua]=m.useState(0),[mt,Vt]=m.useState(1),[Ft]=m.useState(10),[_t,pa]=m.useState(!1),[z,be]=m.useState("");m.useEffect(()=>{function N(he){const xe=he.target instanceof Element?he.target:null;fe!==null&&(!xe||!xe.closest(".action-dropdown-wrap, .mobile-action-sheet"))&&w(null),T&&ne.current&&!ne.current.contains(he.target)&&Y(!1)}return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[fe,T]);function Le(N){re(he=>{const xe=new Set(he);xe.has(N)?xe.delete(N):xe.add(N);try{localStorage.setItem(Tx,JSON.stringify([...xe]))}catch{}return xe})}const ye=N=>ie.has(N),st=Md.filter(N=>ie.has(N.key)).length,G=m.useCallback(async(N=1,he,xe)=>{A(!0),I("");try{const Oe=he==null?void 0:he.trim(),Mt=hd(xe||"email"),ha=Oe?[{key:Mt.value,condition:Mt.condition,value:Oe}]:void 0,yt=await zd(N,15,ha);p(yt.data),j(yt.total)}catch(Oe){I(Oe instanceof Error?Oe.message:o("user.loadFailed"))}finally{A(!1)}},[]),we=m.useCallback(async()=>{try{const[N,he]=await Promise.all([vl(),ds()]);f(N),_(he)}catch{}},[]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}const N=new URLSearchParams(i.search),xe=[["email",N.get("email")||N.get("filter_email")],["id",N.get("id")||N.get("user_id")||N.get("filter_user_id")],["plan_id",N.get("plan_id")],["invite_user_id",N.get("invite_user_id")],["invite_by_email",N.get("invite_by_email")],["uuid",N.get("uuid")],["token",N.get("token")],["remarks",N.get("remarks")]].find(([,Oe])=>Oe==null?void 0:Oe.trim());if(xe){const[Oe,Mt]=xe,ha=hd(Oe),yt=(Mt==null?void 0:Mt.trim())??"";C(ha.value),ee(yt),q(1),G(1,yt,ha.value)}else G(1);we()},[G,we,s,i.search]);function je(){q(1),G(1,V,Z)}function Ce(){ee(""),q(1),G(1)}function Je(N){q(N),G(N,V,Z)}function Qe(N){if(N.plan_name)return N.plan_name;if(!N.plan_id)return"—";const he=x.find(xe=>xe.id===N.plan_id);return he?he.name:`#${N.plan_id}`}function Ge(N){if(!N.group_id)return"—";const he=y.find(xe=>xe.id===N.group_id);return he?he.name:`#${N.group_id}`}function Re(N){return`${N.alive_ip??0} / ${N.device_limit??"∞"}`}async function ot(N){var Oe,Mt;const he=N.subscribe_url;if(!he){(Oe=window.showToast)==null||Oe.call(window,o("user.toastNoSubscribeUrl"),"error");return}const xe=await Zn(he);(Mt=window.showToast)==null||Mt.call(window,o(xe?"user.toastUrlCopied":"common.copyFailed"),xe?"success":"error"),w(null)}function jl(N){var he;w(null),(he=window.showConfirm)==null||he.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var xe,Oe;try{await T1(N.id),(xe=window.showToast)==null||xe.call(window,o("user.toastSecretResetSuccess"),"success"),await G(b,V,Z)}catch(Mt){(Oe=window.showToast)==null||Oe.call(window,Mt instanceof Error?Mt.message:o("user.toastSecretResetFailed"),"error")}}})}function Fn(N){var he;w(null),(he=window.showConfirm)==null||he.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var xe,Oe;try{await C1(N.id),(xe=window.showToast)==null||xe.call(window,o("user.toastDeletedSuccess"),"success"),await G(b,V,Z)}catch(Mt){(Oe=window.showToast)==null||Oe.call(window,Mt instanceof Error?Mt.message:o("user.toastDeletedFailed"),"error")}}})}function Wn(N){var xe;w(null);const he=N.subscribe_url;if(!he){(xe=window.showToast)==null||xe.call(window,o("user.toastNoSubscribeUrl"),"error");return}Ht({url:he,userId:N.id})}function Ga(N){w(null),s.push(`/order?user_id=${N.id}`)}function ma(N){w(null),s.push(`/subscription?user_id=${N.id}`)}function Ya(N){w(null),C("invite_user_id"),ee(String(N.id)),G(1,String(N.id),"invite_user_id")}async function It(N,he){pa(!0),be("");try{const xe=await U1(N,he,Ft);ta(xe.data||[]),ua(xe.total||0),Vt(he)}catch(xe){be(xe instanceof Error?xe.message:o("user.historyLoading"))}finally{pa(!1)}}function H(N){w(null),da(N),It(N.id,1)}function ce(N){w(null),_e(N.email),Ue({plan_id:"",period:"month_price",total_amount:""})}async function se(N){var he,xe;if(N.preventDefault(),!!ue){Be(!0);try{await fx({email:ue,plan_id:Number(Se.plan_id),period:Se.period,total_amount:(Number(Se.total_amount)||0)*100}),(he=window.showToast)==null||he.call(window,o("user.toastAssignSuccess"),"success"),_e(null)}catch(Oe){(xe=window.showToast)==null||xe.call(window,Oe instanceof Error?Oe.message:o("user.toastAssignFailed"),"error")}finally{Be(!1)}}}function De(N){w(null),te(N),oe({id:N.id,email:N.email,invite_user_email:"",password:"",balance:N.balance,commission_balance:N.commission_balance,u:md(N.u),d:md(N.d),transfer_enable:md(N.transfer_enable),device_limit:N.device_limit,network_settings:N.network_settings??"",expired_at:Tj(N.expired_at),plan_id:N.plan_id,banned:N.banned,commission_type:N.commission_type??0,commission_rate:N.commission_rate??"",discount:N.discount??"",speed_limit:N.speed_limit,is_admin:N.is_admin,is_staff:N.is_staff,remarks:N.remarks??""})}function ze(N,he){oe(xe=>({...xe,[N]:he}))}async function Fe(N){var he,xe;if(N.preventDefault(),!!U){J(!0);try{const Oe={id:U.id,email:E.email,plan_id:E.plan_id||null,expired_at:Eh(String(E.expired_at??"")),transfer_enable:fd(Number(E.transfer_enable??0)),speed_limit:E.speed_limit||null,device_limit:E.device_limit||null,u:fd(Number(E.u??0)),d:fd(Number(E.d??0)),balance:Number(E.balance??0),commission_balance:Number(E.commission_balance??0),commission_rate:E.commission_rate!==""&&E.commission_rate!==null?Number(E.commission_rate):null,commission_type:Number(E.commission_type??0),discount:E.discount!==""&&E.discount!==null?Number(E.discount):null,network_settings:E.network_settings||null,remarks:E.remarks||null,is_admin:Number(E.is_admin??0),is_staff:Number(E.is_staff??0),banned:Number(E.banned??0)};E.invite_user_email&&(Oe.invite_user_email=E.invite_user_email),E.password&&(Oe.password=E.password),await k1(Oe),(he=window.showToast)==null||he.call(window,o("user.toastSaveSuccess"),"success"),te(null),await G(b,V,Z)}catch(Oe){(xe=window.showToast)==null||xe.call(window,Oe instanceof Error?Oe.message:o("user.toastSaveFailed"),"error")}finally{J(!1)}}}async function at(N){var he,xe;N.preventDefault(),de(!0);try{await z1({email_prefix:R.email_prefix,email_suffix:R.email_suffix,password:R.password||void 0,plan_id:R.plan_id?Number(R.plan_id):void 0,expired_at:Eh(R.expired_at)}),(he=window.showToast)==null||he.call(window,o("user.toastCreateSuccess"),"success"),W(!1),S({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await G(b,V,Z)}catch(Oe){(xe=window.showToast)==null||xe.call(window,Oe instanceof Error?Oe.message:o("user.toastCreateFailed"),"error")}finally{de(!1)}}const Ee=Math.ceil(v/15),fa=hd(Z);return t.jsxs(Bt,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[v," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:ne,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>Y(!T),children:[t.jsx(mv,{size:16}),o("user.columns")]}),T?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:st})})}),Md.map(N=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:ie.has(N.key),onChange:()=>Le(N.key)}),t.jsx("span",{children:Jt(N.key,o)})]},N.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void G(b,V,Z),disabled:B,children:[t.jsx(Nt,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>W(!0),children:[t.jsx(Sa,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:Z,onChange:N=>C(N.target.value),children:qo.map(N=>t.jsx("option",{value:N.value,children:Oj(N.value,o)},N.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Yo,{size:16}),t.jsx("input",{className:"config-input search-input",value:V,onChange:N=>ee(N.target.value),placeholder:fa.placeholder,onKeyDown:N=>N.key==="Enter"&&je()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:je,children:[t.jsx(rs,{size:16}),o("user.filter")]}),V?t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ce,children:[t.jsx(it,{size:16}),o("user.clearFilter")]}):null]}),D?t.jsx("div",{className:"form-error",children:D}):null,B&&d.length===0?t.jsx(xt,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${B?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(N=>{const he=Do(N.u+N.d),xe=Do(N.transfer_enable),Oe=parseFloat(he);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",N.id]}),t.jsx("span",{className:"user-email",title:N.email,children:N.email})]}),N.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Qe(N)," / ",N.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):Ge(N)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Oe>0?Oe>parseFloat(xe)*.9?"high":"ok":""}`,children:[he," GB"]})," / ",xe," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Jt("devices",o)}),t.jsx("span",{className:"info-val",children:Re(N)})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Jt("expires",o)}),t.jsx("span",{className:"info-val",children:N.expired_at?t.jsx("span",{className:`expiry-date ${N.expired_at<Date.now()/1e3?"expired":""}`,children:Mo(N.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(N.balance/100).toFixed(2)," ₫ / ",(N.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Jt("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:Mo(N.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${fe===N.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>w(fe===N.id?null:N.id),children:[o("user.colActions")," ",t.jsx(gl,{size:14})]}),fe===N.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>w(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:Mt=>Mt.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:N.email}),t.jsxs("small",{children:["#",N.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:t.jsx(it,{size:16})})]}),t.jsxs("div",{className:"action-dropdown-menu mobile-action-menu",children:[t.jsxs("button",{type:"button",onClick:()=>De(N),children:[t.jsx(Rt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>ce(N),children:[t.jsx(oh,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void ot(N),children:[t.jsx(Na,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>Wn(N),children:[t.jsx(ih,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>jl(N),children:[t.jsx(Ho,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ga(N),children:[t.jsx(nh,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>ma(N),children:[t.jsx(_d,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Ya(N),children:[t.jsx(cs,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>H(N),children:[t.jsx(id,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Fn(N),children:[t.jsx(qt,{size:14}),o("user.actionDelete")]})]})]})}):null]})})]},N.id)}),!B&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[ye("id")&&t.jsx("th",{children:Jt("id",o)}),ye("email")&&t.jsx("th",{children:Jt("email",o)}),ye("status")&&t.jsx("th",{children:Jt("status",o)}),ye("plan")&&t.jsx("th",{children:Jt("plan",o)}),ye("group")&&t.jsx("th",{children:Jt("group",o)}),ye("used")&&t.jsx("th",{children:Jt("used",o)}),ye("traffic")&&t.jsx("th",{children:Jt("traffic",o)}),ye("devices")&&t.jsx("th",{children:Jt("devices",o)}),ye("expires")&&t.jsx("th",{children:Jt("expires",o)}),ye("balance")&&t.jsx("th",{children:Jt("balance",o)}),ye("commission")&&t.jsx("th",{children:Jt("commission",o)}),ye("joined")&&t.jsx("th",{children:Jt("joined",o)}),ye("actions")&&t.jsx("th",{children:Jt("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(N=>{const he=Do(N.u+N.d),xe=Do(N.transfer_enable),Oe=parseFloat(he);return t.jsxs("tr",{children:[ye("id")&&t.jsx("td",{children:N.id}),ye("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:N.email})}),ye("status")&&t.jsx("td",{children:N.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),ye("plan")&&t.jsx("td",{children:Qe(N)}),ye("group")&&t.jsx("td",{children:N.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):Ge(N)}),ye("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Oe>0?Oe>parseFloat(xe)*.9?"high":"ok":""}`,children:he})}),ye("traffic")&&t.jsx("td",{children:xe}),ye("devices")&&t.jsx("td",{children:Re(N)}),ye("expires")&&t.jsx("td",{children:N.expired_at?t.jsx("span",{className:`expiry-date ${N.expired_at<Date.now()/1e3?"expired":""}`,children:Mo(N.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),ye("balance")&&t.jsx("td",{children:(N.balance/100).toFixed(2)}),ye("commission")&&t.jsx("td",{children:(N.commission_balance/100).toFixed(2)}),ye("joined")&&t.jsx("td",{children:t.jsx("small",{children:Mo(N.created_at)})}),ye("actions")&&t.jsx("td",{children:t.jsxs("div",{className:`action-dropdown-wrap ${fe===N.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>w(fe===N.id?null:N.id),children:[o("user.colActions")," ",t.jsx(gl,{size:14})]}),fe===N.id?t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",onClick:()=>De(N),children:[t.jsx(Rt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>ce(N),children:[t.jsx(oh,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void ot(N),children:[t.jsx(Na,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>Wn(N),children:[t.jsx(ih,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>jl(N),children:[t.jsx(Ho,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ga(N),children:[t.jsx(nh,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>ma(N),children:[t.jsx(_d,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Ya(N),children:[t.jsx(cs,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>H(N),children:[t.jsx(id,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Fn(N),children:[t.jsx(qt,{size:14}),o("user.actionDelete")]})]}):null]})})]},N.id)}),!B&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:st,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),Ee>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:b<=1,onClick:()=>Je(b-1),children:t.jsx(xn,{size:16})}),Array.from({length:Math.min(5,Ee)},(N,he)=>{let xe;return Ee<=5||b<=3?xe=he+1:b>=Ee-2?xe=Ee-4+he:xe=b-2+he,t.jsx("button",{className:`mini-button ${xe===b?"active-page":""}`,onClick:()=>Je(xe),children:xe},xe)}),Ee>5?t.jsxs("span",{className:"page-info",children:["… ",Ee]}):null,t.jsx("button",{className:"mini-button",disabled:b>=Ee,onClick:()=>Je(b+1),children:t.jsx(gn,{size:16})})]})}):null]}),U?t.jsx("div",{className:"modal-backdrop",onClick:()=>te(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>te(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:Fe,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(E.email??""),onChange:N=>ze("email",N.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(E.invite_user_email??""),onChange:N=>ze("invite_user_email",N.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(E.password??""),onChange:N=>ze("password",N.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(E.balance??0)/100).toFixed(2)),onChange:N=>ze("balance",Math.round(Number(N.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(E.commission_balance??0)/100).toFixed(2)),onChange:N=>ze("commission_balance",Math.round(Number(N.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(E.u??0),onChange:N=>ze("u",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(E.d??0),onChange:N=>ze("d",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(E.transfer_enable??0),onChange:N=>ze("transfer_enable",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(E.device_limit??""),onChange:N=>ze("device_limit",N.target.value?Number(N.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.sniUserLabel"),t.jsx("input",{className:"config-input",value:String(E.network_settings??""),onChange:N=>ze("network_settings",N.target.value),placeholder:o("user.sniUserPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(E.expired_at??""),onChange:N=>ze("expired_at",N.target.value),onClick:N=>{var he,xe;return(xe=(he=N.currentTarget).showPicker)==null?void 0:xe.call(he)},onFocus:N=>{var he,xe;return(xe=(he=N.currentTarget).showPicker)==null?void 0:xe.call(he)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(E.plan_id??""),onChange:N=>ze("plan_id",N.target.value?Number(N.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),x.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(E.banned??0),onChange:N=>ze("banned",Number(N.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(E.commission_type??0),onChange:N=>ze("commission_type",Number(N.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(E.commission_rate??""),onChange:N=>ze("commission_rate",N.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(E.discount??""),onChange:N=>ze("discount",N.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(E.speed_limit??""),onChange:N=>ze("speed_limit",N.target.value?Number(N.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${E.is_admin?"active":""}`,onClick:()=>ze("is_admin",E.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${E.is_staff?"active":""}`,onClick:()=>ze("is_staff",E.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(E.remarks??""),onChange:N=>ze("remarks",N.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>te(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:O,children:o(O?"common.processing":"common.save")})]})]})]})}):null,h?t.jsx("div",{className:"modal-backdrop",onClick:()=>W(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>W(!1),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:at,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:R.email_prefix,onChange:N=>S({...R,email_prefix:N.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:R.email_suffix,onChange:N=>S({...R,email_suffix:N.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:R.password,onChange:N=>S({...R,password:N.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:R.plan_id,onChange:N=>S({...R,plan_id:N.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),x.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:R.expired_at,onChange:N=>S({...R,expired_at:N.target.value}),onClick:N=>{var he,xe;return(xe=(he=N.currentTarget).showPicker)==null?void 0:xe.call(he)},onFocus:N=>{var he,xe;return(xe=(he=N.currentTarget).showPicker)==null?void 0:xe.call(he)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>W(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:X,children:o(X?"user.creating":"user.createUser")})]})]})]})}):null,ue?t.jsx("div",{className:"modal-backdrop",onClick:()=>_e(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_e(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:se,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:ue})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:Se.plan_id,onChange:N=>Ue({...Se,plan_id:N.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),x.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:Se.period,onChange:N=>Ue({...Se,period:N.target.value}),children:Dj.map(N=>t.jsx("option",{value:N.value,children:Aj(N.value,o)},N.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Se.total_amount,onChange:N=>Ue({...Se,total_amount:N.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_e(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:pt,children:o(pt?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),We?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ht(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ht(null),children:t.jsx(it,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(We.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:We.userId})})]})]})}):null,Et?t.jsx("div",{className:"modal-backdrop",onClick:()=>da(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:Et.email,id:Et.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>da(null),children:t.jsx(it,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[z?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:z}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:Gt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:oi(bt.reduce((N,he)=>N+he.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:oi(bt.reduce((N,he)=>N+he.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:oi(bt.reduce((N,he)=>N+he.u+he.d,0))})]})]}),_t?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(xt,{label:o("user.historyLoading")})}):bt.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(id,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:bt.map(N=>{const he=oi(N.u),xe=oi(N.d),Oe=oi(N.u+N.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:Ej(N.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(N.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:he}),t.jsx("td",{style:{color:"var(--muted)"},children:xe}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Oe})]},N.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min((mt-1)*Ft+1,Gt),end:Math.min(mt*Ft,Gt),total:Gt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:mt<=1,onClick:()=>It(Et.id,mt-1),children:[t.jsx(xn,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:mt*Ft>=Gt,onClick:()=>It(Et.id,mt+1),children:[o("user.historyNext"),t.jsx(gn,{size:16})]})]})]})]})]})]})}):null]})}const Mh=15,Dh=20,Rj=["email","id","user_id","plan_id","status"];function Yn(s,i){return s?new Date(s*1e3).toLocaleString():i}function Hj(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Lj(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function hl(s){return+(s/1073741824).toFixed(2)}function xd(s){return Math.round((Number(s)||0)*1073741824)}function qj(s){return s==="email"?"like":"="}function Bj(s,i){switch(s){case"email":return i("subscription.filterEmail");case"id":return i("subscription.filterId");case"user_id":return i("subscription.filterUserId");case"plan_id":return i("subscription.filterPlanId");case"status":return i("subscription.filterStatus");default:return s}}function Oh(s,i){return i(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Ah(s,i){switch(s){case"bound":return i("subscription.slotStatusBound");case"banned":return i("subscription.slotStatusBanned");default:return i("subscription.slotStatusPending")}}function Uh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Gj(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function Yj(){const s=zt(),i=Ka(),{t:o}=Ve(),[d,p]=m.useState([]),[x,f]=m.useState(0),[y,_]=m.useState(1),[v,j]=m.useState("email"),[b,q]=m.useState(""),[V,ee]=m.useState(!0),[Z,C]=m.useState(""),[B,A]=m.useState(null),[D,I]=m.useState({}),[ie,re]=m.useState(null),[T,Y]=m.useState(null),[ne,fe]=m.useState([]),[w,U]=m.useState(0),[te,E]=m.useState(1),[oe,O]=m.useState(!1),[J,h]=m.useState(""),[W,R]=m.useState(null);function S(z){const be=z==null?void 0:z.trim();be&&s.push(`/user?email=${encodeURIComponent(be)}`)}const X=m.useCallback(async(z=1,be="",Le="email")=>{ee(!0),C("");try{const ye=be.trim()?[{key:Le,condition:qj(Le),value:be.trim()}]:void 0,st=await E1(z,Mh,ye);p(st.data),f(st.total),_(z)}catch(ye){C(ye instanceof Error?ye.message:o("subscription.loadFailed"))}finally{ee(!1)}},[o]),de=m.useCallback(async(z,be=1)=>{O(!0),h("");try{const Le=await gx(be,Dh,[{key:"subscription_id",condition:"=",value:String(z.id)}]);fe(Le.data),U(Le.total),E(be)}catch(Le){h(Le instanceof Error?Le.message:o("subscription.slotsLoadFailed"))}finally{O(!1)}},[o]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}const z=new URLSearchParams(i.search),Le=[["user_id",z.get("user_id")],["id",z.get("id")],["plan_id",z.get("plan_id")],["email",z.get("email")],["status",z.get("status")]].find(([,ye])=>ye&&ye.trim());if(Le){const[ye,st]=Le,G=st??"";j(ye),q(G),X(1,G,ye);return}X()},[X,i.search,s]);function ue(z){z.preventDefault(),X(1,b,v)}function _e(){if(q(""),i.search){s.replace("/subscription");return}X(1,"",v)}function Se(z){A(z),I({transfer_enable:String(hl(z.transfer_enable)),u:String(hl(z.u)),d:String(hl(z.d)),device_limit:z.device_limit===null?"":String(z.device_limit),speed_limit:z.speed_limit===null?"":String(z.speed_limit),expired_at:Hj(z.expired_at),status:z.status,auto_renewal:String(z.auto_renewal||0),remarks:z.remarks??""})}async function Ue(z){var be,Le;if(z.preventDefault(),!!B){re(B.id);try{await D1({id:B.id,transfer_enable:xd(D.transfer_enable),u:xd(D.u),d:xd(D.d),device_limit:D.device_limit===""?null:Number(D.device_limit),speed_limit:D.speed_limit===""?null:Number(D.speed_limit),expired_at:Lj(D.expired_at),status:D.status,auto_renewal:Number(D.auto_renewal),remarks:D.remarks}),A(null),(be=window.showToast)==null||be.call(window,o("subscription.updateSuccess"),"success"),await X(y,b,v)}catch(ye){(Le=window.showToast)==null||Le.call(window,ye instanceof Error?ye.message:o("subscription.saveFailed"),"error")}finally{re(null)}}}function pt(z){var be;(be=window.showConfirm)==null||be.call(window,{message:o("subscription.resetConfirm",{id:z.id}),onConfirm:async()=>{var Le,ye;re(z.id);try{await O1(z.id),(Le=window.showToast)==null||Le.call(window,o("subscription.resetSuccess"),"success"),await X(y,b,v)}catch(st){(ye=window.showToast)==null||ye.call(window,st instanceof Error?st.message:o("subscription.resetFailed"),"error")}finally{re(null)}}})}async function Be(z){var Le;if(!z)return;const be=await Zn(z);(Le=window.showToast)==null||Le.call(window,o(be?"subscription.copySuccess":"common.copyFailed"),be?"success":"error")}async function We(z){var be,Le;R(z.id);try{let ye=z.subscribe_url||null;if(ye||(ye=(await M1(z.id)).data,ye&&p(G=>G.map(we=>we.id===z.id?{...we,subscribe_url:ye}:we))),!ye){(be=window.showToast)==null||be.call(window,o("common.copyFailed"),"error");return}await Be(ye)}catch(ye){(Le=window.showToast)==null||Le.call(window,ye instanceof Error?ye.message:o("common.copyFailed"),"error")}finally{R(null)}}function Ht(z){Y(z),fe([]),U(0),E(1),de(z,1)}function Et(z=te){return T?de(T,z):Promise.resolve()}function da(z){var be;(be=window.showConfirm)==null||be.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var Le,ye;re(z.id);try{await bx(z.id),(Le=window.showToast)==null||Le.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([Et(),X(y,b,v)])}catch(st){(ye=window.showToast)==null||ye.call(window,st instanceof Error?st.message:o("subscription.unbindFailed"),"error")}finally{re(null)}}})}function bt(z){var be;(be=window.showConfirm)==null||be.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var Le,ye;re(z.id);try{await yx(z.id),(Le=window.showToast)==null||Le.call(window,o("subscription.banSuccess"),"success"),await Promise.all([Et(),X(y,b,v)])}catch(st){(ye=window.showToast)==null||ye.call(window,st instanceof Error?st.message:o("subscription.banFailed"),"error")}finally{re(null)}}})}function ta(z){const be=z.device_limit&&z.device_limit>0?String(z.device_limit):o("subscription.unlimited"),Le=!!(z.device_count||z.device_limit&&z.device_limit>0);return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:z.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:be})]}),z.device_limit&&z.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(z.device_count/z.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),Le?t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Ht(z),children:[t.jsx(_d,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]}):null]})}function Gt(z){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[hl(z.total_used)," / ",hl(z.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Gj(z)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:hl(z.u),download:hl(z.d)})})]})}function ua(z){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:z.uuid,onClick:()=>Be(z.uuid),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:z.uuid})]}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function mt(z){return t.jsxs("div",{className:"subscription-link-stack",children:[ua(z),z.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:z.subscribe_url,onClick:()=>void We(z),disabled:W===z.id,children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:z.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void We(z),disabled:W===z.id,children:[t.jsx(Na,{size:14}),t.jsx("span",{children:W===z.id?o("common.processing"):o("subscription.colSubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function Vt(z){return t.jsxs("div",{className:"row-actions subscription-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>Se(z),children:[t.jsx(Rt,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:ie===z.id,onClick:()=>pt(z),children:[t.jsx(Ho,{size:14}),o("subscription.resetSecret")]})]})}const Ft=Math.ceil(x/Mh),_t=Math.ceil(w/Dh),pa=Ft>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:y<=1||V,onClick:()=>void X(y-1,b,v),children:[t.jsx(xn,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:y,total:Ft})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:y>=Ft||V,onClick:()=>void X(y+1,b,v),children:[o("common.next"),t.jsx(gn,{size:14})]})]}):null;return t.jsxs(Bt,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:x})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:V,onClick:()=>void X(y,b,v),children:[t.jsx(Nt,{size:16}),o(V?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ue,children:[t.jsx("select",{className:"config-input filter-select",value:v,onChange:z=>j(z.target.value),children:Rj.map(z=>t.jsx("option",{value:z,children:Bj(z,o)},z))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Yo,{size:16}),t.jsx("input",{className:"config-input",value:b,onChange:z=>q(z.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(rs,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:_e,children:o("common.clearFilter")})]}),Z?t.jsx("div",{className:"form-error",children:Z}):null,V&&d.length===0?t.jsx(xt,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsxs("th",{children:[o("subscription.colPrimaryUuid")," / ",o("subscription.colSubscribeUrl")]}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(z=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",z.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:z.plan_name??"-"}),z.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>S(z.user_email),title:o("subscription.viewUser"),children:z.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:z.user_id}),z.plan_id?` - ${o("subscription.planId",{id:z.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${z.status}`,children:Oh(z.status,o)})}),t.jsx("td",{children:Gt(z)}),t.jsx("td",{children:ta(z)}),t.jsx("td",{children:Yn(z.expired_at,o("subscription.never"))}),t.jsx("td",{children:mt(z)}),t.jsx("td",{children:Yn(z.updated_at,o("subscription.never"))}),t.jsx("td",{children:Vt(z)})]},z.id)),!V&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(z=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",z.id]}),t.jsx("strong",{className:"subscription-plan-name",children:z.plan_name??"-"}),z.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>S(z.user_email),title:o("subscription.viewUser"),children:z.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${z.status}`,children:Oh(z.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),Gt(z)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),ta(z)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:Yn(z.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:Yn(z.updated_at,o("subscription.never"))})]})]}),t.jsx("div",{className:"subscription-card-link-block",children:mt(z)}),Vt(z)]},z.id)),!V&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),pa,T?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>Y(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:z=>z.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:T.id})}),t.jsx("p",{children:T.user_email??o("subscription.userId",{id:T.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>Y(null),children:t.jsx(it,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[J?t.jsx("div",{className:"form-error",children:J}):null,oe&&ne.length===0?t.jsx(xt,{label:o("subscription.slotsLoading")}):null,t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[ne.map(z=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:z.uuid,onClick:()=>Be(z.uuid),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:z.uuid})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${Uh(z.status)}`,children:Ah(z.status,o)})}),t.jsx("td",{children:z.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:z.hwid,onClick:()=>Be(z.hwid),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:z.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:z.user_agent??"",children:z.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:z.last_ip??"-"}),t.jsx("small",{children:z.first_ip?o("subscription.firstIp",{ip:z.first_ip}):"-"})]}),t.jsx("td",{children:Yn(z.first_seen_at,"-")}),t.jsx("td",{children:Yn(z.last_seen_at,"-")}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===z.id,onClick:()=>da(z),children:[t.jsx(Cd,{size:14}),o("subscription.unbind")]}),z.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===z.id,onClick:()=>bt(z),children:[t.jsx(xl,{size:14}),o("subscription.ban")]}):null]})})]},z.id)),!oe&&ne.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[ne.map(z=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${Uh(z.status)}`,children:Ah(z.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:z.uuid,onClick:()=>Be(z.uuid),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:z.uuid})]})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),z.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:z.hwid,onClick:()=>Be(z.hwid),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:z.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:z.last_ip??"-"}),t.jsx("small",{children:z.first_ip?o("subscription.firstIp",{ip:z.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:z.user_agent??"",children:z.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:Yn(z.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:Yn(z.last_seen_at,"-")})]})]}),t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===z.id,onClick:()=>da(z),children:[t.jsx(Cd,{size:14}),o("subscription.unbind")]}),z.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===z.id,onClick:()=>bt(z),children:[t.jsx(xl,{size:14}),o("subscription.ban")]}):null]})]},z.id)),!oe&&ne.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),_t>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:te<=1||oe,onClick:()=>void Et(te-1),children:[t.jsx(xn,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:te,total:_t})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:te>=_t||oe,onClick:()=>void Et(te+1),children:[o("common.next"),t.jsx(gn,{size:14})]})]}):null]})]})}):null,B?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>A(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:z=>z.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:B.id})}),t.jsx("p",{children:B.user_email??o("subscription.userId",{id:B.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>A(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ue,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:D.transfer_enable,onChange:z=>I(be=>({...be,transfer_enable:z.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:D.u,onChange:z=>I(be=>({...be,u:z.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:D.d,onChange:z=>I(be=>({...be,d:z.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:D.device_limit,onChange:z=>I(be=>({...be,device_limit:z.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:D.speed_limit,onChange:z=>I(be=>({...be,speed_limit:z.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:D.expired_at,onChange:z=>I(be=>({...be,expired_at:z.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:D.status,onChange:z=>I(be=>({...be,status:z.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:D.auto_renewal,onChange:z=>I(be=>({...be,auto_renewal:z.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:D.remarks,onChange:z=>I(be=>({...be,remarks:z.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>A(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ie===B.id,children:ie===B.id?o("common.processing"):o("common.save")})]})]})]})}):null]})}const Rh=15,$j=["email","user_id","node","hwid","user_agent","last_ip"];function ts(s){return s?new Date(s*1e3).toLocaleString():"-"}function $n(s){const i=Math.max(0,Number(s??0));if(i===0)return"0 B";const o=["B","KB","MB","GB","TB"];let d=i,p=0;for(;d>=1024&&p<o.length-1;)d/=1024,p+=1;return`${d>=10||p===0?d.toFixed(0):d.toFixed(2)} ${o[p]}`}function Vj(s){return["user_id","subscription_id","node","node_type","node_id"].includes(s)?"=":"like"}function Qj(s,i){switch(s){case"email":return i("device.filterEmail");case"user_id":return i("device.filterUserId");case"hwid":return i("device.filterHwid");case"node":return i("device.filterNode");case"node_id":return i("device.filterNodeId");case"node_type":return i("device.filterNodeType");case"user_agent":return i("device.filterUserAgent");case"last_ip":return i("device.filterIp");default:return""}}function Hh(s,i){switch(s){case"bound":return i("device.statusBound");case"banned":return i("device.statusBanned");default:return i("device.statusPending")}}function Oo(s){return(s.online_ips??[]).join(", ")||"-"}function Ao(s){return(s.online_nodes??[]).map(i=>`${i.node_type}#${i.node_id}`).join(", ")||"-"}function Xj(s){var x,f,y;const i=new URLSearchParams(s),o=(x=i.get("node_type"))==null?void 0:x.trim(),d=(f=i.get("node_id"))==null?void 0:f.trim();if(o&&d)return{field:"node",value:`${o}:${d}`};if(d)return{field:"node",value:d};const p=["node","hwid","user_agent","last_ip","email","user_id"];for(const _ of p){const v=(y=i.get(_))==null?void 0:y.trim();if(v)return{field:_,value:v}}return null}function Zj(){const s=zt(),i=Ka(),{t:o}=Ve(),[d,p]=m.useState([]),[x,f]=m.useState(0),[y,_]=m.useState(1),[v,j]=m.useState("email"),[b,q]=m.useState(""),[V,ee]=m.useState(!0),[Z,C]=m.useState(""),[B,A]=m.useState(null),[D,I]=m.useState(null),[ie,re]=m.useState(null),T=m.useCallback(async(h=1,W="",R="email")=>{ee(!0),C("");try{const S=W.trim()?[{key:R,condition:Vj(R),value:W.trim()}]:void 0,X=await gx(h,Rh,S);p(X.data),f(X.total),_(h)}catch(S){C(S instanceof Error?S.message:o("device.loadFailed"))}finally{ee(!1)}},[o]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}const h=Xj(i.search);if(h){j(h.field),q(h.value),T(1,h.value,h.field);return}T()},[T,s,i.search]),m.useEffect(()=>{if(ie===null)return;function h(R){const S=R.target;S!=null&&S.closest(".device-action-wrap")||re(null)}function W(R){R.key==="Escape"&&re(null)}return document.addEventListener("pointerdown",h),document.addEventListener("keydown",W),()=>{document.removeEventListener("pointerdown",h),document.removeEventListener("keydown",W)}},[ie]);function Y(h){h.preventDefault(),T(1,b,v)}function ne(){if(q(""),i.search){s.replace("/device");return}T(1,"",v)}async function fe(h){var R;if(!h.hwid)return;const W=await Zn(h.hwid);(R=window.showToast)==null||R.call(window,o(W?"device.copySuccess":"common.copyFailed"),W?"success":"error")}async function w(h){var R;const W=await Zn(h.uuid);(R=window.showToast)==null||R.call(window,o(W?"device.copyUuidSuccess":"common.copyFailed"),W?"success":"error")}function U(h){var W;(W=window.showConfirm)==null||W.call(window,{message:o("device.unbindConfirm"),onConfirm:async()=>{var R,S;A(h.id);try{await bx(h.id),(R=window.showToast)==null||R.call(window,o("device.unbindSuccess"),"success"),await T(y,b,v)}catch(X){(S=window.showToast)==null||S.call(window,X instanceof Error?X.message:o("device.unbindFailed"),"error")}finally{A(null)}}})}function te(h){var W;(W=window.showConfirm)==null||W.call(window,{message:o("device.banConfirm"),onConfirm:async()=>{var R,S;A(h.id);try{await yx(h.id),(R=window.showToast)==null||R.call(window,o("device.banSuccess"),"success"),await T(y,b,v)}catch(X){(S=window.showToast)==null||S.call(window,X instanceof Error?X.message:o("device.banFailed"),"error")}finally{A(null)}}})}function E(h){var W;(W=window.showConfirm)==null||W.call(window,{message:o("device.resetConfirm",{user:h.user_email??`#${h.user_id}`}),onConfirm:async()=>{var R,S;I(h.user_id);try{await A1(h.user_id),(R=window.showToast)==null||R.call(window,o("device.resetSuccess"),"success"),await T(y,b,v)}catch(X){(S=window.showToast)==null||S.call(window,X instanceof Error?X.message:o("device.resetFailed"),"error")}finally{I(null)}}})}function oe(h){re(null),h()}function O(h,W){const R=W==="mobile"?-h.id:h.id,S=ie===R;return t.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${S?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>re(S?null:R),children:[o("device.action")," ",t.jsx(gl,{size:14})]}),S?t.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:B===h.id,onClick:()=>oe(()=>U(h)),children:[t.jsx(Cd,{size:14}),o("device.unbind")]}),h.status==="bound"?t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:B===h.id,onClick:()=>oe(()=>te(h)),children:[t.jsx(xl,{size:14}),o("device.ban")]}):null,t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:D===h.user_id,onClick:()=>oe(()=>E(h)),children:[t.jsx(Ev,{size:14}),o("device.resetUser")]})]}):null]})}const J=Math.ceil(x/Rh);return t.jsxs(Bt,{title:o("device.title"),subtitle:o("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("device.heading")}),t.jsx("p",{children:o("device.total",{count:x})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:V,onClick:()=>void T(y,b,v),children:[t.jsx(Nt,{size:16}),o(V?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:Y,children:[t.jsx("select",{className:"config-input filter-select",value:v,onChange:h=>j(h.target.value),children:$j.map(h=>t.jsx("option",{value:h,children:Qj(h,o)},h))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Yo,{size:16}),t.jsx("input",{className:"config-input",value:b,onChange:h=>q(h.target.value),placeholder:o(v==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(rs,{size:16}),o("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ne,children:o("device.clear")})]}),Z?t.jsx("div",{className:"form-error",children:Z}):null,V&&d.length===0?t.jsx(xt,{label:o("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[d.map(h=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:h.user_email??"-"}),t.jsxs("small",{children:["ID: ",h.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[h.plan_name??"-",h.user_plan_id?` #${h.user_plan_id}`:""]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:Hh(h.status,o)}),t.jsxs("span",{className:`online-badge ${h.is_online?"online":"offline"}`,children:[h.is_online?t.jsx(ch,{size:14}):t.jsx(rh,{size:14}),h.is_online?o("device.online"):o("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-info",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.uuid")}),t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:h.uuid,onClick:()=>w(h),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:h.uuid})]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.hwid")}),h.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:h.hwid,onClick:()=>fe(h),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:h.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.client")}),t.jsx("small",{title:h.user_agent??"",children:h.user_agent??"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.ip")}),t.jsxs("span",{className:"mono",title:`${h.last_ip??"-"} / ${h.first_ip??"-"}`,children:[h.last_ip??"-",h.first_ip?` (${h.first_ip})`:""]})]})]}),t.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[t.jsx("span",{children:o("device.traffic")}),t.jsxs("small",{title:`${o("device.upload")}: ${$n(h.device_upload)} / ${o("device.download")}: ${$n(h.device_download)}`,children:[$n(h.device_used_traffic)," / ",o("device.upload"),": ",$n(h.device_upload)," / ",o("device.download"),": ",$n(h.device_download)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.connection")}),t.jsxs("small",{title:`${Oo(h)} / ${Ao(h)}`,children:[o("device.onlineIps"),": ",Oo(h)," / ",o("device.onlineNodes"),": ",Ao(h)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.time")}),t.jsxs("small",{children:[o("device.firstSeen"),": ",ts(h.first_seen_at)," / ",o("device.lastSeen"),": ",ts(h.last_seen_at)]})]})]}),t.jsx("div",{className:"mobile-device-actions",children:O(h,"mobile")})]},h.id)),!V&&d.length===0?t.jsx("div",{className:"empty-state",children:o("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("device.user")}),t.jsx("th",{children:o("device.status")}),t.jsx("th",{children:o("device.traffic")}),t.jsx("th",{children:o("device.connection")}),t.jsx("th",{children:o("device.deviceInfo")}),t.jsx("th",{children:o("device.time")}),t.jsx("th",{children:o("device.action")})]})}),t.jsxs("tbody",{children:[d.map(h=>t.jsxs("tr",{children:[t.jsxs("td",{className:"device-user-cell",children:[t.jsx("strong",{children:h.user_email??"-"}),t.jsxs("small",{children:["ID: ",h.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[h.plan_name??"-",h.user_plan_id?` #${h.user_plan_id}`:""]})]}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:Hh(h.status,o)})}),t.jsx("td",{className:"device-traffic-cell",children:t.jsxs("div",{className:"device-traffic-stack",children:[t.jsx("strong",{children:$n(h.device_used_traffic)}),t.jsxs("small",{children:[o("device.upload"),": ",$n(h.device_upload)]}),t.jsxs("small",{children:[o("device.download"),": ",$n(h.device_download)]})]})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${h.is_online?"online":"offline"}`,children:[h.is_online?t.jsx(ch,{size:14}):t.jsx(rh,{size:14}),h.is_online?o("device.online"):o("device.offline")]}),t.jsxs("small",{title:Oo(h),children:[o("device.onlineIps"),": ",Oo(h)]}),t.jsxs("small",{title:Ao(h),children:[o("device.onlineNodes"),": ",Ao(h)]}),t.jsxs("small",{children:[o("device.lastOnline"),": ",ts(h.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-info-cell",children:t.jsxs("div",{className:"device-info-stack",children:[t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.uuid")}),t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:h.uuid,onClick:()=>w(h),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:h.uuid})]})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.hwid")}),h.hwid?t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:h.hwid,onClick:()=>fe(h),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:h.hwid})]}):t.jsx("span",{className:"device-info-value",children:"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.client")}),t.jsx("small",{className:"device-info-value",title:h.user_agent??"",children:h.user_agent??"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.ip")}),t.jsxs("div",{className:"device-info-value",children:[t.jsx("strong",{className:"mono",children:h.last_ip??"-"}),t.jsx("small",{children:h.first_ip?`${o("device.firstIp")}: ${h.first_ip}`:"-"})]})]})]})}),t.jsx("td",{className:"device-time-cell",children:t.jsxs("div",{className:"device-time-stack",children:[t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.firstSeen")}),t.jsx("span",{children:ts(h.first_seen_at)})]}),t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.lastSeen")}),t.jsx("span",{children:ts(h.last_seen_at)})]})]})}),t.jsx("td",{className:"device-action-cell",children:O(h,"desktop")})]},h.id)),!V&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("device.empty")})})}):null]})]})}),J>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:y<=1||V,onClick:()=>void T(y-1,b,v),children:[t.jsx(xn,{size:14}),o("device.previous")]}),t.jsx("span",{className:"page-info",children:o("device.page",{page:y,total:J})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:y>=J||V,onClick:()=>void T(y+1,b,v),children:[o("device.next"),t.jsx(gn,{size:14})]})]}):null]})]})}const Kj={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function Yd(s){if(Array.isArray(s))return s.map(i=>Number(i)).filter(i=>Number.isFinite(i)&&i>0);if(typeof s=="string")try{return Yd(JSON.parse(s))}catch{return s.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i)&&i>0)}return[]}function Lh(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:Yd(s.plan_id)}:{...Kj}}function gd(s){const i=s.trim();if(!i)return"";try{return new URL(i.includes("://")?i:`https://${i}`).host.toLowerCase()}catch{return i.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function Jj(s){const i=Number(s);if(!i)return"-";const o=new Date(i*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function Fj(s){return Number(s)===1}function qh(s,i){if(!s.length)return"All plans";const o=new Map(i.map(d=>[Number(d.id),d.name]));return s.map(d=>o.get(d)??`#${d}`).join(", ")}function Vn(s,i=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,i?t.jsx("small",{children:"*"}):null]})}function Wj(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState([]),[p,x]=m.useState([]),[f,y]=m.useState(null),[_,v]=m.useState(!0),[j,b]=m.useState(!1),[q,V]=m.useState(null),[ee,Z]=m.useState(""),C=m.useCallback(async()=>{v(!0),Z("");try{const[T,Y]=await Promise.all([K1(),vl()]);d(T),x(Y)}catch(T){Z(T instanceof Error?T.message:i("webcon.toastLoadFailed"))}finally{v(!1)}},[i]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}C()},[C,s]);const B=m.useMemo(()=>p.map(T=>({id:Number(T.id),name:T.name})),[p]);function A(T,Y){y(ne=>ne&&{...ne,[T]:Y})}function D(T,Y){y(ne=>{if(!ne)return ne;const fe=Y?Array.from(new Set([...ne.plan_ids,T])):ne.plan_ids.filter(w=>w!==T);return{...ne,plan_ids:fe}})}async function I(T){var ne,fe;if(T.preventDefault(),!f)return;const Y=gd(f.domain);b(!0),Z("");try{await J1({id:f.id,email:f.email.trim(),domain:Y,title:f.title.trim(),description:f.description.trim()||null,logo:f.logo.trim()||null,background_url:f.background_url.trim()||null,custom_html:f.custom_html||null,plan_ids:f.plan_ids,plan_id:f.plan_ids}),y(null),(ne=window.showToast)==null||ne.call(window,i("webcon.toastSaveSuccess"),"success"),await C()}catch(w){const U=w instanceof Error?w.message:i("webcon.toastSaveFailed");Z(U),(fe=window.showToast)==null||fe.call(window,U,"error")}finally{b(!1)}}async function ie(T){var Y,ne;V(T.id);try{await W1(T.id),(Y=window.showToast)==null||Y.call(window,i("webcon.toastToggleSuccess"),"success"),await C()}catch(fe){const w=fe instanceof Error?fe.message:i("webcon.toastToggleFailed");Z(w),(ne=window.showToast)==null||ne.call(window,w,"error")}finally{V(null)}}function re(T){var Y;(Y=window.showConfirm)==null||Y.call(window,{message:i("webcon.deleteConfirm"),onConfirm:async()=>{var ne,fe;V(T.id),Z("");try{await F1(T.id),(ne=window.showToast)==null||ne.call(window,i("webcon.toastDeleteSuccess"),"success"),await C()}catch(w){const U=w instanceof Error?w.message:i("webcon.toastDeleteFailed");Z(U),(fe=window.showToast)==null||fe.call(window,U,"error")}finally{V(null)}}})}return t.jsxs(Bt,{title:i("webcon.title"),subtitle:i("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("webcon.heading")}),t.jsx("p",{children:i("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:_,onClick:()=>void C(),children:[t.jsx(Nt,{size:16}),i(_?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>y(Lh()),children:[t.jsx(Sa,{size:16}),i("webcon.add")]})]})]}),ee?t.jsx("div",{className:"form-error",children:ee}):null,_&&o.length===0?t.jsx(xt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("webcon.colId")}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Staff owner"}),t.jsx("th",{children:i("webcon.colDomain")}),t.jsx("th",{children:"Landing"}),t.jsx("th",{children:"Plans"}),t.jsx("th",{children:"Created"}),t.jsx("th",{children:i("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(T=>{var ne;const Y=Yd(T.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",T.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${Fj(T.status)?"active":""}`,type:"button",disabled:q===T.id,onClick:()=>void ie(T),"aria-label":"Toggle webcon status",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:T.email??"-"}),t.jsx("small",{children:Number(T.staff)===1?"is_staff enabled":"user is not marked staff"})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:T.domain}),t.jsxs("small",{children:["/",String(((ne=window.settings)==null?void 0:ne.secure_path)??"admin"),"/webcon"]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:T.title||"-"}),t.jsx("small",{children:T.description||"No description"}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(yv,{size:13}),T.logo?"Logo":"No logo"]}),t.jsxs("span",{children:[t.jsx(us,{size:13}),T.background_url?"Background":"No background"]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:qh(Y,B)}),t.jsx("small",{children:Y.length?`${Y.length} selected`:"not restricted"})]})}),t.jsx("td",{children:Jj(T.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>y(Lh(T)),children:[t.jsx(Rt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:q===T.id,onClick:()=>re(T),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},T.id)}),!_&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("webcon.noWebcon")})})}):null]})]})})}),f?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>y(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:T=>T.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:f.id?i("webcon.editTitle"):i("webcon.newTitle")}),t.jsx("p",{children:f.domain||"Create a staff landing domain"})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.closeMenu"),onClick:()=>y(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:I,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[Vn("Staff owner email",!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:f.email,onChange:T=>A("email",T.target.value),placeholder:"staff@example.com"})]}),t.jsxs("label",{className:"webcon-field",children:[Vn("Domain",!0),t.jsx("input",{className:"config-input",required:!0,value:f.domain,onChange:T=>A("domain",T.target.value),onBlur:T=>A("domain",gd(T.target.value)),placeholder:"webcon.example.com"}),t.jsx("span",{className:"webcon-help",children:"Store only the host. Do not include path/query."})]}),t.jsxs("label",{className:"webcon-field",children:[Vn("Landing title",!0),t.jsx("input",{className:"config-input",required:!0,value:f.title,onChange:T=>A("title",T.target.value),placeholder:"ZicBoard Partner"})]}),t.jsxs("label",{className:"webcon-field",children:[Vn("Description"),t.jsx("input",{className:"config-input",value:f.description,onChange:T=>A("description",T.target.value),placeholder:"Short landing page description"})]}),t.jsxs("label",{className:"webcon-field",children:[Vn("Logo URL"),t.jsx("input",{className:"config-input",type:"url",value:f.logo,onChange:T=>A("logo",T.target.value),placeholder:"https://example.com/logo.png"})]}),t.jsxs("label",{className:"webcon-field",children:[Vn("Background URL"),t.jsx("input",{className:"config-input",type:"url",value:f.background_url,onChange:T=>A("background_url",T.target.value),placeholder:"https://example.com/background.jpg"})]}),t.jsxs("div",{className:"webcon-field full",children:[Vn("Allowed plans"),t.jsxs("div",{className:"webcon-plan-picker",children:[B.map(T=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:f.plan_ids.includes(T.id),onChange:Y=>D(T.id,Y.target.checked)}),t.jsx("span",{children:T.name})]},T.id)),B.length===0?t.jsx("span",{className:"webcon-help",children:"No plans loaded."}):null]}),t.jsx("span",{className:"webcon-help",children:"Leave empty to allow all visible plans for this webcon domain."})]}),t.jsxs("label",{className:"webcon-field full",children:[Vn("Custom HTML"),t.jsx("textarea",{className:"config-input",rows:5,value:f.custom_html,onChange:T=>A("custom_html",T.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:f.logo?t.jsx("img",{src:f.logo,alt:""}):t.jsx(zv,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:f.title||"Landing title"}),t.jsx("span",{children:gd(f.domain)||"webcon.example.com"}),t.jsxs("span",{children:[t.jsx(Ld,{size:12})," ",qh(f.plan_ids,B)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>y(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(ka,{size:16}),i(j?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Bh(s){return new Date(s*1e3).toLocaleString("vi-VN")}function bd(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function Pj(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState([]),[p,x]=m.useState(null),[f,y]=m.useState(!0),[_,v]=m.useState(!1),[j,b]=m.useState(""),[q,V]=m.useState(""),ee=m.useCallback(async()=>{y(!0),b("");try{d(await R1())}catch(A){b(A instanceof Error?A.message:i("notice.loadFailed"))}finally{y(!1)}},[i]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}ee()},[ee,s]);async function Z(A){var D,I;if(A.preventDefault(),!!p){v(!0),b(""),V("");try{const ie=p.tags?p.tags.split(",").map(re=>re.trim()).filter(Boolean):[];await H1({id:p.id,title:p.title,content:p.content,img_url:p.img_url||null,tags:ie.length?ie:null}),x(null),(D=window.showToast)==null||D.call(window,i("notice.saveSuccess"),"success"),await ee()}catch(ie){(I=window.showToast)==null||I.call(window,ie instanceof Error?ie.message:i("notice.saveFailed"),"error")}finally{v(!1)}}}async function C(A){var D;try{await q1(A),await ee()}catch(I){(D=window.showToast)==null||D.call(window,I instanceof Error?I.message:i("notice.toggleFailed"),"error")}}async function B(A){var D;(D=window.showConfirm)==null||D.call(window,{message:i("notice.deleteConfirm"),onConfirm:async()=>{var I,ie;try{await L1(A),(I=window.showToast)==null||I.call(window,i("notice.deleteSuccess"),"success"),await ee()}catch(re){(ie=window.showToast)==null||ie.call(window,re instanceof Error?re.message:i("notice.deleteFailed"),"error")}}})}return t.jsxs(Bt,{title:i("notice.title"),subtitle:i("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("notice.heading")}),t.jsxs("p",{children:[o.length," ",i("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:ee,disabled:f,children:[t.jsx(Nt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>x(bd()),children:[t.jsx(Sa,{size:16}),i("notice.addNotice")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,q?t.jsx("div",{className:"form-success",children:q}):null,f&&o.length===0?t.jsx(xt,{label:i("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("notice.titleField")}),t.jsx("th",{children:i("notice.show")}),t.jsx("th",{children:i("notice.tags")}),t.jsx("th",{children:i("notice.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(A=>{var D;return t.jsxs("tr",{children:[t.jsx("td",{children:A.id}),t.jsx("td",{children:t.jsx("strong",{children:A.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${A.show?"active":""}`,type:"button",onClick:()=>void C(A.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((D=A.tags)==null?void 0:D.map((I,ie)=>t.jsx("span",{className:"tag",children:I},ie)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:Bh(A.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>x(bd(A)),children:[t.jsx(Rt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void B(A.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},A.id)}),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(A=>t.jsxs("div",{className:`notice-mobile-card ${A.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",A.id]})}),t.jsx("button",{className:`admin-switch ${A.show?"active":""}`,type:"button",onClick:()=>void C(A.id),"aria-label":A.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:A.title}),t.jsx("div",{className:"notice-tags",children:A.tags&&A.tags.length>0?A.tags.map((D,I)=>t.jsx("span",{className:"tag-badge",children:D},I)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[i("notice.created"),": ",Bh(A.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>x(bd(A)),children:[t.jsx(Rt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void B(A.id),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},A.id)),!f&&o.length===0?t.jsx("div",{className:"empty-state",children:i("notice.noNotices")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?i("notice.editNotice"):i("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>x(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Z,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:A=>x({...p,title:A.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:p.content,onChange:A=>x({...p,content:A.target.value}),placeholder:i("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:p.img_url,onChange:A=>x({...p,img_url:A.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.tags")}),t.jsx("input",{className:"config-input",value:p.tags,onChange:A=>x({...p,tags:A.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>x(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:_,children:[t.jsx(ka,{size:16}),i(_?"notice.saving":"common.save")]})]})]})]})}):null]})}function yd(s){return new Date(s*1e3).toLocaleString("vi-VN")}const Gh=(s,i)=>({0:{label:i("ticket.statusOpen"),cls:"enabled"},1:{label:i("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},vd=(s,i)=>({0:i("ticket.levelLow"),1:i("ticket.levelMedium"),2:i("ticket.levelHigh")})[s]||String(s);function Ij(){var w;const s=zt(),{t:i}=Ve(),[o,d]=m.useState([]),[p,x]=m.useState(null),[f,y]=m.useState(!1),[_,v]=m.useState(null),[j,b]=m.useState(""),[q,V]=m.useState(!0),[ee,Z]=m.useState(!1),[C,B]=m.useState(""),A=m.useRef(null),[D,I]=m.useState([]),[ie,re]=m.useState(null),T=m.useCallback(async()=>{V(!0),B("");try{d(await B1())}catch(U){B(U instanceof Error?U.message:"Load failed")}finally{V(!1)}},[]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}T(),vl().then(U=>{U&&I(U)}).catch(()=>{})},[T,s]),m.useEffect(()=>{var U;(U=A.current)==null||U.scrollIntoView({behavior:"smooth"})},[p]);async function Y(U){var te;v(U),b(""),x(null),re(null),y(!0);try{const E=await mh(U);if(x(E),E&&E.user_id)try{const oe=await xx(E.user_id);oe&&oe.data&&re(oe.data)}catch(oe){console.error("Failed to load user info:",oe)}}catch{(te=window.showToast)==null||te.call(window,"Failed to load message thread","error")}finally{y(!1)}}async function ne(U){var te,E;if(U.preventDefault(),!(!_||!j.trim())){Z(!0),B("");try{await G1(_,j),b(""),(te=window.showToast)==null||te.call(window,"Reply sent!","success");try{const oe=await mh(_);x(oe)}catch{}await T()}catch(oe){(E=window.showToast)==null||E.call(window,oe instanceof Error?oe.message:"Reply failed","error")}finally{Z(!1)}}}async function fe(U){var te;(te=window.showConfirm)==null||te.call(window,{message:"Close this ticket?",onConfirm:async()=>{var E,oe;B("");try{await Y1(U),(E=window.showToast)==null||E.call(window,"Ticket closed!","success"),_===U&&(v(null),x(null)),await T()}catch(O){B(O instanceof Error?O.message:"Close failed"),(oe=window.showToast)==null||oe.call(window,O instanceof Error?O.message:"Close failed","error")}}})}return t.jsxs(Bt,{title:i("ticket.title"),subtitle:i("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:T,disabled:q,children:[t.jsx(Nt,{size:16}),i("common.refresh")]})})]}),C?t.jsx("div",{className:"form-error",children:C}):null,q&&o.length===0?t.jsx(xt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("ticket.id")}),t.jsx("th",{children:i("ticket.subject")}),t.jsx("th",{children:i("ticket.user")}),t.jsx("th",{children:i("ticket.level")}),t.jsx("th",{children:i("ticket.status")}),t.jsx("th",{children:i("ticket.replyStatus")}),t.jsx("th",{children:i("ticket.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(U=>{const te=Gh(U.status,i);return t.jsxs("tr",{children:[t.jsx("td",{children:U.id}),t.jsx("td",{children:t.jsx("strong",{children:U.subject})}),t.jsxs("td",{children:["#",U.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:vd(U.level,i)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${te.cls}`,children:te.label})}),t.jsx("td",{children:U.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:yd(U.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:U.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Y(U.id),children:[t.jsx(as,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void fe(U.id),children:[t.jsx(Sd,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Y(U.id),children:[t.jsx(as,{size:14}),i("ticket.viewHistory")]})})})]},U.id)}),!q&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(U=>{const te=Gh(U.status,i);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:U.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:vd(U.level,i)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.id"),": ",t.jsxs("strong",{children:["#",U.id]})]}),t.jsx("span",{className:`status-pill ${te.cls}`,children:te.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.user"),": ",t.jsxs("strong",{children:["#",U.user_id]})]}),t.jsx("span",{children:U.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[i("ticket.created"),": ",t.jsx("small",{children:yd(U.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:U.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Y(U.id),children:[t.jsx(as,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void fe(U.id),children:[t.jsx(Sd,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Y(U.id),children:[t.jsx(as,{size:14}),i("ticket.viewHistory")]})})]},U.id)}),!q&&o.length===0?t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")}):null]}),_!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p?`${i("ticket.ticketDetail")}: ${p.subject}`:`${i("ticket.ticketDetail")} #${_}`}),t.jsxs("p",{children:[i("ticket.user"),": #",p==null?void 0:p.user_id," | ",i("ticket.level"),": ",p!=null?vd(p.level,i):i("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{v(null),x(null)},children:t.jsx(it,{size:18})})]}),ie&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("common.email")}),t.jsx("span",{className:"details-value",title:ie.email,children:ie.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((w=D.find(U=>U.id===ie.plan_id))==null?void 0:w.name)||i("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[_a(ie.balance)," ",i("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:ie.expired_at?new Date(ie.expired_at*1e3).toLocaleDateString("vi-VN"):i("ticket.never")})]})]}),f?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(xt,{label:i("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[p!=null&&p.message&&p.message.length>0?p.message.map(U=>{const te=U.is_me;return t.jsxs("div",{className:`chat-message ${te?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:U.message}),t.jsxs("div",{className:"chat-meta",children:[te?i("ticket.staff"):`${i("ticket.user")} #${U.user_id}`," • ",yd(U.created_at)]})]},U.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:i("ticket.noLogs")}),t.jsx("div",{ref:A})]}),(p==null?void 0:p.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ne,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:i("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:j,onChange:U=>b(U.target.value),placeholder:i("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:ee||!j.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(ix,{size:14}),ee?"":i("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:i("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Yh(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const $h={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function Vh(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function ew(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState([]),[p,x]=m.useState(null),[f,y]=m.useState(!0),[_,v]=m.useState(!1),[j,b]=m.useState(""),[q,V]=m.useState(""),ee=m.useCallback(async()=>{y(!0),b("");try{d(await $1())}catch(D){b(D instanceof Error?D.message:i("knowledge.loadFailed"))}finally{y(!1)}},[i]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}ee()},[ee,s]);async function Z(D){var I;try{const ie=await V1(D.id);x(Vh(ie))}catch(ie){(I=window.showToast)==null||I.call(window,ie instanceof Error?ie.message:i("knowledge.detailFailed"),"error")}}async function C(D){var I,ie;if(D.preventDefault(),!!p){v(!0),b(""),V("");try{await Q1({id:p.id,category:p.category,title:p.title,body:p.body,language:p.language||null,sort:p.sort?Number(p.sort):null}),x(null),(I=window.showToast)==null||I.call(window,i("knowledge.saveSuccess"),"success"),await ee()}catch(re){(ie=window.showToast)==null||ie.call(window,re instanceof Error?re.message:i("knowledge.saveFailed"),"error")}finally{v(!1)}}}async function B(D){var I;try{await Z1(D),await ee()}catch(ie){(I=window.showToast)==null||I.call(window,ie instanceof Error?ie.message:i("knowledge.toggleFailed"),"error")}}async function A(D){var I;(I=window.showConfirm)==null||I.call(window,{message:i("knowledge.deleteConfirm"),onConfirm:async()=>{var ie,re;try{await X1(D),(ie=window.showToast)==null||ie.call(window,i("knowledge.deleteSuccess"),"success"),await ee()}catch(T){(re=window.showToast)==null||re.call(window,T instanceof Error?T.message:i("knowledge.deleteFailed"),"error")}}})}return t.jsxs(Bt,{title:i("knowledge.title"),subtitle:i("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",i("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:ee,disabled:f,children:[t.jsx(Nt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>x(Vh()),children:[t.jsx(Sa,{size:16}),i("knowledge.addArticle")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,q?t.jsx("div",{className:"form-success",children:q}):null,f&&o.length===0?t.jsx(xt,{label:i("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("knowledge.category")}),t.jsx("th",{children:i("knowledge.titleField")}),t.jsx("th",{children:i("knowledge.language")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("knowledge.sort")}),t.jsx("th",{children:i("knowledge.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(D=>t.jsxs("tr",{children:[t.jsx("td",{children:D.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:D.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:D.title})}),t.jsx("td",{children:D.language&&$h[D.language]||D.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${D.show?"active":""}`,type:"button",onClick:()=>void B(D.id),"aria-label":i("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:D.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:Yh(D.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Z(D),children:[t.jsx(Rt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void A(D.id),children:[t.jsx(qt,{size:14}),i("common.delete")]})]})})]},D.id)),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(D=>t.jsxs("div",{className:`knowledge-mobile-card ${D.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",D.id]}),D.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",D.sort]})]}),t.jsx("button",{className:`admin-switch ${D.show?"active":""}`,type:"button",onClick:()=>void B(D.id),"aria-label":D.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:D.title}),t.jsxs("div",{className:"card-meta",children:[D.category&&t.jsx("span",{className:"category-badge",children:D.category}),D.language&&t.jsx("span",{className:"lang-badge",children:$h[D.language]||D.language})]}),t.jsxs("p",{className:"created-time",children:[i("knowledge.created"),": ",Yh(D.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void Z(D),children:[t.jsx(Rt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void A(D.id),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},D.id)),!f&&o.length===0?t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?i("knowledge.editArticle"):i("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>x(null),children:t.jsx(it,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:C,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:p.category,onChange:D=>x({...p,category:D.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:D=>x({...p,title:D.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:p.body,onChange:D=>x({...p,body:D.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:p.language,onChange:D=>x({...p,language:D.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:i("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:i("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:i("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:i("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:i("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:i("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:i("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:p.sort,onChange:D=>x({...p,sort:D.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>x(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:_,children:[t.jsx(ka,{size:16}),i(_?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function tw(){const s=zt(),{t:i}=Ve(),[o,d]=m.useState(null),[p,x]=m.useState(null),[f,y]=m.useState(null),[_,v]=m.useState(""),[j,b]=m.useState(!0),[q,V]=m.useState(""),ee=m.useCallback(async()=>{b(!0),V("");try{const[C,B,A,D]=await Promise.all([P1().catch(()=>({data:{}})),t0().catch(()=>({data:{}})),a0().catch(()=>({data:[]})),n0().catch(()=>({data:""}))]);d(C.data),x(B.data),y(A.data),v(typeof D.data=="string"?D.data:"")}catch(C){V(C instanceof Error?C.message:i("queue.toastLoadFailed"))}finally{b(!1)}},[i]);m.useEffect(()=>{if(!Tt()){s.replace("/login");return}ee()},[ee,s]);function Z(C,B,A){return C?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[A," ",B]}),t.jsx("div",{className:"queue-grid",children:Object.entries(C).map(([D,I])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:D}),t.jsx("strong",{children:typeof I=="object"?JSON.stringify(I):String(I??"—")})]},D))})]}):null}return t.jsxs(Bt,{title:i("queue.title"),subtitle:i("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("queue.heading")}),t.jsx("p",{children:i("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:ee,disabled:j,children:[t.jsx(Nt,{size:16}),i("common.refresh")]})})]}),q?t.jsx("div",{className:"form-error",children:q}):null,j?t.jsx(xt,{label:i("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[Z(o,i("queue.systemStatus"),t.jsx(Lo,{size:18})),Z(p,i("queue.queueStats"),t.jsx(Ld,{size:18})),f&&f.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(rv,{size:18})," ",i("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(f,null,2)})]}):null,_?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(xv,{size:18})," ",i("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:_})]}):null]})]})}const aw=m.createContext(null);function nw({children:s}){const[i,o]=m.useState([]),[d,p]=m.useState(null),x=m.useCallback((v,j="success")=>{const b=Math.random().toString(36).substring(2,9);o(q=>[...q,{id:b,message:v,type:j}]),setTimeout(()=>{o(q=>q.filter(V=>V.id!==b))},5e3)},[]),f=m.useCallback(v=>{p(v)},[]);m.useEffect(()=>{typeof window<"u"&&(window.showToast=x,window.showConfirm=f)},[x,f]);const y=async()=>{if(d){try{await d.onConfirm()}catch(v){console.error("Error in onConfirm:",v)}p(null)}},_=()=>{d&&(d.onCancel&&d.onCancel(),p(null))};return t.jsxs(aw.Provider,{value:{showToast:x,showConfirm:f},children:[s,t.jsx("div",{className:"toast-container",children:i.map(v=>{let j=vv;return v.type==="success"&&(j=nx),v.type==="error"&&(j=pv),v.type==="warning"&&(j=kd),t.jsxs("div",{className:`toast-card toast-${v.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(j,{size:18})}),t.jsx("div",{className:"toast-message",children:v.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(b=>b.filter(q=>q.id!==v.id)),children:t.jsx(it,{size:14})})]},v.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:_,children:t.jsxs("div",{className:"confirm-card",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(kd,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:_,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:y,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function lw({children:s}){return t.jsx(m0,{children:t.jsx(nw,{children:s})})}function iw(){return t.jsx(lw,{children:t.jsxs(Qy,{children:[t.jsx(vt,{path:"/login",element:t.jsx(f0,{})}),t.jsx(vt,{path:"/dashboard",element:t.jsx(_0,{})}),t.jsx(vt,{path:"/config/system",element:t.jsx(D0,{})}),t.jsx(vt,{path:"/config/payment",element:t.jsx(U0,{})}),t.jsx(vt,{path:"/config/theme",element:t.jsx(L0,{})}),t.jsx(vt,{path:"/server/manage",element:t.jsx(fj,{})}),t.jsx(vt,{path:"/server/group",element:t.jsx(hj,{})}),t.jsx(vt,{path:"/server/route",element:t.jsx(bj,{})}),t.jsx(vt,{path:"/plan",element:t.jsx(wj,{})}),t.jsx(vt,{path:"/order",element:t.jsx(Sj,{})}),t.jsx(vt,{path:"/coupon",element:t.jsx(kj,{})}),t.jsx(vt,{path:"/giftcard",element:t.jsx(zj,{})}),t.jsx(vt,{path:"/user",element:t.jsx(Uj,{})}),t.jsx(vt,{path:"/subscription",element:t.jsx(Yj,{})}),t.jsx(vt,{path:"/device",element:t.jsx(Zj,{})}),t.jsx(vt,{path:"/webcon",element:t.jsx(Wj,{})}),t.jsx(vt,{path:"/notice",element:t.jsx(Pj,{})}),t.jsx(vt,{path:"/ticket",element:t.jsx(Ij,{})}),t.jsx(vt,{path:"/knowledge",element:t.jsx(ew,{})}),t.jsx(vt,{path:"/queue",element:t.jsx(tw,{})}),t.jsx(vt,{path:"/",element:t.jsx(Ff,{to:"/dashboard",replace:!0})}),t.jsx(vt,{path:"*",element:t.jsx(Ff,{to:"/dashboard",replace:!0})})]})})}Ib.createRoot(document.getElementById("root")).render(t.jsx(m.StrictMode,{children:t.jsx(Py,{children:t.jsx(iw,{})})}));
