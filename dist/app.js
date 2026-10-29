var tf="https://playbrainsmith.com/",nf=/(github\.io|\.web\.app|\.firebaseapp\.com)$/.test(location.hostname),rf=["name","toured","muted"],Ua=n=>"samesies."+n;(function(){let e=location.hash.match(/^#carry=(.+)$/);if(e){try{let t=JSON.parse(decodeURIComponent(e[1]));for(let r of rf)t[r]!=null&&(r==="name"&&localStorage.getItem(Ua("name"))||localStorage.setItem(Ua(r),r==="muted"?String(t[r]):JSON.stringify(t[r])))}catch{}history.replaceState(null,"",location.pathname+location.search)}})();async function sf(){try{let n=await fetch(tf+"live.json",{cache:"no-store"});return n.ok&&(await n.json()).live===!0}catch{return!1}}function of(n){let e={};try{for(let r of rf){let i=localStorage.getItem(Ua(r));i!==null&&(e[r]=r==="muted"?i:JSON.parse(i))}}catch{}let t=new URL(tf);return n&&t.searchParams.set("g",n),t.hash="carry="+encodeURIComponent(JSON.stringify(e)),t.href}var cf=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},N_=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},uf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,f=s>>2,y=(s&3)<<4|c>>4,A=(c&15)<<2|d>>6,P=d&63;l||(P=64,a||(A=64)),r.push(t[f],t[y],t[A],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):N_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let y=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||y==null)throw new qa;let A=s<<2|c>>4;if(r.push(A),d!==64){let P=c<<4&240|d>>2;if(r.push(P),y!==64){let O=d<<6&192|y;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},qa=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},O_=function(n){let e=cf(n);return uf.encodeByteArray(e,!0)},Qr=function(n){return O_(n).replace(/\./g,"")},Ga=function(n){try{return uf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function x_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var V_=()=>x_().__FIREBASE_DEFAULTS__,L_=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},M_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Ga(n[1]);return e&&JSON.parse(e)},ms=()=>{try{return V_()||L_()||M_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},za=n=>{var e,t;return(t=(e=ms())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},lf=n=>{let e=za(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Wa=()=>{var n;return(n=ms())===null||n===void 0?void 0:n.config},Ka=n=>{var e;return(e=ms())===null||e===void 0?void 0:e[`_${n}`]};var ps=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function hf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Qr(JSON.stringify(t)),Qr(JSON.stringify(a)),""].join(".")}function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function df(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function F_(){var n;let e=(n=ms())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ff(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pf(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gf(){let n=ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yf(){return!F_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yr(){try{return typeof indexedDB=="object"}catch{return!1}}function gs(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function _f(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}var $_="FirebaseError",$e=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$_,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,We.prototype.create)}},We=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?U_(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new $e(i,c,r)}};function U_(n,e){return n.replace(B_,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var B_=/\{\$([^}]+)}/g;function wf(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Et(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(af(s)&&af(a)){if(!Et(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function af(n){return n!==null&&typeof n=="object"}function zn(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Kn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function vf(n,e){let t=new ja(n,e);return t.subscribe.bind(t)}var ja=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");q_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ba),i.error===void 0&&(i.error=Ba),i.complete===void 0&&(i.complete=Ba);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function q_(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ba(){}var yA=4*60*60*1e3;function ee(n){return n&&n._delegate?n._delegate:n}var Ie=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var pn="[DEFAULT]";var Ha=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new ps;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(G_(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:j_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function j_(n){return n===pn?void 0:n}function G_(n){return n.instantiationMode==="EAGER"}var ys=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Ha(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var z_=[],z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));var W_={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},K_=z.INFO,H_={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Q_=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=H_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},zt=class{constructor(e){this.name=e,this._logLevel=K_,this._logHandler=Q_,this._userLogHandler=null,z_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?W_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}};var Y_=(n,e)=>e.some(t=>n instanceof t),If,bf;function J_(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function X_(){return bf||(bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Ef=new WeakMap,Ya=new WeakMap,Tf=new WeakMap,Qa=new WeakMap,Xa=new WeakMap;function Z_(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(rt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ef.set(t,n)}).catch(()=>{}),Xa.set(e,n),e}function ew(n){if(Ya.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Ya.set(n,e)}var Ja={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ya.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Tf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Af(n){Ja=n(Ja)}function tw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(_s(this),e,...t);return Tf.set(r,e.sort?e.sort():[e]),rt(r)}:X_().includes(n)?function(...e){return n.apply(_s(this),e),rt(Ef.get(this))}:function(...e){return rt(n.apply(_s(this),e))}}function nw(n){return typeof n=="function"?tw(n):(n instanceof IDBTransaction&&ew(n),Y_(n,J_())?new Proxy(n,Ja):n)}function rt(n){if(n instanceof IDBRequest)return Z_(n);if(Qa.has(n))return Qa.get(n);let e=nw(n);return e!==n&&(Qa.set(n,e),Xa.set(e,n)),e}var _s=n=>Xa.get(n);function mn(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),c=rt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(rt(a.result),l.oldVersion,l.newVersion,rt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}function ws(n,{blocked:e}={}){let t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),rt(t).then(()=>{})}var rw=["get","getKey","getAll","getAllKeys","count"],iw=["put","add","delete","clear"],Za=new Map;function Sf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Za.get(e))return Za.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=iw.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rw.includes(t)))return;let s=async function(a,...c){let l=this.transaction(a,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&l.done]))[0]};return Za.set(e,s),s}Af(n=>({...n,get:(e,t,r)=>Sf(e,t)||n.get(e,t,r),has:(e,t)=>!!Sf(e,t)||n.has(e,t)}));var tc=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sw(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function sw(n){let e=n.getComponent();return e?.type==="VERSION"}var nc="@firebase/app",kf="0.10.16";var Tt=new zt("@firebase/app"),ow="@firebase/app-compat",aw="@firebase/analytics-compat",cw="@firebase/analytics",uw="@firebase/app-check-compat",lw="@firebase/app-check",hw="@firebase/auth",dw="@firebase/auth-compat",fw="@firebase/database",pw="@firebase/data-connect",mw="@firebase/database-compat",gw="@firebase/functions",yw="@firebase/functions-compat",_w="@firebase/installations",ww="@firebase/installations-compat",vw="@firebase/messaging",Iw="@firebase/messaging-compat",bw="@firebase/performance",Ew="@firebase/performance-compat",Tw="@firebase/remote-config",Aw="@firebase/remote-config-compat",Sw="@firebase/storage",kw="@firebase/storage-compat",Rw="@firebase/firestore",Pw="@firebase/vertexai",Cw="@firebase/firestore-compat",Dw="firebase",Nw="11.0.2";var rc="[DEFAULT]",Ow={[nc]:"fire-core",[ow]:"fire-core-compat",[cw]:"fire-analytics",[aw]:"fire-analytics-compat",[lw]:"fire-app-check",[uw]:"fire-app-check-compat",[hw]:"fire-auth",[dw]:"fire-auth-compat",[fw]:"fire-rtdb",[pw]:"fire-data-connect",[mw]:"fire-rtdb-compat",[gw]:"fire-fn",[yw]:"fire-fn-compat",[_w]:"fire-iid",[ww]:"fire-iid-compat",[vw]:"fire-fcm",[Iw]:"fire-fcm-compat",[bw]:"fire-perf",[Ew]:"fire-perf-compat",[Tw]:"fire-rc",[Aw]:"fire-rc-compat",[Sw]:"fire-gcs",[kw]:"fire-gcs-compat",[Rw]:"fire-fst",[Cw]:"fire-fst-compat",[Pw]:"fire-vertex","fire-js":"fire-js",[Dw]:"fire-js-all"};var vs=new Map,xw=new Map,ic=new Map;function Rf(n,e){try{n.container.addComponent(e)}catch(t){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Be(n){let e=n.name;if(ic.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;ic.set(e,n);for(let t of vs.values())Rf(t,n);for(let t of xw.values())Rf(t,n);return!0}function dt(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function it(n){return n.settings!==void 0}var Vw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new We("app","Firebase",Vw);var sc=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}};var Kt=Nw;function cc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:rc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(t||(t=Wa()),!t)throw Wt.create("no-options");let s=vs.get(i);if(s){if(Et(t,s.options)&&Et(r,s.config))return s;throw Wt.create("duplicate-app",{appName:i})}let a=new ys(i);for(let l of ic.values())a.addComponent(l);let c=new sc(t,r,a);return vs.set(i,c),c}function gn(n=rc){let e=vs.get(n);if(!e&&n===rc&&Wa())return cc();if(!e)throw Wt.create("no-app",{appName:n});return e}function Ae(n,e,t){var r;let i=(r=Ow[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(c.join(" "));return}Be(new Ie(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var Lw="firebase-heartbeat-database",Mw=1,Jr="firebase-heartbeat-store",ec=null;function Nf(){return ec||(ec=mn(Lw,Mw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Jr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),ec}async function Fw(n){try{let t=(await Nf()).transaction(Jr),r=await t.objectStore(Jr).get(Of(n));return await t.done,r}catch(e){if(e instanceof $e)Tt.warn(e.message);else{let t=Wt.create("idb-get",{originalErrorMessage:e?.message});Tt.warn(t.message)}}}async function Pf(n,e){try{let r=(await Nf()).transaction(Jr,"readwrite");await r.objectStore(Jr).put(e,Of(n)),await r.done}catch(t){if(t instanceof $e)Tt.warn(t.message);else{let r=Wt.create("idb-set",{originalErrorMessage:t?.message});Tt.warn(r.message)}}}function Of(n){return`${n.name}!${n.options.appId}`}var $w=1024,Uw=30*24*60*60*1e3,oc=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ac(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let c=new Date(a.date).valueOf();return Date.now()-c<=Uw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Cf(),{heartbeatsToSend:r,unsentEntries:i}=Bw(this._heartbeatsCache.heartbeats),s=Qr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Tt.warn(t),""}}};function Cf(){return new Date().toISOString().substring(0,10)}function Bw(n,e=$w){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Df(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Df(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var ac=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yr()?gs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await Fw(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function Df(n){return Qr(JSON.stringify({version:2,heartbeats:n})).length}function qw(n){Be(new Ie("platform-logger",e=>new tc(e),"PRIVATE")),Be(new Ie("heartbeat",e=>new oc(e),"PRIVATE")),Ae(nc,kf,n),Ae(nc,kf,"esm2017"),Ae("fire-js","")}qw("");var jw="firebase",Gw="11.0.2";Ae(jw,Gw,"app");function Is(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Xf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Zf=Xf,ep=new We("auth","Firebase",Xf());var Rs=new zt("@firebase/auth");function zw(n,...e){Rs.logLevel<=z.WARN&&Rs.warn(`Auth (${Kt}): ${n}`,...e)}function Es(n,...e){Rs.logLevel<=z.ERROR&&Rs.error(`Auth (${Kt}): ${n}`,...e)}function Xe(n,...e){throw Cc(n,...e)}function pt(n,...e){return Cc(n,...e)}function Pc(n,e,t){let r=Object.assign(Object.assign({},Zf()),{[e]:t});return new We("auth","Firebase",r).create(e,{appName:n.name})}function St(n){return Pc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tp(n,e,t){let r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xe(n,"argument-error"),Pc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cc(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ep.create(n,...e)}function L(n,e,...t){if(!n)throw Cc(e,...t)}function ft(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Es(e),new Error(e)}function kt(n,e){n||ft(e)}function dc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ww(){return xf()==="http:"||xf()==="https:"}function xf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function Kw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ww()||pf()||"connection"in navigator)?navigator.onLine:!0}function Hw(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var yn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,kt(t>e,"Short delay should be less than long delay!"),this.isMobile=df()||mf()}get(){return Kw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Dc(n,e){kt(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Ps=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var Qw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var Yw=new yn(3e4,6e4);function pe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Se(n,e,t,r,i={}){return np(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let c=zn(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},s);return ff()||(d.referrerPolicy="no-referrer"),Ps.fetch()(rp(n,n.config.apiHost,t,c),d)})}async function np(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},Qw),e);try{let i=new fc(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw Zr(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let c=s.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Zr(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Zr(n,"user-disabled",a);let f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Pc(n,f,d);Xe(n,f)}}catch(i){if(i instanceof $e)throw i;Xe(n,"network-request-failed",{message:String(i)})}}async function Qt(n,e,t,r,i={}){let s=await Se(n,e,t,r,i);return"mfaPendingCredential"in s&&Xe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function rp(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?Dc(n.config,i):`${n.config.apiScheme}://${i}`}function Jw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var fc=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),Yw.get())})}};function Zr(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=pt(n,e,r);return i.customData._tokenResponse=t,i}function Vf(n){return n!==void 0&&n.enterprise!==void 0}var Cs=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Jw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function ip(n,e){return Se(n,"GET","/v2/recaptchaConfig",pe(n,e))}async function Xw(n,e){return Se(n,"POST","/v1/accounts:delete",e)}async function sp(n,e){return Se(n,"POST","/v1/accounts:lookup",e)}function ei(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function op(n,e=!1){let t=ee(n),r=await t.getIdToken(e),i=Nc(r);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:ei(uc(i.auth_time)),issuedAtTime:ei(uc(i.iat)),expirationTime:ei(uc(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function uc(n){return Number(n)*1e3}function Nc(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Es("JWT malformed, contained fewer than 3 sections"),null;try{let i=Ga(t);return i?JSON.parse(i):(Es("Failed to decode base64 JWT payload"),null)}catch(i){return Es("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Lf(n){let e=Nc(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function ri(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof $e&&Zw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Zw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var pc=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var ii=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function si(n){var e;let t=n.auth,r=await n.getIdToken(),i=await ri(n,sp(t,{idToken:r}));L(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cp(s.providerUserInfo):[],c=ev(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!c?.length,f=l?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ii(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,y)}async function ap(n){let e=ee(n);await si(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ev(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cp(n){return n.map(e=>{var{providerId:t}=e,r=Is(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function tv(n,e){let t=await np(n,{},async()=>{let r=zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=rp(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ps.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function nv(n,e){return Se(n,"POST","/v2/accounts:revokeToken",pe(n,e))}var ti=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");let t=Lf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await tv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return ft("not implemented")}};function Ht(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var Yn=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Is(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ii(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await ri(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return op(this,e)}reload(){return ap(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await si(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(it(this.auth.app))return Promise.reject(St(this.auth));let e=await this.getIdToken();return await ri(this,Xw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,l,d,f;let y=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(i=t.email)!==null&&i!==void 0?i:void 0,P=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,O=(a=t.photoURL)!==null&&a!==void 0?a:void 0,F=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,G=(d=t.createdAt)!==null&&d!==void 0?d:void 0,K=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:H,emailVerified:se,isAnonymous:Le,providerData:re,stsTokenManager:b}=t;L(H&&b,e,"internal-error");let g=ti.fromJSON(this.name,b);L(typeof H=="string",e,"internal-error"),Ht(y,e.name),Ht(A,e.name),L(typeof se=="boolean",e,"internal-error"),L(typeof Le=="boolean",e,"internal-error"),Ht(P,e.name),Ht(O,e.name),Ht(F,e.name),Ht(N,e.name),Ht(G,e.name),Ht(K,e.name);let w=new n({uid:H,auth:e,email:A,emailVerified:se,displayName:y,isAnonymous:Le,photoURL:O,phoneNumber:P,tenantId:F,stsTokenManager:g,createdAt:G,lastLoginAt:K});return re&&Array.isArray(re)&&(w.providerData=re.map(I=>Object.assign({},I))),N&&(w._redirectEventId=N),w}static async _fromIdTokenResponse(e,t,r=!1){let i=new ti;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await si(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];L(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?cp(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new ti;c.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ii(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}};var Mf=new Map;function At(n){kt(n instanceof Function,"Expected a class definition");let e=Mf.get(n);return e?(kt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Mf.set(n,e),e)}var Ds=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Ds.type="NONE";var mc=Ds;function Ts(n,e,t){return`firebase:${n}:${e}:${t}`}var Ns=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Ts(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ts("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(At(mc),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||At(mc),a=Ts(r,e.config.apiKey,e.name),c=null;for(let d of t)try{let f=await d._get(a);if(f){let y=Yn._fromJSON(e,f);d!==s&&(c=y),s=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new n(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new n(s,e,r))}};function Ff(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(up(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pp(e))return"Blackberry";if(mp(e))return"Webos";if(lp(e))return"Safari";if((e.includes("chrome/")||hp(e))&&!e.includes("edge/"))return"Chrome";if(fp(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function up(n=ve()){return/firefox\//i.test(n)}function lp(n=ve()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hp(n=ve()){return/crios\//i.test(n)}function dp(n=ve()){return/iemobile/i.test(n)}function fp(n=ve()){return/android/i.test(n)}function pp(n=ve()){return/blackberry/i.test(n)}function mp(n=ve()){return/webos/i.test(n)}function Oc(n=ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rv(n=ve()){var e;return Oc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iv(){return gf()&&document.documentMode===10}function gp(n=ve()){return Oc(n)||fp(n)||mp(n)||pp(n)||/windows phone/i.test(n)||dp(n)}function yp(n,e=[]){let t;switch(n){case"Browser":t=Ff(ve());break;case"Worker":t=`${Ff(ve())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kt}/${r}`}var gc=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,c)=>{try{let l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function sv(n,e={}){return Se(n,"GET","/v2/passwordPolicy",pe(n,e))}var ov=6,yc=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ov,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var _c=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Os(this),this.idTokenSubscription=new Os(this),this.beforeStateQueue=new gc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ep,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=At(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await sp(this,{idToken:e}),r=await Yn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(it(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await si(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(it(this.app))return Promise.reject(St(this));let t=e?ee(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return it(this.app)?Promise.reject(St(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return it(this.app)?Promise.reject(St(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await sv(this),t=new yc(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new We("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await nv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&At(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[At(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{let l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&zw(`Error while retrieving App Check token: ${t.error}`),t?.token}};function st(n){return ee(n)}var Os=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=vf(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Js={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function av(n){Js=n}function _p(n){return Js.loadJS(n)}function cv(){return Js.recaptchaEnterpriseScript}function uv(){return Js.gapiScript}function wp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var wc=class{constructor(){this.enterprise=new vc}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},vc=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var lv="recaptcha-enterprise",ni="NO_RECAPTCHA",xs=class{constructor(e){this.type=lv,this.auth=st(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{ip(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let d=new Cs(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function i(s,a,c){let l=window.grecaptcha;Vf(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(ni)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wc().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&Vf(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=cv();l.length!==0&&(l+=c),_p(l).then(()=>{i(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}};async function Xr(n,e,t,r=!1,i=!1){let s=new xs(n),a;if(i)a=ni;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}let c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){let l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){let l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Hn(n,e,t,r,i){var s,a;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let c=await Xr(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await Xr(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(c)});else if(i==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let c=await Xr(n,e,t);return r(n,c).catch(async l=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let f=await Xr(n,e,t,!1,!0);return r(n,f)}return Promise.reject(l)})}else{let c=await Xr(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")}async function hv(n){let e=st(n),t=await ip(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Cs(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new xs(e).verify()}function vp(n,e){let t=dt(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(Et(s,e??{}))return i;Xe(i,"already-initialized")}return t.initialize({options:e})}function dv(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(At);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Xs(n,e,t){let r=st(n);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=Ip(e),{host:a,port:c}=fv(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||pv()}function Ip(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function fv(n){let e=Ip(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:$f(r.substr(s.length+1))}}else{let[s,a]=r.split(":");return{host:s,port:$f(a)}}}function $f(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function pv(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var _n=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}};async function mv(n,e){return Se(n,"POST","/v1/accounts:signUp",e)}async function gv(n,e){return Qt(n,"POST","/v1/accounts:signInWithPassword",pe(n,e))}async function yv(n,e){return Se(n,"POST","/v1/accounts:sendOobCode",pe(n,e))}async function _v(n,e){return yv(n,e)}async function wv(n,e){return Qt(n,"POST","/v1/accounts:signInWithEmailLink",pe(n,e))}async function vv(n,e){return Qt(n,"POST","/v1/accounts:signInWithEmailLink",pe(n,e))}var oi=class n extends _n{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hn(e,t,"signInWithPassword",gv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return wv(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hn(e,r,"signUpPassword",mv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return vv(e,{idToken:t,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Qn(n,e){return Qt(n,"POST","/v1/accounts:signInWithIdp",pe(n,e))}var Iv="http://localhost",wn=class n extends _n{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Is(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return Qn(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,Qn(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Qn(e,t)}buildRequest(){let e={requestUri:Iv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zn(t)}return e}};async function Uf(n,e){return Se(n,"POST","/v1/accounts:sendVerificationCode",pe(n,e))}async function bv(n,e){return Qt(n,"POST","/v1/accounts:signInWithPhoneNumber",pe(n,e))}async function Ev(n,e){let t=await Qt(n,"POST","/v1/accounts:signInWithPhoneNumber",pe(n,e));if(t.temporaryProof)throw Zr(n,"account-exists-with-different-credential",t);return t}var Tv={USER_NOT_FOUND:"user-not-found"};async function Av(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Qt(n,"POST","/v1/accounts:signInWithPhoneNumber",pe(n,t),Tv)}var ai=class n extends _n{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return bv(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ev(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Av(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function Sv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kv(n){let e=Wn(Kn(n)).link,t=e?Wn(Kn(e)).deep_link_id:null,r=Wn(Kn(n)).deep_link_id;return(r?Wn(Kn(r)).link:null)||r||t||e||n}var Vs=class n{constructor(e){var t,r,i,s,a,c;let l=Wn(Kn(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,y=Sv((i=l.mode)!==null&&i!==void 0?i:null);L(d&&f&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=kv(e);try{return new n(t)}catch{return null}}};var Rt=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return oi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=Vs.parseLink(t);return L(r,"argument-error"),oi._fromEmailAndCode(e,r.code,r.tenantId)}};Rt.PROVIDER_ID="password";Rt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Jn=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var vn=class extends Jn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var ci=class n extends vn{constructor(){super("facebook.com")}static credential(e){return wn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";var Pt=class n extends vn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";var ui=class n extends vn{constructor(){super("github.com")}static credential(e){return wn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";var li=class n extends vn{constructor(){super("twitter.com")}static credential(e,t){return wn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";async function Rv(n,e){return Qt(n,"POST","/v1/accounts:signUp",pe(n,e))}var In=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await Yn._fromIdTokenResponse(e,r,i),a=Bf(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=Bf(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function Bf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function xc(n){var e;if(it(n.app))return Promise.reject(St(n));let t=st(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new In({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await Rv(t,{returnSecureToken:!0}),i=await In._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}var Ic=class n extends $e{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function bp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ic._fromErrorAndOperation(n,s,e,r):s})}function Pv(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}async function Ep(n,e,t=!1){let r=await ri(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return In._forOperation(n,"link",r)}async function Tp(n,e,t){await si(e);let r=Pv(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";L(r.has(t)===n,e.auth,i)}async function Cv(n,e,t=!1){let{auth:r}=n;if(it(r.app))return Promise.reject(St(r));let i="reauthenticate";try{let s=await ri(n,bp(r,i,e,n),t);L(s.idToken,r,"internal-error");let a=Nc(s.idToken);L(a,r,"internal-error");let{sub:c}=a;return L(n.uid===c,r,"user-mismatch"),In._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Xe(r,"user-mismatch"),s}}async function Ap(n,e,t=!1){if(it(n.app))return Promise.reject(St(n));let r="signIn",i=await bp(n,r,e),s=await In._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function fi(n,e){return Ap(st(n),e)}async function Vc(n,e){let t=ee(n);return await Tp(!1,t,e.providerId),Ep(t,e)}function Dv(n,e,t){var r;L(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),L(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(L(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(L(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}async function Nv(n){let e=st(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Lc(n,e,t){let r=st(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Dv(r,i,t),await Hn(r,i,"getOobCode",_v,"EMAIL_PASSWORD_PROVIDER")}function Mc(n,e,t){return it(n.app)?Promise.reject(St(n)):fi(ee(n),Rt.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Nv(n),r})}function Sp(n,e,t,r){return ee(n).onIdTokenChanged(e,t,r)}function kp(n,e,t){return ee(n).beforeAuthStateChanged(e,t)}function Fc(n,e,t,r){return ee(n).onAuthStateChanged(e,t,r)}function $c(n){return ee(n).signOut()}function qf(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:start",pe(n,e))}function Ov(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:finalize",pe(n,e))}function xv(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:start",pe(n,e))}function Vv(n,e){return Se(n,"POST","/v2/accounts/mfaEnrollment:finalize",pe(n,e))}var Ls="__sak";var Ms=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ls,"1"),this.storage.removeItem(Ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var Lv=1e3,Mv=10,Fs=class extends Ms{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);iv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Mv):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Lv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Fs.type="LOCAL";var Rp=Fs;var $s=class extends Ms{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};$s.type="SESSION";var Uc=$s;function Fv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Us=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(a).map(async d=>d(t.origin,s)),l=await Fv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Us.receivers=[];function Zs(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var bc=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{let d=Zs("",20);i.port1.start();let f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){let A=y;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(A.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function mt(){return window}function $v(n){mt().location.href=n}function Pp(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function Uv(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bv(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qv(){return Pp()?self:null}var Cp="firebaseLocalStorageDb",jv=1,Bs="firebaseLocalStorage",Dp="fbase_key",bn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function eo(n,e){return n.transaction([Bs],e?"readwrite":"readonly").objectStore(Bs)}function Gv(){let n=indexedDB.deleteDatabase(Cp);return new bn(n).toPromise()}function Ec(){let n=indexedDB.open(Cp,jv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Bs,{keyPath:Dp})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Bs)?e(r):(r.close(),await Gv(),e(await Ec()))})})}async function jf(n,e,t){let r=eo(n,!0).put({[Dp]:e,value:t});return new bn(r).toPromise()}async function zv(n,e){let t=eo(n,!1).get(e),r=await new bn(t).toPromise();return r===void 0?null:r.value}function Gf(n,e){let t=eo(n,!0).delete(e);return new bn(t).toPromise()}var Wv=800,Kv=3,qs=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ec(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>Kv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Us._getInstance(qv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Uv(),!this.activeServiceWorker)return;this.sender=new bc(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Ec();return await jf(e,Ls,"1"),await Gf(e,Ls),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>jf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>zv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=eo(i,!1).getAll();return new bn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};qs.type="LOCAL";var Np=qs;function zf(n,e){return Se(n,"POST","/v2/accounts/mfaSignIn:start",pe(n,e))}function Hv(n,e){return Se(n,"POST","/v2/accounts/mfaSignIn:finalize",pe(n,e))}function Qv(n,e){return Se(n,"POST","/v2/accounts/mfaSignIn:finalize",pe(n,e))}var zA=wp("rcb"),WA=new yn(3e4,6e4);var As="recaptcha";async function Yv(n,e,t){var r;if(!n._getRecaptchaConfig())try{await hv(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){L(s.type==="enroll",n,"internal-error");let a={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Hn(n,a,"mfaSmsEnrollment",async(f,y)=>{if(y.phoneEnrollmentInfo.captchaResponse===ni){L(t?.type===As,f,"argument-error");let A=await lc(f,y,t);return qf(f,A)}return qf(f,y)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{L(s.type==="signin",n,"internal-error");let a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;L(a,n,"missing-multi-factor-info");let c={mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Hn(n,c,"mfaSmsSignIn",async(y,A)=>{if(A.phoneSignInInfo.captchaResponse===ni){L(t?.type===As,y,"argument-error");let P=await lc(y,A,t);return zf(y,P)}return zf(y,A)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Hn(n,s,"sendVerificationCode",async(d,f)=>{if(f.captchaResponse===ni){L(t?.type===As,d,"argument-error");let y=await lc(d,f,t);return Uf(d,y)}return Uf(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{t?._reset()}}async function lc(n,e,t){L(t.type===As,n,"argument-error");let r=await t.verify();L(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,a=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:a,clientType:c,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,a=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:a,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var hi=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=st(e)}verifyPhoneNumber(e,t){return Yv(this.auth,e,ee(t))}static credential(e,t){return ai._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?ai._fromTokenResponse(t,r):null}};hi.PROVIDER_ID="phone";hi.PHONE_SIGN_IN_METHOD="phone";function Bc(n,e){return e?At(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var di=class extends _n{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Jv(n){return Ap(n.auth,new di(n),n.bypassAuthState)}function Xv(n){let{auth:e,user:t}=n;return L(t,e,"internal-error"),Cv(t,new di(n),n.bypassAuthState)}async function Zv(n){let{auth:e,user:t}=n;return L(t,e,"internal-error"),Ep(t,new di(n),n.bypassAuthState)}var js=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jv;case"linkViaPopup":case"linkViaRedirect":return Zv;case"reauthViaPopup":case"reauthViaRedirect":return Xv;default:Xe(this.auth,"internal-error")}}resolve(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var eI=new yn(2e3,1e4);async function qc(n,e,t){let r=ee(n);tp(r.auth,e,Jn);let i=Bc(r.auth,t);return new Gs(r.auth,"linkViaPopup",e,i,r).executeNotNull()}var Gs=class n extends js{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");let e=Zs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eI.get())};e()}};Gs.currentPopupAction=null;var tI="pendingRedirect",Ss=new Map,Tc=class extends js{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ss.get(this.auth._key());if(!e){try{let r=await nI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ss.set(this.auth._key(),e)}return this.bypassAuthState||Ss.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function nI(n,e){let t=xp(e),r=Op(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}async function rI(n,e){return Op(n)._set(xp(e),"true")}function iI(n,e){Ss.set(n._key(),e)}function Op(n){return At(n._redirectPersistence)}function xp(n){return Ts(tI,n.config.apiKey,n.name)}function to(n,e,t){return sI(n,e,t)}async function sI(n,e,t){let r=ee(n);tp(r.auth,e,Jn),await r.auth._initializationPromise;let i=Bc(r.auth,t);await Tp(!1,r,e.providerId),await rI(i,r.auth);let s=await oI(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function jc(n,e){return await st(n)._initializationPromise,Vp(n,e,!1)}async function Vp(n,e,t=!1){if(it(n.app))return Promise.reject(St(n));let r=st(n),i=Bc(r,e),a=await new Tc(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}async function oI(n){let e=Zs(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}var aI=10*60*1e3,Ac=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Lp(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(pt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wf(e))}saveEventToCache(e){this.cachedEventUids.add(Wf(e)),this.lastProcessedEventTime=Date.now()}};function Wf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function cI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lp(n);default:return!1}}async function uI(n,e={}){return Se(n,"GET","/v1/projects",e)}var lI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hI=/^https?/;async function dI(n){if(n.config.emulator)return;let{authorizedDomains:e}=await uI(n);for(let t of e)try{if(fI(t))return}catch{}Xe(n,"unauthorized-domain")}function fI(n){let e=dc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!hI.test(t))return!1;if(lI.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var pI=new yn(3e4,6e4);function Kf(){let n=mt().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function mI(n){return new Promise((e,t)=>{var r,i,s;function a(){Kf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kf(),t(pt(n,"network-request-failed"))},timeout:pI.get()})}if(!((i=(r=mt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mt().gapi)===null||s===void 0)&&s.load)a();else{let c=wp("iframefcb");return mt()[c]=()=>{gapi.load?a():t(pt(n,"network-request-failed"))},_p(`${uv()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ks=null,e})}var ks=null;function gI(n){return ks=ks||mI(n),ks}var yI=new yn(5e3,15e3),_I="__/auth/iframe",wI="emulator/auth/iframe",vI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},II=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bI(n){let e=n.config;L(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?Dc(e,wI):`https://${n.config.authDomain}/${_I}`,r={apiKey:e.apiKey,appName:n.name,v:Kt},i=II.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${zn(r).slice(1)}`}async function EI(n){let e=await gI(n),t=mt().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:bI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let a=pt(n,"network-request-failed"),c=mt().setTimeout(()=>{s(a)},yI.get());function l(){mt().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}var TI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AI=500,SI=600,kI="_blank",RI="http://localhost",zs=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function PI(n,e,t,r=AI,i=SI){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),c="",l=Object.assign(Object.assign({},TI),{width:r.toString(),height:i.toString(),top:s,left:a}),d=ve().toLowerCase();t&&(c=hp(d)?kI:t),up(d)&&(e=e||RI,l.scrollbars="yes");let f=Object.entries(l).reduce((A,[P,O])=>`${A}${P}=${O},`,"");if(rv(d)&&c!=="_self")return CI(e||"",c),new zs(null);let y=window.open(e||"",c,f);L(y,n,"popup-blocked");try{y.focus()}catch{}return new zs(y)}function CI(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var DI="__/auth/handler",NI="emulator/auth/handler",OI=encodeURIComponent("fac");async function Hf(n,e,t,r,i,s){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Kt,eventId:i};if(e instanceof Jn){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",wf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[f,y]of Object.entries(s||{}))a[f]=y}if(e instanceof vn){let f=e.getScopes().filter(y=>y!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);let c=a;for(let f of Object.keys(c))c[f]===void 0&&delete c[f];let l=await n._getAppCheckToken(),d=l?`#${OI}=${encodeURIComponent(l)}`:"";return`${xI(n)}?${zn(c).slice(1)}${d}`}function xI({config:n}){return n.emulator?Dc(n,NI):`https://${n.authDomain}/${DI}`}var hc="webStorageSupport",Sc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uc,this._completeRedirectFn=Vp,this._overrideRedirectResult=iI}async _openPopup(e,t,r,i){var s;kt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await Hf(e,t,r,dc(),i);return PI(e,a,Zs())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await Hf(e,t,r,dc(),i);return $v(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(kt(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await EI(e),r=new Ac(e);return t.register("authEvent",i=>(L(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hc,{type:hc},i=>{var s;let a=(s=i?.[0])===null||s===void 0?void 0:s[hc];a!==void 0&&t(!!a),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gp()||lp()||Oc()}},Mp=Sc,Ws=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ft("unexpected MultiFactorSessionType")}}},kc=class n extends Ws{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return Ov(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Hv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Ks=class{constructor(){}static assertion(e){return kc._fromCredential(e)}};Ks.FACTOR_ID="phone";var Hs=class{static assertionForEnrollment(e,t){return Qs._fromSecret(e,t)}static assertionForSignIn(e,t){return Qs._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;L(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await xv(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Ys._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};Hs.FACTOR_ID="totp";var Qs=class n extends Ws{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return L(typeof this.secret<"u",e,"argument-error"),Vv(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){L(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Qv(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Ys=class n{constructor(e,t,r,i,s,a,c){this.sessionInfo=a,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(bs(e)||bs(t))&&(i=!0),i&&(bs(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),bs(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function bs(n){return typeof n>"u"||n?.length===0}var Qf="@firebase/auth",Yf="1.8.1";var Rc=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function VI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LI(n){Be(new Ie("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yp(n)},d=new _c(r,i,s,l);return dv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Be(new Ie("auth-internal",e=>{let t=st(e.getProvider("auth").getImmediate());return(r=>new Rc(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(Qf,Yf,VI(n)),Ae(Qf,Yf,"esm2017")}var MI=5*60,FI=Ka("authIdTokenMaxAge")||MI,Jf=null,$I=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>FI)return;let i=t?.token;Jf!==i&&(Jf=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gc(n=gn()){let e=dt(n,"auth");if(e.isInitialized())return e.getImmediate();let t=vp(n,{popupRedirectResolver:Mp,persistence:[Np,Rp,Uc]}),r=Ka("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let a=$I(s.toString());kp(t,a,()=>a(t.currentUser)),Sp(t,c=>a(c))}}let i=za("auth");return i&&Xs(t,`http://${i}`),t}function UI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}av({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=pt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",UI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LI("Browser");var Fp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$p={};var Yt,zc;(function(){var n;function e(b,g){function w(){}w.prototype=g.prototype,b.D=g.prototype,b.prototype=new w,b.prototype.constructor=b,b.C=function(I,E,S){for(var _=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)_[vt-2]=arguments[vt];return g.prototype[E].apply(I,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,g,w){w||(w=0);var I=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)I[E]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(E=0;16>E;++E)I[E]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=b.g[0],w=b.g[1],E=b.g[2];var S=b.g[3],_=g+(S^w&(E^S))+I[0]+3614090360&4294967295;g=w+(_<<7&4294967295|_>>>25),_=S+(E^g&(w^E))+I[1]+3905402710&4294967295,S=g+(_<<12&4294967295|_>>>20),_=E+(w^S&(g^w))+I[2]+606105819&4294967295,E=S+(_<<17&4294967295|_>>>15),_=w+(g^E&(S^g))+I[3]+3250441966&4294967295,w=E+(_<<22&4294967295|_>>>10),_=g+(S^w&(E^S))+I[4]+4118548399&4294967295,g=w+(_<<7&4294967295|_>>>25),_=S+(E^g&(w^E))+I[5]+1200080426&4294967295,S=g+(_<<12&4294967295|_>>>20),_=E+(w^S&(g^w))+I[6]+2821735955&4294967295,E=S+(_<<17&4294967295|_>>>15),_=w+(g^E&(S^g))+I[7]+4249261313&4294967295,w=E+(_<<22&4294967295|_>>>10),_=g+(S^w&(E^S))+I[8]+1770035416&4294967295,g=w+(_<<7&4294967295|_>>>25),_=S+(E^g&(w^E))+I[9]+2336552879&4294967295,S=g+(_<<12&4294967295|_>>>20),_=E+(w^S&(g^w))+I[10]+4294925233&4294967295,E=S+(_<<17&4294967295|_>>>15),_=w+(g^E&(S^g))+I[11]+2304563134&4294967295,w=E+(_<<22&4294967295|_>>>10),_=g+(S^w&(E^S))+I[12]+1804603682&4294967295,g=w+(_<<7&4294967295|_>>>25),_=S+(E^g&(w^E))+I[13]+4254626195&4294967295,S=g+(_<<12&4294967295|_>>>20),_=E+(w^S&(g^w))+I[14]+2792965006&4294967295,E=S+(_<<17&4294967295|_>>>15),_=w+(g^E&(S^g))+I[15]+1236535329&4294967295,w=E+(_<<22&4294967295|_>>>10),_=g+(E^S&(w^E))+I[1]+4129170786&4294967295,g=w+(_<<5&4294967295|_>>>27),_=S+(w^E&(g^w))+I[6]+3225465664&4294967295,S=g+(_<<9&4294967295|_>>>23),_=E+(g^w&(S^g))+I[11]+643717713&4294967295,E=S+(_<<14&4294967295|_>>>18),_=w+(S^g&(E^S))+I[0]+3921069994&4294967295,w=E+(_<<20&4294967295|_>>>12),_=g+(E^S&(w^E))+I[5]+3593408605&4294967295,g=w+(_<<5&4294967295|_>>>27),_=S+(w^E&(g^w))+I[10]+38016083&4294967295,S=g+(_<<9&4294967295|_>>>23),_=E+(g^w&(S^g))+I[15]+3634488961&4294967295,E=S+(_<<14&4294967295|_>>>18),_=w+(S^g&(E^S))+I[4]+3889429448&4294967295,w=E+(_<<20&4294967295|_>>>12),_=g+(E^S&(w^E))+I[9]+568446438&4294967295,g=w+(_<<5&4294967295|_>>>27),_=S+(w^E&(g^w))+I[14]+3275163606&4294967295,S=g+(_<<9&4294967295|_>>>23),_=E+(g^w&(S^g))+I[3]+4107603335&4294967295,E=S+(_<<14&4294967295|_>>>18),_=w+(S^g&(E^S))+I[8]+1163531501&4294967295,w=E+(_<<20&4294967295|_>>>12),_=g+(E^S&(w^E))+I[13]+2850285829&4294967295,g=w+(_<<5&4294967295|_>>>27),_=S+(w^E&(g^w))+I[2]+4243563512&4294967295,S=g+(_<<9&4294967295|_>>>23),_=E+(g^w&(S^g))+I[7]+1735328473&4294967295,E=S+(_<<14&4294967295|_>>>18),_=w+(S^g&(E^S))+I[12]+2368359562&4294967295,w=E+(_<<20&4294967295|_>>>12),_=g+(w^E^S)+I[5]+4294588738&4294967295,g=w+(_<<4&4294967295|_>>>28),_=S+(g^w^E)+I[8]+2272392833&4294967295,S=g+(_<<11&4294967295|_>>>21),_=E+(S^g^w)+I[11]+1839030562&4294967295,E=S+(_<<16&4294967295|_>>>16),_=w+(E^S^g)+I[14]+4259657740&4294967295,w=E+(_<<23&4294967295|_>>>9),_=g+(w^E^S)+I[1]+2763975236&4294967295,g=w+(_<<4&4294967295|_>>>28),_=S+(g^w^E)+I[4]+1272893353&4294967295,S=g+(_<<11&4294967295|_>>>21),_=E+(S^g^w)+I[7]+4139469664&4294967295,E=S+(_<<16&4294967295|_>>>16),_=w+(E^S^g)+I[10]+3200236656&4294967295,w=E+(_<<23&4294967295|_>>>9),_=g+(w^E^S)+I[13]+681279174&4294967295,g=w+(_<<4&4294967295|_>>>28),_=S+(g^w^E)+I[0]+3936430074&4294967295,S=g+(_<<11&4294967295|_>>>21),_=E+(S^g^w)+I[3]+3572445317&4294967295,E=S+(_<<16&4294967295|_>>>16),_=w+(E^S^g)+I[6]+76029189&4294967295,w=E+(_<<23&4294967295|_>>>9),_=g+(w^E^S)+I[9]+3654602809&4294967295,g=w+(_<<4&4294967295|_>>>28),_=S+(g^w^E)+I[12]+3873151461&4294967295,S=g+(_<<11&4294967295|_>>>21),_=E+(S^g^w)+I[15]+530742520&4294967295,E=S+(_<<16&4294967295|_>>>16),_=w+(E^S^g)+I[2]+3299628645&4294967295,w=E+(_<<23&4294967295|_>>>9),_=g+(E^(w|~S))+I[0]+4096336452&4294967295,g=w+(_<<6&4294967295|_>>>26),_=S+(w^(g|~E))+I[7]+1126891415&4294967295,S=g+(_<<10&4294967295|_>>>22),_=E+(g^(S|~w))+I[14]+2878612391&4294967295,E=S+(_<<15&4294967295|_>>>17),_=w+(S^(E|~g))+I[5]+4237533241&4294967295,w=E+(_<<21&4294967295|_>>>11),_=g+(E^(w|~S))+I[12]+1700485571&4294967295,g=w+(_<<6&4294967295|_>>>26),_=S+(w^(g|~E))+I[3]+2399980690&4294967295,S=g+(_<<10&4294967295|_>>>22),_=E+(g^(S|~w))+I[10]+4293915773&4294967295,E=S+(_<<15&4294967295|_>>>17),_=w+(S^(E|~g))+I[1]+2240044497&4294967295,w=E+(_<<21&4294967295|_>>>11),_=g+(E^(w|~S))+I[8]+1873313359&4294967295,g=w+(_<<6&4294967295|_>>>26),_=S+(w^(g|~E))+I[15]+4264355552&4294967295,S=g+(_<<10&4294967295|_>>>22),_=E+(g^(S|~w))+I[6]+2734768916&4294967295,E=S+(_<<15&4294967295|_>>>17),_=w+(S^(E|~g))+I[13]+1309151649&4294967295,w=E+(_<<21&4294967295|_>>>11),_=g+(E^(w|~S))+I[4]+4149444226&4294967295,g=w+(_<<6&4294967295|_>>>26),_=S+(w^(g|~E))+I[11]+3174756917&4294967295,S=g+(_<<10&4294967295|_>>>22),_=E+(g^(S|~w))+I[2]+718787259&4294967295,E=S+(_<<15&4294967295|_>>>17),_=w+(S^(E|~g))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.u=function(b,g){g===void 0&&(g=b.length);for(var w=g-this.blockSize,I=this.B,E=this.h,S=0;S<g;){if(E==0)for(;S<=w;)i(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<g;)if(I[E++]=b.charCodeAt(S++),E==this.blockSize){i(this,I),E=0;break}}else for(;S<g;)if(I[E++]=b[S++],E==this.blockSize){i(this,I),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;var w=8*this.o;for(g=b.length-8;g<b.length;++g)b[g]=w&255,w/=256;for(this.u(b),b=Array(16),g=w=0;4>g;++g)for(var I=0;32>I;I+=8)b[w++]=this.g[g]>>>I&255;return b};function s(b,g){var w=c;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=g(b)}function a(b,g){this.h=g;for(var w=[],I=!0,E=b.length-1;0<=E;E--){var S=b[E]|0;I&&S==g||(w[E]=S,I=!1)}this.g=w}var c={};function l(b){return-128<=b&&128>b?s(b,function(g){return new a([g|0],0>g?-1:0)}):new a([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return y;if(0>b)return N(d(-b));for(var g=[],w=1,I=0;b>=w;I++)g[I]=b/w|0,w*=4294967296;return new a(g,0)}function f(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return N(f(b.substring(1),g));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(g,8)),I=y,E=0;E<b.length;E+=8){var S=Math.min(8,b.length-E),_=parseInt(b.substring(E,E+S),g);8>S?(S=d(Math.pow(g,S)),I=I.j(S).add(d(_))):(I=I.j(w),I=I.add(d(_)))}return I}var y=l(0),A=l(1),P=l(16777216);n=a.prototype,n.m=function(){if(F(this))return-N(this).m();for(var b=0,g=1,w=0;w<this.g.length;w++){var I=this.i(w);b+=(0<=I?I:4294967296+I)*g,g*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(O(this))return"0";if(F(this))return"-"+N(this).toString(b);for(var g=d(Math.pow(b,6)),w=this,I="";;){var E=se(w,g).g;w=G(w,E.j(g));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(b);if(w=E,O(w))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function O(b){if(b.h!=0)return!1;for(var g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function F(b){return b.h==-1}n.l=function(b){return b=G(this,b),F(b)?-1:O(b)?0:1};function N(b){for(var g=b.g.length,w=[],I=0;I<g;I++)w[I]=~b.g[I];return new a(w,~b.h).add(A)}n.abs=function(){return F(this)?N(this):this},n.add=function(b){for(var g=Math.max(this.g.length,b.g.length),w=[],I=0,E=0;E<=g;E++){var S=I+(this.i(E)&65535)+(b.i(E)&65535),_=(S>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);I=_>>>16,S&=65535,_&=65535,w[E]=_<<16|S}return new a(w,w[w.length-1]&-2147483648?-1:0)};function G(b,g){return b.add(N(g))}n.j=function(b){if(O(this)||O(b))return y;if(F(this))return F(b)?N(this).j(N(b)):N(N(this).j(b));if(F(b))return N(this.j(N(b)));if(0>this.l(P)&&0>b.l(P))return d(this.m()*b.m());for(var g=this.g.length+b.g.length,w=[],I=0;I<2*g;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var E=0;E<b.g.length;E++){var S=this.i(I)>>>16,_=this.i(I)&65535,vt=b.i(E)>>>16,Cr=b.i(E)&65535;w[2*I+2*E]+=_*Cr,K(w,2*I+2*E),w[2*I+2*E+1]+=S*Cr,K(w,2*I+2*E+1),w[2*I+2*E+1]+=_*vt,K(w,2*I+2*E+1),w[2*I+2*E+2]+=S*vt,K(w,2*I+2*E+2)}for(I=0;I<g;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=g;I<2*g;I++)w[I]=0;return new a(w,0)};function K(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function H(b,g){this.g=b,this.h=g}function se(b,g){if(O(g))throw Error("division by zero");if(O(b))return new H(y,y);if(F(b))return g=se(N(b),g),new H(N(g.g),N(g.h));if(F(g))return g=se(b,N(g)),new H(N(g.g),g.h);if(30<b.g.length){if(F(b)||F(g))throw Error("slowDivide_ only works with positive integers.");for(var w=A,I=g;0>=I.l(b);)w=Le(w),I=Le(I);var E=re(w,1),S=re(I,1);for(I=re(I,2),w=re(w,2);!O(I);){var _=S.add(I);0>=_.l(b)&&(E=E.add(w),S=_),I=re(I,1),w=re(w,1)}return g=G(b,E.j(g)),new H(E,g)}for(E=y;0<=b.l(g);){for(w=Math.max(1,Math.floor(b.m()/g.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=d(w),_=S.j(g);F(_)||0<_.l(b);)w-=I,S=d(w),_=S.j(g);O(S)&&(S=A),E=E.add(S),b=G(b,_)}return new H(E,b)}n.A=function(b){return se(this,b).h},n.and=function(b){for(var g=Math.max(this.g.length,b.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)&b.i(I);return new a(w,this.h&b.h)},n.or=function(b){for(var g=Math.max(this.g.length,b.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)|b.i(I);return new a(w,this.h|b.h)},n.xor=function(b){for(var g=Math.max(this.g.length,b.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)^b.i(I);return new a(w,this.h^b.h)};function Le(b){for(var g=b.g.length+1,w=[],I=0;I<g;I++)w[I]=b.i(I)<<1|b.i(I-1)>>>31;return new a(w,b.h)}function re(b,g){var w=g>>5;g%=32;for(var I=b.g.length-w,E=[],S=0;S<I;S++)E[S]=0<g?b.i(S+w)>>>g|b.i(S+w+1)<<32-g:b.i(S+w);return new a(E,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,zc=$p.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Yt=$p.Integer=a}).apply(typeof Fp<"u"?Fp:typeof self<"u"?self:typeof window<"u"?window:{});var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ct={};var Wc,BI,Xn,Kc,pi,ro,Hc,Qc,Yc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof no=="object"&&no];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var T=o[p];if(!(T in h))break e;h=h[T]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,p=!1,T={next:function(){if(!p&&h<o.length){var k=h++;return{value:u(k,o[k]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,h){return o.call.apply(o.bind,arguments)}function y(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),o.apply(u,T)}}return function(){return o.apply(u,arguments)}}function A(o,u,h){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,A.apply(null,arguments)}function P(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function O(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,T,k){for(var D=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)D[ie-2]=arguments[ie];return u.prototype[T].apply(p,D)}}function F(o){let u=o.length;if(0<u){let h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function N(o,u){for(let h=1;h<arguments.length;h++){let p=arguments[h];if(l(p)){let T=o.length||0,k=p.length||0;o.length=T+k;for(let D=0;D<k;D++)o[T+D]=p[D]}else o.push(p)}}class G{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function se(o){return se[" "](o),o}se[" "]=function(){};var Le=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function re(o,u,h){for(let p in o)u.call(h,o[p],p,o)}function b(o,u){for(let h in o)u.call(void 0,o[h],h,o)}function g(o){let u={};for(let h in o)u[h]=o[h];return u}let w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let h,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(h in p)o[h]=p[h];for(let k=0;k<w.length;k++)h=w[k],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function E(o){var u=1;o=o.split(":");let h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function S(o){c.setTimeout(()=>{throw o},0)}function _(){var o=ma;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class vt{constructor(){this.h=this.g=null}add(u,h){let p=Cr.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Cr=new G(()=>new Xy,o=>o.reset());class Xy{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Dr,Nr=!1,ma=new vt,ed=()=>{let o=c.Promise.resolve(void 0);Dr=()=>{o.then(Zy)}};var Zy=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){S(h)}var u=Cr;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Nr=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var e_=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Or(o,u){if(Pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Le){e:{try{se(u.nodeName);var T=!0;break e}catch{}T=!1}T||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:t_[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Or.aa.h.call(this)}}O(Or,Pe);var t_={2:"touch",3:"pen",4:"mouse"};Or.prototype.h=function(){Or.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var xr="closure_listenable_"+(1e6*Math.random()|0),n_=0;function r_(o,u,h,p,T){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=T,this.key=++n_,this.da=this.fa=!1}function Ji(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Xi(o){this.src=o,this.g={},this.h=0}Xi.prototype.add=function(o,u,h,p,T){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var D=ya(o,u,p,T);return-1<D?(u=o[D],h||(u.fa=!1)):(u=new r_(u,this.src,k,!!p,T),u.fa=h,o.push(u)),u};function ga(o,u){var h=u.type;if(h in o.g){var p=o.g[h],T=Array.prototype.indexOf.call(p,u,void 0),k;(k=0<=T)&&Array.prototype.splice.call(p,T,1),k&&(Ji(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ya(o,u,h,p){for(var T=0;T<o.length;++T){var k=o[T];if(!k.da&&k.listener==u&&k.capture==!!h&&k.ha==p)return T}return-1}var _a="closure_lm_"+(1e6*Math.random()|0),wa={};function td(o,u,h,p,T){if(p&&p.once)return rd(o,u,h,p,T);if(Array.isArray(u)){for(var k=0;k<u.length;k++)td(o,u[k],h,p,T);return null}return h=Ea(h),o&&o[xr]?o.K(u,h,d(p)?!!p.capture:!!p,T):nd(o,u,h,!1,p,T)}function nd(o,u,h,p,T,k){if(!u)throw Error("Invalid event type");var D=d(T)?!!T.capture:!!T,ie=Ia(o);if(ie||(o[_a]=ie=new Xi(o)),h=ie.add(u,h,p,D,k),h.proxy)return h;if(p=i_(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)e_||(T=D),T===void 0&&(T=!1),o.addEventListener(u.toString(),p,T);else if(o.attachEvent)o.attachEvent(sd(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function i_(){function o(h){return u.call(o.src,o.listener,h)}let u=s_;return o}function rd(o,u,h,p,T){if(Array.isArray(u)){for(var k=0;k<u.length;k++)rd(o,u[k],h,p,T);return null}return h=Ea(h),o&&o[xr]?o.L(u,h,d(p)?!!p.capture:!!p,T):nd(o,u,h,!0,p,T)}function id(o,u,h,p,T){if(Array.isArray(u))for(var k=0;k<u.length;k++)id(o,u[k],h,p,T);else p=d(p)?!!p.capture:!!p,h=Ea(h),o&&o[xr]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],h=ya(k,h,p,T),-1<h&&(Ji(k[h]),Array.prototype.splice.call(k,h,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=Ia(o))&&(u=o.g[u.toString()],o=-1,u&&(o=ya(u,h,p,T)),(h=-1<o?u[o]:null)&&va(h))}function va(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[xr])ga(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(sd(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=Ia(u))?(ga(h,o),h.h==0&&(h.src=null,u[_a]=null)):Ji(o)}}}function sd(o){return o in wa?wa[o]:wa[o]="on"+o}function s_(o,u){if(o.da)o=!0;else{u=new Or(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&va(o),o=h.call(p,u)}return o}function Ia(o){return o=o[_a],o instanceof Xi?o:null}var ba="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ea(o){return typeof o=="function"?o:(o[ba]||(o[ba]=function(u){return o.handleEvent(u)}),o[ba])}function Ce(){Bt.call(this),this.i=new Xi(this),this.M=this,this.F=null}O(Ce,Bt),Ce.prototype[xr]=!0,Ce.prototype.removeEventListener=function(o,u,h,p){id(this,o,u,h,p)};function Me(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Pe(u,o);else if(u instanceof Pe)u.target=u.target||o;else{var T=u;u=new Pe(p,o),I(u,T)}if(T=!0,h)for(var k=h.length-1;0<=k;k--){var D=u.g=h[k];T=Zi(D,p,!0,u)&&T}if(D=u.g=o,T=Zi(D,p,!0,u)&&T,T=Zi(D,p,!1,u)&&T,h)for(k=0;k<h.length;k++)D=u.g=h[k],T=Zi(D,p,!1,u)&&T}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)Ji(h[p]);delete o.g[u],o.h--}}this.F=null},Ce.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},Ce.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function Zi(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var T=!0,k=0;k<u.length;++k){var D=u[k];if(D&&!D.da&&D.capture==h){var ie=D.listener,Te=D.ha||D.src;D.fa&&ga(o.i,D),T=ie.call(Te,p)!==!1&&T}}return T&&!p.defaultPrevented}function od(o,u,h){if(typeof o=="function")h&&(o=A(o,h));else if(o&&typeof o.handleEvent=="function")o=A(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function ad(o){o.g=od(()=>{o.g=null,o.i&&(o.i=!1,ad(o))},o.l);let u=o.h;o.h=null,o.m.apply(null,u)}class o_ extends Bt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ad(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vr(o){Bt.call(this),this.h=o,this.g={}}O(Vr,Bt);var cd=[];function ud(o){re(o.g,function(u,h){this.g.hasOwnProperty(h)&&va(u)},o),o.g={}}Vr.prototype.N=function(){Vr.aa.N.call(this),ud(this)},Vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ta=c.JSON.stringify,a_=c.JSON.parse,c_=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Aa(){}Aa.prototype.h=null;function ld(o){return o.h||(o.h=o.i())}function hd(){}var Lr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sa(){Pe.call(this,"d")}O(Sa,Pe);function ka(){Pe.call(this,"c")}O(ka,Pe);var ln={},dd=null;function es(){return dd=dd||new Ce}ln.La="serverreachability";function fd(o){Pe.call(this,ln.La,o)}O(fd,Pe);function Mr(o){let u=es();Me(u,new fd(u))}ln.STAT_EVENT="statevent";function pd(o,u){Pe.call(this,ln.STAT_EVENT,o),this.stat=u}O(pd,Pe);function Fe(o){let u=es();Me(u,new pd(u,o))}ln.Ma="timingevent";function md(o,u){Pe.call(this,ln.Ma,o),this.size=u}O(md,Pe);function Fr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function $r(){this.g=!0}$r.prototype.xa=function(){this.g=!1};function u_(o,u,h,p,T,k){o.info(function(){if(o.g)if(k)for(var D="",ie=k.split("&"),Te=0;Te<ie.length;Te++){var X=ie[Te].split("=");if(1<X.length){var De=X[0];X=X[1];var Ne=De.split("_");D=2<=Ne.length&&Ne[1]=="type"?D+(De+"="+X+"&"):D+(De+"=redacted&")}}else D=null;else D=k;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+u+`
`+h+`
`+D})}function l_(o,u,h,p,T,k,D){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+u+`
`+h+`
`+k+" "+D})}function Bn(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+d_(o,h)+(p?" "+p:"")})}function h_(o,u){o.info(function(){return"TIMEOUT: "+u})}$r.prototype.info=function(){};function d_(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var k=T[0];if(k!="noop"&&k!="stop"&&k!="close")for(var D=1;D<T.length;D++)T[D]=""}}}}return Ta(h)}catch{return u}}var ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ra;function ns(){}O(ns,Aa),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},Ra=new ns;function qt(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new Vr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yd}function yd(){this.i=null,this.g="",this.h=!1}var _d={},Pa={};function Ca(o,u,h){o.L=1,o.v=os(It(u)),o.m=h,o.P=!0,wd(o,null)}function wd(o,u){o.F=Date.now(),rs(o),o.A=It(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Od(h.i,"t",p),o.C=0,h=o.j.J,o.h=new yd,o.g=Jd(o.j,h?u:null,!o.m),0<o.O&&(o.M=new o_(A(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(cd[0]=T.toString()),T=cd);for(var k=0;k<T.length;k++){var D=td(h,T[k],p||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Mr(),u_(o.i,o.u,o.A,o.l,o.R,o.m)}qt.prototype.ca=function(o){o=o.target;let u=this.M;u&&bt(o)==3?u.j():this.Y(o)},qt.prototype.Y=function(o){try{if(o==this.g)e:{let Ne=bt(this.g);var u=this.g.Ba();let Gn=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||Ud(this.g)))){this.J||Ne!=4||u==7||(u==8||0>=Gn?Mr(3):Mr(2)),Da(this);var h=this.g.Z();this.X=h;t:if(vd(this)){var p=Ud(this.g);o="";var T=p.length,k=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Ur(this);var D="";break t}this.h.i=new c.TextDecoder}for(u=0;u<T;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(k&&u==T-1)});p.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,l_(this.i,this.u,this.A,this.l,this.R,Ne,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,Te=this.g;if((ie=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(ie)){var X=ie;break t}}X=null}if(h=X)Bn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Na(this,h);else{this.o=!1,this.s=3,Fe(12),hn(this),Ur(this);break e}}if(this.P){h=!0;let nt;for(;!this.J&&this.C<D.length;)if(nt=f_(this,D),nt==Pa){Ne==4&&(this.s=4,Fe(14),h=!1),Bn(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==_d){this.s=4,Fe(15),Bn(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else Bn(this.i,this.l,nt,null),Na(this,nt);if(vd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||D.length!=0||this.h.h||(this.s=1,Fe(16),h=!1),this.o=this.o&&h,!h)Bn(this.i,this.l,D,"[Invalid Chunked Response]"),hn(this),Ur(this);else if(0<D.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Fa(De),De.M=!0,Fe(11))}}else Bn(this.i,this.l,D,null),Na(this,D);Ne==4&&hn(this),this.o&&!this.J&&(Ne==4?Kd(this.j,this):(this.o=!1,rs(this)))}else C_(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),hn(this),Ur(this)}}}catch{}finally{}};function vd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function f_(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?Pa:(h=Number(u.substring(h,p)),isNaN(h)?_d:(p+=1,p+h>u.length?Pa:(u=u.slice(p,p+h),o.C=p+h,u)))}qt.prototype.cancel=function(){this.J=!0,hn(this)};function rs(o){o.S=Date.now()+o.I,Id(o,o.I)}function Id(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Fr(A(o.ba,o),u)}function Da(o){o.B&&(c.clearTimeout(o.B),o.B=null)}qt.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(h_(this.i,this.A),this.L!=2&&(Mr(),Fe(17)),hn(this),this.s=2,Ur(this)):Id(this,this.S-o)};function Ur(o){o.j.G==0||o.J||Kd(o.j,o)}function hn(o){Da(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ud(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Na(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Oa(h.h,o))){if(!o.K&&Oa(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)hs(h),us(h);else break e;Ma(h),Fe(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=Fr(A(h.Za,h),6e3));if(1>=Td(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else fn(h,11)}else if((o.K||h.g==o)&&hs(h),!K(u))for(T=h.Da.g.parse(u),u=0;u<T.length;u++){let X=T[u];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];let De=X[3];De!=null&&(h.la=De,h.j.info("VER="+h.la));let Ne=X[4];Ne!=null&&(h.Aa=Ne,h.j.info("SVER="+h.Aa));let Gn=X[5];Gn!=null&&typeof Gn=="number"&&0<Gn&&(p=1.5*Gn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;let nt=o.g;if(nt){let fs=nt.g?nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fs){var k=p.h;k.g||fs.indexOf("spdy")==-1&&fs.indexOf("quic")==-1&&fs.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(xa(k,k.h),k.h=null))}if(p.D){let $a=nt.g?nt.g.getResponseHeader("X-HTTP-Session-Id"):null;$a&&(p.ya=$a,oe(p.I,p.D,$a))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var D=o;if(p.qa=Yd(p,p.J?p.ia:null,p.W),D.K){Ad(p.h,D);var ie=D,Te=p.L;Te&&(ie.I=Te),ie.B&&(Da(ie),rs(ie)),p.g=D}else zd(p);0<h.i.length&&ls(h)}else X[0]!="stop"&&X[0]!="close"||fn(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?fn(h,7):La(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}Mr(4)}catch{}}var p_=class{constructor(o,u){this.g=o,this.map=u}};function bd(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ed(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Td(o){return o.h?1:o.g?o.g.size:0}function Oa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function xa(o,u){o.g?o.g.add(u):o.h=u}function Ad(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}bd.prototype.cancel=function(){if(this.i=Sd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function Sd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(let h of o.g.values())u=u.concat(h.D);return u}return F(o.i)}function m_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function g_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(let p in o)u[h++]=p;return u}}}function kd(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=g_(o),p=m_(o),T=p.length,k=0;k<T;k++)u.call(void 0,p[k],h&&h[k],o)}var Rd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function y_(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),T=null;if(0<=p){var k=o[h].substring(0,p);T=o[h].substring(p+1)}else k=o[h];u(k,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function dn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof dn){this.h=o.h,is(this,o.j),this.o=o.o,this.g=o.g,ss(this,o.s),this.l=o.l;var u=o.i,h=new jr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Pd(this,h),this.m=o.m}else o&&(u=String(o).match(Rd))?(this.h=!1,is(this,u[1]||"",!0),this.o=Br(u[2]||""),this.g=Br(u[3]||"",!0),ss(this,u[4]),this.l=Br(u[5]||"",!0),Pd(this,u[6]||"",!0),this.m=Br(u[7]||"")):(this.h=!1,this.i=new jr(null,this.h))}dn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(qr(u,Cd,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(qr(u,Cd,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(qr(h,h.charAt(0)=="/"?v_:w_,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",qr(h,b_)),o.join("")};function It(o){return new dn(o)}function is(o,u,h){o.j=h?Br(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ss(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Pd(o,u,h){u instanceof jr?(o.i=u,E_(o.i,o.h)):(h||(u=qr(u,I_)),o.i=new jr(u,o.h))}function oe(o,u,h){o.i.set(u,h)}function os(o){return oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Br(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function qr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,__),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function __(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Cd=/[#\/\?@]/g,w_=/[#\?:]/g,v_=/[#\?]/g,I_=/[#\?@]/g,b_=/#/g;function jr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function jt(o){o.g||(o.g=new Map,o.h=0,o.i&&y_(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=jr.prototype,n.add=function(o,u){jt(this),this.i=null,o=qn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Dd(o,u){jt(o),u=qn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Nd(o,u){return jt(o),u=qn(o,u),o.g.has(u)}n.forEach=function(o,u){jt(this),this.g.forEach(function(h,p){h.forEach(function(T){o.call(u,T,p,this)},this)},this)},n.na=function(){jt(this);let o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){let T=o[p];for(let k=0;k<T.length;k++)h.push(u[p])}return h},n.V=function(o){jt(this);let u=[];if(typeof o=="string")Nd(this,o)&&(u=u.concat(this.g.get(qn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return jt(this),this.i=null,o=qn(this,o),Nd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Od(o,u,h){Dd(o,u),0<h.length&&(o.i=null,o.g.set(qn(o,u),F(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];let k=encodeURIComponent(String(p)),D=this.V(p);for(p=0;p<D.length;p++){var T=k;D[p]!==""&&(T+="="+encodeURIComponent(String(D[p]))),o.push(T)}}return this.i=o.join("&")};function qn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function E_(o,u){u&&!o.j&&(jt(o),o.i=null,o.g.forEach(function(h,p){var T=p.toLowerCase();p!=T&&(Dd(this,p),Od(this,T,h))},o)),o.j=u}function T_(o,u){let h=new $r;if(c.Image){let p=new Image;p.onload=P(Gt,h,"TestLoadImage: loaded",!0,u,p),p.onerror=P(Gt,h,"TestLoadImage: error",!1,u,p),p.onabort=P(Gt,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=P(Gt,h,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function A_(o,u){let h=new $r,p=new AbortController,T=setTimeout(()=>{p.abort(),Gt(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(k=>{clearTimeout(T),k.ok?Gt(h,"TestPingServer: ok",!0,u):Gt(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),Gt(h,"TestPingServer: error",!1,u)})}function Gt(o,u,h,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(h)}catch{}}function S_(){this.g=new c_}function k_(o,u,h){let p=h||"";try{kd(o,function(T,k){let D=T;d(T)&&(D=Ta(T)),u.push(p+k+"="+encodeURIComponent(D))})}catch(T){throw u.push(p+"type="+encodeURIComponent("_badmap")),T}}function Gr(o){this.l=o.Ub||null,this.j=o.eb||!1}O(Gr,Aa),Gr.prototype.g=function(){return new as(this.l,this.j)},Gr.prototype.i=function(o){return function(){return o}}({});function as(o,u){Ce.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(as,Ce),n=as.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Wr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Wr(this)),this.g&&(this.readyState=3,Wr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xd(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function xd(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?zr(this):Wr(this),this.readyState==3&&xd(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,zr(this))},n.Qa=function(o){this.g&&(this.response=o,zr(this))},n.ga=function(){this.g&&zr(this)};function zr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Wr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Wr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Vd(o){let u="";return re(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function Va(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Vd(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):oe(o,u,h))}function he(o){Ce.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(he,Ce);var R_=/^https?$/i,P_=["POST","PUT"];n=he.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ra.g(),this.v=this.o?ld(this.o):ld(Ra),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){Ld(this,k);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)h.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(let k of p.keys())h.set(k,p.get(k));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),T=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(P_,u,void 0))||p||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[k,D]of h)this.g.setRequestHeader(k,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$d(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){Ld(this,k)}};function Ld(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Md(o),cs(o)}function Md(o){o.A||(o.A=!0,Me(o,"complete"),Me(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Me(this,"complete"),Me(this,"abort"),cs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),he.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Fd(this):this.bb())},n.bb=function(){Fd(this)};function Fd(o){if(o.h&&typeof a<"u"&&(!o.v[1]||bt(o)!=4||o.Z()!=2)){if(o.u&&bt(o)==4)od(o.Ea,0,o);else if(Me(o,"readystatechange"),bt(o)==4){o.h=!1;try{let D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=D===0){var T=String(o.D).match(Rd)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),p=!R_.test(T?T.toLowerCase():"")}h=p}if(h)Me(o,"complete"),Me(o,"success");else{o.m=6;try{var k=2<bt(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",Md(o)}}finally{cs(o)}}}}function cs(o,u){if(o.g){$d(o);let h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Me(o,"ready");try{h.onreadystatechange=p}catch{}}}function $d(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function bt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),a_(u)}};function Ud(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function C_(o){let u={};o=(o.g&&2<=bt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(K(o[p]))continue;var h=E(o[p]);let T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let k=u[T]||[];u[T]=k,k.push(h)}b(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kr(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Bd(o){this.Aa=0,this.i=[],this.j=new $r,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kr("baseRetryDelayMs",5e3,o),this.cb=Kr("retryDelaySeedMs",1e4,o),this.Wa=Kr("forwardChannelMaxRetries",2,o),this.wa=Kr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new bd(o&&o.concurrentRequestLimit),this.Da=new S_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Bd.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,p){Fe(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Yd(this,null,this.W),ls(this)};function La(o){if(qd(o),o.G==3){var u=o.U++,h=It(o.I);if(oe(h,"SID",o.K),oe(h,"RID",u),oe(h,"TYPE","terminate"),Hr(o,h),u=new qt(o,o.j,u),u.L=2,u.v=os(It(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Jd(u.j,null),u.g.ea(u.v)),u.F=Date.now(),rs(u)}Qd(o)}function us(o){o.g&&(Fa(o),o.g.cancel(),o.g=null)}function qd(o){us(o),o.u&&(c.clearTimeout(o.u),o.u=null),hs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ls(o){if(!Ed(o.h)&&!o.s){o.s=!0;var u=o.Ga;Dr||ed(),Nr||(Dr(),Nr=!0),ma.add(u,o),o.B=0}}function D_(o,u){return Td(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Fr(A(o.Ga,o,u),Hd(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let T=new qt(this,this.j,o),k=this.o;if(this.S&&(k?(k=g(k),I(k,this.S)):k=this.S),this.m!==null||this.O||(T.H=k,k=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Gd(this,T,u),h=It(this.I),oe(h,"RID",o),oe(h,"CVER",22),this.D&&oe(h,"X-HTTP-Session-Id",this.D),Hr(this,h),k&&(this.O?u="headers="+encodeURIComponent(String(Vd(k)))+"&"+u:this.m&&Va(h,this.m,k)),xa(this.h,T),this.Ua&&oe(h,"TYPE","init"),this.P?(oe(h,"$req",u),oe(h,"SID","null"),T.T=!0,Ca(T,h,null)):Ca(T,h,u),this.G=2}}else this.G==3&&(o?jd(this,o):this.i.length==0||Ed(this.h)||jd(this))};function jd(o,u){var h;u?h=u.l:h=o.U++;let p=It(o.I);oe(p,"SID",o.K),oe(p,"RID",h),oe(p,"AID",o.T),Hr(o,p),o.m&&o.o&&Va(p,o.m,o.o),h=new qt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Gd(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),xa(o.h,h),Ca(h,p,u)}function Hr(o,u){o.H&&re(o.H,function(h,p){oe(u,p,h)}),o.l&&kd({},function(h,p){oe(u,p,h)})}function Gd(o,u,h){h=Math.min(o.i.length,h);var p=o.l?A(o.l.Na,o.l,o):null;e:{var T=o.i;let k=-1;for(;;){let D=["count="+h];k==-1?0<h?(k=T[0].g,D.push("ofs="+k)):k=0:D.push("ofs="+k);let ie=!0;for(let Te=0;Te<h;Te++){let X=T[Te].g,De=T[Te].map;if(X-=k,0>X)k=Math.max(0,T[Te].g-100),ie=!1;else try{k_(De,D,"req"+X+"_")}catch{p&&p(De)}}if(ie){p=D.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function zd(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Dr||ed(),Nr||(Dr(),Nr=!0),ma.add(u,o),o.v=0}}function Ma(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Fr(A(o.Fa,o),Hd(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Wd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Fr(A(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),us(this),Wd(this))};function Fa(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Wd(o){o.g=new qt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=It(o.qa);oe(u,"RID","rpc"),oe(u,"SID",o.K),oe(u,"AID",o.T),oe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&oe(u,"TO",o.ja),oe(u,"TYPE","xmlhttp"),Hr(o,u),o.m&&o.o&&Va(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=os(It(u)),h.m=null,h.P=!0,wd(h,o)}n.Za=function(){this.C!=null&&(this.C=null,us(this),Ma(this),Fe(19))};function hs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Kd(o,u){var h=null;if(o.g==u){hs(o),Fa(o),o.g=null;var p=2}else if(Oa(o.h,u))h=u.D,Ad(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var T=o.B;p=es(),Me(p,new md(p,h)),ls(o)}else zd(o);else if(T=u.s,T==3||T==0&&0<u.X||!(p==1&&D_(o,u)||p==2&&Ma(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),T){case 1:fn(o,5);break;case 4:fn(o,10);break;case 3:fn(o,6);break;default:fn(o,2)}}}function Hd(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function fn(o,u){if(o.j.info("Error code "+u),u==2){var h=A(o.fb,o),p=o.Xa;let T=!p;p=new dn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||is(p,"https"),os(p),T?T_(p.toString(),h):A_(p.toString(),h)}else Fe(2);o.G=0,o.l&&o.l.sa(u),Qd(o),qd(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function Qd(o){if(o.G=0,o.ka=[],o.l){let u=Sd(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,F(o.i),o.i.length=0),o.l.ra()}}function Yd(o,u,h){var p=h instanceof dn?It(h):new dn(h);if(p.g!="")u&&(p.g=u+"."+p.g),ss(p,p.s);else{var T=c.location;p=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;var k=new dn(null);p&&is(k,p),u&&(k.g=u),T&&ss(k,T),h&&(k.l=h),p=k}return h=o.D,u=o.ya,h&&u&&oe(p,h,u),oe(p,"VER",o.la),Hr(o,p),p}function Jd(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new he(new Gr({eb:h})):new he(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xd(){}n=Xd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ds(){}ds.prototype.g=function(o,u){return new ze(o,u)};function ze(o,u){Ce.call(this),this.g=new Bd(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!K(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new jn(this)}O(ze,Ce),ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){La(this.g)},ze.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ta(o),o=h);u.i.push(new p_(u.Ya++,o)),u.G==3&&ls(u)},ze.prototype.N=function(){this.g.l=null,delete this.j,La(this.g),delete this.g,ze.aa.N.call(this)};function Zd(o){Sa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(let h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}O(Zd,Sa);function ef(){ka.call(this),this.status=1}O(ef,ka);function jn(o){this.g=o}O(jn,Xd),jn.prototype.ua=function(){Me(this.g,"a")},jn.prototype.ta=function(o){Me(this.g,new Zd(o))},jn.prototype.sa=function(o){Me(this.g,new ef)},jn.prototype.ra=function(){Me(this.g,"b")},ds.prototype.createWebChannel=ds.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,Yc=Ct.createWebChannelTransport=function(){return new ds},Qc=Ct.getStatEventTarget=function(){return es()},Hc=Ct.Event=ln,ro=Ct.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,pi=Ct.ErrorCode=ts,gd.COMPLETE="complete",Kc=Ct.EventType=gd,hd.EventType=Lr,Lr.OPEN="a",Lr.CLOSE="b",Lr.ERROR="c",Lr.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,Xn=Ct.WebChannel=hd,BI=Ct.FetchXmlHttpFactory=Gr,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,Wc=Ct.XhrIo=he}).apply(typeof no<"u"?no:typeof self<"u"?self:typeof window<"u"?window:{});var Up="@firebase/firestore";var be=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");var br="11.0.2";var An=new zt("@firebase/firestore");function Zn(){return An.logLevel}function V(n,...e){if(An.logLevel<=z.DEBUG){let t=e.map(Ll);An.debug(`Firestore (${br}): ${n}`,...t)}}function Dt(n,...e){if(An.logLevel<=z.ERROR){let t=e.map(Ll);An.error(`Firestore (${br}): ${n}`,...t)}}function or(n,...e){if(An.logLevel<=z.WARN){let t=e.map(Ll);An.warn(`Firestore (${br}): ${n}`,...t)}}function Ll(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function B(n="Unexpected state"){let e=`FIRESTORE (${br}) INTERNAL ASSERTION FAILED: `+n;throw Dt(e),new Error(e)}function J(n,e){n||B()}function j(n,e){return n}var R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},x=class extends $e{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var tt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var lo=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},eu=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}},tu=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},nu=class{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),s=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tt,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tt)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new lo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new be(e)}},ru=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=be.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}},iu=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ru(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}},su=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},ou=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){J(this.o===void 0);let r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.R=t.token,new su(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function qI(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var ho=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=qI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}};function Q(n,e){return n<e?-1:n>e?1:0}function ar(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var ke=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var q=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new ke(0,0))}static max(){return new n(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var fo=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(),r===void 0?r=e.length-t:r>e.length-t&&B(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},ae=class n extends fo{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new x(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},jI=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Ke=class n extends fo{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return jI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new x(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new x(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new x(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var U=class n{constructor(e){this.path=e}static fromPath(e){return new n(ae.fromString(e))}static fromName(e){return new n(ae.fromString(e).popFirst(5))}static empty(){return new n(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new ae(e.slice()))}};var au=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};au.UNKNOWN_ID=-1;function GI(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new ke(t+1,0):new ke(t,r));return new Sn(i,U.empty(),e)}function zI(n){return new Sn(n.readTime,n.key,-1)}var Sn=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(q.min(),U.empty(),-1)}static max(){return new n(q.max(),U.empty(),-1)}};function WI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}var KI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",cu=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Er(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==KI)throw n;V("LocalStore","Unexpectedly lost primary lease")}var C=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),c=0;for(let l=0;l<s;l++){let d=l;t(e[d]).next(f=>{a[d]=f,++c,c===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};function HI(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Tr(n){return n.name==="IndexedDbTransactionError"}var cr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};cr.oe=-1;function Ui(n){return n==null}function bi(n){return n===0&&1/n==-1/0}function QI(n){return typeof n=="number"&&Number.isInteger(n)&&!bi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function YI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Bp(e)),e=JI(n.get(t),e);return Bp(e)}function JI(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Bp(n){return n+""}var XI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ok=[...XI,"documentOverlays"],ZI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],eb=ZI,tb=[...eb,"indexConfiguration","indexState","indexEntries"];var ak=[...tb,"globals"];function qp(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function on(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bm(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var de=class n{constructor(e,t){this.comparator=e,this.root=t||gt.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rr(this.root,e,this.comparator,!1)}getReverseIterator(){return new rr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rr(this.root,e,this.comparator,!0)}},rr=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},gt=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();let e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}};gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,t,r,i,s){return this}insert(e,t,r){return new gt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Ee=class n{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new po(this.data.getIterator())}getIteratorFrom(e){return new po(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},po=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var et=class n{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new n([])}unionWith(e){let t=new Ee(Ke.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ar(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var mo=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var xe=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mo("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};xe.EMPTY_BYTE_STRING=new xe("");var nb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(n){if(J(!!n),typeof n=="string"){let e=0,t=nb.exec(n);if(J(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ot(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}function Ml(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ko(n){let e=n.mapValue.fields.__previous_value__;return Ml(e)?Ko(e):e}function Ei(n){let e=Nt(n.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}var uu=class{constructor(e,t,r,i,s,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}},go=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ml(n)?4:Tm(n)?9007199254740991:Em(n)?10:11:B()}function _t(n,e){if(n===e)return!0;let t=Zt(n);if(t!==Zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ei(n).isEqual(Ei(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=Nt(i.timestampValue),c=Nt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ot(i.bytesValue).isEqual(Ot(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ce(i.geoPointValue.latitude)===ce(s.geoPointValue.latitude)&&ce(i.geoPointValue.longitude)===ce(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ce(i.integerValue)===ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=ce(i.doubleValue),c=ce(s.doubleValue);return a===c?bi(a)===bi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return ar(n.arrayValue.values||[],e.arrayValue.values||[],_t);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(qp(a)!==qp(c))return!1;for(let l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!_t(a[l],c[l])))return!1;return!0}(n,e);default:return B()}}function Ti(n,e){return(n.values||[]).find(t=>_t(t,e))!==void 0}function ur(n,e){if(n===e)return 0;let t=Zt(n),r=Zt(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(s,a){let c=ce(s.integerValue||s.doubleValue),l=ce(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return jp(n.timestampValue,e.timestampValue);case 4:return jp(Ei(n),Ei(e));case 5:return Q(n.stringValue,e.stringValue);case 6:return function(s,a){let c=Ot(s),l=Ot(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let c=s.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){let f=Q(c[d],l[d]);if(f!==0)return f}return Q(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let c=Q(ce(s.latitude),ce(a.latitude));return c!==0?c:Q(ce(s.longitude),ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Gp(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,l,d,f;let y=s.fields||{},A=a.fields||{},P=(c=y.value)===null||c===void 0?void 0:c.arrayValue,O=(l=A.value)===null||l===void 0?void 0:l.arrayValue,F=Q(((d=P?.values)===null||d===void 0?void 0:d.length)||0,((f=O?.values)===null||f===void 0?void 0:f.length)||0);return F!==0?F:Gp(P,O)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===io.mapValue&&a===io.mapValue)return 0;if(s===io.mapValue)return 1;if(a===io.mapValue)return-1;let c=s.fields||{},l=Object.keys(c),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let y=0;y<l.length&&y<f.length;++y){let A=Q(l[y],f[y]);if(A!==0)return A;let P=ur(c[l[y]],d[f[y]]);if(P!==0)return P}return Q(l.length,f.length)}(n.mapValue,e.mapValue);default:throw B()}}function jp(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);let t=Nt(n),r=Nt(e),i=Q(t.seconds,r.seconds);return i!==0?i:Q(t.nanos,r.nanos)}function Gp(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=ur(t[i],r[i]);if(s)return s}return Q(t.length,r.length)}function lr(n){return lu(n)}function lu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=Nt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ot(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=lu(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${lu(t.fields[a])}`;return i+"}"}(n.mapValue):B()}function ao(n){switch(Zt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=Ko(n);return e?16+ao(e):16;case 5:return 2*n.stringValue.length;case 6:return Ot(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ao(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return on(r.fields,(s,a)=>{i+=s.length+ao(a)}),i}(n.mapValue);default:throw B()}}function zp(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function hu(n){return!!n&&"integerValue"in n}function Fl(n){return!!n&&"arrayValue"in n}function Wp(n){return!!n&&"nullValue"in n}function Kp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function co(n){return!!n&&"mapValue"in n}function Em(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function yi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return on(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=yi(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Tm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var qe=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!co(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(t)}setAll(e){let t=Ke.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=yi(a):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());co(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _t(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];co(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){on(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(yi(this.value))}};function Am(n){let e=[];return on(n.fields,(t,r)=>{let i=new Ke([t]);if(co(r)){let s=Am(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new et(e)}var Qe=class n{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new n(e,0,q.min(),q.min(),q.min(),qe.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,q.min(),q.min(),qe.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,q.min(),q.min(),qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var hr=class{constructor(e,t){this.position=e,this.inclusive=t}};function Hp(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=ur(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qp(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_t(n.position[t],e.position[t]))return!1;return!0}var dr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function rb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var yo=class{},ye=class n extends yo{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new fu(e,t,r):t==="array-contains"?new gu(e,r):t==="in"?new yu(e,r):t==="not-in"?new _u(e,r):t==="array-contains-any"?new wu(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new pu(e,r):new mu(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ur(t,this.value)):t!==null&&Zt(this.value)===Zt(t)&&this.matchesComparison(ur(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},ot=class n extends yo{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return Sm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function Sm(n){return n.op==="and"}function km(n){return ib(n)&&Sm(n)}function ib(n){for(let e of n.filters)if(e instanceof ot)return!1;return!0}function du(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+lr(n.value);if(km(n))return n.filters.map(e=>du(e)).join(",");{let e=n.filters.map(t=>du(t)).join(",");return`${n.op}(${e})`}}function Rm(n,e){return n instanceof ye?function(r,i){return i instanceof ye&&r.op===i.op&&r.field.isEqual(i.field)&&_t(r.value,i.value)}(n,e):n instanceof ot?function(r,i){return i instanceof ot&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Rm(a,i.filters[c]),!0):!1}(n,e):void B()}function Pm(n){return n instanceof ye?function(t){return`${t.field.canonicalString()} ${t.op} ${lr(t.value)}`}(n):n instanceof ot?function(t){return t.op.toString()+" {"+t.getFilters().map(Pm).join(" ,")+"}"}(n):"Filter"}var fu=class extends ye{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){let t=U.comparator(e.key,this.key);return this.matchesComparison(t)}},pu=class extends ye{constructor(e,t){super(e,"in",t),this.keys=Cm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},mu=class extends ye{constructor(e,t){super(e,"not-in",t),this.keys=Cm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Cm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}var gu=class extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Fl(t)&&Ti(t.arrayValue,this.value)}},yu=class extends ye{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Ti(this.value.arrayValue,t)}},_u=class extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Ti(this.value.arrayValue,t)}},wu=class extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Fl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ti(this.value.arrayValue,r))}};var vu=class{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}};function Yp(n,e=null,t=[],r=[],i=null,s=null,a=null){return new vu(n,e,t,r,i,s,a)}function $l(n){let e=j(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>du(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ui(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>lr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>lr(r)).join(",")),e.ue=t}return e.ue}function Ul(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!rb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Rm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Qp(n.startAt,e.startAt)&&Qp(n.endAt,e.endAt)}function Iu(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var kn=class{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function sb(n,e,t,r,i,s,a,c){return new kn(n,e,t,r,i,s,a,c)}function Ho(n){return new kn(n)}function Jp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Dm(n){return n.collectionGroup!==null}function _i(n){let e=j(n);if(e.ce===null){e.ce=[];let t=new Set;for(let s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ee(Ke.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new dr(s,r))}),t.has(Ke.keyField().canonicalString())||e.ce.push(new dr(Ke.keyField(),r))}return e.ce}function yt(n){let e=j(n);return e.le||(e.le=ob(e,_i(n))),e.le}function ob(n,e){if(n.limitType==="F")return Yp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new dr(i.field,s)});let t=n.endAt?new hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hr(n.startAt.position,n.startAt.inclusive):null;return Yp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function bu(n,e){let t=n.filters.concat([e]);return new kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function _o(n,e,t){return new kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qo(n,e){return Ul(yt(n),yt(e))&&n.limitType===e.limitType}function Nm(n){return`${$l(yt(n))}|lt:${n.limitType}`}function er(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Pm(i)).join(", ")}]`),Ui(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>lr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>lr(i)).join(",")),`Target(${r})`}(yt(n))}; limitType=${n.limitType})`}function Yo(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):U.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of _i(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){let d=Hp(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,_i(r),i)||r.endAt&&!function(a,c,l){let d=Hp(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,_i(r),i))}(n,e)}function ab(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Om(n){return(e,t)=>{let r=!1;for(let i of _i(n)){let s=cb(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cb(n,e,t){let r=n.field.isKeyField()?U.comparator(e.key,t.key):function(s,a,c){let l=a.data.field(s),d=c.data.field(s);return l!==null&&d!==null?ur(l,d):B()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}var xt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){on(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return bm(this.inner)}size(){return this.innerSize}};var ub=new de(U.comparator);function Vt(){return ub}var xm=new de(U.comparator);function gi(...n){let e=xm;for(let t of n)e=e.insert(t.key,t);return e}function Vm(n){let e=xm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function En(){return wi()}function Lm(){return wi()}function wi(){return new xt(n=>n.toString(),(n,e)=>n.isEqual(e))}var lb=new de(U.comparator),hb=new Ee(U.comparator);function W(...n){let e=hb;for(let t of n)e=e.add(t);return e}var db=new Ee(Q);function fb(){return db}function Bl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bi(e)?"-0":e}}function Mm(n){return{integerValue:""+n}}function pb(n,e){return QI(e)?Mm(e):Bl(n,e)}var fr=class{constructor(){this._=void 0}};function mb(n,e,t){return n instanceof Rn?function(i,s){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ml(s)&&(s=Ko(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof en?$m(n,e):n instanceof tn?Um(n,e):function(i,s){let a=Fm(i,s),c=Xp(a)+Xp(i.Pe);return hu(a)&&hu(i.Pe)?Mm(c):Bl(i.serializer,c)}(n,e)}function gb(n,e,t){return n instanceof en?$m(n,e):n instanceof tn?Um(n,e):t}function Fm(n,e){return n instanceof pr?function(r){return hu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var Rn=class extends fr{},en=class extends fr{constructor(e){super(),this.elements=e}};function $m(n,e){let t=Bm(e);for(let r of n.elements)t.some(i=>_t(i,r))||t.push(r);return{arrayValue:{values:t}}}var tn=class extends fr{constructor(e){super(),this.elements=e}};function Um(n,e){let t=Bm(e);for(let r of n.elements)t=t.filter(i=>!_t(i,r));return{arrayValue:{values:t}}}var pr=class extends fr{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function Xp(n){return ce(n.integerValue||n.doubleValue)}function Bm(n){return Fl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var Ai=class{constructor(e,t){this.field=e,this.transform=t}};function yb(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof en&&i instanceof en||r instanceof tn&&i instanceof tn?ar(r.elements,i.elements,_t):r instanceof pr&&i instanceof pr?_t(r.Pe,i.Pe):r instanceof Rn&&i instanceof Rn}(n.transform,e.transform)}var Eu=class{constructor(e,t){this.version=e,this.transformResults=t}},je=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function uo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var mr=class{};function qm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Si(n.key,je.none()):new Pn(n.key,n.data,je.none());{let t=n.data,r=qe.empty(),i=new Ee(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new wt(n.key,r,new et(i.toArray()),je.none())}}function _b(n,e,t){n instanceof Pn?function(i,s,a){let c=i.value.clone(),l=em(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof wt?function(i,s,a){if(!uo(i.precondition,s))return void s.convertToUnknownDocument(a.version);let c=em(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(jm(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function vi(n,e,t,r){return n instanceof Pn?function(s,a,c,l){if(!uo(s.precondition,a))return c;let d=s.value.clone(),f=tm(s.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof wt?function(s,a,c,l){if(!uo(s.precondition,a))return c;let d=tm(s.fieldTransforms,l,a),f=a.data;return f.setAll(jm(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(s,a,c){return uo(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function wb(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=Fm(r.transform,i||null);s!=null&&(t===null&&(t=qe.empty()),t.set(r.field,s))}return t||null}function Zp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ar(r,i,(s,a)=>yb(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Pn=class extends mr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},wt=class extends mr{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function jm(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function em(n,e,t){let r=new Map;J(n.length===t.length);for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,gb(a,c,t[i]))}return r}function tm(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,mb(s,a,e))}return r}var Si=class extends mr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},wo=class extends mr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Tu=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&_b(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=vi(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=vi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=Lm();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;let l=qm(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&ar(this.mutations,e.mutations,(t,r)=>Zp(t,r))&&ar(this.baseMutations,e.baseMutations,(t,r)=>Zp(t,r))}},Au=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){J(e.mutations.length===r.length);let i=function(){return lb}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var Su=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var ku=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var me,Y;function Gm(n){switch(n){default:return B();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function zm(n){if(n===void 0)return Dt("GRPC error has no .code"),R.UNKNOWN;switch(n){case me.OK:return R.OK;case me.CANCELLED:return R.CANCELLED;case me.UNKNOWN:return R.UNKNOWN;case me.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case me.INTERNAL:return R.INTERNAL;case me.UNAVAILABLE:return R.UNAVAILABLE;case me.UNAUTHENTICATED:return R.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case me.NOT_FOUND:return R.NOT_FOUND;case me.ALREADY_EXISTS:return R.ALREADY_EXISTS;case me.PERMISSION_DENIED:return R.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case me.ABORTED:return R.ABORTED;case me.OUT_OF_RANGE:return R.OUT_OF_RANGE;case me.UNIMPLEMENTED:return R.UNIMPLEMENTED;case me.DATA_LOSS:return R.DATA_LOSS;default:return B()}}(Y=me||(me={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";var nm=null;function vb(){return new TextEncoder}var Ib=new Yt([4294967295,4294967295],0);function rm(n){let e=vb().encode(n),t=new zc;return t.update(e),new Uint8Array(t.digest())}function im(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Yt([t,r],0),new Yt([i,s],0)]}var Ru=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Tn(`Invalid padding: ${t}`);if(r<0)throw new Tn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Tn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Tn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Yt.fromNumber(this.Te)}Ee(e,t,r){let i=e.add(t.multiply(Yt.fromNumber(r)));return i.compare(Ib)===1&&(i=new Yt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;let t=rm(e),[r,i]=im(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;let t=rm(e),[r,i]=im(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},Tn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var vo=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,ki.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(q.min(),i,new de(Q),Vt(),W())}},ki=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,W(),W(),W())}};var ir=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},Io=class{constructor(e,t){this.targetId=e,this.me=t}},bo=class{constructor(e,t,r=xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},Eo=class{constructor(){this.fe=0,this.ge=sm(),this.pe=xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=W(),t=W(),r=W();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:B()}}),new ki(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=sm()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},Pu=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=Vt(),this.qe=so(),this.Qe=so(),this.Ke=new de(Q)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:B()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){let t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){let s=i.target;if(Iu(s))if(r===0){let a=new U(s.path);this.We(t,a,Qe.newNoDocument(a,q.min()))}else J(r===1);else{let a=this.Ze(t);if(a!==r){let c=this.Xe(e),l=c?this.et(c,e,a):1;if(l!==0){this.He(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}nm?.tt(function(f,y,A,P,O){var F,N,G,K,H,se;let Le={localCacheCount:f,existenceFilterCount:y.count,databaseId:A.database,projectId:A.projectId},re=y.unchangedNames;return re&&(Le.bloomFilter={applied:O===0,hashCount:(F=re?.hashCount)!==null&&F!==void 0?F:0,bitmapLength:(K=(G=(N=re?.bits)===null||N===void 0?void 0:N.bitmap)===null||G===void 0?void 0:G.length)!==null&&K!==void 0?K:0,padding:(se=(H=re?.bits)===null||H===void 0?void 0:H.padding)!==null&&se!==void 0?se:0,mightContain:b=>{var g;return(g=P?.mightContain(b))!==null&&g!==void 0&&g}}),Le}(a,e.me,this.Le.nt(),c,l))}}}}Xe(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,c;try{a=Ot(r).toUint8Array()}catch(l){if(l instanceof mo)return or("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ru(a,i,s)}catch(l){return or(l instanceof Tn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.We(t,s,null),i++)}),i}it(e){let t=new Map;this.Be.forEach((s,a)=>{let c=this.Ye(a);if(c){if(s.current&&Iu(c.target)){let l=new U(c.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,Qe.newNoDocument(l,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=W();this.Qe.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{let d=this.Ye(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));let i=new vo(e,t,this.Ke,this.ke,r);return this.ke=Vt(),this.qe=so(),this.Qe=so(),this.Ke=new de(Q),i}Ue(e,t){if(!this.je(e))return;let r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;let i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Eo,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Ee(Q),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ee(Q),this.qe=this.qe.insert(e,t)),t}je(e){let t=this.Ye(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Eo),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function so(){return new de(U.comparator)}function sm(){return new de(U.comparator)}var bb={asc:"ASCENDING",desc:"DESCENDING"},Eb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tb={and:"AND",or:"OR"},Cu=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function Du(n,e){return n.useProto3Json||Ui(e)?e:{value:e}}function To(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ab(n,e){return To(n,e.toTimestamp())}function He(n){return J(!!n),q.fromTimestamp(function(t){let r=Nt(t);return new ke(r.seconds,r.nanos)}(n))}function ql(n,e){return Nu(n,e).canonicalString()}function Nu(n,e){let t=function(i){return new ae(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Km(n){let e=ae.fromString(n);return J(Zm(e)),e}function Ao(n,e){return ql(n.databaseId,e.path)}function Ii(n,e){let t=Km(e);if(t.get(1)!==n.databaseId.projectId)throw new x(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(Qm(t))}function Hm(n,e){return ql(n.databaseId,e)}function Sb(n){let e=Km(n);return e.length===4?ae.emptyPath():Qm(e)}function Ou(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qm(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function om(n,e,t){return{name:Ao(n,e),fields:t.value.mapValue.fields}}function kb(n,e){return"found"in e?function(r,i){J(!!i.found),i.found.name,i.found.updateTime;let s=Ii(r,i.found.name),a=He(i.found.updateTime),c=i.found.createTime?He(i.found.createTime):q.min(),l=new qe({mapValue:{fields:i.found.fields}});return Qe.newFoundDocument(s,a,c,l)}(n,e):"missing"in e?function(r,i){J(!!i.missing),J(!!i.readTime);let s=Ii(r,i.missing),a=He(i.readTime);return Qe.newNoDocument(s,a)}(n,e):B()}function Rb(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(J(f===void 0||typeof f=="string"),xe.fromBase64String(f||"")):(J(f===void 0||f instanceof Buffer||f instanceof Uint8Array),xe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){let f=d.code===void 0?R.UNKNOWN:zm(d.code);return new x(f,d.message||"")}(a);t=new bo(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=Ii(n,r.document.name),s=He(r.document.updateTime),a=r.document.createTime?He(r.document.createTime):q.min(),c=new qe({mapValue:{fields:r.document.fields}}),l=Qe.newFoundDocument(i,s,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new ir(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=Ii(n,r.document),s=r.readTime?He(r.readTime):q.min(),a=Qe.newNoDocument(i,s),c=r.removedTargetIds||[];t=new ir([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=Ii(n,r.document),s=r.removedTargetIds||[];t=new ir([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new ku(i,s),c=r.targetId;t=new Io(c,a)}}return t}function Ym(n,e){let t;if(e instanceof Pn)t={update:om(n,e.key,e.value)};else if(e instanceof Si)t={delete:Ao(n,e.key)};else if(e instanceof wt)t={update:om(n,e.key,e.data),updateMask:Mb(e.fieldMask)};else{if(!(e instanceof wo))return B();t={verify:Ao(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let c=a.transform;if(c instanceof Rn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof en)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof tn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof pr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw B()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ab(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:B()}(n,e.precondition)),t}function Pb(n,e){return n&&n.length>0?(J(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?He(i.updateTime):He(s);return a.isEqual(q.min())&&(a=He(s)),new Eu(a,i.transformResults||[])}(t,e))):[]}function Cb(n,e){return{documents:[Hm(n,e.path)]}}function Db(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Hm(n,i);let s=function(d){if(d.length!==0)return Xm(ot.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(d){if(d.length!==0)return d.map(f=>function(A){return{field:tr(A.field),direction:xb(A.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let c=Du(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:i}}function Nb(n){let e=Sb(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){J(r===1);let f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(y){let A=Jm(y);return A instanceof ot&&km(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(A=>function(O){return new dr(nr(O.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(A))}(t.orderBy));let c=null;t.limit&&(c=function(y){let A;return A=typeof y=="object"?y.value:y,Ui(A)?null:A}(t.limit));let l=null;t.startAt&&(l=function(y){let A=!!y.before,P=y.values||[];return new hr(P,A)}(t.startAt));let d=null;return t.endAt&&(d=function(y){let A=!y.before,P=y.values||[];return new hr(P,A)}(t.endAt)),sb(e,i,a,s,c,"F",l,d)}function Ob(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=nr(t.unaryFilter.field);return ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=nr(t.unaryFilter.field);return ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=nr(t.unaryFilter.field);return ye.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=nr(t.unaryFilter.field);return ye.create(a,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(n):n.fieldFilter!==void 0?function(t){return ye.create(nr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ot.create(t.compositeFilter.filters.map(r=>Jm(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B()}}(t.compositeFilter.op))}(n):B()}function xb(n){return bb[n]}function Vb(n){return Eb[n]}function Lb(n){return Tb[n]}function tr(n){return{fieldPath:n.canonicalString()}}function nr(n){return Ke.fromServerFormat(n.fieldPath)}function Xm(n){return n instanceof ye?function(t){if(t.op==="=="){if(Kp(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NAN"}};if(Wp(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kp(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NOT_NAN"}};if(Wp(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tr(t.field),op:Vb(t.op),value:t.value}}}(n):n instanceof ot?function(t){let r=t.getFilters().map(i=>Xm(i));return r.length===1?r[0]:{compositeFilter:{op:Lb(t.op),filters:r}}}(n):B()}function Mb(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Ri=class n{constructor(e,t,r,i,s=q.min(),a=q.min(),c=xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var xu=class{constructor(e){this.ht=e}};function Fb(n){let e=Nb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_o(e,e.limit,"L"):e}var So=class{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(ce(e.integerValue));else if("doubleValue"in e){let r=ce(e.doubleValue);isNaN(r)?this.Rt(t,13):(this.Rt(t,15),bi(r)?t.Vt(0):t.Vt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Rt(t,20),typeof r=="string"&&(r=Nt(r)),t.ft(`${r.seconds||""}`),t.Vt(r.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(Ot(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Rt(t,45),t.Vt(r.latitude||0),t.Vt(r.longitude||0)}else"mapValue"in e?Tm(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):Em(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):B()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let r=e.fields||{};this.Rt(t,55);for(let i of Object.keys(r))this.gt(i,t),this.dt(r[i],t)}bt(e,t){var r,i;let s=e.fields||{};this.Rt(t,53);let a="value",c=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Rt(t,15),t.Vt(ce(c)),this.gt(a,t),this.dt(s[a],t)}vt(e,t){let r=e.values||[];this.Rt(t,50);for(let i of r)this.dt(i,t)}St(e,t){this.Rt(t,37),U.fromName(e).path.forEach(r=>{this.Rt(t,60),this.Ct(r,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}};So.Ft=new So;var Vu=class{constructor(){this.ln=new Lu}addToCollectionParentIndex(e,t){return this.ln.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Sn.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Sn.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}},Lu=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ee(ae.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ee(ae.comparator)).toArray()}};var uk=new Uint8Array(0);var am={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ze=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};Ze.DEFAULT_COLLECTION_PERCENTILE=10,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ze.DEFAULT=new Ze(41943040,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ze.DISABLED=new Ze(-1,0,0);var Pi=class n{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new n(0)}static Qn(){return new n(-1)}};function cm([n,e],[t,r]){let i=Q(n,t);return i===0?Q(e,r):i}var Mu=class{constructor(e){this.Gn=e,this.buffer=new Ee(cm),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();cm(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},Fu=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Tr(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Er(t)}await this.Yn(3e5)})}},$u=class{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(cr.oe);let r=new Mu(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(am)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),am):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,s,a,c,l,d,f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,a=Date.now(),this.nthSequenceNumber(e,i))).next(y=>(r=y,c=Date.now(),this.removeTargets(e,r,t))).next(y=>(s=y,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(d=Date.now(),Zn()<=z.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${y} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:y})))}};function $b(n,e){return new $u(n,e)}var Uu=class{constructor(){this.changes=new xt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Bu=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var qu=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&vi(r.mutation,i,et.empty(),ke.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){let i=En();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=gi();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=En();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=Vt(),a=wi(),c=function(){return wi()}();return t.forEach((l,d)=>{let f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof wt)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),vi(f.mutation,d,f.mutation.getFieldMask(),ke.now())):a.set(d.key,et.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var y;return c.set(d,new Bu(f,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(e,t){let r=wi(),i=new de((a,c)=>a-c),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let c of a)c.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let f=r.get(l)||et.empty();f=c.applyToLocalView(d,f),r.set(l,f);let y=(i.get(c.batchId)||W()).add(l);i=i.insert(c.batchId,y)})}).next(()=>{let a=[],c=i.getReverseIterator();for(;c.hasNext();){let l=c.getNext(),d=l.key,f=l.value,y=Lm();f.forEach(A=>{if(!s.has(A)){let P=qm(t.get(A),r.get(A));P!==null&&y.set(A,P),s=s.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Dm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):C.resolve(En()),c=-1,l=s;return a.next(d=>C.forEach(d,(f,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),s.get(f)?C.resolve():this.remoteDocumentCache.getEntry(e,f).next(A=>{l=l.insert(f,A)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,W())).next(f=>({batchId:c,changes:Vm(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let i=gi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=gi();return this.indexManager.getCollectionParents(e,s).next(c=>C.forEach(c,l=>{let d=function(y,A){return new kn(A,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((y,A)=>{a=a.insert(y,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{let f=d.getKey();a.get(f)===null&&(a=a.insert(f,Qe.newInvalidDocument(f)))});let c=gi();return a.forEach((l,d)=>{let f=s.get(l);f!==void 0&&vi(f.mutation,d,et.empty(),ke.now()),Yo(t,d)&&(c=c.insert(l,d))}),c})}};var ju=class{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return C.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:He(i.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:Fb(i.bundledQuery),readTime:He(i.readTime)}}(t)),C.resolve()}};var Gu=class{constructor(){this.overlays=new de(U.comparator),this.Er=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){let r=En();return C.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Tt(e,t,s)}),C.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){let i=En(),s=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){let l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new de((d,f)=>d-f),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=En(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}let c=En(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=i)););return C.resolve(c)}Tt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Su(t,r));let s=this.Er.get(t);s===void 0&&(s=W(),this.Er.set(t,s)),this.Er.set(t,s.add(r.key))}};var zu=class{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}};var Ci=class{constructor(){this.dr=new Ee(ge.Ar),this.Rr=new Ee(ge.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){let r=new ge(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new ge(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){let t=new U(new ae([])),r=new ge(t,e),i=new ge(t,e+1),s=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new U(new ae([])),r=new ge(t,e),i=new ge(t,e+1),s=W();return this.Rr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new ge(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},ge=class{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return U.comparator(e.key,t.key)||Q(e.br,t.br)}static Vr(e,t){return Q(e.br,t.br)||U.comparator(e.key,t.key)}};var Wu=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Ee(ge.Ar)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new Tu(s,t,r,i);this.mutationQueue.push(a);for(let c of i)this.vr=this.vr.add(new ge(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Fr(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new ge(t,0),i=new ge(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],a=>{let c=this.Cr(a.br);s.push(c)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ee(Q);return t.forEach(i=>{let s=new ge(i,0),a=new ge(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],c=>{r=r.add(c.br)})}),C.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;U.isDocumentKey(s)||(s=s.child(""));let a=new ge(new U(s),0),c=new Ee(Q);return this.vr.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.br)),!0)},a),C.resolve(this.Mr(c))}Mr(e){let t=[];return e.forEach(r=>{let i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){J(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return C.forEach(t.mutations,i=>{let s=new ge(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){let r=new ge(t,0),i=this.vr.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Ku=class{constructor(e){this.Nr=e,this.docs=function(){return new de(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Qe.newInvalidDocument(t))}getEntries(e,t){let r=Vt();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Qe.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Vt(),a=t.path,c=new U(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){let{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||WI(zI(f),r)<=0||(i.has(f.key)||Yo(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,t,r,i){B()}Lr(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Hu(this)}getSize(e){return C.resolve(this.size)}},Hu=class extends Uu{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}};var Qu=class{constructor(e){this.persistence=e,this.Br=new xt(t=>$l(t),Ul),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.kr=0,this.qr=new Ci,this.targetCount=0,this.Qr=Pi.qn()}forEachTarget(e,t){return this.Br.forEach((r,i)=>t(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),C.resolve()}Un(e){this.Br.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new Pi(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Un(t),C.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){let r=this.Br.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),C.resolve()}getMatchingKeysForTargetId(e,t){let r=this.qr.Sr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.qr.containsKey(t))}};var ko=class{constructor(e,t){this.Kr={},this.overlays={},this.$r=new cr(0),this.Ur=!1,this.Ur=!0,this.Wr=new zu,this.referenceDelegate=e(this),this.Gr=new Qu(this),this.indexManager=new Vu,this.remoteDocumentCache=function(i){return new Ku(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new xu(t),this.jr=new ju(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Gu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new Wu(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);let i=new Yu(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return C.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}},Yu=class extends cu{constructor(e){super(),this.currentSequenceNumber=e}},Ju=class n{constructor(e){this.persistence=e,this.Zr=new Ci,this.Xr=null}static ei(e){return new n(e)}get ti(){if(this.Xr)return this.Xr;throw B()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),C.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.ti,r=>{let i=U.fromPath(r);return this.ni(e,i).next(s=>{s||t.removeEntry(i,q.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return C.or([()=>C.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}},Ro=class n{constructor(e,t){this.persistence=e,this.ri=new xt(r=>YI(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=$b(this,t)}static ei(e,t){return new n(e,t)}Hr(){}Jr(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return C.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?C.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(c=>{c||(r++,s.removeEntry(a,q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),C.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ao(e.data.value)),t}ir(e,t,r){return C.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.ri.get(t);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var Xu=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=W(),i=W();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var Zu=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var el=class{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return yf()?8:HI(ve())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new Zu;return this.ts(e,t,a).next(c=>{if(s.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>s.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(Zn()<=z.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",er(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),C.resolve()):(Zn()<=z.DEBUG&&V("QueryEngine","Query:",er(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Zn()<=z.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",er(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yt(t))):C.resolve())}Xi(e,t){if(Jp(t))return C.resolve(null);let r=yt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=_o(t,null,"F"),r=yt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=W(...s);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.rs(t,c);return this.ss(t,d,a,l.readTime)?this.Xi(e,_o(t,null,"F")):this.os(e,d,t,l)}))})))}es(e,t,r,i){return Jp(t)||i.isEqual(q.min())?C.resolve(null):this.Zi.getDocuments(e,r).next(s=>{let a=this.rs(t,s);return this.ss(t,a,r,i)?C.resolve(null):(Zn()<=z.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),er(t)),this.os(e,a,t,GI(i,-1)).next(c=>c))})}rs(e,t){let r=new Ee(Om(e));return t.forEach((i,s)=>{Yo(e,s)&&(r=r.add(s))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,r){return Zn()<=z.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",er(t)),this.Zi.getDocumentsMatchingQuery(e,t,Sn.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var tl=class{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new de(Q),this.cs=new xt(s=>$l(s),Ul),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qu(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}};function Ub(n,e,t,r){return new tl(n,e,t,r)}async function eg(n,e){let t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],c=[],l=W();for(let d of i){a.push(d.batchId);for(let f of d.mutations)l=l.add(f.key)}for(let d of s){c.push(d.batchId);for(let f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:c}))})})}function Bb(n,e){let t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){let y=d.batch,A=y.keys(),P=C.resolve();return A.forEach(O=>{P=P.next(()=>f.getEntry(l,O)).next(F=>{let N=d.docVersions.get(O);J(N!==null),F.version.compareTo(N)<0&&(y.applyToRemoteDocument(F,d),F.isValidDocument()&&(F.setReadTime(d.commitVersion),f.addEntry(F)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(l,y))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=W();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function tg(n){let e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function qb(n,e){let t=j(n),r=e.snapshotVersion,i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;let c=[];e.targetChanges.forEach((f,y)=>{let A=i.get(y);if(!A)return;c.push(t.Gr.removeMatchingKeys(s,f.removedDocuments,y).next(()=>t.Gr.addMatchingKeys(s,f.addedDocuments,y)));let P=A.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?P=P.withResumeToken(xe.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,r)),i=i.insert(y,P),function(F,N,G){return F.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(A,P,f)&&c.push(t.Gr.updateTargetData(s,P))});let l=Vt(),d=W();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(jb(s,a,e.documentUpdates).next(f=>{l=f.Is,d=f.Es})),!r.isEqual(q.min())){let f=t.Gr.getLastRemoteSnapshotVersion(s).next(y=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return C.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.us=i,s))}function jb(n,e,t){let r=W(),i=W();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Vt();return t.forEach((c,l)=>{let d=s.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Is:a,Es:i}})}function Gb(n,e){let t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zb(n,e){let t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):t.Gr.allocateTargetId(r).next(a=>(i=new Ri(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function nl(n,e,t){let r=j(n),i=r.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Tr(a))throw a;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function um(n,e,t){let r=j(n),i=q.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){let y=j(l),A=y.cs.get(f);return A!==void 0?C.resolve(y.us.get(A)):y.Gr.getTargetData(d,f)}(r,a,yt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?i:q.min(),t?s:W())).next(c=>(Wb(r,ab(e),c),{documents:c,ds:s})))}function Wb(n,e,t){let r=n.ls.get(e)||q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ls.set(e,r)}var Po=class{constructor(){this.activeTargetIds=fb()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var rl=class{constructor(){this._o=new Po,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Po,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var il=class{uo(e){}shutdown(){}};var Co=class{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.To)e(0)}Po(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var oo=null;function Jc(){return oo===null?oo=function(){return 268435456+Math.round(2147483648*Math.random())}():oo++,"0x"+oo.toString(16)}var Kb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var sl=class{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}};var Oe="WebChannelConnection",ol=class extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,r,i,s,a){let c=Jc(),l=this.No(t,r.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);let d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,s,a),this.Bo(t,l,d,i).then(f=>(V("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw or("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",i),f})}ko(t,r,i,s,a,c){return this.Oo(t,r,i,s,a)}Lo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+br}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,r){let i=Kb[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,i){let s=Jc();return new Promise((a,c)=>{let l=new Wc;l.setWithCredentials(!0),l.listenOnce(Kc.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case pi.NO_ERROR:let f=l.getResponseJson();V(Oe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case pi.TIMEOUT:V(Oe,`RPC '${e}' ${s} timed out`),c(new x(R.DEADLINE_EXCEEDED,"Request time out"));break;case pi.HTTP_ERROR:let y=l.getStatus();if(V(Oe,`RPC '${e}' ${s} failed with status:`,y,"response text:",l.getResponseText()),y>0){let A=l.getResponseJson();Array.isArray(A)&&(A=A[0]);let P=A?.error;if(P&&P.status&&P.message){let O=function(N){let G=N.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(G)>=0?G:R.UNKNOWN}(P.status);c(new x(O,P.message))}else c(new x(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new x(R.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{V(Oe,`RPC '${e}' ${s} completed.`)}});let d=JSON.stringify(i);V(Oe,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",d,r,15)})}qo(e,t,r){let i=Jc(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Yc(),c=Qc(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let f=s.join("");V(Oe,`Creating RPC '${e}' stream ${i}: ${f}`,l);let y=a.createWebChannel(f,l),A=!1,P=!1,O=new sl({Eo:N=>{P?V(Oe,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(A||(V(Oe,`Opening RPC '${e}' stream ${i} transport.`),y.open(),A=!0),V(Oe,`RPC '${e}' stream ${i} sending:`,N),y.send(N))},Ao:()=>y.close()}),F=(N,G,K)=>{N.listen(G,H=>{try{K(H)}catch(se){setTimeout(()=>{throw se},0)}})};return F(y,Xn.EventType.OPEN,()=>{P||(V(Oe,`RPC '${e}' stream ${i} transport opened.`),O.So())}),F(y,Xn.EventType.CLOSE,()=>{P||(P=!0,V(Oe,`RPC '${e}' stream ${i} transport closed`),O.Do())}),F(y,Xn.EventType.ERROR,N=>{P||(P=!0,or(Oe,`RPC '${e}' stream ${i} transport errored:`,N),O.Do(new x(R.UNAVAILABLE,"The operation could not be completed")))}),F(y,Xn.EventType.MESSAGE,N=>{var G;if(!P){let K=N.data[0];J(!!K);let H=K,se=H?.error||((G=H[0])===null||G===void 0?void 0:G.error);if(se){V(Oe,`RPC '${e}' stream ${i} received error:`,se);let Le=se.status,re=function(w){let I=me[w];if(I!==void 0)return zm(I)}(Le),b=se.message;re===void 0&&(re=R.INTERNAL,b="Unknown error status: "+Le+" with message "+se.message),P=!0,O.Do(new x(re,b)),y.close()}else V(Oe,`RPC '${e}' stream ${i} received:`,K),O.vo(K)}}),F(c,Hc.STAT_EVENT,N=>{N.stat===ro.PROXY?V(Oe,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===ro.NOPROXY&&V(Oe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{O.bo()},0),O}};function Xc(){return typeof document<"u"?document:null}function Jo(n){return new Cu(n,!0)}var Di=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}};var Do=class{constructor(e,t,r,i,s,a,c,l){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Di(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{let i=new x(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,t){let r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},al=class extends Do{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=Rb(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?He(a.readTime):q.min()}(e);return this.listener.R_(t,r)}V_(e){let t={};t.database=Ou(this.serializer),t.addTarget=function(s,a){let c,l=a.target;if(c=Iu(l)?{documents:Cb(s,l)}:{query:Db(s,l).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Wm(s,a.resumeToken);let d=Du(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=To(s,a.snapshotVersion.toTimestamp());let d=Du(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);let r=Ob(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){let t={};t.database=Ou(this.serializer),t.removeTarget=e,this.c_(t)}},cl=class extends Do{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return J(!!e.streamToken),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();let t=Pb(e.writeResults,e.commitTime),r=He(e.commitTime);return this.listener.y_(r,t)}w_(){let e={};e.database=Ou(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Ym(this.serializer,r))};this.c_(t)}};var ul=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,Nu(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(R.UNKNOWN,s.toString())})}ko(e,t,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Nu(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(R.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}},ll=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Dt(t),this.C_=!1):V("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}};var hl=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{Dn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){let d=j(l);d.k_.add(4),await Bi(d),d.K_.set("Unknown"),d.k_.delete(4),await Xo(d)}(this))})}),this.K_=new ll(r,i)}};async function Xo(n){if(Dn(n))for(let e of n.q_)await e(!0)}async function Bi(n){for(let e of n.q_)await e(!1)}function ng(n,e){let t=j(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Wl(t)?zl(t):Ar(t).s_()&&Gl(t,e))}function jl(n,e){let t=j(n),r=Ar(t);t.B_.delete(e),r.s_()&&rg(t,e),t.B_.size===0&&(r.s_()?r.a_():Dn(t)&&t.K_.set("Unknown"))}function Gl(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ar(n).V_(e)}function rg(n,e){n.U_.xe(e),Ar(n).m_(e)}function zl(n){n.U_=new Pu({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Ar(n).start(),n.K_.F_()}function Wl(n){return Dn(n)&&!Ar(n).i_()&&n.B_.size>0}function Dn(n){return j(n).k_.size===0}function ig(n){n.U_=void 0}async function Hb(n){n.K_.set("Online")}async function Qb(n){n.B_.forEach((e,t)=>{Gl(n,e)})}async function Yb(n,e){ig(n),Wl(n)?(n.K_.O_(e),zl(n)):n.K_.set("Unknown")}async function Jb(n,e,t){if(n.K_.set("Online"),e instanceof bo&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let c of s.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.B_.delete(c),i.U_.removeTarget(c))}(n,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await No(n,r)}else if(e instanceof ir?n.U_.$e(e):e instanceof Io?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(q.min()))try{let r=await tg(n.localStore);t.compareTo(r)>=0&&await function(s,a){let c=s.U_.it(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let f=s.B_.get(d);f&&s.B_.set(d,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{let f=s.B_.get(l);if(!f)return;s.B_.set(l,f.withResumeToken(xe.EMPTY_BYTE_STRING,f.snapshotVersion)),rg(s,l);let y=new Ri(f.target,l,d,f.sequenceNumber);Gl(s,y)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await No(n,r)}}async function No(n,e,t){if(!Tr(e))throw e;n.k_.add(1),await Bi(n),n.K_.set("Offline"),t||(t=()=>tg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Xo(n)})}function sg(n,e){return e().catch(t=>No(n,t,e))}async function Zo(n){let e=j(n),t=nn(e),r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Xb(e);)try{let i=await Gb(e.localStore,r);if(i===null){e.L_.length===0&&t.a_();break}r=i.batchId,Zb(e,i)}catch(i){await No(e,i)}og(e)&&ag(e)}function Xb(n){return Dn(n)&&n.L_.length<10}function Zb(n,e){n.L_.push(e);let t=nn(n);t.s_()&&t.f_&&t.g_(e.mutations)}function og(n){return Dn(n)&&!nn(n).i_()&&n.L_.length>0}function ag(n){nn(n).start()}async function eE(n){nn(n).w_()}async function tE(n){let e=nn(n);for(let t of n.L_)e.g_(t.mutations)}async function nE(n,e,t){let r=n.L_.shift(),i=Au.from(r,e,t);await sg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Zo(n)}async function rE(n,e){e&&nn(n).f_&&await async function(r,i){if(function(a){return Gm(a)&&a!==R.ABORTED}(i.code)){let s=r.L_.shift();nn(r).__(),await sg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Zo(r)}}(n,e),og(n)&&ag(n)}async function lm(n,e){let t=j(n);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");let r=Dn(t);t.k_.add(3),await Bi(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Xo(t)}async function iE(n,e){let t=j(n);e?(t.k_.delete(2),await Xo(t)):e||(t.k_.add(2),await Bi(t),t.K_.set("Unknown"))}function Ar(n){return n.W_||(n.W_=function(t,r,i){let s=j(t);return s.b_(),new al(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:Hb.bind(null,n),mo:Qb.bind(null,n),po:Yb.bind(null,n),R_:Jb.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Wl(n)?zl(n):n.K_.set("Unknown")):(await n.W_.stop(),ig(n))})),n.W_}function nn(n){return n.G_||(n.G_=function(t,r,i){let s=j(t);return s.b_(),new cl(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:eE.bind(null,n),po:rE.bind(null,n),p_:tE.bind(null,n),y_:nE.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Zo(n)):(await n.G_.stop(),n.L_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}var dl=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,c=new n(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Kl(n,e){if(Dt("AsyncQueue",`${e}: ${n}`),Tr(n))return new x(R.UNAVAILABLE,`${e}: ${n}`);throw n}var Oo=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=gi(),this.sortedSet=new de(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var xo=class{constructor(){this.z_=new de(U.comparator)}track(e){let t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):B():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}},gr=class n{constructor(e,t,r,i,s,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new n(e,t,Oo.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var fl=class{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}},pl=class{constructor(){this.queries=hm(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){let i=j(t),s=i.queries;i.queries=hm(),s.forEach((a,c)=>{for(let l of c.J_)l.onError(r)})})(this,new x(R.ABORTED,"Firestore shutting down"))}};function hm(){return new xt(n=>Nm(n),Qo)}async function Hl(n,e){let t=j(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new fl,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let c=Kl(a,`Initialization of query '${er(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&Yl(t)}async function Ql(n,e){let t=j(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function sE(n,e){let t=j(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let c of a.J_)c.ta(i)&&(r=!0);a.H_=i}}r&&Yl(t)}function oE(n,e,t){let r=j(n),i=r.queries.get(e);if(i)for(let s of i.J_)s.onError(t);r.queries.delete(e)}function Yl(n){n.X_.forEach(e=>{e.next()})}var ml,dm;(dm=ml||(ml={})).na="default",dm.Cache="cache";var Ni=class{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new gr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;let r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ml.Cache}};var Vo=class{constructor(e){this.key=e}},Lo=class{constructor(e){this.key=e}},gl=class{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=W(),this.mutatedKeys=W(),this.Va=Om(e),this.ma=new Oo(this.Va)}get fa(){return this.da}ga(e,t){let r=t?t.pa:new xo,i=t?t.ma:this.ma,s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{let A=i.get(f),P=Yo(this.query,y)?y:null,O=!!A&&this.mutatedKeys.has(A.key),F=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations),N=!1;A&&P?A.data.isEqual(P.data)?O!==F&&(r.track({type:3,doc:P}),N=!0):this.ya(A,P)||(r.track({type:2,doc:P}),N=!0,(l&&this.Va(P,l)>0||d&&this.Va(P,d)<0)&&(c=!0)):!A&&P?(r.track({type:0,doc:P}),N=!0):A&&!P&&(r.track({type:1,doc:A}),N=!0,(l||d)&&(c=!0)),N&&(P?(a=a.add(P),s=F?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{ma:a,pa:r,ss:c,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let a=e.pa.j_();a.sort((f,y)=>function(P,O){let F=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return F(P)-F(O)}(f.type,y.type)||this.Va(f.doc,y.doc)),this.wa(r),i=i!=null&&i;let c=t&&!i?this.Sa():[],l=this.Ra.size===0&&this.current&&!i?1:0,d=l!==this.Aa;return this.Aa=l,a.length!==0||d?{snapshot:new gr(this.query,e.ma,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new xo,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=W(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});let t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new Lo(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Vo(r))}),t}va(e){this.da=e.ds,this.Ra=W();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return gr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}},yl=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},_l=class{constructor(e){this.key=e,this.Fa=!1}},wl=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new xt(c=>Nm(c),Qo),this.Oa=new Map,this.Na=new Set,this.La=new de(U.comparator),this.Ba=new Map,this.ka=new Ci,this.qa={},this.Qa=new Map,this.Ka=Pi.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}};async function aE(n,e,t=!0){let r=fg(n),i,s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await cg(r,e,t,!0),i}async function cE(n,e){let t=fg(n);await cg(t,e,!0,!1)}async function cg(n,e,t,r){let i=await zb(n.localStore,yt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t),c;return r&&(c=await uE(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&ng(n.remoteStore,i),c}async function uE(n,e,t,r,i){n.Ua=(y,A,P)=>async function(F,N,G,K){let H=N.view.ga(G);H.ss&&(H=await um(F.localStore,N.query,!1).then(({documents:b})=>N.view.ga(b,H)));let se=K&&K.targetChanges.get(N.targetId),Le=K&&K.targetMismatches.get(N.targetId)!=null,re=N.view.applyChanges(H,F.isPrimaryClient,se,Le);return pm(F,N.targetId,re.ba),re.snapshot}(n,y,A,P);let s=await um(n.localStore,e,!0),a=new gl(e,s.ds),c=a.ga(s.documents),l=ki.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,l);pm(n,t,d.ba);let f=new yl(e,t,a);return n.xa.set(e,f),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),d.snapshot}async function lE(n,e,t){let r=j(n),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(a=>!Qo(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await nl(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&jl(r.remoteStore,i.targetId),vl(r,i.targetId)}).catch(Er)):(vl(r,i.targetId),await nl(r.localStore,i.targetId,!0))}async function hE(n,e){let t=j(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),jl(t.remoteStore,r.targetId))}async function dE(n,e,t){let r=wE(n);try{let i=await function(a,c){let l=j(a),d=ke.now(),f=c.reduce((P,O)=>P.add(O.key),W()),y,A;return l.persistence.runTransaction("Locally write mutations","readwrite",P=>{let O=Vt(),F=W();return l.hs.getEntries(P,f).next(N=>{O=N,O.forEach((G,K)=>{K.isValidDocument()||(F=F.add(G))})}).next(()=>l.localDocuments.getOverlayedDocuments(P,O)).next(N=>{y=N;let G=[];for(let K of c){let H=wb(K,y.get(K.key).overlayedDocument);H!=null&&G.push(new wt(K.key,H,Am(H.value.mapValue),je.exists(!0)))}return l.mutationQueue.addMutationBatch(P,d,G,c)}).next(N=>{A=N;let G=N.applyToLocalDocumentSet(y,F);return l.documentOverlayCache.saveOverlays(P,N.batchId,G)})}).then(()=>({batchId:A.batchId,changes:Vm(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let d=a.qa[a.currentUser.toKey()];d||(d=new de(Q)),d=d.insert(c,l),a.qa[a.currentUser.toKey()]=d}(r,i.batchId,t),await qi(r,i.changes),await Zo(r.remoteStore)}catch(i){let s=Kl(i,"Failed to persist write");t.reject(s)}}async function ug(n,e){let t=j(n);try{let r=await qb(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Ba.get(s);a&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?J(a.Fa):i.removedDocuments.size>0&&(J(a.Fa),a.Fa=!1))}),await qi(t,r,e)}catch(r){await Er(r)}}function fm(n,e,t){let r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.xa.forEach((s,a)=>{let c=a.view.ea(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){let l=j(a);l.onlineState=c;let d=!1;l.queries.forEach((f,y)=>{for(let A of y.J_)A.ea(c)&&(d=!0)}),d&&Yl(l)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fE(n,e,t){let r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Ba.get(e),s=i&&i.key;if(s){let a=new de(U.comparator);a=a.insert(s,Qe.newNoDocument(s,q.min()));let c=W().add(s),l=new vo(q.min(),new Map,new de(Q),a,c);await ug(r,l),r.La=r.La.remove(s),r.Ba.delete(e),Jl(r)}else await nl(r.localStore,e,!1).then(()=>vl(r,e,t)).catch(Er)}async function pE(n,e){let t=j(n),r=e.batch.batchId;try{let i=await Bb(t.localStore,e);hg(t,r,null),lg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await qi(t,i)}catch(i){await Er(i)}}async function mE(n,e,t){let r=j(n);try{let i=await function(a,c){let l=j(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(y=>(J(y!==null),f=y.keys(),l.mutationQueue.removeMutationBatch(d,y))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);hg(r,e,t),lg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await qi(r,i)}catch(i){await Er(i)}}function lg(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function hg(n,e,t){let r=j(n),i=r.qa[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function vl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||dg(n,r)})}function dg(n,e){n.Na.delete(e.path.canonicalString());let t=n.La.get(e);t!==null&&(jl(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Jl(n))}function pm(n,e,t){for(let r of t)r instanceof Vo?(n.ka.addReference(r.key,e),gE(n,r)):r instanceof Lo?(V("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||dg(n,r.key)):B()}function gE(n,e){let t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(V("SyncEngine","New document in limbo: "+t),n.Na.add(r),Jl(n))}function Jl(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){let e=n.Na.values().next().value;n.Na.delete(e);let t=new U(ae.fromString(e)),r=n.Ka.next();n.Ba.set(r,new _l(t)),n.La=n.La.insert(t,r),ng(n.remoteStore,new Ri(yt(Ho(t.path)),r,"TargetPurposeLimboResolution",cr.oe))}}async function qi(n,e,t){let r=j(n),i=[],s=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{a.push(r.Ua(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){let y=d?!d.fromCache:(f=t?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(d){i.push(d);let y=Xu.zi(l.targetId,d);s.push(y)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(l,d){let f=j(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>C.forEach(d,A=>C.forEach(A.Wi,P=>f.persistence.referenceDelegate.addReference(y,A.targetId,P)).next(()=>C.forEach(A.Gi,P=>f.persistence.referenceDelegate.removeReference(y,A.targetId,P)))))}catch(y){if(!Tr(y))throw y;V("LocalStore","Failed to update sequence numbers: "+y)}for(let y of d){let A=y.targetId;if(!y.fromCache){let P=f.us.get(A),O=P.snapshotVersion,F=P.withLastLimboFreeSnapshotVersion(O);f.us=f.us.insert(A,F)}}}(r.localStore,s))}async function yE(n,e){let t=j(n);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());let r=await eg(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(c=>{c.forEach(l=>{l.reject(new x(R.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(t,r.Ts)}}function _E(n,e){let t=j(n),r=t.Ba.get(e);if(r&&r.Fa)return W().add(r.key);{let i=W(),s=t.Oa.get(e);if(!s)return i;for(let a of s){let c=t.xa.get(a);i=i.unionWith(c.view.fa)}return i}}function fg(n){let e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ug.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_E.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fE.bind(null,e),e.Ma.R_=sE.bind(null,e.eventManager),e.Ma.Wa=oE.bind(null,e.eventManager),e}function wE(n){let e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mE.bind(null,e),e}var yr=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jo(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Ub(this.persistence,new el,e.initialUser,this.serializer)}ja(e){return new ko(Ju.ei,this.serializer)}za(e){return new rl}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};yr.provider={build:()=>new yr};var Il=class extends yr{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){J(this.persistence.referenceDelegate instanceof Ro);let r=this.persistence.referenceDelegate.garbageCollector;return new Fu(r,e.asyncQueue,t)}ja(e){let t=this.cacheSizeBytes!==void 0?Ze.withCacheSize(this.cacheSizeBytes):Ze.DEFAULT;return new ko(r=>Ro.ei(r,t),this.serializer)}};var Oi=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yE.bind(null,this.syncEngine),await iE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pl}()}createDatastore(e){let t=Jo(e.databaseInfo.databaseId),r=function(s){return new ol(s)}(e.databaseInfo);return function(s,a,c,l){return new ul(s,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new hl(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>fm(this.syncEngine,t,0),function(){return Co.p()?new Co:new il}())}createSyncEngine(e,t){return function(i,s,a,c,l,d,f){let y=new wl(i,s,a,c,l,d);return f&&(y.$a=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=j(i);V("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Bi(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Oi.provider={build:()=>new Oi};var xi=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var bl=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new x(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(i,s){let a=j(i),c={documents:s.map(y=>Ao(a.serializer,y))},l=await a.ko("BatchGetDocuments",a.serializer.databaseId,ae.emptyPath(),c,s.length),d=new Map;l.forEach(y=>{let A=kb(a.serializer,y);d.set(A.key.toString(),A)});let f=[];return s.forEach(y=>{let A=d.get(y.toString());J(!!A),f.push(A)}),f}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Si(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{let i=U.fromPath(r);this.mutations.push(new wo(i,this.precondition(i)))}),await async function(r,i){let s=j(r),a={writes:i.map(c=>Ym(s.serializer,c))};await s.Oo("Commit",s.serializer.databaseId,ae.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw B();t=q.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new x(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(q.min())?je.exists(!1):je.updateTime(t):je.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(q.min()))throw new x(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return je.updateTime(t)}return je.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};var El=class{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.uu=r.maxAttempts,this.r_=new Di(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{let e=new bl(this.datastore),t=this.hu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Pu(i)}))}).catch(r=>{this.Pu(r)})})}hu(e){try{let t=this.updateFunction(e);return!Ui(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pu(e){this.uu>0&&this.Tu(e)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(e)}Tu(e){if(e.name==="FirebaseError"){let t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Gm(t)}return!1}};var Tl=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=ho.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{V("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=Kl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Zc(n,e){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function mm(n,e){n.asyncQueue.verifyOperationInProgress();let t=await vE(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>lm(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>lm(e.remoteStore,i)),n._onlineComponents=e}async function vE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zc(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;or("Error using user provided cache. Falling back to memory cache: "+t),await Zc(n,new yr)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Zc(n,new Il(void 0));return n._offlineComponents}async function Xl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await mm(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await mm(n,new Oi))),n._onlineComponents}function IE(n){return Xl(n).then(e=>e.syncEngine)}function bE(n){return Xl(n).then(e=>e.datastore)}async function Mo(n){let e=await Xl(n),t=e.eventManager;return t.onListen=aE.bind(null,e.syncEngine),t.onUnlisten=lE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=hE.bind(null,e.syncEngine),t}function EE(n,e,t={}){let r=new tt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){let f=new xi({next:A=>{f.eu(),a.enqueueAndForget(()=>Ql(s,y));let P=A.docs.has(c);!P&&A.fromCache?d.reject(new x(R.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&A.fromCache&&l&&l.source==="server"?d.reject(new x(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),y=new Ni(Ho(c.path),f,{includeMetadataChanges:!0,ua:!0});return Hl(s,y)}(await Mo(n),n.asyncQueue,e,t,r)),r.promise}function TE(n,e,t={}){let r=new tt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){let f=new xi({next:A=>{f.eu(),a.enqueueAndForget(()=>Ql(s,y)),A.fromCache&&l.source==="server"?d.reject(new x(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),y=new Ni(c,f,{includeMetadataChanges:!0,ua:!0});return Hl(s,y)}(await Mo(n),n.asyncQueue,e,t,r)),r.promise}function pg(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var gm=new Map;function mg(n,e,t){if(!t)throw new x(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function AE(n,e,t,r){if(e===!0&&r===!0)throw new x(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ym(n){if(!U.isDocumentKey(n))throw new x(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _m(n){if(U.isDocumentKey(n))throw new x(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ea(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B()}function Ge(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=ea(n);throw new x(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function SE(n,e){if(e<=0)throw new x(R.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}var Fo=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},_r=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fo(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new eu;switch(r.type){case"firstParty":return new iu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=gm.get(t);r&&(V("ComponentProvider","Removing Datastore"),gm.delete(t),r.terminate())}(this),Promise.resolve()}};function Zl(n,e,t,r={}){var i;let s=(n=Ge(n,_r))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&or("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=be.MOCK_USER;else{c=hf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new x(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new be(d)}n._authCredentials=new tu(new lo(c,l))}}var rn=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Re=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},Xt=class n extends rn{constructor(e,t,r){super(e,t,Ho(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new U(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function ta(n,e,...t){if(n=ee(n),mg("collection","path",e),n instanceof _r){let r=ae.fromString(e,...t);return _m(r),new Xt(n,null,r)}{if(!(n instanceof Re||n instanceof Xt))throw new x(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ae.fromString(e,...t));return _m(r),new Xt(n.firestore,null,r)}}function Ye(n,e,...t){if(n=ee(n),arguments.length===1&&(e=ho.newId()),mg("doc","path",e),n instanceof _r){let r=ae.fromString(e,...t);return ym(r),new Re(n,null,new U(r))}{if(!(n instanceof Re||n instanceof Xt))throw new x(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ae.fromString(e,...t));return ym(r),new Re(n.firestore,n instanceof Xt?n.converter:null,new U(r))}}var $o=class{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Di(this,"async_queue_retry"),this.fu=()=>{let r=Xc();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;let t=Xc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;let t=Xc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});let t=new tt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Tr(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;let i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Dt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let i=dl.createAndSchedule(this,e,t,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&B()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.du.indexOf(e);this.du.splice(t,1)}};function wm(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var at=class extends _r{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new $o,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new $o(e),this._firestoreClient=void 0,await e}}};function gg(n,e){let t=typeof n=="object"?n:gn(),r=typeof n=="string"?n:e||"(default)",i=dt(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=lf("firestore");s&&Zl(i,...s)}return i}function ji(n){if(n._terminated)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kE(n),n._firestoreClient}function kE(n){var e,t,r;let i=n._freezeSettings(),s=function(c,l,d,f){return new uu(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,pg(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Tl(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){let l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}var wr=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(xe.fromBase64String(e))}catch(t){throw new x(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var Cn=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var sn=class{constructor(e){this._methodName=e}};var Vi=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}};var Li=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}};var RE=/^__.*__$/,Al=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new wt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pn(e,this.data,t,this.fieldTransforms)}},Uo=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new wt(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function yg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}var Bo=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return qo(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(yg(this.Mu)&&RE.test(e))throw this.qu('Document fields cannot begin and end with "__"')}},Sl=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Jo(e)}$u(e,t,r,i=!1){return new Bo({Mu:e,methodName:t,Ku:r,path:Ke.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Gi(n){let e=n._freezeSettings(),t=Jo(n._databaseId);return new Sl(n._databaseId,!!e.ignoreUndefinedProperties,t)}function eh(n,e,t,r,i,s={}){let a=n.$u(s.merge||s.mergeFields?2:0,e,t,i);th("Data must be an object, but it was:",a,r);let c=Ig(r,a),l,d;if(s.merge)l=new et(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){let f=[];for(let y of s.mergeFields){let A=Cl(e,y,t);if(!a.contains(A))throw new x(R.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Eg(f,A)||f.push(A)}l=new et(f),d=a.fieldTransforms.filter(y=>l.covers(y.field))}else l=null,d=a.fieldTransforms;return new Al(new qe(c),l,d)}var Mi=class n extends sn{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function _g(n,e,t){return new Bo({Mu:3,Ku:e.settings.Ku,methodName:n._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}var kl=class n extends sn{_toFieldTransform(e){return new Ai(e.path,new Rn)}isEqual(e){return e instanceof n}},Rl=class n extends sn{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){let t=_g(this,e,!0),r=this.Uu.map(s=>Nn(s,t)),i=new en(r);return new Ai(e.path,i)}isEqual(e){return e instanceof n&&Et(this.Uu,e.Uu)}},Pl=class n extends sn{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){let t=_g(this,e,!0),r=this.Uu.map(s=>Nn(s,t)),i=new tn(r);return new Ai(e.path,i)}isEqual(e){return e instanceof n&&Et(this.Uu,e.Uu)}};function wg(n,e,t,r){let i=n.$u(1,e,t);th("Data must be an object, but it was:",i,r);let s=[],a=qe.empty();on(r,(l,d)=>{let f=nh(e,l,t);d=ee(d);let y=i.Bu(f);if(d instanceof Mi)s.push(f);else{let A=Nn(d,y);A!=null&&(s.push(f),a.set(f,A))}});let c=new et(s);return new Uo(a,c,i.fieldTransforms)}function vg(n,e,t,r,i,s){let a=n.$u(1,e,t),c=[Cl(e,r,t)],l=[i];if(s.length%2!=0)throw new x(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<s.length;A+=2)c.push(Cl(e,s[A])),l.push(s[A+1]);let d=[],f=qe.empty();for(let A=c.length-1;A>=0;--A)if(!Eg(d,c[A])){let P=c[A],O=l[A];O=ee(O);let F=a.Bu(P);if(O instanceof Mi)d.push(P);else{let N=Nn(O,F);N!=null&&(d.push(P),f.set(P,N))}}let y=new et(d);return new Uo(f,y,a.fieldTransforms)}function PE(n,e,t,r=!1){return Nn(t,n.$u(r?4:3,e))}function Nn(n,e){if(bg(n=ee(n)))return th("Unsupported field value:",e,n),Ig(n,e);if(n instanceof sn)return function(r,i){if(!yg(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let c of r){let l=Nn(c,i.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=ke.fromDate(r);return{timestampValue:To(i.serializer,s)}}if(r instanceof ke){let s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:To(i.serializer,s)}}if(r instanceof Vi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wr)return{bytesValue:Wm(i.serializer,r._byteString)};if(r instanceof Re){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ql(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Li)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return Bl(c.serializer,l)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${ea(r)}`)}(n,e)}function Ig(n,e){let t={};return bm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):on(n,(r,i)=>{let s=Nn(i,e.Ou(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function bg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ke||n instanceof Vi||n instanceof wr||n instanceof Re||n instanceof sn||n instanceof Li)}function th(n,e,t){if(!bg(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=ea(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Cl(n,e,t){if((e=ee(e))instanceof Cn)return e._internalPath;if(typeof e=="string")return nh(n,e);throw qo("Field path arguments must be of type string or ",n,!1,void 0,t)}var CE=new RegExp("[~\\*/\\[\\]]");function nh(n,e,t){if(e.search(CE)>=0)throw qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Cn(...e.split("."))._internalPath}catch{throw qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function qo(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new x(R.INVALID_ARGUMENT,c+n+l)}function Eg(n,e){return n.some(t=>t.isEqual(e))}var vr=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Dl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(rh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Dl=class extends vr{data(){return super.data()}};function rh(n,e){return typeof e=="string"?nh(n,e):e instanceof Cn?e._internalPath:e._delegate._internalPath}function Tg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Fi=class{},jo=class extends Fi{};function Ag(n,e,...t){let r=[];e instanceof Fi&&r.push(e),r=r.concat(t),function(s){let a=s.filter(l=>l instanceof Nl).length,c=s.filter(l=>l instanceof Go).length;if(a>1||a>0&&c>0)throw new x(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(let i of r)n=i._apply(n);return n}var Go=class n extends jo{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new n(e,t,r)}_apply(e){let t=this._parse(e);return Rg(e._query,t),new rn(e.firestore,e.converter,bu(e._query,t))}_parse(e){let t=Gi(e.firestore);return function(s,a,c,l,d,f,y){let A;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Im(y,f);let P=[];for(let O of y)P.push(vm(l,s,O));A={arrayValue:{values:P}}}else A=vm(l,s,y)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Im(y,f),A=PE(c,a,y,f==="in"||f==="not-in");return ye.create(d,f,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}};function Sg(n,e,t){let r=e,i=rh("where",n);return Go._create(i,r,t)}var Nl=class n extends Fi{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new n(e,t)}_parse(e){let t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ot.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i,c=s.getFlattenedFilters();for(let l of c)Rg(a,l),a=bu(a,l)}(e._query,t),new rn(e.firestore,e.converter,bu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}};var Ol=class n extends jo{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new n(e,t,r)}_apply(e){return new rn(e.firestore,e.converter,_o(e._query,this._limit,this._limitType))}};function kg(n){return SE("limit",n),Ol._create("limit",n,"F")}function vm(n,e,t){if(typeof(t=ee(t))=="string"){if(t==="")throw new x(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dm(e)&&t.indexOf("/")!==-1)throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);let r=e.path.child(ae.fromString(t));if(!U.isDocumentKey(r))throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zp(n,new U(r))}if(t instanceof Re)return zp(n,t._key);throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ea(t)}.`)}function Im(n,e){if(!Array.isArray(n)||n.length===0)throw new x(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rg(n,e){let t=function(i,s){for(let a of i)for(let c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new x(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}var zo=class{convertValue(e,t="none"){switch(Zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ot(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return on(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ce(a.doubleValue));return new Li(s)}convertGeoPoint(e){return new Vi(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Ko(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ei(e));default:return null}}convertTimestamp(e){let t=Nt(e);return new ke(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=ae.fromString(e);J(Zm(r));let i=new go(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(t)||Dt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function ih(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var xl=class extends zo{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}};var Jt=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},$i=class extends vr{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(rh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},sr=class extends $i{data(e={}){return super.data(e)}},Wo=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Jt(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new sr(this._firestore,this._userDataWriter,r.key,r,new Jt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{let l=new sr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Jt(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{let l=new sr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Jt(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:DE(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function DE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}function Lt(n){n=Ge(n,Re);let e=Ge(n.firestore,at);return EE(ji(e),n._key).then(t=>Cg(e,n,t))}var Ir=class extends zo{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}};function sh(n){n=Ge(n,rn);let e=Ge(n.firestore,at),t=ji(e),r=new Ir(e);return Tg(n._query),TE(t,n._query).then(i=>new Wo(e,r,n,i))}function ct(n,e,t){n=Ge(n,Re);let r=Ge(n.firestore,at),i=ih(n.converter,e,t);return oh(r,[eh(Gi(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,je.none())])}function an(n,e,t,...r){n=Ge(n,Re);let i=Ge(n.firestore,at),s=Gi(i),a;return a=typeof(e=ee(e))=="string"||e instanceof Cn?vg(s,"updateDoc",n._key,e,t,r):wg(s,"updateDoc",n._key,e),oh(i,[a.toMutation(n._key,je.exists(!0))])}function Pg(n,e){let t=Ge(n.firestore,at),r=Ye(n),i=ih(n.converter,e);return oh(t,[eh(Gi(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,je.exists(!1))]).then(()=>r)}function na(n,...e){var t,r,i;n=ee(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||wm(e[a])||(s=e[a],a++);let c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(wm(e[a])){let y=e[a];e[a]=(t=y.next)===null||t===void 0?void 0:t.bind(y),e[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[a+2]=(i=y.complete)===null||i===void 0?void 0:i.bind(y)}let l,d,f;if(n instanceof Re)d=Ge(n.firestore,at),f=Ho(n._key.path),l={next:y=>{e[a]&&e[a](Cg(d,n,y))},error:e[a+1],complete:e[a+2]};else{let y=Ge(n,rn);d=Ge(y.firestore,at),f=y._query;let A=new Ir(d);l={next:P=>{e[a]&&e[a](new Wo(d,A,y,P))},error:e[a+1],complete:e[a+2]},Tg(n._query)}return function(A,P,O,F){let N=new xi(F),G=new Ni(P,N,O);return A.asyncQueue.enqueueAndForget(async()=>Hl(await Mo(A),G)),()=>{N.eu(),A.asyncQueue.enqueueAndForget(async()=>Ql(await Mo(A),G))}}(ji(d),f,c,l)}function oh(n,e){return function(r,i){let s=new tt;return r.asyncQueue.enqueueAndForget(async()=>dE(await IE(r),i,s)),s.promise}(ji(n),e)}function Cg(n,e,t){let r=t.docs.get(e._key),i=new Ir(n);return new $i(n,i,e._key,r,new Jt(t.hasPendingWrites,t.fromCache),e.converter)}var NE={maxAttempts:5};function mi(n,e){if((n=ee(n)).firestore!==e)throw new x(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}var Vl=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Gi(t)}get(t){let r=mi(t,this._firestore),i=new xl(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return B();let a=s[0];if(a.isFoundDocument())return new vr(this._firestore,i,a.key,a,r.converter);if(a.isNoDocument())return new vr(this._firestore,i,r._key,null,r.converter);throw B()})}set(t,r,i){let s=mi(t,this._firestore),a=ih(s.converter,r,i),c=eh(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,i);return this._transaction.set(s._key,c),this}update(t,r,i,...s){let a=mi(t,this._firestore),c;return c=typeof(r=ee(r))=="string"||r instanceof Cn?vg(this._dataReader,"Transaction.update",a._key,r,i,s):wg(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,c),this}delete(t){let r=mi(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=mi(e,this._firestore),r=new Ir(this._firestore);return super.get(e).then(i=>new $i(this._firestore,r,t._key,i._document,new Jt(!1,!1),t.converter))}};function cn(n,e,t){n=Ge(n,at);let r=Object.assign(Object.assign({},NE),t);return function(s){if(s.maxAttempts<1)throw new x(R.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,a,c){let l=new tt;return s.asyncQueue.enqueueAndForget(async()=>{let d=await bE(s);new El(s.asyncQueue,d,c,a,l).cu()}),l.promise}(ji(n),i=>e(new Vl(n,i)),r)}function Dg(){return new Mi("deleteField")}function ut(){return new kl("serverTimestamp")}function ah(...n){return new Rl("arrayUnion",n)}function Ng(...n){return new Pl("arrayRemove",n)}(function(e,t=!0){(function(i){br=i})(Kt),Be(new Ie("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),c=new at(new nu(r.getProvider("auth-internal")),new ou(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new go(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ae(Up,"4.7.5",e),Ae(Up,"4.7.5","esm2017")})();var OE=()=>navigator.standalone===!0||matchMedia("(display-mode: standalone)").matches,ch=()=>{let n=new Pt;return n.setCustomParameters({prompt:"select_account"}),n};async function xE(n,e,t){t&&await ct(Ye(n,"merges",e),{anonToken:t,at:ut()})}function Og(n,e,t){let r=null,i=setTimeout(()=>{r?.(),t(0)},2e4);return r=na(Ye(n,"merges",e),s=>{let a=s.data();a?.done&&(clearTimeout(i),r?.(),t(a.moved||0))},()=>{clearTimeout(i),t(0)}),r}async function VE(n){let e=n.currentUser;return e?.isAnonymous?e.getIdToken():null}async function uh(n,e,t){let r=await VE(n),i=await t();return await xE(e,i.user.uid,r),{status:r?"switched":"signed-in",uid:i.user.uid}}async function xg(n,e){let t=n.currentUser;if(OE())return await to(t,ch()),{status:"redirecting"};try{return await qc(t,ch()),{status:"linked",uid:t.uid}}catch(r){if(r.code==="auth/credential-already-in-use"){let i=Pt.credentialFromError(r);return uh(n,e,()=>fi(n,i))}if(r.code==="auth/popup-blocked"||r.code==="auth/operation-not-supported-in-this-environment")return await to(t,ch()),{status:"redirecting"};throw r}}async function Vg(n,e){try{let t=await jc(n);return t?{status:"linked",uid:t.user.uid}:null}catch(t){if(t.code==="auth/credential-already-in-use"){let r=Pt.credentialFromError(t);return uh(n,e,()=>fi(n,r))}throw t}}async function Lg(n,e,t){return await Vc(n.currentUser,Rt.credential(e.trim(),t)),{status:"linked",uid:n.currentUser.uid}}function Mg(n,e,t,r){return uh(n,e,()=>Mc(n,t.trim(),r))}var Fg=(n,e)=>Lc(n,e.trim()),lh=n=>$c(n);async function $g(n,e){await ct(Ye(n,"deletions",e),{at:ut()})}function hh(n){if(!n||n.isAnonymous)return null;let e=n.providerData.some(t=>t.providerId==="google.com");return{email:n.email||n.providerData.find(t=>t.email)?.email||"",google:e}}var LE=["fuck","fucker","fucking","fucked","fuk","fck","motherfucker","shit","shitty","bullshit","shithead","cunt","twat","bitch","bitches","asshole","dickhead","cocksucker","whore","slut","bastard","wank","wanker","jizz","dildo","porn","porno","rape","rapist","nigger","nigga","chink","spic","kike","wetback","gook","raghead","towelhead","beaner","faggot","fag","dyke","tranny","retard","retarded"],ME=["fuck","shit","nigger","nigga","faggot"],dh=new Set(LE),FE={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t","@":"a",$:"s","!":"i"};function $E(n){return String(n).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[013457@$!]/g,e=>FE[e])}function zi(n){let t=$E(n).split(/[^a-z]+/).filter(Boolean),r=s=>s.length>3&&s.endsWith("s")?s.slice(0,-1):s;if(t.some(s=>dh.has(s)||dh.has(r(s)))||t.some(s=>ME.some(a=>s.includes(a))))return!0;let i=t.join("");return!!(t.length>2&&t.every(s=>s.length===1)&&dh.has(i))}var Ug="ABCDEFGHJKLMNPQRSTUVWXYZ";function fh(){let n="";for(let e=0;e<4;e++)n+=Ug[Math.floor(Math.random()*Ug.length)];return n}function UE(n){return n.length<=3?n:n.endsWith("ies")&&n.length>4?n.slice(0,-3)+"y":/(ss|x|z|ch|sh)es$/.test(n)?n.slice(0,-2):n.endsWith("s")&&!n.endsWith("ss")&&!n.endsWith("us")&&!n.endsWith("is")?n.slice(0,-1):n}var BE=/[aeiouy]/;function qE(n){let e=n.match(/^(.+?)(ing|ed)$/);if(!e)return n;let t=e[1];return t.length<3||!BE.test(t)||t.endsWith("e")?n:/([b-df-hj-np-rtv-z])\1$/.test(t)&&!/(ll|ss|zz)$/.test(t)?t.slice(0,-1):(t.length===3&&/[^aeiou][aeiou][^aeiouwxy]$/.test(t)&&(t+="e"),t)}function Ue(n){return String(n).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/&/g," and ").replace(/[^a-z0-9 ]+/g," ").split(/\s+/).filter(Boolean).filter((e,t,r)=>!(t===0&&r.length>1&&(e==="the"||e==="a"||e==="an"))).map(UE).map(qE).join(" ")}function Mt(n){return String(n).trim().replace(/\s+/g," ").slice(0,40)}function ph(n,e){return(e||[]).includes(Ue(n))}function Bg(n){return n.length>=2&&n.every(e=>e.norm===n[0].norm)}function jE(n,e){let t=Array.from({length:e.length+1},(r,i)=>i);for(let r=1;r<=n.length;r++){let i=t[0];t[0]=r;for(let s=1;s<=e.length;s++){let a=t[s];t[s]=Math.min(t[s]+1,t[s-1]+1,i+(n[r-1]===e[s-1]?0:1)),i=a}}return t[e.length]}function GE(n,e){let t=Ue(n),r=Ue(e);if(t===r)return!0;let i=Math.min(t.length,r.length),s=jE(t,r);if(i>=5&&s<=1||i>=9&&s<=2)return!0;let a=t.split(" "),c=r.split(" ");return a.every(l=>c.includes(l))||c.every(l=>a.includes(l))}function mh(n){let e={};n.forEach(r=>{let i=Ue(r);e[i]=(e[i]||0)+1});let t=Object.keys(e).sort((r,i)=>e[i]-e[r])[0];return n.find(r=>Ue(r)===t)}function gh(n){if(n.length<2)return!1;let e=mh(n);return n.every(t=>GE(t,e))&&!n.every(t=>Ue(t)===Ue(e))}var qg=`
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
`).map(n=>n.trim()).filter(Boolean);var yh=`
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
`).map(n=>n.split("|").map(e=>e.trim())).filter(([n,e])=>n&&e).map(([n,e])=>({word:n,def:e}));var jg={apiKey:"AIzaSyAEbf9VBdvXdHUSlH0rZgHL7SmvXyAn_nM",authDomain:"playbrainsmith.com",projectId:"thesamesiesgame",storageBucket:"thesamesiesgame.firebasestorage.app",messagingSenderId:"120235814862",appId:"1:120235814862:web:4f5762bc1a08d2f228059f"},_h="BBUQ64_JVKYcW-xtRMi77IaPskvgJtRW7ueEECgPOerrutMYWC2bY2rXyy1LVgggYOsMH5uNpIFEyfSQj1psYl4";var Wg="@firebase/installations",bh="0.6.11";var Kg=1e4,Hg=`w:${bh}`,Qg="FIS_v2",zE="https://firebaseinstallations.googleapis.com/v1",WE=60*60*1e3,KE="installations",HE="Installations";var QE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xn=new We(KE,HE,QE);function Yg(n){return n instanceof $e&&n.code.includes("request-failed")}function Jg({projectId:n}){return`${zE}/projects/${n}/installations`}function Xg(n){return{token:n.token,requestStatus:2,expiresIn:JE(n.expiresIn),creationTime:Date.now()}}async function Zg(n,e){let r=(await e.json()).error;return xn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ey({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function YE(n,{refreshToken:e}){let t=ey(n);return t.append("Authorization",XE(e)),t}async function ty(n){let e=await n();return e.status>=500&&e.status<600?n():e}function JE(n){return Number(n.replace("s","000"))}function XE(n){return`${Qg} ${n}`}async function ZE({appConfig:n,heartbeatServiceProvider:e},{fid:t}){let r=Jg(n),i=ey(n),s=e.getImmediate({optional:!0});if(s){let d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}let a={fid:t,authVersion:Qg,appId:n.appId,sdkVersion:Hg},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await ty(()=>fetch(r,c));if(l.ok){let d=await l.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Xg(d.authToken)}}else throw await Zg("Create Installation",l)}function ny(n){return new Promise(e=>{setTimeout(e,n)})}function eT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}var tT=/^[cdef][\w-]{21}$/,Ih="";function nT(){try{let n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;let t=rT(n);return tT.test(t)?t:Ih}catch{return Ih}}function rT(n){return eT(n).substr(0,22)}function ia(n){return`${n.appName}!${n.appId}`}var ry=new Map;function iy(n,e){let t=ia(n);sy(t,e),iT(t,e)}function sy(n,e){let t=ry.get(n);if(t)for(let r of t)r(e)}function iT(n,e){let t=sT();t&&t.postMessage({key:n,fid:e}),oT()}var On=null;function sT(){return!On&&"BroadcastChannel"in self&&(On=new BroadcastChannel("[Firebase] FID Change"),On.onmessage=n=>{sy(n.data.key,n.data.fid)}),On}function oT(){ry.size===0&&On&&(On.close(),On=null)}var aT="firebase-installations-database",cT=1,Vn="firebase-installations-store",wh=null;function Eh(){return wh||(wh=mn(aT,cT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Vn)}}})),wh}async function ra(n,e){let t=ia(n),i=(await Eh()).transaction(Vn,"readwrite"),s=i.objectStore(Vn),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&iy(n,e.fid),e}async function oy(n){let e=ia(n),r=(await Eh()).transaction(Vn,"readwrite");await r.objectStore(Vn).delete(e),await r.done}async function sa(n,e){let t=ia(n),i=(await Eh()).transaction(Vn,"readwrite"),s=i.objectStore(Vn),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&iy(n,c.fid),c}async function Th(n){let e,t=await sa(n.appConfig,r=>{let i=uT(r),s=lT(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Ih?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function uT(n){let e=n||{fid:nT(),registrationStatus:0};return ay(e)}function lT(n,e){if(e.registrationStatus===0){if(!navigator.onLine){let i=Promise.reject(xn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}let t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=hT(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:dT(n)}:{installationEntry:e}}async function hT(n,e){try{let t=await ZE(n,e);return ra(n.appConfig,t)}catch(t){throw Yg(t)&&t.customData.serverCode===409?await oy(n.appConfig):await ra(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function dT(n){let e=await Gg(n.appConfig);for(;e.registrationStatus===1;)await ny(100),e=await Gg(n.appConfig);if(e.registrationStatus===0){let{installationEntry:t,registrationPromise:r}=await Th(n);return r||t}return e}function Gg(n){return sa(n,e=>{if(!e)throw xn.create("installation-not-found");return ay(e)})}function ay(n){return fT(n)?{fid:n.fid,registrationStatus:0}:n}function fT(n){return n.registrationStatus===1&&n.registrationTime+Kg<Date.now()}async function pT({appConfig:n,heartbeatServiceProvider:e},t){let r=mT(n,t),i=YE(n,t),s=e.getImmediate({optional:!0});if(s){let d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}let a={installation:{sdkVersion:Hg,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await ty(()=>fetch(r,c));if(l.ok){let d=await l.json();return Xg(d)}else throw await Zg("Generate Auth Token",l)}function mT(n,{fid:e}){return`${Jg(n)}/${e}/authTokens:generate`}async function Ah(n,e=!1){let t,r=await sa(n.appConfig,s=>{if(!cy(s))throw xn.create("not-registered");let a=s.authToken;if(!e&&_T(a))return s;if(a.requestStatus===1)return t=gT(n,e),s;{if(!navigator.onLine)throw xn.create("app-offline");let c=vT(s);return t=yT(n,c),c}});return t?await t:r.authToken}async function gT(n,e){let t=await zg(n.appConfig);for(;t.authToken.requestStatus===1;)await ny(100),t=await zg(n.appConfig);let r=t.authToken;return r.requestStatus===0?Ah(n,e):r}function zg(n){return sa(n,e=>{if(!cy(e))throw xn.create("not-registered");let t=e.authToken;return IT(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yT(n,e){try{let t=await pT(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ra(n.appConfig,r),t}catch(t){if(Yg(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await oy(n.appConfig);else{let r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ra(n.appConfig,r)}throw t}}function cy(n){return n!==void 0&&n.registrationStatus===2}function _T(n){return n.requestStatus===2&&!wT(n)}function wT(n){let e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+WE}function vT(n){let e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function IT(n){return n.requestStatus===1&&n.requestTime+Kg<Date.now()}async function bT(n){let e=n,{installationEntry:t,registrationPromise:r}=await Th(e);return r?r.catch(console.error):Ah(e).catch(console.error),t.fid}async function ET(n,e=!1){let t=n;return await TT(t),(await Ah(t,e)).token}async function TT(n){let{registrationPromise:e}=await Th(n);e&&await e}function AT(n){if(!n||!n.options)throw vh("App Configuration");if(!n.name)throw vh("App Name");let e=["projectId","apiKey","appId"];for(let t of e)if(!n.options[t])throw vh(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function vh(n){return xn.create("missing-app-config-values",{valueName:n})}var uy="installations",ST="installations-internal",kT=n=>{let e=n.getProvider("app").getImmediate(),t=AT(e),r=dt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},RT=n=>{let e=n.getProvider("app").getImmediate(),t=dt(e,uy).getImmediate();return{getId:()=>bT(t),getToken:i=>ET(t,i)}};function PT(){Be(new Ie(uy,kT,"PUBLIC")),Be(new Ie(ST,RT,"PRIVATE"))}PT();Ae(Wg,bh);Ae(Wg,bh,"esm2017");var CT="/firebase-messaging-sw.js",DT="/firebase-cloud-messaging-push-scope",gy="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",NT="https://fcmregistrations.googleapis.com/v1",yy="google.c.a.c_id",OT="google.c.a.c_l",xT="google.c.a.ts",VT="google.c.a.e",ly;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ly||(ly={}));var Wi;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Wi||(Wi={}));function Ft(n){let e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function LT(n){let e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}var Sh="fcm_token_details_db",MT=5,hy="fcm_token_object_Store";async function FT(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Sh))return null;let e=null;return(await mn(Sh,MT,{upgrade:async(r,i,s,a)=>{var c;if(i<2||!r.objectStoreNames.contains(hy))return;let l=a.objectStore(hy),d=await l.index("fcmSenderId").get(n);if(await l.clear(),!!d){if(i===2){let f=d;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(c=f.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:Ft(f.vapidKey)}}}else if(i===3){let f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Ft(f.auth),p256dh:Ft(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Ft(f.vapidKey)}}}else if(i===4){let f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Ft(f.auth),p256dh:Ft(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Ft(f.vapidKey)}}}}}})).close(),await ws(Sh),await ws("fcm_vapid_details_db"),await ws("undefined"),$T(e)?e:null}function $T(n){if(!n||!n.subscriptionOptions)return!1;let{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}var UT="firebase-messaging-database",BT=1,Ln="firebase-messaging-store",kh=null;function Ch(){return kh||(kh=mn(UT,BT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ln)}}})),kh}async function _y(n){let e=Nh(n),r=await(await Ch()).transaction(Ln).objectStore(Ln).get(e);if(r)return r;{let i=await FT(n.appConfig.senderId);if(i)return await Dh(n,i),i}}async function Dh(n,e){let t=Nh(n),i=(await Ch()).transaction(Ln,"readwrite");return await i.objectStore(Ln).put(e,t),await i.done,e}async function qT(n){let e=Nh(n),r=(await Ch()).transaction(Ln,"readwrite");await r.objectStore(Ln).delete(e),await r.done}function Nh({appConfig:n}){return n.appId}var jT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ve=new We("messaging","Messaging",jT);async function GT(n,e){let t=await xh(n),r=vy(e),i={method:"POST",headers:t,body:JSON.stringify(r)},s;try{s=await(await fetch(Oh(n.appConfig),i)).json()}catch(a){throw Ve.create("token-subscribe-failed",{errorInfo:a?.toString()})}if(s.error){let a=s.error.message;throw Ve.create("token-subscribe-failed",{errorInfo:a})}if(!s.token)throw Ve.create("token-subscribe-no-token");return s.token}async function zT(n,e){let t=await xh(n),r=vy(e.subscriptionOptions),i={method:"PATCH",headers:t,body:JSON.stringify(r)},s;try{s=await(await fetch(`${Oh(n.appConfig)}/${e.token}`,i)).json()}catch(a){throw Ve.create("token-update-failed",{errorInfo:a?.toString()})}if(s.error){let a=s.error.message;throw Ve.create("token-update-failed",{errorInfo:a})}if(!s.token)throw Ve.create("token-update-no-token");return s.token}async function wy(n,e){let r={method:"DELETE",headers:await xh(n)};try{let s=await(await fetch(`${Oh(n.appConfig)}/${e}`,r)).json();if(s.error){let a=s.error.message;throw Ve.create("token-unsubscribe-failed",{errorInfo:a})}}catch(i){throw Ve.create("token-unsubscribe-failed",{errorInfo:i?.toString()})}}function Oh({projectId:n}){return`${NT}/projects/${n}/registrations`}async function xh({appConfig:n,installations:e}){let t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function vy({p256dh:n,auth:e,endpoint:t,vapidKey:r}){let i={web:{endpoint:t,auth:e,p256dh:n}};return r!==gy&&(i.web.applicationPubKey=r),i}var WT=7*24*60*60*1e3;async function KT(n){let e=await YT(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Ft(e.getKey("auth")),p256dh:Ft(e.getKey("p256dh"))},r=await _y(n.firebaseDependencies);if(r){if(JT(r.subscriptionOptions,t))return Date.now()>=r.createTime+WT?QT(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await wy(n.firebaseDependencies,r.token)}catch(i){console.warn(i)}return dy(n.firebaseDependencies,t)}else return dy(n.firebaseDependencies,t)}async function HT(n){let e=await _y(n.firebaseDependencies);e&&(await wy(n.firebaseDependencies,e.token),await qT(n.firebaseDependencies));let t=await n.swRegistration.pushManager.getSubscription();return t?t.unsubscribe():!0}async function QT(n,e){try{let t=await zT(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Dh(n.firebaseDependencies,r),t}catch(t){throw t}}async function dy(n,e){let r={token:await GT(n,e),createTime:Date.now(),subscriptionOptions:e};return await Dh(n,r),r.token}async function YT(n,e){let t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:LT(e)})}function JT(n,e){let t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,i=e.auth===n.auth,s=e.p256dh===n.p256dh;return t&&r&&i&&s}function fy(n){let e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return XT(e,n),ZT(e,n),e0(e,n),e}function XT(n,e){if(!e.notification)return;n.notification={};let t=e.notification.title;t&&(n.notification.title=t);let r=e.notification.body;r&&(n.notification.body=r);let i=e.notification.image;i&&(n.notification.image=i);let s=e.notification.icon;s&&(n.notification.icon=s)}function ZT(n,e){e.data&&(n.data=e.data)}function e0(n,e){var t,r,i,s,a;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};let c=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;c&&(n.fcmOptions.link=c);let l=(a=e.fcmOptions)===null||a===void 0?void 0:a.analytics_label;l&&(n.fcmOptions.analyticsLabel=l)}function t0(n){return typeof n=="object"&&!!n&&yy in n}n0("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function n0(n,e){let t=[];for(let r=0;r<n.length;r++)t.push(n.charAt(r)),r<e.length&&t.push(e.charAt(r));return t.join("")}function r0(n){if(!n||!n.options)throw Rh("App Configuration Object");if(!n.name)throw Rh("App Name");let e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(let r of e)if(!t[r])throw Rh(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Rh(n){return Ve.create("missing-app-config-values",{valueName:n})}var Ph=class{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let i=r0(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}};async function Iy(n){try{n.swRegistration=await navigator.serviceWorker.register(CT,{scope:DT}),n.swRegistration.update().catch(()=>{})}catch(e){throw Ve.create("failed-service-worker-registration",{browserErrorMessage:e?.message})}}async function i0(n,e){if(!e&&!n.swRegistration&&await Iy(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ve.create("invalid-sw-registration");n.swRegistration=e}}async function s0(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=gy)}async function by(n,e){if(!navigator)throw Ve.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ve.create("permission-blocked");return await s0(n,e?.vapidKey),await i0(n,e?.serviceWorkerRegistration),KT(n)}async function o0(n,e,t){let r=a0(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[yy],message_name:t[OT],message_time:t[xT],message_device_time:Math.floor(Date.now()/1e3)})}function a0(n){switch(n){case Wi.NOTIFICATION_CLICKED:return"notification_open";case Wi.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}async function c0(n,e){let t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Wi.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(fy(t)):n.onMessageHandler.next(fy(t)));let r=t.data;t0(r)&&r[VT]==="1"&&await o0(n,t.messageType,r)}var py="@firebase/messaging",my="0.12.14";var u0=n=>{let e=new Ph(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>c0(e,t)),e},l0=n=>{let e=n.getProvider("messaging").getImmediate();return{getToken:r=>by(e,r)}};function h0(){Be(new Ie("messaging",u0,"PUBLIC")),Be(new Ie("messaging-internal",l0,"PRIVATE")),Ae(py,my),Ae(py,my,"esm2017")}async function d0(){try{await gs()}catch{return!1}return typeof window<"u"&&Yr()&&_f()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}async function f0(n){if(!navigator)throw Ve.create("only-available-in-window");return n.swRegistration||await Iy(n),HT(n)}function Vh(n=gn()){return d0().then(e=>{if(!e)throw Ve.create("unsupported-browser")},e=>{throw Ve.create("indexed-db-unsupported")}),dt(ee(n),"messaging").getImmediate()}async function Ey(n,e){return n=ee(n),by(n,e)}function Ty(n){return n=ee(n),f0(n)}h0();var Lh="samesies.alertsOff",p0=()=>/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,m0=()=>navigator.standalone===!0||matchMedia("(display-mode: standalone)").matches;function Ki(){return _h?p0()&&!m0()?"ios-install":"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window?"yes":"no":"no"}var oa=()=>"Notification"in window?Notification.permission:"default",Mh=()=>Ki()==="yes"&&oa()==="granted"&&localStorage.getItem(Lh)!=="1";async function Fh(n){let e=await navigator.serviceWorker.register("sw.js");return await navigator.serviceWorker.ready,Ey(Vh(n),{vapidKey:_h,serviceWorkerRegistration:e})}async function Ay(n,e,t){if(Ki()!=="yes"||await Notification.requestPermission()!=="granted")return!1;try{localStorage.removeItem(Lh)}catch{}let i=await Fh(n);return await ct(Ye(e,"pushTokens",t),{tokens:ah(i),at:ut()},{merge:!0}),!0}async function aa(n,e,t){try{localStorage.setItem(Lh,"1")}catch{}try{let r=await Fh(n);await an(Ye(e,"pushTokens",t),{tokens:Ng(r)}),await Ty(Vh(n))}catch{}}async function Sy(n,e,t){if(Mh())try{let r=await Fh(n);await ct(Ye(e,"pushTokens",t),{tokens:ah(r),at:ut()},{merge:!0})}catch(r){console.warn("alerts refresh failed",r)}}var ca=(n,e,t)=>`${n} ${n===1?e:t}`,g0=n=>n.length<=2?n.join(" and "):n.slice(0,-1).join(", ")+" and "+n[n.length-1],v={appName:"Brainsmith",listNames:g0,rounds:n=>ca(n,"round","rounds"),errors:{generic:"Something went wrong. Check your connection and try again.",nameFirst:"Type your name first.",codeFormat:"Game codes are 4 letters.",noGame:"No game with that code.",started:"That game already started.",full:n=>`That game is full (${n} players max).`,wordFirst:"Type a word first.",used:n=>`"${n}" has already been used. Pick another!`,connect:"Could not connect to Brainsmith. Check your connection and refresh.",rudeWord:"Let\u2019s keep it family-friendly. Try another word.",rudeName:"Let\u2019s keep names family-friendly. Try another."},toasts:{waitMinute:"Give them a minute!",nudged:n=>`Nudged ${n} \u{1F44B}`,nudgedYou:n=>`${n} nudged you! Your word, please \u{1F440}`,rematch:n=>`${n} started a rematch. You're in!`,copiedShare:"Copied! Paste it in your group text.",removed:n=>`${n} was removed.`,askedClose:n=>`${n} asked: close enough?`,nameFirst:"Type a name first",nameSaved:"Name saved",inviteCopied:"Invite link copied"},someone:"Someone",aFriend:"A friend",theHost:"the host",thisPlayer:"this player",you:" (you)",host:"Host",loading:"Loading\u2026",findingGame:"Finding your game\u2026",goToStart:"Go to start",a11y:{back:"Step out to the start screen",howTo:"How to play",soundOn:"Turn sound on",soundOff:"Turn sound off",usedWords:n=>`Used words, ${n} so far`,settings:"Settings",close:"Close",closeHowTo:"Close How to Play",gameCode:"Game code",forgetGame:n=>`Remove game ${n} from this list`,removePlayer:n=>`Remove ${n} from the game`,react:(n,e)=>`React ${n}${e?`, ${e} so far`:""}`,slide:(n,e,t)=>`${n} of ${e}: ${t}`},share:{head:(n,e)=>`\u{1F9E0} Brainsmith: we forged "${n}" in ${ca(e,"round","rounds")}!`,headVote:(n,e)=>`\u{1F9E0} Brainsmith: close enough on "${n}" in ${ca(e,"round","rounds")}!`,playWithUs:"Play with us:",invite:n=>`Play Brainsmith with me! Code ${n}`},games:{title:"Your games",button:n=>`Your games (${n})`,needYou:n=>`${n} need you`,none:"No games yet.",loading:"Loading\u2026",with:n=>`With ${n}`,justYou:"Just you so far",removed:"You were removed",notIn:"Not in this game",startIt:"Ready when you are: start it!",waitingStart:"Waiting to start",forged:n=>`Forged: ${n}`,closeEnough:n=>`Close enough: ${n}`,yourTurn:n=>`Your turn \xB7 round ${n}`,waitingOn:n=>`Waiting on ${n}`,revealing:"Revealing\u2026",ended:"Game ended",gone:"No longer around"},home:{howTo:"How to Play",tagline:"Two words in. Meet in the middle.",yourName:"Your name",namePlaceholder:"What should we call you?",start:"Start a new game",dailyEyebrow:"WEIRD DAILY WORDS",dailyTitle:"Scared? You scared.",dailySub:"Start with a redonkulous word",or:"or",codePlaceholder:"Game code",join:"Join",fine:"2 to 5 players \xB7 no sign-up \xB7 no ads",saveGames:"Playing on more than one phone? <b>Sign in</b> to keep your games everywhere.",maker:"a Padre Smitty creation"},join:{invited:(n,e)=>`${n} invited you to game <strong>${e}</strong>`,started:"This game already started. Ask them to start a new one and send you the code.",full:"This game is full.",button:"Join the game"},missing:n=>`No game with code ${n}.`,removedFrom:n=>`You were taken out of game ${n} so the others could keep playing.`,confirmRemove:n=>`Remove ${n} from the game? Everyone else can keep playing.`,header:{game:n=>`GAME \xB7 ${n}`},lobby:{title:"Getting ready",dailyBadge:"Weird Daily Words game",inviteWith:"Invite with this code",shareLink:"Share invite link",players:(n,e)=>`PLAYERS \xB7 ${n} OF ${e}`,startNow:"Everyone\u2019s here, start!",needMore:"Waiting for at least one more",waitingFor:n=>`Waiting for ${n} to start\u2026`},round:{title:n=>`Round ${n}`,connect:"Connect these",askClose:"Close enough? Ask to count it",roundOne:"Round one",prompt:"Pick any word in the known universe.",promptTip:"Nouns are easiest. Adjectives make it harder.",lockedIn:"You locked in",waitingOn:n=>`Waiting on ${n}\u2026`,revealing:"Revealing\u2026",yourWord:"Your word",wordPlaceholder:"Type it here",lock:"Lock it in",starter:"Stuck? Give me a word",secret:"Nobody sees your word until everyone\u2019s in.",players:"PLAYERS",playerLocked:"Locked in",thinking:"Thinking\u2026",nudge:"Nudge"},reveal:{title:n=>`Round ${n} is in!`,said:(n,e,t)=>`${n} ${e?"both":"all"} said <em>${t}</em>!`,soClose:"So close! Keep going.",notYetTwo:"Not yet! Next round, connect these two.",notYetAll:"Not yet! Next round, connect all of these.",closeHot:"Those look the same. Close enough?",close:"Close enough?",next:n=>`On to round ${n}`},dealt:{title:"Weird words!",got:n=>`${n} got`,msg:"Everyone got a different word. Next round, find one word that connects them all.",next:"Let\u2019s connect them"},vote:{title:"Close enough?",playOn:n=>`${n} said not quite, so play on.`,youAsked:"You asked",asked:n=>`${n} asked`,explain:(n,e)=>`${n} to count round ${e} as a match. Everyone has to agree.`,waitingOn:n=>`Waiting on ${n}\u2026`,counting:"Counting\u2026",yes:"Yes, count it",no:"No"},won:{forged:"Forged!",closeEnough:"Close enough!",everyone:"Everyone said",agreed:"You all agreed on",howYouGot:"HOW YOU GOT THERE",share:"Share how we did it",joinNext:"Join the next game",again:"Play again, same crew",newCrew:"New game, new people",home:"Back to start"},used:{title:"Used words",explain:"These are off the table. If you try one, we\u2019ll quietly ask for another.",round:n=>`ROUND ${n}`,none:"Nothing yet. Round one is wide open."},settings:{title:"Settings",account:"Save your games",accountSub:"Sign in so your games follow you to any phone",signedIn:n=>`Signed in${n?` as ${n}`:""}`,signedInSub:"Your games follow you to any phone",signOut:"Sign out",deleteAccount:"Delete my account",deleteSub:"Erases your name, games list and alerts",yourName:"Your name",save:"Save",nameNote:"Used for new games you start or join.",sound:"Sound",soundSub:"Drumroll, flips and the Forged! fanfare",pastGames:"Past games",pastCount:n=>`${ca(n,"game","games")} on this phone`,noneYet:"None yet",howTo:"How to Play",howToSub:"Swipe through the rules again",privacy:"Privacy Policy",terms:"Terms of Use",restore:"Restore Purchase",restoreSoon:"Coming with Brainsmith Plus",contact:"Questions? hello@padresmitty.com",footer:"Brainsmith \xB7 a Padre Smitty creation"},tour:{title:"How to Play",count:(n,e)=>`${n} OF ${e}`,skip:"Skip",next:"Next",done:"Let\u2019s play",names:["Mom","Jake","You"],goalTitle:"Every brain, one word",goalBody:"Brainsmith is a team game. You all win together when every player types the very same word.",secretTitle:"Pick a word in secret",secretBody:"Any word you like. Nobody sees it until everyone\u2019s locked in, so take your time. Stuck on round 1? Tap <strong>Give me a word</strong>.",flipTitle:"They all flip at once",flipBody:"Drumroll, then every word is revealed together. The fun is seeing how far apart you started.",flipWords:["Ocean","Pizza","Robot"],middleTitle:"Meet in the middle",middleBody:"Next round, everyone looks for one word that connects the words you just saw. It doesn\u2019t have to be perfect, just your best guess at what the others will say.",middleGuess:"Anchovy?",forgeTitle:"Forge it!",forgeBody:"Keep connecting, round after round, until all of you land on the same word. Then it\u2019s <strong>Forged!</strong>",forgeWord:"Anchovy",matchTitle:"What counts as a match",matchRules:[["ok","Capitals don\u2019t matter.","Tennessee = tennessee"],["ok","Plurals count.","Game = games"],["ok","Endings count.","Run = running, bake = baked"],["ok","Two-word answers are fine.","Ice cream, New York"],["no","Extra words make it different.","Cliff \u2260 Cliff Swaim. If everyone agrees it\u2019s the same, vote <b>Close enough?</b>"],["no","No repeats.","A word already played this game is off limits."]],toolsTitle:"Handy buttons",tools:[["\u{1F44B}","Nudge","a player who\u2019s taking a while."],["\u{1F91D}","Close enough?","starts a vote when words almost match. Everyone has to say yes."],["list","Used words","shows every word played so far."],["\u{1F602}","React","to anyone\u2019s word after the reveal."]]},account:{title:"Save your games",body:"Sign in and your games, name and alerts follow you to any phone or tablet, including the Home Screen app.",google:"Continue with Google",or:"or use email",email:"Email",password:"Password",passwordNew:"Make a password (6+ characters)",create:"Create account",signIn:"Sign in",haveOne:"Already have an account? <b>Sign in</b>",needOne:"New here? <b>Create an account</b>",forgot:"Forgot password?",resetSent:n=>`Check ${n} for a link to pick a new password.`,needEmail:"Type your email first, then tap Forgot password.",working:"One sec\u2026",welcome:"Signed in. Your games are saved.",welcomeBack:"Welcome back!",moving:"Bringing this phone\u2019s games along\u2026",moved:n=>n?`Brought ${n} game${n===1?"":"s"} along. All set!`:"Welcome back! All set.",signedOut:"Signed out. You\u2019re playing as a guest now.",confirmSignOut:"Sign out? Your games stay saved in your account. Sign back in anytime to get them.",errors:{"auth/email-already-in-use":"That email already has an account. Tap Sign in instead.","auth/invalid-email":"That email doesn\u2019t look right.","auth/weak-password":"Pick a password with at least 6 characters.","auth/missing-password":"Type a password.","auth/invalid-credential":"That email and password don\u2019t match.","auth/wrong-password":"That email and password don\u2019t match.","auth/user-not-found":"No account with that email. Tap Create an account.","auth/too-many-requests":"Too many tries. Wait a few minutes, then try again.","auth/popup-closed-by-user":"","auth/cancelled-popup-request":"","auth/network-request-failed":"No connection. Check your internet and try again.","auth/operation-not-allowed":"That sign-in isn\u2019t switched on yet. Try the other way."}},del:{confirm:"Delete your account? Your name is taken out of every game and your games list, alerts and sign-in are erased. This can\u2019t be undone.",done:"Your account is deleted. Thanks for playing."},report:{menu:n=>n,reportBtn:n=>`Report ${n}`,reportSub:"Tell us about a mean name or word",blockBtn:n=>`Block ${n}`,blockSub:"Hides their name and words on your screen",unblockBtn:n=>`Unblock ${n}`,unblockSub:"Shows their name and words again",title:n=>`Report ${n}`,what:"What\u2019s wrong?",reasons:["Mean or hateful word","Gross or not family-friendly","Rude name","Something else"],note:"Anything else? (optional)",send:"Send report",sent:"Thanks for telling us. We read every report.",alsoBlock:n=>`Block ${n} too`,blocked:n=>`${n} is blocked. You won\u2019t see their name or words.`,unblocked:n=>`${n} is unblocked.`,hiddenName:"Blocked player",hiddenWord:"hidden",more:n=>`More options for ${n}`},move:{home:"Brainsmith has a new home: <b>playbrainsmith.com</b>. Finish your games here and we\u2019ll take you there.",won:"Next game? Play it at <b>playbrainsmith.com</b>, our new home."},alerts:{askTitle:"Want a buzz when the words flip? \u{1F514}",askBody:"We\u2019ll ping you when it\u2019s your turn, when someone nudges you, and when you forge a win. Nothing else.",yes:"Buzz me",no:"Nah",label:"Alerts",sub:"Your turn, nudges and wins",iosInstall:"On iPhone, add Brainsmith to your Home Screen first (Share, then Add to Home Screen), then turn this on there.",blocked:"Blocked in your browser settings. Allow notifications for this site to turn them on.",onToast:"Alerts on. We\u2019ll be (mostly) polite.",offToast:"Alerts off. Peace and quiet.",notNow:"No alerts for now. Turn them on anytime in Settings.",failed:"Couldn\u2019t turn on alerts. Try again in Settings."}};var we=null,ua=!1;try{ua=localStorage.getItem("samesies.muted")==="1"}catch{}var Mn=()=>ua;function Ry(n){ua=n;try{localStorage.setItem("samesies.muted",n?"1":"0")}catch{}}function Py(){try{we||(we=new(window.AudioContext||window.webkitAudioContext)),we.state==="suspended"&&we.resume()}catch{}}function $h(){return!ua&&we&&we.state==="running"}function y0(){let n=we.createBuffer(1,we.sampleRate*.08,we.sampleRate),e=n.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=(Math.random()*2-1)*(1-t/e.length);return n}function ky(n,e){let t=we.createBufferSource();t.buffer=y0();let r=we.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.8;let i=we.createGain();i.gain.value=e,t.connect(r).connect(i).connect(we.destination),t.start(n)}function Sr(n,e,t,r=.18,i="triangle"){let s=we.createOscillator();s.type=i,s.frequency.value=n;let a=we.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(r,e+.02),a.gain.exponentialRampToValueAtTime(1e-4,e+t),s.connect(a).connect(we.destination),s.start(e),s.stop(e+t+.05)}function Cy(n=1.4){if(!$h())return;let e=we.currentTime;for(let t=0;t<n;t+=.045)ky(e+t,.08+.35*(t/n));ky(e+n,.7),Sr(523,e+n,.5,.15),Sr(784,e+n,.6,.12)}function Dy(){if(!$h())return;let n=we.currentTime;Sr(440,n,.25),Sr(554,n+.12,.35)}function Ny(){if(!$h())return;let n=we.currentTime;[523,659,784,1047].forEach((e,t)=>Sr(e,n+t*.11,t===3?.9:.3,.2)),Sr(1319,n+.44,.9,.08,"sine")}function Oy(n=["#FF6A4D","#FFFFFF","#FFB020","#8A8CFF","#1FB895"]){if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;let e=document.createElement("div");e.className="confetti",e.setAttribute("aria-hidden","true");for(let t=0;t<90;t++){let r=document.createElement("i");r.style.left=Math.random()*100+"%",r.style.background=n[t%n.length],r.style.animationDelay=Math.random()*.6+"s",r.style.animationDuration=2.2+Math.random()*1.6+"s",r.style.setProperty("--drift",Math.random()*160-80+"px"),r.style.setProperty("--spin",Math.random()*1080-540+"deg"),t%3===0&&(r.style.borderRadius="50%"),e.appendChild(r)}document.body.appendChild(e),setTimeout(()=>e.remove(),4800)}var $n=cc(jg),lt=Gc($n),le=gg($n),_0=/^(127\.0\.0\.1|localhost)$/.test(location.hostname)&&(new URLSearchParams(location.search).has("emu")||sessionStorage.getItem("emu")==="1");_0&&(sessionStorage.setItem("emu","1"),Xs(lt,"http://127.0.0.1:9099",{disableWarnings:!0}),Zl(le,"127.0.0.1",8080));var _e=document.getElementById("app"),Z={get(n,e=null){try{let t=localStorage.getItem("samesies."+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("samesies."+n,JSON.stringify(e))}catch{}}},m={uid:null,authError:null,name:Z.get("name",""),tour:Z.get("toured",!1)?null:0,code:new URLSearchParams(location.search).get("g")?.toUpperCase()||null,game:null,gameMissing:!1,mySub:null,showUsed:!1,showGames:!1,showSettings:!1,account:null,showAccount:!1,accountMode:"create",accountError:"",accountNote:"",blocked:new Set(Z.get("blocked",[])),reportFor:null,reportStep:"menu",moving:!1,summaries:{},busy:!1,error:"",toast:""},kr=null,Uh=!1,xy=null,zh=new Set,Bh={},Vy=["#4B4DDB","#FF6A4D","#1FB895","#FFB020","#E84D9A"],Rr=(n,e)=>Vy[Math.max(0,n.order.indexOf(e))%Vy.length],w0=["\u{1F602}","\u{1F92F}","\u{1F525}","\u2764\uFE0F"],$=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ne=n=>Ye(le,"games",n),Je=(n,e)=>m.blocked.has(e)&&e!==m.uid?v.report.hiddenName:n.players[e]?.name,Qi=n=>m.blocked.has(n.uid)&&n.uid!==m.uid?v.report.hiddenWord:n.word,Wh=n=>m.blocked.has(n.uid)&&n.uid!==m.uid?v.report.hiddenName:n.name,Kh=(n,e,t)=>Ye(le,"games",n,"rounds",String(e),"subs",t),v0=n=>`${location.origin}${location.pathname}?g=${n}`;function qy(n){let e=n?`${location.pathname}?g=${n}`:location.pathname;history.replaceState(null,"",e)}function I0(n){let e=Z.get("games",[]).filter(t=>t.code!==n);e.unshift({code:n,at:Date.now()}),Z.set("games",e.slice(0,6))}function ue(n){m.toast=n,M(),clearTimeout(ue.t),ue.t=setTimeout(()=>{m.toast="",M()},3200)}function fe(n){console.error(n),m.busy=!1,m.error=typeof n=="string"?n:v.errors.generic,M()}var b0={logo:[409,640],spark:[358,360],bolt:[195,360],hammer:[313,360],bolts:[383,360],burst:[343,360],swing:[342,360]},ht=(n,e,t="")=>{let[r,i]=b0[n];return`<img class="art ${t}" src="art/${n}.webp" width="${Math.round(r*e/i)}" height="${e}" alt="" aria-hidden="true" decoding="async">`},jy='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M9.5 9.3a2.6 2.6 0 0 1 5 .9c0 1.7-2.5 2.3-2.5 3.8"/><path d="M12 17.2h.01"/></svg>',Gy='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',Jh='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>',E0='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',la=`<button class="icon-btn back" data-act="home" aria-label="${v.a11y.back}">${E0}</button>`,T0=n=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/>${n?'<path d="M17 9l5 6M22 9l-5 6"/>':'<path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12"/>'}</svg>`,A0='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',Hi='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',S0='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>',k0='<svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>',Hh=(n,e)=>e===m.uid?"":`<button class="icon-btn soft more" data-act="player-menu" data-uid="${$(e)}" aria-label="${v.report.more($(Je(n,e)))}">${S0}</button>`,Fn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';function zy(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}var Ly=(()=>{let n=20261012,e=()=>(n=(n*1664525+1013904223)%4294967296,n/4294967296),t=yh.map((r,i)=>i);for(let r=t.length-1;r>0;r--){let i=Math.floor(e()*(r+1));[t[r],t[i]]=[t[i],t[r]]}return t})();function R0(n=zy()){let e=Math.round(Date.UTC(...n.split("-").map((t,r)=>r===1?t-1:+t))/864e5);return Array.from({length:5},(t,r)=>yh[Ly[(e*5+r)%Ly.length]])}async function Xh(n={}){let e=Mt(m.name);if(!e)return fe(v.errors.nameFirst);if(zi(e))return fe(v.errors.rudeName);Pr({name:e}),m.busy=!0,m.error="",M();try{let t;for(let r=0;r<8&&(t=fh(),!!(await Lt(ne(t))).exists());r++);await ct(ne(t),{code:t,hostUid:m.uid,status:"lobby",createdAt:ut(),players:{[m.uid]:{name:e,joinedAt:Date.now()}},order:[m.uid],round:1,revealed:0,submitted:{},history:[],used:[],winWord:null,nudges:{},...n.daily?{daily:{date:zy(),words:R0()}}:{}}),m.busy=!1,Un(t)}catch(t){fe(t)}}async function My(n,e){let t=Mt(e||m.name),r=String(n||"").trim().toUpperCase();if(!t)return fe(v.errors.nameFirst);if(zi(t))return fe(v.errors.rudeName);if(!/^[A-Z]{4}$/.test(r))return fe(v.errors.codeFormat);Pr({name:t}),m.busy=!0,m.error="",M();try{await cn(le,async i=>{let s=await i.get(ne(r));if(!s.exists())throw v.errors.noGame;let a=s.data();if(!a.players[m.uid]){if(a.status!=="lobby")throw v.errors.started;if(a.order.length>=5)throw v.errors.full(5);i.update(ne(r),{[`players.${m.uid}`]:{name:t,joinedAt:Date.now()},order:[...a.order,m.uid]})}}),m.busy=!1,Un(r)}catch(i){fe(i)}}async function P0(){let n=m.game;if(!(n.order.length<2))try{if(n.daily){let e=n.order.map((t,r)=>({uid:t,name:n.players[t].name,word:n.daily.words[r].word,def:n.daily.words[r].def}));await an(ne(n.code),{status:"playing",round:2,revealed:1,submitted:{},history:[{round:1,dealt:!0,words:e}],used:[...new Set(e.map(t=>Ue(t.word)))]})}else await an(ne(n.code),{status:"playing",round:1})}catch(e){fe(e)}}async function C0(n){let e=m.game,t=Mt(n);if(!t)return fe(v.errors.wordFirst);if(zi(t))return fe(v.errors.rudeWord);if(ph(t,e.used))return fe(v.errors.used(t));let r=e.round;m.busy=!0,m.error="",M();try{try{await ct(Kh(e.code,r,m.uid),{word:t,norm:Ue(t),at:ut()})}catch(i){if(!(await Lt(Kh(e.code,r,m.uid))).exists())throw i}m.mySub={round:r,word:t},await cn(le,async i=>{let a=(await i.get(ne(e.code))).data();if(a.status!=="playing"||a.round!==r)return;let c={...a.submitted,[m.uid]:!0},l=a.order.every(d=>c[d]);i.update(ne(e.code),{submitted:c,...l?{revealed:r}:{}})}),m.busy=!1,M()}catch(i){fe(i)}}async function D0(n){if(!Uh){Uh=!0;try{let e=n.round,t=await sh(ta(le,"games",n.code,"rounds",String(e),"subs")),r={};if(t.forEach(s=>{r[s.id]=s.data()}),!n.order.every(s=>r[s]))return;let i=n.order.map(s=>({uid:s,name:n.players[s].name,word:r[s].word,norm:r[s].norm}));await cn(le,async s=>{let c=(await s.get(ne(n.code))).data();if(c.status!=="playing"||c.round!==e||c.revealed!==e)return;let l=[...c.history,{round:e,words:i.map(({uid:d,name:f,word:y})=>({uid:d,name:f,word:y}))}];if(Bg(i))s.update(ne(n.code),{history:l,status:"won",winWord:i[0].word});else{let d=[...new Set([...c.used,...i.map(f=>f.norm)])];s.update(ne(n.code),{history:l,used:d,round:e+1,submitted:{}})}})}catch(e){console.error("resolve failed",e)}finally{Uh=!1}}}async function N0(n){let e=m.game;if(Bh[n]&&Date.now()-Bh[n]<6e4)return ue(v.toasts.waitMinute);Bh[n]=Date.now();try{await an(ne(e.code),{[`nudges.${n}`]:{at:Date.now(),from:e.players[m.uid].name}}),ue(v.toasts.nudged(e.players[n].name))}catch(t){fe(t)}}async function O0(){let n=m.game,e=n.history[n.history.length-1];if(e)try{await cn(le,async t=>{let r=(await t.get(ne(n.code))).data(),i=r.history[r.history.length-1];r.status!=="playing"||!i||i.round!==e.round||r.vote?.round===e.round||t.update(ne(n.code),{vote:{round:e.round,by:m.uid,yes:{[m.uid]:!0},no:{},result:null}})})}catch(t){fe(t)}}async function Fy(n){let e=m.game;try{await cn(le,async t=>{let r=(await t.get(ne(e.code))).data(),i=r.vote,s=r.history[r.history.length-1];if(r.status!=="playing"||!i||i.result||!s||i.round!==s.round)return;let a={...i.yes},c={...i.no};n?a[m.uid]=!0:c[m.uid]=!0,n?r.order.every(l=>a[l])?t.update(ne(e.code),{vote:{...i,yes:a,no:c,result:"yes"},status:"won",wonBy:"vote",winWord:mh(s.words.map(l=>l.word)),history:r.history}):t.update(ne(e.code),{vote:{...i,yes:a,no:c}}):t.update(ne(e.code),{vote:{...i,yes:a,no:c,result:"no"}})})}catch(t){fe(t)}}async function x0(){let n=m.game;m.busy=!0,M();try{let e;for(let t=0;t<8&&(e=fh(),!!(await Lt(ne(e))).exists());t++);await ct(ne(e),{code:e,hostUid:m.uid,status:"lobby",createdAt:ut(),players:{[m.uid]:{name:n.players[m.uid].name,joinedAt:Date.now()}},order:[m.uid],round:1,revealed:0,submitted:{},history:[],used:[],winWord:null,nudges:{}}),zh.add(e),await an(ne(n.code),{next:e,nextBy:m.uid}),m.busy=!1,Un(e)}catch(e){fe(e)}}async function V0(n){let e=n.next;try{let t=await Lt(ne(e)),r=t.exists()?t.data():null;if(!r)return M();if(!r.players[m.uid]){if(r.status!=="lobby"||r.order.length>=5)return M();await cn(le,async i=>{let s=(await i.get(ne(e))).data();s.players[m.uid]||s.status!=="lobby"||s.order.length>=5||i.update(ne(e),{[`players.${m.uid}`]:{name:n.players[m.uid].name,joinedAt:Date.now()},order:[...s.order,m.uid]})}),ue(v.toasts.rematch(r.players[r.hostUid]?.name||v.someone))}Un(e)}catch{M()}}function L0(n){let e=n.history.map((r,i)=>{let s={};r.words.forEach(l=>{let d=Ue(l.word);s[d]=(s[d]||0)+1});let a=i===n.history.length-1;return`${r.words.map(l=>a?"\u{1F7E3}":s[Ue(l.word)]>1?"\u{1F7E0}":"\u26AA").join("")} ${r.words.map(l=>l.word).join(" \xB7 ")}`});return`${(n.wonBy==="vote"?v.share.headVote:v.share.head)(n.winWord,n.history.length)}

${e.join(`
`)}

${v.share.playWithUs}`}async function M0(){let n=m.game,e=location.origin+location.pathname,t=L0(n);try{navigator.share?await navigator.share({title:v.appName,text:t,url:e}):(await navigator.clipboard.writeText(`${t} ${e}`),ue(v.toasts.copiedShare))}catch{}}async function F0(){let n=m.game;Mt(m.name)||(m.name=n.players[m.uid]?.name||""),Qy(),Xh()}function $y(n){let e=n.order.filter(s=>s!==m.uid).map(s=>Je(n,s)).filter(Boolean),t=v.games,r=e.length?t.with(ha(e)):t.justYou;if(!n.players[m.uid])return{with_:r,status:n.removed?.includes(m.uid)?t.removed:t.notIn,tone:"muted"};if(n.status==="lobby")return{with_:r,status:n.hostUid===m.uid?t.startIt:t.waitingStart,tone:n.hostUid===m.uid?"hot":"muted"};if(n.status==="won")return{with_:r,status:(n.wonBy==="vote"?t.closeEnough:t.forged)(n.winWord),tone:"done"};if(!n.submitted?.[m.uid])return{with_:r,status:t.yourTurn(n.round),tone:"hot"};let i=n.order.filter(s=>!n.submitted?.[s]).map(s=>Je(n,s));return{with_:r,status:i.length?t.waitingOn(ha(i)):t.revealing,tone:"muted"}}async function Yi(){try{let e=await sh(Ag(ta(le,"games"),Sg("order","array-contains",m.uid),kg(30))),t=Z.get("games",[]),r=new Set(t.map(i=>i.code));e.forEach(i=>{let s=i.data();m.summaries[s.code]=$y(s),r.has(s.code)||t.push({code:s.code,at:s.createdAt?.toMillis?.()||0})}),t.sort((i,s)=>s.at-i.at),Z.set("games",t.slice(0,12))}catch(e){console.warn("games list",e)}let n=Z.get("games",[]);await Promise.all(n.filter(({code:e})=>!m.summaries[e]).map(async({code:e})=>{try{let t=await Lt(ne(e));m.summaries[e]=t.exists()?$y(t.data()):{with_:v.games.ended,status:v.games.gone,tone:"muted",gone:!0}}catch{}})),M()}function $0(n){Z.set("games",Z.get("games",[]).filter(e=>e.code!==n)),delete m.summaries[n],M()}var Wy=n=>Ye(le,"users",n);function Pr(n){m.uid&&ct(Wy(m.uid),n,{merge:!0}).catch(e=>console.warn("profile",e))}async function U0(){try{let n=(await Lt(Wy(m.uid))).data();if(!n){Mt(m.name)&&Pr({name:Mt(m.name),blocked:[...m.blocked]});return}m.account&&n.name&&(m.name=n.name,Z.set("name",n.name)),n.blocked?.length&&(n.blocked.forEach(e=>m.blocked.add(e)),Z.set("blocked",[...m.blocked])),M()}catch(n){console.warn("profile",n)}}function fa(n){console.error(n);let e=v.account.errors[n?.code];m.accountError=e===void 0?v.errors.generic:e,m.busy=!1,M()}function Zh(n){m.busy=!1,!(!n||n.status==="redirecting")&&(m.showAccount=!1,m.accountError="",m.accountNote="",m.account=hh(lt.currentUser),m.name&&Pr({name:Mt(m.name)}),n.status==="switched"?(ue(v.account.moving),Og(le,n.uid,e=>{ue(v.account.moved(e)),Yi(),m.code&&Un(m.code)})):ue(n.status==="linked"?v.account.welcome:v.account.welcomeBack),M())}async function B0(){m.busy=!0,m.accountError="",M();try{Zh(await xg(lt,le))}catch(n){fa(n)}}async function q0(n,e){m.busy=!0,m.accountError="",m.accountNote="",M();try{Zh(m.accountMode==="create"?await Lg(lt,n,e):await Mg(lt,le,n,e))}catch(t){fa(t)}}async function j0(){let n=document.getElementById("acct-email")?.value.trim();if(!n){m.accountError=v.account.needEmail,M();return}try{await Fg(lt,n),m.accountError="",m.accountNote=v.account.resetSent(n),M()}catch(e){fa(e)}}function Ky(){["games","blocked","alertsAsked"].forEach(n=>{try{localStorage.removeItem("samesies."+n)}catch{}}),m.blocked=new Set,m.summaries={}}async function G0(){if(confirm(v.account.confirmSignOut))try{await aa($n,le,m.uid),Ky(),m.showSettings=!1,m.uid=null,m.account=null,await lh(lt),ue(v.account.signedOut)}catch(n){fe(n)}}async function z0(){if(confirm(v.del.confirm))try{await aa($n,le,m.uid),await $g(le,m.uid),Ky(),m.name="",Z.set("name",""),m.showSettings=!1,m.uid=null,m.account=null,await lh(lt),ue(v.del.done)}catch(n){fe(n)}}async function W0(n,e){let t=m.game,r=m.reportFor,i=t.history.flatMap(s=>s.words.filter(a=>a.uid===r).map(a=>a.word));try{await Pg(ta(le,"reports"),{by:m.uid,byName:t.players[m.uid]?.name||"",game:t.code,reported:r,reportedName:t.players[r]?.name||"",words:i,reason:n,note:String(e||"").slice(0,500),at:ut(),handled:!1}),m.reportFor=null,ue(v.report.sent)}catch(s){fe(s)}}function Hy(n){let e=m.game?.players[n]?.name||v.thisPlayer;m.blocked.has(n)?(m.blocked.delete(n),ue(v.report.unblocked(e))):(m.blocked.add(n),ue(v.report.blocked(e))),Z.set("blocked",[...m.blocked]),Pr({blocked:[...m.blocked]}),m.reportFor=null,M()}async function K0(n){let e=m.game,t=e.players[n]?.name||v.thisPlayer;if(confirm(v.confirmRemove(t)))try{await cn(le,async r=>{let i=(await r.get(ne(e.code))).data();if(!i.players[n]||i.order.length<=2)return;let s={...i.players};delete s[n];let a=i.order.filter(d=>d!==n),c={...i.submitted};delete c[n];let l=i.status==="playing"&&a.every(d=>c[d]);r.update(ne(e.code),{players:s,order:a,submitted:c,removed:[...i.removed||[],n],...i.hostUid===n?{hostUid:a[0]}:{},...l?{revealed:i.round}:{}})}),ue(v.toasts.removed(t))}catch(r){fe(r)}}async function H0(n,e,t){let r=m.game,i=`${n}_${e}`,s=r.reactions?.[i]?.[m.uid];try{await an(ne(r.code),{[`reactions.${i}.${m.uid}`]:s===t?Dg():t})}catch(a){fe(a)}}function Q0(n,e,t){let r=n.reactions?.[`${e}_${t}`]||{},i={};return Object.values(r).forEach(s=>{i[s]=(i[s]||0)+1}),`<div class="reacts">${w0.map(s=>`<button class="react${r[m.uid]===s?" mine":""}" data-act="react" data-round="${e}" data-uid="${$(t)}" data-emoji="${s}" aria-label="${v.a11y.react(s,i[s])}">${s}${i[s]?`<span>${i[s]}</span>`:""}</button>`).join("")}</div>`}function Y0(n,e,t){let r=n.reactions?.[`${e}_${t}`]||{},i={};Object.values(r).forEach(a=>{i[a]=(i[a]||0)+1});let s=Object.entries(i).map(([a,c])=>`${a}${c>1?c:""}`);return s.length?`<span class="chip-reacts">${s.join(" ")}</span>`:""}function Un(n){kr&&kr(),m.code=n,m.game=null,m.gameMissing=!1,m.mySub=null,m.error="",m.showUsed=!1,qy(n),M(),kr=na(ne(n),async e=>{if(!e.exists()){m.gameMissing=!0,m.game=null,M();return}let t=e.data();m.game=t,t.players[m.uid]&&I0(n);let r=t.nudges?.[m.uid];if(r&&r.at>Z.get("nudgeSeen",0)&&(Z.set("nudgeSeen",r.at),Date.now()-r.at<10*6e4)){ue(v.toasts.nudgedYou(r.from));try{navigator.vibrate?.(200)}catch{}}if(t.status==="won"&&t.next&&t.players[m.uid]&&!zh.has(t.next)){zh.add(t.next),V0(t);return}if(t.players[m.uid]&&!Z.get("toured",!1)&&(m.tour=null,Z.set("toured",!0)),t.vote&&!t.vote.result&&t.vote.by!==m.uid){let i=`${n}.${t.vote.round}`;if(xy!==i){xy=i,ue(v.toasts.askedClose(t.players[t.vote.by]?.name||v.someone));try{navigator.vibrate?.(200)}catch{}}}if(t.status==="playing"&&t.submitted?.[m.uid]&&m.mySub?.round!==t.round)try{let i=await Lt(Kh(n,t.round,m.uid));i.exists()&&(m.mySub={round:t.round,word:i.data().word})}catch{}t.status==="playing"&&t.revealed===t.round&&D0(t),M()},e=>fe(e))}function Qy(){kr&&kr(),kr=null,m.code=null,m.game=null,m.gameMissing=!1,m.error="",qy(null),M(),Yi()}function pa(n,e){let t=n.used.length;return`
  <header class="bar">
    ${la}
    <div class="bar-title">
      <span class="eyebrow">${v.header.game($(n.code))}</span>
      <h1 class="h-round">${$(e)}</h1>
    </div>
    <button class="icon-btn quiet" data-act="tour" aria-label="${v.a11y.howTo}">${jy}</button>
    <button class="icon-btn quiet" data-act="mute" aria-label="${Mn()?v.a11y.soundOn:v.a11y.soundOff}" aria-pressed="${Mn()}">${T0(Mn())}</button>
    ${n.status!=="lobby"?`<button class="icon-btn" data-act="used" aria-label="${v.a11y.usedWords(t)}">${Gy}</button>`:""}
  </header>`}function Uy(n=v.loading){return`<main class="screen center"><div class="pulse">${ht("logo",150)}</div><p class="muted">${$(n)}</p></main>`}function J0(){let n=Z.get("games",[]);return`
  <main class="screen">
    <div class="home-top"><button class="help-pill" data-act="tour">${jy}${v.home.howTo}</button><button class="icon-btn quiet settings-btn" data-act="settings" aria-label="${v.a11y.settings}">${A0}</button></div>
    <div class="hero">
      ${ht("logo",210,"hero-logo")}
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
      <span class="daily-title">${v.home.dailyTitle}</span>${ht("bolts",64,"daily-art")}
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
  </main>`}function X0(n){let e=n.order.length>=5,t=n.status!=="lobby";return`
  <main class="screen">
    <header class="bar">${la}</header>
    <div class="hero tight">
      ${ht("logo",170,"hero-logo")}
      <h1 class="wordmark small">Brain<b>smith</b></h1>
      <p class="tagline">${v.join.invited($(Je(n,n.hostUid)||v.aFriend),$(n.code))}</p>
    </div>
    <div class="grow"></div>
    ${t?`<p class="notice">${v.join.started}</p>
      <button class="btn outline" data-act="home">${v.goToStart}</button>`:e?`<p class="notice">${v.join.full}</p><button class="btn outline" data-act="home">${v.goToStart}</button>`:`<form class="stack" data-form="joinlink">
        <label for="name" class="label">${v.home.yourName}</label>
        <input id="name" name="name" class="input" autocomplete="nickname" maxlength="40" value="${$(m.name)}" placeholder="${v.home.namePlaceholder}">
        <button class="btn primary" ${m.busy?"disabled":""}>${v.join.button}</button>
      </form>`}
    ${m.error?`<p class="error" role="alert">${$(m.error)}</p>`:""}
  </main>`}function Z0(n){let e=n.hostUid===m.uid,t=n.order.length>=2;return`
  <main class="screen">
    ${pa(n,v.lobby.title)}
    <section class="card center-text">
      ${n.daily?`<span class="badge">${v.lobby.dailyBadge}</span>`:""}
      <span class="muted">${v.lobby.inviteWith}</span>
      <div class="big-code">${$(n.code)}</div>
      <button class="btn soft" data-act="share">${v.lobby.shareLink}</button>
    </section>
    <section class="stack">
      <span class="eyebrow">${v.lobby.players(n.order.length,5)}</span>
      ${n.order.map(r=>`
        <div class="player">
          <div class="dot done" style="background:${Rr(n,r)}">${Jh}</div>
          <span class="pname">${$(Je(n,r))}${r===m.uid?v.you:""}</span>
          ${r===n.hostUid?`<span class="muted small">${v.host}</span>`:""}
          ${Hh(n,r)}
        </div>`).join("")}
    </section>
    <div class="grow"></div>
    ${e?`<button class="btn primary" data-act="start" ${t?"":"disabled"}>${t?v.lobby.startNow:v.lobby.needMore}</button>`:`<p class="fine">${v.lobby.waitingFor($(Je(n,n.hostUid)||v.theHost))}</p>`}
  </main>`}function eA(n){let e=n.history[n.history.length-1],t=!!n.submitted?.[m.uid],r=n.order.filter(i=>!n.submitted?.[i]);return`
  <main class="screen">
    ${pa(n,v.round.title(n.round))}
    ${e&&n.vote?.round===e.round&&!n.vote.result?Yy(n):""}
    <section class="card center-text">
      ${e?`
        <span class="muted">${v.round.connect}</span>
        <div class="word-chips">${e.words.map(i=>`<span class="word-chip" style="--pc:${Rr(n,i.uid)}">${$(Qi(i))}${Y0(n,e.round,i.uid)}</span>`).join("")}</div>
        ${e.dealt?`<div class="defs">${e.words.map(i=>`<span><strong>${$(i.word)}:</strong> ${$(i.def)}</span>`).join("")}</div>`:""}
        ${n.vote?.round===e.round||e.dealt?"":`<button class="linkish close-link" data-act="vote">${v.round.askClose}</button>`}`:`
        <span class="muted">${v.round.roundOne}</span>
        <p class="prompt">${v.round.prompt}</p>
        <span class="muted small">${v.round.promptTip}</span>`}
    </section>
    ${t?`
      <section class="locked">
        <span class="muted">${v.round.lockedIn}</span>
        <div class="locked-word">${$(m.mySub?.round===n.round?m.mySub.word:"\u2713")}</div>
        <span class="muted small">${r.length?v.round.waitingOn(r.map(i=>$(Je(n,i))).join(", ")):v.round.revealing}</span>
      </section>
      ${r.length?aA():""}`:`
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
          ${s?`<div class="dot done" style="background:${Rr(n,i)}">${Jh}</div>`:`<div class="dot" style="border-color:${Rr(n,i)}"></div>`}
          <span class="pname">${$(Je(n,i))}${a?v.you:""}</span>
          ${s?`<span class="muted small">${v.round.playerLocked}</span>${Hh(n,i)}`:a?`<span class="muted small">${v.round.thinking}</span>`:`<button class="btn nudge" data-act="nudge" data-uid="${$(i)}">${v.round.nudge}</button>${c?`<button class="icon-btn soft remove" data-act="remove" data-uid="${$(i)}" aria-label="${v.a11y.removePlayer($(Je(n,i)))}">${Fn}</button>`:""}${Hh(n,i)}`}
        </div>`}).join("")}
    </section>
  </main>`}function tA(n){let e={};return n.forEach(t=>{var r;(e[r=Ue(t.word)]||(e[r]=[])).push(t)}),Object.values(e).filter(t=>t.length>1).sort((t,r)=>r.length-t.length)}var ha=v.listNames;function nA(n,e){let t=tA(e.words),r=new Set(t.flat().map(a=>a.uid)),i=t.length?t.map(a=>v.reveal.said(ha(a.map(c=>$(Wh(c)))),a.length===2,$(Qi(a[0])))).join("<br>"):"";if(e.dealt)return rA(n,e);let s=t.length?v.reveal.soClose:e.words.length===2?v.reveal.notYetTwo:v.reveal.notYetAll;return`
  <main class="screen reveal-screen">
    ${pa(n,v.reveal.title(e.round))}
    <section class="stack reveal">
      ${e.words.map(a=>`
        <div class="reveal-card${r.has(a.uid)?" matched":""}" style="--pc:${Rr(n,a.uid)}">
          <span class="rname">${$(Wh(a))}</span>
          <span class="rword">${$(Qi(a))}</span>
          ${Q0(n,e.round,a.uid)}
        </div>`).join("")}
    </section>
    <div class="after-reveal stack">
    ${i?`<div class="so-close"><span class="so-close-names">${i}</span><span class="muted">${s}</span></div>`:`<div class="row msg">${ht("spark",44)}<span class="muted">${$(s)}</span></div>`}
    ${n.vote?.round===e.round?Yy(n):`<button class="btn ${gh(e.words.map(a=>a.word))?"close-hot":"soft"}" data-act="vote">${gh(e.words.map(a=>a.word))?v.reveal.closeHot:v.reveal.close}</button>`}
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${e.round}">${v.reveal.next(e.round+1)}</button>
  </main>`}function rA(n,e){return`
  <main class="screen reveal-screen">
    ${pa(n,v.dealt.title)}
    <section class="stack reveal">
      ${e.words.map(t=>`
        <div class="reveal-card" style="--pc:${Rr(n,t.uid)}">
          <span class="rname">${v.dealt.got($(Wh(t)))}</span>
          <span class="rword">${$(t.word)}</span>
          <span class="rdef">${$(t.def)}</span>
        </div>`).join("")}
    </section>
    <div class="after-reveal stack">
      <div class="row msg">${ht("spark",44)}<span class="muted">${v.dealt.msg}</span></div>
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${e.round}">${v.dealt.next}</button>
  </main>`}function Yy(n){let e=n.vote,t=$(Je(n,e.by)||v.someone);if(e.result==="no"){let s=$(Je(n,Object.keys(e.no)[0])||v.someone);return`<section class="vote done"><span class="muted">${v.vote.playOn(s)}</span></section>`}let r=e.yes[m.uid]||e.no[m.uid],i=n.order.filter(s=>!e.yes[s]&&!e.no[s]).map(s=>$(Je(n,s)));return`
  <section class="vote" aria-live="polite">
    <span class="vote-title">${v.vote.title}</span>
    <span class="muted">${v.vote.explain(e.by===m.uid?v.vote.youAsked:v.vote.asked(t),e.round)}</span>
    ${r?`<span class="muted small">${i.length?v.vote.waitingOn(i.join(", ")):v.vote.counting}</span>`:`<div class="row"><button class="btn primary grow" data-act="yes">${v.vote.yes}</button><button class="btn outline" data-act="no">${v.vote.no}</button></div>`}
  </section>`}function iA(n){let e=n.order.map(r=>Je(n,r)),t=ha(e);return`
  <main class="screen win">
    <div class="win-top">
      <div class="pop win-art">${ht("swing",150)}</div>
      <h1 class="win-title">${n.wonBy==="vote"?v.won.closeEnough:v.won.forged}</h1>
      <span class="win-sub">${n.wonBy==="vote"?v.won.agreed:v.won.everyone}</span>
      <div class="win-word">${$(n.winWord)}</div>
      <span class="win-sub">${$(t)} \xB7 ${v.rounds(n.history.length)}</span>
    </div>
    <div class="grow"></div>
    <section class="chain">
      <span class="eyebrow light">${v.won.howYouGot}</span>
      ${n.history.map((r,i)=>`<span class="${i===n.history.length-1?"strong":""}">${r.words.map(s=>$(Qi(s))).join(" \xB7 ")}</span>`).join("")}
    </section>
    ${m.moving?`<p class="notice move-note">${v.move.won}</p>`:""}
    <button class="btn coral" data-act="sharegame">${v.won.share}</button>
    ${n.next?`<button class="btn white" data-act="open" data-code="${$(n.next)}">${v.won.joinNext}</button>`:`<button class="btn white" data-act="again" ${m.busy?"disabled":""}>${v.won.again}</button>`}
    <div class="row">
      <button class="btn ghost-light grow" data-act="newcrew" ${m.busy?"disabled":""}>${v.won.newCrew}</button>
      <button class="btn ghost-light grow" data-act="home">${v.won.home}</button>
    </div>
  </main>`}var $t=(n,e,t="")=>`<span class="mini ${t}"><b>${n}</b><i>${e}</i></span>`,te=v.tour,[qh,jh,Gh]=te.names,Ut=[{title:te.goalTitle,body:te.goalBody,art:()=>`<div class="tour-art">${ht("logo",190)}</div>`},{title:te.secretTitle,body:te.secretBody,art:()=>`<div class="scene">${$t("?",qh,"back")}${$t("?",jh,"back d1")}${$t("?",Gh,"back d2")}</div>`},{title:te.flipTitle,body:te.flipBody,art:()=>`<div class="scene flip">${$t(te.flipWords[0],qh)}${$t(te.flipWords[1],jh,"d1")}${$t(te.flipWords[2],Gh,"d2")}</div>`},{title:te.middleTitle,body:te.middleBody,art:()=>`<div class="scene bridge"><span class="bridge-row"><span class="pill-word">${te.flipWords[0]}</span><span class="plus">+</span><span class="pill-word">${te.flipWords[1]}</span></span><span class="arrow">\u2193</span><span class="pill-word hot">${te.middleGuess}</span></div>`},{title:te.forgeTitle,body:te.forgeBody,art:()=>`<div class="scene forged">${ht("swing",80,"forge-hammer")}${$t(te.forgeWord,qh,"win")}${$t(te.forgeWord,jh,"win d1")}${$t(te.forgeWord,Gh,"win d2")}</div>`},{title:te.matchTitle,body:"",art:()=>`<ul class="rules">${te.matchRules.map(([n,e,t])=>`
      <li class="${n}"><span class="mark">${n==="ok"?Jh:"\u2715"}</span><span><b>${e}</b> ${t}</span></li>`).join("")}
    </ul>`},{title:te.toolsTitle,body:"",art:()=>`<ul class="rules tools">${te.tools.map(([n,e,t])=>`
      <li><span class="mark">${n==="list"?Gy:n}</span><span><b>${e}</b> ${t}</span></li>`).join("")}
    </ul>`}];function sA(){let n=m.tour,e=Ut.length-1;return`
  <div class="sheet-backdrop tour" data-act="tour-skip">
    <div class="sheet howto" role="dialog" aria-modal="true" aria-labelledby="tour-title" data-stop>
      <div class="howto-head">
        <span id="tour-title" class="h-sheet">${te.title}</span>
        <button class="icon-btn quiet" data-act="tour-skip" aria-label="${v.a11y.closeHowTo}">\u2715</button>
      </div>
      <div class="howto-track" tabindex="0" aria-roledescription="carousel">
        ${Ut.map((t,r)=>`
        <section class="howto-card${r===n?" on":""}" aria-roledescription="slide" aria-label="${v.a11y.slide(r+1,Ut.length,t.title)}">
          ${t.art()}
          <span class="eyebrow">${te.count(r+1,Ut.length)}</span>
          <h2 class="howto-title">${t.title}</h2>
          ${t.body?`<p class="muted tour-body">${t.body}</p>`:""}
        </section>`).join("")}
      </div>
      <div class="dots" aria-hidden="true">${Ut.map((t,r)=>`<span class="${r===n?"on":""}"></span>`).join("")}</div>
      <div class="row howto-nav">
        <button class="btn ghost" data-act="tour-skip" ${n===e?"hidden":""}>${te.skip}</button>
        <button class="btn primary grow" data-act="tour-next">${n===e?te.done:te.next}</button>
      </div>
    </div>
  </div>`}function Qh(){let n=_e.querySelector(".howto-track");if(!n)return;n.scrollLeft=m.tour*n.clientWidth;let e=()=>{let t=Math.round(n.scrollLeft/n.clientWidth);if(t===m.tour||t<0||t>=Ut.length)return;m.tour=t;let r=t===Ut.length-1;_e.querySelectorAll(".tour .dots span").forEach((s,a)=>s.classList.toggle("on",a===t)),_e.querySelectorAll(".howto-card").forEach((s,a)=>s.classList.toggle("on",a===t));let i=_e.querySelector("[data-act=tour-next]");i.textContent=r?te.done:te.next,_e.querySelector(".howto-nav .btn.ghost").hidden=r};n.addEventListener("scroll",()=>{clearTimeout(Qh.t),Qh.t=setTimeout(e,60)},{passive:!0})}function Yh(n){let e=_e.querySelector(".howto-track");if(!e){m.tour=n,M();return}e.scrollTo({left:n*e.clientWidth,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}function oA(){let n=Z.get("games",[]);return`
  <div class="sheet-backdrop" data-act="closegames">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="games-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="games-title" class="h-sheet">${v.games.title}</h2>
        <button class="icon-btn soft" data-act="closegames" aria-label="${v.a11y.close}">${Fn}</button>
      </div>
      ${n.length?n.map(({code:e})=>{let t=m.summaries[e];return`
        <div class="game-row">
          <button class="game-open" data-act="${t?.gone?"forget":"open"}" data-code="${$(e)}">
            <span class="game-with">${$(t?t.with_:v.games.loading)}</span>
            <span class="game-status ${t?.tone||""}">${$(t?t.status:e)}</span>
          </button>
          <button class="icon-btn soft" data-act="forget" data-code="${$(e)}" aria-label="${v.a11y.forgetGame($(e))}">${Fn}</button>
        </div>`}).join(""):`<p class="muted">${v.games.none}</p>`}
    </div>
  </div>`}function aA(){let n=v.alerts;return Ki()!=="yes"||oa()!=="default"||Z.get("alertsAsked",!1)?"":`
      <section class="alert-ask">
        <span class="alert-ask-title">${n.askTitle}</span>
        <span class="muted small">${n.askBody}</span>
        <div class="row"><button class="btn primary grow" data-act="alerts-on">${n.yes}</button><button class="btn ghost" data-act="alerts-later">${n.no}</button></div>
      </section>`}function cA(){let n=v.alerts,e=Ki();if(e==="no")return"";if(e==="ios-install")return`<div class="set-row static"><span class="set-text"><span class="set-label">${n.label}</span><span class="set-sub">${n.iosInstall}</span></span></div>`;if(oa()==="denied")return`<div class="set-row static"><span class="set-text"><span class="set-label">${n.label}</span><span class="set-sub">${n.blocked}</span></span></div>`;let t=Mh();return`
        <button class="set-row" data-act="${t?"alerts-off":"alerts-on"}" role="switch" aria-checked="${t}">
          <span class="set-text"><span class="set-label">${n.label}</span><span class="set-sub">${n.sub}</span></span>
          <span class="switch ${t?"on":""}" aria-hidden="true"><i></i></span>
        </button>`}async function uA(){Z.set("alertsAsked",!0);try{let n=await Ay($n,le,m.uid);ue(n?v.alerts.onToast:v.alerts.notNow)}catch(n){console.error(n),ue(v.alerts.failed)}M()}function lA(){let n=Z.get("games",[]),e=v.settings,t=(r,i,s="",a="")=>`
        <button ${a.includes("class=")?"":'class="set-row"'} data-act="${r}" ${a}>
          <span class="set-text"><span class="set-label">${i}</span>${s?`<span class="set-sub">${s}</span>`:""}</span>${Hi}
        </button>`;return`
  <div class="sheet-backdrop" data-act="closesettings">
    <div class="sheet settings" role="dialog" aria-modal="true" aria-labelledby="settings-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="settings-title" class="h-sheet">${e.title}</h2>
        <button class="icon-btn soft" data-act="closesettings" aria-label="${v.a11y.close}">${Fn}</button>
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
        <button class="set-row" data-act="mute" role="switch" aria-checked="${!Mn()}">
          <span class="set-text"><span class="set-label">${e.sound}</span><span class="set-sub">${e.soundSub}</span></span>
          <span class="switch ${Mn()?"":"on"}" aria-hidden="true"><i></i></span>
        </button>
        ${cA()}
        ${t("settings-games",e.pastGames,n.length?e.pastCount(n.length):e.noneYet)}
        ${t("settings-tour",e.howTo,e.howToSub)}
      </div>

      <div class="set-group">
        <a class="set-row" href="privacy.html"><span class="set-text"><span class="set-label">${e.privacy}</span></span>${Hi}</a>
        <a class="set-row" href="terms.html"><span class="set-text"><span class="set-label">${e.terms}</span></span>${Hi}</a>
        <div class="set-row disabled" aria-disabled="true"><span class="set-text"><span class="set-label">${e.restore}</span><span class="set-sub">${e.restoreSoon}</span></span></div>
      </div>

      <div class="set-group">
        ${t("delete-account",e.deleteAccount,e.deleteSub,'class="set-row danger-row"')}
      </div>

      <p class="fine maker">${e.contact}<br>${e.footer}</p>
    </div>
  </div>`}function hA(){let n=v.account,e=m.accountMode==="create";return`
  <div class="sheet-backdrop" data-act="closeaccount">
    <div class="sheet account" role="dialog" aria-modal="true" aria-labelledby="account-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="account-title" class="h-sheet">${n.title}</h2>
        <button class="icon-btn soft" data-act="closeaccount" aria-label="${v.a11y.close}">${Fn}</button>
      </div>
      <p class="muted">${n.body}</p>
      <button class="btn google" data-act="google" ${m.busy?"disabled":""}>${k0}${n.google}</button>
      <div class="or"><span></span>${n.or}<span></span></div>
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
  </div>`}function dA(n){let e=v.report,t=m.reportFor,r=$(n.players[t]?.name||v.thisPlayer),i=m.blocked.has(t),s=m.reportStep==="report"?`<form class="stack tight" data-form="report">
        <span class="label">${e.what}</span>
        ${e.reasons.map((a,c)=>`<label class="choice"><input type="radio" name="reason" value="${$(a)}" ${c===0?"checked":""}><span>${$(a)}</span></label>`).join("")}
        <label for="report-note" class="sr-only">${e.note}</label>
        <input id="report-note" name="note" class="input" maxlength="500" placeholder="${e.note}">
        ${i?"":`<label class="choice"><input type="checkbox" name="block"><span>${e.alsoBlock(r)}</span></label>`}
        <button class="btn primary">${e.send}</button>
      </form>`:`<div class="set-group">
        <button class="set-row" data-act="report-start"><span class="set-text"><span class="set-label">${e.reportBtn(r)}</span><span class="set-sub">${e.reportSub}</span></span>${Hi}</button>
        <button class="set-row" data-act="block" data-uid="${$(t)}"><span class="set-text"><span class="set-label">${i?e.unblockBtn(r):e.blockBtn(r)}</span><span class="set-sub">${i?e.unblockSub:e.blockSub}</span></span>${Hi}</button>
      </div>`;return`
  <div class="sheet-backdrop" data-act="closereport">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="report-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="report-title" class="h-sheet">${m.reportStep==="report"?e.title(r):r}</h2>
        <button class="icon-btn soft" data-act="closereport" aria-label="${v.a11y.close}">${Fn}</button>
      </div>
      ${s}
    </div>
  </div>`}function fA(n){return`
  <div class="sheet-backdrop" data-act="closeused">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="used-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="used-title" class="h-sheet">${v.used.title}</h2>
        <button class="icon-btn soft" data-act="closeused" aria-label="${v.a11y.close}">${Fn}</button>
      </div>
      <p class="muted">${v.used.explain}</p>
      ${n.history.length?n.history.map(e=>`
        <div class="stack tight">
          <span class="eyebrow">${v.used.round(e.round)}</span>
          <div class="chips">${e.words.filter((t,r,i)=>i.findIndex(s=>Ue(s.word)===Ue(t.word))===r).map(t=>`<span class="chip static">${$(Qi(t))}</span>`).join("")}</div>
        </div>`).join(""):`<p class="muted">${v.used.none}</p>`}
    </div>
  </div>`}function pA(){if(m.authError)return`<main class="screen center"><p class="error">${$(m.authError)}</p></main>`;if(!m.uid)return Uy();if(!m.code)return J0();if(m.gameMissing)return`<main class="screen center"><header class="bar top-left">${la}</header>${ht("logo",150)}<p class="notice">${v.missing($(m.code))}</p><button class="btn outline" data-act="home">${v.goToStart}</button></main>`;let n=m.game;if(!n)return Uy(v.findingGame);if(!n.players[m.uid]&&n.removed?.includes(m.uid))return`<main class="screen center"><header class="bar top-left">${la}</header>${ht("hammer",120)}<p class="notice">${v.removedFrom($(n.code))}</p><button class="btn outline" data-act="home">${v.goToStart}</button></main>`;if(!n.players[m.uid])return X0(n);if(n.status==="lobby")return Z0(n);if(n.status==="won")return iA(n);let e=n.history[n.history.length-1],t=Z.get(`seen.${n.code}`,0);return e&&e.round>t?nA(n,e):eA(n)}function M(){let n=document.activeElement,e={};_e.querySelectorAll("input").forEach(f=>{e[f.id]=f.value});let t=n&&n.tagName==="INPUT"?n.id:null,r=t?n.selectionStart:null,i=m.game,s=!!_e.querySelector(".sheet-backdrop:not(.tour)"),a=!!_e.querySelector(".tour"),c=_e.querySelector(".toast")?.textContent;_e.innerHTML=pA()+(m.showUsed&&i?fA(i):"")+(m.showGames&&!m.code?oA():"")+(m.showSettings&&!m.code&&!m.showAccount?lA():"")+(m.showAccount&&!m.code?hA():"")+(m.reportFor&&i?.players[m.reportFor]?dA(i):"")+(m.tour!==null?sA():"")+(m.toast?`<div class="toast" role="status">${$(m.toast)}</div>`:"");let l=_e.querySelector("main"),d=l?l.className+"|"+(l.querySelector("h1")?.textContent||""):"";if(d===M.lastKey?l.classList.add("no-anim"):l&&mA(l,i),M.lastKey=d,s&&_e.querySelector(".sheet-backdrop")?.classList.add("no-anim"),a&&_e.querySelector(".tour")?.classList.add("no-anim"),Qh(),c&&c===m.toast&&_e.querySelector(".toast")?.classList.add("no-anim"),_e.querySelectorAll("input").forEach(f=>{e[f.id]!==void 0&&f.id!=="name"&&(f.value=e[f.id]),f.id==="name"&&e.name!==void 0&&(f.value=e.name)}),t){let f=document.getElementById(t);if(f){f.focus();try{f.setSelectionRange(r,r)}catch{}}}}function mA(n,e){if(n.classList.contains("reveal-screen"))Cy(1.4),n.querySelector(".matched")&&setTimeout(Dy,1700);else if(n.classList.contains("win")){Oy(),Ny();try{navigator.vibrate?.([80,60,160])}catch{}}}_e.addEventListener("input",n=>{if(n.target.id==="name"&&(m.name=n.target.value,Z.set("name",m.name)),n.target.id==="code"&&(n.target.value=n.target.value.toUpperCase().replace(/[^A-Z]/g,"")),m.error){m.error="";let e=_e.querySelector(".error");e&&e.remove()}});_e.addEventListener("submit",n=>{n.preventDefault();let e=n.target.dataset.form,t=new FormData(n.target);if(e==="create"&&Xh(),e==="join"&&My(t.get("code")),e==="joinlink"&&My(m.code),e==="word"&&C0(t.get("word")),e==="email"&&q0(String(t.get("email")||""),String(t.get("password")||"")),e==="report"){let r=m.reportFor;W0(String(t.get("reason")||""),t.get("note")).then(()=>{t.get("block")&&!m.blocked.has(r)?(m.reportFor=r,Hy(r)):M()})}if(e==="setname"){let r=Mt(t.get("setname")||"");if(!r){ue(v.toasts.nameFirst);return}if(zi(r)){ue(v.errors.rudeName);return}m.name=r,Z.set("name",r),Pr({name:r});let i=document.getElementById("name");i&&(i.value=r),ue(v.toasts.nameSaved),M()}});_e.addEventListener("click",async n=>{let e=n.target.closest("[data-act]");if(!e||e.dataset.act==="closeused"&&n.target.closest("[data-stop]")&&!n.target.closest("button"))return;let t=e.dataset.act;if(t==="home"&&(Qy(),m.moving&&Jy()),t==="open"&&(m.showGames=!1,Un(e.dataset.code)),t==="start"&&P0(),t==="nudge"&&N0(e.dataset.uid),t==="again"&&x0(),t==="vote"&&O0(),t==="sharegame"&&M0(),t==="games"&&(m.showGames=!0,M(),Yi()),t==="settings"&&(m.showSettings=!0,M()),t==="closesettings"&&(e.tagName==="BUTTON"||!n.target.closest("[data-stop]"))&&(m.showSettings=!1,M()),t==="settings-games"&&(m.showSettings=!1,m.showGames=!0,M(),Yi()),t==="settings-tour"&&(m.showSettings=!1,m.tour=0,M()),t==="closegames"&&!(n.target.closest("[data-stop]")&&!n.target.closest("button"))&&(m.showGames=!1,M()),t==="forget"&&$0(e.dataset.code),t==="account"&&(m.showAccount=!0,m.accountError="",m.accountNote="",M()),t==="closeaccount"&&(e.tagName==="BUTTON"||!n.target.closest("[data-stop]"))&&(m.showAccount=!1,M()),t==="account-mode"&&(m.accountMode=m.accountMode==="create"?"signin":"create",m.accountError="",m.accountNote="",M()),t==="google"&&B0(),t==="forgot"&&j0(),t==="signout"&&G0(),t==="delete-account"&&z0(),t==="player-menu"&&(m.reportFor=e.dataset.uid,m.reportStep="menu",M()),t==="closereport"&&(e.tagName==="BUTTON"||!n.target.closest("[data-stop]"))&&(m.reportFor=null,M()),t==="report-start"&&(m.reportStep="report",M()),t==="block"&&Hy(e.dataset.uid),t==="remove"&&K0(e.dataset.uid),t==="react"&&H0(Number(e.dataset.round),e.dataset.uid,e.dataset.emoji),t==="daily"&&Xh({daily:!0}),t==="newcrew"&&F0(),t==="mute"&&(Ry(!Mn()),M()),t==="alerts-on"&&uA(),t==="alerts-later"&&(Z.set("alertsAsked",!0),M()),t==="alerts-off"&&aa($n,le,m.uid).then(()=>{ue(v.alerts.offToast),M()}),t==="starter"){let r=m.game?.used||[],i=qg.filter(a=>!ph(a,r)),s=document.getElementById("word");s&&i.length&&(s.value=i[Math.floor(Math.random()*i.length)],s.focus())}if(t==="tour"&&(m.tour=0,M()),t==="tour-next"&&(m.tour<Ut.length-1?Yh(m.tour+1):(m.tour=null,Z.set("toured",!0),M())),t==="tour-skip"&&!(n.target.closest("[data-stop]")&&!n.target.closest("button"))&&(m.tour=null,Z.set("toured",!0),M()),t==="yes"&&Fy(!0),t==="no"&&Fy(!1),t==="used"&&(m.showUsed=!0,M()),t==="closeused"&&(m.showUsed=!1,M()),t==="seen"&&(Z.set(`seen.${m.game.code}`,Number(e.dataset.round)),M()),t==="share"){let r=v0(m.game.code),i=v.share.invite(m.game.code);try{navigator.share?await navigator.share({title:v.appName,text:i,url:r}):(await navigator.clipboard.writeText(r),ue(v.toasts.inviteCopied))}catch{}}});document.addEventListener("pointerdown",Py,{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&m.showUsed&&(m.showUsed=!1,M()),n.key==="Escape"&&m.showGames&&(m.showGames=!1,M()),n.key==="Escape"&&m.showSettings&&(m.showSettings=!1,M()),n.key==="Escape"&&m.showAccount&&(m.showAccount=!1,M()),n.key==="Escape"&&m.reportFor&&(m.reportFor=null,M()),m.tour!==null&&n.key==="ArrowRight"&&m.tour<Ut.length-1&&Yh(m.tour+1),m.tour!==null&&n.key==="ArrowLeft"&&m.tour>0&&Yh(m.tour-1),n.key==="Escape"&&m.tour!==null&&(m.tour=null,Z.set("toured",!0),M())});async function Jy(){if(!nf||!m.uid||!await sf())return;m.moving=!0;let n=[];for(let{code:t}of Z.get("games",[]))try{let r=(await Lt(ne(t))).data();r?.players?.[m.uid]&&r.status!=="won"&&n.push(t)}catch{}if(m.code?n.includes(m.code):n.length>0){M();return}location.replace(of(m.code))}M();var By=!1;Fc(lt,n=>{if(!n){m.uid=null,m.account=null,M(),xc(lt).catch(t=>{console.error(t),By||(m.authError=v.errors.connect,M())}),By=!0;return}let e=m.uid!==n.uid;if(m.uid=n.uid,m.account=hh(n),!e){M();return}m.code?Un(m.code):(M(),Yi()),U0(),Jy(),Sy($n,le,n.uid)});Vg(lt,le).then(Zh).catch(fa);"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
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
