(()=>{var Yb=Object.create;var wd=Object.defineProperty;var Zb=Object.getOwnPropertyDescriptor;var Jb=Object.getOwnPropertyNames;var Kb=Object.getPrototypeOf,Qb=Object.prototype.hasOwnProperty;var jb=(e,t,n)=>t in e?wd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Es=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var $b=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Jb(t))!Qb.call(e,s)&&s!==n&&wd(e,s,{get:()=>t[s],enumerable:!(i=Zb(t,s))||i.enumerable});return e};var Vc=(e,t,n)=>(n=e!=null?Yb(Kb(e)):{},$b(t||!e||!e.__esModule?wd(n,"default",{value:e,enumerable:!0}):n,e));var Gc=(e,t,n)=>jb(e,typeof t!="symbol"?t+"":t,n);var e_=Es(Yt=>{"use strict";var Dd=Symbol.for("react.transitional.element"),t1=Symbol.for("react.portal"),e1=Symbol.for("react.fragment"),n1=Symbol.for("react.strict_mode"),i1=Symbol.for("react.profiler"),s1=Symbol.for("react.consumer"),a1=Symbol.for("react.context"),r1=Symbol.for("react.forward_ref"),o1=Symbol.for("react.suspense"),l1=Symbol.for("react.memo"),J0=Symbol.for("react.lazy"),c1=Symbol.for("react.activity"),W0=Symbol.iterator;function u1(e){return e===null||typeof e!="object"?null:(e=W0&&e[W0]||e["@@iterator"],typeof e=="function"?e:null)}var K0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q0=Object.assign,j0={};function ar(e,t,n){this.props=e,this.context=t,this.refs=j0,this.updater=n||K0}ar.prototype.isReactComponent={};ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $0(){}$0.prototype=ar.prototype;function Ud(e,t,n){this.props=e,this.context=t,this.refs=j0,this.updater=n||K0}var Ld=Ud.prototype=new $0;Ld.constructor=Ud;Q0(Ld,ar.prototype);Ld.isPureReactComponent=!0;var q0=Array.isArray;function Rd(){}var be={H:null,A:null,T:null,S:null},t_=Object.prototype.hasOwnProperty;function Nd(e,t,n){var i=n.ref;return{$$typeof:Dd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function h1(e,t){return Nd(e.type,t,e.props)}function Id(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dd}function f1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Y0=/\/+/g;function Cd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f1(""+e.key):t.toString(36)}function d1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Rd,Rd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function sr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Dd:case t1:r=!0;break;case J0:return r=e._init,sr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Cd(e,0):i,q0(s)?(n="",r!=null&&(n=r.replace(Y0,"$&/")+"/"),sr(s,t,n,"",function(c){return c})):s!=null&&(Id(s)&&(s=h1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Y0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(q0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Cd(i,l),r+=sr(i,t,n,a,s);else if(l=u1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Cd(i,l++),r+=sr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return sr(d1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function kc(e,t,n){if(e==null)return e;var i=[],s=0;return sr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function p1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Z0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},m1={map:kc,forEach:function(e,t,n){kc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kc(e,function(){t++}),t},toArray:function(e){return kc(e,function(t){return t})||[]},only:function(e){if(!Id(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Yt.Activity=c1;Yt.Children=m1;Yt.Component=ar;Yt.Fragment=e1;Yt.Profiler=i1;Yt.PureComponent=Ud;Yt.StrictMode=n1;Yt.Suspense=o1;Yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=be;Yt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return be.H.useMemoCache(e)}};Yt.cache=function(e){return function(){return e.apply(null,arguments)}};Yt.cacheSignal=function(){return null};Yt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Q0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!t_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Nd(e.type,s,i)};Yt.createContext=function(e){return e={$$typeof:a1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:s1,_context:e},e};Yt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)t_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Nd(e,a,s)};Yt.createRef=function(){return{current:null}};Yt.forwardRef=function(e){return{$$typeof:r1,render:e}};Yt.isValidElement=Id;Yt.lazy=function(e){return{$$typeof:J0,_payload:{_status:-1,_result:e},_init:p1}};Yt.memo=function(e,t){return{$$typeof:l1,type:e,compare:t===void 0?null:t}};Yt.startTransition=function(e){var t=be.T,n={};be.T=n;try{var i=e(),s=be.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Rd,Z0)}catch(a){Z0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),be.T=t}};Yt.unstable_useCacheRefresh=function(){return be.H.useCacheRefresh()};Yt.use=function(e){return be.H.use(e)};Yt.useActionState=function(e,t,n){return be.H.useActionState(e,t,n)};Yt.useCallback=function(e,t){return be.H.useCallback(e,t)};Yt.useContext=function(e){return be.H.useContext(e)};Yt.useDebugValue=function(){};Yt.useDeferredValue=function(e,t){return be.H.useDeferredValue(e,t)};Yt.useEffect=function(e,t){return be.H.useEffect(e,t)};Yt.useEffectEvent=function(e){return be.H.useEffectEvent(e)};Yt.useId=function(){return be.H.useId()};Yt.useImperativeHandle=function(e,t,n){return be.H.useImperativeHandle(e,t,n)};Yt.useInsertionEffect=function(e,t){return be.H.useInsertionEffect(e,t)};Yt.useLayoutEffect=function(e,t){return be.H.useLayoutEffect(e,t)};Yt.useMemo=function(e,t){return be.H.useMemo(e,t)};Yt.useOptimistic=function(e,t){return be.H.useOptimistic(e,t)};Yt.useReducer=function(e,t,n){return be.H.useReducer(e,t,n)};Yt.useRef=function(e){return be.H.useRef(e)};Yt.useState=function(e){return be.H.useState(e)};Yt.useSyncExternalStore=function(e,t,n){return be.H.useSyncExternalStore(e,t,n)};Yt.useTransition=function(){return be.H.useTransition()};Yt.version="19.2.0"});var rr=Es((iD,n_)=>{"use strict";n_.exports=e_()});var f_=Es(Re=>{"use strict";function zd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Xc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ri(e){return e.length===0?null:e[0]}function qc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Xc(o,n))l<s&&0>Xc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Xc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Xc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Re.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(i_=performance,Re.unstable_now=function(){return i_.now()}):(Od=Date,s_=Od.now(),Re.unstable_now=function(){return Od.now()-s_});var i_,Od,s_,ki=[],Ts=[],g1=1,ti=null,hn=3,Fd=!1,Fo=!1,Ho=!1,Hd=!1,o_=typeof setTimeout=="function"?setTimeout:null,l_=typeof clearTimeout=="function"?clearTimeout:null,a_=typeof setImmediate<"u"?setImmediate:null;function Wc(e){for(var t=Ri(Ts);t!==null;){if(t.callback===null)qc(Ts);else if(t.startTime<=e)qc(Ts),t.sortIndex=t.expirationTime,zd(ki,t);else break;t=Ri(Ts)}}function Vd(e){if(Ho=!1,Wc(e),!Fo)if(Ri(ki)!==null)Fo=!0,lr||(lr=!0,or());else{var t=Ri(Ts);t!==null&&Gd(Vd,t.startTime-e)}}var lr=!1,Vo=-1,c_=5,u_=-1;function h_(){return Hd?!0:!(Re.unstable_now()-u_<c_)}function Pd(){if(Hd=!1,lr){var e=Re.unstable_now();u_=e;var t=!0;try{t:{Fo=!1,Ho&&(Ho=!1,l_(Vo),Vo=-1),Fd=!0;var n=hn;try{e:{for(Wc(e),ti=Ri(ki);ti!==null&&!(ti.expirationTime>e&&h_());){var i=ti.callback;if(typeof i=="function"){ti.callback=null,hn=ti.priorityLevel;var s=i(ti.expirationTime<=e);if(e=Re.unstable_now(),typeof s=="function"){ti.callback=s,Wc(e),t=!0;break e}ti===Ri(ki)&&qc(ki),Wc(e)}else qc(ki);ti=Ri(ki)}if(ti!==null)t=!0;else{var a=Ri(Ts);a!==null&&Gd(Vd,a.startTime-e),t=!1}}break t}finally{ti=null,hn=n,Fd=!1}t=void 0}}finally{t?or():lr=!1}}}var or;typeof a_=="function"?or=function(){a_(Pd)}:typeof MessageChannel<"u"?(Bd=new MessageChannel,r_=Bd.port2,Bd.port1.onmessage=Pd,or=function(){r_.postMessage(null)}):or=function(){o_(Pd,0)};var Bd,r_;function Gd(e,t){Vo=o_(function(){e(Re.unstable_now())},t)}Re.unstable_IdlePriority=5;Re.unstable_ImmediatePriority=1;Re.unstable_LowPriority=4;Re.unstable_NormalPriority=3;Re.unstable_Profiling=null;Re.unstable_UserBlockingPriority=2;Re.unstable_cancelCallback=function(e){e.callback=null};Re.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):c_=0<e?Math.floor(1e3/e):5};Re.unstable_getCurrentPriorityLevel=function(){return hn};Re.unstable_next=function(e){switch(hn){case 1:case 2:case 3:var t=3;break;default:t=hn}var n=hn;hn=t;try{return e()}finally{hn=n}};Re.unstable_requestPaint=function(){Hd=!0};Re.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=hn;hn=e;try{return t()}finally{hn=n}};Re.unstable_scheduleCallback=function(e,t,n){var i=Re.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:g1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,zd(Ts,e),Ri(ki)===null&&e===Ri(Ts)&&(Ho?(l_(Vo),Vo=-1):Ho=!0,Gd(Vd,n-i))):(e.sortIndex=s,zd(ki,e),Fo||Fd||(Fo=!0,lr||(lr=!0,or()))),e};Re.unstable_shouldYield=h_;Re.unstable_wrapCallback=function(e){var t=hn;return function(){var n=hn;hn=t;try{return e.apply(this,arguments)}finally{hn=n}}}});var p_=Es((aD,d_)=>{"use strict";d_.exports=f_()});var g_=Es(yn=>{"use strict";var _1=rr();function m_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function As(){}var vn={d:{f:As,r:function(){throw Error(m_(522))},D:As,C:As,L:As,m:As,X:As,S:As,M:As},p:0,findDOMNode:null},v1=Symbol.for("react.portal");function y1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v1,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Go=_1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Yc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=vn;yn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(m_(299));return y1(e,t,null,n)};yn.flushSync=function(e){var t=Go.T,n=vn.p;try{if(Go.T=null,vn.p=2,e)return e()}finally{Go.T=t,vn.p=n,vn.d.f()}};yn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,vn.d.C(e,t))};yn.prefetchDNS=function(e){typeof e=="string"&&vn.d.D(e)};yn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Yc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?vn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&vn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};yn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Yc(t.as,t.crossOrigin);vn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&vn.d.M(e)};yn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Yc(n,t.crossOrigin);vn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};yn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Yc(t.as,t.crossOrigin);vn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else vn.d.m(e)};yn.requestFormReset=function(e){vn.d.r(e)};yn.unstable_batchedUpdates=function(e,t){return e(t)};yn.useFormState=function(e,t,n){return Go.H.useFormState(e,t,n)};yn.useFormStatus=function(){return Go.H.useHostTransitionStatus()};yn.version="19.2.0"});var y_=Es((oD,v_)=>{"use strict";function __(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(__)}catch(e){console.error(e)}}__(),v_.exports=g_()});var US=Es(vh=>{"use strict";var qe=p_(),Wv=rr(),x1=y_();function tt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function qv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x_(e){if(Cl(e)!==e)throw Error(tt(188))}function S1(e){var t=e.alternate;if(!t){if(t=Cl(e),t===null)throw Error(tt(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return x_(s),e;if(a===i)return x_(s),t;a=a.sibling}throw Error(tt(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(tt(189))}}if(n.alternate!==i)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?e:t}function Jv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Jv(e),t!==null)return t;e=e.sibling}return null}var Ae=Object.assign,M1=Symbol.for("react.element"),Zc=Symbol.for("react.transitional.element"),Ko=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),Kv=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),Qv=Symbol.for("react.consumer"),Qi=Symbol.for("react.context"),_m=Symbol.for("react.forward_ref"),bp=Symbol.for("react.suspense"),Ep=Symbol.for("react.suspense_list"),vm=Symbol.for("react.memo"),ws=Symbol.for("react.lazy");Symbol.for("react.scope");var Tp=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var b1=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var S_=Symbol.iterator;function ko(e){return e===null||typeof e!="object"?null:(e=S_&&e[S_]||e["@@iterator"],typeof e=="function"?e:null)}var E1=Symbol.for("react.client.reference");function Ap(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===E1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pr:return"Fragment";case Mp:return"Profiler";case Kv:return"StrictMode";case bp:return"Suspense";case Ep:return"SuspenseList";case Tp:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ko:return"Portal";case Qi:return e.displayName||"Context";case Qv:return(e._context.displayName||"Context")+".Consumer";case _m:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vm:return t=e.displayName||null,t!==null?t:Ap(e.type)||"Memo";case ws:t=e._payload,e=e._init;try{return Ap(e(t))}catch{}}return null}var Qo=Array.isArray,Gt=Wv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=x1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xa={pending:!1,data:null,method:null,action:null},wp=[],mr=-1;function Ii(e){return{current:e}}function je(e){0>mr||(e.current=wp[mr],wp[mr]=null,mr--)}function Se(e,t){mr++,wp[mr]=e.current,e.current=t}var Ni=Ii(null),pl=Ii(null),zs=Ii(null),wu=Ii(null);function Cu(e,t){switch(Se(zs,t),Se(pl,e),Se(Ni,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Cv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Cv(t),e=_S(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}je(Ni),Se(Ni,e)}function Nr(){je(Ni),je(pl),je(zs)}function Cp(e){e.memoizedState!==null&&Se(wu,e);var t=Ni.current,n=_S(t,e.type);t!==n&&(Se(pl,e),Se(Ni,n))}function Ru(e){pl.current===e&&(je(Ni),je(pl)),wu.current===e&&(je(wu),Tl._currentValue=xa)}var kd,M_;function ga(e){if(kd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kd=t&&t[1]||"",M_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kd+e+M_}var Xd=!1;function Wd(e,t){if(!e||Xd)return"";Xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var d=p}Reflect.construct(e,[],f)}else{try{f.call()}catch(p){d=p}e.call(f.prototype)}}else{try{throw Error()}catch(p){d=p}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&d&&typeof p.stack=="string")return[p.stack,d.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Xd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ga(n):""}function T1(e,t){switch(e.tag){case 26:case 27:case 5:return ga(e.type);case 16:return ga("Lazy");case 13:return e.child!==t&&t!==null?ga("Suspense Fallback"):ga("Suspense");case 19:return ga("SuspenseList");case 0:case 15:return Wd(e.type,!1);case 11:return Wd(e.type.render,!1);case 1:return Wd(e.type,!0);case 31:return ga("Activity");default:return""}}function b_(e){try{var t="",n=null;do t+=T1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Rp=Object.prototype.hasOwnProperty,ym=qe.unstable_scheduleCallback,qd=qe.unstable_cancelCallback,A1=qe.unstable_shouldYield,w1=qe.unstable_requestPaint,Vn=qe.unstable_now,C1=qe.unstable_getCurrentPriorityLevel,jv=qe.unstable_ImmediatePriority,$v=qe.unstable_UserBlockingPriority,Du=qe.unstable_NormalPriority,R1=qe.unstable_LowPriority,ty=qe.unstable_IdlePriority,D1=qe.log,U1=qe.unstable_setDisableYieldValue,Rl=null,Gn=null;function Ns(e){if(typeof D1=="function"&&U1(e),Gn&&typeof Gn.setStrictMode=="function")try{Gn.setStrictMode(Rl,e)}catch{}}var kn=Math.clz32?Math.clz32:I1,L1=Math.log,N1=Math.LN2;function I1(e){return e>>>=0,e===0?32:31-(L1(e)/N1|0)|0}var Jc=256,Kc=262144,Qc=4194304;function _a(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=_a(i):(r&=o,r!==0?s=_a(r):n||(n=o&~e,n!==0&&(s=_a(n))))):(o=i&~a,o!==0?s=_a(o):r!==0?s=_a(r):n||(n=i&~e,n!==0&&(s=_a(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function O1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ey(){var e=Qc;return Qc<<=1,(Qc&62914560)===0&&(Qc=4194304),e}function Yd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ul(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function P1(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-kn(n),f=1<<u;o[u]=0,l[u]=-1;var d=c[u];if(d!==null)for(c[u]=null,u=0;u<d.length;u++){var p=d[u];p!==null&&(p.lane&=-536870913)}n&=~f}i!==0&&ny(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function ny(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-kn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function iy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-kn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function sy(e,t){var n=t&-t;return n=(n&42)!==0?1:xm(n),(n&(e.suspendedLanes|t))!==0?0:n}function xm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Sm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ay(){var e=ce.p;return e!==0?e:(e=window.event,e===void 0?32:CS(e.type))}function E_(e,t){var n=ce.p;try{return ce.p=e,t()}finally{ce.p=n}}var Qs=Math.random().toString(36).slice(2),an="__reactFiber$"+Qs,Cn="__reactProps$"+Qs,Xr="__reactContainer$"+Qs,Dp="__reactEvents$"+Qs,B1="__reactListeners$"+Qs,z1="__reactHandles$"+Qs,T_="__reactResources$"+Qs,Ll="__reactMarker$"+Qs;function Mm(e){delete e[an],delete e[Cn],delete e[Dp],delete e[B1],delete e[z1]}function gr(e){var t=e[an];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xr]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nv(e);e!==null;){if(n=e[an])return n;e=Nv(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){if(e=e[an]||e[Xr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function jo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(tt(33))}function Ar(e){var t=e[T_];return t||(t=e[T_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[Ll]=!0}var ry=new Set,oy={};function Da(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(oy[e]=t,e=0;e<t.length;e++)ry.add(t[e])}var F1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),A_={},w_={};function H1(e){return Rp.call(w_,e)?!0:Rp.call(A_,e)?!1:F1.test(e)?w_[e]=!0:(A_[e]=!0,!1)}function fu(e,t,n){if(H1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function jc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Xi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ni(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ly(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function V1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Up(e){if(!e._valueTracker){var t=ly(e)?"checked":"value";e._valueTracker=V1(e,t,""+e[t])}}function cy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ly(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Uu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var G1=/[\n"\\]/g;function ai(e){return e.replace(G1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ni(t)):e.value!==""+ni(t)&&(e.value=""+ni(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Np(e,r,ni(t)):n!=null?Np(e,r,ni(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ni(o):e.removeAttribute("name")}function uy(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Up(e);return}n=n!=null?""+ni(n):"",t=t!=null?""+ni(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Up(e)}function Np(e,t,n){t==="number"&&Uu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function wr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ni(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function hy(e,t,n){if(t!=null&&(t=""+ni(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ni(n):""}function fy(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(tt(92));if(Qo(i)){if(1<i.length)throw Error(tt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ni(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Up(e)}function Or(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var k1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function C_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||k1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function dy(e,t,n){if(t!=null&&typeof t!="object")throw Error(tt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&C_(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&C_(e,a,t[a])}function bm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function du(e){return W1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var Ip=null;function Em(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,Cr=null;function R_(e){var t=Wr(e);if(t&&(e=t.stateNode)){var n=e[Cn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Lp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ai(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Cn]||null;if(!s)throw Error(tt(90));Lp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&cy(i)}break t;case"textarea":hy(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&wr(e,!!n.multiple,t,!1)}}}var Zd=!1;function py(e,t,n){if(Zd)return e(t,n);Zd=!0;try{var i=e(t);return i}finally{if(Zd=!1,(_r!==null||Cr!==null)&&(ph(),_r&&(t=_r,e=Cr,Cr=_r=null,R_(t),e)))for(t=0;t<e.length;t++)R_(e[t])}}function ml(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Cn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(tt(231,t,typeof n));return n}var is=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Op=!1;if(is)try{cr={},Object.defineProperty(cr,"passive",{get:function(){Op=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{Op=!1}var cr,Is=null,Tm=null,pu=null;function my(){if(pu)return pu;var e,t=Tm,n=t.length,i,s="value"in Is?Is.value:Is.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return pu=s.slice(e,1<i?1-i:void 0)}function mu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $c(){return!0}function D_(){return!1}function Rn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?$c:D_,this.isPropagationStopped=D_,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$c)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$c)},persist:function(){},isPersistent:$c}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ih=Rn(Ua),Nl=Ae({},Ua,{view:0,detail:0}),q1=Rn(Nl),Jd,Kd,Xo,sh=Ae({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Am,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xo&&(Xo&&e.type==="mousemove"?(Jd=e.screenX-Xo.screenX,Kd=e.screenY-Xo.screenY):Kd=Jd=0,Xo=e),Jd)},movementY:function(e){return"movementY"in e?e.movementY:Kd}}),U_=Rn(sh),Y1=Ae({},sh,{dataTransfer:0}),Z1=Rn(Y1),J1=Ae({},Nl,{relatedTarget:0}),Qd=Rn(J1),K1=Ae({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),Q1=Rn(K1),j1=Ae({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$1=Rn(j1),tE=Ae({},Ua,{data:0}),L_=Rn(tE),eE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=iE[e])?!!t[e]:!1}function Am(){return sE}var aE=Ae({},Nl,{key:function(e){if(e.key){var t=eE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Am,charCode:function(e){return e.type==="keypress"?mu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rE=Rn(aE),oE=Ae({},sh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),N_=Rn(oE),lE=Ae({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Am}),cE=Rn(lE),uE=Ae({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),hE=Rn(uE),fE=Ae({},sh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dE=Rn(fE),pE=Ae({},Ua,{newState:0,oldState:0}),mE=Rn(pE),gE=[9,13,27,32],wm=is&&"CompositionEvent"in window,el=null;is&&"documentMode"in document&&(el=document.documentMode);var _E=is&&"TextEvent"in window&&!el,gy=is&&(!wm||el&&8<el&&11>=el),I_=" ",O_=!1;function _y(e,t){switch(e){case"keyup":return gE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function vE(e,t){switch(e){case"compositionend":return vy(t);case"keypress":return t.which!==32?null:(O_=!0,I_);case"textInput":return e=t.data,e===I_&&O_?null:e;default:return null}}function yE(e,t){if(vr)return e==="compositionend"||!wm&&_y(e,t)?(e=my(),pu=Tm=Is=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gy&&t.locale!=="ko"?null:t.data;default:return null}}var xE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function P_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xE[e.type]:t==="textarea"}function yy(e,t,n,i){_r?Cr?Cr.push(i):Cr=[i]:_r=i,t=Ju(t,"onChange"),0<t.length&&(n=new ih("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var nl=null,gl=null;function SE(e){pS(e,0)}function ah(e){var t=jo(e);if(cy(t))return e}function B_(e,t){if(e==="change")return t}var xy=!1;is&&(is?(eu="oninput"in document,eu||(jd=document.createElement("div"),jd.setAttribute("oninput","return;"),eu=typeof jd.oninput=="function"),tu=eu):tu=!1,xy=tu&&(!document.documentMode||9<document.documentMode));var tu,eu,jd;function z_(){nl&&(nl.detachEvent("onpropertychange",Sy),gl=nl=null)}function Sy(e){if(e.propertyName==="value"&&ah(gl)){var t=[];yy(t,gl,e,Em(e)),py(SE,t)}}function ME(e,t,n){e==="focusin"?(z_(),nl=t,gl=n,nl.attachEvent("onpropertychange",Sy)):e==="focusout"&&z_()}function bE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ah(gl)}function EE(e,t){if(e==="click")return ah(t)}function TE(e,t){if(e==="input"||e==="change")return ah(t)}function AE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wn=typeof Object.is=="function"?Object.is:AE;function _l(e,t){if(Wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Rp.call(t,s)||!Wn(e[s],t[s]))return!1}return!0}function F_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function H_(e,t){var n=F_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=F_(n)}}function My(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?My(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function by(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Uu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Uu(e.document)}return t}function Cm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wE=is&&"documentMode"in document&&11>=document.documentMode,yr=null,Pp=null,il=null,Bp=!1;function V_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bp||yr==null||yr!==Uu(i)||(i=yr,"selectionStart"in i&&Cm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),il&&_l(il,i)||(il=i,i=Ju(Pp,"onSelect"),0<i.length&&(t=new ih("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=yr)))}function ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionrun:ma("Transition","TransitionRun"),transitionstart:ma("Transition","TransitionStart"),transitioncancel:ma("Transition","TransitionCancel"),transitionend:ma("Transition","TransitionEnd")},$d={},Ey={};is&&(Ey=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function La(e){if($d[e])return $d[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ey)return $d[e]=t[n];return e}var Ty=La("animationend"),Ay=La("animationiteration"),wy=La("animationstart"),CE=La("transitionrun"),RE=La("transitionstart"),DE=La("transitioncancel"),Cy=La("transitionend"),Ry=new Map,zp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zp.push("scrollEnd");function vi(e,t){Ry.set(e,t),Da(t,[e])}var Lu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ei=[],Sr=0,Rm=0;function rh(){for(var e=Sr,t=Rm=Sr=0;t<e;){var n=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var s=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Dy(n,s,a)}}function oh(e,t,n,i){ei[Sr++]=e,ei[Sr++]=t,ei[Sr++]=n,ei[Sr++]=i,Rm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Dm(e,t,n,i){return oh(e,t,n,i),Nu(e)}function Na(e,t){return oh(e,null,null,t),Nu(e)}function Dy(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-kn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Nu(e){if(50<fl)throw fl=0,am=null,Error(tt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Mr={};function UE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(e,t,n,i){return new UE(e,t,n,i)}function Um(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ts(e,t){var n=e.alternate;return n===null?(n=Fn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Uy(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gu(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Um(e)&&(r=1);else if(typeof e=="string")r=IT(e,n,Ni.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Tp:return e=Fn(31,n,t,s),e.elementType=Tp,e.lanes=a,e;case pr:return Sa(n.children,s,a,t);case Kv:r=8,s|=24;break;case Mp:return e=Fn(12,n,t,s|2),e.elementType=Mp,e.lanes=a,e;case bp:return e=Fn(13,n,t,s),e.elementType=bp,e.lanes=a,e;case Ep:return e=Fn(19,n,t,s),e.elementType=Ep,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qi:r=10;break t;case Qv:r=9;break t;case _m:r=11;break t;case vm:r=14;break t;case ws:r=16,i=null;break t}r=29,n=Error(tt(130,e===null?"null":typeof e,"")),i=null}return t=Fn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Sa(e,t,n,i){return e=Fn(7,e,i,t),e.lanes=n,e}function tp(e,t,n){return e=Fn(6,e,null,t),e.lanes=n,e}function Ly(e){var t=Fn(18,null,null,0);return t.stateNode=e,t}function ep(e,t,n){return t=Fn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var G_=new WeakMap;function ri(e,t){if(typeof e=="object"&&e!==null){var n=G_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:b_(t)},G_.set(e,t),t)}return{value:e,source:t,stack:b_(t)}}var br=[],Er=0,Iu=null,vl=0,ii=[],si=0,Ys=null,Di=1,Ui="";function Ji(e,t){br[Er++]=vl,br[Er++]=Iu,Iu=e,vl=t}function Ny(e,t,n){ii[si++]=Di,ii[si++]=Ui,ii[si++]=Ys,Ys=e;var i=Di;e=Ui;var s=32-kn(i)-1;i&=~(1<<s),n+=1;var a=32-kn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Di=1<<32-kn(t)+s|n<<s|i,Ui=a+e}else Di=1<<a|n<<s|i,Ui=e}function Lm(e){e.return!==null&&(Ji(e,1),Ny(e,1,0))}function Nm(e){for(;e===Iu;)Iu=br[--Er],br[Er]=null,vl=br[--Er],br[Er]=null;for(;e===Ys;)Ys=ii[--si],ii[si]=null,Ui=ii[--si],ii[si]=null,Di=ii[--si],ii[si]=null}function Iy(e,t){ii[si++]=Di,ii[si++]=Ui,ii[si++]=Ys,Di=t.id,Ui=t.overflow,Ys=e}var rn=null,Te=null,ae=!1,Fs=null,oi=!1,Fp=Error(tt(519));function Zs(e){var t=Error(tt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yl(ri(t,e)),Fp}function k_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[an]=e,t[Cn]=i,n){case"dialog":te("cancel",t),te("close",t);break;case"iframe":case"object":case"embed":te("load",t);break;case"video":case"audio":for(n=0;n<bl.length;n++)te(bl[n],t);break;case"source":te("error",t);break;case"img":case"image":case"link":te("error",t),te("load",t);break;case"details":te("toggle",t);break;case"input":te("invalid",t),uy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":te("invalid",t);break;case"textarea":te("invalid",t),fy(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||gS(t.textContent,n)?(i.popover!=null&&(te("beforetoggle",t),te("toggle",t)),i.onScroll!=null&&te("scroll",t),i.onScrollEnd!=null&&te("scrollend",t),i.onClick!=null&&(t.onclick=ji),t=!0):t=!1,t||Zs(e,!0)}function X_(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:rn=rn.return}}function ur(e){if(e!==rn)return!1;if(!ae)return X_(e),ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||um(e.type,e.memoizedProps)),n=!n),n&&Te&&Zs(e),X_(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Te=Lv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Te=Lv(e)}else t===27?(t=Te,js(e.type)?(e=pm,pm=null,Te=e):Te=t):Te=rn?ci(e.stateNode.nextSibling):null;return!0}function Ta(){Te=rn=null,ae=!1}function np(){var e=Fs;return e!==null&&(An===null?An=e:An.push.apply(An,e),Fs=null),e}function yl(e){Fs===null?Fs=[e]:Fs.push(e)}var Hp=Ii(null),Ia=null,$i=null;function Rs(e,t,n){Se(Hp,t._currentValue),t._currentValue=n}function es(e){e._currentValue=Hp.current,je(Hp)}function Vp(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Gp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Vp(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(tt(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Vp(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function qr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(tt(387));if(r=r.memoizedProps,r!==null){var o=s.type;Wn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===wu.current){if(r=s.alternate,r===null)throw Error(tt(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Tl):e=[Tl])}s=s.return}e!==null&&Gp(t,e,n,i),t.flags|=262144}function Ou(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Aa(e){Ia=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function on(e){return Oy(Ia,e)}function nu(e,t){return Ia===null&&Aa(e),Oy(e,t)}function Oy(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(tt(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var LE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},NE=qe.unstable_scheduleCallback,IE=qe.unstable_NormalPriority,Ge={$$typeof:Qi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Im(){return{controller:new LE,data:new Map,refCount:0}}function Il(e){e.refCount--,e.refCount===0&&NE(IE,function(){e.controller.abort()})}var sl=null,kp=0,Pr=0,Rr=null;function OE(e,t){if(sl===null){var n=sl=[];kp=0,Pr=ag(),Rr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return kp++,t.then(W_,W_),t}function W_(){if(--kp===0&&sl!==null){Rr!==null&&(Rr.status="fulfilled");var e=sl;sl=null,Pr=0,Rr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function PE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var q_=Gt.S;Gt.S=function(e,t){Jx=Vn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&OE(e,t),q_!==null&&q_(e,t)};var Ma=Ii(null);function Om(){var e=Ma.current;return e!==null?e:ye.pooledCache}function _u(e,t){t===null?Se(Ma,Ma.current):Se(Ma,t.pool)}function Py(){var e=Om();return e===null?null:{parent:Ge._currentValue,pool:e}}var Yr=Error(tt(460)),Pm=Error(tt(474)),lh=Error(tt(542)),Pu={then:function(){}};function Y_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function By(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ji,ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,J_(e),e;default:if(typeof t.status=="string")t.then(ji,ji);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(tt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,J_(e),e}throw ba=t,Yr}}function va(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ba=n,Yr):n}}var ba=null;function Z_(){if(ba===null)throw Error(tt(459));var e=ba;return ba=null,e}function J_(e){if(e===Yr||e===lh)throw Error(tt(483))}var Dr=null,xl=0;function iu(e){var t=xl;return xl+=1,Dr===null&&(Dr=[]),By(Dr,e,t)}function Wo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function su(e,t){throw t.$$typeof===M1?Error(tt(525)):(e=Object.prototype.toString.call(t),Error(tt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function zy(e){function t(h,g){if(e){var v=h.deletions;v===null?(h.deletions=[g],h.flags|=16):v.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function i(h){for(var g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function s(h,g){return h=ts(h,g),h.index=0,h.sibling=null,h}function a(h,g,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<g?(h.flags|=67108866,g):v):(h.flags|=67108866,g)):(h.flags|=1048576,g)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,g,v,y){return g===null||g.tag!==6?(g=tp(v,h.mode,y),g.return=h,g):(g=s(g,v),g.return=h,g)}function l(h,g,v,y){var C=v.type;return C===pr?u(h,g,v.props.children,y,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ws&&va(C)===g.type)?(g=s(g,v.props),Wo(g,v),g.return=h,g):(g=gu(v.type,v.key,v.props,null,h.mode,y),Wo(g,v),g.return=h,g)}function c(h,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=ep(v,h.mode,y),g.return=h,g):(g=s(g,v.children||[]),g.return=h,g)}function u(h,g,v,y,C){return g===null||g.tag!==7?(g=Sa(v,h.mode,y,C),g.return=h,g):(g=s(g,v),g.return=h,g)}function f(h,g,v){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=tp(""+g,h.mode,v),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zc:return v=gu(g.type,g.key,g.props,null,h.mode,v),Wo(v,g),v.return=h,v;case Ko:return g=ep(g,h.mode,v),g.return=h,g;case ws:return g=va(g),f(h,g,v)}if(Qo(g)||ko(g))return g=Sa(g,h.mode,v,null),g.return=h,g;if(typeof g.then=="function")return f(h,iu(g),v);if(g.$$typeof===Qi)return f(h,nu(h,g),v);su(h,g)}return null}function d(h,g,v,y){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return C!==null?null:o(h,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zc:return v.key===C?l(h,g,v,y):null;case Ko:return v.key===C?c(h,g,v,y):null;case ws:return v=va(v),d(h,g,v,y)}if(Qo(v)||ko(v))return C!==null?null:u(h,g,v,y,null);if(typeof v.then=="function")return d(h,g,iu(v),y);if(v.$$typeof===Qi)return d(h,g,nu(h,v),y);su(h,v)}return null}function p(h,g,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(v)||null,o(g,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zc:return h=h.get(y.key===null?v:y.key)||null,l(g,h,y,C);case Ko:return h=h.get(y.key===null?v:y.key)||null,c(g,h,y,C);case ws:return y=va(y),p(h,g,v,y,C)}if(Qo(y)||ko(y))return h=h.get(v)||null,u(g,h,y,C,null);if(typeof y.then=="function")return p(h,g,v,iu(y),C);if(y.$$typeof===Qi)return p(h,g,v,nu(g,y),C);su(g,y)}return null}function _(h,g,v,y){for(var C=null,w=null,A=g,D=g=0,E=null;A!==null&&D<v.length;D++){A.index>D?(E=A,A=null):E=A.sibling;var M=d(h,A,v[D],y);if(M===null){A===null&&(A=E);break}e&&A&&M.alternate===null&&t(h,A),g=a(M,g,D),w===null?C=M:w.sibling=M,w=M,A=E}if(D===v.length)return n(h,A),ae&&Ji(h,D),C;if(A===null){for(;D<v.length;D++)A=f(h,v[D],y),A!==null&&(g=a(A,g,D),w===null?C=A:w.sibling=A,w=A);return ae&&Ji(h,D),C}for(A=i(A);D<v.length;D++)E=p(A,h,D,v[D],y),E!==null&&(e&&E.alternate!==null&&A.delete(E.key===null?D:E.key),g=a(E,g,D),w===null?C=E:w.sibling=E,w=E);return e&&A.forEach(function(U){return t(h,U)}),ae&&Ji(h,D),C}function x(h,g,v,y){if(v==null)throw Error(tt(151));for(var C=null,w=null,A=g,D=g=0,E=null,M=v.next();A!==null&&!M.done;D++,M=v.next()){A.index>D?(E=A,A=null):E=A.sibling;var U=d(h,A,M.value,y);if(U===null){A===null&&(A=E);break}e&&A&&U.alternate===null&&t(h,A),g=a(U,g,D),w===null?C=U:w.sibling=U,w=U,A=E}if(M.done)return n(h,A),ae&&Ji(h,D),C;if(A===null){for(;!M.done;D++,M=v.next())M=f(h,M.value,y),M!==null&&(g=a(M,g,D),w===null?C=M:w.sibling=M,w=M);return ae&&Ji(h,D),C}for(A=i(A);!M.done;D++,M=v.next())M=p(A,h,D,M.value,y),M!==null&&(e&&M.alternate!==null&&A.delete(M.key===null?D:M.key),g=a(M,g,D),w===null?C=M:w.sibling=M,w=M);return e&&A.forEach(function(z){return t(h,z)}),ae&&Ji(h,D),C}function m(h,g,v,y){if(typeof v=="object"&&v!==null&&v.type===pr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Zc:t:{for(var C=v.key;g!==null;){if(g.key===C){if(C=v.type,C===pr){if(g.tag===7){n(h,g.sibling),y=s(g,v.props.children),y.return=h,h=y;break t}}else if(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ws&&va(C)===g.type){n(h,g.sibling),y=s(g,v.props),Wo(y,v),y.return=h,h=y;break t}n(h,g);break}else t(h,g);g=g.sibling}v.type===pr?(y=Sa(v.props.children,h.mode,y,v.key),y.return=h,h=y):(y=gu(v.type,v.key,v.props,null,h.mode,y),Wo(y,v),y.return=h,h=y)}return r(h);case Ko:t:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(h,g.sibling),y=s(g,v.children||[]),y.return=h,h=y;break t}else{n(h,g);break}else t(h,g);g=g.sibling}y=ep(v,h.mode,y),y.return=h,h=y}return r(h);case ws:return v=va(v),m(h,g,v,y)}if(Qo(v))return _(h,g,v,y);if(ko(v)){if(C=ko(v),typeof C!="function")throw Error(tt(150));return v=C.call(v),x(h,g,v,y)}if(typeof v.then=="function")return m(h,g,iu(v),y);if(v.$$typeof===Qi)return m(h,g,nu(h,v),y);su(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,g!==null&&g.tag===6?(n(h,g.sibling),y=s(g,v),y.return=h,h=y):(n(h,g),y=tp(v,h.mode,y),y.return=h,h=y),r(h)):n(h,g)}return function(h,g,v,y){try{xl=0;var C=m(h,g,v,y);return Dr=null,C}catch(A){if(A===Yr||A===lh)throw A;var w=Fn(29,A,null,h.mode);return w.lanes=y,w.return=h,w}finally{}}}var wa=zy(!0),Fy=zy(!1),Cs=!1;function Bm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(le&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Nu(e),Dy(e,null,n),t}return oh(e,i,t,n),Nu(e)}function al(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,iy(e,n)}}function ip(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Wp=!1;function rl(){if(Wp){var e=Rr;if(e!==null)throw e}}function ol(e,t,n,i){Wp=!1;var s=e.updateQueue;Cs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var f=s.baseState;r=0,u=c=l=null,o=a;do{var d=o.lane&-536870913,p=d!==o.lane;if(p?(se&d)===d:(i&d)===d){d!==0&&d===Pr&&(Wp=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,x=o;d=t;var m=n;switch(x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(m,f,d);break t}f=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(m,f,d):_,d==null)break t;f=Ae({},f,d);break t;case 2:Cs=!0}}d=o.callback,d!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[d]:p.push(d))}else p={lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,r|=d;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=f),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),Ks|=r,e.lanes=r,e.memoizedState=f}}function Hy(e,t){if(typeof e!="function")throw Error(tt(191,e));e.call(t)}function Vy(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Hy(n[e],t)}var Br=Ii(null),Bu=Ii(0);function K_(e,t){e=os,Se(Bu,e),Se(Br,t),os=e|t.baseLanes}function qp(){Se(Bu,os),Se(Br,Br.current)}function zm(){os=Bu.current,je(Br),je(Bu)}var qn=Ii(null),li=null;function Ds(e){var t=e.alternate;Se(ze,ze.current&1),Se(qn,e),li===null&&(t===null||Br.current!==null||t.memoizedState!==null)&&(li=e)}function Yp(e){Se(ze,ze.current),Se(qn,e),li===null&&(li=e)}function Gy(e){e.tag===22?(Se(ze,ze.current),Se(qn,e),li===null&&(li=e)):Us(e)}function Us(){Se(ze,ze.current),Se(qn,qn.current)}function zn(e){je(qn),li===e&&(li=null),je(ze)}var ze=Ii(0);function zu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||fm(n)||dm(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ss=0,Zt=null,ge=null,He=null,Fu=!1,Ur=!1,Ca=!1,Hu=0,Sl=0,Lr=null,BE=0;function Oe(){throw Error(tt(321))}function Fm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wn(e[n],t[n]))return!1;return!0}function Hm(e,t,n,i,s,a){return ss=a,Zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gt.H=e===null||e.memoizedState===null?yx:Qm,Ca=!1,a=n(i,s),Ca=!1,Ur&&(a=Xy(t,n,i,s)),ky(e),a}function ky(e){Gt.H=Ml;var t=ge!==null&&ge.next!==null;if(ss=0,He=ge=Zt=null,Fu=!1,Sl=0,Lr=null,t)throw Error(tt(300));e===null||ke||(e=e.dependencies,e!==null&&Ou(e)&&(ke=!0))}function Xy(e,t,n,i){Zt=e;var s=0;do{if(Ur&&(Lr=null),Sl=0,Ur=!1,25<=s)throw Error(tt(301));if(s+=1,He=ge=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Gt.H=xx,a=t(n,i)}while(Ur);return a}function zE(){var e=Gt.H,t=e.useState()[0];return t=typeof t.then=="function"?Ol(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(Zt.flags|=1024),t}function Vm(){var e=Hu!==0;return Hu=0,e}function Gm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function km(e){if(Fu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fu=!1}ss=0,He=ge=Zt=null,Ur=!1,Sl=Hu=0,Lr=null}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Zt.memoizedState=He=e:He=He.next=e,He}function Fe(){if(ge===null){var e=Zt.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=He===null?Zt.memoizedState:He.next;if(t!==null)He=t,ge=e;else{if(e===null)throw Zt.alternate===null?Error(tt(467)):Error(tt(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},He===null?Zt.memoizedState=He=e:He=He.next=e}return He}function ch(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(e){var t=Sl;return Sl+=1,Lr===null&&(Lr=[]),e=By(Lr,e,t),t=Zt,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,Gt.H=t===null||t.memoizedState===null?yx:Qm),e}function uh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===Qi)return on(e)}throw Error(tt(438,String(e)))}function Xm(e){var t=null,n=Zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ch(),Zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=b1;return t.index++,n}function as(e,t){return typeof t=="function"?t(e):t}function vu(e){var t=Fe();return Wm(t,ge,e)}function Wm(e,t,n){var i=e.queue;if(i===null)throw Error(tt(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(se&f)===f:(ss&f)===f){var d=c.revertLane;if(d===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Pr&&(u=!0);else if((ss&d)===d){c=c.next,d===Pr&&(u=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Zt.lanes|=d,Ks|=d;f=c.action,Ca&&n(a,f),a=c.hasEagerState?c.eagerState:n(a,f)}else d={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Zt.lanes|=f,Ks|=f;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Wn(a,e.memoizedState)&&(ke=!0,u&&(n=Rr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function sp(e){var t=Fe(),n=t.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Wn(a,t.memoizedState)||(ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Wy(e,t,n){var i=Zt,s=Fe(),a=ae;if(a){if(n===void 0)throw Error(tt(407));n=n()}else n=t();var r=!Wn((ge||s).memoizedState,n);if(r&&(s.memoizedState=n,ke=!0),s=s.queue,qm(Zy.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||He!==null&&He.memoizedState.tag&1){if(i.flags|=2048,zr(9,{destroy:void 0},Yy.bind(null,i,s,n,t),null),ye===null)throw Error(tt(349));a||(ss&127)!==0||qy(i,t,n)}return n}function qy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Zt.updateQueue,t===null?(t=ch(),Zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yy(e,t,n,i){t.value=n,t.getSnapshot=i,Jy(t)&&Ky(e)}function Zy(e,t,n){return n(function(){Jy(t)&&Ky(e)})}function Jy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wn(e,n)}catch{return!0}}function Ky(e){var t=Na(e,2);t!==null&&wn(t,e,2)}function Zp(e){var t=xn();if(typeof e=="function"){var n=e;if(e=n(),Ca){Ns(!0);try{n()}finally{Ns(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:e},t}function Qy(e,t,n,i){return e.baseState=n,Wm(e,ge,typeof i=="function"?i:as)}function FE(e,t,n,i,s){if(fh(e))throw Error(tt(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Gt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,jy(t,a)):(a.next=n.next,t.pending=n.next=a)}}function jy(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Gt.T,r={};Gt.T=r;try{var o=n(s,i),l=Gt.S;l!==null&&l(r,o),Q_(e,t,o)}catch(c){Jp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Gt.T=a}}else try{a=n(s,i),Q_(e,t,a)}catch(c){Jp(e,t,c)}}function Q_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){j_(e,t,i)},function(i){return Jp(e,t,i)}):j_(e,t,n)}function j_(e,t,n){t.status="fulfilled",t.value=n,$y(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,jy(e,n)))}function Jp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,$y(t),t=t.next;while(t!==i)}e.action=null}function $y(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function tx(e,t){return t}function $_(e,t){if(ae){var n=ye.formState;if(n!==null){t:{var i=Zt;if(ae){if(Te){e:{for(var s=Te,a=oi;s.nodeType!==8;){if(!a){s=null;break e}if(s=ci(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Te=ci(s.nextSibling),i=s.data==="F!";break t}}Zs(i)}i=!1}i&&(t=n[0])}}return n=xn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tx,lastRenderedState:t},n.queue=i,n=gx.bind(null,Zt,i),i.dispatch=n,i=Zp(!1),a=Km.bind(null,Zt,!1,i.queue),i=xn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=FE.bind(null,Zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function tv(e){var t=Fe();return ex(t,ge,e)}function ex(e,t,n){if(t=Wm(e,t,tx)[0],e=vu(as)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ol(t)}catch(r){throw r===Yr?lh:r}else i=t;t=Fe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Zt.flags|=2048,zr(9,{destroy:void 0},HE.bind(null,s,n),null)),[i,a,e]}function HE(e,t){e.action=t}function ev(e){var t=Fe(),n=ge;if(n!==null)return ex(t,n,e);Fe(),t=t.memoizedState,n=Fe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function zr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Zt.updateQueue,t===null&&(t=ch(),Zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function nx(){return Fe().memoizedState}function yu(e,t,n,i){var s=xn();Zt.flags|=e,s.memoizedState=zr(1|t,{destroy:void 0},n,i===void 0?null:i)}function hh(e,t,n,i){var s=Fe();i=i===void 0?null:i;var a=s.memoizedState.inst;ge!==null&&i!==null&&Fm(i,ge.memoizedState.deps)?s.memoizedState=zr(t,a,n,i):(Zt.flags|=e,s.memoizedState=zr(1|t,a,n,i))}function nv(e,t){yu(8390656,8,e,t)}function qm(e,t){hh(2048,8,e,t)}function VE(e){Zt.flags|=4;var t=Zt.updateQueue;if(t===null)t=ch(),Zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ix(e){var t=Fe().memoizedState;return VE({ref:t,nextImpl:e}),function(){if((le&2)!==0)throw Error(tt(440));return t.impl.apply(void 0,arguments)}}function sx(e,t){return hh(4,2,e,t)}function ax(e,t){return hh(4,4,e,t)}function rx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ox(e,t,n){n=n!=null?n.concat([e]):null,hh(4,4,rx.bind(null,t,e),n)}function Ym(){}function lx(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Fm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function cx(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Fm(t,i[1]))return i[0];if(i=e(),Ca){Ns(!0);try{e()}finally{Ns(!1)}}return n.memoizedState=[i,t],i}function Zm(e,t,n){return n===void 0||(ss&1073741824)!==0&&(se&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Qx(),Zt.lanes|=e,Ks|=e,n)}function ux(e,t,n,i){return Wn(n,t)?n:Br.current!==null?(e=Zm(e,n,i),Wn(e,t)||(ke=!0),e):(ss&42)===0||(ss&1073741824)!==0&&(se&261930)===0?(ke=!0,e.memoizedState=n):(e=Qx(),Zt.lanes|=e,Ks|=e,t)}function hx(e,t,n,i,s){var a=ce.p;ce.p=a!==0&&8>a?a:8;var r=Gt.T,o={};Gt.T=o,Km(e,!1,t,n);try{var l=s(),c=Gt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=PE(l,i);ll(e,t,u,Xn(e))}else ll(e,t,i,Xn(e))}catch(f){ll(e,t,{then:function(){},status:"rejected",reason:f},Xn())}finally{ce.p=a,r!==null&&o.types!==null&&(r.types=o.types),Gt.T=r}}function GE(){}function Kp(e,t,n,i){if(e.tag!==5)throw Error(tt(476));var s=fx(e).queue;hx(e,s,t,xa,n===null?GE:function(){return dx(e),n(i)})}function fx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:xa,baseState:xa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:xa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function dx(e){var t=fx(e);t.next===null&&(t=e.alternate.memoizedState),ll(e,t.next.queue,{},Xn())}function Jm(){return on(Tl)}function px(){return Fe().memoizedState}function mx(){return Fe().memoizedState}function kE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Xn();e=Hs(n);var i=Vs(t,e,n);i!==null&&(wn(i,t,n),al(i,t,n)),t={cache:Im()},e.payload=t;return}t=t.return}}function XE(e,t,n){var i=Xn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fh(e)?_x(t,n):(n=Dm(e,t,n,i),n!==null&&(wn(n,e,i),vx(n,t,i)))}function gx(e,t,n){var i=Xn();ll(e,t,n,i)}function ll(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fh(e))_x(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Wn(o,r))return oh(e,t,s,0),ye===null&&rh(),!1}catch{}finally{}if(n=Dm(e,t,s,i),n!==null)return wn(n,e,i),vx(n,t,i),!0}return!1}function Km(e,t,n,i){if(i={lane:2,revertLane:ag(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},fh(e)){if(t)throw Error(tt(479))}else t=Dm(e,n,i,2),t!==null&&wn(t,e,2)}function fh(e){var t=e.alternate;return e===Zt||t!==null&&t===Zt}function _x(e,t){Ur=Fu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,iy(e,n)}}var Ml={readContext:on,use:uh,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};Ml.useEffectEvent=Oe;var yx={readContext:on,use:uh,useCallback:function(e,t){return xn().memoizedState=[e,t===void 0?null:t],e},useContext:on,useEffect:nv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,yu(4194308,4,rx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yu(4194308,4,e,t)},useInsertionEffect:function(e,t){yu(4,2,e,t)},useMemo:function(e,t){var n=xn();t=t===void 0?null:t;var i=e();if(Ca){Ns(!0);try{e()}finally{Ns(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=xn();if(n!==void 0){var s=n(t);if(Ca){Ns(!0);try{n(t)}finally{Ns(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=XE.bind(null,Zt,e),[i.memoizedState,e]},useRef:function(e){var t=xn();return e={current:e},t.memoizedState=e},useState:function(e){e=Zp(e);var t=e.queue,n=gx.bind(null,Zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ym,useDeferredValue:function(e,t){var n=xn();return Zm(n,e,t)},useTransition:function(){var e=Zp(!1);return e=hx.bind(null,Zt,e.queue,!0,!1),xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Zt,s=xn();if(ae){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=t(),ye===null)throw Error(tt(349));(se&127)!==0||qy(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,nv(Zy.bind(null,i,a,e),[e]),i.flags|=2048,zr(9,{destroy:void 0},Yy.bind(null,i,a,n,t),null),n},useId:function(){var e=xn(),t=ye.identifierPrefix;if(ae){var n=Ui,i=Di;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Hu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=BE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Jm,useFormState:$_,useActionState:$_,useOptimistic:function(e){var t=xn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Km.bind(null,Zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Xm,useCacheRefresh:function(){return xn().memoizedState=kE.bind(null,Zt)},useEffectEvent:function(e){var t=xn(),n={impl:e};return t.memoizedState=n,function(){if((le&2)!==0)throw Error(tt(440));return n.impl.apply(void 0,arguments)}}},Qm={readContext:on,use:uh,useCallback:lx,useContext:on,useEffect:qm,useImperativeHandle:ox,useInsertionEffect:sx,useLayoutEffect:ax,useMemo:cx,useReducer:vu,useRef:nx,useState:function(){return vu(as)},useDebugValue:Ym,useDeferredValue:function(e,t){var n=Fe();return ux(n,ge.memoizedState,e,t)},useTransition:function(){var e=vu(as)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:Ol(e),t]},useSyncExternalStore:Wy,useId:px,useHostTransitionStatus:Jm,useFormState:tv,useActionState:tv,useOptimistic:function(e,t){var n=Fe();return Qy(n,ge,e,t)},useMemoCache:Xm,useCacheRefresh:mx};Qm.useEffectEvent=ix;var xx={readContext:on,use:uh,useCallback:lx,useContext:on,useEffect:qm,useImperativeHandle:ox,useInsertionEffect:sx,useLayoutEffect:ax,useMemo:cx,useReducer:sp,useRef:nx,useState:function(){return sp(as)},useDebugValue:Ym,useDeferredValue:function(e,t){var n=Fe();return ge===null?Zm(n,e,t):ux(n,ge.memoizedState,e,t)},useTransition:function(){var e=sp(as)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:Ol(e),t]},useSyncExternalStore:Wy,useId:px,useHostTransitionStatus:Jm,useFormState:ev,useActionState:ev,useOptimistic:function(e,t){var n=Fe();return ge!==null?Qy(n,ge,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Xm,useCacheRefresh:mx};xx.useEffectEvent=ix;function ap(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Xn(),s=Hs(i);s.payload=t,n!=null&&(s.callback=n),t=Vs(e,s,i),t!==null&&(wn(t,e,i),al(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Xn(),s=Hs(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Vs(e,s,i),t!==null&&(wn(t,e,i),al(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xn(),i=Hs(n);i.tag=2,t!=null&&(i.callback=t),t=Vs(e,i,n),t!==null&&(wn(t,e,n),al(t,e,n))}};function iv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!_l(n,i)||!_l(s,a):!0}function sv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Qp.enqueueReplaceState(t,t.state,null)}function Ra(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ae({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Sx(e){Lu(e)}function Mx(e){console.error(e)}function bx(e){Lu(e)}function Vu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function av(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function jp(e,t,n){return n=Hs(n),n.tag=3,n.payload={element:null},n.callback=function(){Vu(e,t)},n}function Ex(e){return e=Hs(e),e.tag=3,e}function Tx(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){av(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){av(t,n,i),typeof s!="function"&&(Gs===null?Gs=new Set([this]):Gs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function WE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&qr(t,n,s,!0),n=qn.current,n!==null){switch(n.tag){case 31:case 13:return li===null?qu():n.alternate===null&&Pe===0&&(Pe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Pu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),gp(e,i,s)),!1;case 22:return n.flags|=65536,i===Pu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),gp(e,i,s)),!1}throw Error(tt(435,n.tag))}return gp(e,i,s),qu(),!1}if(ae)return t=qn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Fp&&(e=Error(tt(422),{cause:i}),yl(ri(e,n)))):(i!==Fp&&(t=Error(tt(423),{cause:i}),yl(ri(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=ri(i,n),s=jp(e.stateNode,i,s),ip(e,s),Pe!==4&&(Pe=2)),!1;var a=Error(tt(520),{cause:i});if(a=ri(a,n),hl===null?hl=[a]:hl.push(a),Pe!==4&&(Pe=2),t===null)return!0;i=ri(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=jp(n.stateNode,i,e),ip(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Gs===null||!Gs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Ex(s),Tx(s,e,n,i),ip(n,s),!1}n=n.return}while(n!==null);return!1}var jm=Error(tt(461)),ke=!1;function sn(e,t,n,i){t.child=e===null?Fy(t,null,n,i):wa(t,e.child,n,i)}function rv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Aa(t),i=Hm(e,t,n,r,a,s),o=Vm(),e!==null&&!ke?(Gm(e,t,s),rs(e,t,s)):(ae&&o&&Lm(t),t.flags|=1,sn(e,t,i,s),t.child)}function ov(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Um(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Ax(e,t,a,i,s)):(e=gu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!$m(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:_l,n(r,i)&&e.ref===t.ref)return rs(e,t,s)}return t.flags|=1,e=ts(a,i),e.ref=t.ref,e.return=t,t.child=e}function Ax(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(_l(a,i)&&e.ref===t.ref)if(ke=!1,t.pendingProps=i=a,$m(e,s))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,rs(e,t,s)}return $p(e,t,n,i,s)}function wx(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return lv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_u(t,a!==null?a.cachePool:null),a!==null?K_(t,a):qp(),Gy(t);else return i=t.lanes=536870912,lv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(_u(t,a.cachePool),K_(t,a),Us(t),t.memoizedState=null):(e!==null&&_u(t,null),qp(),Us(t));return sn(e,t,s,n),t.child}function $o(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lv(e,t,n,i,s){var a=Om();return a=a===null?null:{parent:Ge._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&_u(t,null),qp(),Gy(t),e!==null&&qr(e,t,i,!0),t.childLanes=s,null}function xu(e,t){return t=Gu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cv(e,t,n){return wa(t,e.child,null,n),e=xu(t,t.pendingProps),e.flags|=2,zn(t),t.memoizedState=null,e}function qE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ae){if(i.mode==="hidden")return e=xu(t,i),t.lanes=536870912,$o(null,e);if(Yp(t),(e=Te)?(e=yS(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ys!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},n=Ly(e),n.return=t,t.child=n,rn=t,Te=null)):e=null,e===null)throw Zs(t);return t.lanes=536870912,null}return xu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Yp(t),s)if(t.flags&256)t.flags&=-257,t=cv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(tt(558));else if(ke||qr(e,t,n,!1),s=(n&e.childLanes)!==0,ke||s){if(i=ye,i!==null&&(r=sy(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Na(e,r),wn(i,e,r),jm;qu(),t=cv(e,t,n)}else e=a.treeContext,Te=ci(r.nextSibling),rn=t,ae=!0,Fs=null,oi=!1,e!==null&&Iy(t,e),t=xu(t,i),t.flags|=4096;return t}return e=ts(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Su(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(tt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function $p(e,t,n,i,s){return Aa(t),n=Hm(e,t,n,i,void 0,s),i=Vm(),e!==null&&!ke?(Gm(e,t,s),rs(e,t,s)):(ae&&i&&Lm(t),t.flags|=1,sn(e,t,n,s),t.child)}function uv(e,t,n,i,s,a){return Aa(t),t.updateQueue=null,n=Xy(t,i,n,s),ky(e),i=Vm(),e!==null&&!ke?(Gm(e,t,a),rs(e,t,a)):(ae&&i&&Lm(t),t.flags|=1,sn(e,t,n,a),t.child)}function hv(e,t,n,i,s){if(Aa(t),t.stateNode===null){var a=Mr,r=n.contextType;typeof r=="object"&&r!==null&&(a=on(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Qp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Bm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?on(r):Mr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ap(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Qp.enqueueReplaceState(a,a.state,null),ol(t,i,a,s),rl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Ra(n,o);a.props=l;var c=a.context,u=n.contextType;r=Mr,typeof u=="object"&&u!==null&&(r=on(u));var f=n.getDerivedStateFromProps;u=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&sv(t,a,i,r),Cs=!1;var d=t.memoizedState;a.state=d,ol(t,i,a,s),rl(),c=t.memoizedState,o||d!==c||Cs?(typeof f=="function"&&(ap(t,n,f,i),c=t.memoizedState),(l=Cs||iv(t,n,l,i,d,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Xp(e,t),r=t.memoizedProps,u=Ra(n,r),a.props=u,f=t.pendingProps,d=a.context,c=n.contextType,l=Mr,typeof c=="object"&&c!==null&&(l=on(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==f||d!==l)&&sv(t,a,i,l),Cs=!1,d=t.memoizedState,a.state=d,ol(t,i,a,s),rl();var p=t.memoizedState;r!==f||d!==p||Cs||e!==null&&e.dependencies!==null&&Ou(e.dependencies)?(typeof o=="function"&&(ap(t,n,o,i),p=t.memoizedState),(u=Cs||iv(t,n,u,i,d,p,l)||e!==null&&e.dependencies!==null&&Ou(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Su(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=wa(t,e.child,null,s),t.child=wa(t,null,n,s)):sn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=rs(e,t,s),e}function fv(e,t,n,i){return Ta(),t.flags|=256,sn(e,t,n,i),t.child}var rp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function op(e){return{baseLanes:e,cachePool:Py()}}function lp(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Hn),e}function Cx(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ae){if(s?Ds(t):Us(t),(e=Te)?(e=yS(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ys!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},n=Ly(e),n.return=t,t.child=n,rn=t,Te=null)):e=null,e===null)throw Zs(t);return dm(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Us(t),s=t.mode,o=Gu({mode:"hidden",children:o},s),i=Sa(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=op(n),i.childLanes=lp(e,r,n),t.memoizedState=rp,$o(null,i)):(Ds(t),tm(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Ds(t),t.flags&=-257,t=cp(e,t,n)):t.memoizedState!==null?(Us(t),t.child=e.child,t.flags|=128,t=null):(Us(t),o=i.fallback,s=t.mode,i=Gu({mode:"visible",children:i.children},s),o=Sa(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,wa(t,e.child,null,n),i=t.child,i.memoizedState=op(n),i.childLanes=lp(e,r,n),t.memoizedState=rp,t=$o(null,i));else if(Ds(t),dm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(tt(419)),i.stack="",i.digest=r,yl({value:i,source:null,stack:null}),t=cp(e,t,n)}else if(ke||qr(e,t,n,!1),r=(n&e.childLanes)!==0,ke||r){if(r=ye,r!==null&&(i=sy(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Na(e,i),wn(r,e,i),jm;fm(o)||qu(),t=cp(e,t,n)}else fm(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Te=ci(o.nextSibling),rn=t,ae=!0,Fs=null,oi=!1,e!==null&&Iy(t,e),t=tm(t,i.children),t.flags|=4096);return t}return s?(Us(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=ts(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ts(c,o):(o=Sa(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,$o(null,i),i=t.child,o=e.child.memoizedState,o===null?o=op(n):(s=o.cachePool,s!==null?(l=Ge._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=Py(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=lp(e,r,n),t.memoizedState=rp,$o(e.child,i)):(Ds(t),n=e.child,e=n.sibling,n=ts(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function tm(e,t){return t=Gu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gu(e,t){return e=Fn(22,e,null,t),e.lanes=0,e}function cp(e,t,n){return wa(t,e.child,null,n),e=tm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Vp(e.return,t,n)}function up(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Rx(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=ze.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Se(ze,r),sn(e,t,i,n),i=ae?vl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dv(e,n,t);else if(e.tag===19)dv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&zu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),up(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&zu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}up(t,!0,n,null,a,i);break;case"together":up(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function rs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ks|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(qr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(tt(153));if(t.child!==null){for(e=t.child,n=ts(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ts(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $m(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ou(e)))}function YE(e,t,n){switch(t.tag){case 3:Cu(t,t.stateNode.containerInfo),Rs(t,Ge,e.memoizedState.cache),Ta();break;case 27:case 5:Cp(t);break;case 4:Cu(t,t.stateNode.containerInfo);break;case 10:Rs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yp(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ds(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Cx(e,t,n):(Ds(t),e=rs(e,t,n),e!==null?e.sibling:null);Ds(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(qr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Rx(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Se(ze,ze.current),i)break;return null;case 22:return t.lanes=0,wx(e,t,n,t.pendingProps);case 24:Rs(t,Ge,e.memoizedState.cache)}return rs(e,t,n)}function Dx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!$m(e,n)&&(t.flags&128)===0)return ke=!1,YE(e,t,n);ke=(e.flags&131072)!==0}else ke=!1,ae&&(t.flags&1048576)!==0&&Ny(t,vl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=va(t.elementType),t.type=e,typeof e=="function")Um(e)?(i=Ra(e,i),t.tag=1,t=hv(null,t,e,i,n)):(t.tag=0,t=$p(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===_m){t.tag=11,t=rv(null,t,e,i,n);break t}else if(s===vm){t.tag=14,t=ov(null,t,e,i,n);break t}}throw t=Ap(e)||e,Error(tt(306,t,""))}}return t;case 0:return $p(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Ra(i,t.pendingProps),hv(e,t,i,s,n);case 3:t:{if(Cu(t,t.stateNode.containerInfo),e===null)throw Error(tt(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Xp(e,t),ol(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Rs(t,Ge,i),i!==a.cache&&Gp(t,[Ge],n,!0),rl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=fv(e,t,i,n);break t}else if(i!==s){s=ri(Error(tt(424)),t),yl(s),t=fv(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=ci(e.firstChild),rn=t,ae=!0,Fs=null,oi=!0,n=Fy(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ta(),i===s){t=rs(e,t,n);break t}sn(e,t,i,n)}t=t.child}return t;case 26:return Su(e,t),e===null?(n=Ov(t.type,null,t.pendingProps,null))?t.memoizedState=n:ae||(n=t.type,e=t.pendingProps,i=Ku(zs.current).createElement(n),i[an]=t,i[Cn]=e,ln(i,n,e),Qe(i),t.stateNode=i):t.memoizedState=Ov(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Cp(t),e===null&&ae&&(i=t.stateNode=xS(t.type,t.pendingProps,zs.current),rn=t,oi=!0,s=Te,js(t.type)?(pm=s,Te=ci(i.firstChild)):Te=s),sn(e,t,t.pendingProps.children,n),Su(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ae&&((s=i=Te)&&(i=ST(i,t.type,t.pendingProps,oi),i!==null?(t.stateNode=i,rn=t,Te=ci(i.firstChild),oi=!1,s=!0):s=!1),s||Zs(t)),Cp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,um(s,a)?i=null:r!==null&&um(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Hm(e,t,zE,null,null,n),Tl._currentValue=s),Su(e,t),sn(e,t,i,n),t.child;case 6:return e===null&&ae&&((e=n=Te)&&(n=MT(n,t.pendingProps,oi),n!==null?(t.stateNode=n,rn=t,Te=null,e=!0):e=!1),e||Zs(t)),null;case 13:return Cx(e,t,n);case 4:return Cu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=wa(t,null,i,n):sn(e,t,i,n),t.child;case 11:return rv(e,t,t.type,t.pendingProps,n);case 7:return sn(e,t,t.pendingProps,n),t.child;case 8:return sn(e,t,t.pendingProps.children,n),t.child;case 12:return sn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Rs(t,t.type,i.value),sn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Aa(t),s=on(s),i=i(s),t.flags|=1,sn(e,t,i,n),t.child;case 14:return ov(e,t,t.type,t.pendingProps,n);case 15:return Ax(e,t,t.type,t.pendingProps,n);case 19:return Rx(e,t,n);case 31:return qE(e,t,n);case 22:return wx(e,t,n,t.pendingProps);case 24:return Aa(t),i=on(Ge),e===null?(s=Om(),s===null&&(s=ye,a=Im(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Bm(t),Rs(t,Ge,s)):((e.lanes&n)!==0&&(Xp(e,t),ol(t,null,null,n),rl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Rs(t,Ge,i)):(i=a.cache,Rs(t,Ge,i),i!==s.cache&&Gp(t,[Ge],n,!0))),sn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function Wi(e){e.flags|=4}function hp(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(tS())e.flags|=8192;else throw ba=Pu,Pm}else e.flags&=-16777217}function pv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bS(t))if(tS())e.flags|=8192;else throw ba=Pu,Pm}function au(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ey():536870912,e.lanes|=t,Fr|=t)}function qo(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function ZE(e,t,n){var i=t.pendingProps;switch(Nm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),es(Ge),Nr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ur(t)?Wi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,np())),Ee(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Wi(t),a!==null?(Ee(t),pv(t,a)):(Ee(t),hp(t,s,null,i,n))):a?a!==e.memoizedState?(Wi(t),Ee(t),pv(t,a)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Wi(t),Ee(t),hp(t,s,e,i,n)),null;case 27:if(Ru(t),n=zs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Wi(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Ee(t),null}e=Ni.current,ur(t)?k_(t,e):(e=xS(s,i,n),t.stateNode=e,Wi(t))}return Ee(t),null;case 5:if(Ru(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Wi(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Ee(t),null}if(a=Ni.current,ur(t))k_(t,a);else{var r=Ku(zs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[an]=t,a[Cn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(ln(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Wi(t)}}return Ee(t),hp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Wi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(tt(166));if(e=zs.current,ur(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=rn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[an]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||gS(e.nodeValue,n)),e||Zs(t,!0)}else e=Ku(e).createTextNode(i),e[an]=t,t.stateNode=e}return Ee(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ur(t),n!==null){if(e===null){if(!i)throw Error(tt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(557));e[an]=t}else Ta(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else n=np(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zn(t),t):(zn(t),null);if((t.flags&128)!==0)throw Error(tt(558))}return Ee(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=ur(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(tt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[an]=t}else Ta(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),s=!1}else s=np(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(zn(t),t):(zn(t),null)}return zn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),au(t,t.updateQueue),Ee(t),null);case 4:return Nr(),e===null&&rg(t.stateNode.containerInfo),Ee(t),null;case 10:return es(t.type),Ee(t),null;case 19:if(je(ze),i=t.memoizedState,i===null)return Ee(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)qo(i,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=zu(e),a!==null){for(t.flags|=128,qo(i,!1),e=a.updateQueue,t.updateQueue=e,au(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Uy(n,e),n=n.sibling;return Se(ze,ze.current&1|2),ae&&Ji(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Vn()>Xu&&(t.flags|=128,s=!0,qo(i,!1),t.lanes=4194304)}else{if(!s)if(e=zu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,au(t,e),qo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ae)return Ee(t),null}else 2*Vn()-i.renderingStartTime>Xu&&n!==536870912&&(t.flags|=128,s=!0,qo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Vn(),e.sibling=null,n=ze.current,Se(ze,s?n&1|2:n&1),ae&&Ji(t,i.treeForkCount),e):(Ee(t),null);case 22:case 23:return zn(t),zm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),n=t.updateQueue,n!==null&&au(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&je(Ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),es(Ge),Ee(t),null;case 25:return null;case 30:return null}throw Error(tt(156,t.tag))}function JE(e,t){switch(Nm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return es(Ge),Nr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ru(t),null;case 31:if(t.memoizedState!==null){if(zn(t),t.alternate===null)throw Error(tt(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(ze),null;case 4:return Nr(),null;case 10:return es(t.type),null;case 22:case 23:return zn(t),zm(),e!==null&&je(Ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return es(Ge),null;case 25:return null;default:return null}}function Ux(e,t){switch(Nm(t),t.tag){case 3:es(Ge),Nr();break;case 26:case 27:case 5:Ru(t);break;case 4:Nr();break;case 31:t.memoizedState!==null&&zn(t);break;case 13:zn(t);break;case 19:je(ze);break;case 10:es(t.type);break;case 22:case 23:zn(t),zm(),e!==null&&je(Ma);break;case 24:es(Ge)}}function Pl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){he(t,t.return,o)}}function Js(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){he(s,l,u)}}}i=i.next}while(i!==a)}}catch(u){he(t,t.return,u)}}function Lx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Vy(t,n)}catch(i){he(e,e.return,i)}}}function Nx(e,t,n){n.props=Ra(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){he(e,t,i)}}function cl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){he(e,t,s)}}function Li(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){he(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){he(e,t,s)}else n.current=null}function Ix(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){he(e,e.return,s)}}function fp(e,t,n){try{var i=e.stateNode;mT(i,e.type,n,t),i[Cn]=t}catch(s){he(e,e.return,s)}}function Ox(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&js(e.type)||e.tag===4}function dp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ox(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&js(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function em(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji));else if(i!==4&&(i===27&&js(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(em(e,t,n),e=e.sibling;e!==null;)em(e,t,n),e=e.sibling}function ku(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&js(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ku(e,t,n),e=e.sibling;e!==null;)ku(e,t,n),e=e.sibling}function Px(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);ln(t,i,n),t[an]=e,t[Cn]=n}catch(a){he(e,e.return,a)}}var Ki=!1,Ve=!1,pp=!1,mv=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function KE(e,t){if(e=e.containerInfo,lm=th,e=by(e),Cm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,u=0,f=e,d=null;e:for(;;){for(var p;f!==n||s!==0&&f.nodeType!==3||(o=r+s),f!==a||i!==0&&f.nodeType!==3||(l=r+i),f.nodeType===3&&(r+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===e)break e;if(d===n&&++c===s&&(o=r),d===a&&++u===i&&(l=r),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cm={focusedElem:e,selectionRange:n},th=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=Ra(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(x){he(n,n.return,x)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)hm(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(tt(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function Bx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Yi(e,n),i&4&&Pl(5,n);break;case 1:if(Yi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){he(n,n.return,r)}else{var s=Ra(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){he(n,n.return,r)}}i&64&&Lx(n),i&512&&cl(n,n.return);break;case 3:if(Yi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Vy(e,t)}catch(r){he(n,n.return,r)}}break;case 27:t===null&&i&4&&Px(n);case 26:case 5:Yi(e,n),t===null&&i&4&&Ix(n),i&512&&cl(n,n.return);break;case 12:Yi(e,n);break;case 31:Yi(e,n),i&4&&Hx(e,n);break;case 13:Yi(e,n),i&4&&Vx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=aT.bind(null,n),bT(e,n))));break;case 22:if(i=n.memoizedState!==null||Ki,!i){t=t!==null&&t.memoizedState!==null||Ve,s=Ki;var a=Ve;Ki=i,(Ve=t)&&!a?Zi(e,n,(n.subtreeFlags&8772)!==0):Yi(e,n),Ki=s,Ve=a}break;case 30:break;default:Yi(e,n)}}function zx(e){var t=e.alternate;t!==null&&(e.alternate=null,zx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mm(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,Tn=!1;function qi(e,t,n){for(n=n.child;n!==null;)Fx(e,t,n),n=n.sibling}function Fx(e,t,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 26:Ve||Li(n,t),qi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Li(n,t);var i=De,s=Tn;js(n.type)&&(De=n.stateNode,Tn=!1),qi(e,t,n),dl(n.stateNode),De=i,Tn=s;break;case 5:Ve||Li(n,t);case 6:if(i=De,s=Tn,De=null,qi(e,t,n),De=i,Tn=s,De!==null)if(Tn)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(n.stateNode)}catch(a){he(n,t,a)}else try{De.removeChild(n.stateNode)}catch(a){he(n,t,a)}break;case 18:De!==null&&(Tn?(e=De,Dv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),kr(e)):Dv(De,n.stateNode));break;case 4:i=De,s=Tn,De=n.stateNode.containerInfo,Tn=!0,qi(e,t,n),De=i,Tn=s;break;case 0:case 11:case 14:case 15:Js(2,n,t),Ve||Js(4,n,t),qi(e,t,n);break;case 1:Ve||(Li(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Nx(n,t,i)),qi(e,t,n);break;case 21:qi(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,qi(e,t,n),Ve=i;break;default:qi(e,t,n)}}function Hx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{kr(e)}catch(n){he(t,t.return,n)}}}function Vx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kr(e)}catch(n){he(t,t.return,n)}}function QE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mv),t;default:throw Error(tt(435,e.tag))}}function ru(e,t){var n=QE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=rT.bind(null,e,i);i.then(s,s)}})}function bn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(js(o.type)){De=o.stateNode,Tn=!1;break t}break;case 5:De=o.stateNode,Tn=!1;break t;case 3:case 4:De=o.stateNode.containerInfo,Tn=!0;break t}o=o.return}if(De===null)throw Error(tt(160));Fx(a,r,s),De=null,Tn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Gx(t,e),t=t.sibling}var _i=null;function Gx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bn(t,e),En(e),i&4&&(Js(3,e,e.return),Pl(3,e),Js(5,e,e.return));break;case 1:bn(t,e),En(e),i&512&&(Ve||n===null||Li(n,n.return)),i&64&&Ki&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=_i;if(bn(t,e),En(e),i&512&&(Ve||n===null||Li(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[Ll]||a[an]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),ln(a,i,n),a[an]=e,Qe(a),i=a;break t;case"link":var r=Bv("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),ln(a,i,n),s.head.appendChild(a);break;case"meta":if(r=Bv("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),ln(a,i,n),s.head.appendChild(a);break;default:throw Error(tt(468,i))}a[an]=e,Qe(a),i=a}e.stateNode=i}else zv(s,e.type,e.stateNode);else e.stateNode=Pv(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?zv(s,e.type,e.stateNode):Pv(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&fp(e,e.memoizedProps,n.memoizedProps)}break;case 27:bn(t,e),En(e),i&512&&(Ve||n===null||Li(n,n.return)),n!==null&&i&4&&fp(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bn(t,e),En(e),i&512&&(Ve||n===null||Li(n,n.return)),e.flags&32){s=e.stateNode;try{Or(s,"")}catch(_){he(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,fp(e,s,n!==null?n.memoizedProps:s)),i&1024&&(pp=!0);break;case 6:if(bn(t,e),En(e),i&4){if(e.stateNode===null)throw Error(tt(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){he(e,e.return,_)}}break;case 3:if(Eu=null,s=_i,_i=Qu(t.containerInfo),bn(t,e),_i=s,En(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(_){he(e,e.return,_)}pp&&(pp=!1,kx(e));break;case 4:i=_i,_i=Qu(e.stateNode.containerInfo),bn(t,e),En(e),_i=i;break;case 12:bn(t,e),En(e);break;case 31:bn(t,e),En(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ru(e,i)));break;case 13:bn(t,e),En(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(dh=Vn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ru(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Ki,u=Ve;if(Ki=c||s,Ve=u||l,bn(t,e),Ve=u,Ki=c,En(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||Ki||Ve||ya(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var f=l.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(_){he(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){he(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;s?Uv(p,!0):Uv(l.stateNode,!1)}catch(_){he(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ru(e,n))));break;case 19:bn(t,e),En(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ru(e,i)));break;case 30:break;case 21:break;default:bn(t,e),En(e)}}function En(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Ox(i)){n=i;break}i=i.return}if(n==null)throw Error(tt(160));switch(n.tag){case 27:var s=n.stateNode,a=dp(e);ku(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Or(r,""),n.flags&=-33);var o=dp(e);ku(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=dp(e);em(e,c,l);break;default:throw Error(tt(161))}}catch(u){he(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Bx(e,t.alternate,t),t=t.sibling}function ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Js(4,t,t.return),ya(t);break;case 1:Li(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Nx(t,t.return,n),ya(t);break;case 27:dl(t.stateNode);case 26:case 5:Li(t,t.return),ya(t);break;case 22:t.memoizedState===null&&ya(t);break;case 30:ya(t);break;default:ya(t)}e=e.sibling}}function Zi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(s,a,n),Pl(4,a);break;case 1:if(Zi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){he(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Hy(l[s],o)}catch(c){he(i,i.return,c)}}n&&r&64&&Lx(a),cl(a,a.return);break;case 27:Px(a);case 26:case 5:Zi(s,a,n),n&&i===null&&r&4&&Ix(a),cl(a,a.return);break;case 12:Zi(s,a,n);break;case 31:Zi(s,a,n),n&&r&4&&Hx(s,a);break;case 13:Zi(s,a,n),n&&r&4&&Vx(s,a);break;case 22:a.memoizedState===null&&Zi(s,a,n),cl(a,a.return);break;case 30:break;default:Zi(s,a,n)}t=t.sibling}}function tg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Il(n))}function eg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e))}function gi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xx(e,t,n,i),t=t.sibling}function Xx(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:gi(e,t,n,i),s&2048&&Pl(9,t);break;case 1:gi(e,t,n,i);break;case 3:gi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e)));break;case 12:if(s&2048){gi(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){he(t,t.return,l)}}else gi(e,t,n,i);break;case 31:gi(e,t,n,i);break;case 13:gi(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?gi(e,t,n,i):ul(e,t):a._visibility&2?gi(e,t,n,i):(a._visibility|=2,fr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&tg(r,t);break;case 24:gi(e,t,n,i),s&2048&&eg(t.alternate,t);break;default:gi(e,t,n,i)}}function fr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:fr(a,r,o,l,s),Pl(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?fr(a,r,o,l,s):ul(a,r):(u._visibility|=2,fr(a,r,o,l,s)),s&&c&2048&&tg(r.alternate,r);break;case 24:fr(a,r,o,l,s),s&&c&2048&&eg(r.alternate,r);break;default:fr(a,r,o,l,s)}t=t.sibling}}function ul(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:ul(n,i),s&2048&&tg(i.alternate,i);break;case 24:ul(n,i),s&2048&&eg(i.alternate,i);break;default:ul(n,i)}t=t.sibling}}var tl=8192;function hr(e,t,n){if(e.subtreeFlags&tl)for(e=e.child;e!==null;)Wx(e,t,n),e=e.sibling}function Wx(e,t,n){switch(e.tag){case 26:hr(e,t,n),e.flags&tl&&e.memoizedState!==null&&OT(n,_i,e.memoizedState,e.memoizedProps);break;case 5:hr(e,t,n);break;case 3:case 4:var i=_i;_i=Qu(e.stateNode.containerInfo),hr(e,t,n),_i=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=tl,tl=16777216,hr(e,t,n),tl=i):hr(e,t,n));break;default:hr(e,t,n)}}function qx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ke=i,Zx(i,e)}qx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yx(e),e=e.sibling}function Yx(e){switch(e.tag){case 0:case 11:case 15:Yo(e),e.flags&2048&&Js(9,e,e.return);break;case 3:Yo(e);break;case 12:Yo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mu(e)):Yo(e);break;default:Yo(e)}}function Mu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ke=i,Zx(i,e)}qx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Js(8,t,t.return),Mu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Mu(t));break;default:Mu(t)}e=e.sibling}}function Zx(e,t){for(;Ke!==null;){var n=Ke;switch(n.tag){case 0:case 11:case 15:Js(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Il(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ke=i;else t:for(n=e;Ke!==null;){i=Ke;var s=i.sibling,a=i.return;if(zx(i),i===n){Ke=null;break t}if(s!==null){s.return=a,Ke=s;break t}Ke=a}}}var jE={getCacheForType:function(e){var t=on(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return on(Ge).controller.signal}},$E=typeof WeakMap=="function"?WeakMap:Map,le=0,ye=null,ee=null,se=0,ue=0,Bn=null,Os=!1,Zr=!1,ng=!1,os=0,Pe=0,Ks=0,Ea=0,ig=0,Hn=0,Fr=0,hl=null,An=null,nm=!1,dh=0,Jx=0,Xu=1/0,Wu=null,Gs=null,We=0,ks=null,Hr=null,ns=0,im=0,sm=null,Kx=null,fl=0,am=null;function Xn(){return(le&2)!==0&&se!==0?se&-se:Gt.T!==null?ag():ay()}function Qx(){if(Hn===0)if((se&536870912)===0||ae){var e=Kc;Kc<<=1,(Kc&3932160)===0&&(Kc=262144),Hn=e}else Hn=536870912;return e=qn.current,e!==null&&(e.flags|=32),Hn}function wn(e,t,n){(e===ye&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(Vr(e,0),Ps(e,se,Hn,!1)),Ul(e,n),((le&2)===0||e!==ye)&&(e===ye&&((le&2)===0&&(Ea|=n),Pe===4&&Ps(e,se,Hn,!1)),Oi(e))}function jx(e,t,n){if((le&6)!==0)throw Error(tt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Dl(e,t),s=i?nT(e,t):mp(e,t,!0),a=i;do{if(s===0){Zr&&!i&&Ps(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!tT(n)){s=mp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=hl;var l=o.current.memoizedState.isDehydrated;if(l&&(Vr(o,r).flags|=256),r=mp(o,r,!1),r!==2){if(ng&&!l){o.errorRecoveryDisabledLanes|=a,Ea|=a,s=4;break t}a=An,An=s,a!==null&&(An===null?An=a:An.push.apply(An,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Vr(e,0),Ps(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t)break;case 6:Ps(i,t,Hn,!Os);break t;case 2:An=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(s=dh+300-Vn(),10<s)){if(Ps(i,t,Hn,!Os),nh(i,0,!0)!==0)break t;ns=t,i.timeoutHandle=vS(gv.bind(null,i,n,An,Wu,nm,t,Hn,Ea,Fr,Os,a,"Throttled",-0,0),s);break t}gv(i,n,An,Wu,nm,t,Hn,Ea,Fr,Os,a,null,-0,0)}}break}while(!0);Oi(e)}function gv(e,t,n,i,s,a,r,o,l,c,u,f,d,p){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Wx(t,a,f);var _=(a&62914560)===a?dh-Vn():(a&4194048)===a?Jx-Vn():0;if(_=PT(f,_),_!==null){ns=a,e.cancelPendingCommit=_(vv.bind(null,e,t,a,n,i,s,r,o,l,u,f,null,d,p)),Ps(e,a,r,!c);return}}vv(e,t,a,n,i,s,r,o,l)}function tT(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Wn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ps(e,t,n,i){t&=~ig,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-kn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&ny(e,n,t)}function ph(){return(le&6)===0?(Bl(0,!1),!1):!0}function sg(){if(ee!==null){if(ue===0)var e=ee.return;else e=ee,$i=Ia=null,km(e),Dr=null,xl=0,e=ee;for(;e!==null;)Ux(e.alternate,e),e=e.return;ee=null}}function Vr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,vT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ns=0,sg(),ye=e,ee=n=ts(e.current,null),se=t,ue=0,Bn=null,Os=!1,Zr=Dl(e,t),ng=!1,Fr=Hn=ig=Ea=Ks=Pe=0,An=hl=null,nm=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-kn(i),a=1<<s;t|=e[s],i&=~a}return os=t,rh(),n}function $x(e,t){Zt=null,Gt.H=Ml,t===Yr||t===lh?(t=Z_(),ue=3):t===Pm?(t=Z_(),ue=4):ue=t===jm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bn=t,ee===null&&(Pe=1,Vu(e,ri(t,e.current)))}function tS(){var e=qn.current;return e===null?!0:(se&4194048)===se?li===null:(se&62914560)===se||(se&536870912)!==0?e===li:!1}function eS(){var e=Gt.H;return Gt.H=Ml,e===null?Ml:e}function nS(){var e=Gt.A;return Gt.A=jE,e}function qu(){Pe=4,Os||(se&4194048)!==se&&qn.current!==null||(Zr=!0),(Ks&134217727)===0&&(Ea&134217727)===0||ye===null||Ps(ye,se,Hn,!1)}function mp(e,t,n){var i=le;le|=2;var s=eS(),a=nS();(ye!==e||se!==t)&&(Wu=null,Vr(e,t)),t=!1;var r=Pe;t:do try{if(ue!==0&&ee!==null){var o=ee,l=Bn;switch(ue){case 8:sg(),r=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(t=!0);var c=ue;if(ue=0,Bn=null,Tr(e,o,l,c),n&&Zr){r=0;break t}break;default:c=ue,ue=0,Bn=null,Tr(e,o,l,c)}}eT(),r=Pe;break}catch(u){$x(e,u)}while(!0);return t&&e.shellSuspendCounter++,$i=Ia=null,le=i,Gt.H=s,Gt.A=a,ee===null&&(ye=null,se=0,rh()),r}function eT(){for(;ee!==null;)iS(ee)}function nT(e,t){var n=le;le|=2;var i=eS(),s=nS();ye!==e||se!==t?(Wu=null,Xu=Vn()+500,Vr(e,t)):Zr=Dl(e,t);t:do try{if(ue!==0&&ee!==null){t=ee;var a=Bn;e:switch(ue){case 1:ue=0,Bn=null,Tr(e,t,a,1);break;case 2:case 9:if(Y_(a)){ue=0,Bn=null,_v(t);break}t=function(){ue!==2&&ue!==9||ye!==e||(ue=7),Oi(e)},a.then(t,t);break t;case 3:ue=7;break t;case 4:ue=5;break t;case 7:Y_(a)?(ue=0,Bn=null,_v(t)):(ue=0,Bn=null,Tr(e,t,a,7));break;case 5:var r=null;switch(ee.tag){case 26:r=ee.memoizedState;case 5:case 27:var o=ee;if(r?bS(r):o.stateNode.complete){ue=0,Bn=null;var l=o.sibling;if(l!==null)ee=l;else{var c=o.return;c!==null?(ee=c,mh(c)):ee=null}break e}}ue=0,Bn=null,Tr(e,t,a,5);break;case 6:ue=0,Bn=null,Tr(e,t,a,6);break;case 8:sg(),Pe=6;break t;default:throw Error(tt(462))}}iT();break}catch(u){$x(e,u)}while(!0);return $i=Ia=null,Gt.H=i,Gt.A=s,le=n,ee!==null?0:(ye=null,se=0,rh(),Pe)}function iT(){for(;ee!==null&&!A1();)iS(ee)}function iS(e){var t=Dx(e.alternate,e,os);e.memoizedProps=e.pendingProps,t===null?mh(e):ee=t}function _v(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=uv(n,t,t.pendingProps,t.type,void 0,se);break;case 11:t=uv(n,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:km(t);default:Ux(n,t),t=ee=Uy(t,os),t=Dx(n,t,os)}e.memoizedProps=e.pendingProps,t===null?mh(e):ee=t}function Tr(e,t,n,i){$i=Ia=null,km(t),Dr=null,xl=0;var s=t.return;try{if(WE(e,s,t,n,se)){Pe=1,Vu(e,ri(n,e.current)),ee=null;return}}catch(a){if(s!==null)throw ee=s,a;Pe=1,Vu(e,ri(n,e.current)),ee=null;return}t.flags&32768?(ae||i===1?e=!0:Zr||(se&536870912)!==0?e=!1:(Os=e=!0,(i===2||i===9||i===3||i===6)&&(i=qn.current,i!==null&&i.tag===13&&(i.flags|=16384))),sS(t,e)):mh(t)}function mh(e){var t=e;do{if((t.flags&32768)!==0){sS(t,Os);return}e=t.return;var n=ZE(t.alternate,t,os);if(n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);Pe===0&&(Pe=5)}function sS(e,t){do{var n=JE(e.alternate,e);if(n!==null){n.flags&=32767,ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ee=e;return}ee=e=n}while(e!==null);Pe=6,ee=null}function vv(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do gh();while(We!==0);if((le&6)!==0)throw Error(tt(327));if(t!==null){if(t===e.current)throw Error(tt(177));if(a=t.lanes|t.childLanes,a|=Rm,P1(e,n,a,r,o,l),e===ye&&(ee=ye=null,se=0),Hr=t,ks=e,ns=n,im=a,sm=s,Kx=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,oT(Du,function(){return cS(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Gt.T,Gt.T=null,s=ce.p,ce.p=2,r=le,le|=4;try{KE(e,t,n)}finally{le=r,ce.p=s,Gt.T=i}}We=1,aS(),rS(),oS()}}function aS(){if(We===1){We=0;var e=ks,t=Hr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Gt.T,Gt.T=null;var i=ce.p;ce.p=2;var s=le;le|=4;try{Gx(t,e);var a=cm,r=by(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&My(o.ownerDocument.documentElement,o)){if(l!==null&&Cm(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var f=o.ownerDocument||document,d=f&&f.defaultView||window;if(d.getSelection){var p=d.getSelection(),_=o.textContent.length,x=Math.min(l.start,_),m=l.end===void 0?x:Math.min(l.end,_);!p.extend&&x>m&&(r=m,m=x,x=r);var h=H_(o,x),g=H_(o,m);if(h&&g&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var v=f.createRange();v.setStart(h.node,h.offset),p.removeAllRanges(),x>m?(p.addRange(v),p.extend(g.node,g.offset)):(v.setEnd(g.node,g.offset),p.addRange(v))}}}}for(f=[],p=o;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var y=f[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}th=!!lm,cm=lm=null}finally{le=s,ce.p=i,Gt.T=n}}e.current=t,We=2}}function rS(){if(We===2){We=0;var e=ks,t=Hr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Gt.T,Gt.T=null;var i=ce.p;ce.p=2;var s=le;le|=4;try{Bx(e,t.alternate,t)}finally{le=s,ce.p=i,Gt.T=n}}We=3}}function oS(){if(We===4||We===3){We=0,w1();var e=ks,t=Hr,n=ns,i=Kx;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Hr=ks=null,lS(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Gs=null),Sm(n),t=t.stateNode,Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Gt.T,s=ce.p,ce.p=2,Gt.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Gt.T=t,ce.p=s}}(ns&3)!==0&&gh(),Oi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===am?fl++:(fl=0,am=e):fl=0,Bl(0,!1)}}function lS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Il(t)))}function gh(){return aS(),rS(),oS(),cS()}function cS(){if(We!==5)return!1;var e=ks,t=im;im=0;var n=Sm(ns),i=Gt.T,s=ce.p;try{ce.p=32>n?32:n,Gt.T=null,n=sm,sm=null;var a=ks,r=ns;if(We=0,Hr=ks=null,ns=0,(le&6)!==0)throw Error(tt(331));var o=le;if(le|=4,Yx(a.current),Xx(a,a.current,r,n),le=o,Bl(0,!1),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(Rl,a)}catch{}return!0}finally{ce.p=s,Gt.T=i,lS(e,t)}}function yv(e,t,n){t=ri(n,t),t=jp(e.stateNode,t,2),e=Vs(e,t,2),e!==null&&(Ul(e,2),Oi(e))}function he(e,t,n){if(e.tag===3)yv(e,e,n);else for(;t!==null;){if(t.tag===3){yv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gs===null||!Gs.has(i))){e=ri(n,e),n=Ex(2),i=Vs(t,n,2),i!==null&&(Tx(n,i,t,e),Ul(i,2),Oi(i));break}}t=t.return}}function gp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new $E;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(ng=!0,s.add(n),e=sT.bind(null,e,t,n),t.then(e,e))}function sT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ye===e&&(se&n)===n&&(Pe===4||Pe===3&&(se&62914560)===se&&300>Vn()-dh?(le&2)===0&&Vr(e,0):ig|=n,Fr===se&&(Fr=0)),Oi(e)}function uS(e,t){t===0&&(t=ey()),e=Na(e,t),e!==null&&(Ul(e,t),Oi(e))}function aT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uS(e,n)}function rT(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(tt(314))}i!==null&&i.delete(t),uS(e,n)}function oT(e,t){return ym(e,t)}var Yu=null,dr=null,rm=!1,Zu=!1,_p=!1,Bs=0;function Oi(e){e!==dr&&e.next===null&&(dr===null?Yu=dr=e:dr=dr.next=e),Zu=!0,rm||(rm=!0,cT())}function Bl(e,t){if(!_p&&Zu){_p=!0;do for(var n=!1,i=Yu;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-kn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,xv(i,a))}else a=se,a=nh(i,i===ye?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Dl(i,a)||(n=!0,xv(i,a));i=i.next}while(n);_p=!1}}function lT(){hS()}function hS(){Zu=rm=!1;var e=0;Bs!==0&&_T()&&(e=Bs);for(var t=Vn(),n=null,i=Yu;i!==null;){var s=i.next,a=fS(i,t);a===0?(i.next=null,n===null?Yu=s:n.next=s,s===null&&(dr=n)):(n=i,(e!==0||(a&3)!==0)&&(Zu=!0)),i=s}We!==0&&We!==5||Bl(e,!1),Bs!==0&&(Bs=0)}function fS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-kn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=O1(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=ye,n=se,n=nh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&qd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Dl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&qd(i),Sm(n)){case 2:case 8:n=$v;break;case 32:n=Du;break;case 268435456:n=ty;break;default:n=Du}return i=dS.bind(null,e),n=ym(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&qd(i),e.callbackPriority=2,e.callbackNode=null,2}function dS(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(gh()&&e.callbackNode!==n)return null;var i=se;return i=nh(e,e===ye?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(jx(e,i,t),fS(e,Vn()),e.callbackNode!=null&&e.callbackNode===n?dS.bind(null,e):null)}function xv(e,t){if(gh())return null;jx(e,t,!0)}function cT(){yT(function(){(le&6)!==0?ym(jv,lT):hS()})}function ag(){if(Bs===0){var e=Pr;e===0&&(e=Jc,Jc<<=1,(Jc&261888)===0&&(Jc=256)),Bs=e}return Bs}function Sv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:du(""+e)}function Mv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function uT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Sv((s[Cn]||null).action),r=i.submitter;r&&(t=(t=r[Cn]||null)?Sv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new ih("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Bs!==0){var l=r?Mv(s,r):new FormData(s);Kp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?Mv(s,r):new FormData(s),Kp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(ou=0;ou<zp.length;ou++)lu=zp[ou],bv=lu.toLowerCase(),Ev=lu[0].toUpperCase()+lu.slice(1),vi(bv,"on"+Ev);var lu,bv,Ev,ou;vi(Ty,"onAnimationEnd");vi(Ay,"onAnimationIteration");vi(wy,"onAnimationStart");vi("dblclick","onDoubleClick");vi("focusin","onFocus");vi("focusout","onBlur");vi(CE,"onTransitionRun");vi(RE,"onTransitionStart");vi(DE,"onTransitionCancel");vi(Cy,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Da("onBeforeInput",["compositionend","keypress","textInput","paste"]);Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function pS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){Lu(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){Lu(u)}s.currentTarget=null,a=l}}}}function te(e,t){var n=t[Dp];n===void 0&&(n=t[Dp]=new Set);var i=e+"__bubble";n.has(i)||(mS(t,e,2,!1),n.add(i))}function vp(e,t,n){var i=0;t&&(i|=4),mS(n,e,i,t)}var cu="_reactListening"+Math.random().toString(36).slice(2);function rg(e){if(!e[cu]){e[cu]=!0,ry.forEach(function(n){n!=="selectionchange"&&(hT.has(n)||vp(n,!1,e),vp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cu]||(t[cu]=!0,vp("selectionchange",!1,t))}}function mS(e,t,n,i){switch(CS(t)){case 2:var s=FT;break;case 8:s=HT;break;default:s=ug}n=s.bind(null,t,n,e),s=void 0,!Op||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function yp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=gr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}py(function(){var c=a,u=Em(n),f=[];t:{var d=Ry.get(e);if(d!==void 0){var p=ih,_=e;switch(e){case"keypress":if(mu(n)===0)break t;case"keydown":case"keyup":p=rE;break;case"focusin":_="focus",p=Qd;break;case"focusout":_="blur",p=Qd;break;case"beforeblur":case"afterblur":p=Qd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=U_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Z1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=cE;break;case Ty:case Ay:case wy:p=Q1;break;case Cy:p=hE;break;case"scroll":case"scrollend":p=q1;break;case"wheel":p=dE;break;case"copy":case"cut":case"paste":p=$1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=N_;break;case"toggle":case"beforetoggle":p=mE}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),h=x?d!==null?d+"Capture":null:d;x=[];for(var g=c,v;g!==null;){var y=g;if(v=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||v===null||h===null||(y=ml(g,h),y!=null&&x.push(El(g,y,v))),m)break;g=g.return}0<x.length&&(d=new p(d,_,null,n,u),f.push({event:d,listeners:x}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==Ip&&(_=n.relatedTarget||n.fromElement)&&(gr(_)||_[Xr]))break t;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?gr(_):null,_!==null&&(m=Cl(_),x=_.tag,_!==m||x!==5&&x!==27&&x!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=U_,y="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=N_,y="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?d:jo(p),v=_==null?d:jo(_),d=new x(y,g+"leave",p,n,u),d.target=m,d.relatedTarget=v,y=null,gr(u)===c&&(x=new x(h,g+"enter",_,n,u),x.target=v,x.relatedTarget=m,y=x),m=y,p&&_)e:{for(x=fT,h=p,g=_,v=0,y=h;y;y=x(y))v++;y=0;for(var C=g;C;C=x(C))y++;for(;0<v-y;)h=x(h),v--;for(;0<y-v;)g=x(g),y--;for(;v--;){if(h===g||g!==null&&h===g.alternate){x=h;break e}h=x(h),g=x(g)}x=null}else x=null;p!==null&&Tv(f,d,p,x,!1),_!==null&&m!==null&&Tv(f,m,_,x,!0)}}t:{if(d=c?jo(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=B_;else if(P_(d))if(xy)w=TE;else{w=bE;var A=ME}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?c&&bm(c.elementType)&&(w=B_):w=EE;if(w&&(w=w(e,c))){yy(f,w,n,u);break t}A&&A(e,d,c),e==="focusout"&&c&&d.type==="number"&&c.memoizedProps.value!=null&&Np(d,"number",d.value)}switch(A=c?jo(c):window,e){case"focusin":(P_(A)||A.contentEditable==="true")&&(yr=A,Pp=c,il=null);break;case"focusout":il=Pp=yr=null;break;case"mousedown":Bp=!0;break;case"contextmenu":case"mouseup":case"dragend":Bp=!1,V_(f,n,u);break;case"selectionchange":if(wE)break;case"keydown":case"keyup":V_(f,n,u)}var D;if(wm)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else vr?_y(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(gy&&n.locale!=="ko"&&(vr||E!=="onCompositionStart"?E==="onCompositionEnd"&&vr&&(D=my()):(Is=u,Tm="value"in Is?Is.value:Is.textContent,vr=!0)),A=Ju(c,E),0<A.length&&(E=new L_(E,e,null,n,u),f.push({event:E,listeners:A}),D?E.data=D:(D=vy(n),D!==null&&(E.data=D)))),(D=_E?vE(e,n):yE(e,n))&&(E=Ju(c,"onBeforeInput"),0<E.length&&(A=new L_("onBeforeInput","beforeinput",null,n,u),f.push({event:A,listeners:E}),A.data=D)),uT(f,e,c,n,u)}pS(f,t)})}function El(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ju(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=ml(e,n),s!=null&&i.unshift(El(e,s,a)),s=ml(e,t),s!=null&&i.push(El(e,s,a))),e.tag===3)return i;e=e.return}return[]}function fT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=ml(n,a),c!=null&&r.unshift(El(n,c,l))):s||(c=ml(n,a),c!=null&&r.push(El(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var dT=/\r\n?/g,pT=/\u0000|\uFFFD/g;function Av(e){return(typeof e=="string"?e:""+e).replace(dT,`
`).replace(pT,"")}function gS(e,t){return t=Av(t),Av(e)===t}function me(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Or(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Or(e,""+i);break;case"className":jc(e,"class",i);break;case"tabIndex":jc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":jc(e,n,i);break;case"style":dy(e,i,a);break;case"data":if(t!=="object"){jc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=du(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&me(e,t,"name",s.name,s,null),me(e,t,"formEncType",s.formEncType,s,null),me(e,t,"formMethod",s.formMethod,s,null),me(e,t,"formTarget",s.formTarget,s,null)):(me(e,t,"encType",s.encType,s,null),me(e,t,"method",s.method,s,null),me(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=du(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ji);break;case"onScroll":i!=null&&te("scroll",e);break;case"onScrollEnd":i!=null&&te("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=du(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":te("beforetoggle",e),te("toggle",e),fu(e,"popover",i);break;case"xlinkActuate":Xi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Xi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Xi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Xi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Xi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Xi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Xi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Xi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Xi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":fu(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=X1.get(n)||n,fu(e,n,i))}}function om(e,t,n,i,s,a){switch(n){case"style":dy(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Or(e,i):(typeof i=="number"||typeof i=="bigint")&&Or(e,""+i);break;case"onScroll":i!=null&&te("scroll",e);break;case"onScrollEnd":i!=null&&te("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oy.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Cn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):fu(e,n,i)}}}function ln(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":te("error",e),te("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:me(e,t,a,r,n,null)}}s&&me(e,t,"srcSet",n.srcSet,n,null),i&&me(e,t,"src",n.src,n,null);return;case"input":te("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(tt(137,t));break;default:me(e,t,i,u,n,null)}}uy(e,a,o,l,c,r,s,!1);return;case"select":te("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:me(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?wr(e,!!i,t,!1):n!=null&&wr(e,!!i,n,!0);return;case"textarea":te("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:me(e,t,r,o,n,null)}fy(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:me(e,t,l,i,n,null)}return;case"dialog":te("beforetoggle",e),te("toggle",e),te("cancel",e),te("close",e);break;case"iframe":case"object":te("load",e);break;case"video":case"audio":for(i=0;i<bl.length;i++)te(bl[i],e);break;case"image":te("error",e),te("load",e);break;case"details":te("toggle",e);break;case"embed":case"source":case"link":te("error",e),te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:me(e,t,c,i,n,null)}return;default:if(bm(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&om(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&me(e,t,o,i,n,null))}function mT(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(p)||me(e,t,p,null,i,f)}}for(var d in i){var p=i[d];if(f=n[d],i.hasOwnProperty(d)&&(p!=null||f!=null))switch(d){case"type":a=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(tt(137,t));break;default:p!==f&&me(e,t,d,p,i,f)}}Lp(e,r,o,l,c,u,a,s);return;case"select":p=r=o=d=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||me(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":d=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&me(e,t,s,a,i,l)}t=o,n=r,i=p,d!=null?wr(e,!!n,d,!1):!!i!=!!n&&(t!=null?wr(e,!!n,t,!0):wr(e,!!n,n?[]:"",!1));return;case"textarea":p=d=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:me(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":d=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(tt(91));break;default:s!==a&&me(e,t,r,s,i,a)}hy(e,d,p);return;case"option":for(var _ in n)if(d=n[_],n.hasOwnProperty(_)&&d!=null&&!i.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:me(e,t,_,null,i,d)}for(l in i)if(d=i[l],p=n[l],i.hasOwnProperty(l)&&d!==p&&(d!=null||p!=null))switch(l){case"selected":e.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:me(e,t,l,d,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)d=n[x],n.hasOwnProperty(x)&&d!=null&&!i.hasOwnProperty(x)&&me(e,t,x,null,i,d);for(c in i)if(d=i[c],p=n[c],i.hasOwnProperty(c)&&d!==p&&(d!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(tt(137,t));break;default:me(e,t,c,d,i,p)}return;default:if(bm(t)){for(var m in n)d=n[m],n.hasOwnProperty(m)&&d!==void 0&&!i.hasOwnProperty(m)&&om(e,t,m,void 0,i,d);for(u in i)d=i[u],p=n[u],!i.hasOwnProperty(u)||d===p||d===void 0&&p===void 0||om(e,t,u,d,i,p);return}}for(var h in n)d=n[h],n.hasOwnProperty(h)&&d!=null&&!i.hasOwnProperty(h)&&me(e,t,h,null,i,d);for(f in i)d=i[f],p=n[f],!i.hasOwnProperty(f)||d===p||d==null&&p==null||me(e,t,f,d,i,p)}function wv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&wv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,f=l.initiatorType;u&&wv(f)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var lm=null,cm=null;function Ku(e){return e.nodeType===9?e:e.ownerDocument}function Cv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _S(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function um(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xp=null;function _T(){var e=window.event;return e&&e.type==="popstate"?e===xp?!1:(xp=e,!0):(xp=null,!1)}var vS=typeof setTimeout=="function"?setTimeout:void 0,vT=typeof clearTimeout=="function"?clearTimeout:void 0,Rv=typeof Promise=="function"?Promise:void 0,yT=typeof queueMicrotask=="function"?queueMicrotask:typeof Rv<"u"?function(e){return Rv.resolve(null).then(e).catch(xT)}:vS;function xT(e){setTimeout(function(){throw e})}function js(e){return e==="head"}function Dv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),kr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")dl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,dl(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Ll]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&dl(e.ownerDocument.body);n=s}while(n);kr(t)}function Uv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function hm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":hm(n),Mm(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ST(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function MT(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function yS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ci(e.nextSibling),e===null))return null;return e}function fm(e){return e.data==="$?"||e.data==="$~"}function dm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bT(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ci(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var pm=null;function Lv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ci(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Nv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function xS(e,t,n){switch(t=Ku(n),e){case"html":if(e=t.documentElement,!e)throw Error(tt(452));return e;case"head":if(e=t.head,!e)throw Error(tt(453));return e;case"body":if(e=t.body,!e)throw Error(tt(454));return e;default:throw Error(tt(451))}}function dl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mm(e)}var ui=new Map,Iv=new Set;function Qu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ls=ce.d;ce.d={f:ET,r:TT,D:AT,C:wT,L:CT,m:RT,X:UT,S:DT,M:LT};function ET(){var e=ls.f(),t=ph();return e||t}function TT(e){var t=Wr(e);t!==null&&t.tag===5&&t.type==="form"?dx(t):ls.r(e)}var Jr=typeof document>"u"?null:document;function SS(e,t,n){var i=Jr;if(i&&typeof t=="string"&&t){var s=ai(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Iv.has(s)||(Iv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),ln(t,"link",e),Qe(t),i.head.appendChild(t)))}}function AT(e){ls.D(e),SS("dns-prefetch",e,null)}function wT(e,t){ls.C(e,t),SS("preconnect",e,t)}function CT(e,t,n){ls.L(e,t,n);var i=Jr;if(i&&e&&t){var s='link[rel="preload"][as="'+ai(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ai(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ai(n.imageSizes)+'"]')):s+='[href="'+ai(e)+'"]';var a=s;switch(t){case"style":a=Gr(e);break;case"script":a=Kr(e)}ui.has(a)||(e=Ae({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ui.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(zl(a))||t==="script"&&i.querySelector(Fl(a))||(t=i.createElement("link"),ln(t,"link",e),Qe(t),i.head.appendChild(t)))}}function RT(e,t){ls.m(e,t);var n=Jr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ai(i)+'"][href="'+ai(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Kr(e)}if(!ui.has(a)&&(e=Ae({rel:"modulepreload",href:e},t),ui.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Fl(a)))return}i=n.createElement("link"),ln(i,"link",e),Qe(i),n.head.appendChild(i)}}}function DT(e,t,n){ls.S(e,t,n);var i=Jr;if(i&&e){var s=Ar(i).hoistableStyles,a=Gr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(zl(a)))o.loading=5;else{e=Ae({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ui.get(a))&&og(e,n);var l=r=i.createElement("link");Qe(l),ln(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,bu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function UT(e,t){ls.X(e,t);var n=Jr;if(n&&e){var i=Ar(n).hoistableScripts,s=Kr(e),a=i.get(s);a||(a=n.querySelector(Fl(s)),a||(e=Ae({src:e,async:!0},t),(t=ui.get(s))&&lg(e,t),a=n.createElement("script"),Qe(a),ln(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function LT(e,t){ls.M(e,t);var n=Jr;if(n&&e){var i=Ar(n).hoistableScripts,s=Kr(e),a=i.get(s);a||(a=n.querySelector(Fl(s)),a||(e=Ae({src:e,async:!0,type:"module"},t),(t=ui.get(s))&&lg(e,t),a=n.createElement("script"),Qe(a),ln(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Ov(e,t,n,i){var s=(s=zs.current)?Qu(s):null;if(!s)throw Error(tt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Gr(n.href),n=Ar(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Gr(n.href);var a=Ar(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(zl(e)))&&!a._p&&(r.instance=a,r.state.loading=5),ui.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ui.set(e,n),a||NT(s,e,n,r.state))),t&&i===null)throw Error(tt(528,""));return r}if(t&&i!==null)throw Error(tt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Kr(n),n=Ar(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,e))}}function Gr(e){return'href="'+ai(e)+'"'}function zl(e){return'link[rel="stylesheet"]['+e+"]"}function MS(e){return Ae({},e,{"data-precedence":e.precedence,precedence:null})}function NT(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ln(t,"link",n),Qe(t),e.head.appendChild(t))}function Kr(e){return'[src="'+ai(e)+'"]'}function Fl(e){return"script[async]"+e}function Pv(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ai(n.href)+'"]');if(i)return t.instance=i,Qe(i),i;var s=Ae({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Qe(i),ln(i,"style",s),bu(i,n.precedence,e),t.instance=i;case"stylesheet":s=Gr(n.href);var a=e.querySelector(zl(s));if(a)return t.state.loading|=4,t.instance=a,Qe(a),a;i=MS(n),(s=ui.get(s))&&og(i,s),a=(e.ownerDocument||e).createElement("link"),Qe(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ln(a,"link",i),t.state.loading|=4,bu(a,n.precedence,e),t.instance=a;case"script":return a=Kr(n.src),(s=e.querySelector(Fl(a)))?(t.instance=s,Qe(s),s):(i=n,(s=ui.get(a))&&(i=Ae({},n),lg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Qe(s),ln(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,bu(i,n.precedence,e));return t.instance}function bu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function og(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function lg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Eu=null;function Bv(e,t,n){if(Eu===null){var i=new Map,s=Eu=new Map;s.set(n,i)}else s=Eu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Ll]||a[an]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function zv(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function IT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function OT(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Gr(i.href),a=t.querySelector(zl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ju.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Qe(a);return}a=t.ownerDocument||t,i=MS(i),(s=ui.get(s))&&og(i,s),a=a.createElement("link"),Qe(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ln(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ju.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Sp=0;function PT(e,t){return e.stylesheets&&e.count===0&&Tu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Tu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Sp===0&&(Sp=62500*gT());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Tu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Sp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function ju(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $u=null;function Tu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$u=new Map,t.forEach(BT,e),$u=null,ju.call(e))}function BT(e,t){if(!(t.state.loading&4)){var n=$u.get(e);if(n)var i=n.get(null);else{n=new Map,$u.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=ju.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Tl={$$typeof:Qi,Provider:null,Consumer:null,_currentValue:xa,_currentValue2:xa,_threadCount:0};function zT(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yd(0),this.hiddenUpdates=Yd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function ES(e,t,n,i,s,a,r,o,l,c,u,f){return e=new zT(e,t,n,r,l,c,u,f,o),t=1,a===!0&&(t|=24),a=Fn(3,null,null,t),e.current=a,a.stateNode=e,t=Im(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Bm(a),e}function TS(e){return e?(e=Mr,e):Mr}function AS(e,t,n,i,s,a){s=TS(s),i.context===null?i.context=s:i.pendingContext=s,i=Hs(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Vs(e,i,t),n!==null&&(wn(n,e,t),al(n,e,t))}function Fv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cg(e,t){Fv(e,t),(e=e.alternate)&&Fv(e,t)}function wS(e){if(e.tag===13||e.tag===31){var t=Na(e,67108864);t!==null&&wn(t,e,67108864),cg(e,67108864)}}function Hv(e){if(e.tag===13||e.tag===31){var t=Xn();t=xm(t);var n=Na(e,t);n!==null&&wn(n,e,t),cg(e,t)}}var th=!0;function FT(e,t,n,i){var s=Gt.T;Gt.T=null;var a=ce.p;try{ce.p=2,ug(e,t,n,i)}finally{ce.p=a,Gt.T=s}}function HT(e,t,n,i){var s=Gt.T;Gt.T=null;var a=ce.p;try{ce.p=8,ug(e,t,n,i)}finally{ce.p=a,Gt.T=s}}function ug(e,t,n,i){if(th){var s=mm(i);if(s===null)yp(e,t,i,eh,n),Vv(e,i);else if(GT(s,e,t,n,i))i.stopPropagation();else if(Vv(e,i),t&4&&-1<VT.indexOf(e)){for(;s!==null;){var a=Wr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=_a(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-kn(r);o.entanglements[1]|=l,r&=~l}Oi(a),(le&6)===0&&(Xu=Vn()+500,Bl(0,!1))}}break;case 31:case 13:o=Na(a,2),o!==null&&wn(o,a,2),ph(),cg(a,2)}if(a=mm(i),a===null&&yp(e,t,i,eh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else yp(e,t,i,null,n)}}function mm(e){return e=Em(e),hg(e)}var eh=null;function hg(e){if(eh=null,e=gr(e),e!==null){var t=Cl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Yv(t),e!==null)return e;e=null}else if(n===31){if(e=Zv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return eh=e,null}function CS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(C1()){case jv:return 2;case $v:return 8;case Du:case R1:return 32;case ty:return 268435456;default:return 32}default:return 32}}var gm=!1,Xs=null,Ws=null,qs=null,Al=new Map,wl=new Map,Ls=[],VT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vv(e,t){switch(e){case"focusin":case"focusout":Xs=null;break;case"dragenter":case"dragleave":Ws=null;break;case"mouseover":case"mouseout":qs=null;break;case"pointerover":case"pointerout":Al.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(t.pointerId)}}function Zo(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Wr(t),t!==null&&wS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function GT(e,t,n,i,s){switch(t){case"focusin":return Xs=Zo(Xs,e,t,n,i,s),!0;case"dragenter":return Ws=Zo(Ws,e,t,n,i,s),!0;case"mouseover":return qs=Zo(qs,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Al.set(a,Zo(Al.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,wl.set(a,Zo(wl.get(a)||null,e,t,n,i,s)),!0}return!1}function RS(e){var t=gr(e.target);if(t!==null){var n=Cl(t);if(n!==null){if(t=n.tag,t===13){if(t=Yv(n),t!==null){e.blockedOn=t,E_(e.priority,function(){Hv(n)});return}}else if(t===31){if(t=Zv(n),t!==null){e.blockedOn=t,E_(e.priority,function(){Hv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Au(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ip=i,n.target.dispatchEvent(i),Ip=null}else return t=Wr(n),t!==null&&wS(t),e.blockedOn=n,!1;t.shift()}return!0}function Gv(e,t,n){Au(e)&&n.delete(t)}function kT(){gm=!1,Xs!==null&&Au(Xs)&&(Xs=null),Ws!==null&&Au(Ws)&&(Ws=null),qs!==null&&Au(qs)&&(qs=null),Al.forEach(Gv),wl.forEach(Gv)}function uu(e,t){e.blockedOn===t&&(e.blockedOn=null,gm||(gm=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,kT)))}var hu=null;function kv(e){hu!==e&&(hu=e,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,function(){hu===e&&(hu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(hg(i||n)===null)continue;break}var a=Wr(n);a!==null&&(e.splice(t,3),t-=3,Kp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function kr(e){function t(l){return uu(l,e)}Xs!==null&&uu(Xs,e),Ws!==null&&uu(Ws,e),qs!==null&&uu(qs,e),Al.forEach(t),wl.forEach(t);for(var n=0;n<Ls.length;n++){var i=Ls[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ls.length&&(n=Ls[0],n.blockedOn===null);)RS(n),n.blockedOn===null&&Ls.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Cn]||null;if(typeof a=="function")r||kv(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Cn]||null)o=r.formAction;else if(hg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),kv(n)}}}function DS(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function fg(e){this._internalRoot=e}_h.prototype.render=fg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(tt(409));var n=t.current,i=Xn();AS(n,i,e,t,null,null)};_h.prototype.unmount=fg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;AS(e.current,2,null,e,null,null),ph(),t[Xr]=null}};function _h(e){this._internalRoot=e}_h.prototype.unstable_scheduleHydration=function(e){if(e){var t=ay();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ls.length&&t!==0&&t<Ls[n].priority;n++);Ls.splice(n,0,e),n===0&&RS(e)}};var Xv=Wv.version;if(Xv!=="19.2.0")throw Error(tt(527,Xv,"19.2.0"));ce.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(tt(188)):(e=Object.keys(e).join(","),Error(tt(268,e)));return e=S1(t),e=e!==null?Jv(e):null,e=e===null?null:e.stateNode,e};var XT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:Gt,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Jo.isDisabled&&Jo.supportsFiber))try{Rl=Jo.inject(XT),Gn=Jo}catch{}var Jo;vh.createRoot=function(e,t){if(!qv(e))throw Error(tt(299));var n=!1,i="",s=Sx,a=Mx,r=bx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=ES(e,1,!1,null,null,n,i,null,s,a,r,DS),e[Xr]=t.current,rg(e),new fg(t)};vh.hydrateRoot=function(e,t,n){if(!qv(e))throw Error(tt(299));var i=!1,s="",a=Sx,r=Mx,o=bx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=ES(e,1,!0,t,n??null,i,s,l,a,r,o,DS),t.context=TS(null),n=t.current,i=Xn(),i=xm(i),s=Hs(i),s.callback=null,Vs(n,s,i),n=i,t.current.lanes=n,Ul(t,n),Oi(t),e[Xr]=t.current,rg(e),new _h(t)};vh.version="19.2.0"});var IS=Es((cD,NS)=>{"use strict";function LS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(LS)}catch(e){console.error(e)}}LS(),NS.exports=US()});var Vb=Vc(rr()),Gb=Vc(IS());var zc=Vc(rr()),Be=Vc(rr());var cM=0,t0=1,uM=2;var e0=1,Sf=2,Fi=3,gs=0,un=1,pi=2,ys=0,Ha=1,n0=2,i0=3,s0=4,hM=5,ra=100,fM=101,dM=102,pM=103,mM=104,gM=200,_M=201,vM=202,yM=203,kh=204,Xh=205,xM=206,SM=207,MM=208,bM=209,EM=210,TM=211,AM=212,wM=213,CM=214,Mf=0,bf=1,Ef=2,Va=3,Tf=4,Af=5,wf=6,Cf=7,Rf=0,RM=1,DM=2,xs=0,UM=1,LM=2,NM=3,Df=4,IM=5,OM=6,PM=7;var a0=300,Ja=301,Ka=302,Uf=303,Lf=304,Dc=306,Wh=1e3,Mi=1001,qh=1002,Ln=1003,BM=1004;var Uc=1005;var Ei=1006,Nf=1007;var fa=1008;var wi=1009,r0=1010,o0=1011,Eo=1012,If=1013,da=1014,Ci=1015,To=1016,Of=1017,Pf=1018,Ao=1020,l0=35902,c0=35899,u0=1021,h0=1022,mi=1023,fo=1026,wo=1027,Bf=1028,zf=1029,f0=1030,Ff=1031;var Hf=1033,Lc=33776,Nc=33777,Ic=33778,Oc=33779,Vf=35840,Gf=35841,kf=35842,Xf=35843,Wf=36196,qf=37492,Yf=37496,Zf=37808,Jf=37809,Kf=37810,Qf=37811,jf=37812,$f=37813,td=37814,ed=37815,nd=37816,id=37817,sd=37818,ad=37819,rd=37820,od=37821,ld=36492,cd=36494,ud=36495,hd=36283,fd=36284,dd=36285,pd=36286;var Ql=2300,Yh=2301,Vh=2302,Vg=2400,Gg=2401,kg=2402;var zM=3200,FM=3201;var md=0,HM=1,Ss="",pn="srgb",Ga="srgb-linear",jl="linear",de="srgb";var Fa=7680;var Xg=519,VM=512,GM=513,kM=514,d0=515,XM=516,WM=517,qM=518,YM=519,Wg=35044;var p0="300 es",bi=2e3,$l=2001;var _s=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dg=Math.PI/180,Zh=180/Math.PI;function Co(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[e&255]+fn[e>>8&255]+fn[e>>16&255]+fn[e>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function $t(e,t,n){return Math.max(t,Math.min(n,e))}function WT(e,t){return(e%t+t)%t}function pg(e,t,n){return(1-n)*e+n*t}function Hl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Dn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var gt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},di=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=a[r+0],p=a[r+1],_=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=f;return}if(o===1){t[n+0]=d,t[n+1]=p,t[n+2]=_,t[n+3]=x;return}if(f!==x||l!==d||c!==p||u!==_){let m=1-o,h=l*d+c*p+u*_+f*x,g=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){let C=Math.sqrt(v),w=Math.atan2(C,h*g);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}let y=o*g;if(l=l*m+d*y,c=c*m+p*y,u=u*m+_*y,f=f*m+x*y,m===1-o){let C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=f}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=a[r],d=a[r+1],p=a[r+2],_=a[r+3];return t[n]=o*_+u*f+l*p-c*d,t[n+1]=l*_+u*d+c*f-o*p,t[n+2]=c*_+u*p+o*d-l*f,t[n+3]=u*_-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(a/2),d=l(i/2),p=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=r*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(OS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(OS.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),f=2*(a*i-r*n);return this.x=n+l*c+r*f-o*u,this.y=i+l*u+o*c-a*f,this.z=s+l*f+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return mg.copy(this).projectOnVector(t),this.sub(mg)}reflect(t){return this.sub(mg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mg=new L,OS=new di,Jt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=s[0],m=s[3],h=s[6],g=s[1],v=s[4],y=s[7],C=s[2],w=s[5],A=s[8];return a[0]=r*x+o*g+l*C,a[3]=r*m+o*v+l*w,a[6]=r*h+o*y+l*A,a[1]=c*x+u*g+f*C,a[4]=c*m+u*v+f*w,a[7]=c*h+u*y+f*A,a[2]=d*x+p*g+_*C,a[5]=d*m+p*v+_*w,a[8]=d*h+p*y+_*A,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*r-o*c,d=o*l-u*a,p=c*a-r*l,_=n*f+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=f*x,t[1]=(s*c-u*i)*x,t[2]=(o*i-s*r)*x,t[3]=d*x,t[4]=(u*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(gg.makeScale(t,n)),this}rotate(t){return this.premultiply(gg.makeRotation(-t)),this}translate(t,n){return this.premultiply(gg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},gg=new Jt;function m0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function po(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ZM(){let e=po("canvas");return e.style.display="block",e}var PS={};function mo(e){e in PS||(PS[e]=!0,console.warn(e))}function JM(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var BS=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zS=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qT(){let e={enabled:!0,workingColorSpace:Ga,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===de&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===de&&(s.r=ho(s.r),s.g=ho(s.g),s.b=ho(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ss?jl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return mo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return mo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Ga]:{primaries:t,whitePoint:i,transfer:jl,toXYZ:BS,fromXYZ:zS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:i,transfer:de,toXYZ:BS,fromXYZ:zS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),e}var re=qT();function ms(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ho(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Qr,Jh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Qr===void 0&&(Qr=po("canvas")),Qr.width=t.width,Qr.height=t.height;let s=Qr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Qr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=po("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ms(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},YT=0,go=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=Co(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(_g(s[r].image)):a.push(_g(s[r]))}else a=_g(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function _g(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Jh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ZT=0,vg=new L,Sn=class e extends _s{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Mi,s=Mi,a=Ei,r=fa,o=mi,l=wi,c=e.DEFAULT_ANISOTROPY,u=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=Co(),this.name="",this.source=new go(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vg).x}get height(){return this.source.getSize(vg).y}get depth(){return this.source.getSize(vg).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==a0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wh:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case qh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wh:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case qh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=a0;Sn.DEFAULT_ANISOTROPY=1;var fe=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let v=(c+1)/2,y=(p+1)/2,C=(h+1)/2,w=(u+d)/4,A=(f+x)/4,D=(_+m)/4;return v>y&&v>C?v<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(v),s=w/i,a=A/i):y>C?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=w/s,a=D/s):C<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(C),i=A/a,s=D/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-x)/g,this.z=(d-u)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this.w=$t(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this.w=$t(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kh=class extends _s{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new fe(0,0,t,n),this.scissorTest=!1,this.viewport=new fe(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new Sn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new go(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bi=class extends Kh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},tc=class extends Sn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qh=class extends Sn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zi=class{constructor(t=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(yi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(yi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=yi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,yi):yi.fromBufferAttribute(a,r),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yh.copy(i.boundingBox)),yh.applyMatrix4(t.matrixWorld),this.union(yh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vl),xh.subVectors(this.max,Vl),jr.subVectors(t.a,Vl),$r.subVectors(t.b,Vl),to.subVectors(t.c,Vl),$s.subVectors($r,jr),ta.subVectors(to,$r),Oa.subVectors(jr,to);let n=[0,-$s.z,$s.y,0,-ta.z,ta.y,0,-Oa.z,Oa.y,$s.z,0,-$s.x,ta.z,0,-ta.x,Oa.z,0,-Oa.x,-$s.y,$s.x,0,-ta.y,ta.x,0,-Oa.y,Oa.x,0];return!yg(n,jr,$r,to,xh)||(n=[1,0,0,0,1,0,0,0,1],!yg(n,jr,$r,to,xh))?!1:(Sh.crossVectors($s,ta),n=[Sh.x,Sh.y,Sh.z],yg(n,jr,$r,to,xh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},cs=[new L,new L,new L,new L,new L,new L,new L,new L],yi=new L,yh=new zi,jr=new L,$r=new L,to=new L,$s=new L,ta=new L,Oa=new L,Vl=new L,xh=new L,Sh=new L,Pa=new L;function yg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Pa.fromArray(e,a);let o=s.x*Math.abs(Pa.x)+s.y*Math.abs(Pa.y)+s.z*Math.abs(Pa.z),l=t.dot(Pa),c=n.dot(Pa),u=i.dot(Pa);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var JT=new zi,Gl=new L,xg=new L,oa=class{constructor(t=new L,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):JT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gl.subVectors(t,this.center);let n=Gl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Gl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gl.copy(t.center).add(xg)),this.expandByPoint(Gl.copy(t.center).sub(xg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},us=new L,Sg=new L,Mh=new L,ea=new L,Mg=new L,bh=new L,bg=new L,ec=class{constructor(t=new L,n=new L(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,us)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=us.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(us.copy(this.origin).addScaledVector(this.direction,n),us.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Sg.copy(t).add(n).multiplyScalar(.5),Mh.copy(n).sub(t).normalize(),ea.copy(this.origin).sub(Sg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Mh),o=ea.dot(this.direction),l=-ea.dot(Mh),c=ea.lengthSq(),u=Math.abs(1-r*r),f,d,p,_;if(u>0)if(f=r*l-o,d=r*o-l,_=a*u,f>=0)if(d>=-_)if(d<=_){let x=1/u;f*=x,d*=x,p=f*(f+r*d+2*o)+d*(r*f+d+2*l)+c}else d=a,f=Math.max(0,-(r*d+o)),p=-f*f+d*(d+2*l)+c;else d=-a,f=Math.max(0,-(r*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-r*a+o)),d=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(f=Math.max(0,-(r*a+o)),d=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c);else d=r>0?-a:a,f=Math.max(0,-(r*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Sg).addScaledVector(Mh,d),p}intersectSphere(t,n){us.subVectors(t.center,this.origin);let i=us.dot(this.direction),s=us.dot(us)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(a=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(a=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,us)!==null}intersectTriangle(t,n,i,s,a){Mg.subVectors(n,t),bh.subVectors(i,t),bg.crossVectors(Mg,bh);let r=this.direction.dot(bg),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ea.subVectors(this.origin,t);let l=o*this.direction.dot(bh.crossVectors(ea,bh));if(l<0)return null;let c=o*this.direction.dot(Mg.cross(ea));if(c<0||l+c>r)return null;let u=-o*ea.dot(bg);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class e{constructor(t,n,i,s,a,r,o,l,c,u,f,d,p,_,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,f,d,p,_,x,m)}set(t,n,i,s,a,r,o,l,c,u,f,d,p,_,x,m){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/eo.setFromMatrixColumn(t,0).length(),a=1/eo.setFromMatrixColumn(t,1).length(),r=1/eo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){let d=r*u,p=r*f,_=o*u,x=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-x*c,n[9]=-o*l,n[2]=x-d*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){let d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d+x*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*f,n[5]=r*u,n[9]=-o,n[2]=p*o-_,n[6]=x+d*o,n[10]=r*l}else if(t.order==="ZXY"){let d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d-x*o,n[4]=-r*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*u,n[9]=x-d*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let d=r*u,p=r*f,_=o*u,x=o*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let d=r*l,p=r*c,_=o*l,x=o*c;n[0]=l*u,n[4]=x-d*f,n[8]=_*f+p,n[1]=f,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-x*f}else if(t.order==="XZY"){let d=r*l,p=r*c,_=o*l,x=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=r*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(KT,t,QT)}lookAt(t,n,i){let s=this.elements;return Yn.subVectors(t,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),na.crossVectors(i,Yn),na.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),na.crossVectors(i,Yn)),na.normalize(),Eh.crossVectors(Yn,na),s[0]=na.x,s[4]=Eh.x,s[8]=Yn.x,s[1]=na.y,s[5]=Eh.y,s[9]=Yn.y,s[2]=na.z,s[6]=Eh.z,s[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],h=i[14],g=i[3],v=i[7],y=i[11],C=i[15],w=s[0],A=s[4],D=s[8],E=s[12],M=s[1],U=s[5],z=s[9],W=s[13],K=s[2],Z=s[6],Y=s[10],it=s[14],G=s[3],lt=s[7],vt=s[11],Mt=s[15];return a[0]=r*w+o*M+l*K+c*G,a[4]=r*A+o*U+l*Z+c*lt,a[8]=r*D+o*z+l*Y+c*vt,a[12]=r*E+o*W+l*it+c*Mt,a[1]=u*w+f*M+d*K+p*G,a[5]=u*A+f*U+d*Z+p*lt,a[9]=u*D+f*z+d*Y+p*vt,a[13]=u*E+f*W+d*it+p*Mt,a[2]=_*w+x*M+m*K+h*G,a[6]=_*A+x*U+m*Z+h*lt,a[10]=_*D+x*z+m*Y+h*vt,a[14]=_*E+x*W+m*it+h*Mt,a[3]=g*w+v*M+y*K+C*G,a[7]=g*A+v*U+y*Z+C*lt,a[11]=g*D+v*z+y*Y+C*vt,a[15]=g*E+v*W+y*it+C*Mt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],p=t[14],_=t[3],x=t[7],m=t[11],h=t[15];return _*(+a*l*f-s*c*f-a*o*d+i*c*d+s*o*p-i*l*p)+x*(+n*l*p-n*c*d+a*r*d-s*r*p+s*c*u-a*l*u)+m*(+n*c*f-n*o*p-a*r*f+i*r*p+a*o*u-i*c*u)+h*(-s*o*u-n*l*f+n*o*d+s*r*f-i*r*d+i*l*u)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],p=t[11],_=t[12],x=t[13],m=t[14],h=t[15],g=f*m*c-x*d*c+x*l*p-o*m*p-f*l*h+o*d*h,v=_*d*c-u*m*c-_*l*p+r*m*p+u*l*h-r*d*h,y=u*x*c-_*f*c+_*o*p-r*x*p-u*o*h+r*f*h,C=_*f*l-u*x*l-_*o*d+r*x*d+u*o*m-r*f*m,w=n*g+i*v+s*y+a*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=g*A,t[1]=(x*d*a-f*m*a-x*s*p+i*m*p+f*s*h-i*d*h)*A,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*h+i*l*h)*A,t[3]=(f*l*a-o*d*a-f*s*c+i*d*c+o*s*p-i*l*p)*A,t[4]=v*A,t[5]=(u*m*a-_*d*a+_*s*p-n*m*p-u*s*h+n*d*h)*A,t[6]=(_*l*a-r*m*a-_*s*c+n*m*c+r*s*h-n*l*h)*A,t[7]=(r*d*a-u*l*a+u*s*c-n*d*c-r*s*p+n*l*p)*A,t[8]=y*A,t[9]=(_*f*a-u*x*a-_*i*p+n*x*p+u*i*h-n*f*h)*A,t[10]=(r*x*a-_*o*a+_*i*c-n*x*c-r*i*h+n*o*h)*A,t[11]=(u*o*a-r*f*a-u*i*c+n*f*c+r*i*p-n*o*p)*A,t[12]=C*A,t[13]=(u*x*s-_*f*s+_*i*d-n*x*d-u*i*m+n*f*m)*A,t[14]=(_*o*s-r*x*s-_*i*l+n*x*l+r*i*m-n*o*m)*A,t[15]=(r*f*s-u*o*s+u*i*l-n*f*l-r*i*d+n*o*d)*A,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,f=o+o,d=a*c,p=a*u,_=a*f,x=r*u,m=r*f,h=o*f,g=l*c,v=l*u,y=l*f,C=i.x,w=i.y,A=i.z;return s[0]=(1-(x+h))*C,s[1]=(p+y)*C,s[2]=(_-v)*C,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(d+h))*w,s[6]=(m+g)*w,s[7]=0,s[8]=(_+v)*A,s[9]=(m-g)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=eo.set(s[0],s[1],s[2]).length(),r=eo.set(s[4],s[5],s[6]).length(),o=eo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],xi.copy(this);let c=1/a,u=1/r,f=1/o;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=f,xi.elements[9]*=f,xi.elements[10]*=f,n.setFromRotationMatrix(xi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=bi,l=!1){let c=this.elements,u=2*a/(n-t),f=2*a/(i-s),d=(n+t)/(n-t),p=(i+s)/(i-s),_,x;if(l)_=a/(r-a),x=r*a/(r-a);else if(o===bi)_=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===$l)_=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=bi,l=!1){let c=this.elements,u=2/(n-t),f=2/(i-s),d=-(n+t)/(n-t),p=-(i+s)/(i-s),_,x;if(l)_=1/(r-a),x=r/(r-a);else if(o===bi)_=-2/(r-a),x=-(r+a)/(r-a);else if(o===$l)_=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},eo=new L,xi=new xe,KT=new L(0,0,0),QT=new L(1,1,1),na=new L,Eh=new L,Yn=new L,FS=new xe,HS=new di,Nn=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return FS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(FS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return HS.setFromEuler(this),this.setFromQuaternion(HS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jT=0,VS=new L,no=new di,hs=new xe,Th=new L,kl=new L,$T=new L,tA=new di,GS=new L(1,0,0),kS=new L(0,1,0),XS=new L(0,0,1),WS={type:"added"},eA={type:"removed"},io={type:"childadded",child:null},Eg={type:"childremoved",child:null},en=class e extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new Nn,i=new di,s=new L(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Jt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return no.setFromAxisAngle(t,n),this.quaternion.multiply(no),this}rotateOnWorldAxis(t,n){return no.setFromAxisAngle(t,n),this.quaternion.premultiply(no),this}rotateX(t){return this.rotateOnAxis(GS,t)}rotateY(t){return this.rotateOnAxis(kS,t)}rotateZ(t){return this.rotateOnAxis(XS,t)}translateOnAxis(t,n){return VS.copy(t).applyQuaternion(this.quaternion),this.position.add(VS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(GS,t)}translateY(t){return this.translateOnAxis(kS,t)}translateZ(t){return this.translateOnAxis(XS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Th.copy(t):Th.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),kl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(kl,Th,this.up):hs.lookAt(Th,kl,this.up),this.quaternion.setFromRotationMatrix(hs),s&&(hs.extractRotation(s.matrixWorld),no.setFromRotationMatrix(hs),this.quaternion.premultiply(no.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(WS),io.child=t,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(eA),Eg.child=t,this.dispatchEvent(Eg),Eg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hs.multiply(t.parent.matrixWorld)),t.applyMatrix4(hs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(WS),io.child=t,this.dispatchEvent(io),io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kl,t,$T),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kl,tA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];a(t.shapes,f)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),f=r(t.shapes),d=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};en.DEFAULT_UP=new L(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=new L,fs=new L,Tg=new L,ds=new L,so=new L,ao=new L,qS=new L,Ag=new L,wg=new L,Cg=new L,Rg=new fe,Dg=new fe,Ug=new fe,aa=class e{constructor(t=new L,n=new L,i=new L){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Si.subVectors(t,n),s.cross(Si);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Si.subVectors(s,n),fs.subVectors(i,n),Tg.subVectors(t,n);let r=Si.dot(Si),o=Si.dot(fs),l=Si.dot(Tg),c=fs.dot(fs),u=fs.dot(Tg),f=r*c-o*o;if(f===0)return a.set(0,0,0),null;let d=1/f,p=(c*l-o*u)*d,_=(r*u-o*l)*d;return a.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ds)===null?!1:ds.x>=0&&ds.y>=0&&ds.x+ds.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,ds)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ds.x),l.addScaledVector(r,ds.y),l.addScaledVector(o,ds.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Rg.setScalar(0),Dg.setScalar(0),Ug.setScalar(0),Rg.fromBufferAttribute(t,n),Dg.fromBufferAttribute(t,i),Ug.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Rg,a.x),r.addScaledVector(Dg,a.y),r.addScaledVector(Ug,a.z),r}static isFrontFacing(t,n,i,s){return Si.subVectors(i,n),fs.subVectors(t,n),Si.cross(fs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),Si.cross(fs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;so.subVectors(s,i),ao.subVectors(a,i),Ag.subVectors(t,i);let l=so.dot(Ag),c=ao.dot(Ag);if(l<=0&&c<=0)return n.copy(i);wg.subVectors(t,s);let u=so.dot(wg),f=ao.dot(wg);if(u>=0&&f<=u)return n.copy(s);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(so,r);Cg.subVectors(t,a);let p=so.dot(Cg),_=ao.dot(Cg);if(_>=0&&p<=_)return n.copy(a);let x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(ao,o);let m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return qS.subVectors(a,s),o=(f-u)/(f-u+(p-_)),n.copy(s).addScaledVector(qS,o);let h=1/(m+x+d);return r=x*h,o=d*h,n.copy(i).addScaledVector(so,r).addScaledVector(ao,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},KM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ia={h:0,s:0,l:0},Ah={h:0,s:0,l:0};function Lg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Xt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=re.workingColorSpace){return this.r=t,this.g=n,this.b=i,re.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=re.workingColorSpace){if(t=WT(t,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Lg(r,a,t+1/3),this.g=Lg(r,a,t),this.b=Lg(r,a,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,n=pn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=pn){let i=KM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}copyLinearToSRGB(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return re.workingToColorSpace(dn.copy(this),t),Math.round($t(dn.r*255,0,255))*65536+Math.round($t(dn.g*255,0,255))*256+Math.round($t(dn.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=re.workingColorSpace){re.workingToColorSpace(dn.copy(this),n);let i=dn.r,s=dn.g,a=dn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let f=r-o;switch(c=u<=.5?f/(r+o):f/(2-r-o),r){case i:l=(s-a)/f+(s<a?6:0);break;case s:l=(a-i)/f+2;break;case a:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=re.workingColorSpace){return re.workingToColorSpace(dn.copy(this),n),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=pn){re.workingToColorSpace(dn.copy(this),t);let n=dn.r,i=dn.g,s=dn.b;return t!==pn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ia),this.setHSL(ia.h+t,ia.s+n,ia.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ia),t.getHSL(Ah);let i=pg(ia.h,Ah.h,n),s=pg(ia.s,Ah.s,n),a=pg(ia.l,Ah.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Xt;Xt.NAMES=KM;var nA=0,vs=class extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nA++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=Ha,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=Xh,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ha&&(i.blending=this.blending),this.side!==gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kh&&(i.blendSrc=this.blendSrc),this.blendDst!==Xh&&(i.blendDst=this.blendDst),this.blendEquation!==ra&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Va&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},nc=class extends vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Xe=new L,wh=new gt,iA=0,Un=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Wg,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wh.fromBufferAttribute(this,n),wh.applyMatrix3(t),this.setXY(n,wh.x,wh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix3(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix4(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyNormalMatrix(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.transformDirection(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Hl(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Hl(n,this.array)),n}setX(t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Hl(n,this.array)),n}setY(t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Hl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Hl(n,this.array)),n}setW(t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Dn(n,this.array),i=Dn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Dn(n,this.array),i=Dn(i,this.array),s=Dn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Dn(n,this.array),i=Dn(i,this.array),s=Dn(s,this.array),a=Dn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wg&&(t.usage=this.usage),t}};var ic=class extends Un{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var sc=class extends Un{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var tn=class extends Un{constructor(t,n,i){super(new Float32Array(t),n,i)}},sA=0,hi=new xe,Ng=new en,ro=new L,Zn=new zi,Xl=new zi,$e=new L,Ti=class e extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sA++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(m0(t)?sc:ic)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Jt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,n,i){return hi.makeTranslation(t,n,i),this.applyMatrix4(hi),this}scale(t,n,i){return hi.makeScale(t,n,i),this.applyMatrix4(hi),this}lookAt(t){return Ng.lookAt(t),Ng.updateMatrix(),this.applyMatrix4(Ng.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new tn(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Xl.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(Zn.min,Xl.min),Zn.expandByPoint($e),$e.addVectors(Zn.max,Xl.max),Zn.expandByPoint($e)):(Zn.expandByPoint(Xl.min),Zn.expandByPoint(Xl.max))}Zn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)$e.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared($e));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$e.fromBufferAttribute(o,c),l&&(ro.fromBufferAttribute(t,c),$e.add(ro)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new L,l[D]=new L;let c=new L,u=new L,f=new L,d=new gt,p=new gt,_=new gt,x=new L,m=new L;function h(D,E,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(a,D),p.fromBufferAttribute(a,E),_.fromBufferAttribute(a,M),u.sub(c),f.sub(c),p.sub(d),_.sub(d);let U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(U),o[D].add(x),o[E].add(x),o[M].add(x),l[D].add(m),l[E].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let D=0,E=g.length;D<E;++D){let M=g[D],U=M.start,z=M.count;for(let W=U,K=U+z;W<K;W+=3)h(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let v=new L,y=new L,C=new L,w=new L;function A(D){C.fromBufferAttribute(s,D),w.copy(C);let E=o[D];v.copy(E),v.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(w,E);let U=y.dot(l[D])<0?-1:1;r.setXYZW(D,v.x,v.y,v.z,U)}for(let D=0,E=g.length;D<E;++D){let M=g[D],U=M.start,z=M.count;for(let W=U,K=U+z;W<K;W+=3)A(t.getX(W+0)),A(t.getX(W+1)),A(t.getX(W+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new L,a=new L,r=new L,o=new L,l=new L,c=new L,u=new L,f=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let _=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),u.subVectors(r,a),f.subVectors(s,a),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),a.fromBufferAttribute(n,d+1),r.fromBufferAttribute(n,d+2),u.subVectors(r,a),f.subVectors(s,a),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)$e.fromBufferAttribute(t,n),$e.normalize(),t.setXYZ(n,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u),p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Un(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,f=c.length;u<f;u++){let d=c[u],p=t(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let a=t.morphAttributes;for(let c in a){let u=[],f=a[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},YS=new xe,Ba=new ec,Ch=new oa,ZS=new L,Rh=new L,Dh=new L,Uh=new L,Ig=new L,Lh=new L,JS=new L,Nh=new L,Ce=class extends en{constructor(t=new Ti,n=new nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Lh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],f=a[l];u!==0&&(Ig.fromBufferAttribute(f,t),r?Lh.addScaledVector(Ig,u):Lh.addScaledVector(Ig.sub(n),u))}n.add(Lh)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ch.copy(i.boundingSphere),Ch.applyMatrix4(a),Ba.copy(t.ray).recast(t.near),!(Ch.containsPoint(Ba.origin)===!1&&(Ba.intersectSphere(Ch,ZS)===null||Ba.origin.distanceToSquared(ZS)>(t.far-t.near)**2))&&(YS.copy(a).invert(),Ba.copy(t.ray).applyMatrix4(YS),!(i.boundingBox!==null&&Ba.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ba)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){let m=d[_],h=r[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,C=v;y<C;y+=3){let w=o.getX(y),A=o.getX(y+1),D=o.getX(y+2);s=Ih(this,h,t,i,c,u,f,w,A,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){let g=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);s=Ih(this,r,t,i,c,u,f,g,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,x=d.length;_<x;_++){let m=d[_],h=r[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,C=v;y<C;y+=3){let w=y,A=y+1,D=y+2;s=Ih(this,h,t,i,c,u,f,w,A,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){let g=m,v=m+1,y=m+2;s=Ih(this,r,t,i,c,u,f,g,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function aA(e,t,n,i,s,a,r,o){let l;if(t.side===un?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===gs,o),l===null)return null;Nh.copy(o),Nh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Nh);return c<n.near||c>n.far?null:{distance:c,point:Nh.clone(),object:e}}function Ih(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Rh),e.getVertexPosition(l,Dh),e.getVertexPosition(c,Uh);let u=aA(e,t,n,i,Rh,Dh,Uh,JS);if(u){let f=new L;aa.getBarycoord(JS,Rh,Dh,Uh,f),s&&(u.uv=aa.getInterpolatedAttribute(s,o,l,c,f,new gt)),a&&(u.uv1=aa.getInterpolatedAttribute(a,o,l,c,f,new gt)),r&&(u.normal=aa.getInterpolatedAttribute(r,o,l,c,f,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};aa.getNormal(Rh,Dh,Uh,d.normal),u.face=d,u.barycoord=f}return u}var la=class e extends Ti{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],f=[],d=0,p=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(f,2));function _(x,m,h,g,v,y,C,w,A,D,E){let M=y/A,U=C/D,z=y/2,W=C/2,K=w/2,Z=A+1,Y=D+1,it=0,G=0,lt=new L;for(let vt=0;vt<Y;vt++){let Mt=vt*U-W;for(let zt=0;zt<Z;zt++){let Qt=zt*M-z;lt[x]=Qt*g,lt[m]=Mt*v,lt[h]=K,c.push(lt.x,lt.y,lt.z),lt[x]=0,lt[m]=0,lt[h]=w>0?1:-1,u.push(lt.x,lt.y,lt.z),f.push(zt/A),f.push(1-vt/D),it+=1}}for(let vt=0;vt<D;vt++)for(let Mt=0;Mt<A;Mt++){let zt=d+Mt+Z*vt,Qt=d+Mt+Z*(vt+1),ne=d+(Mt+1)+Z*(vt+1),nt=d+(Mt+1)+Z*vt;l.push(zt,Qt,nt),l.push(Qt,ne,nt),G+=6}o.addGroup(p,G,E),p+=G,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Qa(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function mn(e){let t={};for(let n=0;n<e.length;n++){let i=Qa(e[n]);for(let s in i)t[s]=i[s]}return t}function rA(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function g0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var QM={clone:Qa,merge:mn},oA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ai=class extends vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oA,this.fragmentShader=lA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qa(t.uniforms),this.uniformsGroups=rA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},ac=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},sa=new L,KS=new gt,QS=new gt,cn=class extends ac{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Zh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zh*2*Math.atan(Math.tan(dg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){sa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sa.x,sa.y).multiplyScalar(-t/sa.z),sa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sa.x,sa.y).multiplyScalar(-t/sa.z)}getViewSize(t,n){return this.getViewBounds(t,KS,QS),n.subVectors(QS,KS)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(dg*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},oo=-90,lo=1,jh=class extends en{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(oo,lo,t,n);s.layers=this.layers,this.add(s);let a=new cn(oo,lo,t,n);a.layers=this.layers,this.add(a);let r=new cn(oo,lo,t,n);r.layers=this.layers,this.add(r);let o=new cn(oo,lo,t,n);o.layers=this.layers,this.add(o);let l=new cn(oo,lo,t,n);l.layers=this.layers,this.add(l);let c=new cn(oo,lo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$l)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,u),t.setRenderTarget(f,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},rc=class extends Sn{constructor(t=[],n=Ja,i,s,a,r,o,l,c,u){super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$h=class extends Bi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new rc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new la(5,5,5),a=new Ai({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:ys});a.uniforms.tEquirect.value=n;let r=new Ce(s,a),o=n.minFilter;return n.minFilter===fa&&(n.minFilter=Ei),new jh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},ps=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},cA={type:"move"},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new ps;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var ka=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var tf=class extends Sn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=Ln,u=Ln,f,d){super(null,r,o,l,c,u,s,a,f,d),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oc=class extends Un{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},co=new xe,jS=new xe,Oh=[],$S=new zi,uA=new xe,Wl=new Ce,ql=new oa,lc=class extends Ce{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new oc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,uA)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,co),$S.copy(t.boundingBox).applyMatrix4(co),this.boundingBox.union($S)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new oa),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,co),ql.copy(t.boundingSphere).applyMatrix4(co),this.boundingSphere.union(ql)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,n){let i=this.matrixWorld,s=this.count;if(Wl.geometry=this.geometry,Wl.material=this.material,Wl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ql.copy(this.boundingSphere),ql.applyMatrix4(i),t.ray.intersectsSphere(ql)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,co),jS.multiplyMatrices(i,co),Wl.matrixWorld=jS,Wl.raycast(t,Oh);for(let r=0,o=Oh.length;r<o;r++){let l=Oh[r];l.instanceId=a,l.object=this,n.push(l)}Oh.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new oc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new tf(new Float32Array(s*this.count),s,this.count,Bf,Ci));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;a[l]=o,a.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Og=new L,hA=new L,fA=new Jt,fi=class{constructor(t=new L(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Og.subVectors(i,n).cross(hA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(Og),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||fA.getNormalMatrix(t),s=this.coplanarPoint(Og).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},za=new oa,dA=new gt(.5,.5),Ph=new L,yo=class{constructor(t=new fi,n=new fi,i=new fi,s=new fi,a=new fi,r=new fi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=bi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],f=a[5],d=a[6],p=a[7],_=a[8],x=a[9],m=a[10],h=a[11],g=a[12],v=a[13],y=a[14],C=a[15];if(s[0].setComponents(c-r,p-u,h-_,C-g).normalize(),s[1].setComponents(c+r,p+u,h+_,C+g).normalize(),s[2].setComponents(c+o,p+f,h+x,C+v).normalize(),s[3].setComponents(c-o,p-f,h-x,C-v).normalize(),i)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,h-m,C-y).normalize();else if(s[4].setComponents(c-l,p-d,h-m,C-y).normalize(),n===bi)s[5].setComponents(c+l,p+d,h+m,C+y).normalize();else if(n===$l)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),za.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(za)}intersectsSprite(t){za.center.set(0,0,0);let n=dA.distanceTo(t.center);return za.radius=.7071067811865476+n,za.applyMatrix4(t.matrixWorld),this.intersectsSphere(za)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ph.x=s.normal.x>0?t.max.x:t.min.x,Ph.y=s.normal.y>0?t.max.y:t.min.y,Ph.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ph)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cc=class extends Sn{constructor(t,n,i=da,s,a,r,o=Ln,l=Ln,c,u=fo,f=1){if(u!==fo&&u!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:n,depth:f};super(d,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},uc=class extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let u=i[s],d=i[s+1]-u,p=(r-u)/d;return(s+p)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new gt:new L);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new L,s=[],a=[],r=[],o=new L,l=new xe;for(let p=0;p<=t;p++){let _=p/t;s[p]=this.getTangentAt(_,new L)}a[0]=new L,r[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos($t(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,_))}r[p].crossVectors(s[p],a[p])}if(n===!0){let p=Math.acos($t(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let _=1;_<=t;_++)a[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),r[_].crossVectors(s[_],a[_])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xo=class extends Jn{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new gt){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ef=class extends xo{constructor(t,n,i,s,a,r){super(t,n,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function _0(){let e=0,t=0,n=0,i=0;function s(a,r,o,l){e=a,t=o,n=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,f){let d=(r-a)/c-(o-a)/(c+u)+(o-r)/u,p=(o-r)/u-(l-r)/(u+f)+(l-o)/f;d*=u,p*=u,s(r,o,d,p)},calc:function(a){let r=a*a,o=r*a;return e+t*a+n*r+i*o}}}var Bh=new L,Pg=new _0,Bg=new _0,zg=new _0,nf=class extends Jn{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new L){let i=n,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:(Bh.subVectors(s[0],s[1]).add(s[0]),c=Bh);let f=s[o%a],d=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(Bh.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=Bh),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Pg.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,_,x,m),Bg.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,_,x,m),zg.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(Pg.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Bg.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),zg.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(Pg.calc(l),Bg.calc(l),zg.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function tM(e,t,n,i,s){let a=(i-t)*.5,r=(s-n)*.5,o=e*e,l=e*o;return(2*n-2*i+a+r)*l+(-3*n+3*i-2*a-r)*o+a*e+n}function pA(e,t){let n=1-e;return n*n*t}function mA(e,t){return 2*(1-e)*e*t}function gA(e,t){return e*e*t}function Jl(e,t,n,i){return pA(e,t)+mA(e,n)+gA(e,i)}function _A(e,t){let n=1-e;return n*n*n*t}function vA(e,t){let n=1-e;return 3*n*n*e*t}function yA(e,t){return 3*(1-e)*e*e*t}function xA(e,t){return e*e*e*t}function Kl(e,t,n,i,s){return _A(e,t)+vA(e,n)+yA(e,i)+xA(e,s)}var hc=class extends Jn{constructor(t=new gt,n=new gt,i=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new gt){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Kl(t,s.x,a.x,r.x,o.x),Kl(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sf=class extends Jn{constructor(t=new L,n=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new L){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Kl(t,s.x,a.x,r.x,o.x),Kl(t,s.y,a.y,r.y,o.y),Kl(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fc=class extends Jn{constructor(t=new gt,n=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new gt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new gt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},af=class extends Jn{constructor(t=new L,n=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new L){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new L){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dc=class extends Jn{constructor(t=new gt,n=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new gt){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(Jl(t,s.x,a.x,r.x),Jl(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rf=class extends Jn{constructor(t=new L,n=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new L){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(Jl(t,s.x,a.x,r.x),Jl(t,s.y,a.y,r.y),Jl(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pc=class extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new gt){let i=n,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return i.set(tM(o,l.x,c.x,u.x,f.x),tM(o,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new gt().fromArray(s))}return this}},qg=Object.freeze({__proto__:null,ArcCurve:ef,CatmullRomCurve3:nf,CubicBezierCurve:hc,CubicBezierCurve3:sf,EllipseCurve:xo,LineCurve:fc,LineCurve3:af,QuadraticBezierCurve:dc,QuadraticBezierCurve3:rf,SplineCurve:pc}),of=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qg[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,n)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(new qg[s.type]().fromJSON(s))}return this}},Xa=class extends of{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new fc(this.currentPoint.clone(),new gt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,s){let a=new dc(this.currentPoint.clone(),new gt(t,n),new gt(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,n,i,s,a,r){let o=new hc(this.currentPoint.clone(),new gt(t,n),new gt(i,s),new gt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new pc(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,n+l,i,s,a,r),this}absarc(t,n,i,s,a,r){return this.absellipse(t,n,i,i,s,a,r),this}ellipse(t,n,i,s,a,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,n+u,i,s,a,r,o,l),this}absellipse(t,n,i,s,a,r,o,l){let c=new xo(t,n,i,s,a,r,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ca=class extends Xa{constructor(t){super(t),this.uuid=Co(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(new Xa().fromJSON(s))}return this}};function SA(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,a=jM(e,0,s,n,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(i&&(a=AA(e,t,a,n)),e.length>80*n){o=1/0,l=1/0;let u=-1/0,f=-1/0;for(let d=n;d<s;d+=n){let p=e[d],_=e[d+1];p<o&&(o=p),_<l&&(l=_),p>u&&(u=p),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return mc(a,r,n,o,l,c,0),r}function jM(e,t,n,i,s){let a;if(s===BA(e,t,n,i)>0)for(let r=t;r<n;r+=i)a=eM(r/i|0,e[r],e[r+1],a);else for(let r=n-i;r>=t;r-=i)a=eM(r/i|0,e[r],e[r+1],a);return a&&So(a,a.next)&&(_c(a),a=a.next),a}function Wa(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(So(n,n.next)||Ne(n.prev,n,n.next)===0)){if(_c(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function mc(e,t,n,i,s,a,r){if(!e)return;!r&&a&&UA(e,i,s,a);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(a?bA(e,i,s,a):MA(e)){t.push(l.i,e.i,c.i),_c(e),e=c.next,o=c.next;continue}if(e=c,e===o){r?r===1?(e=EA(Wa(e),t),mc(e,t,n,i,s,a,2)):r===2&&TA(e,t,n,i,s,a):mc(Wa(e),t,n,i,s,a,1);break}}}function MA(e){let t=e.prev,n=e,i=e.next;if(Ne(t,n,i)>=0)return!1;let s=t.x,a=n.x,r=i.x,o=t.y,l=n.y,c=i.y,u=Math.min(s,a,r),f=Math.min(o,l,c),d=Math.max(s,a,r),p=Math.max(o,l,c),_=i.next;for(;_!==t;){if(_.x>=u&&_.x<=d&&_.y>=f&&_.y<=p&&Zl(s,o,a,l,r,c,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function bA(e,t,n,i){let s=e.prev,a=e,r=e.next;if(Ne(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,u=s.y,f=a.y,d=r.y,p=Math.min(o,l,c),_=Math.min(u,f,d),x=Math.max(o,l,c),m=Math.max(u,f,d),h=Yg(p,_,t,n,i),g=Yg(x,m,t,n,i),v=e.prevZ,y=e.nextZ;for(;v&&v.z>=h&&y&&y.z<=g;){if(v.x>=p&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==r&&Zl(o,u,l,f,c,d,v.x,v.y)&&Ne(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==r&&Zl(o,u,l,f,c,d,y.x,y.y)&&Ne(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=h;){if(v.x>=p&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==r&&Zl(o,u,l,f,c,d,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=g;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==r&&Zl(o,u,l,f,c,d,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function EA(e,t){let n=e;do{let i=n.prev,s=n.next.next;!So(i,s)&&tb(i,n,n.next,s)&&gc(i,s)&&gc(s,i)&&(t.push(i.i,n.i,s.i),_c(n),_c(n.next),n=e=s),n=n.next}while(n!==e);return Wa(n)}function TA(e,t,n,i,s,a){let r=e;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&IA(r,o)){let l=eb(r,o);r=Wa(r,r.next),l=Wa(l,l.next),mc(r,t,n,i,s,a,0),mc(l,t,n,i,s,a,0);return}o=o.next}r=r.next}while(r!==e)}function AA(e,t,n,i){let s=[];for(let a=0,r=t.length;a<r;a++){let o=t[a]*i,l=a<r-1?t[a+1]*i:e.length,c=jM(e,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(NA(c))}s.sort(wA);for(let a=0;a<s.length;a++)n=CA(s[a],n);return n}function wA(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){let i=(e.next.y-e.y)/(e.next.x-e.x),s=(t.next.y-t.y)/(t.next.x-t.x);n=i-s}return n}function CA(e,t){let n=RA(e,t);if(!n)return t;let i=eb(n,e);return Wa(i,i.next),Wa(n,n.next)}function RA(e,t){let n=t,i=e.x,s=e.y,a=-1/0,r;if(So(e,n))return n;do{if(So(e,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let f=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>a&&(a=f,r=n.x<n.next.x?n:n.next,f===i))return r}n=n.next}while(n!==t);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0;n=r;do{if(i>=n.x&&n.x>=l&&i!==n.x&&$M(s<c?i:a,s,l,c,s<c?a:i,s,n.x,n.y)){let f=Math.abs(s-n.y)/(i-n.x);gc(n,e)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&DA(r,n)))&&(r=n,u=f)}n=n.next}while(n!==o);return r}function DA(e,t){return Ne(e.prev,e,t.prev)<0&&Ne(t.next,e,e.next)<0}function UA(e,t,n,i){let s=e;do s.z===0&&(s.z=Yg(s.x,s.y,t,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,LA(s)}function LA(e){let t,n=1;do{let i=e,s;e=null;let a=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<n&&(o++,r=r.nextZ,!!r);c++);let l=n;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:e=s,s.prevZ=a,a=s;i=r}a.nextZ=null,n*=2}while(t>1);return e}function Yg(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function NA(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function $M(e,t,n,i,s,a,r,o){return(s-r)*(t-o)>=(e-r)*(a-o)&&(e-r)*(i-o)>=(n-r)*(t-o)&&(n-r)*(a-o)>=(s-r)*(i-o)}function Zl(e,t,n,i,s,a,r,o){return!(e===r&&t===o)&&$M(e,t,n,i,s,a,r,o)}function IA(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!OA(e,t)&&(gc(e,t)&&gc(t,e)&&PA(e,t)&&(Ne(e.prev,e,t.prev)||Ne(e,t.prev,t))||So(e,t)&&Ne(e.prev,e,e.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function So(e,t){return e.x===t.x&&e.y===t.y}function tb(e,t,n,i){let s=Fh(Ne(e,t,n)),a=Fh(Ne(e,t,i)),r=Fh(Ne(n,i,e)),o=Fh(Ne(n,i,t));return!!(s!==a&&r!==o||s===0&&zh(e,n,t)||a===0&&zh(e,i,t)||r===0&&zh(n,e,i)||o===0&&zh(n,t,i))}function zh(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Fh(e){return e>0?1:e<0?-1:0}function OA(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&tb(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function gc(e,t){return Ne(e.prev,e,e.next)<0?Ne(e,t,e.next)>=0&&Ne(e,e.prev,t)>=0:Ne(e,t,e.prev)<0||Ne(e,e.next,t)<0}function PA(e,t){let n=e,i=!1,s=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&s<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function eb(e,t){let n=Zg(e.i,e.x,e.y),i=Zg(t.i,t.x,t.y),s=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,a.next=i,i.prev=a,i}function eM(e,t,n,i){let s=Zg(e,t,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _c(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Zg(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function BA(e,t,n,i){let s=0;for(let a=t,r=n-i;a<n;a+=i)s+=(e[r]-e[a])*(e[a+1]+e[r+1]),r=a;return s}var Jg=class{static triangulate(t,n,i=2){return SA(t,n,i)}},Pi=class e{static area(t){let n=t.length,i=0;for(let s=n-1,a=0;a<n;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],s=[],a=[];nM(t),iM(i,t);let r=t.length;n.forEach(nM);for(let l=0;l<n.length;l++)s.push(r),r+=n[l].length,iM(i,n[l]);let o=Jg.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function nM(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function iM(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var vc=class e extends Ti{constructor(t=new ca([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];r(c)}this.setAttribute("position",new tn(s,3)),this.setAttribute("uv",new tn(a,2)),this.computeVertexNormals();function r(o){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,h=n.extrudePath,g=n.UVGenerator!==void 0?n.UVGenerator:zA,v,y=!1,C,w,A,D;h&&(v=h.getSpacedPoints(u),y=!0,d=!1,C=h.computeFrenetFrames(u,!1),w=new L,A=new L,D=new L),d||(m=0,p=0,_=0,x=0);let E=o.extractPoints(c),M=E.shape,U=E.holes;if(!Pi.isClockWise(M)){M=M.reverse();for(let X=0,j=U.length;X<j;X++){let $=U[X];Pi.isClockWise($)&&(U[X]=$.reverse())}}function W(X){let $=10000000000000001e-36,Q=X[0];for(let ct=1;ct<=X.length;ct++){let ot=ct%X.length,mt=X[ot],Wt=mt.x-Q.x,Vt=mt.y-Q.y,T=Wt*Wt+Vt*Vt,S=Math.max(Math.abs(mt.x),Math.abs(mt.y),Math.abs(Q.x),Math.abs(Q.y)),P=$*S*S;if(T<=P){X.splice(ot,1),ct--;continue}Q=mt}}W(M),U.forEach(W);let K=U.length,Z=M;for(let X=0;X<K;X++){let j=U[X];M=M.concat(j)}function Y(X,j,$){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(j,$)}let it=M.length;function G(X,j,$){let Q,ct,ot,mt=X.x-j.x,Wt=X.y-j.y,Vt=$.x-X.x,T=$.y-X.y,S=mt*mt+Wt*Wt,P=mt*T-Wt*Vt;if(Math.abs(P)>Number.EPSILON){let H=Math.sqrt(S),st=Math.sqrt(Vt*Vt+T*T),q=j.x-Wt/H,wt=j.y+mt/H,ft=$.x-T/st,Ct=$.y+Vt/st,Rt=((ft-q)*T-(Ct-wt)*Vt)/(mt*T-Wt*Vt);Q=q+mt*Rt-X.x,ct=wt+Wt*Rt-X.y;let ut=Q*Q+ct*ct;if(ut<=2)return new gt(Q,ct);ot=Math.sqrt(ut/2)}else{let H=!1;mt>Number.EPSILON?Vt>Number.EPSILON&&(H=!0):mt<-Number.EPSILON?Vt<-Number.EPSILON&&(H=!0):Math.sign(Wt)===Math.sign(T)&&(H=!0),H?(Q=-Wt,ct=mt,ot=Math.sqrt(S)):(Q=mt,ct=Wt,ot=Math.sqrt(S/2))}return new gt(Q/ot,ct/ot)}let lt=[];for(let X=0,j=Z.length,$=j-1,Q=X+1;X<j;X++,$++,Q++)$===j&&($=0),Q===j&&(Q=0),lt[X]=G(Z[X],Z[$],Z[Q]);let vt=[],Mt,zt=lt.concat();for(let X=0,j=K;X<j;X++){let $=U[X];Mt=[];for(let Q=0,ct=$.length,ot=ct-1,mt=Q+1;Q<ct;Q++,ot++,mt++)ot===ct&&(ot=0),mt===ct&&(mt=0),Mt[Q]=G($[Q],$[ot],$[mt]);vt.push(Mt),zt=zt.concat(Mt)}let Qt;if(m===0)Qt=Pi.triangulateShape(Z,U);else{let X=[],j=[];for(let $=0;$<m;$++){let Q=$/m,ct=p*Math.cos(Q*Math.PI/2),ot=_*Math.sin(Q*Math.PI/2)+x;for(let mt=0,Wt=Z.length;mt<Wt;mt++){let Vt=Y(Z[mt],lt[mt],ot);rt(Vt.x,Vt.y,-ct),Q===0&&X.push(Vt)}for(let mt=0,Wt=K;mt<Wt;mt++){let Vt=U[mt];Mt=vt[mt];let T=[];for(let S=0,P=Vt.length;S<P;S++){let H=Y(Vt[S],Mt[S],ot);rt(H.x,H.y,-ct),Q===0&&T.push(H)}Q===0&&j.push(T)}}Qt=Pi.triangulateShape(X,j)}let ne=Qt.length,nt=_+x;for(let X=0;X<it;X++){let j=d?Y(M[X],zt[X],nt):M[X];y?(A.copy(C.normals[0]).multiplyScalar(j.x),w.copy(C.binormals[0]).multiplyScalar(j.y),D.copy(v[0]).add(A).add(w),rt(D.x,D.y,D.z)):rt(j.x,j.y,0)}for(let X=1;X<=u;X++)for(let j=0;j<it;j++){let $=d?Y(M[j],zt[j],nt):M[j];y?(A.copy(C.normals[X]).multiplyScalar($.x),w.copy(C.binormals[X]).multiplyScalar($.y),D.copy(v[X]).add(A).add(w),rt(D.x,D.y,D.z)):rt($.x,$.y,f/u*X)}for(let X=m-1;X>=0;X--){let j=X/m,$=p*Math.cos(j*Math.PI/2),Q=_*Math.sin(j*Math.PI/2)+x;for(let ct=0,ot=Z.length;ct<ot;ct++){let mt=Y(Z[ct],lt[ct],Q);rt(mt.x,mt.y,f+$)}for(let ct=0,ot=U.length;ct<ot;ct++){let mt=U[ct];Mt=vt[ct];for(let Wt=0,Vt=mt.length;Wt<Vt;Wt++){let T=Y(mt[Wt],Mt[Wt],Q);y?rt(T.x,T.y+v[u-1].y,v[u-1].x+$):rt(T.x,T.y,f+$)}}}B(),F();function B(){let X=s.length/3;if(d){let j=0,$=it*j;for(let Q=0;Q<ne;Q++){let ct=Qt[Q];at(ct[2]+$,ct[1]+$,ct[0]+$)}j=u+m*2,$=it*j;for(let Q=0;Q<ne;Q++){let ct=Qt[Q];at(ct[0]+$,ct[1]+$,ct[2]+$)}}else{for(let j=0;j<ne;j++){let $=Qt[j];at($[2],$[1],$[0])}for(let j=0;j<ne;j++){let $=Qt[j];at($[0]+it*u,$[1]+it*u,$[2]+it*u)}}i.addGroup(X,s.length/3-X,0)}function F(){let X=s.length/3,j=0;J(Z,j),j+=Z.length;for(let $=0,Q=U.length;$<Q;$++){let ct=U[$];J(ct,j),j+=ct.length}i.addGroup(X,s.length/3-X,1)}function J(X,j){let $=X.length;for(;--$>=0;){let Q=$,ct=$-1;ct<0&&(ct=X.length-1);for(let ot=0,mt=u+m*2;ot<mt;ot++){let Wt=it*ot,Vt=it*(ot+1),T=j+Q+Wt,S=j+ct+Wt,P=j+ct+Vt,H=j+Q+Vt;It(T,S,P,H)}}}function rt(X,j,$){l.push(X),l.push(j),l.push($)}function at(X,j,$){Lt(X),Lt(j),Lt($);let Q=s.length/3,ct=g.generateTopUV(i,s,Q-3,Q-2,Q-1);R(ct[0]),R(ct[1]),R(ct[2])}function It(X,j,$,Q){Lt(X),Lt(j),Lt(Q),Lt(j),Lt($),Lt(Q);let ct=s.length/3,ot=g.generateSideWallUV(i,s,ct-6,ct-3,ct-2,ct-1);R(ot[0]),R(ot[1]),R(ot[3]),R(ot[1]),R(ot[2]),R(ot[3])}function Lt(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function R(X){a.push(X.x),a.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return FA(n,i,t)}static fromJSON(t,n){let i=[];for(let a=0,r=t.shapes.length;a<r;a++){let o=n[t.shapes[a]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new qg[s.type]().fromJSON(s)),new e(i,t.options)}},zA={generateTopUV:function(e,t,n,i,s){let a=t[n*3],r=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new gt(a,r),new gt(o,l),new gt(c,u)]},generateSideWallUV:function(e,t,n,i,s,a){let r=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],u=t[i*3+1],f=t[i*3+2],d=t[s*3],p=t[s*3+1],_=t[s*3+2],x=t[a*3],m=t[a*3+1],h=t[a*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new gt(r,1-l),new gt(c,1-f),new gt(d,1-_),new gt(x,1-h)]:[new gt(o,1-l),new gt(u,1-f),new gt(p,1-_),new gt(m,1-h)]}};function FA(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let a=e[i];n.shapes.push(a.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var yc=class e extends Ti{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=t/o,d=n/l,p=[],_=[],x=[],m=[];for(let h=0;h<u;h++){let g=h*d-r;for(let v=0;v<c;v++){let y=v*f-a;_.push(y,-g,0),x.push(0,0,1),m.push(v/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){let v=g+c*h,y=g+c*(h+1),C=g+1+c*(h+1),w=g+1+c*h;p.push(v,y,w),p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(x,3)),this.setAttribute("uv",new tn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var xc=class e extends Ti{constructor(t=new ca([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};let i=[],s=[],a=[],r=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new tn(s,3)),this.setAttribute("normal",new tn(a,3)),this.setAttribute("uv",new tn(r,2));function c(u){let f=s.length/3,d=u.extractPoints(n),p=d.shape,_=d.holes;Pi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,h=_.length;m<h;m++){let g=_[m];Pi.isClockWise(g)===!0&&(_[m]=g.reverse())}let x=Pi.triangulateShape(p,_);for(let m=0,h=_.length;m<h;m++){let g=_[m];p=p.concat(g)}for(let m=0,h=p.length;m<h;m++){let g=p[m];s.push(g.x,g.y,0),a.push(0,0,1),r.push(g.x,g.y)}for(let m=0,h=x.length;m<h;m++){let g=x[m],v=g[0]+f,y=g[1]+f,C=g[2]+f;i.push(v,y,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes;return HA(n,t)}static fromJSON(t,n){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let r=n[t.shapes[s]];i.push(r)}return new e(i,t.curveSegments)}};function HA(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let s=e[n];t.shapes.push(s.uuid)}else t.shapes.push(e.uuid);return t}var Sc=class e extends Ti{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,u=[],f=new L,d=new L,p=[],_=[],x=[],m=[];for(let h=0;h<=i;h++){let g=[],v=h/i,y=0;h===0&&r===0?y=.5/n:h===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){let w=C/n;f.x=-t*Math.cos(s+w*a)*Math.sin(r+v*o),f.y=t*Math.cos(r+v*o),f.z=t*Math.sin(s+w*a)*Math.sin(r+v*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(w+y,1-v),g.push(c++)}u.push(g)}for(let h=0;h<i;h++)for(let g=0;g<n;g++){let v=u[h][g+1],y=u[h][g],C=u[h+1][g],w=u[h+1][g+1];(h!==0||r>0)&&p.push(v,y,w),(h!==i-1||l<Math.PI)&&p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(x,3)),this.setAttribute("uv",new tn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qa=class extends vs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Mc=class extends qa{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var bc=class extends vs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},lf=class extends vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cf=class extends vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function VA(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ya=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uf=class extends Ya{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vg,endingEnd:Vg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Gg:a=t,o=2*n-i;break;case kg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gg:r=t,l=2*i-n;break;case kg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),x=_*_,m=x*_,h=-d*m+2*d*x-d*_,g=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*_+1,v=(-1-p)*m+(1.5+p)*x+.5*_,y=p*m-p*x;for(let C=0;C!==o;++C)a[C]=h*r[u+C]+g*r[c+C]+v*r[l+C]+y*r[f+C];return a}},hf=class extends Ya{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),f=1-u;for(let d=0;d!==o;++d)a[d]=r[c+d]*f+r[l+d]*u;return a}},ff=class extends Ya{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hh(n,this.TimeBufferType),this.values=Hh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Hh(t.times,Array),values:Hh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ff(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Ql:n=this.InterpolantFactoryMethodDiscrete;break;case Yh:n=this.InterpolantFactoryMethodLinear;break;case Vh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ql;case this.InterpolantFactoryMethodLinear:return Yh;case this.InterpolantFactoryMethodSmooth:return Vh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&VA(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Vh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*i,d=f-i,p=f+i;for(let _=0;_!==i;++_){let x=n[f+_];if(x!==n[d+_]||x!==n[p+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let f=o*i,d=r*i;for(let p=0;p!==i;++p)n[d+p]=n[f+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Yh;var ua=class extends Kn{constructor(t,n,i){super(t,n,i)}};ua.prototype.ValueTypeName="bool";ua.prototype.ValueBufferType=Array;ua.prototype.DefaultInterpolation=Ql;ua.prototype.InterpolantFactoryMethodLinear=void 0;ua.prototype.InterpolantFactoryMethodSmooth=void 0;var df=class extends Kn{constructor(t,n,i,s){super(t,n,i,s)}};df.prototype.ValueTypeName="color";var pf=class extends Kn{constructor(t,n,i,s){super(t,n,i,s)}};pf.prototype.ValueTypeName="number";var mf=class extends Ya{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)di.slerpFlat(a,0,r,c-o,r,c,l);return a}},Ec=class extends Kn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new mf(this.times,this.values,this.getValueSize(),t)}};Ec.prototype.ValueTypeName="quaternion";Ec.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends Kn{constructor(t,n,i){super(t,n,i)}};ha.prototype.ValueTypeName="string";ha.prototype.ValueBufferType=Array;ha.prototype.DefaultInterpolation=Ql;ha.prototype.InterpolantFactoryMethodLinear=void 0;ha.prototype.InterpolantFactoryMethodSmooth=void 0;var gf=class extends Kn{constructor(t,n,i,s){super(t,n,i,s)}};gf.prototype.ValueTypeName="vector";var Gh={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},_f=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},nb=new _f,Mo=class{constructor(t){this.manager=t!==void 0?t:nb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var uo=new WeakMap,vf=class extends Mo{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,r=Gh.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(r),a.manager.itemEnd(t)},0);else{let f=uo.get(r);f===void 0&&(f=[],uo.set(r,f)),f.push({onLoad:n,onError:s})}return r}let o=po("img");function l(){u(),n&&n(this);let f=uo.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onLoad&&p.onLoad(this)}uo.delete(this),a.manager.itemEnd(t)}function c(f){u(),s&&s(f),Gh.remove(`image:${t}`);let d=uo.get(this)||[];for(let p=0;p<d.length;p++){let _=d[p];_.onError&&_.onError(f)}uo.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gh.add(`image:${t}`,o),a.manager.itemStart(t),o.src=t,o}};var Tc=class extends Mo{constructor(t){super(t)}load(t,n,i,s){let a=new Sn,r=new vf(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}},bo=class extends en{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},Ac=class extends bo{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},Fg=new xe,sM=new L,aM=new L,yf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;sM.setFromMatrixPosition(t.matrixWorld),n.position.copy(sM),aM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(aM),n.updateMatrixWorld(),Fg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fg,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fg)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var rM=new xe,Yl=new L,Hg=new L,Kg=class extends yf{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,n=0){let i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Yl.setFromMatrixPosition(t.matrixWorld),i.position.copy(Yl),Hg.copy(i.position),Hg.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Hg),i.updateMatrixWorld(),s.makeTranslation(-Yl.x,-Yl.y,-Yl.z),rM.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rM,i.coordinateSystem,i.reversedDepth)}},wc=class extends bo{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Kg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Cc=class extends ac{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Qg=class extends yf{constructor(){super(new Cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Za=class extends bo{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Qg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var xf=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var v0="\\[\\]\\.:\\/",GA=new RegExp("["+v0+"]","g"),y0="[^"+v0+"]",kA="[^"+v0.replace("\\.","")+"]",XA=/((?:WC+[\/:])*)/.source.replace("WC",y0),WA=/(WCOD+)?/.source.replace("WCOD",kA),qA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",y0),YA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",y0),ZA=new RegExp("^"+XA+WA+qA+YA+"$"),JA=["material","materials","bones","map"],jg=class{constructor(t,n,i){let s=i||we.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},we=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(GA,"")}static parseTrackName(t){let n=ZA.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);JA.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=jg;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uD=new Float32Array(1);var oM=new xe,Rc=class{constructor(t,n,i=0,s=1/0){this.ray=new ec(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new _o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return oM.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oM),this}intersectObject(t,n=!0,i=[]){return $g(t,this,i,n),i.sort(lM),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)$g(t[s],this,i,n);return i.sort(lM),i}};function lM(e,t){return e.distance-t.distance}function $g(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)$g(a[r],t,n,!0)}}function x0(e,t,n,i){let s=KA(i);switch(n){case u0:return e*t;case Bf:return e*t/s.components*s.byteLength;case zf:return e*t/s.components*s.byteLength;case f0:return e*t*2/s.components*s.byteLength;case Ff:return e*t*2/s.components*s.byteLength;case h0:return e*t*3/s.components*s.byteLength;case mi:return e*t*4/s.components*s.byteLength;case Hf:return e*t*4/s.components*s.byteLength;case Lc:case Nc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ic:case Oc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Gf:case Xf:return Math.max(e,16)*Math.max(t,8)/4;case Vf:case kf:return Math.max(e,8)*Math.max(t,8)/2;case Wf:case qf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Yf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Kf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Qf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case jf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case $f:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case td:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ed:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case nd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case id:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case sd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ad:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case rd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case od:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ld:case cd:case ud:return Math.ceil(e/4)*Math.ceil(t/4)*16;case hd:case fd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case dd:case pd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function KA(e){switch(e){case wi:case r0:return{byteLength:1,components:1};case Eo:case o0:case To:return{byteLength:2,components:1};case Of:case Pf:return{byteLength:2,components:4};case da:case If:case Ci:return{byteLength:4,components:1};case l0:case c0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Ab(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function jA(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,f=c.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let u=l.array,f=l.updateRanges;if(e.bindBuffer(c,o),f.length===0)e.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){let _=f[d],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){let x=f[p];e.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var $A=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ew=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ow=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_w=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ew=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Aw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ww=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ow=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ww=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$w=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_C=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,OC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$C=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_R=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ER=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:$A,alphahash_pars_fragment:tw,alphamap_fragment:ew,alphamap_pars_fragment:nw,alphatest_fragment:iw,alphatest_pars_fragment:sw,aomap_fragment:aw,aomap_pars_fragment:rw,batching_pars_vertex:ow,batching_vertex:lw,begin_vertex:cw,beginnormal_vertex:uw,bsdfs:hw,iridescence_fragment:fw,bumpmap_pars_fragment:dw,clipping_planes_fragment:pw,clipping_planes_pars_fragment:mw,clipping_planes_pars_vertex:gw,clipping_planes_vertex:_w,color_fragment:vw,color_pars_fragment:yw,color_pars_vertex:xw,color_vertex:Sw,common:Mw,cube_uv_reflection_fragment:bw,defaultnormal_vertex:Ew,displacementmap_pars_vertex:Tw,displacementmap_vertex:Aw,emissivemap_fragment:ww,emissivemap_pars_fragment:Cw,colorspace_fragment:Rw,colorspace_pars_fragment:Dw,envmap_fragment:Uw,envmap_common_pars_fragment:Lw,envmap_pars_fragment:Nw,envmap_pars_vertex:Iw,envmap_physical_pars_fragment:Ww,envmap_vertex:Ow,fog_vertex:Pw,fog_pars_vertex:Bw,fog_fragment:zw,fog_pars_fragment:Fw,gradientmap_pars_fragment:Hw,lightmap_pars_fragment:Vw,lights_lambert_fragment:Gw,lights_lambert_pars_fragment:kw,lights_pars_begin:Xw,lights_toon_fragment:qw,lights_toon_pars_fragment:Yw,lights_phong_fragment:Zw,lights_phong_pars_fragment:Jw,lights_physical_fragment:Kw,lights_physical_pars_fragment:Qw,lights_fragment_begin:jw,lights_fragment_maps:$w,lights_fragment_end:tC,logdepthbuf_fragment:eC,logdepthbuf_pars_fragment:nC,logdepthbuf_pars_vertex:iC,logdepthbuf_vertex:sC,map_fragment:aC,map_pars_fragment:rC,map_particle_fragment:oC,map_particle_pars_fragment:lC,metalnessmap_fragment:cC,metalnessmap_pars_fragment:uC,morphinstance_vertex:hC,morphcolor_vertex:fC,morphnormal_vertex:dC,morphtarget_pars_vertex:pC,morphtarget_vertex:mC,normal_fragment_begin:gC,normal_fragment_maps:_C,normal_pars_fragment:vC,normal_pars_vertex:yC,normal_vertex:xC,normalmap_pars_fragment:SC,clearcoat_normal_fragment_begin:MC,clearcoat_normal_fragment_maps:bC,clearcoat_pars_fragment:EC,iridescence_pars_fragment:TC,opaque_fragment:AC,packing:wC,premultiplied_alpha_fragment:CC,project_vertex:RC,dithering_fragment:DC,dithering_pars_fragment:UC,roughnessmap_fragment:LC,roughnessmap_pars_fragment:NC,shadowmap_pars_fragment:IC,shadowmap_pars_vertex:OC,shadowmap_vertex:PC,shadowmask_pars_fragment:BC,skinbase_vertex:zC,skinning_pars_vertex:FC,skinning_vertex:HC,skinnormal_vertex:VC,specularmap_fragment:GC,specularmap_pars_fragment:kC,tonemapping_fragment:XC,tonemapping_pars_fragment:WC,transmission_fragment:qC,transmission_pars_fragment:YC,uv_pars_fragment:ZC,uv_pars_vertex:JC,uv_vertex:KC,worldpos_vertex:QC,background_vert:jC,background_frag:$C,backgroundCube_vert:tR,backgroundCube_frag:eR,cube_vert:nR,cube_frag:iR,depth_vert:sR,depth_frag:aR,distanceRGBA_vert:rR,distanceRGBA_frag:oR,equirect_vert:lR,equirect_frag:cR,linedashed_vert:uR,linedashed_frag:hR,meshbasic_vert:fR,meshbasic_frag:dR,meshlambert_vert:pR,meshlambert_frag:mR,meshmatcap_vert:gR,meshmatcap_frag:_R,meshnormal_vert:vR,meshnormal_frag:yR,meshphong_vert:xR,meshphong_frag:SR,meshphysical_vert:MR,meshphysical_frag:bR,meshtoon_vert:ER,meshtoon_frag:TR,points_vert:AR,points_frag:wR,shadow_vert:CR,shadow_frag:RR,sprite_vert:DR,sprite_frag:UR},xt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Hi={basic:{uniforms:mn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:mn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:mn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:mn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:mn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:mn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:mn([xt.points,xt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:mn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:mn([xt.common,xt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:mn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:mn([xt.sprite,xt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:mn([xt.common,xt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:mn([xt.lights,xt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Hi.physical={uniforms:mn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var gd={r:0,b:0,g:0},ja=new Nn,LR=new xe;function NR(e,t,n,i,s,a,r){let o=new Xt(0),l=a===!0?0:1,c,u,f=null,d=0,p=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:t).get(y)),y}function x(v){let y=!1,C=_(v);C===null?h(o,l):C&&C.isColor&&(h(C,1),y=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(v,y){let C=_(y);C&&(C.isCubeTexture||C.mapping===Dc)?(u===void 0&&(u=new Ce(new la(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Qa(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ja.copy(y.backgroundRotation),ja.x*=-1,ja.y*=-1,ja.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ja.y*=-1,ja.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LR.makeRotationFromEuler(ja)),u.material.toneMapped=re.getTransfer(C.colorSpace)!==de,(f!==C||d!==C.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,p=e.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ce(new yc(2,2),new Ai({name:"BackgroundMaterial",uniforms:Qa(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=re.getTransfer(C.colorSpace)!==de,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,p=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,y){v.getRGB(gd,g0(e)),i.buffers.color.setClear(gd.r,gd.g,gd.b,y,r)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(o,l)},render:x,addToRenderList:m,dispose:g}}function IR(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=d(null),a=s,r=!1;function o(M,U,z,W,K){let Z=!1,Y=f(W,z,U);a!==Y&&(a=Y,c(a.object)),Z=p(M,W,z,K),Z&&_(M,W,z,K),K!==null&&t.update(K,e.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,y(M,U,z,W),K!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function u(M){return e.deleteVertexArray(M)}function f(M,U,z){let W=z.wireframe===!0,K=i[M.id];K===void 0&&(K={},i[M.id]=K);let Z=K[U.id];Z===void 0&&(Z={},K[U.id]=Z);let Y=Z[W];return Y===void 0&&(Y=d(l()),Z[W]=Y),Y}function d(M){let U=[],z=[],W=[];for(let K=0;K<n;K++)U[K]=0,z[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:W,object:M,attributes:{},index:null}}function p(M,U,z,W){let K=a.attributes,Z=U.attributes,Y=0,it=z.getAttributes();for(let G in it)if(it[G].location>=0){let vt=K[G],Mt=Z[G];if(Mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),vt===void 0||vt.attribute!==Mt||Mt&&vt.data!==Mt.data)return!0;Y++}return a.attributesNum!==Y||a.index!==W}function _(M,U,z,W){let K={},Z=U.attributes,Y=0,it=z.getAttributes();for(let G in it)if(it[G].location>=0){let vt=Z[G];vt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor));let Mt={};Mt.attribute=vt,vt&&vt.data&&(Mt.data=vt.data),K[G]=Mt,Y++}a.attributes=K,a.attributesNum=Y,a.index=W}function x(){let M=a.newAttributes;for(let U=0,z=M.length;U<z;U++)M[U]=0}function m(M){h(M,0)}function h(M,U){let z=a.newAttributes,W=a.enabledAttributes,K=a.attributeDivisors;z[M]=1,W[M]===0&&(e.enableVertexAttribArray(M),W[M]=1),K[M]!==U&&(e.vertexAttribDivisor(M,U),K[M]=U)}function g(){let M=a.newAttributes,U=a.enabledAttributes;for(let z=0,W=U.length;z<W;z++)U[z]!==M[z]&&(e.disableVertexAttribArray(z),U[z]=0)}function v(M,U,z,W,K,Z,Y){Y===!0?e.vertexAttribIPointer(M,U,z,K,Z):e.vertexAttribPointer(M,U,z,W,K,Z)}function y(M,U,z,W){x();let K=W.attributes,Z=z.getAttributes(),Y=U.defaultAttributeValues;for(let it in Z){let G=Z[it];if(G.location>=0){let lt=K[it];if(lt===void 0&&(it==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),it==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),lt!==void 0){let vt=lt.normalized,Mt=lt.itemSize,zt=t.get(lt);if(zt===void 0)continue;let Qt=zt.buffer,ne=zt.type,nt=zt.bytesPerElement,B=ne===e.INT||ne===e.UNSIGNED_INT||lt.gpuType===If;if(lt.isInterleavedBufferAttribute){let F=lt.data,J=F.stride,rt=lt.offset;if(F.isInstancedInterleavedBuffer){for(let at=0;at<G.locationSize;at++)h(G.location+at,F.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let at=0;at<G.locationSize;at++)m(G.location+at);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let at=0;at<G.locationSize;at++)v(G.location+at,Mt/G.locationSize,ne,vt,J*nt,(rt+Mt/G.locationSize*at)*nt,B)}else{if(lt.isInstancedBufferAttribute){for(let F=0;F<G.locationSize;F++)h(G.location+F,lt.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let F=0;F<G.locationSize;F++)m(G.location+F);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let F=0;F<G.locationSize;F++)v(G.location+F,Mt/G.locationSize,ne,vt,Mt*nt,Mt/G.locationSize*F*nt,B)}}else if(Y!==void 0){let vt=Y[it];if(vt!==void 0)switch(vt.length){case 2:e.vertexAttrib2fv(G.location,vt);break;case 3:e.vertexAttrib3fv(G.location,vt);break;case 4:e.vertexAttrib4fv(G.location,vt);break;default:e.vertexAttrib1fv(G.location,vt)}}}}g()}function C(){D();for(let M in i){let U=i[M];for(let z in U){let W=U[z];for(let K in W)u(W[K].object),delete W[K];delete U[z]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;let U=i[M.id];for(let z in U){let W=U[z];for(let K in W)u(W[K].object),delete W[K];delete U[z]}delete i[M.id]}function A(M){for(let U in i){let z=i[U];if(z[M.id]===void 0)continue;let W=z[M.id];for(let K in W)u(W[K].object),delete W[K];delete z[M.id]}}function D(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function OR(e,t,n){let i;function s(c){i=c}function a(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function r(c,u,f){f!==0&&(e.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)r(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*d[x];n.update(_,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function PR(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==mi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let D=A===To&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==wi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ci&&!D)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:C,maxSamples:w}}function BR(e){let t=this,n=null,i=0,s=!1,a=!1,r=new fi,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){let _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=e.get(f);if(!s||_===null||_.length===0||a&&!m)a?u(null):c();else{let g=a?0:i,v=g*4,y=h.clippingState||null;l.value=y,y=u(_,d,v,p);for(let C=0;C!==v;++C)y[C]=n[C];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,p,_){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,_!==!0||m===null){let h=p+x*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,y=p;v!==x;++v,y+=4)r.copy(f[v]).applyMatrix4(g,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function zR(e){let t=new WeakMap;function n(r,o){return o===Uf?r.mapping=Ja:o===Lf&&(r.mapping=Ka),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===Uf||o===Lf)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new $h(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var Do=4,ib=[.125,.215,.35,.446,.526,.582],er=20,S0=new Cc,sb=new Xt,M0=null,b0=0,E0=0,T0=!1,tr=(1+Math.sqrt(5))/2,Ro=1/tr,ab=[new L(-tr,Ro,0),new L(tr,Ro,0),new L(-Ro,0,tr),new L(Ro,0,tr),new L(0,tr,-Ro),new L(0,tr,Ro),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],FR=new L,Lo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=FR}=a;M0=this._renderer.getRenderTarget(),b0=this._renderer.getActiveCubeFace(),E0=this._renderer.getActiveMipmapLevel(),T0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ob(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(M0,b0,E0),this._renderer.xr.enabled=T0,t.scissorTest=!1,_d(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ja||t.mapping===Ka?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),M0=this._renderer.getRenderTarget(),b0=this._renderer.getActiveCubeFace(),E0=this._renderer.getActiveMipmapLevel(),T0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:To,format:mi,colorSpace:Ga,depthBuffer:!1},s=rb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HR(a)),this._blurMaterial=VR(a,t,n)}return s}_compileMaterial(t){let n=new Ce(this._lodPlanes[0],t);this._renderer.compile(n,S0)}_sceneToCubeUV(t,n,i,s,a){let l=new cn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(sb),f.toneMapping=xs,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let x=new nc({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new Ce(new la,x),h=!1,g=t.background;g?g.isColor&&(x.color.copy(g),t.background=null,h=!0):(x.color.copy(sb),h=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[v],a.y,a.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[v],a.z)):(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[v]));let C=this._cubeSize;_d(s,y*C,v>2?C:0,C,C),f.setRenderTarget(s),h&&f.render(m,l),f.render(t,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Ja||t.mapping===Ka;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ob());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Ce(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;_d(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,S0)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=ab[(s-a-1)%ab.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Ce(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*er-1),x=a/_,m=isFinite(a)?1+Math.floor(u*x):er;m>er&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);let h=[],g=0;for(let A=0;A<er;++A){let D=A/x,E=Math.exp(-D*D/2);h.push(E),A===0?g+=E:A<m&&(g+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/g;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;let y=this._sizeLods[s],C=3*y*(s>v-Do?s-v+Do:0),w=4*(this._cubeSize-y);_d(n,C,w,3*y,2*y),l.setRenderTarget(n),l.render(f,S0)}};function HR(e){let t=[],n=[],i=[],s=e,a=e-Do+1+ib.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-Do?l=ib[r-e+Do-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,h=1,g=new Float32Array(x*_*p),v=new Float32Array(m*_*p),y=new Float32Array(h*_*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,D=w>2?0:-1,E=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];g.set(E,x*_*w),v.set(d,m*_*w);let M=[w,w,w,w,w,w];y.set(M,h*_*w)}let C=new Ti;C.setAttribute("position",new Un(g,x)),C.setAttribute("uv",new Un(v,m)),C.setAttribute("faceIndex",new Un(y,h)),t.push(C),s>Do&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function rb(e,t,n){let i=new Bi(e,t,n);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _d(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function VR(e,t,n){let i=new Float32Array(er),s=new L(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:O0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function ob(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:O0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function lb(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:O0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function O0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GR(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Uf||l===Lf,u=l===Ja||l===Ka;if(c||u){let f=t.get(o),d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Lo(e)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new Lo(e)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function kR(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&mo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function XR(e,t,n,i){let s={},a=new WeakMap;function r(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",r),delete s[d.id];let p=a.get(d);p&&(t.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,n.memory.geometries++),d}function l(f){let d=f.attributes;for(let p in d)t.update(d[p],e.ARRAY_BUFFER)}function c(f){let d=[],p=f.index,_=f.attributes.position,x=0;if(p!==null){let g=p.array;x=p.version;for(let v=0,y=g.length;v<y;v+=3){let C=g[v+0],w=g[v+1],A=g[v+2];d.push(C,w,w,A,A,C)}}else if(_!==void 0){let g=_.array;x=_.version;for(let v=0,y=g.length/3-1;v<y;v+=3){let C=v+0,w=v+1,A=v+2;d.push(C,w,w,A,A,C)}}else return;let m=new(m0(d)?sc:ic)(d,1);m.version=x;let h=a.get(f);h&&t.remove(h),a.set(f,m)}function u(f){let d=a.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function WR(e,t,n){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,p){e.drawElements(i,p,a,d*r),n.update(p,i,1)}function c(d,p,_){_!==0&&(e.drawElementsInstanced(i,p,a,d*r,_),n.update(p,i,_))}function u(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,i,1)}function f(d,p,_,x){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/r,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,d,0,x,0,_);let h=0;for(let g=0;g<_;g++)h+=p[g]*x[g];n.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function qR(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function YR(e,t,n){let i=new WeakMap,s=new fe;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==f){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],v=0;p===!0&&(v=1),_===!0&&(v=2),x===!0&&(v=3);let y=o.attributes.position.count*v,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*C*4*f),A=new tc(w,y,C,f);A.type=Ci,A.needsUpdate=!0;let D=v*4;for(let M=0;M<f;M++){let U=m[M],z=h[M],W=g[M],K=y*C*4*M;for(let Z=0;Z<U.count;Z++){let Y=Z*D;p===!0&&(s.fromBufferAttribute(U,Z),w[K+Y+0]=s.x,w[K+Y+1]=s.y,w[K+Y+2]=s.z,w[K+Y+3]=0),_===!0&&(s.fromBufferAttribute(z,Z),w[K+Y+4]=s.x,w[K+Y+5]=s.y,w[K+Y+6]=s.z,w[K+Y+7]=0),x===!0&&(s.fromBufferAttribute(W,Z),w[K+Y+8]=s.x,w[K+Y+9]=s.y,w[K+Y+10]=s.z,w[K+Y+11]=W.itemSize===4?s.w:1)}}d={count:f,texture:A,size:new gt(y,C)},i.set(o,d),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:a}}function ZR(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var wb=new Sn,cb=new cc(1,1),Cb=new tc,Rb=new Qh,Db=new rc,ub=[],hb=[],fb=new Float32Array(16),db=new Float32Array(9),pb=new Float32Array(4);function No(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=ub[s];if(a===void 0&&(a=new Float32Array(s),ub[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Ye(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ze(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function xd(e,t){let n=hb[t];n===void 0&&(n=new Int32Array(t),hb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function JR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function KR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2fv(this.addr,t),Ze(n,t)}}function QR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ye(n,t))return;e.uniform3fv(this.addr,t),Ze(n,t)}}function jR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4fv(this.addr,t),Ze(n,t)}}function $R(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ze(n,t)}else{if(Ye(n,i))return;pb.set(i),e.uniformMatrix2fv(this.addr,!1,pb),Ze(n,i)}}function t2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ze(n,t)}else{if(Ye(n,i))return;db.set(i),e.uniformMatrix3fv(this.addr,!1,db),Ze(n,i)}}function e2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ze(n,t)}else{if(Ye(n,i))return;fb.set(i),e.uniformMatrix4fv(this.addr,!1,fb),Ze(n,i)}}function n2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function i2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2iv(this.addr,t),Ze(n,t)}}function s2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3iv(this.addr,t),Ze(n,t)}}function a2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4iv(this.addr,t),Ze(n,t)}}function r2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function o2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2uiv(this.addr,t),Ze(n,t)}}function l2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3uiv(this.addr,t),Ze(n,t)}}function c2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4uiv(this.addr,t),Ze(n,t)}}function u2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(cb.compareFunction=d0,a=cb):a=wb,n.setTexture2D(t||a,s)}function h2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Rb,s)}function f2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Db,s)}function d2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Cb,s)}function p2(e){switch(e){case 5126:return JR;case 35664:return KR;case 35665:return QR;case 35666:return jR;case 35674:return $R;case 35675:return t2;case 35676:return e2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return s2;case 35669:case 35673:return a2;case 5125:return r2;case 36294:return o2;case 36295:return l2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return h2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return d2}}function m2(e,t){e.uniform1fv(this.addr,t)}function g2(e,t){let n=No(t,this.size,2);e.uniform2fv(this.addr,n)}function _2(e,t){let n=No(t,this.size,3);e.uniform3fv(this.addr,n)}function v2(e,t){let n=No(t,this.size,4);e.uniform4fv(this.addr,n)}function y2(e,t){let n=No(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function x2(e,t){let n=No(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function S2(e,t){let n=No(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function M2(e,t){e.uniform1iv(this.addr,t)}function b2(e,t){e.uniform2iv(this.addr,t)}function E2(e,t){e.uniform3iv(this.addr,t)}function T2(e,t){e.uniform4iv(this.addr,t)}function A2(e,t){e.uniform1uiv(this.addr,t)}function w2(e,t){e.uniform2uiv(this.addr,t)}function C2(e,t){e.uniform3uiv(this.addr,t)}function R2(e,t){e.uniform4uiv(this.addr,t)}function D2(e,t,n){let i=this.cache,s=t.length,a=xd(n,s);Ye(i,a)||(e.uniform1iv(this.addr,a),Ze(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||wb,a[r])}function U2(e,t,n){let i=this.cache,s=t.length,a=xd(n,s);Ye(i,a)||(e.uniform1iv(this.addr,a),Ze(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Rb,a[r])}function L2(e,t,n){let i=this.cache,s=t.length,a=xd(n,s);Ye(i,a)||(e.uniform1iv(this.addr,a),Ze(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||Db,a[r])}function N2(e,t,n){let i=this.cache,s=t.length,a=xd(n,s);Ye(i,a)||(e.uniform1iv(this.addr,a),Ze(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Cb,a[r])}function I2(e){switch(e){case 5126:return m2;case 35664:return g2;case 35665:return _2;case 35666:return v2;case 35674:return y2;case 35675:return x2;case 35676:return S2;case 5124:case 35670:return M2;case 35667:case 35671:return b2;case 35668:case 35672:return E2;case 35669:case 35673:return T2;case 5125:return A2;case 36294:return w2;case 36295:return C2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return D2;case 35679:case 36299:case 36307:return U2;case 35680:case 36300:case 36308:case 36293:return L2;case 36289:case 36303:case 36311:case 36292:return N2}}var w0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=p2(n.type)}},C0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=I2(n.type)}},R0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},A0=/(\w+)(\])?(\[|\.)?/g;function mb(e,t){e.seq.push(t),e.map[t.id]=t}function O2(e,t,n){let i=e.name,s=i.length;for(A0.lastIndex=0;;){let a=A0.exec(i),r=A0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){mb(n,c===void 0?new w0(o,e,t):new C0(o,e,t));break}else{let f=n.map[o];f===void 0&&(f=new R0(o),mb(n,f)),n=f}}}var Uo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);O2(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function gb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var P2=37297,B2=0;function z2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var _b=new Jt;function F2(e){re._getMatrix(_b,re.workingColorSpace,e);let t=`mat3( ${_b.elements.map(n=>n.toFixed(4))} )`;switch(re.getTransfer(e)){case jl:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function vb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+z2(e.getShaderSource(t),o)}else return a}function H2(e,t){let n=F2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function V2(e,t){let n;switch(t){case UM:n="Linear";break;case LM:n="Reinhard";break;case NM:n="Cineon";break;case Df:n="ACESFilmic";break;case OM:n="AgX";break;case PM:n="Neutral";break;case IM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var vd=new L;function G2(){re.getLuminanceCoefficients(vd);let e=vd.x.toFixed(4),t=vd.y.toFixed(4),n=vd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pc).join(`
`)}function X2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function W2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Pc(e){return e!==""}function yb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var q2=/^[ \t]*#include +<([\w\d./]+)>/gm;function D0(e){return e.replace(q2,Z2)}var Y2=new Map;function Z2(e,t){let n=Kt[t];if(n===void 0){let i=Y2.get(t);if(i!==void 0)n=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return D0(n)}var J2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sb(e){return e.replace(J2,K2)}function K2(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Mb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Q2(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===e0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Sf?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Fi&&(t="SHADOWMAP_TYPE_VSM"),t}function j2(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ja:case Ka:t="ENVMAP_TYPE_CUBE";break;case Dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $2(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Ka:t="ENVMAP_MODE_REFRACTION";break}return t}function t3(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Rf:t="ENVMAP_BLENDING_MULTIPLY";break;case RM:t="ENVMAP_BLENDING_MIX";break;case DM:t="ENVMAP_BLENDING_ADD";break}return t}function e3(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function n3(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=Q2(n),c=j2(n),u=$2(n),f=t3(n),d=e3(n),p=k2(n),_=X2(a),x=s.createProgram(),m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Pc).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Pc).join(`
`),h.length>0&&(h+=`
`)):(m=[Mb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pc).join(`
`),h=[Mb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xs?"#define TONE_MAPPING":"",n.toneMapping!==xs?Kt.tonemapping_pars_fragment:"",n.toneMapping!==xs?V2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,H2("linearToOutputTexel",n.outputColorSpace),G2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Pc).join(`
`)),r=D0(r),r=yb(r,n),r=xb(r,n),o=D0(o),o=yb(o,n),o=xb(o,n),r=Sb(r),o=Sb(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===p0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===p0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let v=g+m+r,y=g+h+o,C=gb(s,s.VERTEX_SHADER,v),w=gb(s,s.FRAGMENT_SHADER,y);s.attachShader(x,C),s.attachShader(x,w),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(U){if(e.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",W=s.getShaderInfoLog(C)||"",K=s.getShaderInfoLog(w)||"",Z=z.trim(),Y=W.trim(),it=K.trim(),G=!0,lt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,C,w);else{let vt=vb(s,C,"vertex"),Mt=vb(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Z+`
`+vt+`
`+Mt)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Y===""||it==="")&&(lt=!1);lt&&(U.diagnostics={runnable:G,programLog:Z,vertexShader:{log:Y,prefix:m},fragmentShader:{log:it,prefix:h}})}s.deleteShader(C),s.deleteShader(w),D=new Uo(s,x),E=W2(s,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,P2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=B2++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}var i3=0,U0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new L0(t),n.set(t,i)),i}},L0=class{constructor(t){this.id=i3++,this.code=t,this.usedTimes=0}};function s3(e,t,n,i,s,a,r){let o=new _o,l=new U0,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,U,z,W){let K=z.fog,Z=W.geometry,Y=E.isMeshStandardMaterial?z.environment:null,it=(E.isMeshStandardMaterial?n:t).get(E.envMap||Y),G=it&&it.mapping===Dc?it.image.height:null,lt=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mt=vt!==void 0?vt.length:0,zt=0;Z.morphAttributes.position!==void 0&&(zt=1),Z.morphAttributes.normal!==void 0&&(zt=2),Z.morphAttributes.color!==void 0&&(zt=3);let Qt,ne,nt,B;if(lt){let jt=Hi[lt];Qt=jt.vertexShader,ne=jt.fragmentShader}else Qt=E.vertexShader,ne=E.fragmentShader,l.update(E),nt=l.getVertexShaderID(E),B=l.getFragmentShaderID(E);let F=e.getRenderTarget(),J=e.state.buffers.depth.getReversed(),rt=W.isInstancedMesh===!0,at=W.isBatchedMesh===!0,It=!!E.map,Lt=!!E.matcap,R=!!it,X=!!E.aoMap,j=!!E.lightMap,$=!!E.bumpMap,Q=!!E.normalMap,ct=!!E.displacementMap,ot=!!E.emissiveMap,mt=!!E.metalnessMap,Wt=!!E.roughnessMap,Vt=E.anisotropy>0,T=E.clearcoat>0,S=E.dispersion>0,P=E.iridescence>0,H=E.sheen>0,st=E.transmission>0,q=Vt&&!!E.anisotropyMap,wt=T&&!!E.clearcoatMap,ft=T&&!!E.clearcoatNormalMap,Ct=T&&!!E.clearcoatRoughnessMap,Rt=P&&!!E.iridescenceMap,ut=P&&!!E.iridescenceThicknessMap,St=H&&!!E.sheenColorMap,Ot=H&&!!E.sheenRoughnessMap,Dt=!!E.specularMap,_t=!!E.specularColorMap,qt=!!E.specularIntensityMap,N=st&&!!E.transmissionMap,dt=st&&!!E.thicknessMap,yt=!!E.gradientMap,Tt=!!E.alphaMap,ht=E.alphaTest>0,et=!!E.alphaHash,Ut=!!E.extensions,Et=xs;E.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Et=e.toneMapping);let Pt={shaderID:lt,shaderType:E.type,shaderName:E.name,vertexShader:Qt,fragmentShader:ne,defines:E.defines,customVertexShaderID:nt,customFragmentShaderID:B,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:at,batchingColor:at&&W._colorsTexture!==null,instancing:rt,instancingColor:rt&&W.instanceColor!==null,instancingMorph:rt&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:F===null?e.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ga,alphaToCoverage:!!E.alphaToCoverage,map:It,matcap:Lt,envMap:R,envMapMode:R&&it.mapping,envMapCubeUVHeight:G,aoMap:X,lightMap:j,bumpMap:$,normalMap:Q,displacementMap:d&&ct,emissiveMap:ot,normalMapObjectSpace:Q&&E.normalMapType===HM,normalMapTangentSpace:Q&&E.normalMapType===md,metalnessMap:mt,roughnessMap:Wt,anisotropy:Vt,anisotropyMap:q,clearcoat:T,clearcoatMap:wt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ct,dispersion:S,iridescence:P,iridescenceMap:Rt,iridescenceThicknessMap:ut,sheen:H,sheenColorMap:St,sheenRoughnessMap:Ot,specularMap:Dt,specularColorMap:_t,specularIntensityMap:qt,transmission:st,transmissionMap:N,thicknessMap:dt,gradientMap:yt,opaque:E.transparent===!1&&E.blending===Ha&&E.alphaToCoverage===!1,alphaMap:Tt,alphaTest:ht,alphaHash:et,combine:E.combine,mapUv:It&&x(E.map.channel),aoMapUv:X&&x(E.aoMap.channel),lightMapUv:j&&x(E.lightMap.channel),bumpMapUv:$&&x(E.bumpMap.channel),normalMapUv:Q&&x(E.normalMap.channel),displacementMapUv:ct&&x(E.displacementMap.channel),emissiveMapUv:ot&&x(E.emissiveMap.channel),metalnessMapUv:mt&&x(E.metalnessMap.channel),roughnessMapUv:Wt&&x(E.roughnessMap.channel),anisotropyMapUv:q&&x(E.anisotropyMap.channel),clearcoatMapUv:wt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ft&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:St&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(E.sheenRoughnessMap.channel),specularMapUv:Dt&&x(E.specularMap.channel),specularColorMapUv:_t&&x(E.specularColorMap.channel),specularIntensityMapUv:qt&&x(E.specularIntensityMap.channel),transmissionMapUv:N&&x(E.transmissionMap.channel),thicknessMapUv:dt&&x(E.thicknessMap.channel),alphaMapUv:Tt&&x(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Q||Vt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(It||Tt),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:J,skinning:W.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Et,decodeVideoTexture:It&&E.map.isVideoTexture===!0&&re.getTransfer(E.map.colorSpace)===de,decodeVideoTextureEmissive:ot&&E.emissiveMap.isVideoTexture===!0&&re.getTransfer(E.emissiveMap.colorSpace)===de,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===pi,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||at)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function h(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)M.push(U),M.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(g(M,E),v(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function g(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let M=_[E.type],U;if(M){let z=Hi[M];U=QM.clone(z.uniforms)}else U=E.uniforms;return U}function C(E,M){let U;for(let z=0,W=u.length;z<W;z++){let K=u[z];if(K.cacheKey===M){U=K,++U.usedTimes;break}}return U===void 0&&(U=new n3(e,M,E,a),u.push(U)),U}function w(E){if(--E.usedTimes===0){let M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:D}}function a3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function r3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function bb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Eb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(f,d,p,_,x,m){let h=e[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},e[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=m),t++,h}function o(f,d,p,_,x,m){let h=r(f,d,p,_,x,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):n.push(h)}function l(f,d,p,_,x,m){let h=r(f,d,p,_,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||r3),i.length>1&&i.sort(d||bb),s.length>1&&s.sort(d||bb)}function u(){for(let f=t,d=e.length;f<d;f++){let p=e[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:u,sort:c}}function o3(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Eb,e.set(i,[r])):s>=a.length?(r=new Eb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function l3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new L,color:new Xt};break;case"SpotLight":n={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":n={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=n,n}}}function c3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var u3=0;function h3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function f3(e){let t=new l3,n=c3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,a=new xe,r=new xe;function o(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,g=0,v=0,y=0,C=0,w=0,A=0;c.sort(h3);for(let E=0,M=c.length;E<M;E++){let U=c[E],z=U.color,W=U.intensity,K=U.distance,Z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=z.r*W,f+=z.g*W,d+=z.b*W;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],W);A++}else if(U.isDirectionalLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let it=U.shadow,G=n.get(U);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=U.shadow.matrix,g++}i.directional[p]=Y,p++}else if(U.isSpotLight){let Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(z).multiplyScalar(W),Y.distance=K,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[x]=Y;let it=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,it.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[x]=it.matrix,U.castShadow){let G=n.get(U);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=Z,y++}x++}else if(U.isRectAreaLight){let Y=t.get(U);Y.color.copy(z).multiplyScalar(W),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=Y,m++}else if(U.isPointLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let it=U.shadow,G=n.get(U);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,G.shadowCameraNear=it.camera.near,G.shadowCameraFar=it.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=U.shadow.matrix,v++}i.point[_]=Y,_++}else if(U.isHemisphereLight){let Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(W),Y.groundColor.copy(U.groundColor).multiplyScalar(W),i.hemi[h]=Y,h++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let D=i.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==h||D.numDirectionalShadows!==g||D.numPointShadows!==v||D.numSpotShadows!==y||D.numSpotMaps!==C||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,D.directionalLength=p,D.pointLength=_,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=h,D.numDirectionalShadows=g,D.numPointShadows=v,D.numSpotShadows=y,D.numSpotMaps=C,D.numLightProbes=A,i.version=u3++)}function l(c,u){let f=0,d=0,p=0,_=0,x=0,m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){let v=c[h];if(v.isDirectionalLight){let y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),_++}else if(v.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Tb(e){let t=new f3(e),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function a(u){n.push(u)}function r(u){i.push(u)}function o(){t.setup(n)}function l(u){t.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function d3(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Tb(e),t.set(s,[o])):a>=r.length?(o=new Tb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var p3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function g3(e,t,n){let i=new yo,s=new gt,a=new gt,r=new fe,o=new lf({depthPacking:FM}),l=new cf,c={},u=n.maxTextureSize,f={[gs]:un,[un]:gs,[pi]:pi},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:p3,fragmentShader:m3}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new Ti;_.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ce(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e0;let h=this.type;this.render=function(w,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let E=e.getRenderTarget(),M=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),z=e.state;z.setBlending(ys),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let W=h!==Fi&&this.type===Fi,K=h===Fi&&this.type!==Fi;for(let Z=0,Y=w.length;Z<Y;Z++){let it=w[Z],G=it.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let lt=G.getFrameExtents();if(s.multiply(lt),a.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/lt.x),s.x=a.x*lt.x,G.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/lt.y),s.y=a.y*lt.y,G.mapSize.y=a.y)),G.map===null||W===!0||K===!0){let Mt=this.type!==Fi?{minFilter:Ln,magFilter:Ln}:{};G.map!==null&&G.map.dispose(),G.map=new Bi(s.x,s.y,Mt),G.map.texture.name=it.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();let vt=G.getViewportCount();for(let Mt=0;Mt<vt;Mt++){let zt=G.getViewport(Mt);r.set(a.x*zt.x,a.y*zt.y,a.x*zt.z,a.y*zt.w),z.viewport(r),G.updateMatrices(it,Mt),i=G.getFrustum(),y(A,D,G.camera,it,this.type)}G.isPointLightShadow!==!0&&this.type===Fi&&g(G,D),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(E,M,U)};function g(w,A){let D=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(A,null,D,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(A,null,D,p,x,null)}function v(w,A,D,E){let M=null,U=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)M=U;else if(M=D.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let z=M.uuid,W=A.uuid,K=c[z];K===void 0&&(K={},c[z]=K);let Z=K[W];Z===void 0&&(Z=M.clone(),K[W]=Z,A.addEventListener("dispose",C)),M=Z}if(M.visible=A.visible,M.wireframe=A.wireframe,E===Fi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=e.properties.get(M);z.light=D}return M}function y(w,A,D,E,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Fi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let W=t.update(w),K=w.material;if(Array.isArray(K)){let Z=W.groups;for(let Y=0,it=Z.length;Y<it;Y++){let G=Z[Y],lt=K[G.materialIndex];if(lt&&lt.visible){let vt=v(w,lt,E,M);w.onBeforeShadow(e,w,A,D,W,vt,G),e.renderBufferDirect(D,null,W,vt,w,G),w.onAfterShadow(e,w,A,D,W,vt,G)}}}else if(K.visible){let Z=v(w,K,E,M);w.onBeforeShadow(e,w,A,D,W,Z,null),e.renderBufferDirect(D,null,W,Z,w,null),w.onAfterShadow(e,w,A,D,W,Z,null)}}let z=w.children;for(let W=0,K=z.length;W<K;W++)y(z[W],A,D,E,M)}function C(w){w.target.removeEventListener("dispose",C);for(let D in c){let E=c[D],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var _3={[Mf]:bf,[Ef]:wf,[Tf]:Cf,[Va]:Af,[bf]:Mf,[wf]:Ef,[Cf]:Tf,[Af]:Va};function v3(e,t){function n(){let N=!1,dt=new fe,yt=null,Tt=new fe(0,0,0,0);return{setMask:function(ht){yt!==ht&&!N&&(e.colorMask(ht,ht,ht,ht),yt=ht)},setLocked:function(ht){N=ht},setClear:function(ht,et,Ut,Et,Pt){Pt===!0&&(ht*=Et,et*=Et,Ut*=Et),dt.set(ht,et,Ut,Et),Tt.equals(dt)===!1&&(e.clearColor(ht,et,Ut,Et),Tt.copy(dt))},reset:function(){N=!1,yt=null,Tt.set(-1,0,0,0)}}}function i(){let N=!1,dt=!1,yt=null,Tt=null,ht=null;return{setReversed:function(et){if(dt!==et){let Ut=t.get("EXT_clip_control");et?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),dt=et;let Et=ht;ht=null,this.setClear(Et)}},getReversed:function(){return dt},setTest:function(et){et?F(e.DEPTH_TEST):J(e.DEPTH_TEST)},setMask:function(et){yt!==et&&!N&&(e.depthMask(et),yt=et)},setFunc:function(et){if(dt&&(et=_3[et]),Tt!==et){switch(et){case Mf:e.depthFunc(e.NEVER);break;case bf:e.depthFunc(e.ALWAYS);break;case Ef:e.depthFunc(e.LESS);break;case Va:e.depthFunc(e.LEQUAL);break;case Tf:e.depthFunc(e.EQUAL);break;case Af:e.depthFunc(e.GEQUAL);break;case wf:e.depthFunc(e.GREATER);break;case Cf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Tt=et}},setLocked:function(et){N=et},setClear:function(et){ht!==et&&(dt&&(et=1-et),e.clearDepth(et),ht=et)},reset:function(){N=!1,yt=null,Tt=null,ht=null,dt=!1}}}function s(){let N=!1,dt=null,yt=null,Tt=null,ht=null,et=null,Ut=null,Et=null,Pt=null;return{setTest:function(jt){N||(jt?F(e.STENCIL_TEST):J(e.STENCIL_TEST))},setMask:function(jt){dt!==jt&&!N&&(e.stencilMask(jt),dt=jt)},setFunc:function(jt,Je,In){(yt!==jt||Tt!==Je||ht!==In)&&(e.stencilFunc(jt,Je,In),yt=jt,Tt=Je,ht=In)},setOp:function(jt,Je,In){(et!==jt||Ut!==Je||Et!==In)&&(e.stencilOp(jt,Je,In),et=jt,Ut=Je,Et=In)},setLocked:function(jt){N=jt},setClear:function(jt){Pt!==jt&&(e.clearStencil(jt),Pt=jt)},reset:function(){N=!1,dt=null,yt=null,Tt=null,ht=null,et=null,Ut=null,Et=null,Pt=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,g=null,v=null,y=null,C=null,w=null,A=new Xt(0,0,0),D=0,E=!1,M=null,U=null,z=null,W=null,K=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,it=0,G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=it>=2);let lt=null,vt={},Mt=e.getParameter(e.SCISSOR_BOX),zt=e.getParameter(e.VIEWPORT),Qt=new fe().fromArray(Mt),ne=new fe().fromArray(zt);function nt(N,dt,yt,Tt){let ht=new Uint8Array(4),et=e.createTexture();e.bindTexture(N,et),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ut=0;Ut<yt;Ut++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(dt,0,e.RGBA,1,1,Tt,0,e.RGBA,e.UNSIGNED_BYTE,ht):e.texImage2D(dt+Ut,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ht);return et}let B={};B[e.TEXTURE_2D]=nt(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=nt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=nt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=nt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),F(e.DEPTH_TEST),r.setFunc(Va),$(!1),Q(t0),F(e.CULL_FACE),X(ys);function F(N){u[N]!==!0&&(e.enable(N),u[N]=!0)}function J(N){u[N]!==!1&&(e.disable(N),u[N]=!1)}function rt(N,dt){return f[N]!==dt?(e.bindFramebuffer(N,dt),f[N]=dt,N===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=dt),N===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=dt),!0):!1}function at(N,dt){let yt=p,Tt=!1;if(N){yt=d.get(dt),yt===void 0&&(yt=[],d.set(dt,yt));let ht=N.textures;if(yt.length!==ht.length||yt[0]!==e.COLOR_ATTACHMENT0){for(let et=0,Ut=ht.length;et<Ut;et++)yt[et]=e.COLOR_ATTACHMENT0+et;yt.length=ht.length,Tt=!0}}else yt[0]!==e.BACK&&(yt[0]=e.BACK,Tt=!0);Tt&&e.drawBuffers(yt)}function It(N){return _!==N?(e.useProgram(N),_=N,!0):!1}let Lt={[ra]:e.FUNC_ADD,[fM]:e.FUNC_SUBTRACT,[dM]:e.FUNC_REVERSE_SUBTRACT};Lt[pM]=e.MIN,Lt[mM]=e.MAX;let R={[gM]:e.ZERO,[_M]:e.ONE,[vM]:e.SRC_COLOR,[kh]:e.SRC_ALPHA,[EM]:e.SRC_ALPHA_SATURATE,[MM]:e.DST_COLOR,[xM]:e.DST_ALPHA,[yM]:e.ONE_MINUS_SRC_COLOR,[Xh]:e.ONE_MINUS_SRC_ALPHA,[bM]:e.ONE_MINUS_DST_COLOR,[SM]:e.ONE_MINUS_DST_ALPHA,[TM]:e.CONSTANT_COLOR,[AM]:e.ONE_MINUS_CONSTANT_COLOR,[wM]:e.CONSTANT_ALPHA,[CM]:e.ONE_MINUS_CONSTANT_ALPHA};function X(N,dt,yt,Tt,ht,et,Ut,Et,Pt,jt){if(N===ys){x===!0&&(J(e.BLEND),x=!1);return}if(x===!1&&(F(e.BLEND),x=!0),N!==hM){if(N!==m||jt!==E){if((h!==ra||y!==ra)&&(e.blendEquation(e.FUNC_ADD),h=ra,y=ra),jt)switch(N){case Ha:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case n0:e.blendFunc(e.ONE,e.ONE);break;case i0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case s0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ha:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case n0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case i0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,v=null,C=null,w=null,A.set(0,0,0),D=0,m=N,E=jt}return}ht=ht||dt,et=et||yt,Ut=Ut||Tt,(dt!==h||ht!==y)&&(e.blendEquationSeparate(Lt[dt],Lt[ht]),h=dt,y=ht),(yt!==g||Tt!==v||et!==C||Ut!==w)&&(e.blendFuncSeparate(R[yt],R[Tt],R[et],R[Ut]),g=yt,v=Tt,C=et,w=Ut),(Et.equals(A)===!1||Pt!==D)&&(e.blendColor(Et.r,Et.g,Et.b,Pt),A.copy(Et),D=Pt),m=N,E=!1}function j(N,dt){N.side===pi?J(e.CULL_FACE):F(e.CULL_FACE);let yt=N.side===un;dt&&(yt=!yt),$(yt),N.blending===Ha&&N.transparent===!1?X(ys):X(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let Tt=N.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):J(e.SAMPLE_ALPHA_TO_COVERAGE)}function $(N){M!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),M=N)}function Q(N){N!==cM?(F(e.CULL_FACE),N!==U&&(N===t0?e.cullFace(e.BACK):N===uM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):J(e.CULL_FACE),U=N}function ct(N){N!==z&&(Y&&e.lineWidth(N),z=N)}function ot(N,dt,yt){N?(F(e.POLYGON_OFFSET_FILL),(W!==dt||K!==yt)&&(e.polygonOffset(dt,yt),W=dt,K=yt)):J(e.POLYGON_OFFSET_FILL)}function mt(N){N?F(e.SCISSOR_TEST):J(e.SCISSOR_TEST)}function Wt(N){N===void 0&&(N=e.TEXTURE0+Z-1),lt!==N&&(e.activeTexture(N),lt=N)}function Vt(N,dt,yt){yt===void 0&&(lt===null?yt=e.TEXTURE0+Z-1:yt=lt);let Tt=vt[yt];Tt===void 0&&(Tt={type:void 0,texture:void 0},vt[yt]=Tt),(Tt.type!==N||Tt.texture!==dt)&&(lt!==yt&&(e.activeTexture(yt),lt=yt),e.bindTexture(N,dt||B[N]),Tt.type=N,Tt.texture=dt)}function T(){let N=vt[lt];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{e.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{e.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{e.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{e.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{e.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{e.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{e.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(N){Qt.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),Qt.copy(N))}function Ot(N){ne.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),ne.copy(N))}function Dt(N,dt){let yt=c.get(dt);yt===void 0&&(yt=new WeakMap,c.set(dt,yt));let Tt=yt.get(N);Tt===void 0&&(Tt=e.getUniformBlockIndex(dt,N.name),yt.set(N,Tt))}function _t(N,dt){let Tt=c.get(dt).get(N);l.get(dt)!==Tt&&(e.uniformBlockBinding(dt,Tt,N.__bindingPointIndex),l.set(dt,Tt))}function qt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},lt=null,vt={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,g=null,v=null,y=null,C=null,w=null,A=new Xt(0,0,0),D=0,E=!1,M=null,U=null,z=null,W=null,K=null,Qt.set(0,0,e.canvas.width,e.canvas.height),ne.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:F,disable:J,bindFramebuffer:rt,drawBuffers:at,useProgram:It,setBlending:X,setMaterial:j,setFlipSided:$,setCullFace:Q,setLineWidth:ct,setPolygonOffset:ot,setScissorTest:mt,activeTexture:Wt,bindTexture:Vt,unbindTexture:T,compressedTexImage2D:S,compressedTexImage3D:P,texImage2D:Rt,texImage3D:ut,updateUBOMapping:Dt,uniformBlockBinding:_t,texStorage2D:ft,texStorage3D:Ct,texSubImage2D:H,texSubImage3D:st,compressedTexSubImage2D:q,compressedTexSubImage3D:wt,scissor:St,viewport:Ot,reset:qt}}function y3(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,S){return p?new OffscreenCanvas(T,S):po("canvas")}function x(T,S,P){let H=1,st=Vt(T);if((st.width>P||st.height>P)&&(H=P/Math.max(st.width,st.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let q=Math.floor(H*st.width),wt=Math.floor(H*st.height);f===void 0&&(f=_(q,wt));let ft=S?_(q,wt):f;return ft.width=q,ft.height=wt,ft.getContext("2d").drawImage(T,0,0,q,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+q+"x"+wt+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function m(T){return T.generateMipmaps}function h(T){e.generateMipmap(T)}function g(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(T,S,P,H,st=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=S;if(S===e.RED&&(P===e.FLOAT&&(q=e.R32F),P===e.HALF_FLOAT&&(q=e.R16F),P===e.UNSIGNED_BYTE&&(q=e.R8)),S===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(q=e.R8UI),P===e.UNSIGNED_SHORT&&(q=e.R16UI),P===e.UNSIGNED_INT&&(q=e.R32UI),P===e.BYTE&&(q=e.R8I),P===e.SHORT&&(q=e.R16I),P===e.INT&&(q=e.R32I)),S===e.RG&&(P===e.FLOAT&&(q=e.RG32F),P===e.HALF_FLOAT&&(q=e.RG16F),P===e.UNSIGNED_BYTE&&(q=e.RG8)),S===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(q=e.RG8UI),P===e.UNSIGNED_SHORT&&(q=e.RG16UI),P===e.UNSIGNED_INT&&(q=e.RG32UI),P===e.BYTE&&(q=e.RG8I),P===e.SHORT&&(q=e.RG16I),P===e.INT&&(q=e.RG32I)),S===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(q=e.RGB8UI),P===e.UNSIGNED_SHORT&&(q=e.RGB16UI),P===e.UNSIGNED_INT&&(q=e.RGB32UI),P===e.BYTE&&(q=e.RGB8I),P===e.SHORT&&(q=e.RGB16I),P===e.INT&&(q=e.RGB32I)),S===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),P===e.UNSIGNED_INT&&(q=e.RGBA32UI),P===e.BYTE&&(q=e.RGBA8I),P===e.SHORT&&(q=e.RGBA16I),P===e.INT&&(q=e.RGBA32I)),S===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(q=e.R11F_G11F_B10F)),S===e.RGBA){let wt=st?jl:re.getTransfer(H);P===e.FLOAT&&(q=e.RGBA32F),P===e.HALF_FLOAT&&(q=e.RGBA16F),P===e.UNSIGNED_BYTE&&(q=wt===de?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(T,S){let P;return T?S===null||S===da||S===Ao?P=e.DEPTH24_STENCIL8:S===Ci?P=e.DEPTH32F_STENCIL8:S===Eo&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===da||S===Ao?P=e.DEPTH_COMPONENT24:S===Ci?P=e.DEPTH_COMPONENT32F:S===Eo&&(P=e.DEPTH_COMPONENT16),P}function C(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ln&&T.minFilter!==Ei?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function w(T){let S=T.target;S.removeEventListener("dispose",w),D(S),S.isVideoTexture&&u.delete(S)}function A(T){let S=T.target;S.removeEventListener("dispose",A),M(S)}function D(T){let S=i.get(T);if(S.__webglInit===void 0)return;let P=T.source,H=d.get(P);if(H){let st=H[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&E(T),Object.keys(H).length===0&&d.delete(P)}i.remove(T)}function E(T){let S=i.get(T);e.deleteTexture(S.__webglTexture);let P=T.source,H=d.get(P);delete H[S.__cacheKey],r.memory.textures--}function M(T){let S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let st=0;st<S.__webglFramebuffer[H].length;st++)e.deleteFramebuffer(S.__webglFramebuffer[H][st]);else e.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)e.deleteFramebuffer(S.__webglFramebuffer[H]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let P=T.textures;for(let H=0,st=P.length;H<st;H++){let q=i.get(P[H]);q.__webglTexture&&(e.deleteTexture(q.__webglTexture),r.memory.textures--),i.remove(P[H])}i.remove(T)}let U=0;function z(){U=0}function W(){let T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function K(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function Z(T,S){let P=i.get(T);if(T.isVideoTexture&&mt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&P.__version!==T.version){let H=T.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(P,T,S);return}}else T.isExternalTexture&&(P.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+S)}function Y(T,S){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){B(P,T,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+S)}function it(T,S){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){B(P,T,S);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+S)}function G(T,S){let P=i.get(T);if(T.version>0&&P.__version!==T.version){F(P,T,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+S)}let lt={[Wh]:e.REPEAT,[Mi]:e.CLAMP_TO_EDGE,[qh]:e.MIRRORED_REPEAT},vt={[Ln]:e.NEAREST,[BM]:e.NEAREST_MIPMAP_NEAREST,[Uc]:e.NEAREST_MIPMAP_LINEAR,[Ei]:e.LINEAR,[Nf]:e.LINEAR_MIPMAP_NEAREST,[fa]:e.LINEAR_MIPMAP_LINEAR},Mt={[VM]:e.NEVER,[YM]:e.ALWAYS,[GM]:e.LESS,[d0]:e.LEQUAL,[kM]:e.EQUAL,[qM]:e.GEQUAL,[XM]:e.GREATER,[WM]:e.NOTEQUAL};function zt(T,S){if(S.type===Ci&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ei||S.magFilter===Nf||S.magFilter===Uc||S.magFilter===fa||S.minFilter===Ei||S.minFilter===Nf||S.minFilter===Uc||S.minFilter===fa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,lt[S.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,lt[S.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,lt[S.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,vt[S.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,vt[S.minFilter]),S.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,Mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ln||S.minFilter!==Uc&&S.minFilter!==fa||S.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Qt(T,S){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));let H=S.source,st=d.get(H);st===void 0&&(st={},d.set(H,st));let q=K(S);if(q!==T.__cacheKey){st[q]===void 0&&(st[q]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),st[q].usedTimes++;let wt=st[T.__cacheKey];wt!==void 0&&(st[T.__cacheKey].usedTimes--,wt.usedTimes===0&&E(S)),T.__cacheKey=q,T.__webglTexture=st[q].texture}return P}function ne(T,S,P){return Math.floor(Math.floor(T/P)/S)}function nt(T,S,P,H){let q=T.updateRanges;if(q.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,P,H,S.data);else{q.sort((ut,St)=>ut.start-St.start);let wt=0;for(let ut=1;ut<q.length;ut++){let St=q[wt],Ot=q[ut],Dt=St.start+St.count,_t=ne(Ot.start,S.width,4),qt=ne(St.start,S.width,4);Ot.start<=Dt+1&&_t===qt&&ne(Ot.start+Ot.count-1,S.width,4)===_t?St.count=Math.max(St.count,Ot.start+Ot.count-St.start):(++wt,q[wt]=Ot)}q.length=wt+1;let ft=e.getParameter(e.UNPACK_ROW_LENGTH),Ct=e.getParameter(e.UNPACK_SKIP_PIXELS),Rt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let ut=0,St=q.length;ut<St;ut++){let Ot=q[ut],Dt=Math.floor(Ot.start/4),_t=Math.ceil(Ot.count/4),qt=Dt%S.width,N=Math.floor(Dt/S.width),dt=_t,yt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,qt,N,dt,yt,P,H,S.data)}T.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ft),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ct),e.pixelStorei(e.UNPACK_SKIP_ROWS,Rt)}}function B(T,S,P){let H=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(H=e.TEXTURE_3D);let st=Qt(T,S),q=S.source;n.bindTexture(H,T.__webglTexture,e.TEXTURE0+P);let wt=i.get(q);if(q.version!==wt.__version||st===!0){n.activeTexture(e.TEXTURE0+P);let ft=re.getPrimaries(re.workingColorSpace),Ct=S.colorSpace===Ss?null:re.getPrimaries(S.colorSpace),Rt=S.colorSpace===Ss||ft===Ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ut=x(S.image,!1,s.maxTextureSize);ut=Wt(S,ut);let St=a.convert(S.format,S.colorSpace),Ot=a.convert(S.type),Dt=v(S.internalFormat,St,Ot,S.colorSpace,S.isVideoTexture);zt(H,S);let _t,qt=S.mipmaps,N=S.isVideoTexture!==!0,dt=wt.__version===void 0||st===!0,yt=q.dataReady,Tt=C(S,ut);if(S.isDepthTexture)Dt=y(S.format===wo,S.type),dt&&(N?n.texStorage2D(e.TEXTURE_2D,1,Dt,ut.width,ut.height):n.texImage2D(e.TEXTURE_2D,0,Dt,ut.width,ut.height,0,St,Ot,null));else if(S.isDataTexture)if(qt.length>0){N&&dt&&n.texStorage2D(e.TEXTURE_2D,Tt,Dt,qt[0].width,qt[0].height);for(let ht=0,et=qt.length;ht<et;ht++)_t=qt[ht],N?yt&&n.texSubImage2D(e.TEXTURE_2D,ht,0,0,_t.width,_t.height,St,Ot,_t.data):n.texImage2D(e.TEXTURE_2D,ht,Dt,_t.width,_t.height,0,St,Ot,_t.data);S.generateMipmaps=!1}else N?(dt&&n.texStorage2D(e.TEXTURE_2D,Tt,Dt,ut.width,ut.height),yt&&nt(S,ut,St,Ot)):n.texImage2D(e.TEXTURE_2D,0,Dt,ut.width,ut.height,0,St,Ot,ut.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&dt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Tt,Dt,qt[0].width,qt[0].height,ut.depth);for(let ht=0,et=qt.length;ht<et;ht++)if(_t=qt[ht],S.format!==mi)if(St!==null)if(N){if(yt)if(S.layerUpdates.size>0){let Ut=x0(_t.width,_t.height,S.format,S.type);for(let Et of S.layerUpdates){let Pt=_t.data.subarray(Et*Ut/_t.data.BYTES_PER_ELEMENT,(Et+1)*Ut/_t.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ht,0,0,Et,_t.width,_t.height,1,St,Pt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ht,0,0,0,_t.width,_t.height,ut.depth,St,_t.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ht,Dt,_t.width,_t.height,ut.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?yt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,ht,0,0,0,_t.width,_t.height,ut.depth,St,Ot,_t.data):n.texImage3D(e.TEXTURE_2D_ARRAY,ht,Dt,_t.width,_t.height,ut.depth,0,St,Ot,_t.data)}else{N&&dt&&n.texStorage2D(e.TEXTURE_2D,Tt,Dt,qt[0].width,qt[0].height);for(let ht=0,et=qt.length;ht<et;ht++)_t=qt[ht],S.format!==mi?St!==null?N?yt&&n.compressedTexSubImage2D(e.TEXTURE_2D,ht,0,0,_t.width,_t.height,St,_t.data):n.compressedTexImage2D(e.TEXTURE_2D,ht,Dt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?yt&&n.texSubImage2D(e.TEXTURE_2D,ht,0,0,_t.width,_t.height,St,Ot,_t.data):n.texImage2D(e.TEXTURE_2D,ht,Dt,_t.width,_t.height,0,St,Ot,_t.data)}else if(S.isDataArrayTexture)if(N){if(dt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Tt,Dt,ut.width,ut.height,ut.depth),yt)if(S.layerUpdates.size>0){let ht=x0(ut.width,ut.height,S.format,S.type);for(let et of S.layerUpdates){let Ut=ut.data.subarray(et*ht/ut.data.BYTES_PER_ELEMENT,(et+1)*ht/ut.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,et,ut.width,ut.height,1,St,Ot,Ut)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,St,Ot,ut.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Dt,ut.width,ut.height,ut.depth,0,St,Ot,ut.data);else if(S.isData3DTexture)N?(dt&&n.texStorage3D(e.TEXTURE_3D,Tt,Dt,ut.width,ut.height,ut.depth),yt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,St,Ot,ut.data)):n.texImage3D(e.TEXTURE_3D,0,Dt,ut.width,ut.height,ut.depth,0,St,Ot,ut.data);else if(S.isFramebufferTexture){if(dt)if(N)n.texStorage2D(e.TEXTURE_2D,Tt,Dt,ut.width,ut.height);else{let ht=ut.width,et=ut.height;for(let Ut=0;Ut<Tt;Ut++)n.texImage2D(e.TEXTURE_2D,Ut,Dt,ht,et,0,St,Ot,null),ht>>=1,et>>=1}}else if(qt.length>0){if(N&&dt){let ht=Vt(qt[0]);n.texStorage2D(e.TEXTURE_2D,Tt,Dt,ht.width,ht.height)}for(let ht=0,et=qt.length;ht<et;ht++)_t=qt[ht],N?yt&&n.texSubImage2D(e.TEXTURE_2D,ht,0,0,St,Ot,_t):n.texImage2D(e.TEXTURE_2D,ht,Dt,St,Ot,_t);S.generateMipmaps=!1}else if(N){if(dt){let ht=Vt(ut);n.texStorage2D(e.TEXTURE_2D,Tt,Dt,ht.width,ht.height)}yt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,St,Ot,ut)}else n.texImage2D(e.TEXTURE_2D,0,Dt,St,Ot,ut);m(S)&&h(H),wt.__version=q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function F(T,S,P){if(S.image.length!==6)return;let H=Qt(T,S),st=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+P);let q=i.get(st);if(st.version!==q.__version||H===!0){n.activeTexture(e.TEXTURE0+P);let wt=re.getPrimaries(re.workingColorSpace),ft=S.colorSpace===Ss?null:re.getPrimaries(S.colorSpace),Ct=S.colorSpace===Ss||wt===ft?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Rt=S.isCompressedTexture||S.image[0].isCompressedTexture,ut=S.image[0]&&S.image[0].isDataTexture,St=[];for(let et=0;et<6;et++)!Rt&&!ut?St[et]=x(S.image[et],!0,s.maxCubemapSize):St[et]=ut?S.image[et].image:S.image[et],St[et]=Wt(S,St[et]);let Ot=St[0],Dt=a.convert(S.format,S.colorSpace),_t=a.convert(S.type),qt=v(S.internalFormat,Dt,_t,S.colorSpace),N=S.isVideoTexture!==!0,dt=q.__version===void 0||H===!0,yt=st.dataReady,Tt=C(S,Ot);zt(e.TEXTURE_CUBE_MAP,S);let ht;if(Rt){N&&dt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Tt,qt,Ot.width,Ot.height);for(let et=0;et<6;et++){ht=St[et].mipmaps;for(let Ut=0;Ut<ht.length;Ut++){let Et=ht[Ut];S.format!==mi?Dt!==null?N?yt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ut,0,0,Et.width,Et.height,Dt,Et.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ut,qt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?yt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ut,0,0,Et.width,Et.height,Dt,_t,Et.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ut,qt,Et.width,Et.height,0,Dt,_t,Et.data)}}}else{if(ht=S.mipmaps,N&&dt){ht.length>0&&Tt++;let et=Vt(St[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Tt,qt,et.width,et.height)}for(let et=0;et<6;et++)if(ut){N?yt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,St[et].width,St[et].height,Dt,_t,St[et].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,qt,St[et].width,St[et].height,0,Dt,_t,St[et].data);for(let Ut=0;Ut<ht.length;Ut++){let Pt=ht[Ut].image[et].image;N?yt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ut+1,0,0,Pt.width,Pt.height,Dt,_t,Pt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ut+1,qt,Pt.width,Pt.height,0,Dt,_t,Pt.data)}}else{N?yt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Dt,_t,St[et]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,qt,Dt,_t,St[et]);for(let Ut=0;Ut<ht.length;Ut++){let Et=ht[Ut];N?yt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ut+1,0,0,Dt,_t,Et.image[et]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ut+1,qt,Dt,_t,Et.image[et])}}}m(S)&&h(e.TEXTURE_CUBE_MAP),q.__version=st.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function J(T,S,P,H,st,q){let wt=a.convert(P.format,P.colorSpace),ft=a.convert(P.type),Ct=v(P.internalFormat,wt,ft,P.colorSpace),Rt=i.get(S),ut=i.get(P);if(ut.__renderTarget=S,!Rt.__hasExternalTextures){let St=Math.max(1,S.width>>q),Ot=Math.max(1,S.height>>q);st===e.TEXTURE_3D||st===e.TEXTURE_2D_ARRAY?n.texImage3D(st,q,Ct,St,Ot,S.depth,0,wt,ft,null):n.texImage2D(st,q,Ct,St,Ot,0,wt,ft,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),ot(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,st,ut.__webglTexture,0,ct(S)):(st===e.TEXTURE_2D||st>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,st,ut.__webglTexture,q),n.bindFramebuffer(e.FRAMEBUFFER,null)}function rt(T,S,P){if(e.bindRenderbuffer(e.RENDERBUFFER,T),S.depthBuffer){let H=S.depthTexture,st=H&&H.isDepthTexture?H.type:null,q=y(S.stencilBuffer,st),wt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=ct(S);ot(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ft,q,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,ft,q,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,q,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,wt,e.RENDERBUFFER,T)}else{let H=S.textures;for(let st=0;st<H.length;st++){let q=H[st],wt=a.convert(q.format,q.colorSpace),ft=a.convert(q.type),Ct=v(q.internalFormat,wt,ft,q.colorSpace),Rt=ct(S);P&&ot(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Rt,Ct,S.width,S.height):ot(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Rt,Ct,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Ct,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function at(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=i.get(S.depthTexture);H.__renderTarget=S,(!H.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);let st=H.__webglTexture,q=ct(S);if(S.depthTexture.format===fo)ot(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,st,0,q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,st,0);else if(S.depthTexture.format===wo)ot(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,st,0,q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function It(T){let S=i.get(T),P=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let H=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),H){let st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,H.removeEventListener("dispose",st)};H.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=H}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let H=T.texture.mipmaps;H&&H.length>0?at(S.__webglFramebuffer[0],T):at(S.__webglFramebuffer,T)}else if(P){S.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[H]),S.__webglDepthbuffer[H]===void 0)S.__webglDepthbuffer[H]=e.createRenderbuffer(),rt(S.__webglDepthbuffer[H],T,!1);else{let st=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,st,e.RENDERBUFFER,q)}}else{let H=T.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),rt(S.__webglDepthbuffer,T,!1);else{let st=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,st,e.RENDERBUFFER,q)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Lt(T,S,P){let H=i.get(T);S!==void 0&&J(H.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&It(T)}function R(T){let S=T.texture,P=i.get(T),H=i.get(S);T.addEventListener("dispose",A);let st=T.textures,q=T.isWebGLCubeRenderTarget===!0,wt=st.length>1;if(wt||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=S.version,r.memory.textures++),q){P.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer[ft]=[];for(let Ct=0;Ct<S.mipmaps.length;Ct++)P.__webglFramebuffer[ft][Ct]=e.createFramebuffer()}else P.__webglFramebuffer[ft]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)P.__webglFramebuffer[ft]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(wt)for(let ft=0,Ct=st.length;ft<Ct;ft++){let Rt=i.get(st[ft]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&ot(T)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ft=0;ft<st.length;ft++){let Ct=st[ft];P.__webglColorRenderbuffer[ft]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[ft]);let Rt=a.convert(Ct.format,Ct.colorSpace),ut=a.convert(Ct.type),St=v(Ct.internalFormat,Rt,ut,Ct.colorSpace,T.isXRRenderTarget===!0),Ot=ct(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ot,St,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,P.__webglColorRenderbuffer[ft])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),rt(P.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),zt(e.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)J(P.__webglFramebuffer[ft][Ct],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ct);else J(P.__webglFramebuffer[ft],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(S)&&h(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(wt){for(let ft=0,Ct=st.length;ft<Ct;ft++){let Rt=st[ft],ut=i.get(Rt),St=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(St=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(St,ut.__webglTexture),zt(St,Rt),J(P.__webglFramebuffer,T,Rt,e.COLOR_ATTACHMENT0+ft,St,0),m(Rt)&&h(St)}n.unbindTexture()}else{let ft=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,H.__webglTexture),zt(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)J(P.__webglFramebuffer[Ct],T,S,e.COLOR_ATTACHMENT0,ft,Ct);else J(P.__webglFramebuffer,T,S,e.COLOR_ATTACHMENT0,ft,0);m(S)&&h(ft),n.unbindTexture()}T.depthBuffer&&It(T)}function X(T){let S=T.textures;for(let P=0,H=S.length;P<H;P++){let st=S[P];if(m(st)){let q=g(T),wt=i.get(st).__webglTexture;n.bindTexture(q,wt),h(q),n.unbindTexture()}}}let j=[],$=[];function Q(T){if(T.samples>0){if(ot(T)===!1){let S=T.textures,P=T.width,H=T.height,st=e.COLOR_BUFFER_BIT,q=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,wt=i.get(T),ft=S.length>1;if(ft)for(let Rt=0;Rt<S.length;Rt++)n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let Ct=T.texture.mipmaps;Ct&&Ct.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=e.STENCIL_BUFFER_BIT)),ft){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,wt.__webglColorRenderbuffer[Rt]);let ut=i.get(S[Rt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ut,0)}e.blitFramebuffer(0,0,P,H,0,0,P,H,st,e.NEAREST),l===!0&&(j.length=0,$.length=0,j.push(e.COLOR_ATTACHMENT0+Rt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(j.push(q),$.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,$)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,j))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ft)for(let Rt=0;Rt<S.length;Rt++){n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,wt.__webglColorRenderbuffer[Rt]);let ut=i.get(S[Rt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.TEXTURE_2D,ut,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let S=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function ct(T){return Math.min(s.maxSamples,T.samples)}function ot(T){let S=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mt(T){let S=r.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function Wt(T,S){let P=T.colorSpace,H=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==Ga&&P!==Ss&&(re.getTransfer(P)===de?(H!==mi||st!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),S}function Vt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=it,this.setTextureCube=G,this.rebindTextures=Lt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ot}function x3(e,t){function n(i,s=Ss){let a,r=re.getTransfer(s);if(i===wi)return e.UNSIGNED_BYTE;if(i===Of)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Pf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===l0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===c0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===r0)return e.BYTE;if(i===o0)return e.SHORT;if(i===Eo)return e.UNSIGNED_SHORT;if(i===If)return e.INT;if(i===da)return e.UNSIGNED_INT;if(i===Ci)return e.FLOAT;if(i===To)return e.HALF_FLOAT;if(i===u0)return e.ALPHA;if(i===h0)return e.RGB;if(i===mi)return e.RGBA;if(i===fo)return e.DEPTH_COMPONENT;if(i===wo)return e.DEPTH_STENCIL;if(i===Bf)return e.RED;if(i===zf)return e.RED_INTEGER;if(i===f0)return e.RG;if(i===Ff)return e.RG_INTEGER;if(i===Hf)return e.RGBA_INTEGER;if(i===Lc||i===Nc||i===Ic||i===Oc)if(r===de)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Lc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Lc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ic)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vf||i===Gf||i===kf||i===Xf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Vf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wf||i===qf||i===Yf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Wf||i===qf)return r===de?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Yf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zf||i===Jf||i===Kf||i===Qf||i===jf||i===$f||i===td||i===ed||i===nd||i===id||i===sd||i===ad||i===rd||i===od)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Zf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jf)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$f)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===td)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ed)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nd)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===id)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sd)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ad)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rd)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===od)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ld||i===cd||i===ud)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===ld)return r===de?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ud)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hd||i===fd||i===dd||i===pd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===hd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===fd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ao?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var S3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,N0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new uc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Ai({vertexShader:S3,fragmentShader:M3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ce(new yc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},I0=class extends _s{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null,x=typeof XRWebGLBinding<"u",m=new N0,h={},g=n.getContextAttributes(),v=null,y=null,C=[],w=[],A=new gt,D=null,E=new cn;E.viewport=new fe;let M=new cn;M.viewport=new fe;let U=[E,M],z=new xf,W=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let F=C[B];return F===void 0&&(F=new vo,C[B]=F),F.getTargetRaySpace()},this.getControllerGrip=function(B){let F=C[B];return F===void 0&&(F=new vo,C[B]=F),F.getGripSpace()},this.getHand=function(B){let F=C[B];return F===void 0&&(F=new vo,C[B]=F),F.getHandSpace()};function Z(B){let F=w.indexOf(B.inputSource);if(F===-1)return;let J=C[F];J!==void 0&&(J.update(B.inputSource,B.frame,c||r),J.dispatchEvent({type:B.type,data:B.inputSource}))}function Y(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let B=0;B<C.length;B++){let F=w[B];F!==null&&(w[B]=null,C[B].disconnect(F))}W=null,K=null,m.reset();for(let B in h)delete h[B];t.setRenderTarget(v),p=null,d=null,f=null,s=null,y=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),g.xrCompatible!==!0&&await n.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,rt=null,at=null;g.depth&&(at=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=g.stencil?wo:fo,rt=g.stencil?Ao:da);let It={colorFormat:n.RGBA8,depthFormat:at,scaleFactor:a};f=this.getBinding(),d=f.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Bi(d.textureWidth,d.textureHeight,{format:mi,type:wi,depthTexture:new cc(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,J),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Bi(p.framebufferWidth,p.framebufferHeight,{format:mi,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(B){for(let F=0;F<B.removed.length;F++){let J=B.removed[F],rt=w.indexOf(J);rt>=0&&(w[rt]=null,C[rt].disconnect(J))}for(let F=0;F<B.added.length;F++){let J=B.added[F],rt=w.indexOf(J);if(rt===-1){for(let It=0;It<C.length;It++)if(It>=w.length){w.push(J),rt=It;break}else if(w[It]===null){w[It]=J,rt=It;break}if(rt===-1)break}let at=C[rt];at&&at.connect(J)}}let G=new L,lt=new L;function vt(B,F,J){G.setFromMatrixPosition(F.matrixWorld),lt.setFromMatrixPosition(J.matrixWorld);let rt=G.distanceTo(lt),at=F.projectionMatrix.elements,It=J.projectionMatrix.elements,Lt=at[14]/(at[10]-1),R=at[14]/(at[10]+1),X=(at[9]+1)/at[5],j=(at[9]-1)/at[5],$=(at[8]-1)/at[0],Q=(It[8]+1)/It[0],ct=Lt*$,ot=Lt*Q,mt=rt/(-$+Q),Wt=mt*-$;if(F.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Wt),B.translateZ(mt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),at[10]===-1)B.projectionMatrix.copy(F.projectionMatrix),B.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{let Vt=Lt+mt,T=R+mt,S=ct-Wt,P=ot+(rt-Wt),H=X*R/T*Vt,st=j*R/T*Vt;B.projectionMatrix.makePerspective(S,P,H,st,Vt,T),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Mt(B,F){F===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(F.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let F=B.near,J=B.far;m.texture!==null&&(m.depthNear>0&&(F=m.depthNear),m.depthFar>0&&(J=m.depthFar)),z.near=M.near=E.near=F,z.far=M.far=E.far=J,(W!==z.near||K!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),W=z.near,K=z.far),z.layers.mask=B.layers.mask|6,E.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;let rt=B.parent,at=z.cameras;Mt(z,rt);for(let It=0;It<at.length;It++)Mt(at[It],rt);at.length===2?vt(z,E,M):z.projectionMatrix.copy(E.projectionMatrix),zt(B,z,rt)};function zt(B,F,J){J===null?B.matrix.copy(F.matrixWorld):(B.matrix.copy(J.matrixWorld),B.matrix.invert(),B.matrix.multiply(F.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(F.projectionMatrix),B.projectionMatrixInverse.copy(F.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Zh*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(B){return h[B]};let Qt=null;function ne(B,F){if(u=F.getViewerPose(c||r),_=F,u!==null){let J=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let rt=!1;J.length!==z.cameras.length&&(z.cameras.length=0,rt=!0);for(let R=0;R<J.length;R++){let X=J[R],j=null;if(p!==null)j=p.getViewport(X);else{let Q=f.getViewSubImage(d,X);j=Q.viewport,R===0&&(t.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(y))}let $=U[R];$===void 0&&($=new cn,$.layers.enable(R),$.viewport=new fe,U[R]=$),$.matrix.fromArray(X.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(X.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(j.x,j.y,j.width,j.height),R===0&&(z.matrix.copy($.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),rt===!0&&z.cameras.push($)}let at=s.enabledFeatures;if(at&&at.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let R=f.getDepthInformation(J[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(at&&at.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let R=0;R<J.length;R++){let X=J[R].camera;if(X){let j=h[X];j||(j=new uc,h[X]=j);let $=f.getCameraImage(X);j.sourceTexture=$}}}}for(let J=0;J<C.length;J++){let rt=w[J],at=C[J];rt!==null&&at!==void 0&&at.update(rt,F,c||r)}Qt&&Qt(B,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),_=null}let nt=new Ab;nt.setAnimationLoop(ne),this.setAnimationLoop=function(B){Qt=B},this.dispose=function(){}}},$a=new Nn,b3=new xe;function E3(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,g0(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,g,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(a(m,h),_(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),x(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,g,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===un&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===un&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let g=t.get(h),v=g.envMap,y=g.envMapRotation;v&&(m.envMap.value=v,$a.copy(y),$a.x*=-1,$a.y*=-1,$a.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($a.y*=-1,$a.z*=-1),m.envMapRotation.value.setFromMatrix4(b3.makeRotationFromEuler($a)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){let g=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function T3(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){let y=v.program;i.uniformBlockBinding(g,y)}function c(g,v){let y=s[g.id];y===void 0&&(_(g),y=u(g),s[g.id]=y,g.addEventListener("dispose",m));let C=v.program;i.updateUBOMapping(g,C);let w=t.render.frame;a[g.id]!==w&&(d(g),a[g.id]=w)}function u(g){let v=f();g.__bindingPointIndex=v;let y=e.createBuffer(),C=g.__size,w=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,C,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,y),y}function f(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){let v=s[g.id],y=g.uniforms,C=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let w=0,A=y.length;w<A;w++){let D=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,M=D.length;E<M;E++){let U=D[E];if(p(U,w,E,C)===!0){let z=U.__offset,W=Array.isArray(U.value)?U.value:[U.value],K=0;for(let Z=0;Z<W.length;Z++){let Y=W[Z],it=x(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,e.bufferSubData(e.UNIFORM_BUFFER,z+K,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,K),K+=it.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,z,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,v,y,C){let w=g.value,A=v+"_"+y;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{let D=C[A];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return C[A]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function _(g){let v=g.uniforms,y=0,C=16;for(let A=0,D=v.length;A<D;A++){let E=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,U=E.length;M<U;M++){let z=E[M],W=Array.isArray(z.value)?z.value:[z.value];for(let K=0,Z=W.length;K<Z;K++){let Y=W[K],it=x(Y),G=y%C,lt=G%it.boundary,vt=G+lt;y+=lt,vt!==0&&C-vt<it.storage&&(y+=C-vt),z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=it.storage}}}let w=y%C;return w>0&&(y+=C-w),g.__size=y,g.__cache={},this}function x(g){let v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){let v=g.target;v.removeEventListener("dispose",m);let y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(s[v.id]),delete s[v.id],delete a[v.id]}function h(){for(let g in s)e.deleteBuffer(s[g]);r=[],s={},a={}}return{bind:l,update:c,dispose:h}}var yd=class{constructor(t={}){let{canvas:n=ZM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let _=new Uint32Array(4),x=new Int32Array(4),m=null,h=null,g=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,C=!1;this._outputColorSpace=pn;let w=0,A=0,D=null,E=-1,M=null,U=new fe,z=new fe,W=null,K=new Xt(0),Z=0,Y=n.width,it=n.height,G=1,lt=null,vt=null,Mt=new fe(0,0,Y,it),zt=new fe(0,0,Y,it),Qt=!1,ne=new yo,nt=!1,B=!1,F=new xe,J=new L,rt=new fe,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function Lt(){return D===null?G:1}let R=i;function X(b,I){return n.getContext(b,I)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",yt,!1),n.addEventListener("webglcontextrestored",Tt,!1),n.addEventListener("webglcontextcreationerror",ht,!1),R===null){let I="webgl2";if(R=X(I,b),R===null)throw X(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let j,$,Q,ct,ot,mt,Wt,Vt,T,S,P,H,st,q,wt,ft,Ct,Rt,ut,St,Ot,Dt,_t,qt;function N(){j=new kR(R),j.init(),Dt=new x3(R,j),$=new PR(R,j,t,Dt),Q=new v3(R,j),$.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),ct=new qR(R),ot=new a3,mt=new y3(R,j,Q,ot,$,Dt,ct),Wt=new zR(y),Vt=new GR(y),T=new jA(R),_t=new IR(R,T),S=new XR(R,T,ct,_t),P=new ZR(R,S,T,ct),ut=new YR(R,$,mt),ft=new BR(ot),H=new s3(y,Wt,Vt,j,$,_t,ft),st=new E3(y,ot),q=new o3,wt=new d3(j),Rt=new NR(y,Wt,Vt,Q,P,p,l),Ct=new g3(y,P,$),qt=new T3(R,ct,$,Q),St=new OR(R,j,ct),Ot=new WR(R,j,ct),ct.programs=H.programs,y.capabilities=$,y.extensions=j,y.properties=ot,y.renderLists=q,y.shadowMap=Ct,y.state=Q,y.info=ct}N();let dt=new I0(y,R);this.xr=dt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let b=j.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=j.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(Y,it,!1))},this.getSize=function(b){return b.set(Y,it)},this.setSize=function(b,I,V=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,it=I,n.width=Math.floor(b*G),n.height=Math.floor(I*G),V===!0&&(n.style.width=b+"px",n.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(Y*G,it*G).floor()},this.setDrawingBufferSize=function(b,I,V){Y=b,it=I,G=V,n.width=Math.floor(b*V),n.height=Math.floor(I*V),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(Mt)},this.setViewport=function(b,I,V,k){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,I,V,k),Q.viewport(U.copy(Mt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(zt)},this.setScissor=function(b,I,V,k){b.isVector4?zt.set(b.x,b.y,b.z,b.w):zt.set(b,I,V,k),Q.scissor(z.copy(zt).multiplyScalar(G).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(b){Q.setScissorTest(Qt=b)},this.setOpaqueSort=function(b){lt=b},this.setTransparentSort=function(b){vt=b},this.getClearColor=function(b){return b.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,V=!0){let k=0;if(b){let O=!1;if(D!==null){let pt=D.texture.format;O=pt===Hf||pt===Ff||pt===zf}if(O){let pt=D.texture.type,bt=pt===wi||pt===da||pt===Eo||pt===Ao||pt===Of||pt===Pf,Nt=Rt.getClearColor(),At=Rt.getClearAlpha(),Ht=Nt.r,kt=Nt.g,Bt=Nt.b;bt?(_[0]=Ht,_[1]=kt,_[2]=Bt,_[3]=At,R.clearBufferuiv(R.COLOR,0,_)):(x[0]=Ht,x[1]=kt,x[2]=Bt,x[3]=At,R.clearBufferiv(R.COLOR,0,x))}else k|=R.COLOR_BUFFER_BIT}I&&(k|=R.DEPTH_BUFFER_BIT),V&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",yt,!1),n.removeEventListener("webglcontextrestored",Tt,!1),n.removeEventListener("webglcontextcreationerror",ht,!1),Rt.dispose(),q.dispose(),wt.dispose(),ot.dispose(),Wt.dispose(),Vt.dispose(),P.dispose(),_t.dispose(),qt.dispose(),H.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",In),dt.removeEventListener("sessionend",Po),Vi.stop()};function yt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let b=ct.autoReset,I=Ct.enabled,V=Ct.autoUpdate,k=Ct.needsUpdate,O=Ct.type;N(),ct.autoReset=b,Ct.enabled=I,Ct.autoUpdate=V,Ct.needsUpdate=k,Ct.type=O}function ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function et(b){let I=b.target;I.removeEventListener("dispose",et),Ut(I)}function Ut(b){Et(b),ot.remove(b)}function Et(b){let I=ot.get(b).programs;I!==void 0&&(I.forEach(function(V){H.releaseProgram(V)}),b.isShaderMaterial&&H.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,V,k,O,pt){I===null&&(I=at);let bt=O.isMesh&&O.matrixWorld.determinant()<0,Nt=Fc(b,I,V,k,O);Q.setMaterial(k,bt);let At=V.index,Ht=1;if(k.wireframe===!0){if(At=S.getWireframeAttribute(V),At===void 0)return;Ht=2}let kt=V.drawRange,Bt=V.attributes.position,ie=kt.start*Ht,pe=(kt.start+kt.count)*Ht;pt!==null&&(ie=Math.max(ie,pt.start*Ht),pe=Math.min(pe,(pt.start+pt.count)*Ht)),At!==null?(ie=Math.max(ie,0),pe=Math.min(pe,At.count)):Bt!=null&&(ie=Math.max(ie,0),pe=Math.min(pe,Bt.count));let Ie=pe-ie;if(Ie<0||Ie===1/0)return;_t.setup(O,k,Nt,V,At);let Me,ve=St;if(At!==null&&(Me=T.get(At),ve=Ot,ve.setIndex(Me)),O.isMesh)k.wireframe===!0?(Q.setLineWidth(k.wireframeLinewidth*Lt()),ve.setMode(R.LINES)):ve.setMode(R.TRIANGLES);else if(O.isLine){let Ft=k.linewidth;Ft===void 0&&(Ft=1),Q.setLineWidth(Ft*Lt()),O.isLineSegments?ve.setMode(R.LINES):O.isLineLoop?ve.setMode(R.LINE_LOOP):ve.setMode(R.LINE_STRIP)}else O.isPoints?ve.setMode(R.POINTS):O.isSprite&&ve.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)mo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ve.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ft=O._multiDrawStarts,Ue=O._multiDrawCounts,oe=O._multiDrawCount,On=At?T.get(At).bytesPerElement:1,ir=ot.get(k).currentProgram.getUniforms();for(let Pn=0;Pn<oe;Pn++)ir.setValue(R,"_gl_DrawID",Pn),ve.render(Ft[Pn]/On,Ue[Pn])}else if(O.isInstancedMesh)ve.renderInstances(ie,Ie,O.count);else if(V.isInstancedBufferGeometry){let Ft=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ue=Math.min(V.instanceCount,Ft);ve.renderInstances(ie,Ie,Ue)}else ve.render(ie,Ie)};function Pt(b,I,V){b.transparent===!0&&b.side===pi&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,Ms(b,I,V),b.side=gs,b.needsUpdate=!0,Ms(b,I,V),b.side=pi):Ms(b,I,V)}this.compile=function(b,I,V=null){V===null&&(V=b),h=wt.get(V),h.init(I),v.push(h),V.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),b!==V&&b.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();let k=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let pt=O.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){let Nt=pt[bt];Pt(Nt,V,O),k.add(Nt)}else Pt(pt,V,O),k.add(pt)}),h=v.pop(),k},this.compileAsync=function(b,I,V=null){let k=this.compile(b,I,V);return new Promise(O=>{function pt(){if(k.forEach(function(bt){ot.get(bt).currentProgram.isReady()&&k.delete(bt)}),k.size===0){O(b);return}setTimeout(pt,10)}j.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let jt=null;function Je(b){jt&&jt(b)}function In(){Vi.stop()}function Po(){Vi.start()}let Vi=new Ab;Vi.setAnimationLoop(Je),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(b){jt=b,dt.setAnimationLoop(b),b===null?Vi.stop():Vi.start()},dt.addEventListener("sessionstart",In),dt.addEventListener("sessionend",Po),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(I),I=dt.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,I,D),h=wt.get(b,v.length),h.init(I),v.push(h),F.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ne.setFromProjectionMatrix(F,bi,I.reversedDepth),B=this.localClippingEnabled,nt=ft.init(this.clippingPlanes,B),m=q.get(b,g.length),m.init(),g.push(m),dt.enabled===!0&&dt.isPresenting===!0){let pt=y.xr.getDepthSensingMesh();pt!==null&&nr(pt,I,-1/0,y.sortObjects)}nr(b,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(lt,vt),It=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,It&&Rt.addToRenderList(m,b),this.info.render.frame++,nt===!0&&ft.beginShadows();let V=h.state.shadowsArray;Ct.render(V,b,I),nt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,O=m.transmissive;if(h.setupLights(),I.isArrayCamera){let pt=I.cameras;if(O.length>0)for(let bt=0,Nt=pt.length;bt<Nt;bt++){let At=pt[bt];nn(k,O,b,At)}It&&Rt.render(b);for(let bt=0,Nt=pt.length;bt<Nt;bt++){let At=pt[bt];Gi(m,b,At,At.viewport)}}else O.length>0&&nn(k,O,b,I),It&&Rt.render(b),Gi(m,b,I);D!==null&&A===0&&(mt.updateMultisampleRenderTarget(D),mt.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(y,b,I),_t.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(h=v[v.length-1],nt===!0&&ft.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function nr(b,I,V,k){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ne.intersectsSprite(b)){k&&rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(F);let bt=P.update(b),Nt=b.material;Nt.visible&&m.push(b,bt,Nt,V,rt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ne.intersectsObject(b))){let bt=P.update(b),Nt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),rt.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),rt.copy(bt.boundingSphere.center)),rt.applyMatrix4(b.matrixWorld).applyMatrix4(F)),Array.isArray(Nt)){let At=bt.groups;for(let Ht=0,kt=At.length;Ht<kt;Ht++){let Bt=At[Ht],ie=Nt[Bt.materialIndex];ie&&ie.visible&&m.push(b,bt,ie,V,rt.z,Bt)}}else Nt.visible&&m.push(b,bt,Nt,V,rt.z,null)}}let pt=b.children;for(let bt=0,Nt=pt.length;bt<Nt;bt++)nr(pt[bt],I,V,k)}function Gi(b,I,V,k){let O=b.opaque,pt=b.transmissive,bt=b.transparent;h.setupLightsView(V),nt===!0&&ft.setGlobalState(y.clippingPlanes,V),k&&Q.viewport(U.copy(k)),O.length>0&&_e(O,I,V),pt.length>0&&_e(pt,I,V),bt.length>0&&_e(bt,I,V),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function nn(b,I,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new Bi(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?To:wi,minFilter:fa,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let pt=h.state.transmissionRenderTarget[k.id],bt=k.viewport||U;pt.setSize(bt.z*y.transmissionResolutionScale,bt.w*y.transmissionResolutionScale);let Nt=y.getRenderTarget(),At=y.getActiveCubeFace(),Ht=y.getActiveMipmapLevel();y.setRenderTarget(pt),y.getClearColor(K),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),It&&Rt.render(V);let kt=y.toneMapping;y.toneMapping=xs;let Bt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),nt===!0&&ft.setGlobalState(y.clippingPlanes,k),_e(b,V,k),mt.updateMultisampleRenderTarget(pt),mt.updateRenderTargetMipmap(pt),j.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let pe=0,Ie=I.length;pe<Ie;pe++){let Me=I[pe],ve=Me.object,Ft=Me.geometry,Ue=Me.material,oe=Me.group;if(Ue.side===pi&&ve.layers.test(k.layers)){let On=Ue.side;Ue.side=un,Ue.needsUpdate=!0,gn(ve,V,k,Ft,Ue,oe),Ue.side=On,Ue.needsUpdate=!0,ie=!0}}ie===!0&&(mt.updateMultisampleRenderTarget(pt),mt.updateRenderTargetMipmap(pt))}y.setRenderTarget(Nt,At,Ht),y.setClearColor(K,Z),Bt!==void 0&&(k.viewport=Bt),y.toneMapping=kt}function _e(b,I,V){let k=I.isScene===!0?I.overrideMaterial:null;for(let O=0,pt=b.length;O<pt;O++){let bt=b[O],Nt=bt.object,At=bt.geometry,Ht=bt.group,kt=bt.material;kt.allowOverride===!0&&k!==null&&(kt=k),Nt.layers.test(V.layers)&&gn(Nt,I,V,At,kt,Ht)}}function gn(b,I,V,k,O,pt){b.onBeforeRender(y,I,V,k,O,pt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(y,I,V,k,b,pt),O.transparent===!0&&O.side===pi&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,y.renderBufferDirect(V,I,k,O,b,pt),O.side=gs,O.needsUpdate=!0,y.renderBufferDirect(V,I,k,O,b,pt),O.side=pi):y.renderBufferDirect(V,I,k,O,b,pt),b.onAfterRender(y,I,V,k,O,pt)}function Ms(b,I,V){I.isScene!==!0&&(I=at);let k=ot.get(b),O=h.state.lights,pt=h.state.shadowsArray,bt=O.state.version,Nt=H.getParameters(b,O.state,pt,I,V),At=H.getProgramCacheKey(Nt),Ht=k.programs;k.environment=b.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(b.isMeshStandardMaterial?Vt:Wt).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Ht===void 0&&(b.addEventListener("dispose",et),Ht=new Map,k.programs=Ht);let kt=Ht.get(At);if(kt!==void 0){if(k.currentProgram===kt&&k.lightsStateVersion===bt)return bs(b,Nt),kt}else Nt.uniforms=H.getUniforms(b),b.onBeforeCompile(Nt,y),kt=H.acquireProgram(Nt,At),Ht.set(At,kt),k.uniforms=Nt.uniforms;let Bt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Bt.clippingPlanes=ft.uniform),bs(b,Nt),k.needsLights=Bo(b),k.lightsStateVersion=bt,k.needsLights&&(Bt.ambientLightColor.value=O.state.ambient,Bt.lightProbe.value=O.state.probe,Bt.directionalLights.value=O.state.directional,Bt.directionalLightShadows.value=O.state.directionalShadow,Bt.spotLights.value=O.state.spot,Bt.spotLightShadows.value=O.state.spotShadow,Bt.rectAreaLights.value=O.state.rectArea,Bt.ltc_1.value=O.state.rectAreaLTC1,Bt.ltc_2.value=O.state.rectAreaLTC2,Bt.pointLights.value=O.state.point,Bt.pointLightShadows.value=O.state.pointShadow,Bt.hemisphereLights.value=O.state.hemi,Bt.directionalShadowMap.value=O.state.directionalShadowMap,Bt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Bt.spotShadowMap.value=O.state.spotShadowMap,Bt.spotLightMatrix.value=O.state.spotLightMatrix,Bt.spotLightMap.value=O.state.spotLightMap,Bt.pointShadowMap.value=O.state.pointShadowMap,Bt.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=kt,k.uniformsList=null,kt}function Qn(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=Uo.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function bs(b,I){let V=ot.get(b);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Fc(b,I,V,k,O){I.isScene!==!0&&(I=at),mt.resetTextureUnits();let pt=I.fog,bt=k.isMeshStandardMaterial?I.environment:null,Nt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ga,At=(k.isMeshStandardMaterial?Vt:Wt).get(k.envMap||bt),Ht=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,kt=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Bt=!!V.morphAttributes.position,ie=!!V.morphAttributes.normal,pe=!!V.morphAttributes.color,Ie=xs;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ie=y.toneMapping);let Me=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=Me!==void 0?Me.length:0,Ft=ot.get(k),Ue=h.state.lights;if(nt===!0&&(B===!0||b!==M)){let _n=b===M&&k.id===E;ft.setState(k,b,_n)}let oe=!1;k.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ue.state.version||Ft.outputColorSpace!==Nt||O.isBatchedMesh&&Ft.batching===!1||!O.isBatchedMesh&&Ft.batching===!0||O.isBatchedMesh&&Ft.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ft.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ft.instancing===!1||!O.isInstancedMesh&&Ft.instancing===!0||O.isSkinnedMesh&&Ft.skinning===!1||!O.isSkinnedMesh&&Ft.skinning===!0||O.isInstancedMesh&&Ft.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ft.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ft.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ft.instancingMorph===!1&&O.morphTexture!==null||Ft.envMap!==At||k.fog===!0&&Ft.fog!==pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ft.numPlanes||Ft.numIntersection!==ft.numIntersection)||Ft.vertexAlphas!==Ht||Ft.vertexTangents!==kt||Ft.morphTargets!==Bt||Ft.morphNormals!==ie||Ft.morphColors!==pe||Ft.toneMapping!==Ie||Ft.morphTargetsCount!==ve)&&(oe=!0):(oe=!0,Ft.__version=k.version);let On=Ft.currentProgram;oe===!0&&(On=Ms(k,I,O));let ir=!1,Pn=!1,zo=!1,Le=On.getUniforms(),jn=Ft.uniforms;if(Q.useProgram(On.program)&&(ir=!0,Pn=!0,zo=!0),k.id!==E&&(E=k.id,Pn=!0),ir||M!==b){Q.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Le.setValue(R,"projectionMatrix",b.projectionMatrix),Le.setValue(R,"viewMatrix",b.matrixWorldInverse);let Mn=Le.map.cameraPosition;Mn!==void 0&&Mn.setValue(R,J.setFromMatrixPosition(b.matrixWorld)),$.logarithmicDepthBuffer&&Le.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Le.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Pn=!0,zo=!0)}if(O.isSkinnedMesh){Le.setOptional(R,O,"bindMatrix"),Le.setOptional(R,O,"bindMatrixInverse");let _n=O.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Le.setValue(R,"boneTexture",_n.boneTexture,mt))}O.isBatchedMesh&&(Le.setOptional(R,O,"batchingTexture"),Le.setValue(R,"batchingTexture",O._matricesTexture,mt),Le.setOptional(R,O,"batchingIdTexture"),Le.setValue(R,"batchingIdTexture",O._indirectTexture,mt),Le.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&Le.setValue(R,"batchingColorTexture",O._colorsTexture,mt));let $n=V.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&ut.update(O,V,On),(Pn||Ft.receiveShadow!==O.receiveShadow)&&(Ft.receiveShadow=O.receiveShadow,Le.setValue(R,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(jn.envMap.value=At,jn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(jn.envMapIntensity.value=I.environmentIntensity),Pn&&(Le.setValue(R,"toneMappingExposure",y.toneMappingExposure),Ft.needsLights&&Hc(jn,zo),pt&&k.fog===!0&&st.refreshFogUniforms(jn,pt),st.refreshMaterialUniforms(jn,k,G,it,h.state.transmissionRenderTarget[b.id]),Uo.upload(R,Qn(Ft),jn,mt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Uo.upload(R,Qn(Ft),jn,mt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Le.setValue(R,"center",O.center),Le.setValue(R,"modelViewMatrix",O.modelViewMatrix),Le.setValue(R,"normalMatrix",O.normalMatrix),Le.setValue(R,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let _n=k.uniformsGroups;for(let Mn=0,Ad=_n.length;Mn<Ad;Mn++){let pa=_n[Mn];qt.update(pa,On),qt.bind(pa,On)}}return On}function Hc(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Bo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,I,V){let k=ot.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ot.get(b.texture).__webglTexture=I,ot.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){let V=ot.get(b);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};let Xb=R.createFramebuffer();this.setRenderTarget=function(b,I=0,V=0){D=b,w=I,A=V;let k=!0,O=null,pt=!1,bt=!1;if(b){let At=ot.get(b);if(At.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(At.__webglFramebuffer===void 0)mt.setupRenderTarget(b);else if(At.__hasExternalTextures)mt.rebindTextures(b,ot.get(b.texture).__webglTexture,ot.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Bt=b.depthTexture;if(At.__boundDepthTexture!==Bt){if(Bt!==null&&ot.has(Bt)&&(b.width!==Bt.image.width||b.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(b)}}let Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(bt=!0);let kt=ot.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[I])?O=kt[I][V]:O=kt[I],pt=!0):b.samples>0&&mt.useMultisampledRTT(b)===!1?O=ot.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?O=kt[V]:O=kt,U.copy(b.viewport),z.copy(b.scissor),W=b.scissorTest}else U.copy(Mt).multiplyScalar(G).floor(),z.copy(zt).multiplyScalar(G).floor(),W=Qt;if(V!==0&&(O=Xb),Q.bindFramebuffer(R.FRAMEBUFFER,O)&&k&&Q.drawBuffers(b,O),Q.viewport(U),Q.scissor(z),Q.setScissorTest(W),pt){let At=ot.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,At.__webglTexture,V)}else if(bt){let At=I;for(let Ht=0;Ht<b.textures.length;Ht++){let kt=ot.get(b.textures[Ht]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ht,kt.__webglTexture,V,At)}}else if(b!==null&&V!==0){let At=ot.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,At.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(b,I,V,k,O,pt,bt,Nt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){Q.bindFramebuffer(R.FRAMEBUFFER,At);try{let Ht=b.textures[Nt],kt=Ht.format,Bt=Ht.type;if(!$.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-k&&V>=0&&V<=b.height-O&&(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Nt),R.readPixels(I,V,k,O,Dt.convert(kt),Dt.convert(Bt),pt))}finally{let Ht=D!==null?ot.get(D).__webglFramebuffer:null;Q.bindFramebuffer(R.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(b,I,V,k,O,pt,bt,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At)if(I>=0&&I<=b.width-k&&V>=0&&V<=b.height-O){Q.bindFramebuffer(R.FRAMEBUFFER,At);let Ht=b.textures[Nt],kt=Ht.format,Bt=Ht.type;if(!$.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ie),R.bufferData(R.PIXEL_PACK_BUFFER,pt.byteLength,R.STREAM_READ),b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Nt),R.readPixels(I,V,k,O,Dt.convert(kt),Dt.convert(Bt),0);let pe=D!==null?ot.get(D).__webglFramebuffer:null;Q.bindFramebuffer(R.FRAMEBUFFER,pe);let Ie=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await JM(R,Ie,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ie),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,pt),R.deleteBuffer(ie),R.deleteSync(Ie),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,V=0){let k=Math.pow(2,-V),O=Math.floor(b.image.width*k),pt=Math.floor(b.image.height*k),bt=I!==null?I.x:0,Nt=I!==null?I.y:0;mt.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,bt,Nt,O,pt),Q.unbindTexture()};let Wb=R.createFramebuffer(),qb=R.createFramebuffer();this.copyTextureToTexture=function(b,I,V=null,k=null,O=0,pt=null){pt===null&&(O!==0?(mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=O,O=0):pt=0);let bt,Nt,At,Ht,kt,Bt,ie,pe,Ie,Me=b.isCompressedTexture?b.mipmaps[pt]:b.image;if(V!==null)bt=V.max.x-V.min.x,Nt=V.max.y-V.min.y,At=V.isBox3?V.max.z-V.min.z:1,Ht=V.min.x,kt=V.min.y,Bt=V.isBox3?V.min.z:0;else{let $n=Math.pow(2,-O);bt=Math.floor(Me.width*$n),Nt=Math.floor(Me.height*$n),b.isDataArrayTexture?At=Me.depth:b.isData3DTexture?At=Math.floor(Me.depth*$n):At=1,Ht=0,kt=0,Bt=0}k!==null?(ie=k.x,pe=k.y,Ie=k.z):(ie=0,pe=0,Ie=0);let ve=Dt.convert(I.format),Ft=Dt.convert(I.type),Ue;I.isData3DTexture?(mt.setTexture3D(I,0),Ue=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(mt.setTexture2DArray(I,0),Ue=R.TEXTURE_2D_ARRAY):(mt.setTexture2D(I,0),Ue=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);let oe=R.getParameter(R.UNPACK_ROW_LENGTH),On=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ir=R.getParameter(R.UNPACK_SKIP_PIXELS),Pn=R.getParameter(R.UNPACK_SKIP_ROWS),zo=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Me.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Me.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ht),R.pixelStorei(R.UNPACK_SKIP_ROWS,kt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Bt);let Le=b.isDataArrayTexture||b.isData3DTexture,jn=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){let $n=ot.get(b),_n=ot.get(I),Mn=ot.get($n.__renderTarget),Ad=ot.get(_n.__renderTarget);Q.bindFramebuffer(R.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Q.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ad.__webglFramebuffer);for(let pa=0;pa<At;pa++)Le&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ot.get(b).__webglTexture,O,Bt+pa),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ot.get(I).__webglTexture,pt,Ie+pa)),R.blitFramebuffer(Ht,kt,bt,Nt,ie,pe,bt,Nt,R.DEPTH_BUFFER_BIT,R.NEAREST);Q.bindFramebuffer(R.READ_FRAMEBUFFER,null),Q.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||b.isRenderTargetTexture||ot.has(b)){let $n=ot.get(b),_n=ot.get(I);Q.bindFramebuffer(R.READ_FRAMEBUFFER,Wb),Q.bindFramebuffer(R.DRAW_FRAMEBUFFER,qb);for(let Mn=0;Mn<At;Mn++)Le?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,$n.__webglTexture,O,Bt+Mn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,$n.__webglTexture,O),jn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_n.__webglTexture,pt,Ie+Mn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_n.__webglTexture,pt),O!==0?R.blitFramebuffer(Ht,kt,bt,Nt,ie,pe,bt,Nt,R.COLOR_BUFFER_BIT,R.NEAREST):jn?R.copyTexSubImage3D(Ue,pt,ie,pe,Ie+Mn,Ht,kt,bt,Nt):R.copyTexSubImage2D(Ue,pt,ie,pe,Ht,kt,bt,Nt);Q.bindFramebuffer(R.READ_FRAMEBUFFER,null),Q.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else jn?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Ue,pt,ie,pe,Ie,bt,Nt,At,ve,Ft,Me.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(Ue,pt,ie,pe,Ie,bt,Nt,At,ve,Me.data):R.texSubImage3D(Ue,pt,ie,pe,Ie,bt,Nt,At,ve,Ft,Me):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,pt,ie,pe,bt,Nt,ve,Ft,Me.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,pt,ie,pe,Me.width,Me.height,ve,Me.data):R.texSubImage2D(R.TEXTURE_2D,pt,ie,pe,bt,Nt,ve,Ft,Me);R.pixelStorei(R.UNPACK_ROW_LENGTH,oe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,On),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ir),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zo),pt===0&&I.generateMipmaps&&R.generateMipmap(Ue),Q.unbindTexture()},this.initRenderTarget=function(b){ot.get(b).__webglFramebuffer===void 0&&mt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?mt.setTextureCube(b,0):b.isData3DTexture?mt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?mt.setTexture2DArray(b,0):mt.setTexture2D(b,0),Q.unbindTexture()},this.resetState=function(){w=0,A=0,D=null,Q.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),n.unpackColorSpace=re._getUnpackColorSpace()}};var Sd=class extends ka{constructor(){super();let t=new la;t.deleteAttribute("uv");let n=new qa({side:un}),i=new qa,s=new wc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let a=new Ce(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let r=new lc(t,i,6),o=new en;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new Ce(t,Io(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ce(t,Io(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ce(t,Io(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new Ce(t,Io(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new Ce(t,Io(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let p=new Ce(t,Io(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(let n of t)n.dispose()}};function Io(e){return new bc({color:0,emissive:16777215,emissiveIntensity:e})}var w3=23,C3=45,R3=.95,D3=.15,U3=.8,L3=.92,N3=.005,Ub=8,I3=.005,Lb=4,O3=3,P3=150,Md=1/60,B3=6,Nb=32,Ib=512,Bc=-9999,z3={spreadX:150,spreadY:100},F3={roughness:100,gloss:100,transparency:0},H3={gravityAnchor:"Center",bounciness:100,mouseForce:100,parallax:200},V3={svgLogos:[],useOriginalSvgColors:!1},G3=[];function k3(e,t){if(t==="Contain"){let n=Math.sqrt(1+e*e)||1;return[e/n,1/n]}return e>=1?[e,1]:[1,1/e]}function P0(e){return e?typeof e=="string"?e:e.src??"":""}var X3="varying vec3 vDecalPos;",W3=`uniform sampler2D uDecalMap;
uniform vec2 uDecalHalf;
uniform vec2 uDecalOffset;
varying vec3 vDecalPos;`,q3=`#include <map_fragment>
{
    vec3 dn = normalize(vDecalPos);
    // The projection smears as the surface turns tangent to the camera, so the
    // decal fades out before the silhouette instead of ending in a hard ring.
    float face = smoothstep(0.0, 0.35, dn.z);
    vec2 dUv = (vDecalPos.xy - uDecalOffset) / uDecalHalf;
    float inside = step(abs(dUv.x), 1.0) * step(abs(dUv.y), 1.0);
    vec4 slide = texture2D(uDecalMap, dUv * 0.5 + 0.5);
    diffuseColor.rgb = mix(diffuseColor.rgb, slide.rgb, face * inside * slide.a);
}`;function Y3(e,t){e.userData.decal=t,e.onBeforeCompile=n=>{let i=e.userData.decal;n.uniforms.uDecalMap=i.uDecalMap,n.uniforms.uDecalHalf=i.uDecalHalf,n.uniforms.uDecalOffset=i.uDecalOffset,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
`+X3).replace("#include <begin_vertex>",`#include <begin_vertex>
vDecalPos = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+W3).replace("#include <map_fragment>",q3)},e.customProgramCacheKey=()=>"rubber-decal",e.needsUpdate=!0}function Z3(e){e.userData.decal&&(e.userData.decal=null,e.onBeforeCompile=()=>{},e.customProgramCacheKey=()=>"rubber-plain",e.needsUpdate=!0)}function B0(e){for(let t of e)for(let n of t.geometries)n.dispose()}function z0(e,t){for(let n of t){e.remove(n.root);for(let i of n.meshes){let s=i.material;Array.isArray(s)?s.forEach(a=>a.dispose()):s.dispose()}}}var bd=[1,0,0,1,0,0];function Ed(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}function J3(e){if(!e)return bd;let t=bd,n=/(matrix|translate|scale|rotate|skewX|skewY)\s*\(([^)]*)\)/g,i;for(;i=n.exec(e);){let s=(i[2].match(/[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g)??[]).map(Number),a=o=>o*Math.PI/180,r=bd;switch(i[1]){case"matrix":s.length>=6&&(r=[s[0],s[1],s[2],s[3],s[4],s[5]]);break;case"translate":r=[1,0,0,1,s[0]??0,s[1]??0];break;case"scale":r=[s[0]??1,0,0,s[1]??s[0]??1,0,0];break;case"rotate":{let o=Math.cos(a(s[0]??0)),l=Math.sin(a(s[0]??0)),c=[o,l,-l,o,0,0];r=s.length>=3?Ed(Ed([1,0,0,1,s[1],s[2]],c),[1,0,0,1,-s[1],-s[2]]):c;break}case"skewX":r=[1,0,Math.tan(a(s[0]??0)),1,0,0];break;case"skewY":r=[1,Math.tan(a(s[0]??0)),0,1,0,0];break}t=Ed(t,r)}return t}var Oo=class{constructor(t){this.m=t;Gc(this,"contours",[]);Gc(this,"cur",[])}add(t,n){let i=this.m[0]*t+this.m[2]*n+this.m[4],s=this.m[1]*t+this.m[3]*n+this.m[5],a=this.cur.length;a>=2&&Math.abs(this.cur[a-2]-i)<1e-9&&Math.abs(this.cur[a-1]-s)<1e-9||this.cur.push(i,s)}break(){this.cur.length>=6&&this.contours.push(this.cur),this.cur=[]}};function Ob(e,t,n,i,s,a,r,o,l){for(let u=1;u<=24;u++){let f=u/24,d=1-f;e.add(d*d*d*t+3*d*d*f*i+3*d*f*f*a+f*f*f*o,d*d*d*n+3*d*d*f*s+3*d*f*f*r+f*f*f*l)}}function Pb(e,t,n,i,s,a,r){for(let l=1;l<=16;l++){let c=l/16,u=1-c;e.add(u*u*t+2*u*c*i+c*c*a,u*u*n+2*u*c*s+c*c*r)}}function K3(e,t,n,i,s,a,r,o,l,c){let u=Math.abs(i),f=Math.abs(s);if(u<1e-12||f<1e-12){e.add(l,c);return}let d=a*Math.PI/180,p=Math.cos(d),_=Math.sin(d),x=(t-l)/2,m=(n-c)/2,h=p*x+_*m,g=-_*x+p*m,v=h*h/(u*u)+g*g/(f*f);if(v>1){let lt=Math.sqrt(v);u*=lt,f*=lt}let y=u*u*f*f-u*u*g*g-f*f*h*h,C=u*u*g*g+f*f*h*h,w=(r!==o?1:-1)*Math.sqrt(Math.max(0,y/(C||1e-12))),A=w*u*g/f,D=-w*f*h/u,E=p*A-_*D+(t+l)/2,M=_*A+p*D+(n+c)/2,U=(lt,vt,Mt,zt)=>{let Qt=Math.hypot(lt,vt)*Math.hypot(Mt,zt)||1e-12,ne=Math.acos(Math.min(1,Math.max(-1,(lt*Mt+vt*zt)/Qt)));return lt*zt-vt*Mt<0&&(ne=-ne),ne},z=(h-A)/u,W=(g-D)/f,K=(-h-A)/u,Z=(-g-D)/f,Y=U(1,0,z,W),it=U(z,W,K,Z);!o&&it>0&&(it-=2*Math.PI),o&&it<0&&(it+=2*Math.PI);let G=Math.max(4,Math.ceil(Math.abs(it)/(Math.PI/24)));for(let lt=1;lt<=G;lt++){let vt=Y+it*lt/G,Mt=Math.cos(vt),zt=Math.sin(vt);e.add(E+u*Mt*p-f*zt*_,M+u*Mt*_+f*zt*p)}}var V0=class{constructor(t){this.d=t;Gc(this,"i",0)}skip(){for(;this.i<this.d.length&&(this.d[this.i]===" "||this.d[this.i]===","||this.d[this.i]===`
`||this.d[this.i]==="\r"||this.d[this.i]==="	");)this.i++}done(){return this.skip(),this.i>=this.d.length}command(){this.skip();let t=this.d[this.i];return t&&/[a-zA-Z]/.test(t)?(this.i++,t):null}num(){this.skip();let t=/^[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/.exec(this.d.slice(this.i));return t?(this.i+=t[0].length,parseFloat(t[0])):(this.i=this.d.length,NaN)}flag(){this.skip();let t=this.d[this.i];return t==="0"||t==="1"?(this.i++,t==="1"?1:0):this.num()?1:0}};function Q3(e,t){let n=new Oo(t),i=new V0(e),s=0,a=0,r=0,o=0,l=0,c=0,u=0,f=0,d="";for(;!i.done();){let p=i.command();if(p)d=p;else if(d)d==="M"?d="L":d==="m"&&(d="l");else break;let _=d===d.toLowerCase(),x=_?s:0,m=_?a:0;switch(d.toUpperCase()){case"M":{let h=i.num()+x,g=i.num()+m;if(isNaN(h)||isNaN(g))return n.break(),n.contours;n.break(),n.add(h,g),s=r=h,a=o=g;break}case"L":{let h=i.num()+x,g=i.num()+m;if(isNaN(h)||isNaN(g))return n.break(),n.contours;n.add(h,g),s=h,a=g;break}case"H":{let h=i.num()+x;if(isNaN(h))return n.break(),n.contours;n.add(h,a),s=h;break}case"V":{let h=i.num()+m;if(isNaN(h))return n.break(),n.contours;n.add(s,h),a=h;break}case"C":{let h=i.num()+x,g=i.num()+m,v=i.num()+x,y=i.num()+m,C=i.num()+x,w=i.num()+m;if(isNaN(C)||isNaN(w))return n.break(),n.contours;Ob(n,s,a,h,g,v,y,C,w),l=v,c=y,s=C,a=w;break}case"S":{let h=i.num()+x,g=i.num()+m,v=i.num()+x,y=i.num()+m;if(isNaN(v)||isNaN(y))return n.break(),n.contours;let C=2*s-l,w=2*a-c;Ob(n,s,a,C,w,h,g,v,y),l=h,c=g,s=v,a=y;break}case"Q":{let h=i.num()+x,g=i.num()+m,v=i.num()+x,y=i.num()+m;if(isNaN(v)||isNaN(y))return n.break(),n.contours;Pb(n,s,a,h,g,v,y),u=h,f=g,s=v,a=y;break}case"T":{let h=i.num()+x,g=i.num()+m;if(isNaN(h)||isNaN(g))return n.break(),n.contours;let v=2*s-u,y=2*a-f;Pb(n,s,a,v,y,h,g),u=v,f=y,s=h,a=g;break}case"A":{let h=i.num(),g=i.num(),v=i.num(),y=i.flag(),C=i.flag(),w=i.num()+x,A=i.num()+m;if(isNaN(w)||isNaN(A))return n.break(),n.contours;K3(n,s,a,h,g,v,y,C,w,A),s=w,a=A;break}case"Z":n.break(),s=r,a=o;break;default:return n.break(),n.contours}d.toUpperCase()!=="C"&&d.toUpperCase()!=="S"&&(l=s,c=a),d.toUpperCase()!=="Q"&&d.toUpperCase()!=="T"&&(u=s,f=a)}return n.break(),n.contours}function Bb(e,t,n,i,s){if(i<=0||s<=0)return[];let a=new Oo(e),r=96;for(let o=0;o<r;o++){let l=o/r*Math.PI*2;a.add(t+i*Math.cos(l),n+s*Math.sin(l))}return a.break(),a.contours}function F0(e,t){let n=e.getAttribute("style");if(n){let i=new RegExp("(?:^|;)\\s*"+t+"\\s*:\\s*([^;]+)").exec(n);if(i)return i[1].trim()}return e.getAttribute(t)}function j3(e){let t=new DOMParser().parseFromString(e,"image/svg+xml");if(t.getElementsByTagName("parsererror").length>0)throw new Error("invalid SVG");let n=[],i=(r,o,l=0)=>{let c=parseFloat(r.getAttribute(o)??"");return isNaN(c)?l:c},s=(r,o,l,c)=>{if(F0(r,"display")==="none")return;let u=Ed(o,J3(r.getAttribute("transform"))),f=F0(r,"fill")??l,d=F0(r,"fill-rule")??c,p=r.tagName.toLowerCase().replace(/^.*:/,""),_=[];switch(p){case"path":_=Q3(r.getAttribute("d")??"",u);break;case"rect":{let x=i(r,"x"),m=i(r,"y"),h=i(r,"width"),g=i(r,"height");if(h>0&&g>0){let v=new Oo(u);v.add(x,m),v.add(x+h,m),v.add(x+h,m+g),v.add(x,m+g),v.break(),_=v.contours}break}case"circle":_=Bb(u,i(r,"cx"),i(r,"cy"),i(r,"r"),i(r,"r"));break;case"ellipse":_=Bb(u,i(r,"cx"),i(r,"cy"),i(r,"rx"),i(r,"ry"));break;case"polygon":case"polyline":{let x=(r.getAttribute("points")??"").match(/[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g);if(x&&x.length>=6){let m=new Oo(u);for(let h=0;h+1<x.length;h+=2)m.add(parseFloat(x[h]),parseFloat(x[h+1]));m.break(),_=m.contours}break}default:for(let x=0;x<r.children.length;x++)s(r.children[x],u,f,d);return}_.length>0&&n.push({contours:_,fill:f&&f!=="none"&&f!=="currentColor"?f:null,evenOdd:d==="evenodd"})},a=t.documentElement;return a&&s(a,bd,null,null),n}function zb(e){let t=0;for(let n=0,i=e.length;n<i;n+=2){let s=(n+2)%i;t+=e[n]*e[s+1]-e[s]*e[n+1]}return t/2}function Fb(e,t,n){let i=!1;for(let s=0,a=e.length,r=a-2;s<a;r=s,s+=2){let o=e[s],l=e[s+1],c=e[r],u=e[r+1];l>n!=u>n&&t<(c-o)*(n-l)/(u-l)+o&&(i=!i)}return i}function H0(e){let t=[];for(let n=0;n<e.length;n+=2)t.push(new gt(e[n],e[n+1]));return t}function $3(e){let t=e.contours.filter(r=>Math.abs(zb(r))>1e-9);if(t.length===0)return[];let n=t.map(zb),i=t.map((r,o)=>t.reduce((l,c,u)=>u!==o&&Fb(c,r[0],r[1])?l+1:l,0)),s=[],a=new Map;for(let r=0;r<t.length;r++)i[r]%2===0&&(a.set(r,s.length),s.push(new ca(H0(t[r]))));for(let r=0;r<t.length;r++){if(i[r]%2===0)continue;let o=-1;for(let c=0;c<t.length;c++)c===r||!Fb(t[c],t[r][0],t[r][1])||(o===-1||i[c]>i[o])&&(o=c);if(o===-1)continue;if(!e.evenOdd&&Math.sign(n[r])===Math.sign(n[o])){s.push(new ca(H0(t[r])));continue}let l=a.get(o);l!==void 0&&s[l].holes.push(new Xa(H0(t[r])))}return s}async function tD(e){let t=await fetch(e);if(!t.ok)throw new Error(`SVG ${t.status} for ${e}`);let n=j3(await t.text()).map(w=>({fill:w.fill,shapes:$3(w)})).filter(w=>w.shapes.length>0);if(n.length===0)return null;let i=n.flatMap(w=>w.shapes),s=new xc(i);s.computeBoundingBox();let a=new L;s.boundingBox.getSize(a);let r=Math.max(a.x,a.y)||1;s.dispose();let o={depth:r*D3,bevelEnabled:!1,steps:1},l=new ps,c=[],u=[];for(let w=0;w<n.length;w++){let A=new vc(n[w].shapes,o);A.translate(0,0,w*r*.001);let D=new Ce(A);n[w].fill&&(D.userData.srcColor=n[w].fill),c.push(A),u.push(D),l.add(D)}if(u.length===0)return null;let f=1/0,d=1/0,p=1/0,_=-1/0,x=-1/0,m=-1/0;for(let w of u){w.geometry.computeBoundingBox();let A=w.geometry.boundingBox;f=Math.min(f,A.min.x),d=Math.min(d,A.min.y),p=Math.min(p,A.min.z),_=Math.max(_,A.max.x),x=Math.max(x,A.max.y),m=Math.max(m,A.max.z)}let h=(f+_)/2,g=(d+x)/2,v=(p+m)/2;for(let w of u)w.geometry.translate(-h,-g,-v);let y=0;for(let w of u){let A=w.geometry.attributes.position;for(let D=0;D<A.count;D++){let E=A.getX(D),M=A.getY(D),U=A.getZ(D),z=E*E+M*M+U*U;z>y&&(y=z)}}let C=Math.sqrt(y)||1;for(let w of u)w.geometry.scale(1/C,-1/C,1/C);return{root:l,geometries:c}}function G0(e){let{style:t,background:n="#000000",baseColor:i="#FFFFFF",accentColor:s="#FFD1DC",colorMode:a="Single",balloonColor:r="#FFFFFF",balloonColors:o=["#FFFFFF","#FFD1DC","#BDE0FE","#CDEB8B"],density:l=85,dotSize:c=120,lighting:u="Soft Studio",field:f,material:d,motion:p,sourceMode:_="Images",logo:x,images:m}=e,h=_==="Images"?m&&m.length>0?m:G3:[],g={...z3,...f??{}},v={...F3,...d??{}},y={...H3,...p??{}},C={...V3,...x??{},svgLogos:[]},w=(0,Be.useRef)(null),A=(0,Be.useRef)(null),D=(0,Be.useRef)([]),E=(0,Be.useRef)(null),M=(0,Be.useRef)([]),[U,z]=(0,Be.useState)(0),W=(0,Be.useRef)(!0),K=(0,Be.useRef)(new Map),Z=(0,Be.useRef)([]),[Y,it]=(0,Be.useState)(0),G=(0,Be.useRef)({});G.current={baseColor:i,accentColor:s,colorMode:a,balloonColor:r,balloonColors:o,dotSize:c,spreadX:g.spreadX,spreadY:g.spreadY,roughness:v.roughness,gloss:v.gloss,transparency:v.transparency,gravityAnchor:y.gravityAnchor,bounciness:y.bounciness,mouseForce:y.mouseForce,parallax:y.parallax,lighting:u,useOriginalSvgColors:C.useOriginalSvgColors};let lt=zc.useCallback(()=>{let nt=G.current,B=new Xt(nt.baseColor),F=nt.colorMode==="Multi"&&nt.balloonColors.length>0?nt.balloonColors.map(Lt=>new Xt(Lt)):[new Xt(nt.balloonColor)],J=nt.roughness/100,rt=nt.gloss/100,at=nt.transparency/100,It=nt.dotSize/100;for(let Lt of D.current)for(let R=0;R<Lt.meshes.length;R++){let X=Lt.meshes[R].material,j=nt.colorMode==="Multi"?F[Math.min(F.length-1,Math.floor(Lt.colorRoll*F.length))]:F[0];X.color.copy(j),X.roughness=J,X.metalness=.02+rt*.08,X.clearcoat=rt,X.clearcoatRoughness=Math.max(.15,.4-rt*.25),X.sheen=.12,X.sheenColor.copy(j),X.sheenRoughness=Math.max(.2,.5-rt*.3),X.reflectivity=.1+rt*.4,X.ior=1.45+rt*.05,X.transparent=at>0,X.opacity=1-at*.6,X.transmission=at*.95,X.thickness=It*1.5,X.needsUpdate=!0}},[]),vt=zc.useCallback(()=>{let nt=Z.current,B=D.current,F=W.current&&nt.length>0;for(let J=0;J<B.length;J++){let rt=B[J],at=F?nt[J%nt.length]:null;for(let It of rt.meshes){let Lt=It.material;if(!at){Z3(Lt);continue}let[R,X]=k3(at.aspect,at.fit),j=at.fit==="Cover",$=j?at.offsetX/100*R:0,Q=j?at.offsetY/100*X:0,ct=Lt.userData.decal;ct?(ct.uDecalMap.value=at.texture,ct.uDecalHalf.value.set(R,X),ct.uDecalOffset.value.set($,Q)):Y3(Lt,{uDecalMap:{value:at.texture},uDecalHalf:{value:new gt(R,X)},uDecalOffset:{value:new gt($,Q)}})}at?rt.spin!==0&&(rt.spin=0,rt.quat.identity()):rt.spin===0&&(rt.spin=rt.baseSpin)}},[]);(0,Be.useEffect)(()=>{let nt=w.current;if(!nt)return;let B=new ka,F=new cn(C3,1,.1,1e3);F.position.set(0,0,w3);let J;try{J=new yd({antialias:!0,alpha:!0})}catch{nt.dataset.failed="true";return}J.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));let rt=new Lo(J),at=new Sd,It=rt.fromScene(at,.04);B.environment=It.texture,B.environmentIntensity=.65,at.dispose(),rt.dispose(),J.setClearColor(0,0),J.toneMapping=Df,J.toneMappingExposure=R3,J.outputColorSpace=pn,J.shadowMap.enabled=!1,J.shadowMap.type=Sf,J.domElement.style.display="block",nt.appendChild(J.domElement);let Lt=new Ac(16777215,16777215,1.2);B.add(Lt);let R=new Za(16777215,1.4);R.castShadow=!1,R.shadow.mapSize.width=Ib,R.shadow.mapSize.height=Ib,R.shadow.camera.near=.5,R.shadow.camera.far=150,R.shadow.bias=-5e-4,R.shadow.normalBias=.05,R.shadow.radius=4,B.add(R);let X=new Za(16777215,.4);B.add(X);let j=new Za(16777215,.6);B.add(j);let $={scene:B,camera:F,renderer:J,hemi:Lt,key:R,fill:X,rim:j};A.current=$;let Q=!0,ct=!1,ot=0,mt=nt.closest(".skills-collage"),Wt=Et=>{Et.preventDefault(),nt.dataset.failed="true",mt?.classList.add("hero-fallback")};J.domElement.addEventListener("webglcontextlost",Wt);let Vt=new IntersectionObserver(Et=>{for(let Pt of Et)Q=Pt.isIntersecting},{threshold:0});Vt.observe(nt);let T=()=>{let Et=nt.clientWidth||nt.offsetWidth,Pt=nt.clientHeight||nt.offsetHeight;!Et||!Pt||(F.aspect=Et/Pt,F.updateProjectionMatrix(),J.setSize(Et,Pt))},S=new ResizeObserver(T);S.observe(nt),T();let P=new gt,H=new L(0,0,Bc),st=new fi(new L(0,0,1),0),q=new Rc,wt=Et=>{let Pt=nt.getBoundingClientRect();if(!(!Pt.width||!Pt.height)){if(Et.clientX<Pt.left||Et.clientX>Pt.right||Et.clientY<Pt.top||Et.clientY>Pt.bottom){H.set(0,0,Bc);return}P.x=(Et.clientX-Pt.left)/Pt.width*2-1,P.y=-((Et.clientY-Pt.top)/Pt.height)*2+1,q.setFromCamera(P,F),q.ray.intersectPlane(st,H)||H.set(0,0,Bc)}},ft=()=>H.set(0,0,Bc),Ct=()=>ft();nt.addEventListener("pointermove",wt,{passive:!0}),nt.addEventListener("pointerdown",wt,{passive:!0}),nt.addEventListener("pointerup",ft),nt.addEventListener("pointercancel",ft),nt.addEventListener("pointerleave",Ct),window.addEventListener("blur",ft);let Rt=0,ut=()=>{Rt=-((nt.getBoundingClientRect().top+nt.offsetHeight/2-window.innerHeight/2)*.015*(G.current.parallax/100))};window.addEventListener("scroll",ut,{passive:!0}),ut();let St=new L,Ot=new L,Dt=new L,_t=new L,qt=new L,N=new di,dt=0,yt=()=>{ot+=Md;let Et=G.current,Pt=D.current,jt=Pt.length,Je=Et.dotSize/100,In=Math.max(.01,Et.spreadX/100),Po=Math.max(.01,Et.spreadY/100),Vi=Et.mouseForce/100*10*I3,nr=.3+Et.bounciness/100*.7;St.set(0,Et.gravityAnchor==="Bottom"?-15:Et.gravityAnchor==="Top"?15:0,0);let Gi=Math.round(20+15*Math.max(In,Po));if(Gi!==dt){dt=Gi;let nn=R.shadow.camera;nn.left=-Gi,nn.right=Gi,nn.top=Gi,nn.bottom=-Gi,nn.updateProjectionMatrix()}for(let nn=0;nn<jt;nn++){let _e=Pt[nn];if(_e.radius=Je*_e.jitter,Ot.copy(St).sub(_e.pos),Ot.x/=In,Ot.y/=Po,_e.vel.addScaledVector(Ot,N3),_e.vel.x+=Math.sin(ot*.7+nn*1.8)*.003,_e.vel.y+=Math.cos(ot*.6+nn*1.3)*.004,H.z!==Bc){let gn=_e.pos.distanceTo(H);gn<Ub&&(Dt.copy(_e.pos).sub(H),Dt.lengthSq()<1e-8&&Dt.set(0,1,0),Dt.normalize(),_e.vel.addScaledVector(Dt,(Ub-gn)*Vi))}_e.vel.length()>Lb&&_e.vel.setLength(Lb),_e.vel.multiplyScalar(L3),_e.pos.add(_e.vel),N.setFromAxisAngle(_e.axis,_e.spin),_e.quat.multiply(N)}for(let nn=0;nn<O3;nn++)for(let _e=0;_e<jt;_e++){let gn=Pt[_e];for(let Ms=_e+1;Ms<jt;Ms++){let Qn=Pt[Ms],bs=gn.radius+Qn.radius;if(Math.abs(gn.pos.x-Qn.pos.x)>bs||Math.abs(gn.pos.y-Qn.pos.y)>bs||Math.abs(gn.pos.z-Qn.pos.z)>bs)continue;let Fc=gn.pos.distanceTo(Qn.pos);if(Fc>=bs)continue;_t.copy(gn.pos).sub(Qn.pos),_t.lengthSq()<1e-8&&_t.set(1,0,0),_t.normalize();let Hc=(bs-Fc)*.5;gn.pos.addScaledVector(_t,Hc),Qn.pos.addScaledVector(_t,-Hc),qt.copy(gn.vel).sub(Qn.vel);let Bo=qt.dot(_t);Bo<0&&(gn.vel.addScaledVector(_t,-Bo*nr),Qn.vel.addScaledVector(_t,Bo*nr))}}F.position.y+=(Rt-F.position.y)*.05};E.current=yt;let Tt=0,ht=typeof performance<"u"?performance.now():Date.now(),et=0,Ut=()=>{Tt=requestAnimationFrame(Ut);let Et=typeof performance<"u"?performance.now():Date.now(),Pt=(Et-ht)/1e3;if(ht=Et,!Q||document.hidden||mt?.dataset.paused==="true"&&ct&&nt.dataset.ready==="true")return;Pt>.25&&(Pt=.25),et+=Pt;let jt=0;for(;et>=Md&&jt<B3;)yt(),et-=Md,jt++;et>=Md&&(et=0);for(let Je of D.current)Je.root.position.copy(Je.pos),Je.root.quaternion.copy(Je.quat),Je.root.scale.setScalar(Je.radius);J.render(B,F),ct=!0,K.current.size>0&&D.current.length&&(nt.dataset.ready="true",mt?.classList.add("skills-ready")),nt.dataset.frame=String(Number(nt.dataset.frame||0)+1)};return Tt=requestAnimationFrame(Ut),()=>{cancelAnimationFrame(Tt),Vt.disconnect(),S.disconnect(),nt.removeEventListener("pointermove",wt),nt.removeEventListener("pointerdown",wt),nt.removeEventListener("pointerup",ft),nt.removeEventListener("pointercancel",ft),It.dispose(),nt.removeEventListener("pointerleave",Ct),window.removeEventListener("blur",ft),window.removeEventListener("scroll",ut),E.current=null,z0(B,D.current),D.current=[],B0(M.current),M.current=[],B.clear(),J.dispose(),J.domElement.parentNode===nt&&nt.removeChild(J.domElement),A.current=null}},[]);let Mt=JSON.stringify(C.svgLogos??[]);(0,Be.useEffect)(()=>{let nt=!1,B=JSON.parse(Mt);return(async()=>{let J=[];B.length>0&&(J=(await Promise.all(B.map(It=>tD(It).catch(()=>null)))).filter(It=>It!==null));let rt=J.length===0;if(rt){let at=new Sc(1,Nb,Nb);J=[{root:new Ce(at),geometries:[at]}]}if(nt){B0(J);return}B0(M.current),M.current=J,W.current=rt,z(at=>at+1)})(),()=>{nt=!0}},[Mt,_]);let zt=_==="Images"?h.map(nt=>P0(nt.image)).filter(Boolean):[],Qt=JSON.stringify(zt);(0,Be.useEffect)(()=>{let nt=JSON.parse(Qt),B=K.current,F=new Set(nt);for(let[Lt,R]of Array.from(B.entries()))F.has(Lt)||(R.dispose(),B.delete(Lt));let J=nt.filter(Lt=>!B.has(Lt));if(J.length===0){it(Lt=>Lt+1);return}let rt=!1,at=new Tc;at.setCrossOrigin("anonymous");let It=A.current?.renderer.capabilities.getMaxAnisotropy?.()??1;return Promise.all(J.map(Lt=>new Promise(R=>{at.load(Lt,X=>R([Lt,X]),void 0,()=>R([Lt,null]))}))).then(Lt=>{if(rt){for(let[,R]of Lt)R?.dispose();return}for(let[R,X]of Lt)X&&(X.colorSpace=pn,X.wrapS=Mi,X.wrapT=Mi,X.anisotropy=Math.min(8,It),X.needsUpdate=!0,B.set(R,X));it(R=>R+1)}),()=>{rt=!0}},[Qt,_]);let ne=JSON.stringify((_==="Images"?h:[]).filter(nt=>P0(nt.image)).map(nt=>[P0(nt.image),nt.fit==="Contain"?"Contain":"Cover",Math.round(nt.offsetX??0),Math.round(nt.offsetY??0)]));return(0,Be.useEffect)(()=>{let nt=JSON.parse(ne),B=K.current,F=[];for(let[J,rt,at,It]of nt){let Lt=B.get(J);if(!Lt)continue;let R=Lt.image;F.push({texture:Lt,aspect:(R?.width||1)/(R?.height||1),fit:rt,offsetX:at,offsetY:It})}Z.current=F,vt()},[ne,Y,U,vt,_]),(0,Be.useEffect)(()=>{let nt=K.current;return()=>{for(let B of nt.values())B.dispose();nt.clear(),Z.current=[]}},[]),(0,Be.useEffect)(()=>{let nt=A.current,B=M.current;if(!nt||B.length===0)return;let F=Math.max(1,Math.round(l)),J=[];for(let at=0;at<F;at++){let Lt=B[Math.floor(Math.random()*B.length)].root.clone(!0),R=[],X=[];Lt.traverse(Q=>{let ct=Q;if(!ct.isMesh)return;ct.castShadow=!0,ct.receiveShadow=!0,ct.material=new Mc({side:pi}),R.push(ct);let ot=ct.userData?.srcColor;X.push(typeof ot=="string"?new Xt(ot):null)});let j=1+(Math.random()-.5)*U3,$=(Math.random()-.5)*.01;J.push({root:Lt,meshes:R,srcColors:X,pos:new L((Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*10),vel:new L,quat:new di().setFromEuler(new Nn(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI)),axis:new L(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),spin:$,baseSpin:$,jitter:j,radius:G.current.dotSize/100*j,colorRoll:(at%5+.5)/5}),nt.scene.add(Lt)}z0(nt.scene,D.current),D.current=J,lt(),vt();let rt=E.current;if(rt)for(let at=0;at<P3;at++)rt();return()=>{let at=A.current;at&&z0(at.scene,J),D.current===J&&(D.current=[])}},[l,U,lt,vt]),(0,Be.useEffect)(()=>{let nt=A.current;if(!nt)return;let{hemi:B,key:F,fill:J,rim:rt}=nt,at={h:0,s:0,l:0};new Xt(i).getHSL(at);let It=new Xt().setHSL(at.h,1,Math.max(.5,at.l*.8));switch(B.color.copy(It),B.groundColor.copy(It).multiplyScalar(.7),F.color.setHex(16777215),J.color.setHex(16777215),rt.color.setHex(16777215),u){case"Bright Professional":B.intensity=1.2,F.intensity=1.5,F.position.set(10,30,20),J.intensity=.5,J.position.set(-15,0,15),rt.intensity=.4,rt.position.set(0,-10,-20);break;case"Neutral Flat":B.intensity=1.5,F.intensity=.8,F.position.set(0,0,10),J.intensity=.3,J.position.set(0,0,-10),rt.intensity=0,rt.position.set(0,20,-20);break;case"Cinematic Drama":B.intensity=.8,F.intensity=2,F.position.set(-20,20,10),J.intensity=.3,J.position.set(20,-10,10),rt.intensity=1.2,rt.color.setHex(11184895),rt.position.set(0,10,-30);break;case"Neon Cyberpunk":B.intensity=.8,B.color.setHex(8959),F.intensity=1.8,F.color.setHex(16711765),F.position.set(15,10,10),J.intensity=.6,J.color.setHex(56814),J.position.set(-15,-10,15),rt.intensity=1.5,rt.color.setHex(11141375),rt.position.set(0,20,-20);break;case"Sunset Warmth":B.intensity=1,B.color.setHex(16755285),F.intensity=1.8,F.color.setHex(16768426),F.position.set(20,5,20),J.intensity=.4,J.color.setHex(5579349),J.position.set(-20,10,-10),rt.intensity=.8,rt.color.setHex(16733474),rt.position.set(0,15,-20);break;case"Soft Studio":default:B.intensity=1.2,F.intensity=1.3,F.color.setHex(16775669),F.position.set(15,20,20),J.intensity=.4,J.color.setHex(15792127),J.position.set(-15,-10,15),rt.intensity=.6,rt.position.set(0,20,-20);break}},[u,i]),(0,Be.useEffect)(()=>{lt()},[lt,i,s,a,r,o,c,v.roughness,v.gloss,v.transparency,C.useOriginalSvgColors]),zc.createElement("div",{ref:w,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",backgroundColor:n,...t}})}var X0=document.getElementById("skills-spheres"),kb=X0?.closest(".skills-collage"),Td=document.querySelector(".skills-toggle"),Hb=matchMedia("(prefers-reduced-motion: reduce)");function k0(e){kb.dataset.paused=String(e),Td.setAttribute("aria-pressed",String(e)),Td.setAttribute("aria-label",document.documentElement.lang==="zh-CN"?e?"\u7EE7\u7EED\u6280\u80FD\u7403\u52A8\u753B":"\u6682\u505C\u6280\u80FD\u7403\u52A8\u753B":e?"Resume skill spheres":"Pause skill spheres"),Td.textContent=e?"\u25B7":"\u2161"}if(X0){k0(Hb.matches),Td.addEventListener("click",()=>k0(kb.dataset.paused!=="true")),Hb.addEventListener("change",t=>k0(t.matches));let e=["figma","photoshop","illustrator","indesign","procreate","after-effects","premiere","animate","cinema4d","maya","tvpaint","chatgpt","midjourney","deepseek"];(0,Gb.createRoot)(X0).render(Vb.default.createElement(G0,{background:"transparent",baseColor:"#ffffff",colorMode:"Multi",balloonColors:["#fff3dc","#a3ed12","#a475eb","#fff8ea","#202127"],density:24,dotSize:155,field:{spreadX:135,spreadY:145},material:{roughness:20,gloss:100,transparency:0},motion:{gravityAnchor:"Center",bounciness:65,mouseForce:55,parallax:0},sourceMode:"Images",images:e.map(t=>({image:`assets/images/skills/${t}.png`,fit:"Contain"}))}))}})();
/*! For license information please see skills-hero.js.LEGAL.txt */
