var mf="https://playbrainsmith.com/",gf=/(github\.io|\.web\.app|\.firebaseapp\.com)$/.test(location.hostname),yf=["name","toured","muted"],Qa=n=>"samesies."+n;(function(){let e=location.hash.match(/^#carry=(.+)$/);if(e){try{let t=JSON.parse(decodeURIComponent(e[1]));for(let r of yf)t[r]!=null&&(r==="name"&&localStorage.getItem(Qa("name"))||localStorage.setItem(Qa(r),r==="muted"?String(t[r]):JSON.stringify(t[r])))}catch{}history.replaceState(null,"",location.pathname+location.search)}})();async function wf(){try{let n=await fetch(mf+"live.json",{cache:"no-store"});return n.ok&&(await n.json()).live===!0}catch{return!1}}function _f(n){let e={};try{for(let r of yf){let i=localStorage.getItem(Qa(r));i!==null&&(e[r]=r==="muted"?i:JSON.parse(i))}}catch{}let t=new URL(mf);return n&&t.searchParams.set("g",n),t.hash="carry="+encodeURIComponent(JSON.stringify(e)),t.href}var bf=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},i_=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,g=(s&3)<<4|c>>4,T=(c&15)<<2|h>>6,S=h&63;u||(S=64,a||(T=64)),r.push(t[f],t[g],t[T],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):i_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let h=i<n.length?t[n.charAt(i)]:64;++i;let g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||g==null)throw new Ja;let T=s<<2|c>>4;if(r.push(T),h!==64){let S=c<<4&240|h>>2;if(r.push(S),g!==64){let D=h<<6&192|g;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ja=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},s_=function(n){let e=bf(n);return Tf.encodeByteArray(e,!0)},ei=function(n){return s_(n).replace(/\./g,"")},Za=function(n){try{return Tf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function o_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var a_=()=>o_().__FIREBASE_DEFAULTS__,c_=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},l_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Za(n[1]);return e&&JSON.parse(e)},vs=()=>{try{return a_()||c_()||l_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ec=n=>{var e,t;return(t=(e=vs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},If=n=>{let e=ec(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},tc=()=>{var n;return(n=vs())===null||n===void 0?void 0:n.config},nc=n=>{var e;return(e=vs())===null||e===void 0?void 0:e[`_${n}`]};var _s=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Ef(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ei(JSON.stringify(t)),ei(JSON.stringify(a)),""].join(".")}function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Af(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function u_(){var n;let e=(n=vs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sf(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Rf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pf(){let n=ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Cf(){return!u_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ti(){try{return typeof indexedDB=="object"}catch{return!1}}function bs(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function Df(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}var d_="FirebaseError",$e=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=d_,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,He.prototype.create)}},He=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?h_(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new $e(i,c,r)}};function h_(n,e){return n.replace(f_,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var f_=/\{\$([^}]+)}/g;function Nf(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function St(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(vf(s)&&vf(a)){if(!St(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function vf(n){return n!==null&&typeof n=="object"}function Yn(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Xn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Of(n,e){let t=new Xa(n,e);return t.subscribe.bind(t)}var Xa=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");p_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ya),i.error===void 0&&(i.error=Ya),i.complete===void 0&&(i.complete=Ya);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function p_(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ya(){}var rk=4*60*60*1e3;function te(n){return n&&n._delegate?n._delegate:n}var be=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var _n="[DEFAULT]";var rc=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new _s;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(g_(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:m_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function m_(n){return n===_n?void 0:n}function g_(n){return n.instantiationMode==="EAGER"}var Ts=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new rc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var y_=[],H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));var w_={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},__=H.INFO,v_={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},b_=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=v_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Qt=class{constructor(e){this.name=e,this._logLevel=__,this._logHandler=b_,this._userLogHandler=null,y_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}};var T_=(n,e)=>e.some(t=>n instanceof t),xf,Vf;function I_(){return xf||(xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function E_(){return Vf||(Vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Mf=new WeakMap,sc=new WeakMap,Lf=new WeakMap,ic=new WeakMap,ac=new WeakMap;function A_(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(st(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Mf.set(t,n)}).catch(()=>{}),ac.set(e,n),e}function k_(n){if(sc.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});sc.set(n,e)}var oc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Lf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return st(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ff(n){oc=n(oc)}function S_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(Is(this),e,...t);return Lf.set(r,e.sort?e.sort():[e]),st(r)}:E_().includes(n)?function(...e){return n.apply(Is(this),e),st(Mf.get(this))}:function(...e){return st(n.apply(Is(this),e))}}function R_(n){return typeof n=="function"?S_(n):(n instanceof IDBTransaction&&k_(n),T_(n,I_())?new Proxy(n,oc):n)}function st(n){if(n instanceof IDBRequest)return A_(n);if(ic.has(n))return ic.get(n);let e=R_(n);return e!==n&&(ic.set(n,e),ac.set(e,n)),e}var Is=n=>ac.get(n);function vn(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),c=st(a);return r&&a.addEventListener("upgradeneeded",u=>{r(st(a.result),u.oldVersion,u.newVersion,st(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}function Es(n,{blocked:e}={}){let t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),st(t).then(()=>{})}var P_=["get","getKey","getAll","getAllKeys","count"],C_=["put","add","delete","clear"],cc=new Map;function $f(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=C_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||P_.includes(t)))return;let s=async function(a,...c){let u=this.transaction(a,i?"readwrite":"readonly"),h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return cc.set(e,s),s}Ff(n=>({...n,get:(e,t,r)=>$f(e,t)||n.get(e,t,r),has:(e,t)=>!!$f(e,t)||n.has(e,t)}));var uc=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(D_(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function D_(n){let e=n.getComponent();return e?.type==="VERSION"}var dc="@firebase/app",Uf="0.10.16";var Rt=new Qt("@firebase/app"),N_="@firebase/app-compat",O_="@firebase/analytics-compat",x_="@firebase/analytics",V_="@firebase/app-check-compat",M_="@firebase/app-check",L_="@firebase/auth",F_="@firebase/auth-compat",$_="@firebase/database",U_="@firebase/data-connect",B_="@firebase/database-compat",q_="@firebase/functions",j_="@firebase/functions-compat",G_="@firebase/installations",z_="@firebase/installations-compat",W_="@firebase/messaging",H_="@firebase/messaging-compat",K_="@firebase/performance",Q_="@firebase/performance-compat",Y_="@firebase/remote-config",J_="@firebase/remote-config-compat",X_="@firebase/storage",Z_="@firebase/storage-compat",ev="@firebase/firestore",tv="@firebase/vertexai",nv="@firebase/firestore-compat",rv="firebase",iv="11.0.2";var hc="[DEFAULT]",sv={[dc]:"fire-core",[N_]:"fire-core-compat",[x_]:"fire-analytics",[O_]:"fire-analytics-compat",[M_]:"fire-app-check",[V_]:"fire-app-check-compat",[L_]:"fire-auth",[F_]:"fire-auth-compat",[$_]:"fire-rtdb",[U_]:"fire-data-connect",[B_]:"fire-rtdb-compat",[q_]:"fire-fn",[j_]:"fire-fn-compat",[G_]:"fire-iid",[z_]:"fire-iid-compat",[W_]:"fire-fcm",[H_]:"fire-fcm-compat",[K_]:"fire-perf",[Q_]:"fire-perf-compat",[Y_]:"fire-rc",[J_]:"fire-rc-compat",[X_]:"fire-gcs",[Z_]:"fire-gcs-compat",[ev]:"fire-fst",[nv]:"fire-fst-compat",[tv]:"fire-vertex","fire-js":"fire-js",[rv]:"fire-js-all"};var As=new Map,ov=new Map,fc=new Map;function Bf(n,e){try{n.container.addComponent(e)}catch(t){Rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qe(n){let e=n.name;if(fc.has(e))return Rt.debug(`There were multiple attempts to register component ${e}.`),!1;fc.set(e,n);for(let t of As.values())Bf(t,n);for(let t of ov.values())Bf(t,n);return!0}function ft(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ot(n){return n.settings!==void 0}var av={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new He("app","Firebase",av);var pc=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}};var Jt=iv;function yc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:hc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yt.create("bad-app-name",{appName:String(i)});if(t||(t=tc()),!t)throw Yt.create("no-options");let s=As.get(i);if(s){if(St(t,s.options)&&St(r,s.config))return s;throw Yt.create("duplicate-app",{appName:i})}let a=new Ts(i);for(let u of fc.values())a.addComponent(u);let c=new pc(t,r,a);return As.set(i,c),c}function bn(n=hc){let e=As.get(n);if(!e&&n===hc&&tc())return yc();if(!e)throw Yt.create("no-app",{appName:n});return e}function Ae(n,e,t){var r;let i=(r=sv[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rt.warn(c.join(" "));return}qe(new be(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var cv="firebase-heartbeat-database",lv=1,ni="firebase-heartbeat-store",lc=null;function zf(){return lc||(lc=vn(cv,lv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ni)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),lc}async function uv(n){try{let t=(await zf()).transaction(ni),r=await t.objectStore(ni).get(Wf(n));return await t.done,r}catch(e){if(e instanceof $e)Rt.warn(e.message);else{let t=Yt.create("idb-get",{originalErrorMessage:e?.message});Rt.warn(t.message)}}}async function qf(n,e){try{let r=(await zf()).transaction(ni,"readwrite");await r.objectStore(ni).put(e,Wf(n)),await r.done}catch(t){if(t instanceof $e)Rt.warn(t.message);else{let r=Yt.create("idb-set",{originalErrorMessage:t?.message});Rt.warn(r.message)}}}function Wf(n){return`${n.name}!${n.options.appId}`}var dv=1024,hv=30*24*60*60*1e3,mc=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new gc(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let c=new Date(a.date).valueOf();return Date.now()-c<=hv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=jf(),{heartbeatsToSend:r,unsentEntries:i}=fv(this._heartbeatsCache.heartbeats),s=ei(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Rt.warn(t),""}}};function jf(){return new Date().toISOString().substring(0,10)}function fv(n,e=dv){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Gf(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Gf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var gc=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ti()?bs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await uv(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return qf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return qf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function Gf(n){return ei(JSON.stringify({version:2,heartbeats:n})).length}function pv(n){qe(new be("platform-logger",e=>new uc(e),"PRIVATE")),qe(new be("heartbeat",e=>new mc(e),"PRIVATE")),Ae(dc,Uf,n),Ae(dc,Uf,"esm2017"),Ae("fire-js","")}pv("");var mv="firebase",gv="11.0.2";Ae(mv,gv,"app");function ks(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function dp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var hp=dp,fp=new He("auth","Firebase",dp());var Os=new Qt("@firebase/auth");function yv(n,...e){Os.logLevel<=H.WARN&&Os.warn(`Auth (${Jt}): ${n}`,...e)}function Rs(n,...e){Os.logLevel<=H.ERROR&&Os.error(`Auth (${Jt}): ${n}`,...e)}function et(n,...e){throw $c(n,...e)}function mt(n,...e){return $c(n,...e)}function Fc(n,e,t){let r=Object.assign(Object.assign({},hp()),{[e]:t});return new He("auth","Firebase",r).create(e,{appName:n.name})}function Ct(n){return Fc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pp(n,e,t){let r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&et(n,"argument-error"),Fc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $c(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return fp.create(n,...e)}function F(n,e,...t){if(!n)throw $c(e,...t)}function pt(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Rs(e),new Error(e)}function Dt(n,e){n||pt(e)}function bc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function wv(){return Hf()==="http:"||Hf()==="https:"}function Hf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function _v(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wv()||Sf()||"connection"in navigator)?navigator.onLine:!0}function vv(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Tn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dt(t>e,"Short delay should be less than long delay!"),this.isMobile=Af()||Rf()}get(){return _v()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Uc(n,e){Dt(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var xs=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var bv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var Tv=new Tn(3e4,6e4);function me(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ke(n,e,t,r,i={}){return mp(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let c=Yn(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);let h=Object.assign({method:e,headers:u},s);return kf()||(h.referrerPolicy="no-referrer"),xs.fetch()(gp(n,n.config.apiHost,t,c),h)})}async function mp(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},bv),e);try{let i=new Tc(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw ii(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let c=s.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ii(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ii(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ii(n,"user-disabled",a);let f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Fc(n,f,h);et(n,f)}}catch(i){if(i instanceof $e)throw i;et(n,"network-request-failed",{message:String(i)})}}async function Zt(n,e,t,r,i={}){let s=await ke(n,e,t,r,i);return"mfaPendingCredential"in s&&et(n,"multi-factor-auth-required",{_serverResponse:s}),s}function gp(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?Uc(n.config,i):`${n.config.apiScheme}://${i}`}function Iv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Tc=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),Tv.get())})}};function ii(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=mt(n,e,r);return i.customData._tokenResponse=t,i}function Kf(n){return n!==void 0&&n.enterprise!==void 0}var Vs=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Iv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function yp(n,e){return ke(n,"GET","/v2/recaptchaConfig",me(n,e))}async function Ev(n,e){return ke(n,"POST","/v1/accounts:delete",e)}async function wp(n,e){return ke(n,"POST","/v1/accounts:lookup",e)}function si(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _p(n,e=!1){let t=te(n),r=await t.getIdToken(e),i=Bc(r);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:si(wc(i.auth_time)),issuedAtTime:si(wc(i.iat)),expirationTime:si(wc(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function wc(n){return Number(n)*1e3}function Bc(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Rs("JWT malformed, contained fewer than 3 sections"),null;try{let i=Za(t);return i?JSON.parse(i):(Rs("Failed to decode base64 JWT payload"),null)}catch(i){return Rs("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Qf(n){let e=Bc(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function ci(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof $e&&Av(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Av({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Ic=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var li=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function ui(n){var e;let t=n.auth,r=await n.getIdToken(),i=await ci(n,wp(t,{idToken:r}));F(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bp(s.providerUserInfo):[],c=kv(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!c?.length,f=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new li(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function vp(n){let e=te(n);await ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bp(n){return n.map(e=>{var{providerId:t}=e,r=ks(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function Sv(n,e){let t=await mp(n,{},async()=>{let r=Yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=gp(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",xs.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Rv(n,e){return ke(n,"POST","/v2/accounts:revokeToken",me(n,e))}var oi=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");let t=Qf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await Sv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return pt("not implemented")}};function Xt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var tr=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ks(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ic(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new li(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await ci(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return _p(this,e)}reload(){return vp(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ui(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(Ct(this.auth));let e=await this.getIdToken();return await ci(this,Ev(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,u,h,f;let g=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,S=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,D=(a=t.photoURL)!==null&&a!==void 0?a:void 0,L=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,z=(h=t.createdAt)!==null&&h!==void 0?h:void 0,W=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Q,emailVerified:ae,isAnonymous:Me,providerData:ie,stsTokenManager:I}=t;F(Q&&I,e,"internal-error");let y=oi.fromJSON(this.name,I);F(typeof Q=="string",e,"internal-error"),Xt(g,e.name),Xt(T,e.name),F(typeof ae=="boolean",e,"internal-error"),F(typeof Me=="boolean",e,"internal-error"),Xt(S,e.name),Xt(D,e.name),Xt(L,e.name),Xt(N,e.name),Xt(z,e.name),Xt(W,e.name);let _=new n({uid:Q,auth:e,email:T,emailVerified:ae,displayName:g,isAnonymous:Me,photoURL:D,phoneNumber:S,tenantId:L,stsTokenManager:y,createdAt:z,lastLoginAt:W});return ie&&Array.isArray(ie)&&(_.providerData=ie.map(b=>Object.assign({},b))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,t,r=!1){let i=new oi;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ui(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];F(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?bp(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new oi;c.updateFromIdToken(r);let u=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new li(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}};var Yf=new Map;function Pt(n){Dt(n instanceof Function,"Expected a class definition");let e=Yf.get(n);return e?(Dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yf.set(n,e),e)}var Ms=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Ms.type="NONE";var Ec=Ms;function Ps(n,e,t){return`firebase:${n}:${e}:${t}`}var Ls=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Ps(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ps("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(Pt(Ec),e,r);let i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h),s=i[0]||Pt(Ec),a=Ps(r,e.config.apiKey,e.name),c=null;for(let h of t)try{let f=await h._get(a);if(f){let g=tr._fromJSON(e,f);h!==s&&(c=g),s=h;break}}catch{}let u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new n(s,e,r):(s=u[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new n(s,e,r))}};function Jf(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ap(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sp(e))return"Blackberry";if(Rp(e))return"Webos";if(Ip(e))return"Safari";if((e.includes("chrome/")||Ep(e))&&!e.includes("edge/"))return"Chrome";if(kp(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Tp(n=ve()){return/firefox\//i.test(n)}function Ip(n=ve()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ep(n=ve()){return/crios\//i.test(n)}function Ap(n=ve()){return/iemobile/i.test(n)}function kp(n=ve()){return/android/i.test(n)}function Sp(n=ve()){return/blackberry/i.test(n)}function Rp(n=ve()){return/webos/i.test(n)}function qc(n=ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pv(n=ve()){var e;return qc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cv(){return Pf()&&document.documentMode===10}function Pp(n=ve()){return qc(n)||kp(n)||Rp(n)||Sp(n)||/windows phone/i.test(n)||Ap(n)}function Cp(n,e=[]){let t;switch(n){case"Browser":t=Jf(ve());break;case"Worker":t=`${Jf(ve())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jt}/${r}`}var Ac=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,c)=>{try{let u=e(s);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function Dv(n,e={}){return ke(n,"GET","/v2/passwordPolicy",me(n,e))}var Nv=6,kc=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Nv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;let u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var Sc=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fs(this),this.idTokenSubscription=new Fs(this),this.beforeStateQueue=new Ac(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await wp(this,{idToken:e}),r=await tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ot(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ui(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(Ct(this));let t=e?te(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(Ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(Ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Dv(this),t=new kc(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new He("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Pt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[Pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{let u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&yv(`Error while retrieving App Check token: ${t.error}`),t?.token}};function at(n){return te(n)}var Fs=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Of(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var no={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ov(n){no=n}function Dp(n){return no.loadJS(n)}function xv(){return no.recaptchaEnterpriseScript}function Vv(){return no.gapiScript}function Np(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Rc=class{constructor(){this.enterprise=new Pc}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},Pc=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var Mv="recaptcha-enterprise",ai="NO_RECAPTCHA",$s=class{constructor(e){this.type=Mv,this.auth=at(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{yp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let h=new Vs(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,a,c){let u=window.grecaptcha;Kf(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(ai)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Rc().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&Kf(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=xv();u.length!==0&&(u+=c),Dp(u).then(()=>{i(c,s,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}};async function ri(n,e,t,r=!1,i=!1){let s=new $s(n),a;if(i)a=ai;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}let c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){let u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){let u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Zn(n,e,t,r,i){var s,a;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let c=await ri(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let u=await ri(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(c)});else if(i==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let c=await ri(n,e,t);return r(n,c).catch(async u=>{var h;if(((h=n._getRecaptchaConfig())===null||h===void 0?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let f=await ri(n,e,t,!1,!0);return r(n,f)}return Promise.reject(u)})}else{let c=await ri(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")}async function Lv(n){let e=at(n),t=await yp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Vs(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new $s(e).verify()}function Op(n,e){let t=ft(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(St(s,e??{}))return i;et(i,"already-initialized")}return t.initialize({options:e})}function Fv(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Pt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function ro(n,e,t){let r=at(n);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=xp(e),{host:a,port:c}=$v(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Uv()}function xp(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function $v(n){let e=xp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:Xf(r.substr(s.length+1))}}else{let[s,a]=r.split(":");return{host:s,port:Xf(a)}}}function Xf(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function Uv(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var In=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,t){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}};async function Bv(n,e){return ke(n,"POST","/v1/accounts:signUp",e)}async function qv(n,e){return Zt(n,"POST","/v1/accounts:signInWithPassword",me(n,e))}async function jv(n,e){return ke(n,"POST","/v1/accounts:sendOobCode",me(n,e))}async function Gv(n,e){return jv(n,e)}async function zv(n,e){return Zt(n,"POST","/v1/accounts:signInWithEmailLink",me(n,e))}async function Wv(n,e){return Zt(n,"POST","/v1/accounts:signInWithEmailLink",me(n,e))}var di=class n extends In{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zn(e,t,"signInWithPassword",qv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return zv(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zn(e,r,"signUpPassword",Bv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Wv(e,{idToken:t,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function er(n,e){return Zt(n,"POST","/v1/accounts:signInWithIdp",me(n,e))}var Hv="http://localhost",En=class n extends In{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ks(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return er(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,er(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,er(e,t)}buildRequest(){let e={requestUri:Hv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yn(t)}return e}};async function Zf(n,e){return ke(n,"POST","/v1/accounts:sendVerificationCode",me(n,e))}async function Kv(n,e){return Zt(n,"POST","/v1/accounts:signInWithPhoneNumber",me(n,e))}async function Qv(n,e){let t=await Zt(n,"POST","/v1/accounts:signInWithPhoneNumber",me(n,e));if(t.temporaryProof)throw ii(n,"account-exists-with-different-credential",t);return t}var Yv={USER_NOT_FOUND:"user-not-found"};async function Jv(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Zt(n,"POST","/v1/accounts:signInWithPhoneNumber",me(n,t),Yv)}var hi=class n extends In{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Kv(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Qv(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Jv(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function Xv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zv(n){let e=Jn(Xn(n)).link,t=e?Jn(Xn(e)).deep_link_id:null,r=Jn(Xn(n)).deep_link_id;return(r?Jn(Xn(r)).link:null)||r||t||e||n}var Us=class n{constructor(e){var t,r,i,s,a,c;let u=Jn(Xn(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,g=Xv((i=u.mode)!==null&&i!==void 0?i:null);F(h&&f&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=Zv(e);try{return new n(t)}catch{return null}}};var Nt=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return di._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=Us.parseLink(t);return F(r,"argument-error"),di._fromEmailAndCode(e,r.code,r.tenantId)}};Nt.PROVIDER_ID="password";Nt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var nr=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var An=class extends nr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var fi=class n extends An{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";var Ot=class n extends An{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return En._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";var pi=class n extends An{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};pi.GITHUB_SIGN_IN_METHOD="github.com";pi.PROVIDER_ID="github.com";var mi=class n extends An{constructor(){super("twitter.com")}static credential(e,t){return En._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";async function eb(n,e){return Zt(n,"POST","/v1/accounts:signUp",me(n,e))}var kn=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await tr._fromIdTokenResponse(e,r,i),a=ep(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=ep(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function ep(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function jc(n){var e;if(ot(n.app))return Promise.reject(Ct(n));let t=at(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new kn({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await eb(t,{returnSecureToken:!0}),i=await kn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}var Cc=class n extends $e{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function Vp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(n,s,e,r):s})}function tb(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}async function Mp(n,e,t=!1){let r=await ci(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return kn._forOperation(n,"link",r)}async function Lp(n,e,t){await ui(e);let r=tb(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";F(r.has(t)===n,e.auth,i)}async function nb(n,e,t=!1){let{auth:r}=n;if(ot(r.app))return Promise.reject(Ct(r));let i="reauthenticate";try{let s=await ci(n,Vp(r,i,e,n),t);F(s.idToken,r,"internal-error");let a=Bc(s.idToken);F(a,r,"internal-error");let{sub:c}=a;return F(n.uid===c,r,"user-mismatch"),kn._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&et(r,"user-mismatch"),s}}async function Fp(n,e,t=!1){if(ot(n.app))return Promise.reject(Ct(n));let r="signIn",i=await Vp(n,r,e),s=await kn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function wi(n,e){return Fp(at(n),e)}async function Gc(n,e){let t=te(n);return await Lp(!1,t,e.providerId),Mp(t,e)}function rb(n,e,t){var r;F(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),F(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(F(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(F(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}async function ib(n){let e=at(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zc(n,e,t){let r=at(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&rb(r,i,t),await Zn(r,i,"getOobCode",Gv,"EMAIL_PASSWORD_PROVIDER")}function Wc(n,e,t){return ot(n.app)?Promise.reject(Ct(n)):wi(te(n),Nt.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ib(n),r})}function $p(n,e,t,r){return te(n).onIdTokenChanged(e,t,r)}function Up(n,e,t){return te(n).beforeAuthStateChanged(e,t)}function Hc(n,e,t,r){return te(n).onAuthStateChanged(e,t,r)}function Kc(n){return te(n).signOut()}function tp(n,e){return ke(n,"POST","/v2/accounts/mfaEnrollment:start",me(n,e))}function sb(n,e){return ke(n,"POST","/v2/accounts/mfaEnrollment:finalize",me(n,e))}function ob(n,e){return ke(n,"POST","/v2/accounts/mfaEnrollment:start",me(n,e))}function ab(n,e){return ke(n,"POST","/v2/accounts/mfaEnrollment:finalize",me(n,e))}var Bs="__sak";var qs=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var cb=1e3,lb=10,js=class extends qs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Cv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lb):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},cb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};js.type="LOCAL";var Bp=js;var Gs=class extends qs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Gs.type="SESSION";var Qc=Gs;function ub(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var zs=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(a).map(async h=>h(t.origin,s)),u=await ub(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};zs.receivers=[];function io(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Dc=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{let h=io("",20);i.port1.start();let f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){let T=g;if(T.data.eventId===h)switch(T.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(T.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function gt(){return window}function db(n){gt().location.href=n}function qp(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function hb(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fb(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function pb(){return qp()?self:null}var jp="firebaseLocalStorageDb",mb=1,Ws="firebaseLocalStorage",Gp="fbase_key",Sn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function so(n,e){return n.transaction([Ws],e?"readwrite":"readonly").objectStore(Ws)}function gb(){let n=indexedDB.deleteDatabase(jp);return new Sn(n).toPromise()}function Nc(){let n=indexedDB.open(jp,mb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Ws,{keyPath:Gp})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Ws)?e(r):(r.close(),await gb(),e(await Nc()))})})}async function np(n,e,t){let r=so(n,!0).put({[Gp]:e,value:t});return new Sn(r).toPromise()}async function yb(n,e){let t=so(n,!1).get(e),r=await new Sn(t).toPromise();return r===void 0?null:r.value}function rp(n,e){let t=so(n,!0).delete(e);return new Sn(t).toPromise()}var wb=800,_b=3,Hs=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nc(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>_b)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zs._getInstance(pb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hb(),!this.activeServiceWorker)return;this.sender=new Dc(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Nc();return await np(e,Bs,"1"),await rp(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>np(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>yb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=so(i,!1).getAll();return new Sn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Hs.type="LOCAL";var zp=Hs;function ip(n,e){return ke(n,"POST","/v2/accounts/mfaSignIn:start",me(n,e))}function vb(n,e){return ke(n,"POST","/v2/accounts/mfaSignIn:finalize",me(n,e))}function bb(n,e){return ke(n,"POST","/v2/accounts/mfaSignIn:finalize",me(n,e))}var Dk=Np("rcb"),Nk=new Tn(3e4,6e4);var Cs="recaptcha";async function Tb(n,e,t){var r;if(!n._getRecaptchaConfig())try{await Lv(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){F(s.type==="enroll",n,"internal-error");let a={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Zn(n,a,"mfaSmsEnrollment",async(f,g)=>{if(g.phoneEnrollmentInfo.captchaResponse===ai){F(t?.type===Cs,f,"argument-error");let T=await _c(f,g,t);return tp(f,T)}return tp(f,g)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{F(s.type==="signin",n,"internal-error");let a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;F(a,n,"missing-multi-factor-info");let c={mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Zn(n,c,"mfaSmsSignIn",async(g,T)=>{if(T.phoneSignInInfo.captchaResponse===ai){F(t?.type===Cs,g,"argument-error");let S=await _c(g,T,t);return ip(g,S)}return ip(g,T)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Zn(n,s,"sendVerificationCode",async(h,f)=>{if(f.captchaResponse===ai){F(t?.type===Cs,h,"argument-error");let g=await _c(h,f,t);return Zf(h,g)}return Zf(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{t?._reset()}}async function _c(n,e,t){F(t.type===Cs,n,"argument-error");let r=await t.verify();F(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,a=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:a,clientType:c,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,a=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:a,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var gi=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=at(e)}verifyPhoneNumber(e,t){return Tb(this.auth,e,te(t))}static credential(e,t){return hi._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?hi._fromTokenResponse(t,r):null}};gi.PROVIDER_ID="phone";gi.PHONE_SIGN_IN_METHOD="phone";function Yc(n,e){return e?Pt(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var yi=class extends In{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,t){return er(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Ib(n){return Fp(n.auth,new yi(n),n.bypassAuthState)}function Eb(n){let{auth:e,user:t}=n;return F(t,e,"internal-error"),nb(t,new yi(n),n.bypassAuthState)}async function Ab(n){let{auth:e,user:t}=n;return F(t,e,"internal-error"),Mp(t,new yi(n),n.bypassAuthState)}var Ks=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}let u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ib;case"linkViaPopup":case"linkViaRedirect":return Ab;case"reauthViaPopup":case"reauthViaRedirect":return Eb;default:et(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var kb=new Tn(2e3,1e4);async function Jc(n,e,t){let r=te(n);pp(r.auth,e,nr);let i=Yc(r.auth,t);return new Qs(r.auth,"linkViaPopup",e,i,r).executeNotNull()}var Qs=class n extends Ks{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");let e=io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kb.get())};e()}};Qs.currentPopupAction=null;var Sb="pendingRedirect",Ds=new Map,Oc=class extends Ks{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ds.get(this.auth._key());if(!e){try{let r=await Rb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ds.set(this.auth._key(),e)}return this.bypassAuthState||Ds.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Rb(n,e){let t=Hp(e),r=Wp(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}async function Pb(n,e){return Wp(n)._set(Hp(e),"true")}function Cb(n,e){Ds.set(n._key(),e)}function Wp(n){return Pt(n._redirectPersistence)}function Hp(n){return Ps(Sb,n.config.apiKey,n.name)}function oo(n,e,t){return Db(n,e,t)}async function Db(n,e,t){let r=te(n);pp(r.auth,e,nr),await r.auth._initializationPromise;let i=Yc(r.auth,t);await Lp(!1,r,e.providerId),await Pb(i,r.auth);let s=await Nb(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Xc(n,e){return await at(n)._initializationPromise,Kp(n,e,!1)}async function Kp(n,e,t=!1){if(ot(n.app))return Promise.reject(Ct(n));let r=at(n),i=Yc(r,e),a=await new Oc(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}async function Nb(n){let e=io(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}var Ob=10*60*1e3,xc=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Qp(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(mt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ob&&this.cachedEventUids.clear(),this.cachedEventUids.has(sp(e))}saveEventToCache(e){this.cachedEventUids.add(sp(e)),this.lastProcessedEventTime=Date.now()}};function sp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Qp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function xb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qp(n);default:return!1}}async function Vb(n,e={}){return ke(n,"GET","/v1/projects",e)}var Mb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lb=/^https?/;async function Fb(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Vb(n);for(let t of e)try{if($b(t))return}catch{}et(n,"unauthorized-domain")}function $b(n){let e=bc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Lb.test(t))return!1;if(Mb.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var Ub=new Tn(3e4,6e4);function op(){let n=gt().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Bb(n){return new Promise((e,t)=>{var r,i,s;function a(){op(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{op(),t(mt(n,"network-request-failed"))},timeout:Ub.get()})}if(!((i=(r=gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gt().gapi)===null||s===void 0)&&s.load)a();else{let c=Np("iframefcb");return gt()[c]=()=>{gapi.load?a():t(mt(n,"network-request-failed"))},Dp(`${Vv()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Ns=null,e})}var Ns=null;function qb(n){return Ns=Ns||Bb(n),Ns}var jb=new Tn(5e3,15e3),Gb="__/auth/iframe",zb="emulator/auth/iframe",Wb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kb(n){let e=n.config;F(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?Uc(e,zb):`https://${n.config.authDomain}/${Gb}`,r={apiKey:e.apiKey,appName:n.name,v:Jt},i=Hb.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Yn(r).slice(1)}`}async function Qb(n){let e=await qb(n),t=gt().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:Kb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let a=mt(n,"network-request-failed"),c=gt().setTimeout(()=>{s(a)},jb.get());function u(){gt().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(a)})}))}var Yb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jb=500,Xb=600,Zb="_blank",eT="http://localhost",Ys=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function tT(n,e,t,r=Jb,i=Xb){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),c="",u=Object.assign(Object.assign({},Yb),{width:r.toString(),height:i.toString(),top:s,left:a}),h=ve().toLowerCase();t&&(c=Ep(h)?Zb:t),Tp(h)&&(e=e||eT,u.scrollbars="yes");let f=Object.entries(u).reduce((T,[S,D])=>`${T}${S}=${D},`,"");if(Pv(h)&&c!=="_self")return nT(e||"",c),new Ys(null);let g=window.open(e||"",c,f);F(g,n,"popup-blocked");try{g.focus()}catch{}return new Ys(g)}function nT(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var rT="__/auth/handler",iT="emulator/auth/handler",sT=encodeURIComponent("fac");async function ap(n,e,t,r,i,s){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Jt,eventId:i};if(e instanceof nr){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Nf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[f,g]of Object.entries(s||{}))a[f]=g}if(e instanceof An){let f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);let c=a;for(let f of Object.keys(c))c[f]===void 0&&delete c[f];let u=await n._getAppCheckToken(),h=u?`#${sT}=${encodeURIComponent(u)}`:"";return`${oT(n)}?${Yn(c).slice(1)}${h}`}function oT({config:n}){return n.emulator?Uc(n,iT):`https://${n.authDomain}/${rT}`}var vc="webStorageSupport",Vc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qc,this._completeRedirectFn=Kp,this._overrideRedirectResult=Cb}async _openPopup(e,t,r,i){var s;Dt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await ap(e,t,r,bc(),i);return tT(e,a,io())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await ap(e,t,r,bc(),i);return db(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Dt(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await Qb(e),r=new xc(e);return t.register("authEvent",i=>(F(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vc,{type:vc},i=>{var s;let a=(s=i?.[0])===null||s===void 0?void 0:s[vc];a!==void 0&&t(!!a),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Fb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pp()||Ip()||qc()}},Yp=Vc,Js=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return pt("unexpected MultiFactorSessionType")}}},Mc=class n extends Js{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return sb(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return vb(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Xs=class{constructor(){}static assertion(e){return Mc._fromCredential(e)}};Xs.FACTOR_ID="phone";var Zs=class{static assertionForEnrollment(e,t){return eo._fromSecret(e,t)}static assertionForSignIn(e,t){return eo._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;F(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await ob(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return to._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};Zs.FACTOR_ID="totp";var eo=class n extends Js{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return F(typeof this.secret<"u",e,"argument-error"),ab(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){F(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return bb(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},to=class n{constructor(e,t,r,i,s,a,c){this.sessionInfo=a,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(Ss(e)||Ss(t))&&(i=!0),i&&(Ss(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Ss(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Ss(n){return typeof n>"u"||n?.length===0}var cp="@firebase/auth",lp="1.8.1";var Lc=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function aT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cT(n){qe(new be("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cp(n)},h=new Sc(r,i,s,u);return Fv(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),qe(new be("auth-internal",e=>{let t=at(e.getProvider("auth").getImmediate());return(r=>new Lc(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(cp,lp,aT(n)),Ae(cp,lp,"esm2017")}var lT=5*60,uT=nc("authIdTokenMaxAge")||lT,up=null,dT=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>uT)return;let i=t?.token;up!==i&&(up=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zc(n=bn()){let e=ft(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Op(n,{popupRedirectResolver:Yp,persistence:[zp,Bp,Qc]}),r=nc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let a=dT(s.toString());Up(t,a,()=>a(t.currentUser)),$p(t,c=>a(c))}}let i=ec("auth");return i&&ro(t,`http://${i}`),t}function hT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ov({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=mt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",hT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cT("Browser");var Jp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xp={};var en,el;(function(){var n;function e(I,y){function _(){}_.prototype=y.prototype,I.D=y.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(b,E,k){for(var w=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)w[Et-2]=arguments[Et];return y.prototype[E].apply(b,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,_){_||(_=0);var b=Array(16);if(typeof y=="string")for(var E=0;16>E;++E)b[E]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(E=0;16>E;++E)b[E]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=I.g[0],_=I.g[1],E=I.g[2];var k=I.g[3],w=y+(k^_&(E^k))+b[0]+3614090360&4294967295;y=_+(w<<7&4294967295|w>>>25),w=k+(E^y&(_^E))+b[1]+3905402710&4294967295,k=y+(w<<12&4294967295|w>>>20),w=E+(_^k&(y^_))+b[2]+606105819&4294967295,E=k+(w<<17&4294967295|w>>>15),w=_+(y^E&(k^y))+b[3]+3250441966&4294967295,_=E+(w<<22&4294967295|w>>>10),w=y+(k^_&(E^k))+b[4]+4118548399&4294967295,y=_+(w<<7&4294967295|w>>>25),w=k+(E^y&(_^E))+b[5]+1200080426&4294967295,k=y+(w<<12&4294967295|w>>>20),w=E+(_^k&(y^_))+b[6]+2821735955&4294967295,E=k+(w<<17&4294967295|w>>>15),w=_+(y^E&(k^y))+b[7]+4249261313&4294967295,_=E+(w<<22&4294967295|w>>>10),w=y+(k^_&(E^k))+b[8]+1770035416&4294967295,y=_+(w<<7&4294967295|w>>>25),w=k+(E^y&(_^E))+b[9]+2336552879&4294967295,k=y+(w<<12&4294967295|w>>>20),w=E+(_^k&(y^_))+b[10]+4294925233&4294967295,E=k+(w<<17&4294967295|w>>>15),w=_+(y^E&(k^y))+b[11]+2304563134&4294967295,_=E+(w<<22&4294967295|w>>>10),w=y+(k^_&(E^k))+b[12]+1804603682&4294967295,y=_+(w<<7&4294967295|w>>>25),w=k+(E^y&(_^E))+b[13]+4254626195&4294967295,k=y+(w<<12&4294967295|w>>>20),w=E+(_^k&(y^_))+b[14]+2792965006&4294967295,E=k+(w<<17&4294967295|w>>>15),w=_+(y^E&(k^y))+b[15]+1236535329&4294967295,_=E+(w<<22&4294967295|w>>>10),w=y+(E^k&(_^E))+b[1]+4129170786&4294967295,y=_+(w<<5&4294967295|w>>>27),w=k+(_^E&(y^_))+b[6]+3225465664&4294967295,k=y+(w<<9&4294967295|w>>>23),w=E+(y^_&(k^y))+b[11]+643717713&4294967295,E=k+(w<<14&4294967295|w>>>18),w=_+(k^y&(E^k))+b[0]+3921069994&4294967295,_=E+(w<<20&4294967295|w>>>12),w=y+(E^k&(_^E))+b[5]+3593408605&4294967295,y=_+(w<<5&4294967295|w>>>27),w=k+(_^E&(y^_))+b[10]+38016083&4294967295,k=y+(w<<9&4294967295|w>>>23),w=E+(y^_&(k^y))+b[15]+3634488961&4294967295,E=k+(w<<14&4294967295|w>>>18),w=_+(k^y&(E^k))+b[4]+3889429448&4294967295,_=E+(w<<20&4294967295|w>>>12),w=y+(E^k&(_^E))+b[9]+568446438&4294967295,y=_+(w<<5&4294967295|w>>>27),w=k+(_^E&(y^_))+b[14]+3275163606&4294967295,k=y+(w<<9&4294967295|w>>>23),w=E+(y^_&(k^y))+b[3]+4107603335&4294967295,E=k+(w<<14&4294967295|w>>>18),w=_+(k^y&(E^k))+b[8]+1163531501&4294967295,_=E+(w<<20&4294967295|w>>>12),w=y+(E^k&(_^E))+b[13]+2850285829&4294967295,y=_+(w<<5&4294967295|w>>>27),w=k+(_^E&(y^_))+b[2]+4243563512&4294967295,k=y+(w<<9&4294967295|w>>>23),w=E+(y^_&(k^y))+b[7]+1735328473&4294967295,E=k+(w<<14&4294967295|w>>>18),w=_+(k^y&(E^k))+b[12]+2368359562&4294967295,_=E+(w<<20&4294967295|w>>>12),w=y+(_^E^k)+b[5]+4294588738&4294967295,y=_+(w<<4&4294967295|w>>>28),w=k+(y^_^E)+b[8]+2272392833&4294967295,k=y+(w<<11&4294967295|w>>>21),w=E+(k^y^_)+b[11]+1839030562&4294967295,E=k+(w<<16&4294967295|w>>>16),w=_+(E^k^y)+b[14]+4259657740&4294967295,_=E+(w<<23&4294967295|w>>>9),w=y+(_^E^k)+b[1]+2763975236&4294967295,y=_+(w<<4&4294967295|w>>>28),w=k+(y^_^E)+b[4]+1272893353&4294967295,k=y+(w<<11&4294967295|w>>>21),w=E+(k^y^_)+b[7]+4139469664&4294967295,E=k+(w<<16&4294967295|w>>>16),w=_+(E^k^y)+b[10]+3200236656&4294967295,_=E+(w<<23&4294967295|w>>>9),w=y+(_^E^k)+b[13]+681279174&4294967295,y=_+(w<<4&4294967295|w>>>28),w=k+(y^_^E)+b[0]+3936430074&4294967295,k=y+(w<<11&4294967295|w>>>21),w=E+(k^y^_)+b[3]+3572445317&4294967295,E=k+(w<<16&4294967295|w>>>16),w=_+(E^k^y)+b[6]+76029189&4294967295,_=E+(w<<23&4294967295|w>>>9),w=y+(_^E^k)+b[9]+3654602809&4294967295,y=_+(w<<4&4294967295|w>>>28),w=k+(y^_^E)+b[12]+3873151461&4294967295,k=y+(w<<11&4294967295|w>>>21),w=E+(k^y^_)+b[15]+530742520&4294967295,E=k+(w<<16&4294967295|w>>>16),w=_+(E^k^y)+b[2]+3299628645&4294967295,_=E+(w<<23&4294967295|w>>>9),w=y+(E^(_|~k))+b[0]+4096336452&4294967295,y=_+(w<<6&4294967295|w>>>26),w=k+(_^(y|~E))+b[7]+1126891415&4294967295,k=y+(w<<10&4294967295|w>>>22),w=E+(y^(k|~_))+b[14]+2878612391&4294967295,E=k+(w<<15&4294967295|w>>>17),w=_+(k^(E|~y))+b[5]+4237533241&4294967295,_=E+(w<<21&4294967295|w>>>11),w=y+(E^(_|~k))+b[12]+1700485571&4294967295,y=_+(w<<6&4294967295|w>>>26),w=k+(_^(y|~E))+b[3]+2399980690&4294967295,k=y+(w<<10&4294967295|w>>>22),w=E+(y^(k|~_))+b[10]+4293915773&4294967295,E=k+(w<<15&4294967295|w>>>17),w=_+(k^(E|~y))+b[1]+2240044497&4294967295,_=E+(w<<21&4294967295|w>>>11),w=y+(E^(_|~k))+b[8]+1873313359&4294967295,y=_+(w<<6&4294967295|w>>>26),w=k+(_^(y|~E))+b[15]+4264355552&4294967295,k=y+(w<<10&4294967295|w>>>22),w=E+(y^(k|~_))+b[6]+2734768916&4294967295,E=k+(w<<15&4294967295|w>>>17),w=_+(k^(E|~y))+b[13]+1309151649&4294967295,_=E+(w<<21&4294967295|w>>>11),w=y+(E^(_|~k))+b[4]+4149444226&4294967295,y=_+(w<<6&4294967295|w>>>26),w=k+(_^(y|~E))+b[11]+3174756917&4294967295,k=y+(w<<10&4294967295|w>>>22),w=E+(y^(k|~_))+b[2]+718787259&4294967295,E=k+(w<<15&4294967295|w>>>17),w=_+(k^(E|~y))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+k&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var _=y-this.blockSize,b=this.B,E=this.h,k=0;k<y;){if(E==0)for(;k<=_;)i(this,I,k),k+=this.blockSize;if(typeof I=="string"){for(;k<y;)if(b[E++]=I.charCodeAt(k++),E==this.blockSize){i(this,b),E=0;break}}else for(;k<y;)if(b[E++]=I[k++],E==this.blockSize){i(this,b),E=0;break}}this.h=E,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var _=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=_&255,_/=256;for(this.u(I),I=Array(16),y=_=0;4>y;++y)for(var b=0;32>b;b+=8)I[_++]=this.g[y]>>>b&255;return I};function s(I,y){var _=c;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=y(I)}function a(I,y){this.h=y;for(var _=[],b=!0,E=I.length-1;0<=E;E--){var k=I[E]|0;b&&k==y||(_[E]=k,b=!1)}this.g=_}var c={};function u(I){return-128<=I&&128>I?s(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return N(h(-I));for(var y=[],_=1,b=0;I>=_;b++)y[b]=I/_|0,_*=4294967296;return new a(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return N(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),b=g,E=0;E<I.length;E+=8){var k=Math.min(8,I.length-E),w=parseInt(I.substring(E,E+k),y);8>k?(k=h(Math.pow(y,k)),b=b.j(k).add(h(w))):(b=b.j(_),b=b.add(h(w)))}return b}var g=u(0),T=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(L(this))return-N(this).m();for(var I=0,y=1,_=0;_<this.g.length;_++){var b=this.i(_);I+=(0<=b?b:4294967296+b)*y,y*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(L(this))return"-"+N(this).toString(I);for(var y=h(Math.pow(I,6)),_=this,b="";;){var E=ae(_,y).g;_=z(_,E.j(y));var k=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=E,D(_))return k+b;for(;6>k.length;)k="0"+k;b=k+b}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function L(I){return I.h==-1}n.l=function(I){return I=z(this,I),L(I)?-1:D(I)?0:1};function N(I){for(var y=I.g.length,_=[],b=0;b<y;b++)_[b]=~I.g[b];return new a(_,~I.h).add(T)}n.abs=function(){return L(this)?N(this):this},n.add=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],b=0,E=0;E<=y;E++){var k=b+(this.i(E)&65535)+(I.i(E)&65535),w=(k>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);b=w>>>16,k&=65535,w&=65535,_[E]=w<<16|k}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(I,y){return I.add(N(y))}n.j=function(I){if(D(this)||D(I))return g;if(L(this))return L(I)?N(this).j(N(I)):N(N(this).j(I));if(L(I))return N(this.j(N(I)));if(0>this.l(S)&&0>I.l(S))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,_=[],b=0;b<2*y;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var E=0;E<I.g.length;E++){var k=this.i(b)>>>16,w=this.i(b)&65535,Et=I.i(E)>>>16,Vr=I.i(E)&65535;_[2*b+2*E]+=w*Vr,W(_,2*b+2*E),_[2*b+2*E+1]+=k*Vr,W(_,2*b+2*E+1),_[2*b+2*E+1]+=w*Et,W(_,2*b+2*E+1),_[2*b+2*E+2]+=k*Et,W(_,2*b+2*E+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new a(_,0)};function W(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function Q(I,y){this.g=I,this.h=y}function ae(I,y){if(D(y))throw Error("division by zero");if(D(I))return new Q(g,g);if(L(I))return y=ae(N(I),y),new Q(N(y.g),N(y.h));if(L(y))return y=ae(I,N(y)),new Q(N(y.g),y.h);if(30<I.g.length){if(L(I)||L(y))throw Error("slowDivide_ only works with positive integers.");for(var _=T,b=y;0>=b.l(I);)_=Me(_),b=Me(b);var E=ie(_,1),k=ie(b,1);for(b=ie(b,2),_=ie(_,2);!D(b);){var w=k.add(b);0>=w.l(I)&&(E=E.add(_),k=w),b=ie(b,1),_=ie(_,1)}return y=z(I,E.j(y)),new Q(E,y)}for(E=g;0<=I.l(y);){for(_=Math.max(1,Math.floor(I.m()/y.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),k=h(_),w=k.j(y);L(w)||0<w.l(I);)_-=b,k=h(_),w=k.j(y);D(k)&&(k=T),E=E.add(k),I=z(I,w)}return new Q(E,I)}n.A=function(I){return ae(this,I).h},n.and=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)&I.i(b);return new a(_,this.h&I.h)},n.or=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)|I.i(b);return new a(_,this.h|I.h)},n.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)^I.i(b);return new a(_,this.h^I.h)};function Me(I){for(var y=I.g.length+1,_=[],b=0;b<y;b++)_[b]=I.i(b)<<1|I.i(b-1)>>>31;return new a(_,I.h)}function ie(I,y){var _=y>>5;y%=32;for(var b=I.g.length-_,E=[],k=0;k<b;k++)E[k]=0<y?I.i(k+_)>>>y|I.i(k+_+1)<<32-y:I.i(k+_);return new a(E,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,el=Xp.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,en=Xp.Integer=a}).apply(typeof Jp<"u"?Jp:typeof self<"u"?self:typeof window<"u"?window:{});var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xt={};var tl,fT,rr,nl,_i,co,rl,il,sl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ao=="object"&&ao];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,l){if(l)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in d))break e;d=d[A]}o=o[o.length-1],p=d[o],l=l(p),l!=p&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var d=0,p=!1,A={next:function(){if(!p&&d<o.length){var R=d++;return{value:l(R,o[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,d){return d})}});var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function g(o,l,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function T(o,l,d){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,T.apply(null,arguments)}function S(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function D(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,A,R){for(var O=Array(arguments.length-2),se=2;se<arguments.length;se++)O[se-2]=arguments[se];return l.prototype[A].apply(p,O)}}function L(o){let l=o.length;if(0<l){let d=Array(l);for(let p=0;p<l;p++)d[p]=o[p];return d}return[]}function N(o,l){for(let d=1;d<arguments.length;d++){let p=arguments[d];if(u(p)){let A=o.length||0,R=p.length||0;o.length=A+R;for(let O=0;O<R;O++)o[A+O]=p[O]}else o.push(p)}}class z{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function W(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function ae(o){return ae[" "](o),o}ae[" "]=function(){};var Me=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ie(o,l,d){for(let p in o)l.call(d,o[p],p,o)}function I(o,l){for(let d in o)l.call(void 0,o[d],d,o)}function y(o){let l={};for(let d in o)l[d]=o[d];return l}let _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,l){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)o[d]=p[d];for(let R=0;R<_.length;R++)d=_[R],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function E(o){var l=1;o=o.split(":");let d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function k(o){c.setTimeout(()=>{throw o},0)}function w(){var o=Ea;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Et{constructor(){this.h=this.g=null}add(l,d){let p=Vr.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Vr=new z(()=>new Ew,o=>o.reset());class Ew{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Mr,Lr=!1,Ea=new Et,fh=()=>{let o=c.Promise.resolve(void 0);Mr=()=>{o.then(Aw)}};var Aw=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){k(d)}var l=Vr;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Lr=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var kw=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function Fr(o,l){if(Pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Me){e:{try{ae(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Sw[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Fr.aa.h.call(this)}}D(Fr,Pe);var Sw={2:"touch",3:"pen",4:"mouse"};Fr.prototype.h=function(){Fr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var $r="closure_listenable_"+(1e6*Math.random()|0),Rw=0;function Pw(o,l,d,p,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=A,this.key=++Rw,this.da=this.fa=!1}function ns(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function rs(o){this.src=o,this.g={},this.h=0}rs.prototype.add=function(o,l,d,p,A){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var O=ka(o,l,p,A);return-1<O?(l=o[O],d||(l.fa=!1)):(l=new Pw(l,this.src,R,!!p,A),l.fa=d,o.push(l)),l};function Aa(o,l){var d=l.type;if(d in o.g){var p=o.g[d],A=Array.prototype.indexOf.call(p,l,void 0),R;(R=0<=A)&&Array.prototype.splice.call(p,A,1),R&&(ns(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function ka(o,l,d,p){for(var A=0;A<o.length;++A){var R=o[A];if(!R.da&&R.listener==l&&R.capture==!!d&&R.ha==p)return A}return-1}var Sa="closure_lm_"+(1e6*Math.random()|0),Ra={};function ph(o,l,d,p,A){if(p&&p.once)return gh(o,l,d,p,A);if(Array.isArray(l)){for(var R=0;R<l.length;R++)ph(o,l[R],d,p,A);return null}return d=Na(d),o&&o[$r]?o.K(l,d,h(p)?!!p.capture:!!p,A):mh(o,l,d,!1,p,A)}function mh(o,l,d,p,A,R){if(!l)throw Error("Invalid event type");var O=h(A)?!!A.capture:!!A,se=Ca(o);if(se||(o[Sa]=se=new rs(o)),d=se.add(l,d,p,O,R),d.proxy)return d;if(p=Cw(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)kw||(A=O),A===void 0&&(A=!1),o.addEventListener(l.toString(),p,A);else if(o.attachEvent)o.attachEvent(wh(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Cw(){function o(d){return l.call(o.src,o.listener,d)}let l=Dw;return o}function gh(o,l,d,p,A){if(Array.isArray(l)){for(var R=0;R<l.length;R++)gh(o,l[R],d,p,A);return null}return d=Na(d),o&&o[$r]?o.L(l,d,h(p)?!!p.capture:!!p,A):mh(o,l,d,!0,p,A)}function yh(o,l,d,p,A){if(Array.isArray(l))for(var R=0;R<l.length;R++)yh(o,l[R],d,p,A);else p=h(p)?!!p.capture:!!p,d=Na(d),o&&o[$r]?(o=o.i,l=String(l).toString(),l in o.g&&(R=o.g[l],d=ka(R,d,p,A),-1<d&&(ns(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete o.g[l],o.h--)))):o&&(o=Ca(o))&&(l=o.g[l.toString()],o=-1,l&&(o=ka(l,d,p,A)),(d=-1<o?l[o]:null)&&Pa(d))}function Pa(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[$r])Aa(l.i,o);else{var d=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(d,p,o.capture):l.detachEvent?l.detachEvent(wh(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=Ca(l))?(Aa(d,o),d.h==0&&(d.src=null,l[Sa]=null)):ns(o)}}}function wh(o){return o in Ra?Ra[o]:Ra[o]="on"+o}function Dw(o,l){if(o.da)o=!0;else{l=new Fr(l,this);var d=o.listener,p=o.ha||o.src;o.fa&&Pa(o),o=d.call(p,l)}return o}function Ca(o){return o=o[Sa],o instanceof rs?o:null}var Da="__closure_events_fn_"+(1e9*Math.random()>>>0);function Na(o){return typeof o=="function"?o:(o[Da]||(o[Da]=function(l){return o.handleEvent(l)}),o[Da])}function Ce(){zt.call(this),this.i=new rs(this),this.M=this,this.F=null}D(Ce,zt),Ce.prototype[$r]=!0,Ce.prototype.removeEventListener=function(o,l,d,p){yh(this,o,l,d,p)};function Le(o,l){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new Pe(l,o);else if(l instanceof Pe)l.target=l.target||o;else{var A=l;l=new Pe(p,o),b(l,A)}if(A=!0,d)for(var R=d.length-1;0<=R;R--){var O=l.g=d[R];A=is(O,p,!0,l)&&A}if(O=l.g=o,A=is(O,p,!0,l)&&A,A=is(O,p,!1,l)&&A,d)for(R=0;R<d.length;R++)O=l.g=d[R],A=is(O,p,!1,l)&&A}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],p=0;p<d.length;p++)ns(d[p]);delete o.g[l],o.h--}}this.F=null},Ce.prototype.K=function(o,l,d,p){return this.i.add(String(o),l,!1,d,p)},Ce.prototype.L=function(o,l,d,p){return this.i.add(String(o),l,!0,d,p)};function is(o,l,d,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,R=0;R<l.length;++R){var O=l[R];if(O&&!O.da&&O.capture==d){var se=O.listener,Ee=O.ha||O.src;O.fa&&Aa(o.i,O),A=se.call(Ee,p)!==!1&&A}}return A&&!p.defaultPrevented}function _h(o,l,d){if(typeof o=="function")d&&(o=T(o,d));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function vh(o){o.g=_h(()=>{o.g=null,o.i&&(o.i=!1,vh(o))},o.l);let l=o.h;o.h=null,o.m.apply(null,l)}class Nw extends zt{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:vh(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ur(o){zt.call(this),this.h=o,this.g={}}D(Ur,zt);var bh=[];function Th(o){ie(o.g,function(l,d){this.g.hasOwnProperty(d)&&Pa(l)},o),o.g={}}Ur.prototype.N=function(){Ur.aa.N.call(this),Th(this)},Ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oa=c.JSON.stringify,Ow=c.JSON.parse,xw=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function xa(){}xa.prototype.h=null;function Ih(o){return o.h||(o.h=o.i())}function Eh(){}var Br={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Va(){Pe.call(this,"d")}D(Va,Pe);function Ma(){Pe.call(this,"c")}D(Ma,Pe);var mn={},Ah=null;function ss(){return Ah=Ah||new Ce}mn.La="serverreachability";function kh(o){Pe.call(this,mn.La,o)}D(kh,Pe);function qr(o){let l=ss();Le(l,new kh(l))}mn.STAT_EVENT="statevent";function Sh(o,l){Pe.call(this,mn.STAT_EVENT,o),this.stat=l}D(Sh,Pe);function Fe(o){let l=ss();Le(l,new Sh(l,o))}mn.Ma="timingevent";function Rh(o,l){Pe.call(this,mn.Ma,o),this.size=l}D(Rh,Pe);function jr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Gr(){this.g=!0}Gr.prototype.xa=function(){this.g=!1};function Vw(o,l,d,p,A,R){o.info(function(){if(o.g)if(R)for(var O="",se=R.split("&"),Ee=0;Ee<se.length;Ee++){var ee=se[Ee].split("=");if(1<ee.length){var De=ee[0];ee=ee[1];var Ne=De.split("_");O=2<=Ne.length&&Ne[1]=="type"?O+(De+"="+ee+"&"):O+(De+"=redacted&")}}else O=null;else O=R;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+d+`
`+O})}function Mw(o,l,d,p,A,R,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+d+`
`+R+" "+O})}function Wn(o,l,d,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Fw(o,d)+(p?" "+p:"")})}function Lw(o,l){o.info(function(){return"TIMEOUT: "+l})}Gr.prototype.info=function(){};function Fw(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var O=1;O<A.length;O++)A[O]=""}}}}return Oa(d)}catch{return l}}var os={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ph={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},La;function as(){}D(as,xa),as.prototype.g=function(){return new XMLHttpRequest},as.prototype.i=function(){return{}},La=new as;function Wt(o,l,d,p){this.j=o,this.i=l,this.l=d,this.R=p||1,this.U=new Ur(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ch}function Ch(){this.i=null,this.g="",this.h=!1}var Dh={},Fa={};function $a(o,l,d){o.L=1,o.v=ds(At(l)),o.m=d,o.P=!0,Nh(o,null)}function Nh(o,l){o.F=Date.now(),cs(o),o.A=At(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Wh(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Ch,o.g=df(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Nw(T(o.Y,o,o.g),o.O)),l=o.U,d=o.g,p=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(bh[0]=A.toString()),A=bh);for(var R=0;R<A.length;R++){var O=ph(d,A[R],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),qr(),Vw(o.i,o.u,o.A,o.l,o.R,o.m)}Wt.prototype.ca=function(o){o=o.target;let l=this.M;l&&kt(o)==3?l.j():this.Y(o)},Wt.prototype.Y=function(o){try{if(o==this.g)e:{let Ne=kt(this.g);var l=this.g.Ba();let Qn=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||Zh(this.g)))){this.J||Ne!=4||l==7||(l==8||0>=Qn?qr(3):qr(2)),Ua(this);var d=this.g.Z();this.X=d;t:if(Oh(this)){var p=Zh(this.g);o="";var A=p.length,R=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),zr(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(R&&l==A-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Mw(this.i,this.u,this.A,this.l,this.R,Ne,d),this.o){if(this.T&&!this.K){t:{if(this.g){var se,Ee=this.g;if((se=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(se)){var ee=se;break t}}ee=null}if(d=ee)Wn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ba(this,d);else{this.o=!1,this.s=3,Fe(12),gn(this),zr(this);break e}}if(this.P){d=!0;let it;for(;!this.J&&this.C<O.length;)if(it=$w(this,O),it==Fa){Ne==4&&(this.s=4,Fe(14),d=!1),Wn(this.i,this.l,null,"[Incomplete Response]");break}else if(it==Dh){this.s=4,Fe(15),Wn(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else Wn(this.i,this.l,it,null),Ba(this,it);if(Oh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||O.length!=0||this.h.h||(this.s=1,Fe(16),d=!1),this.o=this.o&&d,!d)Wn(this.i,this.l,O,"[Invalid Chunked Response]"),gn(this),zr(this);else if(0<O.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Ha(De),De.M=!0,Fe(11))}}else Wn(this.i,this.l,O,null),Ba(this,O);Ne==4&&gn(this),this.o&&!this.J&&(Ne==4?af(this.j,this):(this.o=!1,cs(this)))}else n_(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),gn(this),zr(this)}}}catch{}finally{}};function Oh(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function $w(o,l){var d=o.C,p=l.indexOf(`
`,d);return p==-1?Fa:(d=Number(l.substring(d,p)),isNaN(d)?Dh:(p+=1,p+d>l.length?Fa:(l=l.slice(p,p+d),o.C=p+d,l)))}Wt.prototype.cancel=function(){this.J=!0,gn(this)};function cs(o){o.S=Date.now()+o.I,xh(o,o.I)}function xh(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=jr(T(o.ba,o),l)}function Ua(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Wt.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(Lw(this.i,this.A),this.L!=2&&(qr(),Fe(17)),gn(this),this.s=2,zr(this)):xh(this,this.S-o)};function zr(o){o.j.G==0||o.J||af(o.j,o)}function gn(o){Ua(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Th(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Ba(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||qa(d.h,o))){if(!o.K&&qa(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)gs(d),ps(d);else break e;Wa(d),Fe(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=jr(T(d.Za,d),6e3));if(1>=Lh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else wn(d,11)}else if((o.K||d.g==o)&&gs(d),!W(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let ee=A[l];if(d.T=ee[0],ee=ee[1],d.G==2)if(ee[0]=="c"){d.K=ee[1],d.ia=ee[2];let De=ee[3];De!=null&&(d.la=De,d.j.info("VER="+d.la));let Ne=ee[4];Ne!=null&&(d.Aa=Ne,d.j.info("SVER="+d.Aa));let Qn=ee[5];Qn!=null&&typeof Qn=="number"&&0<Qn&&(p=1.5*Qn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;let it=o.g;if(it){let ws=it.g?it.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ws){var R=p.h;R.g||ws.indexOf("spdy")==-1&&ws.indexOf("quic")==-1&&ws.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ja(R,R.h),R.h=null))}if(p.D){let Ka=it.g?it.g.getResponseHeader("X-HTTP-Session-Id"):null;Ka&&(p.ya=Ka,ce(p.I,p.D,Ka))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=uf(p,p.J?p.ia:null,p.W),O.K){Fh(p.h,O);var se=O,Ee=p.L;Ee&&(se.I=Ee),se.B&&(Ua(se),cs(se)),p.g=O}else sf(p);0<d.i.length&&ms(d)}else ee[0]!="stop"&&ee[0]!="close"||wn(d,7);else d.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?wn(d,7):za(d):ee[0]!="noop"&&d.l&&d.l.ta(ee),d.v=0)}}qr(4)}catch{}}var Uw=class{constructor(o,l){this.g=o,this.map=l}};function Vh(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mh(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Lh(o){return o.h?1:o.g?o.g.size:0}function qa(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ja(o,l){o.g?o.g.add(l):o.h=l}function Fh(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Vh.prototype.cancel=function(){if(this.i=$h(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function $h(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(let d of o.g.values())l=l.concat(d.D);return l}return L(o.i)}function Bw(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,p=0;p<d;p++)l.push(o[p]);return l}l=[],d=0;for(p in o)l[d++]=o[p];return l}function qw(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(let p in o)l[d++]=p;return l}}}function Uh(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=qw(o),p=Bw(o),A=p.length,R=0;R<A;R++)l.call(void 0,p[R],d&&d[R],o)}var Bh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jw(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),A=null;if(0<=p){var R=o[d].substring(0,p);A=o[d].substring(p+1)}else R=o[d];l(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function yn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof yn){this.h=o.h,ls(this,o.j),this.o=o.o,this.g=o.g,us(this,o.s),this.l=o.l;var l=o.i,d=new Kr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),qh(this,d),this.m=o.m}else o&&(l=String(o).match(Bh))?(this.h=!1,ls(this,l[1]||"",!0),this.o=Wr(l[2]||""),this.g=Wr(l[3]||"",!0),us(this,l[4]),this.l=Wr(l[5]||"",!0),qh(this,l[6]||"",!0),this.m=Wr(l[7]||"")):(this.h=!1,this.i=new Kr(null,this.h))}yn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Hr(l,jh,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Hr(l,jh,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Hr(d,d.charAt(0)=="/"?Ww:zw,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Hr(d,Kw)),o.join("")};function At(o){return new yn(o)}function ls(o,l,d){o.j=d?Wr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function us(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function qh(o,l,d){l instanceof Kr?(o.i=l,Qw(o.i,o.h)):(d||(l=Hr(l,Hw)),o.i=new Kr(l,o.h))}function ce(o,l,d){o.i.set(l,d)}function ds(o){return ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Wr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Hr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Gw),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Gw(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var jh=/[#\/\?@]/g,zw=/[#\?:]/g,Ww=/[#\?]/g,Hw=/[#\?@]/g,Kw=/#/g;function Kr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Ht(o){o.g||(o.g=new Map,o.h=0,o.i&&jw(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Kr.prototype,n.add=function(o,l){Ht(this),this.i=null,o=Hn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Gh(o,l){Ht(o),l=Hn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function zh(o,l){return Ht(o),l=Hn(o,l),o.g.has(l)}n.forEach=function(o,l){Ht(this),this.g.forEach(function(d,p){d.forEach(function(A){o.call(l,A,p,this)},this)},this)},n.na=function(){Ht(this);let o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){let A=o[p];for(let R=0;R<A.length;R++)d.push(l[p])}return d},n.V=function(o){Ht(this);let l=[];if(typeof o=="string")zh(this,o)&&(l=l.concat(this.g.get(Hn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return Ht(this),this.i=null,o=Hn(this,o),zh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Wh(o,l,d){Gh(o,l),0<d.length&&(o.i=null,o.g.set(Hn(o,l),L(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];let R=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var A=R;O[p]!==""&&(A+="="+encodeURIComponent(String(O[p]))),o.push(A)}}return this.i=o.join("&")};function Hn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Qw(o,l){l&&!o.j&&(Ht(o),o.i=null,o.g.forEach(function(d,p){var A=p.toLowerCase();p!=A&&(Gh(this,p),Wh(this,A,d))},o)),o.j=l}function Yw(o,l){let d=new Gr;if(c.Image){let p=new Image;p.onload=S(Kt,d,"TestLoadImage: loaded",!0,l,p),p.onerror=S(Kt,d,"TestLoadImage: error",!1,l,p),p.onabort=S(Kt,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=S(Kt,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Jw(o,l){let d=new Gr,p=new AbortController,A=setTimeout(()=>{p.abort(),Kt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(A),R.ok?Kt(d,"TestPingServer: ok",!0,l):Kt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Kt(d,"TestPingServer: error",!1,l)})}function Kt(o,l,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function Xw(){this.g=new xw}function Zw(o,l,d){let p=d||"";try{Uh(o,function(A,R){let O=A;h(A)&&(O=Oa(A)),l.push(p+R+"="+encodeURIComponent(O))})}catch(A){throw l.push(p+"type="+encodeURIComponent("_badmap")),A}}function Qr(o){this.l=o.Ub||null,this.j=o.eb||!1}D(Qr,xa),Qr.prototype.g=function(){return new hs(this.l,this.j)},Qr.prototype.i=function(o){return function(){return o}}({});function hs(o,l){Ce.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(hs,Ce),n=hs.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Jr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Yr(this):Jr(this),this.readyState==3&&Hh(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Yr(this))},n.Qa=function(o){this.g&&(this.response=o,Yr(this))},n.ga=function(){this.g&&Yr(this)};function Yr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Jr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Jr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Kh(o){let l="";return ie(o,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function Ga(o,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Kh(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ce(o,l,d))}function fe(o){Ce.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(fe,Ce);var e_=/^https?$/i,t_=["POST","PUT"];n=fe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():La.g(),this.v=this.o?Ih(this.o):Ih(La),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){Qh(this,R);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(let R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),A=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(t_,l,void 0))||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[R,O]of d)this.g.setRequestHeader(R,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xh(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Qh(this,R)}};function Qh(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Yh(o),fs(o)}function Yh(o){o.A||(o.A=!0,Le(o,"complete"),Le(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Le(this,"complete"),Le(this,"abort"),fs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fs(this,!0)),fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Jh(this):this.bb())},n.bb=function(){Jh(this)};function Jh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||kt(o)!=4||o.Z()!=2)){if(o.u&&kt(o)==4)_h(o.Ea,0,o);else if(Le(o,"readystatechange"),kt(o)==4){o.h=!1;try{let O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=O===0){var A=String(o.D).match(Bh)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),p=!e_.test(A?A.toLowerCase():"")}d=p}if(d)Le(o,"complete"),Le(o,"success");else{o.m=6;try{var R=2<kt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Yh(o)}}finally{fs(o)}}}}function fs(o,l){if(o.g){Xh(o);let d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Le(o,"ready");try{d.onreadystatechange=p}catch{}}}function Xh(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function kt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Ow(l)}};function Zh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function n_(o){let l={};o=(o.g&&2<=kt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(W(o[p]))continue;var d=E(o[p]);let A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();let R=l[A]||[];l[A]=R,R.push(d)}I(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function ef(o){this.Aa=0,this.i=[],this.j=new Gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xr("baseRetryDelayMs",5e3,o),this.cb=Xr("retryDelaySeedMs",1e4,o),this.Wa=Xr("forwardChannelMaxRetries",2,o),this.wa=Xr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Vh(o&&o.concurrentRequestLimit),this.Da=new Xw,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ef.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,p){Fe(0),this.W=o,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=uf(this,null,this.W),ms(this)};function za(o){if(tf(o),o.G==3){var l=o.U++,d=At(o.I);if(ce(d,"SID",o.K),ce(d,"RID",l),ce(d,"TYPE","terminate"),Zr(o,d),l=new Wt(o,o.j,l),l.L=2,l.v=ds(At(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=df(l.j,null),l.g.ea(l.v)),l.F=Date.now(),cs(l)}lf(o)}function ps(o){o.g&&(Ha(o),o.g.cancel(),o.g=null)}function tf(o){ps(o),o.u&&(c.clearTimeout(o.u),o.u=null),gs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ms(o){if(!Mh(o.h)&&!o.s){o.s=!0;var l=o.Ga;Mr||fh(),Lr||(Mr(),Lr=!0),Ea.add(l,o),o.B=0}}function r_(o,l){return Lh(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=jr(T(o.Ga,o,l),cf(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let A=new Wt(this,this.j,o),R=this.o;if(this.S&&(R?(R=y(R),b(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=rf(this,A,l),d=At(this.I),ce(d,"RID",o),ce(d,"CVER",22),this.D&&ce(d,"X-HTTP-Session-Id",this.D),Zr(this,d),R&&(this.O?l="headers="+encodeURIComponent(String(Kh(R)))+"&"+l:this.m&&Ga(d,this.m,R)),ja(this.h,A),this.Ua&&ce(d,"TYPE","init"),this.P?(ce(d,"$req",l),ce(d,"SID","null"),A.T=!0,$a(A,d,null)):$a(A,d,l),this.G=2}}else this.G==3&&(o?nf(this,o):this.i.length==0||Mh(this.h)||nf(this))};function nf(o,l){var d;l?d=l.l:d=o.U++;let p=At(o.I);ce(p,"SID",o.K),ce(p,"RID",d),ce(p,"AID",o.T),Zr(o,p),o.m&&o.o&&Ga(p,o.m,o.o),d=new Wt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=rf(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ja(o.h,d),$a(d,p,l)}function Zr(o,l){o.H&&ie(o.H,function(d,p){ce(l,p,d)}),o.l&&Uh({},function(d,p){ce(l,p,d)})}function rf(o,l,d){d=Math.min(o.i.length,d);var p=o.l?T(o.l.Na,o.l,o):null;e:{var A=o.i;let R=-1;for(;;){let O=["count="+d];R==-1?0<d?(R=A[0].g,O.push("ofs="+R)):R=0:O.push("ofs="+R);let se=!0;for(let Ee=0;Ee<d;Ee++){let ee=A[Ee].g,De=A[Ee].map;if(ee-=R,0>ee)R=Math.max(0,A[Ee].g-100),se=!1;else try{Zw(De,O,"req"+ee+"_")}catch{p&&p(De)}}if(se){p=O.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,p}function sf(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Mr||fh(),Lr||(Mr(),Lr=!0),Ea.add(l,o),o.v=0}}function Wa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=jr(T(o.Fa,o),cf(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,of(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=jr(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),ps(this),of(this))};function Ha(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function of(o){o.g=new Wt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=At(o.qa);ce(l,"RID","rpc"),ce(l,"SID",o.K),ce(l,"AID",o.T),ce(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ce(l,"TO",o.ja),ce(l,"TYPE","xmlhttp"),Zr(o,l),o.m&&o.o&&Ga(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ds(At(l)),d.m=null,d.P=!0,Nh(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ps(this),Wa(this),Fe(19))};function gs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function af(o,l){var d=null;if(o.g==l){gs(o),Ha(o),o.g=null;var p=2}else if(qa(o.h,l))d=l.D,Fh(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;p=ss(),Le(p,new Rh(p,d)),ms(o)}else sf(o);else if(A=l.s,A==3||A==0&&0<l.X||!(p==1&&r_(o,l)||p==2&&Wa(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),A){case 1:wn(o,5);break;case 4:wn(o,10);break;case 3:wn(o,6);break;default:wn(o,2)}}}function cf(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function wn(o,l){if(o.j.info("Error code "+l),l==2){var d=T(o.fb,o),p=o.Xa;let A=!p;p=new yn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ls(p,"https"),ds(p),A?Yw(p.toString(),d):Jw(p.toString(),d)}else Fe(2);o.G=0,o.l&&o.l.sa(l),lf(o),tf(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function lf(o){if(o.G=0,o.ka=[],o.l){let l=$h(o.h);(l.length!=0||o.i.length!=0)&&(N(o.ka,l),N(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function uf(o,l,d){var p=d instanceof yn?At(d):new yn(d);if(p.g!="")l&&(p.g=l+"."+p.g),us(p,p.s);else{var A=c.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var R=new yn(null);p&&ls(R,p),l&&(R.g=l),A&&us(R,A),d&&(R.l=d),p=R}return d=o.D,l=o.ya,d&&l&&ce(p,d,l),ce(p,"VER",o.la),Zr(o,p),p}function df(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new fe(new Qr({eb:d})):new fe(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hf(){}n=hf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ys(){}ys.prototype.g=function(o,l){return new We(o,l)};function We(o,l){Ce.call(this),this.g=new ef(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!W(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!W(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Kn(this)}D(We,Ce),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){za(this.g)},We.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Oa(o),o=d);l.i.push(new Uw(l.Ya++,o)),l.G==3&&ms(l)},We.prototype.N=function(){this.g.l=null,delete this.j,za(this.g),delete this.g,We.aa.N.call(this)};function ff(o){Va.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(let d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}D(ff,Va);function pf(){Ma.call(this),this.status=1}D(pf,Ma);function Kn(o){this.g=o}D(Kn,hf),Kn.prototype.ua=function(){Le(this.g,"a")},Kn.prototype.ta=function(o){Le(this.g,new ff(o))},Kn.prototype.sa=function(o){Le(this.g,new pf)},Kn.prototype.ra=function(){Le(this.g,"b")},ys.prototype.createWebChannel=ys.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,sl=xt.createWebChannelTransport=function(){return new ys},il=xt.getStatEventTarget=function(){return ss()},rl=xt.Event=mn,co=xt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},os.NO_ERROR=0,os.TIMEOUT=8,os.HTTP_ERROR=6,_i=xt.ErrorCode=os,Ph.COMPLETE="complete",nl=xt.EventType=Ph,Eh.EventType=Br,Br.OPEN="a",Br.CLOSE="b",Br.ERROR="c",Br.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,rr=xt.WebChannel=Eh,fT=xt.FetchXmlHttpFactory=Qr,fe.prototype.listenOnce=fe.prototype.L,fe.prototype.getLastError=fe.prototype.Ka,fe.prototype.getLastErrorCode=fe.prototype.Ba,fe.prototype.getStatus=fe.prototype.Z,fe.prototype.getResponseJson=fe.prototype.Oa,fe.prototype.getResponseText=fe.prototype.oa,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Ha,tl=xt.XhrIo=fe}).apply(typeof ao<"u"?ao:typeof self<"u"?self:typeof window<"u"?window:{});var Zp="@firebase/firestore";var Te=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");var Sr="11.0.2";var Cn=new Qt("@firebase/firestore");function ir(){return Cn.logLevel}function V(n,...e){if(Cn.logLevel<=H.DEBUG){let t=e.map(zu);Cn.debug(`Firestore (${Sr}): ${n}`,...t)}}function Vt(n,...e){if(Cn.logLevel<=H.ERROR){let t=e.map(zu);Cn.error(`Firestore (${Sr}): ${n}`,...t)}}function dr(n,...e){if(Cn.logLevel<=H.WARN){let t=e.map(zu);Cn.warn(`Firestore (${Sr}): ${n}`,...t)}}function zu(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function B(n="Unexpected state"){let e=`FIRESTORE (${Sr}) INTERNAL ASSERTION FAILED: `+n;throw Vt(e),new Error(e)}function X(n,e){n||B()}function j(n,e){return n}var P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},x=class extends $e{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var rt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var go=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},ll=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}},ul=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},dl=class{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0);let r=this.i,i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve(),s=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rt,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){let u=this.t.getImmediate({optional:!0});u?c(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rt)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new go(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new Te(e)}},hl=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}},fl=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new hl(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}},pl=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},ml=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){X(this.o===void 0);let r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string"),this.R=t.token,new pl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function pT(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var yo=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=pT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}};function Y(n,e){return n<e?-1:n>e?1:0}function hr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var Se=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var q=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new Se(0,0))}static max(){return new n(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var wo=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(),r===void 0?r=e.length-t:r>e.length-t&&B(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},le=class n extends wo{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new x(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},mT=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Ke=class n extends wo{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return mT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new x(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new x(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new x(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var U=class n{constructor(e){this.path=e}static fromPath(e){return new n(le.fromString(e))}static fromName(e){return new n(le.fromString(e).popFirst(5))}static empty(){return new n(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new le(e.slice()))}};var gl=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};gl.UNKNOWN_ID=-1;function gT(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new Se(t+1,0):new Se(t,r));return new Dn(i,U.empty(),e)}function yT(n){return new Dn(n.readTime,n.key,-1)}var Dn=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(q.min(),U.empty(),-1)}static max(){return new n(q.max(),U.empty(),-1)}};function wT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}var _T="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",yl=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Rr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==_T)throw n;V("LocalStore","Unexpectedly lost primary lease")}var C=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),c=0;for(let u=0;u<s;u++){let h=u;t(e[h]).next(f=>{a[h]=f,++c,c===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};function vT(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Pr(n){return n.name==="IndexedDbTransactionError"}var fr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};fr.oe=-1;function zi(n){return n==null}function Si(n){return n===0&&1/n==-1/0}function bT(n){return typeof n=="number"&&Number.isInteger(n)&&!Si(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function TT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=em(e)),e=IT(n.get(t),e);return em(e)}function IT(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function em(n){return n+""}var ET=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],WS=[...ET,"documentOverlays"],AT=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],kT=AT,ST=[...kT,"indexConfiguration","indexState","indexEntries"];var HS=[...ST,"globals"];function tm(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function un(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Vm(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var pe=class n{constructor(e,t){this.comparator=e,this.root=t||yt.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cr(this.root,e,this.comparator,!1)}getReverseIterator(){return new cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cr(this.root,e,this.comparator,!0)}},cr=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},yt=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();let e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}};yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,t,r,i,s){return this}insert(e,t,r){return new yt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Ie=class n{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _o(this.data.getIterator())}getIteratorFrom(e){return new _o(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},_o=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var nt=class n{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new n([])}unionWith(e){let t=new Ie(Ke.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hr(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var vo=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var xe=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vo("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};xe.EMPTY_BYTE_STRING=new xe("");var RT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(n){if(X(!!n),typeof n=="string"){let e=0,t=RT.exec(n);if(X(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lt(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}function Wu(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Xo(n){let e=n.mapValue.fields.__previous_value__;return Wu(e)?Xo(e):e}function Ri(n){let e=Mt(n.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}var wl=class{constructor(e,t,r,i,s,a,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}},bo=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var lo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wu(n)?4:Lm(n)?9007199254740991:Mm(n)?10:11:B()}function _t(n,e){if(n===e)return!0;let t=rn(n);if(t!==rn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ri(n).isEqual(Ri(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=Mt(i.timestampValue),c=Mt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Lt(i.bytesValue).isEqual(Lt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ue(i.geoPointValue.latitude)===ue(s.geoPointValue.latitude)&&ue(i.geoPointValue.longitude)===ue(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ue(i.integerValue)===ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=ue(i.doubleValue),c=ue(s.doubleValue);return a===c?Si(a)===Si(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return hr(n.arrayValue.values||[],e.arrayValue.values||[],_t);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(tm(a)!==tm(c))return!1;for(let u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!_t(a[u],c[u])))return!1;return!0}(n,e);default:return B()}}function Pi(n,e){return(n.values||[]).find(t=>_t(t,e))!==void 0}function pr(n,e){if(n===e)return 0;let t=rn(n),r=rn(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(s,a){let c=ue(s.integerValue||s.doubleValue),u=ue(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return nm(n.timestampValue,e.timestampValue);case 4:return nm(Ri(n),Ri(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(s,a){let c=Lt(s),u=Lt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let c=s.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){let f=Y(c[h],u[h]);if(f!==0)return f}return Y(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let c=Y(ue(s.latitude),ue(a.latitude));return c!==0?c:Y(ue(s.longitude),ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return rm(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,u,h,f;let g=s.fields||{},T=a.fields||{},S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,D=(u=T.value)===null||u===void 0?void 0:u.arrayValue,L=Y(((h=S?.values)===null||h===void 0?void 0:h.length)||0,((f=D?.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:rm(S,D)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===lo.mapValue&&a===lo.mapValue)return 0;if(s===lo.mapValue)return 1;if(a===lo.mapValue)return-1;let c=s.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){let T=Y(u[g],f[g]);if(T!==0)return T;let S=pr(c[u[g]],h[f[g]]);if(S!==0)return S}return Y(u.length,f.length)}(n.mapValue,e.mapValue);default:throw B()}}function nm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);let t=Mt(n),r=Mt(e),i=Y(t.seconds,r.seconds);return i!==0?i:Y(t.nanos,r.nanos)}function rm(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=pr(t[i],r[i]);if(s)return s}return Y(t.length,r.length)}function mr(n){return _l(n)}function _l(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=Mt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Lt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=_l(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${_l(t.fields[a])}`;return i+"}"}(n.mapValue):B()}function fo(n){switch(rn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=Xo(n);return e?16+fo(e):16;case 5:return 2*n.stringValue.length;case 6:return Lt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+fo(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return un(r.fields,(s,a)=>{i+=s.length+fo(a)}),i}(n.mapValue);default:throw B()}}function im(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function vl(n){return!!n&&"integerValue"in n}function Hu(n){return!!n&&"arrayValue"in n}function sm(n){return!!n&&"nullValue"in n}function om(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function po(n){return!!n&&"mapValue"in n}function Mm(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ti(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return un(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ti(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ti(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Lm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var je=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!po(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ti(t)}setAll(e){let t=Ke.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){let u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Ti(a):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());po(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _t(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];po(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){un(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(Ti(this.value))}};function Fm(n){let e=[];return un(n.fields,(t,r)=>{let i=new Ke([t]);if(po(r)){let s=Fm(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new nt(e)}var Ye=class n{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new n(e,0,q.min(),q.min(),q.min(),je.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,q.min(),q.min(),je.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,q.min(),q.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var gr=class{constructor(e,t){this.position=e,this.inclusive=t}};function am(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=pr(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_t(n.position[t],e.position[t]))return!1;return!0}var yr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function PT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var To=class{},we=class n extends To{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Tl(e,t,r):t==="array-contains"?new Al(e,r):t==="in"?new kl(e,r):t==="not-in"?new Sl(e,r):t==="array-contains-any"?new Rl(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Il(e,r):new El(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(pr(t,this.value)):t!==null&&rn(this.value)===rn(t)&&this.matchesComparison(pr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},ct=class n extends To{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return $m(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function $m(n){return n.op==="and"}function Um(n){return CT(n)&&$m(n)}function CT(n){for(let e of n.filters)if(e instanceof ct)return!1;return!0}function bl(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+mr(n.value);if(Um(n))return n.filters.map(e=>bl(e)).join(",");{let e=n.filters.map(t=>bl(t)).join(",");return`${n.op}(${e})`}}function Bm(n,e){return n instanceof we?function(r,i){return i instanceof we&&r.op===i.op&&r.field.isEqual(i.field)&&_t(r.value,i.value)}(n,e):n instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Bm(a,i.filters[c]),!0):!1}(n,e):void B()}function qm(n){return n instanceof we?function(t){return`${t.field.canonicalString()} ${t.op} ${mr(t.value)}`}(n):n instanceof ct?function(t){return t.op.toString()+" {"+t.getFilters().map(qm).join(" ,")+"}"}(n):"Filter"}var Tl=class extends we{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){let t=U.comparator(e.key,this.key);return this.matchesComparison(t)}},Il=class extends we{constructor(e,t){super(e,"in",t),this.keys=jm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},El=class extends we{constructor(e,t){super(e,"not-in",t),this.keys=jm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function jm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}var Al=class extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Hu(t)&&Pi(t.arrayValue,this.value)}},kl=class extends we{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Pi(this.value.arrayValue,t)}},Sl=class extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Pi(this.value.arrayValue,t)}},Rl=class extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Hu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Pi(this.value.arrayValue,r))}};var Pl=class{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}};function lm(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Pl(n,e,t,r,i,s,a)}function Ku(n){let e=j(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>bl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mr(r)).join(",")),e.ue=t}return e.ue}function Qu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!PT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Bm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!cm(n.startAt,e.startAt)&&cm(n.endAt,e.endAt)}function Cl(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var Nn=class{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function DT(n,e,t,r,i,s,a,c){return new Nn(n,e,t,r,i,s,a,c)}function Zo(n){return new Nn(n)}function um(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gm(n){return n.collectionGroup!==null}function Ii(n){let e=j(n);if(e.ce===null){e.ce=[];let t=new Set;for(let s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ie(Ke.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new yr(s,r))}),t.has(Ke.keyField().canonicalString())||e.ce.push(new yr(Ke.keyField(),r))}return e.ce}function wt(n){let e=j(n);return e.le||(e.le=NT(e,Ii(n))),e.le}function NT(n,e){if(n.limitType==="F")return lm(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new yr(i.field,s)});let t=n.endAt?new gr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gr(n.startAt.position,n.startAt.inclusive):null;return lm(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Dl(n,e){let t=n.filters.concat([e]);return new Nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Io(n,e,t){return new Nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ea(n,e){return Qu(wt(n),wt(e))&&n.limitType===e.limitType}function zm(n){return`${Ku(wt(n))}|lt:${n.limitType}`}function sr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>qm(i)).join(", ")}]`),zi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>mr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>mr(i)).join(",")),`Target(${r})`}(wt(n))}; limitType=${n.limitType})`}function ta(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):U.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of Ii(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,u){let h=am(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,Ii(r),i)||r.endAt&&!function(a,c,u){let h=am(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,Ii(r),i))}(n,e)}function OT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Wm(n){return(e,t)=>{let r=!1;for(let i of Ii(n)){let s=xT(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function xT(n,e,t){let r=n.field.isKeyField()?U.comparator(e.key,t.key):function(s,a,c){let u=a.data.field(s),h=c.data.field(s);return u!==null&&h!==null?pr(u,h):B()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}var Ft=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){un(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return Vm(this.inner)}size(){return this.innerSize}};var VT=new pe(U.comparator);function $t(){return VT}var Hm=new pe(U.comparator);function bi(...n){let e=Hm;for(let t of n)e=e.insert(t.key,t);return e}function Km(n){let e=Hm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Rn(){return Ei()}function Qm(){return Ei()}function Ei(){return new Ft(n=>n.toString(),(n,e)=>n.isEqual(e))}var MT=new pe(U.comparator),LT=new Ie(U.comparator);function K(...n){let e=LT;for(let t of n)e=e.add(t);return e}var FT=new Ie(Y);function $T(){return FT}function Yu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Si(e)?"-0":e}}function Ym(n){return{integerValue:""+n}}function UT(n,e){return bT(e)?Ym(e):Yu(n,e)}var wr=class{constructor(){this._=void 0}};function BT(n,e,t){return n instanceof On?function(i,s){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wu(s)&&(s=Xo(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof sn?Xm(n,e):n instanceof on?Zm(n,e):function(i,s){let a=Jm(i,s),c=dm(a)+dm(i.Pe);return vl(a)&&vl(i.Pe)?Ym(c):Yu(i.serializer,c)}(n,e)}function qT(n,e,t){return n instanceof sn?Xm(n,e):n instanceof on?Zm(n,e):t}function Jm(n,e){return n instanceof _r?function(r){return vl(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var On=class extends wr{},sn=class extends wr{constructor(e){super(),this.elements=e}};function Xm(n,e){let t=eg(e);for(let r of n.elements)t.some(i=>_t(i,r))||t.push(r);return{arrayValue:{values:t}}}var on=class extends wr{constructor(e){super(),this.elements=e}};function Zm(n,e){let t=eg(e);for(let r of n.elements)t=t.filter(i=>!_t(i,r));return{arrayValue:{values:t}}}var _r=class extends wr{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function dm(n){return ue(n.integerValue||n.doubleValue)}function eg(n){return Hu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var Ci=class{constructor(e,t){this.field=e,this.transform=t}};function jT(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof sn&&i instanceof sn||r instanceof on&&i instanceof on?hr(r.elements,i.elements,_t):r instanceof _r&&i instanceof _r?_t(r.Pe,i.Pe):r instanceof On&&i instanceof On}(n.transform,e.transform)}var Nl=class{constructor(e,t){this.version=e,this.transformResults=t}},Ge=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function mo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var vr=class{};function tg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Di(n.key,Ge.none()):new xn(n.key,n.data,Ge.none());{let t=n.data,r=je.empty(),i=new Ie(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new vt(n.key,r,new nt(i.toArray()),Ge.none())}}function GT(n,e,t){n instanceof xn?function(i,s,a){let c=i.value.clone(),u=fm(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof vt?function(i,s,a){if(!mo(i.precondition,s))return void s.convertToUnknownDocument(a.version);let c=fm(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(ng(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ai(n,e,t,r){return n instanceof xn?function(s,a,c,u){if(!mo(s.precondition,a))return c;let h=s.value.clone(),f=pm(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof vt?function(s,a,c,u){if(!mo(s.precondition,a))return c;let h=pm(s.fieldTransforms,u,a),f=a.data;return f.setAll(ng(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,c){return mo(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function zT(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=Jm(r.transform,i||null);s!=null&&(t===null&&(t=je.empty()),t.set(r.field,s))}return t||null}function hm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&hr(r,i,(s,a)=>jT(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var xn=class extends vr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},vt=class extends vr{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function ng(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function fm(n,e,t){let r=new Map;X(n.length===t.length);for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,qT(a,c,t[i]))}return r}function pm(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,BT(s,a,e))}return r}var Di=class extends vr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Eo=class extends vr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Ol=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&GT(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ai(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Ai(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=Qm();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;let u=tg(a,c);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&hr(this.mutations,e.mutations,(t,r)=>hm(t,r))&&hr(this.baseMutations,e.baseMutations,(t,r)=>hm(t,r))}},xl=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){X(e.mutations.length===r.length);let i=function(){return MT}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var Vl=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Ml=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var ge,J;function rg(n){switch(n){default:return B();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function ig(n){if(n===void 0)return Vt("GRPC error has no .code"),P.UNKNOWN;switch(n){case ge.OK:return P.OK;case ge.CANCELLED:return P.CANCELLED;case ge.UNKNOWN:return P.UNKNOWN;case ge.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ge.INTERNAL:return P.INTERNAL;case ge.UNAVAILABLE:return P.UNAVAILABLE;case ge.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ge.NOT_FOUND:return P.NOT_FOUND;case ge.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ge.ABORTED:return P.ABORTED;case ge.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ge.DATA_LOSS:return P.DATA_LOSS;default:return B()}}(J=ge||(ge={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";var mm=null;function WT(){return new TextEncoder}var HT=new en([4294967295,4294967295],0);function gm(n){let e=WT().encode(n),t=new el;return t.update(e),new Uint8Array(t.digest())}function ym(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new en([t,r],0),new en([i,s],0)]}var Ll=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Pn(`Invalid padding: ${t}`);if(r<0)throw new Pn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Pn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=en.fromNumber(this.Te)}Ee(e,t,r){let i=e.add(t.multiply(en.fromNumber(r)));return i.compare(HT)===1&&(i=new en([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;let t=gm(e),[r,i]=ym(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;let t=gm(e),[r,i]=ym(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},Pn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Ao=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Ni.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(q.min(),i,new pe(Y),$t(),K())}},Ni=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,K(),K(),K())}};var lr=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},ko=class{constructor(e,t){this.targetId=e,this.me=t}},So=class{constructor(e,t,r=xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},Ro=class{constructor(){this.fe=0,this.ge=wm(),this.pe=xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=K(),t=K(),r=K();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:B()}}),new Ni(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=wm()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},Fl=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=$t(),this.qe=uo(),this.Qe=uo(),this.Ke=new pe(Y)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:B()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){let t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){let s=i.target;if(Cl(s))if(r===0){let a=new U(s.path);this.We(t,a,Ye.newNoDocument(a,q.min()))}else X(r===1);else{let a=this.Ze(t);if(a!==r){let c=this.Xe(e),u=c?this.et(c,e,a):1;if(u!==0){this.He(t);let h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,h)}mm?.tt(function(f,g,T,S,D){var L,N,z,W,Q,ae;let Me={localCacheCount:f,existenceFilterCount:g.count,databaseId:T.database,projectId:T.projectId},ie=g.unchangedNames;return ie&&(Me.bloomFilter={applied:D===0,hashCount:(L=ie?.hashCount)!==null&&L!==void 0?L:0,bitmapLength:(W=(z=(N=ie?.bits)===null||N===void 0?void 0:N.bitmap)===null||z===void 0?void 0:z.length)!==null&&W!==void 0?W:0,padding:(ae=(Q=ie?.bits)===null||Q===void 0?void 0:Q.padding)!==null&&ae!==void 0?ae:0,mightContain:I=>{var y;return(y=S?.mightContain(I))!==null&&y!==void 0&&y}}),Me}(a,e.me,this.Le.nt(),c,u))}}}}Xe(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,c;try{a=Lt(r).toUint8Array()}catch(u){if(u instanceof vo)return dr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ll(a,i,s)}catch(u){return dr(u instanceof Pn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Te===0?null:c}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.We(t,s,null),i++)}),i}it(e){let t=new Map;this.Be.forEach((s,a)=>{let c=this.Ye(a);if(c){if(s.current&&Cl(c.target)){let u=new U(c.target.path);this.st(u).has(a)||this.ot(a,u)||this.We(a,u,Ye.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=K();this.Qe.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{let h=this.Ye(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));let i=new Ao(e,t,this.Ke,this.ke,r);return this.ke=$t(),this.qe=uo(),this.Qe=uo(),this.Ke=new pe(Y),i}Ue(e,t){if(!this.je(e))return;let r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;let i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Ro,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Ie(Y),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ie(Y),this.qe=this.qe.insert(e,t)),t}je(e){let t=this.Ye(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Ro),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function uo(){return new pe(U.comparator)}function wm(){return new pe(U.comparator)}var KT={asc:"ASCENDING",desc:"DESCENDING"},QT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YT={and:"AND",or:"OR"},$l=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function Ul(n,e){return n.useProto3Json||zi(e)?e:{value:e}}function Po(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function JT(n,e){return Po(n,e.toTimestamp())}function Qe(n){return X(!!n),q.fromTimestamp(function(t){let r=Mt(t);return new Se(r.seconds,r.nanos)}(n))}function Ju(n,e){return Bl(n,e).canonicalString()}function Bl(n,e){let t=function(i){return new le(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function og(n){let e=le.fromString(n);return X(hg(e)),e}function Co(n,e){return Ju(n.databaseId,e.path)}function ki(n,e){let t=og(e);if(t.get(1)!==n.databaseId.projectId)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(cg(t))}function ag(n,e){return Ju(n.databaseId,e)}function XT(n){let e=og(n);return e.length===4?le.emptyPath():cg(e)}function ql(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cg(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function _m(n,e,t){return{name:Co(n,e),fields:t.value.mapValue.fields}}function ZT(n,e){return"found"in e?function(r,i){X(!!i.found),i.found.name,i.found.updateTime;let s=ki(r,i.found.name),a=Qe(i.found.updateTime),c=i.found.createTime?Qe(i.found.createTime):q.min(),u=new je({mapValue:{fields:i.found.fields}});return Ye.newFoundDocument(s,a,c,u)}(n,e):"missing"in e?function(r,i){X(!!i.missing),X(!!i.readTime);let s=ki(r,i.missing),a=Qe(i.readTime);return Ye.newNoDocument(s,a)}(n,e):B()}function eI(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(X(f===void 0||typeof f=="string"),xe.fromBase64String(f||"")):(X(f===void 0||f instanceof Buffer||f instanceof Uint8Array),xe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){let f=h.code===void 0?P.UNKNOWN:ig(h.code);return new x(f,h.message||"")}(a);t=new So(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=ki(n,r.document.name),s=Qe(r.document.updateTime),a=r.document.createTime?Qe(r.document.createTime):q.min(),c=new je({mapValue:{fields:r.document.fields}}),u=Ye.newFoundDocument(i,s,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new lr(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=ki(n,r.document),s=r.readTime?Qe(r.readTime):q.min(),a=Ye.newNoDocument(i,s),c=r.removedTargetIds||[];t=new lr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=ki(n,r.document),s=r.removedTargetIds||[];t=new lr([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new Ml(i,s),c=r.targetId;t=new ko(c,a)}}return t}function lg(n,e){let t;if(e instanceof xn)t={update:_m(n,e.key,e.value)};else if(e instanceof Di)t={delete:Co(n,e.key)};else if(e instanceof vt)t={update:_m(n,e.key,e.data),updateMask:lI(e.fieldMask)};else{if(!(e instanceof Eo))return B();t={verify:Co(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let c=a.transform;if(c instanceof On)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof sn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof on)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof _r)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw B()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:JT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:B()}(n,e.precondition)),t}function tI(n,e){return n&&n.length>0?(X(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Qe(i.updateTime):Qe(s);return a.isEqual(q.min())&&(a=Qe(s)),new Nl(a,i.transformResults||[])}(t,e))):[]}function nI(n,e){return{documents:[ag(n,e.path)]}}function rI(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ag(n,i);let s=function(h){if(h.length!==0)return dg(ct.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(h){if(h.length!==0)return h.map(f=>function(T){return{field:or(T.field),direction:oI(T.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let c=Ul(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:t,parent:i}}function iI(n){let e=XT(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){X(r===1);let f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(g){let T=ug(g);return T instanceof ct&&Um(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(T=>function(D){return new yr(ar(D.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(T))}(t.orderBy));let c=null;t.limit&&(c=function(g){let T;return T=typeof g=="object"?g.value:g,zi(T)?null:T}(t.limit));let u=null;t.startAt&&(u=function(g){let T=!!g.before,S=g.values||[];return new gr(S,T)}(t.startAt));let h=null;return t.endAt&&(h=function(g){let T=!g.before,S=g.values||[];return new gr(S,T)}(t.endAt)),DT(e,i,a,s,c,"F",u,h)}function sI(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ug(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=ar(t.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=ar(t.unaryFilter.field);return we.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=ar(t.unaryFilter.field);return we.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=ar(t.unaryFilter.field);return we.create(a,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(n):n.fieldFilter!==void 0?function(t){return we.create(ar(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ct.create(t.compositeFilter.filters.map(r=>ug(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B()}}(t.compositeFilter.op))}(n):B()}function oI(n){return KT[n]}function aI(n){return QT[n]}function cI(n){return YT[n]}function or(n){return{fieldPath:n.canonicalString()}}function ar(n){return Ke.fromServerFormat(n.fieldPath)}function dg(n){return n instanceof we?function(t){if(t.op==="=="){if(om(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NAN"}};if(sm(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(om(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NOT_NAN"}};if(sm(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:or(t.field),op:aI(t.op),value:t.value}}}(n):n instanceof ct?function(t){let r=t.getFilters().map(i=>dg(i));return r.length===1?r[0]:{compositeFilter:{op:cI(t.op),filters:r}}}(n):B()}function lI(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function hg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Oi=class n{constructor(e,t,r,i,s=q.min(),a=q.min(),c=xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var jl=class{constructor(e){this.ht=e}};function uI(n){let e=iI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Io(e,e.limit,"L"):e}var Do=class{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(ue(e.integerValue));else if("doubleValue"in e){let r=ue(e.doubleValue);isNaN(r)?this.Rt(t,13):(this.Rt(t,15),Si(r)?t.Vt(0):t.Vt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Rt(t,20),typeof r=="string"&&(r=Mt(r)),t.ft(`${r.seconds||""}`),t.Vt(r.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(Lt(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Rt(t,45),t.Vt(r.latitude||0),t.Vt(r.longitude||0)}else"mapValue"in e?Lm(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):Mm(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):B()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let r=e.fields||{};this.Rt(t,55);for(let i of Object.keys(r))this.gt(i,t),this.dt(r[i],t)}bt(e,t){var r,i;let s=e.fields||{};this.Rt(t,53);let a="value",c=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Rt(t,15),t.Vt(ue(c)),this.gt(a,t),this.dt(s[a],t)}vt(e,t){let r=e.values||[];this.Rt(t,50);for(let i of r)this.dt(i,t)}St(e,t){this.Rt(t,37),U.fromName(e).path.forEach(r=>{this.Rt(t,60),this.Ct(r,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}};Do.Ft=new Do;var Gl=class{constructor(){this.ln=new zl}addToCollectionParentIndex(e,t){return this.ln.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Dn.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Dn.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}},zl=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ie(le.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ie(le.comparator)).toArray()}};var QS=new Uint8Array(0);var vm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tt=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};tt.DEFAULT_COLLECTION_PERCENTILE=10,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tt.DEFAULT=new tt(41943040,tt.DEFAULT_COLLECTION_PERCENTILE,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tt.DISABLED=new tt(-1,0,0);var xi=class n{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new n(0)}static Qn(){return new n(-1)}};function bm([n,e],[t,r]){let i=Y(n,t);return i===0?Y(e,r):i}var Wl=class{constructor(e){this.Gn=e,this.buffer=new Ie(bm),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();bm(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},Hl=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Pr(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Rr(t)}await this.Yn(3e5)})}},Kl=class{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(fr.oe);let r=new Wl(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(vm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vm):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,s,a,c,u,h,f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,t))).next(g=>(s=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),ir()<=H.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}};function dI(n,e){return new Kl(n,e)}var Ql=class{constructor(){this.changes=new Ft(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Yl=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var Jl=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ai(r.mutation,i,nt.empty(),Se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,t,r=K()){let i=Rn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=bi();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=Rn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,K()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=$t(),a=Ei(),c=function(){return Ei()}();return t.forEach((u,h)=>{let f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof vt)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ai(f.mutation,h,f.mutation.getFieldMask(),Se.now())):a.set(h.key,nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var g;return c.set(h,new Yl(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){let r=Ei(),i=new pe((a,c)=>a-c),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let c of a)c.keys().forEach(u=>{let h=t.get(u);if(h===null)return;let f=r.get(u)||nt.empty();f=c.applyToLocalView(h,f),r.set(u,f);let g=(i.get(c.batchId)||K()).add(u);i=i.insert(c.batchId,g)})}).next(()=>{let a=[],c=i.getReverseIterator();for(;c.hasNext();){let u=c.getNext(),h=u.key,f=u.value,g=Qm();f.forEach(T=>{if(!s.has(T)){let S=tg(t.get(T),r.get(T));S!==null&&g.set(T,S),s=s.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):C.resolve(Rn()),c=-1,u=s;return a.next(h=>C.forEach(h,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(f)?C.resolve():this.remoteDocumentCache.getEntry(e,f).next(T=>{u=u.insert(f,T)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,K())).next(f=>({batchId:c,changes:Km(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let i=bi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=bi();return this.indexManager.getCollectionParents(e,s).next(c=>C.forEach(c,u=>{let h=function(g,T){return new Nn(T,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,T)=>{a=a.insert(g,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,h)=>{let f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ye.newInvalidDocument(f)))});let c=bi();return a.forEach((u,h)=>{let f=s.get(u);f!==void 0&&Ai(f.mutation,h,nt.empty(),Se.now()),ta(t,h)&&(c=c.insert(u,h))}),c})}};var Xl=class{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return C.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Qe(i.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:uI(i.bundledQuery),readTime:Qe(i.readTime)}}(t)),C.resolve()}};var Zl=class{constructor(){this.overlays=new pe(U.comparator),this.Er=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){let r=Rn();return C.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Tt(e,t,s)}),C.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){let i=Rn(),s=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){let u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new pe((h,f)=>h-f),a=this.overlays.getIterator();for(;a.hasNext();){let h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Rn(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}let c=Rn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return C.resolve(c)}Tt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Vl(t,r));let s=this.Er.get(t);s===void 0&&(s=K(),this.Er.set(t,s)),this.Er.set(t,s.add(r.key))}};var eu=class{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}};var Vi=class{constructor(){this.dr=new Ie(ye.Ar),this.Rr=new Ie(ye.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){let r=new ye(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new ye(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){let t=new U(new le([])),r=new ye(t,e),i=new ye(t,e+1),s=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new U(new le([])),r=new ye(t,e),i=new ye(t,e+1),s=K();return this.Rr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new ye(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},ye=class{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return U.comparator(e.key,t.key)||Y(e.br,t.br)}static Vr(e,t){return Y(e.br,t.br)||U.comparator(e.key,t.key)}};var tu=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Ie(ye.Ar)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new Ol(s,t,r,i);this.mutationQueue.push(a);for(let c of i)this.vr=this.vr.add(new ye(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Fr(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new ye(t,0),i=new ye(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],a=>{let c=this.Cr(a.br);s.push(c)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(Y);return t.forEach(i=>{let s=new ye(i,0),a=new ye(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],c=>{r=r.add(c.br)})}),C.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;U.isDocumentKey(s)||(s=s.child(""));let a=new ye(new U(s),0),c=new Ie(Y);return this.vr.forEachWhile(u=>{let h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.br)),!0)},a),C.resolve(this.Mr(c))}Mr(e){let t=[];return e.forEach(r=>{let i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){X(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return C.forEach(t.mutations,i=>{let s=new ye(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){let r=new ye(t,0),i=this.vr.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var nu=class{constructor(e){this.Nr=e,this.docs=function(){return new pe(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(t))}getEntries(e,t){let r=$t();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ye.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=$t(),a=t.path,c=new U(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){let{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||wT(yT(f),r)<=0||(i.has(f.key)||ta(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,t,r,i){B()}Lr(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ru(this)}getSize(e){return C.resolve(this.size)}},ru=class extends Ql{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}};var iu=class{constructor(e){this.persistence=e,this.Br=new Ft(t=>Ku(t),Qu),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.kr=0,this.qr=new Vi,this.targetCount=0,this.Qr=xi.qn()}forEachTarget(e,t){return this.Br.forEach((r,i)=>t(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),C.resolve()}Un(e){this.Br.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new xi(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Un(t),C.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){let r=this.Br.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),C.resolve()}getMatchingKeysForTargetId(e,t){let r=this.qr.Sr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.qr.containsKey(t))}};var No=class{constructor(e,t){this.Kr={},this.overlays={},this.$r=new fr(0),this.Ur=!1,this.Ur=!0,this.Wr=new eu,this.referenceDelegate=e(this),this.Gr=new iu(this),this.indexManager=new Gl,this.remoteDocumentCache=function(i){return new nu(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new jl(t),this.jr=new Xl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new tu(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);let i=new su(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return C.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}},su=class extends yl{constructor(e){super(),this.currentSequenceNumber=e}},ou=class n{constructor(e){this.persistence=e,this.Zr=new Vi,this.Xr=null}static ei(e){return new n(e)}get ti(){if(this.Xr)return this.Xr;throw B()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),C.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.ti,r=>{let i=U.fromPath(r);return this.ni(e,i).next(s=>{s||t.removeEntry(i,q.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return C.or([()=>C.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}},Oo=class n{constructor(e,t){this.persistence=e,this.ri=new Ft(r=>TT(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=dI(this,t)}static ei(e,t){return new n(e,t)}Hr(){}Jr(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return C.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?C.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(c=>{c||(r++,s.removeEntry(a,q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),C.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fo(e.data.value)),t}ir(e,t,r){return C.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.ri.get(t);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var au=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=K(),i=K();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var cu=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var lu=class{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Cf()?8:vT(ve())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new cu;return this.ts(e,t,a).next(c=>{if(s.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>s.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(ir()<=H.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",sr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),C.resolve()):(ir()<=H.DEBUG&&V("QueryEngine","Query:",sr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(ir()<=H.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",sr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wt(t))):C.resolve())}Xi(e,t){if(um(t))return C.resolve(null);let r=wt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Io(t,null,"F"),r=wt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=K(...s);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{let h=this.rs(t,c);return this.ss(t,h,a,u.readTime)?this.Xi(e,Io(t,null,"F")):this.os(e,h,t,u)}))})))}es(e,t,r,i){return um(t)||i.isEqual(q.min())?C.resolve(null):this.Zi.getDocuments(e,r).next(s=>{let a=this.rs(t,s);return this.ss(t,a,r,i)?C.resolve(null):(ir()<=H.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sr(t)),this.os(e,a,t,gT(i,-1)).next(c=>c))})}rs(e,t){let r=new Ie(Wm(e));return t.forEach((i,s)=>{ta(e,s)&&(r=r.add(s))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,r){return ir()<=H.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",sr(t)),this.Zi.getDocumentsMatchingQuery(e,t,Dn.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var uu=class{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new pe(Y),this.cs=new Ft(s=>Ku(s),Qu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jl(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}};function hI(n,e,t,r){return new uu(n,e,t,r)}async function fg(n,e){let t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],c=[],u=K();for(let h of i){a.push(h.batchId);for(let f of h.mutations)u=u.add(f.key)}for(let h of s){c.push(h.batchId);for(let f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ts:h,removedBatchIds:a,addedBatchIds:c}))})})}function fI(n,e){let t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){let g=h.batch,T=g.keys(),S=C.resolve();return T.forEach(D=>{S=S.next(()=>f.getEntry(u,D)).next(L=>{let N=h.docVersions.get(D);X(N!==null),L.version.compareTo(N)<0&&(g.applyToRemoteDocument(L,h),L.isValidDocument()&&(L.setReadTime(h.commitVersion),f.addEntry(L)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=K();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function pg(n){let e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function pI(n,e){let t=j(n),r=e.snapshotVersion,i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;let c=[];e.targetChanges.forEach((f,g)=>{let T=i.get(g);if(!T)return;c.push(t.Gr.removeMatchingKeys(s,f.removedDocuments,g).next(()=>t.Gr.addMatchingKeys(s,f.addedDocuments,g)));let S=T.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(xe.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(g,S),function(L,N,z){return L.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(T,S,f)&&c.push(t.Gr.updateTargetData(s,S))});let u=$t(),h=K();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(mI(s,a,e.documentUpdates).next(f=>{u=f.Is,h=f.Es})),!r.isEqual(q.min())){let f=t.Gr.getLastRemoteSnapshotVersion(s).next(g=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return C.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.us=i,s))}function mI(n,e,t){let r=K(),i=K();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=$t();return t.forEach((c,u)=>{let h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Is:a,Es:i}})}function gI(n,e){let t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yI(n,e){let t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):t.Gr.allocateTargetId(r).next(a=>(i=new Oi(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function du(n,e,t){let r=j(n),i=r.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Pr(a))throw a;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function Tm(n,e,t){let r=j(n),i=q.min(),s=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){let g=j(u),T=g.cs.get(f);return T!==void 0?C.resolve(g.us.get(T)):g.Gr.getTargetData(h,f)}(r,a,wt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?i:q.min(),t?s:K())).next(c=>(wI(r,OT(e),c),{documents:c,ds:s})))}function wI(n,e,t){let r=n.ls.get(e)||q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ls.set(e,r)}var xo=class{constructor(){this.activeTargetIds=$T()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var hu=class{constructor(){this._o=new xo,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new xo,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var fu=class{uo(e){}shutdown(){}};var Vo=class{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.To)e(0)}Po(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var ho=null;function ol(){return ho===null?ho=function(){return 268435456+Math.round(2147483648*Math.random())}():ho++,"0x"+ho.toString(16)}var _I={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var pu=class{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}};var Oe="WebChannelConnection",mu=class extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,r,i,s,a){let c=ol(),u=this.No(t,r.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);let h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,s,a),this.Bo(t,u,h,i).then(f=>(V("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw dr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",i),f})}ko(t,r,i,s,a,c){return this.Oo(t,r,i,s,a)}Lo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,r){let i=_I[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,i){let s=ol();return new Promise((a,c)=>{let u=new tl;u.setWithCredentials(!0),u.listenOnce(nl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case _i.NO_ERROR:let f=u.getResponseJson();V(Oe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case _i.TIMEOUT:V(Oe,`RPC '${e}' ${s} timed out`),c(new x(P.DEADLINE_EXCEEDED,"Request time out"));break;case _i.HTTP_ERROR:let g=u.getStatus();if(V(Oe,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);let S=T?.error;if(S&&S.status&&S.message){let D=function(N){let z=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(z)>=0?z:P.UNKNOWN}(S.status);c(new x(D,S.message))}else c(new x(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new x(P.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{V(Oe,`RPC '${e}' ${s} completed.`)}});let h=JSON.stringify(i);V(Oe,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}qo(e,t,r){let i=ol(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=sl(),c=il(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Lo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;let f=s.join("");V(Oe,`Creating RPC '${e}' stream ${i}: ${f}`,u);let g=a.createWebChannel(f,u),T=!1,S=!1,D=new pu({Eo:N=>{S?V(Oe,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(T||(V(Oe,`Opening RPC '${e}' stream ${i} transport.`),g.open(),T=!0),V(Oe,`RPC '${e}' stream ${i} sending:`,N),g.send(N))},Ao:()=>g.close()}),L=(N,z,W)=>{N.listen(z,Q=>{try{W(Q)}catch(ae){setTimeout(()=>{throw ae},0)}})};return L(g,rr.EventType.OPEN,()=>{S||(V(Oe,`RPC '${e}' stream ${i} transport opened.`),D.So())}),L(g,rr.EventType.CLOSE,()=>{S||(S=!0,V(Oe,`RPC '${e}' stream ${i} transport closed`),D.Do())}),L(g,rr.EventType.ERROR,N=>{S||(S=!0,dr(Oe,`RPC '${e}' stream ${i} transport errored:`,N),D.Do(new x(P.UNAVAILABLE,"The operation could not be completed")))}),L(g,rr.EventType.MESSAGE,N=>{var z;if(!S){let W=N.data[0];X(!!W);let Q=W,ae=Q?.error||((z=Q[0])===null||z===void 0?void 0:z.error);if(ae){V(Oe,`RPC '${e}' stream ${i} received error:`,ae);let Me=ae.status,ie=function(_){let b=ge[_];if(b!==void 0)return ig(b)}(Me),I=ae.message;ie===void 0&&(ie=P.INTERNAL,I="Unknown error status: "+Me+" with message "+ae.message),S=!0,D.Do(new x(ie,I)),g.close()}else V(Oe,`RPC '${e}' stream ${i} received:`,W),D.vo(W)}}),L(c,rl.STAT_EVENT,N=>{N.stat===co.PROXY?V(Oe,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===co.NOPROXY&&V(Oe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.bo()},0),D}};function al(){return typeof document<"u"?document:null}function na(n){return new $l(n,!0)}var Mi=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}};var Mo=class{constructor(e,t,r,i,s,a,c,u){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Mi(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{let i=new x(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,t){let r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},gu=class extends Mo{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=eI(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Qe(a.readTime):q.min()}(e);return this.listener.R_(t,r)}V_(e){let t={};t.database=ql(this.serializer),t.addTarget=function(s,a){let c,u=a.target;if(c=Cl(u)?{documents:nI(s,u)}:{query:rI(s,u).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=sg(s,a.resumeToken);let h=Ul(s,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=Po(s,a.snapshotVersion.toTimestamp());let h=Ul(s,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);let r=sI(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){let t={};t.database=ql(this.serializer),t.removeTarget=e,this.c_(t)}},yu=class extends Mo{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return X(!!e.streamToken),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();let t=tI(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.y_(r,t)}w_(){let e={};e.database=ql(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>lg(this.serializer,r))};this.c_(t)}};var wu=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,Bl(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(P.UNKNOWN,s.toString())})}ko(e,t,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Bl(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(P.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}},_u=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Vt(t),this.C_=!1):V("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}};var vu=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{Mn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(u){let h=j(u);h.k_.add(4),await Wi(h),h.K_.set("Unknown"),h.k_.delete(4),await ra(h)}(this))})}),this.K_=new _u(r,i)}};async function ra(n){if(Mn(n))for(let e of n.q_)await e(!0)}async function Wi(n){for(let e of n.q_)await e(!1)}function mg(n,e){let t=j(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),td(t)?ed(t):Cr(t).s_()&&Zu(t,e))}function Xu(n,e){let t=j(n),r=Cr(t);t.B_.delete(e),r.s_()&&gg(t,e),t.B_.size===0&&(r.s_()?r.a_():Mn(t)&&t.K_.set("Unknown"))}function Zu(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Cr(n).V_(e)}function gg(n,e){n.U_.xe(e),Cr(n).m_(e)}function ed(n){n.U_=new Fl({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Cr(n).start(),n.K_.F_()}function td(n){return Mn(n)&&!Cr(n).i_()&&n.B_.size>0}function Mn(n){return j(n).k_.size===0}function yg(n){n.U_=void 0}async function vI(n){n.K_.set("Online")}async function bI(n){n.B_.forEach((e,t)=>{Zu(n,e)})}async function TI(n,e){yg(n),td(n)?(n.K_.O_(e),ed(n)):n.K_.set("Unknown")}async function II(n,e,t){if(n.K_.set("Online"),e instanceof So&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let c of s.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.B_.delete(c),i.U_.removeTarget(c))}(n,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lo(n,r)}else if(e instanceof lr?n.U_.$e(e):e instanceof ko?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(q.min()))try{let r=await pg(n.localStore);t.compareTo(r)>=0&&await function(s,a){let c=s.U_.it(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){let f=s.B_.get(h);f&&s.B_.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{let f=s.B_.get(u);if(!f)return;s.B_.set(u,f.withResumeToken(xe.EMPTY_BYTE_STRING,f.snapshotVersion)),gg(s,u);let g=new Oi(f.target,u,h,f.sequenceNumber);Zu(s,g)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Lo(n,r)}}async function Lo(n,e,t){if(!Pr(e))throw e;n.k_.add(1),await Wi(n),n.K_.set("Offline"),t||(t=()=>pg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await ra(n)})}function wg(n,e){return e().catch(t=>Lo(n,t,e))}async function ia(n){let e=j(n),t=an(e),r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;EI(e);)try{let i=await gI(e.localStore,r);if(i===null){e.L_.length===0&&t.a_();break}r=i.batchId,AI(e,i)}catch(i){await Lo(e,i)}_g(e)&&vg(e)}function EI(n){return Mn(n)&&n.L_.length<10}function AI(n,e){n.L_.push(e);let t=an(n);t.s_()&&t.f_&&t.g_(e.mutations)}function _g(n){return Mn(n)&&!an(n).i_()&&n.L_.length>0}function vg(n){an(n).start()}async function kI(n){an(n).w_()}async function SI(n){let e=an(n);for(let t of n.L_)e.g_(t.mutations)}async function RI(n,e,t){let r=n.L_.shift(),i=xl.from(r,e,t);await wg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ia(n)}async function PI(n,e){e&&an(n).f_&&await async function(r,i){if(function(a){return rg(a)&&a!==P.ABORTED}(i.code)){let s=r.L_.shift();an(r).__(),await wg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ia(r)}}(n,e),_g(n)&&vg(n)}async function Im(n,e){let t=j(n);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");let r=Mn(t);t.k_.add(3),await Wi(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await ra(t)}async function CI(n,e){let t=j(n);e?(t.k_.delete(2),await ra(t)):e||(t.k_.add(2),await Wi(t),t.K_.set("Unknown"))}function Cr(n){return n.W_||(n.W_=function(t,r,i){let s=j(t);return s.b_(),new gu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:vI.bind(null,n),mo:bI.bind(null,n),po:TI.bind(null,n),R_:II.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),td(n)?ed(n):n.K_.set("Unknown")):(await n.W_.stop(),yg(n))})),n.W_}function an(n){return n.G_||(n.G_=function(t,r,i){let s=j(t);return s.b_(),new yu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:kI.bind(null,n),po:PI.bind(null,n),p_:SI.bind(null,n),y_:RI.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await ia(n)):(await n.G_.stop(),n.L_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}var bu=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,c=new n(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function nd(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),Pr(n))return new x(P.UNAVAILABLE,`${e}: ${n}`);throw n}var Fo=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=bi(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var $o=class{constructor(){this.z_=new pe(U.comparator)}track(e){let t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):B():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}},br=class n{constructor(e,t,r,i,s,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new n(e,t,Fo.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ea(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var Tu=class{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}},Iu=class{constructor(){this.queries=Em(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){let i=j(t),s=i.queries;i.queries=Em(),s.forEach((a,c)=>{for(let u of c.J_)u.onError(r)})})(this,new x(P.ABORTED,"Firestore shutting down"))}};function Em(){return new Ft(n=>zm(n),ea)}async function rd(n,e){let t=j(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new Tu,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let c=nd(a,`Initialization of query '${sr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&sd(t)}async function id(n,e){let t=j(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function DI(n,e){let t=j(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let c of a.J_)c.ta(i)&&(r=!0);a.H_=i}}r&&sd(t)}function NI(n,e,t){let r=j(n),i=r.queries.get(e);if(i)for(let s of i.J_)s.onError(t);r.queries.delete(e)}function sd(n){n.X_.forEach(e=>{e.next()})}var Eu,Am;(Am=Eu||(Eu={})).na="default",Am.Cache="cache";var Li=class{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new br(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;let r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Eu.Cache}};var Uo=class{constructor(e){this.key=e}},Bo=class{constructor(e){this.key=e}},Au=class{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=K(),this.mutatedKeys=K(),this.Va=Wm(e),this.ma=new Fo(this.Va)}get fa(){return this.da}ga(e,t){let r=t?t.pa:new $o,i=t?t.ma:this.ma,s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1,u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{let T=i.get(f),S=ta(this.query,g)?g:null,D=!!T&&this.mutatedKeys.has(T.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations),N=!1;T&&S?T.data.isEqual(S.data)?D!==L&&(r.track({type:3,doc:S}),N=!0):this.ya(T,S)||(r.track({type:2,doc:S}),N=!0,(u&&this.Va(S,u)>0||h&&this.Va(S,h)<0)&&(c=!0)):!T&&S?(r.track({type:0,doc:S}),N=!0):T&&!S&&(r.track({type:1,doc:T}),N=!0,(u||h)&&(c=!0)),N&&(S?(a=a.add(S),s=L?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{ma:a,pa:r,ss:c,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let a=e.pa.j_();a.sort((f,g)=>function(S,D){let L=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return L(S)-L(D)}(f.type,g.type)||this.Va(f.doc,g.doc)),this.wa(r),i=i!=null&&i;let c=t&&!i?this.Sa():[],u=this.Ra.size===0&&this.current&&!i?1:0,h=u!==this.Aa;return this.Aa=u,a.length!==0||h?{snapshot:new br(this.query,e.ma,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new $o,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=K(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});let t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new Bo(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Uo(r))}),t}va(e){this.da=e.ds,this.Ra=K();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return br.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}},ku=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Su=class{constructor(e){this.key=e,this.Fa=!1}},Ru=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new Ft(c=>zm(c),ea),this.Oa=new Map,this.Na=new Set,this.La=new pe(U.comparator),this.Ba=new Map,this.ka=new Vi,this.qa={},this.Qa=new Map,this.Ka=xi.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}};async function OI(n,e,t=!0){let r=kg(n),i,s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await bg(r,e,t,!0),i}async function xI(n,e){let t=kg(n);await bg(t,e,!0,!1)}async function bg(n,e,t,r){let i=await yI(n.localStore,wt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t),c;return r&&(c=await VI(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&mg(n.remoteStore,i),c}async function VI(n,e,t,r,i){n.Ua=(g,T,S)=>async function(L,N,z,W){let Q=N.view.ga(z);Q.ss&&(Q=await Tm(L.localStore,N.query,!1).then(({documents:I})=>N.view.ga(I,Q)));let ae=W&&W.targetChanges.get(N.targetId),Me=W&&W.targetMismatches.get(N.targetId)!=null,ie=N.view.applyChanges(Q,L.isPrimaryClient,ae,Me);return Sm(L,N.targetId,ie.ba),ie.snapshot}(n,g,T,S);let s=await Tm(n.localStore,e,!0),a=new Au(e,s.ds),c=a.ga(s.documents),u=Ni.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(c,n.isPrimaryClient,u);Sm(n,t,h.ba);let f=new ku(e,t,a);return n.xa.set(e,f),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),h.snapshot}async function MI(n,e,t){let r=j(n),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(a=>!ea(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await du(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Xu(r.remoteStore,i.targetId),Pu(r,i.targetId)}).catch(Rr)):(Pu(r,i.targetId),await du(r.localStore,i.targetId,!0))}async function LI(n,e){let t=j(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Xu(t.remoteStore,r.targetId))}async function FI(n,e,t){let r=zI(n);try{let i=await function(a,c){let u=j(a),h=Se.now(),f=c.reduce((S,D)=>S.add(D.key),K()),g,T;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=$t(),L=K();return u.hs.getEntries(S,f).next(N=>{D=N,D.forEach((z,W)=>{W.isValidDocument()||(L=L.add(z))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,D)).next(N=>{g=N;let z=[];for(let W of c){let Q=zT(W,g.get(W.key).overlayedDocument);Q!=null&&z.push(new vt(W.key,Q,Fm(Q.value.mapValue),Ge.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,z,c)}).next(N=>{T=N;let z=N.applyToLocalDocumentSet(g,L);return u.documentOverlayCache.saveOverlays(S,N.batchId,z)})}).then(()=>({batchId:T.batchId,changes:Km(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let h=a.qa[a.currentUser.toKey()];h||(h=new pe(Y)),h=h.insert(c,u),a.qa[a.currentUser.toKey()]=h}(r,i.batchId,t),await Hi(r,i.changes),await ia(r.remoteStore)}catch(i){let s=nd(i,"Failed to persist write");t.reject(s)}}async function Tg(n,e){let t=j(n);try{let r=await pI(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Ba.get(s);a&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?X(a.Fa):i.removedDocuments.size>0&&(X(a.Fa),a.Fa=!1))}),await Hi(t,r,e)}catch(r){await Rr(r)}}function km(n,e,t){let r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.xa.forEach((s,a)=>{let c=a.view.ea(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){let u=j(a);u.onlineState=c;let h=!1;u.queries.forEach((f,g)=>{for(let T of g.J_)T.ea(c)&&(h=!0)}),h&&sd(u)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $I(n,e,t){let r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Ba.get(e),s=i&&i.key;if(s){let a=new pe(U.comparator);a=a.insert(s,Ye.newNoDocument(s,q.min()));let c=K().add(s),u=new Ao(q.min(),new Map,new pe(Y),a,c);await Tg(r,u),r.La=r.La.remove(s),r.Ba.delete(e),od(r)}else await du(r.localStore,e,!1).then(()=>Pu(r,e,t)).catch(Rr)}async function UI(n,e){let t=j(n),r=e.batch.batchId;try{let i=await fI(t.localStore,e);Eg(t,r,null),Ig(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Hi(t,i)}catch(i){await Rr(i)}}async function BI(n,e,t){let r=j(n);try{let i=await function(a,c){let u=j(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(g=>(X(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Eg(r,e,t),Ig(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Hi(r,i)}catch(i){await Rr(i)}}function Ig(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Eg(n,e,t){let r=j(n),i=r.qa[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function Pu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Ag(n,r)})}function Ag(n,e){n.Na.delete(e.path.canonicalString());let t=n.La.get(e);t!==null&&(Xu(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),od(n))}function Sm(n,e,t){for(let r of t)r instanceof Uo?(n.ka.addReference(r.key,e),qI(n,r)):r instanceof Bo?(V("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Ag(n,r.key)):B()}function qI(n,e){let t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(V("SyncEngine","New document in limbo: "+t),n.Na.add(r),od(n))}function od(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){let e=n.Na.values().next().value;n.Na.delete(e);let t=new U(le.fromString(e)),r=n.Ka.next();n.Ba.set(r,new Su(t)),n.La=n.La.insert(t,r),mg(n.remoteStore,new Oi(wt(Zo(t.path)),r,"TargetPurposeLimboResolution",fr.oe))}}async function Hi(n,e,t){let r=j(n),i=[],s=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,u)=>{a.push(r.Ua(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){let g=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);let g=au.zi(u.targetId,h);s.push(g)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(u,h){let f=j(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>C.forEach(h,T=>C.forEach(T.Wi,S=>f.persistence.referenceDelegate.addReference(g,T.targetId,S)).next(()=>C.forEach(T.Gi,S=>f.persistence.referenceDelegate.removeReference(g,T.targetId,S)))))}catch(g){if(!Pr(g))throw g;V("LocalStore","Failed to update sequence numbers: "+g)}for(let g of h){let T=g.targetId;if(!g.fromCache){let S=f.us.get(T),D=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(D);f.us=f.us.insert(T,L)}}}(r.localStore,s))}async function jI(n,e){let t=j(n);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());let r=await fg(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(c=>{c.forEach(u=>{u.reject(new x(P.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hi(t,r.Ts)}}function GI(n,e){let t=j(n),r=t.Ba.get(e);if(r&&r.Fa)return K().add(r.key);{let i=K(),s=t.Oa.get(e);if(!s)return i;for(let a of s){let c=t.xa.get(a);i=i.unionWith(c.view.fa)}return i}}function kg(n){let e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Tg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$I.bind(null,e),e.Ma.R_=DI.bind(null,e.eventManager),e.Ma.Wa=NI.bind(null,e.eventManager),e}function zI(n){let e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BI.bind(null,e),e}var Tr=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=na(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return hI(this.persistence,new lu,e.initialUser,this.serializer)}ja(e){return new No(ou.ei,this.serializer)}za(e){return new hu}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Tr.provider={build:()=>new Tr};var Cu=class extends Tr{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){X(this.persistence.referenceDelegate instanceof Oo);let r=this.persistence.referenceDelegate.garbageCollector;return new Hl(r,e.asyncQueue,t)}ja(e){let t=this.cacheSizeBytes!==void 0?tt.withCacheSize(this.cacheSizeBytes):tt.DEFAULT;return new No(r=>Oo.ei(r,t),this.serializer)}};var Fi=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>km(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jI.bind(null,this.syncEngine),await CI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Iu}()}createDatastore(e){let t=na(e.databaseInfo.databaseId),r=function(s){return new mu(s)}(e.databaseInfo);return function(s,a,c,u){return new wu(s,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new vu(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>km(this.syncEngine,t,0),function(){return Vo.p()?new Vo:new fu}())}createSyncEngine(e,t){return function(i,s,a,c,u,h,f){let g=new Ru(i,s,a,c,u,h);return f&&(g.$a=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=j(i);V("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Wi(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Fi.provider={build:()=>new Fi};var $i=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var Du=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new x(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(i,s){let a=j(i),c={documents:s.map(g=>Co(a.serializer,g))},u=await a.ko("BatchGetDocuments",a.serializer.databaseId,le.emptyPath(),c,s.length),h=new Map;u.forEach(g=>{let T=ZT(a.serializer,g);h.set(T.key.toString(),T)});let f=[];return s.forEach(g=>{let T=h.get(g.toString());X(!!T),f.push(T)}),f}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Di(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{let i=U.fromPath(r);this.mutations.push(new Eo(i,this.precondition(i)))}),await async function(r,i){let s=j(r),a={writes:i.map(c=>lg(s.serializer,c))};await s.Oo("Commit",s.serializer.databaseId,le.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw B();t=q.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new x(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(q.min())?Ge.exists(!1):Ge.updateTime(t):Ge.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(q.min()))throw new x(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ge.updateTime(t)}return Ge.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};var Nu=class{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.uu=r.maxAttempts,this.r_=new Mi(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{let e=new Du(this.datastore),t=this.hu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Pu(i)}))}).catch(r=>{this.Pu(r)})})}hu(e){try{let t=this.updateFunction(e);return!zi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pu(e){this.uu>0&&this.Tu(e)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(e)}Tu(e){if(e.name==="FirebaseError"){let t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!rg(t)}return!1}};var Ou=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Te.UNAUTHENTICATED,this.clientId=yo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{V("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=nd(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function cl(n,e){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Rm(n,e){n.asyncQueue.verifyOperationInProgress();let t=await WI(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Im(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Im(e.remoteStore,i)),n._onlineComponents=e}async function WI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await cl(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;dr("Error using user provided cache. Falling back to memory cache: "+t),await cl(n,new Tr)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await cl(n,new Cu(void 0));return n._offlineComponents}async function ad(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Rm(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Rm(n,new Fi))),n._onlineComponents}function HI(n){return ad(n).then(e=>e.syncEngine)}function KI(n){return ad(n).then(e=>e.datastore)}async function qo(n){let e=await ad(n),t=e.eventManager;return t.onListen=OI.bind(null,e.syncEngine),t.onUnlisten=MI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=xI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=LI.bind(null,e.syncEngine),t}function QI(n,e,t={}){let r=new rt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,h){let f=new $i({next:T=>{f.eu(),a.enqueueAndForget(()=>id(s,g));let S=T.docs.has(c);!S&&T.fromCache?h.reject(new x(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&T.fromCache&&u&&u.source==="server"?h.reject(new x(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(T)},error:T=>h.reject(T)}),g=new Li(Zo(c.path),f,{includeMetadataChanges:!0,ua:!0});return rd(s,g)}(await qo(n),n.asyncQueue,e,t,r)),r.promise}function YI(n,e,t={}){let r=new rt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,h){let f=new $i({next:T=>{f.eu(),a.enqueueAndForget(()=>id(s,g)),T.fromCache&&u.source==="server"?h.reject(new x(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(T)},error:T=>h.reject(T)}),g=new Li(c,f,{includeMetadataChanges:!0,ua:!0});return rd(s,g)}(await qo(n),n.asyncQueue,e,t,r)),r.promise}function Sg(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Pm=new Map;function Rg(n,e,t){if(!t)throw new x(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function JI(n,e,t,r){if(e===!0&&r===!0)throw new x(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Cm(n){if(!U.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Dm(n){if(U.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B()}function ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=sa(n);throw new x(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function XI(n,e){if(e<=0)throw new x(P.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}var jo=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Ir=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jo(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ll;switch(r.type){case"firstParty":return new fl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Pm.get(t);r&&(V("ComponentProvider","Removing Datastore"),Pm.delete(t),r.terminate())}(this),Promise.resolve()}};function cd(n,e,t,r={}){var i;let s=(n=ze(n,Ir))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Te.MOCK_USER;else{c=Ef(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new x(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Te(h)}n._authCredentials=new ul(new go(c,u))}}var cn=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Re=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},nn=class n extends cn{constructor(e,t,r){super(e,t,Zo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new U(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function oa(n,e,...t){if(n=te(n),Rg("collection","path",e),n instanceof Ir){let r=le.fromString(e,...t);return Dm(r),new nn(n,null,r)}{if(!(n instanceof Re||n instanceof nn))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(le.fromString(e,...t));return Dm(r),new nn(n.firestore,null,r)}}function Je(n,e,...t){if(n=te(n),arguments.length===1&&(e=yo.newId()),Rg("doc","path",e),n instanceof Ir){let r=le.fromString(e,...t);return Cm(r),new Re(n,null,new U(r))}{if(!(n instanceof Re||n instanceof nn))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(le.fromString(e,...t));return Cm(r),new Re(n.firestore,n instanceof nn?n.converter:null,new U(r))}}var Go=class{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Mi(this,"async_queue_retry"),this.fu=()=>{let r=al();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;let t=al();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;let t=al();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});let t=new rt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Pr(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;let i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Vt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let i=bu.createAndSchedule(this,e,t,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&B()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.du.indexOf(e);this.du.splice(t,1)}};function Nm(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var lt=class extends Ir{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Go,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Go(e),this._firestoreClient=void 0,await e}}};function Pg(n,e){let t=typeof n=="object"?n:bn(),r=typeof n=="string"?n:e||"(default)",i=ft(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=If("firestore");s&&cd(i,...s)}return i}function Ki(n){if(n._terminated)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ZI(n),n._firestoreClient}function ZI(n){var e,t,r;let i=n._freezeSettings(),s=function(c,u,h,f){return new wl(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Sg(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Ou(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){let u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}}(n._componentsProvider))}var Er=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(xe.fromBase64String(e))}catch(t){throw new x(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var Vn=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var ln=class{constructor(e){this._methodName=e}};var Ui=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}};var Bi=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}};var eE=/^__.*__$/,xu=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new vt(e,this.data,this.fieldMask,t,this.fieldTransforms):new xn(e,this.data,t,this.fieldTransforms)}},zo=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new vt(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function Cg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}var Wo=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ho(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Cg(this.Mu)&&eE.test(e))throw this.qu('Document fields cannot begin and end with "__"')}},Vu=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||na(e)}$u(e,t,r,i=!1){return new Wo({Mu:e,methodName:t,Ku:r,path:Ke.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Qi(n){let e=n._freezeSettings(),t=na(n._databaseId);return new Vu(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ld(n,e,t,r,i,s={}){let a=n.$u(s.merge||s.mergeFields?2:0,e,t,i);ud("Data must be an object, but it was:",a,r);let c=xg(r,a),u,h;if(s.merge)u=new nt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){let f=[];for(let g of s.mergeFields){let T=$u(e,g,t);if(!a.contains(T))throw new x(P.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Mg(f,T)||f.push(T)}u=new nt(f),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new xu(new je(c),u,h)}var qi=class n extends ln{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function Dg(n,e,t){return new Wo({Mu:3,Ku:e.settings.Ku,methodName:n._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}var Mu=class n extends ln{_toFieldTransform(e){return new Ci(e.path,new On)}isEqual(e){return e instanceof n}},Lu=class n extends ln{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){let t=Dg(this,e,!0),r=this.Uu.map(s=>Ln(s,t)),i=new sn(r);return new Ci(e.path,i)}isEqual(e){return e instanceof n&&St(this.Uu,e.Uu)}},Fu=class n extends ln{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){let t=Dg(this,e,!0),r=this.Uu.map(s=>Ln(s,t)),i=new on(r);return new Ci(e.path,i)}isEqual(e){return e instanceof n&&St(this.Uu,e.Uu)}};function Ng(n,e,t,r){let i=n.$u(1,e,t);ud("Data must be an object, but it was:",i,r);let s=[],a=je.empty();un(r,(u,h)=>{let f=dd(e,u,t);h=te(h);let g=i.Bu(f);if(h instanceof qi)s.push(f);else{let T=Ln(h,g);T!=null&&(s.push(f),a.set(f,T))}});let c=new nt(s);return new zo(a,c,i.fieldTransforms)}function Og(n,e,t,r,i,s){let a=n.$u(1,e,t),c=[$u(e,r,t)],u=[i];if(s.length%2!=0)throw new x(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<s.length;T+=2)c.push($u(e,s[T])),u.push(s[T+1]);let h=[],f=je.empty();for(let T=c.length-1;T>=0;--T)if(!Mg(h,c[T])){let S=c[T],D=u[T];D=te(D);let L=a.Bu(S);if(D instanceof qi)h.push(S);else{let N=Ln(D,L);N!=null&&(h.push(S),f.set(S,N))}}let g=new nt(h);return new zo(f,g,a.fieldTransforms)}function tE(n,e,t,r=!1){return Ln(t,n.$u(r?4:3,e))}function Ln(n,e){if(Vg(n=te(n)))return ud("Unsupported field value:",e,n),xg(n,e);if(n instanceof ln)return function(r,i){if(!Cg(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let c of r){let u=Ln(c,i.ku(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=Se.fromDate(r);return{timestampValue:Po(i.serializer,s)}}if(r instanceof Se){let s=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Po(i.serializer,s)}}if(r instanceof Ui)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Er)return{bytesValue:sg(i.serializer,r._byteString)};if(r instanceof Re){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ju(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Bi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.qu("VectorValues must only contain numeric values.");return Yu(c.serializer,u)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${sa(r)}`)}(n,e)}function xg(n,e){let t={};return Vm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):un(n,(r,i)=>{let s=Ln(i,e.Ou(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Vg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Se||n instanceof Ui||n instanceof Er||n instanceof Re||n instanceof ln||n instanceof Bi)}function ud(n,e,t){if(!Vg(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=sa(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function $u(n,e,t){if((e=te(e))instanceof Vn)return e._internalPath;if(typeof e=="string")return dd(n,e);throw Ho("Field path arguments must be of type string or ",n,!1,void 0,t)}var nE=new RegExp("[~\\*/\\[\\]]");function dd(n,e,t){if(e.search(nE)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vn(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ho(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new x(P.INVALID_ARGUMENT,c+n+u)}function Mg(n,e){return n.some(t=>t.isEqual(e))}var Ar=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Uu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(hd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Uu=class extends Ar{data(){return super.data()}};function hd(n,e){return typeof e=="string"?dd(n,e):e instanceof Vn?e._internalPath:e._delegate._internalPath}function Lg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var ji=class{},Ko=class extends ji{};function Fg(n,e,...t){let r=[];e instanceof ji&&r.push(e),r=r.concat(t),function(s){let a=s.filter(u=>u instanceof Bu).length,c=s.filter(u=>u instanceof Qo).length;if(a>1||a>0&&c>0)throw new x(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(let i of r)n=i._apply(n);return n}var Qo=class n extends Ko{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new n(e,t,r)}_apply(e){let t=this._parse(e);return Bg(e._query,t),new cn(e.firestore,e.converter,Dl(e._query,t))}_parse(e){let t=Qi(e.firestore);return function(s,a,c,u,h,f,g){let T;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){xm(g,f);let S=[];for(let D of g)S.push(Om(u,s,D));T={arrayValue:{values:S}}}else T=Om(u,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||xm(g,f),T=tE(c,a,g,f==="in"||f==="not-in");return we.create(h,f,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}};function $g(n,e,t){let r=e,i=hd("where",n);return Qo._create(i,r,t)}var Bu=class n extends ji{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new n(e,t)}_parse(e){let t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ct.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i,c=s.getFlattenedFilters();for(let u of c)Bg(a,u),a=Dl(a,u)}(e._query,t),new cn(e.firestore,e.converter,Dl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}};var qu=class n extends Ko{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new n(e,t,r)}_apply(e){return new cn(e.firestore,e.converter,Io(e._query,this._limit,this._limitType))}};function Ug(n){return XI("limit",n),qu._create("limit",n,"F")}function Om(n,e,t){if(typeof(t=te(t))=="string"){if(t==="")throw new x(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gm(e)&&t.indexOf("/")!==-1)throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);let r=e.path.child(le.fromString(t));if(!U.isDocumentKey(r))throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return im(n,new U(r))}if(t instanceof Re)return im(n,t._key);throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sa(t)}.`)}function xm(n,e){if(!Array.isArray(n)||n.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Bg(n,e){let t=function(i,s){for(let a of i)for(let c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}var Yo=class{convertValue(e,t="none"){switch(rn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return un(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ue(a.doubleValue));return new Bi(s)}convertGeoPoint(e){return new Ui(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Xo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ri(e));default:return null}}convertTimestamp(e){let t=Mt(e);return new Se(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=le.fromString(e);X(hg(r));let i=new bo(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(t)||Vt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function fd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var ju=class extends Yo{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}};var tn=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Gi=class extends Ar{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(hd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},ur=class extends Gi{data(e={}){return super.data(e)}},Jo=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new tn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ur(this._firestore,this._userDataWriter,r.key,r,new tn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{let u=new ur(i._firestore,i._userDataWriter,c.doc.key,c.doc,new tn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{let u=new ur(i._firestore,i._userDataWriter,c.doc.key,c.doc,new tn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:rE(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function rE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}function Ut(n){n=ze(n,Re);let e=ze(n.firestore,lt);return QI(Ki(e),n._key).then(t=>jg(e,n,t))}var kr=class extends Yo{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}};function pd(n){n=ze(n,cn);let e=ze(n.firestore,lt),t=Ki(e),r=new kr(e);return Lg(n._query),YI(t,n._query).then(i=>new Jo(e,r,n,i))}function ut(n,e,t){n=ze(n,Re);let r=ze(n.firestore,lt),i=fd(n.converter,e,t);return md(r,[ld(Qi(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ge.none())])}function dn(n,e,t,...r){n=ze(n,Re);let i=ze(n.firestore,lt),s=Qi(i),a;return a=typeof(e=te(e))=="string"||e instanceof Vn?Og(s,"updateDoc",n._key,e,t,r):Ng(s,"updateDoc",n._key,e),md(i,[a.toMutation(n._key,Ge.exists(!0))])}function qg(n,e){let t=ze(n.firestore,lt),r=Je(n),i=fd(n.converter,e);return md(t,[ld(Qi(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ge.exists(!1))]).then(()=>r)}function aa(n,...e){var t,r,i;n=te(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Nm(e[a])||(s=e[a],a++);let c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Nm(e[a])){let g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,h,f;if(n instanceof Re)h=ze(n.firestore,lt),f=Zo(n._key.path),u={next:g=>{e[a]&&e[a](jg(h,n,g))},error:e[a+1],complete:e[a+2]};else{let g=ze(n,cn);h=ze(g.firestore,lt),f=g._query;let T=new kr(h);u={next:S=>{e[a]&&e[a](new Jo(h,T,g,S))},error:e[a+1],complete:e[a+2]},Lg(n._query)}return function(T,S,D,L){let N=new $i(L),z=new Li(S,N,D);return T.asyncQueue.enqueueAndForget(async()=>rd(await qo(T),z)),()=>{N.eu(),T.asyncQueue.enqueueAndForget(async()=>id(await qo(T),z))}}(Ki(h),f,c,u)}function md(n,e){return function(r,i){let s=new rt;return r.asyncQueue.enqueueAndForget(async()=>FI(await HI(r),i,s)),s.promise}(Ki(n),e)}function jg(n,e,t){let r=t.docs.get(e._key),i=new kr(n);return new Gi(n,i,e._key,r,new tn(t.hasPendingWrites,t.fromCache),e.converter)}var iE={maxAttempts:5};function vi(n,e){if((n=te(n)).firestore!==e)throw new x(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}var Gu=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Qi(t)}get(t){let r=vi(t,this._firestore),i=new ju(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return B();let a=s[0];if(a.isFoundDocument())return new Ar(this._firestore,i,a.key,a,r.converter);if(a.isNoDocument())return new Ar(this._firestore,i,r._key,null,r.converter);throw B()})}set(t,r,i){let s=vi(t,this._firestore),a=fd(s.converter,r,i),c=ld(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,i);return this._transaction.set(s._key,c),this}update(t,r,i,...s){let a=vi(t,this._firestore),c;return c=typeof(r=te(r))=="string"||r instanceof Vn?Og(this._dataReader,"Transaction.update",a._key,r,i,s):Ng(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,c),this}delete(t){let r=vi(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=vi(e,this._firestore),r=new kr(this._firestore);return super.get(e).then(i=>new Gi(this._firestore,r,t._key,i._document,new tn(!1,!1),t.converter))}};function hn(n,e,t){n=ze(n,lt);let r=Object.assign(Object.assign({},iE),t);return function(s){if(s.maxAttempts<1)throw new x(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,a,c){let u=new rt;return s.asyncQueue.enqueueAndForget(async()=>{let h=await KI(s);new Nu(s.asyncQueue,h,c,a,u).cu()}),u.promise}(Ki(n),i=>e(new Gu(n,i)),r)}function Gg(){return new qi("deleteField")}function dt(){return new Mu("serverTimestamp")}function gd(...n){return new Lu("arrayUnion",n)}function zg(...n){return new Fu("arrayRemove",n)}(function(e,t=!0){(function(i){Sr=i})(Jt),qe(new be("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),c=new lt(new dl(r.getProvider("auth-internal")),new ml(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new x(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bo(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ae(Zp,"4.7.5",e),Ae(Zp,"4.7.5","esm2017")})();var sE=()=>navigator.standalone===!0||matchMedia("(display-mode: standalone)").matches,yd=()=>{let n=new Ot;return n.setCustomParameters({prompt:"select_account"}),n};async function oE(n,e,t){t&&await ut(Je(n,"merges",e),{anonToken:t,at:dt()})}function Wg(n,e,t){let r=null,i=setTimeout(()=>{r?.(),t(0)},2e4);return r=aa(Je(n,"merges",e),s=>{let a=s.data();a?.done&&(clearTimeout(i),r?.(),t(a.moved||0))},()=>{clearTimeout(i),t(0)}),r}async function aE(n){let e=n.currentUser;return e?.isAnonymous?e.getIdToken():null}async function wd(n,e,t){let r=await aE(n),i=await t();return await oE(e,i.user.uid,r),{status:r?"switched":"signed-in",uid:i.user.uid}}async function Hg(n,e){let t=n.currentUser;if(sE())return await oo(t,yd()),{status:"redirecting"};try{return await Jc(t,yd()),{status:"linked",uid:t.uid}}catch(r){if(r.code==="auth/credential-already-in-use"){let i=Ot.credentialFromError(r);return wd(n,e,()=>wi(n,i))}if(r.code==="auth/popup-blocked"||r.code==="auth/operation-not-supported-in-this-environment")return await oo(t,yd()),{status:"redirecting"};throw r}}async function Kg(n,e){try{let t=await Xc(n);return t?{status:"linked",uid:t.user.uid}:null}catch(t){if(t.code==="auth/credential-already-in-use"){let r=Ot.credentialFromError(t);return wd(n,e,()=>wi(n,r))}throw t}}async function Qg(n,e,t){return await Gc(n.currentUser,Nt.credential(e.trim(),t)),{status:"linked",uid:n.currentUser.uid}}function Yg(n,e,t,r){return wd(n,e,()=>Wc(n,t.trim(),r))}var Jg=(n,e)=>zc(n,e.trim()),_d=n=>Kc(n);async function Xg(n,e){await ut(Je(n,"deletions",e),{at:dt()})}function vd(n){if(!n||n.isAnonymous)return null;let e=n.providerData.some(t=>t.providerId==="google.com");return{email:n.email||n.providerData.find(t=>t.email)?.email||"",google:e}}var cE=["fuck","fucker","fucking","fucked","fuk","fck","motherfucker","shit","shitty","bullshit","shithead","cunt","twat","bitch","bitches","asshole","dickhead","cocksucker","whore","slut","bastard","wank","wanker","jizz","dildo","porn","porno","rape","rapist","nigger","nigga","chink","spic","kike","wetback","gook","raghead","towelhead","beaner","faggot","fag","dyke","tranny","retard","retarded"],lE=["fuck","shit","nigger","nigga","faggot"],bd=new Set(cE),uE={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t","@":"a",$:"s","!":"i"};function dE(n){return String(n).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[013457@$!]/g,e=>uE[e])}function Dr(n){let t=dE(n).split(/[^a-z]+/).filter(Boolean),r=s=>s.length>3&&s.endsWith("s")?s.slice(0,-1):s;if(t.some(s=>bd.has(s)||bd.has(r(s)))||t.some(s=>lE.some(a=>s.includes(a))))return!0;let i=t.join("");return!!(t.length>2&&t.every(s=>s.length===1)&&bd.has(i))}var Zg="ABCDEFGHJKLMNPQRSTUVWXYZ";function Td(){let n="";for(let e=0;e<4;e++)n+=Zg[Math.floor(Math.random()*Zg.length)];return n}function hE(n){return n.length<=3?n:n.endsWith("ies")&&n.length>4?n.slice(0,-3)+"y":/(ss|x|z|ch|sh)es$/.test(n)?n.slice(0,-2):n.endsWith("s")&&!n.endsWith("ss")&&!n.endsWith("us")&&!n.endsWith("is")?n.slice(0,-1):n}var fE=/[aeiouy]/;function pE(n){let e=n.match(/^(.+?)(ing|ed)$/);if(!e)return n;let t=e[1];return t.length<3||!fE.test(t)||t.endsWith("e")?n:/([b-df-hj-np-rtv-z])\1$/.test(t)&&!/(ll|ss|zz)$/.test(t)?t.slice(0,-1):(t.length===3&&/[^aeiou][aeiou][^aeiouwxy]$/.test(t)&&(t+="e"),t)}function Ue(n){return String(n).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/&/g," and ").replace(/[^a-z0-9 ]+/g," ").split(/\s+/).filter(Boolean).filter((e,t,r)=>!(t===0&&r.length>1&&(e==="the"||e==="a"||e==="an"))).map(hE).map(pE).join(" ")}function bt(n){return String(n).trim().replace(/\s+/g," ").slice(0,40)}function Id(n,e){return(e||[]).includes(Ue(n))}function ey(n){return n.length>=2&&n.every(e=>e.norm===n[0].norm)}function mE(n,e){let t=Array.from({length:e.length+1},(r,i)=>i);for(let r=1;r<=n.length;r++){let i=t[0];t[0]=r;for(let s=1;s<=e.length;s++){let a=t[s];t[s]=Math.min(t[s]+1,t[s-1]+1,i+(n[r-1]===e[s-1]?0:1)),i=a}}return t[e.length]}function gE(n,e){let t=Ue(n),r=Ue(e);if(t===r)return!0;let i=Math.min(t.length,r.length),s=mE(t,r);if(i>=5&&s<=1||i>=9&&s<=2)return!0;let a=t.split(" "),c=r.split(" ");return a.every(u=>c.includes(u))||c.every(u=>a.includes(u))}function Ed(n){let e={};n.forEach(r=>{let i=Ue(r);e[i]=(e[i]||0)+1});let t=Object.keys(e).sort((r,i)=>e[i]-e[r])[0];return n.find(r=>Ue(r)===t)}function Ad(n){if(n.length<2)return!1;let e=Ed(n);return n.every(t=>gE(t,e))&&!n.every(t=>Ue(t)===Ue(e))}var ty=`
Haunted Toaster
Llama Lawyer
Moon Pudding
Sock Volcano
Grandma's Jetpack
Disco Lobster
Spaghetti Tornado
Pickle Wizard
Banjo Zombie
Velvet Walrus
Ninja Accountant
Gravy Submarine
Pirate Dentist
Waffle Kingdom
Cactus Hug
Bigfoot's Diary
Jelly Skyscraper
Hamster Parliament
Turbo Grandpa
Marshmallow Lava
Possum Ballet
Laser Goat
Pancake Eclipse
Tuba Avalanche
Burrito Blizzard
Unicorn Plumber
Meatloaf Monument
Cosmic Hot Tub
Raccoon Detective
Tofu Thunder
Squid Mayor
Bubble Wrap Castle
Penguin Rodeo
Haunted Minivan
Spatula Duel
Goose Revolution
Karaoke Volcano
Noodle Lasso
Ferret Fashion Show
Mustache Comet
Pudding Tsunami
Robot Grandma
Zombie Bake Sale
Cheese Tornado
Sasquatch Spa Day
Glitter Swamp
Walrus Mustache
Trampoline Wedding
Lumberjack Ballerina
Pickle Rocket
Hiccup Machine
Bacon Satellite
Kazoo Orchestra
Corn Dog Cathedral
Moose Wedding
Disco Cactus
Taco Asteroid
Yeti Yard Sale
Chicken Nugget Throne
Polka Dot Shark
Llama Drama
Boomerang Soup
Sneezing Dragon
Hot Dog Hurricane
Ostrich Olympics
Jellybean Jury
Toaster Uprising
Cowboy Astronaut
Platypus Prom
Squirrel Heist
Gummy Bear Mafia
Cupcake Volcano
Rubber Duck Army
Narwhal Navy
Pogo Stick Pope
Sloth Marathon
Spaghetti Wrestler
Honeybee Opera
Butter Tornado
Flamingo Fistfight
Ketchup Comet
Pajama Pirate
Tiny Giant
Wombat Wizard
Haunted Hot Tub
Snail Racing
Clown Submarine
Bagpipe Ninja
Muffin Mutiny
Jelly Volcano
Owl Lawyer
Breakfast Whale
Mermaid Mechanic
Lunchbox Dragon
Disco Ball Moon
Hedgehog Hotel
Sardine Symphony
Couch Potato Olympics
Tornado Tea Party
Gnome Uprising
Pickleball Apocalypse
Cardboard Spaceship
Hamster Wheel Empire
Lasagna Lighthouse
Grumpy Cloud
Banana Telephone
Frog Prince Charming
Cotton Candy Swamp
Moonwalking Bear
Spork Duel
Toad Tuxedo
Bouncy Castle Siege
Chili Cook-Off Ghost
Yodeling Goat
Llama Llimo
Waffle Iron Giant
Disco Dinosaur
Turtle Turbo
Octopus Hugs
Popcorn Blizzard
Kangaroo Court
Unicycle Bear
Bigfoot Selfie
Penguin Tuxedo Rental
Haunted Lunch Lady
Pretzel Labyrinth
Bowling Ball Ballet
Goldfish Memory
Zombie Mailman
Volcano Ice Cream
Pirate Parrot Lawyer
Jelly Donut Galaxy
Raccoon Royalty
Chipmunk Choir
Tater Tot Tower
Llama Spit Fountain
Camel Carwash
Flying Meatball
Mashed Potato Mountain
Accordion Alien
Wiener Dog Parade
Sock Puppet Senate
Lava Lamp Lagoon
Dodo Revival
Gravy Boat Regatta
Hippo Ballerina
Tapioca Typhoon
Skunk Perfume
Pigeon Mafia
Sushi Rodeo
Bouncy Ball Earthquake
Yeti Spaghetti
Noodle Ninja
Moose Moustache
Fireworks Factory Cat
Pineapple Pizza Trial
Snowman Sunburn
Vampire Dentist
Mummy Spa Day
Werewolf Haircut
Ghost Pepper Ghost
Cyclops Optometrist
Tooth Fairy Strike
Easter Bunny Heist
Elf Union
Leprechaun Landlord
Dragon Babysitter
Troll Toll Booth
Wizard Wi-Fi
Robot Lullaby
Alien Grocery List
Martian Barbecue
Rocket Rollerskates
Time Machine Toaster
Invisible Sandwich
Shrinking Ray Gun
Thunder Pants
Sparkle Swamp Monster
Crocodile Tears
Hairy Potato
Bald Eagle Wig
Pickled Pumpkin
Tickle Monster
Burping Volcano
Snoring Mountain
Sleepwalking Turtle
Dancing Fridge
Singing Toilet
Grumpy Garden Gnome
Hula Hoop Hurricane
Glow Stick Jellyfish
Trombone Tornado
Nacho Avalanche
Meatball Moon Landing
Banana Peel Olympics
Bubble Gum Planet
Fuzzy Dice Kingdom
Gummy Worm Apocalypse
Sprinkle Storm
Cheeseburger Cathedral
`.trim().split(`
`).map(n=>n.trim()).filter(Boolean);var kd=`
Bumbershoot | an umbrella
Cattywampus | crooked, askew
Snollygoster | a sneaky, unprincipled person
Flibbertigibbet | a silly, flighty chatterbox
Hornswoggle | to trick or cheat
Collywobbles | butterflies in your stomach
Widdershins | counterclockwise
Codswallop | total nonsense
Absquatulate | to leave in a hurry
Kerfuffle | a fuss or commotion
Lollygag | to dawdle or goof off
Gobbledygook | confusing, meaningless talk
Brouhaha | a noisy uproar
Skedaddle | to run away quickly
Bamboozle | to fool or trick
Taradiddle | a small fib
Malarkey | foolish talk, nonsense
Bodacious | remarkable, impressive
Rapscallion | a mischievous rascal
Scallywag | a scamp or rascal
Hullabaloo | a loud commotion
Shenanigans | silly or sneaky mischief
Gallivant | to roam around for fun
Discombobulate | to confuse or fluster
Higgledy-piggledy | in a jumbled mess
Mollycoddle | to pamper too much
Namby-pamby | weak and wishy-washy
Nincompoop | a foolish person
Poppycock | nonsense
Rigmarole | a long, fussy procedure
Skullduggery | sneaky, underhanded dealings
Whippersnapper | a cheeky young person
Wishy-washy | indecisive, weak
Doohickey | a thingamajig, a gadget
Thingamabob | something whose name you forgot
Gubbins | odds and ends, gadgets
Hootenanny | a folk-music party
Ballyhoo | loud hype or publicity
Hobnob | to mingle with fancy people
Galoot | a big, clumsy person
Lummox | a clumsy oaf
Dingbat | a silly person
Doozy | something outstanding
Humdinger | a remarkable person or thing
Lickety-split | very fast
Willy-nilly | haphazardly
Hodgepodge | a random mixture
Mumbo jumbo | meaningless ritual or talk
Rambunctious | wild and noisy
Persnickety | fussy about small details
Curmudgeon | a grumpy old person
Fuddy-duddy | an old-fashioned fusspot
Gadzooks | an old exclamation of surprise
Zounds | an old exclamation of surprise
Balderdash | nonsense
Folderol | foolish nonsense
Fiddle-faddle | trivial nonsense
Skimble-skamble | rambling, confused
Hugger-mugger | secrecy, or a muddle
Argle-bargle | silly arguing
Flapdoodle | foolish talk
Gongoozler | someone who idly watches canal boats
Snickersnee | a large knife
Bibliophile | a lover of books
Borborygmus | a rumbling tummy
Defenestrate | to throw out of a window
Flummox | to baffle completely
Gormless | clueless
Hobbledehoy | an awkward teenage boy
Kakistocracy | rule by the worst people
Lugubrious | gloomy and mournful
Mugwump | someone who won't pick a side
Nudiustertian | the day before yesterday
Pandiculation | stretching while yawning
Quidnunc | a nosy gossip
Ragamuffin | a scruffy child
Sesquipedalian | using very long words
Tatterdemalion | a person in ragged clothes
Ululate | to howl or wail
Vamoose | to leave quickly
Wabbit | Scottish for worn out
Yammer | to chatter on and on
Zugzwang | a chess spot where any move hurts you
Abibliophobia | fear of running out of things to read
Bloviate | to talk pompously and at length
Dudgeon | a fit of indignation
Erinaceous | like a hedgehog
Fartlek | running with bursts of speed
Gardyloo | old warning shout before tossing slop out a window
Hoosegow | a jail
Impignorate | to pawn something
Jentacular | having to do with breakfast
Kerplunk | the sound of something dropping
Lethologica | forgetting the word you want
Mumpsimus | a stubborn old habit
Nibling | a niece or nephew
Oxter | an armpit
Pettifogger | someone who quibbles over trifles
Quockerwodger | a puppet on strings
Rumbustious | boisterous
Smellfungus | a constant complainer
Ugsome | loathsome
Vagitus | a newborn's first cry
Wamble | a queasy stomach rumble
Yonderly | absent-minded
Zoanthropy | believing you're an animal
Bindlestiff | a hobo carrying a bedroll
Cacophony | a harsh jumble of sounds
Donnybrook | a wild brawl
Euouae | a medieval music term made of only vowels
Fopdoodle | a foolish person
Gobemouche | someone who believes anything
Ishkabibble | who cares?
Jabberwocky | playful nonsense language
Kitsch | tacky decor or art
Lackadaisical | lazy and careless
Meldrop | a drop at the end of a runny nose
Noctambulist | a sleepwalker
Obstreperous | noisy and unruly
Philtrum | the groove above your upper lip
Quire | 24 sheets of paper
Rhubarb | a noisy argument, or a plant
Tintinnabulation | the ringing of bells
Uhtceare | worrying before dawn
Valetudinarian | someone obsessed with their health
Winklepicker | a shoe with a long pointy toe
Yarborough | a bridge hand with no card above a nine
Zarf | a holder for a hot cup
Aglet | the plastic tip of a shoelace
Dongle | a small plug-in gadget
Ferrule | the metal band on a pencil
Grawlix | symbols that stand in for swear words
Hoi polloi | the common people
Interrobang | a combined ?! punctuation mark
Jackanapes | a cheeky person
Kludge | a clumsy but working fix
Lagniappe | a little bonus gift
Muntin | a bar between window panes
Nurdle | a tiny dab of toothpaste
Ogdoad | a group of eight
Quincunx | five dots arranged like on dice
Rasorial | scratching the ground like a chicken
Sialoquent | spitting while talking
Tittle | the dot over an i
Uvula | the dangly thing at the back of your throat
Vellichor | the wistful feel of an old bookstore
Wamblecropt | sick to your stomach
Xylophagous | wood-eating
Yex | to hiccup
Zenzizenzizenzic | a number to the eighth power
Anfractuous | twisty and winding
Bumfuzzle | to confuse
Canoodle | to cuddle
Dillydally | to waste time
Eructation | a burp
Flabbergast | to astonish
Hijinks | rowdy fun
Inkhorn | showing off with fancy words
Jiggery-pokery | sneaky trickery
Kowtow | to bow down and grovel
Logorrhea | talking way too much
Mulligrubs | a sulky, grumpy mood
Nimrod | a mighty hunter, or a goof
Ostrobogulous | bizarre, unusual
Puckish | playfully mischievous
Ruckus | a noisy disturbance
Sockdolager | a decisive blow
Troglodyte | a cave dweller
Umbriferous | casting shade
Vermiform | shaped like a worm
Whirligig | a spinning toy
Yawp | a loud, harsh cry
Zoolatry | animal worship
Ambsace | the worst luck, double ones on dice
Blatherskite | a person who talks nonsense
Chuckleheaded | dim-witted
Diphthong | two vowel sounds gliding together
Elflock | a tangled lock of hair
Gewgaw | a showy trinket
Hornpipe | a lively sailor dance
Izzard | an old name for the letter Z
Jumbuck | Australian for sheep
Knickknack | a small ornament
Lickspittle | a groveling flatterer
Mooncalf | a dreamy, foolish person
Nidificate | to build a nest
Oubliette | a secret dungeon with a trapdoor
Pumpernickel | dark rye bread
Roister | to celebrate noisily
Snickerdoodle | a cinnamon sugar cookie
Toady | a suck-up
Ultracrepidarian | someone who gives opinions on everything
Vuvuzela | a long plastic horn
Wassail | a toast or holiday drink
Zwieback | a twice-baked biscuit
Bloviator | a windbag
Callithump | a noisy parade
Doodad | a gadget or trinket
Fandangle | a fancy ornament
Gazump | to outbid someone at the last minute
Hurly-burly | rowdy chaos
Jollification | merrymaking
Kibosh | to put a stop to something
Lollapalooza | an extraordinary thing
Mojo | a magic charm or confidence
Nabob | a very rich person
Oompah | the sound of a tuba
Palooka | a clumsy, bad boxer
Razzmatazz | showy flashiness
Shilly-shally | to be indecisive
Tchotchke | a little knickknack
Woebegone | looking sad and miserable
Zigzag | a line with sharp turns
`.trim().split(`
`).map(n=>n.split("|").map(e=>e.trim())).filter(([n,e])=>n&&e).map(([n,e])=>({word:n,def:e}));var ny=[{word:"Caffeinated Sloth"},{word:"Confused Platypus"},{word:"Sticky-Fingered Octopus"},{word:"Hangry Penguin"},{word:"One-Legged Flamingo"},{word:"Show-Off Narwhal"},{word:"Grumpy Hippo"},{word:"Nosy Giraffe"},{word:"Kickboxing Kangaroo"},{word:"Snoring Koala"},{word:"Dumpster Raccoon"},{word:"Panicked Skunk"},{word:"Huggable Porcupine"},{word:"Roadside Armadillo"},{word:"Startled Hedgehog"},{word:"Spitting Llama"},{word:"Thirsty Camel"},{word:"Mustached Walrus"},{word:"Greedy Pelican"},{word:"Vain Peacock"},{word:"Moody Chameleon"},{word:"Wobbly Jellyfish"},{word:"Galloping Seahorse"},{word:"Furious Pufferfish"},{word:"Slurping Anteater"},{word:"Upside-Down Bat"},{word:"Judgmental Owl"},{word:"Patient Vulture"},{word:"Giggling Hyena"},{word:"Handsome Warthog"},{word:"Lost Moose"},{word:"Stampeding Bison"},{word:"Overworked Beaver"},{word:"Hand-Holding Otter"},{word:"Playing-Dead Opossum"},{word:"Friendly Tarantula"},{word:"Sneaky Scorpion"},{word:"Sunburned Lobster"},{word:"Lonely Starfish"},{word:"Chunky Manatee"},{word:"Sunbathing Iguana"},{word:"Chest-Pounding Gorilla"},{word:"Dancing Lemur"},{word:"Paranoid Meerkat"},{word:"Hiding Ostrich"},{word:"Flashy Toucan"},{word:"Tattletale Parrot"},{word:"Inky Squid"},{word:"Toothy Shark"},{word:"Smiling Crocodile"},{word:"Drooling Komodo dragon"},{word:"Ancient Tortoise"},{word:"Speeding Snail"},{word:"Blinking Firefly"},{word:"Polite Praying mantis"},{word:"Fearless Honey badger"},{word:"Raging Wolverine"},{word:"Sticky Gecko"},{word:"Hardworking Dung beetle"},{word:"Squinting Mole"},{word:"Axolotl",def:"A Mexican salamander that stays a baby its whole life and can regrow its legs."},{word:"Aye-aye",def:"A Madagascar lemur that taps on trees with one long, skinny finger to find bugs."},{word:"Blobfish",def:"A deep-sea fish that looks like a melted face when it's pulled up to the surface."},{word:"Pangolin",def:"A mammal covered in scales that rolls into a ball like an armored pinecone."},{word:"Okapi",def:"A shy forest cousin of the giraffe with zebra stripes on its legs."},{word:"Tardigrade",def:'A microscopic "water bear" that can survive boiling, freezing and outer space.'},{word:"Star-nosed mole",def:"A mole with 22 pink tentacles on its nose."},{word:"Shoebill",def:"A giant stork with a beak shaped like a wooden shoe and a terrifying stare."},{word:"Dugong",def:`A gentle "sea cow," cousin of the manatee, with a tail like a dolphin's.`},{word:"Capybara",def:"The world's biggest rodent, famous for being calm around every other animal."},{word:"Fossa",def:"A cat-like hunter from Madagascar that's actually related to the mongoose."},{word:"Kakapo",def:"A chubby, flightless night parrot from New Zealand that smells like honey."},{word:"Quokka",def:"A little Australian wallaby that always looks like it's smiling."},{word:"Tapir",def:"A pig-shaped animal with a short, bendy trunk."},{word:"Proboscis monkey",def:"A monkey with an enormous droopy nose."},{word:"Mantis shrimp",def:"A shrimp that punches so fast it can crack aquarium glass."},{word:"Sea pig",def:"A deep-sea sea cucumber that walks on little legs."},{word:"Naked mole-rat",def:"A wrinkly, hairless rodent that lives about 30 years and almost never gets cancer."},{word:"Hagfish",def:"An eel-like fish that fills the water with slime when something grabs it."},{word:"Frogfish",def:"A lumpy fish that walks along the sea floor on its fins."},{word:"Ocean sunfish",def:"A giant, flat fish that looks like a swimming head. Also called a mola."},{word:"Gharial",def:"A crocodile with a long, skinny snout and a knob on the end."},{word:"Saiga",def:"An antelope with a big, floppy nose that filters dust."},{word:"Markhor",def:"A wild goat with long corkscrew horns."},{word:"Binturong",def:'A "bearcat" from Asia that smells like buttered popcorn.'},{word:"Cassowary",def:"A huge, dangerous bird with a helmet on its head and dagger claws."},{word:"Hoatzin",def:'A "stinkbird" whose chicks have claws on their wings.'},{word:"Potoo",def:"A night bird that looks exactly like a broken branch, with huge eyes."},{word:"Lyrebird",def:"An Australian bird that can copy chainsaws and camera clicks."},{word:"Dik-dik",def:"A tiny antelope about the size of a small dog."},{word:"Echidna",def:"A spiny Australian mammal that lays eggs."},{word:"Numbat",def:"A striped Australian animal that eats about 20,000 termites a day."},{word:"Wombat",def:"A stocky Australian burrower whose poop comes out in cubes."},{word:"Tasmanian devil",def:"A small, loud Australian animal with a scream that sounds like a horror movie."},{word:"Sugar glider",def:"A tiny marsupial that glides between trees like a living kite."},{word:"Slow loris",def:"A big-eyed, slow-moving primate with a venomous bite."},{word:"Tarsier",def:"A tiny primate whose eyes are each as big as its brain."},{word:"Pink fairy armadillo",def:"The world's smallest armadillo, with a pink shell."},{word:"Glass frog",def:"A frog with a see-through belly. You can watch its heart beat."},{word:"Goblin shark",def:"A deep-sea shark whose jaws shoot out of its face to grab food."},{word:"Anglerfish",def:"A deep-sea fish with a glowing lure dangling over its mouth."},{word:"Vampire squid",def:"Neither a vampire nor a squid. It flips its cape-like webbing over its body."},{word:"Dumbo octopus",def:"A deep-sea octopus with fins that look like Dumbo's ears."},{word:"Leafy sea dragon",def:"A seahorse relative that looks like a floating bunch of seaweed."},{word:"Basilisk lizard",def:"A lizard that can run across the top of water."},{word:"Thorny devil",def:"A spiky Australian lizard that drinks water through its skin."},{word:"Horned lizard",def:"A lizard that can squirt blood from its eyes at predators."},{word:"Bombardier beetle",def:"A beetle that sprays a boiling-hot chemical out of its rear."},{word:"Hercules beetle",def:"One of the world's biggest beetles, with a horn like a pair of pliers."},{word:"Atlas moth",def:"A giant moth whose wingtips look like snake heads."},{word:"Bullet ant",def:"An ant with one of the most painful stings in the world."},{word:"Orchid mantis",def:"A praying mantis that looks exactly like a pink flower."},{word:"Walking stick",def:"An insect that looks just like a twig."},{word:"Cicada",def:"A loud bug. Some kinds stay underground for 17 years before coming out."},{word:"Pistol shrimp",def:"A shrimp that snaps its claw so hard the bubble makes one of the loudest sounds in the sea."},{word:"Coconut crab",def:"The biggest crab on land, strong enough to crack open coconuts."},{word:"Japanese spider crab",def:"A crab whose legs can stretch about 12 feet from tip to tip."},{word:"Portuguese man o' war",def:"Looks like a jellyfish but is really a colony of tiny animals working as one."},{word:"Nudibranch",def:"A neon-colored sea slug."},{word:"Electric eel",def:"A fish that can zap with up to 800 volts. It's not even a real eel."},{word:"Lamprey",def:"A jawless fish with a round sucker mouth full of teeth."},{word:"Barreleye",def:"A deep-sea fish with a see-through head."},{word:"Gulper eel",def:"A deep-sea eel with a mouth bigger than its body."},{word:"Sea cucumber",def:"A squishy sea-floor animal that can shoot out its own insides to escape."},{word:"Beluga",def:'A white whale nicknamed the "sea canary" for its chirps and whistles.'},{word:"Babirusa",def:"A wild pig whose tusks grow up through the top of its snout."},{word:"Aardvark",def:'An African "earth pig" with a long tongue for slurping ants.'},{word:"Aardwolf",def:"A small hyena that eats termites instead of meat."},{word:"Maned wolf",def:"A South American wild dog that looks like a fox on stilts."},{word:"Fennec fox",def:"A tiny desert fox with enormous ears."},{word:"Red panda",def:"A fluffy, red tree-dweller. Not actually related to the giant panda."},{word:"Snow leopard",def:"A big cat of the mountains that wraps its long tail around itself like a scarf."},{word:"Pallas's cat",def:"A fluffy wild cat from Central Asia that always looks grumpy."},{word:"Serval",def:"An African wild cat with long legs and huge ears."},{word:"Caracal",def:"A wild cat with tufted ears that can leap up and swat birds out of the air."},{word:"Ocelot",def:"A spotted wild cat of the Americas."},{word:"Coati",def:"A raccoon cousin with a long nose and a striped tail it holds straight up."},{word:"Kinkajou",def:'A "honey bear" that hangs from trees by its tail.'},{word:"Sloth bear",def:"A shaggy bear that slurps up termites like a vacuum."},{word:"Matamata",def:"A turtle that looks like a pile of dead leaves."},{word:"Alligator snapping turtle",def:"A huge turtle that wiggles a worm-shaped tongue to lure fish into its mouth."},{word:"Mudskipper",def:"A fish that walks on land and climbs trees."},{word:"Mimic octopus",def:"An octopus that impersonates other animals, like sea snakes and lionfish."},{word:"Hummingbird",def:"The only bird that can fly backwards."},{word:"Secretary bird",def:"A tall African bird of prey that stomps on snakes."},{word:"Harpy eagle",def:"A massive rainforest eagle that hunts monkeys and sloths."},{word:"Kiwi",def:"A flightless New Zealand bird with nostrils at the tip of its beak."},{word:"Puffin",def:'A seabird with a colorful beak, nicknamed the "sea parrot."'},{word:"Blue-footed booby",def:"A seabird that shows off its bright blue feet in a dance."},{word:"Frigatebird",def:"A seabird that puffs up a giant red balloon on its throat."},{word:"Marabou stork",def:'A bald, scruffy stork nicknamed the "undertaker bird."'},{word:"Emu",def:'A giant flightless Australian bird. Australia once lost a "war" against them.'},{word:"Roadrunner",def:"A desert bird that runs up to about 20 miles per hour."},{word:"Pygmy marmoset",def:"The world's smallest monkey, small enough to sit on your finger."},{word:"Mandrill",def:"A monkey with a bright red and blue face."},{word:"Gelada",def:"A grass-eating monkey with a bright red patch on its chest."},{word:"Uakari",def:"A monkey with a bright red, bald face."},{word:"Colugo",def:'A "flying lemur" that neither flies nor is a lemur. It glides.'},{word:"Jerboa",def:"A tiny desert hopper with huge ears and kangaroo legs."},{word:"Chinchilla",def:"A rodent with the softest, thickest fur of any land animal."},{word:"Muntjac",def:'A small "barking deer" with little fangs.'},{word:"Gerenuk",def:"A long-necked antelope that stands on its back legs to eat."},{word:"Yak",def:"A shaggy mountain ox from the Himalayas."},{word:"Musk ox",def:"A shaggy Arctic animal that lived alongside woolly mammoths."},{word:"Wildebeest",def:"An African antelope that migrates in herds of over a million."},{word:"Pronghorn",def:"The fastest land animal in North America."},{word:"Olm",def:"A blind, pale cave salamander that can go years without eating."},{word:"Hellbender",def:'A giant American salamander nicknamed the "snot otter."'},{word:"Caecilian",def:"A legless amphibian that looks like a giant earthworm."},{word:"Giant isopod",def:"A deep-sea cousin of the pill bug that can grow over a foot long."}];var ry=[{word:"Hail Mary"},{word:"Buzzer beater"},{word:"Hat trick"},{word:"Walk-off home run"},{word:"Foam finger"},{word:"Rally cap"},{word:"Kiss cam"},{word:"Cooler dunk"},{word:"The wave"},{word:"Team mascot"},{word:"Instant replay"},{word:"Photo finish"},{word:"Seventh-inning stretch"},{word:"Ballpark hot dog"},{word:"Stadium nachos"},{word:"Cheerleader pyramid"},{word:"Tailgate"},{word:"Trash talk"},{word:"Victory lap"},{word:"Participation trophy"},{word:"Sweatband"},{word:"Mouthguard"},{word:"Referee whistle"},{word:"Shin guards"},{word:"Rally towel"},{word:"Pickleball"},{word:"Cornhole"},{word:"Dodgeball"},{word:"Tug of war"},{word:"Curling"},{word:"Sumo"},{word:"Bowling"},{word:"Mini golf"},{word:"Table tennis"},{word:"Shuffleboard"},{word:"Lacrosse"},{word:"Rodeo"},{word:"Bull riding"},{word:"Figure skating"},{word:"Synchronized swimming"},{word:"Pole vault"},{word:"Marathon"},{word:"Relay baton"},{word:"Gold medal"},{word:"Slam dunk"},{word:"Fumble"},{word:"Air ball"},{word:"Red card"},{word:"Hole in one"},{word:"Gutter ball"},{word:"Strikeout"},{word:"Halftime show"},{word:"Belly flop"},{word:"Cannonball"},{word:"Monster truck rally"},{word:"Demolition derby"},{word:"Soapbox derby"},{word:"Four square"},{word:"Hopscotch"},{word:"Arm wrestling"},{word:"Cheese rolling",def:"Chasing a giant wheel of cheese down a dangerously steep hill in England."},{word:"Chess boxing",def:"A match that switches back and forth between rounds of chess and rounds of boxing."},{word:"Bog snorkeling",def:"Swimming two lengths of a muddy bog trench in a snorkel and flippers. Held in Wales."},{word:"Wife carrying",def:"A Finnish race where men carry their wives through an obstacle course."},{word:"Toe wrestling",def:"Arm wrestling, but with toes. There's a world championship in England."},{word:"Underwater hockey",def:"Pushing a puck along the bottom of a pool with tiny sticks while holding your breath."},{word:"Sepak takraw",def:"Volleyball played with feet, knees and heads instead of hands. Big in Southeast Asia."},{word:"Bossaball",def:"Volleyball on a giant inflatable trampoline court, with a DJ playing."},{word:"Extreme ironing",def:"Ironing a shirt in a ridiculous place: on a mountain, underwater, while skydiving."},{word:"Kabaddi",def:'A team tag game from India where the raider has to keep chanting "kabaddi" on one breath.'},{word:"Jai alai",def:"A lightning-fast ball game played by catching and flinging the ball with a curved wicker basket."},{word:"Hurling",def:"An ancient Irish stick-and-ball game, often called the fastest game on grass."},{word:"Zorbing",def:"Rolling down a hill inside a giant see-through ball."},{word:"Roller derby",def:"A full-contact race around an oval track on roller skates."},{word:"Lawn mower racing",def:"Racing souped-up riding lawn mowers around a dirt track."},{word:"Bed racing",def:"Teams push beds on wheels through town in a race."},{word:"Gurning",def:"A contest to pull the ugliest face. The world championship is in England."},{word:"Pumpkin regatta",def:"Racing across a lake while sitting inside a hollowed-out giant pumpkin."},{word:"Elephant polo",def:"Polo played while riding elephants."},{word:"Camel racing",def:"Racing camels across the desert, often steered by tiny robot jockeys."},{word:"Pigeon racing",def:"Releasing homing pigeons far from home and timing who flies back fastest."},{word:"Unicycle hockey",def:"Hockey played entirely on unicycles."},{word:"Segway polo",def:"Polo played on two-wheeled scooters instead of horses."},{word:"Kite fighting",def:"Flying kites with sharp strings to cut down your rivals' kites."},{word:"Volcano boarding",def:"Sledding down the side of an active volcano in Nicaragua."},{word:"Sandboarding",def:"Snowboarding down giant sand dunes."},{word:"Joggling",def:"Jogging while juggling. Drop a ball and you have to go back for it."},{word:"Rock paper scissors championship",def:"Yes, there are real tournaments with real prize money."},{word:"Air guitar championship",def:"Playing a guitar that isn't there, judged on stage. The world finals are in Finland."},{word:"Hot dog eating contest",def:"Eating as many hot dogs as possible in ten minutes."},{word:"Log rolling",def:"Two people stand on a floating log and spin it until one falls in. Also called birling."},{word:"Axe throwing",def:"Throwing axes at a wooden target, like darts but louder."},{word:"Caber toss",def:"A Scottish event where you flip a whole tree trunk end over end."},{word:"Haggis hurling",def:"Throwing a haggis, a Scottish sheep-stomach pudding, as far as you can."},{word:"Worm charming",def:"Coaxing as many worms as possible out of the ground in 30 minutes, without digging."},{word:"Pea shooting",def:"Blowing dried peas through a tube at a target. There's a world championship."},{word:"Shin kicking",def:"An old English sport where two players hold shoulders and kick each other's shins."},{word:"Egg throwing",def:"Tossing a raw egg to a partner farther and farther apart until it breaks."},{word:"Wellie wanging",def:"Throwing a rubber rain boot as far as possible."},{word:"Phone throwing",def:"A Finnish contest for throwing an old mobile phone the farthest."},{word:"Cardboard boat race",def:"Racing boats made only of cardboard and tape until they sink."},{word:"Outhouse racing",def:"Racing outhouses on skis or wheels, with one teammate sitting inside."},{word:"Sheepdog trials",def:"Dogs herd sheep through gates and into a pen, guided only by whistles."},{word:"Swamp soccer",def:"Soccer played knee-deep in a muddy bog."},{word:"Underwater rugby",def:"Rugby in a deep pool, with a ball that sinks and goals on the bottom."},{word:"Skijoring",def:"Skiing while being pulled by a galloping horse or a dog."},{word:"Dog sled race",def:"Teams of dogs pulling a sled hundreds of miles across snow."},{word:"Mountain unicycling",def:"Riding a unicycle down rocky mountain trails."},{word:"Parkour",def:"Running through a city by jumping, climbing and vaulting over everything in the way."},{word:"Slacklining",def:"Walking and doing tricks on a loose strap tied between two points."},{word:"Flagpole sitting",def:"A 1920s fad of sitting on top of a flagpole for days or weeks."},{word:"Quadball",def:"A real sport inspired by a famous fictional flying broom game, played on foot with a pole between your legs."},{word:"Sport stacking",def:"Stacking and unstacking plastic cups in set patterns as fast as possible."},{word:"Yo-yo championship",def:"Competitive yo-yo tricks set to music."},{word:"Speedcubing",def:"Solving a twisty puzzle cube as fast as possible. The record is a few seconds."},{word:"Hobby horsing",def:"A Finnish sport of riding stick horses over jumps and through dressage routines."},{word:"Footgolf",def:"Golf played by kicking a soccer ball into giant holes."},{word:"Bubble soccer",def:"Soccer played while wearing a giant inflatable bubble."},{word:"Tejo",def:"A Colombian game of throwing metal discs at targets packed with tiny explosive pops."},{word:"Pato",def:"Argentina's national sport: basketball on horseback with a ball that has handles."},{word:"Fierljeppen",def:"Dutch pole vaulting over canals. You climb the pole as it tips."},{word:"Kin-ball",def:"Three teams play at once with a ball about four feet wide."},{word:"Korfball",def:"A Dutch game like basketball where every team has men and women, and no dribbling."},{word:"Teqball",def:"Soccer skills played over a curved table, like table tennis with feet."},{word:"Hornussen",def:"A Swiss sport where one team smacks a puck with a whip-like bat and the other blocks it with wooden paddles."},{word:"Molkky",def:"A Finnish lawn game of knocking over numbered wooden pins."},{word:"Kubb",def:`A lawn game nicknamed "Viking chess": throw sticks to knock over the other team's blocks.`},{word:"Petanque",def:"A French game of tossing steel balls as close as possible to a little wooden ball."},{word:"Croquet",def:"Knocking wooden balls through hoops with a mallet, usually on a very nice lawn."},{word:"Ostrich racing",def:"Riding ostriches in a race. Mostly the ostrich decides."},{word:"Pig racing",def:"Piglets racing around a little track at county fairs."},{word:"Frog jumping contest",def:"Frogs compete for the longest jump. California has held one since 1928."},{word:"Snail racing",def:"Snails race across a damp cloth. The world championship is in England."},{word:"Turtle racing",def:"Turtles crawl outward from the middle of a circle. First to the edge wins."},{word:"Drone racing",def:"Pilots race tiny camera drones through obstacle courses at high speed, wearing goggles."},{word:"Pillow fight league",def:"Organized pillow fighting with real rules and referees."},{word:"Finger pulling",def:"A Bavarian sport: two people hook middle fingers and pull across a table."},{word:"Blanket toss",def:"An Inuit celebration where people use a big skin blanket to toss someone high into the air."},{word:"Arctic high kick",def:"Kicking a hanging ball with one foot, as high as possible, then landing on that same foot."},{word:"Bandy",def:"Ice hockey's cousin, played with a ball on a rink the size of a soccer field."},{word:"Shinty",def:"A Scottish stick-and-ball game related to hurling."},{word:"Skeleton",def:"Sliding head-first down an icy track on a tiny sled at about 80 miles per hour."},{word:"Luge",def:"Sliding feet-first down an icy track, lying on your back."},{word:"Biathlon",def:"Cross-country skiing mixed with target shooting."},{word:"Modern pentathlon",def:"Fencing, swimming, riding, running and shooting, all in one event."},{word:"Race walking",def:"Walking as fast as possible without ever running. The hips do a lot of work."},{word:"Synchronized diving",def:"Two divers doing the exact same dive at the exact same time."},{word:"Trampoline",def:"An Olympic sport of flips and twists on a trampoline, way higher than your backyard."},{word:"Rhythmic gymnastics",def:"Gymnastics with ribbons, hoops, balls and clubs."},{word:"Steeplechase",def:"A long race with hurdles and a water pit to jump over every lap."},{word:"Hammer throw",def:"Spinning around and throwing a heavy ball on a wire."},{word:"Dressage",def:"Horses performing precise dance-like moves. Sometimes called horse ballet."},{word:"Canoe polo",def:"Water polo played from kayaks."},{word:"Footvolley",def:"Volleyball on the beach played with soccer skills. Born in Brazil."},{word:"Disc golf",def:"Golf played by throwing a flying disc into metal chain baskets."},{word:"Ultimate disc",def:"A team sport of passing a flying disc into an end zone. Played on the honor system, with no referees."},{word:"Roundnet",def:"Teams bounce a small ball off a round trampoline-like net at their feet."},{word:"Marbles championship",def:"Kids still compete for the national marbles title every year in New Jersey."},{word:"Jacks",def:"Bouncing a ball and scooping up little metal stars before it bounces twice."},{word:"Competitive tag",def:"Tag played on an obstacle course in timed rounds. It's on TV."},{word:"Sumo suit wrestling",def:"Wrestling in giant foam sumo costumes."},{word:"Underwater basketball",def:"Shooting a sinking ball into a hoop on the bottom of a pool."},{word:"Ice swimming",def:"Racing in water cut out of frozen lakes."},{word:"Stone skipping",def:"Skipping flat rocks across water. The record is 88 skips."},{word:"Cow pie throwing",def:"Tossing dried cow pies for distance at country fairs."},{word:"Watermelon seed spitting",def:"Spitting a watermelon seed as far as you can. Real contests, real records."},{word:"Gaga ball",def:"Dodgeball's cousin, played inside an eight-sided pit by hitting the ball at people's knees."},{word:"Tetherball",def:"Two players whack a ball on a rope around a pole until it wraps all the way."}];var iy=[{word:"Vampire"},{word:"Werewolf"},{word:"Mummy"},{word:"Zombie"},{word:"Ghost"},{word:"Bigfoot"},{word:"Yeti"},{word:"Loch Ness Monster"},{word:"Swamp creature"},{word:"Mad scientist"},{word:"Haunted house"},{word:"Full moon"},{word:"Silver bullet"},{word:"Garlic necklace"},{word:"Coffin"},{word:"Cobweb"},{word:"Bat swarm"},{word:"Graveyard"},{word:"Fog machine"},{word:"Creaky door"},{word:"Neck bolts"},{word:"Flying saucer"},{word:"Little green men"},{word:"Alien abduction"},{word:"Crop circle"},{word:"Tractor beam"},{word:"Shrink ray"},{word:"Giant ants"},{word:"Sea serpent"},{word:"The Blob"},{word:"Slime"},{word:"Tentacle"},{word:"Jump scare"},{word:"Scream queen"},{word:"Drive-in"},{word:"3D glasses"},{word:"Popcorn bucket"},{word:"Angry mob with torches"},{word:"Lab assistant"},{word:"Lightning storm"},{word:"Bubbling potion"},{word:"Cauldron"},{word:"Black cat"},{word:"Skeleton"},{word:"Haunted doll"},{word:"Crystal ball"},{word:"Invisible man"},{word:"Headless horseman"},{word:"Gargoyle"},{word:"Dragon"},{word:"Kraken"},{word:"Cyclops"},{word:"Minotaur"},{word:"Medusa"},{word:"Troll under the bridge"},{word:"Ogre"},{word:"Bogeyman"},{word:"Banshee"},{word:"Robot uprising"},{word:"Atomic lizard"},{word:"Fifty-foot woman"},{word:"Dracula"},{word:"Frankenstein"},{word:"Double feature"},{word:"Sunburned Vampire"},{word:"Vegan Werewolf"},{word:"Overcaffeinated Zombie"},{word:"Ticklish Mummy"},{word:"Shy Ghost"},{word:"Bald Bigfoot"},{word:"Seasick Sea Serpent"},{word:"Homesick Alien"},{word:"Nearsighted Cyclops"},{word:"Grumpy Gargoyle"},{word:"Retired Dracula"},{word:"Influencer Ghost"},{word:"Lactose-intolerant Blob"},{word:"Sleepwalking Zombie"},{word:"Unpaid Lab Assistant"},{word:"Hangry Ogre"},{word:"Toddler Kraken"},{word:"Ghost with hiccups"},{word:"Werewolf at the groomer"},{word:"Mummy in a hot tub"},{word:"Zombie on a treadmill"},{word:"Vampire at the dentist"},{word:"Yeti in flip-flops"},{word:"Alien at the DMV"},{word:"Haunted vending machine"},{word:"Possessed robot vacuum"},{word:"Cursed fruitcake"},{word:"Evil garden gnome"},{word:"Kraken in a kiddie pool"},{word:"Ghost who's afraid of the dark"},{word:"Dragon with a cold"},{word:"Mad scientist's mom"},{word:"Cyclops with a monocle"},{word:"Insomniac Vampire"},{word:"Werewolf in a sweater"},{word:"Mummy with a paper cut"},{word:"Medusa's bad hair day"},{word:"Frankenstein's grandma"},{word:"Bigfoot's blurry selfie"},{word:"Moody swamp creature"},{word:"Pope Lick Monster",def:"A goat-man said to live under a railroad trestle in Louisville, Kentucky. Kentucky's own monster."},{word:"Hopkinsville Goblins",def:"In 1955, a Kentucky farm family swore little silver goblins surrounded their house all night. The town still holds a festival for them."},{word:"Herrington Lake Monster",def:"A Kentucky lake creature with a pig-like snout that people have reported since the 1970s."},{word:"Mothman",def:"A winged figure with glowing red eyes reported in Point Pleasant, West Virginia, in 1966. The town has a shiny statue of it."},{word:"Sheepsquatch",def:"A white, woolly, horned beast reported in the West Virginia hills. Bigfoot, but a sheep."},{word:"Flatwoods Monster",def:"A 10-foot creature with a spade-shaped head reported in Flatwoods, West Virginia, in 1952."},{word:"Chupacabra",def:'The "goat sucker," blamed for mysterious goat troubles in Puerto Rico and Mexico.'},{word:"Jersey Devil",def:"A hoofed, winged creature said to haunt the Pine Barrens of New Jersey for 250 years."},{word:"Jackalope",def:"A jackrabbit with antelope horns. It's Wyoming's favorite joke and is on postcards everywhere."},{word:"Hodag",def:'A horned, grinning beast "discovered" in Wisconsin in 1893. It was a hoax, and the town loves it anyway.'},{word:"Squonk",def:"A Pennsylvania folk creature so ashamed of its warty skin that it cries itself into a puddle when caught."},{word:"Snallygaster",def:"A dragon-like beast from Maryland folklore, half bird and half reptile."},{word:"Wampus cat",def:"An Appalachian legend: a cat-like creature that prowls the hills at night."},{word:"Dover Demon",def:"A big-headed creature with glowing eyes, seen three times in one weekend in Dover, Massachusetts, in 1977."},{word:"Lizard Man",def:"A seven-foot lizard man reported in a South Carolina swamp in 1988."},{word:"Skunk ape",def:"Florida's Bigfoot, famous mainly for how bad it smells."},{word:"Fouke Monster",def:"Arkansas's hairy swamp beast. It inspired a 1972 movie."},{word:"Goatman",def:"A half-man, half-goat said to roam the back roads of Maryland."},{word:"Beast of Bray Road",def:"A werewolf-like creature reported along a country road in Wisconsin."},{word:"Grassman",def:"Ohio's version of Bigfoot."},{word:"Batsquatch",def:"A winged Bigfoot reported near Mount St. Helens in Washington."},{word:"Ogopogo",def:"A lake monster said to live in Okanagan Lake in Canada."},{word:"Champ",def:"Lake Champlain's monster. Vermont and New York both claim it."},{word:"Bessie",def:"Lake Erie's monster."},{word:"Altamaha-ha",def:"A river monster said to swim in Georgia's Altamaha River. Locals call it Altie."},{word:"Bear Lake Monster",def:"A Utah lake monster made up by a newspaperman in 1868. He admitted it decades later, but people still look."},{word:"Gloucester sea serpent",def:"In 1817, hundreds of people in Massachusetts reported a giant sea serpent swimming in their harbor."},{word:"Thunderbird",def:"A giant bird from Native American legends whose wingbeats make thunder."},{word:"Pukwudgie",def:"A knee-high troublemaker from Wampanoag legends in Massachusetts."},{word:"Fresno Nightcrawler",def:"Two white legs with no body on top, caught strolling past security cameras in California."},{word:"Rougarou",def:"The Cajun werewolf of the Louisiana bayou."},{word:"Hidebehind",def:"A lumberjack tall tale: a beast that always hides behind whatever you look at, so no one has ever seen it."},{word:"Sidehill gouger",def:"A tall-tale animal with legs shorter on one side, so it can only walk around hills one way."},{word:"Agropelter",def:"A tall-tale critter that throws branches at lumberjacks from the treetops."},{word:"Kappa",def:"A Japanese river creature with a dish of water on its head. Bow to it, it bows back, and it spills its power."},{word:"Tengu",def:"A long-nosed mountain goblin from Japanese folklore."},{word:"Rokurokubi",def:"A Japanese folk monster who looks normal by day. At night, her neck stretches across the room."},{word:"Nopperabo",def:"A Japanese ghost with a perfectly blank face: no eyes, no nose and no mouth."},{word:"Kasa-obake",def:"A haunted old umbrella from Japanese tales that hops on one leg and has one big eye."},{word:"Umibozu",def:"A giant, bald sea spirit that rises up next to ships in Japanese tales."},{word:"Tsuchinoko",def:"A chubby snake from Japanese folklore that's said to jump several feet. Towns offer rewards for catching one."},{word:"Jiangshi",def:'The Chinese "hopping vampire." Its arms stick straight out and it hops everywhere it goes.'},{word:"Nian",def:"A Chinese New Year beast scared off by firecrackers and the color red. It's why there are firecrackers."},{word:"Qilin",def:"A gentle, scaly, hoofed creature from Chinese legend, said to appear when a wise ruler is born."},{word:"Baba Yaga",def:"A Slavic witch who lives in a hut that walks around on giant chicken legs."},{word:"Domovoi",def:"A Slavic house spirit who lives behind the stove. Leave it treats or it gets cranky."},{word:"Kelpie",def:"A Scottish water horse that tricks riders into hopping on, then dives into the lake."},{word:"Selkie",def:"A seal from Scottish and Irish tales that slips off its skin to walk on land as a person."},{word:"Brownie",def:"A little Scottish house helper who does your chores at night if you leave out porridge."},{word:"Will-o'-the-wisp",def:"Ghostly floating lights over swamps that lead travelers the wrong way."},{word:"Golem",def:"A clay giant from Jewish folklore, brought to life to protect the town of Prague."},{word:"Changeling",def:"A fairy baby secretly swapped for a human one in old European tales."},{word:"Tatzelwurm",def:"A stubby lizard-cat from the Alps, reported by Swiss and Austrian hikers."},{word:"Wolpertinger",def:"A Bavarian critter: a rabbit with antlers, wings and fangs. Gift shops sell stuffed ones."},{word:"Yowie",def:"Australia's Bigfoot."},{word:"Bunyip",def:"A swamp monster from Aboriginal Australian legends, known for its booming call at night."},{word:"Drop bear",def:'A made-up "killer koala" that Australians warn tourists about, just for fun.'},{word:"Mapinguari",def:"A giant sloth-like creature from Amazon legends, with one eye and a mouth on its belly."},{word:"Mokele-mbembe",def:"A dinosaur-like creature said to live in the rivers of the Congo."},{word:"Tikbalang",def:"A Filipino trickster with a horse's head who makes travelers walk in circles."},{word:"Grootslang",def:"A giant elephant-snake said to guard a cave full of diamonds in South Africa."},{word:"Lusca",def:"Half shark and half octopus, said to lurk in the underwater caves of the Bahamas."},{word:"Ahool",def:"A giant bat said to live in the jungles of Java."},{word:"Basilisk",def:"A legendary serpent king whose stare could turn you to stone."},{word:"Cockatrice",def:"A two-legged dragon with a rooster's head."},{word:"Manticore",def:"A Persian legend with a lion's body, a human face and a scorpion's tail."},{word:"Hydra",def:"A Greek serpent that grows two new heads for every one you cut off."},{word:"Chimera",def:"A Greek monster that's a lion, a goat and a snake all in one body."},{word:"Griffin",def:"Half eagle and half lion. In legends, it guards treasure."},{word:"Gremlin",def:"Tiny creatures that World War II pilots blamed for breaking their planes."},{word:"Poltergeist",def:`German for "noisy ghost." It's blamed for slamming doors and flying plates.`},{word:"Doppelganger",def:"Your exact look-alike. Old folklore says meeting yours is bad news."},{word:"Bloop",def:"A super-loud underwater sound recorded in 1997. Scientists later said it was an iceberg cracking."},{word:"Surgeon's photo",def:"The famous 1934 Loch Ness Monster photo. It was really a toy submarine with a fake head."},{word:"Cottingley Fairies",def:"1917 photos of fairies that two English girls faked with paper cutouts. They fooled the man who wrote Sherlock Holmes."},{word:"Theremin",def:'The spooky "wooOOooo" instrument in old sci-fi movies, played by waving your hands without touching it.'},{word:"Foley artist",def:"The person who makes movie sounds. Snapping celery is how you get monster bone crunches."},{word:"Stop-motion",def:"Moving a model a tiny bit for each frame. It's how the old movies made skeleton sword fights."},{word:"Creature suit",def:"The hot rubber suit an actor sweats inside to play the monster."},{word:"Wilhelm scream",def:"The same stock scream used in hundreds of movies since 1951. Once you hear it, you'll hear it everywhere."},{word:"Fright insurance",def:"A 1958 movie stunt that promised every ticket buyer $1,000 if they died of fright."},{word:"Percepto",def:"A 1959 movie gimmick that buzzed certain theater seats during the scary parts."},{word:"Spook show",def:"Live midnight ghost shows in old theaters: lights out, then glowing ghosts flew over the crowd on strings."},{word:"Ghost light",def:"A single bulb left on an empty theater stage all night. Some say it keeps the ghosts happy."},{word:"Pareidolia",def:"Seeing faces in things that aren't faces, like outlets, clouds and the front of a car."}];var sy=[{word:"Pager"},{word:"Dial-up internet"},{word:"Floppy disk"},{word:"Mixtape"},{word:"Scrunchie"},{word:"Frosted tips"},{word:"Butterfly clips"},{word:"Overalls"},{word:"Mood ring"},{word:"Slap bracelet"},{word:"Virtual pet"},{word:"Glow-in-the-dark stars"},{word:"Inflatable chair"},{word:"Jelly sandals"},{word:"Platform sneakers"},{word:"Light-up sneakers"},{word:"Fanny pack"},{word:"Bucket hat"},{word:"Windbreaker"},{word:"Tie-dye"},{word:"Flannel shirt"},{word:"Boom box"},{word:"Portable CD player"},{word:"VHS tape"},{word:"Be kind, rewind"},{word:"Video rental store"},{word:"Answering machine"},{word:"Cordless phone"},{word:"Phone book"},{word:"Disposable camera"},{word:"Chat room"},{word:"Screen name"},{word:"Away message"},{word:"Computer lab"},{word:"Gel pens"},{word:"Hall pass"},{word:"Locker combination"},{word:"Detention"},{word:"School dance"},{word:"Yearbook photo"},{word:"Class president"},{word:"Principal\u2019s office"},{word:"TV cart in class"},{word:"Overhead projector"},{word:"Mall food court"},{word:"Arcade"},{word:"Laser tag"},{word:"Inline skates"},{word:"Skate park"},{word:"Boy band"},{word:"Girl power"},{word:"Walkie-talkie"},{word:"Bowl cut"},{word:"Curtain bangs"},{word:"Choker necklace"},{word:"Puka shell necklace"},{word:"Lava-style lamp"},{word:"Y2K"},{word:"Talk to the hand"},{word:"Mullet"},{word:"Unplugged Pager"},{word:"Tangled Mixtape"},{word:"Forgotten Virtual Pet"},{word:"Grounded Teenager"},{word:"Overconfident Mullet"},{word:"Squeaky Inline Skates"},{word:"Melted Gel Pen"},{word:"Busy Signal"},{word:"Jammed VHS Tape"},{word:"Unrewound Rental"},{word:"Late Library Book"},{word:"Lost Hall Pass"},{word:"Stuck Locker"},{word:"Snapped Slap Bracelet"},{word:"Moody Mood Ring"},{word:"Deflated Inflatable Chair"},{word:"Skipping CD"},{word:"Interrupted Dial-up"},{word:"Retired Boy Band"},{word:"Awkward School Dance"},{word:"Blurry Yearbook Photo"},{word:"Sunburned Frosted Tips"},{word:"Overdue Video Rental"},{word:"Frozen Computer"},{word:"Dead Walkie-talkie"},{word:"Mom Picking Up the Phone"},{word:"Crunchy Hair Gel"},{word:"Leaky Fanny Pack"},{word:"One Strap Undone"},{word:"Exploding Glitter Pen"},{word:"Panicking Over Y2K"},{word:"Fourth Copy of the Same Mixtape"},{word:"Dancing Substitute Teacher"},{word:"Puffy-Painted T-shirt"},{word:"Erased Answering Machine"},{word:"Cafeteria Mystery Meat"},{word:"Disposable Camera With One Shot Left"},{word:"Phone Cord Stretched Across the Kitchen"},{word:"Video Game Cartridge You Blow Into"},{word:"Unbeatable Water Level"},{word:"Stereogram",def:"A poster of colorful noise that hides a 3D picture, if you cross your eyes just right."},{word:"Dancing baby",def:"A 3D baby doing the cha-cha that became one of the first internet memes, in 1996."},{word:"Hamster dance",def:"A 1998 web page of dancing hamster GIFs looping to a sped-up song. Millions visited."},{word:"Webring",def:"A chain of fan websites linked in a circle, with \u201Cnext site\u201D and \u201Cprevious site\u201D buttons."},{word:"Under construction GIF",def:"The little digging-worker animation every homemade web page put at the top."},{word:"Hit counter",def:"A number on old web pages that bragged how many visitors had stopped by."},{word:"Guestbook",def:"Where visitors to your homemade web page signed their names and said hi."},{word:"Pager code",def:"Number messages sent to beepers, like 143 for \u201CI love you.\u201D"},{word:"Dial-up handshake",def:"The screeching, beeping song a modem sang while connecting to the internet."},{word:"Milk caps",def:"Cardboard discs from milk bottle tops, collected and flipped in a playground game."},{word:"Slammer",def:"The heavy plastic or metal disc you threw to flip the stack in the milk caps game."},{word:"Snap bracelet recall",def:"Slap bracelets were banned at many schools after kids cut themselves on the metal inside."},{word:"Talking furry gadget",def:"A furry toy that \u201Clearned\u201D to talk, and that people swore was listening to them."},{word:"Cassette rewound with a pencil",def:"Saving batteries by spinning the tape back with a pencil in the hole."},{word:"Calling card",def:"A prepaid card with a long code you punched in to make long-distance calls."},{word:"Collect call",def:"Asking the person you called to pay for it. Kids snuck messages into the name they gave."},{word:"Three-way calling",def:"Getting a third friend on the line, usually to secretly listen in."},{word:"Car phone",def:"A phone wired into the car, often with a cord, and very expensive."},{word:"Encyclopedia on CD-ROM",def:"A whole set of encyclopedias on one shiny disc, with tiny grainy videos."},{word:"Screensaver",def:"Flying toasters, pipes and starfields that kept old monitors from burning in."},{word:"Desktop wallpaper",def:"The picture behind your icons. Usually rolling green hills or a band."},{word:"Cartoon paper clip helper",def:"A cartoon paper clip that popped up to ask if you were writing a letter."},{word:"Typing tutor",def:"Computer lab games that taught you to type, sometimes by blasting falling letters."},{word:"Died of dysentery",def:"The classic school computer game where your pioneer family kept getting sick on the trail."},{word:"Bubble test sheet",def:"The answer sheet where you filled in little bubbles with a No. 2 pencil."},{word:"No. 2 pencil",def:"The only pencil the bubble test machine could read."},{word:"Book fair",def:"When the school library filled with posters, gel pens and books for one magical week."},{word:"Scratch-and-sniff stickers",def:"Stickers that smelled like pizza or grape when you scratched them."},{word:"Puffy paint",def:"Squeezable paint that dried in raised, glittery lines on T-shirts."},{word:"Hair crimper",def:"A hot tool that pressed hair into tiny zigzag waves."},{word:"Zip-off pants",def:"Pants whose legs unzipped at the knee to turn into shorts."},{word:"Tearaway pants",def:"Track pants with snaps all the way down the sides, made to rip off in one pull."},{word:"Shiny team jacket",def:"Big puffy satin team jackets every kid wanted in winter."},{word:"Tattoo choker",def:"A stretchy plastic necklace that looked like a tattoo around your neck."},{word:"Body glitter",def:"Roll-on sparkles for your face and arms. It never fully came off."},{word:"Spiky hair gel",def:"Gel strong enough to stand your hair straight up for a whole school day."},{word:"Zigzag headband",def:"A plastic comb-tooth headband that left lines in your hair."},{word:"Clear soda",def:"For a short while, colas were made totally see-through. It did not last."},{word:"Cracker stack lunch kit",def:"A lunch tray of crackers, cheese and meat circles you built yourself."},{word:"Squeeze yogurt tube",def:"Yogurt you slurped out of a tube. Even better frozen."},{word:"Fruit leather",def:"Fruit squished flat and rolled into a sticky sheet."},{word:"Ring pop",def:"A giant candy jewel on a plastic ring that you wore while you ate it."},{word:"Green ketchup",def:"In 2000, ketchup came in green and purple for kids. Really."},{word:"Frozen yogurt shop",def:"The place to go after the movie, with toppings by the ounce."},{word:"Glamour photo studio",def:"A mall studio that gave you feathery hair, a denim jacket and a soft-focus portrait."},{word:"Mall kiosk",def:"The little cart in the middle of the mall selling cell phone covers and pretzels."},{word:"Cybercafe",def:"A coffee shop where you paid by the hour to use the internet."},{word:"Beeper on the belt",def:"Wearing your pager clipped on your belt so everyone knew how important you were."},{word:"Game console cartridge",def:"The plastic game you blew into when it didn\u2019t work. Blowing never helped."},{word:"Cheat code",def:"A secret button combo that gave you extra lives."},{word:"Strategy guide",def:"A thick book with maps and secrets for one video game."},{word:"Link cable",def:"The cord that connected two handheld games so friends could trade or battle."},{word:"Trading card craze",def:"Kids got so wild about trading cards that some schools banned them."},{word:"Yo-yo tricks",def:"Walk the dog, rock the baby, around the world. Huge in the late 90s."},{word:"Spinning top battle",def:"Kids launching tops into a plastic arena to knock each other out."},{word:"Bean bag critters",def:"Small stuffed animals people collected because they were sure they\u2019d be worth a fortune."},{word:"Heart tag protector",def:"Collectors kept the tags on their bean bag animals safe in little plastic cases."},{word:"Sock puppet mascot",def:"A pet store website\u2019s talking sock puppet became a famous 90s ad star."},{word:"Talk show",def:"Afternoon TV where guests yelled and the crowd chanted the host\u2019s name."},{word:"Infomercial",def:"A half-hour TV ad with an amazed audience and a phone number. But wait, there\u2019s more!"},{word:"Friday night sitcoms",def:"A whole night of family sitcoms that whole families watched together."},{word:"Saturday morning cartoons",def:"Hours of cartoons in your pajamas with a bowl of sugary cereal."},{word:"Mail-in rebate",def:"Cutting out a barcode and mailing it in to get money back weeks later."},{word:"Newspaper TV guide",def:"The only way to know what was on TV that week."},{word:"Taped off the radio",def:"Waiting with your finger on Record for your favorite song to come on."},{word:"CD club",def:"Get 12 CDs for a penny, then accidentally owe money for years."},{word:"Jewel case",def:"The clear plastic CD box whose hinges always snapped."},{word:"Anti-skip button",def:"A portable CD player feature so it didn\u2019t skip if you walked. It still skipped."},{word:"Wedding line dance",def:"Every wedding and gym class in 1996 did the same arm-waving, hip-shaking dance."},{word:"The Running Man",def:"A dance move where you run in place without going anywhere."},{word:"Y2K bunker",def:"Some families stocked up on canned food in case computers broke on Jan 1, 2000."},{word:"Millennium bug",def:"The worry that computers would think 2000 was 1900 and stop working."},{word:"Memphis design",def:"Wild 80s and 90s style of squiggles, triangles and confetti in neon colors."},{word:"Trapper-style binder",def:"A Velcro binder with folders inside, covered in stickers and doodles."},{word:"Furry pen",def:"A pen with a fuzzy pom-pom on top, mostly used for twirling."},{word:"Folded-note football",def:"A note folded into a triangle and flicked across the classroom."},{word:"Cootie catcher",def:"A folded-paper fortune teller you worked with your fingers."}];var Tt={open:{id:"open",art:"logo",free:!0},daily:{id:"daily",art:"bolts",free:!0},zoo:{id:"zoo",art:"zoo-art",logo:"zoo-logo",free:!0,words:ny,confetti:["#F2A33A","#E0567A","#58A86B","#EAF4E9","#2F7A4C"]},sports:{id:"sports",art:"sports-art",logo:"sports-logo",free:!0,words:ry,confetti:["#FFB21E","#E23A4E","#23A35A","#F4F1E6","#FFFFFF"]},monsters:{id:"monsters",art:"monsters-art",logo:"monsters-logo",plus:!0,words:iy,confetti:["#86D23A","#FFC23D","#7A3CE0","#FFF6E0","#A3203A"]},nineties:{id:"nineties",art:"nineties-art",logo:"nineties-logo",plus:!0,draft:!0,words:sy,confetti:["#FF2E93","#14C8C8","#FFE14D","#7B3FF2","#111111"]}},oy=["open","zoo","sports","daily"],ay=["monsters","nineties"],It=n=>n&&Tt[n.pack]?.logo?n.pack:null;function cy(n,e,t=Math.random){let r=n.map((s,a)=>a);for(let s=r.length-1;s>0;s--){let a=Math.floor(t()*(s+1));[r[s],r[a]]=[r[a],r[s]]}let i=r.slice(0,e).map(s=>n[s]);if(e>1&&i.every(s=>s.def)){let s=n.filter(a=>!a.def);s.length&&(i[e-1]=s[Math.floor(t()*s.length)])}return i.map(s=>s.def?{word:s.word,def:s.def}:{word:s.word,def:""})}function ly(n,e,t=Math.random){if(!n?.length)return null;let r=n.length>1?n.filter(i=>i!==e):n;return r[Math.floor(t()*r.length)]}var uy={apiKey:"AIzaSyAEbf9VBdvXdHUSlH0rZgHL7SmvXyAn_nM",authDomain:"playbrainsmith.com",projectId:"thesamesiesgame",storageBucket:"thesamesiesgame.firebasestorage.app",messagingSenderId:"120235814862",appId:"1:120235814862:web:4f5762bc1a08d2f228059f"},Sd="BBUQ64_JVKYcW-xtRMi77IaPskvgJtRW7ueEECgPOerrutMYWC2bY2rXyy1LVgggYOsMH5uNpIFEyfSQj1psYl4";var fy="@firebase/installations",Dd="0.6.11";var py=1e4,my=`w:${Dd}`,gy="FIS_v2",yE="https://firebaseinstallations.googleapis.com/v1",wE=60*60*1e3,_E="installations",vE="Installations";var bE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$n=new He(_E,vE,bE);function yy(n){return n instanceof $e&&n.code.includes("request-failed")}function wy({projectId:n}){return`${yE}/projects/${n}/installations`}function _y(n){return{token:n.token,requestStatus:2,expiresIn:IE(n.expiresIn),creationTime:Date.now()}}async function vy(n,e){let r=(await e.json()).error;return $n.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function by({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function TE(n,{refreshToken:e}){let t=by(n);return t.append("Authorization",EE(e)),t}async function Ty(n){let e=await n();return e.status>=500&&e.status<600?n():e}function IE(n){return Number(n.replace("s","000"))}function EE(n){return`${gy} ${n}`}async function AE({appConfig:n,heartbeatServiceProvider:e},{fid:t}){let r=wy(n),i=by(n),s=e.getImmediate({optional:!0});if(s){let h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}let a={fid:t,authVersion:gy,appId:n.appId,sdkVersion:my},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await Ty(()=>fetch(r,c));if(u.ok){let h=await u.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:_y(h.authToken)}}else throw await vy("Create Installation",u)}function Iy(n){return new Promise(e=>{setTimeout(e,n)})}function kE(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}var SE=/^[cdef][\w-]{21}$/,Cd="";function RE(){try{let n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;let t=PE(n);return SE.test(t)?t:Cd}catch{return Cd}}function PE(n){return kE(n).substr(0,22)}function la(n){return`${n.appName}!${n.appId}`}var Ey=new Map;function Ay(n,e){let t=la(n);ky(t,e),CE(t,e)}function ky(n,e){let t=Ey.get(n);if(t)for(let r of t)r(e)}function CE(n,e){let t=DE();t&&t.postMessage({key:n,fid:e}),NE()}var Fn=null;function DE(){return!Fn&&"BroadcastChannel"in self&&(Fn=new BroadcastChannel("[Firebase] FID Change"),Fn.onmessage=n=>{ky(n.data.key,n.data.fid)}),Fn}function NE(){Ey.size===0&&Fn&&(Fn.close(),Fn=null)}var OE="firebase-installations-database",xE=1,Un="firebase-installations-store",Rd=null;function Nd(){return Rd||(Rd=vn(OE,xE,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Un)}}})),Rd}async function ca(n,e){let t=la(n),i=(await Nd()).transaction(Un,"readwrite"),s=i.objectStore(Un),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&Ay(n,e.fid),e}async function Sy(n){let e=la(n),r=(await Nd()).transaction(Un,"readwrite");await r.objectStore(Un).delete(e),await r.done}async function ua(n,e){let t=la(n),i=(await Nd()).transaction(Un,"readwrite"),s=i.objectStore(Un),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&Ay(n,c.fid),c}async function Od(n){let e,t=await ua(n.appConfig,r=>{let i=VE(r),s=ME(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Cd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function VE(n){let e=n||{fid:RE(),registrationStatus:0};return Ry(e)}function ME(n,e){if(e.registrationStatus===0){if(!navigator.onLine){let i=Promise.reject($n.create("app-offline"));return{installationEntry:e,registrationPromise:i}}let t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=LE(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:FE(n)}:{installationEntry:e}}async function LE(n,e){try{let t=await AE(n,e);return ca(n.appConfig,t)}catch(t){throw yy(t)&&t.customData.serverCode===409?await Sy(n.appConfig):await ca(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function FE(n){let e=await dy(n.appConfig);for(;e.registrationStatus===1;)await Iy(100),e=await dy(n.appConfig);if(e.registrationStatus===0){let{installationEntry:t,registrationPromise:r}=await Od(n);return r||t}return e}function dy(n){return ua(n,e=>{if(!e)throw $n.create("installation-not-found");return Ry(e)})}function Ry(n){return $E(n)?{fid:n.fid,registrationStatus:0}:n}function $E(n){return n.registrationStatus===1&&n.registrationTime+py<Date.now()}async function UE({appConfig:n,heartbeatServiceProvider:e},t){let r=BE(n,t),i=TE(n,t),s=e.getImmediate({optional:!0});if(s){let h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}let a={installation:{sdkVersion:my,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await Ty(()=>fetch(r,c));if(u.ok){let h=await u.json();return _y(h)}else throw await vy("Generate Auth Token",u)}function BE(n,{fid:e}){return`${wy(n)}/${e}/authTokens:generate`}async function xd(n,e=!1){let t,r=await ua(n.appConfig,s=>{if(!Py(s))throw $n.create("not-registered");let a=s.authToken;if(!e&&GE(a))return s;if(a.requestStatus===1)return t=qE(n,e),s;{if(!navigator.onLine)throw $n.create("app-offline");let c=WE(s);return t=jE(n,c),c}});return t?await t:r.authToken}async function qE(n,e){let t=await hy(n.appConfig);for(;t.authToken.requestStatus===1;)await Iy(100),t=await hy(n.appConfig);let r=t.authToken;return r.requestStatus===0?xd(n,e):r}function hy(n){return ua(n,e=>{if(!Py(e))throw $n.create("not-registered");let t=e.authToken;return HE(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function jE(n,e){try{let t=await UE(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ca(n.appConfig,r),t}catch(t){if(yy(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Sy(n.appConfig);else{let r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ca(n.appConfig,r)}throw t}}function Py(n){return n!==void 0&&n.registrationStatus===2}function GE(n){return n.requestStatus===2&&!zE(n)}function zE(n){let e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+wE}function WE(n){let e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function HE(n){return n.requestStatus===1&&n.requestTime+py<Date.now()}async function KE(n){let e=n,{installationEntry:t,registrationPromise:r}=await Od(e);return r?r.catch(console.error):xd(e).catch(console.error),t.fid}async function QE(n,e=!1){let t=n;return await YE(t),(await xd(t,e)).token}async function YE(n){let{registrationPromise:e}=await Od(n);e&&await e}function JE(n){if(!n||!n.options)throw Pd("App Configuration");if(!n.name)throw Pd("App Name");let e=["projectId","apiKey","appId"];for(let t of e)if(!n.options[t])throw Pd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Pd(n){return $n.create("missing-app-config-values",{valueName:n})}var Cy="installations",XE="installations-internal",ZE=n=>{let e=n.getProvider("app").getImmediate(),t=JE(e),r=ft(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},e0=n=>{let e=n.getProvider("app").getImmediate(),t=ft(e,Cy).getImmediate();return{getId:()=>KE(t),getToken:i=>QE(t,i)}};function t0(){qe(new be(Cy,ZE,"PUBLIC")),qe(new be(XE,e0,"PRIVATE"))}t0();Ae(fy,Dd);Ae(fy,Dd,"esm2017");var n0="/firebase-messaging-sw.js",r0="/firebase-cloud-messaging-push-scope",Ly="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",i0="https://fcmregistrations.googleapis.com/v1",Fy="google.c.a.c_id",s0="google.c.a.c_l",o0="google.c.a.ts",a0="google.c.a.e",Dy;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Dy||(Dy={}));var Yi;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Yi||(Yi={}));function Bt(n){let e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function c0(n){let e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}var Vd="fcm_token_details_db",l0=5,Ny="fcm_token_object_Store";async function u0(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Vd))return null;let e=null;return(await vn(Vd,l0,{upgrade:async(r,i,s,a)=>{var c;if(i<2||!r.objectStoreNames.contains(Ny))return;let u=a.objectStore(Ny),h=await u.index("fcmSenderId").get(n);if(await u.clear(),!!h){if(i===2){let f=h;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(c=f.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:Bt(f.vapidKey)}}}else if(i===3){let f=h;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Bt(f.auth),p256dh:Bt(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Bt(f.vapidKey)}}}else if(i===4){let f=h;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Bt(f.auth),p256dh:Bt(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Bt(f.vapidKey)}}}}}})).close(),await Es(Vd),await Es("fcm_vapid_details_db"),await Es("undefined"),d0(e)?e:null}function d0(n){if(!n||!n.subscriptionOptions)return!1;let{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}var h0="firebase-messaging-database",f0=1,Bn="firebase-messaging-store",Md=null;function $d(){return Md||(Md=vn(h0,f0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Bn)}}})),Md}async function $y(n){let e=Bd(n),r=await(await $d()).transaction(Bn).objectStore(Bn).get(e);if(r)return r;{let i=await u0(n.appConfig.senderId);if(i)return await Ud(n,i),i}}async function Ud(n,e){let t=Bd(n),i=(await $d()).transaction(Bn,"readwrite");return await i.objectStore(Bn).put(e,t),await i.done,e}async function p0(n){let e=Bd(n),r=(await $d()).transaction(Bn,"readwrite");await r.objectStore(Bn).delete(e),await r.done}function Bd({appConfig:n}){return n.appId}var m0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ve=new He("messaging","Messaging",m0);async function g0(n,e){let t=await jd(n),r=By(e),i={method:"POST",headers:t,body:JSON.stringify(r)},s;try{s=await(await fetch(qd(n.appConfig),i)).json()}catch(a){throw Ve.create("token-subscribe-failed",{errorInfo:a?.toString()})}if(s.error){let a=s.error.message;throw Ve.create("token-subscribe-failed",{errorInfo:a})}if(!s.token)throw Ve.create("token-subscribe-no-token");return s.token}async function y0(n,e){let t=await jd(n),r=By(e.subscriptionOptions),i={method:"PATCH",headers:t,body:JSON.stringify(r)},s;try{s=await(await fetch(`${qd(n.appConfig)}/${e.token}`,i)).json()}catch(a){throw Ve.create("token-update-failed",{errorInfo:a?.toString()})}if(s.error){let a=s.error.message;throw Ve.create("token-update-failed",{errorInfo:a})}if(!s.token)throw Ve.create("token-update-no-token");return s.token}async function Uy(n,e){let r={method:"DELETE",headers:await jd(n)};try{let s=await(await fetch(`${qd(n.appConfig)}/${e}`,r)).json();if(s.error){let a=s.error.message;throw Ve.create("token-unsubscribe-failed",{errorInfo:a})}}catch(i){throw Ve.create("token-unsubscribe-failed",{errorInfo:i?.toString()})}}function qd({projectId:n}){return`${i0}/projects/${n}/registrations`}async function jd({appConfig:n,installations:e}){let t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function By({p256dh:n,auth:e,endpoint:t,vapidKey:r}){let i={web:{endpoint:t,auth:e,p256dh:n}};return r!==Ly&&(i.web.applicationPubKey=r),i}var w0=7*24*60*60*1e3;async function _0(n){let e=await T0(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Bt(e.getKey("auth")),p256dh:Bt(e.getKey("p256dh"))},r=await $y(n.firebaseDependencies);if(r){if(I0(r.subscriptionOptions,t))return Date.now()>=r.createTime+w0?b0(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await Uy(n.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Oy(n.firebaseDependencies,t)}else return Oy(n.firebaseDependencies,t)}async function v0(n){let e=await $y(n.firebaseDependencies);e&&(await Uy(n.firebaseDependencies,e.token),await p0(n.firebaseDependencies));let t=await n.swRegistration.pushManager.getSubscription();return t?t.unsubscribe():!0}async function b0(n,e){try{let t=await y0(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Ud(n.firebaseDependencies,r),t}catch(t){throw t}}async function Oy(n,e){let r={token:await g0(n,e),createTime:Date.now(),subscriptionOptions:e};return await Ud(n,r),r.token}async function T0(n,e){let t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:c0(e)})}function I0(n,e){let t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,i=e.auth===n.auth,s=e.p256dh===n.p256dh;return t&&r&&i&&s}function xy(n){let e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return E0(e,n),A0(e,n),k0(e,n),e}function E0(n,e){if(!e.notification)return;n.notification={};let t=e.notification.title;t&&(n.notification.title=t);let r=e.notification.body;r&&(n.notification.body=r);let i=e.notification.image;i&&(n.notification.image=i);let s=e.notification.icon;s&&(n.notification.icon=s)}function A0(n,e){e.data&&(n.data=e.data)}function k0(n,e){var t,r,i,s,a;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};let c=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;c&&(n.fcmOptions.link=c);let u=(a=e.fcmOptions)===null||a===void 0?void 0:a.analytics_label;u&&(n.fcmOptions.analyticsLabel=u)}function S0(n){return typeof n=="object"&&!!n&&Fy in n}R0("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function R0(n,e){let t=[];for(let r=0;r<n.length;r++)t.push(n.charAt(r)),r<e.length&&t.push(e.charAt(r));return t.join("")}function P0(n){if(!n||!n.options)throw Ld("App Configuration Object");if(!n.name)throw Ld("App Name");let e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(let r of e)if(!t[r])throw Ld(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Ld(n){return Ve.create("missing-app-config-values",{valueName:n})}var Fd=class{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let i=P0(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}};async function qy(n){try{n.swRegistration=await navigator.serviceWorker.register(n0,{scope:r0}),n.swRegistration.update().catch(()=>{})}catch(e){throw Ve.create("failed-service-worker-registration",{browserErrorMessage:e?.message})}}async function C0(n,e){if(!e&&!n.swRegistration&&await qy(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ve.create("invalid-sw-registration");n.swRegistration=e}}async function D0(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Ly)}async function jy(n,e){if(!navigator)throw Ve.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ve.create("permission-blocked");return await D0(n,e?.vapidKey),await C0(n,e?.serviceWorkerRegistration),_0(n)}async function N0(n,e,t){let r=O0(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[Fy],message_name:t[s0],message_time:t[o0],message_device_time:Math.floor(Date.now()/1e3)})}function O0(n){switch(n){case Yi.NOTIFICATION_CLICKED:return"notification_open";case Yi.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}async function x0(n,e){let t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Yi.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(xy(t)):n.onMessageHandler.next(xy(t)));let r=t.data;S0(r)&&r[a0]==="1"&&await N0(n,t.messageType,r)}var Vy="@firebase/messaging",My="0.12.14";var V0=n=>{let e=new Fd(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>x0(e,t)),e},M0=n=>{let e=n.getProvider("messaging").getImmediate();return{getToken:r=>jy(e,r)}};function L0(){qe(new be("messaging",V0,"PUBLIC")),qe(new be("messaging-internal",M0,"PRIVATE")),Ae(Vy,My),Ae(Vy,My,"esm2017")}async function F0(){try{await bs()}catch{return!1}return typeof window<"u"&&ti()&&Df()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}async function $0(n){if(!navigator)throw Ve.create("only-available-in-window");return n.swRegistration||await qy(n),v0(n)}function Gd(n=bn()){return F0().then(e=>{if(!e)throw Ve.create("unsupported-browser")},e=>{throw Ve.create("indexed-db-unsupported")}),ft(te(n),"messaging").getImmediate()}async function Gy(n,e){return n=te(n),jy(n,e)}function zy(n){return n=te(n),$0(n)}L0();var zd="samesies.alertsOff",U0=()=>/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,B0=()=>navigator.standalone===!0||matchMedia("(display-mode: standalone)").matches;function Ji(){return Sd?U0()&&!B0()?"ios-install":"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window?"yes":"no":"no"}var da=()=>"Notification"in window?Notification.permission:"default",Wd=()=>Ji()==="yes"&&da()==="granted"&&localStorage.getItem(zd)!=="1";async function Hd(n){let e=await navigator.serviceWorker.register("sw.js");return await navigator.serviceWorker.ready,Gy(Gd(n),{vapidKey:Sd,serviceWorkerRegistration:e})}async function Wy(n,e,t){if(Ji()!=="yes"||await Notification.requestPermission()!=="granted")return!1;try{localStorage.removeItem(zd)}catch{}let i=await Hd(n);return await ut(Je(e,"pushTokens",t),{tokens:gd(i),at:dt()},{merge:!0}),!0}async function ha(n,e,t){try{localStorage.setItem(zd,"1")}catch{}try{let r=await Hd(n);await dn(Je(e,"pushTokens",t),{tokens:zg(r)}),await zy(Gd(n))}catch{}}async function Hy(n,e,t){if(Wd())try{let r=await Hd(n);await ut(Je(e,"pushTokens",t),{tokens:gd(r),at:dt()},{merge:!0})}catch(r){console.warn("alerts refresh failed",r)}}var fa=(n,e,t)=>`${n} ${n===1?e:t}`,q0=n=>n.length<=2?n.join(" and "):n.slice(0,-1).join(", ")+" and "+n[n.length-1],v={appName:"Brainsmith",listNames:q0,rounds:n=>fa(n,"round","rounds"),errors:{generic:"Something went wrong. Check your connection and try again.",nameFirst:"Type your name first.",codeFormat:"Game codes are 4 letters.",noGame:"No game with that code.",started:"That game already started.",full:n=>`That game is full (${n} players max).`,wordFirst:"Type a word first.",used:n=>`"${n}" has already been used. Pick another!`,connect:"Could not connect to Brainsmith. Check your connection and refresh.",rudeWord:"Let\u2019s keep it family-friendly. Try another word.",rudeName:"Let\u2019s keep names family-friendly. Try another."},toasts:{waitMinute:"Give them a minute!",nudged:n=>`Nudged ${n} \u{1F44B}`,nudgedYou:n=>`${n} nudged you! Your word, please \u{1F440}`,rematch:n=>`${n} started a rematch. You're in!`,copiedShare:"Copied! Paste it in your group text.",removed:n=>`${n} was removed.`,askedClose:n=>`${n} asked: close enough?`,nameFirst:"Type a name first",nameSaved:"Name saved",inviteCopied:"Invite link copied"},someone:"Someone",aFriend:"A friend",theHost:"the host",thisPlayer:"this player",you:" (you)",host:"Host",loading:"Loading\u2026",findingGame:"Finding your game\u2026",goToStart:"Go to start",a11y:{back:"Step out to the start screen",howTo:"How to play",soundOn:"Turn sound on",soundOff:"Turn sound off",usedWords:n=>`Used words, ${n} so far`,settings:"Settings",close:"Close",closeHowTo:"Close How to Play",gameCode:"Game code",forgetGame:n=>`Remove game ${n} from this list`,removePlayer:n=>`Remove ${n} from the game`,react:(n,e)=>`React ${n}${e?`, ${e} so far`:""}`,slide:(n,e,t)=>`${n} of ${e}: ${t}`},share:{head:(n,e,t="")=>`\u{1F9E0} Brainsmith: we forged "${n}" in ${fa(e,"round","rounds")}${t}!`,headVote:(n,e,t="")=>`\u{1F9E0} Brainsmith: close enough on "${n}" in ${fa(e,"round","rounds")}${t}!`,playWithUs:"Play with us:",invite:n=>`Play Brainsmith with me! Code ${n}`},games:{title:"Your games",button:n=>`Your games (${n})`,needYou:n=>`${n} need you`,none:"No games yet.",loading:"Loading\u2026",with:n=>`With ${n}`,justYou:"Just you so far",removed:"You were removed",notIn:"Not in this game",startIt:"Ready when you are: start it!",waitingStart:"Waiting to start",forged:n=>`Forged: ${n}`,closeEnough:n=>`Close enough: ${n}`,yourTurn:n=>`Your turn \xB7 round ${n}`,waitingOn:n=>`Waiting on ${n}`,revealing:"Revealing\u2026",ended:"Game ended",gone:"No longer around"},home:{howTo:"How to Play",tagline:"Two words in. Meet in the middle.",yourName:"Your name",namePlaceholder:"What should we call you?",start:"Start a new game",dailyEyebrow:"WEIRD DAILY WORDS",dailyTitle:"Scared? You scared.",dailySub:"Start with a redonkulous word",or:"or",codePlaceholder:"Game code",join:"Join",fine:"2 to 5 players \xB7 no sign-up \xB7 no ads",saveGames:"Playing on more than one phone? <b>Sign in</b> to keep your games everywhere.",maker:"a Padre Smitty creation"},join:{invited:(n,e)=>`${n} invited you to game <strong>${e}</strong>`,started:"This game already started. Ask them to start a new one and send you the code.",full:"This game is full.",button:"Join the game"},missing:n=>`No game with code ${n}.`,removedFrom:n=>`You were taken out of game ${n} so the others could keep playing.`,confirmRemove:n=>`Remove ${n} from the game? Everyone else can keep playing.`,header:{game:n=>`GAME \xB7 ${n}`},lobby:{title:"Getting ready",dailyBadge:"Weird Daily Words game",inviteWith:"Invite with this code",shareLink:"Share invite link",players:(n,e)=>`PLAYERS \xB7 ${n} OF ${e}`,startNow:"Everyone\u2019s here, start!",needMore:"Waiting for at least one more",waitingFor:n=>`Waiting for ${n} to start\u2026`},round:{title:n=>`Round ${n}`,connect:"Connect these",askClose:"Close enough? Ask to count it",roundOne:"Round one",prompt:"Pick any word in the known universe.",promptTip:"Nouns are easiest. Adjectives make it harder.",lockedIn:"You locked in",waitingOn:n=>`Waiting on ${n}\u2026`,revealing:"Revealing\u2026",yourWord:"Your word",wordPlaceholder:"Type it here",lock:"Lock it in",starter:"Stuck? Give me a word",secret:"Nobody sees your word until everyone\u2019s in.",players:"PLAYERS",playerLocked:"Locked in",thinking:"Thinking\u2026",nudge:"Nudge"},reveal:{title:n=>`Round ${n} is in!`,said:(n,e,t)=>`${n} ${e?"both":"all"} said <em>${t}</em>!`,soClose:"So close! Keep going.",notYetTwo:"Not yet! Next round, connect these two.",notYetAll:"Not yet! Next round, connect all of these.",closeHot:"Those look the same. Close enough?",close:"Close enough?",next:n=>`On to round ${n}`},dealt:{title:"Weird words!",got:n=>`${n} got`,msg:"Everyone got a different word. Next round, find one word that connects them all.",next:"Let\u2019s connect them"},vote:{title:"Close enough?",playOn:n=>`${n} said not quite, so play on.`,youAsked:"You asked",asked:n=>`${n} asked`,explain:(n,e)=>`${n} to count round ${e} as a match. Everyone has to agree.`,waitingOn:n=>`Waiting on ${n}\u2026`,counting:"Counting\u2026",yes:"Yes, count it",no:"No"},won:{forged:"Forged!",closeEnough:"Close enough!",everyone:"Everyone said",agreed:"You all agreed on",howYouGot:"HOW YOU GOT THERE",share:"Share how we did it",joinNext:"Join the next game",again:"Play again, same crew",newCrew:"New game, new people",home:"Back to start"},used:{title:"Used words",explain:"These are off the table. If you try one, we\u2019ll quietly ask for another.",round:n=>`ROUND ${n}`,none:"Nothing yet. Round one is wide open."},settings:{title:"Settings",account:"Save your games",accountSub:"Sign in so your games follow you to any phone",signedIn:n=>`Signed in${n?` as ${n}`:""}`,signedInSub:"Your games follow you to any phone",signOut:"Sign out",deleteAccount:"Delete my account",deleteSub:"Erases your name, games list and alerts",yourName:"Your name",save:"Save",nameNote:"Used for new games you start or join.",sound:"Sound",soundSub:"Drumroll, flips and the Forged! fanfare",pastGames:"Past games",pastCount:n=>`${fa(n,"game","games")} on this phone`,noneYet:"None yet",howTo:"How to Play",howToSub:"Swipe through the rules again",privacy:"Privacy Policy",terms:"Terms of Use",restore:"Restore Purchase",restoreSoon:"Coming with Brainsmith Plus",contact:"Questions? hello@padresmitty.com",footer:"Brainsmith \xB7 a Padre Smitty creation"},tour:{title:"How to Play",count:(n,e)=>`${n} OF ${e}`,skip:"Skip",next:"Next",done:"Let\u2019s play",names:["Mom","Jake","You"],goalTitle:"Every brain, one word",goalBody:"Brainsmith is a team game. You all win together when every player types the very same word.",secretTitle:"Pick a word in secret",secretBody:"Any word you like. Nobody sees it until everyone\u2019s locked in, so take your time. Stuck on round 1? Tap <strong>Give me a word</strong>.",flipTitle:"They all flip at once",flipBody:"Drumroll, then every word is revealed together. The fun is seeing how far apart you started.",flipWords:["Ocean","Pizza","Robot"],middleTitle:"Meet in the middle",middleBody:"Next round, everyone looks for one word that connects the words you just saw. It doesn\u2019t have to be perfect, just your best guess at what the others will say.",middleGuess:"Anchovy?",forgeTitle:"Forge it!",forgeBody:"Keep connecting, round after round, until all of you land on the same word. Then it\u2019s <strong>Forged!</strong>",forgeWord:"Anchovy",matchTitle:"What counts as a match",matchRules:[["ok","Capitals don\u2019t matter.","Tennessee = tennessee"],["ok","Plurals count.","Game = games"],["ok","Endings count.","Run = running, bake = baked"],["ok","Two-word answers are fine.","Ice cream, New York"],["no","Extra words make it different.","Cliff \u2260 Cliff Swaim. If everyone agrees it\u2019s the same, vote <b>Close enough?</b>"],["no","No repeats.","A word already played this game is off limits."]],toolsTitle:"Handy buttons",tools:[["\u{1F44B}","Nudge","a player who\u2019s taking a while."],["\u{1F91D}","Close enough?","starts a vote when words almost match. Everyone has to say yes."],["list","Used words","shows every word played so far."],["\u{1F602}","React","to anyone\u2019s word after the reveal."]]},account:{title:"Save your games",body:"Sign in and your games, name and alerts follow you to any phone or tablet, including the Home Screen app.",google:"Continue with Google",homeScreenNote:"In the Home Screen app, sign in with email. Signed up with Google in Safari? Tap <b>Sign in</b>, type that Gmail, then <b>Forgot password?</b> to make a password for it.",or:"or use email",email:"Email",password:"Password",passwordNew:"Make a password (6+ characters)",create:"Create account",signIn:"Sign in",haveOne:"Already have an account? <b>Sign in</b>",needOne:"New here? <b>Create an account</b>",forgot:"Forgot password?",resetSent:n=>`Check ${n} for a link to pick a new password.`,needEmail:"Type your email first, then tap Forgot password.",working:"One sec\u2026",welcome:"Signed in. Your games are saved.",welcomeBack:"Welcome back!",moving:"Bringing this phone\u2019s games along\u2026",moved:n=>n?`Brought ${n} game${n===1?"":"s"} along. All set!`:"Welcome back! All set.",signedOut:"Signed out. You\u2019re playing as a guest now.",confirmSignOut:"Sign out? Your games stay saved in your account. Sign back in anytime to get them.",errors:{"auth/email-already-in-use":"That email already has an account. Tap Sign in instead.","auth/invalid-email":"That email doesn\u2019t look right.","auth/weak-password":"Pick a password with at least 6 characters.","auth/missing-password":"Type a password.","auth/invalid-credential":"That email and password don\u2019t match.","auth/wrong-password":"That email and password don\u2019t match.","auth/user-not-found":"No account with that email. Tap Create an account.","auth/too-many-requests":"Too many tries. Wait a few minutes, then try again.","auth/popup-closed-by-user":"","auth/cancelled-popup-request":"","auth/network-request-failed":"No connection. Check your internet and try again.","auth/operation-not-allowed":"That sign-in isn\u2019t switched on yet. Try the other way."}},del:{confirm:"Delete your account? Your name is taken out of every game and your games list, alerts and sign-in are erased. This can\u2019t be undone.",done:"Your account is deleted. Thanks for playing."},report:{menu:n=>n,reportBtn:n=>`Report ${n}`,reportSub:"Tell us about a mean name or word",blockBtn:n=>`Block ${n}`,blockSub:"Hides their name and words on your screen",unblockBtn:n=>`Unblock ${n}`,unblockSub:"Shows their name and words again",title:n=>`Report ${n}`,what:"What\u2019s wrong?",reasons:["Mean or hateful word","Gross or not family-friendly","Rude name","Something else"],note:"Anything else? (optional)",send:"Send report",sent:"Thanks for telling us. We read every report.",alsoBlock:n=>`Block ${n} too`,blocked:n=>`${n} is blocked. You won\u2019t see their name or words.`,unblocked:n=>`${n} is unblocked.`,hiddenName:"Blocked player",hiddenWord:"hidden",more:n=>`More options for ${n}`},move:{home:"Brainsmith has a new home: <b>playbrainsmith.com</b>. Finish your games here and we\u2019ll take you there.",won:"Next game? Play it at <b>playbrainsmith.com</b>, our new home."},alerts:{askTitle:"Want a buzz when the words flip? \u{1F514}",askBody:"We\u2019ll ping you when it\u2019s your turn, when someone nudges you, and when you forge a win. Nothing else.",yes:"Buzz me",no:"Nah",label:"Alerts",sub:"Your turn, nudges and wins",iosInstall:"On iPhone, add Brainsmith to your Home Screen first (Share, then Add to Home Screen), then turn this on there.",blocked:"Blocked in your browser settings. Allow notifications for this site to turn them on.",onToast:"Alerts on. We\u2019ll be (mostly) polite.",offToast:"Alerts off. Peace and quiet.",notNow:"No alerts for now. Turn them on anytime in Settings.",failed:"Couldn\u2019t turn on alerts. Try again in Settings."},packs:{pickTitle:"Pick a pack",pickSub:"The pack deals your first words. After that, anything goes.",free:"FREE",plus:"PLUS",soon:"Coming with Plus",soonToast:n=>`${n} comes with Brainsmith Plus. Soon!`,forgedIn:n=>`Forged in ${n}`,shareIn:n=>` in ${n}`,open:{name:"Wide Open",blurb:"No pack. Anything goes from the very first word."},daily:{name:"Weird Daily Words",blurb:"Five redonkulous words a day, the same for everyone."},zoo:{name:"The Odd Zoo",blurb:"Every one of these animals is real. We checked.",dealtTitle:"Welcome to The Odd Zoo!",shouts:["ROAR!","Hive mind!","Stampede!","Birds of a feather!","Same species!","Apex predators!","Top of the food chain!","Feeding frenzy!","GOAT!","Ah-OOOOO!"]},sports:{name:"Huddle Up",blurb:"Cheese rolling is a real sport. So is chess boxing. Good luck.",dealtTitle:"Huddle up!",shouts:["Score!","Homerun!","Swish!","Gold!","GG!","Game, set, match!","Goal!","Knockout!","Touchdown!","Hole in one!"]},preview:"PREVIEW",previewOn:"Plus preview is on for this phone.",nineties:{name:"Totally Rad",blurb:"Pagers, mixtapes and a hall pass. No brands, all vibes.",dealtTitle:"Class is in session!",forged:"Forged in the 90s",shareIn:" in the 90s",shouts:["Jinx!","Booyah!","Totally rad!","Da bomb!","All that and a bag of chips!","Word!","Phat!","Off the hook!","Bodacious!","Fresh!"]},monsters:{name:"Creature Feature",blurb:"The Pope Lick Monster is real Kentucky folklore. So is the Hodag. Good luck.",dealtTitle:"Now showing!",forged:"Forged at the Creature Feature",shareIn:" at the Creature Feature",shouts:["It\u2019s alive!","Brains!","Mwahaha!","Boo!","AAAAAHHH!","Monster hit!","Full moon!","Unleashed!","Encore!","The End\u2026?"]}}};var G=null,ga=!1;try{ga=localStorage.getItem("samesies.muted")==="1"}catch{}var jn=()=>ga;function Qy(n){ga=n;try{localStorage.setItem("samesies.muted",n?"1":"0")}catch{}}function Yy(){try{G||(G=new(window.AudioContext||window.webkitAudioContext)),G.state==="suspended"&&G.resume()}catch{}}function Yd(){return!ga&&G&&G.state==="running"}function j0(){let n=G.createBuffer(1,G.sampleRate*.08,G.sampleRate),e=n.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=(Math.random()*2-1)*(1-t/e.length);return n}function ma(n,e){let t=G.createBufferSource();t.buffer=j0();let r=G.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.8;let i=G.createGain();i.gain.value=e,t.connect(r).connect(i).connect(G.destination),t.start(n)}function Xe(n,e,t,r=.18,i="triangle"){let s=G.createOscillator();s.type=i,s.frequency.value=n;let a=G.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(r,e+.02),a.gain.exponentialRampToValueAtTime(1e-4,e+t),s.connect(a).connect(G.destination),s.start(e),s.stop(e+t+.05)}function Jy(n=1.4,e=null){if(!Yd())return;let t=G.currentTime;for(let r=0;r<n;r+=.045)ma(t+r,(.08+.35*(r/n))*(qn[e]?.6:1));if(qn[e]){qn[e].flip(t+n);return}ma(t+n,.7),Xe(523,t+n,.5,.15),Xe(784,t+n,.6,.12)}function Xy(n=null){if(!Yd())return;let e=G.currentTime;if(qn[n]){qn[n].close(e);return}Xe(440,e,.25),Xe(554,e+.12,.35)}function Zy(n=null){if(!Yd())return;let e=G.currentTime;qn[n]&&(e+=qn[n].win(e)),[523,659,784,1047].forEach((t,r)=>Xe(t,e+r*.11,r===3?.9:.3,.2)),Xe(1319,e+.44,.9,.08,"sine")}function G0(n){let e=G.createBuffer(1,Math.ceil(G.sampleRate*n),G.sampleRate),t=e.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1;let r=G.createBufferSource();return r.buffer=e,r}function ya(n,e,t,r,i=.12,s="sine"){let a=G.createOscillator();a.type=s,a.frequency.setValueAtTime(e,n),a.frequency.exponentialRampToValueAtTime(t,n+r*.6);let c=G.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(i,n+.01),c.gain.exponentialRampToValueAtTime(1e-4,n+r),a.connect(c).connect(G.destination),a.start(n),a.stop(n+r+.05)}function Jd(n,e,t,r,i,s){let a=G0(e),c=G.createBiquadFilter();c.type=t,c.frequency.value=r,c.Q.value=.7;let u=G.createGain();return u.gain.setValueAtTime(1e-4,n),s(u.gain,n),a.connect(c).connect(u).connect(G.destination),a.start(n),a.stop(n+e),c}var z0=n=>Jd(n,.5,"bandpass",3200,0,e=>{for(let t=0;t<5;t++)e.linearRampToValueAtTime(.05+Math.random()*.15,n+t*.07+.02),e.linearRampToValueAtTime(.02,n+t*.07+.06);e.linearRampToValueAtTime(1e-4,n+.45)}),pa=(n,e)=>ya(n,e,e*1.7,.14,.1),W0=n=>[0,.18,.34].forEach((e,t)=>ya(n+e,420+t*90,620+t*120,.16,.1,"triangle")),Kd=(n,e,t)=>Jd(n,e,"bandpass",900,0,r=>{r.linearRampToValueAtTime(t,n+e*.3),r.linearRampToValueAtTime(t*.8,n+e*.7),r.linearRampToValueAtTime(1e-4,n+e)});function H0(n,e){let t=G.createOscillator();t.type="sine",t.frequency.value=2900;let r=G.createOscillator();r.frequency.value=38;let i=G.createGain();i.gain.value=140,r.connect(i).connect(t.frequency);let s=G.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(.09,n+.02),s.gain.setValueAtTime(.09,n+e-.05),s.gain.exponentialRampToValueAtTime(1e-4,n+e),t.connect(s).connect(G.destination),t.start(n),r.start(n),t.stop(n+e+.05),r.stop(n+e+.05)}function K0(n){let e=G.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(150,n),e.frequency.linearRampToValueAtTime(210,n+.35),e.frequency.exponentialRampToValueAtTime(70,n+1.2);let t=G.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(400,n),t.frequency.linearRampToValueAtTime(1500,n+.35),t.frequency.exponentialRampToValueAtTime(250,n+1.2);let r=G.createGain();r.gain.setValueAtTime(1e-4,n),r.gain.linearRampToValueAtTime(.2,n+.15),r.gain.exponentialRampToValueAtTime(1e-4,n+1.25),e.connect(t).connect(r).connect(G.destination),e.start(n),e.stop(n+1.3)}function Ky(n,e,t,r){let i=G.createOscillator();i.type="sine",i.frequency.setValueAtTime(e,n),i.frequency.exponentialRampToValueAtTime(t,n+r);let s=G.createOscillator();s.frequency.value=6;let a=G.createGain();a.gain.value=e*.04,s.connect(a).connect(i.frequency);let c=G.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(.1,n+.08),c.gain.setValueAtTime(.1,n+r-.15),c.gain.exponentialRampToValueAtTime(1e-4,n+r),i.connect(c).connect(G.destination),i.start(n),s.start(n),i.stop(n+r+.05),s.stop(n+r+.05)}var Q0=n=>{for(let e=0;e<10;e++)ma(n+e*.045,.12)},Y0=n=>Jd(n,1.2,"lowpass",300,0,e=>{e.linearRampToValueAtTime(.5,n+.04),e.exponentialRampToValueAtTime(.12,n+.4),e.exponentialRampToValueAtTime(1e-4,n+1.2)});function Qd(n,e,t){e.forEach(r=>[1,2].forEach(i=>Xe(r*i,n,t,i===1?.07:.035,"sawtooth")))}function J0(n,e){for(let t=0;t<e;t+=.035)Xe(1320,n+t,.05,.05,"square"),Xe(1760,n+t+.012,.04,.03,"square")}var X0=n=>{Xe(2100,n,.07,.08,"square"),Xe(2100,n+.12,.07,.08,"square")},Z0=n=>{[262,330,392,523].forEach(e=>Xe(e,n,.35,.06,"sawtooth")),ma(n,.4)},eA=n=>ya(n,900,140,.25,.1,"sawtooth"),qn={zoo:{flip(n){z0(n);let e=Math.random();e<.4?(pa(n+.4,2400),pa(n+.56,2900)):e<.7?W0(n+.4):ya(n+.4,130,90,.3,.12,"sawtooth")},close(n){pa(n,2200),pa(n+.13,2800)},win(n){return K0(n),1.1}},nineties:{flip(n){X0(n),Z0(n+.3)},close(n){eA(n)},win(n){return J0(n,1.1),1.2}},monsters:{flip(n){Q0(n),Ky(n+.3,420,900,.6)},close(n){Ky(n,700,330,.7)},win(n){return Y0(n),Qd(n+.3,[147,175,220],.25),Qd(n+.6,[139,165,208],.25),Qd(n+.9,[131,156,196],.8),1.8}},sports:{flip(n){H0(n,.3),Kd(n+.3,1,.18)},close(n){Kd(n,.9,.16).frequency.linearRampToValueAtTime(500,n+.9)},win(n){return Xe(220,n,.8,.12,"square"),Kd(n+.3,1.6,.3),.9}}};function ew(n=["#FF6A4D","#FFFFFF","#FFB020","#8A8CFF","#1FB895"]){if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;let e=document.createElement("div");e.className="confetti",e.setAttribute("aria-hidden","true");for(let t=0;t<90;t++){let r=document.createElement("i");r.style.left=Math.random()*100+"%",r.style.background=n[t%n.length],r.style.animationDelay=Math.random()*.6+"s",r.style.animationDuration=2.2+Math.random()*1.6+"s",r.style.setProperty("--drift",Math.random()*160-80+"px"),r.style.setProperty("--spin",Math.random()*1080-540+"deg"),t%3===0&&(r.style.borderRadius="50%"),e.appendChild(r)}document.body.appendChild(e),setTimeout(()=>e.remove(),4800)}var fn=null,tw=0,nw=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;function Xi(n){if(cancelAnimationFrame(tw),fn?.remove(),fn=null,!n||!rw[n])return;fn=document.createElement("div"),fn.className=`pack-bg pack-bg-${n}`,fn.setAttribute("aria-hidden","true");let e=document.createElement("canvas");fn.appendChild(e),document.body.prepend(fn);let t=e.getContext("2d"),r=rw[n](),i=()=>{let a=Math.min(2,window.devicePixelRatio||1);e.width=innerWidth*a,e.height=innerHeight*a,r.reset(e,a)};i(),window.removeEventListener("resize",Xi.onResize),Xi.onResize=()=>{fn&&(i(),nw()&&r.draw(t,e,!1))},window.addEventListener("resize",Xi.onResize);let s=()=>{r.draw(t,e,!0),tw=requestAnimationFrame(s)};nw()?r.draw(t,e,!1):s()}var rw={zoo(){let n=["rgba(88,168,107,.55)","rgba(47,122,76,.65)","rgba(31,90,55,.7)","rgba(120,190,120,.45)"],e=[],t=1,r=(s,a)=>({x:Math.random()*s.width,y:a,len:(22+Math.random()*30)*t,r:Math.random()*6,spin:(Math.random()-.5)*.03,v:(.3+Math.random()*.5)*t,ph:Math.random()*6,c:n[Math.floor(Math.random()*n.length)]}),i=(s,a)=>{let c=a.len;s.save(),s.translate(a.x,a.y),s.rotate(a.r),s.fillStyle=a.c,s.beginPath(),s.moveTo(-c/2,0),s.quadraticCurveTo(0,-c*.4,c/2,0),s.quadraticCurveTo(0,c*.4,-c/2,0),s.fill(),s.strokeStyle="rgba(255,255,255,.18)",s.lineWidth=Math.max(1,c*.03),s.beginPath(),s.moveTo(-c/2-c*.12,0),s.lineTo(c/2,0),s.stroke(),s.restore()};return{reset(s,a){t=a,e=Array.from({length:26},()=>r(s,Math.random()*s.height))},draw(s,a,c){s.clearRect(0,0,a.width,a.height),e.forEach(u=>{i(s,u),c&&(u.y+=u.v,u.ph+=.02,u.x+=Math.sin(u.ph)*.6*t,u.r+=u.spin+Math.cos(u.ph)*.004,u.y>a.height+u.len&&Object.assign(u,r(a,-u.len)))})}}},sports(){let n=[],e=1,t=0,r=[];return{reset(i,s){e=s,n=[];let a=i.width,c=i.height;r=[["x",.18,.62],["x",.3,.7],["o",.66,.6],["o",.8,.72],["x",.24,.84],["o",.72,.88]].map(([u,h,f])=>[u,h*a,f*c])},draw(i,s,a){let c=s.width,u=s.height,h=u*.22;i.clearRect(0,0,c,u),[[.035,-1],[.965,1]].forEach(([g,T])=>{let S=c*g,D=h*.8,L=a?Math.sin(t/90+g*4)*.12:0;i.save(),i.translate(S,D),i.rotate(T*(.5+L));let N=i.createLinearGradient(0,0,0,u*.7);N.addColorStop(0,"rgba(255,248,210,.22)"),N.addColorStop(1,"rgba(255,248,210,0)"),i.fillStyle=N,i.beginPath(),i.moveTo(-8*e,0),i.lineTo(8*e,0),i.lineTo(c*.22,u*.7),i.lineTo(-c*.22,u*.7),i.fill(),i.restore(),i.fillStyle="rgba(255,250,225,.95)";for(let z=0;z<3;z++)for(let W=0;W<2;W++)i.beginPath(),i.arc(S+(z-1)*9*e,D+W*9*e,3.2*e,0,7),i.fill()}),a&&Math.random()<.2&&n.push({x:Math.random()*c,y:h*(.62+Math.random()*.34),life:1}),n.forEach(g=>{i.fillStyle=`rgba(255,255,255,${g.life})`,i.beginPath(),i.arc(g.x,g.y,(2.5*g.life+1)*e,0,7),i.fill(),g.life-=.06}),n=n.filter(g=>g.life>0),i.strokeStyle="rgba(244,241,230,.22)",i.lineWidth=3*e,i.lineCap="round";let f=13*e;r.forEach(([g,T,S])=>{i.beginPath(),g==="x"?(i.moveTo(T-f,S-f),i.lineTo(T+f,S+f),i.moveTo(T+f,S-f),i.lineTo(T-f,S+f)):i.arc(T,S,f,0,7),i.stroke()}),i.setLineDash([10*e,10*e]),i.beginPath(),i.moveTo(r[0][1]+f*1.6,r[0][2]),i.quadraticCurveTo(c*.48,u*.5,r[2][1]-f*1.8,r[2][2]),i.stroke(),i.setLineDash([]),t+=1}}},monsters(){let n=1,e=0,t=null,r=[],i=(s,a,c,u,h)=>{s.save(),s.translate(a,c),s.scale(u,u*(.6+.4*Math.abs(Math.sin(h)))),s.beginPath(),s.moveTo(0,0),s.quadraticCurveTo(-6,-8,-18,-6),s.quadraticCurveTo(-14,-2,-16,3),s.quadraticCurveTo(-10,0,-8,4),s.quadraticCurveTo(-4,1,0,5),s.quadraticCurveTo(4,1,8,4),s.quadraticCurveTo(10,0,16,3),s.quadraticCurveTo(14,-2,18,-6),s.quadraticCurveTo(6,-8,0,0),s.fill(),s.restore()};return{reset(s,a){n=a,r=Array.from({length:7},(c,u)=>({x:u/7*s.width,r:(60+Math.random()*60)*n,v:(.15+Math.random()*.2)*n}))},draw(s,a,c){let u=a.width,h=a.height;s.clearRect(0,0,u,h);let f=22*n,g=Math.ceil(u/f);for(let S=0;S<=g;S++){let D=(S+Math.floor(e/8))%3===0;s.fillStyle=D?"rgba(255,194,61,0.95)":"rgba(255,194,61,0.35)",s.beginPath(),s.arc(S*f+6*n,5*n,3*n,0,7),s.fill()}if(c&&Math.random()<.08){s.strokeStyle="rgba(26,19,32,0.12)",s.lineWidth=1*n;let S=Math.random()*u;s.beginPath(),s.moveTo(S,0),s.lineTo(S+(Math.random()-.5)*20*n,h),s.stroke()}c&&Math.random()<.04&&(s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(0,0,u,h)),c&&!t&&Math.random()<.004&&(t={x:-40*n,y:h*(.15+Math.random()*.4),v:(2+Math.random())*n,f:0}),t&&(s.fillStyle="rgba(26,19,32,0.75)",i(s,t.x,t.y+Math.sin(t.f/2)*10*n,1.6*n,t.f/3),t.x+=t.v,t.f+=1,t.x>u+40*n&&(t=null));let T=h*.94;s.fillStyle="rgba(26,19,32,0.85)";for(let S=0;S<u;S+=30*n)s.beginPath(),s.arc(S+15*n,T+12*n,14*n,Math.PI,0),s.lineTo(S+29*n,h),s.lineTo(S+1*n,h),s.fill();r.forEach(S=>{let D=s.createRadialGradient(S.x,T,0,S.x,T,S.r);D.addColorStop(0,"rgba(240,244,245,0.55)"),D.addColorStop(1,"rgba(240,244,245,0)"),s.fillStyle=D,s.fillRect(S.x-S.r,T-S.r,S.r*2,S.r*2),c&&(S.x+=S.v,S.x-S.r>u&&(S.x=-S.r))}),e+=1}}},nineties(){let n=["#FF2E93","#14C8C8","#FFE14D","#7B3FF2"],e=["tri","squiggle","ring","zig","dot","dot","tri","squiggle"],t=[],r=1,i=a=>({k:e[Math.floor(Math.random()*e.length)],c:n[Math.floor(Math.random()*n.length)],x:Math.random()*a.width,y:Math.random()*a.height,s:(14+Math.random()*18)*r,r:Math.random()*6,vr:(Math.random()-.5)*.01,vx:(Math.random()-.5)*.25*r,vy:(.1+Math.random()*.25)*r}),s=(a,c)=>{a.save(),a.translate(c.x,c.y),a.rotate(c.r),a.globalAlpha=.55,a.strokeStyle=c.c,a.fillStyle=c.c,a.lineWidth=4*r,a.lineCap="round",a.lineJoin="round";let u=c.s;if(a.beginPath(),c.k==="tri"&&(a.moveTo(0,-u),a.lineTo(u*.9,u*.6),a.lineTo(-u*.9,u*.6),a.closePath(),a.fill()),c.k==="ring"&&(a.arc(0,0,u*.7,0,7),a.stroke()),c.k==="dot"&&(a.arc(0,0,u*.22,0,7),a.fill()),c.k==="squiggle"){a.moveTo(-u,0);for(let h=-u;h<=u;h+=u/2)a.quadraticCurveTo(h+u/4,h/(u/2)%2?-u/2:u/2,h+u/2,0);a.stroke()}if(c.k==="zig"){a.moveTo(-u,u/3);for(let h=0;h<4;h++)a.lineTo(-u+(h+1)*u/2,h%2?u/3:-u/3);a.stroke()}a.restore()};return{reset(a,c){r=c,t=Array.from({length:22},()=>i(a))},draw(a,c,u){a.clearRect(0,0,c.width,c.height),t.forEach(h=>{s(a,h),u&&(h.x+=h.vx,h.y+=h.vy,h.r+=h.vr,h.y>c.height+40*r&&Object.assign(h,i(c),{y:-40*r}),h.x<-40*r&&(h.x=c.width+30*r),h.x>c.width+40*r&&(h.x=-30*r))})}}}};var Gn=yc(uy),ht=Zc(Gn),he=Pg(Gn),tA=/^(127\.0\.0\.1|localhost)$/.test(location.hostname)&&(new URLSearchParams(location.search).has("emu")||sessionStorage.getItem("emu")==="1");tA&&(sessionStorage.setItem("emu","1"),ro(ht,"http://127.0.0.1:9099",{disableWarnings:!0}),cd(he,"127.0.0.1",8080));var _e=document.getElementById("app");(()=>{let n=new URLSearchParams(location.search).get("plus");try{n==="preview"&&localStorage.setItem("samesies.plusPreview","1"),n==="off"&&localStorage.removeItem("samesies.plusPreview")}catch{}})();var hw=()=>{try{return localStorage.getItem("samesies.plusPreview")==="1"}catch{return!1}},uh=()=>hw(),Z={get(n,e=null){try{let t=localStorage.getItem("samesies."+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("samesies."+n,JSON.stringify(e))}catch{}}},m={uid:null,authError:null,name:Z.get("name",""),tour:Z.get("toured",!1)?null:0,code:new URLSearchParams(location.search).get("g")?.toUpperCase()||null,game:null,gameMissing:!1,mySub:null,showUsed:!1,showGames:!1,showSettings:!1,showPacks:!1,account:null,showAccount:!1,accountMode:"create",accountError:"",accountNote:"",blocked:new Set(Z.get("blocked",[])),reportFor:null,reportStep:"menu",moving:!1,summaries:{},busy:!1,error:"",toast:""},Nr=null,Xd=!1,iw=null,rh=new Set,Zd={},sw=["#4B4DDB","#FF6A4D","#1FB895","#FFB020","#E84D9A"],Or=(n,e)=>sw[Math.max(0,n.order.indexOf(e))%sw.length],nA=["\u{1F602}","\u{1F92F}","\u{1F525}","\u2764\uFE0F"],$=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),re=n=>Je(he,"games",n),Ze=(n,e)=>m.blocked.has(e)&&e!==m.uid?v.report.hiddenName:n.players[e]?.name,es=n=>m.blocked.has(n.uid)&&n.uid!==m.uid?v.report.hiddenWord:n.word,ih=n=>m.blocked.has(n.uid)&&n.uid!==m.uid?v.report.hiddenName:n.name,sh=(n,e,t)=>Je(he,"games",n,"rounds",String(e),"subs",t),rA=n=>`${location.origin}${location.pathname}?g=${n}`;function fw(n){let e=n?`${location.pathname}?g=${n}`:location.pathname;history.replaceState(null,"",e)}function iA(n){let e=Z.get("games",[]).filter(t=>t.code!==n);e.unshift({code:n,at:Date.now()}),Z.set("games",e.slice(0,6))}function oe(n){m.toast=n,M(),clearTimeout(oe.t),oe.t=setTimeout(()=>{m.toast="",M()},3200)}function de(n){console.error(n),m.busy=!1,m.error=typeof n=="string"?n:v.errors.generic,M()}var sA={logo:[409,640],spark:[358,360],bolt:[195,360],hammer:[313,360],bolts:[383,360],burst:[343,360],swing:[342,360],"zoo-logo":[570,600],"zoo-art":[440,360],"sports-logo":[455,600],"sports-art":[348,360],"monsters-art":[308,360],"monsters-logo":[404,600],"nineties-art":[226,360],"nineties-logo":[580,600]},Be=(n,e,t="")=>{let[r,i]=sA[n];return`<img class="art ${t}" src="art/${n}.webp" width="${Math.round(r*e/i)}" height="${e}" alt="" aria-hidden="true" decoding="async">`},pw='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M9.5 9.3a2.6 2.6 0 0 1 5 .9c0 1.7-2.5 2.3-2.5 3.8"/><path d="M12 17.2h.01"/></svg>',mw='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',dh='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>',oA='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',wa=`<button class="icon-btn back" data-act="home" aria-label="${v.a11y.back}">${oA}</button>`,aA=n=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/>${n?'<path d="M17 9l5 6M22 9l-5 6"/>':'<path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12"/>'}</svg>`,cA='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',Zi='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',lA='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>',uA='<svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>',oh=(n,e)=>e===m.uid?"":`<button class="icon-btn soft more" data-act="player-menu" data-uid="${$(e)}" aria-label="${v.report.more($(Ze(n,e)))}">${lA}</button>`,pn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';function gw(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}var ow=(()=>{let n=20261012,e=()=>(n=(n*1664525+1013904223)%4294967296,n/4294967296),t=kd.map((r,i)=>i);for(let r=t.length-1;r>0;r--){let i=Math.floor(e()*(r+1));[t[r],t[i]]=[t[i],t[r]]}return t})();function dA(n=gw()){let e=Math.round(Date.UTC(...n.split("-").map((t,r)=>r===1?t-1:+t))/864e5);return Array.from({length:5},(t,r)=>kd[ow[(e*5+r)%ow.length]])}function yw(n,e){let t=e?{lastShout:e}:{};if(n==="daily")return{pack:"daily",daily:{date:gw(),words:dA()},...t};let r=Tt[n];return r?.plus&&!uh()?t:r?.words?{pack:r.id,deal:cy(r.words,5),...t}:t}var _a=n=>n?.pack&&v.packs[n.pack]?v.packs[n.pack].name:n?.daily?v.packs.daily.name:"";async function ah(n={}){let e=bt(m.name);if(!e)return de(v.errors.nameFirst);if(Dr(e))return de(v.errors.rudeName);xr({name:e}),m.busy=!0,m.error="",M();try{let t;for(let r=0;r<8&&(t=Td(),!!(await Ut(re(t))).exists());r++);await ut(re(t),{code:t,hostUid:m.uid,status:"lobby",createdAt:dt(),players:{[m.uid]:{name:e,joinedAt:Date.now()}},order:[m.uid],round:1,revealed:0,submitted:{},history:[],used:[],winWord:null,nudges:{},...yw(n.daily?"daily":n.pack,n.lastShout)}),m.busy=!1,zn(t)}catch(t){de(t)}}async function aw(n,e){let t=bt(e||m.name),r=String(n||"").trim().toUpperCase();if(!t)return de(v.errors.nameFirst);if(Dr(t))return de(v.errors.rudeName);if(!/^[A-Z]{4}$/.test(r))return de(v.errors.codeFormat);xr({name:t}),m.busy=!0,m.error="",M();try{await hn(he,async i=>{let s=await i.get(re(r));if(!s.exists())throw v.errors.noGame;let a=s.data();if(!a.players[m.uid]){if(a.status!=="lobby")throw v.errors.started;if(a.order.length>=5)throw v.errors.full(5);i.update(re(r),{[`players.${m.uid}`]:{name:t,joinedAt:Date.now()},order:[...a.order,m.uid]})}}),m.busy=!1,zn(r)}catch(i){de(i)}}async function hA(){let n=m.game;if(!(n.order.length<2))try{let e=n.daily?.words||n.deal;if(e){let t=n.order.map((r,i)=>({uid:r,name:n.players[r].name,word:e[i].word,def:e[i].def||""}));await dn(re(n.code),{status:"playing",round:2,revealed:1,submitted:{},history:[{round:1,dealt:!0,words:t}],used:[...new Set(t.map(r=>Ue(r.word)))]})}else await dn(re(n.code),{status:"playing",round:1})}catch(e){de(e)}}async function fA(n){let e=m.game,t=bt(n);if(!t)return de(v.errors.wordFirst);if(Dr(t))return de(v.errors.rudeWord);if(Id(t,e.used))return de(v.errors.used(t));let r=e.round;m.busy=!0,m.error="",M();try{try{await ut(sh(e.code,r,m.uid),{word:t,norm:Ue(t),at:dt()})}catch(i){if(!(await Ut(sh(e.code,r,m.uid))).exists())throw i}m.mySub={round:r,word:t},await hn(he,async i=>{let a=(await i.get(re(e.code))).data();if(a.status!=="playing"||a.round!==r)return;let c={...a.submitted,[m.uid]:!0},u=a.order.every(h=>c[h]);i.update(re(e.code),{submitted:c,...u?{revealed:r}:{}})}),m.busy=!1,M()}catch(i){de(i)}}async function pA(n){if(!Xd){Xd=!0;try{let e=n.round,t=await pd(oa(he,"games",n.code,"rounds",String(e),"subs")),r={};if(t.forEach(a=>{r[a.id]=a.data()}),!n.order.every(a=>r[a]))return;let i=n.order.map(a=>({uid:a,name:n.players[a].name,word:r[a].word,norm:r[a].norm})),s=ly(v.packs[n.pack]?.shouts,n.lastShout||Z.get(`shout.${n.pack}`));await hn(he,async a=>{let u=(await a.get(re(n.code))).data();if(u.status!=="playing"||u.round!==e||u.revealed!==e)return;let h=[...u.history,{round:e,words:i.map(({uid:f,name:g,word:T})=>({uid:f,name:g,word:T}))}];if(ey(i))a.update(re(n.code),{history:h,status:"won",winWord:i[0].word,...s?{shout:s}:{}});else{let f=[...new Set([...u.used,...i.map(g=>g.norm)])];a.update(re(n.code),{history:h,used:f,round:e+1,submitted:{}})}})}catch(e){console.error("resolve failed",e)}finally{Xd=!1}}}async function mA(n){let e=m.game;if(Zd[n]&&Date.now()-Zd[n]<6e4)return oe(v.toasts.waitMinute);Zd[n]=Date.now();try{await dn(re(e.code),{[`nudges.${n}`]:{at:Date.now(),from:e.players[m.uid].name}}),oe(v.toasts.nudged(e.players[n].name))}catch(t){de(t)}}async function gA(){let n=m.game,e=n.history[n.history.length-1];if(e)try{await hn(he,async t=>{let r=(await t.get(re(n.code))).data(),i=r.history[r.history.length-1];r.status!=="playing"||!i||i.round!==e.round||r.vote?.round===e.round||t.update(re(n.code),{vote:{round:e.round,by:m.uid,yes:{[m.uid]:!0},no:{},result:null}})})}catch(t){de(t)}}async function cw(n){let e=m.game;try{await hn(he,async t=>{let r=(await t.get(re(e.code))).data(),i=r.vote,s=r.history[r.history.length-1];if(r.status!=="playing"||!i||i.result||!s||i.round!==s.round)return;let a={...i.yes},c={...i.no};n?a[m.uid]=!0:c[m.uid]=!0,n?r.order.every(u=>a[u])?t.update(re(e.code),{vote:{...i,yes:a,no:c,result:"yes"},status:"won",wonBy:"vote",winWord:Ed(s.words.map(u=>u.word)),history:r.history}):t.update(re(e.code),{vote:{...i,yes:a,no:c}}):t.update(re(e.code),{vote:{...i,yes:a,no:c,result:"no"}})})}catch(t){de(t)}}async function yA(){let n=m.game;m.busy=!0,M();try{let e;for(let t=0;t<8&&(e=Td(),!!(await Ut(re(e))).exists());t++);await ut(re(e),{code:e,hostUid:m.uid,status:"lobby",createdAt:dt(),players:{[m.uid]:{name:n.players[m.uid].name,joinedAt:Date.now()}},order:[m.uid],round:1,revealed:0,submitted:{},history:[],used:[],winWord:null,nudges:{},...yw(n.pack==="daily"?null:n.pack,n.shout||n.lastShout)}),rh.add(e),await dn(re(n.code),{next:e,nextBy:m.uid}),m.busy=!1,zn(e)}catch(e){de(e)}}async function wA(n){let e=n.next;try{let t=await Ut(re(e)),r=t.exists()?t.data():null;if(!r)return M();if(!r.players[m.uid]){if(r.status!=="lobby"||r.order.length>=5)return M();await hn(he,async i=>{let s=(await i.get(re(e))).data();s.players[m.uid]||s.status!=="lobby"||s.order.length>=5||i.update(re(e),{[`players.${m.uid}`]:{name:n.players[m.uid].name,joinedAt:Date.now()},order:[...s.order,m.uid]})}),oe(v.toasts.rematch(r.players[r.hostUid]?.name||v.someone))}zn(e)}catch{M()}}function _A(n){let e=n.history.map((i,s)=>{let a={};i.words.forEach(h=>{let f=Ue(h.word);a[f]=(a[f]||0)+1});let c=s===n.history.length-1;return`${i.words.map(h=>c?"\u{1F7E3}":a[Ue(h.word)]>1?"\u{1F7E0}":"\u26AA").join("")} ${i.words.map(h=>h.word).join(" \xB7 ")}`}),t=_a(n);return`${(n.wonBy==="vote"?v.share.headVote:v.share.head)(n.winWord,n.history.length,t&&n.pack!=="daily"?v.packs[n.pack]?.shareIn||v.packs.shareIn(t):"")}

${e.join(`
`)}

${v.share.playWithUs}`}async function vA(){let n=m.game,e=location.origin+location.pathname,t=_A(n);try{navigator.share?await navigator.share({title:v.appName,text:t,url:e}):(await navigator.clipboard.writeText(`${t} ${e}`),oe(v.toasts.copiedShare))}catch{}}async function bA(){let n=m.game;bt(m.name)||(m.name=n.players[m.uid]?.name||"");let e=n.pack==="daily"?null:n.pack;bw(),ah({pack:e,lastShout:n.shout})}function lw(n){let e=n.order.filter(s=>s!==m.uid).map(s=>Ze(n,s)).filter(Boolean),t=v.games,r=e.length?t.with(va(e)):t.justYou;if(!n.players[m.uid])return{with_:r,status:n.removed?.includes(m.uid)?t.removed:t.notIn,tone:"muted"};if(n.status==="lobby")return{with_:r,status:n.hostUid===m.uid?t.startIt:t.waitingStart,tone:n.hostUid===m.uid?"hot":"muted"};if(n.status==="won")return{with_:r,status:(n.wonBy==="vote"?t.closeEnough:t.forged)(n.winWord),tone:"done"};if(!n.submitted?.[m.uid])return{with_:r,status:t.yourTurn(n.round),tone:"hot"};let i=n.order.filter(s=>!n.submitted?.[s]).map(s=>Ze(n,s));return{with_:r,status:i.length?t.waitingOn(va(i)):t.revealing,tone:"muted"}}async function ts(){try{let e=await pd(Fg(oa(he,"games"),$g("order","array-contains",m.uid),Ug(30))),t=Z.get("games",[]),r=new Set(t.map(i=>i.code));e.forEach(i=>{let s=i.data();m.summaries[s.code]=lw(s),r.has(s.code)||t.push({code:s.code,at:s.createdAt?.toMillis?.()||0})}),t.sort((i,s)=>s.at-i.at),Z.set("games",t.slice(0,12))}catch(e){console.warn("games list",e)}let n=Z.get("games",[]);await Promise.all(n.filter(({code:e})=>!m.summaries[e]).map(async({code:e})=>{try{let t=await Ut(re(e));m.summaries[e]=t.exists()?lw(t.data()):{with_:v.games.ended,status:v.games.gone,tone:"muted",gone:!0}}catch{}})),M()}function TA(n){Z.set("games",Z.get("games",[]).filter(e=>e.code!==n)),delete m.summaries[n],M()}var ww=n=>Je(he,"users",n);function xr(n){m.uid&&ut(ww(m.uid),n,{merge:!0}).catch(e=>console.warn("profile",e))}async function IA(){try{let n=(await Ut(ww(m.uid))).data();if(!n){bt(m.name)&&xr({name:bt(m.name),blocked:[...m.blocked]});return}m.account&&n.name&&(m.name=n.name,Z.set("name",n.name)),n.blocked?.length&&(n.blocked.forEach(e=>m.blocked.add(e)),Z.set("blocked",[...m.blocked])),M()}catch(n){console.warn("profile",n)}}function Ta(n){console.error(n);let e=v.account.errors[n?.code];m.accountError=e===void 0?v.errors.generic:e,m.busy=!1,M()}function hh(n){m.busy=!1,!(!n||n.status==="redirecting")&&(m.showAccount=!1,m.accountError="",m.accountNote="",m.account=vd(ht.currentUser),m.name&&xr({name:bt(m.name)}),n.status==="switched"?(oe(v.account.moving),Wg(he,n.uid,e=>{oe(v.account.moved(e)),ts(),m.code&&zn(m.code)})):oe(n.status==="linked"?v.account.welcome:v.account.welcomeBack),M())}async function EA(){m.busy=!0,m.accountError="",M();try{hh(await Hg(ht,he))}catch(n){Ta(n)}}async function AA(n,e){m.busy=!0,m.accountError="",m.accountNote="",M();try{hh(m.accountMode==="create"?await Qg(ht,n,e):await Yg(ht,he,n,e))}catch(t){Ta(t)}}async function kA(){let n=document.getElementById("acct-email")?.value.trim();if(!n){m.accountError=v.account.needEmail,M();return}try{await Jg(ht,n),m.accountError="",m.accountNote=v.account.resetSent(n),M()}catch(e){Ta(e)}}function _w(){["games","blocked","alertsAsked"].forEach(n=>{try{localStorage.removeItem("samesies."+n)}catch{}}),m.blocked=new Set,m.summaries={}}async function SA(){if(confirm(v.account.confirmSignOut))try{await ha(Gn,he,m.uid),_w(),m.showSettings=!1,m.uid=null,m.account=null,await _d(ht),oe(v.account.signedOut)}catch(n){de(n)}}async function RA(){if(confirm(v.del.confirm))try{await ha(Gn,he,m.uid),await Xg(he,m.uid),_w(),m.name="",Z.set("name",""),m.showSettings=!1,m.uid=null,m.account=null,await _d(ht),oe(v.del.done)}catch(n){de(n)}}async function PA(n,e){let t=m.game,r=m.reportFor,i=t.history.flatMap(s=>s.words.filter(a=>a.uid===r).map(a=>a.word));try{await qg(oa(he,"reports"),{by:m.uid,byName:t.players[m.uid]?.name||"",game:t.code,reported:r,reportedName:t.players[r]?.name||"",words:i,reason:n,note:String(e||"").slice(0,500),at:dt(),handled:!1}),m.reportFor=null,oe(v.report.sent)}catch(s){de(s)}}function vw(n){let e=m.game?.players[n]?.name||v.thisPlayer;m.blocked.has(n)?(m.blocked.delete(n),oe(v.report.unblocked(e))):(m.blocked.add(n),oe(v.report.blocked(e))),Z.set("blocked",[...m.blocked]),xr({blocked:[...m.blocked]}),m.reportFor=null,M()}async function CA(n){let e=m.game,t=e.players[n]?.name||v.thisPlayer;if(confirm(v.confirmRemove(t)))try{await hn(he,async r=>{let i=(await r.get(re(e.code))).data();if(!i.players[n]||i.order.length<=2)return;let s={...i.players};delete s[n];let a=i.order.filter(h=>h!==n),c={...i.submitted};delete c[n];let u=i.status==="playing"&&a.every(h=>c[h]);r.update(re(e.code),{players:s,order:a,submitted:c,removed:[...i.removed||[],n],...i.hostUid===n?{hostUid:a[0]}:{},...u?{revealed:i.round}:{}})}),oe(v.toasts.removed(t))}catch(r){de(r)}}async function DA(n,e,t){let r=m.game,i=`${n}_${e}`,s=r.reactions?.[i]?.[m.uid];try{await dn(re(r.code),{[`reactions.${i}.${m.uid}`]:s===t?Gg():t})}catch(a){de(a)}}function NA(n,e,t){let r=n.reactions?.[`${e}_${t}`]||{},i={};return Object.values(r).forEach(s=>{i[s]=(i[s]||0)+1}),`<div class="reacts">${nA.map(s=>`<button class="react${r[m.uid]===s?" mine":""}" data-act="react" data-round="${e}" data-uid="${$(t)}" data-emoji="${s}" aria-label="${v.a11y.react(s,i[s])}">${s}${i[s]?`<span>${i[s]}</span>`:""}</button>`).join("")}</div>`}function OA(n,e,t){let r=n.reactions?.[`${e}_${t}`]||{},i={};Object.values(r).forEach(a=>{i[a]=(i[a]||0)+1});let s=Object.entries(i).map(([a,c])=>`${a}${c>1?c:""}`);return s.length?`<span class="chip-reacts">${s.join(" ")}</span>`:""}function zn(n){Nr&&Nr(),m.code=n,m.game=null,m.gameMissing=!1,m.mySub=null,m.error="",m.showUsed=!1,fw(n),M(),Nr=aa(re(n),async e=>{if(!e.exists()){m.gameMissing=!0,m.game=null,M();return}let t=e.data();m.game=t,t.players[m.uid]&&iA(n),t.shout&&t.pack&&Z.set(`shout.${t.pack}`,t.shout);let r=t.nudges?.[m.uid];if(r&&r.at>Z.get("nudgeSeen",0)&&(Z.set("nudgeSeen",r.at),Date.now()-r.at<10*6e4)){oe(v.toasts.nudgedYou(r.from));try{navigator.vibrate?.(200)}catch{}}if(t.status==="won"&&t.next&&t.players[m.uid]&&!rh.has(t.next)){rh.add(t.next),wA(t);return}if(t.players[m.uid]&&!Z.get("toured",!1)&&(m.tour=null,Z.set("toured",!0)),t.vote&&!t.vote.result&&t.vote.by!==m.uid){let i=`${n}.${t.vote.round}`;if(iw!==i){iw=i,oe(v.toasts.askedClose(t.players[t.vote.by]?.name||v.someone));try{navigator.vibrate?.(200)}catch{}}}if(t.status==="playing"&&t.submitted?.[m.uid]&&m.mySub?.round!==t.round)try{let i=await Ut(sh(n,t.round,m.uid));i.exists()&&(m.mySub={round:t.round,word:i.data().word})}catch{}t.status==="playing"&&t.revealed===t.round&&pA(t),M()},e=>de(e))}function bw(){Nr&&Nr(),Nr=null,m.code=null,m.game=null,m.gameMissing=!1,m.error="",fw(null),M(),ts()}function Ia(n,e){let t=n.used.length;return`
  <header class="bar">
    ${wa}
    <div class="bar-title">
      <span class="eyebrow">${v.header.game($(n.code))}</span>
      <h1 class="h-round">${$(e)}</h1>
    </div>
    <button class="icon-btn quiet" data-act="tour" aria-label="${v.a11y.howTo}">${pw}</button>
    <button class="icon-btn quiet" data-act="mute" aria-label="${jn()?v.a11y.soundOn:v.a11y.soundOff}" aria-pressed="${jn()}">${aA(jn())}</button>
    ${n.status!=="lobby"?`<button class="icon-btn" data-act="used" aria-label="${v.a11y.usedWords(t)}">${mw}</button>`:""}
  </header>`}function uw(n=v.loading){return`<main class="screen center"><div class="pulse">${Be("logo",150)}</div><p class="muted">${$(n)}</p></main>`}function xA(){let n=Z.get("games",[]);return`
  <main class="screen">
    <div class="home-top"><button class="help-pill" data-act="tour">${pw}${v.home.howTo}</button><button class="icon-btn quiet settings-btn" data-act="settings" aria-label="${v.a11y.settings}">${cA}</button></div>
    <div class="hero">
      ${Be("logo",210,"hero-logo")}
      <h1 class="wordmark">Brain<b>smith</b></h1>
      <p class="tagline">${v.home.tagline}</p>
    </div>
    ${m.moving?`<p class="notice move-note">${v.move.home}</p>`:""}
    <div class="grow"></div>
    <form class="stack" data-form="create">
      <label for="name" class="label">${v.home.yourName}</label>
      <input id="name" name="name" class="input" autocomplete="nickname" maxlength="40" value="${$(m.name)}" placeholder="${v.home.namePlaceholder}">
      <button class="btn primary" ${m.busy?"disabled":""}>${v.home.start}</button>
    </form>
    <button class="daily-card" data-act="daily" ${m.busy?"disabled":""}>
      <span class="daily-top"><span class="eyebrow">${v.home.dailyEyebrow}</span><span class="muted small">${$(new Date().toLocaleDateString(void 0,{month:"short",day:"numeric"}))}</span></span>
      <span class="daily-title">${v.home.dailyTitle}</span>${Be("bolts",64,"daily-art")}
      <span class="muted small">${v.home.dailySub}</span>
    </button>
    <div class="or"><span></span>${v.home.or}<span></span></div>
    <form class="row" data-form="join">
      <label for="code" class="sr-only">${v.a11y.gameCode}</label>
      <input id="code" name="code" class="input code" maxlength="4" autocapitalize="characters" autocomplete="off" placeholder="${v.home.codePlaceholder}">
      <button class="btn outline" ${m.busy?"disabled":""}>${v.home.join}</button>
    </form>
    ${m.error?`<p class="error" role="alert">${$(m.error)}</p>`:""}
    ${n.length?(()=>{let e=n.filter(t=>m.summaries[t.code]?.tone==="hot").length;return`<button class="btn soft games-btn" data-act="games">${v.games.button(n.length)}${e?`<span class="turn-pill">${v.games.needYou(e)}</span>`:""}</button>`})():""}
    ${!m.account&&n.length?`<button class="linkish fine save-games" data-act="account">${v.home.saveGames}</button>`:""}
    <p class="fine">${v.home.fine}</p>
    <p class="fine maker">${v.home.maker}</p>
  </main>`}function VA(){let n=v.packs,e=t=>{let r=Tt[t];return`
      <button class="pack-tile pt-${t}" data-act="pick-pack" data-pack="${t}" ${m.busy?"disabled":""}>
        <span class="pack-art">${Be(r.art,84)}</span>
        <span class="pack-text"><span class="pack-name">${n[t].name}</span><span class="pack-blurb">${n[t].blurb}</span></span>
        <span class="pack-tag${r.plus?" plus":""}">${r.draft?n.preview:r.plus?n.plus:n.free}</span>
      </button>`};return`
  <div class="sheet-backdrop" data-act="closepacks">
    <div class="sheet packs-sheet" role="dialog" aria-modal="true" aria-labelledby="packs-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="packs-title" class="h-sheet">${n.pickTitle}</h2>
        <button class="icon-btn soft" data-act="closepacks" aria-label="${v.a11y.close}">${pn}</button>
      </div>
      <p class="muted">${n.pickSub}</p>
      <div class="pack-list">
        ${oy.map(e).join("")}
        ${ay.filter(t=>!Tt[t].draft||hw()).map(t=>uh()?e(t):`
        <button class="pack-tile pt-${t} locked" data-act="pack-teaser" data-pack="${t}">
          <span class="pack-art">${Be(Tt[t].art,84)}</span>
          <span class="pack-text"><span class="pack-name">${n[t].name}</span><span class="pack-blurb">${n.soon}</span></span>
          <span class="pack-tag plus">${n.plus}</span>
        </button>`).join("")}
      </div>
    </div>
  </div>`}var MA=(n,e=150)=>It(n)?`<div class="pack-logo">${Be(Tt[n.pack].logo,e)}</div>`:"";function LA(n){let e=n.order.length>=5,t=n.status!=="lobby";return`
  <main class="screen">
    <header class="bar">${wa}</header>
    <div class="hero tight">
      ${Be("logo",170,"hero-logo")}
      <h1 class="wordmark small">Brain<b>smith</b></h1>
      <p class="tagline">${v.join.invited($(Ze(n,n.hostUid)||v.aFriend),$(n.code))}</p>
      ${_a(n)?`<span class="badge">${$(_a(n))}</span>`:""}
    </div>
    <div class="grow"></div>
    ${t?`<p class="notice">${v.join.started}</p>
      <button class="btn outline" data-act="home">${v.goToStart}</button>`:e?`<p class="notice">${v.join.full}</p><button class="btn outline" data-act="home">${v.goToStart}</button>`:`<form class="stack" data-form="joinlink">
        <label for="name" class="label">${v.home.yourName}</label>
        <input id="name" name="name" class="input" autocomplete="nickname" maxlength="40" value="${$(m.name)}" placeholder="${v.home.namePlaceholder}">
        <button class="btn primary" ${m.busy?"disabled":""}>${v.join.button}</button>
      </form>`}
    ${m.error?`<p class="error" role="alert">${$(m.error)}</p>`:""}
  </main>`}function FA(n){let e=n.hostUid===m.uid,t=n.order.length>=2;return`
  <main class="screen">
    ${Ia(n,v.lobby.title)}
    <section class="card center-text">
      ${It(n)?MA(n,130):n.daily?`<span class="badge">${v.lobby.dailyBadge}</span>`:""}
      <span class="muted">${v.lobby.inviteWith}</span>
      <div class="big-code">${$(n.code)}</div>
      <button class="btn soft" data-act="share">${v.lobby.shareLink}</button>
    </section>
    <section class="stack">
      <span class="eyebrow">${v.lobby.players(n.order.length,5)}</span>
      ${n.order.map(r=>`
        <div class="player">
          <div class="dot done" style="background:${Or(n,r)}">${dh}</div>
          <span class="pname">${$(Ze(n,r))}${r===m.uid?v.you:""}</span>
          ${r===n.hostUid?`<span class="muted small">${v.host}</span>`:""}
          ${oh(n,r)}
        </div>`).join("")}
    </section>
    <div class="grow"></div>
    ${e?`<button class="btn primary" data-act="start" ${t?"":"disabled"}>${t?v.lobby.startNow:v.lobby.needMore}</button>`:`<p class="fine">${v.lobby.waitingFor($(Ze(n,n.hostUid)||v.theHost))}</p>`}
  </main>`}function $A(n){let e=n.history[n.history.length-1],t=!!n.submitted?.[m.uid],r=n.order.filter(i=>!n.submitted?.[i]);return`
  <main class="screen">
    ${Ia(n,v.round.title(n.round))}
    ${e&&n.vote?.round===e.round&&!n.vote.result?Tw(n):""}
    <section class="card center-text">
      ${e?`
        <span class="muted">${v.round.connect}</span>
        <div class="word-chips">${e.words.map(i=>`<span class="word-chip" style="--pc:${Or(n,i.uid)}">${$(es(i))}${OA(n,e.round,i.uid)}</span>`).join("")}</div>
        ${e.dealt&&e.words.some(i=>i.def)?`<div class="defs">${e.words.filter(i=>i.def).map(i=>`<span><strong>${$(i.word)}:</strong> ${$(i.def)}</span>`).join("")}</div>`:""}
        ${n.vote?.round===e.round||e.dealt?"":`<button class="linkish close-link" data-act="vote">${v.round.askClose}</button>`}`:`
        <span class="muted">${v.round.roundOne}</span>
        <p class="prompt">${v.round.prompt}</p>
        <span class="muted small">${v.round.promptTip}</span>`}
    </section>
    ${t?`
      <section class="locked">
        <span class="muted">${v.round.lockedIn}</span>
        <div class="locked-word">${$(m.mySub?.round===n.round?m.mySub.word:"\u2713")}</div>
        <span class="muted small">${r.length?v.round.waitingOn(r.map(i=>$(Ze(n,i))).join(", ")):v.round.revealing}</span>
      </section>
      ${r.length?WA():""}`:`
      <form class="stack" data-form="word">
        <label for="word" class="label">${v.round.yourWord}</label>
        <input id="word" name="word" class="input big" maxlength="40" autocomplete="off" autocorrect="on" spellcheck="true" autocapitalize="sentences" placeholder="${v.round.wordPlaceholder}">
        <button class="btn primary" ${m.busy?"disabled":""}>${v.round.lock}</button>
        ${e?"":`<button type="button" class="btn soft" data-act="starter">${v.round.starter}</button>`}
        <span class="fine">${v.round.secret}</span>
      </form>`}
    ${m.error?`<p class="error" role="alert">${$(m.error)}</p>`:""}
    <div class="grow"></div>
    <section class="stack tight">
      <span class="eyebrow">${v.round.players}</span>
      ${n.order.map(i=>{let s=!!n.submitted?.[i],a=i===m.uid,c=!a&&!s&&n.order.length>2&&(n.hostUid===m.uid||i===n.hostUid);return`
        <div class="player">
          ${s?`<div class="dot done" style="background:${Or(n,i)}">${dh}</div>`:`<div class="dot" style="border-color:${Or(n,i)}"></div>`}
          <span class="pname">${$(Ze(n,i))}${a?v.you:""}</span>
          ${s?`<span class="muted small">${v.round.playerLocked}</span>${oh(n,i)}`:a?`<span class="muted small">${v.round.thinking}</span>`:`<button class="btn nudge" data-act="nudge" data-uid="${$(i)}">${v.round.nudge}</button>${c?`<button class="icon-btn soft remove" data-act="remove" data-uid="${$(i)}" aria-label="${v.a11y.removePlayer($(Ze(n,i)))}">${pn}</button>`:""}${oh(n,i)}`}
        </div>`}).join("")}
    </section>
  </main>`}function UA(n){let e={};return n.forEach(t=>{var r;(e[r=Ue(t.word)]||(e[r]=[])).push(t)}),Object.values(e).filter(t=>t.length>1).sort((t,r)=>r.length-t.length)}var va=v.listNames;function BA(n,e){let t=UA(e.words),r=new Set(t.flat().map(a=>a.uid)),i=t.length?t.map(a=>v.reveal.said(va(a.map(c=>$(ih(c)))),a.length===2,$(es(a[0])))).join("<br>"):"";if(e.dealt)return qA(n,e);let s=t.length?v.reveal.soClose:e.words.length===2?v.reveal.notYetTwo:v.reveal.notYetAll;return`
  <main class="screen reveal-screen">
    ${Ia(n,v.reveal.title(e.round))}
    <section class="stack reveal">
      ${e.words.map(a=>`
        <div class="reveal-card${r.has(a.uid)?" matched":""}" style="--pc:${Or(n,a.uid)}">
          <span class="rname">${$(ih(a))}</span>
          <span class="rword">${$(es(a))}</span>
          ${NA(n,e.round,a.uid)}
        </div>`).join("")}
    </section>
    <div class="after-reveal stack">
    ${i?`<div class="so-close"><span class="so-close-names">${i}</span><span class="muted">${s}</span></div>`:`<div class="row msg">${Be("spark",44)}<span class="muted">${$(s)}</span></div>`}
    ${n.vote?.round===e.round?Tw(n):`<button class="btn ${Ad(e.words.map(a=>a.word))?"close-hot":"soft"}" data-act="vote">${Ad(e.words.map(a=>a.word))?v.reveal.closeHot:v.reveal.close}</button>`}
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${e.round}">${v.reveal.next(e.round+1)}</button>
  </main>`}function qA(n,e){return`
  <main class="screen reveal-screen">
    ${Ia(n,v.packs[n.pack]?.dealtTitle||v.dealt.title)}
    <section class="stack reveal">
      ${e.words.map(t=>`
        <div class="reveal-card" style="--pc:${Or(n,t.uid)}">
          <span class="rname">${v.dealt.got($(ih(t)))}</span>
          <span class="rword">${$(t.word)}</span>
          ${t.def?`<span class="rdef">${$(t.def)}</span>`:""}
        </div>`).join("")}
    </section>
    <div class="after-reveal stack">
      <div class="row msg">${Be("spark",44)}<span class="muted">${v.dealt.msg}</span></div>
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${e.round}">${v.dealt.next}</button>
  </main>`}function Tw(n){let e=n.vote,t=$(Ze(n,e.by)||v.someone);if(e.result==="no"){let s=$(Ze(n,Object.keys(e.no)[0])||v.someone);return`<section class="vote done"><span class="muted">${v.vote.playOn(s)}</span></section>`}let r=e.yes[m.uid]||e.no[m.uid],i=n.order.filter(s=>!e.yes[s]&&!e.no[s]).map(s=>$(Ze(n,s)));return`
  <section class="vote" aria-live="polite">
    <span class="vote-title">${v.vote.title}</span>
    <span class="muted">${v.vote.explain(e.by===m.uid?v.vote.youAsked:v.vote.asked(t),e.round)}</span>
    ${r?`<span class="muted small">${i.length?v.vote.waitingOn(i.join(", ")):v.vote.counting}</span>`:`<div class="row"><button class="btn primary grow" data-act="yes">${v.vote.yes}</button><button class="btn outline" data-act="no">${v.vote.no}</button></div>`}
  </section>`}function jA(n){let e=n.order.map(r=>Ze(n,r)),t=va(e);return`
  <main class="screen win">
    <div class="win-top">
      <div class="pop win-art">${It(n)?Be(Tt[n.pack].art,150):Be("swing",150)}</div>
      <h1 class="win-title">${n.wonBy==="vote"?v.won.closeEnough:$(n.shout||v.won.forged)}</h1>
      ${It(n)?`<span class="win-pack">${$(v.packs[n.pack]?.forged||v.packs.forgedIn(_a(n)))}</span>`:""}
      <span class="win-sub">${n.wonBy==="vote"?v.won.agreed:v.won.everyone}</span>
      <div class="win-word">${$(n.winWord)}</div>
      <span class="win-sub">${$(t)} \xB7 ${v.rounds(n.history.length)}</span>
    </div>
    <div class="grow"></div>
    <section class="chain">
      <span class="eyebrow light">${v.won.howYouGot}</span>
      ${n.history.map((r,i)=>`<span class="${i===n.history.length-1?"strong":""}">${r.words.map(s=>$(es(s))).join(" \xB7 ")}</span>`).join("")}
    </section>
    ${m.moving?`<p class="notice move-note">${v.move.won}</p>`:""}
    <button class="btn coral" data-act="sharegame">${v.won.share}</button>
    ${n.next?`<button class="btn white" data-act="open" data-code="${$(n.next)}">${v.won.joinNext}</button>`:`<button class="btn white" data-act="again" ${m.busy?"disabled":""}>${v.won.again}</button>`}
    <div class="row">
      <button class="btn ghost-light grow" data-act="newcrew" ${m.busy?"disabled":""}>${v.won.newCrew}</button>
      <button class="btn ghost-light grow" data-act="home">${v.won.home}</button>
    </div>
  </main>`}var qt=(n,e,t="")=>`<span class="mini ${t}"><b>${n}</b><i>${e}</i></span>`,ne=v.tour,[eh,th,nh]=ne.names,jt=[{title:ne.goalTitle,body:ne.goalBody,art:()=>`<div class="tour-art">${Be("logo",190)}</div>`},{title:ne.secretTitle,body:ne.secretBody,art:()=>`<div class="scene">${qt("?",eh,"back")}${qt("?",th,"back d1")}${qt("?",nh,"back d2")}</div>`},{title:ne.flipTitle,body:ne.flipBody,art:()=>`<div class="scene flip">${qt(ne.flipWords[0],eh)}${qt(ne.flipWords[1],th,"d1")}${qt(ne.flipWords[2],nh,"d2")}</div>`},{title:ne.middleTitle,body:ne.middleBody,art:()=>`<div class="scene bridge"><span class="bridge-row"><span class="pill-word">${ne.flipWords[0]}</span><span class="plus">+</span><span class="pill-word">${ne.flipWords[1]}</span></span><span class="arrow">\u2193</span><span class="pill-word hot">${ne.middleGuess}</span></div>`},{title:ne.forgeTitle,body:ne.forgeBody,art:()=>`<div class="scene forged">${Be("swing",80,"forge-hammer")}${qt(ne.forgeWord,eh,"win")}${qt(ne.forgeWord,th,"win d1")}${qt(ne.forgeWord,nh,"win d2")}</div>`},{title:ne.matchTitle,body:"",art:()=>`<ul class="rules">${ne.matchRules.map(([n,e,t])=>`
      <li class="${n}"><span class="mark">${n==="ok"?dh:"\u2715"}</span><span><b>${e}</b> ${t}</span></li>`).join("")}
    </ul>`},{title:ne.toolsTitle,body:"",art:()=>`<ul class="rules tools">${ne.tools.map(([n,e,t])=>`
      <li><span class="mark">${n==="list"?mw:n}</span><span><b>${e}</b> ${t}</span></li>`).join("")}
    </ul>`}];function GA(){let n=m.tour,e=jt.length-1;return`
  <div class="sheet-backdrop tour" data-act="tour-skip">
    <div class="sheet howto" role="dialog" aria-modal="true" aria-labelledby="tour-title" data-stop>
      <div class="howto-head">
        <span id="tour-title" class="h-sheet">${ne.title}</span>
        <button class="icon-btn quiet" data-act="tour-skip" aria-label="${v.a11y.closeHowTo}">\u2715</button>
      </div>
      <div class="howto-track" tabindex="0" aria-roledescription="carousel">
        ${jt.map((t,r)=>`
        <section class="howto-card${r===n?" on":""}" aria-roledescription="slide" aria-label="${v.a11y.slide(r+1,jt.length,t.title)}">
          ${t.art()}
          <span class="eyebrow">${ne.count(r+1,jt.length)}</span>
          <h2 class="howto-title">${t.title}</h2>
          ${t.body?`<p class="muted tour-body">${t.body}</p>`:""}
        </section>`).join("")}
      </div>
      <div class="dots" aria-hidden="true">${jt.map((t,r)=>`<span class="${r===n?"on":""}"></span>`).join("")}</div>
      <div class="row howto-nav">
        <button class="btn ghost" data-act="tour-skip" ${n===e?"hidden":""}>${ne.skip}</button>
        <button class="btn primary grow" data-act="tour-next">${n===e?ne.done:ne.next}</button>
      </div>
    </div>
  </div>`}function ch(){let n=_e.querySelector(".howto-track");if(!n)return;n.scrollLeft=m.tour*n.clientWidth;let e=()=>{let t=Math.round(n.scrollLeft/n.clientWidth);if(t===m.tour||t<0||t>=jt.length)return;m.tour=t;let r=t===jt.length-1;_e.querySelectorAll(".tour .dots span").forEach((s,a)=>s.classList.toggle("on",a===t)),_e.querySelectorAll(".howto-card").forEach((s,a)=>s.classList.toggle("on",a===t));let i=_e.querySelector("[data-act=tour-next]");i.textContent=r?ne.done:ne.next,_e.querySelector(".howto-nav .btn.ghost").hidden=r};n.addEventListener("scroll",()=>{clearTimeout(ch.t),ch.t=setTimeout(e,60)},{passive:!0})}function lh(n){let e=_e.querySelector(".howto-track");if(!e){m.tour=n,M();return}e.scrollTo({left:n*e.clientWidth,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}function zA(){let n=Z.get("games",[]);return`
  <div class="sheet-backdrop" data-act="closegames">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="games-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="games-title" class="h-sheet">${v.games.title}</h2>
        <button class="icon-btn soft" data-act="closegames" aria-label="${v.a11y.close}">${pn}</button>
      </div>
      ${n.length?n.map(({code:e})=>{let t=m.summaries[e];return`
        <div class="game-row">
          <button class="game-open" data-act="${t?.gone?"forget":"open"}" data-code="${$(e)}">
            <span class="game-with">${$(t?t.with_:v.games.loading)}</span>
            <span class="game-status ${t?.tone||""}">${$(t?t.status:e)}</span>
          </button>
          <button class="icon-btn soft" data-act="forget" data-code="${$(e)}" aria-label="${v.a11y.forgetGame($(e))}">${pn}</button>
        </div>`}).join(""):`<p class="muted">${v.games.none}</p>`}
    </div>
  </div>`}function WA(){let n=v.alerts;return Ji()!=="yes"||da()!=="default"||Z.get("alertsAsked",!1)?"":`
      <section class="alert-ask">
        <span class="alert-ask-title">${n.askTitle}</span>
        <span class="muted small">${n.askBody}</span>
        <div class="row"><button class="btn primary grow" data-act="alerts-on">${n.yes}</button><button class="btn ghost" data-act="alerts-later">${n.no}</button></div>
      </section>`}function HA(){let n=v.alerts,e=Ji();if(e==="no")return"";if(e==="ios-install")return`<div class="set-row static"><span class="set-text"><span class="set-label">${n.label}</span><span class="set-sub">${n.iosInstall}</span></span></div>`;if(da()==="denied")return`<div class="set-row static"><span class="set-text"><span class="set-label">${n.label}</span><span class="set-sub">${n.blocked}</span></span></div>`;let t=Wd();return`
        <button class="set-row" data-act="${t?"alerts-off":"alerts-on"}" role="switch" aria-checked="${t}">
          <span class="set-text"><span class="set-label">${n.label}</span><span class="set-sub">${n.sub}</span></span>
          <span class="switch ${t?"on":""}" aria-hidden="true"><i></i></span>
        </button>`}async function KA(){Z.set("alertsAsked",!0);try{let n=await Wy(Gn,he,m.uid);oe(n?v.alerts.onToast:v.alerts.notNow)}catch(n){console.error(n),oe(v.alerts.failed)}M()}function QA(){let n=Z.get("games",[]),e=v.settings,t=(r,i,s="",a="")=>`
        <button ${a.includes("class=")?"":'class="set-row"'} data-act="${r}" ${a}>
          <span class="set-text"><span class="set-label">${i}</span>${s?`<span class="set-sub">${s}</span>`:""}</span>${Zi}
        </button>`;return`
  <div class="sheet-backdrop" data-act="closesettings">
    <div class="sheet settings" role="dialog" aria-modal="true" aria-labelledby="settings-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="settings-title" class="h-sheet">${e.title}</h2>
        <button class="icon-btn soft" data-act="closesettings" aria-label="${v.a11y.close}">${pn}</button>
      </div>

      <div class="set-group">
        ${m.account?`<div class="set-row static"><span class="set-text"><span class="set-label">${$(e.signedIn(m.account.email))}</span><span class="set-sub">${e.signedInSub}</span></span></div>
        ${t("signout",e.signOut)}`:t("account",e.account,e.accountSub,'class="set-row hot-row"')}
      </div>

      <form class="set-group" data-form="setname">
        <label for="set-name" class="label">${e.yourName}</label>
        <div class="row">
          <input id="set-name" name="setname" class="input grow" autocomplete="nickname" maxlength="40" value="${$(m.name)}" placeholder="${v.home.namePlaceholder}">
          <button class="btn outline">${e.save}</button>
        </div>
        <span class="set-sub">${e.nameNote}</span>
      </form>

      <div class="set-group">
        <button class="set-row" data-act="mute" role="switch" aria-checked="${!jn()}">
          <span class="set-text"><span class="set-label">${e.sound}</span><span class="set-sub">${e.soundSub}</span></span>
          <span class="switch ${jn()?"":"on"}" aria-hidden="true"><i></i></span>
        </button>
        ${HA()}
        ${t("settings-games",e.pastGames,n.length?e.pastCount(n.length):e.noneYet)}
        ${t("settings-tour",e.howTo,e.howToSub)}
      </div>

      <div class="set-group">
        <a class="set-row" href="privacy.html"><span class="set-text"><span class="set-label">${e.privacy}</span></span>${Zi}</a>
        <a class="set-row" href="terms.html"><span class="set-text"><span class="set-label">${e.terms}</span></span>${Zi}</a>
        <div class="set-row disabled" aria-disabled="true"><span class="set-text"><span class="set-label">${e.restore}</span><span class="set-sub">${e.restoreSoon}</span></span></div>
      </div>

      <div class="set-group">
        ${t("delete-account",e.deleteAccount,e.deleteSub,'class="set-row danger-row"')}
      </div>

      <p class="fine maker">${e.contact}<br>${e.footer}</p>
    </div>
  </div>`}var YA=()=>navigator.standalone===!0;function JA(){let n=v.account,e=m.accountMode==="create";return`
  <div class="sheet-backdrop" data-act="closeaccount">
    <div class="sheet account" role="dialog" aria-modal="true" aria-labelledby="account-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="account-title" class="h-sheet">${n.title}</h2>
        <button class="icon-btn soft" data-act="closeaccount" aria-label="${v.a11y.close}">${pn}</button>
      </div>
      <p class="muted">${n.body}</p>
      ${YA()?`<p class="notice small-note">${n.homeScreenNote}</p>`:`<button class="btn google" data-act="google" ${m.busy?"disabled":""}>${uA}${n.google}</button>
      <div class="or"><span></span>${n.or}<span></span></div>`}
      <form class="stack tight" data-form="email">
        <label for="acct-email" class="sr-only">${n.email}</label>
        <input id="acct-email" name="email" type="email" class="input" autocomplete="email" autocapitalize="off" placeholder="${n.email}" required>
        <label for="acct-pass" class="sr-only">${n.password}</label>
        <input id="acct-pass" name="password" type="password" class="input" autocomplete="${e?"new-password":"current-password"}" minlength="6" placeholder="${e?n.passwordNew:n.password}" required>
        <button class="btn primary" ${m.busy?"disabled":""}>${m.busy?n.working:e?n.create:n.signIn}</button>
      </form>
      ${m.accountError?`<p class="error" role="alert">${$(m.accountError)}</p>`:""}
      ${m.accountNote?`<p class="notice small-note" role="status">${$(m.accountNote)}</p>`:""}
      <div class="row between acct-links">
        <button class="linkish acct-link" data-act="account-mode">${e?n.haveOne:n.needOne}</button>
        ${e?"":`<button class="linkish acct-link" data-act="forgot">${n.forgot}</button>`}
      </div>
    </div>
  </div>`}function XA(n){let e=v.report,t=m.reportFor,r=$(n.players[t]?.name||v.thisPlayer),i=m.blocked.has(t),s=m.reportStep==="report"?`<form class="stack tight" data-form="report">
        <span class="label">${e.what}</span>
        ${e.reasons.map((a,c)=>`<label class="choice"><input type="radio" name="reason" value="${$(a)}" ${c===0?"checked":""}><span>${$(a)}</span></label>`).join("")}
        <label for="report-note" class="sr-only">${e.note}</label>
        <input id="report-note" name="note" class="input" maxlength="500" placeholder="${e.note}">
        ${i?"":`<label class="choice"><input type="checkbox" name="block"><span>${e.alsoBlock(r)}</span></label>`}
        <button class="btn primary">${e.send}</button>
      </form>`:`<div class="set-group">
        <button class="set-row" data-act="report-start"><span class="set-text"><span class="set-label">${e.reportBtn(r)}</span><span class="set-sub">${e.reportSub}</span></span>${Zi}</button>
        <button class="set-row" data-act="block" data-uid="${$(t)}"><span class="set-text"><span class="set-label">${i?e.unblockBtn(r):e.blockBtn(r)}</span><span class="set-sub">${i?e.unblockSub:e.blockSub}</span></span>${Zi}</button>
      </div>`;return`
  <div class="sheet-backdrop" data-act="closereport">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="report-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="report-title" class="h-sheet">${m.reportStep==="report"?e.title(r):r}</h2>
        <button class="icon-btn soft" data-act="closereport" aria-label="${v.a11y.close}">${pn}</button>
      </div>
      ${s}
    </div>
  </div>`}function ZA(n){return`
  <div class="sheet-backdrop" data-act="closeused">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="used-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="used-title" class="h-sheet">${v.used.title}</h2>
        <button class="icon-btn soft" data-act="closeused" aria-label="${v.a11y.close}">${pn}</button>
      </div>
      <p class="muted">${v.used.explain}</p>
      ${n.history.length?n.history.map(e=>`
        <div class="stack tight">
          <span class="eyebrow">${v.used.round(e.round)}</span>
          <div class="chips">${e.words.filter((t,r,i)=>i.findIndex(s=>Ue(s.word)===Ue(t.word))===r).map(t=>`<span class="chip static">${$(es(t))}</span>`).join("")}</div>
        </div>`).join(""):`<p class="muted">${v.used.none}</p>`}
    </div>
  </div>`}function ek(){if(m.authError)return`<main class="screen center"><p class="error">${$(m.authError)}</p></main>`;if(!m.uid)return uw();if(!m.code)return xA();if(m.gameMissing)return`<main class="screen center"><header class="bar top-left">${wa}</header>${Be("logo",150)}<p class="notice">${v.missing($(m.code))}</p><button class="btn outline" data-act="home">${v.goToStart}</button></main>`;let n=m.game;if(!n)return uw(v.findingGame);if(!n.players[m.uid]&&n.removed?.includes(m.uid))return`<main class="screen center"><header class="bar top-left">${wa}</header>${Be("hammer",120)}<p class="notice">${v.removedFrom($(n.code))}</p><button class="btn outline" data-act="home">${v.goToStart}</button></main>`;if(!n.players[m.uid])return LA(n);if(n.status==="lobby")return FA(n);if(n.status==="won")return jA(n);let e=n.history[n.history.length-1],t=Z.get(`seen.${n.code}`,0);return e&&e.round>t?BA(n,e):$A(n)}function M(){let n=document.activeElement,e={};_e.querySelectorAll("input").forEach(g=>{e[g.id]=g.value});let t=n&&n.tagName==="INPUT"?n.id:null,r=t?n.selectionStart:null,i=m.game,s=!!_e.querySelector(".sheet-backdrop:not(.tour)"),a=!!_e.querySelector(".tour"),c=_e.querySelector(".toast")?.textContent,u=m.code?It(i):null;document.body.dataset.pack!==(u||"")&&(document.body.dataset.pack=u||"",Xi(u)),_e.innerHTML=ek()+(m.showUsed&&i?ZA(i):"")+(m.showGames&&!m.code?zA():"")+(m.showSettings&&!m.code&&!m.showAccount?QA():"")+(m.showPacks&&!m.code?VA():"")+(m.showAccount&&!m.code?JA():"")+(m.reportFor&&i?.players[m.reportFor]?XA(i):"")+(m.tour!==null?GA():"")+(m.toast?`<div class="toast" role="status">${$(m.toast)}</div>`:"");let h=_e.querySelector("main"),f=h?h.className+"|"+(h.querySelector("h1")?.textContent||""):"";if(f===M.lastKey?h.classList.add("no-anim"):h&&tk(h,i),M.lastKey=f,s&&_e.querySelector(".sheet-backdrop")?.classList.add("no-anim"),a&&_e.querySelector(".tour")?.classList.add("no-anim"),ch(),c&&c===m.toast&&_e.querySelector(".toast")?.classList.add("no-anim"),_e.querySelectorAll("input").forEach(g=>{e[g.id]!==void 0&&g.id!=="name"&&(g.value=e[g.id]),g.id==="name"&&e.name!==void 0&&(g.value=e.name)}),t){let g=document.getElementById(t);if(g){g.focus();try{g.setSelectionRange(r,r)}catch{}}}}function tk(n,e){if(n.classList.contains("reveal-screen"))Jy(1.4,It(e)),n.querySelector(".matched")&&setTimeout(()=>Xy(It(e)),1700);else if(n.classList.contains("win")){ew(Tt[It(e)]?.confetti),Zy(e?.wonBy==="vote"?null:It(e));try{navigator.vibrate?.([80,60,160])}catch{}}}_e.addEventListener("input",n=>{if(n.target.id==="name"&&(m.name=n.target.value,Z.set("name",m.name)),n.target.id==="code"&&(n.target.value=n.target.value.toUpperCase().replace(/[^A-Z]/g,"")),m.error){m.error="";let e=_e.querySelector(".error");e&&e.remove()}});_e.addEventListener("submit",n=>{n.preventDefault();let e=n.target.dataset.form,t=new FormData(n.target);if(e==="create"){let r=bt(m.name);if(!r)return de(v.errors.nameFirst);if(Dr(r))return de(v.errors.rudeName);m.showPacks=!0,M()}if(e==="join"&&aw(t.get("code")),e==="joinlink"&&aw(m.code),e==="word"&&fA(t.get("word")),e==="email"&&AA(String(t.get("email")||""),String(t.get("password")||"")),e==="report"){let r=m.reportFor;PA(String(t.get("reason")||""),t.get("note")).then(()=>{t.get("block")&&!m.blocked.has(r)?(m.reportFor=r,vw(r)):M()})}if(e==="setname"){let r=bt(t.get("setname")||"");if(!r){oe(v.toasts.nameFirst);return}if(Dr(r)){oe(v.errors.rudeName);return}m.name=r,Z.set("name",r),xr({name:r});let i=document.getElementById("name");i&&(i.value=r),oe(v.toasts.nameSaved),M()}});_e.addEventListener("click",async n=>{let e=n.target.closest("[data-act]");if(!e||e.dataset.act==="closeused"&&n.target.closest("[data-stop]")&&!n.target.closest("button"))return;let t=e.dataset.act;if(t==="home"&&(bw(),m.moving&&Iw()),t==="open"&&(m.showGames=!1,zn(e.dataset.code)),t==="start"&&hA(),t==="nudge"&&mA(e.dataset.uid),t==="again"&&yA(),t==="vote"&&gA(),t==="sharegame"&&vA(),t==="games"&&(m.showGames=!0,M(),ts()),t==="settings"&&(m.showSettings=!0,M()),t==="closesettings"&&(e.tagName==="BUTTON"||!n.target.closest("[data-stop]"))&&(m.showSettings=!1,M()),t==="settings-games"&&(m.showSettings=!1,m.showGames=!0,M(),ts()),t==="settings-tour"&&(m.showSettings=!1,m.tour=0,M()),t==="closegames"&&!(n.target.closest("[data-stop]")&&!n.target.closest("button"))&&(m.showGames=!1,M()),t==="forget"&&TA(e.dataset.code),t==="account"&&(m.showAccount=!0,m.accountError="",m.accountNote="",M()),t==="closeaccount"&&(e.tagName==="BUTTON"||!n.target.closest("[data-stop]"))&&(m.showAccount=!1,M()),t==="account-mode"&&(m.accountMode=m.accountMode==="create"?"signin":"create",m.accountError="",m.accountNote="",M()),t==="google"&&EA(),t==="forgot"&&kA(),t==="signout"&&SA(),t==="delete-account"&&RA(),t==="player-menu"&&(m.reportFor=e.dataset.uid,m.reportStep="menu",M()),t==="closereport"&&(e.tagName==="BUTTON"||!n.target.closest("[data-stop]"))&&(m.reportFor=null,M()),t==="report-start"&&(m.reportStep="report",M()),t==="block"&&vw(e.dataset.uid),t==="remove"&&CA(e.dataset.uid),t==="react"&&DA(Number(e.dataset.round),e.dataset.uid,e.dataset.emoji),t==="daily"&&ah({daily:!0}),t==="pick-pack"&&(m.showPacks=!1,Tt[e.dataset.pack]?.plus&&!uh()?oe(v.packs.soonToast(v.packs[e.dataset.pack].name)):ah({pack:e.dataset.pack})),t==="pack-teaser"&&oe(v.packs.soonToast(v.packs[e.dataset.pack]?.name||v.appName)),t==="closepacks"&&(e.tagName==="BUTTON"||!n.target.closest("[data-stop]"))&&(m.showPacks=!1,M()),t==="newcrew"&&bA(),t==="mute"&&(Qy(!jn()),M()),t==="alerts-on"&&KA(),t==="alerts-later"&&(Z.set("alertsAsked",!0),M()),t==="alerts-off"&&ha(Gn,he,m.uid).then(()=>{oe(v.alerts.offToast),M()}),t==="starter"){let r=m.game?.used||[],i=ty.filter(a=>!Id(a,r)),s=document.getElementById("word");s&&i.length&&(s.value=i[Math.floor(Math.random()*i.length)],s.focus())}if(t==="tour"&&(m.tour=0,M()),t==="tour-next"&&(m.tour<jt.length-1?lh(m.tour+1):(m.tour=null,Z.set("toured",!0),M())),t==="tour-skip"&&!(n.target.closest("[data-stop]")&&!n.target.closest("button"))&&(m.tour=null,Z.set("toured",!0),M()),t==="yes"&&cw(!0),t==="no"&&cw(!1),t==="used"&&(m.showUsed=!0,M()),t==="closeused"&&(m.showUsed=!1,M()),t==="seen"&&(Z.set(`seen.${m.game.code}`,Number(e.dataset.round)),M()),t==="share"){let r=rA(m.game.code),i=v.share.invite(m.game.code);try{navigator.share?await navigator.share({title:v.appName,text:i,url:r}):(await navigator.clipboard.writeText(r),oe(v.toasts.inviteCopied))}catch{}}});document.addEventListener("pointerdown",Yy,{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&m.showUsed&&(m.showUsed=!1,M()),n.key==="Escape"&&m.showGames&&(m.showGames=!1,M()),n.key==="Escape"&&m.showSettings&&(m.showSettings=!1,M()),n.key==="Escape"&&m.showPacks&&(m.showPacks=!1,M()),n.key==="Escape"&&m.showAccount&&(m.showAccount=!1,M()),n.key==="Escape"&&m.reportFor&&(m.reportFor=null,M()),m.tour!==null&&n.key==="ArrowRight"&&m.tour<jt.length-1&&lh(m.tour+1),m.tour!==null&&n.key==="ArrowLeft"&&m.tour>0&&lh(m.tour-1),n.key==="Escape"&&m.tour!==null&&(m.tour=null,Z.set("toured",!0),M())});async function Iw(){if(!gf||!m.uid||!await wf())return;m.moving=!0;let n=[];for(let{code:t}of Z.get("games",[]))try{let r=(await Ut(re(t))).data();r?.players?.[m.uid]&&r.status!=="won"&&n.push(t)}catch{}if(m.code?n.includes(m.code):n.length>0){M();return}location.replace(_f(m.code))}M();var dw=!1;Hc(ht,n=>{if(!n){m.uid=null,m.account=null,M(),jc(ht).catch(t=>{console.error(t),dw||(m.authError=v.errors.connect,M())}),dw=!0;return}let e=m.uid!==n.uid;if(m.uid=n.uid,m.account=vd(n),!e){M();return}m.code?zn(m.code):(M(),ts()),IA(),Iw(),Hy(Gn,he,n.uid)});Kg(ht,he).then(hh).catch(Ta);"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-2cab5241.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/messaging/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
   * in compliance with the License. You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under the License
   * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
   * or implied. See the License for the specific language governing permissions and limitations under
   * the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/messaging/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
