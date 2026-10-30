var df="https://playbrainsmith.com/",ff=/(github\.io|\.web\.app|\.firebaseapp\.com)$/.test(location.hostname),pf=["name","toured","muted"],Ha=n=>"samesies."+n;(function(){let e=location.hash.match(/^#carry=(.+)$/);if(e){try{let t=JSON.parse(decodeURIComponent(e[1]));for(let r of pf)t[r]!=null&&(r==="name"&&localStorage.getItem(Ha("name"))||localStorage.setItem(Ha(r),r==="muted"?String(t[r]):JSON.stringify(t[r])))}catch{}history.replaceState(null,"",location.pathname+location.search)}})();async function mf(){try{let n=await fetch(df+"live.json",{cache:"no-store"});return n.ok&&(await n.json()).live===!0}catch{return!1}}function gf(n){let e={};try{for(let r of pf){let i=localStorage.getItem(Ha(r));i!==null&&(e[r]=r==="muted"?i:JSON.parse(i))}}catch{}let t=new URL(df);return n&&t.searchParams.set("g",n),t.hash="carry="+encodeURIComponent(JSON.stringify(e)),t.href}var wf=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xw=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},_f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,f=s>>2,g=(s&3)<<4|c>>4,I=(c&15)<<2|d>>6,R=d&63;l||(R=64,a||(I=64)),r.push(t[f],t[g],t[I],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(wf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xw(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||g==null)throw new Ya;let I=s<<2|c>>4;if(r.push(I),d!==64){let R=c<<4&240|d>>2;if(r.push(R),g!==64){let N=d<<6&192|g;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ya=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Zw=function(n){let e=wf(n);return _f.encodeByteArray(e,!0)},ei=function(n){return Zw(n).replace(/\./g,"")},Xa=function(n){try{return _f.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function e_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var t_=()=>e_().__FIREBASE_DEFAULTS__,n_=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},r_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Xa(n[1]);return e&&JSON.parse(e)},vs=()=>{try{return t_()||n_()||r_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Za=n=>{var e,t;return(t=(e=vs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vf=n=>{let e=Za(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ec=()=>{var n;return(n=vs())===null||n===void 0?void 0:n.config},tc=n=>{var e;return(e=vs())===null||e===void 0?void 0:e[`_${n}`]};var _s=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function bf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ei(JSON.stringify(t)),ei(JSON.stringify(a)),""].join(".")}function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function If(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function i_(){var n;let e=(n=vs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ef(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Af(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sf(){let n=ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kf(){return!i_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ti(){try{return typeof indexedDB=="object"}catch{return!1}}function bs(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function Rf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}var s_="FirebaseError",$e=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=s_,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ke.prototype.create)}},Ke=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?o_(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new $e(i,c,r)}};function o_(n,e){return n.replace(a_,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var a_=/\{\$([^}]+)}/g;function Pf(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function At(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(yf(s)&&yf(a)){if(!At(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function yf(n){return n!==null&&typeof n=="object"}function Yn(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Xn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Cf(n,e){let t=new Ja(n,e);return t.subscribe.bind(t)}var Ja=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");c_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Qa),i.error===void 0&&(i.error=Qa),i.complete===void 0&&(i.complete=Qa);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function c_(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qa(){}var zA=4*60*60*1e3;function te(n){return n&&n._delegate?n._delegate:n}var be=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var yn="[DEFAULT]";var nc=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new _s;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l_(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:u_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function u_(n){return n===yn?void 0:n}function l_(n){return n.instantiationMode==="EAGER"}var Is=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new nc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var h_=[],W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));var d_={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},f_=W.INFO,p_={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},m_=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=p_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Kt=class{constructor(e){this.name=e,this._logLevel=f_,this._logHandler=m_,this._userLogHandler=null,h_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?d_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}};var g_=(n,e)=>e.some(t=>n instanceof t),Df,Nf;function y_(){return Df||(Df=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function w_(){return Nf||(Nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Of=new WeakMap,ic=new WeakMap,xf=new WeakMap,rc=new WeakMap,oc=new WeakMap;function __(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(it(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Of.set(t,n)}).catch(()=>{}),oc.set(e,n),e}function v_(n){if(ic.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});ic.set(n,e)}var sc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ic.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return it(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Vf(n){sc=n(sc)}function b_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(Ts(this),e,...t);return xf.set(r,e.sort?e.sort():[e]),it(r)}:w_().includes(n)?function(...e){return n.apply(Ts(this),e),it(Of.get(this))}:function(...e){return it(n.apply(Ts(this),e))}}function I_(n){return typeof n=="function"?b_(n):(n instanceof IDBTransaction&&v_(n),g_(n,y_())?new Proxy(n,sc):n)}function it(n){if(n instanceof IDBRequest)return __(n);if(rc.has(n))return rc.get(n);let e=I_(n);return e!==n&&(rc.set(n,e),oc.set(e,n)),e}var Ts=n=>oc.get(n);function wn(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),c=it(a);return r&&a.addEventListener("upgradeneeded",l=>{r(it(a.result),l.oldVersion,l.newVersion,it(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}function Es(n,{blocked:e}={}){let t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),it(t).then(()=>{})}var T_=["get","getKey","getAll","getAllKeys","count"],E_=["put","add","delete","clear"],ac=new Map;function Lf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=E_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||T_.includes(t)))return;let s=async function(a,...c){let l=this.transaction(a,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&l.done]))[0]};return ac.set(e,s),s}Vf(n=>({...n,get:(e,t,r)=>Lf(e,t)||n.get(e,t,r),has:(e,t)=>!!Lf(e,t)||n.has(e,t)}));var uc=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(A_(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function A_(n){let e=n.getComponent();return e?.type==="VERSION"}var lc="@firebase/app",Mf="0.10.16";var St=new Kt("@firebase/app"),S_="@firebase/app-compat",k_="@firebase/analytics-compat",R_="@firebase/analytics",P_="@firebase/app-check-compat",C_="@firebase/app-check",D_="@firebase/auth",N_="@firebase/auth-compat",O_="@firebase/database",x_="@firebase/data-connect",V_="@firebase/database-compat",L_="@firebase/functions",M_="@firebase/functions-compat",F_="@firebase/installations",$_="@firebase/installations-compat",U_="@firebase/messaging",B_="@firebase/messaging-compat",q_="@firebase/performance",j_="@firebase/performance-compat",G_="@firebase/remote-config",z_="@firebase/remote-config-compat",W_="@firebase/storage",K_="@firebase/storage-compat",H_="@firebase/firestore",Q_="@firebase/vertexai",Y_="@firebase/firestore-compat",J_="firebase",X_="11.0.2";var hc="[DEFAULT]",Z_={[lc]:"fire-core",[S_]:"fire-core-compat",[R_]:"fire-analytics",[k_]:"fire-analytics-compat",[C_]:"fire-app-check",[P_]:"fire-app-check-compat",[D_]:"fire-auth",[N_]:"fire-auth-compat",[O_]:"fire-rtdb",[x_]:"fire-data-connect",[V_]:"fire-rtdb-compat",[L_]:"fire-fn",[M_]:"fire-fn-compat",[F_]:"fire-iid",[$_]:"fire-iid-compat",[U_]:"fire-fcm",[B_]:"fire-fcm-compat",[q_]:"fire-perf",[j_]:"fire-perf-compat",[G_]:"fire-rc",[z_]:"fire-rc-compat",[W_]:"fire-gcs",[K_]:"fire-gcs-compat",[H_]:"fire-fst",[Y_]:"fire-fst-compat",[Q_]:"fire-vertex","fire-js":"fire-js",[J_]:"fire-js-all"};var As=new Map,ev=new Map,dc=new Map;function Ff(n,e){try{n.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qe(n){let e=n.name;if(dc.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;dc.set(e,n);for(let t of As.values())Ff(t,n);for(let t of ev.values())Ff(t,n);return!0}function dt(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function st(n){return n.settings!==void 0}var tv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new Ke("app","Firebase",tv);var fc=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}};var Qt=X_;function gc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:hc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(t||(t=ec()),!t)throw Ht.create("no-options");let s=As.get(i);if(s){if(At(t,s.options)&&At(r,s.config))return s;throw Ht.create("duplicate-app",{appName:i})}let a=new Is(i);for(let l of dc.values())a.addComponent(l);let c=new fc(t,r,a);return As.set(i,c),c}function _n(n=hc){let e=As.get(n);if(!e&&n===hc&&ec())return gc();if(!e)throw Ht.create("no-app",{appName:n});return e}function Ae(n,e,t){var r;let i=(r=Z_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(c.join(" "));return}qe(new be(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var nv="firebase-heartbeat-database",rv=1,ni="firebase-heartbeat-store",cc=null;function qf(){return cc||(cc=wn(nv,rv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ni)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),cc}async function iv(n){try{let t=(await qf()).transaction(ni),r=await t.objectStore(ni).get(jf(n));return await t.done,r}catch(e){if(e instanceof $e)St.warn(e.message);else{let t=Ht.create("idb-get",{originalErrorMessage:e?.message});St.warn(t.message)}}}async function $f(n,e){try{let r=(await qf()).transaction(ni,"readwrite");await r.objectStore(ni).put(e,jf(n)),await r.done}catch(t){if(t instanceof $e)St.warn(t.message);else{let r=Ht.create("idb-set",{originalErrorMessage:t?.message});St.warn(r.message)}}}function jf(n){return`${n.name}!${n.options.appId}`}var sv=1024,ov=30*24*60*60*1e3,pc=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new mc(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let c=new Date(a.date).valueOf();return Date.now()-c<=ov}),this._storage.overwrite(this._heartbeatsCache))}catch(r){St.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Uf(),{heartbeatsToSend:r,unsentEntries:i}=av(this._heartbeatsCache.heartbeats),s=ei(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return St.warn(t),""}}};function Uf(){return new Date().toISOString().substring(0,10)}function av(n,e=sv){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Bf(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Bf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var mc=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ti()?bs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await iv(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return $f(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return $f(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function Bf(n){return ei(JSON.stringify({version:2,heartbeats:n})).length}function cv(n){qe(new be("platform-logger",e=>new uc(e),"PRIVATE")),qe(new be("heartbeat",e=>new pc(e),"PRIVATE")),Ae(lc,Mf,n),Ae(lc,Mf,"esm2017"),Ae("fire-js","")}cv("");var uv="firebase",lv="11.0.2";Ae(uv,lv,"app");function Ss(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function cp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var up=cp,lp=new Ke("auth","Firebase",cp());var Os=new Kt("@firebase/auth");function hv(n,...e){Os.logLevel<=W.WARN&&Os.warn(`Auth (${Qt}): ${n}`,...e)}function Rs(n,...e){Os.logLevel<=W.ERROR&&Os.error(`Auth (${Qt}): ${n}`,...e)}function Ze(n,...e){throw Fc(n,...e)}function pt(n,...e){return Fc(n,...e)}function Mc(n,e,t){let r=Object.assign(Object.assign({},up()),{[e]:t});return new Ke("auth","Firebase",r).create(e,{appName:n.name})}function Rt(n){return Mc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hp(n,e,t){let r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ze(n,"argument-error"),Mc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fc(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return lp.create(n,...e)}function F(n,e,...t){if(!n)throw Fc(e,...t)}function ft(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Rs(e),new Error(e)}function Pt(n,e){n||ft(e)}function vc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function dv(){return Gf()==="http:"||Gf()==="https:"}function Gf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function fv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dv()||Ef()||"connection"in navigator)?navigator.onLine:!0}function pv(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var vn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pt(t>e,"Short delay should be less than long delay!"),this.isMobile=If()||Af()}get(){return fv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function $c(n,e){Pt(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var xs=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var mv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var gv=new vn(3e4,6e4);function me(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Se(n,e,t,r,i={}){return dp(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let c=Yn(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},s);return Tf()||(d.referrerPolicy="no-referrer"),xs.fetch()(fp(n,n.config.apiHost,t,c),d)})}async function dp(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},mv),e);try{let i=new bc(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw ii(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let c=s.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ii(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ii(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ii(n,"user-disabled",a);let f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Mc(n,f,d);Ze(n,f)}}catch(i){if(i instanceof $e)throw i;Ze(n,"network-request-failed",{message:String(i)})}}async function Jt(n,e,t,r,i={}){let s=await Se(n,e,t,r,i);return"mfaPendingCredential"in s&&Ze(n,"multi-factor-auth-required",{_serverResponse:s}),s}function fp(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?$c(n.config,i):`${n.config.apiScheme}://${i}`}function yv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var bc=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),gv.get())})}};function ii(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=pt(n,e,r);return i.customData._tokenResponse=t,i}function zf(n){return n!==void 0&&n.enterprise!==void 0}var Vs=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function pp(n,e){return Se(n,"GET","/v2/recaptchaConfig",me(n,e))}async function wv(n,e){return Se(n,"POST","/v1/accounts:delete",e)}async function mp(n,e){return Se(n,"POST","/v1/accounts:lookup",e)}function si(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gp(n,e=!1){let t=te(n),r=await t.getIdToken(e),i=Uc(r);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:si(yc(i.auth_time)),issuedAtTime:si(yc(i.iat)),expirationTime:si(yc(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function yc(n){return Number(n)*1e3}function Uc(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Rs("JWT malformed, contained fewer than 3 sections"),null;try{let i=Xa(t);return i?JSON.parse(i):(Rs("Failed to decode base64 JWT payload"),null)}catch(i){return Rs("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Wf(n){let e=Uc(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function ci(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof $e&&_v(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _v({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Ic=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var ui=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function li(n){var e;let t=n.auth,r=await n.getIdToken(),i=await ci(n,mp(t,{idToken:r}));F(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?wp(s.providerUserInfo):[],c=vv(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!c?.length,f=l?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ui(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function yp(n){let e=te(n);await li(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wp(n){return n.map(e=>{var{providerId:t}=e,r=Ss(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function bv(n,e){let t=await dp(n,{},async()=>{let r=Yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=fp(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",xs.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Iv(n,e){return Se(n,"POST","/v2/accounts:revokeToken",me(n,e))}var oi=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");let t=Wf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await bv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return ft("not implemented")}};function Yt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var tr=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ss(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ic(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ui(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await ci(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gp(this,e)}reload(){return yp(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await li(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(Rt(this.auth));let e=await this.getIdToken();return await ci(this,wv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,l,d,f;let g=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(i=t.email)!==null&&i!==void 0?i:void 0,R=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,M=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,G=(d=t.createdAt)!==null&&d!==void 0?d:void 0,z=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Q,emailVerified:oe,isAnonymous:Le,providerData:ie,stsTokenManager:T}=t;F(Q&&T,e,"internal-error");let y=oi.fromJSON(this.name,T);F(typeof Q=="string",e,"internal-error"),Yt(g,e.name),Yt(I,e.name),F(typeof oe=="boolean",e,"internal-error"),F(typeof Le=="boolean",e,"internal-error"),Yt(R,e.name),Yt(N,e.name),Yt(M,e.name),Yt(D,e.name),Yt(G,e.name),Yt(z,e.name);let _=new n({uid:Q,auth:e,email:I,emailVerified:oe,displayName:g,isAnonymous:Le,photoURL:N,phoneNumber:R,tenantId:M,stsTokenManager:y,createdAt:G,lastLoginAt:z});return ie&&Array.isArray(ie)&&(_.providerData=ie.map(b=>Object.assign({},b))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,t,r=!1){let i=new oi;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await li(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];F(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?wp(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new oi;c.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ui(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}};var Kf=new Map;function kt(n){Pt(n instanceof Function,"Expected a class definition");let e=Kf.get(n);return e?(Pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kf.set(n,e),e)}var Ls=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Ls.type="NONE";var Tc=Ls;function Ps(n,e,t){return`firebase:${n}:${e}:${t}`}var Ms=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Ps(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ps("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(kt(Tc),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||kt(Tc),a=Ps(r,e.config.apiKey,e.name),c=null;for(let d of t)try{let f=await d._get(a);if(f){let g=tr._fromJSON(e,f);d!==s&&(c=g),s=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new n(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new n(s,e,r))}};function Hf(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ip(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_p(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ep(e))return"Blackberry";if(Ap(e))return"Webos";if(vp(e))return"Safari";if((e.includes("chrome/")||bp(e))&&!e.includes("edge/"))return"Chrome";if(Tp(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function _p(n=ve()){return/firefox\//i.test(n)}function vp(n=ve()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bp(n=ve()){return/crios\//i.test(n)}function Ip(n=ve()){return/iemobile/i.test(n)}function Tp(n=ve()){return/android/i.test(n)}function Ep(n=ve()){return/blackberry/i.test(n)}function Ap(n=ve()){return/webos/i.test(n)}function Bc(n=ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Tv(n=ve()){var e;return Bc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ev(){return Sf()&&document.documentMode===10}function Sp(n=ve()){return Bc(n)||Tp(n)||Ap(n)||Ep(n)||/windows phone/i.test(n)||Ip(n)}function kp(n,e=[]){let t;switch(n){case"Browser":t=Hf(ve());break;case"Worker":t=`${Hf(ve())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qt}/${r}`}var Ec=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,c)=>{try{let l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function Av(n,e={}){return Se(n,"GET","/v2/passwordPolicy",me(n,e))}var Sv=6,Ac=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Sv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var Sc=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fs(this),this.idTokenSubscription=new Fs(this),this.beforeStateQueue=new Ec(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await mp(this,{idToken:e}),r=await tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(st(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await li(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject(Rt(this));let t=e?te(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(Rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject(Rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Av(this),t=new Ac(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ke("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Iv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&kt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[kt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{let l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&hv(`Error while retrieving App Check token: ${t.error}`),t?.token}};function ot(n){return te(n)}var Fs=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cf(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var no={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kv(n){no=n}function Rp(n){return no.loadJS(n)}function Rv(){return no.recaptchaEnterpriseScript}function Pv(){return no.gapiScript}function Pp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var kc=class{constructor(){this.enterprise=new Rc}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},Rc=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var Cv="recaptcha-enterprise",ai="NO_RECAPTCHA",$s=class{constructor(e){this.type=Cv,this.auth=ot(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{pp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let d=new Vs(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function i(s,a,c){let l=window.grecaptcha;zf(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(ai)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kc().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&zf(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Rv();l.length!==0&&(l+=c),Rp(l).then(()=>{i(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}};async function ri(n,e,t,r=!1,i=!1){let s=new $s(n),a;if(i)a=ai;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}let c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){let l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){let l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Zn(n,e,t,r,i){var s,a;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let c=await ri(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await ri(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(c)});else if(i==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let c=await ri(n,e,t);return r(n,c).catch(async l=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let f=await ri(n,e,t,!1,!0);return r(n,f)}return Promise.reject(l)})}else{let c=await ri(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")}async function Dv(n){let e=ot(n),t=await pp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Vs(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new $s(e).verify()}function Cp(n,e){let t=dt(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(At(s,e??{}))return i;Ze(i,"already-initialized")}return t.initialize({options:e})}function Nv(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(kt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function ro(n,e,t){let r=ot(n);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=Dp(e),{host:a,port:c}=Ov(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||xv()}function Dp(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ov(n){let e=Dp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:Qf(r.substr(s.length+1))}}else{let[s,a]=r.split(":");return{host:s,port:Qf(a)}}}function Qf(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function xv(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var bn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}};async function Vv(n,e){return Se(n,"POST","/v1/accounts:signUp",e)}async function Lv(n,e){return Jt(n,"POST","/v1/accounts:signInWithPassword",me(n,e))}async function Mv(n,e){return Se(n,"POST","/v1/accounts:sendOobCode",me(n,e))}async function Fv(n,e){return Mv(n,e)}async function $v(n,e){return Jt(n,"POST","/v1/accounts:signInWithEmailLink",me(n,e))}async function Uv(n,e){return Jt(n,"POST","/v1/accounts:signInWithEmailLink",me(n,e))}var hi=class n extends bn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zn(e,t,"signInWithPassword",Lv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return $v(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zn(e,r,"signUpPassword",Vv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Uv(e,{idToken:t,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function er(n,e){return Jt(n,"POST","/v1/accounts:signInWithIdp",me(n,e))}var Bv="http://localhost",In=class n extends bn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ss(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return er(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,er(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,er(e,t)}buildRequest(){let e={requestUri:Bv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yn(t)}return e}};async function Yf(n,e){return Se(n,"POST","/v1/accounts:sendVerificationCode",me(n,e))}async function qv(n,e){return Jt(n,"POST","/v1/accounts:signInWithPhoneNumber",me(n,e))}async function jv(n,e){let t=await Jt(n,"POST","/v1/accounts:signInWithPhoneNumber",me(n,e));if(t.temporaryProof)throw ii(n,"account-exists-with-different-credential",t);return t}var Gv={USER_NOT_FOUND:"user-not-found"};async function zv(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Jt(n,"POST","/v1/accounts:signInWithPhoneNumber",me(n,t),Gv)}var di=class n extends bn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return qv(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return jv(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return zv(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function Wv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kv(n){let e=Jn(Xn(n)).link,t=e?Jn(Xn(e)).deep_link_id:null,r=Jn(Xn(n)).deep_link_id;return(r?Jn(Xn(r)).link:null)||r||t||e||n}var Us=class n{constructor(e){var t,r,i,s,a,c;let l=Jn(Xn(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,g=Wv((i=l.mode)!==null&&i!==void 0?i:null);F(d&&f&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=Kv(e);try{return new n(t)}catch{return null}}};var Ct=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return hi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=Us.parseLink(t);return F(r,"argument-error"),hi._fromEmailAndCode(e,r.code,r.tenantId)}};Ct.PROVIDER_ID="password";Ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var nr=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Tn=class extends nr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var fi=class n extends Tn{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";var Dt=class n extends Tn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return In._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Dt.GOOGLE_SIGN_IN_METHOD="google.com";Dt.PROVIDER_ID="google.com";var pi=class n extends Tn{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};pi.GITHUB_SIGN_IN_METHOD="github.com";pi.PROVIDER_ID="github.com";var mi=class n extends Tn{constructor(){super("twitter.com")}static credential(e,t){return In._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";async function Hv(n,e){return Jt(n,"POST","/v1/accounts:signUp",me(n,e))}var En=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await tr._fromIdTokenResponse(e,r,i),a=Jf(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=Jf(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function Jf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function qc(n){var e;if(st(n.app))return Promise.reject(Rt(n));let t=ot(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new En({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await Hv(t,{returnSecureToken:!0}),i=await En._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}var Pc=class n extends $e{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function Np(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pc._fromErrorAndOperation(n,s,e,r):s})}function Qv(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}async function Op(n,e,t=!1){let r=await ci(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return En._forOperation(n,"link",r)}async function xp(n,e,t){await li(e);let r=Qv(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";F(r.has(t)===n,e.auth,i)}async function Yv(n,e,t=!1){let{auth:r}=n;if(st(r.app))return Promise.reject(Rt(r));let i="reauthenticate";try{let s=await ci(n,Np(r,i,e,n),t);F(s.idToken,r,"internal-error");let a=Uc(s.idToken);F(a,r,"internal-error");let{sub:c}=a;return F(n.uid===c,r,"user-mismatch"),En._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Ze(r,"user-mismatch"),s}}async function Vp(n,e,t=!1){if(st(n.app))return Promise.reject(Rt(n));let r="signIn",i=await Np(n,r,e),s=await En._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function wi(n,e){return Vp(ot(n),e)}async function jc(n,e){let t=te(n);return await xp(!1,t,e.providerId),Op(t,e)}function Jv(n,e,t){var r;F(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),F(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(F(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(F(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}async function Xv(n){let e=ot(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Gc(n,e,t){let r=ot(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Jv(r,i,t),await Zn(r,i,"getOobCode",Fv,"EMAIL_PASSWORD_PROVIDER")}function zc(n,e,t){return st(n.app)?Promise.reject(Rt(n)):wi(te(n),Ct.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xv(n),r})}function Lp(n,e,t,r){return te(n).onIdTokenChanged(e,t,r)}function Mp(n,e,t){return te(n).beforeAuthStateChanged(e,t)}function Wc(n,e,t,r){return te(n).onAuthStateChanged(e,t,r)}function Kc(n){return te(n).signOut()}function Xf(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:start",me(n,e))}function Zv(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:finalize",me(n,e))}function eb(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:start",me(n,e))}function tb(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:finalize",me(n,e))}var Bs="__sak";var qs=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var nb=1e3,rb=10,js=class extends qs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Ev()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rb):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};js.type="LOCAL";var Fp=js;var Gs=class extends qs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Gs.type="SESSION";var Hc=Gs;function ib(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var zs=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(a).map(async d=>d(t.origin,s)),l=await ib(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};zs.receivers=[];function io(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Cc=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{let d=io("",20);i.port1.start();let f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){let I=g;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(I.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function mt(){return window}function sb(n){mt().location.href=n}function $p(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function ob(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ab(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function cb(){return $p()?self:null}var Up="firebaseLocalStorageDb",ub=1,Ws="firebaseLocalStorage",Bp="fbase_key",An=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function so(n,e){return n.transaction([Ws],e?"readwrite":"readonly").objectStore(Ws)}function lb(){let n=indexedDB.deleteDatabase(Up);return new An(n).toPromise()}function Dc(){let n=indexedDB.open(Up,ub);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Ws,{keyPath:Bp})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Ws)?e(r):(r.close(),await lb(),e(await Dc()))})})}async function Zf(n,e,t){let r=so(n,!0).put({[Bp]:e,value:t});return new An(r).toPromise()}async function hb(n,e){let t=so(n,!1).get(e),r=await new An(t).toPromise();return r===void 0?null:r.value}function ep(n,e){let t=so(n,!0).delete(e);return new An(t).toPromise()}var db=800,fb=3,Ks=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dc(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>fb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $p()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zs._getInstance(cb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ob(),!this.activeServiceWorker)return;this.sender=new Cc(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ab()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Dc();return await Zf(e,Bs,"1"),await ep(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>hb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ep(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=so(i,!1).getAll();return new An(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),db)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Ks.type="LOCAL";var qp=Ks;function tp(n,e){return Se(n,"POST","/v2/accounts/mfaSignIn:start",me(n,e))}function pb(n,e){return Se(n,"POST","/v2/accounts/mfaSignIn:finalize",me(n,e))}function mb(n,e){return Se(n,"POST","/v2/accounts/mfaSignIn:finalize",me(n,e))}var _S=Pp("rcb"),vS=new vn(3e4,6e4);var Cs="recaptcha";async function gb(n,e,t){var r;if(!n._getRecaptchaConfig())try{await Dv(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){F(s.type==="enroll",n,"internal-error");let a={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Zn(n,a,"mfaSmsEnrollment",async(f,g)=>{if(g.phoneEnrollmentInfo.captchaResponse===ai){F(t?.type===Cs,f,"argument-error");let I=await wc(f,g,t);return Xf(f,I)}return Xf(f,g)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{F(s.type==="signin",n,"internal-error");let a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;F(a,n,"missing-multi-factor-info");let c={mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Zn(n,c,"mfaSmsSignIn",async(g,I)=>{if(I.phoneSignInInfo.captchaResponse===ai){F(t?.type===Cs,g,"argument-error");let R=await wc(g,I,t);return tp(g,R)}return tp(g,I)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Zn(n,s,"sendVerificationCode",async(d,f)=>{if(f.captchaResponse===ai){F(t?.type===Cs,d,"argument-error");let g=await wc(d,f,t);return Yf(d,g)}return Yf(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{t?._reset()}}async function wc(n,e,t){F(t.type===Cs,n,"argument-error");let r=await t.verify();F(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,a=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:a,clientType:c,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,a=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:a,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var gi=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=ot(e)}verifyPhoneNumber(e,t){return gb(this.auth,e,te(t))}static credential(e,t){return di._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?di._fromTokenResponse(t,r):null}};gi.PROVIDER_ID="phone";gi.PHONE_SIGN_IN_METHOD="phone";function Qc(n,e){return e?kt(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var yi=class extends bn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,t){return er(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function yb(n){return Vp(n.auth,new yi(n),n.bypassAuthState)}function wb(n){let{auth:e,user:t}=n;return F(t,e,"internal-error"),Yv(t,new yi(n),n.bypassAuthState)}async function _b(n){let{auth:e,user:t}=n;return F(t,e,"internal-error"),Op(t,new yi(n),n.bypassAuthState)}var Hs=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yb;case"linkViaPopup":case"linkViaRedirect":return _b;case"reauthViaPopup":case"reauthViaRedirect":return wb;default:Ze(this.auth,"internal-error")}}resolve(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var vb=new vn(2e3,1e4);async function Yc(n,e,t){let r=te(n);hp(r.auth,e,nr);let i=Qc(r.auth,t);return new Qs(r.auth,"linkViaPopup",e,i,r).executeNotNull()}var Qs=class n extends Hs{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");let e=io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vb.get())};e()}};Qs.currentPopupAction=null;var bb="pendingRedirect",Ds=new Map,Nc=class extends Hs{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ds.get(this.auth._key());if(!e){try{let r=await Ib(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ds.set(this.auth._key(),e)}return this.bypassAuthState||Ds.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Ib(n,e){let t=Gp(e),r=jp(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}async function Tb(n,e){return jp(n)._set(Gp(e),"true")}function Eb(n,e){Ds.set(n._key(),e)}function jp(n){return kt(n._redirectPersistence)}function Gp(n){return Ps(bb,n.config.apiKey,n.name)}function oo(n,e,t){return Ab(n,e,t)}async function Ab(n,e,t){let r=te(n);hp(r.auth,e,nr),await r.auth._initializationPromise;let i=Qc(r.auth,t);await xp(!1,r,e.providerId),await Tb(i,r.auth);let s=await Sb(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Jc(n,e){return await ot(n)._initializationPromise,zp(n,e,!1)}async function zp(n,e,t=!1){if(st(n.app))return Promise.reject(Rt(n));let r=ot(n),i=Qc(r,e),a=await new Nc(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}async function Sb(n){let e=io(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}var kb=10*60*1e3,Oc=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Wp(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(pt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kb&&this.cachedEventUids.clear(),this.cachedEventUids.has(np(e))}saveEventToCache(e){this.cachedEventUids.add(np(e)),this.lastProcessedEventTime=Date.now()}};function np(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Wp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Rb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wp(n);default:return!1}}async function Pb(n,e={}){return Se(n,"GET","/v1/projects",e)}var Cb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Db=/^https?/;async function Nb(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Pb(n);for(let t of e)try{if(Ob(t))return}catch{}Ze(n,"unauthorized-domain")}function Ob(n){let e=vc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Db.test(t))return!1;if(Cb.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var xb=new vn(3e4,6e4);function rp(){let n=mt().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Vb(n){return new Promise((e,t)=>{var r,i,s;function a(){rp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rp(),t(pt(n,"network-request-failed"))},timeout:xb.get()})}if(!((i=(r=mt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mt().gapi)===null||s===void 0)&&s.load)a();else{let c=Pp("iframefcb");return mt()[c]=()=>{gapi.load?a():t(pt(n,"network-request-failed"))},Rp(`${Pv()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ns=null,e})}var Ns=null;function Lb(n){return Ns=Ns||Vb(n),Ns}var Mb=new vn(5e3,15e3),Fb="__/auth/iframe",$b="emulator/auth/iframe",Ub={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qb(n){let e=n.config;F(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?$c(e,$b):`https://${n.config.authDomain}/${Fb}`,r={apiKey:e.apiKey,appName:n.name,v:Qt},i=Bb.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Yn(r).slice(1)}`}async function jb(n){let e=await Lb(n),t=mt().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:qb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ub,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let a=pt(n,"network-request-failed"),c=mt().setTimeout(()=>{s(a)},Mb.get());function l(){mt().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}var Gb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zb=500,Wb=600,Kb="_blank",Hb="http://localhost",Ys=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Qb(n,e,t,r=zb,i=Wb){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),c="",l=Object.assign(Object.assign({},Gb),{width:r.toString(),height:i.toString(),top:s,left:a}),d=ve().toLowerCase();t&&(c=bp(d)?Kb:t),_p(d)&&(e=e||Hb,l.scrollbars="yes");let f=Object.entries(l).reduce((I,[R,N])=>`${I}${R}=${N},`,"");if(Tv(d)&&c!=="_self")return Yb(e||"",c),new Ys(null);let g=window.open(e||"",c,f);F(g,n,"popup-blocked");try{g.focus()}catch{}return new Ys(g)}function Yb(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var Jb="__/auth/handler",Xb="emulator/auth/handler",Zb=encodeURIComponent("fac");async function ip(n,e,t,r,i,s){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Qt,eventId:i};if(e instanceof nr){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Pf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[f,g]of Object.entries(s||{}))a[f]=g}if(e instanceof Tn){let f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);let c=a;for(let f of Object.keys(c))c[f]===void 0&&delete c[f];let l=await n._getAppCheckToken(),d=l?`#${Zb}=${encodeURIComponent(l)}`:"";return`${eI(n)}?${Yn(c).slice(1)}${d}`}function eI({config:n}){return n.emulator?$c(n,Xb):`https://${n.authDomain}/${Jb}`}var _c="webStorageSupport",xc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hc,this._completeRedirectFn=zp,this._overrideRedirectResult=Eb}async _openPopup(e,t,r,i){var s;Pt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await ip(e,t,r,vc(),i);return Qb(e,a,io())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await ip(e,t,r,vc(),i);return sb(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Pt(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await jb(e),r=new Oc(e);return t.register("authEvent",i=>(F(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_c,{type:_c},i=>{var s;let a=(s=i?.[0])===null||s===void 0?void 0:s[_c];a!==void 0&&t(!!a),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Nb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sp()||vp()||Bc()}},Kp=xc,Js=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ft("unexpected MultiFactorSessionType")}}},Vc=class n extends Js{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return Zv(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return pb(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Xs=class{constructor(){}static assertion(e){return Vc._fromCredential(e)}};Xs.FACTOR_ID="phone";var Zs=class{static assertionForEnrollment(e,t){return eo._fromSecret(e,t)}static assertionForSignIn(e,t){return eo._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;F(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await eb(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return to._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};Zs.FACTOR_ID="totp";var eo=class n extends Js{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return F(typeof this.secret<"u",e,"argument-error"),tb(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){F(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return mb(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},to=class n{constructor(e,t,r,i,s,a,c){this.sessionInfo=a,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(ks(e)||ks(t))&&(i=!0),i&&(ks(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),ks(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function ks(n){return typeof n>"u"||n?.length===0}var sp="@firebase/auth",op="1.8.1";var Lc=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function tI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nI(n){qe(new be("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kp(n)},d=new Sc(r,i,s,l);return Nv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),qe(new be("auth-internal",e=>{let t=ot(e.getProvider("auth").getImmediate());return(r=>new Lc(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(sp,op,tI(n)),Ae(sp,op,"esm2017")}var rI=5*60,iI=tc("authIdTokenMaxAge")||rI,ap=null,sI=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>iI)return;let i=t?.token;ap!==i&&(ap=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Xc(n=_n()){let e=dt(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Cp(n,{popupRedirectResolver:Kp,persistence:[qp,Fp,Hc]}),r=tc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let a=sI(s.toString());Mp(t,a,()=>a(t.currentUser)),Lp(t,c=>a(c))}}let i=Za("auth");return i&&ro(t,`http://${i}`),t}function oI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}kv({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=pt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",oI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nI("Browser");var Hp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qp={};var Xt,Zc;(function(){var n;function e(T,y){function _(){}_.prototype=y.prototype,T.D=y.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(b,E,S){for(var w=Array(arguments.length-2),It=2;It<arguments.length;It++)w[It-2]=arguments[It];return y.prototype[E].apply(b,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,_){_||(_=0);var b=Array(16);if(typeof y=="string")for(var E=0;16>E;++E)b[E]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(E=0;16>E;++E)b[E]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=T.g[0],_=T.g[1],E=T.g[2];var S=T.g[3],w=y+(S^_&(E^S))+b[0]+3614090360&4294967295;y=_+(w<<7&4294967295|w>>>25),w=S+(E^y&(_^E))+b[1]+3905402710&4294967295,S=y+(w<<12&4294967295|w>>>20),w=E+(_^S&(y^_))+b[2]+606105819&4294967295,E=S+(w<<17&4294967295|w>>>15),w=_+(y^E&(S^y))+b[3]+3250441966&4294967295,_=E+(w<<22&4294967295|w>>>10),w=y+(S^_&(E^S))+b[4]+4118548399&4294967295,y=_+(w<<7&4294967295|w>>>25),w=S+(E^y&(_^E))+b[5]+1200080426&4294967295,S=y+(w<<12&4294967295|w>>>20),w=E+(_^S&(y^_))+b[6]+2821735955&4294967295,E=S+(w<<17&4294967295|w>>>15),w=_+(y^E&(S^y))+b[7]+4249261313&4294967295,_=E+(w<<22&4294967295|w>>>10),w=y+(S^_&(E^S))+b[8]+1770035416&4294967295,y=_+(w<<7&4294967295|w>>>25),w=S+(E^y&(_^E))+b[9]+2336552879&4294967295,S=y+(w<<12&4294967295|w>>>20),w=E+(_^S&(y^_))+b[10]+4294925233&4294967295,E=S+(w<<17&4294967295|w>>>15),w=_+(y^E&(S^y))+b[11]+2304563134&4294967295,_=E+(w<<22&4294967295|w>>>10),w=y+(S^_&(E^S))+b[12]+1804603682&4294967295,y=_+(w<<7&4294967295|w>>>25),w=S+(E^y&(_^E))+b[13]+4254626195&4294967295,S=y+(w<<12&4294967295|w>>>20),w=E+(_^S&(y^_))+b[14]+2792965006&4294967295,E=S+(w<<17&4294967295|w>>>15),w=_+(y^E&(S^y))+b[15]+1236535329&4294967295,_=E+(w<<22&4294967295|w>>>10),w=y+(E^S&(_^E))+b[1]+4129170786&4294967295,y=_+(w<<5&4294967295|w>>>27),w=S+(_^E&(y^_))+b[6]+3225465664&4294967295,S=y+(w<<9&4294967295|w>>>23),w=E+(y^_&(S^y))+b[11]+643717713&4294967295,E=S+(w<<14&4294967295|w>>>18),w=_+(S^y&(E^S))+b[0]+3921069994&4294967295,_=E+(w<<20&4294967295|w>>>12),w=y+(E^S&(_^E))+b[5]+3593408605&4294967295,y=_+(w<<5&4294967295|w>>>27),w=S+(_^E&(y^_))+b[10]+38016083&4294967295,S=y+(w<<9&4294967295|w>>>23),w=E+(y^_&(S^y))+b[15]+3634488961&4294967295,E=S+(w<<14&4294967295|w>>>18),w=_+(S^y&(E^S))+b[4]+3889429448&4294967295,_=E+(w<<20&4294967295|w>>>12),w=y+(E^S&(_^E))+b[9]+568446438&4294967295,y=_+(w<<5&4294967295|w>>>27),w=S+(_^E&(y^_))+b[14]+3275163606&4294967295,S=y+(w<<9&4294967295|w>>>23),w=E+(y^_&(S^y))+b[3]+4107603335&4294967295,E=S+(w<<14&4294967295|w>>>18),w=_+(S^y&(E^S))+b[8]+1163531501&4294967295,_=E+(w<<20&4294967295|w>>>12),w=y+(E^S&(_^E))+b[13]+2850285829&4294967295,y=_+(w<<5&4294967295|w>>>27),w=S+(_^E&(y^_))+b[2]+4243563512&4294967295,S=y+(w<<9&4294967295|w>>>23),w=E+(y^_&(S^y))+b[7]+1735328473&4294967295,E=S+(w<<14&4294967295|w>>>18),w=_+(S^y&(E^S))+b[12]+2368359562&4294967295,_=E+(w<<20&4294967295|w>>>12),w=y+(_^E^S)+b[5]+4294588738&4294967295,y=_+(w<<4&4294967295|w>>>28),w=S+(y^_^E)+b[8]+2272392833&4294967295,S=y+(w<<11&4294967295|w>>>21),w=E+(S^y^_)+b[11]+1839030562&4294967295,E=S+(w<<16&4294967295|w>>>16),w=_+(E^S^y)+b[14]+4259657740&4294967295,_=E+(w<<23&4294967295|w>>>9),w=y+(_^E^S)+b[1]+2763975236&4294967295,y=_+(w<<4&4294967295|w>>>28),w=S+(y^_^E)+b[4]+1272893353&4294967295,S=y+(w<<11&4294967295|w>>>21),w=E+(S^y^_)+b[7]+4139469664&4294967295,E=S+(w<<16&4294967295|w>>>16),w=_+(E^S^y)+b[10]+3200236656&4294967295,_=E+(w<<23&4294967295|w>>>9),w=y+(_^E^S)+b[13]+681279174&4294967295,y=_+(w<<4&4294967295|w>>>28),w=S+(y^_^E)+b[0]+3936430074&4294967295,S=y+(w<<11&4294967295|w>>>21),w=E+(S^y^_)+b[3]+3572445317&4294967295,E=S+(w<<16&4294967295|w>>>16),w=_+(E^S^y)+b[6]+76029189&4294967295,_=E+(w<<23&4294967295|w>>>9),w=y+(_^E^S)+b[9]+3654602809&4294967295,y=_+(w<<4&4294967295|w>>>28),w=S+(y^_^E)+b[12]+3873151461&4294967295,S=y+(w<<11&4294967295|w>>>21),w=E+(S^y^_)+b[15]+530742520&4294967295,E=S+(w<<16&4294967295|w>>>16),w=_+(E^S^y)+b[2]+3299628645&4294967295,_=E+(w<<23&4294967295|w>>>9),w=y+(E^(_|~S))+b[0]+4096336452&4294967295,y=_+(w<<6&4294967295|w>>>26),w=S+(_^(y|~E))+b[7]+1126891415&4294967295,S=y+(w<<10&4294967295|w>>>22),w=E+(y^(S|~_))+b[14]+2878612391&4294967295,E=S+(w<<15&4294967295|w>>>17),w=_+(S^(E|~y))+b[5]+4237533241&4294967295,_=E+(w<<21&4294967295|w>>>11),w=y+(E^(_|~S))+b[12]+1700485571&4294967295,y=_+(w<<6&4294967295|w>>>26),w=S+(_^(y|~E))+b[3]+2399980690&4294967295,S=y+(w<<10&4294967295|w>>>22),w=E+(y^(S|~_))+b[10]+4293915773&4294967295,E=S+(w<<15&4294967295|w>>>17),w=_+(S^(E|~y))+b[1]+2240044497&4294967295,_=E+(w<<21&4294967295|w>>>11),w=y+(E^(_|~S))+b[8]+1873313359&4294967295,y=_+(w<<6&4294967295|w>>>26),w=S+(_^(y|~E))+b[15]+4264355552&4294967295,S=y+(w<<10&4294967295|w>>>22),w=E+(y^(S|~_))+b[6]+2734768916&4294967295,E=S+(w<<15&4294967295|w>>>17),w=_+(S^(E|~y))+b[13]+1309151649&4294967295,_=E+(w<<21&4294967295|w>>>11),w=y+(E^(_|~S))+b[4]+4149444226&4294967295,y=_+(w<<6&4294967295|w>>>26),w=S+(_^(y|~E))+b[11]+3174756917&4294967295,S=y+(w<<10&4294967295|w>>>22),w=E+(y^(S|~_))+b[2]+718787259&4294967295,E=S+(w<<15&4294967295|w>>>17),w=_+(S^(E|~y))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var _=y-this.blockSize,b=this.B,E=this.h,S=0;S<y;){if(E==0)for(;S<=_;)i(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<y;)if(b[E++]=T.charCodeAt(S++),E==this.blockSize){i(this,b),E=0;break}}else for(;S<y;)if(b[E++]=T[S++],E==this.blockSize){i(this,b),E=0;break}}this.h=E,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var _=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=_&255,_/=256;for(this.u(T),T=Array(16),y=_=0;4>y;++y)for(var b=0;32>b;b+=8)T[_++]=this.g[y]>>>b&255;return T};function s(T,y){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=y(T)}function a(T,y){this.h=y;for(var _=[],b=!0,E=T.length-1;0<=E;E--){var S=T[E]|0;b&&S==y||(_[E]=S,b=!1)}this.g=_}var c={};function l(T){return-128<=T&&128>T?s(T,function(y){return new a([y|0],0>y?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return D(d(-T));for(var y=[],_=1,b=0;T>=_;b++)y[b]=T/_|0,_*=4294967296;return new a(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return D(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(y,8)),b=g,E=0;E<T.length;E+=8){var S=Math.min(8,T.length-E),w=parseInt(T.substring(E,E+S),y);8>S?(S=d(Math.pow(y,S)),b=b.j(S).add(d(w))):(b=b.j(_),b=b.add(d(w)))}return b}var g=l(0),I=l(1),R=l(16777216);n=a.prototype,n.m=function(){if(M(this))return-D(this).m();for(var T=0,y=1,_=0;_<this.g.length;_++){var b=this.i(_);T+=(0<=b?b:4294967296+b)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(M(this))return"-"+D(this).toString(T);for(var y=d(Math.pow(T,6)),_=this,b="";;){var E=oe(_,y).g;_=G(_,E.j(y));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,N(_))return S+b;for(;6>S.length;)S="0"+S;b=S+b}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function M(T){return T.h==-1}n.l=function(T){return T=G(this,T),M(T)?-1:N(T)?0:1};function D(T){for(var y=T.g.length,_=[],b=0;b<y;b++)_[b]=~T.g[b];return new a(_,~T.h).add(I)}n.abs=function(){return M(this)?D(this):this},n.add=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],b=0,E=0;E<=y;E++){var S=b+(this.i(E)&65535)+(T.i(E)&65535),w=(S>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);b=w>>>16,S&=65535,w&=65535,_[E]=w<<16|S}return new a(_,_[_.length-1]&-2147483648?-1:0)};function G(T,y){return T.add(D(y))}n.j=function(T){if(N(this)||N(T))return g;if(M(this))return M(T)?D(this).j(D(T)):D(D(this).j(T));if(M(T))return D(this.j(D(T)));if(0>this.l(R)&&0>T.l(R))return d(this.m()*T.m());for(var y=this.g.length+T.g.length,_=[],b=0;b<2*y;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var E=0;E<T.g.length;E++){var S=this.i(b)>>>16,w=this.i(b)&65535,It=T.i(E)>>>16,Vr=T.i(E)&65535;_[2*b+2*E]+=w*Vr,z(_,2*b+2*E),_[2*b+2*E+1]+=S*Vr,z(_,2*b+2*E+1),_[2*b+2*E+1]+=w*It,z(_,2*b+2*E+1),_[2*b+2*E+2]+=S*It,z(_,2*b+2*E+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new a(_,0)};function z(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function Q(T,y){this.g=T,this.h=y}function oe(T,y){if(N(y))throw Error("division by zero");if(N(T))return new Q(g,g);if(M(T))return y=oe(D(T),y),new Q(D(y.g),D(y.h));if(M(y))return y=oe(T,D(y)),new Q(D(y.g),y.h);if(30<T.g.length){if(M(T)||M(y))throw Error("slowDivide_ only works with positive integers.");for(var _=I,b=y;0>=b.l(T);)_=Le(_),b=Le(b);var E=ie(_,1),S=ie(b,1);for(b=ie(b,2),_=ie(_,2);!N(b);){var w=S.add(b);0>=w.l(T)&&(E=E.add(_),S=w),b=ie(b,1),_=ie(_,1)}return y=G(T,E.j(y)),new Q(E,y)}for(E=g;0<=T.l(y);){for(_=Math.max(1,Math.floor(T.m()/y.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),S=d(_),w=S.j(y);M(w)||0<w.l(T);)_-=b,S=d(_),w=S.j(y);N(S)&&(S=I),E=E.add(S),T=G(T,w)}return new Q(E,T)}n.A=function(T){return oe(this,T).h},n.and=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)&T.i(b);return new a(_,this.h&T.h)},n.or=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)|T.i(b);return new a(_,this.h|T.h)},n.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)^T.i(b);return new a(_,this.h^T.h)};function Le(T){for(var y=T.g.length+1,_=[],b=0;b<y;b++)_[b]=T.i(b)<<1|T.i(b-1)>>>31;return new a(_,T.h)}function ie(T,y){var _=y>>5;y%=32;for(var b=T.g.length-_,E=[],S=0;S<b;S++)E[S]=0<y?T.i(S+_)>>>y|T.i(S+_+1)<<32-y:T.i(S+_);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zc=Qp.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Xt=Qp.Integer=a}).apply(typeof Hp<"u"?Hp:typeof self<"u"?self:typeof window<"u"?window:{});var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Nt={};var eu,aI,rr,tu,_i,co,nu,ru,iu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ao=="object"&&ao];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in h))break e;h=h[A]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,p=!1,A={next:function(){if(!p&&h<o.length){var k=h++;return{value:u(k,o[k]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,h){return o.call.apply(o.bind,arguments)}function g(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),o.apply(u,A)}}return function(){return o.apply(u,arguments)}}function I(o,u,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,I.apply(null,arguments)}function R(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function N(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,A,k){for(var O=Array(arguments.length-2),se=2;se<arguments.length;se++)O[se-2]=arguments[se];return u.prototype[A].apply(p,O)}}function M(o){let u=o.length;if(0<u){let h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function D(o,u){for(let h=1;h<arguments.length;h++){let p=arguments[h];if(l(p)){let A=o.length||0,k=p.length||0;o.length=A+k;for(let O=0;O<k;O++)o[A+O]=p[O]}else o.push(p)}}class G{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function z(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function oe(o){return oe[" "](o),o}oe[" "]=function(){};var Le=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ie(o,u,h){for(let p in o)u.call(h,o[p],p,o)}function T(o,u){for(let h in o)u.call(void 0,o[h],h,o)}function y(o){let u={};for(let h in o)u[h]=o[h];return u}let _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let h,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(h in p)o[h]=p[h];for(let k=0;k<_.length;k++)h=_[k],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function E(o){var u=1;o=o.split(":");let h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function S(o){c.setTimeout(()=>{throw o},0)}function w(){var o=Ta;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class It{constructor(){this.h=this.g=null}add(u,h){let p=Vr.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Vr=new G(()=>new ww,o=>o.reset());class ww{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Lr,Mr=!1,Ta=new It,ld=()=>{let o=c.Promise.resolve(void 0);Lr=()=>{o.then(_w)}};var _w=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(h){S(h)}var u=Vr;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Mr=!1};function jt(){this.s=this.s,this.C=this.C}jt.prototype.s=!1,jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var vw=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Fr(o,u){if(Pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Le){e:{try{oe(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:bw[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Fr.aa.h.call(this)}}N(Fr,Pe);var bw={2:"touch",3:"pen",4:"mouse"};Fr.prototype.h=function(){Fr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var $r="closure_listenable_"+(1e6*Math.random()|0),Iw=0;function Tw(o,u,h,p,A){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=A,this.key=++Iw,this.da=this.fa=!1}function ns(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function rs(o){this.src=o,this.g={},this.h=0}rs.prototype.add=function(o,u,h,p,A){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var O=Aa(o,u,p,A);return-1<O?(u=o[O],h||(u.fa=!1)):(u=new Tw(u,this.src,k,!!p,A),u.fa=h,o.push(u)),u};function Ea(o,u){var h=u.type;if(h in o.g){var p=o.g[h],A=Array.prototype.indexOf.call(p,u,void 0),k;(k=0<=A)&&Array.prototype.splice.call(p,A,1),k&&(ns(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Aa(o,u,h,p){for(var A=0;A<o.length;++A){var k=o[A];if(!k.da&&k.listener==u&&k.capture==!!h&&k.ha==p)return A}return-1}var Sa="closure_lm_"+(1e6*Math.random()|0),ka={};function hd(o,u,h,p,A){if(p&&p.once)return fd(o,u,h,p,A);if(Array.isArray(u)){for(var k=0;k<u.length;k++)hd(o,u[k],h,p,A);return null}return h=Da(h),o&&o[$r]?o.K(u,h,d(p)?!!p.capture:!!p,A):dd(o,u,h,!1,p,A)}function dd(o,u,h,p,A,k){if(!u)throw Error("Invalid event type");var O=d(A)?!!A.capture:!!A,se=Pa(o);if(se||(o[Sa]=se=new rs(o)),h=se.add(u,h,p,O,k),h.proxy)return h;if(p=Ew(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)vw||(A=O),A===void 0&&(A=!1),o.addEventListener(u.toString(),p,A);else if(o.attachEvent)o.attachEvent(md(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Ew(){function o(h){return u.call(o.src,o.listener,h)}let u=Aw;return o}function fd(o,u,h,p,A){if(Array.isArray(u)){for(var k=0;k<u.length;k++)fd(o,u[k],h,p,A);return null}return h=Da(h),o&&o[$r]?o.L(u,h,d(p)?!!p.capture:!!p,A):dd(o,u,h,!0,p,A)}function pd(o,u,h,p,A){if(Array.isArray(u))for(var k=0;k<u.length;k++)pd(o,u[k],h,p,A);else p=d(p)?!!p.capture:!!p,h=Da(h),o&&o[$r]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],h=Aa(k,h,p,A),-1<h&&(ns(k[h]),Array.prototype.splice.call(k,h,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=Pa(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Aa(u,h,p,A)),(h=-1<o?u[o]:null)&&Ra(h))}function Ra(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[$r])Ea(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(md(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=Pa(u))?(Ea(h,o),h.h==0&&(h.src=null,u[Sa]=null)):ns(o)}}}function md(o){return o in ka?ka[o]:ka[o]="on"+o}function Aw(o,u){if(o.da)o=!0;else{u=new Fr(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&Ra(o),o=h.call(p,u)}return o}function Pa(o){return o=o[Sa],o instanceof rs?o:null}var Ca="__closure_events_fn_"+(1e9*Math.random()>>>0);function Da(o){return typeof o=="function"?o:(o[Ca]||(o[Ca]=function(u){return o.handleEvent(u)}),o[Ca])}function Ce(){jt.call(this),this.i=new rs(this),this.M=this,this.F=null}N(Ce,jt),Ce.prototype[$r]=!0,Ce.prototype.removeEventListener=function(o,u,h,p){pd(this,o,u,h,p)};function Me(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Pe(u,o);else if(u instanceof Pe)u.target=u.target||o;else{var A=u;u=new Pe(p,o),b(u,A)}if(A=!0,h)for(var k=h.length-1;0<=k;k--){var O=u.g=h[k];A=is(O,p,!0,u)&&A}if(O=u.g=o,A=is(O,p,!0,u)&&A,A=is(O,p,!1,u)&&A,h)for(k=0;k<h.length;k++)O=u.g=h[k],A=is(O,p,!1,u)&&A}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)ns(h[p]);delete o.g[u],o.h--}}this.F=null},Ce.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},Ce.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function is(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,k=0;k<u.length;++k){var O=u[k];if(O&&!O.da&&O.capture==h){var se=O.listener,Ee=O.ha||O.src;O.fa&&Ea(o.i,O),A=se.call(Ee,p)!==!1&&A}}return A&&!p.defaultPrevented}function gd(o,u,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function yd(o){o.g=gd(()=>{o.g=null,o.i&&(o.i=!1,yd(o))},o.l);let u=o.h;o.h=null,o.m.apply(null,u)}class Sw extends jt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:yd(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ur(o){jt.call(this),this.h=o,this.g={}}N(Ur,jt);var wd=[];function _d(o){ie(o.g,function(u,h){this.g.hasOwnProperty(h)&&Ra(u)},o),o.g={}}Ur.prototype.N=function(){Ur.aa.N.call(this),_d(this)},Ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Na=c.JSON.stringify,kw=c.JSON.parse,Rw=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Oa(){}Oa.prototype.h=null;function vd(o){return o.h||(o.h=o.i())}function bd(){}var Br={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xa(){Pe.call(this,"d")}N(xa,Pe);function Va(){Pe.call(this,"c")}N(Va,Pe);var fn={},Id=null;function ss(){return Id=Id||new Ce}fn.La="serverreachability";function Td(o){Pe.call(this,fn.La,o)}N(Td,Pe);function qr(o){let u=ss();Me(u,new Td(u))}fn.STAT_EVENT="statevent";function Ed(o,u){Pe.call(this,fn.STAT_EVENT,o),this.stat=u}N(Ed,Pe);function Fe(o){let u=ss();Me(u,new Ed(u,o))}fn.Ma="timingevent";function Ad(o,u){Pe.call(this,fn.Ma,o),this.size=u}N(Ad,Pe);function jr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Gr(){this.g=!0}Gr.prototype.xa=function(){this.g=!1};function Pw(o,u,h,p,A,k){o.info(function(){if(o.g)if(k)for(var O="",se=k.split("&"),Ee=0;Ee<se.length;Ee++){var ee=se[Ee].split("=");if(1<ee.length){var De=ee[0];ee=ee[1];var Ne=De.split("_");O=2<=Ne.length&&Ne[1]=="type"?O+(De+"="+ee+"&"):O+(De+"=redacted&")}}else O=null;else O=k;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+u+`
`+h+`
`+O})}function Cw(o,u,h,p,A,k,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+u+`
`+h+`
`+k+" "+O})}function Wn(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Nw(o,h)+(p?" "+p:"")})}function Dw(o,u){o.info(function(){return"TIMEOUT: "+u})}Gr.prototype.info=function(){};function Nw(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var k=A[0];if(k!="noop"&&k!="stop"&&k!="close")for(var O=1;O<A.length;O++)A[O]=""}}}}return Na(h)}catch{return u}}var os={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},La;function as(){}N(as,Oa),as.prototype.g=function(){return new XMLHttpRequest},as.prototype.i=function(){return{}},La=new as;function Gt(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new Ur(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kd}function kd(){this.i=null,this.g="",this.h=!1}var Rd={},Ma={};function Fa(o,u,h){o.L=1,o.v=hs(Tt(u)),o.m=h,o.P=!0,Pd(o,null)}function Pd(o,u){o.F=Date.now(),cs(o),o.A=Tt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),jd(h.i,"t",p),o.C=0,h=o.j.J,o.h=new kd,o.g=cf(o.j,h?u:null,!o.m),0<o.O&&(o.M=new Sw(I(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(wd[0]=A.toString()),A=wd);for(var k=0;k<A.length;k++){var O=hd(h,A[k],p||u.handleEvent,!1,u.h||u);if(!O)break;u.g[O.key]=O}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),qr(),Pw(o.i,o.u,o.A,o.l,o.R,o.m)}Gt.prototype.ca=function(o){o=o.target;let u=this.M;u&&Et(o)==3?u.j():this.Y(o)},Gt.prototype.Y=function(o){try{if(o==this.g)e:{let Ne=Et(this.g);var u=this.g.Ba();let Qn=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||Yd(this.g)))){this.J||Ne!=4||u==7||(u==8||0>=Qn?qr(3):qr(2)),$a(this);var h=this.g.Z();this.X=h;t:if(Cd(this)){var p=Yd(this.g);o="";var A=p.length,k=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),zr(this);var O="";break t}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(k&&u==A-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=h==200,Cw(this.i,this.u,this.A,this.l,this.R,Ne,h),this.o){if(this.T&&!this.K){t:{if(this.g){var se,Ee=this.g;if((se=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(se)){var ee=se;break t}}ee=null}if(h=ee)Wn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ua(this,h);else{this.o=!1,this.s=3,Fe(12),pn(this),zr(this);break e}}if(this.P){h=!0;let rt;for(;!this.J&&this.C<O.length;)if(rt=Ow(this,O),rt==Ma){Ne==4&&(this.s=4,Fe(14),h=!1),Wn(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==Rd){this.s=4,Fe(15),Wn(this.i,this.l,O,"[Invalid Chunk]"),h=!1;break}else Wn(this.i,this.l,rt,null),Ua(this,rt);if(Cd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||O.length!=0||this.h.h||(this.s=1,Fe(16),h=!1),this.o=this.o&&h,!h)Wn(this.i,this.l,O,"[Invalid Chunked Response]"),pn(this),zr(this);else if(0<O.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Wa(De),De.M=!0,Fe(11))}}else Wn(this.i,this.l,O,null),Ua(this,O);Ne==4&&pn(this),this.o&&!this.J&&(Ne==4?rf(this.j,this):(this.o=!1,cs(this)))}else Yw(this.g),h==400&&0<O.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),pn(this),zr(this)}}}catch{}finally{}};function Cd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ow(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?Ma:(h=Number(u.substring(h,p)),isNaN(h)?Rd:(p+=1,p+h>u.length?Ma:(u=u.slice(p,p+h),o.C=p+h,u)))}Gt.prototype.cancel=function(){this.J=!0,pn(this)};function cs(o){o.S=Date.now()+o.I,Dd(o,o.I)}function Dd(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=jr(I(o.ba,o),u)}function $a(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Gt.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(Dw(this.i,this.A),this.L!=2&&(qr(),Fe(17)),pn(this),this.s=2,zr(this)):Dd(this,this.S-o)};function zr(o){o.j.G==0||o.J||rf(o.j,o)}function pn(o){$a(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,_d(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ua(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Ba(h.h,o))){if(!o.K&&Ba(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)gs(h),ps(h);else break e;za(h),Fe(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=jr(I(h.Za,h),6e3));if(1>=xd(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else gn(h,11)}else if((o.K||h.g==o)&&gs(h),!z(u))for(A=h.Da.g.parse(u),u=0;u<A.length;u++){let ee=A[u];if(h.T=ee[0],ee=ee[1],h.G==2)if(ee[0]=="c"){h.K=ee[1],h.ia=ee[2];let De=ee[3];De!=null&&(h.la=De,h.j.info("VER="+h.la));let Ne=ee[4];Ne!=null&&(h.Aa=Ne,h.j.info("SVER="+h.Aa));let Qn=ee[5];Qn!=null&&typeof Qn=="number"&&0<Qn&&(p=1.5*Qn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;let rt=o.g;if(rt){let ws=rt.g?rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ws){var k=p.h;k.g||ws.indexOf("spdy")==-1&&ws.indexOf("quic")==-1&&ws.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(qa(k,k.h),k.h=null))}if(p.D){let Ka=rt.g?rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ka&&(p.ya=Ka,ae(p.I,p.D,Ka))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var O=o;if(p.qa=af(p,p.J?p.ia:null,p.W),O.K){Vd(p.h,O);var se=O,Ee=p.L;Ee&&(se.I=Ee),se.B&&($a(se),cs(se)),p.g=O}else tf(p);0<h.i.length&&ms(h)}else ee[0]!="stop"&&ee[0]!="close"||gn(h,7);else h.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?gn(h,7):Ga(h):ee[0]!="noop"&&h.l&&h.l.ta(ee),h.v=0)}}qr(4)}catch{}}var xw=class{constructor(o,u){this.g=o,this.map=u}};function Nd(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Od(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function xd(o){return o.h?1:o.g?o.g.size:0}function Ba(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function qa(o,u){o.g?o.g.add(u):o.h=u}function Vd(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Nd.prototype.cancel=function(){if(this.i=Ld(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function Ld(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(let h of o.g.values())u=u.concat(h.D);return u}return M(o.i)}function Vw(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function Lw(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(let p in o)u[h++]=p;return u}}}function Md(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=Lw(o),p=Vw(o),A=p.length,k=0;k<A;k++)u.call(void 0,p[k],h&&h[k],o)}var Fd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mw(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),A=null;if(0<=p){var k=o[h].substring(0,p);A=o[h].substring(p+1)}else k=o[h];u(k,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function mn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof mn){this.h=o.h,us(this,o.j),this.o=o.o,this.g=o.g,ls(this,o.s),this.l=o.l;var u=o.i,h=new Hr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),$d(this,h),this.m=o.m}else o&&(u=String(o).match(Fd))?(this.h=!1,us(this,u[1]||"",!0),this.o=Wr(u[2]||""),this.g=Wr(u[3]||"",!0),ls(this,u[4]),this.l=Wr(u[5]||"",!0),$d(this,u[6]||"",!0),this.m=Wr(u[7]||"")):(this.h=!1,this.i=new Hr(null,this.h))}mn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Kr(u,Ud,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Kr(u,Ud,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Kr(h,h.charAt(0)=="/"?Uw:$w,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Kr(h,qw)),o.join("")};function Tt(o){return new mn(o)}function us(o,u,h){o.j=h?Wr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ls(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function $d(o,u,h){u instanceof Hr?(o.i=u,jw(o.i,o.h)):(h||(u=Kr(u,Bw)),o.i=new Hr(u,o.h))}function ae(o,u,h){o.i.set(u,h)}function hs(o){return ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Wr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Kr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,Fw),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Fw(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ud=/[#\/\?@]/g,$w=/[#\?:]/g,Uw=/[#\?]/g,Bw=/[#\?@]/g,qw=/#/g;function Hr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function zt(o){o.g||(o.g=new Map,o.h=0,o.i&&Mw(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Hr.prototype,n.add=function(o,u){zt(this),this.i=null,o=Kn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Bd(o,u){zt(o),u=Kn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function qd(o,u){return zt(o),u=Kn(o,u),o.g.has(u)}n.forEach=function(o,u){zt(this),this.g.forEach(function(h,p){h.forEach(function(A){o.call(u,A,p,this)},this)},this)},n.na=function(){zt(this);let o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){let A=o[p];for(let k=0;k<A.length;k++)h.push(u[p])}return h},n.V=function(o){zt(this);let u=[];if(typeof o=="string")qd(this,o)&&(u=u.concat(this.g.get(Kn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return zt(this),this.i=null,o=Kn(this,o),qd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function jd(o,u,h){Bd(o,u),0<h.length&&(o.i=null,o.g.set(Kn(o,u),M(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];let k=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var A=k;O[p]!==""&&(A+="="+encodeURIComponent(String(O[p]))),o.push(A)}}return this.i=o.join("&")};function Kn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function jw(o,u){u&&!o.j&&(zt(o),o.i=null,o.g.forEach(function(h,p){var A=p.toLowerCase();p!=A&&(Bd(this,p),jd(this,A,h))},o)),o.j=u}function Gw(o,u){let h=new Gr;if(c.Image){let p=new Image;p.onload=R(Wt,h,"TestLoadImage: loaded",!0,u,p),p.onerror=R(Wt,h,"TestLoadImage: error",!1,u,p),p.onabort=R(Wt,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=R(Wt,h,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function zw(o,u){let h=new Gr,p=new AbortController,A=setTimeout(()=>{p.abort(),Wt(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(k=>{clearTimeout(A),k.ok?Wt(h,"TestPingServer: ok",!0,u):Wt(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Wt(h,"TestPingServer: error",!1,u)})}function Wt(o,u,h,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(h)}catch{}}function Ww(){this.g=new Rw}function Kw(o,u,h){let p=h||"";try{Md(o,function(A,k){let O=A;d(A)&&(O=Na(A)),u.push(p+k+"="+encodeURIComponent(O))})}catch(A){throw u.push(p+"type="+encodeURIComponent("_badmap")),A}}function Qr(o){this.l=o.Ub||null,this.j=o.eb||!1}N(Qr,Oa),Qr.prototype.g=function(){return new ds(this.l,this.j)},Qr.prototype.i=function(o){return function(){return o}}({});function ds(o,u){Ce.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(ds,Ce),n=ds.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Jr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gd(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gd(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Yr(this):Jr(this),this.readyState==3&&Gd(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Yr(this))},n.Qa=function(o){this.g&&(this.response=o,Yr(this))},n.ga=function(){this.g&&Yr(this)};function Yr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Jr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Jr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function zd(o){let u="";return ie(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function ja(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=zd(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ae(o,u,h))}function fe(o){Ce.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(fe,Ce);var Hw=/^https?$/i,Qw=["POST","PUT"];n=fe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():La.g(),this.v=this.o?vd(this.o):vd(La),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){Wd(this,k);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)h.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(let k of p.keys())h.set(k,p.get(k));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),A=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Qw,u,void 0))||p||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[k,O]of h)this.g.setRequestHeader(k,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qd(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){Wd(this,k)}};function Wd(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Kd(o),fs(o)}function Kd(o){o.A||(o.A=!0,Me(o,"complete"),Me(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Me(this,"complete"),Me(this,"abort"),fs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fs(this,!0)),fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Hd(this):this.bb())},n.bb=function(){Hd(this)};function Hd(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Et(o)!=4||o.Z()!=2)){if(o.u&&Et(o)==4)gd(o.Ea,0,o);else if(Me(o,"readystatechange"),Et(o)==4){o.h=!1;try{let O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=O===0){var A=String(o.D).match(Fd)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),p=!Hw.test(A?A.toLowerCase():"")}h=p}if(h)Me(o,"complete"),Me(o,"success");else{o.m=6;try{var k=2<Et(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",Kd(o)}}finally{fs(o)}}}}function fs(o,u){if(o.g){Qd(o);let h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Me(o,"ready");try{h.onreadystatechange=p}catch{}}}function Qd(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Et(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),kw(u)}};function Yd(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Yw(o){let u={};o=(o.g&&2<=Et(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(z(o[p]))continue;var h=E(o[p]);let A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let k=u[A]||[];u[A]=k,k.push(h)}T(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xr(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Jd(o){this.Aa=0,this.i=[],this.j=new Gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xr("baseRetryDelayMs",5e3,o),this.cb=Xr("retryDelaySeedMs",1e4,o),this.Wa=Xr("forwardChannelMaxRetries",2,o),this.wa=Xr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Nd(o&&o.concurrentRequestLimit),this.Da=new Ww,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Jd.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,p){Fe(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=af(this,null,this.W),ms(this)};function Ga(o){if(Xd(o),o.G==3){var u=o.U++,h=Tt(o.I);if(ae(h,"SID",o.K),ae(h,"RID",u),ae(h,"TYPE","terminate"),Zr(o,h),u=new Gt(o,o.j,u),u.L=2,u.v=hs(Tt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=cf(u.j,null),u.g.ea(u.v)),u.F=Date.now(),cs(u)}of(o)}function ps(o){o.g&&(Wa(o),o.g.cancel(),o.g=null)}function Xd(o){ps(o),o.u&&(c.clearTimeout(o.u),o.u=null),gs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ms(o){if(!Od(o.h)&&!o.s){o.s=!0;var u=o.Ga;Lr||ld(),Mr||(Lr(),Mr=!0),Ta.add(u,o),o.B=0}}function Jw(o,u){return xd(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=jr(I(o.Ga,o,u),sf(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let A=new Gt(this,this.j,o),k=this.o;if(this.S&&(k?(k=y(k),b(k,this.S)):k=this.S),this.m!==null||this.O||(A.H=k,k=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=ef(this,A,u),h=Tt(this.I),ae(h,"RID",o),ae(h,"CVER",22),this.D&&ae(h,"X-HTTP-Session-Id",this.D),Zr(this,h),k&&(this.O?u="headers="+encodeURIComponent(String(zd(k)))+"&"+u:this.m&&ja(h,this.m,k)),qa(this.h,A),this.Ua&&ae(h,"TYPE","init"),this.P?(ae(h,"$req",u),ae(h,"SID","null"),A.T=!0,Fa(A,h,null)):Fa(A,h,u),this.G=2}}else this.G==3&&(o?Zd(this,o):this.i.length==0||Od(this.h)||Zd(this))};function Zd(o,u){var h;u?h=u.l:h=o.U++;let p=Tt(o.I);ae(p,"SID",o.K),ae(p,"RID",h),ae(p,"AID",o.T),Zr(o,p),o.m&&o.o&&ja(p,o.m,o.o),h=new Gt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=ef(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),qa(o.h,h),Fa(h,p,u)}function Zr(o,u){o.H&&ie(o.H,function(h,p){ae(u,p,h)}),o.l&&Md({},function(h,p){ae(u,p,h)})}function ef(o,u,h){h=Math.min(o.i.length,h);var p=o.l?I(o.l.Na,o.l,o):null;e:{var A=o.i;let k=-1;for(;;){let O=["count="+h];k==-1?0<h?(k=A[0].g,O.push("ofs="+k)):k=0:O.push("ofs="+k);let se=!0;for(let Ee=0;Ee<h;Ee++){let ee=A[Ee].g,De=A[Ee].map;if(ee-=k,0>ee)k=Math.max(0,A[Ee].g-100),se=!1;else try{Kw(De,O,"req"+ee+"_")}catch{p&&p(De)}}if(se){p=O.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function tf(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Lr||ld(),Mr||(Lr(),Mr=!0),Ta.add(u,o),o.v=0}}function za(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=jr(I(o.Fa,o),sf(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,nf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=jr(I(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),ps(this),nf(this))};function Wa(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function nf(o){o.g=new Gt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Tt(o.qa);ae(u,"RID","rpc"),ae(u,"SID",o.K),ae(u,"AID",o.T),ae(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ae(u,"TO",o.ja),ae(u,"TYPE","xmlhttp"),Zr(o,u),o.m&&o.o&&ja(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=hs(Tt(u)),h.m=null,h.P=!0,Pd(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ps(this),za(this),Fe(19))};function gs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function rf(o,u){var h=null;if(o.g==u){gs(o),Wa(o),o.g=null;var p=2}else if(Ba(o.h,u))h=u.D,Vd(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var A=o.B;p=ss(),Me(p,new Ad(p,h)),ms(o)}else tf(o);else if(A=u.s,A==3||A==0&&0<u.X||!(p==1&&Jw(o,u)||p==2&&za(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),A){case 1:gn(o,5);break;case 4:gn(o,10);break;case 3:gn(o,6);break;default:gn(o,2)}}}function sf(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function gn(o,u){if(o.j.info("Error code "+u),u==2){var h=I(o.fb,o),p=o.Xa;let A=!p;p=new mn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||us(p,"https"),hs(p),A?Gw(p.toString(),h):zw(p.toString(),h)}else Fe(2);o.G=0,o.l&&o.l.sa(u),of(o),Xd(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function of(o){if(o.G=0,o.ka=[],o.l){let u=Ld(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ka,u),D(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function af(o,u,h){var p=h instanceof mn?Tt(h):new mn(h);if(p.g!="")u&&(p.g=u+"."+p.g),ls(p,p.s);else{var A=c.location;p=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var k=new mn(null);p&&us(k,p),u&&(k.g=u),A&&ls(k,A),h&&(k.l=h),p=k}return h=o.D,u=o.ya,h&&u&&ae(p,h,u),ae(p,"VER",o.la),Zr(o,p),p}function cf(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new fe(new Qr({eb:h})):new fe(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uf(){}n=uf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ys(){}ys.prototype.g=function(o,u){return new We(o,u)};function We(o,u){Ce.call(this),this.g=new Jd(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!z(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!z(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Hn(this)}N(We,Ce),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){Ga(this.g)},We.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Na(o),o=h);u.i.push(new xw(u.Ya++,o)),u.G==3&&ms(u)},We.prototype.N=function(){this.g.l=null,delete this.j,Ga(this.g),delete this.g,We.aa.N.call(this)};function lf(o){xa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(let h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}N(lf,xa);function hf(){Va.call(this),this.status=1}N(hf,Va);function Hn(o){this.g=o}N(Hn,uf),Hn.prototype.ua=function(){Me(this.g,"a")},Hn.prototype.ta=function(o){Me(this.g,new lf(o))},Hn.prototype.sa=function(o){Me(this.g,new hf)},Hn.prototype.ra=function(){Me(this.g,"b")},ys.prototype.createWebChannel=ys.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,iu=Nt.createWebChannelTransport=function(){return new ys},ru=Nt.getStatEventTarget=function(){return ss()},nu=Nt.Event=fn,co=Nt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},os.NO_ERROR=0,os.TIMEOUT=8,os.HTTP_ERROR=6,_i=Nt.ErrorCode=os,Sd.COMPLETE="complete",tu=Nt.EventType=Sd,bd.EventType=Br,Br.OPEN="a",Br.CLOSE="b",Br.ERROR="c",Br.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,rr=Nt.WebChannel=bd,aI=Nt.FetchXmlHttpFactory=Qr,fe.prototype.listenOnce=fe.prototype.L,fe.prototype.getLastError=fe.prototype.Ka,fe.prototype.getLastErrorCode=fe.prototype.Ba,fe.prototype.getStatus=fe.prototype.Z,fe.prototype.getResponseJson=fe.prototype.Oa,fe.prototype.getResponseText=fe.prototype.oa,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Ha,eu=Nt.XhrIo=fe}).apply(typeof ao<"u"?ao:typeof self<"u"?self:typeof window<"u"?window:{});var Yp="@firebase/firestore";var Ie=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");var kr="11.0.2";var Rn=new Kt("@firebase/firestore");function ir(){return Rn.logLevel}function V(n,...e){if(Rn.logLevel<=W.DEBUG){let t=e.map(Gl);Rn.debug(`Firestore (${kr}): ${n}`,...t)}}function Ot(n,...e){if(Rn.logLevel<=W.ERROR){let t=e.map(Gl);Rn.error(`Firestore (${kr}): ${n}`,...t)}}function hr(n,...e){if(Rn.logLevel<=W.WARN){let t=e.map(Gl);Rn.warn(`Firestore (${kr}): ${n}`,...t)}}function Gl(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function B(n="Unexpected state"){let e=`FIRESTORE (${kr}) INTERNAL ASSERTION FAILED: `+n;throw Ot(e),new Error(e)}function X(n,e){n||B()}function j(n,e){return n}var P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},x=class extends $e{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var nt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var go=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},cu=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ie.UNAUTHENTICATED))}shutdown(){}},uu=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},lu=class{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),s=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nt,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nt)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new go(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new Ie(e)}},hu=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}},du=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new hu(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}},fu=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},pu=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){X(this.o===void 0);let r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string"),this.R=t.token,new fu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function cI(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var yo=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=cI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}};function Y(n,e){return n<e?-1:n>e?1:0}function dr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var ke=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var q=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new ke(0,0))}static max(){return new n(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var wo=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(),r===void 0?r=e.length-t:r>e.length-t&&B(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},ce=class n extends wo{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new x(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},uI=/^[_a-zA-Z][_a-zA-Z0-9]*$/,He=class n extends wo{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return uI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new x(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new x(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var U=class n{constructor(e){this.path=e}static fromPath(e){return new n(ce.fromString(e))}static fromName(e){return new n(ce.fromString(e).popFirst(5))}static empty(){return new n(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new ce(e.slice()))}};var mu=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};mu.UNKNOWN_ID=-1;function lI(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new ke(t+1,0):new ke(t,r));return new Pn(i,U.empty(),e)}function hI(n){return new Pn(n.readTime,n.key,-1)}var Pn=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(q.min(),U.empty(),-1)}static max(){return new n(q.max(),U.empty(),-1)}};function dI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}var fI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",gu=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Rr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==fI)throw n;V("LocalStore","Unexpectedly lost primary lease")}var C=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),c=0;for(let l=0;l<s;l++){let d=l;t(e[d]).next(f=>{a[d]=f,++c,c===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};function pI(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Pr(n){return n.name==="IndexedDbTransactionError"}var fr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};fr.oe=-1;function zi(n){return n==null}function ki(n){return n===0&&1/n==-1/0}function mI(n){return typeof n=="number"&&Number.isInteger(n)&&!ki(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function gI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Jp(e)),e=yI(n.get(t),e);return Jp(e)}function yI(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Jp(n){return n+""}var wI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xk=[...wI,"documentOverlays"],_I=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],vI=_I,bI=[...vI,"indexConfiguration","indexState","indexEntries"];var Vk=[...bI,"globals"];function Xp(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function cn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Nm(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var pe=class n{constructor(e,t){this.comparator=e,this.root=t||gt.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cr(this.root,e,this.comparator,!1)}getReverseIterator(){return new cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cr(this.root,e,this.comparator,!0)}},cr=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},gt=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();let e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}};gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,t,r,i,s){return this}insert(e,t,r){return new gt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Te=class n{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _o(this.data.getIterator())}getIteratorFrom(e){return new _o(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},_o=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var tt=class n{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new n([])}unionWith(e){let t=new Te(He.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return dr(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var vo=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var xe=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vo("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};xe.EMPTY_BYTE_STRING=new xe("");var II=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(n){if(X(!!n),typeof n=="string"){let e=0,t=II.exec(n);if(X(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vt(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}function zl(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Xo(n){let e=n.mapValue.fields.__previous_value__;return zl(e)?Xo(e):e}function Ri(n){let e=xt(n.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}var yu=class{constructor(e,t,r,i,s,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}},bo=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var uo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function tn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zl(n)?4:xm(n)?9007199254740991:Om(n)?10:11:B()}function wt(n,e){if(n===e)return!0;let t=tn(n);if(t!==tn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ri(n).isEqual(Ri(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=xt(i.timestampValue),c=xt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Vt(i.bytesValue).isEqual(Vt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return le(i.geoPointValue.latitude)===le(s.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return le(i.integerValue)===le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=le(i.doubleValue),c=le(s.doubleValue);return a===c?ki(a)===ki(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return dr(n.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Xp(a)!==Xp(c))return!1;for(let l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!wt(a[l],c[l])))return!1;return!0}(n,e);default:return B()}}function Pi(n,e){return(n.values||[]).find(t=>wt(t,e))!==void 0}function pr(n,e){if(n===e)return 0;let t=tn(n),r=tn(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(s,a){let c=le(s.integerValue||s.doubleValue),l=le(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Zp(n.timestampValue,e.timestampValue);case 4:return Zp(Ri(n),Ri(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(s,a){let c=Vt(s),l=Vt(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let c=s.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){let f=Y(c[d],l[d]);if(f!==0)return f}return Y(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let c=Y(le(s.latitude),le(a.latitude));return c!==0?c:Y(le(s.longitude),le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return em(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,l,d,f;let g=s.fields||{},I=a.fields||{},R=(c=g.value)===null||c===void 0?void 0:c.arrayValue,N=(l=I.value)===null||l===void 0?void 0:l.arrayValue,M=Y(((d=R?.values)===null||d===void 0?void 0:d.length)||0,((f=N?.values)===null||f===void 0?void 0:f.length)||0);return M!==0?M:em(R,N)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===uo.mapValue&&a===uo.mapValue)return 0;if(s===uo.mapValue)return 1;if(a===uo.mapValue)return-1;let c=s.fields||{},l=Object.keys(c),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){let I=Y(l[g],f[g]);if(I!==0)return I;let R=pr(c[l[g]],d[f[g]]);if(R!==0)return R}return Y(l.length,f.length)}(n.mapValue,e.mapValue);default:throw B()}}function Zp(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);let t=xt(n),r=xt(e),i=Y(t.seconds,r.seconds);return i!==0?i:Y(t.nanos,r.nanos)}function em(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=pr(t[i],r[i]);if(s)return s}return Y(t.length,r.length)}function mr(n){return wu(n)}function wu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=xt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Vt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=wu(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${wu(t.fields[a])}`;return i+"}"}(n.mapValue):B()}function fo(n){switch(tn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=Xo(n);return e?16+fo(e):16;case 5:return 2*n.stringValue.length;case 6:return Vt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+fo(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return cn(r.fields,(s,a)=>{i+=s.length+fo(a)}),i}(n.mapValue);default:throw B()}}function tm(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function _u(n){return!!n&&"integerValue"in n}function Wl(n){return!!n&&"arrayValue"in n}function nm(n){return!!n&&"nullValue"in n}function rm(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function po(n){return!!n&&"mapValue"in n}function Om(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ii(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return cn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ii(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ii(n.arrayValue.values[t]);return e}return Object.assign({},n)}function xm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var je=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!po(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ii(t)}setAll(e){let t=He.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Ii(a):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());po(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];po(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){cn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(Ii(this.value))}};function Vm(n){let e=[];return cn(n.fields,(t,r)=>{let i=new He([t]);if(po(r)){let s=Vm(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new tt(e)}var Ye=class n{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new n(e,0,q.min(),q.min(),q.min(),je.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,q.min(),q.min(),je.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,q.min(),q.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var gr=class{constructor(e,t){this.position=e,this.inclusive=t}};function im(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=pr(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!wt(n.position[t],e.position[t]))return!1;return!0}var yr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function TI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Io=class{},we=class n extends Io{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new bu(e,t,r):t==="array-contains"?new Eu(e,r):t==="in"?new Au(e,r):t==="not-in"?new Su(e,r):t==="array-contains-any"?new ku(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Iu(e,r):new Tu(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(pr(t,this.value)):t!==null&&tn(this.value)===tn(t)&&this.matchesComparison(pr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},at=class n extends Io{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return Lm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function Lm(n){return n.op==="and"}function Mm(n){return EI(n)&&Lm(n)}function EI(n){for(let e of n.filters)if(e instanceof at)return!1;return!0}function vu(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+mr(n.value);if(Mm(n))return n.filters.map(e=>vu(e)).join(",");{let e=n.filters.map(t=>vu(t)).join(",");return`${n.op}(${e})`}}function Fm(n,e){return n instanceof we?function(r,i){return i instanceof we&&r.op===i.op&&r.field.isEqual(i.field)&&wt(r.value,i.value)}(n,e):n instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Fm(a,i.filters[c]),!0):!1}(n,e):void B()}function $m(n){return n instanceof we?function(t){return`${t.field.canonicalString()} ${t.op} ${mr(t.value)}`}(n):n instanceof at?function(t){return t.op.toString()+" {"+t.getFilters().map($m).join(" ,")+"}"}(n):"Filter"}var bu=class extends we{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){let t=U.comparator(e.key,this.key);return this.matchesComparison(t)}},Iu=class extends we{constructor(e,t){super(e,"in",t),this.keys=Um("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},Tu=class extends we{constructor(e,t){super(e,"not-in",t),this.keys=Um("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Um(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}var Eu=class extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Wl(t)&&Pi(t.arrayValue,this.value)}},Au=class extends we{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Pi(this.value.arrayValue,t)}},Su=class extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Pi(this.value.arrayValue,t)}},ku=class extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Wl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Pi(this.value.arrayValue,r))}};var Ru=class{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}};function om(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Ru(n,e,t,r,i,s,a)}function Kl(n){let e=j(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>vu(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mr(r)).join(",")),e.ue=t}return e.ue}function Hl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!TI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Fm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sm(n.startAt,e.startAt)&&sm(n.endAt,e.endAt)}function Pu(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var Cn=class{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function AI(n,e,t,r,i,s,a,c){return new Cn(n,e,t,r,i,s,a,c)}function Zo(n){return new Cn(n)}function am(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bm(n){return n.collectionGroup!==null}function Ti(n){let e=j(n);if(e.ce===null){e.ce=[];let t=new Set;for(let s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Te(He.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new yr(s,r))}),t.has(He.keyField().canonicalString())||e.ce.push(new yr(He.keyField(),r))}return e.ce}function yt(n){let e=j(n);return e.le||(e.le=SI(e,Ti(n))),e.le}function SI(n,e){if(n.limitType==="F")return om(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new yr(i.field,s)});let t=n.endAt?new gr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gr(n.startAt.position,n.startAt.inclusive):null;return om(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Cu(n,e){let t=n.filters.concat([e]);return new Cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function To(n,e,t){return new Cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ea(n,e){return Hl(yt(n),yt(e))&&n.limitType===e.limitType}function qm(n){return`${Kl(yt(n))}|lt:${n.limitType}`}function sr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>$m(i)).join(", ")}]`),zi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>mr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>mr(i)).join(",")),`Target(${r})`}(yt(n))}; limitType=${n.limitType})`}function ta(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):U.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of Ti(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){let d=im(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,Ti(r),i)||r.endAt&&!function(a,c,l){let d=im(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,Ti(r),i))}(n,e)}function kI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jm(n){return(e,t)=>{let r=!1;for(let i of Ti(n)){let s=RI(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function RI(n,e,t){let r=n.field.isKeyField()?U.comparator(e.key,t.key):function(s,a,c){let l=a.data.field(s),d=c.data.field(s);return l!==null&&d!==null?pr(l,d):B()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}var Lt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){cn(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return Nm(this.inner)}size(){return this.innerSize}};var PI=new pe(U.comparator);function Mt(){return PI}var Gm=new pe(U.comparator);function bi(...n){let e=Gm;for(let t of n)e=e.insert(t.key,t);return e}function zm(n){let e=Gm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Sn(){return Ei()}function Wm(){return Ei()}function Ei(){return new Lt(n=>n.toString(),(n,e)=>n.isEqual(e))}var CI=new pe(U.comparator),DI=new Te(U.comparator);function H(...n){let e=DI;for(let t of n)e=e.add(t);return e}var NI=new Te(Y);function OI(){return NI}function Ql(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ki(e)?"-0":e}}function Km(n){return{integerValue:""+n}}function xI(n,e){return mI(e)?Km(e):Ql(n,e)}var wr=class{constructor(){this._=void 0}};function VI(n,e,t){return n instanceof Dn?function(i,s){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zl(s)&&(s=Xo(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof nn?Qm(n,e):n instanceof rn?Ym(n,e):function(i,s){let a=Hm(i,s),c=cm(a)+cm(i.Pe);return _u(a)&&_u(i.Pe)?Km(c):Ql(i.serializer,c)}(n,e)}function LI(n,e,t){return n instanceof nn?Qm(n,e):n instanceof rn?Ym(n,e):t}function Hm(n,e){return n instanceof _r?function(r){return _u(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var Dn=class extends wr{},nn=class extends wr{constructor(e){super(),this.elements=e}};function Qm(n,e){let t=Jm(e);for(let r of n.elements)t.some(i=>wt(i,r))||t.push(r);return{arrayValue:{values:t}}}var rn=class extends wr{constructor(e){super(),this.elements=e}};function Ym(n,e){let t=Jm(e);for(let r of n.elements)t=t.filter(i=>!wt(i,r));return{arrayValue:{values:t}}}var _r=class extends wr{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function cm(n){return le(n.integerValue||n.doubleValue)}function Jm(n){return Wl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var Ci=class{constructor(e,t){this.field=e,this.transform=t}};function MI(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof nn&&i instanceof nn||r instanceof rn&&i instanceof rn?dr(r.elements,i.elements,wt):r instanceof _r&&i instanceof _r?wt(r.Pe,i.Pe):r instanceof Dn&&i instanceof Dn}(n.transform,e.transform)}var Du=class{constructor(e,t){this.version=e,this.transformResults=t}},Ge=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function mo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var vr=class{};function Xm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Di(n.key,Ge.none()):new Nn(n.key,n.data,Ge.none());{let t=n.data,r=je.empty(),i=new Te(He.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new _t(n.key,r,new tt(i.toArray()),Ge.none())}}function FI(n,e,t){n instanceof Nn?function(i,s,a){let c=i.value.clone(),l=lm(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof _t?function(i,s,a){if(!mo(i.precondition,s))return void s.convertToUnknownDocument(a.version);let c=lm(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(Zm(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ai(n,e,t,r){return n instanceof Nn?function(s,a,c,l){if(!mo(s.precondition,a))return c;let d=s.value.clone(),f=hm(s.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof _t?function(s,a,c,l){if(!mo(s.precondition,a))return c;let d=hm(s.fieldTransforms,l,a),f=a.data;return f.setAll(Zm(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,c){return mo(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function $I(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=Hm(r.transform,i||null);s!=null&&(t===null&&(t=je.empty()),t.set(r.field,s))}return t||null}function um(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&dr(r,i,(s,a)=>MI(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Nn=class extends vr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},_t=class extends vr{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function Zm(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function lm(n,e,t){let r=new Map;X(n.length===t.length);for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,LI(a,c,t[i]))}return r}function hm(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,VI(s,a,e))}return r}var Di=class extends vr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Eo=class extends vr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Nu=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&FI(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ai(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Ai(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=Wm();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;let l=Xm(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),H())}isEqual(e){return this.batchId===e.batchId&&dr(this.mutations,e.mutations,(t,r)=>um(t,r))&&dr(this.baseMutations,e.baseMutations,(t,r)=>um(t,r))}},Ou=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){X(e.mutations.length===r.length);let i=function(){return CI}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var xu=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Vu=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var ge,J;function eg(n){switch(n){default:return B();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function tg(n){if(n===void 0)return Ot("GRPC error has no .code"),P.UNKNOWN;switch(n){case ge.OK:return P.OK;case ge.CANCELLED:return P.CANCELLED;case ge.UNKNOWN:return P.UNKNOWN;case ge.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ge.INTERNAL:return P.INTERNAL;case ge.UNAVAILABLE:return P.UNAVAILABLE;case ge.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ge.NOT_FOUND:return P.NOT_FOUND;case ge.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ge.ABORTED:return P.ABORTED;case ge.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ge.DATA_LOSS:return P.DATA_LOSS;default:return B()}}(J=ge||(ge={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";var dm=null;function UI(){return new TextEncoder}var BI=new Xt([4294967295,4294967295],0);function fm(n){let e=UI().encode(n),t=new Zc;return t.update(e),new Uint8Array(t.digest())}function pm(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Xt([t,r],0),new Xt([i,s],0)]}var Lu=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new kn(`Invalid padding: ${t}`);if(r<0)throw new kn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new kn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new kn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Xt.fromNumber(this.Te)}Ee(e,t,r){let i=e.add(t.multiply(Xt.fromNumber(r)));return i.compare(BI)===1&&(i=new Xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;let t=fm(e),[r,i]=pm(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;let t=fm(e),[r,i]=pm(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},kn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Ao=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Ni.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(q.min(),i,new pe(Y),Mt(),H())}},Ni=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,H(),H(),H())}};var ur=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},So=class{constructor(e,t){this.targetId=e,this.me=t}},ko=class{constructor(e,t,r=xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},Ro=class{constructor(){this.fe=0,this.ge=mm(),this.pe=xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=H(),t=H(),r=H();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:B()}}),new Ni(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=mm()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},Mu=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mt(),this.qe=lo(),this.Qe=lo(),this.Ke=new pe(Y)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:B()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){let t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){let s=i.target;if(Pu(s))if(r===0){let a=new U(s.path);this.We(t,a,Ye.newNoDocument(a,q.min()))}else X(r===1);else{let a=this.Ze(t);if(a!==r){let c=this.Xe(e),l=c?this.et(c,e,a):1;if(l!==0){this.He(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}dm?.tt(function(f,g,I,R,N){var M,D,G,z,Q,oe;let Le={localCacheCount:f,existenceFilterCount:g.count,databaseId:I.database,projectId:I.projectId},ie=g.unchangedNames;return ie&&(Le.bloomFilter={applied:N===0,hashCount:(M=ie?.hashCount)!==null&&M!==void 0?M:0,bitmapLength:(z=(G=(D=ie?.bits)===null||D===void 0?void 0:D.bitmap)===null||G===void 0?void 0:G.length)!==null&&z!==void 0?z:0,padding:(oe=(Q=ie?.bits)===null||Q===void 0?void 0:Q.padding)!==null&&oe!==void 0?oe:0,mightContain:T=>{var y;return(y=R?.mightContain(T))!==null&&y!==void 0&&y}}),Le}(a,e.me,this.Le.nt(),c,l))}}}}Xe(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,c;try{a=Vt(r).toUint8Array()}catch(l){if(l instanceof vo)return hr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Lu(a,i,s)}catch(l){return hr(l instanceof kn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.We(t,s,null),i++)}),i}it(e){let t=new Map;this.Be.forEach((s,a)=>{let c=this.Ye(a);if(c){if(s.current&&Pu(c.target)){let l=new U(c.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,Ye.newNoDocument(l,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=H();this.Qe.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{let d=this.Ye(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));let i=new Ao(e,t,this.Ke,this.ke,r);return this.ke=Mt(),this.qe=lo(),this.Qe=lo(),this.Ke=new pe(Y),i}Ue(e,t){if(!this.je(e))return;let r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;let i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Ro,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Te(Y),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Te(Y),this.qe=this.qe.insert(e,t)),t}je(e){let t=this.Ye(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Ro),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function lo(){return new pe(U.comparator)}function mm(){return new pe(U.comparator)}var qI={asc:"ASCENDING",desc:"DESCENDING"},jI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GI={and:"AND",or:"OR"},Fu=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function $u(n,e){return n.useProto3Json||zi(e)?e:{value:e}}function Po(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ng(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zI(n,e){return Po(n,e.toTimestamp())}function Qe(n){return X(!!n),q.fromTimestamp(function(t){let r=xt(t);return new ke(r.seconds,r.nanos)}(n))}function Yl(n,e){return Uu(n,e).canonicalString()}function Uu(n,e){let t=function(i){return new ce(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function rg(n){let e=ce.fromString(n);return X(ug(e)),e}function Co(n,e){return Yl(n.databaseId,e.path)}function Si(n,e){let t=rg(e);if(t.get(1)!==n.databaseId.projectId)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(sg(t))}function ig(n,e){return Yl(n.databaseId,e)}function WI(n){let e=rg(n);return e.length===4?ce.emptyPath():sg(e)}function Bu(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sg(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function gm(n,e,t){return{name:Co(n,e),fields:t.value.mapValue.fields}}function KI(n,e){return"found"in e?function(r,i){X(!!i.found),i.found.name,i.found.updateTime;let s=Si(r,i.found.name),a=Qe(i.found.updateTime),c=i.found.createTime?Qe(i.found.createTime):q.min(),l=new je({mapValue:{fields:i.found.fields}});return Ye.newFoundDocument(s,a,c,l)}(n,e):"missing"in e?function(r,i){X(!!i.missing),X(!!i.readTime);let s=Si(r,i.missing),a=Qe(i.readTime);return Ye.newNoDocument(s,a)}(n,e):B()}function HI(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(X(f===void 0||typeof f=="string"),xe.fromBase64String(f||"")):(X(f===void 0||f instanceof Buffer||f instanceof Uint8Array),xe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){let f=d.code===void 0?P.UNKNOWN:tg(d.code);return new x(f,d.message||"")}(a);t=new ko(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=Si(n,r.document.name),s=Qe(r.document.updateTime),a=r.document.createTime?Qe(r.document.createTime):q.min(),c=new je({mapValue:{fields:r.document.fields}}),l=Ye.newFoundDocument(i,s,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new ur(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=Si(n,r.document),s=r.readTime?Qe(r.readTime):q.min(),a=Ye.newNoDocument(i,s),c=r.removedTargetIds||[];t=new ur([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=Si(n,r.document),s=r.removedTargetIds||[];t=new ur([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new Vu(i,s),c=r.targetId;t=new So(c,a)}}return t}function og(n,e){let t;if(e instanceof Nn)t={update:gm(n,e.key,e.value)};else if(e instanceof Di)t={delete:Co(n,e.key)};else if(e instanceof _t)t={update:gm(n,e.key,e.data),updateMask:rT(e.fieldMask)};else{if(!(e instanceof Eo))return B();t={verify:Co(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let c=a.transform;if(c instanceof Dn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof nn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof rn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof _r)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw B()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:zI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:B()}(n,e.precondition)),t}function QI(n,e){return n&&n.length>0?(X(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Qe(i.updateTime):Qe(s);return a.isEqual(q.min())&&(a=Qe(s)),new Du(a,i.transformResults||[])}(t,e))):[]}function YI(n,e){return{documents:[ig(n,e.path)]}}function JI(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ig(n,i);let s=function(d){if(d.length!==0)return cg(at.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(d){if(d.length!==0)return d.map(f=>function(I){return{field:or(I.field),direction:eT(I.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let c=$u(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:i}}function XI(n){let e=WI(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){X(r===1);let f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(g){let I=ag(g);return I instanceof at&&Mm(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(I=>function(N){return new yr(ar(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(I))}(t.orderBy));let c=null;t.limit&&(c=function(g){let I;return I=typeof g=="object"?g.value:g,zi(I)?null:I}(t.limit));let l=null;t.startAt&&(l=function(g){let I=!!g.before,R=g.values||[];return new gr(R,I)}(t.startAt));let d=null;return t.endAt&&(d=function(g){let I=!g.before,R=g.values||[];return new gr(R,I)}(t.endAt)),AI(e,i,a,s,c,"F",l,d)}function ZI(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ag(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=ar(t.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=ar(t.unaryFilter.field);return we.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=ar(t.unaryFilter.field);return we.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=ar(t.unaryFilter.field);return we.create(a,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(n):n.fieldFilter!==void 0?function(t){return we.create(ar(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return at.create(t.compositeFilter.filters.map(r=>ag(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B()}}(t.compositeFilter.op))}(n):B()}function eT(n){return qI[n]}function tT(n){return jI[n]}function nT(n){return GI[n]}function or(n){return{fieldPath:n.canonicalString()}}function ar(n){return He.fromServerFormat(n.fieldPath)}function cg(n){return n instanceof we?function(t){if(t.op==="=="){if(rm(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NAN"}};if(nm(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rm(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NOT_NAN"}};if(nm(t.value))return{unaryFilter:{field:or(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:or(t.field),op:tT(t.op),value:t.value}}}(n):n instanceof at?function(t){let r=t.getFilters().map(i=>cg(i));return r.length===1?r[0]:{compositeFilter:{op:nT(t.op),filters:r}}}(n):B()}function rT(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ug(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Oi=class n{constructor(e,t,r,i,s=q.min(),a=q.min(),c=xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var qu=class{constructor(e){this.ht=e}};function iT(n){let e=XI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?To(e,e.limit,"L"):e}var Do=class{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(le(e.integerValue));else if("doubleValue"in e){let r=le(e.doubleValue);isNaN(r)?this.Rt(t,13):(this.Rt(t,15),ki(r)?t.Vt(0):t.Vt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Rt(t,20),typeof r=="string"&&(r=xt(r)),t.ft(`${r.seconds||""}`),t.Vt(r.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(Vt(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Rt(t,45),t.Vt(r.latitude||0),t.Vt(r.longitude||0)}else"mapValue"in e?xm(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):Om(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):B()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let r=e.fields||{};this.Rt(t,55);for(let i of Object.keys(r))this.gt(i,t),this.dt(r[i],t)}bt(e,t){var r,i;let s=e.fields||{};this.Rt(t,53);let a="value",c=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Rt(t,15),t.Vt(le(c)),this.gt(a,t),this.dt(s[a],t)}vt(e,t){let r=e.values||[];this.Rt(t,50);for(let i of r)this.dt(i,t)}St(e,t){this.Rt(t,37),U.fromName(e).path.forEach(r=>{this.Rt(t,60),this.Ct(r,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}};Do.Ft=new Do;var ju=class{constructor(){this.ln=new Gu}addToCollectionParentIndex(e,t){return this.ln.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Pn.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Pn.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}},Gu=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Te(ce.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Te(ce.comparator)).toArray()}};var Mk=new Uint8Array(0);var ym={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},et=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};et.DEFAULT_COLLECTION_PERCENTILE=10,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,et.DEFAULT=new et(41943040,et.DEFAULT_COLLECTION_PERCENTILE,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),et.DISABLED=new et(-1,0,0);var xi=class n{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new n(0)}static Qn(){return new n(-1)}};function wm([n,e],[t,r]){let i=Y(n,t);return i===0?Y(e,r):i}var zu=class{constructor(e){this.Gn=e,this.buffer=new Te(wm),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();wm(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},Wu=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Pr(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Rr(t)}await this.Yn(3e5)})}},Ku=class{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(fr.oe);let r=new zu(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(ym)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ym):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,s,a,c,l,d,f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,t))).next(g=>(s=g,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),ir()<=W.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}};function sT(n,e){return new Ku(n,e)}var Hu=class{constructor(){this.changes=new Lt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Qu=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var Yu=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ai(r.mutation,i,tt.empty(),ke.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,t,r=H()){let i=Sn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=bi();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=Sn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,H()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=Mt(),a=Ei(),c=function(){return Ei()}();return t.forEach((l,d)=>{let f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof _t)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Ai(f.mutation,d,f.mutation.getFieldMask(),ke.now())):a.set(d.key,tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var g;return c.set(d,new Qu(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){let r=Ei(),i=new pe((a,c)=>a-c),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let c of a)c.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let f=r.get(l)||tt.empty();f=c.applyToLocalView(d,f),r.set(l,f);let g=(i.get(c.batchId)||H()).add(l);i=i.insert(c.batchId,g)})}).next(()=>{let a=[],c=i.getReverseIterator();for(;c.hasNext();){let l=c.getNext(),d=l.key,f=l.value,g=Wm();f.forEach(I=>{if(!s.has(I)){let R=Xm(t.get(I),r.get(I));R!==null&&g.set(I,R),s=s.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):C.resolve(Sn()),c=-1,l=s;return a.next(d=>C.forEach(d,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(f)?C.resolve():this.remoteDocumentCache.getEntry(e,f).next(I=>{l=l.insert(f,I)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,H())).next(f=>({batchId:c,changes:zm(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let i=bi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=bi();return this.indexManager.getCollectionParents(e,s).next(c=>C.forEach(c,l=>{let d=function(g,I){return new Cn(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((g,I)=>{a=a.insert(g,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{let f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ye.newInvalidDocument(f)))});let c=bi();return a.forEach((l,d)=>{let f=s.get(l);f!==void 0&&Ai(f.mutation,d,tt.empty(),ke.now()),ta(t,d)&&(c=c.insert(l,d))}),c})}};var Ju=class{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return C.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Qe(i.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:iT(i.bundledQuery),readTime:Qe(i.readTime)}}(t)),C.resolve()}};var Xu=class{constructor(){this.overlays=new pe(U.comparator),this.Er=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){let r=Sn();return C.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Tt(e,t,s)}),C.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){let i=Sn(),s=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){let l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new pe((d,f)=>d-f),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Sn(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}let c=Sn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=i)););return C.resolve(c)}Tt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new xu(t,r));let s=this.Er.get(t);s===void 0&&(s=H(),this.Er.set(t,s)),this.Er.set(t,s.add(r.key))}};var Zu=class{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}};var Vi=class{constructor(){this.dr=new Te(ye.Ar),this.Rr=new Te(ye.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){let r=new ye(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new ye(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){let t=new U(new ce([])),r=new ye(t,e),i=new ye(t,e+1),s=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new U(new ce([])),r=new ye(t,e),i=new ye(t,e+1),s=H();return this.Rr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new ye(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},ye=class{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return U.comparator(e.key,t.key)||Y(e.br,t.br)}static Vr(e,t){return Y(e.br,t.br)||U.comparator(e.key,t.key)}};var el=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Te(ye.Ar)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new Nu(s,t,r,i);this.mutationQueue.push(a);for(let c of i)this.vr=this.vr.add(new ye(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Fr(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new ye(t,0),i=new ye(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],a=>{let c=this.Cr(a.br);s.push(c)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Te(Y);return t.forEach(i=>{let s=new ye(i,0),a=new ye(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],c=>{r=r.add(c.br)})}),C.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;U.isDocumentKey(s)||(s=s.child(""));let a=new ye(new U(s),0),c=new Te(Y);return this.vr.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.br)),!0)},a),C.resolve(this.Mr(c))}Mr(e){let t=[];return e.forEach(r=>{let i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){X(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return C.forEach(t.mutations,i=>{let s=new ye(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){let r=new ye(t,0),i=this.vr.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var tl=class{constructor(e){this.Nr=e,this.docs=function(){return new pe(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(t))}getEntries(e,t){let r=Mt();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ye.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Mt(),a=t.path,c=new U(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){let{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||dI(hI(f),r)<=0||(i.has(f.key)||ta(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,t,r,i){B()}Lr(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new nl(this)}getSize(e){return C.resolve(this.size)}},nl=class extends Hu{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}};var rl=class{constructor(e){this.persistence=e,this.Br=new Lt(t=>Kl(t),Hl),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.kr=0,this.qr=new Vi,this.targetCount=0,this.Qr=xi.qn()}forEachTarget(e,t){return this.Br.forEach((r,i)=>t(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),C.resolve()}Un(e){this.Br.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new xi(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Un(t),C.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){let r=this.Br.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),C.resolve()}getMatchingKeysForTargetId(e,t){let r=this.qr.Sr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.qr.containsKey(t))}};var No=class{constructor(e,t){this.Kr={},this.overlays={},this.$r=new fr(0),this.Ur=!1,this.Ur=!0,this.Wr=new Zu,this.referenceDelegate=e(this),this.Gr=new rl(this),this.indexManager=new ju,this.remoteDocumentCache=function(i){return new tl(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new qu(t),this.jr=new Ju(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new el(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);let i=new il(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return C.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}},il=class extends gu{constructor(e){super(),this.currentSequenceNumber=e}},sl=class n{constructor(e){this.persistence=e,this.Zr=new Vi,this.Xr=null}static ei(e){return new n(e)}get ti(){if(this.Xr)return this.Xr;throw B()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),C.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.ti,r=>{let i=U.fromPath(r);return this.ni(e,i).next(s=>{s||t.removeEntry(i,q.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return C.or([()=>C.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}},Oo=class n{constructor(e,t){this.persistence=e,this.ri=new Lt(r=>gI(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=sT(this,t)}static ei(e,t){return new n(e,t)}Hr(){}Jr(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return C.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?C.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(c=>{c||(r++,s.removeEntry(a,q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),C.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fo(e.data.value)),t}ir(e,t,r){return C.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.ri.get(t);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var ol=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=H(),i=H();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var al=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var cl=class{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return kf()?8:pI(ve())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new al;return this.ts(e,t,a).next(c=>{if(s.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>s.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(ir()<=W.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",sr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),C.resolve()):(ir()<=W.DEBUG&&V("QueryEngine","Query:",sr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(ir()<=W.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",sr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yt(t))):C.resolve())}Xi(e,t){if(am(t))return C.resolve(null);let r=yt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=To(t,null,"F"),r=yt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=H(...s);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.rs(t,c);return this.ss(t,d,a,l.readTime)?this.Xi(e,To(t,null,"F")):this.os(e,d,t,l)}))})))}es(e,t,r,i){return am(t)||i.isEqual(q.min())?C.resolve(null):this.Zi.getDocuments(e,r).next(s=>{let a=this.rs(t,s);return this.ss(t,a,r,i)?C.resolve(null):(ir()<=W.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sr(t)),this.os(e,a,t,lI(i,-1)).next(c=>c))})}rs(e,t){let r=new Te(jm(e));return t.forEach((i,s)=>{ta(e,s)&&(r=r.add(s))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,r){return ir()<=W.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",sr(t)),this.Zi.getDocumentsMatchingQuery(e,t,Pn.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var ul=class{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new pe(Y),this.cs=new Lt(s=>Kl(s),Hl),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yu(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}};function oT(n,e,t,r){return new ul(n,e,t,r)}async function lg(n,e){let t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],c=[],l=H();for(let d of i){a.push(d.batchId);for(let f of d.mutations)l=l.add(f.key)}for(let d of s){c.push(d.batchId);for(let f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:c}))})})}function aT(n,e){let t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){let g=d.batch,I=g.keys(),R=C.resolve();return I.forEach(N=>{R=R.next(()=>f.getEntry(l,N)).next(M=>{let D=d.docVersions.get(N);X(D!==null),M.version.compareTo(D)<0&&(g.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),f.addEntry(M)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=H();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function hg(n){let e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function cT(n,e){let t=j(n),r=e.snapshotVersion,i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;let c=[];e.targetChanges.forEach((f,g)=>{let I=i.get(g);if(!I)return;c.push(t.Gr.removeMatchingKeys(s,f.removedDocuments,g).next(()=>t.Gr.addMatchingKeys(s,f.addedDocuments,g)));let R=I.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(xe.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(g,R),function(M,D,G){return M.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(I,R,f)&&c.push(t.Gr.updateTargetData(s,R))});let l=Mt(),d=H();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(uT(s,a,e.documentUpdates).next(f=>{l=f.Is,d=f.Es})),!r.isEqual(q.min())){let f=t.Gr.getLastRemoteSnapshotVersion(s).next(g=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return C.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.us=i,s))}function uT(n,e,t){let r=H(),i=H();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Mt();return t.forEach((c,l)=>{let d=s.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Is:a,Es:i}})}function lT(n,e){let t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hT(n,e){let t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):t.Gr.allocateTargetId(r).next(a=>(i=new Oi(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function ll(n,e,t){let r=j(n),i=r.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Pr(a))throw a;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function _m(n,e,t){let r=j(n),i=q.min(),s=H();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){let g=j(l),I=g.cs.get(f);return I!==void 0?C.resolve(g.us.get(I)):g.Gr.getTargetData(d,f)}(r,a,yt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?i:q.min(),t?s:H())).next(c=>(dT(r,kI(e),c),{documents:c,ds:s})))}function dT(n,e,t){let r=n.ls.get(e)||q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ls.set(e,r)}var xo=class{constructor(){this.activeTargetIds=OI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var hl=class{constructor(){this._o=new xo,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new xo,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var dl=class{uo(e){}shutdown(){}};var Vo=class{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.To)e(0)}Po(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var ho=null;function su(){return ho===null?ho=function(){return 268435456+Math.round(2147483648*Math.random())}():ho++,"0x"+ho.toString(16)}var fT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var fl=class{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}};var Oe="WebChannelConnection",pl=class extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,r,i,s,a){let c=su(),l=this.No(t,r.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);let d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,s,a),this.Bo(t,l,d,i).then(f=>(V("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw hr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",i),f})}ko(t,r,i,s,a,c){return this.Oo(t,r,i,s,a)}Lo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,r){let i=fT[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,i){let s=su();return new Promise((a,c)=>{let l=new eu;l.setWithCredentials(!0),l.listenOnce(tu.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case _i.NO_ERROR:let f=l.getResponseJson();V(Oe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case _i.TIMEOUT:V(Oe,`RPC '${e}' ${s} timed out`),c(new x(P.DEADLINE_EXCEEDED,"Request time out"));break;case _i.HTTP_ERROR:let g=l.getStatus();if(V(Oe,`RPC '${e}' ${s} failed with status:`,g,"response text:",l.getResponseText()),g>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);let R=I?.error;if(R&&R.status&&R.message){let N=function(D){let G=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(R.status);c(new x(N,R.message))}else c(new x(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new x(P.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{V(Oe,`RPC '${e}' ${s} completed.`)}});let d=JSON.stringify(i);V(Oe,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",d,r,15)})}qo(e,t,r){let i=su(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=iu(),c=ru(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let f=s.join("");V(Oe,`Creating RPC '${e}' stream ${i}: ${f}`,l);let g=a.createWebChannel(f,l),I=!1,R=!1,N=new fl({Eo:D=>{R?V(Oe,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(I||(V(Oe,`Opening RPC '${e}' stream ${i} transport.`),g.open(),I=!0),V(Oe,`RPC '${e}' stream ${i} sending:`,D),g.send(D))},Ao:()=>g.close()}),M=(D,G,z)=>{D.listen(G,Q=>{try{z(Q)}catch(oe){setTimeout(()=>{throw oe},0)}})};return M(g,rr.EventType.OPEN,()=>{R||(V(Oe,`RPC '${e}' stream ${i} transport opened.`),N.So())}),M(g,rr.EventType.CLOSE,()=>{R||(R=!0,V(Oe,`RPC '${e}' stream ${i} transport closed`),N.Do())}),M(g,rr.EventType.ERROR,D=>{R||(R=!0,hr(Oe,`RPC '${e}' stream ${i} transport errored:`,D),N.Do(new x(P.UNAVAILABLE,"The operation could not be completed")))}),M(g,rr.EventType.MESSAGE,D=>{var G;if(!R){let z=D.data[0];X(!!z);let Q=z,oe=Q?.error||((G=Q[0])===null||G===void 0?void 0:G.error);if(oe){V(Oe,`RPC '${e}' stream ${i} received error:`,oe);let Le=oe.status,ie=function(_){let b=ge[_];if(b!==void 0)return tg(b)}(Le),T=oe.message;ie===void 0&&(ie=P.INTERNAL,T="Unknown error status: "+Le+" with message "+oe.message),R=!0,N.Do(new x(ie,T)),g.close()}else V(Oe,`RPC '${e}' stream ${i} received:`,z),N.vo(z)}}),M(c,nu.STAT_EVENT,D=>{D.stat===co.PROXY?V(Oe,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===co.NOPROXY&&V(Oe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.bo()},0),N}};function ou(){return typeof document<"u"?document:null}function na(n){return new Fu(n,!0)}var Li=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}};var Lo=class{constructor(e,t,r,i,s,a,c,l){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Li(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Ot(t.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{let i=new x(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,t){let r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},ml=class extends Lo{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=HI(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Qe(a.readTime):q.min()}(e);return this.listener.R_(t,r)}V_(e){let t={};t.database=Bu(this.serializer),t.addTarget=function(s,a){let c,l=a.target;if(c=Pu(l)?{documents:YI(s,l)}:{query:JI(s,l).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=ng(s,a.resumeToken);let d=$u(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=Po(s,a.snapshotVersion.toTimestamp());let d=$u(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);let r=ZI(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){let t={};t.database=Bu(this.serializer),t.removeTarget=e,this.c_(t)}},gl=class extends Lo{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return X(!!e.streamToken),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();let t=QI(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.y_(r,t)}w_(){let e={};e.database=Bu(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>og(this.serializer,r))};this.c_(t)}};var yl=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,Uu(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(P.UNKNOWN,s.toString())})}ko(e,t,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Uu(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(P.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}},wl=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ot(t),this.C_=!1):V("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}};var _l=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{xn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){let d=j(l);d.k_.add(4),await Wi(d),d.K_.set("Unknown"),d.k_.delete(4),await ra(d)}(this))})}),this.K_=new wl(r,i)}};async function ra(n){if(xn(n))for(let e of n.q_)await e(!0)}async function Wi(n){for(let e of n.q_)await e(!1)}function dg(n,e){let t=j(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),eh(t)?Zl(t):Cr(t).s_()&&Xl(t,e))}function Jl(n,e){let t=j(n),r=Cr(t);t.B_.delete(e),r.s_()&&fg(t,e),t.B_.size===0&&(r.s_()?r.a_():xn(t)&&t.K_.set("Unknown"))}function Xl(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Cr(n).V_(e)}function fg(n,e){n.U_.xe(e),Cr(n).m_(e)}function Zl(n){n.U_=new Mu({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Cr(n).start(),n.K_.F_()}function eh(n){return xn(n)&&!Cr(n).i_()&&n.B_.size>0}function xn(n){return j(n).k_.size===0}function pg(n){n.U_=void 0}async function pT(n){n.K_.set("Online")}async function mT(n){n.B_.forEach((e,t)=>{Xl(n,e)})}async function gT(n,e){pg(n),eh(n)?(n.K_.O_(e),Zl(n)):n.K_.set("Unknown")}async function yT(n,e,t){if(n.K_.set("Online"),e instanceof ko&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let c of s.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.B_.delete(c),i.U_.removeTarget(c))}(n,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mo(n,r)}else if(e instanceof ur?n.U_.$e(e):e instanceof So?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(q.min()))try{let r=await hg(n.localStore);t.compareTo(r)>=0&&await function(s,a){let c=s.U_.it(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let f=s.B_.get(d);f&&s.B_.set(d,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{let f=s.B_.get(l);if(!f)return;s.B_.set(l,f.withResumeToken(xe.EMPTY_BYTE_STRING,f.snapshotVersion)),fg(s,l);let g=new Oi(f.target,l,d,f.sequenceNumber);Xl(s,g)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Mo(n,r)}}async function Mo(n,e,t){if(!Pr(e))throw e;n.k_.add(1),await Wi(n),n.K_.set("Offline"),t||(t=()=>hg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await ra(n)})}function mg(n,e){return e().catch(t=>Mo(n,t,e))}async function ia(n){let e=j(n),t=sn(e),r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;wT(e);)try{let i=await lT(e.localStore,r);if(i===null){e.L_.length===0&&t.a_();break}r=i.batchId,_T(e,i)}catch(i){await Mo(e,i)}gg(e)&&yg(e)}function wT(n){return xn(n)&&n.L_.length<10}function _T(n,e){n.L_.push(e);let t=sn(n);t.s_()&&t.f_&&t.g_(e.mutations)}function gg(n){return xn(n)&&!sn(n).i_()&&n.L_.length>0}function yg(n){sn(n).start()}async function vT(n){sn(n).w_()}async function bT(n){let e=sn(n);for(let t of n.L_)e.g_(t.mutations)}async function IT(n,e,t){let r=n.L_.shift(),i=Ou.from(r,e,t);await mg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ia(n)}async function TT(n,e){e&&sn(n).f_&&await async function(r,i){if(function(a){return eg(a)&&a!==P.ABORTED}(i.code)){let s=r.L_.shift();sn(r).__(),await mg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ia(r)}}(n,e),gg(n)&&yg(n)}async function vm(n,e){let t=j(n);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");let r=xn(t);t.k_.add(3),await Wi(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await ra(t)}async function ET(n,e){let t=j(n);e?(t.k_.delete(2),await ra(t)):e||(t.k_.add(2),await Wi(t),t.K_.set("Unknown"))}function Cr(n){return n.W_||(n.W_=function(t,r,i){let s=j(t);return s.b_(),new ml(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:pT.bind(null,n),mo:mT.bind(null,n),po:gT.bind(null,n),R_:yT.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),eh(n)?Zl(n):n.K_.set("Unknown")):(await n.W_.stop(),pg(n))})),n.W_}function sn(n){return n.G_||(n.G_=function(t,r,i){let s=j(t);return s.b_(),new gl(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:vT.bind(null,n),po:TT.bind(null,n),p_:bT.bind(null,n),y_:IT.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await ia(n)):(await n.G_.stop(),n.L_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}var vl=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,c=new n(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function th(n,e){if(Ot("AsyncQueue",`${e}: ${n}`),Pr(n))return new x(P.UNAVAILABLE,`${e}: ${n}`);throw n}var Fo=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=bi(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var $o=class{constructor(){this.z_=new pe(U.comparator)}track(e){let t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):B():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}},br=class n{constructor(e,t,r,i,s,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new n(e,t,Fo.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ea(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var bl=class{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}},Il=class{constructor(){this.queries=bm(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){let i=j(t),s=i.queries;i.queries=bm(),s.forEach((a,c)=>{for(let l of c.J_)l.onError(r)})})(this,new x(P.ABORTED,"Firestore shutting down"))}};function bm(){return new Lt(n=>qm(n),ea)}async function nh(n,e){let t=j(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new bl,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let c=th(a,`Initialization of query '${sr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&ih(t)}async function rh(n,e){let t=j(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function AT(n,e){let t=j(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let c of a.J_)c.ta(i)&&(r=!0);a.H_=i}}r&&ih(t)}function ST(n,e,t){let r=j(n),i=r.queries.get(e);if(i)for(let s of i.J_)s.onError(t);r.queries.delete(e)}function ih(n){n.X_.forEach(e=>{e.next()})}var Tl,Im;(Im=Tl||(Tl={})).na="default",Im.Cache="cache";var Mi=class{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new br(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;let r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Tl.Cache}};var Uo=class{constructor(e){this.key=e}},Bo=class{constructor(e){this.key=e}},El=class{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=H(),this.mutatedKeys=H(),this.Va=jm(e),this.ma=new Fo(this.Va)}get fa(){return this.da}ga(e,t){let r=t?t.pa:new $o,i=t?t.ma:this.ma,s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{let I=i.get(f),R=ta(this.query,g)?g:null,N=!!I&&this.mutatedKeys.has(I.key),M=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations),D=!1;I&&R?I.data.isEqual(R.data)?N!==M&&(r.track({type:3,doc:R}),D=!0):this.ya(I,R)||(r.track({type:2,doc:R}),D=!0,(l&&this.Va(R,l)>0||d&&this.Va(R,d)<0)&&(c=!0)):!I&&R?(r.track({type:0,doc:R}),D=!0):I&&!R&&(r.track({type:1,doc:I}),D=!0,(l||d)&&(c=!0)),D&&(R?(a=a.add(R),s=M?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{ma:a,pa:r,ss:c,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let a=e.pa.j_();a.sort((f,g)=>function(R,N){let M=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return M(R)-M(N)}(f.type,g.type)||this.Va(f.doc,g.doc)),this.wa(r),i=i!=null&&i;let c=t&&!i?this.Sa():[],l=this.Ra.size===0&&this.current&&!i?1:0,d=l!==this.Aa;return this.Aa=l,a.length!==0||d?{snapshot:new br(this.query,e.ma,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new $o,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=H(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});let t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new Bo(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Uo(r))}),t}va(e){this.da=e.ds,this.Ra=H();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return br.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}},Al=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Sl=class{constructor(e){this.key=e,this.Fa=!1}},kl=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new Lt(c=>qm(c),ea),this.Oa=new Map,this.Na=new Set,this.La=new pe(U.comparator),this.Ba=new Map,this.ka=new Vi,this.qa={},this.Qa=new Map,this.Ka=xi.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}};async function kT(n,e,t=!0){let r=Tg(n),i,s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await wg(r,e,t,!0),i}async function RT(n,e){let t=Tg(n);await wg(t,e,!0,!1)}async function wg(n,e,t,r){let i=await hT(n.localStore,yt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t),c;return r&&(c=await PT(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&dg(n.remoteStore,i),c}async function PT(n,e,t,r,i){n.Ua=(g,I,R)=>async function(M,D,G,z){let Q=D.view.ga(G);Q.ss&&(Q=await _m(M.localStore,D.query,!1).then(({documents:T})=>D.view.ga(T,Q)));let oe=z&&z.targetChanges.get(D.targetId),Le=z&&z.targetMismatches.get(D.targetId)!=null,ie=D.view.applyChanges(Q,M.isPrimaryClient,oe,Le);return Em(M,D.targetId,ie.ba),ie.snapshot}(n,g,I,R);let s=await _m(n.localStore,e,!0),a=new El(e,s.ds),c=a.ga(s.documents),l=Ni.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,l);Em(n,t,d.ba);let f=new Al(e,t,a);return n.xa.set(e,f),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),d.snapshot}async function CT(n,e,t){let r=j(n),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(a=>!ea(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ll(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Jl(r.remoteStore,i.targetId),Rl(r,i.targetId)}).catch(Rr)):(Rl(r,i.targetId),await ll(r.localStore,i.targetId,!0))}async function DT(n,e){let t=j(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Jl(t.remoteStore,r.targetId))}async function NT(n,e,t){let r=$T(n);try{let i=await function(a,c){let l=j(a),d=ke.now(),f=c.reduce((R,N)=>R.add(N.key),H()),g,I;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let N=Mt(),M=H();return l.hs.getEntries(R,f).next(D=>{N=D,N.forEach((G,z)=>{z.isValidDocument()||(M=M.add(G))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,N)).next(D=>{g=D;let G=[];for(let z of c){let Q=$I(z,g.get(z.key).overlayedDocument);Q!=null&&G.push(new _t(z.key,Q,Vm(Q.value.mapValue),Ge.exists(!0)))}return l.mutationQueue.addMutationBatch(R,d,G,c)}).next(D=>{I=D;let G=D.applyToLocalDocumentSet(g,M);return l.documentOverlayCache.saveOverlays(R,D.batchId,G)})}).then(()=>({batchId:I.batchId,changes:zm(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let d=a.qa[a.currentUser.toKey()];d||(d=new pe(Y)),d=d.insert(c,l),a.qa[a.currentUser.toKey()]=d}(r,i.batchId,t),await Ki(r,i.changes),await ia(r.remoteStore)}catch(i){let s=th(i,"Failed to persist write");t.reject(s)}}async function _g(n,e){let t=j(n);try{let r=await cT(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Ba.get(s);a&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?X(a.Fa):i.removedDocuments.size>0&&(X(a.Fa),a.Fa=!1))}),await Ki(t,r,e)}catch(r){await Rr(r)}}function Tm(n,e,t){let r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.xa.forEach((s,a)=>{let c=a.view.ea(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){let l=j(a);l.onlineState=c;let d=!1;l.queries.forEach((f,g)=>{for(let I of g.J_)I.ea(c)&&(d=!0)}),d&&ih(l)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OT(n,e,t){let r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Ba.get(e),s=i&&i.key;if(s){let a=new pe(U.comparator);a=a.insert(s,Ye.newNoDocument(s,q.min()));let c=H().add(s),l=new Ao(q.min(),new Map,new pe(Y),a,c);await _g(r,l),r.La=r.La.remove(s),r.Ba.delete(e),sh(r)}else await ll(r.localStore,e,!1).then(()=>Rl(r,e,t)).catch(Rr)}async function xT(n,e){let t=j(n),r=e.batch.batchId;try{let i=await aT(t.localStore,e);bg(t,r,null),vg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ki(t,i)}catch(i){await Rr(i)}}async function VT(n,e,t){let r=j(n);try{let i=await function(a,c){let l=j(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(g=>(X(g!==null),f=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);bg(r,e,t),vg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ki(r,i)}catch(i){await Rr(i)}}function vg(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function bg(n,e,t){let r=j(n),i=r.qa[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function Rl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Ig(n,r)})}function Ig(n,e){n.Na.delete(e.path.canonicalString());let t=n.La.get(e);t!==null&&(Jl(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),sh(n))}function Em(n,e,t){for(let r of t)r instanceof Uo?(n.ka.addReference(r.key,e),LT(n,r)):r instanceof Bo?(V("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Ig(n,r.key)):B()}function LT(n,e){let t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(V("SyncEngine","New document in limbo: "+t),n.Na.add(r),sh(n))}function sh(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){let e=n.Na.values().next().value;n.Na.delete(e);let t=new U(ce.fromString(e)),r=n.Ka.next();n.Ba.set(r,new Sl(t)),n.La=n.La.insert(t,r),dg(n.remoteStore,new Oi(yt(Zo(t.path)),r,"TargetPurposeLimboResolution",fr.oe))}}async function Ki(n,e,t){let r=j(n),i=[],s=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{a.push(r.Ua(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){let g=d?!d.fromCache:(f=t?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){i.push(d);let g=ol.zi(l.targetId,d);s.push(g)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(l,d){let f=j(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>C.forEach(d,I=>C.forEach(I.Wi,R=>f.persistence.referenceDelegate.addReference(g,I.targetId,R)).next(()=>C.forEach(I.Gi,R=>f.persistence.referenceDelegate.removeReference(g,I.targetId,R)))))}catch(g){if(!Pr(g))throw g;V("LocalStore","Failed to update sequence numbers: "+g)}for(let g of d){let I=g.targetId;if(!g.fromCache){let R=f.us.get(I),N=R.snapshotVersion,M=R.withLastLimboFreeSnapshotVersion(N);f.us=f.us.insert(I,M)}}}(r.localStore,s))}async function MT(n,e){let t=j(n);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());let r=await lg(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(c=>{c.forEach(l=>{l.reject(new x(P.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ki(t,r.Ts)}}function FT(n,e){let t=j(n),r=t.Ba.get(e);if(r&&r.Fa)return H().add(r.key);{let i=H(),s=t.Oa.get(e);if(!s)return i;for(let a of s){let c=t.xa.get(a);i=i.unionWith(c.view.fa)}return i}}function Tg(n){let e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=_g.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OT.bind(null,e),e.Ma.R_=AT.bind(null,e.eventManager),e.Ma.Wa=ST.bind(null,e.eventManager),e}function $T(n){let e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VT.bind(null,e),e}var Ir=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=na(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return oT(this.persistence,new cl,e.initialUser,this.serializer)}ja(e){return new No(sl.ei,this.serializer)}za(e){return new hl}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Ir.provider={build:()=>new Ir};var Pl=class extends Ir{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){X(this.persistence.referenceDelegate instanceof Oo);let r=this.persistence.referenceDelegate.garbageCollector;return new Wu(r,e.asyncQueue,t)}ja(e){let t=this.cacheSizeBytes!==void 0?et.withCacheSize(this.cacheSizeBytes):et.DEFAULT;return new No(r=>Oo.ei(r,t),this.serializer)}};var Fi=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MT.bind(null,this.syncEngine),await ET(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Il}()}createDatastore(e){let t=na(e.databaseInfo.databaseId),r=function(s){return new pl(s)}(e.databaseInfo);return function(s,a,c,l){return new yl(s,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new _l(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Tm(this.syncEngine,t,0),function(){return Vo.p()?new Vo:new dl}())}createSyncEngine(e,t){return function(i,s,a,c,l,d,f){let g=new kl(i,s,a,c,l,d);return f&&(g.$a=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=j(i);V("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Wi(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Fi.provider={build:()=>new Fi};var $i=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Ot("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var Cl=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new x(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(i,s){let a=j(i),c={documents:s.map(g=>Co(a.serializer,g))},l=await a.ko("BatchGetDocuments",a.serializer.databaseId,ce.emptyPath(),c,s.length),d=new Map;l.forEach(g=>{let I=KI(a.serializer,g);d.set(I.key.toString(),I)});let f=[];return s.forEach(g=>{let I=d.get(g.toString());X(!!I),f.push(I)}),f}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Di(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{let i=U.fromPath(r);this.mutations.push(new Eo(i,this.precondition(i)))}),await async function(r,i){let s=j(r),a={writes:i.map(c=>og(s.serializer,c))};await s.Oo("Commit",s.serializer.databaseId,ce.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw B();t=q.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new x(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(q.min())?Ge.exists(!1):Ge.updateTime(t):Ge.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(q.min()))throw new x(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ge.updateTime(t)}return Ge.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};var Dl=class{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.uu=r.maxAttempts,this.r_=new Li(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{let e=new Cl(this.datastore),t=this.hu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Pu(i)}))}).catch(r=>{this.Pu(r)})})}hu(e){try{let t=this.updateFunction(e);return!zi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pu(e){this.uu>0&&this.Tu(e)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(e)}Tu(e){if(e.name==="FirebaseError"){let t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!eg(t)}return!1}};var Nl=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ie.UNAUTHENTICATED,this.clientId=yo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{V("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=th(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function au(n,e){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Am(n,e){n.asyncQueue.verifyOperationInProgress();let t=await UT(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>vm(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>vm(e.remoteStore,i)),n._onlineComponents=e}async function UT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await au(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;hr("Error using user provided cache. Falling back to memory cache: "+t),await au(n,new Ir)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await au(n,new Pl(void 0));return n._offlineComponents}async function oh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Am(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Am(n,new Fi))),n._onlineComponents}function BT(n){return oh(n).then(e=>e.syncEngine)}function qT(n){return oh(n).then(e=>e.datastore)}async function qo(n){let e=await oh(n),t=e.eventManager;return t.onListen=kT.bind(null,e.syncEngine),t.onUnlisten=CT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=DT.bind(null,e.syncEngine),t}function jT(n,e,t={}){let r=new nt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){let f=new $i({next:I=>{f.eu(),a.enqueueAndForget(()=>rh(s,g));let R=I.docs.has(c);!R&&I.fromCache?d.reject(new x(P.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&I.fromCache&&l&&l.source==="server"?d.reject(new x(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new Mi(Zo(c.path),f,{includeMetadataChanges:!0,ua:!0});return nh(s,g)}(await qo(n),n.asyncQueue,e,t,r)),r.promise}function GT(n,e,t={}){let r=new nt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){let f=new $i({next:I=>{f.eu(),a.enqueueAndForget(()=>rh(s,g)),I.fromCache&&l.source==="server"?d.reject(new x(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new Mi(c,f,{includeMetadataChanges:!0,ua:!0});return nh(s,g)}(await qo(n),n.asyncQueue,e,t,r)),r.promise}function Eg(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Sm=new Map;function Ag(n,e,t){if(!t)throw new x(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function zT(n,e,t,r){if(e===!0&&r===!0)throw new x(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function km(n){if(!U.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Rm(n){if(U.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B()}function ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=sa(n);throw new x(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function WT(n,e){if(e<=0)throw new x(P.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}var jo=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Eg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Tr=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jo(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cu;switch(r.type){case"firstParty":return new du(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Sm.get(t);r&&(V("ComponentProvider","Removing Datastore"),Sm.delete(t),r.terminate())}(this),Promise.resolve()}};function ah(n,e,t,r={}){var i;let s=(n=ze(n,Tr))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&hr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Ie.MOCK_USER;else{c=bf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new x(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ie(d)}n._authCredentials=new uu(new go(c,l))}}var on=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Re=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new en(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},en=class n extends on{constructor(e,t,r){super(e,t,Zo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new U(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function oa(n,e,...t){if(n=te(n),Ag("collection","path",e),n instanceof Tr){let r=ce.fromString(e,...t);return Rm(r),new en(n,null,r)}{if(!(n instanceof Re||n instanceof en))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ce.fromString(e,...t));return Rm(r),new en(n.firestore,null,r)}}function Je(n,e,...t){if(n=te(n),arguments.length===1&&(e=yo.newId()),Ag("doc","path",e),n instanceof Tr){let r=ce.fromString(e,...t);return km(r),new Re(n,null,new U(r))}{if(!(n instanceof Re||n instanceof en))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ce.fromString(e,...t));return km(r),new Re(n.firestore,n instanceof en?n.converter:null,new U(r))}}var Go=class{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Li(this,"async_queue_retry"),this.fu=()=>{let r=ou();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;let t=ou();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;let t=ou();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});let t=new nt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Pr(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;let i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Ot("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let i=vl.createAndSchedule(this,e,t,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&B()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.du.indexOf(e);this.du.splice(t,1)}};function Pm(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var ct=class extends Tr{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Go,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Go(e),this._firestoreClient=void 0,await e}}};function Sg(n,e){let t=typeof n=="object"?n:_n(),r=typeof n=="string"?n:e||"(default)",i=dt(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=vf("firestore");s&&ah(i,...s)}return i}function Hi(n){if(n._terminated)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||KT(n),n._firestoreClient}function KT(n){var e,t,r;let i=n._freezeSettings(),s=function(c,l,d,f){return new yu(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Eg(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Nl(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){let l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}var Er=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(xe.fromBase64String(e))}catch(t){throw new x(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var On=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var an=class{constructor(e){this._methodName=e}};var Ui=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}};var Bi=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}};var HT=/^__.*__$/,Ol=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new _t(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nn(e,this.data,t,this.fieldTransforms)}},zo=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new _t(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function kg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}var Wo=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ko(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(kg(this.Mu)&&HT.test(e))throw this.qu('Document fields cannot begin and end with "__"')}},xl=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||na(e)}$u(e,t,r,i=!1){return new Wo({Mu:e,methodName:t,Ku:r,path:He.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Qi(n){let e=n._freezeSettings(),t=na(n._databaseId);return new xl(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ch(n,e,t,r,i,s={}){let a=n.$u(s.merge||s.mergeFields?2:0,e,t,i);uh("Data must be an object, but it was:",a,r);let c=Dg(r,a),l,d;if(s.merge)l=new tt(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){let f=[];for(let g of s.mergeFields){let I=Fl(e,g,t);if(!a.contains(I))throw new x(P.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Og(f,I)||f.push(I)}l=new tt(f),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new Ol(new je(c),l,d)}var qi=class n extends an{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function Rg(n,e,t){return new Wo({Mu:3,Ku:e.settings.Ku,methodName:n._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}var Vl=class n extends an{_toFieldTransform(e){return new Ci(e.path,new Dn)}isEqual(e){return e instanceof n}},Ll=class n extends an{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){let t=Rg(this,e,!0),r=this.Uu.map(s=>Vn(s,t)),i=new nn(r);return new Ci(e.path,i)}isEqual(e){return e instanceof n&&At(this.Uu,e.Uu)}},Ml=class n extends an{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){let t=Rg(this,e,!0),r=this.Uu.map(s=>Vn(s,t)),i=new rn(r);return new Ci(e.path,i)}isEqual(e){return e instanceof n&&At(this.Uu,e.Uu)}};function Pg(n,e,t,r){let i=n.$u(1,e,t);uh("Data must be an object, but it was:",i,r);let s=[],a=je.empty();cn(r,(l,d)=>{let f=lh(e,l,t);d=te(d);let g=i.Bu(f);if(d instanceof qi)s.push(f);else{let I=Vn(d,g);I!=null&&(s.push(f),a.set(f,I))}});let c=new tt(s);return new zo(a,c,i.fieldTransforms)}function Cg(n,e,t,r,i,s){let a=n.$u(1,e,t),c=[Fl(e,r,t)],l=[i];if(s.length%2!=0)throw new x(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<s.length;I+=2)c.push(Fl(e,s[I])),l.push(s[I+1]);let d=[],f=je.empty();for(let I=c.length-1;I>=0;--I)if(!Og(d,c[I])){let R=c[I],N=l[I];N=te(N);let M=a.Bu(R);if(N instanceof qi)d.push(R);else{let D=Vn(N,M);D!=null&&(d.push(R),f.set(R,D))}}let g=new tt(d);return new zo(f,g,a.fieldTransforms)}function QT(n,e,t,r=!1){return Vn(t,n.$u(r?4:3,e))}function Vn(n,e){if(Ng(n=te(n)))return uh("Unsupported field value:",e,n),Dg(n,e);if(n instanceof an)return function(r,i){if(!kg(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let c of r){let l=Vn(c,i.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=ke.fromDate(r);return{timestampValue:Po(i.serializer,s)}}if(r instanceof ke){let s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Po(i.serializer,s)}}if(r instanceof Ui)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Er)return{bytesValue:ng(i.serializer,r._byteString)};if(r instanceof Re){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Bi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return Ql(c.serializer,l)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${sa(r)}`)}(n,e)}function Dg(n,e){let t={};return Nm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(n,(r,i)=>{let s=Vn(i,e.Ou(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Ng(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ke||n instanceof Ui||n instanceof Er||n instanceof Re||n instanceof an||n instanceof Bi)}function uh(n,e,t){if(!Ng(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=sa(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Fl(n,e,t){if((e=te(e))instanceof On)return e._internalPath;if(typeof e=="string")return lh(n,e);throw Ko("Field path arguments must be of type string or ",n,!1,void 0,t)}var YT=new RegExp("[~\\*/\\[\\]]");function lh(n,e,t){if(e.search(YT)>=0)throw Ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new On(...e.split("."))._internalPath}catch{throw Ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ko(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new x(P.INVALID_ARGUMENT,c+n+l)}function Og(n,e){return n.some(t=>t.isEqual(e))}var Ar=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new $l(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(hh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},$l=class extends Ar{data(){return super.data()}};function hh(n,e){return typeof e=="string"?lh(n,e):e instanceof On?e._internalPath:e._delegate._internalPath}function xg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var ji=class{},Ho=class extends ji{};function Vg(n,e,...t){let r=[];e instanceof ji&&r.push(e),r=r.concat(t),function(s){let a=s.filter(l=>l instanceof Ul).length,c=s.filter(l=>l instanceof Qo).length;if(a>1||a>0&&c>0)throw new x(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(let i of r)n=i._apply(n);return n}var Qo=class n extends Ho{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new n(e,t,r)}_apply(e){let t=this._parse(e);return Fg(e._query,t),new on(e.firestore,e.converter,Cu(e._query,t))}_parse(e){let t=Qi(e.firestore);return function(s,a,c,l,d,f,g){let I;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Dm(g,f);let R=[];for(let N of g)R.push(Cm(l,s,N));I={arrayValue:{values:R}}}else I=Cm(l,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Dm(g,f),I=QT(c,a,g,f==="in"||f==="not-in");return we.create(d,f,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}};function Lg(n,e,t){let r=e,i=hh("where",n);return Qo._create(i,r,t)}var Ul=class n extends ji{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new n(e,t)}_parse(e){let t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:at.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i,c=s.getFlattenedFilters();for(let l of c)Fg(a,l),a=Cu(a,l)}(e._query,t),new on(e.firestore,e.converter,Cu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}};var Bl=class n extends Ho{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new n(e,t,r)}_apply(e){return new on(e.firestore,e.converter,To(e._query,this._limit,this._limitType))}};function Mg(n){return WT("limit",n),Bl._create("limit",n,"F")}function Cm(n,e,t){if(typeof(t=te(t))=="string"){if(t==="")throw new x(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bm(e)&&t.indexOf("/")!==-1)throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);let r=e.path.child(ce.fromString(t));if(!U.isDocumentKey(r))throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tm(n,new U(r))}if(t instanceof Re)return tm(n,t._key);throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sa(t)}.`)}function Dm(n,e){if(!Array.isArray(n)||n.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fg(n,e){let t=function(i,s){for(let a of i)for(let c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}var Yo=class{convertValue(e,t="none"){switch(tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return cn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>le(a.doubleValue));return new Bi(s)}convertGeoPoint(e){return new Ui(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Xo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ri(e));default:return null}}convertTimestamp(e){let t=xt(e);return new ke(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=ce.fromString(e);X(ug(r));let i=new bo(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(t)||Ot(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function dh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var ql=class extends Yo{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}};var Zt=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Gi=class extends Ar{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(hh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},lr=class extends Gi{data(e={}){return super.data(e)}},Jo=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Zt(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new lr(this._firestore,this._userDataWriter,r.key,r,new Zt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{let l=new lr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Zt(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{let l=new lr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Zt(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:JT(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function JT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}function Ft(n){n=ze(n,Re);let e=ze(n.firestore,ct);return jT(Hi(e),n._key).then(t=>Ug(e,n,t))}var Sr=class extends Yo{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}};function fh(n){n=ze(n,on);let e=ze(n.firestore,ct),t=Hi(e),r=new Sr(e);return xg(n._query),GT(t,n._query).then(i=>new Jo(e,r,n,i))}function ut(n,e,t){n=ze(n,Re);let r=ze(n.firestore,ct),i=dh(n.converter,e,t);return ph(r,[ch(Qi(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ge.none())])}function un(n,e,t,...r){n=ze(n,Re);let i=ze(n.firestore,ct),s=Qi(i),a;return a=typeof(e=te(e))=="string"||e instanceof On?Cg(s,"updateDoc",n._key,e,t,r):Pg(s,"updateDoc",n._key,e),ph(i,[a.toMutation(n._key,Ge.exists(!0))])}function $g(n,e){let t=ze(n.firestore,ct),r=Je(n),i=dh(n.converter,e);return ph(t,[ch(Qi(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ge.exists(!1))]).then(()=>r)}function aa(n,...e){var t,r,i;n=te(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Pm(e[a])||(s=e[a],a++);let c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Pm(e[a])){let g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let l,d,f;if(n instanceof Re)d=ze(n.firestore,ct),f=Zo(n._key.path),l={next:g=>{e[a]&&e[a](Ug(d,n,g))},error:e[a+1],complete:e[a+2]};else{let g=ze(n,on);d=ze(g.firestore,ct),f=g._query;let I=new Sr(d);l={next:R=>{e[a]&&e[a](new Jo(d,I,g,R))},error:e[a+1],complete:e[a+2]},xg(n._query)}return function(I,R,N,M){let D=new $i(M),G=new Mi(R,D,N);return I.asyncQueue.enqueueAndForget(async()=>nh(await qo(I),G)),()=>{D.eu(),I.asyncQueue.enqueueAndForget(async()=>rh(await qo(I),G))}}(Hi(d),f,c,l)}function ph(n,e){return function(r,i){let s=new nt;return r.asyncQueue.enqueueAndForget(async()=>NT(await BT(r),i,s)),s.promise}(Hi(n),e)}function Ug(n,e,t){let r=t.docs.get(e._key),i=new Sr(n);return new Gi(n,i,e._key,r,new Zt(t.hasPendingWrites,t.fromCache),e.converter)}var XT={maxAttempts:5};function vi(n,e){if((n=te(n)).firestore!==e)throw new x(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}var jl=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Qi(t)}get(t){let r=vi(t,this._firestore),i=new ql(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return B();let a=s[0];if(a.isFoundDocument())return new Ar(this._firestore,i,a.key,a,r.converter);if(a.isNoDocument())return new Ar(this._firestore,i,r._key,null,r.converter);throw B()})}set(t,r,i){let s=vi(t,this._firestore),a=dh(s.converter,r,i),c=ch(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,i);return this._transaction.set(s._key,c),this}update(t,r,i,...s){let a=vi(t,this._firestore),c;return c=typeof(r=te(r))=="string"||r instanceof On?Cg(this._dataReader,"Transaction.update",a._key,r,i,s):Pg(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,c),this}delete(t){let r=vi(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=vi(e,this._firestore),r=new Sr(this._firestore);return super.get(e).then(i=>new Gi(this._firestore,r,t._key,i._document,new Zt(!1,!1),t.converter))}};function ln(n,e,t){n=ze(n,ct);let r=Object.assign(Object.assign({},XT),t);return function(s){if(s.maxAttempts<1)throw new x(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,a,c){let l=new nt;return s.asyncQueue.enqueueAndForget(async()=>{let d=await qT(s);new Dl(s.asyncQueue,d,c,a,l).cu()}),l.promise}(Hi(n),i=>e(new jl(n,i)),r)}function Bg(){return new qi("deleteField")}function lt(){return new Vl("serverTimestamp")}function mh(...n){return new Ll("arrayUnion",n)}function qg(...n){return new Ml("arrayRemove",n)}(function(e,t=!0){(function(i){kr=i})(Qt),qe(new be("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),c=new ct(new lu(r.getProvider("auth-internal")),new pu(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bo(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ae(Yp,"4.7.5",e),Ae(Yp,"4.7.5","esm2017")})();var ZT=()=>navigator.standalone===!0||matchMedia("(display-mode: standalone)").matches,gh=()=>{let n=new Dt;return n.setCustomParameters({prompt:"select_account"}),n};async function eE(n,e,t){t&&await ut(Je(n,"merges",e),{anonToken:t,at:lt()})}function jg(n,e,t){let r=null,i=setTimeout(()=>{r?.(),t(0)},2e4);return r=aa(Je(n,"merges",e),s=>{let a=s.data();a?.done&&(clearTimeout(i),r?.(),t(a.moved||0))},()=>{clearTimeout(i),t(0)}),r}async function tE(n){let e=n.currentUser;return e?.isAnonymous?e.getIdToken():null}async function yh(n,e,t){let r=await tE(n),i=await t();return await eE(e,i.user.uid,r),{status:r?"switched":"signed-in",uid:i.user.uid}}async function Gg(n,e){let t=n.currentUser;if(ZT())return await oo(t,gh()),{status:"redirecting"};try{return await Yc(t,gh()),{status:"linked",uid:t.uid}}catch(r){if(r.code==="auth/credential-already-in-use"){let i=Dt.credentialFromError(r);return yh(n,e,()=>wi(n,i))}if(r.code==="auth/popup-blocked"||r.code==="auth/operation-not-supported-in-this-environment")return await oo(t,gh()),{status:"redirecting"};throw r}}async function zg(n,e){try{let t=await Jc(n);return t?{status:"linked",uid:t.user.uid}:null}catch(t){if(t.code==="auth/credential-already-in-use"){let r=Dt.credentialFromError(t);return yh(n,e,()=>wi(n,r))}throw t}}async function Wg(n,e,t){return await jc(n.currentUser,Ct.credential(e.trim(),t)),{status:"linked",uid:n.currentUser.uid}}function Kg(n,e,t,r){return yh(n,e,()=>zc(n,t.trim(),r))}var Hg=(n,e)=>Gc(n,e.trim()),wh=n=>Kc(n);async function Qg(n,e){await ut(Je(n,"deletions",e),{at:lt()})}function _h(n){if(!n||n.isAnonymous)return null;let e=n.providerData.some(t=>t.providerId==="google.com");return{email:n.email||n.providerData.find(t=>t.email)?.email||"",google:e}}var nE=["fuck","fucker","fucking","fucked","fuk","fck","motherfucker","shit","shitty","bullshit","shithead","cunt","twat","bitch","bitches","asshole","dickhead","cocksucker","whore","slut","bastard","wank","wanker","jizz","dildo","porn","porno","rape","rapist","nigger","nigga","chink","spic","kike","wetback","gook","raghead","towelhead","beaner","faggot","fag","dyke","tranny","retard","retarded"],rE=["fuck","shit","nigger","nigga","faggot"],vh=new Set(nE),iE={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t","@":"a",$:"s","!":"i"};function sE(n){return String(n).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[013457@$!]/g,e=>iE[e])}function Dr(n){let t=sE(n).split(/[^a-z]+/).filter(Boolean),r=s=>s.length>3&&s.endsWith("s")?s.slice(0,-1):s;if(t.some(s=>vh.has(s)||vh.has(r(s)))||t.some(s=>rE.some(a=>s.includes(a))))return!0;let i=t.join("");return!!(t.length>2&&t.every(s=>s.length===1)&&vh.has(i))}var Yg="ABCDEFGHJKLMNPQRSTUVWXYZ";function bh(){let n="";for(let e=0;e<4;e++)n+=Yg[Math.floor(Math.random()*Yg.length)];return n}function oE(n){return n.length<=3?n:n.endsWith("ies")&&n.length>4?n.slice(0,-3)+"y":/(ss|x|z|ch|sh)es$/.test(n)?n.slice(0,-2):n.endsWith("s")&&!n.endsWith("ss")&&!n.endsWith("us")&&!n.endsWith("is")?n.slice(0,-1):n}var aE=/[aeiouy]/;function cE(n){let e=n.match(/^(.+?)(ing|ed)$/);if(!e)return n;let t=e[1];return t.length<3||!aE.test(t)||t.endsWith("e")?n:/([b-df-hj-np-rtv-z])\1$/.test(t)&&!/(ll|ss|zz)$/.test(t)?t.slice(0,-1):(t.length===3&&/[^aeiou][aeiou][^aeiouwxy]$/.test(t)&&(t+="e"),t)}function Ue(n){return String(n).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/&/g," and ").replace(/[^a-z0-9 ]+/g," ").split(/\s+/).filter(Boolean).filter((e,t,r)=>!(t===0&&r.length>1&&(e==="the"||e==="a"||e==="an"))).map(oE).map(cE).join(" ")}function vt(n){return String(n).trim().replace(/\s+/g," ").slice(0,40)}function Ih(n,e){return(e||[]).includes(Ue(n))}function Jg(n){return n.length>=2&&n.every(e=>e.norm===n[0].norm)}function uE(n,e){let t=Array.from({length:e.length+1},(r,i)=>i);for(let r=1;r<=n.length;r++){let i=t[0];t[0]=r;for(let s=1;s<=e.length;s++){let a=t[s];t[s]=Math.min(t[s]+1,t[s-1]+1,i+(n[r-1]===e[s-1]?0:1)),i=a}}return t[e.length]}function lE(n,e){let t=Ue(n),r=Ue(e);if(t===r)return!0;let i=Math.min(t.length,r.length),s=uE(t,r);if(i>=5&&s<=1||i>=9&&s<=2)return!0;let a=t.split(" "),c=r.split(" ");return a.every(l=>c.includes(l))||c.every(l=>a.includes(l))}function Th(n){let e={};n.forEach(r=>{let i=Ue(r);e[i]=(e[i]||0)+1});let t=Object.keys(e).sort((r,i)=>e[i]-e[r])[0];return n.find(r=>Ue(r)===t)}function Eh(n){if(n.length<2)return!1;let e=Th(n);return n.every(t=>lE(t,e))&&!n.every(t=>Ue(t)===Ue(e))}var Xg=`
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
`).map(n=>n.trim()).filter(Boolean);var Ah=`
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
`).map(n=>n.split("|").map(e=>e.trim())).filter(([n,e])=>n&&e).map(([n,e])=>({word:n,def:e}));var Zg=[{word:"Caffeinated Sloth"},{word:"Confused Platypus"},{word:"Sticky-Fingered Octopus"},{word:"Hangry Penguin"},{word:"One-Legged Flamingo"},{word:"Show-Off Narwhal"},{word:"Grumpy Hippo"},{word:"Nosy Giraffe"},{word:"Kickboxing Kangaroo"},{word:"Snoring Koala"},{word:"Dumpster Raccoon"},{word:"Panicked Skunk"},{word:"Huggable Porcupine"},{word:"Roadside Armadillo"},{word:"Startled Hedgehog"},{word:"Spitting Llama"},{word:"Thirsty Camel"},{word:"Mustached Walrus"},{word:"Greedy Pelican"},{word:"Vain Peacock"},{word:"Moody Chameleon"},{word:"Wobbly Jellyfish"},{word:"Galloping Seahorse"},{word:"Furious Pufferfish"},{word:"Slurping Anteater"},{word:"Upside-Down Bat"},{word:"Judgmental Owl"},{word:"Patient Vulture"},{word:"Giggling Hyena"},{word:"Handsome Warthog"},{word:"Lost Moose"},{word:"Stampeding Bison"},{word:"Overworked Beaver"},{word:"Hand-Holding Otter"},{word:"Playing-Dead Opossum"},{word:"Friendly Tarantula"},{word:"Sneaky Scorpion"},{word:"Sunburned Lobster"},{word:"Lonely Starfish"},{word:"Chunky Manatee"},{word:"Sunbathing Iguana"},{word:"Chest-Pounding Gorilla"},{word:"Dancing Lemur"},{word:"Paranoid Meerkat"},{word:"Hiding Ostrich"},{word:"Flashy Toucan"},{word:"Tattletale Parrot"},{word:"Inky Squid"},{word:"Toothy Shark"},{word:"Smiling Crocodile"},{word:"Drooling Komodo dragon"},{word:"Ancient Tortoise"},{word:"Speeding Snail"},{word:"Blinking Firefly"},{word:"Polite Praying mantis"},{word:"Fearless Honey badger"},{word:"Raging Wolverine"},{word:"Sticky Gecko"},{word:"Hardworking Dung beetle"},{word:"Squinting Mole"},{word:"Axolotl",def:"A Mexican salamander that stays a baby its whole life and can regrow its legs."},{word:"Aye-aye",def:"A Madagascar lemur that taps on trees with one long, skinny finger to find bugs."},{word:"Blobfish",def:"A deep-sea fish that looks like a melted face when it's pulled up to the surface."},{word:"Pangolin",def:"A mammal covered in scales that rolls into a ball like an armored pinecone."},{word:"Okapi",def:"A shy forest cousin of the giraffe with zebra stripes on its legs."},{word:"Tardigrade",def:'A microscopic "water bear" that can survive boiling, freezing and outer space.'},{word:"Star-nosed mole",def:"A mole with 22 pink tentacles on its nose."},{word:"Shoebill",def:"A giant stork with a beak shaped like a wooden shoe and a terrifying stare."},{word:"Dugong",def:`A gentle "sea cow," cousin of the manatee, with a tail like a dolphin's.`},{word:"Capybara",def:"The world's biggest rodent, famous for being calm around every other animal."},{word:"Fossa",def:"A cat-like hunter from Madagascar that's actually related to the mongoose."},{word:"Kakapo",def:"A chubby, flightless night parrot from New Zealand that smells like honey."},{word:"Quokka",def:"A little Australian wallaby that always looks like it's smiling."},{word:"Tapir",def:"A pig-shaped animal with a short, bendy trunk."},{word:"Proboscis monkey",def:"A monkey with an enormous droopy nose."},{word:"Mantis shrimp",def:"A shrimp that punches so fast it can crack aquarium glass."},{word:"Sea pig",def:"A deep-sea sea cucumber that walks on little legs."},{word:"Naked mole-rat",def:"A wrinkly, hairless rodent that lives about 30 years and almost never gets cancer."},{word:"Hagfish",def:"An eel-like fish that fills the water with slime when something grabs it."},{word:"Frogfish",def:"A lumpy fish that walks along the sea floor on its fins."},{word:"Ocean sunfish",def:"A giant, flat fish that looks like a swimming head. Also called a mola."},{word:"Gharial",def:"A crocodile with a long, skinny snout and a knob on the end."},{word:"Saiga",def:"An antelope with a big, floppy nose that filters dust."},{word:"Markhor",def:"A wild goat with long corkscrew horns."},{word:"Binturong",def:'A "bearcat" from Asia that smells like buttered popcorn.'},{word:"Cassowary",def:"A huge, dangerous bird with a helmet on its head and dagger claws."},{word:"Hoatzin",def:'A "stinkbird" whose chicks have claws on their wings.'},{word:"Potoo",def:"A night bird that looks exactly like a broken branch, with huge eyes."},{word:"Lyrebird",def:"An Australian bird that can copy chainsaws and camera clicks."},{word:"Dik-dik",def:"A tiny antelope about the size of a small dog."},{word:"Echidna",def:"A spiny Australian mammal that lays eggs."},{word:"Numbat",def:"A striped Australian animal that eats about 20,000 termites a day."},{word:"Wombat",def:"A stocky Australian burrower whose poop comes out in cubes."},{word:"Tasmanian devil",def:"A small, loud Australian animal with a scream that sounds like a horror movie."},{word:"Sugar glider",def:"A tiny marsupial that glides between trees like a living kite."},{word:"Slow loris",def:"A big-eyed, slow-moving primate with a venomous bite."},{word:"Tarsier",def:"A tiny primate whose eyes are each as big as its brain."},{word:"Pink fairy armadillo",def:"The world's smallest armadillo, with a pink shell."},{word:"Glass frog",def:"A frog with a see-through belly. You can watch its heart beat."},{word:"Goblin shark",def:"A deep-sea shark whose jaws shoot out of its face to grab food."},{word:"Anglerfish",def:"A deep-sea fish with a glowing lure dangling over its mouth."},{word:"Vampire squid",def:"Neither a vampire nor a squid. It flips its cape-like webbing over its body."},{word:"Dumbo octopus",def:"A deep-sea octopus with fins that look like Dumbo's ears."},{word:"Leafy sea dragon",def:"A seahorse relative that looks like a floating bunch of seaweed."},{word:"Basilisk lizard",def:"A lizard that can run across the top of water."},{word:"Thorny devil",def:"A spiky Australian lizard that drinks water through its skin."},{word:"Horned lizard",def:"A lizard that can squirt blood from its eyes at predators."},{word:"Bombardier beetle",def:"A beetle that sprays a boiling-hot chemical out of its rear."},{word:"Hercules beetle",def:"One of the world's biggest beetles, with a horn like a pair of pliers."},{word:"Atlas moth",def:"A giant moth whose wingtips look like snake heads."},{word:"Bullet ant",def:"An ant with one of the most painful stings in the world."},{word:"Orchid mantis",def:"A praying mantis that looks exactly like a pink flower."},{word:"Walking stick",def:"An insect that looks just like a twig."},{word:"Cicada",def:"A loud bug. Some kinds stay underground for 17 years before coming out."},{word:"Pistol shrimp",def:"A shrimp that snaps its claw so hard the bubble makes one of the loudest sounds in the sea."},{word:"Coconut crab",def:"The biggest crab on land, strong enough to crack open coconuts."},{word:"Japanese spider crab",def:"A crab whose legs can stretch about 12 feet from tip to tip."},{word:"Portuguese man o' war",def:"Looks like a jellyfish but is really a colony of tiny animals working as one."},{word:"Nudibranch",def:"A neon-colored sea slug."},{word:"Electric eel",def:"A fish that can zap with up to 800 volts. It's not even a real eel."},{word:"Lamprey",def:"A jawless fish with a round sucker mouth full of teeth."},{word:"Barreleye",def:"A deep-sea fish with a see-through head."},{word:"Gulper eel",def:"A deep-sea eel with a mouth bigger than its body."},{word:"Sea cucumber",def:"A squishy sea-floor animal that can shoot out its own insides to escape."},{word:"Beluga",def:'A white whale nicknamed the "sea canary" for its chirps and whistles.'},{word:"Babirusa",def:"A wild pig whose tusks grow up through the top of its snout."},{word:"Aardvark",def:'An African "earth pig" with a long tongue for slurping ants.'},{word:"Aardwolf",def:"A small hyena that eats termites instead of meat."},{word:"Maned wolf",def:"A South American wild dog that looks like a fox on stilts."},{word:"Fennec fox",def:"A tiny desert fox with enormous ears."},{word:"Red panda",def:"A fluffy, red tree-dweller. Not actually related to the giant panda."},{word:"Snow leopard",def:"A big cat of the mountains that wraps its long tail around itself like a scarf."},{word:"Pallas's cat",def:"A fluffy wild cat from Central Asia that always looks grumpy."},{word:"Serval",def:"An African wild cat with long legs and huge ears."},{word:"Caracal",def:"A wild cat with tufted ears that can leap up and swat birds out of the air."},{word:"Ocelot",def:"A spotted wild cat of the Americas."},{word:"Coati",def:"A raccoon cousin with a long nose and a striped tail it holds straight up."},{word:"Kinkajou",def:'A "honey bear" that hangs from trees by its tail.'},{word:"Sloth bear",def:"A shaggy bear that slurps up termites like a vacuum."},{word:"Matamata",def:"A turtle that looks like a pile of dead leaves."},{word:"Alligator snapping turtle",def:"A huge turtle that wiggles a worm-shaped tongue to lure fish into its mouth."},{word:"Mudskipper",def:"A fish that walks on land and climbs trees."},{word:"Mimic octopus",def:"An octopus that impersonates other animals, like sea snakes and lionfish."},{word:"Hummingbird",def:"The only bird that can fly backwards."},{word:"Secretary bird",def:"A tall African bird of prey that stomps on snakes."},{word:"Harpy eagle",def:"A massive rainforest eagle that hunts monkeys and sloths."},{word:"Kiwi",def:"A flightless New Zealand bird with nostrils at the tip of its beak."},{word:"Puffin",def:'A seabird with a colorful beak, nicknamed the "sea parrot."'},{word:"Blue-footed booby",def:"A seabird that shows off its bright blue feet in a dance."},{word:"Frigatebird",def:"A seabird that puffs up a giant red balloon on its throat."},{word:"Marabou stork",def:'A bald, scruffy stork nicknamed the "undertaker bird."'},{word:"Emu",def:'A giant flightless Australian bird. Australia once lost a "war" against them.'},{word:"Roadrunner",def:"A desert bird that runs up to about 20 miles per hour."},{word:"Pygmy marmoset",def:"The world's smallest monkey, small enough to sit on your finger."},{word:"Mandrill",def:"A monkey with a bright red and blue face."},{word:"Gelada",def:"A grass-eating monkey with a bright red patch on its chest."},{word:"Uakari",def:"A monkey with a bright red, bald face."},{word:"Colugo",def:'A "flying lemur" that neither flies nor is a lemur. It glides.'},{word:"Jerboa",def:"A tiny desert hopper with huge ears and kangaroo legs."},{word:"Chinchilla",def:"A rodent with the softest, thickest fur of any land animal."},{word:"Muntjac",def:'A small "barking deer" with little fangs.'},{word:"Gerenuk",def:"A long-necked antelope that stands on its back legs to eat."},{word:"Yak",def:"A shaggy mountain ox from the Himalayas."},{word:"Musk ox",def:"A shaggy Arctic animal that lived alongside woolly mammoths."},{word:"Wildebeest",def:"An African antelope that migrates in herds of over a million."},{word:"Pronghorn",def:"The fastest land animal in North America."},{word:"Olm",def:"A blind, pale cave salamander that can go years without eating."},{word:"Hellbender",def:'A giant American salamander nicknamed the "snot otter."'},{word:"Caecilian",def:"A legless amphibian that looks like a giant earthworm."},{word:"Giant isopod",def:"A deep-sea cousin of the pill bug that can grow over a foot long."}];var ey=[{word:"Hail Mary"},{word:"Buzzer beater"},{word:"Hat trick"},{word:"Walk-off home run"},{word:"Foam finger"},{word:"Rally cap"},{word:"Kiss cam"},{word:"Cooler dunk"},{word:"The wave"},{word:"Team mascot"},{word:"Instant replay"},{word:"Photo finish"},{word:"Seventh-inning stretch"},{word:"Ballpark hot dog"},{word:"Stadium nachos"},{word:"Cheerleader pyramid"},{word:"Tailgate"},{word:"Trash talk"},{word:"Victory lap"},{word:"Participation trophy"},{word:"Sweatband"},{word:"Mouthguard"},{word:"Referee whistle"},{word:"Shin guards"},{word:"Rally towel"},{word:"Pickleball"},{word:"Cornhole"},{word:"Dodgeball"},{word:"Tug of war"},{word:"Curling"},{word:"Sumo"},{word:"Bowling"},{word:"Mini golf"},{word:"Table tennis"},{word:"Shuffleboard"},{word:"Lacrosse"},{word:"Rodeo"},{word:"Bull riding"},{word:"Figure skating"},{word:"Synchronized swimming"},{word:"Pole vault"},{word:"Marathon"},{word:"Relay baton"},{word:"Gold medal"},{word:"Slam dunk"},{word:"Fumble"},{word:"Air ball"},{word:"Red card"},{word:"Hole in one"},{word:"Gutter ball"},{word:"Strikeout"},{word:"Halftime show"},{word:"Belly flop"},{word:"Cannonball"},{word:"Monster truck rally"},{word:"Demolition derby"},{word:"Soapbox derby"},{word:"Four square"},{word:"Hopscotch"},{word:"Arm wrestling"},{word:"Cheese rolling",def:"Chasing a giant wheel of cheese down a dangerously steep hill in England."},{word:"Chess boxing",def:"A match that switches back and forth between rounds of chess and rounds of boxing."},{word:"Bog snorkeling",def:"Swimming two lengths of a muddy bog trench in a snorkel and flippers. Held in Wales."},{word:"Wife carrying",def:"A Finnish race where men carry their wives through an obstacle course."},{word:"Toe wrestling",def:"Arm wrestling, but with toes. There's a world championship in England."},{word:"Underwater hockey",def:"Pushing a puck along the bottom of a pool with tiny sticks while holding your breath."},{word:"Sepak takraw",def:"Volleyball played with feet, knees and heads instead of hands. Big in Southeast Asia."},{word:"Bossaball",def:"Volleyball on a giant inflatable trampoline court, with a DJ playing."},{word:"Extreme ironing",def:"Ironing a shirt in a ridiculous place: on a mountain, underwater, while skydiving."},{word:"Kabaddi",def:'A team tag game from India where the raider has to keep chanting "kabaddi" on one breath.'},{word:"Jai alai",def:"A lightning-fast ball game played by catching and flinging the ball with a curved wicker basket."},{word:"Hurling",def:"An ancient Irish stick-and-ball game, often called the fastest game on grass."},{word:"Zorbing",def:"Rolling down a hill inside a giant see-through ball."},{word:"Roller derby",def:"A full-contact race around an oval track on roller skates."},{word:"Lawn mower racing",def:"Racing souped-up riding lawn mowers around a dirt track."},{word:"Bed racing",def:"Teams push beds on wheels through town in a race."},{word:"Gurning",def:"A contest to pull the ugliest face. The world championship is in England."},{word:"Pumpkin regatta",def:"Racing across a lake while sitting inside a hollowed-out giant pumpkin."},{word:"Elephant polo",def:"Polo played while riding elephants."},{word:"Camel racing",def:"Racing camels across the desert, often steered by tiny robot jockeys."},{word:"Pigeon racing",def:"Releasing homing pigeons far from home and timing who flies back fastest."},{word:"Unicycle hockey",def:"Hockey played entirely on unicycles."},{word:"Segway polo",def:"Polo played on two-wheeled scooters instead of horses."},{word:"Kite fighting",def:"Flying kites with sharp strings to cut down your rivals' kites."},{word:"Volcano boarding",def:"Sledding down the side of an active volcano in Nicaragua."},{word:"Sandboarding",def:"Snowboarding down giant sand dunes."},{word:"Joggling",def:"Jogging while juggling. Drop a ball and you have to go back for it."},{word:"Rock paper scissors championship",def:"Yes, there are real tournaments with real prize money."},{word:"Air guitar championship",def:"Playing a guitar that isn't there, judged on stage. The world finals are in Finland."},{word:"Hot dog eating contest",def:"Eating as many hot dogs as possible in ten minutes."},{word:"Log rolling",def:"Two people stand on a floating log and spin it until one falls in. Also called birling."},{word:"Axe throwing",def:"Throwing axes at a wooden target, like darts but louder."},{word:"Caber toss",def:"A Scottish event where you flip a whole tree trunk end over end."},{word:"Haggis hurling",def:"Throwing a haggis, a Scottish sheep-stomach pudding, as far as you can."},{word:"Worm charming",def:"Coaxing as many worms as possible out of the ground in 30 minutes, without digging."},{word:"Pea shooting",def:"Blowing dried peas through a tube at a target. There's a world championship."},{word:"Shin kicking",def:"An old English sport where two players hold shoulders and kick each other's shins."},{word:"Egg throwing",def:"Tossing a raw egg to a partner farther and farther apart until it breaks."},{word:"Wellie wanging",def:"Throwing a rubber rain boot as far as possible."},{word:"Phone throwing",def:"A Finnish contest for throwing an old mobile phone the farthest."},{word:"Cardboard boat race",def:"Racing boats made only of cardboard and tape until they sink."},{word:"Outhouse racing",def:"Racing outhouses on skis or wheels, with one teammate sitting inside."},{word:"Sheepdog trials",def:"Dogs herd sheep through gates and into a pen, guided only by whistles."},{word:"Swamp soccer",def:"Soccer played knee-deep in a muddy bog."},{word:"Underwater rugby",def:"Rugby in a deep pool, with a ball that sinks and goals on the bottom."},{word:"Skijoring",def:"Skiing while being pulled by a galloping horse or a dog."},{word:"Dog sled race",def:"Teams of dogs pulling a sled hundreds of miles across snow."},{word:"Mountain unicycling",def:"Riding a unicycle down rocky mountain trails."},{word:"Parkour",def:"Running through a city by jumping, climbing and vaulting over everything in the way."},{word:"Slacklining",def:"Walking and doing tricks on a loose strap tied between two points."},{word:"Flagpole sitting",def:"A 1920s fad of sitting on top of a flagpole for days or weeks."},{word:"Quadball",def:"A real sport inspired by a famous fictional flying broom game, played on foot with a pole between your legs."},{word:"Sport stacking",def:"Stacking and unstacking plastic cups in set patterns as fast as possible."},{word:"Yo-yo championship",def:"Competitive yo-yo tricks set to music."},{word:"Speedcubing",def:"Solving a twisty puzzle cube as fast as possible. The record is a few seconds."},{word:"Hobby horsing",def:"A Finnish sport of riding stick horses over jumps and through dressage routines."},{word:"Footgolf",def:"Golf played by kicking a soccer ball into giant holes."},{word:"Bubble soccer",def:"Soccer played while wearing a giant inflatable bubble."},{word:"Tejo",def:"A Colombian game of throwing metal discs at targets packed with tiny explosive pops."},{word:"Pato",def:"Argentina's national sport: basketball on horseback with a ball that has handles."},{word:"Fierljeppen",def:"Dutch pole vaulting over canals. You climb the pole as it tips."},{word:"Kin-ball",def:"Three teams play at once with a ball about four feet wide."},{word:"Korfball",def:"A Dutch game like basketball where every team has men and women, and no dribbling."},{word:"Teqball",def:"Soccer skills played over a curved table, like table tennis with feet."},{word:"Hornussen",def:"A Swiss sport where one team smacks a puck with a whip-like bat and the other blocks it with wooden paddles."},{word:"Molkky",def:"A Finnish lawn game of knocking over numbered wooden pins."},{word:"Kubb",def:`A lawn game nicknamed "Viking chess": throw sticks to knock over the other team's blocks.`},{word:"Petanque",def:"A French game of tossing steel balls as close as possible to a little wooden ball."},{word:"Croquet",def:"Knocking wooden balls through hoops with a mallet, usually on a very nice lawn."},{word:"Ostrich racing",def:"Riding ostriches in a race. Mostly the ostrich decides."},{word:"Pig racing",def:"Piglets racing around a little track at county fairs."},{word:"Frog jumping contest",def:"Frogs compete for the longest jump. California has held one since 1928."},{word:"Snail racing",def:"Snails race across a damp cloth. The world championship is in England."},{word:"Turtle racing",def:"Turtles crawl outward from the middle of a circle. First to the edge wins."},{word:"Drone racing",def:"Pilots race tiny camera drones through obstacle courses at high speed, wearing goggles."},{word:"Pillow fight league",def:"Organized pillow fighting with real rules and referees."},{word:"Finger pulling",def:"A Bavarian sport: two people hook middle fingers and pull across a table."},{word:"Blanket toss",def:"An Inuit celebration where people use a big skin blanket to toss someone high into the air."},{word:"Arctic high kick",def:"Kicking a hanging ball with one foot, as high as possible, then landing on that same foot."},{word:"Bandy",def:"Ice hockey's cousin, played with a ball on a rink the size of a soccer field."},{word:"Shinty",def:"A Scottish stick-and-ball game related to hurling."},{word:"Skeleton",def:"Sliding head-first down an icy track on a tiny sled at about 80 miles per hour."},{word:"Luge",def:"Sliding feet-first down an icy track, lying on your back."},{word:"Biathlon",def:"Cross-country skiing mixed with target shooting."},{word:"Modern pentathlon",def:"Fencing, swimming, riding, running and shooting, all in one event."},{word:"Race walking",def:"Walking as fast as possible without ever running. The hips do a lot of work."},{word:"Synchronized diving",def:"Two divers doing the exact same dive at the exact same time."},{word:"Trampoline",def:"An Olympic sport of flips and twists on a trampoline, way higher than your backyard."},{word:"Rhythmic gymnastics",def:"Gymnastics with ribbons, hoops, balls and clubs."},{word:"Steeplechase",def:"A long race with hurdles and a water pit to jump over every lap."},{word:"Hammer throw",def:"Spinning around and throwing a heavy ball on a wire."},{word:"Dressage",def:"Horses performing precise dance-like moves. Sometimes called horse ballet."},{word:"Canoe polo",def:"Water polo played from kayaks."},{word:"Footvolley",def:"Volleyball on the beach played with soccer skills. Born in Brazil."},{word:"Disc golf",def:"Golf played by throwing a flying disc into metal chain baskets."},{word:"Ultimate disc",def:"A team sport of passing a flying disc into an end zone. Played on the honor system, with no referees."},{word:"Roundnet",def:"Teams bounce a small ball off a round trampoline-like net at their feet."},{word:"Marbles championship",def:"Kids still compete for the national marbles title every year in New Jersey."},{word:"Jacks",def:"Bouncing a ball and scooping up little metal stars before it bounces twice."},{word:"Competitive tag",def:"Tag played on an obstacle course in timed rounds. It's on TV."},{word:"Sumo suit wrestling",def:"Wrestling in giant foam sumo costumes."},{word:"Underwater basketball",def:"Shooting a sinking ball into a hoop on the bottom of a pool."},{word:"Ice swimming",def:"Racing in water cut out of frozen lakes."},{word:"Stone skipping",def:"Skipping flat rocks across water. The record is 88 skips."},{word:"Cow pie throwing",def:"Tossing dried cow pies for distance at country fairs."},{word:"Watermelon seed spitting",def:"Spitting a watermelon seed as far as you can. Real contests, real records."},{word:"Gaga ball",def:"Dodgeball's cousin, played inside an eight-sided pit by hitting the ball at people's knees."},{word:"Tetherball",def:"Two players whack a ball on a rope around a pole until it wraps all the way."}];var Ln={open:{id:"open",art:"logo",free:!0},daily:{id:"daily",art:"bolts",free:!0},zoo:{id:"zoo",art:"zoo-art",logo:"zoo-logo",free:!0,words:Zg,confetti:["#F2A33A","#E0567A","#58A86B","#EAF4E9","#2F7A4C"]},sports:{id:"sports",art:"sports-art",logo:"sports-logo",free:!0,words:ey,confetti:["#FFB21E","#E23A4E","#23A35A","#F4F1E6","#FFFFFF"]}},ty=["open","zoo","sports","daily"],ca={id:"monsters",art:"monsters-art"},bt=n=>n&&Ln[n.pack]?.logo?n.pack:null;function ny(n,e,t=Math.random){let r=n.map((s,a)=>a);for(let s=r.length-1;s>0;s--){let a=Math.floor(t()*(s+1));[r[s],r[a]]=[r[a],r[s]]}let i=r.slice(0,e).map(s=>n[s]);if(e>1&&i.every(s=>s.def)){let s=n.filter(a=>!a.def);s.length&&(i[e-1]=s[Math.floor(t()*s.length)])}return i.map(s=>s.def?{word:s.word,def:s.def}:{word:s.word,def:""})}function ry(n,e,t=Math.random){if(!n?.length)return null;let r=n.length>1?n.filter(i=>i!==e):n;return r[Math.floor(t()*r.length)]}var iy={apiKey:"AIzaSyAEbf9VBdvXdHUSlH0rZgHL7SmvXyAn_nM",authDomain:"playbrainsmith.com",projectId:"thesamesiesgame",storageBucket:"thesamesiesgame.firebasestorage.app",messagingSenderId:"120235814862",appId:"1:120235814862:web:4f5762bc1a08d2f228059f"},Sh="BBUQ64_JVKYcW-xtRMi77IaPskvgJtRW7ueEECgPOerrutMYWC2bY2rXyy1LVgggYOsMH5uNpIFEyfSQj1psYl4";var ay="@firebase/installations",Ch="0.6.11";var cy=1e4,uy=`w:${Ch}`,ly="FIS_v2",hE="https://firebaseinstallations.googleapis.com/v1",dE=60*60*1e3,fE="installations",pE="Installations";var mE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fn=new Ke(fE,pE,mE);function hy(n){return n instanceof $e&&n.code.includes("request-failed")}function dy({projectId:n}){return`${hE}/projects/${n}/installations`}function fy(n){return{token:n.token,requestStatus:2,expiresIn:yE(n.expiresIn),creationTime:Date.now()}}async function py(n,e){let r=(await e.json()).error;return Fn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function my({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function gE(n,{refreshToken:e}){let t=my(n);return t.append("Authorization",wE(e)),t}async function gy(n){let e=await n();return e.status>=500&&e.status<600?n():e}function yE(n){return Number(n.replace("s","000"))}function wE(n){return`${ly} ${n}`}async function _E({appConfig:n,heartbeatServiceProvider:e},{fid:t}){let r=dy(n),i=my(n),s=e.getImmediate({optional:!0});if(s){let d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}let a={fid:t,authVersion:ly,appId:n.appId,sdkVersion:uy},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await gy(()=>fetch(r,c));if(l.ok){let d=await l.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:fy(d.authToken)}}else throw await py("Create Installation",l)}function yy(n){return new Promise(e=>{setTimeout(e,n)})}function vE(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}var bE=/^[cdef][\w-]{21}$/,Ph="";function IE(){try{let n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;let t=TE(n);return bE.test(t)?t:Ph}catch{return Ph}}function TE(n){return vE(n).substr(0,22)}function la(n){return`${n.appName}!${n.appId}`}var wy=new Map;function _y(n,e){let t=la(n);vy(t,e),EE(t,e)}function vy(n,e){let t=wy.get(n);if(t)for(let r of t)r(e)}function EE(n,e){let t=AE();t&&t.postMessage({key:n,fid:e}),SE()}var Mn=null;function AE(){return!Mn&&"BroadcastChannel"in self&&(Mn=new BroadcastChannel("[Firebase] FID Change"),Mn.onmessage=n=>{vy(n.data.key,n.data.fid)}),Mn}function SE(){wy.size===0&&Mn&&(Mn.close(),Mn=null)}var kE="firebase-installations-database",RE=1,$n="firebase-installations-store",kh=null;function Dh(){return kh||(kh=wn(kE,RE,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore($n)}}})),kh}async function ua(n,e){let t=la(n),i=(await Dh()).transaction($n,"readwrite"),s=i.objectStore($n),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&_y(n,e.fid),e}async function by(n){let e=la(n),r=(await Dh()).transaction($n,"readwrite");await r.objectStore($n).delete(e),await r.done}async function ha(n,e){let t=la(n),i=(await Dh()).transaction($n,"readwrite"),s=i.objectStore($n),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&_y(n,c.fid),c}async function Nh(n){let e,t=await ha(n.appConfig,r=>{let i=PE(r),s=CE(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Ph?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function PE(n){let e=n||{fid:IE(),registrationStatus:0};return Iy(e)}function CE(n,e){if(e.registrationStatus===0){if(!navigator.onLine){let i=Promise.reject(Fn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}let t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=DE(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:NE(n)}:{installationEntry:e}}async function DE(n,e){try{let t=await _E(n,e);return ua(n.appConfig,t)}catch(t){throw hy(t)&&t.customData.serverCode===409?await by(n.appConfig):await ua(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function NE(n){let e=await sy(n.appConfig);for(;e.registrationStatus===1;)await yy(100),e=await sy(n.appConfig);if(e.registrationStatus===0){let{installationEntry:t,registrationPromise:r}=await Nh(n);return r||t}return e}function sy(n){return ha(n,e=>{if(!e)throw Fn.create("installation-not-found");return Iy(e)})}function Iy(n){return OE(n)?{fid:n.fid,registrationStatus:0}:n}function OE(n){return n.registrationStatus===1&&n.registrationTime+cy<Date.now()}async function xE({appConfig:n,heartbeatServiceProvider:e},t){let r=VE(n,t),i=gE(n,t),s=e.getImmediate({optional:!0});if(s){let d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}let a={installation:{sdkVersion:uy,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await gy(()=>fetch(r,c));if(l.ok){let d=await l.json();return fy(d)}else throw await py("Generate Auth Token",l)}function VE(n,{fid:e}){return`${dy(n)}/${e}/authTokens:generate`}async function Oh(n,e=!1){let t,r=await ha(n.appConfig,s=>{if(!Ty(s))throw Fn.create("not-registered");let a=s.authToken;if(!e&&FE(a))return s;if(a.requestStatus===1)return t=LE(n,e),s;{if(!navigator.onLine)throw Fn.create("app-offline");let c=UE(s);return t=ME(n,c),c}});return t?await t:r.authToken}async function LE(n,e){let t=await oy(n.appConfig);for(;t.authToken.requestStatus===1;)await yy(100),t=await oy(n.appConfig);let r=t.authToken;return r.requestStatus===0?Oh(n,e):r}function oy(n){return ha(n,e=>{if(!Ty(e))throw Fn.create("not-registered");let t=e.authToken;return BE(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ME(n,e){try{let t=await xE(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ua(n.appConfig,r),t}catch(t){if(hy(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await by(n.appConfig);else{let r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ua(n.appConfig,r)}throw t}}function Ty(n){return n!==void 0&&n.registrationStatus===2}function FE(n){return n.requestStatus===2&&!$E(n)}function $E(n){let e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+dE}function UE(n){let e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function BE(n){return n.requestStatus===1&&n.requestTime+cy<Date.now()}async function qE(n){let e=n,{installationEntry:t,registrationPromise:r}=await Nh(e);return r?r.catch(console.error):Oh(e).catch(console.error),t.fid}async function jE(n,e=!1){let t=n;return await GE(t),(await Oh(t,e)).token}async function GE(n){let{registrationPromise:e}=await Nh(n);e&&await e}function zE(n){if(!n||!n.options)throw Rh("App Configuration");if(!n.name)throw Rh("App Name");let e=["projectId","apiKey","appId"];for(let t of e)if(!n.options[t])throw Rh(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Rh(n){return Fn.create("missing-app-config-values",{valueName:n})}var Ey="installations",WE="installations-internal",KE=n=>{let e=n.getProvider("app").getImmediate(),t=zE(e),r=dt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},HE=n=>{let e=n.getProvider("app").getImmediate(),t=dt(e,Ey).getImmediate();return{getId:()=>qE(t),getToken:i=>jE(t,i)}};function QE(){qe(new be(Ey,KE,"PUBLIC")),qe(new be(WE,HE,"PRIVATE"))}QE();Ae(ay,Ch);Ae(ay,Ch,"esm2017");var YE="/firebase-messaging-sw.js",JE="/firebase-cloud-messaging-push-scope",Dy="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",XE="https://fcmregistrations.googleapis.com/v1",Ny="google.c.a.c_id",ZE="google.c.a.c_l",e0="google.c.a.ts",t0="google.c.a.e",Ay;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ay||(Ay={}));var Yi;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Yi||(Yi={}));function $t(n){let e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function n0(n){let e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}var xh="fcm_token_details_db",r0=5,Sy="fcm_token_object_Store";async function i0(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(xh))return null;let e=null;return(await wn(xh,r0,{upgrade:async(r,i,s,a)=>{var c;if(i<2||!r.objectStoreNames.contains(Sy))return;let l=a.objectStore(Sy),d=await l.index("fcmSenderId").get(n);if(await l.clear(),!!d){if(i===2){let f=d;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(c=f.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:$t(f.vapidKey)}}}else if(i===3){let f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:$t(f.auth),p256dh:$t(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:$t(f.vapidKey)}}}else if(i===4){let f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:$t(f.auth),p256dh:$t(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:$t(f.vapidKey)}}}}}})).close(),await Es(xh),await Es("fcm_vapid_details_db"),await Es("undefined"),s0(e)?e:null}function s0(n){if(!n||!n.subscriptionOptions)return!1;let{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}var o0="firebase-messaging-database",a0=1,Un="firebase-messaging-store",Vh=null;function Fh(){return Vh||(Vh=wn(o0,a0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Un)}}})),Vh}async function Oy(n){let e=Uh(n),r=await(await Fh()).transaction(Un).objectStore(Un).get(e);if(r)return r;{let i=await i0(n.appConfig.senderId);if(i)return await $h(n,i),i}}async function $h(n,e){let t=Uh(n),i=(await Fh()).transaction(Un,"readwrite");return await i.objectStore(Un).put(e,t),await i.done,e}async function c0(n){let e=Uh(n),r=(await Fh()).transaction(Un,"readwrite");await r.objectStore(Un).delete(e),await r.done}function Uh({appConfig:n}){return n.appId}var u0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ve=new Ke("messaging","Messaging",u0);async function l0(n,e){let t=await qh(n),r=Vy(e),i={method:"POST",headers:t,body:JSON.stringify(r)},s;try{s=await(await fetch(Bh(n.appConfig),i)).json()}catch(a){throw Ve.create("token-subscribe-failed",{errorInfo:a?.toString()})}if(s.error){let a=s.error.message;throw Ve.create("token-subscribe-failed",{errorInfo:a})}if(!s.token)throw Ve.create("token-subscribe-no-token");return s.token}async function h0(n,e){let t=await qh(n),r=Vy(e.subscriptionOptions),i={method:"PATCH",headers:t,body:JSON.stringify(r)},s;try{s=await(await fetch(`${Bh(n.appConfig)}/${e.token}`,i)).json()}catch(a){throw Ve.create("token-update-failed",{errorInfo:a?.toString()})}if(s.error){let a=s.error.message;throw Ve.create("token-update-failed",{errorInfo:a})}if(!s.token)throw Ve.create("token-update-no-token");return s.token}async function xy(n,e){let r={method:"DELETE",headers:await qh(n)};try{let s=await(await fetch(`${Bh(n.appConfig)}/${e}`,r)).json();if(s.error){let a=s.error.message;throw Ve.create("token-unsubscribe-failed",{errorInfo:a})}}catch(i){throw Ve.create("token-unsubscribe-failed",{errorInfo:i?.toString()})}}function Bh({projectId:n}){return`${XE}/projects/${n}/registrations`}async function qh({appConfig:n,installations:e}){let t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Vy({p256dh:n,auth:e,endpoint:t,vapidKey:r}){let i={web:{endpoint:t,auth:e,p256dh:n}};return r!==Dy&&(i.web.applicationPubKey=r),i}var d0=7*24*60*60*1e3;async function f0(n){let e=await g0(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:$t(e.getKey("auth")),p256dh:$t(e.getKey("p256dh"))},r=await Oy(n.firebaseDependencies);if(r){if(y0(r.subscriptionOptions,t))return Date.now()>=r.createTime+d0?m0(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await xy(n.firebaseDependencies,r.token)}catch(i){console.warn(i)}return ky(n.firebaseDependencies,t)}else return ky(n.firebaseDependencies,t)}async function p0(n){let e=await Oy(n.firebaseDependencies);e&&(await xy(n.firebaseDependencies,e.token),await c0(n.firebaseDependencies));let t=await n.swRegistration.pushManager.getSubscription();return t?t.unsubscribe():!0}async function m0(n,e){try{let t=await h0(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await $h(n.firebaseDependencies,r),t}catch(t){throw t}}async function ky(n,e){let r={token:await l0(n,e),createTime:Date.now(),subscriptionOptions:e};return await $h(n,r),r.token}async function g0(n,e){let t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:n0(e)})}function y0(n,e){let t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,i=e.auth===n.auth,s=e.p256dh===n.p256dh;return t&&r&&i&&s}function Ry(n){let e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return w0(e,n),_0(e,n),v0(e,n),e}function w0(n,e){if(!e.notification)return;n.notification={};let t=e.notification.title;t&&(n.notification.title=t);let r=e.notification.body;r&&(n.notification.body=r);let i=e.notification.image;i&&(n.notification.image=i);let s=e.notification.icon;s&&(n.notification.icon=s)}function _0(n,e){e.data&&(n.data=e.data)}function v0(n,e){var t,r,i,s,a;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};let c=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;c&&(n.fcmOptions.link=c);let l=(a=e.fcmOptions)===null||a===void 0?void 0:a.analytics_label;l&&(n.fcmOptions.analyticsLabel=l)}function b0(n){return typeof n=="object"&&!!n&&Ny in n}I0("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function I0(n,e){let t=[];for(let r=0;r<n.length;r++)t.push(n.charAt(r)),r<e.length&&t.push(e.charAt(r));return t.join("")}function T0(n){if(!n||!n.options)throw Lh("App Configuration Object");if(!n.name)throw Lh("App Name");let e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(let r of e)if(!t[r])throw Lh(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Lh(n){return Ve.create("missing-app-config-values",{valueName:n})}var Mh=class{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let i=T0(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}};async function Ly(n){try{n.swRegistration=await navigator.serviceWorker.register(YE,{scope:JE}),n.swRegistration.update().catch(()=>{})}catch(e){throw Ve.create("failed-service-worker-registration",{browserErrorMessage:e?.message})}}async function E0(n,e){if(!e&&!n.swRegistration&&await Ly(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ve.create("invalid-sw-registration");n.swRegistration=e}}async function A0(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Dy)}async function My(n,e){if(!navigator)throw Ve.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ve.create("permission-blocked");return await A0(n,e?.vapidKey),await E0(n,e?.serviceWorkerRegistration),f0(n)}async function S0(n,e,t){let r=k0(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[Ny],message_name:t[ZE],message_time:t[e0],message_device_time:Math.floor(Date.now()/1e3)})}function k0(n){switch(n){case Yi.NOTIFICATION_CLICKED:return"notification_open";case Yi.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}async function R0(n,e){let t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Yi.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(Ry(t)):n.onMessageHandler.next(Ry(t)));let r=t.data;b0(r)&&r[t0]==="1"&&await S0(n,t.messageType,r)}var Py="@firebase/messaging",Cy="0.12.14";var P0=n=>{let e=new Mh(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>R0(e,t)),e},C0=n=>{let e=n.getProvider("messaging").getImmediate();return{getToken:r=>My(e,r)}};function D0(){qe(new be("messaging",P0,"PUBLIC")),qe(new be("messaging-internal",C0,"PRIVATE")),Ae(Py,Cy),Ae(Py,Cy,"esm2017")}async function N0(){try{await bs()}catch{return!1}return typeof window<"u"&&ti()&&Rf()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}async function O0(n){if(!navigator)throw Ve.create("only-available-in-window");return n.swRegistration||await Ly(n),p0(n)}function jh(n=_n()){return N0().then(e=>{if(!e)throw Ve.create("unsupported-browser")},e=>{throw Ve.create("indexed-db-unsupported")}),dt(te(n),"messaging").getImmediate()}async function Fy(n,e){return n=te(n),My(n,e)}function $y(n){return n=te(n),O0(n)}D0();var Gh="samesies.alertsOff",x0=()=>/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,V0=()=>navigator.standalone===!0||matchMedia("(display-mode: standalone)").matches;function Ji(){return Sh?x0()&&!V0()?"ios-install":"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window?"yes":"no":"no"}var da=()=>"Notification"in window?Notification.permission:"default",zh=()=>Ji()==="yes"&&da()==="granted"&&localStorage.getItem(Gh)!=="1";async function Wh(n){let e=await navigator.serviceWorker.register("sw.js");return await navigator.serviceWorker.ready,Fy(jh(n),{vapidKey:Sh,serviceWorkerRegistration:e})}async function Uy(n,e,t){if(Ji()!=="yes"||await Notification.requestPermission()!=="granted")return!1;try{localStorage.removeItem(Gh)}catch{}let i=await Wh(n);return await ut(Je(e,"pushTokens",t),{tokens:mh(i),at:lt()},{merge:!0}),!0}async function fa(n,e,t){try{localStorage.setItem(Gh,"1")}catch{}try{let r=await Wh(n);await un(Je(e,"pushTokens",t),{tokens:qg(r)}),await $y(jh(n))}catch{}}async function By(n,e,t){if(zh())try{let r=await Wh(n);await ut(Je(e,"pushTokens",t),{tokens:mh(r),at:lt()},{merge:!0})}catch(r){console.warn("alerts refresh failed",r)}}var pa=(n,e,t)=>`${n} ${n===1?e:t}`,L0=n=>n.length<=2?n.join(" and "):n.slice(0,-1).join(", ")+" and "+n[n.length-1],v={appName:"Brainsmith",listNames:L0,rounds:n=>pa(n,"round","rounds"),errors:{generic:"Something went wrong. Check your connection and try again.",nameFirst:"Type your name first.",codeFormat:"Game codes are 4 letters.",noGame:"No game with that code.",started:"That game already started.",full:n=>`That game is full (${n} players max).`,wordFirst:"Type a word first.",used:n=>`"${n}" has already been used. Pick another!`,connect:"Could not connect to Brainsmith. Check your connection and refresh.",rudeWord:"Let\u2019s keep it family-friendly. Try another word.",rudeName:"Let\u2019s keep names family-friendly. Try another."},toasts:{waitMinute:"Give them a minute!",nudged:n=>`Nudged ${n} \u{1F44B}`,nudgedYou:n=>`${n} nudged you! Your word, please \u{1F440}`,rematch:n=>`${n} started a rematch. You're in!`,copiedShare:"Copied! Paste it in your group text.",removed:n=>`${n} was removed.`,askedClose:n=>`${n} asked: close enough?`,nameFirst:"Type a name first",nameSaved:"Name saved",inviteCopied:"Invite link copied"},someone:"Someone",aFriend:"A friend",theHost:"the host",thisPlayer:"this player",you:" (you)",host:"Host",loading:"Loading\u2026",findingGame:"Finding your game\u2026",goToStart:"Go to start",a11y:{back:"Step out to the start screen",howTo:"How to play",soundOn:"Turn sound on",soundOff:"Turn sound off",usedWords:n=>`Used words, ${n} so far`,settings:"Settings",close:"Close",closeHowTo:"Close How to Play",gameCode:"Game code",forgetGame:n=>`Remove game ${n} from this list`,removePlayer:n=>`Remove ${n} from the game`,react:(n,e)=>`React ${n}${e?`, ${e} so far`:""}`,slide:(n,e,t)=>`${n} of ${e}: ${t}`},share:{head:(n,e,t="")=>`\u{1F9E0} Brainsmith: we forged "${n}" in ${pa(e,"round","rounds")}${t}!`,headVote:(n,e,t="")=>`\u{1F9E0} Brainsmith: close enough on "${n}" in ${pa(e,"round","rounds")}${t}!`,playWithUs:"Play with us:",invite:n=>`Play Brainsmith with me! Code ${n}`},games:{title:"Your games",button:n=>`Your games (${n})`,needYou:n=>`${n} need you`,none:"No games yet.",loading:"Loading\u2026",with:n=>`With ${n}`,justYou:"Just you so far",removed:"You were removed",notIn:"Not in this game",startIt:"Ready when you are: start it!",waitingStart:"Waiting to start",forged:n=>`Forged: ${n}`,closeEnough:n=>`Close enough: ${n}`,yourTurn:n=>`Your turn \xB7 round ${n}`,waitingOn:n=>`Waiting on ${n}`,revealing:"Revealing\u2026",ended:"Game ended",gone:"No longer around"},home:{howTo:"How to Play",tagline:"Two words in. Meet in the middle.",yourName:"Your name",namePlaceholder:"What should we call you?",start:"Start a new game",dailyEyebrow:"WEIRD DAILY WORDS",dailyTitle:"Scared? You scared.",dailySub:"Start with a redonkulous word",or:"or",codePlaceholder:"Game code",join:"Join",fine:"2 to 5 players \xB7 no sign-up \xB7 no ads",saveGames:"Playing on more than one phone? <b>Sign in</b> to keep your games everywhere.",maker:"a Padre Smitty creation"},join:{invited:(n,e)=>`${n} invited you to game <strong>${e}</strong>`,started:"This game already started. Ask them to start a new one and send you the code.",full:"This game is full.",button:"Join the game"},missing:n=>`No game with code ${n}.`,removedFrom:n=>`You were taken out of game ${n} so the others could keep playing.`,confirmRemove:n=>`Remove ${n} from the game? Everyone else can keep playing.`,header:{game:n=>`GAME \xB7 ${n}`},lobby:{title:"Getting ready",dailyBadge:"Weird Daily Words game",inviteWith:"Invite with this code",shareLink:"Share invite link",players:(n,e)=>`PLAYERS \xB7 ${n} OF ${e}`,startNow:"Everyone\u2019s here, start!",needMore:"Waiting for at least one more",waitingFor:n=>`Waiting for ${n} to start\u2026`},round:{title:n=>`Round ${n}`,connect:"Connect these",askClose:"Close enough? Ask to count it",roundOne:"Round one",prompt:"Pick any word in the known universe.",promptTip:"Nouns are easiest. Adjectives make it harder.",lockedIn:"You locked in",waitingOn:n=>`Waiting on ${n}\u2026`,revealing:"Revealing\u2026",yourWord:"Your word",wordPlaceholder:"Type it here",lock:"Lock it in",starter:"Stuck? Give me a word",secret:"Nobody sees your word until everyone\u2019s in.",players:"PLAYERS",playerLocked:"Locked in",thinking:"Thinking\u2026",nudge:"Nudge"},reveal:{title:n=>`Round ${n} is in!`,said:(n,e,t)=>`${n} ${e?"both":"all"} said <em>${t}</em>!`,soClose:"So close! Keep going.",notYetTwo:"Not yet! Next round, connect these two.",notYetAll:"Not yet! Next round, connect all of these.",closeHot:"Those look the same. Close enough?",close:"Close enough?",next:n=>`On to round ${n}`},dealt:{title:"Weird words!",got:n=>`${n} got`,msg:"Everyone got a different word. Next round, find one word that connects them all.",next:"Let\u2019s connect them"},vote:{title:"Close enough?",playOn:n=>`${n} said not quite, so play on.`,youAsked:"You asked",asked:n=>`${n} asked`,explain:(n,e)=>`${n} to count round ${e} as a match. Everyone has to agree.`,waitingOn:n=>`Waiting on ${n}\u2026`,counting:"Counting\u2026",yes:"Yes, count it",no:"No"},won:{forged:"Forged!",closeEnough:"Close enough!",everyone:"Everyone said",agreed:"You all agreed on",howYouGot:"HOW YOU GOT THERE",share:"Share how we did it",joinNext:"Join the next game",again:"Play again, same crew",newCrew:"New game, new people",home:"Back to start"},used:{title:"Used words",explain:"These are off the table. If you try one, we\u2019ll quietly ask for another.",round:n=>`ROUND ${n}`,none:"Nothing yet. Round one is wide open."},settings:{title:"Settings",account:"Save your games",accountSub:"Sign in so your games follow you to any phone",signedIn:n=>`Signed in${n?` as ${n}`:""}`,signedInSub:"Your games follow you to any phone",signOut:"Sign out",deleteAccount:"Delete my account",deleteSub:"Erases your name, games list and alerts",yourName:"Your name",save:"Save",nameNote:"Used for new games you start or join.",sound:"Sound",soundSub:"Drumroll, flips and the Forged! fanfare",pastGames:"Past games",pastCount:n=>`${pa(n,"game","games")} on this phone`,noneYet:"None yet",howTo:"How to Play",howToSub:"Swipe through the rules again",privacy:"Privacy Policy",terms:"Terms of Use",restore:"Restore Purchase",restoreSoon:"Coming with Brainsmith Plus",contact:"Questions? hello@padresmitty.com",footer:"Brainsmith \xB7 a Padre Smitty creation"},tour:{title:"How to Play",count:(n,e)=>`${n} OF ${e}`,skip:"Skip",next:"Next",done:"Let\u2019s play",names:["Mom","Jake","You"],goalTitle:"Every brain, one word",goalBody:"Brainsmith is a team game. You all win together when every player types the very same word.",secretTitle:"Pick a word in secret",secretBody:"Any word you like. Nobody sees it until everyone\u2019s locked in, so take your time. Stuck on round 1? Tap <strong>Give me a word</strong>.",flipTitle:"They all flip at once",flipBody:"Drumroll, then every word is revealed together. The fun is seeing how far apart you started.",flipWords:["Ocean","Pizza","Robot"],middleTitle:"Meet in the middle",middleBody:"Next round, everyone looks for one word that connects the words you just saw. It doesn\u2019t have to be perfect, just your best guess at what the others will say.",middleGuess:"Anchovy?",forgeTitle:"Forge it!",forgeBody:"Keep connecting, round after round, until all of you land on the same word. Then it\u2019s <strong>Forged!</strong>",forgeWord:"Anchovy",matchTitle:"What counts as a match",matchRules:[["ok","Capitals don\u2019t matter.","Tennessee = tennessee"],["ok","Plurals count.","Game = games"],["ok","Endings count.","Run = running, bake = baked"],["ok","Two-word answers are fine.","Ice cream, New York"],["no","Extra words make it different.","Cliff \u2260 Cliff Swaim. If everyone agrees it\u2019s the same, vote <b>Close enough?</b>"],["no","No repeats.","A word already played this game is off limits."]],toolsTitle:"Handy buttons",tools:[["\u{1F44B}","Nudge","a player who\u2019s taking a while."],["\u{1F91D}","Close enough?","starts a vote when words almost match. Everyone has to say yes."],["list","Used words","shows every word played so far."],["\u{1F602}","React","to anyone\u2019s word after the reveal."]]},account:{title:"Save your games",body:"Sign in and your games, name and alerts follow you to any phone or tablet, including the Home Screen app.",google:"Continue with Google",homeScreenNote:"In the Home Screen app, sign in with email. Signed up with Google in Safari? Tap <b>Sign in</b>, type that Gmail, then <b>Forgot password?</b> to make a password for it.",or:"or use email",email:"Email",password:"Password",passwordNew:"Make a password (6+ characters)",create:"Create account",signIn:"Sign in",haveOne:"Already have an account? <b>Sign in</b>",needOne:"New here? <b>Create an account</b>",forgot:"Forgot password?",resetSent:n=>`Check ${n} for a link to pick a new password.`,needEmail:"Type your email first, then tap Forgot password.",working:"One sec\u2026",welcome:"Signed in. Your games are saved.",welcomeBack:"Welcome back!",moving:"Bringing this phone\u2019s games along\u2026",moved:n=>n?`Brought ${n} game${n===1?"":"s"} along. All set!`:"Welcome back! All set.",signedOut:"Signed out. You\u2019re playing as a guest now.",confirmSignOut:"Sign out? Your games stay saved in your account. Sign back in anytime to get them.",errors:{"auth/email-already-in-use":"That email already has an account. Tap Sign in instead.","auth/invalid-email":"That email doesn\u2019t look right.","auth/weak-password":"Pick a password with at least 6 characters.","auth/missing-password":"Type a password.","auth/invalid-credential":"That email and password don\u2019t match.","auth/wrong-password":"That email and password don\u2019t match.","auth/user-not-found":"No account with that email. Tap Create an account.","auth/too-many-requests":"Too many tries. Wait a few minutes, then try again.","auth/popup-closed-by-user":"","auth/cancelled-popup-request":"","auth/network-request-failed":"No connection. Check your internet and try again.","auth/operation-not-allowed":"That sign-in isn\u2019t switched on yet. Try the other way."}},del:{confirm:"Delete your account? Your name is taken out of every game and your games list, alerts and sign-in are erased. This can\u2019t be undone.",done:"Your account is deleted. Thanks for playing."},report:{menu:n=>n,reportBtn:n=>`Report ${n}`,reportSub:"Tell us about a mean name or word",blockBtn:n=>`Block ${n}`,blockSub:"Hides their name and words on your screen",unblockBtn:n=>`Unblock ${n}`,unblockSub:"Shows their name and words again",title:n=>`Report ${n}`,what:"What\u2019s wrong?",reasons:["Mean or hateful word","Gross or not family-friendly","Rude name","Something else"],note:"Anything else? (optional)",send:"Send report",sent:"Thanks for telling us. We read every report.",alsoBlock:n=>`Block ${n} too`,blocked:n=>`${n} is blocked. You won\u2019t see their name or words.`,unblocked:n=>`${n} is unblocked.`,hiddenName:"Blocked player",hiddenWord:"hidden",more:n=>`More options for ${n}`},move:{home:"Brainsmith has a new home: <b>playbrainsmith.com</b>. Finish your games here and we\u2019ll take you there.",won:"Next game? Play it at <b>playbrainsmith.com</b>, our new home."},alerts:{askTitle:"Want a buzz when the words flip? \u{1F514}",askBody:"We\u2019ll ping you when it\u2019s your turn, when someone nudges you, and when you forge a win. Nothing else.",yes:"Buzz me",no:"Nah",label:"Alerts",sub:"Your turn, nudges and wins",iosInstall:"On iPhone, add Brainsmith to your Home Screen first (Share, then Add to Home Screen), then turn this on there.",blocked:"Blocked in your browser settings. Allow notifications for this site to turn them on.",onToast:"Alerts on. We\u2019ll be (mostly) polite.",offToast:"Alerts off. Peace and quiet.",notNow:"No alerts for now. Turn them on anytime in Settings.",failed:"Couldn\u2019t turn on alerts. Try again in Settings."},packs:{pickTitle:"Pick a pack",pickSub:"The pack deals your first words. After that, anything goes.",free:"FREE",plus:"PLUS",soon:"Coming with Plus",soonToast:"Creature Feature comes with Brainsmith Plus. Soon!",forgedIn:n=>`Forged in ${n}`,shareIn:n=>` in ${n}`,open:{name:"Wide Open",blurb:"No pack. Anything goes from the very first word."},daily:{name:"Weird Daily Words",blurb:"Five redonkulous words a day, the same for everyone."},zoo:{name:"The Odd Zoo",blurb:"Every one of these animals is real. We checked.",dealtTitle:"Welcome to The Odd Zoo!",shouts:["ROAR!","Hive mind!","Stampede!","Birds of a feather!","Same species!","Apex predators!","Top of the food chain!","Feeding frenzy!","GOAT!","Ah-OOOOO!"]},sports:{name:"Huddle Up",blurb:"Cheese rolling is a real sport. So is chess boxing. Good luck.",dealtTitle:"Huddle up!",shouts:["Score!","Homerun!","Swish!","Gold!","GG!","Game, set, match!","Goal!","Knockout!","Touchdown!","Hole in one!"]},monsters:{name:"Creature Feature",blurb:"Movie monsters, from the classics to the cult weirdos."}}};var K=null,ga=!1;try{ga=localStorage.getItem("samesies.muted")==="1"}catch{}var jn=()=>ga;function jy(n){ga=n;try{localStorage.setItem("samesies.muted",n?"1":"0")}catch{}}function Gy(){try{K||(K=new(window.AudioContext||window.webkitAudioContext)),K.state==="suspended"&&K.resume()}catch{}}function Hh(){return!ga&&K&&K.state==="running"}function M0(){let n=K.createBuffer(1,K.sampleRate*.08,K.sampleRate),e=n.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=(Math.random()*2-1)*(1-t/e.length);return n}function qy(n,e){let t=K.createBufferSource();t.buffer=M0();let r=K.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.8;let i=K.createGain();i.gain.value=e,t.connect(r).connect(i).connect(K.destination),t.start(n)}function qn(n,e,t,r=.18,i="triangle"){let s=K.createOscillator();s.type=i,s.frequency.value=n;let a=K.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(r,e+.02),a.gain.exponentialRampToValueAtTime(1e-4,e+t),s.connect(a).connect(K.destination),s.start(e),s.stop(e+t+.05)}function zy(n=1.4,e=null){if(!Hh())return;let t=K.currentTime;for(let r=0;r<n;r+=.045)qy(t+r,(.08+.35*(r/n))*(Bn[e]?.6:1));if(Bn[e]){Bn[e].flip(t+n);return}qy(t+n,.7),qn(523,t+n,.5,.15),qn(784,t+n,.6,.12)}function Wy(n=null){if(!Hh())return;let e=K.currentTime;if(Bn[n]){Bn[n].close(e);return}qn(440,e,.25),qn(554,e+.12,.35)}function Ky(n=null){if(!Hh())return;let e=K.currentTime;Bn[n]&&(e+=Bn[n].win(e)),[523,659,784,1047].forEach((t,r)=>qn(t,e+r*.11,r===3?.9:.3,.2)),qn(1319,e+.44,.9,.08,"sine")}function F0(n){let e=K.createBuffer(1,Math.ceil(K.sampleRate*n),K.sampleRate),t=e.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1;let r=K.createBufferSource();return r.buffer=e,r}function Qh(n,e,t,r,i=.12,s="sine"){let a=K.createOscillator();a.type=s,a.frequency.setValueAtTime(e,n),a.frequency.exponentialRampToValueAtTime(t,n+r*.6);let c=K.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(i,n+.01),c.gain.exponentialRampToValueAtTime(1e-4,n+r),a.connect(c).connect(K.destination),a.start(n),a.stop(n+r+.05)}function Hy(n,e,t,r,i,s){let a=F0(e),c=K.createBiquadFilter();c.type=t,c.frequency.value=r,c.Q.value=.7;let l=K.createGain();return l.gain.setValueAtTime(1e-4,n),s(l.gain,n),a.connect(c).connect(l).connect(K.destination),a.start(n),a.stop(n+e),c}var $0=n=>Hy(n,.5,"bandpass",3200,0,e=>{for(let t=0;t<5;t++)e.linearRampToValueAtTime(.05+Math.random()*.15,n+t*.07+.02),e.linearRampToValueAtTime(.02,n+t*.07+.06);e.linearRampToValueAtTime(1e-4,n+.45)}),ma=(n,e)=>Qh(n,e,e*1.7,.14,.1),U0=n=>[0,.18,.34].forEach((e,t)=>Qh(n+e,420+t*90,620+t*120,.16,.1,"triangle")),Kh=(n,e,t)=>Hy(n,e,"bandpass",900,0,r=>{r.linearRampToValueAtTime(t,n+e*.3),r.linearRampToValueAtTime(t*.8,n+e*.7),r.linearRampToValueAtTime(1e-4,n+e)});function B0(n,e){let t=K.createOscillator();t.type="sine",t.frequency.value=2900;let r=K.createOscillator();r.frequency.value=38;let i=K.createGain();i.gain.value=140,r.connect(i).connect(t.frequency);let s=K.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(.09,n+.02),s.gain.setValueAtTime(.09,n+e-.05),s.gain.exponentialRampToValueAtTime(1e-4,n+e),t.connect(s).connect(K.destination),t.start(n),r.start(n),t.stop(n+e+.05),r.stop(n+e+.05)}function q0(n){let e=K.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(150,n),e.frequency.linearRampToValueAtTime(210,n+.35),e.frequency.exponentialRampToValueAtTime(70,n+1.2);let t=K.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(400,n),t.frequency.linearRampToValueAtTime(1500,n+.35),t.frequency.exponentialRampToValueAtTime(250,n+1.2);let r=K.createGain();r.gain.setValueAtTime(1e-4,n),r.gain.linearRampToValueAtTime(.2,n+.15),r.gain.exponentialRampToValueAtTime(1e-4,n+1.25),e.connect(t).connect(r).connect(K.destination),e.start(n),e.stop(n+1.3)}var Bn={zoo:{flip(n){$0(n);let e=Math.random();e<.4?(ma(n+.4,2400),ma(n+.56,2900)):e<.7?U0(n+.4):Qh(n+.4,130,90,.3,.12,"sawtooth")},close(n){ma(n,2200),ma(n+.13,2800)},win(n){return q0(n),1.1}},sports:{flip(n){B0(n,.3),Kh(n+.3,1,.18)},close(n){Kh(n,.9,.16).frequency.linearRampToValueAtTime(500,n+.9)},win(n){return qn(220,n,.8,.12,"square"),Kh(n+.3,1.6,.3),.9}}};function Qy(n=["#FF6A4D","#FFFFFF","#FFB020","#8A8CFF","#1FB895"]){if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;let e=document.createElement("div");e.className="confetti",e.setAttribute("aria-hidden","true");for(let t=0;t<90;t++){let r=document.createElement("i");r.style.left=Math.random()*100+"%",r.style.background=n[t%n.length],r.style.animationDelay=Math.random()*.6+"s",r.style.animationDuration=2.2+Math.random()*1.6+"s",r.style.setProperty("--drift",Math.random()*160-80+"px"),r.style.setProperty("--spin",Math.random()*1080-540+"deg"),t%3===0&&(r.style.borderRadius="50%"),e.appendChild(r)}document.body.appendChild(e),setTimeout(()=>e.remove(),4800)}var hn=null,Yy=0,Jy=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;function Xi(n){if(cancelAnimationFrame(Yy),hn?.remove(),hn=null,!n||!Xy[n])return;hn=document.createElement("div"),hn.className=`pack-bg pack-bg-${n}`,hn.setAttribute("aria-hidden","true");let e=document.createElement("canvas");hn.appendChild(e),document.body.prepend(hn);let t=e.getContext("2d"),r=Xy[n](),i=()=>{let a=Math.min(2,window.devicePixelRatio||1);e.width=innerWidth*a,e.height=innerHeight*a,r.reset(e,a)};i(),window.removeEventListener("resize",Xi.onResize),Xi.onResize=()=>{hn&&(i(),Jy()&&r.draw(t,e,!1))},window.addEventListener("resize",Xi.onResize);let s=()=>{r.draw(t,e,!0),Yy=requestAnimationFrame(s)};Jy()?r.draw(t,e,!1):s()}var Xy={zoo(){let n=["rgba(88,168,107,.55)","rgba(47,122,76,.65)","rgba(31,90,55,.7)","rgba(120,190,120,.45)"],e=[],t=1,r=(s,a)=>({x:Math.random()*s.width,y:a,len:(22+Math.random()*30)*t,r:Math.random()*6,spin:(Math.random()-.5)*.03,v:(.3+Math.random()*.5)*t,ph:Math.random()*6,c:n[Math.floor(Math.random()*n.length)]}),i=(s,a)=>{let c=a.len;s.save(),s.translate(a.x,a.y),s.rotate(a.r),s.fillStyle=a.c,s.beginPath(),s.moveTo(-c/2,0),s.quadraticCurveTo(0,-c*.4,c/2,0),s.quadraticCurveTo(0,c*.4,-c/2,0),s.fill(),s.strokeStyle="rgba(255,255,255,.18)",s.lineWidth=Math.max(1,c*.03),s.beginPath(),s.moveTo(-c/2-c*.12,0),s.lineTo(c/2,0),s.stroke(),s.restore()};return{reset(s,a){t=a,e=Array.from({length:26},()=>r(s,Math.random()*s.height))},draw(s,a,c){s.clearRect(0,0,a.width,a.height),e.forEach(l=>{i(s,l),c&&(l.y+=l.v,l.ph+=.02,l.x+=Math.sin(l.ph)*.6*t,l.r+=l.spin+Math.cos(l.ph)*.004,l.y>a.height+l.len&&Object.assign(l,r(a,-l.len)))})}}},sports(){let n=[],e=1,t=0,r=[];return{reset(i,s){e=s,n=[];let a=i.width,c=i.height;r=[["x",.18,.62],["x",.3,.7],["o",.66,.6],["o",.8,.72],["x",.24,.84],["o",.72,.88]].map(([l,d,f])=>[l,d*a,f*c])},draw(i,s,a){let c=s.width,l=s.height,d=l*.22;i.clearRect(0,0,c,l),[[.035,-1],[.965,1]].forEach(([g,I])=>{let R=c*g,N=d*.8,M=a?Math.sin(t/90+g*4)*.12:0;i.save(),i.translate(R,N),i.rotate(I*(.5+M));let D=i.createLinearGradient(0,0,0,l*.7);D.addColorStop(0,"rgba(255,248,210,.22)"),D.addColorStop(1,"rgba(255,248,210,0)"),i.fillStyle=D,i.beginPath(),i.moveTo(-8*e,0),i.lineTo(8*e,0),i.lineTo(c*.22,l*.7),i.lineTo(-c*.22,l*.7),i.fill(),i.restore(),i.fillStyle="rgba(255,250,225,.95)";for(let G=0;G<3;G++)for(let z=0;z<2;z++)i.beginPath(),i.arc(R+(G-1)*9*e,N+z*9*e,3.2*e,0,7),i.fill()}),a&&Math.random()<.2&&n.push({x:Math.random()*c,y:d*(.62+Math.random()*.34),life:1}),n.forEach(g=>{i.fillStyle=`rgba(255,255,255,${g.life})`,i.beginPath(),i.arc(g.x,g.y,(2.5*g.life+1)*e,0,7),i.fill(),g.life-=.06}),n=n.filter(g=>g.life>0),i.strokeStyle="rgba(244,241,230,.22)",i.lineWidth=3*e,i.lineCap="round";let f=13*e;r.forEach(([g,I,R])=>{i.beginPath(),g==="x"?(i.moveTo(I-f,R-f),i.lineTo(I+f,R+f),i.moveTo(I+f,R-f),i.lineTo(I-f,R+f)):i.arc(I,R,f,0,7),i.stroke()}),i.setLineDash([10*e,10*e]),i.beginPath(),i.moveTo(r[0][1]+f*1.6,r[0][2]),i.quadraticCurveTo(c*.48,l*.5,r[2][1]-f*1.8,r[2][2]),i.stroke(),i.setLineDash([]),t+=1}}}};var Gn=gc(iy),ht=Xc(Gn),de=Sg(Gn),j0=/^(127\.0\.0\.1|localhost)$/.test(location.hostname)&&(new URLSearchParams(location.search).has("emu")||sessionStorage.getItem("emu")==="1");j0&&(sessionStorage.setItem("emu","1"),ro(ht,"http://127.0.0.1:9099",{disableWarnings:!0}),ah(de,"127.0.0.1",8080));var _e=document.getElementById("app"),Z={get(n,e=null){try{let t=localStorage.getItem("samesies."+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("samesies."+n,JSON.stringify(e))}catch{}}},m={uid:null,authError:null,name:Z.get("name",""),tour:Z.get("toured",!1)?null:0,code:new URLSearchParams(location.search).get("g")?.toUpperCase()||null,game:null,gameMissing:!1,mySub:null,showUsed:!1,showGames:!1,showSettings:!1,showPacks:!1,account:null,showAccount:!1,accountMode:"create",accountError:"",accountNote:"",blocked:new Set(Z.get("blocked",[])),reportFor:null,reportStep:"menu",moving:!1,summaries:{},busy:!1,error:"",toast:""},Nr=null,Yh=!1,Zy=null,td=new Set,Jh={},ew=["#4B4DDB","#FF6A4D","#1FB895","#FFB020","#E84D9A"],Or=(n,e)=>ew[Math.max(0,n.order.indexOf(e))%ew.length],G0=["\u{1F602}","\u{1F92F}","\u{1F525}","\u2764\uFE0F"],$=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),re=n=>Je(de,"games",n),Xe=(n,e)=>m.blocked.has(e)&&e!==m.uid?v.report.hiddenName:n.players[e]?.name,es=n=>m.blocked.has(n.uid)&&n.uid!==m.uid?v.report.hiddenWord:n.word,nd=n=>m.blocked.has(n.uid)&&n.uid!==m.uid?v.report.hiddenName:n.name,rd=(n,e,t)=>Je(de,"games",n,"rounds",String(e),"subs",t),z0=n=>`${location.origin}${location.pathname}?g=${n}`;function aw(n){let e=n?`${location.pathname}?g=${n}`:location.pathname;history.replaceState(null,"",e)}function W0(n){let e=Z.get("games",[]).filter(t=>t.code!==n);e.unshift({code:n,at:Date.now()}),Z.set("games",e.slice(0,6))}function ue(n){m.toast=n,L(),clearTimeout(ue.t),ue.t=setTimeout(()=>{m.toast="",L()},3200)}function he(n){console.error(n),m.busy=!1,m.error=typeof n=="string"?n:v.errors.generic,L()}var K0={logo:[409,640],spark:[358,360],bolt:[195,360],hammer:[313,360],bolts:[383,360],burst:[343,360],swing:[342,360],"zoo-logo":[570,600],"zoo-art":[440,360],"sports-logo":[455,600],"sports-art":[348,360],"monsters-art":[308,360]},Be=(n,e,t="")=>{let[r,i]=K0[n];return`<img class="art ${t}" src="art/${n}.webp" width="${Math.round(r*e/i)}" height="${e}" alt="" aria-hidden="true" decoding="async">`},cw='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M9.5 9.3a2.6 2.6 0 0 1 5 .9c0 1.7-2.5 2.3-2.5 3.8"/><path d="M12 17.2h.01"/></svg>',uw='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',cd='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>',H0='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',ya=`<button class="icon-btn back" data-act="home" aria-label="${v.a11y.back}">${H0}</button>`,Q0=n=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/>${n?'<path d="M17 9l5 6M22 9l-5 6"/>':'<path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12"/>'}</svg>`,Y0='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',Zi='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',J0='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>',X0='<svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>',id=(n,e)=>e===m.uid?"":`<button class="icon-btn soft more" data-act="player-menu" data-uid="${$(e)}" aria-label="${v.report.more($(Xe(n,e)))}">${J0}</button>`,dn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';function lw(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}var tw=(()=>{let n=20261012,e=()=>(n=(n*1664525+1013904223)%4294967296,n/4294967296),t=Ah.map((r,i)=>i);for(let r=t.length-1;r>0;r--){let i=Math.floor(e()*(r+1));[t[r],t[i]]=[t[i],t[r]]}return t})();function Z0(n=lw()){let e=Math.round(Date.UTC(...n.split("-").map((t,r)=>r===1?t-1:+t))/864e5);return Array.from({length:5},(t,r)=>Ah[tw[(e*5+r)%tw.length]])}function hw(n,e){let t=e?{lastShout:e}:{};if(n==="daily")return{pack:"daily",daily:{date:lw(),words:Z0()},...t};let r=Ln[n];return r?.words?{pack:r.id,deal:ny(r.words,5),...t}:t}var wa=n=>n?.pack&&v.packs[n.pack]?v.packs[n.pack].name:n?.daily?v.packs.daily.name:"";async function sd(n={}){let e=vt(m.name);if(!e)return he(v.errors.nameFirst);if(Dr(e))return he(v.errors.rudeName);xr({name:e}),m.busy=!0,m.error="",L();try{let t;for(let r=0;r<8&&(t=bh(),!!(await Ft(re(t))).exists());r++);await ut(re(t),{code:t,hostUid:m.uid,status:"lobby",createdAt:lt(),players:{[m.uid]:{name:e,joinedAt:Date.now()}},order:[m.uid],round:1,revealed:0,submitted:{},history:[],used:[],winWord:null,nudges:{},...hw(n.daily?"daily":n.pack,n.lastShout)}),m.busy=!1,zn(t)}catch(t){he(t)}}async function nw(n,e){let t=vt(e||m.name),r=String(n||"").trim().toUpperCase();if(!t)return he(v.errors.nameFirst);if(Dr(t))return he(v.errors.rudeName);if(!/^[A-Z]{4}$/.test(r))return he(v.errors.codeFormat);xr({name:t}),m.busy=!0,m.error="",L();try{await ln(de,async i=>{let s=await i.get(re(r));if(!s.exists())throw v.errors.noGame;let a=s.data();if(!a.players[m.uid]){if(a.status!=="lobby")throw v.errors.started;if(a.order.length>=5)throw v.errors.full(5);i.update(re(r),{[`players.${m.uid}`]:{name:t,joinedAt:Date.now()},order:[...a.order,m.uid]})}}),m.busy=!1,zn(r)}catch(i){he(i)}}async function eA(){let n=m.game;if(!(n.order.length<2))try{let e=n.daily?.words||n.deal;if(e){let t=n.order.map((r,i)=>({uid:r,name:n.players[r].name,word:e[i].word,def:e[i].def||""}));await un(re(n.code),{status:"playing",round:2,revealed:1,submitted:{},history:[{round:1,dealt:!0,words:t}],used:[...new Set(t.map(r=>Ue(r.word)))]})}else await un(re(n.code),{status:"playing",round:1})}catch(e){he(e)}}async function tA(n){let e=m.game,t=vt(n);if(!t)return he(v.errors.wordFirst);if(Dr(t))return he(v.errors.rudeWord);if(Ih(t,e.used))return he(v.errors.used(t));let r=e.round;m.busy=!0,m.error="",L();try{try{await ut(rd(e.code,r,m.uid),{word:t,norm:Ue(t),at:lt()})}catch(i){if(!(await Ft(rd(e.code,r,m.uid))).exists())throw i}m.mySub={round:r,word:t},await ln(de,async i=>{let a=(await i.get(re(e.code))).data();if(a.status!=="playing"||a.round!==r)return;let c={...a.submitted,[m.uid]:!0},l=a.order.every(d=>c[d]);i.update(re(e.code),{submitted:c,...l?{revealed:r}:{}})}),m.busy=!1,L()}catch(i){he(i)}}async function nA(n){if(!Yh){Yh=!0;try{let e=n.round,t=await fh(oa(de,"games",n.code,"rounds",String(e),"subs")),r={};if(t.forEach(a=>{r[a.id]=a.data()}),!n.order.every(a=>r[a]))return;let i=n.order.map(a=>({uid:a,name:n.players[a].name,word:r[a].word,norm:r[a].norm})),s=ry(v.packs[n.pack]?.shouts,n.lastShout||Z.get(`shout.${n.pack}`));await ln(de,async a=>{let l=(await a.get(re(n.code))).data();if(l.status!=="playing"||l.round!==e||l.revealed!==e)return;let d=[...l.history,{round:e,words:i.map(({uid:f,name:g,word:I})=>({uid:f,name:g,word:I}))}];if(Jg(i))a.update(re(n.code),{history:d,status:"won",winWord:i[0].word,...s?{shout:s}:{}});else{let f=[...new Set([...l.used,...i.map(g=>g.norm)])];a.update(re(n.code),{history:d,used:f,round:e+1,submitted:{}})}})}catch(e){console.error("resolve failed",e)}finally{Yh=!1}}}async function rA(n){let e=m.game;if(Jh[n]&&Date.now()-Jh[n]<6e4)return ue(v.toasts.waitMinute);Jh[n]=Date.now();try{await un(re(e.code),{[`nudges.${n}`]:{at:Date.now(),from:e.players[m.uid].name}}),ue(v.toasts.nudged(e.players[n].name))}catch(t){he(t)}}async function iA(){let n=m.game,e=n.history[n.history.length-1];if(e)try{await ln(de,async t=>{let r=(await t.get(re(n.code))).data(),i=r.history[r.history.length-1];r.status!=="playing"||!i||i.round!==e.round||r.vote?.round===e.round||t.update(re(n.code),{vote:{round:e.round,by:m.uid,yes:{[m.uid]:!0},no:{},result:null}})})}catch(t){he(t)}}async function rw(n){let e=m.game;try{await ln(de,async t=>{let r=(await t.get(re(e.code))).data(),i=r.vote,s=r.history[r.history.length-1];if(r.status!=="playing"||!i||i.result||!s||i.round!==s.round)return;let a={...i.yes},c={...i.no};n?a[m.uid]=!0:c[m.uid]=!0,n?r.order.every(l=>a[l])?t.update(re(e.code),{vote:{...i,yes:a,no:c,result:"yes"},status:"won",wonBy:"vote",winWord:Th(s.words.map(l=>l.word)),history:r.history}):t.update(re(e.code),{vote:{...i,yes:a,no:c}}):t.update(re(e.code),{vote:{...i,yes:a,no:c,result:"no"}})})}catch(t){he(t)}}async function sA(){let n=m.game;m.busy=!0,L();try{let e;for(let t=0;t<8&&(e=bh(),!!(await Ft(re(e))).exists());t++);await ut(re(e),{code:e,hostUid:m.uid,status:"lobby",createdAt:lt(),players:{[m.uid]:{name:n.players[m.uid].name,joinedAt:Date.now()}},order:[m.uid],round:1,revealed:0,submitted:{},history:[],used:[],winWord:null,nudges:{},...hw(n.pack==="daily"?null:n.pack,n.shout||n.lastShout)}),td.add(e),await un(re(n.code),{next:e,nextBy:m.uid}),m.busy=!1,zn(e)}catch(e){he(e)}}async function oA(n){let e=n.next;try{let t=await Ft(re(e)),r=t.exists()?t.data():null;if(!r)return L();if(!r.players[m.uid]){if(r.status!=="lobby"||r.order.length>=5)return L();await ln(de,async i=>{let s=(await i.get(re(e))).data();s.players[m.uid]||s.status!=="lobby"||s.order.length>=5||i.update(re(e),{[`players.${m.uid}`]:{name:n.players[m.uid].name,joinedAt:Date.now()},order:[...s.order,m.uid]})}),ue(v.toasts.rematch(r.players[r.hostUid]?.name||v.someone))}zn(e)}catch{L()}}function aA(n){let e=n.history.map((i,s)=>{let a={};i.words.forEach(d=>{let f=Ue(d.word);a[f]=(a[f]||0)+1});let c=s===n.history.length-1;return`${i.words.map(d=>c?"\u{1F7E3}":a[Ue(d.word)]>1?"\u{1F7E0}":"\u26AA").join("")} ${i.words.map(d=>d.word).join(" \xB7 ")}`}),t=wa(n);return`${(n.wonBy==="vote"?v.share.headVote:v.share.head)(n.winWord,n.history.length,t&&n.pack!=="daily"?v.packs.shareIn(t):"")}

${e.join(`
`)}

${v.share.playWithUs}`}async function cA(){let n=m.game,e=location.origin+location.pathname,t=aA(n);try{navigator.share?await navigator.share({title:v.appName,text:t,url:e}):(await navigator.clipboard.writeText(`${t} ${e}`),ue(v.toasts.copiedShare))}catch{}}async function uA(){let n=m.game;vt(m.name)||(m.name=n.players[m.uid]?.name||"");let e=n.pack==="daily"?null:n.pack;mw(),sd({pack:e,lastShout:n.shout})}function iw(n){let e=n.order.filter(s=>s!==m.uid).map(s=>Xe(n,s)).filter(Boolean),t=v.games,r=e.length?t.with(_a(e)):t.justYou;if(!n.players[m.uid])return{with_:r,status:n.removed?.includes(m.uid)?t.removed:t.notIn,tone:"muted"};if(n.status==="lobby")return{with_:r,status:n.hostUid===m.uid?t.startIt:t.waitingStart,tone:n.hostUid===m.uid?"hot":"muted"};if(n.status==="won")return{with_:r,status:(n.wonBy==="vote"?t.closeEnough:t.forged)(n.winWord),tone:"done"};if(!n.submitted?.[m.uid])return{with_:r,status:t.yourTurn(n.round),tone:"hot"};let i=n.order.filter(s=>!n.submitted?.[s]).map(s=>Xe(n,s));return{with_:r,status:i.length?t.waitingOn(_a(i)):t.revealing,tone:"muted"}}async function ts(){try{let e=await fh(Vg(oa(de,"games"),Lg("order","array-contains",m.uid),Mg(30))),t=Z.get("games",[]),r=new Set(t.map(i=>i.code));e.forEach(i=>{let s=i.data();m.summaries[s.code]=iw(s),r.has(s.code)||t.push({code:s.code,at:s.createdAt?.toMillis?.()||0})}),t.sort((i,s)=>s.at-i.at),Z.set("games",t.slice(0,12))}catch(e){console.warn("games list",e)}let n=Z.get("games",[]);await Promise.all(n.filter(({code:e})=>!m.summaries[e]).map(async({code:e})=>{try{let t=await Ft(re(e));m.summaries[e]=t.exists()?iw(t.data()):{with_:v.games.ended,status:v.games.gone,tone:"muted",gone:!0}}catch{}})),L()}function lA(n){Z.set("games",Z.get("games",[]).filter(e=>e.code!==n)),delete m.summaries[n],L()}var dw=n=>Je(de,"users",n);function xr(n){m.uid&&ut(dw(m.uid),n,{merge:!0}).catch(e=>console.warn("profile",e))}async function hA(){try{let n=(await Ft(dw(m.uid))).data();if(!n){vt(m.name)&&xr({name:vt(m.name),blocked:[...m.blocked]});return}m.account&&n.name&&(m.name=n.name,Z.set("name",n.name)),n.blocked?.length&&(n.blocked.forEach(e=>m.blocked.add(e)),Z.set("blocked",[...m.blocked])),L()}catch(n){console.warn("profile",n)}}function ba(n){console.error(n);let e=v.account.errors[n?.code];m.accountError=e===void 0?v.errors.generic:e,m.busy=!1,L()}function ud(n){m.busy=!1,!(!n||n.status==="redirecting")&&(m.showAccount=!1,m.accountError="",m.accountNote="",m.account=_h(ht.currentUser),m.name&&xr({name:vt(m.name)}),n.status==="switched"?(ue(v.account.moving),jg(de,n.uid,e=>{ue(v.account.moved(e)),ts(),m.code&&zn(m.code)})):ue(n.status==="linked"?v.account.welcome:v.account.welcomeBack),L())}async function dA(){m.busy=!0,m.accountError="",L();try{ud(await Gg(ht,de))}catch(n){ba(n)}}async function fA(n,e){m.busy=!0,m.accountError="",m.accountNote="",L();try{ud(m.accountMode==="create"?await Wg(ht,n,e):await Kg(ht,de,n,e))}catch(t){ba(t)}}async function pA(){let n=document.getElementById("acct-email")?.value.trim();if(!n){m.accountError=v.account.needEmail,L();return}try{await Hg(ht,n),m.accountError="",m.accountNote=v.account.resetSent(n),L()}catch(e){ba(e)}}function fw(){["games","blocked","alertsAsked"].forEach(n=>{try{localStorage.removeItem("samesies."+n)}catch{}}),m.blocked=new Set,m.summaries={}}async function mA(){if(confirm(v.account.confirmSignOut))try{await fa(Gn,de,m.uid),fw(),m.showSettings=!1,m.uid=null,m.account=null,await wh(ht),ue(v.account.signedOut)}catch(n){he(n)}}async function gA(){if(confirm(v.del.confirm))try{await fa(Gn,de,m.uid),await Qg(de,m.uid),fw(),m.name="",Z.set("name",""),m.showSettings=!1,m.uid=null,m.account=null,await wh(ht),ue(v.del.done)}catch(n){he(n)}}async function yA(n,e){let t=m.game,r=m.reportFor,i=t.history.flatMap(s=>s.words.filter(a=>a.uid===r).map(a=>a.word));try{await $g(oa(de,"reports"),{by:m.uid,byName:t.players[m.uid]?.name||"",game:t.code,reported:r,reportedName:t.players[r]?.name||"",words:i,reason:n,note:String(e||"").slice(0,500),at:lt(),handled:!1}),m.reportFor=null,ue(v.report.sent)}catch(s){he(s)}}function pw(n){let e=m.game?.players[n]?.name||v.thisPlayer;m.blocked.has(n)?(m.blocked.delete(n),ue(v.report.unblocked(e))):(m.blocked.add(n),ue(v.report.blocked(e))),Z.set("blocked",[...m.blocked]),xr({blocked:[...m.blocked]}),m.reportFor=null,L()}async function wA(n){let e=m.game,t=e.players[n]?.name||v.thisPlayer;if(confirm(v.confirmRemove(t)))try{await ln(de,async r=>{let i=(await r.get(re(e.code))).data();if(!i.players[n]||i.order.length<=2)return;let s={...i.players};delete s[n];let a=i.order.filter(d=>d!==n),c={...i.submitted};delete c[n];let l=i.status==="playing"&&a.every(d=>c[d]);r.update(re(e.code),{players:s,order:a,submitted:c,removed:[...i.removed||[],n],...i.hostUid===n?{hostUid:a[0]}:{},...l?{revealed:i.round}:{}})}),ue(v.toasts.removed(t))}catch(r){he(r)}}async function _A(n,e,t){let r=m.game,i=`${n}_${e}`,s=r.reactions?.[i]?.[m.uid];try{await un(re(r.code),{[`reactions.${i}.${m.uid}`]:s===t?Bg():t})}catch(a){he(a)}}function vA(n,e,t){let r=n.reactions?.[`${e}_${t}`]||{},i={};return Object.values(r).forEach(s=>{i[s]=(i[s]||0)+1}),`<div class="reacts">${G0.map(s=>`<button class="react${r[m.uid]===s?" mine":""}" data-act="react" data-round="${e}" data-uid="${$(t)}" data-emoji="${s}" aria-label="${v.a11y.react(s,i[s])}">${s}${i[s]?`<span>${i[s]}</span>`:""}</button>`).join("")}</div>`}function bA(n,e,t){let r=n.reactions?.[`${e}_${t}`]||{},i={};Object.values(r).forEach(a=>{i[a]=(i[a]||0)+1});let s=Object.entries(i).map(([a,c])=>`${a}${c>1?c:""}`);return s.length?`<span class="chip-reacts">${s.join(" ")}</span>`:""}function zn(n){Nr&&Nr(),m.code=n,m.game=null,m.gameMissing=!1,m.mySub=null,m.error="",m.showUsed=!1,aw(n),L(),Nr=aa(re(n),async e=>{if(!e.exists()){m.gameMissing=!0,m.game=null,L();return}let t=e.data();m.game=t,t.players[m.uid]&&W0(n),t.shout&&t.pack&&Z.set(`shout.${t.pack}`,t.shout);let r=t.nudges?.[m.uid];if(r&&r.at>Z.get("nudgeSeen",0)&&(Z.set("nudgeSeen",r.at),Date.now()-r.at<10*6e4)){ue(v.toasts.nudgedYou(r.from));try{navigator.vibrate?.(200)}catch{}}if(t.status==="won"&&t.next&&t.players[m.uid]&&!td.has(t.next)){td.add(t.next),oA(t);return}if(t.players[m.uid]&&!Z.get("toured",!1)&&(m.tour=null,Z.set("toured",!0)),t.vote&&!t.vote.result&&t.vote.by!==m.uid){let i=`${n}.${t.vote.round}`;if(Zy!==i){Zy=i,ue(v.toasts.askedClose(t.players[t.vote.by]?.name||v.someone));try{navigator.vibrate?.(200)}catch{}}}if(t.status==="playing"&&t.submitted?.[m.uid]&&m.mySub?.round!==t.round)try{let i=await Ft(rd(n,t.round,m.uid));i.exists()&&(m.mySub={round:t.round,word:i.data().word})}catch{}t.status==="playing"&&t.revealed===t.round&&nA(t),L()},e=>he(e))}function mw(){Nr&&Nr(),Nr=null,m.code=null,m.game=null,m.gameMissing=!1,m.error="",aw(null),L(),ts()}function Ia(n,e){let t=n.used.length;return`
  <header class="bar">
    ${ya}
    <div class="bar-title">
      <span class="eyebrow">${v.header.game($(n.code))}</span>
      <h1 class="h-round">${$(e)}</h1>
    </div>
    <button class="icon-btn quiet" data-act="tour" aria-label="${v.a11y.howTo}">${cw}</button>
    <button class="icon-btn quiet" data-act="mute" aria-label="${jn()?v.a11y.soundOn:v.a11y.soundOff}" aria-pressed="${jn()}">${Q0(jn())}</button>
    ${n.status!=="lobby"?`<button class="icon-btn" data-act="used" aria-label="${v.a11y.usedWords(t)}">${uw}</button>`:""}
  </header>`}function sw(n=v.loading){return`<main class="screen center"><div class="pulse">${Be("logo",150)}</div><p class="muted">${$(n)}</p></main>`}function IA(){let n=Z.get("games",[]);return`
  <main class="screen">
    <div class="home-top"><button class="help-pill" data-act="tour">${cw}${v.home.howTo}</button><button class="icon-btn quiet settings-btn" data-act="settings" aria-label="${v.a11y.settings}">${Y0}</button></div>
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
  </main>`}function TA(){let n=v.packs,e=t=>{let r=Ln[t];return`
      <button class="pack-tile pt-${t}" data-act="pick-pack" data-pack="${t}" ${m.busy?"disabled":""}>
        <span class="pack-art">${Be(r.art,84)}</span>
        <span class="pack-text"><span class="pack-name">${n[t].name}</span><span class="pack-blurb">${n[t].blurb}</span></span>
        <span class="pack-tag">${n.free}</span>
      </button>`};return`
  <div class="sheet-backdrop" data-act="closepacks">
    <div class="sheet packs-sheet" role="dialog" aria-modal="true" aria-labelledby="packs-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="packs-title" class="h-sheet">${n.pickTitle}</h2>
        <button class="icon-btn soft" data-act="closepacks" aria-label="${v.a11y.close}">${dn}</button>
      </div>
      <p class="muted">${n.pickSub}</p>
      <div class="pack-list">
        ${ty.map(e).join("")}
        <button class="pack-tile pt-${ca.id} locked" data-act="pack-teaser">
          <span class="pack-art">${Be(ca.art,84)}</span>
          <span class="pack-text"><span class="pack-name">${n[ca.id].name}</span><span class="pack-blurb">${n.soon}</span></span>
          <span class="pack-tag plus">${n.plus}</span>
        </button>
      </div>
    </div>
  </div>`}var EA=(n,e=150)=>bt(n)?`<div class="pack-logo">${Be(Ln[n.pack].logo,e)}</div>`:"";function AA(n){let e=n.order.length>=5,t=n.status!=="lobby";return`
  <main class="screen">
    <header class="bar">${ya}</header>
    <div class="hero tight">
      ${Be("logo",170,"hero-logo")}
      <h1 class="wordmark small">Brain<b>smith</b></h1>
      <p class="tagline">${v.join.invited($(Xe(n,n.hostUid)||v.aFriend),$(n.code))}</p>
      ${wa(n)?`<span class="badge">${$(wa(n))}</span>`:""}
    </div>
    <div class="grow"></div>
    ${t?`<p class="notice">${v.join.started}</p>
      <button class="btn outline" data-act="home">${v.goToStart}</button>`:e?`<p class="notice">${v.join.full}</p><button class="btn outline" data-act="home">${v.goToStart}</button>`:`<form class="stack" data-form="joinlink">
        <label for="name" class="label">${v.home.yourName}</label>
        <input id="name" name="name" class="input" autocomplete="nickname" maxlength="40" value="${$(m.name)}" placeholder="${v.home.namePlaceholder}">
        <button class="btn primary" ${m.busy?"disabled":""}>${v.join.button}</button>
      </form>`}
    ${m.error?`<p class="error" role="alert">${$(m.error)}</p>`:""}
  </main>`}function SA(n){let e=n.hostUid===m.uid,t=n.order.length>=2;return`
  <main class="screen">
    ${Ia(n,v.lobby.title)}
    <section class="card center-text">
      ${bt(n)?EA(n,130):n.daily?`<span class="badge">${v.lobby.dailyBadge}</span>`:""}
      <span class="muted">${v.lobby.inviteWith}</span>
      <div class="big-code">${$(n.code)}</div>
      <button class="btn soft" data-act="share">${v.lobby.shareLink}</button>
    </section>
    <section class="stack">
      <span class="eyebrow">${v.lobby.players(n.order.length,5)}</span>
      ${n.order.map(r=>`
        <div class="player">
          <div class="dot done" style="background:${Or(n,r)}">${cd}</div>
          <span class="pname">${$(Xe(n,r))}${r===m.uid?v.you:""}</span>
          ${r===n.hostUid?`<span class="muted small">${v.host}</span>`:""}
          ${id(n,r)}
        </div>`).join("")}
    </section>
    <div class="grow"></div>
    ${e?`<button class="btn primary" data-act="start" ${t?"":"disabled"}>${t?v.lobby.startNow:v.lobby.needMore}</button>`:`<p class="fine">${v.lobby.waitingFor($(Xe(n,n.hostUid)||v.theHost))}</p>`}
  </main>`}function kA(n){let e=n.history[n.history.length-1],t=!!n.submitted?.[m.uid],r=n.order.filter(i=>!n.submitted?.[i]);return`
  <main class="screen">
    ${Ia(n,v.round.title(n.round))}
    ${e&&n.vote?.round===e.round&&!n.vote.result?gw(n):""}
    <section class="card center-text">
      ${e?`
        <span class="muted">${v.round.connect}</span>
        <div class="word-chips">${e.words.map(i=>`<span class="word-chip" style="--pc:${Or(n,i.uid)}">${$(es(i))}${bA(n,e.round,i.uid)}</span>`).join("")}</div>
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
        <span class="muted small">${r.length?v.round.waitingOn(r.map(i=>$(Xe(n,i))).join(", ")):v.round.revealing}</span>
      </section>
      ${r.length?xA():""}`:`
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
          ${s?`<div class="dot done" style="background:${Or(n,i)}">${cd}</div>`:`<div class="dot" style="border-color:${Or(n,i)}"></div>`}
          <span class="pname">${$(Xe(n,i))}${a?v.you:""}</span>
          ${s?`<span class="muted small">${v.round.playerLocked}</span>${id(n,i)}`:a?`<span class="muted small">${v.round.thinking}</span>`:`<button class="btn nudge" data-act="nudge" data-uid="${$(i)}">${v.round.nudge}</button>${c?`<button class="icon-btn soft remove" data-act="remove" data-uid="${$(i)}" aria-label="${v.a11y.removePlayer($(Xe(n,i)))}">${dn}</button>`:""}${id(n,i)}`}
        </div>`}).join("")}
    </section>
  </main>`}function RA(n){let e={};return n.forEach(t=>{var r;(e[r=Ue(t.word)]||(e[r]=[])).push(t)}),Object.values(e).filter(t=>t.length>1).sort((t,r)=>r.length-t.length)}var _a=v.listNames;function PA(n,e){let t=RA(e.words),r=new Set(t.flat().map(a=>a.uid)),i=t.length?t.map(a=>v.reveal.said(_a(a.map(c=>$(nd(c)))),a.length===2,$(es(a[0])))).join("<br>"):"";if(e.dealt)return CA(n,e);let s=t.length?v.reveal.soClose:e.words.length===2?v.reveal.notYetTwo:v.reveal.notYetAll;return`
  <main class="screen reveal-screen">
    ${Ia(n,v.reveal.title(e.round))}
    <section class="stack reveal">
      ${e.words.map(a=>`
        <div class="reveal-card${r.has(a.uid)?" matched":""}" style="--pc:${Or(n,a.uid)}">
          <span class="rname">${$(nd(a))}</span>
          <span class="rword">${$(es(a))}</span>
          ${vA(n,e.round,a.uid)}
        </div>`).join("")}
    </section>
    <div class="after-reveal stack">
    ${i?`<div class="so-close"><span class="so-close-names">${i}</span><span class="muted">${s}</span></div>`:`<div class="row msg">${Be("spark",44)}<span class="muted">${$(s)}</span></div>`}
    ${n.vote?.round===e.round?gw(n):`<button class="btn ${Eh(e.words.map(a=>a.word))?"close-hot":"soft"}" data-act="vote">${Eh(e.words.map(a=>a.word))?v.reveal.closeHot:v.reveal.close}</button>`}
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${e.round}">${v.reveal.next(e.round+1)}</button>
  </main>`}function CA(n,e){return`
  <main class="screen reveal-screen">
    ${Ia(n,v.packs[n.pack]?.dealtTitle||v.dealt.title)}
    <section class="stack reveal">
      ${e.words.map(t=>`
        <div class="reveal-card" style="--pc:${Or(n,t.uid)}">
          <span class="rname">${v.dealt.got($(nd(t)))}</span>
          <span class="rword">${$(t.word)}</span>
          ${t.def?`<span class="rdef">${$(t.def)}</span>`:""}
        </div>`).join("")}
    </section>
    <div class="after-reveal stack">
      <div class="row msg">${Be("spark",44)}<span class="muted">${v.dealt.msg}</span></div>
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${e.round}">${v.dealt.next}</button>
  </main>`}function gw(n){let e=n.vote,t=$(Xe(n,e.by)||v.someone);if(e.result==="no"){let s=$(Xe(n,Object.keys(e.no)[0])||v.someone);return`<section class="vote done"><span class="muted">${v.vote.playOn(s)}</span></section>`}let r=e.yes[m.uid]||e.no[m.uid],i=n.order.filter(s=>!e.yes[s]&&!e.no[s]).map(s=>$(Xe(n,s)));return`
  <section class="vote" aria-live="polite">
    <span class="vote-title">${v.vote.title}</span>
    <span class="muted">${v.vote.explain(e.by===m.uid?v.vote.youAsked:v.vote.asked(t),e.round)}</span>
    ${r?`<span class="muted small">${i.length?v.vote.waitingOn(i.join(", ")):v.vote.counting}</span>`:`<div class="row"><button class="btn primary grow" data-act="yes">${v.vote.yes}</button><button class="btn outline" data-act="no">${v.vote.no}</button></div>`}
  </section>`}function DA(n){let e=n.order.map(r=>Xe(n,r)),t=_a(e);return`
  <main class="screen win">
    <div class="win-top">
      <div class="pop win-art">${bt(n)?Be(Ln[n.pack].art,150):Be("swing",150)}</div>
      <h1 class="win-title">${n.wonBy==="vote"?v.won.closeEnough:$(n.shout||v.won.forged)}</h1>
      ${bt(n)?`<span class="win-pack">${v.packs.forgedIn(wa(n))}</span>`:""}
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
  </main>`}var Ut=(n,e,t="")=>`<span class="mini ${t}"><b>${n}</b><i>${e}</i></span>`,ne=v.tour,[Xh,Zh,ed]=ne.names,Bt=[{title:ne.goalTitle,body:ne.goalBody,art:()=>`<div class="tour-art">${Be("logo",190)}</div>`},{title:ne.secretTitle,body:ne.secretBody,art:()=>`<div class="scene">${Ut("?",Xh,"back")}${Ut("?",Zh,"back d1")}${Ut("?",ed,"back d2")}</div>`},{title:ne.flipTitle,body:ne.flipBody,art:()=>`<div class="scene flip">${Ut(ne.flipWords[0],Xh)}${Ut(ne.flipWords[1],Zh,"d1")}${Ut(ne.flipWords[2],ed,"d2")}</div>`},{title:ne.middleTitle,body:ne.middleBody,art:()=>`<div class="scene bridge"><span class="bridge-row"><span class="pill-word">${ne.flipWords[0]}</span><span class="plus">+</span><span class="pill-word">${ne.flipWords[1]}</span></span><span class="arrow">\u2193</span><span class="pill-word hot">${ne.middleGuess}</span></div>`},{title:ne.forgeTitle,body:ne.forgeBody,art:()=>`<div class="scene forged">${Be("swing",80,"forge-hammer")}${Ut(ne.forgeWord,Xh,"win")}${Ut(ne.forgeWord,Zh,"win d1")}${Ut(ne.forgeWord,ed,"win d2")}</div>`},{title:ne.matchTitle,body:"",art:()=>`<ul class="rules">${ne.matchRules.map(([n,e,t])=>`
      <li class="${n}"><span class="mark">${n==="ok"?cd:"\u2715"}</span><span><b>${e}</b> ${t}</span></li>`).join("")}
    </ul>`},{title:ne.toolsTitle,body:"",art:()=>`<ul class="rules tools">${ne.tools.map(([n,e,t])=>`
      <li><span class="mark">${n==="list"?uw:n}</span><span><b>${e}</b> ${t}</span></li>`).join("")}
    </ul>`}];function NA(){let n=m.tour,e=Bt.length-1;return`
  <div class="sheet-backdrop tour" data-act="tour-skip">
    <div class="sheet howto" role="dialog" aria-modal="true" aria-labelledby="tour-title" data-stop>
      <div class="howto-head">
        <span id="tour-title" class="h-sheet">${ne.title}</span>
        <button class="icon-btn quiet" data-act="tour-skip" aria-label="${v.a11y.closeHowTo}">\u2715</button>
      </div>
      <div class="howto-track" tabindex="0" aria-roledescription="carousel">
        ${Bt.map((t,r)=>`
        <section class="howto-card${r===n?" on":""}" aria-roledescription="slide" aria-label="${v.a11y.slide(r+1,Bt.length,t.title)}">
          ${t.art()}
          <span class="eyebrow">${ne.count(r+1,Bt.length)}</span>
          <h2 class="howto-title">${t.title}</h2>
          ${t.body?`<p class="muted tour-body">${t.body}</p>`:""}
        </section>`).join("")}
      </div>
      <div class="dots" aria-hidden="true">${Bt.map((t,r)=>`<span class="${r===n?"on":""}"></span>`).join("")}</div>
      <div class="row howto-nav">
        <button class="btn ghost" data-act="tour-skip" ${n===e?"hidden":""}>${ne.skip}</button>
        <button class="btn primary grow" data-act="tour-next">${n===e?ne.done:ne.next}</button>
      </div>
    </div>
  </div>`}function od(){let n=_e.querySelector(".howto-track");if(!n)return;n.scrollLeft=m.tour*n.clientWidth;let e=()=>{let t=Math.round(n.scrollLeft/n.clientWidth);if(t===m.tour||t<0||t>=Bt.length)return;m.tour=t;let r=t===Bt.length-1;_e.querySelectorAll(".tour .dots span").forEach((s,a)=>s.classList.toggle("on",a===t)),_e.querySelectorAll(".howto-card").forEach((s,a)=>s.classList.toggle("on",a===t));let i=_e.querySelector("[data-act=tour-next]");i.textContent=r?ne.done:ne.next,_e.querySelector(".howto-nav .btn.ghost").hidden=r};n.addEventListener("scroll",()=>{clearTimeout(od.t),od.t=setTimeout(e,60)},{passive:!0})}function ad(n){let e=_e.querySelector(".howto-track");if(!e){m.tour=n,L();return}e.scrollTo({left:n*e.clientWidth,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}function OA(){let n=Z.get("games",[]);return`
  <div class="sheet-backdrop" data-act="closegames">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="games-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="games-title" class="h-sheet">${v.games.title}</h2>
        <button class="icon-btn soft" data-act="closegames" aria-label="${v.a11y.close}">${dn}</button>
      </div>
      ${n.length?n.map(({code:e})=>{let t=m.summaries[e];return`
        <div class="game-row">
          <button class="game-open" data-act="${t?.gone?"forget":"open"}" data-code="${$(e)}">
            <span class="game-with">${$(t?t.with_:v.games.loading)}</span>
            <span class="game-status ${t?.tone||""}">${$(t?t.status:e)}</span>
          </button>
          <button class="icon-btn soft" data-act="forget" data-code="${$(e)}" aria-label="${v.a11y.forgetGame($(e))}">${dn}</button>
        </div>`}).join(""):`<p class="muted">${v.games.none}</p>`}
    </div>
  </div>`}function xA(){let n=v.alerts;return Ji()!=="yes"||da()!=="default"||Z.get("alertsAsked",!1)?"":`
      <section class="alert-ask">
        <span class="alert-ask-title">${n.askTitle}</span>
        <span class="muted small">${n.askBody}</span>
        <div class="row"><button class="btn primary grow" data-act="alerts-on">${n.yes}</button><button class="btn ghost" data-act="alerts-later">${n.no}</button></div>
      </section>`}function VA(){let n=v.alerts,e=Ji();if(e==="no")return"";if(e==="ios-install")return`<div class="set-row static"><span class="set-text"><span class="set-label">${n.label}</span><span class="set-sub">${n.iosInstall}</span></span></div>`;if(da()==="denied")return`<div class="set-row static"><span class="set-text"><span class="set-label">${n.label}</span><span class="set-sub">${n.blocked}</span></span></div>`;let t=zh();return`
        <button class="set-row" data-act="${t?"alerts-off":"alerts-on"}" role="switch" aria-checked="${t}">
          <span class="set-text"><span class="set-label">${n.label}</span><span class="set-sub">${n.sub}</span></span>
          <span class="switch ${t?"on":""}" aria-hidden="true"><i></i></span>
        </button>`}async function LA(){Z.set("alertsAsked",!0);try{let n=await Uy(Gn,de,m.uid);ue(n?v.alerts.onToast:v.alerts.notNow)}catch(n){console.error(n),ue(v.alerts.failed)}L()}function MA(){let n=Z.get("games",[]),e=v.settings,t=(r,i,s="",a="")=>`
        <button ${a.includes("class=")?"":'class="set-row"'} data-act="${r}" ${a}>
          <span class="set-text"><span class="set-label">${i}</span>${s?`<span class="set-sub">${s}</span>`:""}</span>${Zi}
        </button>`;return`
  <div class="sheet-backdrop" data-act="closesettings">
    <div class="sheet settings" role="dialog" aria-modal="true" aria-labelledby="settings-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="settings-title" class="h-sheet">${e.title}</h2>
        <button class="icon-btn soft" data-act="closesettings" aria-label="${v.a11y.close}">${dn}</button>
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
        ${VA()}
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
  </div>`}var FA=()=>navigator.standalone===!0;function $A(){let n=v.account,e=m.accountMode==="create";return`
  <div class="sheet-backdrop" data-act="closeaccount">
    <div class="sheet account" role="dialog" aria-modal="true" aria-labelledby="account-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="account-title" class="h-sheet">${n.title}</h2>
        <button class="icon-btn soft" data-act="closeaccount" aria-label="${v.a11y.close}">${dn}</button>
      </div>
      <p class="muted">${n.body}</p>
      ${FA()?`<p class="notice small-note">${n.homeScreenNote}</p>`:`<button class="btn google" data-act="google" ${m.busy?"disabled":""}>${X0}${n.google}</button>
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
  </div>`}function UA(n){let e=v.report,t=m.reportFor,r=$(n.players[t]?.name||v.thisPlayer),i=m.blocked.has(t),s=m.reportStep==="report"?`<form class="stack tight" data-form="report">
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
        <button class="icon-btn soft" data-act="closereport" aria-label="${v.a11y.close}">${dn}</button>
      </div>
      ${s}
    </div>
  </div>`}function BA(n){return`
  <div class="sheet-backdrop" data-act="closeused">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="used-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="used-title" class="h-sheet">${v.used.title}</h2>
        <button class="icon-btn soft" data-act="closeused" aria-label="${v.a11y.close}">${dn}</button>
      </div>
      <p class="muted">${v.used.explain}</p>
      ${n.history.length?n.history.map(e=>`
        <div class="stack tight">
          <span class="eyebrow">${v.used.round(e.round)}</span>
          <div class="chips">${e.words.filter((t,r,i)=>i.findIndex(s=>Ue(s.word)===Ue(t.word))===r).map(t=>`<span class="chip static">${$(es(t))}</span>`).join("")}</div>
        </div>`).join(""):`<p class="muted">${v.used.none}</p>`}
    </div>
  </div>`}function qA(){if(m.authError)return`<main class="screen center"><p class="error">${$(m.authError)}</p></main>`;if(!m.uid)return sw();if(!m.code)return IA();if(m.gameMissing)return`<main class="screen center"><header class="bar top-left">${ya}</header>${Be("logo",150)}<p class="notice">${v.missing($(m.code))}</p><button class="btn outline" data-act="home">${v.goToStart}</button></main>`;let n=m.game;if(!n)return sw(v.findingGame);if(!n.players[m.uid]&&n.removed?.includes(m.uid))return`<main class="screen center"><header class="bar top-left">${ya}</header>${Be("hammer",120)}<p class="notice">${v.removedFrom($(n.code))}</p><button class="btn outline" data-act="home">${v.goToStart}</button></main>`;if(!n.players[m.uid])return AA(n);if(n.status==="lobby")return SA(n);if(n.status==="won")return DA(n);let e=n.history[n.history.length-1],t=Z.get(`seen.${n.code}`,0);return e&&e.round>t?PA(n,e):kA(n)}function L(){let n=document.activeElement,e={};_e.querySelectorAll("input").forEach(g=>{e[g.id]=g.value});let t=n&&n.tagName==="INPUT"?n.id:null,r=t?n.selectionStart:null,i=m.game,s=!!_e.querySelector(".sheet-backdrop:not(.tour)"),a=!!_e.querySelector(".tour"),c=_e.querySelector(".toast")?.textContent,l=m.code?bt(i):null;document.body.dataset.pack!==(l||"")&&(document.body.dataset.pack=l||"",Xi(l)),_e.innerHTML=qA()+(m.showUsed&&i?BA(i):"")+(m.showGames&&!m.code?OA():"")+(m.showSettings&&!m.code&&!m.showAccount?MA():"")+(m.showPacks&&!m.code?TA():"")+(m.showAccount&&!m.code?$A():"")+(m.reportFor&&i?.players[m.reportFor]?UA(i):"")+(m.tour!==null?NA():"")+(m.toast?`<div class="toast" role="status">${$(m.toast)}</div>`:"");let d=_e.querySelector("main"),f=d?d.className+"|"+(d.querySelector("h1")?.textContent||""):"";if(f===L.lastKey?d.classList.add("no-anim"):d&&jA(d,i),L.lastKey=f,s&&_e.querySelector(".sheet-backdrop")?.classList.add("no-anim"),a&&_e.querySelector(".tour")?.classList.add("no-anim"),od(),c&&c===m.toast&&_e.querySelector(".toast")?.classList.add("no-anim"),_e.querySelectorAll("input").forEach(g=>{e[g.id]!==void 0&&g.id!=="name"&&(g.value=e[g.id]),g.id==="name"&&e.name!==void 0&&(g.value=e.name)}),t){let g=document.getElementById(t);if(g){g.focus();try{g.setSelectionRange(r,r)}catch{}}}}function jA(n,e){if(n.classList.contains("reveal-screen"))zy(1.4,bt(e)),n.querySelector(".matched")&&setTimeout(()=>Wy(bt(e)),1700);else if(n.classList.contains("win")){Qy(Ln[bt(e)]?.confetti),Ky(e?.wonBy==="vote"?null:bt(e));try{navigator.vibrate?.([80,60,160])}catch{}}}_e.addEventListener("input",n=>{if(n.target.id==="name"&&(m.name=n.target.value,Z.set("name",m.name)),n.target.id==="code"&&(n.target.value=n.target.value.toUpperCase().replace(/[^A-Z]/g,"")),m.error){m.error="";let e=_e.querySelector(".error");e&&e.remove()}});_e.addEventListener("submit",n=>{n.preventDefault();let e=n.target.dataset.form,t=new FormData(n.target);if(e==="create"){let r=vt(m.name);if(!r)return he(v.errors.nameFirst);if(Dr(r))return he(v.errors.rudeName);m.showPacks=!0,L()}if(e==="join"&&nw(t.get("code")),e==="joinlink"&&nw(m.code),e==="word"&&tA(t.get("word")),e==="email"&&fA(String(t.get("email")||""),String(t.get("password")||"")),e==="report"){let r=m.reportFor;yA(String(t.get("reason")||""),t.get("note")).then(()=>{t.get("block")&&!m.blocked.has(r)?(m.reportFor=r,pw(r)):L()})}if(e==="setname"){let r=vt(t.get("setname")||"");if(!r){ue(v.toasts.nameFirst);return}if(Dr(r)){ue(v.errors.rudeName);return}m.name=r,Z.set("name",r),xr({name:r});let i=document.getElementById("name");i&&(i.value=r),ue(v.toasts.nameSaved),L()}});_e.addEventListener("click",async n=>{let e=n.target.closest("[data-act]");if(!e||e.dataset.act==="closeused"&&n.target.closest("[data-stop]")&&!n.target.closest("button"))return;let t=e.dataset.act;if(t==="home"&&(mw(),m.moving&&yw()),t==="open"&&(m.showGames=!1,zn(e.dataset.code)),t==="start"&&eA(),t==="nudge"&&rA(e.dataset.uid),t==="again"&&sA(),t==="vote"&&iA(),t==="sharegame"&&cA(),t==="games"&&(m.showGames=!0,L(),ts()),t==="settings"&&(m.showSettings=!0,L()),t==="closesettings"&&(e.tagName==="BUTTON"||!n.target.closest("[data-stop]"))&&(m.showSettings=!1,L()),t==="settings-games"&&(m.showSettings=!1,m.showGames=!0,L(),ts()),t==="settings-tour"&&(m.showSettings=!1,m.tour=0,L()),t==="closegames"&&!(n.target.closest("[data-stop]")&&!n.target.closest("button"))&&(m.showGames=!1,L()),t==="forget"&&lA(e.dataset.code),t==="account"&&(m.showAccount=!0,m.accountError="",m.accountNote="",L()),t==="closeaccount"&&(e.tagName==="BUTTON"||!n.target.closest("[data-stop]"))&&(m.showAccount=!1,L()),t==="account-mode"&&(m.accountMode=m.accountMode==="create"?"signin":"create",m.accountError="",m.accountNote="",L()),t==="google"&&dA(),t==="forgot"&&pA(),t==="signout"&&mA(),t==="delete-account"&&gA(),t==="player-menu"&&(m.reportFor=e.dataset.uid,m.reportStep="menu",L()),t==="closereport"&&(e.tagName==="BUTTON"||!n.target.closest("[data-stop]"))&&(m.reportFor=null,L()),t==="report-start"&&(m.reportStep="report",L()),t==="block"&&pw(e.dataset.uid),t==="remove"&&wA(e.dataset.uid),t==="react"&&_A(Number(e.dataset.round),e.dataset.uid,e.dataset.emoji),t==="daily"&&sd({daily:!0}),t==="pick-pack"&&(m.showPacks=!1,sd({pack:e.dataset.pack})),t==="pack-teaser"&&ue(v.packs.soonToast),t==="closepacks"&&(e.tagName==="BUTTON"||!n.target.closest("[data-stop]"))&&(m.showPacks=!1,L()),t==="newcrew"&&uA(),t==="mute"&&(jy(!jn()),L()),t==="alerts-on"&&LA(),t==="alerts-later"&&(Z.set("alertsAsked",!0),L()),t==="alerts-off"&&fa(Gn,de,m.uid).then(()=>{ue(v.alerts.offToast),L()}),t==="starter"){let r=m.game?.used||[],i=Xg.filter(a=>!Ih(a,r)),s=document.getElementById("word");s&&i.length&&(s.value=i[Math.floor(Math.random()*i.length)],s.focus())}if(t==="tour"&&(m.tour=0,L()),t==="tour-next"&&(m.tour<Bt.length-1?ad(m.tour+1):(m.tour=null,Z.set("toured",!0),L())),t==="tour-skip"&&!(n.target.closest("[data-stop]")&&!n.target.closest("button"))&&(m.tour=null,Z.set("toured",!0),L()),t==="yes"&&rw(!0),t==="no"&&rw(!1),t==="used"&&(m.showUsed=!0,L()),t==="closeused"&&(m.showUsed=!1,L()),t==="seen"&&(Z.set(`seen.${m.game.code}`,Number(e.dataset.round)),L()),t==="share"){let r=z0(m.game.code),i=v.share.invite(m.game.code);try{navigator.share?await navigator.share({title:v.appName,text:i,url:r}):(await navigator.clipboard.writeText(r),ue(v.toasts.inviteCopied))}catch{}}});document.addEventListener("pointerdown",Gy,{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&m.showUsed&&(m.showUsed=!1,L()),n.key==="Escape"&&m.showGames&&(m.showGames=!1,L()),n.key==="Escape"&&m.showSettings&&(m.showSettings=!1,L()),n.key==="Escape"&&m.showPacks&&(m.showPacks=!1,L()),n.key==="Escape"&&m.showAccount&&(m.showAccount=!1,L()),n.key==="Escape"&&m.reportFor&&(m.reportFor=null,L()),m.tour!==null&&n.key==="ArrowRight"&&m.tour<Bt.length-1&&ad(m.tour+1),m.tour!==null&&n.key==="ArrowLeft"&&m.tour>0&&ad(m.tour-1),n.key==="Escape"&&m.tour!==null&&(m.tour=null,Z.set("toured",!0),L())});async function yw(){if(!ff||!m.uid||!await mf())return;m.moving=!0;let n=[];for(let{code:t}of Z.get("games",[]))try{let r=(await Ft(re(t))).data();r?.players?.[m.uid]&&r.status!=="won"&&n.push(t)}catch{}if(m.code?n.includes(m.code):n.length>0){L();return}location.replace(gf(m.code))}L();var ow=!1;Wc(ht,n=>{if(!n){m.uid=null,m.account=null,L(),qc(ht).catch(t=>{console.error(t),ow||(m.authError=v.errors.connect,L())}),ow=!0;return}let e=m.uid!==n.uid;if(m.uid=n.uid,m.account=_h(n),!e){L();return}m.code?zn(m.code):(L(),ts()),hA(),yw(),By(Gn,de,n.uid)});zg(ht,de).then(ud).catch(ba);"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
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
