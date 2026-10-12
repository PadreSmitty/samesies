var fh=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xm=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,p=s>>2,_=(s&3)<<4|c>>4,T=(c&15)<<2|d>>6,R=d&63;l||(R=64,a||(T=64)),r.push(t[p],t[_],t[T],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let _=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||_==null)throw new zo;let T=s<<2|c>>4;if(r.push(T),d!==64){let R=c<<4&240|d>>2;if(r.push(R),_!==64){let N=d<<6&192|_;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},zo=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Om=function(n){let e=fh(n);return ph.encodeByteArray(e,!0)},wr=function(n){return Om(n).replace(/\./g,"")},Wo=function(n){try{return ph.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Vm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Lm=()=>Vm().__FIREBASE_DEFAULTS__,Mm=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Wo(n[1]);return e&&JSON.parse(e)},Oi=()=>{try{return Lm()||Mm()||Fm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ko=n=>{var e,t;return(t=(e=Oi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},mh=n=>{let e=Ko(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ho=()=>{var n;return(n=Oi())===null||n===void 0?void 0:n.config},Qo=n=>{var e;return(e=Oi())===null||e===void 0?void 0:e[`_${n}`]};var xi=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function gh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wr(JSON.stringify(t)),wr(JSON.stringify(a)),""].join(".")}function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function Um(){var n;let e=(n=Oi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _h(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vh(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ih(){let n=fe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Eh(){return!Um()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jo(){try{return typeof indexedDB=="object"}catch{return!1}}function Th(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var Bm="FirebaseError",Oe=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Bm,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ct.prototype.create)}},ct=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?qm(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Oe(i,c,r)}};function qm(n,e){return n.replace($m,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var $m=/\{\$([^}]+)}/g;function bh(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function jt(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(dh(s)&&dh(a)){if(!jt(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function dh(n){return n!==null&&typeof n=="object"}function mn(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function yn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ah(n,e){let t=new Go(n,e);return t.subscribe.bind(t)}var Go=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");jm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=jo),i.error===void 0&&(i.error=jo),i.complete===void 0&&(i.complete=jo);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function jm(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function jo(){}var fI=4*60*60*1e3;function ae(n){return n&&n._delegate?n._delegate:n}var Be=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var zt="[DEFAULT]";var Yo=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new xi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gm(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function zm(n){return n===zt?void 0:n}function Gm(n){return n.instantiationMode==="EAGER"}var Vi=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Yo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var Wm=[],j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));var Km={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Hm=j.INFO,Qm={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Jm=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=Qm[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},bt=class{constructor(e){this.name=e,this._logLevel=Hm,this._logHandler=Jm,this._userLogHandler=null,Wm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Km[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}};var Ym=(n,e)=>e.some(t=>n instanceof t),Sh,Rh;function Xm(){return Sh||(Sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zm(){return Rh||(Rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Ph=new WeakMap,Zo=new WeakMap,kh=new WeakMap,Xo=new WeakMap,ta=new WeakMap;function eg(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(He(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ph.set(t,n)}).catch(()=>{}),ta.set(e,n),e}function tg(n){if(Zo.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Zo.set(n,e)}var ea={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||kh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return He(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ch(n){ea=n(ea)}function ng(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(Li(this),e,...t);return kh.set(r,e.sort?e.sort():[e]),He(r)}:Zm().includes(n)?function(...e){return n.apply(Li(this),e),He(Ph.get(this))}:function(...e){return He(n.apply(Li(this),e))}}function rg(n){return typeof n=="function"?ng(n):(n instanceof IDBTransaction&&tg(n),Ym(n,Xm())?new Proxy(n,ea):n)}function He(n){if(n instanceof IDBRequest)return eg(n);if(Xo.has(n))return Xo.get(n);let e=rg(n);return e!==n&&(Xo.set(n,e),ta.set(e,n)),e}var Li=n=>ta.get(n);function Nh(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),c=He(a);return r&&a.addEventListener("upgradeneeded",l=>{r(He(a.result),l.oldVersion,l.newVersion,He(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}var ig=["get","getKey","getAll","getAllKeys","count"],sg=["put","add","delete","clear"],na=new Map;function Dh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(na.get(e))return na.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=sg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ig.includes(t)))return;let s=async function(a,...c){let l=this.transaction(a,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&l.done]))[0]};return na.set(e,s),s}Ch(n=>({...n,get:(e,t,r)=>Dh(e,t)||n.get(e,t,r),has:(e,t)=>!!Dh(e,t)||n.has(e,t)}));var ia=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(og(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function og(n){let e=n.getComponent();return e?.type==="VERSION"}var sa="@firebase/app",xh="0.10.16";var ut=new bt("@firebase/app"),ag="@firebase/app-compat",cg="@firebase/analytics-compat",ug="@firebase/analytics",lg="@firebase/app-check-compat",hg="@firebase/app-check",dg="@firebase/auth",fg="@firebase/auth-compat",pg="@firebase/database",mg="@firebase/data-connect",gg="@firebase/database-compat",yg="@firebase/functions",_g="@firebase/functions-compat",vg="@firebase/installations",wg="@firebase/installations-compat",Ig="@firebase/messaging",Eg="@firebase/messaging-compat",Tg="@firebase/performance",bg="@firebase/performance-compat",Ag="@firebase/remote-config",Sg="@firebase/remote-config-compat",Rg="@firebase/storage",Pg="@firebase/storage-compat",kg="@firebase/firestore",Cg="@firebase/vertexai",Dg="@firebase/firestore-compat",Ng="firebase",xg="11.0.2";var oa="[DEFAULT]",Og={[sa]:"fire-core",[ag]:"fire-core-compat",[ug]:"fire-analytics",[cg]:"fire-analytics-compat",[hg]:"fire-app-check",[lg]:"fire-app-check-compat",[dg]:"fire-auth",[fg]:"fire-auth-compat",[pg]:"fire-rtdb",[mg]:"fire-data-connect",[gg]:"fire-rtdb-compat",[yg]:"fire-fn",[_g]:"fire-fn-compat",[vg]:"fire-iid",[wg]:"fire-iid-compat",[Ig]:"fire-fcm",[Eg]:"fire-fcm-compat",[Tg]:"fire-perf",[bg]:"fire-perf-compat",[Ag]:"fire-rc",[Sg]:"fire-rc-compat",[Rg]:"fire-gcs",[Pg]:"fire-gcs-compat",[kg]:"fire-fst",[Dg]:"fire-fst-compat",[Cg]:"fire-vertex","fire-js":"fire-js",[Ng]:"fire-js-all"};var Mi=new Map,Vg=new Map,aa=new Map;function Oh(n,e){try{n.container.addComponent(e)}catch(t){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function St(n){let e=n.name;if(aa.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;aa.set(e,n);for(let t of Mi.values())Oh(t,n);for(let t of Vg.values())Oh(t,n);return!0}function Er(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qe(n){return n.settings!==void 0}var Lg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new ct("app","Firebase",Lg);var ca=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}};var Rt=xg;function ha(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:oa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(t||(t=Ho()),!t)throw At.create("no-options");let s=Mi.get(i);if(s){if(jt(t,s.options)&&jt(r,s.config))return s;throw At.create("duplicate-app",{appName:i})}let a=new Vi(i);for(let l of aa.values())a.addComponent(l);let c=new ca(t,r,a);return Mi.set(i,c),c}function Fi(n=oa){let e=Mi.get(n);if(!e&&n===oa&&Ho())return ha();if(!e)throw At.create("no-app",{appName:n});return e}function We(n,e,t){var r;let i=(r=Og[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(c.join(" "));return}St(new Be(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var Mg="firebase-heartbeat-database",Fg=1,Ir="firebase-heartbeat-store",ra=null;function Fh(){return ra||(ra=Nh(Mg,Fg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ir)}catch(t){console.warn(t)}}}}).catch(n=>{throw At.create("idb-open",{originalErrorMessage:n.message})})),ra}async function Ug(n){try{let t=(await Fh()).transaction(Ir),r=await t.objectStore(Ir).get(Uh(n));return await t.done,r}catch(e){if(e instanceof Oe)ut.warn(e.message);else{let t=At.create("idb-get",{originalErrorMessage:e?.message});ut.warn(t.message)}}}async function Vh(n,e){try{let r=(await Fh()).transaction(Ir,"readwrite");await r.objectStore(Ir).put(e,Uh(n)),await r.done}catch(t){if(t instanceof Oe)ut.warn(t.message);else{let r=At.create("idb-set",{originalErrorMessage:t?.message});ut.warn(r.message)}}}function Uh(n){return`${n.name}!${n.options.appId}`}var Bg=1024,qg=30*24*60*60*1e3,ua=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new la(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let c=new Date(a.date).valueOf();return Date.now()-c<=qg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Lh(),{heartbeatsToSend:r,unsentEntries:i}=$g(this._heartbeatsCache.heartbeats),s=wr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ut.warn(t),""}}};function Lh(){return new Date().toISOString().substring(0,10)}function $g(n,e=Bg){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Mh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Mh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var la=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jo()?Th().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await Ug(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Vh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Vh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function Mh(n){return wr(JSON.stringify({version:2,heartbeats:n})).length}function jg(n){St(new Be("platform-logger",e=>new ia(e),"PRIVATE")),St(new Be("heartbeat",e=>new ua(e),"PRIVATE")),We(sa,xh,n),We(sa,xh,"esm2017"),We("fire-js","")}jg("");var zg="firebase",Gg="11.0.2";We(zg,Gg,"app");function Ui(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function id(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var sd=id,od=new ct("auth","Firebase",id());var Wi=new bt("@firebase/auth");function Wg(n,...e){Wi.logLevel<=j.WARN&&Wi.warn(`Auth (${Rt}): ${n}`,...e)}function qi(n,...e){Wi.logLevel<=j.ERROR&&Wi.error(`Auth (${Rt}): ${n}`,...e)}function Ke(n,...e){throw xa(n,...e)}function Ye(n,...e){return xa(n,...e)}function ad(n,e,t){let r=Object.assign(Object.assign({},sd()),{[e]:t});return new ct("auth","Firebase",r).create(e,{appName:n.name})}function kt(n){return ad(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xa(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return od.create(n,...e)}function L(n,e,...t){if(!n)throw xa(e,...t)}function Je(n){let e="INTERNAL ASSERTION FAILED: "+n;throw qi(e),new Error(e)}function ht(n,e){n||Je(e)}function ma(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Kg(){return Bh()==="http:"||Bh()==="https:"}function Bh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function Hg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kg()||vh()||"connection"in navigator)?navigator.onLine:!0}function Qg(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Gt=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,ht(t>e,"Short delay should be less than long delay!"),this.isMobile=yh()||wh()}get(){return Hg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Oa(n,e){ht(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Ki=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var Jg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var Yg=new Gt(3e4,6e4);function le(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ee(n,e,t,r,i={}){return cd(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let c=mn(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},s);return _h()||(d.referrerPolicy="no-referrer"),Ki.fetch()(ud(n,n.config.apiHost,t,c),d)})}async function cd(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},Jg),e);try{let i=new ga(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw br(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let c=s.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw br(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw br(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw br(n,"user-disabled",a);let p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ad(n,p,d);Ke(n,p)}}catch(i){if(i instanceof Oe)throw i;Ke(n,"network-request-failed",{message:String(i)})}}async function Ct(n,e,t,r,i={}){let s=await Ee(n,e,t,r,i);return"mfaPendingCredential"in s&&Ke(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ud(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?Oa(n.config,i):`${n.config.apiScheme}://${i}`}function Xg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var ga=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),Yg.get())})}};function br(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=Ye(n,e,r);return i.customData._tokenResponse=t,i}function qh(n){return n!==void 0&&n.enterprise!==void 0}var Hi=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Xg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function ld(n,e){return Ee(n,"GET","/v2/recaptchaConfig",le(n,e))}async function Zg(n,e){return Ee(n,"POST","/v1/accounts:delete",e)}async function hd(n,e){return Ee(n,"POST","/v1/accounts:lookup",e)}function Ar(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dd(n,e=!1){let t=ae(n),r=await t.getIdToken(e),i=Va(r);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:Ar(da(i.auth_time)),issuedAtTime:Ar(da(i.iat)),expirationTime:Ar(da(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function da(n){return Number(n)*1e3}function Va(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{let i=Wo(t);return i?JSON.parse(i):(qi("Failed to decode base64 JWT payload"),null)}catch(i){return qi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function $h(n){let e=Va(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function kr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Oe&&ey(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ey({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var ya=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Cr=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Qi(n){var e;let t=n.auth,r=await n.getIdToken(),i=await kr(n,hd(t,{idToken:r}));L(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?pd(s.providerUserInfo):[],c=ty(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!c?.length,p=l?d:!1,_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Cr(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,_)}async function fd(n){let e=ae(n);await Qi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ty(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pd(n){return n.map(e=>{var{providerId:t}=e,r=Ui(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function ny(n,e){let t=await cd(n,{},async()=>{let r=mn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=ud(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ki.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ry(n,e){return Ee(n,"POST","/v2/accounts:revokeToken",le(n,e))}var Sr=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$h(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");let t=$h(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await ny(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return Je("not implemented")}};function Pt(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var vn=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ui(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ya(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await kr(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dd(this,e)}reload(){return fd(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Qi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(kt(this.auth));let e=await this.getIdToken();return await kr(this,Zg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,l,d,p;let _=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,R=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,$=(d=t.createdAt)!==null&&d!==void 0?d:void 0,G=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:W,emailVerified:ee,isAnonymous:Se,providerData:Y,stsTokenManager:w}=t;L(W&&w,e,"internal-error");let m=Sr.fromJSON(this.name,w);L(typeof W=="string",e,"internal-error"),Pt(_,e.name),Pt(T,e.name),L(typeof ee=="boolean",e,"internal-error"),L(typeof Se=="boolean",e,"internal-error"),Pt(R,e.name),Pt(N,e.name),Pt(V,e.name),Pt(D,e.name),Pt($,e.name),Pt(G,e.name);let y=new n({uid:W,auth:e,email:T,emailVerified:ee,displayName:_,isAnonymous:Se,photoURL:N,phoneNumber:R,tenantId:V,stsTokenManager:m,createdAt:$,lastLoginAt:G});return Y&&Array.isArray(Y)&&(y.providerData=Y.map(v=>Object.assign({},v))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,t,r=!1){let i=new Sr;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qi(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];L(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?pd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new Sr;c.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Cr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}};var jh=new Map;function lt(n){ht(n instanceof Function,"Expected a class definition");let e=jh.get(n);return e?(ht(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jh.set(n,e),e)}var Ji=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Ji.type="NONE";var _a=Ji;function $i(n,e,t){return`firebase:${n}:${e}:${t}`}var Yi=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=$i(this.userKey,i.apiKey,s),this.fullPersistenceKey=$i("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(lt(_a),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||lt(_a),a=$i(r,e.config.apiKey,e.name),c=null;for(let d of t)try{let p=await d._get(a);if(p){let _=vn._fromJSON(e,p);d!==s&&(c=_),s=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new n(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new n(s,e,r))}};function zh(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_d(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(md(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wd(e))return"Blackberry";if(Id(e))return"Webos";if(gd(e))return"Safari";if((e.includes("chrome/")||yd(e))&&!e.includes("edge/"))return"Chrome";if(vd(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function md(n=fe()){return/firefox\//i.test(n)}function gd(n=fe()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yd(n=fe()){return/crios\//i.test(n)}function _d(n=fe()){return/iemobile/i.test(n)}function vd(n=fe()){return/android/i.test(n)}function wd(n=fe()){return/blackberry/i.test(n)}function Id(n=fe()){return/webos/i.test(n)}function La(n=fe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function iy(n=fe()){var e;return La(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sy(){return Ih()&&document.documentMode===10}function Ed(n=fe()){return La(n)||vd(n)||Id(n)||wd(n)||/windows phone/i.test(n)||_d(n)}function Td(n,e=[]){let t;switch(n){case"Browser":t=zh(fe());break;case"Worker":t=`${zh(fe())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rt}/${r}`}var va=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,c)=>{try{let l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function oy(n,e={}){return Ee(n,"GET","/v2/passwordPolicy",le(n,e))}var ay=6,wa=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ay,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var Ia=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xi(this),this.idTokenSubscription=new Xi(this),this.beforeStateQueue=new va(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=od,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=lt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Yi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await hd(this,{idToken:e}),r=await vn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qe(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(kt(this));let t=e?ae(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await oy(this),t=new wa(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ct("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ry(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&lt(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await Yi.create(this,[lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{let l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Td(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Wg(`Error while retrieving App Check token: ${t.error}`),t?.token}};function Yt(n){return ae(n)}var Xi=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ah(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var gs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cy(n){gs=n}function bd(n){return gs.loadJS(n)}function uy(){return gs.recaptchaEnterpriseScript}function ly(){return gs.gapiScript}function Ad(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Ea=class{constructor(){this.enterprise=new Ta}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},Ta=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var hy="recaptcha-enterprise",Rr="NO_RECAPTCHA",Zi=class{constructor(e){this.type=hy,this.auth=Yt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{ld(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let d=new Hi(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function i(s,a,c){let l=window.grecaptcha;qh(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(Rr)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ea().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&qh(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=uy();l.length!==0&&(l+=c),bd(l).then(()=>{i(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}};async function Tr(n,e,t,r=!1,i=!1){let s=new Zi(n),a;if(i)a=Rr;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}let c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){let l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){let l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Pr(n,e,t,r,i){var s,a;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let c=await Tr(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await Tr(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(c)});else if(i==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let c=await Tr(n,e,t);return r(n,c).catch(async l=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let p=await Tr(n,e,t,!1,!0);return r(n,p)}return Promise.reject(l)})}else{let c=await Tr(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")}async function dy(n){let e=Yt(n),t=await ld(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Hi(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Zi(e).verify()}function Sd(n,e){let t=Er(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(jt(s,e??{}))return i;Ke(i,"already-initialized")}return t.initialize({options:e})}function fy(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(lt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Rd(n,e,t){let r=Yt(n);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=Pd(e),{host:a,port:c}=py(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||my()}function Pd(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function py(n){let e=Pd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:Gh(r.substr(s.length+1))}}else{let[s,a]=r.split(":");return{host:s,port:Gh(a)}}}function Gh(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function my(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var Wt=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,t){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}};async function gy(n,e){return Ee(n,"POST","/v1/accounts:signUp",e)}async function yy(n,e){return Ct(n,"POST","/v1/accounts:signInWithPassword",le(n,e))}async function _y(n,e){return Ct(n,"POST","/v1/accounts:signInWithEmailLink",le(n,e))}async function vy(n,e){return Ct(n,"POST","/v1/accounts:signInWithEmailLink",le(n,e))}var Dr=class n extends Wt{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pr(e,t,"signInWithPassword",yy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return _y(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pr(e,r,"signUpPassword",gy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return vy(e,{idToken:t,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function _n(n,e){return Ct(n,"POST","/v1/accounts:signInWithIdp",le(n,e))}var wy="http://localhost",Kt=class n extends Wt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ui(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return _n(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,_n(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,_n(e,t)}buildRequest(){let e={requestUri:wy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=mn(t)}return e}};async function Wh(n,e){return Ee(n,"POST","/v1/accounts:sendVerificationCode",le(n,e))}async function Iy(n,e){return Ct(n,"POST","/v1/accounts:signInWithPhoneNumber",le(n,e))}async function Ey(n,e){let t=await Ct(n,"POST","/v1/accounts:signInWithPhoneNumber",le(n,e));if(t.temporaryProof)throw br(n,"account-exists-with-different-credential",t);return t}var Ty={USER_NOT_FOUND:"user-not-found"};async function by(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ct(n,"POST","/v1/accounts:signInWithPhoneNumber",le(n,t),Ty)}var Nr=class n extends Wt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Iy(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ey(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return by(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function Ay(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sy(n){let e=gn(yn(n)).link,t=e?gn(yn(e)).deep_link_id:null,r=gn(yn(n)).deep_link_id;return(r?gn(yn(r)).link:null)||r||t||e||n}var es=class n{constructor(e){var t,r,i,s,a,c;let l=gn(yn(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,_=Ay((i=l.mode)!==null&&i!==void 0?i:null);L(d&&p&&_,"argument-error"),this.apiKey=d,this.operation=_,this.code=p,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=Sy(e);try{return new n(t)}catch{return null}}};var wn=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return Dr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=es.parseLink(t);return L(r,"argument-error"),Dr._fromEmailAndCode(e,r.code,r.tenantId)}};wn.PROVIDER_ID="password";wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var ts=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Ht=class extends ts{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var xr=class n extends Ht{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";var Or=class n extends Ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Kt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";var Vr=class n extends Ht{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";var Lr=class n extends Ht{constructor(){super("twitter.com")}static credential(e,t){return Kt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";async function Ry(n,e){return Ct(n,"POST","/v1/accounts:signUp",le(n,e))}var Qt=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await vn._fromIdTokenResponse(e,r,i),a=Kh(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=Kh(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function Kh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function Ma(n){var e;if(Qe(n.app))return Promise.reject(kt(n));let t=Yt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Qt({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await Ry(t,{returnSecureToken:!0}),i=await Qt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}var ba=class n extends Oe{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function kd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(n,s,e,r):s})}async function Py(n,e,t=!1){let r=await kr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qt._forOperation(n,"link",r)}async function ky(n,e,t=!1){let{auth:r}=n;if(Qe(r.app))return Promise.reject(kt(r));let i="reauthenticate";try{let s=await kr(n,kd(r,i,e,n),t);L(s.idToken,r,"internal-error");let a=Va(s.idToken);L(a,r,"internal-error");let{sub:c}=a;return L(n.uid===c,r,"user-mismatch"),Qt._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Ke(r,"user-mismatch"),s}}async function Cy(n,e,t=!1){if(Qe(n.app))return Promise.reject(kt(n));let r="signIn",i=await kd(n,r,e),s=await Qt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function Cd(n,e,t,r){return ae(n).onIdTokenChanged(e,t,r)}function Dd(n,e,t){return ae(n).beforeAuthStateChanged(e,t)}function Fa(n,e,t,r){return ae(n).onAuthStateChanged(e,t,r)}function Hh(n,e){return Ee(n,"POST","/v2/accounts/mfaEnrollment:start",le(n,e))}function Dy(n,e){return Ee(n,"POST","/v2/accounts/mfaEnrollment:finalize",le(n,e))}function Ny(n,e){return Ee(n,"POST","/v2/accounts/mfaEnrollment:start",le(n,e))}function xy(n,e){return Ee(n,"POST","/v2/accounts/mfaEnrollment:finalize",le(n,e))}var ns="__sak";var rs=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ns,"1"),this.storage.removeItem(ns),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var Oy=1e3,Vy=10,is=class extends rs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ed(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);sy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Vy):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};is.type="LOCAL";var Nd=is;var ss=class extends rs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};ss.type="SESSION";var Ua=ss;function Ly(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var os=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(a).map(async d=>d(t.origin,s)),l=await Ly(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};os.receivers=[];function Ba(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Aa=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{let d=Ba("",20);i.port1.start();let p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(_){let T=_;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(T.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function Xe(){return window}function My(n){Xe().location.href=n}function xd(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function Fy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uy(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function By(){return xd()?self:null}var Od="firebaseLocalStorageDb",qy=1,as="firebaseLocalStorage",Vd="fbase_key",Jt=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function ys(n,e){return n.transaction([as],e?"readwrite":"readonly").objectStore(as)}function $y(){let n=indexedDB.deleteDatabase(Od);return new Jt(n).toPromise()}function Sa(){let n=indexedDB.open(Od,qy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(as,{keyPath:Vd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(as)?e(r):(r.close(),await $y(),e(await Sa()))})})}async function Qh(n,e,t){let r=ys(n,!0).put({[Vd]:e,value:t});return new Jt(r).toPromise()}async function jy(n,e){let t=ys(n,!1).get(e),r=await new Jt(t).toPromise();return r===void 0?null:r.value}function Jh(n,e){let t=ys(n,!0).delete(e);return new Jt(t).toPromise()}var zy=800,Gy=3,cs=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sa(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>Gy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(By()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Fy(),!this.activeServiceWorker)return;this.sender=new Aa(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Uy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Sa();return await Qh(e,ns,"1"),await Jh(e,ns),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>jy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=ys(i,!1).getAll();return new Jt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};cs.type="LOCAL";var Ld=cs;function Yh(n,e){return Ee(n,"POST","/v2/accounts/mfaSignIn:start",le(n,e))}function Wy(n,e){return Ee(n,"POST","/v2/accounts/mfaSignIn:finalize",le(n,e))}function Ky(n,e){return Ee(n,"POST","/v2/accounts/mfaSignIn:finalize",le(n,e))}var qI=Ad("rcb"),$I=new Gt(3e4,6e4);var ji="recaptcha";async function Hy(n,e,t){var r;if(!n._getRecaptchaConfig())try{await dy(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){L(s.type==="enroll",n,"internal-error");let a={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Pr(n,a,"mfaSmsEnrollment",async(p,_)=>{if(_.phoneEnrollmentInfo.captchaResponse===Rr){L(t?.type===ji,p,"argument-error");let T=await fa(p,_,t);return Hh(p,T)}return Hh(p,_)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneSessionInfo.sessionInfo}else{L(s.type==="signin",n,"internal-error");let a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;L(a,n,"missing-multi-factor-info");let c={mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Pr(n,c,"mfaSmsSignIn",async(_,T)=>{if(T.phoneSignInInfo.captchaResponse===Rr){L(t?.type===ji,_,"argument-error");let R=await fa(_,T,t);return Yh(_,R)}return Yh(_,T)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Pr(n,s,"sendVerificationCode",async(d,p)=>{if(p.captchaResponse===Rr){L(t?.type===ji,d,"argument-error");let _=await fa(d,p,t);return Wh(d,_)}return Wh(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{t?._reset()}}async function fa(n,e,t){L(t.type===ji,n,"argument-error");let r=await t.verify();L(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,a=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:a,clientType:c,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,a=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:a,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var Mr=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Yt(e)}verifyPhoneNumber(e,t){return Hy(this.auth,e,ae(t))}static credential(e,t){return Nr._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?Nr._fromTokenResponse(t,r):null}};Mr.PROVIDER_ID="phone";Mr.PHONE_SIGN_IN_METHOD="phone";function Qy(n,e){return e?lt(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var Fr=class extends Wt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _n(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _n(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _n(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Jy(n){return Cy(n.auth,new Fr(n),n.bypassAuthState)}function Yy(n){let{auth:e,user:t}=n;return L(t,e,"internal-error"),ky(t,new Fr(n),n.bypassAuthState)}async function Xy(n){let{auth:e,user:t}=n;return L(t,e,"internal-error"),Py(t,new Fr(n),n.bypassAuthState)}var us=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jy;case"linkViaPopup":case"linkViaRedirect":return Xy;case"reauthViaPopup":case"reauthViaRedirect":return Yy;default:Ke(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Zy=new Gt(2e3,1e4);var Ra=class n extends us{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");let e=Ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zy.get())};e()}};Ra.currentPopupAction=null;var e_="pendingRedirect",zi=new Map,Pa=class extends us{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{let r=await t_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function t_(n,e){let t=i_(e),r=r_(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function n_(n,e){zi.set(n._key(),e)}function r_(n){return lt(n._redirectPersistence)}function i_(n){return $i(e_,n.config.apiKey,n.name)}async function s_(n,e,t=!1){if(Qe(n.app))return Promise.reject(kt(n));let r=Yt(n),i=Qy(r,e),a=await new Pa(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var o_=10*60*1e3,ka=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!a_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Md(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xh(e))}saveEventToCache(e){this.cachedEventUids.add(Xh(e)),this.lastProcessedEventTime=Date.now()}};function Xh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Md({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function a_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Md(n);default:return!1}}async function c_(n,e={}){return Ee(n,"GET","/v1/projects",e)}var u_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,l_=/^https?/;async function h_(n){if(n.config.emulator)return;let{authorizedDomains:e}=await c_(n);for(let t of e)try{if(d_(t))return}catch{}Ke(n,"unauthorized-domain")}function d_(n){let e=ma(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!l_.test(t))return!1;if(u_.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var f_=new Gt(3e4,6e4);function Zh(){let n=Xe().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function p_(n){return new Promise((e,t)=>{var r,i,s;function a(){Zh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zh(),t(Ye(n,"network-request-failed"))},timeout:f_.get()})}if(!((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xe().gapi)===null||s===void 0)&&s.load)a();else{let c=Ad("iframefcb");return Xe()[c]=()=>{gapi.load?a():t(Ye(n,"network-request-failed"))},bd(`${ly()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Gi=null,e})}var Gi=null;function m_(n){return Gi=Gi||p_(n),Gi}var g_=new Gt(5e3,15e3),y_="__/auth/iframe",__="emulator/auth/iframe",v_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},w_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function I_(n){let e=n.config;L(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?Oa(e,__):`https://${n.config.authDomain}/${y_}`,r={apiKey:e.apiKey,appName:n.name,v:Rt},i=w_.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${mn(r).slice(1)}`}async function E_(n){let e=await m_(n),t=Xe().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:I_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:v_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let a=Ye(n,"network-request-failed"),c=Xe().setTimeout(()=>{s(a)},g_.get());function l(){Xe().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}var T_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b_=500,A_=600,S_="_blank",R_="http://localhost",ls=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function P_(n,e,t,r=b_,i=A_){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),c="",l=Object.assign(Object.assign({},T_),{width:r.toString(),height:i.toString(),top:s,left:a}),d=fe().toLowerCase();t&&(c=yd(d)?S_:t),md(d)&&(e=e||R_,l.scrollbars="yes");let p=Object.entries(l).reduce((T,[R,N])=>`${T}${R}=${N},`,"");if(iy(d)&&c!=="_self")return k_(e||"",c),new ls(null);let _=window.open(e||"",c,p);L(_,n,"popup-blocked");try{_.focus()}catch{}return new ls(_)}function k_(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var C_="__/auth/handler",D_="emulator/auth/handler",N_=encodeURIComponent("fac");async function ed(n,e,t,r,i,s){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Rt,eventId:i};if(e instanceof ts){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",bh(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,_]of Object.entries(s||{}))a[p]=_}if(e instanceof Ht){let p=e.getScopes().filter(_=>_!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);let c=a;for(let p of Object.keys(c))c[p]===void 0&&delete c[p];let l=await n._getAppCheckToken(),d=l?`#${N_}=${encodeURIComponent(l)}`:"";return`${x_(n)}?${mn(c).slice(1)}${d}`}function x_({config:n}){return n.emulator?Oa(n,D_):`https://${n.authDomain}/${C_}`}var pa="webStorageSupport",Ca=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ua,this._completeRedirectFn=s_,this._overrideRedirectResult=n_}async _openPopup(e,t,r,i){var s;ht((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await ed(e,t,r,ma(),i);return P_(e,a,Ba())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await ed(e,t,r,ma(),i);return My(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ht(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await E_(e),r=new ka(e);return t.register("authEvent",i=>(L(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pa,{type:pa},i=>{var s;let a=(s=i?.[0])===null||s===void 0?void 0:s[pa];a!==void 0&&t(!!a),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=h_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ed()||gd()||La()}},Fd=Ca,hs=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Je("unexpected MultiFactorSessionType")}}},Da=class n extends hs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return Dy(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Wy(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},ds=class{constructor(){}static assertion(e){return Da._fromCredential(e)}};ds.FACTOR_ID="phone";var fs=class{static assertionForEnrollment(e,t){return ps._fromSecret(e,t)}static assertionForSignIn(e,t){return ps._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;L(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await Ny(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return ms._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};fs.FACTOR_ID="totp";var ps=class n extends hs{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return L(typeof this.secret<"u",e,"argument-error"),xy(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){L(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Ky(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},ms=class n{constructor(e,t,r,i,s,a,c){this.sessionInfo=a,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(Bi(e)||Bi(t))&&(i=!0),i&&(Bi(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Bi(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Bi(n){return typeof n>"u"||n?.length===0}var td="@firebase/auth",nd="1.8.1";var Na=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function O_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function V_(n){St(new Be("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Td(n)},d=new Ia(r,i,s,l);return fy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),St(new Be("auth-internal",e=>{let t=Yt(e.getProvider("auth").getImmediate());return(r=>new Na(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(td,nd,O_(n)),We(td,nd,"esm2017")}var L_=5*60,M_=Qo("authIdTokenMaxAge")||L_,rd=null,F_=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>M_)return;let i=t?.token;rd!==i&&(rd=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qa(n=Fi()){let e=Er(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Sd(n,{popupRedirectResolver:Fd,persistence:[Ld,Nd,Ua]}),r=Qo("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let a=F_(s.toString());Dd(t,a,()=>a(t.currentUser)),Cd(t,c=>a(c))}}let i=Ko("auth");return i&&Rd(t,`http://${i}`),t}function U_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}cy({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=Ye("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",U_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});V_("Browser");var Ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bd={};var Dt,$a;(function(){var n;function e(w,m){function y(){}y.prototype=m.prototype,w.D=m.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(v,I,b){for(var g=Array(arguments.length-2),st=2;st<arguments.length;st++)g[st-2]=arguments[st];return m.prototype[I].apply(v,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,y){y||(y=0);var v=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)v[I]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(I=0;16>I;++I)v[I]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=w.g[0],y=w.g[1],I=w.g[2];var b=w.g[3],g=m+(b^y&(I^b))+v[0]+3614090360&4294967295;m=y+(g<<7&4294967295|g>>>25),g=b+(I^m&(y^I))+v[1]+3905402710&4294967295,b=m+(g<<12&4294967295|g>>>20),g=I+(y^b&(m^y))+v[2]+606105819&4294967295,I=b+(g<<17&4294967295|g>>>15),g=y+(m^I&(b^m))+v[3]+3250441966&4294967295,y=I+(g<<22&4294967295|g>>>10),g=m+(b^y&(I^b))+v[4]+4118548399&4294967295,m=y+(g<<7&4294967295|g>>>25),g=b+(I^m&(y^I))+v[5]+1200080426&4294967295,b=m+(g<<12&4294967295|g>>>20),g=I+(y^b&(m^y))+v[6]+2821735955&4294967295,I=b+(g<<17&4294967295|g>>>15),g=y+(m^I&(b^m))+v[7]+4249261313&4294967295,y=I+(g<<22&4294967295|g>>>10),g=m+(b^y&(I^b))+v[8]+1770035416&4294967295,m=y+(g<<7&4294967295|g>>>25),g=b+(I^m&(y^I))+v[9]+2336552879&4294967295,b=m+(g<<12&4294967295|g>>>20),g=I+(y^b&(m^y))+v[10]+4294925233&4294967295,I=b+(g<<17&4294967295|g>>>15),g=y+(m^I&(b^m))+v[11]+2304563134&4294967295,y=I+(g<<22&4294967295|g>>>10),g=m+(b^y&(I^b))+v[12]+1804603682&4294967295,m=y+(g<<7&4294967295|g>>>25),g=b+(I^m&(y^I))+v[13]+4254626195&4294967295,b=m+(g<<12&4294967295|g>>>20),g=I+(y^b&(m^y))+v[14]+2792965006&4294967295,I=b+(g<<17&4294967295|g>>>15),g=y+(m^I&(b^m))+v[15]+1236535329&4294967295,y=I+(g<<22&4294967295|g>>>10),g=m+(I^b&(y^I))+v[1]+4129170786&4294967295,m=y+(g<<5&4294967295|g>>>27),g=b+(y^I&(m^y))+v[6]+3225465664&4294967295,b=m+(g<<9&4294967295|g>>>23),g=I+(m^y&(b^m))+v[11]+643717713&4294967295,I=b+(g<<14&4294967295|g>>>18),g=y+(b^m&(I^b))+v[0]+3921069994&4294967295,y=I+(g<<20&4294967295|g>>>12),g=m+(I^b&(y^I))+v[5]+3593408605&4294967295,m=y+(g<<5&4294967295|g>>>27),g=b+(y^I&(m^y))+v[10]+38016083&4294967295,b=m+(g<<9&4294967295|g>>>23),g=I+(m^y&(b^m))+v[15]+3634488961&4294967295,I=b+(g<<14&4294967295|g>>>18),g=y+(b^m&(I^b))+v[4]+3889429448&4294967295,y=I+(g<<20&4294967295|g>>>12),g=m+(I^b&(y^I))+v[9]+568446438&4294967295,m=y+(g<<5&4294967295|g>>>27),g=b+(y^I&(m^y))+v[14]+3275163606&4294967295,b=m+(g<<9&4294967295|g>>>23),g=I+(m^y&(b^m))+v[3]+4107603335&4294967295,I=b+(g<<14&4294967295|g>>>18),g=y+(b^m&(I^b))+v[8]+1163531501&4294967295,y=I+(g<<20&4294967295|g>>>12),g=m+(I^b&(y^I))+v[13]+2850285829&4294967295,m=y+(g<<5&4294967295|g>>>27),g=b+(y^I&(m^y))+v[2]+4243563512&4294967295,b=m+(g<<9&4294967295|g>>>23),g=I+(m^y&(b^m))+v[7]+1735328473&4294967295,I=b+(g<<14&4294967295|g>>>18),g=y+(b^m&(I^b))+v[12]+2368359562&4294967295,y=I+(g<<20&4294967295|g>>>12),g=m+(y^I^b)+v[5]+4294588738&4294967295,m=y+(g<<4&4294967295|g>>>28),g=b+(m^y^I)+v[8]+2272392833&4294967295,b=m+(g<<11&4294967295|g>>>21),g=I+(b^m^y)+v[11]+1839030562&4294967295,I=b+(g<<16&4294967295|g>>>16),g=y+(I^b^m)+v[14]+4259657740&4294967295,y=I+(g<<23&4294967295|g>>>9),g=m+(y^I^b)+v[1]+2763975236&4294967295,m=y+(g<<4&4294967295|g>>>28),g=b+(m^y^I)+v[4]+1272893353&4294967295,b=m+(g<<11&4294967295|g>>>21),g=I+(b^m^y)+v[7]+4139469664&4294967295,I=b+(g<<16&4294967295|g>>>16),g=y+(I^b^m)+v[10]+3200236656&4294967295,y=I+(g<<23&4294967295|g>>>9),g=m+(y^I^b)+v[13]+681279174&4294967295,m=y+(g<<4&4294967295|g>>>28),g=b+(m^y^I)+v[0]+3936430074&4294967295,b=m+(g<<11&4294967295|g>>>21),g=I+(b^m^y)+v[3]+3572445317&4294967295,I=b+(g<<16&4294967295|g>>>16),g=y+(I^b^m)+v[6]+76029189&4294967295,y=I+(g<<23&4294967295|g>>>9),g=m+(y^I^b)+v[9]+3654602809&4294967295,m=y+(g<<4&4294967295|g>>>28),g=b+(m^y^I)+v[12]+3873151461&4294967295,b=m+(g<<11&4294967295|g>>>21),g=I+(b^m^y)+v[15]+530742520&4294967295,I=b+(g<<16&4294967295|g>>>16),g=y+(I^b^m)+v[2]+3299628645&4294967295,y=I+(g<<23&4294967295|g>>>9),g=m+(I^(y|~b))+v[0]+4096336452&4294967295,m=y+(g<<6&4294967295|g>>>26),g=b+(y^(m|~I))+v[7]+1126891415&4294967295,b=m+(g<<10&4294967295|g>>>22),g=I+(m^(b|~y))+v[14]+2878612391&4294967295,I=b+(g<<15&4294967295|g>>>17),g=y+(b^(I|~m))+v[5]+4237533241&4294967295,y=I+(g<<21&4294967295|g>>>11),g=m+(I^(y|~b))+v[12]+1700485571&4294967295,m=y+(g<<6&4294967295|g>>>26),g=b+(y^(m|~I))+v[3]+2399980690&4294967295,b=m+(g<<10&4294967295|g>>>22),g=I+(m^(b|~y))+v[10]+4293915773&4294967295,I=b+(g<<15&4294967295|g>>>17),g=y+(b^(I|~m))+v[1]+2240044497&4294967295,y=I+(g<<21&4294967295|g>>>11),g=m+(I^(y|~b))+v[8]+1873313359&4294967295,m=y+(g<<6&4294967295|g>>>26),g=b+(y^(m|~I))+v[15]+4264355552&4294967295,b=m+(g<<10&4294967295|g>>>22),g=I+(m^(b|~y))+v[6]+2734768916&4294967295,I=b+(g<<15&4294967295|g>>>17),g=y+(b^(I|~m))+v[13]+1309151649&4294967295,y=I+(g<<21&4294967295|g>>>11),g=m+(I^(y|~b))+v[4]+4149444226&4294967295,m=y+(g<<6&4294967295|g>>>26),g=b+(y^(m|~I))+v[11]+3174756917&4294967295,b=m+(g<<10&4294967295|g>>>22),g=I+(m^(b|~y))+v[2]+718787259&4294967295,I=b+(g<<15&4294967295|g>>>17),g=y+(b^(I|~m))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var y=m-this.blockSize,v=this.B,I=this.h,b=0;b<m;){if(I==0)for(;b<=y;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<m;)if(v[I++]=w.charCodeAt(b++),I==this.blockSize){i(this,v),I=0;break}}else for(;b<m;)if(v[I++]=w[b++],I==this.blockSize){i(this,v),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var y=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=y&255,y/=256;for(this.u(w),w=Array(16),m=y=0;4>m;++m)for(var v=0;32>v;v+=8)w[y++]=this.g[m]>>>v&255;return w};function s(w,m){var y=c;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=m(w)}function a(w,m){this.h=m;for(var y=[],v=!0,I=w.length-1;0<=I;I--){var b=w[I]|0;v&&b==m||(y[I]=b,v=!1)}this.g=y}var c={};function l(w){return-128<=w&&128>w?s(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return _;if(0>w)return D(d(-w));for(var m=[],y=1,v=0;w>=y;v++)m[v]=w/y|0,y*=4294967296;return new a(m,0)}function p(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return D(p(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),v=_,I=0;I<w.length;I+=8){var b=Math.min(8,w.length-I),g=parseInt(w.substring(I,I+b),m);8>b?(b=d(Math.pow(m,b)),v=v.j(b).add(d(g))):(v=v.j(y),v=v.add(d(g)))}return v}var _=l(0),T=l(1),R=l(16777216);n=a.prototype,n.m=function(){if(V(this))return-D(this).m();for(var w=0,m=1,y=0;y<this.g.length;y++){var v=this.i(y);w+=(0<=v?v:4294967296+v)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(V(this))return"-"+D(this).toString(w);for(var m=d(Math.pow(w,6)),y=this,v="";;){var I=ee(y,m).g;y=$(y,I.j(m));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=I,N(y))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function V(w){return w.h==-1}n.l=function(w){return w=$(this,w),V(w)?-1:N(w)?0:1};function D(w){for(var m=w.g.length,y=[],v=0;v<m;v++)y[v]=~w.g[v];return new a(y,~w.h).add(T)}n.abs=function(){return V(this)?D(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],v=0,I=0;I<=m;I++){var b=v+(this.i(I)&65535)+(w.i(I)&65535),g=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);v=g>>>16,b&=65535,g&=65535,y[I]=g<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(w,m){return w.add(D(m))}n.j=function(w){if(N(this)||N(w))return _;if(V(this))return V(w)?D(this).j(D(w)):D(D(this).j(w));if(V(w))return D(this.j(D(w)));if(0>this.l(R)&&0>w.l(R))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,y=[],v=0;v<2*m;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<w.g.length;I++){var b=this.i(v)>>>16,g=this.i(v)&65535,st=w.i(I)>>>16,tr=w.i(I)&65535;y[2*v+2*I]+=g*tr,G(y,2*v+2*I),y[2*v+2*I+1]+=b*tr,G(y,2*v+2*I+1),y[2*v+2*I+1]+=g*st,G(y,2*v+2*I+1),y[2*v+2*I+2]+=b*st,G(y,2*v+2*I+2)}for(v=0;v<m;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=m;v<2*m;v++)y[v]=0;return new a(y,0)};function G(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function W(w,m){this.g=w,this.h=m}function ee(w,m){if(N(m))throw Error("division by zero");if(N(w))return new W(_,_);if(V(w))return m=ee(D(w),m),new W(D(m.g),D(m.h));if(V(m))return m=ee(w,D(m)),new W(D(m.g),m.h);if(30<w.g.length){if(V(w)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var y=T,v=m;0>=v.l(w);)y=Se(y),v=Se(v);var I=Y(y,1),b=Y(v,1);for(v=Y(v,2),y=Y(y,2);!N(v);){var g=b.add(v);0>=g.l(w)&&(I=I.add(y),b=g),v=Y(v,1),y=Y(y,1)}return m=$(w,I.j(m)),new W(I,m)}for(I=_;0<=w.l(m);){for(y=Math.max(1,Math.floor(w.m()/m.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=d(y),g=b.j(m);V(g)||0<g.l(w);)y-=v,b=d(y),g=b.j(m);N(b)&&(b=T),I=I.add(b),w=$(w,g)}return new W(I,w)}n.A=function(w){return ee(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)&w.i(v);return new a(y,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)|w.i(v);return new a(y,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)^w.i(v);return new a(y,this.h^w.h)};function Se(w){for(var m=w.g.length+1,y=[],v=0;v<m;v++)y[v]=w.i(v)<<1|w.i(v-1)>>>31;return new a(y,w.h)}function Y(w,m){var y=m>>5;m%=32;for(var v=w.g.length-y,I=[],b=0;b<v;b++)I[b]=0<m?w.i(b+y)>>>m|w.i(b+y+1)<<32-m:w.i(b+y);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$a=Bd.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Dt=Bd.Integer=a}).apply(typeof Ud<"u"?Ud:typeof self<"u"?self:typeof window<"u"?window:{});var _s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dt={};var ja,B_,In,za,Ur,vs,Ga,Wa,Ka;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof _s=="object"&&_s];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var E=o[f];if(!(E in h))break e;h=h[E]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,f=!1,E={next:function(){if(!f&&h<o.length){var S=h++;return{value:u(S,o[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,h){return o.call.apply(o.bind,arguments)}function _(o,u,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,f),o.apply(u,E)}}return function(){return o.apply(u,arguments)}}function T(o,u,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:_,T.apply(null,arguments)}function R(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function N(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,E,S){for(var C=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)C[Z-2]=arguments[Z];return u.prototype[E].apply(f,C)}}function V(o){let u=o.length;if(0<u){let h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function D(o,u){for(let h=1;h<arguments.length;h++){let f=arguments[h];if(l(f)){let E=o.length||0,S=f.length||0;o.length=E+S;for(let C=0;C<S;C++)o[E+C]=f[C]}else o.push(f)}}class ${constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(o){return/^[\s\xa0]*$/.test(o)}function W(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function ee(o){return ee[" "](o),o}ee[" "]=function(){};var Se=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function Y(o,u,h){for(let f in o)u.call(h,o[f],f,o)}function w(o,u){for(let h in o)u.call(void 0,o[h],h,o)}function m(o){let u={};for(let h in o)u[h]=o[h];return u}let y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,u){let h,f;for(let E=1;E<arguments.length;E++){f=arguments[E];for(h in f)o[h]=f[h];for(let S=0;S<y.length;S++)h=y[S],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function I(o){var u=1;o=o.split(":");let h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function b(o){c.setTimeout(()=>{throw o},0)}function g(){var o=_o;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class st{constructor(){this.h=this.g=null}add(u,h){let f=tr.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var tr=new $(()=>new Zp,o=>o.reset());class Zp{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let nr,rr=!1,_o=new st,hl=()=>{let o=c.Promise.resolve(void 0);nr=()=>{o.then(em)}};var em=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(h){b(h)}var u=tr;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}rr=!1};function wt(){this.s=this.s,this.C=this.C}wt.prototype.s=!1,wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var tm=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function ir(o,u){if(_e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Se){e:{try{ee(u.nodeName);var E=!0;break e}catch{}E=!1}E||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:nm[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ir.aa.h.call(this)}}N(ir,_e);var nm={2:"touch",3:"pen",4:"mouse"};ir.prototype.h=function(){ir.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var sr="closure_listenable_"+(1e6*Math.random()|0),rm=0;function im(o,u,h,f,E){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=E,this.key=++rm,this.da=this.fa=!1}function gi(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function yi(o){this.src=o,this.g={},this.h=0}yi.prototype.add=function(o,u,h,f,E){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var C=wo(o,u,f,E);return-1<C?(u=o[C],h||(u.fa=!1)):(u=new im(u,this.src,S,!!f,E),u.fa=h,o.push(u)),u};function vo(o,u){var h=u.type;if(h in o.g){var f=o.g[h],E=Array.prototype.indexOf.call(f,u,void 0),S;(S=0<=E)&&Array.prototype.splice.call(f,E,1),S&&(gi(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function wo(o,u,h,f){for(var E=0;E<o.length;++E){var S=o[E];if(!S.da&&S.listener==u&&S.capture==!!h&&S.ha==f)return E}return-1}var Io="closure_lm_"+(1e6*Math.random()|0),Eo={};function dl(o,u,h,f,E){if(f&&f.once)return pl(o,u,h,f,E);if(Array.isArray(u)){for(var S=0;S<u.length;S++)dl(o,u[S],h,f,E);return null}return h=So(h),o&&o[sr]?o.K(u,h,d(f)?!!f.capture:!!f,E):fl(o,u,h,!1,f,E)}function fl(o,u,h,f,E,S){if(!u)throw Error("Invalid event type");var C=d(E)?!!E.capture:!!E,Z=bo(o);if(Z||(o[Io]=Z=new yi(o)),h=Z.add(u,h,f,C,S),h.proxy)return h;if(f=sm(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)tm||(E=C),E===void 0&&(E=!1),o.addEventListener(u.toString(),f,E);else if(o.attachEvent)o.attachEvent(gl(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function sm(){function o(h){return u.call(o.src,o.listener,h)}let u=om;return o}function pl(o,u,h,f,E){if(Array.isArray(u)){for(var S=0;S<u.length;S++)pl(o,u[S],h,f,E);return null}return h=So(h),o&&o[sr]?o.L(u,h,d(f)?!!f.capture:!!f,E):fl(o,u,h,!0,f,E)}function ml(o,u,h,f,E){if(Array.isArray(u))for(var S=0;S<u.length;S++)ml(o,u[S],h,f,E);else f=d(f)?!!f.capture:!!f,h=So(h),o&&o[sr]?(o=o.i,u=String(u).toString(),u in o.g&&(S=o.g[u],h=wo(S,h,f,E),-1<h&&(gi(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[u],o.h--)))):o&&(o=bo(o))&&(u=o.g[u.toString()],o=-1,u&&(o=wo(u,h,f,E)),(h=-1<o?u[o]:null)&&To(h))}function To(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[sr])vo(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(gl(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=bo(u))?(vo(h,o),h.h==0&&(h.src=null,u[Io]=null)):gi(o)}}}function gl(o){return o in Eo?Eo[o]:Eo[o]="on"+o}function om(o,u){if(o.da)o=!0;else{u=new ir(u,this);var h=o.listener,f=o.ha||o.src;o.fa&&To(o),o=h.call(f,u)}return o}function bo(o){return o=o[Io],o instanceof yi?o:null}var Ao="__closure_events_fn_"+(1e9*Math.random()>>>0);function So(o){return typeof o=="function"?o:(o[Ao]||(o[Ao]=function(u){return o.handleEvent(u)}),o[Ao])}function ve(){wt.call(this),this.i=new yi(this),this.M=this,this.F=null}N(ve,wt),ve.prototype[sr]=!0,ve.prototype.removeEventListener=function(o,u,h,f){ml(this,o,u,h,f)};function Re(o,u){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new _e(u,o);else if(u instanceof _e)u.target=u.target||o;else{var E=u;u=new _e(f,o),v(u,E)}if(E=!0,h)for(var S=h.length-1;0<=S;S--){var C=u.g=h[S];E=_i(C,f,!0,u)&&E}if(C=u.g=o,E=_i(C,f,!0,u)&&E,E=_i(C,f,!1,u)&&E,h)for(S=0;S<h.length;S++)C=u.g=h[S],E=_i(C,f,!1,u)&&E}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],f=0;f<h.length;f++)gi(h[f]);delete o.g[u],o.h--}}this.F=null},ve.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},ve.prototype.L=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function _i(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var E=!0,S=0;S<u.length;++S){var C=u[S];if(C&&!C.da&&C.capture==h){var Z=C.listener,ge=C.ha||C.src;C.fa&&vo(o.i,C),E=Z.call(ge,f)!==!1&&E}}return E&&!f.defaultPrevented}function yl(o,u,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function _l(o){o.g=yl(()=>{o.g=null,o.i&&(o.i=!1,_l(o))},o.l);let u=o.h;o.h=null,o.m.apply(null,u)}class am extends wt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:_l(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function or(o){wt.call(this),this.h=o,this.g={}}N(or,wt);var vl=[];function wl(o){Y(o.g,function(u,h){this.g.hasOwnProperty(h)&&To(u)},o),o.g={}}or.prototype.N=function(){or.aa.N.call(this),wl(this)},or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ro=c.JSON.stringify,cm=c.JSON.parse,um=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Po(){}Po.prototype.h=null;function Il(o){return o.h||(o.h=o.i())}function El(){}var ar={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ko(){_e.call(this,"d")}N(ko,_e);function Co(){_e.call(this,"c")}N(Co,_e);var Ut={},Tl=null;function vi(){return Tl=Tl||new ve}Ut.La="serverreachability";function bl(o){_e.call(this,Ut.La,o)}N(bl,_e);function cr(o){let u=vi();Re(u,new bl(u))}Ut.STAT_EVENT="statevent";function Al(o,u){_e.call(this,Ut.STAT_EVENT,o),this.stat=u}N(Al,_e);function Pe(o){let u=vi();Re(u,new Al(u,o))}Ut.Ma="timingevent";function Sl(o,u){_e.call(this,Ut.Ma,o),this.size=u}N(Sl,_e);function ur(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function lr(){this.g=!0}lr.prototype.xa=function(){this.g=!1};function lm(o,u,h,f,E,S){o.info(function(){if(o.g)if(S)for(var C="",Z=S.split("&"),ge=0;ge<Z.length;ge++){var J=Z[ge].split("=");if(1<J.length){var we=J[0];J=J[1];var Ie=we.split("_");C=2<=Ie.length&&Ie[1]=="type"?C+(we+"="+J+"&"):C+(we+"=redacted&")}}else C=null;else C=S;return"XMLHTTP REQ ("+f+") [attempt "+E+"]: "+u+`
`+h+`
`+C})}function hm(o,u,h,f,E,S,C){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+E+"]: "+u+`
`+h+`
`+S+" "+C})}function hn(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+fm(o,h)+(f?" "+f:"")})}function dm(o,u){o.info(function(){return"TIMEOUT: "+u})}lr.prototype.info=function(){};function fm(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var E=f[1];if(Array.isArray(E)&&!(1>E.length)){var S=E[0];if(S!="noop"&&S!="stop"&&S!="close")for(var C=1;C<E.length;C++)E[C]=""}}}}return Ro(h)}catch{return u}}var wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Do;function Ii(){}N(Ii,Po),Ii.prototype.g=function(){return new XMLHttpRequest},Ii.prototype.i=function(){return{}},Do=new Ii;function It(o,u,h,f){this.j=o,this.i=u,this.l=h,this.R=f||1,this.U=new or(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pl}function Pl(){this.i=null,this.g="",this.h=!1}var kl={},No={};function xo(o,u,h){o.L=1,o.v=Ai(ot(u)),o.m=h,o.P=!0,Cl(o,null)}function Cl(o,u){o.F=Date.now(),Ei(o),o.A=ot(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),zl(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Pl,o.g=ch(o.j,h?u:null,!o.m),0<o.O&&(o.M=new am(T(o.Y,o,o.g),o.O)),u=o.U,h=o.g,f=o.ca;var E="readystatechange";Array.isArray(E)||(E&&(vl[0]=E.toString()),E=vl);for(var S=0;S<E.length;S++){var C=dl(h,E[S],f||u.handleEvent,!1,u.h||u);if(!C)break;u.g[C.key]=C}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),cr(),lm(o.i,o.u,o.A,o.l,o.R,o.m)}It.prototype.ca=function(o){o=o.target;let u=this.M;u&&at(o)==3?u.j():this.Y(o)},It.prototype.Y=function(o){try{if(o==this.g)e:{let Ie=at(this.g);var u=this.g.Ba();let pn=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||Yl(this.g)))){this.J||Ie!=4||u==7||(u==8||0>=pn?cr(3):cr(2)),Oo(this);var h=this.g.Z();this.X=h;t:if(Dl(this)){var f=Yl(this.g);o="";var E=f.length,S=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),hr(this);var C="";break t}this.h.i=new c.TextDecoder}for(u=0;u<E;u++)this.h.h=!0,o+=this.h.i.decode(f[u],{stream:!(S&&u==E-1)});f.length=0,this.h.g+=o,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=h==200,hm(this.i,this.u,this.A,this.l,this.R,Ie,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,ge=this.g;if((Z=ge.g?ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Z)){var J=Z;break t}}J=null}if(h=J)hn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vo(this,h);else{this.o=!1,this.s=3,Pe(12),Bt(this),hr(this);break e}}if(this.P){h=!0;let Ge;for(;!this.J&&this.C<C.length;)if(Ge=pm(this,C),Ge==No){Ie==4&&(this.s=4,Pe(14),h=!1),hn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==kl){this.s=4,Pe(15),hn(this.i,this.l,C,"[Invalid Chunk]"),h=!1;break}else hn(this.i,this.l,Ge,null),Vo(this,Ge);if(Dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||C.length!=0||this.h.h||(this.s=1,Pe(16),h=!1),this.o=this.o&&h,!h)hn(this.i,this.l,C,"[Invalid Chunked Response]"),Bt(this),hr(this);else if(0<C.length&&!this.W){this.W=!0;var we=this.j;we.g==this&&we.ba&&!we.M&&(we.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),qo(we),we.M=!0,Pe(11))}}else hn(this.i,this.l,C,null),Vo(this,C);Ie==4&&Bt(this),this.o&&!this.J&&(Ie==4?ih(this.j,this):(this.o=!1,Ei(this)))}else Dm(this.g),h==400&&0<C.indexOf("Unknown SID")?(this.s=3,Pe(12)):(this.s=0,Pe(13)),Bt(this),hr(this)}}}catch{}finally{}};function Dl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function pm(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?No:(h=Number(u.substring(h,f)),isNaN(h)?kl:(f+=1,f+h>u.length?No:(u=u.slice(f,f+h),o.C=f+h,u)))}It.prototype.cancel=function(){this.J=!0,Bt(this)};function Ei(o){o.S=Date.now()+o.I,Nl(o,o.I)}function Nl(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ur(T(o.ba,o),u)}function Oo(o){o.B&&(c.clearTimeout(o.B),o.B=null)}It.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(dm(this.i,this.A),this.L!=2&&(cr(),Pe(17)),Bt(this),this.s=2,hr(this)):Nl(this,this.S-o)};function hr(o){o.j.G==0||o.J||ih(o.j,o)}function Bt(o){Oo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,wl(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Vo(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Lo(h.h,o))){if(!o.K&&Lo(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var E=f;if(E[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ci(h),Pi(h);else break e;Bo(h),Pe(18)}}else h.za=E[1],0<h.za-h.T&&37500>E[2]&&h.F&&h.v==0&&!h.C&&(h.C=ur(T(h.Za,h),6e3));if(1>=Vl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else $t(h,11)}else if((o.K||h.g==o)&&Ci(h),!G(u))for(E=h.Da.g.parse(u),u=0;u<E.length;u++){let J=E[u];if(h.T=J[0],J=J[1],h.G==2)if(J[0]=="c"){h.K=J[1],h.ia=J[2];let we=J[3];we!=null&&(h.la=we,h.j.info("VER="+h.la));let Ie=J[4];Ie!=null&&(h.Aa=Ie,h.j.info("SVER="+h.Aa));let pn=J[5];pn!=null&&typeof pn=="number"&&0<pn&&(f=1.5*pn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;let Ge=o.g;if(Ge){let Ni=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var S=f.h;S.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Mo(S,S.h),S.h=null))}if(f.D){let $o=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;$o&&(f.ya=$o,te(f.I,f.D,$o))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var C=o;if(f.qa=ah(f,f.J?f.ia:null,f.W),C.K){Ll(f.h,C);var Z=C,ge=f.L;ge&&(Z.I=ge),Z.B&&(Oo(Z),Ei(Z)),f.g=C}else nh(f);0<h.i.length&&ki(h)}else J[0]!="stop"&&J[0]!="close"||$t(h,7);else h.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?$t(h,7):Uo(h):J[0]!="noop"&&h.l&&h.l.ta(J),h.v=0)}}cr(4)}catch{}}var mm=class{constructor(o,u){this.g=o,this.map=u}};function xl(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ol(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Vl(o){return o.h?1:o.g?o.g.size:0}function Lo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Mo(o,u){o.g?o.g.add(u):o.h=u}function Ll(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}xl.prototype.cancel=function(){if(this.i=Ml(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function Ml(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(let h of o.g.values())u=u.concat(h.D);return u}return V(o.i)}function gm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,f=0;f<h;f++)u.push(o[f]);return u}u=[],h=0;for(f in o)u[h++]=o[f];return u}function ym(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(let f in o)u[h++]=f;return u}}}function Fl(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=ym(o),f=gm(o),E=f.length,S=0;S<E;S++)u.call(void 0,f[S],h&&h[S],o)}var Ul=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _m(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),E=null;if(0<=f){var S=o[h].substring(0,f);E=o[h].substring(f+1)}else S=o[h];u(S,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function qt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof qt){this.h=o.h,Ti(this,o.j),this.o=o.o,this.g=o.g,bi(this,o.s),this.l=o.l;var u=o.i,h=new pr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Bl(this,h),this.m=o.m}else o&&(u=String(o).match(Ul))?(this.h=!1,Ti(this,u[1]||"",!0),this.o=dr(u[2]||""),this.g=dr(u[3]||"",!0),bi(this,u[4]),this.l=dr(u[5]||"",!0),Bl(this,u[6]||"",!0),this.m=dr(u[7]||"")):(this.h=!1,this.i=new pr(null,this.h))}qt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(fr(u,ql,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(fr(u,ql,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(fr(h,h.charAt(0)=="/"?Im:wm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",fr(h,Tm)),o.join("")};function ot(o){return new qt(o)}function Ti(o,u,h){o.j=h?dr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function bi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Bl(o,u,h){u instanceof pr?(o.i=u,bm(o.i,o.h)):(h||(u=fr(u,Em)),o.i=new pr(u,o.h))}function te(o,u,h){o.i.set(u,h)}function Ai(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function dr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function fr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,vm),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function vm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ql=/[#\/\?@]/g,wm=/[#\?:]/g,Im=/[#\?]/g,Em=/[#\?@]/g,Tm=/#/g;function pr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Et(o){o.g||(o.g=new Map,o.h=0,o.i&&_m(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=pr.prototype,n.add=function(o,u){Et(this),this.i=null,o=dn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function $l(o,u){Et(o),u=dn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function jl(o,u){return Et(o),u=dn(o,u),o.g.has(u)}n.forEach=function(o,u){Et(this),this.g.forEach(function(h,f){h.forEach(function(E){o.call(u,E,f,this)},this)},this)},n.na=function(){Et(this);let o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){let E=o[f];for(let S=0;S<E.length;S++)h.push(u[f])}return h},n.V=function(o){Et(this);let u=[];if(typeof o=="string")jl(this,o)&&(u=u.concat(this.g.get(dn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return Et(this),this.i=null,o=dn(this,o),jl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function zl(o,u,h){$l(o,u),0<h.length&&(o.i=null,o.g.set(dn(o,u),V(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];let S=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var E=S;C[f]!==""&&(E+="="+encodeURIComponent(String(C[f]))),o.push(E)}}return this.i=o.join("&")};function dn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function bm(o,u){u&&!o.j&&(Et(o),o.i=null,o.g.forEach(function(h,f){var E=f.toLowerCase();f!=E&&($l(this,f),zl(this,E,h))},o)),o.j=u}function Am(o,u){let h=new lr;if(c.Image){let f=new Image;f.onload=R(Tt,h,"TestLoadImage: loaded",!0,u,f),f.onerror=R(Tt,h,"TestLoadImage: error",!1,u,f),f.onabort=R(Tt,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=R(Tt,h,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function Sm(o,u){let h=new lr,f=new AbortController,E=setTimeout(()=>{f.abort(),Tt(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(S=>{clearTimeout(E),S.ok?Tt(h,"TestPingServer: ok",!0,u):Tt(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(E),Tt(h,"TestPingServer: error",!1,u)})}function Tt(o,u,h,f,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),f(h)}catch{}}function Rm(){this.g=new um}function Pm(o,u,h){let f=h||"";try{Fl(o,function(E,S){let C=E;d(E)&&(C=Ro(E)),u.push(f+S+"="+encodeURIComponent(C))})}catch(E){throw u.push(f+"type="+encodeURIComponent("_badmap")),E}}function mr(o){this.l=o.Ub||null,this.j=o.eb||!1}N(mr,Po),mr.prototype.g=function(){return new Si(this.l,this.j)},mr.prototype.i=function(o){return function(){return o}}({});function Si(o,u){ve.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Si,ve),n=Si.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,yr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?gr(this):yr(this),this.readyState==3&&Gl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,gr(this))},n.Qa=function(o){this.g&&(this.response=o,gr(this))},n.ga=function(){this.g&&gr(this)};function gr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,yr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function yr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Wl(o){let u="";return Y(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function Fo(o,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Wl(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,u,h))}function se(o){ve.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(se,ve);var km=/^https?$/i,Cm=["POST","PUT"];n=se.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Do.g(),this.v=this.o?Il(this.o):Il(Do),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(S){Kl(this,S);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var E in f)h.set(E,f[E]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let S of f.keys())h.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),E=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Cm,u,void 0))||f||E||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[S,C]of h)this.g.setRequestHeader(S,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jl(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Kl(this,S)}};function Kl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Hl(o),Ri(o)}function Hl(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Re(this,"complete"),Re(this,"abort"),Ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),se.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ql(this):this.bb())},n.bb=function(){Ql(this)};function Ql(o){if(o.h&&typeof a<"u"&&(!o.v[1]||at(o)!=4||o.Z()!=2)){if(o.u&&at(o)==4)yl(o.Ea,0,o);else if(Re(o,"readystatechange"),at(o)==4){o.h=!1;try{let C=o.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=C===0){var E=String(o.D).match(Ul)[1]||null;!E&&c.self&&c.self.location&&(E=c.self.location.protocol.slice(0,-1)),f=!km.test(E?E.toLowerCase():"")}h=f}if(h)Re(o,"complete"),Re(o,"success");else{o.m=6;try{var S=2<at(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",Hl(o)}}finally{Ri(o)}}}}function Ri(o,u){if(o.g){Jl(o);let h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Re(o,"ready");try{h.onreadystatechange=f}catch{}}}function Jl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),cm(u)}};function Yl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Dm(o){let u={};o=(o.g&&2<=at(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(G(o[f]))continue;var h=I(o[f]);let E=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let S=u[E]||[];u[E]=S,S.push(h)}w(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _r(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Xl(o){this.Aa=0,this.i=[],this.j=new lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_r("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_r("baseRetryDelayMs",5e3,o),this.cb=_r("retryDelaySeedMs",1e4,o),this.Wa=_r("forwardChannelMaxRetries",2,o),this.wa=_r("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new xl(o&&o.concurrentRequestLimit),this.Da=new Rm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Xl.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,f){Pe(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=ah(this,null,this.W),ki(this)};function Uo(o){if(Zl(o),o.G==3){var u=o.U++,h=ot(o.I);if(te(h,"SID",o.K),te(h,"RID",u),te(h,"TYPE","terminate"),vr(o,h),u=new It(o,o.j,u),u.L=2,u.v=Ai(ot(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=ch(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ei(u)}oh(o)}function Pi(o){o.g&&(qo(o),o.g.cancel(),o.g=null)}function Zl(o){Pi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ki(o){if(!Ol(o.h)&&!o.s){o.s=!0;var u=o.Ga;nr||hl(),rr||(nr(),rr=!0),_o.add(u,o),o.B=0}}function Nm(o,u){return Vl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ur(T(o.Ga,o,u),sh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let E=new It(this,this.j,o),S=this.o;if(this.S&&(S?(S=m(S),v(S,this.S)):S=this.S),this.m!==null||this.O||(E.H=S,S=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=th(this,E,u),h=ot(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),vr(this,h),S&&(this.O?u="headers="+encodeURIComponent(String(Wl(S)))+"&"+u:this.m&&Fo(h,this.m,S)),Mo(this.h,E),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",u),te(h,"SID","null"),E.T=!0,xo(E,h,null)):xo(E,h,u),this.G=2}}else this.G==3&&(o?eh(this,o):this.i.length==0||Ol(this.h)||eh(this))};function eh(o,u){var h;u?h=u.l:h=o.U++;let f=ot(o.I);te(f,"SID",o.K),te(f,"RID",h),te(f,"AID",o.T),vr(o,f),o.m&&o.o&&Fo(f,o.m,o.o),h=new It(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=th(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Mo(o.h,h),xo(h,f,u)}function vr(o,u){o.H&&Y(o.H,function(h,f){te(u,f,h)}),o.l&&Fl({},function(h,f){te(u,f,h)})}function th(o,u,h){h=Math.min(o.i.length,h);var f=o.l?T(o.l.Na,o.l,o):null;e:{var E=o.i;let S=-1;for(;;){let C=["count="+h];S==-1?0<h?(S=E[0].g,C.push("ofs="+S)):S=0:C.push("ofs="+S);let Z=!0;for(let ge=0;ge<h;ge++){let J=E[ge].g,we=E[ge].map;if(J-=S,0>J)S=Math.max(0,E[ge].g-100),Z=!1;else try{Pm(we,C,"req"+J+"_")}catch{f&&f(we)}}if(Z){f=C.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,f}function nh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;nr||hl(),rr||(nr(),rr=!0),_o.add(u,o),o.v=0}}function Bo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ur(T(o.Fa,o),sh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ur(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pe(10),Pi(this),rh(this))};function qo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function rh(o){o.g=new It(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=ot(o.qa);te(u,"RID","rpc"),te(u,"SID",o.K),te(u,"AID",o.T),te(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(u,"TO",o.ja),te(u,"TYPE","xmlhttp"),vr(o,u),o.m&&o.o&&Fo(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Ai(ot(u)),h.m=null,h.P=!0,Cl(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Pi(this),Bo(this),Pe(19))};function Ci(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ih(o,u){var h=null;if(o.g==u){Ci(o),qo(o),o.g=null;var f=2}else if(Lo(o.h,u))h=u.D,Ll(o.h,u),f=1;else return;if(o.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var E=o.B;f=vi(),Re(f,new Sl(f,h)),ki(o)}else nh(o);else if(E=u.s,E==3||E==0&&0<u.X||!(f==1&&Nm(o,u)||f==2&&Bo(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),E){case 1:$t(o,5);break;case 4:$t(o,10);break;case 3:$t(o,6);break;default:$t(o,2)}}}function sh(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function $t(o,u){if(o.j.info("Error code "+u),u==2){var h=T(o.fb,o),f=o.Xa;let E=!f;f=new qt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ti(f,"https"),Ai(f),E?Am(f.toString(),h):Sm(f.toString(),h)}else Pe(2);o.G=0,o.l&&o.l.sa(u),oh(o),Zl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function oh(o){if(o.G=0,o.ka=[],o.l){let u=Ml(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ka,u),D(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function ah(o,u,h){var f=h instanceof qt?ot(h):new qt(h);if(f.g!="")u&&(f.g=u+"."+f.g),bi(f,f.s);else{var E=c.location;f=E.protocol,u=u?u+"."+E.hostname:E.hostname,E=+E.port;var S=new qt(null);f&&Ti(S,f),u&&(S.g=u),E&&bi(S,E),h&&(S.l=h),f=S}return h=o.D,u=o.ya,h&&u&&te(f,h,u),te(f,"VER",o.la),vr(o,f),f}function ch(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new se(new mr({eb:h})):new se(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uh(){}n=uh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Di(){}Di.prototype.g=function(o,u){return new xe(o,u)};function xe(o,u){ve.call(this),this.g=new Xl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!G(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new fn(this)}N(xe,ve),xe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xe.prototype.close=function(){Uo(this.g)},xe.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ro(o),o=h);u.i.push(new mm(u.Ya++,o)),u.G==3&&ki(u)},xe.prototype.N=function(){this.g.l=null,delete this.j,Uo(this.g),delete this.g,xe.aa.N.call(this)};function lh(o){ko.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(let h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}N(lh,ko);function hh(){Co.call(this),this.status=1}N(hh,Co);function fn(o){this.g=o}N(fn,uh),fn.prototype.ua=function(){Re(this.g,"a")},fn.prototype.ta=function(o){Re(this.g,new lh(o))},fn.prototype.sa=function(o){Re(this.g,new hh)},fn.prototype.ra=function(){Re(this.g,"b")},Di.prototype.createWebChannel=Di.prototype.g,xe.prototype.send=xe.prototype.o,xe.prototype.open=xe.prototype.m,xe.prototype.close=xe.prototype.close,Ka=dt.createWebChannelTransport=function(){return new Di},Wa=dt.getStatEventTarget=function(){return vi()},Ga=dt.Event=Ut,vs=dt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wi.NO_ERROR=0,wi.TIMEOUT=8,wi.HTTP_ERROR=6,Ur=dt.ErrorCode=wi,Rl.COMPLETE="complete",za=dt.EventType=Rl,El.EventType=ar,ar.OPEN="a",ar.CLOSE="b",ar.ERROR="c",ar.MESSAGE="d",ve.prototype.listen=ve.prototype.K,In=dt.WebChannel=El,B_=dt.FetchXmlHttpFactory=mr,se.prototype.listenOnce=se.prototype.L,se.prototype.getLastError=se.prototype.Ka,se.prototype.getLastErrorCode=se.prototype.Ba,se.prototype.getStatus=se.prototype.Z,se.prototype.getResponseJson=se.prototype.Oa,se.prototype.getResponseText=se.prototype.oa,se.prototype.send=se.prototype.ea,se.prototype.setWithCredentials=se.prototype.Ha,ja=dt.XhrIo=se}).apply(typeof _s<"u"?_s:typeof self<"u"?self:typeof window<"u"?window:{});var qd="@firebase/firestore";var pe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};pe.UNAUTHENTICATED=new pe(null),pe.GOOGLE_CREDENTIALS=new pe("google-credentials-uid"),pe.FIRST_PARTY=new pe("first-party-uid"),pe.MOCK_USER=new pe("mock-user");var Kn="11.0.2";var en=new bt("@firebase/firestore");function En(){return en.logLevel}function x(n,...e){if(en.logLevel<=j.DEBUG){let t=e.map(Du);en.debug(`Firestore (${Kn}): ${n}`,...t)}}function ft(n,...e){if(en.logLevel<=j.ERROR){let t=e.map(Du);en.error(`Firestore (${Kn}): ${n}`,...t)}}function kn(n,...e){if(en.logLevel<=j.WARN){let t=e.map(Du);en.warn(`Firestore (${Kn}): ${n}`,...t)}}function Du(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function M(n="Unexpected state"){let e=`FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: `+n;throw ft(e),new Error(e)}function Q(n,e){n||M()}function B(n,e){return n}var P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},O=class extends Oe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var je=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Ss=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Ya=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(pe.UNAUTHENTICATED))}shutdown(){}},Xa=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},Za=class{constructor(e){this.t=e,this.currentUser=pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),s=new je;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new je,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?c(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new je)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new Ss(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new pe(e)}},ec=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=pe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}},tc=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ec(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}},nc=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},rc=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Q(this.o===void 0);let r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.R;return this.R=s.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string"),this.R=t.token,new nc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function q_(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var Rs=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=q_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}};function K(n,e){return n<e?-1:n>e?1:0}function Cn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var ye=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var U=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new ye(0,0))}static max(){return new n(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ps=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(),r===void 0?r=e.length-t:r>e.length-t&&M(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},ie=class n extends Ps{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},$_=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Le=class n extends Ps{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return $_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var F=class n{constructor(e){this.path=e}static fromPath(e){return new n(ie.fromString(e))}static fromName(e){return new n(ie.fromString(e).popFirst(5))}static empty(){return new n(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new ie(e.slice()))}};var ic=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};ic.UNKNOWN_ID=-1;function j_(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new ye(t+1,0):new ye(t,r));return new tn(i,F.empty(),e)}function z_(n){return new tn(n.readTime,n.key,-1)}var tn=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(U.min(),F.empty(),-1)}static max(){return new n(U.max(),F.empty(),-1)}};function G_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}var W_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",sc=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Hn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==W_)throw n;x("LocalStore","Unexpectedly lost primary lease")}var k=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),c=0;for(let l=0;l<s;l++){let d=l;t(e[d]).next(p=>{a[d]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};function K_(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qn(n){return n.name==="IndexedDbTransactionError"}var Dn=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};Dn.oe=-1;function ui(n){return n==null}function Kr(n){return n===0&&1/n==-1/0}function H_(n){return typeof n=="number"&&Number.isInteger(n)&&!Kr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Q_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=$d(e)),e=J_(n.get(t),e);return $d(e)}function J_(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function $d(n){return n+""}var Y_=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],lT=[...Y_,"documentOverlays"],X_=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Z_=X_,ev=[...Z_,"indexConfiguration","indexState","indexEntries"];var hT=[...ev,"globals"];function jd(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Lt(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function If(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var oe=class n{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sn(this.root,e,this.comparator,!0)}},Sn=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ze=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();let e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}};Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var me=class n{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ks(this.data.getIterator())}getIteratorFrom(e){return new ks(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},ks=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var $e=class n{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new n([])}unionWith(e){let t=new me(Le.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Cn(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var Cs=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Ae=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Cs("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Ae.EMPTY_BYTE_STRING=new Ae("");var tv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pt(n){if(Q(!!n),typeof n=="string"){let e=0,t=tv.exec(n);if(Q(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(n.seconds),nanos:re(n.nanos)}}function re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function mt(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}function Nu(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function so(n){let e=n.mapValue.fields.__previous_value__;return Nu(e)?so(e):e}function Hr(n){let e=pt(n.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}var oc=class{constructor(e,t,r,i,s,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}},Ds=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var ws={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ot(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Nu(n)?4:Tf(n)?9007199254740991:Ef(n)?10:11:M()}function tt(n,e){if(n===e)return!0;let t=Ot(n);if(t!==Ot(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Hr(n).isEqual(Hr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=pt(i.timestampValue),c=pt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return mt(i.bytesValue).isEqual(mt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return re(i.geoPointValue.latitude)===re(s.geoPointValue.latitude)&&re(i.geoPointValue.longitude)===re(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return re(i.integerValue)===re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=re(i.doubleValue),c=re(s.doubleValue);return a===c?Kr(a)===Kr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Cn(n.arrayValue.values||[],e.arrayValue.values||[],tt);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(jd(a)!==jd(c))return!1;for(let l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!tt(a[l],c[l])))return!1;return!0}(n,e);default:return M()}}function Qr(n,e){return(n.values||[]).find(t=>tt(t,e))!==void 0}function Nn(n,e){if(n===e)return 0;let t=Ot(n),r=Ot(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(s,a){let c=re(s.integerValue||s.doubleValue),l=re(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return zd(n.timestampValue,e.timestampValue);case 4:return zd(Hr(n),Hr(e));case 5:return K(n.stringValue,e.stringValue);case 6:return function(s,a){let c=mt(s),l=mt(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let c=s.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){let p=K(c[d],l[d]);if(p!==0)return p}return K(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let c=K(re(s.latitude),re(a.latitude));return c!==0?c:K(re(s.longitude),re(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Gd(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,l,d,p;let _=s.fields||{},T=a.fields||{},R=(c=_.value)===null||c===void 0?void 0:c.arrayValue,N=(l=T.value)===null||l===void 0?void 0:l.arrayValue,V=K(((d=R?.values)===null||d===void 0?void 0:d.length)||0,((p=N?.values)===null||p===void 0?void 0:p.length)||0);return V!==0?V:Gd(R,N)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===ws.mapValue&&a===ws.mapValue)return 0;if(s===ws.mapValue)return 1;if(a===ws.mapValue)return-1;let c=s.fields||{},l=Object.keys(c),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let _=0;_<l.length&&_<p.length;++_){let T=K(l[_],p[_]);if(T!==0)return T;let R=Nn(c[l[_]],d[p[_]]);if(R!==0)return R}return K(l.length,p.length)}(n.mapValue,e.mapValue);default:throw M()}}function zd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);let t=pt(n),r=pt(e),i=K(t.seconds,r.seconds);return i!==0?i:K(t.nanos,r.nanos)}function Gd(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=Nn(t[i],r[i]);if(s)return s}return K(t.length,r.length)}function xn(n){return ac(n)}function ac(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=pt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return mt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=ac(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${ac(t.fields[a])}`;return i+"}"}(n.mapValue):M()}function Ts(n){switch(Ot(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=so(n);return e?16+Ts(e):16;case 5:return 2*n.stringValue.length;case 6:return mt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ts(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Lt(r.fields,(s,a)=>{i+=s.length+Ts(a)}),i}(n.mapValue);default:throw M()}}function cc(n){return!!n&&"integerValue"in n}function xu(n){return!!n&&"arrayValue"in n}function Wd(n){return!!n&&"nullValue"in n}function Kd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bs(n){return!!n&&"mapValue"in n}function Ef(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function $r(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Lt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=$r(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$r(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Tf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var Ce=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$r(t)}setAll(e){let t=Le.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=$r(a):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());bs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];bs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Lt(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n($r(this.value))}};function bf(n){let e=[];return Lt(n.fields,(t,r)=>{let i=new Le([t]);if(bs(r)){let s=bf(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new $e(e)}var Ue=class n{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new n(e,0,U.min(),U.min(),U.min(),Ce.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,U.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,U.min(),U.min(),Ce.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,U.min(),U.min(),Ce.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var On=class{constructor(e,t){this.position=e,this.inclusive=t}};function Hd(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),t.key):r=Nn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!tt(n.position[t],e.position[t]))return!1;return!0}var Vn=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function nv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Ns=class{},he=class n extends Ns{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new lc(e,t,r):t==="array-contains"?new fc(e,r):t==="in"?new pc(e,r):t==="not-in"?new mc(e,r):t==="array-contains-any"?new gc(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new hc(e,r):new dc(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Nn(t,this.value)):t!==null&&Ot(this.value)===Ot(t)&&this.matchesComparison(Nn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},nt=class n extends Ns{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return Af(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function Af(n){return n.op==="and"}function Sf(n){return rv(n)&&Af(n)}function rv(n){for(let e of n.filters)if(e instanceof nt)return!1;return!0}function uc(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+xn(n.value);if(Sf(n))return n.filters.map(e=>uc(e)).join(",");{let e=n.filters.map(t=>uc(t)).join(",");return`${n.op}(${e})`}}function Rf(n,e){return n instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.field.isEqual(i.field)&&tt(r.value,i.value)}(n,e):n instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Rf(a,i.filters[c]),!0):!1}(n,e):void M()}function Pf(n){return n instanceof he?function(t){return`${t.field.canonicalString()} ${t.op} ${xn(t.value)}`}(n):n instanceof nt?function(t){return t.op.toString()+" {"+t.getFilters().map(Pf).join(" ,")+"}"}(n):"Filter"}var lc=class extends he{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){let t=F.comparator(e.key,this.key);return this.matchesComparison(t)}},hc=class extends he{constructor(e,t){super(e,"in",t),this.keys=kf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},dc=class extends he{constructor(e,t){super(e,"not-in",t),this.keys=kf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function kf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}var fc=class extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return xu(t)&&Qr(t.arrayValue,this.value)}},pc=class extends he{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Qr(this.value.arrayValue,t)}},mc=class extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Qr(this.value.arrayValue,t)}},gc=class extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!xu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Qr(this.value.arrayValue,r))}};var yc=class{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}};function Jd(n,e=null,t=[],r=[],i=null,s=null,a=null){return new yc(n,e,t,r,i,s,a)}function Ou(n){let e=B(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>uc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ui(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>xn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>xn(r)).join(",")),e.ue=t}return e.ue}function Vu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!nv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Rf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Qd(n.startAt,e.startAt)&&Qd(n.endAt,e.endAt)}function _c(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var Ln=class{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function iv(n,e,t,r,i,s,a,c){return new Ln(n,e,t,r,i,s,a,c)}function oo(n){return new Ln(n)}function Yd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sv(n){return n.collectionGroup!==null}function jr(n){let e=B(n);if(e.ce===null){e.ce=[];let t=new Set;for(let s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new me(Le.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Vn(s,r))}),t.has(Le.keyField().canonicalString())||e.ce.push(new Vn(Le.keyField(),r))}return e.ce}function et(n){let e=B(n);return e.le||(e.le=ov(e,jr(n))),e.le}function ov(n,e){if(n.limitType==="F")return Jd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new Vn(i.field,s)});let t=n.endAt?new On(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new On(n.startAt.position,n.startAt.inclusive):null;return Jd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function vc(n,e,t){return new Ln(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ao(n,e){return Vu(et(n),et(e))&&n.limitType===e.limitType}function Cf(n){return`${Ou(et(n))}|lt:${n.limitType}`}function Tn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Pf(i)).join(", ")}]`),ui(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>xn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>xn(i)).join(",")),`Target(${r})`}(et(n))}; limitType=${n.limitType})`}function co(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):F.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of jr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){let d=Hd(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,jr(r),i)||r.endAt&&!function(a,c,l){let d=Hd(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,jr(r),i))}(n,e)}function av(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Df(n){return(e,t)=>{let r=!1;for(let i of jr(n)){let s=cv(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cv(n,e,t){let r=n.field.isKeyField()?F.comparator(e.key,t.key):function(s,a,c){let l=a.data.field(s),d=c.data.field(s);return l!==null&&d!==null?Nn(l,d):M()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}var gt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Lt(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return If(this.inner)}size(){return this.innerSize}};var uv=new oe(F.comparator);function yt(){return uv}var Nf=new oe(F.comparator);function qr(...n){let e=Nf;for(let t of n)e=e.insert(t.key,t);return e}function xf(n){let e=Nf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xt(){return zr()}function Of(){return zr()}function zr(){return new gt(n=>n.toString(),(n,e)=>n.isEqual(e))}var lv=new oe(F.comparator),hv=new me(F.comparator);function z(...n){let e=hv;for(let t of n)e=e.add(t);return e}var dv=new me(K);function fv(){return dv}function Lu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kr(e)?"-0":e}}function Vf(n){return{integerValue:""+n}}function pv(n,e){return H_(e)?Vf(e):Lu(n,e)}var Mn=class{constructor(){this._=void 0}};function mv(n,e,t){return n instanceof nn?function(i,s){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Nu(s)&&(s=so(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof rn?Mf(n,e):n instanceof sn?Ff(n,e):function(i,s){let a=Lf(i,s),c=Xd(a)+Xd(i.Pe);return cc(a)&&cc(i.Pe)?Vf(c):Lu(i.serializer,c)}(n,e)}function gv(n,e,t){return n instanceof rn?Mf(n,e):n instanceof sn?Ff(n,e):t}function Lf(n,e){return n instanceof Fn?function(r){return cc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var nn=class extends Mn{},rn=class extends Mn{constructor(e){super(),this.elements=e}};function Mf(n,e){let t=Uf(e);for(let r of n.elements)t.some(i=>tt(i,r))||t.push(r);return{arrayValue:{values:t}}}var sn=class extends Mn{constructor(e){super(),this.elements=e}};function Ff(n,e){let t=Uf(e);for(let r of n.elements)t=t.filter(i=>!tt(i,r));return{arrayValue:{values:t}}}var Fn=class extends Mn{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function Xd(n){return re(n.integerValue||n.doubleValue)}function Uf(n){return xu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var wc=class{constructor(e,t){this.field=e,this.transform=t}};function yv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof rn&&i instanceof rn||r instanceof sn&&i instanceof sn?Cn(r.elements,i.elements,tt):r instanceof Fn&&i instanceof Fn?tt(r.Pe,i.Pe):r instanceof nn&&i instanceof nn}(n.transform,e.transform)}var Ic=class{constructor(e,t){this.version=e,this.transformResults=t}},Ve=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function As(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Un=class{};function Bf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Jr(n.key,Ve.none()):new on(n.key,n.data,Ve.none());{let t=n.data,r=Ce.empty(),i=new me(Le.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new rt(n.key,r,new $e(i.toArray()),Ve.none())}}function _v(n,e,t){n instanceof on?function(i,s,a){let c=i.value.clone(),l=ef(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof rt?function(i,s,a){if(!As(i.precondition,s))return void s.convertToUnknownDocument(a.version);let c=ef(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(qf(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Gr(n,e,t,r){return n instanceof on?function(s,a,c,l){if(!As(s.precondition,a))return c;let d=s.value.clone(),p=tf(s.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof rt?function(s,a,c,l){if(!As(s.precondition,a))return c;let d=tf(s.fieldTransforms,l,a),p=a.data;return p.setAll(qf(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(s,a,c){return As(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function vv(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=Lf(r.transform,i||null);s!=null&&(t===null&&(t=Ce.empty()),t.set(r.field,s))}return t||null}function Zd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Cn(r,i,(s,a)=>yv(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var on=class extends Un{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},rt=class extends Un{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function qf(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function ef(n,e,t){let r=new Map;Q(n.length===t.length);for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,gv(a,c,t[i]))}return r}function tf(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,mv(s,a,e))}return r}var Jr=class extends Un{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},xs=class extends Un{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Ec=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&_v(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Gr(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Gr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=Of();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;let l=Bf(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&Cn(this.mutations,e.mutations,(t,r)=>Zd(t,r))&&Cn(this.baseMutations,e.baseMutations,(t,r)=>Zd(t,r))}},Tc=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Q(e.mutations.length===r.length);let i=function(){return lv}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var bc=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Ac=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var ce,H;function $f(n){switch(n){default:return M();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function jf(n){if(n===void 0)return ft("GRPC error has no .code"),P.UNKNOWN;switch(n){case ce.OK:return P.OK;case ce.CANCELLED:return P.CANCELLED;case ce.UNKNOWN:return P.UNKNOWN;case ce.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ce.INTERNAL:return P.INTERNAL;case ce.UNAVAILABLE:return P.UNAVAILABLE;case ce.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ce.NOT_FOUND:return P.NOT_FOUND;case ce.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ce.ABORTED:return P.ABORTED;case ce.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ce.DATA_LOSS:return P.DATA_LOSS;default:return M()}}(H=ce||(ce={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";var nf=null;function wv(){return new TextEncoder}var Iv=new Dt([4294967295,4294967295],0);function rf(n){let e=wv().encode(n),t=new $a;return t.update(e),new Uint8Array(t.digest())}function sf(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Dt([t,r],0),new Dt([i,s],0)]}var Sc=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Zt(`Invalid padding: ${t}`);if(r<0)throw new Zt(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zt(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Zt(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Dt.fromNumber(this.Te)}Ee(e,t,r){let i=e.add(t.multiply(Dt.fromNumber(r)));return i.compare(Iv)===1&&(i=new Dt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;let t=rf(e),[r,i]=sf(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;let t=rf(e),[r,i]=sf(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},Zt=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Os=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Yr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(U.min(),i,new oe(K),yt(),z())}},Yr=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,z(),z(),z())}};var Rn=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},Vs=class{constructor(e,t){this.targetId=e,this.me=t}},Ls=class{constructor(e,t,r=Ae.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},Ms=class{constructor(){this.fe=0,this.ge=of(),this.pe=Ae.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=z(),t=z(),r=z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Yr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=of()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},Rc=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=yt(),this.qe=Is(),this.Qe=Is(),this.Ke=new oe(K)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){let t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){let s=i.target;if(_c(s))if(r===0){let a=new F(s.path);this.We(t,a,Ue.newNoDocument(a,U.min()))}else Q(r===1);else{let a=this.Ze(t);if(a!==r){let c=this.Xe(e),l=c?this.et(c,e,a):1;if(l!==0){this.He(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}nf?.tt(function(p,_,T,R,N){var V,D,$,G,W,ee;let Se={localCacheCount:p,existenceFilterCount:_.count,databaseId:T.database,projectId:T.projectId},Y=_.unchangedNames;return Y&&(Se.bloomFilter={applied:N===0,hashCount:(V=Y?.hashCount)!==null&&V!==void 0?V:0,bitmapLength:(G=($=(D=Y?.bits)===null||D===void 0?void 0:D.bitmap)===null||$===void 0?void 0:$.length)!==null&&G!==void 0?G:0,padding:(ee=(W=Y?.bits)===null||W===void 0?void 0:W.padding)!==null&&ee!==void 0?ee:0,mightContain:w=>{var m;return(m=R?.mightContain(w))!==null&&m!==void 0&&m}}),Se}(a,e.me,this.Le.nt(),c,l))}}}}Xe(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,c;try{a=mt(r).toUint8Array()}catch(l){if(l instanceof Cs)return kn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Sc(a,i,s)}catch(l){return kn(l instanceof Zt?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.We(t,s,null),i++)}),i}it(e){let t=new Map;this.Be.forEach((s,a)=>{let c=this.Ye(a);if(c){if(s.current&&_c(c.target)){let l=new F(c.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,Ue.newNoDocument(l,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=z();this.Qe.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{let d=this.Ye(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));let i=new Os(e,t,this.Ke,this.ke,r);return this.ke=yt(),this.qe=Is(),this.Qe=Is(),this.Ke=new oe(K),i}Ue(e,t){if(!this.je(e))return;let r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;let i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Ms,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new me(K),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new me(K),this.qe=this.qe.insert(e,t)),t}je(e){let t=this.Ye(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Ms),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function Is(){return new oe(F.comparator)}function of(){return new oe(F.comparator)}var Ev={asc:"ASCENDING",desc:"DESCENDING"},Tv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bv={and:"AND",or:"OR"},Pc=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function kc(n,e){return n.useProto3Json||ui(e)?e:{value:e}}function Fs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Av(n,e){return Fs(n,e.toTimestamp())}function Me(n){return Q(!!n),U.fromTimestamp(function(t){let r=pt(t);return new ye(r.seconds,r.nanos)}(n))}function Mu(n,e){return Cc(n,e).canonicalString()}function Cc(n,e){let t=function(i){return new ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Gf(n){let e=ie.fromString(n);return Q(Yf(e)),e}function Us(n,e){return Mu(n.databaseId,e.path)}function Wr(n,e){let t=Gf(e);if(t.get(1)!==n.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(Kf(t))}function Wf(n,e){return Mu(n.databaseId,e)}function Sv(n){let e=Gf(n);return e.length===4?ie.emptyPath():Kf(e)}function Dc(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Kf(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function af(n,e,t){return{name:Us(n,e),fields:t.value.mapValue.fields}}function Rv(n,e){return"found"in e?function(r,i){Q(!!i.found),i.found.name,i.found.updateTime;let s=Wr(r,i.found.name),a=Me(i.found.updateTime),c=i.found.createTime?Me(i.found.createTime):U.min(),l=new Ce({mapValue:{fields:i.found.fields}});return Ue.newFoundDocument(s,a,c,l)}(n,e):"missing"in e?function(r,i){Q(!!i.missing),Q(!!i.readTime);let s=Wr(r,i.missing),a=Me(i.readTime);return Ue.newNoDocument(s,a)}(n,e):M()}function Pv(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string"),Ae.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ae.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){let p=d.code===void 0?P.UNKNOWN:jf(d.code);return new O(p,d.message||"")}(a);t=new Ls(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=Wr(n,r.document.name),s=Me(r.document.updateTime),a=r.document.createTime?Me(r.document.createTime):U.min(),c=new Ce({mapValue:{fields:r.document.fields}}),l=Ue.newFoundDocument(i,s,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Rn(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=Wr(n,r.document),s=r.readTime?Me(r.readTime):U.min(),a=Ue.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Rn([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=Wr(n,r.document),s=r.removedTargetIds||[];t=new Rn([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new Ac(i,s),c=r.targetId;t=new Vs(c,a)}}return t}function Hf(n,e){let t;if(e instanceof on)t={update:af(n,e.key,e.value)};else if(e instanceof Jr)t={delete:Us(n,e.key)};else if(e instanceof rt)t={update:af(n,e.key,e.data),updateMask:Mv(e.fieldMask)};else{if(!(e instanceof xs))return M();t={verify:Us(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let c=a.transform;if(c instanceof nn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof rn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof sn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Fn)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw M()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Av(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(n,e.precondition)),t}function kv(n,e){return n&&n.length>0?(Q(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Me(i.updateTime):Me(s);return a.isEqual(U.min())&&(a=Me(s)),new Ic(a,i.transformResults||[])}(t,e))):[]}function Cv(n,e){return{documents:[Wf(n,e.path)]}}function Dv(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Wf(n,i);let s=function(d){if(d.length!==0)return Jf(nt.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(d){if(d.length!==0)return d.map(p=>function(T){return{field:bn(T.field),direction:Ov(T.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let c=kc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:i}}function Nv(n){let e=Sv(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){Q(r===1);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(_){let T=Qf(_);return T instanceof nt&&Sf(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(T=>function(N){return new Vn(An(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(T))}(t.orderBy));let c=null;t.limit&&(c=function(_){let T;return T=typeof _=="object"?_.value:_,ui(T)?null:T}(t.limit));let l=null;t.startAt&&(l=function(_){let T=!!_.before,R=_.values||[];return new On(R,T)}(t.startAt));let d=null;return t.endAt&&(d=function(_){let T=!_.before,R=_.values||[];return new On(R,T)}(t.endAt)),iv(e,i,a,s,c,"F",l,d)}function xv(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Qf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=An(t.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=An(t.unaryFilter.field);return he.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=An(t.unaryFilter.field);return he.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=An(t.unaryFilter.field);return he.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(t){return he.create(An(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return nt.create(t.compositeFilter.filters.map(r=>Qf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(n):M()}function Ov(n){return Ev[n]}function Vv(n){return Tv[n]}function Lv(n){return bv[n]}function bn(n){return{fieldPath:n.canonicalString()}}function An(n){return Le.fromServerFormat(n.fieldPath)}function Jf(n){return n instanceof he?function(t){if(t.op==="=="){if(Kd(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NAN"}};if(Wd(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kd(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NAN"}};if(Wd(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(t.field),op:Vv(t.op),value:t.value}}}(n):n instanceof nt?function(t){let r=t.getFilters().map(i=>Jf(i));return r.length===1?r[0]:{compositeFilter:{op:Lv(t.op),filters:r}}}(n):M()}function Mv(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Yf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Xr=class n{constructor(e,t,r,i,s=U.min(),a=U.min(),c=Ae.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var Nc=class{constructor(e){this.ht=e}};function Fv(n){let e=Nv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vc(e,e.limit,"L"):e}var Bs=class{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(re(e.integerValue));else if("doubleValue"in e){let r=re(e.doubleValue);isNaN(r)?this.Rt(t,13):(this.Rt(t,15),Kr(r)?t.Vt(0):t.Vt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Rt(t,20),typeof r=="string"&&(r=pt(r)),t.ft(`${r.seconds||""}`),t.Vt(r.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(mt(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Rt(t,45),t.Vt(r.latitude||0),t.Vt(r.longitude||0)}else"mapValue"in e?Tf(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):Ef(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):M()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let r=e.fields||{};this.Rt(t,55);for(let i of Object.keys(r))this.gt(i,t),this.dt(r[i],t)}bt(e,t){var r,i;let s=e.fields||{};this.Rt(t,53);let a="value",c=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Rt(t,15),t.Vt(re(c)),this.gt(a,t),this.dt(s[a],t)}vt(e,t){let r=e.values||[];this.Rt(t,50);for(let i of r)this.dt(i,t)}St(e,t){this.Rt(t,37),F.fromName(e).path.forEach(r=>{this.Rt(t,60),this.Ct(r,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}};Bs.Ft=new Bs;var xc=class{constructor(){this.ln=new Oc}addToCollectionParentIndex(e,t){return this.ln.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(tn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(tn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}},Oc=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new me(ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new me(ie.comparator)).toArray()}};var fT=new Uint8Array(0);var cf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qe=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};qe.DEFAULT_COLLECTION_PERCENTILE=10,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qe.DEFAULT=new qe(41943040,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qe.DISABLED=new qe(-1,0,0);var Zr=class n{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new n(0)}static Qn(){return new n(-1)}};function uf([n,e],[t,r]){let i=K(n,t);return i===0?K(e,r):i}var Vc=class{constructor(e){this.Gn=e,this.buffer=new me(uf),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();uf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},Lc=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qn(t)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Hn(t)}await this.Yn(3e5)})}},Mc=class{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Dn.oe);let r=new Vc(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(cf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cf):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,s,a,c,l,d,p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),i=this.params.maximumSequenceNumbersToCollect):i=_,a=Date.now(),this.nthSequenceNumber(e,i))).next(_=>(r=_,c=Date.now(),this.removeTargets(e,r,t))).next(_=>(s=_,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(d=Date.now(),En()<=j.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${_} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:_})))}};function Uv(n,e){return new Mc(n,e)}var Fc=class{constructor(){this.changes=new gt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Uc=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var Bc=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Gr(r.mutation,i,$e.empty(),ye.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=z()){let i=Xt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=qr();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=Xt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,z()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=yt(),a=zr(),c=function(){return zr()}();return t.forEach((l,d)=>{let p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof rt)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Gr(p.mutation,d,p.mutation.getFieldMask(),ye.now())):a.set(d.key,$e.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var _;return c.set(d,new Uc(p,(_=a.get(d))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(e,t){let r=zr(),i=new oe((a,c)=>a-c),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let c of a)c.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let p=r.get(l)||$e.empty();p=c.applyToLocalView(d,p),r.set(l,p);let _=(i.get(c.batchId)||z()).add(l);i=i.insert(c.batchId,_)})}).next(()=>{let a=[],c=i.getReverseIterator();for(;c.hasNext();){let l=c.getNext(),d=l.key,p=l.value,_=Of();p.forEach(T=>{if(!s.has(T)){let R=Bf(t.get(T),r.get(T));R!==null&&_.set(T,R),s=s.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):k.resolve(Xt()),c=-1,l=s;return a.next(d=>k.forEach(d,(p,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),s.get(p)?k.resolve():this.remoteDocumentCache.getEntry(e,p).next(T=>{l=l.insert(p,T)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,z())).next(p=>({batchId:c,changes:xf(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(r=>{let i=qr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=qr();return this.indexManager.getCollectionParents(e,s).next(c=>k.forEach(c,l=>{let d=function(_,T){return new Ln(T,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((_,T)=>{a=a.insert(_,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{let p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ue.newInvalidDocument(p)))});let c=qr();return a.forEach((l,d)=>{let p=s.get(l);p!==void 0&&Gr(p.mutation,d,$e.empty(),ye.now()),co(t,d)&&(c=c.insert(l,d))}),c})}};var qc=class{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return k.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Me(i.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:Fv(i.bundledQuery),readTime:Me(i.readTime)}}(t)),k.resolve()}};var $c=class{constructor(){this.overlays=new oe(F.comparator),this.Er=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){let r=Xt();return k.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Tt(e,t,s)}),k.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){let i=Xt(),s=t.length+1,a=new F(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){let l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new oe((d,p)=>d-p),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Xt(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}let c=Xt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return k.resolve(c)}Tt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new bc(t,r));let s=this.Er.get(t);s===void 0&&(s=z(),this.Er.set(t,s)),this.Er.set(t,s.add(r.key))}};var jc=class{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}};var ei=class{constructor(){this.dr=new me(ue.Ar),this.Rr=new me(ue.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){let r=new ue(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new ue(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){let t=new F(new ie([])),r=new ue(t,e),i=new ue(t,e+1),s=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new F(new ie([])),r=new ue(t,e),i=new ue(t,e+1),s=z();return this.Rr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new ue(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},ue=class{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return F.comparator(e.key,t.key)||K(e.br,t.br)}static Vr(e,t){return K(e.br,t.br)||F.comparator(e.key,t.key)}};var zc=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new me(ue.Ar)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new Ec(s,t,r,i);this.mutationQueue.push(a);for(let c of i)this.vr=this.vr.add(new ue(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Fr(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new ue(t,0),i=new ue(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],a=>{let c=this.Cr(a.br);s.push(c)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new me(K);return t.forEach(i=>{let s=new ue(i,0),a=new ue(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],c=>{r=r.add(c.br)})}),k.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;F.isDocumentKey(s)||(s=s.child(""));let a=new ue(new F(s),0),c=new me(K);return this.vr.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.br)),!0)},a),k.resolve(this.Mr(c))}Mr(e){let t=[];return e.forEach(r=>{let i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Q(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return k.forEach(t.mutations,i=>{let s=new ue(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){let r=new ue(t,0),i=this.vr.firstAfterOrEqual(r);return k.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Gc=class{constructor(e){this.Nr=e,this.docs=function(){return new oe(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(t))}getEntries(e,t){let r=yt();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ue.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=yt(),a=t.path,c=new F(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){let{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||G_(z_(p),r)<=0||(i.has(p.key)||co(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,t,r,i){M()}Lr(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Wc(this)}getSize(e){return k.resolve(this.size)}},Wc=class extends Fc{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}};var Kc=class{constructor(e){this.persistence=e,this.Br=new gt(t=>Ou(t),Vu),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.kr=0,this.qr=new ei,this.targetCount=0,this.Qr=Zr.qn()}forEachTarget(e,t){return this.Br.forEach((r,i)=>t(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),k.resolve()}Un(e){this.Br.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new Zr(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Un(t),k.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){let r=this.Br.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),k.resolve()}getMatchingKeysForTargetId(e,t){let r=this.qr.Sr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.qr.containsKey(t))}};var qs=class{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Dn(0),this.Ur=!1,this.Ur=!0,this.Wr=new jc,this.referenceDelegate=e(this),this.Gr=new Kc(this),this.indexManager=new xc,this.remoteDocumentCache=function(i){return new Gc(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Nc(t),this.jr=new qc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $c,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new zc(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);let i=new Hc(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return k.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}},Hc=class extends sc{constructor(e){super(),this.currentSequenceNumber=e}},Qc=class n{constructor(e){this.persistence=e,this.Zr=new ei,this.Xr=null}static ei(e){return new n(e)}get ti(){if(this.Xr)return this.Xr;throw M()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),k.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.ti,r=>{let i=F.fromPath(r);return this.ni(e,i).next(s=>{s||t.removeEntry(i,U.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return k.or([()=>k.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}},$s=class n{constructor(e,t){this.persistence=e,this.ri=new gt(r=>Q_(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Uv(this,t)}static ei(e,t){return new n(e,t)}Hr(){}Jr(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return k.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?k.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(c=>{c||(r++,s.removeEntry(a,U.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),k.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ts(e.data.value)),t}ir(e,t,r){return k.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.ri.get(t);return k.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var Jc=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=z(),i=z();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var Yc=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Xc=class{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Eh()?8:K_(fe())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new Yc;return this.ts(e,t,a).next(c=>{if(s.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>s.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(En()<=j.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Tn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),k.resolve()):(En()<=j.DEBUG&&x("QueryEngine","Query:",Tn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(En()<=j.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Tn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,et(t))):k.resolve())}Xi(e,t){if(Yd(t))return k.resolve(null);let r=et(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=vc(t,null,"F"),r=et(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=z(...s);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.rs(t,c);return this.ss(t,d,a,l.readTime)?this.Xi(e,vc(t,null,"F")):this.os(e,d,t,l)}))})))}es(e,t,r,i){return Yd(t)||i.isEqual(U.min())?k.resolve(null):this.Zi.getDocuments(e,r).next(s=>{let a=this.rs(t,s);return this.ss(t,a,r,i)?k.resolve(null):(En()<=j.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tn(t)),this.os(e,a,t,j_(i,-1)).next(c=>c))})}rs(e,t){let r=new me(Df(e));return t.forEach((i,s)=>{co(e,s)&&(r=r.add(s))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,r){return En()<=j.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Tn(t)),this.Zi.getDocumentsMatchingQuery(e,t,tn.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var Zc=class{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new oe(K),this.cs=new gt(s=>Ou(s),Vu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bc(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}};function Bv(n,e,t,r){return new Zc(n,e,t,r)}async function Xf(n,e){let t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],c=[],l=z();for(let d of i){a.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}for(let d of s){c.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:c}))})})}function qv(n,e){let t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,p){let _=d.batch,T=_.keys(),R=k.resolve();return T.forEach(N=>{R=R.next(()=>p.getEntry(l,N)).next(V=>{let D=d.docVersions.get(N);Q(D!==null),V.version.compareTo(D)<0&&(_.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),p.addEntry(V)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,_))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=z();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Zf(n){let e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function $v(n,e){let t=B(n),r=e.snapshotVersion,i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;let c=[];e.targetChanges.forEach((p,_)=>{let T=i.get(_);if(!T)return;c.push(t.Gr.removeMatchingKeys(s,p.removedDocuments,_).next(()=>t.Gr.addMatchingKeys(s,p.addedDocuments,_)));let R=T.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(_)!==null?R=R.withResumeToken(Ae.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),i=i.insert(_,R),function(V,D,$){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(T,R,p)&&c.push(t.Gr.updateTargetData(s,R))});let l=yt(),d=z();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(jv(s,a,e.documentUpdates).next(p=>{l=p.Is,d=p.Es})),!r.isEqual(U.min())){let p=t.Gr.getLastRemoteSnapshotVersion(s).next(_=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return k.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.us=i,s))}function jv(n,e,t){let r=z(),i=z();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=yt();return t.forEach((c,l)=>{let d=s.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Is:a,Es:i}})}function zv(n,e){let t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Gv(n,e){let t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):t.Gr.allocateTargetId(r).next(a=>(i=new Xr(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function eu(n,e,t){let r=B(n),i=r.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Qn(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function lf(n,e,t){let r=B(n),i=U.min(),s=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){let _=B(l),T=_.cs.get(p);return T!==void 0?k.resolve(_.us.get(T)):_.Gr.getTargetData(d,p)}(r,a,et(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?s:z())).next(c=>(Wv(r,av(e),c),{documents:c,ds:s})))}function Wv(n,e,t){let r=n.ls.get(e)||U.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ls.set(e,r)}var js=class{constructor(){this.activeTargetIds=fv()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var tu=class{constructor(){this._o=new js,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new js,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var nu=class{uo(e){}shutdown(){}};var zs=class{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.To)e(0)}Po(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Es=null;function Ha(){return Es===null?Es=function(){return 268435456+Math.round(2147483648*Math.random())}():Es++,"0x"+Es.toString(16)}var Kv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var ru=class{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}};var Te="WebChannelConnection",iu=class extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,r,i,s,a){let c=Ha(),l=this.No(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);let d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,s,a),this.Bo(t,l,d,i).then(p=>(x("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw kn("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",l,"request:",i),p})}ko(t,r,i,s,a,c){return this.Oo(t,r,i,s,a)}Lo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,r){let i=Kv[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,i){let s=Ha();return new Promise((a,c)=>{let l=new ja;l.setWithCredentials(!0),l.listenOnce(za.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ur.NO_ERROR:let p=l.getResponseJson();x(Te,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case Ur.TIMEOUT:x(Te,`RPC '${e}' ${s} timed out`),c(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ur.HTTP_ERROR:let _=l.getStatus();if(x(Te,`RPC '${e}' ${s} failed with status:`,_,"response text:",l.getResponseText()),_>0){let T=l.getResponseJson();Array.isArray(T)&&(T=T[0]);let R=T?.error;if(R&&R.status&&R.message){let N=function(D){let $=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN}(R.status);c(new O(N,R.message))}else c(new O(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new O(P.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{x(Te,`RPC '${e}' ${s} completed.`)}});let d=JSON.stringify(i);x(Te,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",d,r,15)})}qo(e,t,r){let i=Ha(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ka(),c=Wa(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let p=s.join("");x(Te,`Creating RPC '${e}' stream ${i}: ${p}`,l);let _=a.createWebChannel(p,l),T=!1,R=!1,N=new ru({Eo:D=>{R?x(Te,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(T||(x(Te,`Opening RPC '${e}' stream ${i} transport.`),_.open(),T=!0),x(Te,`RPC '${e}' stream ${i} sending:`,D),_.send(D))},Ao:()=>_.close()}),V=(D,$,G)=>{D.listen($,W=>{try{G(W)}catch(ee){setTimeout(()=>{throw ee},0)}})};return V(_,In.EventType.OPEN,()=>{R||(x(Te,`RPC '${e}' stream ${i} transport opened.`),N.So())}),V(_,In.EventType.CLOSE,()=>{R||(R=!0,x(Te,`RPC '${e}' stream ${i} transport closed`),N.Do())}),V(_,In.EventType.ERROR,D=>{R||(R=!0,kn(Te,`RPC '${e}' stream ${i} transport errored:`,D),N.Do(new O(P.UNAVAILABLE,"The operation could not be completed")))}),V(_,In.EventType.MESSAGE,D=>{var $;if(!R){let G=D.data[0];Q(!!G);let W=G,ee=W?.error||(($=W[0])===null||$===void 0?void 0:$.error);if(ee){x(Te,`RPC '${e}' stream ${i} received error:`,ee);let Se=ee.status,Y=function(y){let v=ce[y];if(v!==void 0)return jf(v)}(Se),w=ee.message;Y===void 0&&(Y=P.INTERNAL,w="Unknown error status: "+Se+" with message "+ee.message),R=!0,N.Do(new O(Y,w)),_.close()}else x(Te,`RPC '${e}' stream ${i} received:`,G),N.vo(G)}}),V(c,Ga.STAT_EVENT,D=>{D.stat===vs.PROXY?x(Te,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===vs.NOPROXY&&x(Te,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.bo()},0),N}};function Qa(){return typeof document<"u"?document:null}function uo(n){return new Pc(n,!0)}var ti=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}};var Gs=class{constructor(e,t,r,i,s,a,c,l){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new ti(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(ft(t.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{let i=new O(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,t){let r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},su=class extends Gs{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=Pv(this.serializer,e),r=function(s){if(!("targetChange"in s))return U.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Me(a.readTime):U.min()}(e);return this.listener.R_(t,r)}V_(e){let t={};t.database=Dc(this.serializer),t.addTarget=function(s,a){let c,l=a.target;if(c=_c(l)?{documents:Cv(s,l)}:{query:Dv(s,l).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=zf(s,a.resumeToken);let d=kc(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=Fs(s,a.snapshotVersion.toTimestamp());let d=kc(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);let r=xv(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){let t={};t.database=Dc(this.serializer),t.removeTarget=e,this.c_(t)}},ou=class extends Gs{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();let t=kv(e.writeResults,e.commitTime),r=Me(e.commitTime);return this.listener.y_(r,t)}w_(){let e={};e.database=Dc(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Hf(this.serializer,r))};this.c_(t)}};var au=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,Cc(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(P.UNKNOWN,s.toString())})}ko(e,t,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Cc(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(P.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}},cu=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ft(t),this.C_=!1):x("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}};var uu=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{cn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(l){let d=B(l);d.k_.add(4),await li(d),d.K_.set("Unknown"),d.k_.delete(4),await lo(d)}(this))})}),this.K_=new cu(r,i)}};async function lo(n){if(cn(n))for(let e of n.q_)await e(!0)}async function li(n){for(let e of n.q_)await e(!1)}function ep(n,e){let t=B(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),qu(t)?Bu(t):Jn(t).s_()&&Uu(t,e))}function Fu(n,e){let t=B(n),r=Jn(t);t.B_.delete(e),r.s_()&&tp(t,e),t.B_.size===0&&(r.s_()?r.a_():cn(t)&&t.K_.set("Unknown"))}function Uu(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jn(n).V_(e)}function tp(n,e){n.U_.xe(e),Jn(n).m_(e)}function Bu(n){n.U_=new Rc({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Jn(n).start(),n.K_.F_()}function qu(n){return cn(n)&&!Jn(n).i_()&&n.B_.size>0}function cn(n){return B(n).k_.size===0}function np(n){n.U_=void 0}async function Hv(n){n.K_.set("Online")}async function Qv(n){n.B_.forEach((e,t)=>{Uu(n,e)})}async function Jv(n,e){np(n),qu(n)?(n.K_.O_(e),Bu(n)):n.K_.set("Unknown")}async function Yv(n,e,t){if(n.K_.set("Online"),e instanceof Ls&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let c of s.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.B_.delete(c),i.U_.removeTarget(c))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ws(n,r)}else if(e instanceof Rn?n.U_.$e(e):e instanceof Vs?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(U.min()))try{let r=await Zf(n.localStore);t.compareTo(r)>=0&&await function(s,a){let c=s.U_.it(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let p=s.B_.get(d);p&&s.B_.set(d,p.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{let p=s.B_.get(l);if(!p)return;s.B_.set(l,p.withResumeToken(Ae.EMPTY_BYTE_STRING,p.snapshotVersion)),tp(s,l);let _=new Xr(p.target,l,d,p.sequenceNumber);Uu(s,_)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Ws(n,r)}}async function Ws(n,e,t){if(!Qn(e))throw e;n.k_.add(1),await li(n),n.K_.set("Offline"),t||(t=()=>Zf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await lo(n)})}function rp(n,e){return e().catch(t=>Ws(n,t,e))}async function ho(n){let e=B(n),t=Vt(e),r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Xv(e);)try{let i=await zv(e.localStore,r);if(i===null){e.L_.length===0&&t.a_();break}r=i.batchId,Zv(e,i)}catch(i){await Ws(e,i)}ip(e)&&sp(e)}function Xv(n){return cn(n)&&n.L_.length<10}function Zv(n,e){n.L_.push(e);let t=Vt(n);t.s_()&&t.f_&&t.g_(e.mutations)}function ip(n){return cn(n)&&!Vt(n).i_()&&n.L_.length>0}function sp(n){Vt(n).start()}async function ew(n){Vt(n).w_()}async function tw(n){let e=Vt(n);for(let t of n.L_)e.g_(t.mutations)}async function nw(n,e,t){let r=n.L_.shift(),i=Tc.from(r,e,t);await rp(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ho(n)}async function rw(n,e){e&&Vt(n).f_&&await async function(r,i){if(function(a){return $f(a)&&a!==P.ABORTED}(i.code)){let s=r.L_.shift();Vt(r).__(),await rp(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ho(r)}}(n,e),ip(n)&&sp(n)}async function hf(n,e){let t=B(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");let r=cn(t);t.k_.add(3),await li(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await lo(t)}async function iw(n,e){let t=B(n);e?(t.k_.delete(2),await lo(t)):e||(t.k_.add(2),await li(t),t.K_.set("Unknown"))}function Jn(n){return n.W_||(n.W_=function(t,r,i){let s=B(t);return s.b_(),new su(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:Hv.bind(null,n),mo:Qv.bind(null,n),po:Jv.bind(null,n),R_:Yv.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),qu(n)?Bu(n):n.K_.set("Unknown")):(await n.W_.stop(),np(n))})),n.W_}function Vt(n){return n.G_||(n.G_=function(t,r,i){let s=B(t);return s.b_(),new ou(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:ew.bind(null,n),po:rw.bind(null,n),p_:tw.bind(null,n),y_:nw.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await ho(n)):(await n.G_.stop(),n.L_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}var lu=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,c=new n(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function $u(n,e){if(ft("AsyncQueue",`${e}: ${n}`),Qn(n))return new O(P.UNAVAILABLE,`${e}: ${n}`);throw n}var Ks=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=qr(),this.sortedSet=new oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var Hs=class{constructor(){this.z_=new oe(F.comparator)}track(e){let t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):M():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}},Bn=class n{constructor(e,t,r,i,s,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new n(e,t,Ks.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ao(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var hu=class{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}},du=class{constructor(){this.queries=df(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){let i=B(t),s=i.queries;i.queries=df(),s.forEach((a,c)=>{for(let l of c.J_)l.onError(r)})})(this,new O(P.ABORTED,"Firestore shutting down"))}};function df(){return new gt(n=>Cf(n),ao)}async function ju(n,e){let t=B(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new hu,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let c=$u(a,`Initialization of query '${Tn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&Gu(t)}async function zu(n,e){let t=B(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function sw(n,e){let t=B(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let c of a.J_)c.ta(i)&&(r=!0);a.H_=i}}r&&Gu(t)}function ow(n,e,t){let r=B(n),i=r.queries.get(e);if(i)for(let s of i.J_)s.onError(t);r.queries.delete(e)}function Gu(n){n.X_.forEach(e=>{e.next()})}var fu,ff;(ff=fu||(fu={})).na="default",ff.Cache="cache";var ni=class{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Bn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;let r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==fu.Cache}};var Qs=class{constructor(e){this.key=e}},Js=class{constructor(e){this.key=e}},pu=class{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=z(),this.mutatedKeys=z(),this.Va=Df(e),this.ma=new Ks(this.Va)}get fa(){return this.da}ga(e,t){let r=t?t.pa:new Hs,i=t?t.ma:this.ma,s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,_)=>{let T=i.get(p),R=co(this.query,_)?_:null,N=!!T&&this.mutatedKeys.has(T.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations),D=!1;T&&R?T.data.isEqual(R.data)?N!==V&&(r.track({type:3,doc:R}),D=!0):this.ya(T,R)||(r.track({type:2,doc:R}),D=!0,(l&&this.Va(R,l)>0||d&&this.Va(R,d)<0)&&(c=!0)):!T&&R?(r.track({type:0,doc:R}),D=!0):T&&!R&&(r.track({type:1,doc:T}),D=!0,(l||d)&&(c=!0)),D&&(R?(a=a.add(R),s=V?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{ma:a,pa:r,ss:c,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let a=e.pa.j_();a.sort((p,_)=>function(R,N){let V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return V(R)-V(N)}(p.type,_.type)||this.Va(p.doc,_.doc)),this.wa(r),i=i!=null&&i;let c=t&&!i?this.Sa():[],l=this.Ra.size===0&&this.current&&!i?1:0,d=l!==this.Aa;return this.Aa=l,a.length!==0||d?{snapshot:new Bn(this.query,e.ma,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Hs,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=z(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});let t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new Js(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Qs(r))}),t}va(e){this.da=e.ds,this.Ra=z();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Bn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}},mu=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},gu=class{constructor(e){this.key=e,this.Fa=!1}},yu=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new gt(c=>Cf(c),ao),this.Oa=new Map,this.Na=new Set,this.La=new oe(F.comparator),this.Ba=new Map,this.ka=new ei,this.qa={},this.Qa=new Map,this.Ka=Zr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}};async function aw(n,e,t=!0){let r=hp(n),i,s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await op(r,e,t,!0),i}async function cw(n,e){let t=hp(n);await op(t,e,!0,!1)}async function op(n,e,t,r){let i=await Gv(n.localStore,et(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t),c;return r&&(c=await uw(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&ep(n.remoteStore,i),c}async function uw(n,e,t,r,i){n.Ua=(_,T,R)=>async function(V,D,$,G){let W=D.view.ga($);W.ss&&(W=await lf(V.localStore,D.query,!1).then(({documents:w})=>D.view.ga(w,W)));let ee=G&&G.targetChanges.get(D.targetId),Se=G&&G.targetMismatches.get(D.targetId)!=null,Y=D.view.applyChanges(W,V.isPrimaryClient,ee,Se);return mf(V,D.targetId,Y.ba),Y.snapshot}(n,_,T,R);let s=await lf(n.localStore,e,!0),a=new pu(e,s.ds),c=a.ga(s.documents),l=Yr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,l);mf(n,t,d.ba);let p=new mu(e,t,a);return n.xa.set(e,p),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),d.snapshot}async function lw(n,e,t){let r=B(n),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(a=>!ao(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await eu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Fu(r.remoteStore,i.targetId),_u(r,i.targetId)}).catch(Hn)):(_u(r,i.targetId),await eu(r.localStore,i.targetId,!0))}async function hw(n,e){let t=B(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Fu(t.remoteStore,r.targetId))}async function dw(n,e,t){let r=vw(n);try{let i=await function(a,c){let l=B(a),d=ye.now(),p=c.reduce((R,N)=>R.add(N.key),z()),_,T;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let N=yt(),V=z();return l.hs.getEntries(R,p).next(D=>{N=D,N.forEach(($,G)=>{G.isValidDocument()||(V=V.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,N)).next(D=>{_=D;let $=[];for(let G of c){let W=vv(G,_.get(G.key).overlayedDocument);W!=null&&$.push(new rt(G.key,W,bf(W.value.mapValue),Ve.exists(!0)))}return l.mutationQueue.addMutationBatch(R,d,$,c)}).next(D=>{T=D;let $=D.applyToLocalDocumentSet(_,V);return l.documentOverlayCache.saveOverlays(R,D.batchId,$)})}).then(()=>({batchId:T.batchId,changes:xf(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let d=a.qa[a.currentUser.toKey()];d||(d=new oe(K)),d=d.insert(c,l),a.qa[a.currentUser.toKey()]=d}(r,i.batchId,t),await hi(r,i.changes),await ho(r.remoteStore)}catch(i){let s=$u(i,"Failed to persist write");t.reject(s)}}async function ap(n,e){let t=B(n);try{let r=await $v(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Ba.get(s);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?Q(a.Fa):i.removedDocuments.size>0&&(Q(a.Fa),a.Fa=!1))}),await hi(t,r,e)}catch(r){await Hn(r)}}function pf(n,e,t){let r=B(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.xa.forEach((s,a)=>{let c=a.view.ea(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){let l=B(a);l.onlineState=c;let d=!1;l.queries.forEach((p,_)=>{for(let T of _.J_)T.ea(c)&&(d=!0)}),d&&Gu(l)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fw(n,e,t){let r=B(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Ba.get(e),s=i&&i.key;if(s){let a=new oe(F.comparator);a=a.insert(s,Ue.newNoDocument(s,U.min()));let c=z().add(s),l=new Os(U.min(),new Map,new oe(K),a,c);await ap(r,l),r.La=r.La.remove(s),r.Ba.delete(e),Wu(r)}else await eu(r.localStore,e,!1).then(()=>_u(r,e,t)).catch(Hn)}async function pw(n,e){let t=B(n),r=e.batch.batchId;try{let i=await qv(t.localStore,e);up(t,r,null),cp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await hi(t,i)}catch(i){await Hn(i)}}async function mw(n,e,t){let r=B(n);try{let i=await function(a,c){let l=B(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,c).next(_=>(Q(_!==null),p=_.keys(),l.mutationQueue.removeMutationBatch(d,_))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);up(r,e,t),cp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await hi(r,i)}catch(i){await Hn(i)}}function cp(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function up(n,e,t){let r=B(n),i=r.qa[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function _u(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||lp(n,r)})}function lp(n,e){n.Na.delete(e.path.canonicalString());let t=n.La.get(e);t!==null&&(Fu(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Wu(n))}function mf(n,e,t){for(let r of t)r instanceof Qs?(n.ka.addReference(r.key,e),gw(n,r)):r instanceof Js?(x("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||lp(n,r.key)):M()}function gw(n,e){let t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(x("SyncEngine","New document in limbo: "+t),n.Na.add(r),Wu(n))}function Wu(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){let e=n.Na.values().next().value;n.Na.delete(e);let t=new F(ie.fromString(e)),r=n.Ka.next();n.Ba.set(r,new gu(t)),n.La=n.La.insert(t,r),ep(n.remoteStore,new Xr(et(oo(t.path)),r,"TargetPurposeLimboResolution",Dn.oe))}}async function hi(n,e,t){let r=B(n),i=[],s=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{a.push(r.Ua(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){let _=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,_?"current":"not-current")}if(d){i.push(d);let _=Jc.zi(l.targetId,d);s.push(_)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(l,d){let p=B(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>k.forEach(d,T=>k.forEach(T.Wi,R=>p.persistence.referenceDelegate.addReference(_,T.targetId,R)).next(()=>k.forEach(T.Gi,R=>p.persistence.referenceDelegate.removeReference(_,T.targetId,R)))))}catch(_){if(!Qn(_))throw _;x("LocalStore","Failed to update sequence numbers: "+_)}for(let _ of d){let T=_.targetId;if(!_.fromCache){let R=p.us.get(T),N=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(N);p.us=p.us.insert(T,V)}}}(r.localStore,s))}async function yw(n,e){let t=B(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());let r=await Xf(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(c=>{c.forEach(l=>{l.reject(new O(P.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hi(t,r.Ts)}}function _w(n,e){let t=B(n),r=t.Ba.get(e);if(r&&r.Fa)return z().add(r.key);{let i=z(),s=t.Oa.get(e);if(!s)return i;for(let a of s){let c=t.xa.get(a);i=i.unionWith(c.view.fa)}return i}}function hp(n){let e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ap.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_w.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fw.bind(null,e),e.Ma.R_=sw.bind(null,e.eventManager),e.Ma.Wa=ow.bind(null,e.eventManager),e}function vw(n){let e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mw.bind(null,e),e}var qn=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uo(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Bv(this.persistence,new Xc,e.initialUser,this.serializer)}ja(e){return new qs(Qc.ei,this.serializer)}za(e){return new tu}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};qn.provider={build:()=>new qn};var vu=class extends qn{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Q(this.persistence.referenceDelegate instanceof $s);let r=this.persistence.referenceDelegate.garbageCollector;return new Lc(r,e.asyncQueue,t)}ja(e){let t=this.cacheSizeBytes!==void 0?qe.withCacheSize(this.cacheSizeBytes):qe.DEFAULT;return new qs(r=>$s.ei(r,t),this.serializer)}};var ri=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yw.bind(null,this.syncEngine),await iw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new du}()}createDatastore(e){let t=uo(e.databaseInfo.databaseId),r=function(s){return new iu(s)}(e.databaseInfo);return function(s,a,c,l){return new au(s,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new uu(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>pf(this.syncEngine,t,0),function(){return zs.p()?new zs:new nu}())}createSyncEngine(e,t){return function(i,s,a,c,l,d,p){let _=new yu(i,s,a,c,l,d);return p&&(_.$a=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=B(i);x("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await li(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};ri.provider={build:()=>new ri};var ii=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):ft("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var wu=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new O(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(i,s){let a=B(i),c={documents:s.map(_=>Us(a.serializer,_))},l=await a.ko("BatchGetDocuments",a.serializer.databaseId,ie.emptyPath(),c,s.length),d=new Map;l.forEach(_=>{let T=Rv(a.serializer,_);d.set(T.key.toString(),T)});let p=[];return s.forEach(_=>{let T=d.get(_.toString());Q(!!T),p.push(T)}),p}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Jr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{let i=F.fromPath(r);this.mutations.push(new xs(i,this.precondition(i)))}),await async function(r,i){let s=B(r),a={writes:i.map(c=>Hf(s.serializer,c))};await s.Oo("Commit",s.serializer.databaseId,ie.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw M();t=U.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new O(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(U.min())?Ve.exists(!1):Ve.updateTime(t):Ve.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(U.min()))throw new O(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ve.updateTime(t)}return Ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};var Iu=class{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.uu=r.maxAttempts,this.r_=new ti(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{let e=new wu(this.datastore),t=this.hu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Pu(i)}))}).catch(r=>{this.Pu(r)})})}hu(e){try{let t=this.updateFunction(e);return!ui(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pu(e){this.uu>0&&this.Tu(e)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(e)}Tu(e){if(e.name==="FirebaseError"){let t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!$f(t)}return!1}};var Eu=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=pe.UNAUTHENTICATED,this.clientId=Rs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{x("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=$u(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Ja(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Xf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function gf(n,e){n.asyncQueue.verifyOperationInProgress();let t=await ww(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>hf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>hf(e.remoteStore,i)),n._onlineComponents=e}async function ww(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ja(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;kn("Error using user provided cache. Falling back to memory cache: "+t),await Ja(n,new qn)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Ja(n,new vu(void 0));return n._offlineComponents}async function Ku(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await gf(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await gf(n,new ri))),n._onlineComponents}function Iw(n){return Ku(n).then(e=>e.syncEngine)}function Ew(n){return Ku(n).then(e=>e.datastore)}async function Ys(n){let e=await Ku(n),t=e.eventManager;return t.onListen=aw.bind(null,e.syncEngine),t.onUnlisten=lw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=hw.bind(null,e.syncEngine),t}function Tw(n,e,t={}){let r=new je;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){let p=new ii({next:T=>{p.eu(),a.enqueueAndForget(()=>zu(s,_));let R=T.docs.has(c);!R&&T.fromCache?d.reject(new O(P.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&l&&l.source==="server"?d.reject(new O(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),_=new ni(oo(c.path),p,{includeMetadataChanges:!0,ua:!0});return ju(s,_)}(await Ys(n),n.asyncQueue,e,t,r)),r.promise}function bw(n,e,t={}){let r=new je;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){let p=new ii({next:T=>{p.eu(),a.enqueueAndForget(()=>zu(s,_)),T.fromCache&&l.source==="server"?d.reject(new O(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),_=new ni(c,p,{includeMetadataChanges:!0,ua:!0});return ju(s,_)}(await Ys(n),n.asyncQueue,e,t,r)),r.promise}function dp(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var yf=new Map;function fp(n,e,t){if(!t)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Aw(n,e,t,r){if(e===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _f(n){if(!F.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function vf(n){if(F.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M()}function Fe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Hu(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var Xs=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Aw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},$n=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xs({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xs(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ya;switch(r.type){case"firstParty":return new tc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=yf.get(t);r&&(x("ComponentProvider","Removing Datastore"),yf.delete(t),r.terminate())}(this),Promise.resolve()}};function Sw(n,e,t,r={}){var i;let s=(n=Fe(n,$n))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=pe.MOCK_USER;else{c=gh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new pe(d)}n._authCredentials=new Xa(new Ss(c,l))}}var si=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},be=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},xt=class n extends si{constructor(e,t,r){super(e,t,oo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new F(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function pp(n,e,...t){if(n=ae(n),fp("collection","path",e),n instanceof $n){let r=ie.fromString(e,...t);return vf(r),new xt(n,null,r)}{if(!(n instanceof be||n instanceof xt))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ie.fromString(e,...t));return vf(r),new xt(n.firestore,null,r)}}function Qu(n,e,...t){if(n=ae(n),arguments.length===1&&(e=Rs.newId()),fp("doc","path",e),n instanceof $n){let r=ie.fromString(e,...t);return _f(r),new be(n,null,new F(r))}{if(!(n instanceof be||n instanceof xt))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ie.fromString(e,...t));return _f(r),new be(n.firestore,n instanceof xt?n.converter:null,new F(r))}}var Zs=class{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new ti(this,"async_queue_retry"),this.fu=()=>{let r=Qa();r&&x("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;let t=Qa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;let t=Qa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});let t=new je;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Qn(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;let i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw ft("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let i=lu.createAndSchedule(this,e,t,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&M()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.du.indexOf(e);this.du.splice(t,1)}};function wf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var it=class extends $n{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Zs,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Zs(e),this._firestoreClient=void 0,await e}}};function mp(n,e){let t=typeof n=="object"?n:Fi(),r=typeof n=="string"?n:e||"(default)",i=Er(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=mh("firestore");s&&Sw(i,...s)}return i}function di(n){if(n._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Rw(n),n._firestoreClient}function Rw(n){var e,t,r;let i=n._freezeSettings(),s=function(c,l,d,p){return new oc(c,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,dp(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Eu(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){let l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}var jn=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(Ae.fromBase64String(e))}catch(t){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var an=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var zn=class{constructor(e){this._methodName=e}};var oi=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}};var ai=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}};var Pw=/^__.*__$/,Tu=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new rt(e,this.data,this.fieldMask,t,this.fieldTransforms):new on(e,this.data,t,this.fieldTransforms)}},eo=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new rt(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function gp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}var bu=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return no(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(gp(this.Mu)&&Pw.test(e))throw this.qu('Document fields cannot begin and end with "__"')}},Au=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||uo(e)}$u(e,t,r,i=!1){return new bu({Mu:e,methodName:t,Ku:r,path:Le.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Ju(n){let e=n._freezeSettings(),t=uo(n._databaseId);return new Au(n._databaseId,!!e.ignoreUndefinedProperties,t)}function yp(n,e,t,r,i,s={}){let a=n.$u(s.merge||s.mergeFields?2:0,e,t,i);Yu("Data must be an object, but it was:",a,r);let c=wp(r,a),l,d;if(s.merge)l=new $e(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){let p=[];for(let _ of s.mergeFields){let T=Ru(e,_,t);if(!a.contains(T))throw new O(P.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Ep(p,T)||p.push(T)}l=new $e(p),d=a.fieldTransforms.filter(_=>l.covers(_.field))}else l=null,d=a.fieldTransforms;return new Tu(new Ce(c),l,d)}var to=class n extends zn{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};var Su=class n extends zn{_toFieldTransform(e){return new wc(e.path,new nn)}isEqual(e){return e instanceof n}};function _p(n,e,t,r){let i=n.$u(1,e,t);Yu("Data must be an object, but it was:",i,r);let s=[],a=Ce.empty();Lt(r,(l,d)=>{let p=Xu(e,l,t);d=ae(d);let _=i.Bu(p);if(d instanceof to)s.push(p);else{let T=fo(d,_);T!=null&&(s.push(p),a.set(p,T))}});let c=new $e(s);return new eo(a,c,i.fieldTransforms)}function vp(n,e,t,r,i,s){let a=n.$u(1,e,t),c=[Ru(e,r,t)],l=[i];if(s.length%2!=0)throw new O(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<s.length;T+=2)c.push(Ru(e,s[T])),l.push(s[T+1]);let d=[],p=Ce.empty();for(let T=c.length-1;T>=0;--T)if(!Ep(d,c[T])){let R=c[T],N=l[T];N=ae(N);let V=a.Bu(R);if(N instanceof to)d.push(R);else{let D=fo(N,V);D!=null&&(d.push(R),p.set(R,D))}}let _=new $e(d);return new eo(p,_,a.fieldTransforms)}function fo(n,e){if(Ip(n=ae(n)))return Yu("Unsupported field value:",e,n),wp(n,e);if(n instanceof zn)return function(r,i){if(!gp(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let c of r){let l=fo(c,i.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=ye.fromDate(r);return{timestampValue:Fs(i.serializer,s)}}if(r instanceof ye){let s=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fs(i.serializer,s)}}if(r instanceof oi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jn)return{bytesValue:zf(i.serializer,r._byteString)};if(r instanceof be){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ai)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return Lu(c.serializer,l)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${Hu(r)}`)}(n,e)}function wp(n,e){let t={};return If(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lt(n,(r,i)=>{let s=fo(i,e.Ou(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Ip(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof oi||n instanceof jn||n instanceof be||n instanceof zn||n instanceof ai)}function Yu(n,e,t){if(!Ip(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=Hu(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Ru(n,e,t){if((e=ae(e))instanceof an)return e._internalPath;if(typeof e=="string")return Xu(n,e);throw no("Field path arguments must be of type string or ",n,!1,void 0,t)}var kw=new RegExp("[~\\*/\\[\\]]");function Xu(n,e,t){if(e.search(kw)>=0)throw no(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new an(...e.split("."))._internalPath}catch{throw no(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function no(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new O(P.INVALID_ARGUMENT,c+n+l)}function Ep(n,e){return n.some(t=>t.isEqual(e))}var Gn=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Pu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(Tp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Pu=class extends Gn{data(){return super.data()}};function Tp(n,e){return typeof e=="string"?Xu(n,e):e instanceof an?e._internalPath:e._delegate._internalPath}function bp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var ro=class{convertValue(e,t="none"){switch(Ot(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Lt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>re(a.doubleValue));return new ai(s)}convertGeoPoint(e){return new oi(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=so(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Hr(e));default:return null}}convertTimestamp(e){let t=pt(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=ie.fromString(e);Q(Yf(r));let i=new Ds(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(t)||ft(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function Ap(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var ku=class extends ro{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}};var Nt=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},ci=class extends Gn{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new Pn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(Tp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Pn=class extends ci{data(e={}){return super.data(e)}},io=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Nt(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Pn(this._firestore,this._userDataWriter,r.key,r,new Nt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{let l=new Pn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Nt(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{let l=new Pn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Nt(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:Cw(c.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function Cw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}function Yn(n){n=Fe(n,be);let e=Fe(n.firestore,it);return Tw(di(e),n._key).then(t=>kp(e,n,t))}var Wn=class extends ro{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}};function Sp(n){n=Fe(n,si);let e=Fe(n.firestore,it),t=di(e),r=new Wn(e);return bp(n._query),bw(t,n._query).then(i=>new io(e,r,n,i))}function po(n,e,t){n=Fe(n,be);let r=Fe(n.firestore,it),i=Ap(n.converter,e,t);return Pp(r,[yp(Ju(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ve.none())])}function fi(n,e,t,...r){n=Fe(n,be);let i=Fe(n.firestore,it),s=Ju(i),a;return a=typeof(e=ae(e))=="string"||e instanceof an?vp(s,"updateDoc",n._key,e,t,r):_p(s,"updateDoc",n._key,e),Pp(i,[a.toMutation(n._key,Ve.exists(!0))])}function Rp(n,...e){var t,r,i;n=ae(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||wf(e[a])||(s=e[a],a++);let c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(wf(e[a])){let _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[a+2]=(i=_.complete)===null||i===void 0?void 0:i.bind(_)}let l,d,p;if(n instanceof be)d=Fe(n.firestore,it),p=oo(n._key.path),l={next:_=>{e[a]&&e[a](kp(d,n,_))},error:e[a+1],complete:e[a+2]};else{let _=Fe(n,si);d=Fe(_.firestore,it),p=_._query;let T=new Wn(d);l={next:R=>{e[a]&&e[a](new io(d,T,_,R))},error:e[a+1],complete:e[a+2]},bp(n._query)}return function(T,R,N,V){let D=new ii(V),$=new ni(R,D,N);return T.asyncQueue.enqueueAndForget(async()=>ju(await Ys(T),$)),()=>{D.eu(),T.asyncQueue.enqueueAndForget(async()=>zu(await Ys(T),$))}}(di(d),p,c,l)}function Pp(n,e){return function(r,i){let s=new je;return r.asyncQueue.enqueueAndForget(async()=>dw(await Iw(r),i,s)),s.promise}(di(n),e)}function kp(n,e,t){let r=t.docs.get(e._key),i=new Wn(n);return new ci(n,i,e._key,r,new Nt(t.hasPendingWrites,t.fromCache),e.converter)}var Dw={maxAttempts:5};function Br(n,e){if((n=ae(n)).firestore!==e)throw new O(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}var Cu=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Ju(t)}get(t){let r=Br(t,this._firestore),i=new ku(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return M();let a=s[0];if(a.isFoundDocument())return new Gn(this._firestore,i,a.key,a,r.converter);if(a.isNoDocument())return new Gn(this._firestore,i,r._key,null,r.converter);throw M()})}set(t,r,i){let s=Br(t,this._firestore),a=Ap(s.converter,r,i),c=yp(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,i);return this._transaction.set(s._key,c),this}update(t,r,i,...s){let a=Br(t,this._firestore),c;return c=typeof(r=ae(r))=="string"||r instanceof an?vp(this._dataReader,"Transaction.update",a._key,r,i,s):_p(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,c),this}delete(t){let r=Br(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=Br(e,this._firestore),r=new Wn(this._firestore);return super.get(e).then(i=>new ci(this._firestore,r,t._key,i._document,new Nt(!1,!1),t.converter))}};function un(n,e,t){n=Fe(n,it);let r=Object.assign(Object.assign({},Dw),t);return function(s){if(s.maxAttempts<1)throw new O(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,a,c){let l=new je;return s.asyncQueue.enqueueAndForget(async()=>{let d=await Ew(s);new Iu(s.asyncQueue,d,c,a,l).cu()}),l.promise}(di(n),i=>e(new Cu(n,i)),r)}function mo(){return new Su("serverTimestamp")}(function(e,t=!0){(function(i){Kn=i})(Rt),St(new Be("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),c=new it(new Za(r.getProvider("auth-internal")),new rc(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ds(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),We(qd,"4.7.5",e),We(qd,"4.7.5","esm2017")})();var Cp="ABCDEFGHJKLMNPQRSTUVWXYZ";function Zu(){let n="";for(let e=0;e<4;e++)n+=Cp[Math.floor(Math.random()*Cp.length)];return n}function Nw(n){return n.length<=3?n:n.endsWith("ies")&&n.length>4?n.slice(0,-3)+"y":/(ss|x|z|ch|sh)es$/.test(n)?n.slice(0,-2):n.endsWith("s")&&!n.endsWith("ss")&&!n.endsWith("us")&&!n.endsWith("is")?n.slice(0,-1):n}function ke(n){return String(n).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/&/g," and ").replace(/[^a-z0-9 ]+/g," ").split(/\s+/).filter(Boolean).filter((e,t,r)=>!(t===0&&r.length>1&&(e==="the"||e==="a"||e==="an"))).map(Nw).join(" ")}function pi(n){return String(n).trim().replace(/\s+/g," ").slice(0,40)}function el(n,e){return(e||[]).includes(ke(n))}function Dp(n){return n.length>=2&&n.every(e=>e.norm===n[0].norm)}function xw(n,e){let t=Array.from({length:e.length+1},(r,i)=>i);for(let r=1;r<=n.length;r++){let i=t[0];t[0]=r;for(let s=1;s<=e.length;s++){let a=t[s];t[s]=Math.min(t[s]+1,t[s-1]+1,i+(n[r-1]===e[s-1]?0:1)),i=a}}return t[e.length]}function Ow(n,e){let t=ke(n),r=ke(e);if(t===r)return!0;let i=Math.min(t.length,r.length),s=xw(t,r);if(i>=5&&s<=1||i>=9&&s<=2)return!0;let a=t.split(" "),c=r.split(" ");return a.every(l=>c.includes(l))||c.every(l=>a.includes(l))}function tl(n){let e={};n.forEach(r=>{let i=ke(r);e[i]=(e[i]||0)+1});let t=Object.keys(e).sort((r,i)=>e[i]-e[r])[0];return n.find(r=>ke(r)===t)}function nl(n){if(n.length<2)return!1;let e=tl(n);return n.every(t=>Ow(t,e))&&!n.every(t=>ke(t)===ke(e))}var Np=`
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
`).map(n=>n.trim()).filter(Boolean);var rl=`
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
`).map(n=>n.split("|").map(e=>e.trim())).filter(([n,e])=>n&&e).map(([n,e])=>({word:n,def:e}));var de=null,go=!1;try{go=localStorage.getItem("samesies.muted")==="1"}catch{}var mi=()=>go;function Op(n){go=n;try{localStorage.setItem("samesies.muted",n?"1":"0")}catch{}}function Vp(){try{de||(de=new(window.AudioContext||window.webkitAudioContext)),de.state==="suspended"&&de.resume()}catch{}}function il(){return!go&&de&&de.state==="running"}function Vw(){let n=de.createBuffer(1,de.sampleRate*.08,de.sampleRate),e=n.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=(Math.random()*2-1)*(1-t/e.length);return n}function xp(n,e){let t=de.createBufferSource();t.buffer=Vw();let r=de.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.8;let i=de.createGain();i.gain.value=e,t.connect(r).connect(i).connect(de.destination),t.start(n)}function Xn(n,e,t,r=.18,i="triangle"){let s=de.createOscillator();s.type=i,s.frequency.value=n;let a=de.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(r,e+.02),a.gain.exponentialRampToValueAtTime(1e-4,e+t),s.connect(a).connect(de.destination),s.start(e),s.stop(e+t+.05)}function Lp(n=1.4){if(!il())return;let e=de.currentTime;for(let t=0;t<n;t+=.045)xp(e+t,.08+.35*(t/n));xp(e+n,.7),Xn(523,e+n,.5,.15),Xn(784,e+n,.6,.12)}function Mp(){if(!il())return;let n=de.currentTime;Xn(440,n,.25),Xn(554,n+.12,.35)}function Fp(){if(!il())return;let n=de.currentTime;[523,659,784,1047].forEach((e,t)=>Xn(e,n+t*.11,t===3?.9:.3,.2)),Xn(1319,n+.44,.9,.08,"sine")}function Up(n=["#FF6A4D","#FFFFFF","#FFB020","#8A8CFF","#1FB895"]){if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;let e=document.createElement("div");e.className="confetti",e.setAttribute("aria-hidden","true");for(let t=0;t<90;t++){let r=document.createElement("i");r.style.left=Math.random()*100+"%",r.style.background=n[t%n.length],r.style.animationDelay=Math.random()*.6+"s",r.style.animationDuration=2.2+Math.random()*1.6+"s",r.style.setProperty("--drift",Math.random()*160-80+"px"),r.style.setProperty("--spin",Math.random()*1080-540+"deg"),t%3===0&&(r.style.borderRadius="50%"),e.appendChild(r)}document.body.appendChild(e),setTimeout(()=>e.remove(),4800)}var Lw={apiKey:"AIzaSyAEbf9VBdvXdHUSlH0rZgHL7SmvXyAn_nM",authDomain:"thesamesiesgame.firebaseapp.com",projectId:"thesamesiesgame",storageBucket:"thesamesiesgame.firebasestorage.app",messagingSenderId:"120235814862",appId:"1:120235814862:web:4f5762bc1a08d2f228059f"},Wp=ha(Lw),Kp=qa(Wp),_t=mp(Wp),ze=document.getElementById("app"),De={get(n,e=null){try{let t=localStorage.getItem("samesies."+n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem("samesies."+n,JSON.stringify(e))}catch{}}},A={uid:null,authError:null,name:De.get("name",""),tour:De.get("toured",!1)?null:0,code:new URLSearchParams(location.search).get("g")?.toUpperCase()||null,game:null,gameMissing:!1,mySub:null,showUsed:!1,busy:!1,error:"",toast:""},ln=null,sl=!1,Bp=null,al=new Set,ol={},q=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ne=n=>Qu(_t,"games",n),cl=(n,e,t)=>Qu(_t,"games",n,"rounds",String(e),"subs",t),Mw=n=>`${location.origin}${location.pathname}?g=${n}`;function Hp(n){let e=n?`${location.pathname}?g=${n}`:location.pathname;history.replaceState(null,"",e)}function Fw(n){let e=De.get("games",[]).filter(t=>t.code!==n);e.unshift({code:n,at:Date.now()}),De.set("games",e.slice(0,6))}function vt(n){A.toast=n,X(),clearTimeout(vt.t),vt.t=setTimeout(()=>{A.toast="",X()},3200)}function Ne(n){console.error(n),A.busy=!1,A.error=typeof n=="string"?n:"Something went wrong. Check your connection and try again.",X()}var Ft=(n=170,e="#4B4DDB",t="#FF6A4D")=>`<svg width="${n}" height="${Math.round(n*.62)}" viewBox="0 -2 200 124" aria-hidden="true"><circle cx="76" cy="60" r="58" fill="none" stroke="${e}" stroke-width="3.5" opacity="0.18"/><circle cx="124" cy="60" r="58" fill="none" stroke="${t}" stroke-width="3.5" opacity="0.18"/><circle cx="76" cy="60" r="44" fill="none" stroke="${e}" stroke-width="4.5" opacity="0.42"/><circle cx="124" cy="60" r="44" fill="none" stroke="${t}" stroke-width="4.5" opacity="0.42"/><circle cx="76" cy="60" r="30" fill="${e}" opacity="0.9"/><circle cx="124" cy="60" r="30" fill="${t}" opacity="0.85"/><path d="M100 47 L101.9 58.1 L107 60 L101.9 61.9 L100 73 L98.1 61.9 L93 60 L98.1 58.1Z" fill="#FFFFFF"/></svg>`,Uw='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',Qp='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>',Bw='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',ul=`<button class="icon-btn back" data-act="home" aria-label="Step out to the start screen">${Bw}</button>`,qw=n=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/>${n?'<path d="M17 9l5 6M22 9l-5 6"/>':'<path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12"/>'}</svg>`,$w='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';function Jp(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}var qp=(()=>{let n=20261012,e=()=>(n=(n*1664525+1013904223)%4294967296,n/4294967296),t=rl.map((r,i)=>i);for(let r=t.length-1;r>0;r--){let i=Math.floor(e()*(r+1));[t[r],t[i]]=[t[i],t[r]]}return t})();function jw(n=Jp()){let e=Math.round(Date.UTC(...n.split("-").map((t,r)=>r===1?t-1:+t))/864e5);return Array.from({length:5},(t,r)=>rl[qp[(e*5+r)%qp.length]])}async function ll(n={}){let e=pi(A.name);if(!e)return Ne("Type your name first.");A.busy=!0,A.error="",X();try{let t;for(let r=0;r<8&&(t=Zu(),!!(await Yn(ne(t))).exists());r++);await po(ne(t),{code:t,hostUid:A.uid,status:"lobby",createdAt:mo(),players:{[A.uid]:{name:e,joinedAt:Date.now()}},order:[A.uid],round:1,revealed:0,submitted:{},history:[],used:[],winWord:null,nudges:{},...n.daily?{daily:{date:Jp(),words:jw()}}:{}}),A.busy=!1,er(t)}catch(t){Ne(t)}}async function $p(n,e){let t=pi(e||A.name),r=String(n||"").trim().toUpperCase();if(!t)return Ne("Type your name first.");if(!/^[A-Z]{4}$/.test(r))return Ne("Game codes are 4 letters.");A.busy=!0,A.error="",X();try{await un(_t,async i=>{let s=await i.get(ne(r));if(!s.exists())throw"No game with that code.";let a=s.data();if(!a.players[A.uid]){if(a.status!=="lobby")throw"That game already started.";if(a.order.length>=5)throw`That game is full (${5} players max).`;i.update(ne(r),{[`players.${A.uid}`]:{name:t,joinedAt:Date.now()},order:[...a.order,A.uid]})}}),A.busy=!1,er(r)}catch(i){Ne(i)}}async function zw(){let n=A.game;if(!(n.order.length<2))try{if(n.daily){let e=n.order.map((t,r)=>({uid:t,name:n.players[t].name,word:n.daily.words[r].word,def:n.daily.words[r].def}));await fi(ne(n.code),{status:"playing",round:2,revealed:1,submitted:{},history:[{round:1,dealt:!0,words:e}],used:[...new Set(e.map(t=>ke(t.word)))]})}else await fi(ne(n.code),{status:"playing",round:1})}catch(e){Ne(e)}}async function Gw(n){let e=A.game,t=pi(n);if(!t)return Ne("Type a word first.");if(el(t,e.used))return Ne(`"${t}" has already been used. Pick another!`);let r=e.round;A.busy=!0,A.error="",X();try{try{await po(cl(e.code,r,A.uid),{word:t,norm:ke(t),at:mo()})}catch(i){if(!(await Yn(cl(e.code,r,A.uid))).exists())throw i}A.mySub={round:r,word:t},await un(_t,async i=>{let a=(await i.get(ne(e.code))).data();if(a.status!=="playing"||a.round!==r)return;let c={...a.submitted,[A.uid]:!0},l=a.order.every(d=>c[d]);i.update(ne(e.code),{submitted:c,...l?{revealed:r}:{}})}),A.busy=!1,X()}catch(i){Ne(i)}}async function Ww(n){if(!sl){sl=!0;try{let e=n.round,t=await Sp(pp(_t,"games",n.code,"rounds",String(e),"subs")),r={};if(t.forEach(s=>{r[s.id]=s.data()}),!n.order.every(s=>r[s]))return;let i=n.order.map(s=>({uid:s,name:n.players[s].name,word:r[s].word,norm:r[s].norm}));await un(_t,async s=>{let c=(await s.get(ne(n.code))).data();if(c.status!=="playing"||c.round!==e||c.revealed!==e)return;let l=[...c.history,{round:e,words:i.map(({uid:d,name:p,word:_})=>({uid:d,name:p,word:_}))}];if(Dp(i))s.update(ne(n.code),{history:l,status:"won",winWord:i[0].word});else{let d=[...new Set([...c.used,...i.map(p=>p.norm)])];s.update(ne(n.code),{history:l,used:d,round:e+1,submitted:{}})}})}catch(e){console.error("resolve failed",e)}finally{sl=!1}}}async function Kw(n){let e=A.game;if(ol[n]&&Date.now()-ol[n]<6e4)return vt("Give them a minute!");ol[n]=Date.now();try{await fi(ne(e.code),{[`nudges.${n}`]:{at:Date.now(),from:e.players[A.uid].name}}),vt(`Nudged ${e.players[n].name} \u{1F44B}`)}catch(t){Ne(t)}}async function Hw(){let n=A.game,e=n.history[n.history.length-1];if(e)try{await un(_t,async t=>{let r=(await t.get(ne(n.code))).data(),i=r.history[r.history.length-1];r.status!=="playing"||!i||i.round!==e.round||r.vote?.round===e.round||t.update(ne(n.code),{vote:{round:e.round,by:A.uid,yes:{[A.uid]:!0},no:{},result:null}})})}catch(t){Ne(t)}}async function jp(n){let e=A.game;try{await un(_t,async t=>{let r=(await t.get(ne(e.code))).data(),i=r.vote,s=r.history[r.history.length-1];if(r.status!=="playing"||!i||i.result||!s||i.round!==s.round)return;let a={...i.yes},c={...i.no};n?a[A.uid]=!0:c[A.uid]=!0,n?r.order.every(l=>a[l])?t.update(ne(e.code),{vote:{...i,yes:a,no:c,result:"yes"},status:"won",wonBy:"vote",winWord:tl(s.words.map(l=>l.word)),history:r.history}):t.update(ne(e.code),{vote:{...i,yes:a,no:c}}):t.update(ne(e.code),{vote:{...i,yes:a,no:c,result:"no"}})})}catch(t){Ne(t)}}async function Qw(){let n=A.game;A.busy=!0,X();try{let e;for(let t=0;t<8&&(e=Zu(),!!(await Yn(ne(e))).exists());t++);await po(ne(e),{code:e,hostUid:A.uid,status:"lobby",createdAt:mo(),players:{[A.uid]:{name:n.players[A.uid].name,joinedAt:Date.now()}},order:[A.uid],round:1,revealed:0,submitted:{},history:[],used:[],winWord:null,nudges:{}}),al.add(e),await fi(ne(n.code),{next:e}),A.busy=!1,er(e)}catch(e){Ne(e)}}async function Jw(n){let e=n.next;try{let t=await Yn(ne(e)),r=t.exists()?t.data():null;if(!r)return X();if(!r.players[A.uid]){if(r.status!=="lobby"||r.order.length>=5)return X();await un(_t,async i=>{let s=(await i.get(ne(e))).data();s.players[A.uid]||s.status!=="lobby"||s.order.length>=5||i.update(ne(e),{[`players.${A.uid}`]:{name:n.players[A.uid].name,joinedAt:Date.now()},order:[...s.order,A.uid]})}),vt(`${r.players[r.hostUid]?.name||"Someone"} started a rematch. You're in!`)}er(e)}catch{X()}}function Yw(n){let e=n.history.map((i,s)=>{let a={};i.words.forEach(d=>{let p=ke(d.word);a[p]=(a[p]||0)+1});let c=s===n.history.length-1;return`${i.words.map(d=>c?"\u{1F7E3}":a[ke(d.word)]>1?"\u{1F7E0}":"\u26AA").join("")} ${i.words.map(d=>d.word).join(" \xB7 ")}`}),t=`${n.history.length} round${n.history.length===1?"":"s"}`;return`${n.wonBy==="vote"?`\u{1F9E0} Brainsmith: close enough on "${n.winWord}" in ${t}!`:`\u{1F9E0} Brainsmith: we forged "${n.winWord}" in ${t}!`}

${e.join(`
`)}

Play with us:`}async function Xw(){let n=A.game,e=location.origin+location.pathname,t=Yw(n);try{navigator.share?await navigator.share({title:"Brainsmith",text:t,url:e}):(await navigator.clipboard.writeText(`${t} ${e}`),vt("Copied! Paste it in your group text."))}catch{}}async function Zw(){let n=A.game;pi(A.name)||(A.name=n.players[A.uid]?.name||""),Yp(),ll()}function er(n){ln&&ln(),A.code=n,A.game=null,A.gameMissing=!1,A.mySub=null,A.error="",A.showUsed=!1,Hp(n),X(),ln=Rp(ne(n),async e=>{if(!e.exists()){A.gameMissing=!0,A.game=null,X();return}let t=e.data();A.game=t,t.players[A.uid]&&Fw(n);let r=t.nudges?.[A.uid];if(r&&r.at>De.get("nudgeSeen",0)&&(De.set("nudgeSeen",r.at),Date.now()-r.at<10*6e4)){vt(`${r.from} nudged you! Your word, please \u{1F440}`);try{navigator.vibrate?.(200)}catch{}}if(t.status==="won"&&t.next&&t.players[A.uid]&&!al.has(t.next)){al.add(t.next),Jw(t);return}if(t.players[A.uid]&&A.tour!==null&&(A.tour=null,De.set("toured",!0)),t.vote&&!t.vote.result&&t.vote.by!==A.uid){let i=`${n}.${t.vote.round}`;if(Bp!==i){Bp=i,vt(`${t.players[t.vote.by]?.name||"Someone"} asked: close enough?`);try{navigator.vibrate?.(200)}catch{}}}if(t.status==="playing"&&t.submitted?.[A.uid]&&A.mySub?.round!==t.round)try{let i=await Yn(cl(n,t.round,A.uid));i.exists()&&(A.mySub={round:t.round,word:i.data().word})}catch{}t.status==="playing"&&t.revealed===t.round&&Ww(t),X()},e=>Ne(e))}function Yp(){ln&&ln(),ln=null,A.code=null,A.game=null,A.gameMissing=!1,A.error="",Hp(null),X()}function yo(n,e){let t=n.used.length;return`
  <header class="bar">
    ${ul}
    <div class="bar-title">
      <span class="eyebrow">GAME \xB7 ${q(n.code)}</span>
      <h1 class="h-round">${q(e)}</h1>
    </div>
    <button class="icon-btn quiet" data-act="mute" aria-label="${mi()?"Turn sound on":"Turn sound off"}" aria-pressed="${mi()}">${qw(mi())}</button>
    ${n.status!=="lobby"?`<button class="icon-btn" data-act="used" aria-label="Used words, ${t} so far">${Uw}</button>`:""}
  </header>`}function zp(n="Loading\u2026"){return`<main class="screen center"><div class="pulse">${Ft(120)}</div><p class="muted">${q(n)}</p></main>`}function eI(){let n=De.get("games",[]);return`
  <main class="screen">
    <div class="hero">
      ${Ft(170)}
      <h1 class="wordmark">Brain<b>smith</b></h1>
      <p class="tagline">Two words in. Meet in the middle.</p>
    </div>
    <div class="grow"></div>
    <form class="stack" data-form="create">
      <label for="name" class="label">Your name</label>
      <input id="name" name="name" class="input" autocomplete="nickname" maxlength="40" value="${q(A.name)}" placeholder="What should we call you?">
      <button class="btn primary" ${A.busy?"disabled":""}>Start a new game</button>
    </form>
    <button class="daily-card" data-act="daily" ${A.busy?"disabled":""}>
      <span class="daily-top"><span class="eyebrow">DAILY WORDS</span><span class="muted small">${q(new Date().toLocaleDateString(void 0,{month:"short",day:"numeric"}))}</span></span>
      <span class="daily-title">Play today\u2019s bonkers words</span>
      <span class="muted small">Everyone\u2019s dealt a different strange word. Connect them all.</span>
    </button>
    <div class="or"><span></span>or<span></span></div>
    <form class="row" data-form="join">
      <label for="code" class="sr-only">Game code</label>
      <input id="code" name="code" class="input code" maxlength="4" autocapitalize="characters" autocomplete="off" placeholder="Game code">
      <button class="btn outline" ${A.busy?"disabled":""}>Join</button>
    </form>
    ${A.error?`<p class="error" role="alert">${q(A.error)}</p>`:""}
    ${n.length?`
      <div class="recent">
        <span class="eyebrow">YOUR GAMES</span>
        <div class="chips">${n.map(e=>`<button class="chip" data-act="open" data-code="${q(e.code)}">${q(e.code)}</button>`).join("")}</div>
      </div>`:""}
    <p class="fine">2 to 5 players \xB7 no sign-up \xB7 <button class="linkish inline-link" data-act="tour">How to play</button></p>
  </main>`}function tI(n){let e=n.order.length>=5,t=n.status!=="lobby";return`
  <main class="screen">
    <header class="bar">${ul}</header>
    <div class="hero tight">
      ${Ft(140)}
      <h1 class="wordmark small">Brain<b>smith</b></h1>
      <p class="tagline">${q(n.players[n.hostUid]?.name||"A friend")} invited you to game <strong>${q(n.code)}</strong></p>
    </div>
    <div class="grow"></div>
    ${t?`<p class="notice">This game already started. Ask them to start a new one and send you the code.</p>
      <button class="btn outline" data-act="home">Go to start</button>`:e?'<p class="notice">This game is full.</p><button class="btn outline" data-act="home">Go to start</button>':`<form class="stack" data-form="joinlink">
        <label for="name" class="label">Your name</label>
        <input id="name" name="name" class="input" autocomplete="nickname" maxlength="40" value="${q(A.name)}" placeholder="What should we call you?">
        <button class="btn primary" ${A.busy?"disabled":""}>Join the game</button>
      </form>`}
    ${A.error?`<p class="error" role="alert">${q(A.error)}</p>`:""}
  </main>`}function nI(n){let e=n.hostUid===A.uid,t=n.order.length>=2;return`
  <main class="screen">
    ${yo(n,"Getting ready")}
    <section class="card center-text">
      ${n.daily?'<span class="badge">Daily Words game</span>':""}
      <span class="muted">Invite with this code</span>
      <div class="big-code">${q(n.code)}</div>
      <button class="btn soft" data-act="share">Share invite link</button>
    </section>
    <section class="stack">
      <span class="eyebrow">PLAYERS \xB7 ${n.order.length} OF ${5}</span>
      ${n.order.map(r=>`
        <div class="player">
          <div class="dot done">${Qp}</div>
          <span class="pname">${q(n.players[r].name)}${r===A.uid?" (you)":""}</span>
          ${r===n.hostUid?'<span class="muted small">Host</span>':""}
        </div>`).join("")}
    </section>
    <div class="grow"></div>
    ${e?`<button class="btn primary" data-act="start" ${t?"":"disabled"}>${t?"Everyone\u2019s here, start!":"Waiting for at least one more"}</button>`:`<p class="fine">Waiting for ${q(n.players[n.hostUid]?.name||"the host")} to start\u2026</p>`}
  </main>`}function rI(n){let e=n.history[n.history.length-1],t=!!n.submitted?.[A.uid],r=n.order.filter(i=>!n.submitted?.[i]);return`
  <main class="screen">
    ${yo(n,`Round ${n.round}`)}
    ${e&&n.vote?.round===e.round&&!n.vote.result?Xp(n):""}
    <section class="card center-text">
      ${e?`
        <span class="muted">Connect these</span>
        <div class="word-chips">${e.words.map(i=>`<span class="word-chip">${q(i.word)}</span>`).join("")}</div>
        ${e.dealt?`<div class="defs">${e.words.filter(i=>i.uid===A.uid).map(i=>`<span>Your word, <strong>${q(i.word)}</strong>, means ${q(i.def)}.</span>`).join("")}</div>`:""}
        ${n.vote?.round===e.round||e.dealt?"":'<button class="linkish close-link" data-act="vote">Close enough? Ask to count it</button>'}`:`
        <span class="muted">Round one</span>
        <p class="prompt">Pick any word in the known universe.</p>
        <span class="muted small">Nouns are easiest. Adjectives make it harder.</span>`}
    </section>
    ${t?`
      <section class="locked">
        <span class="muted">You locked in</span>
        <div class="locked-word">${q(A.mySub?.round===n.round?A.mySub.word:"\u2713")}</div>
        <span class="muted small">${r.length?`Waiting on ${r.map(i=>q(n.players[i].name)).join(", ")}\u2026`:"Revealing\u2026"}</span>
      </section>`:`
      <form class="stack" data-form="word">
        <label for="word" class="label">Your word</label>
        <input id="word" name="word" class="input big" maxlength="40" autocomplete="off" autocorrect="on" spellcheck="true" autocapitalize="sentences" placeholder="Type it here">
        <button class="btn primary" ${A.busy?"disabled":""}>Lock it in</button>
        ${e?"":'<button type="button" class="btn soft" data-act="starter">Stuck? Give me a word</button>'}
        <span class="fine">Nobody sees your word until everyone\u2019s in.</span>
      </form>`}
    ${A.error?`<p class="error" role="alert">${q(A.error)}</p>`:""}
    <div class="grow"></div>
    <section class="stack tight">
      <span class="eyebrow">PLAYERS</span>
      ${n.order.map(i=>{let s=!!n.submitted?.[i],a=i===A.uid;return`
        <div class="player">
          ${s?`<div class="dot done">${Qp}</div>`:'<div class="dot"></div>'}
          <span class="pname">${q(n.players[i].name)}${a?" (you)":""}</span>
          ${s?'<span class="muted small">Locked in</span>':a?'<span class="muted small">Thinking\u2026</span>':`<button class="btn nudge" data-act="nudge" data-uid="${q(i)}">Nudge</button>`}
        </div>`}).join("")}
    </section>
  </main>`}function iI(n){let e={};return n.forEach(t=>{var r;(e[r=ke(t.word)]||(e[r]=[])).push(t)}),Object.values(e).filter(t=>t.length>1).sort((t,r)=>r.length-t.length)}function sI(n){return n.length<=2?n.join(" and "):n.slice(0,-1).join(", ")+" and "+n[n.length-1]}function oI(n,e){let t=iI(e.words),r=new Set(t.flat().map(a=>a.uid)),i=t.length?t.map(a=>`${sI(a.map(c=>q(c.name)))} ${a.length===2?"both":"all"} said <em>${q(a[0].word)}</em>!`).join("<br>"):"";if(e.dealt)return aI(n,e);let s=t.length?"So close! Keep going.":e.words.length===2?"Not yet! Next round, connect these two.":"Not yet! Next round, connect all of these.";return`
  <main class="screen reveal-screen">
    ${yo(n,`Round ${e.round} is in!`)}
    <section class="stack reveal">
      ${e.words.map(a=>`
        <div class="reveal-card${r.has(a.uid)?" matched":""}">
          <span class="rname">${q(a.name)}</span>
          <span class="rword">${q(a.word)}</span>
        </div>`).join("")}
    </section>
    <div class="after-reveal stack">
    ${i?`<div class="so-close"><span class="so-close-names">${i}</span><span class="muted">${s}</span></div>`:`<div class="row msg">${Ft(60)}<span class="muted">${q(s)}</span></div>`}
    ${n.vote?.round===e.round?Xp(n):`<button class="btn ${nl(e.words.map(a=>a.word))?"close-hot":"soft"}" data-act="vote">${nl(e.words.map(a=>a.word))?"Those look the same. Close enough?":"Close enough?"}</button>`}
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${e.round}">On to round ${e.round+1}</button>
  </main>`}function aI(n,e){return`
  <main class="screen reveal-screen">
    ${yo(n,"Bonkers words!")}
    <section class="stack reveal">
      ${e.words.map(t=>`
        <div class="reveal-card">
          <span class="rname">${q(t.name)} got</span>
          <span class="rword">${q(t.word)}</span>
          ${t.uid===A.uid?`<span class="rdef">${q(t.def)}</span>`:'<span class="rdef">Only they know what it means</span>'}
        </div>`).join("")}
    </section>
    <div class="after-reveal stack">
      <div class="row msg">${Ft(60)}<span class="muted">Everyone got a different word, and only you can see your definition. Next round, find one word that connects them all.</span></div>
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${e.round}">Let\u2019s connect them</button>
  </main>`}function Xp(n){let e=n.vote,t=q(n.players[e.by]?.name||"Someone");if(e.result==="no")return`<section class="vote done"><span class="muted">${q(n.players[Object.keys(e.no)[0]]?.name||"Someone")} said not quite, so play on.</span></section>`;let r=e.yes[A.uid]||e.no[A.uid],i=n.order.filter(s=>!e.yes[s]&&!e.no[s]).map(s=>q(n.players[s].name));return`
  <section class="vote" aria-live="polite">
    <span class="vote-title">Close enough?</span>
    <span class="muted">${e.by===A.uid?"You asked":`${t} asked`} to count round ${e.round} as a match. Everyone has to agree.</span>
    ${r?`<span class="muted small">${i.length?`Waiting on ${i.join(", ")}\u2026`:"Counting\u2026"}</span>`:'<div class="row"><button class="btn primary grow" data-act="yes">Yes, count it</button><button class="btn outline" data-act="no">No</button></div>'}
  </section>`}function cI(n){let e=n.order.map(r=>n.players[r].name),t=e.length===2?e.join(" and "):e.slice(0,-1).join(", ")+" and "+e[e.length-1];return`
  <main class="screen win">
    <div class="win-top">
      <div class="pop">${Ft(190,"#FFFFFF","#FF6A4D")}</div>
      <h1 class="win-title">${n.wonBy==="vote"?"Close enough!":"Forged!"}</h1>
      <span class="win-sub">${n.wonBy==="vote"?"You all agreed on":"Everyone said"}</span>
      <div class="win-word">${q(n.winWord)}</div>
      <span class="win-sub">${q(t)} \xB7 ${n.history.length} round${n.history.length===1?"":"s"}</span>
    </div>
    <div class="grow"></div>
    <section class="chain">
      <span class="eyebrow light">HOW YOU GOT THERE</span>
      ${n.history.map((r,i)=>`<span class="${i===n.history.length-1?"strong":""}">${r.words.map(s=>q(s.word)).join(" \xB7 ")}</span>`).join("")}
    </section>
    <button class="btn coral" data-act="sharegame">Share how we did it</button>
    ${n.next?`<button class="btn white" data-act="open" data-code="${q(n.next)}">Join the next game</button>`:`<button class="btn white" data-act="again" ${A.busy?"disabled":""}>Play again, same crew</button>`}
    <div class="row">
      <button class="btn ghost-light grow" data-act="newcrew" ${A.busy?"disabled":""}>New game, new people</button>
      <button class="btn ghost-light grow" data-act="home">Back to start</button>
    </div>
  </main>`}var Zn=[{title:"Everyone picks a word",body:"Any word at all. Nobody sees it until everyone\u2019s locked in."},{title:"They all flip at once",body:"Then, next round, everyone looks for one word that connects them all."},{title:"Match to win",body:"Keep connecting until every single player types the same word. Forged!"}];function uI(){let n=A.tour,e=Zn[n];return`
  <div class="sheet-backdrop tour" data-act="tour-skip">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="tour-title" data-stop>
      <div class="grabber"></div>
      <div class="tour-art">${Ft(110)}</div>
      <span class="eyebrow">HOW TO PLAY \xB7 ${n+1} OF ${Zn.length}</span>
      <h2 id="tour-title" class="h-sheet">${e.title}</h2>
      <p class="muted tour-body">${e.body}</p>
      <div class="dots" aria-hidden="true">${Zn.map((t,r)=>`<span class="${r===n?"on":""}"></span>`).join("")}</div>
      <button class="btn primary" data-act="tour-next">${n===Zn.length-1?"Let\u2019s play":"Next"}</button>
      ${n<Zn.length-1?'<button class="btn ghost" data-act="tour-skip">Skip</button>':""}
    </div>
  </div>`}function lI(n){return`
  <div class="sheet-backdrop" data-act="closeused">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="used-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="used-title" class="h-sheet">Used words</h2>
        <button class="icon-btn soft" data-act="closeused" aria-label="Close">${$w}</button>
      </div>
      <p class="muted">These are off the table. If you try one, we\u2019ll quietly ask for another.</p>
      ${n.history.length?n.history.map(e=>`
        <div class="stack tight">
          <span class="eyebrow">ROUND ${e.round}</span>
          <div class="chips">${e.words.filter((t,r,i)=>i.findIndex(s=>ke(s.word)===ke(t.word))===r).map(t=>`<span class="chip static">${q(t.word)}</span>`).join("")}</div>
        </div>`).join(""):'<p class="muted">Nothing yet. Round one is wide open.</p>'}
    </div>
  </div>`}function hI(){if(A.authError)return`<main class="screen center"><p class="error">${q(A.authError)}</p></main>`;if(!A.uid)return zp();if(!A.code)return eI();if(A.gameMissing)return`<main class="screen center"><header class="bar top-left">${ul}</header>${Ft(120)}<p class="notice">No game with code ${q(A.code)}.</p><button class="btn outline" data-act="home">Go to start</button></main>`;let n=A.game;if(!n)return zp("Finding your game\u2026");if(!n.players[A.uid])return tI(n);if(n.status==="lobby")return nI(n);if(n.status==="won")return cI(n);let e=n.history[n.history.length-1],t=De.get(`seen.${n.code}`,0);return e&&e.round>t?oI(n,e):rI(n)}function X(){let n=document.activeElement,e={};ze.querySelectorAll("input").forEach(d=>{e[d.id]=d.value});let t=n&&n.tagName==="INPUT"?n.id:null,r=t?n.selectionStart:null,i=A.game,s=!!ze.querySelector(".sheet-backdrop:not(.tour)"),a=ze.querySelector(".toast")?.textContent;ze.innerHTML=hI()+(A.showUsed&&i?lI(i):"")+(A.tour!==null&&!A.code?uI():"")+(A.toast?`<div class="toast" role="status">${q(A.toast)}</div>`:"");let c=ze.querySelector("main"),l=c?c.className+"|"+(c.querySelector("h1")?.textContent||""):"";if(l===X.lastKey?c.classList.add("no-anim"):c&&dI(c,i),X.lastKey=l,s&&ze.querySelector(".sheet-backdrop")?.classList.add("no-anim"),a&&a===A.toast&&ze.querySelector(".toast")?.classList.add("no-anim"),ze.querySelectorAll("input").forEach(d=>{e[d.id]!==void 0&&d.id!=="name"&&(d.value=e[d.id]),d.id==="name"&&e.name!==void 0&&(d.value=e.name)}),t){let d=document.getElementById(t);if(d){d.focus();try{d.setSelectionRange(r,r)}catch{}}}}function dI(n,e){if(n.classList.contains("reveal-screen"))Lp(1.4),n.querySelector(".matched")&&setTimeout(Mp,1700);else if(n.classList.contains("win")){Up(),Fp();try{navigator.vibrate?.([80,60,160])}catch{}}}ze.addEventListener("input",n=>{if(n.target.id==="name"&&(A.name=n.target.value,De.set("name",A.name)),n.target.id==="code"&&(n.target.value=n.target.value.toUpperCase().replace(/[^A-Z]/g,"")),A.error){A.error="";let e=ze.querySelector(".error");e&&e.remove()}});ze.addEventListener("submit",n=>{n.preventDefault();let e=n.target.dataset.form,t=new FormData(n.target);e==="create"&&ll(),e==="join"&&$p(t.get("code")),e==="joinlink"&&$p(A.code),e==="word"&&Gw(t.get("word"))});ze.addEventListener("click",async n=>{let e=n.target.closest("[data-act]");if(!e||e.dataset.act==="closeused"&&n.target.closest("[data-stop]")&&!n.target.closest("button"))return;let t=e.dataset.act;if(t==="home"&&Yp(),t==="open"&&er(e.dataset.code),t==="start"&&zw(),t==="nudge"&&Kw(e.dataset.uid),t==="again"&&Qw(),t==="vote"&&Hw(),t==="sharegame"&&Xw(),t==="daily"&&ll({daily:!0}),t==="newcrew"&&Zw(),t==="mute"&&(Op(!mi()),X()),t==="starter"){let r=A.game?.used||[],i=Np.filter(a=>!el(a,r)),s=document.getElementById("word");s&&i.length&&(s.value=i[Math.floor(Math.random()*i.length)],s.focus())}if(t==="tour"&&(A.tour=0,X()),t==="tour-next"&&(A.tour<Zn.length-1?A.tour+=1:(A.tour=null,De.set("toured",!0)),X()),t==="tour-skip"&&!(n.target.closest("[data-stop]")&&!n.target.closest("button"))&&(A.tour=null,De.set("toured",!0),X()),t==="yes"&&jp(!0),t==="no"&&jp(!1),t==="used"&&(A.showUsed=!0,X()),t==="closeused"&&(A.showUsed=!1,X()),t==="seen"&&(De.set(`seen.${A.game.code}`,Number(e.dataset.round)),X()),t==="share"){let r=Mw(A.game.code),i=`Play Brainsmith with me! Code ${A.game.code}`;try{navigator.share?await navigator.share({title:"Brainsmith",text:i,url:r}):(await navigator.clipboard.writeText(r),vt("Invite link copied"))}catch{}}});document.addEventListener("pointerdown",Vp,{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&A.showUsed&&(A.showUsed=!1,X()),n.key==="Escape"&&A.tour!==null&&(A.tour=null,De.set("toured",!0),X())});X();Fa(Kp,n=>{n&&(A.uid=n.uid,A.code&&!ln?er(A.code):X())});Ma(Kp).catch(n=>{console.error(n),A.authError="Could not connect to Brainsmith. Check your connection and refresh.",X()});"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
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
*/
